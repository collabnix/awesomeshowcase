"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[69389],{55313:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),c=["components"],i={description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",image:"/img/logo/WASP_logo_dark.png",keywords:["ISCP","core","initialization","request handling","on-chain ledger","accounts","data","receipts"]},s="Core Contracts",l={unversionedId:"guide/core_concepts/core_contracts/overview",id:"guide/core_concepts/core_contracts/overview",isDocsHomePage:!1,title:"Core Contracts",description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/core_contracts/overview.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/overview",permalink:"/wasp/guide/core_concepts/core_contracts/overview",tags:[],version:"current",frontMatter:{description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",image:"/img/logo/WASP_logo_dark.png",keywords:["ISCP","core","initialization","request handling","on-chain ledger","accounts","data","receipts"]},sidebar:"tutorialSidebar",previous:{title:"Sandbox Interface",permalink:"/wasp/guide/core_concepts/sandbox"},next:{title:"The `root` Contract",permalink:"/wasp/guide/core_concepts/core_contracts/root"}},p=[],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"core-contracts"},"Core Contracts"),(0,a.kt)("p",null,"There are currently 6 core smart contracts that are always deployed on each\nchain. These are responsible for the vital functions of the chain and\nprovide infrastructure for all other smart contracts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/root"},(0,a.kt)("strong",{parentName:"a"},"root"))," - Responsible for the initialization of the chain, maintains registry of deployed contracts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/default"},(0,a.kt)("strong",{parentName:"a"},"_default")),": Any request that cannot be handled by any of the\nother deployed contracts ends up here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/accounts"},(0,a.kt)("strong",{parentName:"a"},"accounts")),": Responsible for the on-chain ledger of accounts (who owns what).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/blob"},(0,a.kt)("strong",{parentName:"a"},"blob")),": Responsible for the immutable registry of binary objects of arbitrary size. One blob is a collection of named binary chunks of data. For\nexample, a blob can be used to store a collections of ",(0,a.kt)("em",{parentName:"p"},"wasm")," binaries, needed\nto deploy ",(0,a.kt)("em",{parentName:"p"},"WebAssembly")," smart contracts. Each blob in the registry is\nreferenced by its hash which is deterministically calculated from its data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/blocklog"},(0,a.kt)("strong",{parentName:"a"},"blocklog")),": Keeps track of the blocks and receipts of requests which were processed by the chain. It also contains all events emitted by smart contracts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/governance"},(0,a.kt)("strong",{parentName:"a"},"governance")),": Handles the administrative functions of the chain. For example: rotation of the committee of validators of the chain, fees and other chain-specific configurations."))))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);