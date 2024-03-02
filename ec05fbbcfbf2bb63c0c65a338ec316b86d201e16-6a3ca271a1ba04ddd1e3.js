"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[164],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,l=new RegExp("^"+i.source),s=new RegExp(i.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,l=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,s=l,l=!0,o++):l&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=l,l=!1,i=!0):(i=r(c)===c&&n(c)!==c,s=l,l=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return v},S:function(){return D},_:function(){return s},a:function(){return l},b:function(){return u},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=s(e,h);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,y);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,l({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var E;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,a=s(e,w);return t?r.createElement(b,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,l({},e)),r.createElement("noscript",null,r.createElement(b,l({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:i().object.isRequired,alt:x},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],I=new Set;let O,j;const q=function(e){let{as:t="div",image:n,style:i,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:h}=e,y=s(e,N);const{width:f,height:b,layout:E}=n,w=c(f,b,E),{style:v,className:k}=w,L=s(w,T),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,f,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(C);if(j&&I.has(C))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;S.current&&(S.current.innerHTML=a(l({isLoading:!0,isLoaded:I.has(C),image:n},y)),I.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=s(S.current,C,I,i,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{I.has(C)&&j&&(S.current.innerHTML=j(l({isLoading:I.has(C),isLoaded:I.has(C),image:n},y)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},L,{style:l({},v,i,{backgroundColor:u}),className:k+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));M.propTypes=_,M.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:i}=t,o=s(t,R);return i&&console.warn(i),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=z((function(e){let{as:t="div",className:a,class:n,style:i,image:o,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:y,objectFit:f,objectPosition:b}=e,E=s(e,L);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=l({objectFit:f,objectPosition:b,backgroundColor:y},h);const{width:w,height:x,layout:_,images:N,placeholder:T,backgroundColor:I}=o,O=c(w,x,_),{style:j,className:q}=O,M=s(O,S),R={fallback:void 0,sources:[]};return N.fallback&&(R.fallback=l({},N.fallback,{srcSet:N.fallback.srcSet?C(N.fallback.srcSet):void 0})),N.sources&&(R.sources=N.sources.map((e=>l({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,l({},M,{style:l({},j,i,{backgroundColor:y}),className:q+(a?" "+a:"")}),r.createElement(g,{layout:_,width:w,height:x},r.createElement(v,l({},d(T,!1,_,w,x,I,f,b))),r.createElement(k,l({"data-gatsby-image-ssr":"",className:p},E,u("eager"===m,!1,R,m,h)))))})),A=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:x,width:A,height:A,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=W;const D=z(M);D.displayName="StaticImage",D.propTypes=W},8771:function(e,t,a){var r=a(7294),n=a(1883),i=a(8032);t.Z=()=>{var e,t;const l=(0,n.useStaticQuery)("3257411868"),s=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"bio"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(2078)}),(null==s?void 0:s.name)&&r.createElement("p",null,r.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null," ",r.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"Twitterをフォロー"),"　",r.createElement("a",{href:"https://kyukyunyorituryo.github.io/i/privacy-policy/"},"プライバシーポリシー")))}},8678:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{let{location:t,title:a,children:i}=e;const l="/kindle_sale/"===t.pathname;let s;return s=l?r.createElement(r.Fragment,null,r.createElement("h1",{className:"main-heading"},r.createElement(n.Link,{to:"/"},a)),r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://kyukyunyorituryo.github.io/new_epub/"},"kindle新刊")),r.createElement("li",null,r.createElement("a",{href:"https://kyukyunyorituryo.github.io/new_pub/"},"紙の新刊")),r.createElement("li",null,r.createElement("a",{href:"https://kyukyunyorituryo.github.io/i/"}," 電書ニュース"))))):r.createElement(r.Fragment,null,r.createElement(n.Link,{className:"header-link-home",to:"/"},a),r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://kyukyunyorituryo.github.io/new_epub/"},"kindle新刊")),r.createElement("li",null,r.createElement("a",{href:"https://kyukyunyorituryo.github.io/new_pub/"},"紙の新刊")),r.createElement("li",null,r.createElement("a",{href:"https://kyukyunyorituryo.github.io/i/"}," 電書ニュース"))))),r.createElement("div",{className:"global-wrapper","data-is-root-path":l},r.createElement("header",{className:"global-header"},s),r.createElement("main",null,i),r.createElement("footer",null,"© ",(new Date).getFullYear(),","," ",r.createElement("a",{href:"https://github.com/kyukyunyorituryo"},"kyukyunyorituryo")))}},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{var t,a,i;let{description:l,title:s,ogpimage:o,children:c}=e;const{site:u}=(0,n.useStaticQuery)("2841359383"),d=l||u.siteMetadata.description,m=null===(t=u.siteMetadata)||void 0===t?void 0:t.title,p=o||u.siteMetadata.icon;return r.createElement(r.Fragment,null,r.createElement("title",null,m?s+" | "+m:s),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:s}),r.createElement("meta",{name:"twitter:description",content:d}),r.createElement("meta",{name:"twitter:image",content:p}),c)}},2078:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/kindle_sale/static/0c38e3279bc07b04616a7ea4ac8ad33c/e5610/profile-pic.png","srcSet":"/kindle_sale/static/0c38e3279bc07b04616a7ea4ac8ad33c/e5610/profile-pic.png 50w,\\n/kindle_sale/static/0c38e3279bc07b04616a7ea4ac8ad33c/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/kindle_sale/static/0c38e3279bc07b04616a7ea4ac8ad33c/d4bf4/profile-pic.avif 50w,\\n/kindle_sale/static/0c38e3279bc07b04616a7ea4ac8ad33c/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/kindle_sale/static/0c38e3279bc07b04616a7ea4ac8ad33c/3faea/profile-pic.webp 50w,\\n/kindle_sale/static/0c38e3279bc07b04616a7ea4ac8ad33c/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=ec05fbbcfbf2bb63c0c65a338ec316b86d201e16-6a3ca271a1ba04ddd1e3.js.map