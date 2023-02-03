"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[3379],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1638:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const i={id:"expvar",title:"ExpVar",sidebar_position:9},o=void 0,l={unversionedId:"api/middleware/expvar",id:"api/middleware/expvar",title:"ExpVar",description:"Expvar middleware for Fiber that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is /debug/vars.",source:"@site/docs/api/middleware/expvar.md",sourceDirName:"api/middleware",slug:"/api/middleware/expvar",permalink:"/api/middleware/expvar",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/master/docs/api/middleware/expvar.md",tags:[],version:"current",lastUpdatedBy:"Andrew Colin Kissa",lastUpdatedAt:1675409700,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:9,frontMatter:{id:"expvar",title:"ExpVar",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"ETag",permalink:"/api/middleware/etag"},next:{title:"Favicon",permalink:"/api/middleware/favicon"}},p={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Example",id:"example",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],c={toc:s};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Expvar middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/vars"),"."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New() fiber.Handler\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Import the expvar package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "expvar"\n    "fmt"\n\n    "github.com/gofiber/fiber/v2"\n    expvarmw "github.com/gofiber/fiber/v2/middleware/expvar"\n)\n\nvar count = expvar.NewInt("count")\n\nfunc main() {\n    app := fiber.New()\n    app.Use(expvarmw.New())\n    app.Get("/", func(c *fiber.Ctx) error {\n        count.Add(1)\n\n        return c.SendString(fmt.Sprintf("hello expvar count %d", count.Value()))\n    })\n\n    fmt.Println(app.Listen(":3000"))\n}\n')),(0,a.kt)("p",null,"Visit path ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/vars")," to see all vars and use query ",(0,a.kt)("inlineCode",{parentName:"p"},"r=key")," to filter exposed variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl 127.0.0.1:3000\nhello expvar count 1\n\ncurl 127.0.0.1:3000/debug/vars\n{\n    "cmdline": ["xxx"],\n    "count": 1,\n    "expvarHandlerCalls": 33,\n    "expvarRegexpErrors": 0,\n    "memstats": {...}\n}\n\ncurl 127.0.0.1:3000/debug/vars?r=c\n{\n    "cmdline": ["xxx"],\n    "count": 1\n}\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for middleware.\ntype Config struct {    \n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n}\n")),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next: nil,\n}\n")))}d.isMDXComponent=!0}}]);