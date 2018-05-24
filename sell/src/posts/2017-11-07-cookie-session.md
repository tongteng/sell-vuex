>yi蓑烟雨任平生


之前我们说过`localStorage`,`sessionStorage`,`Cookie`的区别。我们今天来聊一聊`Cookie`与`Session`之间的联系与区别。

### Cookie概念

在浏览某些网站的时候，网站会把一些数据保存在客户端用于跟踪用户，实现用户自定义等功能。

如果不设置过期时间，那么**Cookie生命周期**就为浏览器会话期间，称为**会话Cookie**，只要**关闭**浏览器，**Cookie**就消失了，这样的cookie一般保存在**内存**中。

如果设置过期时间，那么浏览器会将**cookie**保存到**硬盘**上，这些cookie有效期一直到设置的过期时间。

那么我们怎么在浏览器中操作cookie呢
```js
function setCookie({name, value, daysToLive} = {}) {
	let cookie = `${name}=${encodeURIComponent(value)}`;
	if(typeof daysToLive === "number"){
		cookie = `${cookie};max-age=${daysToLive*60*60*24}`;
	}
	document.cookie = cookie;
}
setCookie({name: 'tongteng', value: 'dashuaige', daysToLive: 1});
setCookie({name: 'tongteng1', value: 'dashuaige', daysToLive: 1});
setCookie({name: 'tongteng2', value: 'dashuaige', daysToLive: 1});
setCookie({name: 'tongteng3', value: 'dashuaige', daysToLive: 1});
setCookie({name: 'tongteng4', value: 'dashuaige', daysToLive: 1});
```

我们可以通过`name=value`设置保存的cookie键值对，通过`max-age`设置cookie有效时间。还有一些参数比如`path`、`domain`、`secure`等等，使用的时候可查阅资料

那么我们怎么获取cookie呢
```js
function getCookie() {
	let cookie = {};
	let all = document.cookie;
	if(all === "") {
		return cookie;
	}
	let list = all.split("; ");
	for(let i = 0; i < list.length; i ++) {
		let temp = list[i].split("=");
		cookie[temp[0]] = decodeURIComponent(temp[1]);
	}
	return cookie;
}
console.log(getCookie());
{
	'tongteng':'dashuaige',
	'tongteng1':'dashuaige',
	'tongteng2':'dashuaige',
	'tongteng3':'dashuaige',
	'tongteng4':'dashuaige',
}
```

我们可以通过`document.cookie`来获取写入的cookie通常其为字符串的格式，然后我们通过js操作将其转化为数组以供使用。



### Session概念

`session`是存放在服务器端的类似于对象的键值对解结构用于存放数据，用来实现网页之间数据传递，是一个存储在服务器端的对象集合

当浏览器第一次发送请求时，服务器自动生成了一个`HashTable`保存着用户信息和一个`session id`用来唯一标识着这个`HashTable`，并将`session id`响应到浏览器。当浏览器第二次发送请求时会带上服务器响应的`session id`一起发送给服务器，服务器从请求中获取到`session id`，然后通过`session id`查找到对应着的`HashTable`。

一般情况下，服务器会在一定时间内保存这个`HashTable`，但是超过一定时间就会销毁。也可以通过数据库把`HashTable`里面的内容保存起来，这样就没有了时间限制，但是如果用户量较多，这样容易造成数据库急剧暴涨，服务器压力就会较大。

那么在客户端中怎么保存`session id`呢

一般客户端通过两种方法来保存，一种方法就是`cookie`来保存，记录我的登录状态功能实现就是基于这种方式。服务器通过设置`cookie`的方式将`sessionid`写入到浏览器的`cookie`中。如果我们不设置过期时间，`cookie`保存在内存中，关掉浏览器之后`cookie`就消失了，保存在`cookie`中的`session id`也就消失了，那我们将这个过期时间设置为若干天之后，那么在这若干天之内访问这个网站，浏览器都会将带有`session id`的`cookie`发送到浏览器中去。

还有一种方法就是`URL附加信息的`方式，在URL后面附加`session id`

第三种方法就是在页面表单里增加隐藏域，这种方法跟第二种一样，只不过前者通过`get`方式发送数据，后者通过`post`方式发送数据



实现“记住我的登录状态”的功能

如果服务器通过设置`cookie`的方式将`session id`保存在浏览器中并且设置过期时间为一年。那么在这一点时间内，浏览器访问网站的时候都会将带有`session id`的`cookie`发送到服务器上，服务器根据`session id`在内存中或者数据库中找到对应的`HashTable`。但是实际上服务器上的`session`不会一直存在，过一段时间服务器上的`session`就会被销毁以减轻服务器压力，即使客户端仍然保存了`cookie`也仍然做不到记住登录状态了，那这个时候怎么办呢。一般这个时候我们就会把用户的用户名和加密之后的密码保存在`cookie`里，当服务器上的`session`被销毁之后使用`cookie`内存放的用户名和密码重新登录一次，服务器重建`session`并更新保存在浏览器中的`session id`。


还有一点需要注意的是，比如说我们登录了百度账号，然后我们发现百度贴吧，百度文库都是登录状态，这是为啥呢，因为虽然这几个网页不同源，但是都属于baidu.com这个主域下的子域，我们可以通过`document.domain`进行设置，只要把几个子域的`domain`属性设置为`baidu.com`就可以实现跨域通信了
```js
document.domain = 'baidu.com'
```

我也是一知半解，在网上查查资料可能说的不是很清晰。


### localStorage



>既然选择了远方，便只顾风雨兼程。

—— HandSomeTT 2017.11.07