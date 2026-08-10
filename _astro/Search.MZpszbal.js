import{r as e,t}from"./react.DRF9c-uj.js";import{t as n}from"./jsx-runtime.F4oUwWSU.js";var r=e(t(),1),i=n(),a=({book:e=[]})=>{let t=r.useMemo(()=>{if(!Array.isArray(e))return[];let t=e.map(e=>{let t=e.ImageURL_m||e.ImageURL?.replace(/_SL500_/,`_SL160_`)||``,n=e.ImageURL_s||e.ImageURL?.replace(/_SL500_/,`_SL75_`)||``;return{...e,image_m:t,image_s:n}});return Array.from(new Map(t.map(e=>[e.Asin,e])).values())},[e]);return t.length===0?(0,i.jsx)(`div`,{id:`book`,children:`表示する商品がありません`}):(0,i.jsx)(`div`,{id:`book`,className:`\r
        max-w-6xl mx-auto px-4 py-6\r
        grid gap-6\r
        grid-cols-2\r
        sm:grid-cols-3\r
        md:grid-cols-4\r
        lg:grid-cols-5\r
      `,children:t.map(e=>{let t=e.Day?`${e.Day.slice(0,4)}/${e.Day.slice(4,6)}/${e.Day.slice(6,8)}`:`不明`;return(0,i.jsxs)(`a`,{href:e.URL,target:`_blank`,rel:`noopener noreferrer`,className:`\r
              bg-white rounded-2xl\r
              shadow hover:shadow-lg\r
              transition overflow-hidden\r
              flex flex-col\r
            `,children:[e.image_s&&(0,i.jsx)(`div`,{className:`aspect-[3/4] bg-gray-100`,children:(0,i.jsx)(`img`,{srcSet:`
                    ${e.image_s} 320w,
                    ${e.image_m} 640w,
                    ${e.ImageURL} 1024w
                  `,src:e.image_s,sizes:`(max-width:1280px) 50vw, 1280px`,loading:`lazy`,alt:e.Title,className:`\r
                    w-full h-full\r
                    object-cover\r
                  `})}),(0,i.jsxs)(`div`,{className:`\r
                p-3 flex flex-col gap-2\r
                break-words\r
              `,children:[(0,i.jsx)(`div`,{className:`\r
                  text-sm font-semibold\r
                  text-gray-900 line-clamp-3\r
                `,children:e.Title}),(0,i.jsxs)(`div`,{className:`\r
                  text-xs text-gray-600\r
                  line-clamp-6\r
                `,children:[`価格：`,e.Price==null?`なし`:`${Number(e.Price)}円`,(0,i.jsx)(`br`,{}),`ポイント：`,e.Points??0,(0,i.jsx)(`br`,{}),e.Contributor,(0,i.jsx)(`br`,{}),`出版社：`,e.Publisher,(0,i.jsx)(`br`,{}),`カテゴリー：`,e.Category?.split(`,`).slice(0,3).join(`,`),(0,i.jsx)(`br`,{}),`発売日：`,t]})]})]},e.Asin||e.Title)})})},o=({itemsPerPage:e=20,items:t=[]})=>{let n=Array.isArray(t)?t:[],[o,s]=(0,r.useState)(0),c=Math.max(1,Math.ceil(n.length/e)),l=o*e,u=n.slice(l,l+e),d=e=>{s(e),typeof window<`u`&&window.scrollTo({top:0,behavior:`smooth`})},f=(0,i.jsxs)(`div`,{className:`\r
      flex flex-wrap gap-2\r
      justify-center my-6\r
    `,children:[(0,i.jsx)(`button`,{onClick:()=>d(0),disabled:o===0,className:`\r
        border rounded px-3 py-1\r
        disabled:opacity-50\r
      `,children:`<<`}),(0,i.jsx)(`button`,{onClick:()=>d(Math.max(0,o-1)),disabled:o===0,className:`\r
        border rounded px-3 py-1\r
        disabled:opacity-50\r
      `,children:`前へ`}),(()=>{let e=Math.max(0,o-4),t=e+10;return t>c&&(t=c,e=Math.max(0,t-10)),Array.from({length:t-e},(t,n)=>e+n).map(e=>(0,i.jsx)(`button`,{onClick:()=>d(e),className:`
              border rounded px-3 py-1
              ${e===o?`bg-black text-white`:``}
            `,children:e+1},e))})(),(0,i.jsx)(`button`,{onClick:()=>d(Math.min(c-1,o+1)),disabled:o===c-1,className:`\r
        border rounded px-3 py-1\r
        disabled:opacity-50\r
      `,children:`次へ`}),(0,i.jsx)(`button`,{onClick:()=>d(c-1),disabled:o===c-1,className:`\r
        border rounded px-3 py-1\r
        disabled:opacity-50\r
      `,children:`>>`})]});return(0,i.jsxs)(i.Fragment,{children:[c>1&&f,(0,i.jsx)(a,{book:u}),c>1&&f]})},s=({book:e=[],catetag:t=[],pubtag:n=[]})=>{let[a,s]=(0,r.useState)(!1),[c,l]=(0,r.useState)(``),[u,d]=(0,r.useState)(``),[f,p]=(0,r.useState)(``),m=Array.isArray(e)?e:[],h=[...new Set(t)],g=[...new Set(n)],_=(0,r.useMemo)(()=>m.filter(e=>{let t=e.Category||``;if(!a&&(t.includes(`アダルト`)||t.includes(`HOTW_Test_アダルト`))||u!==``&&!t.split(`,`).includes(u)||f!==``&&!(e.Publisher||``).split(`,`).includes(f))return!1;if(c!==``){let t=c.toUpperCase();if(!Object.values(e).some(e=>e&&e.toString().toUpperCase().includes(t)))return!1}return!0}),[m,a,u,f,c]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(`div`,{className:`\r
          flex flex-col gap-4\r
          mb-6\r
        `,children:[(0,i.jsxs)(`details`,{children:[(0,i.jsx)(`summary`,{className:`\r
              cursor-pointer\r
              font-bold\r
            `,children:`カテゴリー選択`}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h3`,{className:`font-bold mb-2`,children:`カテゴリー`}),(0,i.jsxs)(`div`,{className:`\r
              flex flex-wrap gap-2\r
            `,children:[(0,i.jsx)(`button`,{onClick:()=>{d(``),p(``),l(``)},className:`\r
                border rounded px-3 py-1\r
              `,children:`全て`}),h.map(e=>(0,i.jsx)(`button`,{onClick:()=>d(e),className:`
                  border rounded px-3 py-1
                  ${u===e?`bg-black text-white`:``}
                `,children:e},e))]})]})]}),(0,i.jsxs)(`details`,{children:[(0,i.jsx)(`summary`,{className:`\r
              cursor-pointer\r
              font-bold\r
            `,children:`出版社選択`}),(0,i.jsxs)(`div`,{className:`\r
              flex flex-wrap gap-2 mt-2\r
            `,children:[(0,i.jsx)(`button`,{onClick:()=>p(``),className:`\r
                border rounded px-3 py-1\r
              `,children:`全て`}),g.map(e=>(0,i.jsx)(`button`,{onClick:()=>p(e),className:`
                  border rounded px-3 py-1
                  ${f===e?`bg-black text-white`:``}
                `,children:e},e))]})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h3`,{className:`font-bold mb-2`,children:`フリーキーワード検索`}),(0,i.jsx)(`input`,{type:`text`,value:c,onChange:e=>l(e.target.value),placeholder:`タイトル・著者・出版社など`,className:`\r
              border rounded\r
              w-full\r
              px-3 py-2\r
            `})]}),(0,i.jsxs)(`label`,{className:`\r
            flex items-center gap-2\r
          `,children:[(0,i.jsx)(`input`,{type:`checkbox`,checked:a,onChange:()=>s(e=>!e)}),`アダルト許可`]})]}),(0,i.jsxs)(`p`,{className:`mb-4`,children:[_.length,`件`]}),(0,i.jsx)(o,{items:_,itemsPerPage:20},`
    ${u}
    ${f}
    ${c}
    ${a}
  `)]})};export{s as default};