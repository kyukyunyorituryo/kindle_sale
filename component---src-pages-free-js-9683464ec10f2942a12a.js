"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[869],{2831:function(e,a,t){var l=t(7294);a.Z=e=>{let{book:a}=e;var t,n;for(let l=0;l<a.length;l++)t=a[l].ImageURL.replace(/_SL500_/,"_SL160_"),n=a[l].ImageURL.replace(/_SL500_/,"_SL75_"),a[l].image_m=t,a[l].image_s=n;const r=Array.from(new Map(a.map((e=>[e.Asin,e]))).values());return l.createElement("div",{id:"book"},r.map((e=>l.createElement("div",{key:e.Asin},l.createElement("a",{className:"amazon-card-container",target:"_blank",rel:"noopener noreferrer",href:e.URL},l.createElement("div",{className:"amazon-card-body"},l.createElement("div",{className:"amazon-card-title"},e.Title),l.createElement("div",{className:"amazon-card-domain"},"価格：",e.Price,"円、ポイント：",e.Points,"、",e.Contributor,"、出版社：",e.Publisher,"、カテゴリー：",e.Category)),l.createElement("div",{className:"amazon-card-image-container"},l.createElement("img",{className:"amazon-card-image",srcSet:e.image_s+" 320w, "+e.image_m+" 640w, "+e.ImageURL+" ",src:e.image_s,sizes:"(max-width:1280px) 50vw, 1280px",loading:"lazy",alt:e.Title})))))))}},632:function(e,a,t){t.r(a),t.d(a,{Head:function(){return c}});var l=t(7294),n=(t(1883),t(8771)),r=t(8678),i=t(9357),s=t(2831),o=t(4143);const c=e=>{let{data:a}=e;return l.createElement(i.Z,{title:"kindle無料本まとめ",ogpimage:a.allJson.nodes[0].ImageURL,description:"kindle無料本まとめ、kindleセール品の中で無料のものを一覧で表示します。"})};a.default=e=>{var a;let{data:t,location:i}=e;var c=t.allJson.nodes;const m=t.site.siteMetadata.catesafe;if(t.allJson.nodes[0].Pubtag)var d=t.allJson.nodes[0].Pubtag.split(",");else d=["出版社なし"];if(t.allJson.nodes[0].Catetag)var g=t.allJson.nodes[0].Catetag.split(",");else g=["カテゴリーなし"];g=g.filter((e=>m.includes(e)));var u="無料本まとめ";d.length=10,g.length=10;const p=(null===(a=t.site.siteMetadata)||void 0===a?void 0:a.title)||"Title";return l.createElement(l.Fragment,null,l.createElement(r.Z,{location:i,title:p},l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h1",{itemProp:"headline"}," ","「Kindleセール」"+u)),l.createElement(s.Z,{book:c}),l.createElement("hr",null),l.createElement(o.Z,{title:u,url:t.site.siteMetadata.siteUrl+"/free"}),l.createElement("footer",null,l.createElement(n.Z,null)))))}}}]);
//# sourceMappingURL=component---src-pages-free-js-9683464ec10f2942a12a.js.map