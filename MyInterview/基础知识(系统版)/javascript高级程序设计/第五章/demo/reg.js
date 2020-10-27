var str="1at.2at5a";
var pat=/at/g
console.log(str.match(pat));//[ 'at', 'at' ]


var str1="1at.2At5a";
var pat1=/at/gi
console.log(str1.match(pat1));//[ 'at', 'At' ]


var str1=
`1at.2At5a
At,s,at`;
var pat2=/at/gim
console.log(str1.match(pat2));//[ 'at', 'At', 'At', 'at' ]

var str2=
`1at.2At5a
At,s,at`;
var pat3=new RegExp("at","gim")
console.log(str1.match(pat3));//[ 'at', 'At', 'At', 'at' ]

var re=null,i;
for(i=0;i<10;i++){
    re=/cat/g
    console.log(re.test("catastropphe"));
}

for(i=0;i<10;i++){
    re=new RegExp("cat","g")
    console.log(re.test("catastropphe"));
}

var reg =new RegExp("cat","g")

console.log(reg.lastIndex);//0
console.log(reg.global);//true
console.log(reg.ignoreCase);//false
console.log(reg.multiline);//false
console.log(reg.source);//cat

var text = "mom and dad and baby";
var pattern=/mom( and dad( and baby)?)?/gi

var matches=pattern.exec(text);

console.log(matches);


var text ="cat,bat,sat,fat";
var pattern1=/.at/;

var matches=pattern1.exec(text);
console.log(matches)
console.log(matches.index)//0
console.log(matches[0])//cat
console.log(pattern1.lastIndex)//0

var matches=pattern1.exec(text);
console.log(matches)
console.log(matches.index)//0
console.log(matches[0])//cat
console.log(pattern1.lastIndex)//0

var pattern2=/.at/g;
var matches=pattern2.exec(text);
console.log(matches)
console.log(matches.index)//0
console.log(matches[0])//cat
console.log(pattern2.lastIndex)//3

var matches=pattern2.exec(text);
console.log(matches)
console.log(matches.index)//4
console.log(matches[0])//bat
console.log(pattern2.lastIndex)//7

var text1 ="cat,baa";
var pattern3=/.at/g;
console.log(pattern3.test(text1));
console.log(pattern3.lastIndex);
console.log(pattern3.test(text1));
console.log(pattern3.lastIndex);

var text2 = "this has been a short summer";
var pattern3=/(.)hort/g;
pattern3.test(text2)
console.log(RegExp.input);//this has been a short summer
console.log(RegExp.leftContext);//this has been a 
console.log(RegExp.rightContext);// summer
console.log(RegExp.lastMatch);//short
console.log(RegExp.lastParen);//s
console.log(RegExp.multiline);//undefined

console.log(RegExp.$_);//this has been a short summer
console.log(RegExp["$`"]);//this has been a 
console.log(RegExp["$'"]);// summer
console.log(RegExp["$&"]);//short
console.log(RegExp["$+"]);//s
console.log(RegExp["$*"]);//undefined

var pattern4=/(..)or(.)/g
pattern4.test(text2);
console.log(RegExp.$1);//sh
console.log(RegExp.$2);//t
