define('shops',["jquery","handler"],function($,handler){
	return {
		//取数据
		listShop:function(){
			$.ajax({
				type:"get",
				url:"http://localhost:3000/tcb",
				success:function(data){
					console.log(data)
					handler.handlerData(data)
				}
			})
		}
	}
})