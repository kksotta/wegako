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
* [车主挂靠费用处理](#owner_gk)
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
    companyid:'公司id',
    mangerid:'管理员id',
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
      companyid:'所属公司id',
      ownerid:'车主id',
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
managerid | string | 1 | 用户|管理员的id
companyid | string | 1 | 公司id
     
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
company | string | 1 | 公司的openid
     
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
        {type:'join',right:'超级管理员',openid:'e3243432ed',name:'李香兰',phonenum:'13063363654',timestamp:'2016-10-2 14:20:26',wait:1},
        //车主加入
        {type:'join',right:'车主',openid:'35rtyr3ty4e',name:'nickW',phonenum:'13163465545',carnum:['沪D11620','沪D85215'....],timestamp:'2016-10-2 14:20:26',wait:1},
        //管理员加入
        {type:'join',right:'管理员',power:'查看通讯录...',name:'吴彦祖',openid:'4re43e4e4re4e',phonenum:'13664654654',timestamp:'2016-10-2 14:20:26',wait:1},
        {type:'join',right:'操作员',power:'查看，打电话，。。。',name:'大娃',openid:'sa6d4as65',phonenum:'13697456465',timestamp:'2016-10-2 14:20:26',wait:1},
        
        // 缴费 （挂靠，二维，gps，保险,营运证,行驶证）
        {type:'payment',paytype:'挂靠',name:'小娃',openid:'32445234sadas',sum:'2000元',timestamp:'2016-10-2 14:20:26',wait:1},
        {type:'payment',paytype:'二维',name:'小娃',openid:'32445234sadas',sum:'2000元',timestamp:'2016-10-2 14:20:26',wait:1},
        {type:'payment',paytype:'gps',name:'小娃',openid:'32445234sadas',sum:'2000元',timestamp:'2016-10-2 14:20:26',wait:1},
        {type:'payment',paytype:'车险',name:'小娃',openid:'32445234sadas',sum:'2000元',timestamp:'2016-10-2 14:20:26',wait:1},
        {type:'payment',paytype:'车险',name:'小娃',openid:'32445234sadas',sum:'2000元',timestamp:'2016-10-2 14:20:26',wait:1},
        
         //管理员 | 操作员 为车主完成投保
         {type:'insure',power:'管理员|操作员',manager:'管理员|操作员名字',manager:'13936635465',driver:'司机A',openid:'司机的openid',timestamp:'2016-10-2 14:20:26',wait:1}
        
        //代缴费 （营运证,行驶证）
        {type:'check',checktype:'营运证',power:'管理员|操作员',manager:'管理员|操作员名字',manager:'13936635465',driver:'司机A',openid:'司机的openid',timestamp:'2016-10-2 14:20:26',wait:1},
        {type:'check',checktype:'行驶证',power:'管理员|操作员',manager:'管理员|操作员名字',manager:'13936635465',driver:'司机A',openid:'司机的openid',timestamp:'2016-10-2 14:20:26',wait:1}
        //出险理赔转账
        {type:'claim',power:'管理员|操作员',manager:'管理员|操作员名字',manager:'13936635465',driver:'司机A',openid:'司机的openid',sum:'200元',address:'上海市静安区恒丰路汉中路路口',timestamp:'2016-10-2 14:20:26',wait:1}
        //贷款
        {type:'loan',degree:'第10期',alldegree:'18期',thispay:'2000元',timestamp:'2016-10-2 14:20:26',wait:1}
      ]
      
      //司机
      'status':0,
      'logintype':'driver',
      'message':[
          {type:'交费助手更新信息payassistant',count:'60'},
          {type:'理赔款到账提示claims',count:'9'},
          {type:'公告更新提示papers',count:'9'}
      ]
  
  }

```

****

#### 司机的交费助手信息内容

#### 请求说明
接口:'';

调用方式:'get|post'

#### 参数说明
参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
managerid | string | 1 | 用户的openid
companyid   | string | 1 | 公司的id

#### 接口调用示例

```
  php|api

