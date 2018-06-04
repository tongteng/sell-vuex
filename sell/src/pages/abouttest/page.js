import './js/jquery-2.2.3.min.js'
import './js/jquery.tools.min.js'
import './js/jquery.mobile.custom.min.js'
import './js/jquery.cm-overlay.js'
import './js/move-top.js'
import './js/easing.js'
import './js/SmoothScroll.min.js'
import './js/bootstrap.js'
import navheader from '../../components/navHeader/page.vue'
import indexfooter from '../../components/footer/page.vue'
export default{
    data() {
        return {

		}
    },
    methods: {
        
	},
	components: {
		navheader,
		indexfooter
	},
	mounted() {
		(function ($) {
			// Menu Functions
			$(document).ready(function () {
				$('#menuToggle').click(function (e) {
					var $parent = $(this).parent('.menu');
					$parent.toggleClass("open");
					var navState = $parent.hasClass('open') ? "hide" : "show";
					$(this).attr("title", navState + " navigation");
					// Set the timeout to the animation length in the CSS.
					setTimeout(function () {
						console.log("timeout set");
						$('#menuToggle > span').toggleClass("navClosed").toggleClass("navOpen");
					}, 200);
					e.preventDefault();
				});
			});
		})(jQuery);
		jQuery(document).ready(function ($) {
			$(".scroll").click(function (event) {
				event.preventDefault();

				$('html,body').animate({
					scrollTop: $(this.hash).offset().top
				}, 1000);
			});
		});
		$(document).ready(function () {
			$('.cm-overlay').cmOverlay();
		});
		// $(document).ready(function () {
			/*
			var defaults = {
				containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
			};
			*/

			// $().UItoTop({
			// 	easingType: 'easeOutQuart'
			// });

		// });
	}
}