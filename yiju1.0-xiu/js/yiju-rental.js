/**
 * Created by Administrator on 2016/10/6.
 */

//头部下拉框


$('#pox').hover(function(){
    $('#hidden').show()
},
function(){
    $('#hidden').hide()
}
);

$('.city li a').click(function(){
    $('#shown-s').html($(this).html());
    $('#hidden').hide()
});


//点击“发布”弹出“房源发布成功”













