<template>
	<view>
		<common-list :item="item" :canclick="false">
		</common-list>
		<view class="menban"  :style="{'display': isshare}" @tap="sharefn"></view>
		<view class="sharediv"  :style="{'display': isshare}">
			<view class="sharetext">分享到</view>
			<view>
				<scroll-view scroll-x=true class="shareaddree">
					<view class='shareaddreeview' hover-class="sharehover">
						<view class="icon iconfont icon-weixin weixin"></view>
						<view>微信好友</view>
					</view>
					<view class='shareaddreeview' hover-class="sharehover">
						<view class="icon iconfont icon-weixin pengyouquan"></view>
						<view>微信好友</view>
					</view>
					<view class='shareaddreeview' hover-class="sharehover">
						<view class="icon iconfont icon-xinlangweibo xinlangweibo"></view>
						<view>新浪微博</view>
					</view>
					<view class='shareaddreeview' hover-class="sharehover">
						<view class="icon iconfont icon-QQ QQ"></view>
						<view>QQ好友</view>
					</view>
					<view class='shareaddreeview' hover-class="sharehover">
						<view class="icon iconfont icon-QQ QQ"></view>
						<view>QQ好友</view>
					</view>
				</scroll-view>
			</view>
			<view class="sharetext" style="border-top:1px solid #f7f7f7" @tap="sharefn">取消</view>
		</view>
	</view>
</template>

<script>
	import commonList from "../../components/common/common-list.vue";
	export default {
		data() {
			return {
				item:"",
				isshare:"none",
			}
		},
		components:{
			commonList,
		},
		onLoad(e) {
			this.item = JSON.parse(e.item);
		},
		methods: {
			sharefn(){
				this.isshare == "none" ? (this.isshare = "block") : (this.isshare = "none")
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				this.isshare == "none" ? (this.isshare = "block") : (this.isshare = "none")
			}
		}
	}
</script>

<style>
.menban{
	position:fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	background-color: rgba(177,177,177,0.5);
}
.sharediv{
	position:fixed;
	bottom:0;
	right:0;
	left:0;
	background-color: #fff;
}
.shareaddree{
	white-space: nowrap;
	width: 100%;
	overflow: hidden;
	height: 200rpx;
}
.shareaddreeview{
	width:25%;
	height:200rpx;
	display: inline-flex; 
	/* border:1px solid #007AFF; */
	/* background-color: #0A98D5; */
	/* margin: 0 20rpx; */
	flex-direction: column;
	align-content: center;
	justify-content: center;
	
}
.shareaddreeview > view:nth-of-type(1){
	width:120rpx;
	height: 120rpx;
	border-radius: 50%;
	text-align: center;
	line-height: 120rpx;
	font-size:80rpx;
	margin:auto;
	color:#FFFFFF;
}
.shareaddreeview > view:nth-of-type(2){
	text-align: center;
	line-height: 50rpx;
	
}
.weixin{
	background-color: #2AD19B;
}
.pengyouquan{
	background-color: #514D4C;
}

.xinlangweibo{
	background-color: #EE5E5E;
}
.QQ{
	background-color: #5280CE;
}
.sharehover{
	background-color: #F7F7F7;
}
.sharetext{
	width:100%;
	text-align: center;
	line-height: 100rpx;
	font-size: 40rpx;
}
</style>
