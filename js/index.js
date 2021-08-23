// 柱状图模块1   省级地图
// (function() {
//   // 1实例化对象
//   //分析获取山东省的城市AQI
//   var shandongAQI=[];
//   for(var i=0;i<citydata.length;i++){
//               var proname=searchPro(citydata[i].cityname+"市");
//                   if(proname=="山东"){
//                       var dataAQI=0;
//                       var count=0;
//                       for(var k=0;k<citydata[i].data.length;k++){
//                           if(citydata[i].data[k].AQI=="")
//                           continue;
//                           dataAQI+=parseInt(citydata[i].data[k].AQI);
//                           count++;
//                       }
                      
//                       shandongAQI.push({
//                           "name":citydata[i].cityname+"市",
//                           "value":parseInt(dataAQI/count)
//                       })
//                   }
              
//   }
//   var myChart = echarts.init(document.querySelector(".bar .chart"));
//   // // 2. 指定配置项和数据
//   // var option = {
//   //   color: ["#2f89cf"],
//   //   tooltip: {
//   //     trigger: "axis",
//   //     axisPointer: {
//   //       // 坐标轴指示器，坐标轴触发有效
//   //       type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
//   //     }
//   //   },
//   //   // 修改图表的大小
//   //   grid: {
//   //     left: "0%",
//   //     top: "10px",
//   //     right: "0%",
//   //     bottom: "4%",
//   //     containLabel: true
//   //   },
//   //   xAxis: [
//   //     {
//   //       type: "category",
//   //       data: [
//   //         "旅游行业",
//   //         "教育培训",
//   //         "游戏行业",
//   //         "医疗行业",
//   //         "电商行业",
//   //         "社交行业",
//   //         "金融行业"
//   //       ],
//   //       axisTick: {
//   //         alignWithLabel: true
//   //       },
//   //       // 修改刻度标签 相关样式
//   //       axisLabel: {
//   //         color: "rgba(255,255,255,.6) ",
//   //         fontSize: "12"
//   //       },
//   //       // 不显示x坐标轴的样式
//   //       axisLine: {
//   //         show: false
//   //       }
//   //     }
//   //   ],
//   //   yAxis: [
//   //     {
//   //       type: "value",
//   //       // 修改刻度标签 相关样式
//   //       axisLabel: {
//   //         color: "rgba(255,255,255,.6) ",
//   //         fontSize: 12
//   //       },
//   //       // y轴的线条改为了 2像素
//   //       axisLine: {
//   //         lineStyle: {
//   //           color: "rgba(255,255,255,.1)",
//   //           width: 2
//   //         }
//   //       },
//   //       // y轴分割线的颜色
//   //       splitLine: {
//   //         lineStyle: {
//   //           color: "rgba(255,255,255,.1)"
//   //         }
//   //       }
//   //     }
//   //   ],
//   //   series: [
//   //     {
//   //       name: "直接访问",
//   //       type: "bar",
//   //       barWidth: "35%",
//   //       data: [200, 300, 300, 900, 1500, 1200, 600],
//   //       itemStyle: {
//   //         // 修改柱子圆角
//   //         barBorderRadius: 5
//   //       }
//   //     }
//   //   ]
//   // };
//   // // 3. 把配置项给实例对象
//   // myChart.setOption(option);
//   // // 4. 让图表跟随屏幕自动的去适应
//   // window.addEventListener("resize", function() {
//   //   myChart.resize();
//  // });*/
//  myChart.setOption(option = {
//   //     title: {
//   // text: '固定资产投资平均处理效应(%)'
//   // },
//   tooltip: {
//   trigger: 'item',
//   formatter: "{b}<br/>"+"AQI:"+"{c}"
//   },
//   toolbox: {
//   show: false,
//   orient: 'vertical',
//   left: 'right',
//   top: 'center',
//   feature: {
//     dataView: {readOnly: false},
//     restore: {},
//     saveAsImage: {}
//   }
//   },
//   geo:{
//     label: {
//       normal: {
//           show: !0,
//           fontSize: "14",
//           fontWeight: 'bold',
//           color: "#ffff"
//       }
//   },

//   },
//   visualMap: {
//     min: 0,
//     max: 1000,
//     left: 26,
//     bottom: 40,
//     showLabel: !0,
//     text: ["高", "低"],
//     pieces: [{
//         gt: 300,
//         label: "严重污染",
//         color: "#B61F7E"
//     }, {
//         gte: 200,
//         lte: 300,
//         label: "重度污染",
//         color: "#E4387F"
//     }, {
//         gte: 150,
//         lt: 200,
//         label: "中度污染",
//         color: "#F86965"
//     }, {
//         gt: 100,
//         lt: 150,
//         label: "轻度污染",
//         color: "#FE9837"
//     }, {
//       gt: 50,
//       lt: 100,
//       label: "良",
//         color: "#F8C21C"
//     },{
//       gt: 0,
//       lt: 50,
//       label: "优",
//         color: "#23CC72"
//     }],
//     textStyle:{
//       color:"#F8C21C"
//     },
//     show: false
//   }, 
//   // visualMap: {
//   //   min: 3.3,
//   //   max: -0.7,
//   //   left: 'left',
//   //   top: 'bottom',
//   //   text: ['辐射效应', '虹吸效应'], // 文本，默认为数值文本
//   //   calculable: true,
//   //   //color: ['blue', 'blue']
//   // },
//   // toolbox: {
//   //   show: true,
//   //   orient: 'vertical',
//   //   left: 'right',
//   //   top: 'center',
//   //   feature: {
//   //       dataView: {
//   //           readOnly: false
//   //       },
//   //       restore: {},
//   //       saveAsImage: {}
//   //   }
//   // },
//   series: [{
//     name: '地市',
//     type: 'map',
//     map: "山东",
//     zoom: 1.3,
//     label: {
//         normal: {
//             show: false,
            
//         },
//         emphasis: {
//             textStyle: {
//               fontSize:10,
//                 color: '#fff'
//             }
//         }
//     },
//     data:shandongAQI
  
//     // data: [{
//     //         name: '武汉市',
//     //         value: 0.9687453
//     //     },
//     //     {
//     //         name: '黄石市',
//     //         value: 3.263561
//     //     },
//     //     {
//     //         name: '十堰市',
//     //         value:0.2134922
//     //     },
//     //     {
//     //         name: '宜昌市',
//     //        value: 0.7488681
//     //     },
//     //     {
//     //         name: '襄阳市',
//     //         value: 0.4803524
//     //     },
//     //     {
//     //         name: '鄂州市',
//     //         value: 0.2606949
//     //     },
//     //     {
//     //         name: '荆门市',
//     //         value: 0.317964
//     //     },
//     //     {
//     //         name: '孝感市',
//     //         value: -0.1658955
//     //     },
//     //     {
//     //         name: '荆州市',
//     //         value: 0.05700045
//     //     },
//     //     {
//     //         name: '黄冈市',
//     //         value: 0.2945263
//     //     },
//     //     {
//     //         name: '咸宁市',
//     //         value: -0.6877701
//     //     },
//     //     {
//     //         name: '随州市',
//     //         value: 0.7391486
//     //     },
//     //     {
//     //         name: '恩施土家族苗族自治州',
//     //         value: 0.4914024
//     //     },
//     //     {
//     //         name: '仙桃市',
//     //         value: 0.6318546
//     //     },
  
