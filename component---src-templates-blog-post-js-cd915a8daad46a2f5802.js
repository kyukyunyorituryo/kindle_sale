(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{3024:function(e,a,t){"use strict";t.d(a,{Z:function(){return l}});var r=t(7294),n=t(1358),i=t.n(n);var s=e=>{let{book:a}=e;var t,n;for(let r=0;r<a.length;r++)t=a[r].ImageURL.replace(/_SL500_/,"_SL160_"),n=a[r].ImageURL.replace(/_SL500_/,"_SL75_"),a[r].image_m=t,a[r].image_s=n;const i=Array.from(new Map(a.map((e=>[e.Asin,e]))).values());return r.createElement("div",{id:"book"},i.map((e=>r.createElement("div",{key:e.Asin},r.createElement("a",{className:"amazon-card-container",target:"_blank",rel:"noopener noreferrer",href:e.URL},r.createElement("div",{className:"amazon-card-body"},r.createElement("div",{className:"amazon-card-title"},e.Title),r.createElement("div",{className:"amazon-card-domain"},"価格：",e.Price,"円、ポイント：",e.Points,"、",e.Contributor,"、出版社：",e.Publisher,"、カテゴリー：",e.Category)),r.createElement("div",{className:"amazon-card-image-container"},r.createElement("img",{className:"amazon-card-image",srcSet:e.image_s+" 320w, "+e.image_m+" 640w, "+e.ImageURL+" ",src:e.image_s,sizes:"(max-width:1280px) 50vw, 1280px",loading:"lazy",alt:e.Title})))))))};var l=e=>{let{itemsPerPage:a,items:t}=e;function n(e){let{currentItems:a}=e;return r.createElement(r.Fragment,null,r.createElement(s,{book:a}))}const{0:l,1:o}=(0,r.useState)(0),c=l+a,p=t.slice(l,c),u=Math.ceil(t.length/a),g=e=>{const r=e.selected*a%t.length;console.log("User requested page number "+e.selected+", which is offset "+r),o(r)};return r.createElement(r.Fragment,null,r.createElement(i(),{breakLabel:"...",nextLabel:"次へ>",onPageChange:g,pageRangeDisplayed:3,pageCount:u,previousLabel:"<前へ",renderOnZeroPageCount:null,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}),r.createElement(n,{currentItems:p}),r.createElement(i(),{breakLabel:"...",nextLabel:"次へ>",onPageChange:g,pageRangeDisplayed:3,pageCount:u,previousLabel:"<前へ",renderOnZeroPageCount:null,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))}},4982:function(e,a,t){"use strict";t.r(a),t.d(a,{Head:function(){return c}});var r=t(7294),n=t(8771),i=t(8678),s=t(9357),l=t(3024),o=t(4143);const c=e=>{let{data:a}=e;return r.createElement(s.Z,{title:a.file.childrenJson[0].Saletitle,ogpimage:a.file.childrenJson[0].ImageURL,description:a.file.childrenJson[0].Saletitle})};a.default=e=>{var a;let{data:t,location:s}=e;var c=t.file.childrenJson;const p=t.site.siteMetadata.catesafe;var u=t.file.childrenJson[0].Pubtag.split(","),g=t.file.childrenJson[0].Catetag.split(",");g=g.filter((e=>p.includes(e))),u.length=10,g.length=10;const d=(null===(a=t.site.siteMetadata)||void 0===a?void 0:a.title)||"Title";return r.createElement(r.Fragment,null,r.createElement(i.Z,{location:s,title:d},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},"「Kindleセール」　",t.file.childrenJson[0].Saletitle),r.createElement("p",null,t.file.childrenJson[0].Date,"　出版社：",u&&u.length>0&&u.map((e=>r.createElement("button",null,e))),"カテゴリ：",g&&g.length>0&&g.map((e=>r.createElement("button",null,e))))),r.createElement(l.Z,{itemsPerPage:10,items:c}),r.createElement("hr",null),r.createElement(o.Z,{title:t.file.childrenJson[0].Saletitle,url:""+t.site.siteMetadata.siteUrl+t.file.fields.slug}),r.createElement("footer",null,r.createElement(n.Z,null)))))}},1358:function(e,a,t){var r;r=e=>(()=>{var a={703:(e,a,t)=>{"use strict";var r=t(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,s){if(s!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},697:(e,a,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{"use strict";a.exports=e}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return a[e](i,i.exports,r),i.exports}r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>y});var e=r(98),a=r.n(e),t=r(697),i=r.n(t);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}var l=function(e){var t=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,l=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,g=e.extraAriaContext,d=e.pageLabelBuilder,f=e.rel,m=e.ariaLabel||"Page "+n+(g?" "+g:""),b=null;return i&&(b="page",m=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+l:l,void 0!==r?void 0!==o&&(r=r+" "+o):r=o),a().createElement("li",{className:t},a().createElement("a",s({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:i?"-1":"0","aria-label":m,"aria-current":b,onKeyPress:p},c(p)),d(n)))};l.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const o=l;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var p=function(e){var t=e.breakLabel,r=e.breakAriaLabel,n=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,l=e.getEventListener,o=n||"break";return a().createElement("li",{className:o},a().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":r,onKeyPress:s},l(s)),t))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const u=p;function g(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function m(e,a){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},m(e,a)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var C=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&m(e,a)}(l,e);var t,r,n,i,s=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=v(n);if(i){var t=v(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return function(e,a){if(a&&("object"===d(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,e)});function l(e){var t,r;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,l),h(b(t=s.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})})),h(b(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;t.handleClick(e,null,a<r-1?a+1:void 0,{isNext:!0})})),h(b(t),"handlePageSelected",(function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)})),h(b(t),"handlePageChange",(function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),h(b(t),"getEventListener",(function(e){return h({},t.props.eventListener,e)})),h(b(t),"handleClick",(function(e,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,s=void 0!==i&&i,l=n.isNext,o=void 0!==l&&l,c=n.isBreak,p=void 0!==c&&c,u=n.isActive,g=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=t.state.selected,f=t.props.onClick,m=r;if(f){var b=f({index:a,selected:d,nextSelectedPage:r,event:e,isPrevious:s,isNext:o,isBreak:p,isActive:g});if(!1===b)return;Number.isInteger(b)&&(m=b)}void 0!==m&&t.handlePageChange(m)})),h(b(t),"handleBreakClick",(function(e,a){var r=t.state.selected;t.handleClick(a,e,r<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})})),h(b(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),h(b(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),h(b(t),"getElementPageRel",(function(e){var a=t.state.selected,r=t.props,n=r.nextPageRel,i=r.prevPageRel,s=r.selectedPageRel;return a-1===e?i:a===e?s:a+1===e?n:void 0})),h(b(t),"pagination",(function(){var e=[],r=t.props,n=r.pageRangeDisplayed,i=r.pageCount,s=r.marginPagesDisplayed,l=r.breakLabel,o=r.breakClassName,c=r.breakLinkClassName,p=r.breakAriaLabels,g=t.state.selected;if(i<=n)for(var d=0;d<i;d++)e.push(t.getPageElement(d));else{var f=n/2,m=n-f;g>i-n/2?f=n-(m=i-g):g<n/2&&(m=n-(f=g));var b,v,h=function(e){return t.getPageElement(e)},C=[];for(b=0;b<i;b++){var y=b+1;if(y<=s)C.push({type:"page",index:b,display:h(b)});else if(y>i-s)C.push({type:"page",index:b,display:h(b)});else if(b>=g-f&&b<=g+(0===g&&n>1?m-1:m))C.push({type:"page",index:b,display:h(b)});else if(l&&C.length>0&&C[C.length-1].display!==v&&(n>0||s>0)){var P=b<g?p.backward:p.forward;v=a().createElement(u,{key:b,breakAriaLabel:P,breakLabel:l,breakClassName:o,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,b),getEventListener:t.getEventListener}),C.push({type:"break",index:b,display:v})}}C.forEach((function(a,t){var r=a;"break"===a.type&&C[t-1]&&"page"===C[t-1].type&&C[t+1]&&"page"===C[t+1].type&&C[t+1].index-C[t-1].index<=2&&(r={type:"page",index:a.index,display:h(a.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return t=l,(r=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==a&&a>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount,n=a.hrefAllControls;if(t)return n||e>=0&&e<r?t(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,s=r.activeClassName,l=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return a().createElement(o,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:s,activeLinkClassName:l,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,r=t.disabledClassName,n=t.disabledLinkClassName,i=t.pageCount,s=t.className,l=t.containerClassName,o=t.previousLabel,c=t.previousClassName,p=t.previousLinkClassName,u=t.previousAriaLabel,d=t.prevRel,m=t.nextLabel,b=t.nextClassName,v=t.nextLinkClassName,h=t.nextAriaLabel,C=t.nextRel,y=this.state.selected,P=0===y,k=y===i-1,L="".concat(g(c)).concat(P?" ".concat(g(r)):""),x="".concat(g(b)).concat(k?" ".concat(g(r)):""),N="".concat(g(p)).concat(P?" ".concat(g(n)):""),E="".concat(g(v)).concat(k?" ".concat(g(n)):""),O=P?"true":"false",R=k?"true":"false";return a().createElement("ul",{className:s||l,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:L},a().createElement("a",f({className:N,href:this.getElementHref(y-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":O,"aria-label":u,rel:d},this.getEventListener(this.handlePreviousPage)),o)),this.pagination(),a().createElement("li",{className:x},a().createElement("a",f({className:E,href:this.getElementHref(y+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":R,"aria-label":h,rel:C},this.getEventListener(this.handleNextPage)),m)))}}])&&function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(e.Component);h(C,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),h(C,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const y=C})(),n})(),e.exports=r(t(7294))}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cd915a8daad46a2f5802.js.map