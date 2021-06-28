function SmileAdver_Class(){
	var leftImageArray = new Array(); //������ߵĹ��ͼƬ����
	var rightImageArray = new Array(); //�����ұߵĹ��ͼƬ����
	var leftPos,rightPos; //leftPos = ��߹��ľ������λ��(px) rightPos = �ұ߹��ľ��ұ���λ��(px)
	var leftTop,rightTop; //leftTop = ��߹��ľඥ����λ��(px) rightTop = �ұ߹��ľඥ����λ��(px)
	var lastScrollY=0;
	
	leftPos = rightPos = 10; //Ĭ��Ϊ10
	leftTop = rightTop = 150; //Ĭ��Ϊ150
	
	this.setLeftPos = function(value){
		if(isNaN(value)){value = 10;} //��������Ĭ��Ϊ10
		leftPos = value;
	}
	
	this.setRightPos = function(value){
		if(isNaN(value)){value = 10;} //��������Ĭ��Ϊ10
		rightPos = value;
	}
	
	this.setLeftTop = function(value){
		if(isNaN(value)){value = 150;} //��������Ĭ��Ϊ150
		leftTop = value;
	}
	
	this.setRightTop = function(value){
		if(isNaN(value)){value = 150;} //��������Ĭ��Ϊ150
		rightTop = value;
	}
	
	//�����ߵ�ͼƬ��� addLeftImage(����,ͼƬ��ַ,����Ŀ��,ͼƬ��ʾ)
	this.addLeftImage = function(href,image,target,title){
		var imageArray = getImageArray(href,image,target,title);
		if(imageArray != null){
			leftImageArray[leftImageArray.length] = imageArray;
		}
	}
	
	//����ұߵ�ͼƬ��� addRightImage(����,ͼƬ��ַ,����Ŀ��,ͼƬ��ʾ)
	this.addRightImage = function(href,image,target,title){
		var imageArray = getImageArray(href,image,target,title);
		if(imageArray != null){
			rightImageArray[rightImageArray.length] = imageArray;
		}
	}
	
	//�ڲ���ӹ��ͼƬʹ��,���û��ͼƬ��ַ,�򷵻�һ��nullֵ,���򷵻�һ������
	function getImageArray(href,image,target,title){
		if(image == undefined){return null;} //û��ͼƬ��ַ,�����
		if(target == undefined || target == ""){target = "_blank"}; //Ĭ��Ϊ_blank�򿪷�ʽ
		target = " target=\"" + target + "\"";
		
		if(title == undefined){ //���ͼƬtitle��ʾ
			title = "" ;
		}else{
			title = " title=\"" + title + "\"";
		}
		//������www.��ͷ���Զ�����http:// (��������ʱ�����Ӵ���)
		if(href.toLowerCase().substring(0,4) == "www."){
			href = "http://"; + href;
		}
		if(image.toLowerCase().substring(0,4) == "www."){
			image = "http://"; + image;
		}
		return new Array(href,image,target,title);
	}
	
	//�ڲ���ʾͼƬ������� showImageDiv(div������,div�İڷŷ���(left,right),div�İڷ�λ��,div��ඥ����λ��,��ʾ��ͼƬ�������)
	function showImageDiv(div,pos,posPX,topPx,imageArray){
		var j;
		document.write("<div id=\"" + div + "\" style=\"" + pos + ":" + posPX + "px;POSITION:absolute;TOP:" + topPx + "px;\">");
		for(j=0; j< imageArray.length; j++){
		document.write("<a href=\"" + imageArray[j][0] + "\" "+ imageArray[j][2]+ imageArray[j][3] + "><img src=\""+ imageArray[j][1] + "\" border=\"0\" "+ imageArray[j][3] + "></a>");
		if(j != imageArray.length-1){document.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td height=10></td></tr></table>");}
		}
		document.write("</div>");
		}
		
		//����������ͼƬ
		this.scroll = function(){
			showImageDiv("smilediv1","left",leftPos,leftTop,leftImageArray);
			showImageDiv("smilediv2","right",rightPos,rightTop,rightImageArray);
			window.setInterval(scrollImage,1);
	}
	//�ڲ�ʹ�������������ͼƬ
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