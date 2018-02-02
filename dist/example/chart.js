Page({
	onReady:function(e){
        var context = wx.createContext();
        //柱状图
        var WColumnChart1Series = [
                [100,110,120,130,140,120,105],
                [90,100,110,120,130,120,150],
        ];
        drawColumn(context,"WColumnChart1",WColumnChart1Series,300,200);
        //曲线
        var WLineChart1Series = {values:[
            { value0:[
                {x:"1",y:5},
                {x:"2",y:5},
                {x:"3",y:80},
                {x:"4",y:10},
                {x:"5",y:30},
                {x:"6",y:30},
                {x:"7",y:60},
                {x:"8",y:10}
                ]},
            { value1:[
                    {x:"1",y:50},
                    {x:"2",y:40},
                    {x:"3",y:60},
                    {x:"4",y:10},
                    {x:"5",y:20},
                    {x:"6",y:10},
                    {x:"7",y:40},
                    {x:"8",y:10}
                ]}
        ]};
        drawLine(context,"WLineChart1",WLineChart1Series,300,200)
        //饼图
        var WPieChart1Series = [{ value:20, color:"#f4b300" },{ value:30, color:"#78ba00" },{ value:40, color:"#2673ec" }]  
        drawPie(context,"WPieChart1",WPieChart1Series,300,200);
    }
})
function drawColumn(context,canvasid,series,width,height){
	//初始化数据。二维数组，第一维：系列。第二维数值。每个系列数组长度必须一样
    var config = {  
        width :width,    //canvas宽度
        height: height,  //canvas高度
        cMargin : 0,//canvas的内边距
        series: series,  //数组
        canvas:   context,  //绘图上下文context
        };  
    ColumnChart.initSettings(config);  //初始化
    ColumnChart.render();  //绘制
        wx.drawCanvas({
        canvasId: canvasid,
        actions: context.getActions()
    });
}
function drawLine(context,canvasid,series,width,height){
	//必须按照这个格式定义数据，关键字values value0 value1 ...... 
    
    var config = {  
        width : width,
        height: height,
        isBg:true,//是否绘制背景线
        context:context,  //绘图上下文context
        series:series,
        colors:["#006ac1","#001e4e","#008287","#008287","#004d60","#199900"],
        dotColor:"#f4b300",
    };  
    LineChart.initSettings(config);  //初始化
    LineChart.render();  //绘制
    wx.drawCanvas({
        canvasId: canvasid,
        actions: context.getActions()
    });
}
function drawPie(context,canvasid,series,width,height){
	//通过程序替换seriesData为自己的数据
   
    var config = {  
            width :width,    //canvas宽度
            height: height,  //canvas高度
            series: series,  
            canvas:   context,  //绘图上下文context
            
    };  
    pieChart.initSettings(config);  //初始化
    pieChart.render();  //绘制
    wx.drawCanvas({
            canvasId: canvasid,
            actions: context.getActions()
        });
}
var ColumnChart = {  
    cwidth: 300,  //canvas宽度
    cheight: 200,  //canvas高度
    cMargin:0,//canvas的内边距
    cMarginSpace:0,
    cMarginHeight:0,
    bWidth:0,
    bCoverWidth:0,//计算得来的column的单位宽度。按照一个x节点宽度是间距2倍处理的。
    totalSeries:0,
    totalcolumns:0,//多个series的话，需要计算总共的column数量
    maxDataValue:0,
    bWidthMargin:0,
    ctr:0,
    numctr:0,
    speed:0,
    totLabelsOnYAxis:0,
    series: [],  //序列数组
    chartCanvas: null,  
    colors:[],
    edge : {  
        width: 0,  
        height: 0  
    },  
    initSettings: function (config) {  
        this.chartCanvas = config.canvas;  
        this.cwidth = config.width;  
        this.cheight = config.height;  
        this.series = config.series;
        this.colors=["#f4b300","#78ba00","#2673ec","#008287","#004d60","#56c5ff"];  //可以这里改为自己的色值
        // chart properties
        this.cMargin = config.cMargin;
        this.cheight = this.cheight - 2 * this.cMargin;
        this.cwidth = this.cwidth - 2 * this.cMargin;
        this.cMarginSpace = this.cMargin ;
        this.cMarginHeight = this.cMargin + this.cheight;
        // column properties
        this.totalSeries = this.series.length;
        this.totalcolumns=0;
        for (var i = 0; i < this.totalSeries; i++) {
            for (var j = 0; j < this.series[i].length; j++) {
                this.totalcolumns++;
            }
        }
        //设置一个x点column的width是间距的的2倍
        this.bCoverWidth = this.cwidth/3/(this.totalcolumns/this.totalSeries);
        //每个column的宽度
        this.bWidth = 2*this.bCoverWidth / this.totalSeries;
        // find maximum value to plot on chart
        this.maxDataValue = 0;
        for (var i = 0; i < this.totalSeries; i++) {
            for (var j = 0; j < this.series[i].length; j++) {
                var Val = this.series[i][j];
                var columnVal = parseInt(Val);
                if (parseInt(columnVal) > parseInt(this.maxDataValue))
                    this.maxDataValue = columnVal;
            }
           
        }
        this.totLabelsOnYAxis = 10;
    },  
    render : function() {  
        this.drawAxisLabelMarkers();
        this.drawChart();
    },  
    drawAxisLabelMarkers:function() {
        this.chartCanvas.lineWidth = "2.0";
        // draw y axis
        this.drawAxis(this.cMarginSpace, this.cMarginHeight, this.cMarginSpace, this.cMargin);
        // draw x axis
        this.drawAxis(this.cMarginSpace, this.cMarginHeight, this.cMarginSpace + this.cwidth, this.cMarginHeight);
        this.chartCanvas.lineWidth = "1.0";
        //this.drawMarkers();//此处屏蔽显示数值，因为显示的文字不好定位。
    },
    drawAxis:function(x, y, X, Y) {
        this.chartCanvas.beginPath();
        this.chartCanvas.moveTo(x, y);
        this.chartCanvas.lineTo(X, Y);
        this.chartCanvas.closePath();
        this.chartCanvas.setStrokeStyle("#e8e8e8");
        this.chartCanvas.stroke();
        this.chartCanvas.save();
    },
    drawMarkers:function() {//此方法暂不调用，因为显示的文字不好定位。
        var numMarkers = parseInt(this.maxDataValue / this.totLabelsOnYAxis);
        numMarkers= (numMarkers / 10) % 10;
        numMarkers = Math.ceil(numMarkers)*10;
        this.chartCanvas.textAlign = "right";
        this.chartCanvas.fillStyle = "#000";
        // Y Axis
        for (var i = 0; i <= this.totLabelsOnYAxis; i++) {
            var markerVal = i * numMarkers;
            var markerValHt = i * numMarkers * this.cheight;
            var xMarkers = this.cMarginSpace - 20;
            var yMarkers = this.cMarginHeight - (markerValHt / this.maxDataValue);
            this.chartCanvas.setFontSize(14);
            this.chartCanvas.fillText(markerVal, xMarkers, yMarkers);
        }
        // X Axis
        this.chartCanvas.textAlign = 'center';
        for (var i = 0; i < this.totalSeries; i++) {
                var arrval = this.series[i].split(",");
                name = arrval[0];
                var markerXPos = this.cMarginSpace + this.bMargin 
                            + (i * (this.bWidth + this.bMargin)) + (this.bWidth/2)-15;
                var markerYPos = this.cMarginHeight + 10;
                this.chartCanvas.setFontSize(14);
                this.chartCanvas.fillText(name, markerXPos, markerYPos, this.bWidth);
                
        }
        this.chartCanvas.save();
        // Add Y Axis title
        this.chartCanvas.translate(this.cMargin + 10, this.cheight / 2);
        this.chartCanvas.rotate(Math.PI * -90 / 180);
        this.chartCanvas.fillText('Visitors in Thousands', 0, 0);
        this.chartCanvas.restore();
        // Add X Axis Title
        this.chartCanvas.fillText('Year Wise', this.cMarginSpace + 
                    (this.cwidth / 2), this.cMarginHeight + 30 );
    },
    drawChart:function() {
        // Loop through the total columns and draw
        var prewidth=this.bCoverWidth;
        //绘制每个系列的每个数值对应的column
        for (var i = 0; i < this.totalSeries; i++) {
            for (var j = 0; j < this.series[i].length; j++) {
               var Val = this.series[i][j];
               var bVal = parseInt(Val);
               var bHt = (bVal * this.cheight / this.maxDataValue) ;
               var bX = i * this.bWidth +  this.bCoverWidth+j*3*this.bCoverWidth;
               var bY = this.cMarginHeight - bHt - 2;
               this.drawRectangle(i,bX, bY, this.bWidth, bHt, true);
            }
        }
        
    },
    drawRectangle:function(i,x, y, w, h, fill) {
        this.chartCanvas.beginPath();          
        this.chartCanvas.rect(x, y, w, h);          
        this.chartCanvas.closePath();
        this.chartCanvas.setStrokeStyle("#ffffff");
        this.chartCanvas.stroke();
        if (fill) {
           
            this.chartCanvas.setFillStyle(this.colors[i]);
            
            this.chartCanvas.fill();
        }
    }
    
};  

