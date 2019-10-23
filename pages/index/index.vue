<template>
	<view>
	
		<scroll-view scroll-x="true" class="index-scroll-bar">
			<block v-for="item in scrolldata" :key="item.id">
				<view>{{item.name}}</view>
			</block>
		</scroll-view>
		

		
	
		
		<!-- <block v-for="(item, index) in itemsdata" :key = index>
			<index-info :item="item"></index-info>
		</block> -->
	</view>
</template>

<script>
	import indexInfo from "../../components/index/index-info.vue";
	
	
	export default {
		data() {
			return {
				scrolldata:[
					{
						name:"体育",
						id:1
					},
					{
						name:"美术",
						id:2
					},
					{
						name:"音乐",
						id:3
					},
					{
						name:"自然",
						id:4
					},
					{
						name:"英语",
						id:5
					},
					{
						name:"数学",
						id:6
					},
					{
						name:"语文",
						id:7
					},
					{
						name:"物理",
						id:8
					},
					{
						name:"科学",
						id:9
					},
				],
				itemsdata:[
					{
						avater:"../../static/demo/userpic/6.jpg",
						title:"又是任性的一天",
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
						medio:"../../static/demo/datapic/1.jpg",
						mediotype:"vedio",
						meidioinfo:["20w", "4:20"],
						ding:"10",
						cai:"11",
						comment:"18",
						forward:"7"
					},
				]
			}
		},
		components:{
			indexInfo,
		},
		onLoad() {

		},
		
		methods: {

		}
	}
</script>

<style>
	.shiyan0{
		display: flex;
		
	}
	
	
	
	.scroll-top-view{
		/* overflow: hidden; */
	}
	.index-scroll-bar{
		/* display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		width: 100%;
		overflow: hidden; */
		/* white-space: nowrap; */
		/* line-height: 100rpx; */
		/* height: 100rpx; */
		border-bottom: 1px solid #c8c7cc;
	}
	.scroll-bar view{
		flex:1;
	}
	
</style>
