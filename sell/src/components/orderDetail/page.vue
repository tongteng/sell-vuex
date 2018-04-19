<style lang="less" rel="stylesheet/less" scoped>
@import "./page.less";
</style>
<script src="./page.js"></script>
<template>
	<div class="box">
		<div class="wrapper">
			<div class="content">
				<div class="productInfo">
					<div class="stationInfo">
						<div class="station">
							<div class="stationName">{{serialDate.productInfo.stationName}}</div>
							<div class="payStatus">{{serialDate.productInfo.payStatus|forMateStatus}}</div>
						</div>
						<div class="productList">
							<div class="product" v-for="item of serialDate.productInfo.foods">
								<span>{{item.foodsName}}</span>
								<span>×{{item.foodCount}}</span>
							</div>
						</div>
					</div>
					<div class="locateInfo">
						<div class="useTime">{{serialDate.productInfo.useTime}}</div>
						<div class="location">{{serialDate.productInfo.location}}</div>
					</div>
				</div>
				<div class="orderInfo">
					<div class="useRemind" v-if="serialDate.productInfo.payStatus == 1">
						<p>使用提醒</p>
						<p>请联系贵宾休息室门店工作人员，凭手机号消费使用</p>
					</div>
					<div class="serialInfo">
						<div class="serialId"><span class="orderQt">订单编号</span><span class="orderAs">{{serialDate.orderInfo.serialId}}</span></div>
						<div class="useCount"><span class="orderQt">使用人次</span><span class="orderAs">{{serialDate.orderInfo.useCount}}</span></div>
						<div class="expiresDate"><span class="orderQt">有效期至</span><span class="orderAs">{{serialDate.orderInfo.expiresDate}}</span></div>
						<div class="contactName"><span class="orderQt w4">联系人</span><span class="orderAs">{{serialDate.orderInfo.contactName}}</span></div>
						<div class="contactPhone"><span class="orderQt">联系电话</span><span class="orderAs">{{serialDate.orderInfo.contactPhone}}</span></div>
					</div>
					<div class="payInfo">
						<div class="amount"><span class="orderQt">应付金额</span><span class="orderAs">{{serialDate.payInfo.amount}}</span></div>
						<div class="discount"><span class="orderQt w4">优惠券</span><span class="orderAs">{{serialDate.payInfo.discount}}</span></div>
						<div class="payAmount"><span class="orderQt">订单总额</span><span class="orderAs">{{serialDate.payInfo.payAmount}}</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
