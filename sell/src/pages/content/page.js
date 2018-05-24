import VueMarkdown from 'vue-markdown'
import eleUI from '../../posts/2017-02-05-eleUI.md'
import CSSmszj1 from '../../posts/2017-10-25-CSS-mianshi-zongjie-1.md'
import HTMLmszj from '../../posts/2017-10-25-HTML-mianshi-zongjie.md'
import firstBlog from '../../posts/2017-10-25-My-First-Blog.md'
import CSSmszj2 from '../../posts/2017-10-26-CSS-mianshi-zongjie-2.md'
import CSSmszj from '../../posts/2017-10-27-CSS-mianshi-zongjie.md'
import JSzj from '../../posts/2017-10-27-js-zongjie.md'
import JSzj2 from '../../posts/2017-10-28-js-zongjie.md'
import JSzj3 from '../../posts/2017-10-29-js-zongjie.md'
import Ajaxzj from '../../posts/2017-10-29-ajax-zongjie.md'
import MTms from '../../posts/2017-10-29-meituan-mianshi.md'
import TTms from '../../posts/2017-10-30-toutiao-mianshi.md'
import JSjl from '../../posts/2017-10-31-js-jieliu.md'
import CDN from '../../posts/2017-11-01-wangluo-cdn.md'
import JSthis from '../../posts/2017-11-02-js-this.md'
import Render from '../../posts/2017-11-03-xuanran-yuanli.md'
import ES61 from '../../posts/2017-11-04-es6-1.md'
import ES62 from '../../posts/2017-11-05-es6-2.md'
import ES631 from '../../posts/2018-02-10-es6-3-1.md'
import ES632 from '../../posts/2018-02-11-es6-3-2.md'
import Coockie from '../../posts/2017-11-07-cookie-session.md'
import XNyh from '../../posts/2017-11-08-xingneng-youhua.md'
import Sort from '../../posts/2017-11-09-sort.md'
import FBdy from '../../posts/2017-11-10-subscribe-publish.md'
import Inherit from '../../posts/2017-11-11-inherit.md'
import Hyny from '../../posts/2018-01-01-suibi.md'
import hljs from 'highlight.js'
import navheader from '../../components/navHeader/page.vue'
import introheader from '../../components/introHeader/page.vue'
import contentheader from '../../components/contentHeader/page.vue'
import indexfooter from '../../components/footer/page.vue'
import { postLists } from '../../../config/data.js'

export default{
    data() {
        return {
            msg: '',
            postLists,
            headerInfo: '',
            contentLists: {
                eleUI,
                CSSmszj1,
                HTMLmszj,
                firstBlog,
                CSSmszj2,
                CSSmszj,
                JSzj,
                JSzj2,
                JSzj3,
                Ajaxzj,
                MTms,
                TTms,
                JSjl,
                CDN,
                JSthis,
                Render,
                ES61,
                ES62,
                ES631,
                ES632,
                Coockie,
                XNyh,
                Sort,
                FBdy,
                Inherit,
                Hyny
            }
        }
    },
    methods: {
        useHljs() {
            setTimeout(function() {
                $('pre code').each(function(i, block) {
                    console.log(block);
                    hljs.highlightBlock(block);
                });
            },50)
        },
        getHeaderinfo(url) {
            let _this = this;
            _this.postLists.forEach((item, index) => {
                if(item.url == url){
                    _this.headerInfo = item;
                    return;
                }
            })
        }
    },
    components: {
        VueMarkdown,
        navheader,
        introheader,
        indexfooter,
        contentheader
    },
    mounted(){
        if(this.$route.query.ctitem){
            this.msg = this.contentLists[this.$route.query.ctitem];
        }
        this.getHeaderinfo(this.$route.query.ctitem);
        this.useHljs();
    }
}