<template>
	<view class="password_login" v-show="isshow == 'password'">
		<input type="text" placeholder="昵称/手机号/邮箱">
		<view class="password">
			<input type="text" placeholder="请输入密码">
			<view hover-class="forgetpassword">忘记密码？</view>
		</view>		
	</view>
</template>

<script>
	export default{
		props:{
			isshow:String
		},
	}
</script>

<style scoped>
.password_login{
	margin:0 20rpx;
}
.password_login input{
	/* background-color: red; */
	height: 80rpx;
	padding:10rpx;
	border-radius: 20rpx;
	border:1px solid #f7f7f7;
	flex-grow: 1;
	font-size: 35rpx;
}
.password_login > view{
	display: flex;
	margin-top: 10rpx;
}
.password > view{
	height: 100rpx;
	line-height: 100rpx;
}
.forgetpassword{
	color:#007AFF;
}
</style>
