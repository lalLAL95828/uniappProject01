<template>
	<scroll-view scroll-top="5" scroll-x="true" class="scroll-Y" @scrolltoupper="upper">
		<view>d</view>
		<view>a</view>
		<view>ww</view>
	</scroll-view>
</template>

<script>
	export default {
		methods:{
			upper () {
				console.log("滚动")
			}
		}
	}
</script>

<style>

	
</style>
