//func.js
var script=document.createElement("script");
script.src="javascripts/jquery.js";

var pre = "/resource/likes/";//le préfix
var pre2="/resource/dislikes/";
var prefix;
var songNum = 0;//pour enrehistrer le numéro de la source(chason, photo ou vidéo)
var songName;//pour ebnregistrer le nom de la source
var songTotal=0;//nombre total des sources
var repeat=0;
var isFirst=1;//pour voir si c'est la première source
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
    };//la fonction d'accélérer la vidéo

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
   };// la fonction de ralentir la vidéo



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
}//la fonction du bouton Play/Pause


function playNextVideo() {
	
    songNum = songNum + 1;// le numéro de vidéo suivante
    console.log(songNum);
    if (songNum == songTotal) {
        songNum=0;
        var i = songTotal-1;
    }
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
}//émettre la vidéo suivante 
function playLastImage() {
	
    songNum = songNum - 1;//2
    console.log(songNum);
    if (songNum == -1) {
        songNum = songTotal-1;//la dernière photo
        var i = 0;
    }
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
     
}//émettre la photo dernière
function playNextImage() {
	
    songNum = songNum + 1;//2
    console.log(songNum);
    if (songNum == songTotal) {
        songNum=0;
        var i = songTotal-1;
    }//si dépasser le nombre total des images
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

}////émettre la photo suivante
function playLastVideo() {
	var play =$("#btnstart");
	play[0].innerHTML = "Pause";
    songNum = songNum - 1;//2
    console.log(songNum);
    if (songNum == -1) {
        songNum = songTotal-1;//la dernière vidéo
        var i = 0;
    }
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
}//émettre la vidéo dernière

function playNextSong() {

    songNum = songNum + 1;//2
    console.log(songNum);
    if (songNum == songTotal) {
        songNum=0;
        var i = songTotal-1;
    }
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
}//émettre la chason suivante
function playLastSong() {
    songNum=songNum-1;
    if (songNum == -1) {
        songNum = songTotal-1;
        var i = 0;
    }
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
}//émettre la chason dernière

function getLyrics() {
	
    lyricsAddress=prefix+songName[songNum]+".txt";
    var data;
    $(function(){
        $.ajax({
            url: lyricsAddress,
            dataType: 'text',
            success: function(data) {
                document.getElementById("lyrics").innerText=data;
            }
        });
    });
}// la fonction d'obtenir les paroles
function hideLyrics(){
    document.getElementById("lyricsHide").style.display="none";
    document.getElementById("lyricsShow").style.display="inline";
    document.getElementById("lyricsBox").style.display="none";
}//la fonction de cacher les paroles
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
}//la fonction d'afficher les paroles

