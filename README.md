#公司端数据接口文档
##目录
### &sect; [类别](#category)
* [进入小程序](#first)
* [首页](#home)
* [发现](#titles)
* [设置](#set)
* [信息页](#message)
* [公告页](#affiche)
* [邀请车主](#invite)
* [车主通讯录](#contact)
* [档案管理](#filemanage)
* [出险管理](#danger)
* [挂靠费用管理](#affiliated)
* [续保管理](#assurance)
****

## <a name="first"> &sect; 进入小程序</a>

### 请求说明 
接口地址:"";

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
code | string | 1 | 服务器用来获取sessionKey的必要参数
iv | string | 1 | 加密算法的初始向量
encryptedata| string | 1 | 加密过的字符串

### 请求示例
```
  hpps://......com/index.php
  
```
### 返回结果

```
{
  status:0,
  appid:jasdg34sjgdajs34asgdaj+
}

```

****

## <a name="home"> &sect; 首页</a>
### 请求说明
接口地址："";
调用方式：get/post

### 参数详情
参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
appid | string | 1 | 当前用户id

### 请求示例
```
  https://www.服务器.com/home.php?appid=wegjwgsjadjgigzxc54sdasd46
```
### 返回结果
```
 { status:0,
   data:[
      'news':{'newsCount':'8'},
      'contacts':{'registraters':'1200'},
      'file':{'carsCount':'1220'},
      'insure':{'newsCount':'8'},
      'affiliated':{'newsCount':'8'},
      'assurance':{'newsCount':'8'},
      'carCredit':{'newsCount':'8'},
      'driveCard':{'newsCount':'8'},
      'tradeCard':{'newsCount':'8'},
      'safeGuard':{'newsCount':'8'},
      'gps':{'newsCount':'8'},
      'finance':{'newsCount':'8'}
      ]
}

```
****

## <a name="titles"> &sect;发现</a>

### 请求说明
接口地址:'';
调用方式:'get|post'

### 请求示例

```
  api

```

### 返回结果

```
  { status:0,
    data:[
      {'title':'顺丰上市对快递市场的冲击','timestamp':'2017-2-12  14:36',author:'专职作家',content:[
        {imgurl:'',text:'巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'},
        {imgurl:'http://www.gk360che.com/xx.jpg',text:'巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'},
        
       ....
        ],
        comments:[
          {author : "爱美食的美人鱼1573" avatar : "http://pic3.zhimg.com/e9a9215f426b4a0320617b81799fcb72_im.jpg" content : "写得很不错" id : 27889600 likes : 0 reply_to : Object time : 1484991944 times : "2017-01-21 17:45:44"},
          {author : "爱美食的美人鱼1573" avatar : "http://pic3.zhimg.com/e9a9215f426b4a0320617b81799fcb72_im.jpg" content : "写得很不错" id : 27889600 likes : 0 reply_to : Object time : 1484991944 times : "2017-01-21 17:45:44"},
          .....
        ]
      }，
       {'title':'顺丰上市对快递市场的冲击','timestamp':'2017-2-12  14:36',author:'专职作家',content:[
        {imgurl:'',text:'巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'},
        {imgurl:'http://www.gk360che.com/xx.jpg',text:'巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'},
        
       ....
        ],
        comments:[
          {author : "爱美食的美人鱼1573" avatar : "http://pic3.zhimg.com/e9a9215f426b4a0320617b81799fcb72_im.jpg" content : "写得很不错" id : 27889600 likes : 0 reply_to : Object time : 1484991944 times : "2017-01-21 17:45:44"},
          {author : "爱美食的美人鱼1573" avatar : "http://pic3.zhimg.com/e9a9215f426b4a0320617b81799fcb72_im.jpg" content : "写得很不错" id : 27889600 likes : 0 reply_to : Object time : 1484991944 times : "2017-01-21 17:45:44"},
          .....
        ]
      }，
      .....
    ]
}

```
****

### <a name="set"> &sect;设置</a>

### 请求说明
      
      接口地址:'';
      请求方试:get|post;
      
### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
appid | string | 1 | 用户的appid
     
### 返回结果

```

  {
    status:0,
    data:{userName:'杨过',carNum:'沪D5540',phoneNum:'13063569465'}
  
  }

```

****

### <a name="message"> &sect;消息</a>

### 请求说明
      
      接口地址:'';
      请求方试:get|post;
      
### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
openid | string | 1 | 管理员的openid
     
### 返回结果

```

  {
    status:0,
    data:[
      {openid:'sususasd5a6s7das',type:'加入',timestamp:"2016-12-22 14:22",name:'用户A',persontype:'用户',phoneNum:'13854655585',carNum:'沪A45454'},
      {openid:'sa5d7a6s5d7asd57',type:'出险理赔申报',timestamp:'2017-1-22  14:56',name:'用户B',persontype:'用户',phoneNum:'13046155555',carNum:'沪D444'},
       {openid:'sa5d7a6s5d7asd57',type:'缴纳挂靠费',timestamp:'2017-1-22  14:56',name:'用户c',persontype:'用户',phoneNum:'13046155555',carNum:'沪D444',cash:'2000'},
        {openid:'sa5d7a6s5d7asd57',type:'转账理赔款',timestamp:'2017-1-22  14:56',name:'操作员A',persontype:'操作员',phoneNum:'13046155555',carNum:'沪D444',cash:'2000'},
    
    
    
    ]
  
  }

```

#### 待商讨!!!!

****

### <a name="affiche"> &sect; 公告</a>

### 请求说明
接口：''
方式:'get|post'

### 没有参数

### 返回结果示例
```
      {
        status:'0',
        data:[
           {'title':'顺丰上市对快递市场的冲击','timestamp':'2017-2-12  14:36',author:'专职作家',content:[
            {imgurl:'',text:'巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'},
            {imgurl:'http://www.gk360che.com/xx.jpg',text:'巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'},

           ....
            ]
          }，
          {'title':'顺丰上市对快递市场的冲击','timestamp':'2017-2-12  14:36',author:'专职作家',content:[
            {imgurl:'',text:'巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'},
            {imgurl:'http://www.gk360che.com/xx.jpg',text:'巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'},

           ....
            ]
          }，
          
          .......
        ]
     }
```
      
****
### <a name="invite"> &sect; 邀请车主</a>
      
      
      
      
      
      
      
      
      
