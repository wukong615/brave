/**
* 百度地图 JS
*
* @author ccq
**/


// 模拟数据
var dataArr = [ { "id" : 43 , "userId" : 3 , "spaceName" : "肯德基" , "address1" : "北京海淀区大钟寺" , "province" : "北京市" , "city" : "海淀区" , "county" : "四道口路133号" , "accomNum" : 36 , "status" : 2 , "lat" : "39.965569" , "lng" : "116.339882" , "picPath" : "cosharing/space/user_3/hourse_43/hourse/20170823_110835_00449.jpg" , "description" : "爱莎酒店覅哈啥地方" , "price" : 12.0},
        { "id" : 44 , "userId" : 3 , "spaceName" : "大钟寺中坤广场" , "address1" : "大钟寺中坤广场东区" , "province" : "北京市" , "city" : "海淀区" , "county" : "大钟寺中坤广场" , "accomNum" : 36 , "status" : 2 , "lat" : "39.966148" , "lng" : "116.342469" , "picPath" : "cosharing/space/user_3/hourse_43/hourse/20170823_110835_00449.jpg" , "description" : "真实的人挺好的" , "price" : 24.0},
        { "id" : 45 , "userId" : 3 , "spaceName" : "桔子酒店" , "address1" : "北下关街道环保宿舍" , "province" : "北京市" , "city" : "海淀区" , "county" : "桔子酒店" , "accomNum" : 36 , "status" : 2 , "lat" : "39.963145" , "lng" : "116.339876" , "picPath" : "cosharing/space/user_3/hourse_43/hourse/20170823_110835_00449.jpg" , "description" : "丹甫股份会大风" , "price" : 36.0},
        { "id" : 46 , "userId" : 3 , "spaceName" : "北京广播电视台" , "address1" : "北下关街道皂君庙4号中招国际" , "province" : "北京市" , "city" : "海淀区" , "county" : "北京广播电视台" , "accomNum" : 36 , "status" : 2 , "lat" : "39.962505" , "lng" : "116.339679" , "picPath" : "cosharing/space/user_3/hourse_43/hourse/20170823_110835_00449.jpg" , "description" : "从VB心脑血管发的啥" , "price" : 48.0},
        { "id" : 47 , "userId" : 3 , "spaceName" : "北京开放大学" , "address1" : "北下关街道北京开放大学" , "province" : "北京市" , "city" : "海淀区" , "county" : "北京开放大学" , "accomNum" : 36 , "status" : 2 , "lat" : "39.961551" , "lng" : "116.340623" , "picPath" : "cosharing/space/user_3/hourse_43/hourse/20170823_110835_00449.jpg" , "description" : "阿萨德发货员对方告诉对方" , "price" : 50.0},
        { "id" : 48 , "userId" : 3 , "spaceName" : "中央财经大学" , "address1" : "北下关街道中央财经大学" , "province" : "北京市" , "city" : "海淀区" , "county" : "中央财经大学" , "accomNum" : 36 , "status" : 2 , "lat" : "39.959495" , "lng" : "116.342233" , "picPath" : "cosharing/space/user_3/hourse_43/hourse/20170823_110835_00449.jpg" , "description" : "东方宾馆冯小刚仨人" , "price" : 62.0},
        { "id" : 49 , "userId" : 3 , "spaceName" : "北京国卫医院" , "address1" : "北下关街道四道口小区" , "province" : "北京市" , "city" : "海淀区" , "county" : "北京国卫医院" , "accomNum" : 36 , "status" : 2 , "lat" : "39.96114" , "lng" : "116.34528" , "picPath" : "cosharing/space/user_3/hourse_43/hourse/20170823_110835_00449.jpg" , "description" : "阿道夫更好的任天野沪电股份" , "price" : 78.0}
        ];
var jsonPath = "http://test.e-paipian.com/html5/bmap/scripts/",
    jsonResource = {
        "all": {
            "name": "所有地区",
            "path": "resource/all.json"
        },
        "dongcheng": {
            "name": "东城区",
            "path": "resource/dongcheng.json"
        },
        "fengtai": {
            "name": "丰台区",
            "path": "resource/fengtai.json"
        },
        "daxing": {
            "name": "大兴区",
            "path": "resource/daxing.json"
        },
        "miyun": {
            "name": "密云县",
            "path": "resource/miyun.json"
        },
        "pinggu": {
            "name": "平谷区",
            "path": "resource/pinggu.json"
        },
        "yanqing": {
            "name": "延庆县",
            "path": "resource/yanqing.json"
        },
        "huairou": {
            "name": "怀柔区",
            "path": "resource/huairou.json"
        },
        "fangshan": {
            "name": "房山区",
            "path": "resource/fangshan.json"
        },
        "changping": {
            "name": "昌平区",
            "path": "resource/changping.json"
        },
        "chaoyang": {
            "name": "朝阳区",
            "path": "resource/chaoyang.json"
        },
        "haidian": {
            "name": "海淀区",
            "path": "resource/haidian.json"
        },
        "shijingshan": {
            "name": "石景山区",
            "path": "resource/shijingshan.json"
        },
        "xicheng": {
            "name": "西城区",
            "path": "resource/xicheng.json"
        },
        "tongzhou": {
            "name": "通州区",
            "path": "resource/tongzhou.json"
        },
        "shunyi": {
            "name": "顺义区",
            "path": "resource/shunyi.json"
        }
    };
