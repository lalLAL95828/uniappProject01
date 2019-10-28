<template>
	<view class="margin20">
		<block v-for="(item, index) in datalist" :key="index">
			<paper-chat :item="item" @chatfn="chatclickfn"></paper-chat>
		</block>
	</view>
</template>

<script>
	import paperChat from "../../components/paper/paper-chat.vue"
	export default {
		data() {
			return {
				datalist:[
					{
						id:"adahsdha",
						image:"../../static/demo/topicpic/13.jpeg",
						name:"好的撒旦",
						time:"11：30",
						content:"啊科技时代合法即使对方",
						newinfonum:"20"
					},
					{
						id:"adahsdha",
						image:"../../static/demo/topicpic/13.jpeg",
						name:"好的撒旦",
						time:"11：30",
						content:"啊科技时代合法即使对方",
						newinfonum:"20"
					},
					{
						id:"adahsdha",
						image:"../../static/demo/topicpic/13.jpeg",
						name:"好的撒旦",
						time:"11：30",
						content:"啊科技时代合法即使对方",
						newinfonum:"20"
					},
					{
						id:"adahsdha",
						image:"../../static/demo/topicpic/13.jpeg",
						name:"好的撒旦",
						time:"11：30",
						content:"啊科技时代合法即使对方",
						newinfonum:"20"
					},
					{
						id:"adahsdha",
						image:"../../static/demo/topicpic/13.jpeg",
						name:"好的撒旦",
						time:"11：30",
						content:"啊科技时代合法即使对方",
						newinfonum:"20"
					},
					{
						id:"adahsdha",
						image:"../../static/demo/topicpic/13.jpeg",
						name:"好的撒旦",
						time:"11：30",
						content:"啊科技时代合法即使对方",
						newinfonum:"20"
					},
					
				]
			}
		},
		components:{
			paperChat,
		},
		methods: {
			chatclickfn(itemid){
				uni.navigateTo({
					url:"../../pages/paper-chat/paper-chat?id=" + itemid
				})
			}
		},
		onNavigationBarButtonTap(e){
			if(e.index){
				console.log("点击了左边")
			}else{
				console.log("点击了右边")
			}
		}
	}
</script>

<style>
.margin20{
	margin:0 20rpx;
}

</style>
