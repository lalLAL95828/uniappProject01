<template>
	<view class="self-navbar">
		<view class="self-navbar__content self-navbar--fixed self-navbar--shadow">
			<uni-status-bar />
			<view class="self-navbar__header">
				<!-- 左边 -->
				<view class="self-navbar__bian" @tap="onClickLeft">
					<slot name="left" />
				</view>
				<!-- 中间 -->
				<view class="self-navbar__middle">
					<slot />
				</view>
				<!-- 右边 -->
				<view class="self-navbar__bian" @tap="onClickRight">
					<slot name="right" />
				</view>
			</view>
		</view>
		<view>
			<uni-status-bar />
			<view class="self-navbar__placeholder" />
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue";
	export default {
		components:{
			uniStatusBar,
		},
		methods:{
			onClickLeft(){
				this.$emit("click-left")
			},
			onClickRight(){
				this.$emit("click-right")
			},
		}
	}
</script>

<style scoped>
@charset "UTF-8";
.self-navbar__content {
	display: block;
	position: relative;
	width: 100%;
	background-color: #fff;
	overflow: hidden
}

.self-navbar__header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 44px;
	line-height: 44px;
	font-size: 16px
}

.self-navbar__bian {
	width: 120upx;
}

.self-navbar__middle {
	width: 100%;
	margin: 0 10upx
}

.self-navbar__placeholder{
	height: 44px
}

.self-navbar--fixed {
	position: fixed;
	z-index: 998
}

.self-navbar--shadow {
	box-shadow: 0 1px 6px #ccc
}
	
</style>
