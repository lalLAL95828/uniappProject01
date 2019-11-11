<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// console.log(this.config)
			//监听网络变化
			this.config.network.on()
			//热更新
			this.config.upload()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/uni.css");
	@import url("./common/icon.css");
	/* 引入动画库 */
	@import url("./common/animates.css");
	/* 引入全部的字体图标 */
	@import url("./common/iconfont.css");
	/* 引入自定义的公共样式 */
	@import url("./common/selfcommon.css");
</style>
