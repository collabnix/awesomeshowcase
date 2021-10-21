"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[92639],{8893:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var i=n(74034),a=n(79973),r=(n(67294),n(3905)),l=["components"],o={},s="\ud83d\uddd3\ufe0f 2020-10-07 Team Identity: Async Meeting Notes",d={unversionedId:"meeting-notes/2020-10-07",id:"meeting-notes/2020-10-07",isDocsHomePage:!1,title:"\ud83d\uddd3\ufe0f 2020-10-07 Team Identity: Async Meeting Notes",description:"tags: IOTA Identity Meeting",source:"@site/external/identity.rs/documentation/docs/meeting-notes/2020-10-07.md",sourceDirName:"meeting-notes",slug:"/meeting-notes/2020-10-07",permalink:"/identity.rs/meeting-notes/2020-10-07",tags:[],version:"current",frontMatter:{}},u=[{value:"tags: <code>IOTA</code> <code>Identity</code> <code>Meeting</code>",id:"tags-iota-identity-meeting",children:[],level:6},{value:"\u2139\ufe0f Info",id:"\u2139\ufe0f-info",children:[],level:2},{value:"\ud83d\udc65 Participants",id:"-participants",children:[],level:2},{value:"\ud83d\ude4b\u200d Standup",id:"-standup",children:[{value:"\u23ea What was last week&#39;s progress?",id:"-what-was-last-weeks-progress",children:[],level:3},{value:"\u23e9 What will be the focus this week?",id:"-what-will-be-the-focus-this-week",children:[],level:3}],level:2},{value:"\ud83d\udcac Discussion topics",id:"-discussion-topics",children:[{value:"DID Comm / Agents?",id:"did-comm--agents",children:[],level:3},{value:"Feature: Deactivate Identity?",id:"feature-deactivate-identity",children:[],level:3},{value:"Credential Revocation",id:"credential-revocation",children:[],level:3},{value:"Clean PR&#39;s",id:"clean-prs",children:[],level:3},{value:"WASM vs Javascript bindings",id:"wasm-vs-javascript-bindings",children:[],level:3}],level:2},{value:"\u2753 Questions",id:"-questions",children:[{value:"Question #1",id:"question-1",children:[],level:3},{value:"Question #2",id:"question-2",children:[{value:"Init",id:"init",children:[],level:4},{value:"Builder",id:"builder",children:[],level:4}],level:3}],level:2}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-2020-10-07-team-identity-async-meeting-notes"},"\ud83d\uddd3\ufe0f 2020-10-07 Team Identity: Async Meeting Notes"),(0,r.kt)("h6",{id:"tags-iota-identity-meeting"},"tags: ",(0,r.kt)("inlineCode",{parentName:"h6"},"IOTA")," ",(0,r.kt)("inlineCode",{parentName:"h6"},"Identity")," ",(0,r.kt)("inlineCode",{parentName:"h6"},"Meeting")),(0,r.kt)("h2",{id:"\u2139\ufe0f-info"},"\u2139\ufe0f Info"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Location"),": Google Hangouts\n",(0,r.kt)("strong",{parentName:"p"},"Date"),": Wednesday, 2020-10-07 - 17:00 to 18:00 (CEST)\n",(0,r.kt)("strong",{parentName:"p"},"Agenda")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Standup ",(0,r.kt)("inlineCode",{parentName:"li"},"5min")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"Discussion topics ",(0,r.kt)("inlineCode",{parentName:"li"},"45min")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:3},(0,r.kt)("li",{parentName:"ol"},"Questions ",(0,r.kt)("inlineCode",{parentName:"li"},"10min"))))),(0,r.kt)("h2",{id:"-participants"},"\ud83d\udc65 Participants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@elenaf9"),(0,r.kt)("li",{parentName:"ul"},"@Thoralf-M"),(0,r.kt)("li",{parentName:"ul"},"@tensor-programming"),(0,r.kt)("li",{parentName:"ul"},"@JelleMillenaar"),(0,r.kt)("li",{parentName:"ul"},"@l1h3r"),(0,r.kt)("li",{parentName:"ul"},"@nothingismagick"),(0,r.kt)("li",{parentName:"ul"},"@huhn511")),(0,r.kt)("h2",{id:"-standup"},"\ud83d\ude4b\u200d Standup"),(0,r.kt)("h3",{id:"-what-was-last-weeks-progress"},"\u23ea What was last week's progress?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Trusted Ping as DIDComm Message to p2p PoC. "),(0,r.kt)("li",{parentName:"ul"},"Extend WASM Module with core structure."),(0,r.kt)("li",{parentName:"ul"},"@l1h3r: Add signature algorithms to ",(0,r.kt)("inlineCode",{parentName:"li"},"crypto.rs"),". Update ",(0,r.kt)("inlineCode",{parentName:"li"},"libjose")," to use ",(0,r.kt)("inlineCode",{parentName:"li"},"crypto.rs"),". Start working on crate organization/cleanup"),(0,r.kt)("li",{parentName:"ul"},"@Thoralf Create Ed25519 signatures and sign/verify documents with DID from auth key"),(0,r.kt)("li",{parentName:"ul"},"@tensor: Fixed the compression algorithm and worked on various experimental memory/file caching methods."),(0,r.kt)("li",{parentName:"ul"},"@JelleMillenaar: Worked on DID Method Spec & High level library"),(0,r.kt)("li",{parentName:"ul"},"@elenaf9: Implemented a mailbox for p2p communication that enables communication by sending key-value records to a server that then puts them into it's kademlia dht")),(0,r.kt)("h3",{id:"-what-will-be-the-focus-this-week"},"\u23e9 What will be the focus this week?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@l1h3r: Finish crate organization. Update resolver/tangle IO to use generic traits."),(0,r.kt)("li",{parentName:"ul"},"Finish TrustPing Message"),(0,r.kt)("li",{parentName:"ul"},"Create example with signed did document")),(0,r.kt)("h2",{id:"-discussion-topics"},"\ud83d\udcac Discussion topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DID Comm / Agents? "),(0,r.kt)("li",{parentName:"ul"},"Feature: Deactivate Identity?"),(0,r.kt)("li",{parentName:"ul"},"Feature: Credential Revocation"),(0,r.kt)("li",{parentName:"ul"},"Clean PR's"),(0,r.kt)("li",{parentName:"ul"},"WASM vs Javascript bindings?"),(0,r.kt)("li",{parentName:"ul"},"How to flag when to use diff"),(0,r.kt)("li",{parentName:"ul"},"Team Identity Stream")),(0,r.kt)("h3",{id:"did-comm--agents"},"DID Comm / Agents?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PoC Fork: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/huhn511/iota-p2p-poc"},"https://github.com/huhn511/iota-p2p-poc")),(0,r.kt)("li",{parentName:"ul"},"More discussion about TrustedPing and Mailbox (@elenaf9, @nothingismagick, @huhn511)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DIDComm Messages:"),"\nRouting,\nConnections,\nNotification,\nSignature,\nCredentialIssuance,\nReportProblem,\nPresentProof,\nTrustPing,\nDiscoveryFeatures,\nBasicmessage,\nUnknown(String)"),(0,r.kt)("h3",{id:"feature-deactivate-identity"},"Feature: Deactivate Identity?"),(0,r.kt)("p",null,"The latest DID entry in the chain need to be empty ( empty = signet DIDDocument, no public key, no endpoints, ... )."),(0,r.kt)("p",null,"-> functionality to high level lib."),(0,r.kt)("p",null,"TODO: Write an example about this"),(0,r.kt)("h3",{id:"credential-revocation"},"Credential Revocation"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is a important topic."))),(0,r.kt)("p",null,"Example: Revoke a driver license"),(0,r.kt)("h3",{id:"clean-prs"},"Clean PR's"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"will be discussed in the next meeting")),(0,r.kt)("h3",{id:"wasm-vs-javascript-bindings"},"WASM vs Javascript bindings"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"will be discussed in the next meeting"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/blob/Feat(bindings)/add-wasm-binding/libraries/wasm/examples/web.js"},"WASM/JS Example")),(0,r.kt)("h2",{id:"-questions"},"\u2753 Questions"),(0,r.kt)("h3",{id:"question-1"},"Question #1"),(0,r.kt)("p",null,"Q1: DIDComm Body."),(0,r.kt)("p",null,"This is valid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json="},'body: { key: "foo" } \n')),(0,r.kt)("p",null,"Is this valid? "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json="},'\nbody: "foo" \n')),(0,r.kt)("p",null,"A1: This is not valid. The body need to be a object: ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/"},"The body of a message \u2013 everything inside the body ",(0,r.kt)("strong",{parentName:"a"},"object"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"question-2"},"Question #2"),(0,r.kt)("p",null,"Q2: We discovered the repo and figured out, that we have 2 different code styles to build structs and use the library. Sould we focus for one style or support both?"),(0,r.kt)("p",null,"@tensor -> preference towards ",(0,r.kt)("inlineCode",{parentName:"p"},"the builder pattern")," if we use macros to generate the builder and the associated methods. "),(0,r.kt)("h4",{id:"init"},"Init"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust="},' let did = DID {\n        method_name: "iota".into(),\n        id_segments: vec!["123456".into()],\n        ..Default::default()\n    }\n    .init()\n    .unwrap();\n')),(0,r.kt)("h4",{id:"builder"},"Builder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust="},'let credential = CredentialBuilder::new()\n        .issuer("did:example:issuer")\n        .context("https://www.w3.org/2018/credentials/examples/v1")\n        .context(object!(id: "did:context:1234", type: "CustomContext2020"))\n        .id("did:example:123")\n        .type_("RelationshipCredential")\n        .try_subject(object!(id: "did:iota:alice", spouse: "did:iota:bob"))\n        .unwrap()\n        .try_subject(object!(id: "did:iota:bob", spouse: "did:iota:alice"))\n        .unwrap()\n        .issuance_date(issuance)\n        .build()\n        .unwrap();\n')),(0,r.kt)("p",null,"A2:"))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);