//     //     {
//     //         name: '潜江市',
//     //         value: -0.6660678
//     //     },
//     //     {
//     //         name: '天门市',
//     //         value: 0.2944385
//     //     }
//     // ]
//     // animationDurationUpdate: 1000,
//     // animationEasingUpdate: 'quinticInOut'
//   }]
//   });
//     window.addEventListener("resize", function() {
//       myChart.resize();
//     });
// })();







//左1-省份AQI地图
function  prodetail(province) {
  // 1实例化对象
  
  var shandongAQI=[];
  for(var i=0;i<citydata.length;i++){
              var proname=searchPro(citydata[i].cityname+"市");
                  if(proname==province){
                      var dataAQI=0;
                      var count=0;
                      for(var k=0;k<citydata[i].data.length;k++){
                          if(citydata[i].data[k].AQI=="")
                          continue;
                          dataAQI+=parseInt(citydata[i].data[k].AQI);
                          count++;
                      }
                      
                      shandongAQI.push({
                          "name":citydata[i].cityname+"市",
                          "value":parseInt(dataAQI/count)
                      })
                  }
              
  }
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // // 2. 指定配置项和数据
  // var option = {
  //   color: ["#2f89cf"],
  //   tooltip: {
  //     trigger: "axis",
  //     axisPointer: {
  //       // 坐标轴指示器，坐标轴触发有效
  //       type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
  //     }
  //   },
  //   // 修改图表的大小
  //   grid: {
  //     left: "0%",
  //     top: "10px",
  //     right: "0%",
  //     bottom: "4%",
  //     containLabel: true
  //   },
  //   xAxis: [
  //     {
  //       type: "category",
  //       data: [
  //         "旅游行业",
  //         "教育培训",
  //         "游戏行业",
  //         "医疗行业",
  //         "电商行业",
  //         "社交行业",
  //         "金融行业"
  //       ],
  //       axisTick: {
  //         alignWithLabel: true
  //       },
  //       // 修改刻度标签 相关样式
  //       axisLabel: {
  //         color: "rgba(255,255,255,.6) ",
  //         fontSize: "12"
  //       },
  //       // 不显示x坐标轴的样式
  //       axisLine: {
  //         show: false
  //       }
  //     }
  //   ],
  //   yAxis: [
  //     {
  //       type: "value",
  //       // 修改刻度标签 相关样式
  //       axisLabel: {
  //         color: "rgba(255,255,255,.6) ",
  //         fontSize: 12
  //       },
  //       // y轴的线条改为了 2像素
  //       axisLine: {
  //         lineStyle: {
  //           color: "rgba(255,255,255,.1)",
  //           width: 2
  //         }
  //       },
  //       // y轴分割线的颜色
  //       splitLine: {
  //         lineStyle: {
  //           color: "rgba(255,255,255,.1)"
  //         }
  //       }
  //     }
  //   ],
  //   series: [
  //     {
  //       name: "直接访问",
  //       type: "bar",
  //       barWidth: "35%",
  //       data: [200, 300, 300, 900, 1500, 1200, 600],
  //       itemStyle: {
  //         // 修改柱子圆角
  //         barBorderRadius: 5
  //       }
  //     }
  //   ]
  // };
  // // 3. 把配置项给实例对象
  // myChart.setOption(option);
  // // 4. 让图表跟随屏幕自动的去适应
  // window.addEventListener("resize", function() {
  //   myChart.resize();
 // });*/
 myChart.setOption(option = {
  //     title: {
  // text: '固定资产投资平均处理效应(%)'
  // },
  tooltip: {
  trigger: 'item',
  formatter: "{b}<br/>"+"AQI:"+"{c}"
  },
  toolbox: {
  show: false,
  orient: 'vertical',
  left: 'right',
  top: 'center',
  feature: {
    dataView: {readOnly: false},
    restore: {},
    saveAsImage: {}
  }
  },
  geo:{
    label: {
      normal: {
          show: !0,
          fontSize: "14",
          fontWeight: 'bold',
          color: "#ffff"
      }
  },

  },
  visualMap: {
    min: 0,
    max: 1000,
    left: 26,
    bottom: 40,
    showLabel: !0,
    text: ["高", "低"],
    pieces: [{
        gt: 300,
        label: "严重污染",
        color: "#B61F7E"
    }, {
        gte: 200,
        lte: 300,
        label: "重度污染",
        color: "#E4387F"
    }, {
        gte: 150,
        lt: 200,
        label: "中度污染",
        color: "#F86965"
    }, {
        gt: 100,
        lt: 150,
        label: "轻度污染",
        color: "#FE9837"
    }, {
      gt: 50,
      lt: 100,
      label: "良",
        color: "#F8C21C"
    },{
      gt: 0,
      lt: 50,
      label: "优",
        color: "#23CC72"
    }],
    textStyle:{
      color:"#F8C21C"
    },
    show: false
  }, 
  // visualMap: {
  //   min: 3.3,
  //   max: -0.7,
  //   left: 'left',
  //   top: 'bottom',
  //   text: ['辐射效应', '虹吸效应'], // 文本，默认为数值文本
  //   calculable: true,
  //   //color: ['blue', 'blue']
  // },
  // toolbox: {
  //   show: true,
  //   orient: 'vertical',
  //   left: 'right',
  //   top: 'center',
  //   feature: {
  //       dataView: {
  //           readOnly: false
  //       },
  //       restore: {},
  //       saveAsImage: {}
  //   }
  // },
  series: [{
    name: '地市',
    type: 'map',
    map: province,
    zoom: 1.3,
    label: {
        normal: {
            show: false,
            
        },
        emphasis: {
            textStyle: {
              fontSize:10,
                color: '#fff'
            }
        }
    },
    data:shandongAQI
  
    // data: [{
    //         name: '武汉市',
    //         value: 0.9687453
    //     },
    //     {
    //         name: '黄石市',
    //         value: 3.263561
    //     },
    //     {
    //         name: '十堰市',
    //         value:0.2134922
    //     },
    //     {
    //         name: '宜昌市',
    //        value: 0.7488681
    //     },
    //     {
    //         name: '襄阳市',
    //         value: 0.4803524
    //     },
    //     {
    //         name: '鄂州市',
    //         value: 0.2606949
    //     },
    //     {
    //         name: '荆门市',
    //         value: 0.317964
    //     },
    //     {
    //         name: '孝感市',
    //         value: -0.1658955
    //     },
    //     {
    //         name: '荆州市',
    //         value: 0.05700045
    //     },
    //     {
    //         name: '黄冈市',
    //         value: 0.2945263
    //     },
    //     {
    //         name: '咸宁市',
    //         value: -0.6877701
    //     },
    //     {
    //         name: '随州市',
    //         value: 0.7391486
    //     },
    //     {
    //         name: '恩施土家族苗族自治州',
    //         value: 0.4914024
    //     },
    //     {
    //         name: '仙桃市',
    //         value: 0.6318546
    //     },
  
    //     {
    //         name: '潜江市',
    //         value: -0.6660678
    //     },
    //     {
    //         name: '天门市',
    //         value: 0.2944385
    //     }
    // ]
    // animationDurationUpdate: 1000,
    // animationEasingUpdate: 'quinticInOut'
  }]
  });
    window.addEventListener("resize", function() {
      myChart.resize();
    });
    myChart.on('click',function(param){
      //prodetail(param.name);
      //document.getElementById("provincename").innerText=param.name;
      //console.log(param.name);
      cityAQI(param.name.substring(0,param.name.length-1));
      citypm25(param.name.substring(0,param.name.length-1));

    });
};



