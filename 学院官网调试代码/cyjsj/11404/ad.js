function SmileAdver_Class(){
	var leftImageArray = new Array(); //保存左边的广告图片数组
	var rightImageArray = new Array(); //保存右边的广告图片数组
	var leftPos,rightPos; //leftPos = 左边广告的距左边栏位置(px) rightPos = 右边广告的距右边栏位置(px)
	var leftTop,rightTop; //leftTop = 左边广告的距顶边栏位置(px) rightTop = 右边广告的距顶边栏位置(px)
	var lastScrollY=0;
	
	leftPos = rightPos = 10; //默认为10
	leftTop = rightTop = 150; //默认为150
	
	this.setLeftPos = function(value){
		if(isNaN(value)){value = 10;} //非数字则默认为10
		leftPos = value;
	}
	
	this.setRightPos = function(value){
		if(isNaN(value)){value = 10;} //非数字则默认为10
		rightPos = value;
	}
	
	this.setLeftTop = function(value){
		if(isNaN(value)){value = 150;} //非数字则默认为150
		leftTop = value;
	}
	
	this.setRightTop = function(value){
		if(isNaN(value)){value = 150;} //非数字则默认为150
		rightTop = value;
	}
	
	//添加左边的图片广告 addLeftImage(链接,图片地址,链接目标,图片提示)
	this.addLeftImage = function(href,image,target,title){
		var imageArray = getImageArray(href,image,target,title);
		if(imageArray != null){
			leftImageArray[leftImageArray.length] = imageArray;
		}
	}
	
	//添加右边的图片广告 addRightImage(链接,图片地址,链接目标,图片提示)
	this.addRightImage = function(href,image,target,title){
		var imageArray = getImageArray(href,image,target,title);
		if(imageArray != null){
			rightImageArray[rightImageArray.length] = imageArray;
		}
	}
	
	//内部添加广告图片使用,如果没有图片地址,则返回一个null值,否则返回一个数组
	function getImageArray(href,image,target,title){
		if(image == undefined){return null;} //没有图片地址,不添加
		if(target == undefined || target == ""){target = "_blank"}; //默认为_blank打开方式
		target = " target=\"" + target + "\"";
		
		if(title == undefined){ //广告图片title提示
			title = "" ;
		}else{
			title = " title=\"" + title + "\"";
		}
		//链接以www.开头则自动加上http:// (否则链接时会链接错误)
		if(href.toLowerCase().substring(0,4) == "www."){
			href = "http://"; + href;
		}
		if(image.toLowerCase().substring(0,4) == "www."){
			image = "http://"; + image;
		}
		return new Array(href,image,target,title);
	}
	
	//内部显示图片横幅所用 showImageDiv(div的名称,div的摆放方向(left,right),div的摆放位置,div层距顶部的位置,显示的图片数组变量)
	function showImageDiv(div,pos,posPX,topPx,imageArray){
		var j;
		document.write("<div id=\"" + div + "\" style=\"" + pos + ":" + posPX + "px;POSITION:absolute;TOP:" + topPx + "px;\">");
		for(j=0; j< imageArray.length; j++){
		document.write("<a href=\"" + imageArray[j][0] + "\" "+ imageArray[j][2]+ imageArray[j][3] + "><img src=\""+ imageArray[j][1] + "\" border=\"0\" "+ imageArray[j][3] + "></a>");
		if(j != imageArray.length-1){document.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td height=10></td></tr></table>");}
		}
		document.write("</div>");
		}
		
		//滚动广告对联图片
		this.scroll = function(){
			showImageDiv("smilediv1","left",leftPos,leftTop,leftImageArray);
			showImageDiv("smilediv2","right",rightPos,rightTop,rightImageArray);
			window.setInterval(scrollImage,1);
	}
	//内部使用用来滚动广告图片
	function scrollImage(){
		var diffY,percent;
		diffY=document.body.scrollTop;
		percent=.1*(diffY-lastScrollY);
		if(percent>0)percent=Math.ceil(percent);
		else percent=Math.floor(percent);
		document.all.smilediv1.style.pixelTop+=percent;
		document.all.smilediv2.style.pixelTop+=percent;
		lastScrollY=lastScrollY+percent;
	}
} 