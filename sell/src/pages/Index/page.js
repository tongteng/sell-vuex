import navheader from '../../components/navHeader/page.vue'
import introheader from '../../components/introHeader/page.vue'
import indexfooter from '../../components/footer/page.vue'
import slider from '../../components/slider/page.vue'
import { postLists } from '../../../config/data.js'
export default {
	data() {
		return {
			postLists,
			pagePost: [],
			pageIndex: 0,
			startIndex: 0,
			endIndex: 0,
			isShowPrev: false,
			isShowNext: false,
			title:{
				title: "TT Blog",
				subtitle: "一蓑烟雨任平生"
			}
		}
	}, 
	methods: {
		prePost() {
			this.pageIndex -- ;
			this.slicePostLists();
			this.toScrollContainer();
		},
		nextPost() {
			this.pageIndex ++ ;			
			this.slicePostLists();
			this.toScrollContainer();
		},
		slicePostLists() {
			if(this.pageIndex == 0){
				this.isShowPrev = false;
				this.isShowNext = true;
			}else if((this.pageIndex + 1) * 10 >= this.postLists.length){
				this.isShowPrev = true;
				this.isShowNext = false;
			}else{
				this.isShowPrev = true;
				this.isShowNext = true;
			}
			this.startIndex = this.pageIndex * 10;
			this.endIndex = (this.pageIndex + 1) * 10 < this.postLists.length ? (this.pageIndex + 1) * 10 : undefined;
			this.pagePost = [...this.postLists.slice(this.startIndex, this.endIndex)];
		},
		toScrollContainer() {
			if(document.documentElement.scrollTop) {
				document.documentElement.scrollTop = 0;
			}else if(document.body.scrollTop) {
				document.body.scrollTop = 0;
			}else {
				window.pageYOffset = 0;
			}
		}
	},
	components: {
		navheader,
		introheader,
		indexfooter,
		slider
	},
	mounted() {
		this.slicePostLists();
	}
}