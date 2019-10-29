<template>
	<view class="home-user fja-sc" hover-class="feature_active">
		<image :src="item.valatar" mode="widthFix" lazy-load></image>
		<view class="userinfo">
			<view>
				{{ item.name }}
			</view>
			<view class="fja-sc">
				<view>总访客 {{ item.fangke }}</view>
				<view>今日 {{ item.today }}</view>
			</view>
		</view>
		<view class="icon iconfont icon-jinru"></view>
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
.home-user{
	margin:0 20rpx;
	border-bottom: 1px solid #F7F7F7;
	padding: 5rpx 0;
}
.home-user image{
	width: 100rpx;
	height:100rpx;
	border-radius: 50%;
}
.userinfo{
	flex-grow: 2;
	margin-left: 20rpx;
}
.userinfo > view{
	line-heigh:50rpx;
}
.feature_active{
	background-color: #f7f7f7;
}
</style>
