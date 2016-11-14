/**
 * Created by Administrator on 2016/10/10.
 */
//对勾
$('.agree-text i').toggle(function(){
        $('.agree-text p').show()
    },
    function(){
        $('.agree-text p').hide()
    }

);




//


var off = {};

$('form input[name=lname]').on({


    focus: function () {
        console.log(('000'));
        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur: function () {
        var val = $(this).val();
        isinput(/[\w]{6,20}/.test(val), this);
    }

}).focus();


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

function isinput(put, _this) {
    if (put) {
        $(_this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        });
        off[_this.className] = true
    } else {

        $(_this).parent().css({
            'border-color': '#981616'
        });
        off[_this.className] = false;
    }

}

$('form .submit').click(function () {

    var isform = true;
    for (var i in off) {
        if (!off[i]) {
            isform = false;
        }
    }

    if ($('.agree-text p').css('display') == 'none') {
        isform = false;

    }

    if (isform) {


        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
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
    }

})
