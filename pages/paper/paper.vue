<template>
	<view class="margin20">
		
		<view class="feature"  :style="{'display': showfeature}">
			<view class="icon iconfont icon-sousuo" @tap="addFirendFn">叫糗友</view>
			<view class="icon iconfont icon-qingchu" @tap="clearMessageFn">清除未读</view>
		</view>
		<view class="menban"  :style="{'display': showfeature}" @tap="menbanfn">
			
		</view>
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
				showfeature:"none",
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
			},
			menbanfn(){
				this.showfeature == "none" ? (this.showfeature = "block") : (this.showfeature = "none")
			},
			addFirendFn(){
				console.log("加糗友")
			},
			clearMessageFn(){
				console.log("清除消息")
			}
		},
		onNavigationBarButtonTap(e){
			if(e.index){
				this.showfeature == "none" ? (this.showfeature = "block") : (this.showfeature = "none") 
			}else{
				console.log("左边")
			}
		}
	}
</script>

<style>
.margin20{
	margin:0 20rpx;
	position:relative
}
.feature{
	position:absolute;
	top:2px;
	right:-20rpx;
	box-shadow: -4rpx 5rpx 10rpx #333333;
	z-index: 9999;
	padding:0 20rpx;
	background-color: #FFFFFF;
}
.feature > view{
	padding-right:100rpx;
	line-height:40px;
}
.feature > view:first-child{
	border-bottom:1px solid #f7f7f7;
}
.menban{
	position:fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	/* background-color: #007AFF; */
}
</style>
