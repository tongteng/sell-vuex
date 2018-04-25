<style lang="less" rel="stylesheet/less" scoped>
@import "./page.less";
</style>
<script src="./page.js"></script>
<template>
  <div>
	  <p>{{count}}</p>
	  <button @click="add">+++</button>
	  <button @click="sub">---</button>
		<a href="/#/" style="width: 100px; height:100px; display: block; background-color: green;">返回首页</a>
  </div>
</template>
