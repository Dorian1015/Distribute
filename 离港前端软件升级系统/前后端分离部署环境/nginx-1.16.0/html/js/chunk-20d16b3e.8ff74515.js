(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20d16b3e"],{"27f7":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("el-row",{directives:[{name:"show",rawName:"v-show",value:0==t.pageSign,expression:"pageSign == 0"}],staticClass:"body"},[n("div",{staticClass:"condition"}),n("div",{staticClass:"subBtn"},[n("el-button",{staticClass:"el-button--success",attrs:{size:"small"},on:{click:t.addCounter}},[t._v("新增柜台信息")])],1),n("el-table",{staticStyle:{height:"800px"},attrs:{border:"",stripe:"",data:t.CounterData,"empty-text":""}},[n("el-table-column",{attrs:{fixed:"",fit:"",align:"center",width:"100",prop:"cId",label:"柜台号"}}),n("el-table-column",{attrs:{fixed:"",fit:"",align:"center",prop:"name",label:"柜台名称"}}),n("el-table-column",{attrs:{fixed:"",fit:"",align:"center",prop:"cIp",label:"ip地址"}}),n("el-table-column",{attrs:{fixed:"",fit:"",align:"center",width:"300",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"success",size:"small"},on:{click:function(n){return t.editCounter(e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return t.deleteCounter(e.row.id)}}},[t._v("删除")]),n("el-button",{attrs:{type:"success",size:"small"},on:{click:function(n){return t.editParams(e.row.cId)}}},[t._v("参数修改")])]}}])})],1),n("el-dialog",{attrs:{title:"参数修改",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{ref:t.configForm,attrs:{model:t.configForm}},[n("el-form-item",{attrs:{label:"参数",prop:"versionId"}},[n("el-input",{attrs:{type:"textarea",rows:"27"},model:{value:t.configForm.content,callback:function(e){t.$set(t.configForm,"content",e)},expression:"configForm.content"}})],1),n("el-button",{staticClass:"editBtn",attrs:{type:"primary"},on:{click:t.submitConfig}},[t._v("保 存")])],1)],1)],1),n("el-row",{directives:[{name:"show",rawName:"v-show",value:1==t.pageSign,expression:"pageSign == 1"}]},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"pageEdit"},[n("el-button",{attrs:{circle:""},on:{click:t.backBtn}},[n("i",{staticClass:"el-icon-back",staticStyle:{cursor:"pointer"}})]),n("el-form",{ref:t.CounterForm,attrs:{model:t.CounterForm}},[n("el-form-item",{attrs:{label:"柜台号",prop:"cId"}},[n("el-input",{attrs:{disabled:t.isDisabled},model:{value:t.CounterForm.cId,callback:function(e){t.$set(t.CounterForm,"cId",e)},expression:"CounterForm.cId"}})],1),n("el-form-item",{attrs:{label:"柜台名称",prop:"name"}},[n("el-input",{model:{value:t.CounterForm.name,callback:function(e){t.$set(t.CounterForm,"name",e)},expression:"CounterForm.name"}})],1),n("el-form-item",{attrs:{label:"ip地址",prop:"cIp"}},[n("el-input",{model:{value:t.CounterForm.cIp,callback:function(e){t.$set(t.CounterForm,"cIp",e)},expression:"CounterForm.cIp"}})],1),n("el-button",{staticClass:"editBtn",attrs:{type:"primary"},on:{click:t.save}},[t._v("保 存")])],1)],1)])],1)],1)},i=[],a=(n("b0c0"),n("bc3a")),s=n.n(a),r={name:"Counter",data:function(){return{CounterForm:{id:"",cId:"",name:"",cIp:""},queryForm:{},CounterData:[],configForm:{},isDisabled:0,pageSign:0,addOrEditSign:0,currentPage:1,pageSize:10,total:0,hostName:this.$store.state.host,dialogVisible:!1}},created:function(){this.queryCounter()},methods:{queryCounter:function(){var t=this;s.a.get(this.hostName+"counter",{},{headers:{"content-type":"application/json",Authorization:this.$store.state.Authorization}}).then((function(e){t.CounterData=e.data.data})).catch((function(t){console.log(t)}))},addCounter:function(){this.pageSign=1,this.addOrEditSign=0,this.isDisabled=0;var t={id:"",cId:"",name:"",cIp:""};this.CounterForm=t},editCounter:function(t){this.pageSign=1,this.addOrEditSign=1,this.isDisabled=1,this.CounterForm=t},deleteCounter:function(t){var e=this,n=this;this.$confirm("是否删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s.a.delete(e.hostName+"counter/"+t,{},{headers:{"content-type":"application/json",Authorization:e.$store.state.Authorization}}).then((function(){n.$message({message:"删除成功",type:"success"}),n.queryCounter()})).catch((function(t){console.log(t)}))}))},save:function(){var t=this;1==this.pageSign&&(0==this.addOrEditSign?s.a.post(this.hostName+"counter",{cId:t.CounterForm.cId,name:t.CounterForm.name,cIp:t.CounterForm.cIp},{headers:{"content-type":"application/json",Authorization:this.$store.state.Authorization}}).then((function(){t.$message({message:"新增成功",type:"success"}),t.queryCounter()})).catch((function(t){console.log(t)})):1==this.addOrEditSign&&s.a.put(this.hostName+"counter",{id:t.CounterForm.id,cId:t.CounterForm.cId,name:t.CounterForm.name,cIp:t.CounterForm.cIp},{headers:{"content-type":"application/json",Authorization:this.$store.state.Authorization}}).then((function(){t.$message({message:"修改成功",type:"success"}),t.queryCounter()})).catch((function(t){console.log(t)}))),this.backBtn()},backBtn:function(){this.pageSign=0,this.queryCounter()},editParams:function(t){this.dialogVisible=1;var e=this;s.a.get(this.hostName+"config",{cId:t},{headers:{"content-type":"application/json",Authorization:this.$store.state.Authorization}}).then((function(n){var o={cId:t,content:n.data.data};e.configForm=o})).catch((function(t){console.log(t)}))},submitConfig:function(){var t=this;s.a.put(this.hostName+"config/"+this.configForm.cId,{content:this.configForm.content},{headers:{"content-type":"application/json",Authorization:this.$store.state.Authorization}}).then((function(){t.$message({message:"参数修改成功",type:"success"}),t.dialogVisible=!1,t.queryCounter()})).catch((function(t){console.log(t)}))}}},c=r,u=(n("d43d"),n("2877")),l=Object(u["a"])(c,o,i,!1,null,"5c829c12",null);e["default"]=l.exports},9192:function(t,e,n){},b0c0:function(t,e,n){var o=n("83ab"),i=n("9bf2").f,a=Function.prototype,s=a.toString,r=/^\s*function ([^ (]*)/,c="name";o&&!(c in a)&&i(a,c,{configurable:!0,get:function(){try{return s.call(this).match(r)[1]}catch(t){return""}}})},d43d:function(t,e,n){"use strict";var o=n("9192"),i=n.n(o);i.a}}]);
//# sourceMappingURL=chunk-20d16b3e.8ff74515.js.map