//右2-各城市AQI对比图
(function() {
  var data1 = 0;var data2 = 0;var data3 = 0;var data4 = 0;
        var data5 = 0;var data6 = 0;var data7 = 0;var data8 = 0;
        var data9 = 0;var data10 = 0;var data11 = 0;var data12 = 0;
        var data13 = 0;var data14 = 0;var data15 = 0;var data16 = 0;
        var data17 = 0;var data18 = 0;var data19 = 0;var data20 = 0;
        var data21 = 0;var data22 = 0;var data23 = 0;var data24 = 0;

        var jdata1 = 0;var jdata2 = 0;var jdata3 = 0;var jata4 = 0;
        var jdata5 = 0;var jdata6 = 0;var jdata7 = 0;var jdata8 = 0;
        var jdata9 = 0;var jdata10 = 0;var jdata11 = 0;var jdata12 = 0;
        var jdata13 = 0;var jdata14 = 0;var jdata15 = 0;var jdata16 = 0;
        var jdata17 = 0;var jdata18 = 0;var jdata19 = 0;var jdata20 = 0;
        var jdata21 = 0;var jdata22 = 0;var jdata23 = 0;var jdata24 = 0;

        var hdata1 = 0;var hdata2 = 0;var hdata3 = 0;var hdata4 = 0;
        var hdata5 = 0;var hdata6 = 0;var hdata7 = 0;var hdata8 = 0;
        var hdata9 = 0;var hdata10 = 0;var hdata11 = 0;var hdata12 = 0;
        var hdata13 = 0;var hdata14 = 0;var hdata15 = 0;var hdata16 = 0;
        var hdata17 = 0;var hdata18 = 0;var hdata19 = 0;var hdata20 = 0;
        var hdata21 = 0;var hdata22 = 0;var hdata23 = 0;var hdata24 = 0;

        var gdata1 = 0;var gdata2 = 0;var gdata3 = 0;var gdata4 = 0;
        var gdata5 = 0;var gdata6 = 0;var gdata7 = 0;var gdata8 = 0;
        var gdata9 = 0;var gdata10 = 0;var gdata11 = 0;var gdata12 = 0;
        var gdata13 = 0;var gdata14 = 0;var gdata15 = 0;var gdata16 = 0;
        var gdata17 = 0;var gdata18 = 0;var gdata19 = 0;var gdata20 = 0;
        var gdata21 = 0;var gdata22 = 0;var gdata23 = 0;var gdata24 = 0;

        var sdata1 = 0;var sdata2 = 0;var sdata3 = 0;var sdata4 = 0;
        var sdata5 = 0;var sdata6 = 0;var sdata7 = 0;var sdata8 = 0;
        var sdata9 = 0;var sdata10 = 0;var sdata11 = 0;var sdata12 = 0;
        var sdata13 = 0;var sdata14 = 0;var sdata15 = 0;var sdata16 = 0;
        var sdata17 = 0;var sdata18 = 0;var sdata19 = 0;var sdata20 = 0;
        var sdata21 = 0;var sdata22 = 0;var sdata23 = 0;var sdata24 = 0;

        for(var i=0;i<citydata.length;i++){
            if(citydata[i].cityname=="青岛"){
                for(var k=0;k<citydata[i].data.length;k++){
                        if(citydata[i].data[k].AQI=="")
                        continue;
                        if(k==0){
                            data1 = citydata[i].data[k].AQI;
                        }
                        if(k==1){
                            data2 = citydata[i].data[k].AQI;
                        }
                        if(k==2){
                            data3 = citydata[i].data[k].AQI;
                        }
                        if(k==3){
                            data4 = citydata[i].data[k].AQI;
                        }
                        if(k==4){
                            data5 = citydata[i].data[k].AQI;
                        }
                        if(k==5){
                            data6 = citydata[i].data[k].AQI;
                        }
                        if(k==6){
                            data7 = citydata[i].data[k].AQI;
                        }
                        if(k==7){
                            data8 = citydata[i].data[k].AQI;
                        }
                        if(k==8){
                            data9 = citydata[i].data[k].AQI;
                        }
                        if(k==9){
                            data10 = citydata[i].data[k].AQI;
                        }
                        if(k==10){
                            data11 = citydata[i].data[k].AQI;
                        }
                        if(k==11){
                            data12 = citydata[i].data[k].AQI;
                        }
                        if(k==12){
                            data13 = citydata[i].data[k].AQI;
                        }
                        if(k==13){
                            data14 = citydata[i].data[k].AQI;
                        }
                        if(k==14){
                            data15 = citydata[i].data[k].AQI;
                        }
                        if(k==15){
                            data16 = citydata[i].data[k].AQI;
                        }
                        if(k==16){
                            data17 = citydata[i].data[k].AQI;
                        }
                        if(k==17){
                            data18 = citydata[i].data[k].AQI;
                        }
                        if(k==18){
                            data19 = citydata[i].data[k].AQI;
                        }
                        if(k==19){
                            data20 = citydata[i].data[k].AQI;
                        }
                        if(k==20){
                            data21 = citydata[i].data[k].AQI;
                        }
                        if(k==21){
                            data22 = citydata[i].data[k].AQI;
                        }
                        if(k==22){
                            data23 = citydata[i].data[k].AQI;
                        }
                        if(k==23){
                            data24 = citydata[i].data[k].AQI;
                        }
                    }
            }
            if(citydata[i].cityname=="德州"){
                for(var k=0;k<citydata[i].data.length;k++){
                        if(citydata[i].data[k].AQI=="")
                        continue;
                        if(k==0){
                            jdata1 = citydata[i].data[k].AQI;
                        }
                        if(k==1){
                            jdata2 = citydata[i].data[k].AQI;
                        }
                        if(k==2){
                            jdata3 = citydata[i].data[k].AQI;
                        }
                        if(k==3){
                            jdata4 = citydata[i].data[k].AQI;
                        }
                        if(k==4){
                            jdata5 = citydata[i].data[k].AQI;
                        }
                        if(k==5){
                            jdata6 = citydata[i].data[k].AQI;
                        }
                        if(k==6){
                            jdata7 = citydata[i].data[k].AQI;
                        }
                        if(k==7){
                            jdata8 = citydata[i].data[k].AQI;
                        }
                        if(k==8){
                            jdata9 = citydata[i].data[k].AQI;
                        }
                        if(k==9){
                            jdata10 = citydata[i].data[k].AQI;
                        }
                        if(k==10){
                            jdata11 = citydata[i].data[k].AQI;
                        }
                        if(k==11){
                            jdata12 = citydata[i].data[k].AQI;
                        }
                        if(k==12){
                            jdata13 = citydata[i].data[k].AQI;
                        }
                        if(k==13){
                            jdata14 = citydata[i].data[k].AQI;
                        }
                        if(k==14){
                            jdata15 = citydata[i].data[k].AQI;
                        }
                        if(k==15){
                            jdata16 = citydata[i].data[k].AQI;
                        }
                        if(k==16){
                            jdata17 = citydata[i].data[k].AQI;
                        }
                        if(k==17){
                            jdata18 = citydata[i].data[k].AQI;
                        }
                        if(k==18){
                            jdata19 = citydata[i].data[k].AQI;
                        }
                        if(k==19){
                            jdata20 = citydata[i].data[k].AQI;
                        }
                        if(k==20){
                            jdata21 = citydata[i].data[k].AQI;
                        }
                        if(k==21){
                            jdata22 = citydata[i].data[k].AQI;
                        }
                        if(k==22){
                            jdata23 = citydata[i].data[k].AQI;
                        }
                        if(k==23){
                            jdata24 = citydata[i].data[k].AQI;
                        }
                    }
                
            }
            // if(citydata[i].cityname=="上海"){
            //     for(var k=0;k<citydata[i].data.length;k++){
            //             if(citydata[i].data[k].AQI=="")
            //             continue;
            //             if(k==0){
            //                 hdata1 = citydata[i].data[k].AQI;
            //             }
            //             if(k==1){
            //                 hdata2 = citydata[i].data[k].AQI;
            //             }
            //             if(k==2){
            //                 hdata3 = citydata[i].data[k].AQI;
            //             }
            //             if(k==3){
            //                 hdata4 = citydata[i].data[k].AQI;
            //             }
            //             if(k==4){
            //                 hdata5 = citydata[i].data[k].AQI;
            //             }
            //             if(k==5){
            //                 hdata6 = citydata[i].data[k].AQI;
            //             }
            //             if(k==6){
            //                 hdata7 = citydata[i].data[k].AQI;
            //             }
            //             if(k==7){
            //                 hdata8 = citydata[i].data[k].AQI;
            //             }
            //             if(k==8){
            //                 hdata9 = citydata[i].data[k].AQI;
            //             }
            //             if(k==9){
            //                 hdata10 = citydata[i].data[k].AQI;
            //             }
            //             if(k==10){
            //                 hdata11 = citydata[i].data[k].AQI;
            //             }
            //             if(k==11){
            //                 hdata12 = citydata[i].data[k].AQI;
            //             }
            //             if(k==12){
            //                 hdata13 = citydata[i].data[k].AQI;
            //             }
            //             if(k==13){
            //                 hdata14 = citydata[i].data[k].AQI;
            //             }
            //             if(k==14){
            //                 hdata15 = citydata[i].data[k].AQI;
            //             }
            //             if(k==15){
            //                 hdata16 = citydata[i].data[k].AQI;
            //             }
            //             if(k==16){
            //                 hdata17 = citydata[i].data[k].AQI;
            //             }
            //             if(k==17){
            //                 hdata18 = citydata[i].data[k].AQI;
            //             }
            //             if(k==18){
            //                 hdata19 = citydata[i].data[k].AQI;
            //             }
            //             if(k==19){
            //                 hdata20 = citydata[i].data[k].AQI;
            //             }
            //             if(k==20){
            //                 hdata21 = citydata[i].data[k].AQI;
            //             }
            //             if(k==21){
            //                 hdata22 = citydata[i].data[k].AQI;
            //             }
            //             if(k==22){
            //                 hdata23 = citydata[i].data[k].AQI;
            //             }
            //             if(k==23){
            //                 hdata24 = citydata[i].data[k].AQI;
            //             }
            //         }
                
            // }
            // if(citydata[i].cityname=="广州"){
            //     for(var k=0;k<citydata[i].data.length;k++){
            //             if(citydata[i].data[k].AQI=="")
            //             continue;
            //             if(k==0){
            //                 gdata1 = citydata[i].data[k].AQI;
            //             }
            //             if(k==1){
            //                 gdata2 = citydata[i].data[k].AQI;
            //             }
            //             if(k==2){
            //                 gdata3 = citydata[i].data[k].AQI;
            //             }
            //             if(k==3){
            //                 gdata4 = citydata[i].data[k].AQI;
            //             }
            //             if(k==4){
            //                 gdata5 = citydata[i].data[k].AQI;
            //             }
            //             if(k==5){
            //                 gdata6 = citydata[i].data[k].AQI;
            //             }
            //             if(k==6){
            //                 gdata7 = citydata[i].data[k].AQI;
            //             }
            //             if(k==7){
            //                 gdata8 = citydata[i].data[k].AQI;
            //             }
            //             if(k==8){
            //                 gdata9 = citydata[i].data[k].AQI;
            //             }
            //             if(k==9){
            //                 gdata10 = citydata[i].data[k].AQI;
            //             }
            //             if(k==10){
            //                 gdata11 = citydata[i].data[k].AQI;
            //             }
            //             if(k==11){
            //                 gdata12 = citydata[i].data[k].AQI;
            //             }
            //             if(k==12){
            //                 gdata13 = citydata[i].data[k].AQI;
            //             }
            //             if(k==13){
            //                 gdata14 = citydata[i].data[k].AQI;
            //             }
            //             if(k==14){
            //                 gdata15 = citydata[i].data[k].AQI;
            //             }
            //             if(k==15){
            //                 gdata16 = citydata[i].data[k].AQI;
            //             }
            //             if(k==16){
            //                 gdata17 = citydata[i].data[k].AQI;
            //             }
            //             if(k==17){
            //                 gdata18 = citydata[i].data[k].AQI;
            //             }
            //             if(k==18){
            //                 gdata19 = citydata[i].data[k].AQI;
            //             }
            //             if(k==19){
            //                 gdata20 = citydata[i].data[k].AQI;
            //             }
            //             if(k==20){
            //                 gdata21 = citydata[i].data[k].AQI;
            //             }
            //             if(k==21){
            //                 gdata22 = citydata[i].data[k].AQI;
            //             }
            //             if(k==22){
            //                 gdata23 = citydata[i].data[k].AQI;
            //             }
            //             if(k==23){
            //                 gdata24 = citydata[i].data[k].AQI;
            //             }
            //         }
            // }
            // if(citydata[i].cityname=="深圳"){
            //     for(var k=0;k<citydata[i].data.length;k++){
            //             if(citydata[i].data[k].AQI=="")
            //             continue;
            //             if(k==0){
            //                 sdata1 = citydata[i].data[k].AQI;
            //             }
            //             if(k==1){
            //                 sdata2 = citydata[i].data[k].AQI;
            //             }
            //             if(k==2){
            //                 sdata3 = citydata[i].data[k].AQI;
            //             }
            //             if(k==3){
            //                 sdata4 = citydata[i].data[k].AQI;
            //             }
            //             if(k==4){
            //                 sdata5 = citydata[i].data[k].AQI;
            //             }
            //             if(k==5){
            //                 sdata6 = citydata[i].data[k].AQI;
            //             }
            //             if(k==6){
            //                 sdata7 = citydata[i].data[k].AQI;
            //             }
            //             if(k==7){
            //                 sdata8 = citydata[i].data[k].AQI;
            //             }
            //             if(k==8){
            //                 sdata9 = citydata[i].data[k].AQI;
            //             }
            //             if(k==9){
            //                 sdata10 = citydata[i].data[k].AQI;
            //             }
            //             if(k==10){
            //                 sdata11 = citydata[i].data[k].AQI;
            //             }
            //             if(k==11){
            //                 sdata12 = citydata[i].data[k].AQI;
            //             }
            //             if(k==12){
            //                 sdata13 = citydata[i].data[k].AQI;
            //             }
            //             if(k==13){
            //                 sdata14 = citydata[i].data[k].AQI;
            //             }
            //             if(k==14){
            //                 sdata15 = citydata[i].data[k].AQI;
            //             }
            //             if(k==15){
            //                 sdata16 = citydata[i].data[k].AQI;
            //             }
            //             if(k==16){
            //                 sdata17 = citydata[i].data[k].AQI;
            //             }
            //             if(k==17){
            //                 sdata18 = citydata[i].data[k].AQI;
            //             }
            //             if(k==18){
            //                 sdata19 = citydata[i].data[k].AQI;
            //             }
            //             if(k==19){
            //                 sdata20 = citydata[i].data[k].AQI;
            //             }
            //             if(k==20){
            //                 sdata21 = citydata[i].data[k].AQI;
            //             }
            //             if(k==21){
            //                 sdata22 = citydata[i].data[k].AQI;
            //             }
            //             if(k==22){
            //                 sdata23 = citydata[i].data[k].AQI;
            //             }
            //             if(k==23){
            //                 sdata24 = citydata[i].data[k].AQI;
            //             }
            //         }
            // }
        }

  var yearData = [
    {
      year: "城市", // 城市
      data: [
        // 两个数组是因为有两条线
        [data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15,data16,data17,data18,data19,data20,data21,data22,data23,data24],
        [jdata1,jdata2,jdata3,jdata4,jdata5,jdata6,jdata7,jdata8,jdata9,jdata10,jdata11,jdata12,jdata13,jdata14,jdata15,jdata16,jdata17,jdata18,jdata19,jdata20,jdata21,jdata22,jdata23,jdata24],
       // [hdata1,hdata2,hdata3,hdata4,hdata5,hdata6,hdata7,hdata8,hdata9,hdata10,hdata11,hdata12,hdata13,hdata14,hdata15,hdata16,hdata17,hdata18,hdata19,hdata20,hdata21,hdata22,hdata23,hdata24],
       // [gdata1,gdata2,gdata3,gdata4,gdata5,gdata6,gdata7,gdata8,gdata9,gdata10,gdata11,gdata12,gdata13,gdata14,gdata15,gdata16,gdata17,gdata18,gdata19,gdata20,gdata21,gdata22,gdata23,gdata24],
       // [sdata1,sdata2,sdata3,sdata4,sdata5,sdata6,sdata7,sdata8,sdata9,sdata10,sdata11,sdata12,sdata13,sdata14,sdata15,sdata16,sdata17,sdata18,sdata19,sdata20,sdata21,sdata22,sdata23,sdata24]
      ]
    }
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  // 2.指定配置
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35","#FC7D02","#93CE07","#FBDB0F"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "0时","1时","2时","3时","4时","5时","6时","7时","8时","9时","10时","11时","12时","13时","14时","15时","16时","17时","18时","19时","20时","21时","22时","23时"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "青岛",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: "德州",
        type: "line",
        smooth: true,
        data: yearData[0].data[1]
      },
      // {
      //   name: "上海",
      //   type: "line",
      //   smooth: true,
      //   data: yearData[0].data[2]
      // },
      // {
      //   name: "广州",
      //   type: "line",
      //   smooth: true,
      //   data: yearData[0].data[3]
      // },
      // {
      //   name: "深圳",
      //   type: "line",
      //   smooth: true,
      //   data: yearData[0].data[4]
      // }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 5.点击切换效果
  $(".line h2").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  });
})();


