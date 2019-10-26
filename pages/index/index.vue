<template>
	<view>
		<index-scroll-bar :scrolldata="scrolldata" :choosebar="choosebar" @bartap="bartag"></index-scroll-bar>
		
		<swiper class="index-swiper-box" 
		:style="{'height': scrollheight + 'px'}" 
		:current="choosebar"
		@change="tapchangefn">
			<swiper-item v-for="(items, index) in listitemsdata" :key="index">
				<scroll-view scroll-y="true" style="height: 100%; " @scrolltolower="loadmore(index)">
					<template v-if="items.itemsdata.length > 0">
						<block v-for="(item, index01) in items.itemsdata" :key="index01">
							<index-info :item="item"></index-info>
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
	import indexInfo from "../../components/index/index-info.vue";
	import indexScrollBar from "../../components/index/index-scroll.vue";
	import loadMore from "../../components/common/loadmore.vue"
	import noThing from "../../components/common/nothing.vue"
	
	export default {
		data() {
			return {
				//index主内容的高度
				scrollheight:0,
				//tapbar与swiper通信参数
				choosebar:0,
				//tapbar的内容
				scrolldata:[
					{
						name:"体育",
						id:"tiyu"
					},
					{
						name:"美术",
						id:"meisu"
					},
					{
						name:"音乐",
						id:"yinyue"
					},
					{
						name:"自然",
						id:"ziran"
					},
					{
						name:"英语",
						id:"yingyu"
					},
					{
						name:"数学",
						id:"shuxu"
					},
					{
						name:"语文",
						id:"yuwen"
					},
					{
						name:"物理",
						id:"wuli"
					}
				],
				//swiper的内容，与tapbar对应
				listitemsdata:[
					{
						shangla:"上拉加载更多",
						itemsdata:[
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"体育",
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"img",
								iscare:true,
								isdo:0,
								isshowcare:true,
								// meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"又是任性的一天",
								iscare:true,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"vedio",
								meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"又是任性的一天",
								iscare:false,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"vedio",
								meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
						]
					},
					{
						shangla:"上拉加载更多",
						itemsdata:[
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"美术",
								iscare:false,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"img",
								// meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"又是任性的一天",
								iscare:true,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"vedio",
								meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"又是任性的一天",
								iscare:false,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"img",
								// meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"又是任性的一天",
								iscare:false,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"vedio",
								meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							}
						]
					},
					{
						shangla:"上拉加载更多",
						itemsdata:[
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"自然",
								iscare:false,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"img",
								// meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"又是任性的一天",
								iscare:true,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"vedio",
								meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"又是任性的一天",
								iscare:false,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"img",
								// meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"又是任性的一天",
								iscare:false,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"vedio",
								meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"又是任性的一天",
								iscare:false,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"img",
								// meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							},
							{
								avater:"../../static/demo/userpic/6.jpg",
								title:"又是任性的一天",
								iscare:false,
								isdo:0,
								isshowcare:true,
								medio:"../../static/demo/datapic/1.jpg",
								mediotype:"vedio",
								meidioinfo:["20w", "4:20"],
								ding:"10",
								cai:"11",
								comment:"18",
								forward:"7"
							}
						]
					},
					{},
					{},
					{},
					{},
					{},
				],
				
			}
		},
		components:{
			indexInfo,
			indexScrollBar,
			loadMore,
			noThing,
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
						avater:"../../static/demo/userpic/6.jpg",
						title:"美术",
						iscare:false,
						isdo:0,
						isshowcare:true,
						medio:"../../static/demo/datapic/1.jpg",
						mediotype:"img",
						// meidioinfo:["20w", "4:20"],
						ding:"10",
						cai:"11",
						comment:"18",
						forward:"7"
					};
					this.listitemsdata[index].itemsdata.push(returndata);
					this.listitemsdata[index].shangla = "上拉加载更多";
				}, 1000);
				// this.listitemsdata[index].shangla = "没有更多数据了";
			}
		},
		//监听原生标题导航按钮点击事件
		onNavigationBarButtonTap(e){
			// console.log(JSON.stringify(e));
			if(e.index == 1){
				uni.navigateTo({
					url: '../add-input/add-input',
				});
			}
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url: '../search/search',
			});
		}
	}
</script>

<style>
	

</style>
