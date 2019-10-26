<template>
	<view>
		<scroll-view scroll-y="true" :style="{'height':scrollheight + 'px'}">
			<view class="bigavatar">
				<image src="../../static/demo/topicpic/1.jpeg" mode="widthFix" lazy-load></image>
			</view>
			<view class="fja-sc marginleft20">
				<view class="smallavatar">
					<image src="../../static/demo/topicpic/1.jpeg" mode="widthFix" lazy-load></image>
				</view>
				<view class="huatititle">
					#忆往昔，敬余生#
				</view>
			</view>
			<view class="marginleft20 fja-sc huatidotai">
				动态<view>793</view>今日<view>641</view>
			</view>
			<view class="huatiintro marginleft20">
				面试啦就是宽带缴费哈萨克领导克拉的技术开发水电费卡距离圣诞节疯狂了刻录
			</view>
			<view class="marginleft20">
				<view class="fja-ac">
					<view class="huaticontent" style="position:relative" :class="{'active01':typechoose==0}" @tap="typechoosefn">默认<view :class="{'huaticontent_type':typechoose==0}"></view></view>
					<view class="huaticontent" style="position:relative" :class="{'active01':typechoose==1}" @tap="typechoosefn">最新<view :class="{'huaticontent_type':typechoose==1}"></view></view>
				</view>
				<view>
					<swiper style="border:1px solid #007AFF;">
						<!-- 默认 -->
						<swiper-item>
							<template v-if="datalist.length > 0">
								<block v-for="(item, index) in datalist" :key="index">
									<common-list :item="item"></common-list>
								</block>
								<!-- 上拉加载 -->
								<load-more :shangla="datalist.shangla.itemsdata"></load-more>
							</template>
							<template v-else>
								<no-thing></no-thing>
							</template>
						</swiper-item>
						<!-- 最新 -->
						<swiper-item>
		
						</swiper-item>
					</swiper>
					
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import commonList from "../../components/common/common-list.vue";
	import loadMore from "../../components/common/loadmore.vue";
	import noThing from "../../components/common/nothing.vue";
	export default {
		data() {
			return {
				scrollheight:500,
				typechoose:0,
				datalist:[
					{
						avatar:"../../static/demo/topicpic/4.jpeg",
						nicheng:"",
						age:"12",
						sex:"girl",
						iscare:false,
						title:"川阿斯顿发送到记得发世界的看法",
						contenttype:"img",
						content:"../../static/demo/datapic/3.jpg",
						addree:"深圳 大同盟",
						zhuanfa:"15",
						pinglun:"50",
						zan:"20",
					},
					{
						avatar:"../../static/demo/topicpic/4.jpeg",
						nicheng:"",
						age:"12",
						sex:"boy",
						iscare:false,
						title:"川阿斯顿发送到记得发世界的看法",
						contenttype:"video",
						playnum:"415",
						time:"2:45",
						content:"../../static/demo/datapic/3.jpg",
						addree:"深圳 大同盟",
						zhuanfa:"15",
						pinglun:"50",
						zan:"20",
					},
					{
						avatar:"../../static/demo/topicpic/4.jpeg",
						nicheng:"",
						age:"12",
						sex:"girl",
						iscare:false,
						title:"川阿斯顿发送到记得发世界的看法",
						contenttype:"img",
						content:"../../static/demo/datapic/3.jpg",
						addree:"深圳 大同盟",
						zhuanfa:"15",
						pinglun:"50",
						zan:"20",
					},
					{
						avatar:"../../static/demo/topicpic/4.jpeg",
						nicheng:"",
						age:"12",
						sex:"boy",
						iscare:false,
						title:"川阿斯顿发送到记得发世界的看法",
						contenttype:"url",
						contenttitle:"什么叫做丑，他来教你",
						content:"../../static/demo/datapic/20.jpg",
						addree:"深圳 大同盟",
						zhuanfa:"15",
						pinglun:"50",
						zan:"20",
					},
				]
			}
		},
		components:{
			commonList,
			loadMore,
			noThing,
		},
		onLoad() {
			//获取系统信息
			// var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			uni.getSystemInfo({
			    success: (res) => {
					this.scrollheight = res.screenHeight;
			    }
			});
		},
		methods: {
			typechoosefn(){
				if(this.typechoose ==0){
					this.typechoose = 1
				}else{
					this.typechoose =0
				}
			}
		}
	}
</script>

<style>
	
.bigavatar{
	width:100%;
	height:150px;
	overflow: hidden;
}
.bigavatar > image{
	width:100%;
	filter: blur(10px);
}

.smallavatar{
	position: relative;
	width:200rpx;
	height:100rpx;
}
.smallavatar > image{
	position:absolute;
	top:-50%;
	left: 0;
	transform: translateY(-25%);
	width:200rpx;
	border-radius: 15rpx;
	height: 200rpx;
	overflow: hidden;
}
.huatititle{
	font-size: 40rpx;
	color:#000000;
}
.huatidotai{
	font-size: 32rpx;
	color:#CDCDCD;
	margin-left: 20rpx;
}
.huatiintro{
	color:#A3A3A3;
	font-size: 35rpx;
}
.huaticontent{
	font-weight: bold;
	font-size:38rpx
}
.active01{
	color:#343434
}
.huaticontent_type{
	position: absolute;
	top:55rpx;
	left: 50%;
	transform: translateX(-50%);
	width: 90rpx;
	height: 10rpx;
	background-color: #FEDE33;
}
.marginleft20 {
	margin:0 20rpx;
	color: #949494;
}
</style>
