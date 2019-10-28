<template>
	<view>
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
				<block v-if="typechoose == 0">
					<!-- 默认 -->	
					<template v-if="datalist.length > 0">
						<block v-for="(item, index) in datalist" :key="index">
							<common-list :item="item"></common-list>
						</block>
						<!-- 上拉加载 -->
						<load-more :shangla="shangla.moren"></load-more>
					</template>
					<template v-else>
						<view  style="position:relative; " :style="{'height': scrollheight + 'px'}">
							<no-thing></no-thing>
						</view>
					</template>
				</block>
				<block v-else>
					<!-- 最新 -->
					<template v-if="lastdata.length > 0">
						<block v-for="(item, index) in lastdata" :key="index">
							<common-list :item="item"></common-list>
						</block>
						<!-- 上拉加载 -->
						<load-more :shangla="shangla.zuixin"></load-more>
					</template>
					<template v-else>
						<view  style="position:relative; " :style="{'height': scrollheight + 'px'}">
							<no-thing></no-thing>
						</view>
					</template>
				</block>
			</view>
		</view>

	</view>
</template>

<script>
	import commonList from "../../components/common/common-list.vue";
	import loadMore from "../../components/common/loadmore.vue";
	import noThing from "../../components/common/nothing.vue";
	let lastdatalength = 1;
	export default {
		data() {
			return {
				scrollheight:300,
				typechoose:0,
				shangla:{
					moren:"上拉加载更多",
					zuixin:"上拉加载更多"
				},
				datalist:[
					{
						id:"datalist01",
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
						id:"datalist02",
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
						id:"datalist03",
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
						id:"datalist04",
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
				],
				lastdata:[
					{
						id:"lastdata01",
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
					
				]
			}
		},
		components:{
			commonList,
			loadMore,
			noThing,
		},
		onLoad(e) {
			var Ob = JSON.parse(e.image);
			// console.log(Ob.title);
			//动态设置导航栏的标题
			uni.setNavigationBarTitle({
				title:Ob.title,
			})
			//获取系统信息
			uni.getSystemInfo({
			    success: (res) => {
					var windowWidth = res.windowWidth;
					this.scrollheight = res.screenHeight-150-160-((100/750)*windowWidth);
			    }
			});
		},
		//页面下拉刷新
		onPullDownRefresh(){
			if(this.typechoose == 0){
				this.pulldownmore(0)
			}else{
				this.pulldownmore(1)
			}
		},
		//页面上拉
		onReachBottom(){
			if(this.typechoose == 0){
				this.loadmore(0);
			}else{
				this.loadmore(1);
			}
		},
		methods: {
			typechoosefn(){
				if(this.typechoose ==0){
					this.typechoose = 1
				}else{
					this.typechoose =0
				}
			},
			loadmore(int){
				var index = int;
				//获取数据
				if(index == 0){
					if(this.shangla.moren != "上拉加载更多"){
						return ;
					}
					//修改状态
					this.shangla.moren = "加载中";
					let returndata = {
						avatar:"../../static/demo/topicpic/4.jpeg",
						nicheng:"",
						age:"12",
						sex:"girl",
						iscare:false,
						title:"川阿斯顿发送到记得发世界的看法",
						contenttype:"img",
						content:"../../static/demo/datapic/3.jpg",
						addree:"深圳 默认",
						zhuanfa:"15",
						pinglun:"50",
						zan:"20",
					}
					setTimeout(() => {
						this.datalist.push(returndata);
						this.shangla.moren = "上拉加载更多";
					}, 500);
				}else{
					if(this.shangla.zuixin != "上拉加载更多"){
						return ;
					}
					//修改状态
					this.shangla.zuixin = "加载中";
					let returndata = {
						avatar:"../../static/demo/topicpic/4.jpeg",
						nicheng:"",
						age:"12",
						sex:"girl",
						iscare:false,
						title:"川阿斯顿发送到记得发世界的看法",
						contenttype:"img",
						content:"../../static/demo/datapic/3.jpg",
						addree:"深圳 最新",
						zhuanfa:"15",
						pinglun:"50",
						zan:"20",
					}
					setTimeout(() => {
						this.lastdata.push(returndata);
						this.shangla.zuixin = "上拉加载更多";
					}, 500);
				}
			},
			pulldownmore(int){
				var index = int;
				//获取数据
				if(index == 0){
					let returndata = {
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
					};
					setTimeout(() => {
						this.datalist.unshift(returndata);
						uni.stopPullDownRefresh();
					}, 500);
				}else{
					let returndata = {
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
					};
					lastdatalength += 1;
					returndata.id = "lastdata" + lastdatalength;
					console.log(returndata.id);
					setTimeout(() => {
						this.lastdata.unshift(returndata);
						uni.stopPullDownRefresh();
					}, 500);
				}
				
			},
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
	font-size:38rpx;
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
