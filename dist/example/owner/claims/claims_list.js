// example/owner/claims/claims_list.js
var sliderLeft = 15; // 设置slider的两边空白
Page({
    data: {
        payopen:false,
        isfull:false
    },
    listpay: function(e){
    if(this.data.payopen){
      this.setData({
        payopen:false,
        isfull:false
      })
    }else{
      this.setData({
        payopen:true,
        isfull:true
      })
    }
    console.log(e.target)
  },
  hidebg: function(e){
    this.setData({
      payopen:false,
      isfull:false
    })
  },
    onReady: function () {
        wx.setNavigationBarTitle({title:"出险历史"});
    }
});