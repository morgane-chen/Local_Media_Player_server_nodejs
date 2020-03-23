//func.js
var script=document.createElement("script");
script.src="javascripts/jquery.js";

var pre = "/resource/likes/";//前缀
var pre2="/resource/dislikes/";
var prefix;
var songNum = 0;//记录当前歌曲的编号
var songName;//存储歌曲名
var songTotal=0;//歌曲总数
var repeat=0;
var isFirst=1;//是否是第一首歌
var audioAddress;
var imageAddress;
var lyricsAddress;
var nolyrics =0;
var video;
var time;
var canvas;

//var btnlastvideo = document.getElementById("buttonLastVideo");
//var btnnextvideo = document.getElementById("buttonNextVideo");
//var btngo = document.getElementById("buttonGo");
//var btnback = document.getElementById("buttonBack");
//
//var btnstart = document.getElementById("btnstart");
var btnsound;

//console.log(btnsound);




function Go(){
        btnstart.innerHTML = "Play";
        video[0].pause();
        time = setInterval(function () {
            video[0].currentTime += 5;
        }, 1000);
    };

function Back(){
       btnstart.innerHTML = "Play";
        video[0].pause();
        time = setInterval(function () {
            video[0].currentTime -= 2;
            if (video.currentTime <= 0) {
                video[0].play();
                clearInterval(time);
            }
        }, 1000);
   };



//btnsound= $("#btnsound");   
//function sound(){
//	btnsound = $("btnsound");
//	video = $("#v video");
//	
//      this.onmousedown=function(){
//          video[0].volume=btnsound.value/100;
//          console.log(this.value);
//      }
//      this.onmouseup=function(){
//          this.onmousemove=null;
//          this.onmouseup=null;
//      }
//  };

function play() {
	 
	 video = $("#v video");
	 video[0].time=video[0].currentTime;
	 var play =$("#btnstart");
	 console.log(typeof(play[0].innerHTML));
        if (play[0].innerHTML == "Play") {
            video[0].play();
            play[0].innerHTML = "Pause";
            clearInterval(time);
        }
        else {
            video[0].pause();
            play[0].innerHTML = "Play";
        }
}

function why(){
//	console.log("ak");
	songNum = songNum + 1;//2
 //   console.log(songNum);
    if (songNum == songTotal) {
        songNum=0;
    }//溢出
    var b = document.getElementById("cataBox").childNodes;
	var i = songNum -1;
	b[i].style.color="white"; 					
    b[songNum].style.color="red";  
  //  console.log(2);
    var src = b[songNum].src;
	sourceDom = src;
	console.log(sourceDom);
	video = $("#v video")
     video[0].src =sourceDom ;
    $("#v").show();
    console.log(video[0]);
  	 video[0].play(); 
}
//console.log(video);
function playNextVideo() {
	
    songNum = songNum + 1;//2
    console.log(songNum);
    if (songNum == songTotal) {
        songNum=0;
        var i = songTotal-1;
    }//溢出
    else{var i =songNum-1;}
    console.log(songNum);
	var b = document.getElementById("cataBox").childNodes;
	//var i = songNum -1;
	b[i].style.color="white"; 					
    b[songNum].style.color="red";  

    var src = b[songNum].src;
	sourceDom = src;  
  //console.log(sourceDom);
      video = $("#v video")
     video[0].src =sourceDom ;
   		$("#v").show();
   	 //console.log($("#v video"));
      //console.log(video[0]);
  	  video[0].play(); 
  	  var play =$("#btnstart");
	  play[0].innerHTML = "Pause";
}//播放下一首歌
function playLastImage() {
	
    songNum = songNum - 1;//2
    console.log(songNum);
    if (songNum == -1) {
        songNum = songTotal-1;//最后一首
        var i = 0;
    }//溢出
    else{ i =songNum+1;}
	var b = document.getElementById("cataBox").childNodes;
	//var i = songNum +1;
	b[i].style.color="white"; 					
    b[songNum].style.color="red";  

    var src = b[songNum].src;
	sourceDom = src;  
	var ctx = canvas[0].getContext('2d'); 
	 ctx.clearRect(0,0,canvas[0].width,canvas[0].height);  
      var myImage = new Image();
       myImage.src = sourceDom;
        myImage.onload = function() {
 							 ctx.drawImage(myImage, 0, 0,canvas[0].width, canvas[0].height);
								}
  //console.log(sourceDom);
     
}//播放下一首歌
function playNextImage() {
	
    songNum = songNum + 1;//2
    console.log(songNum);
    if (songNum == songTotal) {
        songNum=0;
        var i = songTotal-1;
    }//溢出
    else{var i =songNum-1;}
    console.log(songNum);
	var b = document.getElementById("cataBox").childNodes;
	//var i = songNum -1;
	b[i].style.color="white"; 					
    b[songNum].style.color="red";  

    var src = b[songNum].src;
	sourceDom = src;  
	var ctx = canvas[0].getContext('2d'); 
	ctx.clearRect(0,0,canvas[0].width,canvas[0].height);  
      var myImage = new Image();
       myImage.src = sourceDom;
        myImage.onload = function() {
 							 ctx.drawImage(myImage, 0, 0,canvas[0].width, canvas[0].height);
								}
  //console.log(sourceDom);
//    video = $("#v video")
//   video[0].src =sourceDom ;
// 		$("#v").show();
// 	 //console.log($("#v video"));
//    //console.log(video[0]);
//	  video[0].play(); 
//	  var play =$("#btnstart");
//	  play[0].innerHTML = "Pause";
}//播放下一首歌
function playLastVideo() {
	var play =$("#btnstart");
	play[0].innerHTML = "Pause";
    songNum = songNum - 1;//2
    console.log(songNum);
    if (songNum == -1) {
        songNum = songTotal-1;//最后一首
        var i = 0;
    }//溢出
    else{ i =songNum+1;}
	var b = document.getElementById("cataBox").childNodes;
	//var i = songNum +1;
	b[i].style.color="white"; 					
    b[songNum].style.color="red";  

    var src = b[songNum].src;
	sourceDom = src;  
  //console.log(sourceDom);
      video = $("#v video")
    
     video[0].src =sourceDom ;
   		$("#v").show();
   	 //console.log($("#v video"));
     // console.log(video[0]);
  	 video[0].play(); 
}//播放下一首歌

