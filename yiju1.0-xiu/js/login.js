/**
 * Created by Administrator on 2016/10/10.
 */
/*
 $('.change-color').click(function(){
 $(this).css({
 borderColor:'#70ad46'
 })
 });*/

//对勾

$('.agree-text i').toggle(function () {
        $('.agree-text p').show()
    },
    function () {
        $('.agree-text p').hide()
    }
);


//封装的
/*

 var off={};


 $('form input[name=lname]').on({
 focus: function () {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 });
 },
 blur:function () {
 var val=$(this).val();
 isinput(/[\w]{6,20}/.test(val),this);
 }
 });






 $('form input[name=lpassword]').on({
 focus: function () {
 // console.log($(this).tagName);


 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur:function () {
 var val=$(this).val();
 isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val),this);

 }
 });
 $('form .input-3').on({
 focus: function () {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur:function () {
 var val=$(this).val();
 isinput(val===$('form input[name=lpassword]').val(),this);
 }
 });


 $('form input[name=lemail]').on({
 focus: function () {

 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur:function () {
 var val=$(this).val();
 isinput(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test(val),this);

 }
 });

 $('form input[name=lphone]').on({
 focus: function () {

 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur:function () {
 var val=$(this).val();
 isinput(/^1[0-9]{10}$/.test(val),this);
 }
 });

 function isinput(put,_this){
 if(put){
 $(_this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 });
 // console.log(_this.className);
 off[_this.className]=true
 }else {

 $(_this).parent().css({
 'border-color': '#981616'
 });
 off[_this.className]=false;
 //console.log($(_this).name());
 }

 }


 $('form input[name=lname]').focus();
 $('form .submit').click(function () {
 var isform=true;
 for (var i in off){
 if(!off[i]){
 isform=false;
 }
 }

 if(!$('.xieyi b').attr('class')==''){
 isform=false;

 }

 if(isform){
 //console.log($('form').serialize());
 $.ajax({
 type:'post',
 url:'http://www.zhijunxing.com/yiju/saveLandlord.action',
 dataType:'jsonp',
 data:$('form').serialize(),
 success: function (data) {
 alert(data.message);
 }
 })
 }

 })
 */





























//第一个input的用户名


/*
 $('form input[name=lname]').on({
 focus: function () {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur: function () {
 var val = $(this).val();
 if (/[\w]{6,20}/.test(val)) {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 } else {

 $(this).parent().css({
 'border-color': '#981616'
 })
 }
 }
 });

 //第二个设置密码

 $('form input[name=lpassword]').on({
 focus: function () {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur: function () {
 var val = $(this).val();
 if (/^[a-zA-Z0-9][\w]{5,19}/.test(val)) {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 } else {
 $(this).parent().css({
 'border-color': '#981616'
 })
 }
 }
 });


 //确认密码里面的val值和上面的设置密码里面的val一样的话，就验证通过

 $('form .input-3').on({
 focus: function () {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur: function () {
 var val = $(this).val();
 if (val === $('form input[name=lpassword]').val()) {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 } else {
 $(this).parent().css({
 'border-color': '#981616'
 })
 }
 }
 });


 $('form .input4').on({

 focus: function () {

 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur: function () {
 var val = $(this).val();
 if (/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test(val)) {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 } else {
 $(this).parent().css({
 'border-color': '#981616'
 })
 }
 }
 });



 $('form input[name=lphone]').on({
 focus: function () {

 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur: function () {
 var val = $(this).val();
 if (/^1[0-9]{10}$/.test(val)) {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 } else {
 $(this).parent().css({
 'border-color': '#981616'
 })
 }
 }
 });


 $('form .submit').click(function () {


 });

 */

















