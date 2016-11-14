/**
 * Created by Administrator on 2016/10/6.
 */
/*$(".all-l a").hover(
    function () {
        $(this).addClass("hover");
        $(this).css({color:'#fff' });
    },
    function () {
        $(this).removeClass("hover");
        $(this).css({color:'#000' });
    }
);*/






/*


$('.wrap').eq(0).mouseover(

    function(){
        //alert('www');
    $('.hidden').eq(0).show();
});

$('.wrap').eq(0).mouseout(

    function(){
        //alert('www');
        $('.hidden').eq(0).hide();
    });


$('.wrap').eq(1).mouseover(

    function(){
        //alert('www');
        $('.hidden').eq(1).show();
    });

$('.wrap').eq(1).mouseout(

    function(){
        //alert('www');
        $('.hidden').eq(1).hide();
    });



$('.hidden p').click(function(){

        //$('.pox').eq(0).html($(this).html())
        $(this).parent().siblings('.pox').html($(this).html())
});

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



/*____筛选房屋类型____*/
//第一个下拉框
$('.frist-bb').hover(function(){
    $('.frist-bbb').show()

},function(){
        $('.frist-bbb').hide()
}
);

$('.frist-bbb').hover(function(){
        $(this).show()
    },function(){
        $(this).hide()
    }
);


//移入p标签会添加背景色


$('.hiddenx p').hover(function(){
    $(this).addClass('bbg');
    $(this).css({color:'#fff' });
},function(){
        $(this).removeClass("bbg");
        $(this).css({color:'#000' });
}
);

//点击p标签添加到上面的类型中
$('.frist-bbb p').click(function(){
    $('.frist-bb').html($(this).html());
    $('.frist-bbb').hide()
}
);

//第二个下拉框
$('.last-cc').hover(function(){
        $('.last-ccc').show()

    },function(){
        $('.last-ccc').hide()
    }
);
$('.last-ccc').hover(function(){
        $(this).show()
    },function(){
        $(this).hide()
    }
);
//点击p标签添加到上面的类型中
$('.last-ccc p').click(function(){
        $('.last-cc').html($(this).html());
        $('.last-ccc').hide()
    }
);

//鼠标移入移出背景变化

$('.all .all-wrap .all-l a').hover(function(){
        $(this).addClass('bbg');
        $(this).css({color:'#fff' });
},function(){
        $(this).removeClass("bbg");
        $(this).css({color:'#000' });
}

);




//点击切换页面
$('.all-l a').eq(0).click(function(){

    //点击“全部”出现页码
    var pageNo=1;
    Collect(pageNo);


    $('.whole').show();
    $('.housing').hide();
    $('.personal').hide();
    $('.agent').hide();


    //委托事件
    $('.page-box').on('click', 'a', function () {
        // console.log($('.page-box a').last().prev().html());
        if ($(this).html() == '上一页') {
            if (!(pageNo == 1)) {
                pageNo -= 1;
                Collect(pageNo);
            }
        } else if ($(this).html() == '下一页') {
            if (!(pageNo == $('.page-box a').last().prev().html())) {
                pageNo += 1;
                Collect(pageNo);
            }
        } else {
            pageNo = parseInt($(this).html());
            Collect(pageNo);
        }

    });


});




$('.all-l a').eq(1).click(function(){
    $('.whole').hide();
    $('.housing').show();
    $('.personal').hide();
    $('.agent').hide();

});


$(' .all-l a').eq(2).click(function(){
    $('.whole').hide();
    $('.housing').hide();
    $('.personal').show();
    $('.agent').hide();

});

$(' .all-l a').eq(3).click(function(){
    $('.whole').hide();
    $('.housing').hide();
    $('.personal').hide();
    $('.agent').show();
});


//昵称，退出


$.ajax({ type:'post',
    url:'http://www.zhijunxing.com/yiju/loginSession.action',
    dataType:'jsonp',
    success:function(data){
        console.log(data);
        if(data.success){
            $('.enter a').eq(0).html('欢迎'+data.data[0].lname).attr('href','http://192.168.0.129/yiju1.0-xiu/yiju-my-center.html');
            $('.enter a').eq(1).html('退出').attr({onclick:'quitLogin()',href:'http://192.168.0.129/yiju1.0-xiu/yiju-1.html'})
        }

    }
});

//点击筛选价格
$('.all-price a').click(function(){
    $(this).addClass('abg');
    $(this).siblings().removeClass('abg');
     var price=$(this).attr("name");
     var pageNo=1;
     Collect(pageNo,price);
});
//点击筛选几室

$('.all-rental a').click(function(){
    $(this).addClass('abg');
    $(this).siblings().removeClass('abg');

    var shi=$(this).attr("name");
    var price=$('.all-price a').attr("name" );
    var pageNo=1;
    Collect(pageNo,price,shi);
});



//点击筛选地址

//有错误

$('.frist-bbb p').click(function(){


   /* $(this).addClass('abg');
    $(this).siblings().removeClass('abg');*/


    var pageNo=1;

    var price=$('.all-price a').attr("name" );
    var shi=$('.all-rental a').attr("name");
    var room=$(this).html();

    Collect(pageNo,price,shi,room);


});







//用js 添加列表



function Collect(pageNo,price,shi,room) {
    //console.log(pageNo);
    //console.log(price);
    //console.log(shi);
    console.log(room);
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/queryHousesBySql.action',
        dataType: 'jsonp',
        data: {
            pageNo: pageNo,
            price:price,
            shi:shi
        },
        success: function (data) {

            console.log(data);
            if (data.success) {
                var a;
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
                } else if (pageNo <= 3) {
                    a = '<a href="###" class="next-page">上一页</a>';
                    for (var i = 1; i <= 4; i++) {
                        if (i == pageNo) {
                            a += '<a href="###" class="page-checked">' + i + '</a>'
                        } else {
                            a += '<a href="###">' + i + '</a>'
                        }
                    }
                    a += '<b> ··· </b><a href="###">' + Math.ceil(data.rowCount / 2) + '</a><a href="###" class="next-page">下一页</a>';
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


                //var datas = data.data;


                for (var i = 0; i < data.data.length; i++) {
                    console.log(data.data.length);
                    item +='<li class="show f-clear"><div class="show-box f-clear">' +
                        '<em class="show-box-p"><a href="###" style="background-image: url("http://www.zhijunxing.com/yiju/upload/'+ data.data[i].photo.split(',')[0]+'")"></a></em>' +
                        '<em class="show-text">' +
                        '<p class="show-text-t"><a href="###">'+data.data[i].hcondition+'</a><i><a href="###"></a></i><s><a href="###"></a></s></p>' +
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
                $('.whole').html(item);


            } else {

                alert('您没有收藏房源！');
            }
        }
    })

}



