(self["webpackChunkcadastro_clientes_vue"]=self["webpackChunkcadastro_clientes_vue"]||[]).push([[130],{3920:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer w-100"},[e("b-container",[e("p",{staticClass:"text-center small mb-0 py-1 text-white"},[t._v(" © "+t._s(t.currentYear)+" - Todos direitos reservados ")])])],1)},r=[],s=n(4145),i={name:"FooterComponent",components:{BContainer:s.h},computed:{currentYear(){return(new Date).getFullYear()}}},o=i,u=n(1001),c=(0,u.Z)(o,a,r,!1,null,"8d6a8ee0",null),l=c.exports},5869:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("header",{class:`header ${t.defaultCssClass}`},[e("b-container",{staticClass:"py-xl-5 py-lg-4 py-md-3 py-sm-2"},[e("h1",{staticClass:"py-5"},[t._v(t._s(t.defaultMsg))])])],1)},r=[],s=n(4145),i={name:"HeaderComponent",components:{BContainer:s.h},props:{msg:{type:String,default:""},cssClassName:{type:String,default:""}},computed:{defaultCssClass(){return this.cssClassName?this.cssClassName:"bg-primary text-black"},defaultMsg(){return this.msg?this.msg:"Cadastro Escriba"}}},o=i,u=n(1001),c=(0,u.Z)(o,a,r,!1,null,null,null),l=c.exports},1799:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("main",[e("b-container",{staticClass:"py-3 py-md-5"},[t._t("default")],2)],1)},r=[],s=n(4145),i={name:"MainComponent",components:{BContainer:s.h}},o=i,u=n(1001),c=(0,u.Z)(o,a,r,!1,null,null,null),l=c.exports},5595:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return M}});var a=function(){var t=this,e=t._self._c;return e("div",[e("header-component"),e("main-component",[e("bread-crump",{attrs:{title:t.txtTitle}}),e("div",{staticClass:"d-flex justify-content-sm-between flex-column flex-sm-row"},[e("h2",[t._v(t._s(t.txtTitle))])]),e("b-row",{staticClass:"justify-content-center pt-5"},[e("b-col",{attrs:{md:"8"}},[e("b-form",{on:{submit:t.onSubmit}},[t.loadingDataContact?e("div",{staticClass:"loading-data d-flex justify-content-center pt-5"},[e("b-spinner",{staticClass:"mt-5",staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Loading",variant:"primary"}})],1):t._e(),e("b-form-group",{attrs:{id:"input-group-1",label:"Nome:","label-for":"input-1"}},[e("b-form-input",{ref:"nameInput",attrs:{id:"input-1",type:"text",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("b-form-group",{attrs:{id:"input-group-1",label:"CPF:","label-for":"input-1"}},[e("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:["###.###.###-##"],expression:"['###.###.###-##']"}],ref:"cpfInput",attrs:{id:"input-1",maxlength:"14",type:"text",required:""},on:{input:t.validateCPF},model:{value:t.form.cpf,callback:function(e){t.$set(t.form,"cpf",e)},expression:"form.cpf"}})],1),t.form.cpf&&!t.isValidCPF?e("p",{staticClass:"text-danger"},[t._v("CPF inválido")]):t._e(),e("b-form-group",{attrs:{id:"input-group-1",label:"Data de nascimento:","label-for":"input-1"}},[e("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:["##/##/####"],expression:"['##/##/####']"}],ref:"dataNascimentoInput",attrs:{id:"input-1",type:"text",required:""},model:{value:t.form.dataNascimento,callback:function(e){t.$set(t.form,"dataNascimento",e)},expression:"form.dataNascimento"}})],1),e("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"warning",disabled:t.saveLoading}},[t.saveLoading?[e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" Salvando... ")]:[t._v(" "+t._s(t.txtBtnSubmit)+" ")]],2)],1)],1)],1),e("b-modal",{attrs:{hideHeaderClose:"",noCloseOnEsc:""},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.fillAgain(!t.errorSaving)}}},[t._v(" Sim ")]),e("b-button",{attrs:{variant:"success",to:"/"}},[t._v(" Não, ir para tela inicial ")])]},proxy:!0}]),model:{value:t.modalFinished,callback:function(e){t.modalFinished=e},expression:"modalFinished"}},[e("b-alert",{staticClass:"mb-0",attrs:{variant:t.errorSaving?"danger":"success",show:""}},[e("p",{staticClass:"mb-0"},[e("span",{domProps:{innerHTML:t._s(t.errorSaving?t.txtModalFinishedError:t.txtModalFinishedSuccess)}})])])],1)],1),e("footer-component")],1)},r=[],s=n(3280),i=n(408),o=n(3458),u=n(2409),c=n(691),l=n(2861),d=n(8641),m=n(5311),f=n(9918),p=n(6297),h=function(){var t=this,e=t._self._c;return e("b-breadcrumb",{staticClass:"pb-2"},[e("b-breadcrumb-item",{attrs:{to:"/"}},[t._v("Home")]),e("b-breadcrumb-item",{attrs:{active:""}},[t._v(t._s(t.title))])],1)},v=[],g=n(4525),b={name:"BreadCrump",components:{BBreadcrumb:g.P},props:{title:{type:String,required:!0}}},C=b,y=n(1001),x=(0,y.Z)(C,h,v,!1,null,null,null),k=x.exports,_=n(3920),w=n(5869),F=n(1799);function S(){return{name:"",cpf:"",dataNascimento:""}}var N={name:"FormView",components:{BAlert:u.F,BButton:c.T,BCol:l.l,BForm:d.e,BModal:m.N,BRow:f.T,BSpinner:p.X,BreadCrump:k,FooterComponent:_.Z,HeaderComponent:w.Z,MainComponent:F.Z},directives:{mask:o.mask},data(){return{errorSaving:!1,form:S(),loadingDataContact:!1,modalFinished:!1,saveLoading:!1,isValidCPF:!1}},computed:{...(0,i.Se)(["detailContact"]),...(0,i.rn)(["contacts"]),newRegister(){return"new-register"===this.$route.name},txtTitle(){return this.newRegister?"Novo cadastro":"Editar cadastro"},txtBtnSubmit(){return this.newRegister?"Cadastrar":"Alterar"},txtModalFinishedError(){return this.newRegister?"Houve um erro ao salvar o contato.<br />Deseja adicionar novamente o contato?":"Houve um erro ao alterar o contato.<br />Deseja tentar alterar novamente o contato?"},txtModalFinishedSuccess(){return this.newRegister?"Contato adicionado com sucesso.<br />Deseja adicionar um novo contato?":"Contato alterado com sucesso.<br />Deseja continuar na editando este contato?"}},watch:{contacts(){this.getDetailContact(this.$route.params)}},created(){"edit-register"===this.$route.name&&(this.loadingDataContact=!0,0===this.contacts.length?this.getAllContacts():this.getDetailContact(this.$route.params))},methods:{...(0,i.nv)(["getAllContacts"]),clearForm(){this.form=S()},async createNewContact(t){this.errorSaving=!1,this.saveLoading=!0,await s.Z.newContact(t).then().catch((()=>{this.errorSaving=!0})).finally((()=>{this.modalFinished=!0,this.saveLoading=!1}))},async editContact(t){this.errorSaving=!1,this.saveLoading=!0,await s.Z.editContact(this.$route.params.id,t).then().catch((()=>{this.errorSaving=!0})).finally((()=>{this.modalFinished=!0,this.saveLoading=!1}))},fillAgain(t){t&&this.newRegister&&this.clearForm(),this.modalFinished=!1,this.$refs.nameInput.focus()},getDetailContact(t){const e=this.detailContact(parseInt(t.id));Object.assign(this.form,e),this.loadingDataContact=!1},onSubmit(t){t.preventDefault(),this.newRegister?this.createNewContact(this.form):this.editContact(this.form)},showModal(t){this.$bvModal.msgBoxOk(t,{centered:!0,okVariant:"success"})},validateCPF(){const t=this.form.cpf.replace(/\D+/g,"");if(""===t)return void(this.isValidCPF=!1);if(/^(\d)\1{10}$/.test(t))return void(this.isValidCPF=!1);if(11!==t.length)return void(this.isValidCPF=!1);let e,n=0;for(let a=1;a<=9;a++)n+=parseInt(t.substring(a-1,a))*(11-a);if(e=10*n%11,10!==e&&11!==e||(e=0),e===parseInt(t.substring(9,10))){n=0;for(let e=1;e<=10;e++)n+=parseInt(t.substring(e-1,e))*(12-e);e=10*n%11,10!==e&&11!==e||(e=0),e===parseInt(t.substring(10,11))?this.isValidCPF=!0:this.isValidCPF=!1}else this.isValidCPF=!1}}},B=N,P=(0,y.Z)(B,a,r,!1,null,null,null),M=P.exports},3458:function(t){(function(e,n){t.exports=n()})(0,(function(){return function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function a(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var r=n(2),s=n(0),i=n.n(s);e.a=function(t,e){var s=e.value;if((Array.isArray(s)||"string"==typeof s)&&(s={mask:s,tokens:i.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var o=t.getElementsByTagName("input");if(1!==o.length)throw new Error("v-mask directive requires 1 input, found "+o.length);t=o[0]}t.oninput=function(e){if(e.isTrusted){var i=t.selectionEnd,o=t.value[i-1];for(t.value=n.i(r.a)(t.value,s.mask,!0,s.tokens);i<t.value.length&&t.value.charAt(i-1)!==o;)i++;t===document.activeElement&&(t.setSelectionRange(i,i),setTimeout((function(){t.setSelectionRange(i,i)}),0)),t.dispatchEvent(a("input"))}};var u=n.i(r.a)(t.value,s.mask,!0,s.tokens);u!==t.value&&(t.value=u,t.dispatchEvent(a("input")))}},function(t,e,n){"use strict";var a=n(6),r=n(5);e.a=function(t,e){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(e)?n.i(r.a)(a.a,e,i)(t,e,s,i):n.i(a.a)(t,e,s,i)}},function(t,e,n){"use strict";function a(t){t.component(u.a.name,u.a),t.directive("mask",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),s=n.n(r),i=n(1),o=n(7),u=n.n(o);n.d(e,"TheMask",(function(){return u.a})),n.d(e,"mask",(function(){return i.a})),n.d(e,"tokens",(function(){return s.a})),n.d(e,"version",(function(){return c}));var c="0.11.1";e.default=a,"undefined"!=typeof window&&window.Vue&&window.Vue.use(a)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n(0),s=n.n(r),i=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return s.a}}},directives:{mask:a.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=n.i(i.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";function a(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(a,r){for(var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<e.length;){var o=e[i];i++;var u=e[i];if(!(u&&t(a,u,!0,n).length>o.length))return t(a,o,s,n)}return""}}e.a=a},function(t,e,n){"use strict";function a(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments[3];t=t||"",e=e||"";for(var r=0,s=0,i="";r<e.length&&s<t.length;){var o=e[r],u=a[o],c=t[s];u&&!u.escape?(u.pattern.test(c)&&(i+=u.transform?u.transform(c):c,r++),s++):(u&&u.escape&&(r++,o=e[r]),n&&(i+=o),c===o&&s++,r++)}for(var l="";r<e.length&&n;){o=e[r];if(a[o]){l="";break}l+=o,r++}return i+l}e.a=a},function(t,e,n){var a=n(8)(n(4),n(9),null,null);t.exports=a.exports},function(t,e){t.exports=function(t,e,n,a){var r,s=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(r=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),a){var u=o.computed||(o.computed={});Object.keys(a).forEach((function(t){var e=a[t];u[t]=function(){return e}}))}return{esModule:r,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])}))}}]);
//# sourceMappingURL=FormView.764fb7a0.js.map