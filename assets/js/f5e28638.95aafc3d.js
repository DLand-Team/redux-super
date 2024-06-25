"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[194],{8911:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var i=n(3159),a=n(431);const s={sidebar_position:2},c="createSliceE",r={id:"utilities/createSliceE",title:"createSliceE",description:"\u8ddf\u5b98\u65b9createSlice\u57fa\u672c\u7528\u6cd5\u4e00\u81f4\uff0c\u66ff\u4ee3\u4f7f\u7528\u4ee5\u652f\u6301\u5f3a\u5316\u540e\u7684\u529f\u80fd\u3002",source:"@site/docs/utilities/createSliceE.mdx",sourceDirName:"utilities",slug:"/utilities/createSliceE",permalink:"/redux-eazy/docs/utilities/createSliceE",draft:!1,unlisted:!1,editUrl:"https://dland-team.github.io/redux-eazy/docs/utilities/createSliceE.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"dpChain",permalink:"/redux-eazy/docs/utilities/dpChain"},next:{title:"createStoreE",permalink:"/redux-eazy/docs/utilities/createStoreE"}},l={},o=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u6269\u5c55\u7684\u7279\u6027",id:"\u6269\u5c55\u7684\u7279\u6027",level:2},{value:"\u6dfb\u52a0 stateInit \u51fd\u6570\uff0c\u53d6\u4ee3\u539f\u751f initialState",id:"\u6dfb\u52a0-stateinit-\u51fd\u6570\u53d6\u4ee3\u539f\u751f-initialstate",level:3},{value:"\u6dfb\u52a0\u8ba1\u7b97\u5c5e\u6027 computed",id:"\u6dfb\u52a0\u8ba1\u7b97\u5c5e\u6027-computed",level:3}];function d(t){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"createslicee",children:"createSliceE"}),"\n",(0,i.jsxs)(e.p,{children:["\u8ddf\u5b98\u65b9",(0,i.jsx)(e.code,{children:"createSlice"}),"\u57fa\u672c\u7528\u6cd5\u4e00\u81f4\uff0c\u66ff\u4ee3\u4f7f\u7528\u4ee5\u652f\u6301\u5f3a\u5316\u540e\u7684\u529f\u80fd\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4e0d\u540c\u4e4b\u5904\u5c31\u662f\u52a0\u5165\u4e86",(0,i.jsx)(e.code,{children:"stateInit"}),"\u51fd\u6570\u66ff\u4ee3",(0,i.jsx)(e.code,{children:"initialState"}),"\u6765\u914d\u7f6e\u72b6\u6001\u5e93\u7684",(0,i.jsx)(e.strong,{children:"state \u96c6\u5408"})]}),"\n",(0,i.jsx)(e.p,{children:"\u76ee\u7684\u5c31\u662f\u53ef\u4ee5\u652f\u6301\u521d\u59cb\u5316\u64cd\u4f5c\uff0c\u540c\u65f6\u501f\u52a9\u51fd\u6570\u7684\u7279\u6027\u80fd\u591f\u5b9e\u73b0\u66f4\u52a8\u6001\u7684\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'const slice = createSliceE({\n\tname: names.appStore,\n\tstateInit: initialState,\n\tcomputed: {\n\t\ttestCP(state, params: { a: string }) {\n\t\t\treturn { test: state.sign + "" + params.a };\n\t\t},\n\t},\n\treducers: {\n\t\tsetTitle(state, { payload }: PayloadAction<Partial<string>>) {\n\t\t\tstate.title = payload;\n\t\t},\n\t\tsetPagination(state, { payload }: PayloadAction<Partial<Pagination>>) {\n\t\t\tstate.pagination = {\n\t\t\t\t...state.pagination,\n\t\t\t\t...payload,\n\t\t\t};\n\t\t},\n\t\tsetDataList(state, action: PayloadAction<QueryApiRes["data"]>) {\n\t\t\tconst { list = [], total = 0 } = action.payload ?? {};\n\t\t\tstate.dataList = list;\n\t\t\tstate.pagination = {\n\t\t\t\t...state.pagination,\n\t\t\t\ttotal,\n\t\t\t};\n\t\t},\n\t},\n});\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u6269\u5c55\u7684\u7279\u6027",children:"\u6269\u5c55\u7684\u7279\u6027"}),"\n",(0,i.jsx)(e.h3,{id:"\u6dfb\u52a0-stateinit-\u51fd\u6570\u53d6\u4ee3\u539f\u751f-initialstate",children:"\u6dfb\u52a0 stateInit \u51fd\u6570\uff0c\u53d6\u4ee3\u539f\u751f initialState"}),"\n",(0,i.jsxs)(e.p,{children:["\u7528\u51fd\u6570\u6765\u5b9e\u73b0",(0,i.jsx)(e.code,{children:"initialState"}),"\u7684\u521d\u59cb\u5316\uff0c\u4e3a\u6269\u5c55\u7684",(0,i.jsx)(e.strong,{children:"\u521d\u59cb\u5316 Reducer"}),"\u63d0\u4f9b\u5f3a\u529b\u652f\u6301"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6dfb\u52a0\u8ba1\u7b97\u5c5e\u6027-computed",children:"\u6dfb\u52a0\u8ba1\u7b97\u5c5e\u6027 computed"}),"\n",(0,i.jsx)(e.p,{children:"\u8ba1\u7b97\u5c5e\u6027\uff0c\u5373\u5f53\u8fd4\u56de\u7684\u8ba1\u7b97\u5c5e\u6027\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5219\u4f1a\u5237\u65b0\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u4f7f\u7528"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'const App = () => {\n\t...\n\tconst { testValueCP, testObjCP } = useFlat("appStore");\n\ttestValueCP({ a: "123" });\n\ttestObjCP({ a: "123" }).testObj;\n\t...\n};\n'})}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsxs)(e.p,{children:["\u5f53\u4f60\u6267\u884c",(0,i.jsx)(e.code,{children:"testValueCP"}),"\u6216",(0,i.jsx)(e.code,{children:"testObjCP"}),"\u7684\u65f6\u5019\uff0c\u5b9e\u9645\u4e0a\u5c31\u5411\u7ec4\u4ef6\u5185\u6ce8\u5165\u4e86\u8ba1\u7b97\u5c5e\u6027\u72b6\u6001\uff0c\u5f53\u8ba1\u7b97\u5c5e\u6027\u7684\u503c\u53d1\u751f\u53d8\u5316\uff0c\u7ec4\u4ef6\u5c31\u4f1a\u81ea\u52a8\u5237\u65b0\u3002"]}),(0,i.jsx)(e.p,{children:"\u540c\u65f6\uff0c\u4e5f\u652f\u6301\u52a8\u6001\u4f20\u5165\u53c2\u6570\u3002"})]})]})}function p(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},431:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>r});var i=n(1855);const a={},s=i.createContext(a);function c(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:c(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);