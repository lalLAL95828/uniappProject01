<template>
	<view class="common-list animated bounceIn" :key="item.id ? item.id : ''">
		<view class="common-list-l">
			<image :src="item.avatar" lazy-load mode="widthFix"></image>
		</view>
		<view class="common-list-r" >
			<view class="fja-bc">
				<view class="fja-sc common-list-r-userinfo">{{ item.nicheng }}<view class="icon iconfont" 
				:class="[item.sex== 'boy' ? 'icon-nan' : 'icon-nv']"><text style="margin-left: 5px;">
				{{ item.age }}</text></view></view>
				<template v-if="!item.iscare">
					<view class="icon iconfont icon-zengjia" @tap="clickcare">关注</view>
				</template>
				
			</view>
			<view class="common-list-r-2">{{ item.title }}</view>
			<view class="common-list-r-3">
				<block v-if="item.contenttype == 'video'">
					<view class="viewComponentdo">
						<view class="icon iconfont icon-bofang"></view>
					</view>
					<view class="viewComponentInfo fja-sc">
						<text>{{  item.playnum }}</text>次播放
						<text style="margin-left:6px">{{  item.time }}</text>
					</view>
					<image :src="item.content" lazy-load mode="widthFix"></image>
				</block>
				<block v-else-if="item.contenttype == 'url'">
					<view class="urltemplate">
						<view class="fja-sc" @tap="clickurl">
							<image :src="item.content" mode="widthFix" lazy-load></image>
							<view class="urlTitle">
								{{ item.contenttitle }}
							</view>
						</view>
					</view>
				</block>
				<block v-else-if="item.contenttype == 'img'">
					<image :src="item.content" lazy-load mode="widthFix"></image>
				</block>		
			</view>
			<view class="fja-bc common-list-r-4">
				<view>{{ item.addree }}</view>
				<view class="fja-sc common-list-r-4-do">
					<view class="icon iconfont icon-zhuanfa do-margin" @tap="clickzhuanfa">{{ item.zhuanfa }}</view>
					<view class="icon iconfont icon-pinglun do-margin" @tap="clickpinglun">{{ item.pinglun }}</view>
					<view class="icon iconfont icon-ccdbaa do-margin" @tap="clickzan">{{ item.zan }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object
		},
		methods:{
			clickcare(){
				this.$emit("clickcare")
			},
			clickzhuanfa(){
				this.$emit("clickzhuanfa")
			},
			clickpinglun(){
				this.$emit("clickpinglun")
			},
			clickzan(){
				this.$emit("clickzan")
			},
			clickurl(){
				this.$emit("clickurl")
			}
			
		}
	}
	
</script>

<style scoped>
.common-list{
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	margin:5px 10px;
	border-bottom:1px solid #EEEEEE;
}
.common-list-l > image{
	width: 100rpx;
	border-radius: 50rpx;
}
.common-list-r{
	flex:1
}
.common-list-r-2{
	font-size: 32rpx;
	color:#010101;
	line-height:45rpx;
}
.common-list-r-3{
	position: relative;
}
.common-list-r-3 > image{
	width: 100%;
	border-radius: 5px;
}
.common-list-r-4{
	line-height: 40rpx;
	color:#BCBCBC;
	font-size: 32rpx;
}
.common-list-r-4-do{
	margin:0 10rpx;
}
.common-list-r-userinfo{
	line-height: 50rpx;
	color:#999999;
}
.icon-nan{
	background-color:#44B3FF;
	padding:0 4px;
	line-height: 38rpx;
	border-radius: 15rpx;
	margin-left: 10rpx;
	color:#FDFEFF;
}
.icon-nv{
	background-color:#FE78DB;
	padding:0 4px;
	line-height: 38rpx;
	border-radius: 15rpx;
	margin-left: 10rpx;
	color:#FDFEFF;
}
.do-margin{
	margin: 0 10rpx;
}
.viewComponentdo{
	position: absolute;
	top: 15rpx;
	left: 50%;
	transform: translateX(-50%);
}
.viewComponentdo > view{
	font-size:120rpx;
	color:#FFFFFF;
}
.viewComponentInfo{
	position: absolute;
	right:10rpx;
	bottom:20rpx;
	padding: 2rpx 15rpx;
	border-radius: 30rpx;
	color: #F7F7F6;
	background-color: rgba(155,155,155,0.5);
}
.urltemplate{
	width:100%;
}
.urltemplate > view{
	padding:20rpx 10rpx;
	border-radius: 10rpx;
	background-color: #F7F7F7;
}
.urltemplate > view > image{
	width:200rpx;
	border-radius: 10rpx;
}
.urlTitle{
	/* flex:1; */
	line-height:40rpx;
	margin:0 10rpx;
}
</style>