//function getCatalog() {
//  var catalog1 = [];
//  songName=[];
//  var temp = document.getElementById("test").innerHTML;//obtenir les informations venant de rooter
//  document.getElementById("cataBox").innerHTML = "";//vider les informations d'avant：vider tous les éléments sous cataBox
//  prefix=document.getElementById("prefix").innerHTML;//obtenir le Préfix
//  prefix=prefix+"/";
//  prefix=prefix.slice(9);//../public/resource/likes=》/resource/likes
//
//  catalog1 = temp.split(' ');//obtenir les strings des noms des chansons
//  songTotal = catalog1.length - 1;//nombre total des chansons
//
//  hideCatalog();//cacher le catalogue
//  var i = 0;
//  for (i = 0; i < songTotal; i++) {
//      songName[i]= catalog1[i].slice(0,-4);
//
//      var p = document.createElement("p");
//      var t = document.createTextNode(songName[i]);
//      p.appendChild(t);
//      p.id = i;
//      document.getElementById("cataBox").appendChild(p);
//  }
//		
//  
//
//}
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
                            audioAddress = prefix + musicName + ".mp3";//obtenir l'adress de la chason
  						   imageAddress = prefix + musicName + ".png";//obtenir l'adrress de la photo de la chason
    						getLyrics();
    						hideLyrics();
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
       							 var allTime = this.duration;
       							 btntime.setAttribute("max", allTime);
    };
    							video[0].ontimeupdate = function () {
       							 btntime.value = this.currentTime;
    };

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
    songName=[];
    var temp = document.getElementById("test").innerHTML;
 //   console.log(temp);
    document.getElementById("cataBox").innerHTML = "";
    prefix=document.getElementById("prefix").innerHTML;
    prefix=prefix+"/music/";
    prefix=prefix.slice(9);//../public/resource/likes=》/resource/likes

    catalog1 = temp.split('*');
     console.log(catalog1);
    songTotal = catalog1.length - 1;

    
    for (var i = 0; i < songTotal; i++) {
        songName[i]= catalog1[i].slice(0,-4);
		var musicName = songName[i];
        var p = document.createElement("p");
        p.value = musicName;
        var t = document.createTextNode(songName[i]);
        p.appendChild(t);
        p.id = i;
        p.src=  prefix + musicName + ".mp3";
        //console.log(p.id);
        var changeMusic =  document.getElementById(i);
        //console.log(changeMusic);
        document.getElementById("cataBox").appendChild(p);
  
       
    };
         var b = document.getElementById("cataBox").childNodes;
        // console.log(b.length);
 		 for (k = 0; k < b.length; k++){
      	

 //     	console.log(musicName);
      		b[k].addEventListener("click",getChange);
//      	console.log(audioall);
                  
     };   

    document.getElementById("catalogShow").style.display="none";
    document.getElementById("catalogHide").style.display="inline";
    document.getElementById("cataBox2").style.display="inline";

    
}
function hideBtnImage(){
	document.getElementById("buttonLast").style.display="none";
	document.getElementById("buttonNext").style.display="none";
	document.getElementById("repeatAllSongs").style.display="none";
	document.getElementById("repeatCurrentSong").style.display="none";
	document.getElementById("myMusic").style.display="none";
	document.getElementById("musicImg").style.display="none";
}//cacher les boutons servant à l'émission des chasons
function showBtnImage(){
	document.getElementById("buttonLast").style.display="inline";
	document.getElementById("buttonNext").style.display="inline";
	document.getElementById("repeatAllSongs").style.display="inline";
	document.getElementById("repeatCurrentSong").style.display="inline";
	document.getElementById("myMusic").style.display="inline";
	document.getElementById("musicImg").style.display="inline";
}//afficher les boutons servant à l'émission des chasons
function hideBtnImagenoMusic(){

	document.getElementById("buttonLastImage").style.display="none";
	document.getElementById("buttonNextImage").style.display="none";
	document.getElementById("myCanvas").style.display="none";
}
function showBtnImagenoMusic(){

	document.getElementById("buttonLastImage").style.display="inline";
	document.getElementById("buttonNextImage").style.display="inline";
	document.getElementById("myCanvas").style.display="inline";

}//afficher les boutons servant à l'émission des photos
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
	
}//cacher les boutons servant à l'émission des vidéos
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
}//afficher les boutons servant à l'émission des vidéos
function showCatalogVideo(){
//	showBtnVideo();
//	hideBtnImage();
	document.getElementById("catalogHideImage").style.display="none";
    document.getElementById("catalogShowImage").style.display="inline";
	document.getElementById("catalogHide").style.display="none";
    document.getElementById("catalogShow").style.display="inline";
	var catalog1 = [];
    songName=[];
    var temp = document.getElementById("video").innerHTML;
 //   console.log(temp);
    document.getElementById("cataBox").innerHTML = "";
    prefix=document.getElementById("prefix").innerHTML;
    prefix=prefix+"/video/";
    prefix=prefix.slice(9);

    catalog1 = temp.split('*');
    console.log(catalog1);
    songTotal = catalog1.length - 1;
    console.log(songTotal);
	

    
    for (var i = 0; i < songTotal; i++) {
        songName[i]= catalog1[i].slice(0,-4);
		var musicName = songName[i];
        var p = document.createElement("p");
        p.value = musicName;
        var t = document.createTextNode(songName[i]);
        p.appendChild(t);
 //       console.log(p+"agafs");
        p.id = i;
        p.src=  prefix + musicName + ".mp4";

        var changeMusic =  document.getElementById(i);

        document.getElementById("cataBox").appendChild(p);
  
       
    };
         var b = document.getElementById("cataBox").childNodes;
        // console.log(b.length);
 		 for (k = 0; k < b.length; k++){
      	

 //     	console.log(musicName);
      		b[k].addEventListener("click",getChange2);
//      	console.log(audioall);
                  
     };   

    document.getElementById("catalogShowVideo").style.display="none";
    document.getElementById("catalogHideVideo").style.display="inline";
    document.getElementById("cataBox2").style.display="inline";
   }
