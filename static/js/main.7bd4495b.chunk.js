(this.webpackJsonplocale_editor=this.webpackJsonplocale_editor||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var a,o=n(7),i=n(0),c=n.n(i),r=n(12),l=n.n(r),s=(n(89),n(90),n(91),n(30));!function(e){e[e.ALL=0]="ALL",e[e.EMPTY=1]="EMPTY"}(a||(a={}));var d=Object(i.createContext)({file:void 0,list:[],mode:a.ALL,modal:void 0,setFile:function(){},setList:function(){},setMode:function(){},setModal:function(){}}),u=function(){return Object(i.useContext)(d)},j=function(e){var t=e.children,n=Object(i.useState)(),c=Object(s.a)(n,2),r=c[0],l=c[1],u=Object(i.useState)([]),j=Object(s.a)(u,2),b=j[0],O=j[1],p=Object(i.useState)(a.ALL),m=Object(s.a)(p,2),f=m[0],h=m[1],v=Object(i.useState)(),_=Object(s.a)(v,2),x=_[0],g=_[1];return Object(o.jsx)(d.Provider,{value:{file:r,list:b,mode:f,modal:x,setFile:l,setList:O,setMode:h,setModal:g},children:t})},b=n(42),O=Object(i.memo)((function(){var e=u(),t=e.list,n=e.mode,c=e.setModal,r=Object(i.useMemo)((function(){switch(n){case a.ALL:return t;case a.EMPTY:return t.filter((function(e){return!e.message}));default:return t}}),[t,n]),l=Object(i.useCallback)((function(e){c(null===e||void 0===e?void 0:e.rowData)}),[c]);return Object(o.jsx)(o.Fragment,{children:!!r.length&&Object(o.jsx)(b.a,{children:function(e){var t=e.height,n=e.width;return Object(o.jsxs)(b.c,{width:n,height:t,headerHeight:50,rowHeight:50,rowStyle:{backgroundColor:"#fff"},rowCount:r.length,rowGetter:function(e){var t=e.index;return r[t]},onRowClick:l,children:[Object(o.jsx)(b.b,{label:"id",dataKey:"id",width:n/3}),Object(o.jsx)(b.b,{label:"rus",dataKey:"defaultMessage",width:n/3}),Object(o.jsx)(b.b,{label:"translation",dataKey:"message",width:n/3})]})}})})})),p=n(23),m=n(144),f=n(142),h=n(140),v=n(37),_=n(28),x=n(57),g=n.n(x),w=Object(i.memo)((function(){var e=u(),t=e.modal,n=e.setModal,a=e.setList,c=Object(i.useMemo)((function(){return t||{}}),[t]),r=Object(i.useCallback)((function(){n(void 0)}),[n]),l=Object(i.useCallback)((function(e){e.preventDefault();var n,o=(n=e,Array.prototype.slice.call(null===n||void 0===n?void 0:n.target).filter((function(e){return e.name})).reduce((function(e,t){return Object(p.a)(Object(p.a)({},e),{},Object(_.a)({},t.name,t.value))}),{}));a((function(e){return e.map((function(e){return(null===e||void 0===e?void 0:e.id)===(null===t||void 0===t?void 0:t.id)?Object(p.a)(Object(p.a)({},e),o):e}))})),v.b.success("".concat(null===t||void 0===t?void 0:t.id," changed to ").concat(JSON.stringify(o)),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),r()}),[a,r,t]);return Object(o.jsx)(m.a,{open:!!t,onClose:r,children:Object(o.jsxs)("form",{className:g.a.modal,noValidate:!0,autoComplete:"off",onSubmit:l,children:[Object(o.jsx)(f.a,{name:"message",label:"message",defaultValue:c.message}),Object(o.jsxs)("div",{className:g.a.btns,children:[Object(o.jsx)(h.a,{onClick:r,variant:"contained",children:"cancel"}),Object(o.jsx)(h.a,{type:"submit",variant:"contained",color:"secondary",children:"save"})]})]})})})),C=n(146),N=n(147),L=n(143),M=n(72),k=n.n(M),y=Object(i.memo)((function(){var e=u(),t=e.mode,n=e.setMode,i=e.list;return Object(o.jsx)(o.Fragment,{children:!!i.length&&Object(o.jsxs)(C.a,{className:k.a.wrap,"aria-label":"mode",value:t,onChange:function(e,t){return n(+t)},children:[Object(o.jsx)(N.a,{value:a.ALL,control:Object(o.jsx)(L.a,{}),label:"All"}),Object(o.jsx)(N.a,{value:a.EMPTY,control:Object(o.jsx)(L.a,{}),label:"Only empty"})]})})})),F=n(73),P=n(77),A=n(145),I=n(52),S=n.n(I),z=n(141),T=n(76),E=n(22),D=n.n(E),Y=Object(i.memo)((function(e){var t=e.disabled,n=void 0!==t&&t,a=e.accept,c=void 0===a?"":a,r=e.multiple,l=void 0!==r&&r,d=e.title,u=void 0===d?"":d,j=e.additionalTitle,b=void 0===j?"":j,O=e.onDrop,m=void 0===O?function(){}:O,f=e.classNameWrap,h=e.isInvalid,v=void 0!==h&&h,x=(e.maxFileNameLength,Object(P.a)(e,["disabled","accept","multiple","title","additionalTitle","onDrop","classNameWrap","isInvalid","maxFileNameLength"])),g=Object(i.useState)([]),w=Object(s.a)(g,2),C=w[0],N=w[1],L=Object(i.useState)(Object(A.a)()),M=Object(s.a)(L,1)[0],k=Object(T.a)(Object(p.a)({accept:c,disabled:n,multiple:l,onDrop:function(e){var t=l?C.concat((e||[]).filter((function(e){var t=e.name;return!C.find((function(e){var n=e.name;return t===n}))}))):e;N(t),m(l?t:t[0])}},x)),y=k.getRootProps,F=k.getInputProps,I=Object(i.useCallback)((function(e,t){e.stopPropagation(),N((function(e){return e.filter((function(e,n){return t!==n}))}))}),[]),E=Object(i.useMemo)((function(){return C.map((function(e,t){return Object(o.jsxs)("li",{className:D.a.listItem,children:[Object(o.jsx)(z.a,{className:D.a.iconClose,onClick:function(e){return I(e,t)},children:"close"}),Object(o.jsx)("span",{className:D.a.listItem__text,children:e.name})]},e.name)}))}),[I,C]);return Object(o.jsxs)("section",Object(p.a)(Object(p.a)({},y({className:S()(D.a.wrap,f,Object(_.a)({},D.a.wrap_invalid,v))})),{},{children:[Object(o.jsx)("input",Object(p.a)({id:M},F())),!!E.length&&Object(o.jsx)("ul",{className:D.a.list,children:E}),!E.length&&Object(o.jsxs)("div",{className:D.a.about,children:[Object(o.jsx)("span",{className:S()(D.a.title,Object(_.a)({},D.a.text_invalid,v)),children:u})," ",Object(o.jsx)("span",{className:S()(D.a.titleAdditional,Object(_.a)({},D.a.text_invalid,v)),children:b})]})]}))})),H=n(58),B=n.n(H),J=function(){var e=u(),t=e.list,n=e.file,a=e.setFile,c=e.setList,r=Object(i.useCallback)((function(){var e=new Blob(["".concat(JSON.stringify(t,null,2),"\n")],{type:"text/plain;charset=utf-8"});Object(F.saveAs)(e,null===n||void 0===n?void 0:n.name)}),[n,t]),l=Object(i.useCallback)((function(){if(n){var e=new FileReader;e.fileName=null===n||void 0===n?void 0:n.name,e.readAsText(n),e.onload=function(e){try{var t;c(JSON.parse(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.result))}catch(n){v.b.error("Error: ".concat(null===n||void 0===n?void 0:n.message),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}}}),[n,c]);return Object(i.useEffect)((function(){l()}),[n,l]),Object(o.jsxs)("div",{className:B.a.wrap,children:[Object(o.jsx)(Y,{classNameWrap:B.a.dropZoneWrap,additionalTitle:"Drag 'n' drop json here, or click to select file",onDrop:a}),Object(o.jsx)(h.a,{onClick:r,disabled:!n,variant:"contained",color:"secondary",children:"Download json"})]})},W=n(75),G=n.n(W),R=Object(i.memo)((function(e){var t=e.children;return Object(o.jsx)("div",{className:G.a.wrap,children:t})})),K="20px",Z=Object(i.memo)((function(e){var t=e.children,n=e.height;return Object(o.jsx)("div",{style:{height:"calc(".concat(n," - ").concat(K,")"),padding:K},children:t})})),U=n(59),V=n.n(U),X=Object(i.memo)((function(){return Object(o.jsxs)("div",{className:V.a.wrap,children:[Object(o.jsxs)("span",{children:["Format: "," "]}),Object(o.jsx)("span",{className:V.a.format,children:"{ message: string, defaultMessage: string, files: string[], id: string }"})]})})),q=function(){return Object(o.jsx)(j,{children:Object(o.jsxs)(R,{children:[Object(o.jsxs)(Z,{height:"200px",children:[Object(o.jsx)(X,{}),Object(o.jsx)(J,{})]}),Object(o.jsxs)(Z,{height:"100% - 200px",children:[Object(o.jsx)(y,{}),Object(o.jsx)(O,{}),Object(o.jsx)(w,{})]})]})})},Q=Object(i.memo)((function(){return Object(o.jsx)(v.a,{position:"top-right",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})})),$=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Q,{}),Object(o.jsx)(q,{})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),i(e),c(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)($,{})}),document.getElementById("root")),ee()},22:function(e,t,n){e.exports={wrap:"dropzone_wrap__1y1Li",wrap_invalid:"dropzone_wrap_invalid__1PzmG",title:"dropzone_title__3MqY-",titleAdditional:"dropzone_titleAdditional__4MYMd",icon:"dropzone_icon__1059d",text_invalid:"dropzone_text_invalid__23ElU",list:"dropzone_list__2h_uD",listItem:"dropzone_listItem__3REQG",listItem__text:"dropzone_listItem__text__3HMPI",iconClose:"dropzone_iconClose__3Ue7u"}},57:function(e,t,n){e.exports={modal:"locale-editor_modal_modal__2Yhb9",btns:"locale-editor_modal_btns__rJk_T"}},58:function(e,t,n){e.exports={wrap:"locale-editor_header_wrap__1BMGf",dropZoneWrap:"locale-editor_header_dropZoneWrap__3JzpH"}},59:function(e,t,n){e.exports={wrap:"locale-editor_format-helper_wrap__EjLXM",format:"locale-editor_format-helper_format__23EiY"}},72:function(e,t,n){e.exports={wrap:"locale-editor_mode_wrap__HYoxX"}},75:function(e,t,n){e.exports={wrap:"locale-editor_wrap_wrap__1Ie3m"}},89:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.7bd4495b.chunk.js.map