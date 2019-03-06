//index.js
//获取应用实例
const app = getApp()
//获取工具包
var util = require("../../utils/util.js");

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    classArray: ["一年级一班","一年级二班","二年级一班","二年级二班"],
    objectClassArray: [
      {
        id: 0,
        name: '一年级一班'
      },
      {
        id: 1,
        name: '一年级二班'
      },
      {
        id: 2,
        name: '二年级一班'
      },
      {
        id: 3,
        name: '二年级二班'
      }
    ],
    classIndex: 0,
    timeArray: [['周一', '周二', '周三', '周四', '周五', '周六', '周日'], ['第一二节课', '第三四节课', '第五六节课', '第七八节课', '第九十节课']],
    objectTimeArray: [
      [
        {
          id: 0,
          name: '周一'
        },
        {
          id: 1,
          name: '周二'
        },
        {
          id: 2,
          name: '周三'
        },
        {
          id:3 ,
          name: '周四'
        },
        {
          id:4 ,
          name: '周五'
        },
        {
          id: 5,
          name: '周六'
        },
        {
          id: 6,
          name: '周日'
        }
      ], [
        {
          id: 0,
          name: '第一二节课'
        },
        {
          id: 1,
          name: '第三四节课'
        },
        {
          id: 2,
          name: '第五六节课'
        },
        {
          id: 3,
          name: '第七八节课'
        },
        {
          id: 4,
          name: '第九十节课'
        }
      ]
    ],
    timeIndex: [0, 0],
    equipmentItems: [
      { name: '0', value: '单片机' },
      { name: '1', value: '电路板' },
      { name: '2', value: '电烙铁' }
    ],
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

  //获取当前用户信息
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //班级选择器
  bindClassChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      classIndex: e.detail.value
    })
  },

  //时间选择器
  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      timeIndex: e.detail.value
    })
  },

  //器材选择器
  bindEquipmentChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  //提交表单
  formSubmit: function(e) {
    //获取提交表单的当前时间
    var datetime = util.formatTime(new Date());
    console.log("Current datetime = "+datetime);

    //获取input文本框的值
    var formData = e.detail.value;
    console.log('form发生了submit事件，携带数据为：', formData);

    //提交表单
    wx.request({
      url: 'http://localhost:8080/laboratory/laboratory/saveMonad',
      data: {
        "cls": formData.cls,
        "stuName": formData.name,
        "time": formData.time,
        "date": util.formatTime,
        "equipment": formData.equipment,
        "note": formData.note
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log("Save monad successfully. res = "+res.data);
      }
    });

    var _this = this;
    console.log(_this.data.access_token, 'access_token');
    console.log(app.globalData.openid, 'openid');
    //formid是设置了form的属性report-submit为true时，通过e.detail.formId获取
    console.log(e.detail.formId, 'formid');
    //发起请求，发送模板信息
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + _this.data.access_token,
      data: {
        "touser": app.globalData.openid,
        "template_id": 'JydxO0HYqt2xiX-brj2dVyQZR7rSDzdLuuZAK3Wr_hc',
        "form_id": e.detail.formId,
        "data": {
          "k eyword1": {
            "value": datetime,
            "color": "#173177"
          },
          "keyword2": {
            "value": "申请通过",
            "color": "#173177"
          },
          "keyword3": {
            "value": formData.equipment,
            "color": "#173177"
          },
          "keyword4": {
            "value": userInfo.nickName,
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
    });
  }
})
