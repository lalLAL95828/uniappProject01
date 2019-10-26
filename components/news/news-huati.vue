<template>
	<view class="news-pages fja-sc animated fadeInLeft fast" @tap="clickfn">
		<image :src="image.src" lazy-load mode="widthFix"></image>
		<view class="news-pages-content">
			<view>{{ image.title }}</view>
			<view>{{ image.intro }}</view>
			<view>{{ image.label }}</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			image:Object
		},
		methods:{
			clickfn(){
				uni.navigateTo({
					url: '../../pages/huaticontent/huaticontent',
				});
			}
		}
	}
	
</script>

<style scoped>
/* 最新动态的每一个小页 */
.news-pages{
	border-bottom: 1rpx solid #F7F7F7;
	padding:10rpx 0;
}
.news-pages > image{
	width:200rpx;
	border-radius: 15rpx;
	height: 200rpx;
	overflow: hidden;
}
.news-pages-content{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-left: 40rpx;
	
}
.news-pages-content > view:nth-of-type(1){
	color:#000000;
	font-size:40rpx ;
	line-height: 50rpx;
	
}
.news-pages-content > view:nth-of-type(2),.news-pages-content > view:nth-of-type(3){
	line-height: 40rpx;
	font-size:32rpx;
	color:#A8A8A8;
}
</style>
