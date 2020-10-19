# 在HTML中使用JavaScript
## script元素
### 属性
#### async
>async的设置，会使得script脚本异步的加载并在允许的情况下执行
async的执行，并不会按着script在页面中的顺序来执行，而是谁先加载完谁执行。
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script async src="./demo2.js"></script>
    <script async src="./demo1.js"></script>
    <script>
        window.addEventListener('DOMContentLoaded',function(){
            console.log('DOMContentLoaded');
        })
    </script>
</body>
</html>
```
不会按着script在页面中的顺序来执行，而是谁先加载完谁执行
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201018001955305.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tlbl9kaW5n,size_16,color_FFFFFF,t_70#pic_center)
使得script脚本异步的加载
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201018002212156.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tlbl9kaW5n,size_16,color_FFFFFF,t_70#pic_center)
在允许的情况下执行
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script async src="./demo3.js"></script>
    <script>
        window.addEventListener('DOMContentLoaded',function(){
            console.log('DOMContentLoaded');
        })
    </script>
      <div></div>
      .........省略一万个div
   		<div></div>
</body>
</html>
```
增加dom渲染的时间，导致异步加载的demo3.js在DOMContentLoaded前执行
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201018002820434.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tlbl9kaW5n,size_16,color_FFFFFF,t_70#pic_center)

#### defer
> 如果script标签设置了该属性，则浏览器会异步的下载该文件并且不会影响到后续DOM的渲染；
如果有多个设置了defer的script标签存在，则会按照顺序执行所有的script；
defer脚本会在文档渲染完毕后，DOMContentLoaded事件调用前执行。

不难看出，虽然demo1加载用时虽然比demo2短，但因为defer的限制，所以Ta只能等前边的脚本执行完毕后才能执行。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201018004556939.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tlbl9kaW5n,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201018004444557.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tlbl9kaW5n,size_16,color_FFFFFF,t_70#pic_center)
#### type
- application
- audio
- font
- example
- image
- message
- model
- multipart
- text
- video

[完整的标准 MIME 类型](http://www.iana.org/assignments/media-types/media-types.xhtml)
#### src
src 属性规定外部脚本文件的 URL。
如果您希望在网站中的多个页面上运行相同的 JavaScript，就应该创建外部 JavaScript 文件，而不是重复编写脚本。把脚本文件以 .js 扩展名进行保存，然后在 <script> 标签中使用 src 属性引用它。

ps：外部脚本文件不能包含 <script> 标签。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./demo2.js"></script>
</body>
</html>
```
#### charset
通过src属性指定的代码的字符集，由于大多数浏览器都会忽略它的值，很少有人用
#### language
被废弃

#### 注意点：
1.不要出现嵌套<\/script>,会导致错误
```
<script>
	function(){
		alert("</script>")
	}
</script>
```
2.带有src属性的\<script>元素不应该在其\<script>和<\/script>标签之间在包含额外的代码,否自嵌入的代码会被忽略
例：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./demo2.js">
        console.log("被忽略的代码");
    </script>
</body>
</html>
```
只带打印出来，demo2.js里面的内容，嵌入代码未执行
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020101801322229.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tlbl9kaW5n,size_16,color_FFFFFF,t_70#pic_center)
### 标签位置
#### 位置
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 这里是内容 -->
    //下面放置script
    <script src="./demo2.js">
        console.log("被忽略的代码");
    </script>
</body>
</html>
```
#### 原因
由于浏览器在遇到\<body>标签才开始呈现内容，并且script便签需要下载，解析和执行后才会向下执行，会导致浏览器在呈现页面的时候出现明显的而延迟

### 在XHTML中的用法(知道即可，不重要)
为了避免特殊字符在XHTML不兼容，可采用[CDATA[]]避免
```
<!DOCTYPEhtml PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
</head>
<body>
    <script>
        function name(params) {
            //<![CDATA[
            if (1<2) {
                console.log(123);
            }
            //]]>
        }
    </script>
</body>
</html>
```
## 嵌入代码与外部文件
 - 尽可能使用外部文件
 - 可维护性：主要可以集中管理所有的js文件
 - 可缓存：如果一个文件被多出引用，那只会被下载一次即可
 - 适应未来

## 文档模式
### 两种模式
 - 混杂模式
 	- 忽略DTD声明，使用浏览器自己的方式解析执行代码，页面以宽松的向后兼容方式显示，不同浏览器解析执行的方式不一样。
 	- 让IE行为与IE5相同
 - 标准模式
 	- DTD声明定义了标准文档的类型后，浏览器按W3C标准解析执行代码
 	- IE行为接近标准行为
### 模式触发
**标准模式**
该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
```
<!-- HTML 4.01 严格型-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
```
该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。
```
<!--XHTML 1.0 严格型->
!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```
```
<!--HTML 5->
<!DOCTYPE html>
```
**标准模式**
该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
```
<!-- HTML 4.01 过渡型-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
```
该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容
```
<!-- HTML 4.01 框架集型-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" 
"http://www.w3.org/TR/html4/frameset.dtd">
```
该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。
```
<!--XHTML 1.0 过渡型->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "
http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容。
```
<!--XHTML 1.0 框架集型->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```
## \<noscript>元素
### 触发背景
 - 浏览器不支持脚本
 - 浏览器支持脚本，但脚本被禁用
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <noscript>Your browser does not support JavaScript!</noscript>
</body>
</html>
```
脚本无效情况![在这里插入图片描述](https://img-blog.csdnimg.cn/20201018022314549.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tlbl9kaW5n,size_16,color_FFFFFF,t_70#pic_center)
## 总结
 - script的属性具体讲解
 - script标签位置与<\/body>贴合位置最佳
 - 文档模式包含混在模式和标准模式
 - 脚本被禁用，可以使用noscript标签给用户加以提示
