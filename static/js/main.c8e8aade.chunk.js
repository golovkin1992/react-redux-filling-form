(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),i=a.n(l),s=a(12),o=a(3),c=a(4),u=a(6),m=a(5),d=a(7),p=a(19),b=a.n(p),f=(a(30),function(e){var t=e.replace(/\D/g,"").slice(0,8);return t.length>=5?"".concat(t.slice(0,2)).concat(".").concat(t.slice(2,4)).concat(".").concat(t.slice(4)):t.length>=3?"".concat(t.slice(0,2)).concat(".").concat(t.slice(2)):t}),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).getValue=function(e){var t=e.target.value;return a.props.isDate?f(t):t},a.handleChange=function(e){var t=a.props;(0,t.onChangeField)(t.name,a.getValue(e))},a.handleBlur=function(e){var t=e.target.value,r=a.props;(0,r.onValidateField)(r.name,t)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.value,r=e.error,l=e.name,i=e.isDisabled;return n.a.createElement("label",{htmlFor:l,className:"field"},n.a.createElement("input",{type:"text",placeholder:"\xa0",className:"field__text-block ".concat(""===r?"valid_input":"invalid_input"),id:l,value:a,onChange:this.handleChange,onBlur:this.handleBlur,autoComplete:"off",disabled:i}),n.a.createElement("span",{className:"field__label ".concat(""===r?"valid":"invalid")},t),n.a.createElement("p",{className:"field__error"},r))}}]),t}(r.PureComponent),h=(a(31),[{title:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",fields:[{title:"\u0422\u0440\u0435\u043a-\u043d\u043e\u043c\u0435\u0440*",name:"trackNum"}]},{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u0435",fields:[{title:"\u0424\u0418\u041e*",name:"fio"},{title:"\u0410\u0434\u0440\u0435\u0441*",name:"address"}]},{title:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f",className:"group_pass",fields:[{title:"\u0421\u0435\u0440\u0438\u044f \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430*",name:"passSeries"},{title:"\u041d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430*",name:"passNumber"},{title:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438*",name:"passIssueDate",isDate:!0},{title:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d*",name:"passIssuingAuthority"},{title:"\u041a\u043e\u0434 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f*",name:"passUnitCode"}]}]),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),(0,a.props.onSubmit)()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.formData,a=e.onValidateField,r=e.onChangeField,l=e.isSubmit,i=e.isDisabled,s=e.onReset;return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"container"},h.map(function(e){return n.a.createElement("div",{className:b()("group",e.className),key:e.title},n.a.createElement("p",{className:"group__label"},e.title),e.fields.map(function(e){return n.a.createElement(v,{key:e.name,name:e.name,label:e.title,value:t[e.name].value,error:t[e.name].error,onValidateField:a,onChangeField:r,isDisabled:i,isDate:e.isDate})}))}),n.a.createElement("button",{className:"btn btn_run",type:"submit",disabled:l},"\u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),n.a.createElement("button",{className:"btn btn_reset",type:"button",onClick:s},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c")))}}]),t}(r.PureComponent),F=(a(32),function(e){var t=e.isVisible,a=e.data;return t?n.a.createElement("div",{className:"container-blank"},h.map(function(e){return e.fields.map(function(e){return n.a.createElement("p",{className:"container-blank__label"},e.title,": ",a[e.name].value)})})):n.a.createElement("p",{className:"hint"},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443!")}),g=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.loadForm)()}},{key:"render",value:function(){var e=this.props,t=e.formData,a=e.validateField,l=e.changeField,i=e.hasErrors,s=e.clearForm,o=e.submitForm,c=e.isDisabledForm,u=e.isVisibleBlank;return n.a.createElement(r.Fragment,null,n.a.createElement(O,{formData:t,onChangeField:l,onValidateField:a,onReset:s,isSubmit:i,isDisabled:c,onSubmit:o}),n.a.createElement(F,{data:t,isVisible:u}))}}]),t}(r.PureComponent),y=Object(s.b)(function(e){return{formData:e.fields,hasErrors:(t=e.fields,!(Object.keys(t).every(function(e){return""===t[e].error})&&!Object.keys(t).some(function(e){return""===t[e].value}))),isVisibleBlank:e.isVisibleBlank,isDisabledForm:e.isDisabledForm};var t},{changeField:function(e,t){return{type:"CHANGE_FIELD",payload:{name:e,value:t}}},validateField:function(e,t){return{type:"VALIDATE_FIELD",payload:{name:e,value:t}}},loadForm:function(){return{type:"LOAD_FORM"}},clearForm:function(){return{type:"CLEAR_FORM"}},submitForm:function(){return{type:"SUBMIT_FORM"}}})(g),D=a(9),E=a(20),j=a(10),N=a(8),k={trackNum:{pattern:/^[A-Z]{2}\d{9}[A-Z]{2}$/,error:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0440\u0435\u043a-\u043d\u043e\u043c\u0435\u0440 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 RU123456789CN"},fio:{pattern:/^[\u0410-\u042f\u0401][\u0430-\u044f\u0451]+ [\u0410-\u042f\u0401][\u0430-\u044f\u0451]+ [\u0410-\u042f\u0401][\u0430-\u044f\u0451]+$/,error:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f \u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b \u0441 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0431\u0443\u043a\u0432\u044b"},address:{pattern:/^[?!,.\u0430-\u044f\u0410-\u042f\u0451\u04010-9\s]{1,100}$/,error:"\u0422\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b \u0438 \u0446\u0438\u0444\u0440\u044b! \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430\u044f \u0434\u043b\u0438\u043d\u0430 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!"},passSeries:{pattern:/^\d{4}$/,error:"\u0421\u0435\u0440\u0438\u044f \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 4 \u0446\u0438\u0444\u0440!"},passNumber:{pattern:/^\d{6}$/,error:"\u041d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 6 \u0446\u0438\u0444\u0440!"},passIssueDate:{pattern:/(0[1-9]|[12][0-9]|3[01])[- .](0[1-9]|1[012])[- .](19|20)\d\d/,error:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433"},passIssuingAuthority:{pattern:/^[?!,.\u0430-\u044f\u0410-\u042f\u0451\u04010-9\s]{1,100}$/,error:"\u0422\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b \u0438 \u0446\u0438\u0444\u0440\u044b!"},passUnitCode:{pattern:/^\d{3}-\d{3}$/,error:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 111-222"}},_=function(e,t){var a=k[t],r=a.pattern,n=a.error;return""===e.trim()?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!":r.test(e)?"":n},C={fields:{trackNum:{value:"",error:""},fio:{value:"",error:""},address:{value:"",error:""},passSeries:{value:"",error:""},passNumber:{value:"",error:""},passIssueDate:{value:"",error:""},passIssuingAuthority:{value:"",error:""},passUnitCode:{value:"",error:""}},isVisibleBlank:!1,isDisabledForm:!1},S=Object(D.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"VALIDATE_FIELD":var n=r.name,l=r.value,i=e.fields;return Object(N.a)({},e,{fields:Object(N.a)({},i,Object(j.a)({},n,{value:l,error:_(l,n)}))});case"CHANGE_FIELD":var s=r.name,o=r.value,c=e.fields;return Object(N.a)({},e,{fields:Object(N.a)({},c,Object(j.a)({},s,{value:o,error:""}))});case"LOAD_FORM":var u=localStorage.getItem("blank");return u?JSON.parse(u):e;case"CLEAR_FORM":return localStorage.setItem("blank",JSON.stringify(C)),C;case"SUBMIT_FORM":return localStorage.setItem("blank",JSON.stringify(e)),Object(N.a)({},e,{isDisabledForm:!0,isVisibleBlank:!0});default:return e}},Object(E.composeWithDevTools)());i.a.render(n.a.createElement(s.a,{store:S},n.a.createElement(y,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c8e8aade.chunk.js.map