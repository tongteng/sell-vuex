import navheader from '../../components/navHeader/page.vue'
import introheader from '../../components/introHeader/page.vue'
import indexfooter from '../../components/footer/page.vue'
import { tagLists, postLists } from '../../../config/data.js'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default{
    data() {
        return {
            tagLists,
            postLists,
            tagSelect: {
                "记录生活": []
            },
            title: {
                title: "Edit",
                subtitle: "Just Write It"
			},
			sqldb: '',
			sqlLen: '',
			maxId: '',
			modId: '',
			type: '',
			param: {
				blogTitle: '',
				blogSubtitle: '',
				date: '',
				author: 'HandSomeTT',
				value: '',
				tags: [],
			}
        }
    },
    methods: {
		save() {
			this.openSql();
			if(this.type == 'add') {
				this.insertSql(this.maxId, this.param);
			}else {
				this.maxId = +this.$route.query.id;
				this.modifiedSql(this.maxId, this.param);
			}
		},
		edit() {

			// this.value = 
		},
		openSql() {
			var db = openDatabase('blog', '1.0', 'blog content', 2 * 1024 * 1024);
			db.transaction(function(tx) {
				tx.executeSql('create table if not exists myblog (id unique,title,subtitle, date,tags,content)');
			})
			this.sqldb = db;
		},
		insertSql(id,param) {
			var db = this.sqldb;
			var _this = this;
			_this.selectAllSql();			
			var date = _this.setDate();
			var insertSqlText = 'insert into myblog (id,title,subtitle,date,tags,content) values (?,?,?,?,?,?)';
			db.transaction(function(tx) {
				if(_this.type == 'add') {
					console.log(date)
					tx.executeSql(insertSqlText, [_this.maxId,param.blogTitle,param.blogSubtitle,date,param.tags,param.value], function(tx, result) {
						_this.type = 'edit';
						console.log(result);
					})
				}
			})	
		},
		modifiedSql(id,param) {
			var db = this.sqldb;
			var _this = this;
			var date = _this.setDate();			
			var modifiedSqlText = 'update myblog set title = ?, subtitle = ?, date = ?, tags = ?, content = ? where id = ?';
			db.transaction(function(tx) {
				tx.executeSql(modifiedSqlText, [param.blogTitle, param.blogSubtitle, date, param.tags, param.value, id], function (tx, result) {
					console.log(result);
					console.log('修改成功')
				})
			})
		},
		selectSql(id) {
			var db = this.sqldb;
			console.log('...')
			var _this = this;
			var selectSqlText = 'select * from myblog where id = ?';
			db.transaction(function(tx) {
				tx.executeSql(selectSqlText, [id], function(tx, result) {
					var len = result.rows.length;
					_this.param.blogTitle = result.rows[0].title;
					_this.param.blogSubtitle = result.rows[0].subtitle;
					_this.param.tags = result.rows[0].tags.split(',');
					_this.param.value = result.rows[0].content;
					// // return result.rows[0];
					// if(len) {
					// 	param.value = result.rows[0].content;
					// }else {
					// 	param.value = '';
					// }
				})
			})
		},
		selectAllSql() {
			var db = this.sqldb;
			var _this = this;
			var selectAllSqlText = 'select * from myblog';
			db.transaction(function(tx) {
				tx.executeSql(selectAllSqlText, [], function(tx, result) {
					var len  = result.rows.length;
					console.log(len);
					if(len) {
						_this.maxId = result.rows[len - 1].id + 1;
					}else {
						_this.maxId = 1;
					}
					console.log(result);
				})
			})
		},
		deleteSql(id) {
			var db = this.sqldb;
			var _this = this;
			var deleteSqlText = 'delete from myblog where id = ?';
			db.transaction(function(tx) {
				tx.executeSql(deleteSqlText, [id], function(tx, result){
					console.log('删除成功')
				})
			})
		},
		deleteAllSql() {
			var db = this.sqldb;
			var _this = this;
			var deleteAllSqlText = 'delete from myblog';
			db.transaction(function(tx) {
				tx.executeSql(deleteAllSqlText, [], function(tx, result){
					console.log('全部删除成功');
				})
			})
		},
		setDate() {
			var date = new Date();
			return 'Posted by HandSomeTT on ' + this.setMonth(date.getMonth()) + ' ' + date.getDate() + ',' + date.getFullYear();
		},
		setMonth(month) {
			switch(month) {
				case 0: 
					return 'January';
				case 1: 
					return 'February';
				case 2:
					return 'March';
				case 3:
					return 'April';
				case 4:
					return 'May';
				case 5:
					return 'June';
				case 6:
					return 'July';
				case 7:
					return 'August';
				case 8:
					return 'September';
				case 9:
					return 'October';
				case 10:
					return 'November';
				case 11:
					return 'December';
			}
		},
		resetForm() {
			if(this.type == 'edit'){
				this.selectSql(+this.$route.query.id);
			}
		}
    },
    components: {
        navheader,
        introheader,
		indexfooter,
		mavonEditor
	},
	created() {
		this.type = this.$route.query.type;
		this.openSql();		
		this.resetForm();
		// this.insertSql();
		// this.mod = 2;
		// this.maxId = 1;		
		// this.selectSql(1);
		// this.deleteAllSql();
		// this.selectAllSql();		
		// this.selectSql();
	}
}