var LineChart={
    keynames:[],//数据信息数组
    series: [],  //序列数组
    ctx:null,
    width:300,
    height:300,
    colors:[],
    
    dotColor:"#78ba00",
    isBg:false,//是否绘制背景线
    initSettings:function(config){
        this.width=config.width;
        this.height=config.height;
        this.colors=config.colors; 
        this.dotColor = config.dotColor;
        this.ctx = config.context;
        this.isBg = config.isBg;
        
        this.series = config.series;
        this.isMultiData();
    },
   isMultiData:function(){
      if(this.series.values.length>1){
        this.isMultiData = true;
       }
    },//是否是多条数据线
    render : function() {  
        this.drawXY(this.series,0,0);
    }, 
	drawXY:function(data,key,padding){
        
        this.ctx.beginPath();
        this.ctx.moveTo(padding,0)
        this.ctx.lineTo(padding,this.height-padding);
        this.ctx.lineTo(this.width,this.height-padding);
        this.ctx.stroke();
        var perwidth = this.getPixel(data,key,this.width,padding);//x 轴每一个数据占据的宽度
        var maxY =  this.getMax(data,0,this.isMultiData);//获得Y轴上的最大值
        var yPixel = this.getYPixel(maxY,this.height,padding).pixel;
        var ycount = this.getYPixel(maxY,this.height,padding).ycount;
        for( var i=0,ptindex;i< data.values[key]["value"+key].length;i++ ){
            ptindex = i+1;
            var x_x = this.getCoordX(padding,perwidth,ptindex);
            var x_y = this.height-padding+20;
            this.ctx.fillText(data.values[key]["value"+key][i].x,x_x,x_y,perwidth);
        }
        
        //for(var i=0;i< ycount/10;i++){
        //    this.ctx.fillText(i*10,padding-10,(ycount/10-i)*10*yPixel,perwidth);
        //}
        if(this.isBg){
            var x =  padding;
            this.ctx.lineWidth=1;
            this.ctx.setStrokeStyle("#e8e8e8");
            
            for( var i=0;i< ycount/10;i++ ){
                var y = (ycount/10-i)*10*yPixel;
                this.ctx.moveTo(x,y);
                this.ctx.lineTo(this.width,y);
                this.ctx.stroke();
            }
        }//选择绘制背景线
        this.ctx.closePath();
        this.drawData(data,0,padding,perwidth,yPixel,this.isMultiData);
    },//绘制XY坐标 线 以及点
	
    drawData:function(data,key,padding,perwidth,yPixel,isMultiData){
        if(!isMultiData){
            var keystr = "value"+key;
            this.ctx.beginPath();
            this.ctx.setLineWidth(2);
            this.ctx.setStrokeStyle(this.colors[key]);
            var startX = this.getCoordX(padding,perwidth,0);
            var startY = this.getCoordY(padding,yPixel,data.values[key][keystr][0].y);
            this.ctx.beginPath();
            this.ctx.setLineWidth(2);
            for( var i=0;i< data.values[key][keystr].length;i++ ){
                var x = this.getCoordX(padding,perwidth,i+1);
                var y = this.getCoordY(padding,yPixel,data.values[key][keystr][i].y);
                this.ctx.lineTo(x,y);
            }
            this.ctx.stroke();
            this.ctx.closePath();
            /*下面绘制数据线上的点*/
            this.ctx.beginPath();
            this.ctx.setFillStyle(this.dotColor);
            
            for( var i=0;i< data.values[key][keystr].length;i++ ){
                var x = this.getCoordX(padding,perwidth,i+1);
                var y = this.getCoordY(padding,yPixel,data.values[key][keystr][i].y);
                this.ctx.moveTo(x,y);
                this.ctx.arc(x,y,3,0,Math.PI*2,true);//绘制数据线上的点
                this.ctx.fill();
            }
            this.ctx.closePath();
        }else{//如果是多条数据线
            for( var i=0;i< data.values.length;i++ ){
                
                LineChart.drawData(data,i,padding,perwidth,yPixel,false);
                //LineChart.drawKey(color,this.keynames[i],padding,i);
            }
        }
	},//绘制数据线和数据点
    getPixel:function(data,key,width,padding){
        var count = data.values[key]["value"+key].length;
        return (width-20-padding)/(count+(count-1)*1.5);	
    },//宽度
    getCoordX:function(padding,perwidth,ptindex){//下标从1开始 不是从0开始
        return 2.5*perwidth*ptindex+padding+10-2*perwidth;
    },//横坐标X 随ptindex 获得
    getCoordY:function(padding,yPixel,value){
        var y = yPixel*value;
        return this.height-padding-y;
    },//纵坐标X 随ptindex 获得(注意 纵坐标的算法是倒着的因为原点在最上面)
        getYPixel:function(maxY,height,padding){
        var ycount = (parseInt(maxY/10)+1)*10+10;//y轴最大值
        return {pixel:(height-padding)/ycount,ycount:ycount};
    },//y轴的单位长度
        	
    getMax:function(data,key,isMultiData){
        if(!isMultiData){
            var maxY = data.values[key]["value"+key][0].y;
            var length = data.values[key]["value"+key].length;
            var keystr = "value"+key;
            for( var i=1;i< length;i++ ){
                if(maxY< data.values[key][keystr][i].y)
                    maxY=data.values[key][keystr][i].y;
            }
            return maxY;//返回最大值 如果不是多数据
        }else{
            var maxarr=[];
            var count = data.values.length;//多条数据的数据长度
            for(var i=0;i< count;i++){
                maxarr.push(LineChart.getMax(data,i,false));
            }
            var maxvalue = maxarr[0];
            for(var i=1;i< maxarr.length;i++){
                maxvalue = (maxvalue< maxarr[i])?maxarr[i]:maxvalue; 
            }
            return maxvalue;
        }//如果是多数据
    },
        	
    setKey:function(keynames){//keynames 是数组
        for(var i=0;i< keynames.length;i++){
            this.keynames.push(keynames[i]);//存入数组中
        }
    },
        
 	drawKey:function(color,keyname,padding,lineindex){
        var x = padding+10;
        var y = this.height - padding+20+13*(lineindex+1);
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.font="10px";
        this.ctx.moveTo(x,y);
        this.ctx.lineTo(x+50,y);
        this.ctx.fillText(":"+keyname,x+80,y,30);
        this.ctx.stroke();
        this.ctx.closePath();
    }	
}



