requirejs.config({
	baseUrl:"lib",
	paths:{
		jquery:"jquery",
		backbone:"backbone",
		shops:"shops",
		action:"action",
		handler:"handler",
	}
});


require(['shops','action','handler'],function(shops,action,handler){
	shops.listShop();
	action.lunbopic();
	handler.splist();
})