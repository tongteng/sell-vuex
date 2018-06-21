<style lang="less" scoped>
@import './page.less';
</style>
<template>
	<div>
		<navheader></navheader>
		<introheader :title="title"></introheader>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-12 col-xs-12 postlist-container">
					<div v-for="postitem in pagePost">
						<div class="post-preview">
							<a :href="'/#/content?ctitem='+postitem.url+'&id='+postitem.id">
								<h2 class="post-title">{{postitem.title}}</h2>
								<h3 class="post-subtitle">{{postitem.subtitle}}</h3>
								<div class="post-content-preview">
									{{postitem.content}}
								</div>
							</a>
							<p class="post-meta">{{postitem.date}}<span class="iconDel" @click="delBlog(postitem.id)"><i class="iconfont">&#xe61d;</i></span></p>
							
						</div>
						<hr>
					</div>
					<ul class="pager">
						<li class="btn prev" v-if="isShowPrev"><a href="javascript:void(0)" @click="prePost">← Prev Posts</a></li>
						<li class="btn next" v-if="isShowNext"><a href="javascript:void(0)" @click="nextPost">Next Posts→</a></li>
					</ul>
				</div>
				<slider></slider>
			</div>
		</div>
		<indexfooter></indexfooter>
	</div>
</template>
<script src="./page.js">
</script>
