<style lang="less" scoped>
@import './page.less';
</style>
<template>
	<div>
		<h1>你没看错。这是首页。</h1>
		<a href="/#/demo" style="display: block; width: 200px; height: 200px; border: 3px solid red;"><button @click="toUrl('demo', $event)">demo</button></a>
	</div>
</template>
<script src="./page.js">
</script>
