(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{341:function(e,t,o){"use strict";o.r(t);function n(e){return"function"==typeof e}const r=(e,t,o,r,d,f)=>{let c=function(e){return""===String(e).trim()||![!1,0].includes(e)&&!e?"FIELD_IS_EMPTY":""}(t);const m=r.COMMON_VALIDATORS,h=!(!m||!Object.keys(m).length),_=r[e]||r[o.type]||void 0;if("FIELD_IS_EMPTY"!==c){if(h)for(const e in m)!n(m[e])&&console.error(e+" is not a function."),c=m[e](t,o,d),void 0===c&&console.error(e+" return error string if field is invalid, return empty string when success");return n(_)?(c=_(t,o,d),l(c)):(e in r&&console.error(_+" is not a function."),l(c))}return c=f?"Required":"",l(c)};function l(e){return""!==e?[!1,e]:[!0,""]}function d(template,style,script,e,t,o,n,r,l,d){"boolean"!=typeof n&&(l=r,r=n,n=!1);const f="function"==typeof script?script.options:script;let c;if(template&&template.render&&(f.render=template.render,f.staticRenderFns=template.staticRenderFns,f._compiled=!0,t&&(f.functional=!0)),e&&(f._scopeId=e),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),style&&style.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},f._ssrRegister=c):style&&(c=n?function(e){style.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){style.call(this,r(e))}),c)if(f.functional){const e=f.render;f.render=function(t,o){return c.call(o),e(t,o)}}else{const e=f.beforeCreate;f.beforeCreate=e?[].concat(e,c):[c]}return script}const f=d({render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"generated-form",on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[o("div",{staticClass:"generated-form__header"},[e._t("header")],2),e._v(" "),e.formEditable?o("div",{staticClass:"generated-form__body"},[e._l(e.fieldsConfig,(function(t){return[e._t("sectionLabel",null,{fieldConfig:t,fieldsConfigFlat:e.fieldsConfig_FLAT}),e._v(" "),e.isArr(t)||e.fieldVisible(t)&&e.computedComponent(t)?o("div",{key:t.model,class:["generated-form__body__row",e.classes.row]},[e.isArr(t)?[e._l(t,(function(t){return[o("div",{directives:[{name:"show",rawName:"v-show",value:e.fieldVisible(t)&&e.computedComponent(t),expression:"\n                fieldVisible(subFieldConfig) &&\n                computedComponent(subFieldConfig)\n              "}],key:t.model,class:["generated-form__body__row__col","col-"+t.model,e.classes.col]},[[e._t(t.model+"_before"),e._v(" "),o(e.computedComponent(t),e._g(e._b({key:t.model,ref:t.model,refInFor:!0,tag:"component",attrs:{type:t.type||"text"},model:{value:e.fields[t.model],callback:function(o){e.$set(e.fields,t.model,o)},expression:"fields[subFieldConfig.model]"}},"component",e.bindProps(t),!1),e.bindEvents(t)),[e._t(""+t.model)],2),e._v(" "),e._t(t.model+"_after")]],2)]}))]:[o("div",{class:["generated-form__body__row__col","col-"+t.model,e.classes.col]},[[e._t(t.model+"_before"),e._v(" "),o(e.computedComponent(t),e._g(e._b({key:t.model,ref:t.model,refInFor:!0,tag:"component",attrs:{type:t.type||"text"},model:{value:e.fields[t.model],callback:function(o){e.$set(e.fields,t.model,o)},expression:"fields[fieldConfig.model]"}},"component",e.bindProps(t),!1),e.bindEvents(t)),[e._t(""+t.model)],2),e._v(" "),e._t(t.model+"_after")]],2)]],2):e._e()]}))],2):e._e(),e._v(" "),e.formEditable?e._e():e._t("disabled",null,{fieldsConfigFlat:e.fieldsConfig_FLAT}),e._v(" "),e._t("agreement"),e._v(" "),e._t("actions"),e._v(" "),o("div",{staticClass:"generated-form__footer"},[e._t("footer")],2)],2)},staticRenderFns:[]},void 0,{props:{value:{type:Object,default:null,required:!1},submitHandler:{type:Function,required:!1,default:()=>{console.error("submit handler not present")}},formRules:{type:Object,required:!1,default:()=>({})},formComponents:{type:Array,required:!1,default:()=>[]},formEditable:{type:Boolean,required:!1,default:!0},validationConfig:{type:Object,required:!1,default:()=>({})},formConfig:{type:Object,default:()=>({})},classes:{type:Object,required:!1,default:()=>({})},handleSubmitFail:{type:Function,required:!1,default:()=>{console.warn("Form submit fail")}}},data(){let e={},t={};function o(o){e={...e,[o.model]:"value"in o?o.value:""},t={...t,[o.model]:""}}if("fields"in this.formConfig)for(const e of this.formConfig.fields)if(this.isArr(e))for(const t of e)o(t);else o(e);return{fields:e,errors:t,submit:!1}},computed:{helperComponent:()=>"_formHelper",activeValidation(){return"activeValidation"in this.formConfig&&this.formConfig.activeValidation},logs(){return"logs"in this.formConfig&&this.formConfig.logs},fieldsConfig(){return"fields"in this.formConfig&&this.formConfig.fields.length?this.formConfig.fields:[]},fieldsConfig_FLAT(){let e=[];for(const t of this.fieldsConfig)e=this.isArr(t)?[...e,...t]:[...e,t];return e}},watch:{formEditable:{handler:function(e){!e&&this.removeAllErrors()}},value:{handler:function(){if(this.fields&&this.value&&Object.keys(this.value).length)for(const e in this.value.values)e in this.fields&&(this.fields[e]=this.value.values[e],this.errors[e]=this.value.errors[e])},immediate:!0,deep:!0},fields:{handler:function(e){this.$emit("input",{values:this.fields,errors:this.errors})},deep:!0,immediate:!0}},created(){this.$emit("setFormContext",this);for(const e in this.fields)this.$watch("fields."+e,(function(t,o){this.convertToNumber(e),this.updateHelpers(e,t),t==o&&typeof t!=typeof o||this.validateField(e)}))},methods:{resetFormState(){this.submit=!1},removeAllErrors(){for(const e in this.errors)this.errors[e]=""},showErrors(e,t){this.errors[e]=t},isHelperComponent(e){return e.includes(this.helperComponent)},updateHelpers(e,t){const o=t;if(this.isHelperComponent(e)){const t=e.split(this.helperComponent)[0];t in this.fields&&(this.fields[t]=o)}else if(`${e}${this.helperComponent}`in this.fields){const t=`${e}${this.helperComponent}`;this.fields[t]=o}},setDefaultFieldValue(e){this.fields[e.model]="value"in e?e.value:""},fieldVisible(e){const t=!("show"in e)||("function"==typeof e.show?e.show(this):Boolean(e.show));return!t&&this.setDefaultFieldValue(e),t},bindProps(e){const t=this.computedComponent(e),o=this.formComponents.find(({component:component})=>component.name===t),{component:{errorProp:n}}=e.errorProp?{component:{errorProp:e.errorProp}}:o||{component:{errorProp:"errorMessage"}};return{...e.props,[n]:this.errors[e.model],disabled:this.fieldDisabled(e)}},findFieldConfig(e){return this.fieldsConfig_FLAT.find(t=>t.model===e)},convertToNumber(e){const t=this.findFieldConfig(e);t&&"number"===t.type&&this.fields[e]&&(this.fields[e]=Number(this.fields[e]))},bindEvents(e){return"triggers"in e&&this.isFunc(e.triggers)?e.triggers(this):{}},computedComponent(e){const t=e.type||"text";if("component"in e)return e.component;const{component:{name:o}}=this.formComponents.find(({type:e})=>e.includes(t))||{component:{name:""}};return!o&&console.error(`Component cannot be rendered. Component for type "${t}" is not found in form-components.`),o},fieldDisabled(e){const t=!(!e.props||!("disabled"in e.props))&&(this.isFunc(e.props.disabled)?e.props.disabled(this):Boolean(e.props.disabled));return!(this.formEditable&&!t)},fieldRequired(e){const t=this.findFieldConfig(e),o=t.props&&"required"in t.props?this.isFunc(t.props.required)?t.props.required(this):Boolean(t.props.required):!this.isHelperComponent(e);return!(!t||this.fieldDisabled(t)||!this.fieldVisible(t))&&o},validateField(e){const t=this.fieldRequired(e),o=this.findFieldConfig(e).rules||{},[n,l]=this.submit||this.activeValidation?r(e,this.fields[e],o,this.formRules,{...this.fields},this.submit):[!0,""];return(t||!this.submit)&&this.showErrors(e,l),this.logs&&console.log(`model:${e}\n`,`value:${this.fields[e]}\n`,`type:${typeof this.fields[e]}\n`,`isValid:${n}\n`,`required:${t}\n`,"errorMessage:"+l),n},async submitForm(){this.submit=!0;let e=[];Object.keys(this.fields).forEach(t=>{e=[...e,[t,this.validateField(t)]]});const[t]=e.find(([e,t])=>this.fieldRequired(e)&&!1===t)||[""];if(this.logs&&console.log("fields data",this.fields),console.log("validations status:",e),t)return this.handleSubmitFail(this.fields),void this.resetFormState();console.log("Form is valid. calling submit handler.\n"),await this.submitHandler(this.fields),this.resetFormState()},scrollToComponent(e){const t=this.findFieldConfig(e),o=this.computedComponent(t);if(this.logs&&console.log("scroll to:",""+(o?e:e+"(component not found)")),!o)return;const n=e,r=this.$refs[n][0].$el;r&&r.scrollIntoView({behavior:"smooth"})&&r.focus()},isUndef:e=>void 0===e,isArr:e=>Array.isArray(e),isFunc:e=>"function"==typeof e,isBool:e=>"boolean"==typeof e,throwError(e){throw new Error(e)},warn(e){console.warn(e)}}},"data-v-54db7e4c",!1,void 0,!1,void 0,void 0,void 0),c=function(e){c.installed||(c.installed=!0,e.component("FormGeneratorVue",f))};f.install=c,t.default=f}}]);