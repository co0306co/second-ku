/**
 * Created by Administrator on 2016/10/6.
 */

//鼠标移入隐藏的部分会出现，移出后就又隐藏
$('#shown').hover(function(){
    $('#hidden').show()
} ,function(){
    $('#hidden').hide()
}
);

$('#hidden').hover(function(){
    $(this).show()
},function(){
    $(this).hide()
}
);

//点击隐藏部分的城市名称会出现在上面
$('#hidden .city li').click(function(){
    $('#shown').html($(this).html());
    $('#hidden').hide();
});



//鼠标移入隐藏的部分会出现，移出后就又隐藏
$('#shown').hover(function(){
        $('#hidden').show()
    } ,function(){
        $('#hidden').hide()
    }
);

$('#hidden').hover(function(){
        $(this).show()
    },function(){
        $(this).hide()
    }
);

//点击隐藏部分的城市名称会出现在上面
$('#hidden .city li').click(function(){
    $('#shown').html($(this).html());
    $('#hidden').hide();
});


//弹出删除


$('.show-price-box button').click(function(){
    $('.pop').show()
})

$('.pop p .cha').click(function(){
    $('.pop').hide()
})

//鼠标移入移出效果


$('.kuang-l-text p').hover(function(){
    $(this).addClass('bg');
    $(this).css({
        color:'#fff'
    });


},
function(){
    $(this).removeClass('bg');
    $(this).css({
        color:'#000'
    });
}
);




//点击对应页面
//我的发布

$('.kuang-l-text p').eq(0).click(function(){

    var pageNo = 1;

    $('.kuang-r').show();
    $('.my-release').hide();
    $('.history').hide();
    $('.edit').hide();


/* 我的收藏页码*/

    Collect(pageNo);

    /*委托事件*/

    $('.page-box').on('click', 'a', function () {
        // console.log($('.page-box a').last().prev().html());

        if ($(this).html() == '上一页') {
            if (!(pageNo == 1)) {
                pageNo -= 1;
                //若当前页码不是第一页，没点击一下'上一页'，当前页码-1
                //再把当前页码传输到函数中，即调用函数

                Collect(pageNo);

            }
        } else if ($(this).html() == '下一页') {
            //若当前页码不等于最后一个a标签“下一页”的同级的前一个a标签即总页码的最后一个页码的时候
            //点击“下一页”的时候，当前页码就+1
            if (!(pageNo == $('.page-box a').last().prev().html())) {
                pageNo += 1;

                //调用函数
                Collect(pageNo);
            }
        } else {
            //页码等于当前点击的页码

            pageNo = parseInt($(this).html());
            //调用函数
            Collect(pageNo);
        }

    });


});







$('.kuang-l-text p ').eq(1).click(function(){

    $('.kuang-r').hide();
    $('.my-release').show();
    $('.history').hide();
    $('.edit').hide();


    ///* 我的收藏*/
    //Collect(pageNo);



});
$('.kuang-l-text p ').eq(2).click(function(){
    $('.kuang-r').hide();
    $('.my-release').hide();
    $('.history').show();
    $('.edit').hide()


});
$('.kuang-l-text p ').eq(3).click(function(){
    $('.kuang-r').hide();
    $('.my-release').hide();
    $('.history').hide();
    $('.edit').show()


});



//编辑资料的切换

$('.head').click(function(){
    $(this).css({
        backgroundColor:'#cccccc'
    });
    $('.nicheng').css({
        backgroundColor:'#eeeeee'
    });
    $('.xiu').css({
        backgroundColor:'#eeeeee'
    });


    $('.portrait').show();
    $('.nickname').hide();
    $('.change-pw').hide();

});

$('.nicheng').click(function(){
    $(this).css({
        backgroundColor:'#cccccc'
    });
    $('.head').css({
        backgroundColor:'#eeeeee'
    });
    $('.xiu').css({
        backgroundColor:'#eeeeee'
    });




    $('.portrait').hide();
    $('.nickname').show();
    $('.change-pw').hide();

});



$('.xiu').click(function(){

    $(this).css({
        backgroundColor:'#cccccc'
    });
    $('.head').css({
        backgroundColor:'#eeeeee'
    });
    $('.nicheng').css({
        backgroundColor:'#eeeeee'
    });

    $('.portrait').hide();
    $('.nickname').hide();
    $('.change-pw').show();


});



//我的收藏的背景鼠标移入移出变背景

$('.kuang-l-text p').hover(
    function(){
        $(this).addClass("bg");
        $(this).css({color:'#fff' });
    },function(){
        $(this).removeClass("bg");
        $(this).css({color:'#000' });
    }
);







/*———————————页码—————————————————*/
/*-----------------------------------------我的收藏---------------------------------------*/
/*


 for(var  i=100;i<200;i++){
 $.ajax({
 type: 'get',
 url: 'http://www.zhijunxing.com/yiju/addCollect.action',
 dataType: 'jsonp',
 data: {
 hid: i
 },
 success: function (data) {
 console.log(data);
 }
 });
 }
 */


//pageNo当前页

