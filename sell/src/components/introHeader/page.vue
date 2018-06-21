<style lang="less" scoped>
@import './page.less';
</style>
<template>
  <div>
      <header class="intro-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="site-heading">
                        <h1>{{title.title}}</h1>
                        <span class="subheading">{{title.subtitle}}</span>
                        <a href="/#/edit?type=add" style="text-decoration: none;"><span class="addBlog"><i class="iconfont" style="font-size: 30px;">&#xe600;</i></span></a>
                    </div>
                </div>
            </div>
        </div>
      </header>
  </div>
</template>
<script src="./page.js">
</script>