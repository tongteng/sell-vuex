<style lang="less" scoped>
@import './page.less';
</style>
<template>
	<div>
		<nav class="navbar navbar-default navbar-custom">
			<div class="container-fluid">
				<div class="navbar-header page-scroll">
					<button type="button" class="navbar-toggle" @click="showMenuItems" ref="btn-toggle">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a href="/" class="navbar-brand">TT Blog</a>
				</div>
				<div id="ttblog_navbar" class=" ">
					<div class="navbar-collapse" style="height: auto;">
						<ul class="nav navbar-nav navbar-right">
							<li><a href="/">Home</a></li>
							<li><a href="/#/abouttest">About</a></li>
							<li><a href="/#/tags">Tags</a></li>
						</ul>	
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>
<script src="./page.js">
</script>
