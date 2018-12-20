const defaultTime = {
  defaultWorkTime: 25,
  defaultRestTime: 5
}

App({
  onLaunch: function () {
    let workTime = wx.getStorageSync('workTime')
    let restTime = wx.getStorageSync('restTime')
    if (!workTime) {
      wx.setStorage({
        key: 'workTime',
        data: defaultTime.defaultWorkTime
      })
    }
    if (!restTime) {
      wx.setStorage({
        key: 'restTime',
        data: defaultTime.defaultRestTime
      })
    }
  }
});
import { log, promiseHandle } from 'utils6/util';

App({
  getUserInfo(cb) {
    if (typeof cb !== "function") return;
    let that = this;
    if (that.globalData.userInfo) {
      cb(that.globalData.userInfo);
    } else {
      promiseHandle(wx.login).then(() => promiseHandle(wx.getUserInfo)).then(res => {
        that.globalData.userInfo = res.userInfo;
        cb(that.globalData.userInfo);
      }).catch(err => {
        log(err);
      });
    }
  },

  globalData: {
    userInfo: null
  },

  //自定义配置
  settings: {
    debug: true, //是否调试模式
    moreLink: 'http://github.com/oopsguy'
  }
});  