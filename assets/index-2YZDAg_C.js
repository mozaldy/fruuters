(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var Ct="top",Wt="bottom",qt="right",St="left",sc="auto",Rr=[Ct,Wt,qt,St],fi="start",lr="end",jy="clippingParents",Ld="viewport",Vi="popper",Wy="reference",dh=Rr.reduce(function(t,e){return t.concat([e+"-"+fi,e+"-"+lr])},[]),Md=[].concat(Rr,[sc]).reduce(function(t,e){return t.concat([e,e+"-"+fi,e+"-"+lr])},[]),qy="beforeRead",Ky="read",zy="afterRead",Gy="beforeMain",Yy="main",Qy="afterMain",Xy="beforeWrite",Jy="write",Zy="afterWrite",ev=[qy,Ky,zy,Gy,Yy,Qy,Xy,Jy,Zy];function Fn(t){return t?(t.nodeName||"").toLowerCase():null}function Kt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function pi(t){var e=Kt(t).Element;return t instanceof e||t instanceof Element}function tn(t){var e=Kt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Vd(t){if(typeof ShadowRoot>"u")return!1;var e=Kt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function ob(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!tn(r)||!Fn(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function ab(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!tn(i)||!Fn(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const Fd={name:"applyStyles",enabled:!0,phase:"write",fn:ob,effect:ab,requires:["computeStyles"]};function Ln(t){return t.split("-")[0]}var oi=Math.max,_l=Math.min,cr=Math.round;function fh(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function tv(){return!/^((?!chrome|android).)*safari/i.test(fh())}function ur(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&tn(t)&&(i=t.offsetWidth>0&&cr(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&cr(s.height)/t.offsetHeight||1);var o=pi(t)?Kt(t):window,a=o.visualViewport,l=!tv()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,d=s.height/r;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c,x:c,y:u}}function $d(t){var e=ur(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function nv(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Vd(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function ts(t){return Kt(t).getComputedStyle(t)}function lb(t){return["table","td","th"].indexOf(Fn(t))>=0}function $s(t){return((pi(t)?t.ownerDocument:t.document)||window.document).documentElement}function ic(t){return Fn(t)==="html"?t:t.assignedSlot||t.parentNode||(Vd(t)?t.host:null)||$s(t)}function e_(t){return!tn(t)||ts(t).position==="fixed"?null:t.offsetParent}function cb(t){var e=/firefox/i.test(fh()),n=/Trident/i.test(fh());if(n&&tn(t)){var s=ts(t);if(s.position==="fixed")return null}var i=ic(t);for(Vd(i)&&(i=i.host);tn(i)&&["html","body"].indexOf(Fn(i))<0;){var r=ts(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function ta(t){for(var e=Kt(t),n=e_(t);n&&lb(n)&&ts(n).position==="static";)n=e_(n);return n&&(Fn(n)==="html"||Fn(n)==="body"&&ts(n).position==="static")?e:n||cb(t)||e}function Ud(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ho(t,e,n){return oi(t,_l(e,n))}function ub(t,e,n){var s=ho(t,e,n);return s>n?n:s}function sv(){return{top:0,right:0,bottom:0,left:0}}function iv(t){return Object.assign({},sv(),t)}function rv(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var hb=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,iv(typeof e!="number"?e:rv(e,Rr))};function db(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Ln(n.placement),l=Ud(a),c=[St,qt].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var h=hb(i.padding,n),d=$d(r),f=l==="y"?Ct:St,m=l==="y"?Wt:qt,g=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],y=o[l]-n.rects.reference[l],E=ta(r),C=E?l==="y"?E.clientHeight||0:E.clientWidth||0:0,w=g/2-y/2,T=h[f],x=C-d[u]-h[m],R=C/2-d[u]/2+w,q=ho(T,R,x),M=l;n.modifiersData[s]=(e={},e[M]=q,e.centerOffset=q-R,e)}}function fb(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||nv(e.elements.popper,i)&&(e.elements.arrow=i))}const ov={name:"arrow",enabled:!0,phase:"main",fn:db,effect:fb,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function hr(t){return t.split("-")[1]}var pb={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _b(t,e){var n=t.x,s=t.y,i=e.devicePixelRatio||1;return{x:cr(n*i)/i||0,y:cr(s*i)/i||0}}function t_(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,f=d===void 0?0:d,m=o.y,g=m===void 0?0:m,y=typeof u=="function"?u({x:f,y:g}):{x:f,y:g};f=y.x,g=y.y;var E=o.hasOwnProperty("x"),C=o.hasOwnProperty("y"),w=St,T=Ct,x=window;if(c){var R=ta(n),q="clientHeight",M="clientWidth";if(R===Kt(n)&&(R=$s(n),ts(R).position!=="static"&&a==="absolute"&&(q="scrollHeight",M="scrollWidth")),R=R,i===Ct||(i===St||i===qt)&&r===lr){T=Wt;var Z=h&&R===x&&x.visualViewport?x.visualViewport.height:R[q];g-=Z-s.height,g*=l?1:-1}if(i===St||(i===Ct||i===Wt)&&r===lr){w=qt;var Y=h&&R===x&&x.visualViewport?x.visualViewport.width:R[M];f-=Y-s.width,f*=l?1:-1}}var ue=Object.assign({position:a},c&&pb),j=u===!0?_b({x:f,y:g},Kt(n)):{x:f,y:g};if(f=j.x,g=j.y,l){var se;return Object.assign({},ue,(se={},se[T]=C?"0":"",se[w]=E?"0":"",se.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",se))}return Object.assign({},ue,(e={},e[T]=C?g+"px":"",e[w]=E?f+"px":"",e.transform="",e))}function mb(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:Ln(e.placement),variation:hr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,t_(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,t_(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Bd={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mb,data:{}};var Ra={passive:!0};function gb(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=Kt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,Ra)}),a&&l.addEventListener("resize",n.update,Ra),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,Ra)}),a&&l.removeEventListener("resize",n.update,Ra)}}const Hd={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gb,data:{}};var yb={left:"right",right:"left",bottom:"top",top:"bottom"};function tl(t){return t.replace(/left|right|bottom|top/g,function(e){return yb[e]})}var vb={start:"end",end:"start"};function n_(t){return t.replace(/start|end/g,function(e){return vb[e]})}function jd(t){var e=Kt(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Wd(t){return ur($s(t)).left+jd(t).scrollLeft}function Eb(t,e){var n=Kt(t),s=$s(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=tv();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+Wd(t),y:l}}function Tb(t){var e,n=$s(t),s=jd(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=oi(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=oi(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+Wd(t),l=-s.scrollTop;return ts(i||n).direction==="rtl"&&(a+=oi(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function qd(t){var e=ts(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function av(t){return["html","body","#document"].indexOf(Fn(t))>=0?t.ownerDocument.body:tn(t)&&qd(t)?t:av(ic(t))}function fo(t,e){var n;e===void 0&&(e=[]);var s=av(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=Kt(s),o=i?[r].concat(r.visualViewport||[],qd(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(fo(ic(o)))}function ph(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function wb(t,e){var n=ur(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function s_(t,e,n){return e===Ld?ph(Eb(t,n)):pi(e)?wb(e,n):ph(Tb($s(t)))}function Ab(t){var e=fo(ic(t)),n=["absolute","fixed"].indexOf(ts(t).position)>=0,s=n&&tn(t)?ta(t):t;return pi(s)?e.filter(function(i){return pi(i)&&nv(i,s)&&Fn(i)!=="body"}):[]}function Ib(t,e,n,s){var i=e==="clippingParents"?Ab(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=s_(t,c,s);return l.top=oi(u.top,l.top),l.right=_l(u.right,l.right),l.bottom=_l(u.bottom,l.bottom),l.left=oi(u.left,l.left),l},s_(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function lv(t){var e=t.reference,n=t.element,s=t.placement,i=s?Ln(s):null,r=s?hr(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case Ct:l={x:o,y:e.y-n.height};break;case Wt:l={x:o,y:e.y+e.height};break;case qt:l={x:e.x+e.width,y:a};break;case St:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Ud(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case fi:l[c]=l[c]-(e[u]/2-n[u]/2);break;case lr:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function dr(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?jy:a,c=n.rootBoundary,u=c===void 0?Ld:c,h=n.elementContext,d=h===void 0?Vi:h,f=n.altBoundary,m=f===void 0?!1:f,g=n.padding,y=g===void 0?0:g,E=iv(typeof y!="number"?y:rv(y,Rr)),C=d===Vi?Wy:Vi,w=t.rects.popper,T=t.elements[m?C:d],x=Ib(pi(T)?T:T.contextElement||$s(t.elements.popper),l,u,o),R=ur(t.elements.reference),q=lv({reference:R,element:w,strategy:"absolute",placement:i}),M=ph(Object.assign({},w,q)),Z=d===Vi?M:R,Y={top:x.top-Z.top+E.top,bottom:Z.bottom-x.bottom+E.bottom,left:x.left-Z.left+E.left,right:Z.right-x.right+E.right},ue=t.modifiersData.offset;if(d===Vi&&ue){var j=ue[i];Object.keys(Y).forEach(function(se){var Be=[qt,Wt].indexOf(se)>=0?1:-1,it=[Ct,Wt].indexOf(se)>=0?"y":"x";Y[se]+=j[it]*Be})}return Y}function bb(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Md:l,u=hr(s),h=u?a?dh:dh.filter(function(m){return hr(m)===u}):Rr,d=h.filter(function(m){return c.indexOf(m)>=0});d.length===0&&(d=h);var f=d.reduce(function(m,g){return m[g]=dr(t,{placement:g,boundary:i,rootBoundary:r,padding:o})[Ln(g)],m},{});return Object.keys(f).sort(function(m,g){return f[m]-f[g]})}function Cb(t){if(Ln(t)===sc)return[];var e=tl(t);return[n_(t),e,n_(e)]}function Sb(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,m=f===void 0?!0:f,g=n.allowedAutoPlacements,y=e.options.placement,E=Ln(y),C=E===y,w=l||(C||!m?[tl(y)]:Cb(y)),T=[y].concat(w).reduce(function(Vt,Ft){return Vt.concat(Ln(Ft)===sc?bb(e,{placement:Ft,boundary:u,rootBoundary:h,padding:c,flipVariations:m,allowedAutoPlacements:g}):Ft)},[]),x=e.rects.reference,R=e.rects.popper,q=new Map,M=!0,Z=T[0],Y=0;Y<T.length;Y++){var ue=T[Y],j=Ln(ue),se=hr(ue)===fi,Be=[Ct,Wt].indexOf(j)>=0,it=Be?"width":"height",de=dr(e,{placement:ue,boundary:u,rootBoundary:h,altBoundary:d,padding:c}),le=Be?se?qt:St:se?Wt:Ct;x[it]>R[it]&&(le=tl(le));var fe=tl(le),rt=[];if(r&&rt.push(de[j]<=0),a&&rt.push(de[le]<=0,de[fe]<=0),rt.every(function(Vt){return Vt})){Z=ue,M=!1;break}q.set(ue,rt)}if(M)for(var Mt=m?3:1,Pt=function(Ft){var He=T.find(function(I){var U=q.get(I);if(U)return U.slice(0,Ft).every(function(V){return V})});if(He)return Z=He,"break"},Ke=Mt;Ke>0;Ke--){var cn=Pt(Ke);if(cn==="break")break}e.placement!==Z&&(e.modifiersData[s]._skip=!0,e.placement=Z,e.reset=!0)}}const cv={name:"flip",enabled:!0,phase:"main",fn:Sb,requiresIfExists:["offset"],data:{_skip:!1}};function i_(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function r_(t){return[Ct,qt,Wt,St].some(function(e){return t[e]>=0})}function Rb(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=dr(e,{elementContext:"reference"}),a=dr(e,{altBoundary:!0}),l=i_(o,s),c=i_(a,i,r),u=r_(l),h=r_(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const uv={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Rb};function Nb(t,e,n){var s=Ln(t),i=[St,Ct].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[St,qt].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function Pb(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=Md.reduce(function(u,h){return u[h]=Nb(h,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=o}const hv={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Pb};function Ob(t){var e=t.state,n=t.name;e.modifiersData[n]=lv({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Kd={name:"popperOffsets",enabled:!0,phase:"read",fn:Ob,data:{}};function kb(t){return t==="x"?"y":"x"}function Db(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,m=n.tetherOffset,g=m===void 0?0:m,y=dr(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),E=Ln(e.placement),C=hr(e.placement),w=!C,T=Ud(E),x=kb(T),R=e.modifiersData.popperOffsets,q=e.rects.reference,M=e.rects.popper,Z=typeof g=="function"?g(Object.assign({},e.rects,{placement:e.placement})):g,Y=typeof Z=="number"?{mainAxis:Z,altAxis:Z}:Object.assign({mainAxis:0,altAxis:0},Z),ue=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(R){if(r){var se,Be=T==="y"?Ct:St,it=T==="y"?Wt:qt,de=T==="y"?"height":"width",le=R[T],fe=le+y[Be],rt=le-y[it],Mt=f?-M[de]/2:0,Pt=C===fi?q[de]:M[de],Ke=C===fi?-M[de]:-q[de],cn=e.elements.arrow,Vt=f&&cn?$d(cn):{width:0,height:0},Ft=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:sv(),He=Ft[Be],I=Ft[it],U=ho(0,q[de],Vt[de]),V=w?q[de]/2-Mt-U-He-Y.mainAxis:Pt-U-He-Y.mainAxis,z=w?-q[de]/2+Mt+U+I+Y.mainAxis:Ke+U+I+Y.mainAxis,me=e.elements.arrow&&ta(e.elements.arrow),Oe=me?T==="y"?me.clientTop||0:me.clientLeft||0:0,p=(se=ue==null?void 0:ue[T])!=null?se:0,_=le+V-p-Oe,v=le+z-p,b=ho(f?_l(fe,_):fe,le,f?oi(rt,v):rt);R[T]=b,j[T]=b-le}if(a){var A,k=T==="x"?Ct:St,B=T==="x"?Wt:qt,O=R[x],D=x==="y"?"height":"width",N=O+y[k],W=O-y[B],Q=[Ct,St].indexOf(E)!==-1,G=(A=ue==null?void 0:ue[x])!=null?A:0,te=Q?N:O-q[D]-M[D]-G+Y.altAxis,ce=Q?O+q[D]+M[D]-G-Y.altAxis:W,Ie=f&&Q?ub(te,O,ce):ho(f?te:N,O,f?ce:W);R[x]=Ie,j[x]=Ie-O}e.modifiersData[s]=j}}const dv={name:"preventOverflow",enabled:!0,phase:"main",fn:Db,requiresIfExists:["offset"]};function xb(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Lb(t){return t===Kt(t)||!tn(t)?jd(t):xb(t)}function Mb(t){var e=t.getBoundingClientRect(),n=cr(e.width)/t.offsetWidth||1,s=cr(e.height)/t.offsetHeight||1;return n!==1||s!==1}function Vb(t,e,n){n===void 0&&(n=!1);var s=tn(e),i=tn(e)&&Mb(e),r=$s(e),o=ur(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((Fn(e)!=="body"||qd(r))&&(a=Lb(e)),tn(e)?(l=ur(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=Wd(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Fb(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function $b(t){var e=Fb(t);return ev.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function Ub(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function Bb(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var o_={placement:"bottom",modifiers:[],strategy:"absolute"};function a_(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function rc(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?o_:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},o_,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(E){var C=typeof E=="function"?E(u.options):E;g(),u.options=Object.assign({},r,u.options,C),u.scrollParents={reference:pi(a)?fo(a):a.contextElement?fo(a.contextElement):[],popper:fo(l)};var w=$b(Bb([].concat(s,u.options.modifiers)));return u.orderedModifiers=w.filter(function(T){return T.enabled}),m(),f.update()},forceUpdate:function(){if(!d){var E=u.elements,C=E.reference,w=E.popper;if(a_(C,w)){u.rects={reference:Vb(C,ta(w),u.options.strategy==="fixed"),popper:$d(w)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(Y){return u.modifiersData[Y.name]=Object.assign({},Y.data)});for(var T=0;T<u.orderedModifiers.length;T++){if(u.reset===!0){u.reset=!1,T=-1;continue}var x=u.orderedModifiers[T],R=x.fn,q=x.options,M=q===void 0?{}:q,Z=x.name;typeof R=="function"&&(u=R({state:u,options:M,name:Z,instance:f})||u)}}}},update:Ub(function(){return new Promise(function(y){f.forceUpdate(),y(u)})}),destroy:function(){g(),d=!0}};if(!a_(a,l))return f;f.setOptions(c).then(function(y){!d&&c.onFirstUpdate&&c.onFirstUpdate(y)});function m(){u.orderedModifiers.forEach(function(y){var E=y.name,C=y.options,w=C===void 0?{}:C,T=y.effect;if(typeof T=="function"){var x=T({state:u,name:E,instance:f,options:w}),R=function(){};h.push(x||R)}})}function g(){h.forEach(function(y){return y()}),h=[]}return f}}var Hb=rc(),jb=[Hd,Kd,Bd,Fd],Wb=rc({defaultModifiers:jb}),qb=[Hd,Kd,Bd,Fd,hv,cv,dv,ov,uv],zd=rc({defaultModifiers:qb});const fv=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Qy,afterRead:zy,afterWrite:Zy,applyStyles:Fd,arrow:ov,auto:sc,basePlacements:Rr,beforeMain:Gy,beforeRead:qy,beforeWrite:Xy,bottom:Wt,clippingParents:jy,computeStyles:Bd,createPopper:zd,createPopperBase:Hb,createPopperLite:Wb,detectOverflow:dr,end:lr,eventListeners:Hd,flip:cv,hide:uv,left:St,main:Yy,modifierPhases:ev,offset:hv,placements:Md,popper:Vi,popperGenerator:rc,popperOffsets:Kd,preventOverflow:dv,read:Ky,reference:Wy,right:qt,start:fi,top:Ct,variationPlacements:dh,viewport:Ld,write:Jy},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ls=new Map,lu={set(t,e,n){ls.has(t)||ls.set(t,new Map);const s=ls.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return ls.has(t)&&ls.get(t).get(e)||null},remove(t,e){if(!ls.has(t))return;const n=ls.get(t);n.delete(e),n.size===0&&ls.delete(t)}},Kb=1e6,zb=1e3,_h="transitionend",pv=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(e,n)=>`#${CSS.escape(n)}`)),t),Gb=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),Yb=t=>{do t+=Math.floor(Math.random()*Kb);while(document.getElementById(t));return t},Qb=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*zb)},_v=t=>{t.dispatchEvent(new Event(_h))},Xn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Ps=t=>Xn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(pv(t)):null,Nr=t=>{if(!Xn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},Os=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",mv=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?mv(t.parentNode):null},ml=()=>{},na=t=>{t.offsetHeight},gv=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,cu=[],Xb=t=>{document.readyState==="loading"?(cu.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of cu)e()}),cu.push(t)):t()},rn=()=>document.documentElement.dir==="rtl",ln=t=>{Xb(()=>{const e=gv();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},kt=(t,e=[],n=t)=>typeof t=="function"?t(...e):n,yv=(t,e,n=!0)=>{if(!n){kt(t);return}const i=Qb(e)+5;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(_h,o),kt(t))};e.addEventListener(_h,o),setTimeout(()=>{r||_v(e)},i)},Gd=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},Jb=/[^.]*(?=\..*)\.|.*/,Zb=/\..*/,eC=/::\d+$/,uu={};let l_=1;const vv={mouseenter:"mouseover",mouseleave:"mouseout"},tC=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ev(t,e){return e&&`${e}::${l_++}`||t.uidEvent||l_++}function Tv(t){const e=Ev(t);return t.uidEvent=e,uu[e]=uu[e]||{},uu[e]}function nC(t,e){return function n(s){return Yd(s,{delegateTarget:t}),n.oneOff&&S.off(t,s.type,e),e.apply(t,[s])}}function sC(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Yd(i,{delegateTarget:o}),s.oneOff&&S.off(t,i.type,e,n),n.apply(o,[i])}}function wv(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function Av(t,e,n){const s=typeof e=="string",i=s?n:e||n;let r=Iv(t);return tC.has(r)||(r=t),[s,i,r]}function c_(t,e,n,s,i){if(typeof e!="string"||!t)return;let[r,o,a]=Av(e,n,s);e in vv&&(o=(m=>function(g){if(!g.relatedTarget||g.relatedTarget!==g.delegateTarget&&!g.delegateTarget.contains(g.relatedTarget))return m.call(this,g)})(o));const l=Tv(t),c=l[a]||(l[a]={}),u=wv(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=Ev(o,e.replace(Jb,"")),d=r?sC(t,n,o):nC(t,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(a,d,r)}function mh(t,e,n,s,i){const r=wv(e[n],s,i);r&&(t.removeEventListener(n,r,!!i),delete e[n][r.uidEvent])}function iC(t,e,n,s){const i=e[n]||{};for(const[r,o]of Object.entries(i))r.includes(s)&&mh(t,e,n,o.callable,o.delegationSelector)}function Iv(t){return t=t.replace(Zb,""),vv[t]||t}const S={on(t,e,n,s){c_(t,e,n,s,!1)},one(t,e,n,s){c_(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=Av(e,n,s),a=o!==e,l=Tv(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;mh(t,l,o,r,i?n:null);return}if(u)for(const h of Object.keys(l))iC(t,l,h,e.slice(1));for(const[h,d]of Object.entries(c)){const f=h.replace(eC,"");(!a||e.includes(f))&&mh(t,l,o,d.callable,d.delegationSelector)}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=gv(),i=Iv(e),r=e!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());const u=Yd(new Event(e,{bubbles:a,cancelable:!0}),n);return c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Yd(t,e={}){for(const[n,s]of Object.entries(e))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}function u_(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function hu(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Jn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${hu(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${hu(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=u_(t.dataset[s])}return e},getDataAttribute(t,e){return u_(t.getAttribute(`data-bs-${hu(e)}`))}};class sa{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=Xn(n)?Jn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...Xn(n)?Jn.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[s,i]of Object.entries(n)){const r=e[s],o=Xn(r)?"element":Gb(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const rC="5.3.2";class An extends sa{constructor(e,n){super(),e=Ps(e),e&&(this._element=e,this._config=this._getConfig(n),lu.set(this._element,this.constructor.DATA_KEY,this))}dispose(){lu.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){yv(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return lu.get(Ps(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return rC}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const du=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?pv(n.trim()):null}return e},J={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Os(n)&&Nr(n))},getSelectorFromElement(t){const e=du(t);return e&&J.findOne(e)?e:null},getElementFromSelector(t){const e=du(t);return e?J.findOne(e):null},getMultipleElementsFromSelector(t){const e=du(t);return e?J.find(e):[]}},oc=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;S.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Os(this))return;const r=J.getElementFromSelector(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},oC="alert",aC="bs.alert",bv=`.${aC}`,lC=`close${bv}`,cC=`closed${bv}`,uC="fade",hC="show";class ac extends An{static get NAME(){return oC}close(){if(S.trigger(this._element,lC).defaultPrevented)return;this._element.classList.remove(hC);const n=this._element.classList.contains(uC);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),S.trigger(this._element,cC),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=ac.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}oc(ac,"close");ln(ac);const dC="button",fC="bs.button",pC=`.${fC}`,_C=".data-api",mC="active",h_='[data-bs-toggle="button"]',gC=`click${pC}${_C}`;class lc extends An{static get NAME(){return dC}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(mC))}static jQueryInterface(e){return this.each(function(){const n=lc.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}S.on(document,gC,h_,t=>{t.preventDefault();const e=t.target.closest(h_);lc.getOrCreateInstance(e).toggle()});ln(lc);const yC="swipe",Pr=".bs.swipe",vC=`touchstart${Pr}`,EC=`touchmove${Pr}`,TC=`touchend${Pr}`,wC=`pointerdown${Pr}`,AC=`pointerup${Pr}`,IC="touch",bC="pen",CC="pointer-event",SC=40,RC={endCallback:null,leftCallback:null,rightCallback:null},NC={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class gl extends sa{constructor(e,n){super(),this._element=e,!(!e||!gl.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return RC}static get DefaultType(){return NC}static get NAME(){return yC}dispose(){S.off(this._element,Pr)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),kt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=SC)return;const n=e/this._deltaX;this._deltaX=0,n&&kt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,wC,e=>this._start(e)),S.on(this._element,AC,e=>this._end(e)),this._element.classList.add(CC)):(S.on(this._element,vC,e=>this._start(e)),S.on(this._element,EC,e=>this._move(e)),S.on(this._element,TC,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===bC||e.pointerType===IC)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const PC="carousel",OC="bs.carousel",Us=`.${OC}`,Cv=".data-api",kC="ArrowLeft",DC="ArrowRight",xC=500,Kr="next",Di="prev",Fi="left",nl="right",LC=`slide${Us}`,fu=`slid${Us}`,MC=`keydown${Us}`,VC=`mouseenter${Us}`,FC=`mouseleave${Us}`,$C=`dragstart${Us}`,UC=`load${Us}${Cv}`,BC=`click${Us}${Cv}`,Sv="carousel",Na="active",HC="slide",jC="carousel-item-end",WC="carousel-item-start",qC="carousel-item-next",KC="carousel-item-prev",Rv=".active",Nv=".carousel-item",zC=Rv+Nv,GC=".carousel-item img",YC=".carousel-indicators",QC="[data-bs-slide], [data-bs-slide-to]",XC='[data-bs-ride="carousel"]',JC={[kC]:nl,[DC]:Fi},ZC={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},eS={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ia extends An{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=J.findOne(YC,this._element),this._addEventListeners(),this._config.ride===Sv&&this.cycle()}static get Default(){return ZC}static get DefaultType(){return eS}static get NAME(){return PC}next(){this._slide(Kr)}nextWhenVisible(){!document.hidden&&Nr(this._element)&&this.next()}prev(){this._slide(Di)}pause(){this._isSliding&&_v(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){S.one(this._element,fu,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){S.one(this._element,fu,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?Kr:Di;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&S.on(this._element,MC,e=>this._keydown(e)),this._config.pause==="hover"&&(S.on(this._element,VC,()=>this.pause()),S.on(this._element,FC,()=>this._maybeEnableCycle())),this._config.touch&&gl.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of J.find(GC,this._element))S.on(s,$C,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(Fi)),rightCallback:()=>this._slide(this._directionToOrder(nl)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),xC+this._config.interval))}};this._swipeHelper=new gl(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=JC[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=J.findOne(Rv,this._indicatorsElement);n.classList.remove(Na),n.removeAttribute("aria-current");const s=J.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(Na),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===Kr,r=n||Gd(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=f=>S.trigger(this._element,f,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(LC).defaultPrevented||!s||!r)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?WC:jC,h=i?qC:KC;r.classList.add(h),na(r),s.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(Na),s.classList.remove(Na,h,u),this._isSliding=!1,a(fu)};this._queueCallback(d,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(HC)}_getActive(){return J.findOne(zC,this._element)}_getItems(){return J.find(Nv,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return rn()?e===Fi?Di:Kr:e===Fi?Kr:Di}_orderToDirection(e){return rn()?e===Di?Fi:nl:e===Di?nl:Fi}static jQueryInterface(e){return this.each(function(){const n=ia.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,BC,QC,function(t){const e=J.getElementFromSelector(this);if(!e||!e.classList.contains(Sv))return;t.preventDefault();const n=ia.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(Jn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});S.on(window,UC,()=>{const t=J.find(XC);for(const e of t)ia.getOrCreateInstance(e)});ln(ia);const tS="collapse",nS="bs.collapse",ra=`.${nS}`,sS=".data-api",iS=`show${ra}`,rS=`shown${ra}`,oS=`hide${ra}`,aS=`hidden${ra}`,lS=`click${ra}${sS}`,pu="show",Wi="collapse",Pa="collapsing",cS="collapsed",uS=`:scope .${Wi} .${Wi}`,hS="collapse-horizontal",dS="width",fS="height",pS=".collapse.show, .collapse.collapsing",gh='[data-bs-toggle="collapse"]',_S={parent:null,toggle:!0},mS={parent:"(null|element)",toggle:"boolean"};class No extends An{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=J.find(gh);for(const i of s){const r=J.getSelectorFromElement(i),o=J.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return _S}static get DefaultType(){return mS}static get NAME(){return tS}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(pS).filter(a=>a!==this._element).map(a=>No.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||S.trigger(this._element,iS).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(Wi),this._element.classList.add(Pa),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Pa),this._element.classList.add(Wi,pu),this._element.style[s]="",S.trigger(this._element,rS)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,oS).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,na(this._element),this._element.classList.add(Pa),this._element.classList.remove(Wi,pu);for(const i of this._triggerArray){const r=J.getElementFromSelector(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Pa),this._element.classList.add(Wi),S.trigger(this._element,aS)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(pu)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Ps(e.parent),e}_getDimension(){return this._element.classList.contains(hS)?dS:fS}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(gh);for(const n of e){const s=J.getElementFromSelector(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=J.find(uS,this._config.parent);return J.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(cS,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=No.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}S.on(document,lS,gh,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();for(const e of J.getMultipleElementsFromSelector(this))No.getOrCreateInstance(e,{toggle:!1}).toggle()});ln(No);const d_="dropdown",gS="bs.dropdown",Ii=`.${gS}`,Qd=".data-api",yS="Escape",f_="Tab",vS="ArrowUp",p_="ArrowDown",ES=2,TS=`hide${Ii}`,wS=`hidden${Ii}`,AS=`show${Ii}`,IS=`shown${Ii}`,Pv=`click${Ii}${Qd}`,Ov=`keydown${Ii}${Qd}`,bS=`keyup${Ii}${Qd}`,$i="show",CS="dropup",SS="dropend",RS="dropstart",NS="dropup-center",PS="dropdown-center",Zs='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',OS=`${Zs}.${$i}`,sl=".dropdown-menu",kS=".navbar",DS=".navbar-nav",xS=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",LS=rn()?"top-end":"top-start",MS=rn()?"top-start":"top-end",VS=rn()?"bottom-end":"bottom-start",FS=rn()?"bottom-start":"bottom-end",$S=rn()?"left-start":"right-start",US=rn()?"right-start":"left-start",BS="top",HS="bottom",jS={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},WS={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Mn extends An{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=J.next(this._element,sl)[0]||J.prev(this._element,sl)[0]||J.findOne(sl,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return jS}static get DefaultType(){return WS}static get NAME(){return d_}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Os(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!S.trigger(this._element,AS,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(DS))for(const s of[].concat(...document.body.children))S.on(s,"mouseover",ml);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add($i),this._element.classList.add($i),S.trigger(this._element,IS,e)}}hide(){if(Os(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!S.trigger(this._element,TS,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",ml);this._popper&&this._popper.destroy(),this._menu.classList.remove($i),this._element.classList.remove($i),this._element.setAttribute("aria-expanded","false"),Jn.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,wS,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!Xn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${d_.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof fv>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:Xn(this._config.reference)?e=Ps(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=zd(e,this._menu,n)}_isShown(){return this._menu.classList.contains($i)}_getPlacement(){const e=this._parent;if(e.classList.contains(SS))return $S;if(e.classList.contains(RS))return US;if(e.classList.contains(NS))return BS;if(e.classList.contains(PS))return HS;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(CS)?n?MS:LS:n?FS:VS}_detectNavbar(){return this._element.closest(kS)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Jn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...kt(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:n}){const s=J.find(xS,this._menu).filter(i=>Nr(i));s.length&&Gd(s,n,e===p_,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Mn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===ES||e.type==="keyup"&&e.key!==f_)return;const n=J.find(OS);for(const s of n){const i=Mn.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===f_||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===yS,i=[vS,p_].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=this.matches(Zs)?this:J.prev(this,Zs)[0]||J.next(this,Zs)[0]||J.findOne(Zs,e.delegateTarget.parentNode),o=Mn.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}S.on(document,Ov,Zs,Mn.dataApiKeydownHandler);S.on(document,Ov,sl,Mn.dataApiKeydownHandler);S.on(document,Pv,Mn.clearMenus);S.on(document,bS,Mn.clearMenus);S.on(document,Pv,Zs,function(t){t.preventDefault(),Mn.getOrCreateInstance(this).toggle()});ln(Mn);const kv="backdrop",qS="fade",__="show",m_=`mousedown.bs.${kv}`,KS={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},zS={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Dv extends sa{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return KS}static get DefaultType(){return zS}static get NAME(){return kv}show(e){if(!this._config.isVisible){kt(e);return}this._append();const n=this._getElement();this._config.isAnimated&&na(n),n.classList.add(__),this._emulateAnimation(()=>{kt(e)})}hide(e){if(!this._config.isVisible){kt(e);return}this._getElement().classList.remove(__),this._emulateAnimation(()=>{this.dispose(),kt(e)})}dispose(){this._isAppended&&(S.off(this._element,m_),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(qS),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Ps(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),S.on(e,m_,()=>{kt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){yv(e,this._getElement(),this._config.isAnimated)}}const GS="focustrap",YS="bs.focustrap",yl=`.${YS}`,QS=`focusin${yl}`,XS=`keydown.tab${yl}`,JS="Tab",ZS="forward",g_="backward",eR={autofocus:!0,trapElement:null},tR={autofocus:"boolean",trapElement:"element"};class xv extends sa{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return eR}static get DefaultType(){return tR}static get NAME(){return GS}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,yl),S.on(document,QS,e=>this._handleFocusin(e)),S.on(document,XS,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,yl))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=J.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===g_?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===JS&&(this._lastTabNavDirection=e.shiftKey?g_:ZS)}}const y_=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",v_=".sticky-top",Oa="padding-right",E_="margin-right";class yh{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Oa,n=>n+e),this._setElementAttributes(y_,Oa,n=>n+e),this._setElementAttributes(v_,E_,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Oa),this._resetElementAttributes(y_,Oa),this._resetElementAttributes(v_,E_)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&Jn.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=Jn.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}Jn.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(Xn(e)){n(e);return}for(const s of J.find(e,this._element))n(s)}}const nR="modal",sR="bs.modal",on=`.${sR}`,iR=".data-api",rR="Escape",oR=`hide${on}`,aR=`hidePrevented${on}`,Lv=`hidden${on}`,Mv=`show${on}`,lR=`shown${on}`,cR=`resize${on}`,uR=`click.dismiss${on}`,hR=`mousedown.dismiss${on}`,dR=`keydown.dismiss${on}`,fR=`click${on}${iR}`,T_="modal-open",pR="fade",w_="show",_u="modal-static",_R=".modal.show",mR=".modal-dialog",gR=".modal-body",yR='[data-bs-toggle="modal"]',vR={backdrop:!0,focus:!0,keyboard:!0},ER={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class fr extends An{constructor(e,n){super(e,n),this._dialog=J.findOne(mR,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new yh,this._addEventListeners()}static get Default(){return vR}static get DefaultType(){return ER}static get NAME(){return nR}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||S.trigger(this._element,Mv,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(T_),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||S.trigger(this._element,oR).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(w_),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){S.off(window,on),S.off(this._dialog,on),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Dv({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new xv({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=J.findOne(gR,this._dialog);n&&(n.scrollTop=0),na(this._element),this._element.classList.add(w_);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,lR,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,dR,e=>{if(e.key===rR){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),S.on(window,cR,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,hR,e=>{S.one(this._element,uR,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(T_),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,Lv)})}_isAnimated(){return this._element.classList.contains(pR)}_triggerBackdropTransition(){if(S.trigger(this._element,aR).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(_u)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(_u),this._queueCallback(()=>{this._element.classList.remove(_u),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=rn()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=rn()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=fr.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}S.on(document,fR,yR,function(t){const e=J.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),S.one(e,Mv,i=>{i.defaultPrevented||S.one(e,Lv,()=>{Nr(this)&&this.focus()})});const n=J.findOne(_R);n&&fr.getInstance(n).hide(),fr.getOrCreateInstance(e).toggle(this)});oc(fr);ln(fr);const TR="offcanvas",wR="bs.offcanvas",is=`.${wR}`,Vv=".data-api",AR=`load${is}${Vv}`,IR="Escape",A_="show",I_="showing",b_="hiding",bR="offcanvas-backdrop",Fv=".offcanvas.show",CR=`show${is}`,SR=`shown${is}`,RR=`hide${is}`,C_=`hidePrevented${is}`,$v=`hidden${is}`,NR=`resize${is}`,PR=`click${is}${Vv}`,OR=`keydown.dismiss${is}`,kR='[data-bs-toggle="offcanvas"]',DR={backdrop:!0,keyboard:!0,scroll:!1},xR={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ks extends An{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return DR}static get DefaultType(){return xR}static get NAME(){return TR}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||S.trigger(this._element,CR,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new yh().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(I_);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(A_),this._element.classList.remove(I_),S.trigger(this._element,SR,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||S.trigger(this._element,RR).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(b_),this._backdrop.hide();const n=()=>{this._element.classList.remove(A_,b_),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new yh().reset(),S.trigger(this._element,$v)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){S.trigger(this._element,C_);return}this.hide()},n=!!this._config.backdrop;return new Dv({className:bR,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new xv({trapElement:this._element})}_addEventListeners(){S.on(this._element,OR,e=>{if(e.key===IR){if(this._config.keyboard){this.hide();return}S.trigger(this._element,C_)}})}static jQueryInterface(e){return this.each(function(){const n=ks.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}S.on(document,PR,kR,function(t){const e=J.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Os(this))return;S.one(e,$v,()=>{Nr(this)&&this.focus()});const n=J.findOne(Fv);n&&n!==e&&ks.getInstance(n).hide(),ks.getOrCreateInstance(e).toggle(this)});S.on(window,AR,()=>{for(const t of J.find(Fv))ks.getOrCreateInstance(t).show()});S.on(window,NR,()=>{for(const t of J.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&ks.getOrCreateInstance(t).hide()});oc(ks);ln(ks);const LR=/^aria-[\w-]*$/i,Uv={"*":["class","dir","id","lang","role",LR],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},MR=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),VR=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,FR=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?MR.has(n)?!!VR.test(t.nodeValue):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))};function $R(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)FR(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const UR="TemplateFactory",BR={allowList:Uv,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},HR={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},jR={entry:"(string|element|function|null)",selector:"(string|element)"};class WR extends sa{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return BR}static get DefaultType(){return HR}static get NAME(){return UR}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},jR)}_setContent(e,n,s){const i=J.findOne(s,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(Xn(n)){this._putElementInTemplate(Ps(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?$R(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return kt(e,[this])}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const qR="tooltip",KR=new Set(["sanitize","allowList","sanitizeFn"]),mu="fade",zR="modal",ka="show",GR=".tooltip-inner",S_=`.${zR}`,R_="hide.bs.modal",zr="hover",gu="focus",YR="click",QR="manual",XR="hide",JR="hidden",ZR="show",e0="shown",t0="inserted",n0="click",s0="focusin",i0="focusout",r0="mouseenter",o0="mouseleave",a0={AUTO:"auto",TOP:"top",RIGHT:rn()?"left":"right",BOTTOM:"bottom",LEFT:rn()?"right":"left"},l0={allowList:Uv,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},c0={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Or extends An{constructor(e,n){if(typeof fv>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return l0}static get DefaultType(){return c0}static get NAME(){return qR}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(S_),R_,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=S.trigger(this._element,this.constructor.eventName(ZR)),s=(mv(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),S.trigger(this._element,this.constructor.eventName(t0))),this._popper=this._createPopper(i),i.classList.add(ka),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))S.on(a,"mouseover",ml);const o=()=>{S.trigger(this._element,this.constructor.eventName(e0)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||S.trigger(this._element,this.constructor.eventName(XR)).defaultPrevented)return;if(this._getTipElement().classList.remove(ka),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))S.off(i,"mouseover",ml);this._activeTrigger[YR]=!1,this._activeTrigger[gu]=!1,this._activeTrigger[zr]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName(JR)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(mu,ka),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=Yb(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(mu),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new WR({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[GR]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(mu)}_isShown(){return this.tip&&this.tip.classList.contains(ka)}_createPopper(e){const n=kt(this._config.placement,[this,e,this._element]),s=a0[n.toUpperCase()];return zd(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return kt(e,[this._element])}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...kt(this._config.popperConfig,[n])}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")S.on(this._element,this.constructor.eventName(n0),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==QR){const s=n===zr?this.constructor.eventName(r0):this.constructor.eventName(s0),i=n===zr?this.constructor.eventName(o0):this.constructor.eventName(i0);S.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?gu:zr]=!0,o._enter()}),S.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?gu:zr]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(S_),R_,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=Jn.getDataAttributes(this._element);for(const s of Object.keys(n))KR.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Ps(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[n,s]of Object.entries(this._config))this.constructor.Default[n]!==s&&(e[n]=s);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=Or.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ln(Or);const u0="popover",h0=".popover-header",d0=".popover-body",f0={...Or.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},p0={...Or.DefaultType,content:"(null|string|element|function)"};class Xd extends Or{static get Default(){return f0}static get DefaultType(){return p0}static get NAME(){return u0}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[h0]:this._getTitle(),[d0]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=Xd.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ln(Xd);const _0="scrollspy",m0="bs.scrollspy",Jd=`.${m0}`,g0=".data-api",y0=`activate${Jd}`,N_=`click${Jd}`,v0=`load${Jd}${g0}`,E0="dropdown-item",xi="active",T0='[data-bs-spy="scroll"]',yu="[href]",w0=".nav, .list-group",P_=".nav-link",A0=".nav-item",I0=".list-group-item",b0=`${P_}, ${A0} > ${P_}, ${I0}`,C0=".dropdown",S0=".dropdown-toggle",R0={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},N0={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class cc extends An{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return R0}static get DefaultType(){return N0}static get NAME(){return _0}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Ps(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,N_),S.on(this._config.target,N_,yu,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=J.find(yu,this._config.target);for(const n of e){if(!n.hash||Os(n))continue;const s=J.findOne(decodeURI(n.hash),this._element);Nr(s)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(xi),this._activateParents(e),S.trigger(this._element,y0,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(E0)){J.findOne(S0,e.closest(C0)).classList.add(xi);return}for(const n of J.parents(e,w0))for(const s of J.prev(n,b0))s.classList.add(xi)}_clearActiveClass(e){e.classList.remove(xi);const n=J.find(`${yu}.${xi}`,e);for(const s of n)s.classList.remove(xi)}static jQueryInterface(e){return this.each(function(){const n=cc.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(window,v0,()=>{for(const t of J.find(T0))cc.getOrCreateInstance(t)});ln(cc);const P0="tab",O0="bs.tab",bi=`.${O0}`,k0=`hide${bi}`,D0=`hidden${bi}`,x0=`show${bi}`,L0=`shown${bi}`,M0=`click${bi}`,V0=`keydown${bi}`,F0=`load${bi}`,$0="ArrowLeft",O_="ArrowRight",U0="ArrowUp",k_="ArrowDown",vu="Home",D_="End",ei="active",x_="fade",Eu="show",B0="dropdown",Bv=".dropdown-toggle",H0=".dropdown-menu",Tu=`:not(${Bv})`,j0='.list-group, .nav, [role="tablist"]',W0=".nav-item, .list-group-item",q0=`.nav-link${Tu}, .list-group-item${Tu}, [role="tab"]${Tu}`,Hv='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',wu=`${q0}, ${Hv}`,K0=`.${ei}[data-bs-toggle="tab"], .${ei}[data-bs-toggle="pill"], .${ei}[data-bs-toggle="list"]`;class pr extends An{constructor(e){super(e),this._parent=this._element.closest(j0),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,V0,n=>this._keydown(n)))}static get NAME(){return P0}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?S.trigger(n,k0,{relatedTarget:e}):null;S.trigger(e,x0,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(ei),this._activate(J.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(Eu);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),S.trigger(e,L0,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(x_))}_deactivate(e,n){if(!e)return;e.classList.remove(ei),e.blur(),this._deactivate(J.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(Eu);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),S.trigger(e,D0,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(x_))}_keydown(e){if(![$0,O_,U0,k_,vu,D_].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(i=>!Os(i));let s;if([vu,D_].includes(e.key))s=n[e.key===vu?0:n.length-1];else{const i=[O_,k_].includes(e.key);s=Gd(n,e.target,i,!0)}s&&(s.focus({preventScroll:!0}),pr.getOrCreateInstance(s).show())}_getChildren(){return J.find(wu,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=J.getElementFromSelector(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(B0))return;const i=(r,o)=>{const a=J.findOne(r,s);a&&a.classList.toggle(o,n)};i(Bv,ei),i(H0,Eu),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(ei)}_getInnerElement(e){return e.matches(wu)?e:J.findOne(wu,e)}_getOuterElement(e){return e.closest(W0)||e}static jQueryInterface(e){return this.each(function(){const n=pr.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,M0,Hv,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Os(this)&&pr.getOrCreateInstance(this).show()});S.on(window,F0,()=>{for(const t of J.find(K0))pr.getOrCreateInstance(t)});ln(pr);const z0="toast",G0="bs.toast",Bs=`.${G0}`,Y0=`mouseover${Bs}`,Q0=`mouseout${Bs}`,X0=`focusin${Bs}`,J0=`focusout${Bs}`,Z0=`hide${Bs}`,eN=`hidden${Bs}`,tN=`show${Bs}`,nN=`shown${Bs}`,sN="fade",L_="hide",Da="show",xa="showing",iN={animation:"boolean",autohide:"boolean",delay:"number"},rN={animation:!0,autohide:!0,delay:5e3};class uc extends An{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return rN}static get DefaultType(){return iN}static get NAME(){return z0}show(){if(S.trigger(this._element,tN).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(sN);const n=()=>{this._element.classList.remove(xa),S.trigger(this._element,nN),this._maybeScheduleHide()};this._element.classList.remove(L_),na(this._element),this._element.classList.add(Da,xa),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||S.trigger(this._element,Z0).defaultPrevented)return;const n=()=>{this._element.classList.add(L_),this._element.classList.remove(xa,Da),S.trigger(this._element,eN)};this._element.classList.add(xa),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Da),super.dispose()}isShown(){return this._element.classList.contains(Da)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,Y0,e=>this._onInteraction(e,!0)),S.on(this._element,Q0,e=>this._onInteraction(e,!1)),S.on(this._element,X0,e=>this._onInteraction(e,!0)),S.on(this._element,J0,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=uc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}oc(uc);ln(uc);/**
* @vue/shared v3.4.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zd(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const Fe={},Yi=[],Jt=()=>{},oN=()=>!1,hc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ef=t=>t.startsWith("onUpdate:"),Xe=Object.assign,tf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},aN=Object.prototype.hasOwnProperty,Ee=(t,e)=>aN.call(t,e),ne=Array.isArray,Qi=t=>dc(t)==="[object Map]",jv=t=>dc(t)==="[object Set]",oe=t=>typeof t=="function",We=t=>typeof t=="string",kr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Wv=t=>(Le(t)||oe(t))&&oe(t.then)&&oe(t.catch),qv=Object.prototype.toString,dc=t=>qv.call(t),lN=t=>dc(t).slice(8,-1),Kv=t=>dc(t)==="[object Object]",nf=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,il=Zd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cN=/-(\w)/g,$n=fc(t=>t.replace(cN,(e,n)=>n?n.toUpperCase():"")),uN=/\B([A-Z])/g,Dr=fc(t=>t.replace(uN,"-$1").toLowerCase()),pc=fc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Au=fc(t=>t?`on${pc(t)}`:""),Ds=(t,e)=>!Object.is(t,e),Iu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hN=t=>{const e=parseFloat(t);return isNaN(e)?t:e},dN=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let M_;const zv=()=>M_||(M_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sf(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=We(s)?mN(s):sf(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(We(t)||Le(t))return t}const fN=/;(?![^(]*\))/g,pN=/:([^]+)/,_N=/\/\*[^]*?\*\//g;function mN(t){const e={};return t.replace(_N,"").split(fN).forEach(n=>{if(n){const s=n.split(pN);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _c(t){let e="";if(We(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=_c(t[n]);s&&(e+=s+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gN="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yN=Zd(gN);function Gv(t){return!!t||t===""}const Ts=t=>We(t)?t:t==null?"":ne(t)||Le(t)&&(t.toString===qv||!oe(t.toString))?JSON.stringify(t,Yv,2):String(t),Yv=(t,e)=>e&&e.__v_isRef?Yv(t,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[bu(s,r)+" =>"]=i,n),{})}:jv(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bu(n))}:kr(e)?bu(e):Le(e)&&!ne(e)&&!Kv(e)?String(e):e,bu=(t,e="")=>{var n;return kr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class vN{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function EN(t,e=Ut){e&&e.active&&e.effects.push(t)}function Qv(){return Ut}function TN(t){Ut&&Ut.cleanups.push(t)}let ai;class rf{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,EN(this,i)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Ci();for(const e of this.deps)if(e.computed&&(wN(e.computed),this._dirtyLevel>=2))break;Si(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ws,n=ai;try{return ws=!0,ai=this,this._runnings++,V_(this),this.fn()}finally{F_(this),this._runnings--,ai=n,ws=e}}stop(){var e;this.active&&(V_(this),F_(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function wN(t){return t.value}function V_(t){t._trackId++,t._depsLength=0}function F_(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Xv(t.deps[e],t);t.deps.length=t._depsLength}}function Xv(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ws=!0,vh=0;const Jv=[];function Ci(){Jv.push(ws),ws=!1}function Si(){const t=Jv.pop();ws=t===void 0?!0:t}function of(){vh++}function af(){for(vh--;!vh&&Eh.length;)Eh.shift()()}function Zv(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Xv(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Eh=[];function eE(t,e,n){of();for(const s of t.keys())if(!(!s.allowRecurse&&s._runnings)&&s._dirtyLevel<e&&(!s._runnings||e!==2)){const i=s._dirtyLevel;s._dirtyLevel=e,i===0&&(!s._queryings||e!==2)&&(s.trigger(),s.scheduler&&Eh.push(s.scheduler))}af()}const tE=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Th=new WeakMap,li=Symbol(""),wh=Symbol("");function Lt(t,e,n){if(ws&&ai){let s=Th.get(t);s||Th.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=tE(()=>s.delete(n))),Zv(ai,i)}}function Zn(t,e,n,s,i,r){const o=Th.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!kr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?nf(n)&&a.push(o.get("length")):(a.push(o.get(li)),Qi(t)&&a.push(o.get(wh)));break;case"delete":ne(t)||(a.push(o.get(li)),Qi(t)&&a.push(o.get(wh)));break;case"set":Qi(t)&&a.push(o.get(li));break}of();for(const l of a)l&&eE(l,3);af()}const AN=Zd("__proto__,__v_isRef,__isVue"),nE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kr)),$_=IN();function IN(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=we(this);for(let r=0,o=this.length;r<o;r++)Lt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(we)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ci(),of();const s=we(this)[e].apply(this,n);return af(),Si(),s}}),t}function bN(t){const e=we(this);return Lt(e,"has",t),e.hasOwnProperty(t)}class sE{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?FN:aE:r?oE:rE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ne(e);if(!i){if(o&&Ee($_,n))return Reflect.get($_,n,s);if(n==="hasOwnProperty")return bN}const a=Reflect.get(e,n,s);return(kr(n)?nE.has(n):AN(n))||(i||Lt(e,"get",n),r)?a:Nt(a)?o&&nf(n)?a:a.value:Le(a)?i?cE(a):gc(a):a}}class iE extends sE{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const l=_r(r);if(!El(s)&&!_r(s)&&(r=we(r),s=we(s)),!ne(e)&&Nt(r)&&!Nt(s))return l?!1:(r.value=s,!0)}const o=ne(e)&&nf(n)?Number(n)<e.length:Ee(e,n),a=Reflect.set(e,n,s,i);return e===we(i)&&(o?Ds(s,r)&&Zn(e,"set",n,s):Zn(e,"add",n,s)),a}deleteProperty(e,n){const s=Ee(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Zn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!kr(n)||!nE.has(n))&&Lt(e,"has",n),s}ownKeys(e){return Lt(e,"iterate",ne(e)?"length":li),Reflect.ownKeys(e)}}class CN extends sE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const SN=new iE,RN=new CN,NN=new iE(!0),lf=t=>t,mc=t=>Reflect.getPrototypeOf(t);function La(t,e,n=!1,s=!1){t=t.__v_raw;const i=we(t),r=we(e);n||(Ds(e,r)&&Lt(i,"get",e),Lt(i,"get",r));const{has:o}=mc(i),a=s?lf:n?hf:Po;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ma(t,e=!1){const n=this.__v_raw,s=we(n),i=we(t);return e||(Ds(t,i)&&Lt(s,"has",t),Lt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Va(t,e=!1){return t=t.__v_raw,!e&&Lt(we(t),"iterate",li),Reflect.get(t,"size",t)}function U_(t){t=we(t);const e=we(this);return mc(e).has.call(e,t)||(e.add(t),Zn(e,"add",t,t)),this}function B_(t,e){e=we(e);const n=we(this),{has:s,get:i}=mc(n);let r=s.call(n,t);r||(t=we(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ds(e,o)&&Zn(n,"set",t,e):Zn(n,"add",t,e),this}function H_(t){const e=we(this),{has:n,get:s}=mc(e);let i=n.call(e,t);i||(t=we(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Zn(e,"delete",t,void 0),r}function j_(){const t=we(this),e=t.size!==0,n=t.clear();return e&&Zn(t,"clear",void 0,void 0),n}function Fa(t,e){return function(s,i){const r=this,o=r.__v_raw,a=we(o),l=e?lf:t?hf:Po;return!t&&Lt(a,"iterate",li),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function $a(t,e,n){return function(...s){const i=this.__v_raw,r=we(i),o=Qi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?lf:e?hf:Po;return!e&&Lt(r,"iterate",l?wh:li),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function cs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function PN(){const t={get(r){return La(this,r)},get size(){return Va(this)},has:Ma,add:U_,set:B_,delete:H_,clear:j_,forEach:Fa(!1,!1)},e={get(r){return La(this,r,!1,!0)},get size(){return Va(this)},has:Ma,add:U_,set:B_,delete:H_,clear:j_,forEach:Fa(!1,!0)},n={get(r){return La(this,r,!0)},get size(){return Va(this,!0)},has(r){return Ma.call(this,r,!0)},add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear"),forEach:Fa(!0,!1)},s={get(r){return La(this,r,!0,!0)},get size(){return Va(this,!0)},has(r){return Ma.call(this,r,!0)},add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear"),forEach:Fa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=$a(r,!1,!1),n[r]=$a(r,!0,!1),e[r]=$a(r,!1,!0),s[r]=$a(r,!0,!0)}),[t,n,e,s]}const[ON,kN,DN,xN]=PN();function cf(t,e){const n=e?t?xN:DN:t?kN:ON;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Ee(n,i)&&i in s?n:s,i,r)}const LN={get:cf(!1,!1)},MN={get:cf(!1,!0)},VN={get:cf(!0,!1)},rE=new WeakMap,oE=new WeakMap,aE=new WeakMap,FN=new WeakMap;function $N(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function UN(t){return t.__v_skip||!Object.isExtensible(t)?0:$N(lN(t))}function gc(t){return _r(t)?t:uf(t,!1,SN,LN,rE)}function lE(t){return uf(t,!1,NN,MN,oE)}function cE(t){return uf(t,!0,RN,VN,aE)}function uf(t,e,n,s,i){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=UN(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Xi(t){return _r(t)?Xi(t.__v_raw):!!(t&&t.__v_isReactive)}function _r(t){return!!(t&&t.__v_isReadonly)}function El(t){return!!(t&&t.__v_isShallow)}function uE(t){return Xi(t)||_r(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function hE(t){return vl(t,"__v_skip",!0),t}const Po=t=>Le(t)?gc(t):t,hf=t=>Le(t)?cE(t):t;class dE{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new rf(()=>e(this._value),()=>Ah(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=we(this);return fE(e),(!e._cacheable||e.effect.dirty)&&Ds(e._value,e._value=e.effect.run())&&Ah(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function BN(t,e,n=!1){let s,i;const r=oe(t);return r?(s=t,i=Jt):(s=t.get,i=t.set),new dE(s,i,r||!i,n)}function fE(t){ws&&ai&&(t=we(t),Zv(ai,t.dep||(t.dep=tE(()=>t.dep=void 0,t instanceof dE?t:void 0))))}function Ah(t,e=3,n){t=we(t);const s=t.dep;s&&eE(s,e)}function Nt(t){return!!(t&&t.__v_isRef===!0)}function Ji(t){return _E(t,!1)}function pE(t){return _E(t,!0)}function _E(t,e){return Nt(t)?t:new HN(t,e)}class HN{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:Po(e)}get value(){return fE(this),this._value}set value(e){const n=this.__v_isShallow||El(e)||_r(e);e=n?e:we(e),Ds(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Po(e),Ah(this,3))}}function ci(t){return Nt(t)?t.value:t}function Gn(t){return oe(t)?t():ci(t)}const jN={get:(t,e,n)=>ci(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Nt(i)&&!Nt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function mE(t){return Xi(t)?t:new Proxy(t,jN)}/**
* @vue/runtime-core v3.4.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function As(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){yc(r,e,n)}return i}function nn(t,e,n,s){if(oe(t)){const r=As(t,e,n,s);return r&&Wv(r)&&r.catch(o=>{yc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(nn(t[r],e,n,s));return i}function yc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){As(l,null,10,[t,o,a]);return}}WN(t,n,i,s)}function WN(t,e,n,s=!0){console.error(t)}let Oo=!1,Ih=!1;const yt=[];let Sn=0;const Zi=[];let ps=null,Xs=0;const gE=Promise.resolve();let df=null;function yE(t){const e=df||gE;return t?e.then(this?t.bind(this):t):e}function qN(t){let e=Sn+1,n=yt.length;for(;e<n;){const s=e+n>>>1,i=yt[s],r=ko(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ff(t){(!yt.length||!yt.includes(t,Oo&&t.allowRecurse?Sn+1:Sn))&&(t.id==null?yt.push(t):yt.splice(qN(t.id),0,t),vE())}function vE(){!Oo&&!Ih&&(Ih=!0,df=gE.then(TE))}function KN(t){const e=yt.indexOf(t);e>Sn&&yt.splice(e,1)}function zN(t){ne(t)?Zi.push(...t):(!ps||!ps.includes(t,t.allowRecurse?Xs+1:Xs))&&Zi.push(t),vE()}function W_(t,e,n=Oo?Sn+1:0){for(;n<yt.length;n++){const s=yt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;yt.splice(n,1),n--,s()}}}function EE(t){if(Zi.length){const e=[...new Set(Zi)].sort((n,s)=>ko(n)-ko(s));if(Zi.length=0,ps){ps.push(...e);return}for(ps=e,Xs=0;Xs<ps.length;Xs++)ps[Xs]();ps=null,Xs=0}}const ko=t=>t.id==null?1/0:t.id,GN=(t,e)=>{const n=ko(t)-ko(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function TE(t){Ih=!1,Oo=!0,yt.sort(GN);try{for(Sn=0;Sn<yt.length;Sn++){const e=yt[Sn];e&&e.active!==!1&&As(e,null,14)}}finally{Sn=0,yt.length=0,EE(),Oo=!1,df=null,(yt.length||Zi.length)&&TE()}}function YN(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Fe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Fe;d&&(i=n.map(f=>We(f)?f.trim():f)),h&&(i=n.map(hN))}let a,l=s[a=Au(e)]||s[a=Au($n(e))];!l&&r&&(l=s[a=Au(Dr(e))]),l&&nn(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nn(c,t,6,i)}}function wE(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!oe(t)){const l=c=>{const u=wE(c,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Le(t)&&s.set(t,null),null):(ne(r)?r.forEach(l=>o[l]=null):Xe(o,r),Le(t)&&s.set(t,o),o)}function vc(t,e){return!t||!hc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,Dr(e))||Ee(t,e))}let Zt=null,Ec=null;function Tl(t){const e=Zt;return Zt=t,Ec=t&&t.type.__scopeId||null,e}function AE(t){Ec=t}function IE(){Ec=null}function Dt(t,e=Zt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&sm(-1);const r=Tl(e);let o;try{o=t(...i)}finally{Tl(r),s._d&&sm(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Cu(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:g}=t;let y,E;const C=Tl(t);try{if(n.shapeFlag&4){const T=i||s,x=T;y=Cn(u.call(x,T,h,r,f,d,m)),E=l}else{const T=e;y=Cn(T.length>1?T(r,{attrs:l,slots:a,emit:c}):T(r,null)),E=e.props?l:QN(l)}}catch(T){mo.length=0,yc(T,t,1),y=_e(mn)}let w=y;if(E&&g!==!1){const T=Object.keys(E),{shapeFlag:x}=w;T.length&&x&7&&(o&&T.some(ef)&&(E=XN(E,o)),w=xs(w,E))}return n.dirs&&(w=xs(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,Tl(C),y}const QN=t=>{let e;for(const n in t)(n==="class"||n==="style"||hc(n))&&((e||(e={}))[n]=t[n]);return e},XN=(t,e)=>{const n={};for(const s in t)(!ef(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function JN(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?q_(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!vc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?q_(s,o,c):!0:!!o;return!1}function q_(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!vc(n,r))return!0}return!1}function ZN({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const pf="components";function xt(t,e){return CE(pf,t,!0,e)||t}const bE=Symbol.for("v-ndc");function eP(t){return We(t)?CE(pf,t,!1)||t:t||bE}function CE(t,e,n=!0,s=!1){const i=Zt||lt;if(i){const r=i.type;if(t===pf){const a=zP(r,!1);if(a&&(a===e||a===$n(e)||a===pc($n(e))))return r}const o=K_(i[t]||r[t],e)||K_(i.appContext[t],e);return!o&&s?r:o}}function K_(t,e){return t&&(t[e]||t[$n(e)]||t[pc($n(e))])}const tP=t=>t.__isSuspense;function nP(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):zN(t)}const sP=Symbol.for("v-scx"),iP=()=>sn(sP),Ua={};function po(t,e,n){return SE(t,e,n)}function SE(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=Fe){if(e&&r){const R=e;e=(...q)=>{R(...q),x()}}const l=lt,c=R=>s===!0?R:qi(R,s===!1?1:void 0);let u,h=!1,d=!1;if(Nt(t)?(u=()=>t.value,h=El(t)):Xi(t)?(u=()=>c(t),h=!0):ne(t)?(d=!0,h=t.some(R=>Xi(R)||El(R)),u=()=>t.map(R=>{if(Nt(R))return R.value;if(Xi(R))return c(R);if(oe(R))return As(R,l,2)})):oe(t)?e?u=()=>As(t,l,2):u=()=>(f&&f(),nn(t,l,3,[m])):u=Jt,e&&s){const R=u;u=()=>qi(R())}let f,m=R=>{f=w.onStop=()=>{As(R,l,4),f=w.onStop=void 0}},g;if(bc)if(m=Jt,e?n&&nn(e,l,3,[u(),d?[]:void 0,m]):u(),i==="sync"){const R=iP();g=R.__watcherHandles||(R.__watcherHandles=[])}else return Jt;let y=d?new Array(t.length).fill(Ua):Ua;const E=()=>{if(!(!w.active||!w.dirty))if(e){const R=w.run();(s||h||(d?R.some((q,M)=>Ds(q,y[M])):Ds(R,y)))&&(f&&f(),nn(e,l,3,[R,y===Ua?void 0:d&&y[0]===Ua?[]:y,m]),y=R)}else w.run()};E.allowRecurse=!!e;let C;i==="sync"?C=E:i==="post"?C=()=>Ot(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),C=()=>ff(E));const w=new rf(u,Jt,C),T=Qv(),x=()=>{w.stop(),T&&tf(T.effects,w)};return e?n?E():y=w.run():i==="post"?Ot(w.run.bind(w),l&&l.suspense):w.run(),g&&g.push(x),x}function rP(t,e,n){const s=this.proxy,i=We(t)?t.includes(".")?RE(s,t):()=>s[t]:t.bind(s,s);let r;oe(e)?r=e:(r=e.handler,n=e);const o=oa(this),a=SE(i,r.bind(s),n);return o(),a}function RE(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function qi(t,e,n=0,s){if(!Le(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Nt(t))qi(t.value,e,n,s);else if(ne(t))for(let i=0;i<t.length;i++)qi(t[i],e,n,s);else if(jv(t)||Qi(t))t.forEach(i=>{qi(i,e,n,s)});else if(Kv(t))for(const i in t)qi(t[i],e,n,s);return t}function qs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ci(),nn(l,n,8,[t.el,a,t,e]),Si())}}const _s=Symbol("_leaveCb"),Ba=Symbol("_enterCb");function oP(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return DE(()=>{t.isMounted=!0}),xE(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],NE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},aP={name:"BaseTransition",props:NE,setup(t,{slots:e}){const n=vf(),s=oP();let i;return()=>{const r=e.default&&OE(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const g of r)if(g.type!==mn){o=g;break}}const a=we(t),{mode:l}=a;if(s.isLeaving)return Su(o);const c=z_(o);if(!c)return Su(o);const u=bh(c,a,s,n);Ch(c,u);const h=n.subTree,d=h&&z_(h);let f=!1;const{getTransitionKey:m}=c.type;if(m){const g=m();i===void 0?i=g:g!==i&&(i=g,f=!0)}if(d&&d.type!==mn&&(!Js(c,d)||f)){const g=bh(d,a,s,n);if(Ch(d,g),l==="out-in")return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Su(o);l==="in-out"&&c.type!==mn&&(g.delayLeave=(y,E,C)=>{const w=PE(s,d);w[String(d.key)]=d,y[_s]=()=>{E(),y[_s]=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},lP=aP;function PE(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function bh(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:E,onAppearCancelled:C}=e,w=String(t.key),T=PE(n,t),x=(M,Z)=>{M&&nn(M,s,9,Z)},R=(M,Z)=>{const Y=Z[1];x(M,Z),ne(M)?M.every(ue=>ue.length<=1)&&Y():M.length<=1&&Y()},q={mode:r,persisted:o,beforeEnter(M){let Z=a;if(!n.isMounted)if(i)Z=g||a;else return;M[_s]&&M[_s](!0);const Y=T[w];Y&&Js(t,Y)&&Y.el[_s]&&Y.el[_s](),x(Z,[M])},enter(M){let Z=l,Y=c,ue=u;if(!n.isMounted)if(i)Z=y||l,Y=E||c,ue=C||u;else return;let j=!1;const se=M[Ba]=Be=>{j||(j=!0,Be?x(ue,[M]):x(Y,[M]),q.delayedLeave&&q.delayedLeave(),M[Ba]=void 0)};Z?R(Z,[M,se]):se()},leave(M,Z){const Y=String(t.key);if(M[Ba]&&M[Ba](!0),n.isUnmounting)return Z();x(h,[M]);let ue=!1;const j=M[_s]=se=>{ue||(ue=!0,Z(),se?x(m,[M]):x(f,[M]),M[_s]=void 0,T[Y]===t&&delete T[Y])};T[Y]=t,d?R(d,[M,j]):j()},clone(M){return bh(M,e,n,s)}};return q}function Su(t){if(Tc(t))return t=xs(t),t.children=null,t}function z_(t){return Tc(t)?t.children?t.children[0]:void 0:t}function Ch(t,e){t.shapeFlag&6&&t.component?Ch(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function OE(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Yt?(o.patchFlag&128&&i++,s=s.concat(OE(o.children,e,a))):(e||o.type!==mn)&&s.push(a!=null?xs(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function _f(t,e){return oe(t)?Xe({name:t.name},e,{setup:t}):t}const rl=t=>!!t.type.__asyncLoader,Tc=t=>t.type.__isKeepAlive;function cP(t,e){kE(t,"a",e)}function uP(t,e){kE(t,"da",e)}function kE(t,e,n=lt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(wc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Tc(i.parent.vnode)&&hP(s,e,n,i),i=i.parent}}function hP(t,e,n,s){const i=wc(e,t,s,!0);LE(()=>{tf(s[e],i)},n)}function wc(t,e,n=lt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ci();const a=oa(n),l=nn(e,n,t,o);return a(),Si(),l});return s?i.unshift(r):i.push(r),r}}const rs=t=>(e,n=lt)=>(!bc||t==="sp")&&wc(t,(...s)=>e(...s),n),dP=rs("bm"),DE=rs("m"),fP=rs("bu"),pP=rs("u"),xE=rs("bum"),LE=rs("um"),ME=rs("sp"),_P=rs("rtg"),mP=rs("rtc");function gP(t,e=lt){wc("ec",t,e)}function G_(t,e,n,s){let i;const r=n&&n[s];if(ne(t)||We(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Le(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Sh=t=>t?YE(t)?Ef(t)||t.proxy:Sh(t.parent):null,_o=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sh(t.parent),$root:t=>Sh(t.root),$emit:t=>t.emit,$options:t=>mf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ff(t.update)}),$nextTick:t=>t.n||(t.n=yE.bind(t.proxy)),$watch:t=>rP.bind(t)}),Ru=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Ee(t,e),yP={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ru(s,e))return o[e]=1,s[e];if(i!==Fe&&Ee(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ee(c,e))return o[e]=3,r[e];if(n!==Fe&&Ee(n,e))return o[e]=4,n[e];Rh&&(o[e]=0)}}const u=_o[e];let h,d;if(u)return e==="$attrs"&&Lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Fe&&Ee(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ee(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ru(i,e)?(i[e]=n,!0):s!==Fe&&Ee(s,e)?(s[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Fe&&Ee(t,o)||Ru(e,o)||(a=r[0])&&Ee(a,o)||Ee(s,o)||Ee(_o,o)||Ee(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Y_(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rh=!0;function vP(t){const e=mf(t),n=t.proxy,s=t.ctx;Rh=!1,e.beforeCreate&&Q_(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:g,deactivated:y,beforeDestroy:E,beforeUnmount:C,destroyed:w,unmounted:T,render:x,renderTracked:R,renderTriggered:q,errorCaptured:M,serverPrefetch:Z,expose:Y,inheritAttrs:ue,components:j,directives:se,filters:Be}=e;if(c&&EP(c,s,null),o)for(const le in o){const fe=o[le];oe(fe)&&(s[le]=fe.bind(n))}if(i){const le=i.call(n,n);Le(le)&&(t.data=gc(le))}if(Rh=!0,r)for(const le in r){const fe=r[le],rt=oe(fe)?fe.bind(n,n):oe(fe.get)?fe.get.bind(n,n):Jt,Mt=!oe(fe)&&oe(fe.set)?fe.set.bind(n):Jt,Pt=hn({get:rt,set:Mt});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:Ke=>Pt.value=Ke})}if(a)for(const le in a)VE(a[le],s,n,le);if(l){const le=oe(l)?l.call(n):l;Reflect.ownKeys(le).forEach(fe=>{ol(fe,le[fe])})}u&&Q_(u,t,"c");function de(le,fe){ne(fe)?fe.forEach(rt=>le(rt.bind(n))):fe&&le(fe.bind(n))}if(de(dP,h),de(DE,d),de(fP,f),de(pP,m),de(cP,g),de(uP,y),de(gP,M),de(mP,R),de(_P,q),de(xE,C),de(LE,T),de(ME,Z),ne(Y))if(Y.length){const le=t.exposed||(t.exposed={});Y.forEach(fe=>{Object.defineProperty(le,fe,{get:()=>n[fe],set:rt=>n[fe]=rt})})}else t.exposed||(t.exposed={});x&&t.render===Jt&&(t.render=x),ue!=null&&(t.inheritAttrs=ue),j&&(t.components=j),se&&(t.directives=se)}function EP(t,e,n=Jt){ne(t)&&(t=Nh(t));for(const s in t){const i=t[s];let r;Le(i)?"default"in i?r=sn(i.from||s,i.default,!0):r=sn(i.from||s):r=sn(i),Nt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Q_(t,e,n){nn(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function VE(t,e,n,s){const i=s.includes(".")?RE(n,s):()=>n[s];if(We(t)){const r=e[t];oe(r)&&po(i,r)}else if(oe(t))po(i,t.bind(n));else if(Le(t))if(ne(t))t.forEach(r=>VE(r,e,n,s));else{const r=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(r)&&po(i,r,t)}}function mf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>wl(l,c,o,!0)),wl(l,e,o)),Le(e)&&r.set(e,l),l}function wl(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&wl(t,r,n,!0),i&&i.forEach(o=>wl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=TP[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const TP={data:X_,props:J_,emits:J_,methods:so,computed:so,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:so,directives:so,watch:AP,provide:X_,inject:wP};function X_(t,e){return e?t?function(){return Xe(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function wP(t,e){return so(Nh(t),Nh(e))}function Nh(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function so(t,e){return t?Xe(Object.create(null),t,e):e}function J_(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Xe(Object.create(null),Y_(t),Y_(e??{})):e}function AP(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const s in e)n[s]=At(t[s],e[s]);return n}function FE(){return{app:null,config:{isNativeTag:oN,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let IP=0;function bP(t,e){return function(s,i=null){oe(s)||(s=Xe({},s)),i!=null&&!Le(i)&&(i=null);const r=FE(),o=new WeakSet;let a=!1;const l=r.app={_uid:IP++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:YP,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&oe(c.install)?(o.add(c),c.install(l,...u)):oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=_e(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Ef(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Al=l;try{return c()}finally{Al=null}}};return l}}let Al=null;function ol(t,e){if(lt){let n=lt.provides;const s=lt.parent&&lt.parent.provides;s===n&&(n=lt.provides=Object.create(s)),n[t]=e}}function sn(t,e,n=!1){const s=lt||Zt;if(s||Al){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Al._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&oe(e)?e.call(s&&s.proxy):e}}function CP(t,e,n,s=!1){const i={},r={};vl(r,Ic,1),t.propsDefaults=Object.create(null),$E(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:lE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function SP(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=we(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(vc(t.emitsOptions,d))continue;const f=e[d];if(l)if(Ee(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=$n(d);i[m]=Ph(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{$E(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Ee(e,h)&&((u=Dr(h))===h||!Ee(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ph(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Ee(e,h))&&(delete r[h],c=!0)}c&&Zn(t,"set","$attrs")}function $E(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(il(l))continue;const c=e[l];let u;i&&Ee(i,u=$n(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:vc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=we(n),c=a||Fe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ph(i,l,h,c[h],t,!Ee(c,h))}}return o}function Ph(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Ee(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&oe(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=oa(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Dr(n))&&(s=!0))}return s}function UE(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!oe(t)){const u=h=>{l=!0;const[d,f]=UE(h,e,!0);Xe(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Le(t)&&s.set(t,Yi),Yi;if(ne(r))for(let u=0;u<r.length;u++){const h=$n(r[u]);Z_(h)&&(o[h]=Fe)}else if(r)for(const u in r){const h=$n(u);if(Z_(h)){const d=r[u],f=o[h]=ne(d)||oe(d)?{type:d}:Xe({},d);if(f){const m=nm(Boolean,f.type),g=nm(String,f.type);f[0]=m>-1,f[1]=g<0||m<g,(m>-1||Ee(f,"default"))&&a.push(h)}}}const c=[o,a];return Le(t)&&s.set(t,c),c}function Z_(t){return t[0]!=="$"}function em(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function tm(t,e){return em(t)===em(e)}function nm(t,e){return ne(e)?e.findIndex(n=>tm(n,t)):oe(e)&&tm(e,t)?0:-1}const BE=t=>t[0]==="_"||t==="$stable",gf=t=>ne(t)?t.map(Cn):[Cn(t)],RP=(t,e,n)=>{if(e._n)return e;const s=Dt((...i)=>gf(e(...i)),n);return s._c=!1,s},HE=(t,e,n)=>{const s=t._ctx;for(const i in t){if(BE(i))continue;const r=t[i];if(oe(r))e[i]=RP(i,r,s);else if(r!=null){const o=gf(r);e[i]=()=>o}}},jE=(t,e)=>{const n=gf(e);t.slots.default=()=>n},NP=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),vl(e,"_",n)):HE(e,t.slots={})}else t.slots={},e&&jE(t,e);vl(t.slots,Ic,1)},PP=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Xe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,HE(e,i)),o=e}else e&&(jE(t,e),o={default:1});if(r)for(const a in i)!BE(a)&&o[a]==null&&delete i[a]};function Oh(t,e,n,s,i=!1){if(ne(t)){t.forEach((d,f)=>Oh(d,e&&(ne(e)?e[f]:e),n,s,i));return}if(rl(s)&&!i)return;const r=s.shapeFlag&4?Ef(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Fe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(We(c)?(u[c]=null,Ee(h,c)&&(h[c]=null)):Nt(c)&&(c.value=null)),oe(l))As(l,a,12,[o,u]);else{const d=We(l),f=Nt(l);if(d||f){const m=()=>{if(t.f){const g=d?Ee(h,l)?h[l]:u[l]:l.value;i?ne(g)&&tf(g,r):ne(g)?g.includes(r)||g.push(r):d?(u[l]=[r],Ee(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ee(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ot(m,n)):m()}}}const Ot=nP;function OP(t){return kP(t)}function kP(t,e){const n=zv();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Jt,insertStaticContent:m}=t,g=(p,_,v,b=null,A=null,k=null,B=void 0,O=null,D=!!_.dynamicChildren)=>{if(p===_)return;p&&!Js(p,_)&&(b=I(p),Ke(p,A,k,!0),p=null),_.patchFlag===-2&&(D=!1,_.dynamicChildren=null);const{type:N,ref:W,shapeFlag:Q}=_;switch(N){case Ac:y(p,_,v,b);break;case mn:E(p,_,v,b);break;case al:p==null&&C(_,v,b,B);break;case Yt:j(p,_,v,b,A,k,B,O,D);break;default:Q&1?x(p,_,v,b,A,k,B,O,D):Q&6?se(p,_,v,b,A,k,B,O,D):(Q&64||Q&128)&&N.process(p,_,v,b,A,k,B,O,D,z)}W!=null&&A&&Oh(W,p&&p.ref,k,_||p,!_)},y=(p,_,v,b)=>{if(p==null)s(_.el=a(_.children),v,b);else{const A=_.el=p.el;_.children!==p.children&&c(A,_.children)}},E=(p,_,v,b)=>{p==null?s(_.el=l(_.children||""),v,b):_.el=p.el},C=(p,_,v,b)=>{[p.el,p.anchor]=m(p.children,_,v,b,p.el,p.anchor)},w=({el:p,anchor:_},v,b)=>{let A;for(;p&&p!==_;)A=d(p),s(p,v,b),p=A;s(_,v,b)},T=({el:p,anchor:_})=>{let v;for(;p&&p!==_;)v=d(p),i(p),p=v;i(_)},x=(p,_,v,b,A,k,B,O,D)=>{_.type==="svg"?B="svg":_.type==="math"&&(B="mathml"),p==null?R(_,v,b,A,k,B,O,D):Z(p,_,A,k,B,O,D)},R=(p,_,v,b,A,k,B,O)=>{let D,N;const{props:W,shapeFlag:Q,transition:G,dirs:te}=p;if(D=p.el=o(p.type,k,W&&W.is,W),Q&8?u(D,p.children):Q&16&&M(p.children,D,null,b,A,Nu(p,k),B,O),te&&qs(p,null,b,"created"),q(D,p,p.scopeId,B,b),W){for(const Ie in W)Ie!=="value"&&!il(Ie)&&r(D,Ie,null,W[Ie],k,p.children,b,A,He);"value"in W&&r(D,"value",null,W.value,k),(N=W.onVnodeBeforeMount)&&bn(N,b,p)}te&&qs(p,null,b,"beforeMount");const ce=DP(A,G);ce&&G.beforeEnter(D),s(D,_,v),((N=W&&W.onVnodeMounted)||ce||te)&&Ot(()=>{N&&bn(N,b,p),ce&&G.enter(D),te&&qs(p,null,b,"mounted")},A)},q=(p,_,v,b,A)=>{if(v&&f(p,v),b)for(let k=0;k<b.length;k++)f(p,b[k]);if(A){let k=A.subTree;if(_===k){const B=A.vnode;q(p,B,B.scopeId,B.slotScopeIds,A.parent)}}},M=(p,_,v,b,A,k,B,O,D=0)=>{for(let N=D;N<p.length;N++){const W=p[N]=O?ms(p[N]):Cn(p[N]);g(null,W,_,v,b,A,k,B,O)}},Z=(p,_,v,b,A,k,B)=>{const O=_.el=p.el;let{patchFlag:D,dynamicChildren:N,dirs:W}=_;D|=p.patchFlag&16;const Q=p.props||Fe,G=_.props||Fe;let te;if(v&&Ks(v,!1),(te=G.onVnodeBeforeUpdate)&&bn(te,v,_,p),W&&qs(_,p,v,"beforeUpdate"),v&&Ks(v,!0),N?Y(p.dynamicChildren,N,O,v,b,Nu(_,A),k):B||fe(p,_,O,null,v,b,Nu(_,A),k,!1),D>0){if(D&16)ue(O,_,Q,G,v,b,A);else if(D&2&&Q.class!==G.class&&r(O,"class",null,G.class,A),D&4&&r(O,"style",Q.style,G.style,A),D&8){const ce=_.dynamicProps;for(let Ie=0;Ie<ce.length;Ie++){const Ve=ce[Ie],Je=Q[Ve],un=G[Ve];(un!==Je||Ve==="value")&&r(O,Ve,Je,un,A,p.children,v,b,He)}}D&1&&p.children!==_.children&&u(O,_.children)}else!B&&N==null&&ue(O,_,Q,G,v,b,A);((te=G.onVnodeUpdated)||W)&&Ot(()=>{te&&bn(te,v,_,p),W&&qs(_,p,v,"updated")},b)},Y=(p,_,v,b,A,k,B)=>{for(let O=0;O<_.length;O++){const D=p[O],N=_[O],W=D.el&&(D.type===Yt||!Js(D,N)||D.shapeFlag&70)?h(D.el):v;g(D,N,W,null,b,A,k,B,!0)}},ue=(p,_,v,b,A,k,B)=>{if(v!==b){if(v!==Fe)for(const O in v)!il(O)&&!(O in b)&&r(p,O,v[O],null,B,_.children,A,k,He);for(const O in b){if(il(O))continue;const D=b[O],N=v[O];D!==N&&O!=="value"&&r(p,O,N,D,B,_.children,A,k,He)}"value"in b&&r(p,"value",v.value,b.value,B)}},j=(p,_,v,b,A,k,B,O,D)=>{const N=_.el=p?p.el:a(""),W=_.anchor=p?p.anchor:a("");let{patchFlag:Q,dynamicChildren:G,slotScopeIds:te}=_;te&&(O=O?O.concat(te):te),p==null?(s(N,v,b),s(W,v,b),M(_.children||[],v,W,A,k,B,O,D)):Q>0&&Q&64&&G&&p.dynamicChildren?(Y(p.dynamicChildren,G,v,A,k,B,O),(_.key!=null||A&&_===A.subTree)&&WE(p,_,!0)):fe(p,_,v,W,A,k,B,O,D)},se=(p,_,v,b,A,k,B,O,D)=>{_.slotScopeIds=O,p==null?_.shapeFlag&512?A.ctx.activate(_,v,b,B,D):Be(_,v,b,A,k,B,D):it(p,_,D)},Be=(p,_,v,b,A,k,B)=>{const O=p.component=HP(p,b,A);if(Tc(p)&&(O.ctx.renderer=z),jP(O),O.asyncDep){if(A&&A.registerDep(O,de),!p.el){const D=O.subTree=_e(mn);E(null,D,_,v)}}else de(O,p,_,v,A,k,B)},it=(p,_,v)=>{const b=_.component=p.component;if(JN(p,_,v))if(b.asyncDep&&!b.asyncResolved){le(b,_,v);return}else b.next=_,KN(b.update),b.effect.dirty=!0,b.update();else _.el=p.el,b.vnode=_},de=(p,_,v,b,A,k,B)=>{const O=()=>{if(p.isMounted){let{next:W,bu:Q,u:G,parent:te,vnode:ce}=p;{const ki=qE(p);if(ki){W&&(W.el=ce.el,le(p,W,B)),ki.asyncDep.then(()=>{p.isUnmounted||O()});return}}let Ie=W,Ve;Ks(p,!1),W?(W.el=ce.el,le(p,W,B)):W=ce,Q&&Iu(Q),(Ve=W.props&&W.props.onVnodeBeforeUpdate)&&bn(Ve,te,W,ce),Ks(p,!0);const Je=Cu(p),un=p.subTree;p.subTree=Je,g(un,Je,h(un.el),I(un),p,A,k),W.el=Je.el,Ie===null&&ZN(p,Je.el),G&&Ot(G,A),(Ve=W.props&&W.props.onVnodeUpdated)&&Ot(()=>bn(Ve,te,W,ce),A)}else{let W;const{el:Q,props:G}=_,{bm:te,m:ce,parent:Ie}=p,Ve=rl(_);if(Ks(p,!1),te&&Iu(te),!Ve&&(W=G&&G.onVnodeBeforeMount)&&bn(W,Ie,_),Ks(p,!0),Q&&Oe){const Je=()=>{p.subTree=Cu(p),Oe(Q,p.subTree,p,A,null)};Ve?_.type.__asyncLoader().then(()=>!p.isUnmounted&&Je()):Je()}else{const Je=p.subTree=Cu(p);g(null,Je,v,b,p,A,k),_.el=Je.el}if(ce&&Ot(ce,A),!Ve&&(W=G&&G.onVnodeMounted)){const Je=_;Ot(()=>bn(W,Ie,Je),A)}(_.shapeFlag&256||Ie&&rl(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&p.a&&Ot(p.a,A),p.isMounted=!0,_=v=b=null}},D=p.effect=new rf(O,Jt,()=>ff(N),p.scope),N=p.update=()=>{D.dirty&&D.run()};N.id=p.uid,Ks(p,!0),N()},le=(p,_,v)=>{_.component=p;const b=p.vnode.props;p.vnode=_,p.next=null,SP(p,_.props,b,v),PP(p,_.children,v),Ci(),W_(p),Si()},fe=(p,_,v,b,A,k,B,O,D=!1)=>{const N=p&&p.children,W=p?p.shapeFlag:0,Q=_.children,{patchFlag:G,shapeFlag:te}=_;if(G>0){if(G&128){Mt(N,Q,v,b,A,k,B,O,D);return}else if(G&256){rt(N,Q,v,b,A,k,B,O,D);return}}te&8?(W&16&&He(N,A,k),Q!==N&&u(v,Q)):W&16?te&16?Mt(N,Q,v,b,A,k,B,O,D):He(N,A,k,!0):(W&8&&u(v,""),te&16&&M(Q,v,b,A,k,B,O,D))},rt=(p,_,v,b,A,k,B,O,D)=>{p=p||Yi,_=_||Yi;const N=p.length,W=_.length,Q=Math.min(N,W);let G;for(G=0;G<Q;G++){const te=_[G]=D?ms(_[G]):Cn(_[G]);g(p[G],te,v,null,A,k,B,O,D)}N>W?He(p,A,k,!0,!1,Q):M(_,v,b,A,k,B,O,D,Q)},Mt=(p,_,v,b,A,k,B,O,D)=>{let N=0;const W=_.length;let Q=p.length-1,G=W-1;for(;N<=Q&&N<=G;){const te=p[N],ce=_[N]=D?ms(_[N]):Cn(_[N]);if(Js(te,ce))g(te,ce,v,null,A,k,B,O,D);else break;N++}for(;N<=Q&&N<=G;){const te=p[Q],ce=_[G]=D?ms(_[G]):Cn(_[G]);if(Js(te,ce))g(te,ce,v,null,A,k,B,O,D);else break;Q--,G--}if(N>Q){if(N<=G){const te=G+1,ce=te<W?_[te].el:b;for(;N<=G;)g(null,_[N]=D?ms(_[N]):Cn(_[N]),v,ce,A,k,B,O,D),N++}}else if(N>G)for(;N<=Q;)Ke(p[N],A,k,!0),N++;else{const te=N,ce=N,Ie=new Map;for(N=ce;N<=G;N++){const $t=_[N]=D?ms(_[N]):Cn(_[N]);$t.key!=null&&Ie.set($t.key,N)}let Ve,Je=0;const un=G-ce+1;let ki=!1,Xp=0;const qr=new Array(un);for(N=0;N<un;N++)qr[N]=0;for(N=te;N<=Q;N++){const $t=p[N];if(Je>=un){Ke($t,A,k,!0);continue}let In;if($t.key!=null)In=Ie.get($t.key);else for(Ve=ce;Ve<=G;Ve++)if(qr[Ve-ce]===0&&Js($t,_[Ve])){In=Ve;break}In===void 0?Ke($t,A,k,!0):(qr[In-ce]=N+1,In>=Xp?Xp=In:ki=!0,g($t,_[In],v,null,A,k,B,O,D),Je++)}const Jp=ki?xP(qr):Yi;for(Ve=Jp.length-1,N=un-1;N>=0;N--){const $t=ce+N,In=_[$t],Zp=$t+1<W?_[$t+1].el:b;qr[N]===0?g(null,In,v,Zp,A,k,B,O,D):ki&&(Ve<0||N!==Jp[Ve]?Pt(In,v,Zp,2):Ve--)}}},Pt=(p,_,v,b,A=null)=>{const{el:k,type:B,transition:O,children:D,shapeFlag:N}=p;if(N&6){Pt(p.component.subTree,_,v,b);return}if(N&128){p.suspense.move(_,v,b);return}if(N&64){B.move(p,_,v,z);return}if(B===Yt){s(k,_,v);for(let Q=0;Q<D.length;Q++)Pt(D[Q],_,v,b);s(p.anchor,_,v);return}if(B===al){w(p,_,v);return}if(b!==2&&N&1&&O)if(b===0)O.beforeEnter(k),s(k,_,v),Ot(()=>O.enter(k),A);else{const{leave:Q,delayLeave:G,afterLeave:te}=O,ce=()=>s(k,_,v),Ie=()=>{Q(k,()=>{ce(),te&&te()})};G?G(k,ce,Ie):Ie()}else s(k,_,v)},Ke=(p,_,v,b=!1,A=!1)=>{const{type:k,props:B,ref:O,children:D,dynamicChildren:N,shapeFlag:W,patchFlag:Q,dirs:G}=p;if(O!=null&&Oh(O,null,v,p,!0),W&256){_.ctx.deactivate(p);return}const te=W&1&&G,ce=!rl(p);let Ie;if(ce&&(Ie=B&&B.onVnodeBeforeUnmount)&&bn(Ie,_,p),W&6)Ft(p.component,v,b);else{if(W&128){p.suspense.unmount(v,b);return}te&&qs(p,null,_,"beforeUnmount"),W&64?p.type.remove(p,_,v,A,z,b):N&&(k!==Yt||Q>0&&Q&64)?He(N,_,v,!1,!0):(k===Yt&&Q&384||!A&&W&16)&&He(D,_,v),b&&cn(p)}(ce&&(Ie=B&&B.onVnodeUnmounted)||te)&&Ot(()=>{Ie&&bn(Ie,_,p),te&&qs(p,null,_,"unmounted")},v)},cn=p=>{const{type:_,el:v,anchor:b,transition:A}=p;if(_===Yt){Vt(v,b);return}if(_===al){T(p);return}const k=()=>{i(v),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:B,delayLeave:O}=A,D=()=>B(v,k);O?O(p.el,k,D):D()}else k()},Vt=(p,_)=>{let v;for(;p!==_;)v=d(p),i(p),p=v;i(_)},Ft=(p,_,v)=>{const{bum:b,scope:A,update:k,subTree:B,um:O}=p;b&&Iu(b),A.stop(),k&&(k.active=!1,Ke(B,p,_,v)),O&&Ot(O,_),Ot(()=>{p.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},He=(p,_,v,b=!1,A=!1,k=0)=>{for(let B=k;B<p.length;B++)Ke(p[B],_,v,b,A)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let U=!1;const V=(p,_,v)=>{p==null?_._vnode&&Ke(_._vnode,null,null,!0):g(_._vnode||null,p,_,null,null,null,v),U||(U=!0,W_(),EE(),U=!1),_._vnode=p},z={p:g,um:Ke,m:Pt,r:cn,mt:Be,mc:M,pc:fe,pbc:Y,n:I,o:t};let me,Oe;return e&&([me,Oe]=e(z)),{render:V,hydrate:me,createApp:bP(V,me)}}function Nu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ks({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function DP(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function WE(t,e,n=!1){const s=t.children,i=e.children;if(ne(s)&&ne(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=ms(i[r]),a.el=o.el),n||WE(o,a)),a.type===Ac&&(a.el=o.el)}}function xP(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function qE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qE(e)}const LP=t=>t.__isTeleport,Yt=Symbol.for("v-fgt"),Ac=Symbol.for("v-txt"),mn=Symbol.for("v-cmt"),al=Symbol.for("v-stc"),mo=[];let fn=null;function $e(t=!1){mo.push(fn=t?null:[])}function MP(){mo.pop(),fn=mo[mo.length-1]||null}let Do=1;function sm(t){Do+=t}function KE(t){return t.dynamicChildren=Do>0?fn||Yi:null,MP(),Do>0&&fn&&fn.push(t),t}function ut(t,e,n,s,i,r){return KE(H(t,e,n,s,i,r,!0))}function _i(t,e,n,s,i){return KE(_e(t,e,n,s,i,!0))}function kh(t){return t?t.__v_isVNode===!0:!1}function Js(t,e){return t.type===e.type&&t.key===e.key}const Ic="__vInternal",zE=({key:t})=>t??null,ll=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Nt(t)||oe(t)?{i:Zt,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,s=0,i=null,r=t===Yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zE(e),ref:e&&ll(e),scopeId:Ec,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Zt};return a?(yf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),Do>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const _e=VP;function VP(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===bE)&&(t=mn),kh(t)){const a=xs(t,e,!0);return n&&yf(a,n),Do>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(t)]=a:fn.push(a)),a.patchFlag|=-2,a}if(GP(t)&&(t=t.__vccOpts),e){e=FP(e);let{class:a,style:l}=e;a&&!We(a)&&(e.class=_c(a)),Le(l)&&(uE(l)&&!ne(l)&&(l=Xe({},l)),e.style=sf(l))}const o=We(t)?1:tP(t)?128:LP(t)?64:Le(t)?4:oe(t)?2:0;return H(t,e,n,s,i,o,r,!0)}function FP(t){return t?uE(t)||Ic in t?Xe({},t):t:null}function xs(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?$P(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zE(a),ref:e&&e.ref?n&&i?ne(i)?i.concat(ll(e)):[i,ll(e)]:ll(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xs(t.ssContent),ssFallback:t.ssFallback&&xs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Qt(t=" ",e=0){return _e(Ac,null,t,e)}function GE(t,e){const n=_e(al,null,t);return n.staticCount=e,n}function cl(t="",e=!1){return e?($e(),_i(mn,null,t)):_e(mn,null,t)}function Cn(t){return t==null||typeof t=="boolean"?_e(mn):ne(t)?_e(Yt,null,t.slice()):typeof t=="object"?ms(t):_e(Ac,null,String(t))}function ms(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xs(t)}function yf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),yf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ic in e)?e._ctx=Zt:i===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),s&64?(n=16,e=[Qt(e)]):n=8);t.children=e,t.shapeFlag|=n}function $P(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=_c([e.class,s.class]));else if(i==="style")e.style=sf([e.style,s.style]);else if(hc(i)){const r=e[i],o=s[i];o&&r!==o&&!(ne(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function bn(t,e,n,s=null){nn(t,e,7,[n,s])}const UP=FE();let BP=0;function HP(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||UP,r={uid:BP++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new vN(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:UE(s,i),emitsOptions:wE(s,i),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:s.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=YN.bind(null,r),t.ce&&t.ce(r),r}let lt=null;const vf=()=>lt||Zt;let Il,Dh;{const t=zv(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Il=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),Dh=e("__VUE_SSR_SETTERS__",n=>bc=n)}const oa=t=>{const e=lt;return Il(t),t.scope.on(),()=>{t.scope.off(),Il(e)}},im=()=>{lt&&lt.scope.off(),Il(null)};function YE(t){return t.vnode.shapeFlag&4}let bc=!1;function jP(t,e=!1){e&&Dh(e);const{props:n,children:s}=t.vnode,i=YE(t);CP(t,n,i,e),NP(t,s);const r=i?WP(t,e):void 0;return e&&Dh(!1),r}function WP(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=hE(new Proxy(t.ctx,yP));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?KP(t):null,r=oa(t);Ci();const o=As(s,t,0,[t.props,i]);if(Si(),r(),Wv(o)){if(o.then(im,im),e)return o.then(a=>{rm(t,a,e)}).catch(a=>{yc(a,t,0)});t.asyncDep=o}else rm(t,o,e)}else QE(t,e)}function rm(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=mE(e)),QE(t,n)}let om;function QE(t,e,n){const s=t.type;if(!t.render){if(!e&&om&&!s.render){const i=s.template||mf(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Xe(Xe({isCustomElement:r,delimiters:a},o),l);s.render=om(i,c)}}t.render=s.render||Jt}{const i=oa(t);Ci();try{vP(t)}finally{Si(),i()}}}function qP(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Lt(t,"get","$attrs"),e[n]}}))}function KP(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return qP(t)},slots:t.slots,emit:t.emit,expose:e}}function Ef(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mE(hE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _o)return _o[n](t)},has(e,n){return n in e||n in _o}}))}function zP(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function GP(t){return oe(t)&&"__vccOpts"in t}const hn=(t,e)=>BN(t,e,bc);function Tf(t,e,n){const s=arguments.length;return s===2?Le(e)&&!ne(e)?kh(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&kh(n)&&(n=[n]),_e(t,e,n))}const YP="3.4.8";/**
* @vue/runtime-dom v3.4.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const QP="http://www.w3.org/2000/svg",XP="http://www.w3.org/1998/Math/MathML",gs=typeof document<"u"?document:null,am=gs&&gs.createElement("template"),JP={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?gs.createElementNS(QP,t):e==="mathml"?gs.createElementNS(XP,t):gs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>gs.createTextNode(t),createComment:t=>gs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{am.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=am.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},us="transition",Gr="animation",xo=Symbol("_vtc"),wf=(t,{slots:e})=>Tf(lP,ZP(t),e);wf.displayName="Transition";const XE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};wf.props=Xe({},NE,XE);const zs=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},lm=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function ZP(t){const e={};for(const j in t)j in XE||(e[j]=t[j]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=eO(i),g=m&&m[0],y=m&&m[1],{onBeforeEnter:E,onEnter:C,onEnterCancelled:w,onLeave:T,onLeaveCancelled:x,onBeforeAppear:R=E,onAppear:q=C,onAppearCancelled:M=w}=e,Z=(j,se,Be)=>{Gs(j,se?u:a),Gs(j,se?c:o),Be&&Be()},Y=(j,se)=>{j._isLeaving=!1,Gs(j,h),Gs(j,f),Gs(j,d),se&&se()},ue=j=>(se,Be)=>{const it=j?q:C,de=()=>Z(se,j,Be);zs(it,[se,de]),cm(()=>{Gs(se,j?l:r),hs(se,j?u:a),lm(it)||um(se,s,g,de)})};return Xe(e,{onBeforeEnter(j){zs(E,[j]),hs(j,r),hs(j,o)},onBeforeAppear(j){zs(R,[j]),hs(j,l),hs(j,c)},onEnter:ue(!1),onAppear:ue(!0),onLeave(j,se){j._isLeaving=!0;const Be=()=>Y(j,se);hs(j,h),sO(),hs(j,d),cm(()=>{j._isLeaving&&(Gs(j,h),hs(j,f),lm(T)||um(j,s,y,Be))}),zs(T,[j,Be])},onEnterCancelled(j){Z(j,!1),zs(w,[j])},onAppearCancelled(j){Z(j,!0),zs(M,[j])},onLeaveCancelled(j){Y(j),zs(x,[j])}})}function eO(t){if(t==null)return null;if(Le(t))return[Pu(t.enter),Pu(t.leave)];{const e=Pu(t);return[e,e]}}function Pu(t){return dN(t)}function hs(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[xo]||(t[xo]=new Set)).add(e)}function Gs(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[xo];n&&(n.delete(e),n.size||(t[xo]=void 0))}function cm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let tO=0;function um(t,e,n,s){const i=t._endId=++tO,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=nO(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function nO(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${us}Delay`),r=s(`${us}Duration`),o=hm(i,r),a=s(`${Gr}Delay`),l=s(`${Gr}Duration`),c=hm(a,l);let u=null,h=0,d=0;e===us?o>0&&(u=us,h=o,d=r.length):e===Gr?c>0&&(u=Gr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?us:Gr:null,d=u?u===us?r.length:l.length:0);const f=u===us&&/\b(transform|all)(,|$)/.test(s(`${us}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function hm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>dm(n)+dm(t[s])))}function dm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function sO(){return document.body.offsetHeight}function iO(t,e,n){const s=t[xo];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rO=Symbol("_vod"),oO=Symbol("");function aO(t,e,n){const s=t.style,i=We(n);if(n&&!i){if(e&&!We(e))for(const r in e)n[r]==null&&xh(s,r,"");for(const r in n)xh(s,r,n[r])}else{const r=s.display;if(i){if(e!==n){const o=s[oO];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");rO in t&&(s.display=r)}}const fm=/\s*!important$/;function xh(t,e,n){if(ne(n))n.forEach(s=>xh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=lO(t,e);fm.test(n)?t.setProperty(Dr(s),n.replace(fm,""),"important"):t[s]=n}}const pm=["Webkit","Moz","ms"],Ou={};function lO(t,e){const n=Ou[e];if(n)return n;let s=$n(e);if(s!=="filter"&&s in t)return Ou[e]=s;s=pc(s);for(let i=0;i<pm.length;i++){const r=pm[i]+s;if(r in t)return Ou[e]=r}return e}const _m="http://www.w3.org/1999/xlink";function cO(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_m,e.slice(6,e.length)):t.setAttributeNS(_m,e,n);else{const r=yN(e);n==null||r&&!Gv(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function uO(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Gv(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function hO(t,e,n,s){t.addEventListener(e,n,s)}function dO(t,e,n,s){t.removeEventListener(e,n,s)}const mm=Symbol("_vei");function fO(t,e,n,s,i=null){const r=t[mm]||(t[mm]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=pO(e);if(s){const c=r[e]=gO(s,i);hO(t,a,c,l)}else o&&(dO(t,a,o,l),r[e]=void 0)}}const gm=/(?:Once|Passive|Capture)$/;function pO(t){let e;if(gm.test(t)){e={};let s;for(;s=t.match(gm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dr(t.slice(2)),e]}let ku=0;const _O=Promise.resolve(),mO=()=>ku||(_O.then(()=>ku=0),ku=Date.now());function gO(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nn(yO(s,n.value),e,5,[s])};return n.value=t,n.attached=mO(),n}function yO(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ym=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vO=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?iO(t,s,c):e==="style"?aO(t,n,s):hc(e)?ef(e)||fO(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):EO(t,e,s,c))?uO(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),cO(t,e,s,c))};function EO(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ym(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ym(e)&&We(n)?!1:e in t}const TO=Xe({patchProp:vO},JP);let vm;function wO(){return vm||(vm=OP(TO))}const AO=(...t)=>{const e=wO().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=bO(s);if(!i)return;const r=e._component;!oe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,IO(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function IO(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bO(t){return We(t)?document.querySelector(t):t}const qn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},CO={},SO=t=>(AE("data-v-b347631a"),t=t(),IE(),t),RO={class:"navbar z-100 navbar-expand-lg w-100 bg-fruuters"},NO={class:"container"},PO=SO(()=>H("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[H("span",{class:"navbar-toggler-icon"})],-1)),OO={class:"collapse navbar-collapse justify-content-start",id:"navbarNav"},kO={class:"col-6 navbar-nav justify-content-evenly fw-light"},DO={class:"nav-item"},xO={class:"nav-item"},LO={class:"nav-item"},MO={class:"nav-item"};function VO(t,e){const n=xt("RouterLink");return $e(),ut("nav",RO,[H("div",NO,[_e(n,{to:"/",class:"text-white h2 text-decoration-none letter nav-title"},{default:Dt(()=>[Qt("früüters.id")]),_:1}),PO,H("div",OO,[H("ul",kO,[H("li",DO,[_e(n,{to:"/categories","active-class":"fw-bold",class:"nav-link text-white"},{default:Dt(()=>[Qt("Categories")]),_:1})]),H("li",xO,[_e(n,{to:"/offers","active-class":"fw-bold",class:"nav-link text-white"},{default:Dt(()=>[Qt("Offers")]),_:1})]),H("li",LO,[_e(n,{to:"/account","active-class":"fw-bold",class:"nav-link text-white"},{default:Dt(()=>[Qt("Account")]),_:1})]),H("li",MO,[_e(n,{to:"/contact","active-class":"fw-bold",class:"nav-link text-white"},{default:Dt(()=>[Qt("Contact")]),_:1})])])])])])}const FO=qn(CO,[["render",VO],["__scopeId","data-v-b347631a"]]),$O={},UO={class:"bg-fruuters footer"},BO=GE('<div class="container" data-v-04febc99><footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4" data-v-04febc99><ul class="col-md-2 mb-0 text-white list-group" data-v-04febc99><li data-v-04febc99>Fruuters.id :</li><li data-v-04febc99>Get Your Own Fruits</li><li data-v-04febc99>More Easier!</li></ul><a href="/" class="text-white col-md-6 d-flex align-items-center justify-content-center mb-3 mb-md-0 link-dark text-decoration-none" data-v-04febc99><div class="display-5 fw-bold footer-title" data-v-04febc99>früüters</div></a><ul class="nav col-md-2 justify-content-end" data-v-04febc99><a href="https://github.com/mozaldy/" class="text-decoration-none" data-v-04febc99><p class="mb-0 text-white" data-v-04febc99>Made by The 2DH Team</p></a></ul></footer></div>',1),HO=[BO];function jO(t,e){return $e(),ut("div",UO,HO)}const WO=qn($O,[["render",jO],["__scopeId","data-v-04febc99"]]),qO=_f({__name:"App",setup(t){return(e,n)=>{const s=xt("router-view");return $e(),ut("div",null,[_e(FO),_e(s,null,{default:Dt(({Component:i})=>[_e(wf,{name:"slide",mode:"out-in"},{default:Dt(()=>[($e(),_i(eP(i),{key:e.$route.path}))]),_:2},1024)]),_:1}),_e(WO)])}}});/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ui=typeof window<"u";function KO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function Du(t,e){const n={};for(const s in e){const i=e[s];n[s]=vn(i)?i.map(t):t(i)}return n}const go=()=>{},vn=Array.isArray,zO=/\/$/,GO=t=>t.replace(zO,"");function xu(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=JO(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function YO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Em(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function QO(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&mr(e.matched[s],n.matched[i])&&JE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function JE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!XO(t[n],e[n]))return!1;return!0}function XO(t,e){return vn(t)?Tm(t,e):vn(e)?Tm(e,t):t===e}function Tm(t,e){return vn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function JO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Lo;(function(t){t.pop="pop",t.push="push"})(Lo||(Lo={}));var yo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yo||(yo={}));function ZO(t){if(!t)if(Ui){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),GO(t)}const ek=/^[^#]+#/;function tk(t,e){return t.replace(ek,"#")+e}function nk(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Cc=()=>({left:window.pageXOffset,top:window.pageYOffset});function sk(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=nk(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wm(t,e){return(history.state?history.state.position-e:-1)+t}const Lh=new Map;function ik(t,e){Lh.set(t,e)}function rk(t){const e=Lh.get(t);return Lh.delete(t),e}let ok=()=>location.protocol+"//"+location.host;function ZE(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Em(l,"")}return Em(n,t)+s+i}function ak(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=ZE(t,location),m=n.value,g=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}y=g?d.position-g.position:0}else s(f);i.forEach(E=>{E(n.value,m,{delta:y,type:Lo.pop,direction:y?y>0?yo.forward:yo.back:yo.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Se({},d.state,{scroll:Cc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Am(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Cc():null}}function lk(t){const{history:e,location:n}=window,s={value:ZE(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:ok()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Se({},e.state,Am(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Se({},i.value,e.state,{forward:l,scroll:Cc()});r(u.current,u,!0);const h=Se({},Am(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function ck(t){t=ZO(t);const e=lk(t),n=ak(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Se({location:"",base:t,go:s,createHref:tk.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function uk(t){return typeof t=="string"||t&&typeof t=="object"}function eT(t){return typeof t=="string"||typeof t=="symbol"}const ds={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tT=Symbol("");var Im;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Im||(Im={}));function gr(t,e){return Se(new Error,{type:t,[tT]:!0},e)}function zn(t,e){return t instanceof Error&&tT in t&&(e==null||!!(t.type&e))}const bm="[^/]+?",hk={sensitive:!1,strict:!1,start:!0,end:!0},dk=/[.+*?^${}()[\]/\\]/g;function fk(t,e){const n=Se({},hk,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(dk,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:g,optional:y,regexp:E}=d;r.push({name:m,repeatable:g,optional:y});const C=E||bm;if(C!==bm){f+=10;try{new RegExp(`(${C})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+T.message)}}let w=g?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(w=y&&c.length<2?`(?:/${w})`:"/"+w),y&&(w+="?"),i+=w,f+=20,y&&(f+=-8),g&&(f+=-20),C===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:g,optional:y}=f,E=m in c?c[m]:"";if(vn(E)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=vn(E)?E.join("/"):E;if(!C)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function pk(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function _k(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=pk(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Cm(s))return 1;if(Cm(i))return-1}return i.length-s.length}function Cm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const mk={type:0,value:""},gk=/[a-zA-Z0-9_]/;function yk(t){if(!t)return[[]];if(t==="/")return[[mk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:gk.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function vk(t,e,n){const s=fk(yk(t.path),n),i=Se(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Ek(t,e){const n=[],s=new Map;e=Nm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,m=Tk(u);m.aliasOf=d&&d.record;const g=Nm(e,u),y=[m];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of w)y.push(Se({},m,{components:d?d.record.components:m.components,path:T,aliasOf:d?d.record:m}))}let E,C;for(const w of y){const{path:T}=w;if(h&&T[0]!=="/"){const x=h.record.path,R=x[x.length-1]==="/"?"":"/";w.path=h.record.path+(T&&R+T)}if(E=vk(w,h,g),d?d.alias.push(E):(C=C||E,C!==E&&C.alias.push(E),f&&u.name&&!Rm(E)&&o(u.name)),m.children){const x=m.children;for(let R=0;R<x.length;R++)r(x[R],E,d&&d.children[R])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&l(E)}return C?()=>{o(C)}:go}function o(u){if(eT(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&_k(u,n[h])>=0&&(u.record.path!==n[h].record.path||!nT(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Rm(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,g;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw gr(1,{location:u});g=d.record.name,f=Se(Sm(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&Sm(u.params,d.keys.map(C=>C.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(C=>C.re.test(m)),d&&(f=d.parse(m),g=d.record.name);else{if(d=h.name?s.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw gr(1,{location:u,currentLocation:h});g=d.record.name,f=Se({},h.params,u.params),m=d.stringify(f)}const y=[];let E=d;for(;E;)y.unshift(E.record),E=E.parent;return{name:g,path:m,params:f,matched:y,meta:Ak(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Sm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Tk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Rm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ak(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Nm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function nT(t,e){return e.children.some(n=>n===t||nT(t,n))}const sT=/#/g,Ik=/&/g,bk=/\//g,Ck=/=/g,Sk=/\?/g,iT=/\+/g,Rk=/%5B/g,Nk=/%5D/g,rT=/%5E/g,Pk=/%60/g,oT=/%7B/g,Ok=/%7C/g,aT=/%7D/g,kk=/%20/g;function Af(t){return encodeURI(""+t).replace(Ok,"|").replace(Rk,"[").replace(Nk,"]")}function Dk(t){return Af(t).replace(oT,"{").replace(aT,"}").replace(rT,"^")}function Mh(t){return Af(t).replace(iT,"%2B").replace(kk,"+").replace(sT,"%23").replace(Ik,"%26").replace(Pk,"`").replace(oT,"{").replace(aT,"}").replace(rT,"^")}function xk(t){return Mh(t).replace(Ck,"%3D")}function Lk(t){return Af(t).replace(sT,"%23").replace(Sk,"%3F")}function Mk(t){return t==null?"":Lk(t).replace(bk,"%2F")}function bl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Vk(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(iT," "),o=r.indexOf("="),a=bl(o<0?r:r.slice(0,o)),l=o<0?null:bl(r.slice(o+1));if(a in e){let c=e[a];vn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Pm(t){let e="";for(let n in t){const s=t[n];if(n=xk(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(s)?s.map(r=>r&&Mh(r)):[s&&Mh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Fk(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=vn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const $k=Symbol(""),Om=Symbol(""),If=Symbol(""),bf=Symbol(""),Vh=Symbol("");function Yr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ys(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(gr(4,{from:n,to:e})):h instanceof Error?a(h):uk(h)?a(gr(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Lu(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Uk(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ys(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=KO(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ys(d,n,s,r,o)()}))}}return i}function Uk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function km(t){const e=sn(If),n=sn(bf),s=hn(()=>e.resolve(ci(t.to))),i=hn(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(mr.bind(null,u));if(d>-1)return d;const f=Dm(l[c-2]);return c>1&&Dm(u)===f&&h[h.length-1].path!==f?h.findIndex(mr.bind(null,l[c-2])):d}),r=hn(()=>i.value>-1&&jk(n.params,s.value.params)),o=hn(()=>i.value>-1&&i.value===n.matched.length-1&&JE(n.params,s.value.params));function a(l={}){return Hk(l)?e[ci(t.replace)?"replace":"push"](ci(t.to)).catch(go):Promise.resolve()}return{route:s,href:hn(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Bk=_f({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:km,setup(t,{slots:e}){const n=gc(km(t)),{options:s}=sn(If),i=hn(()=>({[xm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[xm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Tf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),lT=Bk;function Hk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jk(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!vn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Dm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xm=(t,e,n)=>t??e??n,Wk=_f({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=sn(Vh),i=hn(()=>t.route||s.value),r=sn(Om,0),o=hn(()=>{let c=ci(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=hn(()=>i.value.matched[o.value]);ol(Om,hn(()=>o.value+1)),ol($k,a),ol(Vh,i);const l=Ji();return po(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!mr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Lm(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=Tf(d,Se({},m,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Lm(n.default,{Component:y,route:c})||y}}});function Lm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qk=Wk;function Kk(t){const e=Ek(t.routes,t),n=t.parseQuery||Vk,s=t.stringifyQuery||Pm,i=t.history,r=Yr(),o=Yr(),a=Yr(),l=pE(ds);let c=ds;Ui&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Du.bind(null,I=>""+I),h=Du.bind(null,Mk),d=Du.bind(null,bl);function f(I,U){let V,z;return eT(I)?(V=e.getRecordMatcher(I),z=U):z=I,e.addRoute(z,V)}function m(I){const U=e.getRecordMatcher(I);U&&e.removeRoute(U)}function g(){return e.getRoutes().map(I=>I.record)}function y(I){return!!e.getRecordMatcher(I)}function E(I,U){if(U=Se({},U||l.value),typeof I=="string"){const _=xu(n,I,U.path),v=e.resolve({path:_.path},U),b=i.createHref(_.fullPath);return Se(_,v,{params:d(v.params),hash:bl(_.hash),redirectedFrom:void 0,href:b})}let V;if("path"in I)V=Se({},I,{path:xu(n,I.path,U.path).path});else{const _=Se({},I.params);for(const v in _)_[v]==null&&delete _[v];V=Se({},I,{params:h(_)}),U.params=h(U.params)}const z=e.resolve(V,U),me=I.hash||"";z.params=u(d(z.params));const Oe=YO(s,Se({},I,{hash:Dk(me),path:z.path})),p=i.createHref(Oe);return Se({fullPath:Oe,hash:me,query:s===Pm?Fk(I.query):I.query||{}},z,{redirectedFrom:void 0,href:p})}function C(I){return typeof I=="string"?xu(n,I,l.value.path):Se({},I)}function w(I,U){if(c!==I)return gr(8,{from:U,to:I})}function T(I){return q(I)}function x(I){return T(Se(C(I),{replace:!0}))}function R(I){const U=I.matched[I.matched.length-1];if(U&&U.redirect){const{redirect:V}=U;let z=typeof V=="function"?V(I):V;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=C(z):{path:z},z.params={}),Se({query:I.query,hash:I.hash,params:"path"in z?{}:I.params},z)}}function q(I,U){const V=c=E(I),z=l.value,me=I.state,Oe=I.force,p=I.replace===!0,_=R(V);if(_)return q(Se(C(_),{state:typeof _=="object"?Se({},me,_.state):me,force:Oe,replace:p}),U||V);const v=V;v.redirectedFrom=U;let b;return!Oe&&QO(s,z,V)&&(b=gr(16,{to:v,from:z}),Pt(z,z,!0,!1)),(b?Promise.resolve(b):Y(v,z)).catch(A=>zn(A)?zn(A,2)?A:Mt(A):fe(A,v,z)).then(A=>{if(A){if(zn(A,2))return q(Se({replace:p},C(A.to),{state:typeof A.to=="object"?Se({},me,A.to.state):me,force:Oe}),U||v)}else A=j(v,z,!0,p,me);return ue(v,z,A),A})}function M(I,U){const V=w(I,U);return V?Promise.reject(V):Promise.resolve()}function Z(I){const U=Vt.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(I):I()}function Y(I,U){let V;const[z,me,Oe]=zk(I,U);V=Lu(z.reverse(),"beforeRouteLeave",I,U);for(const _ of z)_.leaveGuards.forEach(v=>{V.push(ys(v,I,U))});const p=M.bind(null,I,U);return V.push(p),He(V).then(()=>{V=[];for(const _ of r.list())V.push(ys(_,I,U));return V.push(p),He(V)}).then(()=>{V=Lu(me,"beforeRouteUpdate",I,U);for(const _ of me)_.updateGuards.forEach(v=>{V.push(ys(v,I,U))});return V.push(p),He(V)}).then(()=>{V=[];for(const _ of Oe)if(_.beforeEnter)if(vn(_.beforeEnter))for(const v of _.beforeEnter)V.push(ys(v,I,U));else V.push(ys(_.beforeEnter,I,U));return V.push(p),He(V)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),V=Lu(Oe,"beforeRouteEnter",I,U),V.push(p),He(V))).then(()=>{V=[];for(const _ of o.list())V.push(ys(_,I,U));return V.push(p),He(V)}).catch(_=>zn(_,8)?_:Promise.reject(_))}function ue(I,U,V){a.list().forEach(z=>Z(()=>z(I,U,V)))}function j(I,U,V,z,me){const Oe=w(I,U);if(Oe)return Oe;const p=U===ds,_=Ui?history.state:{};V&&(z||p?i.replace(I.fullPath,Se({scroll:p&&_&&_.scroll},me)):i.push(I.fullPath,me)),l.value=I,Pt(I,U,V,p),Mt()}let se;function Be(){se||(se=i.listen((I,U,V)=>{if(!Ft.listening)return;const z=E(I),me=R(z);if(me){q(Se(me,{replace:!0}),z).catch(go);return}c=z;const Oe=l.value;Ui&&ik(wm(Oe.fullPath,V.delta),Cc()),Y(z,Oe).catch(p=>zn(p,12)?p:zn(p,2)?(q(p.to,z).then(_=>{zn(_,20)&&!V.delta&&V.type===Lo.pop&&i.go(-1,!1)}).catch(go),Promise.reject()):(V.delta&&i.go(-V.delta,!1),fe(p,z,Oe))).then(p=>{p=p||j(z,Oe,!1),p&&(V.delta&&!zn(p,8)?i.go(-V.delta,!1):V.type===Lo.pop&&zn(p,20)&&i.go(-1,!1)),ue(z,Oe,p)}).catch(go)}))}let it=Yr(),de=Yr(),le;function fe(I,U,V){Mt(I);const z=de.list();return z.length?z.forEach(me=>me(I,U,V)):console.error(I),Promise.reject(I)}function rt(){return le&&l.value!==ds?Promise.resolve():new Promise((I,U)=>{it.add([I,U])})}function Mt(I){return le||(le=!I,Be(),it.list().forEach(([U,V])=>I?V(I):U()),it.reset()),I}function Pt(I,U,V,z){const{scrollBehavior:me}=t;if(!Ui||!me)return Promise.resolve();const Oe=!V&&rk(wm(I.fullPath,0))||(z||!V)&&history.state&&history.state.scroll||null;return yE().then(()=>me(I,U,Oe)).then(p=>p&&sk(p)).catch(p=>fe(p,I,U))}const Ke=I=>i.go(I);let cn;const Vt=new Set,Ft={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:y,getRoutes:g,resolve:E,options:t,push:T,replace:x,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:rt,install(I){const U=this;I.component("RouterLink",lT),I.component("RouterView",qk),I.config.globalProperties.$router=U,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>ci(l)}),Ui&&!cn&&l.value===ds&&(cn=!0,T(i.location).catch(me=>{}));const V={};for(const me in ds)Object.defineProperty(V,me,{get:()=>l.value[me],enumerable:!0});I.provide(If,U),I.provide(bf,lE(V)),I.provide(Vh,l);const z=I.unmount;Vt.add(I),I.unmount=function(){Vt.delete(I),Vt.size<1&&(c=ds,se&&se(),se=null,l.value=ds,cn=!1,le=!1),z()}}};function He(I){return I.reduce((U,V)=>U.then(()=>Z(V)),Promise.resolve())}return Ft}function zk(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>mr(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>mr(c,l))||i.push(l))}return[n,s,i]}function Gk(){return sn(bf)}const Yk={props:{text1:String,text2:String,img_url:String,price:String}},Qk={class:"rounded-bottom-5 bg-fruuters"},Xk={class:"d-flex flex-wrap justify-content-between pb-3 ms-10p"},Jk={class:"my-auto h-fit col-6"},Zk={class:"text-white display-5 text-uppercase fw-bold fst-italic"},eD={class:"text-end text-white display-5 text-uppercase fw-bold fst-italic"},tD={key:0,class:"text-white text-uppercase"},nD={class:"col-5 z-top"},sD=["src"];function iD(t,e,n,s,i,r){return $e(),ut("header",Qk,[H("div",Xk,[H("div",Jk,[H("h1",Zk,Ts(n.text1),1),H("h1",eD,Ts(n.text2),1),n.price?($e(),ut("h1",tD,"$ "+Ts(n.price)+".00/kg",1)):cl("",!0)]),H("div",nD,[H("img",{src:n.img_url,alt:"",class:"w-100 rounded rounded-5"},null,8,sD)])])])}const aa=qn(Yk,[["render",iD],["__scopeId","data-v-fca75644"]]),rD={components:{RouterLink:lT},props:{title:String,img_url:String,description:String,discount:{type:Number,default:1},price:Number,limited:{type:Boolean,default:!1},index:Number,buy_now:Boolean,product_id:String}},cT=t=>(AE("data-v-c4ceb5cf"),t=t(),IE(),t),oD={class:"left col-sm-4"},aD=["src"],lD={class:"right col-sm-6 d-flex flex-column justify-content-evenly"},cD={key:0,class:"text-uppercase display-5 fw-bold fst-italic"},uD={key:1},hD={class:"d-flex btn-container"},dD=cT(()=>H("button",{type:"button",class:"btn btn-primary rounded-pill rounded-5 px-3 border-0"}," Add to Cart ",-1)),fD={key:0,type:"button",class:"btn btn-secondary rounded-pill rounded-5 px-3 border-0"},pD=cT(()=>H("button",{type:"button",class:"btn btn-primary rounded-pill rounded-5 px-3 border-0"}," Learn more ",-1));function _D(t,e,n,s,i,r){const o=xt("RouterLink");return $e(),ut("div",{class:_c({"d-flex":!0,"flex-wrap":!0,"mb-5":!0,"justify-content-evenly":!0,"flex-row-reverse":n.index%2!==0})},[H("div",oD,[H("img",{src:n.img_url,alt:"",class:"w-100 rounded rounded-5"},null,8,aD)]),H("div",lD,[n.limited?($e(),ut("h1",cD," today's limited offer ")):cl("",!0),H("h3",null,Ts(n.title),1),H("p",null,Ts(n.description),1),n.discount!=1?($e(),ut("h1",uD,"$ "+Ts((n.price-n.price*(n.discount/100)).toFixed(2))+"/kg",1)):cl("",!0),H("div",hD,[_e(o,{to:"/product",class:"me-3 text-white text-decoration-none"},{default:Dt(()=>[dD]),_:1}),n.buy_now?($e(),_i(o,{key:0,to:"/product",class:"text-white text-decoration-none"},{default:Dt(()=>[n.buy_now?($e(),ut("button",fD," Buy Now ")):cl("",!0)]),_:1})):($e(),_i(o,{key:1,to:{name:"product",params:{productId:n.product_id}},class:"text-white text-decoration-none"},{default:Dt(()=>[pD]),_:1},8,["to"]))])])],2)}const uT=qn(rD,[["render",_D],["__scopeId","data-v-c4ceb5cf"]]);var Mm={};/**
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
 */const hT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw xr(e)},xr=function(t){return new Error("Firebase Database ("+hT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const dT=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mD=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new gD;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fT=function(t){const e=dT(t);return Sc.encodeByteArray(e,!0)},Cl=function(t){return fT(t).replace(/\./g,"")},Sl=function(t){try{return Sc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yD(t){return pT(void 0,t)}function pT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!vD(n)||(t[n]=pT(t[n],e[n]));return t}function vD(t){return t!=="__proto__"}/**
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
 */function ED(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TD=()=>ED().__FIREBASE_DEFAULTS__,wD=()=>{if(typeof process>"u"||typeof Mm>"u")return;const t=Mm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sl(t[1]);return e&&JSON.parse(e)},Cf=()=>{try{return TD()||wD()||AD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ID=t=>{var e,n;return(n=(e=Cf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bD=t=>{const e=ID(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},_T=()=>{var t;return(t=Cf())===null||t===void 0?void 0:t.config},CD=t=>{var e;return(e=Cf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Mo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function SD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cl(JSON.stringify(n)),Cl(JSON.stringify(o)),""].join(".")}/**
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
 */function Un(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Un())}function RD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gT(){return hT.NODE_ADMIN===!0}function yT(){try{return typeof indexedDB=="object"}catch{return!1}}function ND(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const PD="FirebaseError";class os extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=PD,Object.setPrototypeOf(this,os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?OD(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new os(i,a,s)}}function OD(t,e){return t.replace(kD,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const kD=/\{\$([^}]+)}/g;/**
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
 */function Vo(t){return JSON.parse(t)}function ct(t){return JSON.stringify(t)}/**
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
 */const vT=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Vo(Sl(r[0])||""),n=Vo(Sl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},DD=function(t){const e=vT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xD=function(t){const e=vT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function as(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rl(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Fh(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Fm(r)&&Fm(o)){if(!Fh(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Fm(t){return t!==null&&typeof t=="object"}/**
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
 */function Rf(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class LD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function MD(t,e){const n=new VD(t,e);return n.subscribe.bind(n)}class VD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");FD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Mu),i.error===void 0&&(i.error=Mu),i.complete===void 0&&(i.complete=Mu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mu(){}function $D(t,e){return`${t} failed: ${e} argument `}/**
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
 */const UD=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,F(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Rc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Hs(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class BD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Mo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jD(e))try{this.getOrInitializeService({instanceIdentifier:Ys})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ys){return this.instances.has(e)}getOptions(e=Ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:HD(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ys){return this.component?this.component.multipleInstances?e:Ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HD(t){return t===Ys?void 0:t}function jD(t){return t.instantiationMode==="EAGER"}/**
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
 */class WD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const qD={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},KD=he.INFO,zD={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},GD=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=zD[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=KD,this._logHandler=GD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const YD=(t,e)=>e.some(n=>t instanceof n);let $m,Um;function QD(){return $m||($m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XD(){return Um||(Um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ET=new WeakMap,$h=new WeakMap,TT=new WeakMap,Vu=new WeakMap,Nf=new WeakMap;function JD(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Is(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ET.set(n,t)}).catch(()=>{}),Nf.set(e,t),e}function ZD(t){if($h.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$h.set(t,e)}let Uh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||TT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Is(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ex(t){Uh=t(Uh)}function tx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Fu(this),e,...n);return TT.set(s,e.sort?e.sort():[e]),Is(s)}:XD().includes(t)?function(...e){return t.apply(Fu(this),e),Is(ET.get(this))}:function(...e){return Is(t.apply(Fu(this),e))}}function nx(t){return typeof t=="function"?tx(t):(t instanceof IDBTransaction&&ZD(t),YD(t,QD())?new Proxy(t,Uh):t)}function Is(t){if(t instanceof IDBRequest)return JD(t);if(Vu.has(t))return Vu.get(t);const e=nx(t);return e!==t&&(Vu.set(t,e),Nf.set(e,t)),e}const Fu=t=>Nf.get(t);function sx(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Is(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Is(o.result),l.oldVersion,l.newVersion,Is(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ix=["get","getKey","getAll","getAllKeys","count"],rx=["put","add","delete","clear"],$u=new Map;function Bm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($u.get(e))return $u.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=rx.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ix.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return $u.set(e,r),r}ex(t=>({...t,get:(e,n,s)=>Bm(e,n)||t.get(e,n,s),has:(e,n)=>!!Bm(e,n)||t.has(e,n)}));/**
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
 */class ox{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ax(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ax(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bh="@firebase/app",Hm="0.9.25";/**
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
 */const mi=new la("@firebase/app"),lx="@firebase/app-compat",cx="@firebase/analytics-compat",ux="@firebase/analytics",hx="@firebase/app-check-compat",dx="@firebase/app-check",fx="@firebase/auth",px="@firebase/auth-compat",_x="@firebase/database",mx="@firebase/database-compat",gx="@firebase/functions",yx="@firebase/functions-compat",vx="@firebase/installations",Ex="@firebase/installations-compat",Tx="@firebase/messaging",wx="@firebase/messaging-compat",Ax="@firebase/performance",Ix="@firebase/performance-compat",bx="@firebase/remote-config",Cx="@firebase/remote-config-compat",Sx="@firebase/storage",Rx="@firebase/storage-compat",Nx="@firebase/firestore",Px="@firebase/firestore-compat",Ox="firebase",kx="10.7.1";/**
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
 */const Hh="[DEFAULT]",Dx={[Bh]:"fire-core",[lx]:"fire-core-compat",[ux]:"fire-analytics",[cx]:"fire-analytics-compat",[dx]:"fire-app-check",[hx]:"fire-app-check-compat",[fx]:"fire-auth",[px]:"fire-auth-compat",[_x]:"fire-rtdb",[mx]:"fire-rtdb-compat",[gx]:"fire-fn",[yx]:"fire-fn-compat",[vx]:"fire-iid",[Ex]:"fire-iid-compat",[Tx]:"fire-fcm",[wx]:"fire-fcm-compat",[Ax]:"fire-perf",[Ix]:"fire-perf-compat",[bx]:"fire-rc",[Cx]:"fire-rc-compat",[Sx]:"fire-gcs",[Rx]:"fire-gcs-compat",[Nx]:"fire-fst",[Px]:"fire-fst-compat","fire-js":"fire-js",[Ox]:"fire-js-all"};/**
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
 */const Nl=new Map,jh=new Map;function xx(t,e){try{t.container.addComponent(e)}catch(n){mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(jh.has(e))return mi.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,t);for(const n of Nl.values())xx(n,t);return!0}function Lx(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Mx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bs=new Lr("app","Firebase",Mx);/**
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
 */class Vx{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}/**
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
 */const Mr=kx;function wT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hh,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw bs.create("bad-app-name",{appName:String(i)});if(n||(n=_T()),!n)throw bs.create("no-options");const r=Nl.get(i);if(r){if(Fh(n,r.options)&&Fh(s,r.config))return r;throw bs.create("duplicate-app",{appName:i})}const o=new WD(i);for(const l of jh.values())o.addComponent(l);const a=new Vx(n,s,o);return Nl.set(i,a),a}function AT(t=Hh){const e=Nl.get(t);if(!e&&t===Hh&&_T())return wT();if(!e)throw bs.create("no-app",{appName:t});return e}function Ht(t,e,n){var s;let i=(s=Dx[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mi.warn(a.join(" "));return}Bn(new En(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Fx="firebase-heartbeat-database",$x=1,Fo="firebase-heartbeat-store";let Uu=null;function IT(){return Uu||(Uu=sx(Fx,$x,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fo)}}}).catch(t=>{throw bs.create("idb-open",{originalErrorMessage:t.message})})),Uu}async function Ux(t){try{return await(await IT()).transaction(Fo).objectStore(Fo).get(bT(t))}catch(e){if(e instanceof os)mi.warn(e.message);else{const n=bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mi.warn(n.message)}}}async function jm(t,e){try{const s=(await IT()).transaction(Fo,"readwrite");await s.objectStore(Fo).put(e,bT(t)),await s.done}catch(n){if(n instanceof os)mi.warn(n.message);else{const s=bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mi.warn(s.message)}}}function bT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Bx=1024,Hx=30*24*60*60*1e3;class jx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qx(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Hx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wm(),{heartbeatsToSend:s,unsentEntries:i}=Wx(this._heartbeatsCache.heartbeats),r=Cl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Wm(){return new Date().toISOString().substring(0,10)}function Wx(t,e=Bx){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qm(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class qx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yT()?ND().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ux(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qm(t){return Cl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Kx(t){Bn(new En("platform-logger",e=>new ox(e),"PRIVATE")),Bn(new En("heartbeat",e=>new jx(e),"PRIVATE")),Ht(Bh,Hm,t),Ht(Bh,Hm,"esm2017"),Ht("fire-js","")}Kx("");function CT(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ST(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zx=ST,RT=new Lr("auth","Firebase",ST());/**
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
 */const Pl=new la("@firebase/auth");function Gx(t,...e){Pl.logLevel<=he.WARN&&Pl.warn(`Auth (${Mr}): ${t}`,...e)}function ul(t,...e){Pl.logLevel<=he.ERROR&&Pl.error(`Auth (${Mr}): ${t}`,...e)}/**
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
 */function Km(t,...e){throw Pf(t,...e)}function NT(t,...e){return Pf(t,...e)}function Yx(t,e,n){const s=Object.assign(Object.assign({},zx()),{[e]:n});return new Lr("auth","Firebase",s).create(e,{appName:t.name})}function Pf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return RT.create(t,...e)}function Re(t,e,...n){if(!t)throw Pf(e,...n)}function vo(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ul(e),new Error(e)}function Ol(t,e){t||vo(e)}function Qx(){return zm()==="http:"||zm()==="https:"}function zm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Xx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qx()||RD()||"connection"in navigator)?navigator.onLine:!0}function Jx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ol(n>e,"Short delay should be less than long delay!"),this.isMobile=Sf()||mT()}get(){return Xx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zx(t,e){Ol(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class PT{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tL=new ca(3e4,6e4);function OT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nc(t,e,n,s,i={}){return kT(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Rf(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),PT.fetch()(DT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function kT(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},eL),e);try{const i=new nL(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ha(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Yx(t,u,c);Km(t,u)}}catch(i){if(i instanceof os)throw i;Km(t,"network-request-failed",{message:String(i)})}}function DT(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Zx(t.config,i):`${t.config.apiScheme}://${i}`}class nL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(NT(this.auth,"network-request-failed")),tL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=NT(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function sL(t,e){return Nc(t,"POST","/v1/accounts:delete",e)}async function iL(t,e){return Nc(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rL(t,e=!1){const n=Hs(t),s=await n.getIdToken(e),i=xT(s);Re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Eo(Bu(i.auth_time)),issuedAtTime:Eo(Bu(i.iat)),expirationTime:Eo(Bu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Bu(t){return Number(t)*1e3}function xT(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sl(n);return i?JSON.parse(i):(ul("Failed to decode base64 JWT payload"),null)}catch(i){return ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function oL(t){const e=xT(t);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wh(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof os&&aL(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function aL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class LT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kl(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Wh(t,iL(n,{idToken:s}));Re(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?hL(r.providerUserInfo):[],a=uL(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new LT(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cL(t){const e=Hs(t);await kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uL(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function hL(t){return t.map(e=>{var{providerId:n}=e,s=CT(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function dL(t,e){const n=await kT(t,{},async()=>{const s=Rf({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=DT(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",PT.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fL(t,e){return Nc(t,"POST","/v2/accounts:revokeToken",OT(t,e))}/**
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
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await dL(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new $o;return s&&(Re(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Re(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return vo("not implemented")}}/**
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
 */function fs(t,e){Re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=CT(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new LT(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Wh(this,this.stsTokenManager.getToken(this.auth,e));return Re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rL(this,e)}reload(){return cL(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await kl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wh(this,sL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:T,isAnonymous:x,providerData:R,stsTokenManager:q}=n;Re(w&&q,e,"internal-error");const M=$o.fromJSON(this.name,q);Re(typeof w=="string",e,"internal-error"),fs(h,e.name),fs(d,e.name),Re(typeof T=="boolean",e,"internal-error"),Re(typeof x=="boolean",e,"internal-error"),fs(f,e.name),fs(m,e.name),fs(g,e.name),fs(y,e.name),fs(E,e.name),fs(C,e.name);const Z=new er({uid:w,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:x,photoURL:m,phoneNumber:f,tenantId:g,stsTokenManager:M,createdAt:E,lastLoginAt:C});return R&&Array.isArray(R)&&(Z.providerData=R.map(Y=>Object.assign({},Y))),y&&(Z._redirectEventId=y),Z}static async _fromIdTokenResponse(e,n,s=!1){const i=new $o;i.updateFromServerResponse(n);const r=new er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await kl(r),r}}/**
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
 */const Gm=new Map;function ti(t){Ol(t instanceof Function,"Expected a class definition");let e=Gm.get(t);return e?(Ol(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gm.set(t,e),e)}/**
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
 */class MT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}MT.type="NONE";const Ym=MT;/**
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
 */function Hu(t,e,n){return`firebase:${t}:${e}:${n}`}class tr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Hu(this.userKey,i.apiKey,r),this.fullPersistenceKey=Hu("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new tr(ti(Ym),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ti(Ym);const o=Hu(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=er._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new tr(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new tr(r,e,s))}}/**
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
 */function Qm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gL(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pL(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vL(e))return"Blackberry";if(EL(e))return"Webos";if(_L(e))return"Safari";if((e.includes("chrome/")||mL(e))&&!e.includes("edge/"))return"Chrome";if(yL(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pL(t=Un()){return/firefox\//i.test(t)}function _L(t=Un()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mL(t=Un()){return/crios\//i.test(t)}function gL(t=Un()){return/iemobile/i.test(t)}function yL(t=Un()){return/android/i.test(t)}function vL(t=Un()){return/blackberry/i.test(t)}function EL(t=Un()){return/webos/i.test(t)}/**
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
 */function VT(t,e=[]){let n;switch(t){case"Browser":n=Qm(Un());break;case"Worker":n=`${Qm(Un())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mr}/${s}`}/**
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
 */class TL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function wL(t,e={}){return Nc(t,"GET","/v2/passwordPolicy",OT(t,e))}/**
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
 */const AL=6;class IL{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class bL{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xm(this),this.idTokenSubscription=new Xm(this),this.beforeStateQueue=new TL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ti(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await tr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Hs(e):null;return n&&Re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ti(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wL(this),n=new IL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await fL(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ti(e)||this._popupRedirectResolver;Re(n,this,"argument-error"),this.redirectPersistenceManager=await tr.create(this,[ti(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function CL(t){return Hs(t)}class Xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=MD(n=>this.observer=n)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function SL(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ti);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new ca(3e4,6e4);/**
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
 */new ca(5e3,15e3);var Jm="@firebase/auth",Zm="1.5.1";/**
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
 */class RL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PL(t){Bn(new En("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Re(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VT(t)},c=new bL(s,i,r,l);return SL(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Bn(new En("auth-internal",e=>{const n=CL(e.getProvider("auth").getImmediate());return(s=>new RL(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Jm,Zm,NL(t)),Ht(Jm,Zm,"esm2017")}/**
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
 */const OL=5*60;CD("authIdTokenMaxAge");PL("Browser");/**
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
 */const kL=new Map,DL={activated:!1,tokenObservers:[]};function Tn(t){return kL.get(t)||Object.assign({},DL)}const eg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class xL{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Mo,this.pending.promise.catch(n=>{}),await LL(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Mo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function LL(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const ML={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Dl=new Lr("appCheck","AppCheck",ML);function FT(t){if(!Tn(t).activated)throw Dl.create("use-before-activation",{appName:t.name})}/**
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
 */const VL="firebase-app-check-database",FL=1,qh="firebase-app-check-store";let ja=null;function $L(){return ja||(ja=new Promise((t,e)=>{try{const n=indexedDB.open(VL,FL);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Dl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(qh,{keyPath:"compositeKey"})}}}catch(n){e(Dl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ja)}function UL(t,e){return BL(HL(t),e)}async function BL(t,e){const s=(await $L()).transaction(qh,"readwrite"),r=s.objectStore(qh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Dl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function HL(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Kh=new la("@firebase/app-check");function tg(t,e){return yT()?UL(t,e).catch(n=>{Kh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const jL={error:"UNKNOWN_ERROR"};function WL(t){return Sc.encodeString(JSON.stringify(t),!1)}async function zh(t,e=!1){const n=t.app;FT(n);const s=Tn(n);let i=s.token,r;if(i&&!io(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(io(l)?i=l:await tg(n,void 0))}if(!e&&i&&io(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Tn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Kh.warn(l.message):Kh.error(l),r=l}let a;return i?r?io(i)?a={token:i.token,internalError:r}:a=sg(r):(a={token:i.token},s.token=i,await tg(n,i)):a=sg(r),o&&GL(n,a),a}async function qL(t){const e=t.app;FT(e);const{provider:n}=Tn(e);{const{token:s}=await n.getToken();return{token:s}}}function KL(t,e,n,s){const{app:i}=t,r=Tn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&io(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),ng(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>ng(t))}function $T(t,e){const n=Tn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function ng(t){const{app:e}=t,n=Tn(e);let s=n.tokenRefresher;s||(s=zL(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function zL(t){const{app:e}=t;return new xL(async()=>{const n=Tn(e);let s;if(n.token?s=await zh(t,!0):s=await zh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Tn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},eg.RETRIAL_MIN_WAIT,eg.RETRIAL_MAX_WAIT)}function GL(t,e){const n=Tn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function io(t){return t.expireTimeMillis-Date.now()>0}function sg(t){return{token:WL(jL),error:t}}/**
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
 */class YL{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Tn(this.app);for(const n of e)$T(this.app,n.next);return Promise.resolve()}}function QL(t,e){return new YL(t,e)}function XL(t){return{getToken:e=>zh(t,e),getLimitedUseToken:()=>qL(t),addTokenListener:e=>KL(t,"INTERNAL",e),removeTokenListener:e=>$T(t.app,e)}}const JL="@firebase/app-check",ZL="0.8.1",e1="app-check",ig="app-check-internal";function t1(){Bn(new En(e1,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return QL(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(ig).initialize()})),Bn(new En(ig,t=>{const e=t.getProvider("app-check").getImmediate();return XL(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ht(JL,ZL)}t1();var n1="firebase",s1="10.7.1";/**
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
 */Ht(n1,s1,"app");const i1=Symbol("firebaseApp");function UT(t){return vf()&&sn(i1,null)||AT(t)}const Pn=()=>{};function Of(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function r1(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ri(t){return!!t&&typeof t=="object"}const o1=Object.prototype;function a1(t){return Ri(t)&&Object.getPrototypeOf(t)===o1}function kf(t){return Ri(t)&&t.type==="document"}function l1(t){return Ri(t)&&t.type==="collection"}function c1(t){return kf(t)||l1(t)}function u1(t){return Ri(t)&&t.type==="query"}function h1(t){return Ri(t)&&"ref"in t}function d1(t){return Ri(t)&&typeof t.bucket=="string"}function f1(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const p1=Symbol.for("v-scx");function _1(){return!!sn(p1,0)}var rg={};const og="@firebase/database",ag="1.0.2";/**
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
 */let BT="";function m1(t){BT=t}/**
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
 */class g1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class y1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return as(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const HT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new g1(e)}}catch{}return new y1},ni=HT("localStorage"),Gh=HT("sessionStorage");/**
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
 */const nr=new la("@firebase/database"),v1=function(){let t=1;return function(){return t++}}(),jT=function(t){const e=UD(t),n=new LD;n.update(e);const s=n.digest();return Sc.encodeByteArray(s)},ua=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ua.apply(null,s):typeof s=="object"?e+=ct(s):e+=s,e+=" "}return e};let ui=null,lg=!0;const E1=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(nr.logLevel=he.VERBOSE,ui=nr.log.bind(nr),e&&Gh.set("logging_enabled",!0)):typeof t=="function"?ui=t:(ui=null,Gh.remove("logging_enabled"))},_t=function(...t){if(lg===!0&&(lg=!1,ui===null&&Gh.get("logging_enabled")===!0&&E1(!0)),ui){const e=ua.apply(null,t);ui(e)}},ha=function(t){return function(...e){_t(t,...e)}},Yh=function(...t){const e="FIREBASE INTERNAL ERROR: "+ua(...t);nr.error(e)},gi=function(...t){const e=`FIREBASE FATAL ERROR: ${ua(...t)}`;throw nr.error(e),new Error(e)},jt=function(...t){const e="FIREBASE WARNING: "+ua(...t);nr.warn(e)},T1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},WT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},w1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vr="[MIN_NAME]",yi="[MAX_NAME]",Vr=function(t,e){if(t===e)return 0;if(t===vr||e===yi)return-1;if(e===vr||t===yi)return 1;{const n=cg(t),s=cg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},A1=function(t,e){return t===e?0:t<e?-1:1},Qr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ct(e))},Df=function(t){if(typeof t!="object"||t===null)return ct(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ct(e[s]),n+=":",n+=Df(t[e[s]]);return n+="}",n},qT=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function an(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const KT=function(t){F(!WT(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},I1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},b1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},C1=new RegExp("^-?(0*)\\d{1,10}$"),S1=-2147483648,R1=2147483647,cg=function(t){if(C1.test(t)){const e=Number(t);if(e>=S1&&e<=R1)return e}return null},da=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},N1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},To=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class P1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class O1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jt(e)}}class Qh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qh.OWNER="owner";/**
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
 */const xf="5",zT="v",GT="s",YT="r",QT="f",XT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,JT="ls",ZT="p",Xh="ac",ew="websocket",tw="long_polling";/**
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
 */class k1{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ni.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ni.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function D1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function nw(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let s;if(e===ew)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===tw)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);D1(t)&&(n.ns=t.namespace);const i=[];return an(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class x1{constructor(){this.counters_={}}incrementCounter(e,n=1){as(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yD(this.counters_)}}/**
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
 */const ju={},Wu={};function Lf(t){const e=t.toString();return ju[e]||(ju[e]=new x1),ju[e]}function L1(t,e){const n=t.toString();return Wu[n]||(Wu[n]=e()),Wu[n]}/**
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
 */class M1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&da(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ug="start",V1="close",F1="pLPCommand",$1="pRTLPCB",sw="id",iw="pw",rw="ser",U1="cb",B1="seg",H1="ts",j1="d",W1="dframe",ow=1870,aw=30,q1=ow-aw,K1=25e3,z1=3e4;class Ki{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ha(e),this.stats_=Lf(n),this.urlFn=l=>(this.appCheckToken&&(l[Xh]=this.appCheckToken),nw(n,tw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new M1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(z1)),w1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ug)this.id=a,this.password=l;else if(o===V1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ug]="t",s[rw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[U1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[zT]=xf,this.transportSessionId&&(s[GT]=this.transportSessionId),this.lastSessionId&&(s[JT]=this.lastSessionId),this.applicationId&&(s[ZT]=this.applicationId),this.appCheckToken&&(s[Xh]=this.appCheckToken),typeof location<"u"&&location.hostname&&XT.test(location.hostname)&&(s[YT]=QT);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ki.forceAllow_=!0}static forceDisallow(){Ki.forceDisallow_=!0}static isAvailable(){return Ki.forceAllow_?!0:!Ki.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!I1()&&!b1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=fT(n),i=qT(s,q1);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[W1]="t",s[sw]=e,s[iw]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ct(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Mf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=v1(),window[F1+this.uniqueCallbackIdentifier]=e,window[$1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Mf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sw]=this.myID,e[iw]=this.myPW,e[rw]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+aw+s.length<=ow;){const o=this.pendingSegs.shift();s=s+"&"+B1+i+"="+o.seg+"&"+H1+i+"="+o.ts+"&"+j1+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(K1)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const G1=16384,Y1=45e3;let xl=null;typeof MozWebSocket<"u"?xl=MozWebSocket:typeof WebSocket<"u"&&(xl=WebSocket);class dn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ha(this.connId),this.stats_=Lf(n),this.connURL=dn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[zT]=xf,typeof location<"u"&&location.hostname&&XT.test(location.hostname)&&(o[YT]=QT),n&&(o[GT]=n),s&&(o[JT]=s),i&&(o[Xh]=i),r&&(o[ZT]=r),nw(e,ew,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ni.set("previous_websocket_failure",!0);try{let s;gT(),this.mySock=new xl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&xl!==null&&!dn.forceDisallow_}static previouslyFailed(){return ni.isInMemoryStorage||ni.get("previous_websocket_failure")===!0}markConnectionHealthy(){ni.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Vo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qT(n,G1);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Y1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
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
 */class Uo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ki,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dn&&dn.isAvailable();let s=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[dn];else{const i=this.transports_=[];for(const r of Uo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Uo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Uo.globalTransportInitialized_=!1;/**
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
 */const Q1=6e4,X1=5e3,J1=10*1024,Z1=100*1024,qu="t",hg="d",eM="s",dg="r",tM="e",fg="o",pg="a",_g="n",mg="p",nM="h";class sM{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ha("c:"+this.id+":"),this.transportManager_=new Uo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=To(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Z1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>J1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qu in e){const n=e[qu];n===pg?this.upgradeIfSecondaryHealthy_():n===dg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qr("t",e),s=Qr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_g,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qr("t",e),s=Qr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qr(qu,e);if(hg in e){const s=e[hg];if(n===nM){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_g){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eM?this.onConnectionShutdown_(s):n===dg?this.onReset_(s):n===tM?Yh("Server Error: "+s):n===fg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xf!==s&&jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),To(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Q1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):To(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(X1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ni.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class lw{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class cw{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ll extends cw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ll}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const gg=32,yg=768;class Me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Pe(){return new Me("")}function ye(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ls(t){return t.pieces_.length-t.pieceNum_}function De(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Me(t.pieces_,e)}function uw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function iM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function dw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Me(e,0)}function tt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Me(n,0)}function pe(t){return t.pieceNum_>=t.pieces_.length}function en(t,e){const n=ye(t),s=ye(e);if(n===null)return e;if(n===s)return en(De(t),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fw(t,e){if(Ls(t)!==Ls(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function pn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ls(t)>Ls(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class rM{constructor(e,n){this.errorPrefix_=n,this.parts_=hw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Rc(this.parts_[s]);pw(this)}}function oM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Rc(e),pw(t)}function aM(t){const e=t.parts_.pop();t.byteLength_-=Rc(e),t.parts_.length>0&&(t.byteLength_-=1)}function pw(t){if(t.byteLength_>yg)throw new Error(t.errorPrefix_+"has a key path longer than "+yg+" bytes ("+t.byteLength_+").");if(t.parts_.length>gg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gg+") or object contains a cycle "+Qs(t))}function Qs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Vf extends cw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Vf}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xr=1e3,lM=60*5*1e3,vg=30*1e3,cM=1.3,uM=3e4,hM="server_kill",Eg=3;class es extends lw{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=es.nextPersistentConnectionId_++,this.log_=ha("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xr,this.maxReconnectDelay_=lM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!gT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ct(r)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Mo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;es.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&as(e,"w")){const s=yr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=DD(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yh("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uM&&(this.reconnectDelay_=Xr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+es.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new sM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{jt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(hM)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&jt(h),l())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vm(this.interruptReasons_)&&(this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Df(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Me(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Eg&&(this.reconnectDelay_=vg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Eg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+BT.replace(/\./g,"-")]=1,Sf()?e["framework.cordova"]=1:mT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ll.getInstance().currentlyOnline();return Vm(this.interruptReasons_)&&e}}es.nextPersistentConnectionId_=0;es.nextConnectionId_=0;/**
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
 */class Pc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ve(vr,e),i=new ve(vr,n);return this.compare(s,i)!==0}minPost(){return ve.MIN}}/**
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
 */let Wa;class _w extends Pc{static get __EMPTY_NODE(){return Wa}static set __EMPTY_NODE(e){Wa=e}compare(e,n){return Vr(e.name,n.name)}isDefinedOn(e){throw xr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve(yi,Wa)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,Wa)}toString(){return".key"}}const sr=new _w;/**
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
 */let qa=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Bt=class ro{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ro.RED,this.left=i??On.EMPTY_NODE,this.right=r??On.EMPTY_NODE}copy(e,n,s,i,r){return new ro(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return On.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return On.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ro.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ro.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Bt.RED=!0;Bt.BLACK=!1;class dM{copy(e,n,s,i,r){return this}insert(e,n,s){return new Bt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let On=class hl{constructor(e,n=hl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new hl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new hl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qa(this.root_,null,this.comparator_,!0,e)}};On.EMPTY_NODE=new dM;/**
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
 */function fM(t,e){return Vr(t.name,e.name)}function Ff(t,e){return Vr(t,e)}/**
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
 */let Jh;function pM(t){Jh=t}const mw=function(t){return typeof t=="number"?"number:"+KT(t):"string:"+t},gw=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&as(e,".sv"),"Priority must be a string or number.")}else F(t===Jh||t.isEmpty(),"priority of unexpected type.");F(t===Jh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Tg;class Ze{constructor(e,n=Ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gw(this.priorityNode_)}static set __childrenNodeConstructor(e){Tg=e}static get __childrenNodeConstructor(){return Tg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:ye(e)===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ye(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(F(s!==".priority"||Ls(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=KT(this.value_):e+=this.value_,this.lazyHash_=jT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ze.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ze.VALUE_TYPE_ORDER.indexOf(n),r=Ze.VALUE_TYPE_ORDER.indexOf(s);return F(i>=0,"Unknown leaf type: "+n),F(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let yw,vw;function _M(t){yw=t}function mM(t){vw=t}class gM extends Pc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Vr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(yi,new Ze("[PRIORITY-POST]",vw))}makePost(e,n){const s=yw(e);return new ve(n,new Ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const vt=new gM;/**
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
 */const yM=Math.log(2);class vM{constructor(e){const n=r=>parseInt(Math.log(r)/yM,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ml=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Bt(d,h.node,Bt.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),g=i(f+1,c);return h=t[f],d=n?n(h):h,new Bt(d,h.node,Bt.BLACK,m,g)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,g){const y=h-m,E=h;h-=m;const C=i(y+1,E),w=t[y],T=n?n(w):w;f(new Bt(T,w.node,g,null,C))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const g=l.nextBitIsOne(),y=Math.pow(2,l.count-(m+1));g?d(y,Bt.BLACK):(d(y,Bt.BLACK),d(y,Bt.RED))}return u},o=new vM(t.length),a=r(o);return new On(s||e,a)};/**
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
 */let Ku;const Li={};class Yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(Li&&vt,"ChildrenNode.ts has not been loaded"),Ku=Ku||new Yn({".priority":Li},{".priority":vt}),Ku}get(e){const n=yr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof On?n:null}hasIndex(e){return as(this.indexSet_,e.toString())}addIndex(e,n){F(e!==sr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ve.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ml(s,e.getCompare()):a=Li;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Yn(u,c)}addToIndexes(e,n){const s=Rl(this.indexes_,(i,r)=>{const o=yr(this.indexSet_,r);if(F(o,"Missing index implementation for "+r),i===Li)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ve.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ml(a,o.getCompare())}else return Li;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ve(e.name,a))),l.insert(e,e.node)}});return new Yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Rl(this.indexes_,i=>{if(i===Li)return i;{const r=n.get(e.name);return r?i.remove(new ve(e.name,r)):i}});return new Yn(s,this.indexSet_)}}/**
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
 */let Jr;class Ce{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gw(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jr||(Jr=new Ce(new On(Ff),null,Yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jr}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jr:n}}getChild(e){const n=ye(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ve(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Jr:this.priorityNode_;return new Ce(i,o,r)}}updateChild(e,n){const s=ye(e);if(s===null)return n;{F(ye(e)!==".priority"||Ls(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(De(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(vt,(o,a)=>{n[o]=a.val(e),s++,r&&Ce.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+mw(this.getPriority().val())+":"),this.forEachChild(vt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":jT(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ve(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ve.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fa?-1:0}withIndex(e){if(e===sr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===sr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(vt),i=n.getIterator(vt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===sr?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EM extends Ce{constructor(){super(new On(Ff),Ce.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const fa=new EM;Object.defineProperties(ve,{MIN:{value:new ve(vr,Ce.EMPTY_NODE)},MAX:{value:new ve(yi,fa)}});_w.__EMPTY_NODE=Ce.EMPTY_NODE;Ze.__childrenNodeConstructor=Ce;pM(fa);mM(fa);/**
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
 */const TM=!0;function mt(t,e=null){if(t===null)return Ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ze(n,mt(e))}if(!(t instanceof Array)&&TM){const n=[];let s=!1;if(an(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=mt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ve(o,l)))}}),n.length===0)return Ce.EMPTY_NODE;const r=Ml(n,fM,o=>o.name,Ff);if(s){const o=Ml(n,vt.getCompare());return new Ce(r,mt(e),new Yn({".priority":o},{".priority":vt}))}else return new Ce(r,mt(e),Yn.Default)}else{let n=Ce.EMPTY_NODE;return an(t,(s,i)=>{if(as(t,s)&&s.substring(0,1)!=="."){const r=mt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(mt(e))}}_M(mt);/**
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
 */class wM extends Pc{constructor(e){super(),this.indexPath_=e,F(!pe(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Vr(e.name,n.name):r}makePost(e,n){const s=mt(e),i=Ce.EMPTY_NODE.updateChild(this.indexPath_,s);return new ve(n,i)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,fa);return new ve(yi,e)}toString(){return hw(this.indexPath_,0).join("/")}}/**
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
 */class AM extends Pc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Vr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const s=mt(e);return new ve(n,s)}toString(){return".value"}}const IM=new AM;/**
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
 */function bM(t){return{type:"value",snapshotNode:t}}function CM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function SM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function RM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class $f{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vr}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vt}copy(){const e=new $f;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ag(t){const e={};if(t.isDefault())return e;let n;if(t.index_===vt?n="$priority":t.index_===IM?n="$value":t.index_===sr?n="$key":(F(t.index_ instanceof wM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ct(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ct(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ct(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ct(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ct(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ig(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==vt&&(e.i=t.index_.toString()),e}/**
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
 */class Vl extends lw{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ha("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vl.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ag(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),yr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Vl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ag(e._queryParams),s=e._path.toString(),i=new Mo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rf(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Vo(a.responseText)}catch{jt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&jt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class NM{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Fl(){return{value:null,children:new Map}}function Ew(t,e,n){if(pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ye(e);t.children.has(s)||t.children.set(s,Fl());const i=t.children.get(s);e=De(e),Ew(i,e,n)}}function Zh(t,e,n){t.value!==null?n(e,t.value):PM(t,(s,i)=>{const r=new Me(e.toString()+"/"+s);Zh(i,r,n)})}function PM(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class OM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&an(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const bg=10*1e3,kM=30*1e3,DM=5*60*1e3;class xM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new OM(e);const s=bg+(kM-bg)*Math.random();To(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;an(e,(i,r)=>{r>0&&as(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),To(this.reportStats_.bind(this),Math.floor(Math.random()*2*DM))}}/**
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
 */var kn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(kn||(kn={}));function Tw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ww(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Aw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class $l{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=kn.ACK_USER_WRITE,this.source=Tw()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Me(e));return new $l(Pe(),n,this.revert)}}else return F(ye(this.path)===e,"operationForChild called for unrelated child."),new $l(De(this.path),this.affectedTree,this.revert)}}/**
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
 */class vi{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=kn.OVERWRITE}operationForChild(e){return pe(this.path)?new vi(this.source,Pe(),this.snap.getImmediateChild(e)):new vi(this.source,De(this.path),this.snap)}}/**
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
 */class Bo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=kn.MERGE}operationForChild(e){if(pe(this.path)){const n=this.children.subtree(new Me(e));return n.isEmpty()?null:n.value?new vi(this.source,Pe(),n.value):new Bo(this.source,Pe(),n)}else return F(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bo(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Uf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ye(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function LM(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(RM(o.childName,o.snapshotNode))}),Zr(t,i,"child_removed",e,s,n),Zr(t,i,"child_added",e,s,n),Zr(t,i,"child_moved",r,s,n),Zr(t,i,"child_changed",e,s,n),Zr(t,i,"value",e,s,n),i}function Zr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>VM(t,a,l)),o.forEach(a=>{const l=MM(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function MM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VM(t,e,n){if(e.childName==null||n.childName==null)throw xr("Should only compare child_ events.");const s=new ve(e.childName,e.snapshotNode),i=new ve(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Iw(t,e){return{eventCache:t,serverCache:e}}function wo(t,e,n,s){return Iw(new Uf(e,n,s),t.serverCache)}function bw(t,e,n,s){return Iw(t.eventCache,new Uf(e,n,s))}function ed(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ei(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let zu;const FM=()=>(zu||(zu=new On(A1)),zu);class ke{constructor(e,n=FM()){this.value=e,this.children=n}static fromObject(e){let n=new ke(null);return an(e,(s,i)=>{n=n.set(new Me(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Pe(),value:this.value};if(pe(e))return null;{const s=ye(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(De(e),n);return r!=null?{path:tt(new Me(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const n=ye(e),s=this.children.get(n);return s!==null?s.subtree(De(e)):new ke(null)}}set(e,n){if(pe(e))return new ke(n,this.children);{const s=ye(e),r=(this.children.get(s)||new ke(null)).set(De(e),n),o=this.children.insert(s,r);return new ke(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=ye(e),s=this.children.get(n);if(s){const i=s.remove(De(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ke(null):new ke(this.value,r)}else return this}}get(e){if(pe(e))return this.value;{const n=ye(e),s=this.children.get(n);return s?s.get(De(e)):null}}setTree(e,n){if(pe(e))return n;{const s=ye(e),r=(this.children.get(s)||new ke(null)).setTree(De(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ke(this.value,o)}}fold(e){return this.fold_(Pe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(tt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Pe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(pe(e))return null;{const r=ye(e),o=this.children.get(r);return o?o.findOnPath_(De(e),tt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Pe(),n)}foreachOnPath_(e,n,s){if(pe(e))return this;{this.value&&s(n,this.value);const i=ye(e),r=this.children.get(i);return r?r.foreachOnPath_(De(e),tt(n,i),s):new ke(null)}}foreach(e){this.foreach_(Pe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(tt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class gn{constructor(e){this.writeTree_=e}static empty(){return new gn(new ke(null))}}function Ao(t,e,n){if(pe(e))return new gn(new ke(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=en(i,e);return r=r.updateChild(o,n),new gn(t.writeTree_.set(i,r))}else{const i=new ke(n),r=t.writeTree_.setTree(e,i);return new gn(r)}}}function Cg(t,e,n){let s=t;return an(n,(i,r)=>{s=Ao(s,tt(e,i),r)}),s}function Sg(t,e){if(pe(e))return gn.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new gn(n)}}function td(t,e){return Ni(t,e)!=null}function Ni(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(en(n.path,e)):null}function Rg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(vt,(s,i)=>{e.push(new ve(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ve(s,i.value))}),e}function Cs(t,e){if(pe(e))return t;{const n=Ni(t,e);return n!=null?new gn(new ke(n)):new gn(t.writeTree_.subtree(e))}}function nd(t){return t.writeTree_.isEmpty()}function Er(t,e){return Cw(Pe(),t.writeTree_,e)}function Cw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(F(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Cw(tt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(tt(t,".priority"),s)),n}}/**
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
 */function Sw(t,e){return kw(e,t)}function $M(t,e,n,s,i){F(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ao(t.visibleWrites,e,n)),t.lastWriteId=s}function UM(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function BM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&HM(a,s.path)?i=!1:pn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return jM(t),!0;if(s.snap)t.visibleWrites=Sg(t.visibleWrites,s.path);else{const a=s.children;an(a,l=>{t.visibleWrites=Sg(t.visibleWrites,tt(s.path,l))})}return!0}else return!1}function HM(t,e){if(t.snap)return pn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&pn(tt(t.path,n),e))return!0;return!1}function jM(t){t.visibleWrites=Rw(t.allWrites,WM,Pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function WM(t){return t.visible}function Rw(t,e,n){let s=gn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)pn(n,o)?(a=en(n,o),s=Ao(s,a,r.snap)):pn(o,n)&&(a=en(o,n),s=Ao(s,Pe(),r.snap.getChild(a)));else if(r.children){if(pn(n,o))a=en(n,o),s=Cg(s,a,r.children);else if(pn(o,n))if(a=en(o,n),pe(a))s=Cg(s,Pe(),r.children);else{const l=yr(r.children,ye(a));if(l){const c=l.getChild(De(a));s=Ao(s,Pe(),c)}}}else throw xr("WriteRecord should have .snap or .children")}}return s}function Nw(t,e,n,s,i){if(!s&&!i){const r=Ni(t.visibleWrites,e);if(r!=null)return r;{const o=Cs(t.visibleWrites,e);if(nd(o))return n;if(n==null&&!td(o,Pe()))return null;{const a=n||Ce.EMPTY_NODE;return Er(o,a)}}}else{const r=Cs(t.visibleWrites,e);if(!i&&nd(r))return n;if(!i&&n==null&&!td(r,Pe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(pn(c.path,e)||pn(e,c.path))},a=Rw(t.allWrites,o,e),l=n||Ce.EMPTY_NODE;return Er(a,l)}}}function qM(t,e,n){let s=Ce.EMPTY_NODE;const i=Ni(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(vt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Cs(t.visibleWrites,e);return n.forEachChild(vt,(o,a)=>{const l=Er(Cs(r,new Me(o)),a);s=s.updateImmediateChild(o,l)}),Rg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Cs(t.visibleWrites,e);return Rg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function KM(t,e,n,s,i){F(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=tt(e,n);if(td(t.visibleWrites,r))return null;{const o=Cs(t.visibleWrites,r);return nd(o)?i.getChild(n):Er(o,i.getChild(n))}}function zM(t,e,n,s){const i=tt(e,n),r=Ni(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Cs(t.visibleWrites,i);return Er(o,s.getNode().getImmediateChild(n))}else return null}function GM(t,e){return Ni(t.visibleWrites,e)}function YM(t,e,n,s,i,r,o){let a;const l=Cs(t.visibleWrites,e),c=Ni(l,Pe());if(c!=null)a=c;else if(n!=null)a=Er(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function QM(){return{visibleWrites:gn.empty(),allWrites:[],lastWriteId:-1}}function sd(t,e,n,s){return Nw(t.writeTree,t.treePath,e,n,s)}function Pw(t,e){return qM(t.writeTree,t.treePath,e)}function Ng(t,e,n,s){return KM(t.writeTree,t.treePath,e,n,s)}function Ul(t,e){return GM(t.writeTree,tt(t.treePath,e))}function XM(t,e,n,s,i,r){return YM(t.writeTree,t.treePath,e,n,s,i,r)}function Bf(t,e,n){return zM(t.writeTree,t.treePath,e,n)}function Ow(t,e){return kw(tt(t.treePath,e),t.writeTree)}function kw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class JM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,wg(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,SM(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,CM(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,wg(s,e.snapshotNode,i.oldSnap));else throw xr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ZM{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Dw=new ZM;class Hf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Uf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ei(this.viewCache_),r=XM(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function eV(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tV(t,e,n,s,i){const r=new JM;let o,a;if(n.type===kn.OVERWRITE){const c=n;c.source.fromUser?o=id(t,e,c.path,c.snap,s,i,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!pe(c.path),o=Bl(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===kn.MERGE){const c=n;c.source.fromUser?o=sV(t,e,c.path,c.children,s,i,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=rd(t,e,c.path,c.children,s,i,a,r))}else if(n.type===kn.ACK_USER_WRITE){const c=n;c.revert?o=oV(t,e,c.path,s,i,r):o=iV(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===kn.LISTEN_COMPLETE)o=rV(t,e,n.path,s,r);else throw xr("Unknown operation type: "+n.type);const l=r.getChanges();return nV(e,o,l),{viewCache:o,changes:l}}function nV(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ed(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(bM(ed(e)))}}function xw(t,e,n,s,i,r){const o=e.eventCache;if(Ul(s,n)!=null)return e;{let a,l;if(pe(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ei(e),u=c instanceof Ce?c:Ce.EMPTY_NODE,h=Pw(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=sd(s,Ei(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ye(n);if(c===".priority"){F(Ls(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ng(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=De(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ng(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Bf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return wo(e,a,o.isFullyInitialized()||pe(n),t.filter.filtersNodes())}}function Bl(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(pe(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ye(n);if(!l.isCompleteForPath(n)&&Ls(n)>1)return e;const m=De(n),y=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,m,Dw,null)}const h=bw(e,c,l.isFullyInitialized()||pe(n),u.filtersNodes()),d=new Hf(i,h,r);return xw(t,h,n,i,d,a)}function id(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Hf(i,e,r);if(pe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=wo(e,c,!0,t.filter.filtersNodes());else{const h=ye(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=wo(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=De(n),f=a.getNode().getImmediateChild(h);let m;if(pe(d))m=s;else{const g=u.getCompleteChild(h);g!=null?uw(d)===".priority"&&g.getChild(dw(d)).isEmpty()?m=g:m=g.updateChild(d,s):m=Ce.EMPTY_NODE}if(f.equals(m))l=e;else{const g=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=wo(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Pg(t,e){return t.eventCache.isCompleteForChild(e)}function sV(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=tt(n,l);Pg(e,ye(u))&&(a=id(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=tt(n,l);Pg(e,ye(u))||(a=id(t,a,u,c,i,r,o))}),a}function Og(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function rd(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;pe(n)?c=s:c=new ke(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=Og(t,f,d);l=Bl(t,l,new Me(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),g=Og(t,m,d);l=Bl(t,l,new Me(h),g,i,r,o,a)}}),l}function iV(t,e,n,s,i,r,o){if(Ul(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(pe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Bl(t,e,n,l.getNode().getChild(n),i,r,a,o);if(pe(n)){let c=new ke(null);return l.getNode().forEachChild(sr,(u,h)=>{c=c.set(new Me(u),h)}),rd(t,e,n,c,i,r,a,o)}else return e}else{let c=new ke(null);return s.foreach((u,h)=>{const d=tt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),rd(t,e,n,c,i,r,a,o)}}function rV(t,e,n,s,i){const r=e.serverCache,o=bw(e,r.getNode(),r.isFullyInitialized()||pe(n),r.isFiltered());return xw(t,o,n,s,Dw,i)}function oV(t,e,n,s,i,r){let o;if(Ul(s,n)!=null)return e;{const a=new Hf(s,e,i),l=e.eventCache.getNode();let c;if(pe(n)||ye(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=sd(s,Ei(e));else{const h=e.serverCache.getNode();F(h instanceof Ce,"serverChildren would be complete if leaf node"),u=Pw(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ye(n);let h=Bf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,De(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ce.EMPTY_NODE,De(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sd(s,Ei(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ul(s,Pe())!=null,wo(e,c,o,t.filter.filtersNodes())}}function aV(t,e){const n=Ei(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!pe(e)&&!n.getImmediateChild(ye(e)).isEmpty())?n.getChild(e):null}function kg(t,e,n,s){e.type===kn.MERGE&&e.source.queryId!==null&&(F(Ei(t.viewCache_),"We should always have a full cache before handling merges"),F(ed(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=tV(t.processor_,i,e,n,s);return eV(t.processor_,r.viewCache),F(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,lV(t,r.changes,r.viewCache.eventCache.getNode(),null)}function lV(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return LM(t.eventGenerator_,e,n,i)}/**
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
 */let Dg;function cV(t){F(!Dg,"__referenceConstructor has already been defined"),Dg=t}function jf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return F(r!=null,"SyncTree gave us an op for an invalid query."),kg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(kg(o,e,n,s));return r}}function Wf(t,e){let n=null;for(const s of t.views.values())n=n||aV(s,e);return n}/**
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
 */let xg;function uV(t){F(!xg,"__referenceConstructor has already been defined"),xg=t}class Lg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=QM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hV(t,e,n,s,i){return $M(t.pendingWriteTree_,e,n,s,i),i?kc(t,new vi(Tw(),e,n)):[]}function zi(t,e,n=!1){const s=UM(t.pendingWriteTree_,e);if(BM(t.pendingWriteTree_,e)){let r=new ke(null);return s.snap!=null?r=r.set(Pe(),!0):an(s.children,o=>{r=r.set(new Me(o),!0)}),kc(t,new $l(s.path,r,n))}else return[]}function Oc(t,e,n){return kc(t,new vi(ww(),e,n))}function dV(t,e,n){const s=ke.fromObject(n);return kc(t,new Bo(ww(),e,s))}function fV(t,e,n,s){const i=Fw(t,s);if(i!=null){const r=$w(i),o=r.path,a=r.queryId,l=en(o,e),c=new vi(Aw(a),l,n);return Uw(t,o,c)}else return[]}function pV(t,e,n,s){const i=Fw(t,s);if(i){const r=$w(i),o=r.path,a=r.queryId,l=en(o,e),c=ke.fromObject(n),u=new Bo(Aw(a),l,c);return Uw(t,o,u)}else return[]}function Lw(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=en(o,e),c=Wf(a,l);if(c)return c});return Nw(i,e,r,n,!0)}function kc(t,e){return Mw(e,t.syncPointTree_,null,Sw(t.pendingWriteTree_,Pe()))}function Mw(t,e,n,s){if(pe(t.path))return Vw(t,e,n,s);{const i=e.get(Pe());n==null&&i!=null&&(n=Wf(i,Pe()));let r=[];const o=ye(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ow(s,o);r=r.concat(Mw(a,l,c,u))}return i&&(r=r.concat(jf(i,t,s,n))),r}}function Vw(t,e,n,s){const i=e.get(Pe());n==null&&i!=null&&(n=Wf(i,Pe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ow(s,o),u=t.operationForChild(o);u&&(r=r.concat(Vw(u,a,l,c)))}),i&&(r=r.concat(jf(i,t,s,n))),r}function Fw(t,e){return t.tagToQueryMap.get(e)}function $w(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Me(t.substr(0,e))}}function Uw(t,e,n){const s=t.syncPointTree_.get(e);F(s,"Missing sync point for query tag that we're tracking");const i=Sw(t.pendingWriteTree_,e);return jf(s,n,i,null)}/**
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
 */class qf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qf(n)}node(){return this.node_}}class Kf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=tt(this.path_,e);return new Kf(this.syncTree_,n)}node(){return Lw(this.syncTree_,this.path_)}}const _V=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Mg=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gV(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},gV=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&F(!1,"Unexpected increment value: "+s);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},yV=function(t,e,n,s){return zf(e,new Kf(n,t),s)},vV=function(t,e,n){return zf(t,new qf(e),n)};function zf(t,e,n){const s=t.getPriority().val(),i=Mg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Mg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ze(a,mt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ze(i))),o.forEachChild(vt,(a,l)=>{const c=zf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Gf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yf(t,e){let n=e instanceof Me?e:new Me(e),s=t,i=ye(n);for(;i!==null;){const r=yr(s.node.children,i)||{children:{},childCount:0};s=new Gf(i,s,r),n=De(n),i=ye(n)}return s}function Fr(t){return t.node.value}function Bw(t,e){t.node.value=e,od(t)}function Hw(t){return t.node.childCount>0}function EV(t){return Fr(t)===void 0&&!Hw(t)}function Dc(t,e){an(t.node.children,(n,s)=>{e(new Gf(n,t,s))})}function jw(t,e,n,s){n&&!s&&e(t),Dc(t,i=>{jw(i,e,!0,s)}),n&&s&&e(t)}function TV(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function pa(t){return new Me(t.parent===null?t.name:pa(t.parent)+"/"+t.name)}function od(t){t.parent!==null&&wV(t.parent,t.name,t)}function wV(t,e,n){const s=EV(n),i=as(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,od(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,od(t))}/**
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
 */const AV=/[\[\].#$\/\u0000-\u001F\u007F]/,IV=/[\[\].#$\u0000-\u001F\u007F]/,Gu=10*1024*1024,Ww=function(t){return typeof t=="string"&&t.length!==0&&!AV.test(t)},bV=function(t){return typeof t=="string"&&t.length!==0&&!IV.test(t)},CV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bV(t)},qw=function(t,e,n){const s=n instanceof Me?new rM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qs(s)+" with contents = "+e.toString());if(WT(e))throw new Error(t+"contains "+e.toString()+" "+Qs(s));if(typeof e=="string"&&e.length>Gu/3&&Rc(e)>Gu)throw new Error(t+"contains a string greater than "+Gu+" utf8 bytes "+Qs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(an(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ww(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oM(s,o),qw(t,a,s),aM(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qs(s)+" in addition to actual children.")}},SV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ww(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CV(n))throw new Error($D(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class RV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function NV(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!fw(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Pi(t,e,n){NV(t,n),PV(t,s=>pn(s,e)||pn(e,s))}function PV(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(OV(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function OV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ui&&_t("event: "+n.toString()),da(s)}}}/**
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
 */const kV="repo_interrupt",DV=25;class xV{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fl(),this.transactionQueueTree_=new Gf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LV(t,e,n){if(t.stats_=Lf(t.repoInfo_),t.forceRestClient_||N1())t.server_=new Vl(t.repoInfo_,(s,i,r,o)=>{Vg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new es(t.repoInfo_,e,(s,i,r,o)=>{Vg(t,s,i,r,o)},s=>{Fg(t,s)},s=>{VV(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=L1(t.repoInfo_,()=>new xM(t.stats_,t.server_)),t.infoData_=new NM,t.infoSyncTree_=new Lg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Oc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qf(t,"connected",!1),t.serverSyncTree_=new Lg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Pi(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function MV(t){const n=t.infoData_.getNode(new Me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kw(t){return _V({timestamp:MV(t)})}function Vg(t,e,n,s,i){t.dataUpdateCount++;const r=new Me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Rl(n,c=>mt(c));o=pV(t.serverSyncTree_,r,l,i)}else{const l=mt(n);o=fV(t.serverSyncTree_,r,l,i)}else if(s){const l=Rl(n,c=>mt(c));o=dV(t.serverSyncTree_,r,l)}else{const l=mt(n);o=Oc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Jf(t,r)),Pi(t.eventQueue_,a,o)}function Fg(t,e){Qf(t,"connected",e),e===!1&&$V(t)}function VV(t,e){an(e,(n,s)=>{Qf(t,n,s)})}function Qf(t,e,n){const s=new Me("/.info/"+e),i=mt(n);t.infoData_.updateSnapshot(s,i);const r=Oc(t.infoSyncTree_,s,i);Pi(t.eventQueue_,s,r)}function FV(t){return t.nextWriteId_++}function $V(t){zw(t,"onDisconnectEvents");const e=Kw(t),n=Fl();Zh(t.onDisconnect_,Pe(),(i,r)=>{const o=yV(i,r,t.serverSyncTree_,e);Ew(n,i,o)});let s=[];Zh(n,Pe(),(i,r)=>{s=s.concat(Oc(t.serverSyncTree_,i,r));const o=jV(t,i);Jf(t,o)}),t.onDisconnect_=Fl(),Pi(t.eventQueue_,Pe(),s)}function UV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kV)}function zw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function Gw(t,e,n){return Lw(t.serverSyncTree_,e,n)||Ce.EMPTY_NODE}function Xf(t,e=t.transactionQueueTree_){if(e||xc(t,e),Fr(e)){const n=Qw(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&BV(t,pa(e),n)}else Hw(e)&&Dc(e,n=>{Xf(t,n)})}function BV(t,e,n){const s=n.map(c=>c.currentWriteId),i=Gw(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=en(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{zw(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(zi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();xc(t,Yf(t.transactionQueueTree_,e)),Xf(t,t.transactionQueueTree_),Pi(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)da(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{jt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Jf(t,e)}},o)}function Jf(t,e){const n=Yw(t,e),s=pa(n),i=Qw(t,n);return HV(t,i,s),s}function HV(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=en(n,l.path);let u=!1,h;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(zi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=DV)u=!0,h="maxretry",i=i.concat(zi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Gw(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){qw("transaction failed: Data returned ",f,l.path);let m=mt(f);typeof f=="object"&&f!=null&&as(f,".priority")||(m=m.updatePriority(d.getPriority()));const y=l.currentWriteId,E=Kw(t),C=vV(m,d,E);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=C,l.currentWriteId=FV(t),o.splice(o.indexOf(y),1),i=i.concat(hV(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(zi(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(zi(t.serverSyncTree_,l.currentWriteId,!0))}Pi(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}xc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)da(s[a]);Xf(t,t.transactionQueueTree_)}function Yw(t,e){let n,s=t.transactionQueueTree_;for(n=ye(e);n!==null&&Fr(s)===void 0;)s=Yf(s,n),e=De(e),n=ye(e);return s}function Qw(t,e){const n=[];return Xw(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Xw(t,e,n){const s=Fr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Dc(e,i=>{Xw(t,i,n)})}function xc(t,e){const n=Fr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Bw(e,n.length>0?n:void 0)}Dc(e,s=>{xc(t,s)})}function jV(t,e){const n=pa(Yw(t,e)),s=Yf(t.transactionQueueTree_,e);return TV(s,i=>{Yu(t,i)}),Yu(t,s),jw(s,i=>{Yu(t,i)}),n}function Yu(t,e){const n=Fr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bw(e,void 0):n.length=r+1,Pi(t.eventQueue_,pa(e),i);for(let o=0;o<s.length;o++)da(s[o])}}/**
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
 */function WV(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const $g=function(t,e){const n=KV(t),s=n.namespace;n.domain==="firebase.com"&&gi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||T1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new k1(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Me(n.pathString)}},KV=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=WV(t.substring(u,h)));const d=qV(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Zf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return pe(this._path)?null:uw(this._path)}get ref(){return new $r(this._repo,this._path)}get _queryIdentifier(){const e=Ig(this._queryParams),n=Df(e);return n==="{}"?"default":n}get _queryObject(){return Ig(this._queryParams)}isEqual(e){if(e=Hs(e),!(e instanceof Zf))return!1;const n=this._repo===e._repo,s=fw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+iM(this._path)}}class $r extends Zf{constructor(e,n){super(e,n,new $f,!1)}get parent(){const e=dw(this._path);return e===null?null:new $r(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}cV($r);uV($r);/**
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
 */const zV="FIREBASE_DATABASE_EMULATOR_HOST",ad={};let GV=!1;function YV(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$g(r,i),a=o.repoInfo,l,c;typeof process<"u"&&rg&&(c=rg[zV]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=$g(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Qh(Qh.OWNER):new O1(t.name,t.options,e);SV("Invalid Firebase Database URL",o),pe(o.path)||gi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=XV(a,t,u,new P1(t.name,n));return new JV(h,t)}function QV(t,e){const n=ad[e];(!n||n[t.key]!==t)&&gi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),UV(t),delete n[t.key]}function XV(t,e,n,s){let i=ad[e.name];i||(i={},ad[e.name]=i);let r=i[t.toURLString()];return r&&gi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new xV(t,GV,n,s),i[t.toURLString()]=r,r}class JV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $r(this._repo,Pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function ZV(t){m1(Mr),Bn(new En("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return YV(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ht(og,ag,t),Ht(og,ag,"esm2017")}es.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};es.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ZV();var eF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,ep=ep||{},ie=eF||self;function Lc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function _a(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function tF(t){return Object.prototype.hasOwnProperty.call(t,Qu)&&t[Qu]||(t[Qu]=++nF)}var Qu="closure_uid_"+(1e9*Math.random()>>>0),nF=0;function sF(t,e,n){return t.call.apply(t.bind,arguments)}function iF(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=sF:Et=iF,Et.apply(null,arguments)}function Ka(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function st(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function js(){this.s=this.s,this.o=this.o}var rF=0;js.prototype.s=!1;js.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rF!=0)&&tF(this)};js.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tp(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ug(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Lc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var oF=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ie.addEventListener("test",n,e),ie.removeEventListener("test",n,e)}catch{}return t}();function Ho(t){return/^[\s\xa0]*$/.test(t)}function Mc(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return Mc().indexOf(t)!=-1}function np(t){return np[" "](t),t}np[" "]=function(){};function aF(t,e){var n=ZF;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var lF=Rn("Opera"),Tr=Rn("Trident")||Rn("MSIE"),Zw=Rn("Edge"),ld=Zw||Tr,eA=Rn("Gecko")&&!(Mc().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),cF=Mc().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function tA(){var t=ie.document;return t?t.documentMode:void 0}var cd;e:{var Xu="",Ju=function(){var t=Mc();if(eA)return/rv:([^\);]+)(\)|;)/.exec(t);if(Zw)return/Edge\/([\d\.]+)/.exec(t);if(Tr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(cF)return/WebKit\/(\S+)/.exec(t);if(lF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ju&&(Xu=Ju?Ju[1]:""),Tr){var Zu=tA();if(Zu!=null&&Zu>parseFloat(Xu)){cd=String(Zu);break e}}cd=Xu}var ud;if(ie.document&&Tr){var Bg=tA();ud=Bg||parseInt(cd,10)||void 0}else ud=void 0;var uF=ud;function jo(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(eA){e:{try{np(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jo.$.h.call(this)}}st(jo,Tt);var hF={2:"touch",3:"pen",4:"mouse"};jo.prototype.h=function(){jo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ma="closure_listenable_"+(1e6*Math.random()|0),dF=0;function fF(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++dF,this.fa=this.ia=!1}function Vc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sp(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function pF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nA(t){const e={};for(const n in t)e[n]=t[n];return e}const Hg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sA(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Hg.length;r++)n=Hg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Fc(t){this.src=t,this.g={},this.h=0}Fc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=dd(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new fF(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function hd(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Jw(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Vc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dd(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var ip="closure_lm_"+(1e6*Math.random()|0),eh={};function iA(t,e,n,s,i){if(s&&s.once)return oA(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)iA(t,e[r],n,s,i);return null}return n=ap(n),t&&t[ma]?t.O(e,n,_a(s)?!!s.capture:!!s,i):rA(t,e,n,!1,s,i)}function rA(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=_a(i)?!!i.capture:!!i,a=op(t);if(a||(t[ip]=a=new Fc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=_F(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)oF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(lA(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _F(){function t(n){return e.call(t.src,t.listener,n)}const e=mF;return t}function oA(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)oA(t,e[r],n,s,i);return null}return n=ap(n),t&&t[ma]?t.P(e,n,_a(s)?!!s.capture:!!s,i):rA(t,e,n,!0,s,i)}function aA(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)aA(t,e[r],n,s,i);else s=_a(s)?!!s.capture:!!s,n=ap(n),t&&t[ma]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=dd(r,n,s,i),-1<n&&(Vc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=op(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dd(e,n,s,i)),(n=-1<t?e[t]:null)&&rp(n))}function rp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ma])hd(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(lA(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=op(e))?(hd(n,t),n.h==0&&(n.src=null,e[ip]=null)):Vc(t)}}}function lA(t){return t in eh?eh[t]:eh[t]="on"+t}function mF(t,e){if(t.fa)t=!0;else{e=new jo(e,this);var n=t.listener,s=t.la||t.src;t.ia&&rp(t),t=n.call(s,e)}return t}function op(t){return t=t[ip],t instanceof Fc?t:null}var th="__closure_events_fn_"+(1e9*Math.random()>>>0);function ap(t){return typeof t=="function"?t:(t[th]||(t[th]=function(e){return t.handleEvent(e)}),t[th])}function nt(){js.call(this),this.i=new Fc(this),this.S=this,this.J=null}st(nt,js);nt.prototype[ma]=!0;nt.prototype.removeEventListener=function(t,e,n,s){aA(this,t,e,n,s)};function ht(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var i=e;e=new Tt(s,t),sA(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=za(o,s,!0,e)&&i}if(o=e.g=t,i=za(o,s,!0,e)&&i,i=za(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=za(o,s,!1,e)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Vc(n[s]);delete t.g[e],t.h--}}this.J=null};nt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};nt.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function za(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&hd(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var lp=ie.JSON.stringify;class gF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function yF(){var t=cp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class vF{constructor(){this.h=this.g=null}add(e,n){const s=cA.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var cA=new gF(()=>new EF,t=>t.reset());class EF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TF(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function wF(t){ie.setTimeout(()=>{throw t},0)}let Wo,qo=!1,cp=new vF,uA=()=>{const t=ie.Promise.resolve(void 0);Wo=()=>{t.then(AF)}};var AF=()=>{for(var t;t=yF();){try{t.h.call(t.g)}catch(n){wF(n)}var e=cA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qo=!1};function $c(t,e){nt.call(this),this.h=t||1,this.g=e||ie,this.j=Et(this.qb,this),this.l=Date.now()}st($c,nt);$=$c.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(up(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function up(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){$c.$.N.call(this),up(this),delete this.g};function hp(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function hA(t){t.g=hp(()=>{t.g=null,t.i&&(t.i=!1,hA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class IF extends js{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hA(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ko(t){js.call(this),this.h=t,this.g={}}st(Ko,js);var jg=[];function dA(t,e,n,s){Array.isArray(n)||(n&&(jg[0]=n.toString()),n=jg);for(var i=0;i<n.length;i++){var r=iA(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function fA(t){sp(t.g,function(e,n){this.g.hasOwnProperty(n)&&rp(e)},t),t.g={}}Ko.prototype.N=function(){Ko.$.N.call(this),fA(this)};Ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Uc(){this.g=!0}Uc.prototype.Ea=function(){this.g=!1};function bF(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function CF(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Gi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RF(t,n)+(s?" "+s:"")})}function SF(t,e){t.info(function(){return"TIMEOUT: "+e})}Uc.prototype.info=function(){};function RF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lp(n)}catch{return e}}var Oi={},Wg=null;function Bc(){return Wg=Wg||new nt}Oi.Ta="serverreachability";function pA(t){Tt.call(this,Oi.Ta,t)}st(pA,Tt);function zo(t){const e=Bc();ht(e,new pA(e))}Oi.STAT_EVENT="statevent";function _A(t,e){Tt.call(this,Oi.STAT_EVENT,t),this.stat=e}st(_A,Tt);function bt(t){const e=Bc();ht(e,new _A(e,t))}Oi.Ua="timingevent";function mA(t,e){Tt.call(this,Oi.Ua,t),this.size=e}st(mA,Tt);function ga(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var Hc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},gA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function dp(){}dp.prototype.h=null;function qg(t){return t.h||(t.h=t.i())}function yA(){}var ya={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fp(){Tt.call(this,"d")}st(fp,Tt);function pp(){Tt.call(this,"c")}st(pp,Tt);var fd;function jc(){}st(jc,dp);jc.prototype.g=function(){return new XMLHttpRequest};jc.prototype.i=function(){return{}};fd=new jc;function va(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Ko(this),this.P=NF,t=ld?125:void 0,this.V=new $c(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vA}function vA(){this.i=null,this.g="",this.h=!1}var NF=45e3,EA={},pd={};$=va.prototype;$.setTimeout=function(t){this.P=t};function _d(t,e,n){t.L=1,t.A=qc(ns(e)),t.u=n,t.S=!0,TA(t,null)}function TA(t,e){t.G=Date.now(),Ea(t),t.B=ns(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),NA(n.i,"t",s),t.o=0,n=t.l.J,t.h=new vA,t.g=QA(t.l,n?e:null,!t.u),0<t.O&&(t.M=new IF(Et(t.Pa,t,t.g),t.O)),dA(t.U,t.g,"readystatechange",t.nb),e=t.I?nA(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),zo(),bF(t.j,t.v,t.B,t.m,t.W,t.u)}$.nb=function(t){t=t.target;const e=this.M;e&&Dn(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const u=Dn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ld||this.g&&(this.h.h||this.g.ja()||Yg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?zo(3):zo(2)),Wc(this);var n=this.g.da();this.ca=n;t:if(wA(this)){var s=Yg(this.g);t="";var i=s.length,r=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){si(this),Io(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,CF(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ho(a)){var c=a;break t}}c=null}if(n=c)Gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,md(this,n);else{this.i=!1,this.s=3,bt(12),si(this),Io(this);break e}}this.S?(AA(this,u,o),ld&&this.i&&u==3&&(dA(this.U,this.V,"tick",this.mb),this.V.start())):(Gi(this.j,this.m,o,null),md(this,o)),u==4&&si(this),this.i&&!this.J&&(u==4?KA(this.l,this):(this.i=!1,Ea(this)))}else QF(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),si(this),Io(this)}}}catch{}finally{}};function wA(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function AA(t,e,n){let s=!0,i;for(;!t.J&&t.o<n.length;)if(i=PF(t,n),i==pd){e==4&&(t.s=4,bt(14),s=!1),Gi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==EA){t.s=4,bt(15),Gi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Gi(t.j,t.m,i,null),md(t,i);wA(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,bt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ep(e),e.M=!0,bt(11))):(Gi(t.j,t.m,n,"[Invalid Chunked Response]"),si(t),Io(t))}$.mb=function(){if(this.g){var t=Dn(this.g),e=this.g.ja();this.o<e.length&&(Wc(this),AA(this,t,e),this.i&&t!=4&&Ea(this))}};function PF(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?pd:(n=Number(e.substring(n,s)),isNaN(n)?EA:(s+=1,s+n>e.length?pd:(e=e.slice(s,s+n),t.o=s+n,e)))}$.cancel=function(){this.J=!0,si(this)};function Ea(t){t.Y=Date.now()+t.P,IA(t,t.P)}function IA(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ga(Et(t.lb,t),e)}function Wc(t){t.C&&(ie.clearTimeout(t.C),t.C=null)}$.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(SF(this.j,this.B),this.L!=2&&(zo(),bt(17)),si(this),this.s=2,Io(this)):IA(this,this.Y-t)};function Io(t){t.l.H==0||t.J||KA(t.l,t)}function si(t){Wc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,up(t.V),fA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function md(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||gd(n.i,t))){if(!t.K&&gd(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wl(n),Yc(n);else break e;vp(n),bt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ga(Et(n.ib,n),6e3));if(1>=kA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ii(n,11)}else if((t.K||n.g==t)&&Wl(n),!Ho(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(_p(r,r.h),r.h=null))}if(s.F){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.Da=g,xe(s.I,s.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=YA(s,s.J?s.pa:null,s.Y),o.K){DA(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&(Wc(a),Ea(a)),s.g=o}else WA(s);0<n.j.length&&Qc(n)}else c[0]!="stop"&&c[0]!="close"||ii(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ii(n,7):yp(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}zo(4)}catch{}}function OF(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function kF(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function bA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kF(t),s=OF(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var CA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hi){this.h=t.h,Hl(this,t.j),this.s=t.s,this.g=t.g,jl(this,t.m),this.l=t.l;var e=t.i,n=new Go;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kg(this,n),this.o=t.o}else t&&(e=String(t).match(CA))?(this.h=!1,Hl(this,e[1]||"",!0),this.s=oo(e[2]||""),this.g=oo(e[3]||"",!0),jl(this,e[4]),this.l=oo(e[5]||"",!0),Kg(this,e[6]||"",!0),this.o=oo(e[7]||"")):(this.h=!1,this.i=new Go(null,this.h))}hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ao(e,zg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ao(e,zg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ao(n,n.charAt(0)=="/"?MF:LF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ao(n,FF)),t.join("")};function ns(t){return new hi(t)}function Hl(t,e,n){t.j=n?oo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kg(t,e,n){e instanceof Go?(t.i=e,$F(t.i,t.h)):(n||(e=ao(e,VF)),t.i=new Go(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function qc(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ao(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zg=/[#\/\?@]/g,LF=/[#\?:]/g,MF=/[#\?]/g,VF=/[#\?@]/g,FF=/#/g;function Go(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ws(t){t.g||(t.g=new Map,t.h=0,t.i&&DF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=Go.prototype;$.add=function(t,e){Ws(this),this.i=null,t=Ur(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function SA(t,e){Ws(t),e=Ur(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function RA(t,e){return Ws(t),e=Ur(t,e),t.g.has(e)}$.forEach=function(t,e){Ws(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};$.ta=function(){Ws(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};$.Z=function(t){Ws(this);let e=[];if(typeof t=="string")RA(this,t)&&(e=e.concat(this.g.get(Ur(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Ws(this),this.i=null,t=Ur(this,t),RA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function NA(t,e,n){SA(t,e),0<n.length&&(t.i=null,t.g.set(Ur(t,e),tp(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ur(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $F(t,e){e&&!t.j&&(Ws(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(SA(this,s),NA(this,i,n))},t)),t.j=e}var UF=class{constructor(t,e){this.g=t,this.map=e}};function PA(t){this.l=t||BF,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var BF=10;function OA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kA(t){return t.h?1:t.g?t.g.size:0}function gd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _p(t,e){t.g?t.g.add(e):t.h=e}function DA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}PA.prototype.cancel=function(){if(this.i=xA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return tp(t.i)}var HF=class{stringify(t){return ie.JSON.stringify(t,void 0)}parse(t){return ie.JSON.parse(t,void 0)}};function jF(){this.g=new HF}function WF(t,e,n){const s=n||"";try{bA(t,function(i,r){let o=i;_a(i)&&(o=lp(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function qF(t,e){const n=new Uc;if(ie.Image){const s=new Image;s.onload=Ka(Ga,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ka(Ga,n,s,"TestLoadImage: error",!1,e),s.onabort=Ka(Ga,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ka(Ga,n,s,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ga(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Kc(t){this.l=t.ec||null,this.j=t.ob||!1}st(Kc,dp);Kc.prototype.g=function(){return new zc(this.l,this.j)};Kc.prototype.i=function(t){return function(){return t}}({});function zc(t,e){nt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=mp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}st(zc,nt);var mp=0;$=zc.prototype;$.open=function(t,e){if(this.readyState!=mp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yo(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ta(this)),this.readyState=mp};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;LA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function LA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ta(this):Yo(this),this.readyState==3&&LA(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Ta(this))};$.Ya=function(t){this.g&&(this.response=t,Ta(this))};$.ka=function(){this.g&&Ta(this)};function Ta(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yo(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Yo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KF=ie.JSON.parse;function je(t){nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=MA,this.L=this.M=!1}st(je,nt);var MA="",zF=/^https?$/i,GF=["POST","PUT"];$=je.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fd.g(),this.C=this.u?qg(this.u):qg(fd),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Gg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=Jw(GF,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$A(this),0<this.B&&((this.L=YF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=hp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Gg(this,r)}};function YF(t){return Tr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof ep<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function Gg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,VA(t),Gc(t)}function VA(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),Gc(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gc(this,!0)),je.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?FA(this):this.kb())};$.kb=function(){FA(this)};function FA(t){if(t.h&&typeof ep<"u"&&(!t.C[1]||Dn(t)!=4||t.da()!=2)){if(t.v&&Dn(t)==4)hp(t.La,0,t);else if(ht(t,"readystatechange"),Dn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(CA)[1]||null;!i&&ie.self&&ie.self.location&&(i=ie.self.location.protocol.slice(0,-1)),s=!zF.test(i?i.toLowerCase():"")}n=s}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var r=2<Dn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",VA(t)}}finally{Gc(t)}}}}function Gc(t,e){if(t.g){$A(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=s}catch{}}}function $A(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function Dn(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KF(e)}};function Yg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case MA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function QF(t){const e={};t=(t.g&&2<=Dn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Ho(t[s]))continue;var n=TF(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}pF(e,function(s){return s.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function UA(t){let e="";return sp(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gp(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=UA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function eo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function BA(t){this.Ga=0,this.j=[],this.l=new Uc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=eo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=eo("baseRetryDelayMs",5e3,t),this.hb=eo("retryDelaySeedMs",1e4,t),this.eb=eo("forwardChannelMaxRetries",2,t),this.xa=eo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new PA(t&&t.concurrentRequestLimit),this.Ja=new jF,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=BA.prototype;$.ra=8;$.H=1;function yp(t){if(HA(t),t.H==3){var e=t.W++,n=ns(t.I);if(xe(n,"SID",t.K),xe(n,"RID",e),xe(n,"TYPE","terminate"),wa(t,n),e=new va(t,t.l,e),e.L=2,e.A=qc(ns(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon)try{n=ie.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ie.Image&&(new Image().src=e.A,n=!0),n||(e.g=QA(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ea(e)}GA(t)}function Yc(t){t.g&&(Ep(t),t.g.cancel(),t.g=null)}function HA(t){Yc(t),t.u&&(ie.clearTimeout(t.u),t.u=null),Wl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function Qc(t){if(!OA(t.i)&&!t.m){t.m=!0;var e=t.Na;Wo||uA(),qo||(Wo(),qo=!0),cp.add(e,t),t.C=0}}function XF(t,e){return kA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ga(Et(t.Na,t,e),zA(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new va(this,this.l,t);let r=this.s;if(this.U&&(r?(r=nA(r),sA(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jA(this,i,e),n=ns(this.I),xe(n,"RID",t),xe(n,"CVER",22),this.F&&xe(n,"X-HTTP-Session-Id",this.F),wa(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(UA(r)))+"&"+e:this.o&&gp(n,this.o,r)),_p(this.i,i),this.bb&&xe(n,"TYPE","init"),this.P?(xe(n,"$req",e),xe(n,"SID","null"),i.aa=!0,_d(i,n,null)):_d(i,n,e),this.H=2}}else this.H==3&&(t?Qg(this,t):this.j.length==0||OA(this.i)||Qg(this))};function Qg(t,e){var n;e?n=e.m:n=t.W++;const s=ns(t.I);xe(s,"SID",t.K),xe(s,"RID",n),xe(s,"AID",t.V),wa(t,s),t.o&&t.s&&gp(s,t.o,t.s),n=new va(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=jA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_p(t.i,n),_d(n,s,e)}function wa(t,e){t.na&&sp(t.na,function(n,s){xe(e,s,n)}),t.h&&bA({},function(n,s){xe(e,s,n)})}function jA(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Et(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{WF(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function WA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Wo||uA(),qo||(Wo(),qo=!0),cp.add(e,t),t.A=0}}function vp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ga(Et(t.Ma,t),zA(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,qA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ga(Et(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,bt(10),Yc(this),qA(this))};function Ep(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function qA(t){t.g=new va(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ns(t.wa);xe(e,"RID","rpc"),xe(e,"SID",t.K),xe(e,"AID",t.V),xe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&xe(e,"TO",t.qa),xe(e,"TYPE","xmlhttp"),wa(t,e),t.o&&t.s&&gp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=qc(ns(e)),n.u=null,n.S=!0,TA(n,t)}$.ib=function(){this.v!=null&&(this.v=null,Yc(this),vp(this),bt(19))};function Wl(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function KA(t,e){var n=null;if(t.g==e){Wl(t),Ep(t),t.g=null;var s=2}else if(gd(t.i,e))n=e.F,DA(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;s=Bc(),ht(s,new mA(s,n)),Qc(t)}else WA(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(s==1&&XF(t,e)||s==2&&vp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ii(t,5);break;case 4:ii(t,10);break;case 3:ii(t,6);break;default:ii(t,2)}}}function zA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ii(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Et(t.pb,t);n||(n=new hi("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||Hl(n,"https"),qc(n)),qF(n.toString(),s)}else bt(2);t.H=0,t.h&&t.h.za(e),GA(t),HA(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),bt(2)):(this.l.info("Failed to ping google.com"),bt(1))};function GA(t){if(t.H=0,t.ma=[],t.h){const e=xA(t.i);(e.length!=0||t.j.length!=0)&&(Ug(t.ma,e),Ug(t.ma,t.j),t.i.i.length=0,tp(t.j),t.j.length=0),t.h.ya()}}function YA(t,e,n){var s=n instanceof hi?ns(n):new hi(n);if(s.g!="")e&&(s.g=e+"."+s.g),jl(s,s.m);else{var i=ie.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new hi(null);s&&Hl(r,s),e&&(r.g=e),i&&jl(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&xe(s,n,e),xe(s,"VER",t.ra),wa(t,s),s}function QA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new je(new Kc({ob:n})):new je(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function XA(){}$=XA.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function ql(){if(Tr&&!(10<=Number(uF)))throw Error("Environmental error: no available transport.")}ql.prototype.g=function(t,e){return new zt(t,e)};function zt(t,e){nt.call(this),this.g=new BA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ho(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ho(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Br(this)}st(zt,nt);zt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=YA(t,null,t.Y),Qc(t)};zt.prototype.close=function(){yp(this.g)};zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lp(t),t=n);e.j.push(new UF(e.fb++,t)),e.H==3&&Qc(e)};zt.prototype.N=function(){this.g.h=null,delete this.j,yp(this.g),delete this.g,zt.$.N.call(this)};function JA(t){fp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}st(JA,fp);function ZA(){pp.call(this),this.status=1}st(ZA,pp);function Br(t){this.g=t}st(Br,XA);Br.prototype.Ba=function(){ht(this.g,"a")};Br.prototype.Aa=function(t){ht(this.g,new JA(t))};Br.prototype.za=function(t){ht(this.g,new ZA)};Br.prototype.ya=function(){ht(this.g,"b")};function JF(){this.blockSize=-1}function wn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}st(wn,JF);wn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function nh(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}wn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)nh(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){nh(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){nh(this,s),i=0;break}}this.h=i,this.i+=e};wn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ne(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var ZF={};function Tp(t){return-128<=t&&128>t?aF(t,function(e){return new Ne([e|0],0>e?-1:0)}):new Ne([t|0],0>t?-1:0)}function xn(t){if(isNaN(t)||!isFinite(t))return ir;if(0>t)return at(xn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=yd;return new Ne(e,0)}function eI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return at(eI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xn(Math.pow(e,8)),s=ir,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=xn(Math.pow(e,r)),s=s.R(r).add(xn(o))):(s=s.R(n),s=s.add(xn(o)))}return s}var yd=4294967296,ir=Tp(0),vd=Tp(1),Xg=Tp(16777216);$=Ne.prototype;$.ea=function(){if(Xt(this))return-at(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:yd+s)*e,e*=yd}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Qn(this))return"0";if(Xt(this))return"-"+at(this).toString(t);for(var e=xn(Math.pow(t,6)),n=this,s="";;){var i=zl(n,e).g;n=Kl(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Qn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Qn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xt(t){return t.h==-1}$.X=function(t){return t=Kl(this,t),Xt(t)?-1:Qn(t)?0:1};function at(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ne(n,~t.h).add(vd)}$.abs=function(){return Xt(this)?at(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Ne(n,n[n.length-1]&-2147483648?-1:0)};function Kl(t,e){return t.add(at(e))}$.R=function(t){if(Qn(this)||Qn(t))return ir;if(Xt(this))return Xt(t)?at(this).R(at(t)):at(at(this).R(t));if(Xt(t))return at(this.R(at(t)));if(0>this.X(Xg)&&0>t.X(Xg))return xn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Ya(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Ya(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Ya(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Ya(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ne(n,0)};function Ya(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function to(t,e){this.g=t,this.h=e}function zl(t,e){if(Qn(e))throw Error("division by zero");if(Qn(t))return new to(ir,ir);if(Xt(t))return e=zl(at(t),e),new to(at(e.g),at(e.h));if(Xt(e))return e=zl(t,at(e)),new to(at(e.g),e.h);if(30<t.g.length){if(Xt(t)||Xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vd,s=e;0>=s.X(t);)n=Jg(n),s=Jg(s);var i=Mi(n,1),r=Mi(s,1);for(s=Mi(s,2),n=Mi(n,2);!Qn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Mi(s,1),n=Mi(n,1)}return e=Kl(t,i.R(e)),new to(i,e)}for(i=ir;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=xn(n),o=r.R(e);Xt(o)||0<o.X(t);)n-=s,r=xn(n),o=r.R(e);Qn(r)&&(r=vd),i=i.add(r),t=Kl(t,o)}return new to(i,t)}$.gb=function(t){return zl(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ne(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ne(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ne(n,this.h^t.h)};function Jg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ne(n,t.h)}function Mi(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Ne(i,t.h)}ql.prototype.createWebChannel=ql.prototype.g;zt.prototype.send=zt.prototype.u;zt.prototype.open=zt.prototype.m;zt.prototype.close=zt.prototype.close;Hc.NO_ERROR=0;Hc.TIMEOUT=8;Hc.HTTP_ERROR=6;gA.COMPLETE="complete";yA.EventType=ya;ya.OPEN="a";ya.CLOSE="b";ya.ERROR="c";ya.MESSAGE="d";nt.prototype.listen=nt.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;wn.prototype.digest=wn.prototype.l;wn.prototype.reset=wn.prototype.reset;wn.prototype.update=wn.prototype.j;Ne.prototype.add=Ne.prototype.add;Ne.prototype.multiply=Ne.prototype.R;Ne.prototype.modulo=Ne.prototype.gb;Ne.prototype.compare=Ne.prototype.X;Ne.prototype.toNumber=Ne.prototype.ea;Ne.prototype.toString=Ne.prototype.toString;Ne.prototype.getBits=Ne.prototype.D;Ne.fromNumber=xn;Ne.fromString=eI;var e$=function(){return new ql},t$=function(){return Bc()},sh=Hc,n$=gA,s$=Oi,Zg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Qa=yA,i$=je,r$=wn,rr=Ne;const ey="@firebase/firestore";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Hr="10.7.0";/**
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
 */const Ti=new la("@firebase/firestore");function no(){return Ti.logLevel}function K(t,...e){if(Ti.logLevel<=he.DEBUG){const n=e.map(wp);Ti.debug(`Firestore (${Hr}): ${t}`,...n)}}function ss(t,...e){if(Ti.logLevel<=he.ERROR){const n=e.map(wp);Ti.error(`Firestore (${Hr}): ${t}`,...n)}}function wr(t,...e){if(Ti.logLevel<=he.WARN){const n=e.map(wp);Ti.warn(`Firestore (${Hr}): ${t}`,...n)}}function wp(t){if(typeof t=="string")return t;try{/**
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
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Hr}) INTERNAL ASSERTION FAILED: `+t;throw ss(e),new Error(e)}function Ye(t,e){t||ae()}function Ae(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends os{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class o${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class a${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class l${constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ss,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ss)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string"),new tI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new pt(e)}}class c${constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class u${constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new c$(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ye(typeof n.token=="string"),this.R=n.token,new h$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function f$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class nI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=f$(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function be(t,e){return t<e?-1:t>e?1:0}function Ar(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Rt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Rt(0,0))}static max(){return new re(new Rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Qo{constructor(e,n,s){n===void 0?n=0:n>e.length&&ae(),s===void 0?s=e.length-n:s>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends Qo{construct(e,n,s){return new Ue(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new X(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const p$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Qo{construct(e,n,s){return new It(e,n,s)}static isValidIdentifier(e){return p$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new X(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new X(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new X(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ue.fromString(e))}static fromName(e){return new ee(Ue.fromString(e).popFirst(5))}static empty(){return new ee(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ue(e.slice()))}}function _$(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(s===1e9?new Rt(n+1,0):new Rt(n,s));return new Ms(i,ee.empty(),e)}function m$(t){return new Ms(t.readTime,t.key,-1)}class Ms{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ms(re.min(),ee.empty(),-1)}static max(){return new Ms(re.max(),ee.empty(),-1)}}function g$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const y$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ap(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==y$)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Ip{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ip._e=-1;function Xc(t){return t==null}function Ed(t){return t===0&&1/t==-1/0}/**
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
 */function ty(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function E$(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xa(this.root,e,this.comparator,!0)}}class Xa{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ot.RED,this.left=i??ot.EMPTY,this.right=r??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ot(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,s,i,r){return this}insert(e,n,s){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ny(this.data.getIterator())}getIteratorFrom(e){return new ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vs{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new vs([])}unionWith(e){let n=new dt(It.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new vs(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class sI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new sI("Invalid base64 string: "+r):r}}(e);return new wt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const T$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vs(t){if(Ye(!!t),typeof t=="string"){let e=0;const n=T$.exec(t);if(Ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wi(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
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
 */function bp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cp(t){const e=t.mapValue.fields.__previous_value__;return bp(e)?Cp(e):e}function Xo(t){const e=Vs(t.mapValue.fields.__local_write_time__.timestampValue);return new Rt(e.seconds,e.nanos)}/**
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
 */class w${constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Jo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Jo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bp(t)?4:A$(t)?9007199254740991:10:ae()}function Hn(t,e){if(t===e)return!0;const n=Ai(t);if(n!==Ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xo(t).isEqual(Xo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Vs(i.timestampValue),a=Vs(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return wi(i.bytesValue).isEqual(wi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Ge(i.geoPointValue.latitude)===Ge(r.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ge(i.integerValue)===Ge(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Ge(i.doubleValue),a=Ge(r.doubleValue);return o===a?Ed(o)===Ed(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ar(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(ty(o)!==ty(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Hn(o[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function Zo(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function Ir(t,e){if(t===e)return 0;const n=Ai(t),s=Ai(e);if(n!==s)return be(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Ge(r.integerValue||r.doubleValue),l=Ge(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return sy(t.timestampValue,e.timestampValue);case 4:return sy(Xo(t),Xo(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(r,o){const a=wi(r),l=wi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=be(a[c],l[c]);if(u!==0)return u}return be(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=be(Ge(r.latitude),Ge(o.latitude));return a!==0?a:be(Ge(r.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Ir(a[c],l[c]);if(u)return u}return be(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Ja.mapValue&&o===Ja.mapValue)return 0;if(r===Ja.mapValue)return 1;if(o===Ja.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=be(l[h],u[h]);if(d!==0)return d;const f=Ir(a[l[h]],c[u[h]]);if(f!==0)return f}return be(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ae()}}function sy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Vs(t),s=Vs(e),i=be(n.seconds,s.seconds);return i!==0?i:be(n.nanos,s.nanos)}function br(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Vs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Td(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Td(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function wd(t){return!!t&&"integerValue"in t}function Sp(t){return!!t&&"arrayValue"in t}function iy(t){return!!t&&"nullValue"in t}function ry(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ih(t){return!!t&&"mapValue"in t}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jc(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=bo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function A$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nn{constructor(e){this.value=e}static empty(){return new Nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ih(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=It.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=bo(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ih(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ih(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Jc(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Nn(bo(this.value))}}/**
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
 */class gt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,re.min(),re.min(),re.min(),Nn.empty(),0)}static newFoundDocument(e,n,s,i){return new gt(e,1,n,re.min(),s,i,0)}static newNoDocument(e,n){return new gt(e,2,n,re.min(),re.min(),Nn.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,re.min(),re.min(),Nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gl{constructor(e,n){this.position=e,this.inclusive=n}}function oy(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ee.comparator(ee.fromName(o.referenceValue),n.key):s=Ir(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ay(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yl{constructor(e,n="asc"){this.field=e,this.dir=n}}function I$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class iI{}class Qe extends iI{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new C$(e,n,s):n==="array-contains"?new N$(e,s):n==="in"?new P$(e,s):n==="not-in"?new O$(e,s):n==="array-contains-any"?new k$(e,s):new Qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new S$(e,s):new R$(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ir(n,this.value)):n!==null&&Ai(this.value)===Ai(n)&&this.matchesComparison(Ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends iI{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new jn(e,n)}matches(e){return rI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function rI(t){return t.op==="and"}function oI(t){return b$(t)&&rI(t)}function b$(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Ad(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+br(t.value);if(oI(t))return t.filters.map(e=>Ad(e)).join(",");{const e=t.filters.map(n=>Ad(n)).join(",");return`${t.op}(${e})`}}function aI(t,e){return t instanceof Qe?function(s,i){return i instanceof Qe&&s.op===i.op&&s.field.isEqual(i.field)&&Hn(s.value,i.value)}(t,e):t instanceof jn?function(s,i){return i instanceof jn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&aI(o,i.filters[a]),!0):!1}(t,e):void ae()}function lI(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${br(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(lI).join(" ,")+"}"}(t):"Filter"}class C$ extends Qe{constructor(e,n,s){super(e,n,s),this.key=ee.fromName(s.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class S$ extends Qe{constructor(e,n){super(e,"in",n),this.keys=cI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class R$ extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=cI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ee.fromName(s.referenceValue))}class N$ extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sp(n)&&Zo(n.arrayValue,this.value)}}class P$ extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zo(this.value.arrayValue,n)}}class O$ extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zo(this.value.arrayValue,n)}}class k$ extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Zo(this.value.arrayValue,s))}}/**
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
 */class D${constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function ly(t,e=null,n=[],s=[],i=null,r=null,o=null){return new D$(t,e,n,s,i,r,o)}function Rp(t){const e=Ae(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ad(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>br(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>br(s)).join(",")),e.ce=n}return e.ce}function Np(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!I$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!aI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ay(t.startAt,e.startAt)&&ay(t.endAt,e.endAt)}function Id(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Zc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function x$(t,e,n,s,i,r,o,a){return new Zc(t,e,n,s,i,r,o,a)}function eu(t){return new Zc(t)}function cy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function L$(t){return t.collectionGroup!==null}function Co(t){const e=Ae(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new dt(It.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new Yl(r,s))}),n.has(It.keyField().canonicalString())||e.le.push(new Yl(It.keyField(),s))}return e.le}function Vn(t){const e=Ae(t);return e.he||(e.he=M$(e,Co(t))),e.he}function M$(t,e){if(t.limitType==="F")return ly(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Yl(i.field,r)});const n=t.endAt?new Gl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Gl(t.startAt.position,t.startAt.inclusive):null;return ly(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function bd(t,e,n){return new Zc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tu(t,e){return Np(Vn(t),Vn(e))&&t.limitType===e.limitType}function uI(t){return`${Rp(Vn(t))}|lt:${t.limitType}`}function Bi(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>lI(i)).join(", ")}]`),Xc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>br(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>br(i)).join(",")),`Target(${s})`}(Vn(t))}; limitType=${t.limitType})`}function nu(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):ee.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Co(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=oy(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Co(s),i)||s.endAt&&!function(o,a,l){const c=oy(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Co(s),i))}(t,e)}function V$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hI(t){return(e,n)=>{let s=!1;for(const i of Co(t)){const r=F$(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function F$(t,e,n){const s=t.field.isKeyField()?ee.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Ir(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ae()}}/**
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
 */class jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jc(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return E$(this.inner)}size(){return this.innerSize}}/**
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
 */const $$=new qe(ee.comparator);function Fs(){return $$}const dI=new qe(ee.comparator);function lo(...t){let e=dI;for(const n of t)e=e.insert(n.key,n);return e}function U$(t){let e=dI;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ri(){return So()}function fI(){return So()}function So(){return new jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const B$=new dt(ee.comparator);function Te(...t){let e=B$;for(const n of t)e=e.add(n);return e}const H$=new dt(be);function j$(){return H$}/**
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
 */function W$(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ed(e)?"-0":e}}function q$(t){return{integerValue:""+t}}/**
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
 */class su{constructor(){this._=void 0}}function K$(t,e,n){return t instanceof Cd?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&bp(r)&&(r=Cp(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Ql?pI(t,e):t instanceof Xl?_I(t,e):function(i,r){const o=G$(i,r),a=uy(o)+uy(i.Ie);return wd(o)&&wd(i.Ie)?q$(a):W$(i.serializer,a)}(t,e)}function z$(t,e,n){return t instanceof Ql?pI(t,e):t instanceof Xl?_I(t,e):n}function G$(t,e){return t instanceof Sd?function(s){return wd(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Cd extends su{}class Ql extends su{constructor(e){super(),this.elements=e}}function pI(t,e){const n=mI(e);for(const s of t.elements)n.some(i=>Hn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Xl extends su{constructor(e){super(),this.elements=e}}function _I(t,e){let n=mI(e);for(const s of t.elements)n=n.filter(i=>!Hn(i,s));return{arrayValue:{values:n}}}class Sd extends su{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function uy(t){return Ge(t.integerValue||t.doubleValue)}function mI(t){return Sp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Y$(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Ql&&i instanceof Ql||s instanceof Xl&&i instanceof Xl?Ar(s.elements,i.elements,Hn):s instanceof Sd&&i instanceof Sd?Hn(s.Ie,i.Ie):s instanceof Cd&&i instanceof Cd}(t.transform,e.transform)}class di{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new di}static exists(e){return new di(void 0,e)}static updateTime(e){return new di(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pp{}function gI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new X$(t.key,di.none()):new Op(t.key,t.data,di.none());{const n=t.data,s=Nn.empty();let i=new dt(It.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new iu(t.key,s,new vs(i.toArray()),di.none())}}function Q$(t,e,n){t instanceof Op?function(i,r,o){const a=i.value.clone(),l=dy(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof iu?function(i,r,o){if(!dl(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=dy(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(yI(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,s){return t instanceof Op?function(r,o,a,l){if(!dl(r.precondition,o))return a;const c=r.value.clone(),u=fy(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof iu?function(r,o,a,l){if(!dl(r.precondition,o))return a;const c=fy(r.fieldTransforms,l,o),u=o.data;return u.setAll(yI(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return dl(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function hy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ar(s,i,(r,o)=>Y$(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Op extends Pp{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class iu extends Pp{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function yI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function dy(t,e,n){const s=new Map;Ye(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,z$(o,a,n[i]))}return s}function fy(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,K$(r,o,e))}return s}class X$ extends Pp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class J${constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Q$(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ro(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ro(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=fI();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=gI(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(n,s)=>hy(n,s))&&Ar(this.baseMutations,e.baseMutations,(n,s)=>hy(n,s))}}/**
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
 */class Z${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class eU{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ge;function vI(t){if(t===void 0)return ss("GRPC error has no .code"),L.UNKNOWN;switch(t){case ze.OK:return L.OK;case ze.CANCELLED:return L.CANCELLED;case ze.UNKNOWN:return L.UNKNOWN;case ze.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ze.INTERNAL:return L.INTERNAL;case ze.UNAVAILABLE:return L.UNAVAILABLE;case ze.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ze.NOT_FOUND:return L.NOT_FOUND;case ze.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ze.ABORTED:return L.ABORTED;case ze.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ze.DATA_LOSS:return L.DATA_LOSS;default:return ae()}}(ge=ze||(ze={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tU(){return new TextEncoder}/**
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
 */const nU=new rr([4294967295,4294967295],0);function py(t){const e=tU().encode(t),n=new r$;return n.update(e),new Uint8Array(n.digest())}function _y(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new rr([n,s],0),new rr([i,r],0)]}class kp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new co(`Invalid padding: ${n}`);if(s<0)throw new co(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new co(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new co(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=rr.fromNumber(this.Te)}de(e,n,s){let i=e.add(n.multiply(rr.fromNumber(s)));return i.compare(nU)===1&&(i=new rr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=py(e),[s,i]=_y(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new kp(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=py(e),[s,i]=_y(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class co extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ru{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ia.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ru(re.min(),i,new qe(be),Fs(),Te())}}class Ia{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ia(s,n,Te(),Te(),Te())}}/**
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
 */class fl{constructor(e,n,s,i){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=i}}class EI{constructor(e,n){this.targetId=e,this.fe=n}}class TI{constructor(e,n,s=wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class my{constructor(){this.ge=0,this.pe=yy(),this.ye=wt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Te(),n=Te(),s=Te();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ae()}}),new Ia(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=yy()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ye(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class sU{constructor(e){this.Le=e,this.ke=new Map,this.qe=Fs(),this.Qe=gy(),this.Ke=new qe(be)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,s=e.fe.count,i=this.Ye(n);if(i){const r=i.target;if(Id(r))if(s===0){const o=new ee(r.path);this.We(n,o,gt.newNoDocument(o,re.min()))}else Ye(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=wi(s).toUint8Array()}catch(l){if(l instanceof sI)return wr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new kp(o,i,r)}catch(l){return wr(l instanceof co?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Id(a.target)){const l=new ee(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,gt.newNoDocument(l,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let s=Te();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const i=new ru(e,n,this.Ke,this.qe,s);return this.qe=Fs(),this.Qe=gy(),this.Ke=new qe(be),i}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new my,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new dt(be),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new my),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gy(){return new qe(ee.comparator)}function yy(){return new qe(ee.comparator)}const iU={asc:"ASCENDING",desc:"DESCENDING"},rU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oU={and:"AND",or:"OR"};class aU{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rd(t,e){return t.useProto3Json||Xc(e)?e:{value:e}}function lU(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cU(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function or(t){return Ye(!!t),re.fromTimestamp(function(n){const s=Vs(n);return new Rt(s.seconds,s.nanos)}(t))}function uU(t,e){return function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function wI(t){const e=Ue.fromString(t);return Ye(CI(e)),e}function rh(t,e){const n=wI(e);if(n.get(1)!==t.databaseId.projectId)throw new X(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(AI(n))}function Nd(t,e){return uU(t.databaseId,e)}function hU(t){const e=wI(t);return e.length===4?Ue.emptyPath():AI(e)}function vy(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AI(t){return Ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dU(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Ye(u===void 0||typeof u=="string"),wt.fromBase64String(u||"")):(Ye(u===void 0||u instanceof Uint8Array),wt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?L.UNKNOWN:vI(c.code);return new X(u,c.message||"")}(o);n=new TI(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=rh(t,s.document.name),r=or(s.document.updateTime),o=s.document.createTime?or(s.document.createTime):re.min(),a=new Nn({mapValue:{fields:s.document.fields}}),l=gt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new fl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=rh(t,s.document),r=s.readTime?or(s.readTime):re.min(),o=gt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new fl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=rh(t,s.document),r=s.removedTargetIds||[];n=new fl([],r,i,null)}else{if(!("filter"in e))return ae();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new eU(i,r),a=s.targetId;n=new EI(a,o)}}return n}function fU(t,e){return{documents:[Nd(t,e.path)]}}function pU(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Nd(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nd(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return bI(jn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Hi(h.field),direction:gU(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Rd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function _U(t){let e=hU(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ye(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=II(h);return d instanceof jn&&oI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new Yl(ji(m.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Xc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Gl(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Gl(f,d)}(n.endAt)),x$(e,i,o,r,a,"F",l,c)}function mU(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function II(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ji(n.unaryFilter.field);return Qe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ji(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ji(n.unaryFilter.field);return Qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ji(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(ji(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(s=>II(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function gU(t){return iU[t]}function yU(t){return rU[t]}function vU(t){return oU[t]}function Hi(t){return{fieldPath:t.canonicalString()}}function ji(t){return It.fromServerFormat(t.fieldPath)}function bI(t){return t instanceof Qe?function(n){if(n.op==="=="){if(ry(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NAN"}};if(iy(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ry(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NOT_NAN"}};if(iy(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hi(n.field),op:yU(n.op),value:n.value}}}(t):t instanceof jn?function(n){const s=n.getFilters().map(i=>bI(i));return s.length===1?s[0]:{compositeFilter:{op:vU(n.op),filters:s}}}(t):ae()}function CI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Es{constructor(e,n,s,i,r=re.min(),o=re.min(),a=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class EU{constructor(e){this.ut=e}}function TU(t){const e=_U({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bd(e,e.limit,"L"):e}/**
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
 */class wU{constructor(){this.on=new AU}addToCollectionParentIndex(e,n){return this.on.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Ms.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Ms.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class AU{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new dt(Ue.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new dt(Ue.comparator)).toArray()}}/**
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
 */class IU{constructor(){this.changes=new jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class CU{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Ro(s.mutation,i,vs.empty(),Rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Te()){const i=ri();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=lo();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ri();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Te()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Fs();const o=So(),a=function(){return So()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof iu)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ro(u.mutation,c,u.mutation.getFieldMask(),Rt.now())):o.set(c.key,vs.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new bU(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=So();let i=new qe((o,a)=>o-a),r=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||vs.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||Te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=fI();u.forEach(d=>{if(!r.has(d)){const f=gI(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):L$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):P.resolve(ri());let a=-1,l=r;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Te())).next(u=>({batchId:a,changes:U$(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(s=>{let i=lo();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=lo();return this.indexManager.getCollectionParents(e,r).next(a=>P.forEach(a,l=>{const c=function(h,d){return new Zc(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,gt.newInvalidDocument(u)))});let a=lo();return o.forEach((l,c)=>{const u=r.get(l);u!==void 0&&Ro(u.mutation,c,vs.empty(),Rt.now()),nu(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class SU{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:or(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:TU(i.bundledQuery),readTime:or(i.readTime)}}(n)),P.resolve()}}/**
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
 */class RU{constructor(){this.overlays=new qe(ee.comparator),this.lr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ri();return P.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.lt(e,n,r)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.lr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const i=ri(),r=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new qe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ri(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ri(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return P.resolve(a)}lt(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(s.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Z$(n,s));let r=this.lr.get(n);r===void 0&&(r=Te(),this.lr.set(n,r)),this.lr.set(n,r.add(s.key))}}/**
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
 */class Dp{constructor(){this.hr=new dt(et.Pr),this.Ir=new dt(et.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new et(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new et(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new ee(new Ue([])),s=new et(n,e),i=new et(n,e+1),r=[];return this.Ir.forEachInRange([s,i],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new ee(new Ue([])),s=new et(n,e),i=new et(n,e+1);let r=Te();return this.Ir.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new et(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class et{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return ee.comparator(e.key,n.key)||be(e.gr,n.gr)}static Tr(e,n){return be(e.gr,n.gr)||ee.comparator(e.key,n.key)}}/**
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
 */class NU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new dt(et.Pr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new J$(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new et(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Sr(s),r=i<0?0:i;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([s,i],o=>{const a=this.wr(o.gr);r.push(a)}),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new dt(be);return n.forEach(i=>{const r=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{s=s.add(a.gr)})}),P.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ee.isDocumentKey(r)||(r=r.child(""));const o=new et(new ee(r),0);let a=new dt(be);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gr)),!0)},o),P.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const i=this.wr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ye(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return P.forEach(n.mutations,i=>{const r=new et(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new et(n,0),i=this.yr.firstAfterOrEqual(s);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class PU{constructor(e){this.Cr=e,this.docs=function(){return new qe(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let s=Fs();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():gt.newInvalidDocument(i))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Fs();const o=n.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||g$(m$(u),s)<=0||(i.has(u.key)||nu(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,n,s,i){ae()}vr(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new OU(this)}getSize(e){return P.resolve(this.size)}}class OU extends IU{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class kU{constructor(e){this.persistence=e,this.Fr=new jr(n=>Rp(n),Np),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Dp,this.targetCount=0,this.Nr=Cr.On()}forEachTarget(e,n){return this.Fr.forEach((s,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),P.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Cr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.kn(n),P.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(r).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Or.containsKey(n))}}/**
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
 */class DU{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ip(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new kU(this),this.indexManager=new wU,this.remoteDocumentCache=function(i){return new PU(i)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new EU(n),this.Kr=new SU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new NU(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){K("MemoryPersistence","Starting transaction:",e);const i=new xU(this.Lr.next());return this.referenceDelegate.$r(),s(i).next(r=>this.referenceDelegate.Ur(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Wr(e,n){return P.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class xU extends v${constructor(e){super(),this.currentSequenceNumber=e}}class xp{constructor(e){this.persistence=e,this.Gr=new Dp,this.zr=null}static jr(e){return new xp(e)}get Hr(){if(this.zr)return this.zr;throw ae()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Hr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,s=>{const i=ee.fromPath(s);return this.Jr(e,i).next(r=>{r||n.removeEntry(i,re.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class Lp{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=i}static Qi(e,n){let s=Te(),i=Te();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Lp(e,n.fromCache,s,i)}}/**
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
 */class LU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class MU{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new LU;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,s,i){return s.documentReadCount<this.Ui?(no()<=he.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(no()<=he.DEBUG&&K("QueryEngine","Query:",Bi(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Wi*i?(no()<=he.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):P.resolve())}zi(e,n){if(cy(n))return P.resolve(null);let s=Vn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bd(n,null,"F"),s=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Te(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,bd(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,s,i){return cy(n)||i.isEqual(re.min())?P.resolve(null):this.Gi.getDocuments(e,s).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,s,i)?P.resolve(null):(no()<=he.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bi(n)),this.Xi(e,o,n,_$(i,-1)).next(a=>a))})}Yi(e,n){let s=new dt(hI(e));return n.forEach((i,r)=>{nu(e,r)&&(s=s.add(r))}),s}Zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(e,n,s){return no()<=he.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Bi(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ms.min(),s)}Xi(e,n,s,i){return this.Gi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class VU{constructor(e,n,s,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new qe(be),this.ns=new jr(r=>Rp(r),Np),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CU(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function FU(t,e,n,s){return new VU(t,e,n,s)}async function SI(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Te();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function RI(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function $U(t,e){const n=Ae(t),s=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(wt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(g,y,E){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(r,f))});let l=Fs(),c=Te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(UU(r,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!s.isEqual(re.min())){const u=n.qr.getLastRemoteSnapshotVersion(r).next(h=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.ts=i,r))}function UU(t,e,n){let s=Te(),i=Te();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Fs();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:i}})}function BU(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.qr.getTargetData(s,e).next(r=>r?(i=r,P.resolve(i)):n.qr.allocateTargetId(s).next(o=>(i=new Es(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ts.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function Pd(t,e,n){const s=Ae(t),i=s.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Aa(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(i.target)}function Ey(t,e,n){const s=Ae(t);let i=re.min(),r=Te();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=Ae(l),d=h.ns.get(u);return d!==void 0?P.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(s,o,Vn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?r:Te())).next(a=>(HU(s,V$(e),a),{documents:a,ls:r})))}function HU(t,e,n){let s=t.rs.get(e)||re.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.rs.set(e,s)}class Ty{constructor(){this.activeTargetIds=j$()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jU{constructor(){this.eo=new Ty,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Ty,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WU{ro(e){}shutdown(){}}/**
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
 */class wy{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Za=null;function oh(){return Za===null?Za=function(){return 268435456+Math.round(2147483648*Math.random())}():Za++,"0x"+Za.toString(16)}/**
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
 */class KU{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const ft="WebChannelConnection";class zU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${i}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get yo(){return!1}wo(n,s,i,r,o){const a=oh(),l=this.So(n,s);K("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,r,o),this.Do(n,l,c,i).then(u=>(K("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw wr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}Co(n,s,i,r,o,a){return this.wo(n,s,i,r,o)}bo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}So(n,s){const i=qU[n];return`${this.mo}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,i){const r=oh();return new Promise((o,a)=>{const l=new i$;l.setWithCredentials(!0),l.listenOnce(n$.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case sh.NO_ERROR:const u=l.getResponseJson();K(ft,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case sh.TIMEOUT:K(ft,`RPC '${e}' ${r} timed out`),a(new X(L.DEADLINE_EXCEEDED,"Request time out"));break;case sh.HTTP_ERROR:const h=l.getStatus();if(K(ft,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(f.status);a(new X(m,f.message))}else a(new X(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new X(L.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{K(ft,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);K(ft,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}vo(e,n,s){const i=oh(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=e$(),a=t$(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");K(ft,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new KU({co:y=>{f?K(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(K(ft,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),K(ft,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},lo:()=>h.close()}),g=(y,E,C)=>{y.listen(E,w=>{try{C(w)}catch(T){setTimeout(()=>{throw T},0)}})};return g(h,Qa.EventType.OPEN,()=>{f||K(ft,`RPC '${e}' stream ${i} transport opened.`)}),g(h,Qa.EventType.CLOSE,()=>{f||(f=!0,K(ft,`RPC '${e}' stream ${i} transport closed`),m.Ro())}),g(h,Qa.EventType.ERROR,y=>{f||(f=!0,wr(ft,`RPC '${e}' stream ${i} transport errored:`,y),m.Ro(new X(L.UNAVAILABLE,"The operation could not be completed")))}),g(h,Qa.EventType.MESSAGE,y=>{var E;if(!f){const C=y.data[0];Ye(!!C);const w=C,T=w.error||((E=w[0])===null||E===void 0?void 0:E.error);if(T){K(ft,`RPC '${e}' stream ${i} received error:`,T);const x=T.status;let R=function(Z){const Y=ze[Z];if(Y!==void 0)return vI(Y)}(x),q=T.message;R===void 0&&(R=L.INTERNAL,q="Unknown error status: "+x+" with message "+T.message),f=!0,m.Ro(new X(R,q)),h.close()}else K(ft,`RPC '${e}' stream ${i} received:`,C),m.Vo(C)}}),g(a,s$.STAT_EVENT,y=>{y.stat===Zg.PROXY?K(ft,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Zg.NOPROXY&&K(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function ah(){return typeof document<"u"?document:null}/**
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
 */function NI(t){return new aU(t,!0)}/**
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
 */class PI{constructor(e,n,s=1e3,i=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=i,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-s);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class GU{constructor(e,n,s,i,r,o,a,l){this.si=e,this.Ko=s,this.$o=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new PI(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(ss(n.toString()),ss("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Uo===n&&this.s_(s,i)},s=>{e(()=>{const i=new X(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(i)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{s(()=>this.o_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YU extends GU{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=dU(this.serializer,e),s=function(r){if(!("targetChange"in r))return re.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?or(o.readTime):re.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=vy(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=Id(l)?{documents:fU(r,l)}:{query:pU(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=cU(r,o.resumeToken);const c=Rd(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=lU(r,o.snapshotVersion.toTimestamp());const c=Rd(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=mU(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=vy(this.serializer),n.removeTarget=e,this.e_(n)}}/**
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
 */class QU extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new X(L.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.wo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(L.UNKNOWN,i.toString())})}Co(e,n,s,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new X(L.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class XU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(ss(n),this.f_=!1):K("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class JU{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{s.enqueueAndForget(async()=>{Ca(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Ae(l);c.C_.add(4),await ba(c),c.M_.set("Unknown"),c.C_.delete(4),await ou(c)}(this))})}),this.M_=new XU(s,i)}}async function ou(t){if(Ca(t))for(const e of t.v_)await e(!0)}async function ba(t){for(const e of t.v_)await e(!1)}function OI(t,e){const n=Ae(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Fp(n)?Vp(n):Wr(n).Ho()&&Mp(n,e))}function kI(t,e){const n=Ae(t),s=Wr(n);n.D_.delete(e),s.Ho()&&DI(n,e),n.D_.size===0&&(s.Ho()?s.Zo():Ca(n)&&n.M_.set("Unknown"))}function Mp(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wr(t).u_(e)}function DI(t,e){t.x_.Oe(e),Wr(t).c_(e)}function Vp(t){t.x_=new sU({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Wr(t).start(),t.M_.g_()}function Fp(t){return Ca(t)&&!Wr(t).jo()&&t.D_.size>0}function Ca(t){return Ae(t).C_.size===0}function xI(t){t.x_=void 0}async function ZU(t){t.D_.forEach((e,n)=>{Mp(t,e)})}async function e4(t,e){xI(t),Fp(t)?(t.M_.w_(e),Vp(t)):t.M_.set("Unknown")}async function t4(t,e,n){if(t.M_.set("Online"),e instanceof TI&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(s){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ay(t,s)}else if(e instanceof fl?t.x_.$e(e):e instanceof EI?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(re.min()))try{const s=await RI(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.D_.get(c);u&&r.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.D_.get(l);if(!u)return;r.D_.set(l,u.withResumeToken(wt.EMPTY_BYTE_STRING,u.snapshotVersion)),DI(r,l);const h=new Es(u.target,l,c,u.sequenceNumber);Mp(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){K("RemoteStore","Failed to raise snapshot:",s),await Ay(t,s)}}async function Ay(t,e,n){if(!Aa(e))throw e;t.C_.add(1),await ba(t),t.M_.set("Offline"),n||(n=()=>RI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await ou(t)})}async function Iy(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const s=Ca(n);n.C_.add(3),await ba(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await ou(n)}async function n4(t,e){const n=Ae(t);e?(n.C_.delete(2),await ou(n)):e||(n.C_.add(2),await ba(n),n.M_.set("Unknown"))}function Wr(t){return t.O_||(t.O_=function(n,s,i){const r=Ae(n);return r.A_(),new YU(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{ho:ZU.bind(null,t),Io:e4.bind(null,t),a_:t4.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Fp(t)?Vp(t):t.M_.set("Unknown")):(await t.O_.stop(),xI(t))})),t.O_}/**
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
 */class $p{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new $p(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function LI(t,e){if(ss("AsyncQueue",`${e}: ${t}`),Aa(t))return new X(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ar{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ee.comparator(n.key,s.key):(n,s)=>ee.comparator(n.key,s.key),this.keyedMap=lo(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class by{constructor(){this.B_=new qe(ee.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ae():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Sr{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Sr(e,n,ar.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class s4{constructor(){this.k_=void 0,this.listeners=[]}}class i4{constructor(){this.queries=new jr(e=>uI(e),tu),this.onlineState="Unknown",this.q_=new Set}}async function Up(t,e){const n=Ae(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new s4),i)try{r.k_=await n.onListen(s)}catch(o){const a=LI(o,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&Hp(n)}async function Bp(t,e){const n=Ae(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function r4(t,e){const n=Ae(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(i)&&(s=!0);o.k_=i}}s&&Hp(n)}function o4(t,e,n){const s=Ae(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Hp(t){t.q_.forEach(e=>{e.next()})}class jp{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Sr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class MI{constructor(e){this.key=e}}class VI{constructor(e){this.key=e}}class a4{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Te(),this.mutatedKeys=Te(),this._a=hI(e),this.aa=new ar(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new by,i=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=nu(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?m!==g&&(s.track({type:3,doc:f}),y=!0):this.ha(d,f)||(s.track({type:2,doc:f}),y=!0,(l&&this._a(f,l)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),y=!0):d&&!f&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{aa:o,la:s,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,m){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return g(f)-g(m)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(s),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new Sr(this.query,e.aa,r,o,e.mutatedKeys,l===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new by,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Te(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new VI(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new MI(s))}),n}da(e){this.ia=e.ls,this.oa=Te();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Sr.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class l4{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class c4{constructor(e){this.key=e,this.Ra=!1}}class u4{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new jr(a=>uI(a),tu),this.fa=new Map,this.ga=new Set,this.pa=new qe(ee.comparator),this.ya=new Map,this.wa=new Dp,this.Sa={},this.ba=new Map,this.Da=Cr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function h4(t,e){const n=y4(t);let s,i;const r=n.ma.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Aa();else{const o=await BU(n.localStore,Vn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await d4(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&OI(n.remoteStore,o)}return i}async function d4(t,e,n,s,i){t.va=(h,d,f)=>async function(g,y,E,C){let w=y.view.ca(E);w.Zi&&(w=await Ey(g.localStore,y.query,!1).then(({documents:q})=>y.view.ca(q,w)));const T=C&&C.targetChanges.get(y.targetId),x=C&&C.targetMismatches.get(y.targetId)!=null,R=y.view.applyChanges(w,g.isPrimaryClient,T,x);return Sy(g,y.targetId,R.Ta),R.snapshot}(t,h,d,f);const r=await Ey(t.localStore,e,!0),o=new a4(e,r.ls),a=o.ca(r.documents),l=Ia.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Sy(t,n,c.Ta);const u=new l4(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function f4(t,e){const n=Ae(t),s=n.ma.get(e),i=n.fa.get(s.targetId);if(i.length>1)return n.fa.set(s.targetId,i.filter(r=>!tu(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Pd(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),kI(n.remoteStore,s.targetId),Od(n,s.targetId)}).catch(Ap)):(Od(n,s.targetId),await Pd(n.localStore,s.targetId,!0))}async function FI(t,e){const n=Ae(t);try{const s=await $U(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ya.get(r);o&&(Ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Ye(o.Ra):i.removedDocuments.size>0&&(Ye(o.Ra),o.Ra=!1))}),await UI(n,s,e)}catch(s){await Ap(s)}}function Cy(t,e,n){const s=Ae(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Ae(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&Hp(l)}(s.eventManager,e),i.length&&s.Va.a_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function p4(t,e,n){const s=Ae(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ya.get(e),r=i&&i.key;if(r){let o=new qe(ee.comparator);o=o.insert(r,gt.newNoDocument(r,re.min()));const a=Te().add(r),l=new ru(re.min(),new Map,new qe(be),o,a);await FI(s,l),s.pa=s.pa.remove(r),s.ya.delete(e),Wp(s)}else await Pd(s.localStore,e,!1).then(()=>Od(s,e,n)).catch(Ap)}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||$I(t,s)})}function $I(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(kI(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Wp(t))}function Sy(t,e,n){for(const s of n)s instanceof MI?(t.wa.addReference(s.key,e),_4(t,s)):s instanceof VI?(K("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||$I(t,s.key)):ae()}function _4(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(K("SyncEngine","New document in limbo: "+n),t.ga.add(s),Wp(t))}function Wp(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new ee(Ue.fromString(e)),s=t.Da.next();t.ya.set(s,new c4(n)),t.pa=t.pa.insert(n,s),OI(t.remoteStore,new Es(Vn(eu(n.path)),s,"TargetPurposeLimboResolution",Ip._e))}}async function UI(t,e,n){const s=Ae(t),i=[],r=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Lp.Qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Va.a_(i),await async function(l,c){const u=Ae(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,d=>P.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>P.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Aa(h))throw h;K("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),m=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(m);u.ts=u.ts.insert(d,g)}}}(s.localStore,r))}async function m4(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const s=await SI(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(l=>{l.reject(new X(L.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await UI(n,s._s)}}function g4(t,e){const n=Ae(t),s=n.ya.get(e);if(s&&s.Ra)return Te().add(s.key);{let i=Te();const r=n.fa.get(e);if(!r)return i;for(const o of r){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function y4(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=FI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=g4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=p4.bind(null,e),e.Va.a_=r4.bind(null,e.eventManager),e.Va.Fa=o4.bind(null,e.eventManager),e}class Ry{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=NI(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return FU(this.persistence,new MU,e.initialUser,this.serializer)}createPersistence(e){return new DU(xp.jr,this.serializer)}createSharedClientState(e){return new jU}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class v4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=m4.bind(null,this.syncEngine),await n4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new i4}()}createDatastore(e){const n=NI(e.databaseInfo.databaseId),s=function(r){return new zU(r)}(e.databaseInfo);return function(r,o,a,l){return new QU(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new JU(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Cy(this.syncEngine,n,0),function(){return wy.D()?new wy:new WU}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new u4(i,r,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=Ae(n);K("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await ba(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class qp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):ss("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class E4{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=nI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{K("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(K("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=LI(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function lh(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await SI(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ny(t,e){t.asyncQueue.verifyOperationInProgress();const n=await w4(t);K("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Iy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Iy(e.remoteStore,r)),t._onlineComponents=e}function T4(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function w4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!T4(n))throw n;wr("Error using user provided cache. Falling back to memory cache: "+n),await lh(t,new Ry)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await lh(t,new Ry);return t._offlineComponents}async function A4(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Ny(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Ny(t,new v4))),t._onlineComponents}async function Jl(t){const e=await A4(t),n=e.eventManager;return n.onListen=h4.bind(null,e.syncEngine),n.onUnlisten=f4.bind(null,e.syncEngine),n}function I4(t,e,n={}){const s=new Ss;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new qp({next:d=>{o.enqueueAndForget(()=>Bp(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new X(L.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new X(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new jp(eu(a.path),u,{includeMetadataChanges:!0,J_:!0});return Up(r,h)}(await Jl(t),t.asyncQueue,e,n,s)),s.promise}function b4(t,e,n={}){const s=new Ss;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new qp({next:d=>{o.enqueueAndForget(()=>Bp(r,h)),d.fromCache&&l.source==="server"?c.reject(new X(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new jp(a,u,{includeMetadataChanges:!0,J_:!0});return Up(r,h)}(await Jl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function BI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Py=new Map;/**
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
 */function HI(t,e,n){if(!n)throw new X(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function C4(t,e,n,s){if(e===!0&&s===!0)throw new X(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Oy(t){if(!ee.isDocumentKey(t))throw new X(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ky(t){if(ee.isDocumentKey(t))throw new X(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function S4(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Rs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=S4(t);throw new X(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Dy{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new X(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}C4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class au{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dy(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new o$;switch(s.type){case"firstParty":return new u$(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new X(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Py.get(n);s&&(K("ComponentProvider","Removing Datastore"),Py.delete(n),s.terminate())}(this),Promise.resolve()}}function R4(t,e,n,s={}){var i;const r=(t=Rs(t,au))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=pt.MOCK_USER;else{a=SD(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new X(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(c)}t._authCredentials=new a$(new tI(a,l))}}/**
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
 */class Sa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Sa(this.firestore,e,this._query)}}class yn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yn(this.firestore,e,this._key)}}class Ns extends Sa{constructor(e,n,s){super(e,n,eu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yn(this.firestore,null,new ee(e))}withConverter(e){return new Ns(this.firestore,e,this._path)}}function jI(t,e,...n){if(t=Hs(t),HI("collection","path",e),t instanceof au){const s=Ue.fromString(e,...n);return ky(s),new Ns(t,null,s)}{if(!(t instanceof yn||t instanceof Ns))throw new X(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ue.fromString(e,...n));return ky(s),new Ns(t.firestore,null,s)}}function N4(t,e,...n){if(t=Hs(t),arguments.length===1&&(e=nI.newId()),HI("doc","path",e),t instanceof au){const s=Ue.fromString(e,...n);return Oy(s),new yn(t,null,new ee(s))}{if(!(t instanceof yn||t instanceof Ns))throw new X(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ue.fromString(e,...n));return Oy(s),new yn(t.firestore,t instanceof Ns?t.converter:null,new ee(s))}}/**
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
 */class P4{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new PI(this,"async_queue_retry"),this.iu=()=>{const n=ah();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=ah();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=ah();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ss;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Aa(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw ss("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=$p.createAndSchedule(this,e,n,s,r=>this.au(r));return this.Xa.push(i),i}su(){this.eu&&ae()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function xy(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ea extends au{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new P4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||WI(this),this._firestoreClient.terminate()}}function O4(t,e){const n=typeof t=="object"?t:AT(),s=typeof t=="string"?t:e||"(default)",i=Lx(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=bD("firestore");r&&R4(i,...r)}return i}function Kp(t){return t._firestoreClient||WI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function WI(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new w$(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,BI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new E4(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Zl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zl(wt.fromBase64String(e))}catch(n){throw new X(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zl(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qI{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class KI{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}const k4=new RegExp("[~\\*/\\[\\]]");function D4(t,e,n){if(e.search(k4)>=0)throw Ly(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qI(...e.split("."))._internalPath}catch{throw Ly(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ly(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new X(L.INVALID_ARGUMENT,a+t+l)}/**
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
 */class zI{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new yn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new x4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(GI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class x4 extends zI{data(){return super.data()}}function GI(t,e){return typeof e=="string"?D4(t,e):e instanceof qI?e._internalPath:e._delegate._internalPath}/**
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
 */function YI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class L4{convertValue(e,n="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Jc(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new KI(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Cp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Xo(e));default:return null}}convertTimestamp(e){const n=Vs(e);return new Rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ue.fromString(e);Ye(CI(s));const i=new Jo(s.get(1),s.get(3)),r=new ee(s.popFirst(5));return i.isEqual(n)||ss(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class QI extends zI{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(GI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class pl extends QI{data(e={}){return super.data(e)}}class XI{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new uo(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new pl(this._firestore,this._userDataWriter,s.key,s,new uo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new pl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new uo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new pl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new uo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:M4(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function M4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
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
 */function JI(t){t=Rs(t,yn);const e=Rs(t.firestore,ea);return I4(Kp(e),t._key).then(n=>ZI(e,t,n))}class zp extends L4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zl(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yn(this.firestore,null,n)}}function V4(t){t=Rs(t,Sa);const e=Rs(t.firestore,ea),n=Kp(e),s=new zp(e);return YI(t._query),b4(n,t._query).then(i=>new XI(e,s,t,i))}function Gp(t,...e){var n,s,i;t=Hs(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||xy(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(xy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof yn)c=Rs(t.firestore,ea),u=eu(t._key.path),l={next:h=>{e[o]&&e[o](ZI(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Rs(t,Sa);c=Rs(h.firestore,ea),u=h._query;const d=new zp(c);l={next:f=>{e[o]&&e[o](new XI(c,d,h,f))},error:e[o+1],complete:e[o+2]},YI(t._query)}return function(d,f,m,g){const y=new qp(g),E=new jp(f,y,m);return d.asyncQueue.enqueueAndForget(async()=>Up(await Jl(d),E)),()=>{y.Na(),d.asyncQueue.enqueueAndForget(async()=>Bp(await Jl(d),E))}}(Kp(c),u,a,l)}function ZI(t,e,n){const s=n.docs.get(e._key),i=new zp(t);return new QI(t,i,e._key,s,new uo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Hr=i})(Mr),Bn(new En("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new ea(new l$(s.getProvider("auth-internal")),new d$(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new X(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jo(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Ht(ey,"4.4.0",e),Ht(ey,"4.4.0","esm2017")})();/**
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
 */const eb="firebasestorage.googleapis.com",F4="storageBucket",$4=2*60*1e3,U4=10*60*1e3;/**
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
 */class Kn extends os{constructor(e,n,s=0){super(ch(e),`Firebase Storage: ${n} (${ch(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Kn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ch(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Wn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Wn||(Wn={}));function ch(t){return"storage/"+t}function B4(){const t="An unknown error occurred, please check the error payload for server response.";return new Kn(Wn.UNKNOWN,t)}function H4(){return new Kn(Wn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function j4(){return new Kn(Wn.CANCELED,"User canceled the upload/download.")}function W4(t){return new Kn(Wn.INVALID_URL,"Invalid URL '"+t+"'.")}function q4(t){return new Kn(Wn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function My(t){return new Kn(Wn.INVALID_ARGUMENT,t)}function tb(){return new Kn(Wn.APP_DELETED,"The Firebase app was deleted.")}function K4(t){return new Kn(Wn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class _n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=_n.makeFromUrl(e,n)}catch{return new _n(e,"")}if(s.path==="")return s;throw q4(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},g=n===eb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",E=new RegExp(`^https?://${g}/${i}/${y}`,"i"),w=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<w.length;T++){const x=w[T],R=x.regex.exec(e);if(R){const q=R[x.indices.bucket];let M=R[x.indices.path];M||(M=""),s=new _n(q,M),x.postModify(s);break}}if(s==null)throw W4(e);return s}}class z4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function G4(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...E){if(c){d();return}if(y){d(),u.call(null,y,...E);return}if(l()||o){d(),u.call(null,y,...E);return}s<64&&(s*=2);let w;a===1?(a=2,w=0):w=(s+Math.random())*1e3,h(w)}let m=!1;function g(y){m||(m=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function Y4(t){t(!1)}/**
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
 */function Q4(t){return t!==void 0}function Vy(t,e,n,s){if(s<e)throw My(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw My(`Invalid value for '${t}'. Expected ${n} or less.`)}function X4(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ec;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ec||(ec={}));/**
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
 */function J4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class Z4{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new el(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ec.NO_ERROR,l=r.getStatus();if(!a||J4(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ec.ABORT;s(!1,new el(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new el(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Q4(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=B4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?tb():j4();o(l)}else{const l=H4();o(l)}};this.canceled_?n(!1,new el(!1,null,!0)):this.backoffId_=G4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Y4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class el{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function eB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iB(t,e,n,s,i,r,o=!0){const a=X4(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return nB(c,e),eB(c,n),tB(c,r),sB(c,s),new Z4(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function rB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oB(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class tc{constructor(e,n){this._service=e,n instanceof _n?this._location=n:this._location=_n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new tc(e,n)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return oB(this._location.path)}get storage(){return this._service}get parent(){const e=rB(this._location.path);if(e===null)return null;const n=new _n(this._location.bucket,e);return new tc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw K4(e)}}function Fy(t,e){const n=e==null?void 0:e[F4];return n==null?null:_n.makeFromBucketSpec(n,t)}class aB{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=eb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$4,this._maxUploadRetryTime=U4,this._requests=new Set,i!=null?this._bucket=_n.makeFromBucketSpec(i,this._host):this._bucket=Fy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=Fy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new tc(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new z4(tb());{const o=iB(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const $y="@firebase/storage",Uy="0.12.0";/**
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
 */const lB="storage";function cB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new aB(n,s,i,e,Mr)}function uB(){Bn(new En(lB,cB,"PUBLIC").setMultipleInstances(!0)),Ht($y,Uy,""),Ht($y,Uy,"esm2017")}uB();const uh=new WeakMap;function nb(t,e){return uh.has(e)||uh.set(e,t||{f:{},r:{},s:{},u:{}}),uh.get(e)}function hB(t,e,n,s){if(!t)return n;const[i,r]=sb(t);if(!i)return n;const o=nb(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function dB(t,e,n,s){if(!t)return;const[i,r]=sb(t);if(!i)return;const o=nb(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(Pn),a}function sb(t){return c1(t)||u1(t)?["f",t.path]:h1(t)?["r",t.toString()]:d1(t)?["s",t.toString()]:[]}const hh=new WeakMap;function fB(t,e,n){const s=UT();hh.has(s)||hh.set(s,new Map);const i=hh.get(s),r=dB(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Pn}const pB={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function kd(t,e,n,s){if(!a1(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof Rt||m instanceof KI)h[f]=m;else if(kf(m)){const g=c+f;h[f]=g in n?l[f]:m.path,d[g]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let g=0;g<m.length;g++){const y=m[g];y&&y.path in r&&(h[f][g]=r[y.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else Ri(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",i),i}const Yp={reset:!1,wait:!0,maxRefDepth:2,converter:pB,snapshotOptions:{serverTimestamps:"estimate"}};function nc(t){for(const e in t)t[e].unsub()}function Dd(t,e,n,s,i,r,o,a,l){const[c,u]=kd(s.data(t.snapshotOptions),Of(e,n),i,t);r.set(e,n,c),xd(t,e,n,i,u,r,o,a,l)}function _B({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=Pn;return a.once?JI(t).then(u=>{u.exists()?Dd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Gp(t,u=>{u.exists()?Dd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),nc(l)}}function xd(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(g=>c.indexOf(g)<0).forEach(g=>{s[g].unsub(),delete s[g]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(g){g in f&&++h>=d&&a(n)}c.forEach(g=>{const y=s[g],E=i[g],C=`${n}.${g}`;if(f[C]=!0,y)if(y.path!==E.path)y.unsub();else return;s[g]={data:()=>Of(e,C),unsub:_B({ref:E,target:e,path:C,depth:o,ops:r,resolve:m.bind(null,C),reject:l},t),path:E.path}})}function mB(t,e,n,s,i,r){const o=Object.assign({},Yp,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Ji(c?[]:t.value);c||n.set(t,h,[]);const f=s;let m,g=Pn;const y=[],E={added:({newIndex:w,doc:T})=>{y.splice(w,0,Object.create(null));const x=y[w],[R,q]=kd(T.data(l),void 0,x,o);n.add(Gn(d),w,R),xd(o,d,`${h}.${w}`,x,q,n,0,s.bind(null,T),i)},modified:({oldIndex:w,newIndex:T,doc:x})=>{const R=Gn(d),q=y[w],M=R[w],[Z,Y]=kd(x.data(l),M,q,o);y.splice(T,0,q),n.remove(R,w),n.add(R,T,Z),xd(o,d,`${h}.${T}`,q,Y,n,0,s,i)},removed:({oldIndex:w})=>{const T=Gn(d);n.remove(T,w),nc(y.splice(w,1)[0])}};function C(w){const T=w.docChanges(a);if(!m&&T.length){m=!0;let x=0;const R=T.length,q=Object.create(null);for(let M=0;M<R;M++)q[T[M].doc.id]=!0;s=M=>{M&&M.id in q&&++x>=R&&(c&&(n.set(t,h,Gn(d)),d=t),f(Gn(d)),s=Pn)}}T.forEach(x=>{E[x.type](x)}),T.length||(c&&(n.set(t,h,Gn(d)),d=t),s(Gn(d)))}return u?V4(e).then(C).catch(i):g=Gp(e,C,i),w=>{if(g(),w){const T=typeof w=="function"?w():[];n.set(t,h,T)}y.forEach(nc)}}function gB(t,e,n,s,i,r){const o=Object.assign({},Yp,r),a="value",l=Object.create(null);s=f1(s,()=>Of(t,a));let c=Pn;function u(h){h.exists()?Dd(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?JI(e).then(u).catch(i):c=Gp(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}nc(l)}}const By=Symbol();function ib(t,e){let n=Pn;const s=Object.assign({},Yp,e),i=Gn(t),r=s.target||Ji();_1()&&(s.once=!0);const o=hB(i,s.ssrKey,By,UT()),a=o!==By;a&&(r.value=o);let l=!a;const c=Ji(!1),u=Ji(),h=pE(),d=Qv();let f=Pn;function m(){let E=Gn(t);const C=new Promise((w,T)=>{if(n(s.reset),!E)return n=Pn,w(null);c.value=l,l=!0,E.converter||(E=E.withConverter(s.converter)),n=(kf(E)?gB:mB)(r,E,yB,w,T,s)}).catch(w=>(h.value===C&&(u.value=w),Promise.reject(w))).finally(()=>{h.value===C&&(c.value=!1)});h.value=C}let g=Pn;Nt(t)&&(g=po(t,m)),m(),i&&(f=fB(h.value,i,s.ssrKey)),vf()&&ME(()=>h.value),d&&TN(y);function y(E=s.reset){g(),f(),n(E)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>y}})}const yB={set:(t,e,n)=>r1(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function vB(t,e){return ib(t,{target:Ji([]),...e})}function EB(t,e){return ib(t,e)}const TB=wT({apiKey:"AIzaSyBpcciTXyAJMjikhFjBpeve9PmhpkWU4CM",authDomain:"fruuters.firebaseapp.com",projectId:"fruuters",storageBucket:"fruuters.appspot.com",messagingSenderId:"451851486618",appId:"1:451851486618:web:45292e6b65e699a536e623",measurementId:"G-649Y2M0QB5"}),Qp=O4(TB);jI(Qp,"todos");const wB={components:{ListItem:uT,Hero:aa},data(){return{products:vB(jI(Qp,"products"))}},computed:{discountedProducts(){return this.products.filter(t=>t.discount!==0)}}},AB={class:"container mt-5"},IB=H("h1",{class:"display-5 pt-5 m-5 fw-bold fst-italic"},"Today's pick",-1),bB={class:"w-100 text-center"},CB={class:"btn-more rounded-pill text-white"};function SB(t,e,n,s,i,r){const o=xt("Hero"),a=xt("ListItem"),l=xt("RouterLink");return $e(),ut("div",null,[_e(o,{text1:"get your own",text2:"fruits more easier!",img_url:"https://th.bing.com/th/id/OIP.c6Tbz7IbCn9bVXzXQSOqhgHaFN?rs=1&pid=ImgDetMain"}),H("main",AB,[($e(!0),ut(Yt,null,G_(r.discountedProducts,(c,u)=>($e(),_i(a,{key:c.id,product_id:c.id,title:c.title,img_url:c.img_url,index:u,price:c.price,description:c.description,limited:!0,discount:c.discount},null,8,["product_id","title","img_url","index","price","description","discount"]))),128)),IB,($e(!0),ut(Yt,null,G_(i.products,(c,u)=>($e(),_i(a,{key:c.id,product_id:c.id,title:c.title,img_url:c.img_url,index:u,price:c.price,description:c.description,discount:c.discount},null,8,["product_id","title","img_url","index","price","description","discount"]))),128)),H("div",bB,[H("button",CB,[_e(l,{to:"/",class:"text-decoration-none text-white"},{default:Dt(()=>[Qt("See More")]),_:1})])])])])}const Hy=qn(wB,[["render",SB]]),RB={components:{Hero:aa}},NB=GE('<div class="row container m-auto justify-content-center mt-5"><div class="col-md-8 order-md-1"><form class="needs-validation" novalidate=""><div class="row"><div class="col-md-6 mb-3"><label for="firstName">First name</label><input type="text" class="form-control" id="firstName" placeholder="" value="" required=""><div class="invalid-feedback">Valid first name is required.</div></div><div class="col-md-6 mb-3"><label for="lastName">Last name</label><input type="text" class="form-control" id="lastName" placeholder="" value="" required=""><div class="invalid-feedback">Valid last name is required.</div></div></div><div class="mb-3"><label for="username">Username</label><div class="input-group"><div class="input-group-prepend"><span class="input-group-text">@</span></div><input type="text" class="form-control" id="username" placeholder="Username" required=""><div class="invalid-feedback" style="width:100%;">Your username is required.</div></div></div><div class="mb-3"><label for="email">Email <span class="text-muted">(Optional)</span></label><input type="email" class="form-control" id="email" placeholder="you@example.com"><div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div></div><div class="mb-3"><label for="address">Address</label><input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""><div class="invalid-feedback">Please enter your shipping address.</div></div><div class="mb-3"><label for="address2">Address 2 <span class="text-muted">(Optional)</span></label><input type="text" class="form-control" id="address2" placeholder="Apartment or suite"></div><div class="row"><div class="col-md-5 mb-3"><label for="country">Country</label><select class="custom-select d-block w-100" id="country" required=""><option value="">Choose...</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div><div class="col-md-4 mb-3"><label for="state">State</label><select class="custom-select d-block w-100" id="state" required=""><option value="">Choose...</option><option>California</option></select><div class="invalid-feedback">Please provide a valid state.</div></div><div class="col-md-3 mb-3"><label for="zip">Zip</label><input type="text" class="form-control" id="zip" placeholder="" required=""><div class="invalid-feedback">Zip code required.</div></div></div><hr class="mb-4"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="same-address"><label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label></div><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="save-info"><label class="custom-control-label" for="save-info">Save this information for next time</label></div><hr class="mb-4"><h4 class="mb-3">Payment</h4><div class="d-block my-3"><div class="custom-control custom-radio"><input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required=""><label class="custom-control-label" for="credit">Credit card</label></div><div class="custom-control custom-radio"><input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required=""><label class="custom-control-label" for="debit">Debit card</label></div><div class="custom-control custom-radio"><input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""><label class="custom-control-label" for="paypal">Paypal</label></div></div><div class="row"><div class="col-md-6 mb-3"><label for="cc-name">Name on card</label><input type="text" class="form-control" id="cc-name" placeholder="" required=""><small class="text-muted">Full name as displayed on card</small><div class="invalid-feedback">Name on card is required</div></div><div class="col-md-6 mb-3"><label for="cc-number">Credit card number</label><input type="text" class="form-control" id="cc-number" placeholder="" required=""><div class="invalid-feedback">Credit card number is required</div></div></div><div class="row"><div class="col-md-3 mb-3"><label for="cc-expiration">Expiration</label><input type="text" class="form-control" id="cc-expiration" placeholder="" required=""><div class="invalid-feedback">Expiration date required</div></div><div class="col-md-3 mb-3"><label for="cc-expiration">CVV</label><input type="text" class="form-control" id="cc-cvv" placeholder="" required=""><div class="invalid-feedback">Security code required</div></div></div><hr class="mb-4"><button type="button" class="btn btn-primary rounded-pill rounded-5 px-3 border-0"> Save </button></form></div></div>',1);function PB(t,e,n,s,i,r){const o=xt("Hero");return $e(),ut("div",null,[_e(o,{text1:"Account"}),NB])}const OB=qn(RB,[["render",PB]]),kB={components:{ListItem:uT,Hero:aa},setup(){const e=Gk().params.productId;return{product:EB(N4(Qp,"products",e)).data}},methods:{getText1(t){return t.split("(")[0].trim()},getText2(t){const e=t.split("(")[1];return e?e.slice(0,-1).trim():""}}},DB={class:"container mt-5"},xB={class:"w-25 text-center"},LB={class:"btn-more rounded-pill text-white"};function MB(t,e,n,s,i,r){const o=xt("Hero"),a=xt("ListItem"),l=xt("RouterLink");return $e(),ut("div",null,[_e(o,{text1:r.getText1(s.product.title),text2:r.getText2(s.product.title),price:s.product.price,img_url:s.product.img_url},null,8,["text1","text2","price","img_url"]),H("main",DB,[($e(),_i(a,{key:s.product.id,product_id:s.product.id,title:s.product.title,img_url:s.product.img_url,index:0,price:s.product.price,description:s.product.description,discount:s.product.discount,buy_now:"true"},null,8,["product_id","title","img_url","price","description","discount"])),H("div",xB,[H("button",LB,[_e(l,{to:"/",class:"text-decoration-none text-white"},{default:Dt(()=>[Qt("See More")]),_:1})])])])])}const VB=qn(kB,[["render",MB]]),FB={components:{Hero:aa}},$B=H("div",{class:"container mt-5"},[H("div",{class:"row"},[H("div",{class:"col-md-5 mr-auto"},[H("p",{class:"mb-5"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem corrupti asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor labore expedita illum iusto, aut repellat fuga! "),H("ul",{class:"list-unstyled pl-md-5 mb-5"},[H("li",{class:"d-flex text-black mb-2"},[H("span",{class:"mr-3"},[H("span",{class:"icon-map"})]),Qt(" Jl. Lorem Ipsum No. 99, Banyuwangi,"),H("br"),Qt(" Indonesia ")]),H("li",{class:"d-flex text-black mb-2"},[H("span",{class:"mr-3"},[H("span",{class:"icon-phone"})]),Qt(" +62 8123 4567 890 ")]),H("li",{class:"d-flex text-black"},[H("span",{class:"mr-3"},[H("span",{class:"icon-envelope-o"})]),H("a",{href:"/cdn-cgi/l/email-protection",class:"__cf_email__","data-cfemail":"422b2c242d022f3b352720312b36276c212d2f"},"fruuters@gmail.com")])])]),H("div",{class:"col-md-6"},[H("form",{class:"mb-5",method:"post",id:"contactForm",name:"contactForm"},[H("div",{class:"row"},[H("div",{class:"col-md-12 form-group"},[H("label",{for:"name",class:"col-form-label"},"Name"),H("input",{type:"text",class:"form-control",name:"name",id:"name"})])]),H("div",{class:"row"},[H("div",{class:"col-md-12 form-group"},[H("label",{for:"email",class:"col-form-label"},"Email"),H("input",{type:"text",class:"form-control",name:"email",id:"email"})])]),H("div",{class:"row"},[H("div",{class:"col-md-12 form-group"},[H("label",{for:"message",class:"col-form-label"},"Message"),H("textarea",{class:"form-control",name:"message",id:"message",cols:"30",rows:"7"})])]),H("div",{class:"row"},[H("div",{class:"col-md-12"},[H("button",{type:"button",class:"btn btn-primary rounded-pill rounded-5 px-3 border-0"}," Send Message "),H("span",{class:"submitting"})])])]),H("div",{id:"form-message-warning mt-4"})])])],-1);function UB(t,e,n,s,i,r){const o=xt("Hero");return $e(),ut("div",null,[_e(o,{text1:"Contact Us!"}),$B])}const BB=qn(FB,[["render",UB]]),HB={props:{img_url:String,title:String,text:String,route:String}},jB={class:"col-md-4"},WB={class:"card rounded-5"},qB=["src"],KB={class:"card-body"},zB={class:"card-title"},GB={class:"card-text"};function YB(t,e,n,s,i,r){const o=xt("RouterLink");return $e(),ut("div",jB,[H("div",WB,[H("img",{src:n.img_url,class:"rounded-top-5"},null,8,qB),H("div",KB,[H("h5",zB,Ts(n.title),1),H("p",GB,Ts(n.text),1),_e(o,{to:n.route,class:"text-white text-decoration-none"},{default:Dt(()=>[Qt("See more")]),_:1},8,["to"])])])])}const QB=qn(HB,[["render",YB]]),XB={components:{Hero:aa,Card:QB}},JB={class:"container mt-5"},ZB={class:"row"};function e9(t,e,n,s,i,r){const o=xt("Hero"),a=xt("Card");return $e(),ut("div",null,[_e(o,{text1:"Categories"}),H("div",JB,[H("div",ZB,[_e(a,{title:"Mangos",text:"Mangos are lorem ipsum dolor",img_url:"https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg",route:"/"}),_e(a,{title:"Mangos",text:"Mangos are lorem ipsum dolor",img_url:"https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg",route:"/"}),_e(a,{title:"Mangos",text:"Mangos are lorem ipsum dolor",img_url:"https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg",route:"/"})])])])}const t9=qn(XB,[["render",e9]]),n9=Kk({history:ck("/fruuters/"),routes:[{path:"/",name:"home",component:Hy},{path:"/offers",name:"offers",component:Hy},{path:"/account",name:"account",component:OB},{path:"/product/:productId",name:"product",component:VB},{path:"/contact",name:"contact",component:BB},{path:"/categories",name:"categories",component:t9}],scrollBehavior(t,e,n){return{top:0}}}),rb=AO(qO);rb.use(n9);rb.mount("#app");
