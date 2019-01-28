var myChart = echarts.init(document.getElementById('main'));
// 目前有20个.
var colorList = ['#ff0000','#eb4310','#f6941d','#fbb417','#ffff00','#cdd541','#99cc33','#3f9337','#219167','#239676','#24998d','#1f9baa','#0080ff','#3366cc','#00DB00','#003366','#800080','#a1488e','#c71585','#bd2158'];
var setTime = 1000;
var setbmapzoom = 5;
var setcenter = [109.1162,34.2004]; // 非京区,西安
var setsymbolSizePoint = 3;
//var setcenter = [116.333101,39.994788]; // 二室
//var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var planePath = "";
var setsymbolSize = 8;
//var setsymbolSize = 30;
var geoCoordMap = {
    "爱奇艺(成都)":[104.083443,30.635777],
    "好未来":[116.326372,39.980894],
    "京东":[116.297492,39.97718],
    "Face++":[116.332075,39.990015],
    "北京三快在线科技有限公司":[116.485949,40.018063],
    "微软研究院":[116.316855,39.985387],
    "小米":[116.339389,40.036193],
    "中国电子科技集团公司信息科学研究院":[116.348852,39.970784],
    "CVTE":[111.744105,22.650558],
    "字节跳动":[116.359412,40.020242],
    "趣头条":[121.777637,29.34093],
    "第四范式":[116.321749,40.041961],
    "网易":[116.324297,39.989668],
    "阿里巴巴":[120.196333,30.19577],
    "IBM":[116.297255,40.051472],
    "电子所二部":[116.333101,39.994788],
    "美团":[116.522126,39.988609],
    "苏研院":[120.781594,31.295817],
    "百度":[116.307689,40.056974],
    "中国银行":[116.371656,39.913456],
    "软件所":[116.343594,39.985573],
    "深圳华为":[114.065755,22.655988],
    "滴滴":[112.893936,24.583058],
    "中信银行":[114.963632,24.237686],
    "工信部":[116.393503,39.913899],
    "三星":[116.65043,39.912375],
    "国家开发银行":[116.317902,39.861193],
    "Oracle":[116.295752,40.053932],
    "中国移动(沈阳)":[123.1238,42.1216],
    "中科院(青岛)":[120.4651,36.3373]
};
var BeijingToOtherPlaces_= [
    [{name:'电子所二部',value:95}, {name:"Face++",value:90}],
    [{name:'电子所二部',value:95}, {name:"网易",value:90}],
    [{name:'电子所二部',value:95}, {name:'微软研究院',value:90}],
    [{name:'电子所二部',value:95}, {name:"好未来",value:90}],
    [{name:'电子所二部',value:95}, {name:"京东",value:90}],


    [{name:'电子所二部',value:95}, {name:"北京三快在线科技有限公司",value:90}],

    [{name:'电子所二部',value:95}, {name:"小米",value:90}],
    [{name:'电子所二部',value:95}, {name:"中国电子科技集团公司信息科学研究院",value:90}],
    [{name:'电子所二部',value:95}, {name:"字节跳动",value:90}],
    [{name:'电子所二部',value:95}, {name:"第四范式",value:90}],

    [{name:'电子所二部',value:95}, {name:"IBM",value:90}],
    [{name:'电子所二部',value:95}, {name:"美团",value:90}],
    [{name:'电子所二部',value:95}, {name:"百度",value:90}],
    [{name:'电子所二部',value:95}, {name:"中国银行",value:90}],
    [{name:'电子所二部',value:95}, {name:"工信部",value:90}],
    [{name:'电子所二部',value:95}, {name:"三星",value:90}],
    [{name:'电子所二部',value:95}, {name:"国家开发银行",value:90}],
    [{name:'电子所二部',value:95}, {name:"Oracle",value:90}],
    [{name:'电子所二部',value:95}, {name:"软件所",value:90}]

];
var BeijingToOtherPlaces = [
    [{name:'电子所二部',value:95}, {name:'爱奇艺(成都)',value:90}],
    [{name:'电子所二部',value:95}, {name:"趣头条",value:190}],
    [{name:'电子所二部',value:95}, {name:"阿里巴巴",value:90}],
    [{name:'电子所二部',value:95}, {name:"苏研院",value:90}],
    [{name:'电子所二部',value:95}, {name:"CVTE",value:90}],
    [{name:'电子所二部',value:95}, {name:"滴滴",value:90}],
    [{name:'电子所二部',value:95}, {name:"深圳华为",value:90}],
    [{name:'电子所二部',value:95}, {name:"中信银行",value:90}],
    [{name:'电子所二部',value:95}, {name:"中国移动(沈阳)",value:90}],
    [{name:'电子所二部',value:95}, {name:"中科院(青岛)",value:90}]

];
var nameVsLogo = {
    "好未来":"img/logo/hwl.png",
    "京东":"img/logo/jd.png",
    "Face++":"img/logo/ks.png",
    "北京三快在线科技有限公司":"img/logo/mt.png",
    "微软研究院":"img/logo/wryjy.png",
    "小米":"img/logo/xm.png",
    "中国电子科技集团公司信息科学研究院":"img/logo/zgdz.png",
    "字节跳动":"img/logo/zjtd.png",
    "第四范式":"img/logo/dsfs.png",
    "网易":"img/logo/wy.png",
    "IBM":"img/logo/ibm.png",
    "爱奇艺(成都)":"img/logo/aqy.png",
    "趣头条":"img/logo/qtt.png",
    "阿里巴巴":"img/logo/albb.png",
    "美团":"img/logo/mtz.png",
    "苏研院":"img/logo/iecas.png",
    "百度":"img/logo/bd.png",
    "中国银行":"img/logo/zgyh.png",
    "工信部":"img/logo/gyhxxhb.png",
    "三星":"img/logo/sx.png",
    "电子所二部":"img/logo/kty.png",
    "国家开发银行":"img/logo/gjkfyh.jpg",
    "Oracle":"img/logo/jgw.jpg",
    "CVTE":"img/logo/cvte.jpg",
    "深圳华为":"img/logo/hw.png",
    "软件所":"img/logo/rjs.png",
    "滴滴":"img/logo/dd.png",
    "中国移动(沈阳)":"img/logo/timg.jpg",
    "中科院(青岛)":"img/logo/zky.jpg",
    "中信银行":"img/logo/zxyh.jpg",



};




