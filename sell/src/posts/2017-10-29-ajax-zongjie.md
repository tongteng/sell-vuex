>yi蓑烟雨任平生


## Ajax

### Ajax的实现原理

简单来说，ajax就是用过ajax对象（XMLRequestHTML）对象向服务器发送异步请求，然后从服务器获取数据之后，再通过js的dom操作，将数据插入到网页中


### Ajax的实现步骤

首先需要创建一个Ajax对象，通过Ajax对象上的**open**方法设置与服务器连接的一些信息，比如获取数据的地址**url**，发送请求的方法**method**，需要发送的数据**data**，还有我这个请求是异步还是同步。然后之后我们就可以先写监听函数，因为如果通过Ajax对象上的**send**方法先发送请求的话，可能速度太快Ajax对象状态已经改变完成，而下面的监听函数还没有定义。所以我们先定义监听函数，Ajax对象上面有一个**readystatechange**事件，用于监听Ajax事件状态的变化。我们在里面监听Ajax对象上的**readyState**的值，readyState的值有五种，代表着五种状态。其中0代表的是q请求还没有初始化，1代表的是已经与服务器建立连接，2代表的是请求已经接收到，3代表的是正在处理请求，4代表的是处理成功。所以当我们监听到readyState值为4的时候，我们就可以通过Ajax对象上的**responseText**对服务器发回来的数据进行处理了。最后别忘记用过**send**方法发送请求。


### Ajax封装函数

下面我们对Ajax进行封装

```js
function Ajax(json) {	//我们可以传一个对象，里面包括url, data, flag, method, callback
	let xhr = null;
	let url = json.url;
	let flag = json.flag;
	let method = json.method;
	let callback = json.callback;
	if(window.XMLRequestHTML) {
		xhr = new window.XMLRequestHTML();
	}else{
		xhr = new window.ActiveXObject("Microsoft.XMLHTTP");	//兼容IE
	}
	let method = method.toUpperCase();
	if(method == 'GET'){
		xhr.open(method, url + '?' + data + new Date().getTime(), flag);	//这里需要添加一个当前时间防止读取缓存
	}else if(method == 'POST'){
		xhr.open(method, url, flag);
	}
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200){
				callback(xhr.responseText);
			}else{
				alert("出错了");
			}
		}
	}
	if(method == 'GET'){
		xhr.send();
	}else if(method == 'POST'){
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
}
```


