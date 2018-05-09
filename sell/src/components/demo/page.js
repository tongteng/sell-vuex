import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
	data() {
		return {
			a: 1, 
			b: 2,
			store: this.$store
		}
	},
	computed: {
		...mapState({
			count: state => state.count,
			count1: state => state.count1,
		}),
	},
	methods: {
		add(countIndex) {
			if (countIndex == 0) {
				// this.$store.state.count ++;
				this.addCount({
					countIndex,
					addNum: 5
				});
			} else if (countIndex == 1) {
				// this.$store.state.count1 ++;
				this.addCount({
					countIndex,
					addNum: 2
				});
			}
		},
		sub(countIndex) {
			if (countIndex == 0) {
				// this.$store.state.count --;	
				this.subCount({
					countIndex,
					subNum: 3
				});			
			} else if (countIndex == 1) {
				// this.$store.state.count1 --;
				this.subCount({
					countIndex,
					subNum: 5
				});
			}
		},
		...mapGetters([
			'lastYear',
			'getUserById'
		]),
		...mapMutations([
			'addCount',
			'subCount'
		])
	},
	created() {
		let user = this.$store.getters.getUserById(1);
		console.log(user.name);
	}
}