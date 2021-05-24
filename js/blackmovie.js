//本规则仅限规则爱好者交流使用，请下载后于24h内删除
const movielists = [{ title:'美剧虫', reg: 'mjc', search:'https://www.meijuchong.com/vodsearch/-------------.html?wd=关键词&submit=',},{title:'电影淘淘', reg: 'taotao', search:'http://www.flvwec.com/index.php/vod/search/page/fypage/wd/关键词.html'}];
const data = {
    mjc: {
        index:'https://www.meijuchong.com',
        router: ['hiker://empty','https://www.meijuchong.com/vodshow/1-分类-排序------fypage---.html','https://www.meijuchong.com/vodshow/2-分类-排序------fypage---.html', 'https://www.meijuchong.com/vodshow/4-分类-排序------fypage---.html', 'https://www.meijuchong.com/vodshow/3-分类-排序------fypage---.html'],
        type: [{},
            {
                fyclass:{
                    conts: '电影片库&大陆电影&美国电影&香港电影&韩国电影&英国电影&台湾&日本&法国&意大利&德国&西班牙&泰国&其它',
                    lists: '&%E5%A4%A7%E9%99%86&%E7%BE%8E%E5%9B%BD&%E9%A6%99%E6%B8%AF&%E9%9F%A9%E5%9B%BD&%E8%8B%B1%E5%9B%BD&%E5%8F%B0%E6%B9%BE&%E6%97%A5%E6%9C%AC&%E6%B3%95%E5%9B%BD&%E6%84%8F%E5%A4%A7%E5%88%A9&%E5%BE%B7%E5%9B%BD&%E8%A5%BF%E7%8F%AD%E7%89%99&%E6%B3%B0%E5%9B%BD&%E5%85%B6%E5%AE%83',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index: 'mjc_1'
            },
            {
                fyclass:{
                    conts: '全部&大陆&美国&韩国&英国&香港&台湾&日本&泰国&新加坡&其他&香港地区',
                    lists: '&%E5%A4%A7%E9%99%86&%E7%BE%8E%E5%9B%BD&%E9%9F%A9%E5%9B%BD&%E8%8B%B1%E5%9B%BD&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E6%97%A5%E6%9C%AC&%E6%B3%B0%E5%9B%BD&%E6%96%B0%E5%8A%A0%E5%9D%A1&%E5%85%B6%E4%BB%96&%E9%A6%99%E6%B8%AF%E5%9C%B0%E5%8C%BA',
                    def: 3
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjc_2'
            },
            {
                fyclass:{
                    conts: '全部&大陆&日本&欧美&其他',
                    lists:'&%E5%A4%A7%E9%99%86&%E6%97%A5%E6%9C%AC&%E6%AC%A7%E7%BE%8E&%E5%85%B6%E4%BB%96',
                    def: 0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjc_3'
            },
            {
                fyclass: {
                    conts: '全部&大陆&韩国&香港&台湾&美国&其它',
                    lists: '&%E5%A4%A7%E9%99%86&%E9%9F%A9%E5%9B%BD&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E7%BE%8E%E5%9B%BD&%E5%85%B6%E5%AE%83',
                    def: 0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjc_4'
            }
            
        ],
        nav:[{},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying_icon.gif'},{title:'电视剧', url: 'https://qiu522.github.io/blog/img/dianshi_icon.gif'},{title:'动漫', url: 'https://qiu522.github.io/blog/img/zymk.png'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/movie2.png'}]
    },
    taotao:{
        index:'http://www.flvwec.com/',
        router: ['','http://www.flvwec.com/index.php/vod/show/by/排序/id/分类/page/fypage.html', 'http://www.flvwec.com/index.php/vod/show/by/排序/id/分类/page/fypage.html', 'http://www.flvwec.com/index.php/vod/show/by/排序/年代id/分类/page/fypage.html', 'http://www.flvwec.com/index.php/vod/show/by/排序/id/分类/page/fypage.html', 'http://www.flvwec.com/index.php/vod/show/by/排序/年代id/3/page/fypage.html' ,'http://www.flvwec.com/index.php/vod/show/by/排序/年代id/4/page/fypage.html'],
        type: [{},
            {
                fyclass:{
                    conts: '全部&纪录片&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片',
                    lists: '1&32&6&7&8&9&10&11&12',
                    def: 2
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_1'
            },
            {
                fyclass:{
                    conts: '全部&纪录片&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片',
                    lists: '1&32&6&7&8&9&10&11&12',
                    def: 3
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_2'
            },
            {
                fyclass:{
                    conts: '全部&泰国剧&国产剧&港台剧&日韩剧&欧美剧',
                    lists:'2&38&13&14&15&16',
                    def: 0
                },
                fyyear:{
                    conts: '全部&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&class/%E5%8F%A4%E8%A3%85/&class/%E6%88%98%E4%BA%89/&class/%E9%9D%92%E6%98%A5%E5%81%B6%E5%83%8F/&class/%E5%96%9C%E5%89%A7/&class/%E5%AE%B6%E5%BA%AD/&class/%E7%8A%AF%E7%BD%AA/&class/%E5%8A%A8%E4%BD%9C/&class/%E5%A5%87%E5%B9%BB/&class/%E5%89%A7%E6%83%85/&class/%E5%8E%86%E5%8F%B2/&class/%E7%BB%8F%E5%85%B8/&class/%E4%B9%A1%E6%9D%91/&class/%E6%83%85%E6%99%AF/&class/%E5%95%86%E6%88%98/&class/%E7%BD%91%E5%89%A7/&class/%E5%85%B6%E4%BB%96/'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_3'
            },
            {
                fyclass: {
                    conts: '全部&纪录片&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片',
                    lists: '1&32&6&7&8&9&10&11&12',
                    def: 0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_4'
            },
            {
                fyyear:{
                    conts: '全部&选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职',
                    lists: '&class/%E9%80%89%E7%A7%80/&class/%E6%83%85%E6%84%9F/&class/%E8%AE%BF%E8%B0%88/&class/%E6%92%AD%E6%8A%A5/&class/%E6%97%85%E6%B8%B8/&class/%E9%9F%B3%E4%B9%90/&class/%E7%BE%8E%E9%A3%9F/&class/%E7%BA%AA%E5%AE%9E/&class/%E6%9B%B2%E8%89%BA/&class/%E7%94%9F%E6%B4%BB/&class/%E6%B8%B8%E6%88%8F%E4%BA%92%E5%8A%A8/&class/%E8%B4%A2%E7%BB%8F/&class/%E6%B1%82%E8%81%8C/',
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_5'
            },
            {
                fyyear:{
                    conts: '全部&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其他',
                    lists: '&class/%E6%83%85%E6%84%9F/&class/%E7%A7%91%E5%B9%BB/&class/%E7%83%AD%E8%A1%80/&class/%E6%8E%A8%E7%90%86/&class/%E6%90%9E%E7%AC%91/&class/%E5%86%92%E9%99%A9/&class/%E8%90%9D%E8%8E%89/&class/%E6%A0%A1%E5%9B%AD/&class/%E5%8A%A8%E4%BD%9C/&class/%E6%9C%BA%E6%88%98/&class/%E8%BF%90%E5%8A%A8/&class/%E6%88%98%E4%BA%89/&class/%E5%B0%91%E5%B9%B4/&class/%E5%B0%91%E5%A5%B3/&class/%E7%A4%BE%E4%BC%9A/&class/%E5%8E%9F%E5%88%9B/&class/%E4%BA%B2%E5%AD%90/&class/%E7%9B%8A%E6%99%BA/&class/%E5%8A%B1%E5%BF%97/&class/%E5%85%B6%E4%BB%96/',
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_6'
            }
            
        ],
        nav:[{},{},{},{title:'电视剧', url: 'https://qiu522.github.io/blog/img/dianshi_icon.gif'},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying_icon.gif'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/movie2.png'},{title:'动漫', url: 'https://qiu522.github.io/blog/img/zymk.png'}]
    }
}
//首页解析
//HOMEPAGE
var hikerHomePage = ()=>{
    var d = [];

    for(var i in movielists){
        d.push({
            title:movielists[i].title + (getVar('nowPage', movielists[0].reg)==movielists[i].reg?'👈🏻':''),
            url: $("#noLoading#").lazyRule((movieitem, data)=>{
                putVar('nowPage', movieitem.reg)
                putVar('pageUrl', data[movieitem.reg].index);
                refreshPage(false);
                return "hiker://empty"
                }, movielists[i], data),
            col_type:'flex_button'
        });
    }
    
    if( /meijuchong/.test( getVar('pageUrl', data.mjc.index) ) ){
        mjcindex(d, data);
    }else if( /flvwec/.test( getVar('pageUrl', data.mjc.index) ) ){
        taotaoindex(d,data);
    }

    d.push({ col_type: 'line_blank' });
    d.push({ title: "<h4 style='text-align:center;'><font color='#b36d61'>到底了呢！</font></h4>", col_type: "rich_text" });
    setResult(d)
}
//HOMEPAGE

var mjcindex = (d, data)=>{
    var router = data.mjc.router;
    var type = data.mjc.type;
    var nav = data.mjc.nav;
    var html = request(getVar('pageUrl', data.mjc.index));
    var conts = parseDomForArray(html, 'body&&.pannel:contains(更多)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.vodlist_wi&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.vodlist_thumb&&title'),
                            img: parseDom(list[i], '.vodlist_thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic_text&&i,1&&Text'),
                            url: $(parseDom(list[i], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_mjc() }),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }

    for (var i =0; i<conts.length-1; i++) {
        var list = parseDomForArray(conts[i], '.vodlist_wi&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
            var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.vodlist_wi&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.vodlist_thumb&&title'),
                        img: parseDom(list[i], '.vodlist_thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic_text&&i,1&&Text'),
                        url: $(parseDom(list[i], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_mjc() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.vodlist_thumb&&title'),
                img: parseDom(list[j], '.vodlist_thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic_text&&i,1&&Text'),
                url: $(parseDom(list[j], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_mjc() }),
                col_type: "movie_3"
            });
        }
    }
}

var taotaoindex = (d, data)=>{
    var router = data.taotao.router;
    var type = data.taotao.type;
    var nav = data.taotao.nav;
    var html = request(getVar('pageUrl', data.taotao.index));
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要

    for(var i=3; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.title&&Text'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original'),
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_taotao() }),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }

    for (var i =1; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("更多", "") + " <small><small><font color='#f9906f'>更多></font></small></small>",
            url: $(router[i]).rule((type, index) => {
            var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.title&&Text'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original'),
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_taotao() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.title&&Text'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original'),
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: 
$(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_taotao() }),
                col_type: "movie_3"
            });
        }
    }
}

var searchmovie = ()=>{
    var d = [];
    var key = MY_URL.split('$$$')[1]
    for(var i in movielists){
        d.push({
            title: movielists[i].title,
            url: $(movielists[i].search.replace('关键词', key)).rule(()=>{
                var d = []
                var html=getResCode();
                if(/meijuchong/.test(MY_URL)){
                    var list = parseDom(html, 'body&&.search_box&&.vodlist&&Html').match(/<li[\s\S]*?<\/li/g);
                    for (var j = 0; j < list.length; j++) {
                        d.push({
                            title: parseDomForHtml(list[j], '.vodlist_thumb&&title'),
                            desc: parseDomForHtml(list[j], '.pic_text&&Text'),
                            pic_url: parseDom(list[j], '.vodlist_thumb&&data-original'),
                            content:parseDomForHtml(list[j], '.searchlist_titbox&&Text'),
                            url:$(parseDom(list[j], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_mjc() }),
                        });
                    }
                }else if(/flvwec/.test(MY_URL)){
                    var content = '<body>' + parseDom(getResCode(), 'body&&#searchList&&Html') + '</body>';
                    var list = parseDomForArray(content, 'body&&li');
                    for(var i in list){
                        d.push({
                            title:parseDomForHtml(list[i],'a&&title'),
                            desc:parseDomForHtml(list[i],'.pic-tag&&Text'),
                            pic_url:parseDomForHtml(list[i],'a&&data-original'),
                            url:$(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_taotao() }),
                            content:parseDomForHtml(list[i],'p.hidden-xs&&Text')
                        });
                    }
                }
                setResult(d)
            }),
            col_type: "text_1"
        })
    }

    setResult(d);
}