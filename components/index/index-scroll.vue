<template>
	<view>
		<scroll-view scroll-x="true" class="index-scroll-bar">
			<!-- 图文列表 -->
			<block v-for="(item, index) in scrolldata" :key="item.id">
				<view class="itemview" :class="{active: choosebar == index}" @tap="bartag(index)">{{item.name}}
					<view :class="{hengtiao:choosebar == index}"></view>
				</view>
			</block>
			
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data:function(){
			return {
			}
		},
		props:{
			//这里面的值，我们无法更改
			scrolldata:Array,
			choosebar:Number,
		},
		methods:{
			bartag:function(index){
				// @tap="$emit('bartap',index)"  替换模板上的 @tap="bartag(index)"， 可以不需要这个函数
				this.$emit("bartap", index)
			}
		}
	}
</script>

<style scoped>
	.index-scroll-bar{
		border-bottom: 1px solid #c8c7cc;
		white-space: nowrap;
		width: 100%;
		overflow: hidden;
	}
	.index-scroll-bar .itemview{
		position: relative;
		display: inline-block;
		text-align: center;
		line-height: 100rpx;
		width: 100rpx;
		color: #555;
	}
	.index-scroll-bar .active{
		color:#09BB07;
	}
	.hengtiao{
		position: absolute;
		top:70rpx;
		left: 50%;
		transform: translateX(-50%);
		width: 70rpx;
		height: 10rpx;
		background-color: #FEDE33;
	}
</style>
