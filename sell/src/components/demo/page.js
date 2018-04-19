import {mapState} from 'vuex'
export default {
	data() {
		return {

		}
	},
	computed: {
		count() {
			return this.$store.state.count;
		}
	},
	methods: {
		add() {
			this.$store.state.count++;
		},
		sub() {
			this.$store.state.count--;
		}
	},
	created() {
		console.log(mapState);
	}
}