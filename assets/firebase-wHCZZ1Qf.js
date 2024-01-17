var di={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=function(e,t){if(!e)throw Yu(t)},Yu=function(e){return new Error("Firebase Database ("+_o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ju=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,u=s+2<e.length,c=u?e[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;u||(p=64,o||(d=64)),r.push(n[l],n[h],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ju(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new Zu;const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const P=c<<6&192|h;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Zu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tc=function(e){const t=yo(e);return Eo.encodeByteArray(t,!0)},Rn=function(e){return tc(e).replace(/\./g,"")},Mr=function(e){try{return Eo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(e){return vo(void 0,e)}function vo(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!ec(n)||(e[n]=vo(e[n],t[n]));return e}function ec(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=()=>nc().__FIREBASE_DEFAULTS__,sc=()=>{if(typeof process>"u"||typeof di>"u")return;const e=di.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ic=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Mr(e[1]);return t&&JSON.parse(t)},hs=()=>{try{return rc()||sc()||ic()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},oc=e=>{var t,n;return(n=(t=hs())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ac=e=>{const t=oc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},To=()=>{var e;return(e=hs())===null||e===void 0?void 0:e.config},Om=e=>{var t;return(t=hs())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Rn(JSON.stringify(n)),Rn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lc())}function xm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Lm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fm(){return _o.NODE_ADMIN===!0}function hc(){try{return typeof indexedDB=="object"}catch{return!1}}function dc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="FirebaseError";class fe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=fc,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Io.prototype.create)}}class Io{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?mc(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new fe(s,a,r)}}function mc(e,t){return e.replace(pc,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const pc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e){return JSON.parse(e)}function Um(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=function(e){let t={},n={},r={},s="";try{const i=e.split(".");t=fi(Mr(i[0])||""),n=fi(Mr(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:s}},Bm=function(e){const t=Ao(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jm=function(e){const t=Ao(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function $m(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function zm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Km(e,t,n){const r={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=t.call(n,e[s],s,e));return r}function xr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(mi(i)&&mi(o)){if(!xr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function mi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let h=0;h<16;h++)r[h]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,l;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),l=1518500249):(c=i^o^a,l=1859775393):h<60?(c=i&o|a&(i|o),l=2400959708):(c=i^o^a,l=3395469782);const d=(s<<5|s>>>27)+c+u+l+r[h]&4294967295;u=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<n;)if(i[o]=t.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=t[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)t[r]=this.chain_[s]>>i&255,++r;return t}}function Wm(e,t){const n=new gc(e,t);return n.subscribe.bind(n)}class gc{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_c(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=yr),s.error===void 0&&(s.error=yr),s.complete===void 0&&(s.complete=yr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _c(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function yr(){}function Qm(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,Xu(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ym=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return e&&e._delegate?e._delegate:e}class Ne{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new uc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vc(t))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Mt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mt){return this.instances.has(t)}getOptions(t=Mt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ec(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Mt){return this.component?this.component.multipleInstances?t:Mt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ec(e){return e===Mt?void 0:e}function vc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new yc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const Ic={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Ac=V.INFO,wc={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Rc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=wc[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wo{constructor(t){this.name=t,this._logLevel=Ac,this._logHandler=Rc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ic[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Pc=(e,t)=>t.some(n=>e instanceof n);let pi,gi;function Sc(){return pi||(pi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cc(){return gi||(gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ro=new WeakMap,Lr=new WeakMap,Po=new WeakMap,Er=new WeakMap,ds=new WeakMap;function Vc(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(St(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ro.set(n,e)}).catch(()=>{}),ds.set(t,e),t}function Dc(e){if(Lr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Lr.set(e,t)}let Fr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Lr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Po.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function bc(e){Fr=e(Fr)}function kc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(vr(this),t,...n);return Po.set(r,t.sort?t.sort():[t]),St(r)}:Cc().includes(e)?function(...t){return e.apply(vr(this),t),St(Ro.get(this))}:function(...t){return St(e.apply(vr(this),t))}}function Nc(e){return typeof e=="function"?kc(e):(e instanceof IDBTransaction&&Dc(e),Pc(e,Sc())?new Proxy(e,Fr):e)}function St(e){if(e instanceof IDBRequest)return Vc(e);if(Er.has(e))return Er.get(e);const t=Nc(e);return t!==e&&(Er.set(e,t),ds.set(t,e)),t}const vr=e=>ds.get(e);function Oc(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=St(o);return r&&o.addEventListener("upgradeneeded",u=>{r(St(o.result),u.oldVersion,u.newVersion,St(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Mc=["get","getKey","getAll","getAllKeys","count"],xc=["put","add","delete","clear"],Tr=new Map;function _i(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Tr.get(t))return Tr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=xc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Mc.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return Tr.set(t,i),i}bc(e=>({...e,get:(t,n,r)=>_i(t,n)||e.get(t,n,r),has:(t,n)=>!!_i(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ur="@firebase/app",yi="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new wo("@firebase/app"),Uc="@firebase/app-compat",Bc="@firebase/analytics-compat",jc="@firebase/analytics",qc="@firebase/app-check-compat",$c="@firebase/app-check",zc="@firebase/auth",Kc="@firebase/auth-compat",Gc="@firebase/database",Hc="@firebase/database-compat",Wc="@firebase/functions",Qc="@firebase/functions-compat",Xc="@firebase/installations",Yc="@firebase/installations-compat",Jc="@firebase/messaging",Zc="@firebase/messaging-compat",tl="@firebase/performance",el="@firebase/performance-compat",nl="@firebase/remote-config",rl="@firebase/remote-config-compat",sl="@firebase/storage",il="@firebase/storage-compat",ol="@firebase/firestore",al="@firebase/firestore-compat",ul="firebase",cl="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]",ll={[Ur]:"fire-core",[Uc]:"fire-core-compat",[jc]:"fire-analytics",[Bc]:"fire-analytics-compat",[$c]:"fire-app-check",[qc]:"fire-app-check-compat",[zc]:"fire-auth",[Kc]:"fire-auth-compat",[Gc]:"fire-rtdb",[Hc]:"fire-rtdb-compat",[Wc]:"fire-fn",[Qc]:"fire-fn-compat",[Xc]:"fire-iid",[Yc]:"fire-iid-compat",[Jc]:"fire-fcm",[Zc]:"fire-fcm-compat",[tl]:"fire-perf",[el]:"fire-perf-compat",[nl]:"fire-rc",[rl]:"fire-rc-compat",[sl]:"fire-gcs",[il]:"fire-gcs-compat",[ol]:"fire-fst",[al]:"fire-fst-compat","fire-js":"fire-js",[ul]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Map,jr=new Map;function hl(e,t){try{e.container.addComponent(t)}catch(n){Bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Sn(e){const t=e.name;if(jr.has(t))return Bt.debug(`There were multiple attempts to register component ${t}.`),!1;jr.set(t,e);for(const n of Pn.values())hl(n,e);return!0}function dl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new Io("app","Firebase",fl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=cl;function So(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Br,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(n||(n=To()),!n)throw Ct.create("no-options");const i=Pn.get(s);if(i){if(xr(n,i.options)&&xr(r,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const o=new Tc(s);for(const u of jr.values())o.addComponent(u);const a=new ml(n,r,o);return Pn.set(s,a),a}function gl(e=Br){const t=Pn.get(e);if(!t&&e===Br&&To())return So();if(!t)throw Ct.create("no-app",{appName:e});return t}function te(e,t,n){var r;let s=(r=ll[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bt.warn(a.join(" "));return}Sn(new Ne(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="firebase-heartbeat-database",yl=1,Oe="firebase-heartbeat-store";let Ir=null;function Co(){return Ir||(Ir=Oc(_l,yl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Oe)}}}).catch(e=>{throw Ct.create("idb-open",{originalErrorMessage:e.message})})),Ir}async function El(e){try{return await(await Co()).transaction(Oe).objectStore(Oe).get(Vo(e))}catch(t){if(t instanceof fe)Bt.warn(t.message);else{const n=Ct.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(n.message)}}}async function Ei(e,t){try{const r=(await Co()).transaction(Oe,"readwrite");await r.objectStore(Oe).put(t,Vo(e)),await r.done}catch(n){if(n instanceof fe)Bt.warn(n.message);else{const r=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bt.warn(r.message)}}}function Vo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=1024,Tl=30*24*60*60*1e3;class Il{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wl(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vi();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Tl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vi(),{heartbeatsToSend:r,unsentEntries:s}=Al(this._heartbeatsCache.heartbeats),i=Rn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vi(){return new Date().toISOString().substring(0,10)}function Al(e,t=vl){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ti(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ti(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hc()?dc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await El(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ei(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ei(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ti(e){return Rn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e){Sn(new Ne("platform-logger",t=>new Lc(t),"PRIVATE")),Sn(new Ne("heartbeat",t=>new Il(t),"PRIVATE")),te(Ur,yi,e),te(Ur,yi,"esm2017"),te("fire-js","")}Rl("");var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,fs=fs||{},I=Pl||self;function $n(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Qe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Sl(e){return Object.prototype.hasOwnProperty.call(e,Ar)&&e[Ar]||(e[Ar]=++Cl)}var Ar="closure_uid_"+(1e9*Math.random()>>>0),Cl=0;function Vl(e,t,n){return e.call.apply(e.bind,arguments)}function Dl(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function tt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=Vl:tt=Dl,tt.apply(null,arguments)}function fn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Nt(){this.s=this.s,this.o=this.o}var bl=0;Nt.prototype.s=!1;Nt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),bl!=0)&&Sl(this)};Nt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Do=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ms(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ii(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if($n(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var kl=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};I.addEventListener("test",n,t),I.removeEventListener("test",n,t)}catch{}return e}();function Me(e){return/^[\s\xa0]*$/.test(e)}function zn(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function dt(e){return zn().indexOf(e)!=-1}function ps(e){return ps[" "](e),e}ps[" "]=function(){};function Nl(e,t){var n=Rh;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Ol=dt("Opera"),ie=dt("Trident")||dt("MSIE"),bo=dt("Edge"),qr=bo||ie,ko=dt("Gecko")&&!(zn().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),Ml=zn().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function No(){var e=I.document;return e?e.documentMode:void 0}var $r;t:{var wr="",Rr=function(){var e=zn();if(ko)return/rv:([^\);]+)(\)|;)/.exec(e);if(bo)return/Edge\/([\d\.]+)/.exec(e);if(ie)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ml)return/WebKit\/(\S+)/.exec(e);if(Ol)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Rr&&(wr=Rr?Rr[1]:""),ie){var Pr=No();if(Pr!=null&&Pr>parseFloat(wr)){$r=String(Pr);break t}}$r=wr}var zr;if(I.document&&ie){var Ai=No();zr=Ai||parseInt($r,10)||void 0}else zr=void 0;var xl=zr;function xe(e,t){if(et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ko){t:{try{ps(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ll[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xe.$.h.call(this)}}z(xe,et);var Ll={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Xe="closure_listenable_"+(1e6*Math.random()|0),Fl=0;function Ul(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Fl,this.fa=this.ia=!1}function Kn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function gs(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Bl(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Oo(e){const t={};for(const n in e)t[n]=e[n];return t}const wi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mo(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<wi.length;i++)n=wi[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Gn(e){this.src=e,this.g={},this.h=0}Gn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Gr(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Ul(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Kr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Do(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Kn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Gr(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var _s="closure_lm_"+(1e6*Math.random()|0),Sr={};function xo(e,t,n,r,s){if(r&&r.once)return Fo(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)xo(e,t[i],n,r,s);return null}return n=vs(n),e&&e[Xe]?e.O(t,n,Qe(r)?!!r.capture:!!r,s):Lo(e,t,n,!1,r,s)}function Lo(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Qe(s)?!!s.capture:!!s,a=Es(e);if(a||(e[_s]=a=new Gn(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=jl(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)kl||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Bo(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jl(){function e(n){return t.call(e.src,e.listener,n)}const t=ql;return e}function Fo(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Fo(e,t[i],n,r,s);return null}return n=vs(n),e&&e[Xe]?e.P(t,n,Qe(r)?!!r.capture:!!r,s):Lo(e,t,n,!0,r,s)}function Uo(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Uo(e,t[i],n,r,s);else r=Qe(r)?!!r.capture:!!r,n=vs(n),e&&e[Xe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Gr(i,n,r,s),-1<n&&(Kn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Es(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Gr(t,n,r,s)),(n=-1<e?t[e]:null)&&ys(n))}function ys(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Xe])Kr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Bo(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Es(t))?(Kr(n,e),n.h==0&&(n.src=null,t[_s]=null)):Kn(e)}}}function Bo(e){return e in Sr?Sr[e]:Sr[e]="on"+e}function ql(e,t){if(e.fa)e=!0;else{t=new xe(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ys(e),e=n.call(r,t)}return e}function Es(e){return e=e[_s],e instanceof Gn?e:null}var Cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function vs(e){return typeof e=="function"?e:(e[Cr]||(e[Cr]=function(t){return e.handleEvent(t)}),e[Cr])}function $(){Nt.call(this),this.i=new Gn(this),this.S=this,this.J=null}z($,Nt);$.prototype[Xe]=!0;$.prototype.removeEventListener=function(e,t,n,r){Uo(this,e,t,n,r)};function Q(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new et(t,e);else if(t instanceof et)t.target=t.target||e;else{var s=t;t=new et(r,e),Mo(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=mn(o,r,!0,t)&&s}if(o=t.g=e,s=mn(o,r,!0,t)&&s,s=mn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=mn(o,r,!1,t)&&s}$.prototype.N=function(){if($.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Kn(n[r]);delete e.g[t],e.h--}}this.J=null};$.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};$.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function mn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Kr(e.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ts=I.JSON.stringify;class $l{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function zl(){var e=Is;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Kl{constructor(){this.h=this.g=null}add(t,n){const r=jo.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jo=new $l(()=>new Gl,e=>e.reset());class Gl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Hl(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Wl(e){I.setTimeout(()=>{throw e},0)}let Le,Fe=!1,Is=new Kl,qo=()=>{const e=I.Promise.resolve(void 0);Le=()=>{e.then(Ql)}};var Ql=()=>{for(var e;e=zl();){try{e.h.call(e.g)}catch(n){Wl(n)}var t=jo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1};function Hn(e,t){$.call(this),this.h=e||1,this.g=t||I,this.j=tt(this.qb,this),this.l=Date.now()}z(Hn,$);g=Hn.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Q(this,"tick"),this.ga&&(As(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function As(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){Hn.$.N.call(this),As(this),delete this.g};function ws(e,t,n){if(typeof e=="function")n&&(e=tt(e,n));else if(e&&typeof e.handleEvent=="function")e=tt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function $o(e){e.g=ws(()=>{e.g=null,e.i&&(e.i=!1,$o(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Xl extends Nt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$o(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(e){Nt.call(this),this.h=e,this.g={}}z(Ue,Nt);var Ri=[];function zo(e,t,n,r){Array.isArray(n)||(n&&(Ri[0]=n.toString()),n=Ri);for(var s=0;s<n.length;s++){var i=xo(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ko(e){gs(e.g,function(t,n){this.g.hasOwnProperty(n)&&ys(t)},e),e.g={}}Ue.prototype.N=function(){Ue.$.N.call(this),Ko(this)};Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wn(){this.g=!0}Wn.prototype.Ea=function(){this.g=!1};function Yl(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Jl(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Zt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+th(e,n)+(r?" "+r:"")})}function Zl(e,t){e.info(function(){return"TIMEOUT: "+t})}Wn.prototype.info=function(){};function th(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ts(n)}catch{return t}}var Kt={},Pi=null;function Qn(){return Pi=Pi||new $}Kt.Ta="serverreachability";function Go(e){et.call(this,Kt.Ta,e)}z(Go,et);function Be(e){const t=Qn();Q(t,new Go(t))}Kt.STAT_EVENT="statevent";function Ho(e,t){et.call(this,Kt.STAT_EVENT,e),this.stat=t}z(Ho,et);function rt(e){const t=Qn();Q(t,new Ho(t,e))}Kt.Ua="timingevent";function Wo(e,t){et.call(this,Kt.Ua,e),this.size=t}z(Wo,et);function Ye(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var Xn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Qo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rs(){}Rs.prototype.h=null;function Si(e){return e.h||(e.h=e.i())}function Xo(){}var Je={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ps(){et.call(this,"d")}z(Ps,et);function Ss(){et.call(this,"c")}z(Ss,et);var Hr;function Yn(){}z(Yn,Rs);Yn.prototype.g=function(){return new XMLHttpRequest};Yn.prototype.i=function(){return{}};Hr=new Yn;function Ze(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ue(this),this.P=eh,e=qr?125:void 0,this.V=new Hn(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Yo}function Yo(){this.i=null,this.g="",this.h=!1}var eh=45e3,Jo={},Wr={};g=Ze.prototype;g.setTimeout=function(e){this.P=e};function Qr(e,t,n){e.L=1,e.A=Zn(At(t)),e.u=n,e.S=!0,Zo(e,null)}function Zo(e,t){e.G=Date.now(),tn(e),e.B=At(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),aa(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Yo,e.g=Ca(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Xl(tt(e.Pa,e,e.g),e.O)),zo(e.U,e.g,"readystatechange",e.nb),t=e.I?Oo(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Be(),Yl(e.j,e.v,e.B,e.m,e.W,e.u)}g.nb=function(e){e=e.target;const t=this.M;t&&ft(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const l=ft(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||qr||this.g&&(this.h.h||this.g.ja()||bi(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Be(3):Be(2)),Jn(this);var n=this.g.da();this.ca=n;e:if(ta(this)){var r=bi(this.g);e="";var s=r.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xt(this),Ce(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Jl(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Me(a)){var c=a;break e}}c=null}if(n=c)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xr(this,n);else{this.i=!1,this.s=3,rt(12),xt(this),Ce(this);break t}}this.S?(ea(this,l,o),qr&&this.i&&l==3&&(zo(this.U,this.V,"tick",this.mb),this.V.start())):(Zt(this.j,this.m,o,null),Xr(this,o)),l==4&&xt(this),this.i&&!this.J&&(l==4?wa(this.l,this):(this.i=!1,tn(this)))}else Ih(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),xt(this),Ce(this)}}}catch{}finally{}};function ta(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function ea(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=nh(e,n),s==Wr){t==4&&(e.s=4,rt(14),r=!1),Zt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Jo){e.s=4,rt(15),Zt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Zt(e.j,e.m,s,null),Xr(e,s);ta(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,rt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ns(t),t.M=!0,rt(11))):(Zt(e.j,e.m,n,"[Invalid Chunked Response]"),xt(e),Ce(e))}g.mb=function(){if(this.g){var e=ft(this.g),t=this.g.ja();this.o<t.length&&(Jn(this),ea(this,e,t),this.i&&e!=4&&tn(this))}};function nh(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Wr:(n=Number(t.substring(n,r)),isNaN(n)?Jo:(r+=1,r+n>t.length?Wr:(t=t.slice(r,r+n),e.o=r+n,t)))}g.cancel=function(){this.J=!0,xt(this)};function tn(e){e.Y=Date.now()+e.P,na(e,e.P)}function na(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Ye(tt(e.lb,e),t)}function Jn(e){e.C&&(I.clearTimeout(e.C),e.C=null)}g.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Zl(this.j,this.B),this.L!=2&&(Be(),rt(17)),xt(this),this.s=2,Ce(this)):na(this,this.Y-e)};function Ce(e){e.l.H==0||e.J||wa(e.l,e)}function xt(e){Jn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,As(e.V),Ko(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Xr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Yr(n.i,e))){if(!e.K&&Yr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Dn(n),rr(n);else break t;ks(n),rt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ye(tt(n.ib,n),6e3));if(1>=la(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Lt(n,11)}else if((e.K||n.g==e)&&Dn(n),!Me(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const l=c[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const P=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(P){var i=r.i;i.g||P.indexOf("spdy")==-1&&P.indexOf("quic")==-1&&P.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Cs(i,i.h),i.h=null))}if(r.F){const R=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,N(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Sa(r,r.J?r.pa:null,r.Y),o.K){ha(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(Jn(a),tn(a)),r.g=o}else Ia(r);0<n.j.length&&sr(n)}else c[0]!="stop"&&c[0]!="close"||Lt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Lt(n,7):bs(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Be(4)}catch{}}function rh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if($n(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function sh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if($n(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ra(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if($n(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=sh(e),r=rh(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var sa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ih(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,Cn(this,e.j),this.s=e.s,this.g=e.g,Vn(this,e.m),this.l=e.l;var t=e.i,n=new je;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ci(this,n),this.o=e.o}else e&&(t=String(e).match(sa))?(this.h=!1,Cn(this,t[1]||"",!0),this.s=Ae(t[2]||""),this.g=Ae(t[3]||"",!0),Vn(this,t[4]),this.l=Ae(t[5]||"",!0),Ci(this,t[6]||"",!0),this.o=Ae(t[7]||"")):(this.h=!1,this.i=new je(null,this.h))}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(we(t,Vi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(we(t,Vi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(we(n,n.charAt(0)=="/"?uh:ah,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",we(n,lh)),e.join("")};function At(e){return new Ut(e)}function Cn(e,t,n){e.j=n?Ae(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Vn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ci(e,t,n){t instanceof je?(e.i=t,hh(e.i,e.h)):(n||(t=we(t,ch)),e.i=new je(t,e.h))}function N(e,t,n){e.i.set(t,n)}function Zn(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ae(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function we(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,oh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function oh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Vi=/[#\/\?@]/g,ah=/[#\?:]/g,uh=/[#\?]/g,ch=/[#\?@]/g,lh=/#/g;function je(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ot(e){e.g||(e.g=new Map,e.h=0,e.i&&ih(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=je.prototype;g.add=function(e,t){Ot(this),this.i=null,e=me(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ia(e,t){Ot(e),t=me(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function oa(e,t){return Ot(e),t=me(e,t),e.g.has(t)}g.forEach=function(e,t){Ot(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};g.ta=function(){Ot(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};g.Z=function(e){Ot(this);let t=[];if(typeof e=="string")oa(this,e)&&(t=t.concat(this.g.get(me(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return Ot(this),this.i=null,e=me(this,e),oa(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function aa(e,t,n){ia(e,t),0<n.length&&(e.i=null,e.g.set(me(e,t),ms(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function me(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function hh(e,t){t&&!e.j&&(Ot(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ia(this,r),aa(this,s,n))},e)),e.j=t}var dh=class{constructor(e,t){this.g=e,this.map=t}};function ua(e){this.l=e||fh,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fh=10;function ca(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function la(e){return e.h?1:e.g?e.g.size:0}function Yr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Cs(e,t){e.g?e.g.add(t):e.h=t}function ha(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ua.prototype.cancel=function(){if(this.i=da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function da(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ms(e.i)}var mh=class{stringify(e){return I.JSON.stringify(e,void 0)}parse(e){return I.JSON.parse(e,void 0)}};function ph(){this.g=new mh}function gh(e,t,n){const r=n||"";try{ra(e,function(s,i){let o=s;Qe(s)&&(o=Ts(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function _h(e,t){const n=new Wn;if(I.Image){const r=new Image;r.onload=fn(pn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=fn(pn,n,r,"TestLoadImage: error",!1,t),r.onabort=fn(pn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=fn(pn,n,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function pn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function tr(e){this.l=e.ec||null,this.j=e.ob||!1}z(tr,Rs);tr.prototype.g=function(){return new er(this.l,this.j)};tr.prototype.i=function(e){return function(){return e}}({});function er(e,t){$.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Vs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(er,$);var Vs=0;g=er.prototype;g.open=function(e,t){if(this.readyState!=Vs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,qe(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=Vs};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,qe(this)),this.g&&(this.readyState=3,qe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fa(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function fa(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?en(this):qe(this),this.readyState==3&&fa(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,en(this))};g.Ya=function(e){this.g&&(this.response=e,en(this))};g.ka=function(){this.g&&en(this)};function en(e){e.readyState=4,e.l=null,e.j=null,e.A=null,qe(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function qe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var yh=I.JSON.parse;function L(e){$.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ma,this.L=this.M=!1}z(L,$);var ma="",Eh=/^https?$/i,vh=["POST","PUT"];g=L.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hr.g(),this.C=this.u?Si(this.u):Si(Hr),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Di(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=I.FormData&&e instanceof I.FormData,!(0<=Do(vh,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_a(this),0<this.B&&((this.L=Th(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=ws(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Di(this,i)}};function Th(e){return ie&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof fs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function Di(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,pa(e),nr(e)}function pa(e){e.F||(e.F=!0,Q(e,"complete"),Q(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q(this,"complete"),Q(this,"abort"),nr(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nr(this,!0)),L.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?ga(this):this.kb())};g.kb=function(){ga(this)};function ga(e){if(e.h&&typeof fs<"u"&&(!e.C[1]||ft(e)!=4||e.da()!=2)){if(e.v&&ft(e)==4)ws(e.La,0,e);else if(Q(e,"readystatechange"),ft(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(sa)[1]||null;!s&&I.self&&I.self.location&&(s=I.self.location.protocol.slice(0,-1)),r=!Eh.test(s?s.toLowerCase():"")}n=r}if(n)Q(e,"complete"),Q(e,"success");else{e.m=6;try{var i=2<ft(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",pa(e)}}finally{nr(e)}}}}function nr(e,t){if(e.g){_a(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Q(e,"ready");try{n.onreadystatechange=r}catch{}}}function _a(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function ft(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),yh(t)}};function bi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ma:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Ih(e){const t={};e=(e.g&&2<=ft(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Me(e[r]))continue;var n=Hl(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Bl(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ya(e){let t="";return gs(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ds(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ya(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function ve(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ea(e){this.Ga=0,this.j=[],this.l=new Wn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ve("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ve("baseRetryDelayMs",5e3,e),this.hb=ve("retryDelaySeedMs",1e4,e),this.eb=ve("forwardChannelMaxRetries",2,e),this.xa=ve("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ua(e&&e.concurrentRequestLimit),this.Ja=new ph,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=Ea.prototype;g.ra=8;g.H=1;function bs(e){if(va(e),e.H==3){var t=e.W++,n=At(e.I);if(N(n,"SID",e.K),N(n,"RID",t),N(n,"TYPE","terminate"),nn(e,n),t=new Ze(e,e.l,t),t.L=2,t.A=Zn(At(n)),n=!1,I.navigator&&I.navigator.sendBeacon)try{n=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&I.Image&&(new Image().src=t.A,n=!0),n||(t.g=Ca(t.l,null),t.g.ha(t.A)),t.G=Date.now(),tn(t)}Pa(e)}function rr(e){e.g&&(Ns(e),e.g.cancel(),e.g=null)}function va(e){rr(e),e.u&&(I.clearTimeout(e.u),e.u=null),Dn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function sr(e){if(!ca(e.i)&&!e.m){e.m=!0;var t=e.Na;Le||qo(),Fe||(Le(),Fe=!0),Is.add(t,e),e.C=0}}function Ah(e,t){return la(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ye(tt(e.Na,e,t),Ra(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Ze(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Oo(i),Mo(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ta(this,s,t),n=At(this.I),N(n,"RID",e),N(n,"CVER",22),this.F&&N(n,"X-HTTP-Session-Id",this.F),nn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(ya(i)))+"&"+t:this.o&&Ds(n,this.o,i)),Cs(this.i,s),this.bb&&N(n,"TYPE","init"),this.P?(N(n,"$req",t),N(n,"SID","null"),s.aa=!0,Qr(s,n,null)):Qr(s,n,t),this.H=2}}else this.H==3&&(e?ki(this,e):this.j.length==0||ca(this.i)||ki(this))};function ki(e,t){var n;t?n=t.m:n=e.W++;const r=At(e.I);N(r,"SID",e.K),N(r,"RID",n),N(r,"AID",e.V),nn(e,r),e.o&&e.s&&Ds(r,e.o,e.s),n=new Ze(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ta(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Cs(e.i,n),Qr(n,r,t)}function nn(e,t){e.na&&gs(e.na,function(n,r){N(t,r,n)}),e.h&&ra({},function(n,r){N(t,r,n)})}function Ta(e,t,n){n=Math.min(e.j.length,n);var r=e.h?tt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=s[u].g;const l=s[u].map;if(c-=i,0>c)i=Math.max(0,s[u].g-100),a=!1;else try{gh(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Ia(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Le||qo(),Fe||(Le(),Fe=!0),Is.add(t,e),e.A=0}}function ks(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ye(tt(e.Ma,e),Ra(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,Aa(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ye(tt(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),rr(this),Aa(this))};function Ns(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Aa(e){e.g=new Ze(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=At(e.wa);N(t,"RID","rpc"),N(t,"SID",e.K),N(t,"AID",e.V),N(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&N(t,"TO",e.qa),N(t,"TYPE","xmlhttp"),nn(e,t),e.o&&e.s&&Ds(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Zn(At(t)),n.u=null,n.S=!0,Zo(n,e)}g.ib=function(){this.v!=null&&(this.v=null,rr(this),ks(this),rt(19))};function Dn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function wa(e,t){var n=null;if(e.g==t){Dn(e),Ns(e),e.g=null;var r=2}else if(Yr(e.i,t))n=t.F,ha(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=Qn(),Q(r,new Wo(r,n)),sr(e)}else Ia(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Ah(e,t)||r==2&&ks(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Lt(e,5);break;case 4:Lt(e,10);break;case 3:Lt(e,6);break;default:Lt(e,2)}}}function Ra(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Lt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=tt(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Cn(n,"https"),Zn(n)),_h(n.toString(),r)}else rt(2);e.H=0,e.h&&e.h.za(t),Pa(e),va(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function Pa(e){if(e.H=0,e.ma=[],e.h){const t=da(e.i);(t.length!=0||e.j.length!=0)&&(Ii(e.ma,t),Ii(e.ma,e.j),e.i.i.length=0,ms(e.j),e.j.length=0),e.h.ya()}}function Sa(e,t,n){var r=n instanceof Ut?At(n):new Ut(n);if(r.g!="")t&&(r.g=t+"."+r.g),Vn(r,r.m);else{var s=I.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Ut(null);r&&Cn(i,r),t&&(i.g=t),s&&Vn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&N(r,n,t),N(r,"VER",e.ra),nn(e,r),r}function Ca(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new L(new tr({ob:n})):new L(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function Va(){}g=Va.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function bn(){if(ie&&!(10<=Number(xl)))throw Error("Environmental error: no available transport.")}bn.prototype.g=function(e,t){return new ot(e,t)};function ot(e,t){$.call(this),this.g=new Ea(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Me(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Me(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new pe(this)}z(ot,$);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Sa(e,null,e.Y),sr(e)};ot.prototype.close=function(){bs(this.g)};ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ts(e),e=n);t.j.push(new dh(t.fb++,e)),t.H==3&&sr(t)};ot.prototype.N=function(){this.g.h=null,delete this.j,bs(this.g),delete this.g,ot.$.N.call(this)};function Da(e){Ps.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Da,Ps);function ba(){Ss.call(this),this.status=1}z(ba,Ss);function pe(e){this.g=e}z(pe,Va);pe.prototype.Ba=function(){Q(this.g,"a")};pe.prototype.Aa=function(e){Q(this.g,new Da(e))};pe.prototype.za=function(e){Q(this.g,new ba)};pe.prototype.ya=function(){Q(this.g,"b")};function wh(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ht,wh);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}ht.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Vr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Vr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Vr(this,r),s=0;break}}this.h=s,this.i+=t};ht.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function b(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Rh={};function Os(e){return-128<=e&&128>e?Nl(e,function(t){return new b([t|0],0>t?-1:0)}):new b([e|0],0>e?-1:0)}function mt(e){if(isNaN(e)||!isFinite(e))return ee;if(0>e)return H(mt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Jr;return new b(t,0)}function ka(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return H(ka(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mt(Math.pow(t,8)),r=ee,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=mt(Math.pow(t,i)),r=r.R(i).add(mt(o))):(r=r.R(n),r=r.add(mt(o)))}return r}var Jr=4294967296,ee=Os(0),Zr=Os(1),Ni=Os(16777216);g=b.prototype;g.ea=function(){if(at(this))return-H(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Jr+r)*t,t*=Jr}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Tt(this))return"0";if(at(this))return"-"+H(this).toString(e);for(var t=mt(Math.pow(e,6)),n=this,r="";;){var s=Nn(n,t).g;n=kn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Tt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Tt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function at(e){return e.h==-1}g.X=function(e){return e=kn(this,e),at(e)?-1:Tt(e)?0:1};function H(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new b(n,~e.h).add(Zr)}g.abs=function(){return at(this)?H(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new b(n,n[n.length-1]&-2147483648?-1:0)};function kn(e,t){return e.add(H(t))}g.R=function(e){if(Tt(this)||Tt(e))return ee;if(at(this))return at(e)?H(this).R(H(e)):H(H(this).R(e));if(at(e))return H(this.R(H(e)));if(0>this.X(Ni)&&0>e.X(Ni))return mt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,u=e.D(s)&65535;n[2*r+2*s]+=o*u,gn(n,2*r+2*s),n[2*r+2*s+1]+=i*u,gn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,gn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,gn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new b(n,0)};function gn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Te(e,t){this.g=e,this.h=t}function Nn(e,t){if(Tt(t))throw Error("division by zero");if(Tt(e))return new Te(ee,ee);if(at(e))return t=Nn(H(e),t),new Te(H(t.g),H(t.h));if(at(t))return t=Nn(e,H(t)),new Te(H(t.g),t.h);if(30<e.g.length){if(at(e)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Zr,r=t;0>=r.X(e);)n=Oi(n),r=Oi(r);var s=Qt(n,1),i=Qt(r,1);for(r=Qt(r,2),n=Qt(n,2);!Tt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Qt(r,1),n=Qt(n,1)}return t=kn(e,s.R(t)),new Te(s,t)}for(s=ee;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=mt(n),o=i.R(t);at(o)||0<o.X(e);)n-=r,i=mt(n),o=i.R(t);Tt(i)&&(i=Zr),s=s.add(i),e=kn(e,o)}return new Te(s,e)}g.gb=function(e){return Nn(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new b(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new b(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new b(n,this.h^e.h)};function Oi(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new b(n,e.h)}function Qt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new b(s,e.h)}bn.prototype.createWebChannel=bn.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;Xn.NO_ERROR=0;Xn.TIMEOUT=8;Xn.HTTP_ERROR=6;Qo.COMPLETE="complete";Xo.EventType=Je;Je.OPEN="a";Je.CLOSE="b";Je.ERROR="c";Je.MESSAGE="d";$.prototype.listen=$.prototype.O;L.prototype.listenOnce=L.prototype.P;L.prototype.getLastError=L.prototype.Sa;L.prototype.getLastErrorCode=L.prototype.Ia;L.prototype.getStatus=L.prototype.da;L.prototype.getResponseJson=L.prototype.Wa;L.prototype.getResponseText=L.prototype.ja;L.prototype.send=L.prototype.ha;L.prototype.setWithCredentials=L.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=mt;b.fromString=ka;var Ph=function(){return new bn},Sh=function(){return Qn()},Dr=Xn,Ch=Qo,Vh=Kt,Mi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_n=Xo,Dh=L,bh=ht,ne=b;const xi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ge="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new wo("@firebase/firestore");function Ie(){return jt.logLevel}function _(e,...t){if(jt.logLevel<=V.DEBUG){const n=t.map(Ms);jt.debug(`Firestore (${ge}): ${e}`,...n)}}function wt(e,...t){if(jt.logLevel<=V.ERROR){const n=t.map(Ms);jt.error(`Firestore (${ge}): ${e}`,...n)}}function oe(e,...t){if(jt.logLevel<=V.WARN){const n=t.map(Ms);jt.warn(`Firestore (${ge}): ${e}`,...n)}}function Ms(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${ge}) INTERNAL ASSERTION FAILED: `+e;throw wt(t),new Error(t)}function k(e,t){e||T()}function w(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends fe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class Nh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Oh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new It;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new It,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new It)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(k(typeof r.accessToken=="string"),new Na(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return k(t===null||typeof t=="string"),new J(t)}}class Mh{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xh{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Mh(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(k(typeof n.token=="string"),this.R=n.token,new Lh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Uh(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function D(e,t){return e<t?-1:e>t?1:0}function ae(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new j(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new j(0,0))}static max(){return new A(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n,r){n===void 0?n=0:n>t.length&&T(),r===void 0?r=t.length-n:r>t.length-n&&T(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return $e.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof $e?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends $e{construct(t,n,r){return new M(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Bh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends $e{construct(t,n,r){return new W(t,n,r)}static isValidIdentifier(t){return Bh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(n)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(M.fromString(t))}static fromName(t){return new E(M.fromString(t).popFirst(5))}static empty(){return new E(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new M(t.slice()))}}function jh(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=A.fromTimestamp(r===1e9?new j(n+1,0):new j(n,r));return new Dt(s,E.empty(),t)}function qh(e){return new Dt(e.readTime,e.key,-1)}class Dt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Dt(A.min(),E.empty(),-1)}static max(){return new Dt(A.max(),E.empty(),-1)}}function $h(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==zh)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new m((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):m.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):m.reject(n)}static resolve(t){return new m((n,r)=>{n(t)})}static reject(t){return new m((n,r)=>{r(t)})}static waitFor(t){return new m((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(t){let n=m.resolve(!1);for(const r of t)n=n.next(s=>s?m.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new m((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(l=>{o[c]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new m((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function sn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}xs._e=-1;function ir(e){return e==null}function On(e){return e===0&&1/e==-1/0}function Gh(e){return typeof e=="number"&&Number.isInteger(e)&&!On(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _e(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ma(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,n){this.comparator=t,this.root=n||G.EMPTY}insert(t,n){return new x(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new x(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yn(this.root,t,this.comparator,!0)}}class yn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??G.RED,this.left=s??G.EMPTY,this.right=i??G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new G(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return G.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,n,r,s,i){return this}insert(t,n,r){return new G(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.comparator=t,this.data=new x(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fi(this.data.getIterator())}getIteratorFrom(t){return new Fi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof X)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new X(this.comparator);return n.data=t,n}}class Fi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new ct([])}unionWith(t){let n=new X(W.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ct(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ae(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xa("Invalid base64 string: "+i):i}}(t);return new nt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new nt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const Hh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(e){if(k(!!e),typeof e=="string"){let t=0;const n=Hh.exec(e);if(k(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qt(e){return typeof e=="string"?nt.fromBase64String(e):nt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fs(e){const t=e.mapValue.fields.__previous_value__;return Ls(t)?Fs(t):t}function ze(e){const t=bt(e.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,n,r,s,i,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ke{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ke("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ke&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ls(e)?4:Qh(e)?9007199254740991:10:T()}function yt(e,t){if(e===t)return!0;const n=$t(e);if(n!==$t(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ze(e).isEqual(ze(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=bt(s.timestampValue),a=bt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return qt(s.bytesValue).isEqual(qt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=U(s.doubleValue),a=U(i.doubleValue);return o===a?On(o)===On(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return ae(e.arrayValue.values||[],t.arrayValue.values||[],yt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Li(o)!==Li(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!yt(o[u],a[u])))return!1;return!0}(e,t);default:return T()}}function Ge(e,t){return(e.values||[]).find(n=>yt(n,t))!==void 0}function ue(e,t){if(e===t)return 0;const n=$t(e),r=$t(t);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=U(i.integerValue||i.doubleValue),u=U(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return Ui(e.timestampValue,t.timestampValue);case 4:return Ui(ze(e),ze(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,o){const a=qt(i),u=qt(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=D(a[c],u[c]);if(l!==0)return l}return D(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=D(U(i.latitude),U(o.latitude));return a!==0?a:D(U(i.longitude),U(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=ue(a[c],u[c]);if(l)return l}return D(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===En.mapValue&&o===En.mapValue)return 0;if(i===En.mapValue)return 1;if(o===En.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const d=D(u[h],l[h]);if(d!==0)return d;const p=ue(a[u[h]],c[l[h]]);if(p!==0)return p}return D(u.length,l.length)}(e.mapValue,t.mapValue);default:throw T()}}function Ui(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=bt(e),r=bt(t),s=D(n.seconds,r.seconds);return s!==0?s:D(n.nanos,r.nanos)}function ce(e){return ts(e)}function ts(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=bt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return qt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ts(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ts(n.fields[o])}`;return s+"}"}(e.mapValue):T()}function es(e){return!!e&&"integerValue"in e}function Us(e){return!!e&&"arrayValue"in e}function Bi(e){return!!e&&"nullValue"in e}function ji(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tn(e){return!!e&&"mapValue"in e}function Ve(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _e(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ve(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ve(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Qh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.value=t}static empty(){return new ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Tn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ve(n)}setAll(t){let n=W.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ve(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Tn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Tn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){_e(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ut(Ve(this.value))}}function La(e){const t=[];return _e(e.fields,(n,r)=>{const s=new W([n]);if(Tn(r)){const i=La(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Z(t,0,A.min(),A.min(),A.min(),ut.empty(),0)}static newFoundDocument(t,n,r,s){return new Z(t,1,n,A.min(),r,s,0)}static newNoDocument(t,n){return new Z(t,2,n,A.min(),A.min(),ut.empty(),0)}static newUnknownDocument(t,n){return new Z(t,3,n,A.min(),A.min(),ut.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,n){this.position=t,this.inclusive=n}}function qi(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=ue(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $i(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Xh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{}class B extends Fa{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Jh(t,n,r):n==="array-contains"?new ed(t,r):n==="in"?new nd(t,r):n==="not-in"?new rd(t,r):n==="array-contains-any"?new sd(t,r):new B(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Zh(t,r):new td(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ue(n,this.value)):n!==null&&$t(this.value)===$t(n)&&this.matchesComparison(ue(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Et extends Fa{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Et(t,n)}matches(t){return Ua(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ua(e){return e.op==="and"}function Ba(e){return Yh(e)&&Ua(e)}function Yh(e){for(const t of e.filters)if(t instanceof Et)return!1;return!0}function ns(e){if(e instanceof B)return e.field.canonicalString()+e.op.toString()+ce(e.value);if(Ba(e))return e.filters.map(t=>ns(t)).join(",");{const t=e.filters.map(n=>ns(n)).join(",");return`${e.op}(${t})`}}function ja(e,t){return e instanceof B?function(r,s){return s instanceof B&&r.op===s.op&&r.field.isEqual(s.field)&&yt(r.value,s.value)}(e,t):e instanceof Et?function(r,s){return s instanceof Et&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ja(o,s.filters[a]),!0):!1}(e,t):void T()}function qa(e){return e instanceof B?function(n){return`${n.field.canonicalString()} ${n.op} ${ce(n.value)}`}(e):e instanceof Et?function(n){return n.op.toString()+" {"+n.getFilters().map(qa).join(" ,")+"}"}(e):"Filter"}class Jh extends B{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class Zh extends B{constructor(t,n){super(t,"in",n),this.keys=$a("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class td extends B{constructor(t,n){super(t,"not-in",n),this.keys=$a("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function $a(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class ed extends B{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Us(n)&&Ge(n.arrayValue,this.value)}}class nd extends B{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ge(this.value.arrayValue,n)}}class rd extends B{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ge(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ge(this.value.arrayValue,n)}}class sd extends B{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Us(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ge(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function zi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new id(e,t,n,r,s,i,o)}function Bs(e){const t=w(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ns(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ir(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ce(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ce(r)).join(",")),t.ce=n}return t.ce}function js(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Xh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ja(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$i(e.startAt,t.startAt)&&$i(e.endAt,t.endAt)}function rs(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function od(e,t,n,r,s,i,o,a){return new or(e,t,n,r,s,i,o,a)}function ar(e){return new or(e)}function Ki(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ad(e){return e.collectionGroup!==null}function De(e){const t=w(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new X(W.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new xn(i,r))}),n.has(W.keyField().canonicalString())||t.le.push(new xn(W.keyField(),r))}return t.le}function pt(e){const t=w(e);return t.he||(t.he=ud(t,De(e))),t.he}function ud(e,t){if(e.limitType==="F")return zi(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xn(s.field,i)});const n=e.endAt?new Mn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Mn(e.startAt.position,e.startAt.inclusive):null;return zi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ss(e,t,n){return new or(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ur(e,t){return js(pt(e),pt(t))&&e.limitType===t.limitType}function za(e){return`${Bs(pt(e))}|lt:${e.limitType}`}function Xt(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>qa(s)).join(", ")}]`),ir(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ce(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ce(s)).join(",")),`Target(${r})`}(pt(e))}; limitType=${e.limitType})`}function cr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):E.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of De(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=qi(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,De(r),s)||r.endAt&&!function(o,a,u){const c=qi(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,De(r),s))}(e,t)}function cd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ka(e){return(t,n)=>{let r=!1;for(const s of De(e)){const i=ld(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ld(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?ue(u,c):T()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){_e(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Ma(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new x(E.comparator);function Rt(){return hd}const Ga=new x(E.comparator);function Re(...e){let t=Ga;for(const n of e)t=t.insert(n.key,n);return t}function Ha(e){let t=Ga;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ft(){return be()}function Wa(){return be()}function be(){return new ye(e=>e.toString(),(e,t)=>e.isEqual(t))}const dd=new x(E.comparator),fd=new X(E.comparator);function S(...e){let t=fd;for(const n of e)t=t.add(n);return t}const md=new X(D);function pd(){return md}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:On(t)?"-0":t}}function Xa(e){return{integerValue:""+e}}function gd(e,t){return Gh(t)?Xa(t):Qa(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this._=void 0}}function _d(e,t,n){return e instanceof Ln?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ls(i)&&(i=Fs(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof He?Ja(e,t):e instanceof We?Za(e,t):function(s,i){const o=Ya(s,i),a=Gi(o)+Gi(s.Ie);return es(o)&&es(s.Ie)?Xa(a):Qa(s.serializer,a)}(e,t)}function yd(e,t,n){return e instanceof He?Ja(e,t):e instanceof We?Za(e,t):n}function Ya(e,t){return e instanceof Fn?function(r){return es(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Ln extends lr{}class He extends lr{constructor(t){super(),this.elements=t}}function Ja(e,t){const n=tu(t);for(const r of e.elements)n.some(s=>yt(s,r))||n.push(r);return{arrayValue:{values:n}}}class We extends lr{constructor(t){super(),this.elements=t}}function Za(e,t){let n=tu(t);for(const r of e.elements)n=n.filter(s=>!yt(s,r));return{arrayValue:{values:n}}}class Fn extends lr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Gi(e){return U(e.integerValue||e.doubleValue)}function tu(e){return Us(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Ed(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof He&&s instanceof He||r instanceof We&&s instanceof We?ae(r.elements,s.elements,yt):r instanceof Fn&&s instanceof Fn?yt(r.Ie,s.Ie):r instanceof Ln&&s instanceof Ln}(e.transform,t.transform)}class vd{constructor(t,n){this.version=t,this.transformResults=n}}class gt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new gt}static exists(t){return new gt(void 0,t)}static updateTime(t){return new gt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function In(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class hr{}function eu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new qs(e.key,gt.none()):new on(e.key,e.data,gt.none());{const n=e.data,r=ut.empty();let s=new X(W.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Gt(e.key,r,new ct(s.toArray()),gt.none())}}function Td(e,t,n){e instanceof on?function(s,i,o){const a=s.value.clone(),u=Wi(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Gt?function(s,i,o){if(!In(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Wi(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(nu(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ke(e,t,n,r){return e instanceof on?function(i,o,a,u){if(!In(i.precondition,o))return a;const c=i.value.clone(),l=Qi(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Gt?function(i,o,a,u){if(!In(i.precondition,o))return a;const c=Qi(i.fieldTransforms,u,o),l=o.data;return l.setAll(nu(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return In(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Id(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Ya(r.transform,s||null);i!=null&&(n===null&&(n=ut.empty()),n.set(r.field,i))}return n||null}function Hi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ae(r,s,(i,o)=>Ed(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class on extends hr{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gt extends hr{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Wi(e,t,n){const r=new Map;k(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,yd(o,a,n[s]))}return r}function Qi(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_d(i,o,t))}return r}class qs extends hr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ad extends hr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Td(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ke(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ke(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Wa();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=eu(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(A.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),S())}isEqual(t){return this.batchId===t.batchId&&ae(this.mutations,t.mutations,(n,r)=>Hi(n,r))&&ae(this.baseMutations,t.baseMutations,(n,r)=>Hi(n,r))}}class $s{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){k(t.mutations.length===r.length);let s=function(){return dd}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new $s(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,C;function Sd(e){switch(e){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function ru(e){if(e===void 0)return wt("GRPC error has no .code"),f.UNKNOWN;switch(e){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(C=F||(F={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new ne([4294967295,4294967295],0);function Xi(e){const t=Cd().encode(e),n=new bh;return n.update(t),new Uint8Array(n.digest())}function Yi(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ne([n,r],0),new ne([s,i],0)]}class zs{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pe(`Invalid padding: ${n}`);if(r<0)throw new Pe(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Pe(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Pe(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=ne.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(ne.fromNumber(r)));return s.compare(Vd)===1&&(s=new ne([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Xi(t),[r,s]=Yi(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new zs(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Xi(t),[r,s]=Yi(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Pe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,an.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new dr(A.min(),s,new x(D),Rt(),S())}}class an{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new an(r,n,S(),S(),S())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class su{constructor(t,n){this.targetId=t,this.fe=n}}class iu{constructor(t,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ji{constructor(){this.ge=0,this.pe=to(),this.ye=nt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=S(),n=S(),r=S();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:T()}}),new an(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=to()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,k(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Dd{constructor(t){this.Le=t,this.ke=new Map,this.qe=Rt(),this.Qe=Zi(),this.Ke=new x(D)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(rs(i))if(r===0){const o=new E(i.path);this.We(n,o,Z.newNoDocument(o,A.min()))}else k(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=qt(r).toUint8Array()}catch(u){if(u instanceof xa)return oe("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new zs(o,s,i)}catch(u){return oe(u instanceof Pe?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&rs(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,Z.newNoDocument(u,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=S();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new dr(t,n,this.Ke,this.qe,r);return this.qe=Rt(),this.Qe=Zi(),this.Ke=new x(D),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Ji,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new X(D),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Ji),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Zi(){return new x(E.comparator)}function to(){return new x(E.comparator)}const bd={asc:"ASCENDING",desc:"DESCENDING"},kd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nd={and:"AND",or:"OR"};class Od{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function is(e,t){return e.useProto3Json||ir(t)?t:{value:t}}function Un(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ou(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Md(e,t){return Un(e,t.toTimestamp())}function _t(e){return k(!!e),A.fromTimestamp(function(n){const r=bt(n);return new j(r.seconds,r.nanos)}(e))}function Ks(e,t){return function(r){return new M(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function au(e){const t=M.fromString(e);return k(hu(t)),t}function os(e,t){return Ks(e.databaseId,t.path)}function br(e,t){const n=au(t);if(n.get(1)!==e.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(uu(n))}function as(e,t){return Ks(e.databaseId,t)}function xd(e){const t=au(e);return t.length===4?M.emptyPath():uu(t)}function us(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function uu(e){return k(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function eo(e,t,n){return{name:os(e,t),fields:n.value.mapValue.fields}}function Ld(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(k(l===void 0||typeof l=="string"),nt.fromBase64String(l||"")):(k(l===void 0||l instanceof Uint8Array),nt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?f.UNKNOWN:ru(c.code);return new y(l,c.message||"")}(o);n=new iu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=br(e,r.document.name),i=_t(r.document.updateTime),o=r.document.createTime?_t(r.document.createTime):A.min(),a=new ut({mapValue:{fields:r.document.fields}}),u=Z.newFoundDocument(s,i,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new An(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=br(e,r.document),i=r.readTime?_t(r.readTime):A.min(),o=Z.newNoDocument(s,i),a=r.removedTargetIds||[];n=new An([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=br(e,r.document),i=r.removedTargetIds||[];n=new An([],i,s,null)}else{if(!("filter"in t))return T();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Pd(s,i),a=r.targetId;n=new su(a,o)}}return n}function Fd(e,t){let n;if(t instanceof on)n={update:eo(e,t.key,t.value)};else if(t instanceof qs)n={delete:os(e,t.key)};else if(t instanceof Gt)n={update:eo(e,t.key,t.data),updateMask:Hd(t.fieldMask)};else{if(!(t instanceof Ad))return T();n={verify:os(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ln)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof He)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof We)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw T()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Md(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(e,t.precondition)),n}function Ud(e,t){return e&&e.length>0?(k(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?_t(s.updateTime):_t(i);return o.isEqual(A.min())&&(o=_t(i)),new vd(o,s.transformResults||[])}(n,t))):[]}function Bd(e,t){return{documents:[as(e,t.path)]}}function jd(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=as(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=as(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length!==0)return lu(Et.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Yt(h.field),direction:zd(h.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=is(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function qd(e){let t=xd(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){k(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(h){const d=cu(h);return d instanceof Et&&Ba(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(P){return new xn(Jt(P.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ir(d)?null:d}(n.limit));let u=null;n.startAt&&(u=function(h){const d=!!h.before,p=h.values||[];return new Mn(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new Mn(p,d)}(n.endAt)),od(t,s,o,i,a,"F",u,c)}function $d(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function cu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jt(n.unaryFilter.field);return B.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jt(n.unaryFilter.field);return B.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jt(n.unaryFilter.field);return B.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jt(n.unaryFilter.field);return B.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(n){return B.create(Jt(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Et.create(n.compositeFilter.filters.map(r=>cu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return T()}}(n.compositeFilter.op))}(e):T()}function zd(e){return bd[e]}function Kd(e){return kd[e]}function Gd(e){return Nd[e]}function Yt(e){return{fieldPath:e.canonicalString()}}function Jt(e){return W.fromServerFormat(e.fieldPath)}function lu(e){return e instanceof B?function(n){if(n.op==="=="){if(ji(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NAN"}};if(Bi(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ji(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NOT_NAN"}};if(Bi(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(n.field),op:Kd(n.op),value:n.value}}}(e):e instanceof Et?function(n){const r=n.getFilters().map(s=>lu(s));return r.length===1?r[0]:{compositeFilter:{op:Gd(n.op),filters:r}}}(e):T()}function Hd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function hu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n,r,s,i=A.min(),o=A.min(),a=nt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Pt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this.ut=t}}function Qd(e){const t=qd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ss(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.on=new Yd}addToCollectionParentIndex(t,n){return this.on.add(n),m.resolve()}getCollectionParents(t,n){return m.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return m.resolve()}deleteFieldIndex(t,n){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,n){return m.resolve()}getDocumentsMatchingTarget(t,n){return m.resolve(null)}getIndexType(t,n){return m.resolve(0)}getFieldIndexes(t,n){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,n){return m.resolve(Dt.min())}getMinOffsetFromCollectionGroup(t,n){return m.resolve(Dt.min())}updateCollectionGroup(t,n,r){return m.resolve()}updateIndexEntries(t,n){return m.resolve()}}class Yd{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new X(M.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new X(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new le(0)}static Nn(){return new le(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.changes=new ye(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Z.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?m.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ke(r.mutation,s,ct.empty(),j.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,S()).next(()=>r))}getLocalViewOfDocuments(t,n,r=S()){const s=Ft();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Re();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ft();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,S()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Rt();const o=be(),a=function(){return be()}();return n.forEach((u,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof Gt)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),ke(l.mutation,c,l.mutation.getFieldMask(),j.now())):o.set(c.key,ct.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new Zd(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=be();let s=new x((o,a)=>o-a),i=S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||ct.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(s.get(a.batchId)||S()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Wa();l.forEach(d=>{if(!i.has(d)){const p=eu(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ad(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):m.resolve(Ft());let a=-1,u=i;return o.next(c=>m.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?m.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,S())).next(l=>({batchId:a,changes:Ha(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let s=Re();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Re();return this.indexManager.getCollectionParents(t,i).next(a=>m.forEach(a,u=>{const c=function(h,d){return new or(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,Z.newInvalidDocument(l)))});let a=Re();return o.forEach((u,c)=>{const l=i.get(u);l!==void 0&&ke(l.mutation,c,ct.empty(),j.now()),cr(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return m.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_t(s.createTime)}}(n)),m.resolve()}getNamedQuery(t,n){return m.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(s){return{name:s.name,query:Qd(s.bundledQuery),readTime:_t(s.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.overlays=new x(E.comparator),this.lr=new Map}getOverlay(t,n){return m.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ft();return m.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.lt(t,n,i)}),m.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(t,n,r){const s=Ft(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return m.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new x((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=Ft(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Ft(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return m.resolve(a)}lt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rd(n,r));let i=this.lr.get(n);i===void 0&&(i=S(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.hr=new X(q.Pr),this.Ir=new X(q.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new q(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new q(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new E(new M([])),r=new q(n,t),s=new q(n,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new E(new M([])),r=new q(n,t),s=new q(n,t+1);let i=S();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new q(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class q{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return E.comparator(t.key,n.key)||D(t.gr,n.gr)}static Tr(t,n){return D(t.gr,n.gr)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new X(q.Pr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wd(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new q(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,n){return m.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new q(n,0),s=new q(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new X(D);return n.forEach(s=>{const i=new q(s,0),o=new q(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;E.isDocumentKey(i)||(i=i.child(""));const o=new q(new E(i),0);let a=new X(D);return this.yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.gr)),!0)},o),m.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){k(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(n.mutations,s=>{const i=new q(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new q(n,0),s=this.yr.firstAfterOrEqual(r);return m.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t){this.Cr=t,this.docs=function(){return new x(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return m.resolve(r?r.document.mutableCopy():Z.newInvalidDocument(n))}getEntries(t,n){let r=Rt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Z.newInvalidDocument(s))}),m.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Rt();const o=n.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||$h(qh(l),r)<=0||(s.has(l.key)||cr(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(t,n,r,s){T()}vr(t,n){return m.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new of(this)}getSize(t){return m.resolve(this.size)}}class of extends Jd{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),m.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t){this.persistence=t,this.Fr=new ye(n=>Bs(n),js),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Gs,this.targetCount=0,this.Nr=le.On()}forEachTarget(t,n){return this.Fr.forEach((r,s)=>n(s)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),m.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new le(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,m.resolve()}updateTargetData(t,n){return this.kn(n),m.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),m.waitFor(i).next(()=>s)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return m.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),m.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),m.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return m.resolve(r)}containsKey(t,n){return m.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,n){this.Br={},this.overlays={},this.Lr=new xs(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new af(this),this.indexManager=new Xd,this.remoteDocumentCache=function(s){return new sf(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Wd(n),this.Kr=new ef(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new nf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new rf(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);const s=new cf(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,n){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class cf extends Kh{constructor(t){super(),this.currentSequenceNumber=t}}class Hs{constructor(t){this.persistence=t,this.Gr=new Gs,this.zr=null}static jr(t){return new Hs(t)}get Hr(){if(this.zr)return this.zr;throw T()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),m.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),m.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const s=E.fromPath(r);return this.Jr(t,s).next(i=>{i||n.removeEntry(s,A.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return m.or([()=>m.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=s}static Qi(t,n){let r=S(),s=S();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ws(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.zi(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new lf;return this.Hi(t,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>i.result)}Ji(t,n,r,s){return r.documentReadCount<this.Ui?(Ie()<=V.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",Xt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(Ie()<=V.DEBUG&&_("QueryEngine","Query:",Xt(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Ie()<=V.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",Xt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pt(n))):m.resolve())}zi(t,n){if(Ki(n))return m.resolve(null);let r=pt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ss(n,null,"F"),r=pt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=S(...i);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Yi(n,a);return this.Zi(n,c,o,u.readTime)?this.zi(t,ss(n,null,"F")):this.Xi(t,c,n,u)}))})))}ji(t,n,r,s){return Ki(n)||s.isEqual(A.min())?m.resolve(null):this.Gi.getDocuments(t,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?m.resolve(null):(Ie()<=V.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xt(n)),this.Xi(t,o,n,jh(s,-1)).next(a=>a))})}Yi(t,n){let r=new X(Ka(t));return n.forEach((s,i)=>{cr(t,i)&&(r=r.add(i))}),r}Zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(t,n,r){return Ie()<=V.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Xt(n)),this.Gi.getDocumentsMatchingQuery(t,n,Dt.min(),r)}Xi(t,n,r,s){return this.Gi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,n,r,s){this.persistence=t,this.es=n,this.serializer=s,this.ts=new x(D),this.ns=new ye(i=>Bs(i),js),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tf(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function ff(e,t,n,r){return new df(e,t,n,r)}async function du(e,t){const n=w(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=S();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function mf(e,t){const n=w(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,d=h.keys();let p=m.resolve();return d.forEach(P=>{p=p.next(()=>l.getEntry(u,P)).next(R=>{const v=c.docVersions.get(P);k(v!==null),R.version.compareTo(v)<0&&(h.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),l.addEntry(R)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=S();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function fu(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function pf(e,t){const n=w(e),r=t.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];t.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(nt.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(R,v,O){return R.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,p,l)&&a.push(n.qr.updateTargetData(i,p))});let u=Rt(),c=S();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(gf(i,o,t.documentUpdates).next(l=>{u=l.us,c=l.cs})),!r.isEqual(A.min())){const l=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.ts=s,i))}function gf(e,t,n){let r=S(),s=S();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Rt();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(A.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{us:o,cs:s}})}function _f(e,t){const n=w(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function yf(e,t){const n=w(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,t).next(i=>i?(s=i,m.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Pt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function cs(e,t,n){const r=w(e),s=r.ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!sn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(s.target)}function no(e,t,n){const r=w(e);let s=A.min(),i=S();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=w(u),d=h.ns.get(l);return d!==void 0?m.resolve(h.ts.get(d)):h.qr.getTargetData(c,l)}(r,o,pt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?s:A.min(),n?i:S())).next(a=>(Ef(r,cd(t),a),{documents:a,ls:i})))}function Ef(e,t,n){let r=e.rs.get(t)||A.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.rs.set(t,r)}class ro{constructor(){this.activeTargetIds=pd()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vf{constructor(){this.eo=new ro,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new ro,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn=null;function kr(){return vn===null?vn=function(){return 268435456+Math.round(2147483648*Math.random())}():vn++,"0x"+vn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="WebChannelConnection";class wf extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=kr(),u=this.So(n,r);_("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,u,c,s).then(l=>(_("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw oe("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",u,"request:",s),l})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ge}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=If[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,s){const i=kr();return new Promise((o,a)=>{const u=new Dh;u.setWithCredentials(!0),u.listenOnce(Ch.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Dr.NO_ERROR:const l=u.getResponseJson();_(Y,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case Dr.TIMEOUT:_(Y,`RPC '${t}' ${i} timed out`),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const h=u.getStatus();if(_(Y,`RPC '${t}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const P=function(v){const O=v.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(O)>=0?O:f.UNKNOWN}(p.status);a(new y(P,p.message))}else a(new y(f.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{_(Y,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);_(Y,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}vo(t,n,r){const s=kr(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ph(),a=Sh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.bo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=i.join("");_(Y,`Creating RPC '${t}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);let d=!1,p=!1;const P=new Af({co:v=>{p?_(Y,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(d||(_(Y,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),_(Y,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},lo:()=>h.close()}),R=(v,O,K)=>{v.listen(O,it=>{try{K(it)}catch(vt){setTimeout(()=>{throw vt},0)}})};return R(h,_n.EventType.OPEN,()=>{p||_(Y,`RPC '${t}' stream ${s} transport opened.`)}),R(h,_n.EventType.CLOSE,()=>{p||(p=!0,_(Y,`RPC '${t}' stream ${s} transport closed`),P.Ro())}),R(h,_n.EventType.ERROR,v=>{p||(p=!0,oe(Y,`RPC '${t}' stream ${s} transport errored:`,v),P.Ro(new y(f.UNAVAILABLE,"The operation could not be completed")))}),R(h,_n.EventType.MESSAGE,v=>{var O;if(!p){const K=v.data[0];k(!!K);const it=K,vt=it.error||((O=it[0])===null||O===void 0?void 0:O.error);if(vt){_(Y,`RPC '${t}' stream ${s} received error:`,vt);const hn=vt.status;let Wt=function(Qu){const hi=F[Qu];if(hi!==void 0)return ru(hi)}(hn),dn=vt.message;Wt===void 0&&(Wt=f.INTERNAL,dn="Unknown error status: "+hn+" with message "+vt.message),p=!0,P.Ro(new y(Wt,dn)),h.close()}else _(Y,`RPC '${t}' stream ${s} received:`,K),P.Vo(K)}}),R(a,Vh.STAT_EVENT,v=>{v.stat===Mi.PROXY?_(Y,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===Mi.NOPROXY&&_(Y,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.Ao()},0),P}}function Nr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e){return new Od(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,n,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&_("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,n,r,s,i,o,a,u){this.si=t,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new mu(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(wt(n.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{t(()=>{const s=new y(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rf extends pu{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=Ld(this.serializer,t),r=function(i){if(!("targetChange"in i))return A.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?A.min():o.readTime?_t(o.readTime):A.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=us(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=rs(u)?{documents:Bd(i,u)}:{query:jd(i,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ou(i,o.resumeToken);const c=is(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(A.min())>0){a.readTime=Un(i,o.snapshotVersion.toTimestamp());const c=is(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=$d(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=us(this.serializer),n.removeTarget=t,this.e_(n)}}class Pf extends pu{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(k(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=Ud(t.writeResults,t.commitTime),r=_t(t.commitTime);return this.listener.I_(r,n)}return k(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=us(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Fd(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}Co(t,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(f.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class Cf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(wt(n),this.f_=!1):_("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Ht(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=w(u);c.C_.add(4),await un(c),c.M_.set("Unknown"),c.C_.delete(4),await mr(c)}(this))})}),this.M_=new Cf(r,s)}}async function mr(e){if(Ht(e))for(const t of e.v_)await t(!0)}async function un(e){for(const t of e.v_)await t(!1)}function gu(e,t){const n=w(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),Ys(n)?Xs(n):Ee(n).Ho()&&Qs(n,t))}function _u(e,t){const n=w(e),r=Ee(n);n.D_.delete(t),r.Ho()&&yu(n,t),n.D_.size===0&&(r.Ho()?r.Zo():Ht(n)&&n.M_.set("Unknown"))}function Qs(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(A.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ee(e).u_(t)}function yu(e,t){e.x_.Oe(t),Ee(e).c_(t)}function Xs(e){e.x_=new Dd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ee(e).start(),e.M_.g_()}function Ys(e){return Ht(e)&&!Ee(e).jo()&&e.D_.size>0}function Ht(e){return w(e).C_.size===0}function Eu(e){e.x_=void 0}async function Df(e){e.D_.forEach((t,n)=>{Qs(e,t)})}async function bf(e,t){Eu(e),Ys(e)?(e.M_.w_(t),Xs(e)):e.M_.set("Unknown")}async function kf(e,t,n){if(e.M_.set("Online"),t instanceof iu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(e,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Bn(e,r)}else if(t instanceof An?e.x_.$e(t):t instanceof su?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(A.min()))try{const r=await fu(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.D_.get(c);l&&i.D_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=i.D_.get(u);if(!l)return;i.D_.set(u,l.withResumeToken(nt.EMPTY_BYTE_STRING,l.snapshotVersion)),yu(i,u);const h=new Pt(l.target,u,c,l.sequenceNumber);Qs(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Bn(e,r)}}async function Bn(e,t,n){if(!sn(t))throw t;e.C_.add(1),await un(e),e.M_.set("Offline"),n||(n=()=>fu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await mr(e)})}function vu(e,t){return t().catch(n=>Bn(e,n,t))}async function pr(e){const t=w(e),n=kt(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;Nf(t);)try{const s=await _f(t.localStore,r);if(s===null){t.b_.length===0&&n.Zo();break}r=s.batchId,Of(t,s)}catch(s){await Bn(t,s)}Tu(t)&&Iu(t)}function Nf(e){return Ht(e)&&e.b_.length<10}function Of(e,t){e.b_.push(t);const n=kt(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function Tu(e){return Ht(e)&&!kt(e).jo()&&e.b_.length>0}function Iu(e){kt(e).start()}async function Mf(e){kt(e).E_()}async function xf(e){const t=kt(e);for(const n of e.b_)t.P_(n.mutations)}async function Lf(e,t,n){const r=e.b_.shift(),s=$s.from(r,t,n);await vu(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await pr(e)}async function Ff(e,t){t&&kt(e).h_&&await async function(r,s){if(function(o){return Sd(o)&&o!==f.ABORTED}(s.code)){const i=r.b_.shift();kt(r).Yo(),await vu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pr(r)}}(e,t),Tu(e)&&Iu(e)}async function io(e,t){const n=w(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Ht(n);n.C_.add(3),await un(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await mr(n)}async function Uf(e,t){const n=w(e);t?(n.C_.delete(2),await mr(n)):t||(n.C_.add(2),await un(n),n.M_.set("Unknown"))}function Ee(e){return e.O_||(e.O_=function(n,r,s){const i=w(n);return i.A_(),new Rf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:Df.bind(null,e),Io:bf.bind(null,e),a_:kf.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),Ys(e)?Xs(e):e.M_.set("Unknown")):(await e.O_.stop(),Eu(e))})),e.O_}function kt(e){return e.N_||(e.N_=function(n,r,s){const i=w(n);return i.A_(),new Pf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:Mf.bind(null,e),Io:Ff.bind(null,e),T_:xf.bind(null,e),I_:Lf.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await pr(e)):(await e.N_.stop(),e.b_.length>0&&(_("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Js(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zs(e,t){if(wt("AsyncQueue",`${t}: ${e}`),sn(e))return new y(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=Re(),this.sortedSet=new x(this.comparator)}static emptySet(t){return new re(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof re)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new re;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.B_=new x(E.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):T():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class he{constructor(t,n,r,s,i,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new he(t,n,re.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ur(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.k_=void 0,this.listeners=[]}}class jf{constructor(){this.queries=new ye(t=>za(t),ur),this.onlineState="Unknown",this.q_=new Set}}async function ti(e,t){const n=w(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Bf),s)try{i.k_=await n.onListen(r)}catch(o){const a=Zs(o,`Initialization of query '${Xt(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.Q_(n.onlineState),i.k_&&t.K_(i.k_)&&ni(n)}async function ei(e,t){const n=w(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function qf(e,t){const n=w(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&ni(n)}function $f(e,t,n){const r=w(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function ni(e){e.q_.forEach(t=>{t.next()})}class ri{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new he(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=he.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t){this.key=t}}class wu{constructor(t){this.key=t}}class zf{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=S(),this.mutatedKeys=S(),this._a=Ka(t),this.aa=new re(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new oo,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const d=s.get(l),p=cr(this.query,h)?h:null,P=!!d&&this.mutatedKeys.has(d.key),R=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?P!==R&&(r.track({type:3,doc:p}),v=!0):this.ha(d,p)||(r.track({type:2,doc:p}),v=!0,(u&&this._a(p,u)>0||c&&this._a(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),v=!0):d&&!p&&(r.track({type:1,doc:d}),v=!0,(u||c)&&(a=!0)),v&&(p?(o=o.add(p),i=R?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const o=t.la.L_();o.sort((l,h)=>function(p,P){const R=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return R(p)-R(P)}(l.type,h.type)||this._a(l.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],u=this.oa.size===0&&this.current&&!s?1:0,c=u!==this.sa;return this.sa=u,o.length!==0||c?{snapshot:new he(this.query,t.aa,i,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new oo,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=S(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new wu(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new Au(r))}),n}da(t){this.ia=t.ls,this.oa=S();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return he.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Kf{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Gf{constructor(t){this.key=t,this.Ra=!1}}class Hf{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ye(a=>za(a),ur),this.fa=new Map,this.ga=new Set,this.pa=new x(E.comparator),this.ya=new Map,this.wa=new Gs,this.Sa={},this.ba=new Map,this.Da=le.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Wf(e,t){const n=sm(e);let r,s;const i=n.ma.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await yf(n.localStore,pt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Qf(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&gu(n.remoteStore,o)}return s}async function Qf(e,t,n,r,s){e.va=(h,d,p)=>async function(R,v,O,K){let it=v.view.ca(O);it.Zi&&(it=await no(R.localStore,v.query,!1).then(({documents:dn})=>v.view.ca(dn,it)));const vt=K&&K.targetChanges.get(v.targetId),hn=K&&K.targetMismatches.get(v.targetId)!=null,Wt=v.view.applyChanges(it,R.isPrimaryClient,vt,hn);return uo(R,v.targetId,Wt.Ta),Wt.snapshot}(e,h,d,p);const i=await no(e.localStore,t,!0),o=new zf(t,i.ls),a=o.ca(i.documents),u=an.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,u);uo(e,n,c.Ta);const l=new Kf(t,n,o);return e.ma.set(t,l),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),c.snapshot}async function Xf(e,t){const n=w(e),r=n.ma.get(t),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!ur(i,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await cs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_u(n.remoteStore,r.targetId),ls(n,r.targetId)}).catch(rn)):(ls(n,r.targetId),await cs(n.localStore,r.targetId,!0))}async function Yf(e,t,n){const r=im(e);try{const s=await function(o,a){const u=w(o),c=j.now(),l=a.reduce((p,P)=>p.add(P.key),S());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",p=>{let P=Rt(),R=S();return u.ss.getEntries(p,l).next(v=>{P=v,P.forEach((O,K)=>{K.isValidDocument()||(R=R.add(O))})}).next(()=>u.localDocuments.getOverlayedDocuments(p,P)).next(v=>{h=v;const O=[];for(const K of a){const it=Id(K,h.get(K.key).overlayedDocument);it!=null&&O.push(new Gt(K.key,it,La(it.value.mapValue),gt.exists(!0)))}return u.mutationQueue.addMutationBatch(p,c,O,a)}).next(v=>{d=v;const O=v.applyToLocalDocumentSet(h,R);return u.documentOverlayCache.saveOverlays(p,v.batchId,O)})}).then(()=>({batchId:d.batchId,changes:Ha(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Sa[o.currentUser.toKey()];c||(c=new x(D)),c=c.insert(a,u),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await cn(r,s.changes),await pr(r.remoteStore)}catch(s){const i=Zs(s,"Failed to persist write");n.reject(i)}}async function Ru(e,t){const n=w(e);try{const r=await pf(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(k(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?k(o.Ra):s.removedDocuments.size>0&&(k(o.Ra),o.Ra=!1))}),await cn(n,r,t)}catch(r){await rn(r)}}function ao(e,t,n){const r=w(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=w(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&ni(u)}(r.eventManager,t),s.length&&r.Va.a_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Jf(e,t,n){const r=w(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ya.get(t),i=s&&s.key;if(i){let o=new x(E.comparator);o=o.insert(i,Z.newNoDocument(i,A.min()));const a=S().add(i),u=new dr(A.min(),new Map,new x(D),o,a);await Ru(r,u),r.pa=r.pa.remove(i),r.ya.delete(t),si(r)}else await cs(r.localStore,t,!1).then(()=>ls(r,t,n)).catch(rn)}async function Zf(e,t){const n=w(e),r=t.batch.batchId;try{const s=await mf(n.localStore,t);Su(n,r,null),Pu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await cn(n,s)}catch(s){await rn(s)}}async function tm(e,t,n){const r=w(e);try{const s=await function(o,a){const u=w(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(k(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,t);Su(r,t,n),Pu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await cn(r,s)}catch(s){await rn(s)}}function Pu(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function Su(e,t,n){const r=w(e);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Sa[r.currentUser.toKey()]=s}}function ls(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||Cu(e,r)})}function Cu(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(_u(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),si(e))}function uo(e,t,n){for(const r of n)r instanceof Au?(e.wa.addReference(r.key,t),em(e,r)):r instanceof wu?(_("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||Cu(e,r.key)):T()}function em(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(_("SyncEngine","New document in limbo: "+n),e.ga.add(r),si(e))}function si(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new E(M.fromString(t)),r=e.Da.next();e.ya.set(r,new Gf(n)),e.pa=e.pa.insert(n,r),gu(e.remoteStore,new Pt(pt(ar(n.path)),r,"TargetPurposeLimboResolution",xs._e))}}async function cn(e,t,n){const r=w(e),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const l=Ws.Qi(u.targetId,c);i.push(l)}}))}),await Promise.all(o),r.Va.a_(s),await async function(u,c){const l=w(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(c,d=>m.forEach(d.ki,p=>l.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>m.forEach(d.qi,p=>l.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!sn(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=l.ts.get(d),P=p.snapshotVersion,R=p.withLastLimboFreeSnapshotVersion(P);l.ts=l.ts.insert(d,R)}}}(r.localStore,i))}async function nm(e,t){const n=w(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await du(n.localStore,t);n.currentUser=t,function(i,o){i.ba.forEach(a=>{a.forEach(u=>{u.reject(new y(f.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await cn(n,r._s)}}function rm(e,t){const n=w(e),r=n.ya.get(t);if(r&&r.Ra)return S().add(r.key);{let s=S();const i=n.fa.get(t);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function sm(e){const t=w(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ru.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jf.bind(null,t),t.Va.a_=qf.bind(null,t.eventManager),t.Va.Fa=$f.bind(null,t.eventManager),t}function im(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Zf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tm.bind(null,t),t}class co{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=fr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return ff(this.persistence,new hf,t.initialUser,this.serializer)}createPersistence(t){return new uf(Hs.jr,this.serializer)}createSharedClientState(t){return new vf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class om{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ao(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nm.bind(null,this.syncEngine),await Uf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new jf}()}createDatastore(t){const n=fr(t.databaseInfo.databaseId),r=function(i){return new wf(i)}(t.databaseInfo);return function(i,o,a,u){return new Sf(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new Vf(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ao(this.syncEngine,n,0),function(){return so.D()?new so:new Tf}())}createSyncEngine(t,n){return function(s,i,o,a,u,c,l){const h=new Hf(s,i,o,a,u,c);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=w(n);_("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await un(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):wt("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=J.UNAUTHENTICATED,this.clientId=Oa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(_("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Zs(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Or(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await du(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function lo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await cm(e);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>io(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>io(t.remoteStore,i)),e._onlineComponents=t}function um(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function cm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Or(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!um(n))throw n;oe("Error using user provided cache. Falling back to memory cache: "+n),await Or(e,new co)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Or(e,new co);return e._offlineComponents}async function Vu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await lo(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await lo(e,new om))),e._onlineComponents}function lm(e){return Vu(e).then(t=>t.syncEngine)}async function jn(e){const t=await Vu(e),n=t.eventManager;return n.onListen=Wf.bind(null,t.syncEngine),n.onUnlisten=Xf.bind(null,t.syncEngine),n}function hm(e,t,n={}){const r=new It;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const l=new ii({next:d=>{o.enqueueAndForget(()=>ei(i,h));const p=d.docs.has(a);!p&&d.fromCache?c.reject(new y(f.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&u&&u.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new ri(ar(a.path),l,{includeMetadataChanges:!0,J_:!0});return ti(i,h)}(await jn(e),e.asyncQueue,t,n,r)),r.promise}function dm(e,t,n={}){const r=new It;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const l=new ii({next:d=>{o.enqueueAndForget(()=>ei(i,h)),d.fromCache&&u.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new ri(a,l,{includeMetadataChanges:!0,J_:!0});return ti(i,h)}(await jn(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(e,t,n){if(!n)throw new y(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function fm(e,t,n,r){if(t===!0&&r===!0)throw new y(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function fo(e){if(!E.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function mo(e){if(E.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function lt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oi(e);throw new y(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Du((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class gr{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new po({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new po(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kh;switch(r.type){case"firstParty":return new xh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ho.get(n);r&&(_("ComponentProvider","Removing Datastore"),ho.delete(n),r.terminate())}(this),Promise.resolve()}}function mm(e,t,n,r={}){var s;const i=(e=lt(e,gr))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&oe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=J.MOCK_USER;else{a=cc(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new J(c)}e._authCredentials=new Nh(new Na(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ln(this.firestore,t,this._query)}}class st{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new st(this.firestore,t,this._key)}}class Vt extends ln{constructor(t,n,r){super(t,n,ar(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new st(this.firestore,null,new E(t))}withConverter(t){return new Vt(this.firestore,t,this._path)}}function ku(e,t,...n){if(e=se(e),bu("collection","path",t),e instanceof gr){const r=M.fromString(t,...n);return mo(r),new Vt(e,null,r)}{if(!(e instanceof st||e instanceof Vt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(M.fromString(t,...n));return mo(r),new Vt(e.firestore,null,r)}}function ep(e,t,...n){if(e=se(e),arguments.length===1&&(t=Oa.newId()),bu("doc","path",t),e instanceof gr){const r=M.fromString(t,...n);return fo(r),new st(e,null,new E(r))}{if(!(e instanceof st||e instanceof Vt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(M.fromString(t,...n));return fo(r),new st(e.firestore,e instanceof Vt?e.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new mu(this,"async_queue_retry"),this.iu=()=>{const n=Nr();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Nr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Nr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new It;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!sn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const s=Js.createAndSchedule(this,t,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&T()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}function go(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class zt extends gr{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new pm}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nu(this),this._firestoreClient.terminate()}}function gm(e,t){const n=typeof e=="object"?e:gl(),r=typeof e=="string"?e:t||"(default)",s=dl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ac("firestore");i&&mm(s,...i)}return s}function _r(e){return e._firestoreClient||Nu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Nu(e){var t,n,r;const s=e._freezeSettings(),i=function(a,u,c,l){return new Wh(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Du(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new am(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this._byteString=t}static fromBase64String(t){try{return new de(nt.fromBase64String(t))}catch(n){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new de(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=/^__.*__$/;class ym{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Gt(t,this.data,this.fieldMask,n,this.fieldTransforms):new on(t,this.data,n,this.fieldTransforms)}}function Mu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class ci{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Au(t),s}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return qn(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(Mu(this.Iu)&&_m.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Em{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||fr(t)}pu(t,n,r,s=!1){return new ci({Iu:t,methodName:n,gu:r,path:W.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vm(e){const t=e._freezeSettings(),n=fr(e._databaseId);return new Em(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Tm(e,t,n,r,s,i={}){const o=e.pu(i.merge||i.mergeFields?2:0,t,n,s);Uu("Data must be an object, but it was:",o,r);const a=Lu(r,o);let u,c;if(i.merge)u=new ct(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Im(t,h,n);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);wm(l,d)||l.push(d)}u=new ct(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new ym(new ut(a),u,c)}function xu(e,t){if(Fu(e=se(e)))return Uu("Unsupported field value:",t,e),Lu(e,t);if(e instanceof Ou)return function(r,s){if(!Mu(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=xu(a,s.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=j.fromDate(r);return{timestampValue:Un(s.serializer,i)}}if(r instanceof j){const i=new j(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Un(s.serializer,i)}}if(r instanceof ui)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof de)return{bytesValue:ou(s.serializer,r._byteString)};if(r instanceof st){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ks(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${oi(r)}`)}(e,t)}function Lu(e,t){const n={};return Ma(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_e(e,(r,s)=>{const i=xu(s,t.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Fu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof j||e instanceof ui||e instanceof de||e instanceof st||e instanceof Ou)}function Uu(e,t,n){if(!Fu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=oi(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function Im(e,t,n){if((t=se(t))instanceof ai)return t._internalPath;if(typeof t=="string")return Bu(e,t);throw qn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Am=new RegExp("[~\\*/\\[\\]]");function Bu(e,t,n){if(t.search(Am)>=0)throw qn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ai(...t.split("."))._internalPath}catch{throw qn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qn(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new y(f.INVALID_ARGUMENT,a+e+u)}function wm(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(qu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Rm extends ju{data(){return super.data()}}function qu(e,t){return typeof t=="string"?Bu(e,t):t instanceof ai?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pm{convertValue(t,n="none"){switch($t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return _e(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new ui(U(t.latitude),U(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Fs(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ze(t));default:return null}}convertTimestamp(t){const n=bt(t);return new j(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=M.fromString(t);k(hu(r));const s=new Ke(r.get(1),r.get(3)),i=new E(r.popFirst(5));return s.isEqual(n)||wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zu extends ju{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new wn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(qu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wn extends zu{data(t={}){return super.data(t)}}class Ku{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Se(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new wn(this._firestore,this._userDataWriter,r.key,r,new Se(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new wn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Se(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new wn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Se(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Cm(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Cm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(e){e=lt(e,st);const t=lt(e.firestore,zt);return hm(_r(t),e._key).then(n=>Hu(t,e,n))}class li extends Pm{constructor(t){super(),this.firestore=t}convertBytes(t){return new de(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new st(this.firestore,null,n)}}function rp(e){e=lt(e,ln);const t=lt(e.firestore,zt),n=_r(t),r=new li(t);return $u(e._query),dm(n,e._query).then(s=>new Ku(t,r,e,s))}function sp(e,t,n){e=lt(e,st);const r=lt(e.firestore,zt),s=Sm(e.converter,t,n);return Gu(r,[Tm(vm(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,gt.none())])}function ip(e){return Gu(lt(e.firestore,zt),[new qs(e._key,gt.none())])}function op(e,...t){var n,r,s;e=se(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||go(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(go(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let u,c,l;if(e instanceof st)c=lt(e.firestore,zt),l=ar(e._key.path),u={next:h=>{t[o]&&t[o](Hu(c,e,h))},error:t[o+1],complete:t[o+2]};else{const h=lt(e,ln);c=lt(h.firestore,zt),l=h._query;const d=new li(c);u={next:p=>{t[o]&&t[o](new Ku(c,d,h,p))},error:t[o+1],complete:t[o+2]},$u(e._query)}return function(d,p,P,R){const v=new ii(R),O=new ri(p,v,P);return d.asyncQueue.enqueueAndForget(async()=>ti(await jn(d),O)),()=>{v.Na(),d.asyncQueue.enqueueAndForget(async()=>ei(await jn(d),O))}}(_r(c),l,a,u)}function Gu(e,t){return function(r,s){const i=new It;return r.asyncQueue.enqueueAndForget(async()=>Yf(await lm(r),s,i)),i.promise}(_r(e),t)}function Hu(e,t,n){const r=n.docs.get(t._key),s=new li(e);return new zu(e,s,t._key,r,new Se(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){ge=s})(pl),Sn(new Ne("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new zt(new Oh(r.getProvider("auth-internal")),new Fh(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ke(c.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),te(xi,"4.4.0",t),te(xi,"4.4.0","esm2017")})();var Vm="firebase",Dm="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te(Vm,Dm,"app");const bm=So({apiKey:"AIzaSyBpcciTXyAJMjikhFjBpeve9PmhpkWU4CM",authDomain:"fruuters.firebaseapp.com",projectId:"fruuters",storageBucket:"fruuters.appspot.com",messagingSenderId:"451851486618",appId:"1:451851486618:web:45292e6b65e699a536e623",measurementId:"G-649Y2M0QB5"}),Wu=gm(bm),ap=ku(Wu,"products"),up=ku(Wu,"producers");export{qm as A,Xm as B,Ne as C,uc as D,Io as E,fe as F,Hm as G,$m as H,Km as I,Yu as J,Qm as K,V as L,Fm as M,jm as N,Bm as O,zm as P,Ym as Q,Nm as R,pl as S,tc as T,op as U,j as V,ui as W,Sn as _,ep as a,np as b,ku as c,Wu as d,ip as e,up as f,rp as g,Om as h,Mm as i,Lm as j,xm as k,se as l,Wm as m,lc as n,wo as o,ap as p,Gm as q,te as r,sp as s,Mr as t,hc as u,Eo as v,gl as w,Xu as x,Um as y,fi as z};
