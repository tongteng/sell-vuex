>yi蓑烟雨任平生


# 题目和答案

<br>

<div>
	<ul>
		<li>
			<strong><em>如何引入CSS？</em></strong><br>
			<blockquote>
				<p>(1): 行间样式 &lt;div style="..."&gt;&lt;/div&gt;</p><br>
				<p>(2): 通过style标签</p><br>
				<p>(3): 引入外部css文件</p><br>
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>CSS有哪些选择器？</em></strong><br>
			<blockquote>
				<p>(1): id选择器(#id)</p><br>
				<p>(2): class选择器(.class)</p><br>
				<p>(3): 标签选择器(div,p,h1)</p><br>
				<p>(4): 相邻选择器(div+p)</p><br>
				<p>(5): 父子选择器(ul>li)</p><br>
				<p>(6): 后代选择器(li a)</p><br>
				<p>(7): 通配符选择器(*)</p><br>
				<p>(8): 伪类选择器(a:hover)</p><br>		
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>CSS选择器的权重? </em></strong><br>
			<blockquote>
				<p>!important		正无穷</p><br>
				<p>行间样式		      1000</p><br>
				<p>id选择器		   100</p><br>
				<p>class|伪类|属性	   10</p><br>
				<p>标签|伪元素		   1</p><br>
				<p>通配符*				 0</p><br>
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>盒模型？</em></strong><br>
			<blockquote>
				<p>分为W3C盒模型，还有IE盒模型，两者的区别就是给的盒子的宽高包括什么。</p><br>
				<p>W3C盒模型中，盒子大小 = 给的大小(content) + padding + border。 content为给的宽高。box-sizing: content-box</p><br>
				<p>IE盒模型中，盒子大小 = 给的大小。 而content = 盒子大小 - padding - border。 box-sizing: border-box</p><br>
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>如何居中一个div? </em></strong><br>
			<blockquote>
				<p>如果给定宽高水平居中的话：margin: 0 auto;</p><br>
				<p>如果给定宽高水平垂直居中：<br>
					&nbsp;&nbsp;&nbsp;&nbsp;width: 100px;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;height: 100px;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;position: absolute;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;left: 50%;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;top: 50%;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;margin-left: -50px;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;margin-top: -50px;
				</p><br>
				<p>
					如果未给定宽高：
					<ul>
						<li>
							<p>使用CSS3中的translate进行平移</p>
							&nbsp;&nbsp;&nbsp;&nbsp;position: absolute;<br>
							&nbsp;&nbsp;&nbsp;&nbsp;left: 50%;<br>
							&nbsp;&nbsp;&nbsp;&nbsp;top: 50%;<br>
							&nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-50%, -50%);<br>
						</li><br>
						<li>
							<p>Flex布局</p>
							在父级元素中<br>
							.container {<br>
								&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;align-items: center;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;<br>
							}
						</li>
					</ul>
				</p>
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>三栏布局？</em></strong><br>
			<blockquote>
				<p><strong>通过浮动或者绝对定位需要将左右两元素放在中间元素的上面，而通过flex的话就正常左，中，右就可以</strong></p><br>
				<p>
					<strong>通过float方法：</strong><br>
					&nbsp;&nbsp;.left, .right{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;width: 100px;<br>
						&nbsp;&nbsp;&nbsp;&nbsp;height: 100px;<br>
					&nbsp;&nbsp;}<br>
					&nbsp;&nbsp;.left{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;float: left;<br>
					&nbsp;&nbsp;}<br>
					&nbsp;&nbsp;.right{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;float: right;<br>
					&nbsp;&nbsp;}<br>
					&nbsp;&nbsp;.mid{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;height: 100px;<br>
						&nbsp;&nbsp;&nbsp;&nbsp;margin-left: 100px;<br>
						&nbsp;&nbsp;&nbsp;&nbsp;margin-right: 100px;<br>
					&nbsp;&nbsp;}
				</p><br>
				<p>
					<strong>通过绝对定位方法：</strong><br>
					&nbsp;&nbsp;.left, .right{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;position: absolute;<br>
						&nbsp;&nbsp;&nbsp;&nbsp;width: 100px;<br>
						&nbsp;&nbsp;&nbsp;&nbsp;height: 100px;<br>
					&nbsp;&nbsp;}<br>
					&nbsp;&nbsp;.left{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;left: 0;<br>
					&nbsp;&nbsp;}<br>
					&nbsp;&nbsp;.right{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;right: 0;<br>
					&nbsp;&nbsp;}<br>
					&nbsp;&nbsp;.mid{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;height: 100px;<br>
						&nbsp;&nbsp;&nbsp;&nbsp;margin-left: 100px;<br>
						&nbsp;&nbsp;&nbsp;&nbsp;margin-right: 100px;<br>
					&nbsp;&nbsp;}<br>
				</p><br>
				<p>
					<strong>通过flex布局方法：</strong><br>
					&nbsp;&nbsp;flex布局需要在其父级元素加上display: flex;<br>
					&nbsp;&nbsp;.wrapper{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br>
					&nbsp;&nbsp;}<br>
					&nbsp;&nbsp;.left, .right{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;width: 100px;<br>
						&nbsp;&nbsp;&nbsp;&nbsp;height: 100px;<br>
					&nbsp;&nbsp;}<br>
					&nbsp;&nbsp;.mid{<br>
						&nbsp;&nbsp;&nbsp;&nbsp;flex-grow: 1;<br>
					&nbsp;&nbsp;}<br>
				</p><br>				
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>display有哪些值？</em></strong><br>
			<blockquote>
				<p>
					<ul>
						<li><p><strong>block:</strong> &nbsp;&nbsp;&nbsp;&nbsp;块级元素。占满整行，且可以修改宽高</p></li>
						<li><p><strong>inline:</strong> &nbsp;&nbsp;&nbsp;&nbsp;行级元素。不占满整行，不可以修改宽高</p></li>
						<li><p><strong>inline-block</strong>&nbsp;&nbsp;&nbsp;&nbsp;行级块元素，不占满正行，但是可以修改宽高</p></li>
						<li><p><strong>none</strong>&nbsp;&nbsp;&nbsp;&nbsp;将元素从文档中隐藏掉，不占位置</p></li>
						<li><p><strong>table</strong>&nbsp;&nbsp;&nbsp;&nbsp;块级表格</p></li>
						<li><p><strong>inherit</strong>&nbsp;&nbsp;&nbsp;&nbsp;从父级元素中继承该值</p></li>
					</ul>
				</p>
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>position有哪些值？</em></strong><br>
			<blockquote>
				<p>
					<ul>
						<li><p><strong>absolute</strong>&nbsp;&nbsp;&nbsp;&nbsp;绝对定位。相对于距离自己最近的有定位属性的元素进行定位，且不保留原本位置</p></li>
						<li><p><strong>relative</strong>&nbsp;&nbsp;&nbsp;&nbsp;相对定位。相对于其原先未知进行定位，且保留原先位置</p></li>
						<li><p><strong>fixed</strong>&nbsp;&nbsp;&nbsp;&nbsp;混合定位。相对于浏览器边框进行定位，且不保留原先位置</p></li>
						<li><p><strong>sticky</strong>&nbsp;&nbsp;&nbsp;&nbsp;CSS3新增属性，类似于relative与fixed的结合体，当目标元素在可视区域内就是relative定位，当超出可视区域就相当于fixed定位于目标位置</p></li>
						<li><p><strong>static</strong>&nbsp;&nbsp;&nbsp;&nbsp;默认值。</p></li>
						<li><p><strong>inherit</strong>&nbsp;&nbsp;&nbsp;&nbsp;从父级元素继承该属性</p></li>
					</ul>
				</p><br>
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>纯CSS实现一个三角形？</em></strong><br>
			<blockquote>
				<p>border可以分为border-top,border-right,border-bottom,border-left。</p><br>
				<p>所以我们可以</p>
				<p>
					&nbsp;&nbsp;.demo{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;width: 0;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;height: 0;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;border-width: 20px;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;border-style: solid;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;border-color: red transparent transparent transparent;<br>
					&nbsp;&nbsp;}<br>
				</p>
			</blockquote>
		</li>
		<br>
		<li>
			<strong><em>品字布局？</em></strong><br>
			<blockquote>
				<p>简单实现：</p>
				<p>上面一个元素width: 100%</p>
				<p>下面两个元素width: 50%,使用float浮动，或者inline使其不换行即可。</p>
			</blockquote>
		</li>
		<br>
	</ul>
</div>


>既然选择了远方，便只顾风雨兼程。

—— HandSomeTT 2017.10.26
