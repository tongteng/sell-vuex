>yi蓑烟雨任平生



## 原型

#### 原型是什么？

**原型**是function对象上的一个属性，他定义了由这个function对象构造出来的对象的公共祖先

由function对象构造出来的对象继承了function对象原型上的属性和方法

function对象的原型是.prototype, 而实例对象的原型调用方法是 .\__proto\__, 而Function.prototype与.\__proto__, 是指向同一个地址的，他们是相等的

```js
Function.prototype === new Function().__proto__;    //true
```

而这个prototype对象相当于是这个构造函数的实例对象，然后赋值给了prototype这个属性

```js
function father() {
    this.name = "tongteng";
}
console.log(father.prototype.constructor);  //father
```


## 原型链

#### 原型链是什么

上面已经介绍说prototype也是一个对象，且为实例对象，所以原型对象上面还会有原型，直到Object.prototype这个对象为终点

```js
function father() {}
father.prototype.__proto__ === Object.prototype     //true
```

注意上面也已经说了，Function.prototype相当于是Function构造出来的实例对象，所以实例对象上面的原型只能通过\__proto__调用，而函数对象时通过prototype调用

```js
function father() {}
father.prototype.prototype      //undefined
father.prototype.__proto__      //Object.prototype
```

而Object.prototype.\__proto__

```js
Object.prototype.__proto__      //null
```


但是也是有对象没有原型的，我们知道在js中几乎所有都是对象，但是null,undefined没有原型

那如果我们通过构造函数实例化出了普通对象，我们在普通对象上定义了一些属性，如果构造函数上也有一些属性，那我们在用for in枚举普通对象上面的属性的时候会把原型上面定义的属性也一并枚举出来，那我们怎么判断一个属性是普通对象上的属性，而不是原型对象上的属性呢

father.hasOwnProperty(prop)  如果返回true，就代表这个属性是实例对象本身的属性，如果是false，就代表的是原型上面的属性

```js
father.prototype.age = 18;
function father() {
	this.name = "tongteng"
}
var son = new father();
son.sex = 'male';
for(let prop in son) {
	if(son.hasOwnProperty(prop)){
		console.log(prop);      //name sex
	}
}
```




>既然选择了远方，便只顾风雨兼程。

—— HandSomeTT 2017.10.26