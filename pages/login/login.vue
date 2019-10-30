<template>
	<view>
		<view class="guangfang_valatar">
			<image :src="bgimgsrc" mode="widthFix" lazy-load></image>
		</view>
		<password :isshow='loginway'></password>
		<phone-login :isshow='loginway'></phone-login>

	
		<view class="login_button" hover-class="login_buttonactive">登录</view>
		<view class="pplogin" @tap="changeloginway">
			{{ logintext }}<view class="icon iconfont icon-jinru"></view>
		</view>
		<view class="other_text fja-cc">
			<view class="other_border"></view>
			<view>第三方登录</view>
			<view class="other_border"></view>
		</view>
		<view class="other_loginway">
			<view class='loginway' hover-class="" @tap="tologin(weixinlogin)">
				<view class="icon iconfont icon-weixin weixin" ></view>
			</view>
			<view class='loginway' hover-class="" @tap="tologin(sinaweibologin)">
				<view class="icon iconfont icon-xinlangweibo xinlangweibo" ></view>
			</view>
			<view class='loginway' hover-class="" @tap="tologin(QQlogin)">
				<view class="icon iconfont icon-QQ QQ"></view>
			</view>
		</view>
		<view class="xieyi">
			注册即代表您同意<text class="xieyistyle">《仿糗事百科用户协议》</text>
		</view>
	</view>
</template>

<script>
	import password from "../../components/login/password.vue";
	import phoneLogin from "../../components/login/phonelogin.vue";
	export default {
		data() {
			return {
				loginway:"phone",
				logintext:"验证码登录",
				weixinlogin:"",
				QQlogin:"",
				sinaweibologin:"",
				bgimgsrc:"../../static/loginhead.png",
			}
		},
		components:{
			password,
			phoneLogin,
		},
		methods: {
			changeloginway(){
				this.loginway == "password" ? (this.loginway = "phone") : (this.loginway = "password"),
				this.loginway == "password" ? (this.logintext = "密码登录") : (this.logintext = "验证码登录")
			},
			tologin(provider) {
				var That = this;
				uni.login({
					provider: provider,
					success: (res) => {
						//执行登录后的操作
						console.log('login success:', res);
						//获取第三方返回的信息，可以用于昵称，头像等
						uni.getUserInfo({
							provider: provider,
							success: function (infoRes) {
								console.log('用户昵称为：' + infoRes.userInfo.nickname);
								console.log(infoRes);
								//使用QQ头像作为背景
								That.bgimgsrc = infoRes.userInfo.figureurl_qq
								//使用微信头像
								// That.bgimgsrc = infoRes.userInfo.avatarUrl
							}
						});
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				});
			},
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				uni.navigateBack({
					delta:1,
				})
			}
		},
		onLoad() {
			uni.getProvider({
				service: 'oauth',
				success: (result) => {
					console.log(JSON.stringify(result))
					this.providerList = result.provider.map((value) => {
						switch (value) {
							case 'weixin':
								this.weixinlogin = 'weixin'
								break;
							case 'qq':
								this.QQlogin = 'qq'
								break;
							case 'sinaweibo':
								this.sinaweibologin = 'sinaweibo'
								break;	
						}
					});
		
				},
				fail: (error) => {
					console.log('获取登录通道失败', error);
				}
			});
		},
		onUnload(){
			console.log("退出");
			bianlian = uni.hideKeyboard();	
		},
		
	}
</script>

<style>
.guangfang_valatar > image{
	width: 100%;

}
.pplogin{
	text-align: center;
	line-height: 70rpx;
	font-size: 40rpx;
	margin:10rpx 0;
}
.pplogin > view{
	display: inline-block;
}
.login_button{
	margin:0 20rpx;
	border:1px solid #f7f7f7;
	line-height: 100rpx;
	font-size: 40rpx;
	border-radius: 30rpx;
	background-color: #F4F4F4;
	text-align: center;
}
.login_buttonactive{
	background-color: #007AFF;
}
.other_text{
	margin:20rpx 0;
}
.other_border{
	width: 25%;
	border-bottom: 1rpx solid #000000;
}
.other_loginway{
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
.xieyi{
	text-align: center;
	line-height: 80rpx;
	font-size: 35rpx;
}
.xieyistyle{
	color:#33B1FC
}
</style>
