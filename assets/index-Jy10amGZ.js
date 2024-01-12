(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var St="top",Wt="bottom",Kt="right",Rt="left",nc="auto",Rr=[St,Wt,Kt,Rt],fi="start",lr="end",qy="clippingParents",Ld="viewport",Vi="popper",Wy="reference",hh=Rr.reduce(function(t,e){return t.concat([e+"-"+fi,e+"-"+lr])},[]),Md=[].concat(Rr,[nc]).reduce(function(t,e){return t.concat([e,e+"-"+fi,e+"-"+lr])},[]),Ky="beforeRead",zy="read",Gy="afterRead",Yy="beforeMain",Qy="main",Xy="afterMain",Jy="beforeWrite",Zy="write",ev="afterWrite",tv=[Ky,zy,Gy,Yy,Qy,Xy,Jy,Zy,ev];function Un(t){return t?(t.nodeName||"").toLowerCase():null}function zt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function pi(t){var e=zt(t).Element;return t instanceof e||t instanceof Element}function tn(t){var e=zt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Vd(t){if(typeof ShadowRoot>"u")return!1;var e=zt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function sI(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!tn(r)||!Un(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function iI(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!tn(i)||!Un(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const Fd={name:"applyStyles",enabled:!0,phase:"write",fn:sI,effect:iI,requires:["computeStyles"]};function Vn(t){return t.split("-")[0]}var oi=Math.max,pl=Math.min,cr=Math.round;function dh(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function nv(){return!/^((?!chrome|android).)*safari/i.test(dh())}function ur(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&tn(t)&&(i=t.offsetWidth>0&&cr(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&cr(s.height)/t.offsetHeight||1);var o=pi(t)?zt(t):window,a=o.visualViewport,l=!nv()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,d=s.height/r;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c,x:c,y:u}}function $d(t){var e=ur(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function sv(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Vd(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function ns(t){return zt(t).getComputedStyle(t)}function rI(t){return["table","td","th"].indexOf(Un(t))>=0}function $s(t){return((pi(t)?t.ownerDocument:t.document)||window.document).documentElement}function sc(t){return Un(t)==="html"?t:t.assignedSlot||t.parentNode||(Vd(t)?t.host:null)||$s(t)}function tm(t){return!tn(t)||ns(t).position==="fixed"?null:t.offsetParent}function oI(t){var e=/firefox/i.test(dh()),n=/Trident/i.test(dh());if(n&&tn(t)){var s=ns(t);if(s.position==="fixed")return null}var i=sc(t);for(Vd(i)&&(i=i.host);tn(i)&&["html","body"].indexOf(Un(i))<0;){var r=ns(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function na(t){for(var e=zt(t),n=tm(t);n&&rI(n)&&ns(n).position==="static";)n=tm(n);return n&&(Un(n)==="html"||Un(n)==="body"&&ns(n).position==="static")?e:n||oI(t)||e}function Ud(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function fo(t,e,n){return oi(t,pl(e,n))}function aI(t,e,n){var s=fo(t,e,n);return s>n?n:s}function iv(){return{top:0,right:0,bottom:0,left:0}}function rv(t){return Object.assign({},iv(),t)}function ov(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var lI=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,rv(typeof e!="number"?e:ov(e,Rr))};function cI(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Vn(n.placement),l=Ud(a),c=[Rt,Kt].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var h=lI(i.padding,n),d=$d(r),f=l==="y"?St:Rt,_=l==="y"?Wt:Kt,g=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],y=o[l]-n.rects.reference[l],E=na(r),C=E?l==="y"?E.clientHeight||0:E.clientWidth||0:0,w=g/2-y/2,T=h[f],x=C-d[u]-h[_],R=C/2-d[u]/2+w,W=fo(T,R,x),M=l;n.modifiersData[s]=(e={},e[M]=W,e.centerOffset=W-R,e)}}function uI(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||sv(e.elements.popper,i)&&(e.elements.arrow=i))}const av={name:"arrow",enabled:!0,phase:"main",fn:cI,effect:uI,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function hr(t){return t.split("-")[1]}var hI={top:"auto",right:"auto",bottom:"auto",left:"auto"};function dI(t,e){var n=t.x,s=t.y,i=e.devicePixelRatio||1;return{x:cr(n*i)/i||0,y:cr(s*i)/i||0}}function nm(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,f=d===void 0?0:d,_=o.y,g=_===void 0?0:_,y=typeof u=="function"?u({x:f,y:g}):{x:f,y:g};f=y.x,g=y.y;var E=o.hasOwnProperty("x"),C=o.hasOwnProperty("y"),w=Rt,T=St,x=window;if(c){var R=na(n),W="clientHeight",M="clientWidth";if(R===zt(n)&&(R=$s(n),ns(R).position!=="static"&&a==="absolute"&&(W="scrollHeight",M="scrollWidth")),R=R,i===St||(i===Rt||i===Kt)&&r===lr){T=Wt;var Z=h&&R===x&&x.visualViewport?x.visualViewport.height:R[W];g-=Z-s.height,g*=l?1:-1}if(i===Rt||(i===St||i===Wt)&&r===lr){w=Kt;var Y=h&&R===x&&x.visualViewport?x.visualViewport.width:R[M];f-=Y-s.width,f*=l?1:-1}}var ue=Object.assign({position:a},c&&hI),j=u===!0?dI({x:f,y:g},zt(n)):{x:f,y:g};if(f=j.x,g=j.y,l){var se;return Object.assign({},ue,(se={},se[T]=C?"0":"",se[w]=E?"0":"",se.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",se))}return Object.assign({},ue,(e={},e[T]=C?g+"px":"",e[w]=E?f+"px":"",e.transform="",e))}function fI(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:Vn(e.placement),variation:hr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,nm(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,nm(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Bd={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:fI,data:{}};var Ra={passive:!0};function pI(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=zt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,Ra)}),a&&l.addEventListener("resize",n.update,Ra),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,Ra)}),a&&l.removeEventListener("resize",n.update,Ra)}}const Hd={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:pI,data:{}};var mI={left:"right",right:"left",bottom:"top",top:"bottom"};function tl(t){return t.replace(/left|right|bottom|top/g,function(e){return mI[e]})}var _I={start:"end",end:"start"};function sm(t){return t.replace(/start|end/g,function(e){return _I[e]})}function jd(t){var e=zt(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function qd(t){return ur($s(t)).left+jd(t).scrollLeft}function gI(t,e){var n=zt(t),s=$s(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=nv();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+qd(t),y:l}}function yI(t){var e,n=$s(t),s=jd(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=oi(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=oi(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+qd(t),l=-s.scrollTop;return ns(i||n).direction==="rtl"&&(a+=oi(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Wd(t){var e=ns(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function lv(t){return["html","body","#document"].indexOf(Un(t))>=0?t.ownerDocument.body:tn(t)&&Wd(t)?t:lv(sc(t))}function po(t,e){var n;e===void 0&&(e=[]);var s=lv(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=zt(s),o=i?[r].concat(r.visualViewport||[],Wd(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(po(sc(o)))}function fh(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function vI(t,e){var n=ur(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function im(t,e,n){return e===Ld?fh(gI(t,n)):pi(e)?vI(e,n):fh(yI($s(t)))}function EI(t){var e=po(sc(t)),n=["absolute","fixed"].indexOf(ns(t).position)>=0,s=n&&tn(t)?na(t):t;return pi(s)?e.filter(function(i){return pi(i)&&sv(i,s)&&Un(i)!=="body"}):[]}function TI(t,e,n,s){var i=e==="clippingParents"?EI(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=im(t,c,s);return l.top=oi(u.top,l.top),l.right=pl(u.right,l.right),l.bottom=pl(u.bottom,l.bottom),l.left=oi(u.left,l.left),l},im(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function cv(t){var e=t.reference,n=t.element,s=t.placement,i=s?Vn(s):null,r=s?hr(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case St:l={x:o,y:e.y-n.height};break;case Wt:l={x:o,y:e.y+e.height};break;case Kt:l={x:e.x+e.width,y:a};break;case Rt:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Ud(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case fi:l[c]=l[c]-(e[u]/2-n[u]/2);break;case lr:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function dr(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?qy:a,c=n.rootBoundary,u=c===void 0?Ld:c,h=n.elementContext,d=h===void 0?Vi:h,f=n.altBoundary,_=f===void 0?!1:f,g=n.padding,y=g===void 0?0:g,E=rv(typeof y!="number"?y:ov(y,Rr)),C=d===Vi?Wy:Vi,w=t.rects.popper,T=t.elements[_?C:d],x=TI(pi(T)?T:T.contextElement||$s(t.elements.popper),l,u,o),R=ur(t.elements.reference),W=cv({reference:R,element:w,strategy:"absolute",placement:i}),M=fh(Object.assign({},w,W)),Z=d===Vi?M:R,Y={top:x.top-Z.top+E.top,bottom:Z.bottom-x.bottom+E.bottom,left:x.left-Z.left+E.left,right:Z.right-x.right+E.right},ue=t.modifiersData.offset;if(d===Vi&&ue){var j=ue[i];Object.keys(Y).forEach(function(se){var Be=[Kt,Wt].indexOf(se)>=0?1:-1,rt=[St,Wt].indexOf(se)>=0?"y":"x";Y[se]+=j[rt]*Be})}return Y}function wI(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Md:l,u=hr(s),h=u?a?hh:hh.filter(function(_){return hr(_)===u}):Rr,d=h.filter(function(_){return c.indexOf(_)>=0});d.length===0&&(d=h);var f=d.reduce(function(_,g){return _[g]=dr(t,{placement:g,boundary:i,rootBoundary:r,padding:o})[Vn(g)],_},{});return Object.keys(f).sort(function(_,g){return f[_]-f[g]})}function AI(t){if(Vn(t)===nc)return[];var e=tl(t);return[sm(t),e,sm(e)]}function bI(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,_=f===void 0?!0:f,g=n.allowedAutoPlacements,y=e.options.placement,E=Vn(y),C=E===y,w=l||(C||!_?[tl(y)]:AI(y)),T=[y].concat(w).reduce(function(Ft,$t){return Ft.concat(Vn($t)===nc?wI(e,{placement:$t,boundary:u,rootBoundary:h,padding:c,flipVariations:_,allowedAutoPlacements:g}):$t)},[]),x=e.rects.reference,R=e.rects.popper,W=new Map,M=!0,Z=T[0],Y=0;Y<T.length;Y++){var ue=T[Y],j=Vn(ue),se=hr(ue)===fi,Be=[St,Wt].indexOf(j)>=0,rt=Be?"width":"height",fe=dr(e,{placement:ue,boundary:u,rootBoundary:h,altBoundary:d,padding:c}),le=Be?se?Kt:Rt:se?Wt:St;x[rt]>R[rt]&&(le=tl(le));var pe=tl(le),ot=[];if(r&&ot.push(fe[j]<=0),a&&ot.push(fe[le]<=0,fe[pe]<=0),ot.every(function(Ft){return Ft})){Z=ue,M=!1;break}W.set(ue,ot)}if(M)for(var Vt=_?3:1,kt=function($t){var He=T.find(function(b){var B=W.get(b);if(B)return B.slice(0,$t).every(function(F){return F})});if(He)return Z=He,"break"},Ke=Vt;Ke>0;Ke--){var cn=kt(Ke);if(cn==="break")break}e.placement!==Z&&(e.modifiersData[s]._skip=!0,e.placement=Z,e.reset=!0)}}const uv={name:"flip",enabled:!0,phase:"main",fn:bI,requiresIfExists:["offset"],data:{_skip:!1}};function rm(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function om(t){return[St,Kt,Wt,Rt].some(function(e){return t[e]>=0})}function II(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=dr(e,{elementContext:"reference"}),a=dr(e,{altBoundary:!0}),l=rm(o,s),c=rm(a,i,r),u=om(l),h=om(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const hv={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:II};function CI(t,e,n){var s=Vn(t),i=[Rt,St].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[Rt,Kt].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function SI(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=Md.reduce(function(u,h){return u[h]=CI(h,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=o}const dv={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:SI};function RI(t){var e=t.state,n=t.name;e.modifiersData[n]=cv({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Kd={name:"popperOffsets",enabled:!0,phase:"read",fn:RI,data:{}};function NI(t){return t==="x"?"y":"x"}function PI(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,_=n.tetherOffset,g=_===void 0?0:_,y=dr(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),E=Vn(e.placement),C=hr(e.placement),w=!C,T=Ud(E),x=NI(T),R=e.modifiersData.popperOffsets,W=e.rects.reference,M=e.rects.popper,Z=typeof g=="function"?g(Object.assign({},e.rects,{placement:e.placement})):g,Y=typeof Z=="number"?{mainAxis:Z,altAxis:Z}:Object.assign({mainAxis:0,altAxis:0},Z),ue=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(R){if(r){var se,Be=T==="y"?St:Rt,rt=T==="y"?Wt:Kt,fe=T==="y"?"height":"width",le=R[T],pe=le+y[Be],ot=le-y[rt],Vt=f?-M[fe]/2:0,kt=C===fi?W[fe]:M[fe],Ke=C===fi?-M[fe]:-W[fe],cn=e.elements.arrow,Ft=f&&cn?$d(cn):{width:0,height:0},$t=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:iv(),He=$t[Be],b=$t[rt],B=fo(0,W[fe],Ft[fe]),F=w?W[fe]/2-Vt-B-He-Y.mainAxis:kt-B-He-Y.mainAxis,z=w?-W[fe]/2+Vt+B+b+Y.mainAxis:Ke+B+b+Y.mainAxis,_e=e.elements.arrow&&na(e.elements.arrow),Oe=_e?T==="y"?_e.clientTop||0:_e.clientLeft||0:0,p=(se=ue==null?void 0:ue[T])!=null?se:0,m=le+F-p-Oe,v=le+z-p,I=fo(f?pl(pe,m):pe,le,f?oi(ot,v):ot);R[T]=I,j[T]=I-le}if(a){var A,k=T==="x"?St:Rt,H=T==="x"?Wt:Kt,O=R[x],D=x==="y"?"height":"width",N=O+y[k],q=O-y[H],Q=[St,Rt].indexOf(E)!==-1,G=(A=ue==null?void 0:ue[x])!=null?A:0,te=Q?N:O-W[D]-M[D]-G+Y.altAxis,ce=Q?O+W[D]+M[D]-G-Y.altAxis:q,be=f&&Q?aI(te,O,ce):fo(f?te:N,O,f?ce:q);R[x]=be,j[x]=be-O}e.modifiersData[s]=j}}const fv={name:"preventOverflow",enabled:!0,phase:"main",fn:PI,requiresIfExists:["offset"]};function OI(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function kI(t){return t===zt(t)||!tn(t)?jd(t):OI(t)}function DI(t){var e=t.getBoundingClientRect(),n=cr(e.width)/t.offsetWidth||1,s=cr(e.height)/t.offsetHeight||1;return n!==1||s!==1}function xI(t,e,n){n===void 0&&(n=!1);var s=tn(e),i=tn(e)&&DI(e),r=$s(e),o=ur(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((Un(e)!=="body"||Wd(r))&&(a=kI(e)),tn(e)?(l=ur(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=qd(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function LI(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function MI(t){var e=LI(t);return tv.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function VI(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function FI(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var am={placement:"bottom",modifiers:[],strategy:"absolute"};function lm(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function ic(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?am:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},am,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(E){var C=typeof E=="function"?E(u.options):E;g(),u.options=Object.assign({},r,u.options,C),u.scrollParents={reference:pi(a)?po(a):a.contextElement?po(a.contextElement):[],popper:po(l)};var w=MI(FI([].concat(s,u.options.modifiers)));return u.orderedModifiers=w.filter(function(T){return T.enabled}),_(),f.update()},forceUpdate:function(){if(!d){var E=u.elements,C=E.reference,w=E.popper;if(lm(C,w)){u.rects={reference:xI(C,na(w),u.options.strategy==="fixed"),popper:$d(w)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(Y){return u.modifiersData[Y.name]=Object.assign({},Y.data)});for(var T=0;T<u.orderedModifiers.length;T++){if(u.reset===!0){u.reset=!1,T=-1;continue}var x=u.orderedModifiers[T],R=x.fn,W=x.options,M=W===void 0?{}:W,Z=x.name;typeof R=="function"&&(u=R({state:u,options:M,name:Z,instance:f})||u)}}}},update:VI(function(){return new Promise(function(y){f.forceUpdate(),y(u)})}),destroy:function(){g(),d=!0}};if(!lm(a,l))return f;f.setOptions(c).then(function(y){!d&&c.onFirstUpdate&&c.onFirstUpdate(y)});function _(){u.orderedModifiers.forEach(function(y){var E=y.name,C=y.options,w=C===void 0?{}:C,T=y.effect;if(typeof T=="function"){var x=T({state:u,name:E,instance:f,options:w}),R=function(){};h.push(x||R)}})}function g(){h.forEach(function(y){return y()}),h=[]}return f}}var $I=ic(),UI=[Hd,Kd,Bd,Fd],BI=ic({defaultModifiers:UI}),HI=[Hd,Kd,Bd,Fd,dv,uv,fv,av,hv],zd=ic({defaultModifiers:HI});const pv=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Xy,afterRead:Gy,afterWrite:ev,applyStyles:Fd,arrow:av,auto:nc,basePlacements:Rr,beforeMain:Yy,beforeRead:Ky,beforeWrite:Jy,bottom:Wt,clippingParents:qy,computeStyles:Bd,createPopper:zd,createPopperBase:$I,createPopperLite:BI,detectOverflow:dr,end:lr,eventListeners:Hd,flip:uv,hide:hv,left:Rt,main:Qy,modifierPhases:tv,offset:dv,placements:Md,popper:Vi,popperGenerator:ic,popperOffsets:Kd,preventOverflow:fv,read:zy,reference:Wy,right:Kt,start:fi,top:St,variationPlacements:hh,viewport:Ld,write:Zy},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const cs=new Map,au={set(t,e,n){cs.has(t)||cs.set(t,new Map);const s=cs.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return cs.has(t)&&cs.get(t).get(e)||null},remove(t,e){if(!cs.has(t))return;const n=cs.get(t);n.delete(e),n.size===0&&cs.delete(t)}},jI=1e6,qI=1e3,ph="transitionend",mv=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(e,n)=>`#${CSS.escape(n)}`)),t),WI=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),KI=t=>{do t+=Math.floor(Math.random()*jI);while(document.getElementById(t));return t},zI=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*qI)},_v=t=>{t.dispatchEvent(new Event(ph))},Jn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Ps=t=>Jn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(mv(t)):null,Nr=t=>{if(!Jn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},Os=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",gv=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?gv(t.parentNode):null},ml=()=>{},sa=t=>{t.offsetHeight},yv=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,lu=[],GI=t=>{document.readyState==="loading"?(lu.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of lu)e()}),lu.push(t)):t()},rn=()=>document.documentElement.dir==="rtl",ln=t=>{GI(()=>{const e=yv();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},xt=(t,e=[],n=t)=>typeof t=="function"?t(...e):n,vv=(t,e,n=!0)=>{if(!n){xt(t);return}const i=zI(e)+5;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(ph,o),xt(t))};e.addEventListener(ph,o),setTimeout(()=>{r||_v(e)},i)},Gd=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},YI=/[^.]*(?=\..*)\.|.*/,QI=/\..*/,XI=/::\d+$/,cu={};let cm=1;const Ev={mouseenter:"mouseover",mouseleave:"mouseout"},JI=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Tv(t,e){return e&&`${e}::${cm++}`||t.uidEvent||cm++}function wv(t){const e=Tv(t);return t.uidEvent=e,cu[e]=cu[e]||{},cu[e]}function ZI(t,e){return function n(s){return Yd(s,{delegateTarget:t}),n.oneOff&&S.off(t,s.type,e),e.apply(t,[s])}}function eC(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Yd(i,{delegateTarget:o}),s.oneOff&&S.off(t,i.type,e,n),n.apply(o,[i])}}function Av(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function bv(t,e,n){const s=typeof e=="string",i=s?n:e||n;let r=Iv(t);return JI.has(r)||(r=t),[s,i,r]}function um(t,e,n,s,i){if(typeof e!="string"||!t)return;let[r,o,a]=bv(e,n,s);e in Ev&&(o=(_=>function(g){if(!g.relatedTarget||g.relatedTarget!==g.delegateTarget&&!g.delegateTarget.contains(g.relatedTarget))return _.call(this,g)})(o));const l=wv(t),c=l[a]||(l[a]={}),u=Av(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=Tv(o,e.replace(YI,"")),d=r?eC(t,n,o):ZI(t,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(a,d,r)}function mh(t,e,n,s,i){const r=Av(e[n],s,i);r&&(t.removeEventListener(n,r,!!i),delete e[n][r.uidEvent])}function tC(t,e,n,s){const i=e[n]||{};for(const[r,o]of Object.entries(i))r.includes(s)&&mh(t,e,n,o.callable,o.delegationSelector)}function Iv(t){return t=t.replace(QI,""),Ev[t]||t}const S={on(t,e,n,s){um(t,e,n,s,!1)},one(t,e,n,s){um(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=bv(e,n,s),a=o!==e,l=wv(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;mh(t,l,o,r,i?n:null);return}if(u)for(const h of Object.keys(l))tC(t,l,h,e.slice(1));for(const[h,d]of Object.entries(c)){const f=h.replace(XI,"");(!a||e.includes(f))&&mh(t,l,o,d.callable,d.delegationSelector)}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=yv(),i=Iv(e),r=e!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());const u=Yd(new Event(e,{bubbles:a,cancelable:!0}),n);return c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Yd(t,e={}){for(const[n,s]of Object.entries(e))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}function hm(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function uu(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Zn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${uu(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${uu(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=hm(t.dataset[s])}return e},getDataAttribute(t,e){return hm(t.getAttribute(`data-bs-${uu(e)}`))}};class ia{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=Jn(n)?Zn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...Jn(n)?Zn.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[s,i]of Object.entries(n)){const r=e[s],o=Jn(r)?"element":WI(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const nC="5.3.2";class bn extends ia{constructor(e,n){super(),e=Ps(e),e&&(this._element=e,this._config=this._getConfig(n),au.set(this._element,this.constructor.DATA_KEY,this))}dispose(){au.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){vv(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return au.get(Ps(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return nC}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const hu=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?mv(n.trim()):null}return e},J={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Os(n)&&Nr(n))},getSelectorFromElement(t){const e=hu(t);return e&&J.findOne(e)?e:null},getElementFromSelector(t){const e=hu(t);return e?J.findOne(e):null},getMultipleElementsFromSelector(t){const e=hu(t);return e?J.find(e):[]}},rc=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;S.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Os(this))return;const r=J.getElementFromSelector(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},sC="alert",iC="bs.alert",Cv=`.${iC}`,rC=`close${Cv}`,oC=`closed${Cv}`,aC="fade",lC="show";class oc extends bn{static get NAME(){return sC}close(){if(S.trigger(this._element,rC).defaultPrevented)return;this._element.classList.remove(lC);const n=this._element.classList.contains(aC);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),S.trigger(this._element,oC),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=oc.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}rc(oc,"close");ln(oc);const cC="button",uC="bs.button",hC=`.${uC}`,dC=".data-api",fC="active",dm='[data-bs-toggle="button"]',pC=`click${hC}${dC}`;class ac extends bn{static get NAME(){return cC}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(fC))}static jQueryInterface(e){return this.each(function(){const n=ac.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}S.on(document,pC,dm,t=>{t.preventDefault();const e=t.target.closest(dm);ac.getOrCreateInstance(e).toggle()});ln(ac);const mC="swipe",Pr=".bs.swipe",_C=`touchstart${Pr}`,gC=`touchmove${Pr}`,yC=`touchend${Pr}`,vC=`pointerdown${Pr}`,EC=`pointerup${Pr}`,TC="touch",wC="pen",AC="pointer-event",bC=40,IC={endCallback:null,leftCallback:null,rightCallback:null},CC={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class _l extends ia{constructor(e,n){super(),this._element=e,!(!e||!_l.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return IC}static get DefaultType(){return CC}static get NAME(){return mC}dispose(){S.off(this._element,Pr)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),xt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=bC)return;const n=e/this._deltaX;this._deltaX=0,n&&xt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,vC,e=>this._start(e)),S.on(this._element,EC,e=>this._end(e)),this._element.classList.add(AC)):(S.on(this._element,_C,e=>this._start(e)),S.on(this._element,gC,e=>this._move(e)),S.on(this._element,yC,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===wC||e.pointerType===TC)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const SC="carousel",RC="bs.carousel",Us=`.${RC}`,Sv=".data-api",NC="ArrowLeft",PC="ArrowRight",OC=500,zr="next",Di="prev",Fi="left",nl="right",kC=`slide${Us}`,du=`slid${Us}`,DC=`keydown${Us}`,xC=`mouseenter${Us}`,LC=`mouseleave${Us}`,MC=`dragstart${Us}`,VC=`load${Us}${Sv}`,FC=`click${Us}${Sv}`,Rv="carousel",Na="active",$C="slide",UC="carousel-item-end",BC="carousel-item-start",HC="carousel-item-next",jC="carousel-item-prev",Nv=".active",Pv=".carousel-item",qC=Nv+Pv,WC=".carousel-item img",KC=".carousel-indicators",zC="[data-bs-slide], [data-bs-slide-to]",GC='[data-bs-ride="carousel"]',YC={[NC]:nl,[PC]:Fi},QC={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},XC={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ra extends bn{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=J.findOne(KC,this._element),this._addEventListeners(),this._config.ride===Rv&&this.cycle()}static get Default(){return QC}static get DefaultType(){return XC}static get NAME(){return SC}next(){this._slide(zr)}nextWhenVisible(){!document.hidden&&Nr(this._element)&&this.next()}prev(){this._slide(Di)}pause(){this._isSliding&&_v(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){S.one(this._element,du,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){S.one(this._element,du,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?zr:Di;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&S.on(this._element,DC,e=>this._keydown(e)),this._config.pause==="hover"&&(S.on(this._element,xC,()=>this.pause()),S.on(this._element,LC,()=>this._maybeEnableCycle())),this._config.touch&&_l.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of J.find(WC,this._element))S.on(s,MC,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(Fi)),rightCallback:()=>this._slide(this._directionToOrder(nl)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),OC+this._config.interval))}};this._swipeHelper=new _l(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=YC[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=J.findOne(Nv,this._indicatorsElement);n.classList.remove(Na),n.removeAttribute("aria-current");const s=J.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(Na),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===zr,r=n||Gd(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=f=>S.trigger(this._element,f,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(kC).defaultPrevented||!s||!r)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?BC:UC,h=i?HC:jC;r.classList.add(h),sa(r),s.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(Na),s.classList.remove(Na,h,u),this._isSliding=!1,a(du)};this._queueCallback(d,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains($C)}_getActive(){return J.findOne(qC,this._element)}_getItems(){return J.find(Pv,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return rn()?e===Fi?Di:zr:e===Fi?zr:Di}_orderToDirection(e){return rn()?e===Di?Fi:nl:e===Di?nl:Fi}static jQueryInterface(e){return this.each(function(){const n=ra.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,FC,zC,function(t){const e=J.getElementFromSelector(this);if(!e||!e.classList.contains(Rv))return;t.preventDefault();const n=ra.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(Zn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});S.on(window,VC,()=>{const t=J.find(GC);for(const e of t)ra.getOrCreateInstance(e)});ln(ra);const JC="collapse",ZC="bs.collapse",oa=`.${ZC}`,eS=".data-api",tS=`show${oa}`,nS=`shown${oa}`,sS=`hide${oa}`,iS=`hidden${oa}`,rS=`click${oa}${eS}`,fu="show",qi="collapse",Pa="collapsing",oS="collapsed",aS=`:scope .${qi} .${qi}`,lS="collapse-horizontal",cS="width",uS="height",hS=".collapse.show, .collapse.collapsing",_h='[data-bs-toggle="collapse"]',dS={parent:null,toggle:!0},fS={parent:"(null|element)",toggle:"boolean"};class Po extends bn{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=J.find(_h);for(const i of s){const r=J.getSelectorFromElement(i),o=J.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return dS}static get DefaultType(){return fS}static get NAME(){return JC}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(hS).filter(a=>a!==this._element).map(a=>Po.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||S.trigger(this._element,tS).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(qi),this._element.classList.add(Pa),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Pa),this._element.classList.add(qi,fu),this._element.style[s]="",S.trigger(this._element,nS)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,sS).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,sa(this._element),this._element.classList.add(Pa),this._element.classList.remove(qi,fu);for(const i of this._triggerArray){const r=J.getElementFromSelector(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Pa),this._element.classList.add(qi),S.trigger(this._element,iS)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(fu)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Ps(e.parent),e}_getDimension(){return this._element.classList.contains(lS)?cS:uS}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(_h);for(const n of e){const s=J.getElementFromSelector(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=J.find(aS,this._config.parent);return J.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(oS,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=Po.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}S.on(document,rS,_h,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();for(const e of J.getMultipleElementsFromSelector(this))Po.getOrCreateInstance(e,{toggle:!1}).toggle()});ln(Po);const fm="dropdown",pS="bs.dropdown",bi=`.${pS}`,Qd=".data-api",mS="Escape",pm="Tab",_S="ArrowUp",mm="ArrowDown",gS=2,yS=`hide${bi}`,vS=`hidden${bi}`,ES=`show${bi}`,TS=`shown${bi}`,Ov=`click${bi}${Qd}`,kv=`keydown${bi}${Qd}`,wS=`keyup${bi}${Qd}`,$i="show",AS="dropup",bS="dropend",IS="dropstart",CS="dropup-center",SS="dropdown-center",Zs='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',RS=`${Zs}.${$i}`,sl=".dropdown-menu",NS=".navbar",PS=".navbar-nav",OS=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",kS=rn()?"top-end":"top-start",DS=rn()?"top-start":"top-end",xS=rn()?"bottom-end":"bottom-start",LS=rn()?"bottom-start":"bottom-end",MS=rn()?"left-start":"right-start",VS=rn()?"right-start":"left-start",FS="top",$S="bottom",US={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},BS={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Fn extends bn{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=J.next(this._element,sl)[0]||J.prev(this._element,sl)[0]||J.findOne(sl,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return US}static get DefaultType(){return BS}static get NAME(){return fm}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Os(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!S.trigger(this._element,ES,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(PS))for(const s of[].concat(...document.body.children))S.on(s,"mouseover",ml);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add($i),this._element.classList.add($i),S.trigger(this._element,TS,e)}}hide(){if(Os(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!S.trigger(this._element,yS,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",ml);this._popper&&this._popper.destroy(),this._menu.classList.remove($i),this._element.classList.remove($i),this._element.setAttribute("aria-expanded","false"),Zn.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,vS,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!Jn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${fm.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof pv>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:Jn(this._config.reference)?e=Ps(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=zd(e,this._menu,n)}_isShown(){return this._menu.classList.contains($i)}_getPlacement(){const e=this._parent;if(e.classList.contains(bS))return MS;if(e.classList.contains(IS))return VS;if(e.classList.contains(CS))return FS;if(e.classList.contains(SS))return $S;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(AS)?n?DS:kS:n?LS:xS}_detectNavbar(){return this._element.closest(NS)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Zn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...xt(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:n}){const s=J.find(OS,this._menu).filter(i=>Nr(i));s.length&&Gd(s,n,e===mm,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Fn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===gS||e.type==="keyup"&&e.key!==pm)return;const n=J.find(RS);for(const s of n){const i=Fn.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===pm||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===mS,i=[_S,mm].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=this.matches(Zs)?this:J.prev(this,Zs)[0]||J.next(this,Zs)[0]||J.findOne(Zs,e.delegateTarget.parentNode),o=Fn.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}S.on(document,kv,Zs,Fn.dataApiKeydownHandler);S.on(document,kv,sl,Fn.dataApiKeydownHandler);S.on(document,Ov,Fn.clearMenus);S.on(document,wS,Fn.clearMenus);S.on(document,Ov,Zs,function(t){t.preventDefault(),Fn.getOrCreateInstance(this).toggle()});ln(Fn);const Dv="backdrop",HS="fade",_m="show",gm=`mousedown.bs.${Dv}`,jS={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},qS={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class xv extends ia{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return jS}static get DefaultType(){return qS}static get NAME(){return Dv}show(e){if(!this._config.isVisible){xt(e);return}this._append();const n=this._getElement();this._config.isAnimated&&sa(n),n.classList.add(_m),this._emulateAnimation(()=>{xt(e)})}hide(e){if(!this._config.isVisible){xt(e);return}this._getElement().classList.remove(_m),this._emulateAnimation(()=>{this.dispose(),xt(e)})}dispose(){this._isAppended&&(S.off(this._element,gm),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(HS),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Ps(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),S.on(e,gm,()=>{xt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){vv(e,this._getElement(),this._config.isAnimated)}}const WS="focustrap",KS="bs.focustrap",gl=`.${KS}`,zS=`focusin${gl}`,GS=`keydown.tab${gl}`,YS="Tab",QS="forward",ym="backward",XS={autofocus:!0,trapElement:null},JS={autofocus:"boolean",trapElement:"element"};class Lv extends ia{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return XS}static get DefaultType(){return JS}static get NAME(){return WS}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,gl),S.on(document,zS,e=>this._handleFocusin(e)),S.on(document,GS,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,gl))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=J.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===ym?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===YS&&(this._lastTabNavDirection=e.shiftKey?ym:QS)}}const vm=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Em=".sticky-top",Oa="padding-right",Tm="margin-right";class gh{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Oa,n=>n+e),this._setElementAttributes(vm,Oa,n=>n+e),this._setElementAttributes(Em,Tm,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Oa),this._resetElementAttributes(vm,Oa),this._resetElementAttributes(Em,Tm)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&Zn.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=Zn.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}Zn.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(Jn(e)){n(e);return}for(const s of J.find(e,this._element))n(s)}}const ZS="modal",eR="bs.modal",on=`.${eR}`,tR=".data-api",nR="Escape",sR=`hide${on}`,iR=`hidePrevented${on}`,Mv=`hidden${on}`,Vv=`show${on}`,rR=`shown${on}`,oR=`resize${on}`,aR=`click.dismiss${on}`,lR=`mousedown.dismiss${on}`,cR=`keydown.dismiss${on}`,uR=`click${on}${tR}`,wm="modal-open",hR="fade",Am="show",pu="modal-static",dR=".modal.show",fR=".modal-dialog",pR=".modal-body",mR='[data-bs-toggle="modal"]',_R={backdrop:!0,focus:!0,keyboard:!0},gR={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class fr extends bn{constructor(e,n){super(e,n),this._dialog=J.findOne(fR,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new gh,this._addEventListeners()}static get Default(){return _R}static get DefaultType(){return gR}static get NAME(){return ZS}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||S.trigger(this._element,Vv,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wm),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||S.trigger(this._element,sR).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Am),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){S.off(window,on),S.off(this._dialog,on),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new xv({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Lv({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=J.findOne(pR,this._dialog);n&&(n.scrollTop=0),sa(this._element),this._element.classList.add(Am);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,rR,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,cR,e=>{if(e.key===nR){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),S.on(window,oR,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,lR,e=>{S.one(this._element,aR,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(wm),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,Mv)})}_isAnimated(){return this._element.classList.contains(hR)}_triggerBackdropTransition(){if(S.trigger(this._element,iR).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(pu)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(pu),this._queueCallback(()=>{this._element.classList.remove(pu),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=rn()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=rn()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=fr.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}S.on(document,uR,mR,function(t){const e=J.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),S.one(e,Vv,i=>{i.defaultPrevented||S.one(e,Mv,()=>{Nr(this)&&this.focus()})});const n=J.findOne(dR);n&&fr.getInstance(n).hide(),fr.getOrCreateInstance(e).toggle(this)});rc(fr);ln(fr);const yR="offcanvas",vR="bs.offcanvas",rs=`.${vR}`,Fv=".data-api",ER=`load${rs}${Fv}`,TR="Escape",bm="show",Im="showing",Cm="hiding",wR="offcanvas-backdrop",$v=".offcanvas.show",AR=`show${rs}`,bR=`shown${rs}`,IR=`hide${rs}`,Sm=`hidePrevented${rs}`,Uv=`hidden${rs}`,CR=`resize${rs}`,SR=`click${rs}${Fv}`,RR=`keydown.dismiss${rs}`,NR='[data-bs-toggle="offcanvas"]',PR={backdrop:!0,keyboard:!0,scroll:!1},OR={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ks extends bn{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return PR}static get DefaultType(){return OR}static get NAME(){return yR}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||S.trigger(this._element,AR,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new gh().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Im);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(bm),this._element.classList.remove(Im),S.trigger(this._element,bR,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||S.trigger(this._element,IR).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Cm),this._backdrop.hide();const n=()=>{this._element.classList.remove(bm,Cm),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new gh().reset(),S.trigger(this._element,Uv)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){S.trigger(this._element,Sm);return}this.hide()},n=!!this._config.backdrop;return new xv({className:wR,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new Lv({trapElement:this._element})}_addEventListeners(){S.on(this._element,RR,e=>{if(e.key===TR){if(this._config.keyboard){this.hide();return}S.trigger(this._element,Sm)}})}static jQueryInterface(e){return this.each(function(){const n=ks.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}S.on(document,SR,NR,function(t){const e=J.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Os(this))return;S.one(e,Uv,()=>{Nr(this)&&this.focus()});const n=J.findOne($v);n&&n!==e&&ks.getInstance(n).hide(),ks.getOrCreateInstance(e).toggle(this)});S.on(window,ER,()=>{for(const t of J.find($v))ks.getOrCreateInstance(t).show()});S.on(window,CR,()=>{for(const t of J.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&ks.getOrCreateInstance(t).hide()});rc(ks);ln(ks);const kR=/^aria-[\w-]*$/i,Bv={"*":["class","dir","id","lang","role",kR],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},DR=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),xR=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,LR=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?DR.has(n)?!!xR.test(t.nodeValue):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))};function MR(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)LR(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const VR="TemplateFactory",FR={allowList:Bv,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},$R={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},UR={entry:"(string|element|function|null)",selector:"(string|element)"};class BR extends ia{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return FR}static get DefaultType(){return $R}static get NAME(){return VR}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},UR)}_setContent(e,n,s){const i=J.findOne(s,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(Jn(n)){this._putElementInTemplate(Ps(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?MR(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return xt(e,[this])}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const HR="tooltip",jR=new Set(["sanitize","allowList","sanitizeFn"]),mu="fade",qR="modal",ka="show",WR=".tooltip-inner",Rm=`.${qR}`,Nm="hide.bs.modal",Gr="hover",_u="focus",KR="click",zR="manual",GR="hide",YR="hidden",QR="show",XR="shown",JR="inserted",ZR="click",e0="focusin",t0="focusout",n0="mouseenter",s0="mouseleave",i0={AUTO:"auto",TOP:"top",RIGHT:rn()?"left":"right",BOTTOM:"bottom",LEFT:rn()?"right":"left"},r0={allowList:Bv,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},o0={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Or extends bn{constructor(e,n){if(typeof pv>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return r0}static get DefaultType(){return o0}static get NAME(){return HR}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(Rm),Nm,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=S.trigger(this._element,this.constructor.eventName(QR)),s=(gv(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),S.trigger(this._element,this.constructor.eventName(JR))),this._popper=this._createPopper(i),i.classList.add(ka),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))S.on(a,"mouseover",ml);const o=()=>{S.trigger(this._element,this.constructor.eventName(XR)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||S.trigger(this._element,this.constructor.eventName(GR)).defaultPrevented)return;if(this._getTipElement().classList.remove(ka),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))S.off(i,"mouseover",ml);this._activeTrigger[KR]=!1,this._activeTrigger[_u]=!1,this._activeTrigger[Gr]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName(YR)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(mu,ka),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=KI(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(mu),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new BR({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[WR]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(mu)}_isShown(){return this.tip&&this.tip.classList.contains(ka)}_createPopper(e){const n=xt(this._config.placement,[this,e,this._element]),s=i0[n.toUpperCase()];return zd(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return xt(e,[this._element])}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...xt(this._config.popperConfig,[n])}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")S.on(this._element,this.constructor.eventName(ZR),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==zR){const s=n===Gr?this.constructor.eventName(n0):this.constructor.eventName(e0),i=n===Gr?this.constructor.eventName(s0):this.constructor.eventName(t0);S.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?_u:Gr]=!0,o._enter()}),S.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?_u:Gr]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(Rm),Nm,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=Zn.getDataAttributes(this._element);for(const s of Object.keys(n))jR.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Ps(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[n,s]of Object.entries(this._config))this.constructor.Default[n]!==s&&(e[n]=s);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=Or.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ln(Or);const a0="popover",l0=".popover-header",c0=".popover-body",u0={...Or.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},h0={...Or.DefaultType,content:"(null|string|element|function)"};class Xd extends Or{static get Default(){return u0}static get DefaultType(){return h0}static get NAME(){return a0}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[l0]:this._getTitle(),[c0]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=Xd.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ln(Xd);const d0="scrollspy",f0="bs.scrollspy",Jd=`.${f0}`,p0=".data-api",m0=`activate${Jd}`,Pm=`click${Jd}`,_0=`load${Jd}${p0}`,g0="dropdown-item",xi="active",y0='[data-bs-spy="scroll"]',gu="[href]",v0=".nav, .list-group",Om=".nav-link",E0=".nav-item",T0=".list-group-item",w0=`${Om}, ${E0} > ${Om}, ${T0}`,A0=".dropdown",b0=".dropdown-toggle",I0={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},C0={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class lc extends bn{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return I0}static get DefaultType(){return C0}static get NAME(){return d0}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Ps(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,Pm),S.on(this._config.target,Pm,gu,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=J.find(gu,this._config.target);for(const n of e){if(!n.hash||Os(n))continue;const s=J.findOne(decodeURI(n.hash),this._element);Nr(s)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(xi),this._activateParents(e),S.trigger(this._element,m0,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(g0)){J.findOne(b0,e.closest(A0)).classList.add(xi);return}for(const n of J.parents(e,v0))for(const s of J.prev(n,w0))s.classList.add(xi)}_clearActiveClass(e){e.classList.remove(xi);const n=J.find(`${gu}.${xi}`,e);for(const s of n)s.classList.remove(xi)}static jQueryInterface(e){return this.each(function(){const n=lc.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(window,_0,()=>{for(const t of J.find(y0))lc.getOrCreateInstance(t)});ln(lc);const S0="tab",R0="bs.tab",Ii=`.${R0}`,N0=`hide${Ii}`,P0=`hidden${Ii}`,O0=`show${Ii}`,k0=`shown${Ii}`,D0=`click${Ii}`,x0=`keydown${Ii}`,L0=`load${Ii}`,M0="ArrowLeft",km="ArrowRight",V0="ArrowUp",Dm="ArrowDown",yu="Home",xm="End",ei="active",Lm="fade",vu="show",F0="dropdown",Hv=".dropdown-toggle",$0=".dropdown-menu",Eu=`:not(${Hv})`,U0='.list-group, .nav, [role="tablist"]',B0=".nav-item, .list-group-item",H0=`.nav-link${Eu}, .list-group-item${Eu}, [role="tab"]${Eu}`,jv='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Tu=`${H0}, ${jv}`,j0=`.${ei}[data-bs-toggle="tab"], .${ei}[data-bs-toggle="pill"], .${ei}[data-bs-toggle="list"]`;class pr extends bn{constructor(e){super(e),this._parent=this._element.closest(U0),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,x0,n=>this._keydown(n)))}static get NAME(){return S0}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?S.trigger(n,N0,{relatedTarget:e}):null;S.trigger(e,O0,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(ei),this._activate(J.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(vu);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),S.trigger(e,k0,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(Lm))}_deactivate(e,n){if(!e)return;e.classList.remove(ei),e.blur(),this._deactivate(J.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(vu);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),S.trigger(e,P0,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(Lm))}_keydown(e){if(![M0,km,V0,Dm,yu,xm].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(i=>!Os(i));let s;if([yu,xm].includes(e.key))s=n[e.key===yu?0:n.length-1];else{const i=[km,Dm].includes(e.key);s=Gd(n,e.target,i,!0)}s&&(s.focus({preventScroll:!0}),pr.getOrCreateInstance(s).show())}_getChildren(){return J.find(Tu,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=J.getElementFromSelector(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(F0))return;const i=(r,o)=>{const a=J.findOne(r,s);a&&a.classList.toggle(o,n)};i(Hv,ei),i($0,vu),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(ei)}_getInnerElement(e){return e.matches(Tu)?e:J.findOne(Tu,e)}_getOuterElement(e){return e.closest(B0)||e}static jQueryInterface(e){return this.each(function(){const n=pr.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,D0,jv,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Os(this)&&pr.getOrCreateInstance(this).show()});S.on(window,L0,()=>{for(const t of J.find(j0))pr.getOrCreateInstance(t)});ln(pr);const q0="toast",W0="bs.toast",Bs=`.${W0}`,K0=`mouseover${Bs}`,z0=`mouseout${Bs}`,G0=`focusin${Bs}`,Y0=`focusout${Bs}`,Q0=`hide${Bs}`,X0=`hidden${Bs}`,J0=`show${Bs}`,Z0=`shown${Bs}`,eN="fade",Mm="hide",Da="show",xa="showing",tN={animation:"boolean",autohide:"boolean",delay:"number"},nN={animation:!0,autohide:!0,delay:5e3};class cc extends bn{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return nN}static get DefaultType(){return tN}static get NAME(){return q0}show(){if(S.trigger(this._element,J0).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(eN);const n=()=>{this._element.classList.remove(xa),S.trigger(this._element,Z0),this._maybeScheduleHide()};this._element.classList.remove(Mm),sa(this._element),this._element.classList.add(Da,xa),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||S.trigger(this._element,Q0).defaultPrevented)return;const n=()=>{this._element.classList.add(Mm),this._element.classList.remove(xa,Da),S.trigger(this._element,X0)};this._element.classList.add(xa),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Da),super.dispose()}isShown(){return this._element.classList.contains(Da)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,K0,e=>this._onInteraction(e,!0)),S.on(this._element,z0,e=>this._onInteraction(e,!1)),S.on(this._element,G0,e=>this._onInteraction(e,!0)),S.on(this._element,Y0,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=cc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}rc(cc);ln(cc);/**
* @vue/shared v3.4.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zd(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const Fe={},Yi=[],Jt=()=>{},sN=()=>!1,uc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ef=t=>t.startsWith("onUpdate:"),Je=Object.assign,tf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iN=Object.prototype.hasOwnProperty,Ee=(t,e)=>iN.call(t,e),ne=Array.isArray,Qi=t=>hc(t)==="[object Map]",qv=t=>hc(t)==="[object Set]",oe=t=>typeof t=="function",qe=t=>typeof t=="string",kr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Wv=t=>(Le(t)||oe(t))&&oe(t.then)&&oe(t.catch),Kv=Object.prototype.toString,hc=t=>Kv.call(t),rN=t=>hc(t).slice(8,-1),zv=t=>hc(t)==="[object Object]",nf=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,il=Zd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},oN=/-(\w)/g,Bn=dc(t=>t.replace(oN,(e,n)=>n?n.toUpperCase():"")),aN=/\B([A-Z])/g,Dr=dc(t=>t.replace(aN,"-$1").toLowerCase()),fc=dc(t=>t.charAt(0).toUpperCase()+t.slice(1)),wu=dc(t=>t?`on${fc(t)}`:""),Ds=(t,e)=>!Object.is(t,e),Au=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},yl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},lN=t=>{const e=parseFloat(t);return isNaN(e)?t:e},cN=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Vm;const Gv=()=>Vm||(Vm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sf(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=qe(s)?fN(s):sf(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(qe(t)||Le(t))return t}const uN=/;(?![^(]*\))/g,hN=/:([^]+)/,dN=/\/\*[^]*?\*\//g;function fN(t){const e={};return t.replace(dN,"").split(uN).forEach(n=>{if(n){const s=n.split(hN);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function pc(t){let e="";if(qe(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=pc(t[n]);s&&(e+=s+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pN="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mN=Zd(pN);function Yv(t){return!!t||t===""}const hn=t=>qe(t)?t:t==null?"":ne(t)||Le(t)&&(t.toString===Kv||!oe(t.toString))?JSON.stringify(t,Qv,2):String(t),Qv=(t,e)=>e&&e.__v_isRef?Qv(t,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[bu(s,r)+" =>"]=i,n),{})}:qv(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bu(n))}:kr(e)?bu(e):Le(e)&&!ne(e)&&!zv(e)?String(e):e,bu=(t,e="")=>{var n;return kr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class _N{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function gN(t,e=Bt){e&&e.active&&e.effects.push(t)}function Xv(){return Bt}function yN(t){Bt&&Bt.cleanups.push(t)}let ai;class rf{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,gN(this,i)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Ci();for(const e of this.deps)if(e.computed&&(vN(e.computed),this._dirtyLevel>=2))break;Si(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ws,n=ai;try{return ws=!0,ai=this,this._runnings++,Fm(this),this.fn()}finally{$m(this),this._runnings--,ai=n,ws=e}}stop(){var e;this.active&&(Fm(this),$m(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function vN(t){return t.value}function Fm(t){t._trackId++,t._depsLength=0}function $m(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Jv(t.deps[e],t);t.deps.length=t._depsLength}}function Jv(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ws=!0,yh=0;const Zv=[];function Ci(){Zv.push(ws),ws=!1}function Si(){const t=Zv.pop();ws=t===void 0?!0:t}function of(){yh++}function af(){for(yh--;!yh&&vh.length;)vh.shift()()}function eE(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Jv(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const vh=[];function tE(t,e,n){of();for(const s of t.keys())if(!(!s.allowRecurse&&s._runnings)&&s._dirtyLevel<e&&(!s._runnings||e!==2)){const i=s._dirtyLevel;s._dirtyLevel=e,i===0&&(!s._queryings||e!==2)&&(s.trigger(),s.scheduler&&vh.push(s.scheduler))}af()}const nE=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Eh=new WeakMap,li=Symbol(""),Th=Symbol("");function Mt(t,e,n){if(ws&&ai){let s=Eh.get(t);s||Eh.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=nE(()=>s.delete(n))),eE(ai,i)}}function es(t,e,n,s,i,r){const o=Eh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!kr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?nf(n)&&a.push(o.get("length")):(a.push(o.get(li)),Qi(t)&&a.push(o.get(Th)));break;case"delete":ne(t)||(a.push(o.get(li)),Qi(t)&&a.push(o.get(Th)));break;case"set":Qi(t)&&a.push(o.get(li));break}of();for(const l of a)l&&tE(l,3);af()}const EN=Zd("__proto__,__v_isRef,__isVue"),sE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kr)),Um=TN();function TN(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=we(this);for(let r=0,o=this.length;r<o;r++)Mt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(we)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ci(),of();const s=we(this)[e].apply(this,n);return af(),Si(),s}}),t}function wN(t){const e=we(this);return Mt(e,"has",t),e.hasOwnProperty(t)}class iE{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?LN:lE:r?aE:oE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ne(e);if(!i){if(o&&Ee(Um,n))return Reflect.get(Um,n,s);if(n==="hasOwnProperty")return wN}const a=Reflect.get(e,n,s);return(kr(n)?sE.has(n):EN(n))||(i||Mt(e,"get",n),r)?a:Ot(a)?o&&nf(n)?a:a.value:Le(a)?i?uE(a):_c(a):a}}class rE extends iE{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const l=mr(r);if(!vl(s)&&!mr(s)&&(r=we(r),s=we(s)),!ne(e)&&Ot(r)&&!Ot(s))return l?!1:(r.value=s,!0)}const o=ne(e)&&nf(n)?Number(n)<e.length:Ee(e,n),a=Reflect.set(e,n,s,i);return e===we(i)&&(o?Ds(s,r)&&es(e,"set",n,s):es(e,"add",n,s)),a}deleteProperty(e,n){const s=Ee(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&es(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!kr(n)||!sE.has(n))&&Mt(e,"has",n),s}ownKeys(e){return Mt(e,"iterate",ne(e)?"length":li),Reflect.ownKeys(e)}}class AN extends iE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bN=new rE,IN=new AN,CN=new rE(!0),lf=t=>t,mc=t=>Reflect.getPrototypeOf(t);function La(t,e,n=!1,s=!1){t=t.__v_raw;const i=we(t),r=we(e);n||(Ds(e,r)&&Mt(i,"get",e),Mt(i,"get",r));const{has:o}=mc(i),a=s?lf:n?hf:Oo;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ma(t,e=!1){const n=this.__v_raw,s=we(n),i=we(t);return e||(Ds(t,i)&&Mt(s,"has",t),Mt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Va(t,e=!1){return t=t.__v_raw,!e&&Mt(we(t),"iterate",li),Reflect.get(t,"size",t)}function Bm(t){t=we(t);const e=we(this);return mc(e).has.call(e,t)||(e.add(t),es(e,"add",t,t)),this}function Hm(t,e){e=we(e);const n=we(this),{has:s,get:i}=mc(n);let r=s.call(n,t);r||(t=we(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ds(e,o)&&es(n,"set",t,e):es(n,"add",t,e),this}function jm(t){const e=we(this),{has:n,get:s}=mc(e);let i=n.call(e,t);i||(t=we(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&es(e,"delete",t,void 0),r}function qm(){const t=we(this),e=t.size!==0,n=t.clear();return e&&es(t,"clear",void 0,void 0),n}function Fa(t,e){return function(s,i){const r=this,o=r.__v_raw,a=we(o),l=e?lf:t?hf:Oo;return!t&&Mt(a,"iterate",li),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function $a(t,e,n){return function(...s){const i=this.__v_raw,r=we(i),o=Qi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?lf:e?hf:Oo;return!e&&Mt(r,"iterate",l?Th:li),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function us(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function SN(){const t={get(r){return La(this,r)},get size(){return Va(this)},has:Ma,add:Bm,set:Hm,delete:jm,clear:qm,forEach:Fa(!1,!1)},e={get(r){return La(this,r,!1,!0)},get size(){return Va(this)},has:Ma,add:Bm,set:Hm,delete:jm,clear:qm,forEach:Fa(!1,!0)},n={get(r){return La(this,r,!0)},get size(){return Va(this,!0)},has(r){return Ma.call(this,r,!0)},add:us("add"),set:us("set"),delete:us("delete"),clear:us("clear"),forEach:Fa(!0,!1)},s={get(r){return La(this,r,!0,!0)},get size(){return Va(this,!0)},has(r){return Ma.call(this,r,!0)},add:us("add"),set:us("set"),delete:us("delete"),clear:us("clear"),forEach:Fa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=$a(r,!1,!1),n[r]=$a(r,!0,!1),e[r]=$a(r,!1,!0),s[r]=$a(r,!0,!0)}),[t,n,e,s]}const[RN,NN,PN,ON]=SN();function cf(t,e){const n=e?t?ON:PN:t?NN:RN;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Ee(n,i)&&i in s?n:s,i,r)}const kN={get:cf(!1,!1)},DN={get:cf(!1,!0)},xN={get:cf(!0,!1)},oE=new WeakMap,aE=new WeakMap,lE=new WeakMap,LN=new WeakMap;function MN(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function VN(t){return t.__v_skip||!Object.isExtensible(t)?0:MN(rN(t))}function _c(t){return mr(t)?t:uf(t,!1,bN,kN,oE)}function cE(t){return uf(t,!1,CN,DN,aE)}function uE(t){return uf(t,!0,IN,xN,lE)}function uf(t,e,n,s,i){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=VN(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Xi(t){return mr(t)?Xi(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function vl(t){return!!(t&&t.__v_isShallow)}function hE(t){return Xi(t)||mr(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function dE(t){return yl(t,"__v_skip",!0),t}const Oo=t=>Le(t)?_c(t):t,hf=t=>Le(t)?uE(t):t;class fE{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new rf(()=>e(this._value),()=>wh(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=we(this);return pE(e),(!e._cacheable||e.effect.dirty)&&Ds(e._value,e._value=e.effect.run())&&wh(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function FN(t,e,n=!1){let s,i;const r=oe(t);return r?(s=t,i=Jt):(s=t.get,i=t.set),new fE(s,i,r||!i,n)}function pE(t){ws&&ai&&(t=we(t),eE(ai,t.dep||(t.dep=nE(()=>t.dep=void 0,t instanceof fE?t:void 0))))}function wh(t,e=3,n){t=we(t);const s=t.dep;s&&tE(s,e)}function Ot(t){return!!(t&&t.__v_isRef===!0)}function Ji(t){return _E(t,!1)}function mE(t){return _E(t,!0)}function _E(t,e){return Ot(t)?t:new $N(t,e)}class $N{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:Oo(e)}get value(){return pE(this),this._value}set value(e){const n=this.__v_isShallow||vl(e)||mr(e);e=n?e:we(e),Ds(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Oo(e),wh(this,3))}}function ci(t){return Ot(t)?t.value:t}function Yn(t){return oe(t)?t():ci(t)}const UN={get:(t,e,n)=>ci(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ot(i)&&!Ot(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function gE(t){return Xi(t)?t:new Proxy(t,UN)}/**
* @vue/runtime-core v3.4.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function As(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){gc(r,e,n)}return i}function nn(t,e,n,s){if(oe(t)){const r=As(t,e,n,s);return r&&Wv(r)&&r.catch(o=>{gc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(nn(t[r],e,n,s));return i}function gc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){As(l,null,10,[t,o,a]);return}}BN(t,n,i,s)}function BN(t,e,n,s=!0){console.error(t)}let ko=!1,Ah=!1;const vt=[];let Nn=0;const Zi=[];let ms=null,Xs=0;const yE=Promise.resolve();let df=null;function vE(t){const e=df||yE;return t?e.then(this?t.bind(this):t):e}function HN(t){let e=Nn+1,n=vt.length;for(;e<n;){const s=e+n>>>1,i=vt[s],r=Do(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ff(t){(!vt.length||!vt.includes(t,ko&&t.allowRecurse?Nn+1:Nn))&&(t.id==null?vt.push(t):vt.splice(HN(t.id),0,t),EE())}function EE(){!ko&&!Ah&&(Ah=!0,df=yE.then(wE))}function jN(t){const e=vt.indexOf(t);e>Nn&&vt.splice(e,1)}function qN(t){ne(t)?Zi.push(...t):(!ms||!ms.includes(t,t.allowRecurse?Xs+1:Xs))&&Zi.push(t),EE()}function Wm(t,e,n=ko?Nn+1:0){for(;n<vt.length;n++){const s=vt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;vt.splice(n,1),n--,s()}}}function TE(t){if(Zi.length){const e=[...new Set(Zi)].sort((n,s)=>Do(n)-Do(s));if(Zi.length=0,ms){ms.push(...e);return}for(ms=e,Xs=0;Xs<ms.length;Xs++)ms[Xs]();ms=null,Xs=0}}const Do=t=>t.id==null?1/0:t.id,WN=(t,e)=>{const n=Do(t)-Do(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function wE(t){Ah=!1,ko=!0,vt.sort(WN);try{for(Nn=0;Nn<vt.length;Nn++){const e=vt[Nn];e&&e.active!==!1&&As(e,null,14)}}finally{Nn=0,vt.length=0,TE(),ko=!1,df=null,(vt.length||Zi.length)&&wE()}}function KN(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Fe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Fe;d&&(i=n.map(f=>qe(f)?f.trim():f)),h&&(i=n.map(lN))}let a,l=s[a=wu(e)]||s[a=wu(Bn(e))];!l&&r&&(l=s[a=wu(Dr(e))]),l&&nn(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nn(c,t,6,i)}}function AE(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!oe(t)){const l=c=>{const u=AE(c,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Le(t)&&s.set(t,null),null):(ne(r)?r.forEach(l=>o[l]=null):Je(o,r),Le(t)&&s.set(t,o),o)}function yc(t,e){return!t||!uc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,Dr(e))||Ee(t,e))}let Zt=null,vc=null;function El(t){const e=Zt;return Zt=t,vc=t&&t.type.__scopeId||null,e}function zN(t){vc=t}function GN(){vc=null}function Lt(t,e=Zt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&i_(-1);const r=El(e);let o;try{o=t(...i)}finally{El(r),s._d&&i_(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Iu(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:_,inheritAttrs:g}=t;let y,E;const C=El(t);try{if(n.shapeFlag&4){const T=i||s,x=T;y=Rn(u.call(x,T,h,r,f,d,_)),E=l}else{const T=e;y=Rn(T.length>1?T(r,{attrs:l,slots:a,emit:c}):T(r,null)),E=e.props?l:YN(l)}}catch(T){go.length=0,gc(T,t,1),y=de(gn)}let w=y;if(E&&g!==!1){const T=Object.keys(E),{shapeFlag:x}=w;T.length&&x&7&&(o&&T.some(ef)&&(E=QN(E,o)),w=xs(w,E))}return n.dirs&&(w=xs(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,El(C),y}const YN=t=>{let e;for(const n in t)(n==="class"||n==="style"||uc(n))&&((e||(e={}))[n]=t[n]);return e},QN=(t,e)=>{const n={};for(const s in t)(!ef(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function XN(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Km(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!yc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Km(s,o,c):!0:!!o;return!1}function Km(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!yc(n,r))return!0}return!1}function JN({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const pf="components";function Nt(t,e){return IE(pf,t,!0,e)||t}const bE=Symbol.for("v-ndc");function ZN(t){return qe(t)?IE(pf,t,!1)||t:t||bE}function IE(t,e,n=!0,s=!1){const i=Zt||ct;if(i){const r=i.type;if(t===pf){const a=KP(r,!1);if(a&&(a===e||a===Bn(e)||a===fc(Bn(e))))return r}const o=zm(i[t]||r[t],e)||zm(i.appContext[t],e);return!o&&s?r:o}}function zm(t,e){return t&&(t[e]||t[Bn(e)]||t[fc(Bn(e))])}const eP=t=>t.__isSuspense;function tP(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):qN(t)}const nP=Symbol.for("v-scx"),sP=()=>sn(nP),Ua={};function mo(t,e,n){return CE(t,e,n)}function CE(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=Fe){if(e&&r){const R=e;e=(...W)=>{R(...W),x()}}const l=ct,c=R=>s===!0?R:Wi(R,s===!1?1:void 0);let u,h=!1,d=!1;if(Ot(t)?(u=()=>t.value,h=vl(t)):Xi(t)?(u=()=>c(t),h=!0):ne(t)?(d=!0,h=t.some(R=>Xi(R)||vl(R)),u=()=>t.map(R=>{if(Ot(R))return R.value;if(Xi(R))return c(R);if(oe(R))return As(R,l,2)})):oe(t)?e?u=()=>As(t,l,2):u=()=>(f&&f(),nn(t,l,3,[_])):u=Jt,e&&s){const R=u;u=()=>Wi(R())}let f,_=R=>{f=w.onStop=()=>{As(R,l,4),f=w.onStop=void 0}},g;if(bc)if(_=Jt,e?n&&nn(e,l,3,[u(),d?[]:void 0,_]):u(),i==="sync"){const R=sP();g=R.__watcherHandles||(R.__watcherHandles=[])}else return Jt;let y=d?new Array(t.length).fill(Ua):Ua;const E=()=>{if(!(!w.active||!w.dirty))if(e){const R=w.run();(s||h||(d?R.some((W,M)=>Ds(W,y[M])):Ds(R,y)))&&(f&&f(),nn(e,l,3,[R,y===Ua?void 0:d&&y[0]===Ua?[]:y,_]),y=R)}else w.run()};E.allowRecurse=!!e;let C;i==="sync"?C=E:i==="post"?C=()=>Dt(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),C=()=>ff(E));const w=new rf(u,Jt,C),T=Xv(),x=()=>{w.stop(),T&&tf(T.effects,w)};return e?n?E():y=w.run():i==="post"?Dt(w.run.bind(w),l&&l.suspense):w.run(),g&&g.push(x),x}function iP(t,e,n){const s=this.proxy,i=qe(t)?t.includes(".")?SE(s,t):()=>s[t]:t.bind(s,s);let r;oe(e)?r=e:(r=e.handler,n=e);const o=aa(this),a=CE(i,r.bind(s),n);return o(),a}function SE(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Wi(t,e,n=0,s){if(!Le(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Ot(t))Wi(t.value,e,n,s);else if(ne(t))for(let i=0;i<t.length;i++)Wi(t[i],e,n,s);else if(qv(t)||Qi(t))t.forEach(i=>{Wi(i,e,n,s)});else if(zv(t))for(const i in t)Wi(t[i],e,n,s);return t}function Ws(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ci(),nn(l,n,8,[t.el,a,t,e]),Si())}}const _s=Symbol("_leaveCb"),Ba=Symbol("_enterCb");function rP(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kE(()=>{t.isMounted=!0}),DE(()=>{t.isUnmounting=!0}),t}const Yt=[Function,Array],RE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},oP={name:"BaseTransition",props:RE,setup(t,{slots:e}){const n=Ef(),s=rP();let i;return()=>{const r=e.default&&PE(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const g of r)if(g.type!==gn){o=g;break}}const a=we(t),{mode:l}=a;if(s.isLeaving)return Cu(o);const c=Gm(o);if(!c)return Cu(o);const u=bh(c,a,s,n);Ih(c,u);const h=n.subTree,d=h&&Gm(h);let f=!1;const{getTransitionKey:_}=c.type;if(_){const g=_();i===void 0?i=g:g!==i&&(i=g,f=!0)}if(d&&d.type!==gn&&(!Js(c,d)||f)){const g=bh(d,a,s,n);if(Ih(d,g),l==="out-in")return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Cu(o);l==="in-out"&&c.type!==gn&&(g.delayLeave=(y,E,C)=>{const w=NE(s,d);w[String(d.key)]=d,y[_s]=()=>{E(),y[_s]=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},aP=oP;function NE(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function bh(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:_,onBeforeAppear:g,onAppear:y,onAfterAppear:E,onAppearCancelled:C}=e,w=String(t.key),T=NE(n,t),x=(M,Z)=>{M&&nn(M,s,9,Z)},R=(M,Z)=>{const Y=Z[1];x(M,Z),ne(M)?M.every(ue=>ue.length<=1)&&Y():M.length<=1&&Y()},W={mode:r,persisted:o,beforeEnter(M){let Z=a;if(!n.isMounted)if(i)Z=g||a;else return;M[_s]&&M[_s](!0);const Y=T[w];Y&&Js(t,Y)&&Y.el[_s]&&Y.el[_s](),x(Z,[M])},enter(M){let Z=l,Y=c,ue=u;if(!n.isMounted)if(i)Z=y||l,Y=E||c,ue=C||u;else return;let j=!1;const se=M[Ba]=Be=>{j||(j=!0,Be?x(ue,[M]):x(Y,[M]),W.delayedLeave&&W.delayedLeave(),M[Ba]=void 0)};Z?R(Z,[M,se]):se()},leave(M,Z){const Y=String(t.key);if(M[Ba]&&M[Ba](!0),n.isUnmounting)return Z();x(h,[M]);let ue=!1;const j=M[_s]=se=>{ue||(ue=!0,Z(),se?x(_,[M]):x(f,[M]),M[_s]=void 0,T[Y]===t&&delete T[Y])};T[Y]=t,d?R(d,[M,j]):j()},clone(M){return bh(M,e,n,s)}};return W}function Cu(t){if(Ec(t))return t=xs(t),t.children=null,t}function Gm(t){return Ec(t)?t.children?t.children[0]:void 0:t}function Ih(t,e){t.shapeFlag&6&&t.component?Ih(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function PE(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Qt?(o.patchFlag&128&&i++,s=s.concat(PE(o.children,e,a))):(e||o.type!==gn)&&s.push(a!=null?xs(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function mf(t,e){return oe(t)?Je({name:t.name},e,{setup:t}):t}const rl=t=>!!t.type.__asyncLoader,Ec=t=>t.type.__isKeepAlive;function lP(t,e){OE(t,"a",e)}function cP(t,e){OE(t,"da",e)}function OE(t,e,n=ct){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Tc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ec(i.parent.vnode)&&uP(s,e,n,i),i=i.parent}}function uP(t,e,n,s){const i=Tc(e,t,s,!0);xE(()=>{tf(s[e],i)},n)}function Tc(t,e,n=ct,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ci();const a=aa(n),l=nn(e,n,t,o);return a(),Si(),l});return s?i.unshift(r):i.push(r),r}}const os=t=>(e,n=ct)=>(!bc||t==="sp")&&Tc(t,(...s)=>e(...s),n),hP=os("bm"),kE=os("m"),dP=os("bu"),fP=os("u"),DE=os("bum"),xE=os("um"),LE=os("sp"),pP=os("rtg"),mP=os("rtc");function _P(t,e=ct){Tc("ec",t,e)}function Ym(t,e,n,s){let i;const r=n&&n[s];if(ne(t)||qe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Le(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Ch=t=>t?zE(t)?Tf(t)||t.proxy:Ch(t.parent):null,_o=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ch(t.parent),$root:t=>Ch(t.root),$emit:t=>t.emit,$options:t=>_f(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ff(t.update)}),$nextTick:t=>t.n||(t.n=vE.bind(t.proxy)),$watch:t=>iP.bind(t)}),Su=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Ee(t,e),gP={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Su(s,e))return o[e]=1,s[e];if(i!==Fe&&Ee(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ee(c,e))return o[e]=3,r[e];if(n!==Fe&&Ee(n,e))return o[e]=4,n[e];Sh&&(o[e]=0)}}const u=_o[e];let h,d;if(u)return e==="$attrs"&&Mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Fe&&Ee(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ee(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Su(i,e)?(i[e]=n,!0):s!==Fe&&Ee(s,e)?(s[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Fe&&Ee(t,o)||Su(e,o)||(a=r[0])&&Ee(a,o)||Ee(s,o)||Ee(_o,o)||Ee(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qm(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sh=!0;function yP(t){const e=_f(t),n=t.proxy,s=t.ctx;Sh=!1,e.beforeCreate&&Xm(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:g,deactivated:y,beforeDestroy:E,beforeUnmount:C,destroyed:w,unmounted:T,render:x,renderTracked:R,renderTriggered:W,errorCaptured:M,serverPrefetch:Z,expose:Y,inheritAttrs:ue,components:j,directives:se,filters:Be}=e;if(c&&vP(c,s,null),o)for(const le in o){const pe=o[le];oe(pe)&&(s[le]=pe.bind(n))}if(i){const le=i.call(n,n);Le(le)&&(t.data=_c(le))}if(Sh=!0,r)for(const le in r){const pe=r[le],ot=oe(pe)?pe.bind(n,n):oe(pe.get)?pe.get.bind(n,n):Jt,Vt=!oe(pe)&&oe(pe.set)?pe.set.bind(n):Jt,kt=dn({get:ot,set:Vt});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Ke=>kt.value=Ke})}if(a)for(const le in a)ME(a[le],s,n,le);if(l){const le=oe(l)?l.call(n):l;Reflect.ownKeys(le).forEach(pe=>{ol(pe,le[pe])})}u&&Xm(u,t,"c");function fe(le,pe){ne(pe)?pe.forEach(ot=>le(ot.bind(n))):pe&&le(pe.bind(n))}if(fe(hP,h),fe(kE,d),fe(dP,f),fe(fP,_),fe(lP,g),fe(cP,y),fe(_P,M),fe(mP,R),fe(pP,W),fe(DE,C),fe(xE,T),fe(LE,Z),ne(Y))if(Y.length){const le=t.exposed||(t.exposed={});Y.forEach(pe=>{Object.defineProperty(le,pe,{get:()=>n[pe],set:ot=>n[pe]=ot})})}else t.exposed||(t.exposed={});x&&t.render===Jt&&(t.render=x),ue!=null&&(t.inheritAttrs=ue),j&&(t.components=j),se&&(t.directives=se)}function vP(t,e,n=Jt){ne(t)&&(t=Rh(t));for(const s in t){const i=t[s];let r;Le(i)?"default"in i?r=sn(i.from||s,i.default,!0):r=sn(i.from||s):r=sn(i),Ot(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Xm(t,e,n){nn(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ME(t,e,n,s){const i=s.includes(".")?SE(n,s):()=>n[s];if(qe(t)){const r=e[t];oe(r)&&mo(i,r)}else if(oe(t))mo(i,t.bind(n));else if(Le(t))if(ne(t))t.forEach(r=>ME(r,e,n,s));else{const r=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(r)&&mo(i,r,t)}}function _f(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Tl(l,c,o,!0)),Tl(l,e,o)),Le(e)&&r.set(e,l),l}function Tl(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Tl(t,r,n,!0),i&&i.forEach(o=>Tl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=EP[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const EP={data:Jm,props:Zm,emits:Zm,methods:io,computed:io,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:io,directives:io,watch:wP,provide:Jm,inject:TP};function Jm(t,e){return e?t?function(){return Je(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function TP(t,e){return io(Rh(t),Rh(e))}function Rh(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function io(t,e){return t?Je(Object.create(null),t,e):e}function Zm(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Je(Object.create(null),Qm(t),Qm(e??{})):e}function wP(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=bt(t[s],e[s]);return n}function VE(){return{app:null,config:{isNativeTag:sN,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let AP=0;function bP(t,e){return function(s,i=null){oe(s)||(s=Je({},s)),i!=null&&!Le(i)&&(i=null);const r=VE(),o=new WeakSet;let a=!1;const l=r.app={_uid:AP++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:GP,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&oe(c.install)?(o.add(c),c.install(l,...u)):oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=de(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Tf(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){wl=l;try{return c()}finally{wl=null}}};return l}}let wl=null;function ol(t,e){if(ct){let n=ct.provides;const s=ct.parent&&ct.parent.provides;s===n&&(n=ct.provides=Object.create(s)),n[t]=e}}function sn(t,e,n=!1){const s=ct||Zt;if(s||wl){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:wl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&oe(e)?e.call(s&&s.proxy):e}}function IP(t,e,n,s=!1){const i={},r={};yl(r,Ac,1),t.propsDefaults=Object.create(null),FE(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:cE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function CP(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=we(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(yc(t.emitsOptions,d))continue;const f=e[d];if(l)if(Ee(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const _=Bn(d);i[_]=Nh(l,a,_,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{FE(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Ee(e,h)&&((u=Dr(h))===h||!Ee(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Nh(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Ee(e,h))&&(delete r[h],c=!0)}c&&es(t,"set","$attrs")}function FE(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(il(l))continue;const c=e[l];let u;i&&Ee(i,u=Bn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:yc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=we(n),c=a||Fe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Nh(i,l,h,c[h],t,!Ee(c,h))}}return o}function Nh(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Ee(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&oe(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=aa(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Dr(n))&&(s=!0))}return s}function $E(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!oe(t)){const u=h=>{l=!0;const[d,f]=$E(h,e,!0);Je(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Le(t)&&s.set(t,Yi),Yi;if(ne(r))for(let u=0;u<r.length;u++){const h=Bn(r[u]);e_(h)&&(o[h]=Fe)}else if(r)for(const u in r){const h=Bn(u);if(e_(h)){const d=r[u],f=o[h]=ne(d)||oe(d)?{type:d}:Je({},d);if(f){const _=s_(Boolean,f.type),g=s_(String,f.type);f[0]=_>-1,f[1]=g<0||_<g,(_>-1||Ee(f,"default"))&&a.push(h)}}}const c=[o,a];return Le(t)&&s.set(t,c),c}function e_(t){return t[0]!=="$"}function t_(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function n_(t,e){return t_(t)===t_(e)}function s_(t,e){return ne(e)?e.findIndex(n=>n_(n,t)):oe(e)&&n_(e,t)?0:-1}const UE=t=>t[0]==="_"||t==="$stable",gf=t=>ne(t)?t.map(Rn):[Rn(t)],SP=(t,e,n)=>{if(e._n)return e;const s=Lt((...i)=>gf(e(...i)),n);return s._c=!1,s},BE=(t,e,n)=>{const s=t._ctx;for(const i in t){if(UE(i))continue;const r=t[i];if(oe(r))e[i]=SP(i,r,s);else if(r!=null){const o=gf(r);e[i]=()=>o}}},HE=(t,e)=>{const n=gf(e);t.slots.default=()=>n},RP=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),yl(e,"_",n)):BE(e,t.slots={})}else t.slots={},e&&HE(t,e);yl(t.slots,Ac,1)},NP=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Je(i,e),!n&&a===1&&delete i._):(r=!e.$stable,BE(e,i)),o=e}else e&&(HE(t,e),o={default:1});if(r)for(const a in i)!UE(a)&&o[a]==null&&delete i[a]};function Ph(t,e,n,s,i=!1){if(ne(t)){t.forEach((d,f)=>Ph(d,e&&(ne(e)?e[f]:e),n,s,i));return}if(rl(s)&&!i)return;const r=s.shapeFlag&4?Tf(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Fe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(qe(c)?(u[c]=null,Ee(h,c)&&(h[c]=null)):Ot(c)&&(c.value=null)),oe(l))As(l,a,12,[o,u]);else{const d=qe(l),f=Ot(l);if(d||f){const _=()=>{if(t.f){const g=d?Ee(h,l)?h[l]:u[l]:l.value;i?ne(g)&&tf(g,r):ne(g)?g.includes(r)||g.push(r):d?(u[l]=[r],Ee(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ee(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Dt(_,n)):_()}}}const Dt=tP;function PP(t){return OP(t)}function OP(t,e){const n=Gv();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Jt,insertStaticContent:_}=t,g=(p,m,v,I=null,A=null,k=null,H=void 0,O=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!Js(p,m)&&(I=b(p),Ke(p,A,k,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:N,ref:q,shapeFlag:Q}=m;switch(N){case wc:y(p,m,v,I);break;case gn:E(p,m,v,I);break;case al:p==null&&C(m,v,I,H);break;case Qt:j(p,m,v,I,A,k,H,O,D);break;default:Q&1?x(p,m,v,I,A,k,H,O,D):Q&6?se(p,m,v,I,A,k,H,O,D):(Q&64||Q&128)&&N.process(p,m,v,I,A,k,H,O,D,z)}q!=null&&A&&Ph(q,p&&p.ref,k,m||p,!m)},y=(p,m,v,I)=>{if(p==null)s(m.el=a(m.children),v,I);else{const A=m.el=p.el;m.children!==p.children&&c(A,m.children)}},E=(p,m,v,I)=>{p==null?s(m.el=l(m.children||""),v,I):m.el=p.el},C=(p,m,v,I)=>{[p.el,p.anchor]=_(p.children,m,v,I,p.el,p.anchor)},w=({el:p,anchor:m},v,I)=>{let A;for(;p&&p!==m;)A=d(p),s(p,v,I),p=A;s(m,v,I)},T=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=d(p),i(p),p=v;i(m)},x=(p,m,v,I,A,k,H,O,D)=>{m.type==="svg"?H="svg":m.type==="math"&&(H="mathml"),p==null?R(m,v,I,A,k,H,O,D):Z(p,m,A,k,H,O,D)},R=(p,m,v,I,A,k,H,O)=>{let D,N;const{props:q,shapeFlag:Q,transition:G,dirs:te}=p;if(D=p.el=o(p.type,k,q&&q.is,q),Q&8?u(D,p.children):Q&16&&M(p.children,D,null,I,A,Ru(p,k),H,O),te&&Ws(p,null,I,"created"),W(D,p,p.scopeId,H,I),q){for(const be in q)be!=="value"&&!il(be)&&r(D,be,null,q[be],k,p.children,I,A,He);"value"in q&&r(D,"value",null,q.value,k),(N=q.onVnodeBeforeMount)&&Sn(N,I,p)}te&&Ws(p,null,I,"beforeMount");const ce=kP(A,G);ce&&G.beforeEnter(D),s(D,m,v),((N=q&&q.onVnodeMounted)||ce||te)&&Dt(()=>{N&&Sn(N,I,p),ce&&G.enter(D),te&&Ws(p,null,I,"mounted")},A)},W=(p,m,v,I,A)=>{if(v&&f(p,v),I)for(let k=0;k<I.length;k++)f(p,I[k]);if(A){let k=A.subTree;if(m===k){const H=A.vnode;W(p,H,H.scopeId,H.slotScopeIds,A.parent)}}},M=(p,m,v,I,A,k,H,O,D=0)=>{for(let N=D;N<p.length;N++){const q=p[N]=O?gs(p[N]):Rn(p[N]);g(null,q,m,v,I,A,k,H,O)}},Z=(p,m,v,I,A,k,H)=>{const O=m.el=p.el;let{patchFlag:D,dynamicChildren:N,dirs:q}=m;D|=p.patchFlag&16;const Q=p.props||Fe,G=m.props||Fe;let te;if(v&&Ks(v,!1),(te=G.onVnodeBeforeUpdate)&&Sn(te,v,m,p),q&&Ws(m,p,v,"beforeUpdate"),v&&Ks(v,!0),N?Y(p.dynamicChildren,N,O,v,I,Ru(m,A),k):H||pe(p,m,O,null,v,I,Ru(m,A),k,!1),D>0){if(D&16)ue(O,m,Q,G,v,I,A);else if(D&2&&Q.class!==G.class&&r(O,"class",null,G.class,A),D&4&&r(O,"style",Q.style,G.style,A),D&8){const ce=m.dynamicProps;for(let be=0;be<ce.length;be++){const Ve=ce[be],Ze=Q[Ve],un=G[Ve];(un!==Ze||Ve==="value")&&r(O,Ve,Ze,un,A,p.children,v,I,He)}}D&1&&p.children!==m.children&&u(O,m.children)}else!H&&N==null&&ue(O,m,Q,G,v,I,A);((te=G.onVnodeUpdated)||q)&&Dt(()=>{te&&Sn(te,v,m,p),q&&Ws(m,p,v,"updated")},I)},Y=(p,m,v,I,A,k,H)=>{for(let O=0;O<m.length;O++){const D=p[O],N=m[O],q=D.el&&(D.type===Qt||!Js(D,N)||D.shapeFlag&70)?h(D.el):v;g(D,N,q,null,I,A,k,H,!0)}},ue=(p,m,v,I,A,k,H)=>{if(v!==I){if(v!==Fe)for(const O in v)!il(O)&&!(O in I)&&r(p,O,v[O],null,H,m.children,A,k,He);for(const O in I){if(il(O))continue;const D=I[O],N=v[O];D!==N&&O!=="value"&&r(p,O,N,D,H,m.children,A,k,He)}"value"in I&&r(p,"value",v.value,I.value,H)}},j=(p,m,v,I,A,k,H,O,D)=>{const N=m.el=p?p.el:a(""),q=m.anchor=p?p.anchor:a("");let{patchFlag:Q,dynamicChildren:G,slotScopeIds:te}=m;te&&(O=O?O.concat(te):te),p==null?(s(N,v,I),s(q,v,I),M(m.children||[],v,q,A,k,H,O,D)):Q>0&&Q&64&&G&&p.dynamicChildren?(Y(p.dynamicChildren,G,v,A,k,H,O),(m.key!=null||A&&m===A.subTree)&&jE(p,m,!0)):pe(p,m,v,q,A,k,H,O,D)},se=(p,m,v,I,A,k,H,O,D)=>{m.slotScopeIds=O,p==null?m.shapeFlag&512?A.ctx.activate(m,v,I,H,D):Be(m,v,I,A,k,H,D):rt(p,m,D)},Be=(p,m,v,I,A,k,H)=>{const O=p.component=BP(p,I,A);if(Ec(p)&&(O.ctx.renderer=z),HP(O),O.asyncDep){if(A&&A.registerDep(O,fe),!p.el){const D=O.subTree=de(gn);E(null,D,m,v)}}else fe(O,p,m,v,A,k,H)},rt=(p,m,v)=>{const I=m.component=p.component;if(XN(p,m,v))if(I.asyncDep&&!I.asyncResolved){le(I,m,v);return}else I.next=m,jN(I.update),I.effect.dirty=!0,I.update();else m.el=p.el,I.vnode=m},fe=(p,m,v,I,A,k,H)=>{const O=()=>{if(p.isMounted){let{next:q,bu:Q,u:G,parent:te,vnode:ce}=p;{const ki=qE(p);if(ki){q&&(q.el=ce.el,le(p,q,H)),ki.asyncDep.then(()=>{p.isUnmounted||O()});return}}let be=q,Ve;Ks(p,!1),q?(q.el=ce.el,le(p,q,H)):q=ce,Q&&Au(Q),(Ve=q.props&&q.props.onVnodeBeforeUpdate)&&Sn(Ve,te,q,ce),Ks(p,!0);const Ze=Iu(p),un=p.subTree;p.subTree=Ze,g(un,Ze,h(un.el),b(un),p,A,k),q.el=Ze.el,be===null&&JN(p,Ze.el),G&&Dt(G,A),(Ve=q.props&&q.props.onVnodeUpdated)&&Dt(()=>Sn(Ve,te,q,ce),A)}else{let q;const{el:Q,props:G}=m,{bm:te,m:ce,parent:be}=p,Ve=rl(m);if(Ks(p,!1),te&&Au(te),!Ve&&(q=G&&G.onVnodeBeforeMount)&&Sn(q,be,m),Ks(p,!0),Q&&Oe){const Ze=()=>{p.subTree=Iu(p),Oe(Q,p.subTree,p,A,null)};Ve?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ze()):Ze()}else{const Ze=p.subTree=Iu(p);g(null,Ze,v,I,p,A,k),m.el=Ze.el}if(ce&&Dt(ce,A),!Ve&&(q=G&&G.onVnodeMounted)){const Ze=m;Dt(()=>Sn(q,be,Ze),A)}(m.shapeFlag&256||be&&rl(be.vnode)&&be.vnode.shapeFlag&256)&&p.a&&Dt(p.a,A),p.isMounted=!0,m=v=I=null}},D=p.effect=new rf(O,Jt,()=>ff(N),p.scope),N=p.update=()=>{D.dirty&&D.run()};N.id=p.uid,Ks(p,!0),N()},le=(p,m,v)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,CP(p,m.props,I,v),NP(p,m.children,v),Ci(),Wm(p),Si()},pe=(p,m,v,I,A,k,H,O,D=!1)=>{const N=p&&p.children,q=p?p.shapeFlag:0,Q=m.children,{patchFlag:G,shapeFlag:te}=m;if(G>0){if(G&128){Vt(N,Q,v,I,A,k,H,O,D);return}else if(G&256){ot(N,Q,v,I,A,k,H,O,D);return}}te&8?(q&16&&He(N,A,k),Q!==N&&u(v,Q)):q&16?te&16?Vt(N,Q,v,I,A,k,H,O,D):He(N,A,k,!0):(q&8&&u(v,""),te&16&&M(Q,v,I,A,k,H,O,D))},ot=(p,m,v,I,A,k,H,O,D)=>{p=p||Yi,m=m||Yi;const N=p.length,q=m.length,Q=Math.min(N,q);let G;for(G=0;G<Q;G++){const te=m[G]=D?gs(m[G]):Rn(m[G]);g(p[G],te,v,null,A,k,H,O,D)}N>q?He(p,A,k,!0,!1,Q):M(m,v,I,A,k,H,O,D,Q)},Vt=(p,m,v,I,A,k,H,O,D)=>{let N=0;const q=m.length;let Q=p.length-1,G=q-1;for(;N<=Q&&N<=G;){const te=p[N],ce=m[N]=D?gs(m[N]):Rn(m[N]);if(Js(te,ce))g(te,ce,v,null,A,k,H,O,D);else break;N++}for(;N<=Q&&N<=G;){const te=p[Q],ce=m[G]=D?gs(m[G]):Rn(m[G]);if(Js(te,ce))g(te,ce,v,null,A,k,H,O,D);else break;Q--,G--}if(N>Q){if(N<=G){const te=G+1,ce=te<q?m[te].el:I;for(;N<=G;)g(null,m[N]=D?gs(m[N]):Rn(m[N]),v,ce,A,k,H,O,D),N++}}else if(N>G)for(;N<=Q;)Ke(p[N],A,k,!0),N++;else{const te=N,ce=N,be=new Map;for(N=ce;N<=G;N++){const Ut=m[N]=D?gs(m[N]):Rn(m[N]);Ut.key!=null&&be.set(Ut.key,N)}let Ve,Ze=0;const un=G-ce+1;let ki=!1,Jp=0;const Kr=new Array(un);for(N=0;N<un;N++)Kr[N]=0;for(N=te;N<=Q;N++){const Ut=p[N];if(Ze>=un){Ke(Ut,A,k,!0);continue}let Cn;if(Ut.key!=null)Cn=be.get(Ut.key);else for(Ve=ce;Ve<=G;Ve++)if(Kr[Ve-ce]===0&&Js(Ut,m[Ve])){Cn=Ve;break}Cn===void 0?Ke(Ut,A,k,!0):(Kr[Cn-ce]=N+1,Cn>=Jp?Jp=Cn:ki=!0,g(Ut,m[Cn],v,null,A,k,H,O,D),Ze++)}const Zp=ki?DP(Kr):Yi;for(Ve=Zp.length-1,N=un-1;N>=0;N--){const Ut=ce+N,Cn=m[Ut],em=Ut+1<q?m[Ut+1].el:I;Kr[N]===0?g(null,Cn,v,em,A,k,H,O,D):ki&&(Ve<0||N!==Zp[Ve]?kt(Cn,v,em,2):Ve--)}}},kt=(p,m,v,I,A=null)=>{const{el:k,type:H,transition:O,children:D,shapeFlag:N}=p;if(N&6){kt(p.component.subTree,m,v,I);return}if(N&128){p.suspense.move(m,v,I);return}if(N&64){H.move(p,m,v,z);return}if(H===Qt){s(k,m,v);for(let Q=0;Q<D.length;Q++)kt(D[Q],m,v,I);s(p.anchor,m,v);return}if(H===al){w(p,m,v);return}if(I!==2&&N&1&&O)if(I===0)O.beforeEnter(k),s(k,m,v),Dt(()=>O.enter(k),A);else{const{leave:Q,delayLeave:G,afterLeave:te}=O,ce=()=>s(k,m,v),be=()=>{Q(k,()=>{ce(),te&&te()})};G?G(k,ce,be):be()}else s(k,m,v)},Ke=(p,m,v,I=!1,A=!1)=>{const{type:k,props:H,ref:O,children:D,dynamicChildren:N,shapeFlag:q,patchFlag:Q,dirs:G}=p;if(O!=null&&Ph(O,null,v,p,!0),q&256){m.ctx.deactivate(p);return}const te=q&1&&G,ce=!rl(p);let be;if(ce&&(be=H&&H.onVnodeBeforeUnmount)&&Sn(be,m,p),q&6)$t(p.component,v,I);else{if(q&128){p.suspense.unmount(v,I);return}te&&Ws(p,null,m,"beforeUnmount"),q&64?p.type.remove(p,m,v,A,z,I):N&&(k!==Qt||Q>0&&Q&64)?He(N,m,v,!1,!0):(k===Qt&&Q&384||!A&&q&16)&&He(D,m,v),I&&cn(p)}(ce&&(be=H&&H.onVnodeUnmounted)||te)&&Dt(()=>{be&&Sn(be,m,p),te&&Ws(p,null,m,"unmounted")},v)},cn=p=>{const{type:m,el:v,anchor:I,transition:A}=p;if(m===Qt){Ft(v,I);return}if(m===al){T(p);return}const k=()=>{i(v),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:H,delayLeave:O}=A,D=()=>H(v,k);O?O(p.el,k,D):D()}else k()},Ft=(p,m)=>{let v;for(;p!==m;)v=d(p),i(p),p=v;i(m)},$t=(p,m,v)=>{const{bum:I,scope:A,update:k,subTree:H,um:O}=p;I&&Au(I),A.stop(),k&&(k.active=!1,Ke(H,p,m,v)),O&&Dt(O,m),Dt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},He=(p,m,v,I=!1,A=!1,k=0)=>{for(let H=k;H<p.length;H++)Ke(p[H],m,v,I,A)},b=p=>p.shapeFlag&6?b(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let B=!1;const F=(p,m,v)=>{p==null?m._vnode&&Ke(m._vnode,null,null,!0):g(m._vnode||null,p,m,null,null,null,v),B||(B=!0,Wm(),TE(),B=!1),m._vnode=p},z={p:g,um:Ke,m:kt,r:cn,mt:Be,mc:M,pc:pe,pbc:Y,n:b,o:t};let _e,Oe;return e&&([_e,Oe]=e(z)),{render:F,hydrate:_e,createApp:bP(F,_e)}}function Ru({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ks({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function kP(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jE(t,e,n=!1){const s=t.children,i=e.children;if(ne(s)&&ne(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=gs(i[r]),a.el=o.el),n||jE(o,a)),a.type===wc&&(a.el=o.el)}}function DP(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function qE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qE(e)}const xP=t=>t.__isTeleport,Qt=Symbol.for("v-fgt"),wc=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),al=Symbol.for("v-stc"),go=[];let pn=null;function Ue(t=!1){go.push(pn=t?null:[])}function LP(){go.pop(),pn=go[go.length-1]||null}let xo=1;function i_(t){xo+=t}function WE(t){return t.dynamicChildren=xo>0?pn||Yi:null,LP(),xo>0&&pn&&pn.push(t),t}function ht(t,e,n,s,i,r){return WE(V(t,e,n,s,i,r,!0))}function mi(t,e,n,s,i){return WE(de(t,e,n,s,i,!0))}function Oh(t){return t?t.__v_isVNode===!0:!1}function Js(t,e){return t.type===e.type&&t.key===e.key}const Ac="__vInternal",KE=({key:t})=>t??null,ll=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||Ot(t)||oe(t)?{i:Zt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,s=0,i=null,r=t===Qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&KE(e),ref:e&&ll(e),scopeId:vc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Zt};return a?(vf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=qe(n)?8:16),xo>0&&!o&&pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pn.push(l),l}const de=MP;function MP(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===bE)&&(t=gn),Oh(t)){const a=xs(t,e,!0);return n&&vf(a,n),xo>0&&!r&&pn&&(a.shapeFlag&6?pn[pn.indexOf(t)]=a:pn.push(a)),a.patchFlag|=-2,a}if(zP(t)&&(t=t.__vccOpts),e){e=VP(e);let{class:a,style:l}=e;a&&!qe(a)&&(e.class=pc(a)),Le(l)&&(hE(l)&&!ne(l)&&(l=Je({},l)),e.style=sf(l))}const o=qe(t)?1:eP(t)?128:xP(t)?64:Le(t)?4:oe(t)?2:0;return V(t,e,n,s,i,o,r,!0)}function VP(t){return t?hE(t)||Ac in t?Je({},t):t:null}function xs(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?FP(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&KE(a),ref:e&&e.ref?n&&i?ne(i)?i.concat(ll(e)):[i,ll(e)]:ll(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xs(t.ssContent),ssFallback:t.ssFallback&&xs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ge(t=" ",e=0){return de(wc,null,t,e)}function yf(t,e){const n=de(al,null,t);return n.staticCount=e,n}function kh(t="",e=!1){return e?(Ue(),mi(gn,null,t)):de(gn,null,t)}function Rn(t){return t==null||typeof t=="boolean"?de(gn):ne(t)?de(Qt,null,t.slice()):typeof t=="object"?gs(t):de(wc,null,String(t))}function gs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xs(t)}function vf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),vf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ac in e)?e._ctx=Zt:i===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),s&64?(n=16,e=[Ge(e)]):n=8);t.children=e,t.shapeFlag|=n}function FP(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=pc([e.class,s.class]));else if(i==="style")e.style=sf([e.style,s.style]);else if(uc(i)){const r=e[i],o=s[i];o&&r!==o&&!(ne(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Sn(t,e,n,s=null){nn(t,e,7,[n,s])}const $P=VE();let UP=0;function BP(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||$P,r={uid:UP++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _N(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$E(s,i),emitsOptions:AE(s,i),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:s.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=KN.bind(null,r),t.ce&&t.ce(r),r}let ct=null;const Ef=()=>ct||Zt;let Al,Dh;{const t=Gv(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Al=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),Dh=e("__VUE_SSR_SETTERS__",n=>bc=n)}const aa=t=>{const e=ct;return Al(t),t.scope.on(),()=>{t.scope.off(),Al(e)}},r_=()=>{ct&&ct.scope.off(),Al(null)};function zE(t){return t.vnode.shapeFlag&4}let bc=!1;function HP(t,e=!1){e&&Dh(e);const{props:n,children:s}=t.vnode,i=zE(t);IP(t,n,i,e),RP(t,s);const r=i?jP(t,e):void 0;return e&&Dh(!1),r}function jP(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=dE(new Proxy(t.ctx,gP));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?WP(t):null,r=aa(t);Ci();const o=As(s,t,0,[t.props,i]);if(Si(),r(),Wv(o)){if(o.then(r_,r_),e)return o.then(a=>{o_(t,a,e)}).catch(a=>{gc(a,t,0)});t.asyncDep=o}else o_(t,o,e)}else GE(t,e)}function o_(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=gE(e)),GE(t,n)}let a_;function GE(t,e,n){const s=t.type;if(!t.render){if(!e&&a_&&!s.render){const i=s.template||_f(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Je(Je({isCustomElement:r,delimiters:a},o),l);s.render=a_(i,c)}}t.render=s.render||Jt}{const i=aa(t);Ci();try{yP(t)}finally{Si(),i()}}}function qP(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Mt(t,"get","$attrs"),e[n]}}))}function WP(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return qP(t)},slots:t.slots,emit:t.emit,expose:e}}function Tf(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(gE(dE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _o)return _o[n](t)},has(e,n){return n in e||n in _o}}))}function KP(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function zP(t){return oe(t)&&"__vccOpts"in t}const dn=(t,e)=>FN(t,e,bc);function wf(t,e,n){const s=arguments.length;return s===2?Le(e)&&!ne(e)?Oh(e)?de(t,null,[e]):de(t,e):de(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Oh(n)&&(n=[n]),de(t,e,n))}const GP="3.4.8";/**
* @vue/runtime-dom v3.4.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const YP="http://www.w3.org/2000/svg",QP="http://www.w3.org/1998/Math/MathML",ys=typeof document<"u"?document:null,l_=ys&&ys.createElement("template"),XP={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ys.createElementNS(YP,t):e==="mathml"?ys.createElementNS(QP,t):ys.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ys.createTextNode(t),createComment:t=>ys.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ys.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{l_.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=l_.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hs="transition",Yr="animation",Lo=Symbol("_vtc"),Af=(t,{slots:e})=>wf(aP,JP(t),e);Af.displayName="Transition";const YE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Af.props=Je({},RE,YE);const zs=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},c_=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function JP(t){const e={};for(const j in t)j in YE||(e[j]=t[j]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,_=ZP(i),g=_&&_[0],y=_&&_[1],{onBeforeEnter:E,onEnter:C,onEnterCancelled:w,onLeave:T,onLeaveCancelled:x,onBeforeAppear:R=E,onAppear:W=C,onAppearCancelled:M=w}=e,Z=(j,se,Be)=>{Gs(j,se?u:a),Gs(j,se?c:o),Be&&Be()},Y=(j,se)=>{j._isLeaving=!1,Gs(j,h),Gs(j,f),Gs(j,d),se&&se()},ue=j=>(se,Be)=>{const rt=j?W:C,fe=()=>Z(se,j,Be);zs(rt,[se,fe]),u_(()=>{Gs(se,j?l:r),ds(se,j?u:a),c_(rt)||h_(se,s,g,fe)})};return Je(e,{onBeforeEnter(j){zs(E,[j]),ds(j,r),ds(j,o)},onBeforeAppear(j){zs(R,[j]),ds(j,l),ds(j,c)},onEnter:ue(!1),onAppear:ue(!0),onLeave(j,se){j._isLeaving=!0;const Be=()=>Y(j,se);ds(j,h),nO(),ds(j,d),u_(()=>{j._isLeaving&&(Gs(j,h),ds(j,f),c_(T)||h_(j,s,y,Be))}),zs(T,[j,Be])},onEnterCancelled(j){Z(j,!1),zs(w,[j])},onAppearCancelled(j){Z(j,!0),zs(M,[j])},onLeaveCancelled(j){Y(j),zs(x,[j])}})}function ZP(t){if(t==null)return null;if(Le(t))return[Nu(t.enter),Nu(t.leave)];{const e=Nu(t);return[e,e]}}function Nu(t){return cN(t)}function ds(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Lo]||(t[Lo]=new Set)).add(e)}function Gs(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Lo];n&&(n.delete(e),n.size||(t[Lo]=void 0))}function u_(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let eO=0;function h_(t,e,n,s){const i=t._endId=++eO,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=tO(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function tO(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${hs}Delay`),r=s(`${hs}Duration`),o=d_(i,r),a=s(`${Yr}Delay`),l=s(`${Yr}Duration`),c=d_(a,l);let u=null,h=0,d=0;e===hs?o>0&&(u=hs,h=o,d=r.length):e===Yr?c>0&&(u=Yr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?hs:Yr:null,d=u?u===hs?r.length:l.length:0);const f=u===hs&&/\b(transform|all)(,|$)/.test(s(`${hs}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function d_(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>f_(n)+f_(t[s])))}function f_(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function nO(){return document.body.offsetHeight}function sO(t,e,n){const s=t[Lo];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const iO=Symbol("_vod"),rO=Symbol("");function oO(t,e,n){const s=t.style,i=qe(n);if(n&&!i){if(e&&!qe(e))for(const r in e)n[r]==null&&xh(s,r,"");for(const r in n)xh(s,r,n[r])}else{const r=s.display;if(i){if(e!==n){const o=s[rO];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");iO in t&&(s.display=r)}}const p_=/\s*!important$/;function xh(t,e,n){if(ne(n))n.forEach(s=>xh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=aO(t,e);p_.test(n)?t.setProperty(Dr(s),n.replace(p_,""),"important"):t[s]=n}}const m_=["Webkit","Moz","ms"],Pu={};function aO(t,e){const n=Pu[e];if(n)return n;let s=Bn(e);if(s!=="filter"&&s in t)return Pu[e]=s;s=fc(s);for(let i=0;i<m_.length;i++){const r=m_[i]+s;if(r in t)return Pu[e]=r}return e}const __="http://www.w3.org/1999/xlink";function lO(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(__,e.slice(6,e.length)):t.setAttributeNS(__,e,n);else{const r=mN(e);n==null||r&&!Yv(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function cO(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Yv(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function uO(t,e,n,s){t.addEventListener(e,n,s)}function hO(t,e,n,s){t.removeEventListener(e,n,s)}const g_=Symbol("_vei");function dO(t,e,n,s,i=null){const r=t[g_]||(t[g_]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=fO(e);if(s){const c=r[e]=_O(s,i);uO(t,a,c,l)}else o&&(hO(t,a,o,l),r[e]=void 0)}}const y_=/(?:Once|Passive|Capture)$/;function fO(t){let e;if(y_.test(t)){e={};let s;for(;s=t.match(y_);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dr(t.slice(2)),e]}let Ou=0;const pO=Promise.resolve(),mO=()=>Ou||(pO.then(()=>Ou=0),Ou=Date.now());function _O(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nn(gO(s,n.value),e,5,[s])};return n.value=t,n.attached=mO(),n}function gO(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const v_=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yO=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?sO(t,s,c):e==="style"?oO(t,n,s):uc(e)?ef(e)||dO(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vO(t,e,s,c))?cO(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),lO(t,e,s,c))};function vO(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&v_(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return v_(e)&&qe(n)?!1:e in t}const EO=Je({patchProp:yO},XP);let E_;function TO(){return E_||(E_=PP(EO))}const wO=(...t)=>{const e=TO().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=bO(s);if(!i)return;const r=e._component;!oe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,AO(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function AO(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bO(t){return qe(t)?document.querySelector(t):t}const In=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},IO={},CO=t=>(zN("data-v-b347631a"),t=t(),GN(),t),SO={class:"navbar z-100 navbar-expand-lg w-100 bg-fruuters"},RO={class:"container"},NO=CO(()=>V("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[V("span",{class:"navbar-toggler-icon"})],-1)),PO={class:"collapse navbar-collapse justify-content-start",id:"navbarNav"},OO={class:"col-6 navbar-nav justify-content-evenly fw-light"},kO={class:"nav-item"},DO={class:"nav-item"},xO={class:"nav-item"},LO={class:"nav-item"};function MO(t,e){const n=Nt("RouterLink");return Ue(),ht("nav",SO,[V("div",RO,[de(n,{to:"/",class:"text-white h2 text-decoration-none letter nav-title"},{default:Lt(()=>[Ge("früüters.id")]),_:1}),NO,V("div",PO,[V("ul",OO,[V("li",kO,[de(n,{to:"/categories","active-class":"fw-bold",class:"nav-link text-white"},{default:Lt(()=>[Ge("Categories")]),_:1})]),V("li",DO,[de(n,{to:"/offers","active-class":"fw-bold",class:"nav-link text-white"},{default:Lt(()=>[Ge("Offers")]),_:1})]),V("li",xO,[de(n,{to:"/account","active-class":"fw-bold",class:"nav-link text-white"},{default:Lt(()=>[Ge("Account")]),_:1})]),V("li",LO,[de(n,{to:"/contact","active-class":"fw-bold",class:"nav-link text-white"},{default:Lt(()=>[Ge("Contact")]),_:1})])])])])])}const VO=In(IO,[["render",MO],["__scopeId","data-v-b347631a"]]),FO={},$O={class:"bg-fruuters footer"},UO=yf('<div class="container" data-v-04febc99><footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4" data-v-04febc99><ul class="col-md-2 mb-0 text-white list-group" data-v-04febc99><li data-v-04febc99>Fruuters.id :</li><li data-v-04febc99>Get Your Own Fruits</li><li data-v-04febc99>More Easier!</li></ul><a href="/" class="text-white col-md-6 d-flex align-items-center justify-content-center mb-3 mb-md-0 link-dark text-decoration-none" data-v-04febc99><div class="display-5 fw-bold footer-title" data-v-04febc99>früüters</div></a><ul class="nav col-md-2 justify-content-end" data-v-04febc99><a href="https://github.com/mozaldy/" class="text-decoration-none" data-v-04febc99><p class="mb-0 text-white" data-v-04febc99>Made by The 2DH Team</p></a></ul></footer></div>',1),BO=[UO];function HO(t,e){return Ue(),ht("div",$O,BO)}const jO=In(FO,[["render",HO],["__scopeId","data-v-04febc99"]]),qO=mf({__name:"App",setup(t){return(e,n)=>{const s=Nt("router-view");return Ue(),ht("div",null,[de(VO),de(s,null,{default:Lt(({Component:i})=>[de(Af,{name:"slide",mode:"out-in"},{default:Lt(()=>[(Ue(),mi(ZN(i),{key:e.$route.path}))]),_:2},1024)]),_:1}),de(jO)])}}});/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ui=typeof window<"u";function WO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function ku(t,e){const n={};for(const s in e){const i=e[s];n[s]=En(i)?i.map(t):t(i)}return n}const yo=()=>{},En=Array.isArray,KO=/\/$/,zO=t=>t.replace(KO,"");function Du(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=XO(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function GO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function T_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YO(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&_r(e.matched[s],n.matched[i])&&QE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _r(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function QE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!QO(t[n],e[n]))return!1;return!0}function QO(t,e){return En(t)?w_(t,e):En(e)?w_(e,t):t===e}function w_(t,e){return En(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function XO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Mo;(function(t){t.pop="pop",t.push="push"})(Mo||(Mo={}));var vo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vo||(vo={}));function JO(t){if(!t)if(Ui){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zO(t)}const ZO=/^[^#]+#/;function ek(t,e){return t.replace(ZO,"#")+e}function tk(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ic=()=>({left:window.pageXOffset,top:window.pageYOffset});function nk(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=tk(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function A_(t,e){return(history.state?history.state.position-e:-1)+t}const Lh=new Map;function sk(t,e){Lh.set(t,e)}function ik(t){const e=Lh.get(t);return Lh.delete(t),e}let rk=()=>location.protocol+"//"+location.host;function XE(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),T_(l,"")}return T_(n,t)+s+i}function ok(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=XE(t,location),_=n.value,g=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===_){o=null;return}y=g?d.position-g.position:0}else s(f);i.forEach(E=>{E(n.value,_,{delta:y,type:Mo.pop,direction:y?y>0?vo.forward:vo.back:vo.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const _=i.indexOf(d);_>-1&&i.splice(_,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Se({},d.state,{scroll:Ic()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function b_(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ic():null}}function ak(t){const{history:e,location:n}=window,s={value:XE(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:rk()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Se({},e.state,b_(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Se({},i.value,e.state,{forward:l,scroll:Ic()});r(u.current,u,!0);const h=Se({},b_(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function lk(t){t=JO(t);const e=ak(t),n=ok(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Se({location:"",base:t,go:s,createHref:ek.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ck(t){return typeof t=="string"||t&&typeof t=="object"}function JE(t){return typeof t=="string"||typeof t=="symbol"}const fs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ZE=Symbol("");var I_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(I_||(I_={}));function gr(t,e){return Se(new Error,{type:t,[ZE]:!0},e)}function Gn(t,e){return t instanceof Error&&ZE in t&&(e==null||!!(t.type&e))}const C_="[^/]+?",uk={sensitive:!1,strict:!1,start:!0,end:!0},hk=/[.+*?^${}()[\]/\\]/g;function dk(t,e){const n=Se({},uk,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(hk,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:g,optional:y,regexp:E}=d;r.push({name:_,repeatable:g,optional:y});const C=E||C_;if(C!==C_){f+=10;try{new RegExp(`(${C})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+T.message)}}let w=g?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(w=y&&c.length<2?`(?:/${w})`:"/"+w),y&&(w+="?"),i+=w,f+=20,y&&(f+=-8),g&&(f+=-20),C===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",_=r[d-1];h[_.name]=f&&_.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:_,repeatable:g,optional:y}=f,E=_ in c?c[_]:"";if(En(E)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=En(E)?E.join("/"):E;if(!C)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function fk(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function pk(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=fk(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(S_(s))return 1;if(S_(i))return-1}return i.length-s.length}function S_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const mk={type:0,value:""},_k=/[a-zA-Z0-9_]/;function gk(t){if(!t)return[[]];if(t==="/")return[[mk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:_k.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function yk(t,e,n){const s=dk(gk(t.path),n),i=Se(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function vk(t,e){const n=[],s=new Map;e=P_({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,_=Ek(u);_.aliasOf=d&&d.record;const g=P_(e,u),y=[_];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of w)y.push(Se({},_,{components:d?d.record.components:_.components,path:T,aliasOf:d?d.record:_}))}let E,C;for(const w of y){const{path:T}=w;if(h&&T[0]!=="/"){const x=h.record.path,R=x[x.length-1]==="/"?"":"/";w.path=h.record.path+(T&&R+T)}if(E=yk(w,h,g),d?d.alias.push(E):(C=C||E,C!==E&&C.alias.push(E),f&&u.name&&!N_(E)&&o(u.name)),_.children){const x=_.children;for(let R=0;R<x.length;R++)r(x[R],E,d&&d.children[R])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&l(E)}return C?()=>{o(C)}:yo}function o(u){if(JE(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&pk(u,n[h])>=0&&(u.record.path!==n[h].record.path||!eT(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!N_(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},_,g;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw gr(1,{location:u});g=d.record.name,f=Se(R_(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&R_(u.params,d.keys.map(C=>C.name))),_=d.stringify(f)}else if("path"in u)_=u.path,d=n.find(C=>C.re.test(_)),d&&(f=d.parse(_),g=d.record.name);else{if(d=h.name?s.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw gr(1,{location:u,currentLocation:h});g=d.record.name,f=Se({},h.params,u.params),_=d.stringify(f)}const y=[];let E=d;for(;E;)y.unshift(E.record),E=E.parent;return{name:g,path:_,params:f,matched:y,meta:wk(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function R_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Ek(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Tk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Tk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function N_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wk(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function P_(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function eT(t,e){return e.children.some(n=>n===t||eT(t,n))}const tT=/#/g,Ak=/&/g,bk=/\//g,Ik=/=/g,Ck=/\?/g,nT=/\+/g,Sk=/%5B/g,Rk=/%5D/g,sT=/%5E/g,Nk=/%60/g,iT=/%7B/g,Pk=/%7C/g,rT=/%7D/g,Ok=/%20/g;function bf(t){return encodeURI(""+t).replace(Pk,"|").replace(Sk,"[").replace(Rk,"]")}function kk(t){return bf(t).replace(iT,"{").replace(rT,"}").replace(sT,"^")}function Mh(t){return bf(t).replace(nT,"%2B").replace(Ok,"+").replace(tT,"%23").replace(Ak,"%26").replace(Nk,"`").replace(iT,"{").replace(rT,"}").replace(sT,"^")}function Dk(t){return Mh(t).replace(Ik,"%3D")}function xk(t){return bf(t).replace(tT,"%23").replace(Ck,"%3F")}function Lk(t){return t==null?"":xk(t).replace(bk,"%2F")}function bl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Mk(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(nT," "),o=r.indexOf("="),a=bl(o<0?r:r.slice(0,o)),l=o<0?null:bl(r.slice(o+1));if(a in e){let c=e[a];En(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function O_(t){let e="";for(let n in t){const s=t[n];if(n=Dk(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(En(s)?s.map(r=>r&&Mh(r)):[s&&Mh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Vk(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=En(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Fk=Symbol(""),k_=Symbol(""),If=Symbol(""),Cf=Symbol(""),Vh=Symbol("");function Qr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vs(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(gr(4,{from:n,to:e})):h instanceof Error?a(h):ck(h)?a(gr(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function xu(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if($k(a)){const c=(a.__vccOpts||a)[e];c&&i.push(vs(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=WO(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&vs(d,n,s,r,o)()}))}}return i}function $k(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function D_(t){const e=sn(If),n=sn(Cf),s=dn(()=>e.resolve(ci(t.to))),i=dn(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(_r.bind(null,u));if(d>-1)return d;const f=x_(l[c-2]);return c>1&&x_(u)===f&&h[h.length-1].path!==f?h.findIndex(_r.bind(null,l[c-2])):d}),r=dn(()=>i.value>-1&&Hk(n.params,s.value.params)),o=dn(()=>i.value>-1&&i.value===n.matched.length-1&&QE(n.params,s.value.params));function a(l={}){return Bk(l)?e[ci(t.replace)?"replace":"push"](ci(t.to)).catch(yo):Promise.resolve()}return{route:s,href:dn(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Uk=mf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:D_,setup(t,{slots:e}){const n=_c(D_(t)),{options:s}=sn(If),i=dn(()=>({[L_(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[L_(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:wf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),oT=Uk;function Bk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Hk(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!En(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function x_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const L_=(t,e,n)=>t??e??n,jk=mf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=sn(Vh),i=dn(()=>t.route||s.value),r=sn(k_,0),o=dn(()=>{let c=ci(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=dn(()=>i.value.matched[o.value]);ol(k_,dn(()=>o.value+1)),ol(Fk,a),ol(Vh,i);const l=Ji();return mo(()=>[l.value,a.value,t.name],([c,u,h],[d,f,_])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!_r(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return M_(n.default,{Component:d,route:c});const f=h.props[u],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=wf(d,Se({},_,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return M_(n.default,{Component:y,route:c})||y}}});function M_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qk=jk;function Wk(t){const e=vk(t.routes,t),n=t.parseQuery||Mk,s=t.stringifyQuery||O_,i=t.history,r=Qr(),o=Qr(),a=Qr(),l=mE(fs);let c=fs;Ui&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ku.bind(null,b=>""+b),h=ku.bind(null,Lk),d=ku.bind(null,bl);function f(b,B){let F,z;return JE(b)?(F=e.getRecordMatcher(b),z=B):z=b,e.addRoute(z,F)}function _(b){const B=e.getRecordMatcher(b);B&&e.removeRoute(B)}function g(){return e.getRoutes().map(b=>b.record)}function y(b){return!!e.getRecordMatcher(b)}function E(b,B){if(B=Se({},B||l.value),typeof b=="string"){const m=Du(n,b,B.path),v=e.resolve({path:m.path},B),I=i.createHref(m.fullPath);return Se(m,v,{params:d(v.params),hash:bl(m.hash),redirectedFrom:void 0,href:I})}let F;if("path"in b)F=Se({},b,{path:Du(n,b.path,B.path).path});else{const m=Se({},b.params);for(const v in m)m[v]==null&&delete m[v];F=Se({},b,{params:h(m)}),B.params=h(B.params)}const z=e.resolve(F,B),_e=b.hash||"";z.params=u(d(z.params));const Oe=GO(s,Se({},b,{hash:kk(_e),path:z.path})),p=i.createHref(Oe);return Se({fullPath:Oe,hash:_e,query:s===O_?Vk(b.query):b.query||{}},z,{redirectedFrom:void 0,href:p})}function C(b){return typeof b=="string"?Du(n,b,l.value.path):Se({},b)}function w(b,B){if(c!==b)return gr(8,{from:B,to:b})}function T(b){return W(b)}function x(b){return T(Se(C(b),{replace:!0}))}function R(b){const B=b.matched[b.matched.length-1];if(B&&B.redirect){const{redirect:F}=B;let z=typeof F=="function"?F(b):F;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=C(z):{path:z},z.params={}),Se({query:b.query,hash:b.hash,params:"path"in z?{}:b.params},z)}}function W(b,B){const F=c=E(b),z=l.value,_e=b.state,Oe=b.force,p=b.replace===!0,m=R(F);if(m)return W(Se(C(m),{state:typeof m=="object"?Se({},_e,m.state):_e,force:Oe,replace:p}),B||F);const v=F;v.redirectedFrom=B;let I;return!Oe&&YO(s,z,F)&&(I=gr(16,{to:v,from:z}),kt(z,z,!0,!1)),(I?Promise.resolve(I):Y(v,z)).catch(A=>Gn(A)?Gn(A,2)?A:Vt(A):pe(A,v,z)).then(A=>{if(A){if(Gn(A,2))return W(Se({replace:p},C(A.to),{state:typeof A.to=="object"?Se({},_e,A.to.state):_e,force:Oe}),B||v)}else A=j(v,z,!0,p,_e);return ue(v,z,A),A})}function M(b,B){const F=w(b,B);return F?Promise.reject(F):Promise.resolve()}function Z(b){const B=Ft.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(b):b()}function Y(b,B){let F;const[z,_e,Oe]=Kk(b,B);F=xu(z.reverse(),"beforeRouteLeave",b,B);for(const m of z)m.leaveGuards.forEach(v=>{F.push(vs(v,b,B))});const p=M.bind(null,b,B);return F.push(p),He(F).then(()=>{F=[];for(const m of r.list())F.push(vs(m,b,B));return F.push(p),He(F)}).then(()=>{F=xu(_e,"beforeRouteUpdate",b,B);for(const m of _e)m.updateGuards.forEach(v=>{F.push(vs(v,b,B))});return F.push(p),He(F)}).then(()=>{F=[];for(const m of Oe)if(m.beforeEnter)if(En(m.beforeEnter))for(const v of m.beforeEnter)F.push(vs(v,b,B));else F.push(vs(m.beforeEnter,b,B));return F.push(p),He(F)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),F=xu(Oe,"beforeRouteEnter",b,B),F.push(p),He(F))).then(()=>{F=[];for(const m of o.list())F.push(vs(m,b,B));return F.push(p),He(F)}).catch(m=>Gn(m,8)?m:Promise.reject(m))}function ue(b,B,F){a.list().forEach(z=>Z(()=>z(b,B,F)))}function j(b,B,F,z,_e){const Oe=w(b,B);if(Oe)return Oe;const p=B===fs,m=Ui?history.state:{};F&&(z||p?i.replace(b.fullPath,Se({scroll:p&&m&&m.scroll},_e)):i.push(b.fullPath,_e)),l.value=b,kt(b,B,F,p),Vt()}let se;function Be(){se||(se=i.listen((b,B,F)=>{if(!$t.listening)return;const z=E(b),_e=R(z);if(_e){W(Se(_e,{replace:!0}),z).catch(yo);return}c=z;const Oe=l.value;Ui&&sk(A_(Oe.fullPath,F.delta),Ic()),Y(z,Oe).catch(p=>Gn(p,12)?p:Gn(p,2)?(W(p.to,z).then(m=>{Gn(m,20)&&!F.delta&&F.type===Mo.pop&&i.go(-1,!1)}).catch(yo),Promise.reject()):(F.delta&&i.go(-F.delta,!1),pe(p,z,Oe))).then(p=>{p=p||j(z,Oe,!1),p&&(F.delta&&!Gn(p,8)?i.go(-F.delta,!1):F.type===Mo.pop&&Gn(p,20)&&i.go(-1,!1)),ue(z,Oe,p)}).catch(yo)}))}let rt=Qr(),fe=Qr(),le;function pe(b,B,F){Vt(b);const z=fe.list();return z.length?z.forEach(_e=>_e(b,B,F)):console.error(b),Promise.reject(b)}function ot(){return le&&l.value!==fs?Promise.resolve():new Promise((b,B)=>{rt.add([b,B])})}function Vt(b){return le||(le=!b,Be(),rt.list().forEach(([B,F])=>b?F(b):B()),rt.reset()),b}function kt(b,B,F,z){const{scrollBehavior:_e}=t;if(!Ui||!_e)return Promise.resolve();const Oe=!F&&ik(A_(b.fullPath,0))||(z||!F)&&history.state&&history.state.scroll||null;return vE().then(()=>_e(b,B,Oe)).then(p=>p&&nk(p)).catch(p=>pe(p,b,B))}const Ke=b=>i.go(b);let cn;const Ft=new Set,$t={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,hasRoute:y,getRoutes:g,resolve:E,options:t,push:T,replace:x,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:ot,install(b){const B=this;b.component("RouterLink",oT),b.component("RouterView",qk),b.config.globalProperties.$router=B,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ci(l)}),Ui&&!cn&&l.value===fs&&(cn=!0,T(i.location).catch(_e=>{}));const F={};for(const _e in fs)Object.defineProperty(F,_e,{get:()=>l.value[_e],enumerable:!0});b.provide(If,B),b.provide(Cf,cE(F)),b.provide(Vh,l);const z=b.unmount;Ft.add(b),b.unmount=function(){Ft.delete(b),Ft.size<1&&(c=fs,se&&se(),se=null,l.value=fs,cn=!1,le=!1),z()}}};function He(b){return b.reduce((B,F)=>B.then(()=>Z(F)),Promise.resolve())}return $t}function Kk(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>_r(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>_r(c,l))||i.push(l))}return[n,s,i]}function zk(){return sn(Cf)}const Gk={props:{text1:String,text2:String,img_url:String,price:String}},Yk={class:"rounded-bottom-5 bg-fruuters"},Qk={class:"d-flex flex-wrap justify-content-between pb-3 ms-10p"},Xk={class:"my-auto h-fit col-6"},Jk={class:"text-white display-5 text-uppercase fw-bold fst-italic"},Zk={class:"text-end text-white display-5 text-uppercase fw-bold fst-italic"},eD={key:0,class:"text-white text-uppercase"},tD={class:"col-5 z-top"},nD=["src"];function sD(t,e,n,s,i,r){return Ue(),ht("header",Yk,[V("div",Qk,[V("div",Xk,[V("h1",Jk,hn(n.text1),1),V("h1",Zk,hn(n.text2),1),n.price?(Ue(),ht("h1",eD,"$ "+hn(n.price)+".00/kg",1)):kh("",!0)]),V("div",tD,[V("img",{src:n.img_url,alt:"",class:"w-100 rounded rounded-5"},null,8,nD)])])])}const xr=In(Gk,[["render",sD],["__scopeId","data-v-fca75644"]]),iD={components:{RouterLink:oT},props:{title:String,img_url:String,description:String,discount:{type:Number,default:1},price:Number,limited:{type:Boolean,default:!1},index:Number,buy_now:Boolean,product_id:String,produced_in:{type:String,default:"Indonesia"},production_capacity:{type:Number,default:0},product_stock:{type:Number,default:0}}},rD={class:"left col-sm-4"},oD=["src"],aD={class:"right col-sm-6 d-flex flex-column justify-content-evenly"},lD={key:0,class:"text-uppercase display-5 fw-bold fst-italic"},cD={class:"fw-bold"},uD={class:"fw-bold"},hD={class:"fw-bold"},dD={key:1},fD={class:"d-flex btn-container"};function pD(t,e,n,s,i,r){const o=Nt("RouterLink");return Ue(),ht("div",{class:pc({"d-flex":!0,"flex-wrap":!0,"mb-5":!0,"justify-content-evenly":!0,"flex-row-reverse":n.index%2!==0})},[V("div",rD,[V("img",{src:n.img_url,alt:"",class:"w-100 rounded rounded-5"},null,8,oD)]),V("div",aD,[n.limited?(Ue(),ht("h1",lD," today's limited offer ")):kh("",!0),V("h3",null,hn(n.title),1),V("p",null,hn(n.description),1),V("ul",null,[V("li",null,[Ge(" Produced in: "),V("span",cD,hn(n.produced_in),1)]),V("li",null,[Ge(" Production capacity: "),V("span",uD,hn(n.production_capacity),1),Ge(" tons/month ")]),V("li",null,[Ge(" Stock: "),V("span",hD,hn(n.product_stock),1),Ge(" tons ")])]),n.discount!=1?(Ue(),ht("h1",dD,"$ "+hn((n.price-n.price*(n.discount/100)).toFixed(2))+"/kg",1)):kh("",!0),V("div",fD,[de(o,{to:"/checkout",class:"btn btn-primary me-3"},{default:Lt(()=>[Ge(" Add to Cart ")]),_:1}),n.buy_now?(Ue(),mi(o,{key:0,to:"/checkout",class:"btn btn-secondary"},{default:Lt(()=>[Ge(" Buy Now ")]),_:1})):(Ue(),mi(o,{key:1,to:{name:"product",params:{productId:n.product_id}},class:"btn btn-primary"},{default:Lt(()=>[Ge(" Learn more ")]),_:1},8,["to"]))])])],2)}const aT=In(iD,[["render",pD],["__scopeId","data-v-9d047f7b"]]);var V_={};/**
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
 */const lT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const $=function(t,e){if(!t)throw Lr(e)},Lr=function(t){return new Error("Firebase Database ("+lT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const cT=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mD=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new _D;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _D extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uT=function(t){const e=cT(t);return Cc.encodeByteArray(e,!0)},Il=function(t){return uT(t).replace(/\./g,"")},Cl=function(t){try{return Cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gD(t){return hT(void 0,t)}function hT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yD(n)||(t[n]=hT(t[n],e[n]));return t}function yD(t){return t!=="__proto__"}/**
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
 */function vD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ED=()=>vD().__FIREBASE_DEFAULTS__,TD=()=>{if(typeof process>"u"||typeof V_>"u")return;const t=V_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cl(t[1]);return e&&JSON.parse(e)},Sf=()=>{try{return ED()||TD()||wD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},AD=t=>{var e,n;return(n=(e=Sf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bD=t=>{const e=AD(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},dT=()=>{var t;return(t=Sf())===null||t===void 0?void 0:t.config},ID=t=>{var e;return(e=Sf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Vo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function CD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Il(JSON.stringify(n)),Il(JSON.stringify(o)),""].join(".")}/**
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
 */function Hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Hn())}function SD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pT(){return lT.NODE_ADMIN===!0}function mT(){try{return typeof indexedDB=="object"}catch{return!1}}function RD(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const ND="FirebaseError";class as extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ND,Object.setPrototypeOf(this,as.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?PD(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new as(i,a,s)}}function PD(t,e){return t.replace(OD,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const OD=/\{\$([^}]+)}/g;/**
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
 */function Fo(t){return JSON.parse(t)}function ut(t){return JSON.stringify(t)}/**
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
 */const _T=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Fo(Cl(r[0])||""),n=Fo(Cl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},kD=function(t){const e=_T(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},DD=function(t){const e=_T(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ls(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function F_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sl(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Fh(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($_(r)&&$_(o)){if(!Fh(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $_(t){return t!==null&&typeof t=="object"}/**
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
 */function Nf(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class xD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function LD(t,e){const n=new MD(t,e);return n.subscribe.bind(n)}class MD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");VD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Lu),i.error===void 0&&(i.error=Lu),i.complete===void 0&&(i.complete=Lu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lu(){}function FD(t,e){return`${t} failed: ${e} argument `}/**
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
 */const $D=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,$(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Hs(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ys="[DEFAULT]";/**
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
 */class UD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HD(e))try{this.getOrInitializeService({instanceIdentifier:Ys})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ys){return this.instances.has(e)}getOptions(e=Ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:BD(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ys){return this.component?this.component.multipleInstances?e:Ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BD(t){return t===Ys?void 0:t}function HD(t){return t.instantiationMode==="EAGER"}/**
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
 */class jD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const qD={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},WD=he.INFO,KD={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},zD=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=KD[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=WD,this._logHandler=zD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const GD=(t,e)=>e.some(n=>t instanceof n);let U_,B_;function YD(){return U_||(U_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QD(){return B_||(B_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gT=new WeakMap,$h=new WeakMap,yT=new WeakMap,Mu=new WeakMap,Pf=new WeakMap;function XD(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(bs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gT.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function JD(t){if($h.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$h.set(t,e)}let Uh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZD(t){Uh=t(Uh)}function ex(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vu(this),e,...n);return yT.set(s,e.sort?e.sort():[e]),bs(s)}:QD().includes(t)?function(...e){return t.apply(Vu(this),e),bs(gT.get(this))}:function(...e){return bs(t.apply(Vu(this),e))}}function tx(t){return typeof t=="function"?ex(t):(t instanceof IDBTransaction&&JD(t),GD(t,YD())?new Proxy(t,Uh):t)}function bs(t){if(t instanceof IDBRequest)return XD(t);if(Mu.has(t))return Mu.get(t);const e=tx(t);return e!==t&&(Mu.set(t,e),Pf.set(e,t)),e}const Vu=t=>Pf.get(t);function nx(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=bs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(bs(o.result),l.oldVersion,l.newVersion,bs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sx=["get","getKey","getAll","getAllKeys","count"],ix=["put","add","delete","clear"],Fu=new Map;function H_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fu.get(e))return Fu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ix.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||sx.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Fu.set(e,r),r}ZD(t=>({...t,get:(e,n,s)=>H_(e,n)||t.get(e,n,s),has:(e,n)=>!!H_(e,n)||t.has(e,n)}));/**
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
 */class rx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ox(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ox(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bh="@firebase/app",j_="0.9.25";/**
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
 */const _i=new la("@firebase/app"),ax="@firebase/app-compat",lx="@firebase/analytics-compat",cx="@firebase/analytics",ux="@firebase/app-check-compat",hx="@firebase/app-check",dx="@firebase/auth",fx="@firebase/auth-compat",px="@firebase/database",mx="@firebase/database-compat",_x="@firebase/functions",gx="@firebase/functions-compat",yx="@firebase/installations",vx="@firebase/installations-compat",Ex="@firebase/messaging",Tx="@firebase/messaging-compat",wx="@firebase/performance",Ax="@firebase/performance-compat",bx="@firebase/remote-config",Ix="@firebase/remote-config-compat",Cx="@firebase/storage",Sx="@firebase/storage-compat",Rx="@firebase/firestore",Nx="@firebase/firestore-compat",Px="firebase",Ox="10.7.1";/**
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
 */const Hh="[DEFAULT]",kx={[Bh]:"fire-core",[ax]:"fire-core-compat",[cx]:"fire-analytics",[lx]:"fire-analytics-compat",[hx]:"fire-app-check",[ux]:"fire-app-check-compat",[dx]:"fire-auth",[fx]:"fire-auth-compat",[px]:"fire-rtdb",[mx]:"fire-rtdb-compat",[_x]:"fire-fn",[gx]:"fire-fn-compat",[yx]:"fire-iid",[vx]:"fire-iid-compat",[Ex]:"fire-fcm",[Tx]:"fire-fcm-compat",[wx]:"fire-perf",[Ax]:"fire-perf-compat",[bx]:"fire-rc",[Ix]:"fire-rc-compat",[Cx]:"fire-gcs",[Sx]:"fire-gcs-compat",[Rx]:"fire-fst",[Nx]:"fire-fst-compat","fire-js":"fire-js",[Px]:"fire-js-all"};/**
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
 */const Rl=new Map,jh=new Map;function Dx(t,e){try{t.container.addComponent(e)}catch(n){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jn(t){const e=t.name;if(jh.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,t);for(const n of Rl.values())Dx(n,t);return!0}function xx(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Lx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Is=new Mr("app","Firebase",Lx);/**
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
 */class Mx{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=Ox;function vT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hh,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Is.create("bad-app-name",{appName:String(i)});if(n||(n=dT()),!n)throw Is.create("no-options");const r=Rl.get(i);if(r){if(Fh(n,r.options)&&Fh(s,r.config))return r;throw Is.create("duplicate-app",{appName:i})}const o=new jD(i);for(const l of jh.values())o.addComponent(l);const a=new Mx(n,s,o);return Rl.set(i,a),a}function ET(t=Hh){const e=Rl.get(t);if(!e&&t===Hh&&dT())return vT();if(!e)throw Is.create("no-app",{appName:t});return e}function jt(t,e,n){var s;let i=(s=kx[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(a.join(" "));return}jn(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Vx="firebase-heartbeat-database",Fx=1,$o="firebase-heartbeat-store";let $u=null;function TT(){return $u||($u=nx(Vx,Fx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($o)}}}).catch(t=>{throw Is.create("idb-open",{originalErrorMessage:t.message})})),$u}async function $x(t){try{return await(await TT()).transaction($o).objectStore($o).get(wT(t))}catch(e){if(e instanceof as)_i.warn(e.message);else{const n=Is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_i.warn(n.message)}}}async function q_(t,e){try{const s=(await TT()).transaction($o,"readwrite");await s.objectStore($o).put(e,wT(t)),await s.done}catch(n){if(n instanceof as)_i.warn(n.message);else{const s=Is.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_i.warn(s.message)}}}function wT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ux=1024,Bx=30*24*60*60*1e3;class Hx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qx(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=W_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Bx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=W_(),{heartbeatsToSend:s,unsentEntries:i}=jx(this._heartbeatsCache.heartbeats),r=Il(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function W_(){return new Date().toISOString().substring(0,10)}function jx(t,e=Ux){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),K_(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),K_(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class qx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mT()?RD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $x(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return q_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return q_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function K_(t){return Il(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wx(t){jn(new Tn("platform-logger",e=>new rx(e),"PRIVATE")),jn(new Tn("heartbeat",e=>new Hx(e),"PRIVATE")),jt(Bh,j_,t),jt(Bh,j_,"esm2017"),jt("fire-js","")}Wx("");function AT(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function bT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kx=bT,IT=new Mr("auth","Firebase",bT());/**
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
 */const Nl=new la("@firebase/auth");function zx(t,...e){Nl.logLevel<=he.WARN&&Nl.warn(`Auth (${Vr}): ${t}`,...e)}function cl(t,...e){Nl.logLevel<=he.ERROR&&Nl.error(`Auth (${Vr}): ${t}`,...e)}/**
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
 */function z_(t,...e){throw Of(t,...e)}function CT(t,...e){return Of(t,...e)}function Gx(t,e,n){const s=Object.assign(Object.assign({},Kx()),{[e]:n});return new Mr("auth","Firebase",s).create(e,{appName:t.name})}function Of(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return IT.create(t,...e)}function Re(t,e,...n){if(!t)throw Of(e,...n)}function Eo(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cl(e),new Error(e)}function Pl(t,e){t||Eo(e)}function Yx(){return G_()==="http:"||G_()==="https:"}function G_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Qx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yx()||SD()||"connection"in navigator)?navigator.onLine:!0}function Xx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pl(n>e,"Short delay should be less than long delay!"),this.isMobile=Rf()||fT()}get(){return Qx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jx(t,e){Pl(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ST{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Eo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Eo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Eo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Zx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eL=new ca(3e4,6e4);function RT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rc(t,e,n,s,i={}){return NT(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Nf(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ST.fetch()(PT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function NT(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Zx),e);try{const i=new tL(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ha(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gx(t,u,c);z_(t,u)}}catch(i){if(i instanceof as)throw i;z_(t,"network-request-failed",{message:String(i)})}}function PT(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Jx(t.config,i):`${t.config.apiScheme}://${i}`}class tL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(CT(this.auth,"network-request-failed")),eL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=CT(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function nL(t,e){return Rc(t,"POST","/v1/accounts:delete",e)}async function sL(t,e){return Rc(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function To(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iL(t,e=!1){const n=Hs(t),s=await n.getIdToken(e),i=OT(s);Re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:To(Uu(i.auth_time)),issuedAtTime:To(Uu(i.iat)),expirationTime:To(Uu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Uu(t){return Number(t)*1e3}function OT(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return cl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cl(n);return i?JSON.parse(i):(cl("Failed to decode base64 JWT payload"),null)}catch(i){return cl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rL(t){const e=OT(t);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qh(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof as&&oL(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function oL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ol(t){var e;const n=t.auth,s=await t.getIdToken(),i=await qh(t,sL(n,{idToken:s}));Re(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?uL(r.providerUserInfo):[],a=cL(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new kT(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function lL(t){const e=Hs(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cL(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function uL(t){return t.map(e=>{var{providerId:n}=e,s=AT(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function hL(t,e){const n=await NT(t,{},async()=>{const s=Nf({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=PT(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ST.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dL(t,e){return Rc(t,"POST","/v2/accounts:revokeToken",RT(t,e))}/**
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
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await hL(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Uo;return s&&(Re(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Re(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return Eo("not implemented")}}/**
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
 */function ps(t,e){Re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=AT(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new kT(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await qh(this,this.stsTokenManager.getToken(this.auth,e));return Re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iL(this,e)}reload(){return lL(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qh(this,nL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:T,isAnonymous:x,providerData:R,stsTokenManager:W}=n;Re(w&&W,e,"internal-error");const M=Uo.fromJSON(this.name,W);Re(typeof w=="string",e,"internal-error"),ps(h,e.name),ps(d,e.name),Re(typeof T=="boolean",e,"internal-error"),Re(typeof x=="boolean",e,"internal-error"),ps(f,e.name),ps(_,e.name),ps(g,e.name),ps(y,e.name),ps(E,e.name),ps(C,e.name);const Z=new er({uid:w,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:x,photoURL:_,phoneNumber:f,tenantId:g,stsTokenManager:M,createdAt:E,lastLoginAt:C});return R&&Array.isArray(R)&&(Z.providerData=R.map(Y=>Object.assign({},Y))),y&&(Z._redirectEventId=y),Z}static async _fromIdTokenResponse(e,n,s=!1){const i=new Uo;i.updateFromServerResponse(n);const r=new er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ol(r),r}}/**
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
 */const Y_=new Map;function ti(t){Pl(t instanceof Function,"Expected a class definition");let e=Y_.get(t);return e?(Pl(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Y_.set(t,e),e)}/**
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
 */class DT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}DT.type="NONE";const Q_=DT;/**
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
 */function Bu(t,e,n){return`firebase:${t}:${e}:${n}`}class tr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Bu(this.userKey,i.apiKey,r),this.fullPersistenceKey=Bu("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new tr(ti(Q_),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ti(Q_);const o=Bu(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=er._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new tr(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new tr(r,e,s))}}/**
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
 */function X_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_L(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fL(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yL(e))return"Blackberry";if(vL(e))return"Webos";if(pL(e))return"Safari";if((e.includes("chrome/")||mL(e))&&!e.includes("edge/"))return"Chrome";if(gL(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function fL(t=Hn()){return/firefox\//i.test(t)}function pL(t=Hn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mL(t=Hn()){return/crios\//i.test(t)}function _L(t=Hn()){return/iemobile/i.test(t)}function gL(t=Hn()){return/android/i.test(t)}function yL(t=Hn()){return/blackberry/i.test(t)}function vL(t=Hn()){return/webos/i.test(t)}/**
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
 */function xT(t,e=[]){let n;switch(t){case"Browser":n=X_(Hn());break;case"Worker":n=`${X_(Hn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${s}`}/**
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
 */class EL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function TL(t,e={}){return Rc(t,"GET","/v2/passwordPolicy",RT(t,e))}/**
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
 */const wL=6;class AL{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class bL{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new J_(this),this.idTokenSubscription=new J_(this),this.beforeStateQueue=new EL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=IT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ti(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await tr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Hs(e):null;return n&&Re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ti(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TL(this),n=new AL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await dL(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ti(e)||this._popupRedirectResolver;Re(n,this,"argument-error"),this.redirectPersistenceManager=await tr.create(this,[ti(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function IL(t){return Hs(t)}class J_{constructor(e){this.auth=e,this.observer=null,this.addObserver=LD(n=>this.observer=n)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function CL(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ti);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new ca(3e4,6e4);/**
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
 */new ca(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new ca(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new ca(5e3,15e3);var Z_="@firebase/auth",eg="1.5.1";/**
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
 */class SL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function NL(t){jn(new Tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Re(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xT(t)},c=new bL(s,i,r,l);return CL(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),jn(new Tn("auth-internal",e=>{const n=IL(e.getProvider("auth").getImmediate());return(s=>new SL(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Z_,eg,RL(t)),jt(Z_,eg,"esm2017")}/**
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
 */const PL=5*60;ID("authIdTokenMaxAge");NL("Browser");/**
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
 */const OL=new Map,kL={activated:!1,tokenObservers:[]};function wn(t){return OL.get(t)||Object.assign({},kL)}const tg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class DL{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Vo,this.pending.promise.catch(n=>{}),await xL(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Vo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function xL(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const LL={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},kl=new Mr("appCheck","AppCheck",LL);function LT(t){if(!wn(t).activated)throw kl.create("use-before-activation",{appName:t.name})}/**
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
 */const ML="firebase-app-check-database",VL=1,Wh="firebase-app-check-store";let ja=null;function FL(){return ja||(ja=new Promise((t,e)=>{try{const n=indexedDB.open(ML,VL);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(kl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Wh,{keyPath:"compositeKey"})}}}catch(n){e(kl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ja)}function $L(t,e){return UL(BL(t),e)}async function UL(t,e){const s=(await FL()).transaction(Wh,"readwrite"),r=s.objectStore(Wh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(kl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function BL(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Kh=new la("@firebase/app-check");function ng(t,e){return mT()?$L(t,e).catch(n=>{Kh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const HL={error:"UNKNOWN_ERROR"};function jL(t){return Cc.encodeString(JSON.stringify(t),!1)}async function zh(t,e=!1){const n=t.app;LT(n);const s=wn(n);let i=s.token,r;if(i&&!ro(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(ro(l)?i=l:await ng(n,void 0))}if(!e&&i&&ro(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await wn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Kh.warn(l.message):Kh.error(l),r=l}let a;return i?r?ro(i)?a={token:i.token,internalError:r}:a=ig(r):(a={token:i.token},s.token=i,await ng(n,i)):a=ig(r),o&&zL(n,a),a}async function qL(t){const e=t.app;LT(e);const{provider:n}=wn(e);{const{token:s}=await n.getToken();return{token:s}}}function WL(t,e,n,s){const{app:i}=t,r=wn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&ro(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),sg(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>sg(t))}function MT(t,e){const n=wn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function sg(t){const{app:e}=t,n=wn(e);let s=n.tokenRefresher;s||(s=KL(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function KL(t){const{app:e}=t;return new DL(async()=>{const n=wn(e);let s;if(n.token?s=await zh(t,!0):s=await zh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=wn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},tg.RETRIAL_MIN_WAIT,tg.RETRIAL_MAX_WAIT)}function zL(t,e){const n=wn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function ro(t){return t.expireTimeMillis-Date.now()>0}function ig(t){return{token:jL(HL),error:t}}/**
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
 */class GL{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=wn(this.app);for(const n of e)MT(this.app,n.next);return Promise.resolve()}}function YL(t,e){return new GL(t,e)}function QL(t){return{getToken:e=>zh(t,e),getLimitedUseToken:()=>qL(t),addTokenListener:e=>WL(t,"INTERNAL",e),removeTokenListener:e=>MT(t.app,e)}}const XL="@firebase/app-check",JL="0.8.1",ZL="app-check",rg="app-check-internal";function e1(){jn(new Tn(ZL,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return YL(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(rg).initialize()})),jn(new Tn(rg,t=>{const e=t.getProvider("app-check").getImmediate();return QL(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),jt(XL,JL)}e1();var t1="firebase",n1="10.7.1";/**
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
 */jt(t1,n1,"app");const s1=Symbol("firebaseApp");function VT(t){return Ef()&&sn(s1,null)||ET(t)}const kn=()=>{};function kf(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function i1(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ri(t){return!!t&&typeof t=="object"}const r1=Object.prototype;function o1(t){return Ri(t)&&Object.getPrototypeOf(t)===r1}function Df(t){return Ri(t)&&t.type==="document"}function a1(t){return Ri(t)&&t.type==="collection"}function l1(t){return Df(t)||a1(t)}function c1(t){return Ri(t)&&t.type==="query"}function u1(t){return Ri(t)&&"ref"in t}function h1(t){return Ri(t)&&typeof t.bucket=="string"}function d1(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const f1=Symbol.for("v-scx");function p1(){return!!sn(f1,0)}var og={};const ag="@firebase/database",lg="1.0.2";/**
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
 */let FT="";function m1(t){FT=t}/**
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
 */class _1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class g1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ls(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const $T=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _1(e)}}catch{}return new g1},ni=$T("localStorage"),Gh=$T("sessionStorage");/**
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
 */const nr=new la("@firebase/database"),y1=function(){let t=1;return function(){return t++}}(),UT=function(t){const e=$D(t),n=new xD;n.update(e);const s=n.digest();return Cc.encodeByteArray(s)},ua=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ua.apply(null,s):typeof s=="object"?e+=ut(s):e+=s,e+=" "}return e};let ui=null,cg=!0;const v1=function(t,e){$(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(nr.logLevel=he.VERBOSE,ui=nr.log.bind(nr),e&&Gh.set("logging_enabled",!0)):typeof t=="function"?ui=t:(ui=null,Gh.remove("logging_enabled"))},_t=function(...t){if(cg===!0&&(cg=!1,ui===null&&Gh.get("logging_enabled")===!0&&v1(!0)),ui){const e=ua.apply(null,t);ui(e)}},ha=function(t){return function(...e){_t(t,...e)}},Yh=function(...t){const e="FIREBASE INTERNAL ERROR: "+ua(...t);nr.error(e)},gi=function(...t){const e=`FIREBASE FATAL ERROR: ${ua(...t)}`;throw nr.error(e),new Error(e)},qt=function(...t){const e="FIREBASE WARNING: "+ua(...t);nr.warn(e)},E1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},BT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},T1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vr="[MIN_NAME]",yi="[MAX_NAME]",Fr=function(t,e){if(t===e)return 0;if(t===vr||e===yi)return-1;if(e===vr||t===yi)return 1;{const n=ug(t),s=ug(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},w1=function(t,e){return t===e?0:t<e?-1:1},Xr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ut(e))},xf=function(t){if(typeof t!="object"||t===null)return ut(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ut(e[s]),n+=":",n+=xf(t[e[s]]);return n+="}",n},HT=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function an(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jT=function(t){$(!BT(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},A1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},b1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},I1=new RegExp("^-?(0*)\\d{1,10}$"),C1=-2147483648,S1=2147483647,ug=function(t){if(I1.test(t)){const e=Number(t);if(e>=C1&&e<=S1)return e}return null},da=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},R1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class N1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class P1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(e)}}class Qh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qh.OWNER="owner";/**
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
 */const Lf="5",qT="v",WT="s",KT="r",zT="f",GT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,YT="ls",QT="p",Xh="ac",XT="websocket",JT="long_polling";/**
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
 */class O1{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ni.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ni.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function k1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ZT(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let s;if(e===XT)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===JT)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);k1(t)&&(n.ns=t.namespace);const i=[];return an(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class D1{constructor(){this.counters_={}}incrementCounter(e,n=1){ls(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gD(this.counters_)}}/**
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
 */const Hu={},ju={};function Mf(t){const e=t.toString();return Hu[e]||(Hu[e]=new D1),Hu[e]}function x1(t,e){const n=t.toString();return ju[n]||(ju[n]=e()),ju[n]}/**
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
 */class L1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&da(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hg="start",M1="close",V1="pLPCommand",F1="pRTLPCB",ew="id",tw="pw",nw="ser",$1="cb",U1="seg",B1="ts",H1="d",j1="dframe",sw=1870,iw=30,q1=sw-iw,W1=25e3,K1=3e4;class Ki{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ha(e),this.stats_=Mf(n),this.urlFn=l=>(this.appCheckToken&&(l[Xh]=this.appCheckToken),ZT(n,JT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new L1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(K1)),T1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hg)this.id=a,this.password=l;else if(o===M1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[hg]="t",s[nw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[$1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[qT]=Lf,this.transportSessionId&&(s[WT]=this.transportSessionId),this.lastSessionId&&(s[YT]=this.lastSessionId),this.applicationId&&(s[QT]=this.applicationId),this.appCheckToken&&(s[Xh]=this.appCheckToken),typeof location<"u"&&location.hostname&&GT.test(location.hostname)&&(s[KT]=zT);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ki.forceAllow_=!0}static forceDisallow(){Ki.forceDisallow_=!0}static isAvailable(){return Ki.forceAllow_?!0:!Ki.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!A1()&&!b1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=uT(n),i=HT(s,q1);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[j1]="t",s[ew]=e,s[tw]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=y1(),window[V1+this.uniqueCallbackIdentifier]=e,window[F1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ew]=this.myID,e[tw]=this.myPW,e[nw]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iw+s.length<=sw;){const o=this.pendingSegs.shift();s=s+"&"+U1+i+"="+o.seg+"&"+B1+i+"="+o.ts+"&"+H1+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(W1)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const z1=16384,G1=45e3;let Dl=null;typeof MozWebSocket<"u"?Dl=MozWebSocket:typeof WebSocket<"u"&&(Dl=WebSocket);class fn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ha(this.connId),this.stats_=Mf(n),this.connURL=fn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[qT]=Lf,typeof location<"u"&&location.hostname&&GT.test(location.hostname)&&(o[KT]=zT),n&&(o[WT]=n),s&&(o[YT]=s),i&&(o[Xh]=i),r&&(o[QT]=r),ZT(e,XT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ni.set("previous_websocket_failure",!0);try{let s;pT(),this.mySock=new Dl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Dl!==null&&!fn.forceDisallow_}static previouslyFailed(){return ni.isInMemoryStorage||ni.get("previous_websocket_failure")===!0}markConnectionHealthy(){ni.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Fo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=HT(n,z1);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(G1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fn.responsesRequiredToBeHealthy=2;fn.healthyTimeout=3e4;/**
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
 */class Bo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ki,fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=fn&&fn.isAvailable();let s=n&&!fn.previouslyFailed();if(e.webSocketOnly&&(n||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[fn];else{const i=this.transports_=[];for(const r of Bo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Bo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bo.globalTransportInitialized_=!1;/**
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
 */const Y1=6e4,Q1=5e3,X1=10*1024,J1=100*1024,qu="t",dg="d",Z1="s",fg="r",eM="e",pg="o",mg="a",_g="n",gg="p",tM="h";class nM{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ha("c:"+this.id+":"),this.transportManager_=new Bo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>J1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>X1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qu in e){const n=e[qu];n===mg?this.upgradeIfSecondaryHealthy_():n===fg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===pg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Xr("t",e),s=Xr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_g,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Xr("t",e),s=Xr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Xr(qu,e);if(dg in e){const s=e[dg];if(n===tM){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_g){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Z1?this.onConnectionShutdown_(s):n===fg?this.onReset_(s):n===eM?Yh("Server Error: "+s):n===pg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lf!==s&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),wo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Y1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Q1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ni.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class rw{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ow{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class xl extends ow{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xl}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yg=32,vg=768;class Me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Pe(){return new Me("")}function ye(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ls(t){return t.pieces_.length-t.pieceNum_}function De(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Me(t.pieces_,e)}function aw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function lw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function cw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Me(e,0)}function nt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Me(n,0)}function me(t){return t.pieceNum_>=t.pieces_.length}function en(t,e){const n=ye(t),s=ye(e);if(n===null)return e;if(n===s)return en(De(t),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uw(t,e){if(Ls(t)!==Ls(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function mn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ls(t)>Ls(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class iM{constructor(e,n){this.errorPrefix_=n,this.parts_=lw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Sc(this.parts_[s]);hw(this)}}function rM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sc(e),hw(t)}function oM(t){const e=t.parts_.pop();t.byteLength_-=Sc(e),t.parts_.length>0&&(t.byteLength_-=1)}function hw(t){if(t.byteLength_>vg)throw new Error(t.errorPrefix_+"has a key path longer than "+vg+" bytes ("+t.byteLength_+").");if(t.parts_.length>yg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yg+") or object contains a cycle "+Qs(t))}function Qs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ff extends ow{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ff}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Jr=1e3,aM=60*5*1e3,Eg=30*1e3,lM=1.3,cM=3e4,uM="server_kill",Tg=3;class ts extends rw{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ts.nextPersistentConnectionId_++,this.log_=ha("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Jr,this.maxReconnectDelay_=aM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!pT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ff.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ut(r)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Vo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ts.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ls(e,"w")){const s=yr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||DD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Eg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=kD(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ut(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yh("Unrecognized action received from server: "+ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cM&&(this.reconnectDelay_=Jr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ts.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new nM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{qt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(uM)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qt(h),l())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],F_(this.interruptReasons_)&&(this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>xf(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Me(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tg&&(this.reconnectDelay_=Eg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+FT.replace(/\./g,"-")]=1,Rf()?e["framework.cordova"]=1:fT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xl.getInstance().currentlyOnline();return F_(this.interruptReasons_)&&e}}ts.nextPersistentConnectionId_=0;ts.nextConnectionId_=0;/**
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
 */class ve{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ve(e,n)}}/**
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
 */class Nc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ve(vr,e),i=new ve(vr,n);return this.compare(s,i)!==0}minPost(){return ve.MIN}}/**
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
 */let qa;class dw extends Nc{static get __EMPTY_NODE(){return qa}static set __EMPTY_NODE(e){qa=e}compare(e,n){return Fr(e.name,n.name)}isDefinedOn(e){throw Lr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve(yi,qa)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,qa)}toString(){return".key"}}const sr=new dw;/**
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
 */let Wa=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ht=class oo{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??oo.RED,this.left=i??Dn.EMPTY_NODE,this.right=r??Dn.EMPTY_NODE}copy(e,n,s,i,r){return new oo(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Dn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,oo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,oo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ht.RED=!0;Ht.BLACK=!1;class hM{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Dn=class ul{constructor(e,n=ul.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ul(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new ul(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Wa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Wa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Wa(this.root_,null,this.comparator_,!0,e)}};Dn.EMPTY_NODE=new hM;/**
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
 */function dM(t,e){return Fr(t.name,e.name)}function $f(t,e){return Fr(t,e)}/**
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
 */let Jh;function fM(t){Jh=t}const fw=function(t){return typeof t=="number"?"number:"+jT(t):"string:"+t},pw=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ls(e,".sv"),"Priority must be a string or number.")}else $(t===Jh||t.isEmpty(),"priority of unexpected type.");$(t===Jh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wg;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pw(this.priorityNode_)}static set __childrenNodeConstructor(e){wg=e}static get __childrenNodeConstructor(){return wg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:ye(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ye(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:($(s!==".priority"||Ls(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jT(this.value_):e+=this.value_,this.lazyHash_=UT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=et.VALUE_TYPE_ORDER.indexOf(n),r=et.VALUE_TYPE_ORDER.indexOf(s);return $(i>=0,"Unknown leaf type: "+n),$(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let mw,_w;function pM(t){mw=t}function mM(t){_w=t}class _M extends Nc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Fr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(yi,new et("[PRIORITY-POST]",_w))}makePost(e,n){const s=mw(e);return new ve(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const Et=new _M;/**
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
 */const gM=Math.log(2);class yM{constructor(e){const n=r=>parseInt(Math.log(r)/gM,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ll=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ht(d,h.node,Ht.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=i(l,f),g=i(f+1,c);return h=t[f],d=n?n(h):h,new Ht(d,h.node,Ht.BLACK,_,g)}},r=function(l){let c=null,u=null,h=t.length;const d=function(_,g){const y=h-_,E=h;h-=_;const C=i(y+1,E),w=t[y],T=n?n(w):w;f(new Ht(T,w.node,g,null,C))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const g=l.nextBitIsOne(),y=Math.pow(2,l.count-(_+1));g?d(y,Ht.BLACK):(d(y,Ht.BLACK),d(y,Ht.RED))}return u},o=new yM(t.length),a=r(o);return new Dn(s||e,a)};/**
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
 */let Wu;const Li={};class Qn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(Li&&Et,"ChildrenNode.ts has not been loaded"),Wu=Wu||new Qn({".priority":Li},{".priority":Et}),Wu}get(e){const n=yr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Dn?n:null}hasIndex(e){return ls(this.indexSet_,e.toString())}addIndex(e,n){$(e!==sr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ve.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ll(s,e.getCompare()):a=Li;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Qn(u,c)}addToIndexes(e,n){const s=Sl(this.indexes_,(i,r)=>{const o=yr(this.indexSet_,r);if($(o,"Missing index implementation for "+r),i===Li)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ve.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ll(a,o.getCompare())}else return Li;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ve(e.name,a))),l.insert(e,e.node)}});return new Qn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Sl(this.indexes_,i=>{if(i===Li)return i;{const r=n.get(e.name);return r?i.remove(new ve(e.name,r)):i}});return new Qn(s,this.indexSet_)}}/**
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
 */let Zr;class Ce{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&pw(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zr||(Zr=new Ce(new Dn($f),null,Qn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zr}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zr:n}}getChild(e){const n=ye(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ve(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Zr:this.priorityNode_;return new Ce(i,o,r)}}updateChild(e,n){const s=ye(e);if(s===null)return n;{$(ye(e)!==".priority"||Ls(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(De(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Et,(o,a)=>{n[o]=a.val(e),s++,r&&Ce.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fw(this.getPriority().val())+":"),this.forEachChild(Et,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":UT(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ve(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ve.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fa?-1:0}withIndex(e){if(e===sr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===sr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Et),i=n.getIterator(Et);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===sr?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vM extends Ce{constructor(){super(new Dn($f),Ce.EMPTY_NODE,Qn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const fa=new vM;Object.defineProperties(ve,{MIN:{value:new ve(vr,Ce.EMPTY_NODE)},MAX:{value:new ve(yi,fa)}});dw.__EMPTY_NODE=Ce.EMPTY_NODE;et.__childrenNodeConstructor=Ce;fM(fa);mM(fa);/**
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
 */const EM=!0;function gt(t,e=null){if(t===null)return Ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new et(n,gt(e))}if(!(t instanceof Array)&&EM){const n=[];let s=!1;if(an(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=gt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ve(o,l)))}}),n.length===0)return Ce.EMPTY_NODE;const r=Ll(n,dM,o=>o.name,$f);if(s){const o=Ll(n,Et.getCompare());return new Ce(r,gt(e),new Qn({".priority":o},{".priority":Et}))}else return new Ce(r,gt(e),Qn.Default)}else{let n=Ce.EMPTY_NODE;return an(t,(s,i)=>{if(ls(t,s)&&s.substring(0,1)!=="."){const r=gt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(gt(e))}}pM(gt);/**
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
 */class TM extends Nc{constructor(e){super(),this.indexPath_=e,$(!me(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Fr(e.name,n.name):r}makePost(e,n){const s=gt(e),i=Ce.EMPTY_NODE.updateChild(this.indexPath_,s);return new ve(n,i)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,fa);return new ve(yi,e)}toString(){return lw(this.indexPath_,0).join("/")}}/**
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
 */class wM extends Nc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Fr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const s=gt(e);return new ve(n,s)}toString(){return".value"}}const AM=new wM;/**
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
 */function bM(t){return{type:"value",snapshotNode:t}}function IM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function CM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ag(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function SM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Uf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vr}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const e=new Uf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Et?n="$priority":t.index_===AM?n="$value":t.index_===sr?n="$key":($(t.index_ instanceof TM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ut(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ut(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ut(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ut(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ut(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ig(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Et&&(e.i=t.index_.toString()),e}/**
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
 */class Ml extends rw{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ha("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ml.getListenId_(e,s),a={};this.listens_[o]=a;const l=bg(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),yr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ml.getListenId_(e,n);delete this.listens_[s]}get(e){const n=bg(e._queryParams),s=e._path.toString(),i=new Vo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Nf(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fo(a.responseText)}catch{qt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&qt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class RM{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Vl(){return{value:null,children:new Map}}function gw(t,e,n){if(me(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ye(e);t.children.has(s)||t.children.set(s,Vl());const i=t.children.get(s);e=De(e),gw(i,e,n)}}function Zh(t,e,n){t.value!==null?n(e,t.value):NM(t,(s,i)=>{const r=new Me(e.toString()+"/"+s);Zh(i,r,n)})}function NM(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class PM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&an(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Cg=10*1e3,OM=30*1e3,kM=5*60*1e3;class DM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PM(e);const s=Cg+(OM-Cg)*Math.random();wo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;an(e,(i,r)=>{r>0&&ls(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),wo(this.reportStats_.bind(this),Math.floor(Math.random()*2*kM))}}/**
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
 */var xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xn||(xn={}));function yw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ew(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Fl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=xn.ACK_USER_WRITE,this.source=yw()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Me(e));return new Fl(Pe(),n,this.revert)}}else return $(ye(this.path)===e,"operationForChild called for unrelated child."),new Fl(De(this.path),this.affectedTree,this.revert)}}/**
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
 */class vi{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=xn.OVERWRITE}operationForChild(e){return me(this.path)?new vi(this.source,Pe(),this.snap.getImmediateChild(e)):new vi(this.source,De(this.path),this.snap)}}/**
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
 */class Ho{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=xn.MERGE}operationForChild(e){if(me(this.path)){const n=this.children.subtree(new Me(e));return n.isEmpty()?null:n.value?new vi(this.source,Pe(),n.value):new Ho(this.source,Pe(),n)}else return $(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ho(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Bf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const n=ye(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function xM(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(SM(o.childName,o.snapshotNode))}),eo(t,i,"child_removed",e,s,n),eo(t,i,"child_added",e,s,n),eo(t,i,"child_moved",r,s,n),eo(t,i,"child_changed",e,s,n),eo(t,i,"value",e,s,n),i}function eo(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>MM(t,a,l)),o.forEach(a=>{const l=LM(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function LM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function MM(t,e,n){if(e.childName==null||n.childName==null)throw Lr("Should only compare child_ events.");const s=new ve(e.childName,e.snapshotNode),i=new ve(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Tw(t,e){return{eventCache:t,serverCache:e}}function Ao(t,e,n,s){return Tw(new Bf(e,n,s),t.serverCache)}function ww(t,e,n,s){return Tw(t.eventCache,new Bf(e,n,s))}function ed(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ei(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ku;const VM=()=>(Ku||(Ku=new Dn(w1)),Ku);class ke{constructor(e,n=VM()){this.value=e,this.children=n}static fromObject(e){let n=new ke(null);return an(e,(s,i)=>{n=n.set(new Me(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Pe(),value:this.value};if(me(e))return null;{const s=ye(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(De(e),n);return r!=null?{path:nt(new Me(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const n=ye(e),s=this.children.get(n);return s!==null?s.subtree(De(e)):new ke(null)}}set(e,n){if(me(e))return new ke(n,this.children);{const s=ye(e),r=(this.children.get(s)||new ke(null)).set(De(e),n),o=this.children.insert(s,r);return new ke(this.value,o)}}remove(e){if(me(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=ye(e),s=this.children.get(n);if(s){const i=s.remove(De(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ke(null):new ke(this.value,r)}else return this}}get(e){if(me(e))return this.value;{const n=ye(e),s=this.children.get(n);return s?s.get(De(e)):null}}setTree(e,n){if(me(e))return n;{const s=ye(e),r=(this.children.get(s)||new ke(null)).setTree(De(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ke(this.value,o)}}fold(e){return this.fold_(Pe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(nt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Pe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(me(e))return null;{const r=ye(e),o=this.children.get(r);return o?o.findOnPath_(De(e),nt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Pe(),n)}foreachOnPath_(e,n,s){if(me(e))return this;{this.value&&s(n,this.value);const i=ye(e),r=this.children.get(i);return r?r.foreachOnPath_(De(e),nt(n,i),s):new ke(null)}}foreach(e){this.foreach_(Pe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(nt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new ke(null))}}function bo(t,e,n){if(me(e))return new yn(new ke(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=en(i,e);return r=r.updateChild(o,n),new yn(t.writeTree_.set(i,r))}else{const i=new ke(n),r=t.writeTree_.setTree(e,i);return new yn(r)}}}function Sg(t,e,n){let s=t;return an(n,(i,r)=>{s=bo(s,nt(e,i),r)}),s}function Rg(t,e){if(me(e))return yn.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new yn(n)}}function td(t,e){return Ni(t,e)!=null}function Ni(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(en(n.path,e)):null}function Ng(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Et,(s,i)=>{e.push(new ve(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ve(s,i.value))}),e}function Cs(t,e){if(me(e))return t;{const n=Ni(t,e);return n!=null?new yn(new ke(n)):new yn(t.writeTree_.subtree(e))}}function nd(t){return t.writeTree_.isEmpty()}function Er(t,e){return Aw(Pe(),t.writeTree_,e)}function Aw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?($(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Aw(nt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(nt(t,".priority"),s)),n}}/**
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
 */function bw(t,e){return Nw(e,t)}function FM(t,e,n,s,i){$(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=bo(t.visibleWrites,e,n)),t.lastWriteId=s}function $M(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function UM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&BM(a,s.path)?i=!1:mn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return HM(t),!0;if(s.snap)t.visibleWrites=Rg(t.visibleWrites,s.path);else{const a=s.children;an(a,l=>{t.visibleWrites=Rg(t.visibleWrites,nt(s.path,l))})}return!0}else return!1}function BM(t,e){if(t.snap)return mn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mn(nt(t.path,n),e))return!0;return!1}function HM(t){t.visibleWrites=Iw(t.allWrites,jM,Pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jM(t){return t.visible}function Iw(t,e,n){let s=yn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)mn(n,o)?(a=en(n,o),s=bo(s,a,r.snap)):mn(o,n)&&(a=en(o,n),s=bo(s,Pe(),r.snap.getChild(a)));else if(r.children){if(mn(n,o))a=en(n,o),s=Sg(s,a,r.children);else if(mn(o,n))if(a=en(o,n),me(a))s=Sg(s,Pe(),r.children);else{const l=yr(r.children,ye(a));if(l){const c=l.getChild(De(a));s=bo(s,Pe(),c)}}}else throw Lr("WriteRecord should have .snap or .children")}}return s}function Cw(t,e,n,s,i){if(!s&&!i){const r=Ni(t.visibleWrites,e);if(r!=null)return r;{const o=Cs(t.visibleWrites,e);if(nd(o))return n;if(n==null&&!td(o,Pe()))return null;{const a=n||Ce.EMPTY_NODE;return Er(o,a)}}}else{const r=Cs(t.visibleWrites,e);if(!i&&nd(r))return n;if(!i&&n==null&&!td(r,Pe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(mn(c.path,e)||mn(e,c.path))},a=Iw(t.allWrites,o,e),l=n||Ce.EMPTY_NODE;return Er(a,l)}}}function qM(t,e,n){let s=Ce.EMPTY_NODE;const i=Ni(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Et,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Cs(t.visibleWrites,e);return n.forEachChild(Et,(o,a)=>{const l=Er(Cs(r,new Me(o)),a);s=s.updateImmediateChild(o,l)}),Ng(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Cs(t.visibleWrites,e);return Ng(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function WM(t,e,n,s,i){$(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=nt(e,n);if(td(t.visibleWrites,r))return null;{const o=Cs(t.visibleWrites,r);return nd(o)?i.getChild(n):Er(o,i.getChild(n))}}function KM(t,e,n,s){const i=nt(e,n),r=Ni(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Cs(t.visibleWrites,i);return Er(o,s.getNode().getImmediateChild(n))}else return null}function zM(t,e){return Ni(t.visibleWrites,e)}function GM(t,e,n,s,i,r,o){let a;const l=Cs(t.visibleWrites,e),c=Ni(l,Pe());if(c!=null)a=c;else if(n!=null)a=Er(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function YM(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function sd(t,e,n,s){return Cw(t.writeTree,t.treePath,e,n,s)}function Sw(t,e){return qM(t.writeTree,t.treePath,e)}function Pg(t,e,n,s){return WM(t.writeTree,t.treePath,e,n,s)}function $l(t,e){return zM(t.writeTree,nt(t.treePath,e))}function QM(t,e,n,s,i,r){return GM(t.writeTree,t.treePath,e,n,s,i,r)}function Hf(t,e,n){return KM(t.writeTree,t.treePath,e,n)}function Rw(t,e){return Nw(nt(t.treePath,e),t.writeTree)}function Nw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class XM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ag(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,CM(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,IM(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ag(s,e.snapshotNode,i.oldSnap));else throw Lr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class JM{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Pw=new JM;class jf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Bf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ei(this.viewCache_),r=QM(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function ZM(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function eV(t,e,n,s,i){const r=new XM;let o,a;if(n.type===xn.OVERWRITE){const c=n;c.source.fromUser?o=id(t,e,c.path,c.snap,s,i,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!me(c.path),o=Ul(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===xn.MERGE){const c=n;c.source.fromUser?o=nV(t,e,c.path,c.children,s,i,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=rd(t,e,c.path,c.children,s,i,a,r))}else if(n.type===xn.ACK_USER_WRITE){const c=n;c.revert?o=rV(t,e,c.path,s,i,r):o=sV(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===xn.LISTEN_COMPLETE)o=iV(t,e,n.path,s,r);else throw Lr("Unknown operation type: "+n.type);const l=r.getChanges();return tV(e,o,l),{viewCache:o,changes:l}}function tV(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ed(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(bM(ed(e)))}}function Ow(t,e,n,s,i,r){const o=e.eventCache;if($l(s,n)!=null)return e;{let a,l;if(me(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ei(e),u=c instanceof Ce?c:Ce.EMPTY_NODE,h=Sw(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=sd(s,Ei(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ye(n);if(c===".priority"){$(Ls(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Pg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=De(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Pg(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Hf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ao(e,a,o.isFullyInitialized()||me(n),t.filter.filtersNodes())}}function Ul(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(me(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ye(n);if(!l.isCompleteForPath(n)&&Ls(n)>1)return e;const _=De(n),y=l.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,_,Pw,null)}const h=ww(e,c,l.isFullyInitialized()||me(n),u.filtersNodes()),d=new jf(i,h,r);return Ow(t,h,n,i,d,a)}function id(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new jf(i,e,r);if(me(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ao(e,c,!0,t.filter.filtersNodes());else{const h=ye(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ao(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=De(n),f=a.getNode().getImmediateChild(h);let _;if(me(d))_=s;else{const g=u.getCompleteChild(h);g!=null?aw(d)===".priority"&&g.getChild(cw(d)).isEmpty()?_=g:_=g.updateChild(d,s):_=Ce.EMPTY_NODE}if(f.equals(_))l=e;else{const g=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=Ao(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Og(t,e){return t.eventCache.isCompleteForChild(e)}function nV(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=nt(n,l);Og(e,ye(u))&&(a=id(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=nt(n,l);Og(e,ye(u))||(a=id(t,a,u,c,i,r,o))}),a}function kg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function rd(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;me(n)?c=s:c=new ke(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=kg(t,f,d);l=Ul(t,l,new Me(h),_,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),g=kg(t,_,d);l=Ul(t,l,new Me(h),g,i,r,o,a)}}),l}function sV(t,e,n,s,i,r,o){if($l(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(me(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ul(t,e,n,l.getNode().getChild(n),i,r,a,o);if(me(n)){let c=new ke(null);return l.getNode().forEachChild(sr,(u,h)=>{c=c.set(new Me(u),h)}),rd(t,e,n,c,i,r,a,o)}else return e}else{let c=new ke(null);return s.foreach((u,h)=>{const d=nt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),rd(t,e,n,c,i,r,a,o)}}function iV(t,e,n,s,i){const r=e.serverCache,o=ww(e,r.getNode(),r.isFullyInitialized()||me(n),r.isFiltered());return Ow(t,o,n,s,Pw,i)}function rV(t,e,n,s,i,r){let o;if($l(s,n)!=null)return e;{const a=new jf(s,e,i),l=e.eventCache.getNode();let c;if(me(n)||ye(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=sd(s,Ei(e));else{const h=e.serverCache.getNode();$(h instanceof Ce,"serverChildren would be complete if leaf node"),u=Sw(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ye(n);let h=Hf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,De(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ce.EMPTY_NODE,De(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sd(s,Ei(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||$l(s,Pe())!=null,Ao(e,c,o,t.filter.filtersNodes())}}function oV(t,e){const n=Ei(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!me(e)&&!n.getImmediateChild(ye(e)).isEmpty())?n.getChild(e):null}function Dg(t,e,n,s){e.type===xn.MERGE&&e.source.queryId!==null&&($(Ei(t.viewCache_),"We should always have a full cache before handling merges"),$(ed(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=eV(t.processor_,i,e,n,s);return ZM(t.processor_,r.viewCache),$(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,aV(t,r.changes,r.viewCache.eventCache.getNode(),null)}function aV(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return xM(t.eventGenerator_,e,n,i)}/**
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
 */let xg;function lV(t){$(!xg,"__referenceConstructor has already been defined"),xg=t}function qf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return $(r!=null,"SyncTree gave us an op for an invalid query."),Dg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Dg(o,e,n,s));return r}}function Wf(t,e){let n=null;for(const s of t.views.values())n=n||oV(s,e);return n}/**
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
 */let Lg;function cV(t){$(!Lg,"__referenceConstructor has already been defined"),Lg=t}class Mg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=YM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uV(t,e,n,s,i){return FM(t.pendingWriteTree_,e,n,s,i),i?Oc(t,new vi(yw(),e,n)):[]}function zi(t,e,n=!1){const s=$M(t.pendingWriteTree_,e);if(UM(t.pendingWriteTree_,e)){let r=new ke(null);return s.snap!=null?r=r.set(Pe(),!0):an(s.children,o=>{r=r.set(new Me(o),!0)}),Oc(t,new Fl(s.path,r,n))}else return[]}function Pc(t,e,n){return Oc(t,new vi(vw(),e,n))}function hV(t,e,n){const s=ke.fromObject(n);return Oc(t,new Ho(vw(),e,s))}function dV(t,e,n,s){const i=Lw(t,s);if(i!=null){const r=Mw(i),o=r.path,a=r.queryId,l=en(o,e),c=new vi(Ew(a),l,n);return Vw(t,o,c)}else return[]}function fV(t,e,n,s){const i=Lw(t,s);if(i){const r=Mw(i),o=r.path,a=r.queryId,l=en(o,e),c=ke.fromObject(n),u=new Ho(Ew(a),l,c);return Vw(t,o,u)}else return[]}function kw(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=en(o,e),c=Wf(a,l);if(c)return c});return Cw(i,e,r,n,!0)}function Oc(t,e){return Dw(e,t.syncPointTree_,null,bw(t.pendingWriteTree_,Pe()))}function Dw(t,e,n,s){if(me(t.path))return xw(t,e,n,s);{const i=e.get(Pe());n==null&&i!=null&&(n=Wf(i,Pe()));let r=[];const o=ye(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Rw(s,o);r=r.concat(Dw(a,l,c,u))}return i&&(r=r.concat(qf(i,t,s,n))),r}}function xw(t,e,n,s){const i=e.get(Pe());n==null&&i!=null&&(n=Wf(i,Pe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Rw(s,o),u=t.operationForChild(o);u&&(r=r.concat(xw(u,a,l,c)))}),i&&(r=r.concat(qf(i,t,s,n))),r}function Lw(t,e){return t.tagToQueryMap.get(e)}function Mw(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Me(t.substr(0,e))}}function Vw(t,e,n){const s=t.syncPointTree_.get(e);$(s,"Missing sync point for query tag that we're tracking");const i=bw(t.pendingWriteTree_,e);return qf(s,n,i,null)}/**
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
 */class Kf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kf(n)}node(){return this.node_}}class zf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=nt(this.path_,e);return new zf(this.syncTree_,n)}node(){return kw(this.syncTree_,this.path_)}}const pV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vg=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _V(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},_V=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&$(!1,"Unexpected increment value: "+s);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},gV=function(t,e,n,s){return Gf(e,new zf(n,t),s)},yV=function(t,e,n){return Gf(t,new Kf(e),n)};function Gf(t,e,n){const s=t.getPriority().val(),i=Vg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Vg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new et(a,gt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new et(i))),o.forEachChild(Et,(a,l)=>{const c=Gf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Yf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Qf(t,e){let n=e instanceof Me?e:new Me(e),s=t,i=ye(n);for(;i!==null;){const r=yr(s.node.children,i)||{children:{},childCount:0};s=new Yf(i,s,r),n=De(n),i=ye(n)}return s}function $r(t){return t.node.value}function Fw(t,e){t.node.value=e,od(t)}function $w(t){return t.node.childCount>0}function vV(t){return $r(t)===void 0&&!$w(t)}function kc(t,e){an(t.node.children,(n,s)=>{e(new Yf(n,t,s))})}function Uw(t,e,n,s){n&&!s&&e(t),kc(t,i=>{Uw(i,e,!0,s)}),n&&s&&e(t)}function EV(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function pa(t){return new Me(t.parent===null?t.name:pa(t.parent)+"/"+t.name)}function od(t){t.parent!==null&&TV(t.parent,t.name,t)}function TV(t,e,n){const s=vV(n),i=ls(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,od(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,od(t))}/**
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
 */const wV=/[\[\].#$\/\u0000-\u001F\u007F]/,AV=/[\[\].#$\u0000-\u001F\u007F]/,zu=10*1024*1024,Bw=function(t){return typeof t=="string"&&t.length!==0&&!wV.test(t)},bV=function(t){return typeof t=="string"&&t.length!==0&&!AV.test(t)},IV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bV(t)},Hw=function(t,e,n){const s=n instanceof Me?new iM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qs(s)+" with contents = "+e.toString());if(BT(e))throw new Error(t+"contains "+e.toString()+" "+Qs(s));if(typeof e=="string"&&e.length>zu/3&&Sc(e)>zu)throw new Error(t+"contains a string greater than "+zu+" utf8 bytes "+Qs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(an(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Bw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rM(s,o),Hw(t,a,s),oM(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qs(s)+" in addition to actual children.")}},CV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!IV(n))throw new Error(FD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class SV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function RV(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!uw(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Pi(t,e,n){RV(t,n),NV(t,s=>mn(s,e)||mn(e,s))}function NV(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(PV(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ui&&_t("event: "+n.toString()),da(s)}}}/**
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
 */const OV="repo_interrupt",kV=25;class DV{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new SV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vl(),this.transactionQueueTree_=new Yf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xV(t,e,n){if(t.stats_=Mf(t.repoInfo_),t.forceRestClient_||R1())t.server_=new Ml(t.repoInfo_,(s,i,r,o)=>{Fg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$g(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ut(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ts(t.repoInfo_,e,(s,i,r,o)=>{Fg(t,s,i,r,o)},s=>{$g(t,s)},s=>{MV(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=x1(t.repoInfo_,()=>new DM(t.stats_,t.server_)),t.infoData_=new RM,t.infoSyncTree_=new Mg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Pc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xf(t,"connected",!1),t.serverSyncTree_=new Mg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Pi(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function LV(t){const n=t.infoData_.getNode(new Me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function jw(t){return pV({timestamp:LV(t)})}function Fg(t,e,n,s,i){t.dataUpdateCount++;const r=new Me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Sl(n,c=>gt(c));o=fV(t.serverSyncTree_,r,l,i)}else{const l=gt(n);o=dV(t.serverSyncTree_,r,l,i)}else if(s){const l=Sl(n,c=>gt(c));o=hV(t.serverSyncTree_,r,l)}else{const l=gt(n);o=Pc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Zf(t,r)),Pi(t.eventQueue_,a,o)}function $g(t,e){Xf(t,"connected",e),e===!1&&FV(t)}function MV(t,e){an(e,(n,s)=>{Xf(t,n,s)})}function Xf(t,e,n){const s=new Me("/.info/"+e),i=gt(n);t.infoData_.updateSnapshot(s,i);const r=Pc(t.infoSyncTree_,s,i);Pi(t.eventQueue_,s,r)}function VV(t){return t.nextWriteId_++}function FV(t){qw(t,"onDisconnectEvents");const e=jw(t),n=Vl();Zh(t.onDisconnect_,Pe(),(i,r)=>{const o=gV(i,r,t.serverSyncTree_,e);gw(n,i,o)});let s=[];Zh(n,Pe(),(i,r)=>{s=s.concat(Pc(t.serverSyncTree_,i,r));const o=HV(t,i);Zf(t,o)}),t.onDisconnect_=Vl(),Pi(t.eventQueue_,Pe(),s)}function $V(t){t.persistentConnection_&&t.persistentConnection_.interrupt(OV)}function qw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function Ww(t,e,n){return kw(t.serverSyncTree_,e,n)||Ce.EMPTY_NODE}function Jf(t,e=t.transactionQueueTree_){if(e||Dc(t,e),$r(e)){const n=zw(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&UV(t,pa(e),n)}else $w(e)&&kc(e,n=>{Jf(t,n)})}function UV(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ww(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];$(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=en(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{qw(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(zi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Dc(t,Qf(t.transactionQueueTree_,e)),Jf(t,t.transactionQueueTree_),Pi(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)da(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Zf(t,e)}},o)}function Zf(t,e){const n=Kw(t,e),s=pa(n),i=zw(t,n);return BV(t,i,s),s}function BV(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=en(n,l.path);let u=!1,h;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(zi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kV)u=!0,h="maxretry",i=i.concat(zi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Ww(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Hw("transaction failed: Data returned ",f,l.path);let _=gt(f);typeof f=="object"&&f!=null&&ls(f,".priority")||(_=_.updatePriority(d.getPriority()));const y=l.currentWriteId,E=jw(t),C=yV(_,d,E);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=C,l.currentWriteId=VV(t),o.splice(o.indexOf(y),1),i=i.concat(uV(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(zi(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(zi(t.serverSyncTree_,l.currentWriteId,!0))}Pi(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Dc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)da(s[a]);Jf(t,t.transactionQueueTree_)}function Kw(t,e){let n,s=t.transactionQueueTree_;for(n=ye(e);n!==null&&$r(s)===void 0;)s=Qf(s,n),e=De(e),n=ye(e);return s}function zw(t,e){const n=[];return Gw(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Gw(t,e,n){const s=$r(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);kc(e,i=>{Gw(t,i,n)})}function Dc(t,e){const n=$r(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Fw(e,n.length>0?n:void 0)}kc(e,s=>{Dc(t,s)})}function HV(t,e){const n=pa(Kw(t,e)),s=Qf(t.transactionQueueTree_,e);return EV(s,i=>{Gu(t,i)}),Gu(t,s),Uw(s,i=>{Gu(t,i)}),n}function Gu(t,e){const n=$r(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fw(e,void 0):n.length=r+1,Pi(t.eventQueue_,pa(e),i);for(let o=0;o<s.length;o++)da(s[o])}}/**
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
 */function jV(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ug=function(t,e){const n=WV(t),s=n.namespace;n.domain==="firebase.com"&&gi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||E1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new O1(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Me(n.pathString)}},WV=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=jV(t.substring(u,h)));const d=qV(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class ep{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return me(this._path)?null:aw(this._path)}get ref(){return new Ur(this._repo,this._path)}get _queryIdentifier(){const e=Ig(this._queryParams),n=xf(e);return n==="{}"?"default":n}get _queryObject(){return Ig(this._queryParams)}isEqual(e){if(e=Hs(e),!(e instanceof ep))return!1;const n=this._repo===e._repo,s=uw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sM(this._path)}}class Ur extends ep{constructor(e,n){super(e,n,new Uf,!1)}get parent(){const e=cw(this._path);return e===null?null:new Ur(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}lV(Ur);cV(Ur);/**
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
 */const KV="FIREBASE_DATABASE_EMULATOR_HOST",ad={};let zV=!1;function GV(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ug(r,i),a=o.repoInfo,l,c;typeof process<"u"&&og&&(c=og[KV]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ug(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Qh(Qh.OWNER):new P1(t.name,t.options,e);CV("Invalid Firebase Database URL",o),me(o.path)||gi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=QV(a,t,u,new N1(t.name,n));return new XV(h,t)}function YV(t,e){const n=ad[e];(!n||n[t.key]!==t)&&gi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$V(t),delete n[t.key]}function QV(t,e,n,s){let i=ad[e.name];i||(i={},ad[e.name]=i);let r=i[t.toURLString()];return r&&gi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new DV(t,zV,n,s),i[t.toURLString()]=r,r}class XV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ur(this._repo,Pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function JV(t){m1(Vr),jn(new Tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return GV(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),jt(ag,lg,t),jt(ag,lg,"esm2017")}ts.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ts.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};JV();var ZV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,tp=tp||{},ie=ZV||self;function xc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ma(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function eF(t){return Object.prototype.hasOwnProperty.call(t,Yu)&&t[Yu]||(t[Yu]=++tF)}var Yu="closure_uid_"+(1e9*Math.random()>>>0),tF=0;function nF(t,e,n){return t.call.apply(t.bind,arguments)}function sF(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=nF:Tt=sF,Tt.apply(null,arguments)}function Ka(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function js(){this.s=this.s,this.o=this.o}var iF=0;js.prototype.s=!1;js.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),iF!=0)&&eF(this)};js.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function np(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Bg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(xc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var rF=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ie.addEventListener("test",n,e),ie.removeEventListener("test",n,e)}catch{}return t}();function jo(t){return/^[\s\xa0]*$/.test(t)}function Lc(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Pn(t){return Lc().indexOf(t)!=-1}function sp(t){return sp[" "](t),t}sp[" "]=function(){};function oF(t,e){var n=JF;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var aF=Pn("Opera"),Tr=Pn("Trident")||Pn("MSIE"),Qw=Pn("Edge"),ld=Qw||Tr,Xw=Pn("Gecko")&&!(Lc().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge"))&&!(Pn("Trident")||Pn("MSIE"))&&!Pn("Edge"),lF=Lc().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge");function Jw(){var t=ie.document;return t?t.documentMode:void 0}var cd;e:{var Qu="",Xu=function(){var t=Lc();if(Xw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Qw)return/Edge\/([\d\.]+)/.exec(t);if(Tr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lF)return/WebKit\/(\S+)/.exec(t);if(aF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xu&&(Qu=Xu?Xu[1]:""),Tr){var Ju=Jw();if(Ju!=null&&Ju>parseFloat(Qu)){cd=String(Ju);break e}}cd=Qu}var ud;if(ie.document&&Tr){var Hg=Jw();ud=Hg||parseInt(cd,10)||void 0}else ud=void 0;var cF=ud;function qo(t,e){if(wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xw){e:{try{sp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qo.$.h.call(this)}}it(qo,wt);var uF={2:"touch",3:"pen",4:"mouse"};qo.prototype.h=function(){qo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _a="closure_listenable_"+(1e6*Math.random()|0),hF=0;function dF(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++hF,this.fa=this.ia=!1}function Mc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ip(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function fF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Zw(t){const e={};for(const n in t)e[n]=t[n];return e}const jg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eA(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<jg.length;r++)n=jg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Vc(t){this.src=t,this.g={},this.h=0}Vc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=dd(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new dF(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function hd(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Yw(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Mc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dd(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var rp="closure_lm_"+(1e6*Math.random()|0),Zu={};function tA(t,e,n,s,i){if(s&&s.once)return sA(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)tA(t,e[r],n,s,i);return null}return n=lp(n),t&&t[_a]?t.O(e,n,ma(s)?!!s.capture:!!s,i):nA(t,e,n,!1,s,i)}function nA(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ma(i)?!!i.capture:!!i,a=ap(t);if(a||(t[rp]=a=new Vc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=pF(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)rF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(rA(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pF(){function t(n){return e.call(t.src,t.listener,n)}const e=mF;return t}function sA(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)sA(t,e[r],n,s,i);return null}return n=lp(n),t&&t[_a]?t.P(e,n,ma(s)?!!s.capture:!!s,i):nA(t,e,n,!0,s,i)}function iA(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)iA(t,e[r],n,s,i);else s=ma(s)?!!s.capture:!!s,n=lp(n),t&&t[_a]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=dd(r,n,s,i),-1<n&&(Mc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ap(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dd(e,n,s,i)),(n=-1<t?e[t]:null)&&op(n))}function op(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_a])hd(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(rA(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ap(e))?(hd(n,t),n.h==0&&(n.src=null,e[rp]=null)):Mc(t)}}}function rA(t){return t in Zu?Zu[t]:Zu[t]="on"+t}function mF(t,e){if(t.fa)t=!0;else{e=new qo(e,this);var n=t.listener,s=t.la||t.src;t.ia&&op(t),t=n.call(s,e)}return t}function ap(t){return t=t[rp],t instanceof Vc?t:null}var eh="__closure_events_fn_"+(1e9*Math.random()>>>0);function lp(t){return typeof t=="function"?t:(t[eh]||(t[eh]=function(e){return t.handleEvent(e)}),t[eh])}function st(){js.call(this),this.i=new Vc(this),this.S=this,this.J=null}it(st,js);st.prototype[_a]=!0;st.prototype.removeEventListener=function(t,e,n,s){iA(this,t,e,n,s)};function dt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new wt(e,t);else if(e instanceof wt)e.target=e.target||t;else{var i=e;e=new wt(s,t),eA(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=za(o,s,!0,e)&&i}if(o=e.g=t,i=za(o,s,!0,e)&&i,i=za(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=za(o,s,!1,e)&&i}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Mc(n[s]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};st.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function za(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&hd(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var cp=ie.JSON.stringify;class _F{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function gF(){var t=up;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yF{constructor(){this.h=this.g=null}add(e,n){const s=oA.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var oA=new _F(()=>new vF,t=>t.reset());class vF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function EF(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function TF(t){ie.setTimeout(()=>{throw t},0)}let Wo,Ko=!1,up=new yF,aA=()=>{const t=ie.Promise.resolve(void 0);Wo=()=>{t.then(wF)}};var wF=()=>{for(var t;t=gF();){try{t.h.call(t.g)}catch(n){TF(n)}var e=oA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ko=!1};function Fc(t,e){st.call(this),this.h=t||1,this.g=e||ie,this.j=Tt(this.qb,this),this.l=Date.now()}it(Fc,st);U=Fc.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dt(this,"tick"),this.ga&&(hp(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){Fc.$.N.call(this),hp(this),delete this.g};function dp(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function lA(t){t.g=dp(()=>{t.g=null,t.i&&(t.i=!1,lA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class AF extends js{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lA(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zo(t){js.call(this),this.h=t,this.g={}}it(zo,js);var qg=[];function cA(t,e,n,s){Array.isArray(n)||(n&&(qg[0]=n.toString()),n=qg);for(var i=0;i<n.length;i++){var r=tA(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function uA(t){ip(t.g,function(e,n){this.g.hasOwnProperty(n)&&op(e)},t),t.g={}}zo.prototype.N=function(){zo.$.N.call(this),uA(this)};zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $c(){this.g=!0}$c.prototype.Ea=function(){this.g=!1};function bF(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function IF(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Gi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+SF(t,n)+(s?" "+s:"")})}function CF(t,e){t.info(function(){return"TIMEOUT: "+e})}$c.prototype.info=function(){};function SF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return cp(n)}catch{return e}}var Oi={},Wg=null;function Uc(){return Wg=Wg||new st}Oi.Ta="serverreachability";function hA(t){wt.call(this,Oi.Ta,t)}it(hA,wt);function Go(t){const e=Uc();dt(e,new hA(e))}Oi.STAT_EVENT="statevent";function dA(t,e){wt.call(this,Oi.STAT_EVENT,t),this.stat=e}it(dA,wt);function Ct(t){const e=Uc();dt(e,new dA(e,t))}Oi.Ua="timingevent";function fA(t,e){wt.call(this,Oi.Ua,t),this.size=e}it(fA,wt);function ga(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var Bc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fp(){}fp.prototype.h=null;function Kg(t){return t.h||(t.h=t.i())}function mA(){}var ya={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pp(){wt.call(this,"d")}it(pp,wt);function mp(){wt.call(this,"c")}it(mp,wt);var fd;function Hc(){}it(Hc,fp);Hc.prototype.g=function(){return new XMLHttpRequest};Hc.prototype.i=function(){return{}};fd=new Hc;function va(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new zo(this),this.P=RF,t=ld?125:void 0,this.V=new Fc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _A}function _A(){this.i=null,this.g="",this.h=!1}var RF=45e3,gA={},pd={};U=va.prototype;U.setTimeout=function(t){this.P=t};function md(t,e,n){t.L=1,t.A=qc(ss(e)),t.u=n,t.S=!0,yA(t,null)}function yA(t,e){t.G=Date.now(),Ea(t),t.B=ss(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),CA(n.i,"t",s),t.o=0,n=t.l.J,t.h=new _A,t.g=zA(t.l,n?e:null,!t.u),0<t.O&&(t.M=new AF(Tt(t.Pa,t,t.g),t.O)),cA(t.U,t.g,"readystatechange",t.nb),e=t.I?Zw(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Go(),bF(t.j,t.v,t.B,t.m,t.W,t.u)}U.nb=function(t){t=t.target;const e=this.M;e&&Ln(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const u=Ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ld||this.g&&(this.h.h||this.g.ja()||Qg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Go(3):Go(2)),jc(this);var n=this.g.da();this.ca=n;t:if(vA(this)){var s=Qg(this.g);t="";var i=s.length,r=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){si(this),Io(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,IF(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jo(a)){var c=a;break t}}c=null}if(n=c)Gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_d(this,n);else{this.i=!1,this.s=3,Ct(12),si(this),Io(this);break e}}this.S?(EA(this,u,o),ld&&this.i&&u==3&&(cA(this.U,this.V,"tick",this.mb),this.V.start())):(Gi(this.j,this.m,o,null),_d(this,o)),u==4&&si(this),this.i&&!this.J&&(u==4?jA(this.l,this):(this.i=!1,Ea(this)))}else YF(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),si(this),Io(this)}}}catch{}finally{}};function vA(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function EA(t,e,n){let s=!0,i;for(;!t.J&&t.o<n.length;)if(i=NF(t,n),i==pd){e==4&&(t.s=4,Ct(14),s=!1),Gi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==gA){t.s=4,Ct(15),Gi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Gi(t.j,t.m,i,null),_d(t,i);vA(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tp(e),e.M=!0,Ct(11))):(Gi(t.j,t.m,n,"[Invalid Chunked Response]"),si(t),Io(t))}U.mb=function(){if(this.g){var t=Ln(this.g),e=this.g.ja();this.o<e.length&&(jc(this),EA(this,t,e),this.i&&t!=4&&Ea(this))}};function NF(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?pd:(n=Number(e.substring(n,s)),isNaN(n)?gA:(s+=1,s+n>e.length?pd:(e=e.slice(s,s+n),t.o=s+n,e)))}U.cancel=function(){this.J=!0,si(this)};function Ea(t){t.Y=Date.now()+t.P,TA(t,t.P)}function TA(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ga(Tt(t.lb,t),e)}function jc(t){t.C&&(ie.clearTimeout(t.C),t.C=null)}U.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(CF(this.j,this.B),this.L!=2&&(Go(),Ct(17)),si(this),this.s=2,Io(this)):TA(this,this.Y-t)};function Io(t){t.l.H==0||t.J||jA(t.l,t)}function si(t){jc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,hp(t.V),uA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function _d(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||gd(n.i,t))){if(!t.K&&gd(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)jl(n),Gc(n);else break e;Ep(n),Ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ga(Tt(n.ib,n),6e3));if(1>=NA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ii(n,11)}else if((t.K||n.g==t)&&jl(n),!jo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.i;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(_p(r,r.h),r.h=null))}if(s.F){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.Da=g,xe(s.I,s.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=KA(s,s.J?s.pa:null,s.Y),o.K){PA(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&(jc(a),Ea(a)),s.g=o}else BA(s);0<n.j.length&&Yc(n)}else c[0]!="stop"&&c[0]!="close"||ii(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ii(n,7):vp(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Go(4)}catch{}}function PF(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function OF(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function wA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=OF(t),s=PF(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var AA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hi){this.h=t.h,Bl(this,t.j),this.s=t.s,this.g=t.g,Hl(this,t.m),this.l=t.l;var e=t.i,n=new Yo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zg(this,n),this.o=t.o}else t&&(e=String(t).match(AA))?(this.h=!1,Bl(this,e[1]||"",!0),this.s=ao(e[2]||""),this.g=ao(e[3]||"",!0),Hl(this,e[4]),this.l=ao(e[5]||"",!0),zg(this,e[6]||"",!0),this.o=ao(e[7]||"")):(this.h=!1,this.i=new Yo(null,this.h))}hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lo(e,Gg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lo(e,Gg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(lo(n,n.charAt(0)=="/"?LF:xF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lo(n,VF)),t.join("")};function ss(t){return new hi(t)}function Bl(t,e,n){t.j=n?ao(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zg(t,e,n){e instanceof Yo?(t.i=e,FF(t.i,t.h)):(n||(e=lo(e,MF)),t.i=new Yo(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function qc(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ao(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,DF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function DF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gg=/[#\/\?@]/g,xF=/[#\?:]/g,LF=/[#\?]/g,MF=/[#\?@]/g,VF=/#/g;function Yo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qs(t){t.g||(t.g=new Map,t.h=0,t.i&&kF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Yo.prototype;U.add=function(t,e){qs(this),this.i=null,t=Br(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bA(t,e){qs(t),e=Br(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function IA(t,e){return qs(t),e=Br(t,e),t.g.has(e)}U.forEach=function(t,e){qs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};U.ta=function(){qs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};U.Z=function(t){qs(this);let e=[];if(typeof t=="string")IA(this,t)&&(e=e.concat(this.g.get(Br(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return qs(this),this.i=null,t=Br(this,t),IA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function CA(t,e,n){bA(t,e),0<n.length&&(t.i=null,t.g.set(Br(t,e),np(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Br(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function FF(t,e){e&&!t.j&&(qs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(bA(this,s),CA(this,i,n))},t)),t.j=e}var $F=class{constructor(t,e){this.g=t,this.map=e}};function SA(t){this.l=t||UF,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UF=10;function RA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function NA(t){return t.h?1:t.g?t.g.size:0}function gd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _p(t,e){t.g?t.g.add(e):t.h=e}function PA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}SA.prototype.cancel=function(){if(this.i=OA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function OA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return np(t.i)}var BF=class{stringify(t){return ie.JSON.stringify(t,void 0)}parse(t){return ie.JSON.parse(t,void 0)}};function HF(){this.g=new BF}function jF(t,e,n){const s=n||"";try{wA(t,function(i,r){let o=i;ma(i)&&(o=cp(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function qF(t,e){const n=new $c;if(ie.Image){const s=new Image;s.onload=Ka(Ga,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ka(Ga,n,s,"TestLoadImage: error",!1,e),s.onabort=Ka(Ga,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ka(Ga,n,s,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ga(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Wc(t){this.l=t.ec||null,this.j=t.ob||!1}it(Wc,fp);Wc.prototype.g=function(){return new Kc(this.l,this.j)};Wc.prototype.i=function(t){return function(){return t}}({});function Kc(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=gp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Kc,st);var gp=0;U=Kc.prototype;U.open=function(t,e){if(this.readyState!=gp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qo(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ta(this)),this.readyState=gp};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qo(this)),this.g&&(this.readyState=3,Qo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function kA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ta(this):Qo(this),this.readyState==3&&kA(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,Ta(this))};U.Ya=function(t){this.g&&(this.response=t,Ta(this))};U.ka=function(){this.g&&Ta(this)};function Ta(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qo(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Kc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var WF=ie.JSON.parse;function je(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=DA,this.L=this.M=!1}it(je,st);var DA="",KF=/^https?$/i,zF=["POST","PUT"];U=je.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fd.g(),this.C=this.u?Kg(this.u):Kg(fd),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Yg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=Yw(zF,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{MA(this),0<this.B&&((this.L=GF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=dp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Yg(this,r)}};function GF(t){return Tr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof tp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function Yg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xA(t),zc(t)}function xA(t){t.F||(t.F=!0,dt(t,"complete"),dt(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),zc(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zc(this,!0)),je.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?LA(this):this.kb())};U.kb=function(){LA(this)};function LA(t){if(t.h&&typeof tp<"u"&&(!t.C[1]||Ln(t)!=4||t.da()!=2)){if(t.v&&Ln(t)==4)dp(t.La,0,t);else if(dt(t,"readystatechange"),Ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(AA)[1]||null;!i&&ie.self&&ie.self.location&&(i=ie.self.location.protocol.slice(0,-1)),s=!KF.test(i?i.toLowerCase():"")}n=s}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var r=2<Ln(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",xA(t)}}finally{zc(t)}}}}function zc(t,e){if(t.g){MA(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=s}catch{}}}function MA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function Ln(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),WF(e)}};function Qg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case DA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function YF(t){const e={};t=(t.g&&2<=Ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(jo(t[s]))continue;var n=EF(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}fF(e,function(s){return s.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function VA(t){let e="";return ip(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function yp(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=VA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function to(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function FA(t){this.Ga=0,this.j=[],this.l=new $c,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=to("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=to("baseRetryDelayMs",5e3,t),this.hb=to("retryDelaySeedMs",1e4,t),this.eb=to("forwardChannelMaxRetries",2,t),this.xa=to("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new SA(t&&t.concurrentRequestLimit),this.Ja=new HF,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=FA.prototype;U.ra=8;U.H=1;function vp(t){if($A(t),t.H==3){var e=t.W++,n=ss(t.I);if(xe(n,"SID",t.K),xe(n,"RID",e),xe(n,"TYPE","terminate"),wa(t,n),e=new va(t,t.l,e),e.L=2,e.A=qc(ss(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon)try{n=ie.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ie.Image&&(new Image().src=e.A,n=!0),n||(e.g=zA(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ea(e)}WA(t)}function Gc(t){t.g&&(Tp(t),t.g.cancel(),t.g=null)}function $A(t){Gc(t),t.u&&(ie.clearTimeout(t.u),t.u=null),jl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function Yc(t){if(!RA(t.i)&&!t.m){t.m=!0;var e=t.Na;Wo||aA(),Ko||(Wo(),Ko=!0),up.add(e,t),t.C=0}}function QF(t,e){return NA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ga(Tt(t.Na,t,e),qA(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new va(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Zw(r),eA(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=UA(this,i,e),n=ss(this.I),xe(n,"RID",t),xe(n,"CVER",22),this.F&&xe(n,"X-HTTP-Session-Id",this.F),wa(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(VA(r)))+"&"+e:this.o&&yp(n,this.o,r)),_p(this.i,i),this.bb&&xe(n,"TYPE","init"),this.P?(xe(n,"$req",e),xe(n,"SID","null"),i.aa=!0,md(i,n,null)):md(i,n,e),this.H=2}}else this.H==3&&(t?Xg(this,t):this.j.length==0||RA(this.i)||Xg(this))};function Xg(t,e){var n;e?n=e.m:n=t.W++;const s=ss(t.I);xe(s,"SID",t.K),xe(s,"RID",n),xe(s,"AID",t.V),wa(t,s),t.o&&t.s&&yp(s,t.o,t.s),n=new va(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=UA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_p(t.i,n),md(n,s,e)}function wa(t,e){t.na&&ip(t.na,function(n,s){xe(e,s,n)}),t.h&&wA({},function(n,s){xe(e,s,n)})}function UA(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Tt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{jF(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function BA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Wo||aA(),Ko||(Wo(),Ko=!0),up.add(e,t),t.A=0}}function Ep(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ga(Tt(t.Ma,t),qA(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,HA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ga(Tt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ct(10),Gc(this),HA(this))};function Tp(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function HA(t){t.g=new va(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ss(t.wa);xe(e,"RID","rpc"),xe(e,"SID",t.K),xe(e,"AID",t.V),xe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&xe(e,"TO",t.qa),xe(e,"TYPE","xmlhttp"),wa(t,e),t.o&&t.s&&yp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=qc(ss(e)),n.u=null,n.S=!0,yA(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Gc(this),Ep(this),Ct(19))};function jl(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function jA(t,e){var n=null;if(t.g==e){jl(t),Tp(t),t.g=null;var s=2}else if(gd(t.i,e))n=e.F,PA(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;s=Uc(),dt(s,new fA(s,n)),Yc(t)}else BA(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(s==1&&QF(t,e)||s==2&&Ep(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ii(t,5);break;case 4:ii(t,10);break;case 3:ii(t,6);break;default:ii(t,2)}}}function qA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ii(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Tt(t.pb,t);n||(n=new hi("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||Bl(n,"https"),qc(n)),qF(n.toString(),s)}else Ct(2);t.H=0,t.h&&t.h.za(e),WA(t),$A(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ct(2)):(this.l.info("Failed to ping google.com"),Ct(1))};function WA(t){if(t.H=0,t.ma=[],t.h){const e=OA(t.i);(e.length!=0||t.j.length!=0)&&(Bg(t.ma,e),Bg(t.ma,t.j),t.i.i.length=0,np(t.j),t.j.length=0),t.h.ya()}}function KA(t,e,n){var s=n instanceof hi?ss(n):new hi(n);if(s.g!="")e&&(s.g=e+"."+s.g),Hl(s,s.m);else{var i=ie.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new hi(null);s&&Bl(r,s),e&&(r.g=e),i&&Hl(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&xe(s,n,e),xe(s,"VER",t.ra),wa(t,s),s}function zA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new je(new Wc({ob:n})):new je(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function GA(){}U=GA.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function ql(){if(Tr&&!(10<=Number(cF)))throw Error("Environmental error: no available transport.")}ql.prototype.g=function(t,e){return new Gt(t,e)};function Gt(t,e){st.call(this),this.g=new FA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!jo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hr(this)}it(Gt,st);Gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=KA(t,null,t.Y),Yc(t)};Gt.prototype.close=function(){vp(this.g)};Gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=cp(t),t=n);e.j.push(new $F(e.fb++,t)),e.H==3&&Yc(e)};Gt.prototype.N=function(){this.g.h=null,delete this.j,vp(this.g),delete this.g,Gt.$.N.call(this)};function YA(t){pp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(YA,pp);function QA(){mp.call(this),this.status=1}it(QA,mp);function Hr(t){this.g=t}it(Hr,GA);Hr.prototype.Ba=function(){dt(this.g,"a")};Hr.prototype.Aa=function(t){dt(this.g,new YA(t))};Hr.prototype.za=function(t){dt(this.g,new QA)};Hr.prototype.ya=function(){dt(this.g,"b")};function XF(){this.blockSize=-1}function An(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(An,XF);An.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function th(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}An.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)th(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){th(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){th(this,s),i=0;break}}this.h=i,this.i+=e};An.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ne(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var JF={};function wp(t){return-128<=t&&128>t?oF(t,function(e){return new Ne([e|0],0>e?-1:0)}):new Ne([t|0],0>t?-1:0)}function Mn(t){if(isNaN(t)||!isFinite(t))return ir;if(0>t)return lt(Mn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=yd;return new Ne(e,0)}function XA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(XA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Mn(Math.pow(e,8)),s=ir,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Mn(Math.pow(e,r)),s=s.R(r).add(Mn(o))):(s=s.R(n),s=s.add(Mn(o)))}return s}var yd=4294967296,ir=wp(0),vd=wp(1),Jg=wp(16777216);U=Ne.prototype;U.ea=function(){if(Xt(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:yd+s)*e,e*=yd}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Xn(this))return"0";if(Xt(this))return"-"+lt(this).toString(t);for(var e=Mn(Math.pow(t,6)),n=this,s="";;){var i=Kl(n,e).g;n=Wl(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Xn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Xn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xt(t){return t.h==-1}U.X=function(t){return t=Wl(this,t),Xt(t)?-1:Xn(t)?0:1};function lt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ne(n,~t.h).add(vd)}U.abs=function(){return Xt(this)?lt(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Ne(n,n[n.length-1]&-2147483648?-1:0)};function Wl(t,e){return t.add(lt(e))}U.R=function(t){if(Xn(this)||Xn(t))return ir;if(Xt(this))return Xt(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(Xt(t))return lt(this.R(lt(t)));if(0>this.X(Jg)&&0>t.X(Jg))return Mn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Ya(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Ya(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Ya(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Ya(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ne(n,0)};function Ya(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function no(t,e){this.g=t,this.h=e}function Kl(t,e){if(Xn(e))throw Error("division by zero");if(Xn(t))return new no(ir,ir);if(Xt(t))return e=Kl(lt(t),e),new no(lt(e.g),lt(e.h));if(Xt(e))return e=Kl(t,lt(e)),new no(lt(e.g),e.h);if(30<t.g.length){if(Xt(t)||Xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vd,s=e;0>=s.X(t);)n=Zg(n),s=Zg(s);var i=Mi(n,1),r=Mi(s,1);for(s=Mi(s,2),n=Mi(n,2);!Xn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Mi(s,1),n=Mi(n,1)}return e=Wl(t,i.R(e)),new no(i,e)}for(i=ir;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Mn(n),o=r.R(e);Xt(o)||0<o.X(t);)n-=s,r=Mn(n),o=r.R(e);Xn(r)&&(r=vd),i=i.add(r),t=Wl(t,o)}return new no(i,t)}U.gb=function(t){return Kl(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ne(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ne(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ne(n,this.h^t.h)};function Zg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ne(n,t.h)}function Mi(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Ne(i,t.h)}ql.prototype.createWebChannel=ql.prototype.g;Gt.prototype.send=Gt.prototype.u;Gt.prototype.open=Gt.prototype.m;Gt.prototype.close=Gt.prototype.close;Bc.NO_ERROR=0;Bc.TIMEOUT=8;Bc.HTTP_ERROR=6;pA.COMPLETE="complete";mA.EventType=ya;ya.OPEN="a";ya.CLOSE="b";ya.ERROR="c";ya.MESSAGE="d";st.prototype.listen=st.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;An.prototype.digest=An.prototype.l;An.prototype.reset=An.prototype.reset;An.prototype.update=An.prototype.j;Ne.prototype.add=Ne.prototype.add;Ne.prototype.multiply=Ne.prototype.R;Ne.prototype.modulo=Ne.prototype.gb;Ne.prototype.compare=Ne.prototype.X;Ne.prototype.toNumber=Ne.prototype.ea;Ne.prototype.toString=Ne.prototype.toString;Ne.prototype.getBits=Ne.prototype.D;Ne.fromNumber=Mn;Ne.fromString=XA;var ZF=function(){return new ql},e$=function(){return Uc()},nh=Bc,t$=pA,n$=Oi,ey={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Qa=mA,s$=je,i$=An,rr=Ne;const ty="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let jr="10.7.0";/**
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
 */const Ti=new la("@firebase/firestore");function so(){return Ti.logLevel}function K(t,...e){if(Ti.logLevel<=he.DEBUG){const n=e.map(Ap);Ti.debug(`Firestore (${jr}): ${t}`,...n)}}function is(t,...e){if(Ti.logLevel<=he.ERROR){const n=e.map(Ap);Ti.error(`Firestore (${jr}): ${t}`,...n)}}function wr(t,...e){if(Ti.logLevel<=he.WARN){const n=e.map(Ap);Ti.warn(`Firestore (${jr}): ${t}`,...n)}}function Ap(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: `+t;throw is(e),new Error(e)}function Qe(t,e){t||ae()}function Ae(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends as{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ss{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class JA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class o${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class a${constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ss,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ss)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qe(typeof s.accessToken=="string"),new JA(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string"),new mt(e)}}class l${constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class c${constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new l$(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class u${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class h${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string"),this.R=n.token,new u$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function d$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class ZA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=d$(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Ie(t,e){return t<e?-1:t>e?1:0}function Ar(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Pt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pt.fromMillis(Date.now())}static fromDate(e){return Pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Pt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Pt(0,0))}static max(){return new re(new Pt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xo{constructor(e,n,s){n===void 0?n=0:n>e.length&&ae(),s===void 0?s=e.length-n:s>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Xo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Xo{construct(e,n,s){return new $e(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new X(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const f$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Xo{construct(e,n,s){return new It(e,n,s)}static isValidIdentifier(e){return f$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new X(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new X(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new X(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee($e.fromString(e))}static fromName(e){return new ee($e.fromString(e).popFirst(5))}static empty(){return new ee($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new $e(e.slice()))}}function p$(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(s===1e9?new Pt(n+1,0):new Pt(n,s));return new Ms(i,ee.empty(),e)}function m$(t){return new Ms(t.readTime,t.key,-1)}class Ms{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ms(re.min(),ee.empty(),-1)}static max(){return new Ms(re.max(),ee.empty(),-1)}}function _$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const g$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class y${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bp(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==g$)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(i=>i?P.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new P((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new P((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Aa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ip{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ip._e=-1;function Qc(t){return t==null}function Ed(t){return t===0&&1/t==-1/0}/**
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
 */function ny(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function v$(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class We{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xa(this.root,e,this.comparator,!0)}}class Xa{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??at.RED,this.left=i??at.EMPTY,this.right=r??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new at(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,s,i,r){return this}insert(e,n,s){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sy(this.data.getIterator())}getIteratorFrom(e){return new sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Es{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Es([])}unionWith(e){let n=new ft(It.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Es(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class eb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new eb("Invalid base64 string: "+r):r}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const E$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vs(t){if(Qe(!!t),typeof t=="string"){let e=0;const n=E$.exec(t);if(Qe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wi(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
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
 */function Cp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sp(t){const e=t.mapValue.fields.__previous_value__;return Cp(e)?Sp(e):e}function Jo(t){const e=Vs(t.mapValue.fields.__local_write_time__.timestampValue);return new Pt(e.seconds,e.nanos)}/**
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
 */class T${constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cp(t)?4:w$(t)?9007199254740991:10:ae()}function qn(t,e){if(t===e)return!0;const n=Ai(t);if(n!==Ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jo(t).isEqual(Jo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Vs(i.timestampValue),a=Vs(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return wi(i.bytesValue).isEqual(wi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Ye(i.geoPointValue.latitude)===Ye(r.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ye(i.integerValue)===Ye(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Ye(i.doubleValue),a=Ye(r.doubleValue);return o===a?Ed(o)===Ed(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ar(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(ny(o)!==ny(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!qn(o[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function ea(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function br(t,e){if(t===e)return 0;const n=Ai(t),s=Ai(e);if(n!==s)return Ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Ye(r.integerValue||r.doubleValue),l=Ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return iy(t.timestampValue,e.timestampValue);case 4:return iy(Jo(t),Jo(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(r,o){const a=wi(r),l=wi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ie(a[c],l[c]);if(u!==0)return u}return Ie(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=Ie(Ye(r.latitude),Ye(o.latitude));return a!==0?a:Ie(Ye(r.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=br(a[c],l[c]);if(u)return u}return Ie(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Ja.mapValue&&o===Ja.mapValue)return 0;if(r===Ja.mapValue)return 1;if(o===Ja.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Ie(l[h],u[h]);if(d!==0)return d;const f=br(a[l[h]],c[u[h]]);if(f!==0)return f}return Ie(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ae()}}function iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Vs(t),s=Vs(e),i=Ie(n.seconds,s.seconds);return i!==0?i:Ie(n.nanos,s.nanos)}function Ir(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Vs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Td(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Td(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function wd(t){return!!t&&"integerValue"in t}function Rp(t){return!!t&&"arrayValue"in t}function ry(t){return!!t&&"nullValue"in t}function oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sh(t){return!!t&&"mapValue"in t}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xc(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Co(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function w$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class On{constructor(e){this.value=e}static empty(){return new On({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!sh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=It.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Co(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());sh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];sh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Xc(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new On(Co(this.value))}}/**
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
 */class yt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,re.min(),re.min(),re.min(),On.empty(),0)}static newFoundDocument(e,n,s,i){return new yt(e,1,n,re.min(),s,i,0)}static newNoDocument(e,n){return new yt(e,2,n,re.min(),re.min(),On.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,re.min(),re.min(),On.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zl{constructor(e,n){this.position=e,this.inclusive=n}}function ay(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ee.comparator(ee.fromName(o.referenceValue),n.key):s=br(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ly(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gl{constructor(e,n="asc"){this.field=e,this.dir=n}}function A$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tb{}class Xe extends tb{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new I$(e,n,s):n==="array-contains"?new R$(e,s):n==="in"?new N$(e,s):n==="not-in"?new P$(e,s):n==="array-contains-any"?new O$(e,s):new Xe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new C$(e,s):new S$(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(br(n,this.value)):n!==null&&Ai(this.value)===Ai(n)&&this.matchesComparison(br(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends tb{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Wn(e,n)}matches(e){return nb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function nb(t){return t.op==="and"}function sb(t){return b$(t)&&nb(t)}function b$(t){for(const e of t.filters)if(e instanceof Wn)return!1;return!0}function Ad(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Ir(t.value);if(sb(t))return t.filters.map(e=>Ad(e)).join(",");{const e=t.filters.map(n=>Ad(n)).join(",");return`${t.op}(${e})`}}function ib(t,e){return t instanceof Xe?function(s,i){return i instanceof Xe&&s.op===i.op&&s.field.isEqual(i.field)&&qn(s.value,i.value)}(t,e):t instanceof Wn?function(s,i){return i instanceof Wn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&ib(o,i.filters[a]),!0):!1}(t,e):void ae()}function rb(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ir(n.value)}`}(t):t instanceof Wn?function(n){return n.op.toString()+" {"+n.getFilters().map(rb).join(" ,")+"}"}(t):"Filter"}class I$ extends Xe{constructor(e,n,s){super(e,n,s),this.key=ee.fromName(s.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class C$ extends Xe{constructor(e,n){super(e,"in",n),this.keys=ob("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class S$ extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=ob("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ob(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ee.fromName(s.referenceValue))}class R$ extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rp(n)&&ea(n.arrayValue,this.value)}}class N$ extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ea(this.value.arrayValue,n)}}class P$ extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ea(this.value.arrayValue,n)}}class O$ extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ea(this.value.arrayValue,s))}}/**
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
 */class k${constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function cy(t,e=null,n=[],s=[],i=null,r=null,o=null){return new k$(t,e,n,s,i,r,o)}function Np(t){const e=Ae(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ad(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Qc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ir(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ir(s)).join(",")),e.ce=n}return e.ce}function Pp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!A$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ib(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ly(t.startAt,e.startAt)&&ly(t.endAt,e.endAt)}function bd(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Jc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function D$(t,e,n,s,i,r,o,a){return new Jc(t,e,n,s,i,r,o,a)}function Zc(t){return new Jc(t)}function uy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function x$(t){return t.collectionGroup!==null}function So(t){const e=Ae(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(It.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new Gl(r,s))}),n.has(It.keyField().canonicalString())||e.le.push(new Gl(It.keyField(),s))}return e.le}function $n(t){const e=Ae(t);return e.he||(e.he=L$(e,So(t))),e.he}function L$(t,e){if(t.limitType==="F")return cy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Gl(i.field,r)});const n=t.endAt?new zl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new zl(t.startAt.position,t.startAt.inclusive):null;return cy(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Id(t,e,n){return new Jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function eu(t,e){return Pp($n(t),$n(e))&&t.limitType===e.limitType}function ab(t){return`${Np($n(t))}|lt:${t.limitType}`}function Bi(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>rb(i)).join(", ")}]`),Qc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Ir(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Ir(i)).join(",")),`Target(${s})`}($n(t))}; limitType=${t.limitType})`}function tu(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):ee.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of So(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=ay(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,So(s),i)||s.endAt&&!function(o,a,l){const c=ay(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,So(s),i))}(t,e)}function M$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lb(t){return(e,n)=>{let s=!1;for(const i of So(t)){const r=V$(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function V$(t,e,n){const s=t.field.isKeyField()?ee.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?br(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ae()}}/**
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
 */class qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xc(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return v$(this.inner)}size(){return this.innerSize}}/**
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
 */const F$=new We(ee.comparator);function Fs(){return F$}const cb=new We(ee.comparator);function co(...t){let e=cb;for(const n of t)e=e.insert(n.key,n);return e}function $$(t){let e=cb;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ri(){return Ro()}function ub(){return Ro()}function Ro(){return new qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const U$=new ft(ee.comparator);function Te(...t){let e=U$;for(const n of t)e=e.add(n);return e}const B$=new ft(Ie);function H$(){return B$}/**
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
 */function j$(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ed(e)?"-0":e}}function q$(t){return{integerValue:""+t}}/**
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
 */class nu{constructor(){this._=void 0}}function W$(t,e,n){return t instanceof Cd?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Cp(r)&&(r=Sp(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Yl?hb(t,e):t instanceof Ql?db(t,e):function(i,r){const o=z$(i,r),a=hy(o)+hy(i.Ie);return wd(o)&&wd(i.Ie)?q$(a):j$(i.serializer,a)}(t,e)}function K$(t,e,n){return t instanceof Yl?hb(t,e):t instanceof Ql?db(t,e):n}function z$(t,e){return t instanceof Sd?function(s){return wd(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Cd extends nu{}class Yl extends nu{constructor(e){super(),this.elements=e}}function hb(t,e){const n=fb(e);for(const s of t.elements)n.some(i=>qn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ql extends nu{constructor(e){super(),this.elements=e}}function db(t,e){let n=fb(e);for(const s of t.elements)n=n.filter(i=>!qn(i,s));return{arrayValue:{values:n}}}class Sd extends nu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function hy(t){return Ye(t.integerValue||t.doubleValue)}function fb(t){return Rp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function G$(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Yl&&i instanceof Yl||s instanceof Ql&&i instanceof Ql?Ar(s.elements,i.elements,qn):s instanceof Sd&&i instanceof Sd?qn(s.Ie,i.Ie):s instanceof Cd&&i instanceof Cd}(t.transform,e.transform)}class di{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new di}static exists(e){return new di(void 0,e)}static updateTime(e){return new di(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Op{}function pb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Q$(t.key,di.none()):new kp(t.key,t.data,di.none());{const n=t.data,s=On.empty();let i=new ft(It.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new su(t.key,s,new Es(i.toArray()),di.none())}}function Y$(t,e,n){t instanceof kp?function(i,r,o){const a=i.value.clone(),l=fy(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof su?function(i,r,o){if(!hl(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=fy(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(mb(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function No(t,e,n,s){return t instanceof kp?function(r,o,a,l){if(!hl(r.precondition,o))return a;const c=r.value.clone(),u=py(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof su?function(r,o,a,l){if(!hl(r.precondition,o))return a;const c=py(r.fieldTransforms,l,o),u=o.data;return u.setAll(mb(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return hl(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function dy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ar(s,i,(r,o)=>G$(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class kp extends Op{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class su extends Op{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function mb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function fy(t,e,n){const s=new Map;Qe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,K$(o,a,n[i]))}return s}function py(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,W$(r,o,e))}return s}class Q$ extends Op{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class X${constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Y$(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=No(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=No(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ub();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=pb(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(n,s)=>dy(n,s))&&Ar(this.baseMutations,e.baseMutations,(n,s)=>dy(n,s))}}/**
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
 */class J${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Z${constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ge;function _b(t){if(t===void 0)return is("GRPC error has no .code"),L.UNKNOWN;switch(t){case ze.OK:return L.OK;case ze.CANCELLED:return L.CANCELLED;case ze.UNKNOWN:return L.UNKNOWN;case ze.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ze.INTERNAL:return L.INTERNAL;case ze.UNAVAILABLE:return L.UNAVAILABLE;case ze.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ze.NOT_FOUND:return L.NOT_FOUND;case ze.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ze.ABORTED:return L.ABORTED;case ze.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ze.DATA_LOSS:return L.DATA_LOSS;default:return ae()}}(ge=ze||(ze={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eU(){return new TextEncoder}/**
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
 */const tU=new rr([4294967295,4294967295],0);function my(t){const e=eU().encode(t),n=new i$;return n.update(e),new Uint8Array(n.digest())}function _y(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new rr([n,s],0),new rr([i,r],0)]}class Dp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(s<0)throw new uo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=rr.fromNumber(this.Te)}de(e,n,s){let i=e.add(n.multiply(rr.fromNumber(s)));return i.compare(tU)===1&&(i=new rr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=my(e),[s,i]=_y(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Dp(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=my(e),[s,i]=_y(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class iu{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,ba.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new iu(re.min(),i,new We(Ie),Fs(),Te())}}class ba{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ba(s,n,Te(),Te(),Te())}}/**
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
 */class dl{constructor(e,n,s,i){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=i}}class gb{constructor(e,n){this.targetId=e,this.fe=n}}class yb{constructor(e,n,s=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class gy{constructor(){this.ge=0,this.pe=vy(),this.ye=At.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Te(),n=Te(),s=Te();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ae()}}),new ba(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=vy()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Qe(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class nU{constructor(e){this.Le=e,this.ke=new Map,this.qe=Fs(),this.Qe=yy(),this.Ke=new We(Ie)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,s=e.fe.count,i=this.Ye(n);if(i){const r=i.target;if(bd(r))if(s===0){const o=new ee(r.path);this.We(n,o,yt.newNoDocument(o,re.min()))}else Qe(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=wi(s).toUint8Array()}catch(l){if(l instanceof eb)return wr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Dp(o,i,r)}catch(l){return wr(l instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&bd(a.target)){const l=new ee(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,yt.newNoDocument(l,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let s=Te();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const i=new iu(e,n,this.Ke,this.qe,s);return this.qe=Fs(),this.Qe=yy(),this.Ke=new We(Ie),i}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new gy,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ft(Ie),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new gy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yy(){return new We(ee.comparator)}function vy(){return new We(ee.comparator)}const sU={asc:"ASCENDING",desc:"DESCENDING"},iU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rU={and:"AND",or:"OR"};class oU{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rd(t,e){return t.useProto3Json||Qc(e)?e:{value:e}}function aU(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lU(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function or(t){return Qe(!!t),re.fromTimestamp(function(n){const s=Vs(n);return new Pt(s.seconds,s.nanos)}(t))}function cU(t,e){return function(s){return new $e(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function vb(t){const e=$e.fromString(t);return Qe(Ab(e)),e}function ih(t,e){const n=vb(e);if(n.get(1)!==t.databaseId.projectId)throw new X(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(Eb(n))}function Nd(t,e){return cU(t.databaseId,e)}function uU(t){const e=vb(t);return e.length===4?$e.emptyPath():Eb(e)}function Ey(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Eb(t){return Qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hU(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Qe(u===void 0||typeof u=="string"),At.fromBase64String(u||"")):(Qe(u===void 0||u instanceof Uint8Array),At.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?L.UNKNOWN:_b(c.code);return new X(u,c.message||"")}(o);n=new yb(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ih(t,s.document.name),r=or(s.document.updateTime),o=s.document.createTime?or(s.document.createTime):re.min(),a=new On({mapValue:{fields:s.document.fields}}),l=yt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new dl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ih(t,s.document),r=s.readTime?or(s.readTime):re.min(),o=yt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new dl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ih(t,s.document),r=s.removedTargetIds||[];n=new dl([],r,i,null)}else{if(!("filter"in e))return ae();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Z$(i,r),a=s.targetId;n=new gb(a,o)}}return n}function dU(t,e){return{documents:[Nd(t,e.path)]}}function fU(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Nd(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nd(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return wb(Wn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Hi(h.field),direction:_U(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Rd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function pU(t){let e=uU(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Qe(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=Tb(h);return d instanceof Wn&&sb(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Gl(ji(_.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Qc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new zl(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new zl(f,d)}(n.endAt)),D$(e,i,o,r,a,"F",l,c)}function mU(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ji(n.unaryFilter.field);return Xe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ji(n.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ji(n.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ji(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(ji(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wn.create(n.compositeFilter.filters.map(s=>Tb(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function _U(t){return sU[t]}function gU(t){return iU[t]}function yU(t){return rU[t]}function Hi(t){return{fieldPath:t.canonicalString()}}function ji(t){return It.fromServerFormat(t.fieldPath)}function wb(t){return t instanceof Xe?function(n){if(n.op==="=="){if(oy(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NAN"}};if(ry(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(oy(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NOT_NAN"}};if(ry(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hi(n.field),op:gU(n.op),value:n.value}}}(t):t instanceof Wn?function(n){const s=n.getFilters().map(i=>wb(i));return s.length===1?s[0]:{compositeFilter:{op:yU(n.op),filters:s}}}(t):ae()}function Ab(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ts{constructor(e,n,s,i,r=re.min(),o=re.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vU{constructor(e){this.ut=e}}function EU(t){const e=pU({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Id(e,e.limit,"L"):e}/**
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
 */class TU{constructor(){this.on=new wU}addToCollectionParentIndex(e,n){return this.on.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Ms.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Ms.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class wU{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ft($e.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ft($e.comparator)).toArray()}}/**
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
 */class Cr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Cr(0)}static Nn(){return new Cr(-1)}}/**
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
 */class AU{constructor(){this.changes=new qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class IU{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&No(s.mutation,i,Es.empty(),Pt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Te()){const i=ri();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=co();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ri();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Te()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Fs();const o=Ro(),a=function(){return Ro()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof su)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),No(u.mutation,c,u.mutation.getFieldMask(),Pt.now())):o.set(c.key,Es.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new bU(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ro();let i=new We((o,a)=>o-a),r=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Es.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||Te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=ub();u.forEach(d=>{if(!r.has(d)){const f=pb(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):x$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):P.resolve(ri());let a=-1,l=r;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Te())).next(u=>({batchId:a,changes:$$(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(s=>{let i=co();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=co();return this.indexManager.getCollectionParents(e,r).next(a=>P.forEach(a,l=>{const c=function(h,d){return new Jc(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,yt.newInvalidDocument(u)))});let a=co();return o.forEach((l,c)=>{const u=r.get(l);u!==void 0&&No(u.mutation,c,Es.empty(),Pt.now()),tu(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class CU{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:or(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:EU(i.bundledQuery),readTime:or(i.readTime)}}(n)),P.resolve()}}/**
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
 */class SU{constructor(){this.overlays=new We(ee.comparator),this.lr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ri();return P.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.lt(e,n,r)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.lr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const i=ri(),r=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new We((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ri(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ri(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return P.resolve(a)}lt(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(s.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new J$(n,s));let r=this.lr.get(n);r===void 0&&(r=Te(),this.lr.set(n,r)),this.lr.set(n,r.add(s.key))}}/**
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
 */class xp{constructor(){this.hr=new ft(tt.Pr),this.Ir=new ft(tt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new tt(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new tt(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new ee(new $e([])),s=new tt(n,e),i=new tt(n,e+1),r=[];return this.Ir.forEachInRange([s,i],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new ee(new $e([])),s=new tt(n,e),i=new tt(n,e+1);let r=Te();return this.Ir.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new tt(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class tt{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return ee.comparator(e.key,n.key)||Ie(e.gr,n.gr)}static Tr(e,n){return Ie(e.gr,n.gr)||ee.comparator(e.key,n.key)}}/**
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
 */class RU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ft(tt.Pr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new X$(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new tt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Sr(s),r=i<0?0:i;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new tt(n,0),i=new tt(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([s,i],o=>{const a=this.wr(o.gr);r.push(a)}),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ft(Ie);return n.forEach(i=>{const r=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{s=s.add(a.gr)})}),P.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ee.isDocumentKey(r)||(r=r.child(""));const o=new tt(new ee(r),0);let a=new ft(Ie);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gr)),!0)},o),P.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const i=this.wr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Qe(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return P.forEach(n.mutations,i=>{const r=new tt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new tt(n,0),i=this.yr.firstAfterOrEqual(s);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class NU{constructor(e){this.Cr=e,this.docs=function(){return new We(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let s=Fs();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():yt.newInvalidDocument(i))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Fs();const o=n.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_$(m$(u),s)<=0||(i.has(u.key)||tu(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,n,s,i){ae()}vr(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new PU(this)}getSize(e){return P.resolve(this.size)}}class PU extends AU{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class OU{constructor(e){this.persistence=e,this.Fr=new qr(n=>Np(n),Pp),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Mr=0,this.Or=new xp,this.targetCount=0,this.Nr=Cr.On()}forEachTarget(e,n){return this.Fr.forEach((s,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),P.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Cr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.kn(n),P.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(r).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Or.containsKey(n))}}/**
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
 */class kU{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ip(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new OU(this),this.indexManager=new TU,this.remoteDocumentCache=function(i){return new NU(i)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new vU(n),this.Kr=new CU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new RU(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){K("MemoryPersistence","Starting transaction:",e);const i=new DU(this.Lr.next());return this.referenceDelegate.$r(),s(i).next(r=>this.referenceDelegate.Ur(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Wr(e,n){return P.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class DU extends y${constructor(e){super(),this.currentSequenceNumber=e}}class Lp{constructor(e){this.persistence=e,this.Gr=new xp,this.zr=null}static jr(e){return new Lp(e)}get Hr(){if(this.zr)return this.zr;throw ae()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Hr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,s=>{const i=ee.fromPath(s);return this.Jr(e,i).next(r=>{r||n.removeEntry(i,re.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class Mp{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=i}static Qi(e,n){let s=Te(),i=Te();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Mp(e,n.fromCache,s,i)}}/**
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
 */class xU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class LU{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new xU;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,s,i){return s.documentReadCount<this.Ui?(so()<=he.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(so()<=he.DEBUG&&K("QueryEngine","Query:",Bi(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Wi*i?(so()<=he.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(n))):P.resolve())}zi(e,n){if(uy(n))return P.resolve(null);let s=$n(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Id(n,null,"F"),s=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Te(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,Id(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,s,i){return uy(n)||i.isEqual(re.min())?P.resolve(null):this.Gi.getDocuments(e,s).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,s,i)?P.resolve(null):(so()<=he.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bi(n)),this.Xi(e,o,n,p$(i,-1)).next(a=>a))})}Yi(e,n){let s=new ft(lb(e));return n.forEach((i,r)=>{tu(e,r)&&(s=s.add(r))}),s}Zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(e,n,s){return so()<=he.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Bi(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ms.min(),s)}Xi(e,n,s,i){return this.Gi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class MU{constructor(e,n,s,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new We(Ie),this.ns=new qr(r=>Np(r),Pp),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IU(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function VU(t,e,n,s){return new MU(t,e,n,s)}async function bb(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Te();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ib(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function FU(t,e){const n=Ae(t),s=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(At.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(g,y,E){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(r,f))});let l=Fs(),c=Te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push($U(r,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!s.isEqual(re.min())){const u=n.qr.getLastRemoteSnapshotVersion(r).next(h=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.ts=i,r))}function $U(t,e,n){let s=Te(),i=Te();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Fs();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:i}})}function UU(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.qr.getTargetData(s,e).next(r=>r?(i=r,P.resolve(i)):n.qr.allocateTargetId(s).next(o=>(i=new Ts(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ts.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function Pd(t,e,n){const s=Ae(t),i=s.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Aa(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(i.target)}function Ty(t,e,n){const s=Ae(t);let i=re.min(),r=Te();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=Ae(l),d=h.ns.get(u);return d!==void 0?P.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(s,o,$n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?r:Te())).next(a=>(BU(s,M$(e),a),{documents:a,ls:r})))}function BU(t,e,n){let s=t.rs.get(e)||re.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.rs.set(e,s)}class wy{constructor(){this.activeTargetIds=H$()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HU{constructor(){this.eo=new wy,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new wy,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jU{ro(e){}shutdown(){}}/**
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
 */class Ay{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Za=null;function rh(){return Za===null?Za=function(){return 268435456+Math.round(2147483648*Math.random())}():Za++,"0x"+Za.toString(16)}/**
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
 */const qU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class WU{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const pt="WebChannelConnection";class KU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${i}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get yo(){return!1}wo(n,s,i,r,o){const a=rh(),l=this.So(n,s);K("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,r,o),this.Do(n,l,c,i).then(u=>(K("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw wr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}Co(n,s,i,r,o,a){return this.wo(n,s,i,r,o)}bo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}So(n,s){const i=qU[n];return`${this.mo}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,i){const r=rh();return new Promise((o,a)=>{const l=new s$;l.setWithCredentials(!0),l.listenOnce(t$.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case nh.NO_ERROR:const u=l.getResponseJson();K(pt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case nh.TIMEOUT:K(pt,`RPC '${e}' ${r} timed out`),a(new X(L.DEADLINE_EXCEEDED,"Request time out"));break;case nh.HTTP_ERROR:const h=l.getStatus();if(K(pt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(f.status);a(new X(_,f.message))}else a(new X(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new X(L.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{K(pt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);K(pt,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}vo(e,n,s){const i=rh(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZF(),a=e$(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");K(pt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const _=new WU({co:y=>{f?K(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(K(pt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),K(pt,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},lo:()=>h.close()}),g=(y,E,C)=>{y.listen(E,w=>{try{C(w)}catch(T){setTimeout(()=>{throw T},0)}})};return g(h,Qa.EventType.OPEN,()=>{f||K(pt,`RPC '${e}' stream ${i} transport opened.`)}),g(h,Qa.EventType.CLOSE,()=>{f||(f=!0,K(pt,`RPC '${e}' stream ${i} transport closed`),_.Ro())}),g(h,Qa.EventType.ERROR,y=>{f||(f=!0,wr(pt,`RPC '${e}' stream ${i} transport errored:`,y),_.Ro(new X(L.UNAVAILABLE,"The operation could not be completed")))}),g(h,Qa.EventType.MESSAGE,y=>{var E;if(!f){const C=y.data[0];Qe(!!C);const w=C,T=w.error||((E=w[0])===null||E===void 0?void 0:E.error);if(T){K(pt,`RPC '${e}' stream ${i} received error:`,T);const x=T.status;let R=function(Z){const Y=ze[Z];if(Y!==void 0)return _b(Y)}(x),W=T.message;R===void 0&&(R=L.INTERNAL,W="Unknown error status: "+x+" with message "+T.message),f=!0,_.Ro(new X(R,W)),h.close()}else K(pt,`RPC '${e}' stream ${i} received:`,C),_.Vo(C)}}),g(a,n$.STAT_EVENT,y=>{y.stat===ey.PROXY?K(pt,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===ey.NOPROXY&&K(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function oh(){return typeof document<"u"?document:null}/**
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
 */function Cb(t){return new oU(t,!0)}/**
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
 */class Sb{constructor(e,n,s=1e3,i=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=i,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-s);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class zU{constructor(e,n,s,i,r,o,a,l){this.si=e,this.Ko=s,this.$o=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Sb(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(is(n.toString()),is("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Uo===n&&this.s_(s,i)},s=>{e(()=>{const i=new X(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(i)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{s(()=>this.o_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GU extends zU{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=hU(this.serializer,e),s=function(r){if(!("targetChange"in r))return re.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?or(o.readTime):re.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=Ey(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=bd(l)?{documents:dU(r,l)}:{query:fU(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=lU(r,o.resumeToken);const c=Rd(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=aU(r,o.snapshotVersion.toTimestamp());const c=Rd(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=mU(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=Ey(this.serializer),n.removeTarget=e,this.e_(n)}}/**
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
 */class YU extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new X(L.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.wo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(L.UNKNOWN,i.toString())})}Co(e,n,s,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new X(L.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class QU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(is(n),this.f_=!1):K("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class XU{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{s.enqueueAndForget(async()=>{Ca(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Ae(l);c.C_.add(4),await Ia(c),c.M_.set("Unknown"),c.C_.delete(4),await ru(c)}(this))})}),this.M_=new QU(s,i)}}async function ru(t){if(Ca(t))for(const e of t.v_)await e(!0)}async function Ia(t){for(const e of t.v_)await e(!1)}function Rb(t,e){const n=Ae(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),$p(n)?Fp(n):Wr(n).Ho()&&Vp(n,e))}function Nb(t,e){const n=Ae(t),s=Wr(n);n.D_.delete(e),s.Ho()&&Pb(n,e),n.D_.size===0&&(s.Ho()?s.Zo():Ca(n)&&n.M_.set("Unknown"))}function Vp(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wr(t).u_(e)}function Pb(t,e){t.x_.Oe(e),Wr(t).c_(e)}function Fp(t){t.x_=new nU({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Wr(t).start(),t.M_.g_()}function $p(t){return Ca(t)&&!Wr(t).jo()&&t.D_.size>0}function Ca(t){return Ae(t).C_.size===0}function Ob(t){t.x_=void 0}async function JU(t){t.D_.forEach((e,n)=>{Vp(t,e)})}async function ZU(t,e){Ob(t),$p(t)?(t.M_.w_(e),Fp(t)):t.M_.set("Unknown")}async function e4(t,e,n){if(t.M_.set("Online"),e instanceof yb&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(s){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await by(t,s)}else if(e instanceof dl?t.x_.$e(e):e instanceof gb?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(re.min()))try{const s=await Ib(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.D_.get(c);u&&r.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.D_.get(l);if(!u)return;r.D_.set(l,u.withResumeToken(At.EMPTY_BYTE_STRING,u.snapshotVersion)),Pb(r,l);const h=new Ts(u.target,l,c,u.sequenceNumber);Vp(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){K("RemoteStore","Failed to raise snapshot:",s),await by(t,s)}}async function by(t,e,n){if(!Aa(e))throw e;t.C_.add(1),await Ia(t),t.M_.set("Offline"),n||(n=()=>Ib(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await ru(t)})}async function Iy(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const s=Ca(n);n.C_.add(3),await Ia(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await ru(n)}async function t4(t,e){const n=Ae(t);e?(n.C_.delete(2),await ru(n)):e||(n.C_.add(2),await Ia(n),n.M_.set("Unknown"))}function Wr(t){return t.O_||(t.O_=function(n,s,i){const r=Ae(n);return r.A_(),new GU(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{ho:JU.bind(null,t),Io:ZU.bind(null,t),a_:e4.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),$p(t)?Fp(t):t.M_.set("Unknown")):(await t.O_.stop(),Ob(t))})),t.O_}/**
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
 */class Up{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Up(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kb(t,e){if(is("AsyncQueue",`${e}: ${t}`),Aa(t))return new X(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ar{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ee.comparator(n.key,s.key):(n,s)=>ee.comparator(n.key,s.key),this.keyedMap=co(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ar;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Cy{constructor(){this.B_=new We(ee.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ae():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Sr{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Sr(e,n,ar.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class n4{constructor(){this.k_=void 0,this.listeners=[]}}class s4{constructor(){this.queries=new qr(e=>ab(e),eu),this.onlineState="Unknown",this.q_=new Set}}async function Bp(t,e){const n=Ae(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new n4),i)try{r.k_=await n.onListen(s)}catch(o){const a=kb(o,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&jp(n)}async function Hp(t,e){const n=Ae(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function i4(t,e){const n=Ae(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(i)&&(s=!0);o.k_=i}}s&&jp(n)}function r4(t,e,n){const s=Ae(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function jp(t){t.q_.forEach(e=>{e.next()})}class qp{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Sr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class Db{constructor(e){this.key=e}}class xb{constructor(e){this.key=e}}class o4{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Te(),this.mutatedKeys=Te(),this._a=lb(e),this.aa=new ar(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new Cy,i=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=tu(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?_!==g&&(s.track({type:3,doc:f}),y=!0):this.ha(d,f)||(s.track({type:2,doc:f}),y=!0,(l&&this._a(f,l)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),y=!0):d&&!f&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{aa:o,la:s,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,_){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return g(f)-g(_)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(s),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new Sr(this.query,e.aa,r,o,e.mutatedKeys,l===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Cy,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Te(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new xb(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new Db(s))}),n}da(e){this.ia=e.ls,this.oa=Te();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Sr.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class a4{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class l4{constructor(e){this.key=e,this.Ra=!1}}class c4{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new qr(a=>ab(a),eu),this.fa=new Map,this.ga=new Set,this.pa=new We(ee.comparator),this.ya=new Map,this.wa=new xp,this.Sa={},this.ba=new Map,this.Da=Cr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function u4(t,e){const n=g4(t);let s,i;const r=n.ma.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Aa();else{const o=await UU(n.localStore,$n(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await h4(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Rb(n.remoteStore,o)}return i}async function h4(t,e,n,s,i){t.va=(h,d,f)=>async function(g,y,E,C){let w=y.view.ca(E);w.Zi&&(w=await Ty(g.localStore,y.query,!1).then(({documents:W})=>y.view.ca(W,w)));const T=C&&C.targetChanges.get(y.targetId),x=C&&C.targetMismatches.get(y.targetId)!=null,R=y.view.applyChanges(w,g.isPrimaryClient,T,x);return Ry(g,y.targetId,R.Ta),R.snapshot}(t,h,d,f);const r=await Ty(t.localStore,e,!0),o=new o4(e,r.ls),a=o.ca(r.documents),l=ba.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Ry(t,n,c.Ta);const u=new a4(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function d4(t,e){const n=Ae(t),s=n.ma.get(e),i=n.fa.get(s.targetId);if(i.length>1)return n.fa.set(s.targetId,i.filter(r=>!eu(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Pd(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Nb(n.remoteStore,s.targetId),Od(n,s.targetId)}).catch(bp)):(Od(n,s.targetId),await Pd(n.localStore,s.targetId,!0))}async function Lb(t,e){const n=Ae(t);try{const s=await FU(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ya.get(r);o&&(Qe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Qe(o.Ra):i.removedDocuments.size>0&&(Qe(o.Ra),o.Ra=!1))}),await Vb(n,s,e)}catch(s){await bp(s)}}function Sy(t,e,n){const s=Ae(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Ae(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&jp(l)}(s.eventManager,e),i.length&&s.Va.a_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function f4(t,e,n){const s=Ae(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ya.get(e),r=i&&i.key;if(r){let o=new We(ee.comparator);o=o.insert(r,yt.newNoDocument(r,re.min()));const a=Te().add(r),l=new iu(re.min(),new Map,new We(Ie),o,a);await Lb(s,l),s.pa=s.pa.remove(r),s.ya.delete(e),Wp(s)}else await Pd(s.localStore,e,!1).then(()=>Od(s,e,n)).catch(bp)}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||Mb(t,s)})}function Mb(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Nb(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Wp(t))}function Ry(t,e,n){for(const s of n)s instanceof Db?(t.wa.addReference(s.key,e),p4(t,s)):s instanceof xb?(K("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||Mb(t,s.key)):ae()}function p4(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(K("SyncEngine","New document in limbo: "+n),t.ga.add(s),Wp(t))}function Wp(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new ee($e.fromString(e)),s=t.Da.next();t.ya.set(s,new l4(n)),t.pa=t.pa.insert(n,s),Rb(t.remoteStore,new Ts($n(Zc(n.path)),s,"TargetPurposeLimboResolution",Ip._e))}}async function Vb(t,e,n){const s=Ae(t),i=[],r=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Mp.Qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Va.a_(i),await async function(l,c){const u=Ae(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,d=>P.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>P.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Aa(h))throw h;K("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),_=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(_);u.ts=u.ts.insert(d,g)}}}(s.localStore,r))}async function m4(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const s=await bb(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(l=>{l.reject(new X(L.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Vb(n,s._s)}}function _4(t,e){const n=Ae(t),s=n.ya.get(e);if(s&&s.Ra)return Te().add(s.key);{let i=Te();const r=n.fa.get(e);if(!r)return i;for(const o of r){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function g4(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=f4.bind(null,e),e.Va.a_=i4.bind(null,e.eventManager),e.Va.Fa=r4.bind(null,e.eventManager),e}class Ny{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Cb(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return VU(this.persistence,new LU,e.initialUser,this.serializer)}createPersistence(e){return new kU(Lp.jr,this.serializer)}createSharedClientState(e){return new HU}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class y4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Sy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=m4.bind(null,this.syncEngine),await t4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new s4}()}createDatastore(e){const n=Cb(e.databaseInfo.databaseId),s=function(r){return new KU(r)}(e.databaseInfo);return function(r,o,a,l){return new YU(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new XU(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Sy(this.syncEngine,n,0),function(){return Ay.D()?new Ay:new jU}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new c4(i,r,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=Ae(n);K("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await Ia(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):is("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class v4{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=ZA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{K("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(K("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=kb(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ah(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await bb(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await T4(t);K("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Iy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Iy(e.remoteStore,r)),t._onlineComponents=e}function E4(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function T4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await ah(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!E4(n))throw n;wr("Error using user provided cache. Falling back to memory cache: "+n),await ah(t,new Ny)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await ah(t,new Ny);return t._offlineComponents}async function w4(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Py(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Py(t,new y4))),t._onlineComponents}async function Xl(t){const e=await w4(t),n=e.eventManager;return n.onListen=u4.bind(null,e.syncEngine),n.onUnlisten=d4.bind(null,e.syncEngine),n}function A4(t,e,n={}){const s=new Ss;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Kp({next:d=>{o.enqueueAndForget(()=>Hp(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new X(L.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new X(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new qp(Zc(a.path),u,{includeMetadataChanges:!0,J_:!0});return Bp(r,h)}(await Xl(t),t.asyncQueue,e,n,s)),s.promise}function b4(t,e,n={}){const s=new Ss;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Kp({next:d=>{o.enqueueAndForget(()=>Hp(r,h)),d.fromCache&&l.source==="server"?c.reject(new X(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new qp(a,u,{includeMetadataChanges:!0,J_:!0});return Bp(r,h)}(await Xl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function Fb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Oy=new Map;/**
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
 */function $b(t,e,n){if(!n)throw new X(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function I4(t,e,n,s){if(e===!0&&s===!0)throw new X(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ky(t){if(!ee.isDocumentKey(t))throw new X(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dy(t){if(ee.isDocumentKey(t))throw new X(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function C4(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Rs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=C4(t);throw new X(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class xy{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new X(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}I4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ou{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xy(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new r$;switch(s.type){case"firstParty":return new c$(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new X(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Oy.get(n);s&&(K("ComponentProvider","Removing Datastore"),Oy.delete(n),s.terminate())}(this),Promise.resolve()}}function S4(t,e,n,s={}){var i;const r=(t=Rs(t,ou))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=mt.MOCK_USER;else{a=CD(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new X(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(c)}t._authCredentials=new o$(new JA(a,l))}}/**
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
 */class Sa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Sa(this.firestore,e,this._query)}}class vn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class Ns extends Sa{constructor(e,n,s){super(e,n,Zc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new ee(e))}withConverter(e){return new Ns(this.firestore,e,this._path)}}function Ub(t,e,...n){if(t=Hs(t),$b("collection","path",e),t instanceof ou){const s=$e.fromString(e,...n);return Dy(s),new Ns(t,null,s)}{if(!(t instanceof vn||t instanceof Ns))throw new X(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child($e.fromString(e,...n));return Dy(s),new Ns(t.firestore,null,s)}}function R4(t,e,...n){if(t=Hs(t),arguments.length===1&&(e=ZA.newId()),$b("doc","path",e),t instanceof ou){const s=$e.fromString(e,...n);return ky(s),new vn(t,null,new ee(s))}{if(!(t instanceof vn||t instanceof Ns))throw new X(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child($e.fromString(e,...n));return ky(s),new vn(t.firestore,t instanceof Ns?t.converter:null,new ee(s))}}/**
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
 */class N4{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Sb(this,"async_queue_retry"),this.iu=()=>{const n=oh();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=oh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=oh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ss;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Aa(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw is("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Up.createAndSchedule(this,e,n,s,r=>this.au(r));return this.Xa.push(i),i}su(){this.eu&&ae()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Ly(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ta extends ou{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new N4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Bb(this),this._firestoreClient.terminate()}}function P4(t,e){const n=typeof t=="object"?t:ET(),s=typeof t=="string"?t:e||"(default)",i=xx(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=bD("firestore");r&&S4(i,...r)}return i}function zp(t){return t._firestoreClient||Bb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bb(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new T$(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Fb(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new v4(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Jl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jl(At.fromBase64String(e))}catch(n){throw new X(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jl(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Hb{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jb{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}const O4=new RegExp("[~\\*/\\[\\]]");function k4(t,e,n){if(e.search(O4)>=0)throw My(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hb(...e.split("."))._internalPath}catch{throw My(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function My(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new X(L.INVALID_ARGUMENT,a+t+l)}/**
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
 */class qb{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new D4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class D4 extends qb{data(){return super.data()}}function Wb(t,e){return typeof e=="string"?k4(t,e):e instanceof Hb?e._internalPath:e._delegate._internalPath}/**
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
 */function Kb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class x4{convertValue(e,n="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Xc(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new jb(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Sp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Jo(e));default:return null}}convertTimestamp(e){const n=Vs(e);return new Pt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=$e.fromString(e);Qe(Ab(s));const i=new Zo(s.get(1),s.get(3)),r=new ee(s.popFirst(5));return i.isEqual(n)||is(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zb extends qb{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Wb("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fl extends zb{data(e={}){return super.data(e)}}class Gb{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ho(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fl(this._firestore,this._userDataWriter,s.key,s,new ho(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new fl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new fl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:L4(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function L4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
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
 */function Yb(t){t=Rs(t,vn);const e=Rs(t.firestore,ta);return A4(zp(e),t._key).then(n=>Qb(e,t,n))}class Gp extends x4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jl(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,n)}}function M4(t){t=Rs(t,Sa);const e=Rs(t.firestore,ta),n=zp(e),s=new Gp(e);return Kb(t._query),b4(n,t._query).then(i=>new Gb(e,s,t,i))}function Yp(t,...e){var n,s,i;t=Hs(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ly(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ly(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof vn)c=Rs(t.firestore,ta),u=Zc(t._key.path),l={next:h=>{e[o]&&e[o](Qb(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Rs(t,Sa);c=Rs(h.firestore,ta),u=h._query;const d=new Gp(c);l={next:f=>{e[o]&&e[o](new Gb(c,d,h,f))},error:e[o+1],complete:e[o+2]},Kb(t._query)}return function(d,f,_,g){const y=new Kp(g),E=new qp(f,y,_);return d.asyncQueue.enqueueAndForget(async()=>Bp(await Xl(d),E)),()=>{y.Na(),d.asyncQueue.enqueueAndForget(async()=>Hp(await Xl(d),E))}}(zp(c),u,a,l)}function Qb(t,e,n){const s=n.docs.get(e._key),i=new Gp(t);return new zb(t,i,e._key,s,new ho(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){jr=i})(Vr),jn(new Tn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new ta(new a$(s.getProvider("auth-internal")),new h$(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new X(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zo(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),jt(ty,"4.4.0",e),jt(ty,"4.4.0","esm2017")})();/**
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
 */const Xb="firebasestorage.googleapis.com",V4="storageBucket",F4=2*60*1e3,$4=10*60*1e3;/**
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
 */class zn extends as{constructor(e,n,s=0){super(lh(e),`Firebase Storage: ${n} (${lh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Kn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Kn||(Kn={}));function lh(t){return"storage/"+t}function U4(){const t="An unknown error occurred, please check the error payload for server response.";return new zn(Kn.UNKNOWN,t)}function B4(){return new zn(Kn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function H4(){return new zn(Kn.CANCELED,"User canceled the upload/download.")}function j4(t){return new zn(Kn.INVALID_URL,"Invalid URL '"+t+"'.")}function q4(t){return new zn(Kn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Vy(t){return new zn(Kn.INVALID_ARGUMENT,t)}function Jb(){return new zn(Kn.APP_DELETED,"The Firebase app was deleted.")}function W4(t){return new zn(Kn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class _n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=_n.makeFromUrl(e,n)}catch{return new _n(e,"")}if(s.path==="")return s;throw q4(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},g=n===Xb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",E=new RegExp(`^https?://${g}/${i}/${y}`,"i"),w=[{regex:a,indices:l,postModify:r},{regex:f,indices:_,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<w.length;T++){const x=w[T],R=x.regex.exec(e);if(R){const W=R[x.indices.bucket];let M=R[x.indices.path];M||(M=""),s=new _n(W,M),x.postModify(s);break}}if(s==null)throw j4(e);return s}}class K4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function z4(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...E){if(c){d();return}if(y){d(),u.call(null,y,...E);return}if(l()||o){d(),u.call(null,y,...E);return}s<64&&(s*=2);let w;a===1?(a=2,w=0):w=(s+Math.random())*1e3,h(w)}let _=!1;function g(y){_||(_=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function G4(t){t(!1)}/**
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
 */function Y4(t){return t!==void 0}function Fy(t,e,n,s){if(s<e)throw Vy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Vy(`Invalid value for '${t}'. Expected ${n} or less.`)}function Q4(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Zl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zl||(Zl={}));/**
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
 */function X4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class J4{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,_)=>{this.resolve_=f,this.reject_=_,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new el(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Zl.NO_ERROR,l=r.getStatus();if(!a||X4(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Zl.ABORT;s(!1,new el(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new el(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Y4(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=U4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Jb():H4();o(l)}else{const l=B4();o(l)}};this.canceled_?n(!1,new el(!1,null,!0)):this.backoffId_=z4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&G4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class el{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Z4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function sB(t,e,n,s,i,r,o=!0){const a=Q4(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return tB(c,e),Z4(c,n),eB(c,r),nB(c,s),new J4(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function iB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rB(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ec{constructor(e,n){this._service=e,n instanceof _n?this._location=n:this._location=_n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ec(e,n)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rB(this._location.path)}get storage(){return this._service}get parent(){const e=iB(this._location.path);if(e===null)return null;const n=new _n(this._location.bucket,e);return new ec(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw W4(e)}}function $y(t,e){const n=e==null?void 0:e[V4];return n==null?null:_n.makeFromBucketSpec(n,t)}class oB{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Xb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=F4,this._maxUploadRetryTime=$4,this._requests=new Set,i!=null?this._bucket=_n.makeFromBucketSpec(i,this._host):this._bucket=$y(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=$y(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ec(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new K4(Jb());{const o=sB(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Uy="@firebase/storage",By="0.12.0";/**
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
 */const aB="storage";function lB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new oB(n,s,i,e,Vr)}function cB(){jn(new Tn(aB,lB,"PUBLIC").setMultipleInstances(!0)),jt(Uy,By,""),jt(Uy,By,"esm2017")}cB();const ch=new WeakMap;function Zb(t,e){return ch.has(e)||ch.set(e,t||{f:{},r:{},s:{},u:{}}),ch.get(e)}function uB(t,e,n,s){if(!t)return n;const[i,r]=eI(t);if(!i)return n;const o=Zb(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function hB(t,e,n,s){if(!t)return;const[i,r]=eI(t);if(!i)return;const o=Zb(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(kn),a}function eI(t){return l1(t)||c1(t)?["f",t.path]:u1(t)?["r",t.toString()]:h1(t)?["s",t.toString()]:[]}const uh=new WeakMap;function dB(t,e,n){const s=VT();uh.has(s)||uh.set(s,new Map);const i=uh.get(s),r=hB(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):kn}const fB={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function kd(t,e,n,s){if(!o1(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const _=Object.getOwnPropertyDescriptor(a,f);_&&!_.enumerable&&Object.defineProperty(h,f,_)});for(const f in a){const _=a[f];if(_==null||_ instanceof Date||_ instanceof Pt||_ instanceof jb)h[f]=_;else if(Df(_)){const g=c+f;h[f]=g in n?l[f]:_.path,d[g]=_.converter?_:_.withConverter(s.converter)}else if(Array.isArray(_)){h[f]=Array(_.length);for(let g=0;g<_.length;g++){const y=_[g];y&&y.path in r&&(h[f][g]=r[y.path])}o(_,l[f]||h[f],c+f+".",[h[f],d])}else Ri(_)?(h[f]={},o(_,l[f],c+f+".",[h[f],d])):h[f]=_}}return o(t,e,"",i),i}const Qp={reset:!1,wait:!0,maxRefDepth:2,converter:fB,snapshotOptions:{serverTimestamps:"estimate"}};function tc(t){for(const e in t)t[e].unsub()}function Dd(t,e,n,s,i,r,o,a,l){const[c,u]=kd(s.data(t.snapshotOptions),kf(e,n),i,t);r.set(e,n,c),xd(t,e,n,i,u,r,o,a,l)}function pB({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=kn;return a.once?Yb(t).then(u=>{u.exists()?Dd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Yp(t,u=>{u.exists()?Dd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),tc(l)}}function xd(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(g=>c.indexOf(g)<0).forEach(g=>{s[g].unsub(),delete s[g]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function _(g){g in f&&++h>=d&&a(n)}c.forEach(g=>{const y=s[g],E=i[g],C=`${n}.${g}`;if(f[C]=!0,y)if(y.path!==E.path)y.unsub();else return;s[g]={data:()=>kf(e,C),unsub:pB({ref:E,target:e,path:C,depth:o,ops:r,resolve:_.bind(null,C),reject:l},t),path:E.path}})}function mB(t,e,n,s,i,r){const o=Object.assign({},Qp,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Ji(c?[]:t.value);c||n.set(t,h,[]);const f=s;let _,g=kn;const y=[],E={added:({newIndex:w,doc:T})=>{y.splice(w,0,Object.create(null));const x=y[w],[R,W]=kd(T.data(l),void 0,x,o);n.add(Yn(d),w,R),xd(o,d,`${h}.${w}`,x,W,n,0,s.bind(null,T),i)},modified:({oldIndex:w,newIndex:T,doc:x})=>{const R=Yn(d),W=y[w],M=R[w],[Z,Y]=kd(x.data(l),M,W,o);y.splice(T,0,W),n.remove(R,w),n.add(R,T,Z),xd(o,d,`${h}.${T}`,W,Y,n,0,s,i)},removed:({oldIndex:w})=>{const T=Yn(d);n.remove(T,w),tc(y.splice(w,1)[0])}};function C(w){const T=w.docChanges(a);if(!_&&T.length){_=!0;let x=0;const R=T.length,W=Object.create(null);for(let M=0;M<R;M++)W[T[M].doc.id]=!0;s=M=>{M&&M.id in W&&++x>=R&&(c&&(n.set(t,h,Yn(d)),d=t),f(Yn(d)),s=kn)}}T.forEach(x=>{E[x.type](x)}),T.length||(c&&(n.set(t,h,Yn(d)),d=t),s(Yn(d)))}return u?M4(e).then(C).catch(i):g=Yp(e,C,i),w=>{if(g(),w){const T=typeof w=="function"?w():[];n.set(t,h,T)}y.forEach(tc)}}function _B(t,e,n,s,i,r){const o=Object.assign({},Qp,r),a="value",l=Object.create(null);s=d1(s,()=>kf(t,a));let c=kn;function u(h){h.exists()?Dd(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?Yb(e).then(u).catch(i):c=Yp(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}tc(l)}}const Hy=Symbol();function tI(t,e){let n=kn;const s=Object.assign({},Qp,e),i=Yn(t),r=s.target||Ji();p1()&&(s.once=!0);const o=uB(i,s.ssrKey,Hy,VT()),a=o!==Hy;a&&(r.value=o);let l=!a;const c=Ji(!1),u=Ji(),h=mE(),d=Xv();let f=kn;function _(){let E=Yn(t);const C=new Promise((w,T)=>{if(n(s.reset),!E)return n=kn,w(null);c.value=l,l=!0,E.converter||(E=E.withConverter(s.converter)),n=(Df(E)?_B:mB)(r,E,gB,w,T,s)}).catch(w=>(h.value===C&&(u.value=w),Promise.reject(w))).finally(()=>{h.value===C&&(c.value=!1)});h.value=C}let g=kn;Ot(t)&&(g=mo(t,_)),_(),i&&(f=dB(h.value,i,s.ssrKey)),Ef()&&LE(()=>h.value),d&&yN(y);function y(E=s.reset){g(),f(),n(E)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>y}})}const gB={set:(t,e,n)=>i1(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function yB(t,e){return tI(t,{target:Ji([]),...e})}function vB(t,e){return tI(t,e)}const EB=vT({apiKey:"AIzaSyBpcciTXyAJMjikhFjBpeve9PmhpkWU4CM",authDomain:"fruuters.firebaseapp.com",projectId:"fruuters",storageBucket:"fruuters.appspot.com",messagingSenderId:"451851486618",appId:"1:451851486618:web:45292e6b65e699a536e623",measurementId:"G-649Y2M0QB5"}),Xp=P4(EB);Ub(Xp,"todos");const TB={components:{ListItem:aT,Hero:xr},data(){return{products:yB(Ub(Xp,"products"))}},computed:{discountedProducts(){return this.products.filter(t=>t.discount!==0)}}},wB={class:"container mt-5"},AB=V("h1",{class:"display-5 pt-5 m-5 fw-bold fst-italic"},"Today's pick",-1),bB={class:"w-100 text-center"};function IB(t,e,n,s,i,r){const o=Nt("Hero"),a=Nt("ListItem"),l=Nt("RouterLink");return Ue(),ht("div",null,[de(o,{text1:"get your own",text2:"fruits more easier!",img_url:"https://th.bing.com/th/id/OIP.c6Tbz7IbCn9bVXzXQSOqhgHaFN?rs=1&pid=ImgDetMain"}),V("main",wB,[(Ue(!0),ht(Qt,null,Ym(r.discountedProducts,(c,u)=>(Ue(),mi(a,{key:c.id,product_id:c.id,title:c.title,img_url:c.img_url,index:u,price:c.price,description:c.description,limited:!0,discount:c.discount,produced_in:c.produced_in,product_stock:c.product_stock,production_capacity:c.production_capacity},null,8,["product_id","title","img_url","index","price","description","discount","produced_in","product_stock","production_capacity"]))),128)),AB,(Ue(!0),ht(Qt,null,Ym(i.products,(c,u)=>(Ue(),mi(a,{key:c.id,product_id:c.id,title:c.title,img_url:c.img_url,index:u,price:c.price,description:c.description,discount:c.discount,produced_in:c.produced_in,product_stock:c.product_stock,production_capacity:c.production_capacity},null,8,["product_id","title","img_url","index","price","description","discount","produced_in","product_stock","production_capacity"]))),128)),V("div",bB,[de(l,{to:"/",class:"btn btn-nav btn-lg"},{default:Lt(()=>[Ge(" See More ")]),_:1})])])])}const jy=In(TB,[["render",IB]]),CB={components:{Hero:xr}},SB=yf('<div class="row container m-auto justify-content-center mt-5"><div class="col-md-8 order-md-1"><form class="needs-validation" novalidate=""><div class="row"><div class="col-md-6 mb-3"><label for="firstName">First name</label><input type="text" class="form-control" id="firstName" placeholder="" value="" required=""><div class="invalid-feedback">Valid first name is required.</div></div><div class="col-md-6 mb-3"><label for="lastName">Last name</label><input type="text" class="form-control" id="lastName" placeholder="" value="" required=""><div class="invalid-feedback">Valid last name is required.</div></div></div><div class="mb-3"><label for="username">Username</label><div class="input-group"><div class="input-group-prepend"><span class="input-group-text">@</span></div><input type="text" class="form-control" id="username" placeholder="Username" required=""><div class="invalid-feedback" style="width:100%;">Your username is required.</div></div></div><div class="mb-3"><label for="email">Email <span class="text-muted">(Optional)</span></label><input type="email" class="form-control" id="email" placeholder="you@example.com"><div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div></div><div class="mb-3"><label for="address">Address</label><input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""><div class="invalid-feedback">Please enter your shipping address.</div></div><div class="mb-3"><label for="address2">Address 2 <span class="text-muted">(Optional)</span></label><input type="text" class="form-control" id="address2" placeholder="Apartment or suite"></div><div class="row"><div class="col-md-5 mb-3"><label for="country">Country</label><select class="custom-select d-block w-100" id="country" required=""><option value="">Choose...</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div><div class="col-md-4 mb-3"><label for="state">State</label><select class="custom-select d-block w-100" id="state" required=""><option value="">Choose...</option><option>California</option></select><div class="invalid-feedback">Please provide a valid state.</div></div><div class="col-md-3 mb-3"><label for="zip">Zip</label><input type="text" class="form-control" id="zip" placeholder="" required=""><div class="invalid-feedback">Zip code required.</div></div></div><hr class="mb-4"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="same-address"><label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label></div><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="save-info"><label class="custom-control-label" for="save-info">Save this information for next time</label></div><hr class="mb-4"><h4 class="mb-3">Payment</h4><div class="d-block my-3"><div class="custom-control custom-radio"><input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required=""><label class="custom-control-label" for="credit">Credit card</label></div><div class="custom-control custom-radio"><input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required=""><label class="custom-control-label" for="debit">Debit card</label></div><div class="custom-control custom-radio"><input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""><label class="custom-control-label" for="paypal">Paypal</label></div></div><div class="row"><div class="col-md-6 mb-3"><label for="cc-name">Name on card</label><input type="text" class="form-control" id="cc-name" placeholder="" required=""><small class="text-muted">Full name as displayed on card</small><div class="invalid-feedback">Name on card is required</div></div><div class="col-md-6 mb-3"><label for="cc-number">Credit card number</label><input type="text" class="form-control" id="cc-number" placeholder="" required=""><div class="invalid-feedback">Credit card number is required</div></div></div><div class="row"><div class="col-md-3 mb-3"><label for="cc-expiration">Expiration</label><input type="text" class="form-control" id="cc-expiration" placeholder="" required=""><div class="invalid-feedback">Expiration date required</div></div><div class="col-md-3 mb-3"><label for="cc-expiration">CVV</label><input type="text" class="form-control" id="cc-cvv" placeholder="" required=""><div class="invalid-feedback">Security code required</div></div></div><hr class="mb-4"><button type="button" class="btn btn-primary rounded-pill rounded-5 px-3 border-0"> Save </button></form></div></div>',1);function RB(t,e,n,s,i,r){const o=Nt("Hero");return Ue(),ht("div",null,[de(o,{text1:"Account"}),SB])}const NB=In(CB,[["render",RB]]),PB={components:{ListItem:aT,Hero:xr},setup(){const e=zk().params.productId;return{product:vB(R4(Xp,"products",e)).data}},methods:{getText1(t){return t.split("(")[0].trim()},getText2(t){const e=t.split("(")[1];return e?e.slice(0,-1).trim():""}}},OB={class:"container mt-5"},kB={class:"text-center"};function DB(t,e,n,s,i,r){const o=Nt("Hero"),a=Nt("ListItem"),l=Nt("RouterLink");return Ue(),ht("div",null,[de(o,{text1:r.getText1(s.product.title),text2:r.getText2(s.product.title),price:s.product.price,img_url:s.product.img_url},null,8,["text1","text2","price","img_url"]),V("main",OB,[(Ue(),mi(a,{key:s.product.id,product_id:s.product.id,title:s.product.title,img_url:s.product.img_url,index:0,price:s.product.price,description:s.product.description,discount:s.product.discount,buy_now:"true",produced_in:s.product.produced_in,product_stock:s.product.product_stock,production_capacity:s.product.production_capacity},null,8,["product_id","title","img_url","price","description","discount","produced_in","product_stock","production_capacity"])),V("div",kB,[de(l,{to:"/",class:"btn btn-nav"},{default:Lt(()=>[Ge("Go Back")]),_:1})])])])}const xB=In(PB,[["render",DB]]),LB={components:{Hero:xr}},MB=V("div",{class:"container mt-5"},[V("div",{class:"row"},[V("div",{class:"col-md-5 mr-auto"},[V("p",{class:"mb-5"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem corrupti asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor labore expedita illum iusto, aut repellat fuga! "),V("ul",{class:"list-unstyled pl-md-5 mb-5"},[V("li",{class:"d-flex text-black mb-2"},[V("span",{class:"mr-3"},[V("span",{class:"icon-map"})]),Ge(" Jl. Lorem Ipsum No. 99, Banyuwangi,"),V("br"),Ge(" Indonesia ")]),V("li",{class:"d-flex text-black mb-2"},[V("span",{class:"mr-3"},[V("span",{class:"icon-phone"})]),Ge(" +62 8123 4567 890 ")]),V("li",{class:"d-flex text-black"},[V("span",{class:"mr-3"},[V("span",{class:"icon-envelope-o"})]),V("a",{href:"/cdn-cgi/l/email-protection",class:"__cf_email__","data-cfemail":"422b2c242d022f3b352720312b36276c212d2f"},"fruuters@gmail.com")])])]),V("div",{class:"col-md-6"},[V("form",{class:"mb-5",method:"post",id:"contactForm",name:"contactForm"},[V("div",{class:"row"},[V("div",{class:"col-md-12 form-group"},[V("label",{for:"name",class:"col-form-label"},"Name"),V("input",{type:"text",class:"form-control",name:"name",id:"name"})])]),V("div",{class:"row"},[V("div",{class:"col-md-12 form-group"},[V("label",{for:"email",class:"col-form-label"},"Email"),V("input",{type:"text",class:"form-control",name:"email",id:"email"})])]),V("div",{class:"row"},[V("div",{class:"col-md-12 form-group"},[V("label",{for:"message",class:"col-form-label"},"Message"),V("textarea",{class:"form-control",name:"message",id:"message",cols:"30",rows:"7"})])]),V("div",{class:"row"},[V("div",{class:"col-md-12"},[V("button",{type:"button",class:"btn btn-primary rounded-pill rounded-5 px-3 border-0"}," Send Message "),V("span",{class:"submitting"})])])]),V("div",{id:"form-message-warning mt-4"})])])],-1);function VB(t,e,n,s,i,r){const o=Nt("Hero");return Ue(),ht("div",null,[de(o,{text1:"Contact Us!"}),MB])}const FB=In(LB,[["render",VB]]),$B={props:{img_url:String,title:String,text:String,route:String}},UB={class:"col-md-4"},BB={class:"card rounded-5"},HB=["src"],jB={class:"card-body"},qB={class:"card-title"},WB={class:"card-text"};function KB(t,e,n,s,i,r){const o=Nt("RouterLink");return Ue(),ht("div",UB,[V("div",BB,[V("img",{src:n.img_url,class:"rounded-top-5"},null,8,HB),V("div",jB,[V("h5",qB,hn(n.title),1),V("p",WB,hn(n.text),1),de(o,{to:n.route,class:"text-white text-decoration-none"},{default:Lt(()=>[Ge("See more")]),_:1},8,["to"])])])])}const zB=In($B,[["render",KB]]),GB={components:{Hero:xr,Card:zB}},YB={class:"container mt-5"},QB={class:"row"};function XB(t,e,n,s,i,r){const o=Nt("Hero"),a=Nt("Card");return Ue(),ht("div",null,[de(o,{text1:"Categories"}),V("div",YB,[V("div",QB,[de(a,{title:"Mangos",text:"Mangos are lorem ipsum dolor",img_url:"https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg",route:"/"}),de(a,{title:"Mangos",text:"Mangos are lorem ipsum dolor",img_url:"https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg",route:"/"}),de(a,{title:"Mangos",text:"Mangos are lorem ipsum dolor",img_url:"https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg",route:"/"})])])])}const JB=In(GB,[["render",XB]]),ZB={components:{Hero:xr}},e2=yf('<div class="container mt-5"><div class="row"><div class="col-md-4 order-md-2 mb-4"><h4 class="d-flex justify-content-between align-items-center mb-3"><span class="text-muted">Your cart</span><span class="badge badge-secondary badge-pill">3</span></h4><ul class="list-group mb-3"><li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">Product name</h6><small class="text-muted">Brief description</small></div><span class="text-muted">$12</span></li><li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">Second product</h6><small class="text-muted">Brief description</small></div><span class="text-muted">$8</span></li><li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">Third item</h6><small class="text-muted">Brief description</small></div><span class="text-muted">$5</span></li><li class="list-group-item d-flex justify-content-between bg-light"><div class="text-success"><h6 class="my-0">Promo code</h6><small>EXAMPLECODE</small></div><span class="text-success">-$5</span></li><li class="list-group-item d-flex justify-content-between"><span>Total (USD)</span><strong>$20</strong></li></ul><form class="card p-2"><div class="input-group"><input type="text" class="form-control" placeholder="Promo code"><div class="input-group-append"><button type="submit" class="btn btn-secondary">Redeem</button></div></div></form></div><div class="col-md-8 order-md-1"><h4 class="mb-3">Billing address</h4><form class="needs-validation" novalidate=""><div class="row"><div class="col-md-6 mb-3"><label for="firstName">First name</label><input type="text" class="form-control" id="firstName" placeholder="" value="" required=""><div class="invalid-feedback">Valid first name is required.</div></div><div class="col-md-6 mb-3"><label for="lastName">Last name</label><input type="text" class="form-control" id="lastName" placeholder="" value="" required=""><div class="invalid-feedback">Valid last name is required.</div></div></div><div class="mb-3"><label for="username">Username</label><div class="input-group"><div class="input-group-prepend"><span class="input-group-text">@</span></div><input type="text" class="form-control" id="username" placeholder="Username" required=""><div class="invalid-feedback" style="width:100%;">Your username is required.</div></div></div><div class="mb-3"><label for="email">Email <span class="text-muted">(Optional)</span></label><input type="email" class="form-control" id="email" placeholder="you@example.com"><div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div></div><div class="mb-3"><label for="address">Address</label><input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""><div class="invalid-feedback">Please enter your shipping address.</div></div><div class="mb-3"><label for="address2">Address 2 <span class="text-muted">(Optional)</span></label><input type="text" class="form-control" id="address2" placeholder="Apartment or suite"></div><div class="row"><div class="col-md-5 mb-3"><label for="country">Country</label><select class="custom-select d-block w-100" id="country" required=""><option value="">Choose...</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div><div class="col-md-4 mb-3"><label for="state">State</label><select class="custom-select d-block w-100" id="state" required=""><option value="">Choose...</option><option>California</option></select><div class="invalid-feedback">Please provide a valid state.</div></div><div class="col-md-3 mb-3"><label for="zip">Zip</label><input type="text" class="form-control" id="zip" placeholder="" required=""><div class="invalid-feedback">Zip code required.</div></div></div><hr class="mb-4"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="same-address"><label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label></div><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="save-info"><label class="custom-control-label" for="save-info">Save this information for next time</label></div><hr class="mb-4"><h4 class="mb-3">Payment</h4><div class="d-block my-3"><div class="custom-control custom-radio"><input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required=""><label class="custom-control-label" for="credit">Credit card</label></div><div class="custom-control custom-radio"><input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required=""><label class="custom-control-label" for="debit">Debit card</label></div><div class="custom-control custom-radio"><input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""><label class="custom-control-label" for="paypal">Paypal</label></div></div><div class="row"><div class="col-md-6 mb-3"><label for="cc-name">Name on card</label><input type="text" class="form-control" id="cc-name" placeholder="" required=""><small class="text-muted">Full name as displayed on card</small><div class="invalid-feedback">Name on card is required</div></div><div class="col-md-6 mb-3"><label for="cc-number">Credit card number</label><input type="text" class="form-control" id="cc-number" placeholder="" required=""><div class="invalid-feedback">Credit card number is required</div></div></div><div class="row"><div class="col-md-3 mb-3"><label for="cc-expiration">Expiration</label><input type="text" class="form-control" id="cc-expiration" placeholder="" required=""><div class="invalid-feedback">Expiration date required</div></div><div class="col-md-3 mb-3"><label for="cc-expiration">CVV</label><input type="text" class="form-control" id="cc-cvv" placeholder="" required=""><div class="invalid-feedback">Security code required</div></div></div><hr class="mb-4"><button class="btn btn-primary btn-lg btn-block" type="submit"> Continue to checkout </button></form></div></div></div>',1);function t2(t,e,n,s,i,r){const o=Nt("Hero");return Ue(),ht("div",null,[de(o,{text1:"Checkout"}),e2])}const n2=In(ZB,[["render",t2]]),s2=Wk({history:lk("/fruuters/"),routes:[{path:"/",name:"home",component:jy},{path:"/offers",name:"offers",component:jy},{path:"/account",name:"account",component:NB},{path:"/product/:productId",name:"product",component:xB},{path:"/contact",name:"contact",component:FB},{path:"/categories",name:"categories",component:JB},{path:"/checkout",name:"checkout",component:n2}],scrollBehavior(t,e,n){return{top:0}}}),nI=wO(qO);nI.use(s2);nI.mount("#app");
