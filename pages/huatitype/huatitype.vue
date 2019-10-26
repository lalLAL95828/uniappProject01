<template>
	<view>
		<index-scroll-bar :scrolldata="scrolldata" :choosebar="choosebar" @bartap="bartag"></index-scroll-bar>
		
		
		<swiper class="index-swiper-box"
		:style="{'height': scrollheight + 'px'}" 
		:current="choosebar"
		@change="tapchangefn">
		<!-- " -->
			<swiper-item v-for="(items, index) in listitemsdata" :key="index">
				<scroll-view scroll-y="true" style="height: 100%; " @scrolltolower="loadmore(index)">
					<template v-if="items.itemsdata.length > 0">
						<block v-for="(item, index01) in items.itemsdata" :key="index01">
							<news-huati :image="item"></news-huati>
						</block>
						<!-- 上拉加载 -->
						<load-more :shangla="items.shangla"></load-more>
					</template>
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import indexScrollBar from "../../components/index/index-scroll.vue";
	import loadMore from "../../components/common/loadmore.vue";
	import noThing from "../../components/common/nothing.vue";
	import newsHuati from "../../components/news/news-huati.vue";
	export default {
		data() {
			return {
				scrollheight:500,
				choosebar:0,
				scrolldata:[
					{
						name:"关注",
						id:"guanzhu"
					},
					{
						name:"推荐",
						id:"tuijian"
					},
					{
						name:"体育",
						id:"tiyu"
					},
					{
						name:"热点",
						id:"redian"
					},
					{
						name:"财经",
						id:"caijing"
					},
					{
						name:"科技",
						id:"科技"
					},
					{
						name:"文化",
						id:"wenhua"
					},
					{
						name:"境外",
						id:"jingwai"
					}
				],
				listitemsdata:[
					{
						shangla:"上拉加载更多",
						itemsdata:[
							{
								src:"../../static/demo/topicpic/1.jpeg",
								title:"#淘宝记录簿#",
								intro:"207斤到85斤的转变",
								label:"动态5425 今日720",
							},
							{
								src:"../../static/demo/topicpic/1.jpeg",
								title:"#淘宝记录簿#",
								intro:"207斤到85斤的转变",
								label:"动态5425 今日720",
							},
							{
								src:"../../static/demo/topicpic/1.jpeg",
								title:"#淘宝记录簿#",
								intro:"207斤到85斤的转变",
								label:"动态5425 今日720",
							},
							{
								src:"../../static/demo/topicpic/1.jpeg",
								title:"#淘宝记录簿#",
								intro:"207斤到85斤的转变",
								label:"动态5425 今日720",
							},
							{
								src:"../../static/demo/topicpic/1.jpeg",
								title:"#淘宝记录簿#",
								intro:"207斤到85斤的转变",
								label:"动态5425 今日720",
							},
							{
								src:"../../static/demo/topicpic/1.jpeg",
								title:"#淘宝记录簿#",
								intro:"207斤到85斤的转变",
								label:"动态5425 今日720",
							},
							{
								src:"../../static/demo/topicpic/1.jpeg",
								title:"#淘宝记录簿#",
								intro:"207斤到85斤的转变",
								label:"动态5425 今日720",
							},
						]
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
				],
			}
		},
		components:{
			indexScrollBar,
			noThing,
			loadMore,
			newsHuati,
		},
		methods: {
			bartag(index){
				this.choosebar = index
			},
			tapchangefn(e){
				this.choosebar = e.detail.current;
			},
			loadmore(index){
				if(this.listitemsdata[index].shangla != "上拉加载更多"){
					return ;
				}
				//修改状态
				this.listitemsdata[index].shangla = "加载中";
				//获取数据
				setTimeout(() => {
					//获取完成
					let returndata = {
						src:"../../static/demo/topicpic/1.jpeg",
						title:"#淘宝记录簿#",
						intro:"207斤到85斤的转变",
						label:"动态5425 今日720",
					};
					this.listitemsdata[index].itemsdata.push(returndata);
					this.listitemsdata[index].shangla = "上拉加载更多";
				}, 1000);
				// this.listitemsdata[index].shangla = "没有更多数据了";
			}
		},
		onLoad() {
			//获取系统信息
			uni.getSystemInfo({
			    success: (res) => {
					let screenwidth = res.screenWidth;
					this.scrollheight = res.windowHeight-(100/750)*screenwidth-1;
			    }
			});
		},
	}
</script>

<style>

</style>
