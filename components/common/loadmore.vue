<template>
	<view class="index-more">{{ shangla }}</view>
</template>

<script>
	export default{
		
		props:{
			shangla:String
		}

	}
	
</script>

<style scoped>
	.index-more{
		text-align: center;
		color: #aaaaaa;
		padding: 10rpx;
	}
</style>
