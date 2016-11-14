
		$("#li1").mouseover(function(){
			$("#xianshi1").css("display","block")
			.css("borderTop","1px solid #FFFFFF")
			.css("zIndex","1")
			
			$("#li1").css("borderBottom","1px solid #FFFFFF")
			.css("borderLeft","1px solid #E5E5E5")
			.css("borderRight","1px solid #E5E5E5")
			.css("background","#FFFFFF")
			//图标旋转
			$("#span-bar1").css("transform","rotate(180deg)")
			.css("transition","transform 0.3s linear")
			.css("transformOrigin","50% 68%")
			
		})
		$("#li1").mouseout(function(){
			$("#xianshi1").css("display","none")
			$("#li1").css("background","#f2f2f2")
			.css("borderBottom","1px solid #E5E5E5")
			.css("borderLeft","1px solid #f2f2f2")
			.css("borderRight","1px solid #f2f2f2")
			$("#span-bar1").css("transform","rotate(0deg)")
			.css("transition","transform 0s linear")
		})
		
		//轮播效果
//---------------------------------------------------------------------------------------------
//			改变图片函数
				var timer;
				var points = document.querySelectorAll(".point");
				
				points[0].style.background = 'whitesmoke'
				
				var arr = ["#0571F8","#41fabc","#fe3f82","#F5A700","#cf48fa","#E42836"]
				
				var num = 0;
				function changeImg() {
					num++;
					if(num==6){
						num=0;
						points[5].style.backgroundColor = "transparent";
					}else{
//						num=num;
						points[num-1].style.backgroundColor = "transparent";
					}
					 $('#lunbo-middle img').fadeOut(200, function() {
					 	$("#lunbo-middle img").attr("src","../images/img" + num + ".jpg")
						
						$("#lunbo-items").css("background",arr[num])
					 	
					 	$('#lunbo-middle img').fadeIn(500)
						
                    });
				    
//						$("#lunbo-middle img").attr("src", "../images/img" + num + ".jpg")
//						$("#lunbo-items").css("background",arr[num])
//                  });
					
					points[num].style.backgroundColor = "whitesmoke";	
				}	
//				changeImg()
					timer = setInterval(changeImg,2000);
//				点击小圆点跳转那张图片
//				console.log(points)
				for(var i = 0; i < points.length; i++) {
					points[i].dataset.index = i;
					points[i].onclick = function() {
						clearInterval(timer)
						num = this.dataset.index;
//						changeImg();
						timer = setInterval(changeImg,2000);
						console.log(this)
						for(var j=0;j<points.length;j++){
							points[j].style.backgroundColor = "transparent";
						}
						this.style.backgroundColor = "whitesmoke";	
						$("#lunbo-middle img").attr("src", "../images/img" + num + ".jpg")
						$("#lunbo-items").css("background",arr[num])
					}
				}
//-------------------------------------------------------------------------------------------
				
			
//			lis[0].onmouseover = function(){
//				$("#display1").css("display","block")
//				lis[0].style.background = "red"
//			}
//			lis[0].onmouseout = function(){
//				$("#display1").css("display","none")
//				lis[0].style.backgroundColor = "#EEEEEE"
//			}
//			$("#display1").mouseover(function(){
//				$(this).css("display","block")
//				lis[0].style.background = "red"
//			})
//			$("#display1").mouseout(function(){
//				$(this).css("display","none")
//				lis[0].style.background = "#EEEEEE"
//			})
//			
//		//	
//			
//			lis[1].onmouseover = function(){
//				$("#display2").css("display","block")
//				lis[1].style.background = "red"
//			}
//			
//			lis[1].onmouseout = function(){
//				$("#display2").css("display","none")
//				lis[1].style.backgroundColor = "#EEEEEE"
//			}
//			$("#display2").mouseover(function(){
//				$(this).css("display","block")
//				lis[1].style.background = "red"
//			})
//			$("#display2").mouseout(function(){
//				$(this).css("display","none")
//				lis[1].style.background = "#EEEEEE"
//			})
//		
			var lis = document.querySelectorAll("#lunbo-ul li")
			var displays = document.querySelectorAll(".display")
//			var arrDisplay = ["#display0","#display1","#display2","#display3","#display4","#display5","#display6","#display7","#display8","#display9","#display10","#display11","#display12","#display13","#display14","#display15"]
//			$("#lunbo-ul .item").mouseover(function(){
//				$(".div-hide:eq("+$(this).index()+")").css("display","block");
//				$(this).css("background-color","red");
//			}).mouseout(function(){
//				$(".div-hide:eq("+$(this).index()+")").css("display","none");
//				$(this).css("background-color","#EEEEEE");
//			})
//			$(".div-hide").mouseover(function(){
//				$(this).css("display","block");
//				$("#lunbo-ul .item:eq("+$(this).index()+")").css("background-color","red");
//			}).mouseout(function(){
//				console.log($(this).index())
//				$(this).css("display","none");
//				$("#lunbo-ul .item:eq("+$(this).index()+")").css("background-color","#EEEEEE");
//			})
			for(var i=0;i<lis.length;i++){
			lis[i].dataset.index = i
			displays[i].index = i
			lis[i].onmouseover = function(){
			
				$("#display"+this.dataset.index).css("display","block")
				
				this.style.background = "#FFFFFF"
			}
			
			lis[i].onmouseout = function(){
				for(var j=0;j<lis.length;j++){
					$("#display"+this.dataset.index).css("display","none")
				}
				this.style.backgroundColor = "#EEEEEE"
			}
			
			
			$(displays[i]).mouseover(function(){
				this.style.display = "block"
				lis[this.index].style.background = "#FFFFFF"
				
			})
			$(displays[i]).mouseout(function(){
				$(this).css("display","none")
				lis[this.index].style.background = "#EEEEEE"
				
			})
			}

			if($.cookie("token")){
				//已经登录
				$("#account").text($.cookie("account"));
				$("#regist").text("");
				var str = "<span>  积分280  </span>"
				$(str).appendTo($("#regist"))
				
				var Str = "<a onclick='BtnClick()'>退出登录</a>"
				$(Str).appendTo($("#nav1-left"))
				}
			

			BtnClick = function(){
				$.removeCookie("token");
				//刷新本页
				location.reload();
				
			}