//右1-雷达图
function cityda(proname){
  if(proname==null)
  proname="山东";
  
   // var myChart = echarts.init(document.querySelector(".line .chart"));
   //var myChart = echarts.init(document.querySelector(".pie .chart"));
   var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  
    var option;
  
    var datasum=[
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]
    ]
    var citynum=0;
    wlist=["AQI","PM2.5","PM10","CO","NO2","SO2"];
    
  
    
      for(var i=0;i<citydata.length;i++){
        
        if(searchPro(citydata[i].cityname+"市")==proname){
  
          //console.log(citydata[i].cityname);
          for(var j=0;j<citydata[i].data.length;j++){
            if(citydata[i].data[j].AQI==""||citydata[i].data[j].CO==""||citydata[i].data[j].NO2==""||citydata[i].data[j].PM10==""||citydata[i].data[j]["PM2.5"]==""||citydata[i].data[j].SO2==""||citydata[i].data[j].time=="") {
              continue;
            }
            for(var k=0;k<6;k++){
              datasum[parseInt(citydata[i].data[j].time)][k]+=parseFloat(citydata[i].data[j][wlist[k]]);
             // console.log(citydata[i].data[j].time)
            }
          }
          citynum++;
        } 
      }
      //console.log(datasum)
      for(var i=0;i<24;i++){
        for(var j=0;j<6;j++){
          datasum[i][j]=datasum[i][j]/citynum;
          
        }
      }
  
  
  
  //console.log(citynum)
    var lineStyle = {
      normal: {
          width: 1,
          opacity: 0.5
      }
    };
    option = {
      radar: {
          // indicator: [
          //     {name: 'AQI', max: 100},
          //     {name: 'PM2.5', max: 60},
          //     {name: 'PM10', max: 100},
          //     {name: 'CO', max: 2},
          //     {name: 'NO2', max: 60},
          //     {name: 'SO2', max: 20}
          // ],
          indicator: [
            {name: 'AQI'},
            {name: 'PM2.5'},
            {name: 'PM10'},
            {name: 'CO'},
            {name: 'NO2'},
            {name: 'SO2'}
        ],
          shape: 'circle',
          splitNumber: 5,
          name: {
              textStyle: {
                  color: 'rgb(238, 197, 102)'
              }
          },
          splitLine: {
              lineStyle: {
                  color: [
                      'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                      'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                      'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                  ].reverse()
              }
          },
          splitArea: {
              show: false
          },
          axisLine: {
              lineStyle: {
                  color: 'rgba(238, 197, 102, 0.5)'
              }
          }
      },
      series: [
          {
              name: '北京',
              type: 'radar',
              lineStyle: lineStyle,
              data: datasum,
              symbol: 'none',
              itemStyle: {
                  color: '#F9713C'
              },
              areaStyle: {
                  opacity: 0.1
              }
          }
  
          
      ]
    };
  
  option && myChart.setOption(option);
  
  
  };



