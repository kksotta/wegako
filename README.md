#公司端数据接口文档
##目录
### &sect; [类别](#category)
* [进入小程序首页](#first)
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

## <a name="first"> &sect; 进入小程序首页</a>

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
  data:{
    // 新用户 未注册 
    'status':1,
    
    
    //公司管理员
    'status':0,
    logintype:'manager',
     //数据表更新的信息 
    message:[
      //公司
          //newscount指的是所有待处理的信息，带有信息标记wait:1  管理员查看后 更该数据wait:0
        {'tag':'message','count':30},
        {'tag':'contact','drivers':'1260人'},
        {'tag':'carfile','count':'2500辆'},
        {'tag':'insure','count':8},
        {'tag':'affiliated','count':8},
        {'tag':'assurance','count':10},
        {'tag':'credit','count':9},
        {'tag':'drivecard','count':15},
        {'tag':'tradecard','count':14},
        {'tag':'safeguard','count':4},
        {'tag':'gps','count':6}
      
      ]
      
      //司机
      'status':0,
      'logintype':'driver',
      'message':[
          {'tag':'insure','count':8},
          {'tag':'affiliated','count':8},
          {'tag':'assurance','count':10},
          {'tag':'credit','count':9},
          {'tag':'drivecard','count':15},
          {'tag':'tradecard','count':14},
          {'tag':'safeguard','count':4},
          {'tag':'gps','count':6}
      ]
    }
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
  {
    status:0,
    data:[
      {name:'贷款申请',advert:'低利率·高额度的车辆贷款服务',bgimg:'宣传图片的地址',codeurl:'链接地址的二维码'},
      {name:'二手车',advert:'专业的二手卡车交易平台',bgimg:'宣传图片的地址',codeurl:'连接地址的二维码'}
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
appid | string | 1 | 用户|管理员的appid
     
### 返回结果

```

  {
    status:0,
    //管理员
    data:{name:'管理员的真实姓名',avatar:'管理员头像地址',phonenum:'管理员手机号',company:'管理员公司'}
    
    //司机
    data:{name:'杨过',carnum:'沪D5540',phonenum:'13063569465',avatar:'用户头像地址'}
  
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
openid | string | 1 | openid
     
### 返回结果

```

  {
    //公司管理员
    'status':0,
    logintype:'manager',
     //数据表更新的信息 
    message:[
      //公司
        //newscount指的是所有待处理的信息，带有信息标记wait:1  管理员查看后 更该数据wait:0
        //公司管理员加入
        {type:'join',right:'超级管理员',openid:'e3243432ed',name:'李香兰',phonenum:'13063363654'},
        //车主加入
        {type:'join',right:'车主',openid:'35rtyr3ty4e',name:'nickW',phonenum:'13163465545',carnum:['沪D11620','沪D85215'....]},
        //管理员加入
        {type:'join',right:'管理员',power:'查看通讯录...',name:'吴彦祖',openid:'4re43e4e4re4e',phonenum:'13664654654'},
        {type:'join',right:'操作员',power:'查看，打电话，。。。',name:'大娃',openid:'sa6d4as65',phonenum:'13697456465'},
        
        // 缴费 （挂靠，二维，gps）
        {type:'payment',paytype:''}
        
      
      ]
      
      //司机
      'status':0,
      'logintype':'driver',
      'message':[
          {'tag':'insure','count':8},
          {'tag':'affiliated','count':8},
          {'tag':'assurance','count':10},
          {'tag':'credit','count':9},
          {'tag':'drivecard','count':15},
          {'tag':'tradecard','count':14},
          {'tag':'safeguard','count':4},
          {'tag':'gps','count':6}
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

###  管理员发布公告

### 请求说明

接口：''

方式:'get|post'

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
openid | string | 1 | 选择接收用户的openid
openid | string | 1 | 选择接收用户的openid
.....

### 返回结果示例

```
  {
    status:0,
    requestMsg:ok
  }

```



****

### <a name="invite"> &sect; 邀请车主</a>

### 请求说明

接口：‘’;

调用方式:'';

### 参数说明

小程序用户端的二维码地址

### 返回结果示例

```

  {   status:0,
      data:[{imgurl:'htpps://weixin.com/uercode.png'}]
  }

```

****

### <a name="contact"> &sect; 车主通讯录</a>

### 请求说明

接口示例：‘’;

调用方式:'get|post'

### 参数说明
参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
openid | string | 1 | 用户的openid


### 返回结果示例

```
{   status:0,
    Data:[{ "tag": "A", "textArray": [
                    {'openid':'sad56as75d','letter':'A','name':'阿里','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'openid':'sad56as75d','letter':'A','name':'阿里','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'openid':'sad56as75d','letter':'A','name':'阿里','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'openid':'sad56as75d','letter':'A','name':'阿里','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
                ] }, 
               { "tag": "B", "textArray": [
                    {'openid':'sad56as75d','letter':'B','name':'布欧','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'openid':'sad56as75d','letter':'B','name':'布欧','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'openid':'sad56as75d','letter':'B','name':'布欧','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'openid':'sad56as75d','letter':'B','name':'布欧','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] },
               { "tag": "C", "textArray": [
                   {'openid':'sad56as75d','letter':'C','name':'陈奕迅','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "D", "textArray": [
                   {'openid':'sad56as75d','letter':'D','name':'大龙','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "E", "textArray": [
                   {'openid':'sad56as75d','letter':'E','name':'Eson','num':'沪b4654','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
              .....
               { "tag": "#", "textArray": [] }
               ],
}

```

### 通讯录车主详情

### 请求说明

接口示例：‘’;

调用方式:'get|post'

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
openid | string | 1 | 用户的openid


### 返回结果示例

```

  {
      status:0,
      data:[
      
        userfile:{
          openid:'as5d76sa',
          realName:'奥巴马',
          sex:'1',
          birthday:'1967-8-26',
          phoneNum:['13936637888','15947576546'],
          nickName:'blue_sky',
          telnumber:'021-5884665|0215884665',
          address:'上海市闸北区天目西路108号503',
          company:'上海顺丰快运',
          companyaddress:'上海市火车站附近',
          idcard:'341655196708263345',
        },
        gkcars:[
          {
            carImg:'https//:hahah.com/xxx.jpg|png',
            carnum:'沪D1625',
            mode:'正常营运',
            gkcompany:'上海申通快运'
          },
          {
            carImg:'https//:hahah.com/xxx.jpg|png',
            carnum:'沪D0625',
            mode:'已报废',
            gkcompany:'上海快鸟'
          }
          .....
        ],
        path:[
            {'time':'2016.10.1','coord':'上海市虹口区曲阳路336号'},
            {'time':'2016.11.1','coord':'上海市虹口区曲阳路36号'},
            {'time':'2016.12.1','coord':'上海市虹口区哈哈l路36号'},
            {'time':'2017.12.2','coord':'上海市虹口区货车路336号'}
        ]
      ]
  }

```

****

### <a name="filemanage"> &sect;档案管理(公司管理的卡车信息)</a>

### 请求说明

接口示例：‘’;

调用方式:'get|post'

### 参数说明

不需要参数

### 返回结果示例

```

{   status:0,
    data:[
          {
            carImg:'https//:hahah.com/xxx.jpg|png',
            carnum:'沪D1625',
            mode:'正常营运',
            gkcompany:'上海申通快运'
          },
          {
            carImg:'https//:hahah.com/xxx.jpg|png',
            carnum:'沪D0625',
            mode:'已报废',
            gkcompany:'上海快鸟'
          }
          .....
        ],
}

```

### 车辆信息详情

### 请求说明

接口示例：‘’;

调用方式:'get|post'

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
carnum | string | 1 | 车辆的车牌号


### 返回结果示例

```

  {
    status:0,
    data:[
      carinfo:{
            owner:'奥巴马',
            phonenum:'1388556645',
            carImg:'https//:hahah.com/xxx.jpg|png',
            carnum:'沪D0625',
            mode:'已报废',
            gkcompany:'上海快鸟'
          },
      payment:[
        {carnum:'沪D0625',type:'挂靠缴费记录',typeimg:'挂靠缴费图片地址',enddate:'2017-10-6',mode:待缴费'},
        {carnum:'沪D0625',type:'车辆投保记录',typeimg:'保险图片地址',enddate:'2017-10-6',mode:待续保'},
        {carnum:'沪D0625',type:'车辆还款记录',typeimg:'车辆贷款图片地址',enddate:'2017-10-6',mode:待还款'},
        {carnum:'沪D0625',type:'行驶证代办缴费记录',typeimg:'行驶证图片地址',enddate:'2017-10-6',mode:待审验'},
        {carnum:'沪D0625',type:'营运证代办缴费记录',typeimg:'营运证图片地址',enddate:'2017-10-6',mode:已逾期'},
        {carnum:'沪D0625',type:'二维代办缴费记录',typeimg:'二维图片地址',enddate:'2017-10-6',mode:正常'},
        {carnum:'沪D0625',type:'GPS缴费记录',typeimg:'gps图片地址',enddate:'2017-10-6',mode:正常'}
        
      ],
      file:{
        filenun:'DA454d45',
        cartype:'一汽解放JF9重卡',
        carnum:'沪D0625',
        registdate:'2015-6-21',
        trailernum:'沪DD1600',
        trailerdate:'2015-7-12',
        enginenum:'65464644',
        carframenum:'64646466465',
        invoicenum:'6465465465',
        buydate:'2015-4-22',
        buycode:'46134656467464',
        gkcompany:'上海快鸟',
        drivelicense:{
          type:'货运',
          registdate:'2014-3-4',
          indate:'2015-3-4',
          imgurl:['证件正面照地址','反面照地址']
        },
        tradecard:{
          tradecarnum:'524465',
          registdate:'2015-1-1',
          indate:'2016-1-1',
          imgurl:['证件正面照地址','反面照地址']
        }
      },
      carcredit:{
        amount:'2000000',
        allloan:'18期',
        nowloan:{
          count:'10期',
          type:'还款记录',
          appid:'56sa6d465d车主的appid'
        },
        annualrate:'6%',
        starttime:'2015-4-22',
        creditHZ:'月还',
        credittype:'等额本息',
        bandsman:{
          name:'杨过',
          appid:'担保人的appid'
        },
        pact:['合同正面照','合同反面照']
     },
     insurance:[
        {year:'2015',data:'2016-4-20',oddnum:'456465465',company:'平安保险',types:['交强险','第三者责任险','车损险'],sum:'12000元'},
        {year:'2014',data:'2016-4-20',oddnum:'456465465',company:'平安保险',types:['交强险','第三者责任险','车损险'],sum:'12000元'},
        {year:'2013',data:'2016-4-20',oddnum:'456465465',company:'平安保险',types:['交强险','第三者责任险','车损险'],sum:'12000元'},
     ],
     accident:[
      {year:'2017',pending:'1',accidentdate:'2017-1-14',claimsum:'2000元',actual:'0'},
      {year:'2017',pending:'1',accidentdate:'2017-1-26',claimsum:'2000元',actual:'2000元'}
      {year:'2015',pending:'0',accidentdate:'2015-2-14',claimsum:'2000元',actual:'2000元'}
     ]
    ]
  }

```

****

### <a name="danger"> &sect;出险管理</a>

### 请求说明

接口:'';

请求方式:'post|get'
      
### 接口调用示例     

```

```

### 参数说明

暂无

### 返回参数示例

```
  {
    status:0,
    data:[
      {
                  //待处理，添加待处理缴费标记 wait:1  管理员查看后 更改wait：0        
        pending：[
          {appid:'sd8asd68asd',owner:'阿虎',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',wait:1},
          {appid:'sd8asd68asd',owner:'李强',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',wait:1},
          {appid:'sd8asd68asd',owner:'吴敏',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',wait:1}
        ],
        processed:[
          {appid:'sd8asd68asd',owner:'阿虎',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',actual:'2000元'},
          {appid:'sd8asd68asd',owner:'李强',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',actual:'2000元'},
          {appid:'sd8asd68asd',owner:'吴敏',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',actual:'2000元'}
        ]
      }
    ]
  }

```
  
### 出险详情

#### 请求说明

接口:'';

请求方式:'post|get'
      
#### 接口调用示例     

```

```

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
carnum | string | 1 | 车辆的车牌号

#### 返回参数示例

```
  {
    status:0,
    data:{
      mode:'申报中',
      owner:'阿虎',
      carnum:'沪D6545',
      accident:'2017-1-22',
      amount:'2000元',
      driver:'吴京',
      address:'上海市静安区天目西路恒丰路恒通路路口',
      insurecompany:'平安保险公司',
      acceptdate:'2017-1-22',
      //操作员未处理
      manange:{
        actual:'',
        timestamp:'',
        operator:''
      }
      //操作员已处理
      manange:{
        actual:'2000元',
        timestamp:'2017-4-1  14:22',
        operator:'操作员A'
      }
    }
  }
  
  
```

****

### <a name="affiliated"> &sect;挂靠费管理</a>

### 请求说明

接口示例:'';

请求方式:'post|get'

### 调用接口示例
```
  php || api
  
```
### 参数说明

公司管理员查看不需要参数

### 返回数据示例

```
  {
    status:0,
    data:[
      //待处理，添加待处理缴费标记 wait:1  管理员查看后 更改wait：0 
      {openid:'as75d7sa',realname:'王虎',nickname:'虎子',avatar:'头像地址',carnum:'沪D4545',registdate:'2015-12-12',indate:'2016-12-12',mode:'已逾期',wait:1},
      {openid:'as75d7sa',realname:'王志明',nickname:'老王',avatar:'头像地址',carnum:'沪D0545',registdate:'2016-2-28',indate:'2017-2-28',mode:'待缴费',,wait:1},
     {openid:'as75d7sa',realname:'王湖',nickname:'老王',avatar:'头像地址',carnum:'沪D9545',registdate:'2017-2-28',indate:'2018-2-28',mode:'已缴费',wait:0},
      ....
    ]
  }

```

### 挂靠费用详情


### 请求说明

接口示例:'';

请求方式:'post|get'

### 调用接口示例
```
  php || api
  
```
### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
carnum | string | 1 | 车辆的车牌号

### 返回数据示例

```
  {
    status:0,
    data:{
      openid:'车主的openid',
      owner:'黄蓉',
      avatar:'车主头像地址',
      carnum:'沪D4545',
      phonenum:'13895689564',
      paytype:'挂靠费用',
      mode:'待缴费',
      nowpay:'2000元',
      lastpay:'2000元',
      lastpaydate:'2016-1-22',
      indate:'2017-1-21',
      latestdate:'2017-1-22',
      otherway:'0',//其他缴费途径 0 =》没有
    }
  }

```

### 挂靠费用查看车主详细信息

### 请求说明

接口示例:'与查看车主详情的接口一致';

请求方式:'post|get'

### 调用接口示例
```
  php || api
  
```
### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
carnum | string | 1 | 车辆的车牌号

### 返回结果示例

```

  {
    status:0,
    data:[
      carinfo:{
            owner:'奥巴马',
            phonenum:'1388556645',
            carImg:'https//:hahah.com/xxx.jpg|png',
            carnum:'沪D0625',
            mode:'已报废',
            gkcompany:'上海快鸟'
          },
      payment:[
        {carnum:'沪D0625',type:'挂靠缴费记录',typeimg:'挂靠缴费图片地址',enddate:'2017-10-6',mode:待缴费'},
        {carnum:'沪D0625',type:'车辆投保记录',typeimg:'保险图片地址',enddate:'2017-10-6',mode:待续保'},
        {carnum:'沪D0625',type:'车辆还款记录',typeimg:'车辆贷款图片地址',enddate:'2017-10-6',mode:待还款'},
        {carnum:'沪D0625',type:'行驶证代办缴费记录',typeimg:'行驶证图片地址',enddate:'2017-10-6',mode:待审验'},
        {carnum:'沪D0625',type:'营运证代办缴费记录',typeimg:'营运证图片地址',enddate:'2017-10-6',mode:已逾期'},
        {carnum:'沪D0625',type:'二维代办缴费记录',typeimg:'二维图片地址',enddate:'2017-10-6',mode:正常'},
        {carnum:'沪D0625',type:'GPS缴费记录',typeimg:'gps图片地址',enddate:'2017-10-6',mode:正常'}
        
      ],
      file:{
        filenun:'DA454d45',
        cartype:'一汽解放JF9重卡',
        carnum:'沪D0625',
        registdate:'2015-6-21',
        trailernum:'沪DD1600',
        trailerdate:'2015-7-12',
        enginenum:'65464644',
        carframenum:'64646466465',
        invoicenum:'6465465465',
        buydate:'2015-4-22',
        buycode:'46134656467464',
        gkcompany:'上海快鸟',
        drivelicense:{
          type:'货运',
          registdate:'2014-3-4',
          indate:'2015-3-4',
          imgurl:['证件正面照地址','反面照地址']
        },
        tradecard:{
          tradecarnum:'524465',
          registdate:'2015-1-1',
          indate:'2016-1-1',
          imgurl:['证件正面照地址','反面照地址']
        }
      },
      carcredit:{
        amount:'2000000',
        allloan:'18期',
        nowloan:{
          count:'10期',
          type:'还款记录',
          appid:'56sa6d465d车主的appid'
        },
        annualrate:'6%',
        starttime:'2015-4-22',
        creditHZ:'月还',
        credittype:'等额本息',
        bandsman:{
          name:'杨过',
          appid:'担保人的appid'
        },
        pact:['合同正面照','合同反面照']
     },
     insurance:[
        {year:'2015',data:'2016-4-20',oddnum:'456465465',company:'平安保险',types:['交强险','第三者责任险','车损险'],sum:'12000元'},
        {year:'2014',data:'2016-4-20',oddnum:'456465465',company:'平安保险',types:['交强险','第三者责任险','车损险'],sum:'12000元'},
        {year:'2013',data:'2016-4-20',oddnum:'456465465',company:'平安保险',types:['交强险','第三者责任险','车损险'],sum:'12000元'},
     ],
     accident:[
      {year:'2017',pending:'1',accidentdate:'2017-1-14',claimsum:'2000元',actual:'0'},
      {year:'2017',pending:'1',accidentdate:'2017-1-26',claimsum:'2000元',actual:'2000元'}
      {year:'2015',pending:'0',accidentdate:'2015-2-14',claimsum:'2000元',actual:'2000元'}
     ]
    ]
  }

```
### 挂靠费用--查看车主这台车的缴费记录

### 请求说明

接口示例:'只查看当前车牌的缴费记录';

请求方式:'post|get'

### 调用接口示例
```
  php || api
  
```
### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
carnum | string | 1 | 车辆的车牌号

### 返回结果示例

```
  {
    status:0,
    data:[{
        paytype:'挂靠管理费',
        paylist:{
          2016:
            {mode:'待缴费',amount:'2000元',lateset:'2017-2-28'},//每年此辆车只有一个缴费状态1.待缴费
            {mode:'已逾期',amount:'2000元',lateset:'2017-2-20'},//2.已逾期
            {mode:'已缴费',amount:'2000元',paydate:'2017-2-20',lateset:'2018-2-19',timestamp:'2017-2-20 14:00:32'}//3.已缴费
          ,
          2015:{mode:'已缴费',amount:'2000元',paydate:'2017-2-20',lateset:'2018-2-19',timestamp:'2017-2-20 14:00:32'}//3.已缴费
          
          .....
        
        }
    }]
  
  }

```

### 挂靠费用--修改挂靠费用


### 请求说明

接口示例:'';

请求方式:'post|get'

### 调用接口示例
```
  php || api
  
```
### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
carnum | string | 1 | 车辆的车牌号
paycount | string | 1 | 更改后的挂靠费金额
reason | string | 1 | 更改理由


### 返回结果示例

```
  {
    status:0,
    
    requestmsg:ok
  }

```
*****

### <a name="assurance"> &sect; 保险续费管理</a>

### 请求示例

接口:'';

请求方式:'post|get'

### 接口请求示例

```
php|api

```
### 参数说明

公司管理员查看不需要参数

### 返回数据示例

```
  {
    status:0,
    data:[
      //待处理，添加待处理缴费标记 wait:1  管理员查看后 更改wait：0 
      {openid:'as75d7sa',realname:'王虎',nickname:'虎子',avatar:'头像地址',carnum:'沪D4545',registdate:'2015-12-12',indate:'2016-12-12',mode:'已逾期',wait:1},
      {openid:'as75d7sa',realname:'王志明',nickname:'老王',avatar:'头像地址',carnum:'沪D0545',registdate:'2016-2-28',indate:'2017-2-28',mode:'待缴费',wait:1},
      {openid:'as75d7sa',realname:'王志明',nickname:'老王',avatar:'头像地址',carnum:'沪D0545',,registdate:'2016-2-29'indate:'2017-3-1',mode:'已缴费',wait:0},
      {openid:'as75d7sa',realname:'葫芦娃',nickname:'排队救爷爷',avatar:'头像地址',carnum:'沪D7845',reigistdate:'',indate:'',mode:'待投保',wait:0},
      ....
    ]
  }
  
```

### 续保信息详情

### 请求示例

接口:'';

请求方式:'post|get'

### 接口请求示例

```
php|api

```
### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
carnum | string | 1 | 车辆的车牌号

#### 备注
    缴费结构类似
    
### 返回数据示例
  
```
  {
    status:0,
    data:[
      {}
    ]
  }
  
```
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
