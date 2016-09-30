define('handler',['action'],function(action){
	var modesMap = document.getElementById("modesMap");
	var modelMap = document.getElementById("model-map");
	var container = document.getElementById("container");
	var map_close = document.getElementById("map_close");
	return {
		// 处理数据的方法
		// 处理商家信息
		handlerData:function(data){
			var points=[];
			// var names = []
			var current_page;//定义以一个变量，等下好给下一页
			var obj = data.shop_data;
			var pages = document.getElementsByClassName("pages")[0];
			//判断多少数据创建多少分页按扭
			var page1=Math.ceil(obj.length / 5);
			for(var j= 0;j<page1;j++){
				var pageA = document.createElement("span");
				pageA.className = "choose_page";
				pageA.innerHTML = j+1;
				pages.appendChild(pageA);
			}
			var span = document.createElement("span");
			span.innerHTML = "下一页>>";
			span.className = "nextPage";
			pages.appendChild(span);

			function showdata(start,end){
				obj.forEach(function(elem,index){
					action.createDom();
					//获取所需的元素
					var shopname = document.getElementsByClassName("shopname");
					var store_pic = document.getElementsByClassName("store_pic");
					var desc = document.getElementsByClassName("desc");
					var addr = document.getElementsByClassName("addr");
					var renqi = document.getElementsByClassName("renqi");
					var shopGrade = document.getElementsByClassName("shop-grade");
					var goShop = document.getElementsByClassName("goShop");
					shopname[index].innerHTML = obj[index].shop_name;
					store_pic[index].src = obj[index].shop_ico;
					shopGrade[index].innerHTML = "店铺等级：" + obj[index].shop_score;
					desc[index].innerHTML = "主营:"+obj[index].shop_desc;
					addr[index].innerHTML = "地址:"+obj[index].addr;
					renqi[index].innerHTML = "人气:"+obj[index].shop_visit+"人浏览";
					goShop[index].href =obj[index].shop_addr;
					goShop[index].innerHTML = "进入店铺";
					var tmp = [];
					tmp.push(obj[index].map_longitude);
					tmp.push(obj[index].map_latitude);
					// names.push(obj[i].shop_name)
					points.push(tmp);
					if (index>=start && index<=end) {
						// console.log(document.getElementsByClassName("listItem")[index]);
						document.getElementsByClassName("listItem")[index].style.display = "block";
						current_page = (end + 1)/5;
					}
				})
			}
			showdata(0,4)
			
			//给每个按钮绑定点击事件，点击不同的按钮显示不同的商家数据
			var addEventUpdata = (function(){
				if (window.addEventListener) {
					return function(elem,type,fn){
						elem.addEventListener(type,fn)
					}
				}else if (window.attachEvent) {
					elem.attachEvent("on"+type,fn)
				}
			})();
			var btnsAction = function(obj){
				addEventUpdata(obj,"click",clickBtn)
				// console.log("222")
			}

			//获取装所以商铺的div
			var shop_list =document.getElementsByClassName("shopList")[0];
			//获取所有的创建的按钮
			var btns = document.getElementsByClassName("choose_page");
			for(var i =0;i<btns.length;i++){
				btnsAction(btns[i]);
			}
			function clickBtn(event){
				for(var i =0;i<btns.length;i++){
					btns[i].id = " ";
				}
				points = [];
				shop_list.innerHTML = "";
				event = event || window.event;
				var source = event.target || event.srcElement;
				showdata(parseInt(current_page)*5-5,parseInt(current_page)*5-1);
				current_page = parseInt(source.innerHTML);
				source.id = "current_page";
			}
			// console.log(points)
			//单击地图显示地图
			
			modesMap.onclick = function(e){
				e.preventDefault();
				init();
				modelMap.style.display = "block";
				// console.log(obj);
			}
			//单击地图关闭按钮，关闭地图
			
			map_close.onclick = function(){
				modelMap.style.display = "none";
			}
			//地图定位
			map =new AMap.Map("container",{
				center:[116.397428, 39.90923],
				zoom:10
			});
			function init(){
				map.plugin(["AMap.ToolBar"], function(){
		            map.addControl(new AMap.ToolBar());
		        });
			    points.forEach(function(elem,index){
					var marker = new AMap.Marker({
				 		position:elem,
				 		title:obj[index].shop_name,
				 		map:map
				 	})
					var infoWindow = new AMap.InfoWindow({
						content:'<h3>'+obj[index].shop_name+'</h3>'+"<div>" + obj[index].addr+"</div>",
						offset:new AMap.Pixel(8,-25)
					})
					AMap.event.addListener(marker, 'click', function(){
				     	infoWindow.open(map, marker.getPosition());
				     });
				})	
			}
		},
		splist:function(){
			var pngfix = document.getElementsByClassName("pngfix")[0];
			var pngfix1 = document.getElementsByClassName("pngfix")[1];
			var pngfix2 = document.getElementsByClassName("pngfix")[2];
			var pngfix3 = document.getElementsByClassName("pngfix")[3];
			var subItemXsj = document.getElementById("sub-item-xsj");
			var subItemXdn = document.getElementById("sub-item-xdn");
			var subItemMsj = document.getElementById("sub-item-msj");
			var subItemMes = document.getElementById("sub-item-mes");
			//给一级菜单添加事件，显示二级菜单
			pngfix.onmouseover = function(){
				subItemXsj.style.display = "block";
			}
			pngfix.onmouseout = function(){
				subItemXsj.style.display = "none";
			}
			pngfix1.onmouseover = function(){
				subItemXdn.style.display = "block";
			}
			pngfix1.onmouseout = function(){
				subItemXdn.style.display = "none";
			}
			pngfix2.onmouseover = function(){
				subItemMsj.style.display = "block";
			}
			pngfix2.onmouseout = function(){
				subItemMsj.style.display = "none";
			}
			pngfix3.onmouseover = function(){
				subItemMes.style.display = "block";
			}
			pngfix3.onmouseout = function(){
				subItemMes.style.display = "none";
			}
			//给二级菜单添加事件，当鼠标移到二级菜单时，也显示
			subItemXsj.onmouseover = function(){
				subItemXsj.style.display = "block";
			}
			subItemXsj.onmouseout = function(){
				subItemXsj.style.display = "none";
			}
			subItemXdn.onmouseover = function(){
				subItemXdn.style.display = "block";
			}
			subItemXdn.onmouseout = function(){
				subItemXdn.style.display = "none";
			}
			subItemMsj.onmouseover = function(){
				subItemMsj.style.display = "block";
			}
			subItemMsj.onmouseout = function(){
				subItemMsj.style.display = "none";
			}
			subItemMes.onmouseover = function(){
				subItemMes.style.display = "block";
			}
			subItemMes.onmouseout = function(){
				subItemMes.style.display = "none";
			}
		}
	}
})