// 柱状图2
// (function() {
//   var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
//   // 1. 实例化对象
//   var myChart = echarts.init(document.querySelector(".bar2 .chart"));
//   // 2. 指定配置和数据
//   var option = {
//     grid: {
//       top: "10%",
//       left: "22%",
//       bottom: "10%"
//       // containLabel: true
//     },
//     // 不显示x轴的相关信息
//     xAxis: {
//       show: false
//     },
//     yAxis: [
//       {
//         type: "category",
//         inverse: true,
//         data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
//         // 不显示y轴的线
//         axisLine: {
//           show: false
//         },
//         // 不显示刻度
//         axisTick: {
//           show: false
//         },
//         // 把刻度标签里面的文字颜色设置为白色
//         axisLabel: {
//           color: "#fff"
//         }
//       },
//       {
//         data: [702, 350, 610, 793, 664],
//         inverse: true,
//         // 不显示y轴的线
//         axisLine: {
//           show: false
//         },
//         // 不显示刻度
//         axisTick: {
//           show: false
//         },
//         // 把刻度标签里面的文字颜色设置为白色
//         axisLabel: {
//           color: "#fff"
//         }
//       }
//     ],
//     series: [
//       {
//         name: "条",
//         type: "bar",
//         data: [100, 34, 60, 78, 69],
//         yAxisIndex: 0,
//         // 修改第一组柱子的圆角
//         itemStyle: {
//           barBorderRadius: 20,
//           // 此时的color 可以修改柱子的颜色
//           color: function(params) {
//             // params 传进来的是柱子对象
//             // console.log(params);
//             // dataIndex 是当前柱子的索引号
//             return myColor[params.dataIndex];
//           }
//         },
//         // 柱子之间的距离
//         barCategoryGap: 50,
//         //柱子的宽度
//         barWidth: 10,
//         // 显示柱子内的文字
//         label: {
//           show: true,
//           position: "inside",
//           // {c} 会自动的解析为 数据  data里面的数据
//           formatter: "{c}%"
//         }
//       },
//       {
//         name: "框",
//         type: "bar",
//         barCategoryGap: 50,
//         barWidth: 15,
//         yAxisIndex: 1,
//         data: [100, 100, 100, 100, 100],
//         itemStyle: {
//           color: "none",
//           borderColor: "#00c1de",
//           borderWidth: 3,
//           barBorderRadius: 15
//         }
//       }
//     ]
//   };

