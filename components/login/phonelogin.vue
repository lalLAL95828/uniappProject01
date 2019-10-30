<template>
	<view class="phone_login" v-show="isshow == 'phone'">
		<view>
			<view>+86</view>
			<input type="text" placeholder="输入手机号码">
		</view>
		<view >
			<input type="text" placeholder="请输入验证码">
			<view hover-class="forgetpassword" class="getcode" @tap="getcodefn">{{ codetext }}</view>
		</view>		
	</view>
</template>

<script>
	export default{
		data:function(){
			return {
				codetext: "获取验证码",
			}
		},
		props:{
			isshow:String
		},
		methods:{
			getcodefn(){
				if(this.codetext == "获取验证码" || this.codetext == "再次获取"){
					var This = this;
					//60s后再次获得
					this.codetext = 60;
					
					var codexunhun = setInterval(function() {
						This.codetext -= 1;
						if(This.codetext == 0){
							clearInterval(codexunhun);
							This.codetext="再次获取";
						}
					},1000)
				}else{
					//提示60s后在试
					uni.showToast({
						title:"请稍后再试",
						icon:"none"
					})
				}	
			}
		}
	}
	
</script>

<style scoped>
.phone_login{
	margin:0 20rpx;
}
.phone_login input{
	/* background-color: red; */
	height: 80rpx;
	padding:10rpx;
	border-radius: 20rpx;
	border:1px solid #f7f7f7;
	flex-grow: 1;
	font-size: 35rpx;
}
.phone_login > view{
	display: flex;
}
.phone_login > view:nth-of-type(2){
	margin-top: 10rpx;
}
.phone_login > view > view{
	line-height: 100rpx;
}
.getcode{
	width: 200rpx;
	text-align: center;
}
/* .password > view{
	height: 100rpx;
	line-height: 100rpx;
} */
/* .forgetpassword{
	color:#007AFF;
} */
</style>
