<template>
	<view>
		<uni-nav-bar left-icon="arrowleft" @click-left="back" @click-right="submit" :statusBar="true" :rightText="'发布'">
			<view class="middleview" @tap="changefn">
				{{ lookinfo }}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		
		<!-- 多行输入框 -->
		<view class="inputtextarea">
			<textarea v-model="textareavalue" placeholder="说一句话" />
		</view>
		
		<!-- 上传多张图片 -->
		<view class="uni-uploader">
			<view class="uni-uploader-head">
				<view class="uni-uploader-title">点击可预览选好的图片</view>
				<view class="uni-uploader-info">{{imageList.length}}/9</view>
			</view>
			<view class="uni-uploader-body">
				<view class="uni-uploader__files">
					<block v-for="(image,index) in imageList" :key="index">
						<view class="uni-uploader__file">
							<view class="icon iconfont icon-shanchu" @tap="delect(index)"></view>
							<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
						</view>
					</block>
					<view class="uni-uploader__input-box">
						<view class="uni-uploader__input" @tap="chooseImage"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import permision from "@/common/permission.js"
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	let wholook = ['所有人可见', '仅自己可见'];
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		
		data() {
			return {
				lookinfo:'所有人可见',
				title:"title",
				textareavalue:"",
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
		onUnload() {
			this.imageList = [],
			this.sourceTypeIndex = 2,
			this.sourceType = ['拍照', '相册', '拍照或相册'],
			this.sizeTypeIndex = 2,
			this.sizeType = ['压缩', '原图', '压缩或原图'],
			this.countIndex = 8;
		},
		components:{
			uniNavBar,
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			submit(){
				console.log("发布")
			},
			changefn(){
				uni.showActionSheet({
				    itemList: ['所有人可见', '仅自己可见'],
				    success: (res) => {
						// console.log(res.tapIndex);
				        this.lookinfo = wholook[res.tapIndex]
				    },
				});
			},
			sourceTypeChange: function(e) {
				this.sourceTypeIndex = parseInt(e.target.value)
			},
			sizeTypeChange: function(e) {
				this.sizeTypeIndex = parseInt(e.target.value)
			},
			countChange: function(e) {
				this.countIndex = e.target.value;
			},
			// 选择图片
			chooseImage: async function() {
				// #ifdef APP-PLUS
				// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
				if (this.sourceTypeIndex !== 2) {
					let status = await this.checkPermission();
					if (status !== 1) {
						return;
					}
				}
				// #endif
			
				if (this.imageList.length === 9) {
					let isContinue = await this.isFullImg();
					console.log("是否继续?", isContinue);
					if (!isContinue) {
						return;
					}
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
					},
					fail: (err) => {
						// #ifdef APP-PLUS
						if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
							this.checkPermission(err.code);
						}
						// #endif
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = false;
								switch (this.sourceTypeIndex) {
									case 0:
										authStatus = res.authSetting['scope.camera'];
										break;
									case 1:
										authStatus = res.authSetting['scope.album'];
										break;
									case 2:
										authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
										break;
									default:
										break;
								}
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			},
			//判断图片是否已经到九张
			isFullImg: function() {
				return new Promise((res) => {
					uni.showModal({
						content: "已经有9张图片了,是否清空现有图片？",
						success: (e) => {
							if (e.confirm) {
								this.imageList = [];
								res(true);
							} else {
								res(false)
							}
						},
						fail: () => {
							res(false)
						}
					})
				})
			},
			// 预览图片
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			async checkPermission(code) {
				let type = code ? code - 1 : this.sourceTypeIndex;
				let status = permision.isIOS ? await permision.requestIOS(sourceType[type][0]) :
					await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :
						'android.permission.READ_EXTERNAL_STORAGE');
			
				if (status === null || status === 1) {
					status = 1;
				} else {
					uni.showModal({
						content: "没有开启权限",
						confirmText: "设置",
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					})
				}
			
				return status;
			},
			//删除图片
			delect(index){
				uni.showModal({
					title: '提示',
					content: '是否要删除该图片',
					success: (res)=> {
						if (res.confirm) {
							this.imageList.splice(index,1);
							this.$emit('uploud',this.imageList)
						}
					}
				});
			}
		}
	}
</script>

<style>
	.middleview{
		display: flex;
		width:97%;
		justify-content: center;
		align-items: center;
	}
	
	.inputtextarea{
		margin:5rpx 0;
		width:100%;
		border:1px solid #EEEEEE;
	}



	/* 上传图片 */
	.cell-pd {
		padding: 22upx 30upx;
	}
	.uni-uploader__file{
		position: relative;
	}
	.list-pd {
		margin-top: 50upx;
	}
	.icon-shanchu{
		position: absolute;
		right: 0;
		top: 0;
		background: #333333;
		color: #FFFFFF;
		padding: 2upx 10upx;
		border-radius:10upx;
		z-index: 100;
	}
</style>