function Collect(pageNo) {

    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/queryCollectHouses.action',
        dataType: 'jsonp',
        data: {
            pageNo: pageNo
        },
        success: function (data) {

            //假设总页数为10，当前页码为pageNo，允许每次只能显示5个页码
            //1.pageNo<=5时显示“上一页，1,2,3,4。。。10”
            //2.pageNo>5时又分两种情况1.1当前页为5为1。。。4，5，6。。。10
            //当前页为6时1。。。5,6,7。。。10，
            //当前页为7时，1。。。6，7,8。。。10
            //当前页为8时，1。。。7，8，9,10
            //当前页为9时，1。。。7，8,9,10
            //当前页为10时，1。。。7，8,9,10


            console.log(data.rowCount);
            if (data.success) {
                var a;
                //后台给出没2条信息是一个页面，
                //data.rowCount表示总的信息的条数，data.rowCount / 2表示一共有多少个页面
                //即使最后只有1条信息也要占一个页面，所以这里向上取整
                //
                if (Math.ceil(data.rowCount / 2) <= 5) {
                    a = '<a href="###" class="next-page">上一页</a>';
                    for (var i = 1; i <= Math.ceil(data.rowCount / 2); i++) {
                        if (i == pageNo) {
                            a += '<a href="###" class="page-checked">' + i + '</a>'
                        } else {
                            a += '<a href="###">' + i + '</a>'
                        }
                    }

                    a += '<a href="###" class="next-page">下一页</a>';
                //    假设最大页码是10
                //    若当前页码<=3出现的情况是  “上一页1,2,3,4。。。10下一页”
                } else if (pageNo <= 3) {
                    a = '<a href="###" class="next-page">上一页</a>';
                    for (var i = 1; i <= 4; i++) {
                        if (i == pageNo) {
                            //当i=当前页码的时候把当前页码变色，证明点击的是哪一页
                            a += '<a href="###" class="page-checked">' + i + '</a>'
                        } else {
                            a += '<a href="###">' + i + '</a>'
                        }
                    }
                    a += '<b> ··· </b><a href="###">' + Math.ceil(data.rowCount / 2) + '</a><a href="###" class="next-page">下一页</a>';
                //    假设一共分布10页的时候，当前页码+2>=10时
                //    再分不同的情况1.若最大页码10-3
                } else if (pageNo + 2 >= Math.ceil(data.rowCount / 2)) {
                    a = '<a href="###" class="next-page">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<b> ··· </b>';
                    for (var i = 3; i >= 0; i--) {
                        if (Math.ceil(data.rowCount / 2) - i == pageNo) {
                            a += '<a href="###" class="page-checked">' + (Math.ceil(data.rowCount / 2) - i) + '</a>'
                        } else {
                            a += '<a href="###">' + (Math.ceil(data.rowCount / 2) - i) + '</a>'
                        }
                    }
                    a += '<a href="###" class="next-page">下一页</a>';
                } else if (pageNo + 2 < Math.ceil(data.rowCount / 2)) {
                    a = '<a href="###" class="next-page">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<b> ··· </b>' +
                        '<a href="###">' + (parseInt(pageNo) - 1) + '</a>' +
                        '<a href="###" class="page-checked">' + pageNo + '</a>' +
                        '<a href="###">' + (parseInt(pageNo) + 1) + '</a>' +
                        '<b> ··· </b>' +
                        '<a href="###">' + Math.ceil(data.rowCount / 2) + '</a>' +
                        '<a href="###" class="next-page">下一页</a>';
                }
                $('.page-box').html(a);

                var item = '';
                for (var i = 0; i < data.data.length; i++) {

                    item +='<li class="show f-clear"><div class="show-box f-clear">' +
                        '<em class="show-box-p"><a href="###" style="background-image: url("http://www.zhijunxing.com/yiju/upload/'+ data.data[i].photo.split(',')[0]+'")"></a></em>' +
                        '<em class="show-text">' +
                        '<p class="show-text-t"><a href="###">'+data.data[i].hcondition+'</a></p>' +
                        '<p class="show-text-m"><a href="###">'+data.data[i].room+'</a><s></s><a href="###">'+data.data[i].rentway+'</a><s></s><a href="###">'+data.data[i].hlevel+'</a><s></s> <a href="###">'+data.data[i].floor+'/'+data.data[i].countfloor+'层</a></p>' +
                        '<p class="show-text-d"><i></i><a href="###">'+data.data[i].address+'</a></p>' +
                        '<p class="show-text-bo"><button><a href="###">'+data.data[i].hlevel+'</a></button><button><a href="###">'+data.data[i].paymethod+'</a></button></p>' +
                        '</em>'+
                        '<em class="show-price" class="f-clear">' +
                        '<div class="show-price-box f-clear">' +
                        '<p class="delete"><button>删除 <span>×</span></button></p>' +
                        '<p><span>'+data.data[i].price+'</span>/元</p>' +
                        '<div>'+data.data[i].addtime+'</div>' +
                        '</div>' +
                        '</em>'+
                        '</div></li>';

                }

                //console.log(data.data[0].address);
                $('.my-favs .change').html(item);


            } else {

                alert('您没有收藏房源！');
            }
        }
    })

}



