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
				selfid:0,
				datainfo:[
					{
						user:"other",
						type:"text",
						time:455432564,
						showtime:true,
						content:'头部测试信息',
						userimage:"../../static/demo/demo6.jpg"
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
		onNavigationBarButtonTap(e) {
			console.log(e)
		},
		onLoad(e){
			uni.setNavigationBarTitle({
				title:e.id,
			});
			//设置聊天的主体，仅仅用于调试阶段
			uni.setStorage({
			    key: 'masterid',
			    data: e.id,
			    success: () => {
			        console.log('设置masterid成功');
					//设置当前的id
					this.selfid = e.id
			    }
			});
			uni.getSystemInfo({
				success:(res) => {
					var screenHeight = res.screenHeight;
					var statusBarHeight = res.statusBarHeight;
					this.screenHeight = screenHeight - 44 - statusBarHeight;
					this.scrollheight = screenHeight - 94 - statusBarHeight;
				}
			});
			//连接websocket
			uni.connectSocket({
			    url: 'ws://172.16.192.29:30000',
			});
			uni.onSocketOpen((res) =>  {
			  console.log('WebSocket连接已打开！');
			  //开始监听websocket返回的消息
			  uni.onSocketMessage((res) => {
				  var receivedata = JSON.parse(res.data)
				 if(receivedata.id != this.selfid){
					 var nowtime = new Date();
					 var showtime = false;
					 //超过30s的信息间隔就显示时间
					 if(nowtime.getTime() > this.datainfo[this.datainfo.length-1].time + 30000){
					 	showtime = true;
					 };
					 var confirmc = {
					 	user:"other",
					 	type:"text",
					 	time:nowtime.getTime(),
					 	showtime:showtime,
					 	content:receivedata.text,
					 	userimage:"../../static/demo/demo6.jpg",
					 }
					 this.datainfo.push(confirmc);
					 // console.log('收到服务器别人的内容：' + res.data);
					 this.changeScrollTop();
				 }else{
					 // console.log('收到服务器自己的内容：' + res.data);
				 }  
			  });
			});
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
				var That = this;
				if(this.inputtext != ''){
					var nowtime = new Date();
					var showtime = false;
					//超过30s的信息间隔就显示时间
					if(nowtime.getTime() > this.datainfo[this.datainfo.length-1].time + 30000){
						showtime = true;
					};
					var confirmc = {
						selfid: this.selfid,
						user:"self",
						type:"text",
						time:nowtime.getTime(),
						showtime:showtime,
						content:this.inputtext,
						userimage:"../../static/demo/demo6.jpg",
					}
					this.datainfo.push(confirmc);
					this.inputtext="";
					//利用websocket发送消息
					That.config.wsSendTextfn('uni/chat', confirmc)
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
		
		// onUnload(){
		// 	console.log("退出");
		// 	uni.hideKeyboard();		
		// },
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
