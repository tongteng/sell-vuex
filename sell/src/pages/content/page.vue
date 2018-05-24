<style lang="less" scoped>
@import './page.less';
</style>
<template>
	<div>
		<navheader></navheader>
		<contentheader :post="headerInfo"></contentheader>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2
                col-md-10 col-md-offset-1
                post-container">
					<vue-markdown :source="msg"></vue-markdown>
				</div>
			</div>
		</div>
		<indexfooter></indexfooter>
	</div>
</template>
<script src="./page.js">
</script>