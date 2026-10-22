(()=>{var zf=Object.defineProperty,ka=(i,t)=>{let e={};for(var n in i)zf(e,n,{get:i[n],enumerable:!0});return t||zf(e,Symbol.toStringTag,{value:"Module"}),e};function Ra(i){return Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ra(i)}function Yy(i){var t=(function(e,n){if(Ra(e)!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var r=s.call(e,n||"default");if(Ra(r)!="object")return r;throw TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)})(i,"string");return Ra(t)=="symbol"?t:t+""}function N(i,t,e){return(t=Yy(t))in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var Wf=class{constructor(){N(this,"browserShadowBlurConstant",1),N(this,"DPI",96),N(this,"devicePixelRatio",typeof window<"u"?window.devicePixelRatio:1),N(this,"perfLimitSizeTotal",2097152),N(this,"maxCacheSideLimit",4096),N(this,"minCacheSideLimit",256),N(this,"disableStyleCopyPaste",!1),N(this,"enableGLFiltering",!0),N(this,"textureSize",4096),N(this,"forceGLPutImageData",!1),N(this,"cachesBoundsOfCurve",!1),N(this,"fontPaths",{}),N(this,"NUM_FRACTION_DIGITS",4)}},de=new class extends Wf{constructor(i){super(),this.configure(i)}configure(i={}){Object.assign(this,i)}addFonts(i={}){this.fontPaths={...this.fontPaths,...i}}removeFonts(i=[]){i.forEach(t=>{delete this.fontPaths[t]})}clearFonts(){this.fontPaths={}}restoreDefaults(i){let t=new Wf,e=i?.reduce((n,s)=>(n[s]=t[s],n),{})||t;this.configure(e)}},zn=(i,...t)=>console[i]("fabric",...t),on=class extends Error{constructor(i,t){super(`fabric: ${i}`,t)}},Qy=class extends on{constructor(i){super(`${i} 'options.signal' is in 'aborted' state`)}},Xy=class{},jy=class extends Xy{testPrecision(i,t){let e=`precision ${t} float;
void main(){}`,n=i.createShader(i.FRAGMENT_SHADER);return!!n&&(i.shaderSource(n,e),i.compileShader(n),!!i.getShaderParameter(n,i.COMPILE_STATUS))}queryWebGL(i){let t=i.getContext("webgl");t&&(this.maxTextureSize=t.getParameter(t.MAX_TEXTURE_SIZE),this.GLPrecision=["highp","mediump","lowp"].find(e=>this.testPrecision(t,e)),t.getExtension("WEBGL_lose_context").loseContext(),zn("log",`WebGL: max texture size ${this.maxTextureSize}`))}isSupported(i){return!!this.maxTextureSize&&this.maxTextureSize>=i}},zy={},Zf;var cn=()=>Zf||(Zf={document,window,isTouchSupported:"ontouchstart"in window||"ontouchstart"in document||window&&window.navigator&&window.navigator.maxTouchPoints>0,WebGLProbe:new jy,dispose(){},copyPasteData:zy}),ur=()=>cn().document,ar=()=>cn().window,Mp=()=>{var i;return Math.max((i=de.devicePixelRatio)==null?ar().devicePixelRatio:i,1)},Aa=new class{constructor(){N(this,"boundsOfCurveCache",{}),this.charWidthsCache=new Map}getFontCache({fontFamily:i,fontStyle:t,fontWeight:e}){i=i.toLowerCase();let n=this.charWidthsCache;n.has(i)||n.set(i,new Map);let s=n.get(i),r=`${t.toLowerCase()}_${(e+"").toLowerCase()}`;return s.has(r)||s.set(r,new Map),s.get(r)}clearFontCache(i){i?this.charWidthsCache.delete((i||"").toLowerCase()):this.charWidthsCache=new Map}limitDimsByArea(i){let{perfLimitSizeTotal:t}=de,e=Math.sqrt(t*i);return[Math.floor(e),Math.floor(t/e)]}},rd="7.4.0";function cl(){}var Zn=Math.PI/2,Wy=Math.PI/4,Vi=2*Math.PI,Id=Math.PI/180,ii=Object.freeze([1,0,0,1,0,0]),ye="center",Oe="left",Lp="bottom",Ui="right",Tl="none",Bd=/\r?\n/,wp="moving",El="scaling",Dp="rotating",Rp="rotate",Ap="skewing",Na="resizing",Ip="modifyPoly",ml="changed",Bp="scale",Kn="scaleX",ts="scaleY",fr="skewX",pr="skewY",oi="fill",Tn="stroke",Fp="modified",Kf="normal",Ws="json",Dt=new class{constructor(){this[Ws]=new Map,this.svg=new Map}has(i){return this[Ws].has(i)}getClass(i){let t=this[Ws].get(i);if(!t)throw new on(`No class registered for ${i}`);return t}setClass(i,t){t?this[Ws].set(t,i):(this[Ws].set(i.type,i),this[Ws].set(i.type.toLowerCase(),i))}getSVGClass(i){return this.svg.get(i)}setSVGClass(i,t){this.svg.set(t??i.type.toLowerCase(),i)}},gl=new class extends Array{remove(i){let t=this.indexOf(i);t>-1&&this.splice(t,1)}cancelAll(){let i=this.splice(0);return i.forEach(t=>t.abort()),i}cancelByCanvas(i){if(!i)return[];let t=this.filter(e=>{var n;return e.target===i||typeof e.target=="object"&&((n=e.target)==null?void 0:n.canvas)===i});return t.forEach(e=>e.abort()),t}cancelByTarget(i){if(!i)return[];let t=this.filter(e=>e.target===i);return t.forEach(e=>e.abort()),t}},Zy=class{constructor(){N(this,"__eventListeners",{})}on(i,t){if(this.__eventListeners||(this.__eventListeners={}),typeof i=="object")return Object.entries(i).forEach(([e,n])=>{this.on(e,n)}),()=>this.off(i);if(t){let e=i;return this.__eventListeners[e]||(this.__eventListeners[e]=[]),this.__eventListeners[e].push(t),()=>this.off(e,t)}return()=>!1}once(i,t){if(typeof i=="object"){let e=[];return Object.entries(i).forEach(([n,s])=>{e.push(this.once(n,s))}),()=>e.forEach(n=>n())}if(t){let e=this.on(i,function(...n){t.call(this,...n),e()});return e}return()=>!1}_removeEventListener(i,t){if(this.__eventListeners[i])if(t){let e=this.__eventListeners[i],n=e.indexOf(t);n>-1&&e.splice(n,1)}else this.__eventListeners[i]=[]}off(i,t){if(this.__eventListeners)if(i===void 0)for(let e in this.__eventListeners)this._removeEventListener(e);else typeof i=="object"?Object.entries(i).forEach(([e,n])=>{this._removeEventListener(e,n)}):this._removeEventListener(i,t)}fire(i,t){var e;if(!this.__eventListeners)return;let n=(e=this.__eventListeners[i])==null?void 0:e.concat();if(n)for(let s=0;s<n.length;s++)n[s].call(this,t||{})}},Ss=(i,t)=>{let e=i.indexOf(t);return e!==-1&&i.splice(e,1),i},Gi=i=>{if(i===0)return 1;switch(Math.abs(i)/Zn){case 1:case 3:return 0;case 2:return-1}return Math.cos(i)},Ji=i=>{if(i===0)return 0;let t=i/Zn,e=Math.sign(i);switch(t){case 1:return e;case 2:return 0;case 3:return-e}return Math.sin(i)},z=class Ke{constructor(t=0,e=0){typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)}add(t){return new Ke(this.x+t.x,this.y+t.y)}addEquals(t){return this.x+=t.x,this.y+=t.y,this}scalarAdd(t){return new Ke(this.x+t,this.y+t)}scalarAddEquals(t){return this.x+=t,this.y+=t,this}subtract(t){return new Ke(this.x-t.x,this.y-t.y)}subtractEquals(t){return this.x-=t.x,this.y-=t.y,this}scalarSubtract(t){return new Ke(this.x-t,this.y-t)}scalarSubtractEquals(t){return this.x-=t,this.y-=t,this}multiply(t){return new Ke(this.x*t.x,this.y*t.y)}scalarMultiply(t){return new Ke(this.x*t,this.y*t)}scalarMultiplyEquals(t){return this.x*=t,this.y*=t,this}divide(t){return new Ke(this.x/t.x,this.y/t.y)}scalarDivide(t){return new Ke(this.x/t,this.y/t)}scalarDivideEquals(t){return this.x/=t,this.y/=t,this}eq(t){return this.x===t.x&&this.y===t.y}lt(t){return this.x<t.x&&this.y<t.y}lte(t){return this.x<=t.x&&this.y<=t.y}gt(t){return this.x>t.x&&this.y>t.y}gte(t){return this.x>=t.x&&this.y>=t.y}lerp(t,e=.5){return e=Math.max(Math.min(1,e),0),new Ke(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)}distanceFrom(t){let e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)}midPointFrom(t){return this.lerp(t)}min(t){return new Ke(Math.min(this.x,t.x),Math.min(this.y,t.y))}max(t){return new Ke(Math.max(this.x,t.x),Math.max(this.y,t.y))}toString(){return`${this.x},${this.y}`}setXY(t,e){return this.x=t,this.y=e,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setFromPoint(t){return this.x=t.x,this.y=t.y,this}swap(t){let e=this.x,n=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=n}clone(){return new Ke(this.x,this.y)}rotate(t,e=Fd){let n=Ji(t),s=Gi(t),r=this.subtract(e);return new Ke(r.x*s-r.y*n,r.x*n+r.y*s).add(e)}transform(t,e=!1){return new Ke(t[0]*this.x+t[2]*this.y+(e?0:t[4]),t[1]*this.x+t[3]*this.y+(e?0:t[5]))}},Fd=new z(0,0),hl=i=>!!i&&Array.isArray(i._objects);function Cp(i){class t extends i{constructor(...n){super(...n),N(this,"_objects",[])}_onObjectAdded(n){}_onObjectRemoved(n){}_onStackOrderChanged(n){}add(...n){let s=this._objects.push(...n);return n.forEach(r=>this._onObjectAdded(r)),s}insertAt(n,...s){return this._objects.splice(n,0,...s),s.forEach(r=>this._onObjectAdded(r)),this._objects.length}remove(...n){let s=this._objects,r=[];return n.forEach(a=>{let o=s.indexOf(a);o!==-1&&(s.splice(o,1),r.push(a),this._onObjectRemoved(a))}),r}forEachObject(n){this.getObjects().forEach((s,r,a)=>n(s,r,a))}getObjects(...n){return n.length===0?[...this._objects]:this._objects.filter(s=>s.isType(...n))}item(n){return this._objects[n]}isEmpty(){return this._objects.length===0}size(){return this._objects.length}contains(n,s){return!!this._objects.includes(n)||!!s&&this._objects.some(r=>r instanceof t&&r.contains(n,!0))}complexity(){return this._objects.reduce((n,s)=>n+=s.complexity?s.complexity():0,0)}sendObjectToBack(n){return!(!n||n===this._objects[0])&&(Ss(this._objects,n),this._objects.unshift(n),this._onStackOrderChanged(n),!0)}bringObjectToFront(n){return!(!n||n===this._objects[this._objects.length-1])&&(Ss(this._objects,n),this._objects.push(n),this._onStackOrderChanged(n),!0)}sendObjectBackwards(n,s){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==0){let a=this.findNewLowerIndex(n,r,s);return Ss(this._objects,n),this._objects.splice(a,0,n),this._onStackOrderChanged(n),!0}return!1}bringObjectForward(n,s){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==this._objects.length-1){let a=this.findNewUpperIndex(n,r,s);return Ss(this._objects,n),this._objects.splice(a,0,n),this._onStackOrderChanged(n),!0}return!1}moveObjectTo(n,s){return n!==this._objects[s]&&(Ss(this._objects,n),this._objects.splice(s,0,n),this._onStackOrderChanged(n),!0)}findNewLowerIndex(n,s,r){let a;if(r){a=s;for(let o=s-1;o>=0;--o)if(n.isOverlapping(this._objects[o])){a=o;break}}else a=s-1;return a}findNewUpperIndex(n,s,r){let a;if(r){a=s;for(let o=s+1;o<this._objects.length;++o)if(n.isOverlapping(this._objects[o])){a=o;break}}else a=s+1;return a}collectObjects({left:n,top:s,width:r,height:a},{includeIntersecting:o=!0}={}){let l=[],c=new z(n,s),h=c.add(new z(r,a));for(let d=this._objects.length-1;d>=0;d--){let u=this._objects[d];u.selectable&&u.visible&&(o&&u.intersectsWithRect(c,h)||u.isContainedWithinRect(c,h)||o&&u.containsPoint(c)||o&&u.containsPoint(h))&&l.push(u)}return l}}return t}var Np=class extends Zy{_setOptions(i={}){for(let t in i)this.set(t,i[t])}_setObject(i){for(let t in i)this._set(t,i[t])}set(i,t){return typeof i=="object"?this._setObject(i):this._set(i,t),this}_set(i,t){this[i]=t}toggle(i){let t=this.get(i);return typeof t=="boolean"&&this.set(i,!t),this}get(i){return this[i]}};function Ia(i){return ar().requestAnimationFrame(i)}function Op(i){return ar().cancelAnimationFrame(i)}var Ky=0,Wn=()=>Ky++,hn=()=>{let i=ur().createElement("canvas");if(!i||i.getContext===void 0)throw new on("Failed to create `canvas` element");return i},Pp=()=>ur().createElement("img"),t_=i=>{var t;let e=vi(i);return(t=e.getContext("2d"))==null||t.drawImage(i,0,0),e},vi=i=>{let t=hn();return t.width=i.width,t.height=i.height,t},Cd=(i,t,e)=>i.toDataURL(`image/${t}`,e),Nd=(i,t,e)=>new Promise((n,s)=>{i.toBlob(n,`image/${t}`,e)}),Ee=i=>i*Id,En=i=>i/Id,qp=i=>i.every((t,e)=>t===ii[e]),Qe=(i,t,e)=>new z(i).transform(t,e),xi=i=>{let t=1/(i[0]*i[3]-i[1]*i[2]),e=[t*i[3],-t*i[1],-t*i[2],t*i[0],0,0],{x:n,y:s}=new z(i[4],i[5]).transform(e,!0);return e[4]=-n,e[5]=-s,e},Le=(i,t,e)=>[i[0]*t[0]+i[2]*t[1],i[1]*t[0]+i[3]*t[1],i[0]*t[2]+i[2]*t[3],i[1]*t[2]+i[3]*t[3],e?0:i[0]*t[4]+i[2]*t[5]+i[4],e?0:i[1]*t[4]+i[3]*t[5]+i[5]],Ml=(i,t)=>i.reduceRight((e,n)=>n&&e?Le(n,e,t):n||e,void 0)||ii.concat(),Od=([i,t])=>Math.atan2(t,i),Pd=([i,t])=>Math.sqrt(i*i+t*t),kp=([,,i,t])=>Math.sqrt(i*i+t*t),or=i=>{let t=Od(i),e=i[0]**2+i[1]**2,n=Math.sqrt(e),s=(i[0]*i[3]-i[2]*i[1])/n,r=Math.atan2(i[0]*i[2]+i[1]*i[3],e);return{angle:En(t),scaleX:n,scaleY:s,skewX:En(r),skewY:0,translateX:i[4]||0,translateY:i[5]||0}},mr=(i,t=0)=>[1,0,0,1,i,t];function As({angle:i=0}={},{x:t=0,y:e=0}={}){let n=Ee(i),s=Gi(n),r=Ji(n);return[s,r,-r,s,t?t-(s*t-r*e):0,e?e-(r*t+s*e):0]}var Ll=(i,t=i)=>[i,0,0,t,0,0],Hp=i=>Math.tan(Ee(i)),qd=i=>[1,0,Hp(i),1,0,0],kd=i=>[1,Hp(i),0,1,0,0],Ha=({scaleX:i=1,scaleY:t=1,flipX:e=!1,flipY:n=!1,skewX:s=0,skewY:r=0})=>{let a=Ll(e?-i:i,n?-t:t);return s&&(a=Le(a,qd(s),!0)),r&&(a=Le(a,kd(r),!0)),a},Up=i=>{let{translateX:t=0,translateY:e=0,angle:n=0}=i,s=mr(t,e);n&&(s=Le(s,As({angle:n})));let r=Ha(i);return qp(r)||(s=Le(s,r)),s},Ba=(i,{signal:t,crossOrigin:e=null}={})=>new Promise(function(n,s){if(t&&t.aborted)return s(new Qy("loadImage"));let r=Pp(),a;t&&(a=function(l){r.src="",s(l)},t.addEventListener("abort",a,{once:!0}));let o=function(){r.onload=r.onerror=null,a&&t?.removeEventListener("abort",a),n(r)};i?(r.onload=o,r.onerror=function(){a&&t?.removeEventListener("abort",a),s(new on(`Error loading ${r.src}`))},e&&(r.crossOrigin=e),r.src=i):o()}),lr=(i,{signal:t,reviver:e=cl}={})=>new Promise((n,s)=>{let r=[];t&&t.addEventListener("abort",s,{once:!0}),Promise.allSettled(i.map(a=>Dt.getClass(a.type).fromObject(a,{signal:t}))).then(async a=>{for(let[o,l]of a.entries())if(l.status==="fulfilled"&&(await e(i[o],l.value),r.push(l.value)),l.status==="rejected"){let c=await e(i[o],void 0,l.reason);c&&r.push(c)}n(r)}).catch(a=>{r.forEach(o=>{o.dispose&&o.dispose()}),s(a)}).finally(()=>{t&&t.removeEventListener("abort",s)})}),Ua=(i,{signal:t}={})=>new Promise((e,n)=>{let s=[];t&&t.addEventListener("abort",n,{once:!0});let r=Object.values(i).map(o=>o&&o.type&&Dt.has(o.type)?lr([o],{signal:t}).then(([l])=>(s.push(l),l)):o),a=Object.keys(i);Promise.all(r).then(o=>o.reduce((l,c,h)=>(l[a[h]]=c,l),{})).then(e).catch(o=>{s.forEach(l=>{l.dispose&&l.dispose()}),n(o)}).finally(()=>{t&&t.removeEventListener("abort",n)})}),Is=(i,t=[])=>t.reduce((e,n)=>(n in i&&(e[n]=i[n]),e),{}),Hd=(i,t)=>Object.keys(i).reduce((e,n)=>(t(i[n],n,i)&&(e[n]=i[n]),e),{}),ge=(i,t)=>parseFloat(Number(i).toFixed(t)),cr=i=>"matrix("+i.map(t=>ge(t,de.NUM_FRACTION_DIGITS)).join(" ")+")",Bi=i=>!!i&&i.toLive!==void 0,tp=i=>!!i&&typeof i.toObject=="function",ep=i=>!!i&&i.offsetX!==void 0&&"source"in i,Ts=i=>!!i&&"multiSelectionStacking"in i;function $p(i){let t=i&&ki(i),e=0,n=0;if(!i||!t)return{left:e,top:n};let s=i,r=t.documentElement,a=t.body||{scrollLeft:0,scrollTop:0};for(;s&&(s.parentNode||s.host)&&(s=s.parentNode||s.host,s===t?(e=a.scrollLeft||r.scrollLeft||0,n=a.scrollTop||r.scrollTop||0):(e+=s.scrollLeft||0,n+=s.scrollTop||0),s.nodeType!==1||s.style.position!=="fixed"););return{left:e,top:n}}var ki=i=>i.ownerDocument||null,Vp=i=>{var t;return((t=i.ownerDocument)==null?void 0:t.defaultView)||null},Gp=(i,t,{width:e,height:n},s=1)=>{i.width=e,i.height=n,s>1&&(i.setAttribute("width",(e*s).toString()),i.setAttribute("height",(n*s).toString()),t.scale(s,s))},ad=(i,{width:t,height:e})=>{t&&(i.style.width=typeof t=="number"?`${t}px`:t),e&&(i.style.height=typeof e=="number"?`${e}px`:e)};function ip(i){return i.onselectstart!==void 0&&(i.onselectstart=()=>!1),i.style.userSelect=Tl,i}var Jp=class{constructor(i){N(this,"_originalCanvasStyle",void 0),N(this,"lower",void 0);let t=this.createLowerCanvas(i);this.lower={el:t,ctx:t.getContext("2d")}}createLowerCanvas(i){let t=(e=i)&&e.getContext!==void 0?i:i&&ur().getElementById(i)||hn();var e;if(t.hasAttribute("data-fabric"))throw new on("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");return this._originalCanvasStyle=t.style.cssText,t.setAttribute("data-fabric","main"),t.classList.add("lower-canvas"),t}cleanupDOM({width:i,height:t}){let{el:e}=this.lower;e.classList.remove("lower-canvas"),e.removeAttribute("data-fabric"),e.setAttribute("width",`${i}`),e.setAttribute("height",`${t}`),e.style.cssText=this._originalCanvasStyle||"",this._originalCanvasStyle=void 0}setDimensions(i,t){let{el:e,ctx:n}=this.lower;Gp(e,n,i,t)}setCSSDimensions(i){ad(this.lower.el,i)}calcOffset(){return(function(i){var t;let e=i&&ki(i),n={left:0,top:0};if(!e)return n;let s=((t=Vp(i))==null?void 0:t.getComputedStyle(i,null))||{};n.left+=parseInt(s.borderLeftWidth,10)||0,n.top+=parseInt(s.borderTopWidth,10)||0,n.left+=parseInt(s.paddingLeft,10)||0,n.top+=parseInt(s.paddingTop,10)||0;let r={left:0,top:0},a=e.documentElement;i.getBoundingClientRect!==void 0&&(r=i.getBoundingClientRect());let o=$p(i);return{left:r.left+o.left-(a.clientLeft||0)+n.left,top:r.top+o.top-(a.clientTop||0)+n.top}})(this.lower.el)}dispose(){cn().dispose(this.lower.el),delete this.lower}},e_={backgroundVpt:!0,backgroundColor:"",overlayVpt:!0,overlayColor:"",includeDefaultValues:!0,svgViewportTransformation:!0,renderOnAddRemove:!0,skipOffscreen:!0,enableRetinaScaling:!0,imageSmoothingEnabled:!0,controlsAboveOverlay:!1,allowTouchScrolling:!1,viewportTransform:[...ii],patternQuality:"best"},i_=ka({capitalize:()=>n_,escapeXml:()=>te,graphemeSplit:()=>wl}),n_=(i,t=!1)=>`${i.charAt(0).toUpperCase()}${t?i.slice(1):i.slice(1).toLowerCase()}`,te=i=>i.toString().replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),la,wl=i=>{if(la||la||(la="Intl"in ar()&&"Segmenter"in Intl&&new Intl.Segmenter(void 0,{granularity:"grapheme"})),la){let t=la.segment(i);return Array.from(t).map(({segment:e})=>e)}return s_(i)},s_=i=>{let t=[];for(let e,n=0;n<i.length;n++)(e=r_(i,n))!==!1&&t.push(e);return t},r_=(i,t)=>{let e=i.charCodeAt(t);if(isNaN(e))return"";if(e<55296||e>57343)return i.charAt(t);if(55296<=e&&e<=56319){if(i.length<=t+1)throw"High surrogate without following low surrogate";let s=i.charCodeAt(t+1);if(56320>s||s>57343)throw"High surrogate without following low surrogate";return i.charAt(t)+i.charAt(t+1)}if(t===0)throw"Low surrogate without preceding high surrogate";let n=i.charCodeAt(t-1);if(55296>n||n>56319)throw"Low surrogate without preceding high surrogate";return!1},Ud=class Yp extends Cp(Np){get lowerCanvasEl(){var t;return(t=this.elements.lower)==null?void 0:t.el}get contextContainer(){var t;return(t=this.elements.lower)==null?void 0:t.ctx}static getDefaults(){return Yp.ownDefaults}constructor(t,e={}){super(),Object.assign(this,this.constructor.getDefaults()),this.set(e),this.initElements(t),this._setDimensionsImpl({width:this.width||this.elements.lower.el.width||0,height:this.height||this.elements.lower.el.height||0}),this.skipControlsDrawing=!1,this.viewportTransform=[...this.viewportTransform],this.calcViewportBoundaries()}initElements(t){this.elements=new Jp(t)}add(...t){let e=super.add(...t);return t.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),e}insertAt(t,...e){let n=super.insertAt(t,...e);return e.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),n}remove(...t){let e=super.remove(...t);return e.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),e}_onObjectAdded(t){t.canvas&&t.canvas!==this&&(zn("warn",`Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`),t.canvas.remove(t)),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t){t._set("canvas",void 0),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onStackOrderChanged(){this.renderOnAddRemove&&this.requestRenderAll()}getRetinaScaling(){return this.enableRetinaScaling?Mp():1}calcOffset(){return this._offset=this.elements.calcOffset()}getWidth(){return this.width}getHeight(){return this.height}_setDimensionsImpl(t,{cssOnly:e=!1,backstoreOnly:n=!1}={}){if(!e){let s={width:this.width,height:this.height,...t};this.elements.setDimensions(s,this.getRetinaScaling()),this.hasLostContext=!0,this.width=s.width,this.height=s.height}n||this.elements.setCSSDimensions(t),this.calcOffset()}setDimensions(t,e){this._setDimensionsImpl(t,e),e&&e.cssOnly||this.requestRenderAll()}getZoom(){return Pd(this.viewportTransform)}setViewportTransform(t){this.viewportTransform=t,this.calcViewportBoundaries(),this.renderOnAddRemove&&this.requestRenderAll()}zoomToPoint(t,e){let n=t,s=[...this.viewportTransform],r=Qe(t,xi(s));s[0]=e,s[3]=e;let a=Qe(r,s);s[4]+=n.x-a.x,s[5]+=n.y-a.y,this.setViewportTransform(s)}setZoom(t){this.zoomToPoint(new z(0,0),t)}absolutePan(t){let e=[...this.viewportTransform];return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)}relativePan(t){return this.absolutePan(new z(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))}getElement(){return this.elements.lower.el}clearContext(t){t.clearRect(0,0,this.width,this.height)}getContext(){return this.elements.lower.ctx}clear(){this.remove(...this.getObjects()),this.backgroundImage=void 0,this.overlayImage=void 0,this.backgroundColor="",this.overlayColor="",this.clearContext(this.getContext()),this.fire("canvas:cleared"),this.renderOnAddRemove&&this.requestRenderAll()}renderAll(){this.cancelRequestedRender(),this.destroyed||this.renderCanvas(this.getContext(),this._objects)}renderAndReset(){this.nextRenderHandle=0,this.renderAll()}requestRenderAll(){this.nextRenderHandle||this.disposed||this.destroyed||(this.nextRenderHandle=Ia(()=>this.renderAndReset()))}calcViewportBoundaries(){let t=this.width,e=this.height,n=xi(this.viewportTransform),s=Qe({x:0,y:0},n),r=Qe({x:t,y:e},n),a=s.min(r),o=s.max(r);return this.vptCoords={tl:a,tr:new z(o.x,a.y),bl:new z(a.x,o.y),br:o}}cancelRequestedRender(){this.nextRenderHandle&&(Op(this.nextRenderHandle),this.nextRenderHandle=0)}drawControls(t){}renderCanvas(t,e){if(this.destroyed)return;let n=this.viewportTransform,s=this.clipPath;this.calcViewportBoundaries(),this.clearContext(t),t.imageSmoothingEnabled=this.imageSmoothingEnabled,t.patternQuality=this.patternQuality,this.fire("before:render",{ctx:t}),this._renderBackground(t),t.save(),t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this._renderObjects(t,e),t.restore(),this.controlsAboveOverlay||this.skipControlsDrawing||this.drawControls(t),s&&(s._set("canvas",this),s.shouldCache(),s._transformDone=!0,s.renderCache({forClipping:!0}),this.drawClipPathOnCanvas(t,s)),this._renderOverlay(t),this.controlsAboveOverlay&&!this.skipControlsDrawing&&this.drawControls(t),this.fire("after:render",{ctx:t}),this.__cleanupTask&&(this.__cleanupTask(),this.__cleanupTask=void 0)}drawClipPathOnCanvas(t,e){let n=this.viewportTransform;t.save(),t.transform(...n),t.globalCompositeOperation="destination-in",e.transform(t),t.scale(1/e.zoomX,1/e.zoomY),t.drawImage(e._cacheCanvas,-e.cacheTranslationX,-e.cacheTranslationY),t.restore()}_renderObjects(t,e){for(let n=0,s=e.length;n<s;++n)e[n]&&e[n].render(t)}_renderBackgroundOrOverlay(t,e){let n=this[`${e}Color`],s=this[`${e}Image`],r=this.viewportTransform,a=this[`${e}Vpt`];if(!n&&!s)return;let o=Bi(n);if(n){if(t.save(),t.beginPath(),t.moveTo(0,0),t.lineTo(this.width,0),t.lineTo(this.width,this.height),t.lineTo(0,this.height),t.closePath(),t.fillStyle=o?n.toLive(t):n,a&&t.transform(...r),o){t.transform(1,0,0,1,n.offsetX||0,n.offsetY||0);let l=n.gradientTransform||n.patternTransform;l&&t.transform(...l)}t.fill(),t.restore()}if(s){t.save();let{skipOffscreen:l}=this;this.skipOffscreen=a,a&&t.transform(...r),s.render(t),this.skipOffscreen=l,t.restore()}}_renderBackground(t){this._renderBackgroundOrOverlay(t,"background")}_renderOverlay(t){this._renderBackgroundOrOverlay(t,"overlay")}getCenterPoint(){return new z(this.width/2,this.height/2)}centerObjectH(t){return this._centerObject(t,new z(this.getCenterPoint().x,t.getCenterPoint().y))}centerObjectV(t){return this._centerObject(t,new z(t.getCenterPoint().x,this.getCenterPoint().y))}centerObject(t){return this._centerObject(t,this.getCenterPoint())}viewportCenterObject(t){return this._centerObject(t,this.getVpCenter())}viewportCenterObjectH(t){return this._centerObject(t,new z(this.getVpCenter().x,t.getCenterPoint().y))}viewportCenterObjectV(t){return this._centerObject(t,new z(t.getCenterPoint().x,this.getVpCenter().y))}getVpCenter(){return Qe(this.getCenterPoint(),xi(this.viewportTransform))}_centerObject(t,e){t.setXY(e,ye,ye),t.setCoords(),this.renderOnAddRemove&&this.requestRenderAll()}toDatalessJSON(t){return this.toDatalessObject(t)}toObject(t){return this._toObjectMethod("toObject",t)}toJSON(){return this.toObject()}toDatalessObject(t){return this._toObjectMethod("toDatalessObject",t)}_toObjectMethod(t,e){let n=this.clipPath,s=n&&!n.excludeFromExport?this._toObject(n,t,e):null;return{version:rd,...Is(this,e),objects:this._objects.filter(r=>!r.excludeFromExport).map(r=>this._toObject(r,t,e)),...this.__serializeBgOverlay(t,e),...s?{clipPath:s}:null}}_toObject(t,e,n){let s;this.includeDefaultValues||(s=t.includeDefaultValues,t.includeDefaultValues=!1);let r=t[e](n);return this.includeDefaultValues||(t.includeDefaultValues=!!s),r}__serializeBgOverlay(t,e){let n={},s=this.backgroundImage,r=this.overlayImage,a=this.backgroundColor,o=this.overlayColor;return Bi(a)?a.excludeFromExport||(n.background=a.toObject(e)):a&&(n.background=a),Bi(o)?o.excludeFromExport||(n.overlay=o.toObject(e)):o&&(n.overlay=o),s&&!s.excludeFromExport&&(n.backgroundImage=this._toObject(s,t,e)),r&&!r.excludeFromExport&&(n.overlayImage=this._toObject(r,t,e)),n}toSVG(t={},e){t.reviver=e;let n=[];var s;return this._setSVGPreamble(n,t),this._setSVGHeader(n,t),this.clipPath&&n.push(`<g clip-path="url(#${te((s=this.clipPath.clipPathId)==null?"":s)})" >
`),this._setSVGBgOverlayColor(n,"background"),this._setSVGBgOverlayImage(n,"backgroundImage",e),this._setSVGObjects(n,e),this.clipPath&&n.push(`</g>
`),this._setSVGBgOverlayColor(n,"overlay"),this._setSVGBgOverlayImage(n,"overlayImage",e),n.push("</svg>"),n.join("")}_setSVGPreamble(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",`" standalone="no" ?>
`,'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',`"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`)}_setSVGHeader(t,e){let n=e.width||`${this.width}`,s=e.height||`${this.height}`,r=de.NUM_FRACTION_DIGITS,a=e.viewBox,o;if(a)o=`viewBox="${a.x} ${a.y} ${a.width} ${a.height}" `;else if(this.svgViewportTransformation){let l=this.viewportTransform;o=`viewBox="${ge(-l[4]/l[0],r)} ${ge(-l[5]/l[3],r)} ${ge(this.width/l[0],r)} ${ge(this.height/l[3],r)}" `}else o=`viewBox="0 0 ${this.width} ${this.height}" `;t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',n,'" ','height="',s,'" ',o,`xml:space="preserve">
`,"<desc>Created with Fabric.js ",rd,`</desc>
`,`<defs>
`,this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),this.createSVGClipPathMarkup(e),`</defs>
`)}createSVGClipPathMarkup(t){let e=this.clipPath;return e?(e.clipPathId=`CLIPPATH_${Wn()}`,`<clipPath id="${e.clipPathId}" >
${e.toClipPathSVG(t.reviver)}</clipPath>
`):""}createSVGRefElementsMarkup(){return["background","overlay"].map(t=>{let e=this[`${t}Color`];if(Bi(e)){let n=this[`${t}Vpt`],s=this.viewportTransform,r={isType:()=>!1,width:this.width/(n?s[0]:1),height:this.height/(n?s[3]:1)};return e.toSVG(r,{additionalTransform:n?cr(s):""})}}).join("")}createSVGFontFacesMarkup(){let t=[],e={},n=de.fontPaths;this._objects.forEach(function r(a){t.push(a),hl(a)&&a._objects.forEach(r)}),t.forEach(r=>{if(!(a=r)||typeof a._renderText!="function")return;var a;let{styles:o,fontFamily:l}=r;!e[l]&&n[l]&&(e[l]=!0,o&&Object.values(o).forEach(c=>{Object.values(c).forEach(({fontFamily:h=""})=>{!e[h]&&n[h]&&(e[h]=!0)})}))});let s=Object.keys(e).map(r=>`		@font-face {
			font-family: '${r}';
			src: url('${n[r]}');
		}
`).join("");return s?`	<style type="text/css"><![CDATA[
${s}]]></style>
`:""}_setSVGObjects(t,e){this.forEachObject(n=>{n.excludeFromExport||this._setSVGObject(t,n,e)})}_setSVGObject(t,e,n){t.push(e.toSVG(n))}_setSVGBgOverlayImage(t,e,n){let s=this[e];s&&!s.excludeFromExport&&s.toSVG&&t.push(s.toSVG(n))}_setSVGBgOverlayColor(t,e){let n=this[`${e}Color`];if(n)if(Bi(n)){let s=n.repeat||"",r=this.width,a=this.height,o=this[`${e}Vpt`]?cr(xi(this.viewportTransform)):"";t.push(`<rect transform="${o} translate(${r/2},${a/2})" x="${n.offsetX-r/2}" y="${n.offsetY-a/2}" width="${s!=="repeat-y"&&s!=="no-repeat"||!ep(n)?r:n.source.width}" height="${s!=="repeat-x"&&s!=="no-repeat"||!ep(n)?a:n.source.height}" fill="url(#SVGID_${n.id})"></rect>
`)}else t.push('<rect x="0" y="0" width="100%" height="100%" ','fill="',n,'"',`></rect>
`)}loadFromJSON(t,e,{signal:n}={}){if(!t)return Promise.reject(new on("`json` is undefined"));let{objects:s=[],...r}=typeof t=="string"?JSON.parse(t):t,{backgroundImage:a,background:o,overlayImage:l,overlay:c,clipPath:h}=r,d=this.renderOnAddRemove;return this.renderOnAddRemove=!1,Promise.all([lr(s,{reviver:e,signal:n}),Ua({backgroundImage:a,backgroundColor:o,overlayImage:l,overlayColor:c,clipPath:h},{signal:n})]).then(([u,f])=>(this.clear(),this.add(...u),this.set(r),this.set(f),this.renderOnAddRemove=d,this))}clone(t){let e=this.toObject(t);return this.cloneWithoutData().loadFromJSON(e)}cloneWithoutData(){let t=vi(this);return new this.constructor(t)}toDataURL(t={}){let{format:e="png",quality:n=1,multiplier:s=1,enableRetinaScaling:r=!1}=t,a=s*(r?this.getRetinaScaling():1);return Cd(this.toCanvasElement(a,t),e,n)}toBlob(t={}){let{format:e="png",quality:n=1,multiplier:s=1,enableRetinaScaling:r=!1}=t,a=s*(r?this.getRetinaScaling():1);return Nd(this.toCanvasElement(a,t),e,n)}toCanvasElement(t=1,{width:e,height:n,left:s,top:r,filter:a}={}){let o=(e||this.width)*t,l=(n||this.height)*t,c=this.getZoom(),h=this.width,d=this.height,u=this.skipControlsDrawing,f=c*t,p=this.viewportTransform,y=[f,0,0,f,(p[4]-(s||0))*t,(p[5]-(r||0))*t],m=this.enableRetinaScaling,g=vi({width:o,height:l}),b=a?this._objects.filter(E=>a(E)):this._objects;return this.enableRetinaScaling=!1,this.viewportTransform=y,this.width=o,this.height=l,this.skipControlsDrawing=!0,this.calcViewportBoundaries(),this.renderCanvas(g.getContext("2d"),b),this.viewportTransform=p,this.width=h,this.height=d,this.calcViewportBoundaries(),this.enableRetinaScaling=m,this.skipControlsDrawing=u,g}dispose(){return!this.disposed&&this.elements.cleanupDOM({width:this.width,height:this.height}),gl.cancelByCanvas(this),this.disposed=!0,new Promise((t,e)=>{let n=()=>{this.destroy(),t(!0)};n.kill=e,this.__cleanupTask&&this.__cleanupTask.kill("aborted"),this.destroyed?t(!1):this.nextRenderHandle?this.__cleanupTask=n:n()})}destroy(){this.destroyed=!0,this.cancelRequestedRender(),this.forEachObject(t=>t.dispose()),this._objects=[],this.backgroundImage&&this.backgroundImage.dispose(),this.backgroundImage=void 0,this.overlayImage&&this.overlayImage.dispose(),this.overlayImage=void 0,this.elements.dispose()}toString(){return`#<Canvas (${this.complexity()}): { objects: ${this._objects.length} }>`}};N(Ud,"ownDefaults",e_);var a_=["touchstart","touchmove","touchend"],Qp=i=>{let t=$p(i.target),e=(function(n){let s=n.changedTouches;return s&&s[0]?s[0]:n})(i);return new z(e.clientX+t.left,e.clientY+t.top)},yl=i=>a_.includes(i.type)||i.pointerType==="touch",np=i=>{i.preventDefault(),i.stopPropagation()},ln=i=>{let t=0,e=0,n=0,s=0;for(let r=0,a=i.length;r<a;r++){let{x:o,y:l}=i[r];(o>n||!r)&&(n=o),(o<t||!r)&&(t=o),(l>s||!r)&&(s=l),(l<e||!r)&&(e=l)}return{left:t,top:e,width:n-t,height:s-e}},o_=(i,t)=>{hr(i,Le(xi(t),i.calcOwnMatrix()))},Xp=(i,t)=>hr(i,Le(t,i.calcOwnMatrix())),hr=(i,t)=>{let{translateX:e,translateY:n,scaleX:s,scaleY:r,...a}=or(t),o=new z(e,n);i.flipX=!1,i.flipY=!1,Object.assign(i,a),i.set({scaleX:s,scaleY:r}),i.setPositionByOrigin(o,ye,ye)},jp=i=>{i.scaleX=1,i.scaleY=1,i.skewX=0,i.skewY=0,i.flipX=!1,i.flipY=!1,i.rotate(0)},$d=i=>({scaleX:i.scaleX,scaleY:i.scaleY,skewX:i.skewX,skewY:i.skewY,angle:i.angle,left:i.left,flipX:i.flipX,flipY:i.flipY,top:i.top}),Dl=(i,t,e)=>{let n=i/2,s=t/2,r=ln([new z(-n,-s),new z(n,-s),new z(-n,s),new z(n,s)].map(a=>a.transform(e)));return new z(r.width,r.height)},$a=(i=ii,t=ii)=>Le(xi(t),i),Mn=(i,t=ii,e=ii)=>i.transform($a(t,e)),zp=(i,t=ii,e=ii)=>i.transform($a(t,e),!0),Vd=(i,t,e)=>{let n=$a(t,e);return hr(i,Le(n,i.calcOwnMatrix())),n},l_={left:-.5,top:-.5,center:0,bottom:.5,right:.5},ti=i=>typeof i=="string"?l_[i]:i-.5,c_=new z(1,0),Wp=new z,Gd=(i,t)=>i.rotate(t),Oa=(i,t)=>new z(t).subtract(i),_l=i=>i.distanceFrom(Wp),xl=(i,t)=>Math.atan2(sr(i,t),Zp(i,t)),Jd=i=>xl(c_,i),Rl=i=>i.eq(Wp)?i:i.scalarDivide(_l(i)),Yd=(i,t=!0)=>Rl(new z(-i.y,i.x).scalarMultiply(t?1:-1)),sr=(i,t)=>i.x*t.y-i.y*t.x,Zp=(i,t)=>i.x*t.x+i.y*t.y,od=(i,t,e)=>{if(i.eq(t)||i.eq(e))return!0;let n=sr(t,e),s=sr(t,i),r=sr(e,i);return n>=0?s>=0&&r<=0:!(s<=0&&r>=0)},Qd="not-allowed";function Kp(i){return ti(i.originX)===ti("center")&&ti(i.originY)===ti("center")}function sp(i){return .5-ti(i)}var $i=(i,t)=>i[t],Xd=(i,t,e,n)=>({e:i,transform:t,pointer:new z(e,n)});function tm(i,t,e){let n=e,s=Jd(Oa(Mn(i.getCenterPoint(),i.canvas.viewportTransform,void 0),n))+Vi;return Math.round(s%Vi/Wy)}function Al({target:i,corner:t},e,n,s,r){var a;let o=i.controls[t],l=((a=i.canvas)==null?void 0:a.getZoom())||1,c=i.padding/l,h=(function(d,u,f,p){let y=d.getRelativeCenterPoint(),m=f!==void 0&&p!==void 0?d.translateToGivenOrigin(y,ye,ye,f,p):new z(d.left,d.top);return(d.angle?u.rotate(-Ee(d.angle),y):u).subtract(m)})(i,new z(s,r),e,n);return h.x>=c&&(h.x-=c),h.x<=-c&&(h.x+=c),h.y>=c&&(h.y-=c),h.y<=c&&(h.y+=c),h.x-=o.offsetX,h.y-=o.offsetY,h}var h_=new RegExp(String.raw`[\0-\x1F\x7F;<>\\]|\/\*|\*\/|url\s*\(|expression\s*\(|(?:java|vb)script\s*:|data\s*:|@import\b`,"iu"),Il=i=>typeof i=="string"&&i.trim().length>0&&!h_.test(i),Es=(i,t="")=>{let e=Number(i);return Number.isFinite(e)?`${e}`:t},Ms=(i,t="")=>typeof i=="string"&&Il(i)?i:t,vl=i=>i.replace(/\s+/g," "),rp={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#789",lightslategrey:"#789",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#639",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32"},zh=(i,t,e)=>(e<0&&(e+=1),e>1&&--e,e<1/6?i+6*(t-i)*e:e<.5?t:e<2/3?i+(t-i)*(2/3-e)*6:i),ap=(i,t,e,n)=>{i/=255,t/=255,e/=255;let s=Math.max(i,t,e),r=Math.min(i,t,e),a,o,l=(s+r)/2;if(s===r)a=o=0;else{let c=s-r;switch(o=l>.5?c/(2-s-r):c/(s+r),s){case i:a=(t-e)/c+(t<e?6:0);break;case t:a=(e-i)/c+2;break;case e:a=(i-t)/c+4}a/=6}return[Math.round(360*a),Math.round(100*o),Math.round(100*l),n]},op=(i="1")=>parseFloat(i)/(i.endsWith("%")?100:1),Zo=i=>Math.min(Math.round(i),255).toString(16).toUpperCase().padStart(2,"0"),lp=([i,t,e,n=1])=>{let s=Math.round(.3*i+.59*t+.11*e);return[s,s,s,n]},bi=class Ye{constructor(t){if(N(this,"isUnrecognised",!1),t)if(t instanceof Ye)this.setSource([...t._source]);else if(Array.isArray(t)){let[e,n,s,r=1]=t;this.setSource([e,n,s,r])}else this.setSource(this._tryParsingColor(t));else this.setSource([0,0,0,1])}_tryParsingColor(t){return(t=t.toLowerCase())in rp&&(t=rp[t]),t==="transparent"?[255,255,255,0]:Ye.sourceFromHex(t)||Ye.sourceFromRgb(t)||Ye.sourceFromHsl(t)||(this.isUnrecognised=!0)&&[0,0,0,1]}getSource(){return this._source}setSource(t){this._source=t}toRgb(){let[t,e,n]=this.getSource();return`rgb(${t},${e},${n})`}toRgba(){return`rgba(${this.getSource().join(",")})`}toHsl(){let[t,e,n]=ap(...this.getSource());return`hsl(${t},${e}%,${n}%)`}toHsla(){let[t,e,n,s]=ap(...this.getSource());return`hsla(${t},${e}%,${n}%,${s})`}toHex(){return this.toHexa().slice(0,6)}toHexa(){let[t,e,n,s]=this.getSource();return`${Zo(t)}${Zo(e)}${Zo(n)}${Zo(Math.round(255*s))}`}getAlpha(){return this.getSource()[3]}setAlpha(t){return this._source[3]=t,this}toGrayscale(){return this.setSource(lp(this.getSource())),this}toBlackWhite(t){let[e,,,n]=lp(this.getSource()),s=e<(t||127)?0:255;return this.setSource([s,s,s,n]),this}overlayWith(t){t instanceof Ye||(t=new Ye(t));let e=this.getSource(),n=t.getSource(),[s,r,a]=e.map((o,l)=>Math.round(.5*o+.5*n[l]));return this.setSource([s,r,a,e[3]]),this}static fromRgb(t){return Ye.fromRgba(t)}static fromRgba(t){return new Ye(Ye.sourceFromRgb(t))}static sourceFromRgb(t){let e=vl(t).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);if(e){let[n,s,r]=e.slice(1,4).map(a=>{let o=parseFloat(a);return a.endsWith("%")?Math.round(2.55*o):o});return[n,s,r,op(e[4])]}}static fromHsl(t){return Ye.fromHsla(t)}static fromHsla(t){return new Ye(Ye.sourceFromHsl(t))}static sourceFromHsl(t){let e=vl(t).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);if(!e)return;let n=(Ye.parseAngletoDegrees(e[1])%360+360)%360/360,s=parseFloat(e[2])/100,r=parseFloat(e[3])/100,a,o,l;if(s===0)a=o=l=r;else{let c=r<=.5?r*(s+1):r+s-r*s,h=2*r-c;a=zh(h,c,n+1/3),o=zh(h,c,n),l=zh(h,c,n-1/3)}return[Math.round(255*a),Math.round(255*o),Math.round(255*l),op(e[4])]}static fromHex(t){return new Ye(Ye.sourceFromHex(t))}static sourceFromHex(t){if(t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)){let e=t.slice(t.indexOf("#")+1),n;n=e.length<=4?e.split("").map(l=>l+l):e.match(/.{2}/g);let[s,r,a,o=255]=n.map(l=>parseInt(l,16));return[s,r,a,o/255]}}static parseAngletoDegrees(t){let e=t.toLowerCase(),n=parseFloat(e);return e.includes("rad")?En(n):e.includes("turn")?360*n:n}},d_=i=>{let t=["instantiated_by_use","style","id","class"];switch(i){case"linearGradient":return t.concat(["x1","y1","x2","y2","gradientUnits","gradientTransform"]);case"radialGradient":return t.concat(["gradientUnits","gradientTransform","cx","cy","r","fx","fy","fr"]);case"stop":return t.concat(["offset","stop-color","stop-opacity"])}return t},Ds=(i,t=16)=>{let e=/\D{0,2}$/.exec(i),n=parseFloat(i),s=de.DPI;switch(e?.[0]){case"mm":return n*s/25.4;case"cm":return n*s/2.54;case"in":return n*s;case"pt":return n*s/72;case"pc":return n*s/72*12;case"em":return n*t;default:return n}},em=i=>{let[t,e]=i.trim().split(" "),[n,s]=(r=t)&&r!=="none"?[r.slice(1,4),r.slice(5,8)]:r==="none"?[r,r]:["Mid","Mid"];var r;return{meetOrSlice:e||"meet",alignX:n,alignY:s}},Pa=(i,t,e=!0)=>{let n,s;if(t)if(t.toLive)n=`url(#SVGID_${te(t.id)})`;else{let r=String(t);if(Il(r)){let a=new bi(r),o=a.getAlpha();n=a.toRgb(),o!==1&&(s=o.toString())}else n=new bi("black").toRgb()}else n="none";return e?`${i}: ${n}; ${s?`${i}-opacity: ${s}; `:""}`:`${i}="${n}" ${s?`${i}-opacity="${s}" `:""}`},im=class{getSvgStyles(i){let t=this.fillRule==null?"nonzero":Ms(this.fillRule),e=this.strokeWidth==null?"0":Es(this.strokeWidth),n=this.strokeDashArray==null?Tl:this.strokeDashArray.every(u=>Number.isFinite(Number(u)))?this.strokeDashArray.join(" "):"",s=this.strokeDashOffset==null?"0":Es(this.strokeDashOffset),r=this.strokeLineCap==null?"butt":Ms(this.strokeLineCap),a=this.strokeLineJoin==null?"miter":Ms(this.strokeLineJoin),o=this.strokeMiterLimit==null?"4":Es(this.strokeMiterLimit),l=this.opacity==null?"1":Es(this.opacity),c=this.visible?"":" visibility: hidden;",h=i?"":this.getSvgFilter(),d=Pa(oi,this.fill);return[Pa(Tn,this.stroke),e?`stroke-width: ${e}; `:"",n?`stroke-dasharray: ${n}; `:"",r?`stroke-linecap: ${r}; `:"",s?`stroke-dashoffset: ${s}; `:"",a?`stroke-linejoin: ${a}; `:"",o?`stroke-miterlimit: ${o}; `:"",d,t?`fill-rule: ${t}; `:"",l?`opacity: ${l};`:"",h,c].map(u=>te(u)).join("")}getSvgFilter(){return this.shadow?`filter: url(#SVGID_${te(this.shadow.id)});`:""}getSvgCommons(){return[this.id?`id="${te(String(this.id))}" `:"",this.clipPath?`clip-path="url(#${te(this.clipPath.clipPathId)})" `:""].join("")}getSvgTransform(i,t=""){return`transform="${cr(i?this.calcTransformMatrix():this.calcOwnMatrix())}${t}" `}_toSVG(i){return[""]}toSVG(i){return this._createBaseSVGMarkup(this._toSVG(i),{reviver:i})}toClipPathSVG(i){return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(i),{reviver:i})}_createBaseClipPathSVGMarkup(i,{reviver:t,additionalTransform:e=""}={}){let n=[this.getSvgTransform(!0,e),this.getSvgCommons()].join(""),s=i.indexOf("COMMON_PARTS");return i[s]=n,t?t(i.join("")):i.join("")}_createBaseSVGMarkup(i,{noStyle:t,reviver:e,withShadow:n,additionalTransform:s}={}){let r=t?"":`style="${this.getSvgStyles()}" `,a=n?`style="${this.getSvgFilter()}" `:"",o=this.clipPath,l=this.strokeUniform?'vector-effect="non-scaling-stroke" ':"",c=o&&o.absolutePositioned,h=this.stroke,d=this.fill,u=this.shadow,f=[],p=i.indexOf("COMMON_PARTS"),y;return o&&(o.clipPathId=`CLIPPATH_${Wn()}`,y=`<clipPath id="${o.clipPathId}" >
${o.toClipPathSVG(e)}</clipPath>
`),c&&f.push("<g ",a,this.getSvgCommons(),` >
`),f.push("<g ",this.getSvgTransform(!1),c?"":a+this.getSvgCommons(),` >
`),i[p]=[r,l,t?"":this.addPaintOrder()," ",s?`transform="${s}" `:""].join(""),Bi(d)&&f.push(d.toSVG(this)),Bi(h)&&f.push(h.toSVG(this)),u&&f.push(u.toSVG(this)),o&&f.push(y),f.push(i.join("")),f.push(`</g>
`),c&&f.push(`</g>
`),e?e(f.join("")):f.join("")}addPaintOrder(){return this.paintFirst==="fill"?"":` paint-order="${te(this.paintFirst)}" `}};function Bl(i){return RegExp("^("+i.join("|")+")\\b","i")}var dr="textDecorationThickness",Fl="textDecorationColor",nm=["fontSize","fontWeight","fontFamily","fontStyle"],sm=["underline","overline","linethrough"],rm=[...nm,"lineHeight","text","charSpacing","textAlign","styles","path","pathStartOffset","pathSide","pathAlign"],am=[...rm,...sm,"textBackgroundColor","direction",dr,Fl],u_=[...nm,...sm,Tn,"strokeWidth",oi,"deltaY","textBackgroundColor",dr,Fl],f_={_reNewline:Bd,_reSpacesAndTabs:/[ \t\r]/g,_reSpaceAndTab:/[ \t\r]/,_reWords:/\S+/g,fontSize:40,fontWeight:Kf,fontFamily:"Times New Roman",underline:!1,overline:!1,linethrough:!1,textAlign:Oe,fontStyle:Kf,lineHeight:1.16,textBackgroundColor:"",stroke:null,shadow:null,path:void 0,pathStartOffset:0,pathSide:Oe,pathAlign:"baseline",charSpacing:0,deltaY:0,direction:"ltr",CACHE_FONT_SIZE:400,MIN_TEXT_WIDTH:2,superscript:{size:.6,baseline:-.35},subscript:{size:.6,baseline:.11},_fontSizeFraction:.222,offsets:{underline:.1,linethrough:-.28167,overline:-.81333},_fontSizeMult:1.13,[dr]:66.667},jd="justify",Hi=String.raw`[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?`,Wh=String.raw`(?:\s*,?\s+|\s*,\s*)`;var p_=RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+Hi+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+Hi+"))?\\s+(.*)"),m_={cx:Oe,x:Oe,r:"radius",cy:"top",y:"top",display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","letter-spacing":"charSpacing","paint-order":"paintFirst","stroke-dasharray":"strokeDashArray","stroke-dashoffset":"strokeDashOffset","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"textAnchor",opacity:"opacity","clip-path":"clipPath","clip-rule":"clipRule","vector-effect":"strokeUniform","image-rendering":"imageSmoothing","text-decoration-thickness":dr,"text-decoration-color":Fl},cp="font-size",hp="clip-path",SL=Bl(["path","circle","polygon","polyline","ellipse","rect","line","image","text"]),TL=Bl(["symbol","image","marker","pattern","view","svg"]),dp=Bl(["symbol","g","a","svg","clipPath","defs"]),EL=new RegExp(String.raw`^\s*(${Hi})${Wh}(${Hi})${Wh}(${Hi})${Wh}(${Hi})\s*$`),up="(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?",fp=RegExp("(?:\\s|^)"+up+up+"("+Hi+"?(?:px)?)?(?:\\s?|$)(?:$|\\s)"),Fa=class dl{constructor(t={}){let e=typeof t=="string"?dl.parseShadow(t):t;Object.assign(this,dl.ownDefaults,e),this.id=Wn()}static parseShadow(t){let e=t.trim(),[,n=0,s=0,r=0]=(fp.exec(e)||[]).map(a=>parseFloat(a)||0);return{color:(e.replace(fp,"")||"rgb(0,0,0)").trim(),offsetX:n,offsetY:s,blur:r}}toString(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")}toSVG(t){let e=Gd(new z(this.offsetX,this.offsetY),Ee(-t.angle)),n=de.NUM_FRACTION_DIGITS,s=new bi(this.color),r=40,a=40;return t.width&&t.height&&(r=100*ge((Math.abs(e.x)+this.blur)/t.width,n)+20,a=100*ge((Math.abs(e.y)+this.blur)/t.height,n)+20),t.flipX&&(e.x*=-1),t.flipY&&(e.y*=-1),`<filter id="SVGID_${te(this.id)}" y="-${a}%" height="${100+2*a}%" x="-${r}%" width="${100+2*r}%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="${ge(this.blur?this.blur/2:0,n)}"></feGaussianBlur>
	<feOffset dx="${ge(e.x,n)}" dy="${ge(e.y,n)}" result="oBlur" ></feOffset>
	<feFlood flood-color="${s.toRgb()}" flood-opacity="${s.getAlpha()}"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`}toObject(){let t={color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke,nonScaling:this.nonScaling,type:this.constructor.type},e=dl.ownDefaults;return this.includeDefaultValues?t:Hd(t,(n,s)=>n!==e[s])}static async fromObject(t){return new this(t)}};N(Fa,"ownDefaults",{color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,nonScaling:!1}),N(Fa,"type","shadow"),Dt.setClass(Fa,"shadow");var Rs=(i,t,e)=>Math.max(i,Math.min(t,e)),g_=["top",Oe,Kn,ts,"flipX","flipY","originX","originY","angle","opacity","globalCompositeOperation","shadow","visible",fr,pr],Ln=[oi,Tn,"strokeWidth","strokeDashArray","width","height","paintFirst","strokeUniform","strokeLineCap","strokeDashOffset","strokeLineJoin","strokeMiterLimit","backgroundColor","clipPath"],y_={top:0,left:0,width:0,height:0,angle:0,flipX:!1,flipY:!1,scaleX:1,scaleY:1,minScaleLimit:0,skewX:0,skewY:0,originX:ye,originY:ye,strokeWidth:1,strokeUniform:!1,padding:0,opacity:1,paintFirst:oi,fill:"rgb(0,0,0)",fillRule:"nonzero",stroke:null,strokeDashArray:null,strokeDashOffset:0,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:4,globalCompositeOperation:"source-over",backgroundColor:"",shadow:null,visible:!0,includeDefaultValues:!0,excludeFromExport:!1,objectCaching:!0,clipPath:void 0,inverted:!1,absolutePositioned:!1,centeredRotation:!0,centeredScaling:!1,dirty:!0},__=ka({defaultEasing:()=>lm,easeInBack:()=>H_,easeInBounce:()=>cm,easeInCirc:()=>C_,easeInCubic:()=>x_,easeInElastic:()=>P_,easeInExpo:()=>I_,easeInOutBack:()=>$_,easeInOutBounce:()=>V_,easeInOutCirc:()=>O_,easeInOutCubic:()=>b_,easeInOutElastic:()=>k_,easeInOutExpo:()=>F_,easeInOutQuad:()=>Y_,easeInOutQuart:()=>E_,easeInOutQuint:()=>w_,easeInOutSine:()=>A_,easeInQuad:()=>G_,easeInQuart:()=>S_,easeInQuint:()=>M_,easeInSine:()=>D_,easeOutBack:()=>U_,easeOutBounce:()=>Wd,easeOutCirc:()=>N_,easeOutCubic:()=>v_,easeOutElastic:()=>q_,easeOutExpo:()=>B_,easeOutQuad:()=>J_,easeOutQuart:()=>T_,easeOutQuint:()=>L_,easeOutSine:()=>R_}),zd=(i,t,e,n)=>(i<Math.abs(t)?(i=t,n=e/4):n=t===0&&i===0?e/Vi*Math.asin(1):e/Vi*Math.asin(t/i),{a:i,c:t,p:e,s:n}),om=(i,t,e,n,s)=>i*2**(10*--n)*Math.sin((n*s-t)*Vi/e),lm=(i,t,e,n)=>-e*Math.cos(i/n*Zn)+e+t,x_=(i,t,e,n)=>e*(i/n)**3+t,v_=(i,t,e,n)=>e*((i/n-1)**3+1)+t,b_=(i,t,e,n)=>(i/=n/2)<1?e/2*i**3+t:e/2*((i-2)**3+2)+t,S_=(i,t,e,n)=>e*(i/=n)*i**3+t,T_=(i,t,e,n)=>-e*((i=i/n-1)*i**3-1)+t,E_=(i,t,e,n)=>(i/=n/2)<1?e/2*i**4+t:-e/2*((i-=2)*i**3-2)+t,M_=(i,t,e,n)=>e*(i/n)**5+t,L_=(i,t,e,n)=>e*((i/n-1)**5+1)+t,w_=(i,t,e,n)=>(i/=n/2)<1?e/2*i**5+t:e/2*((i-2)**5+2)+t,D_=(i,t,e,n)=>-e*Math.cos(i/n*Zn)+e+t,R_=(i,t,e,n)=>e*Math.sin(i/n*Zn)+t,A_=(i,t,e,n)=>-e/2*(Math.cos(Math.PI*i/n)-1)+t,I_=(i,t,e,n)=>i===0?t:e*2**(10*(i/n-1))+t,B_=(i,t,e,n)=>i===n?t+e:e*-(2**(-10*i/n)+1)+t,F_=(i,t,e,n)=>i===0?t:i===n?t+e:(i/=n/2)<1?e/2*2**(10*(i-1))+t:e/2*-(2**(-10*(i-1))+2)+t,C_=(i,t,e,n)=>-e*(Math.sqrt(1-(i/=n)*i)-1)+t,N_=(i,t,e,n)=>e*Math.sqrt(1-(i=i/n-1)*i)+t,O_=(i,t,e,n)=>(i/=n/2)<1?-e/2*(Math.sqrt(1-i**2)-1)+t:e/2*(Math.sqrt(1-(i-=2)*i)+1)+t,P_=(i,t,e,n)=>{let s=e,r=0;if(i===0)return t;if((i/=n)===1)return t+e;r||(r=.3*n);let{a,s:o,p:l}=zd(s,e,r,1.70158);return-om(a,o,l,i,n)+t},q_=(i,t,e,n)=>{let s=e,r=0;if(i===0)return t;if((i/=n)===1)return t+e;r||(r=.3*n);let{a,s:o,p:l,c}=zd(s,e,r,1.70158);return a*2**(-10*i)*Math.sin((i*n-o)*Vi/l)+c+t},k_=(i,t,e,n)=>{let s=e,r=0;if(i===0)return t;if((i/=n/2)==2)return t+e;r||(r=.3*1.5*n);let{a,s:o,p:l,c}=zd(s,e,r,1.70158);return i<1?-.5*om(a,o,l,i,n)+t:a*2**(-10*--i)*Math.sin((i*n-o)*Vi/l)*.5+c+t},H_=(i,t,e,n,s=1.70158)=>e*(i/=n)*i*((s+1)*i-s)+t,U_=(i,t,e,n,s=1.70158)=>e*((i=i/n-1)*i*((s+1)*i+s)+1)+t,$_=(i,t,e,n,s=1.70158)=>(i/=n/2)<1?e/2*(i*i*((1+(s*=1.525))*i-s))+t:e/2*((i-=2)*i*((1+(s*=1.525))*i+s)+2)+t,Wd=(i,t,e,n)=>(i/=n)<1/2.75?e*(7.5625*i*i)+t:i<2/2.75?e*(7.5625*(i-=1.5/2.75)*i+.75)+t:i<2.5/2.75?e*(7.5625*(i-=2.25/2.75)*i+.9375)+t:e*(7.5625*(i-=2.625/2.75)*i+.984375)+t,cm=(i,t,e,n)=>e-Wd(n-i,0,e,n)+t,V_=(i,t,e,n)=>i<n/2?.5*cm(2*i,0,e,n)+t:.5*Wd(2*i-n,0,e,n)+.5*e+t,G_=(i,t,e,n)=>e*(i/=n)*i+t,J_=(i,t,e,n)=>-e*(i/=n)*(i-2)+t,Y_=(i,t,e,n)=>(i/=n/2)<1?e/2*i**2+t:-e/2*(--i*(i-2)-1)+t,Q_=()=>!1,Zd=class{constructor({startValue:i,byValue:t,duration:e=500,delay:n=0,easing:s=lm,onStart:r=cl,onChange:a=cl,onComplete:o=cl,abort:l=Q_,target:c}){N(this,"_state","pending"),N(this,"durationProgress",0),N(this,"valueProgress",0),this.tick=this.tick.bind(this),this.duration=e,this.delay=n,this.easing=s,this._onStart=r,this._onChange=a,this._onComplete=o,this._abort=l,this.target=c,this.startValue=i,this.byValue=t,this.value=this.startValue,this.endValue=Object.freeze(this.calculate(this.duration).value)}get state(){return this._state}isDone(){return this._state==="aborted"||this._state==="completed"}start(){let i=t=>{this._state==="pending"&&(this.startTime=t||+new Date,this._state="running",this._onStart(),this.tick(this.startTime))};this.register(),this.delay>0?this.timeout=ar().setTimeout(()=>Ia(i),this.delay):Ia(i)}tick(i){let t=(i||+new Date)-this.startTime,e=Math.min(t,this.duration);this.durationProgress=e/this.duration;let{value:n,valueProgress:s}=this.calculate(e);this.value=Object.freeze(n),this.valueProgress=s,this._state!=="aborted"&&(this._abort(this.value,this.valueProgress,this.durationProgress)?(this._state="aborted",this.unregister()):t>=this.duration?(this.durationProgress=this.valueProgress=1,this._onChange(this.endValue,this.valueProgress,this.durationProgress),this._state="completed",this._onComplete(this.endValue,this.valueProgress,this.durationProgress),this.unregister(),this.timeout=null):(this._onChange(this.value,this.valueProgress,this.durationProgress),Ia(this.tick)))}register(){gl.push(this)}unregister(){gl.remove(this)}abort(){this._state="aborted",this.unregister(),this.timeout&&ar().clearTimeout(this.timeout)}},X_=class extends Zd{constructor({startValue:i=0,endValue:t=100,...e}){super({...e,startValue:i,byValue:t-i})}calculate(i){let t=this.easing(i,this.startValue,this.byValue,this.duration);return{value:t,valueProgress:Math.abs((t-this.startValue)/this.byValue)}}},j_=class extends Zd{constructor({startValue:i=[0],endValue:t=[100],...e}){super({...e,startValue:i,byValue:t.map((n,s)=>n-i[s])})}calculate(i){let t=this.startValue.map((e,n)=>this.easing(i,e,this.byValue[n],this.duration,n));return{value:t,valueProgress:Math.abs((t[0]-this.startValue[0])/this.byValue[0])}}},z_=(i,t,e,n)=>t+e*(1-Math.cos(i/n*Zn)),Zh=i=>i&&((t,e,n)=>i(new bi(t).toRgba(),e,n)),W_=class extends Zd{constructor({startValue:i,endValue:t,easing:e=z_,onChange:n,onComplete:s,abort:r,...a}){let o=new bi(i).getSource(),l=new bi(t).getSource();super({...a,startValue:o,byValue:l.map((c,h)=>c-o[h]),easing:e,onChange:Zh(n),onComplete:Zh(s),abort:Zh(r)})}calculate(i){let[t,e,n,s]=this.startValue.map((a,o)=>this.easing(i,a,this.byValue[o],this.duration,o)),r=[...[t,e,n].map(Math.round),Rs(0,s,1)];return{value:r,valueProgress:r.map((a,o)=>this.byValue[o]===0?0:Math.abs((a-this.startValue[o])/this.byValue[o])).find(a=>a!==0)||0}}};function Kd(i){let t=(e=>Array.isArray(e.startValue)||Array.isArray(e.endValue))(i)?new j_(i):new X_(i);return t.start(),t}function hm(i){let t=new W_(i);return t.start(),t}var Ca=class He{constructor(t){this.status=t,this.points=[]}includes(t){return this.points.some(e=>e.eq(t))}append(...t){return this.points=this.points.concat(t.filter(e=>!this.includes(e))),this}static isPointContained(t,e,n,s=!1){if(e.eq(n))return t.eq(e);if(e.x===n.x)return t.x===e.x&&(s||t.y>=Math.min(e.y,n.y)&&t.y<=Math.max(e.y,n.y));if(e.y===n.y)return t.y===e.y&&(s||t.x>=Math.min(e.x,n.x)&&t.x<=Math.max(e.x,n.x));{let r=Oa(e,n),a=Oa(e,t).divide(r);return s?Math.abs(a.x)===Math.abs(a.y):a.x===a.y&&a.x>=0&&a.x<=1}}static isPointInPolygon(t,e){let n=new z(t).setX(Math.min(t.x-1,...e.map(r=>r.x))),s=0;for(let r=0;r<e.length;r++){let a=this.intersectSegmentSegment(e[r],e[(r+1)%e.length],t,n);if(a.includes(t))return!0;s+=+(a.status==="Intersection")}return s%2==1}static intersectLineLine(t,e,n,s,r=!0,a=!0){let o=e.x-t.x,l=e.y-t.y,c=s.x-n.x,h=s.y-n.y,d=t.x-n.x,u=t.y-n.y,f=c*u-h*d,p=o*u-l*d,y=h*o-c*l;if(y!==0){let m=f/y,g=p/y;return(r||0<=m&&m<=1)&&(a||0<=g&&g<=1)?new He("Intersection").append(new z(t.x+m*o,t.y+m*l)):new He}return new He(f===0||p===0?r||a||He.isPointContained(t,n,s)||He.isPointContained(e,n,s)||He.isPointContained(n,t,e)||He.isPointContained(s,t,e)?"Coincident":void 0:"Parallel")}static intersectSegmentLine(t,e,n,s){return He.intersectLineLine(t,e,n,s,!1,!0)}static intersectSegmentSegment(t,e,n,s){return He.intersectLineLine(t,e,n,s,!1,!1)}static intersectLinePolygon(t,e,n,s=!0){let r=new He,a=n.length;for(let o,l,c,h=0;h<a;h++){if(o=n[h],l=n[(h+1)%a],c=He.intersectLineLine(t,e,o,l,s,!1),c.status==="Coincident")return c;r.append(...c.points)}return r.points.length>0&&(r.status="Intersection"),r}static intersectSegmentPolygon(t,e,n){return He.intersectLinePolygon(t,e,n,!1)}static intersectPolygonPolygon(t,e){let n=new He,s=t.length,r=[];for(let a=0;a<s;a++){let o=t[a],l=t[(a+1)%s],c=He.intersectSegmentPolygon(o,l,e);c.status==="Coincident"?(r.push(c),n.append(o,l)):n.append(...c.points)}return r.length>0&&r.length===t.length?new He("Coincident"):(n.points.length>0&&(n.status="Intersection"),n)}static intersectPolygonRectangle(t,e,n){let s=e.min(n),r=e.max(n),a=new z(r.x,s.y),o=new z(s.x,r.y);return He.intersectPolygonPolygon(t,[s,a,r,o])}},Z_=class extends Np{getX(){return this.getXY().x}setX(i){this.setXY(this.getXY().setX(i))}getY(){return this.getXY().y}setY(i){this.setXY(this.getXY().setY(i))}getRelativeX(){return this.left}setRelativeX(i){this.left=i}getRelativeY(){return this.top}setRelativeY(i){this.top=i}getXY(){let i=this.getRelativeXY();return this.group?Qe(i,this.group.calcTransformMatrix()):i}setXY(i,t,e){this.group&&(i=Qe(i,xi(this.group.calcTransformMatrix()))),this.setRelativeXY(i,t,e)}getRelativeXY(){return new z(this.left,this.top)}setRelativeXY(i,t=this.originX,e=this.originY){this.setPositionByOrigin(i,t,e)}isStrokeAccountedForInDimensions(){return!1}getCoords(){let{tl:i,tr:t,br:e,bl:n}=this.aCoords||(this.aCoords=this.calcACoords()),s=[i,t,e,n];if(this.group){let r=this.group.calcTransformMatrix();return s.map(a=>Qe(a,r))}return s}intersectsWithRect(i,t){return Ca.intersectPolygonRectangle(this.getCoords(),i,t).status==="Intersection"}intersectsWithObject(i){let t=Ca.intersectPolygonPolygon(this.getCoords(),i.getCoords());return t.status==="Intersection"||t.status==="Coincident"||i.isContainedWithinObject(this)||this.isContainedWithinObject(i)}isContainedWithinObject(i){return this.getCoords().every(t=>i.containsPoint(t))}isContainedWithinRect(i,t){let{left:e,top:n,width:s,height:r}=this.getBoundingRect();return e>=i.x&&e+s<=t.x&&n>=i.y&&n+r<=t.y}isOverlapping(i){return this.intersectsWithObject(i)||this.isContainedWithinObject(i)||i.isContainedWithinObject(this)}containsPoint(i){return Ca.isPointInPolygon(i,this.getCoords())}isOnScreen(){if(!this.canvas)return!1;let{tl:i,br:t}=this.canvas.vptCoords;return!!this.getCoords().some(e=>e.x<=t.x&&e.x>=i.x&&e.y<=t.y&&e.y>=i.y)||!!this.intersectsWithRect(i,t)||this.containsPoint(i.midPointFrom(t))}isPartiallyOnScreen(){if(!this.canvas)return!1;let{tl:i,br:t}=this.canvas.vptCoords;return!!this.intersectsWithRect(i,t)||this.getCoords().every(e=>(e.x>=t.x||e.x<=i.x)&&(e.y>=t.y||e.y<=i.y))&&this.containsPoint(i.midPointFrom(t))}getBoundingRect(){return ln(this.getCoords())}getScaledWidth(){return this._getTransformedDimensions().x}getScaledHeight(){return this._getTransformedDimensions().y}scale(i){this._set(Kn,i),this._set(ts,i),this.setCoords()}scaleToWidth(i){let t=this.getBoundingRect().width/this.getScaledWidth();return this.scale(i/this.width/t)}scaleToHeight(i){let t=this.getBoundingRect().height/this.getScaledHeight();return this.scale(i/this.height/t)}getCanvasRetinaScaling(){var i;return((i=this.canvas)==null?void 0:i.getRetinaScaling())||1}getTotalAngle(){return this.group?En(Od(this.calcTransformMatrix())):this.angle}getViewportTransform(){var i;return((i=this.canvas)==null?void 0:i.viewportTransform)||ii.concat()}calcACoords(){let i=As({angle:this.angle}),{x:t,y:e}=this.getRelativeCenterPoint(),n=Le(mr(t,e),i),s=this._getTransformedDimensions(),r=s.x/2,a=s.y/2;return{tl:Qe({x:-r,y:-a},n),tr:Qe({x:r,y:-a},n),bl:Qe({x:-r,y:a},n),br:Qe({x:r,y:a},n)}}setCoords(){this.aCoords=this.calcACoords()}transformMatrixKey(i=!1){let t=[];return!i&&this.group&&(t=this.group.transformMatrixKey(i)),t.push(this.top,this.left,this.width,this.height,this.scaleX,this.scaleY,this.angle,this.strokeWidth,this.skewX,this.skewY,+this.flipX,+this.flipY,ti(this.originX),ti(this.originY)),t}calcTransformMatrix(i=!1){let t=this.calcOwnMatrix();if(i||!this.group)return t;let e=this.transformMatrixKey(i),n=this.matrixCache;return n&&n.key.every((s,r)=>s===e[r])?n.value:(this.group&&(t=Le(this.group.calcTransformMatrix(!1),t)),this.matrixCache={key:e,value:t},t)}calcOwnMatrix(){let i=this.transformMatrixKey(!0),t=this.ownMatrixCache;if(t&&t.key.every((s,r)=>s===i[r]))return t.value;let e=this.getRelativeCenterPoint(),n=Up({angle:this.angle,translateX:e.x,translateY:e.y,scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,flipX:this.flipX,flipY:this.flipY});return this.ownMatrixCache={key:i,value:n},n}_getNonTransformedDimensions(){return new z(this.width,this.height).scalarAdd(this.strokeWidth)}_calculateCurrentDimensions(i){var t;let e=(t=this.canvas)==null?void 0:t.viewportTransform,n=this._getTransformedDimensions(i);return e?n.multiply(new z(Pd(e),kp(e))).scalarAdd(2*this.padding):n.scalarAdd(2*this.padding)}_getTransformedDimensions(i={}){let t={scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,width:this.width,height:this.height,strokeWidth:this.strokeWidth,...i},e=t.strokeWidth,n=e,s=0;this.strokeUniform&&(n=0,s=e);let r=t.width+n,a=t.height+n,o;return o=t.skewX===0&&t.skewY===0?new z(r*t.scaleX,a*t.scaleY):Dl(r,a,Ha(t)),o.scalarAdd(s)}translateToGivenOrigin(i,t,e,n,s){let r=i.x,a=i.y,o=ti(n)-ti(t),l=ti(s)-ti(e);if(o||l){let c=this._getTransformedDimensions();r+=o*c.x,a+=l*c.y}return new z(r,a)}translateToCenterPoint(i,t,e){if(t==="center"&&e==="center")return i;let n=this.translateToGivenOrigin(i,t,e,ye,ye);return this.angle?n.rotate(Ee(this.angle),i):n}translateToOriginPoint(i,t,e){let n=this.translateToGivenOrigin(i,ye,ye,t,e);return this.angle?n.rotate(Ee(this.angle),i):n}getCenterPoint(){let i=this.getRelativeCenterPoint();return this.group?Qe(i,this.group.calcTransformMatrix()):i}getRelativeCenterPoint(){return this.translateToCenterPoint(new z(this.left,this.top),this.originX,this.originY)}getPointByOrigin(i,t){return this.getPositionByOrigin(i,t)}getPositionByOrigin(i,t){return this.translateToOriginPoint(this.getRelativeCenterPoint(),i,t)}setPositionByOrigin(i,t,e){let n=this.translateToCenterPoint(i,t,e),s=this.translateToOriginPoint(n,this.originX,this.originY);this.set({left:s.x,top:s.y})}_getLeftTopCoords(){return this.getPositionByOrigin(Oe,"top")}positionByLeftTop(i){return this.setPositionByOrigin(i,Oe,"top")}},bn=class ul extends Z_{static getDefaults(){return ul.ownDefaults}get type(){let t=this.constructor.type;return t==="FabricObject"?"object":t.toLowerCase()}set type(t){zn("warn","Setting type has no effect",t)}constructor(t){super(),N(this,"_cacheContext",null),Object.assign(this,ul.ownDefaults),this.setOptions(t)}_createCacheCanvas(){this._cacheCanvas=hn(),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas(),this.dirty=!0}_limitCacheSize(t){let e=t.width,n=t.height,s=de.maxCacheSideLimit,r=de.minCacheSideLimit;if(e<=s&&n<=s&&e*n<=de.perfLimitSizeTotal)return e<r&&(t.width=r),n<r&&(t.height=r),t;let a=e/n,[o,l]=Aa.limitDimsByArea(a),c=Rs(r,o,s),h=Rs(r,l,s);return e>c&&(t.zoomX/=e/c,t.width=c,t.capped=!0),n>h&&(t.zoomY/=n/h,t.height=h,t.capped=!0),t}_getCacheCanvasDimensions(){let t=this.getTotalObjectScaling(),e=this._getTransformedDimensions({skewX:0,skewY:0}),n=e.x*t.x/this.scaleX,s=e.y*t.y/this.scaleY;return{width:Math.ceil(n+2),height:Math.ceil(s+2),zoomX:t.x,zoomY:t.y,x:n,y:s}}_updateCacheCanvas(){let t=this._cacheCanvas,e=this._cacheContext,{width:n,height:s,zoomX:r,zoomY:a,x:o,y:l}=this._limitCacheSize(this._getCacheCanvasDimensions()),c=n!==t.width||s!==t.height,h=this.zoomX!==r||this.zoomY!==a;if(!t||!e)return!1;if(c||h){n!==t.width||s!==t.height?(t.width=n,t.height=s):(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height));let d=o/2,u=l/2;return this.cacheTranslationX=Math.round(t.width/2-d)+d,this.cacheTranslationY=Math.round(t.height/2-u)+u,e.translate(this.cacheTranslationX,this.cacheTranslationY),e.scale(r,a),this.zoomX=r,this.zoomY=a,!0}return!1}setOptions(t={}){this._setOptions(t)}transform(t){let e=this.group&&!this.group._transformDone||this.group&&this.canvas&&t===this.canvas.contextTop,n=this.calcTransformMatrix(!e);t.transform(n[0],n[1],n[2],n[3],n[4],n[5])}getObjectScaling(){if(!this.group)return new z(Math.abs(this.scaleX),Math.abs(this.scaleY));let t=or(this.calcTransformMatrix());return new z(Math.abs(t.scaleX),Math.abs(t.scaleY))}getTotalObjectScaling(){let t=this.getObjectScaling();if(this.canvas){let e=this.canvas.getZoom(),n=this.getCanvasRetinaScaling();return t.scalarMultiply(e*n)}return t}getObjectOpacity(){let t=this.opacity;return this.group&&(t*=this.group.getObjectOpacity()),t}_constrainScale(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:t===0?1e-4:t}_set(t,e){t!=="scaleX"&&t!=="scaleY"||(e=this._constrainScale(e)),t==="scaleX"&&e<0?(this.flipX=!this.flipX,e*=-1):t==="scaleY"&&e<0?(this.flipY=!this.flipY,e*=-1):t!=="shadow"||!e||e instanceof Fa||(e=new Fa(e));let n=this[t]!==e;return this[t]=e,n&&this.constructor.cacheProperties.includes(t)&&(this.dirty=!0),this.parent&&(this.dirty||n&&this.constructor.stateProperties.includes(t))&&this.parent._set("dirty",!0),this}isNotVisible(){return this.opacity===0||!this.width&&!this.height&&this.strokeWidth===0||!this.visible}render(t){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),this.transform(t),this._setOpacity(t),this._setShadow(t),this.shouldCache()?(this.renderCache(),this.drawCacheOnCanvas(t)):(this._removeCacheCanvas(),this.drawObject(t,!1,{}),this.dirty=!1),t.restore())}drawSelectionBackground(t){}renderCache(t){if(t=t||{},this._cacheCanvas&&this._cacheContext||this._createCacheCanvas(),this.isCacheDirty()&&this._cacheContext){let{zoomX:e,zoomY:n,cacheTranslationX:s,cacheTranslationY:r}=this,{width:a,height:o}=this._cacheCanvas;this.drawObject(this._cacheContext,t.forClipping,{zoomX:e,zoomY:n,cacheTranslationX:s,cacheTranslationY:r,width:a,height:o,parentClipPaths:[]}),this.dirty=!1}}_removeCacheCanvas(){this._cacheCanvas=void 0,this._cacheContext=null}hasStroke(){return!!this.stroke&&this.stroke!=="transparent"&&this.strokeWidth!==0}hasFill(){return!!this.fill&&this.fill!=="transparent"}needsItsOwnCache(){return!!(this.paintFirst==="stroke"&&this.hasFill()&&this.hasStroke()&&this.shadow)||!!this.clipPath}shouldCache(){return this.ownCaching=this.objectCaching&&(!this.parent||!this.parent.isOnACache())||this.needsItsOwnCache(),this.ownCaching}willDrawShadow(){return!!this.shadow&&(this.shadow.offsetX!==0||this.shadow.offsetY!==0)}drawClipPathOnCache(t,e,n){t.save(),e.inverted?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="destination-in",t.setTransform(1,0,0,1,0,0),t.drawImage(n,0,0),t.restore()}drawObject(t,e,n){let s=this.fill,r=this.stroke;e?(this.fill="black",this.stroke="",this._setClippingProperties(t)):this._renderBackground(t),this.fire("before:render",{ctx:t}),this._render(t),this._drawClipPath(t,this.clipPath,n),this.fill=s,this.stroke=r}createClipPathLayer(t,e){let n=vi(e),s=n.getContext("2d");if(s.translate(e.cacheTranslationX,e.cacheTranslationY),s.scale(e.zoomX,e.zoomY),t._cacheCanvas=n,e.parentClipPaths.forEach(r=>{r.transform(s)}),e.parentClipPaths.push(t),t.absolutePositioned){let r=xi(this.calcTransformMatrix());s.transform(r[0],r[1],r[2],r[3],r[4],r[5])}return t.transform(s),t.drawObject(s,!0,e),n}_drawClipPath(t,e,n){if(!e)return;e._transformDone=!0;let s=this.createClipPathLayer(e,n);this.drawClipPathOnCache(t,e,s)}drawCacheOnCanvas(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)}isCacheDirty(t=!1){if(this.isNotVisible())return!1;let e=this._cacheCanvas,n=this._cacheContext;return!(!e||!n||t||!this._updateCacheCanvas())||!!(this.dirty||this.clipPath&&this.clipPath.absolutePositioned)&&(e&&n&&!t&&(n.save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height),n.restore()),!0)}_renderBackground(t){if(!this.backgroundColor)return;let e=this._getNonTransformedDimensions();t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}_setOpacity(t){this.group&&!this.group._transformDone?t.globalAlpha=this.getObjectOpacity():t.globalAlpha*=this.opacity}_setStrokeStyles(t,e){let n=e.stroke;n&&(t.lineWidth=e.strokeWidth,t.lineCap=e.strokeLineCap,t.lineDashOffset=e.strokeDashOffset,t.lineJoin=e.strokeLineJoin,t.miterLimit=e.strokeMiterLimit,Bi(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?this._applyPatternForTransformedGradient(t,n):(t.strokeStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.strokeStyle=e.stroke)}_setFillStyles(t,{fill:e}){e&&(Bi(e)?(t.fillStyle=e.toLive(t),this._applyPatternGradientTransform(t,e)):t.fillStyle=e)}_setClippingProperties(t){t.globalAlpha=1,t.strokeStyle="transparent",t.fillStyle="#000000"}_setLineDash(t,e){e&&e.length!==0&&t.setLineDash(e)}_setShadow(t){if(!this.shadow)return;let e=this.shadow,n=this.canvas,s=this.getCanvasRetinaScaling(),[r,,,a]=n?.viewportTransform||ii,o=r*s,l=a*s,c=e.nonScaling?new z(1,1):this.getObjectScaling();t.shadowColor=e.color,t.shadowBlur=e.blur*de.browserShadowBlurConstant*(o+l)*(c.x+c.y)/4,t.shadowOffsetX=e.offsetX*o*c.x,t.shadowOffsetY=e.offsetY*l*c.y}_removeShadow(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)}_applyPatternGradientTransform(t,e){if(!Bi(e))return{offsetX:0,offsetY:0};let n=e.gradientTransform||e.patternTransform,s=-this.width/2+e.offsetX||0,r=-this.height/2+e.offsetY||0;return e.gradientUnits==="percentage"?t.transform(this.width,0,0,this.height,s,r):t.transform(1,0,0,1,s,r),n&&t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),{offsetX:s,offsetY:r}}_renderPaintInOrder(t){this.paintFirst==="stroke"?(this._renderStroke(t),this._renderFill(t)):(this._renderFill(t),this._renderStroke(t))}_render(t){}_renderFill(t){this.fill&&(t.save(),this._setFillStyles(t,this),this.fillRule==="evenodd"?t.fill("evenodd"):t.fill(),t.restore())}_renderStroke(t){if(this.stroke&&this.strokeWidth!==0){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this.strokeUniform){let e=this.getObjectScaling();t.scale(1/e.x,1/e.y)}this._setLineDash(t,this.strokeDashArray),this._setStrokeStyles(t,this),t.stroke(),t.restore()}}_applyPatternForTransformedGradient(t,e){var n;let s=this._limitCacheSize(this._getCacheCanvasDimensions()),r=this.getCanvasRetinaScaling(),a=s.x/this.scaleX/r,o=s.y/this.scaleY/r,l=vi({width:Math.ceil(a),height:Math.ceil(o)}),c=l.getContext("2d");c&&(c.beginPath(),c.moveTo(0,0),c.lineTo(a,0),c.lineTo(a,o),c.lineTo(0,o),c.closePath(),c.translate(a/2,o/2),c.scale(s.zoomX/this.scaleX/r,s.zoomY/this.scaleY/r),this._applyPatternGradientTransform(c,e),c.fillStyle=e.toLive(t),c.fill(),t.translate(-this.width/2-this.strokeWidth/2,-this.height/2-this.strokeWidth/2),t.scale(r*this.scaleX/s.zoomX,r*this.scaleY/s.zoomY),t.strokeStyle=(n=c.createPattern(l,"no-repeat"))==null?"":n)}_findCenterFromElement(){return new z(this.left+this.width/2,this.top+this.height/2)}clone(t){let e=this.toObject(t);return this.constructor.fromObject(e)}cloneAsImage(t){let e=this.toCanvasElement(t);return new(Dt.getClass("image"))(e)}toCanvasElement(t={}){let e=$d(this),n=this.group,s=this.shadow,r=Math.abs,a=t.enableRetinaScaling?Mp():1,o=(t.multiplier||1)*a,l=t.canvasProvider||(b=>new Ud(b,{enableRetinaScaling:!1,renderOnAddRemove:!1,skipOffscreen:!1}));delete this.group,t.withoutTransform&&jp(this),t.withoutShadow&&(this.shadow=null),t.viewportTransform&&Vd(this,this.getViewportTransform()),this.setCoords();let c=hn(),h=this.getBoundingRect(),d=this.shadow,u=new z;if(d){let b=d.blur,E=d.nonScaling?new z(1,1):this.getObjectScaling();u.x=2*Math.round(r(d.offsetX)+b)*r(E.x),u.y=2*Math.round(r(d.offsetY)+b)*r(E.y)}let f=h.width+u.x,p=h.height+u.y;c.width=Math.ceil(f),c.height=Math.ceil(p);let y=l(c);t.format==="jpeg"&&(y.backgroundColor="#fff"),this.setPositionByOrigin(new z(y.width/2,y.height/2),ye,ye);let m=this.canvas;y._objects=[this],this.set("canvas",y),this.setCoords();let g=y.toCanvasElement(o||1,t);return this.set("canvas",m),this.shadow=s,n&&(this.group=n),this.set(e),this.setCoords(),y._objects=[],y.destroy(),g}toDataURL(t={}){return Cd(this.toCanvasElement(t),t.format||"png",t.quality||1)}toBlob(t={}){return Nd(this.toCanvasElement(t),t.format||"png",t.quality||1)}isType(...t){return t.includes(this.constructor.type)||t.includes(this.type)}complexity(){return 1}toJSON(){return this.toObject()}rotate(t){let{centeredRotation:e,originX:n,originY:s}=this;if(e){let{x:r,y:a}=this.getRelativeCenterPoint();this.originX=ye,this.originY=ye,this.left=r,this.top=a}if(this.set("angle",t),e){let{x:r,y:a}=this.getPositionByOrigin(n,s);this.left=r,this.top=a,this.originX=n,this.originY=s}}setOnGroup(){}_setupCompositeOperation(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}dispose(){gl.cancelByTarget(this),this.off(),this._set("canvas",void 0),this._cacheCanvas&&cn().dispose(this._cacheCanvas),this._cacheCanvas=void 0,this._cacheContext=null}animate(t,e){return Object.entries(t).reduce((n,[s,r])=>(n[s]=this._animate(s,r,e),n),{})}_animate(t,e,n={}){let s=t.split("."),r=this.constructor.colorProperties.includes(s[s.length-1]),{abort:a,startValue:o,onChange:l,onComplete:c}=n,h={...n,target:this,startValue:o??s.reduce((d,u)=>d[u],this),endValue:e,abort:a?.bind(this),onChange:(d,u,f)=>{s.reduce((p,y,m)=>(m===s.length-1&&(p[y]=d),p[y]),this),l&&l(d,u,f)},onComplete:(d,u,f)=>{this.setCoords(),c&&c(d,u,f)}};return r?hm(h):Kd(h)}isDescendantOf(t){let{parent:e,group:n}=this;return e===t||n===t||!!e&&e.isDescendantOf(t)||!!n&&n!==e&&n.isDescendantOf(t)}getAncestors(){let t=[],e=this;do e=e.parent,e&&t.push(e);while(e);return t}findCommonAncestors(t){if(this===t)return{fork:[],otherFork:[],common:[this,...this.getAncestors()]};let e=this.getAncestors(),n=t.getAncestors();if(e.length===0&&n.length>0&&this===n[n.length-1])return{fork:[],otherFork:[t,...n.slice(0,n.length-1)],common:[this]};for(let s,r=0;r<e.length;r++){if(s=e[r],s===t)return{fork:[this,...e.slice(0,r)],otherFork:[],common:e.slice(r)};for(let a=0;a<n.length;a++){if(this===n[a])return{fork:[],otherFork:[t,...n.slice(0,a)],common:[this,...e]};if(s===n[a])return{fork:[this,...e.slice(0,r)],otherFork:[t,...n.slice(0,a)],common:e.slice(r)}}}return{fork:[this,...e],otherFork:[t,...n],common:[]}}hasCommonAncestors(t){let e=this.findCommonAncestors(t);return e&&!!e.common.length}isInFrontOf(t){if(this===t)return;let e=this.findCommonAncestors(t);if(e.fork.includes(t))return!0;if(e.otherFork.includes(this))return!1;let n=e.common[0]||this.canvas;if(!n)return;let s=e.fork.pop(),r=e.otherFork.pop(),a=n._objects.indexOf(s),o=n._objects.indexOf(r);return a>-1&&a>o}toObject(t=[]){let e=t.concat(ul.customProperties,this.constructor.customProperties||[]),n,s=de.NUM_FRACTION_DIGITS,{clipPath:r,fill:a,stroke:o,shadow:l,strokeDashArray:c,left:h,top:d,originX:u,originY:f,width:p,height:y,strokeWidth:m,strokeLineCap:g,strokeDashOffset:b,strokeLineJoin:E,strokeUniform:x,strokeMiterLimit:T,scaleX:M,scaleY:D,angle:v,flipX:L,flipY:R,opacity:A,visible:P,backgroundColor:q,fillRule:I,paintFirst:k,globalCompositeOperation:X,skewX:Y,skewY:it}=this;r&&!r.excludeFromExport&&(n=r.toObject(e.concat("inverted","absolutePositioned")));let U=tt=>ge(tt,s),K={...Is(this,e),type:this.constructor.type,version:rd,originX:u,originY:f,left:U(h),top:U(d),width:U(p),height:U(y),fill:tp(a)?a.toObject():a,stroke:tp(o)?o.toObject():o,strokeWidth:U(m),strokeDashArray:c&&c.concat(),strokeLineCap:g,strokeDashOffset:b,strokeLineJoin:E,strokeUniform:x,strokeMiterLimit:U(T),scaleX:U(M),scaleY:U(D),angle:U(v),flipX:L,flipY:R,opacity:U(A),shadow:l&&l.toObject(),visible:P,backgroundColor:q,fillRule:I,paintFirst:k,globalCompositeOperation:X,skewX:U(Y),skewY:U(it),...n?{clipPath:n}:null};return this.includeDefaultValues?K:this._removeDefaultValues(K)}toDatalessObject(t){return this.toObject(t)}_removeDefaultValues(t){let e=this.constructor.getDefaults(),n=Object.keys(e).length>0?e:Object.getPrototypeOf(this);return Hd(t,(s,r)=>{if(r==="left"||r==="top"||r==="type")return!0;let a=n[r];return s!==a&&!(Array.isArray(s)&&Array.isArray(a)&&s.length===0&&a.length===0)})}toString(){return`#<${this.constructor.type}>`}static _fromObject({type:t,...e},{extraParam:n,...s}={}){return Ua(e,s).then(r=>n?(delete r[n],new this(e[n],r)):new this(r))}static fromObject(t,e){return this._fromObject(t,e)}};N(bn,"stateProperties",g_),N(bn,"cacheProperties",Ln),N(bn,"ownDefaults",y_),N(bn,"type","FabricObject"),N(bn,"colorProperties",[oi,Tn,"backgroundColor"]),N(bn,"customProperties",[]),Dt.setClass(bn),Dt.setClass(bn,"object");var tu=(i,t)=>{var e;let{transform:{target:n}}=t;(e=n.canvas)==null||e.fire(`object:${i}`,{...t,target:n}),n.fire(i,t)},wn=(i,t,e)=>(n,s,r,a)=>{let o=t(n,s,r,a);return o&&tu(i,{...Xd(n,s,r,a),...e}),o};function es(i){return(t,e,n,s)=>{let{target:r,originX:a,originY:o}=e,l=r.getPositionByOrigin(a,o),c=i(t,e,n,s);return r.setPositionByOrigin(l,e.originX,e.originY),c}}var dm=(i,t,e,n)=>(s,r,a,o)=>{let l=Al(r,r.originX,r.originY,a,o)[e],c=ti(r[t]);if(c===0||c>0&&l<0||c<0&&l>0){let{target:h}=r,d=h.strokeWidth/(h.strokeUniform?h[n]:1),u=Kp(r)?2:1,f=h[i],p=Math.abs(l*u/h[n])-d;return h.set(i,Math.max(p,1)),f!==h[i]}return!1},um=dm("width","originX","x","scaleX"),fm=dm("height","originY","y","scaleY"),ld=wn(Na,es(um)),K_=wn(Na,es(fm));function pm(i,t,e,n,s){i.save();let{stroke:r,xSize:a,ySize:o,opName:l}=this.commonRenderProps(i,t,e,s,n),c=a;a>o?i.scale(1,o/a):o>a&&(c=o,i.scale(a/o,1)),i.beginPath(),i.arc(0,0,c/2,0,Vi,!1),i[l](),r&&i.stroke(),i.restore()}function mm(i,t,e,n,s){i.save();let{stroke:r,xSize:a,ySize:o,opName:l}=this.commonRenderProps(i,t,e,s,n),c=a/2,h=o/2;i[`${l}Rect`](-c,-h,a,o),r&&i.strokeRect(-c,-h,a,o),i.restore()}var yi=class{constructor(i){N(this,"visible",!0),N(this,"actionName",Bp),N(this,"angle",0),N(this,"x",0),N(this,"y",0),N(this,"offsetX",0),N(this,"offsetY",0),N(this,"sizeX",0),N(this,"sizeY",0),N(this,"touchSizeX",0),N(this,"touchSizeY",0),N(this,"cursorStyle","crosshair"),N(this,"withConnection",!1),Object.assign(this,i)}getTransformAnchorPoint(){var i;return(i=this.transformAnchorPoint)==null?new z(.5-this.x,.5-this.y):i}shouldActivate(i,t,e,{tl:n,tr:s,br:r,bl:a}){var o;return((o=t.canvas)==null?void 0:o.getActiveObject())===t&&t.isControlVisible(i)&&Ca.isPointInPolygon(e,[n,s,r,a])}getActionHandler(i,t,e){return this.actionHandler}getMouseDownHandler(i,t,e){return this.mouseDownHandler}getMouseUpHandler(i,t,e){return this.mouseUpHandler}cursorStyleHandler(i,t,e,n){return t.cursorStyle}getActionName(i,t,e){return t.actionName}getVisibility(i,t){var e,n;return(e=(n=i._controlsVisibility)==null?void 0:n[t])==null?this.visible:e}setVisibility(i,t,e){this.visible=i}positionHandler(i,t,e,n){return new z(this.x*i.x+this.offsetX,this.y*i.y+this.offsetY).transform(t)}calcCornerCoords(i,t,e,n,s,r){let a=Ml([mr(e,n),As({angle:i}),Ll((s?this.touchSizeX:this.sizeX)||t,(s?this.touchSizeY:this.sizeY)||t)]);return{tl:new z(-.5,-.5).transform(a),tr:new z(.5,-.5).transform(a),br:new z(.5,.5).transform(a),bl:new z(-.5,.5).transform(a)}}commonRenderProps(i,t,e,n,s={}){let{cornerSize:r,cornerColor:a,transparentCorners:o,cornerStrokeColor:l}=s,c=r||n.cornerSize,h=this.sizeX||c,d=this.sizeY||c,u=o===void 0?n.transparentCorners:o,f=u?Tn:oi,p=l||n.cornerStrokeColor,y=!u&&!!p;return i.fillStyle=a||n.cornerColor||"",i.strokeStyle=p||"",i.translate(t,e),i.rotate(Ee(n.getTotalAngle())),{stroke:y,xSize:h,ySize:d,transparentCorners:u,opName:f}}render(i,t,e,n,s){((n=n||{}).cornerStyle||s.cornerStyle)==="circle"?pm.call(this,i,t,e,n,s):mm.call(this,i,t,e,n,s)}},gm=(i,t,e)=>e.lockRotation?Qd:t.cursorStyle,ym=wn(Dp,es((i,{target:t,ex:e,ey:n,theta:s,originX:r,originY:a},o,l)=>{let c=t.getPositionByOrigin(r,a);if($i(t,"lockRotation"))return!1;let h=Math.atan2(n-c.y,e-c.x),d=En(Math.atan2(l-c.y,o-c.x)-h+s);if(t.snapAngle&&t.snapAngle>0){let f=t.snapAngle,p=t.snapThreshold||f,y=Math.ceil(d/f)*f,m=Math.floor(d/f)*f;Math.abs(d-m)<p?d=m:Math.abs(d-y)<p&&(d=y)}d<0&&(d=360+d),d%=360;let u=t.angle!==d;return t.angle=d,u}));function _m(i,t){let e=t.canvas,n=i[e.uniScaleKey];return e.uniformScaling&&!n||!e.uniformScaling&&n}function xm(i,t,e){let n=$i(i,"lockScalingX"),s=$i(i,"lockScalingY");if(n&&s||!t&&(n||s)&&e||n&&t==="x"||s&&t==="y")return!0;let{width:r,height:a,strokeWidth:o}=i;return r===0&&o===0&&t!=="y"||a===0&&o===0&&t!=="x"}var tx=["e","se","s","sw","w","nw","n","ne","e"],er=(i,t,e,n)=>{let s=_m(i,e);return xm(e,t.x!==0&&t.y===0?"x":t.x===0&&t.y!==0?"y":"",s)?Qd:`${tx[tm(e,0,n)]}-resize`};function eu(i,t,e,n,s={}){let r=t.target,a=s.by,o=_m(i,r),l,c,h,d,u,f;if(xm(r,a,o))return!1;if(t.gestureScale)c=t.scaleX*t.gestureScale,h=t.scaleY*t.gestureScale;else{if(l=Al(t,t.originX,t.originY,e,n),u=a==="y"?1:Math.sign(l.x||t.signX||1),f=a==="x"?1:Math.sign(l.y||t.signY||1),t.signX||(t.signX=u),t.signY||(t.signY=f),$i(r,"lockScalingFlip")&&(t.signX!==u||t.signY!==f))return!1;if(d=r._getTransformedDimensions(),o&&!a){let m=Math.abs(l.x)+Math.abs(l.y),{original:g}=t,b=m/(Math.abs(d.x*g.scaleX/r.scaleX)+Math.abs(d.y*g.scaleY/r.scaleY));c=g.scaleX*b,h=g.scaleY*b}else c=Math.abs(l.x*r.scaleX/d.x),h=Math.abs(l.y*r.scaleY/d.y);Kp(t)&&(c*=2,h*=2),t.signX!==u&&a!=="y"&&(t.originX=sp(t.originX),c*=-1,t.signX=u),t.signY!==f&&a!=="x"&&(t.originY=sp(t.originY),h*=-1,t.signY=f)}let p=r.scaleX,y=r.scaleY;return a?(a==="x"&&r.set("scaleX",c),a==="y"&&r.set("scaleY",h)):(!$i(r,"lockScalingX")&&r.set("scaleX",c),!$i(r,"lockScalingY")&&r.set("scaleY",h)),p!==r.scaleX||y!==r.scaleY}var da=wn(El,es((i,t,e,n)=>eu(i,t,e,n))),vm=wn(El,es((i,t,e,n)=>eu(i,t,e,n,{by:"x"}))),bm=wn(El,es((i,t,e,n)=>eu(i,t,e,n,{by:"y"}))),Kh={x:{counterAxis:"y",scale:Kn,skew:fr,lockSkewing:"lockSkewingX",origin:"originX",flip:"flipX"},y:{counterAxis:"x",scale:ts,skew:pr,lockSkewing:"lockSkewingY",origin:"originY",flip:"flipY"}},ex=["ns","nesw","ew","nwse"],Sm=(i,t,e,n)=>t.x!==0&&$i(e,"lockSkewingY")||t.y!==0&&$i(e,"lockSkewingX")?Qd:`${ex[tm(e,0,n)%4]}-resize`;function Tm(i,t,e,n,s){let{target:r}=e,{counterAxis:a,origin:o,lockSkewing:l,skew:c,flip:h}=Kh[i];if($i(r,l))return!1;let{origin:d,flip:u}=Kh[a],f=ti(e[d])*(r[u]?-1:1),p=-Math.sign(f)*(r[h]?-1:1),y=-(r[c]===0&&Al(e,"center","center",n,s)[i]>0||r[c]>0?1:-1)*p*.5+.5;return wn(Ap,es((m,g,b,E)=>(function(x,{target:T,ex:M,ey:D,skewingSide:v,...L},R){let{skew:A}=Kh[x],P=R.subtract(new z(M,D)).divide(new z(T.scaleX,T.scaleY))[x],q=T[A],I=L[A],k=Math.tan(Ee(I)),X=x==="y"?T._getTransformedDimensions({scaleX:1,scaleY:1,skewX:0}).x:T._getTransformedDimensions({scaleX:1,scaleY:1}).y,Y=2*P*v/Math.max(X,1)+k,it=En(Math.atan(Y));T.set(A,it);let U=q!==T[A];if(U&&x==="y"){let{skewX:K,scaleX:tt}=T,Lt=T._getTransformedDimensions({skewY:q}),mt=T._getTransformedDimensions(),Zt=K===0?1:Lt.x/mt.x;Zt!==1&&T.set("scaleX",Zt*tt)}return U})(i,g,new z(b,E))))(t,{...e,[o]:y,skewingSide:p},n,s)}var Em=(i,t,e,n)=>Tm("x",i,t,e,n),Mm=(i,t,e,n)=>Tm("y",i,t,e,n);function Cl(i,t){return i[t.canvas.altActionKey]}var ua=(i,t,e)=>{let n=Cl(i,e);return t.x===0?n?fr:ts:t.y===0?n?pr:Kn:""},Ls=(i,t,e,n)=>Cl(i,e)?Sm(0,t,e,n):er(i,t,e,n),cd=(i,t,e,n)=>Cl(i,t.target)?Mm(i,t,e,n):vm(i,t,e,n),hd=(i,t,e,n)=>Cl(i,t.target)?Em(i,t,e,n):bm(i,t,e,n),iu=()=>({ml:new yi({x:-.5,y:0,cursorStyleHandler:Ls,actionHandler:cd,getActionName:ua}),mr:new yi({x:.5,y:0,cursorStyleHandler:Ls,actionHandler:cd,getActionName:ua}),mb:new yi({x:0,y:.5,cursorStyleHandler:Ls,actionHandler:hd,getActionName:ua}),mt:new yi({x:0,y:-.5,cursorStyleHandler:Ls,actionHandler:hd,getActionName:ua}),tl:new yi({x:-.5,y:-.5,cursorStyleHandler:er,actionHandler:da}),tr:new yi({x:.5,y:-.5,cursorStyleHandler:er,actionHandler:da}),bl:new yi({x:-.5,y:.5,cursorStyleHandler:er,actionHandler:da}),br:new yi({x:.5,y:.5,cursorStyleHandler:er,actionHandler:da}),mtr:new yi({x:0,y:-.5,actionHandler:ym,cursorStyleHandler:gm,offsetY:-40,withConnection:!0,actionName:Rp})}),Lm=()=>({mr:new yi({x:.5,y:0,actionHandler:ld,cursorStyleHandler:Ls,actionName:Na}),ml:new yi({x:-.5,y:0,actionHandler:ld,cursorStyleHandler:Ls,actionName:Na})}),wm=()=>({...iu(),...Lm()}),Dm=class dd extends bn{static getDefaults(){return{...super.getDefaults(),...dd.ownDefaults}}constructor(t){super(),Object.assign(this,this.constructor.createControls(),dd.ownDefaults),this.setOptions(t)}static createControls(){return{controls:iu()}}_updateCacheCanvas(){let t=this.canvas;if(this.noScaleCache&&t&&t._currentTransform){let e=t._currentTransform,n=e.target,s=e.action;if(this===n&&s&&s.startsWith("scale"))return!1}return super._updateCacheCanvas()}getActiveControl(){let t=this.__corner;return t?{key:t,control:this.controls[t],coord:this.oCoords[t]}:void 0}findControl(t,e=!1){if(!this.hasControls||!this.canvas)return;this.__corner=void 0;let n=Object.entries(this.oCoords);for(let s=n.length-1;s>=0;s--){let[r,a]=n[s],o=this.controls[r];if(o.shouldActivate(r,this,t,e?a.touchCorner:a.corner))return this.__corner=r,{key:r,control:o,coord:this.oCoords[r]}}}calcOCoords(){let t=this.getViewportTransform(),e=Pd(t),n=kp(t),s=this.getCenterPoint(),r=Le(Le(t,Le(mr(s.x,s.y),As({angle:this.getTotalAngle()-(this.group&&this.flipX?180:0)}))),[1/e,0,0,1/n,0,0]),a=this.group?or(this.calcTransformMatrix()):void 0;a&&(a.scaleX=Math.abs(a.scaleX),a.scaleY=Math.abs(a.scaleY));let o=this._calculateCurrentDimensions(a),l={};return this.forEachControl((c,h)=>{let d=c.positionHandler(o,r,this,c);l[h]=Object.assign(d,this._calcCornerCoords(c,d))}),l}_calcCornerCoords(t,e){let n=this.getTotalAngle();return{corner:t.calcCornerCoords(n,this.cornerSize,e.x,e.y,!1,this),touchCorner:t.calcCornerCoords(n,this.touchCornerSize,e.x,e.y,!0,this)}}setCoords(){super.setCoords(),this.canvas&&(this.oCoords=this.calcOCoords())}forEachControl(t){for(let e in this.controls)t(this.controls[e],e,this)}drawSelectionBackground(t){if(!this.selectionBackgroundColor||this.canvas&&this.canvas._activeObject!==this)return;t.save();let e=this.getRelativeCenterPoint(),n=this._calculateCurrentDimensions(),s=this.getViewportTransform();t.translate(e.x,e.y),t.scale(1/s[0],1/s[3]),t.rotate(Ee(this.angle)),t.fillStyle=this.selectionBackgroundColor,t.fillRect(-n.x/2,-n.y/2,n.x,n.y),t.restore()}strokeBorders(t,e){t.strokeRect(-e.x/2,-e.y/2,e.x,e.y)}_drawBorders(t,e,n={}){let s={hasControls:this.hasControls,borderColor:this.borderColor,borderDashArray:this.borderDashArray,...n};t.save(),t.strokeStyle=s.borderColor,this._setLineDash(t,s.borderDashArray),this.strokeBorders(t,e),s.hasControls&&this.drawControlsConnectingLines(t,e),t.restore()}_renderControls(t,e={}){let{hasBorders:n,hasControls:s}=this,r={hasBorders:n,hasControls:s,...e},a=this.getViewportTransform(),o=r.hasBorders,l=r.hasControls,c=or(Le(a,this.calcTransformMatrix()));t.save(),t.translate(c.translateX,c.translateY),t.lineWidth=this.borderScaleFactor,this.group===this.parent&&(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.flipX&&(c.angle-=180);let h=Od(a);t.rotate(this.group?Ee(c.angle):Ee(this.angle)+h),o&&this.drawBorders(t,c,e),l&&this.drawControls(t,e),t.restore()}drawBorders(t,e,n){let s;if(n&&n.forActiveSelection||this.group){let r=Dl(this.width,this.height,Ha(e)),a=this.isStrokeAccountedForInDimensions()?Fd:(this.strokeUniform?new z().scalarAdd(this.canvas?this.canvas.getZoom():1):new z(e.scaleX,e.scaleY)).scalarMultiply(this.strokeWidth);s=r.add(a).scalarAdd(this.borderScaleFactor).scalarAdd(2*this.padding)}else s=this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);this._drawBorders(t,s,n)}drawControlsConnectingLines(t,e){let n=!1;t.beginPath(),this.forEachControl((s,r)=>{s.withConnection&&s.getVisibility(this,r)&&(n=!0,t.moveTo(s.x*e.x,s.y*e.y),t.lineTo(s.x*e.x+s.offsetX,s.y*e.y+s.offsetY))}),n&&t.stroke()}drawControls(t,e={}){t.save();let n=this.getCanvasRetinaScaling(),{cornerStrokeColor:s,cornerDashArray:r,cornerColor:a}=this,o={cornerStrokeColor:s,cornerDashArray:r,cornerColor:a,...e};t.setTransform(n,0,0,n,0,0),t.strokeStyle=t.fillStyle=o.cornerColor,this.transparentCorners||(t.strokeStyle=o.cornerStrokeColor),this._setLineDash(t,o.cornerDashArray),this.forEachControl((l,c)=>{if(l.getVisibility(this,c)){let h=this.oCoords[c];l.render(t,h.x,h.y,o,this)}}),t.restore()}isControlVisible(t){return this.controls[t]&&this.controls[t].getVisibility(this,t)}setControlVisible(t,e){this._controlsVisibility||(this._controlsVisibility={}),this._controlsVisibility[t]=e}setControlsVisibility(t={}){Object.entries(t).forEach(([e,n])=>this.setControlVisible(e,n))}clearContextTop(t){if(!this.canvas)return;let e=this.canvas.contextTop;if(!e)return;let n=this.canvas.viewportTransform;e.save(),e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.transform(e);let s=this.width+4,r=this.height+4;return e.clearRect(-s/2,-r/2,s,r),t||e.restore(),e}onDeselect(t){return!1}onSelect(t){return!1}shouldStartDragging(t){return!1}onDragStart(t){return!1}canDrop(t){return!1}renderDragSourceEffect(t){}renderDropTargetEffect(t){}};function Rm(i,t){return t.forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(i.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n)||Object.create(null))})}),i}N(Dm,"ownDefaults",{noScaleCache:!0,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,cornerSize:13,touchCornerSize:24,transparentCorners:!0,cornerColor:"rgb(178,204,255)",cornerStrokeColor:"",cornerStyle:"rect",cornerDashArray:null,hasControls:!0,borderColor:"rgb(178,204,255)",borderDashArray:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,hasBorders:!0,selectionBackgroundColor:"",selectable:!0,evented:!0,perPixelTargetFind:!1,activeOn:"down",hoverCursor:null,moveCursor:null});var Xe=class extends Dm{};Rm(Xe,[im]),Dt.setClass(Xe),Dt.setClass(Xe,"object");var Am=(i,t,e,n)=>{let s=2*(n=Math.round(n))+1,{data:r}=i.getImageData(t-n,e-n,s,s);for(let a=3;a<r.length;a+=4)if(r[a]>0)return!1;return!0},Im=class{constructor(i){this.options=i,this.strokeProjectionMagnitude=this.options.strokeWidth/2,this.scale=new z(this.options.scaleX,this.options.scaleY),this.strokeUniformScalar=this.options.strokeUniform?new z(1/this.options.scaleX,1/this.options.scaleY):new z(1,1)}createSideVector(i,t){let e=Oa(i,t);return this.options.strokeUniform?e.multiply(this.scale):e}projectOrthogonally(i,t,e){return this.applySkew(i.add(this.calcOrthogonalProjection(i,t,e)))}isSkewed(){return this.options.skewX!==0||this.options.skewY!==0}applySkew(i){let t=new z(i);return t.y+=t.x*Math.tan(Ee(this.options.skewY)),t.x+=t.y*Math.tan(Ee(this.options.skewX)),t}scaleUnitVector(i,t){return i.multiply(this.strokeUniformScalar).scalarMultiply(t)}},ix=new z,Bm=class fl extends Im{static getOrthogonalRotationFactor(t,e){let n=e?xl(t,e):Jd(t);return Math.abs(n)<Zn?-1:1}constructor(t,e,n,s){super(s),N(this,"AB",void 0),N(this,"AC",void 0),N(this,"alpha",void 0),N(this,"bisector",void 0),this.A=new z(t),this.B=new z(e),this.C=new z(n),this.AB=this.createSideVector(this.A,this.B),this.AC=this.createSideVector(this.A,this.C),this.alpha=xl(this.AB,this.AC),this.bisector=Rl(Gd(this.AB.eq(ix)?this.AC:this.AB,this.alpha/2))}calcOrthogonalProjection(t,e,n=this.strokeProjectionMagnitude){let s=Yd(this.createSideVector(t,e)),r=fl.getOrthogonalRotationFactor(s,this.bisector);return this.scaleUnitVector(s,n*r)}projectBevel(){let t=[];return(this.alpha%Vi===0?[this.B]:[this.B,this.C]).forEach(e=>{t.push(this.projectOrthogonally(this.A,e)),t.push(this.projectOrthogonally(this.A,e,-this.strokeProjectionMagnitude))}),t}projectMiter(){let t=[],e=Math.abs(this.alpha),n=1/Math.sin(e/2),s=this.scaleUnitVector(this.bisector,-this.strokeProjectionMagnitude*n),r=this.options.strokeUniform?_l(this.scaleUnitVector(this.bisector,this.options.strokeMiterLimit)):this.options.strokeMiterLimit;return _l(s)/this.strokeProjectionMagnitude<=r&&t.push(this.applySkew(this.A.add(s))),t.push(...this.projectBevel()),t}projectRoundNoSkew(t,e){let n=[],s=new z(fl.getOrthogonalRotationFactor(this.bisector),fl.getOrthogonalRotationFactor(new z(this.bisector.y,this.bisector.x)));return[new z(1,0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(s),new z(0,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(s)].forEach(r=>{od(r,t,e)&&n.push(this.A.add(r))}),n}projectRoundWithSkew(t,e){let n=[],{skewX:s,skewY:r,scaleX:a,scaleY:o,strokeUniform:l}=this.options,c=new z(Math.tan(Ee(s)),Math.tan(Ee(r))),h=this.strokeProjectionMagnitude,d=l?h/o/Math.sqrt(1/o**2+1/a**2*c.y**2):h/Math.sqrt(1+c.y**2),u=new z(Math.sqrt(Math.max(h**2-d**2,0)),d),f=l?h/Math.sqrt(1+c.x**2*(1/o)**2/(1/a+1/a*c.x*c.y)**2):h/Math.sqrt(1+c.x**2/(1+c.x*c.y)**2),p=new z(f,Math.sqrt(Math.max(h**2-f**2,0)));return[p,p.scalarMultiply(-1),u,u.scalarMultiply(-1)].map(y=>this.applySkew(l?y.multiply(this.strokeUniformScalar):y)).forEach(y=>{od(y,t,e)&&n.push(this.applySkew(this.A).add(y))}),n}projectRound(){let t=[];t.push(...this.projectBevel());let e=this.alpha%Vi===0,n=this.applySkew(this.A),s=t[e?0:2].subtract(n),r=t[+!!e].subtract(n),a=sr(s,e?this.applySkew(this.AB.scalarMultiply(-1)):this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)))>0,o=a?s:r,l=a?r:s;return this.isSkewed()?t.push(...this.projectRoundWithSkew(o,l)):t.push(...this.projectRoundNoSkew(o,l)),t}projectPoints(){switch(this.options.strokeLineJoin){case"miter":return this.projectMiter();case"round":return this.projectRound();default:return this.projectBevel()}}project(){return this.projectPoints().map(t=>({originPoint:this.A,projectedPoint:t,angle:this.alpha,bisector:this.bisector}))}},pp=class extends Im{constructor(i,t,e){super(e),this.A=new z(i),this.T=new z(t)}calcOrthogonalProjection(i,t,e=this.strokeProjectionMagnitude){let n=this.createSideVector(i,t);return this.scaleUnitVector(Yd(n),e)}projectButt(){return[this.projectOrthogonally(this.A,this.T,this.strokeProjectionMagnitude),this.projectOrthogonally(this.A,this.T,-this.strokeProjectionMagnitude)]}projectRound(){let i=[];if(!this.isSkewed()&&this.A.eq(this.T)){let t=new z(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);i.push(this.applySkew(this.A.add(t)),this.applySkew(this.A.subtract(t)))}else i.push(...new Bm(this.A,this.T,this.T,this.options).projectRound());return i}projectSquare(){let i=[];if(this.A.eq(this.T)){let t=new z(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);i.push(this.A.add(t),this.A.subtract(t))}else{let t=this.calcOrthogonalProjection(this.A,this.T,this.strokeProjectionMagnitude),e=this.scaleUnitVector(Rl(this.createSideVector(this.A,this.T)),-this.strokeProjectionMagnitude),n=this.A.add(e);i.push(n.add(t),n.subtract(t))}return i.map(t=>this.applySkew(t))}projectPoints(){switch(this.options.strokeLineCap){case"round":return this.projectRound();case"square":return this.projectSquare();default:return this.projectButt()}}project(){return this.projectPoints().map(i=>({originPoint:this.A,projectedPoint:i}))}},Fm=(i,t,e=!1)=>{let n=[];if(i.length===0)return n;let s=i.reduce((r,a)=>(r[r.length-1].eq(a)||r.push(new z(a)),r),[new z(i[0])]);if(s.length===1)e=!0;else if(!e){let r=s[0],a=((o,l)=>{for(let c=o.length-1;c>=0;c--)if(l(o[c],c,o))return c;return-1})(s,o=>!o.eq(r));s.splice(a+1)}return s.forEach((r,a,o)=>{let l,c;a===0?(c=o[1],l=e?r:o[o.length-1]):a===o.length-1?(l=o[a-1],c=e?r:o[0]):(l=o[a-1],c=o[a+1]),e&&o.length===1?n.push(...new pp(r,r,t).project()):!e||a!==0&&a!==o.length-1?n.push(...new Bm(r,l,c,t).project()):n.push(...new pp(r,a===0?c:l,t).project())}),n},nu=i=>{let t={};return Object.keys(i).forEach(e=>{t[e]={},Object.keys(i[e]).forEach(n=>{t[e][n]={...i[e][n]}})}),t},Nl=(i,t,e=!1)=>i.fill!==t.fill||i.stroke!==t.stroke||i.strokeWidth!==t.strokeWidth||i.fontSize!==t.fontSize||i.fontFamily!==t.fontFamily||i.fontWeight!==t.fontWeight||i.fontStyle!==t.fontStyle||i.textDecorationThickness!==t.textDecorationThickness||i.textDecorationColor!==t.textDecorationColor||i.textBackgroundColor!==t.textBackgroundColor||i.deltaY!==t.deltaY||e&&(i.overline!==t.overline||i.underline!==t.underline||i.linethrough!==t.linethrough),Cm=(i,t)=>{let e=t.split(`
`),n=[],s=-1,r={};i=nu(i);for(let a=0;a<e.length;a++){let o=wl(e[a]);if(i[a])for(let l=0;l<o.length;l++){s++;let c=i[a][l];c&&Object.keys(c).length>0&&(Nl(r,c,!0)?n.push({start:s,end:s+1,style:c}):n[n.length-1].end++),r=c||{}}else s+=o.length,r={}}return n},Nm=(i,t)=>{if(!Array.isArray(i))return nu(i);let e=t.split(Bd),n={},s=-1,r=0;for(let a=0;a<e.length;a++){let o=wl(e[a]);for(let l=0;l<o.length;l++)s++,i[r]&&i[r].start<=s&&s<i[r].end&&(n[a]=n[a]||{},n[a][l]={...i[r].style},s===i[r].end-1&&r++)}return n},is=["display","transform",oi,"fill-opacity","fill-rule","opacity",Tn,"stroke-dasharray","stroke-linecap","stroke-dashoffset","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id","paint-order","vector-effect","instantiated_by_use","clip-path"];function mp(i,t){let e=i.nodeName,n=i.getAttribute("class"),s=i.getAttribute("id"),r="(?![a-zA-Z\\-]+)",a;if(a=RegExp("^"+e,"i"),t=t.replace(a,""),s&&t.length&&(a=RegExp("#"+s+r,"i"),t=t.replace(a,"")),n&&t.length){let o=n.split(" ");for(let l=o.length;l--;)a=RegExp("\\."+o[l]+r,"i"),t=t.replace(a,"")}return t.length===0}function nx(i,t){let e=!0,n=mp(i,t.pop());return n&&t.length&&(e=(function(s,r){let a,o=!0;for(;s.parentElement&&s.parentElement.nodeType===1&&r.length;)o&&(a=r.pop()),o=mp(s=s.parentElement,a);return r.length===0})(i,t)),n&&e&&t.length===0}function sx(i,t={}){let e={};for(let n in t)nx(i,n.split(" "))&&(e={...e,...t[n]});return e}var rx=i=>{var t;return(t=m_[i])==null?i:t},ax=RegExp(`(${Hi})`,"gi"),ei=`(${Hi})`,ox=String.raw`(skewX)\(${ei}\)`,lx=String.raw`(skewY)\(${ei}\)`,cx=String.raw`(rotate)\(${ei}(?: ${ei} ${ei})?\)`,hx=String.raw`(scale)\(${ei}(?: ${ei})?\)`,dx=String.raw`(translate)\(${ei}(?: ${ei})?\)`,su=`(?:${String.raw`(matrix)\(${ei} ${ei} ${ei} ${ei} ${ei} ${ei}\)`}|${dx}|${cx}|${hx}|${ox}|${lx})`,ux=`(?:${su}*)`,fx=String.raw`^\s*(?:${ux}?)\s*$`,px=new RegExp(fx),mx=new RegExp(su),gx=new RegExp(su,"g");function ud(i){let t=[];if(!(i=(e=>vl(e.replace(ax," $1 ").replace(/,/gi," ")))(i).replace(/\s*([()])\s*/gi,"$1"))||i&&!px.test(i))return[...ii];for(let e of i.matchAll(gx)){let n=mx.exec(e[0]);if(!n)continue;let s=ii,[,r,...a]=n.filter(f=>!!f),[o,l,c,h,d,u]=a.map(f=>parseFloat(f));switch(r){case"translate":s=mr(o,l);break;case Rp:s=As({angle:o},{x:l,y:c});break;case Bp:s=Ll(o,l);break;case fr:s=qd(o);break;case pr:s=kd(o);break;case"matrix":s=[o,l,c,h,d,u]}t.push(s)}return Ml(t)}function yx(i,t,e,n){let s=Array.isArray(t),r,a=t;if(i!=="fill"&&i!=="stroke"||t!=="none"){if(i==="strokeUniform")return t==="non-scaling-stroke";if(i==="strokeDashArray")a=t==="none"?null:t.replace(/,/g," ").split(/\s+/).map(parseFloat);else if(i==="transformMatrix")a=e&&e.transformMatrix?Le(e.transformMatrix,ud(t)):ud(t);else if(i==="visible")a=t!=="none"&&t!=="hidden",e&&e.visible===!1&&(a=!1);else if(i==="opacity")a=parseFloat(t),e&&e.opacity!==void 0&&(a*=e.opacity);else if(i==="textAnchor")a=t==="start"?Oe:t==="end"?Ui:ye;else if(i==="charSpacing"||i==="textDecorationThickness")r=Ds(t,n)/n*1e3;else if(i==="paintFirst"){let o=t.indexOf(oi),l=t.indexOf(Tn);a=oi,(o>-1&&l>-1&&l<o||o===-1&&l>-1)&&(a=Tn)}else{if(i==="href"||i==="xlink:href"||i==="font"||i==="id")return t;if(i==="imageSmoothing")return t==="optimizeQuality";r=s?t.map(Ds):Ds(t,n)}}else a="";return!s&&isNaN(r)?a:r}function _x(i,t){i.replace(/;\s*$/,"").split(";").forEach(e=>{if(!e)return;let[n,s]=e.split(":");t[n.trim().toLowerCase()]=s.trim()})}function xx(i){let t={},e=i.getAttribute("style");return e&&(typeof e=="string"?_x(e,t):(function(n,s){Object.entries(n).forEach(([r,a])=>{a!==void 0&&(s[r.toLowerCase()]=a)})})(e,t)),t}var vx={stroke:"strokeOpacity",fill:"fillOpacity"};function Dn(i,t,e){if(!i)return{};let n,s={},r=16;i.parentNode&&dp.test(i.parentNode.nodeName)&&(s=Dn(i.parentElement,t,e),s.fontSize&&(n=r=Ds(s.fontSize)));let a={...t.reduce((c,h)=>{let d=i.getAttribute(h);return d&&(c[h]=d),c},{}),...sx(i,e),...xx(i)};a["clip-path"]&&i.setAttribute(hp,a[hp]),a["font-size"]&&(n=Ds(a[cp],r),a[cp]=`${n}`);let o={};for(let c in a){let h=rx(c);o[h]=yx(h,a[c],s,n)}o&&o.font&&(function(c,h){let d=c.match(p_);if(!d)return;let u=d[1],f=d[3],p=d[4],y=d[5],m=d[6];u&&(h.fontStyle=u),f&&(h.fontWeight=isNaN(parseFloat(f))?f:parseFloat(f)),p&&(h.fontSize=Ds(p)),m&&(h.fontFamily=m),y&&(h.lineHeight=y==="normal"?1:y)})(o.font,o);let l={...s,...o};return dp.test(i.nodeName)?l:(function(c){let h=Xe.getDefaults();return Object.entries(vx).forEach(([d,u])=>{if(c[u]===void 0||c[d]==="")return;if(c[d]===void 0){if(!h[d])return;c[d]=h[d]}if(c[d].indexOf("url(")===0)return;let f=new bi(c[d]);c[d]=f.setAlpha(ge(f.getAlpha()*c[u],2)).toRgba()}),c})(l)}var Om=["rx","ry"],Sn=class fd extends Xe{static getDefaults(){return{...super.getDefaults(),...fd.ownDefaults}}constructor(t){super(),Object.assign(this,fd.ownDefaults),this.setOptions(t),this._initRxRy()}_initRxRy(){let{rx:t,ry:e}=this;t&&!e?this.ry=t:e&&!t&&(this.rx=e)}_render(t){let{width:e,height:n}=this,s=-e/2,r=-n/2,a=this.rx?Math.min(this.rx,e/2):0,o=this.ry?Math.min(this.ry,n/2):0,l=a!==0||o!==0;t.beginPath(),t.moveTo(s+a,r),t.lineTo(s+e-a,r),l&&t.bezierCurveTo(s+e-.4477152502*a,r,s+e,r+.4477152502*o,s+e,r+o),t.lineTo(s+e,r+n-o),l&&t.bezierCurveTo(s+e,r+n-.4477152502*o,s+e-.4477152502*a,r+n,s+e-a,r+n),t.lineTo(s+a,r+n),l&&t.bezierCurveTo(s+.4477152502*a,r+n,s,r+n-.4477152502*o,s,r+n-o),t.lineTo(s,r+o),l&&t.bezierCurveTo(s,r+.4477152502*o,s+.4477152502*a,r,s+a,r),t.closePath(),this._renderPaintInOrder(t)}toObject(t=[]){return super.toObject([...Om,...t])}_toSVG(){let{width:t,height:e,rx:n,ry:s}=this;return["<rect ","COMMON_PARTS",`x="${-t/2}" y="${-e/2}" rx="${te(n)}" ry="${te(s)}" width="${te(t)}" height="${te(e)}" />
`]}static async fromElement(t,e,n){let{left:s=0,top:r=0,width:a=0,height:o=0,visible:l=!0,...c}=Dn(t,this.ATTRIBUTE_NAMES,n);return new this({...e,...c,left:s,top:r,width:a,height:o,visible:!!(l&&a&&o)})}};N(Sn,"type","Rect"),N(Sn,"cacheProperties",[...Ln,...Om]),N(Sn,"ownDefaults",{rx:0,ry:0}),N(Sn,"ATTRIBUTE_NAMES",[...is,"x","y","rx","ry","width","height"]),Dt.setClass(Sn),Dt.setSVGClass(Sn);var gp="initialization",pd="added",Pm=(i,t)=>{let{strokeUniform:e,strokeWidth:n,width:s,height:r,group:a}=t,o=a&&a!==i?$a(a.calcTransformMatrix(),i.calcTransformMatrix()):null,l=o?t.getRelativeCenterPoint().transform(o):t.getRelativeCenterPoint(),c=!t.isStrokeAccountedForInDimensions(),h=e&&c?zp(new z(n,n),void 0,i.calcTransformMatrix()):Fd,d=!e&&c?n:0,u=Dl(s+d,r+d,Ml([o,t.calcOwnMatrix()],!0)).add(h).scalarDivide(2);return[l.subtract(u),l.add(u)]},Ol=class{calcLayoutResult(i,t){if(this.shouldPerformLayout(i))return this.calcBoundingBox(t,i)}shouldPerformLayout({type:i,prevStrategy:t,strategy:e}){return i==="initialization"||i==="imperative"||!!t&&e!==t}shouldLayoutClipPath({type:i,target:{clipPath:t}}){return i!=="initialization"&&t&&!t.absolutePositioned}getInitialSize(i,t){return t.size}calcBoundingBox(i,t){let{type:e,target:n}=t;if(e==="imperative"&&t.overrides)return t.overrides;if(i.length===0)return;let{left:s,top:r,width:a,height:o}=ln(i.map(h=>Pm(n,h)).reduce((h,d)=>h.concat(d),[])),l=new z(a,o),c=new z(s,r).add(l.scalarDivide(2));if(e==="initialization"){let h=this.getInitialSize(t,{size:l,center:c});return{center:c,relativeCorrection:new z(0,0),size:h}}return{center:c.transform(n.calcOwnMatrix()),size:l}}};N(Ol,"type","strategy");var md=class extends Ol{shouldPerformLayout(i){return!0}};N(md,"type","fit-content"),Dt.setClass(md);var qm="layoutManager",qa=class{constructor(i=new md){N(this,"strategy",void 0),this.strategy=i,this._subscriptions=new Map}performLayout(i){let t={bubbles:!0,strategy:this.strategy,...i,prevStrategy:this._prevLayoutStrategy,stopPropagation(){this.bubbles=!1}};this.onBeforeLayout(t);let e=this.getLayoutResult(t);e&&this.commitLayout(t,e),this.onAfterLayout(t,e),this._prevLayoutStrategy=t.strategy}attachHandlers(i,t){let{target:e}=t;return[Fp,wp,Na,Dp,El,Ap,ml,Ip,"modifyPath"].map(n=>i.on(n,s=>this.performLayout(n==="modified"?{type:"object_modified",trigger:n,e:s,target:e}:{type:"object_modifying",trigger:n,e:s,target:e})))}subscribe(i,t){this.unsubscribe(i,t);let e=this.attachHandlers(i,t);this._subscriptions.set(i,e)}unsubscribe(i,t){(this._subscriptions.get(i)||[]).forEach(e=>e()),this._subscriptions.delete(i)}unsubscribeTargets(i){i.targets.forEach(t=>this.unsubscribe(t,i))}subscribeTargets(i){i.targets.forEach(t=>this.subscribe(t,i))}onBeforeLayout(i){let{target:t,type:e}=i,{canvas:n}=t;if(e==="initialization"||e==="added"?this.subscribeTargets(i):e==="removed"&&this.unsubscribeTargets(i),t.fire("layout:before",{context:i}),n&&n.fire("object:layout:before",{target:t,context:i}),e==="imperative"&&i.deep){let{strategy:s,...r}=i;t.forEachObject(a=>a.layoutManager&&a.layoutManager.performLayout({...r,bubbles:!1,target:a}))}}getLayoutResult(i){let{target:t,strategy:e,type:n}=i,s=e.calcLayoutResult(i,t.getObjects());if(!s)return;let r=n==="initialization"?new z:t.getRelativeCenterPoint(),{center:a,correction:o=new z,relativeCorrection:l=new z}=s;return{result:s,prevCenter:r,nextCenter:a,offset:r.subtract(a).add(o).transform(n==="initialization"?ii:xi(t.calcOwnMatrix()),!0).add(l)}}commitLayout(i,t){let{target:e}=i,{result:{size:n},nextCenter:s}=t;var r,a;e.set({width:n.x,height:n.y}),this.layoutObjects(i,t),i.type==="initialization"?e.set({left:(r=i.x)==null?s.x+n.x*ti(e.originX):r,top:(a=i.y)==null?s.y+n.y*ti(e.originY):a}):(e.setPositionByOrigin(s,ye,ye),e.setCoords(),e.set("dirty",!0))}layoutObjects(i,t){let{target:e}=i;e.forEachObject(n=>{n.group===e&&this.layoutObject(i,t,n)}),i.strategy.shouldLayoutClipPath(i)&&this.layoutObject(i,t,e.clipPath)}layoutObject(i,{offset:t},e){e.set({left:e.left+t.x,top:e.top+t.y})}onAfterLayout(i,t){let{target:e,strategy:n,bubbles:s,prevStrategy:r,...a}=i,{canvas:o}=e;e.fire("layout:after",{context:i,result:t}),o&&o.fire("object:layout:after",{context:i,result:t,target:e});let l=e.parent;s&&l!=null&&l.layoutManager&&((a.path||(a.path=[])).push(e),l.layoutManager.performLayout({...a,target:l})),e.set("dirty",!0)}dispose(){let{_subscriptions:i}=this;i.forEach(t=>t.forEach(e=>e())),i.clear()}toObject(){return{type:qm,strategy:this.strategy.constructor.type}}toJSON(){return this.toObject()}};Dt.setClass(qa,qm);var bx=class extends qa{performLayout(){}},rr=class gd extends Cp(Xe){static getDefaults(){return{...super.getDefaults(),...gd.ownDefaults}}constructor(t=[],e={}){super(),N(this,"_activeObjects",[]),N(this,"__objectSelectionTracker",void 0),N(this,"__objectSelectionDisposer",void 0),Object.assign(this,gd.ownDefaults),this.setOptions(e),this.groupInit(t,e)}groupInit(t,e){var n;this._objects=[...t],this.__objectSelectionTracker=this.__objectSelectionMonitor.bind(this,!0),this.__objectSelectionDisposer=this.__objectSelectionMonitor.bind(this,!1),this.forEachObject(s=>{this.enterGroup(s,!1)}),this.layoutManager=(n=e.layoutManager)==null?new qa:n,this.layoutManager.performLayout({type:gp,target:this,targets:[...t],x:e.left,y:e.top})}canEnterGroup(t){return t===this||this.isDescendantOf(t)?(zn("error","Group: circular object trees are not supported, this call has no effect"),!1):this._objects.indexOf(t)===-1||(zn("error","Group: duplicate objects are not supported inside group, this call has no effect"),!1)}_filterObjectsBeforeEnteringGroup(t){return t.filter((e,n,s)=>this.canEnterGroup(e)&&s.indexOf(e)===n)}add(...t){let e=this._filterObjectsBeforeEnteringGroup(t),n=super.add(...e);return this._onAfterObjectsChange(pd,e),n}insertAt(t,...e){let n=this._filterObjectsBeforeEnteringGroup(e),s=super.insertAt(t,...n);return this._onAfterObjectsChange(pd,n),s}remove(...t){let e=super.remove(...t);return this._onAfterObjectsChange("removed",e),e}_onObjectAdded(t){this.enterGroup(t,!0),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t,e){this.exitGroup(t,e),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onAfterObjectsChange(t,e){this.layoutManager.performLayout({type:t,targets:e,target:this})}_onStackOrderChanged(){this._set("dirty",!0)}_set(t,e){let n=this[t];return super._set(t,e),t==="canvas"&&n!==e&&(this._objects||[]).forEach(s=>{s._set(t,e)}),this}_shouldSetNestedCoords(){return this.subTargetCheck}removeAll(){return this._activeObjects=[],this.remove(...this._objects)}__objectSelectionMonitor(t,{target:e}){let n=this._activeObjects;if(t)n.push(e),this._set("dirty",!0);else if(n.length>0){let s=n.indexOf(e);s>-1&&(n.splice(s,1),this._set("dirty",!0))}}_watchObject(t,e){t&&this._watchObject(!1,e),t?(e.on("selected",this.__objectSelectionTracker),e.on("deselected",this.__objectSelectionDisposer)):(e.off("selected",this.__objectSelectionTracker),e.off("deselected",this.__objectSelectionDisposer))}enterGroup(t,e){t.group&&t.group.remove(t),t._set("parent",this),this._enterGroup(t,e)}_enterGroup(t,e){e&&hr(t,Le(xi(this.calcTransformMatrix()),t.calcTransformMatrix())),this._shouldSetNestedCoords()&&t.setCoords(),t._set("group",this),t._set("canvas",this.canvas),this._watchObject(!0,t);let n=this.canvas&&this.canvas.getActiveObject&&this.canvas.getActiveObject();n&&(n===t||t.isDescendantOf(n))&&this._activeObjects.push(t)}exitGroup(t,e){this._exitGroup(t,e),t._set("parent",void 0),t._set("canvas",void 0)}_exitGroup(t,e){t._set("group",void 0),e||(hr(t,Le(this.calcTransformMatrix(),t.calcTransformMatrix())),t.setCoords()),this._watchObject(!1,t);let n=this._activeObjects.length>0?this._activeObjects.indexOf(t):-1;n>-1&&this._activeObjects.splice(n,1)}shouldCache(){let t=Xe.prototype.shouldCache.call(this);if(t){for(let e=0;e<this._objects.length;e++)if(this._objects[e].willDrawShadow())return this.ownCaching=!1,!1}return t}willDrawShadow(){if(super.willDrawShadow())return!0;for(let t=0;t<this._objects.length;t++)if(this._objects[t].willDrawShadow())return!0;return!1}isOnACache(){return this.ownCaching||!!this.parent&&this.parent.isOnACache()}drawObject(t,e,n){this._renderBackground(t);for(let r=0;r<this._objects.length;r++){var s;let a=this._objects[r];(s=this.canvas)!=null&&s.preserveObjectStacking&&a.group!==this?(t.save(),t.transform(...xi(this.calcTransformMatrix())),a.render(t),t.restore()):a.group===this&&a.render(t)}this._drawClipPath(t,this.clipPath,n)}setCoords(){super.setCoords(),this._shouldSetNestedCoords()&&this.forEachObject(t=>t.setCoords())}triggerLayout(t={}){this.layoutManager.performLayout({target:this,type:"imperative",...t})}render(t){this._transformDone=!0,super.render(t),this._transformDone=!1}__serializeObjects(t,e){let n=this.includeDefaultValues;return this._objects.filter(function(s){return!s.excludeFromExport}).map(function(s){let r=s.includeDefaultValues;s.includeDefaultValues=n;let a=s[t||"toObject"](e);return s.includeDefaultValues=r,a})}toObject(t=[]){let e=this.layoutManager.toObject();return{...super.toObject(["subTargetCheck","interactive",...t]),...e.strategy!=="fit-content"||this.includeDefaultValues?{layoutManager:e}:{},objects:this.__serializeObjects("toObject",t)}}toString(){return`#<Group: (${this.complexity()})>`}dispose(){this.layoutManager.unsubscribeTargets({targets:this.getObjects(),target:this}),this._activeObjects=[],this.forEachObject(t=>{this._watchObject(!1,t),t.dispose()}),super.dispose()}_createSVGBgRect(t){if(!this.backgroundColor)return"";let e=Sn.prototype._toSVG.call(this),n=e.indexOf("COMMON_PARTS");e[n]='for="group" ';let s=e.join("");return t?t(s):s}_toSVG(t){let e=["<g ","COMMON_PARTS",` >
`],n=this._createSVGBgRect(t);n&&e.push("		",n);for(let s=0;s<this._objects.length;s++)e.push("		",this._objects[s].toSVG(t));return e.push(`</g>
`),e}getSvgStyles(){let t=this.opacity!==void 0&&this.opacity!==1?`opacity: ${te(this.opacity)};`:"",e=this.visible?"":" visibility: hidden;";return[t,this.getSvgFilter(),e].join("")}toClipPathSVG(t){let e=[],n=this._createSVGBgRect(t);n&&e.push("	",n);for(let s=0;s<this._objects.length;s++)e.push("	",this._objects[s].toClipPathSVG(t));return this._createBaseClipPathSVGMarkup(e,{reviver:t})}static fromObject({type:t,objects:e=[],layoutManager:n,...s},r){return Promise.all([lr(e,r),Ua(s,r)]).then(([a,o])=>{let l=new this(a,{...s,...o,layoutManager:new bx});return l.layoutManager=n?new(Dt.getClass(n.type))(new(Dt.getClass(n.strategy))):new qa,l.layoutManager.subscribeTargets({type:gp,target:l,targets:l.getObjects()}),l.setCoords(),l})}};N(rr,"type","Group"),N(rr,"ownDefaults",{strokeWidth:0,subTargetCheck:!1,interactive:!1}),Dt.setClass(rr);var Sx=(i,t)=>i&&i.length===1?i[0]:new rr(i,t),km=(i,t)=>Math.min(t.width/i.width,t.height/i.height),Hm=(i,t)=>Math.max(t.width/i.width,t.height/i.height),yd="\\s*,?\\s*",ca=`${yd}(${Hi})`,Tx=`${ca}${ca}${ca}${yd}([01])${yd}([01])${ca}${ca}`,Ex={m:"l",M:"L"},Mx=(i,t,e,n,s,r,a,o,l,c,h)=>{let d=Gi(i),u=Ji(i),f=Gi(t),p=Ji(t),y=e*s*f-n*r*p+a,m=n*s*f+e*r*p+o;return["C",c+l*(-e*s*u-n*r*d),h+l*(-n*s*u+e*r*d),y+l*(e*s*p+n*r*f),m+l*(n*s*p-e*r*f),y,m]},yp=(i,t,e,n)=>{let s=Math.atan2(t,i),r=Math.atan2(n,e);return r>=s?r-s:2*Math.PI-(s-r)};function _d(i,t,e,n,s,r,a,o){let l;if(de.cachesBoundsOfCurve&&(l=[...arguments].join(),Aa.boundsOfCurveCache[l]))return Aa.boundsOfCurveCache[l];let c=Math.sqrt,h=Math.abs,d=[],u=[[0,0],[0,0]],f=6*i-12*e+6*s,p=-3*i+9*e-9*s+3*a,y=3*e-3*i;for(let x=0;x<2;++x){if(x>0&&(f=6*t-12*n+6*r,p=-3*t+9*n-9*r+3*o,y=3*n-3*t),h(p)<1e-12){if(h(f)<1e-12)continue;let L=-y/f;0<L&&L<1&&d.push(L);continue}let T=f*f-4*y*p;if(T<0)continue;let M=c(T),D=(-f+M)/(2*p);0<D&&D<1&&d.push(D);let v=(-f-M)/(2*p);0<v&&v<1&&d.push(v)}let m=d.length,g=m,b=$m(i,t,e,n,s,r,a,o);for(;m--;){let{x,y:T}=b(d[m]);u[0][m]=x,u[1][m]=T}u[0][g]=i,u[1][g]=t,u[0][g+1]=a,u[1][g+1]=o;let E=[new z(Math.min(...u[0]),Math.min(...u[1])),new z(Math.max(...u[0]),Math.max(...u[1]))];return de.cachesBoundsOfCurve&&(Aa.boundsOfCurveCache[l]=E),E}var Lx=(i,t,[e,n,s,r,a,o,l,c])=>{let h=((d,u,f,p,y,m,g)=>{if(f===0||p===0)return[];let b=0,E=0,x=0,T=Math.PI,M=g*Id,D=Ji(M),v=Gi(M),L=.5*(-v*d-D*u),R=.5*(-v*u+D*d),A=f**2,P=p**2,q=R**2,I=L**2,k=A*P-A*q-P*I,X=Math.abs(f),Y=Math.abs(p);if(k<0){let ot=Math.sqrt(1-k/(A*P));X*=ot,Y*=ot}else x=(y===m?-1:1)*Math.sqrt(k/(A*q+P*I));let it=x*X*R/Y,U=-x*Y*L/X,K=v*it-D*U+.5*d,tt=D*it+v*U+.5*u,Lt=yp(1,0,(L-it)/X,(R-U)/Y),mt=yp((L-it)/X,(R-U)/Y,(-L-it)/X,(-R-U)/Y);m===0&&mt>0?mt-=2*T:m===1&&mt<0&&(mt+=2*T);let Zt=Math.ceil(Math.abs(mt/T*2)),Yt=[],dt=mt/Zt,G=8/3*Math.sin(dt/4)*Math.sin(dt/4)/Math.sin(dt/2),Q=Lt+dt;for(let ot=0;ot<Zt;ot++)Yt[ot]=Mx(Lt,Q,v,D,X,Y,K,tt,G,b,E),b=Yt[ot][5],E=Yt[ot][6],Lt=Q,Q+=dt;return Yt})(l-i,c-t,n,s,a,o,r);for(let d=0,u=h.length;d<u;d++)h[d][1]+=i,h[d][2]+=t,h[d][3]+=i,h[d][4]+=t,h[d][5]+=i,h[d][6]+=t;return h},Um=i=>{let t=0,e=0,n=0,s=0,r=[],a,o=0,l=0;for(let c of i){let h=[...c],d;switch(h[0]){case"l":h[1]+=t,h[2]+=e;case"L":t=h[1],e=h[2],d=["L",t,e];break;case"h":h[1]+=t;case"H":t=h[1],d=["L",t,e];break;case"v":h[1]+=e;case"V":e=h[1],d=["L",t,e];break;case"m":h[1]+=t,h[2]+=e;case"M":t=h[1],e=h[2],n=h[1],s=h[2],d=["M",t,e];break;case"c":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e,h[5]+=t,h[6]+=e;case"C":o=h[3],l=h[4],t=h[5],e=h[6],d=["C",h[1],h[2],o,l,t,e];break;case"s":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"S":a==="C"?(o=2*t-o,l=2*e-l):(o=t,l=e),t=h[3],e=h[4],d=["C",o,l,h[1],h[2],t,e],o=d[3],l=d[4];break;case"q":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"Q":o=h[1],l=h[2],t=h[3],e=h[4],d=["Q",o,l,t,e];break;case"t":h[1]+=t,h[2]+=e;case"T":a==="Q"?(o=2*t-o,l=2*e-l):(o=t,l=e),t=h[1],e=h[2],d=["Q",o,l,t,e];break;case"a":h[6]+=t,h[7]+=e;case"A":Lx(t,e,h).forEach(u=>r.push(u)),t=h[6],e=h[7];break;case"z":case"Z":t=n,e=s,d=["Z"]}d?(r.push(d),a=d[0]):a=""}return r},bl=(i,t,e,n)=>Math.sqrt((e-i)**2+(n-t)**2),$m=(i,t,e,n,s,r,a,o)=>l=>{let c=l**3,h=(f=>3*f**2*(1-f))(l),d=(f=>3*f*(1-f)**2)(l),u=(f=>(1-f)**3)(l);return new z(a*c+s*h+e*d+i*u,o*c+r*h+n*d+t*u)},Vm=i=>i**2,Gm=i=>2*i*(1-i),Jm=i=>(1-i)**2,wx=(i,t,e,n,s,r,a,o)=>l=>{let c=Vm(l),h=Gm(l),d=Jm(l),u=3*(d*(e-i)+h*(s-e)+c*(a-s)),f=3*(d*(n-t)+h*(r-n)+c*(o-r));return Math.atan2(f,u)},Dx=(i,t,e,n,s,r)=>a=>{let o=Vm(a),l=Gm(a),c=Jm(a);return new z(s*o+e*l+i*c,r*o+n*l+t*c)},Rx=(i,t,e,n,s,r)=>a=>{let o=1-a,l=2*(o*(e-i)+a*(s-e)),c=2*(o*(n-t)+a*(r-n));return Math.atan2(c,l)},_p=(i,t,e)=>{let n=new z(t,e),s=0;for(let r=1;r<=100;r+=1){let a=i(r/100);s+=bl(n.x,n.y,a.x,a.y),n=a}return s},Ax=(i,t)=>{let e,n=0,s=0,r={x:i.x,y:i.y},a={...r},o=.01,l=0,c=i.iterator,h=i.angleFinder;for(;s<t&&o>1e-4;)a=c(n),l=n,e=bl(r.x,r.y,a.x,a.y),e+s>t?(n-=o,o/=2):(r=a,n+=o,s+=e);return{...a,angle:h(l)}},ru=i=>{let t,e,n=0,s=0,r=0,a=0,o=0,l=[];for(let c of i){let h={x:s,y:r,command:c[0],length:0};switch(c[0]){case"M":e=h,e.x=a=s=c[1],e.y=o=r=c[2];break;case"L":e=h,e.length=bl(s,r,c[1],c[2]),s=c[1],r=c[2];break;case"C":t=$m(s,r,c[1],c[2],c[3],c[4],c[5],c[6]),e=h,e.iterator=t,e.angleFinder=wx(s,r,c[1],c[2],c[3],c[4],c[5],c[6]),e.length=_p(t,s,r),s=c[5],r=c[6];break;case"Q":t=Dx(s,r,c[1],c[2],c[3],c[4]),e=h,e.iterator=t,e.angleFinder=Rx(s,r,c[1],c[2],c[3],c[4]),e.length=_p(t,s,r),s=c[3],r=c[4];break;case"Z":e=h,e.destX=a,e.destY=o,e.length=bl(s,r,a,o),s=a,r=o}n+=e.length,l.push(e)}return l.push({length:n,x:s,y:r}),l},Ym=(i,t,e=ru(i))=>{let n=0;for(;t-e[n].length>0&&n<e.length-2;)t-=e[n].length,n++;let s=e[n],r=t/s.length,a=i[n];switch(s.command){case"M":return{x:s.x,y:s.y,angle:0};case"Z":return{...new z(s.x,s.y).lerp(new z(s.destX,s.destY),r),angle:Math.atan2(s.destY-s.y,s.destX-s.x)};case"L":return{...new z(s.x,s.y).lerp(new z(a[1],a[2]),r),angle:Math.atan2(a[2]-s.y,a[1]-s.x)};case"C":case"Q":return Ax(s,t)}},Ix=RegExp("[mzlhvcsqta][^mzlhvcsqta]*","gi"),xp=new RegExp(Tx,"g"),Bx=new RegExp(Hi,"gi"),Fx={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},Qm=i=>{var t;let e=[],n=(t=i.match(Ix))==null?[]:t;for(let s of n){let r=s[0];if(r==="z"||r==="Z"){e.push([r]);continue}let a=Fx[r.toLowerCase()],o=[];if(r==="a"||r==="A"){let l;for(xp.lastIndex=0;l=xp.exec(s);)o.push(...l.slice(1))}else o=s.match(Bx)||[];for(let l=0;l<o.length;l+=a){let c=Array(a),h=Ex[r];c[0]=l>0&&h?h:r;for(let d=0;d<a;d++)c[d+1]=parseFloat(o[l+d]);e.push(c)}}return e},Cx=(i,t=0)=>{let e=new z(i[0]),n=new z(i[1]),s=1,r=0,a=[],o=i.length,l=o>2,c;for(l&&(s=i[2].x<n.x?-1:i[2].x===n.x?0:1,r=i[2].y<n.y?-1:i[2].y===n.y?0:1),a.push(["M",e.x-s*t,e.y-r*t]),c=1;c<o;c++){if(!e.eq(n)){let h=e.midPointFrom(n);a.push(["Q",e.x,e.y,h.x,h.y])}e=i[c],c+1<i.length&&(n=i[c+1])}return l&&(s=e.x>i[c-2].x?1:e.x===i[c-2].x?0:-1,r=e.y>i[c-2].y?1:e.y===i[c-2].y?0:-1),a.push(["L",e.x+s*t,e.y+r*t]),a},Nx=(i,t,e)=>(e&&(t=Le(t,[1,0,0,1,-e.x,-e.y])),i.map(n=>{let s=[...n];for(let r=1;r<n.length-1;r+=2){let{x:a,y:o}=Qe({x:n[r],y:n[r+1]},t);s[r]=a,s[r+1]=o}return s})),Ox=(i,t)=>{let e=2*Math.PI/i,n=-Zn;i%2==0&&(n+=e/2);let s=Array(i+1);for(let r=0;r<i;r++){let a=r*e+n,{x:o,y:l}=new z(Gi(a),Ji(a)).scalarMultiply(t);s[r]=[r===0?"M":"L",o,l]}return s[i]=["Z"],s},Xm=(i,t)=>i.map(e=>e.map((n,s)=>s===0||t===void 0?n:ge(n,t)).join(" ")).join(" "),Px=(i,t)=>{var e;let n=i,s=t;n.inverted&&!s.inverted&&(n=t,s=i),Vd(s,(e=s.group)==null?void 0:e.calcTransformMatrix(),n.calcTransformMatrix());let r=n.inverted&&s.inverted;return r&&(n.inverted=s.inverted=!1),new rr([n],{clipPath:s,inverted:r})},qx=(i,t)=>Math.floor(Math.random()*(t-i+1))+i,kx=(i,t)=>{let e=i._findCenterFromElement();i.transformMatrix&&((n=>{if(n.transformMatrix){let{scaleX:s,scaleY:r,angle:a,skewX:o}=or(n.transformMatrix);n.flipX=!1,n.flipY=!1,n.set(Kn,s),n.set(ts,r),n.angle=a,n.skewX=o,n.skewY=0}})(i),e=e.transform(i.transformMatrix)),delete i.transformMatrix,t&&(i.scaleX*=t.scaleX,i.scaleY*=t.scaleY,i.cropX=t.cropX,i.cropY=t.cropY,e.x+=t.offsetLeft,e.y+=t.offsetTop,i.width=t.width,i.height=t.height),i.setPositionByOrigin(e,ye,ye)},ML=ka({addTransformToObject:()=>Xp,animate:()=>Kd,animateColor:()=>hm,applyTransformToObject:()=>hr,calcAngleBetweenVectors:()=>xl,calcDimensionsMatrix:()=>Ha,calcPlaneChangeMatrix:()=>$a,calcVectorRotation:()=>Jd,cancelAnimFrame:()=>Op,capValue:()=>Rs,composeMatrix:()=>Up,copyCanvasElement:()=>t_,cos:()=>Gi,createCanvasElement:()=>hn,createImage:()=>Pp,createRotateMatrix:()=>As,createScaleMatrix:()=>Ll,createSkewXMatrix:()=>qd,createSkewYMatrix:()=>kd,createTranslateMatrix:()=>mr,createVector:()=>Oa,crossProduct:()=>sr,degreesToRadians:()=>Ee,dotProduct:()=>Zp,ease:()=>__,enlivenObjectEnlivables:()=>Ua,enlivenObjects:()=>lr,findScaleToCover:()=>Hm,findScaleToFit:()=>km,getBoundsOfCurve:()=>_d,getOrthonormalVector:()=>Yd,getPathSegmentsInfo:()=>ru,getPointOnPath:()=>Ym,getPointer:()=>Qp,getRandomInt:()=>qx,getRegularPolygonPath:()=>Ox,getSmoothPathFromPoints:()=>Cx,getSvgAttributes:()=>d_,getUnitVector:()=>Rl,groupSVGElements:()=>Sx,hasStyleChanged:()=>Nl,invertTransform:()=>xi,isBetweenVectors:()=>od,isIdentityMatrix:()=>qp,isTouchEvent:()=>yl,isTransparent:()=>Am,joinPath:()=>Xm,loadImage:()=>Ba,magnitude:()=>_l,makeBoundingBoxFromPoints:()=>ln,makePathSimpler:()=>Um,matrixToSVG:()=>cr,mergeClipPaths:()=>Px,multiplyTransformMatrices:()=>Le,multiplyTransformMatrixArray:()=>Ml,parsePath:()=>Qm,parsePreserveAspectRatioAttribute:()=>em,parseUnit:()=>Ds,pick:()=>Is,projectStrokeOnPoints:()=>Fm,qrDecompose:()=>or,radiansToDegrees:()=>En,removeFromArray:()=>Ss,removeTransformFromObject:()=>o_,removeTransformMatrixForSvgParsing:()=>kx,requestAnimFrame:()=>Ia,resetObjectTransform:()=>jp,rotateVector:()=>Gd,saveObjectTransform:()=>$d,sendObjectToPlane:()=>Vd,sendPointToPlane:()=>Mn,sendVectorToPlane:()=>zp,sin:()=>Ji,sizeAfterTransform:()=>Dl,string:()=>i_,stylesFromArray:()=>Nm,stylesToArray:()=>Cm,toBlob:()=>Nd,toDataURL:()=>Cd,toFixed:()=>ge,transformPath:()=>Nx,transformPoint:()=>Qe});function xd(i,t){let e=i.style;e&&Object.entries(t).forEach(([n,s])=>e.setProperty(n,s))}var Hx=class extends Jp{constructor(i,{allowTouchScrolling:t=!1,containerClass:e=""}={}){super(i),N(this,"upper",void 0),N(this,"container",void 0);let{el:n}=this.lower,s=this.createUpperCanvas();this.upper={el:s,ctx:s.getContext("2d")},this.applyCanvasStyle(n,{allowTouchScrolling:t}),this.applyCanvasStyle(s,{allowTouchScrolling:t,styles:{position:"absolute",left:"0",top:"0"}});let r=this.createContainerElement();r.classList.add(e),n.parentNode&&n.parentNode.replaceChild(r,n),r.append(n,s),this.container=r}createUpperCanvas(){let{el:i}=this.lower,t=hn();return t.className=i.className,t.classList.remove("lower-canvas"),t.classList.add("upper-canvas"),t.setAttribute("data-fabric","top"),t.style.cssText=i.style.cssText,t.setAttribute("draggable","true"),t}createContainerElement(){let i=ur().createElement("div");return i.setAttribute("data-fabric","wrapper"),xd(i,{position:"relative"}),ip(i),i}applyCanvasStyle(i,t){let{styles:e,allowTouchScrolling:n}=t;xd(i,{...e,"touch-action":n?"manipulation":Tl}),ip(i)}setDimensions(i,t){super.setDimensions(i,t);let{el:e,ctx:n}=this.upper;Gp(e,n,i,t)}setCSSDimensions(i){super.setCSSDimensions(i),ad(this.upper.el,i),ad(this.container,i)}cleanupDOM(i){let t=this.container,{el:e}=this.lower,{el:n}=this.upper;super.cleanupDOM(i),t.removeChild(n),t.removeChild(e),t.parentNode&&t.parentNode.replaceChild(e,t)}dispose(){super.dispose(),cn().dispose(this.upper.el),delete this.upper,delete this.container}},jm=(i,t,e,n)=>{let{target:s,offsetX:r,offsetY:a}=t,o=e-r,l=n-a,c=!$i(s,"lockMovementX")&&s.left!==o,h=!$i(s,"lockMovementY")&&s.top!==l;return c&&s.set("left",o),h&&s.set("top",l),(c||h)&&tu(wp,Xd(i,t,e,n)),c||h},zm=Ip,Wm=i=>function(t,e,n){let{points:s,pathOffset:r}=n;return new z(s[i]).subtract(r).transform(Le(n.getViewportTransform(),n.calcTransformMatrix()))},Zm=(i,t,e,n)=>{let{target:s,pointIndex:r}=t,a=s,o=Mn(new z(e,n),void 0,a.calcOwnMatrix());return a.points[r]=o.add(a.pathOffset),a.setDimensions(),a.set("dirty",!0),!0},Km=(i,t)=>function(e,n,s,r){let a=n.target,o=new z(a.points[(i>0?i:a.points.length)-1]),l=o.subtract(a.pathOffset).transform(a.calcOwnMatrix()),c=t(e,{...n,pointIndex:i},s,r),h=o.subtract(a.pathOffset).transform(a.calcOwnMatrix()).subtract(l);return a.left-=h.x,a.top-=h.y,c},tg=i=>wn(zm,Km(i,Zm));function Ux(i,t={}){let e={};for(let n=0;n<(typeof i=="number"?i:i.points.length);n++)e[`p${n}`]=new yi({actionName:zm,positionHandler:Wm(n),actionHandler:tg(n),...t});return e}var vd=(i,t,e)=>{let{path:n,pathOffset:s}=i,r=n[t];return new z(r[e]-s.x,r[e+1]-s.y).transform(Le(i.getViewportTransform(),i.calcTransformMatrix()))};function $x(i,t,e){let{commandIndex:n,pointIndex:s}=this;return vd(e,n,s)}function Vx(i,t,e,n){let{target:s}=t,{commandIndex:r,pointIndex:a}=this,o=((l,c,h,d,u)=>{let{path:f,pathOffset:p}=l,y=f[(d>0?d:f.length)-1],m=new z(y[u],y[u+1]),g=m.subtract(p).transform(l.calcOwnMatrix()),b=Mn(new z(c,h),void 0,l.calcOwnMatrix());f[d][u]=b.x+p.x,f[d][u+1]=b.y+p.y,l.setDimensions();let E=m.subtract(l.pathOffset).transform(l.calcOwnMatrix()).subtract(g);return l.left-=E.x,l.top-=E.y,l.set("dirty",!0),!0})(s,e,n,r,a);return o&&tu(this.actionName,{...Xd(i,t,e,n),commandIndex:r,pointIndex:a}),o}var eg=class extends yi{constructor(i){super(i)}render(i,t,e,n,s){let r={...n,cornerColor:this.controlFill,cornerStrokeColor:this.controlStroke,transparentCorners:!this.controlFill};super.render(i,t,e,r,s)}},Gx=class extends eg{constructor(i){super(i)}render(i,t,e,n,s){let{path:r}=s,{commandIndex:a,pointIndex:o,connectToCommandIndex:l,connectToPointIndex:c}=this;i.save(),i.strokeStyle=this.controlStroke,this.connectionDashArray&&i.setLineDash(this.connectionDashArray);let[h]=r[a],d=vd(s,l,c);if(h==="Q"){let u=vd(s,a,o+2);i.moveTo(u.x,u.y),i.lineTo(t,e)}else i.moveTo(t,e);i.lineTo(d.x,d.y),i.stroke(),i.restore(),super.render(i,t,e,n,s)}},Ko=(i,t,e,n,s,r)=>new(e?Gx:eg)({commandIndex:i,pointIndex:t,actionName:"modifyPath",positionHandler:$x,actionHandler:Vx,connectToCommandIndex:s,connectToPointIndex:r,...n,...e?n.controlPointStyle:n.pointStyle});function Jx(i,t={}){let e={},n="M";return i.path.forEach((s,r)=>{let a=s[0];switch(a!=="Z"&&(e[`c_${r}_${a}`]=Ko(r,s.length-2,!1,t)),a){case"C":e[`c_${r}_C_CP_1`]=Ko(r,1,!0,t,r-1,(o=>o==="C"?5:o==="Q"?3:1)(n)),e[`c_${r}_C_CP_2`]=Ko(r,3,!0,t,r,5);break;case"Q":e[`c_${r}_Q_CP_1`]=Ko(r,1,!0,t,r,3)}n=a}),e}var LL=ka({changeHeight:()=>K_,changeObjectHeight:()=>fm,changeObjectWidth:()=>um,changeWidth:()=>ld,createObjectDefaultControls:()=>iu,createPathControls:()=>Jx,createPolyActionHandler:()=>tg,createPolyControls:()=>Ux,createPolyPositionHandler:()=>Wm,createResizeControls:()=>Lm,createTextboxDefaultControls:()=>wm,dragHandler:()=>jm,factoryPolyActionHandler:()=>Km,getLocalPoint:()=>Al,polyActionHandler:()=>Zm,renderCircleControl:()=>pm,renderSquareControl:()=>mm,rotationStyleHandler:()=>gm,rotationWithSnapping:()=>ym,scaleCursorStyleHandler:()=>er,scaleOrSkewActionName:()=>ua,scaleSkewCursorStyleHandler:()=>Ls,scalingEqually:()=>da,scalingX:()=>vm,scalingXOrSkewingY:()=>cd,scalingY:()=>bm,scalingYOrSkewingX:()=>hd,skewCursorStyleHandler:()=>Sm,skewHandlerX:()=>Em,skewHandlerY:()=>Mm,wrapWithFireEvent:()=>wn,wrapWithFixedAnchor:()=>es}),ig=class ng extends Ud{constructor(...t){super(...t),N(this,"_hoveredTargets",[]),N(this,"_currentTransform",null),N(this,"_groupSelector",null),N(this,"contextTopDirty",!1)}static getDefaults(){return{...super.getDefaults(),...ng.ownDefaults}}get upperCanvasEl(){var t;return(t=this.elements.upper)==null?void 0:t.el}get contextTop(){var t;return(t=this.elements.upper)==null?void 0:t.ctx}get wrapperEl(){return this.elements.container}initElements(t){this.elements=new Hx(t,{allowTouchScrolling:this.allowTouchScrolling,containerClass:this.containerClass}),this._createCacheCanvas()}_onObjectAdded(t){this._objectsToRender=void 0,super._onObjectAdded(t)}_onObjectRemoved(t){this._objectsToRender=void 0,t===this._activeObject&&(this.fire("before:selection:cleared",{deselected:[t]}),this._discardActiveObject(),this.fire("selection:cleared",{deselected:[t]}),t.fire("deselected",{target:t})),t===this._hoveredTarget&&(this._hoveredTarget=void 0,this._hoveredTargets=[]),super._onObjectRemoved(t)}_onStackOrderChanged(){this._objectsToRender=void 0,super._onStackOrderChanged()}_chooseObjectsToRender(){let t=this._activeObject;return!this.preserveObjectStacking&&t?this._objects.filter(e=>!e.group&&e!==t).concat(t):this._objects}renderAll(){this.cancelRequestedRender(),this.destroyed||(!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1),this.hasLostContext&&(this.renderTopLayer(this.contextTop),this.hasLostContext=!1),!this._objectsToRender&&(this._objectsToRender=this._chooseObjectsToRender()),this.renderCanvas(this.getContext(),this._objectsToRender))}renderTopLayer(t){t.save(),this.isDrawingMode&&this._isCurrentlyDrawing&&(this.freeDrawingBrush&&this.freeDrawingBrush._render(),this.contextTopDirty=!0),this.selection&&this._groupSelector&&(this._drawSelection(t),this.contextTopDirty=!0),t.restore()}renderTop(){let t=this.contextTop;this.clearContext(t),this.renderTopLayer(t),this.fire("after:render",{ctx:t})}setTargetFindTolerance(t){t=Math.round(t),this.targetFindTolerance=t;let e=this.getRetinaScaling(),n=Math.ceil((2*t+1)*e);this.pixelFindCanvasEl.width=this.pixelFindCanvasEl.height=n,this.pixelFindContext.scale(e,e)}isTargetTransparent(t,e,n){let s=this.targetFindTolerance,r=this.pixelFindContext;this.clearContext(r),r.save(),r.translate(-e+s,-n+s),r.transform(...this.viewportTransform);let a=t.selectionBackgroundColor;t.selectionBackgroundColor="",t.render(r),t.selectionBackgroundColor=a,r.restore();let o=Math.round(s*this.getRetinaScaling());return Am(r,o,o,o)}_isSelectionKeyPressed(t){let e=this.selectionKey;return!!e&&(Array.isArray(e)?!!e.find(n=>!!n&&t[n]===!0):t[e])}_shouldClearSelection(t,e){let n=this.getActiveObjects(),s=this._activeObject;return!!(!e||e&&s&&n.length>1&&n.indexOf(e)===-1&&s!==e&&!this._isSelectionKeyPressed(t)||e&&!e.evented||e&&!e.selectable&&s&&s!==e)}_shouldCenterTransform(t,e,n){if(!t)return;let s;return e==="scale"||e==="scaleX"||e==="scaleY"||e==="resizing"?s=this.centeredScaling||t.centeredScaling:e==="rotate"&&(s=this.centeredRotation||t.centeredRotation),s?!n:n}_getOriginFromCorner(t,e){let n=e?t.controls[e].getTransformAnchorPoint():{x:t.originX,y:t.originY};return e&&(["ml","tl","bl"].includes(e)?n.x=Ui:["mr","tr","br"].includes(e)&&(n.x=Oe),["tl","mt","tr"].includes(e)?n.y=Lp:["bl","mb","br"].includes(e)&&(n.y="top")),n}_setupCurrentTransform(t,e,n){var s;let r=e.group?Mn(this.getScenePoint(t),void 0,e.group.calcTransformMatrix()):this.getScenePoint(t),{key:a="",control:o}=e.getActiveControl()||{},l=n&&o?(s=o.getActionHandler(t,e,o))==null?void 0:s.bind(o):jm,c=((v,L,R,A)=>{if(!L||!v)return"drag";let P=A.controls[L];return P.getActionName(R,P,A)})(n,a,t,e),h=t[this.centeredKey],d=this._shouldCenterTransform(e,c,h)?{x:ye,y:ye}:this._getOriginFromCorner(e,a),{scaleX:u,scaleY:f,skewX:p,skewY:y,left:m,top:g,angle:b,width:E,height:x,cropX:T,cropY:M}=e,D={target:e,action:c,actionHandler:l,actionPerformed:!1,corner:a,scaleX:u,scaleY:f,skewX:p,skewY:y,offsetX:r.x-m,offsetY:r.y-g,originX:d.x,originY:d.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,theta:Ee(b),width:E,height:x,shiftKey:t.shiftKey,altKey:h,original:{...$d(e),originX:d.x,originY:d.y,cropX:T,cropY:M}};this._currentTransform=D,this.fire("before:transform",{e:t,transform:D})}setCursor(t){this.upperCanvasEl.style.cursor=t}_drawSelection(t){let{x:e,y:n,deltaX:s,deltaY:r}=this._groupSelector,a=new z(e,n).transform(this.viewportTransform),o=new z(e+s,n+r).transform(this.viewportTransform),l=this.selectionLineWidth/2,c=Math.min(a.x,o.x),h=Math.min(a.y,o.y),d=Math.max(a.x,o.x),u=Math.max(a.y,o.y);this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(c,h,d-c,u-h)),this.selectionLineWidth&&this.selectionBorderColor&&(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,c+=l,h+=l,d-=l,u-=l,Xe.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(c,h,d-c,u-h))}findTarget(t){if(this._targetInfo)return this._targetInfo;if(this.skipTargetFind)return{subTargets:[],currentSubTargets:[]};let e=this.getScenePoint(t),n=this._activeObject,s=this.getActiveObjects(),r=this.searchPossibleTargets(this._objects,e),{subTargets:a,container:o,target:l}=r,c={...r,currentSubTargets:a,currentContainer:o,currentTarget:l};if(!n)return c;let h={...this.searchPossibleTargets([n],e),currentSubTargets:a,currentContainer:o,currentTarget:l};return n.findControl(this.getViewportPoint(t),yl(t))?{...h,target:n}:h.target&&(s.length>1||!this.preserveObjectStacking||this.preserveObjectStacking&&t[this.altSelectionKey])?h:c}_pointIsInObjectSelectionArea(t,e){let n=t.getCoords(),s=this.getZoom(),r=t.padding/s;if(r){let[a,o,l,c]=n,h=Math.atan2(o.y-a.y,o.x-a.x),d=Gi(h)*r,u=Ji(h)*r,f=d+u,p=d-u;n=[new z(a.x-p,a.y-f),new z(o.x+f,o.y-p),new z(l.x+p,l.y+f),new z(c.x-f,c.y+p)]}return Ca.isPointInPolygon(e,n)}_checkTarget(t,e){if(t&&t.visible&&t.evented&&this._pointIsInObjectSelectionArea(t,e)){if(!this.perPixelTargetFind&&!t.perPixelTargetFind||t.isEditing)return!0;{let n=e.transform(this.viewportTransform);if(!this.isTargetTransparent(t,n.x,n.y))return!0}}return!1}_searchPossibleTargets(t,e,n){let s=t.length;for(;s--;){let r=t[s];if(this._checkTarget(r,e)){if(hl(r)&&r.subTargetCheck){let{target:a}=this._searchPossibleTargets(r._objects,e,n);a&&n.push(a)}return{target:r,subTargets:n}}}return{subTargets:[]}}searchPossibleTargets(t,e){let n=this._searchPossibleTargets(t,e,[]);n.container=n.target;let{container:s,subTargets:r}=n;if(s&&hl(s)&&s.interactive&&r[0]){for(let a=r.length-1;a>0;a--){let o=r[a];if(!hl(o)||!o.interactive)return n.target=o,n}return n.target=r[0],n}return n}getViewportPoint(t){return this._viewportPoint?this._viewportPoint:this._getPointerImpl(t,!0)}getScenePoint(t){return this._scenePoint?this._scenePoint:this._getPointerImpl(t)}_getPointerImpl(t,e=!1){let n=this.upperCanvasEl,s=n.getBoundingClientRect(),r=Qp(t),a=s.width||0,o=s.height||0;a&&o||("top"in s&&"bottom"in s&&(o=Math.abs(s.top-s.bottom)),"right"in s&&"left"in s&&(a=Math.abs(s.right-s.left))),this.calcOffset(),r.x-=this._offset.left,r.y-=this._offset.top,e||(r=Mn(r,void 0,this.viewportTransform));let l=this.getRetinaScaling();l!==1&&(r.x/=l,r.y/=l);let c=a===0||o===0?new z(1,1):new z(n.width/a,n.height/o);return r.multiply(c)}_setDimensionsImpl(t,e){this._resetTransformEventData(),super._setDimensionsImpl(t,e),this._isCurrentlyDrawing&&this.freeDrawingBrush&&this.freeDrawingBrush._setBrushStyles(this.contextTop)}_createCacheCanvas(){this.pixelFindCanvasEl=hn(),this.pixelFindContext=this.pixelFindCanvasEl.getContext("2d",{willReadFrequently:!0}),this.setTargetFindTolerance(this.targetFindTolerance)}getTopContext(){return this.elements.upper.ctx}getSelectionContext(){return this.elements.upper.ctx}getSelectionElement(){return this.elements.upper.el}getActiveObject(){return this._activeObject}getActiveObjects(){let t=this._activeObject;return Ts(t)?t.getObjects():t?[t]:[]}_fireSelectionEvents(t,e){let n=!1,s=!1,r=this.getActiveObjects(),a=[],o=[];t.forEach(l=>{r.includes(l)||(n=!0,l.fire("deselected",{e,target:l}),o.push(l))}),r.forEach(l=>{t.includes(l)||(n=!0,l.fire("selected",{e,target:l}),a.push(l))}),t.length>0&&r.length>0?(s=!0,n&&this.fire("selection:updated",{e,selected:a,deselected:o})):r.length>0?(s=!0,this.fire("selection:created",{e,selected:a})):t.length>0&&(s=!0,this.fire("selection:cleared",{e,deselected:o})),s&&(this._objectsToRender=void 0)}setActiveObject(t,e){let n=this.getActiveObjects(),s=this._setActiveObject(t,e);return this._fireSelectionEvents(n,e),s}_setActiveObject(t,e){let n=this._activeObject;return n!==t&&!(!this._discardActiveObject(e,t)&&this._activeObject)&&!t.onSelect({e})&&(this._activeObject=t,Ts(t)&&n!==t&&t.set("canvas",this),t.setCoords(),!0)}_discardActiveObject(t,e){let n=this._activeObject;return!!n&&!n.onDeselect({e:t,object:e})&&(this._currentTransform&&this._currentTransform.target===n&&this.endCurrentTransform(t),Ts(n)&&n===this._hoveredTarget&&(this._hoveredTarget=void 0),this._activeObject=void 0,!0)}discardActiveObject(t){let e=this.getActiveObjects(),n=this.getActiveObject();e.length&&this.fire("before:selection:cleared",{e:t,deselected:[n]});let s=this._discardActiveObject(t);return this._fireSelectionEvents(e,t),s}endCurrentTransform(t){let e=this._currentTransform;this._finalizeCurrentTransform(t),e&&e.target&&(e.target.isMoving=!1),this._currentTransform=null}_finalizeCurrentTransform(t){let e=this._currentTransform,n=e.target,s={e:t,target:n,transform:e,action:e.action};n._scaling&&(n._scaling=!1),n.setCoords(),e.actionPerformed&&(this.fire("object:modified",s),n.fire(Fp,s))}setViewportTransform(t){super.setViewportTransform(t);let e=this._activeObject;e&&e.setCoords()}destroy(){let t=this._activeObject;Ts(t)&&(t.removeAll(),t.dispose()),delete this._activeObject,super.destroy(),this.pixelFindContext=null,this.pixelFindCanvasEl=void 0}clear(){this.discardActiveObject(),this._activeObject=void 0,this.clearContext(this.contextTop),super.clear()}drawControls(t){let e=this._activeObject;e&&e._renderControls(t)}_toObject(t,e,n){let s=this._realizeGroupTransformOnObject(t),r=super._toObject(t,e,n);return t.set(s),r}_realizeGroupTransformOnObject(t){let{group:e}=t;if(e&&Ts(e)&&this._activeObject===e){let n=Is(t,["angle","flipX","flipY",Oe,Kn,ts,fr,pr,"top"]);return Xp(t,e.calcOwnMatrix()),n}return{}}_setSVGObject(t,e,n){let s=this._realizeGroupTransformOnObject(e);super._setSVGObject(t,e,n),e.set(s)}};N(ig,"ownDefaults",{uniformScaling:!0,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",selection:!0,selectionKey:"shiftKey",selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,selectionFullyContained:!1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",notAllowedCursor:"not-allowed",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,stopContextMenu:!0,fireRightClick:!0,fireMiddleClick:!0,enablePointerEvents:!1,containerClass:"canvas-container",preserveObjectStacking:!0});var Yx=class{constructor(i){N(this,"targets",[]),N(this,"__disposer",void 0);let t=()=>{let{hiddenTextarea:n}=i.getActiveObject()||{};n&&n.focus()},e=i.upperCanvasEl;e.addEventListener("click",t),this.__disposer=()=>e.removeEventListener("click",t)}exitTextEditing(){this.target=void 0,this.targets.forEach(i=>{i.isEditing&&i.exitEditing()})}add(i){this.targets.push(i)}remove(i){this.unregister(i),Ss(this.targets,i)}register(i){this.target=i}unregister(i){i===this.target&&(this.target=void 0)}onMouseMove(i){var t;(t=this.target)!=null&&t.isEditing&&this.target.updateSelectionOnMouseMove(i)}clear(){this.targets=[],this.target=void 0}dispose(){this.clear(),this.__disposer(),delete this.__disposer}},gi={passive:!1},Zs=(i,t)=>({viewportPoint:i.getViewportPoint(t),scenePoint:i.getScenePoint(t)}),Yn=(i,...t)=>i.addEventListener(...t),Ii=(i,...t)=>i.removeEventListener(...t),Qx={mouse:{in:"over",out:"out",targetIn:"mouseover",targetOut:"mouseout",canvasIn:"mouse:over",canvasOut:"mouse:out"},drag:{in:"enter",out:"leave",targetIn:"dragenter",targetOut:"dragleave",canvasIn:"drag:enter",canvasOut:"drag:leave"}},Sl=class extends ig{constructor(i,t={}){super(i,t),N(this,"_isClick",void 0),N(this,"textEditingManager",new Yx(this)),["_onMouseDown","_onTouchStart","_onMouseMove","_onMouseUp","_onTouchEnd","_onResize","_onMouseWheel","_onMouseOut","_onMouseEnter","_onContextMenu","_onClick","_onDragStart","_onDragEnd","_onDragProgress","_onDragOver","_onDragEnter","_onDragLeave","_onDrop"].forEach(e=>{this[e]=this[e].bind(this)}),this.addOrRemove(Yn)}_getEventPrefix(){return this.enablePointerEvents?"pointer":"mouse"}addOrRemove(i,t=!1){let e=this.upperCanvasEl,n=this._getEventPrefix();i(Vp(e),"resize",this._onResize),i(e,n+"down",this._onMouseDown),i(e,`${n}move`,this._onMouseMove,gi),i(e,`${n}out`,this._onMouseOut),i(e,`${n}enter`,this._onMouseEnter),i(e,"wheel",this._onMouseWheel,{passive:!1}),i(e,"contextmenu",this._onContextMenu),t||(i(e,"click",this._onClick),i(e,"dblclick",this._onClick)),i(e,"dragstart",this._onDragStart),i(e,"dragend",this._onDragEnd),i(e,"dragover",this._onDragOver),i(e,"dragenter",this._onDragEnter),i(e,"dragleave",this._onDragLeave),i(e,"drop",this._onDrop),this.enablePointerEvents||i(e,"touchstart",this._onTouchStart,gi)}removeListeners(){this.addOrRemove(Ii);let i=this._getEventPrefix(),t=ki(this.upperCanvasEl);Ii(t,`${i}up`,this._onMouseUp),Ii(t,"touchend",this._onTouchEnd,gi),Ii(t,`${i}move`,this._onMouseMove,gi),Ii(t,"touchmove",this._onMouseMove,gi),clearTimeout(this._willAddMouseDown)}_onMouseWheel(i){this._cacheTransformEventData(i),this._handleEvent(i,"wheel"),this._resetTransformEventData()}_onMouseOut(i){let t=this._hoveredTarget,e={e:i,...Zs(this,i)};this.fire("mouse:out",{...e,target:t}),this._hoveredTarget=void 0,t&&t.fire("mouseout",{...e}),this._hoveredTargets.forEach(n=>{this.fire("mouse:out",{...e,target:n}),n&&n.fire("mouseout",{...e})}),this._hoveredTargets=[]}_onMouseEnter(i){let{target:t}=this.findTarget(i);this._currentTransform||t||(this.fire("mouse:over",{e:i,...Zs(this,i)}),this._hoveredTarget=void 0,this._hoveredTargets=[])}_onDragStart(i){this._isClick=!1;let t=this.getActiveObject();if(t&&t.onDragStart(i)){this._dragSource=t;let e={e:i,target:t};this.fire("dragstart",e),t.fire("dragstart",e),Yn(this.upperCanvasEl,"drag",this._onDragProgress);return}np(i)}_renderDragEffects(i,t,e){let n=!1,s=this._dropTarget;s&&s!==t&&s!==e&&(s.clearContextTop(),n=!0),t?.clearContextTop(),e!==t&&e?.clearContextTop();let r=this.contextTop;r.save(),r.transform(...this.viewportTransform),t&&(r.save(),t.transform(r),t.renderDragSourceEffect(i),r.restore(),n=!0),e&&(r.save(),e.transform(r),e.renderDropTargetEffect(i),r.restore(),n=!0),r.restore(),n&&(this.contextTopDirty=!0)}_onDragEnd(i){let{currentSubTargets:t}=this.findTarget(i),e=!!i.dataTransfer&&i.dataTransfer.dropEffect!=="none",n=e?this._activeObject:void 0,s={e:i,target:this._dragSource,subTargets:t,dragSource:this._dragSource,didDrop:e,dropTarget:n};Ii(this.upperCanvasEl,"drag",this._onDragProgress),this.fire("dragend",s),this._dragSource&&this._dragSource.fire("dragend",s),delete this._dragSource,this._onMouseUp(i)}_onDragProgress(i){let t={e:i,target:this._dragSource,dragSource:this._dragSource,dropTarget:this._draggedoverTarget};this.fire("drag",t),this._dragSource&&this._dragSource.fire("drag",t)}_onDragOver(i){let t="dragover",{currentContainer:e,currentSubTargets:n}=this.findTarget(i),s=this._dragSource,r={e:i,target:e,subTargets:n,dragSource:s,canDrop:!1,dropTarget:void 0},a;this.fire(t,r),this._fireEnterLeaveEvents(i,e,r),e&&(e.canDrop(i)&&(a=e),e.fire(t,r));for(let o=0;o<n.length;o++){let l=n[o];l.canDrop(i)&&(a=l),l.fire(t,r)}this._renderDragEffects(i,s,a),this._dropTarget=a}_onDragEnter(i){let{currentContainer:t,currentSubTargets:e}=this.findTarget(i),n={e:i,target:t,subTargets:e,dragSource:this._dragSource};this.fire("dragenter",n),this._fireEnterLeaveEvents(i,t,n)}_onDragLeave(i){let{currentSubTargets:t}=this.findTarget(i),e={e:i,target:this._draggedoverTarget,subTargets:t,dragSource:this._dragSource};this.fire("dragleave",e),this._fireEnterLeaveEvents(i,void 0,e),this._renderDragEffects(i,this._dragSource),this._dropTarget=void 0,this._hoveredTargets=[]}_onDrop(i){let{currentContainer:t,currentSubTargets:e}=this.findTarget(i),n=this._basicEventHandler("drop:before",{e:i,target:t,subTargets:e,dragSource:this._dragSource,...Zs(this,i)});n.didDrop=!1,n.dropTarget=void 0,this._basicEventHandler("drop",n),this.fire("drop:after",n)}_onContextMenu(i){let{target:t,subTargets:e}=this.findTarget(i),n=this._basicEventHandler("contextmenu:before",{e:i,target:t,subTargets:e});return this.stopContextMenu&&np(i),this._basicEventHandler("contextmenu",n),!1}_onClick(i){let t=i.detail;t>3||t<2||(this._cacheTransformEventData(i),t==2&&i.type==="dblclick"&&this._handleEvent(i,"dblclick"),t==3&&this._handleEvent(i,"tripleclick"),this._resetTransformEventData())}fireEventFromPointerEvent(i,t,e,n={}){this._cacheTransformEventData(i);let{target:s,subTargets:r}=this.findTarget(i),a={e:i,target:s,subTargets:r,...Zs(this,i),transform:this._currentTransform,...n};this.fire(t,a),s&&s.fire(e,a);for(let o=0;o<r.length;o++)r[o]!==s&&r[o].fire(e,a);this._resetTransformEventData()}getPointerId(i){let t=i.changedTouches;return t?t[0]&&t[0].identifier:this.enablePointerEvents?i.pointerId:-1}_isMainEvent(i){return i.isPrimary===!0||i.isPrimary!==!1&&(i.type==="touchend"&&i.touches.length===0||!i.changedTouches||i.changedTouches[0].identifier===this.mainTouchId)}_onTouchStart(i){this._cacheTransformEventData(i);let t=!this.allowTouchScrolling,e=this._activeObject;this.mainTouchId===void 0&&(this.mainTouchId=this.getPointerId(i)),this.__onMouseDown(i);let{target:n}=this.findTarget(i);(this.isDrawingMode||e&&n===e)&&(t=!0),t&&i.preventDefault();let s=this.upperCanvasEl,r=this._getEventPrefix(),a=ki(s);Yn(a,"touchend",this._onTouchEnd,gi),t&&Yn(a,"touchmove",this._onMouseMove,gi),Ii(s,`${r}down`,this._onMouseDown),this._resetTransformEventData()}_onMouseDown(i){this._cacheTransformEventData(i),this.__onMouseDown(i);let t=this.upperCanvasEl,e=this._getEventPrefix();Ii(t,`${e}move`,this._onMouseMove,gi);let n=ki(t);Yn(n,`${e}up`,this._onMouseUp),Yn(n,`${e}move`,this._onMouseMove,gi),this._resetTransformEventData()}_onTouchEnd(i){if(i.touches.length>0)return;this._cacheTransformEventData(i),this.__onMouseUp(i),this._resetTransformEventData(),delete this.mainTouchId;let t=this._getEventPrefix(),e=ki(this.upperCanvasEl);Ii(e,"touchend",this._onTouchEnd,gi),Ii(e,"touchmove",this._onMouseMove,gi),this._willAddMouseDown&&clearTimeout(this._willAddMouseDown),this._willAddMouseDown=setTimeout(()=>{Yn(this.upperCanvasEl,`${t}down`,this._onMouseDown),this._willAddMouseDown=0},400)}_onMouseUp(i){this._cacheTransformEventData(i),this.__onMouseUp(i);let t=this.upperCanvasEl,e=this._getEventPrefix();if(this._isMainEvent(i)){let n=ki(this.upperCanvasEl);Ii(n,`${e}up`,this._onMouseUp),Ii(n,`${e}move`,this._onMouseMove,gi),Yn(t,`${e}move`,this._onMouseMove,gi)}this._resetTransformEventData()}_onMouseMove(i){this._cacheTransformEventData(i);let t=this.getActiveObject();!this.allowTouchScrolling&&(!t||!t.shouldStartDragging(i))&&i.preventDefault&&i.preventDefault(),this.__onMouseMove(i),this._resetTransformEventData()}_onResize(){this.calcOffset(),this._resetTransformEventData()}_shouldRender(i){let t=this.getActiveObject();return!!t!=!!i||t&&i&&t!==i}__onMouseUp(i){var t;this._handleEvent(i,"up:before");let e=this._currentTransform,n=this._isClick,{target:s}=this.findTarget(i),{button:r}=i;if(r)return void((this.fireMiddleClick&&r===1||this.fireRightClick&&r===2)&&this._handleEvent(i,"up"));if(this.isDrawingMode&&this._isCurrentlyDrawing)return void this._onMouseUpInDrawingMode(i);if(!this._isMainEvent(i))return;let a,o,l=!1;if(e&&(this._finalizeCurrentTransform(i),l=e.actionPerformed),!n){let c=s===this._activeObject;this.handleSelection(i),l||(l=this._shouldRender(s)||!c&&s===this._activeObject)}if(s){let{key:c,control:h}=s.findControl(this.getViewportPoint(i),yl(i))||{};if(o=c,s.selectable&&s!==this._activeObject&&s.activeOn==="up")this.setActiveObject(s,i),l=!0;else if(h){let d=h.getMouseUpHandler(i,s,h);d&&(a=this.getScenePoint(i),d.call(h,i,e,a.x,a.y))}s.isMoving=!1}if(e&&(e.target!==s||e.corner!==o)){let c=e.target&&e.target.controls[e.corner],h=c&&c.getMouseUpHandler(i,e.target,c);a=a||this.getScenePoint(i),h&&h.call(c,i,e,a.x,a.y)}this._setCursorFromEvent(i,s),this._handleEvent(i,"up"),this._groupSelector=null,this._currentTransform=null,s&&(s.__corner=void 0),l?this.requestRenderAll():n||(t=this._activeObject)!=null&&t.isEditing||this.renderTop()}_basicEventHandler(i,t){let{target:e,subTargets:n=[]}=t;this.fire(i,t),e&&e.fire(i,t);for(let s=0;s<n.length;s++)n[s]!==e&&n[s].fire(i,t);return t}_handleEvent(i,t,e){let{target:n,subTargets:s}=this.findTarget(i),r={e:i,target:n,subTargets:s,...Zs(this,i),transform:this._currentTransform,...t==="down:before"||t==="down"?e:{}};t!=="up:before"&&t!=="up"||(r.isClick=this._isClick),this.fire(`mouse:${t}`,r),n&&n.fire(`mouse${t}`,r);for(let a=0;a<s.length;a++)s[a]!==n&&s[a].fire(`mouse${t}`,r)}_onMouseDownInDrawingMode(i){this._isCurrentlyDrawing=!0,this.getActiveObject()&&(this.discardActiveObject(i),this.requestRenderAll());let t=this.getScenePoint(i);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseDown(t,{e:i,pointer:t}),this._handleEvent(i,"down",{alreadySelected:!1})}_onMouseMoveInDrawingMode(i){if(this._isCurrentlyDrawing){let t=this.getScenePoint(i);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseMove(t,{e:i,pointer:t})}this.setCursor(this.freeDrawingCursor),this._handleEvent(i,"move")}_onMouseUpInDrawingMode(i){let t=this.getScenePoint(i);this.freeDrawingBrush?this._isCurrentlyDrawing=!!this.freeDrawingBrush.onMouseUp({e:i,pointer:t}):this._isCurrentlyDrawing=!1,this._handleEvent(i,"up")}__onMouseDown(i){this._isClick=!0,this._handleEvent(i,"down:before");let{target:t}=this.findTarget(i),e=!!t&&t===this._activeObject,{button:n}=i;if(n)return void((this.fireMiddleClick&&n===1||this.fireRightClick&&n===2)&&this._handleEvent(i,"down",{alreadySelected:e}));if(this.isDrawingMode)return void this._onMouseDownInDrawingMode(i);if(!this._isMainEvent(i)||this._currentTransform)return;let s=this._shouldRender(t),r=!1;if(this.handleMultiSelection(i,t)?(t=this._activeObject,r=!0,s=!0):this._shouldClearSelection(i,t)&&this.discardActiveObject(i),this.selection&&(!t||!t.selectable&&!t.isEditing&&t!==this._activeObject)){let a=this.getScenePoint(i);this._groupSelector={x:a.x,y:a.y,deltaY:0,deltaX:0}}if(e=!!t&&t===this._activeObject,t){t.selectable&&t.activeOn==="down"&&this.setActiveObject(t,i);let a=t.findControl(this.getViewportPoint(i),yl(i));if(t===this._activeObject&&(a||!r)){this._setupCurrentTransform(i,t,e);let o=a?a.control:void 0,l=this.getScenePoint(i),c=o&&o.getMouseDownHandler(i,t,o);c&&c.call(o,i,this._currentTransform,l.x,l.y)}}s&&(this._objectsToRender=void 0),this._handleEvent(i,"down",{alreadySelected:e}),s&&this.requestRenderAll()}_resetTransformEventData(){this._targetInfo=this._viewportPoint=this._scenePoint=void 0}_cacheTransformEventData(i){this._resetTransformEventData(),this._viewportPoint=this.getViewportPoint(i),this._scenePoint=Mn(this._viewportPoint,void 0,this.viewportTransform),this._targetInfo=this.findTarget(i),this._currentTransform&&(this._targetInfo.target=this._currentTransform.target)}__onMouseMove(i){if(this._isClick=!1,this._handleEvent(i,"move:before"),this.isDrawingMode)return void this._onMouseMoveInDrawingMode(i);if(!this._isMainEvent(i))return;let t=this._groupSelector;if(t){let e=this.getScenePoint(i);t.deltaX=e.x-t.x,t.deltaY=e.y-t.y,this.renderTop()}else if(this._currentTransform)this._transformObject(i);else{let{target:e}=this.findTarget(i);this._setCursorFromEvent(i,e),this._fireOverOutEvents(i,e)}this.textEditingManager.onMouseMove(i),this._handleEvent(i,"move")}_fireOverOutEvents(i,t){let{_hoveredTarget:e,_hoveredTargets:n}=this,{subTargets:s,currentTarget:r}=this.findTarget(i),a=Math.max(n.length,s.length);this.fireSyntheticInOutEvents("mouse",{e:i,target:t,oldTarget:e,actualTarget:r,oldActualTarget:this._hoveredActualTarget,fireCanvas:!0});for(let o=0;o<a;o++)s[o]===t||n[o]&&n[o]===e||this.fireSyntheticInOutEvents("mouse",{e:i,target:s[o],oldTarget:n[o]});this._hoveredActualTarget=r,this._hoveredTarget=t,this._hoveredTargets=s}_fireEnterLeaveEvents(i,t,e){let n=this._draggedoverTarget,s=this._hoveredTargets,{subTargets:r}=this.findTarget(i),a=Math.max(s.length,r.length);this.fireSyntheticInOutEvents("drag",{...e,target:t,oldTarget:n,fireCanvas:!0});for(let o=0;o<a;o++)this.fireSyntheticInOutEvents("drag",{...e,target:r[o],oldTarget:s[o]});this._draggedoverTarget=t}fireSyntheticInOutEvents(i,{target:t,oldTarget:e,actualTarget:n,oldActualTarget:s,fireCanvas:r,e:a,...o}){let{targetIn:l,targetOut:c,canvasIn:h,canvasOut:d}=Qx[i],u=e!==t,f=s!==n,p=t&&u,y=n&&f,m=e&&u,g=s&&f,b={...o,e:a,...Zs(this,a)},E={...b,target:e,nextTarget:t,actualTarget:s,nextActualTarget:n};(m||g)&&r&&this.fire(d,E),m&&e.fire(c,E),g&&e!==s&&s.fire(c,E);let x={...b,target:t,previousTarget:e,actualTarget:n,previousActualTarget:s};(p||y)&&r&&this.fire(h,x),p&&t.fire(l,x),y&&n!==t&&n.fire(l,x)}_transformObject(i){let t=this.getScenePoint(i),e=this._currentTransform,n=e.target,s=n.group?Mn(t,void 0,n.group.calcTransformMatrix()):t;e.shiftKey=i.shiftKey,e.altKey=!!this.centeredKey&&i[this.centeredKey],this._performTransformAction(i,e,s),e.actionPerformed&&this.requestRenderAll()}_performTransformAction(i,t,e){let{action:n,actionHandler:s,target:r}=t,a=!!s&&s(i,t,e.x,e.y);a&&r.setCoords(),n==="drag"&&a&&(t.target.isMoving=!0,this.setCursor(t.target.moveCursor||this.moveCursor)),t.actionPerformed=t.actionPerformed||a}_setCursorFromEvent(i,t){if(!t)return void this.setCursor(this.defaultCursor);let e=t.hoverCursor||this.hoverCursor,n=Ts(this._activeObject)?this._activeObject:null,s=(!n||t.group!==n)&&t.findControl(this.getViewportPoint(i));if(s){let{control:r,coord:a}=s;this.setCursor(r.cursorStyleHandler(i,r,t,a))}else{if(t.subTargetCheck){let{subTargets:r}=this.findTarget(i);r.concat().reverse().forEach(a=>{e=a.hoverCursor||e})}this.setCursor(e)}}handleMultiSelection(i,t){let e=this._activeObject,n=Ts(e);if(e&&this._isSelectionKeyPressed(i)&&this.selection&&t&&t.selectable&&(e!==t||n)&&(n||!t.isDescendantOf(e)&&!e.isDescendantOf(t))&&!t.onSelect({e:i})&&!e.getActiveControl()){if(n){let s=e.getObjects(),r=[];if(t===e){let a=this.getScenePoint(i),o=this.searchPossibleTargets(s,a);if(o.target?(t=o.target,r=o.subTargets):(o=this.searchPossibleTargets(this._objects,a),t=o.target,r=o.subTargets),!t||!t.selectable)return!1}t.group===e?(e.remove(t),this._hoveredTarget=t,this._hoveredTargets=r,e.size()===1&&this._setActiveObject(e.item(0),i)):(e.multiSelectAdd(t),this._hoveredTarget=e,this._hoveredTargets=r),this._fireSelectionEvents(s,i)}else{e.isEditing&&e.exitEditing();let s=new(Dt.getClass("ActiveSelection"))([],{canvas:this});s.multiSelectAdd(e,t),this._hoveredTarget=s,this._setActiveObject(s,i),this._fireSelectionEvents([e],i)}return!0}return!1}handleSelection(i){if(!this.selection||!this._groupSelector)return!1;let{x:t,y:e,deltaX:n,deltaY:s}=this._groupSelector,r=new z(t,e),a=r.add(new z(n,s)),o=r.min(a),l=r.max(a).subtract(o),c=this.collectObjects({left:o.x,top:o.y,width:l.x,height:l.y},{includeIntersecting:!this.selectionFullyContained}),h=r.eq(a)?c[0]?[c[0]]:[]:c.length>1?c.filter(d=>!d.onSelect({e:i})).reverse():c;if(h.length===1)this.setActiveObject(h[0],i);else if(h.length>1){let d=Dt.getClass("ActiveSelection");this.setActiveObject(new d(h,{canvas:this}),i)}return this._groupSelector=null,!0}toCanvasElement(i=1,t){let{upper:e}=this.elements;e.ctx=void 0;let n=super.toCanvasElement(i,t);return e.ctx=e.el.getContext("2d"),n}clear(){this.textEditingManager.clear(),super.clear()}destroy(){this.removeListeners(),this.textEditingManager.dispose(),super.destroy()}},sg={x1:0,y1:0,x2:0,y2:0},Xx={...sg,r1:0,r2:0},ir=(i,t)=>isNaN(i)&&typeof t=="number"?t:i;function rg(i){return i&&/%$/.test(i)&&Number.isFinite(parseFloat(i))}function ag(i,t){return Rs(0,ir(typeof i=="number"?i:typeof i=="string"?parseFloat(i)/(rg(i)?100:1):NaN,t),1)}var jx=/\s*;\s*/,zx=/\s*:\s*/;function Wx(i,t){let e,n,s=i.getAttribute("style");if(s){let a=s.split(jx);a[a.length-1]===""&&a.pop();for(let o=a.length;o--;){let[l,c]=a[o].split(zx).map(h=>h.trim());l==="stop-color"?e=c:l==="stop-opacity"&&(n=c)}}e=e||i.getAttribute("stop-color")||"rgb(0,0,0)",n=ir(parseFloat(n||i.getAttribute("stop-opacity")||""),1);let r=new bi(e);return r.setAlpha(r.getAlpha()*n*t),{offset:ag(i.getAttribute("offset"),0),color:r.toRgba()}}function Zx(i,t){let e=[],n=i.getElementsByTagName("stop"),s=ag(t,1);for(let r=n.length;r--;)e.push(Wx(n[r],s));return e}function og(i){return i.nodeName==="linearGradient"||i.nodeName==="LINEARGRADIENT"?"linear":"radial"}function lg(i){return i.getAttribute("gradientUnits")==="userSpaceOnUse"?"pixels":"percentage"}function qi(i,t){return i.getAttribute(t)}function Kx(i,t){return(function(e,{width:n,height:s,gradientUnits:r}){let a;return Object.entries(e).reduce((o,[l,c])=>{if(c==="Infinity")a=1;else if(c==="-Infinity")a=0;else{let h=typeof c=="string";a=h?parseFloat(c):c,h&&rg(c)&&(a*=.01,r==="pixels"&&(l!=="x1"&&l!=="x2"&&l!=="r2"||(a*=n),l!=="y1"&&l!=="y2"||(a*=s)))}return o[l]=a,o},{})})(og(i)==="linear"?(function(e){return{x1:qi(e,"x1")||0,y1:qi(e,"y1")||0,x2:qi(e,"x2")||"100%",y2:qi(e,"y2")||0}})(i):(function(e){return{x1:qi(e,"fx")||qi(e,"cx")||"50%",y1:qi(e,"fy")||qi(e,"cy")||"50%",r1:0,x2:qi(e,"cx")||"50%",y2:qi(e,"cy")||"50%",r2:qi(e,"r")||"50%"}})(i),{...t,gradientUnits:lg(i)})}var nr=class{constructor(i){let{type:t="linear",gradientUnits:e="pixels",coords:n={},colorStops:s=[],offsetX:r=0,offsetY:a=0,gradientTransform:o,id:l}=i||{};Object.assign(this,{type:t,gradientUnits:e,coords:{...t==="radial"?Xx:sg,...n},colorStops:s,offsetX:r,offsetY:a,gradientTransform:o,id:l?`${l}_${Wn()}`:Wn()})}addColorStop(i){for(let t in i)this.colorStops.push({offset:parseFloat(t),color:i[t]});return this}toObject(i){return{...Is(this,i),type:this.type,coords:{...this.coords},colorStops:this.colorStops.map(t=>({...t})),offsetX:this.offsetX,offsetY:this.offsetY,gradientUnits:this.gradientUnits,gradientTransform:this.gradientTransform?[...this.gradientTransform]:void 0}}toSVG(i,{additionalTransform:t}={}){let e=[],n=this.gradientTransform?this.gradientTransform.concat():ii.concat(),s=this.gradientUnits==="pixels"?"userSpaceOnUse":"objectBoundingBox",r=this.colorStops.map(d=>({...d})).sort((d,u)=>d.offset-u.offset),a=-this.offsetX,o=-this.offsetY;var l;s==="objectBoundingBox"?(a/=i.width,o/=i.height):(a+=i.width/2,o+=i.height/2),(l=i)&&typeof l._renderPathCommands=="function"&&this.gradientUnits!=="percentage"&&(a-=i.pathOffset.x,o-=i.pathOffset.y),n[4]-=a,n[5]-=o;let c=[`id="SVGID_${te(String(this.id))}"`,`gradientUnits="${s}"`,`gradientTransform="${t?t+" ":""}${cr(n)}"`,""].join(" "),h=d=>parseFloat(String(d));if(this.type==="linear"){let{x1:d,y1:u,x2:f,y2:p}=this.coords,y=h(d),m=h(u),g=h(f),b=h(p);e.push("<linearGradient ",c,' x1="',y,'" y1="',m,'" x2="',g,'" y2="',b,`">
`)}else if(this.type==="radial"){let{x1:d,y1:u,x2:f,y2:p,r1:y,r2:m}=this.coords,g=h(d),b=h(u),E=h(f),x=h(p),T=h(y),M=h(m),D=T>M;e.push("<radialGradient ",c,' cx="',D?g:E,'" cy="',D?b:x,'" r="',D?T:M,'" fx="',D?E:g,'" fy="',D?x:b,`">
`),D&&(r.reverse(),r.forEach(L=>{L.offset=1-L.offset}));let v=Math.min(T,M);if(v>0){let L=v/Math.max(T,M);r.forEach(R=>{R.offset+=L*(1-R.offset)})}}return r.forEach(({color:d,offset:u})=>{let f=String(d),p=Il(f)?f:new bi(f).toRgba();e.push(`<stop offset="${100*u}%" style="stop-color:${te(p)};"/>
`)}),e.push(this.type==="linear"?"</linearGradient>":"</radialGradient>",`
`),e.join("")}toLive(i){let{x1:t,y1:e,x2:n,y2:s,r1:r,r2:a}=this.coords,o=this.type==="linear"?i.createLinearGradient(t,e,n,s):i.createRadialGradient(t,e,r,n,s,a);return this.colorStops.forEach(({color:l,offset:c})=>{o.addColorStop(c,l)}),o}static async fromObject(i){let{colorStops:t,gradientTransform:e}=i;return new this({...i,colorStops:t?t.map(n=>({...n})):void 0,gradientTransform:e?[...e]:void 0})}static fromElement(i,t,e){let n=lg(i),s=t._findCenterFromElement();return new this({id:i.getAttribute("id")||void 0,type:og(i),coords:Kx(i,{width:e.viewBoxWidth||e.width,height:e.viewBoxHeight||e.height}),colorStops:Zx(i,e.opacity),gradientUnits:n,gradientTransform:ud(i.getAttribute("gradientTransform")||""),...n==="pixels"?{offsetX:t.width/2-s.x,offsetY:t.height/2-s.y}:{offsetX:0,offsetY:0}})}};N(nr,"type","Gradient"),Dt.setClass(nr,"gradient"),Dt.setClass(nr,"linear"),Dt.setClass(nr,"radial");var td=class{get type(){return"pattern"}set type(i){zn("warn","Setting type has no effect",i)}constructor(i){N(this,"repeat","repeat"),N(this,"offsetX",0),N(this,"offsetY",0),N(this,"crossOrigin",""),this.id=Wn(),Object.assign(this,i)}isImageSource(){return!!this.source&&typeof this.source.src=="string"}isCanvasSource(){return!!this.source&&!!this.source.toDataURL}sourceToString(){return this.isImageSource()?this.source.src:this.isCanvasSource()?this.source.toDataURL():""}toLive(i){return this.source&&(!this.isImageSource()||this.source.complete&&this.source.naturalWidth!==0&&this.source.naturalHeight!==0)?i.createPattern(this.source,this.repeat):null}toObject(i=[]){let{repeat:t,crossOrigin:e}=this;return{...Is(this,i),type:"pattern",source:this.sourceToString(),repeat:t,crossOrigin:e,offsetX:ge(this.offsetX,de.NUM_FRACTION_DIGITS),offsetY:ge(this.offsetY,de.NUM_FRACTION_DIGITS),patternTransform:this.patternTransform?[...this.patternTransform]:null}}toSVG({width:i,height:t}){let{source:e,repeat:n,id:s}=this,r=ir(this.offsetX/i,0),a=ir(this.offsetY/t,0),o=n==="repeat-y"||n==="no-repeat"?1+Math.abs(r||0):ir(e.width/i,0),l=n==="repeat-x"||n==="no-repeat"?1+Math.abs(a||0):ir(e.height/t,0);return[`<pattern id="SVGID_${te(s)}" x="${r}" y="${a}" width="${o}" height="${l}">`,`<image x="0" y="0" width="${e.width}" height="${e.height}" xlink:href="${te(this.sourceToString())}"></image>`,"</pattern>",""].join(`
`)}static async fromObject({type:i,source:t,patternTransform:e,...n},s){let r=await Ba(t,{...s,crossOrigin:n.crossOrigin});return new this({...n,patternTransform:e&&e.slice(0),source:r})}};N(td,"type","Pattern"),Dt.setClass(td),Dt.setClass(td,"pattern");var ha=class cg extends Xe{constructor(t,{path:e,left:n,top:s,...r}={}){super(),Object.assign(this,cg.ownDefaults),this.setOptions(r),this._setPath(t||[],!0),typeof n=="number"&&this.set("left",n),typeof s=="number"&&this.set("top",s)}_setPath(t,e){this.path=Um(Array.isArray(t)?t:Qm(t)),this.setBoundingBox(e)}_findCenterFromElement(){let t=this._calcBoundsFromPath();return new z(t.left+t.width/2,t.top+t.height/2)}_renderPathCommands(t){let e=-this.pathOffset.x,n=-this.pathOffset.y;t.beginPath();for(let s of this.path)switch(s[0]){case"L":t.lineTo(s[1]+e,s[2]+n);break;case"M":t.moveTo(s[1]+e,s[2]+n);break;case"C":t.bezierCurveTo(s[1]+e,s[2]+n,s[3]+e,s[4]+n,s[5]+e,s[6]+n);break;case"Q":t.quadraticCurveTo(s[1]+e,s[2]+n,s[3]+e,s[4]+n);break;case"Z":t.closePath()}}_render(t){this._renderPathCommands(t),this._renderPaintInOrder(t)}toString(){return`#<Path (${this.complexity()}): { "top": ${this.top}, "left": ${this.left} }>`}toObject(t=[]){return{...super.toObject(t),path:this.path.map(e=>e.slice())}}toDatalessObject(t=[]){let e=this.toObject(t);return this.sourcePath&&(delete e.path,e.sourcePath=this.sourcePath),e}_toSVG(){return["<path ","COMMON_PARTS",`d="${Xm(this.path,de.NUM_FRACTION_DIGITS)}" stroke-linecap="round" />
`]}_getOffsetTransform(){let t=de.NUM_FRACTION_DIGITS;return` translate(${ge(-this.pathOffset.x,t)}, ${ge(-this.pathOffset.y,t)})`}toClipPathSVG(t){let e=this._getOffsetTransform();return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}toSVG(t){let e=this._getOffsetTransform();return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}complexity(){return this.path.length}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{width:e,height:n,pathOffset:s}=this._calcDimensions();this.set({width:e,height:n,pathOffset:s}),t&&this.setPositionByOrigin(s,"center","center")}_calcBoundsFromPath(){let t=[],e=0,n=0,s=0,r=0;for(let a of this.path)switch(a[0]){case"L":s=a[1],r=a[2],t.push({x:e,y:n},{x:s,y:r});break;case"M":s=a[1],r=a[2],e=s,n=r;break;case"C":t.push(..._d(s,r,a[1],a[2],a[3],a[4],a[5],a[6])),s=a[5],r=a[6];break;case"Q":t.push(..._d(s,r,a[1],a[2],a[1],a[2],a[3],a[4])),s=a[3],r=a[4];break;case"Z":s=e,r=n}return ln(t)}_calcDimensions(){let t=this._calcBoundsFromPath();return{...t,pathOffset:new z(t.left+t.width/2,t.top+t.height/2)}}static fromObject(t){return this._fromObject(t,{extraParam:"path"})}static async fromElement(t,e,n){let{d:s,...r}=Dn(t,this.ATTRIBUTE_NAMES,n);return new this(s,{...r,...e,left:void 0,top:void 0})}};N(ha,"type","Path"),N(ha,"cacheProperties",[...Ln,"path","fillRule"]),N(ha,"ATTRIBUTE_NAMES",[...is,"d"]),Dt.setClass(ha),Dt.setSVGClass(ha);var hg=["radius","startAngle","endAngle","counterClockwise"],Ks=class bd extends Xe{static getDefaults(){return{...super.getDefaults(),...bd.ownDefaults}}constructor(t){super(),Object.assign(this,bd.ownDefaults),this.setOptions(t)}_set(t,e){return super._set(t,e),t==="radius"&&this.setRadius(e),this}_render(t){t.beginPath(),t.arc(0,0,this.radius,Ee(this.startAngle),Ee(this.endAngle),this.counterClockwise),this._renderPaintInOrder(t)}getRadiusX(){return this.get("radius")*this.get(Kn)}getRadiusY(){return this.get("radius")*this.get(ts)}setRadius(t){this.radius=t,this.set({width:2*t,height:2*t})}toObject(t=[]){return super.toObject([...hg,...t])}_toSVG(){let{radius:t,startAngle:e,endAngle:n}=this,s=(n-e)%360;if(s===0)return["<circle ","COMMON_PARTS",'cx="0" cy="0" ','r="',`${te(t)}`,`" />
`];{let r=Ee(e),a=Ee(n),o=Gi(r)*t,l=Ji(r)*t,c=Gi(a)*t,h=Ji(a)*t;return[`<path d="M ${o} ${l} A ${t} ${t} 0 ${+(s>180)} ${+!this.counterClockwise} ${c} ${h}" `,"COMMON_PARTS",` />
`]}}static async fromElement(t,e,n){let{left:s=0,top:r=0,radius:a=0,...o}=Dn(t,this.ATTRIBUTE_NAMES,n);return new this({...o,radius:a,left:s-a,top:r-a})}static fromObject(t){return super._fromObject(t)}};N(Ks,"type","Circle"),N(Ks,"cacheProperties",[...Ln,...hg]),N(Ks,"ownDefaults",{radius:0,startAngle:0,endAngle:360,counterClockwise:!1}),N(Ks,"ATTRIBUTE_NAMES",["cx","cy","r",...is]),Dt.setClass(Ks),Dt.setSVGClass(Ks);var Sd=["x1","x2","y1","y2"],Xn=class dg extends Xe{constructor([t,e,n,s]=[0,0,0,0],r={}){super(),Object.assign(this,dg.ownDefaults),this.setOptions(r),this.x1=t,this.x2=n,this.y1=e,this.y2=s,this._setWidthHeight();let{left:a,top:o}=r;typeof a=="number"&&this.set("left",a),typeof o=="number"&&this.set("top",o)}_setWidthHeight(){let{x1:t,y1:e,x2:n,y2:s}=this;this.width=Math.abs(n-t),this.height=Math.abs(s-e);let{left:r,top:a,width:o,height:l}=ln([{x:t,y:e},{x:n,y:s}]),c=new z(r+o/2,a+l/2);this.setPositionByOrigin(c,ye,ye)}_set(t,e){return super._set(t,e),Sd.includes(t)&&this._setWidthHeight(),this}_render(t){t.beginPath();let e=this.calcLinePoints();t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.lineWidth=this.strokeWidth;let n=t.strokeStyle;var s;Bi(this.stroke)?t.strokeStyle=this.stroke.toLive(t):t.strokeStyle=(s=this.stroke)==null?t.fillStyle:s,this.stroke&&this._renderStroke(t),t.strokeStyle=n}_findCenterFromElement(){return new z((this.x1+this.x2)/2,(this.y1+this.y2)/2)}toObject(t=[]){return{...super.toObject(t),...this.calcLinePoints()}}_getNonTransformedDimensions(){let t=super._getNonTransformedDimensions();return this.strokeLineCap==="butt"&&(this.width===0&&(t.y-=this.strokeWidth),this.height===0&&(t.x-=this.strokeWidth)),t}calcLinePoints(){let{x1:t,x2:e,y1:n,y2:s,width:r,height:a}=this,o=t<=e?-.5:.5,l=n<=s?-.5:.5;return{x1:o*r,x2:o*-r,y1:l*a,y2:l*-a}}_toSVG(){let{x1:t,x2:e,y1:n,y2:s}=this.calcLinePoints();return["<line ","COMMON_PARTS",`x1="${t}" y1="${n}" x2="${e}" y2="${s}" />
`]}static async fromElement(t,e,n){let{x1:s=0,y1:r=0,x2:a=0,y2:o=0,...l}=Dn(t,this.ATTRIBUTE_NAMES,n);return new this([s,r,a,o],l)}static fromObject({x1:t,y1:e,x2:n,y2:s,...r}){return this._fromObject({...r,points:[t,e,n,s]},{extraParam:"points"})}};N(Xn,"type","Line"),N(Xn,"cacheProperties",[...Ln,...Sd]),N(Xn,"ATTRIBUTE_NAMES",is.concat(Sd)),Dt.setClass(Xn),Dt.setSVGClass(Xn);var tl=class Td extends Xe{static getDefaults(){return{...super.getDefaults(),...Td.ownDefaults}}constructor(t){super(),Object.assign(this,Td.ownDefaults),this.setOptions(t)}_render(t){let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,n),t.lineTo(0,-n),t.lineTo(e,n),t.closePath(),this._renderPaintInOrder(t)}_toSVG(){let t=this.width/2,e=this.height/2;return["<polygon ","COMMON_PARTS",'points="',`${-t} ${e},0 ${-e},${t} ${e}`,'" />']}};N(tl,"type","Triangle"),N(tl,"ownDefaults",{width:100,height:100}),Dt.setClass(tl),Dt.setSVGClass(tl);var ug=["rx","ry"],tr=class Ed extends Xe{static getDefaults(){return{...super.getDefaults(),...Ed.ownDefaults}}constructor(t){super(),Object.assign(this,Ed.ownDefaults),this.setOptions(t)}_set(t,e){switch(super._set(t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this}getRx(){return this.get("rx")*this.get(Kn)}getRy(){return this.get("ry")*this.get(ts)}toObject(t=[]){return super.toObject([...ug,...t])}_toSVG(){return["<ellipse ","COMMON_PARTS",`cx="0" cy="0" rx="${te(this.rx)}" ry="${te(this.ry)}" />
`]}_render(t){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(0,0,this.rx,0,Vi,!1),t.restore(),this._renderPaintInOrder(t)}static async fromElement(t,e,n){let s=Dn(t,this.ATTRIBUTE_NAMES,n);return s.left=(s.left||0)-s.rx,s.top=(s.top||0)-s.ry,new this(s)}};N(tr,"type","Ellipse"),N(tr,"cacheProperties",[...Ln,...ug]),N(tr,"ownDefaults",{rx:0,ry:0}),N(tr,"ATTRIBUTE_NAMES",[...is,"cx","cy","rx","ry"]),Dt.setClass(tr),Dt.setSVGClass(tr);var fg={exactBoundingBox:!1},Qn=class Md extends Xe{static getDefaults(){return{...super.getDefaults(),...Md.ownDefaults}}constructor(t=[],e={}){super(),N(this,"strokeDiff",void 0),Object.assign(this,Md.ownDefaults),this.setOptions(e),this.points=t;let{left:n,top:s}=e;this.initialized=!0,this.setBoundingBox(!0),typeof n=="number"&&this.set("left",n),typeof s=="number"&&this.set("top",s)}isOpen(){return!0}_projectStrokeOnPoints(t){return Fm(this.points,t,this.isOpen())}_calcDimensions(t){t={scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:this.strokeMiterLimit,strokeUniform:this.strokeUniform,strokeWidth:this.strokeWidth,...t||{}};let e=this.exactBoundingBox?this._projectStrokeOnPoints(t).map(c=>c.projectedPoint):this.points;if(e.length===0)return{left:0,top:0,width:0,height:0,pathOffset:new z,strokeOffset:new z,strokeDiff:new z};let n=ln(e),s=Ha({...t,scaleX:1,scaleY:1}),r=ln(this.points.map(c=>Qe(c,s,!0))),a=new z(this.scaleX,this.scaleY),o=n.left+n.width/2,l=n.top+n.height/2;return this.exactBoundingBox&&(o-=l*Math.tan(Ee(this.skewX)),l-=o*Math.tan(Ee(this.skewY))),{...n,pathOffset:new z(o,l),strokeOffset:new z(r.left,r.top).subtract(new z(n.left,n.top)).multiply(a),strokeDiff:new z(n.width,n.height).subtract(new z(r.width,r.height)).multiply(a)}}_findCenterFromElement(){let t=ln(this.points);return new z(t.left+t.width/2,t.top+t.height/2)}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{left:e,top:n,width:s,height:r,pathOffset:a,strokeOffset:o,strokeDiff:l}=this._calcDimensions();this.set({width:s,height:r,pathOffset:a,strokeOffset:o,strokeDiff:l}),t&&this.setPositionByOrigin(new z(e+s/2,n+r/2),"center","center")}isStrokeAccountedForInDimensions(){return this.exactBoundingBox}_getNonTransformedDimensions(){return this.exactBoundingBox?new z(this.width,this.height):super._getNonTransformedDimensions()}_getTransformedDimensions(t={}){if(this.exactBoundingBox){let a;if(Object.keys(t).some(o=>this.strokeUniform||this.constructor.layoutProperties.includes(o))){var e,n;let{width:o,height:l}=this._calcDimensions(t);a=new z((e=t.width)==null?o:e,(n=t.height)==null?l:n)}else{var s,r;a=new z((s=t.width)==null?this.width:s,(r=t.height)==null?this.height:r)}return a.multiply(new z(t.scaleX||this.scaleX,t.scaleY||this.scaleY))}return super._getTransformedDimensions(t)}_set(t,e){let n=this.initialized&&this[t]!==e,s=super._set(t,e);return this.exactBoundingBox&&n&&((t==="scaleX"||t==="scaleY")&&this.strokeUniform&&this.constructor.layoutProperties.includes("strokeUniform")||this.constructor.layoutProperties.includes(t))&&this.setDimensions(),s}toObject(t=[]){return{...super.toObject(t),points:this.points.map(({x:e,y:n})=>({x:e,y:n}))}}_toSVG(){let t=this.pathOffset.x,e=this.pathOffset.y,n=de.NUM_FRACTION_DIGITS,s=this.points.map(({x:r,y:a})=>`${ge(r-t,n)},${ge(a-e,n)}`).join(" ");return[`<${te(this.constructor.type).toLowerCase()} `,"COMMON_PARTS",`points="${s}" />
`]}_render(t){let e=this.points.length,n=this.pathOffset.x,s=this.pathOffset.y;if(e&&!isNaN(this.points[e-1].y)){t.beginPath(),t.moveTo(this.points[0].x-n,this.points[0].y-s);for(let r=0;r<e;r++){let a=this.points[r];t.lineTo(a.x-n,a.y-s)}!this.isOpen()&&t.closePath(),this._renderPaintInOrder(t)}}complexity(){return this.points.length}static async fromElement(t,e,n){let s=(function(l){if(!l)return[];let c=l.replace(/,/g," ").trim().split(/\s+/),h=[];for(let d=0;d<c.length;d+=2)h.push({x:parseFloat(c[d]),y:parseFloat(c[d+1])});return h})(t.getAttribute("points")),{left:r,top:a,...o}=Dn(t,this.ATTRIBUTE_NAMES,n);return new this(s,{...o,...e})}static fromObject(t){return this._fromObject(t,{extraParam:"points"})}};N(Qn,"ownDefaults",fg),N(Qn,"type","Polyline"),N(Qn,"layoutProperties",[fr,pr,"strokeLineCap","strokeLineJoin","strokeMiterLimit","strokeWidth","strokeUniform","points"]),N(Qn,"cacheProperties",[...Ln,"points"]),N(Qn,"ATTRIBUTE_NAMES",[...is]),Dt.setClass(Qn),Dt.setSVGClass(Qn);var el=class extends Qn{isOpen(){return!1}};N(el,"ownDefaults",fg),N(el,"type","Polygon"),Dt.setClass(el),Dt.setSVGClass(el);var pg=class extends Xe{isEmptyStyles(i){if(!this.styles||i!==void 0&&!this.styles[i])return!0;let t=i===void 0?this.styles:{line:this.styles[i]};for(let e in t)for(let n in t[e])for(let s in t[e][n])return!1;return!0}styleHas(i,t){if(!this.styles||t!==void 0&&!this.styles[t])return!1;let e=t===void 0?this.styles:{0:this.styles[t]};for(let n in e)for(let s in e[n])if(e[n][s][i]!==void 0)return!0;return!1}cleanStyle(i){if(!this.styles)return!1;let t=this.styles,e,n,s=0,r=!0,a=0;for(let o in t){e=0;for(let l in t[o]){let c=t[o][l]||{};s++,c[i]===void 0?r=!1:(n?c[i]!==n&&(r=!1):n=c[i],c[i]===this[i]&&delete c[i]),Object.keys(c).length===0?delete t[o][l]:e++}e===0&&delete t[o]}for(let o=0;o<this._textLines.length;o++)a+=this._textLines[o].length;r&&s===a&&(this[i]=n,this.removeStyle(i))}removeStyle(i){if(!this.styles)return;let t=this.styles,e,n,s;for(n in t){for(s in e=t[n],e)delete e[s][i],Object.keys(e[s]).length===0&&delete e[s];Object.keys(e).length===0&&delete t[n]}}_extendStyles(i,t){let{lineIndex:e,charIndex:n}=this.get2DCursorLocation(i);this._getLineStyle(e)||this._setLineStyle(e);let s=Hd({...this._getStyleDeclaration(e,n),...t},r=>r!==void 0);this._setStyleDeclaration(e,n,s)}getSelectionStyles(i,t,e){let n=[];for(let s=i;s<(t||i);s++)n.push(this.getStyleAtPosition(s,e));return n}getStyleAtPosition(i,t){let{lineIndex:e,charIndex:n}=this.get2DCursorLocation(i);return t?this.getCompleteStyleDeclaration(e,n):this._getStyleDeclaration(e,n)}setSelectionStyles(i,t,e){for(let n=t;n<(e||t);n++)this._extendStyles(n,i);this._forceClearCache=!0}_getStyleDeclaration(i,t){var e;let n=this.styles&&this.styles[i];return n&&(e=n[t])!=null?e:{}}getCompleteStyleDeclaration(i,t){return{...Is(this,this.constructor._styleProperties),...this._getStyleDeclaration(i,t)}}_setStyleDeclaration(i,t,e){this.styles[i][t]=e}_deleteStyleDeclaration(i,t){delete this.styles[i][t]}_getLineStyle(i){return!!this.styles[i]}_setLineStyle(i){this.styles[i]={}}_deleteLineStyle(i){delete this.styles[i]}};N(pg,"_styleProperties",u_);var tv=/  +/g,ev=/"/g;function ed(i,t,e,n,s){return`		${((r,{left:a,top:o,width:l,height:c},h=de.NUM_FRACTION_DIGITS)=>{let d=Pa(oi,r,!1),[u,f,p,y]=[a,o,l,c].map(m=>ge(m,h));return`<rect ${d} x="${u}" y="${f}" width="${p}" height="${y}"></rect>`})(i,{left:t,top:e,width:n,height:s})}
`}var id,an=class fa extends pg{static getDefaults(){return{...super.getDefaults(),...fa.ownDefaults}}constructor(t,e){super(),N(this,"__charBounds",[]),Object.assign(this,fa.ownDefaults),this.setOptions(e),this.styles||(this.styles={}),this.text=t,this.initialized=!0,this.path&&this.setPathInfo(),this.initDimensions(),this.setCoords()}setPathInfo(){let t=this.path;t&&(t.segmentsInfo=ru(t.path))}_splitText(){let t=this._splitTextIntoLines(this.text);return this.textLines=t.lines,this._textLines=t.graphemeLines,this._unwrappedTextLines=t._unwrappedLines,this._text=t.graphemeText,t}initDimensions(){this._splitText(),this._clearCache(),this.dirty=!0,this.path?(this.width=this.path.width,this.height=this.path.height):(this.width=this.calcTextWidth()||this.cursorWidth||this.MIN_TEXT_WIDTH,this.height=this.calcTextHeight()),this.textAlign.includes("justify")&&this.enlargeSpaces()}enlargeSpaces(){let t,e,n,s,r,a,o;for(let l=0,c=this._textLines.length;l<c;l++)if((this.textAlign==="justify"||l!==c-1&&!this.isEndOfWrapping(l))&&(s=0,r=this._textLines[l],e=this.getLineWidth(l),e<this.width&&(o=this.textLines[l].match(this._reSpacesAndTabs)))){n=o.length,t=(this.width-e)/n;for(let h=0;h<=r.length;h++)a=this.__charBounds[l][h],this._reSpaceAndTab.test(r[h])?(a.width+=t,a.kernedWidth+=t,a.left+=s,s+=t):a.left+=s}}isEndOfWrapping(t){return t===this._textLines.length-1}missingNewlineOffset(t){return 1}get2DCursorLocation(t,e){let n=e?this._unwrappedTextLines:this._textLines,s;for(s=0;s<n.length;s++){if(t<=n[s].length)return{lineIndex:s,charIndex:t};t-=n[s].length+this.missingNewlineOffset(s,e)}return{lineIndex:s-1,charIndex:n[s-1].length<t?n[s-1].length:t}}toString(){return`#<Text (${this.complexity()}): { "text": "${this.text}", "fontFamily": "${this.fontFamily}" }>`}_getCacheCanvasDimensions(){let t=super._getCacheCanvasDimensions(),e=this.fontSize;return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t}_render(t){let e=this.path;e&&!e.isNotVisible()&&e._render(t),this._setTextStyles(t),this._renderTextLinesBackground(t),this._renderTextDecoration(t,"underline"),this._renderText(t),this._renderTextDecoration(t,"overline"),this._renderTextDecoration(t,"linethrough")}_renderText(t){this.paintFirst==="stroke"?(this._renderTextStroke(t),this._renderTextFill(t)):(this._renderTextFill(t),this._renderTextStroke(t))}_setTextStyles(t,e,n){if(t.textBaseline="alphabetic",this.path)switch(this.pathAlign){case ye:t.textBaseline="middle";break;case"ascender":t.textBaseline="top";break;case"descender":t.textBaseline=Lp}t.font=this._getFontDeclaration(e,n)}calcTextWidth(){let t=this.getLineWidth(0);for(let e=1,n=this._textLines.length;e<n;e++){let s=this.getLineWidth(e);s>t&&(t=s)}return t}_renderTextLine(t,e,n,s,r,a){this._renderChars(t,e,n,s,r,a)}_renderTextLinesBackground(t){if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor"))return;let e=t.fillStyle,n=this._getLeftOffset(),s=this._getTopOffset();for(let r=0,a=this._textLines.length;r<a;r++){let o=this.getHeightOfLine(r);if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor",r)){s+=o;continue}let l=this._textLines[r].length,c=this._getLineLeftOffset(r),h,d,u=0,f=0,p=this.getValueOfPropertyAt(r,0,"textBackgroundColor"),y=this.getHeightOfLineImpl(r);for(let m=0;m<l;m++){let g=this.__charBounds[r][m];d=this.getValueOfPropertyAt(r,m,"textBackgroundColor"),this.path?(t.save(),t.translate(g.renderLeft,g.renderTop),t.rotate(g.angle),t.fillStyle=d,d&&t.fillRect(-g.width/2,-y*(1-this._fontSizeFraction),g.width,y),t.restore()):d===p?u+=g.kernedWidth:(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-u),t.fillStyle=p,p&&t.fillRect(h,s,u,y),f=g.left,u=g.width,p=d)}d&&!this.path&&(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-u),t.fillStyle=d,t.fillRect(h,s,u,y)),s+=o}t.fillStyle=e,this._removeShadow(t)}_measureChar(t,e,n,s){let r=Aa.getFontCache(e),a=this._getFontDeclaration(e),o=n?n+t:t,l=n&&a===this._getFontDeclaration(s),c=e.fontSize/this.CACHE_FONT_SIZE,h,d,u,f;if(n&&r.has(n)&&(u=r.get(n)),r.has(t)&&(f=h=r.get(t)),l&&r.has(o)&&(d=r.get(o),f=d-u),h===void 0||u===void 0||d===void 0){let p=(id||(id=vi({width:0,height:0}).getContext("2d")),id);this._setTextStyles(p,e,!0),h===void 0&&(f=h=p.measureText(t).width,r.set(t,h)),u===void 0&&l&&n&&(u=p.measureText(n).width,r.set(n,u)),l&&d===void 0&&(d=p.measureText(o).width,r.set(o,d),f=d-u)}return{width:h*c,kernedWidth:f*c}}getHeightOfChar(t,e){return this.getValueOfPropertyAt(t,e,"fontSize")}measureLine(t){let e=this._measureLine(t);return this.charSpacing!==0&&(e.width-=this._getWidthOfCharSpacing()),e.width<0&&(e.width=0),e}_measureLine(t){let e,n,s=0,r=this.pathSide===Ui,a=this.path,o=this._textLines[t],l=o.length,c=Array(l);this.__charBounds[t]=c;for(let h=0;h<l;h++){let d=o[h];n=this._getGraphemeBox(d,t,h,e),c[h]=n,s+=n.kernedWidth,e=d}if(c[l]={left:n?n.left+n.width:0,width:0,kernedWidth:0,height:this.fontSize,deltaY:0},a&&a.segmentsInfo){let h=0,d=a.segmentsInfo[a.segmentsInfo.length-1].length;switch(this.textAlign){case Oe:h=r?d-s:0;break;case ye:h=(d-s)/2;break;case Ui:h=r?0:d-s}h+=this.pathStartOffset*(r?-1:1);for(let u=r?l-1:0;r?u>=0:u<l;r?u--:u++)n=c[u],h>d?h%=d:h<0&&(h+=d),this._setGraphemeOnPath(h,n),h+=n.kernedWidth}return{width:s,numOfSpaces:0}}_setGraphemeOnPath(t,e){let n=t+e.kernedWidth/2,s=this.path,r=Ym(s.path,n,s.segmentsInfo);e.renderLeft=r.x-s.pathOffset.x,e.renderTop=r.y-s.pathOffset.y,e.angle=r.angle+(this.pathSide==="right"?Math.PI:0)}_getGraphemeBox(t,e,n,s,r){let a=this.getCompleteStyleDeclaration(e,n),o=s?this.getCompleteStyleDeclaration(e,n-1):{},l=this._measureChar(t,a,s,o),c,h=l.kernedWidth,d=l.width;this.charSpacing!==0&&(c=this._getWidthOfCharSpacing(),d+=c,h+=c);let u={width:d,left:0,height:a.fontSize,kernedWidth:h,deltaY:a.deltaY};if(n>0&&!r){let f=this.__charBounds[e][n-1];u.left=f.left+f.width+l.kernedWidth-l.width}return u}getHeightOfLineImpl(t){let e=this.__lineHeights;if(e[t])return e[t];let n=this.getHeightOfChar(t,0);for(let s=1,r=this._textLines[t].length;s<r;s++)n=Math.max(this.getHeightOfChar(t,s),n);return e[t]=n*this._fontSizeMult}getHeightOfLine(t){return this.getHeightOfLineImpl(t)*this.lineHeight}calcTextHeight(){let t=0;for(let e=0,n=this._textLines.length;e<n;e++)t+=e===n-1?this.getHeightOfLineImpl(e):this.getHeightOfLine(e);return t}_getLeftOffset(){return this.direction==="ltr"?-this.width/2:this.width/2}_getTopOffset(){return-this.height/2}_renderTextCommon(t,e){t.save();let n=0,s=this._getLeftOffset(),r=this._getTopOffset();for(let a=0,o=this._textLines.length;a<o;a++)this._renderTextLine(e,t,this._textLines[a],s+this._getLineLeftOffset(a),r+n+this.getHeightOfLineImpl(a),a),n+=this.getHeightOfLine(a);t.restore()}_renderTextFill(t){(this.fill||this.styleHas("fill"))&&this._renderTextCommon(t,"fillText")}_renderTextStroke(t){(this.stroke&&this.strokeWidth!==0||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())}_renderChars(t,e,n,s,r,a){let o=this.textAlign.includes(jd),l=this.path,c=!o&&this.charSpacing===0&&this.isEmptyStyles(a)&&!l,h=this.direction==="ltr",d=this.direction==="ltr"?1:-1,u=e.direction,f,p,y,m,g,b="",E=0;if(e.save(),u!==this.direction&&(e.canvas.setAttribute("dir",h?"ltr":"rtl"),e.direction=h?"ltr":"rtl",e.textAlign=h?Oe:Ui),r-=this.getHeightOfLineImpl(a)*this._fontSizeFraction,c)return this._renderChar(t,e,a,0,n.join(""),s,r),void e.restore();for(let x=0,T=n.length-1;x<=T;x++)m=x===T||this.charSpacing||l,b+=n[x],y=this.__charBounds[a][x],E===0?(s+=d*(y.kernedWidth-y.width),E+=y.width):E+=y.kernedWidth,o&&!m&&this._reSpaceAndTab.test(n[x])&&(m=!0),m||(f=f||this.getCompleteStyleDeclaration(a,x),p=this.getCompleteStyleDeclaration(a,x+1),m=Nl(f,p,!1)),m&&(l?(e.save(),e.translate(y.renderLeft,y.renderTop),e.rotate(y.angle),this._renderChar(t,e,a,x,b,-E/2,0),e.restore()):(g=s,this._renderChar(t,e,a,x,b,g,r)),b="",f=p,s+=d*E,E=0);e.restore()}_applyPatternGradientTransformText(t){let e=this.width+this.strokeWidth,n=this.height+this.strokeWidth,s=vi({width:e,height:n}),r=s.getContext("2d");return s.width=e,s.height=n,r.beginPath(),r.moveTo(0,0),r.lineTo(e,0),r.lineTo(e,n),r.lineTo(0,n),r.closePath(),r.translate(e/2,n/2),r.fillStyle=t.toLive(r),this._applyPatternGradientTransform(r,t),r.fill(),r.createPattern(s,"no-repeat")}handleFiller(t,e,n){let s,r;return Bi(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?(s=-this.width/2,r=-this.height/2,t.translate(s,r),t[e]=this._applyPatternGradientTransformText(n),{offsetX:s,offsetY:r}):(t[e]=n.toLive(t),this._applyPatternGradientTransform(t,n)):(t[e]=n,{offsetX:0,offsetY:0})}_setStrokeStyles(t,{stroke:e,strokeWidth:n}){return t.lineWidth=n,t.lineCap=this.strokeLineCap,t.lineDashOffset=this.strokeDashOffset,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,this.handleFiller(t,"strokeStyle",e)}_setFillStyles(t,{fill:e}){return this.handleFiller(t,"fillStyle",e)}_renderChar(t,e,n,s,r,a,o){let l=this._getStyleDeclaration(n,s),c=this.getCompleteStyleDeclaration(n,s),h=t==="fillText"&&c.fill,d=t==="strokeText"&&c.stroke&&c.strokeWidth;if(d||h){if(e.save(),e.font=this._getFontDeclaration(c),l.textBackgroundColor&&this._removeShadow(e),l.deltaY&&(o+=l.deltaY),h){let u=this._setFillStyles(e,c);e.fillText(r,a-u.offsetX,o-u.offsetY)}if(d){let u=this._setStrokeStyles(e,c);e.strokeText(r,a-u.offsetX,o-u.offsetY)}e.restore()}}setSuperscript(t,e){this._setScript(t,e,this.superscript)}setSubscript(t,e){this._setScript(t,e,this.subscript)}_setScript(t,e,n){let s=this.get2DCursorLocation(t,!0),r=this.getValueOfPropertyAt(s.lineIndex,s.charIndex,"fontSize"),a=this.getValueOfPropertyAt(s.lineIndex,s.charIndex,"deltaY"),o={fontSize:r*n.size,deltaY:a+r*n.baseline};this.setSelectionStyles(o,t,e)}_getLineLeftOffset(t){let e=this.getLineWidth(t),n=this.width-e,s=this.textAlign,r=this.direction,a=this.isEndOfWrapping(t),o=0;return s==="justify"||s==="justify-center"&&!a||s==="justify-right"&&!a||s==="justify-left"&&!a?0:(s==="center"&&(o=n/2),s==="right"&&(o=n),s==="justify-center"&&(o=n/2),s==="justify-right"&&(o=n),r==="rtl"&&(s==="right"||s==="justify-right"?o=0:s==="left"||s==="justify-left"?o=-n:s!=="center"&&s!=="justify-center"||(o=-n/2)),o)}_clearCache(){this._forceClearCache=!1,this.__lineWidths=[],this.__lineHeights=[],this.__charBounds=[]}getLineWidth(t){if(this.__lineWidths[t]!==void 0)return this.__lineWidths[t];let{width:e}=this.measureLine(t);return this.__lineWidths[t]=e,e}_getWidthOfCharSpacing(){return this.charSpacing===0?0:this.fontSize*this.charSpacing/1e3}getValueOfPropertyAt(t,e,n){var s;return(s=this._getStyleDeclaration(t,e)[n])==null?this[n]:s}_renderTextDecoration(t,e){if(!this[e]&&!this.styleHas(e))return;let n=this._getTopOffset(),s=this._getLeftOffset(),r=this.path,a=this._getWidthOfCharSpacing(),o=e==="linethrough"?.5:+(e==="overline"),l=this.offsets[e];for(let c=0,h=this._textLines.length;c<h;c++){let d=this.getHeightOfLine(c);if(!this[e]&&!this.styleHas(e,c)){n+=d;continue}let u=this._textLines[c],f=d/this.lineHeight,p=this._getLineLeftOffset(c),y,m=0,g=0,b=this.getValueOfPropertyAt(c,0,e),E=this.getValueOfPropertyAt(c,0,oi),x=this.getValueOfPropertyAt(c,0,"textDecorationColor")||E,T=this.getValueOfPropertyAt(c,0,dr),M=b,D=x,v=T,L=n+f*(1-this._fontSizeFraction),R=this.getHeightOfChar(c,0),A=this.getValueOfPropertyAt(c,0,"deltaY");for(let I=0,k=u.length;I<k;I++){let X=this.__charBounds[c][I];M=this.getValueOfPropertyAt(c,I,e),y=this.getValueOfPropertyAt(c,I,oi),D=this.getValueOfPropertyAt(c,I,"textDecorationColor")||y,v=this.getValueOfPropertyAt(c,I,dr);let Y=this.getHeightOfChar(c,I),it=this.getValueOfPropertyAt(c,I,"deltaY");if(r&&M&&y){let U=this.fontSize*v/1e3;t.save(),t.fillStyle=D,t.translate(X.renderLeft,X.renderTop),t.rotate(X.angle),t.fillRect(-X.kernedWidth/2,l*Y+it-o*U,X.kernedWidth,U),t.restore()}else if((M!==b||y!==E||D!==x||Y!==R||v!==T||it!==A)&&g>0){let U=this.fontSize*T/1e3,K=s+p+m;this.direction==="rtl"&&(K=this.width-K-g),b&&x&&T&&(t.fillStyle=x,t.fillRect(K,L+l*R+A-o*U,g,U)),m=X.left,g=X.width,b=M,x=D,T=v,E=y,R=Y,A=it}else g+=X.kernedWidth}let P=s+p+m;this.direction==="rtl"&&(P=this.width-P-g),t.fillStyle=D;let q=this.fontSize*v/1e3;M&&D&&v&&t.fillRect(P,L+l*R+A-o*q,g-a,q),n+=d}this._removeShadow(t)}_getFontDeclaration({fontFamily:t=this.fontFamily,fontStyle:e=this.fontStyle,fontWeight:n=this.fontWeight,fontSize:s=this.fontSize}={},r){let a=t.includes("'")||t.includes('"')||t.includes(",")||fa.genericFonts.includes(t.toLowerCase())?t:`"${t}"`;return[e,n,`${r?this.CACHE_FONT_SIZE:s}px`,a].join(" ")}render(t){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._forceClearCache&&this.initDimensions(),super.render(t)))}graphemeSplit(t){return wl(t)}_splitTextIntoLines(t){let e=t.split(this._reNewline),n=Array(e.length),s=[`
`],r=[];for(let a=0;a<e.length;a++)n[a]=this.graphemeSplit(e[a]),r=r.concat(n[a],s);return r.pop(),{_unwrappedLines:n,lines:e,graphemeText:r,graphemeLines:n}}toObject(t=[]){return{...super.toObject([...am,...t]),styles:Cm(this.styles,this.text),...this.path?{path:this.path.toObject()}:{}}}set(t,e){let{textLayoutProperties:n}=this.constructor;super.set(t,e);let s=!1,r=!1;if(typeof t=="object")for(let a in t)a==="path"&&this.setPathInfo(),s=s||n.includes(a),r=r||a==="path";else s=n.includes(t),r=t==="path";return r&&this.setPathInfo(),s&&this.initialized&&(this.initDimensions(),this.setCoords()),this}complexity(){return 1}static async fromElement(t,e,n){let s=Dn(t,fa.ATTRIBUTE_NAMES,n),{textAnchor:r=Oe,textDecoration:a="",dx:o=0,dy:l=0,top:c=0,left:h=0,fontSize:d=16,strokeWidth:u=1,...f}={...e,...s},p=new this(vl(t.textContent||"").trim(),{left:h+o,top:c+l,underline:a.includes("underline"),overline:a.includes("overline"),linethrough:a.includes("line-through"),strokeWidth:0,fontSize:d,...f}),y=p.getScaledHeight()/p.height,m=((p.height+p.strokeWidth)*p.lineHeight-p.height)*y,g=p.getScaledHeight()+m,b=0;return r==="center"&&(b=p.getScaledWidth()/2),r==="right"&&(b=p.getScaledWidth()),p.set({left:p.left-b,top:p.top-(g-p.fontSize*(.07+p._fontSizeFraction))/p.lineHeight,strokeWidth:u}),p}static fromObject(t){return this._fromObject({...t,styles:Nm(t.styles||{},t.text)},{extraParam:"text"})}};N(an,"textLayoutProperties",rm),N(an,"cacheProperties",[...Ln,...am]),N(an,"ownDefaults",f_),N(an,"type","Text"),N(an,"genericFonts",["serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]),N(an,"ATTRIBUTE_NAMES",is.concat("x","y","dx","dy","font-family","font-style","font-weight","font-size","letter-spacing","text-decoration","text-decoration-thickness","text-decoration-color","text-anchor")),Rm(an,[class extends im{_toSVG(){let i=this._getSVGLeftTopOffsets(),t=this._getSVGTextAndBg(i.textTop,i.textLeft);return this._wrapSVGTextAndBg(t)}toSVG(i){let t=this._createBaseSVGMarkup(this._toSVG(),{reviver:i,noStyle:!0,withShadow:!0}),e=this.path;return e?t+e._createBaseSVGMarkup(e._toSVG(),{reviver:i,withShadow:!0,additionalTransform:cr(this.calcOwnMatrix())}):t}_getSVGLeftTopOffsets(){return{textLeft:-this.width/2,textTop:-this.height/2,lineTop:this.getHeightOfLine(0)}}_wrapSVGTextAndBg({textBgRects:i,textSpans:t}){let e=this.getSvgTextDecoration(this);return[i.join(""),'		<text xml:space="preserve" ',`font-family="${te(this.fontFamily.replace(ev,"'"))}" `,`font-size="${te(this.fontSize)}" `,this.fontStyle?`font-style="${te(this.fontStyle)}" `:"",this.fontWeight?`font-weight="${te(this.fontWeight)}" `:"",e?`text-decoration="${e}" `:"",this.direction==="rtl"?'direction="rtl" ':"",'style="',this.getSvgStyles(!0),'"',this.addPaintOrder()," >",t.join(""),`</text>
`]}_getSVGTextAndBg(i,t){let e=[],n=[],s,r=i;this.backgroundColor&&n.push(ed(this.backgroundColor,-this.width/2,-this.height/2,this.width,this.height));for(let a=0,o=this._textLines.length;a<o;a++)s=this._getLineLeftOffset(a),this.direction==="rtl"&&(s+=this.width),(this.textBackgroundColor||this.styleHas("textBackgroundColor",a))&&this._setSVGTextLineBg(n,a,t+s,r),this._setSVGTextLineText(e,a,t+s,r),r+=this.getHeightOfLine(a);return{textSpans:e,textBgRects:n}}_createTextCharSpan(i,t,e,n,s){let r=de.NUM_FRACTION_DIGITS,a=this.getSvgSpanStyles(t,i!==i.trim()||!!i.match(tv)),o=a?`style="${a}"`:"",l=t.deltaY,c=l?` dy="${ge(l,r)}" `:"",{angle:h,renderLeft:d,renderTop:u,width:f}=s,p="";if(d!==void 0){let y=f/2;h&&(p=` rotate="${ge(En(h),r)}"`);let m=As({angle:En(h)});m[4]=d,m[5]=u;let g=new z(-y,0).transform(m);e=g.x,n=g.y}return`<tspan x="${ge(e,r)}" y="${ge(n,r)}" ${c}${p}${o}>${te(i)}</tspan>`}_setSVGTextLineText(i,t,e,n){let s=this.getHeightOfLine(t),r=this.textAlign.includes(jd),a=this._textLines[t],o,l,c,h,d,u="",f=0;n+=s*(1-this._fontSizeFraction)/this.lineHeight;for(let p=0,y=a.length-1;p<=y;p++)d=p===y||this.charSpacing||this.path,u+=a[p],c=this.__charBounds[t][p],f===0?(e+=c.kernedWidth-c.width,f+=c.width):f+=c.kernedWidth,r&&!d&&this._reSpaceAndTab.test(a[p])&&(d=!0),d||(o=o||this.getCompleteStyleDeclaration(t,p),l=this.getCompleteStyleDeclaration(t,p+1),d=Nl(o,l,!0)),d&&(h=this._getStyleDeclaration(t,p),i.push(this._createTextCharSpan(u,h,e,n,c)),u="",o=l,this.direction==="rtl"?e-=f:e+=f,f=0)}_setSVGTextLineBg(i,t,e,n){let s=this._textLines[t],r=this.getHeightOfLine(t)/this.lineHeight,a,o=0,l=0,c=this.getValueOfPropertyAt(t,0,"textBackgroundColor");for(let h=0;h<s.length;h++){let{left:d,width:u,kernedWidth:f}=this.__charBounds[t][h];a=this.getValueOfPropertyAt(t,h,"textBackgroundColor"),a===c?o+=f:(c&&i.push(ed(c,e+l,n,o,r)),l=d,o=u,c=a)}a&&i.push(ed(c,e+l,n,o,r))}getSvgStyles(i){let t=Il(this.textDecorationColor)?` text-decoration-color: ${te(this[Fl])};`:"";return`${super.getSvgStyles(i)} text-decoration-thickness: ${ge(this.textDecorationThickness*this.getObjectScaling().y/10,de.NUM_FRACTION_DIGITS)}%;${t} white-space: pre;`}getSvgSpanStyles(i,t){let{fontFamily:e,strokeWidth:n,stroke:s,fill:r,fontSize:a,fontStyle:o,fontWeight:l,textDecorationThickness:c,textDecorationColor:h,linethrough:d,overline:u,underline:f}=i,p=this.getSvgTextDecoration({underline:f??this.underline,overline:u??this.overline,linethrough:d??this.linethrough}),y=c||this.textDecorationThickness,m=h||this.textDecorationColor,g=Es(n),b=Ms(e),E=Es(a),x=Ms(o),T=Es(l)||Ms(l),M=Ms(m);return[s?Pa(Tn,s):"",g?`stroke-width: ${te(g)}; `:"",b?`font-family: ${b.includes("'")||b.includes('"')?te(b):`'${te(b)}'`}; `:"",E?`font-size: ${te(E)}px; `:"",x?`font-style: ${te(x)}; `:"",T?`font-weight: ${te(T)}; `:"",p?`text-decoration: ${p}; text-decoration-thickness: ${ge(y*this.getObjectScaling().y/10,de.NUM_FRACTION_DIGITS)}%;${M?` text-decoration-color: ${te(M)};`:""} `:"",r?Pa(oi,r):"",t?"white-space: pre; ":""].join("")}getSvgTextDecoration(i){return["overline","underline","line-through"].filter(t=>i[t.replace("-","")]).join(" ")}}]),Dt.setClass(an),Dt.setSVGClass(an);var iv=class{constructor(i){N(this,"target",void 0),N(this,"__mouseDownInPlace",!1),N(this,"__dragStartFired",!1),N(this,"__isDraggingOver",!1),N(this,"__dragStartSelection",void 0),N(this,"__dragImageDisposer",void 0),N(this,"_dispose",void 0),this.target=i;let t=[this.target.on("dragenter",this.dragEnterHandler.bind(this)),this.target.on("dragover",this.dragOverHandler.bind(this)),this.target.on("dragleave",this.dragLeaveHandler.bind(this)),this.target.on("dragend",this.dragEndHandler.bind(this)),this.target.on("drop",this.dropHandler.bind(this))];this._dispose=()=>{t.forEach(e=>e()),this._dispose=void 0}}isPointerOverSelection(i){let t=this.target,e=t.getSelectionStartFromPointer(i);return t.isEditing&&e>=t.selectionStart&&e<=t.selectionEnd&&t.selectionStart<t.selectionEnd}start(i){return this.__mouseDownInPlace=this.isPointerOverSelection(i)}isActive(){return this.__mouseDownInPlace}end(i){let t=this.isActive();return t&&!this.__dragStartFired&&(this.target.setCursorByClick(i),this.target.initDelayedCursor(!0)),this.__mouseDownInPlace=!1,this.__dragStartFired=!1,this.__isDraggingOver=!1,t}getDragStartSelection(){return this.__dragStartSelection}setDragImage(i,{selectionStart:t,selectionEnd:e}){var n;let s=this.target,r=s.canvas,a=new z(s.flipX?-1:1,s.flipY?-1:1),o=s._getCursorBoundaries(t),l=new z(o.left+o.leftOffset,o.top+o.topOffset).multiply(a).transform(s.calcTransformMatrix()),c=r.getScenePoint(i).subtract(l),h=s.getCanvasRetinaScaling(),d=s.getBoundingRect(),u=l.subtract(new z(d.left,d.top)),f=r.viewportTransform,p=u.add(c).transform(f,!0),y=s.backgroundColor,m=nu(s.styles);s.backgroundColor="";let g={stroke:"transparent",fill:"transparent",textBackgroundColor:"transparent"};s.setSelectionStyles(g,0,t),s.setSelectionStyles(g,e,s.text.length),s.dirty=!0;let b=s.toCanvasElement({enableRetinaScaling:r.enableRetinaScaling,viewportTransform:!0});s.backgroundColor=y,s.styles=m,s.dirty=!0,xd(b,{position:"fixed",left:-b.width+"px",border:Tl,width:b.width/h+"px",height:b.height/h+"px"}),this.__dragImageDisposer&&this.__dragImageDisposer(),this.__dragImageDisposer=()=>{b.remove()},ki(i.target||this.target.hiddenTextarea).body.appendChild(b),(n=i.dataTransfer)==null||n.setDragImage(b,p.x,p.y)}onDragStart(i){this.__dragStartFired=!0;let t=this.target,e=this.isActive();if(e&&i.dataTransfer){let n=this.__dragStartSelection={selectionStart:t.selectionStart,selectionEnd:t.selectionEnd},s=t._text.slice(n.selectionStart,n.selectionEnd).join(""),r={text:t.text,value:s,...n};i.dataTransfer.setData("text/plain",s),i.dataTransfer.setData("application/fabric",JSON.stringify({value:s,styles:t.getSelectionStyles(n.selectionStart,n.selectionEnd,!0)})),i.dataTransfer.effectAllowed="copyMove",this.setDragImage(i,r)}return t.abortCursorAnimation(),e}canDrop(i){if(this.target.editable&&!this.target.getActiveControl()&&!i.defaultPrevented){if(this.isActive()&&this.__dragStartSelection){let t=this.target.getSelectionStartFromPointer(i),e=this.__dragStartSelection;return t<e.selectionStart||t>e.selectionEnd}return!0}return!1}targetCanDrop(i){return this.target.canDrop(i)}dragEnterHandler({e:i}){let t=this.targetCanDrop(i);!this.__isDraggingOver&&t&&(this.__isDraggingOver=!0)}dragOverHandler(i){let{e:t}=i,e=this.targetCanDrop(t);!this.__isDraggingOver&&e?this.__isDraggingOver=!0:this.__isDraggingOver&&!e&&(this.__isDraggingOver=!1),this.__isDraggingOver&&(t.preventDefault(),i.canDrop=!0,i.dropTarget=this.target)}dragLeaveHandler(){(this.__isDraggingOver||this.isActive())&&(this.__isDraggingOver=!1)}dropHandler(i){var t;let{e}=i,n=e.defaultPrevented;this.__isDraggingOver=!1,e.preventDefault();let s=(t=e.dataTransfer)==null?void 0:t.getData("text/plain");if(s&&!n){let r=this.target,a=r.canvas,o=r.getSelectionStartFromPointer(e),{styles:l}=e.dataTransfer.types.includes("application/fabric")?JSON.parse(e.dataTransfer.getData("application/fabric")):{},c=s[Math.max(0,s.length-1)];if(this.__dragStartSelection){let h=this.__dragStartSelection.selectionStart,d=this.__dragStartSelection.selectionEnd;o>h&&o<=d?o=h:o>d&&(o-=d-h),r.removeChars(h,d),delete this.__dragStartSelection}r._reNewline.test(c)&&(r._reNewline.test(r._text[o])||o===r._text.length)&&(s=s.trimEnd()),i.didDrop=!0,i.dropTarget=r,r.insertChars(s,l,o),a.setActiveObject(r),r.enterEditing(e),r.selectionStart=Math.min(o+0,r._text.length),r.selectionEnd=Math.min(r.selectionStart+s.length,r._text.length),r.hiddenTextarea.value=r.text,r._updateTextarea(),r.hiddenTextarea.focus(),r.fire(ml,{index:o+0,action:"drop"}),a.fire("text:changed",{target:r}),a.contextTopDirty=!0,a.requestRenderAll()}}dragEndHandler({e:i}){if(this.isActive()&&this.__dragStartFired&&this.__dragStartSelection){var t;let e=this.target,n=this.target.canvas,{selectionStart:s,selectionEnd:r}=this.__dragStartSelection,a=((t=i.dataTransfer)==null?void 0:t.dropEffect)||"none";a==="none"?(e.selectionStart=s,e.selectionEnd=r,e._updateTextarea(),e.hiddenTextarea.focus()):(e.clearContextTop(),a==="move"&&(e.removeChars(s,r),e.selectionStart=e.selectionEnd=s,e.hiddenTextarea&&(e.hiddenTextarea.value=e.text),e._updateTextarea(),e.fire(ml,{index:s,action:"dragend"}),n.fire("text:changed",{target:e}),n.requestRenderAll()),e.exitEditing())}this.__dragImageDisposer&&this.__dragImageDisposer(),delete this.__dragImageDisposer,delete this.__dragStartSelection,this.__isDraggingOver=!1}dispose(){this._dispose&&this._dispose()}},vp=/[ \n\.,;!\?\-]/,nv=class extends an{constructor(...i){super(...i),N(this,"_currentCursorOpacity",1)}initBehavior(){this._tick=this._tick.bind(this),this._onTickComplete=this._onTickComplete.bind(this),this.updateSelectionOnMouseMove=this.updateSelectionOnMouseMove.bind(this)}onDeselect(i){return this.isEditing&&this.exitEditing(),this.selected=!1,super.onDeselect(i)}_animateCursor({toValue:i,duration:t,delay:e,onComplete:n}){return Kd({startValue:this._currentCursorOpacity,endValue:i,duration:t,delay:e,onComplete:n,abort:()=>!this.canvas||this.selectionStart!==this.selectionEnd,onChange:s=>{this._currentCursorOpacity=s,this.renderCursorOrSelection()}})}_tick(i){this._currentTickState=this._animateCursor({toValue:0,duration:this.cursorDuration/2,delay:Math.max(i||0,100),onComplete:this._onTickComplete})}_onTickComplete(){var i;(i=this._currentTickCompleteState)==null||i.abort(),this._currentTickCompleteState=this._animateCursor({toValue:1,duration:this.cursorDuration,onComplete:this._tick})}initDelayedCursor(i){this.abortCursorAnimation(),this._tick(i?0:this.cursorDelay)}abortCursorAnimation(){let i=!1;[this._currentTickState,this._currentTickCompleteState].forEach(t=>{t&&!t.isDone()&&(i=!0,t.abort())}),this._currentCursorOpacity=1,i&&this.clearContextTop()}restartCursorIfNeeded(){[this._currentTickState,this._currentTickCompleteState].some(i=>!i||i.isDone())&&this.initDelayedCursor()}selectAll(){return this.selectionStart=0,this.selectionEnd=this._text.length,this._fireSelectionChanged(),this._updateTextarea(),this}cmdAll(){this.selectAll(),this.renderCursorOrSelection()}getSelectedText(){return this._text.slice(this.selectionStart,this.selectionEnd).join("")}findWordBoundaryLeft(i){let t=0,e=i-1;if(this._reSpace.test(this._text[e]))for(;this._reSpace.test(this._text[e]);)t++,e--;for(;/\S/.test(this._text[e])&&e>-1;)t++,e--;return i-t}findWordBoundaryRight(i){let t=0,e=i;if(this._reSpace.test(this._text[e]))for(;this._reSpace.test(this._text[e]);)t++,e++;for(;/\S/.test(this._text[e])&&e<this._text.length;)t++,e++;return i+t}findLineBoundaryLeft(i){let t=0,e=i-1;for(;!/\n/.test(this._text[e])&&e>-1;)t++,e--;return i-t}findLineBoundaryRight(i){let t=0,e=i;for(;!/\n/.test(this._text[e])&&e<this._text.length;)t++,e++;return i+t}searchWordBoundary(i,t){let e=this._text,n=i>0&&this._reSpace.test(e[i])&&(t===-1||!Bd.test(e[i-1]))?i-1:i,s=e[n];for(;n>0&&n<e.length&&!vp.test(s);)n+=t,s=e[n];return t===-1&&vp.test(s)&&n++,n}selectWord(i){var t;i=(t=i)==null?this.selectionStart:t;let e=this.searchWordBoundary(i,-1),n=Math.max(e,this.searchWordBoundary(i,1));this.selectionStart=e,this.selectionEnd=n,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()}selectLine(i){var t;i=(t=i)==null?this.selectionStart:t;let e=this.findLineBoundaryLeft(i),n=this.findLineBoundaryRight(i);this.selectionStart=e,this.selectionEnd=n,this._fireSelectionChanged(),this._updateTextarea()}enterEditing(i){!this.isEditing&&this.editable&&(this.enterEditingImpl(),this.fire("editing:entered",i?{e:i}:void 0),this._fireSelectionChanged(),this.canvas&&(this.canvas.fire("text:editing:entered",{target:this,e:i}),this.canvas.requestRenderAll()))}enterEditingImpl(){this.canvas&&(this.canvas.calcOffset(),this.canvas.textEditingManager.exitTextEditing()),this.isEditing=!0,this.initHiddenTextarea(),this.hiddenTextarea.focus(),this.hiddenTextarea.value=this.text,this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick()}updateSelectionOnMouseMove(i){if(this.getActiveControl())return;let t=this.hiddenTextarea;ki(t).activeElement!==t&&t.focus();let e=this.getSelectionStartFromPointer(i),n=this.selectionStart,s=this.selectionEnd;(e===this.__selectionStartOnMouseDown&&n!==s||n!==e&&s!==e)&&(e>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=e):(this.selectionStart=e,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===n&&this.selectionEnd===s||(this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}_setEditingProps(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0}fromStringToGraphemeSelection(i,t,e){let n=e.slice(0,i),s=this.graphemeSplit(n).length;if(i===t)return{selectionStart:s,selectionEnd:s};let r=e.slice(i,t);return{selectionStart:s,selectionEnd:s+this.graphemeSplit(r).length}}fromGraphemeToStringSelection(i,t,e){let n=e.slice(0,i).join("").length;return i===t?{selectionStart:n,selectionEnd:n}:{selectionStart:n,selectionEnd:n+e.slice(i,t).join("").length}}_updateTextarea(){if(this.cursorOffsetCache={},this.hiddenTextarea){if(!this.inCompositionMode){let i=this.fromGraphemeToStringSelection(this.selectionStart,this.selectionEnd,this._text);this.hiddenTextarea.selectionStart=i.selectionStart,this.hiddenTextarea.selectionEnd=i.selectionEnd}this.updateTextareaPosition()}}updateFromTextArea(){let{hiddenTextarea:i,direction:t,textAlign:e,inCompositionMode:n}=this;if(!i)return;let s=e==="justify"?t==="ltr"?Oe:Ui:e.replace("justify-",""),r=this.getPositionByOrigin(s,"top");this.cursorOffsetCache={},this.text=i.value,this.set("dirty",!0),this.initDimensions(),this.setPositionByOrigin(r,s,"top"),this.setCoords();let a=this.fromStringToGraphemeSelection(i.selectionStart,i.selectionEnd,i.value);this.selectionEnd=this.selectionStart=a.selectionEnd,n||(this.selectionStart=a.selectionStart),this.updateTextareaPosition()}updateTextareaPosition(){if(this.selectionStart===this.selectionEnd){let i=this._calcTextareaPosition();this.hiddenTextarea.style.left=i.left,this.hiddenTextarea.style.top=i.top}}_calcTextareaPosition(){if(!this.canvas)return{left:"1px",top:"1px"};let i=this.inCompositionMode?this.compositionStart:this.selectionStart,t=this._getCursorBoundaries(i),e=this.get2DCursorLocation(i),n=e.lineIndex,s=e.charIndex,r=this.getValueOfPropertyAt(n,s,"fontSize")*this.lineHeight,a=t.leftOffset,o=this.getCanvasRetinaScaling(),l=this.canvas.upperCanvasEl,c=l.width/o,h=l.height/o,d=c-r,u=h-r,f=new z(t.left+a,t.top+t.topOffset+r).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new z(l.clientWidth/c,l.clientHeight/h));return f.x<0&&(f.x=0),f.x>d&&(f.x=d),f.y<0&&(f.y=0),f.y>u&&(f.y=u),f.x+=this.canvas._offset.left,f.y+=this.canvas._offset.top,{left:`${f.x}px`,top:`${f.y}px`,fontSize:`${r}px`,charHeight:r}}_saveEditingProps(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,selectable:this.selectable,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}}_restoreEditingProps(){this._savedProps&&(this.hoverCursor=this._savedProps.hoverCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.selectable=this._savedProps.selectable,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor||this.canvas.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor||this.canvas.moveCursor),delete this._savedProps)}exitEditingImpl(){let i=this.hiddenTextarea;this.selected=!1,this.isEditing=!1,i&&(i.blur&&i.blur(),i.parentNode&&i.parentNode.removeChild(i)),this.hiddenTextarea=null,this.abortCursorAnimation(),this.selectionStart!==this.selectionEnd&&this.clearContextTop(),this.selectionEnd=this.selectionStart,this._restoreEditingProps(),this._forceClearCache&&(this.initDimensions(),this.setCoords())}exitEditing(){let i=this._textBeforeEdit!==this.text;return this.exitEditingImpl(),this.fire("editing:exited"),i&&this.fire("modified"),this.canvas&&(this.canvas.fire("text:editing:exited",{target:this}),i&&this.canvas.fire("object:modified",{target:this})),this}_removeExtraneousStyles(){for(let i in this.styles)this._textLines[i]||delete this.styles[i]}removeStyleFromTo(i,t){let{lineIndex:e,charIndex:n}=this.get2DCursorLocation(i,!0),{lineIndex:s,charIndex:r}=this.get2DCursorLocation(t,!0);if(e!==s){if(this.styles[e])for(let a=n;a<this._unwrappedTextLines[e].length;a++)delete this.styles[e][a];if(this.styles[s])for(let a=r;a<this._unwrappedTextLines[s].length;a++){let o=this.styles[s][a];o&&(this.styles[e]||(this.styles[e]={}),this.styles[e][n+a-r]=o)}for(let a=e+1;a<=s;a++)delete this.styles[a];this.shiftLineStyles(s,e-s)}else if(this.styles[e]){let a=this.styles[e],o=r-n;for(let l=n;l<r;l++)delete a[l];for(let l in this.styles[e]){let c=parseInt(l,10);c>=r&&(a[c-o]=a[l],delete a[l])}}}shiftLineStyles(i,t){let e=Object.assign({},this.styles);for(let n in this.styles){let s=parseInt(n,10);s>i&&(this.styles[s+t]=e[s],e[s-t]||delete this.styles[s])}}insertNewlineStyleObject(i,t,e,n){let s={},r=this._unwrappedTextLines[i].length,a=r===t,o=!1;e||(e=1),this.shiftLineStyles(i,e);let l=this.styles[i]?this.styles[i][t===0?t:t-1]:void 0;for(let h in this.styles[i]){let d=parseInt(h,10);d>=t&&(o=!0,s[d-t]=this.styles[i][h],a&&t===0||delete this.styles[i][h])}let c=!1;for(o&&!a&&(this.styles[i+e]=s,c=!0),(c||r>t)&&e--;e>0;)n&&n[e-1]?this.styles[i+e]={0:{...n[e-1]}}:l?this.styles[i+e]={0:{...l}}:delete this.styles[i+e],e--;this._forceClearCache=!0}insertCharStyleObject(i,t,e,n){this.styles||(this.styles={});let s=this.styles[i],r=s?{...s}:{};e||(e=1);for(let o in r){let l=parseInt(o,10);l>=t&&(s[l+e]=r[l],r[l-e]||delete s[l])}if(this._forceClearCache=!0,n){for(;e--;)Object.keys(n[e]).length&&(this.styles[i]||(this.styles[i]={}),this.styles[i][t+e]={...n[e]});return}if(!s)return;let a=s[t?t-1:1];for(;a&&e--;)this.styles[i][t+e]={...a}}insertNewStyleBlock(i,t,e){let n=this.get2DCursorLocation(t,!0),s=[0],r,a=0;for(let o=0;o<i.length;o++)i[o]===`
`?(a++,s[a]=0):s[a]++;for(s[0]>0&&(this.insertCharStyleObject(n.lineIndex,n.charIndex,s[0],e),e=e&&e.slice(s[0]+1)),a&&this.insertNewlineStyleObject(n.lineIndex,n.charIndex+s[0],a),r=1;r<a;r++)s[r]>0?this.insertCharStyleObject(n.lineIndex+r,0,s[r],e):e&&this.styles[n.lineIndex+r]&&e[0]&&(this.styles[n.lineIndex+r][0]=e[0]),e=e&&e.slice(s[r]+1);s[r]>0&&this.insertCharStyleObject(n.lineIndex+r,0,s[r],e)}removeChars(i,t=i+1){this.removeStyleFromTo(i,t),this._text.splice(i,t-i),this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}insertChars(i,t,e,n=e){n>e&&this.removeStyleFromTo(e,n);let s=this.graphemeSplit(i);this.insertNewStyleBlock(s,e,t),this._text=[...this._text.slice(0,e),...s,...this._text.slice(n)],this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}setSelectionStartEndWithShift(i,t,e){e<=i?(t===i?this._selectionDirection=Oe:this._selectionDirection==="right"&&(this._selectionDirection=Oe,this.selectionEnd=i),this.selectionStart=e):e>i&&e<t?this._selectionDirection==="right"?this.selectionEnd=e:this.selectionStart=e:(t===i?this._selectionDirection=Ui:this._selectionDirection==="left"&&(this._selectionDirection=Ui,this.selectionStart=t),this.selectionEnd=e)}},sv=class extends nv{initHiddenTextarea(){let i=this.canvas&&ki(this.canvas.getElement())||ur(),t=i.createElement("textarea");Object.entries({autocapitalize:"off",autocorrect:"off",autocomplete:"off",spellcheck:"false","data-fabric":"textarea",wrap:"off",name:"fabricTextarea"}).map(([r,a])=>t.setAttribute(r,a));let{top:e,left:n,fontSize:s}=this._calcTextareaPosition();t.style.cssText=`position: absolute; top: ${e}; left: ${n}; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ${s};`,(this.hiddenTextareaContainer||i.body).appendChild(t),Object.entries({blur:"blur",keydown:"onKeyDown",keyup:"onKeyUp",input:"onInput",copy:"copy",cut:"copy",paste:"paste",compositionstart:"onCompositionStart",compositionupdate:"onCompositionUpdate",compositionend:"onCompositionEnd"}).map(([r,a])=>t.addEventListener(r,this[a].bind(this))),this.hiddenTextarea=t}blur(){this.abortCursorAnimation()}onKeyDown(i){if(!this.isEditing)return;let t=this.direction==="rtl"?this.keysMapRtl:this.keysMap;if(i.keyCode in t)this[t[i.keyCode]](i);else{if(!(i.keyCode in this.ctrlKeysMapDown)||!i.ctrlKey&&!i.metaKey)return;this[this.ctrlKeysMapDown[i.keyCode]](i)}i.stopImmediatePropagation(),i.preventDefault(),i.keyCode>=33&&i.keyCode<=40?(this.inCompositionMode=!1,this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.requestRenderAll()}onKeyUp(i){!this.isEditing||this._copyDone||this.inCompositionMode?this._copyDone=!1:i.keyCode in this.ctrlKeysMapUp&&(i.ctrlKey||i.metaKey)&&(this[this.ctrlKeysMapUp[i.keyCode]](i),i.stopImmediatePropagation(),i.preventDefault(),this.canvas&&this.canvas.requestRenderAll())}onInput(i){let t=this.fromPaste,{value:e,selectionStart:n,selectionEnd:s}=this.hiddenTextarea;if(this.fromPaste=!1,i&&i.stopPropagation(),!this.isEditing)return;let r=()=>{this.updateFromTextArea(),this.fire(ml),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll())};if(this.hiddenTextarea.value==="")return this.styles={},void r();let a=this._splitTextIntoLines(e).graphemeText,o=this._text.length,l=a.length,c=this.selectionStart,h=this.selectionEnd,d=c!==h,u,f,p,y,m=l-o,g=this.fromStringToGraphemeSelection(n,s,e),b=c>g.selectionStart;d?(f=this._text.slice(c,h),m+=h-c):l<o&&(f=b?this._text.slice(h+m,h):this._text.slice(c,c-m));let E=a.slice(g.selectionEnd-m,g.selectionEnd);if(f&&f.length&&(E.length&&(u=this.getSelectionStyles(c,c+1,!1),u=E.map(()=>u[0])),d?(p=c,y=h):b?(p=h-f.length,y=h):(p=h,y=h+f.length),this.removeStyleFromTo(p,y)),E.length){let{copyPasteData:x}=cn();t&&E.join("")===x.copiedText&&!de.disableStyleCopyPaste&&(u=x.copiedTextStyle),this.insertNewStyleBlock(E,c,u)}r()}onCompositionStart(){this.inCompositionMode=!0}onCompositionEnd(){this.inCompositionMode=!1}onCompositionUpdate({target:i}){let{selectionStart:t,selectionEnd:e}=i;this.compositionStart=t,this.compositionEnd=e,this.updateTextareaPosition()}copy(){if(this.selectionStart===this.selectionEnd)return;let{copyPasteData:i}=cn();i.copiedText=this.getSelectedText(),de.disableStyleCopyPaste?i.copiedTextStyle=void 0:i.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd,!0),this._copyDone=!0}paste(){this.fromPaste=!0}_getWidthBeforeCursor(i,t){let e,n=this._getLineLeftOffset(i);return t>0&&(e=this.__charBounds[i][t-1],n+=e.left+e.width),n}getDownCursorOffset(i,t){let e=this._getSelectionForOffset(i,t),n=this.get2DCursorLocation(e),s=n.lineIndex;if(s===this._textLines.length-1||i.metaKey||i.keyCode===34)return this._text.length-e;let r=n.charIndex,a=this._getWidthBeforeCursor(s,r),o=this._getIndexOnLine(s+1,a);return this._textLines[s].slice(r).length+o+1+this.missingNewlineOffset(s)}_getSelectionForOffset(i,t){return i.shiftKey&&this.selectionStart!==this.selectionEnd&&t?this.selectionEnd:this.selectionStart}getUpCursorOffset(i,t){let e=this._getSelectionForOffset(i,t),n=this.get2DCursorLocation(e),s=n.lineIndex;if(s===0||i.metaKey||i.keyCode===33)return-e;let r=n.charIndex,a=this._getWidthBeforeCursor(s,r),o=this._getIndexOnLine(s-1,a),l=this._textLines[s].slice(0,r),c=this.missingNewlineOffset(s-1);return-this._textLines[s-1].length+o-l.length+(1-c)}_getIndexOnLine(i,t){let e=this._textLines[i],n,s,r=this._getLineLeftOffset(i),a=0;for(let o=0,l=e.length;o<l;o++)if(n=this.__charBounds[i][o].width,r+=n,r>t){s=!0;let c=r-n,h=r,d=Math.abs(c-t);a=Math.abs(h-t)<d?o:o-1;break}return s||(a=e.length-1),a}moveCursorDown(i){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorUpOrDown("Down",i)}moveCursorUp(i){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorUpOrDown("Up",i)}_moveCursorUpOrDown(i,t){let e=this[`get${i}CursorOffset`](t,this._selectionDirection===Ui);if(t.shiftKey?this.moveCursorWithShift(e):this.moveCursorWithoutShift(e),e!==0){let n=this.text.length;this.selectionStart=Rs(0,this.selectionStart,n),this.selectionEnd=Rs(0,this.selectionEnd,n),this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea()}}moveCursorWithShift(i){let t=this._selectionDirection==="left"?this.selectionStart+i:this.selectionEnd+i;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,t),i!==0}moveCursorWithoutShift(i){return i<0?(this.selectionStart+=i,this.selectionEnd=this.selectionStart):(this.selectionEnd+=i,this.selectionStart=this.selectionEnd),i!==0}moveCursorLeft(i){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorLeftOrRight("Left",i)}_move(i,t,e){let n;if(i.altKey)n=this[`findWordBoundary${e}`](this[t]);else{if(!i.metaKey&&i.keyCode!==35&&i.keyCode!==36)return this[t]+=e==="Left"?-1:1,!0;n=this[`findLineBoundary${e}`](this[t])}return n!==void 0&&this[t]!==n&&(this[t]=n,!0)}_moveLeft(i,t){return this._move(i,t,"Left")}_moveRight(i,t){return this._move(i,t,"Right")}moveCursorLeftWithoutShift(i){let t=!0;return this._selectionDirection=Oe,this.selectionEnd===this.selectionStart&&this.selectionStart!==0&&(t=this._moveLeft(i,"selectionStart")),this.selectionEnd=this.selectionStart,t}moveCursorLeftWithShift(i){return this._selectionDirection==="right"&&this.selectionStart!==this.selectionEnd?this._moveLeft(i,"selectionEnd"):this.selectionStart===0?void 0:(this._selectionDirection=Oe,this._moveLeft(i,"selectionStart"))}moveCursorRight(i){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorLeftOrRight("Right",i)}_moveCursorLeftOrRight(i,t){let e=`moveCursor${i}${t.shiftKey?"WithShift":"WithoutShift"}`;this._currentCursorOpacity=1,this[e](t)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())}moveCursorRightWithShift(i){return this._selectionDirection==="left"&&this.selectionStart!==this.selectionEnd?this._moveRight(i,"selectionStart"):this.selectionEnd===this._text.length?void 0:(this._selectionDirection=Ui,this._moveRight(i,"selectionEnd"))}moveCursorRightWithoutShift(i){let t=!0;return this._selectionDirection=Ui,this.selectionStart===this.selectionEnd?(t=this._moveRight(i,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,t}},bp=i=>!!i.button,rv=class extends sv{constructor(...i){super(...i),N(this,"draggableTextDelegate",void 0)}initBehavior(){this.on("mousedown",this._mouseDownHandler),this.on("mouseup",this.mouseUpHandler),this.on("mousedblclick",this.doubleClickHandler),this.on("mousetripleclick",this.tripleClickHandler),this.draggableTextDelegate=new iv(this),super.initBehavior()}shouldStartDragging(){return this.draggableTextDelegate.isActive()}onDragStart(i){return this.draggableTextDelegate.onDragStart(i)}canDrop(i){return this.draggableTextDelegate.canDrop(i)}doubleClickHandler(i){this.isEditing&&(this.selectWord(this.getSelectionStartFromPointer(i.e)),this.renderCursorOrSelection())}tripleClickHandler(i){this.isEditing&&(this.selectLine(this.getSelectionStartFromPointer(i.e)),this.renderCursorOrSelection())}_mouseDownHandler({e:i,alreadySelected:t}){this.canvas&&this.editable&&!bp(i)&&!this.getActiveControl()&&(this.draggableTextDelegate.start(i)||(this.canvas.textEditingManager.register(this),t&&(this.inCompositionMode=!1,this.setCursorByClick(i)),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection()),this.selected||(this.selected=t||this.isEditing)))}mouseUpHandler({e:i,transform:t}){let e=this.draggableTextDelegate.end(i);if(this.canvas){this.canvas.textEditingManager.unregister(this);let n=this.canvas._activeObject;if(n&&n!==this)return}!this.editable||this.group&&!this.group.interactive||t&&t.actionPerformed||bp(i)||e||this.selected&&!this.getActiveControl()&&(this.enterEditing(i),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection())}setCursorByClick(i){let t=this.getSelectionStartFromPointer(i),e=this.selectionStart,n=this.selectionEnd;i.shiftKey?this.setSelectionStartEndWithShift(e,n,t):(this.selectionStart=t,this.selectionEnd=t),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())}getSelectionStartFromPointer(i){let t=this.canvas.getScenePoint(i).transform(xi(this.calcTransformMatrix())).add(new z(-this._getLeftOffset(),-this._getTopOffset())),e=0,n=0,s=0;for(let l=0;l<this._textLines.length&&e<=t.y;l++)e+=this.getHeightOfLine(l),s=l,l>0&&(n+=this._textLines[l-1].length+this.missingNewlineOffset(l-1));let r=Math.abs(this._getLineLeftOffset(s)),a=this._textLines[s].length,o=this.__charBounds[s];for(let l=0;l<a;l++){let c=r+o[l].kernedWidth;if(t.x<=c){Math.abs(t.x-c)<=Math.abs(t.x-r)&&n++;break}r=c,n++}return Math.min(this.flipX?a-n:n,this._text.length)}},il="moveCursorUp",nl="moveCursorDown",sl="moveCursorLeft",rl="moveCursorRight",al="exitEditing",Sp=(i,t)=>{let e=t.getRetinaScaling();i.setTransform(e,0,0,e,0,0);let n=t.viewportTransform;i.transform(n[0],n[1],n[2],n[3],n[4],n[5])},av={selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"",cursorDelay:1e3,cursorDuration:600,caching:!0,hiddenTextareaContainer:null,keysMap:{9:al,27:al,33:il,34:nl,35:rl,36:sl,37:sl,38:il,39:rl,40:nl},keysMapRtl:{9:al,27:al,33:il,34:nl,35:sl,36:rl,37:rl,38:il,39:sl,40:nl},ctrlKeysMapDown:{65:"cmdAll"},ctrlKeysMapUp:{67:"copy",88:"cut"},_selectionDirection:null,_reSpace:/\s|\r?\n/,inCompositionMode:!1},jn=class Ld extends rv{static getDefaults(){return{...super.getDefaults(),...Ld.ownDefaults}}get type(){let t=super.type;return t==="itext"?"i-text":t}constructor(t,e){super(t,{...Ld.ownDefaults,...e}),this.initBehavior()}_set(t,e){return this.isEditing&&this._savedProps&&t in this._savedProps?(this._savedProps[t]=e,this):(t==="canvas"&&(this.canvas instanceof Sl&&this.canvas.textEditingManager.remove(this),e instanceof Sl&&e.textEditingManager.add(this)),super._set(t,e))}setSelectionStart(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)}setSelectionEnd(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)}_updateAndFire(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()}_fireSelectionChanged(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})}initDimensions(){this.isEditing&&this.initDelayedCursor(),super.initDimensions()}getSelectionStyles(t=this.selectionStart||0,e=this.selectionEnd,n){return super.getSelectionStyles(t,e,n)}setSelectionStyles(t,e=this.selectionStart||0,n=this.selectionEnd){return super.setSelectionStyles(t,e,n)}get2DCursorLocation(t=this.selectionStart,e){return super.get2DCursorLocation(t,e)}render(t){super.render(t),this.cursorOffsetCache={},this.renderCursorOrSelection()}toCanvasElement(t){let e=this.isEditing;this.isEditing=!1;let n=super.toCanvasElement(t);return this.isEditing=e,n}renderCursorOrSelection(){if(!this.isEditing||!this.canvas)return;let t=this.clearContextTop(!0);if(!t)return;let e=this._getCursorBoundaries(),n=this.findAncestorsWithClipPath(),s=n.length>0,r,a=t;if(s){r=vi(t.canvas),a=r.getContext("2d"),Sp(a,this.canvas);let o=this.calcTransformMatrix();a.transform(o[0],o[1],o[2],o[3],o[4],o[5])}if(this.selectionStart!==this.selectionEnd||this.inCompositionMode?this.renderSelection(a,e):this.renderCursor(a,e),s)for(let o of n){let l=o.clipPath,c=vi(t.canvas),h=c.getContext("2d");if(Sp(h,this.canvas),!l.absolutePositioned){let d=o.calcTransformMatrix();h.transform(d[0],d[1],d[2],d[3],d[4],d[5])}l.transform(h),l.drawObject(h,!0,{}),this.drawClipPathOnCache(a,l,c)}s&&(t.setTransform(1,0,0,1,0,0),t.drawImage(r,0,0)),this.canvas.contextTopDirty=!0,t.restore()}findAncestorsWithClipPath(){let t=[],e=this;for(;e;)e.clipPath&&t.push(e),e=e.parent;return t}_getCursorBoundaries(t=this.selectionStart,e){let n=this._getLeftOffset(),s=this._getTopOffset(),r=this._getCursorBoundariesOffsets(t,e);return{left:n,top:s,leftOffset:r.left,topOffset:r.top}}_getCursorBoundariesOffsets(t,e){return e?this.__getCursorBoundariesOffsets(t):this.cursorOffsetCache&&"top"in this.cursorOffsetCache?this.cursorOffsetCache:this.cursorOffsetCache=this.__getCursorBoundariesOffsets(t)}__getCursorBoundariesOffsets(t){let e=0,n=0,{charIndex:s,lineIndex:r}=this.get2DCursorLocation(t),{textAlign:a,direction:o}=this;for(let d=0;d<r;d++)e+=this.getHeightOfLine(d);let l=this._getLineLeftOffset(r),c=this.__charBounds[r][s];c&&(n=c.left),this.charSpacing!==0&&s===this._textLines[r].length&&(n-=this._getWidthOfCharSpacing());let h=l+(n>0?n:0);return o==="rtl"&&(a==="right"||a==="justify"||a==="justify-right"?h*=-1:a==="left"||a==="justify-left"?h=l-(n>0?n:0):a!=="center"&&a!=="justify-center"||(h=l-(n>0?n:0))),{top:e,left:h}}renderCursorAt(t){this._renderCursor(this.canvas.contextTop,this._getCursorBoundaries(t,!0),t)}renderCursor(t,e){this._renderCursor(t,e,this.selectionStart)}getCursorRenderingData(t=this.selectionStart,e=this._getCursorBoundaries(t)){let n=this.get2DCursorLocation(t),s=n.lineIndex,r=n.charIndex>0?n.charIndex-1:0,a=this.getValueOfPropertyAt(s,r,"fontSize"),o=this.getObjectScaling().x*this.canvas.getZoom(),l=this.cursorWidth/o,c=this.getValueOfPropertyAt(s,r,"deltaY"),h=e.topOffset+(1-this._fontSizeFraction)*this.getHeightOfLine(s)/this.lineHeight-a*(1-this._fontSizeFraction);return{color:this.cursorColor||this.getValueOfPropertyAt(s,r,"fill"),opacity:this._currentCursorOpacity,left:e.left+e.leftOffset-l/2,top:h+e.top+c,width:l,height:a}}_renderCursor(t,e,n){let{color:s,opacity:r,left:a,top:o,width:l,height:c}=this.getCursorRenderingData(n,e);t.fillStyle=s,t.globalAlpha=r,t.fillRect(a,o,l,c)}renderSelection(t,e){let n={selectionStart:this.inCompositionMode?this.hiddenTextarea.selectionStart:this.selectionStart,selectionEnd:this.inCompositionMode?this.hiddenTextarea.selectionEnd:this.selectionEnd};this._renderSelection(t,n,e)}renderDragSourceEffect(){let t=this.draggableTextDelegate.getDragStartSelection();this._renderSelection(this.canvas.contextTop,t,this._getCursorBoundaries(t.selectionStart,!0))}renderDropTargetEffect(t){let e=this.getSelectionStartFromPointer(t);this.renderCursorAt(e)}_renderSelection(t,e,n){let{textAlign:s,direction:r}=this,a=e.selectionStart,o=e.selectionEnd,l=s.includes(jd),c=this.get2DCursorLocation(a),h=this.get2DCursorLocation(o),d=c.lineIndex,u=h.lineIndex,f=c.charIndex<0?0:c.charIndex,p=h.charIndex<0?0:h.charIndex;for(let y=d;y<=u;y++){let m=this._getLineLeftOffset(y)||0,g=this.getHeightOfLine(y),b=0,E=0;if(y===d&&(b=this.__charBounds[d][f].left),y>=d&&y<u)E=l&&!this.isEndOfWrapping(y)?this.width:this.getLineWidth(y)||5;else if(y===u)if(p===0)E=this.__charBounds[u][p].left;else{let L=this._getWidthOfCharSpacing();E=this.__charBounds[u][p-1].left+this.__charBounds[u][p-1].width-L}let x=g;(this.lineHeight<1||y===u&&this.lineHeight>1)&&(g/=this.lineHeight);let T=n.left+m+b,M=g,D=0,v=E-b;this.inCompositionMode?(t.fillStyle=this.compositionColor||"black",M=1,D=g):t.fillStyle=this.selectionColor,r==="rtl"&&(s==="right"||s==="justify"||s==="justify-right"?T=this.width-T-v:s==="left"||s==="justify-left"?T=n.left+m-E:s!=="center"&&s!=="justify-center"||(T=n.left+m-E)),t.fillRect(T,n.top+n.topOffset+D,v,M),n.topOffset+=x}}getCurrentCharFontSize(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fontSize")}getCurrentCharColor(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,oi)}_getCurrentCharIndex(){let t=this.get2DCursorLocation(this.selectionStart,!0),e=t.charIndex>0?t.charIndex-1:0;return{l:t.lineIndex,c:e}}dispose(){this.exitEditingImpl(),this.draggableTextDelegate.dispose(),super.dispose()}};N(jn,"ownDefaults",av),N(jn,"type","IText"),Dt.setClass(jn),Dt.setClass(jn,"i-text");var ol=class wd extends jn{static getDefaults(){return{...super.getDefaults(),...wd.ownDefaults}}constructor(t,e){super(t,{...wd.ownDefaults,...e})}static createControls(){return{controls:wm()}}initDimensions(){this.initialized&&(this.isEditing&&this.initDelayedCursor(),this._clearCache(),this.dynamicMinWidth=0,this._styleMap=this._generateStyleMap(this._splitText()),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),this.textAlign.includes("justify")&&this.enlargeSpaces(),this.height=this.calcTextHeight())}_generateStyleMap(t){let e=0,n=0,s=0,r={};for(let a=0;a<t.graphemeLines.length;a++)t.graphemeText[s]===`
`&&a>0?(n=0,s++,e++):!this.splitByGrapheme&&this._reSpaceAndTab.test(t.graphemeText[s])&&a>0&&(n++,s++),r[a]={line:e,offset:n},s+=t.graphemeLines[a].length,n+=t.graphemeLines[a].length;return r}styleHas(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[e];n&&(e=n.line)}return super.styleHas(t,e)}isEmptyStyles(t){if(!this.styles)return!0;let e,n,s=0,r=!1,a=this._styleMap[t],o=this._styleMap[t+1];a&&(t=a.line,s=a.offset),o&&(e=o.line,r=e===t,n=o.offset);let l=t===void 0?this.styles:{line:this.styles[t]};for(let c in l)for(let h in l[c]){let d=parseInt(h,10);if(d>=s&&(!r||d<n))for(let u in l[c][h])return!1}return!0}_getStyleDeclaration(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[t];if(!n)return{};t=n.line,e=n.offset+e}return super._getStyleDeclaration(t,e)}_setStyleDeclaration(t,e,n){let s=this._styleMap[t];super._setStyleDeclaration(s.line,s.offset+e,n)}_deleteStyleDeclaration(t,e){let n=this._styleMap[t];super._deleteStyleDeclaration(n.line,n.offset+e)}_getLineStyle(t){let e=this._styleMap[t];return!!this.styles[e.line]}_setLineStyle(t){let e=this._styleMap[t];super._setLineStyle(e.line)}_wrapText(t,e){this.isWrapping=!0;let n=this.getGraphemeDataForRender(t),s=[];for(let r=0;r<n.wordsData.length;r++)s.push(...this._wrapLine(r,e,n));return this.isWrapping=!1,s}getGraphemeDataForRender(t){let e=this.splitByGrapheme,n=e?"":" ",s=0;return{wordsData:t.map((r,a)=>{let o=0,l=e?this.graphemeSplit(r):this.wordSplit(r);return l.length===0?[{word:[],width:0}]:l.map(c=>{let h=e?[c]:this.graphemeSplit(c),d=this._measureWord(h,a,o);return s=Math.max(d,s),o+=h.length+n.length,{word:h,width:d}})}),largestWordWidth:s}}_measureWord(t,e,n=0){let s,r=0;for(let a=0,o=t.length;a<o;a++)r+=this._getGraphemeBox(t[a],e,a+n,s,!0).kernedWidth,s=t[a];return r}wordSplit(t){return t.split(this._wordJoiners)}_wrapLine(t,e,{largestWordWidth:n,wordsData:s},r=0){let a=this._getWidthOfCharSpacing(),o=this.splitByGrapheme,l=[],c=o?"":" ",h=0,d=[],u=0,f=0,p=!0;e-=r;let y=Math.max(e,n,this.dynamicMinWidth),m=s[t],g;for(g=0;g<m.length;g++){let{word:b,width:E}=m[g];u+=b.length,h+=f+E-a,h>y&&!p?(l.push(d),d=[],h=E,p=!0):h+=a,p||o||d.push(c),d=d.concat(b),f=o?0:this._measureWord([c],t,u),u++,p=!1}return g&&l.push(d),n+r>this.dynamicMinWidth&&(this.dynamicMinWidth=n-a+r),l}isEndOfWrapping(t){return!this._styleMap[t+1]||this._styleMap[t+1].line!==this._styleMap[t].line}missingNewlineOffset(t,e){return this.splitByGrapheme&&!e?+!!this.isEndOfWrapping(t):1}_splitTextIntoLines(t){let e=super._splitTextIntoLines(t),n=this._wrapText(e.lines,this.width),s=Array(n.length);for(let r=0;r<n.length;r++)s[r]=n[r].join("");return e.lines=s,e.graphemeLines=n,e}getMinWidth(){return Math.max(this.minWidth,this.dynamicMinWidth)}_removeExtraneousStyles(){let t=new Map;for(let e in this._styleMap){let n=parseInt(e,10);if(this._textLines[n]){let s=this._styleMap[e].line;t.set(`${s}`,!0)}}for(let e in this.styles)t.has(e)||delete this.styles[e]}toObject(t=[]){return super.toObject(["minWidth","splitByGrapheme",...t])}};N(ol,"type","Textbox"),N(ol,"textLayoutProperties",[...jn.textLayoutProperties,"width"]),N(ol,"ownDefaults",{minWidth:20,dynamicMinWidth:2,lockScalingFlip:!0,noScaleCache:!1,_wordJoiners:/[ \t\r]/,splitByGrapheme:!1}),Dt.setClass(ol);var Tp=class extends Ol{shouldPerformLayout(i){return!!i.target.clipPath&&super.shouldPerformLayout(i)}shouldLayoutClipPath(){return!1}calcLayoutResult(i,t){let{target:e}=i,{clipPath:n,group:s}=e;if(!n||!this.shouldPerformLayout(i))return;let{width:r,height:a}=ln(Pm(e,n)),o=new z(r,a);if(n.absolutePositioned)return{center:Mn(n.getRelativeCenterPoint(),void 0,s?s.calcTransformMatrix():void 0),size:o};{let l=n.getRelativeCenterPoint().transform(e.calcOwnMatrix(),!0);if(this.shouldPerformLayout(i)){let{center:c=new z,correction:h=new z}=this.calcBoundingBox(t,i)||{};return{center:c.add(l),correction:h.subtract(l),size:o}}return{center:e.getRelativeCenterPoint().add(l),size:o}}}};N(Tp,"type","clip-path"),Dt.setClass(Tp);var Ep=class extends Ol{getInitialSize({target:i},{size:t}){return new z(i.width||t.x,i.height||t.y)}};N(Ep,"type","fixed"),Dt.setClass(Ep);var ov=class extends qa{subscribeTargets(i){let t=i.target;i.targets.reduce((e,n)=>(n.parent&&e.add(n.parent),e),new Set).forEach(e=>{e.layoutManager.subscribeTargets({target:e,targets:[t]})})}unsubscribeTargets(i){let t=i.target,e=t.getObjects();i.targets.reduce((n,s)=>(s.parent&&n.add(s.parent),n),new Set).forEach(n=>{!e.some(s=>s.parent===n)&&n.layoutManager.unsubscribeTargets({target:n,targets:[t]})})}},ll=class Dd extends rr{static getDefaults(){return{...super.getDefaults(),...Dd.ownDefaults}}constructor(t=[],e={}){super(),Object.assign(this,Dd.ownDefaults),this.setOptions(e);let{left:n,top:s,layoutManager:r}=e;this.groupInit(t,{left:n,top:s,layoutManager:r??new ov})}_shouldSetNestedCoords(){return!0}__objectSelectionMonitor(){}multiSelectAdd(...t){this.multiSelectionStacking==="selection-order"?this.add(...t):t.forEach(e=>{let n=this._objects.findIndex(r=>r.isInFrontOf(e)),s=n===-1?this.size():n;this.insertAt(s,e)})}canEnterGroup(t){return this.getObjects().some(e=>e.isDescendantOf(t)||t.isDescendantOf(e))?(zn("error","ActiveSelection: circular object trees are not supported, this call has no effect"),!1):super.canEnterGroup(t)}enterGroup(t,e){t.parent&&t.parent===t.group?t.parent._exitGroup(t):t.group&&t.parent!==t.group&&t.group.remove(t),this._enterGroup(t,e)}exitGroup(t,e){this._exitGroup(t,e),t.parent&&t.parent._enterGroup(t,!0)}_onAfterObjectsChange(t,e){super._onAfterObjectsChange(t,e);let n=new Set;e.forEach(s=>{let{parent:r}=s;r&&n.add(r)}),t==="removed"?n.forEach(s=>{s._onAfterObjectsChange(pd,e)}):n.forEach(s=>{s._set("dirty",!0)})}onDeselect(){return this.removeAll(),!1}toString(){return`#<ActiveSelection: (${this.complexity()})>`}shouldCache(){return!1}isOnACache(){return!1}_renderControls(t,e,n){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1;let s={hasControls:!1,...n,forActiveSelection:!0};for(let r=0;r<this._objects.length;r++)this._objects[r]._renderControls(t,s);super._renderControls(t,e),t.restore()}};N(ll,"type","ActiveSelection"),N(ll,"ownDefaults",{multiSelectionStacking:"canvas-stacking"}),Dt.setClass(ll),Dt.setClass(ll,"activeSelection");var lv=class{constructor(){N(this,"resources",{})}applyFilters(i,t,e,n,s){let r=s.getContext("2d",{willReadFrequently:!0,desynchronized:!0});if(!r)return;r.drawImage(t,0,0,e,n);let a={sourceWidth:e,sourceHeight:n,imageData:r.getImageData(0,0,e,n),originalEl:t,originalImageData:r.getImageData(0,0,e,n),canvasEl:s,ctx:r,filterBackend:this};i.forEach(l=>{l.applyTo(a)});let{imageData:o}=a;return o.width===e&&o.height===n||(s.width=o.width,s.height=o.height),r.putImageData(o,0,0),a}},mg=class{constructor({tileSize:i=de.textureSize}={}){N(this,"aPosition",new Float32Array([0,0,0,1,1,0,1,1])),N(this,"resources",{}),this.tileSize=i,this.setupGLContext(i,i),this.captureGPUInfo()}setupGLContext(i,t){this.dispose(),this.createWebGLCanvas(i,t)}createWebGLCanvas(i,t){let e=vi({width:i,height:t}),n=e.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1});n&&(n.clearColor(0,0,0,0),this.canvas=e,this.gl=n)}applyFilters(i,t,e,n,s,r){let a=this.gl,o=s.getContext("2d");if(!a||!o)return;let l;r&&(l=this.getCachedTexture(r,t));let c={originalWidth:t.width||t.naturalWidth||0,originalHeight:t.height||t.naturalHeight||0,sourceWidth:e,sourceHeight:n,destinationWidth:e,destinationHeight:n,context:a,sourceTexture:this.createTexture(a,e,n,l?void 0:t),targetTexture:this.createTexture(a,e,n),originalTexture:l||this.createTexture(a,e,n,l?void 0:t),passes:i.length,webgl:!0,aPosition:this.aPosition,programCache:this.programCache,pass:0,filterBackend:this,targetCanvas:s},h=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,h),i.forEach(d=>{d&&d.applyTo(c)}),(function(d){let u=d.targetCanvas,f=u.width,p=u.height,y=d.destinationWidth,m=d.destinationHeight;f===y&&p===m||(u.width=y,u.height=m)})(c),this.copyGLTo2D(a,c),a.bindTexture(a.TEXTURE_2D,null),a.deleteTexture(c.sourceTexture),a.deleteTexture(c.targetTexture),a.deleteFramebuffer(h),o.setTransform(1,0,0,1,0,0),c}dispose(){this.canvas&&(this.canvas=null,this.gl=null),this.clearWebGLCaches()}clearWebGLCaches(){this.programCache={},this.textureCache={}}createTexture(i,t,e,n,s){let{NEAREST:r,TEXTURE_2D:a,RGBA:o,UNSIGNED_BYTE:l,CLAMP_TO_EDGE:c,TEXTURE_MAG_FILTER:h,TEXTURE_MIN_FILTER:d,TEXTURE_WRAP_S:u,TEXTURE_WRAP_T:f}=i,p=i.createTexture();return i.bindTexture(a,p),i.texParameteri(a,h,s||r),i.texParameteri(a,d,s||r),i.texParameteri(a,u,c),i.texParameteri(a,f,c),n?i.texImage2D(a,0,o,o,l,n):i.texImage2D(a,0,o,t,e,0,o,l,null),p}getCachedTexture(i,t,e){let{textureCache:n}=this;if(n[i])return n[i];{let s=this.createTexture(this.gl,t.width,t.height,t,e);return s&&(n[i]=s),s}}evictCachesForKey(i){this.textureCache[i]&&(this.gl.deleteTexture(this.textureCache[i]),delete this.textureCache[i])}copyGLTo2D(i,t){let e=i.canvas,n=t.targetCanvas,s=n.getContext("2d");if(!s)return;s.translate(0,n.height),s.scale(1,-1);let r=e.height-n.height;s.drawImage(e,0,r,n.width,n.height,0,0,n.width,n.height)}copyGLTo2DPutImageData(i,t){let e=t.targetCanvas.getContext("2d"),n=t.destinationWidth,s=t.destinationHeight,r=n*s*4;if(!e)return;let a=new Uint8Array(this.imageBuffer,0,r),o=new Uint8ClampedArray(this.imageBuffer,0,r);i.readPixels(0,0,n,s,i.RGBA,i.UNSIGNED_BYTE,a);let l=new ImageData(o,n,s);e.putImageData(l,0,0)}captureGPUInfo(){if(this.gpuInfo)return this.gpuInfo;let i=this.gl,t={renderer:"",vendor:""};if(!i)return t;let e=i.getExtension("WEBGL_debug_renderer_info");if(e){let n=i.getParameter(e.UNMASKED_RENDERER_WEBGL),s=i.getParameter(e.UNMASKED_VENDOR_WEBGL);n&&(t.renderer=n.toLowerCase()),s&&(t.vendor=s.toLowerCase())}return this.gpuInfo=t,t}},nd;function cv(){let{WebGLProbe:i}=cn();return i.queryWebGL(hn()),de.enableGLFiltering&&i.isSupported(de.textureSize)?new mg({tileSize:de.textureSize}):new lv}function sd(i=!0){return!nd&&i&&(nd=cv()),nd}var gg=["cropX","cropY"],_i=class Rd extends Xe{static getDefaults(){return{...super.getDefaults(),...Rd.ownDefaults}}constructor(t,e){super(),N(this,"_lastScaleX",1),N(this,"_lastScaleY",1),N(this,"_filterScalingX",1),N(this,"_filterScalingY",1),this.filters=[],Object.assign(this,Rd.ownDefaults),this.setOptions(e),this.cacheKey=`texture${Wn()}`,this.setElement(typeof t=="string"?(this.canvas&&ki(this.canvas.getElement())||ur()).getElementById(t):t,e)}getElement(){return this._element}setElement(t,e={}){this.removeTexture(this.cacheKey),this.removeTexture(`${this.cacheKey}_filtered`),this._element=t,this._originalElement=t,this._setWidthHeight(e),this.filters.length!==0&&this.applyFilters(),this.resizeFilter&&this.applyResizeFilters()}removeTexture(t){let e=sd(!1);e instanceof mg&&e.evictCachesForKey(t)}dispose(){super.dispose(),this.removeTexture(this.cacheKey),this.removeTexture(`${this.cacheKey}_filtered`),this._cacheContext=null,["_originalElement","_element","_filteredEl","_cacheCanvas"].forEach(t=>{let e=this[t];e&&cn().dispose(e),this[t]=void 0})}getCrossOrigin(){return this._originalElement&&(this._originalElement.crossOrigin||null)}getOriginalSize(){let t=this.getElement();return t?{width:t.naturalWidth||t.width,height:t.naturalHeight||t.height}:{width:0,height:0}}_stroke(t){if(!this.stroke||this.strokeWidth===0)return;let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,-n),t.lineTo(e,-n),t.lineTo(e,n),t.lineTo(-e,n),t.lineTo(-e,-n),t.closePath()}toObject(t=[]){let e=[];return this.filters.forEach(n=>{n&&e.push(n.toObject())}),{...super.toObject([...gg,...t]),src:this.getSrc(),crossOrigin:this.getCrossOrigin(),filters:e,...this.resizeFilter?{resizeFilter:this.resizeFilter.toObject()}:{}}}hasCrop(){return!!this.cropX||!!this.cropY||this.width<this._element.width||this.height<this._element.height}_toSVG(){let t=[],e=this._element,n=-this.width/2,s=-this.height/2,r=[],a=[],o="",l="";if(!e)return[];if(this.hasCrop()){let c=Wn();r.push('<clipPath id="imageCrop_'+c+`">
`,'	<rect x="'+n+'" y="'+s+'" width="'+te(this.width)+'" height="'+te(this.height)+`" />
`,`</clipPath>
`),o=' clip-path="url(#imageCrop_'+c+')" '}if(this.imageSmoothing||(l=' image-rendering="optimizeSpeed"'),t.push("	<image ","COMMON_PARTS",`xlink:href="${te(this.getSrc(!0))}" x="${n-this.cropX}" y="${s-this.cropY}" width="${e.width||e.naturalWidth}" height="${e.height||e.naturalHeight}"${l}${o}></image>
`),this.stroke||this.strokeDashArray){let c=this.fill;this.fill=null,a=[`	<rect x="${n}" y="${s}" width="${te(this.width)}" height="${te(this.height)}" style="${this.getSvgStyles()}" />
`],this.fill=c}return r=this.paintFirst==="fill"?r.concat(t,a):r.concat(a,t),r}getSrc(t){let e=t?this._element:this._originalElement;return e?e.toDataURL?e.toDataURL():this.srcFromAttribute?e.getAttribute("src")||"":e.src:this.src||""}getSvgSrc(t){return this.getSrc(t)}setSrc(t,{crossOrigin:e,signal:n}={}){return Ba(t,{crossOrigin:e,signal:n}).then(s=>{e!==void 0&&this.set({crossOrigin:e}),this.setElement(s)})}toString(){return`#<Image: { src: "${this.getSrc()}" }>`}applyResizeFilters(){let t=this.resizeFilter,e=this.minimumScaleTrigger,n=this.getTotalObjectScaling(),s=n.x,r=n.y,a=this._filteredEl||this._originalElement;if(this.group&&this.set("dirty",!0),!t||s>e&&r>e)return this._element=a,this._filterScalingX=1,this._filterScalingY=1,this._lastScaleX=s,void(this._lastScaleY=r);let o=vi(a),{width:l,height:c}=a;this._element=o,this._lastScaleX=t.scaleX=s,this._lastScaleY=t.scaleY=r,sd().applyFilters([t],a,l,c,this._element),this._filterScalingX=o.width/this._originalElement.width,this._filterScalingY=o.height/this._originalElement.height}applyFilters(t=this.filters||[]){if(t=t.filter(r=>r&&!r.isNeutralState()),this.set("dirty",!0),this.removeTexture(`${this.cacheKey}_filtered`),t.length===0)return this._element=this._originalElement,this._filteredEl=void 0,this._filterScalingX=1,void(this._filterScalingY=1);let e=this._originalElement,n=e.naturalWidth||e.width,s=e.naturalHeight||e.height;if(this._element===this._originalElement){let r=vi({width:n,height:s});this._element=r,this._filteredEl=r}else this._filteredEl&&(this._element=this._filteredEl,this._filteredEl.getContext("2d").clearRect(0,0,n,s),this._lastScaleX=1,this._lastScaleY=1);sd().applyFilters(t,this._originalElement,n,s,this._element,this.cacheKey),this._originalElement.width===this._element.width&&this._originalElement.height===this._element.height||(this._filterScalingX=this._element.width/this._originalElement.width,this._filterScalingY=this._element.height/this._originalElement.height)}_render(t){t.imageSmoothingEnabled=this.imageSmoothing,this.isMoving!==!0&&this.resizeFilter&&this._needsResize()&&this.applyResizeFilters(),this._stroke(t),this._renderPaintInOrder(t)}drawCacheOnCanvas(t){t.imageSmoothingEnabled=this.imageSmoothing,super.drawCacheOnCanvas(t)}shouldCache(){return this.needsItsOwnCache()}_renderFill(t){let e=this._element;if(!e)return;let n=this._filterScalingX,s=this._filterScalingY,r=this.width,a=this.height,o=Math.max(this.cropX,0),l=Math.max(this.cropY,0),c=e.naturalWidth||e.width,h=e.naturalHeight||e.height,d=o*n,u=l*s,f=Math.min(r*n,c-d),p=Math.min(a*s,h-u),y=-r/2,m=-a/2,g=Math.min(r,c/n-o),b=Math.min(a,h/s-l);e&&t.drawImage(e,d,u,f,p,y,m,g,b)}_needsResize(){let t=this.getTotalObjectScaling();return t.x!==this._lastScaleX||t.y!==this._lastScaleY}_resetWidthHeight(){this.set(this.getOriginalSize())}_setWidthHeight({width:t,height:e}={}){let n=this.getOriginalSize();this.width=t||n.width,this.height=e||n.height}parsePreserveAspectRatioAttribute(){let t=em(this.preserveAspectRatio||""),e=this.width,n=this.height,s={width:e,height:n},r,a=this._element.width,o=this._element.height,l=1,c=1,h=0,d=0,u=0,f=0;return!t||t.alignX==="none"&&t.alignY==="none"?(l=e/a,c=n/o):(t.meetOrSlice==="meet"&&(l=c=km(this._element,s),r=(e-a*l)/2,t.alignX==="Min"&&(h=-r),t.alignX==="Max"&&(h=r),r=(n-o*c)/2,t.alignY==="Min"&&(d=-r),t.alignY==="Max"&&(d=r)),t.meetOrSlice==="slice"&&(l=c=Hm(this._element,s),r=a-e/l,t.alignX==="Mid"&&(u=r/2),t.alignX==="Max"&&(u=r),r=o-n/c,t.alignY==="Mid"&&(f=r/2),t.alignY==="Max"&&(f=r),a=e/l,o=n/c)),{width:a,height:o,scaleX:l,scaleY:c,offsetLeft:h,offsetTop:d,cropX:u,cropY:f}}static fromObject({filters:t,resizeFilter:e,src:n,crossOrigin:s,type:r,...a},o){return Promise.all([Ba(n,{...o,crossOrigin:s}),t&&lr(t,o),e?lr([e],o):[],Ua(a,o)]).then(([l,c=[],[h],d={}])=>new this(l,{...a,src:n,filters:c,resizeFilter:h,...d}))}static fromURL(t,{crossOrigin:e=null,signal:n}={},s){return Ba(t,{crossOrigin:e,signal:n}).then(r=>new this(r,s))}static async fromElement(t,e={},n){let s=Dn(t,this.ATTRIBUTE_NAMES,n);return this.fromURL(s["xlink:href"]||s.href,e,s).catch(r=>(zn("log","Unable to parse Image",r),null))}};N(_i,"type","Image"),N(_i,"cacheProperties",[...Ln,...gg]),N(_i,"ownDefaults",{strokeWidth:0,srcFromAttribute:!1,minimumScaleTrigger:.5,cropX:0,cropY:0,imageSmoothing:!0}),N(_i,"ATTRIBUTE_NAMES",[...is,"x","y","width","height","preserveAspectRatio","xlink:href","href","crossOrigin","image-rendering"]),Dt.setClass(_i),Dt.setSVGClass(_i);var wL=Bl(["pattern","defs","symbol","metadata","clipPath","mask","desc"]);var Pl=i=>i.webgl!==void 0;var au="precision highp float",hv=`
    ${au};
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`,dv=new RegExp(au,"g"),Re=class{get type(){return this.constructor.type}constructor({type:i,...t}={}){Object.assign(this,this.constructor.defaults,t)}getFragmentSource(){return hv}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`}createProgram(i,t=this.getFragmentSource(),e=this.getVertexSource()){let{WebGLProbe:{GLPrecision:n="highp"}}=cn();n!=="highp"&&(t=t.replace(dv,au.replace("highp",n)));let s=i.createShader(i.VERTEX_SHADER),r=i.createShader(i.FRAGMENT_SHADER),a=i.createProgram();if(!s||!r||!a)throw new on("Vertex, fragment shader or program creation error");if(i.shaderSource(s,e),i.compileShader(s),!i.getShaderParameter(s,i.COMPILE_STATUS))throw new on(`Vertex shader compile error for ${this.type}: ${i.getShaderInfoLog(s)}`);if(i.shaderSource(r,t),i.compileShader(r),!i.getShaderParameter(r,i.COMPILE_STATUS))throw new on(`Fragment shader compile error for ${this.type}: ${i.getShaderInfoLog(r)}`);if(i.attachShader(a,s),i.attachShader(a,r),i.linkProgram(a),!i.getProgramParameter(a,i.LINK_STATUS))throw new on(`Shader link error for "${this.type}" ${i.getProgramInfoLog(a)}`);let o=this.getUniformLocations(i,a)||{};return o.uStepW=i.getUniformLocation(a,"uStepW"),o.uStepH=i.getUniformLocation(a,"uStepH"),{program:a,attributeLocations:this.getAttributeLocations(i,a),uniformLocations:o}}getAttributeLocations(i,t){return{aPosition:i.getAttribLocation(t,"aPosition")}}getUniformLocations(i,t){let e=this.constructor.uniformLocations,n={};for(let s=0;s<e.length;s++)n[e[s]]=i.getUniformLocation(t,e[s]);return n}sendAttributeData(i,t,e){let n=t.aPosition,s=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,s),i.enableVertexAttribArray(n),i.vertexAttribPointer(n,2,i.FLOAT,!1,0,0),i.bufferData(i.ARRAY_BUFFER,e,i.STATIC_DRAW)}_setupFrameBuffer(i){let t=i.context;if(i.passes>1){let e=i.destinationWidth,n=i.destinationHeight;i.sourceWidth===e&&i.sourceHeight===n||(t.deleteTexture(i.targetTexture),i.targetTexture=i.filterBackend.createTexture(t,e,n)),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i.targetTexture,0)}else t.bindFramebuffer(t.FRAMEBUFFER,null),t.finish()}_swapTextures(i){i.passes--,i.pass++;let t=i.targetTexture;i.targetTexture=i.sourceTexture,i.sourceTexture=t}isNeutralState(i){return!1}applyTo(i){Pl(i)?(this._setupFrameBuffer(i),this.applyToWebGL(i),this._swapTextures(i)):this.applyTo2d(i)}applyTo2d(i){}getCacheKey(){return this.type}retrieveShader(i){let t=this.getCacheKey();return i.programCache[t]||(i.programCache[t]=this.createProgram(i.context)),i.programCache[t]}applyToWebGL(i){let t=i.context,e=this.retrieveShader(i);i.pass===0&&i.originalTexture?t.bindTexture(t.TEXTURE_2D,i.originalTexture):t.bindTexture(t.TEXTURE_2D,i.sourceTexture),t.useProgram(e.program),this.sendAttributeData(t,e.attributeLocations,i.aPosition),t.uniform1f(e.uniformLocations.uStepW,1/i.sourceWidth),t.uniform1f(e.uniformLocations.uStepH,1/i.sourceHeight),this.sendUniformData(t,e.uniformLocations),t.viewport(0,0,i.destinationWidth,i.destinationHeight),t.drawArrays(t.TRIANGLE_STRIP,0,4)}bindAdditionalTexture(i,t,e){i.activeTexture(e),i.bindTexture(i.TEXTURE_2D,t),i.activeTexture(i.TEXTURE0)}unbindAdditionalTexture(i,t){i.activeTexture(t),i.bindTexture(i.TEXTURE_2D,null),i.activeTexture(i.TEXTURE0)}sendUniformData(i,t){}createHelpLayer(i){if(!i.helpLayer){let{sourceWidth:t,sourceHeight:e}=i;i.helpLayer=vi({width:t,height:e})}}toObject(){let i=Object.keys(this.constructor.defaults||{});return{type:this.type,...i.reduce((t,e)=>(t[e]=this[e],t),{})}}toJSON(){return this.toObject()}static async fromObject({type:i,...t},e){return new this(t)}};N(Re,"type","BaseFilter"),N(Re,"uniformLocations",[]);var uv={multiply:`gl_FragColor.rgb *= uColor.rgb;
`,screen:`gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,add:`gl_FragColor.rgb += uColor.rgb;
`,difference:`gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,subtract:`gl_FragColor.rgb -= uColor.rgb;
`,lighten:`gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,darken:`gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,exclusion:`gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,overlay:`
    if (uColor.r < 0.5) {
      gl_FragColor.r *= 2.0 * uColor.r;
    } else {
      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
    }
    if (uColor.g < 0.5) {
      gl_FragColor.g *= 2.0 * uColor.g;
    } else {
      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
    }
    if (uColor.b < 0.5) {
      gl_FragColor.b *= 2.0 * uColor.b;
    } else {
      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
    }
    `,tint:`
    gl_FragColor.rgb *= (1.0 - uColor.a);
    gl_FragColor.rgb += uColor.rgb;
    `},pa=class extends Re{getCacheKey(){return`${this.type}_${this.mode}`}getFragmentSource(){return`
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          ${uv[this.mode]}
        }
      }
      `}applyTo2d({imageData:{data:i}}){let t=new bi(this.color).getSource(),e=this.alpha,n=t[0]*e,s=t[1]*e,r=t[2]*e,a=1-e;for(let o=0;o<i.length;o+=4){let l=i[o],c=i[o+1],h=i[o+2],d,u,f;switch(this.mode){case"multiply":d=l*n/255,u=c*s/255,f=h*r/255;break;case"screen":d=255-(255-l)*(255-n)/255,u=255-(255-c)*(255-s)/255,f=255-(255-h)*(255-r)/255;break;case"add":d=l+n,u=c+s,f=h+r;break;case"difference":d=Math.abs(l-n),u=Math.abs(c-s),f=Math.abs(h-r);break;case"subtract":d=l-n,u=c-s,f=h-r;break;case"darken":d=Math.min(l,n),u=Math.min(c,s),f=Math.min(h,r);break;case"lighten":d=Math.max(l,n),u=Math.max(c,s),f=Math.max(h,r);break;case"overlay":d=n<128?2*l*n/255:255-2*(255-l)*(255-n)/255,u=s<128?2*c*s/255:255-2*(255-c)*(255-s)/255,f=r<128?2*h*r/255:255-2*(255-h)*(255-r)/255;break;case"exclusion":d=n+l-2*n*l/255,u=s+c-2*s*c/255,f=r+h-2*r*h/255;break;case"tint":d=n+l*a,u=s+c*a,f=r+h*a}i[o]=d,i[o+1]=u,i[o+2]=f}}sendUniformData(i,t){let e=new bi(this.color).getSource();e[0]=this.alpha*e[0]/255,e[1]=this.alpha*e[1]/255,e[2]=this.alpha*e[2]/255,e[3]=this.alpha,i.uniform4fv(t.uColor,e)}};N(pa,"defaults",{color:"#F95C63",mode:"multiply",alpha:1}),N(pa,"type","BlendColor"),N(pa,"uniformLocations",["uColor"]),Dt.setClass(pa);var fv={multiply:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.rgba *= color2.rgba;
      gl_FragColor = color;
    }
    `,mask:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.a = color2.a;
      gl_FragColor = color;
    }
    `},ma=class extends Re{getCacheKey(){return`${this.type}_${this.mode}`}getFragmentSource(){return fv[this.mode]}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `}applyToWebGL(i){let t=i.context,e=this.createTexture(i.filterBackend,this.image);this.bindAdditionalTexture(t,e,t.TEXTURE1),super.applyToWebGL(i),this.unbindAdditionalTexture(t,t.TEXTURE1)}createTexture(i,t){return i.getCachedTexture(t.cacheKey,t.getElement())}calculateMatrix(){let i=this.image,{width:t,height:e}=i.getElement();return[1/i.scaleX,0,0,0,1/i.scaleY,0,-i.left/t,-i.top/e,1]}applyTo2d({imageData:{data:i,width:t,height:e},filterBackend:{resources:n}}){let s=this.image;n.blendImage||(n.blendImage=hn());let r=n.blendImage,a=r.getContext("2d");r.width!==t||r.height!==e?(r.width=t,r.height=e):a.clearRect(0,0,t,e),a.setTransform(s.scaleX,0,0,s.scaleY,s.left,s.top),a.drawImage(s.getElement(),0,0,t,e);let o=a.getImageData(0,0,t,e).data;for(let l=0;l<i.length;l+=4){let c=i[l],h=i[l+1],d=i[l+2],u=i[l+3],f=o[l],p=o[l+1],y=o[l+2],m=o[l+3];switch(this.mode){case"multiply":i[l]=c*f/255,i[l+1]=h*p/255,i[l+2]=d*y/255,i[l+3]=u*m/255;break;case"mask":i[l+3]=m}}}sendUniformData(i,t){let e=this.calculateMatrix();i.uniform1i(t.uImage,1),i.uniformMatrix3fv(t.uTransformMatrix,!1,e)}toObject(){return{...super.toObject(),image:this.image&&this.image.toObject()}}static async fromObject({type:i,image:t,...e},n){return _i.fromObject(t,n).then(s=>new this({...e,image:s}))}};N(ma,"type","BlendImage"),N(ma,"defaults",{mode:"multiply",alpha:1}),N(ma,"uniformLocations",["uTransformMatrix","uImage"]),Dt.setClass(ma);var ga=class extends Re{getFragmentSource(){return`
    precision highp float;
    uniform sampler2D uTexture;
    uniform vec2 uDelta;
    varying vec2 vTexCoord;
    const float nSamples = 15.0;
    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
    float random(vec3 scale) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
    }
    void main() {
      vec4 color = vec4(0.0);
      float totalC = 0.0;
      float totalA = 0.0;
      float offset = random(v3offset);
      for (float t = -nSamples; t <= nSamples; t++) {
        float percent = (t + offset - 0.5) / nSamples;
        vec4 sample = texture2D(uTexture, vTexCoord + uDelta * percent);
        float weight = 1.0 - abs(percent);
        float alpha = weight * sample.a;
        color.rgb += sample.rgb * alpha;
        color.a += alpha;
        totalA += weight;
        totalC += alpha;
      }
      gl_FragColor.rgb = color.rgb / totalC;
      gl_FragColor.a = color.a / totalA;
    }
  `}applyTo(i){Pl(i)?(this.aspectRatio=i.sourceWidth/i.sourceHeight,i.passes++,this._setupFrameBuffer(i),this.horizontal=!0,this.applyToWebGL(i),this._swapTextures(i),this._setupFrameBuffer(i),this.horizontal=!1,this.applyToWebGL(i),this._swapTextures(i)):this.applyTo2d(i)}applyTo2d({imageData:{data:i,width:t,height:e}}){this.aspectRatio=t/e,this.horizontal=!0;let n=this.getBlurValue()*t,s=new Uint8ClampedArray(i),r=4*t;for(let a=0;a<i.length;a+=4){let o=0,l=0,c=0,h=0,d=0,u=a-a%r,f=u+r;for(let p=-14;p<15;p++){let y=p/15,m=4*Math.floor(n*y),g=1-Math.abs(y),b=a+m;b<u?b=u:b>f&&(b=f);let E=i[b+3]*g;o+=i[b]*E,l+=i[b+1]*E,c+=i[b+2]*E,h+=E,d+=g}s[a]=o/h,s[a+1]=l/h,s[a+2]=c/h,s[a+3]=h/d}this.horizontal=!1,n=this.getBlurValue()*e;for(let a=0;a<s.length;a+=4){let o=0,l=0,c=0,h=0,d=0,u=a%r,f=s.length-r+u;for(let p=-14;p<15;p++){let y=p/15,m=Math.floor(n*y)*r,g=1-Math.abs(y),b=a+m;b<u?b=u:b>f&&(b=f);let E=s[b+3]*g;o+=s[b]*E,l+=s[b+1]*E,c+=s[b+2]*E,h+=E,d+=g}i[a]=o/h,i[a+1]=l/h,i[a+2]=c/h,i[a+3]=h/d}}sendUniformData(i,t){let e=this.chooseRightDelta();i.uniform2fv(t.uDelta,e)}isNeutralState(){return this.blur===0}getBlurValue(){let i=1,{horizontal:t,aspectRatio:e}=this;return t?e>1&&(i=1/e):e<1&&(i=e),i*this.blur*.12}chooseRightDelta(){let i=this.getBlurValue();return this.horizontal?[i,0]:[0,i]}};N(ga,"type","Blur"),N(ga,"defaults",{blur:0}),N(ga,"uniformLocations",["uDelta"]),Dt.setClass(ga);var ya=class extends Re{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`}applyTo2d({imageData:{data:i}}){let t=Math.round(255*this.brightness);for(let e=0;e<i.length;e+=4)i[e]+=t,i[e+1]+=t,i[e+2]+=t}isNeutralState(){return this.brightness===0}sendUniformData(i,t){i.uniform1f(t.uBrightness,this.brightness)}};N(ya,"type","Brightness"),N(ya,"defaults",{brightness:0}),N(ya,"uniformLocations",["uBrightness"]),Dt.setClass(ya);var yg={matrix:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],colorsOnly:!0},ws=class extends Re{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  varying vec2 vTexCoord;
  uniform mat4 uColorMatrix;
  uniform vec4 uConstants;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color *= uColorMatrix;
    color += uConstants;
    gl_FragColor = color;
  }`}applyTo2d(i){let t=i.imageData.data,e=this.matrix,n=this.colorsOnly;for(let s=0;s<t.length;s+=4){let r=t[s],a=t[s+1],o=t[s+2];if(t[s]=r*e[0]+a*e[1]+o*e[2]+255*e[4],t[s+1]=r*e[5]+a*e[6]+o*e[7]+255*e[9],t[s+2]=r*e[10]+a*e[11]+o*e[12]+255*e[14],!n){let l=t[s+3];t[s]+=l*e[3],t[s+1]+=l*e[8],t[s+2]+=l*e[13],t[s+3]=r*e[15]+a*e[16]+o*e[17]+l*e[18]+255*e[19]}}}sendUniformData(i,t){let e=this.matrix,n=[e[0],e[1],e[2],e[3],e[5],e[6],e[7],e[8],e[10],e[11],e[12],e[13],e[15],e[16],e[17],e[18]],s=[e[4],e[9],e[14],e[19]];i.uniformMatrix4fv(t.uColorMatrix,!1,n),i.uniform4fv(t.uConstants,s)}toObject(){return{...super.toObject(),matrix:[...this.matrix]}}};function Bs(i,t){var e;let n=(N(e=class extends ws{toObject(){return{type:this.type,colorsOnly:this.colorsOnly}}},"type",i),N(e,"defaults",{colorsOnly:!1,matrix:t}),e);return Dt.setClass(n,i),n}N(ws,"type","ColorMatrix"),N(ws,"defaults",yg),N(ws,"uniformLocations",["uColorMatrix","uConstants"]),Dt.setClass(ws);var pv=Bs("Brownie",[.5997,.34553,-.27082,0,.186,-.0377,.86095,.15059,0,-.1449,.24113,-.07441,.44972,0,-.02965,0,0,0,1,0]),mv=Bs("Vintage",[.62793,.32021,-.03965,0,.03784,.02578,.64411,.03259,0,.02926,.0466,-.08512,.52416,0,.02023,0,0,0,1,0]),gv=Bs("Kodachrome",[1.12855,-.39673,-.03992,0,.24991,-.16404,1.08352,-.05498,0,.09698,-.16786,-.56034,1.60148,0,.13972,0,0,0,1,0]),yv=Bs("Technicolor",[1.91252,-.85453,-.09155,0,.04624,-.30878,1.76589,-.10601,0,-.27589,-.2311,-.75018,1.84759,0,.12137,0,0,0,1,0]),_v=Bs("Polaroid",[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0]),xv=Bs("Sepia",[.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0]),vv=Bs("BlackWhite",[1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,0,0,0,1,0]),Ad=class extends Re{constructor(i={}){super(i),this.subFilters=i.subFilters||[]}applyTo(i){Pl(i)&&(i.passes+=this.subFilters.length-1),this.subFilters.forEach(t=>{t.applyTo(i)})}toObject(){return{type:this.type,subFilters:this.subFilters.map(i=>i.toObject())}}isNeutralState(){return!this.subFilters.some(i=>!i.isNeutralState())}static fromObject(i,t){return Promise.all((i.subFilters||[]).map(e=>Dt.getClass(e.type).fromObject(e,t))).then(e=>new this({subFilters:e}))}};N(Ad,"type","Composed"),Dt.setClass(Ad);var _a=class extends Re{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`}isNeutralState(){return this.contrast===0}applyTo2d({imageData:{data:i}}){let t=Math.floor(255*this.contrast),e=259*(t+255)/(255*(259-t));for(let n=0;n<i.length;n+=4)i[n]=e*(i[n]-128)+128,i[n+1]=e*(i[n+1]-128)+128,i[n+2]=e*(i[n+2]-128)+128}sendUniformData(i,t){i.uniform1f(t.uContrast,this.contrast)}};N(_a,"type","Contrast"),N(_a,"defaults",{contrast:0}),N(_a,"uniformLocations",["uContrast"]),Dt.setClass(_a);var bv={Convolute_3_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_3_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_5_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_5_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_7_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_7_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_9_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_9_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `},xa=class extends Re{getCacheKey(){return`${this.type}_${Math.sqrt(this.matrix.length)}_${+!!this.opaque}`}getFragmentSource(){return bv[this.getCacheKey()]}applyTo2d(i){let t=i.imageData,e=t.data,n=this.matrix,s=Math.round(Math.sqrt(n.length)),r=Math.floor(s/2),a=t.width,o=t.height,l=i.ctx.createImageData(a,o),c=l.data,h=+!!this.opaque,d,u,f,p,y,m,g,b,E,x,T,M,D;for(T=0;T<o;T++)for(x=0;x<a;x++){for(y=4*(T*a+x),d=0,u=0,f=0,p=0,D=0;D<s;D++)for(M=0;M<s;M++)g=T+D-r,m=x+M-r,g<0||g>=o||m<0||m>=a||(b=4*(g*a+m),E=n[D*s+M],d+=e[b]*E,u+=e[b+1]*E,f+=e[b+2]*E,h||(p+=e[b+3]*E));c[y]=d,c[y+1]=u,c[y+2]=f,c[y+3]=h?e[y+3]:p}i.imageData=l}sendUniformData(i,t){i.uniform1fv(t.uMatrix,this.matrix)}toObject(){return{...super.toObject(),opaque:this.opaque,matrix:[...this.matrix]}}};N(xa,"type","Convolute"),N(xa,"defaults",{opaque:!1,matrix:[0,0,0,0,1,0,0,0,0]}),N(xa,"uniformLocations",["uMatrix","uOpaque","uHalfSize","uSize"]),Dt.setClass(xa);var _g="Gamma",va=class extends Re{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform vec3 uGamma;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    vec3 correction = (1.0 / uGamma);
    color.r = pow(color.r, correction.r);
    color.g = pow(color.g, correction.g);
    color.b = pow(color.b, correction.b);
    gl_FragColor = color;
    gl_FragColor.rgb *= color.a;
  }
`}constructor(i={}){super(i),this.gamma=i.gamma||this.constructor.defaults.gamma.concat()}applyTo2d({imageData:{data:i}}){let t=this.gamma,e=1/t[0],n=1/t[1],s=1/t[2];this.rgbValues||(this.rgbValues={r:new Uint8Array(256),g:new Uint8Array(256),b:new Uint8Array(256)});let r=this.rgbValues;for(let a=0;a<256;a++)r.r[a]=255*(a/255)**e,r.g[a]=255*(a/255)**n,r.b[a]=255*(a/255)**s;for(let a=0;a<i.length;a+=4)i[a]=r.r[i[a]],i[a+1]=r.g[i[a+1]],i[a+2]=r.b[i[a+2]]}sendUniformData(i,t){i.uniform3fv(t.uGamma,this.gamma)}isNeutralState(){let{gamma:i}=this;return i[0]===1&&i[1]===1&&i[2]===1}toObject(){return{type:_g,gamma:this.gamma.concat()}}};N(va,"type",_g),N(va,"defaults",{gamma:[1,1,1]}),N(va,"uniformLocations",["uGamma"]),Dt.setClass(va);var Sv={average:`
    precision highp float;
    uniform sampler2D uTexture;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      float average = (color.r + color.b + color.g) / 3.0;
      gl_FragColor = vec4(average, average, average, color.a);
    }
    `,lightness:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `,luminosity:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `},ba=class extends Re{applyTo2d({imageData:{data:i}}){for(let t,e=0;e<i.length;e+=4){let n=i[e],s=i[e+1],r=i[e+2];switch(this.mode){case"average":t=(n+s+r)/3;break;case"lightness":t=(Math.min(n,s,r)+Math.max(n,s,r))/2;break;case"luminosity":t=.21*n+.72*s+.07*r}i[e+2]=i[e+1]=i[e]=t}}getCacheKey(){return`${this.type}_${this.mode}`}getFragmentSource(){return Sv[this.mode]}sendUniformData(i,t){i.uniform1i(t.uMode,1)}isNeutralState(){return!1}};N(ba,"type","Grayscale"),N(ba,"defaults",{mode:"average"}),N(ba,"uniformLocations",["uMode"]),Dt.setClass(ba);var Tv={...yg,rotation:0},pl=class extends ws{calculateMatrix(){let i=this.rotation*Math.PI,t=Gi(i),e=Ji(i),n=1/3,s=Math.sqrt(n)*e,r=1-t;this.matrix=[t+r/3,n*r-s,n*r+s,0,0,n*r+s,t+n*r,n*r-s,0,0,n*r-s,n*r+s,t+n*r,0,0,0,0,0,1,0]}isNeutralState(){return this.rotation===0}applyTo(i){this.calculateMatrix(),super.applyTo(i)}toObject(){return{type:this.type,rotation:this.rotation}}};N(pl,"type","HueRotation"),N(pl,"defaults",Tv),Dt.setClass(pl);var Sa=class extends Re{applyTo2d({imageData:{data:i}}){for(let t=0;t<i.length;t+=4)i[t]=255-i[t],i[t+1]=255-i[t+1],i[t+2]=255-i[t+2],this.alpha&&(i[t+3]=255-i[t+3])}getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform int uInvert;
  uniform int uAlpha;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    if (uInvert == 1) {
      if (uAlpha == 1) {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);
      } else {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
      }
    } else {
      gl_FragColor = color;
    }
  }
`}isNeutralState(){return!this.invert}sendUniformData(i,t){i.uniform1i(t.uInvert,Number(this.invert)),i.uniform1i(t.uAlpha,Number(this.alpha))}};N(Sa,"type","Invert"),N(Sa,"defaults",{alpha:!1,invert:!0}),N(Sa,"uniformLocations",["uInvert","uAlpha"]),Dt.setClass(Sa);var Ta=class extends Re{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uStepH;
  uniform float uNoise;
  uniform float uSeed;
  varying vec2 vTexCoord;
  float rand(vec2 co, float seed, float vScale) {
    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
  }
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
    gl_FragColor = color;
  }
`}applyTo2d({imageData:{data:i}}){let t=this.noise;for(let e=0;e<i.length;e+=4){let n=(.5-Math.random())*t;i[e]+=n,i[e+1]+=n,i[e+2]+=n}}sendUniformData(i,t){i.uniform1f(t.uNoise,this.noise/255),i.uniform1f(t.uSeed,Math.random())}isNeutralState(){return this.noise===0}};N(Ta,"type","Noise"),N(Ta,"defaults",{noise:0}),N(Ta,"uniformLocations",["uNoise","uSeed"]),Dt.setClass(Ta);var Ea=class extends Re{applyTo2d({imageData:{data:i,width:t,height:e}}){for(let n=0;n<e;n+=this.blocksize)for(let s=0;s<t;s+=this.blocksize){let r=4*n*t+4*s,a=i[r],o=i[r+1],l=i[r+2],c=i[r+3];for(let h=n;h<Math.min(n+this.blocksize,e);h++)for(let d=s;d<Math.min(s+this.blocksize,t);d++){let u=4*h*t+4*d;i[u]=a,i[u+1]=o,i[u+2]=l,i[u+3]=c}}}isNeutralState(){return this.blocksize===1}getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBlocksize;
  uniform float uStepW;
  uniform float uStepH;
  varying vec2 vTexCoord;
  void main() {
    float blockW = uBlocksize * uStepW;
    float blockH = uBlocksize * uStepH;
    int posX = int(vTexCoord.x / blockW);
    int posY = int(vTexCoord.y / blockH);
    float fposX = float(posX);
    float fposY = float(posY);
    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
    vec4 color = texture2D(uTexture, squareCoords);
    gl_FragColor = color;
  }
`}sendUniformData(i,t){i.uniform1f(t.uBlocksize,this.blocksize)}};N(Ea,"type","Pixelate"),N(Ea,"defaults",{blocksize:4}),N(Ea,"uniformLocations",["uBlocksize"]),Dt.setClass(Ea);var Ma=class extends Re{getFragmentSource(){return`
precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
  gl_FragColor = texture2D(uTexture, vTexCoord);
  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
    gl_FragColor.a = 0.0;
  }
}
`}applyTo2d({imageData:{data:i}}){let t=255*this.distance,e=new bi(this.color).getSource(),n=[e[0]-t,e[1]-t,e[2]-t],s=[e[0]+t,e[1]+t,e[2]+t];for(let r=0;r<i.length;r+=4){let a=i[r],o=i[r+1],l=i[r+2];a>n[0]&&o>n[1]&&l>n[2]&&a<s[0]&&o<s[1]&&l<s[2]&&(i[r+3]=0)}}sendUniformData(i,t){let e=new bi(this.color).getSource(),n=this.distance,s=[0+e[0]/255-n,0+e[1]/255-n,0+e[2]/255-n,1],r=[e[0]/255+n,e[1]/255+n,e[2]/255+n,1];i.uniform4fv(t.uLow,s),i.uniform4fv(t.uHigh,r)}};N(Ma,"type","RemoveColor"),N(Ma,"defaults",{color:"#FFFFFF",distance:.02,useAlpha:!1}),N(Ma,"uniformLocations",["uLow","uHigh"]),Dt.setClass(Ma);var La=class extends Re{sendUniformData(i,t){i.uniform2fv(t.uDelta,this.horizontal?[1/this.width,0]:[0,1/this.height]),i.uniform1fv(t.uTaps,this.taps)}getFilterWindow(){let i=this.tempScale;return Math.ceil(this.lanczosLobes/i)}getCacheKey(){let i=this.getFilterWindow();return`${this.type}_${i}`}getFragmentSource(){let i=this.getFilterWindow();return this.generateShader(i)}getTaps(){let i=this.lanczosCreate(this.lanczosLobes),t=this.tempScale,e=this.getFilterWindow(),n=Array(e);for(let s=1;s<=e;s++)n[s-1]=i(s*t);return n}generateShader(i){let t=Array(i);for(let e=1;e<=i;e++)t[e-1]=`${e}.0 * uDelta`;return`
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec2 uDelta;
      varying vec2 vTexCoord;
      uniform float uTaps[${i}];
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        float sum = 1.0;
        ${t.map((e,n)=>`
              color += texture2D(uTexture, vTexCoord + ${e}) * uTaps[${n}] + texture2D(uTexture, vTexCoord - ${e}) * uTaps[${n}];
              sum += 2.0 * uTaps[${n}];
            `).join(`
`)}
        gl_FragColor = color / sum;
      }
    `}applyToForWebgl(i){i.passes++,this.width=i.sourceWidth,this.horizontal=!0,this.dW=Math.round(this.width*this.scaleX),this.dH=i.sourceHeight,this.tempScale=this.dW/this.width,this.taps=this.getTaps(),i.destinationWidth=this.dW,super.applyTo(i),i.sourceWidth=i.destinationWidth,this.height=i.sourceHeight,this.horizontal=!1,this.dH=Math.round(this.height*this.scaleY),this.tempScale=this.dH/this.height,this.taps=this.getTaps(),i.destinationHeight=this.dH,super.applyTo(i),i.sourceHeight=i.destinationHeight}applyTo(i){Pl(i)?this.applyToForWebgl(i):this.applyTo2d(i)}isNeutralState(){return this.scaleX===1&&this.scaleY===1}lanczosCreate(i){return t=>{if(t>=i||t<=-i)return 0;if(t<11920929e-14&&t>-11920929e-14)return 1;let e=(t*=Math.PI)/i;return Math.sin(t)/t*Math.sin(e)/e}}applyTo2d(i){let t=i.imageData,e=this.scaleX,n=this.scaleY;this.rcpScaleX=1/e,this.rcpScaleY=1/n;let s=t.width,r=t.height,a=Math.round(s*e),o=Math.round(r*n),l;l=this.resizeType==="sliceHack"?this.sliceByTwo(i,s,r,a,o):this.resizeType==="hermite"?this.hermiteFastResize(i,s,r,a,o):this.resizeType==="bilinear"?this.bilinearFiltering(i,s,r,a,o):this.resizeType==="lanczos"?this.lanczosResize(i,s,r,a,o):new ImageData(a,o),i.imageData=l}sliceByTwo(i,t,e,n,s){let r=i.imageData,a=.5,o=!1,l=!1,c=t*a,h=e*a,d=i.filterBackend.resources,u=0,f=0,p=t,y=0;d.sliceByTwo||(d.sliceByTwo=hn());let m=d.sliceByTwo;(m.width<1.5*t||m.height<e)&&(m.width=1.5*t,m.height=e);let g=m.getContext("2d");for(g.clearRect(0,0,1.5*t,e),g.putImageData(r,0,0),n=Math.floor(n),s=Math.floor(s);!o||!l;)t=c,e=h,n<Math.floor(c*a)?c=Math.floor(c*a):(c=n,o=!0),s<Math.floor(h*a)?h=Math.floor(h*a):(h=s,l=!0),g.drawImage(m,u,f,t,e,p,y,c,h),u=p,f=y,y+=h;return g.getImageData(u,f,n,s)}lanczosResize(i,t,e,n,s){let r=i.imageData.data,a=i.ctx.createImageData(n,s),o=a.data,l=this.lanczosCreate(this.lanczosLobes),c=this.rcpScaleX,h=this.rcpScaleY,d=2/this.rcpScaleX,u=2/this.rcpScaleY,f=Math.ceil(c*this.lanczosLobes/2),p=Math.ceil(h*this.lanczosLobes/2),y={},m={x:0,y:0},g={x:0,y:0};return(function b(E){let x,T,M,D,v,L,R,A,P,q,I;for(m.x=(E+.5)*c,g.x=Math.floor(m.x),x=0;x<s;x++){for(m.y=(x+.5)*h,g.y=Math.floor(m.y),v=0,L=0,R=0,A=0,P=0,T=g.x-f;T<=g.x+f;T++)if(!(T<0||T>=t)){q=Math.floor(1e3*Math.abs(T-m.x)),y[q]||(y[q]={});for(let k=g.y-p;k<=g.y+p;k++)k<0||k>=e||(I=Math.floor(1e3*Math.abs(k-m.y)),y[q][I]||(y[q][I]=l(Math.sqrt((q*d)**2+(I*u)**2)/1e3)),M=y[q][I],M>0&&(D=4*(k*t+T),v+=M,L+=M*r[D],R+=M*r[D+1],A+=M*r[D+2],P+=M*r[D+3]))}D=4*(x*n+E),o[D]=L/v,o[D+1]=R/v,o[D+2]=A/v,o[D+3]=P/v}return++E<n?b(E):a})(0)}bilinearFiltering(i,t,e,n,s){let r,a,o,l,c,h,d,u,f,p,y,m,g,b=0,E=this.rcpScaleX,x=this.rcpScaleY,T=4*(t-1),M=i.imageData.data,D=i.ctx.createImageData(n,s),v=D.data;for(d=0;d<s;d++)for(u=0;u<n;u++)for(c=Math.floor(E*u),h=Math.floor(x*d),f=E*u-c,p=x*d-h,g=4*(h*t+c),y=0;y<4;y++)r=M[g+y],a=M[g+4+y],o=M[g+T+y],l=M[g+T+4+y],m=r*(1-f)*(1-p)+a*f*(1-p)+o*p*(1-f)+l*f*p,v[b++]=m;return D}hermiteFastResize(i,t,e,n,s){let r=this.rcpScaleX,a=this.rcpScaleY,o=Math.ceil(r/2),l=Math.ceil(a/2),c=i.imageData.data,h=i.ctx.createImageData(n,s),d=h.data;for(let u=0;u<s;u++)for(let f=0;f<n;f++){let p=4*(f+u*n),y,m=0,g=0,b=0,E=0,x=0,T=0,M=(u+.5)*a;for(let D=Math.floor(u*a);D<(u+1)*a;D++){let v=Math.abs(M-(D+.5))/l,L=(f+.5)*r,R=v*v;for(let A=Math.floor(f*r);A<(f+1)*r;A++){let P=Math.abs(L-(A+.5))/o,q=Math.sqrt(R+P*P);q>1&&q<-1||(y=2*q*q*q-3*q*q+1,y>0&&(P=4*(A+D*t),T+=y*c[P+3],g+=y,c[P+3]<255&&(y=y*c[P+3]/250),b+=y*c[P],E+=y*c[P+1],x+=y*c[P+2],m+=y))}}d[p]=b/m,d[p+1]=E/m,d[p+2]=x/m,d[p+3]=T/g}return h}};N(La,"type","Resize"),N(La,"defaults",{resizeType:"hermite",scaleX:1,scaleY:1,lanczosLobes:3}),N(La,"uniformLocations",["uDelta","uTaps"]),Dt.setClass(La);var wa=class extends Re{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uSaturation;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float rgMax = max(color.r, color.g);
    float rgbMax = max(rgMax, color.b);
    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
    gl_FragColor = color;
  }
`}applyTo2d({imageData:{data:i}}){let t=-this.saturation;for(let e=0;e<i.length;e+=4){let n=i[e],s=i[e+1],r=i[e+2],a=Math.max(n,s,r);i[e]+=a===n?0:(a-n)*t,i[e+1]+=a===s?0:(a-s)*t,i[e+2]+=a===r?0:(a-r)*t}}sendUniformData(i,t){i.uniform1f(t.uSaturation,-this.saturation)}isNeutralState(){return this.saturation===0}};N(wa,"type","Saturation"),N(wa,"defaults",{saturation:0}),N(wa,"uniformLocations",["uSaturation"]),Dt.setClass(wa);var Da=class extends Re{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uVibrance;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float max = max(color.r, max(color.g, color.b));
    float avg = (color.r + color.g + color.b) / 3.0;
    float amt = (abs(max - avg) * 2.0) * uVibrance;
    color.r += max != color.r ? (max - color.r) * amt : 0.00;
    color.g += max != color.g ? (max - color.g) * amt : 0.00;
    color.b += max != color.b ? (max - color.b) * amt : 0.00;
    gl_FragColor = color;
  }
`}applyTo2d({imageData:{data:i}}){let t=-this.vibrance;for(let e=0;e<i.length;e+=4){let n=i[e],s=i[e+1],r=i[e+2],a=Math.max(n,s,r),o=(n+s+r)/3,l=2*Math.abs(a-o)/255*t;i[e]+=a===n?0:(a-n)*l,i[e+1]+=a===s?0:(a-s)*l,i[e+2]+=a===r?0:(a-r)*l}}sendUniformData(i,t){i.uniform1f(t.uVibrance,-this.vibrance)}isNeutralState(){return this.vibrance===0}};N(Da,"type","Vibrance"),N(Da,"defaults",{vibrance:0}),N(Da,"uniformLocations",["uVibrance"]),Dt.setClass(Da);var DL=ka({BaseFilter:()=>Re,BlackWhite:()=>vv,BlendColor:()=>pa,BlendImage:()=>ma,Blur:()=>ga,Brightness:()=>ya,Brownie:()=>pv,ColorMatrix:()=>ws,Composed:()=>Ad,Contrast:()=>_a,Convolute:()=>xa,Gamma:()=>va,Grayscale:()=>ba,HueRotation:()=>pl,Invert:()=>Sa,Kodachrome:()=>gv,Noise:()=>Ta,Pixelate:()=>Ea,Polaroid:()=>_v,RemoveColor:()=>Ma,Resize:()=>La,Saturation:()=>wa,Sepia:()=>xv,Technicolor:()=>yv,Vibrance:()=>Da,Vintage:()=>mv});var fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kg=0,Ju=1,t0=2;var Fo=1,e0=2,jr=3,ms=0,Ge=1,hi=2,_n=0,zr=1,Yu=2,Qu=3,Xu=4,i0=5;var Gs=100,n0=101,s0=102,r0=103,a0=104,o0=200,l0=201,c0=202,h0=203,ju=204,zu=205,d0=206,u0=207,f0=208,p0=209,m0=210,g0=211,y0=212,_0=213,x0=214,fc=0,pc=1,mc=2,Fr=3,gc=4,yc=5,_c=6,xc=7,zc=0,v0=1,b0=2,Wi=0,Wu=1,Zu=2,Ku=3,Co=4,tf=5,ef=6,nf=7;var sf=300,gs=301,Js=302,Wc=303,Zc=304,No=306,Cr=1e3,un=1001,vc=1002,qe=1003,S0=1004;var Oo=1005;var Ve=1006,Kc=1007;var ys=1008;var di=1009,rf=1010,af=1011,Wr=1012,th=1013,Zi=1014,Ci=1015,Ki=1016,eh=1017,ih=1018,Zr=1020,of=35902,lf=35899,cf=1021,hf=1022,Ni=1023,pn=1026,_s=1027,nh=1028,sh=1029,xs=1030,rh=1031;var ah=1033,Po=33776,qo=33777,ko=33778,Ho=33779,oh=35840,lh=35841,ch=35842,hh=35843,dh=36196,uh=37492,fh=37496,ph=37488,mh=37489,Uo=37490,gh=37491,yh=37808,_h=37809,xh=37810,vh=37811,bh=37812,Sh=37813,Th=37814,Eh=37815,Mh=37816,Lh=37817,wh=37818,Dh=37819,Rh=37820,Ah=37821,Ih=36492,Bh=36494,Fh=36495,Ch=36283,Nh=36284,$o=36285,Oh=36286;var to=2300,bc=2301,dc=2302,Fu=2303,Cu=2400,Nu=2401,Ou=2402;var T0=3200;var Vo=0,E0=1,Hn="",Ue="srgb",eo="srgb-linear",io="linear",he="srgb";var uc=7680;var M0=519,L0=512,w0=513,D0=514,Ph=515,R0=516,A0=517,qh=518,I0=519,B0=35044;var df="300 es",ji=2e3,Nr=2001;function Ev(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function F0(){let i=no("canvas");return i.style.display="block",i}var xg={},Or=null;function uf(...i){let t="THREE."+i.shift();Or?Or("log",t,...i):console.log(t,...i)}function C0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=C0(i);let t="THREE."+i.shift();if(Or)Or("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Gt(...i){i=C0(i);let t="THREE."+i.shift();if(Or)Or("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ps(...i){let t=i.join(" ");t in xg||(xg[t]=!0,kt(...i))}function N0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var O0={[fc]:pc,[mc]:_c,[gc]:xc,[Fr]:yc,[pc]:fc,[_c]:mc,[xc]:gc,[yc]:Fr},zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vg=1234567,Ir=Math.PI/180,Pr=180/Math.PI;function Ys(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function ff(i,t){return(i%t+t)%t}function Lv(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wv(i,t,e){return i!==t?(e-i)/(t-i):0}function Wa(i,t,e){return(1-e)*i+e*t}function Dv(i,t,e,n){return Wa(i,t,1-Math.exp(-e*n))}function Rv(i,t=1){return t-Math.abs(ff(i,t*2)-t)}function Av(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Iv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bv(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Fv(i,t){return i+Math.random()*(t-i)}function Cv(i){return i*(.5-Math.random())}function Nv(i){i!==void 0&&(vg=i);let t=vg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ov(i){return i*Ir}function Pv(i){return i*Pr}function qv(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function kv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uv(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ar(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pf={DEG2RAD:Ir,RAD2DEG:Pr,generateUUID:Ys,clamp:Wt,euclideanModulo:ff,mapLinear:Lv,inverseLerp:wv,lerp:Wa,damp:Dv,pingpong:Rv,smoothstep:Av,smootherstep:Iv,randInt:Bv,randFloat:Fv,randFloatSpread:Cv,seededRandom:Nv,degToRad:Ov,radToDeg:Pv,isPowerOfTwo:qv,ceilPowerOfTwo:kv,floorPowerOfTwo:Hv,setQuaternionFromProperEuler:Uv,normalize:ni,denormalize:Ar},lt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Li=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*y;m<0&&(u=-u,f=-f,p=-p,y=-y,m=-m);let g=1-o;if(m<.9995){let b=Math.acos(m),E=Math.sin(b);g=Math.sin(g*b)/E,o=Math.sin(o*b)/E,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+y*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+y*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ou.copy(this).projectOnVector(t),this.sub(ou)}reflect(t){return this.sub(ou.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ou=new C,bg=new Li,Xt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],y=s[0],m=s[3],g=s[6],b=s[1],E=s[4],x=s[7],T=s[2],M=s[5],D=s[8];return r[0]=a*y+o*b+l*T,r[3]=a*m+o*E+l*M,r[6]=a*g+o*x+l*D,r[1]=c*y+h*b+d*T,r[4]=c*m+h*E+d*M,r[7]=c*g+h*x+d*D,r[2]=u*y+f*b+p*T,r[5]=u*m+f*E+p*M,r[8]=u*g+f*x+p*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lu.makeScale(t,e)),this}rotate(t){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lu.makeRotation(-t)),this}translate(t,e){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},lu=new Xt,Sg=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tg=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $v(){let i={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=Br(s.r),s.g=Br(s.g),s.b=Br(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[eo]:{primaries:t,whitePoint:n,transfer:io,toXYZ:Sg,fromXYZ:Tg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Sg,fromXYZ:Tg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var se=$v();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gr,Sc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gr===void 0&&(gr=no("canvas")),gr.width=t.width,gr.height=t.height;let s=gr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vv=0,qr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cu(s[a].image)):r.push(cu(s[a]))}else r=cu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function cu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var Gv=0,hu=new C,si=class i extends zi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=un,s=un,r=Ve,a=ys,o=Ni,l=di,c=i.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Ys(),this.name="",this.source=new qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=sf;si.DEFAULT_ANISOTROPY=1;var Te=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,x=(f+1)/2,T=(g+1)/2,M=(h+u)/4,D=(d+y)/4,v=(p+m)/4;return E>x&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=M/n,r=D/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=D/r,s=v/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-p)*(m-p)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(d-y)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new si(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends Tc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},so=class extends si{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ec=class extends si{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var pe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,y,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,y,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/yr.setFromMatrixColumn(t,0).length(),r=1/yr.setFromMatrixColumn(t,1).length(),a=1/yr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u+y*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,y=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jv,t,Yv)}lookAt(t,e,n){let s=this.elements;return Si.subVectors(t,e),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),ns.crossVectors(n,Si),ns.lengthSq()===0&&(Math.abs(n.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),ns.crossVectors(n,Si)),ns.normalize(),ql.crossVectors(Si,ns),s[0]=ns.x,s[4]=ql.x,s[8]=Si.x,s[1]=ns.y,s[5]=ql.y,s[9]=Si.y,s[2]=ns.z,s[6]=ql.z,s[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],y=n[6],m=n[10],g=n[14],b=n[3],E=n[7],x=n[11],T=n[15],M=s[0],D=s[4],v=s[8],L=s[12],R=s[1],A=s[5],P=s[9],q=s[13],I=s[2],k=s[6],X=s[10],Y=s[14],it=s[3],U=s[7],K=s[11],tt=s[15];return r[0]=a*M+o*R+l*I+c*it,r[4]=a*D+o*A+l*k+c*U,r[8]=a*v+o*P+l*X+c*K,r[12]=a*L+o*q+l*Y+c*tt,r[1]=h*M+d*R+u*I+f*it,r[5]=h*D+d*A+u*k+f*U,r[9]=h*v+d*P+u*X+f*K,r[13]=h*L+d*q+u*Y+f*tt,r[2]=p*M+y*R+m*I+g*it,r[6]=p*D+y*A+m*k+g*U,r[10]=p*v+y*P+m*X+g*K,r[14]=p*L+y*q+m*Y+g*tt,r[3]=b*M+E*R+x*I+T*it,r[7]=b*D+E*A+x*k+T*U,r[11]=b*v+E*P+x*X+T*K,r[15]=b*L+E*q+x*Y+T*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],y=t[7],m=t[11],g=t[15],b=l*f-c*u,E=o*f-c*d,x=o*u-l*d,T=a*f-c*h,M=a*u-l*h,D=a*d-o*h;return e*(y*b-m*E+g*x)-n*(p*b-m*T+g*M)+s*(p*E-y*T+g*D)-r*(p*x-y*M+m*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],y=t[13],m=t[14],g=t[15],b=e*o-n*a,E=e*l-s*a,x=e*c-r*a,T=n*l-s*o,M=n*c-r*o,D=s*c-r*l,v=h*y-d*p,L=h*m-u*p,R=h*g-f*p,A=d*m-u*y,P=d*g-f*y,q=u*g-f*m,I=b*q-E*P+x*A+T*R-M*L+D*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(o*q-l*P+c*A)*k,t[1]=(s*P-n*q-r*A)*k,t[2]=(y*D-m*M+g*T)*k,t[3]=(u*M-d*D-f*T)*k,t[4]=(l*R-a*q-c*L)*k,t[5]=(e*q-s*R+r*L)*k,t[6]=(m*x-p*D-g*E)*k,t[7]=(h*D-u*x+f*E)*k,t[8]=(a*P-o*R+c*v)*k,t[9]=(n*R-e*P-r*v)*k,t[10]=(p*M-y*x+g*b)*k,t[11]=(d*x-h*M-f*b)*k,t[12]=(o*L-a*A-l*v)*k,t[13]=(e*A-n*L+s*v)*k,t[14]=(y*E-p*T-m*b)*k,t[15]=(h*T-d*E+u*b)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,y=a*h,m=a*d,g=o*d,b=l*c,E=l*h,x=l*d,T=n.x,M=n.y,D=n.z;return s[0]=(1-(y+g))*T,s[1]=(f+x)*T,s[2]=(p-E)*T,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(u+g))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(p+E)*D,s[9]=(m-b)*D,s[10]=(1-(u+y))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=yr.set(s[0],s[1],s[2]).length(),o=yr.set(s[4],s[5],s[6]).length(),l=yr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Yi.copy(this);let c=1/a,h=1/o,d=1/l;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=h,Yi.elements[5]*=h,Yi.elements[6]*=h,Yi.elements[8]*=d,Yi.elements[9]*=d,Yi.elements[10]*=d,e.setFromRotationMatrix(Yi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=ji,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===ji)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Nr)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ji,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===ji)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===Nr)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},yr=new C,Yi=new pe,Jv=new C(0,0,0),Yv=new C(1,1,1),ns=new C,ql=new C,Si=new C,Eg=new pe,Mg=new Li,mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qv=0,Lg=new C,_r=new Li,Rn=new pe,kl=new C,Va=new C,Xv=new C,jv=new Li,wg=new C(1,0,0),Dg=new C(0,1,0),Rg=new C(0,0,1),Ag={type:"added"},zv={type:"removed"},xr={type:"childadded",child:null},du={type:"childremoved",child:null},Be=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new mn,n=new Li,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Xt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _r.setFromAxisAngle(t,e),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,e){return _r.setFromAxisAngle(t,e),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(wg,t)}rotateY(t){return this.rotateOnAxis(Dg,t)}rotateZ(t){return this.rotateOnAxis(Rg,t)}translateOnAxis(t,e){return Lg.copy(t).applyQuaternion(this.quaternion),this.position.add(Lg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wg,t)}translateY(t){return this.translateOnAxis(Dg,t)}translateZ(t){return this.translateOnAxis(Rg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kl.copy(t):kl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Va,kl,this.up):Rn.lookAt(kl,Va,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(Rn),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ag),xr.child=t,this.dispatchEvent(xr),xr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zv),du.child=t,this.dispatchEvent(du),du.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ag),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,t,Xv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,jv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new C(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wv={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function uu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=ff(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=uu(a,r,t+1/3),this.g=uu(a,r,t),this.b=uu(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=P0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return se.workingToColorSpace(ze.copy(this),t),Math.round(Wt(ze.r*255,0,255))*65536+Math.round(Wt(ze.g*255,0,255))*256+Math.round(Wt(ze.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ue){se.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+e,ss.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ss),t.getHSL(Hl);let n=Wa(ss.h,Hl.h,e),s=Wa(ss.s,Hl.s,e),r=Wa(ss.l,Hl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Qt;Qt.NAMES=P0;var qs=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qi=new C,An=new C,fu=new C,In=new C,vr=new C,br=new C,Ig=new C,pu=new C,mu=new C,gu=new C,yu=new Te,_u=new Te,xu=new Te,Cn=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qi.subVectors(t,e),s.cross(Qi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qi.subVectors(s,e),An.subVectors(n,e),fu.subVectors(t,e);let a=Qi.dot(Qi),o=Qi.dot(An),l=Qi.dot(fu),c=An.dot(An),h=An.dot(fu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return yu.setScalar(0),_u.setScalar(0),xu.setScalar(0),yu.fromBufferAttribute(t,e),_u.fromBufferAttribute(t,n),xu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(yu,r.x),a.addScaledVector(_u,r.y),a.addScaledVector(xu,r.z),a}static isFrontFacing(t,e,n,s){return Qi.subVectors(n,e),An.subVectors(t,e),Qi.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qi.subVectors(this.c,this.b),An.subVectors(this.a,this.b),Qi.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;vr.subVectors(s,n),br.subVectors(r,n),pu.subVectors(t,n);let l=vr.dot(pu),c=br.dot(pu);if(l<=0&&c<=0)return e.copy(n);mu.subVectors(t,s);let h=vr.dot(mu),d=br.dot(mu);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(vr,a);gu.subVectors(t,r);let f=vr.dot(gu),p=br.dot(gu);if(p>=0&&f<=p)return e.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(br,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Ig.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Ig,o);let g=1/(m+y+u);return a=y*g,o=u*g,e.copy(n).addScaledVector(vr,a).addScaledVector(br,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ul.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ul.copy(n.boundingBox)),Ul.applyMatrix4(t.matrixWorld),this.union(Ul)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ga),$l.subVectors(this.max,Ga),Sr.subVectors(t.a,Ga),Tr.subVectors(t.b,Ga),Er.subVectors(t.c,Ga),rs.subVectors(Tr,Sr),as.subVectors(Er,Tr),Fs.subVectors(Sr,Er);let e=[0,-rs.z,rs.y,0,-as.z,as.y,0,-Fs.z,Fs.y,rs.z,0,-rs.x,as.z,0,-as.x,Fs.z,0,-Fs.x,-rs.y,rs.x,0,-as.y,as.x,0,-Fs.y,Fs.x,0];return!vu(e,Sr,Tr,Er,$l)||(e=[1,0,0,0,1,0,0,0,1],!vu(e,Sr,Tr,Er,$l))?!1:(Vl.crossVectors(rs,as),e=[Vl.x,Vl.y,Vl.z],vu(e,Sr,Tr,Er,$l))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Bn=[new C,new C,new C,new C,new C,new C,new C,new C],Xi=new C,Ul=new gn,Sr=new C,Tr=new C,Er=new C,rs=new C,as=new C,Fs=new C,Ga=new C,$l=new C,Vl=new C,Cs=new C;function vu(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cs.fromArray(i,r);let o=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=t.dot(Cs),c=e.dot(Cs),h=n.dot(Cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ae=new C,Gl=new lt,Zv=0,Mi=class extends zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=B0,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gl.fromBufferAttribute(this,e),Gl.applyMatrix3(t),this.setXY(e,Gl.x,Gl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ar(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),n=ni(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),n=ni(n,this.array),s=ni(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),n=ni(n,this.array),s=ni(s,this.array),r=ni(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ao=class extends Mi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var oo=class extends Mi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ie=class extends Mi{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kv=new gn,Ja=new C,bu=new C,Pn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ja.subVectors(t,this.center);let e=Ja.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ja,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ja.copy(t.center).add(bu)),this.expandByPoint(Ja.copy(t.center).sub(bu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},tb=0,Fi=new pe,Su=new Be,Mr=new C,Ti=new gn,Ya=new gn,Pe=new C,ci=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ev(t)?oo:ao)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,e,n){return Fi.makeTranslation(t,e,n),this.applyMatrix4(Fi),this}scale(t,e,n){return Fi.makeScale(t,e,n),this.applyMatrix4(Fi),this}lookAt(t){return Su.lookAt(t),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ya.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Ti.min,Ya.min),Ti.expandByPoint(Pe),Pe.addVectors(Ti.max,Ya.max),Ti.expandByPoint(Pe)):(Ti.expandByPoint(Ya.min),Ti.expandByPoint(Ya.max))}Ti.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(t,c),Pe.add(Mr)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new C,l[v]=new C;let c=new C,h=new C,d=new C,u=new lt,f=new lt,p=new lt,y=new C,m=new C;function g(v,L,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(A),o[v].add(y),o[L].add(y),o[R].add(y),l[v].add(m),l[L].add(m),l[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,L=b.length;v<L;++v){let R=b[v],A=R.start,P=R.count;for(let q=A,I=A+P;q<I;q+=3)g(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let E=new C,x=new C,T=new C,M=new C;function D(v){T.fromBufferAttribute(s,v),M.copy(T);let L=o[v];E.copy(L),E.sub(T.multiplyScalar(T.dot(L))).normalize(),x.crossVectors(M,L);let A=x.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,A)}for(let v=0,L=b.length;v<L;++v){let R=b[v],A=R.start,P=R.count;for(let q=A,I=A+P;q<I;q+=3)D(t.getX(q+0)),D(t.getX(q+1)),D(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Mi(u,h,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Tu=new C,eb=new C,ib=new Xt,Ei=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Tu.subVectors(n,e).cross(eb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Tu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ib.getNormalMatrix(t),s=this.coplanarPoint(Tu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},nb=0,yn=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=zr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=zu,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uc,this.stencilZFail=uc,this.stencilZPass=uc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ei().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fn=new C,Eu=new C,Jl=new C,Yl=new C,ks=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Eu.copy(t).add(e).multiplyScalar(.5),Jl.copy(e).sub(t).normalize(),Yl.copy(this.origin).sub(Eu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Jl),o=Yl.dot(this.direction),l=-Yl.dot(Jl),c=Yl.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Eu).addScaledVector(Jl,u),f}intersectSphere(t,e){if(t.radius<0)return null;Fn.subVectors(t.center,this.origin);let n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,y=e.y-a.y,m=e.z-a.z,g=n.x-a.x,b=n.y-a.y,E=n.z-a.z,x=Math.abs(l),T=Math.abs(c),M=Math.abs(h),D,v,L,R,A,P,q,I,k,X,Y,it;if(x>=T&&x>=M?(L=l,P=d,k=p,it=g,l>=0?(D=c,v=h,R=u,A=f,q=y,I=m,X=b,Y=E):(D=h,v=c,R=f,A=u,q=m,I=y,X=E,Y=b)):T>=M?(L=c,P=u,k=y,it=b,c>=0?(D=h,v=l,R=f,A=d,q=m,I=p,X=E,Y=g):(D=l,v=h,R=d,A=f,q=p,I=m,X=g,Y=E)):(L=h,P=f,k=m,it=E,h>=0?(D=l,v=c,R=d,A=u,q=p,I=y,X=g,Y=b):(D=c,v=l,R=u,A=d,q=y,I=p,X=b,Y=g)),L===0)return null;let U=D/L,K=v/L,tt=1/L,Lt=R-U*P,mt=A-K*P,Zt=q-U*k,Yt=I-K*k,dt=X-U*it,G=Y-K*it,Q=dt*Yt-G*Zt,ot=Lt*G-mt*dt,Ht=Zt*mt-Yt*Lt;if(s){if(Q<0||ot<0||Ht<0)return null}else if((Q<0||ot<0||Ht<0)&&(Q>0||ot>0||Ht>0))return null;let Tt=Q+ot+Ht;if(Tt===0)return null;let Vt=tt*(Q*P+ot*k+Ht*it);return(Tt>0?Vt<0:Vt>0)?null:this.at(Vt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qn=class extends yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Bg=new pe,Ns=new ks,Ql=new Pn,Fg=new C,Xl=new C,jl=new C,zl=new C,Mu=new C,Wl=new C,Cg=new C,Zl=new C,_e=class extends Be{constructor(t=new ci,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Mu.fromBufferAttribute(d,t),a?Wl.addScaledVector(Mu,h):Wl.addScaledVector(Mu.sub(e),h))}e.add(Wl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ql.copy(n.boundingSphere),Ql.applyMatrix4(r),Ns.copy(t.ray).recast(t.near),!(Ql.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Ql,Fg)===null||Ns.origin.distanceToSquared(Fg)>(t.far-t.near)**2))&&(Bg.copy(r).invert(),Ns.copy(t.ray).applyMatrix4(Bg),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ns)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let m=u[p],g=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,T=E;x<T;x+=3){let M=o.getX(x),D=o.getX(x+1),v=o.getX(x+2);s=Kl(this,g,t,n,c,h,d,M,D,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let b=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=Kl(this,a,t,n,c,h,d,b,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let m=u[p],g=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,T=E;x<T;x+=3){let M=x,D=x+1,v=x+2;s=Kl(this,g,t,n,c,h,d,M,D,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let b=m,E=m+1,x=m+2;s=Kl(this,a,t,n,c,h,d,b,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function sb(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ms,o),l===null)return null;Zl.copy(o),Zl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Zl);return c<e.near||c>e.far?null:{distance:c,point:Zl.clone(),object:i}}function Kl(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xl),i.getVertexPosition(l,jl),i.getVertexPosition(c,zl);let h=sb(i,t,e,n,Xl,jl,zl,Cg);if(h){let d=new C;Cn.getBarycoord(Cg,Xl,jl,zl,d),s&&(h.uv=Cn.getInterpolatedAttribute(s,o,l,c,d,new lt)),r&&(h.uv1=Cn.getInterpolatedAttribute(r,o,l,c,d,new lt)),a&&(h.normal=Cn.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Cn.getNormal(Xl,jl,zl,u.normal),h.face=u,h.barycoord=d}return h}var lo=class extends si{constructor(t=null,e=1,n=1,s,r,a,o,l,c=qe,h=qe,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var co=class extends Mi{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Lr=new pe,Ng=new pe,tc=[],Og=new gn,rb=new pe,Qa=new _e,Xa=new Pn,ho=class extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new co(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rb)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Lr),Og.copy(t.boundingBox).applyMatrix4(Lr),this.boundingBox.union(Og)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Lr),Xa.copy(t.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(Xa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qa.geometry=this.geometry,Qa.material=this.material,Qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(n),t.ray.intersectsSphere(Xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Lr),Ng.multiplyMatrices(n,Lr),Qa.matrixWorld=Ng,Qa.raycast(t,tc);for(let a=0,o=tc.length;a<o;a++){let l=tc[a];l.instanceId=r,l.object=this,e.push(l)}tc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lo(new Float32Array(s*this.count),s,this.count,nh,Ci));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Os=new Pn,ab=new lt(.5,.5),ec=new C,Hr=class{constructor(t=new Ei,e=new Ei,n=new Ei,s=new Ei,r=new Ei,a=new Ei){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ji,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],y=r[9],m=r[10],g=r[11],b=r[12],E=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,g-p,T-b).normalize(),s[1].setComponents(c+a,f+h,g+p,T+b).normalize(),s[2].setComponents(c+o,f+d,g+y,T+E).normalize(),s[3].setComponents(c-o,f-d,g-y,T-E).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,g-m,T-x).normalize();else if(s[4].setComponents(c-l,f-u,g-m,T-x).normalize(),e===ji)s[5].setComponents(c+l,f+u,g+m,T+x).normalize();else if(e===Nr)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);let e=ab.distanceTo(t.center);return Os.radius=.7071067811865476+e,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ec.x=s.normal.x>0?t.max.x:t.min.x,ec.y=s.normal.y>0?t.max.y:t.min.y,ec.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ec)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ur=class extends yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Mc=new C,Lc=new C,Pg=new pe,ja=new ks,ic=new Pn,Lu=new C,qg=new C,wc=class extends Be{constructor(t=new ci,e=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Mc.fromBufferAttribute(e,s-1),Lc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Mc.distanceTo(Lc);t.setAttribute("lineDistance",new Ie(n,1))}else kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(s),ic.radius+=r,t.ray.intersectsSphere(ic)===!1)return;Pg.copy(s).invert(),ja.copy(t.ray).applyMatrix4(Pg);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=c){let g=h.getX(y),b=h.getX(y+1),E=nc(this,t,ja,l,g,b,y);E&&e.push(E)}if(this.isLineLoop){let y=h.getX(p-1),m=h.getX(f),g=nc(this,t,ja,l,y,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=c){let g=nc(this,t,ja,l,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=nc(this,t,ja,l,p-1,f,p-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function nc(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Mc.fromBufferAttribute(o,s),Lc.fromBufferAttribute(o,r),e.distanceSqToSegment(Mc,Lc,Lu,qg)>n)return;Lu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Lu);if(!(c<t.near||c>t.far))return{distance:c,point:qg.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var kg=new C,Hg=new C,uo=class extends wc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)kg.fromBufferAttribute(e,s),Hg.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kg.distanceTo(Hg);t.setAttribute("lineDistance",new Ie(n,1))}else kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fo=class extends si{constructor(t=[],e=gs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$r=class extends si{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends si{constructor(t,e,n=Zi,s,r,a,o=qe,l=qe,c,h=pn,d=1){if(h!==pn&&h!==_s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Dc=class extends ls{constructor(t,e=Zi,n=gs,s,r,a=qe,o=qe,l,c=pn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},po=class extends si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cs=class i extends ci{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2));function p(y,m,g,b,E,x,T,M,D,v,L){let R=x/D,A=T/v,P=x/2,q=T/2,I=M/2,k=D+1,X=v+1,Y=0,it=0,U=new C;for(let K=0;K<X;K++){let tt=K*A-q;for(let Lt=0;Lt<k;Lt++){let mt=Lt*R-P;U[y]=mt*b,U[m]=tt*E,U[g]=I,c.push(U.x,U.y,U.z),U[y]=0,U[m]=0,U[g]=M>0?1:-1,h.push(U.x,U.y,U.z),d.push(Lt/D),d.push(1-K/v),Y+=1}}for(let K=0;K<v;K++)for(let tt=0;tt<D;tt++){let Lt=u+tt+k*K,mt=u+tt+k*(K+1),Zt=u+(tt+1)+k*(K+1),Yt=u+(tt+1)+k*K;l.push(Lt,mt,Yt),l.push(mt,Zt,Yt),it+=6}o.addGroup(f,it,L),f+=it,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var sc=new C,rc=new C,wu=new C,ac=new Cn,mo=class extends ci{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Ir*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:y,b:m,c:g}=ac;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ac.getNormal(wu),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let E=(b+1)%3,x=d[b],T=d[E],M=ac[h[b]],D=ac[h[E]],v=`${x}_${T}`,L=`${T}_${x}`;L in u&&u[L]?(wu.dot(u[L].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(D.x,D.y,D.z)),u[L]=null):v in u||(u[v]={index0:c[b],index1:c[E],normal:wu.clone()})}}for(let p in u)if(u[p]){let{index0:y,index1:m}=u[p];sc.fromBufferAttribute(o,y),rc.fromBufferAttribute(o,m),f.push(sc.x,sc.y,sc.z),f.push(rc.x,rc.y,rc.z)}this.setAttribute("position",new Ie(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},wi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new lt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new pe;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Wt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Vr=class extends wi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Rc=class extends Vr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mf(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ug=new C,$g=new C,Du=new mf,Ru=new mf,Au=new mf,Ac=class extends wi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:($g.subVectors(s[0],s[1]).add(s[0]),c=$g);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ug.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ug),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),Du.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,y,m),Ru.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,y,m),Au.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(Du.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ru.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Au.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Du.calc(l),Ru.calc(l),Au.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vg(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ob(i,t){let e=1-i;return e*e*t}function lb(i,t){return 2*(1-i)*i*t}function cb(i,t){return i*i*t}function Za(i,t,e,n){return ob(i,t)+lb(i,e)+cb(i,n)}function hb(i,t){let e=1-i;return e*e*e*t}function db(i,t){let e=1-i;return 3*e*e*i*t}function ub(i,t){return 3*(1-i)*i*i*t}function fb(i,t){return i*i*i*t}function Ka(i,t,e,n,s){return hb(i,t)+db(i,e)+ub(i,n)+fb(i,s)}var go=class extends wi{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ka(t,s.x,r.x,a.x,o.x),Ka(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ic=class extends wi{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ka(t,s.x,r.x,a.x,o.x),Ka(t,s.y,r.y,a.y,o.y),Ka(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yo=class extends wi{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bc=class extends wi{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends wi{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Za(t,s.x,r.x,a.x),Za(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fc=class extends wi{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Za(t,s.x,r.x,a.x),Za(t,s.y,r.y,a.y),Za(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Vg(o,l.x,c.x,h.x,d.x),Vg(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},Pu=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:Ac,CubicBezierCurve:go,CubicBezierCurve3:Ic,EllipseCurve:Vr,LineCurve:yo,LineCurve3:Bc,QuadraticBezierCurve:_o,QuadraticBezierCurve3:Fc,SplineCurve:xo}),Cc=class extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Pu[s.type]().fromJSON(s))}return this}},kn=class extends Cc{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new yo(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new _o(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new go(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Vr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Hs=class extends kn{constructor(t){super(t),this.uuid=Ys(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new kn().fromJSON(s))}return this}};function pb(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=q0(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=xb(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return vo(r,a,e,o,l,c,0),a}function q0(i,t,e,n,s){let r;if(s===Ab(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Gg(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Gg(a/n|0,i[a],i[a+1],r);return r&&Gr(r,r.next)&&(So(r),r=r.next),r}function Us(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Gr(e,e.next)||Me(e.prev,e,e.next)===0)){if(So(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Eb(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?gb(i,n,s,r):mb(i)){t.push(l.i,i.i,c.i),So(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=yb(Us(i),t),vo(i,t,e,n,s,r,2)):a===2&&_b(i,t,e,n,s,r):vo(Us(i),t,e,n,s,r,1);break}}}function mb(i){let t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&za(s,o,r,l,a,c,p.x,p.y)&&Me(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function gb(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Me(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),y=Math.max(o,l,c),m=Math.max(h,d,u),g=qu(f,p,t,e,n),b=qu(y,m,t,e,n),E=i.prevZ,x=i.nextZ;for(;E&&E.z>=g&&x&&x.z<=b;){if(E.x>=f&&E.x<=y&&E.y>=p&&E.y<=m&&E!==s&&E!==a&&za(o,h,l,d,c,u,E.x,E.y)&&Me(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=y&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&za(o,h,l,d,c,u,x.x,x.y)&&Me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=y&&E.y>=p&&E.y<=m&&E!==s&&E!==a&&za(o,h,l,d,c,u,E.x,E.y)&&Me(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=y&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&za(o,h,l,d,c,u,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function yb(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Gr(n,s)&&H0(n,e,e.next,s)&&bo(n,s)&&bo(s,n)&&(t.push(n.i,e.i,s.i),So(e),So(e.next),e=i=s),e=e.next}while(e!==i);return Us(e)}function _b(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wb(a,o)){let l=U0(a,o);a=Us(a,a.next),l=Us(l,l.next),vo(a,t,e,n,s,r,0),vo(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xb(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=q0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Lb(c))}s.sort(vb);for(let r=0;r<s.length;r++)e=bb(s[r],e);return e}function vb(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function bb(i,t){let e=Sb(i,t);if(!e)return t;let n=U0(e,i);return Us(n,n.next),Us(e,e.next)}function Sb(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Gr(i,e))return e;do{if(Gr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&k0(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);bo(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Tb(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Tb(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function Eb(i,t,e,n){let s=i;do s.z===0&&(s.z=qu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mb(s)}function Mb(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function qu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lb(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function k0(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function za(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&k0(i,t,e,n,s,r,a,o)}function wb(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Db(i,t)&&(bo(i,t)&&bo(t,i)&&Rb(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||Gr(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Gr(i,t){return i.x===t.x&&i.y===t.y}function H0(i,t,e,n){let s=lc(Me(i,t,e)),r=lc(Me(i,t,n)),a=lc(Me(e,n,i)),o=lc(Me(e,n,t));return!!(s!==r&&a!==o||s===0&&oc(i,e,t)||r===0&&oc(i,n,t)||a===0&&oc(e,i,n)||o===0&&oc(e,t,n))}function oc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function lc(i){return i>0?1:i<0?-1:0}function Db(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&H0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function bo(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function Rb(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function U0(i,t){let e=ku(i.i,i.x,i.y),n=ku(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gg(i,t,e,n){let s=ku(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function So(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ku(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ab(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Hu=class{static triangulate(t,e,n=2){return pb(t,e,n)}},fn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Jg(t),Yg(n,t);let a=t.length;e.forEach(Jg);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Yg(n,e[l]);let o=Hu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Jg(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Yg(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var To=class i extends ci{constructor(t=new Hs([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Ib,E,x=!1,T,M,D,v;if(g){E=g.getSpacedPoints(h),x=!0,u=!1;let nt=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,nt),M=new C,D=new C,v=new C}u||(m=0,f=0,p=0,y=0);let L=o.extractPoints(c),R=L.shape,A=L.holes;if(!fn.isClockWise(R)){R=R.reverse();for(let nt=0,at=A.length;nt<at;nt++){let ct=A[nt];fn.isClockWise(ct)&&(A[nt]=ct.reverse())}}function q(nt){let ct=10000000000000001e-36,ht=nt[0];for(let pt=1;pt<=nt.length;pt++){let Ut=pt%nt.length,qt=nt[Ut],Jt=qt.x-ht.x,jt=qt.y-ht.y,B=Jt*Jt+jt*jt,oe=Math.max(Math.abs(qt.x),Math.abs(qt.y),Math.abs(ht.x),Math.abs(ht.y)),ie=ct*oe*oe;if(B<=ie){nt.splice(Ut,1),pt--;continue}ht=qt}}q(R),A.forEach(q);let I=A.length,k=R;for(let nt=0;nt<I;nt++){let at=A[nt];R=R.concat(at)}function X(nt,at,ct){return at||Gt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(at,ct)}let Y=R.length;function it(nt,at,ct){let ht,pt,Ut,qt=nt.x-at.x,Jt=nt.y-at.y,jt=ct.x-nt.x,B=ct.y-nt.y,oe=qt*qt+Jt*Jt,ie=qt*B-Jt*jt;if(Math.abs(ie)>Number.EPSILON){let w=Math.sqrt(oe),_=Math.sqrt(jt*jt+B*B),H=at.x-Jt/w,J=at.y+qt/w,W=ct.x-B/_,ut=ct.y+jt/_,ft=((W-H)*B-(ut-J)*jt)/(qt*B-Jt*jt);ht=H+qt*ft-nt.x,pt=J+Jt*ft-nt.y;let Z=ht*ht+pt*pt;if(Z<=2)return new lt(ht,pt);Ut=Math.sqrt(Z/2)}else{let w=!1;qt>Number.EPSILON?jt>Number.EPSILON&&(w=!0):qt<-Number.EPSILON?jt<-Number.EPSILON&&(w=!0):Math.sign(Jt)===Math.sign(B)&&(w=!0),w?(ht=-Jt,pt=qt,Ut=Math.sqrt(oe)):(ht=qt,pt=Jt,Ut=Math.sqrt(oe/2))}return new lt(ht/Ut,pt/Ut)}let U=[];for(let nt=0,at=k.length,ct=at-1,ht=nt+1;nt<at;nt++,ct++,ht++)ct===at&&(ct=0),ht===at&&(ht=0),U[nt]=it(k[nt],k[ct],k[ht]);let K=[],tt,Lt=U.concat();for(let nt=0,at=I;nt<at;nt++){let ct=A[nt];tt=[];for(let ht=0,pt=ct.length,Ut=pt-1,qt=ht+1;ht<pt;ht++,Ut++,qt++)Ut===pt&&(Ut=0),qt===pt&&(qt=0),tt[ht]=it(ct[ht],ct[Ut],ct[qt]);K.push(tt),Lt=Lt.concat(tt)}let mt;if(m===0)mt=fn.triangulateShape(k,A);else{let nt=[],at=[];for(let ct=0;ct<m;ct++){let ht=ct/m,pt=f*Math.cos(ht*Math.PI/2),Ut=p*Math.sin(ht*Math.PI/2)+y;for(let qt=0,Jt=k.length;qt<Jt;qt++){let jt=X(k[qt],U[qt],Ut);ot(jt.x,jt.y,-pt),ht===0&&nt.push(jt)}for(let qt=0,Jt=I;qt<Jt;qt++){let jt=A[qt];tt=K[qt];let B=[];for(let oe=0,ie=jt.length;oe<ie;oe++){let w=X(jt[oe],tt[oe],Ut);ot(w.x,w.y,-pt),ht===0&&B.push(w)}ht===0&&at.push(B)}}mt=fn.triangulateShape(nt,at)}let Zt=mt.length,Yt=p+y;for(let nt=0;nt<Y;nt++){let at=u?X(R[nt],Lt[nt],Yt):R[nt];x?(D.copy(T.normals[0]).multiplyScalar(at.x),M.copy(T.binormals[0]).multiplyScalar(at.y),v.copy(E[0]).add(D).add(M),ot(v.x,v.y,v.z)):ot(at.x,at.y,0)}for(let nt=1;nt<=h;nt++)for(let at=0;at<Y;at++){let ct=u?X(R[at],Lt[at],Yt):R[at];x?(D.copy(T.normals[nt]).multiplyScalar(ct.x),M.copy(T.binormals[nt]).multiplyScalar(ct.y),v.copy(E[nt]).add(D).add(M),ot(v.x,v.y,v.z)):ot(ct.x,ct.y,d/h*nt)}for(let nt=m-1;nt>=0;nt--){let at=nt/m,ct=f*Math.cos(at*Math.PI/2),ht=p*Math.sin(at*Math.PI/2)+y;for(let pt=0,Ut=k.length;pt<Ut;pt++){let qt=X(k[pt],U[pt],ht);ot(qt.x,qt.y,d+ct)}for(let pt=0,Ut=A.length;pt<Ut;pt++){let qt=A[pt];tt=K[pt];for(let Jt=0,jt=qt.length;Jt<jt;Jt++){let B=X(qt[Jt],tt[Jt],ht);x?ot(B.x,B.y+E[h-1].y,E[h-1].x+ct):ot(B.x,B.y,d+ct)}}}dt(),G();function dt(){let nt=s.length/3;if(u){let at=0,ct=Y*at;for(let ht=0;ht<Zt;ht++){let pt=mt[ht];Ht(pt[2]+ct,pt[1]+ct,pt[0]+ct)}at=h+m*2,ct=Y*at;for(let ht=0;ht<Zt;ht++){let pt=mt[ht];Ht(pt[0]+ct,pt[1]+ct,pt[2]+ct)}}else{for(let at=0;at<Zt;at++){let ct=mt[at];Ht(ct[2],ct[1],ct[0])}for(let at=0;at<Zt;at++){let ct=mt[at];Ht(ct[0]+Y*h,ct[1]+Y*h,ct[2]+Y*h)}}n.addGroup(nt,s.length/3-nt,0)}function G(){let nt=s.length/3,at=0;Q(k,at),at+=k.length;for(let ct=0,ht=A.length;ct<ht;ct++){let pt=A[ct];Q(pt,at),at+=pt.length}n.addGroup(nt,s.length/3-nt,1)}function Q(nt,at){let ct=nt.length;for(;--ct>=0;){let ht=ct,pt=ct-1;pt<0&&(pt=nt.length-1);for(let Ut=0,qt=h+m*2;Ut<qt;Ut++){let Jt=Y*Ut,jt=Y*(Ut+1),B=at+ht+Jt,oe=at+pt+Jt,ie=at+pt+jt,w=at+ht+jt;Tt(B,oe,ie,w)}}}function ot(nt,at,ct){l.push(nt),l.push(at),l.push(ct)}function Ht(nt,at,ct){Vt(nt),Vt(at),Vt(ct);let ht=s.length/3,pt=b.generateTopUV(n,s,ht-3,ht-2,ht-1);ae(pt[0]),ae(pt[1]),ae(pt[2])}function Tt(nt,at,ct,ht){Vt(nt),Vt(at),Vt(ht),Vt(at),Vt(ct),Vt(ht);let pt=s.length/3,Ut=b.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);ae(Ut[0]),ae(Ut[1]),ae(Ut[3]),ae(Ut[1]),ae(Ut[2]),ae(Ut[3])}function Vt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function ae(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bb(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Pu[s.type]().fromJSON(s)),new i(n,t.options)}},Ib={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],y=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-d),new lt(u,1-p),new lt(y,1-g)]:[new lt(o,1-l),new lt(h,1-d),new lt(f,1-p),new lt(m,1-g)]}};function Bb(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $s=class i extends ci{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let b=g*u-a;for(let E=0;E<c;E++){let x=E*d-r;p.push(x,-b,0),y.push(0,0,1),m.push(E/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){let E=b+c*g,x=b+c*(g+1),T=b+1+c*(g+1),M=b+1+c*g;f.push(E,x,M),f.push(x,T,M)}this.setIndex(f),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(y,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Eo=class i extends ci{constructor(t=new Hs([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;fn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let b=p[m];fn.isClockWise(b)===!0&&(p[m]=b.reverse())}let y=fn.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let b=p[m];f=f.concat(b)}for(let m=0,g=f.length;m<g;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,g=y.length;m<g;m++){let b=y[m],E=b[0]+d,x=b[1]+d,T=b[2]+d;n.push(E,x,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Fb(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Fb(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function Qs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Qg(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Qg(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function We(i){let t={};for(let e=0;e<i.length;e++){let n=Qs(i[e]);for(let s in n)t[s]=n[s]}return t}function Qg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cb(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var $0={clone:Qs,merge:We},Nb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ob=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Di=class extends yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nb,this.fragmentShader=Ob,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=Cb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Nc=class extends Di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vs=class extends yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Mo=class extends Vs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Lo=class extends yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=zc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Oc=class extends yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pc=class extends yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Iu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break n;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break i}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qc=class extends hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cu,endingEnd:Cu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nu:r=t,o=2*e-n;break;case Ou:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nu:a=t,l=2*n-e;break;case Ou:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),y=p*p,m=y*p,g=-u*m+2*u*y-u*p,b=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*p+1,E=(-1-f)*m+(1.5+f)*y+.5*p,x=f*m-f*y;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+b*a[c+T]+E*a[l+T]+x*a[d+T];return r}},kc=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Hc=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Uc=class extends hs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),y=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let y=a[c+p],m=a[l+p],g=f*u+p*2,b=d[g],E=d[g+1],x=t*u+p*2,T=h[x],M=h[x+1],D=qb(n,e,b,T,s);r[p]=V0(D,y,E,M,m)}return r}};function V0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Pb(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function qb(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=V0(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Pb(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ri=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wr(e,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wr(t.times,Array),values:wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Iu(t.settings)&&(n.settings={inTangents:wr(t.settings.inTangents,Array),outTangents:wr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Uc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case bc:e=this.InterpolantFactoryMethodLinear;break;case dc:e=this.InterpolantFactoryMethodSmooth;break;case Fu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return dc;case this.InterpolantFactoryMethodBezier:return Fu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Iu(this.settings)&&(Xg(this.settings.inTangents,t),Xg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Mv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dc,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let y=e[d+p];if(y!==e[u+p]||y!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Iu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xg(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=bc;var ds=class extends Ri{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=to;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};$c.prototype.ValueTypeName="color";var Vc=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};Vc.prototype.ValueTypeName="number";var Gc=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Li.slerpFlat(r,0,a,c-o,a,c,l);return r}},wo=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Gc(this.times,this.values,this.getValueSize(),t)}};wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Ri{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=to;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};Jc.prototype.ValueTypeName="vector";var Yc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},G0=new Yc,Qc=class{constructor(t){this.manager=t!==void 0?t:G0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Do=class extends Jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Bu=new pe,jg=new C,zg=new C,Ro=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;jg.setFromMatrixPosition(t.matrixWorld),e.position.copy(jg),zg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zg),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Bu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Nr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Bu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},cc=new C,hc=new Li,dn=new C,Ao=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(cc,hc,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,hc,dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(cc,hc,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,hc,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new C,Wg=new lt,Zg=new lt,$e=class extends Ao{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(os.x,os.y).multiplyScalar(-t/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-t/os.z)}getViewSize(t,e){return this.getViewBounds(t,Wg,Zg),e.subVectors(Zg,Wg)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Uu=class extends Ro{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}},Io=class extends Jr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Yr=class extends Ao{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$u=class extends Ro{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new $u}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Dr=-90,Rr=1,Xc=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(Dr,Rr,t,e);s.layers=this.layers,this.add(s);let r=new $e(Dr,Rr,t,e);r.layers=this.layers,this.add(r);let a=new $e(Dr,Rr,t,e);a.layers=this.layers,this.add(a);let o=new $e(Dr,Rr,t,e);o.layers=this.layers,this.add(o);let l=new $e(Dr,Rr,t,e);l.layers=this.layers,this.add(l);let c=new $e(Dr,Rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ji)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},jc=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var yf="\\[\\]\\.:\\/",kb=new RegExp("["+yf+"]","g"),_f="[^"+yf+"]",Hb="[^"+yf.replace("\\.","")+"]",Ub=/((?:WC+[\/:])*)/.source.replace("WC",_f),$b=/(WCOD+)?/.source.replace("WCOD",Hb),Vb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),Gb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),Jb=new RegExp("^"+Ub+$b+Vb+Gb+"$"),Yb=["material","materials","bones","map"],Vu=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kb,"")}static parseTrackName(t){let e=Jb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Vu;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uw=new Float32Array(1);var Xr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Gu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Bo=class extends zi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function xf(i,t,e,n){let s=Qb(n);switch(e){case cf:return i*t;case nh:return i*t/s.components*s.byteLength;case sh:return i*t/s.components*s.byteLength;case xs:return i*t*2/s.components*s.byteLength;case rh:return i*t*2/s.components*s.byteLength;case hf:return i*t*3/s.components*s.byteLength;case Ni:return i*t*4/s.components*s.byteLength;case ah:return i*t*4/s.components*s.byteLength;case Po:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ko:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lh:case hh:return Math.max(i,16)*Math.max(t,8)/4;case oh:case ch:return Math.max(i,8)*Math.max(t,8)/2;case dh:case uh:case ph:case mh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fh:case Uo:case gh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _h:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Th:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ih:case Bh:case Fh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ch:case Nh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $o:case Oh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qb(i){switch(i){case di:case rf:return{byteLength:1,components:1};case Wr:case af:case Ki:return{byteLength:2,components:1};case eh:case ih:return{byteLength:2,components:4};case Zi:case th:case Ci:return{byteLength:4,components:1};case of:case lf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function uy(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xb(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],y=d[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_S=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MS="gl_FragColor = linearToOutputTexel( gl_FragColor );",LS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,US=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ZS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_T=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ST=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ET=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,MT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$T=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:jb,alphahash_pars_fragment:zb,alphamap_fragment:Wb,alphamap_pars_fragment:Zb,alphatest_fragment:Kb,alphatest_pars_fragment:tS,aomap_fragment:eS,aomap_pars_fragment:iS,batching_pars_vertex:nS,batching_vertex:sS,begin_vertex:rS,beginnormal_vertex:aS,bsdfs:oS,iridescence_fragment:lS,bumpmap_pars_fragment:cS,clipping_planes_fragment:hS,clipping_planes_pars_fragment:dS,clipping_planes_pars_vertex:uS,clipping_planes_vertex:fS,color_fragment:pS,color_pars_fragment:mS,color_pars_vertex:gS,color_vertex:yS,common:_S,cube_uv_reflection_fragment:xS,defaultnormal_vertex:vS,displacementmap_pars_vertex:bS,displacementmap_vertex:SS,emissivemap_fragment:TS,emissivemap_pars_fragment:ES,colorspace_fragment:MS,colorspace_pars_fragment:LS,envmap_fragment:wS,envmap_common_pars_fragment:DS,envmap_pars_fragment:RS,envmap_pars_vertex:AS,envmap_physical_pars_fragment:US,envmap_vertex:IS,fog_vertex:BS,fog_pars_vertex:FS,fog_fragment:CS,fog_pars_fragment:NS,gradientmap_pars_fragment:OS,lightmap_pars_fragment:PS,lights_lambert_fragment:qS,lights_lambert_pars_fragment:kS,lights_pars_begin:HS,lights_toon_fragment:$S,lights_toon_pars_fragment:VS,lights_phong_fragment:GS,lights_phong_pars_fragment:JS,lights_physical_fragment:YS,lights_physical_pars_fragment:QS,lights_fragment_begin:XS,lights_fragment_maps:jS,lights_fragment_end:zS,lightprobes_pars_fragment:WS,logdepthbuf_fragment:ZS,logdepthbuf_pars_fragment:KS,logdepthbuf_pars_vertex:tT,logdepthbuf_vertex:eT,map_fragment:iT,map_pars_fragment:nT,map_particle_fragment:sT,map_particle_pars_fragment:rT,metalnessmap_fragment:aT,metalnessmap_pars_fragment:oT,morphinstance_vertex:lT,morphcolor_vertex:cT,morphnormal_vertex:hT,morphtarget_pars_vertex:dT,morphtarget_vertex:uT,normal_fragment_begin:fT,normal_fragment_maps:pT,normal_pars_fragment:mT,normal_pars_vertex:gT,normal_vertex:yT,normalmap_pars_fragment:_T,clearcoat_normal_fragment_begin:xT,clearcoat_normal_fragment_maps:vT,clearcoat_pars_fragment:bT,iridescence_pars_fragment:ST,opaque_fragment:TT,packing:ET,premultiplied_alpha_fragment:MT,project_vertex:LT,dithering_fragment:wT,dithering_pars_fragment:DT,roughnessmap_fragment:RT,roughnessmap_pars_fragment:AT,shadowmap_pars_fragment:IT,shadowmap_pars_vertex:BT,shadowmap_vertex:FT,shadowmask_pars_fragment:CT,skinbase_vertex:NT,skinning_pars_vertex:OT,skinning_vertex:PT,skinnormal_vertex:qT,specularmap_fragment:kT,specularmap_pars_fragment:HT,tonemapping_fragment:UT,tonemapping_pars_fragment:$T,transmission_fragment:VT,transmission_pars_fragment:GT,uv_pars_fragment:JT,uv_pars_vertex:YT,uv_vertex:QT,worldpos_vertex:XT,background_vert:jT,background_frag:zT,backgroundCube_vert:WT,backgroundCube_frag:ZT,cube_vert:KT,cube_frag:tE,depth_vert:eE,depth_frag:iE,distance_vert:nE,distance_frag:sE,equirect_vert:rE,equirect_frag:aE,linedashed_vert:oE,linedashed_frag:lE,meshbasic_vert:cE,meshbasic_frag:hE,meshlambert_vert:dE,meshlambert_frag:uE,meshmatcap_vert:fE,meshmatcap_frag:pE,meshnormal_vert:mE,meshnormal_frag:gE,meshphong_vert:yE,meshphong_frag:_E,meshphysical_vert:xE,meshphysical_frag:vE,meshtoon_vert:bE,meshtoon_frag:SE,points_vert:TE,points_frag:EE,shadow_vert:ME,shadow_frag:LE,sprite_vert:wE,sprite_frag:DE},bt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},vn={basic:{uniforms:We([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:We([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:We([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:We([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:We([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:We([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:We([bt.points,bt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:We([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:We([bt.common,bt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:We([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:We([bt.sprite,bt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:We([bt.common,bt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:We([bt.lights,bt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};vn.physical={uniforms:We([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var kh={r:0,b:0,g:0},RE=new pe,fy=new Xt;fy.set(-1,0,0,0,1,0,0,0,1);function AE(i,t,e,n,s,r){let a=new Qt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let x=b.backgroundBlurriness>0;E=t.get(E,x)}return E}function p(b){let E=!1,x=f(b);x===null?m(a,o):x&&x.isColor&&(m(x,1),E=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,E){let x=f(E);x&&(x.isCubeTexture||x.mapping===No)?(c===void 0&&(c=new _e(new cs(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Qs(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,M,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(RE.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fy),c.material.toneMapped=se.getTransfer(x.colorSpace)!==he,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new _e(new $s(2,2),new Di({name:"BackgroundMaterial",uniforms:Qs(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=se.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,E){b.getRGB(kh,gf(i)),e.buffers.color.setClear(kh.r,kh.g,kh.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:p,addToRenderList:y,dispose:g}}function IE(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(A,P,q,I,k){let X=!1,Y=d(A,I,q,P);r!==Y&&(r=Y,c(r.object)),X=f(A,I,q,k),X&&p(A,I,q,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(A,P,q,I),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function d(A,P,q,I){let k=I.wireframe===!0,X=n[P.id];X===void 0&&(X={},n[P.id]=X);let Y=A.isInstancedMesh===!0?A.id:0,it=X[Y];it===void 0&&(it={},X[Y]=it);let U=it[q.id];U===void 0&&(U={},it[q.id]=U);let K=U[k];return K===void 0&&(K=u(l()),U[k]=K),K}function u(A){let P=[],q=[],I=[];for(let k=0;k<e;k++)P[k]=0,q[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:I,object:A,attributes:{},index:null}}function f(A,P,q,I){let k=r.attributes,X=P.attributes,Y=0,it=q.getAttributes();for(let U in it)if(it[U].location>=0){let tt=k[U],Lt=X[U];if(Lt===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(Lt=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(Lt=A.instanceColor)),tt===void 0||tt.attribute!==Lt||Lt&&tt.data!==Lt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function p(A,P,q,I){let k={},X=P.attributes,Y=0,it=q.getAttributes();for(let U in it)if(it[U].location>=0){let tt=X[U];tt===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(tt=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(tt=A.instanceColor));let Lt={};Lt.attribute=tt,tt&&tt.data&&(Lt.data=tt.data),k[U]=Lt,Y++}r.attributes=k,r.attributesNum=Y,r.index=I}function y(){let A=r.newAttributes;for(let P=0,q=A.length;P<q;P++)A[P]=0}function m(A){g(A,0)}function g(A,P){let q=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;q[A]=1,I[A]===0&&(i.enableVertexAttribArray(A),I[A]=1),k[A]!==P&&(i.vertexAttribDivisor(A,P),k[A]=P)}function b(){let A=r.newAttributes,P=r.enabledAttributes;for(let q=0,I=P.length;q<I;q++)P[q]!==A[q]&&(i.disableVertexAttribArray(q),P[q]=0)}function E(A,P,q,I,k,X,Y){Y===!0?i.vertexAttribIPointer(A,P,q,k,X):i.vertexAttribPointer(A,P,q,I,k,X)}function x(A,P,q,I){y();let k=I.attributes,X=q.getAttributes(),Y=P.defaultAttributeValues;for(let it in X){let U=X[it];if(U.location>=0){let K=k[it];if(K===void 0&&(it==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),it==="instanceColor"&&A.instanceColor&&(K=A.instanceColor)),K!==void 0){let tt=K.normalized,Lt=K.itemSize,mt=t.get(K);if(mt===void 0)continue;let Zt=mt.buffer,Yt=mt.type,dt=mt.bytesPerElement,G=Yt===i.INT||Yt===i.UNSIGNED_INT||K.gpuType===th;if(K.isInterleavedBufferAttribute){let Q=K.data,ot=Q.stride,Ht=K.offset;if(Q.isInstancedInterleavedBuffer){for(let Tt=0;Tt<U.locationSize;Tt++)g(U.location+Tt,Q.meshPerAttribute);A.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Tt=0;Tt<U.locationSize;Tt++)m(U.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Tt=0;Tt<U.locationSize;Tt++)E(U.location+Tt,Lt/U.locationSize,Yt,tt,ot*dt,(Ht+Lt/U.locationSize*Tt)*dt,G)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<U.locationSize;Q++)g(U.location+Q,K.meshPerAttribute);A.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<U.locationSize;Q++)m(U.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Q=0;Q<U.locationSize;Q++)E(U.location+Q,Lt/U.locationSize,Yt,tt,Lt*dt,Lt/U.locationSize*Q*dt,G)}}else if(Y!==void 0){let tt=Y[it];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(U.location,tt);break;case 3:i.vertexAttrib3fv(U.location,tt);break;case 4:i.vertexAttrib4fv(U.location,tt);break;default:i.vertexAttrib1fv(U.location,tt)}}}}b()}function T(){L();for(let A in n){let P=n[A];for(let q in P){let I=P[q];for(let k in I){let X=I[k];for(let Y in X)h(X[Y].object),delete X[Y];delete I[k]}}delete n[A]}}function M(A){if(n[A.id]===void 0)return;let P=n[A.id];for(let q in P){let I=P[q];for(let k in I){let X=I[k];for(let Y in X)h(X[Y].object),delete X[Y];delete I[k]}}delete n[A.id]}function D(A){for(let P in n){let q=n[P];for(let I in q){let k=q[I];if(k[A.id]===void 0)continue;let X=k[A.id];for(let Y in X)h(X[Y].object),delete X[Y];delete k[A.id]}}}function v(A){for(let P in n){let q=n[P],I=A.isInstancedMesh===!0?A.id:0,k=q[I];if(k!==void 0){for(let X in k){let Y=k[X];for(let it in Y)h(Y[it].object),delete Y[it];delete k[X]}delete q[I],Object.keys(q).length===0&&delete n[P]}}}function L(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function BE(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function FE(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Ni&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let v=D===Ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==di&&D!==Ci&&!v&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:x,maxSamples:T,samples:M}}function CE(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ei,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,E=b*4,x=g.clippingState||null;l.value=x,x=h(p,u,E,f);for(let T=0;T!==E;++T)x[T]=e[T];g.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=f+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,x=f;E!==y;++E,x+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ta=4,NE=6,OE=20,PE=256,Go=new Yr,J0=new Qt,vf=null,bf=0,Sf=0,Tf=!1,qE=new C,Xs=new C,ia=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=qE}=r;vf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vf,bf,Sf),this._renderer.xr.enabled=Tf,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Ki,format:Ni,colorSpace:eo,depthBuffer:!1},s=Y0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kE(r)),this._blurMaterial=UE(r,t,e),this._ggxMaterial=HE(r,t,e)}return s}_compileMaterial(t){let e=new _e(new ci,t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,s,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(J0),d.toneMapping=Wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new cs,new qn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,g=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,g=!0):(m.color.copy(J0),g=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let T=this._cubeSize;Kr(s,x*T,E>2?T:0,T,T),d.setRenderTarget(s),g&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gs||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=X0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Go)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,y=this._sizeLods[n],m=3*y*(n>p-ta?n-p+ta:0),g=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Kr(r,m,g,3*y,2*y),s.setRenderTarget(r),s.render(o,Go),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Kr(t,m,g,3*y,2*y),s.setRenderTarget(t),s.render(o,Go)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ta?s-this._lodMax+ta:0),u=4*(this._cubeSize-h);Kr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Go)}};function kE(i){let t=[],e=[],n=i,s=i-ta+1+NE;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let g=0;g<d;g++){let b=g%3*2/3-1,E=g>2?0:-1,x=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];p.set(x,f*u*g);for(let T=0;T<u;T++){let M=h[T*2]*2-1,D=h[T*2+1]*2-1;g===0?Xs.set(1,D,M):g===1?Xs.set(-M,1,-D):g===2?Xs.set(-M,D,1):g===3?Xs.set(-1,D,-M):g===4?Xs.set(-M,-1,D):Xs.set(M,D,-1),Xs.toArray(y,(g*u+T)*f)}}let m=new ci;m.setAttribute("position",new Mi(p,f)),m.setAttribute("outputDirection",new Mi(y,f)),e.push(new _e(m,null)),n>ta&&n--}return{lodMeshes:e,sizeLods:t}}function Y0(i,t,e){let n=new li(i,t,e);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function HE(i,t,e){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function UE(i,t,e){return new Di({name:"SphericalGaussianBlur",defines:{SAMPLES:OE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Q0(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function X0(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Uh=class extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cs(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:_n});r.uniforms.tEquirect.value=e;let a=new _e(s,r),o=e.minFilter;return e.minFilter===ys&&(e.minFilter=Ve),new Xc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function $E(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wc||f===Zc)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let y=new Uh(p.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===Wc||f===Zc,y=f===gs||f===Js;if(p||y){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new ia(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return p&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new ia(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Wc?u.mapping=gs:f===Zc&&(u.mapping=Js),u}function l(u){let f=0,p=6;for(let y=0;y<p;y++)u[y]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function VE(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function GE(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,y=0;if(p===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let E=0,x=b.length;E<x;E+=3){let T=b[E+0],M=b[E+1],D=b[E+2];u.push(T,M,M,D,D,T)}}else{let b=p.array;y=p.version;for(let E=0,x=b.length/3-1;E<x;E+=3){let T=E+0,M=E+1,D=E+2;u.push(T,M,M,D,D,T)}}let m=new(p.count>=65535?oo:ao)(u,1);m.version=y;let g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function JE(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function YE(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function QE(i,t,e){let n=new WeakMap,s=new Te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let L=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),y===!0&&(E=3);let x=o.attributes.position.count*E,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let M=new Float32Array(x*T*4*d),D=new so(M,x,T,d);D.type=Ci,D.needsUpdate=!0;let v=E*4;for(let R=0;R<d;R++){let A=m[R],P=g[R],q=b[R],I=x*T*4*R;for(let k=0;k<A.count;k++){let X=k*v;f===!0&&(s.fromBufferAttribute(A,k),M[I+X+0]=s.x,M[I+X+1]=s.y,M[I+X+2]=s.z,M[I+X+3]=0),p===!0&&(s.fromBufferAttribute(P,k),M[I+X+4]=s.x,M[I+X+5]=s.y,M[I+X+6]=s.z,M[I+X+7]=0),y===!0&&(s.fromBufferAttribute(q,k),M[I+X+8]=s.x,M[I+X+9]=s.y,M[I+X+10]=s.z,M[I+X+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:D,size:new lt(x,T)},n.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function XE(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var jE={[Wu]:"LINEAR_TONE_MAPPING",[Zu]:"REINHARD_TONE_MAPPING",[Ku]:"CINEON_TONE_MAPPING",[Co]:"ACES_FILMIC_TONE_MAPPING",[ef]:"AGX_TONE_MAPPING",[nf]:"NEUTRAL_TONE_MAPPING",[tf]:"CUSTOM_TONE_MAPPING"};function zE(i,t,e,n,s,r){let a=new li(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ci;c.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let h=new Nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new _e(c,h),u=new Yr(-1,1,1,-1,0,1),f=null,p=null,y=!1,m,g=null,b=[],E=!1;this.setSize=function(x,T){a.setSize(x,T),o!==null&&o.setSize(x,T),l!==null&&l.setSize(x,T);for(let M=0;M<b.length;M++){let D=b[M];D.setSize&&D.setSize(x,T)}},this.setEffects=function(x){b=x,E=b.length>0&&b[0].isRenderPass===!0;let T=a.width,M=a.height;b.length>0&&o===null&&(o=new li(T,M,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),l=new li(T,M,{type:Ki,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<b.length;D++){let v=b[D];v.setSize&&v.setSize(T,M)}},this.begin=function(x,T){if(y||x.toneMapping===Wi&&b.length===0)return!1;if(g=T,T!==null){let M=T.width,D=T.height;(a.width!==M||a.height!==D)&&this.setSize(M,D)}return E===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Wi,!0},this.hasRenderPass=function(){return E},this.end=function(x,T){x.toneMapping=m,y=!0;let M=a,D=o;for(let v=0;v<b.length;v++){let L=b[v];L.enabled!==!1&&(L.render(x,D,M,T),L.needsSwap!==!1&&(M=D,D=D===o?l:o))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},se.getTransfer(f)===he&&(h.defines.SRGB_TRANSFER="");let v=jE[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(g),x.render(d,u),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var py=new si,Lf=new ls(1,1),my=new so,gy=new Ec,yy=new fo,j0=[],z0=[],W0=new Float32Array(16),Z0=new Float32Array(9),K0=new Float32Array(4);function na(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=j0[s];if(r===void 0&&(r=new Float32Array(s),j0[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Gh(i,t){let e=z0[t];e===void 0&&(e=new Int32Array(t),z0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function WE(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ZE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function KE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function t1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function e1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Fe(e,n))return;K0.set(n),i.uniformMatrix2fv(this.addr,!1,K0),Ce(e,n)}}function i1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Fe(e,n))return;Z0.set(n),i.uniformMatrix3fv(this.addr,!1,Z0),Ce(e,n)}}function n1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Fe(e,n))return;W0.set(n),i.uniformMatrix4fv(this.addr,!1,W0),Ce(e,n)}}function s1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function r1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function a1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function o1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function l1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function c1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function h1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function d1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function u1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lf.compareFunction=e.isReversedDepthBuffer()?qh:Ph,r=Lf):r=py,e.setTexture2D(t||r,s)}function f1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gy,s)}function p1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yy,s)}function m1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||my,s)}function g1(i){switch(i){case 5126:return WE;case 35664:return ZE;case 35665:return KE;case 35666:return t1;case 35674:return e1;case 35675:return i1;case 35676:return n1;case 5124:case 35670:return s1;case 35667:case 35671:return r1;case 35668:case 35672:return a1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return h1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}function y1(i,t){i.uniform1fv(this.addr,t)}function _1(i,t){let e=na(t,this.size,2);i.uniform2fv(this.addr,e)}function x1(i,t){let e=na(t,this.size,3);i.uniform3fv(this.addr,e)}function v1(i,t){let e=na(t,this.size,4);i.uniform4fv(this.addr,e)}function b1(i,t){let e=na(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function S1(i,t){let e=na(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function T1(i,t){let e=na(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function E1(i,t){i.uniform1iv(this.addr,t)}function M1(i,t){i.uniform2iv(this.addr,t)}function L1(i,t){i.uniform3iv(this.addr,t)}function w1(i,t){i.uniform4iv(this.addr,t)}function D1(i,t){i.uniform1uiv(this.addr,t)}function R1(i,t){i.uniform2uiv(this.addr,t)}function A1(i,t){i.uniform3uiv(this.addr,t)}function I1(i,t){i.uniform4uiv(this.addr,t)}function B1(i,t,e){let n=this.cache,s=t.length,r=Gh(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Lf:a=py;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function F1(i,t,e){let n=this.cache,s=t.length,r=Gh(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gy,r[a])}function C1(i,t,e){let n=this.cache,s=t.length,r=Gh(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yy,r[a])}function N1(i,t,e){let n=this.cache,s=t.length,r=Gh(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||my,r[a])}function O1(i){switch(i){case 5126:return y1;case 35664:return _1;case 35665:return x1;case 35666:return v1;case 35674:return b1;case 35675:return S1;case 35676:return T1;case 5124:case 35670:return E1;case 35667:case 35671:return M1;case 35668:case 35672:return L1;case 35669:case 35673:return w1;case 5125:return D1;case 36294:return R1;case 36295:return A1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return N1}}var wf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=g1(e.type)}},Df=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O1(e.type)}},Rf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ef=/(\w+)(\])?(\[|\.)?/g;function ty(i,t){i.seq.push(t),i.map[t.id]=t}function P1(i,t,e){let n=i.name,s=n.length;for(Ef.lastIndex=0;;){let r=Ef.exec(n),a=Ef.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ty(e,c===void 0?new wf(o,i,t):new Df(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Rf(o),ty(e,d)),e=d}}}var ea=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);P1(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ey(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var q1=37297,k1=0;function H1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var iy=new Xt;function U1(i){se._getMatrix(iy,se.workingColorSpace,i);let t=`mat3( ${iy.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case io:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ny(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+H1(i.getShaderSource(t),o)}else return r}function $1(i,t){let e=U1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var V1={[Wu]:"Linear",[Zu]:"Reinhard",[Ku]:"Cineon",[Co]:"ACESFilmic",[ef]:"AgX",[nf]:"Neutral",[tf]:"Custom"};function G1(i,t){let e=V1[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hh=new C;function J1(){se.getLuminanceCoefficients(Hh);let i=Hh.x.toFixed(4),t=Hh.y.toFixed(4),e=Hh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function Q1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Yo(i){return i!==""}function sy(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ry(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(i){return i.replace(j1,W1)}var z1=new Map;function W1(i,t){let e=ee[t];if(e===void 0){let n=z1.get(t);if(n!==void 0)e=ee[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Af(e)}var Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ay(i){return i.replace(Z1,K1)}function K1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oy(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var tM={[Fo]:"SHADOWMAP_TYPE_PCF",[jr]:"SHADOWMAP_TYPE_VSM"};function eM(i){return tM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var iM={[gs]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE_UV"};function nM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":iM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var sM={[Js]:"ENVMAP_MODE_REFRACTION"};function rM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aM={[zc]:"ENVMAP_BLENDING_MULTIPLY",[v0]:"ENVMAP_BLENDING_MIX",[b0]:"ENVMAP_BLENDING_ADD"};function oM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":aM[i.combine]||"ENVMAP_BLENDING_NONE"}function lM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cM(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=eM(e),c=nM(e),h=rM(e),d=oM(e),u=lM(e),f=Y1(e),p=Q1(r),y=s.createProgram(),m,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Yo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Yo).join(`
`),g.length>0&&(g+=`
`)):(m=[oy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),g=[oy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?ee.tonemapping_pars_fragment:"",e.toneMapping!==Wi?G1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,$1("linearToOutputTexel",e.outputColorSpace),J1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yo).join(`
`)),a=Af(a),a=sy(a,e),a=ry(a,e),o=Af(o),o=sy(o,e),o=ry(o,e),a=ay(a),o=ay(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=b+m+a,x=b+g+o,T=ey(s,s.VERTEX_SHADER,E),M=ey(s,s.FRAGMENT_SHADER,x);s.attachShader(y,T),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function D(A){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(y)||"",q=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(M)||"",k=P.trim(),X=q.trim(),Y=I.trim(),it=!0,U=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,T,M);else{let K=ny(s,T,"vertex"),tt=ny(s,M,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+K+`
`+tt)}else k!==""?kt("WebGLProgram: Program Info Log:",k):(X===""||Y==="")&&(U=!1);U&&(A.diagnostics={runnable:it,programLog:k,vertexShader:{log:X,prefix:m},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(T),s.deleteShader(M),v=new ea(s,y),L=X1(s,y)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,q1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=M,this}var hM=0,If=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bf(t),e.set(t,n)),n}},Bf=class{constructor(t){this.id=hM++,this.code=t,this.usedTimes=0}};function dM(i){return i===xs||i===Uo||i===$o}function uM(i,t,e,n,s,r){let a=new ro,o=new If,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,L,R,A,P,q){let I=A.fog,k=P.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,it=t.get(v.envMap||X,Y),U=it&&it.mapping===No?it.image.height:null,K=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&kt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let tt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Lt=tt!==void 0?tt.length:0,mt=0;k.morphAttributes.position!==void 0&&(mt=1),k.morphAttributes.normal!==void 0&&(mt=2),k.morphAttributes.color!==void 0&&(mt=3);let Zt,Yt,dt,G;if(K){let xe=vn[K];Zt=xe.vertexShader,Yt=xe.fragmentShader}else{Zt=v.vertexShader,Yt=v.fragmentShader;let xe=o.getVertexShaderStage(v),le=o.getFragmentShaderStage(v);o.update(v,xe,le),dt=xe.id,G=le.id}let Q=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),Ht=P.isInstancedMesh===!0,Tt=P.isBatchedMesh===!0,Vt=!!v.map,ae=!!v.matcap,nt=!!it,at=!!v.aoMap,ct=!!v.lightMap,ht=!!v.bumpMap&&v.wireframe===!1,pt=!!v.normalMap,Ut=!!v.displacementMap,qt=!!v.emissiveMap,Jt=!!v.metalnessMap,jt=!!v.roughnessMap,B=v.anisotropy>0,oe=v.clearcoat>0,ie=v.dispersion>0,w=v.retroreflectivity>0,_=v.iridescence>0,H=v.sheen>0,J=v.transmission>0,W=B&&!!v.anisotropyMap,ut=oe&&!!v.clearcoatMap,ft=oe&&!!v.clearcoatNormalMap,Z=oe&&!!v.clearcoatRoughnessMap,st=_&&!!v.iridescenceMap,gt=_&&!!v.iridescenceThicknessMap,Nt=H&&!!v.sheenColorMap,vt=H&&!!v.sheenRoughnessMap,yt=!!v.specularMap,Ot=!!v.specularColorMap,$t=!!v.specularIntensityMap,zt=J&&!!v.transmissionMap,O=J&&!!v.thicknessMap,_t=!!v.gradientMap,et=!!v.alphaMap,xt=v.alphaTest>0,Mt=!!v.alphaHash,rt=!!v.extensions,Pt=Wi;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Pt=i.toneMapping);let Ft={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Zt,fragmentShader:Yt,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:G,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&P._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&P.instanceColor!==null,instancingMorph:Ht&&P.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:ae,envMap:nt,envMapMode:nt&&it.mapping,envMapCubeUVHeight:U,aoMap:at,lightMap:ct,bumpMap:ht,normalMap:pt,displacementMap:Ut,emissiveMap:qt,normalMapObjectSpace:pt&&v.normalMapType===E0,normalMapTangentSpace:pt&&v.normalMapType===Vo,packedNormalMap:pt&&v.normalMapType===Vo&&dM(v.normalMap.format),metalnessMap:Jt,roughnessMap:jt,anisotropy:B,anisotropyMap:W,clearcoat:oe,clearcoatMap:ut,clearcoatNormalMap:ft,clearcoatRoughnessMap:Z,dispersion:ie,retroreflection:w,iridescence:_,iridescenceMap:st,iridescenceThicknessMap:gt,sheen:H,sheenColorMap:Nt,sheenRoughnessMap:vt,specularMap:yt,specularColorMap:Ot,specularIntensityMap:$t,transmission:J,transmissionMap:zt,thicknessMap:O,gradientMap:_t,opaque:v.transparent===!1&&v.blending===zr&&v.alphaToCoverage===!1,alphaMap:et,alphaTest:xt,alphaHash:Mt,combine:v.combine,mapUv:Vt&&p(v.map.channel),aoMapUv:at&&p(v.aoMap.channel),lightMapUv:ct&&p(v.lightMap.channel),bumpMapUv:ht&&p(v.bumpMap.channel),normalMapUv:pt&&p(v.normalMap.channel),displacementMapUv:Ut&&p(v.displacementMap.channel),emissiveMapUv:qt&&p(v.emissiveMap.channel),metalnessMapUv:Jt&&p(v.metalnessMap.channel),roughnessMapUv:jt&&p(v.roughnessMap.channel),anisotropyMapUv:W&&p(v.anisotropyMap.channel),clearcoatMapUv:ut&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&p(v.sheenRoughnessMap.channel),specularMapUv:yt&&p(v.specularMap.channel),specularColorMapUv:Ot&&p(v.specularColorMap.channel),specularIntensityMapUv:$t&&p(v.specularIntensityMap.channel),transmissionMapUv:zt&&p(v.transmissionMap.channel),thicknessMapUv:O&&p(v.thicknessMap.channel),alphaMapUv:et&&p(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(pt||B),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(Vt||et),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ot,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:mt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&se.getTransfer(v.map.colorSpace)===he,decodeVideoTextureEmissive:qt&&v.emissiveMap.isVideoTexture===!0&&se.getTransfer(v.emissiveMap.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===hi,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(v){let L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)L.push(R),L.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(g(L,v),b(L,v),L.push(i.outputColorSpace)),L.push(v.customProgramCacheKey),L.join()}function g(v,L){v.push(L.precision),v.push(L.outputColorSpace),v.push(L.envMapMode),v.push(L.envMapCubeUVHeight),v.push(L.mapUv),v.push(L.alphaMapUv),v.push(L.lightMapUv),v.push(L.aoMapUv),v.push(L.bumpMapUv),v.push(L.normalMapUv),v.push(L.displacementMapUv),v.push(L.emissiveMapUv),v.push(L.metalnessMapUv),v.push(L.roughnessMapUv),v.push(L.anisotropyMapUv),v.push(L.clearcoatMapUv),v.push(L.clearcoatNormalMapUv),v.push(L.clearcoatRoughnessMapUv),v.push(L.iridescenceMapUv),v.push(L.iridescenceThicknessMapUv),v.push(L.sheenColorMapUv),v.push(L.sheenRoughnessMapUv),v.push(L.specularMapUv),v.push(L.specularColorMapUv),v.push(L.specularIntensityMapUv),v.push(L.transmissionMapUv),v.push(L.thicknessMapUv),v.push(L.combine),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.morphAttributeCount),v.push(L.numSunLights),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numSpotLightMaps),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numSunLightShadows),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.numSpotLightShadowsWithMaps),v.push(L.numLightProbes),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function b(v,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.retroreflection&&a.enable(24),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){let L=f[v.type],R;if(L){let A=vn[L];R=$0.clone(A.uniforms)}else R=v.uniforms;return R}function x(v,L){let R=h.get(L);return R!==void 0?++R.usedTimes:(R=new cM(i,L,v,s),c.push(R),h.set(L,R)),R}function T(v){if(--v.usedTimes===0){let L=c.indexOf(v);c[L]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function D(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:D}}function fM(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function pM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ly(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cy(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,y,m,g){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:g},i[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=p,b.materialVariant=a(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=m,b.group=g),t++,b}function l(u,f,p,y,m,g,b){b.reversedDepth===!0&&(m=-m);let E=o(u,f,p,y,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):e.push(E)}function c(u,f,p,y,m,g){let b=o(u,f,p,y,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||pM),n.length>1&&n.sort(f||ly),s.length>1&&s.sort(f||ly)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function mM(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new cy,i.set(n,[a])):s>=r.length?(a=new cy,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function gM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Qt};break;case"SpotLight":e={position:new C,direction:new C,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function yM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _M=0;function xM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vM(i){let t=new gM,e=yM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new pe,a=new pe;function o(c){let h=0,d=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,b=0,E=0,x=0,T=0,M=0,D=0,v=0,L=0,R=0;c.sort(xM);for(let P=0,q=c.length;P<q;P++){let I=c[P],k=I.color,X=I.intensity,Y=I.distance,it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===xs?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*X,d+=k.g*X,u+=k.b*X;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],X);R++}else if(I.isSunLight){let U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,tt=e.get(I);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=it;let Lt=K.getViewportCount();for(let mt=0;mt<Lt;mt++)n.sunShadowMatrix[y+mt]=K.getMatrix(mt),n.sunShadowCascade[y+mt]=K._cascadeData[mt];y+=Lt,p++}n.sun[f]=U,f++}else if(I.isDirectionalLight){let U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,tt=e.get(I);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=it,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=U,m++}else if(I.isSpotLight){let U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(k).multiplyScalar(X),U.distance=Y,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[b]=U;let K=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,K.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[b]=K.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,n.spotShadow[b]=tt,n.spotShadowMap[b]=it,D++}b++}else if(I.isRectAreaLight){let U=t.get(I);U.color.copy(k).multiplyScalar(X),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=U,E++}else if(I.isPointLight){let U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){let K=I.shadow,tt=e.get(I);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=it,n.pointShadowMatrix[g]=I.shadow.matrix,M++}n.point[g]=U,g++}else if(I.isHemisphereLight){let U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(X),U.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[x]=U,x++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let A=n.hash;(A.sunLength!==f||A.directionalLength!==m||A.pointLength!==g||A.spotLength!==b||A.rectAreaLength!==E||A.hemiLength!==x||A.numSunShadows!==p||A.numDirectionalShadows!==T||A.numPointShadows!==M||A.numSpotShadows!==D||A.numSpotMaps!==v||A.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=E,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+v-L,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,A.sunLength=f,A.directionalLength=m,A.pointLength=g,A.spotLength=b,A.rectAreaLength=E,A.hemiLength=x,A.numSunShadows=p,A.numDirectionalShadows=T,A.numPointShadows=M,A.numSpotShadows=D,A.numSpotMaps=v,A.numLightProbes=R,n.version=_M++)}function l(c,h){let d=0,u=0,f=0,p=0,y=0,m=0,g=h.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let x=c[b];if(x.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(g),d++}else if(x.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),u++}else if(x.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let T=n.rectArea[y];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function hy(i){let t=new vM(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function bM(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new hy(i),t.set(s,[o])):r>=a.length?(o=new hy(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var SM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,EM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],MM=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],dy=new pe,Jo=new C,Mf=new C;function LM(i,t,e){let n=new Hr,s=new lt,r=new lt,a=new Te,o=new Oc,l=new Pc,c={},h=e.maxTextureSize,d={[ms]:Ge,[Ge]:ms,[hi]:hi},u=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:SM,fragmentShader:TM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new ci;p.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new _e(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let g=this.type;this.render=function(M,D,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===e0&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fo);let L=i.getRenderTarget(),R=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),P=i.state;P.setBlending(_n),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let q=g!==this.type;q&&D.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=M.length;I<k;I++){let X=M[I],Y=X.shadow;if(Y===void 0){kt("WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let it=Y.getFrameExtents();s.multiply(it),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,Y.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=U,Y.map===null||q===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===jr){if(X.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new li(s.x,s.y,{format:xs,type:Ki,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),Y.map.texture.name=X.name+".shadowMap",Y.map.depthTexture=new ls(s.x,s.y,Ci),Y.map.depthTexture.name=X.name+".shadowMapDepth",Y.map.depthTexture.format=pn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=qe,Y.map.depthTexture.magFilter=qe}else X.isPointLight?(Y.map=new Uh(s.x),Y.map.depthTexture=new Dc(s.x,Zi)):(Y.map=new li(s.x,s.y),Y.map.depthTexture=new ls(s.x,s.y,Zi)),Y.map.depthTexture.name=X.name+".shadowMap",Y.map.depthTexture.format=pn,this.type===Fo?(Y.map.depthTexture.compareFunction=U?qh:Ph,Y.map.depthTexture.minFilter=Ve,Y.map.depthTexture.magFilter=Ve):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=qe,Y.map.depthTexture.magFilter=qe);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let K=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();X.isPointLight!==!0&&Y.updateMatrices(X,v);for(let tt=0;tt<K;tt++){let Lt=Y.getCamera(tt);if(X.isPointLight){let mt=Y.camera,Zt=Y.matrix,Yt=X.distance||mt.far;Yt!==mt.far&&(mt.far=Yt,mt.updateProjectionMatrix()),Jo.setFromMatrixPosition(X.matrixWorld),mt.position.copy(Jo),Mf.copy(mt.position),Mf.add(EM[tt]),mt.up.copy(MM[tt]),mt.lookAt(Mf),mt.updateMatrixWorld(),Zt.makeTranslation(-Jo.x,-Jo.y,-Jo.z),dy.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(dy,mt.coordinateSystem,mt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(Y.map),i.clear());let mt=Y.getViewport(tt);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),P.viewport(a)}n=Y.getFrustum(tt),x(D,v,Lt,X,this.type)}Y.isPointLightShadow!==!0&&this.type===jr&&b(Y,v),Y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(L,R,A)};function b(M,D){let v=t.update(y);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new li(s.x,s.y,{format:xs,type:Ki}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(D,null,v,u,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(D,null,v,f,y,null)}function E(M,D,v,L){let R=null,A=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)R=A;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let P=R.uuid,q=D.uuid,I=c[P];I===void 0&&(I={},c[P]=I);let k=I[q];k===void 0&&(k=R.clone(),I[q]=k,D.addEventListener("dispose",T)),R=k}if(R.visible=D.visible,R.wireframe=D.wireframe,L===jr?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:d[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=i.properties.get(R);P.light=v}return R}function x(M,D,v,L,R){if(M.visible===!1)return;if(M.layers.test(D.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===jr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let q=t.update(M),I=M.material;if(Array.isArray(I)){let k=q.groups;for(let X=0,Y=k.length;X<Y;X++){let it=k[X],U=I[it.materialIndex];if(U&&U.visible){let K=E(M,U,L,R);M.onBeforeShadow(i,M,D,v,q,K,it),i.renderBufferDirect(v,null,q,K,M,it),M.onAfterShadow(i,M,D,v,q,K,it)}}}else if(I.visible){let k=E(M,I,L,R);M.onBeforeShadow(i,M,D,v,q,k,null),i.renderBufferDirect(v,null,q,k,M,null),M.onAfterShadow(i,M,D,v,q,k,null)}}let P=M.children;for(let q=0,I=P.length;q<I;q++)x(P[q],D,v,L,R)}function T(M){M.target.removeEventListener("dispose",T);for(let v in c){let L=c[v],R=M.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function wM(i,t){function e(){let O=!1,_t=new Te,et=null,xt=new Te(0,0,0,0);return{setMask:function(Mt){et!==Mt&&!O&&(i.colorMask(Mt,Mt,Mt,Mt),et=Mt)},setLocked:function(Mt){O=Mt},setClear:function(Mt,rt,Pt,Ft,xe){xe===!0&&(Mt*=Ft,rt*=Ft,Pt*=Ft),_t.set(Mt,rt,Pt,Ft),xt.equals(_t)===!1&&(i.clearColor(Mt,rt,Pt,Ft),xt.copy(_t))},reset:function(){O=!1,et=null,xt.set(-1,0,0,0)}}}function n(){let O=!1,_t=!1,et=null,xt=null,Mt=null;return{setReversed:function(rt){if(_t!==rt){let Pt=t.get("EXT_clip_control");rt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),_t=rt;let Ft=Mt;Mt=null,this.setClear(Ft)}},getReversed:function(){return _t},setTest:function(rt){rt?Q(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(rt){et!==rt&&!O&&(i.depthMask(rt),et=rt)},setFunc:function(rt){if(_t&&(rt=O0[rt]),xt!==rt){switch(rt){case fc:i.depthFunc(i.NEVER);break;case pc:i.depthFunc(i.ALWAYS);break;case mc:i.depthFunc(i.LESS);break;case Fr:i.depthFunc(i.LEQUAL);break;case gc:i.depthFunc(i.EQUAL);break;case yc:i.depthFunc(i.GEQUAL);break;case _c:i.depthFunc(i.GREATER);break;case xc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=rt}},setLocked:function(rt){O=rt},setClear:function(rt){Mt!==rt&&(Mt=rt,_t&&(rt=1-rt),i.clearDepth(rt))},reset:function(){O=!1,et=null,xt=null,Mt=null,_t=!1}}}function s(){let O=!1,_t=null,et=null,xt=null,Mt=null,rt=null,Pt=null,Ft=null,xe=null;return{setTest:function(le){O||(le?Q(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(le){_t!==le&&!O&&(i.stencilMask(le),_t=le)},setFunc:function(le,Pi,sn){(et!==le||xt!==Pi||Mt!==sn)&&(i.stencilFunc(le,Pi,sn),et=le,xt=Pi,Mt=sn)},setOp:function(le,Pi,sn){(rt!==le||Pt!==Pi||Ft!==sn)&&(i.stencilOp(le,Pi,sn),rt=le,Pt=Pi,Ft=sn)},setLocked:function(le){O=le},setClear:function(le){xe!==le&&(i.clearStencil(le),xe=le)},reset:function(){O=!1,_t=null,et=null,xt=null,Mt=null,rt=null,Pt=null,Ft=null,xe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],y=null,m=!1,g=null,b=null,E=null,x=null,T=null,M=null,D=null,v=new Qt(0,0,0),L=0,R=!1,A=null,P=null,q=null,I=null,k=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,it=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(U)[1]),Y=it>=1):U.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),Y=it>=2);let K=null,tt={},Lt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Zt=new Te().fromArray(Lt),Yt=new Te().fromArray(mt);function dt(O,_t,et,xt){let Mt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(O,rt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<et;Pt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(_t+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return rt}let G={};G[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Fr),ht(!1),pt(Ju),Q(i.CULL_FACE),at(_n);function Q(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ot(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ht(O,_t){return u[O]!==_t?(i.bindFramebuffer(O,_t),u[O]=_t,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Tt(O,_t){let et=p,xt=!1;if(O){et=f.get(_t),et===void 0&&(et=[],f.set(_t,et));let Mt=O.textures;if(et.length!==Mt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Pt=Mt.length;rt<Pt;rt++)et[rt]=i.COLOR_ATTACHMENT0+rt;et.length=Mt.length,xt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,xt=!0);xt&&i.drawBuffers(et)}function Vt(O){return y!==O?(i.useProgram(O),y=O,!0):!1}let ae={[Gs]:i.FUNC_ADD,[n0]:i.FUNC_SUBTRACT,[s0]:i.FUNC_REVERSE_SUBTRACT};ae[r0]=i.MIN,ae[a0]=i.MAX;let nt={[o0]:i.ZERO,[l0]:i.ONE,[c0]:i.SRC_COLOR,[ju]:i.SRC_ALPHA,[m0]:i.SRC_ALPHA_SATURATE,[f0]:i.DST_COLOR,[d0]:i.DST_ALPHA,[h0]:i.ONE_MINUS_SRC_COLOR,[zu]:i.ONE_MINUS_SRC_ALPHA,[p0]:i.ONE_MINUS_DST_COLOR,[u0]:i.ONE_MINUS_DST_ALPHA,[g0]:i.CONSTANT_COLOR,[y0]:i.ONE_MINUS_CONSTANT_COLOR,[_0]:i.CONSTANT_ALPHA,[x0]:i.ONE_MINUS_CONSTANT_ALPHA};function at(O,_t,et,xt,Mt,rt,Pt,Ft,xe,le){if(O===_n){m===!0&&(ot(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),O!==i0){if(O!==g||le!==R){if((b!==Gs||T!==Gs)&&(i.blendEquation(i.FUNC_ADD),b=Gs,T=Gs),le)switch(O){case zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yu:i.blendFunc(i.ONE,i.ONE);break;case Qu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Gt("WebGLState: Invalid blending: ",O);break}else switch(O){case zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qu:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xu:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",O);break}E=null,x=null,M=null,D=null,v.set(0,0,0),L=0,g=O,R=le}return}Mt=Mt||_t,rt=rt||et,Pt=Pt||xt,(_t!==b||Mt!==T)&&(i.blendEquationSeparate(ae[_t],ae[Mt]),b=_t,T=Mt),(et!==E||xt!==x||rt!==M||Pt!==D)&&(i.blendFuncSeparate(nt[et],nt[xt],nt[rt],nt[Pt]),E=et,x=xt,M=rt,D=Pt),(Ft.equals(v)===!1||xe!==L)&&(i.blendColor(Ft.r,Ft.g,Ft.b,xe),v.copy(Ft),L=xe),g=O,R=!1}function ct(O,_t){O.side===hi?ot(i.CULL_FACE):Q(i.CULL_FACE);let et=O.side===Ge;_t&&(et=!et),ht(et),O.blending===zr&&O.transparent===!1?at(_n):at(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let xt=O.stencilWrite;o.setTest(xt),xt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),qt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(O){A!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),A=O)}function pt(O){O!==Kg?(Q(i.CULL_FACE),O!==P&&(O===Ju?i.cullFace(i.BACK):O===t0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),P=O}function Ut(O){O!==q&&(Y&&i.lineWidth(O),q=O)}function qt(O,_t,et){O?(Q(i.POLYGON_OFFSET_FILL),(I!==_t||k!==et)&&(I=_t,k=et,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,et))):ot(i.POLYGON_OFFSET_FILL)}function Jt(O){O?Q(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function jt(O){O===void 0&&(O=i.TEXTURE0+X-1),K!==O&&(i.activeTexture(O),K=O)}function B(O,_t,et){et===void 0&&(K===null?et=i.TEXTURE0+X-1:et=K);let xt=tt[et];xt===void 0&&(xt={type:void 0,texture:void 0},tt[et]=xt),(xt.type!==O||xt.texture!==_t)&&(K!==et&&(i.activeTexture(et),K=et),i.bindTexture(O,_t||G[O]),xt.type=O,xt.texture=_t)}function oe(){let O=tt[K];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(O){Gt("WebGLState:",O)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(O){Gt("WebGLState:",O)}}function _(){try{i.texSubImage2D(...arguments)}catch(O){Gt("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){Gt("WebGLState:",O)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Gt("WebGLState:",O)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Gt("WebGLState:",O)}}function ut(){try{i.texStorage2D(...arguments)}catch(O){Gt("WebGLState:",O)}}function ft(){try{i.texStorage3D(...arguments)}catch(O){Gt("WebGLState:",O)}}function Z(){try{i.texImage2D(...arguments)}catch(O){Gt("WebGLState:",O)}}function st(){try{i.texImage3D(...arguments)}catch(O){Gt("WebGLState:",O)}}function gt(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function Nt(O,_t){d[O]!==_t&&(i.pixelStorei(O,_t),d[O]=_t)}function vt(O){Zt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Zt.copy(O))}function yt(O){Yt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Yt.copy(O))}function Ot(O,_t){let et=c.get(_t);et===void 0&&(et=new WeakMap,c.set(_t,et));let xt=et.get(O);xt===void 0&&(xt=i.getUniformBlockIndex(_t,O.name),et.set(O,xt))}function $t(O,_t){let xt=c.get(_t).get(O);l.get(_t)!==xt&&(i.uniformBlockBinding(_t,xt,O.__bindingPointIndex),l.set(_t,xt))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,tt={},u={},f=new WeakMap,p=[],y=null,m=!1,g=null,b=null,E=null,x=null,T=null,M=null,D=null,v=new Qt(0,0,0),L=0,R=!1,A=null,P=null,q=null,I=null,k=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ot,bindFramebuffer:Ht,drawBuffers:Tt,useProgram:Vt,setBlending:at,setMaterial:ct,setFlipSided:ht,setCullFace:pt,setLineWidth:Ut,setPolygonOffset:qt,setScissorTest:Jt,activeTexture:jt,bindTexture:B,unbindTexture:oe,compressedTexImage2D:ie,compressedTexImage3D:w,texImage2D:Z,texImage3D:st,pixelStorei:Nt,getParameter:gt,updateUBOMapping:Ot,uniformBlockBinding:$t,texStorage2D:ut,texStorage3D:ft,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:J,compressedTexSubImage3D:W,scissor:vt,viewport:yt,reset:zt}}function DM(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,_){return p?new OffscreenCanvas(w,_):no("canvas")}function m(w,_,H){let J=1,W=ie(w);if((W.width>H||W.height>H)&&(J=H/Math.max(W.width,W.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ut=Math.floor(J*W.width),ft=Math.floor(J*W.height);u===void 0&&(u=y(ut,ft));let Z=_?y(ut,ft):u;return Z.width=ut,Z.height=ft,Z.getContext("2d").drawImage(w,0,0,ut,ft),kt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ut+"x"+ft+")."),Z}else return"data"in w&&kt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function g(w){return w.generateMipmaps}function b(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,_,H,J,W,ut=!1){if(w!==null){if(i[w]!==void 0)return i[w];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ft;J&&(ft=t.get("EXT_texture_norm16"),ft||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8),H===i.UNSIGNED_SHORT&&ft&&(Z=ft.R16_EXT),H===i.SHORT&&ft&&(Z=ft.R16_SNORM_EXT)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),_===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8),H===i.UNSIGNED_SHORT&&ft&&(Z=ft.RG16_EXT),H===i.SHORT&&ft&&(Z=ft.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(H===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGB16_EXT),H===i.SHORT&&ft&&(Z=ft.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){let st=ut?io:se.getTransfer(W);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=st===he?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGBA16_EXT),H===i.SHORT&&ft&&(Z=ft.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(w,_){let H;return w?_===null||_===Zi||_===Zr?H=i.DEPTH24_STENCIL8:_===Ci?H=i.DEPTH32F_STENCIL8:_===Wr&&(H=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Zi||_===Zr?H=i.DEPTH_COMPONENT24:_===Ci?H=i.DEPTH_COMPONENT32F:_===Wr&&(H=i.DEPTH_COMPONENT16),H}function M(w,_){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==qe&&w.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function D(w){let _=w.target;_.removeEventListener("dispose",D),L(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(w){let _=w.target;_.removeEventListener("dispose",v),A(_)}function L(w){let _=n.get(w);if(_.__webglInit===void 0)return;let H=w.source,J=f.get(H);if(J){let W=J[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&R(w),Object.keys(J).length===0&&f.delete(H)}n.remove(w)}function R(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let H=w.source,J=f.get(H);delete J[_.__cacheKey],a.memory.textures--}function A(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let W=0;W<_.__webglFramebuffer[J].length;W++)i.deleteFramebuffer(_.__webglFramebuffer[J][W]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let H=w.textures;for(let J=0,W=H.length;J<W;J++){let ut=n.get(H[J]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(w)}let P=0;function q(){P=0}function I(){return P}function k(w){P=w}function X(){let w=P;return w>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function Y(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function it(w,_){let H=n.get(w);if(w.isVideoTexture&&B(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){let J=w.image;if(J===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(H,w,_);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function U(w,_){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){ot(H,w,_);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function K(w,_){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){ot(H,w,_);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function tt(w,_){let H=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&H.__version!==w.version){Ht(H,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}let Lt={[Cr]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[vc]:i.MIRRORED_REPEAT},mt={[qe]:i.NEAREST,[S0]:i.NEAREST_MIPMAP_NEAREST,[Oo]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Kc]:i.LINEAR_MIPMAP_NEAREST,[ys]:i.LINEAR_MIPMAP_LINEAR},Zt={[L0]:i.NEVER,[I0]:i.ALWAYS,[w0]:i.LESS,[Ph]:i.LEQUAL,[D0]:i.EQUAL,[qh]:i.GEQUAL,[R0]:i.GREATER,[A0]:i.NOTEQUAL};function Yt(w,_){if(_.type===Ci&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ve||_.magFilter===Kc||_.magFilter===Oo||_.magFilter===ys||_.minFilter===Ve||_.minFilter===Kc||_.minFilter===Oo||_.minFilter===ys)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Lt[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Lt[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Lt[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,mt[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,mt[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qe||_.minFilter!==Oo&&_.minFilter!==ys||_.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function dt(w,_){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",D));let J=_.source,W=f.get(J);W===void 0&&(W={},f.set(J,W));let ut=Y(_);if(ut!==w.__cacheKey){W[ut]===void 0&&(W[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),W[ut].usedTimes++;let ft=W[w.__cacheKey];ft!==void 0&&(W[w.__cacheKey].usedTimes--,ft.usedTimes===0&&R(_)),w.__cacheKey=ut,w.__webglTexture=W[ut].texture}return H}function G(w,_,H){return Math.floor(Math.floor(w/H)/_)}function Q(w,_,H,J){let ut=w.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,H,J,_.data);else{ut.sort((Nt,vt)=>Nt.start-vt.start);let ft=0;for(let Nt=1;Nt<ut.length;Nt++){let vt=ut[ft],yt=ut[Nt],Ot=vt.start+vt.count,$t=G(yt.start,_.width,4),zt=G(vt.start,_.width,4);yt.start<=Ot+1&&$t===zt&&G(yt.start+yt.count-1,_.width,4)===$t?vt.count=Math.max(vt.count,yt.start+yt.count-vt.start):(++ft,ut[ft]=yt)}ut.length=ft+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Nt=0,vt=ut.length;Nt<vt;Nt++){let yt=ut[Nt],Ot=Math.floor(yt.start/4),$t=Math.ceil(yt.count/4),zt=Ot%_.width,O=Math.floor(Ot/_.width),_t=$t,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,zt,O,_t,et,H,J,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function ot(w,_,H){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let W=dt(w,_),ut=_.source;e.bindTexture(J,w.__webglTexture,i.TEXTURE0+H);let ft=n.get(ut);if(ut.version!==ft.__version||W===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let et=se.getPrimaries(se.workingColorSpace),xt=_.colorSpace===Hn?null:se.getPrimaries(_.colorSpace),Mt=_.colorSpace===Hn||et===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let st=m(_.image,!1,s.maxTextureSize);st=oe(_,st);let gt=r.convert(_.format,_.colorSpace),Nt=r.convert(_.type),vt=x(_.internalFormat,gt,Nt,_.normalized,_.colorSpace,_.isVideoTexture);Yt(J,_);let yt,Ot=_.mipmaps,$t=_.isVideoTexture!==!0,zt=ft.__version===void 0||W===!0,O=ut.dataReady,_t=M(_,st);if(_.isDepthTexture)vt=T(_.format===_s,_.type),zt&&($t?e.texStorage2D(i.TEXTURE_2D,1,vt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,vt,st.width,st.height,0,gt,Nt,null));else if(_.isDataTexture)if(Ot.length>0){$t&&zt&&e.texStorage2D(i.TEXTURE_2D,_t,vt,Ot[0].width,Ot[0].height);for(let et=0,xt=Ot.length;et<xt;et++)yt=Ot[et],$t?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,yt.width,yt.height,gt,Nt,yt.data):e.texImage2D(i.TEXTURE_2D,et,vt,yt.width,yt.height,0,gt,Nt,yt.data);_.generateMipmaps=!1}else $t?(zt&&e.texStorage2D(i.TEXTURE_2D,_t,vt,st.width,st.height),O&&Q(_,st,gt,Nt)):e.texImage2D(i.TEXTURE_2D,0,vt,st.width,st.height,0,gt,Nt,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$t&&zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,vt,Ot[0].width,Ot[0].height,st.depth);for(let et=0,xt=Ot.length;et<xt;et++)if(yt=Ot[et],_.format!==Ni)if(gt!==null)if($t){if(O)if(_.layerUpdates.size>0){let Mt=xf(yt.width,yt.height,_.format,_.type);for(let rt of _.layerUpdates){let Pt=yt.data.subarray(rt*Mt/yt.data.BYTES_PER_ELEMENT,(rt+1)*Mt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,rt,yt.width,yt.height,1,gt,Pt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,yt.width,yt.height,st.depth,gt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,vt,yt.width,yt.height,st.depth,0,yt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,yt.width,yt.height,st.depth,gt,Nt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,vt,yt.width,yt.height,st.depth,0,gt,Nt,yt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{$t&&zt&&e.texStorage2D(i.TEXTURE_2D,_t,vt,Ot[0].width,Ot[0].height);for(let et=0,xt=Ot.length;et<xt;et++)yt=Ot[et],_.format!==Ni?gt!==null?$t?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,yt.width,yt.height,gt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,vt,yt.width,yt.height,0,yt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,yt.width,yt.height,gt,Nt,yt.data):e.texImage2D(i.TEXTURE_2D,et,vt,yt.width,yt.height,0,gt,Nt,yt.data)}else if(_.isDataArrayTexture)if($t){if(zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,vt,st.width,st.height,st.depth),O)if(_.layerUpdates.size>0){let et=xf(st.width,st.height,_.format,_.type);for(let xt of _.layerUpdates){let Mt=st.data.subarray(xt*et/st.data.BYTES_PER_ELEMENT,(xt+1)*et/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,st.width,st.height,1,gt,Nt,Mt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,gt,Nt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,st.width,st.height,st.depth,0,gt,Nt,st.data);else if(_.isData3DTexture)$t?(zt&&e.texStorage3D(i.TEXTURE_3D,_t,vt,st.width,st.height,st.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,gt,Nt,st.data)):e.texImage3D(i.TEXTURE_3D,0,vt,st.width,st.height,st.depth,0,gt,Nt,st.data);else if(_.isFramebufferTexture){if(zt)if($t)e.texStorage2D(i.TEXTURE_2D,_t,vt,st.width,st.height);else{let et=st.width,xt=st.height;for(let Mt=0;Mt<_t;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,vt,et,xt,0,gt,Nt,null),et>>=1,xt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),st.parentNode!==et){et.appendChild(st),d.add(_),et.onpaint=xt=>{let Mt=xt.changedElements;for(let rt of d)Mt.includes(rt.image)&&(rt.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let Mt=i.RGBA,rt=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Mt,rt,Pt,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if($t&&zt){let et=ie(Ot[0]);e.texStorage2D(i.TEXTURE_2D,_t,vt,et.width,et.height)}for(let et=0,xt=Ot.length;et<xt;et++)yt=Ot[et],$t?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,gt,Nt,yt):e.texImage2D(i.TEXTURE_2D,et,vt,gt,Nt,yt);_.generateMipmaps=!1}else if($t){if(zt){let et=ie(st);e.texStorage2D(i.TEXTURE_2D,_t,vt,et.width,et.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Nt,st)}else e.texImage2D(i.TEXTURE_2D,0,vt,gt,Nt,st);g(_)&&b(J),ft.__version=ut.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ht(w,_,H){if(_.image.length!==6)return;let J=dt(w,_),W=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);let ut=n.get(W);if(W.version!==ut.__version||J===!0){e.activeTexture(i.TEXTURE0+H);let ft=se.getPrimaries(se.workingColorSpace),Z=_.colorSpace===Hn?null:se.getPrimaries(_.colorSpace),st=_.colorSpace===Hn||ft===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let gt=_.isCompressedTexture||_.image[0].isCompressedTexture,Nt=_.image[0]&&_.image[0].isDataTexture,vt=[];for(let rt=0;rt<6;rt++)!gt&&!Nt?vt[rt]=m(_.image[rt],!0,s.maxCubemapSize):vt[rt]=Nt?_.image[rt].image:_.image[rt],vt[rt]=oe(_,vt[rt]);let yt=vt[0],Ot=r.convert(_.format,_.colorSpace),$t=r.convert(_.type),zt=x(_.internalFormat,Ot,$t,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,_t=ut.__version===void 0||J===!0,et=W.dataReady,xt=M(_,yt);Yt(i.TEXTURE_CUBE_MAP,_);let Mt;if(gt){O&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,zt,yt.width,yt.height);for(let rt=0;rt<6;rt++){Mt=vt[rt].mipmaps;for(let Pt=0;Pt<Mt.length;Pt++){let Ft=Mt[Pt];_.format!==Ni?Ot!==null?O?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,Ft.width,Ft.height,Ot,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,zt,Ft.width,Ft.height,0,Ft.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,Ft.width,Ft.height,Ot,$t,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,zt,Ft.width,Ft.height,0,Ot,$t,Ft.data)}}}else{if(Mt=_.mipmaps,O&&_t){Mt.length>0&&xt++;let rt=ie(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,zt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Nt){O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,vt[rt].width,vt[rt].height,Ot,$t,vt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,zt,vt[rt].width,vt[rt].height,0,Ot,$t,vt[rt].data);for(let Pt=0;Pt<Mt.length;Pt++){let xe=Mt[Pt].image[rt].image;O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,xe.width,xe.height,Ot,$t,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,zt,xe.width,xe.height,0,Ot,$t,xe.data)}}else{O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,$t,vt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,zt,Ot,$t,vt[rt]);for(let Pt=0;Pt<Mt.length;Pt++){let Ft=Mt[Pt];O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,Ot,$t,Ft.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,zt,Ot,$t,Ft.image[rt])}}}g(_)&&b(i.TEXTURE_CUBE_MAP),ut.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Tt(w,_,H,J,W,ut){let ft=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),st=x(H.internalFormat,ft,Z,H.normalized,H.colorSpace),gt=n.get(_),Nt=n.get(H);if(Nt.__renderTarget=_,!gt.__hasExternalTextures){let vt=Math.max(1,_.width>>ut),yt=Math.max(1,_.height>>ut);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,ut,st,vt,yt,_.depth,0,ft,Z,null):e.texImage2D(W,ut,st,vt,yt,0,ft,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),jt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,W,Nt.__webglTexture,0,Jt(_)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,W,Nt.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(w,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let J=_.depthTexture,W=J&&J.isDepthTexture?J.type:null,ut=T(_.stencilBuffer,W),ft=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;jt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(_),ut,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(_),ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,w)}else{let J=_.textures;for(let W=0;W<J.length;W++){let ut=J[W],ft=r.convert(ut.format,ut.colorSpace),Z=r.convert(ut.type),st=x(ut.internalFormat,ft,Z,ut.normalized,ut.colorSpace);jt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(_),st,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(_),st,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(w,_,H){let J=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_.depthTexture);let gt=r.convert(_.depthTexture.format),Nt=r.convert(_.depthTexture.type),vt;_.depthTexture.format===pn?vt=i.DEPTH_COMPONENT24:_.depthTexture.format===_s&&(vt=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,vt,_.width,_.height,0,gt,Nt,null)}}else it(_.depthTexture,0);let ut=W.__webglTexture,ft=Jt(_),Z=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,st=_.depthTexture.format===_s?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===pn)jt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Z,ut,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,st,Z,ut,0);else if(_.depthTexture.format===_s)jt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Z,ut,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,st,Z,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(w){let _=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let J=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",W)};J.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=J}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let J=0;J<6;J++)ae(_.__webglFramebuffer[J],w,J);else{let J=w.texture.mipmaps;J&&J.length>0?ae(_.__webglFramebuffer[0],w,0):ae(_.__webglFramebuffer,w,0)}else if(H){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),Vt(_.__webglDepthbuffer[J],w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ut)}}else{let J=w.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Vt(_.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(w,_,H){let J=n.get(w);_!==void 0&&Tt(J.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&nt(w)}function ct(w){let _=w.texture,H=n.get(w),J=n.get(_);w.addEventListener("dispose",v);let W=w.textures,ut=w.isWebGLCubeRenderTarget===!0,ft=W.length>1;if(ft||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,a.memory.textures++),ut){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let st=0;st<_.mipmaps.length;st++)H.__webglFramebuffer[Z][st]=i.createFramebuffer()}else H.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)H.__webglFramebuffer[Z]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Z=0,st=W.length;Z<st;Z++){let gt=n.get(W[Z]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&jt(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<W.length;Z++){let st=W[Z];H.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);let gt=r.convert(st.format,st.colorSpace),Nt=r.convert(st.type),vt=x(st.internalFormat,gt,Nt,st.normalized,st.colorSpace,w.isXRRenderTarget===!0),yt=Jt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)Tt(H.__webglFramebuffer[Z][st],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st);else Tt(H.__webglFramebuffer[Z],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);g(_)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let Z=0,st=W.length;Z<st;Z++){let gt=W[Z],Nt=n.get(gt),vt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(vt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Nt.__webglTexture),Yt(vt,gt),Tt(H.__webglFramebuffer,w,gt,i.COLOR_ATTACHMENT0+Z,vt,0),g(gt)&&b(vt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,J.__webglTexture),Yt(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)Tt(H.__webglFramebuffer[st],w,_,i.COLOR_ATTACHMENT0,Z,st);else Tt(H.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,Z,0);g(_)&&b(Z),e.unbindTexture()}w.depthBuffer&&nt(w)}function ht(w){let _=w.textures;for(let H=0,J=_.length;H<J;H++){let W=_[H];if(g(W)){let ut=E(w),ft=n.get(W).__webglTexture;e.bindTexture(ut,ft),b(ut),e.unbindTexture()}}}let pt=[],Ut=[];function qt(w){if(w.samples>0){if(jt(w)===!1){let _=w.textures,H=w.width,J=w.height,W=i.COLOR_BUFFER_BIT,ut=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(w),Z=_.length>1;if(Z)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let st=w.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[gt]);let Nt=n.get(_[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,H,J,0,0,H,J,W,i.NEAREST),l===!0&&(pt.length=0,Ut.length=0,pt.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(pt.push(ut),Ut.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[gt]);let Nt=n.get(_[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Jt(w){return Math.min(s.maxSamples,w.samples)}function jt(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function B(w){let _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function oe(w,_){let H=w.colorSpace,J=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==eo&&H!==Hn&&(se.getTransfer(H)===he?(J!==Ni||W!==di)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",H)),_}function ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.getTextureUnits=I,this.setTextureUnits=k,this.setTexture2D=it,this.setTexture2DArray=U,this.setTexture3D=K,this.setTextureCube=tt,this.rebindTextures=at,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function RM(i,t){function e(n,s=Hn){let r,a=se.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===eh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return i.UNSIGNED_SHORT_5_5_5_1;if(n===of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rf)return i.BYTE;if(n===af)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===th)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===Ki)return i.HALF_FLOAT;if(n===cf)return i.ALPHA;if(n===hf)return i.RGB;if(n===Ni)return i.RGBA;if(n===pn)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===sh)return i.RED_INTEGER;if(n===xs)return i.RG;if(n===rh)return i.RG_INTEGER;if(n===ah)return i.RGBA_INTEGER;if(n===Po||n===qo||n===ko||n===Ho)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oh||n===lh||n===ch||n===hh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dh||n===uh||n===fh||n===ph||n===mh||n===Uo||n===gh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dh||n===uh)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ph)return r.COMPRESSED_R11_EAC;if(n===mh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Uo)return r.COMPRESSED_RG11_EAC;if(n===gh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yh||n===_h||n===xh||n===vh||n===bh||n===Sh||n===Th||n===Eh||n===Mh||n===Lh||n===wh||n===Dh||n===Rh||n===Ah)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_h)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Th)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ah)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ih||n===Bh||n===Fh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ih)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ch||n===Nh||n===$o||n===Oh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ch)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ff=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new po(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Di({vertexShader:AM,fragmentShader:IM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cf=class extends zi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,y=typeof XRWebGLBinding<"u",m=new Ff,g={},b=e.getContextAttributes(),E=null,x=null,T=[],M=[],D=new lt,v=null,L=null,R=new $e;R.viewport=new Te;let A=new $e;A.viewport=new Te;let P=[R,A],q=new jc,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=T[G];return Q===void 0&&(Q=new kr,T[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=T[G];return Q===void 0&&(Q=new kr,T[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=T[G];return Q===void 0&&(Q=new kr,T[G]=Q),Q.getHandSpace()};function X(G){let Q=M.indexOf(G.inputSource);if(Q===-1)return;let ot=T[Q];ot!==void 0&&(ot.update(G.inputSource,G.frame,c||a),ot.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let G=0;G<T.length;G++){let Q=M[G];Q!==null&&(M[G]=null,T[G].disconnect(Q))}I=null,k=null,m.reset();for(let G in g)delete g[G];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,x=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(D.width,D.height,!1),L!==null){let G=L.camera;G.fov=L.fov,G.zoom=L.zoom,G.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Ht=null,Tt=null;b.depth&&(Tt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=b.stencil?_s:pn,Ht=b.stencil?Zr:Zi);let Vt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new li(u.textureWidth,u.textureHeight,{format:Ni,type:di,depthTexture:new ls(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ot={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new li(f.framebufferWidth,f.framebufferHeight,{format:Ni,type:di,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(G){for(let Q=0;Q<G.removed.length;Q++){let ot=G.removed[Q],Ht=M.indexOf(ot);Ht>=0&&(M[Ht]=null,T[Ht].disconnect(ot))}for(let Q=0;Q<G.added.length;Q++){let ot=G.added[Q],Ht=M.indexOf(ot);if(Ht===-1){for(let Vt=0;Vt<T.length;Vt++)if(Vt>=M.length){M.push(ot),Ht=Vt;break}else if(M[Vt]===null){M[Vt]=ot,Ht=Vt;break}if(Ht===-1)break}let Tt=T[Ht];Tt&&Tt.connect(ot)}}let U=new C,K=new C;function tt(G,Q,ot){U.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(ot.matrixWorld);let Ht=U.distanceTo(K),Tt=Q.projectionMatrix.elements,Vt=ot.projectionMatrix.elements,ae=Tt[14]/(Tt[10]-1),nt=Tt[14]/(Tt[10]+1),at=(Tt[9]+1)/Tt[5],ct=(Tt[9]-1)/Tt[5],ht=(Tt[8]-1)/Tt[0],pt=(Vt[8]+1)/Vt[0],Ut=ae*ht,qt=ae*pt,Jt=Ht/(-ht+pt),jt=Jt*-ht;if(Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(jt),G.translateZ(Jt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Tt[10]===-1)G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let B=ae+Jt,oe=nt+Jt,ie=Ut-jt,w=qt+(Ht-jt),_=at*nt/oe*B,H=ct*nt/oe*B;G.projectionMatrix.makePerspective(ie,w,_,H,B,oe),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Lt(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Q=G.near,ot=G.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),q.near=A.near=R.near=Q,q.far=A.far=R.far=ot,(I!==q.near||k!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),I=q.near,k=q.far),q.layers.mask=G.layers.mask|6,R.layers.mask=q.layers.mask&-5,A.layers.mask=q.layers.mask&-3;let Ht=G.parent,Tt=q.cameras;Lt(q,Ht);for(let Vt=0;Vt<Tt.length;Vt++)Lt(Tt[Vt],Ht);Tt.length===2?tt(q,R,A):q.projectionMatrix.copy(R.projectionMatrix),L===null&&G.isPerspectiveCamera&&(L={camera:G,fov:G.fov,zoom:G.zoom}),mt(G,q,Ht)};function mt(G,Q,ot){ot===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(ot.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Pr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(G){return g[G]};let Zt=null;function Yt(G,Q){if(h=Q.getViewerPose(c||a),p=Q,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ht=!1;ot.length!==q.cameras.length&&(q.cameras.length=0,Ht=!0);for(let nt=0;nt<ot.length;nt++){let at=ot[nt],ct=null;if(f!==null)ct=f.getViewport(at);else{let pt=d.getViewSubImage(u,at);ct=pt.viewport,nt===0&&(t.setRenderTargetTextures(x,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(x))}let ht=P[nt];ht===void 0&&(ht=new $e,ht.layers.enable(nt),ht.viewport=new Te,P[nt]=ht),ht.matrix.fromArray(at.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(at.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),nt===0&&(q.matrix.copy(ht.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ht===!0&&q.cameras.push(ht)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let nt=d.getDepthInformation(ot[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(Tt&&Tt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<ot.length;nt++){let at=ot[nt].camera;if(at){let ct=g[at];ct||(ct=new po,g[at]=ct);let ht=d.getCameraImage(at);ct.sourceTexture=ht}}}}for(let ot=0;ot<T.length;ot++){let Ht=M[ot],Tt=T[ot];Ht!==null&&Tt!==void 0&&Tt.update(Ht,Q,c||a)}Zt&&Zt(G,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let dt=new uy;dt.setAnimationLoop(Yt),this.setAnimationLoop=function(G){Zt=G},this.dispose=function(){}}},BM=new pe,_y=new Xt;_y.set(-1,0,0,0,1,0,0,0,1);function FM(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,gf(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,E,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,b,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ge&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ge&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=t.get(g),E=b.envMap,x=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(BM.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_y),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ge&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let b=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function CM(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){let M=T.program;n.uniformBlockBinding(x,M)}function c(x,T){let M=s[x.id];M===void 0&&(m(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",b));let D=T.program;n.updateUBOMapping(x,D);let v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){let T=d();x.__bindingPointIndex=T;let M=i.createBuffer(),D=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let T=s[x.id],M=x.uniforms,D=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let v=0,L=M.length;v<L;v++){let R=M[v];if(Array.isArray(R))for(let A=0,P=R.length;A<P;A++)f(R[A],v,A,D);else f(R,v,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,T,M,D){if(y(x,T,M,D)===!0){let v=x.__offset,L=x.value;if(Array.isArray(L)){let R=0;for(let A=0;A<L.length;A++){let P=L[A],q=g(P);p(P,x.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(L,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function p(x,T,M){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,M)}function y(x,T,M,D){let v=x.value,L=T+"_"+M;if(D[L]===void 0)return typeof v=="number"||typeof v=="boolean"?D[L]=v:ArrayBuffer.isView(v)?D[L]=v.slice():D[L]=v.clone(),!0;{let R=D[L];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return D[L]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(x){let T=x.uniforms,M=0,D=16;for(let L=0,R=T.length;L<R;L++){let A=Array.isArray(T[L])?T[L]:[T[L]];for(let P=0,q=A.length;P<q;P++){let I=A[P],k=Array.isArray(I.value)?I.value:[I.value];for(let X=0,Y=k.length;X<Y;X++){let it=k[X],U=g(it),K=M%D,tt=K%U.boundary,Lt=K+tt;M+=tt,Lt!==0&&D-Lt<U.storage&&(M+=D-Lt),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=U.storage}}}let v=M%D;return v>0&&(M+=D-v),x.__size=M,x.__cache={},this}function g(x){let T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",x),T}function b(x){let T=x.target;T.removeEventListener("dispose",b);let M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function E(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var NM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xn=null;function OM(){return xn===null&&(xn=new lo(NM,16,16,xs,Ki),xn.name="DFG_LUT",xn.minFilter=Ve,xn.magFilter=Ve,xn.wrapS=un,xn.wrapT=un,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}var $h=class{constructor(t={}){let{canvas:e=F0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=di}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=f,m=new Set([ah,rh,sh]),g=new Set([di,Zi,Wr,Zr,eh,ih]),b=new Uint32Array(4),E=new Int32Array(4),x=new C,T=null,M=null,D=[],v=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,A=!1,P=null,q=null,I=null,k=null;this._outputColorSpace=Ue;let X=0,Y=0,it=null,U=-1,K=null,tt=new Te,Lt=new Te,mt=null,Zt=new Qt(0),Yt=0,dt=e.width,G=e.height,Q=1,ot=null,Ht=null,Tt=new Te(0,0,dt,G),Vt=new Te(0,0,dt,G),ae=!1,nt=new Hr,at=!1,ct=!1,ht=new pe,pt=new C,Ut=new Te,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function jt(){return it===null?Q:1}let B=n;function oe(S,F){return e.getContext(S,F)}let ie,w,_,H,J,W,ut,ft,Z,st,gt,Nt,vt,yt,Ot,$t,zt,O,_t,et,xt,Mt,rt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Pi,!1),B===null){let F="webgl2";if(B=oe(F,S),B===null)throw oe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(S){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Pi,!1),Gt("WebGLRenderer: "+S.message),S}function Pt(){ie=new VE(B),ie.init(),xt=new RM(B,ie),w=new FE(B,ie,t,xt),_=new wM(B,ie),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),q=B.createFramebuffer(),I=B.createFramebuffer(),k=B.createFramebuffer(),H=new YE(B),J=new fM,W=new DM(B,ie,_,J,w,xt,H),ut=new $E(R),ft=new Xb(B),Mt=new IE(B,ft),Z=new GE(B,ft,H,Mt),st=new XE(B,Z,ft,Mt,H),O=new QE(B,w,W),Ot=new CE(J),gt=new uM(R,ut,ie,w,Mt,Ot),Nt=new FM(R,J),vt=new mM,yt=new bM(ie),zt=new AE(R,ut,_,st,p,l),$t=new LM(R,st,w),rt=new CM(B,H,w,_),_t=new BE(B,ie,H),et=new JE(B,ie,H),H.programs=gt.programs,R.capabilities=w,R.extensions=ie,R.properties=J,R.renderLists=vt,R.shadowMap=$t,R.state=_,R.info=H}y!==di&&(L=new zE(y,e.width,e.height,o,s,r));let Ft=new Cf(R,B);this.xr=Ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(dt,G,!1))},this.getSize=function(S){return S.set(dt,G)},this.setSize=function(S,F,j=!0){if(Ft.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=S,G=F,e.width=Math.floor(S*Q),e.height=Math.floor(F*Q),j===!0&&(e.style.width=S+"px",e.style.height=F+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(dt*Q,G*Q).floor()},this.setDrawingBufferSize=function(S,F,j){dt=S,G=F,Q=j,e.width=Math.floor(S*j),e.height=Math.floor(F*j),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(y===di){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(tt)},this.getViewport=function(S){return S.copy(Tt)},this.setViewport=function(S,F,j,$){S.isVector4?Tt.set(S.x,S.y,S.z,S.w):Tt.set(S,F,j,$),_.viewport(tt.copy(Tt).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(Vt)},this.setScissor=function(S,F,j,$){S.isVector4?Vt.set(S.x,S.y,S.z,S.w):Vt.set(S,F,j,$),_.scissor(Lt.copy(Vt).multiplyScalar(Q).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(S){_.setScissorTest(ae=S)},this.setOpaqueSort=function(S){ot=S},this.setTransparentSort=function(S){Ht=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,j=!0){let $=0;if(S){let V=!1;if(it!==null){let Et=it.texture.format;V=m.has(Et)}if(V){let Et=it.texture.type,At=g.has(Et),St=zt.getClearColor(),It=zt.getClearAlpha(),Ct=St.r,Kt=St.g,ne=St.b;At?(b[0]=Ct,b[1]=Kt,b[2]=ne,b[3]=It,B.clearBufferuiv(B.COLOR,0,b)):(E[0]=Ct,E[1]=Kt,E[2]=ne,E[3]=It,B.clearBufferiv(B.COLOR,0,E))}else $|=B.COLOR_BUFFER_BIT}F&&($|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),P=S},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Pi,!1),zt.dispose(),vt.dispose(),yt.dispose(),J.dispose(),ut.dispose(),st.dispose(),Mt.dispose(),rt.dispose(),gt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Uf),Ft.removeEventListener("sessionend",$f),bs.stop()};function xe(S){S.preventDefault(),uf("WebGLRenderer: Context Lost."),A=!0}function le(){uf("WebGLRenderer: Context Restored."),A=!1;let S=H.autoReset,F=$t.enabled,j=$t.autoUpdate,$=$t.needsUpdate,V=$t.type;Pt(),H.autoReset=S,$t.enabled=F,$t.autoUpdate=j,$t.needsUpdate=$,$t.type=V}function Pi(S){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function sn(S){let F=S.target;F.removeEventListener("dispose",sn),ky(F)}function ky(S){Hy(S),J.remove(S)}function Hy(S){let F=J.get(S).programs;F!==void 0&&(F.forEach(function(j){gt.releaseProgram(j)}),S.isShaderMaterial&&gt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,j,$,V,Et){F===null&&(F=qt);let At=V.isMesh&&V.matrixWorld.determinantAffine()<0,St=Vy(S,F,j,$,V);_.setMaterial($,At);let It=j.index,Ct=1;if($.wireframe===!0){if(It=Z.getWireframeAttribute(j),It===void 0)return;Ct=2}let Kt=j.drawRange,ne=j.attributes.position,Bt=Kt.start*Ct,ce=(Kt.start+Kt.count)*Ct;Et!==null&&(Bt=Math.max(Bt,Et.start*Ct),ce=Math.min(ce,(Et.start+Et.count)*Ct)),It!==null?(Bt=Math.max(Bt,0),ce=Math.min(ce,It.count)):ne!=null&&(Bt=Math.max(Bt,0),ce=Math.min(ce,ne.count));let De=ce-Bt;if(De<0||De===1/0)return;Mt.setup(V,$,St,j,It);let be,me=_t;if(It!==null&&(be=ft.get(It),me=et,me.setIndex(be)),V.isMesh)$.wireframe===!0?(_.setLineWidth($.wireframeLinewidth*jt()),me.setMode(B.LINES)):me.setMode(B.TRIANGLES);else if(V.isLine){let Je=$.linewidth;Je===void 0&&(Je=1),_.setLineWidth(Je*jt()),V.isLineSegments?me.setMode(B.LINES):V.isLineLoop?me.setMode(B.LINE_LOOP):me.setMode(B.LINE_STRIP)}else V.isPoints?me.setMode(B.POINTS):V.isSprite&&me.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Je=V._multiDrawStarts,wt=V._multiDrawCounts,Ze=V._multiDrawCount,re=It?ft.get(It).bytesPerElement:1,Ai=J.get($).currentProgram.getUniforms();for(let rn=0;rn<Ze;rn++)Ai.setValue(B,"_gl_DrawID",rn),me.render(Je[rn]/re,wt[rn])}else if(V.isInstancedMesh)me.renderInstances(Bt,De,V.count);else if(j.isInstancedBufferGeometry){let Je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,wt=Math.min(j.instanceCount,Je);me.renderInstances(Bt,De,wt)}else me.render(Bt,De)};function Hf(S,F,j,$){P!==null&&S.isNodeMaterial&&P.setObject($,S),at===!0&&Ot.setState(S,j,!1),S.transparent===!0&&S.side===hi&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,Wo(S,F,$),S.side=ms,S.needsUpdate=!0,Wo(S,F,$),S.side=hi):Wo(S,F,$)}this.compile=function(S,F,j=null){j===null&&(j=S),P!==null&&P.renderStart(S,F,j),M=yt.get(j),M.init(F),v.push(M),j.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),S!==j&&S.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),M.setupLights(),P!==null&&P.updateLights(M.state.lightsArray),ct=this.localClippingEnabled,at=Ot.init(this.clippingPlanes,ct),at===!0&&Ot.setGlobalState(this.clippingPlanes,F),P!==null&&$t.render(M.state.shadowsArray,j,F);let $=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Et=V.material;if(Et)if(Array.isArray(Et))for(let At=0;At<Et.length;At++){let St=Et[At];Hf(St,j,F,V),$.add(St)}else Hf(Et,j,F,V),$.add(Et)}),M=v.pop(),P!==null&&P.renderEnd(),$},this.compileAsync=function(S,F,j=null){let $=this.compile(S,F,j);return new Promise(V=>{function Et(){if($.forEach(function(At){let It=J.get(At).currentProgram;(It===void 0||It.isReady())&&$.delete(At)}),$.size===0){V(S);return}setTimeout(Et,10)}ie.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Xh=null;function Uy(S){Xh&&Xh(S)}function Uf(){bs.stop()}function $f(){bs.start()}let bs=new uy;bs.setAnimationLoop(Uy),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(S){Xh=S,Ft.setAnimationLoop(S),S===null?bs.stop():bs.start()},Ft.addEventListener("sessionstart",Uf),Ft.addEventListener("sessionend",$f),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;P!==null&&P.renderStart(S,F);let j=Ft.enabled===!0&&Ft.isPresenting===!0,$=L!==null&&(it===null||j)&&L.begin(R,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(F),F=Ft.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,F,it),M=yt.get(S,v.length),M.init(F),M.state.textureUnits=W.getTextureUnits(),v.push(M),ht.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(ht,ji,F.reversedDepth),ct=this.localClippingEnabled,at=Ot.init(this.clippingPlanes,ct),T=vt.get(S,D.length),T.init(),D.push(T),Ft.enabled===!0&&Ft.isPresenting===!0){let At=R.xr.getDepthSensingMesh();At!==null&&jh(At,F,-1/0,R.sortObjects)}jh(S,F,0,R.sortObjects),T.finish(),P!==null&&P.updateLights(M.state.lightsArray),R.sortObjects===!0&&T.sort(ot,Ht),Jt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Jt&&zt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ot.beginShadows();let V=M.state.shadowsArray;if($t.render(V,S,F),at===!0&&Ot.endShadows(),($&&L.hasRenderPass())===!1){let At=T.opaque,St=T.transmissive;if(M.setupLights(),F.isArrayCamera){let It=F.cameras;if(St.length>0)for(let Ct=0,Kt=It.length;Ct<Kt;Ct++){let ne=It[Ct];Gf(At,St,S,ne)}Jt&&zt.render(S);for(let Ct=0,Kt=It.length;Ct<Kt;Ct++){let ne=It[Ct];Vf(T,S,ne,ne.viewport)}}else St.length>0&&Gf(At,St,S,F),Jt&&zt.render(S),Vf(T,S,F)}it!==null&&Y===0&&(W.updateMultisampleRenderTarget(it),W.updateRenderTargetMipmap(it)),$&&L.end(R),S.isScene===!0&&S.onAfterRender(R,S,F),Mt.resetDefaultState(),U=-1,K=null,v.pop(),v.length>0?(M=v[v.length-1],W.setTextureUnits(M.state.textureUnits),at===!0&&Ot.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,D.pop(),D.length>0?T=D[D.length-1]:T=null,P!==null&&P.renderEnd()};function jh(S,F,j,$){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)M.pushLightProbeGrid(S);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(nt)){$&&Ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ht);let At=st.update(S),St=S.material;St.visible&&T.push(S,At,St,j,Ut.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(nt))){let At=st.update(S),St=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ut.copy(S.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ut.copy(At.boundingSphere.center)),Ut.applyMatrix4(S.matrixWorld).applyMatrix4(ht)),Array.isArray(St)){let It=At.groups;for(let Ct=0,Kt=It.length;Ct<Kt;Ct++){let ne=It[Ct],Bt=St[ne.materialIndex];Bt&&Bt.visible&&T.push(S,At,Bt,j,Ut.z,ne,F)}}else St.visible&&T.push(S,At,St,j,Ut.z,null,F)}}let Et=S.children;for(let At=0,St=Et.length;At<St;At++)jh(Et[At],F,j,$)}function Vf(S,F,j,$){let{opaque:V,transmissive:Et,transparent:At}=S;M.setupLightsView(j),at===!0&&Ot.setGlobalState(R.clippingPlanes,j),$&&_.viewport(tt.copy($)),V.length>0&&zo(V,F,j),Et.length>0&&zo(Et,F,j),At.length>0&&zo(At,F,j),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Gf(S,F,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[$.id]===void 0){let Bt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[$.id]=new li(1,1,{generateMipmaps:!0,type:Bt?Ki:di,minFilter:ys,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let Et=M.state.transmissionRenderTarget[$.id],At=$.viewport||tt;Et.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);let St=R.getRenderTarget(),It=R.getActiveCubeFace(),Ct=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(Zt),Yt=R.getClearAlpha(),Yt<1&&R.setClearColor(16777215,.5),R.clear(),Jt&&zt.render(j);let Kt=R.toneMapping;R.toneMapping=Wi;let ne=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),M.setupLightsView($),at===!0&&Ot.setGlobalState(R.clippingPlanes,$),zo(S,j,$),W.updateMultisampleRenderTarget(Et),W.updateRenderTargetMipmap(Et),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ce=0,De=F.length;ce<De;ce++){let be=F[ce],{object:me,geometry:Je,material:wt,group:Ze}=be;if(wt.side===hi&&me.layers.test($.layers)){let re=wt.side;wt.side=Ge,wt.needsUpdate=!0,Jf(me,j,$,Je,wt,Ze),wt.side=re,wt.needsUpdate=!0,Bt=!0}}Bt===!0&&(W.updateMultisampleRenderTarget(Et),W.updateRenderTargetMipmap(Et))}R.setRenderTarget(St,It,Ct),R.setClearColor(Zt,Yt),ne!==void 0&&($.viewport=ne),R.toneMapping=Kt}function zo(S,F,j){let $=F.isScene===!0?F.overrideMaterial:null;for(let V=0,Et=S.length;V<Et;V++){let At=S[V],{object:St,geometry:It,group:Ct}=At,Kt=At.material;Kt.allowOverride===!0&&$!==null&&(Kt=$),St.layers.test(j.layers)&&Jf(St,F,j,It,Kt,Ct)}}function Jf(S,F,j,$,V,Et){P!==null&&V.isNodeMaterial&&P.setObject(S,V),S.onBeforeRender(R,F,j,$,V,Et),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(R,F,j,$,S,Et),V.transparent===!0&&V.side===hi&&V.forceSinglePass===!1?(V.side=Ge,V.needsUpdate=!0,R.renderBufferDirect(j,F,$,V,S,Et),V.side=ms,V.needsUpdate=!0,R.renderBufferDirect(j,F,$,V,S,Et),V.side=hi):R.renderBufferDirect(j,F,$,V,S,Et),S.onAfterRender(R,F,j,$,V,Et)}function Wo(S,F,j){F.isScene!==!0&&(F=qt);let $=J.get(S),V=M.state.lights,Et=M.state.shadowsArray,At=V.state.version,St=gt.getParameters(S,V.state,Et,F,j,M.state.lightProbeGridArray),It=gt.getProgramCacheKey(St),Ct=$.programs;$.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,$.fog=F.fog;let Kt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;$.envMap=ut.get(S.envMap||$.environment,Kt),$.envMapRotation=$.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",sn),Ct=new Map,$.programs=Ct);let ne=Ct.get(It);if(ne!==void 0){if($.currentProgram===ne&&$.lightsStateVersion===At)return Qf(S,St),ne}else St.uniforms=gt.getUniforms(S),P!==null&&S.isNodeMaterial&&P.build(S,j,St),S.onBeforeCompile(St,R),ne=gt.acquireProgram(St,It),Ct.set(It,ne),$.uniforms=St.uniforms;let Bt=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Bt.clippingPlanes=Ot.uniform),Qf(S,St),$.needsLights=Jy(S),$.lightsStateVersion=At,$.needsLights&&(Bt.ambientLightColor.value=V.state.ambient,Bt.lightProbe.value=V.state.probe,Bt.sunLights.value=V.state.sun,Bt.sunLightShadows.value=V.state.sunShadow,Bt.directionalLights.value=V.state.directional,Bt.directionalLightShadows.value=V.state.directionalShadow,Bt.spotLights.value=V.state.spot,Bt.spotLightShadows.value=V.state.spotShadow,Bt.rectAreaLights.value=V.state.rectArea,Bt.ltc_1.value=V.state.rectAreaLTC1,Bt.ltc_2.value=V.state.rectAreaLTC2,Bt.pointLights.value=V.state.point,Bt.pointLightShadows.value=V.state.pointShadow,Bt.hemisphereLights.value=V.state.hemi,Bt.sunShadowMatrix.value=V.state.sunShadowMatrix,Bt.sunShadowCascade.value=V.state.sunShadowCascade,Bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Bt.spotLightMatrix.value=V.state.spotLightMatrix,Bt.spotLightMap.value=V.state.spotLightMap,Bt.pointShadowMatrix.value=V.state.pointShadowMatrix),$.lightProbeGrid=M.state.lightProbeGridArray.length>0,$.currentProgram=ne,$.uniformsList=null,ne}function Yf(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=ea.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Qf(S,F){let j=J.get(S);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function $y(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let j=0,$=S.length;j<$;j++){let V=S[j];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function Vy(S,F,j,$,V){F.isScene!==!0&&(F=qt),W.resetTextureUnits();let Et=F.fog,At=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?F.environment:null,St=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:se.workingColorSpace,It=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ct=ut.get($.envMap||At,It),Kt=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ne=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Bt=!!j.morphAttributes.position,ce=!!j.morphAttributes.normal,De=!!j.morphAttributes.color,be=Wi;$.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(be=R.toneMapping);let me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Je=me!==void 0?me.length:0,wt=J.get($),Ze=M.state.lights;if(at===!0&&(ct===!0||S!==K)){let ve=S===K&&$.id===U;Ot.setState($,S,ve)}let re=!1;$.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ze.state.version||wt.outputColorSpace!==St||V.isBatchedMesh&&wt.batching===!1||!V.isBatchedMesh&&wt.batching===!0||V.isBatchedMesh&&wt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&wt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&wt.instancing===!1||!V.isInstancedMesh&&wt.instancing===!0||V.isSkinnedMesh&&wt.skinning===!1||!V.isSkinnedMesh&&wt.skinning===!0||V.isInstancedMesh&&wt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&wt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&wt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&wt.instancingMorph===!1&&V.morphTexture!==null||wt.envMap!==Ct||$.fog===!0&&wt.fog!==Et||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Ot.numPlanes||wt.numIntersection!==Ot.numIntersection)||wt.vertexAlphas!==Kt||wt.vertexTangents!==ne||wt.morphTargets!==Bt||wt.morphNormals!==ce||wt.morphColors!==De||wt.toneMapping!==be||wt.morphTargetsCount!==Je||!!wt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,wt.__version=$.version);let Ai=wt.currentProgram;re===!0&&(Ai=Wo($,F,V),P&&$.isNodeMaterial&&P.onUpdateProgram($,Ai,wt));let rn=!1,Vn=!1,js=!1,fe=Ai.getUniforms(),we=wt.uniforms;if(_.useProgram(Ai.program)&&(rn=!0,Vn=!0,js=!0),$.id!==U&&(U=$.id,Vn=!0),wt.needsLights){let ve=$y(M.state.lightProbeGridArray,V);wt.lightProbeGrid!==ve&&(wt.lightProbeGrid=ve,Vn=!0)}if(rn||K!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),fe.setValue(B,"projectionMatrix",S.projectionMatrix),fe.setValue(B,"viewMatrix",S.matrixWorldInverse);let Jn=fe.map.cameraPosition;Jn!==void 0&&Jn.setValue(B,pt.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&fe.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&fe.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,Vn=!0,js=!0)}if(wt.needsLights&&(Ze.state.sunShadowMap.length>0&&fe.setValue(B,"sunShadowMap",Ze.state.sunShadowMap,W),Ze.state.directionalShadowMap.length>0&&fe.setValue(B,"directionalShadowMap",Ze.state.directionalShadowMap,W),Ze.state.spotShadowMap.length>0&&fe.setValue(B,"spotShadowMap",Ze.state.spotShadowMap,W),Ze.state.pointShadowMap.length>0&&fe.setValue(B,"pointShadowMap",Ze.state.pointShadowMap,W)),V.isSkinnedMesh){fe.setOptional(B,V,"bindMatrix"),fe.setOptional(B,V,"bindMatrixInverse");let ve=V.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),fe.setValue(B,"boneTexture",ve.boneTexture,W))}V.isBatchedMesh&&(fe.setOptional(B,V,"batchingTexture"),fe.setValue(B,"batchingTexture",V._matricesTexture,W),fe.setOptional(B,V,"batchingIdTexture"),fe.setValue(B,"batchingIdTexture",V._indirectTexture,W),fe.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&fe.setValue(B,"batchingColorTexture",V._colorsTexture,W));let Gn=j.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&O.update(V,j,Ai),(Vn||wt.receiveShadow!==V.receiveShadow)&&(wt.receiveShadow=V.receiveShadow,fe.setValue(B,"receiveShadow",V.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&F.environment!==null&&(we.envMapIntensity.value=F.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=OM()),Vn){if(fe.setValue(B,"toneMappingExposure",R.toneMappingExposure),wt.needsLights&&Gy(we,js),Et&&$.fog===!0&&Nt.refreshFogUniforms(we,Et),Nt.refreshMaterialUniforms(we,$,Q,G,M.state.transmissionRenderTarget[S.id]),wt.needsLights&&wt.lightProbeGrid){let ve=wt.lightProbeGrid;we.probesSH.value=ve.texture,we.probesMin.value.copy(ve.boundingBox.min),we.probesMax.value.copy(ve.boundingBox.max),we.probesResolution.value.copy(ve.resolution)}ea.upload(B,Yf(wt),we,W)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ea.upload(B,Yf(wt),we,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&fe.setValue(B,"center",V.center),fe.setValue(B,"modelViewMatrix",V.modelViewMatrix),fe.setValue(B,"normalMatrix",V.normalMatrix),fe.setValue(B,"modelMatrix",V.matrixWorld),$.uniformsGroups!==void 0){let ve=$.uniformsGroups;for(let Jn=0,zs=ve.length;Jn<zs;Jn++){let jf=ve[Jn];rt.update(jf,Ai),rt.bind(jf,Ai)}}return Ai}function Gy(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Jy(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,F,j){let $=J.get(S);$.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),J.get(S.texture).__webglTexture=F,J.get(S.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let j=J.get(S);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,j=0){it=S,X=F,Y=j;let $=null,V=!1,Et=!1;if(S){let St=J.get(S);if(St.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(B.FRAMEBUFFER,St.__webglFramebuffer),tt.copy(S.viewport),Lt.copy(S.scissor),mt=S.scissorTest,_.viewport(tt),_.scissor(Lt),_.setScissorTest(mt),U=-1;return}else if(St.__webglFramebuffer===void 0)W.setupRenderTarget(S);else if(St.__hasExternalTextures)W.rebindTextures(S,J.get(S.texture).__webglTexture,J.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Kt=S.depthTexture;if(St.__boundDepthTexture!==Kt){if(Kt!==null&&J.has(Kt)&&(S.width!==Kt.image.width||S.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(S)}}let It=S.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);let Ct=J.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ct[F])?$=Ct[F][j]:$=Ct[F],V=!0):S.samples>0&&W.useMultisampledRTT(S)===!1?$=J.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?$=Ct[j]:$=Ct,tt.copy(S.viewport),Lt.copy(S.scissor),mt=S.scissorTest}else tt.copy(Tt).multiplyScalar(Q).floor(),Lt.copy(Vt).multiplyScalar(Q).floor(),mt=ae;if(j!==0&&($=q),_.bindFramebuffer(B.FRAMEBUFFER,$)&&_.drawBuffers(S,$),_.viewport(tt),_.scissor(Lt),_.setScissorTest(mt),V){let St=J.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,j)}else if(Et){let St=F;for(let It=0;It<S.textures.length;It++){let Ct=J.get(S.textures[It]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+It,Ct.__webglTexture,j,St)}}else if(S!==null&&j!==0){let St=J.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,St.__webglTexture,j)}U=-1};function Xf(S){let F=J.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=w.textureFormatReadable(S.format),F.__typeReadable=w.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,j,$,V,Et,At,St=0){if(!(S&&S.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){_.bindFramebuffer(B.FRAMEBUFFER,It);try{let Ct=S.textures[St],Kt=Ct.format,ne=Ct.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+St);let Bt=Xf(Ct);if(Bt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-$&&j>=0&&j<=S.height-V&&B.readPixels(F,j,$,V,xt.convert(Kt),xt.convert(ne),Et)}finally{let Ct=it!==null?J.get(it).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,F,j,$,V,Et,At,St=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It)if(F>=0&&F<=S.width-$&&j>=0&&j<=S.height-V){_.bindFramebuffer(B.FRAMEBUFFER,It);let Ct=S.textures[St],Kt=Ct.format,ne=Ct.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+St);let Bt=Xf(Ct);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),B.readPixels(F,j,$,V,xt.convert(Kt),xt.convert(ne),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let De=it!==null?J.get(it).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,De);let be=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await N0(B,be,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ce),B.deleteSync(be),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,j=0){let $=Math.pow(2,-j),V=Math.floor(S.image.width*$),Et=Math.floor(S.image.height*$),At=F!==null?F.x:0,St=F!==null?F.y:0;W.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,At,St,V,Et),_.unbindTexture()},this.copyTextureToTexture=function(S,F,j=null,$=null,V=0,Et=0){let At,St,It,Ct,Kt,ne,Bt,ce,De,be=S.isCompressedTexture?S.mipmaps[Et]:S.image;if(j!==null)At=j.max.x-j.min.x,St=j.max.y-j.min.y,It=j.isBox3?j.max.z-j.min.z:1,Ct=j.min.x,Kt=j.min.y,ne=j.isBox3?j.min.z:0;else{let we=Math.pow(2,-V);At=Math.floor(be.width*we),St=Math.floor(be.height*we),S.isDataArrayTexture?It=be.depth:S.isData3DTexture?It=Math.floor(be.depth*we):It=1,Ct=0,Kt=0,ne=0}$!==null?(Bt=$.x,ce=$.y,De=$.z):(Bt=0,ce=0,De=0);let me=xt.convert(F.format),Je=xt.convert(F.type),wt;F.isData3DTexture?(W.setTexture3D(F,0),wt=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(W.setTexture2DArray(F,0),wt=B.TEXTURE_2D_ARRAY):(W.setTexture2D(F,0),wt=B.TEXTURE_2D),_.activeTexture(B.TEXTURE0),_.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let Ze=_.getParameter(B.UNPACK_ROW_LENGTH),re=_.getParameter(B.UNPACK_IMAGE_HEIGHT),Ai=_.getParameter(B.UNPACK_SKIP_PIXELS),rn=_.getParameter(B.UNPACK_SKIP_ROWS),Vn=_.getParameter(B.UNPACK_SKIP_IMAGES);_.pixelStorei(B.UNPACK_ROW_LENGTH,be.width),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,be.height),_.pixelStorei(B.UNPACK_SKIP_PIXELS,Ct),_.pixelStorei(B.UNPACK_SKIP_ROWS,Kt),_.pixelStorei(B.UNPACK_SKIP_IMAGES,ne);let js=S.isDataArrayTexture||S.isData3DTexture,fe=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let we=J.get(S),Gn=J.get(F),ve=J.get(we.__renderTarget),Jn=J.get(Gn.__renderTarget);_.bindFramebuffer(B.READ_FRAMEBUFFER,ve.__webglFramebuffer),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let zs=0;zs<It;zs++)js&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,J.get(S).__webglTexture,V,ne+zs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,J.get(F).__webglTexture,Et,De+zs)),B.blitFramebuffer(Ct,Kt,At,St,Bt,ce,At,St,B.DEPTH_BUFFER_BIT,B.NEAREST);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||J.has(S)){let we=J.get(S),Gn=J.get(F);_.bindFramebuffer(B.READ_FRAMEBUFFER,I),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let ve=0;ve<It;ve++)js?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,V,ne+ve):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,V),fe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gn.__webglTexture,Et,De+ve):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gn.__webglTexture,Et),V!==0?B.blitFramebuffer(Ct,Kt,At,St,Bt,ce,At,St,B.COLOR_BUFFER_BIT,B.NEAREST):fe?B.copyTexSubImage3D(wt,Et,Bt,ce,De+ve,Ct,Kt,At,St):B.copyTexSubImage2D(wt,Et,Bt,ce,Ct,Kt,At,St);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else fe?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(wt,Et,Bt,ce,De,At,St,It,me,Je,be.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(wt,Et,Bt,ce,De,At,St,It,me,be.data):B.texSubImage3D(wt,Et,Bt,ce,De,At,St,It,me,Je,be):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,Bt,ce,At,St,me,Je,be.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,Bt,ce,be.width,be.height,me,be.data):B.texSubImage2D(B.TEXTURE_2D,Et,Bt,ce,At,St,me,Je,be);_.pixelStorei(B.UNPACK_ROW_LENGTH,Ze),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,re),_.pixelStorei(B.UNPACK_SKIP_PIXELS,Ai),_.pixelStorei(B.UNPACK_SKIP_ROWS,rn),_.pixelStorei(B.UNPACK_SKIP_IMAGES,Vn),Et===0&&F.generateMipmaps&&B.generateMipmap(wt),_.unbindTexture()},this.initRenderTarget=function(S){J.get(S).__webglFramebuffer===void 0&&W.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?W.setTextureCube(S,0):S.isData3DTexture?W.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?W.setTexture2DArray(S,0):W.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){X=0,Y=0,it=null,_.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var xy={type:"change"},Pf={type:"start"},by={type:"end"},Jh=new ks,vy=new Ei,qM=Math.cos(70*pf.DEG2RAD),Ne=new C,ui=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Of=1e-6,Yh=class extends Bo{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Li,this._lastTargetPosition=new C,this._quat=new Li().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xr,this._sphericalDelta=new Xr,this._scale=1,this._panOffset=new C,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new C,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HM.bind(this),this._onPointerDown=kM.bind(this),this._onPointerUp=UM.bind(this),this._onContextMenu=XM.bind(this),this._onMouseWheel=GM.bind(this),this._onKeyDown=JM.bind(this),this._onTouchStart=YM.bind(this),this._onTouchMove=QM.bind(this),this._onMouseDown=$M.bind(this),this._onMouseMove=VM.bind(this),this._interceptControlDown=jM.bind(this),this._interceptControlUp=zM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xy),this.update(),this.state=ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ui:n>Math.PI&&(n-=ui),s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ne.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Jh.origin.copy(this.object.position),Jh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jh.direction))<qM?this.object.lookAt(this.target):(vy.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jh.intersectPlane(vy,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Of||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Of||this._lastTargetPosition.distanceToSquared(this.target)>Of?(this.dispatchEvent(xy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ui/60*this.autoRotateSpeed*t:ui/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ne.copy(s).sub(this.target);let r=Ne.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/e.clientHeight),this._rotateUp(ui*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/e.clientHeight),this._rotateUp(ui*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function kM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function HM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function UM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(by),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $M(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case fs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case fs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Pf)}function VM(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function GM(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(Pf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(by))}function JM(i){this.enabled!==!1&&this._handleKeyDown(i)}function YM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Pf)}function QM(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function XM(i){this.enabled!==!1&&i.preventDefault()}function jM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qh=class extends qs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new cs;t.deleteAttribute("uv");let e=new Vs({side:Ge}),n=new Vs,s=new Io(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new _e(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ho(t,n,6),o=new Be;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new _e(t,sa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new _e(t,sa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new _e(t,sa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new _e(t,sa(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new _e(t,sa(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new _e(t,sa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function sa(i){return new Lo({color:0,emissive:16777215,emissiveIntensity:i})}var qf={width:70,height:100,thickness:3,cornerRadius:4,holeWidth:24,holeHeight:4.2,holeY:7,holeType:"slot",holeDiameter:5,transmission:.96,roughness:.12,ior:1.49,edgeTint:"#c9e0eb",backgroundWhite:.45,whiteOpacity:1,printOpacity:.85,printSide:"front",autoRotate:!1,exposure:1,lightIntensity:1,viewBackground:"studio",showWhite:!1,showEdges:!1,showPrint:!0},ri=(i,t,e)=>Math.max(t,Math.min(e,i)),ai=(i,t)=>Number.isFinite(Number(i))?Number(i):t;function Sy(i,t,e,n,s,r){let a=Math.min(r,n/2,s/2);return i.moveTo(t+a,e),i.lineTo(t+n-a,e),i.quadraticCurveTo(t+n,e,t+n,e+a),i.lineTo(t+n,e+s-a),i.quadraticCurveTo(t+n,e+s,t+n-a,e+s),i.lineTo(t+a,e+s),i.quadraticCurveTo(t,e+s,t,e+s-a),i.lineTo(t,e+a),i.quadraticCurveTo(t,e,t+a,e),i.closePath(),i}function WM(i){let t=Sy(new Hs,-i.width/2,-i.height/2,i.width,i.height,i.cornerRadius),e=i.height/2-i.holeY;if(i.holeType==="circle"&&i.holeDiameter>0){let n=new kn;n.absarc(0,e,i.holeDiameter/2,0,Math.PI*2,!0),t.holes.push(n)}else if(i.holeType!=="none"&&i.holeWidth>0&&i.holeHeight>0){let s=Sy(new kn,-i.holeWidth/2,e-i.holeHeight/2,i.holeWidth,i.holeHeight,i.holeHeight/2).getPoints(20).reverse();t.holes.push(new kn(s))}return t}function ZM(i,t){let e=new Eo(i,32),n=e.getAttribute("position"),s=e.getAttribute("uv");for(let r=0;r<n.count;r++)s.setXY(r,n.getX(r)/t.width+.5,n.getY(r)/t.height+.5);return s.needsUpdate=!0,e}function Ty(i){let t={...qf,...i};t.width=ri(ai(t.width,70),25,200),t.height=ri(ai(t.height,100),35,250),t.thickness=ri(ai(t.thickness,3),.5,12),t.cornerRadius=ri(ai(t.cornerRadius,4),0,Math.min(t.width,t.height)/2),t.holeDiameter=ri(ai(t.holeDiameter,5),0,t.width*.5),t.holeWidth=ri(ai(t.holeWidth,12),0,t.width*.7),t.holeHeight=ri(ai(t.holeHeight,3),0,t.height*.2);let e=t.holeType==="circle"?t.holeDiameter/2:t.holeHeight/2;return t.holeY=ri(ai(t.holeY,6),e+.8,t.height-e-.8),t}function KM(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d");for(let n=0;n<16;n++)for(let s=0;s<16;s++)t.fillStyle=(s+n)%2?"#c5d0d8":"#eef3f5",t.fillRect(s*32,n*32,32,32);let e=new $r(i);return e.colorSpace=Ue,e.wrapS=e.wrapT=Cr,e.repeat.set(12,12),e}function Ey(i,{onError:t}={}){if(!i)throw new Error("3D \u9884\u89C8\u9700\u8981\u4E00\u4E2A\u6709\u6548\u7684\u5BB9\u5668\u3002");let e;try{e=new $h({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch(dt){let G=`\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u521B\u5EFA WebGL 3D \u9884\u89C8\uFF1A${dt.message}\u3002\u8BF7\u4F7F\u7528\u4E8C\u7EF4\u7F16\u8F91\u9884\u89C8\u3002`;throw t?.(G,dt),new Error(G,{cause:dt})}e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.outputColorSpace=Ue,e.toneMapping=Co,e.toneMappingExposure=1,e.domElement.setAttribute("aria-label","\u53EF\u62D6\u52A8\u65CB\u8F6C\u7684\u900F\u660E\u4E9A\u514B\u529B\u5DE5\u724C\u4E09\u7EF4\u9884\u89C8"),e.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:none",i.appendChild(e.domElement);let n=new qs,s=new $e(32,1,.1,5e3),r=new Yh(s,e.domElement);r.enableDamping=!0,r.dampingFactor=.075,r.minDistance=45,r.maxDistance=900,r.autoRotateSpeed=1.2,r.enablePan=!0;let a=new Nn;n.add(a);let o=new ia(e),l=new Qh,c=o.fromScene(l,.04);n.environment=c.texture,l.dispose(),o.dispose();let h=new Do(15792127,6713472,2.1),d=new Qr(16777215,3.5);d.position.set(-80,100,140);let u=new Qr(12970495,2.4);u.position.set(100,50,-110),n.add(h,d,u);let f=KM(),p=new qn({color:"#e7edf0",side:hi,toneMapped:!1}),y=new _e(new $s(2e3,2e3),p);y.renderOrder=-100,n.add(y);let m=Ty(qf),g="",b,E,x,T,M,D=!1,v=0,L=0,R=0,A={},P={},q={},I,k=dt=>{dt.preventDefault(),t?.("WebGL \u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931\u3002\u8BF7\u4FDD\u5B58\u914D\u7F6E\u540E\u5237\u65B0\u9875\u9762\uFF0C\u4E8C\u7EF4\u5BFC\u51FA\u4ECD\u53EF\u4F7F\u7528\u3002")};e.domElement.addEventListener("webglcontextlost",k,!1);function X(){b&&(a.remove(b),b.geometry.dispose(),b.material.dispose()),E&&(a.remove(E),E.material.dispose()),x&&(a.remove(x),x.material.dispose()),T&&(a.remove(T),T.geometry.dispose(),T.material.dispose()),M?.dispose(),b=E=x=T=M=void 0}function Y(dt){X();let G=WM(dt),Q=new To(G,{depth:dt.thickness,bevelEnabled:!1,steps:1,curveSegments:32});Q.translate(0,0,-dt.thickness/2),b=new _e(Q,new Mo({color:"#ffffff",metalness:0,opacity:1,transparent:!1,transmission:.96,roughness:.12,ior:1.49,thickness:dt.thickness,attenuationDistance:150,attenuationColor:dt.edgeTint,clearcoat:.6,clearcoatRoughness:.08,side:hi,envMapIntensity:1.1})),b.name="Acrylic \u2014 continuous solid including photo window",b.renderOrder=0,a.add(b),M=ZM(G,dt);let ot={transparent:!0,side:hi,depthWrite:!1,alphaTest:.001,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1};E=new _e(M,new qn({...ot,color:"#ffffff"})),x=new _e(M,new qn({...ot,color:"#ffffff"})),E.name="Single-side white ink",x.name="Single-side colour ink",a.add(E,x),T=new uo(new mo(Q,28),new Ur({color:"#62bad2",transparent:!0,opacity:.5,depthWrite:!1})),T.renderOrder=20,a.add(T)}function it(dt,G){return G?(G!==P[dt]&&(q[dt]?.dispose(),q[dt]=new $r(G),q[dt].colorSpace=Ue,q[dt].anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),P[dt]=G),q[dt].needsUpdate=!0,q[dt]):(q[dt]?.dispose(),delete q[dt],delete P[dt],null)}function U(dt){if(dt.colorCanvas)return dt.colorCanvas;if(!dt.backgroundCanvas&&!dt.inkCanvas)return dt.compositeCanvas;let G=dt.inkCanvas||dt.backgroundCanvas;I||=document.createElement("canvas"),I.width=G.width,I.height=G.height;let Q=I.getContext("2d");for(let ot of[dt.backgroundCanvas,dt.inkCanvas])ot&&Q.drawImage(ot,0,0,G.width,G.height);return I}function K(dt={},G=A){if(D)return;m=Ty({...m,...dt}),A=G||{};let Q=m,ot=["width","height","thickness","cornerRadius","holeWidth","holeHeight","holeY","holeType","holeDiameter"].map(nt=>Q[nt]).join("|");ot!==g&&(Y(Q),g=ot),b.material.transmission=ri(ai(Q.transmission,.96),0,1),b.material.roughness=ri(ai(Q.roughness,.12),0,1),b.material.ior=ri(ai(Q.ior,1.49),1,2.333),b.material.attenuationColor.set(Q.edgeTint||"#c9e0eb"),b.material.thickness=Q.thickness,E.material.map=it("white",A.whiteCanvas),x.material.map=it("colour",U(A)),E.material.needsUpdate=!0,x.material.needsUpdate=!0,E.material.opacity=ri(ai(Q.whiteOpacity,1),0,1),x.material.opacity=A.printOpacityBaked?1:ri(ai(Q.printOpacity,.85),0,1);let Ht=Q.printSide==="back"?-1:1;E.position.z=Ht*(Q.thickness/2+.13),x.position.z=Ht*(Q.thickness/2+.155),E.visible=Q.showPrint!==!1&&!!E.material.map,x.visible=Q.showPrint!==!1&&!Q.showWhite&&!!x.material.map,T.visible=!!Q.showEdges,r.autoRotate=!!Q.autoRotate,e.toneMappingExposure=ri(ai(Q.exposure,1),.2,3);let Tt=ri(ai(Q.lightIntensity,1),0,4);h.intensity=2.1*Tt,d.intensity=3.5*Tt,u.intensity=2.4*Tt,b.material.envMapIntensity=1.1*Tt;let ae=Q.viewBackground==="dark"?"#141e2c":"#e7edf0";n.background=new Qt(ae),p.color.set(Q.viewBackground==="checker"?"#ffffff":ae),p.map=Q.viewBackground==="checker"?f:null,p.needsUpdate=!0,Lt()}function tt(dt="perspective"){if(D)return;let G=Math.max(m.width,m.height)*2.45,Q={front:[0,0,1],back:[0,0,-1],left:[-1,.08,.28],right:[1,.08,.28],edge:[1,.06,.025],top:[0,1,.32],perspective:[.34,.16,1],threequarter:[.55,.22,1]},ot=new C(...Q[dt]||Q.perspective).normalize();r.target.set(0,0,0),s.position.copy(ot.multiplyScalar(G)),s.up.set(0,1,0),s.lookAt(r.target),r.update(),Lt()}function Lt(){if(D)return;let dt=s.position.clone().sub(r.target).normalize();y.position.copy(r.target).addScaledVector(dt,-Math.max(m.height,m.width)*1.5),y.quaternion.copy(s.quaternion);let G=(s.position.z-r.target.z)*(m.printSide==="back"?-1:1)>0;E&&x&&(E.renderOrder=G?10:11,x.renderOrder=G?11:10,E.material.depthTest=G,x.material.depthTest=G),e.render(n,s),L++}function mt(){if(D)return;let dt=i.getBoundingClientRect(),G=Math.max(1,dt.width),Q=Math.max(1,dt.height);e.setSize(G,Q,!1),s.aspect=G/Q,s.updateProjectionMatrix(),Lt()}let Zt=new ResizeObserver(mt);Zt.observe(i);function Yt(dt){D||(v=requestAnimationFrame(Yt),!(document.hidden||dt-R<1e3/40)&&(!i.getClientRects().length||i.hidden||(R=dt,r.update(),Lt())))}return K(qf,{}),tt("perspective"),mt(),v=requestAnimationFrame(Yt),{update:K,setView:tt,resize:mt,snapshot(){return Lt(),e.domElement.toDataURL("image/png")},getDebugInfo(){return{available:!D,revision:"186",frames:L,dimensionsMm:[m.width,m.height,m.thickness],physicalHoles:m.holeType==="none"?0:1,photoWindowIsPhysicalHole:!1,transmission:b?.material.transmission,opacity:b?.material.opacity,printSide:m.printSide,layers:{colour:!!x?.material.map,white:!!E?.material.map},colourDepthTest:x?.material.depthTest,whiteDepthTest:E?.material.depthTest,renderer:e.info.render,memory:{...e.info.memory}}},dispose(){D||(D=!0,cancelAnimationFrame(v),Zt.disconnect(),r.dispose(),e.domElement.removeEventListener("webglcontextlost",k),X(),Object.values(q).forEach(dt=>dt.dispose()),f.dispose(),y.geometry.dispose(),p.dispose(),c.dispose(),n.environment=null,e.dispose(),e.forceContextLoss(),e.domElement.remove())}}}var My="./jiangxi-TXA3CI4N.woff2";var Ly="./alimama-XNOMVEWS.woff2";var wy="./wenkai-2434CMUD.woff2";var Dy="./hanchan-G2YFDMZQ.woff2";var Ry="./smiley-5RKHB7II.woff2";var Ay="./logo-3WA64HZF.png";var Iy="./reference-background-V2X7VAMA.png";var pi=700,mi=1e3,kf=[["Jiangxi","\u6C5F\u897F\u62D9\u6977 \xB7 \u624B\u5199\u529B\u91CF",My],["Alimama","\u4E1C\u65B9\u5927\u6977 \xB7 \u9971\u6EE1\u5927\u65B9",Ly],["Wenkai","\u971E\u9E5C\u6587\u6977 \xB7 \u8F7B\u76C8\u7AEF\u6B63",wy],["Hanchan","\u5BD2\u8749\u624B\u5199 \xB7 \u968F\u6027\u7B14\u950B",Dy],["Smiley","\u5F97\u610F\u9ED1 \xB7 \u73B0\u4EE3\u7A84\u9ED1",Ry]],xA=Object.fromEntries(kf.map(([i,t])=>[i,t])),oa={bg:"\u5E95\u677F",dept:"\u90E8\u95E8\u5927\u5B57",assoc:"\u534F\u4F1A\u540D\u79F0",name:"\u59D3\u540D",position:"\u804C\u52A1",slogan:"\u53E3\u53F7",logo:"\u534F\u4F1A\u6807\u5FD7",star:"\u661F\u5149",line:"\u5206\u9694\u7EBF"},By="alumni-badge-studio-v2",en=i=>document.querySelector(i),Xo=i=>{let t=en("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove("show"),2200)},Rt,$n=[],Un=[],ra=-1,jo=!1,vs={};async function oL(){await Promise.all(kf.map(async([i,,t])=>{let e=new FontFace(i,`url(${t})`);await e.load(),document.fonts.add(e)})),vs.logo=await _i.fromURL(Ay),vs.bg=await _i.fromURL(Iy)}function lL(){Rt=new Sl(document.getElementById("c"),{width:pi,height:mi,preserveObjectStacking:!0,backgroundColor:"#ffffff"});let i=en("#canvas-wrap"),t=()=>{let e=i.parentElement.getBoundingClientRect(),n=Math.min((e.height-60)/mi,(e.width-60)/pi,1),s=i.querySelector(".canvas-container");s&&(s.style.transform=`scale(${n})`,s.style.transformOrigin="top left"),i.style.width=Math.round(pi*n)+"px",i.style.height=Math.round(mi*n)+"px",requestAnimationFrame(()=>{Rt&&Rt.calcOffset(),Rt&&Rt.requestRenderAll()})};t(),window.addEventListener("resize",t)}function tn(i,t={}){let e=new jn(i,Object.assign({fontFamily:"Jiangxi",fontSize:120,fill:"#102d52",textAlign:"center",lineHeight:1.05,charSpacing:0,editable:!0,padding:4,shadow:null,stroke:null,strokeWidth:0},t));return e.role=t.role||"dept",e.name=oa[e.role]||"\u6587\u5B57",e}function Qo(i,t,e=90){let n=e*Math.PI/180,s=Math.cos(n),r=Math.sin(n);return new nr({type:"linear",gradientUnits:"percentage",coords:{x1:.5-s/2,y1:.5-r/2,x2:.5+s/2,y2:.5+r/2},colorStops:[{offset:0,color:i},{offset:1,color:t}]})}function cL(i,{select:t=!0}={}){return Rt.add(i),Rt.setActiveObject(i),Rt.requestRenderAll(),nn(),fi(),t&&Oi(),i}function hL(){if(Rt.clear(),Rt.backgroundColor="#ffffff",vs.bg){let r=new _i(vs.bg.getElement(),{left:0,top:0,selectable:!1,evented:!1,objectCaching:!1}),a=Math.max(pi/r.width,mi/r.height);r.scale(a),r.set({left:(pi-r.getScaledWidth())/2,top:(mi-r.getScaledHeight())/2}),r.role="bg",r.name="\u5E95\u677F",Rt.add(r)}else{let r=new Sn({width:pi,height:mi,left:0,top:0,selectable:!1,evented:!1,fill:Qo("#c5e7f3","#eadcf2",135)});r.role="bg",r.name="\u5E95\u677F",Rt.add(r)}let i=tn("\u9879\u76EE\u90E8",{role:"dept",left:350,top:330,originX:"center",originY:"center",fontSize:168,fontFamily:"Jiangxi"});Rt.add(i);let t=tn(`\u6821
\u53CB
\u4EA4
\u6D41
\u53D1
\u5C55
\u534F
\u4F1A`,{role:"assoc",left:596,top:110,fontSize:30,lineHeight:1.28,fontFamily:"Wenkai"});if(Rt.add(t),vs.logo){let r=new _i(vs.logo.getElement(),{left:62,top:66,role:"logo"});r.scaleToWidth(112),r.name=oa.logo,Rt.add(r)}let e=tn("\u59D3\u540D / NAME",{role:"name",left:82,top:742,fontSize:26,fontFamily:"Wenkai",textAlign:"left"});Rt.add(e);let n=tn("\u804C\u52A1 / POSITION",{role:"position",left:82,top:796,fontSize:26,fontFamily:"Wenkai",textAlign:"left"});Rt.add(n);let s=tn("\u70ED\u7231\u53EF\u62B5\u5C81\u6708\u6F2B\u957F",{role:"slogan",left:350,top:906,originX:"center",fontSize:34,fontFamily:"Hanchan"});Rt.add(s),Rt.renderAll(),nn(),fi()}function dL(){return JSON.stringify(Rt.toObject(["role","name"]))}function nn(){if(jo)return;let i=dL();Un[ra]!==i&&(Un=Un.slice(0,ra+1),Un.push(i),Un.length>60&&Un.shift(),ra=Un.length-1)}async function Oy(i){i<0||i>=Un.length||(jo=!0,ra=i,await Rt.loadFromJSON(JSON.parse(Un[i])),Rt.requestRenderAll(),jo=!1,fi(),Oi())}var Fy=()=>Oy(ra-1),Cy=()=>Oy(ra+1);function uL(){if($n.length)return;let i=t=>new Xn(t==="v"?[0,0,0,mi]:[0,0,pi,0],{stroke:"#e4572e",strokeWidth:1,selectable:!1,evented:!1,excludeFromExport:!0,visible:!1});$n=[i("v"),i("h")],Rt.add(...$n)}function fL(i){uL();let t=i.getCenterPoint(),e=8/(Rt.getZoom()||1),n=[pi/2,60,pi-60],s=[mi/2,60,mi-60],r=$n[0],a=$n[1];r.visible=a.visible=!1;for(let o of n)if(Math.abs(t.x-o)<e){i.left+=o-t.x,r.set({x1:o,x2:o,visible:!0});break}for(let o of s)if(Math.abs(t.y-o)<e){i.top+=o-t.y,a.set({y1:o,y2:o,visible:!0});break}}function pL(){$n.forEach(i=>i.visible=!1),Rt.requestRenderAll()}function ke(i,t){return`<div class="row"><label class="lbl">${i}</label><div class="grow">${t}</div></div>`}function Oi(){let i=Rt.getActiveObject(),t=en("#props");if(!i){t.innerHTML='<p class="hint">\u9009\u4E2D\u753B\u5E03\u4E0A\u7684\u5143\u7D20\u540E\u53EF\u8C03\u53C2\u6570</p>';return}let e=i.type==="i-text",n="";n+=ke("\u7C7B\u578B",`<div class="out" style="text-align:left">${i.name||oa[i.role]||i.type}</div>`),e&&(n+=ke("\u5185\u5BB9",`<input type="text" data-p="text" value="${String(i.text).replace(/"/g,"&quot;").replace(/\n/g," / ")}">`),n+=ke("\u5B57\u4F53",`<select data-p="fontFamily">${kf.map(([r,a])=>`<option value="${r}" ${i.fontFamily===r?"selected":""}>${a}</option>`).join("")}</select>`),n+=ke("\u5B57\u53F7",`<input type="range" data-p="fontSize" min="12" max="320" step="1" value="${i.fontSize}"><div class="out">${Math.round(i.fontSize)}</div>`),n+=ke("\u5B57\u8DDD",`<input type="range" data-p="charSpacing" min="-200" max="800" step="10" value="${i.charSpacing}"><div class="out">${i.charSpacing}</div>`),n+=ke("\u884C\u8DDD",`<input type="range" data-p="lineHeight" min="0.6" max="2.6" step="0.02" value="${i.lineHeight}"><div class="out">${Number(i.lineHeight).toFixed(2)}</div>`),n+=ke("\u5BF9\u9F50",'<div class="mini"><button data-align="left">\u5DE6</button><button data-align="center">\u4E2D</button><button data-align="right">\u53F3</button></div>'),n+=ke("\u7C97\u4F53",`<input type="checkbox" data-p="bold" ${i.fontWeight==="bold"?"checked":""}>`));let s=i.fill&&typeof i.fill=="object";n+=ke("\u586B\u8272",`<input type="color" data-p="fillColor" value="${s?i.fill.colorStops?.[0]?.color||"#102d52":i.fill||"#102d52"}">`),n+=ke("\u6E10\u53D8",`<input type="checkbox" data-p="gradOn" ${s?"checked":""}>`),s&&(n+=ke("\u8D77\u59CB",`<input type="color" data-p="gradA" value="${i.fill.colorStops?.[0]?.color||"#102d52"}">`),n+=ke("\u7ED3\u675F",`<input type="color" data-p="gradB" value="${i.fill.colorStops?.[1]?.color||"#2c70ae"}">`),n+=ke("\u89D2\u5EA6",`<input type="range" data-p="gradAngle" min="0" max="180" step="5" value="${i._gradAngle??90}"><div class="out">${i._gradAngle??90}\xB0</div>`)),e&&(n+=ke("\u63CF\u8FB9",`<input type="color" data-p="strokeColor" value="${i.stroke||"#0b1c2e"}">`),n+=ke("\u63CF\u8FB9\u5BBD",`<input type="range" data-p="strokeWidth" min="0" max="16" step="0.5" value="${i.strokeWidth||0}"><div class="out">${i.strokeWidth||0}</div>`)),n+=ke("\u900F\u660E\u5EA6",`<input type="range" data-p="opacity" min="0.05" max="1" step="0.01" value="${i.opacity}"><div class="out">${Math.round(i.opacity*100)}%</div>`),n+=ke("\u4F4D\u7F6E",`<div class="mini"><input type="number" data-p="left" value="${Math.round(i.left)}" title="X"><input type="number" data-p="top" value="${Math.round(i.top)}" title="Y"></div>`),n+=ke("\u65CB\u8F6C",`<input type="range" data-p="angle" min="-180" max="180" step="1" value="${Math.round(i.angle)}"><div class="out">${Math.round(i.angle)}\xB0</div>`),n+='<div class="row"><div class="mini grow"><button data-act="up">\u4E0A\u79FB\u4E00\u5C42</button><button data-act="down">\u4E0B\u79FB\u4E00\u5C42</button></div></div>',n+='<div class="row"><div class="mini grow"><button data-act="dup">\u590D\u5236</button><button data-act="del">\u5220\u9664</button></div></div>',t.innerHTML=n,mL(i)}function mL(i){let t=en("#props");t.querySelectorAll("[data-p]").forEach(e=>{let n=e.dataset.p,s=()=>{n==="text"?i.set("text",e.value):n==="fontFamily"?i.set("fontFamily",e.value):n==="fontSize"?(i.set("fontSize",+e.value),e.parentElement.querySelector(".out").textContent=Math.round(+e.value)):n==="charSpacing"?(i.set("charSpacing",+e.value),e.parentElement.querySelector(".out").textContent=e.value):n==="lineHeight"?(i.set("lineHeight",+e.value),e.parentElement.querySelector(".out").textContent=(+e.value).toFixed(2)):n==="bold"?i.set("fontWeight",e.checked?"bold":"normal"):n==="fillColor"?i.fill&&typeof i.fill=="object"||i.set("fill",e.value):n==="gradOn"?(e.checked?(i._gradC1=i._gradC1||"#102d52",i._gradC2=i._gradC2||"#2c70ae",i.set("fill",Qo(i._gradC1,i._gradC2,i._gradAngle??90))):i.set("fill",i._gradC1||"#102d52"),Oi()):n==="gradA"?(i._gradC1=e.value,i.set("fill",Qo(i._gradC1,i._gradC2||"#2c70ae",i._gradAngle??90))):n==="gradB"?(i._gradC2=e.value,i.set("fill",Qo(i._gradC1||"#102d52",i._gradC2,i._gradAngle??90))):n==="gradAngle"?(i._gradAngle=+e.value,i.set("fill",Qo(i._gradC1||"#102d52",i._gradC2||"#2c70ae",i._gradAngle)),e.parentElement.querySelector(".out").textContent=e.value+"\xB0"):n==="strokeColor"?i.set({stroke:e.value,strokeWidth:i.strokeWidth||2}):n==="strokeWidth"?(i.set("strokeWidth",+e.value),+e.value&&i.set("stroke",i.stroke||"#0b1c2e"),e.parentElement.querySelector(".out").textContent=e.value):n==="opacity"?(i.set("opacity",+e.value),e.parentElement.querySelector(".out").textContent=Math.round(+e.value*100)+"%"):n==="left"?i.set("left",+e.value):n==="top"?i.set("top",+e.value):n==="angle"&&(i.set("angle",+e.value),e.parentElement.querySelector(".out").textContent=e.value+"\xB0"),Rt.requestRenderAll()};e.addEventListener("input",s),e.addEventListener("change",()=>{s(),nn(),(n==="text"||n==="gradOn")&&Oi()})}),t.querySelectorAll("[data-align]").forEach(e=>e.onclick=()=>{i.set("textAlign",e.dataset.align),Rt.requestRenderAll(),nn()}),t.querySelectorAll("[data-act]").forEach(e=>e.onclick=()=>{let n=e.dataset.act;n==="del"&&(Rt.remove(i),Rt.discardActiveObject()),n==="dup"&&i.clone().then(s=>{s.set({left:i.left+24,top:i.top+24}),s.role=i.role,s.name=i.name,Rt.add(s),Rt.setActiveObject(s)}),n==="up"&&Rt.bringObjectForward(i),n==="down"&&Rt.sendObjectBackwards(i),Rt.requestRenderAll(),nn(),fi(),Oi()})}function fi(){let i=en("#layers"),t=Rt.getObjects().filter(n=>n.role!=="guide"),e=Rt.getActiveObject();i.innerHTML=t.slice().reverse().map((n,s)=>{let r=t.length-1-s;return`<li data-i="${r}" class="${n===e?"active":""}"><span class="name">${n.name||oa[n.role]||n.type}</span><span class="eye" data-eye="${r}">${n.visible===!1?"\u25CB":"\u25CF"}</span></li>`}).join(""),i.querySelectorAll("li").forEach(n=>{n.onclick=s=>{if(s.target.dataset.eye!==void 0)return;let r=t[+n.dataset.i];r&&(Rt.setActiveObject(r),Rt.requestRenderAll(),fi(),Oi())}}),i.querySelectorAll("[data-eye]").forEach(n=>n.onclick=s=>{s.stopPropagation();let r=t[+n.dataset.eye];r&&(r.visible=r.visible===!1,Rt.requestRenderAll(),fi(),nn())})}function gL(i){let t={dept:()=>tn("\u9879\u76EE\u90E8",{role:"dept",left:350,top:330,originX:"center",originY:"center",fontSize:140}),assoc:()=>tn(`\u6821
\u53CB
\u4EA4
\u6D41
\u53D1
\u5C55
\u534F
\u4F1A`,{role:"assoc",left:596,top:110,fontSize:30,lineHeight:1.28,fontFamily:"Wenkai"}),name:()=>tn("\u59D3\u540D / NAME",{role:"name",left:82,top:742,fontSize:26,textAlign:"left",fontFamily:"Wenkai"}),position:()=>tn("\u804C\u52A1 / POSITION",{role:"position",left:82,top:796,fontSize:26,textAlign:"left",fontFamily:"Wenkai"}),slogan:()=>tn("\u70ED\u7231\u53EF\u62B5\u5C81\u6708\u6F2B\u957F",{role:"slogan",left:350,top:906,originX:"center",fontSize:34,fontFamily:"Hanchan"}),line:()=>{let n=new Xn([0,0,520,0],{stroke:"#102d52",strokeWidth:3,left:82,top:700});return n.role="line",n.name=oa.line,n},star:()=>tn("\u2733",{role:"star",left:90,top:60,fontSize:56}),logo:()=>{if(!vs.logo)return null;let n=new _i(vs.logo.getElement(),{left:82,top:90});return n.scaleToWidth(112),n.role="logo",n.name=oa.logo,n}},e=t[i]&&t[i]();e&&cL(e)}function yL(){let i=$n.map(o=>o.visible);$n.forEach(o=>o.visible=!1);let t=Rt.toCanvasElement(1);$n.forEach((o,l)=>o.visible=i[l]);let e=document.createElement("canvas");e.width=pi,e.height=mi,e.getContext("2d").drawImage(t,0,0,pi,mi);let n=document.createElement("canvas");n.width=pi,n.height=mi;let s=n.getContext("2d"),r=e.getContext("2d").getImageData(0,0,pi,mi),a=s.createImageData(pi,mi);for(let o=0;o<r.data.length;o+=4){let l=r.data[o+3];a.data[o]=a.data[o+1]=a.data[o+2]=255,a.data[o+3]=Math.min(255,l*4)}return s.putImageData(a,0,0),{colorCanvas:e,whiteCanvas:n,printOpacityBaked:!0,warnings:[]}}function Py(i,t){let e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(e),2e4)}async function _L(){let i=Rt.toDataURL({format:"png",multiplier:1.1811023622047245}),t=await(await fetch(i)).blob();Py(t,`\u6821\u534F\u5DE5\u724C_${new Date().toISOString().slice(0,10)}.png`),Xo("PNG \u5DF2\u5BFC\u51FA\uFF08\u7EA6 300dpi\uFF09")}function Ny(){let i={format:"alumni-badge-canvas",version:2,updatedAt:new Date().toISOString(),design:Rt.toObject(["role","name","_gradC1","_gradC2","_gradAngle"])};Py(new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),`\u6821\u534F\u5DE5\u724C_\u753B\u5E03_${new Date().toISOString().slice(0,10)}.json`),Xo("\u8BBE\u8BA1\u5DF2\u4FDD\u5B58\u4E3A JSON")}async function xL(i){try{let t=JSON.parse(await i.text()),e=t.design||t;jo=!0,await Rt.loadFromJSON(e),jo=!1,Rt.requestRenderAll(),nn(),fi(),Oi(),Xo("\u8BBE\u8BA1\u5DF2\u5BFC\u5165")}catch(t){Xo("\u5BFC\u5165\u5931\u8D25\uFF1A"+t.message)}}var aa=null;function vL(){let i=en("#d3d");i.hidden=!1,requestAnimationFrame(()=>{aa||(aa=Ey(en("#viewer3d"),{onError:t=>Xo("3D \u4E0D\u53EF\u7528\uFF1A"+t)})),qy()})}function qy(){aa&&(aa.update({width:70,height:100,thickness:+en("#d3d-thickness").value,transmission:.96,roughness:.12,depthWrite:!1},yL()),aa.resize())}function bL(){document.addEventListener("click",i=>{let t=i.target.closest("[data-act]")?.dataset.act;t&&(t==="undo"&&Fy(),t==="redo"&&Cy(),t==="png"&&_L(),t==="json"&&Ny(),t==="3d"&&vL(),t==="close3d"&&(en("#d3d").hidden=!0))}),document.querySelectorAll("[data-add]").forEach(i=>i.onclick=()=>gL(i.dataset.add)),en("#file-json").onchange=i=>{i.target.files[0]&&xL(i.target.files[0]),i.target.value=""},en("#d3d-thickness").oninput=qy,document.querySelectorAll("[data-view]").forEach(i=>i.onclick=()=>aa?.setView(i.dataset.view)),document.addEventListener("keydown",i=>{if(i.target.matches("input,textarea,select"))return;let t=i.ctrlKey||i.metaKey;t&&i.key.toLowerCase()==="z"&&(i.preventDefault(),i.shiftKey?Cy():Fy()),t&&i.key.toLowerCase()==="s"&&(i.preventDefault(),Ny()),(i.key==="Delete"||i.key==="Backspace")&&Rt.getActiveObject()&&!Rt.getActiveObject().isEditing&&(i.preventDefault(),Rt.remove(Rt.getActiveObject()),Rt.discardActiveObject(),nn(),fi(),Oi())}),Rt.on("selection:created",()=>{Oi(),fi()}),Rt.on("selection:updated",()=>{Oi(),fi()}),Rt.on("selection:cleared",()=>{Oi(),fi()}),Rt.on("object:moving",i=>{i.target.role!=="bg"&&fL(i.target)}),Rt.on("mouse:up",pL),Rt.on("object:modified",()=>nn()),Rt.on("object:added",()=>fi()),Rt.on("object:removed",()=>fi()),Rt.on("mouse:dblclick",i=>{let t=i.target;t&&t.type==="i-text"&&(Rt.setActiveObject(t),t.enterEditing(),t.selectAll())}),Rt.on("text:editing:exited",()=>nn())}(async function(){try{await oL(),lL();let t=localStorage.getItem(By),e=!1;if(t)try{let n=JSON.parse(t).design;n&&Array.isArray(n.objects)&&n.objects.some(s=>s.role)&&(await Rt.loadFromJSON(n),e=!0)}catch{e=!1}e||hL(),window.__badge=Rt,Rt.requestRenderAll(),setTimeout(()=>{Rt.calcOffset(),Rt.requestRenderAll()},250),bL(),fi(),Oi(),nn(),setInterval(()=>{try{localStorage.setItem(By,JSON.stringify({design:Rt.toObject(["role","name","_gradC1","_gradC2","_gradAngle"])}))}catch{}},1500)}catch(t){console.error(t),document.body.innerHTML=`<pre style="padding:24px;color:#b42318">\u8F7D\u5165\u5931\u8D25\uFF1A${t.message}</pre>`}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
