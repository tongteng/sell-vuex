<style lang="less" rel="stylesheet/less" scoped>
@import "./page.less";
</style>
<script src="./page.js"></script>
<template>
  <div>
	  <p>{{count}}</p>
	  <button @click="add">+++</button>
	  <button @click="sub">---</button>
  </div>
</template>
