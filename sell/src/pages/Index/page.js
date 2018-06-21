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
			},
			sqldb: ''
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
		},
		openSql() {
			var db = openDatabase('blog', '1.0', 'blog content', 2 * 1024 * 1024);
			this.sqldb = db;
			db.transaction(function(tx) {
				tx.executeSql('create table if not exists myblog (id unique,title,subtitle, date,tags,content)');
			})
			var _this = this;
			var selectAllSqlText = 'select * from myblog';
			db.transaction(function(tx) {
				tx.executeSql(selectAllSqlText,[],function(tx, result) {
					console.log(result);
					_this.pushBlog(result.rows);
				})
			})
		},
		pushBlog(result) {
			console.log(result);
			for(let item of result){
				item.author = 'HandSomeTT',
				item.url = '',
				item.content = item.content.slice(0, 200) + '...';
				item.tags = item.tags.split(',');
				this.postLists.unshift(item);
			}
			this.slicePostLists();			
		},
		delBlog(id){
			var db = this.sqldb;
			var _this = this;
			var deleteSqlText = 'delete from myblog where id = ?';
			db.transaction(function(tx) {
				tx.executeSql(deleteSqlText, [id], function(tx, result){
					console.log('删除成功')
					window.location.reload()
				})
			})
		}
		// selectAllSql() {
		// 	var db = this.sqldb;
		// 	var _this = this;
		// 	var selectAllSqlText = 'select * from myblog';
		// 	db.transaction(function(tx) {
		// 		tx.executeSql(selectAllSqlText, [], function(tx, result) {
		// 			var len  = result.rows.length;
		// 			// console.log(len);
		// 			// if(len) {
		// 			// 	_this.maxId = result.rows[len - 1].id + 1;
		// 			// }else {
		// 			// 	_this.maxId = 1;
		// 			// }
		// 			console.log(result);
		// 		})
		// 	})
		// }
	},
	components: {
		navheader,
		introheader,
		indexfooter,
		slider
	},
	created() {
		this.openSql();
		// this.selectAllsql();
	}
}