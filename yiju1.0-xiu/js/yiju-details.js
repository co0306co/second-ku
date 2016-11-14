/**
 * Created by Administrator on 2016/9/26.
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


/*

//地图
// 百度地图API功能
var map = new BMap.Map("allmap");    // 创建Map实例
map.centerAndZoom('郑州', 11);  // 初始化地图,设置中心点坐标和地图级别
map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
//map.setCurrentCity("郑州");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
*/




//地图

/*
var map = new BMap.Map("allmap");
map.centerAndZoom("郑州", 12);
map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //右下角，打开

var localSearch = new BMap.LocalSearch(map);
localSearch.enableAutoViewport(); //允许自动调节窗体大小

function searchByStationName() {

    map.clearOverlays();//清空原来的标注
    var keyword = document.getElementById("text_").value;
    localSearch.setSearchCompleteCallback(function (searchResult) {

        var poi = searchResult.getPoi(0);
        console.log(poi);
        document.getElementById("result_").value = poi.point.lng + "," + poi.point.lat;
        map.centerAndZoom(poi.point, 13);
        var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地方对应的经纬度
        map.addOverlay(marker);
        var content = document.getElementById("text_").value + "<br/><br/>经度：" + poi.point.lng + "<br/>纬度：" + poi.point.lat;
        var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
        marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
        // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    });
    localSearch.search(keyword);
}
*/

//昵称，退出



$.ajax({
    type:'post',
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





//在JS中插入内容
//没有

var href= window.location.href;
console.log(href);
console.log(href.substring((href.indexOf('=') + 1), href.length));

$.ajax({
    type:'get',
    url:'http://www.zhijunxing.com/yiju/queryHousesByid.action',
    dataType:'jsonp',
    data:{
        id:href.substring((href.indexOf('=')+1), href.length)
    //    获取的是id数字
    },
    success:function(data){
        if(data.success){
        var item='';

       item+=''

        }
        $('.exhibition').html(item);
    }

});

//登录之后再all中查找id信息


/*{
 "data": [
 {
 "address": "郑州市金水区福彩路",
 "addtime": "2016\/09\/01 10
 :53:18",
 "area": "90",
 "countfloor": "16",
 "direction": "南",
 "features": "交通便利 干净卫生 家具齐全",
 "floor": "6",
 "furniture": "床,衣柜,沙发,书桌,电视,冰箱,微波炉,电磁炉,洗衣机,空调,热水器,宽带,暖气",
 "hcondition": "温馨小区2室1厅1卫",
 "hdescribe": null,
 "hlatitude": null,
 "hlevel": "精装修",
 "hlongitude": null,
 "id": 75,
 "lid": 13,
 "linkman": "王先生",
 "linkphone": "187653443624",
 "paymethod": "押一付三",
 "photo": "14726983986540.jpg,14726983986591.png,14726983986612.jpg,14726983986683.jpg",
 "price": "3600",
 "region": null,
 "rentway": "整租",
 "room": "2室1厅1卫",
 "shi": "2",
 "state": 0,
 "tittle": "交通便利 干净卫生 家具齐全",
 "top": 1,
 "type": "个人",
 "villageName": "温馨小区"
 }
 ],
 "success": true
 }*/







