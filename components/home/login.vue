<template>
	<view>
		<view class="home_title">登录</view>
		<view class="home_loginway">
			<view class='loginway' hover-class="">
				<view class="icon iconfont icon-weixin weixin"></view>
			</view>
			<view class='loginway' hover-class="">
				<view class="icon iconfont icon-xinlangweibo xinlangweibo"></view>
			</view>
			<view class='loginway' hover-class="">
				<view class="icon iconfont icon-QQ QQ"></view>
			</view>
		</view>
		<view class="home_passwordLogin" @tap="loginfn">
			账号密码登录<view class="icon iconfont icon-jinru"></view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			loginfn(){
				uni.navigateTo({
					url: '../../pages/login/login',
				});
			}
		}
	}
</script>

<style scoped>
.home_title{
	text-align: center;
	line-height: 80rpx;
	font-size: 50rpx;
}
.home_loginway{
	display: flex;
	justify-content: center;
}
.loginway{
	display: inline-block;
	margin: 30rpx;
}
.loginway > view{
	width: 100rpx;
	height:100rpx;
	border-radius: 50%;
	font-size: 60rpx;
	line-height: 100rpx;
	text-align: center;
}
.weixin{
	background-color: #2BD19B;
}
.xinlangweibo{
	background-color: #2CAEFC;
}
.QQ{
	background-color: #FC7729;
}
.home_passwordLogin{
	text-align: center;
	line-height: 70rpx;
	font-size: 40rpx;
}
.home_passwordLogin > view{
	display: inline-block;
}
</style>