//   // 3. 把配置给实例对象
//   myChart.setOption(option);
//   // 4. 让图表跟随屏幕自动的去适应
//   window.addEventListener("resize", function() {
//     myChart.resize();
//   });

// })();



//左3-城市定时详情
function  citydetail(ctime,name) {
  var datadetail=[];
  for(var i=0;i<citydata.length;i++){
    if(citydata[i].cityname==name){
      for(var j=0;j<citydata[i].data.length;j++){
        if(citydata[i].data[j].time==ctime){
          //console.log("abc");
          datadetail[0]=citydata[i].data[j]["PM2.5"];
          datadetail[1]=citydata[i].data[j]["PM10"];
          datadetail[2]=citydata[i].data[j]["SO2"];
          datadetail[3]=citydata[i].data[j]["NO2"];
          datadetail[4]=citydata[i].data[j]["O3"];
          datadetail[5]=citydata[i].data[j]["CO"];
        }
      }
    }
  }
  //console.log(datadetail);

  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6","#1ba784"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["PM2.5", "PM10", "SO2", "NO2", "O3","CO"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: datadetail,
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: datadetail,
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function(params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: false,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
         // formatter: "{c}%"
        }
      },
      // {
      //   name: "框",
      //   type: "bar",
      //   barCategoryGap: 50,
      //   barWidth: 15,
      //   yAxisIndex: 1,
      //   data: datadetail,
      //   itemStyle: {
      //     color: "none",
      //     borderColor: "#00c1de",
      //     borderWidth: 3,
      //     barBorderRadius: 15
      //   }
      // }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });

};






// 折线图1模块制作
// (function() {
//   var yearData = [
//     {
//       year: "2020", // 年份
//       data: [
//         // 两个数组是因为有两条线
//         [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
//         [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
//       ]
//     },
//     {
//       year: "2021", // 年份
//       data: [
//         // 两个数组是因为有两条线
//         [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
//         [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
//       ]
//     }
//   ];
//   // 1. 实例化对象
//   //var myChart = echarts.init(document.querySelector(".line .chart"));
//   // 2.指定配置
//   var option = {
//     // 通过这个color修改两条线的颜色
//     color: ["#00f2f1", "#ed3f35"],
//     tooltip: {
//       trigger: "axis"
//     },
//     legend: {
//       // 如果series 对象有name 值，则 legend可以不用写data
//       // 修改图例组件 文字颜色
//       textStyle: {
//         color: "#4c9bfd"
//       },
//       // 这个10% 必须加引号
//       right: "10%"
//     },
//     grid: {
//       top: "20%",
//       left: "3%",
//       right: "4%",
//       bottom: "3%",
//       show: true, // 显示边框
//       borderColor: "#012f4a", // 边框颜色
//       containLabel: true // 包含刻度文字在内
//     },

//     xAxis: {
//       type: "category",
//       boundaryGap: false,
//       data: [
//         "1月",
//         "2月",
//         "3月",
//         "4月",
//         "5月",
//         "6月",
//         "7月",
//         "8月",
//         "9月",
//         "10月",
//         "11月",
//         "12月"
//       ],
//       axisTick: {
//         show: false // 去除刻度线
//       },
//       axisLabel: {
//         color: "#4c9bfd" // 文本颜色
//       },
//       axisLine: {
//         show: false // 去除轴线
//       }
//     },
//     yAxis: {
//       type: "value",
//       axisTick: {
//         show: false // 去除刻度线
//       },
//       axisLabel: {
//         color: "#4c9bfd" // 文本颜色
//       },
//       axisLine: {
//         show: false // 去除轴线
//       },
//       splitLine: {
//         lineStyle: {
//           color: "#012f4a" // 分割线颜色
//         }
//       }
//     },
//     series: [
//       {
//         name: "新增粉丝",
//         type: "line",
//         // true 可以让我们的折线显示带有弧度
//         smooth: true,
//         data: yearData[0].data[0]
//       },
//       {
//         name: "新增游客",
//         type: "line",
//         smooth: true,
//         data: yearData[0].data[1]
//       }
//     ]
//   };

//   // 3. 把配置给实例对象
//   myChart.setOption(option);
//   // 4. 让图表跟随屏幕自动的去适应
//   window.addEventListener("resize", function() {
//     myChart.resize();
//   });

//   // 5.点击切换效果
//   $(".line h2").on("click", "a", function() {
//     // alert(1);
//     // console.log($(this).index());
//     // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
//     // console.log(yearData[$(this).index()]);
//     var obj = yearData[$(this).index()];
//     option.series[0].data = obj.data[0];
//     option.series[1].data = obj.data[1];
//     // 需要重新渲染
//     myChart.setOption(option);
//   });
// })();
// 折线图2 模块制作
/*(function() {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",
      data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },

    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30"
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "邮件营销",
        type: "line",
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        // 填充颜色设置
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          20,
          60,
          50,
          40
        ]
      },
      {
        name: "联盟广告",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [
          130,
          10,
          20,
          40,
          30,
          40,
          80,
          60,
          20,
          40,
          90,
          40,
          20,
          140,
          30,
          40,
          130,
          20,
          20,
          40,
          80,
          70,
          30,
          40,
          30,
          120,
          20,
          99,
          50,
          20
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();*/









//左2-城市一日AQI变化曲线图
function cityAQI(name) {
  var datacity=[];
  for(var i=0;i<citydata.length;i++){
    if(citydata[i].cityname==name){
      for(var j=0;j<citydata[i].data.length;j++){
        if(citydata[i].data[j].AQI==""){
          datacity[citydata[i].data[j].time]=datacity[citydata[i].data[j].time-1];
        }
        else{
          datacity[citydata[i].data[j].time]=citydata[i].data[j].AQI;
        }
      }
    }
  }
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",
      data: [name+"AQI","邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },

    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",

        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: name+"AQI",
        type: "line",
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        // 填充颜色设置
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data:datacity
      },
      // {
      //   name: "联盟广告",
      //   type: "line",
      //   smooth: true,
      //   lineStyle: {
      //     normal: {
      //       color: "#00d887",
      //       width: 2
      //     }
      //   },
      //   areaStyle: {
      //     normal: {
      //       color: new echarts.graphic.LinearGradient(
      //         0,
      //         0,
      //         0,
      //         1,
      //         [
      //           {
      //             offset: 0,
      //             color: "rgba(0, 216, 135, 0.4)"
      //           },
      //           {
      //             offset: 0.8,
      //             color: "rgba(0, 216, 135, 0.1)"
      //           }
      //         ],
      //         false
      //       ),
      //       shadowColor: "rgba(0, 0, 0, 0.1)"
      //     }
      //   },
      //   // 设置拐点 小圆点
      //   symbol: "circle",
      //   // 拐点大小
      //   symbolSize: 5,
      //   // 设置拐点颜色以及边框
      //   itemStyle: {
      //     color: "#00d887",
      //     borderColor: "rgba(221, 220, 107, .1)",
      //     borderWidth: 12
      //   },
      //   // 开始不显示拐点， 鼠标经过显示
      //   showSymbol: false,
      //   data: [
      //     130,
      //     10,
      //     20,
      //     40,
      //     30,
      //     40,
      //     80,
      //     60,
      //     20,
      //     40,
      //     90,
      //     40,
      //     20,
      //     140,
      //     30,
      //     40,
      //     130,
      //     20,
      //     20,
      //     40,
      //     80,
      //     70,
      //     30,
      //     40,
      //     30,
      //     120,
      //     20,
      //     99,
      //     50,
      //     20
      //   ]
      // }
    ]
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  myChart.on('click',function(param){
    // prodetail(param.name);
    // document.getElementById("provincename").innerText=param.name;
    // console.log(param);
    // console.log(param.name+param.seriesName);
    citydetail(param.name.replace(/\b(0+)/gi,""),param.seriesName.substring(0,param.seriesName.length-3));
    document.getElementById("citytimedetail").innerText=param.seriesName.substring(0,param.seriesName.length-3)+param.name.replace(/\b(0+)/gi,"")+"时污染源分析";
    // console.log(param.name.replace(/\b(0+)/gi,""));
    // console.log(param.seriesName.substring(0,param.seriesName.length-3));
  });
}






