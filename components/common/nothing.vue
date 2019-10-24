<template>
	<view class="nothing">
		<image src="../../static/nothing.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	.nothing{
		display: flex;
		background-color: #FFFFFF;
		justify-content: center;
		align-items:center;
		position: absolute;
		top:0;
		left:0;
		bottom:0;
		right:0;
	}
	.nothing image{
		width: 50%;
	}
</style>
