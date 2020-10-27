var now=new Date();
// console.log(now);

// console.log( Date.parse("5/25/2004"));
// console.log( Date.parse("May 25,2004"));
// console.log( Date.parse("2004-05-25T00:00:00"));

var someDate=new Date(Date.parse("May 25,2004"));
var someDate1=new Date("May 25,2004");
// console.log(someDate)//2004-05-24T16:00:00.000Z
// console.log(someDate1)//2004-05-24T16:00:00.000Z

//返回的UTC是一个从标准时间1970/01/01 0点开始计算毫秒值
// console.log(Date.UTC(1999,12,31,16,00,00));//949363200000
//以本地时间为参考物，也就是北京时间，北京时间2000年2月1号0点0分秒，换算成格林尼治标准时间就为
// console.log(Date.parse("200002-01 00:00:00"));

//以本地时间为参考物，也就是北京时间，北京时间2000年2月1号0点0分秒,换算成格林尼治标准时间就为2000/0/31 16:00:00
var local1=Date.parse("2000/02/01 00:00:00");
//返回的UTC是一个从标准时间1970/01/01 0点开始计算毫秒值
var UTC=Date.UTC(2000,1,1,0,0,0);
var local=Date.UTC(2000,0,31,16,0,0);

// console.log(local);
// console.log(UTC);

// console.log((UTC-local)/1000/3600);

// 以北京时间2000/01/01 00:00:00
// 由于北京时间比标准时间快8小时,所以标准时间是1999/12/31 16:00:00
// console.log(Date.parse("2000/01/01 00:00:00"));//946656000000
// console.log(Date.UTC(1999,11,31,16,0,0,0));//946656000000
// console.log(Date.UTC(2000,0,1,0,0,0,0));
// console.log(Date.UTC(2000,0,1,0,0,0,0));
// console.log(Date.parse(2000,1,1,8,0,0,0));
// console.log(Date.now());
// console.log(new Date(2000,0,1,0,0,0).valueOf());

// var date1=new Date(2000,0,1,0,0,0);
// var date2=new Date(2000,1,1,0,0,0);
// console.log(date2>date1);

// var date=new Date(2000,0,1,0,0,0)

// console.log(date.toDateString());//Sat Jan 01 2000,格式显示星期几,月，日和年
// console.log(date.toTimeString());//00:00:00 GMT+0800 (GMT+08:00),格式显示时，分，秒和时区
// console.log(date.toLocaleDateString());//2000-1-1,以特定地区的格式显示星期几，月，日，年
// console.log(date.toLocaleTimeString());//0:00:00,以特定地区的格式显示星期时,分,秒
// console.log(date.toUTCString());//Fri, 31 Dec 1999 16:00:00 GMT,特定于实现的格式完整的UTC日期

var date=new Date(2000,0,1,0,0,0);
console.log(date.getTime());//946656000000,返回毫秒值,与valueOf返回值一样
console.log(new Date(date.setTime(1000)));//1970-01-01T00:00:01.000Z,返回的是以标准时间为基准的日期，会改变日期

//北京时间:2000-01-01T00:00:00.000Z
//标准时间:1999-12-31T16:00:00.000Z

//获取年
var date1=new Date(2000,0,1,0,0,0);
console.log(date1);//1999-12-31T16:00:00.000Z,返回标准时间日期格式
console.log(date1.getFullYear());//2000,返回北京时间，年
console.log(date1.getUTCFullYear());//1999，返回标准时间，年

//设置北京时间年
var date2=new Date(2000,0,1,0,0,0);
var dt1=new Date(date2.setFullYear(2001));//设置北京时间的年为2001年
console.log(dt1);//2000-12-31T16:00:00.000Z，标准时间日期
console.log(dt1.getFullYear());//北京时间年2001
console.log(dt1.getUTCFullYear());//标准时间时间年2000

//设置标准时间年
var date3=new Date(2000,0,1,0,0,0);
var dt2=new Date(date3.setUTCFullYear(2001));//设置北京时间的年为2001年
console.log(dt2);//2001-12-31T16:00:00.000Z，标准时间日期
console.log(dt2.getFullYear());//北京时间年2002
console.log(dt2.getUTCFullYear());//标准时间时间年2001

//获取月
var date5=new Date(2000,0,1,0,0,0);
console.log(date5);//1999-12-31T16:00:00.000Z,返回标准时间日期格式
console.log(date2.getMonth());//0,返回北京时间,月
console.log(date5.getUTCMonth());//11，返回标准时间,月

//设置北京时间月
var date6=new Date(2000,0,1,0,0,0);
var dt3=new Date(date6.setMonth(0));//设置北京时间的月为1月
console.log(dt3);//1999-12-31T16:00:00.000Z，标准时间日期,北京时间2000-01-01T00:00:00.000Z
console.log(dt3.getMonth());//0，北京时间，1月
console.log(dt3.getUTCMonth());//11,标准时间时间,12月

//设置标准时间月
var date7=new Date(2000,0,1,0,0,0);
var dt4=new Date(date7.setUTCMonth(1));//设置标准时间为1月底
console.log(dt4);//1999-01-31T16:00:00.000Z，标准时间日期,北京时间1999-02-01T00:00:00.000Z
console.log(dt4.getMonth());//1，北京时间,2月初
console.log(dt4.getUTCMonth());//0.标准时间月,1月底

//获取日
var date8=new Date(2000,0,1,0,0,0);
console.log(date8);//1999-12-31T16:00:00.000Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.000Z
console.log(date8.getDate());//1,返回北京时间,1日
console.log(date8.getUTCDate());//31，返回标准时间,31日

