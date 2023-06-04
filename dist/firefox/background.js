"use strict";(()=>{var a="https://www.bing.com/";var T=["zh-CN","ru","ru-ru"],m="113",l="113.0.1774.57",u=["csp_report","font","image","main_frame","media","object","other","ping","script","stylesheet","sub_frame","webbundle","websocket","webtransport","xmlhttprequest"];var E="modifyHeaders",g="redirect",O="append",h="set",I=[{action:{type:E,requestHeaders:[{operation:h,header:"sec-ch-ua",value:`"Microsoft Edge";v="${m}", "Chromium";v="${m}", "Not-A.Brand";v="24"`},{operation:h,header:"sec-ch-ua-full-version",value:`"${l}"`},{operation:h,header:"sec-ch-ua-full-version-list",value:`"Microsoft Edge";v="${l}", "Chromium";v="113.0.5672.127", "Not-A.Brand";v="24.0.0.0"`},{operation:h,header:"sec-ms-gec-version",value:`1-${l}`},{operation:h,header:"User-Agent",value:`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${m}.0.0.0 Safari/537.36 Edg/${l}`}]},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:u}},{action:{type:g,redirect:{regexSubstitution:"\\1setlang=zh-Hans&mkt=zh-HK\\2"}},condition:{regexFilter:"(^https:\\/\\/www\\.bing\\.com\\/(?:search|\\?|account/action).*?)(?:mkt=zh-CN|cc=cn|cc=zh-cn|cc=zh)(.*)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:u}},{action:{type:g,redirect:{regexSubstitution:"\\1setlang=ru&cc=clean&mkt=en-us\\2"}},condition:{regexFilter:"(^https:\\/\\/www\\.bing\\.com\\/(?:search|\\?|account/action).*?)(?:mkt=ru-ru|mkt=ru|cc=ru)(.*)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:u}},{action:{type:g,redirect:{url:`${a}?setlang=zh-Hans&mkt=zh-HK`}},condition:{regexFilter:"\\/\\?(?:new-bing-anywhere|nba|run)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:u}},{priority:99,action:{type:g,redirect:{regexSubstitution:`${a}\\1`}},condition:{requestDomains:["cn.bing.com","bing.com"],regexFilter:"^http(?:s)?:\\/\\/(?:cn\\.)?bing\\.com\\/(.*)",resourceTypes:u}},{action:{type:E,responseHeaders:[{header:"Set-Cookie",operation:O,value:"SNRHOP=I=8; domain=.bing.com; path=/; secure; SameSite=None; HttpOnly;"}]},condition:{requestDomains:["bing.com","www.bing.com"]}}].map((e,t)=>({id:t+1,...e}));var x="1.11.0";var f={type:"git",url:"https://github.com/haozi/New-Bing-Anywhere"};var S=()=>chrome.i18n.getUILanguage().toLowerCase()==="zh-cn",A=()=>{let e=chrome.i18n.getUILanguage().toLowerCase();return e==="zh-cn"||e==="zh-tw"||e==="zh-hk"||e==="zh"};var q=()=>{let e=navigator.userAgent,t=e.includes("Macintosh");return e.includes("Edg")||(t?e=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${m}.0.0.0 Safari/537.36 Edg/${l}`:e=`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${m}.0.0.0 Safari/537.36 Edg/${l}`),e};var v=A(),ne=S(),w=!!globalThis.__NBA_isCanary,y=w?`0.${x}`:x;var p=(e="",t)=>{try{return new URL(e,t)}catch{return{searchParams:{get:()=>null}}}},R=e=>{try{return new URLSearchParams(e)}catch{return{get:()=>null}}},L=e=>{chrome.runtime.onMessage.addListener((t,r,n)=>((async()=>{try{let{method:o,args:s}=t,i=await e[o](...s);n({code:200,msg:"ok",data:i})}catch(o){let s=o??{};n({code:500,msg:s.stack??s.message??o})}})(),!0))},c=async e=>{let t=await chrome.tabs.query({currentWindow:!0}),r=p(e),n=t.find(o=>o.url?.startsWith(r.origin));return n==null?n=await chrome.tabs.create({url:e}):await Promise.all([chrome.tabs.move(n.id,{index:t.length-1}),n.url!==e&&chrome.tabs.update(n.id,{url:e}),chrome.tabs.update(n.id,{active:!0,url:n.url!==e?e:void 0})].filter(Boolean)),n},_=async()=>{let r=`${f.url}/issues/new?title=&body=`,n="Please write your comment ABOVE this line, provide as much detailed information and screenshots as possible.The UA may not necessarily reflect your actual browser and platform, so please make sure to indicate them clearly.";v&&(n="\u8BF7\u5728\u6B64\u884C\u4E0A\u65B9\u53D1\u8868\u60A8\u7684\u8BA8\u8BBA\u3002\u8BE6\u5C3D\u7684\u63CF\u8FF0\u548C\u622A\u56FE\u6709\u52A9\u4E8E\u6211\u4EEC\u5B9A\u4F4D\u95EE\u9898\uFF0CUA \u4E0D\u4E00\u5B9A\u771F\u5B9E\u53CD\u6620\u60A8\u7684\u6D4F\u89C8\u5668\u548C\u5E73\u53F0\uFF0C\u8BF7\u5907\u6CE8\u6E05\u695A");let o=` 



<!--  ${n} -->
Version: ${y}${w?" (Canary)":""} 
UA: ${navigator.userAgent}
Lang: ${chrome.i18n.getUILanguage()}
AcceptLangs: ${(await chrome.i18n.getAcceptLanguages()).join(", ")}`;return r+=encodeURIComponent(o.slice(0,2e3)),r},b=async(e,t={})=>await chrome.cookies.set({domain:t.domain,storeId:t.storeId,path:t.path,httpOnly:t.httpOnly,secure:t.secure,sameSite:t.sameSite,expirationDate:t.expirationDate,...e});var k={openChat:{title:"\u{1F4AC} New Bing",contexts:["action"],onclick:e=>{c("https://www.bing.com/search?q=Bing+AI&showconv=1")}},openImageCreate:{title:"\u{1F5BC}\uFE0F New Bing Image Create",contexts:["action"],onclick:e=>{c("https://www.bing.com/create")}},likeIt:{title:"\u2764\uFE0F Like it",contexts:["action"],onclick:()=>{c("https://chrome.google.com/webstore/detail/new-bing-anywhere/hceobhjokpdbogjkplmfjeomkeckkngi/reviews")}},reportIssues:{title:v?"\u{1F41B} \u53CD\u9988\u5EFA\u8BAE":"\u{1F41B} Report issues",contexts:["action"],onclick:async e=>{let t=await _();c(t)}}},H=()=>{chrome.contextMenus.removeAll(()=>{for(let[e,t]of Object.entries(k))chrome.contextMenus.create({id:e,title:t.title,contexts:t.contexts})}),chrome.contextMenus.onClicked.addListener((e,t)=>{let{menuItemId:r}=e,n=k[r];n?.onclick&&n.onclick(e,t)})};var U=()=>{H(),L({getEnv:async()=>({version:y}),openUrlInSameTab:async({url:e}={})=>{let t=await chrome.tabs.query({currentWindow:!0}),r=p(e),n=t.find(B=>B.url?.startsWith(r.origin));n==null?n=await chrome.tabs.create({url:e}):n.id!=null&&await Promise.all([chrome.tabs.move(n.id,{index:t.length-1}),chrome.tabs.update(n.id,{active:!0})]);let o=e,s="",i="",d=r.hostname==="www.google.com",C=r.hostname==="www.bing.com";d?(s=r.searchParams.get("q")??"",i=p(n.url).searchParams.get("q")??"",p(n.url).searchParams.get("q")):C&&(s=r.searchParams.get("q")??"",i=p(n.url).searchParams.get("q")??""),s=s.trim(),i=i.trim(),!(s&&s===i)&&(d?o=`${r.origin}${r.pathname}?q=${encodeURIComponent(s)}`:C&&(o=`${r.origin}${r.pathname}?q=${encodeURIComponent(s)}`),await chrome.tabs.update(n.id,{url:o}))},...(()=>{let t="notification",r="notification:hide",n=async()=>{let o;try{o=await fetch("https://api.github.com/repos/haozi/New-Bing-Anywhere/issues/24").then(async s=>await s.json())}catch{}return o};return{getNotification:async()=>{let{[t]:o}=await chrome.storage.local.get(t);if(!o||o.lastModify&&Date.now()-o.lastModify>36e5){await chrome.storage.local.remove(t);let d=await n();d&&await chrome.storage.local.set({[t]:{data:d,lastModify:Date.now()}})}let{[r]:s,[t]:i}=await chrome.storage.local.get([r,t]);return!i?.data||!(i.data.title&&i.data.state==="open")||s===1&&i.data.title===o.data?.title?null:(await chrome.storage.local.remove(r),i.data)},hideNotification:async()=>{chrome.storage.local.set({[r]:1})}}})()}),chrome.runtime.onInstalled.addListener(e=>{let t=f.url;if(w){c(`${t}/tree/canary`);return}e.reason==="install"?c(t):e.reason==="update"&&c(`${t}/releases/tag/v${y}`)}),chrome.webRequest.onBeforeRequest.addListener(()=>{chrome.cookies.get({name:"_EDGE_S",url:a},e=>{let t=e?.value;if(!t)return;let r=R(t),n=r.get("mkt")?.toLowerCase()??"";T.map(o=>o.toLowerCase()).includes(n)&&(n==="zh-cn"?(r.set("mkt","zh-HK"),r.set("ui","zh-hans")):r.delete("mkt"),b({url:a,name:e.name,value:r.toString()},e))}),chrome.cookies.get({name:"_RwBf",url:a},e=>{let t=e?.value;if(!t){b({url:a,name:"_RwBf",value:"wls=2",domain:".bing.com",httpOnly:!0});return}let r=R(t);r.get("wls")!=="2"&&r.set("wls","2"),b({url:a,name:"_RwBf",domain:".bing.com",httpOnly:!0,value:r.toString()},e)})},{urls:[a+"*"],types:["main_frame"]})};var $={"User-Agent":q()},z="modifyHeaders",F="set",M=[{priority:2001,action:{type:z,requestHeaders:Object.entries($).map(([e,t])=>({operation:F,header:e,value:t}))},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:u}}].map((e,t)=>({id:t+1+2e3,...e}));var D=chrome,P=[...I,...M],j=P.filter(e=>e.action?.type==="modifyHeaders"&&e.action?.requestHeaders?.length),G=P.filter(e=>e.action?.type==="modifyHeaders"&&e.action?.responseHeaders?.length);U();D.webRequest.onBeforeSendHeaders.addListener(e=>{if(!e.requestHeaders)return;let t=e.requestHeaders;for(let r of j){let n=new URL(e.url);if(!r.condition||(r.condition?.requestDomains??[]).includes(n.hostname)||new RegExp(r.condition?.regexFilter??"",r.condition?.isUrlFilterCaseSensitive?"i":void 0).test(n.href)||n.href.includes(r.condition?.urlFilter??""))for(let o of r.action.requestHeaders??[])switch(o.operation){case"set":if(!e.requestHeaders.find(s=>s.name===o.header))t.push({name:o.header,value:o.value});else for(let s of e.requestHeaders)s.name.toLowerCase()===o.header.toLowerCase()&&(s.value=o.value);break;case"append":t.push({name:o.header,value:o.value});break;case"remove":{let s=t.findIndex(i=>i.name.toLowerCase()===o.header.toLowerCase());s>-1&&t.splice(s,1)}break;default:}}return{requestHeaders:t}},{urls:["<all_urls>"]},["blocking","requestHeaders"]);D.webRequest.onHeadersReceived.addListener(e=>{if(!e.responseHeaders)return;let t=e.responseHeaders;for(let r of G)if(new RegExp(r.condition?.regexFilter??"",r.condition?.isUrlFilterCaseSensitive?"i":void 0).test(e.url))for(let n of r.action.responseHeaders??[])switch(n.operation){case"set":for(let o of e.responseHeaders)o.name.toLowerCase()===n.header.toLowerCase()?o.value=n.value:t.push({name:n.header,value:n.value});break;case"append":t.push({name:n.header,value:n.value});break;default:}return{responseHeaders:t}},{urls:["<all_urls>"]},["blocking","responseHeaders"]);})();
