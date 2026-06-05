import{j as e}from"./jsx-runtime.u17CrQMm.js";import{a as x}from"./index.BzTowqF9.js";const N=({book:t=[]})=>{const c=x.useMemo(()=>{if(!Array.isArray(t))return[];const r=t.map(s=>{const h=s.ImageURL_m||s.ImageURL?.replace(/_SL500_/,"_SL160_")||"",a=s.ImageURL_s||s.ImageURL?.replace(/_SL500_/,"_SL75_")||"";return{...s,image_m:h,image_s:a}});return Array.from(new Map(r.map(s=>[s.Asin,s])).values())},[t]);return c.length===0?e.jsx("div",{id:"book",children:"表示する商品がありません"}):e.jsx("div",{id:"book",className:`\r
        max-w-6xl mx-auto px-4 py-6\r
        grid gap-6\r
        grid-cols-2\r
        sm:grid-cols-3\r
        md:grid-cols-4\r
        lg:grid-cols-5\r
      `,children:c.map(r=>{const s=r.Day?`${r.Day.slice(0,4)}/${r.Day.slice(4,6)}/${r.Day.slice(6,8)}`:"不明";return e.jsxs("a",{href:r.URL,target:"_blank",rel:"noopener noreferrer",className:`\r
              bg-white rounded-2xl\r
              shadow hover:shadow-lg\r
              transition overflow-hidden\r
              flex flex-col\r
            `,children:[r.image_s&&e.jsx("div",{className:"aspect-[3/4] bg-gray-100",children:e.jsx("img",{srcSet:`
                    ${r.image_s} 320w,
                    ${r.image_m} 640w,
                    ${r.ImageURL} 1024w
                  `,src:r.image_s,sizes:"(max-width:1280px) 50vw, 1280px",loading:"lazy",alt:r.Title,className:`\r
                    w-full h-full\r
                    object-cover\r
                  `})}),e.jsxs("div",{className:`\r
                p-3 flex flex-col gap-2\r
                break-words\r
              `,children:[e.jsx("div",{className:`\r
                  text-sm font-semibold\r
                  text-gray-900 line-clamp-3\r
                `,children:r.Title}),e.jsxs("div",{className:`\r
                  text-xs text-gray-600\r
                  line-clamp-6\r
                `,children:["価格：",r.Price!=null?`${Number(r.Price)}円`:"なし",e.jsx("br",{}),"ポイント：",r.Points??0,e.jsx("br",{}),r.Contributor,e.jsx("br",{}),"出版社：",r.Publisher,e.jsx("br",{}),"カテゴリー：",r.Category?.split(",").slice(0,3).join(","),e.jsx("br",{}),"発売日：",s]})]})]},r.Asin||r.Title)})})},w=({itemsPerPage:t=20,items:c=[]})=>{const r=Array.isArray(c)?c:[],[s,h]=x.useState(0),a=Math.max(1,Math.ceil(r.length/t)),b=s*t,o=r.slice(b,b+t),l=u=>{h(u),typeof window<"u"&&window.scrollTo({top:0,behavior:"smooth"})},i=e.jsxs("div",{className:`\r
      flex flex-wrap gap-2\r
      justify-center my-6\r
    `,children:[e.jsx("button",{onClick:()=>l(0),disabled:s===0,className:`\r
        border rounded px-3 py-1\r
        disabled:opacity-50\r
      `,children:"<<"}),e.jsx("button",{onClick:()=>l(Math.max(0,s-1)),disabled:s===0,className:`\r
        border rounded px-3 py-1\r
        disabled:opacity-50\r
      `,children:"前へ"}),(()=>{let d=Math.max(0,s-4),p=d+10;return p>a&&(p=a,d=Math.max(0,p-10)),Array.from({length:p-d},(m,g)=>d+g).map(m=>e.jsx("button",{onClick:()=>l(m),className:`
              border rounded px-3 py-1
              ${m===s?"bg-black text-white":""}
            `,children:m+1},m))})(),e.jsx("button",{onClick:()=>l(Math.min(a-1,s+1)),disabled:s===a-1,className:`\r
        border rounded px-3 py-1\r
        disabled:opacity-50\r
      `,children:"次へ"}),e.jsx("button",{onClick:()=>l(a-1),disabled:s===a-1,className:`\r
        border rounded px-3 py-1\r
        disabled:opacity-50\r
      `,children:">>"})]});return e.jsxs(e.Fragment,{children:[a>1&&i,e.jsx(N,{book:o}),a>1&&i]})},k=({book:t=[],catetag:c=[],pubtag:r=[]})=>{const[s,h]=x.useState(!1),[a,b]=x.useState(""),[o,l]=x.useState(""),[i,u]=x.useState(""),d=Array.isArray(t)?t:[],p=[...new Set(c)],m=[...new Set(r)],g=x.useMemo(()=>d.filter(n=>{const f=n.Category||"";if(!s&&(f.includes("アダルト")||f.includes("HOTW_Test_アダルト"))||o!==""&&!f.split(",").includes(o)||i!==""&&!(n.Publisher||"").split(",").includes(i))return!1;if(a!==""){const j=a.toUpperCase();if(!Object.values(n).some(y=>y&&y.toString().toUpperCase().includes(j)))return!1}return!0}),[d,s,o,i,a]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`\r
          flex flex-col gap-4\r
          mb-6\r
        `,children:[e.jsxs("details",{children:[e.jsx("summary",{className:`\r
              cursor-pointer\r
              font-bold\r
            `,children:"カテゴリー選択"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold mb-2",children:"カテゴリー"}),e.jsxs("div",{className:`\r
              flex flex-wrap gap-2\r
            `,children:[e.jsx("button",{onClick:()=>{l(""),u(""),b("")},className:`\r
                border rounded px-3 py-1\r
              `,children:"全て"}),p.map(n=>e.jsx("button",{onClick:()=>l(n),className:`
                  border rounded px-3 py-1
                  ${o===n?"bg-black text-white":""}
                `,children:n},n))]})]})]}),e.jsxs("details",{children:[e.jsx("summary",{className:`\r
              cursor-pointer\r
              font-bold\r
            `,children:"出版社選択"}),e.jsxs("div",{className:`\r
              flex flex-wrap gap-2 mt-2\r
            `,children:[e.jsx("button",{onClick:()=>u(""),className:`\r
                border rounded px-3 py-1\r
              `,children:"全て"}),m.map(n=>e.jsx("button",{onClick:()=>u(n),className:`
                  border rounded px-3 py-1
                  ${i===n?"bg-black text-white":""}
                `,children:n},n))]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold mb-2",children:"フリーキーワード検索"}),e.jsx("input",{type:"text",value:a,onChange:n=>b(n.target.value),placeholder:"タイトル・著者・出版社など",className:`\r
              border rounded\r
              w-full\r
              px-3 py-2\r
            `})]}),e.jsxs("label",{className:`\r
            flex items-center gap-2\r
          `,children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>h(n=>!n)}),"アダルト許可"]})]}),e.jsxs("p",{className:"mb-4",children:[g.length,"件"]}),e.jsx(w,{items:g,itemsPerPage:20},`
    ${o}
    ${i}
    ${a}
    ${s}
  `)]})};export{k as default};
