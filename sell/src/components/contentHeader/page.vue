<style lang="less" scoped>
@import './page.less';
</style>
<template>
  <div>
      <header class="intro-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="post-heading">
						<div class="tags">
							<a :href="'/#/tags?tag='+tag" class="tag" v-for="tag in post.tags">{{tag}}</a>
						</div>
						<h1>{{post.title}}</h1>
						<h2 class="subheading" id="restname">{{post.subtitle}}</h2>
						<span class="meta">{{post.date}}</span>
					</div>
                </div>
            </div>
        </div>
      </header>
  </div>
</template>
<script src="./page.js">
</script>