function playNextSong() {

    songNum = songNum + 1;//2
    console.log(songNum);
    if (songNum == songTotal) {
        songNum=0;
        var i = songTotal-1;
    }//溢出
    else {var i =songNum-1;}
    var b = document.getElementById("cataBox").childNodes;
	//var i = songNum -1;
	b[i].style.color="white"; 					
    b[songNum].style.color="red";                
    audioAddress=prefix+songName[songNum]+".mp3";
    console.log(audioAddress);
    imageAddress=prefix+songName[songNum]+".png";

    document.getElementById("audioSrc").src =audioAddress;
    document.getElementById("myMusic").load();
    document.getElementById("musicImg").src=imageAddress;
    getLyrics();
}//播放下一首歌
function playLastSong() {
    songNum=songNum-1;
    if (songNum == -1) {
        songNum = songTotal-1;//最后一首
        var i = 0;
    }//溢出
    else{var i = songNum+1;};
	var b = document.getElementById("cataBox").childNodes;
	//var i = songNum +1;
	b[i].style.color="white"; 					
    b[songNum].style.color="red";                
    audioAddress=prefix+songName[songNum]+".mp3";
    imageAddress=prefix+songName[songNum]+".png";

    document.getElementById("audioSrc").src =audioAddress;
    document.getElementById("myMusic").load();
    document.getElementById("musicImg").src=imageAddress;
    getLyrics();
}//播放上一首歌

function getLyrics() {
	
    lyricsAddress=prefix+songName[songNum]+".txt";
    var data;
    $(function(){
        $.ajax({
            url: lyricsAddress,
            dataType: 'text',
            success: function(data) {
                document.getElementById("lyrics").innerText=data;//HTML没有保留格式，Text保留格式
            }
        });
    });
}//获取歌词
function hideLyrics(){
    document.getElementById("lyricsHide").style.display="none";
    document.getElementById("lyricsShow").style.display="inline";
    document.getElementById("lyricsBox").style.display="none";
}//隐藏歌词
function showLyrics(){
	if(nolyrics == 0){
    if(isFirst==1) {
        getLyrics();
        isFirst=0;
    }
    document.getElementById("lyricsHide").style.display="inline";
    document.getElementById("lyricsShow").style.display="none";
    document.getElementById("lyricsBox").style.display="inline";}
	else{
	document.getElementById("lyricsHide").style.display="inline";
    document.getElementById("lyricsShow").style.display="none";
	document.getElementById("lyricsBox").style.display="none";}
}//显示歌词

