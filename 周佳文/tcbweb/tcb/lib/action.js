define('action',function(){
	return {
		createDom:function(){
			//创建商铺列表的div
			var shopList = document.getElementsByClassName("shopList")[0];
			var listItemDiv = document.createElement("div");
			listItemDiv.className = "listItem";
			shopList.appendChild(listItemDiv);
			listItemDiv.style.display = "none";
			//创建放商铺图片的div
			var shopPicDiv = document.createElement("div");
			shopPicDiv.className = "shopPic";
			listItemDiv.appendChild(shopPicDiv);

			var a = document.createElement("a");
			shopPicDiv.appendChild(a);
			//创建存放商铺图片的img
			var img = document.createElement("img");
			img.className = "store_pic"
			a.appendChild(img);
			//创建商铺信息的div
			var contDiv = document.createElement("div");
			contDiv.className = "cont";
			listItemDiv.appendChild(contDiv);
			//创建商铺名称的h3
			var h3 = document.createElement("h3");
			contDiv.appendChild(h3);
			//创建a标签放商铺名，
			var shopnameA = document.createElement("a");
			h3.appendChild(shopnameA);
			shopnameA.className = "shopname";
			var shopGradeDiv = document.createElement("div");
			shopGradeDiv.className = "shop-grade";
			h3.appendChild(shopGradeDiv);
			//创建主营的div
			var descDiv = document.createElement("div");
			descDiv.className = "desc";
			contDiv.appendChild(descDiv);
			//创建店铺地址的div
			var addrDiv = document.createElement("div");
			addrDiv.className = "addr";
			contDiv.appendChild(addrDiv);
			//创建shop-score,放认证信息
			var shopScoreDiv = document.createElement("div");
			shopScoreDiv.className = "shop-score"
			//创建赔付的div
			var score1Div = document.createElement("div");
			score1Div.className = "score1";
			score1Div.innerHTML = "先行赔付";
			//创建放赔付图片的i
			var peifu = document.createElement("i");
			peifu.className = "ion";
			score1Div.appendChild(peifu);
			shopScoreDiv.appendChild(score1Div);
			//创建认证的div
			var score2Div = document.createElement("div");
			score2Div.className = "score2";
			score2Div.innerHTML = "同城帮认证";
			//创建放认证图片的i
			var renzheng = document.createElement("i");
			renzheng.className = "ion1";
			score2Div.appendChild(renzheng);
			shopScoreDiv.appendChild(score2Div);
			//创建人气div
			var renqiDiv = document.createElement("div");
			renqiDiv.className = "renqi";
			shopScoreDiv.appendChild(renqiDiv);
			contDiv.appendChild(shopScoreDiv);
			//创建进入店铺的a标签
			var goShopA = document.createElement("a");
			goShopA.className = "goShop";
			contDiv.appendChild(goShopA);
		},
		lunbopic:function(){
			var ctrlItem = document.getElementsByClassName("ctrl-item");
			var arr = ['./images/shouye/lunbo.jpg','./images/shouye/lunbo1.jpg','./images/shouye/lunbo2.jpg','./images/shouye/lunbo3.gif']
			var index = 0;
			var slideImg = document.getElementById("slideImg");
			
			//轮播图片
			function slide(){
				if (index==arr.length-1) {
					index=0;
				}else{
					index++;
				}
				slideImg.src= arr[index];
				// ctrlItem[index].style.background = "#cea6ac";
			}
			setInterval(slide,2000)
			/////////////////////////////////////////////
			///单击圆点，对应相应的图片
			ctrlItem[0].onclick = function(){
				slideImg.src= arr[0]
				ctrlItem[0].style.background = "#cea6ac";
				ctrlItem[1].style.background = "#185";
				ctrlItem[2].style.background = "#185";
				ctrlItem[3].style.background = "#185";
			}
			ctrlItem[1].onclick = function(){
				slideImg.src= arr[1]
				ctrlItem[1].style.background = "#cea6ac";
				ctrlItem[0].style.background = "#185";
				ctrlItem[2].style.background = "#185";
				ctrlItem[3].style.background = "#185";
			}
			ctrlItem[2].onclick = function(){
				slideImg.src= arr[2]
				ctrlItem[2].style.background = "#cea6ac";
				ctrlItem[0].style.background = "#185";
				ctrlItem[1].style.background = "#185";
				ctrlItem[3].style.background = "#185";
			}
			ctrlItem[3].onclick = function(){
				slideImg.src= arr[3]
				ctrlItem[3].style.background = "#cea6ac";
				ctrlItem[2].style.background = "#185";
				ctrlItem[1].style.background = "#185";
				ctrlItem[0].style.background = "#185";
			}
		}
	}
})