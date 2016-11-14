/**
 * Created by Administrator on 2016/9/19 0019.
 */


$('#need').click(
    function(){
        $('#rent').show();
        $('#host').hide();
        //$('.wrap-top-r').children().eq(0).html('我的昵称')
    }
);

$('#peed').click(
    function(){
        $('#rent').hide();
        $('#host').show();
     //$('.wrap-top-r').children().eq(0).html('我的昵称')
    }
);

//移入字体和背景变色



/*

$('#hidden ul li').mouseover(function(){
    $(this).css({
    backgroundColor:'#dddddd'

    })
    $(this).children('a').css({color:'#87b867'})
})

$('#hidden ul li').mouseout(function(){
    $(this).css({
        backgroundColor:'#fff'

    })
    $(this).children('a').css({color:'#333333'})
})

*/

//也可以用简便的hover写






/*
$('#hidden ul li').hover(function(){
    $(this).css({backgroundColor:'#dddddd'});
    $(this).children('a').css({color:'#87b867'})
},function(){
   $(this).css({backgroundColor:'#fff'});
    $(this).children('a').css({color:'#333333'})
}
);*/





/*
//上下划出动画
$('#pox').hover(function () {
    $('#hidden').stop(false,true).slideDown();
}, function () {
    $('#hidden').stop(false,true).slideUp();
});
*/


$('#shown').hover(function () {
    $('#hidden').show();
}, function () {
    $('#hidden').hide();
});


$('#hidden').hover(function () {
    $(this).show();
}, function () {
    $(this).hide();
});




$('#hidden .city li').click(function () {
    $('#shown').html($(this).html());
    $('#hidden').hide();
});





//ajax
//先加载ajax后加载轮播

//首先通过简单的ajax找出后台给的数据
/*$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/queryHousesTop.action',
    dataType: 'jsonp',
    success: function (data) {
        console.log(data)
    }
    }*/
//   然后在控制台中可以看到4个obj，在网络中找到最后一个的响应，复制第一个data开始的花括号里面的内容
//在网页中找到sojson效验工具，把代码放进去格式化之后，需要什么信息就可以用了





/*

$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/queryHousesTop.action',
    dataType: 'jsonp',
    success: function (data) {
        if (data.success) {
            console.log(data.data[0].villageName);
            var item = '';
            for(var i in data.data ){
                item+='<li class="tu"><div class="img-l pot img-common">' +
                    '<img src="http://www.zhijunxing.com/yiju/upload/'+
                    data.data[i].photo.split(',')[0]+'"/><p>'+data.data[i].villageName+'</p><div>'+data.data[i].room+'<span>'+data.data[i].price+'</span>元/月</div></li>'
            }
            // console.log(item);

            $('.img-wrap').append(item);


        }

    }
});


//轮播

$('.img-show-wrap').carousel({
    element: $('#banner'),
    time: 2000,
    left: $('.zuo'),
    right: $('.you'),
    oli: 4
//    表示框内所能显示的图片数量
}, false, false);

*/



//完整版
/*
$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/queryHousesTop.action',
    dataType: 'jsonp',
    success: function (data) {
        console.log(data);
        // 获取后台数据
        if (data.success) {
            console.log(data.data[0].villageName);
            var item = '';
            for (var i in data.data) {
                item += '<li class="tu"><div class="img-l pot img-common">' +
                    '<img src="http://www.zhijunxing.com/yiju/upload/' +
                    data.data[i].photo.split(',')[0] + '"/><p>' + data.data[i].villageName + '</p><div>' + data.data[i].room + '<span>' + data.data[i].price + '</span> 元/月</div></li>'
            }
            // console.log(item);

            $('.img-wrap').append(item);

            $('.img-show-wrap').carousel({
                element: $('#banner'),
                time: 2000,
                left: $('.zuo'),
                right: $('.you'),
                oli: 4
            }, false, false);
        }

    }
});*/



//登录注册



$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/loginSession.action',
    dataType: 'jsonp',
    success: function (data) {
        console.log(data.success);

        if(data.success){
            //地址找不到
            $('.wrap-top-r a').eq(0).html('欢迎  '+data.data[0].lname).attr('href','http://192.168.0.129/yiju1.0-xiu/yiju-my-center.html');
            $('.wrap-top-r a').eq(1).html('退出').attr({
                'onclick':'quitLogin()',
                'href':'###'
            });
        }


        // $('.wrap-top-r').html('<a href="">'+data.data[0].lname+'</a>|')


    }
});



//退出的函数
function quitLogin(){
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if(data.resultCode=='0000'){

                $('.wrap-top-r a').eq(0).html('登录').attr('href','http://192.168.0.129/yiju1.0-xiu/register.html');
                $('.wrap-top-r a').eq(1).html('注册').attr('href','http://192.168.0.129/yiju1.0-xiu/login.html').removeAttr('onclick');
            }


            // $('.wrap-top-r').html('<a href="">'+data.data[0].lname+'</a>|')



        }
    });

}



//登录注册









$.ajax({
    type:'post',
    url:'http://www.zhijunxing.com/yiju/queryHousesTop.action',
    dataType:'jsonp',
    success:function(data){
        console.log(data);
        if(data.success){
            var item='';
            for(var i in data.data){
                item+='<li class="tu"><div class="img-l pot img-common" ><a href="http://192.168.0.129/yiju1.0-xiu/yiju-details.html?id='+data.data[i].id+
                    '" ><img src="http://www.zhijunxing.com/yiju/upload/'+
                    data.data[i].photo.split(',')[0]+' "/></a><p>'+
                    data.data[i].villageName +'</p><div>'+
                    data.data[i].room+'　<span>'+data.data[i].price+
                    '</span>元/月</div></div></li>'

            }
            $('.img-wrap').append(item);

//后台只给了四张图所以轮播图不起作用
            $('.img-show-wrap').carousel({
                element: $('#banner'),
                time: 2000,
                left: $('.zuo'),
                right: $('.you'),
                oli: 4
            }, false, false);
        }else{
            alert('发生未知错误！')
        }
    }


});
