/*
 //有bug，就是不输入的时候提交也可以

 var off={};

 //
 $('form input[name=lname]').on({

 focus: function () {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 });
 },
 blur:function () {
 var val=$(this).val();
 isinput(/[\w]{6,20}/.test(val),this);
 }
 }).focus();






 $('form input[name=lpassword]').on({
 focus: function () {
 // console.log($(this).tagName);


 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur:function () {
 var val=$(this).val();
 isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val),this);

 }
 });
 $('form .input-3').on({
 focus: function () {
 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur:function () {
 var val=$(this).val();
 isinput(val===$('form input[name=lpassword]').val(),this);
 }
 });


 $('form input[name=lemail]').on({
 focus: function () {

 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur:function () {
 var val=$(this).val();
 isinput(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test(val),this);

 }
 });

 $('form input[name=lphone]').on({
 focus: function () {

 $(this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 })
 },
 blur:function () {
 var val=$(this).val();
 isinput(/^1[0-9]{10}$/.test(val),this);

 }
 });

 function isinput(put,_this){
 if(put){
 $(_this).parent().css({
 'border-color': 'rgb(112, 173, 70)'
 });
 // console.log(_this.className);
 off[_this.className]=true
 }else {

 $(_this).parent().css({
 'border-color': '#981616'
 });
 off[_this.className]=false;
 //console.log($(_this).name());
 }

 }



 $('form .submit').click(function () {
 var isform=true;

 for (var i in off){
 if(!off[i]){
 isform=false;
 }
 }

 /!*if(!$('.agree-text p i').attr('class')==''){
 isform=false;

 }*!/


 if($('.agree-text p i').css('display') == 'none'){
 isform=false;
 }


 if(isform){

 $.ajax({
 type:'post',
 url:'http://www.zhijunxing.com/yiju/saveLandlord.action',
 dataType:'jsonp',
 data:$('form').serialize(),
 success: function (data) {

 //alert(data.resultCode);

 if(data.resultCode=='0000'){
 alert('注册成功');
 /!* location.href='http://192.168.0.175/yiju/01/login.html'*!/
 }

 }
 })
 }

 });
 */




//完成的

var off = {};  //创建一个空对象，用来存储每个需要提交时验证是否通过，
//当每个input失去焦点的时候获取这个input的类，
// 当然这个类可以是其他的标识，他只起到的作用是用来甄别这个输入框正确的完成了输入，
// 然后把这个名字当对象的属性存储到off里面，值为true或false

$('form input[name=lname]').on({

    focus: function () {
        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur: function () {
        var val = $(this).val();
        isinput(/[\w]{6,20}/.test(val), this);
    }
}).focus();
//.focus()模拟获取焦点事件刷新网页第一个输入框就会显示绿色


$('form input[name=lpassword]').on({
    focus: function () {
        // console.log($(this).tagName);


        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val), this);

    }
});
$('form .input-3').on({
    focus: function () {
        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(val === $('form input[name=lpassword]').val(), this);
    }
});


$('form input[name=lemail]').on({
    focus: function () {

        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test(val), this);

    }
});

$('form input[name=lphone]').on({
    focus: function () {

        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(/^1[0-9]{10}$/.test(val), this);

    }
});

function isinput(put, _this) {
    if (put) {
        $(_this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        });
        // console.log(_this.className);
        off[_this.className] = true
    } else {

        $(_this).parent().css({
            'border-color': '#981616'
        });
        off[_this.className] = false;
        //console.log($(_this).name());
    }

}



//三种方法
$('form input.submit').click(function () {

    /*------------------------------------第一种-------------------------------------------*/
    //多项选择，一次全部判断，
    var isform = true;
    if (isform) {
        //所有的input都失去焦点

        $('form input').blur();

        //若协议中的对勾隐藏的话说明没有选择协议，就给isform赋值false提示“请选择”
        if ($('.agree-text p').css('display') == 'none') {
            isform = false;
            alert('请选择');
        }
    }
    //遍历出off对象中的所有的对象
    for (var i in off) {
        if (!off[i]) {
            isform = false;
        }
    }
    // console.log(isform);

    //若isform为true就执行提交
    if (isform) {

        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/saveLandlord.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {

                if (data.resultCode == '0000') {

                    $('.overlay').show();
                    $('.pop').show();

                    $('.cha').click(function () {

                        $('.pop').hide();
                    });

                    //点击弹出框里面的“马上去登录”，执行下面的ajax，自动获取注册时的用户信息
                    //然后直接就登录了
                    $('.pop p').eq(2).click(function(){


                        $.ajax({
                            type: 'post',
                            url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
                            dataType: 'jsonp',
                            data: {
                                lname:$('form input[name=lname]').val(),
                                lpassword:$('form input[name=lpassword]').val()

                            },
                            success: function (data) {

                                if (data.resultCode == '0000') {
                                    //alert('登录成功');
                                    //登录成功之后跳转到首页
                                    location.href = 'http://192.168.0.129/yiju1.0-xiu/yiju-1.html'


                                } else {
                                    alert('登录失败')
                                }
                            }
                        })


                    });


                    //alert('注册成功');
                    //location.href = 'http://192.168.0.129/yiju1.0-xiu/yiju-1.html'
                }else {
                    alert("注册失败！")
                }

            }
        })
    }

});








