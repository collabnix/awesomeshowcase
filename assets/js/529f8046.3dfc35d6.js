"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[43860],{47143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(74034),o=n(79973),r=(n(67294),n(3905)),i=n(31137),c=n(71871),s=["components"],l={keywords:["functions","views","Funcs","ScFuncContext","ScViewContext","ScExports"],description:"The function call context provides as a predefined parameter to the smart contract function and allows you to access the functionality that the host sandbox interface provides.",image:"/img/logo/WASP_logo_dark.png"},u="Function Call Context",d={unversionedId:"guide/wasm_vm/context",id:"guide/wasm_vm/context",isDocsHomePage:!1,title:"Function Call Context",description:"The function call context provides as a predefined parameter to the smart contract function and allows you to access the functionality that the host sandbox interface provides.",source:"@site/external/wasp/documentation/docs/guide/wasm_vm/context.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/context",permalink:"/wasp/guide/wasm_vm/context",tags:[],version:"current",frontMatter:{keywords:["functions","views","Funcs","ScFuncContext","ScViewContext","ScExports"],description:"The function call context provides as a predefined parameter to the smart contract function and allows you to access the functionality that the host sandbox interface provides.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"WasmLib Data Types",permalink:"/wasp/guide/wasm_vm/types"},next:{title:"Smart Contract Schema Tool",permalink:"/wasp/guide/schema/schema"}},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-call-context"},"Function Call Context"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/wasm_vm/proxies"},"Proxy objects")," provide generic access capabilities to the data on the host. It\nis now time to introduce the gateway to the host that allows you to access the\nfunctionality that the host sandbox interface provides. We call this gateway the ",(0,r.kt)("em",{parentName:"p"},"function\ncall context"),"\n, and it is provided as a predefined parameter to the smart contract function. In fact, you can\ndistinguish two separate flavors of smart contract functions in the ISCP:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Func"),", which allows full mutable access to the smart contract state, and always\nresults in a state update."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"View"),", which allows only limited, immutable access to the smart contract state, and\ntherefore does not result in a state update. Views can be used to efficiently query the\ncurrent state of the smart contract.")),(0,r.kt)("p",null,"To support this function type distinction, Func and View functions each receive a\nseparate, different function call context. Only the functionality that is necessary for\ntheir implementation can be accessed through their respective contexts,\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"ScFuncContext"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"ScViewContext"),". ScViewContext only provides a limited, immutable subset of the full\nfunctionality provided by ScFuncContext. By having separate context types, compile-time\ntype-checking can be used to enforce their usage constraints."),(0,r.kt)("p",null,"An important part of setting up a smart contract is defining exactly which Funcs and Views\nare available and informing the host about them. The host will have to dispatch\nthe function calls to the corresponding smart contract code. To that end, the smart\ncontract Wasm code will expose an externally callable function named ",(0,r.kt)("inlineCode",{parentName:"p"},"on_load")," that will\nbe called by the host upon initial loading of the smart contract code. The ",(0,r.kt)("inlineCode",{parentName:"p"},"on_load"),"\nfunction must provide the host with the list of Funcs and Views, and specific identifiers\nthat can be used to invoke them. It uses a special temporary function context named\n",(0,r.kt)("inlineCode",{parentName:"p"},"ScExports"),". That context can be used to provide the host with a function, type, name, and\nidentifier for each Func and View that can be called in the smart contract."),(0,r.kt)("p",null,"When the host calls a smart contract function it has to do it by invoking a second\nexternally callable function named ",(0,r.kt)("inlineCode",{parentName:"p"},"on_call"),". The host passes the identifier for the smart\ncontract Func or View that needs to be invoked. The client Wasm code will then use this\nidentifier to set up the corresponding function context and call the function. Note that\nthere are no other parameters necessary because the function can subsequently access any\nother function-related data through its context object."),(0,r.kt)("p",null,"Here is a (simplified) example from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," example smart contract that showcases some features of WasmLib:"),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func OnLoad() {\n    exports := wasmlib.NewScExports()\n    exports.AddFunc("divide", funcDivide)\n    exports.AddFunc("init", funcInit)\n    exports.AddFunc("member", funcMember)\n    exports.AddFunc("setOwner", funcSetOwner)\n    exports.AddView("getFactor", viewGetFactor)\n    exports.AddView("getOwner", viewGetOwner)\n}\n'))),(0,r.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn on_load() {\n    let exports = ScExports::new();\n    exports.add_func("divide", func_divide);\n    exports.add_func("init", func_init);\n    exports.add_func("member", func_member);\n    exports.add_func("setOwner", func_set_owner);\n    exports.add_view("getFactor", view_get_factor);\n    exports.add_view("getOwner", view_get_owner);\n}\n')))),(0,r.kt)("p",null,"The on_load() function first creates the required ScExports context, and\nthen proceeds to define four Funcs named ",(0,r.kt)("inlineCode",{parentName:"p"},"divide"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"member"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"setOwner"),". It\ndoes this by calling the add_func() method of the ScExports context. Next it defines two\nViews named ",(0,r.kt)("inlineCode",{parentName:"p"},"getFactor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getOwner")," by calling the add_view() method of the ScExports\ncontext. The second parameter to these methods is the actual smart contract function\nassociated with the name specified. These methods will also automatically assign a unique\nidentifier to the function and then send everything to the host."),(0,r.kt)("p",null,"In its simplest form this is all that is necessary to initialize a smart contract. To\nfinalize this example, here is what the skeleton function implementations for the above\nsmart contract definition would look like:"),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func funcDivide(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcDivide")\n}\n\nfunc funcInit(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcInit")\n}\n\nfunc funcMember(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcMember")\n}\n\nfunc funcSetOwner(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcSetOwner")\n}\n\nfunc viewGetFactor(ctx wasmlib.ScViewContext) {\n    ctx.Log("dividend.viewGetFactor")\n}\n\nfunc viewGetOwner(ctx wasmlib.ScViewContext) {\n    ctx.Log("dividend.viewGetOwner")\n}\n'))),(0,r.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn func_divide(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.divide");\n}\n\nfn func_init(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.init");\n}\n\nfn func_member(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.member");\n}\n\nfn func_set_owner(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.setOwner");\n}\n\nfn view_get_factor(ctx: &ScViewContext) {\n    ctx.log("Calling dividend.getFactor");\n}\n\nfn view_get_owner(ctx: &ScViewContext) {\n    ctx.log("Calling dividend.getOwner");\n}\n')))),(0,r.kt)("p",null,"As you can see, each function is provided with a context parameter, which is\nconventionally named ",(0,r.kt)("em",{parentName:"p"},"ctx"),". Notice that the four Funcs are passed an ScFuncContext,\nwhereas the two Views receive an ScViewContext."),(0,r.kt)("p",null,"This example also showcases an important feature of the contexts: the ",(0,r.kt)("inlineCode",{parentName:"p"},"log()")," method.\nThis can be used to log human-readable text to the host's log output.\nLogging text is the only way to add tracing to a smart contract,\nbecause it does not have any I/O capabilities other than what the host provides. There is\na second logging method, called ",(0,r.kt)("inlineCode",{parentName:"p"},"trace()"),", that can be used to provide extra debug\ninformation to the host's log output. This output can be selectively turned on and off at\nthe host."),(0,r.kt)("p",null,"In the next section we will introduce the ",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/schema"},(0,r.kt)("inlineCode",{parentName:"a"},"schema"))," tool that\nsimplifies smart contract programming a lot."))}f.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(74034),o=n(67294),r=n(5730),i=n(54179);var c=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(29085),l=n(86010),u="tabItem_1uMI";function d(e){var t,n,a,r=e.lazy,i=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),w=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=c(),b=g.tabGroupChoices,y=g.setTabGroupChoices,k=(0,o.useState)(x),C=k[0],T=k[1],_=[],N=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=b[m];null!=O&&O!==C&&v.some((function(e){return e.value===O}))&&T(O)}var S=function(e){var t=e.currentTarget,n=_.indexOf(t),a=v[n].value;a!==C&&(N(t),T(a),null!=m&&y(m,a))},F=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var o=_.indexOf(e.currentTarget)-1;n=_[o]||_[_.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},v.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":C===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:F,onFocus:S,onClick:S},null!=n?n:t)}))),r?(0,o.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},54179:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);