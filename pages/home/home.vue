<template>
	<view>
		<template v-if="islogin">
			<user :item="userinfo"></user>
		</template>
		<template v-else>
			<login></login>
		</template>
		
		<view class="home_do fja-cc">
			<view>
				<view>0</view>
				<view>糗事</view>
			</view>
			<view>
				<view>0</view>
				<view>动态</view>
			</view>
			<view>
				<view>0</view>
				<view>评论</view>
			</view>
			<view>
				<view>0</view>
				<view>收藏</view>
			</view>
		</view>
		<view class="home_ad" >
			<swiper autoplay="true" style="border-radius: 8px; overflow: hidden;" indicator-dots="true" >
				<block v-for="(img, int) in adinfo" :key="int">
					<swiper-item>
						<view class="home_swiper">
							<image :src="img" mode="widthFix" lazy-load></image>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="home_feature">
			<view hover-class="feature_active">
				<view class="icon iconfont icon-dizhi"></view>浏览历史
			</view>
			<view hover-class="feature_active">
				<view class="icon iconfont icon-huiyuanvip"></view>糗百认证
			</view>
			<template v-if="islogin">
				<view hover-class="feature_active">
					<view class="icon iconfont icon-keyboard"></view>审核糗事
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import login from "../../components/home/login.vue";
	import user from "../../components/home/user.vue";
	export default {
		data() {
			return {
				islogin:false,
				userinfo:{
					valatar:"../../static/demo/demo66.jpg",
					name:"楚留香",
					fangke:"25",
					today:"5",
				},
				adinfo:[
					"../../static/demo/datapic/21.jpg",
					"../../static/demo/datapic/21.jpg",
					"../../static/demo/datapic/21.jpg",
				]
			}
		},
		components:{
			login,
			user,
		},
		methods: {
			
		},
		onLoad() {
			uni.hideKeyboard();
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				uni.navigateTo({
					url: '../changeuserinfo/changeuserinfo',
				});
			}
		}
	}
</script>

<style>

.home_do > view{
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	width: 25%;
	text-align: center;
}
.home_ad{
	margin:0 20rpx;
}

.home_ad image{
	width: 100%;
	
}
.home_swiper{
	overflow: hidden;
}
.home_feature{
	margin:0 30rpx;
}
.home_feature > view{
	display: flex;
	height: 45px; 
	line-height: 45px;
	text-align: center;
	font-size: 30rpx;
	border-bottom: 1px solid #f7f7f7;
}
.home_feature > view > view{
	line-height: 45px;
}
.home_feature > view:nth-of-type(1) > view{
	margin-right:10rpx;
	color:#68C1FF;
}
.home_feature > view:nth-of-type(2) > view{
	margin-right:10rpx;
	color:#FF7434;
}
.home_feature > view:nth-of-type(3) > view{
	margin-right:10rpx;
	color:#68C1FF;
}
.feature_active{
	background-color: #f7f7f7;
}
</style>
