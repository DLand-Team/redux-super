"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{2119:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=t(3159),o=t(431);const r={sidebar_position:1},i="useResetStore",d={id:"hooks/useResetStore",title:"useResetStore",description:"\u91cd\u5236\u6574\u4e2a Redux \u7684\u6240\u6709 store\u3002",source:"@site/docs/hooks/useResetStore.mdx",sourceDirName:"hooks",slug:"/hooks/useResetStore",permalink:"/redux-eazy/docs/hooks/useResetStore",draft:!1,unlisted:!1,editUrl:"https://dland-team.github.io/redux-eazy/docs/hooks/useResetStore.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useFlatInject",permalink:"/redux-eazy/docs/hooks/useFlatInject"},next:{title:"useSelector",permalink:"/redux-eazy/docs/hooks/useSelector"}},c={},l=[{value:"\u521b\u5efa",id:"\u521b\u5efa",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"<code>storeNames (string[])</code>: \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u9700\u8981\u91cd\u7f6e\u7684\u72b6\u6001\u96c6\u5408\u3002",id:"storenames-string-\u53ef\u9009\u53c2\u6570\u6307\u5b9a\u9700\u8981\u91cd\u7f6e\u7684\u72b6\u6001\u96c6\u5408",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3}];function u(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"useresetstore",children:"useResetStore"}),"\n",(0,n.jsx)(s.p,{children:"\u91cd\u5236\u6574\u4e2a Redux \u7684\u6240\u6709 store\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u521b\u5efa",children:"\u521b\u5efa"}),"\n",(0,n.jsxs)(s.p,{children:["\u8be5\u51fd\u6570\u7531",(0,n.jsx)(s.code,{children:"resetReduxHookCreater"}),"\u5de5\u5382\u51fd\u6570\u521b\u5efa\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"export const useResetRedux = resetReduxHookCreater(stores);\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const reset = useResetRedux();\n\n...\n// \u627e\u4e2a\u4f4d\u7f6e\u6253\u54cd\u6307\uff0c\u6574\u4e2aRedux\u7684\u6240\u6709\u4ed3\u5e93\u90fd\u521d\u59cb\u5316\uff08\u6839\u636estateInit\u521d\u59cb\u5316\uff09\nreset();\n\n// \u5982\u679c\u60f3\u9488\u5bf9\u7279\u5b9a\u7684\u4ed3\u5e93\u8fdb\u884c\u91cd\u7f6e\uff0c\u76f4\u63a5\u4f20\u5165Store\u540d\u79f0\u5373\u53ef\nreset('\u6307\u5b9a\u4e00\u4e2aStore\u540d\u79f0');\n...\n"})}),"\n",(0,n.jsx)(s.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.h4,{id:"storenames-string-\u53ef\u9009\u53c2\u6570\u6307\u5b9a\u9700\u8981\u91cd\u7f6e\u7684\u72b6\u6001\u96c6\u5408",children:[(0,n.jsx)(s.code,{children:"storeNames (string[])"}),": \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u9700\u8981\u91cd\u7f6e\u7684\u72b6\u6001\u96c6\u5408\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,n.jsx)(s.p,{children:"\u4e00\u4e2a\u53ef\u4ee5\u91cd\u7f6e\u7684\u51fd\u6570\u3002\u6253\u4e2a\u54cd\u6307\u8bd5\u8bd5\uff5e"}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"\u5176\u5b9e\u8fd9\u4e2a\u91cd\u7f6e\u6709\u6ca1\u6709\u5fc5\u8981\uff0c\u8fd8\u5f97\u770b\u60c5\u51b5\uff0c\u4ec1\u8005\u89c1\u4ec1\u4e86\u3002"})})]})}function a(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},431:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>d});var n=t(1855);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);