webpackJsonp([9],{dMBk:function(e,t){e.exports={title:"title",primary:"primary","bg-primary":"bg-primary",green:"green",yellow:"yellow","light-yellow":"light-yellow","placeholder-text":"placeholder-text","bg-yellow":"bg-yellow",red:"red","bg-red":"bg-red",right:"right",center:"center","space-between":"space-between",container:"container","phone-reset":"phone-reset","check-input":"check-input",button:"button","media-wrap":"media-wrap"}},l3n3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),i=n.n(o),c=n("iO/v"),s=n("NYxO"),r={name:"phoneReset",components:{selectInput:c.o,modal:c.l,iconInput:c.i,iconButton:c.h,countrySelect:c.f,checkbox:c.e},data:function(){return{hasHeader:!0,phone:"",check:"",isActive:!1,isErr:!1,errMsg:"",isOk:!1,checkCodeTxt:this.$t("login.sendCheckCode"),second:60,areacode:86,loading:!1,isCheckErr:!1}},computed:i()({visiable:function(e){return"phoneReset"===e.path}},Object(s.b)({countryList:"login/countryList",path:"route/name",showCheckBoxCode:"login/showCheckBoxCode",phoneSendTime:"login/phoneSendTime",checkBoxErr:"login/checkBoxErr",phoneImgCode:"login/imgCode"})),beforeDestroy:function(){this.timer&&clearInterval(this.timer)},methods:{selectChange:function(e){this.phone=e,this.checkedPhone(e),this.change()},checkedPhone:function(e){var t=86===this.areacode?/^1[0-9]{10}$/:/^\d{5,20}$/,n=e.match(t);this.errMsg=this.$t("login.errEnterPhoneMsg"),this.isErr=!n&&!!e,this.isActive=!!n&&60===this.second},onareachange:function(e){this.areacode=e.callingCode,this.checkedPhone(this.phone)},cancleHandler:function(){this.$router.push("/login")},hideCheckPhoneCodeHandler:function(){this.$store.commit("login/HIDE_CHECK_BOX_CODE")},resetImg:function(){this.$store.dispatch("login/getImgCode")},sendCode:function(e){this.sendPhoneCode({phone:this.phone,areaCode:this.areacode,imgCode:e,captchaKey:this.phoneImgCode.captchaKey,type:2})},sendPhoneCode:function(e){var t=this;this.$store.dispatch("login/phoneCode",e).then(function(){t.isActive=!1;t.timer=setInterval(function e(){return t.second?(t.checkCodeTxt=t.$t("login.sendRepeat")+"("+t.second+"s)",t.second=t.second-1):(t.second=60,t.checkedPhone(t.phone),t.checkCodeTxt=t.$t("login.sendCheckCode"),t.timer&&clearInterval(t.timer)),e}(),1e3)}).catch(function(e){switch(Number(e.code)){case 306:t.isErr=!0,t.$store.commit("login/HIDE_CHECK_BOX_CODE"),t.errMsg=t.$t("common.frequentRequest");break;case 2057:t.isErr=!0,t.errMsg=t.$t("common.phoneNotRegister")}})},send:function(){if(!this.phone||!this.isActive)return!1;if(60===this.second){if(this.phoneSendTime>2)return this.$store.commit("login/SHOW_CHECK_PHONE_CODE");this.sendPhoneCode({phone:this.phone,areaCode:this.areacode,type:2})}},change:function(){this.isOk=!!this.check&&!!this.phone&&!this.isErr&&4===this.check.length},checked:function(){var e=this;4!==this.check.length||this.isErr||(this.loading=!1,this.isCheckErr=!1,this.$store.dispatch("login/phoneReset",{phone:this.phone,phoneCode:this.check,type:this.$isPc?1:2,areaCode:this.areacode}).then(function(t){!e.isCheckErr&&e.$router.push("/login/reset?code="+t.data.code)}).catch(function(t){switch(Number(t.code)){case 3521:e.isErr=!0,e.errMsg=e.$t("common.phoneNotRegister");break;case 2003:e.isCheckErr=!0}}).finally(function(){e.loading=!1}))}},mounted:function(){this.$store.dispatch("login/getCountriesList")}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("modal",{attrs:{visiable:e.visiable,hasHeader:e.hasHeader,noMask:Boolean(!0)},on:{cancleHandler:e.cancleHandler}},[n("div",{staticClass:"phone-reset"},[n("div",{staticClass:"title"},[e._v(e._s(e.$t("login.phoneReset")))]),e._v(" "),n("selectInput",{attrs:{countryList:e.countryList,isErr:e.isErr,errMsg:e.errMsg},on:{oninputChange:e.selectChange,onareachange:e.onareachange}}),e._v(" "),n("iconInput",{staticClass:"check-input",attrs:{placeholder:e.$t("login.check"),isErr:e.isCheckErr,errMsg:e.$t("login.checkErrMsg"),isActive:e.isActive,maxlength:Number(4)},on:{"on-change":e.change},model:{value:e.check,callback:function(t){e.check=t},expression:"check"}},[n("span",{staticClass:"sendCheckCode",attrs:{slot:"suffix"},on:{click:e.send},slot:"suffix"},[e._v(e._s(e.checkCodeTxt))])]),e._v(" "),n("iconButton",{staticClass:"button",attrs:{isShow:e.isOk,loading:e.loading},on:{click:e.checked}},[e._v("\n            "+e._s(e.$t("login.next"))+"\n        ")])],1)]),e._v(" "),n("checkbox",{attrs:{isErr:e.checkBoxErr,url:e.phoneImgCode.url,visiable:e.showCheckBoxCode},on:{cancleHandler:e.hideCheckPhoneCodeHandler,checkCodeDone:e.sendCode,resetImg:e.resetImg}})],1)},staticRenderFns:[]};var a=n("VU/8")(r,h,!1,function(e){n("dMBk")},"data-v-4265b0d0",null);t.default=a.exports}});