<template>
	<view class="chatborder">
		<template v-if="item.showtime">
			<view class="sendtime">{{ timetrans }}</view>
		</template>
		<view class="otherinfo" :class="[item.user == 'self' ? 'flexdirection' : '']">
			<image :src="item.userimage" lazy-load mode="widthFix"></image>
			<block v-if="item.type == 'text'">
				<view :class="[item.user == 'self' ? 'marginLeft150' : 'marginRight150']">
					{{ item.content }}
				</view>
			</block>
		</view>
	</view>
	<!-- <div class="chatborder">
		<template v-if="item.showtime">
			<div class="sendtime">{{ timetrans }}</div>
		</template>
		<div class="otherinfo" :class="[item.user == 'self' ? 'flexdirection' : '']">
			<image :src="item.userimage" lazy-load mode="widthFix"></image>
			<block v-if="item.type == 'text'">
				<div :class="[item.user == 'self' ? 'marginLeft150' : 'marginRight150']">
					{{ item.content }}
				</div>
			</block>
		</div>
	</div> -->
</template>

<script>
	export default {
		data() {
			return {
				showcolor:false
			}
		},
		props:{
			item:Object
		},
		computed:{
			timetrans:function(){
				if(Number(this.item.time) > 1000){
					var time = new Date(this.item.time);
					return time;
				}else{
					return "";
				}
			}
		},
		methods: {
			show() {
				console.log("asd12")
			},
		}
	}
</script>

<style scoped>
.sendtime{
	width: 100%;
	text-align: center;
	color:#A3A3A3;
	margin-bottom: 5px;
	margin-top:7px;
}
.otherinfo{
	display: flex;
	width: 100%;
	overflow: hidden;
	margin-bottom: 15px;
}
.flexdirection{
	flex-direction: row-reverse;
}

.marginRight150{
	margin-right:150rpx;
}
.marginLeft150{
	margin-left:150rpx;
}
.otherinfo > image{
	width: 100rpx;
	height: 100rpx;
	border-radius: 50px;
	margin-right: 10rpx;
	flex-shrink:0;
}	
.otherinfo > view{
	background-color: #F4F4F4;
	padding:15rpx;	
	border-radius: 10rpx;
	margin-top: 30rpx;
	font-size: 30rpx;
	line-height: 60rpx;
}
/* .otherinfo > div{
	background-color: #F4F4F4;
	padding:15rpx;	
	border-radius: 10rpx;
	margin-top: 30rpx;
	font-size: 30rpx;
	line-height: 60rpx;
} */

</style>