var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res; //[{fromName: x, toName: x, coords: [x, x]}, ...]
};



function getMigrateData(yourData){ // yourData=[[{name:'北京'}, {name:'上海',value:95}], ...]
     var series = [];
     series.push(
        { // 第一层:飞机尾气特效层.

            type: 'lines',
            coordinateSystem: 'bmap', //用百度地图地理坐标.
            zlevel: 1,
            effect: {
                show: true,               // 动效是否显示
                period: 4,                // 飞机喷气的飞行速度,应该与飞机的速度一致.
                trailLength: 1.8,         // 特效尾迹的长度
                color: '#0EEDAD',            // 尾气特效颜色
                symbolSize: 8             // 特效大小
            },
            lineStyle: {
                normal: { // 第一层的lineStyle与第二层的lineStyle同时控制飞机航线,当width=0时,没有飞机航线.
                    color: "#0FE886",
                    width: 0,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                    curveness: -0.2       // 线条曲度
                }
            },
            data: convertData(yourData)
        },
        { // 第二层:飞机飞行特效

            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
//            symbol: ['none', 'arrow'],   // 用于设置箭头
//            symbolSize: 10, //箭头大小.
            effect: {
                show: true,
                period: 4, // 小飞机的飞行速度.
                trailLength: 0.7,
//                symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
                symbolSize: setsymbolSize, //飞机的大小.
//                color: '#CDCCCB', //小飞机的颜色.
                color: '#0EEDAD', //小飞机的颜色.
            },
            lineStyle: { // // 第一层的lineStyle与第二层的lineStyle同时控制飞机航线,当width=0时,没有飞机航线.
                normal: {
                    color: "#00FF00", //连线的颜色.
                    width: 2, //连线的宽度.
                    opacity: 0.6,
                    curveness: -0.2
                }
            },
            data: convertData(yourData)
        },
        { //第三层: 涟漪特效层.

            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,

            showEffectOn: 'render', //绘制完成后显示波纹
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },

            data: (function (yourData){ // [[], [], ...]
                  var returnData = [];
                  yourData.forEach(function(item, i){ // item=[{}, {}]

                     for(var j=0; j<item.length; j++){
                         var dataItem = item[j];
                         var temp = {
                            name: dataItem.name, //起始点.
                            value: geoCoordMap[dataItem.name].concat([dataItem.value]),  // 起点的位置 [x, y, v], v决定涟漪的颜色.
                            symbolSize: setsymbolSizePoint,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
                            itemStyle: { //这里可以定制每个点的颜色.
                                normal: {
                                    color: "#DC471C", //波纹效果的颜色,可以自己定制颜色.
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            rippleEffect: { //这里可以定制每个点的涟漪效果.
                                period:1,//动画速度
                                scale:5,//波纹的范围
                                brushType: 'fill'//波纹样式(fill填充型) stroke/fill
                            }
                        };

                       if(returnData.length > 0){
                          var counter = 0;
                          for(var jj=0; jj<returnData.length; jj++){
                              var itemObj = returnData[jj];
                              if(itemObj.name == dataItem.name){
                               counter ++;
                               break;
                             }
                          }
                          if(counter == 0){
                            returnData.push(temp);
                          }
                       }
                       else{
                         returnData.push(temp);
                       }
                     }

                  });
//                  console.log(returnData);
                  return returnData;


                })(yourData)
        }
     );

     return series; //[{}, {}, {}], 三个特效层.
}
//function getMigrateData(yourData){ // yourData=[[{name:'北京'}, {name:'上海',value:95}], ...]
//     var series = [];
//     series.push(
//        { // 第一层:飞机尾气特效层.
//
//            type: 'lines',
//            coordinateSystem: 'bmap', //用百度地图地理坐标.
//            zlevel: 1,
//            effect: {
//                show: true,               // 动效是否显示
//                period: 4,                // 飞机喷气的飞行速度,应该与飞机的速度一致.
//                trailLength: 1.8,         // 特效尾迹的长度
//                color: '#0EEDAD',            // 尾气特效颜色
//                symbolSize: 8             // 特效大小
//            },
//            lineStyle: {
//                normal: { // 正常情况下的线条样式
//                    color: "#0FE886",
//                    width: 0,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
//                    curveness: -0.2       // 线条曲度
//                }
//            },
////            data: []
//            data: convertData(yourData).map(function(jj){
//
//                   var data = jj;
//                   data.effect = {
//                    show: true,               // 动效是否显示
//                    period: 4,                // 飞机喷气的飞行速度,应该与飞机的速度一致.
//                    trailLength: 0.8,         // 特效尾迹的长度
//                    color: colorList[data.value/10],           //gradientColorList[data.value],            // 尾气特效颜色
//                    symbolSize: 8             // 特效大小
//                  };
//                  data.lineStyle = { // 航线样式.
//                    normal: { //连线的颜色.
//                        color: colorList[data.value/10], //gradientColorList[data.value],
//                        width: 0,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
////                        opacity: 1,
//                        curveness: -0.2       // 线条曲度
//                    }
//                  };
//                  return data;
//            })
//        },
//        { // 第二层:飞机飞行特效
//
//            type: 'lines',
//            coordinateSystem: 'bmap',
//            zlevel: 2,
////            symbol: ['none', 'arrow'],   // 用于设置箭头
////            symbolSize: 10, //箭头大小.
////            effect: {
////                show: true,
////                period: 2, // 小飞机的飞行速度.
////                trailLength: 0,
//////                symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
////                symbolSize: 10, //飞机的大小.
////                color: gradientColorList[random(1, 200)], //小飞机的颜色.
////            },
////            lineStyle: {
////                normal: {
////                    color: gradientColorList[random(1, 200)], //连线的颜色.
////                    width: 0, //连线的宽度.
////                    opacity: 1,
////                    curveness: -0.2
////                }
////            },
////            data: []
//            data: convertData(yourData).map(function(jj){
//               var data = jj;
//               data.effect = {
//                    show: true,
//                    period: 4, // 小飞机的飞行速度.
//                    trailLength: 0,
////                    symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
//                    symbolSize: 10, //飞机的大小.
//                    color: colorList[data.value/10], //小飞机的颜色.
//                };
//                data.lineStyle = { //飞机航线控制,颜色与目的地点的颜色相同.
//                    normal: {
//                        color: colorList[data.value/10], //连线的颜色.
//                        width: 0, //连线的宽度.
//                        opacity: 1, //隐身.
//                        curveness: -0.2
//                    }
//                };
//            return data;
//            })
//        },
//        { //第三层: 涟漪特效层.
//
//            type: 'effectScatter',
//            coordinateSystem: 'bmap',
//            zlevel: 2,
//            showEffectOn: 'render', //绘制完成后显示波纹
//            rippleEffect: {
//                brushType: 'stroke'
//            },
//            label: {
//                normal: {
//                    show: true,
//                    position: 'right',
//                    formatter: '{b}',
//                    textStyle:{
////                    color:'#FFFFFF',
//                      fontSize:15
//                    }
//                }
//            },
//
//            data: (function (yourData){ // [[], [], ...]
//                  var returnData = [];
//                  yourData.forEach(function(item, i){ // item=[{}, {}]
//
//                     for(var j=0; j<item.length; j++){
//                         var dataItem = item[j];
//                         var temp = {
//                            name: dataItem.name, //起始点.
//                            value: geoCoordMap[dataItem.name].concat([dataItem.value]),  // .concat([dataItem.value]) 起点的位置 [x, y, v], v决定涟漪的颜色.
//                            symbolSize: 15,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
//                            itemStyle: { //这里可以定制每个点的颜色.
//                                normal: {
//                                    color: "#0EEDAD", //colorList[dataItem.value/10], //波纹效果的颜色,可以自己定制颜色.
//                                    shadowBlur: 10,
//
////                                    shadowColor: "#0EEDAD"
//                                }
//                            },
//
//                            rippleEffect: { //这里可以定制每个点的涟漪效果.
//                                period:1,//动画速度
//                                scale:5,//波纹的范围
//                                //color: colorList[dataItem.value/10],
//                                brushType: 'fill'//波纹样式(fill填充型) stroke/fill
//                            }
//                        };
//
//                       if(returnData.length > 0){
//                          var counter = 0;
//                          for(var jj=0; jj<returnData.length; jj++){
//                              var itemObj = returnData[jj];
//                              if(itemObj.name == dataItem.name){
//                               counter ++;
//                               break;
//                             }
//                          }
//                          if(counter == 0){
//                            returnData.push(temp);
//                          }
//                       }
//                       else{
//                         returnData.push(temp);
//                       }
//                     }
//
//                  });
////                  console.log(returnData);
//                  return returnData;
//
//
//                })(yourData)
//        }
//
//     );
//
//     return series; //[{}, {}, {}], 三个特效层.
//}

//var series = getMigrateData(BeijingToOtherPlaces);
var option = {
    backgroundColor: '#404a59',
    title : {
        show: false,
        text: '模拟迁徙',
        subtext: '数据纯属虚构',
        left: 'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        show:false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['北京 Top10', '上海 Top10', '广州 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    dataRange: {
        show:false,
        min: 0,
        max: 100,
        x: 'right',
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        }
    },
    bmap: {
        center: setcenter, // 百度地图的中心点:成都.
        zoom: setbmapzoom,
        roam: true // 备注:用echarts设置mapStyle时,会出现小白格现象.而使用百度地图API:map.setMapStyle,则不会出现此情况.
    },
    series: getMigrateData([[{name:'电子所二部',value:95}, {name:'电子所二部',value:95}]])
};

myChart.setOption(option); //初始化配置.


var capitalVsProvince = {
    "沈阳":'辽宁',
    "南京":'江苏',
    "成都":'四川',
    "广州":'广东',
    "昆明":'云南',
    "南宁":'广西',
    "海口":'海南',
    "利雅得": '沙特阿拉伯',
    "长沙":'湖南',
    "拉萨":'西藏',
    '上海':'上海',
    "石家庄":'河北',
    "济南":'山东',
    "郑州":'河南',
    "合肥":'安徽',
    "西安": '陕西'
};

var map = myChart.getModel().getComponent('bmap').getBMap(); //获得百度地图API.
//通过取色器获取各省颜色
var regionList = [["沙特阿拉伯", "#F09ABD"], ["黑龙江","#F09ABD"],["吉林","#01933F"],["辽宁","#FAC300"],["内蒙古","#FCF502"],["河北","#F09ABD"],["北京","#FCF502"],["天津","#01933F"],["山东","#FCF502"],["江苏","#D8EDDA"],["上海","#B9B4C8"],["浙江","#FCF502"],["福建","#FAC300"],["台湾","#F09ABD"],["广东","#FCF502"],["香港","#F09ABD"],["澳门","#F09ABD"],["海南","#F09ABD"],["广西","#FAC300"],["云南","#FCF502"],["西藏","#B9B4C8"],["新疆","#FAC300"],["甘肃","#01933F"],["青海","#F09ABD"],["四川","#FAC300"],["贵州","#01933F"],["重庆","#B9B4C8"],["湖南","#F09ABD"],["江西","#01933F"],["湖北","#FCF502"],["安徽","#FAC300"],["河南","#B9B4C8"],["陕西","#F09ABD"],["山西","#01933F"],["宁夏","#FAC300"]];

//map.centerAndZoom("成都", 5); //取兰州作为中心点

map.addControl(new BMap.NavigationControl()); // 缩放控件
//map.addControl(new BMap.ScaleControl()); // 比例尺图标.
//map.enableScrollWheelZoom(); //使能鼠标滚动放大.
map.setMapStyle({
    features: ["road", "building", "water", "land"],//隐藏地图上的poi
    style: "midnight"  //设置地图风格 midnight:午夜蓝, dark:高端黑, 清新蓝风格(light) 清新蓝风格(light) googlelite(白) normal(白)
});

function getBoundary(provItem){ //获得边界函数. provItem=["黑龙江","#F09ABD"]

  var bdary = new BMap.Boundary(); // API:获得边界.
  var name = provItem[0]; // 名字.
  var fillColor = provItem[1]; // 颜色.

  bdary.get(name, function(rs){       //获取行政区域

    var count = 0;
    if(name == "沙特阿拉伯"){
      var shate = {boundaries:["41.98769531250005, 16.715625;42.059960937499994, 16.803515625000017;42.15781250000006, 16.570703125000023;41.80156250000002, 16.778759765624955;41.86044921875006, 17.002539062499977;41.98769531250005, 16.715625", "46.53144531250004, 29.09624023437499;47.433203125, 28.989550781250017;47.671289062499994, 28.53315429687504;48.442480468750006, 28.542919921874983;48.80898437499999, 27.895898437499966;48.797167968750074, 27.72431640625001;49.2375, 27.49272460937499;49.17509765625002, 27.43764648437505;49.40527343749997, 27.18095703124996;50.149804687499994, 26.66264648437499;50.00810546875002, 26.678515625000017;50.21386718750003, 26.30849609375005;50.15546875000004, 26.100537109374955;50.03164062499999, 26.11098632812505;50.55791015625002, 25.086669921875;50.66689453125005, 24.96381835937501;50.72558593749997, 24.869384765625057;50.80439453125004, 24.789257812499983;50.928320312500006, 24.595117187500023;50.96601562500004, 24.573925781249983;51.022753906250074, 24.56523437499999;51.09335937500006, 24.564648437499955;51.178027343750074, 24.586718750000017;51.26796875, 24.607226562500017;51.33847656250006, 24.564355468749994;51.41123046875006, 24.570800781250057;51.30986328125002, 24.340380859375017;51.56835937500003, 24.286181640625074;51.592578125000074, 24.07885742187503;52.55507812500005, 22.932812499999955;55.104296875000074, 22.621484375000023;55.185839843750074, 22.7041015625;55.64101562499999, 22.001855468749994;54.97734375000002, 19.995947265625006;51.977636718750006, 18.996142578125074;49.04199218750003, 18.58178710937503;48.17216796875002, 18.156933593749983;47.57958984374997, 17.448339843750034;47.44179687499999, 17.111865234375045;47.14355468749997, 16.946679687499966;46.97568359375006, 16.953466796875034;46.72763671875006, 17.26557617187501;45.5353515625001, 17.30205078124999;45.14804687500006, 17.427441406249955;43.91699218749997, 17.32470703124997;43.41796875000003, 17.516259765625023;43.19091796875003, 17.359375;43.16503906249997, 16.689404296874955;42.79931640624997, 16.37177734375001;42.29394531249997, 17.434960937499966;41.75, 17.88574218749997;41.22949218750003, 18.678417968749983;40.75917968750005, 19.755468750000034;40.080664062500006, 20.265917968750017;39.728320312500074, 20.390332031249955;39.27607421875004, 20.973974609375034;39.093554687500074, 21.31035156249999;39.14707031250006, 21.518994140624955;38.98789062500006, 21.88173828125005;39.06201171874997, 22.592187500000023;38.46416015625002, 23.71186523437504;37.91972656250002, 24.185400390625063;37.54306640625006, 24.291650390625023;37.18085937500004, 24.82001953125001;37.26630859375004, 24.960058593750034;37.14882812499999, 25.291113281249977;35.18046875000002, 28.03486328125004;34.722070312499994, 28.130664062500017;34.625, 28.064501953125017;34.95078125, 29.353515625;36.068457031250006, 29.200537109375006;36.28281250000006, 29.355371093750023;36.47607421874997, 29.49511718749997;36.59179687500003, 29.666113281250006;36.703906250000074, 29.831640624999977;36.75527343750005, 29.86601562499996;37.46923828125003, 29.995068359374955;37.49072265625003, 30.01171874999997;37.55361328125005, 30.14458007812496;37.63359375000002, 30.313281250000045;37.64990234374997, 30.330957031249994;37.669726562500074, 30.34814453125003;37.862890625, 30.44262695312503;37.98007812500006, 30.5;37.47900390624997, 31.007763671874955;37.10527343750002, 31.35517578125004;36.95859375000006, 31.491503906250017;37.215625, 31.55610351562501;37.49335937500004, 31.625878906250023;38.111425781250006, 31.78115234375005;38.37548828124997, 31.84746093749996;38.962304687499994, 31.99492187499999;38.99707031249997, 32.00747070312505;39.145410156249994, 32.12451171875;39.36865234374997, 32.09174804687498;39.70410156250003, 32.04252929687499;40.02783203124997, 31.995019531249994;40.3693359375001, 31.93896484375003;40.47890625000005, 31.89335937499999;42.07441406250004, 31.08037109374999;43.77373046875002, 29.84921875;44.71650390625004, 29.19360351562503;46.35644531250003, 29.06367187500001;46.53144531250004, 29.09624023437499"]};
      rs = shate;
    }
    count = rs.boundaries.length; //行政区域的点有多少个
    if (count === 0) {
        alert(name);
        return ;
    }

    for (var i = 0; i < count; i++) {
        var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1, strokeColor: "#aaaaaa", fillColor: fillColor}); //建立多边形覆盖物
        map.addOverlay(ply);  //添加覆盖物
    }
  });
}

