<template>
	<view class="">
		<view class="body-class" hover-class="body-class-hover rollIn animated" hover-stay-time="1000">
			<text>你好\n 
				我不好\n
				真的吗
				假的
			</text>
			<view class="body2-class" >
				<view :style="{color: yanse}">1</view>
				<view>2</view>
				<view :style="styleObject">3</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yanse:"red"
			}
		},
		computed:{
			
		},
		methods: {
			styleObject:function(){
				return {
					"color":"red"
				}
			}
		}
	}
</script>

<style>
.body-class{
	width: 500rpx;
	height:500px;
	background-color:#007AFF;
	color:white;
}
.body-class-hover{
	background-color:#FF3333;
}
text{
	font-size:13px;
}
/* css3的选择器依然可以正常使用 */
.body2-class > view:nth-child(2){
	color:red;
}
</style>
