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
		<upload-image @upload="uploadimagefn"></upload-image>
		<!-- 弹出组件 -->
		<uni-popup ref="popup"  @change="popupchangefn" :show="popupshow">
			<view class="gonggao">
				<view class="popupimage">
					<image src="../../static/addinput.png" mode="widthFix"></image>
				</view>
				<view>1.涉及黄色，政治，广告及骚扰信息</view>
				<view>2.涉及黄色，政治，广告及骚扰信息</view>
				<view>3.涉及黄色，政治，广告及骚扰信息</view>
				<view>4.涉及黄色，政治，广告及骚扰信息</view>
				<button type="default" @tap="hidePopup">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	import uploadImage from "../../components/common/upload-image.vue"
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	
	let wholook = ['所有人可见', '仅自己可见'];
	export default {
		
		data() {
			return {
				lookinfo:'所有人可见',
				title:"title",
				textareavalue:"",
				popupshow:false,
				popupcontent:"发的哈萨克绝代风华看就看",
				popupcustom:true,
				returnback:true
			}
		},
		components:{
			uniNavBar,
			uploadImage,
			uniPopup,
		},
		onReady(){
			this.popupshow = !this.popupshow
		},
		onBackPress(e) {
			//如果textarea有内容的话，才执行保存，不然就直接返回
			if(!this.textareavalue){
				return false
			}
			if(this.returnback){
				uni.showModal({
					content:"是否保存为草稿",
					cancelText:"不保存",
					confirmText:"保存",
					success:res => {
						if(res.confirm){
							console.log("保存")
							
						}else{
							console.log("不保存")
						};
						this.returnback = false
						//也会引发onBackPress事件
						uni.navigateBack({
							delta: 1,
						});
					}
				});
				//如何不加这一句，会直接返回 ，uni.showModal的内容会在返回页面显示
				return true;
			}else{
				
			}
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			submit(){
				console.log("发布");
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
			//上传图片处理
			uploadimagefn(arr){
				console.log(arr);
			},
			//弹窗
			popupchangefn(obj){
				// console.log(obj.show)
			},
			hidePopup(){
				this.popupshow = !this.popupshow
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


	.gonggao{
		width: 500upx;
	}
	.popupimage{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.gonggao image{
		width: 75%;
		margin-bottom: 20upx;
	}
	.gonggao button{
		margin-top: 20upx;
		background: #FFE934;
		color: #171606;
	}
	
</style>
