import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 0,
		count1: 1,
		userList: [
			{ name: 'tongteng', sex: 'male', age: '22', id: '0' },
			{ name: 'zhangbingjie', sex: 'female', age: '18', id: '1' },
			{ name: 'liudikang', sex: 'male', age: '21', id: '2' },
			{ name: 'luanpeng', sex: 'male', age: '23', id: '3' },
			{ name: 'suijinlei', sex: 'male', age: '22', id: '4' }
		]
	},
	mutations: {
		addCount(state, payLoad) {
			let countIndex = payLoad.countIndex == 0 ? 'count' : 'count1';
			state[countIndex] += payLoad.addNum;
			// setInterval(() => {
			// 	state[countIndex] += payLoad.addNum;
			// }, 1000)
		},
		subCount(state, payLoad) {
			let countIndex = payLoad.countIndex == 0 ? 'count' : 'count1';
			state[countIndex] -= payLoad.subNum;
		}
	},
	getters: {
		lastYear: state => {
			return state.userList.filter(user => user.age > 21);
		},
		getUserById: (state) => (id) => {
			return state.userList.find( user => user.id == id);
		}
	},
})