```
#### 返回参数示例

```
  {
    status:0,
    data:[
      //到期提示
      {type:'due',fee:'挂靠',openid:'车主的openid用于点击查看详情',carnum:'沪D31311（车主费用到期的车辆）',indate:'到期时间2017-3-5',timestamp:'时间戳2017-3-4 15:56:33',wait:1},
      {type:'due',fee:'车险',openid:'车主的openid用于点击查看详情',carnum:'沪D31311（车主费用到期的车辆）',indate:'到期时间2017-3-5',timestamp:'时间戳2017-3-4 15:56:33',wait:1},
      {type:'due',fee:'营运证',openid:'车主的openid用于点击查看详情',carnum:'沪D31311（车主费用到期的车辆）',indate:'到期时间2017-3-5',timestamp:'时间戳2017-3-4 15:56:33',wait:1},
      {type:'due',fee:'行驶证',openid:'车主的openid用于点击查看详情',carnum:'沪D31311（车主费用到期的车辆）',indate:'到期时间2017-3-5',timestamp:'时间戳2017-3-4 15:56:33',wait:1},
      {type:'due',fee:'二维',openid:'车主的openid用于点击查看详情',carnum:'沪D31311（车主费用到期的车辆）',indate:'到期时间2017-3-5',timestamp:'时间戳2017-3-4 15:56:33',wait:1},
      {type:'due',fee:'gps',openid:'车主的openid用于点击查看详情',carnum:'沪D31311（车主费用到期的车辆）',indate:'到期时间2017-3-5',timestamp:'时间戳2017-3-4 15:56:33',wait:1},
      {type:'due',fee:'车贷',openid:'车主的openid用于点击查看详情',carnum:'沪D31311（车主费用到期的车辆）',indate:'到期时间2017-3-5',timestamp:'时间戳2017-3-4 15:56:33',wait:1},
      
      //过期提示
      {type:'pastdue',fee:'挂靠',openid:'车主的openid用于点击查看详情',carnum:'沪D31311（车主费用到期的车辆）',indate:'到期时间2017-3-5',timestamp:'时间戳2017-3-4 15:56:33',wait:1},
      {type:'pastdue',fee:'挂靠',openid:'车主的openid用于点击查看详情',carnum:'沪D31311（车主费用到期的车辆）',indate:'到期时间2017-3-5',timestamp:'时间戳2017-3-4 15:56:33',wait:1},
      ....相似....
      
      //缴费成功提示
      {type:'success',fee:'挂靠',openid:'车主的openid用于点击查看详情',carnum:'沪D31311（车主费用的车辆）',registdate:'有效开市期2016-3-4',indate:'到期时间2017-3-5',timestamp:'时间戳数据录入的时间2017-3-4 15:56:33',wait:1},
      ....相似....
      
    ]
  }

```

****

#### 司机的理赔小秘书

#### 请求说明
接口:'';

调用方式:'get|post'

#### 参数说明
参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
driverid | string | 1 | 用户的openid
companyid | string | 1 | 公司id

#### 接口调用示例

```
  php|api

```
#### 返回参数示例

```
  {
    status:0,
    data:[
        {carnum:'沪D45645',sum:'理赔金额2000元',timestamp:'2016-5-24 17:44:41',wait:1},
        //其他车辆理赔信息格式一样
      ]
  }

```
****

#### 司机的公告板

#### 请求说明
接口:'';

调用方式:'get|post'

#### 参数说明
参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | 公司的openid

#### 接口调用示例

```
  php|api

