<template>
	<view class="">
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
	
	
	
</style>
