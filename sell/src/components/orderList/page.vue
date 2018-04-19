<style lang="less" rel="stylesheet/less" scoped>
@import './page.less';
</style>
<script src="./page.js"></script>
<template>
	<div class="box">
		<div class="wrapper">
			<div class="content" v-for="item of date">
				<div class="title">
					<div class="serialId">订单号：{{item.serialId}}</div>
					<div class="payStatus" :class="{payUsed: item.payStatus === '2'}">{{item.payStatus|forMateStatus}}</div>
				</div>
				<div class="infowrapper">
					<div class="infoContent">
						<div class="imgContent">
							<img src="../../../img/station.png" alt="">
						</div>
						<div class="prodCont">
							<p class="stationInfo">{{item.stationName}}</p>
							<p class="foodInfo">{{item.foods[0].foodsName}}
								<span>×{{item.foods[0].foodsCounts}}</span>
							</p>
							<p class="moreFoods" v-if="item.foods.length > 1">等更多 {{item.foods.length - 1}} 件商品</p>
						</div>
					</div>
					<div class="payContent">
						<div class="price">￥{{item.price}}</div>
						<span class="payBtn" v-if="item.payStatus === '0'">支付</span>
						<span class="payBtn" v-else-if="item.payStatus === '1'">评论</span>
					</div>
				</div>
			</div>
		</div>
		<span class="moreOrder" @click="getMoreOrder" v-if="dateLen !== allLen">
			点击更多
		</span>
		<span class="moreOrder" v-else>
			已经见底了
		</span>
	</div>
</template>
