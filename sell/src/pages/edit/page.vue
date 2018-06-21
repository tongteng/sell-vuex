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
					标题：<el-input v-model="param.blogTitle" placeholder=""></el-input>
					小标题：<el-input v-model="param.blogSubtitle" placeholder=""></el-input>
					标签：<el-select v-model="param.tags" placeholder="" style="margin-top: 5px;" multiple>
					  <el-option v-for="item in tagLists" :key="" v-model="item.tag">{{item.tag}}</el-option>
					</el-select>
				</div>
				<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" style="margin-top: 20px;">
					<mavon-editor style="height: 100%" v-model="param.value"></mavon-editor>
					<el-button type="" @click="save">保存
					</el-button>					
					<el-button type="" @click="setDate">日期</el-button>
				</div>
			</div>
		</div>
		<indexfooter></indexfooter>
	</div>
</template>
<script src="./page.js">
</script>