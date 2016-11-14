/**
 * Created by Administrator on 2016/10/6.
 */
//头部下拉框


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

























//编辑资料的切换

$('.contents p').eq(0).click(function(){
    $(this).css({
        backgroundColor:'#cccccc'
    });
    $('.contents p').eq(1).css({
        backgroundColor:'#eeeeee'
    });
    $('.contents p').eq(2).css({
        backgroundColor:'#eeeeee'
    });
    $('.portrait').show();
    $('.nickname').hide();
    $('.change-pw').hide();
});

$('.contents p').eq(1).click(function(){
    $(this).css({
        backgroundColor:'#cccccc'
    });
    $('.contents p').eq(0).css({
        backgroundColor:'#eeeeee'
    });
    $('.contents p').eq(2).css({
        backgroundColor:'#eeeeee'
    });
    $('.portrait').hide();
    $('.nickname').show();
    $('.change-pw').hide();
});


$('.contents p').eq(2).click(function(){
    $(this).css({
        backgroundColor:'#cccccc'
    });
    $('.contents p').eq(0).css({
        backgroundColor:'#eeeeee'
    });
    $('.contents p').eq(1).css({
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







