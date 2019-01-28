//var dom = document.getElementById("allmap");
//    var myChart = echarts.init(dom);
//    var geoCoordMap = {
//        '牛街北口':[116.370029,39.895302],
//        '牛街南口':[116.370119,39.88933],
//        '四条路口':[116.369055,39.892354],
//        '输入胡同':[116.372527,39.892465],
//        '吐鲁番餐厅':[116.370506,39.893743],
//        '西城区牛街街道公共服务大厅':[116.370434,39.893221],
//        '牛街清真超市':[116.369855,39.89312],
//        '聚宝源':[116.369819,39.892671],
//        '老城伊':[116.369891,39.891169],
//        '圣芳商厦':[116.369742,39.890851],
//        '牛街礼拜寺':[116.37131,39.891591],
//    };
//
//
//
//    var BJData=[];
//    for(var x in geoCoordMap){
////        if(x=='牛街礼拜寺')
////            continue;
//        BJData.push(
//            [{
//                name: x,
//                value: Math.random()*100
//            }, {
//                name: '牛街礼拜寺'
//            }]
//
//        )
//    }
//
//    var convertData = function (data) {
//        var res = [];
//        for (var i = 0; i < data.length; i++) {
//            var dataItem = data[i];
//            var fromCoord = geoCoordMap[dataItem[0].name];
//            var toCoord = geoCoordMap[dataItem[1].name];
//            if (fromCoord && toCoord) {
//
//                res.push({
//                    fromName: dataItem[0].name,
//                    toName: dataItem[1].name,
//                    coords: [fromCoord, toCoord],
//                });
//            }
//        }
//        return res;
//    };
//    var convertData2 = function (data) {
//        var res = [];
//        for (var i = 0; i < data.length; i++) {
//            var dataItem = data[i];
//            var fromCoord = geoCoordMap[dataItem[1].name];
//            var toCoord = geoCoordMap[dataItem[0].name];
//            if (fromCoord && toCoord) {
//                res.push({
//                    fromName: dataItem[1].name,
//                    toName: dataItem[0].name,
//                    coords: [fromCoord, toCoord]
//                });
//            }
//        }
//        return res;
//    };
//
//    var covertColor = function(data){
//        var value= data[1].value;
//        var result = 'aqua';
//        if(value>80){
//            result = '#ff3333';
//        }else if(value>60){
//            result = 'orange';
//        }else if(value>40){
//            result = 'yellow';
//        }else if(value>60){
//            result = 'lime';
//        }
//        return result;
//    };
//
//    var color = ['#56e88c', '#ffa022'];
//    var series = [];
//    [['礼拜寺', BJData]].forEach(function (item, i) {
//        series.push(
//            {
//                name: item[2],
//                type: 'lines',
//                zlevel: 2,
//                coordinateSystem: 'bmap',
//                effect: {
//                    show: true,
//                    period: 6,
//                    trailLength: 0.1,
//
//                    symbol:'arrow',
//                    symbolSize: 10
//                },
//                lineStyle: {
//                    normal: {
//                        color: '#60ff44',
//                        width: 2,
//                        opacity: 0.4,
//                        curveness: 0.2
//                    }
//                },
//                //这个属性的作用是对图标的数据的说明，如同公告栏一样，他的强大之处在于可以自定义显示的样式
//                tooltip : {
//                    trigger: 'item',
//                    formatter: function (obj) {
//                        var shtml = '';
//                        var tempKey = 0;
//                        if (obj.data.fromName == '牛街北口'){
//                            tempKey = 1;
//                        }else if (obj.data.fromName == '牛街南口'){
//                            tempKey = 2;
//                        }else if (obj.data.fromName == '四条路口'){
//                            tempKey = 3;
//                        }else if (obj.data.fromName == '输入胡同'){
//                            tempKey = 4;
//                        }
//                        for (var key in peopleOut.data){
//                            if (key == tempKey){
//                                shtml+= '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
//                                shtml+= obj.data.fromName + '至'+obj.data.toName
//                                shtml+= '</div>'
//                                shtml+='流入： ' + peopleIn.data[key] + '人<br>'
//
//                            }else continue;
//                        }
//                        return shtml;
//                    }
//                },
//                data: convertData(item[1])
//            },
//            {
//                name: item[1],
//                type: 'effectScatter',
//                coordinateSystem: 'bmap',
//                zlevel: 2,
//                rippleEffect: {
//                    brushType: 'stroke'
//                },
//                label: {
//                    normal: {
//                        show: true,
//                        position: 'right',
//                        formatter: '{b}',
//                        textStyle:{
//                            fontSize:18
//                        }
//                    }
//                },
//
//                symbolSize: function (val) {
//                    return 3 + val[2] / 10;
//                },
//                itemStyle: {
//                    normal: {
//                        color: '#FBF90E',
//                        textStyle:{
//                            fontSize:1
//                        }
//                    }
//                },
//                tooltip : {
//                    trigger: 'item',
//                    formatter: function (obj) {
//                        var shtml ='';
//                        var tempKey = 0;
//                        if (obj.data.name == '牛街北口'){
//                            tempKey = 1;
//                        }else if (obj.data.name == '牛街南口'){
//                            tempKey = 2;
//                        }else if (obj.data.name == '四条路口'){
//                            tempKey = 3;
//                        }else if (obj.data.name == '输入胡同'){
//                            tempKey = 4;
//                        }
//                        for (var key in peopleIn.data){
//                            if (key == tempKey){
//                                shtml+= '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
//                                shtml+= obj.data.name + '   人流量'
//                                shtml+= '</div>'
//                                shtml+= '流入： ' +peopleIn.data[key] + '人<br>'
//                                shtml+='流出： ' + peopleOut.data[key]+ '人<br>'
//                                if (peopleIn.data[key] - peopleOut.data[key] < 0)
//                                    shtml+='街道人数： ' + (peopleOut.data[key] - peopleIn.data[key])+ '人'
//                                else
//                                    shtml+='街道人数： ' + (peopleIn.data[key] - peopleOut.data[key])+ '人'
//                            }else continue;
//                        }
//                        return shtml;
//                    }
//                },
//                data: item[1].map(function (dataItem) {
//
//                    return {
//                        name: dataItem[0].name,
//                        value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
//                    };
//                })
//            },
//            {
//                name: item[2],
//                type: 'lines',
//                zlevel: 2,
//                coordinateSystem: 'bmap',
//                effect: {
//                    show: true,
//                    period: 6,
//                    trailLength: 0.1,
//
//                    symbol:'arrow',
//                    symbolSize:10
//                },
//                lineStyle: {
//                    normal: {
//                        color: '#ff3333',
//                        width: 2,
//                        opacity: 0.4,
//                        curveness: 0.3
//                    }
//                },
//                tooltip : {
//                    trigger: 'item',
//                    formatter: function (obj) {
//                        var shtml = '';
//                        var tempKey = 0;
//                        if (obj.data.toName == '牛街北口'){
//                            tempKey = 1;
//                        }else if (obj.data.toName == '牛街南口'){
//                            tempKey = 2;
//                        }else if (obj.data.toName == '四条路口'){
//                            tempKey = 3;
//                        }else if (obj.data.toName == '输入胡同'){
//                            tempKey = 4;
//                        }
//                        for (var key in peopleIn.data){
//                            if (key == tempKey){
//                                shtml+= '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
//                                shtml+= obj.data.toName + '至'+obj.data.fromName
//                                shtml+= '</div>'
//                                shtml+='流出： ' + peopleOut.data[key] + '人<br>'
//
//                            }else continue;
//                        }
//                        return shtml;
//                    }
//                },
//                data: convertData2(item[1])
//            }
//        );
//    });
//
//    option = {
//        backgroundColor: 'black',
//        title : {
//
//            left: 'center',
//            textStyle : {
//                color: 'white'
//            }
//        },
//        tooltip : {
//            trigger: 'item',
//        },
//        //此属性是作用是定义地图的样式
//        bmap: {
//            center:  [116.370793,39.891444],
//            zoom: 18,
//            roam: true,
//            mapStyle: {
//                'styleJson': [
//                    {
//                        'featureType': 'water',
//                        'elementType': 'all',
//                        'stylers': {
//                            'color': '#031628'
//                        }
//                    },
//                    {
//                        'featureType': 'land',
//                        'elementType': 'geometry',
//                        'stylers': {
//                            'color': '#000102'
//                        }
//                    },
//                    {
//                        'featureType': 'highway',
//                        'elementType': 'all',
//                        'stylers': {
//                            'visibility': 'off'
//                        }
//                    },
//                    {
//                        'featureType': 'arterial',
//                        'elementType': 'geometry.fill',
//                        'stylers': {
//                            'color': '#000000'
//                        }
//                    },
//                    {
//                        'featureType': 'arterial',
//                        'elementType': 'geometry.stroke',
//                        'stylers': {
//                            'color': '#0b3d51'
//                        }
//                    },
//                    {
//                        'featureType': 'local',
//                        'elementType': 'geometry',
//                        'stylers': {
//                            'color': '#000000'
//                        }
//                    },
//                    {
//                        'featureType': 'railway',
//                        'elementType': 'geometry.fill',
//                        'stylers': {
//                            'color': '#000000'
//                        }
//                    },
//                    {
//                        'featureType': 'railway',
//                        'elementType': 'geometry.stroke',
//                        'stylers': {
//                            'color': '#08304b'
//                        }
//                    },
//                    {
//                        'featureType': 'subway',
//                        'elementType': 'geometry',
//                        'stylers': {
//                            'lightness': -70
//                        }
//                    },
//                    {
//                        'featureType': 'building',
//                        'elementType': 'geometry.fill',
//                        'stylers': {
//                            'color': '#000000'
//                        }
//                    },
//                    {
//                        'featureType': 'all',
//                        'elementType': 'labels.text.fill',
//                        'stylers': {
//                            'color': '#857f7f'
//                        }
//                    },
//                    {
//                        'featureType': 'all',
//                        'elementType': 'labels.text.stroke',
//                        'stylers': {
//                            'color': '#000000'
//                        }
//                    },
//                    {
//                        'featureType': 'building',
//                        'elementType': 'geometry',
//                        'stylers': {
//                            'color': '#022338'
//                        }
//                    },
//                    {
//                        'featureType': 'green',
//                        'elementType': 'geometry',
//                        'stylers': {
//                            'color': '#062032'
//                        }
//                    },
//                    {
//                        'featureType': 'boundary',
//                        'elementType': 'all',
//                        'stylers': {
//                            'color': '#465b6c'
//                        }
//                    },
//                    {
//                        'featureType': 'manmade',
//                        'elementType': 'all',
//                        'stylers': {
//                            'color': '#022338'
//                        }
//                    },
//                    {
//                        'featureType': 'label',
//                        'elementType': 'all',
//                        'stylers': {
//                            'visibility': 'off'
//                        }
//                    }
//                ]
//            }
//        },
//        series: series
//    };
//
//    //Echarts图层显示的内容定义在了option属性中，通过setOption()属性将内容赋值到Echarts对象上。
//    if (option && typeof option === "object") {
//
//        myChart.setOption(option, true);
//        //var bmap =  new BMap.Map("container",{enableMapClick: false});
//        //获取地图对象
//        var bmap = myChart.getModel().getComponent('bmap').getBMap();
//        //这个方法在此的作用是暴力的关掉的地图上点击某位置后弹出的覆盖窗口
//        setInterval(function(){
//            bmap.closeInfoWindow();
//        }, 1);
//        ToolbarControl.prototype = new BMap.Control();
//        ToolbarControl.prototype.initialize = function(map)
//        {
//            var div = document.createElement('DIV');
//            div.style.cssText = 'padding:4px;clear:both;display:inline-block;';
//            var shtml = '';
//            shtml += '<div class="btn-group">';
//            shtml += '<img style="cursor:pointer" src="../resources/img/camera.png" onclick="showMonitor()"><br>';
//            shtml += '<img style="cursor:pointer" src="../resources/img/Aalertor3.png" onclick="alertorchange()" id="alertor">';
//            shtml += '</div>';
//            div.innerHTML = shtml;
//            map.getContainer().appendChild(div);
//            return div;
//        }
////        bmap.setMapType(BMAP_PERSPECTIVE_MAP);     //修改地图类型为3D地图
////        bmap.setCurrentCity("北京市");  //设置当前城市
//        bmap.addControl(new BMap.MapTypeControl());
//        bmap.addControl(new ToolbarControl())
//
//        ;
//    }
//
//    // 自定义控件(此控件的目的是在地图上添加覆盖物)
//    function ToolbarControl()
//    {
//        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;//定义覆盖物在地图上的位置(右上方)
//        this.defaultOffset = new BMap.Size(10, 40);//定义覆盖物在地图上的偏移量
//    }
//    // 自定义控件
//    function ToolbarControl2()
//    {
//        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
//        this.defaultOffset = new BMap.Size(10, 150);
//    }
//    var markerArray = [];
//    function showMonitor(){
//
//        if(monitorShow){
//            var points = [
//                [116.370102,39.889124],
//                [116.370022,39.89505],
//                [116.372525,39.892665],
//                [116.368753,39.892350],
//                [116.370492,39.893951],
//                [116.371705,39.891719],
//
//                [116.370425,39.89339],
//                [116.369581,39.893127],
//                [116.369612,39.892702],
//                [116.369576,39.891221],
//                [116.369536,39.89083]
//
//
//            ];
//            for( var i = 0;i < points.length; i++){
//                var myIcon = new BMap.Icon("../resources/img/camera.png", new BMap.Size(60, 60), {
//                    // 指定定位位置
//                    offset: new BMap.Size(10, 25),
//                });
//                var point = new BMap.Point(points[i][0],points[i][1]);
//                var marker = new BMap.Marker(point,{icon: myIcon});
//
//                if (points[i][0]){
//                    //添加监听事件(属于百度API)
//                    marker.addEventListener("click", function(){
//                        var bmap = myChart.getModel().getComponent('bmap').getBMap();
//                        ToolbarControl2.prototype = new BMap.Control();
//                        ToolbarControl2.prototype.initialize = function(map)
//                        {
//                            var div = document.createElement('DIV');
//                            div.style.cssText = 'padding:4px;clear:both;display:inline-block;position:relative;';
//                            var shtml = '';
//                            shtml += '<div onclick="remove();"  style="color:#FFF;text-align:right;font-size:18px;font-weight:900;height:30px;width:30px;position:absolute;top:20px;left:450px;z-index:20; cursor:pointer;">X</div><video src="../resources/viedo/viedo2.mp4" width="480" height="360" controls="controls"  style="margin-top:40px;"></video><br><video src="../resources/viedo/viedo1.mp4" width="480" height="360" controls="controls"></video>';
//                            div.innerHTML = shtml;
//                            map.getContainer().appendChild(div);
//                            return div;
//                        }
//                        bmap.addControl(new ToolbarControl2())
//                    });
//                }else if (points[i][0] == 116.370102){
//                    marker.addEventListener("click", function(){
//                        var bmap = myChart.getModel().getComponent('bmap').getBMap();
//                        ToolbarControl2.prototype = new BMap.Control();
//                        ToolbarControl2.prototype.initialize = function(map)
//                        {
//                            var div = document.createElement('DIV');
//                            div.style.cssText = 'padding:4px;clear:both;display:inline-block;position:relative;';
//                            var shtml = '';
//                            shtml += '<div onclick="remove();"  style="color:#FFF;text-align:right;font-size:18px;font-weight:900;height:30px;width:30px;position:absolute;top:20px;left:450px;z-index:20; cursor:pointer;">X</div><video src="../resources/viedo/viedo3.mp4" width="480" height="360" controls="controls" style="margin-top:40px;"></video><br>';
//                            div.innerHTML = shtml;
//                            map.getContainer().appendChild(div);
//                            return div;
//                        }
//                        bmap.addControl(new ToolbarControl2())
//                    });
//                }else{}
//                markerArray.push(marker);
//                //此方法的作用是在地图上添加覆盖物(属于百度API)
//                bmap.addOverlay(marker);
//            }
//
//            monitorShow = false;
//        }else{
//            for (var j = 0; j < markerArray.length; j++){
//
//                bmap.removeOverlay(markerArray[j]);
//            }
//            monitorShow = true;
//        }
//    }
//    function alertorchange(){
//        if (alertorShow){
//            $("#alertor").attr("src","../resources/img/Aalertor.gif");
//            alertorShow = false;
//        }else {
//            $("#alertor").attr("src","../resources/img/Aalertor3.png");
//            alertorShow = true;
//        }
//
//    }
//
//    function remove(){
//        $(this).remove();
//        $("video").remove();
//    }
//
//var myIcon = new BMap.Icon("person.png", new BMap.Size(60, 60), {
//                    // 指定定位位置
//                    offset: new BMap.Size(10, 25),
//                });
//
//var points = [116.370029,39.895302];
//var point = new BMap.Point(points[0],points[1]);
//var marker = new BMap.Marker(point,{icon: myIcon});
//bmap.addOverlay(marker);//将标注添加到地图中

//var map = new BMap.Map("map"); // 创建地图实例
//var point = new BMap.Point(116.404, 39.915); // 创建点坐标
//map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
//
//map.addControl(new BMap.NavigationControl());
//map.addControl(new BMap.ScaleControl());
//map.setDefaultCursor("crosshair");
//map.addEventListener("click", function(e){   //点击事件
//    if(!e.overlay){
//        var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
//                        offset: new BMap.Size(10, 25), // 指定定位位置
//                        imageOffset: new BMap.Size(0, 0 - 10 * 25) // 设置图片偏移
//                    });
//        var marker=new BMap.Marker(e.point,{icon:myIcon});
//        map.removeOverlay(preMarker);
//        map.addOverlay(marker);
//        preMarker=marker;
//    }
//});


