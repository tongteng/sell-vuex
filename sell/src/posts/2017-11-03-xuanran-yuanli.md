>yi蓑烟雨任平生


我们之前已经简单介绍过，**[一个网页从开始请求到最终显示的完整过程](/2017/10/25/HTML-mianshi-zongjie/index.html)**,那么我们今天就来简单介绍一下浏览器的渲染过程。

如果想详细了解的话，请看**[浏览器的工作原理](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)**。

### 浏览器的高层结构

浏览器的主要组件为：

	1、用户界面 - 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的您请求的页面外，其他显示的各个部分都属于用户界面。
	2、浏览器引擎 - 在用户界面和呈现引擎之间传送指令。
	3、呈现引擎 - 负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。
	4、网络 - 用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现。
	5、用户界面后端 - 用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法。
	6、JavaScript 解释器。用于解析和执行 JavaScript 代码。
	7、数据存储。这是持久层。浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库。


![img](http://www.handsomett.top/img/in-post/post-xuanran-yuanli/components.png)
<strong><center>图：浏览器的主要组件</center></strong>

值得注意的是，和大多数浏览器不同，Chrome 浏览器的每个标签页都分别对应一个呈现引擎实例。每个标签页都是一个独立的进程。


### 呈现引擎

呈现引擎的作用就是在浏览器的显示屏上显示请求的内容。

默认情况下，呈现引擎可以显示HTML和XML文档与图片。通过插件（或者扩展程序），还可以显示其他类型的内容；例如，使用PDF查看器插件就能显示PDF文档。但是我们主要是说他的主要用途：显示使用CSS格式化的HTML内容和图片。

#### 主流程

呈现引擎一开始会从网络层获取请求文档的内容，内容的大小一般限制在8000个块以内，然后进行如下所示的基本流程

![img](http://www.handsomett.top/img/in-post/post-xuanran-yuanli/flow.png)
<strong><center>图：呈现引擎的基本流程</center></strong>

呈现引擎将开始解析文档，并将各标记逐个转化成**DOM树**上的DOM节点。同时也会解析外部CSS文件以及样式元素中的样式数据建立成**StyleRules**，然后**DOM树**与**StyleRules**合并创建**Render Tree**。

**Render Tree**包含多个带有视觉属性（如颜色和尺寸）的矩形。这些矩形的排列顺序就是它们在屏幕上显示的顺序。

**Render Tree**构建完毕之后，进入**布局（layout)**处理阶段，也就是为每一个节点分配一个应出现在屏幕上的确切坐标。下一个阶段是**绘制(painting)**，呈现引擎会遍历**Render Tree**，由用户界面后端层将每个节点绘制出来

需要着重指出的是，这是一个渐进的过程。为达到更好的用户体验，呈现引擎会力求尽快将内容显示在屏幕上。它不必等到整个HTML文档解析完毕之后，就会开始构建Render Tree和设置布局。在不断接收和处理来自网络的其他内容的同时，呈现引擎会将部分内容解析并显示出来。

#### 主流程示例

![img](http://www.handsomett.top/img/in-post/post-xuanran-yuanli/webkitflow.png)
<strong><center>图：WebKit主流程</center></strong>

![img](http://www.handsomett.top/img/in-post/post-xuanran-yuanli/geckoflow.jpg)
<strong><center>图：Mozilla的Gecko呈现引擎主流程</center></strong>

如图所示，虽然Webkit和Gecko使用的术语略有不同，但是整体的基本流程还是相同的。


#### 重绘(repaint)和重排(reflow)

**重绘(repaint)**:改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何属性并没有改变。

**重排(reflow)**:当浏览器发现某个部分发生了点变化影响了布局，需要倒回去重新渲染。比如元素的大小、位置发生改变，定位方式、边距等都会引起它内部、周围甚至整个页面的重新渲染。通常我们都无法估计浏览器会重排哪部分代码，因为它们都彼此影响着。

很显然可以看出来重绘与重排会大量消耗浏览器的性能，所以我们要尽量减少重绘与重排

	1、不要通过js一条一条修改Dom的样式，我们可以预先定义好CSS样式，然后更改Dom的classname
	2、如果需要修改Dom的样式，我们可以先通过display:none将其脱离文档流，再进行dom操作，因为在浏览器的渲染过程中，display为nong的元素不会参与渲染。但是visbility:hidden会参与。如果我们将其脱离文档流我们只会触发两次重排，但是如果我们不将元素脱离文档流，我们每一个Dom操作都会导致重排
	3、不要使用table布局，一个很小的改动会导致整个table的重新布局



在网上找了一个很幽默的解释：

	1、用户输入网址（假设是个html页面，并且是第一次访问），浏览器向服务器发出请求，服务器返回html文件； 
	2、浏览器开始载入html代码，发现＜head＞标签内有一个＜link＞标签引用外部CSS文件； 
	3、浏览器又发出CSS文件的请求，服务器返回这个CSS文件； 
	4、浏览器继续载入html中＜body＞部分的代码，并且CSS文件已经拿到手了，可以开始渲染页面了； 
	5、浏览器在代码中发现一个＜img＞标签引用了一张图片，向服务器发出请求。此时浏览器不会等到图片下载完，而是继续渲染后面的代码； 
	6、服务器返回图片文件，由于图片占用了一定面积，影响了后面段落的排布，因此浏览器需要回过头来重新渲染这部分代码； 
	7、浏览器发现了一个包含一行Javascript代码的＜script＞标签，赶快运行它； 
	8、Javascript脚本执行了这条语句，它命令浏览器隐藏掉代码中的某个＜div＞ （style.display=”none”）。突然少了这么一个元素，浏览器不得不重新渲染这部分代码； 
	9、终于等到了＜/html＞的到来，浏览器泪流满面…… 
	10、等等，还没完，用户点了一下界面中的“换肤”按钮，Javascript让浏览器换了一下＜link＞标签的CSS路径； 
	11、浏览器召集了在座的各位＜div＞＜span＞＜ul＞＜li＞们，“大伙儿收拾收拾行李，咱得重新来过……”，浏览器向服务器请求了新的CSS文件，重新渲染页面。


### 还有一些需要注意的点，比如脚本加载

我们先来看一个小例子

![img](http://www.handsomett.top/img/in-post/post-xuanran-yuanli/demo.png)

大家猜一猜，上下两个console分别输出啥。

![img](http://www.handsomett.top/img/in-post/post-xuanran-yuanli/answer1.png)

从上面是可以看出来，当遇到script标签时，是直接执行代码的，但是在执行代码的同时，浏览器有没有继续解析下面的文档呢？

我们写一个死循环放在开头

![img](http://www.handsomett.top/img/in-post/post-xuanran-yuanli/demo2.png)

大家再猜猜，这次又是什么情况呢。

![img](http://www.handsomett.top/img/in-post/post-xuanran-yuanli/answer2.png)

我们可以看到浏览器一直在输出1，而div标签并没有在浏览器中渲染。所以script标签是会阻塞浏览器的渲染的。

所以js的加载的执行和特点是：
	
	1、载入后马上执行
	2、执行时会阻塞页面后续的内容（包括页面的渲染、其他资源的下载

那我们的应对措施是:

	1、尽量将script标签放在页面结构最底部
	2、尽可能合并脚本
	3、采用无阻塞异步加载


以上。





>既然选择了远方，便只顾风雨兼程。

—— HandSomeTT 2017.11.03