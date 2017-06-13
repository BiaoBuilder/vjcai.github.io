/**
 * Created by XJB-0160808 on 2017/3/8.
 */
var vguess={
	rechargeDou:1,//充值中心兑换猜豆数额
	touzu:{//投注数据对象
		qswf:{
			ge:[0,0,0,0,0,0,0,0,0,0],
			shi:[0,0,0,0,0,0,0,0,0,0],
			bai:[0,0,0,0,0,0,0,0,0,0],
			qian:[0,0,0,0,0,0,0,0,0,0],
			wang:[0,0,0,0,0,0,0,0,0,0]
		},
		qsdx:{
			ge:[0,0],
			shi:[0,0],
			bai:[0,0],
			qian:[0,0],
			wang:[0,0]
		},
		qsds:{
			ge:[0,0],
			shi:[0,0],
			bai:[0,0],
			qian:[0,0],
			wang:[0,0]
		},
		zhds:{
			zonghe:[0,0]
		},
		zhdx:{
			zonghe:[0,0]
		},
		niuniu:{
			niuNum:[0,0,0,0,0,0,0,0,0,0,0]
		},
		showHand:{
			num:[0,0,0,0,0,0,0]
		},
		zx:{
			selectNum:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		},
		sx:{
			zoudiac:[0,0,0,0,0,0,0,0,0,0,0,0]
		},
		ds:{
			num:[0,0]
		},
		dx:{
			num:[0,0]
		},
		bs:{
			color:[0,0,0]
		},
		wx:{
			ele:[0,0,0,0,0]
		}
	},
	touzuType:"球数玩法",//定位投注页面
	tongjiLine:0,//知道投注二级界面有几行数据
    index:{//首页函数
        indexBanner:function(){
            var indexBanner = new Swiper('.indexBanner',{
                autoplay:2500,
                loop:true,
                autoplayDisableOnInteraction : false
            });
        }
    },
    guessList:{//猜客列表函数
        top:function(e){
            e.addClass("online").siblings().removeClass("online");
            var boxName=e[0].className.split(" ")[0];
            if(boxName!="richList"){
                $(".listType .date").show();
                $(".today").addClass("on").siblings().removeClass("on");
            }else{
                $(".listType .date").hide();
            }
            $("."+boxName+"Detail").show().siblings().hide();
        }
    },
    voucherCenter:{//充值中心函数
        voucherBanner:function(){
            var voucherBanner = new Swiper('.voucherBanner',{
                autoplay:2500,
                loop:true,
                autoplayDisableOnInteraction : false
            });
        },
        payToggle:function(e){
            e.children("p").addClass("toggleOn").parent().siblings().children("p").removeClass("toggleOn");
            var payName= e[0].className.split(" ")[0];
            if(payName=="diamonds"){
                $(".diamondList").show();
                $(".exchangeBox").hide();
            }else{
                $(".diamondList").hide();
                $(".exchangeBox").show();
            }
        },
        returnBtn:function(){
        	if($(".voucherIndex").css("display")!='none'){
        		history.go(-1);
        	}else if($(".bankCard").css("display")!='none'){
        		$(".voucherIndex").show();
        		$(".bankCard").hide();
        	}else{
        		$(".bankCard").show();
        		$(".reservePhone").hide();
        	}
        }
    },
    touzuCenter:{
    	qiushuwf:function(){
    		var linshi={};
    		var lineNum=0;
			for(var posits in vguess.touzu.qswf){
				linshi[posits]=new Array();
				for (var i=0;i<10;i++) {
					if(vguess.touzu.qswf[posits][i]!=0){
						linshi[posits].push(vguess.touzu.qswf[posits][i]);
					} 
				}
			}
			$(".countSelect ul").html("");
    		for(var out in linshi){
    			for (var k=0;k<linshi[out].length;k++) {
    				if(linshi[out][k]=="a"){
    					linshi[out][k]=0;
    				}
    				lineNum++;
    				switch(out){
    					case "ge":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>球数</span> <span>]</span> <span class='inposition countRed'>个位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "shi":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>球数</span> <span>]</span> <span class='inposition countRed'>十位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "bai":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>球数</span> <span>]</span> <span class='inposition countRed'>百位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "qian":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>球数</span> <span>]</span> <span class='inposition countRed'>千位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "wang":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>球数</span> <span>]</span> <span class='inposition countRed'>万位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    				}
    			}
    		}
    		vguess.tongjiLine=lineNum;
    	},
    	qiushudx:function(){
    		var linshi={};
    		var lineNum=0;
			for(var posits in vguess.touzu.qsdx){
				linshi[posits]=new Array();
				for (var i=0;i<2;i++) {
					if(vguess.touzu.qsdx[posits][i]!=0){
						linshi[posits].push(vguess.touzu.qsdx[posits][i]);
					} 
				}
			}
			$(".countSelect ul").html("");
			vguess.tongjiLine=linshi[posits].length;
    		for(var out in linshi){
    			for (var k=0;k<linshi[out].length;k++) {
    				lineNum++;
    				switch(out){
    					case "ge":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>大小</span> <span>]</span> <span class='inposition countRed'>个位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "shi":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>大小</span> <span>]</span> <span class='inposition countRed'>十位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "bai":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>大小</span> <span>]</span> <span class='inposition countRed'>百位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "qian":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>大小</span> <span>]</span> <span class='inposition countRed'>千位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "wang":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>大小</span> <span>]</span> <span class='inposition countRed'>万位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    				}
    			}
    		}
    		vguess.tongjiLine=lineNum;
    	},
    	qiushuds:function(){
    		var linshi={};
    		var lineNum=0;
			for(var posits in vguess.touzu.qsds){
				linshi[posits]=new Array();
				for (var i=0;i<2;i++) {
					if(vguess.touzu.qsds[posits][i]!=0){
						linshi[posits].push(vguess.touzu.qsds[posits][i]);
					} 
				}
			}
			vguess.tongjiLine=linshi[posits].length;
			$(".countSelect ul").html("");
    		for(var out in linshi){
    			for (var k=0;k<linshi[out].length;k++) {
    				lineNum++;
    				switch(out){
    					case "ge":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>单双</span> <span>]</span> <span class='inposition countRed'>个位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "shi":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>单双</span> <span>]</span> <span class='inposition countRed'>十位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "bai":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>单双</span> <span>]</span> <span class='inposition countRed'>百位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "qian":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>单双</span> <span>]</span> <span class='inposition countRed'>千位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    					case "wang":
    						var html="<li><div class='countName'><span>[</span> <span class='inType'>单双</span> <span>]</span> <span class='inposition countRed'>万位</span> <span class='inNum countRed'>"+linshi[out][k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    						$(".countSelect ul").append(html);break;
    				}
    			}
    		}
    		vguess.tongjiLine=lineNum;
    	},
    	zhongheds:function(){
    		var linshi={};
    		linshi.zonghe=new Array();
    		for (var i=0;i<2;i++) {
				if(vguess.touzu.zhds.zonghe[i]!=0){
					linshi.zonghe.push(vguess.touzu.zhds.zonghe[i]);
				} 
			}
    		$(".countSelect ul").html("");
    		vguess.tongjiLine=linshi.zonghe.length;
    		for (var k=0;k<linshi.zonghe.length;k++) {
    			if(linshi.zonghe[k]=="单"){
    				var html="<li><div class='countName'><span>[</span> <span class='inType'>总合单双</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.zonghe[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    				$(".countSelect ul").append(html);
    			}else{
    				var html="<li><div class='countName'><span>[</span> <span class='inType'>总合单双</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.zonghe[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    				$(".countSelect ul").append(html);
    			}
    		}
    	},
    	zhonghedx:function(){
    		var linshi={};
    		linshi.zonghe=new Array();
    		for (var i=0;i<2;i++) {
				if(vguess.touzu.zhdx.zonghe[i]!=0){
					linshi.zonghe.push(vguess.touzu.zhdx.zonghe[i]);
				} 
			}
    		$(".countSelect ul").html("");
    		vguess.tongjiLine=linshi.zonghe.length;
    		for (var k=0;k<linshi.zonghe.length;k++) {
    			if(linshi.zonghe[k]=="大"){
    				var html="<li><div class='countName'><span>[</span> <span class='inType'>总合大小</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.zonghe[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    				$(".countSelect ul").append(html);
    			}else{
    				var html="<li><div class='countName'><span>[</span> <span class='inType'>总合大小</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.zonghe[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
    				$(".countSelect ul").append(html);
    			}
    		}
    	},
    	niuniuwf:function(){
    		var linshi={};
    		linshi.niuniu=new Array();
    		for (var i=0;i<11;i++) {
				if(vguess.touzu.niuniu.niuNum[i]!=0){
					linshi.niuniu.push(vguess.touzu.niuniu.niuNum[i]);
				} 
			}
    		$(".countSelect ul").html("");
    		vguess.tongjiLine=linshi.niuniu.length;
    		for (var k=0;k<linshi.niuniu.length;k++) {
    			switch(linshi.niuniu[k]){
					case "无牛":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "牛1":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "牛2":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "牛3":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "牛4":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "牛5":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "牛6":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "牛7":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "牛8":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "牛9":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "牛牛":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>牛牛</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.niuniu[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
				}
    		}
    	},
    	showHandwf:function(){
    		var linshi={};
    		linshi.showHand=new Array();
    		for (var i=0;i<7;i++) {
				if(vguess.touzu.showHand.num[i]!=0){
					linshi.showHand.push(vguess.touzu.showHand.num[i]);
				} 
			}
    		$(".countSelect ul").html("");
    		vguess.tongjiLine=linshi.showHand.length;
    		for (var k=0;k<linshi.showHand.length;k++) {
    			switch(linshi.showHand[k]){
					case "炸弹":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>梭哈</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.showHand[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "葫芦":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>梭哈</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.showHand[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "顺子":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>梭哈</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.showHand[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "三条":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>梭哈</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.showHand[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "两对":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>梭哈</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.showHand[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "单对":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>梭哈</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.showHand[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
					case "散牌":
						var html="<li><div class='countName'><span>[</span> <span class='inType'>梭哈</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.showHand[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
						$(".countSelect ul").append(html);break;
				}
    		}
    	},
    	zhixuan:function(){
    		var linshi={};
    		linshi.selectNum=new Array();
    		for (var i=0;i<49;i++) {
				if(vguess.touzu.zx.selectNum[i]!=0){
					linshi.selectNum.push(vguess.touzu.zx.selectNum[i]);
				} 
			}
    		$(".countSelect ul").html("");
    		vguess.tongjiLine=linshi.selectNum.length;
    		for (var k=0;k<linshi.selectNum.length;k++) {
    			var html="<li><div class='countName'><span>[</span> <span class='inType'>直选</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.selectNum[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
				$(".countSelect ul").append(html);
    		}
    	},
    	shengxiao:function(){
    		var linshi={};
    		linshi.zoudiac=new Array();
    		for (var i=0;i<12;i++) {
				if(vguess.touzu.sx.zoudiac[i]!=0){
					linshi.zoudiac.push(vguess.touzu.sx.zoudiac[i]);
				} 
			}
    		$(".countSelect ul").html("");
    		vguess.tongjiLine=linshi.zoudiac.length;
    		for (var k=0;k<linshi.zoudiac.length;k++) {
    			var html="<li><div class='countName'><span>[</span> <span class='inType'>生肖</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.zoudiac[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
				$(".countSelect ul").append(html);
    		}
    	},
    	danshuang:function(){
    		var linshi={};
    		linshi.num=new Array();
    		for (var i=0;i<2;i++) {
				if(vguess.touzu.ds.num[i]!=0){
					linshi.num.push(vguess.touzu.ds.num[i]);
				} 
			}
    		$(".countSelect ul").html("");
    		vguess.tongjiLine=linshi.num.length;
    		for (var k=0;k<linshi.num.length;k++) {
    			var html="<li><div class='countName'><span>[</span> <span class='inType'>单双</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.num[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
				$(".countSelect ul").append(html);
    		}
    	},
    	daxiao:function(){
    		var linshi={};
    		linshi.num=new Array();
    		for (var i=0;i<2;i++) {
				if(vguess.touzu.dx.num[i]!=0){
					linshi.num.push(vguess.touzu.dx.num[i]);
				} 
			}
    		$(".countSelect ul").html("");
    		vguess.tongjiLine=linshi.num.length;
    		for (var k=0;k<linshi.num.length;k++) {
    			var html="<li><div class='countName'><span>[</span> <span class='inType'>大小</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.num[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
				$(".countSelect ul").append(html);
    		}
    	},
    	bose:function(){
    		var linshi={};
    		linshi.color=new Array();
    		for (var i=0;i<3;i++) {
				if(vguess.touzu.bs.color[i]!=0){
					linshi.color.push(vguess.touzu.bs.color[i]);
				} 
			}
    		$(".countSelect ul").html("");
    		vguess.tongjiLine=linshi.color.length;
    		for (var k=0;k<linshi.color.length;k++) {
    			var html="<li><div class='countName'><span>[</span> <span class='inType'>波色</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.color[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
				$(".countSelect ul").append(html);
    		}
    	},
    	wuxing:function(){
    		var linshi={};
    		linshi.ele=new Array();
    		for (var i=0;i<5;i++) {
				if(vguess.touzu.wx.ele[i]!=0){
					linshi.ele.push(vguess.touzu.wx.ele[i]);
				} 
			}
    		$(".countSelect ul").html("");
    		vguess.tongjiLine=linshi.ele.length;
    		for (var k=0;k<linshi.ele.length;k++) {
    			var html="<li><div class='countName'><span>[</span> <span class='inType'>五行</span> <span>]</span> <span class='inposition countRed'></span> <span class='inNum countRed'>"+linshi.ele[k]+"</span></div><div><span>倍数：</span><span class='inMultiple'>"+5+"</span></div><div><span class='douPic'></span><span class='inMultiple'>"+50+"</span></div><div><span class='delete'></span></div></li>";
				$(".countSelect ul").append(html);
    		}
    	}
    }
};
$(function(){
    /*
     *--------返回按钮-----
     */
    if($("title").html()=="充值中心"){
    	//充值页面返回考虑
    	$(".topBox .return").click(function(){
    		vguess.voucherCenter.returnBtn($(this));
    	})
        
    }else if($("title").html()=="投注"){
    	$(".topBox .return").click(function(){
    		if($(".countSelect").css("display")!='none'){
    			$(".countSelect").hide().siblings(".oddFir").show();
    			$(".countSure").hide().siblings(".confirmFir").show();
    		}else{
    			history.go(-1);
    		}
    	})
    }else{
    	$(".topBox .return").click(function(){
	        history.go(-1);
	    })
    }
   /*
     *--------------判断投注的是直选还是球数玩法----------------------
     */
    if($("title").html()=="投注"){
    	if($(".lineBox").eq(0).html()=="直选"){
    		vguess.touzuType="直选";
    	}else{
    		vguess.touzuType="球数玩法"
    	}
    }
    /*
     *--------------------------首页---------------------------------
     */
    if($("title").html()=="首页"){
        vguess.index.indexBanner();//轮播图
    }

    /*
     *-------------------------猜猜排行榜------------------------------
     */
    $(".paihangT>div").click(function(){
        vguess.guessList.top($(this));
    });
    $(".listType .date>span").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });

    /*
     *-------------------------任务中心---------------------------------
     */
    if($("title").html()=="任务中心"){
    	//新手任务成长任务切换
    	$(".taskSelect>div").click(function(){
	        $(this).children().addClass("online").parent().siblings().children().removeClass("online");
	    });
    }

    /*
     *--------------------------充值中心-------------------------------
     */
    if($("title").html()=="充值中心"){
    	//充值砖石，兑换猜豆切换
        vguess.voucherCenter.voucherBanner()//轮播图
        $(".voucherToggle>div").click(function(){
            vguess.voucherCenter.payToggle($(this));
        });
        //兑换猜豆页面点击背景切换
        $(".exchangeItem").click(function(){
            $(this).addClass("itemOn").parent().siblings().children(".exchangeItem").removeClass("itemOn");
            vguess.rechargeDou=$(this).children(".changeDiamond").children("span").eq(1).html();
        })
        //充值钻石跳转二级界面
        $(".diamondList>li").click(function(){
        	var diamondNum=$(this).children("a").children(".needMoney").children(".moneyBtn").html();
        	$(".voucherIndex").hide();
        	$(".bankCard").show();
        	$(".amountDisplay").children(".colorRed").html(diamondNum);
        })
        //兑换猜豆点击下一步
        $(".exchangeBox .mg0").click(function(){
        	$(".stageModel").show();
        	$(".exchangePay").show().children(".alertTip").children("p").eq(0).children("span").html(vguess.rechargeDou);
        })
        //支持银行列表点击展开
        $(".showBanks").click(function(){
        	$(".bankList").show();
        })
    }
    /*
     *----------------------猜猜排行榜---------------------------------
     */
    $(".control .toggle>div").click(function(){
        $(this).addClass("toggleIn").siblings().removeClass("toggleIn");
    })
    /*
     *-------------------投注记录和开房记录-----------------------------
     */
    if($("title").html()=="投注记录"||$("title").html()=="开房记录"){
    	//全部开奖待开奖切换效果
	    $(".stageSelect>div").click(function(){
	    	$(this).children("span").addClass("touch");
	    	$(this).siblings().children("span").removeClass("touch");
    	})
	}
    /*
     *------------------------订单确认-----------------------------------
     */
    if($("title").html()=="订单确认"){
    	//大框点击选中
    	$(".bettingItems>li").click(function(){
    		$(".allSelect").removeClass("allSelectIn");
    		var states=$(this).children(".selectState");
    		if(states.hasClass("selectIn")){
    			states.removeClass("selectIn");
    		}else{
    			states.addClass("selectIn");
    		}
    	})
    	//全选和取消全选
    	$(".allSelect").click(function(){
    		if($(this).hasClass("allSelectIn")){
    			$(this).removeClass("allSelectIn");
    			$(".bettingItems>li>.selectState").removeClass("selectIn");
    		}else{
    			$(this).addClass("allSelectIn");
    			$(".bettingItems>li>.selectState").addClass("selectIn");
    		}
    	})
    }
    /*
     *------------------------订单确认-----------------------------------
     */
    if($("title").html()=="邀请小伙伴"){
    	//点击显示朋友圈邀请列表
    	$(".shareRight").click(function(){
    		$(".shareModel").show();
    	})
    	//TODO:暂时提供
    	$(".shareFrame>a").click(function(){
    		$(".shareModel").hide();
    	})
    }
    /*
     *------------------------创建房间-----------------------------------
     */
    if($("title").html()=="创建房间"){
    	//点击底部弹出
    	$(".mode").click(function(){
			$(".selectShow").css({"bottom":"0"});
			$(".baofangMode").hide();
			$(".gameMode").show();
		})
    	$(".romType").click(function(){
    		$(".selectShow").css({"bottom":"0"});
			$(".gameMode").hide();
			$(".baofangMode").show();
    	})
    	//点击弹出文字，框消失文字填充
    	$(".gameMode .needDate").click(function(){
    		$(".selectShow").css({"bottom":"-4rem"});
    		$(".mode .typeList").html($(this).html());
    	})
    	$(".baofangMode .needDate").click(function(){
    		$(".selectShow").css({"bottom":"-4rem"});
    		$(".romType .typeList").html($(this).html());
    	})
    	//加减算法
    	$(".culcs").click(function(){
			var oddsNum=parseFloat($(".showOdds").html());
			if($(this).html()=="+"){
				if(oddsNum<9.6){
					oddsNum*=10;
					oddsNum++;
					$('.showOdds').html(oddsNum/10);
				}
			}else{
				if(oddsNum>8.0){
					oddsNum*=10;
					oddsNum--;
					$('.showOdds').html(oddsNum/10);
				}
			}
		})
    	//下注信息接受与否
    	$(".switchBtn").click(function(){
    		if($(this).hasClass("accept")){
    			$(this).removeClass("accept");
    		}else{
    			$(this).addClass("accept");
    		}
    	})
    }
    /*
     *---------------------特码猜走势图--------------------------------
     */
    if($("title").html()=="特码猜走势图"){
    	//期数变换
    	$(".countSelect>div").click(function(){
    		$(this).children("span").addClass("inBlock");
    		$(this).siblings().children("span").removeClass("inBlock");
    	})
    	//特码猜走势图swiper初始化
    	var galleryTop = new Swiper('.gallery-top', {
	        slidesPerView: 1,
	        freeMode: true,
	        resistanceRatio : 0
	    });
	    var galleryThumbs = new Swiper('.gallery-thumbs', {
	        slidesPerView: 1,
	        freeMode: true,
	        resistanceRatio : 0
	    });
	    galleryTop.params.control = galleryThumbs;
	    galleryThumbs.params.control = galleryTop;
    }
    if($("title").html()=="时时猜走势图"){
    	//期数变换
    	$(".countSelect>div").click(function(){
    		$(this).children("span").addClass("inBlock");
    		$(this).siblings().children("span").removeClass("inBlock");
    	})
    	//位数变化
    	$(".placeSelect>div").click(function(){
    		$(this).children("span").addClass("touch");
    		$(this).siblings().children("span").removeClass("touch");
    	})
    }
    /*
     *---------------------我的账单-------------------------------
     */
    if($("title").html()=="我的账单"){
    	//日周月变换
    	$(".typeBox>div").click(function(){
    		$(this).addClass("online").siblings().removeClass("online");
    		var mind=$(this).html();
    		switch(mind){
    			case "日":$("#lineDay").show().siblings().hide(); break;
    			case "周":$("#lineWeek").show().siblings().hide(); break;
    			case "月":$("#lineMonth").show().siblings().hide(); break;
    		}
    	})
    }
     /*
     *---------------------投注页面-------------------------------
     */
    if($("title").html()=="投注"){
    	//倍率信息展示页面
    	$(".beilvInfo").click(function(){
    		$(".beilvModel").show();
    	})
    	$(".peilvTitle .hideBtn").click(function(){
    		$(".beilvModel").hide();
    	})
    	//加减算法
    	$(".btns").click(function(){
			var oddsNum=parseInt($(".showOdds").html());
			if($(this).html()=="+"){
					oddsNum++;
					$('.showOdds').html(oddsNum);
			}else{
				if(oddsNum>=1){
					oddsNum--;
					$('.showOdds').html(oddsNum);
				}
			}
		})
    	//选注类型切换
    	$(".slideItem").click(function(){
    		$(this).children("span").addClass("lineIn");
    		$(this).parent(".swiper-slide").siblings().children(".slideItem").children("span").removeClass("lineIn");
    		var types=$(this).children("span").html();
    		switch(types){
    			case "直选":$(".specialNum").show().siblings().hide();vguess.touzuType="直选"; break;
    			case "生肖":$(".zodiacBox").show().siblings().hide();vguess.touzuType="生肖";  break;
    			case "单双":$(".specialParity").show().siblings().hide();vguess.touzuType="单双";  break;
    			case "大小":$(".specialSize").show().siblings().hide();vguess.touzuType="大小";  break;
    			case "波色":$(".selectColor").show().siblings().hide();vguess.touzuType="波色";  break;
    			case "五行":$(".selectFive").show().siblings().hide();vguess.touzuType="五行";  break;
    			case "球数玩法":$(".ballNum").show().siblings().hide();vguess.touzuType="球数玩法";  break;
    			case "球数大小":$(".ballSize").show().siblings().hide();vguess.touzuType="球数大小";  break;
    			case "球数单双":$(".ballParity").show().siblings().hide();vguess.touzuType="球数单双";  break;
    			case "总合单双":$(".supParity").show().siblings().hide();vguess.touzuType="总合单双";  break;
    			case "总合大小":$(".supSize").show().siblings().hide();vguess.touzuType="总合大小";  break;
    			case "牛牛玩法":$(".niuniu").show().siblings().hide();vguess.touzuType="牛牛玩法";  break;
    			case "梭哈玩法":$(".showHand").show().siblings().hide();vguess.touzuType="梭哈玩法";  break;
    		}
    	});
    	//球数玩法点击数据添加样式并填充对象数据
    	$(".ballNum .numSelect>li").click(function(){
    		if($(this).children("span").hasClass("userSelect")){
    			$(this).children("span").removeClass("userSelect");
    			var selectNum=$(this).children("span").html();
	    		var selectPos=selectNum;
	    		selectNum=0;
	    		
    		}else{
    			$(this).children("span").addClass("userSelect");
	    		var selectNum=$(this).children("span").html();
	    		var selectPos=selectNum;
	    		if(selectNum==0){
	    			selectNum="a";
	    		}
    		}
    		var pos=$(this).parent(".numSelect").siblings(".position").html();
    		switch(pos){
    			case "个位":vguess.touzu.qswf.ge[selectPos]=selectNum;break;
    			case "十位":vguess.touzu.qswf.shi[selectPos]=selectNum;break;
    			case "百位":vguess.touzu.qswf.bai[selectPos]=selectNum;break;
    			case "千位":vguess.touzu.qswf.qian[selectPos]=selectNum;break;
    			case "万位":vguess.touzu.qswf.wang[selectPos]=selectNum;break;
    		}
    	})
    	//球数大小点击数据添加样式并填充对象数据
    	$(".ballSize .bigSelect>li").click(function(){
    		if($(this).children(".bigCircle").hasClass("userSelect")){
    			$(this).children(".bigCircle").removeClass("userSelect");
    			var selectNum=$(this).children(".bigCircle").html();
    			var index=0;
	    		if(selectNum=="小"){
	    			index=1;
	    		}
	    		var selectPos=selectNum;
	    		selectNum=0;
    		}else{
    			$(this).children(".bigCircle").addClass("userSelect");
	    		var selectNum=$(this).children(".bigCircle").html();
	    		var index=0;
	    		if(selectNum=="小"){
	    			index=1;
	    		}
	    		var selectPos=selectNum;
    		}
    		var pos=$(this).parent(".bigSelect").siblings(".position").html();
    		switch(pos){
    			case "个位":vguess.touzu.qsdx.ge[index]=selectNum;break;
    			case "十位":vguess.touzu.qsdx.shi[index]=selectNum;break;
    			case "百位":vguess.touzu.qsdx.bai[index]=selectNum;break;
    			case "千位":vguess.touzu.qsdx.qian[index]=selectNum;break;
    			case "万位":vguess.touzu.qsdx.wang[index]=selectNum;break;
    		}
    	})
    	//球数单双点击数据添加样式并填充对象数据
    	$(".ballParity .bigSelect>li").click(function(){
    		if($(this).children(".bigCircle").hasClass("userSelect")){
    			$(this).children(".bigCircle").removeClass("userSelect");
	    		var selectNum=$(this).children(".bigCircle").html();
	    		var index=0;
	    		if(selectNum=="双"){
	    			index=1;
	    		}
	    		var selectPos=selectNum;
	    		selectNum=0;
    		}else{
    			$(this).children(".bigCircle").addClass("userSelect");
	    		var selectNum=$(this).children(".bigCircle").html();
	    		var index=0;
	    		if(selectNum=="双"){
	    			index=1;
	    		}
	    		var selectPos=selectNum;
    		}
    		var pos=$(this).parent(".bigSelect").siblings(".position").html();
    		switch(pos){
    			case "个位":vguess.touzu.qsds.ge[index]=selectNum;break;
    			case "十位":vguess.touzu.qsds.shi[index]=selectNum;break;
    			case "百位":vguess.touzu.qsds.bai[index]=selectNum;break;
    			case "千位":vguess.touzu.qsds.qian[index]=selectNum;break;
    			case "万位":vguess.touzu.qsds.wang[index]=selectNum;break;
    		}
    	})
    	//总合单双点击数据添加样式并填充对象数据
    	$(".supParity .bigSelect>li").click(function(){
    		if($(this).children(".bigCircle").hasClass("userSelect")){
    			$(this).children(".bigCircle").removeClass("userSelect");
	    		var selectNum=$(this).children(".bigCircle").html();
	    		var index=0;
	    		if(selectNum=="双"){
	    			index=1;
	    		}
	    		selectNum=0;
    		}else{
    			$(this).children(".bigCircle").addClass("userSelect");
	    		var selectNum=$(this).children(".bigCircle").html();
	    		var index=0;
	    		if(selectNum=="双"){
	    			index=1;
	    		}
    		}
    		vguess.touzu.zhds.zonghe[index]=selectNum;
    	})
    	//总合大小点击数据添加样式并填充对象数据
    	$(".supSize .bigSelect>li").click(function(){
    		if($(this).children(".bigCircle").hasClass("userSelect")){
    			$(this).children(".bigCircle").removeClass("userSelect");
	    		var selectNum=$(this).children(".bigCircle").html();
	    		var index=0;
	    		if(selectNum=="小"){
	    			index=1;
	    		}
	    		selectNum=0;
    		}else{
    			$(this).children(".bigCircle").addClass("userSelect");
	    		var selectNum=$(this).children(".bigCircle").html();
	    		var index=0;
	    		if(selectNum=="小"){
	    			index=1;
	    		}
    		}
    		vguess.touzu.zhdx.zonghe[index]=selectNum;
    	})
    	//牛牛点击数据添加样式并填充对象数据
    	$(".niuniu .mediaCircle").click(function(){
    		if($(this).hasClass("userSelect")){
    			$(this).removeClass("userSelect");
	    		var selectNum=$(this).html();
	    		var pos=selectNum;
	    		var index=0;
	    		selectNum=0;
    		}else{
    			$(this).addClass("userSelect");
	    		var selectNum=$(this).html();
	    		var pos=selectNum;
	    		var index=0;
    		}
    		switch(pos){
    			case "无牛":index=0;break;
    			case "牛1":index=1;break;
    			case "牛2":index=2;break;
    			case "牛3":index=3;break;
    			case "牛4":index=4;break;
    			case "牛5":index=5;break;
    			case "牛6":index=6;break;
    			case "牛7":index=7;break;
    			case "牛8":index=8;break;
    			case "牛9":index=9;break;
    			case "牛牛":index=10;break;
    		}
    		vguess.touzu.niuniu.niuNum[index]=selectNum;
    	})
    	//梭哈点击数据添加样式并填充对象数据
    	$(".showHand .mediaCircle").click(function(){
    		if($(this).hasClass("userSelect")){
    			$(this).removeClass("userSelect");
	    		var selectNum=$(this).html();
	    		var index=0;
	    		var pos=selectNum;
	    		selectNum=0;
    		}else{
    			$(this).addClass("userSelect");
	    		var selectNum=$(this).html();
	    		var index=0;
	    		var pos=selectNum;
    		}
    		switch(pos){
    			case "炸弹":index=0;break;
    			case "葫芦":index=1;break;
    			case "顺子":index=2;break;
    			case "三条":index=3;break;
    			case "两对":index=4;break;
    			case "单对":index=5;break;
    			case "散牌":index=6;break;
    		}
    		vguess.touzu.showHand.num[index]=selectNum;
    	})
    	//直选点击数据添加样式并填充
    	$(".specialNum .circleSmall").click(function(){
    		var selectNum=$(this).html();
    		var pos=selectNum-1;
    		if($(this).hasClass("userSelect")){
    			$(this).removeClass("userSelect");
    			selectNum=0;
    		}else{
    			$(this).addClass("userSelect");
    		}
    		vguess.touzu.zx.selectNum[pos]=selectNum;
    	})
    	//生肖点击数据添加样式并填充
    	$(".zodiacBox .zodiacBg").click(function(){
    		var selectNum=$(this).siblings().eq(0).html();
    		var pos=selectNum;
    		var index=0;
    		if($(this).hasClass("zodicSelect")){
    			$(this).removeClass("zodicSelect");
    			selectNum=0;
    		}else{
    			$(this).addClass("zodicSelect");
    		}
    		switch(pos){
    			case "鼠":index=0;break;
    			case "牛":index=1;break;
    			case "虎":index=2;break;
    			case "兔":index=3;break;
    			case "龙":index=4;break;
    			case "蛇":index=5;break;
    			case "马":index=6;break;
    			case "羊":index=7;break;
    			case "猴":index=8;break;
    			case "鸡":index=9;break;
    			case "狗":index=10;break;
    			case "猪":index=11;break;
    		}
    		vguess.touzu.sx.zoudiac[index]=selectNum;
    	})
    	//单双点击数据添加样式并填充
    	$(".specialParity .circleLarge").click(function(){
    		var selectNum=$(this).html();
    		var index=0;
    		if(selectNum=="双"){
    			index=1;
    		}
    		if($(this).hasClass("userSelect")){
    			$(this).removeClass("userSelect");
    			selectNum=0;
    		}else{
    			$(this).addClass("userSelect");
    		}
    		vguess.touzu.ds.num[index]=selectNum;
    	})
    	//大小点击数据添加样式并填充
    	$(".specialSize .circleLarge").click(function(){
    		var selectNum=$(this).html();
    		var index=0;
    		if(selectNum=="小"){
    			index=1;
    		}
    		if($(this).hasClass("userSelect")){
    			$(this).removeClass("userSelect");
    			selectNum=0;
    		}else{
    			$(this).addClass("userSelect");
    		}
    		vguess.touzu.dx.num[index]=selectNum;
    	})
    	//波色点击数据添加样式并填充
    	$(".selectColor .circleMediu").click(function(){
    		var selectNum=$(this).html();
    		var index;
    		if(selectNum=="红"){
    			index=0;
    			if($(this).hasClass("userSelect")){
    				$(this).removeClass("userSelect");
    				selectNum=0;
    			}else{
    				$(this).addClass("userSelect");
    			}
    		}else if(selectNum=="蓝"){
    			index=1
    			if($(this).hasClass("userSelectB")){
    				$(this).removeClass("userSelectB");
    				selectNum=0;
    			}else{
    				$(this).addClass("userSelectB");
    			}
    		}else{
    			index=2;
    			if($(this).hasClass("userSelectG")){
    				$(this).removeClass("userSelectG");
    				selectNum=0;
    			}else{
    				$(this).addClass("userSelectG");
    			}
    		}
    		vguess.touzu.bs.color[index]=selectNum;
    	})
    	//五行点击数据添加样式并填充
    	$(".selectFive .circleXL").click(function(){
    		var selectNum=$(this).html();
    		var pos=selectNum;
    		var index=0;
    		if($(this).hasClass("userSelect")){
    			$(this).removeClass("userSelect");
    			selectNum=0;
    		}else{
    			$(this).addClass("userSelect");
    		}
    		switch(pos){
    			case "金":index=0;break;
    			case "木":index=1;break;
    			case "水":index=2;break;
    			case "火":index=3;break;
    			case "土":index=4;break;
    		}
    		vguess.touzu.wx.ele[index]=selectNum;
    	})
    	//点击下注添加html内容
    	$(".confirmFir .sure").click(function(){
    		switch(vguess.touzuType){
    			case "球数玩法":vguess.touzuCenter.qiushuwf();break;
    			case "球数大小":vguess.touzuCenter.qiushudx();break;
    			case "球数单双":vguess.touzuCenter.qiushuds();break;
    			case "总合单双":vguess.touzuCenter.zhongheds();break;
    			case "总合大小":vguess.touzuCenter.zhonghedx();break;
    			case "牛牛玩法":vguess.touzuCenter.niuniuwf();break;
    			case "梭哈玩法":vguess.touzuCenter.showHandwf();break;
    			case "直选":vguess.touzuCenter.zhixuan();break;
    			case "生肖":vguess.touzuCenter.shengxiao();break;
    			case "单双":vguess.touzuCenter.danshuang();break;
    			case "大小":vguess.touzuCenter.daxiao();break;
    			case "波色":vguess.touzuCenter.bose();break;
    			case "五行":vguess.touzuCenter.wuxing();break;
    		}
    		$(".oddFir").hide().siblings(".countSelect").show();
    		$(".confirmFir").hide().siblings(".countSure").show();
    		/*获取下注数量和倍数*/
    		var xiazushu=$(".inputNum input").val();
    		//TODO:赔率修改
    		var beishu=5;
    		$(".inMultiple").html(beishu);
    		var lineDou=xiazushu*beishu;
    		var toutalDou=lineDou*(vguess.tongjiLine);
    		$(".douPic").siblings(".inMultiple").html(lineDou);
    		$(".countTotalDou").html(toutalDou);
    	})
    	//点击删除按钮
		$(".countSelect").delegate('.delete','click',function(){
			$(this).parent("div").parent("li").remove();
			var zonggongDou=$(".countTotalDou").html();
			var kouchu=$(this).parent("div").siblings().children(".inMultiple").eq(1).html();
			var shengyudou=zonggongDou-kouchu;
			$(".countTotalDou").html(shengyudou);
		})
    }
});