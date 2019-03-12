// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
var app = getApp()
Page({
  data: {


    weatherData: '',
    imgUrls: [
      'https://api.superbed.cn/pic/5c0387b1c4ff9e0582460b02',
      'https://ww1.sinaimg.cn/large/007iUjdily1fxr4wwa4d1j30bo06o74p',
      'https://api.superbed.cn/pic/5c020828c4ff9e05833a10dd'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000

  },
  click_swiper: function (e) {
    // 当点击图片上的事件的时候，触发这个函数
    wx.navigateTo({
      url: 'pages/study/study',
    })
  },



  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: '5ItZDr4Qv0ctsrrcRcW9U06sKI6ilUew'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = 'PM2.5:' + weatherData.pm25 + '\n' + '     日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      
      that.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
  }
})