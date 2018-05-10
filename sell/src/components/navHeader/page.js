export default {
	data() {
		return {
		}
	}, 
	methods: {
		open() {
			$("#ttblog_navbar").attr('class', ' in');
			$(".navbar-collapse").css({
				"height": "auto"
			})
		},
		close() {
			$("#ttblog_navbar").attr('class', " ");
			setTimeout(function() {
				if($("#ttblog_navbar").attr('class').indexOf("in") < 0) {
					$(".navbar-collapse").css({
						"height": "0px"
					})
				}
			}, 400)
		},
		toUrl(target, event) {
			event.preventDefault(); 
		},
		showMenuItems() {
			if($("#ttblog_navbar").attr('class').indexOf("in") > 0) {
				this.close();
			}else {
				this.open();
			}
		}
	}
}