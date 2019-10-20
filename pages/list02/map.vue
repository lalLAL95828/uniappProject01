<template>
	<view class="">
		<navigator url="../index/index" id="1"></navigator>
		<map style="width: 100%; height: 300px;" :polyline="polyline"  @controltap="controltap"  :controls="controls" :latitude="latitude" :longitude="longitude" :markers="covers" :circles="circles">
		</map>
		
	</view>
</template>

<script>
	export default {
		data:function(){
			return {
				latitude:39.909,
				longitude:116.39742,
				//添加圆
				circles:[
					{
						latitude:39.906,
						longitude:116.39742,
						color:"#000085",
						radius:20,
						fillColor:"#222251",
					}
				],
				covers:[
					{
						latitude:39.909,
						longitude:116.39742,
						iconPath:"../../static/dingwei.png"
					}
				],
				//添加控件
				controls:[
					{
						id:1,
						iconPath:"../../static/logo.png",
						clickable:true,
						position:{
							left:1,
							top:1,
							width:40,
							height:40,
						}
					}
				],
				//添加路线,
				polyline:[
					{
						points:[
							{latitude:39.909, longitude: 116.39742},
							{latitude:39.906, longitude: 116.39742},
							{latitude:39.903, longitude: 116.39742},
						],
						color:"#212125",
					},
					{
						points:[
							{latitude:39.909, longitude: 116.39762},
							{latitude:39.909, longitude: 116.39742},
							{latitude:39.903, longitude: 116.39722},
						],
						color:"#245632",
					}
				]
			}
		},
		methods:{
			controltap(){
				uni.navigateTo({
					url:"../index/index",
					animationDuration:'pop-out',
				})
			}
			
		}
	}
	
	
</script>

<style>
	/* #dingweiPNg{
		width: 20rpx;
		height:20px;
	} */
</style>