```
#### 返回参数示例

```
  {
    status:0,
    data:[
        {id:'文章的标记',imgurl:'文章的图片地址',title:'文章的标题',text:'文章的内容',timestamp:'2016-5-24 17:44:41',wait:1//可以用来标记那些人未读消息},
        //其他信息格式一样
      ]
  }

```
****

### <a name="affiche"> &sect; 公司管理员公告</a>

### 请求说明

接口：''

方式:'get|post'

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
mangerid | string | 1 | 管理员openid
companyid | string | 1 | 公司id

### 返回结果示例
```
      {
        status:'0',
        data:[
           {id:'文章的标记',imgurl:'文章的图片地址',title:'文章的标题',text:'文章的内容',timestamp:'2016-5-24 17:44:41',noread:'未读人数',read:'已读人数'},
           ....其他的格式一致....
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
managerid | string | 1 | 管理的openid
companyid | string | 1 | 公司的id


### 返回结果示例

```
  {
    //传递参数
    
    param:{
      openid:'管理员id',
      title:'标题',
      text:'文章内容'
    }
  }

  {
    // 上传成功的回调
    status:0,
    requestMsg:ok
  }

```



****

### <a name="invite"> &sect; 管理员邀请车主</a>

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

### <a name="contact"> &sect; 管理员通讯录</a>

### 请求说明

接口示例：‘’;

调用方式:'get|post'

### 参数说明
参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | 公司的id

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
managerid | string | 1 | 车主的openid
companyid | string | 1 | 公司的id


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

### <a name="filemanage"> &sect;车辆档案管理(公司管理的卡车信息)</a>

### 请求说明

接口示例：‘’;

调用方式:'get|post'

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | openid公司

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
****
### 管理员查看车辆档案

### 请求说明

接口示例：‘’;

调用方式:'get|post'

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | openid公司
carnum | string | 1 | 车牌号

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

### 车主查看车辆信息档案

### 请求说明

接口示例：‘’;

调用方式:'get|post'

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid |string | 1 | 公司id
openid | string | 1 | 车主的openid

### 接口调用示例
```
  api|php
  

```
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

****

### 车主查看车辆信息详情

### 请求说明

接口示例：‘’;

调用方式:'get|post'

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | 公司id
driverid | string | 0 | 车主的id
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

###  <a name="danger"> &sect;出险管理</a>

### 请求说明

接口:'';

请求方式:'post|get'
      
### 接口调用示例     

```
   管理员的出险管理。php|api
  
```

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | 公司id

### 返回参数示例

```
  {
    status:0,
    data:[
      {
                  //待处理，添加待处理缴费标记 wait:1  管理员查看后 更改wait：0    按时间顺序排    
       
          {mode:'申报中',appid:'sd8asd68asd',owner:'阿虎',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',wait:1},
          {mode:'申报中',appid:'sd8asd68asd',owner:'李强',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',wait:1},
          {mode:'申报中',appid:'sd8asd68asd',owner:'吴敏',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',wait:1}
          ......
        
        
          {mode:'已赔付',appid:'sd8asd68asd',owner:'阿虎',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',actual:'2000元',wait:0},
          {mode:'已赔付',appid:'sd8asd68asd',owner:'李强',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',actual:'2000元',wait:0},
          {mode:'已赔付',appid:'sd8asd68asd',owner:'吴敏',carnum:'沪D0625',accident:'2017-1-20',countsum:'2000元',actual:'2000元',wait:1}
          ......
        
      }
    ]
  }

```


****

###  车主查看所属车辆的出险信息

### 请求说明

接口:'';

请求方式:'post|get'
      
### 接口调用示例     

```
   php|api
  
```

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | 公司id
driverid | string | 1 | 车主openid

### 返回参数示例
```
  {
    status:0,
    data:[
     {mode:'申报中',carnum:'沪S74185',time:'2016-4-20',sum:'2300元',timestamp:'2016-12-1 8:54:5',wait:1},
     {mode:'已赔付',carnum:'沪S74185',time:'2016-4-20',sum:'2300元',timestamp:'2016-12-1 8:54:5',wait:1},
     .....
    ]
  }

```


****

### 管理员|车主查看出险详情

#### 请求说明

接口:'';

请求方式:'post|get'
      
#### 接口调用示例     

```

```

### 参数说明

#### 管理员查看

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | 公司的id
carnum | string | 1 | 车辆的车牌号

#### 司机查看 
参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | 公司的
driverid | string | 1 | 车主的id
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
      
      //操作员已处理赔付 申报中没有以下参数 车主详情没有
      manange:{
        actual:'2000元',
        timestamp:'2017-4-1  14:22',
        operator:'操作员A'
      }
    }
  }
  
  
```

****

### 车主修改申报信息

#### 请求说明

接口:'';

请求方式:'post|get'
      
#### 接口调用示例     

```
车主申报接口

```

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | 公司的
driverid | string | 1 | 车主的id
carnum | string | 1 | 修改前车辆的车牌号

#### 上传参数示例

```
   {
      owner:'阿虎',
      carnum:'沪D6545',
      accident:'2017-1-22',
      amount:'2000元',
      driver:'吴京',
      address:'上海市静安区天目西路恒丰路恒通路路口'
  }
  
  
```

### 返回参数示例 

****
### 管理员转发理赔款

#### 请求说明

接口:'';

请求方式:'post|get'
      
#### 接口调用示例     

```
车主申报接口

```

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
companyid | string | 1 | 公司的id
manager | string | 1 | 管理员id
driverid | string | 1 | 车主的id
carnum | string | 1 | 修改前车辆的车牌号
amount | string | 1 | 实际转发理赔款金额

### 返回参数示例 

```
  {
    status:0,
    requestmsg:ok
  }
```

****

### <a name="affiliated"> &sect;公司端挂靠费管理</a>

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
companyid |string | 1 | 公司的id

### 返回数据示例

```
  {
    status:0,
    data:[
      //待处理，添加待处理缴费标记 wait:1  管理员查看后 更改wait：0 
      {openid:'as75d7sa',owner:'王虎',nickname:'虎子',avatar:'头像地址',carnum:'沪D4545',registdate:'2015-12-12',indate:'2016-12-12',mode:'已逾期',timestamp:'2016-15-11 24:00:12',wait:1},
      {openid:'as75d7sa',owner:'王志明',nickname:'老王',avatar:'头像地址',carnum:'沪D0545',registdate:'2016-2-28',indate:'2017-2-28',mode:'待缴费',timestamp:'2016-15-11 24:00:12',wait:1},
     {openid:'as75d7sa',owner:'王湖',nickname:'老王',avatar:'头像地址',carnum:'沪D9545',registdate:'2017-2-28',indate:'2018-2-28',mode:'已缴费',timestamp:'2016-15-11 24:00:12',wait:0},
      ....
    ]
  }

```

****

### 车主查看挂靠费详请

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
companyid | string | 1 | 公司的id
driverid | string | 1 | 车主openid

### 返回数据示例

```
  {
    status:0,
    data:[
      //待处理，添加待处理缴费标记 wait:1  管理员查看后 更改wait：0 
      {openid:'as75d7sa',owner:'王虎',nickname:'虎子',avatar:'头像地址',carnum:'沪D4545',registdate:'2015-12-12',indate:'2016-12-12',mode:'已逾期',timestamp:'2016-15-11 24:00:12',wait:1},
      {openid:'as75d7sa',owner:'王志明',nickname:'老王',avatar:'头像地址',carnum:'沪D0545',registdate:'2016-2-28',indate:'2017-2-28',mode:'待缴费',timestamp:'2016-15-11 24:00:12',wait:1},
     {openid:'as75d7sa',owner:'王湖',nickname:'老王',avatar:'头像地址',carnum:'沪D9545',registdate:'2017-2-28',indate:'2018-2-28',mode:'已缴费',timestamp:'2016-15-11 24:00:12',wait:0},
      ....
    ]
  }

```

****

### 管理员查看挂靠费用详情


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
companyid | string | 1 | 公司的id
driverid | string | 1 | 车主id 
carnum | string | 1 | 车辆的车牌号

### 返回数据示例

```
  {
    status:0,
    data:{
      // 待缴费状态 | 已逾期
      openid:'车主的openid',
      owner:'黄蓉',
      avatar:'车主头像地址',
      carnum:'沪D4545',
      phonenum:'13895689564',
      paytype:'挂靠费用',
      mode:'待缴费|已逾期',
      nowpay:'2000元',
      lastpay:'2000元',
      lastpaydate:'2016-1-22',
      indate:'2017-1-21',
      latestdate:'2017-1-22'
      
      //缴费成功
      openid:'车主的openid',
      owner:'黄蓉',
      avatar:'车主头像地址',
      carnum:'沪D4545',
      phonenum:'13895689564',
      paytype:'挂靠费用',
      mode:'已缴费',
      sum:'2000元',
      registdate:'2016-1-22',
      indate:'2017-1-21',
      timestamp:'2016-1-22 8:56:33'
    }
  }

```
****





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
### 挂靠费用--管理员查看车主这台车的缴费记录

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
openid | string | 1 | 车主的openid
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
****

### 挂靠费用--管理员修改挂靠费用


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
openid | string | 1 | 管理员的openid
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

****

#### 管理员提交车主已经通过其他方式缴费

#### 请求说明

接口示例:'';
请求方式:'get|post'

#### 接口调用示例

```
  api|php
```

#### 参数示例 

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
carnum | string | 1 | 车辆的车牌号
openid | string | 1 | 车主的openid

#### 返回参数示例
```
  {
    status:0,
    requestmsg:ok
  }

```


****

### <a name="owner_gk"> &sect; 车主挂靠费管理</a>

### 请求示例

接口示例:'';

请求方式:''

### 接口请求示例

```

```

### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
carnum | string | 1 | 车辆的车牌号
openid | string | 1 | 车主的openid

### 返回参数示例

```
  {
    status:0,
    data:[
      {fee:'挂靠管理费',imgurl:'挂靠费用的logo地址',amount:'5000元',mode:'待缴费',carnum:'沪D789654',company:'上海菜鸟快递',registdate:'2015-6-30',indate:'2016-6-29',latestdate:'2016-6-30'},
      {fee:'挂靠管理费',imgurl:'挂靠费用的logo地址',amount:'5000元',mode:'已逾期',carnum:'沪D722654',company:'上海菜鸟快递',registdate:'2015-6-30',indate:'2016-6-29',latestdate:'2016-6-30'},
      .......
    ]
  }
  

```
****

### 车主点击某辆车的挂靠缴费

### 请求示例

接口示例:'';
请求方式:'get|post'

### 接口请求示例

```
```

### 参数说明
参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
carnum | string | 1 | 车辆的车牌号
openid | string | 1 | 车主的openid
amount | num    | 1 | 缴费金额

### 返回参数示例

```
  {
    拉起支付接口
    具体参数 待续
  }



```


****
### <a name="assurance"> &sect; 管理员保险续费管理</a>

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
openid | string | 1 | 管理员的openid

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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
