<template>
	<view>
		<view class="scroll-top-view">
			<scroll-view scroll-x="true" class="index-scroll-bar">
				<block v-for="(item, index) in scrolldata" :key="item.id">
					<view class="itemview" :class="{active: choosebar == index}" @tap="bartag(index)">{{item.name}}</view>
				</block>
			</scroll-view>
		</view>
		<!-- <view class="index-scroll-content">
			<scroll-view scroll-y="true" >
				<block v-for="(item, index) in itemsdata" :key = index>
					<index-info :item="item"></index-info>
				</block>
			</scroll-view>
		</view> -->
		

		
	
		
		<block v-for="(item, index) in itemsdata" :key = index>
			<index-info :item="item"></index-info>
		</block>
	</view>
</template>

<script>
	import indexInfo from "../../components/index/index-info.vue";
	
	
	export default {
		data() {
			return {
				choosebar:0,
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
					},
					{
						name:"科学",
						id:"kexue"
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
			bartag(index){
				this.choosebar = index
			}
		}
	}
</script>

<style>

	
	
	
	.scroll-top-view{
		/* overflow: hidden; */
	}
	.index-scroll-bar{
		border-bottom: 1px solid #c8c7cc;
		white-space: nowrap;
		width: 100%;
		overflow: hidden;
	}
	.index-scroll-bar .itemview{
		display: inline-block;
		text-align: center;
		line-height: 100rpx;
		width: 100rpx;
		color: #555;
	}
	.index-scroll-bar .active{
		color:#09BB07;
	}
	
	
	
	.index-scroll-content{
		width: 100%;
		height: calc(100%-100rpx);
	}

</style>
