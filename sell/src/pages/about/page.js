import navheader from '../../components/navHeader/page.vue'
import introheader from '../../components/introHeader/page.vue'
import indexfooter from '../../components/footer/page.vue'
import slider from '../../components/slider/page.vue'
export default{
    data() {
        return {
			title: {
				title: "About",
				subtitle: "Hey, this is Tongteng"
			}
		}
    },
    methods: {
        
	},
	components: {
		navheader,
		introheader,
		indexfooter,
		slider
	}
}