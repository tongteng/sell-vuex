<style lang="less" scoped>
@import './page.less';
</style>
<template>
	<div class="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-12 col-xs-12 sidebar-container">
		<section>
			<hr class="hidden-sm hidden-xs">
			<h5><a href="/#/tags">FEATURED TAGS</a></h5>
			<div class="tags">
				<a :href="'/#/tags?tag=' + tag.tag" v-for="tag in tagLists">{{tag.tag}}</a>
			</div>
		</section>
		<section class="visible-md visible-lg">
			<hr>
			<h5><a href="/#/about">ABOUT ME</a></h5>
			<div class="short-about">
				<img src="./img/avatar-tt.jpg" alt="">
				<p>一蓑烟雨任平生</p>
				<ul class="list-inline">
					<li><a href=""><span class="fa-stack fa-lg"><i class="iconfont">&#xe69a;</i></span></a></li>
					<li><a href=""><span class="fa-stack fa-lg"><i class="iconfont">&#xe709;</i></span></a></li>
					<li><a href=""><span class="fa-stack fa-lg"><i class="iconfont">&#xe62f;</i></span></a></li>
				</ul>
			</div>
		</section>
		<hr>
		<h5>LIKES</h5>
		<ul class="list-inline">
			<li><a href="">阮一峰</a></li>
			<li><a href="">张冰洁</a></li>
			<li><a href="">刘迪康</a></li>
		</ul>
	</div>
</template>
<script src="./page.js">
</script>