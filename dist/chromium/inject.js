"use strict";(()=>{var t="113",n="113.0.1774.57";var s=()=>{let e=navigator.userAgent,r=e.includes("Macintosh");return e.includes("Edg")||(r?e=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${t}.0.0.0 Safari/537.36 Edg/${n}`:e=`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${t}.0.0.0 Safari/537.36 Edg/${n}`),e};try{let e=s();Object.defineProperty(navigator,"userAgent",{get:()=>e});let r=navigator.userAgentData,o=r?.brands;Array.isArray(o)&&Object.defineProperty(navigator,"userAgentData",{get:()=>({...JSON.parse(JSON.stringify(r)),brands:[{brand:"Microsoft Edge",version:t},{brand:"Chromium",version:t},{brand:"Not-A.Brand",version:"24"}]})})}catch{}})();