import navheader from '../../components/navHeader/page.vue'
import introheader from '../../components/introHeader/page.vue'
import indexfooter from '../../components/footer/page.vue'
import { tagLists, postLists } from '../../../config/data.js'
export default{
    data() {
        return {
            tagLists,
            postLists,
            tagSelect: {
                "记录生活": []
            },
            title: {
                title: "TAGS",
                subtitle: "keep hungry keep foolish"
            }
        }
    },
    methods: {
        toTag(selector) {
            var tag = this.$el.querySelector(selector);
            var docTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            document.documentElement.scrollTop = tag.getBoundingClientRect().top + docTop;
            document.body.scrollTop = tag.getBoundingClientRect().top + docTop;
        },
        classifyTag() {
            let _this = this;
            _this.tagLists.forEach(function (tagitem, tagindex) {
                _this.postLists.forEach(function (postitem, postindex) {
                    if($.inArray(tagitem.tag, postitem.tags) != -1){
                        _this.tagSelect[tagitem.tag] = _this.tagSelect[tagitem.tag] ? _this.tagSelect[tagitem.tag] : [];
                        _this.tagSelect[tagitem.tag].push({"title": postitem.title, "subtitle": postitem.subtitle, "url": postitem.url});
                    }
                })
            })
        }
    },
    components: {
        navheader,
        introheader,
        indexfooter
    },
    mounted() {
        this.classifyTag();
        setTimeout(() => {
            if(this.$route.query.tag) {
                this.toTag('#' + this.$route.query.tag);
            }
        }, 100);
    }
}