function showCatalogImage(){
	document.getElementById("catalogHideVideo").style.display="none";
    document.getElementById("catalogShowVideo").style.display="inline";
	document.getElementById("catalogHide").style.display="none";
    document.getElementById("catalogShow").style.display="inline";
	var catalog1 = [];
    songName=[];
    var temp = document.getElementById("image").innerHTML;
 //   console.log(temp);
    document.getElementById("cataBox").innerHTML = "";
    prefix=document.getElementById("prefix").innerHTML;
    prefix=prefix+"/image/";
    prefix=prefix.slice(9);//../public/resource/likes=》/resource/likes
	//console.log(prefix);
    catalog1 = temp.split('*');
    songTotal = catalog1.length - 1;

    
    for (var i = 0; i < songTotal; i++) {
        songName[i]= catalog1[i].slice(0,-4);
		var musicName = songName[i];
        var p = document.createElement("p");
        p.value = musicName;
        var t = document.createTextNode(songName[i]);
        p.appendChild(t);
 //       console.log(p+"agafs");
        p.id = i;
        p.src=  prefix + musicName + ".jpg";
        console.log(p.src);
        var changeMusic =  document.getElementById(i);
        //console.log(changeMusic);
        document.getElementById("cataBox").appendChild(p);
  
       
    };
         var b = document.getElementById("cataBox").childNodes;
        // console.log(b.length);
 		 for (k = 0; k < b.length; k++){
      	

 //     	console.log(musicName);
      		b[k].addEventListener("click",getChange3);
//      	console.log(audioall);
                  
     };   

    document.getElementById("catalogShowImage").style.display="none";
    document.getElementById("catalogHideImage").style.display="inline";
    document.getElementById("cataBox2").style.display="inline";
   }
function hideCatalog(){
    document.getElementById("catalogHide").style.display="none";
    document.getElementById("catalogShow").style.display="inline";
    document.getElementById("cataBox2").style.display="none";
}
function hideCatalogVideo(){
    document.getElementById("catalogHideVideo").style.display="none";
    document.getElementById("catalogShowVideo").style.display="inline";
    document.getElementById("cataBox2").style.display="none";
}
function hideCatalogImage(){
    document.getElementById("catalogHideImage").style.display="none";
    document.getElementById("catalogShowImage").style.display="inline";
    document.getElementById("cataBox2").style.display="none";
}

function repeatAllSongs(){
    document.getElementById("myMusic").removeAttribute("loop");
    repeat=window.setInterval("isEnded()",1000);

}
function repeatCurrentSong() {
    document.getElementById("myMusic").loop = "loop";
    if(repeat!=0) {
        window.clearInterval(repeat);
        repeat=0;
    }
}
function isEnded(){
    var end=document.getElementById("myMusic").ended;
    end=end.toString();
    if(end=="true")
    {
        playNextSong();
    }
}






