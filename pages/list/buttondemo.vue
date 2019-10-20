<template>
	<view>
		<text>这只是一个实验</text>
		<button type="primary" @click="func01">按钮</button>
		<button type="primary" @click="func02">按钮</button>
		<navigator open-type="navigate" url="./viewdemo01">按钮02</navigator>
		<navigator open-type="navigate" url="../list02/map">map</navigator>
		<navigator open-type="navigate" url="../list02/web-view">web-view</navigator>
		<view class="icon iconfont icon-AffordableCredit" style="color:red; font-size: 30rpx;"></view>
		<view class="animated rollIn">图标上面</view>
	</view>
</template>

<script>
	export default {
		methods:{
			func01 () {
				uni.navigateTo({
					url:"../index/index"
				})
			},
			func02 () {
				uni.navigateTo({
					url:"./viewdemo02"
				})
			}
		}
	}
	
	
</script>

<style lang="scss">
	.style01{
		color: $uni-text-color-grey;
	}
</style>