(function() {
    // 实例化地图
    var map = new BMap.Map("container"),
    	geo = new BMap.Geolocation(),  // 返回用户当前的位置
    	marker,
        pointView = [],
        uLng,
        uLat;
    // 没有坐标, 显示全中国. 设置地图中心点及缩放级别(不设置地图将不显示)
    map.centerAndZoom(new BMap.Point(103.388611,35.563611), 5);

    // 返回用户当前位置
    geo.getCurrentPosition(function(callback) {
    	if(this.getStatus() == BMAP_STATUS_SUCCESS) {
    		console.log("locate success")
            pointView = [callback.point];
            uLng = callback.point.lng;
            uLat = callback.point.lat;
            // 将定位点设为地图中心点, 并改变缩放级别
            map.centerAndZoom(callback.point, 12);
            marker = new BMap.Marker(callback.point);
            map.addOverlay(marker);
            marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            map.panTo(callback.point);
            // 根据坐标点设置地图视野(坐标点需是Array类型)
            map.setViewport(pointView);
            // 重新设置地图缩放等级
            map.setZoom(map.getZoom() - 1);
            console.log(callback);
            console.log("=================")
            console.log(map.getViewport());
            // 延迟初始化地图数据
            setTimeout(function() {
                doGetSpaceListForMap("dongcheng");
            }, 1000);
    	}else {
            alert("locate failed")
        }
    }, {
    	enableHighAccuracy: true
    });
    // 开启滚轮缩放
    map.enableScrollWheelZoom();
    // 打开信息窗口
    var opts = {
                width : 0,     // 信息窗口宽度
                height: 0,     // 信息窗口高度
                title : "空间信息" , // 信息窗口标题
                enableMessage:true//设置允许信息窗发送短息
               },
        openInfo = function(content,e) {
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象 
            map.openInfoWindow(infoWindow,point); //开启信息窗口
        };
    // 标注点击事件
    var handleClickMarker = function(content, marker) {
        marker.addEventListener("click", function(e) {
            openInfo(content,e)}
        );
    };
    // 批量添加marker
    var addPointMarkerOnMap = function(data) {
        var len = data.length, addMarker, markerPoint, markerPointArr = new Array(),
            iconDiy = new BMap.Icon("images/mark_b.png", new BMap.Size(19, 31));    // 设置自定义图标及尺寸
        // 清除覆盖物
        map.clearOverlays();
        // 我的位置
        map.addOverlay(marker);
        // 遍历添加
        for(var i = 0; i < len; i++) {
            markerPoint = new BMap.Point(data[i].lng, data[i].lat);
            // 设置marker, 同时添加自定义图标
            addMarker = new BMap.Marker(markerPoint, {icon:iconDiy});
            map.addOverlay(addMarker);
            handleClickMarker("名字："+data[i].spaceName+"<br />地址："+data[i].address1, addMarker);
            markerPointArr[i] = new BMap.Point(data[i].lng, data[i].lat);
        }
        // markerPointArr[markerPointArr.length] = new BMap.Point(uLng, uLat);
        // 让所有点在视野范围内
        map.setViewport(markerPointArr);
    };

    // 测试数据: 2秒后执行
    setTimeout(function() {
        console.log("add marker");
        // addPointMarkerOnMap(dataArr);
    }, 2000);

    // 相关dom对象
    var $msgTxtSearch = $("#txtSearchMessage"),
        addressCopy = document.getElementById("addressCopy"),
        txtCoordinate = document.getElementById("txtCoordinate");
        
        // 获取空间列表(地图展现)
    var doGetSpaceListForMap = function(arg) {
            startLoadAnimate();
            var datas, datasL = 0, district = arg ? jsonPath + jsonResource[arg].path : "";
            console.log('地区 :::::::::::::::: ', jsonResource[arg].name);
            $.getJSON(district, res => {
                console.log('获取空间列表 >>>>>>>>>> : ', res)
                if(res.ret) {
                    datas = res.data;
                    datasL = datas.length;

                    if(datasL > 0) {
                        // 1秒后添加标注
                        setTimeout(function() {
                            addPointMarkerOnMap(datas);
                            endLoadAnimate();
                        }, 1000);
                        
                        // for(var i = 0; i < datasL; i++) {
                        //     setTimeout(function() {
                        //         console.log("log ... "+i);
                        //     }, i*500);
                        // }
                    }else {
                        alertDialog("没有空间信息", "系统提示");
                    }
                }
            });
        },
        // 提示信息
        fnShowSearchMessage = function(txt) {
            setTimeout(function() {
                $msgTxtSearch.fadeOut("slow", function() {
                    $msgTxtSearch.addClass("hide");
                });
            }, 900);
            $msgTxtSearch.html(txt).removeClass("hide").css("display", "block");
        },
        // 获取空间列表(页面展现)
        doGetSpaceListForHTML = function() {
            startLoadAnimate();
            var datas, datasl, str = "", district = jsonPath + jsonResource["all"].path, dataIndex = 20, lng, lat;
            console.log('地区 :::::::::::::::: ', jsonResource["all"].name);
            $.getJSON(district, res => {
                console.log('获取空间列表 >>>>>>>>>> : ', res)
                if(res.ret) {
                    datas = res.data;
                    datasl = datas.length;
                    // save interface-datas
                    $(".interface-datas")[0].dataset.index = dataIndex;
                    $(".interface-datas").text(JSON.stringify(datas));

                    if(datasl > 0) {
                        for(var i = 0; i < dataIndex; i++) {
                            lng = datas[i].lng ? datas[i].lng : "-";
                            lat = datas[i].lat ? datas[i].lat : "-";
                            str += "<tr>"+
                                        "<td class='space-id' data-id='" + datas[i].id + "'>" + (i+1) + "</td>"+
                                        "<td class='space-type'>" + datas[i].spaceType + "</td>"+
                                        "<td class='space-name'>" + datas[i].spaceName + "</td>"+
                                        "<td class='space-district'>" + datas[i].spaceCounty + "</td>"+
                                        "<td class='space-address1'>" + datas[i].address1 + "</td>"+
                                        "<td class='space-address2' style='display: none;'>" + datas[i].address2 + "</td>"+
                                        "<td class='space-coordinate'>" + lng+","+lat + "</td>"+
                                        // "<td class='space-opers'>"+
                                        //     "<button class='btn btn-default edit-space-btn' data-id='" + datas[i].id + "' data-lng='116.341224' data-lat='39.964635'>编辑</button>"+
                                        //     "<button class='btn btn-danger del-space-btn' data='" + datas[i].id + "'>删除</button>"+
                                        //     "<button class='btn btn-warning get-coordinate-btn' data='" + datas[i].id + "'>坐标</button>"+
                                        //     "<button class='btn btn-success update-coordinate-btn' data='" + datas[i].id + "' disabled='disabled'>更新</button>"+
                                        // "</td>"+
                                    "</tr>";
                        }
                        $("#spaceListTbl").find("thead").nextAll().remove();
                        $("#spaceListTbl").append(str);
                        $(".mui-backdrop2").show();
                        $(".space-list-layer").show();
                        $(".page-box").fadeIn();
                        setTimeout(function() {
                            endLoadAnimate();
                        }, 800);
                    }else {
                        alertDialog("没有空间", "系统提示");
                    }
                }
            });
        },
        // 分页展示空间列表
        pageStep = 20,
        doShowSpaceListByPage = function(start, end) {
            var datas = JSON.parse($(".interface-datas").text()), str = "", lng, lat;
            for(var i = start; i < end; i++) {
                lng = datas[i].lng ? datas[i].lng : "-";
                lat = datas[i].lat ? datas[i].lat : "-";
                str += "<tr>"+
                            "<td class='space-id' data-id='" + datas[i].id + "'>" + (i+1) + "</td>"+
                            "<td class='space-type'>" + datas[i].spaceType + "</td>"+
                            "<td class='space-name'>" + datas[i].spaceName + "</td>"+
                            "<td class='space-district'>" + datas[i].spaceCounty + "</td>"+
                            "<td class='space-address1'>" + datas[i].address1 + "</td>"+
                            "<td class='space-address2' style='display: none;'>" + datas[i].address2 + "</td>"+
                            "<td class='space-coordinate'>" + lng+","+lat + "</td>"+
                            // "<td class='space-opers'>"+
                            //     "<button class='btn btn-default edit-space-btn' data-id='" + datas[i].id + "' data-lng='116.341224' data-lat='39.964635'>编辑</button>"+
                            //     "<button class='btn btn-danger del-space-btn' data='" + datas[i].id + "'>删除</button>"+
                            //     "<button class='btn btn-warning get-coordinate-btn' data='" + datas[i].id + "'>坐标</button>"+
                            //     "<button class='btn btn-success update-coordinate-btn' data='" + datas[i].id + "' disabled='disabled'>更新</button>"+
                            // "</td>"+
                        "</tr>";
            }
            $("#spaceListTbl").find("thead").nextAll().remove();
            $("#spaceListTbl").append(str);
        },
        // 关闭空间列表层
        doHideLayer = function() {
            $(".page-box").hide();
            $(".space-list-layer").hide();
            $(".mui-backdrop2").hide();
        },
        // 上一页
        handlePreviousPage = function() {
            var datas = JSON.parse($(".interface-datas").text()),
                datasL = datas.length,
                datasIndex = $(".interface-datas")[0].dataset.index*1,
                datasIndexN = datasIndex*1 - pageStep,
                status = $(".interface-datas")[0].dataset.status;
            console.log(typeof datas);
            // 开启下一页按钮
            document.querySelector(".next-btn").disabled = false;
            $(".interface-datas")[0].dataset.status = "";

            if(status == "first") {
                // 第一页
                alertDialog("已是第一页", "系统提示");
                // 禁用上一页按钮
                document.querySelector(".previous-btn").disabled = true;
                return;
            }

            if(datasIndexN >= pageStep) {
                if(datasIndexN == pageStep) {
                    $(".interface-datas")[0].dataset.index = datasIndexN;
                    $(".interface-datas")[0].dataset.status = "first";
                    // 直接禁用
                    // document.querySelector(".previous-btn").disabled = true;
                }else $(".interface-datas")[0].dataset.index = datasIndexN;
                doShowSpaceListByPage(datasIndexN - pageStep, datasIndexN);
            }
        },
        // 下一页
        handleNextPage = function() {
            var datas = JSON.parse($(".interface-datas").text()),
                datasL = datas.length,
                datasIndex = $(".interface-datas")[0].dataset.index*1,
                datasIndexN = datasIndex*1 + pageStep,
                status = $(".interface-datas")[0].dataset.status;
            // 开启上一页按钮
            document.querySelector(".previous-btn").disabled = false;
            $(".interface-datas")[0].dataset.status = "";

            if(status == "last") {
                // 最后一页
                alertDialog("已是最后一页", "系统提示");
                // 禁用下一页按钮
                document.querySelector(".next-btn").disabled = true;
                return;
            }
            if(datasIndex < datasL) {
                if(datasL - datasIndex >= pageStep) {
                    $(".interface-datas")[0].dataset.index = datasIndexN;
                    doShowSpaceListByPage(datasIndex, datasIndexN);
                }else {
                    $(".interface-datas")[0].dataset.index = datasIndex;
                    $(".interface-datas")[0].dataset.status = "last";
                    // 直接禁用
                    // document.querySelector(".next-btn").disabled = true;
                    doShowSpaceListByPage(datasIndex, datasL);
                }
            }
        };

    // 展开按钮: 打开搜索盒
    var handleToolOpen = function() {
            $(this).hide();
            $(".search-box").fadeIn();
            $(".search-box").animate({
                width: "100%"
            });
        },
        // 关闭搜索盒
        handleToolClose = function() {
            $(".search-box").animate({
                width: "0"
            }, 800);
            $(".search-box").css("display", "none");
            $(".tool-expand-btn").show();
            $("#txtSearch").val("");
            $("#addressCopy").val("");
            $("#txtCoordinate").val("");
        },
        // 切换区域
        handleDistrictChange = function() {
            var district = this.value;
            if(district == "test")addPointMarkerOnMap(dataArr);
            else doGetSpaceListForMap(district);
        };

    // 展开按钮
    document.querySelector(".tool-expand-btn").addEventListener("click", handleToolOpen, false);
    // 收缩按钮
    document.querySelector(".tool-shrink-btn").addEventListener("click", handleToolClose, false);
    // 选取下拉列表
    document.getElementById("districtSlt").addEventListener("change", handleDistrictChange, false);
    // 空间列表按钮
    $(".space-list-btn").on("click", doGetSpaceListForHTML);
    // 遮罩层
    $(".mui-backdrop2").on("click", doHideLayer);
    // 上一页按钮
    document.querySelector(".previous-btn").addEventListener("click", handlePreviousPage, false);
    // 下一页按钮
    document.querySelector(".next-btn").addEventListener("click", handleNextPage, false);
})()