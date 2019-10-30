<template>
	<view>
		<view class="infostyle fja-bc">
			<view style="color:#9B9B9B; font-size: 18px;">头像</view>
			<view class="fja-sc" @tap="changeavaterfn">
				<image :src="avatar" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1" style="margin-left:10px"></view>
			</view>
		</view>
		<view class="infostyle fja-bc">
			<view style="color:#9B9B9B; font-size: 18px;">昵称</view>
			<view class="fja-sc" @tap="changenichengfn">
				<view class="contentinfo">哈哈</view>
				<view class="icon iconfont icon-bianji1" style="margin-left:10px"></view>
			</view>
		</view>
		<view class="infostyle fja-bc">
			<view style="color:#9B9B9B; font-size: 18px;">性别</view>
			<view class="fja-sc" @tap="changesexfn">
				<view class="contentinfo">{{ sex }}</view>
				<view class="icon iconfont icon-bianji1" style="margin-left:10px"></view>
			</view>
		</view>
		<view class="infostyle fja-bc">
			<view style="color:#9B9B9B; font-size: 18px;">生日</view>
			<picker mode="date" start="2019-08-28"  @change="changebirthdayfn">
				<view class="fja-sc">
					<view class="contentinfo">{{ birthday }}</view>
					<view class="icon iconfont icon-bianji1" style="margin-left:10px"></view>
				</view>
			</picker>
		</view>
		<view class="infostyle fja-bc">
			<view style="color:#9B9B9B; font-size: 18px;">情感</view>
			<view class="fja-sc" @tap="changefeelfn">
				<view class="contentinfo">哈哈</view>
				<view class="icon iconfont icon-bianji1" style="margin-left:10px"></view>
			</view>
		</view>
		<view class="infostyle fja-bc">
			<view style="color:#9B9B9B; font-size: 18px;">职业</view>
			<view class="fja-sc" @tap="changejobfn">
				<view class="contentinfo">哈哈</view>
				<view class="icon iconfont icon-bianji1" style="margin-left:10px"></view>
			</view>
		</view>
		<view class="infostyle fja-bc">
			<view style="color:#9B9B9B; font-size: 18px;">家乡</view>
			<view class="fja-sc" @tap="showMulLinkageThreePicker">
				<view class="contentinfo">{{ address }}</view>
				<view class="icon iconfont icon-bianji1" style="margin-left:10px"></view>
			</view>
		</view>
		
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		  @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	let sexlist = ["壮士", "淑女"];
	export default {
		data() {
			return {
				avatar:"../../static/demo/topicpic/12.jpeg",
				sex:"壮士",
				birthday:"1995-08-28",
				themeColor: '#007AFF',
				cityPickerValueDefault:[13,1,2],
				address:"阿富汗-塔利班-小小",
			}
		},
		components:{
			mpvueCityPicker,
		},
		onLoad() {
		},
		methods: {
			changeavaterfn(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				    success: (res) => {
						this.avatar = res.tempFilePaths[0];
				    }
				});
			},
			changesexfn(){
				uni.showActionSheet({
					itemList: sexlist,
					success: (res) => {
						this.sex = sexlist[res.tapIndex];
					},
				})
			},
			changebirthdayfn(e){
				this.birthday = e.detail.value;
			},
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				// console.log(JSON.stringify(e));
				this.address = e.label;
			}
		}
	}
</script>

<style>
.infostyle{
	height:60px;
	line-height: 60px;
	border-bottom: 1px solid #F7F7F7;
	margin: 0 20rpx;
	/* background-color: #2AD19B; */
}
.contentinfo{
	 font-size: 14px;
	 color:#5D5D5D;
}
.infostyle image{
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
}
</style>
