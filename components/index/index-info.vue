<template>
	<view class="index-list">
		<view class="index-info">
			<view>
				<image :src="item.avater" mode="widthFix" lazy-load></image>
				<text>良春原野</text>
			</view>
			<view>
				<view class="icon iconfont icon-zengjia"></view>
				<text>关注</text>
				<view class="icon iconfont icon-guanbi"></view>
			</view>
		</view>
		<view class="index-mediatitle">
			{{ item.title }}
		</view>
		<view class="index-mediainfo">
			<view>
				<image :src="item.medio" mode="widthFix" lazy-load></image>
			</view>
			<!-- 视频文件才渲染 -->
			<template v-if="item.mediotype == 'vedio'">
				<view class="icon iconfont icon-bofang"></view>
				<view>
					<text>{{  item.meidioinfo[0] }}</text>次播放
					<text>{{  item.meidioinfo[1] }}</text>
				</view>
			</template>
		</view>
		<view class="index-mediado">
			<view>
				<view class="icon iconfont icon-icon_xiaolian-mian"></view>
				<text>{{ item.ding }}</text>
				<view class="icon iconfont icon-kulian"></view>
				<text>{{ item.cai }}</text>
			</view>
			<view>
				<view class="icon iconfont icon-pinglun1"></view>
				<text>{{ item.comment }}</text>
				<view class="icon iconfont icon-zhuanfa"></view>
				<text>{{ item.forward }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object
		}
	}
</script>

<style scoped>
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
		border-radius: 20rpx;
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
		padding: 2rpx 15rpx;
		border-radius: 30rpx;
		bottom:20rpx;
		right:0;
		background-color: rgba(155,155,155,0.5);
		color: #F7F7F6;
	}
	.index-mediainfo > view:nth-of-type(3) > text:nth-of-type(2){
		margin-left:10rpx;
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
	.index-mediado > view:nth-of-type(1) > view:nth-of-type(2){
		margin-left: 20rpx;
	}
	.index-mediado > view:nth-of-type(2) > view:nth-of-type(2){
		margin-left: 20rpx;
	}
	
</style>
