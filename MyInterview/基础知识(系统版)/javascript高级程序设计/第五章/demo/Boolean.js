var falseObject=new Boolean(false);
var result = falseObject&&true;
console.log(result);

var falseValue=false;
result=falseValue&&true;
console.log(result);

var num=10;
console.log(num.toFixed(2));//10.00

var num=10;
console.log(num.toExponential(1));//1.0e+1

var num=99;
console.log(num.toPrecision(1));//1e+2
console.log(num.toPrecision(2));//99
console.log(num.toPrecision(3));//99.0

var str="12345";

console.log(str.charAt(0));//1
console.log(str.charCodeAt(0));//49(1的字符编码)
console.log(str[0]);//1

var str="1234567890";

console.log(str.concat("678"));//1234567890678
console.log(str.slice(3));//4567890
console.log(str.substr(3));//4567890
console.log(str.substring(3));//4567890

console.log(str.slice(3,7));//4567
console.log(str.substr(3,7));//4567890
console.log(str.substring(3,7));//4567

var str="1234567890";

console.log(str.indexOf("6"));//在下标为5的位置
console.log(str.lastIndexOf("6"));//在下标为5的位置

var str="  1234567890  ";

console.log(str.trim());//1234567890

var str="aaabbbccc";

console.log(str.toLocaleUpperCase());//AAABBBCCC

var str="AAABBBCCC";

console.log(str.toLowerCase());//aaabbbccc


var text ="cat, bat, sat, fat";
var pattern=/.at/;

var matches=text.match(pattern);
console.log(matches.index);//0
console.log(matches[0]);//cat
console.log(pattern.lastIndex);//0

var pos=text.search(/at/);
console.log(pos);//1

var result= text.replace("at","ond");
console.log(result);//cond, bat, sat, fat

var result= text.replace(/at/g,"ond");
console.log(result);//cond, bond, sond, fond

var result= text.replace(/(.at)/g,"ond,($1)");
console.log(result);//ond,(cat), ond,(bat), ond,(sat), ond,(fat)

function htmlEscape(text){
    return text.replace(/[<>"&]/g,function(match,pos,originalText){
        switch(match){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    })
}

console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));//&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;

var colorText="red,bule,green,yellow";
var colors1=colorText.split(",");
console.log(colors1);//[ 'red', 'bule', 'green', 'yellow' ]
var colors2=colorText.split(",",2);
console.log(colors2);//[ 'red', 'bule' ]

var str="yellow";
console.log(str.localeCompare("brick"));//1
console.log(str.localeCompare("yellow"));//0
console.log(str.localeCompare("zoo"));//-1

console.log(String.fromCharCode(104,101,108,108,111));//hello

var txt="hello,world";
console.log(txt.anchor("name"));//<a name="name">hello,world</a>
console.log(txt.big());//<big>hello,world</big>
console.log(txt.bold());//<b>hello,world</b>

var uri="http://www.wrox.com/illegal value.htm#start";

console.log(encodeURI(uri))//http://www.wrox.com/illegal%20value.htm#start
console.log(decodeURI(uri))//http://www.wrox.com/illegal value.htm#start
console.log(encodeURIComponent(uri));//http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start
console.log(decodeURIComponent(uri));//http://www.wrox.com/illegal value.htm#start

var msg="hello,world";
eval("console.log(msg)")//hello,world

var max=Math.max(3,54,32,16);
var min=Math.min(3,54,32,16);
console.log(max);//54
console.log(min);//3

console.log(Math.ceil(25.9));//26
console.log(Math.floor(25.9));//25
console.log(Math.round(25.9));//26

console.log(Math.random());//0.3805432775071105