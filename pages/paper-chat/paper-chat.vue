<template>
	<view class="marginL20" :style="{'height': screenHeight + 'px'}">

		<scroll-view scroll-y class="chatscroll"
		:style="{'height': scrollheight + 'px'}"
		:scroll-top="scrollTopHeight">
			<block v-for="(item, index) in datainfo" :key="index">
				<view class="scroll_item">
					<paper-info :item="item" ref="paperInfo"></paper-info>
				</view>
			</block>
		</scroll-view>
		<view class="fja-bc inputshuru">
			<input id="chat" ref="chat" type="text" placeholder="唠两句" 
			@focus="inputfocusfn" @blur="inputblurfn" v-model="inputtext" 
			@confirm="inputconfirmfn" confirm-hold=true />
			<view class="icon iconfont icon-fabu" @tap="inputconfirmfn"></view>
		</view>
	</view>
</template>

<script>
	import paperInfo from "../../components/paper/paper-info.vue";
	export default {
		data() {
			return {
				screenHeight:500,
				scrollheight:300,
				scrollTopitemH:0,
				scrollTopitemnum:0,
				scrollTopHeight:0,
				inputtext:"",
				datainfo:[
					{
						user:"other",
						type:"text",
						time:455432564,
						showtime:true,
						content:'toubu大大说的就是叫大家是否把水电费会尽快送达回房间卡士大夫阖家安康收到货·及时都会放假看上的风景SD卡交话费卡就是',
						userimage:"../../static/demo/demo6.jpg"
					},
					{
						user:"self",
						type:"text",
						time:454453324,
						showtime:false,
						content:'知道了',
						userimage:"../../static/demo/demo6.jpg",
					},
					{
						user:"other",
						type:"text",
						time:456431345,
						showtime:true,
						content:'大大说的就是叫大家是否把水电费会尽快送达回房间卡士大夫阖家安康收到货·及时都会放假看上的风景SD卡交话费卡就是',
						userimage:"../../static/demo/demo6.jpg"
					},
					{
						user:"other",
						type:"text",
						time:455432564,
						showtime:true,
						content:'toubu大大说的就是叫大家是否把水电费会尽快送达回房间卡士大夫阖家安康收到货·及时都会放假看上的风景SD卡交话费卡就是',
						userimage:"../../static/demo/demo6.jpg"
					},
					{
						user:"self",
						type:"text",
						time:454453324,
						showtime:false,
						content:'知道了',
						userimage:"../../static/demo/demo6.jpg",
					},
					{
						user:"other",
						type:"text",
						time:455432564,
						showtime:true,
						content:'toubu大大说的就是叫大家是否把水电费会尽快送达回房间卡士大夫阖家安康收到货·及时都会放假看上的风景SD卡交话费卡就是',
						userimage:"../../static/demo/demo6.jpg"
					},
					{
						user:"self",
						type:"text",
						time:454453324,
						showtime:false,
						content:'知道了',
						userimage:"../../static/demo/demo6.jpg",
					},
					{
						user:"other",
						type:"text",
						time:455432564,
						showtime:true,
						content:'toubu大大说的就是叫大家是否把水电费会尽快送达回房间卡士大夫阖家安康收到货·及时都会放假看上的风景SD卡交话费卡就是',
						userimage:"../../static/demo/demo6.jpg"
					},
					{
						user:"self",
						type:"text",
						time:454453324,
						showtime:false,
						content:'知道了',
						userimage:"../../static/demo/demo6.jpg",
					},
					{
						user:"other",
						type:"text",
						time:455432564,
						showtime:true,
						content:'toubu大大说的就是叫大家是否把水电费会尽快送达回房间卡士大夫阖家安康收到货·及时都会放假看上的风景SD卡交话费卡就是',
						userimage:"../../static/demo/demo6.jpg"
					},
					{
						user:"self",
						type:"text",
						time:454453324,
						showtime:false,
						content:'知道了',
						userimage:"../../static/demo/demo6.jpg",
					},
					{
						user:"other",
						type:"text",
						time:455432564,
						showtime:true,
						content:'toubu大大说的就是叫大家是否把水电费会尽快送达回房间卡士大夫阖家安康收到货·及时都会放假看上的风景SD卡交话费卡就是',
						userimage:"../../static/demo/demo6.jpg"
					},
					{
						user:"self",
						type:"text",
						time:454453324,
						showtime:false,
						content:'知道了',
						userimage:"../../static/demo/demo6.jpg",
					},
					{
						user:"other",
						type:"text",
						time:455432564,
						showtime:true,
						content:'toubu大大说的就是叫大家是否把水电费会尽快送达回房间卡士大夫阖家安康收到货·及时都会放假看上的风景SD卡交话费卡就是',
						userimage:"../../static/demo/demo6.jpg"
					},
					{
						user:"self",
						type:"text",
						time:454453324,
						showtime:false,
						content:'知道了',
						userimage:"../../static/demo/demo6.jpg",
					},
					{
						user:"other",
						type:"text",
						time:455432564,
						showtime:true,
						content:'toubu大大说的就是叫大家是否把水电费会尽快送达回房间卡士大夫阖家安康收到货·及时都会放假看上的风景SD卡交话费卡就是',
						userimage:"../../static/demo/demo6.jpg"
					},
					{
						user:"self",
						type:"text",
						time:454453324,
						showtime:false,
						content:'知道了',
						userimage:"../../static/demo/demo6.jpg",
					},
				]
			}
		},
		components:{
			paperInfo,
		},
		onReady(){
			this.changeScrollTop(true);
		},
		onLoad(e){
			uni.setNavigationBarTitle({
				title:e.id,
			});
			uni.getSystemInfo({
				success:(res) => {
					var screenHeight = res.screenHeight;
					var statusBarHeight = res.statusBarHeight;
					this.screenHeight = screenHeight - 44 - statusBarHeight;
					this.scrollheight = screenHeight - 94 - statusBarHeight;
				}
			})
		},
		methods: {
			inputfocusfn(e){
				var jianpanheight = Number(e.detail.height);
				uni.getSystemInfo({
					success:(res) => {
						var screenHeight = res.screenHeight;
						var statusBarHeight = res.statusBarHeight;
						this.scrollheight = screenHeight - 94 - statusBarHeight - jianpanheight;
						//执行滚动条的位置变化
						this.changeScrollTop();
					}
				})
			},
			inputblurfn(e){
				uni.getSystemInfo({
					success:(res) => {
						var screenHeight = res.screenHeight;
						var statusBarHeight = res.statusBarHeight;
						this.scrollheight = screenHeight - 94 - statusBarHeight;
						//执行滚动条的位置变化
						this.changeScrollTop();
					}
					
				})
			},
			inputconfirmfn(){
				if(this.inputtext != ''){
					var nowtime = new Date();
					var showtime = false;
					//超过30s的信息间隔就显示时间
					if(nowtime.getTime() > this.datainfo[this.datainfo.length-1].time + 30000){
						showtime = true;
					};
					var confirmc = {
						user:"self",
						type:"text",
						time:nowtime.getTime(),
						showtime:showtime,
						content:this.inputtext,
						userimage:"../../static/demo/demo6.jpg",
					}
					this.datainfo.push(confirmc);
					this.inputtext="";
					//执行滚动条的位置变化
					this.changeScrollTop();
					//依然让input获取焦点，保持软键盘显示状态

				}
			},
			//设置scroll-view的滚动条位置，目的就是为了让页面自动滚动到最新的位置处的消息位置处
			changeScrollTop(isfirst = false){
				var selectorQuery = uni.createSelectorQuery().in(this);
				var itemH = selectorQuery.selectAll(".scroll_item");
				itemH.fields({
					size:true
				}, (data) => {
					if(this.scrollTopitemnum != data.length && isfirst == true){
						for(let i=0; i< data.length; i++){
							this.scrollTopitemH += data[i].height
						};
					}else if(this.scrollTopitemnum != data.length && isfirst == false){
						this.scrollTopitemH += data[data.length - 1].height
					}else{
						
					}
					//判断数据量是否超过scroll-view的高度
					if(this.scrollTopitemH > this.scrollheight){
						this.scrollTopHeight = this.scrollTopitemH
					}else{
						this.scrollTopHeight = 0;
					};
				}).exec();

			},
		},
		
		onUnload(){
			console.log("退出");
			uni.hideKeyboard();		
		},
	}
</script>

<style>
.marginL20{
	margin:0 20rpx;
	position:relative;
}
.chatscroll{
	position: absolute;
	bottom: 50px;
/* 	border:1px solid #007AFF; */
	width: 100%;
}
.inputshuru{
	position:absolute;
	display: flex;
	align-content: center;
	height: 50px;
	bottom:0;
	left:0;
}
.inputshuru > input{
	width: 580rpx;
	padding: 5rpx 5px;
	flex-grow:1;
	height: 40px;
	font-size: 35rpx;
	background-color: #F7F7F7;
	border-radius: 20rpx;
}
.inputshuru > view{
	width: 120rpx;
	text-align: center;
	line-height: 40px;
	margin-left:10rpx;
	border-radius: 20rpx;
	flex-grow:0;
	flex-shrink:0;
	font-size: 50rpx;
	background-color: #F7F7F7;

}

</style>