function getCatalog() {
    var catalog1 = [];
    songName=[];//清空歌曲名数组
    var temp = document.getElementById("test").innerHTML;//由router传入的目录信息
    document.getElementById("cataBox").innerHTML = "";//将原有的信息清空：去除cataBox元素的所有子元素
    prefix=document.getElementById("prefix").innerHTML;//获得前缀
    prefix=prefix+"/";
    prefix=prefix.slice(9);//读取前缀，../public/resource/likes=》/resource/likes

    catalog1 = temp.split(' ');//分割catalog1，即歌曲名字符串
    songTotal = catalog1.length - 1;//歌曲总数

    hideCatalog();//设置初始状态：隐藏目录
    var i = 0;
    for (i = 0; i < songTotal; i++) {
        songName[i]= catalog1[i].slice(0,-4);//存储文件名，slice没问题

        var p = document.createElement("p");//新建元素p
        var t = document.createTextNode(songName[i]);//创建文本节点
        p.appendChild(t);//将文本节点t作为p的子节点
        p.id = i;//赋id值：从0开始，目的是通过这个可以进一步实现点击歌曲名就可以播放该首歌的功能，但还没有实现
        document.getElementById("cataBox").appendChild(p);//将节点p作为cataBox的子节点
    }
		
    //获取目录的同时自动加载第一首歌的歌词、音乐、图片信息
    audioAddress = prefix + songName[0] + ".mp3";//得到音频地址
    imageAddress = prefix + songName[0] + ".png";//得到图片地址
    getLyrics();
    hideLyrics();//设置歌词初始状态：隐藏
    document.getElementById("audioSrc").src = audioAddress;
    document.getElementById("myMusic").load();
    document.getElementById("musicImg").src = imageAddress;
}//获取目录
var musicNum;
var musicName;
function getChange(e){
	nolyrics = 0;
	var b = document.getElementById("cataBox").childNodes;
	//var i = songNum +1;
  //console.log(sourceDom);
      video = $("#v video")   
      video[0].src ='' ;
   		$("#v").show();
   		canvas = $("#c canvas");
  	$("#c").hide();
  	canvas.hide();
   	 //console.log($("#v video"));
     // console.log(video[0]);
  	 video[0].play(); 
	hideBtnVideo();
	showBtnImage();
	hideBtnImagenoMusic();
	var b = document.getElementById("cataBox").childNodes;
	musicNum = e.target.id;
	//console.log(musicNum);
	musicName = e.target.value;
	//console.log(songNum);
	//console.log(musicName);
	//console.log(b);
	for (var i=0;i<b.length;i++) {
                     b[i].style.color="white";
//                     
 					
                      if(b[i].value==musicName){
                          b[i].style.color="red";
                            audioAddress = prefix + musicName + ".mp3";//得到音频地址
  						   imageAddress = prefix + musicName + ".png";//得到图片地址
    						getLyrics();
    						hideLyrics();//设置歌词初始状态：隐藏
    						document.getElementById("audioSrc").src = audioAddress;
    						document.getElementById("myMusic").load();
    						document.getElementById("musicImg").src = imageAddress;
    						songNum = i;
                        }
                    }
}
function getChange2(e){
	showBtnVideo();
	hideBtnImage();
	hideBtnImagenoMusic();
	hideLyrics();
	nolyrics = 1;
	document.getElementById("audioSrc").src='';
	document.getElementById("musicImg").src ='';
	document.getElementById("myMusic").load();
	canvas = $("#c canvas");
  	$("#c").hide();
  	canvas.hide();
	var b = document.getElementById("cataBox").childNodes;
	var musicName = e.target.value;
	//console.log(musicName);
	//console.log(b);
	for (var i=0;i<b.length;i++) {
                     b[i].style.color="white";
//                     
 					
                      if(b[i].value==musicName){
                      	  songNum = i;
                      	  console.log(i);
                          b[i].style.color="red";
                          //console.log(prefix);
                         // console.log( prefix + musicName + ".mp4");//得到音频地址
                          var src = b[i].src;
                          sourceDom = src;  
                          console.log(sourceDom);
                          video = $("#v video")
                          
                          video[0].src =sourceDom ;
   						  $("#v").show();
   						  //console.log($("#v video"));
   						  console.log(video[0]);
  						  video[0].play(); 
  						  video[0].onplaying = function () {
        //获取当前video的总时间
       							 var allTime = this.duration;
       							 btntime.setAttribute("max", allTime);
    };
    //视频播放位置发生变化时开始执行
    							video[0].ontimeupdate = function () {
       							 btntime.value = this.currentTime;
    };
    //播放进度条的事件

                        }
                    }
}
function getChange3(e){
	hideBtnImage();
	hideBtnVideo();
	showBtnImagenoMusic();
	 video = $("#v video")
    
      video[0].src ='' ;
   	  $("#v").hide();
   	 //console.log($("#v video"));
     // console.log(video[0]);
  	 video[0].play(); 
  	 
	hideBtnVideo();
	hideBtnImage();
	hideLyrics();
	nolyrics = 1;
	document.getElementById("audioSrc").src='';
	document.getElementById("musicImg").src ='';
	document.getElementById("myMusic").load();
	var b = document.getElementById("cataBox").childNodes;
	var musicName = e.target.value;
	canvas = $("#c canvas");
  	$("#c").show();
  	canvas.show();
  	var ctx = canvas[0].getContext('2d'); 
	ctx.clearRect(0,0,canvas[0].width,canvas[0].height);  
  	
	
	console.log(musicName);
	console.log(b);
	for (var i=0;i<b.length;i++) {
                     b[i].style.color="white";
//                     
 					
                      if(b[i].value==musicName){
                          b[i].style.color="red";
                         // audioAddress = prefix + musicName + ".png";//得到音频地址
  						  songNum  = i; 
  						  //console.log(canvas);
                      	  var ctx = canvas[0].getContext('2d'); 
                      	   var myImage = new Image();
        					 myImage.src = b[i].src;
                      	  console.log(b[i].src);
                      	  console.log(myImage.src);
                      	  //canvas[0].style.display="online";
                      	 myImage.onload = function() {
 							 ctx.drawImage(myImage, 0, 0,canvas[0].width, canvas[0].height);
								}
                      	  //ctx.fillText('hello',100,100);
                      }
                    }
}
function showCatalog(){
//	hideBtnVideo();
//	showBtnImage();
	document.getElementById("catalogHideVideo").style.display="none";
    document.getElementById("catalogShowVideo").style.display="inline";
    document.getElementById("catalogHideImage").style.display="none";
    document.getElementById("catalogShowImage").style.display="inline";
	var catalog1 = [];
    songName=[];//清空歌曲名数组
    var temp = document.getElementById("test").innerHTML;//由router传入的目录信息
 //   console.log(temp);
    document.getElementById("cataBox").innerHTML = "";//将原有的信息清空：去除cataBox元素的所有子元素
    prefix=document.getElementById("prefix").innerHTML;//获得前缀
    prefix=prefix+"/music/";
    prefix=prefix.slice(9);//读取前缀，../public/resource/likes=》/resource/likes

    catalog1 = temp.split('*');//分割catalog1，即歌曲名字符串
     console.log(catalog1);
    songTotal = catalog1.length - 1;//歌曲总数
    //console.log(songTotal);
	
    //hideCatalog();//设置初始状态：隐藏目录
    
    for (var i = 0; i < songTotal; i++) {
        songName[i]= catalog1[i].slice(0,-4);//存储文件名，slice没问题
		var musicName = songName[i];
        var p = document.createElement("p");//新建元素p
        p.value = musicName;
        var t = document.createTextNode(songName[i]);//创建文本节点
        p.appendChild(t);//将文本节点t作为p的子节点
 //       console.log(p+"agafs");
        p.id = i;//赋id值：从0开始，目的是通过这个可以进一步实现点击歌曲名就可以播放该首歌的功能，但还没有实现
        p.src=  prefix + musicName + ".mp3";
        //console.log(p.id);
        var changeMusic =  document.getElementById(i);
        //console.log(changeMusic);
        document.getElementById("cataBox").appendChild(p);//将节点p作为cataBox的子节点
  
       
    };
         var b = document.getElementById("cataBox").childNodes;
        // console.log(b.length);
 		 for (k = 0; k < b.length; k++){
      	

 //     	console.log(musicName);
      		b[k].addEventListener("click",getChange);
//      	console.log(audioall);
                  
     };   

    document.getElementById("catalogShow").style.display="none";//设置“显示目录”按钮为不可见
    document.getElementById("catalogHide").style.display="inline";//设置“隐藏目录”按钮可见
    document.getElementById("cataBox2").style.display="inline";//设置目录框可见
//  audioAddress = prefix + songName[0] + ".mp3";//得到音频地址
//  imageAddress = prefix + songName[0] + ".png";//得到图片地址
//  getLyrics();
//  hideLyrics();//设置歌词初始状态：隐藏
//  document.getElementById("audioSrc").src = audioAddress;
//  document.getElementById("myMusic").load();
//  document.getElementById("musicImg").src = imageAddress;

    
}//显示目录
function hideBtnImage(){
	document.getElementById("buttonLast").style.display="none";
	document.getElementById("buttonNext").style.display="none";
	document.getElementById("repeatAllSongs").style.display="none";
	document.getElementById("repeatCurrentSong").style.display="none";
	document.getElementById("myMusic").style.display="none";
	document.getElementById("musicImg").style.display="none";
}
function showBtnImage(){
	document.getElementById("buttonLast").style.display="inline";
	document.getElementById("buttonNext").style.display="inline";
	document.getElementById("repeatAllSongs").style.display="inline";
	document.getElementById("repeatCurrentSong").style.display="inline";
	document.getElementById("myMusic").style.display="inline";
	document.getElementById("musicImg").style.display="inline";
}
function hideBtnImagenoMusic(){

	document.getElementById("buttonLastImage").style.display="none";
	document.getElementById("buttonNextImage").style.display="none";
	document.getElementById("myCanvas").style.display="none";
}
function showBtnImagenoMusic(){

	document.getElementById("buttonLastImage").style.display="inline";
	document.getElementById("buttonNextImage").style.display="inline";
	document.getElementById("myCanvas").style.display="inline";

}
function hideBtnVideo(){
	document.getElementById("buttonLastVideo").style.display="none";
	document.getElementById("buttonNextVideo").style.display="none";
	document.getElementById("buttonGo").style.display="none";
	document.getElementById("buttonBack").style.display="none";
	document.getElementById("buttonicontime").style.display="none";
	document.getElementById("buttoniconsound").style.display="none";
	document.getElementById("btntime").style.display="none";
	document.getElementById("btnstart").style.display="none";
	document.getElementById("btnsound").style.display="none";	
	
}
function showBtnVideo(){
	document.getElementById("buttonLastVideo").style.display="inline";
	document.getElementById("buttonNextVideo").style.display="inline";
	console.log("qjdu");
	document.getElementById("buttonGo").style.display="inline";
	document.getElementById("buttonBack").style.display="inline";
	document.getElementById("buttonicontime").style.display="inline";
	document.getElementById("buttoniconsound").style.display="inline";
	document.getElementById("btntime").style.display="inline";
	document.getElementById("btnstart").style.display="inline";
	document.getElementById("btnsound").style.display="inline";	
}
function showCatalogVideo(){
//	showBtnVideo();
//	hideBtnImage();
	document.getElementById("catalogHideImage").style.display="none";
    document.getElementById("catalogShowImage").style.display="inline";
	document.getElementById("catalogHide").style.display="none";
    document.getElementById("catalogShow").style.display="inline";
	var catalog1 = [];
    songName=[];//清空歌曲名数组
    var temp = document.getElementById("video").innerHTML;//由router传入的目录信息
 //   console.log(temp);
    document.getElementById("cataBox").innerHTML = "";//将原有的信息清空：去除cataBox元素的所有子元素
    prefix=document.getElementById("prefix").innerHTML;//获得前缀
    prefix=prefix+"/video/";
    prefix=prefix.slice(9);//读取前缀，../public/resource/likes=》/resource/likes

    catalog1 = temp.split('*');//分割catalog1，即歌曲名字符串
    console.log(catalog1);
    songTotal = catalog1.length - 1;//歌曲总数
    console.log(songTotal);
	
    //hideCatalog();//设置初始状态：隐藏目录
    
    for (var i = 0; i < songTotal; i++) {
        songName[i]= catalog1[i].slice(0,-4);//存储文件名，slice没问题
		var musicName = songName[i];
        var p = document.createElement("p");//新建元素p
        p.value = musicName;
        var t = document.createTextNode(songName[i]);//创建文本节点
        p.appendChild(t);//将文本节点t作为p的子节点
 //       console.log(p+"agafs");
        p.id = i;//赋id值：从0开始，目的是通过这个可以进一步实现点击歌曲名就可以播放该首歌的功能，但还没有实现
        p.src=  prefix + musicName + ".mp4";
        //console.log(p.id);
        var changeMusic =  document.getElementById(i);
        //console.log(changeMusic);
        document.getElementById("cataBox").appendChild(p);//将节点p作为cataBox的子节点
  
       
    };
         var b = document.getElementById("cataBox").childNodes;
        // console.log(b.length);
 		 for (k = 0; k < b.length; k++){
      	

 //     	console.log(musicName);
      		b[k].addEventListener("click",getChange2);
//      	console.log(audioall);
                  
     };   

    document.getElementById("catalogShowVideo").style.display="none";//设置“显示目录”按钮为不可见
    document.getElementById("catalogHideVideo").style.display="inline";//设置“隐藏目录”按钮可见
    document.getElementById("cataBox2").style.display="inline";//设置目录框可见
   }
