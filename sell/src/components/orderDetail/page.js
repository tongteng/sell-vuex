const serialDate = {
	"productInfo": {
		"stationName": "广州南站【同程自营休息室】askjdhflaksjhd",
		"payStatus": "1",
		"foods": [
			{
				"foodsName": "香辣鸡腿堡套餐阿收到了放假啊绿色的讲课离开见识到了高科技水电路费高考就",
				"foodCount": "1"
			},{
				"foodsName": "红烧牛肉面",
				"foodCount": "2"
			},{
				"foodsName": "红烧牛肉面",
				"foodCount": "2"
			},{
				"foodsName": "红烧牛肉面",
				"foodCount": "2"
			}
		],
		"useTime": "07:30-20:30",
		"location": "广州南站三层出发层A14 A15对面"
	},
	"orderInfo": {
		"serialId": "F124556457",
		"useCount": "1",
		"expiresDate": "2017-08-02",
		"contactName": "仝腾",
		"contactPhone": "18616853294",
	},
	"payInfo": {
		"amount": "￥99",
		"discount": "￥50",
		"payAmount": "￥49"
	}
}

const test = [
	{"name": "tongteng"},
	{"name": "zhangbingjie"}
]

export default{
	data() {
		return {
			serialDate
		}
	},
	filters: {
		forMateStatus(val){
			let obj = {
				"0": "待付款",
				"1": "待使用",
				"2": "已使用"
			}
			return obj[val];
		}
	},
	created() {
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	}
}