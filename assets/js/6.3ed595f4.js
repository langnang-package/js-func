(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{278:function(e,n,a){"use strict";a.r(n);a(92);var s={name:"FunctionCodeSwitcher",props:{langnang:{type:Array,default:()=>[]},lodash:{type:Array,default:()=>[]},underscode:{type:Array,default:()=>[]}},computed:{languages(){return[...this.langnang.map(e=>({name:"Langnang."+e,file:`@langnang/js-func/src/${e}.ts`})),...this.lodash.map(e=>({name:"Lodash."+e,file:`lodash/${e}.js`})),...this.underscode.map(e=>({name:"Underscode."+e,file:`underscore/modules/${e}.js`}))]}}},t=a(14),l=Object(t.a)(s,(function(){var e=this,n=e._self._c;return n("CodeSwitcher",{attrs:{languages:e.languages.reduce((e,n,a)=>(e[a]=n.name,e),{})}},[e._l(e.languages,(function(a,s){return n("template",{slot:s},[n("div",{key:s},[n("code",[e._v(" "+e._s(a.file)+" ")]),e._v(" "),e._t(s)],2)])}))],2)}),[],!1,null,null,null);n.default=l.exports}}]);