function highLightRegion(distCityName, regionList, capitalVsProvince){
  for(var i=0; i<regionList.length; i++){
    var name = regionList[i][0]; // 省份名字. regionList[i]=["黑龙江","#F09ABD"]
    var item = null;
    var provName = capitalVsProvince[distCityName];

    if(provName == name){
      item = regionList[i];
      getBoundary(item); //给该地区着色. e.g. ["黑龙江","#F09ABD"]
      break;
    }
  }
}

var counterTime = 0;
var lenData = BeijingToOtherPlaces.length + 1;
var series = [];
function setTimeCallback(){
          counterTime = counterTime + 1;
          var regionName = '';
          if(counterTime > lenData){
            counterTime = 0;
            series.splice(0, series.length);
          }
          else{
              var temp = counterTime % lenData; //取整数.
              var List = BeijingToOtherPlaces.slice(temp-1, temp); //这样可以避免特效重叠.
//               console.log("List");
//               console.log(List);
               distCityName = BeijingToOtherPlaces[temp-1][1].name; //地区名称.
              var seriesList = getMigrateData(List); //List=[[], ...]
              for(var i=0; i<seriesList.length; i++){
                 series.push(seriesList[i]);
              }
          }
//          console.log("series");
//          console.log(series);

        myChart.setOption({ // 起飞.
            series: series   // 将之前处理的数据放到这里
        });
        //highLightRegion(distCityName, regionList, capitalVsProvince); //着色.
        var namePlace = distCityName;
        var geoCor = geoCoordMap[namePlace];
        var logo = nameVsLogo[namePlace];

        //var map = new BMap.Map("main"); // 创建地图实例[116.333101,39.994788]
        var point = new BMap.Point(geoCor[0], geoCor[1]);// 创建点坐标
        //map.centerAndZoom(point, 14);// 初始化地图，设置中心点坐标和地图级
        var myIcon = new BMap.Icon(logo, new BMap.Size(40, 40), {
        　　　　　　　　　　imageSize: new BMap.Size(40, 40), // 引用图片实际大小
        　　　　　　　　　　imageOffset:new BMap.Size(0,0),  // 图片相对视窗的偏移
    //                     offset: new BMap.Size(100, 25), // 指定定位位置
                         anchor: new BMap.Size(40, 20), //图片偏离坐标点的位置.
                         position:{
                                 lat : geoCor[0],
                                 lng : geoCor[1]
                         }
        　　　　　　　　});
        var marker = new BMap.Marker(point,{icon:myIcon});
        map.addOverlay(marker);


    }
