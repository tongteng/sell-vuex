<style lang="less" rel="stylesheet/less" scoped>
@import "./page.less";
</style>
<script src="./page.js"></script>
<template>
  <div>
	  <p>{{count}}</p>
	  <button @click="add(0)">+++</button>
	  <button @click="sub(0)">---</button>


		<p>{{count1}}</p>
		<button @click="add(1)">+++</button>
	  <button @click="sub(1)">---</button>



		<div>{{lastYear()}}</div>

		<a href="/#/" style="width: 100px; height:100px; display: block; background-color: green;">返回首页</a>
  </div>
</template>
