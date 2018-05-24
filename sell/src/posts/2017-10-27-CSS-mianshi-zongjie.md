>yi蓑烟雨任平生



### 说一说CSS在书写方面需要注意的一些点


#### 修复解析错误


#### 避免使用多类选择符

IE6及更古老的选择器对类似于.hearder.bar会解析不正确，虽然现在很少去考虑这么低版本的浏览器了


#### 移除空的CSS规则

空的规则类似于.bar{}里面不具有任何样式，一般是为了预留样式的，但是如果过多的话会增加CSS文档体积


#### 正确使用display属性

由于display的作用，某些样式就会失效，写上也只是用来增加CSS文档体积，甚至影响浏览器解析性能

display: inline 之后不应该再使用width，height，margin，padding以及float

display: inline-block 之后不应该再使用float

display: block 之后不应该在使用vertical-align

display: table-* 之后不应该再使用margin或者float


#### 不滥用浮动

[上一篇](/2017/10/26/CSS-mianshi-zongjie-2)也总结过一些浮动的影响，以及解决方法。

虽然浮动不可避免，但是如果过多的浮动难免会有一些BUG，不得不说一些BUG就是因为CSS浮动引起的。


#### 不滥用Web字体

Web Fonts一般都体积很大，而且一些浏览器在下载web fonts时会阻塞页面渲染


#### 不声明过多的font-size

这是设计层面的问题，设计精良的页面不会有过多的font-size声明


#### 标准化各种浏览器前缀

通常将l浏览器前缀置于前面，标准化样式置于后面，类似于

```css
.header{
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	-o-border-radius: 5px;
	-ms-border-radius: 5px;
	border-radius: 5px;
}
```


#### 值为0时不要加单位


#### 遵守盒模型规则


#### 选择器

一般浏览器在根据选择器去查找元素的时候是从右向左查找，所以选择器不要写的过长


#### 雪碧图

为减少http请求次数，一般把一些较小的icon用一些工具把它合并成一张大图，这样在请求的时候可以请求一张图，使用的时候通过改变位置获取想要的图片




>既然选择了远方，便只顾风雨兼程。

—— HandSomeTT 2017.10.26