var interval = null;

var flag = false;
var counterClick = 0;
$("#clickButton").click(function (e){

       flag = !flag;
       counterClick ++;
       if(flag){
         interval = setInterval(setTimeCallback, setTime);
       }
       else{
         clearInterval(interval);
       }

});

var geoCor = geoCoordMap["电子所二部"];
var logo = "img/logo/kty.png";

//var map = new BMap.Map("main"); // 创建地图实例[116.333101,39.994788]
var point = new BMap.Point(geoCor[0], geoCor[1]);// 创建点坐标
//map.centerAndZoom(point, 14);// 初始化地图，设置中心点坐标和地图级
var myIcon = new BMap.Icon(logo, new BMap.Size(40, 40), {
　　　　　　　　　　imageSize: new BMap.Size(40, 40), // 引用图片实际大小
　　　　　　　　　　imageOffset:new BMap.Size(0,0),  // 图片相对视窗的偏移
//                     offset: new BMap.Size(100, 25), // 指定定位位置
                 anchor: new BMap.Size(23, 50), //图片偏离坐标点的位置.
                 position:{
                         lat : geoCor[0],
                         lng : geoCor[1]
                 }
　　　　　　　　});
var marker = new BMap.Marker(point,{icon:myIcon});
map.addOverlay(marker);