function showCatalogImage(){
	document.getElementById("catalogHideVideo").style.display="none";
    document.getElementById("catalogShowVideo").style.display="inline";
	document.getElementById("catalogHide").style.display="none";
    document.getElementById("catalogShow").style.display="inline";
	var catalog1 = [];
    songName=[];//清空歌曲名数组
    var temp = document.getElementById("image").innerHTML;//由router传入的目录信息
 //   console.log(temp);
    document.getElementById("cataBox").innerHTML = "";//将原有的信息清空：去除cataBox元素的所有子元素
    prefix=document.getElementById("prefix").innerHTML;//获得前缀
    prefix=prefix+"/image/";
    prefix=prefix.slice(9);//读取前缀，../public/resource/likes=》/resource/likes
	//console.log(prefix);
    catalog1 = temp.split('*');//分割catalog1，即歌曲名字符串
    songTotal = catalog1.length - 1;//歌曲总数
    //console.log(songTotal);
	
    //hideCatalog();//设置初始状态：隐藏目录
    
    for (var i = 0; i < songTotal; i++) {
        songName[i]= catalog1[i].slice(0,-4);//存储文件名，slice没问题
		var musicName = songName[i];
        var p = document.createElement("p");//新建元素p
        p.value = musicName;
        var t = document.createTextNode(songName[i]);//创建文本节点
        p.appendChild(t);//将文本节点t作为p的子节点
 //       console.log(p+"agafs");
        p.id = i;//赋id值：从0开始，目的是通过这个可以进一步实现点击歌曲名就可以播放该首歌的功能，但还没有实现
        p.src=  prefix + musicName + ".png";
        console.log(p.src);
        var changeMusic =  document.getElementById(i);
        //console.log(changeMusic);
        document.getElementById("cataBox").appendChild(p);//将节点p作为cataBox的子节点
  
       
    };
         var b = document.getElementById("cataBox").childNodes;
        // console.log(b.length);
 		 for (k = 0; k < b.length; k++){
      	

 //     	console.log(musicName);
      		b[k].addEventListener("click",getChange3);
//      	console.log(audioall);
                  
     };   

    document.getElementById("catalogShowImage").style.display="none";//设置“显示目录”按钮为不可见
    document.getElementById("catalogHideImage").style.display="inline";//设置“隐藏目录”按钮可见
    document.getElementById("cataBox2").style.display="inline";//设置目录框可见
   }
function hideCatalog(){
    document.getElementById("catalogHide").style.display="none";
    document.getElementById("catalogShow").style.display="inline";
    document.getElementById("cataBox2").style.display="none";
}//点击隐藏
function hideCatalogVideo(){
    document.getElementById("catalogHideVideo").style.display="none";
    document.getElementById("catalogShowVideo").style.display="inline";
    document.getElementById("cataBox2").style.display="none";
}//点击隐藏
function hideCatalogImage(){
    document.getElementById("catalogHideImage").style.display="none";
    document.getElementById("catalogShowImage").style.display="inline";
    document.getElementById("cataBox2").style.display="none";
}//点击隐藏

function repeatAllSongs(){
    document.getElementById("myMusic").removeAttribute("loop");
    repeat=window.setInterval("isEnded()",1000);//每1秒执行一次

}
function repeatCurrentSong() {
    document.getElementById("myMusic").loop = "loop";
    if(repeat!=0) {
        window.clearInterval(repeat);
        repeat=0;
    }
}
function isEnded(){//检测当前歌曲是否已经播放完毕
    var end=document.getElementById("myMusic").ended;
    end=end.toString();
    if(end=="true")
    {
        playNextSong();
    }
}






