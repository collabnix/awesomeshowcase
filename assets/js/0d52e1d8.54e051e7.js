"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[42567],{92479:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var a=t(74034),o=t(79973),i=(t(67294),t(3905)),r=["components"],s={},p="How to run a Wasp node",l={unversionedId:"misc/runwasp",id:"misc/runwasp",isDocsHomePage:!1,title:"How to run a Wasp node",description:"Here we describe step-by-step instructions how to run Wasp nodes on a Goshimmer network.",source:"@site/external/wasp/documentation/docs/misc/runwasp.md",sourceDirName:"misc",slug:"/misc/runwasp",permalink:"/wasp/misc/runwasp",tags:[],version:"current",frontMatter:{}},d=[{value:"Step 1: Compile &amp; install Wasp",id:"step-1-compile--install-wasp",children:[],level:2},{value:"Step 2: Run Goshimmer",id:"step-2-run-goshimmer",children:[{value:"Option 1: follow the official docs",id:"option-1-follow-the-official-docs",children:[],level:3},{value:"Option 2: compile &amp; run Goshimmer",id:"option-2-compile--run-goshimmer",children:[],level:3}],level:2},{value:"Run Wasp",id:"run-wasp",children:[{value:"Wasp settings",id:"wasp-settings",children:[{value:"Peering",id:"peering",children:[],level:4},{value:"Goshimmer connection settings",id:"goshimmer-connection-settings",children:[],level:4},{value:"Publisher",id:"publisher",children:[],level:4},{value:"Web API",id:"web-api",children:[],level:4},{value:"Dashboard",id:"dashboard",children:[],level:4}],level:3}],level:2},{value:"Now what?",id:"now-what",children:[],level:2}],m={toc:d};function c(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-run-a-wasp-node"},"How to run a Wasp node"),(0,i.kt)("p",null,"Here we describe step-by-step instructions how to run Wasp nodes on a Goshimmer network."),(0,i.kt)("p",null,"You will need the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," commands installed in the system, and\naccess to a Goshimmer node."),(0,i.kt)("h2",{id:"step-1-compile--install-wasp"},"Step 1: Compile & install Wasp"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," commands can be installed from this repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/iotaledger/wasp.git\n$ cd wasp\n$ make install\n")),(0,i.kt)("h2",{id:"step-2-run-goshimmer"},"Step 2: Run Goshimmer"),(0,i.kt)("h3",{id:"option-1-follow-the-official-docs"},"Option 1: follow the official docs"),(0,i.kt)("p",null,"Please find detailed instructions on how to run a Goshimmer node\n",(0,i.kt)("a",{parentName:"p",href:"https://goshimmer.docs.iota.org/docs/tutorials/setup/"},"here"),".  This option\nuses the official Goshimmer Docker image, so you will need Docker and Docker\nCompose installed in your system."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The only change necessary from those instructions is to add some\nplugins to ",(0,i.kt)("inlineCode",{parentName:"p"},"node.enablePlugins"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"txstream"),": used by Wasp nodes to connect to the Goshimmer node"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"faucet"),": required by the ",(0,i.kt)("inlineCode",{parentName:"li"},"wasp-cli request-funds")," command")))),(0,i.kt)("h3",{id:"option-2-compile--run-goshimmer"},"Option 2: compile & run Goshimmer"),(0,i.kt)("p",null,"Alternatively, you can compile the ",(0,i.kt)("inlineCode",{parentName:"p"},"goshimmer")," command and run it without\nDocker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/iotaledger/goshimmer.git\n$ cd goshimmer\n$ go install -tags rocksdb\n")),(0,i.kt)("p",null,"Then, create an empty working directory for Goshimmer, and download the\n",(0,i.kt)("inlineCode",{parentName:"p"},"snapshot.bin")," file needed for bootstrap:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mkdir goshimmer-node\n$ cd goshimmer-node\n$ wget -O snapshot.bin https://dbfiles-goshimmer.s3.eu-central-1.amazonaws.com/snapshots/nectar/snapshot-latest.bin\n")),(0,i.kt)("p",null,"Start the GoShimmer node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ goshimmer \\\n        --skip-config=true \\\n        --analysis.client.serverAddress=ressims.iota.cafe:21888 \\\n        --autopeering.port=14626 \\\n        --dashboard.bindAddress=0.0.0.0:8081 \\\n        --gossip.port=14666 \\\n        --webapi.bindAddress=0.0.0.0:8080 \\\n        --profiling.bindAddress=0.0.0.0:6061 \\\n        --networkdelay.originPublicKey=9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd \\\n        --fpc.bindAddress=0.0.0.0:10895 \\\n        --prometheus.bindAddress=0.0.0.0:9311 \\\n        --autopeering.entryNodes=2PV5487xMw5rasGBXXWeqSi4hLz7r19YBt8Y1TGAsQbj@ressims.iota.cafe:15626,5EDH4uY78EA6wrBkHHAVBWBMDt7EcksRq6pjzipoW15B@entryshimmer.tanglebay.com:14646 \\\n        --node.disablePlugins= \\\n        --node.enablePlugins=remotelog,networkdelay,spammer,prometheus,faucet,txstream \\\n        --faucet.seed=7R1itJx5hVuo9w9hjg5cwKFmek4HMSoBDgJZN8hKGxih \\\n        --logger.level=info \\\n        --logger.disableEvents=false \\\n        --logger.remotelog.serverAddress=ressims.iota.cafe:5213 \\\n        --drng.pollen.instanceId=1 \\\n        --drng.pollen.threshold=3 \\\n        --drng.pollen.committeeMembers=AheLpbhRs1XZsRF8t8VBwuyQh9mqPHXQvthV5rsHytDG,FZ28bSTidszUBn8TTCAT9X1nVMwFNnoYBmZ1xfafez2z,GT3UxryW4rA9RN9ojnMGmZgE2wP7psagQxgVdA4B9L1P,4pB5boPvvk2o5MbMySDhqsmC2CtUdXyotPPEpb7YQPD7,64wCsTZpmKjRVHtBKXiFojw7uw3GszumfvC4kHdWsHga \\\n        --drng.xteam.instanceId=1339 \\\n        --drng.xteam.threshold=4 \\\n        --drng.xteam.committeeMembers=GUdTwLDb6t6vZ7X5XzEnjFNDEVPteU7tVQ9nzKLfPjdo,68vNzBFE9HpmWLb2x4599AUUQNuimuhwn3XahTZZYUHt,Dc9n3JxYecaX3gpxVnWb4jS3KVz1K1SgSK1KpV1dzqT1,75g6r4tqGZhrgpDYZyZxVje1Qo54ezFYkCw94ELTLhPs,CN1XLXLHT9hv7fy3qNhpgNMD6uoHFkHtaNNKyNVCKybf,7SmttyqrKMkLo5NPYaiFoHs8LE6s7oCoWCQaZhui8m16,CypSmrHpTe3WQmCw54KP91F5gTmrQEL7EmTX38YStFXx\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Argument values are adapted from the ",(0,i.kt)("a",{parentName:"p",href:"https://goshimmer.docs.iota.org/docs/tutorials/setup/"},"official\ninstructions"),". You may\nneed to adjust them if they are outdated."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"by default the TXStream plugin will be listening for Wasp connections on port ",(0,i.kt)("inlineCode",{parentName:"p"},"5000"),".\nTo change this setting you can add the argument ",(0,i.kt)("inlineCode",{parentName:"p"},"--txstream.port: 12345"),"."))),(0,i.kt)("h2",{id:"run-wasp"},"Run Wasp"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'It is possible to run a "committee" composed of a single Wasp node, and\nthis may be fine for testing purposes. However, in normal operation the idea is\nto have multiple Wasp nodes in order to run the smart contracts in a\ndistributed fashion. If you want to run a committee of several nodes on the\nsame machine, ensure that each Wasp instance runs in separate directory with\nits own ',(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," and database. Ports and other settings must be adjusted\naccordingly."),(0,i.kt)("p",{parentName:"div"},"Also, for testing purposes, all Wasp nodes can be connected to the same\nGoshimmer instance.  In normal operation, it is recommended for each Wasp node\nto connect to a different Goshimmer instance."))),(0,i.kt)("p",null,"Create an empty working directory for the Wasp node, copy the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/master/config.json"},(0,i.kt)("inlineCode",{parentName:"a"},"config.json")),"\nfile, and change it as needed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mkdir wasp-node\n$ cp config.json wasp-node\n$ <edit wasp-node/config.json>\n")),(0,i.kt)("p",null,"Finally, start the Wasp node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ cd wasp-node\n$ wasp\n")),(0,i.kt)("p",null,"You can check that your node is running by opening the dashboard with a web\nbrowser at ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7000"),"."),(0,i.kt)("p",null,"Repeat this process to launch as many nodes as you want for your committee."),(0,i.kt)("p",null,"After starting all the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp")," nodes, one should make them trust each other.\nOperators of the nodes should do that manually. That's their responsibility to\naccept trusted nodes only."),(0,i.kt)("p",null,"The operator can read its node's public key and NetID by running ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli peering info"),", e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ wasp-cli peering info\nPubKey: 8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM\nNetID:  127.0.0.1:4000\n")),(0,i.kt)("p",null,"PubKey and NetID should be provided to other node operators.\nThey can use this info to trust your node and accept communications with it.\nThat's done by invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli peering trust <PubKey> <NetID>"),", e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ wasp-cli peering list-trusted\n$ wasp-cli peering trust 8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM 127.0.0.1:4000\n$ wasp-cli peering list-trusted\n------                                        -----\nPubKey                                        NetID\n------                                        -----\n8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM  127.0.0.1:4000\n")),(0,i.kt)("p",null,"All the nodes in a committee must trust each other to run the chain."),(0,i.kt)("p",null,"That's it!"),(0,i.kt)("h3",{id:"wasp-settings"},"Wasp settings"),(0,i.kt)("p",null,"Below we explain some settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," you may need to adjust. You\nwill need to adjust ports especially if you plan to run several nodes in the\nsame host."),(0,i.kt)("h4",{id:"peering"},"Peering"),(0,i.kt)("p",null,"Wasp nodes connect to other Wasp peers to form committees. There is exactly one\nTCP connection between two Wasp nodes participating in the same committee. Each\nnode uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"peering.port")," setting to specify the port for peering."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"peering.netid")," must have the form ",(0,i.kt)("inlineCode",{parentName:"p"},"host:port"),", with ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," equal to\n",(0,i.kt)("inlineCode",{parentName:"p"},"peering.port"),", and where ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," must resolve to the machine where the node is\nrunning, and must be reachable by other nodes in the committee. Each node in a\ncommittee must have a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"netid"),"."),(0,i.kt)("h4",{id:"goshimmer-connection-settings"},"Goshimmer connection settings"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nodeconn.address")," specifies the Goshimmer host and port (exposed by the TXStream plugin) to\nconnect to."),(0,i.kt)("h4",{id:"publisher"},"Publisher"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nanomsg.port")," specifies the port for the Nanomsg event publisher. Wasp nodes\npublish important events happening in smart contracts, such as state\ntransitions, incoming and processed requests and similar.  Any Nanomsg client\ncan subscribe to these messages. More about the Publisher ",(0,i.kt)("a",{parentName:"p",href:"/wasp/misc/publisher"},"here"),"."),(0,i.kt)("h4",{id:"web-api"},"Web API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"webapi.bindAddress")," specifies the bind address/port for the Web API, used by\n",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," and other clients to interact with the Wasp node."),(0,i.kt)("h4",{id:"dashboard"},"Dashboard"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dashboard.bindAddress")," specifies the bind address/port for the node dashboard,\nwhich can be accessed with a web browser."),(0,i.kt)("h2",{id:"now-what"},"Now what?"),(0,i.kt)("p",null,"Now that you have one or more Wasp nodes you can use the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/tools/wasp-cli"},(0,i.kt)("inlineCode",{parentName:"a"},"wasp-cli"))," tool to ",(0,i.kt)("a",{parentName:"p",href:"/wasp/misc/deploy"},"deploy a chain and smart\ncontracts"),"."))}c.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),h=o,u=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return t?a.createElement(u,r(r({ref:n},d),{},{components:t})):a.createElement(u,r({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);