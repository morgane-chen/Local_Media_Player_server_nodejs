var express = require('express');

var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {//用于进入主页
  res.render('index.jade', { title: 'Just Play It' });//渲染页面并传递参数
});
router.get('/likes',function(req,res){
    readDirSync(root1);
    res.render('likes.jade',{title:"喜欢的歌",catalogMusic:titles,catalogVideo:titles2,catalogImage:titles3,getPrefix:root1});//返回信息
     });
router.get('/dislikes',function(req,res){
    readDirSync(root2);
    res.render('dislikes.jade',{title:"不喜欢的歌",catalogMusic:titles,catalogVideo:titles2,catalogImage:titles3,getPrefix:root2});//返回信息
});

var fs = require('fs');
var path=require("path");

var root1 = "../public/resource/likes";//当前文件夹
var root2="../public/resource/dislikes";//当前文件夹

var titles=null;
var titles2=null;
var titles3=null;


function readDirSync(path){
    var cnt=0;
    var cnt2=0;
    var cnt3=0;
    titles=null;
    titles2=null;
    titles3=null;
		var path1 = path + "/music/";
		var path2 = path + "/video/";
		var path3 = path + "/image/";
    var pa1 = fs.readdirSync(path1);
    var pa2 = fs.readdirSync(path2);
    var pa3 = fs.readdirSync(path3);
    pa1.forEach(function(ele,index){
        var info = fs.statSync(path1+"/"+ele);
        if(getdir(ele)=="mp3"){//只获取后缀为mp3的文件
            //console.log("file: "+ele);  //ele即文件全名
            if(cnt++==0)
                titles=ele+'*';
            else {
                titles = titles + ele + '*';//titles是一个字符串，格式如001.mp3 002.mp3，并发送给likes/dislikes页面
            }
        }
    });
     
        pa2.forEach(function(ele,index){
        var info = fs.statSync(path2+"/"+ele);
        if(getdir(ele)=="mp4"){//只获取后缀为mp3的文件
            //console.log("file: "+ele);  //ele即文件全名
            if(cnt2++==0)
                titles2=ele+'*';
            else {
                titles2 = titles2 + ele + '*';//titles是一个字符串，格式如001.mp3 002.mp3，并发送给likes/dislikes页面
            }
        }
    });
        pa3.forEach(function(ele,index){
        var info = fs.statSync(path3+"/"+ele);
        if(getdir(ele)=="png"){//只获取后缀为mp3的文件
            //console.log("file: "+ele);  //ele即文件全名
            if(cnt3++==0)
                titles3=ele+'*';
            else {
                titles3 = titles3 + ele + '*';//titles是一个字符串，格式如001.mp3 002.mp3，并发送给likes/dislikes页面
            }
        }
    });
}
function getdir(url){
    var arr = url.split('.');
    var len = arr.length;
    return arr[len-1];
}

module.exports = router;

