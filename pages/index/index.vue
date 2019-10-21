<template>
	<view class="index-list">
		<view class="index-info">
			<view>
				<image src="../../static/demo/topicpic/8.jpeg" mode="widthFix" lazy-load></image>
				<text>良春原野</text>
			</view>
			<view>
				<view class="icon iconfont icon-zengjia"></view>
				<text>关注</text>
				<view class="icon iconfont icon-guanbi"></view>
			</view>
		</view>
		<view class="index-mediatitle">
			就是这么任性的一天
		</view>
		<view class="index-mediainfo">
			<view>
				<image src="../../static/demo/datapic/1.jpg" mode="widthFix" lazy-load></image>
			</view>
			<view class="icon iconfont icon-bofang"></view>
			<view>
				<text>20w</text>次播放
				<text>2:47</text>
			</view>
		</view>
		<view class="index-mediado">
			<view>
				<view class="icon iconfont icon-icon_xiaolian-mian"></view>
				<text>11</text>
				<view class="icon iconfont icon-kulian"></view>
				<text>10</text>
			</view>
			<view>
				<view class="icon iconfont icon-pinglun1"></view>
				<text>10</text>
				<view class="icon iconfont icon-zhuanfa"></view>
				<text>7</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.index-list {
		padding: 20rpx;
		border-bottom: 1rpx solid #EEEEEE;
	}
	.index-info{
		display: flex;
		justify-content: space-between;
		/* width:100%; */
	}
	.index-info > view:nth-of-type(1){
		display: flex;
		align-items: center;
	}
	.index-info > view:nth-of-type(1) > image{
		width:100rpx;
		border-radius: 50rpx;
		margin-right: 5rpx;
		vertical-align: center;
	}
	
	.index-info > view:nth-of-type(1) > text{
		color:#999999;	
	}
	.index-info > view:nth-of-type(2){
		display: flex;
		align-items: center;
	}
	.index-info > view:nth-of-type(2) > view:nth-of-type(1){
		color: #010101;
	}
	.index-info > view:nth-of-type(2) > text{
		color: #010101;
	}
	.index-info > view:nth-of-type(2) > view:nth-of-type(2){
		color: #D5D5D5;
		margin-left: 10rpx;
	}
	
	/* 标题 */
	.index-mediatitle{
		line-height: 40px;
		color: #000000;
	}
	
	/* 媒体位置 */
	.index-mediainfo{
		position:relative;
	}
	.index-mediainfo > view:nth-of-type(1) > image{
		width:100%;
	}
	.index-mediainfo > view:nth-of-type(2){
		position: absolute;
		top:25%;
		left:50%;
		transform: translateX(-50%);
		font-size: 100rpx;
		color: #FFFFFF;
		
	}
	.index-mediainfo > view:nth-of-type(3){
		position: absolute;
		padding: 2rpx 8rpx;
		border-radius: 30rpx;
		bottom:14rpx;
		right:0;
		background-color: rgba(155,155,155,0.5);
		color: #F7F7F6;
	}
	
	/* 底部评价 */
	.index-mediado{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #D5D5D5;
	}
	.index-mediado > view{
		display: flex;
		align-items: center;
	}
	
	
</style>