//设置北京时间日
var date9=new Date(2000,0,1,0,0,0);
var dt5=new Date(date9.setDate(15));//设置北京时间为15日
console.log(dt5);//2000-01-14T16:00:00.000Z，标准时间日期,北京时间2000-01-15T00:00:00.000Z
console.log(dt5.getDate());//15，北京时间，15日
console.log(dt5.getUTCDate());//14,标准时间时间,14日

//设置标准时间日
var date10=new Date(2000,0,1,0,0,0);
var dt6=new Date(date10.setUTCDate(15));//设置标准时间为15日
console.log(dt6);//1999-12-15T16:00:00.000Z，标准时间日期,北京时间1999-12-16T00:00:00.000Z
console.log(dt6.getDate());//16，北京时间,16日
console.log(dt6.getUTCDate());//15.标准时间月,15日

//获取星期
var date11=new Date(2000,0,1,0,0,0);
console.log(date11);//1999-12-31T16:00:00.000Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.000Z
console.log(date11.getDay());//6,返回北京时间,星期6
console.log(date11.getUTCDay());//5，返回标准时间,星期5

//获取时
var date12=new Date(2000,0,1,0,0,0);
console.log(date12);//1999-12-31T16:00:00.000Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.000Z
console.log(date12.getHours());//0,返回北京时间,0时
console.log(date12.getUTCHours());//16，返回标准时间,16时

//设置北京时间时
var date13=new Date(2000,0,1,0,0,0);
var dt7=new Date(date13.setHours(15));//设置北京时间为15日
console.log(dt7);//2000-01-01T07:00:00.000Z，标准时间日期,北京时间2000-01-01T15:00:00.000Z
console.log(dt7.getHours());//15，北京时间，15时
console.log(dt7.getUTCHours());//7,标准时间时间,7时

//设置标准时间时
var date14=new Date(2000,0,1,0,0,0);
var dt8=new Date(date14.setUTCHours(15));//设置标准时间为15日
console.log(dt8);//1999-12-31T15:00:00.000Z，标准时间日期,北京时间1999-12-31T23:00:00.000Z
console.log(dt8.getHours());//23，北京时间,23时
console.log(dt8.getUTCHours());//15.标准时间月,15时

//获取分
var date13=new Date(2000,0,1,0,0,0);
console.log(date13);//1999-12-31T16:00:00.000Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.000Z
console.log(date13.getMinutes());//0,返回北京时间,0分
console.log(date13.getUTCMinutes());//0，返回标准时间,0分

//设置北京时间分
var date14=new Date(2000,0,1,0,0,0);
var dt9=new Date(date14.setMinutes(15));//设置北京时间为15分
console.log(dt9);//1999-12-31T16:15:00.000Z，标准时间日期,北京时间2000-01-01T00:15:00.000Z
console.log(dt9.getMinutes());//15，北京时间，15分
console.log(dt9.getUTCMinutes());//15,标准时间时间,15分

//设置标准时间分
var date15=new Date(2000,0,1,0,0,0);
var dt10=new Date(date15.setUTCMinutes(15));//设置标准时间为15日
console.log(dt10);//1999-12-31T16:15:00.000Z，标准时间日期,北京时间2000-01-01T00:15:00.000Z
console.log(dt10.getMinutes());//15，北京时间,15分
console.log(dt10.getUTCMinutes());//15，北京时间,15分

//获取秒
var date16=new Date(2000,0,1,0,0,0);
console.log(date16);//1999-12-31T16:00:00.000Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.000Z
console.log(date16.getSeconds());//0,返回北京时间,0分
console.log(date16.getUTCSeconds());//0，返回标准时间,0分

//设置北京时间秒
var date17=new Date(2000,0,1,0,0,0);
var dt11=new Date(date17.setSeconds(15));//设置北京时间为15分
console.log(dt11);//1999-12-31T16:00:15.000Z，标准时间日期,北京时间2000-01-01T00:00:15.000Z
console.log(dt11.getSeconds());//15，北京时间，15秒
console.log(dt11.getUTCSeconds());//15,标准时间时间,15秒

//设置标准时间秒
var date18=new Date(2000,0,1,0,0,0);
var dt12=new Date(date18.setUTCSeconds(15));//设置标准时间为15秒
console.log(dt12);//1999-12-31T16:00:15.000Z，标准时间日期,北京时间2000-01-01T00:00:15.000Z
console.log(dt12.getSeconds());//15，北京时间,15秒
console.log(dt12.getUTCSeconds());//15，北京时间,15秒

//获取毫秒
var date19=new Date(2000,0,1,0,0,0);
console.log(date19);//1999-12-31T16:00:00.200Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.200Z
console.log(date19.getMilliseconds());//0,返回北京时间,0毫秒
console.log(date19.getUTCMilliseconds());//0，返回标准时间,0毫秒

//设置北京时间毫秒
var date20=new Date(2000,0,1,0,0,0);
var dt13=new Date(date20.setMilliseconds(200));//设置北京时间为200毫秒
console.log(dt13);//1999-12-31T16:00:15.200Z，标准时间日期,北京时间2000-01-01T00:00:15.200Z
console.log(dt13.getMilliseconds());//200，北京时间，200毫秒
console.log(dt13.getUTCMilliseconds());//200,标准时间时间,200毫秒

//设置标准时间毫秒
var date21=new Date(2000,0,1,0,0,0);
var dt14=new Date(date21.setUTCMilliseconds(200));//设置标准时间为200毫秒
console.log(dt14);//1999-12-31T16:00:15.200Z，标准时间日期,北京时间2000-01-01T00:00:15.200Z
console.log(dt14.getMilliseconds());//200，北京时间,200毫秒
console.log(dt14.getUTCMilliseconds());//200，北京时间,200毫秒

//设置标准时间毫秒
var date22=new Date(2000,0,1,0,0,0);
console.log(date22.getTimezoneOffset())//-480,相差了480分钟
