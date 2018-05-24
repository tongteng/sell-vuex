>yi蓑烟雨任平生



#### 值类型

JS中有哪些值类型呢

Number String Boolean Undefined Null Object 还有ES6中新增的 Symbol

那如何判断一个值类型呢

**typeof**操作符返回一个字符串，指示未经计算的操作数的类型

```js
Undefined   typeof(undefined)   //undefined
Null        typeof(null)        //object
Boolean     typeof(true)        //boolean
Number      typeof(2)           //number
String      typeof("abc")       //string
Function    typeof(father)      //function
object      typeof(object)      //object
```

**instanceof**判断的是一个对象是不是一个函数对象实例出来的对象

```js
function father() {}
function uncle() {}
var son = new father();
var brother = new uncle();
son instanceof father		//true
brother instanceof father 	//false
```

那我们现在有一个这样的问题，如何深度克隆一个对象，这个对象里面有可能还嵌着对象，而且里面不一定是对象，也有可能是数组

```js
function DeepClone(parent, child) {
	var toStr = Object.prototype.toString,
		arrStr = '[object Array]',
		child = child || {};
	for(var prop in parent) {
		if(parent.hasOwnProperty(prop)){
			if(typeof(parent[prop]) == 'object') {
				child[prop] = (toStr.call(parent[prop]) == arrStr) ? [] : {};	//这里调用Object.prototype.toString来判断这个对象是数组，还是对象
				DeepClone(parent[prop], child[prop]);
			}else{
				child[prop] = parent[prop];
			}
		}
	}
}
```

深度克隆有了，下面如果我们要做一个数组的去重，应该怎么做

```js
function unique(arr) {
	var obj = {};
	var res = [];
	for(var i = 0; i < arr.length; i ++) {
		if(!obj[arr[i]]) {
			obj[arr[i]] = 1;
		}else{
			res.push(arr[i]);
		}
	}
	return res;
}
```




>既然选择了远方，便只顾风雨兼程。

—— HandSomeTT 2017.10.28