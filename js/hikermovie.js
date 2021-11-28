//新方圆小棉袄公众号特供版
//规则编辑By香雅情。2021/08/29

//主页解析
function hikhmrule() {
var json = JSON.parse(getResCode());
var res = {};
var d = [];
var setjson=JSON.parse(fetch('hiker://files/rules/xyq/hikerset.json',{}));
var ssmd=setjson.ssmode;
var ssxc=setjson.sscount;
var self=JSON.parse(getRule()).title;
//d.push({col_type: 'line'});

//d.push({
//    url:"'hiker://search?s='+input+'&rule="+self+"'",
//    desc:"请输入搜索关键词",
//    col_type:"input"
//});
var decText = getVar("xyqtext", "");
d.push({
    title: decText,
    url: "input://" + '' + ".js:putVar('xyqtext',input);refreshPage()",
    col_type: 'icon_1_search'
});

var ssyq = ['资源网采集搜@@资源网采集.xyq','香情影视搜@@香情影视'];
if(self!=='香情影视'){
d.push({
        title: '你的规则改过名，搜索框搜索功能将受影响。',
        url: 'hiker://search?s='+getVar('xyqtext')+'&rule='+self,
        col_type: 'flex_button'
    });
 }
else{
for (var yq in ssyq) {
    var kj = ssyq[yq].split('@@');
    d.push({
        title: kj[0],
        url: 'hiker://search?s=' + getVar('xyqtext') + '&rule=' + kj[1],
        col_type: "flex_button"
    });
}
}
    d.push({
        title: '茶杯狐搜',
        url: $('hiker://empty#x#' + getVar('xyqtext') + '#x#fypage@-1@*24@#x#').rule(() => {
            var res = {};
            var d = [];
            var spl = MY_URL.split('#x#');
            //var lin = 'https://api2.jackeriss.com/api/v1/search/?text=' + spl[1] + '&type=0&from=' + spl[2] + '&size=20';
            var lin = 'https://api.jackeriss.com/api/v1/search/?text='+spl[1]+'&type=0&from='+spl[2]+'&size=24';
            var pn = spl[2] / 20 + 1;
            var urlo = JSON.parse(request(lin, {}));
            var urlt = JSON.parse(fetch(lin.replace('type=0', 'type=1'), {}));
            //log(urlo);
            if (urlo.resources.length < 1&&urlt.resources.length < 1) {
                d.push({
                    title: '当前关键字  ' + spl[1] + '  无搜索结果',
                    col_type: 'text_center_1'
                });
            }
            if (urlo.resources.length > 0) {
                d.push({
                    title: '♥当前第' + pn + '页',
                    col_type: 'text_center_1'
                });

                for (var i = 0; i < urlo.resources.length; i++) {
                    var title = urlo.resources[i].text.replace(/\<.*?\>/g, '');
                    var url = urlo.resources[i].url;
                    var desc = urlo.resources[i].website;
                    d.push({
                        title: title.replace(spl[1], '““' + spl[1] + '””')+'  '+desc+'  在线',
                        url: url,
                        //desc: '在线搜索结果',
                        col_type: 'text_1'
                    });
                }
            }

            if (urlt.resources.length > 0) {
                for (var j = 0; j < urlt.resources.length; j++) {
                    var title = urlt.resources[j].text.replace(/\<.*?\>/g, '');
                    var url = urlt.resources[j].url;
                    var desc = urlt.resources[j].website;
                    d.push({
                        title: title.replace(spl[1], '““' + spl[1] + '””')+'  '+desc+'  下载',
                        url: url,
                        //desc: '下载搜索结果',
                        col_type: 'text_1'
                    });
                }
            }
            res.data = d;
            setResult(res);
        }),
        col_type: "flex_button"
    });
    
var len=[];
for (var i = 0; i < json.data.length; i++) {
var tab = json.data[i];
/*
    d.push({
    title : '““'+tab.type+'””',
    col_type : 'text_center_1'
})
*/
for (var k = 0; k < tab.list.length; k++) {
var list = tab.list[k];
    d.push({
    title : list.title,
    img : list.ico+'@Referer=',
    url : 'hiker://empty$$'+list.url+'$$fypage$$'+list.vodtype+'$$'+list.vodhref+'$$',
    col_type:'icon_4_card'
})
len.push({title:list.title});
}
}
if(json.note!=''){
d.unshift({
    title : '““'+json.note+'””'+'('+len.length+')',
    url:$('hiker://empty').rule((json)=>{
    var res = {};var d = [];
    var json = json;
    d.push({
    //title : json.note,
    title:json.content,
    desc : json.content,
    url : json.uplink,
    col_type:'rich_text'
			})
    res.data = d;setHomeResult(res);
    },json),
    col_type:'flex_button'
});
}
d.unshift({
    title : '资源网',
    url:'hiker://home@资源网采集.xyq||https://haikuoshijie.cn/topic/6033',
    col_type:'flex_button'
});

d.unshift({
    title : '🔄更新',
    url:$('hiker://empty').lazyRule(()=>{
	//var uprulejs = fetch('https://codeberg.org/lzk23559/cloudrule/raw/branch/master/hikermovie.js',{});
	//writeFile("hiker://files/rules/xyq/hikermovie.js",uprulejs);
	//var uprulejson = fetch('https://codeberg.org/lzk23559/cloudrule/raw/branch/master/hikermovie.json',{});
	//writeFile("hiker://files/rules/xyq/hikermovie.json",uprulejson);
	//var upruleplugin = fetch('https://code.aliyun.com/lzk23559/CloudRule/raw/master/global_香情影视网页插件.js',{});
	var upruleplugin = fetch('https://codeberg.org/lzk23559/cloudrule/raw/branch/master/global_香情影视网页插件.js',{});
	writeFile("hiker://files/rules/js/global_香情影视网页插件.js",upruleplugin);
    //writeFile("hiker://files/rules/xyq/hikerupdate.txt",new Date()+'')
	refreshPage(false);return 'toast://只是更新了一下网页插件，不用天天按。'
    }),
    col_type:'flex_button'
});

d.unshift({
    title : '🔍设置'+'('+(ssmd==1?'聚'+ssxc:'列')+')',
    url:$('hiker://empty').rule(()=>{
var d=[];
var setjson=JSON.parse(fetch('hiker://files/rules/xyq/hikerset.json',{}));
var ssmd=setjson.ssmode;
var ssxc=setjson.sscount;

d.push({
    title:'搜索模式设置',
    col_type:'text_center_1'
});
d.push({
    title : '当前：'+'('+(ssmd==1?'聚合结果':'站点列表')+')',
    url : $('hiker://empty').lazyRule(()=>{
    var md=JSON.parse(fetch('hiker://files/rules/xyq/hikerset.json',{})).ssmode;
    if(md==1){
    var fileUrl=fetch("hiker://files/rules/xyq/hikerset.json",{}).replace('\"ssmode\":\"1\"','\"ssmode\":\"0\"');
    writeFile("hiker://files/rules/xyq/hikerset.json",fileUrl);
    back(true);return 'toast://切换为搜索引擎列表单选模式成功！';
    }
    else{
    var fileUrl=fetch("hiker://files/rules/xyq/hikerset.json",{}).replace('\"ssmode\":\"0\"','\"ssmode\":\"1\"');
    writeFile("hiker://files/rules/xyq/hikerset.json",fileUrl);
    back(true);return 'toast://切换为聚合搜索模式成功！'
    }
    }),
    col_type:'text_2'
})

d.push({
    title:'搜索线程设置',
    col_type:'text_center_1'
});
d.push({
    title:'当前线程'+ssxc+'  '+'你输入的是 '+parseInt(getVar('hikerssxcset','')),
    col_type:'rich_text'
});

d.push({
    title : '设置搜索线程',
    url:"input://"+''+"////请输入一个整数数字，推荐不要大于15。.js:putVar('hikerssxcset',input);refreshPage()",
    col_type:'text_2'
});

d.push({
    title : '保存设置',
    url:$().lazyRule(()=>{
var num=parseInt(getVar('hikerssxcset')).toString();
if(num=='NaN'){
return 'toast://输入的值好像不正确。';}
else{
var fileUrl=fetch("hiker://files/rules/xyq/hikerset.json",{}).replace(/\"sscount\":\"[\S]*\"/,'\"sscount\":\"'+num+'\"');
    writeFile("hiker://files/rules/xyq/hikerset.json",fileUrl);
    refreshPage(true);return 'toast://保存设置搜索线程完成！';}

}),
    col_type:'text_2'
});
setResult(d)
}),
    col_type:'flex_button'
})

res.data = d;
setHomeResult(res);
}
//主页二级
function hikhmerj() {
var res = {};var d = [];
var spl = MY_URL.split('$$')[1];
var pn = MY_URL.split('$$')[2];
var vtype=MY_URL.split('$$')[3];
var vhref=MY_URL.split('$$')[4];
//var cook=getVar('hikernfcookie');
//取主页源码
try{
if(/cqzyw/.test(spl)){
var link=spl+'/index.php/index/index/page/'+pn+'.html';
var html=fetch(link,{headers:{'User-Agent':MOBILE_UA,'Referer':spl}});
}else if(/leduosj/.test(spl)){
var link=spl+'/?m=vod-index-pg-'+pn+'.html';
var html=fetch(link,{headers:{'User-Agent':MOBILE_UA,'Referer':spl}});
}else if(/kunyu77/.test(spl)){
var html=fetch(spl+'/searchFilter?type_id=0&pagenum='+pn+'&pagesize=24',{headers:{'User-Agent':'Dalvik/2.1.0'}});
}else if(/bowang/.test(spl)){
var html=fetch(spl+'/api.php/app/video?pg='+pn+'&tid=all&class=&area=&lang=&year=&token=',{headers:{'User-Agent':'Dalvik/2.1.0'}});
}else if(/789pan|apibdzy|rrzyw|bajiecaiji|wfss100|4kyima/.test(spl)){
var html=request(spl+'?ac=videolist&pg='+pn,{});
}else if(/bbkdj/.test(spl)){
var html=request(spl+'?ac=list&pg='+pn,{});
}else{
 if(pn==1){
if(/nfmovies/.test(spl)){
var html=fetch(spl,{headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});
}else if(/paofanhuai/.test(spl)){
var pfbd='{"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","sysVer":"7.1.2","osType":"2","channel_id":"0","udid":"70cf34e9-3ef2-39e1-9f5f-a9067d18aec9","debug":"1","ver":"5.1.7","product":"1"}';
var html=fetch(spl+'/video/index', {headers:{'Content-Type':'application/json','User-Agent':'okhttp/4.1.0'},body:pfbd,method:'POST'});
//setError(html);
}else{
var html=request(spl,{});}
 }
}

if (html.indexOf('检测中') != -1) {
html=request(spl + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});
}
//setError(html);

//第一页要显示分类
if(pn==1){
//分类标题与替换词
if(/nicemov/.test(spl)){
var clst=('全部&电影&电视剧&综艺&动漫').split('&');
var clsu=('0&1&2&3&4').split('&');}
else{
var clst=vtype.split('&');
var clsu=vhref.split('&');}


for(var i=0;i<clst.length;i++){
//分类链接
if(/<rss/.test(html)&&/<video>/.test(html)&&/<pic>/.test(html)){var url=spl+'?ac=videolist&pg=fypage&t='+clsu[i];}
else if(/<rss/.test(html)&&/<video>/.test(html)){var url=spl+'?ac=list&pg=fypage&t='+clsu[i];}
else if(/jpysvip|zhaikan|unss|juhaokan|mjhd/.test(spl)){var url=spl+'/vodtype/'+clsu[i]+'-fypage.html';}
else if(/nfstar|nfxtv|nfxhd|zhenbuka|cokemv|lekkan|4kan|nkvod|800novel/.test(spl)){var url=spl+'/vodtype/'+clsu[i]+'-fypage/';}
else if(/ak1080|hxys|aiyy|tv.ci|renrenmi|moyuy|vipmv|o8tv|xkvideo|gudanys|vdxj|paofans/.test(spl)){var url=spl+'/vodshow/'+clsu[i]+'--------fypage---.html';}
else if(/jhdyw/.test(spl)){var url=spl+'/vodshow/'+clsu[i]+'--------fypage---/';}
//else if(/o8tv/.test(spl)){var url=spl+'/index.php/vodshow/'+clsu[i]+'--------fypage---/';}
else if(/80ysm|77diany/.test(spl)){var url=spl+'/vodshow/'+clsu[i]+'/page/fypage.html';}
else if(/bddysf|fantuan/.test(spl)){var url=spl+'/vodshow/id/'+clsu[i]+'/page/fypage.html';}
else if(/7xiady|bwl87/.test(spl)){var url=spl+'/type/'+clsu[i]+'-fypage/';}
else if(/46nb/.test(spl)){var url=spl+'/type/'+clsu[i]+'/fypage.html';}
else if(/saohuotv/.test(spl)){var url=spl+'/list/'+clsu[i]+'-fypage.html';}
else if(/siguyy/.test(spl)){var url=spl+'/type/'+clsu[i]+'-fypage.html';}
else if(/subaibai|qianoo|gdwar|magedn/.test(spl)){var url=spl+'/'+clsu[i]+'/page/fypage[firstPage='+spl+'/'+clsu[i]+']';}
else if(/auete/.test(spl)){var url=spl+'/'+clsu[i]+'/indexfypage.html[firstPage='+spl+'/'+clsu[i]+'/index.html]';}
else if(/80dvd/.test(spl)){var url=spl+'/frim/index'+clsu[i]+'-'+'fypage.html[firstPage='+spl+'/frim/index'+clsu[i]+'.html]';}
else if(/kyikan/.test(spl)){var url=spl+'/index.php?m=vod-list-id-'+clsu[i]+'-pg-fypage-order--by--class--year--letter--area--lang-.html';}
else if(/aidi|ganfantv|5180s/.test(spl)){var url=spl+'/show/'+clsu[i]+'--------fypage---.html';}
else if(/aik\.la/.test(spl)){var url=spl+'/show/'+clsu[i]+'--------fypage---/';}
else if(/bowang/.test(spl)){var url=spl+'/api.php/app/video?pg=fypage&tid='+clsu[i]+'&class=&area=&lang=&year=&token=';}
else if(/dianyingim/.test(spl)){var url=spl+'/pianku-'+clsu[i]+'--------fypage---/';}
else if(/tvyb02/.test(spl)){var url=spl+'/vod/type/id/'+clsu[i]+'/page/fypage.html';}
else if(/qkan8|cqzyw/.test(spl)){var url=spl+'/index.php/vod/type/id/'+clsu[i]+'/page/fypage.html';}
else if(/klysw|dxys|flvweb|syg520|4ytv|lengyue|haimianys|90zyk|cccu|msdv|newfii|7a11l|lqiyi/.test(spl)){var url=spl+'/index.php/vod/show/id/'+clsu[i]+'/page/fypage.html';}
else if(/nicotv/.test(spl)){var url=spl+'/video/type3/'+clsu[i]+'-------fypage.html';}
else if(/agefan/.test(spl)){var url=spl+'/catalog/'+clsu[i]+'-all-all-all-all-time-fypage';}
else if(/1090ys/.test(spl)){var url=spl+'/whole/'+clsu[i]+'/page/fypage.html';}
else if(/bde4/.test(spl)){var url=spl+'/s/'+clsu[i]+'/fypage';}
else if(/kunyu77/.test(spl)){var url=spl+'/searchFilter?type_id='+clsu[i]+'&pagenum=fypage&pagesize=24;get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/leduosj/.test(spl)){var url=spl+'/?m=vod-type-id-'+clsu[i]+'-pg-fypage.html';}
else if(/nfmovies/.test(spl)){var url=spl+'/search.php?page=fypage&searchtype=5&order=time&'+clsu[i]+';get;utf-8;{User-Agent@Mozilla/5.0&&Cookie@.js:getVar("hikernfcookie")}';}
else if(/daishudy/.test(spl)){var url=spl+'/search.php?page=fypage&searchtype=5&tid='+clsu[i];}
else if(/yanetflix|98hyk/.test(spl)){var url=spl+'/index.php/vod/show/id/'+clsu[i]+'/page/fypage.html[firstPage='+spl+'/index.php/vod/show/id/'+clsu[i]+'.html]';}
else if(/nicemov/.test(spl)){var url=spl+'/search.php?page=fypage&searchtype=5&tid='+clsu[i]+'[firstPage='+spl+'/search.php?searchtype=5&tid='+clsu[i]+']';}
else if(/nangua55/.test(spl)){var url=spl+'/index.php?s=home-vod-type-id-'+clsu[i]+'-picm-1-p-fypage';}
else if(/ysftv/.test(spl)){var url=spl+'/Class/'+clsu[i]+'-fypage.html';}
else if(/cocoman/.test(spl)){var url=spl+'/show?'+clsu[i]+'&orderBy=weeklyCount&page=fypage';}
else if(/kanju77/.test(spl)){var url=spl+'/y/'+clsu[i]+'/fypage.html';}
else if(/paofanhuai/.test(spl)){var url=spl+'/video/filter?JsonBody={"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","page_num":"fypage","sysVer":"7.1.2","osType":"2","channel_id":"'+clsu[i]+'","debug":"1","ver":"5.1.7","product":"1"};post;utf-8;{User-Agent@okhttp/4.1.0}';}

//显示分类
d.push({
   title:clst[i],
   url:url+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));clsrule();`,
   col_type:clst.length>=16?'scroll_button':'flex_button'
   //col_type:'flex_button'
})
}//for结束

//分类结束
d.push({col_type: 'line'});}

//首页推荐开始,取首页推荐列表
if(/<rss/.test(html)&&/<video>/.test(html)){var conts=parseDomForArray(html,'body&&rss');}
else if(/kunyu77|bowang/.test(spl)){var conts = '[]';}
else if(/paofanhuai/.test(spl)){var conts = JSON.parse(html).data.label;}
else if(/saohuotv/.test(spl)){var conts=parseDomForArray(html,'body&&.v_list');}
else if(/agefan/.test(spl)){var conts=parseDomForArray(html,'body&&.ul_li_a5');}
else if(/bde4/.test(spl)){var conts=parseDomForArray(html,'body&&.cards');}
else if(/klysw|msdv/.test(spl)){var conts=parseDomForArray(html,'body&&section:has(li[class~=^leo-video-])');}
else if(/subaibai|qianoo|gdwar|magedn/.test(spl)){var conts=parseDomForArray(html,'body&&.bt_img');}
else if(/cqzyw/.test(spl)){var conts=parseDomForArray(html,'body&&.stui-vodlist');}
else if(/mo-part-round/.test(html)&&/mo-situ-name/.test(html)){var conts=parseDomForArray(html,'body&&.mo-part-round:has(.mo-situ-name)');}
else if(/menuBar/.test(html)&&/imgBox/.test(html)){var conts=parseDomForArray(html,'body&&.imgBox:has(.ImgA)');}
else if(/myui-vodlist/.test(html)&&/pic-text/.test(html)){var conts=parseDomForArray(html,'body&&.myui-vodlist:has(.pic-text)');}
else if(/myui-vodlist/.test(html)&&/pic-tag/.test(html)){var conts=parseDomForArray(html,'body&&.myui-vodlist:has(.pic-tag)');}
else if(/stui-vodlist/.test(html)&&/pic-tag/.test(html)){var conts=parseDomForArray(html,'body&&.stui-vodlist:has(.pic-tag)');}
else if(/stui-vodlist/.test(html)&&/pic-text/.test(html)){var conts=parseDomForArray(html,'body&&.stui-vodlist:has(.pic-text)');}
else if(/vodlist/.test(html)&&/vodlist_item/.test(html)){var conts=parseDomForArray(html,'body&&.vodlist:has(.vodlist_item)');}
else if(/pack-packcover/.test(html)){var conts=parseDomForArray(html,'body&&.vodlist:has(.pack-packcover)');}
else if(/fed-list-info/.test(html)&&/fed-col-sm3/.test(html)){var conts=parseDomForArray(html,'body&&.fed-list-info:has(.fed-col-sm3)');}
else if(/list-unstyled/.test(html)&&/col-sm-3/.test(html)){var conts=parseDomForArray(html,'body&&.list-unstyled:has(.col-sm-3)');}
else if(/hy-video-list/.test(html)&&/col-sm-3/.test(html)){var conts=parseDomForArray(html,'body&&.hy-video-list:has(.col-sm-3)');}
else if(/hl-vod-list/.test(html)&&/hl-list-item/.test(html)){var conts=parseDomForArray(html,'body&&.hl-vod-list:has(.hl-list-item)');}
else if(/layout-box/.test(html)&&/col-sm-3/.test(html)){var conts=parseDomForArray(html,'body&&.layout-box:has(.col-sm-3)');}
else if(/forum_card_fid/.test(html)&&/threadlist/.test(html)){var conts=parseDomForArray(html,'body&&.threadlist');}
else if(/index-area/.test(html)&&/link-hover/.test(html)&&/sj-nav-search|sy-nav-search/.test(html)){var conts=parseDomForArray(html,'body&&.index-area');}
else if(/indexShowBox/.test(html)&&/video-model-list/.test(html)){var conts=parseDomForArray(html,'body&&.video-model-list');}
else if(/module-item/.test(html)&&/module-list/.test(html)){var conts=parseDomForArray(html,'body&&.module-list');}
else if(/movie-list/.test(html)&&/m-item/.test(html)){var conts=parseDomForArray(html,'body&&.movie-list');}
else if(/data_list/.test(html)&&/DianDian/.test(html)){var conts=parseDomForArray(html,'body&&#data_list');}
else if(/tbox_t/.test(html)&&/tbox_m/.test(html)){var conts=parseDomForArray(html,'body&&.tbox_m');}
else if(/volistheightb/.test(html)&&/volistwidthb/.test(html)){var conts=parseDomForArray(html,'body&&.box:has(.volistwidthb)');}

//setError(conts);
for(var i = 0;i<conts.length;i++){
//主页片单列表
if(/<rss/.test(html)&&/<video>/.test(html)){
var list=parseDomForArray(conts[i],"body&&video");}
else if(/kunyu77/.test(spl)){
var list=JSON.parse(html).data.result;}
else if(/bowang/.test(spl)){
var list=JSON.parse(html).list;}
else if(/paofanhuai/.test(spl)){
var list=JSON.parse(html).data.label[i].list;}
else if(/bde4/.test(spl)){
var list=parseDomForArray(conts[i],"body&&.card");}
else if(html.indexOf('mo-part-round')!=-1){
var list=parseDomForArray(conts[i],'body&&.mo-cols-info');}
else if(/hy-video-list/.test(html)&&/col-sm-3/.test(html)){
var list=parseDomForArray(conts[i],'body&&.col-sm-3');}
else if(/hl-vod-list/.test(html)&&/hl-list-item/.test(html)){
var list=parseDomForArray(conts[i],'body&&.hl-list-item');}
else if(/layout-box/.test(html)&&/col-sm-3/.test(html)){
var list=parseDomForArray(conts[i],'body&&.col-sm-3');}
else if(html.indexOf('fed-list-info')!=-1){
var list=parseDomForArray(conts[i],'body&&.fed-col-sm3');}
else if(html.indexOf('pack-packcover')!=-1){
var list=parseDomForArray(conts[i],'body&&.pack-packcover');}
else if(/module-item/.test(html)&&/module-list/.test(html)){var list=parseDomForArray(conts[i],'body&&.module-item');}
else if(/data_list/.test(html)&&/DianDian/.test(html)){var list=parseDomForArray(html,'body&&#data_list&&.DianDian');}
else if(html.indexOf('link-hover')!=-1){
var list=parseDomForArray(conts[i],'body&&li:has(.link-hover)');}
else{
var list=parseDomForArray(conts[i],'body&&li:has(a)')}

//setError(list);

for(var j = 0;j<list.length;j++){
//图片
try{
if(/<rss/.test(html)&&/<video>/.test(html)&&/<pic>/.test(html)){
var img=parseDomForHtml(list[j],"body&&pic&&Text");}
else if(/agefan|klysw|auete|ysftv|msdv/.test(spl)){
var img=parseDomForHtml(list[j], 'img&&src');}
else if(/bde4/.test(spl)){
var img=parseDomForHtml(list[j], 'img&&data-src');}
else if(/kunyu77/.test(spl)){
var img=list[j].videoCover;}
else if(/bowang/.test(spl)){
var img=list[j].vod_pic;}
else if(/paofanhuai/.test(spl)){
var img=list[j].cover;}
else if(/module-list/.test(html)&&/module-item/.test(html)){
var img=parseDomForHtml(list[j],".lazyloaded||.lazyload||.lazy&&data-src||data-original");}
else if(/vbox_t/.test(html)&&/vbox/.test(html)){
var img=parseDomForHtml(list[j],"a&&style");}
else if(/data-background/.test(list[j])&&/swiper-lazy/.test(list[j])){
var img=parseDomForHtml(list[j],"a&&data-background");}
else{
var img=parseDomForHtml(list[j], '.lazy||.lazyload||.lazyloaded||.mo-situ-pics||.myui-vodlist__thumb||.fed-list-pics||.img-responsive||.eclazy||.video-pic||.hl-lazy||.leo-lazy&&data-original||style||data-src');
}
if(img.substring(0,4)=='http'){img=img;}else{img=spl+img}
} catch(e) {}

//描述
if(!img&&/<rss/.test(html)&&/<video>/.test(html)){
var typ = parseDomForHtml(list[j],"body&&type&&Text");
var last = parseDomForHtml(list[j],"body&&last&&Text");
var dt = parseDomForHtml(list[j],"body&&dt&&Text");
var desc=last+' '+typ+' '+dt;}
else if(img&&/<rss/.test(html)&&/<video>/.test(html)){
var desc = parseDomForHtml(list[j],"body&&note&&Text");}
else if(/class="jidi"|class="hdinfo"/.test(list[j])){
var desc=parseDomForHtml(list[j], '.jidi||.hdinfo&&Text');}
else if(/leo-video-remark/.test(list[j])&&/leo-video-(\S*?)item/.test(list[i])){
var desc=parseDomForHtml(list[j], '.leo-video-remark&&Text');}
else if(/cqzyw/.test(spl)){
var typ=parseDomForHtml(list[j], '.type&&Text');
var tim=parseDomForHtml(list[j], '.time&&Text');
var desc=typ+' '+tim;}
else if(/leduosj/.test(spl)){
var desc='更新时间：'+parseDomForHtml(list[j], 'font,-1&&Text')+' '+parseDomForHtml(list[j], 'a,-1&&Text');}
else if(/bde4/.test(spl)){
var desc = parseDomForHtml(list[j],".ep||.rate||.meta&&Text");}
else if(/kunyu77/.test(spl)){
var desc=list[j].msg;}
else if(/bowang/.test(spl)){
var desc=list[j].vod_remarks;}
else if(/paofanhuai/.test(spl)){
var desc=list[j].video_remarks;}
else if(/module-item-text/.test(list[j])&&/module-item-caption/.test(list[j])){
var desc=parseDomForHtml(list[j], '.module-item-text&&Text');}
else{
var desc=parseDomForHtml(list[j], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.continu||.anime_icon1_name1||.v_note||.pack-prb||.note||.pic-tag-left||.hl-pic-text||.hdtag||.tag-mark||.other||.zhuangtai||.module-item-text||.module-item-caption||.list-remarks||span&&Text')}

//标题
if(!img&&/<rss/.test(html)&&/<video>/.test(html)){
var name = parseDomForHtml(list[j],"body&&name&&Text").split('<')[0];
var note = parseDomForHtml(list[j],"body&&note&&Text");
var title = name+"  状态:"+note;}
else if(img&&/<rss/.test(html)&&/<video>/.test(html)){
var title = parseDomForHtml(list[j],"body&&name&&Text").split('<')[0];}
else if(/subaibai|qianoo|gdwar|magedn|cqzyw/.test(spl)){
var title=parseDomForHtml(list[j], 'h3&&Text');}
else if(/leduosj/.test(spl)){
var title=parseDomForHtml(list[j], 'a&&Text');}
else if(/kunyu77/.test(spl)){
var title=list[j].title;}
else if(/bowang/.test(spl)){
var title=list[j].vod_name;}
else if(/paofanhuai/.test(spl)){
var title=list[j].video_name;}
else if(/bde4/.test(spl)){
var title=parseDomForHtml(list[j], '.content&&Text');}
else if(/mo-situ-name/.test(list[j])){
var title=parseDomForHtml(list[j], '.mo-situ-name&&Text');
}else if(/txtA/.test(list[j])){
var title=parseDomForHtml(list[j], '.txtA&&Text');
}else if(/txt-area/.test(list[j])){
var title=parseDomForHtml(list[j], '.txt-area&&a&&Text');
}else if(/fed-list-title/.test(list[j])){
var title=parseDomForHtml(list[j], '.fed-list-title&&Text');
}else if(/video-model-title/.test(list[j])){
var title=parseDomForHtml(list[j], '.video-model-title&&Text');
}else if(/ff-text-right|anime_icon1_name|zoomOverlay/.test(list[j])){
var title=parseDomForHtml(list[j], 'img&&alt');}
else{
var title=parseDomForHtml(list[j], 'a&&title')}

//链接
if(/<rss/.test(html)&&/<video>/.test(html)){
var urlid = parseDomForHtml(list[j],"body&&id&&Text");
var url=spl+'?ac=videolist&ids='+urlid;}
else if(/kunyu77/.test(spl)){
var url=spl+'/videoPlaylist?ids='+list[j].id+';get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/bowang/.test(spl)){
var url=spl+'/api.php/app/video_detail?id='+list[j].vod_id+'&token='+';get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/paofanhuai/.test(spl)){
var url=spl+'/video/info?JsonBody={"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","sysVer":"7.1.2","osType":"2","debug":"1","ver":"5.1.7","product":"1","video_id":"'+list[j].video_id+'"};post;utf-8;{User-Agent@okhttp/4.1.0}';}
else if(/nfmovies/.test(spl)){
var nfurl = parseDomForHtml(list[j],"a&&href");
var url=spl+nfurl+';get;utf-8;{User-Agent@Mozilla/5.0&&Cookie@.js:getVar("hikernfcookie")}';}
/*
else if(/moyuy/.test(spl)){
var mourl = parseDomForHtml(list[j],"a&&href");
var url=spl+mourl.replace('/vod/','/play/').replace('.html','-1-1.html');}
*/
else if(/ganfantv/.test(spl)){
var deturl = parseDomForHtml(list[j],"a&&href");
var url=spl+deturl.replace('/detail/','/play/').replace('.html','-1-1.html');}
else if(/90zyk/.test(spl)){
var zykurl = parseDomForHtml(list[j],"a&&href");
var url=spl+zykurl.replace('/detail/','/play/').replace('.html','/sid/1/nid/1.html');}
else if(/hdinfo/.test(list[j])){
var url=parseDomForHtml(list[j], 'h3&&a&&href');}
else{
var url=parseDomForHtml(list[j], 'a&&href')}

//首页无图的
if(!img){
d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
   desc:desc,
   col_type: 'text_center_1'
  });
}
//首页有图的
else{
d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
   pic_url:/nfmovies|imgdb/.test(img)?img+'@Referer=':img+'@Referer='+img,
   desc:desc,
   col_type: 'movie_3_marquee'
  });
}

 }//for j
}//for i
} catch(e) {}
res.data = d;setHomeResult(res);

}

//分类规则函数
function clsrule() {
var res = {};var d = [];
var html = getResCode();
//过宝塔检测
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}
//setError(html);
if(/<rss/.test(html)&&/<video>/.test(html)){
var spl=MY_URL.split("?")[0];
}else{
var spl = MY_URL.match(/([\S]*?:\/\/[\S]*?)\//)[1];}

//取分类片单列表
if(/<rss/.test(html)&&/<video>/.test(html)){
var list=parseDomForArray(html,"rss&&video");}
else if(/kunyu77/.test(MY_URL)){var list = JSON.parse(html).data.result;}
else if(/bowang/.test(MY_URL)){var list = JSON.parse(html).list;}
else if(/paofanhuai/.test(MY_URL)){var list = JSON.parse(html).data.list;}
else if(/subaibai|qianoo|gdwar|magedn/.test(MY_URL)){
var list=parseDomForArray(html,'.bt_img&&li');}
else if(/myui-vodlist/.test(html)&&/pic-tag|pic-text/.test(html)){
var list = parseDomForArray(html,".myui-vodlist&&li:has(a)");}
else if(/stui-vodlist/.test(html)&&/pic-text|pic-tag|<\/em>/.test(html)){
var list = parseDomForArray(html,".stui-vodlist&&li:has(a)");}
else if(/vodlist/.test(html)&&/pack-ykpack/.test(html)){
var list=parseDomForArray(html,'.vodlist&&.pack-ykpack');}
else if(/vodlist/.test(html)&&/vodlist_item/.test(html)){
var list = parseDomForArray(html,".vodlist&&li");}
else if(/mo-part-round/.test(html)&&/mo-situ-name/.test(html)){
var list=parseDomForArray(html,'body&&.mo-part-round:has(.mo-situ-name)&&.mo-cols-info');}
else if(/fed-list-info/.test(html)){
var list=parseDomForArray(html,'.fed-list-info&&li');}
else if(/list-unstyled/.test(html)){
var list=parseDomForArray(html,'.list-unstyled&&li');}
else if(/agefan/.test(MY_URL)){
var list=parseDomForArray(html,'body&&.cell');}
else if(/cards/.test(html)&&/card/.test(html)){
var list=parseDomForArray(html,'.cards&&.card');}
else if(/v_list/.test(html)&&/grid_box/.test(html)){
var list=parseDomForArray(html,'.v_list&&li:has(a)');}
else if(/leo-video-item/.test(html)){
var list=parseDomForArray(html,'body&&.leo-video-item');}
else if(/hy-video-list/.test(html)&&/col-sm-3/.test(html)){
var list=parseDomForArray(html,'.hy-video-list&&.col-sm-3');}
else if(/hl-vod-list/.test(html)&&/hl-list-item/.test(html)){
var list=parseDomForArray(html,'.hl-vod-list&&.hl-list-item');}
else if(/box-video-list/.test(html)&&/col-sm-3/.test(html)){
var list=parseDomForArray(html,'.box-video-list&&.col-sm-3');}
else if(/forum_card_fid/.test(html)&&/threadlist/.test(html)){var list=parseDomForArray(html,'body&&.threadlist&&li');}
else if(/index-area/.test(html)&&/link-hover/.test(html)){var list=parseDomForArray(html,'body&&.main&&li:has(.link-hover)');}
else if(/search-class-list-common/.test(html)&&/search-class-list-li/.test(html)){var list=parseDomForArray(html,'body&&.search-class-list-common&&li');}
else if(/module-list/.test(html)&&/module-item/.test(html)){var list=parseDomForArray(html,'body&&.module-item');}
else if(/menuBar/.test(html)&&/movie-item/.test(html)){var list=parseDomForArray(html,'body&&.movie-item');}
else if(/data_list/.test(html)&&/DianDian/.test(html)){var list=parseDomForArray(html,'body&&#data_list&&.DianDian');}
else if(/tbox_m/.test(html)&&/tbox_t/.test(html)){var list=parseDomForArray(html,'body&&.tbox_m&&li');}
else if(/vod_list/.test(html)&&/common-action/.test(html)){var list=parseDomForArray(html,'body&&#vod_list&&li');}
else if(/volistheightb/.test(html)&&/volistwidthb/.test(html)){var list=parseDomForArray(html,'body&&.volistwidthb');}
//setError(list.length);

for(var i=0;i<list.length;i++){
//图片
try{
if(/<rss/.test(html)&&/<video>/.test(html)&&/<pic>/.test(html)){
var img=parseDomForHtml(list[i],"body&&pic&&Text");}
else if(/agefan|klysw|bde4|auete|ysftv|msdv/.test(MY_URL)){
var img=parseDomForHtml(list[i], 'img&&src');}
else if(/kunyu77/.test(MY_URL)){var img = list[i].videoCover;}
else if(/bowang/.test(MY_URL)){var img = list[i].vod_pic;}
else if(/paofanhuai/.test(MY_URL)){var img = list[i].cover;}
else if(/module-list/.test(html)&&/module-item/.test(html)){
var img=parseDomForHtml(list[i],".lazyloaded||.lazyload||.lazy&&data-src||data-original");}
else if(/vbox/.test(list[i])&&/vbox_t/.test(list[i])){
var img=parseDomForHtml(list[i],"a&&style");}
else{var img=parseDom(list[i], '.lazy||.lazyload||.lazyloaded||.mo-situ-pics||.fed-list-pics||.img-responsive||.eclazy||.video-pic||.hl-lazy||.leo-lazy&&data-original||data-src');}
if(img.substring(0,4)=='http'){img=img;}else{img=spl+img}
} catch(e) {}

//描述
try{
if(img&&/<rss/.test(html)&&/<video>/.test(html)){
var desc = parseDomForHtml(list[i],"body&&note&&Text");}
else if(!img&&/<rss/.test(html)&&/<video>/.test(html)){
var typ = parseDomForHtml(list[i],"body&&type&&Text");
var last = parseDomForHtml(list[i],"body&&last&&Text");
var dt = parseDomForHtml(list[i],"body&&dt&&Text");
var desc=last+' '+typ+' '+dt;}
else if(/qianoo|subaibai|gdwar|magedn/.test(MY_URL)){
var desc=parseDomForHtml(list[i], '.jidi||.hdinfo&&Text');}
else if(/cokemv|klysw|msdv/.test(MY_URL)){
var desc=parseDomForHtml(list[i], '.pic-tag||.leo-video-remark&&Text');}
else if(/kunyu77/.test(MY_URL)){
var desc = list[i].msg;}
else if(/bowang/.test(MY_URL)){
var desc = list[i].vod_remarks;}
else if(/paofanhuai/.test(MY_URL)){var desc = list[i].flag;}
else if(/bde4/.test(MY_URL)){
var desc = parseDomForHtml(list[i],".ep||.rate||.meta&&Text");}
else if(/leduosj/.test(MY_URL)){
var desc='更新时间：'+parseDomForHtml(list[i], 'font,-1&&Text')+' '+parseDomForHtml(list[i], 'a,1&&Text');}
else if(/cqzyw/.test(MY_URL)){
var typ=parseDomForHtml(list[i], '.type&&Text');
var tim=parseDomForHtml(list[i], '.time&&Text');
var desc=typ+' '+tim;}
else if(/module-item-text/.test(list[i])&&/module-item-caption/.test(list[i])){
var desc=parseDomForHtml(list[i], '.module-item-text&&Text');}
else{
var desc=parseDomForHtml(list[i], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.continu||.newname||.v_note||.pack-prb||.note||.pic-tag-left||.hl-pic-text||.hdtag||.other||.zhuangtai||.module-item-text||.module-item-caption||.list-remarks||span&&Text');}
} catch(e) {}

//标题
if(img&&/<rss/.test(html)&&/<video>/.test(html)){
var title = parseDomForHtml(list[i],"body&&name&&Text").split('<')[0];}
else if(!img&&/<rss/.test(html)&&/<video>/.test(html)){
var name = parseDomForHtml(list[i],"body&&name&&Text").split('<')[0];
var note = parseDomForHtml(list[i],"body&&note&&Text");
var title = name+'  '+note;}
else if(/subaibai|qianoo|gdwar|magedn|cqzyw/.test(MY_URL)){
var title=parseDomForHtml(list[i], "h3&&Text");}
else if(/kunyu77/.test(MY_URL)){
var title = list[i].title;}
else if(/bowang/.test(MY_URL)){
var title = list[i].vod_name;}
else if(/paofanhuai/.test(MY_URL)){
var title = list[i].video_name;}
else if(/bde4/.test(MY_URL)){
var title=parseDomForHtml(list[i], '.content&&Text');}
else if(/leduosj/.test(MY_URL)){
var title=parseDomForHtml(list[i], 'a&&Text');}
else if(/mo-situ-name/.test(list[i])){
var title=parseDomForHtml(list[i], '.mo-situ-name&&Text');}
else if(/fed-list-title/.test(list[i])){
var title=parseDomForHtml(list[i], '.fed-list-title&&Text');}
else if(/ff-text-right|cell_imform|zoomOverlay/.test(list[i])){
var title=parseDomForHtml(list[i], 'img&&alt');}
else if(/video-model-title/.test(list[i])){
var title=parseDomForHtml(list[i], '.video-model-title&&Text');}
else if(/txtA/.test(list[i])){
var title=parseDomForHtml(list[i], '.txtA&&Text');}

else{
var title=parseDomForHtml(list[i], 'a&&title');
}

//链接
if(/<rss/.test(html)&&/<video>/.test(html)){
var urlid = parseDomForHtml(list[i],"body&&id&&Text");
var url=spl+'?ac=videolist&ids='+urlid;}
else if(/kunyu77/.test(MY_URL)){
var url='http://api.kunyu77.com/api.php/provide/videoPlaylist?ids='+list[i].id;}
else if(/bowang/.test(MY_URL)){
var url=spl+'/api.php/app/video_detail?id='+list[i].vod_id+'&token=';}
else if(/paofanhuai/.test(spl)){
var url=spl+'/video/info?JsonBody={"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","sysVer":"7.1.2","osType":"2","debug":"1","ver":"5.1.7","product":"1","video_id":"'+list[i].video_id+'"};post;utf-8;{User-Agent@okhttp/4.1.0}';}
/*
else if(/moyuy/.test(spl)){
var mourl = parseDomForHtml(list[i],"a&&href");
var url=spl+mourl.replace('/vod/','/play/').replace('.html','-1-1.html');}
*/
else if(/ganfantv/.test(spl)){
var deturl = parseDomForHtml(list[i],"a&&href");
var url=spl+deturl.replace('/detail/','/play/').replace('.html','-1-1.html');}
else if(/90zyk/.test(spl)){
var zykurl = parseDomForHtml(list[i],"a&&href");
var url=spl+zykurl.replace('/detail/','/play/').replace('.html','/sid/1/nid/1.html');}
else{ 
var url=parseDom(list[i], 'a&&href');}

//分类片单无图的
if(!img){
d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
   desc:desc,
   col_type: 'text_center_1'
});}
//分类片单有图的
else{
d.push({
   title:title,
   pic_url:/nfmovies|imgdb/.test(img)?img+'@Referer=':img+'@Referer='+img,
   desc:desc,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
   col_type:'movie_3_marquee'
});}

}
res.data = d;setHomeResult(res);

}

//搜索解析规则函数
function hiksearch() {
function urlph(){
//rss接口
if(/zhenbuka|o8tv|1090ys|bwl87|fantuan|juhaokan|ysftv|bddysf|4kan|flvweb|nkvod/.test(url)){url=url+'/index.php/rss/index.xml?wd='+spl[2];}
//suggest接口
else if(url.search(/jpysvip|ak1080|cokemv/)!=-1){url=url+'/index.php/ajax/suggest?mid=1&wd='+spl[2]+'&limit=50';}
else if(/zhaikan|80ysm|gudanys|moyuy|unss|aiyy|hxys|mjhd|renrenmi|xkvideo|vdxj|paofans/.test(url)){url=url+'/vodsearch/'+spl[2]+'----------fypage---.html';}
else if(/nfstar|nfxtv|nfxhd|lekkan|jhdyw|800novel/.test(url)){url=url+'/vodsearch/'+spl[2]+'----------fypage---/';}
//else if(/bddysf/.test(url)){url=url+'/vodsearch'+spl[2]+'/page/fypage.html';}
else if(/77diany/.test(url)){url=url+'/vodsearch/page/fypage/wd/'+spl[2]+'.html';}
else if(/aidi/.test(url)){url=url+'/vsearch/'+spl[2]+'----------fypage---.html';}
else if(/siguyy|ganfantv|5180s/.test(url)){url=url+'/search/'+spl[2]+'----------fypage---.html';}
else if(/7xiady/.test(url)){url=url+'/search/'+spl[2]+'----------fypage---/';}
else if(/dianyingim/.test(url)){url=url+'/search-'+spl[2]+'-----------fypage--/';}
//else if(/nkvod/.test(url)){url=url+'/nk123/'+spl[2]+'----------fypage---/';}
//else if(/1090ys/.test(url)){url=url+'/search/wd/'+spl[2]+'/page/fypage.html';}
else if(/bowang/.test(url)){url=url+'/api.php/app/search?pg=fypage&text='+spl[2]+'&token=';}
else if(/subaibai|qianoo|gdwar|magedn/.test(url)){url=url+'/page/fypage?s='+spl[2];}
else if(/46nb/.test(url)){url=url+'/s/'+spl[2]+'/fypage.html';}
else if(/bde4/.test(url)){url=url+'/search/'+spl[2]+'/fypage';}
else if(/tvyb02|vipmv/.test(url)){url=url+'/vod/search/page/fypage/wd/'+spl[2]+'.html';}
else if(/aik\.la/.test(url)){url=url+'/search/page/fypage/wd/'+spl[2]+'/';}
else if(/qkan8|cqzyw|klysw|yanetflix|dxys|syg520|4ytv|lengyue|haimianys|90zyk|cccu|msdv|newfii|7a11l|98hyk|lqiyi/.test(url)){url=url+'/index.php/vod/search/page/fypage/wd/'+spl[2]+'.html';}
else if(/tv.ci/.test(url)){url=url+'/sb/ke7nhZe3c1'+spl[2]+'-/page/2.html';}
else if(/saohuotv|nicemov|80dvd/.test(url)){url=url+'/search.php?page=fypage&searchword='+spl[2]+'&searchtype=';}
else if(/auete/.test(url)){url=url+'/search.php?searchword='+spl[2];}
else if(/nfmovies/.test(url)){url=url+'/search.php?page=fypage&searchword='+spl[2]+'&searchtype=';}
else if(/daishudy/.test(url)){url=url+'/search.php?page=fypage&searchword='+spl[2]+'&searchtype=';}
else if(/nicotv/.test(url)){url=url+'/vod-search-wd-'+spl[2]+'-p-fypage.html';}
else if(/kyikan/.test(url)){url=url+'/index.php?m=vod-search-pg-fypage-wd-'+spl[2]+'.html';}
else if(/agefans/.test(url)){url=url+'/search?query='+spl[2]+'&page=fypage';}
else if(/789pan|bbkdj|apibdzy|rrzyw|bajiecaiji|wfss100|4kyima/.test(url)){url=url+'?wd='+spl[2]+'&pg=fypage&ac=list';}
else if(/leduosj/.test(url)){url=url+'/index.php？？m=vod-search?wd='+spl[2]+';post;utf-8';}
else if(/kunyu77/.test(url)){url=url+'/searchVideo?searchName='+spl[2]+'&pg=fypage;get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/nangua/.test(url)){url=url+'/index.php?s=home-search-index-wd-'+spl[2]+'-sid-1-p-fypage;get;utf-8;{User-Agent@Mozilla/5.0&&Referer@http://www.nangua55.com/search/&&X-Requested-With@XMLHttpRequest}';}
else if(/paofanhuai/.test(url)){url=url+'/search/result?JsonBody={"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","page_num":"fypage","sysVer":"7.1.2","osType":"2","keyword":"'+spl[2]+'","page_size":"12","channel_id":"","debug":"1","ver":"5.1.7","product":"1"};post;utf-8;{User-Agent@okhttp/4.1.0}';}
else if(/kanju77/.test(url)){url=url+'/so/'+spl[2]+'----------fypage---.html';}
else if(/cocoman/.test(url)){url=url+'/search?searchString='+spl[2]+'&page=fypage';}
}

var res = {};var d = [];
var spl = MY_URL.split('$$$');
var ssxc = JSON.parse(fetch('hiker://files/rules/xyq/hikerset.json',{})).sscount;
var num=spl[3];
var le = num*ssxc;
//setError(le);
var json=JSON.parse(fetch(spl[1],{}));
//正文开始
var ssph=[];
var ssmd=JSON.parse(fetch('hiker://files/rules/xyq/hikerset.json',{})).ssmode;
for (var m = 0; m < json.data.length; m++) {
for (var i = 0; i < json.data[m].list.length; i++) {
var url=json.data[m].list[i].url;
var title=json.data[m].list[i].title;
//搜索链接拼合

if(ssmd==1){
//排除掉不需要聚合搜索的
if(!/cocoman/.test(url)){
urlph()
ssph.push({sslin:url.replace('fypage','1'),sstit:title});
 }
}
//处理非聚合搜索模式开始
else{
urlph()
//搜索结果直接进网页的
/*
if(/bwl87|cokemv/.test(url)){
var link=url+`@lazyRule=.js:input.replace('fypage','1')`;
}else if(/zhenbuka/.test(url)){
var link=url+';get;utf-8;{User-Agent@.js:MOBILE_UA&&Cookie@.js:fetch("hiker://files/rules/xyq/xqyscookie/zbkcookie.txt", {})}';
}else if(/fantuan/.test(url)){
var link=url+';get;utf-8;{User-Agent@.js:MOBILE_UA&&Cookie@.js:fetch("hiker://files/rules/xyq/xqyscookie/fantcookie.txt", {})}';
}else if(/1090ys/.test(url)){
var link=url+';get;utf-8;{User-Agent@.js:MOBILE_UA&&Cookie@.js:fetch("hiker://files/rules/xyq/xqyscookie/yljlcookie.txt", {})}';
}else if(/jpysvip/.test(url)){
var link=url+';get;utf-8;{User-Agent@.js:MOBILE_UA&&Cookie@.js:fetch("hiker://files/rules/xyq/xqyscookie/jpyscookie.txt", {})}';
}else 
*/
if(/nfmovies/.test(url)){
var link=url+';get;utf-8;{User-Agent@Mozilla/5.0&&Cookie@.js:getVar("hikernfcookie")}';
}else{
var link=url
}
d.push({
    title : title,
    url : $(link).rule(()=>{eval(fetch('hiker://files/rules/xyq/hikermovie.js'));hikseaerji();}),
    col_type: 'text_1'
})
}//处理非聚合搜索结束

}//for i
}
//////////////////////////////////////////////////////////////////
if(ssmd==1){
try{
var Data=[];
var Tit=[];
for(var j=le-ssxc;j<le;j++){
if(j<ssph.length){
var arrt = ssph[j].sstit;
var Url = ssph[j].sslin;
var tout = "3000";
if(/kunyu77/.test(Url)){
Data.push({url:Url.split(';')[0],options:{headers:{"User-Agent":'Dalvik/2.1.0'},timeout:tout}});
}else if(/nangua/.test(Url)){
Data.push({url:Url.split(';')[0],options:{headers:{"User-Agent":"Mozilla/5.0","Referer":"http://www.nangua55.com/search/","X-Requested-With":"XMLHttpRequest"},timeout:tout}});
}else if(/leduosj/.test(Url)){
Data.push({url:"http://www.leduosj.com/index.php?m=vod-search",options:{headers:{"User-Agent":MOBILE_UA},timeout:tout,body:Url.split('search?')[1].split(';post')[0],method:'POST'}});
}else if(/paofanhuai/.test(Url)){
var jbd=Url.split('JsonBody=')[1].split(';post')[0];
Data.push({url:Url.split('?Json')[0],options:{headers:{"User-Agent":"okhttp/4.1.0","Content-Type": "application/json"},timeout:tout,body:jbd,method:"POST"}});
}else if(/nfmovies/.test(Url)){
Data.push({url:Url,options:{headers:{"User-Agent":"Mozilla/5.0","Cookie":getVar("hikernfcookie")},timeout:tout}});
}
/*
else if(/1090ys/.test(Url)){
Data.push({url:Url,options:{headers:{"User-Agent":MOBILE_UA,"Cookie":fetch("hiker://files/rules/xyq/xqyscookie/yljlcookie.txt", {})}}});
}else if(/jpysvip/.test(Url)){
Data.push({url:Url,options:{headers:{"User-Agent":MOBILE_UA,"Cookie":fetch("hiker://files/rules/xyq/xqyscookie/jpyscookie.txt", {})}}});
}else if(/zhenbuka/.test(Url)){
Data.push({url:Url,options:{headers:{"User-Agent":MOBILE_UA,"Cookie":fetch("hiker://files/rules/xyq/xqyscookie/zbkcookie.txt", {})}}});
}else if(/fantuan/.test(Url)){
Data.push({url:Url,options:{headers:{"User-Agent":MOBILE_UA,"Cookie":fetch("hiker://files/rules/xyq/xqyscookie/fantcookie.txt", {})}}});
}*/
else{
Data.push({url:Url,options:{headers:{"User-Agent":MOBILE_UA},timeout:tout}});}
Tit.push({tit:arrt});
}//if
}//for j

var sear=$('').rule(()=>{eval(fetch('hiker://files/rules/xyq/hikermovie.js'));hikseaerji();});

//---代码分界线---- 
if(Data!=''){
var bhtml=batchFetch(Data);
//writeFile("hiker://files/rules/xyq/hikerError.json",JSON.stringify(bhtml));
//setError(bhtml);

for(var k=0;k<bhtml.length;k++){
if(/nangua55/.test(Data[k].url)){
var html=bhtml[k].replace(/\\/g,"");
}else{
var html=bhtml[k];}

if(html==""||html==null||html.substring(0,5)=='error'){
d.push({
   title:Tit[k].tit+' '+'未搜索到，点击访问原网页',
   url:Data[k].url+`@lazyRule=.js:input.split(';')[0]`,
   col_type: 'text_1'
});}
else if(/btwaf/.test(html)){
	/*
d.push({
   title:Tit[k].tit+' '+'有宝塔验证，点击访问原网页',
   url:Data[k].url+`@lazyRule=.js:input.split(';')[0]`,
   col_type: 'text_1'
});
*/
html=request(Data[k].url + '&btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});
}
else if(html.search(/请输入验证码|验证后查看搜索结果|访问此数据需要输入验/) != -1){

if(/1090ys/.test(Data[k].url)){
d.push({
   title:Tit[k].tit+' '+'需要输入验证码后才能搜索',
   url : Data[k].url+';get;utf-8;{User-Agent@.js:MOBILE_UA&&Cookie@.js:fetch("hiker://files/rules/xyq/xqyscookie/yljlcookie.txt", {})}'+sear,
   col_type: 'text_1'
});
}else if(/jpysvip/.test(Data[k].url)){
d.push({
   title:Tit[k].tit+' '+'需要输入验证码后才能搜索',
   url : Data[k].url+';get;utf-8;{User-Agent@.js:MOBILE_UA&&Cookie@.js:fetch("hiker://files/rules/xyq/xqyscookie/jpyscookie.txt", {})}'+sear,
   col_type: 'text_1'
});
}else if(/zhenbuka/.test(Data[k].url)){
d.push({
   title:Tit[k].tit+' '+'需要滑动验证后才能搜索',
   url : Data[k].url+';get;utf-8;{User-Agent@.js:MOBILE_UA&&Cookie@.js:fetch("hiker://files/rules/xyq/xqyscookie/zbkcookie.txt", {})}'+sear,
   col_type: 'text_1'
});
}else if(/fantuan/.test(Data[k].url)){
d.push({
   title:Tit[k].tit+' '+'需要滑动验证后才能搜索',
   url : Data[k].url+';get;utf-8;{User-Agent@.js:MOBILE_UA&&Cookie@.js:fetch("hiker://files/rules/xyq/xqyscookie/fantcookie.txt", {})}'+sear,
   col_type: 'text_1'
});
}else{

    //if(/bwl87|cokemv/.test(Data[k].url)){
d.push({
   title:Tit[k].tit+' '+'有搜索验证，点击进入原网页搜索',
   url:Data[k].url+`@lazyRule=.js:input.split(';')[0]`,
   col_type: 'text_1'
});
}

}else{
if(/<rss/.test(html)&&/<video>/.test(html)){
var spl = Data[k].url.split("?")[0];
}else{
var spl = Data[k].url.match(/([\S]*?:\/\/[\S]*?)\//)[1];}
//setError(spl);
eval(fetch('hiker://files/rules/xyq/hikermovie.js'));
ssjiex();
}
}//for k

}//if Data
}catch(e){}
}//结束聚合搜索

res.data = d;setSearchResult(res);
}

//搜索列表解析函数
function ssjiex() {
//取搜索结果列表
if(/<rss/.test(html)&&/<video>/.test(html)){var list=parseDomForArray(html,"rss&&video");}
else if(/<rss/.test(html)&&/<generator>/.test(html)){var list=parseDomForArray(html,"rss&&item");}
//suggest
else if(/jpysvip|ak1080|cokemv/.test(spl)){var list = JSON.parse(html).list;}
else if(/kunyu77/.test(spl)){var list = JSON.parse(html).data;}
else if(/bowang/.test(spl)){var list = JSON.parse(html).list;}
else if(/paofanhuai/.test(spl)){var list = JSON.parse(html).data.list;}
else if(/agefans|klysw|msdv/.test(spl)){var list = parseDomForArray(html,'body&&.cell||.leo-detail-wrap');}
else if(/search_list/.test(html)){var list = parseDomForArray(html,'.search_list&&li');}
else if(/list-unstyled/.test(html)&&/justify-content-between/.test(html)){var list = parseDomForArray(html,'body&&.list-unstyled');}
else if(/globalMarginTop/.test(html)&&/globalPicList/.test(html)){var list = parseDomForArray(html,'#data_list&&li');}
else if(/list-unstyled/.test(html)){var list = parseDomForArray(html,'.list-unstyled&&li');}
else if(/pack-packcover/.test(html)){var list = parseDomForArray(html,'body&&.search-list');}
else if(/hl-list-item|hy-main-content/.test(html)){var list = parseDomForArray(html,'body&&.hl-list-item||.hy-video-details');}
else if(/search-list/.test(html)&&/card/.test(html)){var list = parseDomForArray(html,'.search-list&&.card');}
else if(/searchList/.test(html)){var list = parseDomForArray(html,'#searchList&&li');}
else if(/searchlilst/.test(html)){var list = parseDomForArray(html,'.searchlilst&&li');}
else if(/stui-vodlist__media/.test(html)){var list = parseDomForArray(html,'.stui-vodlist__media&&li');}
else if(/stui-vodlist/.test(html)){var list = parseDomForArray(html,'.stui-vodlist&&li:has(a)');}
else if(/vodlist/.test(html)&&/searchlist_item/.test(html)){var list = parseDomForArray(html,'.vodlist&&li');}
else if(/v_list/.test(html)&&/grid_box/.test(html)){var list = parseDomForArray(html,'.v_list&&li');}
else if(/mo-main-info/.test(html)){var list = parseDomForArray(html,'.mo-main-info&&.mo-deta-info:has(a)');}
else if(/fed-main-info/.test(html)){var list = parseDomForArray(html,'.fed-main-info&&.fed-deta-info');}
else if(/long-list/.test(html)&&/long-result/.test(html)){var list = parseDomForArray(html,'.long-result&&li');}
else if(/index-area/.test(html)&&/link-hover/.test(html)&&/sy-nav-down|sj-nav-down/.test(html)){var list=parseDomForArray(html,'body&&.main&&li:has(.link-hover)');}
else if(/box-main-content/.test(html)&&/col-sm-4/.test(html)){var list=parseDomForArray(html,'.box-main-content&&.col-sm-4');}
else if(/module-list/.test(html)&&/module-search-item/.test(html)){var list=parseDomForArray(html,'body&&.module-search-item');}
else if(/data_list/.test(html)&&/DianDian/.test(html)){var list=parseDomForArray(html,'body&&#data_list&&.DianDian');}
else if(/tbox_m/.test(html)&&/tbox_t/.test(html)){var list=parseDomForArray(html,'body&&.tbox_m&&li');}
else if(/common-action/.test(html)&&/vod_list/.test(html)){var list=parseDomForArray(html,'body&&#vod_list&&li');}

//setError(list);
try{ 
    var tkt=Tit[k].tit;
    var dku=Data[k].url;
}catch(e){
    var tkt='';
	var dku=MY_URL;
}

if(list){
  if(list.length<1){    	
    d.push({
       title:tkt+' '+'未搜索到，点击访问原网页',
       url:dku+`@lazyRule=.js:input.split(';')[0]`,
       col_type: 'text_1'
    });   
}else{
for (var i = 0; i < list.length; i++) {
//标题
try{
if(/<rss/.test(html)&&/<video>/.test(html)){
var name = parseDomForHtml(list[i],"body&&name&&Text").split('<')[0];
var note = parseDomForHtml(list[i],"body&&note&&Text");
var title = name+'  '+note;}
else if(/<rss/.test(html)&&/<generator>/.test(html)){
var title = list[i].match(/\<title\>(.*?)\<\/title\>/)[1];
//var note = parseDomForHtml(list[i],"body&&pubdate&&Text");
}
//suggest
else if(/jpysvip|ak1080|cokemv/.test(spl)){var title = list[i].name;}
else if(/img/.test(list[i])&&/alt/.test(list[i])&&!/<!-- <img/.test(list[i])){var title = parseDomForHtml(list[i], 'img&&alt');}
else if(/bde4/.test(spl)){var title = parseDomForHtml(list[i], '.header&&title');}
else if(/kunyu77/.test(spl)){var title = list[i].videoName;}
else if(/bowang/.test(spl)){var title = list[i].vod_name;}
else if(/paofanhuai/.test(spl)){var title = list[i].video_name;}
else if(/leduosj/.test(spl)){var title=parseDomForHtml(list[i], 'a&&Text');}
else if(/h1|h2|h3|h4/.test(list[i])){var title = parseDomForHtml(list[i], 'h1||h2||h3||h4&&a&&Text');}
else if(/title/.test(list[i])){var title = parseDomForHtml(list[i], 'a&&title');}
else{var title = parseDomForHtml(list[i], 'a&&Text');}
}catch(e){}

//图片
try{
if(/agefans|klysw|bde4|ysftv|msdv|4kan/.test(spl)){var img = parseDomForHtml(list[i], 'img&&src');}
//suggest
else if(/jpysvip|ak1080|cokemv/.test(spl)){var img = list[i].pic;}
else if(/kunyu77/.test(spl)){var img = list[i].videoCover;}
else if(/bowang/.test(spl)){var img = list[i].vod_pic;}
else if(/paofanhuai/.test(spl)){var img = list[i].cover;}
else if(/module-list/.test(html)&&/module-search-item/.test(html)){
var img=parseDomForHtml(list[i],".lazyload||.lazyloaded||.lazy&&data-src||data-original");}
else if(/background-position/.test(list[i])){
var img=list[i].match(/url\((.*?)\)/)[1];}
else if(/vbox/.test(list[i])&&/vbox_t/.test(list[i])){
var img=parseDomForHtml(list[i],"a&&style");}
else{
var img = parseDom(list[i], '.lazyload||.lazyloaded||.lazy||.mo-situ-pics||.fed-list-pics||.img-responsive||.eclazy||.video-pic||.videopic||.hl-lazy||.leo-lazy&&data-original||data-src||style');}
if(img.substring(0,4)=='http'){img=img;}else{img=spl+img}
} catch(e) {}

//状态
try{
var desc='';
if(/<rss/.test(html)&&/<generator>/.test(html)){
var desc = parseDomForHtml(list[i], 'description&&Text');}
else if(/cqzyw/.test(spl)){
var desc=parseDomForHtml(list[i], 'em&&Text');}
else if(/kunyu77/.test(spl)){
var desc = list[i].msg;}
else if(/bowang/.test(spl)){
var desc = list[i].vod_remarks;}
else if(/paofanhuai/.test(spl)){
var pfscore = list[i].score;
var pfflag = list[i].flag;
var desc = '评分:'+pfscore+'  状态:'+pfflag;}
else if(/vbox/.test(list[i])&&/vbox_t/.test(list[i])){
var desc=parseDomForHtml(list[i], 'span&&Text');
}
else{
var desc = parseDomForHtml(list[i], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.jidi||.hdinfo||.continu||.newname||.meta||.v_note||.note||.pack-prb||.hl-pic-text||.pic-tag||.other||.score||.video-serial||.list-remarks&&Text');}
} catch(e) {}
//log(desc);
//简介
try{
if(/<rss/.test(html)&&/<video>/.test(html)){
var typ = parseDomForHtml(list[i],'body&&type&&Text');
var dt = parseDomForHtml(list[i],'body&&dt&&Text');
var cont=typ+' · '+dt;}
else if(/<rss/.test(html)&&/<generator>/.test(html)){
var cont = parseDomForHtml(list[i], 'pubdate&&Text');}
else if(/aidi/.test(spl)){
var cont = parseDomForHtml(list[i], 'p,-1&&Text');}
else if(/cqzyw/.test(spl)){
var typ=parseDomForHtml(list[i], '.type&&Text');
var tim=parseDomForHtml(list[i], '.time&&Text');
var cont=typ+' '+tim;}
else if(/kunyu77/.test(spl)){
var cont = list[i].briefContext;}
else if(/paofanhuai/.test(spl)){var cont = list[i].intro;}
else if(/leduosj/.test(spl)){
var cont='更新时间：'+parseDomForHtml(list[i], 'font,-1&&Text');}
else{
var cont = parseDomForHtml(list[i], '.detail||dd||.fed-deta-content||.cell_imform_kv_desc||.leo-detail-media||.description||.ecitem-desc||.hl-item-content||.hy-video-details||.list-detail||.actor||.video-info-main||.stui-vodlist__detail&&Text');}
} catch(e) {}
//log(cont);
//链接
if(/<rss/.test(html)&&/<video>/.test(html)){
var urlid = parseDomForHtml(list[i],"body&&id&&Text");
var url=spl+'?ac=videolist&ids='+urlid;}
if(/<rss/.test(html)&&/<generator>/.test(html)){
var url = list[i].match(/\<link\>(.*?)\n/)[1];}
//suggest
else if(/jpysvip|ak1080|cokemv/.test(spl)){var url = spl+'/voddetail/'+list[i].id+'.html';}
else if(/kunyu77/.test(spl)){
var url='http://api.kunyu77.com/api.php/provide/videoPlaylist?ids='+list[i].id+';get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/bowang/.test(spl)){
var url=spl+'/api.php/app/video_detail?id='+list[i].vod_id+'&token='+';get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/paofanhuai/.test(spl)){
var url=spl+'/video/info?JsonBody={"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","sysVer":"7.1.2","osType":"2","debug":"1","ver":"5.1.7","product":"1","video_id":"'+list[i].video_id+'"};post;utf-8;{User-Agent@okhttp/4.1.0}';}
else if(/nfmovies/.test(spl)){
var nfurl = parseDomForHtml(list[i],"a&&href");
var url=spl+nfurl+';get;utf-8;{User-Agent@Mozilla/5.0&&Cookie@.js:getVar("hikernfcookie")}';}
/*
else if(/moyuy/.test(spl)){
var mourl = parseDomForHtml(list[i],"a&&href");
var url=spl+mourl.replace('/vod/','/play/').replace('.html','-1-1.html');}
*/
else if(/ganfantv/.test(spl)){
var deturl = parseDomForHtml(list[i],"a&&href");
var url=spl+deturl.replace('/detail/','/play/').replace('.html','-1-1.html');}
else if(/90zyk/.test(spl)){
var zykurl = parseDomForHtml(list[i],"a&&href");
var url=spl+zykurl.replace('/detail/','/play/').replace('.html','/sid/1/nid/1.html');}
else if(/msdv/.test(spl)){
var url = parseDomForHtml(list[i],".leo-mt-15&&a&&href");}
else{       
var url = parseDomForHtml(list[i], 'a&&href');}
//无图的显示

if(!img){
if(ssmd==0){
d.push({
   title:'““'+title+'””',
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
   desc:cont,
   col_type: 'text_1'
     });
}
else{
d.push({
   title:title,
   url:$((url.substring(0,4)=='http'?url:spl+url)).rule(()=>{eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();}),
   desc:cont+' '+tkt,
   col_type: 'text_center_1'
      });
   }
}
//有图的显示
else{
   if(ssmd==0){
        d.push({
            title: '““'+title+'””'+'\n'+desc,
            pic_url:/nfmovies|imgdb/.test(img)?img+'@Referer=':img+'@Referer='+img,
            url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
            desc: cont,
            col_type: 'movie_1_vertical_pic'
        });
     }
    else{
     d.push({
     title: title+' '+desc,
     pic_url:/nfmovies|imgdb/.test(img)?img+'@Referer=':img+'@Referer='+img,
     url:$((url.substring(0,4)=='http'?url:spl+url)).rule(()=>{eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();}),
     desc: ' '+tkt,
     content:cont,
     col_type: 'movie_1_vertical_pic'
        });
      }      
    }   
              
  }
}//for i
  
}//if(list)
else{
    d.push({
       title:tkt+' '+'未搜索到，点击访问原网页',
       url:dku+`@lazyRule=.js:input.split(';')[0]`,
       col_type: 'text_1'
    });   
 }
}

//搜索二级解析函数
function hikseaerji() {
var res={};var d=[];

if(/nangua55/.test(MY_URL)){
var html=getResCode().replace(/\\/g,"");
}else{
var html=getResCode();}

var json=JSON.parse(fetch('hiker://files/rules/xyq/hikermovie.json',{}));
var ssmd=JSON.parse(fetch('hiker://files/rules/xyq/hikerset.json',{})).ssmode;
//过宝塔检测
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}
//setError(html);

if(/<rss/.test(html)&&/<video>/.test(html)){
var spl=MY_URL.split("?")[0];
}else{
var spl = MY_URL.match(/([\S]*?:\/\/[\S]*?)\//)[1];
}

//处理搜索验证
if(html.search(/请输入验证码|验证后查看搜索结果|访问此数据需要输入验/) != -1){
 //滑块验证x5处理
if (spl.search(/zhenbuka/) != -1) {
    d.push({
        title: '',
        desc: 'auto',
        url: 'https://www.zhenbuka3.com/vodsearch/xqyszbkcookie----------1---/',
        col_type: 'x5_webview_single'
    });
} else if (spl.search(/fantuan/) != -1) {
    d.push({
        title: '',
        desc: 'auto',
        url: 'https://fantuan.tv/vodsearch/page/fypage/wd/xqysfantcookie.html',
        col_type: 'x5_webview_single'
    });
}
//验证码输入处理
else if(spl.search(/1090ys|jpysvip/) != -1){
    if (spl.search(/1090ys/) != -1) {
        var imglin=spl + '/verify/index.html?' + Math.random();
    }else if(spl.search(/jpysvip/)!=-1){
        var imglin=spl + '/index.php/verify/index.html?r=' + Math.random();
    }
   //取cookie
    var cok = JSON.parse(fetchCookie(imglin, {
            headers: {
                        'User-Agent': MOBILE_UA
                    },
            method: 'GET',
            withHeaders: true
        })).join(';');
    
//显示验证码
    //var img = spl + '/index.php/verify/index.html?' + Math.random() + '@User-Agent=' + MOBILE_UA + '@Cookie=' + cok;
    d.push({
        pic_url: imglin+'@User-Agent=' + MOBILE_UA + '@Cookie=' + cok,
        url:$('').lazyRule(()=>{return refreshPage();}),
        col_type: 'pic_1'
    });
//输入框
    d.push({
        title: '',
        url: "'toast://你输入的是' + input",
        extra: {
            onChange: "putVar('香情验证码',input)",
            titleVisible: false
        },
        col_type: 'input'
    });
//发送验证
    d.push({
        title: '发送',
        url: $(MY_URL).lazyRule((cok, spl) => {
            var cod = getVar('香情验证码');
            //发送验证请求
            if (spl.search(/1090ys/) != -1) {
                var html = fetch(input, {
                    headers: {
                        'User-Agent': MOBILE_UA,
                        'Cookie': cok
                    },
                    body: 'vod_search_verify_code=' + cod,
                    method: 'POST'
                });
            }else if(spl.search(/jpysvip/)!=-1){
                var html = JSON.parse(fetch('https://www.jpysvip.net/index.php/ajax/verify_check?type=search&verify='+cod, {
                    headers: {
                        'X-Requested-With':'XMLHttpRequest',
                        'User-Agent': MOBILE_UA,
                        'Cookie': cok
                    },
                    body: '',
                    method: 'POST'
                }));
            }
            //对验证进行判断
            if (spl.search(/1090ys/) != -1) {
                if (html.indexOf('输入验证码后查看搜索结果') > 0) {
                    return "toast://验证失败。"
                } else {
                    writeFile('hiker://files/rules/xyq/xqyscookie/yljlcookie.txt', cok);
                    refreshPage();
                    return "toast://验证成功。"
                }
            }else if(spl.search(/jpysvip/)!=-1){
                if (html.code == 1) {
                writeFile('hiker://files/rules/xyq/xqyscookie/jpyscookie.txt', cok);
                refreshPage();
                return "toast://验证成功。"
            } else {
                return "toast://验证失败！"
            }
            }//验证if结束
        }, cok, spl),
        col_type: 'text_2'
    });
 }
//对验证处理结束
}else if (html.indexOf('不要频繁操作') >= 0) {
    d.push({
        title: '太过频繁等待6秒',
        col_type: 'text_center_1'
    })

}else{
//取搜索结果列表
eval(fetch('hiker://files/rules/xyq/hikermovie.js'));
ssjiex();
 }
res.data = d;setHomeResult(res);
}

//选集列表规则函数
function omerj() {
var res ={};var d=[];
//声明x5框架
d.push({
	title: '',
    desc:'255&&float',
    url:'',
	col_type: 'x5_webview_single'
});
refreshX5WebView('');

if(/nangua55/.test(MY_URL)){
var html=getResCode().replace(/\\/g,"");
}else{
var html=getResCode();}

if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}
//取网址
if(/<rss/.test(html)&&/<video>/.test(html)){
var omdomin=MY_URL.split("?")[0];
}else{
var omdomin = MY_URL.match(/([\S]*?:\/\/[\S]*?)\//)[1];}

//setError(html);
//线路统计
if(/<rss/.test(html)&&/<video>/.test(html)){
var tabs = parseDomForArray(html,'rss&&dl&&dd');
var conts = parseDomForArray(html,'rss&&dl&&dd');}
else if(/kunyu77/.test(omdomin)){
var tabs = JSON.parse(html).data.episodes;
var conts=tabs;}
else if(/bowang/.test(omdomin)){
var tabs = JSON.parse(html).data.vod_url_with_player;
var conts=tabs;}
else if(/paofanhuai/.test(omdomin)){
var tabs = JSON.parse(html).data.info.source;
var conts=[{}];}
else if(/cqzyw/.test(omdomin)){
var tabs = parseDomForArray(html,"body&&#playlist");}
else if(/agefan/.test(omdomin)){
var tabs = parseDomForArray(html, '.menu0&&li');
var conts=parseDomForArray(html,'body&&.movurl:has(a)');}
else if(/saohuotv/.test(omdomin)){
var tabs = parseDomForArray(html, 'body&&.from_list&&li');
var conts = parseDomForArray(html, 'body&&#play_link&&li');}
//mac_url
else if(/kyikan|ysftv/.test(omdomin)){
var ahref=parseDom(html,'body&&.videourl||.lhmain&&a&&href');
var mhtml=request(ahref,{});
var jsurl = parseDom(mhtml,'.player||#player&&script&&Html').replace('base64decode','base64Decode');
eval(jsurl);
var tabs = mac_from.split("$$$");
var conts = mac_url.split("$$$");
}

else if(/hy-play-list/.test(html)&&/tab-content/.test(html)){
var tabs = parseDomForArray(html, '.tab-content&&.option');
var conts = parseDomForArray(html, '.tab-content&&.playlist');}
else if(/hl-plays-list/.test(html)&&/hl-plays-from/.test(html)){
var tabs = parseDomForArray(html, '.hl-plays-from&&a');
var conts = parseDomForArray(html, '.hl-play-source&&.hl-plays-list');}
else if(/nav-tabs/.test(html)&&/#playlist/.test(html)){
var tabs = parseDomForArray(html,".nav-tabs&&li");}
else if(/nav-tabs/.test(html)&&/#player/.test(html)){
var tabs = parseDomForArray(html,".nav-tabs&&.item&&li");}
else if(/nav-tabs/.test(html)&&/player-sidebar/.test(html)){
var tabs = parseDomForArray(html,".nav-tabs&&.item&&li");}
else if(/nav-tabs/.test(html)&&/ff-playurl-tab/.test(html)){
var tabs = parseDomForArray(html,".nav-tabs&&li");}
else if(/nav-tabs/.test(html)&&/#con_playlist/.test(html)){
var tabs = parseDomForArray(html,"body&&.nav-tabs&&.gico");}
else if(/stui-content__detail/.test(html)&&/stui-content__playlist/.test(html)){
if(/fa-youtube-play/.test(html)){
var tabs = parseDomForArray(html,"body&&.stui-pannel__head");}
else if(/s-playsite/.test(html)){
var tabs = parseDomForArray(html,"body&&.js-list&&li");}
else if(/stui-vodlist__head/.test(html)){
var tabs = parseDomForArray(html,"body&&.stui-vodlist__head");}
else{
var tabs = parseDomForArray(html,"body&&.playlist");}
}
else if(/stui-player__video/.test(html)&&/stui-play__list/.test(html)){
var tabs = parseDomForArray(html,".play-tab&&li");}
else if(/myui-panel__head/.test(html)&&/sort-button/.test(html)){
var tabs = parseDomForArray(html,"body&&.myui-panel_hd:has(.sort-button)");}
else if(html.indexOf('mo-sort-head')!=-1){
var tabs = parseDomForArray(html,'body&&.mo-sort-head&&.mo-movs-btns');
var conts=parseDomForArray(html,'body&&.mo-main-info&&.mo-movs-item');}
else if(html.indexOf('play_source_tab')!=-1){
var tabs = parseDomForArray(html,'.play_source_tab&&a');}
else if(/fed-tabs-item/.test(html)){
var tabs = parseDomForArray(html, '.fed-tabs-item&&.fed-btns-info');}
else if(/leo-source-cho/.test(html)){
var tabs = parseDomForArray(html, 'body&&.leo-source-cho&&li');}
else if(/player_list/.test(html)&&/justify-content-center/.test(html)){
var tabs = parseDomForArray(html, 'body&&#player_list&&h2');
var conts=parseDomForArray(html,'#player_list&&ul');}
else if(/tagContent/.test(html)&&/js-list/.test(html)){
var tabs = parseDomForArray(html,"body&&.js-list&&li");
var conts = parseDomForArray(html, 'body&&#tagContent&&ul');}
else if(/playNumTab/.test(html)&&/tabContainer/.test(html)){
var tabs = parseDomForArray(html,'body&&#playNumTab&&a');}
else if(/playfrom/.test(html)&&/videourl/.test(html)){
var tabs = parseDomForArray(html,"body&&.playfrom&&li");
var conts = parseDomForArray(html, 'body&&.videourl');}

//setError(tabs);
//列表统计
if(/subaibai|qianoo|gdwar|magedn/.test(omdomin)){
var conts=parseDomForArray(html,'body&&.paly_list_btn');}
else if(/bde4/.test(omdomin)){
var conts = parseDomForArray(html, 'body&&.movie-info');}
else if(/tab-content/.test(html)&&/list-unstyled/.test(html)){
var conts = parseDomForArray(html, 'body&&.tab-content&&ul');}
else if(/tab-content/.test(html)&&/stui-content__playlist/.test(html)){
var conts = parseDomForArray(html, 'body&&.stui-content__playlist');}
else if(/stui-content__detail/.test(html)&&/stui-content__playlist/.test(html)){
var conts = parseDomForArray(html, 'body&&.stui-content__playlist');}
else if(/stui-player__video/.test(html)&&/stui-play__list/.test(html)){
var conts = parseDomForArray(html,"body&&.stui-play__list");}
else if(/tab-content/.test(html)&&/myui-content__list/.test(html)){
var conts = parseDomForArray(html, 'body&&.myui-content__list');}
else if(/tabContainer/.test(html)&&/playNumList/.test(html)){
if(/urlsTab/.test(html)){
var conts = parseDomForArray(parseDomForHtml(html,'body&&#tabContainer&&Html'),'body&&.tabContainer');}
else{
var conts = parseDomForArray(html,'#tabContainer&&.playNumList')}
;}
else if(/playlist_full/.test(html)&&/content_playlist/.test(html)){
var conts=parseDomForArray(html,'body&&.playlist_full:has(.content_playlist)');}
else if(/play_list_box/.test(html)&&/content_playlist/.test(html)){
var conts=parseDomForArray(html,'body&&.playlist_notfull:has(.content_playlist)');}
else if(/tab-play/.test(html)&&/content_playlist/.test(html)){
var tabs = parseDomForArray(html,'body&&#bofy&&h2');
var conts=parseDomForArray(html,'body&&.content_playlist');}
else if(/details-info/.test(html)&&/con_playlist/.test(html)){
var conts=parseDomForArray(html,'.playlist&&ul');}
else if(/fed-play-item|leo-play-num/.test(html)){
var conts = parseDomForArray(html, 'body&&.fed-play-item||.leo-play-num');}
else if(/contentURL/.test(html)&&/movievod/.test(html)){
var conts = parseDomForArray(html, 'body&&.contentURL&&ul');}
else if(/module-tab-item/.test(html)&&/scroll-content/.test(html)){
var tabs = parseDomForArray(html,'body&&.module-tab-item');
var conts = parseDomForArray(html,'body&&.scroll-content:not(:has(.tag-link))');}
else if(/tabs_block/.test(html)&&/list_block/.test(html)){
var tabs = parseDomForArray(html,'body&&.tabs');
var conts = parseDomForArray(html,'body&&.list_block');}
else if(/albumSelect/.test(html)&&/mod-head-title/.test(html)){
var tabs = parseDomForArray(html,'body&&section:has(.albumSelect)');
var conts = parseDomForArray(html,'body&&.albumSelect');}
else if(/playListBox/.test(html)&&/play-list/.test(html)){
var tabs = parseDomForArray(html,'body&&#playListBox&&.play-list');
var conts = parseDomForArray(html,'body&&#playListBox&&.play-list');}


//setError(conts);
//-----华丽的分割线-----
if(conts||tabs){
for(var i = 0;i<conts.length;i++){
//取各列表
if(/<rss/.test(html)&&/<video>/.test(html)){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");}
else if(/kunyu77/.test(omdomin)){
var list=conts[i].playurls;}
else if(/bowang/.test(omdomin)){
var list=conts[i].url.split("#");}
else if(/paofanhuai/.test(omdomin)){
var list=JSON.parse(html).data.info.videos;}
else if(/kyikan|ysftv/.test(omdomin)){
var list=conts[i].split('#');}
else if(/bde4/.test(omdomin)){
var list=parseDomForArray(conts[i],'body&&.secondary');}
else if(/contentURL/.test(html)&&/movievod/.test(html)){
var list=conts[i].match(/name=\"copy_sel[\s\S]*?<span>/g);}
else if(/fed-btns-info/.test(conts[i])){
var list=parseDomForArray(conts[i],'body&&.fed-btns-info');}
else if(/<li>/.test(conts[i])){
var list=parseDomForArray(conts[i],'body&&li');}
else{
var list=parseDomForArray(conts[i],'body&&a:not(a:contains(展开全部))');
}

if (getVar('hikermsort','1')=='1') {
list=list;
  }else{
list=list.reverse();
  }
  
 //需要显示线路名的
if(tabs){
 if(/<rss/.test(html)&&/<video>/.test(html)){
  	var tabt=parseDomForHtml(tabs[i], "body&&dd&&flag");}
 else if(/<\/h3>/.test(tabs[i])){
  	var tabt=parseDomForHtml(tabs[i], "h3&&Text");}
 else if(/albumSelect|stui-vodlist__head/.test(tabs[i])){
  	var tabt=parseDomForHtml(tabs[i], "span&&Text");}
 else if(/pull-left/.test(tabs[i])){
  	var tabt=parseDomForHtml(tabs[i], ".pull-left&&Text");}
 else if(/aidi/.test(omdomin)){
  	var tabt=parseDomForHtml(tabs[i], "a&&alt");}
 else if(/kunyu77/.test(omdomin)){
  	var tabt=tabs[i].episode+'';}
   else if(/bowang/.test(omdomin)){
  	var tabt=tabs[i].code+'';}
  else if(/paofanhuai/.test(omdomin)){
  	var tabt=tabs[i].name+'';}
  else if(/kyikan|ysftv/.test(omdomin)){
  	var tabt=tabs[i];}
else{
  	var tabt=parseDomForHtml(tabs[i], "body&&Text");}
  
//显示线路
		d.push({
			title:tabt+"    🔗"+[i+1]+'/'+conts.length+"““点击切换选集排序””",
			url:"hiker://empty@lazyRule=.js:putVar('hikermsort', getVar('hikermsort','1')=='1'?'0':'1');refreshPage(false);'toast://切换成功！'",
			col_type: 'text_1'
		});}
else if(conts){
		d.push({
			title:'在线播放'+"    🔗"+[i+1]+'/'+conts.length+"““点击切换选集排序””",
			url:"hiker://empty@lazyRule=.js:putVar('hikermsort', getVar('hikermsort','1')=='1'?'0':'1');refreshPage(false);'toast://切换成功！'",
			col_type: 'text_1'
		});}
		
//选集
var link={};
for(var j = 0; j<list.length; j++){
//选集标题与链接
if(/<rss/.test(html)&&/<video>/.test(html)){
if(list[j].split('$')[1]!=null){link=list[j].split('$')[1].replace(/\n*/g,'').replace(/amp;/g,"").replace(/^\s*/,"");}
else{link=list[j].split('$')[0].replace(/\n*/g,'').replace(/amp;/g,"").replace(/^\s*/,"");}
if(tabt=='789pan'){link='http://jm.719ns.com:16789/ffjxy/?url='+link}
if(/languang/.test(tabt)){link='https://j.languang.wfss100.com/?url='+link}
if(/bbkdj/.test(omdomin)){link='http://jx.yparse.com/index.php?url='+link}
//if(/rrm3u8/.test(omdomin)){link='https://www.meiju11.com/ckplayerx/m3u8.php?url='+link}

var title=(list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0]);}

else if(/kunyu77/.test(omdomin)){
var title=tabs[i].episode+'-'+list[j].playfrom;
var link=list[j].playurl;}
else if(/bowang/.test(omdomin)){
var title=list[j].split("$")[0];
var jiek=conts[i].parse_api;
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
}

var link=jiek+list[j].split("$")[1];
if(/\.m3u8|\.mp4|obj\/tos/.test(link)&&/http/.test(link)){
link=list[j].split("$")[1];}
}
else if(/paofanhuai/.test(omdomin)){
var title=list[j].title;
var cid=list[j].chapter_id;
var vid=list[j].video_id;
var sid=tabs[i].source_id;
var link='{"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","chapter_id":"'+cid+'","appId":"1","sysVer":"7.1.2","osType":"2","source_id":"'+sid+'","debug":"1","ver":"5.1.7","video_id":"'+vid+'","product":"1"}';}
else if(/leduosj/.test(omdomin)){
var title=list[j].split('$')[0].split('value="')[1];
var link=list[j].split('$')[1].split('"')[0];}
else if(/kyikan|ysftv/.test(omdomin)){
var title=list[j].split('$')[0];
var link='hiker://empty#'+tabt+'#'+list[j].split('$')[1];}
else if(/cqzyw/.test(omdomin)){
var title=list[j].split('copy_text\">')[1].split('<')[0];
var link=list[j].split('$')[1].split('<')[0].replace('amp;','');}
else if(/lengyue/.test(omdomin)){
var title=parseDomForHtml(list[j], "a&&Text");
var link=omdomin+parseDomForHtml(list[j],"a&&href").replace('/play/','/player/');}
else{
var title=parseDomForHtml(list[j], "a&&Text");
var link=parseDom(list[j], "a&&href");}

//setError(MY_URL);
//显示选集
if(list.length<=4){var clt='text_2';}else{var clt=isNaN(title)?'flex_button':'text_5'}
			d.push({
				title:title,
                url:'hiker://empty$$$'+omdomin+'$$$'+link+`@lazyRule=.js:/*refreshX5WebView*/eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omlazy();`,
                col_type: clt
			});
   }//for j
}//for i
}

//厂长显示下载线路
if(/qianoo|gdwar|magedn/.test(omdomin)){
if(html.indexOf('ypbt_down_list')!=-1){
d.push({
			title: '下载地址',
			col_type: 'text_1'
		});
var dnli = parseDomForArray(html, '.ypbt_down_list&&li');

for (var i = 0; i < dnli.length; i++) {
    d.push({
        title: parseDomForHtml(dnli[i], "a&&title"),
        col_type: 'text_center_1',
        url: parseDom(dnli[i], "a&&href")
    });
  }
 }
}//end 下载

res.data=d;setHomeResult(res);
}

//动态解析部分函数
function omlazy() {
var myurl=input.split('$$$')[1];
var srcurl=input.split('$$$')[2];
try{
//通用解析代码
//开始bt_token
function btoken(html){
if(!fetch("hiker://files/rules/xyq/token.js",{})){var fileUrl=fetch("https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/token.js",{});writeFile("hiker://files/rules/xyq/token.js",fileUrl);eval(fileUrl);}else{var fileUrl=fetch("hiker://files/rules/xyq/token.js",{});eval(fileUrl)};
var play=(tkurl.indexOf('url=') > -1 ? tkurl.split('url=')[1] : tkurl);
if(fro=='bilibili'){return play+';{Referer@https://www.bilibili.com&&User-Agent@Mozilla/5.0}';}else if(play.indexOf('titan.mgtv.com')!=-1){return play+'#isVideo=true#'+';{Referer@'+urll+'&&User-Agent@Mozilla/5.0}';}else if(/4kan/.test(play)){return play+';{Referer@https://bak.ojbkjx.com/}';}else{return play};
}
function btken(html){
eval(getCryptoJS());
var urlstr=html.match(/getVideoInfo\(\"(.*?)\"\)/)[1];
var bt_token=html.split('bt_token = "')[1].split('"')[0];
var token_key=CryptoJS.enc.Utf8.parse('H5C9PJ60t5JgzxUS');
var token_iv=CryptoJS.enc.Utf8.parse(bt_token);
function decrypt(urlstr,token_key,token_iv){
return CryptoJS.AES.decrypt(urlstr,token_key,{'iv':token_iv}).toString(CryptoJS.enc.Utf8);
}
return decrypt(urlstr,token_key,token_iv);
}
//结束bt_token
//开始阿里
function alizy(srcurl){
//var html=fetch('https://ssl.vip.cqzyw.net:11551/?url='+srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
//if(/bt_token/.test(html)){
//if(!fetch("hiker://files/rules/xyq/token.js",{})){var fileUrl=fetch("https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/token.js",{});writeFile("hiker://files/rules/xyq/token.js",fileUrl);eval(fileUrl);}else{var fileUrl=fetch("hiker://files/rules/xyq/token.js",{});eval(fileUrl)};
//var play=(tkurl.indexOf('url=') > -1 ? tkurl.split('url=')[1] : tkurl);}
//return 'x5Play://'+play
return fetch('https://foubin.com/jiexi.php?url='+srcurl,{}).match(/\"url\":\"(.*?)\"/)[1]
}
//结束阿里
//开始PAR
function parwix(html){
var dom=jiek.split('?')[0];
var aly=parseDomForHtml(html,"body&&iframe&&src");
//var html=fetch(dom+aly,{headers:{"User-Agent":MOBILE_UA,"Referer":dom}});
var html=fetch(dom+aly,{headers:{"User-Agent":MOBILE_UA,"Referer":dom,"Sec-Fetch-Site":"same-origin","Sec-Fetch-Mode":"navigate","Sec-Fetch-Dest":"iframe"}});
//setError(html);
if(/vod_\w{10}/.test(html)){
if(!fetch("hiker://files/rules/xyq/vodkey.js",{})){var fileUrl=fetch("https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/vodkey.js",{});writeFile("hiker://files/rules/xyq/vodkey.js",fileUrl);eval(fileUrl);var purl=vodurl;}else{var fileUrl=fetch("hiker://files/rules/xyq/vodkey.js",{});eval(fileUrl);var purl=vodurl};
}
else if(/\+ urls \+/.test(html)){
var purl=html.match(/var urls = \"(.*?)\"/)[1];}
else if(/webkit-playsinline/.test(html)){
var purl=parseDomForHtml(html,'#video&&source&&src');}
else{
var purl=html.match(/var url = \"(.*?)\"/)[1]}
if(fro=='bilibili'){return purl+';{Referer@https://www.bilibili.com&&User-Agent@Mozilla/5.0}';}else if(fro=='mgtv'){return purl+'#isVideo=true#'+';{Referer@'+urll+'&&User-Agent@Mozilla/5.0}';}else if(/yuns\.club/.test(purl)){return purl+';{Referer@'+dom+'}';}else{return purl};
}
//结束PAR
//开始789盘
function qbjpan(html){
eval(getCryptoJS());
var id = html.match(/var id=\"(.*?)\"/)[1];
var times=(new Date()).getTime()+'';
var sh= CryptoJS.MD5(base64Encode(id+times)).toString();
var purl='http://play.zk132.cn/new/play1/'+id+'%7C'+times+'%7C'+sh+'%7C'+'1'+'%7C'+'index.m3u8';
return purl;
}
//结束789盘
//资源网yun
function zywyun(srcurl){
var link=srcurl.split("/share")[0];
var fc=fetch(srcurl,{}).replace("var purl","var main");
if(fc.indexOf("main")!=-1){
var mat=fc.match(/var main.*?;/)[0];
eval(mat);
var play=(main.indexOf("http")!=-1?main:link+main);}
else{
var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
var play=(main.indexOf("http")!=-1?main:link+main)};
return play;
}
//结束资源网yun
//结束通用解析

//资源网yun链
if(srcurl.indexOf("135-cdn")!=-1){
refreshX5WebView(srcurl);
return "toast://请等待加载选集！";
}else if(srcurl.indexOf("/share/")!=-1){
return zywyun(srcurl);
}
//77影视
else if(/kunyu77/.test(myurl)){

if(srcurl.indexOf('html')!=-1){
var jx='http://jx.quanmingjiexi.com/?url='+srcurl;
return 'x5WebView://'+(jx);}

else{
if(srcurl.indexOf('GetDownUrlDoc')!=-1){
var ul=JSON.parse(request(srcurl, {headers:{"Referer":"https://www.nfmovies.com/"}, redirect:false, withHeaders:true}));
if(ul.statusCode=="302"){return ul.headers.location[0]+'#isVideo=true#';}else{return srcurl}}else if(srcurl.indexOf('GetDownUrlMu')!=-1){return srcurl+';{User-Agent@Lavf/57.83.100}'}
else{return srcurl}}
}
//泡饭APP
else if(/paofanhuai/.test(myurl)){
var json=JSON.parse(fetch('http://www.paofan.live/video/parse', {headers:{'Content-Type':'application/json','User-Agent':'okhttp/4.1.0'},body:srcurl,method:'POST'}));
return json.data.url;
}
//秋霞
else if(/7xiady/.test(myurl)){
	/*
var phtml =request(srcurl,{});
var js = eval(parseDomForHtml(phtml,".stui-player__video&&script&&Html").replace(/player_.*?={/,'player_data={'));
var fro=player_data.from;var urll=player_data.url;
if(fro=='niux'){refreshX5WebView('');
var jiexi=fetch(myurl+'/jx.php?id='+urll,{headers:{"User-Agent":PC_UA,"Referer":myurl}});
var re=fetch(myurl+'/'+jiexi.match(/var u=\"(.*?)\"/)[1],{});
if(re=='error'){return 'toast://解析失败，该资源无播放地址。';}else{return re.match(/url: \"(.*?)\"/)[1]};}
else{var jk=request(myurl+'/static/player/'+fro+'.js',{}).match(/src=\"(.*?)\"/)[1].split("'")[0];refreshX5WebView(jk+urll);return 'toast://切换选集成功，请等待加载播放框架。'}
*/
return srcurl;
}
//789盘
else if(/789pan/.test(myurl)){
var phtml=fetch(srcurl,{});
return JSON.parse(phtml).url
//return srcurl;
}
//阿里资源
else if(/alizy-/.test(srcurl)){
return alizy(srcurl);
}
//步步高资源
else if(/bbkdj/.test(myurl)){
refreshX5WebView(srcurl);
return "toast://请等待加载选集！";
}
//乐多资源网
else if(/leduosj/.test(myurl)){
var ldlink='https://api.xxctzy.com/wp-api/glid.php?vid='+srcurl+'&isDp=';
var purl=request(ldlink,{}).split("var url=\'")[1].split("\'")[0];
var pla=request("https://api.xxctzy.com"+purl,{});
return pla.match(/\"url\": \"(.*?)\"/)[1];
}
//解b64链接
else if(srcurl.indexOf("aHR0c")!=-1){
return decodeURIComponent(base64Decode(srcurl.split("&")[0]));
}
//人人资源网
else if(/rrzyw/.test(myurl)){
var meiju=fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://www.meiju11.com"}});
return meiju.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
}
//去看吧
else if(/qkan8|5180s|huihev|800novel/.test(myurl)){
//var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
var phtml=request(srcurl);
var urll=parseDomForHtml(phtml,'.fed-play-player&&iframe&&data-play');
if(/qkan8|800novel/.test(myurl)){urll=base64Decode(urll.slice(3))}
var pars=parseDom(phtml,'.fed-play-player&&iframe&&data-pars');
//直链
if(/.m3u8|.mp4|obj\/tos/.test(urll)&&/http/.test(urll)){if(urll.indexOf('cqzyw')!=-1){var ul=JSON.parse(fetch(urll, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withHeaders:true}));if(ul.statusCode=="302"){return ul.headers.location[0];}else{return urll};}else{return urll+'#isVideo=true#'};}
//全看
else if(/qkan8/.test(myurl)){if(urll.indexOf('http')!=-1){
if(urll.indexOf('html')!=-1){
var html=fetch('https://www.cuan.la/m3u8.php?url='+urll,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://qkan8.com/"}});
eval(fetch('https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/token.js',{}));
return tkurl.indexOf('url=') > -1 ? tkurl.split('url=')[1] : tkurl;}else{return urll+'#isVideo=true#'};}
else{
var html=fetch(pars+urll,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://qkan8.com/"}});
if(html.indexOf('purl')!=-1){
var kjjx=parseDomForHtml(html,'body&&Html').match(/var purl = \'(.*?)\'/)[1];
var html=fetch('https://qkan8.com'+kjjx,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://qkan8.com/"}})};
var vurl=html.indexOf('var vid')!=-1?html.match(/var vid=\"(.*?)\"/)[1]:html.match(/var url = \'(.*?)\'/)[1];return vurl;}
}
//80
else if(/5180s/.test(myurl)){
if(/html/.test(urll)){
return 'https://jx.m3u8.tv/jiexi/?url='+urll;}
else{return pars+urll}
}
else{return pars+urll}
}
//妮可
else if(/nicotv/.test(myurl)){
var phtml =request(srcurl,{});
eval(fetch(parseDom(phtml,".embed-responsive&&script&&src"),{}).split(';')[0]);
var pinh=fetch(cms_player.jiexi+encodeURIComponent(cms_player.url)+'&time='+cms_player.time+'&auth_key='+cms_player.auth_key,{});
var cc=fetch(parseDomForHtml(pinh,'body&&iframe&&src'),{headers:{"User-Agent":MOBILE_UA,"Referer":"http://jiexi.kingsnug.cn/"}});
return cc.match(/video src=\"(.*?)\"/)[1]
}
//素白白&厂长
else if(/subaibai|qianoo|gdwar|magedn/.test(myurl)){
var html=parseDomForHtml(request(srcurl,{}),'.videoplay&&Html');
if(/decrypted/.test(html)){
var phtml=parseDomForHtml(html,"body&&script:not([src])&&Html");
eval(getCryptoJS());
var scrpt=phtml.match(/var.*?\)\);/g)[0];
eval(scrpt.replace(/md5/g,'CryptoJS').replace('eval','var data = '));
if(/gdwar/.test(myurl)){
return 'x5WebView://'+data.match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace('https://wy','http://wy')+"#isVideo=true#"+';{Referer@'+myurl+'}';
}else{
return data.match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace('https://wy','http://wy')+"#isVideo=true#"+';{Referer@'+myurl+'}';}
}else{
var phtml=request(parseDomForHtml(html,"body&&iframe&&src"),{});
var purl=phtml.match(/src: \'(.*?)\'/)[1];
return 'x5WebView://'+purl}
}
//奈飞星
else if(/nfxhd/.test(myurl)){
var phtml=request(srcurl,{});
var scrpt=phtml.match(/var player_.*?\}/)[0].replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll = player_data.url;
if(fro=='ppayun2'||fro=='tt10'){var play='https://wy.bigmao.top/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+urll;}
else if(fro=='gangtiexia'){var play='https://wy.bigmao.top/api/ShowVideoWy/3bb24322f78b47dfb8723c13d46d45ee/'+urll;}
else if(fro=='docker'){var doclin='https://wy.bigmao.top/api/ShowVideoDoc/3bb24322f78b47dfb8723c13d46d45ee/'+urll;
var ul=JSON.parse(request(doclin, {headers:{"Referer":"https://www.nfxhd.com/"}, redirect:false, withHeaders:true}));
if(ul.statusCode=="302"){var play=ul.headers.location[0];}else{var play=doclin;}
}
else if(fro=='bilibili'||urll.indexOf('html')!=-1){
var jxhtml=request('https://nfxhd.com/jx/analysis.php?v='+urll,{headers:{"Referer":"https://nfxhd.com"}});
var play=jxhtml.match(/var urls = \"(.*?)\"/)[1];
}
else{var play=urll}
if(fro=='ppayun2'||fro=='tt10'||fro=='gangtiexia'){
var mlki=parseDomForHtml(fetch(play,{}),"body&&#dplayer&&result");
var fileUrl ="https://cdn.jsdelivr.net/gh/lzk23559/rulehouse/pako-min.js";
eval(fetch(fileUrl,{}));return realUrl;
}else{return play}
}
//真不卡影视
else if(/zhenbuka/.test(myurl)){
if(fileExist('hiker://files/rules/js/global_香情真不卡.js')){
var jsnr=fetch('hiker://files/rules/js/global_香情真不卡.js',{});
if(jsnr.indexOf('删掉')==-1){
var zbkjs='//本插件弃用，可以删掉了。';
writeFile("hiker://files/rules/js/global_香情真不卡.js",zbkjs);
}
}
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html");
eval(scrpt);var fro=player_data.from;var urll=player_data.url;
if(fro=='niuxyun'){
var one=fetch('https://good-vip.mmiyue.com/jiekou/zbk-bkby/jx.php?id='+urll,{headers:{"Referer":"https://www.zhenbuka3.com/"},method:"GET"}).match(/var u=\"(.*?)\"/)[1];
var tow=fetch('https://good-vip.mmiyue.com/jiekou/zbk-bkby/'+one,{headers:{"Referer":"https://www.zhenbuka3.com/"},method:"GET"});
return tow.match(/url: \"(.*?)\"/)[1];}
else if (fro == 'bkm3u8') {
var link = JSON.parse(request('https://good-vip.mmiyue.com/zhenbuka2/api/dymp4.php?video_id='+urll, {
            headers: {
                'Referer': 'https://www.zhenbuka3.com/'
            },
            redirect: false,withHeaders: true})).headers.location[0];
return link+ '#isVideo=true#';
}else if(urll.indexOf('m3u8')!=-1){return urll;}
else{
var jiek=fetch(myurl+'/static/player/'+fro+'.js?v='+new Date().getTime()+'',{headers:{"User-Agent":MOBILE_UA}}).match(/src=\"(.*?)\"/)[1].split("'")[0];
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
refreshX5WebView(jiek+urll);return 'toast://切换选集成功，请等待加载播放框架。'}
}
//91美剧
else if(/mjtvs/.test(myurl)){
var phtml =request(srcurl);var scrpt =parseDomForHtml(phtml,".embed-responsive&&script&&Html").replace(/base64decode/g,'base64Decode');eval(scrpt);
if(now.indexOf('http')!=-1){
return now;}
else{
var cod=request(myurl+'/js/player/'+pn+'.html',{}).match(/parent.now\+\'(.*?)\"/)[1];
var qq=fetch('https://oss.306kan.com/?url='+now+cod,{headers:{'User-Agent':MOBILE_UA,'Referer':'https://www.mjtvs.com'}});
var vkey=qq.match(/var vkey = \'(.*?)\'/)[1]+'&ip=192.168.0.109&dq=CHINA';
var jiek=qq.replace(/\/\*[\s\S]*?\*\//g,'').replace(/<!--[\s\S]*?-->/g,'').match(/post\([\"\'](.*?)[\"\']/)[1];
var play=fetch('https://oss.306kan.com/'+jiek, {headers:{'User-Agent':MOBILE_UA,'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},body:'vkey='+vkey,method:'POST'});
return JSON.parse(play).url;}
}
//阿房影视
else if(/bwl87/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://bwl87.com"}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=player_data.url;
if(fro.indexOf('m3u8')!=-1||fro=='qie'){refreshX5WebView('');return urll;}
else if(fro=='vip'){refreshX5WebView('');return JSON.parse(fetch(urll, {headers:{"User-Agent":"Dalvik/2.1.0","Referer":"https://bwl87.com"}, redirect:false, withHeaders:true})).headers.location[0];}
else if(fro=='xin'||fro=='ddyunp'){
var pre=request('https://player.90mm.me/play.php?url='+urll,{});
return pre.match(/\"url\": \"(.*?)\"/)[1];
//return urll.startsWith('http')?urll:'https://player.90mm.me/play.php?url='+urll;
}
else if(urll.indexOf('html')!=-1){refreshX5WebView('');
if(fro=='mgtv'){
var jx='https://www.mgtv.com.flygd.ml/player/analysis.php?v='+urll;
return fetch(jx,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://bwl87.com/"}}).match(/var urls = \"(.*?)\"/)[1]+'#isVideo=true#'+';{Referer@'+urll+'&&User-Agent@Mozilla/5.0}';}
else{
var jx='https://flygd.ml/player/analysis.php?v='+urll;
return fetch(jx,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://bwl87.com/"}}).match(/var urls = \"(.*?)\"/)[1]};
}
else if(fro.indexOf('age')!=-1){return urll;}
else{return refreshX5WebView(urll)}
}
//cokemv影视
else if(/cokemv/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":"http://cokemv.co"}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;
//var urll=decodeURIComponent(base64Decode(player_data.url)).replace(/&.*/,'');
var urll=player_data.url;
if(urll.startsWith("/m3u8")){return 'https://cokemv.co'+urll;}
else if(urll.indexOf('m3u8')!=-1){return urll;}
else if(fro=='age01'||fro=='age02'){return urll;}
else if(fro=='90mm'||fro=='xin'||fro=='cokeqie01'){return srcurl;}
else{return srcurl}
}
//奈菲影视
else if(/nfmovies/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":"Mozilla/5.0","Cookie":getVar('hikernfcookie')}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html");eval(scrpt);
if(now.indexOf('http')!=-1){
 if(now.indexOf("/share/")!=-1){
 try{
var link=now.split("/share")[0];
var fc=fetch(now,{headers:{"User-Agent":"Mozilla/5.0"}}).replace("var purl","var main");
if(fc.indexOf("main")!=-1){
var mat=fc.match(/var main.*?;/)[0];eval(mat);
return main.indexOf("http")!=-1?main:link+main;}
else{
var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
return main.indexOf("http")!=-1?main:link+main}
 } catch(e) {
refreshX5WebView(now);return "toast://请等待加载选集！"};
 }//if /share/
else if(now.indexOf('GetDownUrlDoc')!=-1){
var ul=JSON.parse(request(now, {headers:{"Referer":"https://www.nfmovies.com/"}, redirect:false, withHeaders:true}));
if(ul.statusCode=="302"){return ul.headers.location[0]+'#isVideo=true#'}else{return now}
}
else{return now}
}//if http
else{return srcurl}
}
//袋鼠电影
else if(/daishudy/.test(myurl)){
var phtml =request(srcurl,{});
var scrpt = parseDom(phtml,".hy-player&&script&&Html");eval(scrpt);

if(/daishudy/.test(myurl)){
if(pn=='alizy'){
var jxapi=fetch('http://daishudy.com/js/play.js',{}).match(/jxAapi=\"(.*?)\"/)[1];
//return jxapi+now;
return alizy(now);
}
else if(/.m3u8|.mp4|obj\/tos/.test(now)&&/http/.test(now)){return now;}
else{return now}
}//结束袋鼠
}
//4K鸭
else if(/yanetflix/.test(myurl)){
var phtml =fetch(srcurl.replace('/play/','/player/'),{headers:{"User-Agent":PC_UA,"Referer":"https://www.4kya.com/"}});
var scrpt = parseDomForHtml(phtml,"body&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(scrpt);
var fro=player_data.from;var urll=unescape(player_data.url);
if(fro=='4kya'){return urll+';{Referer@https://m3u8.4kya.com/}';}else{return urll}
}
//骚火
else if(/saohuotv/.test(myurl)){
var phtml =fetch(srcurl,{headers:{'User-Agent':MOBILE_UA}});
var src = parseDomForHtml(phtml,"body&&iframe&&src");
var cc=parseDomForHtml(fetch(src,{}),'body&&script,0&&Html').split('endebug()\;')[1].split('var act')[0];
eval(cc);
var cs='url='+url+'&t='+t+'&key='+key+'&act=0&play=1';
var fc=fetch('http://play.hhplayer.com/hhjx/api.php',{headers:{'User-Agent':MOBILE_UA,'referer':'http://play.hhplayer.com/'},body:cs,method:'POST'});
var playlink=JSON.parse(fc).url;
if(/obj\/tos/.test(playlink)){
return playlink+'#isVideo=true#';}
else{
return playlink.indexOf('http')!=-1?playlink:'http://play.hhplayer.com'+playlink}
}
//扛把子
else if(/46nb/.test(myurl)){
var srclink =fetch(parseDom(fetch(srcurl,{headers:{'User-Agent':MOBILE_UA,'Referer':'https://www.46nb.com/'}}),".mplayer&&script&&src"),{headers:{'User-Agent':MOBILE_UA,'Referer':'https://www.46nb.com/'}});
if(srclink.indexOf('iframe')==-1){var cc=parseDomForHtml(srclink,'body&&video&&src');}else{var cc=parseDomForHtml(srclink,'body&&iframe&&src')}
/*代码开始-蛊惑解析*/
if(cc.indexOf('gg.79da')!=-1){
var jx=fetch(cc,{});
var tim=jx.match(/timestamp:(.*?)\,/)[1];
var sig=jx.match(/sign: \"(.*?)\"/)[1];
var eurl=encodeURIComponent(cc.split('v=')[1]);
var getip=fetch('https://ip.if.iqiyi.com/cityjson',{});
eval(getip);var ip=returnIpCity.data.ip;
var link='https://gg.79da.com/video.php?ip='+ip+'&timestamp='+tim+'&sign='+sig+'&v='+eurl+'&h5=1';
var play=fetch(link,{});
return JSON.parse(play).url;}
/*快快解析*/
else if(cc.indexOf('play.79da')!=-1){
var da = fetch(cc,{headers:{'Referer':'http://www.46nb.com/'}});
if(/api.php/.test(da)){
var purl=da.match(/\'url\':\'(.*?)\'/)[1];
var pref=da.match(/\'referer\':\'(.*?)\'/)[1];
var ptim=da.match(/\'time\':\'(.*?)\'/)[1];
var ptyp=da.match(/\'type\':\'(.*?)\'/)[1];
var poth=base64Encode(cc.split('url=')[1]);
var pinh=('url='+purl+'&referer='+pref+'&ref=1&time='+ptim+'&type='+ptyp+'&other='+poth+'&ios=0');
var json=fetch('https://play.79da.com/api.php', {headers:{'x-requested-with':'XMLHttpRequest','Origin':'https://play.79da.com'},body:pinh,method:'POST'});
return JSON.parse(json).url;}else{return da.match(/var vid=\"(.*?)\"/)[1]};}
/*huagu解析*/
else if(cc.indexOf('new.79da')!=-1){
var cs='v='+cc.split('url=')[1];
var json=fetch('https://new.79da.com/api.php', {headers:{'x-requested-with':'XMLHttpRequest','Origin':'https://new.79da.com'},body:cs,method:'POST'});
return JSON.parse(json).url;}
/*不是上面的解析就打开链接*/
else{return cc.indexOf('godsong')!=-1?cc+'#.mp4':cc}
}
//肖先生&干饭&回响&淘淘&大师兄&BD电影&思古&爱迪&极品&迪迪&九州&饭团
else if(/syg520|ganfantv|hxys|flvweb|tv.ci|bddysf|siguyy|aidi|jpysvip|4ytv|unss|fantuan|klysw|zhaikanys|nkvod|juhaokan|vdxj|kanju77|o8tv|jushetv|dtjos|dikotv|mjhd|77diany|lekkan|xkvideo|renrenmi|90zyk|vipmv|cccu|newfii|7a11l|98hyk|lqiyi/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
//var scrpt = parseDomForHtml(phtml,".leo-player||.embed-responsive||.stui-player__video||.myui-player__video||.myui-player__item||#bofang_box||.player-box-main&&script&&Html").replace(/player_.*?={/,'player_data={');
var scrpt=phtml.match(/var player_.*?\}/)[0].replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=player_data.url;var nxt=player_data.url_next;
if(urll.substring(0,2)=='JT'||/kanju/.test(myurl)){urll=unescape(base64Decode(urll));nxt=unescape(base64Decode(nxt));}
else if(urll.substring(0,1)=='%'){urll=unescape(urll);nxt=unescape(nxt);}
//打开直链
if(/\.m3u8|\.mp4|obj\/tos/.test(urll)&&/http/.test(urll)){
if(/bigmao/.test(urll)){
return urll+';{Referer@'+myurl+'}'+'#isVideo=true#';}
else if(/wkfile/.test(urll)){
	return urll+';{Referer@'+myurl+'}'
}else{return urll+'#isVideo=true#'}
}
//阿里资源
else if(/alizy-/.test(urll)){
return alizy(urll);}
//爱迪
else if(/aidi/.test(urll)&&/93eS5/.test(urll)){
var durl =urll.split('date=')[1];var qz = durl.substr(0, 20);
var jm = '';
for (let i=0; i< 20; i++) {if(i%2== 0){jm += qz[i]}}
var b64u= (jm + durl.substr(20)).replace(/O0O0O/g, '=').replace(/o000o/g,'+');
var purl = base64Decode(b64u);
if(/mlkioiy|bigmao/.test(purl)){
if(/VideoDoc/.test(purl)){
var ul=JSON.parse(request(purl, {headers:{"Referer":srcurl}, redirect:false, withHeaders:true}));
if(ul.statusCode=="302"){return ul.headers.location[0];}else{return purl;};}
else if(/ShowVideo/.test(purl)){
var mlki=parseDomForHtml(fetch(purl,{}),"body&&#dplayer&&result");
//setError(mlki);
var fileUrl ="https://cdn.jsdelivr.net/gh/lzk23559/rulehouse/pako-min.js";
eval(request(fileUrl,{}));
return realUrl;
}else{
return purl+"#isVideo=true#"};
 }
}
//加自带接口
else{
var jconf = parseDom(phtml,".leo-player||.embed-responsive||.stui-player__video||.myui-player__video||.myui-player__item||#bofang_box||.player-box-main&&script,1&&src");
var jso=request(jconf,{}).match(/player_list=(.*?),MacPlayerConfig/)[1];
eval("json="+jso);
var jiek=eval("json['"+fro+"'].parse");
if(/98hyk/.test(myurl)){
jiek='http://jx.hao-zsj.cn/dm/?url=';
}
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
//setError(jiek);

//璇玑
/*
if(/vdxj/.test(myurl)){
if(fro=='yunbo'){
//var json=fetch('https://dtjug.cn/json_api.php?id='+urll,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
return 'https://p.vod123.xyz/v/'+urll;
}
else if(fro=='youku'){
var json=fetch('https://json.mtosz.com/Mao.php?url='+urll,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
}

else if(fro=='hp'){
var json=fetch('http://www.dtjug.cn/home/api?type=ys&uid=22486&key=fgijlstADLOQSVX289&url='+urll,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
}else{
var json=fetch('http://www.dtjug.cn/home/api?type=ys&uid=22486&key=fgijlstADLOQSVX289&url='+urll,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}})
}

else{
var json=fetch('http://cdn.dtjug.cn/api.php', {headers:{'X-Requested-With':'XMLHttpRequest','Content-Type':'application/x-www-form-urlencoded','Referer':'http://cdn.dtjug.cn/'},body:'url='+urll,method:'POST'})
}
if(fro=='mgtv'){
return JSON.parse(json).url+'#isVideo=true#'+';{Referer@https://www.mgtv.com/&&User-Agent@Mozilla/5.0}';}
else{
return JSON.parse(json).url+"#isVideo=true#"
 }
}
*/
//干饭
if(/ganfan/.test(myurl)&&/html/.test(urll)){var html=request('https://jx.zui.cm/?url='+urll,{});}
else{var html=fetch(jiek+urll+"&next="+nxt,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});}
//setError(html);
if(/bt_token/.test(html)&&/getVideoInfo/.test(html)){
return btken(html);}
else if(/bt_token/.test(html)){
return btoken(html);}
//结束bt_token
//开始PAR
else if(/my-loading/.test(html)&&/analysis|myiframe/.test(html)){
return parwix(html);
}//结束PAR
//开始789盘
else if(/789pan/.test(html)&&/var id=/.test(html)){
return qbjpan(html);
}//结束789盘
else if(/llqplayer/.test(html)){return 'x5WebView://'+(jiek+urll+"&next="+nxt);}
else if(/jhplayer/.test(html)&&/jianghu\/js\/setting/.test(html)){return html.match(/\"url\": \"(.*?)\"/)[1];}
else if(/var urls =/.test(html)){return html.match(/urls = \"(.*?)\"/)[1];}
else if(/var vodurl =/.test(html)){return html.match(/vodurl = \'(.*?)\'/)[1];}
else if(/var url =/.test(html)){return html.match(/url = \'(.*?)\'/)[1];}
else if(/\<source src.*?video\/mp4/.test(html)){return parseDomForHtml(html,'source&&src');}
else if(/\"url\":.*?[\"]http/.test(html)&&/\.m3u8|\.mp4/.test(html)){return html.match(/\"url\":.*?\"(.*?)\"/)[1];}
//其它打开自带解析页面
else{
return (jiek+urll+"&next="+nxt)}
}//结束加接口
}
//墨鱼&孤单&TVB云播&追剧
else if(/moyuy|gudanys|tvyb02|4kan|aiyy|dianyingim|xiaopao|msdv|paofans|jhdyw/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
//var scrpt = parseDomForHtml(phtml,".dt-info-header-wap||.leo-player||.embed-responsive||.stui-player__video||.myui-player__video||.myui-player__item||#bofang_box||.player-box-main&&script&&Html").replace(/player_.*?={/,'player_data={');
var scrpt=phtml.match(/var player_.*?\}/)[0].replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=player_data.url;var nxt=player_data.url_next;
if(urll.substring(0,2)=='JT'){urll=unescape(base64Decode(urll));nxt=unescape(base64Decode(nxt));}
else if(urll.substring(0,1)=='%'){urll=unescape(urll);nxt=unescape(nxt);}
//setError(urll);
//直链
if(/.m3u8|.mp4|obj\/tos/.test(urll)&&/http/.test(urll)){if(urll.indexOf('cqzyw')!=-1){var ul=JSON.parse(fetch(urll, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withHeaders:true}));if(ul.statusCode=="302"){return ul.headers.location[0];}else{return urll};}else{return urll+'#isVideo=true#'};}
//阿里资源
else if(/alizy-/.test(urll)){
return alizy(urll);}
//TVB云播直链
else if(/tvyb02/.test(myurl)&&/hkm3u8/.test(fro)){return srcurl;}
else{
if(/msdv/.test(myurl)){
var jiek='https://jiexi.msdv.cn/?url=';
}else{
var jiek=request(myurl+'/static/player/'+fro+'.js',{}).match(/src=\"(.*?)\"/)[1].split("'")[0];}
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
//setError(jiek+urll);

var html=fetch(jiek+urll+"&next="+nxt,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
if(/sxmj/.test(jiek)){
var html=request(parseDomForHtml(html, "body&&iframe&&src"),{});}
//setError(html);
if(/bt_token/.test(html)&&/getVideoInfo/.test(html)){
return btken(html);}
else if(/bt_token/.test(html)){
return btoken(html);}
//结束bt_token
//开始PAR
else if(/my-loading/.test(html)&&/analysis/.test(html)){
return parwix(html);
}//结束PAR
//开始789盘
else if(/789pan/.test(html)&&/var id=/.test(html)){
return qbjpan(html);
}//结束789盘
else if(/hanmiys/.test(html)&&/m3u8/.test(html)){return myurl+html.match(/\"url\": \"(.*?)\"/)[1]}
else if(/llqplayer/.test(html)){return 'x5WebView://'+(jiek+urll+"&next="+nxt);}
else if(/jhplayer/.test(html)&&/.m3u8/.test(html)&&/iframe/.test(html)){var ifsrc=parseDomForHtml(html,"body&&iframe&&src");
return ifsrc.split('?v=')[1];
}
else if(/var urls/.test(html)){return html.match(/urls = \"(.*?)\"/)[1];}
else if(/var vodurl/.test(html)){return html.match(/vodurl = \'(.*?)\'/)[1];}
else if(/\<source src.*?video\/mp4/.test(html)){return parseDomForHtml(html,'source&&src');}
else if(/\"url\":.*?[\"]http/.test(html)&&/\.m3u8|\.mp4/.test(html)){return html.match(/\"url\":.*?\"(.*?)\"/)[1];}
//其它打开自带解析页面
else{
return (jiek+urll+"&next="+nxt)}
}
}
//南瓜
else if(/nangua/.test(myurl)){
var phtml =request(srcurl,{});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html");
eval(scrpt);var urll=zanpiancms_player.apiurl+zanpiancms_player.url;
var jxhtml=fetch(urll,{headers:{"User-Agent":MOBILE_UA,"Referer":srcurl}});
eval('data='+jxhtml.match(/api.php\", ({[\s\S]*?})/)[1]);
var ph='url='+data.url+'&time='+data.time+'&key='+data.key;
var pjson=fetch('https://api.taoxiaoma.vip/parse/api.php', {headers:{'X-Requested-With':'XMLHttpRequest','Referer':urll,'origin':'https://api.taoxiaoma.vip'},body:ph,method:'POST'});
var code=JSON.parse(pjson).code;var play=JSON.parse(pjson).url;

if(code==200){
refreshX5WebView('');
if(play.indexOf('http')!=-1){
return decodeURIComponent(play);}
else if(play.indexOf('hls.php')!=-1){
return 'x5Play://'+urll.split('?url')[0]+play;}else{return srcurl}
;}
else if(play.indexOf('?v=')!=-1){return play;}
else if(play.indexOf('php?')!=-1){return urll.split('/parse')[0]+play;}
else{return srcurl}
}
//闪电&80影视
else if(/ak1080|80ysm|haimianys|shaozeyk|aik\.la/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
var dtplay=parseDomForHtml(phtml,'.mo-play-load&&data-play');
//if(/ak1080|80ysm|haimianys/.test(myurl)){urll=base64Decode(urll.slice(3))}
var urll=base64Decode(dtplay.slice(3));
var jiek=parseDomForHtml(phtml,'.mo-play-load&&data-parse');
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
if(/\.m3u8|\.mp4|obj\/tos/.test(urll)&&/http/.test(urll)){return urll+'#isVideo=true#';}//结束直链
//else if(/ak1080/.test(myurl)){return srcurl;}//结束ak1080
var html=fetch(jiek+urll,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
//setError(html);
if(/bt_token/.test(html)&&/getVideoInfo/.test(html)){
return btken(html);}
else if(/bt_token/.test(html)){
return btoken(html);}
//结束bt_token
//开始PAR
else if(/my-loading/.test(html)&&/analysis/.test(html)){
return parwix(html);
}//结束PAR
//开始789盘
else if(/789pan/.test(html)&&/var id=/.test(html)){
return qbjpan(html);
}//结束789盘
else if(/jhplayer/.test(html)&&/.m3u8/.test(html)&&/iframe/.test(html)){var ifsrc=parseDomForHtml(html,"body&&iframe&&src");
return ifsrc.split('?v=')[1];
}
else if(/var urls/.test(html)){return html.match(/urls = \"(.*?)\"/)[1];}
else if(/var vodurl/.test(html)){return html.match(/vodurl = \'(.*?)\'/)[1];}
else if(/\<source src.*?video\/mp4/.test(html)){return parseDomForHtml(html,'source&&src');}
else if(/\"url\": \"/.test(html)&&/\.m3u8|\.mp4/.test(html)){return html.match(/\"url\": \"(.*?)\"/)[1];}
//其它打开自带解析页面
else{
return (jiek+urll)}
}
//auete&80dvd
else if(/auete|80dvd/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
var scrpt = parseDomForHtml(phtml,"#player||#video||.player&&script&&Html").replace(/base64decode/g,"base64Decode");
eval(scrpt);var urll=now;var fro=pn;
if(/\.m3u8|\.mp4|obj\/tos/.test(urll)&&/http/.test(urll)){return urll+'#isVideo=true#';}
else{
if(/80dvd/.test(myurl)){
var jiek='http://80dvd.024zs.com/player/?url=';}
else{
var jiek=request(myurl+'/js/player/'+pn+'.html',{}).match(/src=\"(.*?)\'/)[1]}
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
if(/80dvd/.test(myurl)){
var html=fetch(jiek+now,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
return parwix(html);
}else{
return (jiek+now)}
 }
}
//蓝光资源
else if(/wfss100/.test(myurl)){
var phtml =request(srcurl,{});
var ifsrc=srcurl.split('/?url=')[0]+parseDomForHtml(phtml,"body&&iframe&&src");
var ifsrct=ifsrc.split('?url=')[0]+parseDomForHtml(request(ifsrc,{}),"body&&iframe&&src");
var urll=request(ifsrct,{}).match(/vodurl = \'(.*?)\'/)[1];
return urll+';{Referer@'+myurl+'}';
}
//看一看&影视饭
else if(/kyikan|ysftv/.test(myurl)){
var fro=srcurl.split('#')[1];
var urll=srcurl.split('#')[2];
var pars=fetch(myurl+'/player/'+fro+'.js',{});
if(/apiurl/.test(pars)){
var apiurl=pars.match(/apiurl = \'(.*?)\'/)[1];
pars=pars.replace("'+apiurl+'",apiurl).replace("'+MacPlayer.PlayUrl+'",urll);
var jiex=parseDom(pars,'iframe&&src');}
else{
pars=pars.replace("'+MacPlayer.PlayUrl+'",urll);
var jiex=parseDom(pars,'iframe&&src');
}
if(/kyikan/.test(myurl)){
var phtml=fetch(jiex,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
if(/fuck_you/.test(phtml)){
var pdata=phtml.match(/data = \"(.*?)\"/)[1];
eval(getCryptoJS());
//以下代码由努力大佬提供解码支持
var keya=new Date().getTime().toString();
var keyb=keya.substr(0x0,0x7)+'00000KONG';
Wt = CryptoJS.enc.Utf8.parse(keyb);
Qt = CryptoJS.enc.Utf8.parse("erkongkkjfipatdv");
function Decrypt(word) {
    var w = word;
    var decrypted = CryptoJS.AES.decrypt(w, Wt,
        {
            iv: Qt,
            padding: CryptoJS.pad.Pkcs7
        });
    return decrypted.toString(CryptoJS.enc.Utf8);
};
var purl=Decrypt(base64Decode(pdata));
if(purl.substring(0,4)=='http'){return purl;}
else{return 'https://php.playerla.com/erkong/'+purl};
}
else if(/erkong|obj\/tos/.test(jiex)){var purl=phtml.match(/url: \'(.*?)\'/)[1];if(/mgtv/.test(urll)){return purl+'#isVideo=true#'+';{Referer@'+urll+'&&User-Agent@Mozilla/5.0}';}else{return purl+'#isVideo=true#'};}
else if(/.m3u8|.mp4/.test(urll)&&/http/.test(urll)){
refreshX5WebView('');return urll;}
else{return 'x5WebView://'+(jiex)};
}//结束看一看
else if(/ysftv/.test(myurl)){
if(/.m3u8|.mp4/.test(urll)&&/http/.test(urll)){
refreshX5WebView('');return urll;}
else{
return 'x5WebView://'+jiex};
 }//结束影视饭
}
//冷月影视
else if(/lengyue/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
var scrpt = parseDomForHtml(phtml,"body&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=decodeURIComponent(base64Decode(player_data.url));
var jconf = parseDom(phtml,"body&&script,1&&src");
var jso=request(jconf,{}).match(/player_list=(.*?),MacPlayerConfig/)[1];
eval("json="+jso);
var jiek=eval("json['"+fro+"'].parse");
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
var html=fetch(jiek+urll,{headers:{"User-Agent":MOBILE_UA,"Referer":"http://www.521x5.com/"}});
if(/bt_token/.test(html)){
return btoken(html);}
//结束bt_token
//开始PAR
else if(/my-loading/.test(html)&&/analysis/.test(html)){
return parwix(html);
}//结束PAR
else{
return jiek+urll}
}
//播王
else if(/bowang/.test(myurl)){
var html=request(srcurl);
var purl=html.match(/\"url\":\"(.*?)\"/)[1].replace(/\\/g,'');
if(/bilibili/.test(srcurl)){return purl+';{Referer@https://www.bilibili.com/&&User-Agent@Mozilla/5.0}';}else if(/mgtv/.test(purl)){return purl+'#isVideo=true#'+';{Referer@https://www.mgtv.com/&&User-Agent@Mozilla/5.0}';}else{return purl+'#isVideo=true#'};
}
//打开源链接
else{return srcurl}
}catch(e){return srcurl}
}


//预处理代码
function hikerpre(){
	if(!fetch('hiker://files/rules/xyq/hikerset.json',{})){
let set=`{"ssmode":"1","sscount":"5"}`;
writeFile("hiker://files/rules/xyq/hikerset.json",set);  
 }
 var ssxc = fetch('hiker://files/rules/xyq/hikerset.json',{});
 if(!JSON.parse(ssxc).sscount){
let sset=ssxc.replace('\"\}','\"\,\"sscount\"\:\"5\"\}');
writeFile("hiker://files/rules/xyq/hikerset.json",sset);
 }
 if(!fileExist('hiker://files/rules/js/global_香情影视网页插件.js')){
var plugin=request("https://codeberg.org/lzk23559/cloudrule/raw/branch/master/global_香情影视网页插件.js",{});
writeFile("hiker://files/rules/js/global_香情影视网页插件.js",plugin);  
 }
try{
if(!getVar('hikersbbmfwaf')){
putVar('hikersbbmfwaf','1');
request('https://www.subaibai.com/mfwaf-reset',{header:{'Referer':'https://www.subaibai.com'}});}
/*
if(!getVar('hikernfcookie')){
var nfcookie = JSON.parse(fetchCookie('https://www.nfmovies.com/search.php',{headers:{'User-Agent':'Mozilla/5.0'}})).join(';');
putVar('hikernfcookie',nfcookie)}
*/
}catch(e){}
}