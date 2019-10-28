<template>
	<view class="chatpeople fja-sc" @tap="clickfn">
		<image :src="item.image" mode="widthFix" lazy-load></image>
		<view class="chat_info">
			<view class="username fja-bc">
				{{ item.name }}<view class="last_time">{{ item.time }}</view>
			</view>
			<view class="content fja-bc">
				{{ item.content }}
				<view class="no-read">{{ item.newinfonum }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object
		},
		methods:{
			clickfn(){
				this.$emit('chatfn', this.item.id)
			}
		}
	}
</script>

<style scoped>
.chatpeople{
	height:80px;
	border-bottom:1px solid #f7f7f7;
}
.chatpeople > image{
	width: 120rpx;
	height:120rpx;
	border-radius: 60rpx;
	margin-right:15rpx;
	flex-shrink: 0;
}
.chat_info{
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}
.username{
	color:#000000;
	font-size: 38rpx;
}
.last_time{
	color:#CBCBCB;
}
.content{
	/* color: #999999; */
	color:#000000;
	font-size: 30rpx;
}
.no-read{
	background-color: #FF6333;
	padding:10rpx;
	line-height: 35rpx;
	color:#ffffff;
	border-radius: 25rpx;
}
</style>
