//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    access_token: ''
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    //当前页面加载时获取access_token
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      data: {
        grant_type: 'client_credential',
        appid: 'wxa64a1ba047e44aaf',
        secret: '3cba81eba3ace8df17a4107bc6d36a74'
      },
      method: 'get',
      success: function (res) {
        this.setData({
          access_token: res.data.access_token
        })
      }
    });
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //提交表单
  formSubmit(e) {
    //获取input文本框的值
    var txt = e.detail.value.text;
    console.log('form发生了submit事件，携带数据为：', txt);

    var _this = this;
    console.log(_this.data.access_token, 'access_token');
    console.log(app.globalData.openid, 'openid');
    //formid是设置了form的属性report-submit为true时，通过e.detail.formId获取
    console.log(e.detail.formId, 'formid');
    //发起请求
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + _this.data.access_token,
      data: {
        "touser": app.globalData.openid,
        "template_id": 'JydxO0HYqt2xiX-brj2dVyQZR7rSDzdLuuZAK3Wr_hc',
        "form_id": e.detail.formId,
        "data": {
          "k eyword1": {
            "value": "2019-2-21",
            "color": "#173177"
          },
          "keyword2": {
            "value": "申请通过",
            "color": "#173177"
          },
          "keyword3": {
            "value": txt,
            "color": "#173177"
          },
          "keyword4": {
            "value": "楷兵",
            "color": "#173177"
          }
        },
        "emphasis_keyword": "keyword3.DATA"
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})