/*———————————第一种开始—————————————*/

/*


$('form .submit').click(function () {

    //多项选择，一次全部判断，
    var isform = true;
    if (isform) {
        if (!(/[\w]{6,20}/.test($('form input[name=lname]').val()))) {
            $('form input[name=lname]').blur();
        }
        if (!(/^[a-zA-Z0-9][\w]{5,19}/.test($('form input[name=lpassword]').val()))) {
            $('form input[name=lpassword]').blur();
        }
        if (!($('form .input-3').val() === $('form input[name=lpassword]').val()) || $('form .input-3').val() == '') {
            $('form .input-3').blur();
        }
        if (!(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test($('form input[name=lemail]').val()))) {
            $('form input[name=lemail]').blur();
        }
        if (!(/^1[0-9]{10}$/.test($('form input[name=lphone]').val()))) {
            $('form input[name=lphone]').blur();
        }

        if ($('.agree-text p').css('display') == 'none') {
            isform = false;
            alert('请选择');
        }
    }
    for (var i in off) {
        if (!off[i]) {
            isform = false;
        }
    }
    console.log(isform);
    if (isform) {
        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/saveLandlord.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {
                alert(data.resultCode);
                if (data.resultCode == '0000') {
                    location.href = 'http://192.168.0.175/yiju/01/login.html'
                }
            }
        })
    }
})
*/

/*———————————第一种结束—————————————*/



/*_______________第二种开始___________________*/

/*
$('form .submit').click(function () {

    //多项选择，一次全部判断，
    var isform = true;
    if (isform) {
        $('form input').blur();

        if ($('.agree-text p').css('display') == 'none') {
            isform = false;
            alert('请选择');
        }
    }
    for (var i in off) {
        if (!off[i]) {
            isform = false;
        }
    }
    console.log(isform);
    if (isform) {
        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/saveLandlord.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {
                alert(data.resultCode);
                if (data.resultCode == '0000') {
                    location.href = 'http://192.168.0.175/yiju/01/login.html'
                }
            }
        })
    }
})*/

/*_______________第二种结束___________________*/


/*_______________第三种开始___________________*/

//第三种写法---单项选择每次只会判断一个
/*

$('form .submit').click(function () {


    if (!(/[\w]{6,20}/.test($('form input[name=lname]').val()))) {
        $('form input[name=lname]').blur();
    } else if (!(/^[a-zA-Z0-9][\w]{5,19}/.test($('form input[name=lpassword]').val()))) {
        $('form input[name=lpassword]').blur();
    } else if (!($('form .input-3').val() === $('form input[name=lpassword]').val())) {
        $('form .input-3').blur();
    } else if (!(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test($('form input[name=lemail]').val()))) {
        $('form input[name=lemail]').blur();
    } else if (!(/^1[0-9]{10}$/.test($('form input[name=lphone]').val()))) {
        $('form input[name=lphone]').blur();
    } else if (!$('.xieyi b').attr('class') == '') {
        alert('请选择');
    } else {
        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/saveLandlord.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {
                alert(data.resultCode);
                if (data.resultCode == '0000') {
                    location.href = 'http://192.168.0.175/yiju/01/login.html'
                }

            }
        })
    }
})
*/

/*_______________第三种结束___________________*/