var pieChart = {  
    width: 200,  
    height: 200,  
    series: [],  
    chartCanvas: null,  
    edge : {  
        width: 0,  
        height: 0  
    },  
    circle : {  
        cx: 0,  
        cy: 0,  
        radius: 0  
    },  
    initSettings: function (config) {  
        this.chartCanvas = config.canvas;  
        this.width = config.width;  
        this.height = config.height;  
        this.series = config.series;  
      
    },  
    render : function() {  
        // initialization circle  
        this.circle.cx = this.width/2;  
        this.circle.cy = this.height/2;  
        this.circle.radius = Math.min(this.width/2, this.height/2) - Math.max(this.edge.width, this.edge.height);  
        var ctx = null;  
        ctx = this.chartCanvas;  
        if(this.circle.radius <= 0) {  
            return;  
        }  
        // draw each arc according to data series   
        var sum = 0;  
        var nums = this.series.length;  
        for(var i=0; i<nums; i++) {  
            sum += this.series[i].value;  
        }  
        var deltaArc = 0;  
        for(var i=0; i<nums; i++) {  
            var precent = this.series[i].value/sum;  
            this.renderPie(ctx, i, precent, deltaArc);  
            deltaArc += 2*Math.PI * precent;  
        }  
        ctx.save();  
    },  
    renderPie : function(ctx, index, precent, deltaArc) {  
        var endAngle = 2*Math.PI*precent;  
        ctx.beginPath();  
        ctx.arc(this.circle.cx+0.5, this.circle.cy+0.5, this.circle.radius, deltaArc, endAngle, false);  
        ctx.setStrokeStyle("#ffffff");
        ctx.setLineWidth(2);
        ctx.lineTo(this.circle.cx, this.circle.cy);  
        ctx.setFillStyle(this.series[index].color);
        ctx.fill();  
        ctx.stroke()
        ctx.closePath();  
        ctx.moveTo(this.circle.cx, this.circle.cy);  
        ctx.lineTo(this.circle.cx + this.circle.radius * Math.cos(deltaArc), this.circle.cy + this.circle.radius * Math.sin(deltaArc));
        ctx.stroke()  
    },  
};  