/*—————————————个人中心--上传头像部分—————————————————*/

//先调用函数
login();

//
function login() {

    //提交登录信息
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/loginSession.action',
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if (data.success) {
                //若登录成功
                //在页面中插入2个标签，一个是‘昵称’一个是“退出”


                var a = '<a href="###">' + data.data[0].lname + '</a>|<a href="###" onclick="quitLogin()" >退出</a>';
                //然后把这个两个标签插入到父级标签内

                $('.enter').append(a);
                //把左上角的“我的昵称也变成注册的用户名”
                $('.kuang-l-top p').html(data.data[0].lname);

                //如果data.data[0].lphoto图片信息为空的话就是null它的布尔值为false，
                //若不为空的话左上角的头像设置，img的属性src添加后台给的图片的地址
                if (data.data[0].lphoto) {
                    $('.kuang-l-top img').attr('src', 'http://www.zhijunxing.com/yiju/upload/' + data.data[0].lphoto)
                } else {
                    alert('没有图片');
                }


            } else {

                location.href = 'http://192.168.0.129/yiju1.0-xiu/register.html';

            }


            // $('.wrap-top-r').html('<a href="">'+data.data[0].lname+'</a>|')


        }
    });

}
//——————————————————————————



//当上传文件的input选择文件“改变的时候”就执行下面的函数


$('.portrait').on('change', 'input', function () {
    if (typeof FileReader == 'undefined') {
        alert("检测到您的浏览器不支持FileReader对象！");
    }
    var reader = new FileReader(),
        val = this.files[0];
    reader.readAsDataURL(val);
    reader.onload = function () {
        $('.portrait img').attr('src', reader.result);
    }
});




//用这种方法的话只能在内容区上传一个图片，想要替换图片的话救护从上往下排列
/*
$('.portrait input').change(function () {

    //FileReader在IE8以下中不支持会弹出undefined
    if (typeof FileReader == 'undefined') {
        alert("检测到您的浏览器不支持FileReader对象！");
    }

    //声明一个对象
    var reader= new FileReader(),
        //
        val=this.files[0];
    reader.readAsDataURL(val);

    //在reader对象准备就绪之后再来执行函数
    reader.onload=function(){

        //“选择照片”中的那个照片给这个照片出一个后台给的地址
        $('.portrait img').attr('src',reader.result);
    }
});*/


//点击“上传按钮”想后台提交数据
$('#save').click(function () {

    $.ajaxFileUpload({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
        secureuri: false,
        fileElementId: 'uploadPhoto',
        async: true,
        cache: true,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
    });
    //超时调用，点击“上传按钮”1秒之后调用函数login（）也就是1s后左上角的图片也变

    //当把图片保存之后再去选择图片的时候不能选择了，在控制台中看到
    //input原来有ev事件，现在没了，说明input变了，所以改用下面的“委托事件”--给input的父级
    //绑定事件
    //setTimeout(login, 1000)




    setTimeout(function () {
        //location.href = 'http://192.168.0.175/yiju/01/edit.html';
    }, 1000);//一秒后在从新获取一次登录信息



});



// 点击“退出”返回到首页

function quitLogin(){

    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if(data.resultCode=='0000'){
                location.href = 'http://192.168.0.129/yiju1.0-xiu/yiju-1.html';
            }

        }
    });

}

/*—————————————个人中心--上传头像部分结束—————————————————*/




/*-----------------------------------------修改昵称---------------------------------------*/
$('.nickname input').on({

    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur: function () {
        var val = $(this).val();
        if (/[\w]{6,20}$/.test(val)) {
            $('.nickname button').click(function () {
                $.ajax({
                    type: 'post',
                    url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
                    dataType: 'jsonp',
                    data: {
                        lname: val
                    },
                    success: function (data) {
                        console.log(data);
                        if (data.resultCode == '0000') {
                            login();
                        }
                    }
                })
            })
        }
    }
});



/*-----------------------------------------修改密码---------------------------------------*/


$('.change-pw input').on({

    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    }
});

$('.change-pw input').eq(0).blur(function () {
    var val = $(this).val();
    console.log(val == pass);

    if (!(val == pass)) {
        $(this).css({
            'border-color': '#981616'
        });
    }
});
$('.change-pw input').eq(1).blur(function () {
    var val = $(this).val();
    if (!(/^[a-zA-Z0-9][\w]{5,19}/.test(val))) {
        $(this).css({
            'border-color': '#981616'
        });
    }

});
$('.change-pw input').eq(2).blur(function () {
    var val = $(this).val();
    if (!(val == '' ? false : val === $('.change-pw input').eq(1).val())) {
        $(this).css({
            'border-color': '#981616'
        });
    }

});
$('.change-pw button').click(function () {
    var off = true;
    //        for (var i=0; i<$('.name-t1 input').length;i++){
    //
    //        }
    console.log($('.change-pw input').eq(0).css('border-top-color'));


});















