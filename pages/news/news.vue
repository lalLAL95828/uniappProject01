<template>
	<view>
		<self-nav-bar @click-left="navbarleftclick" @click-right="navbarrightclick">
			<block v-slot:left>
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<block>
				<view class="nav-middle">
					<view class="nav-middle-text" :class="{newsnavactive:chooseindex == 0}" @tap="choosenavfn">
						<view v-show="chooseindex == 0" class="chooseviewborder"></view>
						<text>关注</text>
					</view>
					<view class="nav-middle-text" :class="{newsnavactive:chooseindex == 1}" @tap="choosenavfn">
						<view v-show="chooseindex == 1" class="chooseviewborder"></view>
						<text>话题</text>
					</view>
				</view>
			</block>
			<block v-slot:right>
				<view class="nav-right">
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</block>
		</self-nav-bar>
		
		<!-- 内容 -->
		<swiper :style="{'height': scrollheight + 'px'}" :current="chooseindex" @change="swiperchangefn">
			<!-- 关注 -->
			<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%; " @scrolltolower="loadmore(0)">
					<template v-if="datalist.itemsdata.length > 0">
						<block v-for="(item, index) in datalist.itemsdata" :key="index">
							<common-list :item="item">
								
							</common-list>
						</block>
						<!-- 上拉加载 -->
						<load-more :shangla="datalist.shangla.itemsdata"></load-more>
					</template>
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
			<!-- 话题 -->
			<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%; " @scrolltolower="loadmore(1)">
					<view class="huati">
						<view class="huati-input fja-cc">
							<input type="text" placeholder="搜索内容" placeholder-class="icon iconfont icon-sousuo" placeholder-style="text-align: center">
						</view>
						<view >
							<swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="500" circular="true" style="border-radius: 8px; overflow: hidden;">
								<block v-for="(img, int) in imagesdata" :key="int">
									<swiper-item>
										<view class="huati-swiper">
											<image :src="img.src" mode="widthFix" lazy-load></image>
										</view>
									</swiper-item>
								</block>
							</swiper>
						</view>
						<view class="huati-hot">
							<view class="fja-bc">
								<view>
									热门分类
								</view>
								<view class="fja-sc" @tap="huatimoreclick">
									更多<view class="icon iconfont icon-jinru"></view>
								</view>
							</view>
							<view class="fja-ac">
								<template v-for="(hot, inx) in huatihotdata">
									<view :key="inx">{{ hot.title }}</view>
								</template>
							</view>
						</view>
						<view>
							<view class="huati-last">最近更新</view>
							<template v-if="datalist.huatilist.length > 0">
								<view class="huati-last-sroll">
									<block v-for="(img, int) in datalist.huatilist" :key="int">
										<news-huati :image="img"></news-huati>
									</block>
								</view>
								<load-more :shangla="datalist.shangla.huatilist"></load-more>
							</template>
							<template v-else>
								<no-thing></no-thing>
							</template>
						</view>
					</view>
					
					
				</scroll-view>
			</swiper-item>
		</swiper>
		
		
		
	</view>
</template>

