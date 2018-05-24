>yi蓑烟雨任平生


# 题目和答案

<br>


<div>
	<ul>
		<li>
			<strong><em>Doctype 作用？ 严格模式与混杂模式怎么区分？各有什么意义？</em></strong><br>
			<blockquote>
				<p>(1) <!DOCTYPE>声明位于HTML文档的第一行，处于标签&lt;html&gt;之前，用于告知浏览器的解析器用什么文档标准去解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。</p><br>
				<p>(2) 标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老版本的浏览器的行为防止站点没办法工作。</p><br>
				<p>(3) DOCTYPE不存在或者格式不正确会导致文档以混杂模式呈现。</p>
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>一个网页从开始请求到最终显示的完整过程？</em></strong><br>
			<blockquote>
				<p>一个网页从请求到最终显示的完整过程一般可以分为以下7个步骤：</p><br>
				<p>(1) 在浏览器地址栏中输入网址</p><br>
				<p>(2) 浏览器根据网址通过DNS查找找到对应的Web服务器IP地址</p><br>
				<p>(3) 与服务器建立连接</p><br>
				<p>(4) 向服务器发送HTTP请求</p><br>
				<p>(5) 服务器根据请求响应对应的数据，或者错误信息</p><br>
				<p>(6) 本地浏览器下载服务器传回来的数据，开始解析渲染HTML源文件</p><br>
				<p>(7) 当HTML中有超链接，或者像引入CSS，JS或者需要加载图片都需要停下来下载，知道页面加载完成</p><br>	
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>目前有哪些浏览器？内核？</em></strong><br>
			<blockquote>
				<p>IE: trident</p><br>
				<p>FireFox: gecko</p><br>
				<p>Chrome: webkit/blink</p><br>
				<p>Safari: webkit</p><br>
				<p>Opera: presto</p><br>				
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>对HTML语义化的理解？</em></strong><br>
			<blockquote>
				<p>(1) HTML语义化能够让页面更加结构化，结构更加清晰，便于浏览器解析</p><br>
				<p>(2) 比如说一些标签不设置CSS自身也有样式的，像em，strong，h1~h5这种，即使没有CSS的情况下，也能以一种文档的形式在网页中渲染，便于阅读</p><br>
				<p>(3) 我读自己的代码都会头晕，语义化可以使阅读代码的人更容易将代码分块，便于维护</p><br>				
			</blockquote>
		</li><br>
		<li>
			<strong><em>块级元素？行级元素？行级块元素？空元素？</em></strong><br>
			<blockquote>
				<p>块级元素(display: block): 占满整行，可改变宽高。&lt;div&gt;,&lt;ol&gt;,&lt;ul&gt;,&lt;form&gt;,&lt;p&gt;等等</p><br>
				<p>行级元素(display: inline): 不占满整行，不可改变宽高。&lt;strong&gt;,&lt;em&gt;,&lt;span&gt;,&lt;i&gt;,&lt;b&gt;等等</p><br>
				<p>行级块元素(display: inline-block): 既不占满整行，又可以改变宽高。&lt;img&gt;,&lt;input&gt;,&lt;select&gt;等等</p><br>
				<p>空元素: &lt;br&gt;,&lt;br&gt;,&lt;img&gt;,&lt;input&gt;,&lt;select&gt;等等</p>				
			</blockquote>
		</li><br>
		<li>
			<strong><em>localStorage,sessionStorage与cookies之间的区别</em></strong><br>
			<blockquote>
				<p>(1) 存储大小不同：cookies能存取的数据很小，大约在几k，而sessionStorage和localStorage虽然也有大小限制，但是比cookies大很多，大约在5M左右甚至更多</p><br>
				<p>(2) 有效时间不同：cookies可以给它设置过期时间，在过期时间到来之前一直有效。localStorage能够长久存取数据，只有自己手动删除，而sessionStorage保存的数据在关闭浏览器之后就自动删除，关闭标签页或者关闭网页都会删除。其他方面sessionStorage和localStorage大致是相同的。分别通过window.localStorage和window.sessionStorage对其进行操作。</p><br>
				<p>(3) cookies是网站为了标识用户身份而储存在用户本地终端上的数据，在http请求中会携带cookies信息。而localStorage和sessionStorage只会在本地存储，我记得在学习Angular过程中了解到，这个localStorage可以用户组件之间的通讯，可以用来组件之间数据的传递。还有离线存储这块。</p><br>				
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>HTML5新特性</em></strong><br>
			<blockquote>
				<p>新增：canvas，video，audio，localStorage，sessionStorage等等</p><br>
				<p>删除：basefont，big，center，font，frame，noframe</p><br>
			</blockquote>
		</li><br>
	</ul>
</div>


>既然选择了远方，便只顾风雨兼程。

—— HandSomeTT 2017.10.25


