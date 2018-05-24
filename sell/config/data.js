export const postLists = [
	{
		"title": "ElementUI表格组件修改表格头部背景颜色问题",
		"subtitle": "",
		"date": "Posted by HandSomeTT on February 4, 2018",
		"author": "HandSomeTT",
		"header-img": "img/in-post/post-vue/vuebg.jpg",
		"tags": ["vue", "elementui", "css"],
		"url": "eleUI",
		"content": "yi蓑烟雨任平生 ElementUI修改表头组件背景颜色 看了EleUI官方文档，并没有发现有哪个属性可以去直接修改表头的背景颜色，而且我们在写组件的时候，并没有具体到tr,th，像下面代码展示的样式，组件直接就是用<el-table-column>，所以没办法给具体一行赋予class <el-table :data='tableData2' style='wi..."
	},{
		"title": "CSS面试总结（一）",
		"subtitle": "引入CSS,选择器,权重,盒模型,居中,三栏布局,position,display,画三角形,品字布局",
		"date": "Posted by HandSomeTT on October 25, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-css.jpg",
		"tags": ["css", "面试总结"],
		"url": "CSSmszj1",
		"content": "yi蓑烟雨任平生 题目和答案 如何引入CSS？ (1): 行间样式 <div style='...'></div> (2): 通过style标签 (3): 引入外部css文件 CSS有哪些选择器？ (1): id选择器(#id) (2): clas..."
	},{
		"title": "HTML面试总结",
		"subtitle": "",
		"date": "Posted by HandSomeTT on October 25, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-html.jpg",
		"tags": ["html", "面试总结"],
		"url": "HTMLmszj",
		"content": "yi蓑烟雨任平生 题目和答案 Doctype 作用？ 严格模式与混杂模式怎么区分？各有什么意义？ (1) <!DOCTYPE>声明位于HTML文档的第一行，处于标签<html>之前，用于告知浏览器的解析器用什么文档标准去解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。 (2) 标准模式的..."
	},{
		"title": "我的博客终于开通了",
		"subtitle": "",
		"date": "Posted by HandsomeTT on October 25, 2017",
		"author": "HandsomeTT",
		"header-img": "img/post-bg-firstBlog.jpg",
		"tags": ["记录生活"],
		"url": "firstBlog",
		"content": "“Year It’s Begin.” 前言 TongTeng 的 Blog 终于开通了。 终于能有个地方写写东西了。 正文 千呼万唤屎出来。 终于把博客搞出来了。 自己写写东西也挺好，能加深自己的记忆力。 感觉人已经老了，记忆力大不如前。 最近还老是失眠，可能是因为自己现在活的简直不像是个大四的学生吧。 没参加校招就很伤。 不知道自己咋想的。 唉。 加油。 ..."
	},{
		"title": "CSS面试总结（二）",
		"subtitle":	"清除浮动流,BFC",
		"date": "Posted by HandSomeTT on October 26, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-css.jpg",
		"tags": ["css", "面试总结"],
		"url": "CSSmszj2",
		"content": "yi蓑烟雨任平生 清除浮动流 清除浮动是为了清除浮动元素对文档产生的影响。浮动的元素会脱离文档流，导致高度塌陷，如果高度塌陷之后后面的元素布局将不能正常显示。 那么浮动元素又有哪些特征呢 浮动元素会脱离文档流并向左/向右浮动，直到碰到父元素或者碰到另一个浮动元素。注意是浮动，当浮动元素一般会飘起来，覆盖下面的元素。效果图如下。 图片来自于简书 那么浮动元素又有哪..."
	},{
		"title": "CSS面试总结（三）",
		"subtitle": "CSS优化",
		"date": "Posted by HandSomeTT on October 27, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-css.jpg",
		"tags": ["css", "面试总结"],
		"url": "CSSmszj",
		"content": "yi蓑烟雨任平生 说一说CSS在书写方面需要注意的一些点 修复解析错误 避免使用多类选择符 IE6及更古老的选择器对类似于.hearder.bar会解析不正确，虽然现在很少去考虑这么低版本的浏览器了 移除空的CSS规则 空的规则类似于.bar{}里面不具有任何样式，一般是为了预留样式的，但是如果过多的话会增加CSS文档体积 正确使用display属性 由于displa..."
	},{
		"title": "JS总结（一）",
		"subtitle":	"原型",
		"date": "Posted by HandSomeTT on October 27, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "面试总结"],
		"url": "JSzj",
		"content": "yi蓑烟雨任平生 原型 原型是什么？ 原型是function对象上的一个属性，他定义了由这个function对象构造出来的对象的公共祖先 由function对象构造出来的对象继承了function对象原型上的属性和方法 function对象的原型是.prototype, 而实例对象的原型调用方法是 ._proto_, 而Function.prototype与.__proto..."
	},{
		"title": "JS总结（二）",
		"subtitle": "typeof,对象类型",
		"date": "Posted by HandSomeTT on October 28, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "面试总结"],
		"url": "JSzj2",
		"content": "yi蓑烟雨任平生 值类型 JS中有哪些值类型呢 Number String Boolean Undefined Null Object 还有ES6中新增的 Symbol 那如何判断一个值类型呢 typeof操作符返回一个字符串，指示未经计算的操作数的类型 Undefined typeof(undefined) //undefined Null typ..."
	},{
		"title": "Ajax",
		"date": "Posted by HandSomeTT on October 29, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "面试总结", "ajax", "网络"],
		"url": "Ajaxzj",
		"content": "yi蓑烟雨任平生 Ajax Ajax的实现原理 简单来说，ajax就是用过ajax对象（XMLRequestHTML）对象向服务器发送异步请求，然后从服务器获取数据之后，再通过js的dom操作，将数据插入到网页中 Ajax的实现步骤 首先需要创建一个Ajax对象，通过Ajax对象上的open方法设置与服务器连接的一些信息，比如获取数据的地址url，发送请求的方法method..."
	},{
		"title": "JS总结（三）",
		"subtitle": "事件绑定和解绑，事件冒泡和捕获以及取消",
		"date": "Posted by HandSomeTT on October 29, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "面试总结"],
		"url": "JSzj3",
		"content": "yi蓑烟雨任平生 事件 事件的方法有很多，鼠标事件（click，mousedown，mouseup，mouseover(mouseenter)，mouseout(mouseleave)，mousemove） 获取event事件 $ele.onclick = function(e) { var event = e || window.event; } 如果我们要想监听鼠标..."
	},{
		"title": "美团的面试",
		"subtitle": "",
		"date": "Posted by HandSomeTT on October 29, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["面试总结"],
		"url": "MTms",
		"content": "yi蓑烟雨任平生 美团的视频面试 总体来说呢，面试的内容还是挺简单的。 HTML语义化 预编译 To session,cookie,localStorage,sessionStorage To 浏览器渲染过程 promise 闭包 框架 动画加速 To Doctype 内存销毁机制 先总结一下放在这，等有空回来给补上吧 既然选择了远方，便只顾风雨兼程..."
	},{
		"title": "头条的面试",
		"subtitle": "",
		"date": "Posted by HandSomeTT on October 29, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["面试总结"],
		"url": "TTms",
		"content": "yi蓑烟雨任平生 头条的视频面试 总体来说呢，面试的内容还是挺简单的。但是我都不太会。问的都很基础。 HTML语义化 http 方法 To this(call, apply, bind) To 权重值 To cookie session udp tcp区别 纯CSS写一个自适应正方形 To 节流 jquery on方法的实现 To 性能优化 事件模型 设计..."
	},{
		"title": "Js函数节流",
		"subtitle": "",
		"date": "Posted by HandSomeTT on October 31, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "面试总结"],
		"url": "JSjl",
		"content": "yi蓑烟雨任平生 Js函数节流 大家听着这个名字可能会有些陌生对吧，但是我们要是说起它的作用，大家肯定会一拍脑袋，哦，原来这就是节流 不知道大家在实际开发中有没有遇到这样的状况，比如说为页面绑定resize事件之后，当我改变页面大小的时候，就会频繁触发这个绑定函数，如果绑定函数里面没有什么东西还好，如果里面不仅有很多函数，还发送AJAX请求，那就麻烦大了。所以我们要有一种方法能..."
	},{
		"title": "CDN",
		"subtitle": "",
		"date": "Posted by HandSomeTT on November 1, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["网络"],
		"url": "CDN",
		"content": "yi蓑烟雨任平生 CDN 全称: Content Delivery Network 或 Content Distribute NetWork, 即内容分发网络。 基本思路 尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，CDN系统能够实时地根据网络流量和各节点..."
	},{
		"title": "this指向",
		"subtitle":	"call, apply, bind",
		"date": "Posted by HandSomeTT on November 2, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript"],
		"url": "JSthis",
		"content": "yi蓑烟雨任平生 this指向 call 基本使用 var arr = [5, 1, 3, 4]; arr.sort(); 上面两行简单的代码执行过程为，arr这个数组对象的实例通过原型链的查找机制找到Array.prototype 上的 sort 方法，然后执行 sort 方法。 注意： sort方法在执行前有一个在原型链上查找的过程（在当前实例中并没有找到该方法，通过..."
	},{
		"title": "浏览器的渲染过程",
		"subtitle": "重绘、重排",
		"date": "Posted by HandSomeTT on November 3, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["网络", "计算机"],
		"url": "Render",
		"content": "yi蓑烟雨任平生 我们之前已经简单介绍过，一个网页从开始请求到最终显示的完整过程,那么我们今天就来简单介绍一下浏览器的渲染过程。 如果想详细了解的话，请看浏览器的工作原理。 浏览器的高层结构 浏览器的主要组件为： 1、用户界面 - 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的您请求的页面外，其他显示的各个部分都属于用户界面。 2、浏览器引擎 - 在用户界面..."
	},{
		"title": "ES6(一)",
		"subtitle": "let和const命令",
		"date": "Posted by HandSomeTT on November 4, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "es6"],
		"url": "ES61",
		"content": "yi蓑烟雨任平生 let 基本用法 ES6中新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量只在let命令所在的代码块内有效 { let a = 0; var b = 1; } console.log(a)	//Uncaught ReferenceError: a is not defined console.log(b) //1 上面在代码块..."
	},{
		"title": "ES6(二)",
		"subtitle": "变量的解构赋值",
		"date": "Posted by HandSomeTT on November 5, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "es6"],
		"url": "ES62",
		"content": "yi蓑烟雨任平生 数组的解构赋值 基本用法 ES6允许按照一定模式，从数组和对象中获取值，并直接赋值给变量，这被称为解构 以前我们赋值的方法为 let a = 10; let b = 20; let c = 30; 但我们现在可以从数组中获取值，按照相对应的位置赋给变量 let [a, b, c] = [10, 20, 30]; 本质上，这种写法属于“模式匹配”，只要等..."
	},{
		"title": "浏览器缓存与存储",
		"subtitle": "cookie, session, localStorage, sessionStorage",
		"date": "Posted by HandSomeTT on November 7, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["网络"],
		"url": "Coockie",
		"content": "yi蓑烟雨任平生 之前我们说过localStorage,sessionStorage,Cookie的区别。我们今天来聊一聊Cookie与Session之间的联系与区别。 Cookie概念 在浏览某些网站的时候，网站会把一些数据保存在客户端用于跟踪用户，实现用户自定义等功能。 如果不设置过期时间，那么Cookie生命周期就为浏览器会话期间，称为会话Cookie，只要关闭浏览器，..."
	},{
		"title": "性能优化",
		"subtitle":	"页面级优化，代码级优化",
		"date": "Posted by HandSomeTT on November 8, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript"],
		"url": "XNyh",
		"content": "yi蓑烟雨任平生 性能优化 相信大部分人都讨厌一件事，那就是等待，有目标的等待还好，毫无目标的等待是最烦的。 当我打开一个网页，看着浏览器上面的状态一直在转圈圈，我就搞不明白了，是我本地的网速不够么？不对啊，100M带宽干啥不得嗖嗖的。怎么你一个破网页打不开呢。难不成我断网了？刷新一下看看，还不行。算了算了滚粗吧。 不知道大家是不是跟我一个感受，一个网页我等了你几秒你还是在转..."
	},{
		"title": "排序算法",
		"subtitle": "",
		"date": "Posted by HandSomeTT on November 9, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "es6", "算法"],
		"url": "Sort",
		"content": "yi蓑烟雨任平生 冒泡排序 算法描述 冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。 时间复杂度：O(n2) 实现步骤 <1>.比较相邻的元素。如果第一个..."
	},{
		"title": "设计模式之“发布-订阅”模式",
		"date": "Posted by HandSomeTT on November 10, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "es6", "设计模式"],
		"url": "FBdy",
		"content": "yi蓑烟雨任平生 先给上链接 之后再自己整理一下 既然选择了远方，便只顾风雨兼程 – HandSomeTT 2017-11-10"
	},{
		"title": "继承",
		"subtitle": "",
		"date": "Posted by HandSomeTT on November 9, 2017",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "es6"],
		"url": "Inherit",
		"content": "yi蓑烟雨任平生 继承 JS中实现继承的方法有很多种，我们通过参考书籍总结一下常见的几种 通过原型链继承 function Animal() { this.leg = 4; this.ear = 2; } function Dog() { } Dog.prototype = new Animal(); let jack = new Dog(); console.log..."
	},{
		"title": "Happy New Year",
		"subtitle": "",
		"date": "Posted by HandsomeTT on January 1, 2018",
		"author": "HandsomeTT",
		"header-img": "img/post-bg-firstBlog.jpg",
		"tags": ["记录生活"],
		"url": "Hyny",
		"content": "“It’s new year” 前言 2017算是结束了，2018算是开始了。 正文 最近一直忙于工作的事，博客已经好久没去写了。 也不是说自己没有空，毕竟晚上回家还有一两个小时的时间去做一些自己想去做的事情。 大概是因为自己太懒了，到家之后啥也不想干，毕竟公司离家太远，一个多小时的地铁站程，还是会让自己身心疲惫的。 等到今年三月份公司搬家，一定要换一处离公司近一点的房子..."
	},{
		"title": "ES6(三) -- 函数的扩展",
		"subtitle": "函数参数的默认值",
		"date": "Posted by HandSomeTT on February 10, 2018",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "es6"],
		"url": "ES631",
		"content": "yi蓑烟雨任平生 1、函数参数的默认值 基本用法 ES6之前只能通过下面这个方法给参数指定默认值 function demo(a, b) { b = b || 'world'; console.log(a, b); } demo('hello', ''); //hello world demo('hello', 'tong'); //hello to..."
	},{
		"title": "ES6(四) -- 函数的扩展",
		"subtitle": "rest参数、严格模式、name属性、箭头函数",
		"date": "Posted by HandSomeTT on February 11, 2018",
		"author": "HandSomeTT",
		"header-img": "img/post-bg-js.jpg",
		"tags": ["javascript", "es6"],
		"url": "ES632",
		"content": "yi蓑烟雨任平生 2、rest参数 顾名思义，rest参数字面意思大概就是剩下的参数的意思，用于获取函数参数的剩下的参数，rest参数为一个数组，类似于arguments对象，这个变量将参数中剩下的变量都放入到数组中，而且这个数组就是一个真正的数组，而不是像arguments那样是一个类数组，并不是一个真正的数组。 function add (...values) { let..."
	}
];

export const tagLists = [
	{
		"tag": "记录生活",
		"url": "/#/tags?tag=记录生活"
	},{
		"tag": "html",
		"url": "/#/tags?tag=html"
	},{
		"tag": "面试总结",
		"url": "/#/tags?tag=面试总结"
	},{
		"tag": "css",
		"url": "/#/tags?tag=css"
	},{
		"tag": "javascript",
		"url": "/#/tags?tag=javascript"
	},{
		"tag": "ajax",
		"url": "/#/tags?tag=ajax"
	},{
		"tag": "网络",
		"url": "/#/tags?tag=网络"
	},{
		"tag": "计算机",
		"url": "/#/tags?tag=计算机"
	},{
		"tag": "es6",
		"url": "/#/tags?tag=es6"
	},{
		"tag": "算法",
		"url": "/#/tags?tag=算法"
	},{
		"tag": "设计模式",
		"url": "/#/tags?tag=设计模式"
	},{
		"tag": "vue",
		"url": "/#/tags?tag=vue"
	},{
		"tag": "elementui",
		"url": "/#/tags?tag=elementui"
	}
]