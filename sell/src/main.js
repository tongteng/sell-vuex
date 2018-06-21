// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import './css/base.less'
import $ from 'jquery'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
import { Message, Input, Checkbox, Button, DatePicker, TimePicker, CheckboxGroup, Table, TableColumn, Pagination, Dialog, Select, Option, Radio, RadioGroup, Row, Col, Form, FormItem, Tooltip, Upload, Popover, Carousel, CarouselItem, Alert, Tabs, TabPane, Tag, Switch, Loading, InputNumber, Menu, Submenu, MenuItem, MenuItemGroup, Card, Steps, Step, Container, Main, Aside, Header, Footer, MessageBox, Badge} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(CheckboxGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Option);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tooltip);
Vue.use(Upload);
Vue.use(Popover);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Alert);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Switch);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Card);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Badge);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


// Vue.directive('highlight', (el) => {
//   let blocks = el.querySelectorAll('pre code')
//   blocks.forEach((block) => {
//       hljs.highlightBlock(block)
//   })
// })
