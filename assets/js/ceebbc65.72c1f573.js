"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[676],{5469:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var t=i(3159),s=i(431);const d={sidebar_position:1},r="dpChain",c={id:"utilities/dpChain",title:"dpChain",description:"\u547d\u540ddpChain\uff08\u63a8\u8350\uff0c\u53ef\u81ea\u884c\u547d\u540d\uff09\uff0c\u662fdispatch\u7684\u7b80\u5199\uff0c\u610f\u4e3a\u6d3e\u53d1\uff0c\u89e6\u53d1\u4e4b\u610f\uff0c\u94fe\u6761\u5199\u6cd5\uff0c\u597d\u5904\u591a\u591a\uff0c\u6700\u4e3b\u8981\u7684\u5c31\u662f\u53ef\u4ee5\u8df3\u8f6c\u5bf9\u5e94\u7684 Reducer \u548c Thunk \u7684\u4ee3\u7801\u4f4d\u7f6e\u3002",source:"@site/docs/utilities/dpChain.mdx",sourceDirName:"utilities",slug:"/utilities/dpChain",permalink:"/redux-eazy/docs/utilities/dpChain",draft:!1,unlisted:!1,editUrl:"https://dland-team.github.io/redux-eazy/docs/utilities/dpChain.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"dp",permalink:"/redux-eazy/docs/utilities/dp"},next:{title:"createSliceE",permalink:"/redux-eazy/docs/utilities/createSliceE"}},l={},o=[{value:"\u521b\u5efa",id:"\u521b\u5efa",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u89e6\u53d1 Action",id:"\u89e6\u53d1-action",level:3},{value:"\u89e6\u53d1 Reducer",id:"\u89e6\u53d1-reducer",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2}];function a(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"dpchain",children:"dpChain"}),"\n",(0,t.jsxs)(n.p,{children:["\u547d\u540d",(0,t.jsx)(n.strong,{children:"dpChain"}),"\uff08\u63a8\u8350\uff0c\u53ef\u81ea\u884c\u547d\u540d\uff09\uff0c\u662f",(0,t.jsx)(n.code,{children:"dispatch"}),"\u7684\u7b80\u5199\uff0c\u610f\u4e3a",(0,t.jsx)(n.strong,{children:"\u6d3e\u53d1\uff0c\u89e6\u53d1"}),"\u4e4b\u610f\uff0c\u94fe\u6761\u5199\u6cd5\uff0c\u597d\u5904\u591a\u591a\uff0c\u6700\u4e3b\u8981\u7684\u5c31\u662f\u53ef\u4ee5\u8df3\u8f6c\u5bf9\u5e94\u7684 Reducer \u548c Thunk \u7684\u4ee3\u7801\u4f4d\u7f6e\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u521b\u5efa",children:"\u521b\u5efa"}),"\n",(0,t.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u662f\u7531\u4e00\u4e2a",(0,t.jsx)(n.strong,{children:"\u80fd\u89e6\u53d1 store \u72b6\u6001\u66f4\u65b0"}),"\u7684",(0,t.jsx)(n.code,{children:"dispatch"}),"\u7684\u5de5\u5382\u51fd\u6570\u521b\u5efa\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export const dpChain = getDpChain(reduxStore, stores);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\uff08",(0,t.jsx)(n.em,{children:"\u57fa\u672c\u5168\u5c40\u8c03\u7528\u4e00\u6b21\u5373\u53ef"}),"\uff09"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"\u89e6\u53d1-action",children:"\u89e6\u53d1 Action"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'dpChain("appStore").createMenuDataAct();\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u89e6\u53d1-reducer",children:"\u89e6\u53d1 Reducer"}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"storeName (string)"}),': \u4ed3\u5e93\u540d\u79f0\u3002\u4f8b\u5982\uff0c"',(0,t.jsx)(n.code,{children:"appStore"}),'"\u3002',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8fd4\u56de","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"actionName (string)"}),": \u5bf9\u5e94\u7684\u64cd\u4f5c\uff0c\u53ef\u4ee5\u662f\u540c\u6b65\u7684",(0,t.jsx)(n.code,{children:"reducer"}),"\u6216\u8005\u5f02\u6b65",(0,t.jsx)(n.code,{children:"thunk"}),"\uff0c\u90fd\u5c5e\u4e8e",(0,t.jsx)(n.strong,{children:"action"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Promise<{ payload }>"})," payload \u7684\u8fd4\u56de\u503c\u53d6\u51b3\u4e8e thunk \u8fd4\u56de\u7684\u503c\uff0c\u4e0d\u8fd4\u56de\u5c31\u662f\u7a7a\uff0c",(0,t.jsx)(n.strong,{children:"\u5e76\u4e14\u652f\u6301\u7c7b\u578b\u63d0\u793a"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u7c7b\u578b\u652f\u6301\uff0c\u5f53\u4f20\u5165\u4ed3\u5e93\u540d\u5b57\uff0c\u540e\u7eed\u7684\u53c2\u6570\u90fd\u4f1a\u968f\u7740\u524d\u9762\u7684\u53c2\u6570\u8fdb\u884c\u63a8\u5bfc\uff0c\u7c7b\u4f3c\u7ea7\u8054 select \u7684\u4f53\u9a8c\u3002\u8be5\u65b9\u5f0f\u4e3a\u94fe\u65b9\u5f0f\uff0c\u975e\u5e38\u597d\u7528"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},431:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(1855);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);