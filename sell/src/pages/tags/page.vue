<style lang="less" scoped>
@import './page.less';
</style>
<template>
	<div>
		<navheader></navheader>
		<introheader :title="title"></introheader>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
					<div class="tags">
						<a href="javascript:void(0)" v-for="tag in tagLists" :title="tag.tag" @click="toTag('#'+tag.tag)">{{tag.tag}}</a>
					</div>
					<div class="tag-list" v-for="tag in tagLists" :id="tag.tag">
						<div class="tag-title">
							<span class="iconfont">&#xe610;</span>
							<span class="fa fa-tag listing-seperator">{{tag.tag}}</span>							
						</div>
						<div v-for="tagItem in tagSelect[tag.tag]">
							<div class="post-preview">
								<a :href="'/#/content?ctitem='+tagItem.url">
									<h2 class="post-title">{{tagItem.title}}</h2>
									<h3 class="post-subtitle">{{tagItem.subtitle}}</h3>
								</a>
							</div>
							<hr>
						</div>
					</div>
				</div>
			</div>
		</div>
		<indexfooter></indexfooter>
	</div>
</template>
<script src="./page.js">
</script>