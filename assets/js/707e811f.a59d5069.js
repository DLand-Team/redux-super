"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3742],{9581:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(3159),c=n(431);const a={sidebar_position:4},i="createWatchMatcher",o={id:"utilities/createWatchMatcher",title:"createWatchMatcher",description:"\u521b\u5efa\u53ef\u4ee5\u63d0\u4f9b\u7ed9Watch\u5339\u914daction\u7684matcher\u3002",source:"@site/docs/utilities/createWatchMatcher.mdx",sourceDirName:"utilities",slug:"/utilities/createWatchMatcher",permalink:"/redux-eazy/docs/utilities/createWatchMatcher",draft:!1,unlisted:!1,editUrl:"https://dland-team.github.io/redux-eazy/docs/utilities/createWatchMatcher.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"getActionType",permalink:"/redux-eazy/docs/utilities/getActionType"},next:{title:"Creater",permalink:"/redux-eazy/docs/category/creater"}},s={},d=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"createwatchmatcher",children:"createWatchMatcher"}),"\n",(0,r.jsxs)(e.p,{children:["\u521b\u5efa\u53ef\u4ee5\u63d0\u4f9b\u7ed9",(0,r.jsx)(e.code,{children:"Watch"}),"\u5339\u914d",(0,r.jsx)(e.code,{children:"action"}),"\u7684",(0,r.jsx)(e.code,{children:"matcher"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'import { createMatcher } from "redux-eazy";\nimport { dp, getActionType } from "../..";\nimport { startAppListening } from "../../setup";\n\nconst watch = () => {\n\tstartAppListening({\n\t\tmatcher: createMatcher((action) => {\n\t\t\treturn action.type == `${getActionType("appStore").setPagination}`;\n\t\t}),\n\t\teffect: async () => {\n\t\t\tdp("appStore", "queryAct");\n\t\t},\n\t});\n};\n\nexport default watch;\n'})})]})}function p(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},431:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>o});var r=n(1855);const c={},a=r.createContext(c);function i(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:i(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);