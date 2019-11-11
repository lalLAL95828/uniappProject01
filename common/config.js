
const network = {
	isConnect:false,
	on(){
		var That = this;
		uni.getNetworkType({
		    success: function (res) {
		        console.log(res.networkType);
				if(res.networkType == "none"){
					uni.showToast({
						title:"请先连接网络",
						icon:"none"
					})
				}else{
					That.isConnect = true
				}
		    }
		});
		//实时监听网络变化；
		uni.onNetworkStatusChange(function (res) {
			That.isConnect = res.isConnected;
			if(That.isConnect){
				uni.showToast({
					title:"网络已断开",
					icon:"none"
				})
			}
		});
	}
	
}

const wsSendTextfn = function(type="", text=""){
	var sendata = JSON.stringify({type:type, text:text})
	uni.sendSocketMessage({
	     data:sendata
	});

}

//热更新
const upload = function(){
	// #ifdef APP-PLUS  
	plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
	    uni.request({  
	        url: 'http://www.example.com/update/',  
	        data: {  
	            version: widgetInfo.version,  
	            name: widgetInfo.name  
	        },  
	        success: (result) => {  
	            var data = result.data;  
	            if (data.update && data.wgtUrl) {  
	                uni.downloadFile({  
	                    url: data.wgtUrl,  
	                    success: (downloadResult) => {  
	                        if (downloadResult.statusCode === 200) {  
	                            plus.runtime.install(downloadResult.tempFilePath, {  
	                                force: false  
	                            }, function() {  
	                                console.log('install success...');  
	                                plus.runtime.restart();  
	                            }, function(e) {  
	                                console.error('install fail...');  
	                            });  
	                        }  
	                    }  
	                });  
	            }  
	        }  
	    });  
	});  
	// #endif
}

export default{
	network,
	upload,
	wsSendTextfn
}