<script>
	import selfNavBar from "../../components/self-nav-bar/self-nav-bar.vue";
	import commonList from "../../components/common/common-list.vue";
	import noThing from "../../components/common/nothing.vue";
	import loadMore from "../../components/common/loadmore.vue";
	import newsHuati from "../../components/news/news-huati.vue";
	export default {
		data() {
			return {
				scrollheight:300,
				chooseindex:0,
				datalist:{
					// 笔记:如果此处是一个数组,
					// shangla:["上拉加载更多","上拉加载更多"]
					// 则在loadmore函数中,修改值为"加载中",loadmore子组件不会及时渲染到该值
					
					shangla:{
						itemsdata:"上拉加载更多",
						huatilist:"上拉加载更多",
					},
					itemsdata:[
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
					],
					huatilist:[
						{
							src:"../../static/demo/topicpic/1.jpeg",
							title:"#淘宝记录簿01#",
							intro:"207斤到85斤的转变",
							label:"动态5425 今日720",
						},
						{
							src:"../../static/demo/topicpic/1.jpeg",
							title:"#淘宝记录簿02#",
							intro:"207斤到85斤的转变",
							label:"动态5425 今日720",
						},
						{
							src:"../../static/demo/topicpic/1.jpeg",
							title:"#淘宝记录簿03#",
							intro:"207斤到85斤的转变",
							label:"动态5425 今日720",
						},
					]
				},
				imagesdata:[
					{
						src:"../../static/demo/datapic/21.jpg"
					},
					{
						src:"../../static/demo/datapic/21.jpg"
					},
					{
						src:"../../static/demo/datapic/21.jpg"
					}
				],
				huatihotdata:[
					{
						title:"最新",
					},
					{
						title:"游戏",
					},
					{
						title:"情感",
					},
					{
						title:"打卡",
					},
					{
						title:"故事",
					},
					{
						title:"喜爱",
					}
				],
			}
		},
		onLoad() {
			//获取系统信息
			var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			uni.getSystemInfo({
			    success: (res) => {
					let screenwidth = res.screenWidth;
					// this.scrollheight = res.windowHeight - (100/750)*screenwidth-1;
					// console.log(statusBarHeight);
					this.scrollheight = res.windowHeight -44 - statusBarHeight;
			    }
			});
		},
		components:{
			selfNavBar,
			commonList,
			noThing,
			loadMore,
			newsHuati,
		},
		methods: {
			choosenavfn(){
				if(this.chooseindex == 0){
					this.chooseindex = 1 
					
				}else{
					this.chooseindex = 0
				}
			},
			navbarleftclick(){
				console.log("点击了签到")
			},
			navbarrightclick(){
				console.log("点击了铅笔")
			},
			loadmore(int){
				var index = int;
				//获取数据
				if(index == 0){
					if(this.datalist.shangla.itemsdata != "上拉加载更多"){
						return ;
					}
					//修改状态
					this.datalist.shangla.itemsdata = "加载中";
					let returndata = {
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
						}
					setTimeout(() => {
						this.datalist.itemsdata.push(returndata);
						this.datalist.shangla.itemsdata = "上拉加载更多";
					}, 500);
				}else{
					if(this.datalist.shangla.huatilist != "上拉加载更多"){
						return ;
					}
					//修改状态
					this.datalist.shangla.huatilist = "加载中";
					let returndata = {
							src:"../../static/demo/topicpic/1.jpeg",
							title:"#淘宝记录簿#",
							intro:"207斤到85斤的转变",
							label:"动态5425 今日720",
						};
					setTimeout(() => {
						this.datalist.huatilist.push(returndata);
						this.datalist.shangla.huatilist = "上拉加载更多";
					}, 500);
				}
			},
			swiperchangefn(e){
				this.chooseindex = e.detail.current;
			},
			huatimoreclick(){
				uni.navigateTo({
					url: '../huatitype/huatitype',
				});
			}
		}
	}
</script>

<style>
/* 自定义导航栏的css */
.nav-left{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.nav-right{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.nav-left > view, .nav-right > view{
	font-size: 50rpx;
}
.nav-left > view{
	color:#FF9619;
}
.nav-right > view{
	color:#333333
}
.nav-middle{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.nav-middle > view{
	margin:0 15rpx;
	color:#969696;
	font-size: 40rpx;
	font-weight: bold;
}
.newsnavactive{
	color:#343434 !important;
}
.chooseviewborder{
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	width:90rpx;
	height:5px;
	border-radius: 3px;
	background-color: #FEDE33;
}
.nav-middle-text{
	position: relative;
	widows: 150rpx;
}

/* 话题样式 */
.huati{
	margin:0 10px;
}
.huati-input{
	padding:10px 0;
}
.huati-input > input{
	/* text-align: center; */
	width: 100%;
	padding:0 10rpx;
	background-color: #F4F4F4;
	height:30px;
	color:#A1A1A1;
	border-radius: 20rpx;
}
.huati-swiper{
	overflow: hidden;
}
.huati-swiper > image{
	width:100%;
}


.huati-hot > view:nth-of-type(1){
	margin-top: 10px;
}
.huati-hot > view:nth-of-type(1) > view:nth-of-type(1){
	color:#383838;
	font-size:40rpx ;
}
.huati-hot > view:nth-of-type(1) > view:nth-of-type(2){
	color:#D6D6D6;
	font-size:32rpx ;
}
.huati-hot > view:nth-of-type(2){
	color:#A1A1A1;
	background-color: #F7F7F7;
}
.huati-last{
	color:#000000;
	font-size:40rpx ;
	margin: 10px 0;
}
.huati-last-sroll{

}

</style>
