"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4356],{4591:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(3159),o=s(431);const r={sidebar_position:1},i="useFlatStore",l={id:"hooks/useFlatStore",title:"useFlatStore",description:"\u53ef\u4ee5\u5c06\u4e00\u4e2astore\u91cc\u7684\u4e0d\u540c\u5185\u5bb9\uff0c\u6241\u5e73\u5bfc\u51fa\u7684hook\u3002",source:"@site/docs/hooks/useFlatStore.mdx",sourceDirName:"hooks",slug:"/hooks/useFlatStore",permalink:"/redux-eazy/docs/hooks/useFlatStore",draft:!1,unlisted:!1,editUrl:"https://dland-team.github.io/redux-eazy/docs/hooks/useFlatStore.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hooks",permalink:"/redux-eazy/docs/category/hooks"},next:{title:"useResetStore",permalink:"/redux-eazy/docs/hooks/useResetStore"}},d={},c=[{value:"\u521b\u5efa",id:"\u521b\u5efa",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"<code>storeName (string)</code>: \u5fc5\u9700\u53c2\u6570\uff0c\u6307\u5b9a\u8981\u8bbf\u95ee\u7684\u72b6\u6001\u5e93\u7684\u540d\u79f0\u3002",id:"storename-string-\u5fc5\u9700\u53c2\u6570\u6307\u5b9a\u8981\u8bbf\u95ee\u7684\u72b6\u6001\u5e93\u7684\u540d\u79f0",level:4},{value:"<code>stateKeys (string[])</code>: \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u9700\u8981\u4f7f\u7528\u7684\u72b6\u6001\u96c6\u5408\u7684\u6570\u7ec4\u3002\u5982\u679c\u672a\u63d0\u4f9b\u8be5\u53c2\u6570\uff0c\u5c06\u9ed8\u8ba4\u8fd4\u56de\u6574\u4e2a\u72b6\u6001\u5e93\u7684\u72b6\u6001\u3002",id:"statekeys-string-\u53ef\u9009\u53c2\u6570\u6307\u5b9a\u9700\u8981\u4f7f\u7528\u7684\u72b6\u6001\u96c6\u5408\u7684\u6570\u7ec4\u5982\u679c\u672a\u63d0\u4f9b\u8be5\u53c2\u6570\u5c06\u9ed8\u8ba4\u8fd4\u56de\u6574\u4e2a\u72b6\u6001\u5e93\u7684\u72b6\u6001",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3}];function a(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"useflatstore",children:"useFlatStore"}),"\n",(0,n.jsx)(t.p,{children:"\u53ef\u4ee5\u5c06\u4e00\u4e2astore\u91cc\u7684\u4e0d\u540c\u5185\u5bb9\uff0c\u6241\u5e73\u5bfc\u51fa\u7684hook\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"\uff08\u8be5\u547d\u540d\u53ef\u7531\u7528\u6237\u81ea\u884c\u51b3\u5b9a\uff09"})}),"\n",(0,n.jsx)(t.h2,{id:"\u521b\u5efa",children:"\u521b\u5efa"}),"\n",(0,n.jsxs)(t.p,{children:["\u8be5\u51fd\u6570\u7531",(0,n.jsx)(t.code,{children:"flatInjectHookCreater"}),"\u5de5\u5382\u51fd\u6570\u521b\u5efa\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export const useFlatStore = flatInjectHookCreater(stores, reduxStore);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'const { title, setTitle } = useFlatStore("appStore");\n'})}),"\n",(0,n.jsx)(t.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.h4,{id:"storename-string-\u5fc5\u9700\u53c2\u6570\u6307\u5b9a\u8981\u8bbf\u95ee\u7684\u72b6\u6001\u5e93\u7684\u540d\u79f0",children:[(0,n.jsx)(t.code,{children:"storeName (string)"}),": \u5fc5\u9700\u53c2\u6570\uff0c\u6307\u5b9a\u8981\u8bbf\u95ee\u7684\u72b6\u6001\u5e93\u7684\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.h4,{id:"statekeys-string-\u53ef\u9009\u53c2\u6570\u6307\u5b9a\u9700\u8981\u4f7f\u7528\u7684\u72b6\u6001\u96c6\u5408\u7684\u6570\u7ec4\u5982\u679c\u672a\u63d0\u4f9b\u8be5\u53c2\u6570\u5c06\u9ed8\u8ba4\u8fd4\u56de\u6574\u4e2a\u72b6\u6001\u5e93\u7684\u72b6\u6001",children:[(0,n.jsx)(t.code,{children:"stateKeys (string[])"}),": \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u9700\u8981\u4f7f\u7528\u7684\u72b6\u6001\u96c6\u5408\u7684\u6570\u7ec4\u3002\u5982\u679c\u672a\u63d0\u4f9b\u8be5\u53c2\u6570\uff0c\u5c06\u9ed8\u8ba4\u8fd4\u56de\u6574\u4e2a\u72b6\u6001\u5e93\u7684\u72b6\u6001\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,n.jsx)(t.p,{children:"\u8be5\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u72b6\u6001\u5e93\u4e2d\u8bf7\u6c42\u7684\u72b6\u6001\u96c6\u5408\u3002\u5982\u679c\u672a\u63d0\u4f9b stateKeys \u53c2\u6570\uff0c\u5219\u8fd4\u56de\u6574\u4e2a\u72b6\u6001\u5e93\u7684\u72b6\u6001\u3002"}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["\u5982\u679c\u4e0d\u8003\u8651\u6027\u80fd\uff0c\u90a3\u4e48\u53ef\u4ee5\u4e0d\u7528\u6307\u5b9a",(0,n.jsx)(t.code,{children:"stateKeys"}),"\uff0c\u76f4\u63a5\u5168\u91cf\u4f9d\u8d56\uff0c\u89e3\u6784\u53d6\u5f97\u4f60\u60f3\u8981\u7684\u5185\u5bb9\uff0c\u72b6\u6001\u5e93\u5982\u679c\u62c6\u5206\u7684\u8db3\u591f\u5408\u7406\uff0c\u5b8c\u5168\u53ef\u4ee5\u3002"]}),(0,n.jsxs)(t.p,{children:["\u4f46\u662f\u5982\u679c\u4f9d\u8d56\u5916\u90e8\u72b6\u6001\u5e93\u7684\u90e8\u5206\u5185\u5bb9\uff0c\u6bd4\u5982\u516c\u7528\u7c7b\u578b\u7684",(0,n.jsx)(t.code,{children:"appStore"}),"\u6216\u8005\u5176\u4ed6\u4e1a\u52a1\u72b6\u6001\u5e93\uff0c\u90a3\u4e48\u975e\u5e38\u5efa\u8bae\u6307\u5b9a\u4f9d\u8d56\u7684\u5185\u5bb9\uff0c\u8fd9\u6837\u53ef\u4ee5\u5f88\u597d\u7684\u63a7\u5236\u5237\u65b0\u7c92\u5ea6\uff0cgood\u5199\u6cd5\uff5e"]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},431:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(1855);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);