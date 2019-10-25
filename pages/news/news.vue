<template>
	<view>
		<self-nav-bar @click-left="navbarleftclick" @click-right="navbarrightclick">
			<block v-slot:left>
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<block>
				<view class="nav-middle">
					<view class="nav-middle-text" :class="{newsnavactive:chooseindex == 0}" @tap="choosenavfn">
						<view v-show="chooseindex == 0" class="chooseviewborder"></view>
						<text>关注</text>
					</view>
					<view class="nav-middle-text" :class="{newsnavactive:chooseindex == 1}" @tap="choosenavfn">
						<view v-show="chooseindex == 1" class="chooseviewborder"></view>
						<text>话题</text>
					</view>
				</view>
			</block>
			<block v-slot:right>
				<view class="nav-right">
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</block>
		</self-nav-bar>
		
		
		<!-- 列表 -->
		<block v-for="(item, index) in datalist.itemsdata" :key="index">
			<common-list :item="item">
				
			</common-list>
		</block>
		
	</view>
</template>

<script>
	import selfNavBar from "../../components/self-nav-bar/self-nav-bar.vue";
	import commonList from "../../components/common/common-list.vue"
	export default {
		data() {
			return {
				chooseindex:0,
				datalist:{
					itemsdata:[
						{
							avatar:"../../static/demo/topicpic/4.jpeg",
							nicheng:"",
							age:"12",
							sex:"girl",
							iscare:false,
							title:"川阿斯顿发送到记得发世界的看法",
							contenttype:"img",
							content:"../../static/demo/datapic/3.jpg",
							addree:"深圳 大同盟",
							zhuanfa:"15",
							pinglun:"50",
							zan:"20",
						},
						{
							avatar:"../../static/demo/topicpic/4.jpeg",
							nicheng:"",
							age:"12",
							sex:"boy",
							iscare:false,
							title:"川阿斯顿发送到记得发世界的看法",
							contenttype:"video",
							playnum:"415",
							time:"2:45",
							content:"../../static/demo/datapic/3.jpg",
							addree:"深圳 大同盟",
							zhuanfa:"15",
							pinglun:"50",
							zan:"20",
						},
						{
							avatar:"../../static/demo/topicpic/4.jpeg",
							nicheng:"",
							age:"12",
							sex:"girl",
							iscare:false,
							title:"川阿斯顿发送到记得发世界的看法",
							contenttype:"img",
							content:"../../static/demo/datapic/3.jpg",
							addree:"深圳 大同盟",
							zhuanfa:"15",
							pinglun:"50",
							zan:"20",
						},
						{
							avatar:"../../static/demo/topicpic/4.jpeg",
							nicheng:"",
							age:"12",
							sex:"boy",
							iscare:false,
							title:"川阿斯顿发送到记得发世界的看法",
							contenttype:"img",
							content:"../../static/demo/datapic/3.jpg",
							addree:"深圳 大同盟",
							zhuanfa:"15",
							pinglun:"50",
							zan:"20",
						},
					]
				}			
			}
		},
		components:{
			selfNavBar,
			commonList
		},
		methods: {
			choosenavfn(){
				if(this.chooseindex == 0){
					this.chooseindex = 1 
					
				}else{
					this.chooseindex = 0
				}
			},
			navbarleftclick(){
				console.log("点击了签到")
			},
			navbarrightclick(){
				console.log("点击了铅笔")
			}
		}
	}
</script>

<style>
/* 自定义导航栏的css */
.nav-left{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.nav-right{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.nav-left > view, .nav-right > view{
	font-size: 50rpx;
}
.nav-left > view{
	color:#FF9619;
}
.nav-right > view{
	color:#333333
}
.nav-middle{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.nav-middle > view{
	margin:0 15rpx;
	color:#969696;
	font-size: 40rpx;
	font-weight: bold;
}
.newsnavactive{
	color:#343434 !important;
}
.chooseviewborder{
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	width:90rpx;
	height:5px;
	border-radius: 3px;
	background-color: #FEDE33;
}
.nav-middle-text{
	position: relative;
	widows: 150rpx;
}

/* 列表样式 */

</style>