// 饼形图1
// (function() {
//   // 1. 实例化对象
//   var myChart = echarts.init(document.querySelector(".pie .chart"));
//   // 2.指定配置
//   var option = {
//     color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
//     tooltip: {
//       trigger: "item",
//       formatter: "{a} <br/>{b}: {c} ({d}%)"
//     },

//     legend: {
//       bottom: "0%",
//       // 修改小图标的大小
//       itemWidth: 10,
//       itemHeight: 10,
//       // 修改图例组件的文字为 12px
//       textStyle: {
//         color: "rgba(255,255,255,.5)",
//         fontSize: "12"
//       }
//     },
//     series: [
//       {
//         name: "年龄分布",
//         type: "pie",
//         // 这个radius可以修改饼形图的大小
//         // radius 第一个值是内圆的半径 第二个值是外圆的半径
//         radius: ["40%", "60%"],
//         center: ["50%", "45%"],
//         avoidLabelOverlap: false,
//         // 图形上的文字
//         label: {
//           show: false,
//           position: "center"
//         },
//         // 链接文字和图形的线是否显示
//         labelLine: {
//           show: false
//         },
//         data: [
//           { value: 1, name: "0岁以下" },
//           { value: 4, name: "20-29岁" },
//           { value: 2, name: "30-39岁" },
//           { value: 2, name: "40-49岁" },
//           { value: 1, name: "50岁以上" }
//         ]
//       }
//     ]
//   };

//   // 3. 把配置给实例对象
//   myChart.setOption(option);
//   // 4. 让图表跟随屏幕自动的去适应
//   window.addEventListener("resize", function() {
//     myChart.resize();
//   });
// })();

// 饼形图2 地区分布模块
// (function() {
//   var myChart = echarts.init(document.querySelector(".pie2 .chart"));
//   var option = {
//     color: [
//       "#006cff",
//       "#60cda0",
//       "#ed8884",
//       "#ff9f7f",
//       "#0096ff",
//       "#9fe6b8",
//       "#32c5e9",
//       "#1d9dff"
//     ],
//     tooltip: {
//       trigger: "item",
//       formatter: "{a} <br/>{b} : {c} ({d}%)"
//     },
//     legend: {
//       bottom: "0%",
//       itemWidth: 10,
//       itemHeight: 10,
//       textStyle: {
//         color: "rgba(255,255,255,.5)",
//         fontSize: "12"
//       }
//     },
//     series: [
//       {
//         name: "地区分布",
//         type: "pie",
//         radius: ["10%", "70%"],
//         center: ["50%", "50%"],
//         roseType: "radius",
//         // 图形的文字标签
//         label: {
//           fontSize: 10
//         },
//         // 链接图形和文字的线条
//         labelLine: {
//           // length 链接图形的线条
//           length: 6,
//           // length2 链接文字的线条
//           length2: 8
//         },
//         data: [
//           { value: 20, name: "云南" },
//           { value: 26, name: "北京" },
//           { value: 24, name: "山东" },
//           { value: 25, name: "河北" },
//           { value: 20, name: "江苏" },
//           { value: 25, name: "浙江" },
//           { value: 30, name: "四川" },
//           { value: 42, name: "湖北" }
//         ]
//       }
//     ]
//   };
//   myChart.setOption(option);
//   // 监听浏览器缩放，图表对象调用缩放resize函数
//   window.addEventListener("resize", function() {
//     myChart.resize();
//   });
 
// })();



//莫-右3

// 右3-不同时段青岛PM2.5
function citypm25(name) {
  var data1 = 0;var data2 = 0;var data3 = 0;var data4 = 0;var data5 = 0;

  for(var i=0;i<citydata.length;i++){
    if(citydata[i].cityname==name){
        for(var k=0;k<citydata[i].data.length;k++){
                if(citydata[i].data[k]["PM2.5"]=="")
                continue;
                if(k==2){
                  data1 = citydata[i].data[k]["PM2.5"];
                }
                if(k==7){
                    data2 = citydata[i].data[k]["PM2.5"];
                }
                if(k==12){
                    data3 = citydata[i].data[k]["PM2.5"];
                }
                if(k==17){
                    data4 = citydata[i].data[k]["PM2.5"];
                }
                if(k==22){
                    data5 = citydata[i].data[k]["PM2.5"];
                }
          }
      }
    }

  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["2点", "7点", "12点", "17点", "22点"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [data1, data2, data3, data4, data5],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data:  [data1, data2, data3, data4, data5],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function(params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: false,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%"
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data:  [data1, data2, data3, data4, data5],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });

};




