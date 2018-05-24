>yi蓑烟雨任平生


# 清除浮动流
清除浮动是为了清除浮动元素对文档产生的影响。浮动的元素会脱离文档流，导致高度塌陷，如果高度塌陷之后后面的元素布局将不能正常显示。

### 那么浮动元素又有哪些特征呢

**浮动元素会脱离文档流并向左/向右浮动，直到碰到父元素或者碰到另一个浮动元素。**注意是浮动，当浮动元素一般会飘起来，覆盖下面的元素。效果图如下。

![img](http://www.handsomett.top/img/in-post/post-css-mianshi-zongjie-2/floatdemo1.png)

![img](http://www.handsomett.top/img/in-post/post-css-mianshi-zongjie-2/floatdemo2.png)
<div class="text-center">
	图片来自于<a href="http://www.jianshu.com/p/09bd5873bed4">简书</a>
</div>

### 那么浮动元素又有哪些影响呢

**导致父元素高度塌陷，影响下面的元素。如图所示**

```html
<div class="wrapper">
	<div class="one content"></div>
	<div class="two content"></div>
</div>

<style type="text/css">
	.wrapper{
		border: 5px solid yellow;
	}

	.content{
		float: left;
	}

	.one{
		width: 100px;
		height: 100px;
		background-color: red;
	}
	.two{
		width: 100px;
		height: 100px;
		background-color: green;
	}
</style>
```

**由于浮动元素脱离文档流，所以父级元素内部没有元素可以撑开，故其高度为0**

![img](http://www.handsomett.top/img/in-post/post-css-mianshi-zongjie-2/floatdemo3.png)


### 那么怎么清除浮动元素呢

**1、伪元素,一般在浮动元素的父级元素中加入该类clearF**
```css
.clearF:before,
.clearF:after{
	content: "";
	display: block;
}
.clearF:after{
	clear: both;
}
.clearF{
	*zoom: 1; //  为了兼容IE6/7
}
```

比如上面的例子，我们给其添加这个class看看效果

![img](http://www.handsomett.top/img/in-post/post-css-mianshi-zongjie-2/floatdemo4.png)

这种方法是最通用的一种方法，那么还有其他方法吗？

**2、触发BFC**

你可能又要问了，什么是BFC呢？

**BFC定义**

Block Formatting Context(块级格式化上下文)。它是一块独立的渲染区域，只规定了内部元素如何布局，与外部不相干。

**BFC布局规则**

<ul>
	<li>内部的Box会在垂直方向，一个一个的放置</li>
	<li>Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会重叠</li>
	<li>BFC就是页面上的一个隔离的独立容器，容器里面的元素不会影响到容器外面的元素。</li>
	<li>计算BFC的高度时，浮动元素也参与计算</li>
</ul>

注意看规则的最后一点，计算BFC的高度时，浮动元素也参与计算，那么问题来了，怎么触发BFC呢

```css
//只要触发下面任意一条就可以

overflow: hidden;

display: inline-block/flex/inline-flex/table-cell;

position: absolute/fixed;

float: left/right;
```

那么我们在父级包裹元素添加上面属性，看看触发BFC之后的渲染效果

当添加这两个时，因为这两个元素没改变父级元素属性，父级元素仍然是block元素故效果为

```css
overflow: hidden;

display: flex;
```

![img](http://www.handsomett.top/img/in-post/post-css-mianshi-zongjie-2/floatdemo4.png)

如若我们添加这些时，因为这些属性改变父级元素属性为inline-block元素，不再占满整行，所以成包裹态

```css
display: inline-block/inline-flex/table-cell;

position: absolute/fixed;

float: left/right;
```

![img](http://www.handsomett.top/img/in-post/post-css-mianshi-zongjie-2/floatdemo5.png)

<br>


>既然选择了远方，便只顾风雨兼程。

—— HandSomeTT 2017.10.26
