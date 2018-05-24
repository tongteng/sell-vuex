>yi蓑烟雨任平生



## 事件

事件的方法有很多，鼠标事件（click，mousedown，mouseup，mouseover(mouseenter)，mouseout(mouseleave)，mousemove）

获取event事件

```js
$ele.onclick = function(e) {
	var event = e || window.event;
}
```

如果我们要想监听鼠标右键，从鼠标点击产生的event.button中判断点击的是右键还是左键，0为左键，1为滑轮，2为右键

```js
$ele.onmousedown = function(e) {
	var event = e || window.event;
	if(event.button == 0){
		//左键
	}else if(event.button == 2) {
		//右键
	}
}
```

还有需要注意的是，click只能监听左键，如果监听右键需使用mousedown和mouseup，而这三个触发顺序是mousedown>mouseup>click


### 事件绑定

事件绑定为了兼容不同的浏览器，有三种不同的方法

**addEventListener(type, handle, false)**

一般浏览器都可以使用这个方法进行事件绑定。type指的是事件类型，handle指的是触发函数，handle函数里面的this指向触发事件的对象。第三个参数指的是是否触发捕获

**attachEvent('on'+type, handle)**

IE浏览器使用的。type为事件类型，handle指的是触发函数，handle函数里面的this指向全局对象window

**句柄方式'on'+type**

最常见的事件绑定方式


那么我们封装一个兼容性绑定事件的方法addEvent

```js
function addEvent(ele, type, handle){
	if(ele.addEventListener) {
		ele.addEventListener(type, handle, false);
	}else if(ele.attachEvent) {
		ele[type + handle] = function() {
			handle.call(ele);		//这里需要使用call扭转一下触发函数里面的this指向，将其指向ele
		}
		ele.attachEvent('on' + type, ele[type + handle]);
	}else{
		ele['on' + type] = handle;
	}
}
```

### 事件解绑

事件绑定好了，有时候我们只需要触发一次，那么我们怎么解除事件呢

**removeEventListener(type, handle, false)**

参数用法见上addEventListener

**detachEvent('on' + type, handle)**

参数用法见上attachEvent

**'on' + type = null**


那我们现在封装一个解除事件绑定的方法，有一点需要注意的是，如果想要解除事件的话，绑定的事件函数不能为匿名函数，匿名函数无法解绑

```js
function removeEvent(ele, type, handle) {
	if(ele.removeEventListener) {
		ele.removeEventListener(type, handle, false);		//第三个参数需与绑定事件的第三个参数相同
	}else if (ele.detachEvent) {
		ele.detachEvent('on' + type, handle);
	}else{
		ele['on' + type] = null;
	}
}
```


### 事件冒泡与捕获

事件冒泡指的是当元素存在嵌套型结构时，会存在着事件冒泡。当在子元素上触发一个事件之后，就会冒泡到父级元素身上触发同样的事件。结构上的自底向上。

而事件捕获与冒泡相反，当在子元素触发事件之后，会从最顶级的父元素身上触发该事件，然后逐渐捕获到子元素身上。结构上的自顶向下。


HTML结构：

```html
<div class="box">
	<div class="wrapper">
		<div class="content"></div>
	</div>
</div>
```

Js代码

```js
let $box = document.getElementsByClassName('box')[0];
let $wrapper = document.getElementsByClassName('wrapper')[0];
let $content = document.getElementsByClassName('content')[0];

$content.addEventListener('click', () => {
	console.log('.content冒泡');
},false)
$wrapper.addEventListener('click', () => {
	console.log('.wrapper冒泡');
},false)
$box.addEventListener('click', () => {
	console.log('.box冒泡');
},false)
$content.addEventListener('click', () => {
	console.log('.content捕获');
},true)
$wrapper.addEventListener('click', () => {
	console.log('.wrapper捕获');
},true)
$box.addEventListener('click', () => {
	console.log('.box捕获');
},true)
```

当我点击最里面一层的content时，不知道大家有没有猜到会输出什么

```js
.box捕获
.wrapper捕获
.content冒泡
.content捕获
.wrapper冒泡
.box冒泡
```

大家猜对没有？

触发规则为**先捕获，后冒泡**，当同一个事件既有捕获又有冒泡时，哪个事件定义在前面，哪个就先执行。


### 取消事件冒泡

那么有时候我们不想触发事件冒泡，那我们怎么取消呢？

**stopPropergation**

W3C标准，但是IE9以下并不兼容

**cancelBubble = true**

兼容IE

那我们封装一个取消事件冒泡的函数stopBubble

```js
function stopBubble(event) {
	if(event.stopPropergation){
		event.stopPropergation();
	}else{
		event.cancelBubble = true;
	}
}
```


### 阻止默认事件

当我们想阻止一个默认事件，比如右键点击的菜单，我们怎么取消呢？

**preventDefault**

W3C标准，IE9以下又不兼容，没有错，不兼容

**returnValue = false**

兼容IE

那我们封装一个阻止默认事件的函数cancelHandler

```js
function cancelHandler(event) {
	if(event.preventDefault) {
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
}
```


### 事件委托

利用事件源对象和事件冒泡进行处理，比如我们在一个ul中有很多li，如果我们想在每一个li都监听一个事件的话，你可能会获取所有li元素然后遍历一个一个绑定。如果利用事件委托的话，我们只需要在ul上绑定事件，然后判断这个事件来自于内部的哪个元素。

事件源对象是什么呢

```js
$ele.onclick = function(e) {
	let event = e || window.event;
	let target = event.target || event.srcElement;	//火狐中只有target，而IE中只有srcElement，这里做兼容处理
}
```

上面的target就是我们想要的事件源对象。当获取到它之后我们可以做进一步处理。


还有一些键盘事件比如keydown, keypress, keyup

大家可以通过其event对象中获取想要的东西




>既然选择了远方，便只顾风雨兼程。

—— HandSomeTT 2017.10.29