//中-中心大地图
function  mapp(pro) {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  window.dataList=[];
  //var pro=proAQI(citydata);
  //console.log(citydata);
  for(var i=0;i<pro.length;i++){
      var d={};
      d["name"]=pro[i].name;
      d["value"]=pro[i].data[0].AQI;
      window.dataList.push(d);
  }
  var hour=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
  var mapdata=[
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
  for(var i=0;i<pro.length;i++){
    mapdata[0].push({
      "time":0,
      "name":pro[i].name,
      "value":pro[i].data[0].AQI
    });
    mapdata[1].push({
      "time":1,
      "name":pro[i].name,
      "value":pro[i].data[1].AQI
    });
    mapdata[2].push({
      "time":2,
      "name":pro[i].name,
      "value":pro[i].data[2].AQI
    });
    mapdata[3].push({
      "time":3,
      "name":pro[i].name,
      "value":pro[i].data[3].AQI
    });
    mapdata[4].push({
      "time":4,
      "name":pro[i].name,
      "value":pro[i].data[4].AQI
    });
    mapdata[5].push({
      "time":5,
      "name":pro[i].name,
      "value":pro[i].data[5].AQI
    });
    mapdata[6].push({
      "time":6,
      "name":pro[i].name,
      "value":pro[i].data[6].AQI
    })
    ; mapdata[7].push({
      "time":7,
      "name":pro[i].name,
      "value":pro[i].data[7].AQI
    });
    mapdata[8].push({
      "time":8,
      "name":pro[i].name,
      "value":pro[i].data[8].AQI
    });
    mapdata[9].push({
      "time":9,
      "name":pro[i].name,
      "value":pro[i].data[9].AQI
    });
    mapdata[10].push({
      "time":10,
      "name":pro[i].name,
      "value":pro[i].data[10].AQI
    });
    mapdata[11].push({
      "time":11,
      "name":pro[i].name,
      "value":pro[i].data[11].AQI
    });
    mapdata[12].push({
      "time":12,
      "name":pro[i].name,
      "value":pro[i].data[12].AQI
    });
    mapdata[13].push({
      "time":13,
      "name":pro[i].name,
      "value":pro[i].data[13].AQI
    });
    mapdata[14].push({
      "time":14,
      "name":pro[i].name,
      "value":pro[i].data[14].AQI
    });
    mapdata[15].push({
      "time":15,
      "name":pro[i].name,
      "value":pro[i].data[15].AQI
    });
    mapdata[16].push({
      "time":16,
      "name":pro[i].name,
      "value":pro[i].data[16].AQI
    });
    mapdata[17].push({
      "time":17,
      "name":pro[i].name,
      "value":pro[i].data[17].AQI
    });
    mapdata[18].push({
      "time":18,
      "name":pro[i].name,
      "value":pro[i].data[18].AQI
    });
    mapdata[19].push({
      "time":19,
      "name":pro[i].name,
      "value":pro[i].data[19].AQI
    })
    ; mapdata[20].push({
      "time":20,
      "name":pro[i].name,
      "value":pro[i].data[20].AQI
    });
    mapdata[21].push({
      "time":21,
      "name":pro[i].name,
      "value":pro[i].data[21].AQI
    });
    mapdata[22].push({
      "time":22,
      "name":pro[i].name,
      "value":pro[i].data[22].AQI
    });
    mapdata[23].push({
      "time":23,
      "name":pro[i].name,
      "value":pro[i].data[23].AQI
    });
   
  }
 // console.log(mapdata);
  
//   window.dataList = [{
//     name: "南海诸岛",
//     value: 0
// },
// {
//     name: '北京',
//     value: 54
// },
// {
//     name: '天津',
//     value: 13
// },
// {
//     name: '上海',
//     value: 40
// },
// {
//     name: '重庆',
//     value: 75
// },
// {
//     name: '河北',
//     value: 13
// },
// {
//     name: '河南',
//     value: 83
// },
// {
//     name: '云南',
//     value: 11
// },
// {
//     name: '辽宁',
//     value: 19
// },
// {
//     name: '黑龙江',
//     value: 15
// },
// {
//     name: '湖南',
//     value: 69
// },
// {
//     name: '安徽',
//     value: 60
// },
// {
//     name: '山东',
//     value: 39
// },
// {
//     name: '新疆',
//     value: 4
// },
// {
//     name: '江苏',
//     value: 31
// },
// {
//     name: '浙江',
//     value: 104
// },
// {
//     name: '江西',
//     value: 36
// },
// {
//     name: '湖北',
//     value: 1052
// },
// {
//     name: '广西',
//     value: 33
// },
// {
//     name: '甘肃',
//     value: 7
// },
// {
//     name: '山西',
//     value: 9
// },
// {
//     name: '内蒙古',
//     value: 7
// },
// {
//     name: '陕西',
//     value: 22
// },
// {
//     name: '吉林',
//     value: 4
// },
// {
//     name: '福建',
//     value: 18
// },
// {
//     name: '贵州',
//     value: 5
// },
// {
//     name: '广东',
//     value: 98
// },
// {
//     name: '青海',
//     value: 1
// },
// {
//     name: '西藏',
//     value: 0
// },
// {
//     name: '四川',
//     value: 44
// },
// {
//     name: '宁夏',
//     value: 4
// },
// {
//     name: '海南',
//     value: 22
// },
// {
//     name: '台湾',
//     value: 3
// },
// {
//     name: '香港',
//     value: 5
// },
// {
//     name: '澳门',
//     value: 5
// }
// ];




option = {
  timeline: {
    data: hour,
    axisType: 'category',
    autoPlay: true,
    playInterval: 750,
    left: '10%',
    right: '10%',
    bottom: '3%',
    width: '80%',
    label: {
        normal: {
            textStyle: {
                color: '#ddd'
            }
        },
        emphasis: {
            textStyle: {
                color: '#fff'
            }
        }
    },
    
    symbolSize: 10,
    lineStyle: {
        color: '#555'
    },
    checkpointStyle: {
        borderColor: '#777',
        borderWidth: 2
    },
    controlStyle: {
        showNextBtn: true,
        showPrevBtn: true,
        normal: {
            color: '#666',
            borderColor: '#666'
        },
        emphasis: {
            color: '#aaa',
            borderColor: '#aaa'
        }
    },

},
baseOption:{
tooltip: {
    //triggerOn: "click",
    show:true,
    formatter: function(e, t, n) {
        //return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
    
    return e.name+"<br />"+"AQI:"+e.value  }
},
visualMap: {
    min: 0,
    max: 1000,
    left: 26,
    bottom: 40,
    showLabel: !0,
    text: ["高", "低"],
    pieces: [{
        gt: 300,
        label: "严重污染",
        color: "#B61F7E"
    }, {
        gte: 200,
        lte: 300,
        label: "重度污染",
        color: "#E4387F"
    }, {
        gte: 150,
        lt: 200,
        label: "中度污染",
        color: "#F86965"
    }, {
        gt: 100,
        lt: 150,
        label: "轻度污染",
        color: "#FE9837"
    }, {
      gt: 50,
      lt: 100,
      label: "良",
        color: "#F8C21C"
    },{
      gt: 0,
      lt: 50,
      label: "优",
        color: "#23CC72"
    }],
    textStyle:{
      color:"#F8C21C"
    },
    show: !0
}, 

geo: {
    map: "china",
    roam: !1,
    scaleLimit: {
        min: 1,
        max: 2
    },
    zoom: 1.23,
    top: 120,
    label: {
        normal: {
            show: !0,
            fontSize: "14",
            fontWeight: 'bold',
            color: "rgba(0,0,0,0.7)"
        }
    },
    itemStyle: {
        normal: {
            //shadowBlur: 50,
            //shadowColor: 'rgba(0, 0, 0, 0.2)',
            borderColor: "rgba(0, 0, 0, 0.2)"
        },
        emphasis: {
            areaColor: "#33AFDD",
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            borderWidth: 0
        }
    }
},
　 },

options:[]
};

for(var i=0;i<hour.length;i++){
  option.options.push({
    series: [{
      name: "确诊病例",
      type: "map",
     geoIndex: 0,
      data: mapdata[i]
  }]
  })
}

  myChart.setOption(option);
myChart.on('click',function(param){
  prodetail(param.name);
  cityda(param.name);
  document.getElementById("provincename").innerText=param.name;
  document.getElementById("provinceleida").innerText=param.name+"污染源分析图"
});
  
 





  // // 监听浏览器缩放，图表对象调用缩放resize函数
  // window.addEventListener("resize", function() {
  //   myChart.resize();
  // });
};


(function(){
  cityda("山东");
  cityAQI("青岛");
  citydetail("12","青岛");
   citypm25("青岛");
   prodetail("山东");
  document.getElementById("provincename").innerText="山东";
  document.getElementById("provinceleida").innerText="山东污染源分析图";
  document.getElementById("citytimedetail").innerText="青岛12时污染源分析";
//   window.onload(cityAQI("青岛"));
// window.onload(cityda("山东"));

// window.onload(citydetail("12","青岛"));
})();