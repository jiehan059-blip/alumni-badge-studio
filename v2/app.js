(()=>{var jf=Object.defineProperty,zo=(i,t)=>{let e={};for(var n in i)jf(e,n,{get:i[n],enumerable:!0});return t||jf(e,Symbol.toStringTag,{value:"Module"}),e};function Do(i){return Do=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Do(i)}function j0(i){var t=(function(e,n){if(Do(e)!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var r=s.call(e,n||"default");if(Do(r)!="object")return r;throw TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)})(i,"string");return Do(t)=="symbol"?t:t+""}function P(i,t,e){return(t=j0(t))in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var tp=class{constructor(){P(this,"browserShadowBlurConstant",1),P(this,"DPI",96),P(this,"devicePixelRatio",typeof window<"u"?window.devicePixelRatio:1),P(this,"perfLimitSizeTotal",2097152),P(this,"maxCacheSideLimit",4096),P(this,"minCacheSideLimit",256),P(this,"disableStyleCopyPaste",!1),P(this,"enableGLFiltering",!0),P(this,"textureSize",4096),P(this,"forceGLPutImageData",!1),P(this,"cachesBoundsOfCurve",!1),P(this,"fontPaths",{}),P(this,"NUM_FRACTION_DIGITS",4)}},ue=new class extends tp{constructor(i){super(),this.configure(i)}configure(i={}){Object.assign(this,i)}addFonts(i={}){this.fontPaths={...this.fontPaths,...i}}removeFonts(i=[]){i.forEach(t=>{delete this.fontPaths[t]})}clearFonts(){this.fontPaths={}}restoreDefaults(i){let t=new tp,e=i?.reduce((n,s)=>(n[s]=t[s],n),{})||t;this.configure(e)}},Kn=(i,...t)=>console[i]("fabric",...t),cn=class extends Error{constructor(i,t){super(`fabric: ${i}`,t)}},ty=class extends cn{constructor(i){super(`${i} 'options.signal' is in 'aborted' state`)}},ey=class{},iy=class extends ey{testPrecision(i,t){let e=`precision ${t} float;
void main(){}`,n=i.createShader(i.FRAGMENT_SHADER);return!!n&&(i.shaderSource(n,e),i.compileShader(n),!!i.getShaderParameter(n,i.COMPILE_STATUS))}queryWebGL(i){let t=i.getContext("webgl");t&&(this.maxTextureSize=t.getParameter(t.MAX_TEXTURE_SIZE),this.GLPrecision=["highp","mediump","lowp"].find(e=>this.testPrecision(t,e)),t.getExtension("WEBGL_lose_context").loseContext(),Kn("log",`WebGL: max texture size ${this.maxTextureSize}`))}isSupported(i){return!!this.maxTextureSize&&this.maxTextureSize>=i}},ny={},ep;var un=()=>ep||(ep={document,window,isTouchSupported:"ontouchstart"in window||"ontouchstart"in document||window&&window.navigator&&window.navigator.maxTouchPoints>0,WebGLProbe:new iy,dispose(){},copyPasteData:ny}),fr=()=>un().document,ar=()=>un().window,Ap=()=>{var i;return Math.max((i=ue.devicePixelRatio)==null?ar().devicePixelRatio:i,1)},Io=new class{constructor(){P(this,"boundsOfCurveCache",{}),this.charWidthsCache=new Map}getFontCache({fontFamily:i,fontStyle:t,fontWeight:e}){i=i.toLowerCase();let n=this.charWidthsCache;n.has(i)||n.set(i,new Map);let s=n.get(i),r=`${t.toLowerCase()}_${(e+"").toLowerCase()}`;return s.has(r)||s.set(r,new Map),s.get(r)}clearFontCache(i){i?this.charWidthsCache.delete((i||"").toLowerCase()):this.charWidthsCache=new Map}limitDimsByArea(i){let{perfLimitSizeTotal:t}=ue,e=Math.sqrt(t*i);return[Math.floor(e),Math.floor(t/e)]}},ou="7.4.0";function cl(){}var jn=Math.PI/2,sy=Math.PI/4,Ji=2*Math.PI,Ou=Math.PI/180,ri=Object.freeze([1,0,0,1,0,0]),_e="center",Be="left",Rp="bottom",qi="right",Ml="none",Lu=/\r?\n/,Dp="moving",wl="scaling",Ip="rotating",Op="rotate",Lp="skewing",Fo="resizing",Np="modifyPoly",gl="changed",Pp="scale",ts="scaleX",es="scaleY",pr="skewX",gr="skewY",hi="fill",wn="stroke",Fp="modified",ip="normal",Zs="json",Rt=new class{constructor(){this[Zs]=new Map,this.svg=new Map}has(i){return this[Zs].has(i)}getClass(i){let t=this[Zs].get(i);if(!t)throw new cn(`No class registered for ${i}`);return t}setClass(i,t){t?this[Zs].set(t,i):(this[Zs].set(i.type,i),this[Zs].set(i.type.toLowerCase(),i))}getSVGClass(i){return this.svg.get(i)}setSVGClass(i,t){this.svg.set(t??i.type.toLowerCase(),i)}},ml=new class extends Array{remove(i){let t=this.indexOf(i);t>-1&&this.splice(t,1)}cancelAll(){let i=this.splice(0);return i.forEach(t=>t.abort()),i}cancelByCanvas(i){if(!i)return[];let t=this.filter(e=>{var n;return e.target===i||typeof e.target=="object"&&((n=e.target)==null?void 0:n.canvas)===i});return t.forEach(e=>e.abort()),t}cancelByTarget(i){if(!i)return[];let t=this.filter(e=>e.target===i);return t.forEach(e=>e.abort()),t}},ry=class{constructor(){P(this,"__eventListeners",{})}on(i,t){if(this.__eventListeners||(this.__eventListeners={}),typeof i=="object")return Object.entries(i).forEach(([e,n])=>{this.on(e,n)}),()=>this.off(i);if(t){let e=i;return this.__eventListeners[e]||(this.__eventListeners[e]=[]),this.__eventListeners[e].push(t),()=>this.off(e,t)}return()=>!1}once(i,t){if(typeof i=="object"){let e=[];return Object.entries(i).forEach(([n,s])=>{e.push(this.once(n,s))}),()=>e.forEach(n=>n())}if(t){let e=this.on(i,function(...n){t.call(this,...n),e()});return e}return()=>!1}_removeEventListener(i,t){if(this.__eventListeners[i])if(t){let e=this.__eventListeners[i],n=e.indexOf(t);n>-1&&e.splice(n,1)}else this.__eventListeners[i]=[]}off(i,t){if(this.__eventListeners)if(i===void 0)for(let e in this.__eventListeners)this._removeEventListener(e);else typeof i=="object"?Object.entries(i).forEach(([e,n])=>{this._removeEventListener(e,n)}):this._removeEventListener(i,t)}fire(i,t){var e;if(!this.__eventListeners)return;let n=(e=this.__eventListeners[i])==null?void 0:e.concat();if(n)for(let s=0;s<n.length;s++)n[s].call(this,t||{})}},Ms=(i,t)=>{let e=i.indexOf(t);return e!==-1&&i.splice(e,1),i},Xi=i=>{if(i===0)return 1;switch(Math.abs(i)/jn){case 1:case 3:return 0;case 2:return-1}return Math.cos(i)},$i=i=>{if(i===0)return 0;let t=i/jn,e=Math.sign(i);switch(t){case 1:return e;case 2:return 0;case 3:return-e}return Math.sin(i)},Q=class ei{constructor(t=0,e=0){typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)}add(t){return new ei(this.x+t.x,this.y+t.y)}addEquals(t){return this.x+=t.x,this.y+=t.y,this}scalarAdd(t){return new ei(this.x+t,this.y+t)}scalarAddEquals(t){return this.x+=t,this.y+=t,this}subtract(t){return new ei(this.x-t.x,this.y-t.y)}subtractEquals(t){return this.x-=t.x,this.y-=t.y,this}scalarSubtract(t){return new ei(this.x-t,this.y-t)}scalarSubtractEquals(t){return this.x-=t,this.y-=t,this}multiply(t){return new ei(this.x*t.x,this.y*t.y)}scalarMultiply(t){return new ei(this.x*t,this.y*t)}scalarMultiplyEquals(t){return this.x*=t,this.y*=t,this}divide(t){return new ei(this.x/t.x,this.y/t.y)}scalarDivide(t){return new ei(this.x/t,this.y/t)}scalarDivideEquals(t){return this.x/=t,this.y/=t,this}eq(t){return this.x===t.x&&this.y===t.y}lt(t){return this.x<t.x&&this.y<t.y}lte(t){return this.x<=t.x&&this.y<=t.y}gt(t){return this.x>t.x&&this.y>t.y}gte(t){return this.x>=t.x&&this.y>=t.y}lerp(t,e=.5){return e=Math.max(Math.min(1,e),0),new ei(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)}distanceFrom(t){let e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)}midPointFrom(t){return this.lerp(t)}min(t){return new ei(Math.min(this.x,t.x),Math.min(this.y,t.y))}max(t){return new ei(Math.max(this.x,t.x),Math.max(this.y,t.y))}toString(){return`${this.x},${this.y}`}setXY(t,e){return this.x=t,this.y=e,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setFromPoint(t){return this.x=t.x,this.y=t.y,this}swap(t){let e=this.x,n=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=n}clone(){return new ei(this.x,this.y)}rotate(t,e=Nu){let n=$i(t),s=Xi(t),r=this.subtract(e);return new ei(r.x*s-r.y*n,r.x*n+r.y*s).add(e)}transform(t,e=!1){return new ei(t[0]*this.x+t[2]*this.y+(e?0:t[4]),t[1]*this.x+t[3]*this.y+(e?0:t[5]))}},Nu=new Q(0,0),hl=i=>!!i&&Array.isArray(i._objects);function Bp(i){class t extends i{constructor(...n){super(...n),P(this,"_objects",[])}_onObjectAdded(n){}_onObjectRemoved(n){}_onStackOrderChanged(n){}add(...n){let s=this._objects.push(...n);return n.forEach(r=>this._onObjectAdded(r)),s}insertAt(n,...s){return this._objects.splice(n,0,...s),s.forEach(r=>this._onObjectAdded(r)),this._objects.length}remove(...n){let s=this._objects,r=[];return n.forEach(o=>{let a=s.indexOf(o);a!==-1&&(s.splice(a,1),r.push(o),this._onObjectRemoved(o))}),r}forEachObject(n){this.getObjects().forEach((s,r,o)=>n(s,r,o))}getObjects(...n){return n.length===0?[...this._objects]:this._objects.filter(s=>s.isType(...n))}item(n){return this._objects[n]}isEmpty(){return this._objects.length===0}size(){return this._objects.length}contains(n,s){return!!this._objects.includes(n)||!!s&&this._objects.some(r=>r instanceof t&&r.contains(n,!0))}complexity(){return this._objects.reduce((n,s)=>n+=s.complexity?s.complexity():0,0)}sendObjectToBack(n){return!(!n||n===this._objects[0])&&(Ms(this._objects,n),this._objects.unshift(n),this._onStackOrderChanged(n),!0)}bringObjectToFront(n){return!(!n||n===this._objects[this._objects.length-1])&&(Ms(this._objects,n),this._objects.push(n),this._onStackOrderChanged(n),!0)}sendObjectBackwards(n,s){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==0){let o=this.findNewLowerIndex(n,r,s);return Ms(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}bringObjectForward(n,s){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==this._objects.length-1){let o=this.findNewUpperIndex(n,r,s);return Ms(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}moveObjectTo(n,s){return n!==this._objects[s]&&(Ms(this._objects,n),this._objects.splice(s,0,n),this._onStackOrderChanged(n),!0)}findNewLowerIndex(n,s,r){let o;if(r){o=s;for(let a=s-1;a>=0;--a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=s-1;return o}findNewUpperIndex(n,s,r){let o;if(r){o=s;for(let a=s+1;a<this._objects.length;++a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=s+1;return o}collectObjects({left:n,top:s,width:r,height:o},{includeIntersecting:a=!0}={}){let l=[],c=new Q(n,s),h=c.add(new Q(r,o));for(let u=this._objects.length-1;u>=0;u--){let d=this._objects[u];d.selectable&&d.visible&&(a&&d.intersectsWithRect(c,h)||d.isContainedWithinRect(c,h)||a&&d.containsPoint(c)||a&&d.containsPoint(h))&&l.push(d)}return l}}return t}var kp=class extends ry{_setOptions(i={}){for(let t in i)this.set(t,i[t])}_setObject(i){for(let t in i)this._set(t,i[t])}set(i,t){return typeof i=="object"?this._setObject(i):this._set(i,t),this}_set(i,t){this[i]=t}toggle(i){let t=this.get(i);return typeof t=="boolean"&&this.set(i,!t),this}get(i){return this[i]}};function Oo(i){return ar().requestAnimationFrame(i)}function Up(i){return ar().cancelAnimationFrame(i)}var oy=0,Zn=()=>oy++,dn=()=>{let i=fr().createElement("canvas");if(!i||i.getContext===void 0)throw new cn("Failed to create `canvas` element");return i},zp=()=>fr().createElement("img"),ay=i=>{var t;let e=bi(i);return(t=e.getContext("2d"))==null||t.drawImage(i,0,0),e},bi=i=>{let t=dn();return t.width=i.width,t.height=i.height,t},Pu=(i,t,e)=>i.toDataURL(`image/${t}`,e),Fu=(i,t,e)=>new Promise((n,s)=>{i.toBlob(n,`image/${t}`,e)}),we=i=>i*Ou,Tn=i=>i/Ou,Hp=i=>i.every((t,e)=>t===ri[e]),Xe=(i,t,e)=>new Q(i).transform(t,e),Si=i=>{let t=1/(i[0]*i[3]-i[1]*i[2]),e=[t*i[3],-t*i[1],-t*i[2],t*i[0],0,0],{x:n,y:s}=new Q(i[4],i[5]).transform(e,!0);return e[4]=-n,e[5]=-s,e},Ee=(i,t,e)=>[i[0]*t[0]+i[2]*t[1],i[1]*t[0]+i[3]*t[1],i[0]*t[2]+i[2]*t[3],i[1]*t[2]+i[3]*t[3],e?0:i[0]*t[4]+i[2]*t[5]+i[4],e?0:i[1]*t[4]+i[3]*t[5]+i[5]],Tl=(i,t)=>i.reduceRight((e,n)=>n&&e?Ee(n,e,t):n||e,void 0)||ri.concat(),Bu=([i,t])=>Math.atan2(t,i),ku=([i,t])=>Math.sqrt(i*i+t*t),Gp=([,,i,t])=>Math.sqrt(i*i+t*t),lr=i=>{let t=Bu(i),e=i[0]**2+i[1]**2,n=Math.sqrt(e),s=(i[0]*i[3]-i[2]*i[1])/n,r=Math.atan2(i[0]*i[2]+i[1]*i[3],e);return{angle:Tn(t),scaleX:n,scaleY:s,skewX:Tn(r),skewY:0,translateX:i[4]||0,translateY:i[5]||0}},mr=(i,t=0)=>[1,0,0,1,i,t];function Is({angle:i=0}={},{x:t=0,y:e=0}={}){let n=we(i),s=Xi(n),r=$i(n);return[s,r,-r,s,t?t-(s*t-r*e):0,e?e-(r*t+s*e):0]}var El=(i,t=i)=>[i,0,0,t,0,0],Vp=i=>Math.tan(we(i)),Uu=i=>[1,0,Vp(i),1,0,0],zu=i=>[1,Vp(i),0,1,0,0],Ho=({scaleX:i=1,scaleY:t=1,flipX:e=!1,flipY:n=!1,skewX:s=0,skewY:r=0})=>{let o=El(e?-i:i,n?-t:t);return s&&(o=Ee(o,Uu(s),!0)),r&&(o=Ee(o,zu(r),!0)),o},Yp=i=>{let{translateX:t=0,translateY:e=0,angle:n=0}=i,s=mr(t,e);n&&(s=Ee(s,Is({angle:n})));let r=Ho(i);return Hp(r)||(s=Ee(s,r)),s},Lo=(i,{signal:t,crossOrigin:e=null}={})=>new Promise(function(n,s){if(t&&t.aborted)return s(new ty("loadImage"));let r=zp(),o;t&&(o=function(l){r.src="",s(l)},t.addEventListener("abort",o,{once:!0}));let a=function(){r.onload=r.onerror=null,o&&t?.removeEventListener("abort",o),n(r)};i?(r.onload=a,r.onerror=function(){o&&t?.removeEventListener("abort",o),s(new cn(`Error loading ${r.src}`))},e&&(r.crossOrigin=e),r.src=i):a()}),cr=(i,{signal:t,reviver:e=cl}={})=>new Promise((n,s)=>{let r=[];t&&t.addEventListener("abort",s,{once:!0}),Promise.allSettled(i.map(o=>Rt.getClass(o.type).fromObject(o,{signal:t}))).then(async o=>{for(let[a,l]of o.entries())if(l.status==="fulfilled"&&(await e(i[a],l.value),r.push(l.value)),l.status==="rejected"){let c=await e(i[a],void 0,l.reason);c&&r.push(c)}n(r)}).catch(o=>{r.forEach(a=>{a.dispose&&a.dispose()}),s(o)}).finally(()=>{t&&t.removeEventListener("abort",s)})}),Go=(i,{signal:t}={})=>new Promise((e,n)=>{let s=[];t&&t.addEventListener("abort",n,{once:!0});let r=Object.values(i).map(a=>a&&a.type&&Rt.has(a.type)?cr([a],{signal:t}).then(([l])=>(s.push(l),l)):a),o=Object.keys(i);Promise.all(r).then(a=>a.reduce((l,c,h)=>(l[o[h]]=c,l),{})).then(e).catch(a=>{s.forEach(l=>{l.dispose&&l.dispose()}),n(a)}).finally(()=>{t&&t.removeEventListener("abort",n)})}),Os=(i,t=[])=>t.reduce((e,n)=>(n in i&&(e[n]=i[n]),e),{}),Hu=(i,t)=>Object.keys(i).reduce((e,n)=>(t(i[n],n,i)&&(e[n]=i[n]),e),{}),me=(i,t)=>parseFloat(Number(i).toFixed(t)),hr=i=>"matrix("+i.map(t=>me(t,ue.NUM_FRACTION_DIGITS)).join(" ")+")",Pi=i=>!!i&&i.toLive!==void 0,np=i=>!!i&&typeof i.toObject=="function",sp=i=>!!i&&i.offsetX!==void 0&&"source"in i,ws=i=>!!i&&"multiSelectionStacking"in i;function qp(i){let t=i&&Vi(i),e=0,n=0;if(!i||!t)return{left:e,top:n};let s=i,r=t.documentElement,o=t.body||{scrollLeft:0,scrollTop:0};for(;s&&(s.parentNode||s.host)&&(s=s.parentNode||s.host,s===t?(e=o.scrollLeft||r.scrollLeft||0,n=o.scrollTop||r.scrollTop||0):(e+=s.scrollLeft||0,n+=s.scrollTop||0),s.nodeType!==1||s.style.position!=="fixed"););return{left:e,top:n}}var Vi=i=>i.ownerDocument||null,Wp=i=>{var t;return((t=i.ownerDocument)==null?void 0:t.defaultView)||null},Jp=(i,t,{width:e,height:n},s=1)=>{i.width=e,i.height=n,s>1&&(i.setAttribute("width",(e*s).toString()),i.setAttribute("height",(n*s).toString()),t.scale(s,s))},au=(i,{width:t,height:e})=>{t&&(i.style.width=typeof t=="number"?`${t}px`:t),e&&(i.style.height=typeof e=="number"?`${e}px`:e)};function rp(i){return i.onselectstart!==void 0&&(i.onselectstart=()=>!1),i.style.userSelect=Ml,i}var Xp=class{constructor(i){P(this,"_originalCanvasStyle",void 0),P(this,"lower",void 0);let t=this.createLowerCanvas(i);this.lower={el:t,ctx:t.getContext("2d")}}createLowerCanvas(i){let t=(e=i)&&e.getContext!==void 0?i:i&&fr().getElementById(i)||dn();var e;if(t.hasAttribute("data-fabric"))throw new cn("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");return this._originalCanvasStyle=t.style.cssText,t.setAttribute("data-fabric","main"),t.classList.add("lower-canvas"),t}cleanupDOM({width:i,height:t}){let{el:e}=this.lower;e.classList.remove("lower-canvas"),e.removeAttribute("data-fabric"),e.setAttribute("width",`${i}`),e.setAttribute("height",`${t}`),e.style.cssText=this._originalCanvasStyle||"",this._originalCanvasStyle=void 0}setDimensions(i,t){let{el:e,ctx:n}=this.lower;Jp(e,n,i,t)}setCSSDimensions(i){au(this.lower.el,i)}calcOffset(){return(function(i){var t;let e=i&&Vi(i),n={left:0,top:0};if(!e)return n;let s=((t=Wp(i))==null?void 0:t.getComputedStyle(i,null))||{};n.left+=parseInt(s.borderLeftWidth,10)||0,n.top+=parseInt(s.borderTopWidth,10)||0,n.left+=parseInt(s.paddingLeft,10)||0,n.top+=parseInt(s.paddingTop,10)||0;let r={left:0,top:0},o=e.documentElement;i.getBoundingClientRect!==void 0&&(r=i.getBoundingClientRect());let a=qp(i);return{left:r.left+a.left-(o.clientLeft||0)+n.left,top:r.top+a.top-(o.clientTop||0)+n.top}})(this.lower.el)}dispose(){un().dispose(this.lower.el),delete this.lower}},ly={backgroundVpt:!0,backgroundColor:"",overlayVpt:!0,overlayColor:"",includeDefaultValues:!0,svgViewportTransformation:!0,renderOnAddRemove:!0,skipOffscreen:!0,enableRetinaScaling:!0,imageSmoothingEnabled:!0,controlsAboveOverlay:!1,allowTouchScrolling:!1,viewportTransform:[...ri],patternQuality:"best"},cy=zo({capitalize:()=>hy,escapeXml:()=>te,graphemeSplit:()=>Cl}),hy=(i,t=!1)=>`${i.charAt(0).toUpperCase()}${t?i.slice(1):i.slice(1).toLowerCase()}`,te=i=>i.toString().replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),lo,Cl=i=>{if(lo||lo||(lo="Intl"in ar()&&"Segmenter"in Intl&&new Intl.Segmenter(void 0,{granularity:"grapheme"})),lo){let t=lo.segment(i);return Array.from(t).map(({segment:e})=>e)}return uy(i)},uy=i=>{let t=[];for(let e,n=0;n<i.length;n++)(e=dy(i,n))!==!1&&t.push(e);return t},dy=(i,t)=>{let e=i.charCodeAt(t);if(isNaN(e))return"";if(e<55296||e>57343)return i.charAt(t);if(55296<=e&&e<=56319){if(i.length<=t+1)throw"High surrogate without following low surrogate";let s=i.charCodeAt(t+1);if(56320>s||s>57343)throw"High surrogate without following low surrogate";return i.charAt(t)+i.charAt(t+1)}if(t===0)throw"Low surrogate without preceding high surrogate";let n=i.charCodeAt(t-1);if(55296>n||n>56319)throw"Low surrogate without preceding high surrogate";return!1},Gu=class $p extends Bp(kp){get lowerCanvasEl(){var t;return(t=this.elements.lower)==null?void 0:t.el}get contextContainer(){var t;return(t=this.elements.lower)==null?void 0:t.ctx}static getDefaults(){return $p.ownDefaults}constructor(t,e={}){super(),Object.assign(this,this.constructor.getDefaults()),this.set(e),this.initElements(t),this._setDimensionsImpl({width:this.width||this.elements.lower.el.width||0,height:this.height||this.elements.lower.el.height||0}),this.skipControlsDrawing=!1,this.viewportTransform=[...this.viewportTransform],this.calcViewportBoundaries()}initElements(t){this.elements=new Xp(t)}add(...t){let e=super.add(...t);return t.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),e}insertAt(t,...e){let n=super.insertAt(t,...e);return e.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),n}remove(...t){let e=super.remove(...t);return e.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),e}_onObjectAdded(t){t.canvas&&t.canvas!==this&&(Kn("warn",`Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`),t.canvas.remove(t)),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t){t._set("canvas",void 0),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onStackOrderChanged(){this.renderOnAddRemove&&this.requestRenderAll()}getRetinaScaling(){return this.enableRetinaScaling?Ap():1}calcOffset(){return this._offset=this.elements.calcOffset()}getWidth(){return this.width}getHeight(){return this.height}_setDimensionsImpl(t,{cssOnly:e=!1,backstoreOnly:n=!1}={}){if(!e){let s={width:this.width,height:this.height,...t};this.elements.setDimensions(s,this.getRetinaScaling()),this.hasLostContext=!0,this.width=s.width,this.height=s.height}n||this.elements.setCSSDimensions(t),this.calcOffset()}setDimensions(t,e){this._setDimensionsImpl(t,e),e&&e.cssOnly||this.requestRenderAll()}getZoom(){return ku(this.viewportTransform)}setViewportTransform(t){this.viewportTransform=t,this.calcViewportBoundaries(),this.renderOnAddRemove&&this.requestRenderAll()}zoomToPoint(t,e){let n=t,s=[...this.viewportTransform],r=Xe(t,Si(s));s[0]=e,s[3]=e;let o=Xe(r,s);s[4]+=n.x-o.x,s[5]+=n.y-o.y,this.setViewportTransform(s)}setZoom(t){this.zoomToPoint(new Q(0,0),t)}absolutePan(t){let e=[...this.viewportTransform];return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)}relativePan(t){return this.absolutePan(new Q(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))}getElement(){return this.elements.lower.el}clearContext(t){t.clearRect(0,0,this.width,this.height)}getContext(){return this.elements.lower.ctx}clear(){this.remove(...this.getObjects()),this.backgroundImage=void 0,this.overlayImage=void 0,this.backgroundColor="",this.overlayColor="",this.clearContext(this.getContext()),this.fire("canvas:cleared"),this.renderOnAddRemove&&this.requestRenderAll()}renderAll(){this.cancelRequestedRender(),this.destroyed||this.renderCanvas(this.getContext(),this._objects)}renderAndReset(){this.nextRenderHandle=0,this.renderAll()}requestRenderAll(){this.nextRenderHandle||this.disposed||this.destroyed||(this.nextRenderHandle=Oo(()=>this.renderAndReset()))}calcViewportBoundaries(){let t=this.width,e=this.height,n=Si(this.viewportTransform),s=Xe({x:0,y:0},n),r=Xe({x:t,y:e},n),o=s.min(r),a=s.max(r);return this.vptCoords={tl:o,tr:new Q(a.x,o.y),bl:new Q(o.x,a.y),br:a}}cancelRequestedRender(){this.nextRenderHandle&&(Up(this.nextRenderHandle),this.nextRenderHandle=0)}drawControls(t){}renderCanvas(t,e){if(this.destroyed)return;let n=this.viewportTransform,s=this.clipPath;this.calcViewportBoundaries(),this.clearContext(t),t.imageSmoothingEnabled=this.imageSmoothingEnabled,t.patternQuality=this.patternQuality,this.fire("before:render",{ctx:t}),this._renderBackground(t),t.save(),t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this._renderObjects(t,e),t.restore(),this.controlsAboveOverlay||this.skipControlsDrawing||this.drawControls(t),s&&(s._set("canvas",this),s.shouldCache(),s._transformDone=!0,s.renderCache({forClipping:!0}),this.drawClipPathOnCanvas(t,s)),this._renderOverlay(t),this.controlsAboveOverlay&&!this.skipControlsDrawing&&this.drawControls(t),this.fire("after:render",{ctx:t}),this.__cleanupTask&&(this.__cleanupTask(),this.__cleanupTask=void 0)}drawClipPathOnCanvas(t,e){let n=this.viewportTransform;t.save(),t.transform(...n),t.globalCompositeOperation="destination-in",e.transform(t),t.scale(1/e.zoomX,1/e.zoomY),t.drawImage(e._cacheCanvas,-e.cacheTranslationX,-e.cacheTranslationY),t.restore()}_renderObjects(t,e){for(let n=0,s=e.length;n<s;++n)e[n]&&e[n].render(t)}_renderBackgroundOrOverlay(t,e){let n=this[`${e}Color`],s=this[`${e}Image`],r=this.viewportTransform,o=this[`${e}Vpt`];if(!n&&!s)return;let a=Pi(n);if(n){if(t.save(),t.beginPath(),t.moveTo(0,0),t.lineTo(this.width,0),t.lineTo(this.width,this.height),t.lineTo(0,this.height),t.closePath(),t.fillStyle=a?n.toLive(t):n,o&&t.transform(...r),a){t.transform(1,0,0,1,n.offsetX||0,n.offsetY||0);let l=n.gradientTransform||n.patternTransform;l&&t.transform(...l)}t.fill(),t.restore()}if(s){t.save();let{skipOffscreen:l}=this;this.skipOffscreen=o,o&&t.transform(...r),s.render(t),this.skipOffscreen=l,t.restore()}}_renderBackground(t){this._renderBackgroundOrOverlay(t,"background")}_renderOverlay(t){this._renderBackgroundOrOverlay(t,"overlay")}getCenterPoint(){return new Q(this.width/2,this.height/2)}centerObjectH(t){return this._centerObject(t,new Q(this.getCenterPoint().x,t.getCenterPoint().y))}centerObjectV(t){return this._centerObject(t,new Q(t.getCenterPoint().x,this.getCenterPoint().y))}centerObject(t){return this._centerObject(t,this.getCenterPoint())}viewportCenterObject(t){return this._centerObject(t,this.getVpCenter())}viewportCenterObjectH(t){return this._centerObject(t,new Q(this.getVpCenter().x,t.getCenterPoint().y))}viewportCenterObjectV(t){return this._centerObject(t,new Q(t.getCenterPoint().x,this.getVpCenter().y))}getVpCenter(){return Xe(this.getCenterPoint(),Si(this.viewportTransform))}_centerObject(t,e){t.setXY(e,_e,_e),t.setCoords(),this.renderOnAddRemove&&this.requestRenderAll()}toDatalessJSON(t){return this.toDatalessObject(t)}toObject(t){return this._toObjectMethod("toObject",t)}toJSON(){return this.toObject()}toDatalessObject(t){return this._toObjectMethod("toDatalessObject",t)}_toObjectMethod(t,e){let n=this.clipPath,s=n&&!n.excludeFromExport?this._toObject(n,t,e):null;return{version:ou,...Os(this,e),objects:this._objects.filter(r=>!r.excludeFromExport).map(r=>this._toObject(r,t,e)),...this.__serializeBgOverlay(t,e),...s?{clipPath:s}:null}}_toObject(t,e,n){let s;this.includeDefaultValues||(s=t.includeDefaultValues,t.includeDefaultValues=!1);let r=t[e](n);return this.includeDefaultValues||(t.includeDefaultValues=!!s),r}__serializeBgOverlay(t,e){let n={},s=this.backgroundImage,r=this.overlayImage,o=this.backgroundColor,a=this.overlayColor;return Pi(o)?o.excludeFromExport||(n.background=o.toObject(e)):o&&(n.background=o),Pi(a)?a.excludeFromExport||(n.overlay=a.toObject(e)):a&&(n.overlay=a),s&&!s.excludeFromExport&&(n.backgroundImage=this._toObject(s,t,e)),r&&!r.excludeFromExport&&(n.overlayImage=this._toObject(r,t,e)),n}toSVG(t={},e){t.reviver=e;let n=[];var s;return this._setSVGPreamble(n,t),this._setSVGHeader(n,t),this.clipPath&&n.push(`<g clip-path="url(#${te((s=this.clipPath.clipPathId)==null?"":s)})" >
`),this._setSVGBgOverlayColor(n,"background"),this._setSVGBgOverlayImage(n,"backgroundImage",e),this._setSVGObjects(n,e),this.clipPath&&n.push(`</g>
`),this._setSVGBgOverlayColor(n,"overlay"),this._setSVGBgOverlayImage(n,"overlayImage",e),n.push("</svg>"),n.join("")}_setSVGPreamble(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",`" standalone="no" ?>
`,'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',`"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`)}_setSVGHeader(t,e){let n=e.width||`${this.width}`,s=e.height||`${this.height}`,r=ue.NUM_FRACTION_DIGITS,o=e.viewBox,a;if(o)a=`viewBox="${o.x} ${o.y} ${o.width} ${o.height}" `;else if(this.svgViewportTransformation){let l=this.viewportTransform;a=`viewBox="${me(-l[4]/l[0],r)} ${me(-l[5]/l[3],r)} ${me(this.width/l[0],r)} ${me(this.height/l[3],r)}" `}else a=`viewBox="0 0 ${this.width} ${this.height}" `;t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',n,'" ','height="',s,'" ',a,`xml:space="preserve">
`,"<desc>Created with Fabric.js ",ou,`</desc>
`,`<defs>
`,this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),this.createSVGClipPathMarkup(e),`</defs>
`)}createSVGClipPathMarkup(t){let e=this.clipPath;return e?(e.clipPathId=`CLIPPATH_${Zn()}`,`<clipPath id="${e.clipPathId}" >
${e.toClipPathSVG(t.reviver)}</clipPath>
`):""}createSVGRefElementsMarkup(){return["background","overlay"].map(t=>{let e=this[`${t}Color`];if(Pi(e)){let n=this[`${t}Vpt`],s=this.viewportTransform,r={isType:()=>!1,width:this.width/(n?s[0]:1),height:this.height/(n?s[3]:1)};return e.toSVG(r,{additionalTransform:n?hr(s):""})}}).join("")}createSVGFontFacesMarkup(){let t=[],e={},n=ue.fontPaths;this._objects.forEach(function r(o){t.push(o),hl(o)&&o._objects.forEach(r)}),t.forEach(r=>{if(!(o=r)||typeof o._renderText!="function")return;var o;let{styles:a,fontFamily:l}=r;!e[l]&&n[l]&&(e[l]=!0,a&&Object.values(a).forEach(c=>{Object.values(c).forEach(({fontFamily:h=""})=>{!e[h]&&n[h]&&(e[h]=!0)})}))});let s=Object.keys(e).map(r=>`		@font-face {
			font-family: '${r}';
			src: url('${n[r]}');
		}
`).join("");return s?`	<style type="text/css"><![CDATA[
${s}]]></style>
`:""}_setSVGObjects(t,e){this.forEachObject(n=>{n.excludeFromExport||this._setSVGObject(t,n,e)})}_setSVGObject(t,e,n){t.push(e.toSVG(n))}_setSVGBgOverlayImage(t,e,n){let s=this[e];s&&!s.excludeFromExport&&s.toSVG&&t.push(s.toSVG(n))}_setSVGBgOverlayColor(t,e){let n=this[`${e}Color`];if(n)if(Pi(n)){let s=n.repeat||"",r=this.width,o=this.height,a=this[`${e}Vpt`]?hr(Si(this.viewportTransform)):"";t.push(`<rect transform="${a} translate(${r/2},${o/2})" x="${n.offsetX-r/2}" y="${n.offsetY-o/2}" width="${s!=="repeat-y"&&s!=="no-repeat"||!sp(n)?r:n.source.width}" height="${s!=="repeat-x"&&s!=="no-repeat"||!sp(n)?o:n.source.height}" fill="url(#SVGID_${n.id})"></rect>
`)}else t.push('<rect x="0" y="0" width="100%" height="100%" ','fill="',n,'"',`></rect>
`)}loadFromJSON(t,e,{signal:n}={}){if(!t)return Promise.reject(new cn("`json` is undefined"));let{objects:s=[],...r}=typeof t=="string"?JSON.parse(t):t,{backgroundImage:o,background:a,overlayImage:l,overlay:c,clipPath:h}=r,u=this.renderOnAddRemove;return this.renderOnAddRemove=!1,Promise.all([cr(s,{reviver:e,signal:n}),Go({backgroundImage:o,backgroundColor:a,overlayImage:l,overlayColor:c,clipPath:h},{signal:n})]).then(([d,f])=>(this.clear(),this.add(...d),this.set(r),this.set(f),this.renderOnAddRemove=u,this))}clone(t){let e=this.toObject(t);return this.cloneWithoutData().loadFromJSON(e)}cloneWithoutData(){let t=bi(this);return new this.constructor(t)}toDataURL(t={}){let{format:e="png",quality:n=1,multiplier:s=1,enableRetinaScaling:r=!1}=t,o=s*(r?this.getRetinaScaling():1);return Pu(this.toCanvasElement(o,t),e,n)}toBlob(t={}){let{format:e="png",quality:n=1,multiplier:s=1,enableRetinaScaling:r=!1}=t,o=s*(r?this.getRetinaScaling():1);return Fu(this.toCanvasElement(o,t),e,n)}toCanvasElement(t=1,{width:e,height:n,left:s,top:r,filter:o}={}){let a=(e||this.width)*t,l=(n||this.height)*t,c=this.getZoom(),h=this.width,u=this.height,d=this.skipControlsDrawing,f=c*t,p=this.viewportTransform,_=[f,0,0,f,(p[4]-(s||0))*t,(p[5]-(r||0))*t],g=this.enableRetinaScaling,m=bi({width:a,height:l}),S=o?this._objects.filter(w=>o(w)):this._objects;return this.enableRetinaScaling=!1,this.viewportTransform=_,this.width=a,this.height=l,this.skipControlsDrawing=!0,this.calcViewportBoundaries(),this.renderCanvas(m.getContext("2d"),S),this.viewportTransform=p,this.width=h,this.height=u,this.calcViewportBoundaries(),this.enableRetinaScaling=g,this.skipControlsDrawing=d,m}dispose(){return!this.disposed&&this.elements.cleanupDOM({width:this.width,height:this.height}),ml.cancelByCanvas(this),this.disposed=!0,new Promise((t,e)=>{let n=()=>{this.destroy(),t(!0)};n.kill=e,this.__cleanupTask&&this.__cleanupTask.kill("aborted"),this.destroyed?t(!1):this.nextRenderHandle?this.__cleanupTask=n:n()})}destroy(){this.destroyed=!0,this.cancelRequestedRender(),this.forEachObject(t=>t.dispose()),this._objects=[],this.backgroundImage&&this.backgroundImage.dispose(),this.backgroundImage=void 0,this.overlayImage&&this.overlayImage.dispose(),this.overlayImage=void 0,this.elements.dispose()}toString(){return`#<Canvas (${this.complexity()}): { objects: ${this._objects.length} }>`}};P(Gu,"ownDefaults",ly);var fy=["touchstart","touchmove","touchend"],Qp=i=>{let t=qp(i.target),e=(function(n){let s=n.changedTouches;return s&&s[0]?s[0]:n})(i);return new Q(e.clientX+t.left,e.clientY+t.top)},_l=i=>fy.includes(i.type)||i.pointerType==="touch",op=i=>{i.preventDefault(),i.stopPropagation()},hn=i=>{let t=0,e=0,n=0,s=0;for(let r=0,o=i.length;r<o;r++){let{x:a,y:l}=i[r];(a>n||!r)&&(n=a),(a<t||!r)&&(t=a),(l>s||!r)&&(s=l),(l<e||!r)&&(e=l)}return{left:t,top:e,width:n-t,height:s-e}},py=(i,t)=>{ur(i,Ee(Si(t),i.calcOwnMatrix()))},Kp=(i,t)=>ur(i,Ee(t,i.calcOwnMatrix())),ur=(i,t)=>{let{translateX:e,translateY:n,scaleX:s,scaleY:r,...o}=lr(t),a=new Q(e,n);i.flipX=!1,i.flipY=!1,Object.assign(i,o),i.set({scaleX:s,scaleY:r}),i.setPositionByOrigin(a,_e,_e)},Zp=i=>{i.scaleX=1,i.scaleY=1,i.skewX=0,i.skewY=0,i.flipX=!1,i.flipY=!1,i.rotate(0)},Vu=i=>({scaleX:i.scaleX,scaleY:i.scaleY,skewX:i.skewX,skewY:i.skewY,angle:i.angle,left:i.left,flipX:i.flipX,flipY:i.flipY,top:i.top}),Al=(i,t,e)=>{let n=i/2,s=t/2,r=hn([new Q(-n,-s),new Q(n,-s),new Q(-n,s),new Q(n,s)].map(o=>o.transform(e)));return new Q(r.width,r.height)},Vo=(i=ri,t=ri)=>Ee(Si(t),i),En=(i,t=ri,e=ri)=>i.transform(Vo(t,e)),jp=(i,t=ri,e=ri)=>i.transform(Vo(t,e),!0),Yu=(i,t,e)=>{let n=Vo(t,e);return ur(i,Ee(n,i.calcOwnMatrix())),n},gy={left:-.5,top:-.5,center:0,bottom:.5,right:.5},ii=i=>typeof i=="string"?gy[i]:i-.5,my=new Q(1,0),tg=new Q,qu=(i,t)=>i.rotate(t),Bo=(i,t)=>new Q(t).subtract(i),yl=i=>i.distanceFrom(tg),xl=(i,t)=>Math.atan2(rr(i,t),eg(i,t)),Wu=i=>xl(my,i),Rl=i=>i.eq(tg)?i:i.scalarDivide(yl(i)),Ju=(i,t=!0)=>Rl(new Q(-i.y,i.x).scalarMultiply(t?1:-1)),rr=(i,t)=>i.x*t.y-i.y*t.x,eg=(i,t)=>i.x*t.x+i.y*t.y,lu=(i,t,e)=>{if(i.eq(t)||i.eq(e))return!0;let n=rr(t,e),s=rr(t,i),r=rr(e,i);return n>=0?s>=0&&r<=0:!(s<=0&&r>=0)},Xu="not-allowed";function ig(i){return ii(i.originX)===ii("center")&&ii(i.originY)===ii("center")}function ap(i){return .5-ii(i)}var Wi=(i,t)=>i[t],$u=(i,t,e,n)=>({e:i,transform:t,pointer:new Q(e,n)});function ng(i,t,e){let n=e,s=Wu(Bo(En(i.getCenterPoint(),i.canvas.viewportTransform,void 0),n))+Ji;return Math.round(s%Ji/sy)}function Dl({target:i,corner:t},e,n,s,r){var o;let a=i.controls[t],l=((o=i.canvas)==null?void 0:o.getZoom())||1,c=i.padding/l,h=(function(u,d,f,p){let _=u.getRelativeCenterPoint(),g=f!==void 0&&p!==void 0?u.translateToGivenOrigin(_,_e,_e,f,p):new Q(u.left,u.top);return(u.angle?d.rotate(-we(u.angle),_):d).subtract(g)})(i,new Q(s,r),e,n);return h.x>=c&&(h.x-=c),h.x<=-c&&(h.x+=c),h.y>=c&&(h.y-=c),h.y<=c&&(h.y+=c),h.x-=a.offsetX,h.y-=a.offsetY,h}var _y=new RegExp(String.raw`[\0-\x1F\x7F;<>\\]|\/\*|\*\/|url\s*\(|expression\s*\(|(?:java|vb)script\s*:|data\s*:|@import\b`,"iu"),Il=i=>typeof i=="string"&&i.trim().length>0&&!_y.test(i),Ts=(i,t="")=>{let e=Number(i);return Number.isFinite(e)?`${e}`:t},Es=(i,t="")=>typeof i=="string"&&Il(i)?i:t,vl=i=>i.replace(/\s+/g," "),lp={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#789",lightslategrey:"#789",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#639",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32"},Kh=(i,t,e)=>(e<0&&(e+=1),e>1&&--e,e<1/6?i+6*(t-i)*e:e<.5?t:e<2/3?i+(t-i)*(2/3-e)*6:i),cp=(i,t,e,n)=>{i/=255,t/=255,e/=255;let s=Math.max(i,t,e),r=Math.min(i,t,e),o,a,l=(s+r)/2;if(s===r)o=a=0;else{let c=s-r;switch(a=l>.5?c/(2-s-r):c/(s+r),s){case i:o=(t-e)/c+(t<e?6:0);break;case t:o=(e-i)/c+2;break;case e:o=(i-t)/c+4}o/=6}return[Math.round(360*o),Math.round(100*a),Math.round(100*l),n]},hp=(i="1")=>parseFloat(i)/(i.endsWith("%")?100:1),Za=i=>Math.min(Math.round(i),255).toString(16).toUpperCase().padStart(2,"0"),up=([i,t,e,n=1])=>{let s=Math.round(.3*i+.59*t+.11*e);return[s,s,s,n]},Mi=class Je{constructor(t){if(P(this,"isUnrecognised",!1),t)if(t instanceof Je)this.setSource([...t._source]);else if(Array.isArray(t)){let[e,n,s,r=1]=t;this.setSource([e,n,s,r])}else this.setSource(this._tryParsingColor(t));else this.setSource([0,0,0,1])}_tryParsingColor(t){return(t=t.toLowerCase())in lp&&(t=lp[t]),t==="transparent"?[255,255,255,0]:Je.sourceFromHex(t)||Je.sourceFromRgb(t)||Je.sourceFromHsl(t)||(this.isUnrecognised=!0)&&[0,0,0,1]}getSource(){return this._source}setSource(t){this._source=t}toRgb(){let[t,e,n]=this.getSource();return`rgb(${t},${e},${n})`}toRgba(){return`rgba(${this.getSource().join(",")})`}toHsl(){let[t,e,n]=cp(...this.getSource());return`hsl(${t},${e}%,${n}%)`}toHsla(){let[t,e,n,s]=cp(...this.getSource());return`hsla(${t},${e}%,${n}%,${s})`}toHex(){return this.toHexa().slice(0,6)}toHexa(){let[t,e,n,s]=this.getSource();return`${Za(t)}${Za(e)}${Za(n)}${Za(Math.round(255*s))}`}getAlpha(){return this.getSource()[3]}setAlpha(t){return this._source[3]=t,this}toGrayscale(){return this.setSource(up(this.getSource())),this}toBlackWhite(t){let[e,,,n]=up(this.getSource()),s=e<(t||127)?0:255;return this.setSource([s,s,s,n]),this}overlayWith(t){t instanceof Je||(t=new Je(t));let e=this.getSource(),n=t.getSource(),[s,r,o]=e.map((a,l)=>Math.round(.5*a+.5*n[l]));return this.setSource([s,r,o,e[3]]),this}static fromRgb(t){return Je.fromRgba(t)}static fromRgba(t){return new Je(Je.sourceFromRgb(t))}static sourceFromRgb(t){let e=vl(t).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);if(e){let[n,s,r]=e.slice(1,4).map(o=>{let a=parseFloat(o);return o.endsWith("%")?Math.round(2.55*a):a});return[n,s,r,hp(e[4])]}}static fromHsl(t){return Je.fromHsla(t)}static fromHsla(t){return new Je(Je.sourceFromHsl(t))}static sourceFromHsl(t){let e=vl(t).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);if(!e)return;let n=(Je.parseAngletoDegrees(e[1])%360+360)%360/360,s=parseFloat(e[2])/100,r=parseFloat(e[3])/100,o,a,l;if(s===0)o=a=l=r;else{let c=r<=.5?r*(s+1):r+s-r*s,h=2*r-c;o=Kh(h,c,n+1/3),a=Kh(h,c,n),l=Kh(h,c,n-1/3)}return[Math.round(255*o),Math.round(255*a),Math.round(255*l),hp(e[4])]}static fromHex(t){return new Je(Je.sourceFromHex(t))}static sourceFromHex(t){if(t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)){let e=t.slice(t.indexOf("#")+1),n;n=e.length<=4?e.split("").map(l=>l+l):e.match(/.{2}/g);let[s,r,o,a=255]=n.map(l=>parseInt(l,16));return[s,r,o,a/255]}}static parseAngletoDegrees(t){let e=t.toLowerCase(),n=parseFloat(e);return e.includes("rad")?Tn(n):e.includes("turn")?360*n:n}},yy=i=>{let t=["instantiated_by_use","style","id","class"];switch(i){case"linearGradient":return t.concat(["x1","y1","x2","y2","gradientUnits","gradientTransform"]);case"radialGradient":return t.concat(["gradientUnits","gradientTransform","cx","cy","r","fx","fy","fr"]);case"stop":return t.concat(["offset","stop-color","stop-opacity"])}return t},Rs=(i,t=16)=>{let e=/\D{0,2}$/.exec(i),n=parseFloat(i),s=ue.DPI;switch(e?.[0]){case"mm":return n*s/25.4;case"cm":return n*s/2.54;case"in":return n*s;case"pt":return n*s/72;case"pc":return n*s/72*12;case"em":return n*t;default:return n}},sg=i=>{let[t,e]=i.trim().split(" "),[n,s]=(r=t)&&r!=="none"?[r.slice(1,4),r.slice(5,8)]:r==="none"?[r,r]:["Mid","Mid"];var r;return{meetOrSlice:e||"meet",alignX:n,alignY:s}},ko=(i,t,e=!0)=>{let n,s;if(t)if(t.toLive)n=`url(#SVGID_${te(t.id)})`;else{let r=String(t);if(Il(r)){let o=new Mi(r),a=o.getAlpha();n=o.toRgb(),a!==1&&(s=a.toString())}else n=new Mi("black").toRgb()}else n="none";return e?`${i}: ${n}; ${s?`${i}-opacity: ${s}; `:""}`:`${i}="${n}" ${s?`${i}-opacity="${s}" `:""}`},rg=class{getSvgStyles(i){let t=this.fillRule==null?"nonzero":Es(this.fillRule),e=this.strokeWidth==null?"0":Ts(this.strokeWidth),n=this.strokeDashArray==null?Ml:this.strokeDashArray.every(d=>Number.isFinite(Number(d)))?this.strokeDashArray.join(" "):"",s=this.strokeDashOffset==null?"0":Ts(this.strokeDashOffset),r=this.strokeLineCap==null?"butt":Es(this.strokeLineCap),o=this.strokeLineJoin==null?"miter":Es(this.strokeLineJoin),a=this.strokeMiterLimit==null?"4":Ts(this.strokeMiterLimit),l=this.opacity==null?"1":Ts(this.opacity),c=this.visible?"":" visibility: hidden;",h=i?"":this.getSvgFilter(),u=ko(hi,this.fill);return[ko(wn,this.stroke),e?`stroke-width: ${e}; `:"",n?`stroke-dasharray: ${n}; `:"",r?`stroke-linecap: ${r}; `:"",s?`stroke-dashoffset: ${s}; `:"",o?`stroke-linejoin: ${o}; `:"",a?`stroke-miterlimit: ${a}; `:"",u,t?`fill-rule: ${t}; `:"",l?`opacity: ${l};`:"",h,c].map(d=>te(d)).join("")}getSvgFilter(){return this.shadow?`filter: url(#SVGID_${te(this.shadow.id)});`:""}getSvgCommons(){return[this.id?`id="${te(String(this.id))}" `:"",this.clipPath?`clip-path="url(#${te(this.clipPath.clipPathId)})" `:""].join("")}getSvgTransform(i,t=""){return`transform="${hr(i?this.calcTransformMatrix():this.calcOwnMatrix())}${t}" `}_toSVG(i){return[""]}toSVG(i){return this._createBaseSVGMarkup(this._toSVG(i),{reviver:i})}toClipPathSVG(i){return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(i),{reviver:i})}_createBaseClipPathSVGMarkup(i,{reviver:t,additionalTransform:e=""}={}){let n=[this.getSvgTransform(!0,e),this.getSvgCommons()].join(""),s=i.indexOf("COMMON_PARTS");return i[s]=n,t?t(i.join("")):i.join("")}_createBaseSVGMarkup(i,{noStyle:t,reviver:e,withShadow:n,additionalTransform:s}={}){let r=t?"":`style="${this.getSvgStyles()}" `,o=n?`style="${this.getSvgFilter()}" `:"",a=this.clipPath,l=this.strokeUniform?'vector-effect="non-scaling-stroke" ':"",c=a&&a.absolutePositioned,h=this.stroke,u=this.fill,d=this.shadow,f=[],p=i.indexOf("COMMON_PARTS"),_;return a&&(a.clipPathId=`CLIPPATH_${Zn()}`,_=`<clipPath id="${a.clipPathId}" >
${a.toClipPathSVG(e)}</clipPath>
`),c&&f.push("<g ",o,this.getSvgCommons(),` >
`),f.push("<g ",this.getSvgTransform(!1),c?"":o+this.getSvgCommons(),` >
`),i[p]=[r,l,t?"":this.addPaintOrder()," ",s?`transform="${s}" `:""].join(""),Pi(u)&&f.push(u.toSVG(this)),Pi(h)&&f.push(h.toSVG(this)),d&&f.push(d.toSVG(this)),a&&f.push(_),f.push(i.join("")),f.push(`</g>
`),c&&f.push(`</g>
`),e?e(f.join("")):f.join("")}addPaintOrder(){return this.paintFirst==="fill"?"":` paint-order="${te(this.paintFirst)}" `}};function Ol(i){return RegExp("^("+i.join("|")+")\\b","i")}var dr="textDecorationThickness",Ll="textDecorationColor",og=["fontSize","fontWeight","fontFamily","fontStyle"],ag=["underline","overline","linethrough"],lg=[...og,"lineHeight","text","charSpacing","textAlign","styles","path","pathStartOffset","pathSide","pathAlign"],cg=[...lg,...ag,"textBackgroundColor","direction",dr,Ll],xy=[...og,...ag,wn,"strokeWidth",hi,"deltaY","textBackgroundColor",dr,Ll],vy={_reNewline:Lu,_reSpacesAndTabs:/[ \t\r]/g,_reSpaceAndTab:/[ \t\r]/,_reWords:/\S+/g,fontSize:40,fontWeight:ip,fontFamily:"Times New Roman",underline:!1,overline:!1,linethrough:!1,textAlign:Be,fontStyle:ip,lineHeight:1.16,textBackgroundColor:"",stroke:null,shadow:null,path:void 0,pathStartOffset:0,pathSide:Be,pathAlign:"baseline",charSpacing:0,deltaY:0,direction:"ltr",CACHE_FONT_SIZE:400,MIN_TEXT_WIDTH:2,superscript:{size:.6,baseline:-.35},subscript:{size:.6,baseline:.11},_fontSizeFraction:.222,offsets:{underline:.1,linethrough:-.28167,overline:-.81333},_fontSizeMult:1.13,[dr]:66.667},Qu="justify",Yi=String.raw`[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?`,Zh=String.raw`(?:\s*,?\s+|\s*,\s*)`;var Sy=RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+Yi+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+Yi+"))?\\s+(.*)"),by={cx:Be,x:Be,r:"radius",cy:"top",y:"top",display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","letter-spacing":"charSpacing","paint-order":"paintFirst","stroke-dasharray":"strokeDashArray","stroke-dashoffset":"strokeDashOffset","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"textAnchor",opacity:"opacity","clip-path":"clipPath","clip-rule":"clipRule","vector-effect":"strokeUniform","image-rendering":"imageSmoothing","text-decoration-thickness":dr,"text-decoration-color":Ll},dp="font-size",fp="clip-path",IE=Ol(["path","circle","polygon","polyline","ellipse","rect","line","image","text"]),OE=Ol(["symbol","image","marker","pattern","view","svg"]),pp=Ol(["symbol","g","a","svg","clipPath","defs"]),LE=new RegExp(String.raw`^\s*(${Yi})${Zh}(${Yi})${Zh}(${Yi})${Zh}(${Yi})\s*$`),gp="(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?",mp=RegExp("(?:\\s|^)"+gp+gp+"("+Yi+"?(?:px)?)?(?:\\s?|$)(?:$|\\s)"),No=class ul{constructor(t={}){let e=typeof t=="string"?ul.parseShadow(t):t;Object.assign(this,ul.ownDefaults,e),this.id=Zn()}static parseShadow(t){let e=t.trim(),[,n=0,s=0,r=0]=(mp.exec(e)||[]).map(o=>parseFloat(o)||0);return{color:(e.replace(mp,"")||"rgb(0,0,0)").trim(),offsetX:n,offsetY:s,blur:r}}toString(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")}toSVG(t){let e=qu(new Q(this.offsetX,this.offsetY),we(-t.angle)),n=ue.NUM_FRACTION_DIGITS,s=new Mi(this.color),r=40,o=40;return t.width&&t.height&&(r=100*me((Math.abs(e.x)+this.blur)/t.width,n)+20,o=100*me((Math.abs(e.y)+this.blur)/t.height,n)+20),t.flipX&&(e.x*=-1),t.flipY&&(e.y*=-1),`<filter id="SVGID_${te(this.id)}" y="-${o}%" height="${100+2*o}%" x="-${r}%" width="${100+2*r}%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="${me(this.blur?this.blur/2:0,n)}"></feGaussianBlur>
	<feOffset dx="${me(e.x,n)}" dy="${me(e.y,n)}" result="oBlur" ></feOffset>
	<feFlood flood-color="${s.toRgb()}" flood-opacity="${s.getAlpha()}"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`}toObject(){let t={color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke,nonScaling:this.nonScaling,type:this.constructor.type},e=ul.ownDefaults;return this.includeDefaultValues?t:Hu(t,(n,s)=>n!==e[s])}static async fromObject(t){return new this(t)}};P(No,"ownDefaults",{color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,nonScaling:!1}),P(No,"type","shadow"),Rt.setClass(No,"shadow");var Ds=(i,t,e)=>Math.max(i,Math.min(t,e)),My=["top",Be,ts,es,"flipX","flipY","originX","originY","angle","opacity","globalCompositeOperation","shadow","visible",pr,gr],Cn=[hi,wn,"strokeWidth","strokeDashArray","width","height","paintFirst","strokeUniform","strokeLineCap","strokeDashOffset","strokeLineJoin","strokeMiterLimit","backgroundColor","clipPath"],wy={top:0,left:0,width:0,height:0,angle:0,flipX:!1,flipY:!1,scaleX:1,scaleY:1,minScaleLimit:0,skewX:0,skewY:0,originX:_e,originY:_e,strokeWidth:1,strokeUniform:!1,padding:0,opacity:1,paintFirst:hi,fill:"rgb(0,0,0)",fillRule:"nonzero",stroke:null,strokeDashArray:null,strokeDashOffset:0,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:4,globalCompositeOperation:"source-over",backgroundColor:"",shadow:null,visible:!0,includeDefaultValues:!0,excludeFromExport:!1,objectCaching:!0,clipPath:void 0,inverted:!1,absolutePositioned:!1,centeredRotation:!0,centeredScaling:!1,dirty:!0},Ty=zo({defaultEasing:()=>ug,easeInBack:()=>Jy,easeInBounce:()=>dg,easeInCirc:()=>Hy,easeInCubic:()=>Ey,easeInElastic:()=>Yy,easeInExpo:()=>ky,easeInOutBack:()=>$y,easeInOutBounce:()=>Qy,easeInOutCirc:()=>Vy,easeInOutCubic:()=>Ay,easeInOutElastic:()=>Wy,easeInOutExpo:()=>zy,easeInOutQuad:()=>jy,easeInOutQuart:()=>Iy,easeInOutQuint:()=>Ny,easeInOutSine:()=>By,easeInQuad:()=>Ky,easeInQuart:()=>Ry,easeInQuint:()=>Oy,easeInSine:()=>Py,easeOutBack:()=>Xy,easeOutBounce:()=>Zu,easeOutCirc:()=>Gy,easeOutCubic:()=>Cy,easeOutElastic:()=>qy,easeOutExpo:()=>Uy,easeOutQuad:()=>Zy,easeOutQuart:()=>Dy,easeOutQuint:()=>Ly,easeOutSine:()=>Fy}),Ku=(i,t,e,n)=>(i<Math.abs(t)?(i=t,n=e/4):n=t===0&&i===0?e/Ji*Math.asin(1):e/Ji*Math.asin(t/i),{a:i,c:t,p:e,s:n}),hg=(i,t,e,n,s)=>i*2**(10*--n)*Math.sin((n*s-t)*Ji/e),ug=(i,t,e,n)=>-e*Math.cos(i/n*jn)+e+t,Ey=(i,t,e,n)=>e*(i/n)**3+t,Cy=(i,t,e,n)=>e*((i/n-1)**3+1)+t,Ay=(i,t,e,n)=>(i/=n/2)<1?e/2*i**3+t:e/2*((i-2)**3+2)+t,Ry=(i,t,e,n)=>e*(i/=n)*i**3+t,Dy=(i,t,e,n)=>-e*((i=i/n-1)*i**3-1)+t,Iy=(i,t,e,n)=>(i/=n/2)<1?e/2*i**4+t:-e/2*((i-=2)*i**3-2)+t,Oy=(i,t,e,n)=>e*(i/n)**5+t,Ly=(i,t,e,n)=>e*((i/n-1)**5+1)+t,Ny=(i,t,e,n)=>(i/=n/2)<1?e/2*i**5+t:e/2*((i-2)**5+2)+t,Py=(i,t,e,n)=>-e*Math.cos(i/n*jn)+e+t,Fy=(i,t,e,n)=>e*Math.sin(i/n*jn)+t,By=(i,t,e,n)=>-e/2*(Math.cos(Math.PI*i/n)-1)+t,ky=(i,t,e,n)=>i===0?t:e*2**(10*(i/n-1))+t,Uy=(i,t,e,n)=>i===n?t+e:e*-(2**(-10*i/n)+1)+t,zy=(i,t,e,n)=>i===0?t:i===n?t+e:(i/=n/2)<1?e/2*2**(10*(i-1))+t:e/2*-(2**(-10*(i-1))+2)+t,Hy=(i,t,e,n)=>-e*(Math.sqrt(1-(i/=n)*i)-1)+t,Gy=(i,t,e,n)=>e*Math.sqrt(1-(i=i/n-1)*i)+t,Vy=(i,t,e,n)=>(i/=n/2)<1?-e/2*(Math.sqrt(1-i**2)-1)+t:e/2*(Math.sqrt(1-(i-=2)*i)+1)+t,Yy=(i,t,e,n)=>{let s=e,r=0;if(i===0)return t;if((i/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l}=Ku(s,e,r,1.70158);return-hg(o,a,l,i,n)+t},qy=(i,t,e,n)=>{let s=e,r=0;if(i===0)return t;if((i/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l,c}=Ku(s,e,r,1.70158);return o*2**(-10*i)*Math.sin((i*n-a)*Ji/l)+c+t},Wy=(i,t,e,n)=>{let s=e,r=0;if(i===0)return t;if((i/=n/2)==2)return t+e;r||(r=.3*1.5*n);let{a:o,s:a,p:l,c}=Ku(s,e,r,1.70158);return i<1?-.5*hg(o,a,l,i,n)+t:o*2**(-10*--i)*Math.sin((i*n-a)*Ji/l)*.5+c+t},Jy=(i,t,e,n,s=1.70158)=>e*(i/=n)*i*((s+1)*i-s)+t,Xy=(i,t,e,n,s=1.70158)=>e*((i=i/n-1)*i*((s+1)*i+s)+1)+t,$y=(i,t,e,n,s=1.70158)=>(i/=n/2)<1?e/2*(i*i*((1+(s*=1.525))*i-s))+t:e/2*((i-=2)*i*((1+(s*=1.525))*i+s)+2)+t,Zu=(i,t,e,n)=>(i/=n)<1/2.75?e*(7.5625*i*i)+t:i<2/2.75?e*(7.5625*(i-=1.5/2.75)*i+.75)+t:i<2.5/2.75?e*(7.5625*(i-=2.25/2.75)*i+.9375)+t:e*(7.5625*(i-=2.625/2.75)*i+.984375)+t,dg=(i,t,e,n)=>e-Zu(n-i,0,e,n)+t,Qy=(i,t,e,n)=>i<n/2?.5*dg(2*i,0,e,n)+t:.5*Zu(2*i-n,0,e,n)+.5*e+t,Ky=(i,t,e,n)=>e*(i/=n)*i+t,Zy=(i,t,e,n)=>-e*(i/=n)*(i-2)+t,jy=(i,t,e,n)=>(i/=n/2)<1?e/2*i**2+t:-e/2*(--i*(i-2)-1)+t,tx=()=>!1,ju=class{constructor({startValue:i,byValue:t,duration:e=500,delay:n=0,easing:s=ug,onStart:r=cl,onChange:o=cl,onComplete:a=cl,abort:l=tx,target:c}){P(this,"_state","pending"),P(this,"durationProgress",0),P(this,"valueProgress",0),this.tick=this.tick.bind(this),this.duration=e,this.delay=n,this.easing=s,this._onStart=r,this._onChange=o,this._onComplete=a,this._abort=l,this.target=c,this.startValue=i,this.byValue=t,this.value=this.startValue,this.endValue=Object.freeze(this.calculate(this.duration).value)}get state(){return this._state}isDone(){return this._state==="aborted"||this._state==="completed"}start(){let i=t=>{this._state==="pending"&&(this.startTime=t||+new Date,this._state="running",this._onStart(),this.tick(this.startTime))};this.register(),this.delay>0?this.timeout=ar().setTimeout(()=>Oo(i),this.delay):Oo(i)}tick(i){let t=(i||+new Date)-this.startTime,e=Math.min(t,this.duration);this.durationProgress=e/this.duration;let{value:n,valueProgress:s}=this.calculate(e);this.value=Object.freeze(n),this.valueProgress=s,this._state!=="aborted"&&(this._abort(this.value,this.valueProgress,this.durationProgress)?(this._state="aborted",this.unregister()):t>=this.duration?(this.durationProgress=this.valueProgress=1,this._onChange(this.endValue,this.valueProgress,this.durationProgress),this._state="completed",this._onComplete(this.endValue,this.valueProgress,this.durationProgress),this.unregister(),this.timeout=null):(this._onChange(this.value,this.valueProgress,this.durationProgress),Oo(this.tick)))}register(){ml.push(this)}unregister(){ml.remove(this)}abort(){this._state="aborted",this.unregister(),this.timeout&&ar().clearTimeout(this.timeout)}},ex=class extends ju{constructor({startValue:i=0,endValue:t=100,...e}){super({...e,startValue:i,byValue:t-i})}calculate(i){let t=this.easing(i,this.startValue,this.byValue,this.duration);return{value:t,valueProgress:Math.abs((t-this.startValue)/this.byValue)}}},ix=class extends ju{constructor({startValue:i=[0],endValue:t=[100],...e}){super({...e,startValue:i,byValue:t.map((n,s)=>n-i[s])})}calculate(i){let t=this.startValue.map((e,n)=>this.easing(i,e,this.byValue[n],this.duration,n));return{value:t,valueProgress:Math.abs((t[0]-this.startValue[0])/this.byValue[0])}}},nx=(i,t,e,n)=>t+e*(1-Math.cos(i/n*jn)),jh=i=>i&&((t,e,n)=>i(new Mi(t).toRgba(),e,n)),sx=class extends ju{constructor({startValue:i,endValue:t,easing:e=nx,onChange:n,onComplete:s,abort:r,...o}){let a=new Mi(i).getSource(),l=new Mi(t).getSource();super({...o,startValue:a,byValue:l.map((c,h)=>c-a[h]),easing:e,onChange:jh(n),onComplete:jh(s),abort:jh(r)})}calculate(i){let[t,e,n,s]=this.startValue.map((o,a)=>this.easing(i,o,this.byValue[a],this.duration,a)),r=[...[t,e,n].map(Math.round),Ds(0,s,1)];return{value:r,valueProgress:r.map((o,a)=>this.byValue[a]===0?0:Math.abs((o-this.startValue[a])/this.byValue[a])).find(o=>o!==0)||0}}};function td(i){let t=(e=>Array.isArray(e.startValue)||Array.isArray(e.endValue))(i)?new ix(i):new ex(i);return t.start(),t}function fg(i){let t=new sx(i);return t.start(),t}var Po=class He{constructor(t){this.status=t,this.points=[]}includes(t){return this.points.some(e=>e.eq(t))}append(...t){return this.points=this.points.concat(t.filter(e=>!this.includes(e))),this}static isPointContained(t,e,n,s=!1){if(e.eq(n))return t.eq(e);if(e.x===n.x)return t.x===e.x&&(s||t.y>=Math.min(e.y,n.y)&&t.y<=Math.max(e.y,n.y));if(e.y===n.y)return t.y===e.y&&(s||t.x>=Math.min(e.x,n.x)&&t.x<=Math.max(e.x,n.x));{let r=Bo(e,n),o=Bo(e,t).divide(r);return s?Math.abs(o.x)===Math.abs(o.y):o.x===o.y&&o.x>=0&&o.x<=1}}static isPointInPolygon(t,e){let n=new Q(t).setX(Math.min(t.x-1,...e.map(r=>r.x))),s=0;for(let r=0;r<e.length;r++){let o=this.intersectSegmentSegment(e[r],e[(r+1)%e.length],t,n);if(o.includes(t))return!0;s+=+(o.status==="Intersection")}return s%2==1}static intersectLineLine(t,e,n,s,r=!0,o=!0){let a=e.x-t.x,l=e.y-t.y,c=s.x-n.x,h=s.y-n.y,u=t.x-n.x,d=t.y-n.y,f=c*d-h*u,p=a*d-l*u,_=h*a-c*l;if(_!==0){let g=f/_,m=p/_;return(r||0<=g&&g<=1)&&(o||0<=m&&m<=1)?new He("Intersection").append(new Q(t.x+g*a,t.y+g*l)):new He}return new He(f===0||p===0?r||o||He.isPointContained(t,n,s)||He.isPointContained(e,n,s)||He.isPointContained(n,t,e)||He.isPointContained(s,t,e)?"Coincident":void 0:"Parallel")}static intersectSegmentLine(t,e,n,s){return He.intersectLineLine(t,e,n,s,!1,!0)}static intersectSegmentSegment(t,e,n,s){return He.intersectLineLine(t,e,n,s,!1,!1)}static intersectLinePolygon(t,e,n,s=!0){let r=new He,o=n.length;for(let a,l,c,h=0;h<o;h++){if(a=n[h],l=n[(h+1)%o],c=He.intersectLineLine(t,e,a,l,s,!1),c.status==="Coincident")return c;r.append(...c.points)}return r.points.length>0&&(r.status="Intersection"),r}static intersectSegmentPolygon(t,e,n){return He.intersectLinePolygon(t,e,n,!1)}static intersectPolygonPolygon(t,e){let n=new He,s=t.length,r=[];for(let o=0;o<s;o++){let a=t[o],l=t[(o+1)%s],c=He.intersectSegmentPolygon(a,l,e);c.status==="Coincident"?(r.push(c),n.append(a,l)):n.append(...c.points)}return r.length>0&&r.length===t.length?new He("Coincident"):(n.points.length>0&&(n.status="Intersection"),n)}static intersectPolygonRectangle(t,e,n){let s=e.min(n),r=e.max(n),o=new Q(r.x,s.y),a=new Q(s.x,r.y);return He.intersectPolygonPolygon(t,[s,o,r,a])}},rx=class extends kp{getX(){return this.getXY().x}setX(i){this.setXY(this.getXY().setX(i))}getY(){return this.getXY().y}setY(i){this.setXY(this.getXY().setY(i))}getRelativeX(){return this.left}setRelativeX(i){this.left=i}getRelativeY(){return this.top}setRelativeY(i){this.top=i}getXY(){let i=this.getRelativeXY();return this.group?Xe(i,this.group.calcTransformMatrix()):i}setXY(i,t,e){this.group&&(i=Xe(i,Si(this.group.calcTransformMatrix()))),this.setRelativeXY(i,t,e)}getRelativeXY(){return new Q(this.left,this.top)}setRelativeXY(i,t=this.originX,e=this.originY){this.setPositionByOrigin(i,t,e)}isStrokeAccountedForInDimensions(){return!1}getCoords(){let{tl:i,tr:t,br:e,bl:n}=this.aCoords||(this.aCoords=this.calcACoords()),s=[i,t,e,n];if(this.group){let r=this.group.calcTransformMatrix();return s.map(o=>Xe(o,r))}return s}intersectsWithRect(i,t){return Po.intersectPolygonRectangle(this.getCoords(),i,t).status==="Intersection"}intersectsWithObject(i){let t=Po.intersectPolygonPolygon(this.getCoords(),i.getCoords());return t.status==="Intersection"||t.status==="Coincident"||i.isContainedWithinObject(this)||this.isContainedWithinObject(i)}isContainedWithinObject(i){return this.getCoords().every(t=>i.containsPoint(t))}isContainedWithinRect(i,t){let{left:e,top:n,width:s,height:r}=this.getBoundingRect();return e>=i.x&&e+s<=t.x&&n>=i.y&&n+r<=t.y}isOverlapping(i){return this.intersectsWithObject(i)||this.isContainedWithinObject(i)||i.isContainedWithinObject(this)}containsPoint(i){return Po.isPointInPolygon(i,this.getCoords())}isOnScreen(){if(!this.canvas)return!1;let{tl:i,br:t}=this.canvas.vptCoords;return!!this.getCoords().some(e=>e.x<=t.x&&e.x>=i.x&&e.y<=t.y&&e.y>=i.y)||!!this.intersectsWithRect(i,t)||this.containsPoint(i.midPointFrom(t))}isPartiallyOnScreen(){if(!this.canvas)return!1;let{tl:i,br:t}=this.canvas.vptCoords;return!!this.intersectsWithRect(i,t)||this.getCoords().every(e=>(e.x>=t.x||e.x<=i.x)&&(e.y>=t.y||e.y<=i.y))&&this.containsPoint(i.midPointFrom(t))}getBoundingRect(){return hn(this.getCoords())}getScaledWidth(){return this._getTransformedDimensions().x}getScaledHeight(){return this._getTransformedDimensions().y}scale(i){this._set(ts,i),this._set(es,i),this.setCoords()}scaleToWidth(i){let t=this.getBoundingRect().width/this.getScaledWidth();return this.scale(i/this.width/t)}scaleToHeight(i){let t=this.getBoundingRect().height/this.getScaledHeight();return this.scale(i/this.height/t)}getCanvasRetinaScaling(){var i;return((i=this.canvas)==null?void 0:i.getRetinaScaling())||1}getTotalAngle(){return this.group?Tn(Bu(this.calcTransformMatrix())):this.angle}getViewportTransform(){var i;return((i=this.canvas)==null?void 0:i.viewportTransform)||ri.concat()}calcACoords(){let i=Is({angle:this.angle}),{x:t,y:e}=this.getRelativeCenterPoint(),n=Ee(mr(t,e),i),s=this._getTransformedDimensions(),r=s.x/2,o=s.y/2;return{tl:Xe({x:-r,y:-o},n),tr:Xe({x:r,y:-o},n),bl:Xe({x:-r,y:o},n),br:Xe({x:r,y:o},n)}}setCoords(){this.aCoords=this.calcACoords()}transformMatrixKey(i=!1){let t=[];return!i&&this.group&&(t=this.group.transformMatrixKey(i)),t.push(this.top,this.left,this.width,this.height,this.scaleX,this.scaleY,this.angle,this.strokeWidth,this.skewX,this.skewY,+this.flipX,+this.flipY,ii(this.originX),ii(this.originY)),t}calcTransformMatrix(i=!1){let t=this.calcOwnMatrix();if(i||!this.group)return t;let e=this.transformMatrixKey(i),n=this.matrixCache;return n&&n.key.every((s,r)=>s===e[r])?n.value:(this.group&&(t=Ee(this.group.calcTransformMatrix(!1),t)),this.matrixCache={key:e,value:t},t)}calcOwnMatrix(){let i=this.transformMatrixKey(!0),t=this.ownMatrixCache;if(t&&t.key.every((s,r)=>s===i[r]))return t.value;let e=this.getRelativeCenterPoint(),n=Yp({angle:this.angle,translateX:e.x,translateY:e.y,scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,flipX:this.flipX,flipY:this.flipY});return this.ownMatrixCache={key:i,value:n},n}_getNonTransformedDimensions(){return new Q(this.width,this.height).scalarAdd(this.strokeWidth)}_calculateCurrentDimensions(i){var t;let e=(t=this.canvas)==null?void 0:t.viewportTransform,n=this._getTransformedDimensions(i);return e?n.multiply(new Q(ku(e),Gp(e))).scalarAdd(2*this.padding):n.scalarAdd(2*this.padding)}_getTransformedDimensions(i={}){let t={scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,width:this.width,height:this.height,strokeWidth:this.strokeWidth,...i},e=t.strokeWidth,n=e,s=0;this.strokeUniform&&(n=0,s=e);let r=t.width+n,o=t.height+n,a;return a=t.skewX===0&&t.skewY===0?new Q(r*t.scaleX,o*t.scaleY):Al(r,o,Ho(t)),a.scalarAdd(s)}translateToGivenOrigin(i,t,e,n,s){let r=i.x,o=i.y,a=ii(n)-ii(t),l=ii(s)-ii(e);if(a||l){let c=this._getTransformedDimensions();r+=a*c.x,o+=l*c.y}return new Q(r,o)}translateToCenterPoint(i,t,e){if(t==="center"&&e==="center")return i;let n=this.translateToGivenOrigin(i,t,e,_e,_e);return this.angle?n.rotate(we(this.angle),i):n}translateToOriginPoint(i,t,e){let n=this.translateToGivenOrigin(i,_e,_e,t,e);return this.angle?n.rotate(we(this.angle),i):n}getCenterPoint(){let i=this.getRelativeCenterPoint();return this.group?Xe(i,this.group.calcTransformMatrix()):i}getRelativeCenterPoint(){return this.translateToCenterPoint(new Q(this.left,this.top),this.originX,this.originY)}getPointByOrigin(i,t){return this.getPositionByOrigin(i,t)}getPositionByOrigin(i,t){return this.translateToOriginPoint(this.getRelativeCenterPoint(),i,t)}setPositionByOrigin(i,t,e){let n=this.translateToCenterPoint(i,t,e),s=this.translateToOriginPoint(n,this.originX,this.originY);this.set({left:s.x,top:s.y})}_getLeftTopCoords(){return this.getPositionByOrigin(Be,"top")}positionByLeftTop(i){return this.setPositionByOrigin(i,Be,"top")}},Mn=class dl extends rx{static getDefaults(){return dl.ownDefaults}get type(){let t=this.constructor.type;return t==="FabricObject"?"object":t.toLowerCase()}set type(t){Kn("warn","Setting type has no effect",t)}constructor(t){super(),P(this,"_cacheContext",null),Object.assign(this,dl.ownDefaults),this.setOptions(t)}_createCacheCanvas(){this._cacheCanvas=dn(),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas(),this.dirty=!0}_limitCacheSize(t){let e=t.width,n=t.height,s=ue.maxCacheSideLimit,r=ue.minCacheSideLimit;if(e<=s&&n<=s&&e*n<=ue.perfLimitSizeTotal)return e<r&&(t.width=r),n<r&&(t.height=r),t;let o=e/n,[a,l]=Io.limitDimsByArea(o),c=Ds(r,a,s),h=Ds(r,l,s);return e>c&&(t.zoomX/=e/c,t.width=c,t.capped=!0),n>h&&(t.zoomY/=n/h,t.height=h,t.capped=!0),t}_getCacheCanvasDimensions(){let t=this.getTotalObjectScaling(),e=this._getTransformedDimensions({skewX:0,skewY:0}),n=e.x*t.x/this.scaleX,s=e.y*t.y/this.scaleY;return{width:Math.ceil(n+2),height:Math.ceil(s+2),zoomX:t.x,zoomY:t.y,x:n,y:s}}_updateCacheCanvas(){let t=this._cacheCanvas,e=this._cacheContext,{width:n,height:s,zoomX:r,zoomY:o,x:a,y:l}=this._limitCacheSize(this._getCacheCanvasDimensions()),c=n!==t.width||s!==t.height,h=this.zoomX!==r||this.zoomY!==o;if(!t||!e)return!1;if(c||h){n!==t.width||s!==t.height?(t.width=n,t.height=s):(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height));let u=a/2,d=l/2;return this.cacheTranslationX=Math.round(t.width/2-u)+u,this.cacheTranslationY=Math.round(t.height/2-d)+d,e.translate(this.cacheTranslationX,this.cacheTranslationY),e.scale(r,o),this.zoomX=r,this.zoomY=o,!0}return!1}setOptions(t={}){this._setOptions(t)}transform(t){let e=this.group&&!this.group._transformDone||this.group&&this.canvas&&t===this.canvas.contextTop,n=this.calcTransformMatrix(!e);t.transform(n[0],n[1],n[2],n[3],n[4],n[5])}getObjectScaling(){if(!this.group)return new Q(Math.abs(this.scaleX),Math.abs(this.scaleY));let t=lr(this.calcTransformMatrix());return new Q(Math.abs(t.scaleX),Math.abs(t.scaleY))}getTotalObjectScaling(){let t=this.getObjectScaling();if(this.canvas){let e=this.canvas.getZoom(),n=this.getCanvasRetinaScaling();return t.scalarMultiply(e*n)}return t}getObjectOpacity(){let t=this.opacity;return this.group&&(t*=this.group.getObjectOpacity()),t}_constrainScale(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:t===0?1e-4:t}_set(t,e){t!=="scaleX"&&t!=="scaleY"||(e=this._constrainScale(e)),t==="scaleX"&&e<0?(this.flipX=!this.flipX,e*=-1):t==="scaleY"&&e<0?(this.flipY=!this.flipY,e*=-1):t!=="shadow"||!e||e instanceof No||(e=new No(e));let n=this[t]!==e;return this[t]=e,n&&this.constructor.cacheProperties.includes(t)&&(this.dirty=!0),this.parent&&(this.dirty||n&&this.constructor.stateProperties.includes(t))&&this.parent._set("dirty",!0),this}isNotVisible(){return this.opacity===0||!this.width&&!this.height&&this.strokeWidth===0||!this.visible}render(t){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),this.transform(t),this._setOpacity(t),this._setShadow(t),this.shouldCache()?(this.renderCache(),this.drawCacheOnCanvas(t)):(this._removeCacheCanvas(),this.drawObject(t,!1,{}),this.dirty=!1),t.restore())}drawSelectionBackground(t){}renderCache(t){if(t=t||{},this._cacheCanvas&&this._cacheContext||this._createCacheCanvas(),this.isCacheDirty()&&this._cacheContext){let{zoomX:e,zoomY:n,cacheTranslationX:s,cacheTranslationY:r}=this,{width:o,height:a}=this._cacheCanvas;this.drawObject(this._cacheContext,t.forClipping,{zoomX:e,zoomY:n,cacheTranslationX:s,cacheTranslationY:r,width:o,height:a,parentClipPaths:[]}),this.dirty=!1}}_removeCacheCanvas(){this._cacheCanvas=void 0,this._cacheContext=null}hasStroke(){return!!this.stroke&&this.stroke!=="transparent"&&this.strokeWidth!==0}hasFill(){return!!this.fill&&this.fill!=="transparent"}needsItsOwnCache(){return!!(this.paintFirst==="stroke"&&this.hasFill()&&this.hasStroke()&&this.shadow)||!!this.clipPath}shouldCache(){return this.ownCaching=this.objectCaching&&(!this.parent||!this.parent.isOnACache())||this.needsItsOwnCache(),this.ownCaching}willDrawShadow(){return!!this.shadow&&(this.shadow.offsetX!==0||this.shadow.offsetY!==0)}drawClipPathOnCache(t,e,n){t.save(),e.inverted?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="destination-in",t.setTransform(1,0,0,1,0,0),t.drawImage(n,0,0),t.restore()}drawObject(t,e,n){let s=this.fill,r=this.stroke;e?(this.fill="black",this.stroke="",this._setClippingProperties(t)):this._renderBackground(t),this.fire("before:render",{ctx:t}),this._render(t),this._drawClipPath(t,this.clipPath,n),this.fill=s,this.stroke=r}createClipPathLayer(t,e){let n=bi(e),s=n.getContext("2d");if(s.translate(e.cacheTranslationX,e.cacheTranslationY),s.scale(e.zoomX,e.zoomY),t._cacheCanvas=n,e.parentClipPaths.forEach(r=>{r.transform(s)}),e.parentClipPaths.push(t),t.absolutePositioned){let r=Si(this.calcTransformMatrix());s.transform(r[0],r[1],r[2],r[3],r[4],r[5])}return t.transform(s),t.drawObject(s,!0,e),n}_drawClipPath(t,e,n){if(!e)return;e._transformDone=!0;let s=this.createClipPathLayer(e,n);this.drawClipPathOnCache(t,e,s)}drawCacheOnCanvas(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)}isCacheDirty(t=!1){if(this.isNotVisible())return!1;let e=this._cacheCanvas,n=this._cacheContext;return!(!e||!n||t||!this._updateCacheCanvas())||!!(this.dirty||this.clipPath&&this.clipPath.absolutePositioned)&&(e&&n&&!t&&(n.save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height),n.restore()),!0)}_renderBackground(t){if(!this.backgroundColor)return;let e=this._getNonTransformedDimensions();t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}_setOpacity(t){this.group&&!this.group._transformDone?t.globalAlpha=this.getObjectOpacity():t.globalAlpha*=this.opacity}_setStrokeStyles(t,e){let n=e.stroke;n&&(t.lineWidth=e.strokeWidth,t.lineCap=e.strokeLineCap,t.lineDashOffset=e.strokeDashOffset,t.lineJoin=e.strokeLineJoin,t.miterLimit=e.strokeMiterLimit,Pi(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?this._applyPatternForTransformedGradient(t,n):(t.strokeStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.strokeStyle=e.stroke)}_setFillStyles(t,{fill:e}){e&&(Pi(e)?(t.fillStyle=e.toLive(t),this._applyPatternGradientTransform(t,e)):t.fillStyle=e)}_setClippingProperties(t){t.globalAlpha=1,t.strokeStyle="transparent",t.fillStyle="#000000"}_setLineDash(t,e){e&&e.length!==0&&t.setLineDash(e)}_setShadow(t){if(!this.shadow)return;let e=this.shadow,n=this.canvas,s=this.getCanvasRetinaScaling(),[r,,,o]=n?.viewportTransform||ri,a=r*s,l=o*s,c=e.nonScaling?new Q(1,1):this.getObjectScaling();t.shadowColor=e.color,t.shadowBlur=e.blur*ue.browserShadowBlurConstant*(a+l)*(c.x+c.y)/4,t.shadowOffsetX=e.offsetX*a*c.x,t.shadowOffsetY=e.offsetY*l*c.y}_removeShadow(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)}_applyPatternGradientTransform(t,e){if(!Pi(e))return{offsetX:0,offsetY:0};let n=e.gradientTransform||e.patternTransform,s=-this.width/2+e.offsetX||0,r=-this.height/2+e.offsetY||0;return e.gradientUnits==="percentage"?t.transform(this.width,0,0,this.height,s,r):t.transform(1,0,0,1,s,r),n&&t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),{offsetX:s,offsetY:r}}_renderPaintInOrder(t){this.paintFirst==="stroke"?(this._renderStroke(t),this._renderFill(t)):(this._renderFill(t),this._renderStroke(t))}_render(t){}_renderFill(t){this.fill&&(t.save(),this._setFillStyles(t,this),this.fillRule==="evenodd"?t.fill("evenodd"):t.fill(),t.restore())}_renderStroke(t){if(this.stroke&&this.strokeWidth!==0){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this.strokeUniform){let e=this.getObjectScaling();t.scale(1/e.x,1/e.y)}this._setLineDash(t,this.strokeDashArray),this._setStrokeStyles(t,this),t.stroke(),t.restore()}}_applyPatternForTransformedGradient(t,e){var n;let s=this._limitCacheSize(this._getCacheCanvasDimensions()),r=this.getCanvasRetinaScaling(),o=s.x/this.scaleX/r,a=s.y/this.scaleY/r,l=bi({width:Math.ceil(o),height:Math.ceil(a)}),c=l.getContext("2d");c&&(c.beginPath(),c.moveTo(0,0),c.lineTo(o,0),c.lineTo(o,a),c.lineTo(0,a),c.closePath(),c.translate(o/2,a/2),c.scale(s.zoomX/this.scaleX/r,s.zoomY/this.scaleY/r),this._applyPatternGradientTransform(c,e),c.fillStyle=e.toLive(t),c.fill(),t.translate(-this.width/2-this.strokeWidth/2,-this.height/2-this.strokeWidth/2),t.scale(r*this.scaleX/s.zoomX,r*this.scaleY/s.zoomY),t.strokeStyle=(n=c.createPattern(l,"no-repeat"))==null?"":n)}_findCenterFromElement(){return new Q(this.left+this.width/2,this.top+this.height/2)}clone(t){let e=this.toObject(t);return this.constructor.fromObject(e)}cloneAsImage(t){let e=this.toCanvasElement(t);return new(Rt.getClass("image"))(e)}toCanvasElement(t={}){let e=Vu(this),n=this.group,s=this.shadow,r=Math.abs,o=t.enableRetinaScaling?Ap():1,a=(t.multiplier||1)*o,l=t.canvasProvider||(S=>new Gu(S,{enableRetinaScaling:!1,renderOnAddRemove:!1,skipOffscreen:!1}));delete this.group,t.withoutTransform&&Zp(this),t.withoutShadow&&(this.shadow=null),t.viewportTransform&&Yu(this,this.getViewportTransform()),this.setCoords();let c=dn(),h=this.getBoundingRect(),u=this.shadow,d=new Q;if(u){let S=u.blur,w=u.nonScaling?new Q(1,1):this.getObjectScaling();d.x=2*Math.round(r(u.offsetX)+S)*r(w.x),d.y=2*Math.round(r(u.offsetY)+S)*r(w.y)}let f=h.width+d.x,p=h.height+d.y;c.width=Math.ceil(f),c.height=Math.ceil(p);let _=l(c);t.format==="jpeg"&&(_.backgroundColor="#fff"),this.setPositionByOrigin(new Q(_.width/2,_.height/2),_e,_e);let g=this.canvas;_._objects=[this],this.set("canvas",_),this.setCoords();let m=_.toCanvasElement(a||1,t);return this.set("canvas",g),this.shadow=s,n&&(this.group=n),this.set(e),this.setCoords(),_._objects=[],_.destroy(),m}toDataURL(t={}){return Pu(this.toCanvasElement(t),t.format||"png",t.quality||1)}toBlob(t={}){return Fu(this.toCanvasElement(t),t.format||"png",t.quality||1)}isType(...t){return t.includes(this.constructor.type)||t.includes(this.type)}complexity(){return 1}toJSON(){return this.toObject()}rotate(t){let{centeredRotation:e,originX:n,originY:s}=this;if(e){let{x:r,y:o}=this.getRelativeCenterPoint();this.originX=_e,this.originY=_e,this.left=r,this.top=o}if(this.set("angle",t),e){let{x:r,y:o}=this.getPositionByOrigin(n,s);this.left=r,this.top=o,this.originX=n,this.originY=s}}setOnGroup(){}_setupCompositeOperation(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}dispose(){ml.cancelByTarget(this),this.off(),this._set("canvas",void 0),this._cacheCanvas&&un().dispose(this._cacheCanvas),this._cacheCanvas=void 0,this._cacheContext=null}animate(t,e){return Object.entries(t).reduce((n,[s,r])=>(n[s]=this._animate(s,r,e),n),{})}_animate(t,e,n={}){let s=t.split("."),r=this.constructor.colorProperties.includes(s[s.length-1]),{abort:o,startValue:a,onChange:l,onComplete:c}=n,h={...n,target:this,startValue:a??s.reduce((u,d)=>u[d],this),endValue:e,abort:o?.bind(this),onChange:(u,d,f)=>{s.reduce((p,_,g)=>(g===s.length-1&&(p[_]=u),p[_]),this),l&&l(u,d,f)},onComplete:(u,d,f)=>{this.setCoords(),c&&c(u,d,f)}};return r?fg(h):td(h)}isDescendantOf(t){let{parent:e,group:n}=this;return e===t||n===t||!!e&&e.isDescendantOf(t)||!!n&&n!==e&&n.isDescendantOf(t)}getAncestors(){let t=[],e=this;do e=e.parent,e&&t.push(e);while(e);return t}findCommonAncestors(t){if(this===t)return{fork:[],otherFork:[],common:[this,...this.getAncestors()]};let e=this.getAncestors(),n=t.getAncestors();if(e.length===0&&n.length>0&&this===n[n.length-1])return{fork:[],otherFork:[t,...n.slice(0,n.length-1)],common:[this]};for(let s,r=0;r<e.length;r++){if(s=e[r],s===t)return{fork:[this,...e.slice(0,r)],otherFork:[],common:e.slice(r)};for(let o=0;o<n.length;o++){if(this===n[o])return{fork:[],otherFork:[t,...n.slice(0,o)],common:[this,...e]};if(s===n[o])return{fork:[this,...e.slice(0,r)],otherFork:[t,...n.slice(0,o)],common:e.slice(r)}}}return{fork:[this,...e],otherFork:[t,...n],common:[]}}hasCommonAncestors(t){let e=this.findCommonAncestors(t);return e&&!!e.common.length}isInFrontOf(t){if(this===t)return;let e=this.findCommonAncestors(t);if(e.fork.includes(t))return!0;if(e.otherFork.includes(this))return!1;let n=e.common[0]||this.canvas;if(!n)return;let s=e.fork.pop(),r=e.otherFork.pop(),o=n._objects.indexOf(s),a=n._objects.indexOf(r);return o>-1&&o>a}toObject(t=[]){let e=t.concat(dl.customProperties,this.constructor.customProperties||[]),n,s=ue.NUM_FRACTION_DIGITS,{clipPath:r,fill:o,stroke:a,shadow:l,strokeDashArray:c,left:h,top:u,originX:d,originY:f,width:p,height:_,strokeWidth:g,strokeLineCap:m,strokeDashOffset:S,strokeLineJoin:w,strokeUniform:x,strokeMiterLimit:M,scaleX:T,scaleY:A,angle:v,flipX:E,flipY:R,opacity:D,visible:B,backgroundColor:k,fillRule:I,paintFirst:U,globalCompositeOperation:X,skewX:W,skewY:it}=this;r&&!r.excludeFromExport&&(n=r.toObject(e.concat("inverted","absolutePositioned")));let H=tt=>me(tt,s),j={...Os(this,e),type:this.constructor.type,version:ou,originX:d,originY:f,left:H(h),top:H(u),width:H(p),height:H(_),fill:np(o)?o.toObject():o,stroke:np(a)?a.toObject():a,strokeWidth:H(g),strokeDashArray:c&&c.concat(),strokeLineCap:m,strokeDashOffset:S,strokeLineJoin:w,strokeUniform:x,strokeMiterLimit:H(M),scaleX:H(T),scaleY:H(A),angle:H(v),flipX:E,flipY:R,opacity:H(D),shadow:l&&l.toObject(),visible:B,backgroundColor:k,fillRule:I,paintFirst:U,globalCompositeOperation:X,skewX:H(W),skewY:H(it),...n?{clipPath:n}:null};return this.includeDefaultValues?j:this._removeDefaultValues(j)}toDatalessObject(t){return this.toObject(t)}_removeDefaultValues(t){let e=this.constructor.getDefaults(),n=Object.keys(e).length>0?e:Object.getPrototypeOf(this);return Hu(t,(s,r)=>{if(r==="left"||r==="top"||r==="type")return!0;let o=n[r];return s!==o&&!(Array.isArray(s)&&Array.isArray(o)&&s.length===0&&o.length===0)})}toString(){return`#<${this.constructor.type}>`}static _fromObject({type:t,...e},{extraParam:n,...s}={}){return Go(e,s).then(r=>n?(delete r[n],new this(e[n],r)):new this(r))}static fromObject(t,e){return this._fromObject(t,e)}};P(Mn,"stateProperties",My),P(Mn,"cacheProperties",Cn),P(Mn,"ownDefaults",wy),P(Mn,"type","FabricObject"),P(Mn,"colorProperties",[hi,wn,"backgroundColor"]),P(Mn,"customProperties",[]),Rt.setClass(Mn),Rt.setClass(Mn,"object");var ed=(i,t)=>{var e;let{transform:{target:n}}=t;(e=n.canvas)==null||e.fire(`object:${i}`,{...t,target:n}),n.fire(i,t)},An=(i,t,e)=>(n,s,r,o)=>{let a=t(n,s,r,o);return a&&ed(i,{...$u(n,s,r,o),...e}),a};function is(i){return(t,e,n,s)=>{let{target:r,originX:o,originY:a}=e,l=r.getPositionByOrigin(o,a),c=i(t,e,n,s);return r.setPositionByOrigin(l,e.originX,e.originY),c}}var pg=(i,t,e,n)=>(s,r,o,a)=>{let l=Dl(r,r.originX,r.originY,o,a)[e],c=ii(r[t]);if(c===0||c>0&&l<0||c<0&&l>0){let{target:h}=r,u=h.strokeWidth/(h.strokeUniform?h[n]:1),d=ig(r)?2:1,f=h[i],p=Math.abs(l*d/h[n])-u;return h.set(i,Math.max(p,1)),f!==h[i]}return!1},gg=pg("width","originX","x","scaleX"),mg=pg("height","originY","y","scaleY"),cu=An(Fo,is(gg)),ox=An(Fo,is(mg));function _g(i,t,e,n,s){i.save();let{stroke:r,xSize:o,ySize:a,opName:l}=this.commonRenderProps(i,t,e,s,n),c=o;o>a?i.scale(1,a/o):a>o&&(c=a,i.scale(o/a,1)),i.beginPath(),i.arc(0,0,c/2,0,Ji,!1),i[l](),r&&i.stroke(),i.restore()}function yg(i,t,e,n,s){i.save();let{stroke:r,xSize:o,ySize:a,opName:l}=this.commonRenderProps(i,t,e,s,n),c=o/2,h=a/2;i[`${l}Rect`](-c,-h,o,a),r&&i.strokeRect(-c,-h,o,a),i.restore()}var vi=class{constructor(i){P(this,"visible",!0),P(this,"actionName",Pp),P(this,"angle",0),P(this,"x",0),P(this,"y",0),P(this,"offsetX",0),P(this,"offsetY",0),P(this,"sizeX",0),P(this,"sizeY",0),P(this,"touchSizeX",0),P(this,"touchSizeY",0),P(this,"cursorStyle","crosshair"),P(this,"withConnection",!1),Object.assign(this,i)}getTransformAnchorPoint(){var i;return(i=this.transformAnchorPoint)==null?new Q(.5-this.x,.5-this.y):i}shouldActivate(i,t,e,{tl:n,tr:s,br:r,bl:o}){var a;return((a=t.canvas)==null?void 0:a.getActiveObject())===t&&t.isControlVisible(i)&&Po.isPointInPolygon(e,[n,s,r,o])}getActionHandler(i,t,e){return this.actionHandler}getMouseDownHandler(i,t,e){return this.mouseDownHandler}getMouseUpHandler(i,t,e){return this.mouseUpHandler}cursorStyleHandler(i,t,e,n){return t.cursorStyle}getActionName(i,t,e){return t.actionName}getVisibility(i,t){var e,n;return(e=(n=i._controlsVisibility)==null?void 0:n[t])==null?this.visible:e}setVisibility(i,t,e){this.visible=i}positionHandler(i,t,e,n){return new Q(this.x*i.x+this.offsetX,this.y*i.y+this.offsetY).transform(t)}calcCornerCoords(i,t,e,n,s,r){let o=Tl([mr(e,n),Is({angle:i}),El((s?this.touchSizeX:this.sizeX)||t,(s?this.touchSizeY:this.sizeY)||t)]);return{tl:new Q(-.5,-.5).transform(o),tr:new Q(.5,-.5).transform(o),br:new Q(.5,.5).transform(o),bl:new Q(-.5,.5).transform(o)}}commonRenderProps(i,t,e,n,s={}){let{cornerSize:r,cornerColor:o,transparentCorners:a,cornerStrokeColor:l}=s,c=r||n.cornerSize,h=this.sizeX||c,u=this.sizeY||c,d=a===void 0?n.transparentCorners:a,f=d?wn:hi,p=l||n.cornerStrokeColor,_=!d&&!!p;return i.fillStyle=o||n.cornerColor||"",i.strokeStyle=p||"",i.translate(t,e),i.rotate(we(n.getTotalAngle())),{stroke:_,xSize:h,ySize:u,transparentCorners:d,opName:f}}render(i,t,e,n,s){((n=n||{}).cornerStyle||s.cornerStyle)==="circle"?_g.call(this,i,t,e,n,s):yg.call(this,i,t,e,n,s)}},xg=(i,t,e)=>e.lockRotation?Xu:t.cursorStyle,vg=An(Ip,is((i,{target:t,ex:e,ey:n,theta:s,originX:r,originY:o},a,l)=>{let c=t.getPositionByOrigin(r,o);if(Wi(t,"lockRotation"))return!1;let h=Math.atan2(n-c.y,e-c.x),u=Tn(Math.atan2(l-c.y,a-c.x)-h+s);if(t.snapAngle&&t.snapAngle>0){let f=t.snapAngle,p=t.snapThreshold||f,_=Math.ceil(u/f)*f,g=Math.floor(u/f)*f;Math.abs(u-g)<p?u=g:Math.abs(u-_)<p&&(u=_)}u<0&&(u=360+u),u%=360;let d=t.angle!==u;return t.angle=u,d}));function Sg(i,t){let e=t.canvas,n=i[e.uniScaleKey];return e.uniformScaling&&!n||!e.uniformScaling&&n}function bg(i,t,e){let n=Wi(i,"lockScalingX"),s=Wi(i,"lockScalingY");if(n&&s||!t&&(n||s)&&e||n&&t==="x"||s&&t==="y")return!0;let{width:r,height:o,strokeWidth:a}=i;return r===0&&a===0&&t!=="y"||o===0&&a===0&&t!=="x"}var ax=["e","se","s","sw","w","nw","n","ne","e"],ir=(i,t,e,n)=>{let s=Sg(i,e);return bg(e,t.x!==0&&t.y===0?"x":t.x===0&&t.y!==0?"y":"",s)?Xu:`${ax[ng(e,0,n)]}-resize`};function id(i,t,e,n,s={}){let r=t.target,o=s.by,a=Sg(i,r),l,c,h,u,d,f;if(bg(r,o,a))return!1;if(t.gestureScale)c=t.scaleX*t.gestureScale,h=t.scaleY*t.gestureScale;else{if(l=Dl(t,t.originX,t.originY,e,n),d=o==="y"?1:Math.sign(l.x||t.signX||1),f=o==="x"?1:Math.sign(l.y||t.signY||1),t.signX||(t.signX=d),t.signY||(t.signY=f),Wi(r,"lockScalingFlip")&&(t.signX!==d||t.signY!==f))return!1;if(u=r._getTransformedDimensions(),a&&!o){let g=Math.abs(l.x)+Math.abs(l.y),{original:m}=t,S=g/(Math.abs(u.x*m.scaleX/r.scaleX)+Math.abs(u.y*m.scaleY/r.scaleY));c=m.scaleX*S,h=m.scaleY*S}else c=Math.abs(l.x*r.scaleX/u.x),h=Math.abs(l.y*r.scaleY/u.y);ig(t)&&(c*=2,h*=2),t.signX!==d&&o!=="y"&&(t.originX=ap(t.originX),c*=-1,t.signX=d),t.signY!==f&&o!=="x"&&(t.originY=ap(t.originY),h*=-1,t.signY=f)}let p=r.scaleX,_=r.scaleY;return o?(o==="x"&&r.set("scaleX",c),o==="y"&&r.set("scaleY",h)):(!Wi(r,"lockScalingX")&&r.set("scaleX",c),!Wi(r,"lockScalingY")&&r.set("scaleY",h)),p!==r.scaleX||_!==r.scaleY}var uo=An(wl,is((i,t,e,n)=>id(i,t,e,n))),Mg=An(wl,is((i,t,e,n)=>id(i,t,e,n,{by:"x"}))),wg=An(wl,is((i,t,e,n)=>id(i,t,e,n,{by:"y"}))),tu={x:{counterAxis:"y",scale:ts,skew:pr,lockSkewing:"lockSkewingX",origin:"originX",flip:"flipX"},y:{counterAxis:"x",scale:es,skew:gr,lockSkewing:"lockSkewingY",origin:"originY",flip:"flipY"}},lx=["ns","nesw","ew","nwse"],Tg=(i,t,e,n)=>t.x!==0&&Wi(e,"lockSkewingY")||t.y!==0&&Wi(e,"lockSkewingX")?Xu:`${lx[ng(e,0,n)%4]}-resize`;function Eg(i,t,e,n,s){let{target:r}=e,{counterAxis:o,origin:a,lockSkewing:l,skew:c,flip:h}=tu[i];if(Wi(r,l))return!1;let{origin:u,flip:d}=tu[o],f=ii(e[u])*(r[d]?-1:1),p=-Math.sign(f)*(r[h]?-1:1),_=-(r[c]===0&&Dl(e,"center","center",n,s)[i]>0||r[c]>0?1:-1)*p*.5+.5;return An(Lp,is((g,m,S,w)=>(function(x,{target:M,ex:T,ey:A,skewingSide:v,...E},R){let{skew:D}=tu[x],B=R.subtract(new Q(T,A)).divide(new Q(M.scaleX,M.scaleY))[x],k=M[D],I=E[D],U=Math.tan(we(I)),X=x==="y"?M._getTransformedDimensions({scaleX:1,scaleY:1,skewX:0}).x:M._getTransformedDimensions({scaleX:1,scaleY:1}).y,W=2*B*v/Math.max(X,1)+U,it=Tn(Math.atan(W));M.set(D,it);let H=k!==M[D];if(H&&x==="y"){let{skewX:j,scaleX:tt}=M,Ct=M._getTransformedDimensions({skewY:k}),mt=M._getTransformedDimensions(),Zt=j===0?1:Ct.x/mt.x;Zt!==1&&M.set("scaleX",Zt*tt)}return H})(i,m,new Q(S,w))))(t,{...e,[a]:_,skewingSide:p},n,s)}var Cg=(i,t,e,n)=>Eg("x",i,t,e,n),Ag=(i,t,e,n)=>Eg("y",i,t,e,n);function Nl(i,t){return i[t.canvas.altActionKey]}var fo=(i,t,e)=>{let n=Nl(i,e);return t.x===0?n?pr:es:t.y===0?n?gr:ts:""},Cs=(i,t,e,n)=>Nl(i,e)?Tg(0,t,e,n):ir(i,t,e,n),hu=(i,t,e,n)=>Nl(i,t.target)?Ag(i,t,e,n):Mg(i,t,e,n),uu=(i,t,e,n)=>Nl(i,t.target)?Cg(i,t,e,n):wg(i,t,e,n),nd=()=>({ml:new vi({x:-.5,y:0,cursorStyleHandler:Cs,actionHandler:hu,getActionName:fo}),mr:new vi({x:.5,y:0,cursorStyleHandler:Cs,actionHandler:hu,getActionName:fo}),mb:new vi({x:0,y:.5,cursorStyleHandler:Cs,actionHandler:uu,getActionName:fo}),mt:new vi({x:0,y:-.5,cursorStyleHandler:Cs,actionHandler:uu,getActionName:fo}),tl:new vi({x:-.5,y:-.5,cursorStyleHandler:ir,actionHandler:uo}),tr:new vi({x:.5,y:-.5,cursorStyleHandler:ir,actionHandler:uo}),bl:new vi({x:-.5,y:.5,cursorStyleHandler:ir,actionHandler:uo}),br:new vi({x:.5,y:.5,cursorStyleHandler:ir,actionHandler:uo}),mtr:new vi({x:0,y:-.5,actionHandler:vg,cursorStyleHandler:xg,offsetY:-40,withConnection:!0,actionName:Op})}),Rg=()=>({mr:new vi({x:.5,y:0,actionHandler:cu,cursorStyleHandler:Cs,actionName:Fo}),ml:new vi({x:-.5,y:0,actionHandler:cu,cursorStyleHandler:Cs,actionName:Fo})}),Dg=()=>({...nd(),...Rg()}),Ig=class du extends Mn{static getDefaults(){return{...super.getDefaults(),...du.ownDefaults}}constructor(t){super(),Object.assign(this,this.constructor.createControls(),du.ownDefaults),this.setOptions(t)}static createControls(){return{controls:nd()}}_updateCacheCanvas(){let t=this.canvas;if(this.noScaleCache&&t&&t._currentTransform){let e=t._currentTransform,n=e.target,s=e.action;if(this===n&&s&&s.startsWith("scale"))return!1}return super._updateCacheCanvas()}getActiveControl(){let t=this.__corner;return t?{key:t,control:this.controls[t],coord:this.oCoords[t]}:void 0}findControl(t,e=!1){if(!this.hasControls||!this.canvas)return;this.__corner=void 0;let n=Object.entries(this.oCoords);for(let s=n.length-1;s>=0;s--){let[r,o]=n[s],a=this.controls[r];if(a.shouldActivate(r,this,t,e?o.touchCorner:o.corner))return this.__corner=r,{key:r,control:a,coord:this.oCoords[r]}}}calcOCoords(){let t=this.getViewportTransform(),e=ku(t),n=Gp(t),s=this.getCenterPoint(),r=Ee(Ee(t,Ee(mr(s.x,s.y),Is({angle:this.getTotalAngle()-(this.group&&this.flipX?180:0)}))),[1/e,0,0,1/n,0,0]),o=this.group?lr(this.calcTransformMatrix()):void 0;o&&(o.scaleX=Math.abs(o.scaleX),o.scaleY=Math.abs(o.scaleY));let a=this._calculateCurrentDimensions(o),l={};return this.forEachControl((c,h)=>{let u=c.positionHandler(a,r,this,c);l[h]=Object.assign(u,this._calcCornerCoords(c,u))}),l}_calcCornerCoords(t,e){let n=this.getTotalAngle();return{corner:t.calcCornerCoords(n,this.cornerSize,e.x,e.y,!1,this),touchCorner:t.calcCornerCoords(n,this.touchCornerSize,e.x,e.y,!0,this)}}setCoords(){super.setCoords(),this.canvas&&(this.oCoords=this.calcOCoords())}forEachControl(t){for(let e in this.controls)t(this.controls[e],e,this)}drawSelectionBackground(t){if(!this.selectionBackgroundColor||this.canvas&&this.canvas._activeObject!==this)return;t.save();let e=this.getRelativeCenterPoint(),n=this._calculateCurrentDimensions(),s=this.getViewportTransform();t.translate(e.x,e.y),t.scale(1/s[0],1/s[3]),t.rotate(we(this.angle)),t.fillStyle=this.selectionBackgroundColor,t.fillRect(-n.x/2,-n.y/2,n.x,n.y),t.restore()}strokeBorders(t,e){t.strokeRect(-e.x/2,-e.y/2,e.x,e.y)}_drawBorders(t,e,n={}){let s={hasControls:this.hasControls,borderColor:this.borderColor,borderDashArray:this.borderDashArray,...n};t.save(),t.strokeStyle=s.borderColor,this._setLineDash(t,s.borderDashArray),this.strokeBorders(t,e),s.hasControls&&this.drawControlsConnectingLines(t,e),t.restore()}_renderControls(t,e={}){let{hasBorders:n,hasControls:s}=this,r={hasBorders:n,hasControls:s,...e},o=this.getViewportTransform(),a=r.hasBorders,l=r.hasControls,c=lr(Ee(o,this.calcTransformMatrix()));t.save(),t.translate(c.translateX,c.translateY),t.lineWidth=this.borderScaleFactor,this.group===this.parent&&(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.flipX&&(c.angle-=180);let h=Bu(o);t.rotate(this.group?we(c.angle):we(this.angle)+h),a&&this.drawBorders(t,c,e),l&&this.drawControls(t,e),t.restore()}drawBorders(t,e,n){let s;if(n&&n.forActiveSelection||this.group){let r=Al(this.width,this.height,Ho(e)),o=this.isStrokeAccountedForInDimensions()?Nu:(this.strokeUniform?new Q().scalarAdd(this.canvas?this.canvas.getZoom():1):new Q(e.scaleX,e.scaleY)).scalarMultiply(this.strokeWidth);s=r.add(o).scalarAdd(this.borderScaleFactor).scalarAdd(2*this.padding)}else s=this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);this._drawBorders(t,s,n)}drawControlsConnectingLines(t,e){let n=!1;t.beginPath(),this.forEachControl((s,r)=>{s.withConnection&&s.getVisibility(this,r)&&(n=!0,t.moveTo(s.x*e.x,s.y*e.y),t.lineTo(s.x*e.x+s.offsetX,s.y*e.y+s.offsetY))}),n&&t.stroke()}drawControls(t,e={}){t.save();let n=this.getCanvasRetinaScaling(),{cornerStrokeColor:s,cornerDashArray:r,cornerColor:o}=this,a={cornerStrokeColor:s,cornerDashArray:r,cornerColor:o,...e};t.setTransform(n,0,0,n,0,0),t.strokeStyle=t.fillStyle=a.cornerColor,this.transparentCorners||(t.strokeStyle=a.cornerStrokeColor),this._setLineDash(t,a.cornerDashArray),this.forEachControl((l,c)=>{if(l.getVisibility(this,c)){let h=this.oCoords[c];l.render(t,h.x,h.y,a,this)}}),t.restore()}isControlVisible(t){return this.controls[t]&&this.controls[t].getVisibility(this,t)}setControlVisible(t,e){this._controlsVisibility||(this._controlsVisibility={}),this._controlsVisibility[t]=e}setControlsVisibility(t={}){Object.entries(t).forEach(([e,n])=>this.setControlVisible(e,n))}clearContextTop(t){if(!this.canvas)return;let e=this.canvas.contextTop;if(!e)return;let n=this.canvas.viewportTransform;e.save(),e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.transform(e);let s=this.width+4,r=this.height+4;return e.clearRect(-s/2,-r/2,s,r),t||e.restore(),e}onDeselect(t){return!1}onSelect(t){return!1}shouldStartDragging(t){return!1}onDragStart(t){return!1}canDrop(t){return!1}renderDragSourceEffect(t){}renderDropTargetEffect(t){}};function Og(i,t){return t.forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(i.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n)||Object.create(null))})}),i}P(Ig,"ownDefaults",{noScaleCache:!0,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,cornerSize:13,touchCornerSize:24,transparentCorners:!0,cornerColor:"rgb(178,204,255)",cornerStrokeColor:"",cornerStyle:"rect",cornerDashArray:null,hasControls:!0,borderColor:"rgb(178,204,255)",borderDashArray:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,hasBorders:!0,selectionBackgroundColor:"",selectable:!0,evented:!0,perPixelTargetFind:!1,activeOn:"down",hoverCursor:null,moveCursor:null});var $e=class extends Ig{};Og($e,[rg]),Rt.setClass($e),Rt.setClass($e,"object");var Lg=(i,t,e,n)=>{let s=2*(n=Math.round(n))+1,{data:r}=i.getImageData(t-n,e-n,s,s);for(let o=3;o<r.length;o+=4)if(r[o]>0)return!1;return!0},Ng=class{constructor(i){this.options=i,this.strokeProjectionMagnitude=this.options.strokeWidth/2,this.scale=new Q(this.options.scaleX,this.options.scaleY),this.strokeUniformScalar=this.options.strokeUniform?new Q(1/this.options.scaleX,1/this.options.scaleY):new Q(1,1)}createSideVector(i,t){let e=Bo(i,t);return this.options.strokeUniform?e.multiply(this.scale):e}projectOrthogonally(i,t,e){return this.applySkew(i.add(this.calcOrthogonalProjection(i,t,e)))}isSkewed(){return this.options.skewX!==0||this.options.skewY!==0}applySkew(i){let t=new Q(i);return t.y+=t.x*Math.tan(we(this.options.skewY)),t.x+=t.y*Math.tan(we(this.options.skewX)),t}scaleUnitVector(i,t){return i.multiply(this.strokeUniformScalar).scalarMultiply(t)}},cx=new Q,Pg=class fl extends Ng{static getOrthogonalRotationFactor(t,e){let n=e?xl(t,e):Wu(t);return Math.abs(n)<jn?-1:1}constructor(t,e,n,s){super(s),P(this,"AB",void 0),P(this,"AC",void 0),P(this,"alpha",void 0),P(this,"bisector",void 0),this.A=new Q(t),this.B=new Q(e),this.C=new Q(n),this.AB=this.createSideVector(this.A,this.B),this.AC=this.createSideVector(this.A,this.C),this.alpha=xl(this.AB,this.AC),this.bisector=Rl(qu(this.AB.eq(cx)?this.AC:this.AB,this.alpha/2))}calcOrthogonalProjection(t,e,n=this.strokeProjectionMagnitude){let s=Ju(this.createSideVector(t,e)),r=fl.getOrthogonalRotationFactor(s,this.bisector);return this.scaleUnitVector(s,n*r)}projectBevel(){let t=[];return(this.alpha%Ji===0?[this.B]:[this.B,this.C]).forEach(e=>{t.push(this.projectOrthogonally(this.A,e)),t.push(this.projectOrthogonally(this.A,e,-this.strokeProjectionMagnitude))}),t}projectMiter(){let t=[],e=Math.abs(this.alpha),n=1/Math.sin(e/2),s=this.scaleUnitVector(this.bisector,-this.strokeProjectionMagnitude*n),r=this.options.strokeUniform?yl(this.scaleUnitVector(this.bisector,this.options.strokeMiterLimit)):this.options.strokeMiterLimit;return yl(s)/this.strokeProjectionMagnitude<=r&&t.push(this.applySkew(this.A.add(s))),t.push(...this.projectBevel()),t}projectRoundNoSkew(t,e){let n=[],s=new Q(fl.getOrthogonalRotationFactor(this.bisector),fl.getOrthogonalRotationFactor(new Q(this.bisector.y,this.bisector.x)));return[new Q(1,0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(s),new Q(0,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(s)].forEach(r=>{lu(r,t,e)&&n.push(this.A.add(r))}),n}projectRoundWithSkew(t,e){let n=[],{skewX:s,skewY:r,scaleX:o,scaleY:a,strokeUniform:l}=this.options,c=new Q(Math.tan(we(s)),Math.tan(we(r))),h=this.strokeProjectionMagnitude,u=l?h/a/Math.sqrt(1/a**2+1/o**2*c.y**2):h/Math.sqrt(1+c.y**2),d=new Q(Math.sqrt(Math.max(h**2-u**2,0)),u),f=l?h/Math.sqrt(1+c.x**2*(1/a)**2/(1/o+1/o*c.x*c.y)**2):h/Math.sqrt(1+c.x**2/(1+c.x*c.y)**2),p=new Q(f,Math.sqrt(Math.max(h**2-f**2,0)));return[p,p.scalarMultiply(-1),d,d.scalarMultiply(-1)].map(_=>this.applySkew(l?_.multiply(this.strokeUniformScalar):_)).forEach(_=>{lu(_,t,e)&&n.push(this.applySkew(this.A).add(_))}),n}projectRound(){let t=[];t.push(...this.projectBevel());let e=this.alpha%Ji===0,n=this.applySkew(this.A),s=t[e?0:2].subtract(n),r=t[+!!e].subtract(n),o=rr(s,e?this.applySkew(this.AB.scalarMultiply(-1)):this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)))>0,a=o?s:r,l=o?r:s;return this.isSkewed()?t.push(...this.projectRoundWithSkew(a,l)):t.push(...this.projectRoundNoSkew(a,l)),t}projectPoints(){switch(this.options.strokeLineJoin){case"miter":return this.projectMiter();case"round":return this.projectRound();default:return this.projectBevel()}}project(){return this.projectPoints().map(t=>({originPoint:this.A,projectedPoint:t,angle:this.alpha,bisector:this.bisector}))}},_p=class extends Ng{constructor(i,t,e){super(e),this.A=new Q(i),this.T=new Q(t)}calcOrthogonalProjection(i,t,e=this.strokeProjectionMagnitude){let n=this.createSideVector(i,t);return this.scaleUnitVector(Ju(n),e)}projectButt(){return[this.projectOrthogonally(this.A,this.T,this.strokeProjectionMagnitude),this.projectOrthogonally(this.A,this.T,-this.strokeProjectionMagnitude)]}projectRound(){let i=[];if(!this.isSkewed()&&this.A.eq(this.T)){let t=new Q(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);i.push(this.applySkew(this.A.add(t)),this.applySkew(this.A.subtract(t)))}else i.push(...new Pg(this.A,this.T,this.T,this.options).projectRound());return i}projectSquare(){let i=[];if(this.A.eq(this.T)){let t=new Q(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);i.push(this.A.add(t),this.A.subtract(t))}else{let t=this.calcOrthogonalProjection(this.A,this.T,this.strokeProjectionMagnitude),e=this.scaleUnitVector(Rl(this.createSideVector(this.A,this.T)),-this.strokeProjectionMagnitude),n=this.A.add(e);i.push(n.add(t),n.subtract(t))}return i.map(t=>this.applySkew(t))}projectPoints(){switch(this.options.strokeLineCap){case"round":return this.projectRound();case"square":return this.projectSquare();default:return this.projectButt()}}project(){return this.projectPoints().map(i=>({originPoint:this.A,projectedPoint:i}))}},Fg=(i,t,e=!1)=>{let n=[];if(i.length===0)return n;let s=i.reduce((r,o)=>(r[r.length-1].eq(o)||r.push(new Q(o)),r),[new Q(i[0])]);if(s.length===1)e=!0;else if(!e){let r=s[0],o=((a,l)=>{for(let c=a.length-1;c>=0;c--)if(l(a[c],c,a))return c;return-1})(s,a=>!a.eq(r));s.splice(o+1)}return s.forEach((r,o,a)=>{let l,c;o===0?(c=a[1],l=e?r:a[a.length-1]):o===a.length-1?(l=a[o-1],c=e?r:a[0]):(l=a[o-1],c=a[o+1]),e&&a.length===1?n.push(...new _p(r,r,t).project()):!e||o!==0&&o!==a.length-1?n.push(...new Pg(r,l,c,t).project()):n.push(...new _p(r,o===0?c:l,t).project())}),n},sd=i=>{let t={};return Object.keys(i).forEach(e=>{t[e]={},Object.keys(i[e]).forEach(n=>{t[e][n]={...i[e][n]}})}),t},Pl=(i,t,e=!1)=>i.fill!==t.fill||i.stroke!==t.stroke||i.strokeWidth!==t.strokeWidth||i.fontSize!==t.fontSize||i.fontFamily!==t.fontFamily||i.fontWeight!==t.fontWeight||i.fontStyle!==t.fontStyle||i.textDecorationThickness!==t.textDecorationThickness||i.textDecorationColor!==t.textDecorationColor||i.textBackgroundColor!==t.textBackgroundColor||i.deltaY!==t.deltaY||e&&(i.overline!==t.overline||i.underline!==t.underline||i.linethrough!==t.linethrough),Bg=(i,t)=>{let e=t.split(`
`),n=[],s=-1,r={};i=sd(i);for(let o=0;o<e.length;o++){let a=Cl(e[o]);if(i[o])for(let l=0;l<a.length;l++){s++;let c=i[o][l];c&&Object.keys(c).length>0&&(Pl(r,c,!0)?n.push({start:s,end:s+1,style:c}):n[n.length-1].end++),r=c||{}}else s+=a.length,r={}}return n},kg=(i,t)=>{if(!Array.isArray(i))return sd(i);let e=t.split(Lu),n={},s=-1,r=0;for(let o=0;o<e.length;o++){let a=Cl(e[o]);for(let l=0;l<a.length;l++)s++,i[r]&&i[r].start<=s&&s<i[r].end&&(n[o]=n[o]||{},n[o][l]={...i[r].style},s===i[r].end-1&&r++)}return n},ns=["display","transform",hi,"fill-opacity","fill-rule","opacity",wn,"stroke-dasharray","stroke-linecap","stroke-dashoffset","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id","paint-order","vector-effect","instantiated_by_use","clip-path"];function yp(i,t){let e=i.nodeName,n=i.getAttribute("class"),s=i.getAttribute("id"),r="(?![a-zA-Z\\-]+)",o;if(o=RegExp("^"+e,"i"),t=t.replace(o,""),s&&t.length&&(o=RegExp("#"+s+r,"i"),t=t.replace(o,"")),n&&t.length){let a=n.split(" ");for(let l=a.length;l--;)o=RegExp("\\."+a[l]+r,"i"),t=t.replace(o,"")}return t.length===0}function hx(i,t){let e=!0,n=yp(i,t.pop());return n&&t.length&&(e=(function(s,r){let o,a=!0;for(;s.parentElement&&s.parentElement.nodeType===1&&r.length;)a&&(o=r.pop()),a=yp(s=s.parentElement,o);return r.length===0})(i,t)),n&&e&&t.length===0}function ux(i,t={}){let e={};for(let n in t)hx(i,n.split(" "))&&(e={...e,...t[n]});return e}var dx=i=>{var t;return(t=by[i])==null?i:t},fx=RegExp(`(${Yi})`,"gi"),ni=`(${Yi})`,px=String.raw`(skewX)\(${ni}\)`,gx=String.raw`(skewY)\(${ni}\)`,mx=String.raw`(rotate)\(${ni}(?: ${ni} ${ni})?\)`,_x=String.raw`(scale)\(${ni}(?: ${ni})?\)`,yx=String.raw`(translate)\(${ni}(?: ${ni})?\)`,rd=`(?:${String.raw`(matrix)\(${ni} ${ni} ${ni} ${ni} ${ni} ${ni}\)`}|${yx}|${mx}|${_x}|${px}|${gx})`,xx=`(?:${rd}*)`,vx=String.raw`^\s*(?:${xx}?)\s*$`,Sx=new RegExp(vx),bx=new RegExp(rd),Mx=new RegExp(rd,"g");function fu(i){let t=[];if(!(i=(e=>vl(e.replace(fx," $1 ").replace(/,/gi," ")))(i).replace(/\s*([()])\s*/gi,"$1"))||i&&!Sx.test(i))return[...ri];for(let e of i.matchAll(Mx)){let n=bx.exec(e[0]);if(!n)continue;let s=ri,[,r,...o]=n.filter(f=>!!f),[a,l,c,h,u,d]=o.map(f=>parseFloat(f));switch(r){case"translate":s=mr(a,l);break;case Op:s=Is({angle:a},{x:l,y:c});break;case Pp:s=El(a,l);break;case pr:s=Uu(a);break;case gr:s=zu(a);break;case"matrix":s=[a,l,c,h,u,d]}t.push(s)}return Tl(t)}function wx(i,t,e,n){let s=Array.isArray(t),r,o=t;if(i!=="fill"&&i!=="stroke"||t!=="none"){if(i==="strokeUniform")return t==="non-scaling-stroke";if(i==="strokeDashArray")o=t==="none"?null:t.replace(/,/g," ").split(/\s+/).map(parseFloat);else if(i==="transformMatrix")o=e&&e.transformMatrix?Ee(e.transformMatrix,fu(t)):fu(t);else if(i==="visible")o=t!=="none"&&t!=="hidden",e&&e.visible===!1&&(o=!1);else if(i==="opacity")o=parseFloat(t),e&&e.opacity!==void 0&&(o*=e.opacity);else if(i==="textAnchor")o=t==="start"?Be:t==="end"?qi:_e;else if(i==="charSpacing"||i==="textDecorationThickness")r=Rs(t,n)/n*1e3;else if(i==="paintFirst"){let a=t.indexOf(hi),l=t.indexOf(wn);o=hi,(a>-1&&l>-1&&l<a||a===-1&&l>-1)&&(o=wn)}else{if(i==="href"||i==="xlink:href"||i==="font"||i==="id")return t;if(i==="imageSmoothing")return t==="optimizeQuality";r=s?t.map(Rs):Rs(t,n)}}else o="";return!s&&isNaN(r)?o:r}function Tx(i,t){i.replace(/;\s*$/,"").split(";").forEach(e=>{if(!e)return;let[n,s]=e.split(":");t[n.trim().toLowerCase()]=s.trim()})}function Ex(i){let t={},e=i.getAttribute("style");return e&&(typeof e=="string"?Tx(e,t):(function(n,s){Object.entries(n).forEach(([r,o])=>{o!==void 0&&(s[r.toLowerCase()]=o)})})(e,t)),t}var Cx={stroke:"strokeOpacity",fill:"fillOpacity"};function Rn(i,t,e){if(!i)return{};let n,s={},r=16;i.parentNode&&pp.test(i.parentNode.nodeName)&&(s=Rn(i.parentElement,t,e),s.fontSize&&(n=r=Rs(s.fontSize)));let o={...t.reduce((c,h)=>{let u=i.getAttribute(h);return u&&(c[h]=u),c},{}),...ux(i,e),...Ex(i)};o["clip-path"]&&i.setAttribute(fp,o[fp]),o["font-size"]&&(n=Rs(o[dp],r),o[dp]=`${n}`);let a={};for(let c in o){let h=dx(c);a[h]=wx(h,o[c],s,n)}a&&a.font&&(function(c,h){let u=c.match(Sy);if(!u)return;let d=u[1],f=u[3],p=u[4],_=u[5],g=u[6];d&&(h.fontStyle=d),f&&(h.fontWeight=isNaN(parseFloat(f))?f:parseFloat(f)),p&&(h.fontSize=Rs(p)),g&&(h.fontFamily=g),_&&(h.lineHeight=_==="normal"?1:_)})(a.font,a);let l={...s,...a};return pp.test(i.nodeName)?l:(function(c){let h=$e.getDefaults();return Object.entries(Cx).forEach(([u,d])=>{if(c[d]===void 0||c[u]==="")return;if(c[u]===void 0){if(!h[u])return;c[u]=h[u]}if(c[u].indexOf("url(")===0)return;let f=new Mi(c[u]);c[u]=f.setAlpha(me(f.getAlpha()*c[d],2)).toRgba()}),c})(l)}var Ug=["rx","ry"],Gi=class pu extends $e{static getDefaults(){return{...super.getDefaults(),...pu.ownDefaults}}constructor(t){super(),Object.assign(this,pu.ownDefaults),this.setOptions(t),this._initRxRy()}_initRxRy(){let{rx:t,ry:e}=this;t&&!e?this.ry=t:e&&!t&&(this.rx=e)}_render(t){let{width:e,height:n}=this,s=-e/2,r=-n/2,o=this.rx?Math.min(this.rx,e/2):0,a=this.ry?Math.min(this.ry,n/2):0,l=o!==0||a!==0;t.beginPath(),t.moveTo(s+o,r),t.lineTo(s+e-o,r),l&&t.bezierCurveTo(s+e-.4477152502*o,r,s+e,r+.4477152502*a,s+e,r+a),t.lineTo(s+e,r+n-a),l&&t.bezierCurveTo(s+e,r+n-.4477152502*a,s+e-.4477152502*o,r+n,s+e-o,r+n),t.lineTo(s+o,r+n),l&&t.bezierCurveTo(s+.4477152502*o,r+n,s,r+n-.4477152502*a,s,r+n-a),t.lineTo(s,r+a),l&&t.bezierCurveTo(s,r+.4477152502*a,s+.4477152502*o,r,s+o,r),t.closePath(),this._renderPaintInOrder(t)}toObject(t=[]){return super.toObject([...Ug,...t])}_toSVG(){let{width:t,height:e,rx:n,ry:s}=this;return["<rect ","COMMON_PARTS",`x="${-t/2}" y="${-e/2}" rx="${te(n)}" ry="${te(s)}" width="${te(t)}" height="${te(e)}" />
`]}static async fromElement(t,e,n){let{left:s=0,top:r=0,width:o=0,height:a=0,visible:l=!0,...c}=Rn(t,this.ATTRIBUTE_NAMES,n);return new this({...e,...c,left:s,top:r,width:o,height:a,visible:!!(l&&o&&a)})}};P(Gi,"type","Rect"),P(Gi,"cacheProperties",[...Cn,...Ug]),P(Gi,"ownDefaults",{rx:0,ry:0}),P(Gi,"ATTRIBUTE_NAMES",[...ns,"x","y","rx","ry","width","height"]),Rt.setClass(Gi),Rt.setSVGClass(Gi);var xp="initialization",gu="added",zg=(i,t)=>{let{strokeUniform:e,strokeWidth:n,width:s,height:r,group:o}=t,a=o&&o!==i?Vo(o.calcTransformMatrix(),i.calcTransformMatrix()):null,l=a?t.getRelativeCenterPoint().transform(a):t.getRelativeCenterPoint(),c=!t.isStrokeAccountedForInDimensions(),h=e&&c?jp(new Q(n,n),void 0,i.calcTransformMatrix()):Nu,u=!e&&c?n:0,d=Al(s+u,r+u,Tl([a,t.calcOwnMatrix()],!0)).add(h).scalarDivide(2);return[l.subtract(d),l.add(d)]},Fl=class{calcLayoutResult(i,t){if(this.shouldPerformLayout(i))return this.calcBoundingBox(t,i)}shouldPerformLayout({type:i,prevStrategy:t,strategy:e}){return i==="initialization"||i==="imperative"||!!t&&e!==t}shouldLayoutClipPath({type:i,target:{clipPath:t}}){return i!=="initialization"&&t&&!t.absolutePositioned}getInitialSize(i,t){return t.size}calcBoundingBox(i,t){let{type:e,target:n}=t;if(e==="imperative"&&t.overrides)return t.overrides;if(i.length===0)return;let{left:s,top:r,width:o,height:a}=hn(i.map(h=>zg(n,h)).reduce((h,u)=>h.concat(u),[])),l=new Q(o,a),c=new Q(s,r).add(l.scalarDivide(2));if(e==="initialization"){let h=this.getInitialSize(t,{size:l,center:c});return{center:c,relativeCorrection:new Q(0,0),size:h}}return{center:c.transform(n.calcOwnMatrix()),size:l}}};P(Fl,"type","strategy");var mu=class extends Fl{shouldPerformLayout(i){return!0}};P(mu,"type","fit-content"),Rt.setClass(mu);var Hg="layoutManager",Uo=class{constructor(i=new mu){P(this,"strategy",void 0),this.strategy=i,this._subscriptions=new Map}performLayout(i){let t={bubbles:!0,strategy:this.strategy,...i,prevStrategy:this._prevLayoutStrategy,stopPropagation(){this.bubbles=!1}};this.onBeforeLayout(t);let e=this.getLayoutResult(t);e&&this.commitLayout(t,e),this.onAfterLayout(t,e),this._prevLayoutStrategy=t.strategy}attachHandlers(i,t){let{target:e}=t;return[Fp,Dp,Fo,Ip,wl,Lp,gl,Np,"modifyPath"].map(n=>i.on(n,s=>this.performLayout(n==="modified"?{type:"object_modified",trigger:n,e:s,target:e}:{type:"object_modifying",trigger:n,e:s,target:e})))}subscribe(i,t){this.unsubscribe(i,t);let e=this.attachHandlers(i,t);this._subscriptions.set(i,e)}unsubscribe(i,t){(this._subscriptions.get(i)||[]).forEach(e=>e()),this._subscriptions.delete(i)}unsubscribeTargets(i){i.targets.forEach(t=>this.unsubscribe(t,i))}subscribeTargets(i){i.targets.forEach(t=>this.subscribe(t,i))}onBeforeLayout(i){let{target:t,type:e}=i,{canvas:n}=t;if(e==="initialization"||e==="added"?this.subscribeTargets(i):e==="removed"&&this.unsubscribeTargets(i),t.fire("layout:before",{context:i}),n&&n.fire("object:layout:before",{target:t,context:i}),e==="imperative"&&i.deep){let{strategy:s,...r}=i;t.forEachObject(o=>o.layoutManager&&o.layoutManager.performLayout({...r,bubbles:!1,target:o}))}}getLayoutResult(i){let{target:t,strategy:e,type:n}=i,s=e.calcLayoutResult(i,t.getObjects());if(!s)return;let r=n==="initialization"?new Q:t.getRelativeCenterPoint(),{center:o,correction:a=new Q,relativeCorrection:l=new Q}=s;return{result:s,prevCenter:r,nextCenter:o,offset:r.subtract(o).add(a).transform(n==="initialization"?ri:Si(t.calcOwnMatrix()),!0).add(l)}}commitLayout(i,t){let{target:e}=i,{result:{size:n},nextCenter:s}=t;var r,o;e.set({width:n.x,height:n.y}),this.layoutObjects(i,t),i.type==="initialization"?e.set({left:(r=i.x)==null?s.x+n.x*ii(e.originX):r,top:(o=i.y)==null?s.y+n.y*ii(e.originY):o}):(e.setPositionByOrigin(s,_e,_e),e.setCoords(),e.set("dirty",!0))}layoutObjects(i,t){let{target:e}=i;e.forEachObject(n=>{n.group===e&&this.layoutObject(i,t,n)}),i.strategy.shouldLayoutClipPath(i)&&this.layoutObject(i,t,e.clipPath)}layoutObject(i,{offset:t},e){e.set({left:e.left+t.x,top:e.top+t.y})}onAfterLayout(i,t){let{target:e,strategy:n,bubbles:s,prevStrategy:r,...o}=i,{canvas:a}=e;e.fire("layout:after",{context:i,result:t}),a&&a.fire("object:layout:after",{context:i,result:t,target:e});let l=e.parent;s&&l!=null&&l.layoutManager&&((o.path||(o.path=[])).push(e),l.layoutManager.performLayout({...o,target:l})),e.set("dirty",!0)}dispose(){let{_subscriptions:i}=this;i.forEach(t=>t.forEach(e=>e())),i.clear()}toObject(){return{type:Hg,strategy:this.strategy.constructor.type}}toJSON(){return this.toObject()}};Rt.setClass(Uo,Hg);var Ax=class extends Uo{performLayout(){}},or=class _u extends Bp($e){static getDefaults(){return{...super.getDefaults(),..._u.ownDefaults}}constructor(t=[],e={}){super(),P(this,"_activeObjects",[]),P(this,"__objectSelectionTracker",void 0),P(this,"__objectSelectionDisposer",void 0),Object.assign(this,_u.ownDefaults),this.setOptions(e),this.groupInit(t,e)}groupInit(t,e){var n;this._objects=[...t],this.__objectSelectionTracker=this.__objectSelectionMonitor.bind(this,!0),this.__objectSelectionDisposer=this.__objectSelectionMonitor.bind(this,!1),this.forEachObject(s=>{this.enterGroup(s,!1)}),this.layoutManager=(n=e.layoutManager)==null?new Uo:n,this.layoutManager.performLayout({type:xp,target:this,targets:[...t],x:e.left,y:e.top})}canEnterGroup(t){return t===this||this.isDescendantOf(t)?(Kn("error","Group: circular object trees are not supported, this call has no effect"),!1):this._objects.indexOf(t)===-1||(Kn("error","Group: duplicate objects are not supported inside group, this call has no effect"),!1)}_filterObjectsBeforeEnteringGroup(t){return t.filter((e,n,s)=>this.canEnterGroup(e)&&s.indexOf(e)===n)}add(...t){let e=this._filterObjectsBeforeEnteringGroup(t),n=super.add(...e);return this._onAfterObjectsChange(gu,e),n}insertAt(t,...e){let n=this._filterObjectsBeforeEnteringGroup(e),s=super.insertAt(t,...n);return this._onAfterObjectsChange(gu,n),s}remove(...t){let e=super.remove(...t);return this._onAfterObjectsChange("removed",e),e}_onObjectAdded(t){this.enterGroup(t,!0),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t,e){this.exitGroup(t,e),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onAfterObjectsChange(t,e){this.layoutManager.performLayout({type:t,targets:e,target:this})}_onStackOrderChanged(){this._set("dirty",!0)}_set(t,e){let n=this[t];return super._set(t,e),t==="canvas"&&n!==e&&(this._objects||[]).forEach(s=>{s._set(t,e)}),this}_shouldSetNestedCoords(){return this.subTargetCheck}removeAll(){return this._activeObjects=[],this.remove(...this._objects)}__objectSelectionMonitor(t,{target:e}){let n=this._activeObjects;if(t)n.push(e),this._set("dirty",!0);else if(n.length>0){let s=n.indexOf(e);s>-1&&(n.splice(s,1),this._set("dirty",!0))}}_watchObject(t,e){t&&this._watchObject(!1,e),t?(e.on("selected",this.__objectSelectionTracker),e.on("deselected",this.__objectSelectionDisposer)):(e.off("selected",this.__objectSelectionTracker),e.off("deselected",this.__objectSelectionDisposer))}enterGroup(t,e){t.group&&t.group.remove(t),t._set("parent",this),this._enterGroup(t,e)}_enterGroup(t,e){e&&ur(t,Ee(Si(this.calcTransformMatrix()),t.calcTransformMatrix())),this._shouldSetNestedCoords()&&t.setCoords(),t._set("group",this),t._set("canvas",this.canvas),this._watchObject(!0,t);let n=this.canvas&&this.canvas.getActiveObject&&this.canvas.getActiveObject();n&&(n===t||t.isDescendantOf(n))&&this._activeObjects.push(t)}exitGroup(t,e){this._exitGroup(t,e),t._set("parent",void 0),t._set("canvas",void 0)}_exitGroup(t,e){t._set("group",void 0),e||(ur(t,Ee(this.calcTransformMatrix(),t.calcTransformMatrix())),t.setCoords()),this._watchObject(!1,t);let n=this._activeObjects.length>0?this._activeObjects.indexOf(t):-1;n>-1&&this._activeObjects.splice(n,1)}shouldCache(){let t=$e.prototype.shouldCache.call(this);if(t){for(let e=0;e<this._objects.length;e++)if(this._objects[e].willDrawShadow())return this.ownCaching=!1,!1}return t}willDrawShadow(){if(super.willDrawShadow())return!0;for(let t=0;t<this._objects.length;t++)if(this._objects[t].willDrawShadow())return!0;return!1}isOnACache(){return this.ownCaching||!!this.parent&&this.parent.isOnACache()}drawObject(t,e,n){this._renderBackground(t);for(let r=0;r<this._objects.length;r++){var s;let o=this._objects[r];(s=this.canvas)!=null&&s.preserveObjectStacking&&o.group!==this?(t.save(),t.transform(...Si(this.calcTransformMatrix())),o.render(t),t.restore()):o.group===this&&o.render(t)}this._drawClipPath(t,this.clipPath,n)}setCoords(){super.setCoords(),this._shouldSetNestedCoords()&&this.forEachObject(t=>t.setCoords())}triggerLayout(t={}){this.layoutManager.performLayout({target:this,type:"imperative",...t})}render(t){this._transformDone=!0,super.render(t),this._transformDone=!1}__serializeObjects(t,e){let n=this.includeDefaultValues;return this._objects.filter(function(s){return!s.excludeFromExport}).map(function(s){let r=s.includeDefaultValues;s.includeDefaultValues=n;let o=s[t||"toObject"](e);return s.includeDefaultValues=r,o})}toObject(t=[]){let e=this.layoutManager.toObject();return{...super.toObject(["subTargetCheck","interactive",...t]),...e.strategy!=="fit-content"||this.includeDefaultValues?{layoutManager:e}:{},objects:this.__serializeObjects("toObject",t)}}toString(){return`#<Group: (${this.complexity()})>`}dispose(){this.layoutManager.unsubscribeTargets({targets:this.getObjects(),target:this}),this._activeObjects=[],this.forEachObject(t=>{this._watchObject(!1,t),t.dispose()}),super.dispose()}_createSVGBgRect(t){if(!this.backgroundColor)return"";let e=Gi.prototype._toSVG.call(this),n=e.indexOf("COMMON_PARTS");e[n]='for="group" ';let s=e.join("");return t?t(s):s}_toSVG(t){let e=["<g ","COMMON_PARTS",` >
`],n=this._createSVGBgRect(t);n&&e.push("		",n);for(let s=0;s<this._objects.length;s++)e.push("		",this._objects[s].toSVG(t));return e.push(`</g>
`),e}getSvgStyles(){let t=this.opacity!==void 0&&this.opacity!==1?`opacity: ${te(this.opacity)};`:"",e=this.visible?"":" visibility: hidden;";return[t,this.getSvgFilter(),e].join("")}toClipPathSVG(t){let e=[],n=this._createSVGBgRect(t);n&&e.push("	",n);for(let s=0;s<this._objects.length;s++)e.push("	",this._objects[s].toClipPathSVG(t));return this._createBaseClipPathSVGMarkup(e,{reviver:t})}static fromObject({type:t,objects:e=[],layoutManager:n,...s},r){return Promise.all([cr(e,r),Go(s,r)]).then(([o,a])=>{let l=new this(o,{...s,...a,layoutManager:new Ax});return l.layoutManager=n?new(Rt.getClass(n.type))(new(Rt.getClass(n.strategy))):new Uo,l.layoutManager.subscribeTargets({type:xp,target:l,targets:l.getObjects()}),l.setCoords(),l})}};P(or,"type","Group"),P(or,"ownDefaults",{strokeWidth:0,subTargetCheck:!1,interactive:!1}),Rt.setClass(or);var Rx=(i,t)=>i&&i.length===1?i[0]:new or(i,t),Gg=(i,t)=>Math.min(t.width/i.width,t.height/i.height),Vg=(i,t)=>Math.max(t.width/i.width,t.height/i.height),yu="\\s*,?\\s*",co=`${yu}(${Yi})`,Dx=`${co}${co}${co}${yu}([01])${yu}([01])${co}${co}`,Ix={m:"l",M:"L"},Ox=(i,t,e,n,s,r,o,a,l,c,h)=>{let u=Xi(i),d=$i(i),f=Xi(t),p=$i(t),_=e*s*f-n*r*p+o,g=n*s*f+e*r*p+a;return["C",c+l*(-e*s*d-n*r*u),h+l*(-n*s*d+e*r*u),_+l*(e*s*p+n*r*f),g+l*(n*s*p-e*r*f),_,g]},vp=(i,t,e,n)=>{let s=Math.atan2(t,i),r=Math.atan2(n,e);return r>=s?r-s:2*Math.PI-(s-r)};function xu(i,t,e,n,s,r,o,a){let l;if(ue.cachesBoundsOfCurve&&(l=[...arguments].join(),Io.boundsOfCurveCache[l]))return Io.boundsOfCurveCache[l];let c=Math.sqrt,h=Math.abs,u=[],d=[[0,0],[0,0]],f=6*i-12*e+6*s,p=-3*i+9*e-9*s+3*o,_=3*e-3*i;for(let x=0;x<2;++x){if(x>0&&(f=6*t-12*n+6*r,p=-3*t+9*n-9*r+3*a,_=3*n-3*t),h(p)<1e-12){if(h(f)<1e-12)continue;let E=-_/f;0<E&&E<1&&u.push(E);continue}let M=f*f-4*_*p;if(M<0)continue;let T=c(M),A=(-f+T)/(2*p);0<A&&A<1&&u.push(A);let v=(-f-T)/(2*p);0<v&&v<1&&u.push(v)}let g=u.length,m=g,S=qg(i,t,e,n,s,r,o,a);for(;g--;){let{x,y:M}=S(u[g]);d[0][g]=x,d[1][g]=M}d[0][m]=i,d[1][m]=t,d[0][m+1]=o,d[1][m+1]=a;let w=[new Q(Math.min(...d[0]),Math.min(...d[1])),new Q(Math.max(...d[0]),Math.max(...d[1]))];return ue.cachesBoundsOfCurve&&(Io.boundsOfCurveCache[l]=w),w}var Lx=(i,t,[e,n,s,r,o,a,l,c])=>{let h=((u,d,f,p,_,g,m)=>{if(f===0||p===0)return[];let S=0,w=0,x=0,M=Math.PI,T=m*Ou,A=$i(T),v=Xi(T),E=.5*(-v*u-A*d),R=.5*(-v*d+A*u),D=f**2,B=p**2,k=R**2,I=E**2,U=D*B-D*k-B*I,X=Math.abs(f),W=Math.abs(p);if(U<0){let at=Math.sqrt(1-U/(D*B));X*=at,W*=at}else x=(_===g?-1:1)*Math.sqrt(U/(D*k+B*I));let it=x*X*R/W,H=-x*W*E/X,j=v*it-A*H+.5*u,tt=A*it+v*H+.5*d,Ct=vp(1,0,(E-it)/X,(R-H)/W),mt=vp((E-it)/X,(R-H)/W,(-E-it)/X,(-R-H)/W);g===0&&mt>0?mt-=2*M:g===1&&mt<0&&(mt+=2*M);let Zt=Math.ceil(Math.abs(mt/M*2)),Wt=[],dt=mt/Zt,Y=8/3*Math.sin(dt/4)*Math.sin(dt/4)/Math.sin(dt/2),J=Ct+dt;for(let at=0;at<Zt;at++)Wt[at]=Ox(Ct,J,v,A,X,W,j,tt,Y,S,w),S=Wt[at][5],w=Wt[at][6],Ct=J,J+=dt;return Wt})(l-i,c-t,n,s,o,a,r);for(let u=0,d=h.length;u<d;u++)h[u][1]+=i,h[u][2]+=t,h[u][3]+=i,h[u][4]+=t,h[u][5]+=i,h[u][6]+=t;return h},Yg=i=>{let t=0,e=0,n=0,s=0,r=[],o,a=0,l=0;for(let c of i){let h=[...c],u;switch(h[0]){case"l":h[1]+=t,h[2]+=e;case"L":t=h[1],e=h[2],u=["L",t,e];break;case"h":h[1]+=t;case"H":t=h[1],u=["L",t,e];break;case"v":h[1]+=e;case"V":e=h[1],u=["L",t,e];break;case"m":h[1]+=t,h[2]+=e;case"M":t=h[1],e=h[2],n=h[1],s=h[2],u=["M",t,e];break;case"c":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e,h[5]+=t,h[6]+=e;case"C":a=h[3],l=h[4],t=h[5],e=h[6],u=["C",h[1],h[2],a,l,t,e];break;case"s":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"S":o==="C"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[3],e=h[4],u=["C",a,l,h[1],h[2],t,e],a=u[3],l=u[4];break;case"q":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"Q":a=h[1],l=h[2],t=h[3],e=h[4],u=["Q",a,l,t,e];break;case"t":h[1]+=t,h[2]+=e;case"T":o==="Q"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[1],e=h[2],u=["Q",a,l,t,e];break;case"a":h[6]+=t,h[7]+=e;case"A":Lx(t,e,h).forEach(d=>r.push(d)),t=h[6],e=h[7];break;case"z":case"Z":t=n,e=s,u=["Z"]}u?(r.push(u),o=u[0]):o=""}return r},Sl=(i,t,e,n)=>Math.sqrt((e-i)**2+(n-t)**2),qg=(i,t,e,n,s,r,o,a)=>l=>{let c=l**3,h=(f=>3*f**2*(1-f))(l),u=(f=>3*f*(1-f)**2)(l),d=(f=>(1-f)**3)(l);return new Q(o*c+s*h+e*u+i*d,a*c+r*h+n*u+t*d)},Wg=i=>i**2,Jg=i=>2*i*(1-i),Xg=i=>(1-i)**2,Nx=(i,t,e,n,s,r,o,a)=>l=>{let c=Wg(l),h=Jg(l),u=Xg(l),d=3*(u*(e-i)+h*(s-e)+c*(o-s)),f=3*(u*(n-t)+h*(r-n)+c*(a-r));return Math.atan2(f,d)},Px=(i,t,e,n,s,r)=>o=>{let a=Wg(o),l=Jg(o),c=Xg(o);return new Q(s*a+e*l+i*c,r*a+n*l+t*c)},Fx=(i,t,e,n,s,r)=>o=>{let a=1-o,l=2*(a*(e-i)+o*(s-e)),c=2*(a*(n-t)+o*(r-n));return Math.atan2(c,l)},Sp=(i,t,e)=>{let n=new Q(t,e),s=0;for(let r=1;r<=100;r+=1){let o=i(r/100);s+=Sl(n.x,n.y,o.x,o.y),n=o}return s},Bx=(i,t)=>{let e,n=0,s=0,r={x:i.x,y:i.y},o={...r},a=.01,l=0,c=i.iterator,h=i.angleFinder;for(;s<t&&a>1e-4;)o=c(n),l=n,e=Sl(r.x,r.y,o.x,o.y),e+s>t?(n-=a,a/=2):(r=o,n+=a,s+=e);return{...o,angle:h(l)}},od=i=>{let t,e,n=0,s=0,r=0,o=0,a=0,l=[];for(let c of i){let h={x:s,y:r,command:c[0],length:0};switch(c[0]){case"M":e=h,e.x=o=s=c[1],e.y=a=r=c[2];break;case"L":e=h,e.length=Sl(s,r,c[1],c[2]),s=c[1],r=c[2];break;case"C":t=qg(s,r,c[1],c[2],c[3],c[4],c[5],c[6]),e=h,e.iterator=t,e.angleFinder=Nx(s,r,c[1],c[2],c[3],c[4],c[5],c[6]),e.length=Sp(t,s,r),s=c[5],r=c[6];break;case"Q":t=Px(s,r,c[1],c[2],c[3],c[4]),e=h,e.iterator=t,e.angleFinder=Fx(s,r,c[1],c[2],c[3],c[4]),e.length=Sp(t,s,r),s=c[3],r=c[4];break;case"Z":e=h,e.destX=o,e.destY=a,e.length=Sl(s,r,o,a),s=o,r=a}n+=e.length,l.push(e)}return l.push({length:n,x:s,y:r}),l},$g=(i,t,e=od(i))=>{let n=0;for(;t-e[n].length>0&&n<e.length-2;)t-=e[n].length,n++;let s=e[n],r=t/s.length,o=i[n];switch(s.command){case"M":return{x:s.x,y:s.y,angle:0};case"Z":return{...new Q(s.x,s.y).lerp(new Q(s.destX,s.destY),r),angle:Math.atan2(s.destY-s.y,s.destX-s.x)};case"L":return{...new Q(s.x,s.y).lerp(new Q(o[1],o[2]),r),angle:Math.atan2(o[2]-s.y,o[1]-s.x)};case"C":case"Q":return Bx(s,t)}},kx=RegExp("[mzlhvcsqta][^mzlhvcsqta]*","gi"),bp=new RegExp(Dx,"g"),Ux=new RegExp(Yi,"gi"),zx={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},Qg=i=>{var t;let e=[],n=(t=i.match(kx))==null?[]:t;for(let s of n){let r=s[0];if(r==="z"||r==="Z"){e.push([r]);continue}let o=zx[r.toLowerCase()],a=[];if(r==="a"||r==="A"){let l;for(bp.lastIndex=0;l=bp.exec(s);)a.push(...l.slice(1))}else a=s.match(Ux)||[];for(let l=0;l<a.length;l+=o){let c=Array(o),h=Ix[r];c[0]=l>0&&h?h:r;for(let u=0;u<o;u++)c[u+1]=parseFloat(a[l+u]);e.push(c)}}return e},Hx=(i,t=0)=>{let e=new Q(i[0]),n=new Q(i[1]),s=1,r=0,o=[],a=i.length,l=a>2,c;for(l&&(s=i[2].x<n.x?-1:i[2].x===n.x?0:1,r=i[2].y<n.y?-1:i[2].y===n.y?0:1),o.push(["M",e.x-s*t,e.y-r*t]),c=1;c<a;c++){if(!e.eq(n)){let h=e.midPointFrom(n);o.push(["Q",e.x,e.y,h.x,h.y])}e=i[c],c+1<i.length&&(n=i[c+1])}return l&&(s=e.x>i[c-2].x?1:e.x===i[c-2].x?0:-1,r=e.y>i[c-2].y?1:e.y===i[c-2].y?0:-1),o.push(["L",e.x+s*t,e.y+r*t]),o},Gx=(i,t,e)=>(e&&(t=Ee(t,[1,0,0,1,-e.x,-e.y])),i.map(n=>{let s=[...n];for(let r=1;r<n.length-1;r+=2){let{x:o,y:a}=Xe({x:n[r],y:n[r+1]},t);s[r]=o,s[r+1]=a}return s})),Vx=(i,t)=>{let e=2*Math.PI/i,n=-jn;i%2==0&&(n+=e/2);let s=Array(i+1);for(let r=0;r<i;r++){let o=r*e+n,{x:a,y:l}=new Q(Xi(o),$i(o)).scalarMultiply(t);s[r]=[r===0?"M":"L",a,l]}return s[i]=["Z"],s},Kg=(i,t)=>i.map(e=>e.map((n,s)=>s===0||t===void 0?n:me(n,t)).join(" ")).join(" "),Yx=(i,t)=>{var e;let n=i,s=t;n.inverted&&!s.inverted&&(n=t,s=i),Yu(s,(e=s.group)==null?void 0:e.calcTransformMatrix(),n.calcTransformMatrix());let r=n.inverted&&s.inverted;return r&&(n.inverted=s.inverted=!1),new or([n],{clipPath:s,inverted:r})},qx=(i,t)=>Math.floor(Math.random()*(t-i+1))+i,Wx=(i,t)=>{let e=i._findCenterFromElement();i.transformMatrix&&((n=>{if(n.transformMatrix){let{scaleX:s,scaleY:r,angle:o,skewX:a}=lr(n.transformMatrix);n.flipX=!1,n.flipY=!1,n.set(ts,s),n.set(es,r),n.angle=o,n.skewX=a,n.skewY=0}})(i),e=e.transform(i.transformMatrix)),delete i.transformMatrix,t&&(i.scaleX*=t.scaleX,i.scaleY*=t.scaleY,i.cropX=t.cropX,i.cropY=t.cropY,e.x+=t.offsetLeft,e.y+=t.offsetTop,i.width=t.width,i.height=t.height),i.setPositionByOrigin(e,_e,_e)},NE=zo({addTransformToObject:()=>Kp,animate:()=>td,animateColor:()=>fg,applyTransformToObject:()=>ur,calcAngleBetweenVectors:()=>xl,calcDimensionsMatrix:()=>Ho,calcPlaneChangeMatrix:()=>Vo,calcVectorRotation:()=>Wu,cancelAnimFrame:()=>Up,capValue:()=>Ds,composeMatrix:()=>Yp,copyCanvasElement:()=>ay,cos:()=>Xi,createCanvasElement:()=>dn,createImage:()=>zp,createRotateMatrix:()=>Is,createScaleMatrix:()=>El,createSkewXMatrix:()=>Uu,createSkewYMatrix:()=>zu,createTranslateMatrix:()=>mr,createVector:()=>Bo,crossProduct:()=>rr,degreesToRadians:()=>we,dotProduct:()=>eg,ease:()=>Ty,enlivenObjectEnlivables:()=>Go,enlivenObjects:()=>cr,findScaleToCover:()=>Vg,findScaleToFit:()=>Gg,getBoundsOfCurve:()=>xu,getOrthonormalVector:()=>Ju,getPathSegmentsInfo:()=>od,getPointOnPath:()=>$g,getPointer:()=>Qp,getRandomInt:()=>qx,getRegularPolygonPath:()=>Vx,getSmoothPathFromPoints:()=>Hx,getSvgAttributes:()=>yy,getUnitVector:()=>Rl,groupSVGElements:()=>Rx,hasStyleChanged:()=>Pl,invertTransform:()=>Si,isBetweenVectors:()=>lu,isIdentityMatrix:()=>Hp,isTouchEvent:()=>_l,isTransparent:()=>Lg,joinPath:()=>Kg,loadImage:()=>Lo,magnitude:()=>yl,makeBoundingBoxFromPoints:()=>hn,makePathSimpler:()=>Yg,matrixToSVG:()=>hr,mergeClipPaths:()=>Yx,multiplyTransformMatrices:()=>Ee,multiplyTransformMatrixArray:()=>Tl,parsePath:()=>Qg,parsePreserveAspectRatioAttribute:()=>sg,parseUnit:()=>Rs,pick:()=>Os,projectStrokeOnPoints:()=>Fg,qrDecompose:()=>lr,radiansToDegrees:()=>Tn,removeFromArray:()=>Ms,removeTransformFromObject:()=>py,removeTransformMatrixForSvgParsing:()=>Wx,requestAnimFrame:()=>Oo,resetObjectTransform:()=>Zp,rotateVector:()=>qu,saveObjectTransform:()=>Vu,sendObjectToPlane:()=>Yu,sendPointToPlane:()=>En,sendVectorToPlane:()=>jp,sin:()=>$i,sizeAfterTransform:()=>Al,string:()=>cy,stylesFromArray:()=>kg,stylesToArray:()=>Bg,toBlob:()=>Fu,toDataURL:()=>Pu,toFixed:()=>me,transformPath:()=>Gx,transformPoint:()=>Xe});function vu(i,t){let e=i.style;e&&Object.entries(t).forEach(([n,s])=>e.setProperty(n,s))}var Jx=class extends Xp{constructor(i,{allowTouchScrolling:t=!1,containerClass:e=""}={}){super(i),P(this,"upper",void 0),P(this,"container",void 0);let{el:n}=this.lower,s=this.createUpperCanvas();this.upper={el:s,ctx:s.getContext("2d")},this.applyCanvasStyle(n,{allowTouchScrolling:t}),this.applyCanvasStyle(s,{allowTouchScrolling:t,styles:{position:"absolute",left:"0",top:"0"}});let r=this.createContainerElement();r.classList.add(e),n.parentNode&&n.parentNode.replaceChild(r,n),r.append(n,s),this.container=r}createUpperCanvas(){let{el:i}=this.lower,t=dn();return t.className=i.className,t.classList.remove("lower-canvas"),t.classList.add("upper-canvas"),t.setAttribute("data-fabric","top"),t.style.cssText=i.style.cssText,t.setAttribute("draggable","true"),t}createContainerElement(){let i=fr().createElement("div");return i.setAttribute("data-fabric","wrapper"),vu(i,{position:"relative"}),rp(i),i}applyCanvasStyle(i,t){let{styles:e,allowTouchScrolling:n}=t;vu(i,{...e,"touch-action":n?"manipulation":Ml}),rp(i)}setDimensions(i,t){super.setDimensions(i,t);let{el:e,ctx:n}=this.upper;Jp(e,n,i,t)}setCSSDimensions(i){super.setCSSDimensions(i),au(this.upper.el,i),au(this.container,i)}cleanupDOM(i){let t=this.container,{el:e}=this.lower,{el:n}=this.upper;super.cleanupDOM(i),t.removeChild(n),t.removeChild(e),t.parentNode&&t.parentNode.replaceChild(e,t)}dispose(){super.dispose(),un().dispose(this.upper.el),delete this.upper,delete this.container}},Zg=(i,t,e,n)=>{let{target:s,offsetX:r,offsetY:o}=t,a=e-r,l=n-o,c=!Wi(s,"lockMovementX")&&s.left!==a,h=!Wi(s,"lockMovementY")&&s.top!==l;return c&&s.set("left",a),h&&s.set("top",l),(c||h)&&ed(Dp,$u(i,t,e,n)),c||h},jg=Np,tm=i=>function(t,e,n){let{points:s,pathOffset:r}=n;return new Q(s[i]).subtract(r).transform(Ee(n.getViewportTransform(),n.calcTransformMatrix()))},em=(i,t,e,n)=>{let{target:s,pointIndex:r}=t,o=s,a=En(new Q(e,n),void 0,o.calcOwnMatrix());return o.points[r]=a.add(o.pathOffset),o.setDimensions(),o.set("dirty",!0),!0},im=(i,t)=>function(e,n,s,r){let o=n.target,a=new Q(o.points[(i>0?i:o.points.length)-1]),l=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()),c=t(e,{...n,pointIndex:i},s,r),h=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()).subtract(l);return o.left-=h.x,o.top-=h.y,c},nm=i=>An(jg,im(i,em));function Xx(i,t={}){let e={};for(let n=0;n<(typeof i=="number"?i:i.points.length);n++)e[`p${n}`]=new vi({actionName:jg,positionHandler:tm(n),actionHandler:nm(n),...t});return e}var Su=(i,t,e)=>{let{path:n,pathOffset:s}=i,r=n[t];return new Q(r[e]-s.x,r[e+1]-s.y).transform(Ee(i.getViewportTransform(),i.calcTransformMatrix()))};function $x(i,t,e){let{commandIndex:n,pointIndex:s}=this;return Su(e,n,s)}function Qx(i,t,e,n){let{target:s}=t,{commandIndex:r,pointIndex:o}=this,a=((l,c,h,u,d)=>{let{path:f,pathOffset:p}=l,_=f[(u>0?u:f.length)-1],g=new Q(_[d],_[d+1]),m=g.subtract(p).transform(l.calcOwnMatrix()),S=En(new Q(c,h),void 0,l.calcOwnMatrix());f[u][d]=S.x+p.x,f[u][d+1]=S.y+p.y,l.setDimensions();let w=g.subtract(l.pathOffset).transform(l.calcOwnMatrix()).subtract(m);return l.left-=w.x,l.top-=w.y,l.set("dirty",!0),!0})(s,e,n,r,o);return a&&ed(this.actionName,{...$u(i,t,e,n),commandIndex:r,pointIndex:o}),a}var sm=class extends vi{constructor(i){super(i)}render(i,t,e,n,s){let r={...n,cornerColor:this.controlFill,cornerStrokeColor:this.controlStroke,transparentCorners:!this.controlFill};super.render(i,t,e,r,s)}},Kx=class extends sm{constructor(i){super(i)}render(i,t,e,n,s){let{path:r}=s,{commandIndex:o,pointIndex:a,connectToCommandIndex:l,connectToPointIndex:c}=this;i.save(),i.strokeStyle=this.controlStroke,this.connectionDashArray&&i.setLineDash(this.connectionDashArray);let[h]=r[o],u=Su(s,l,c);if(h==="Q"){let d=Su(s,o,a+2);i.moveTo(d.x,d.y),i.lineTo(t,e)}else i.moveTo(t,e);i.lineTo(u.x,u.y),i.stroke(),i.restore(),super.render(i,t,e,n,s)}},ja=(i,t,e,n,s,r)=>new(e?Kx:sm)({commandIndex:i,pointIndex:t,actionName:"modifyPath",positionHandler:$x,actionHandler:Qx,connectToCommandIndex:s,connectToPointIndex:r,...n,...e?n.controlPointStyle:n.pointStyle});function Zx(i,t={}){let e={},n="M";return i.path.forEach((s,r)=>{let o=s[0];switch(o!=="Z"&&(e[`c_${r}_${o}`]=ja(r,s.length-2,!1,t)),o){case"C":e[`c_${r}_C_CP_1`]=ja(r,1,!0,t,r-1,(a=>a==="C"?5:a==="Q"?3:1)(n)),e[`c_${r}_C_CP_2`]=ja(r,3,!0,t,r,5);break;case"Q":e[`c_${r}_Q_CP_1`]=ja(r,1,!0,t,r,3)}n=o}),e}var PE=zo({changeHeight:()=>ox,changeObjectHeight:()=>mg,changeObjectWidth:()=>gg,changeWidth:()=>cu,createObjectDefaultControls:()=>nd,createPathControls:()=>Zx,createPolyActionHandler:()=>nm,createPolyControls:()=>Xx,createPolyPositionHandler:()=>tm,createResizeControls:()=>Rg,createTextboxDefaultControls:()=>Dg,dragHandler:()=>Zg,factoryPolyActionHandler:()=>im,getLocalPoint:()=>Dl,polyActionHandler:()=>em,renderCircleControl:()=>_g,renderSquareControl:()=>yg,rotationStyleHandler:()=>xg,rotationWithSnapping:()=>vg,scaleCursorStyleHandler:()=>ir,scaleOrSkewActionName:()=>fo,scaleSkewCursorStyleHandler:()=>Cs,scalingEqually:()=>uo,scalingX:()=>Mg,scalingXOrSkewingY:()=>hu,scalingY:()=>wg,scalingYOrSkewingX:()=>uu,skewCursorStyleHandler:()=>Tg,skewHandlerX:()=>Cg,skewHandlerY:()=>Ag,wrapWithFireEvent:()=>An,wrapWithFixedAnchor:()=>is}),rm=class om extends Gu{constructor(...t){super(...t),P(this,"_hoveredTargets",[]),P(this,"_currentTransform",null),P(this,"_groupSelector",null),P(this,"contextTopDirty",!1)}static getDefaults(){return{...super.getDefaults(),...om.ownDefaults}}get upperCanvasEl(){var t;return(t=this.elements.upper)==null?void 0:t.el}get contextTop(){var t;return(t=this.elements.upper)==null?void 0:t.ctx}get wrapperEl(){return this.elements.container}initElements(t){this.elements=new Jx(t,{allowTouchScrolling:this.allowTouchScrolling,containerClass:this.containerClass}),this._createCacheCanvas()}_onObjectAdded(t){this._objectsToRender=void 0,super._onObjectAdded(t)}_onObjectRemoved(t){this._objectsToRender=void 0,t===this._activeObject&&(this.fire("before:selection:cleared",{deselected:[t]}),this._discardActiveObject(),this.fire("selection:cleared",{deselected:[t]}),t.fire("deselected",{target:t})),t===this._hoveredTarget&&(this._hoveredTarget=void 0,this._hoveredTargets=[]),super._onObjectRemoved(t)}_onStackOrderChanged(){this._objectsToRender=void 0,super._onStackOrderChanged()}_chooseObjectsToRender(){let t=this._activeObject;return!this.preserveObjectStacking&&t?this._objects.filter(e=>!e.group&&e!==t).concat(t):this._objects}renderAll(){this.cancelRequestedRender(),this.destroyed||(!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1),this.hasLostContext&&(this.renderTopLayer(this.contextTop),this.hasLostContext=!1),!this._objectsToRender&&(this._objectsToRender=this._chooseObjectsToRender()),this.renderCanvas(this.getContext(),this._objectsToRender))}renderTopLayer(t){t.save(),this.isDrawingMode&&this._isCurrentlyDrawing&&(this.freeDrawingBrush&&this.freeDrawingBrush._render(),this.contextTopDirty=!0),this.selection&&this._groupSelector&&(this._drawSelection(t),this.contextTopDirty=!0),t.restore()}renderTop(){let t=this.contextTop;this.clearContext(t),this.renderTopLayer(t),this.fire("after:render",{ctx:t})}setTargetFindTolerance(t){t=Math.round(t),this.targetFindTolerance=t;let e=this.getRetinaScaling(),n=Math.ceil((2*t+1)*e);this.pixelFindCanvasEl.width=this.pixelFindCanvasEl.height=n,this.pixelFindContext.scale(e,e)}isTargetTransparent(t,e,n){let s=this.targetFindTolerance,r=this.pixelFindContext;this.clearContext(r),r.save(),r.translate(-e+s,-n+s),r.transform(...this.viewportTransform);let o=t.selectionBackgroundColor;t.selectionBackgroundColor="",t.render(r),t.selectionBackgroundColor=o,r.restore();let a=Math.round(s*this.getRetinaScaling());return Lg(r,a,a,a)}_isSelectionKeyPressed(t){let e=this.selectionKey;return!!e&&(Array.isArray(e)?!!e.find(n=>!!n&&t[n]===!0):t[e])}_shouldClearSelection(t,e){let n=this.getActiveObjects(),s=this._activeObject;return!!(!e||e&&s&&n.length>1&&n.indexOf(e)===-1&&s!==e&&!this._isSelectionKeyPressed(t)||e&&!e.evented||e&&!e.selectable&&s&&s!==e)}_shouldCenterTransform(t,e,n){if(!t)return;let s;return e==="scale"||e==="scaleX"||e==="scaleY"||e==="resizing"?s=this.centeredScaling||t.centeredScaling:e==="rotate"&&(s=this.centeredRotation||t.centeredRotation),s?!n:n}_getOriginFromCorner(t,e){let n=e?t.controls[e].getTransformAnchorPoint():{x:t.originX,y:t.originY};return e&&(["ml","tl","bl"].includes(e)?n.x=qi:["mr","tr","br"].includes(e)&&(n.x=Be),["tl","mt","tr"].includes(e)?n.y=Rp:["bl","mb","br"].includes(e)&&(n.y="top")),n}_setupCurrentTransform(t,e,n){var s;let r=e.group?En(this.getScenePoint(t),void 0,e.group.calcTransformMatrix()):this.getScenePoint(t),{key:o="",control:a}=e.getActiveControl()||{},l=n&&a?(s=a.getActionHandler(t,e,a))==null?void 0:s.bind(a):Zg,c=((v,E,R,D)=>{if(!E||!v)return"drag";let B=D.controls[E];return B.getActionName(R,B,D)})(n,o,t,e),h=t[this.centeredKey],u=this._shouldCenterTransform(e,c,h)?{x:_e,y:_e}:this._getOriginFromCorner(e,o),{scaleX:d,scaleY:f,skewX:p,skewY:_,left:g,top:m,angle:S,width:w,height:x,cropX:M,cropY:T}=e,A={target:e,action:c,actionHandler:l,actionPerformed:!1,corner:o,scaleX:d,scaleY:f,skewX:p,skewY:_,offsetX:r.x-g,offsetY:r.y-m,originX:u.x,originY:u.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,theta:we(S),width:w,height:x,shiftKey:t.shiftKey,altKey:h,original:{...Vu(e),originX:u.x,originY:u.y,cropX:M,cropY:T}};this._currentTransform=A,this.fire("before:transform",{e:t,transform:A})}setCursor(t){this.upperCanvasEl.style.cursor=t}_drawSelection(t){let{x:e,y:n,deltaX:s,deltaY:r}=this._groupSelector,o=new Q(e,n).transform(this.viewportTransform),a=new Q(e+s,n+r).transform(this.viewportTransform),l=this.selectionLineWidth/2,c=Math.min(o.x,a.x),h=Math.min(o.y,a.y),u=Math.max(o.x,a.x),d=Math.max(o.y,a.y);this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(c,h,u-c,d-h)),this.selectionLineWidth&&this.selectionBorderColor&&(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,c+=l,h+=l,u-=l,d-=l,$e.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(c,h,u-c,d-h))}findTarget(t){if(this._targetInfo)return this._targetInfo;if(this.skipTargetFind)return{subTargets:[],currentSubTargets:[]};let e=this.getScenePoint(t),n=this._activeObject,s=this.getActiveObjects(),r=this.searchPossibleTargets(this._objects,e),{subTargets:o,container:a,target:l}=r,c={...r,currentSubTargets:o,currentContainer:a,currentTarget:l};if(!n)return c;let h={...this.searchPossibleTargets([n],e),currentSubTargets:o,currentContainer:a,currentTarget:l};return n.findControl(this.getViewportPoint(t),_l(t))?{...h,target:n}:h.target&&(s.length>1||!this.preserveObjectStacking||this.preserveObjectStacking&&t[this.altSelectionKey])?h:c}_pointIsInObjectSelectionArea(t,e){let n=t.getCoords(),s=this.getZoom(),r=t.padding/s;if(r){let[o,a,l,c]=n,h=Math.atan2(a.y-o.y,a.x-o.x),u=Xi(h)*r,d=$i(h)*r,f=u+d,p=u-d;n=[new Q(o.x-p,o.y-f),new Q(a.x+f,a.y-p),new Q(l.x+p,l.y+f),new Q(c.x-f,c.y+p)]}return Po.isPointInPolygon(e,n)}_checkTarget(t,e){if(t&&t.visible&&t.evented&&this._pointIsInObjectSelectionArea(t,e)){if(!this.perPixelTargetFind&&!t.perPixelTargetFind||t.isEditing)return!0;{let n=e.transform(this.viewportTransform);if(!this.isTargetTransparent(t,n.x,n.y))return!0}}return!1}_searchPossibleTargets(t,e,n){let s=t.length;for(;s--;){let r=t[s];if(this._checkTarget(r,e)){if(hl(r)&&r.subTargetCheck){let{target:o}=this._searchPossibleTargets(r._objects,e,n);o&&n.push(o)}return{target:r,subTargets:n}}}return{subTargets:[]}}searchPossibleTargets(t,e){let n=this._searchPossibleTargets(t,e,[]);n.container=n.target;let{container:s,subTargets:r}=n;if(s&&hl(s)&&s.interactive&&r[0]){for(let o=r.length-1;o>0;o--){let a=r[o];if(!hl(a)||!a.interactive)return n.target=a,n}return n.target=r[0],n}return n}getViewportPoint(t){return this._viewportPoint?this._viewportPoint:this._getPointerImpl(t,!0)}getScenePoint(t){return this._scenePoint?this._scenePoint:this._getPointerImpl(t)}_getPointerImpl(t,e=!1){let n=this.upperCanvasEl,s=n.getBoundingClientRect(),r=Qp(t),o=s.width||0,a=s.height||0;o&&a||("top"in s&&"bottom"in s&&(a=Math.abs(s.top-s.bottom)),"right"in s&&"left"in s&&(o=Math.abs(s.right-s.left))),this.calcOffset(),r.x-=this._offset.left,r.y-=this._offset.top,e||(r=En(r,void 0,this.viewportTransform));let l=this.getRetinaScaling();l!==1&&(r.x/=l,r.y/=l);let c=o===0||a===0?new Q(1,1):new Q(n.width/o,n.height/a);return r.multiply(c)}_setDimensionsImpl(t,e){this._resetTransformEventData(),super._setDimensionsImpl(t,e),this._isCurrentlyDrawing&&this.freeDrawingBrush&&this.freeDrawingBrush._setBrushStyles(this.contextTop)}_createCacheCanvas(){this.pixelFindCanvasEl=dn(),this.pixelFindContext=this.pixelFindCanvasEl.getContext("2d",{willReadFrequently:!0}),this.setTargetFindTolerance(this.targetFindTolerance)}getTopContext(){return this.elements.upper.ctx}getSelectionContext(){return this.elements.upper.ctx}getSelectionElement(){return this.elements.upper.el}getActiveObject(){return this._activeObject}getActiveObjects(){let t=this._activeObject;return ws(t)?t.getObjects():t?[t]:[]}_fireSelectionEvents(t,e){let n=!1,s=!1,r=this.getActiveObjects(),o=[],a=[];t.forEach(l=>{r.includes(l)||(n=!0,l.fire("deselected",{e,target:l}),a.push(l))}),r.forEach(l=>{t.includes(l)||(n=!0,l.fire("selected",{e,target:l}),o.push(l))}),t.length>0&&r.length>0?(s=!0,n&&this.fire("selection:updated",{e,selected:o,deselected:a})):r.length>0?(s=!0,this.fire("selection:created",{e,selected:o})):t.length>0&&(s=!0,this.fire("selection:cleared",{e,deselected:a})),s&&(this._objectsToRender=void 0)}setActiveObject(t,e){let n=this.getActiveObjects(),s=this._setActiveObject(t,e);return this._fireSelectionEvents(n,e),s}_setActiveObject(t,e){let n=this._activeObject;return n!==t&&!(!this._discardActiveObject(e,t)&&this._activeObject)&&!t.onSelect({e})&&(this._activeObject=t,ws(t)&&n!==t&&t.set("canvas",this),t.setCoords(),!0)}_discardActiveObject(t,e){let n=this._activeObject;return!!n&&!n.onDeselect({e:t,object:e})&&(this._currentTransform&&this._currentTransform.target===n&&this.endCurrentTransform(t),ws(n)&&n===this._hoveredTarget&&(this._hoveredTarget=void 0),this._activeObject=void 0,!0)}discardActiveObject(t){let e=this.getActiveObjects(),n=this.getActiveObject();e.length&&this.fire("before:selection:cleared",{e:t,deselected:[n]});let s=this._discardActiveObject(t);return this._fireSelectionEvents(e,t),s}endCurrentTransform(t){let e=this._currentTransform;this._finalizeCurrentTransform(t),e&&e.target&&(e.target.isMoving=!1),this._currentTransform=null}_finalizeCurrentTransform(t){let e=this._currentTransform,n=e.target,s={e:t,target:n,transform:e,action:e.action};n._scaling&&(n._scaling=!1),n.setCoords(),e.actionPerformed&&(this.fire("object:modified",s),n.fire(Fp,s))}setViewportTransform(t){super.setViewportTransform(t);let e=this._activeObject;e&&e.setCoords()}destroy(){let t=this._activeObject;ws(t)&&(t.removeAll(),t.dispose()),delete this._activeObject,super.destroy(),this.pixelFindContext=null,this.pixelFindCanvasEl=void 0}clear(){this.discardActiveObject(),this._activeObject=void 0,this.clearContext(this.contextTop),super.clear()}drawControls(t){let e=this._activeObject;e&&e._renderControls(t)}_toObject(t,e,n){let s=this._realizeGroupTransformOnObject(t),r=super._toObject(t,e,n);return t.set(s),r}_realizeGroupTransformOnObject(t){let{group:e}=t;if(e&&ws(e)&&this._activeObject===e){let n=Os(t,["angle","flipX","flipY",Be,ts,es,pr,gr,"top"]);return Kp(t,e.calcOwnMatrix()),n}return{}}_setSVGObject(t,e,n){let s=this._realizeGroupTransformOnObject(e);super._setSVGObject(t,e,n),e.set(s)}};P(rm,"ownDefaults",{uniformScaling:!0,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",selection:!0,selectionKey:"shiftKey",selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,selectionFullyContained:!1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",notAllowedCursor:"not-allowed",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,stopContextMenu:!0,fireRightClick:!0,fireMiddleClick:!0,enablePointerEvents:!1,containerClass:"canvas-container",preserveObjectStacking:!0});var jx=class{constructor(i){P(this,"targets",[]),P(this,"__disposer",void 0);let t=()=>{let{hiddenTextarea:n}=i.getActiveObject()||{};n&&n.focus()},e=i.upperCanvasEl;e.addEventListener("click",t),this.__disposer=()=>e.removeEventListener("click",t)}exitTextEditing(){this.target=void 0,this.targets.forEach(i=>{i.isEditing&&i.exitEditing()})}add(i){this.targets.push(i)}remove(i){this.unregister(i),Ms(this.targets,i)}register(i){this.target=i}unregister(i){i===this.target&&(this.target=void 0)}onMouseMove(i){var t;(t=this.target)!=null&&t.isEditing&&this.target.updateSelectionOnMouseMove(i)}clear(){this.targets=[],this.target=void 0}dispose(){this.clear(),this.__disposer(),delete this.__disposer}},xi={passive:!1},js=(i,t)=>({viewportPoint:i.getViewportPoint(t),scenePoint:i.getScenePoint(t)}),Jn=(i,...t)=>i.addEventListener(...t),Ni=(i,...t)=>i.removeEventListener(...t),tv={mouse:{in:"over",out:"out",targetIn:"mouseover",targetOut:"mouseout",canvasIn:"mouse:over",canvasOut:"mouse:out"},drag:{in:"enter",out:"leave",targetIn:"dragenter",targetOut:"dragleave",canvasIn:"drag:enter",canvasOut:"drag:leave"}},bl=class extends rm{constructor(i,t={}){super(i,t),P(this,"_isClick",void 0),P(this,"textEditingManager",new jx(this)),["_onMouseDown","_onTouchStart","_onMouseMove","_onMouseUp","_onTouchEnd","_onResize","_onMouseWheel","_onMouseOut","_onMouseEnter","_onContextMenu","_onClick","_onDragStart","_onDragEnd","_onDragProgress","_onDragOver","_onDragEnter","_onDragLeave","_onDrop"].forEach(e=>{this[e]=this[e].bind(this)}),this.addOrRemove(Jn)}_getEventPrefix(){return this.enablePointerEvents?"pointer":"mouse"}addOrRemove(i,t=!1){let e=this.upperCanvasEl,n=this._getEventPrefix();i(Wp(e),"resize",this._onResize),i(e,n+"down",this._onMouseDown),i(e,`${n}move`,this._onMouseMove,xi),i(e,`${n}out`,this._onMouseOut),i(e,`${n}enter`,this._onMouseEnter),i(e,"wheel",this._onMouseWheel,{passive:!1}),i(e,"contextmenu",this._onContextMenu),t||(i(e,"click",this._onClick),i(e,"dblclick",this._onClick)),i(e,"dragstart",this._onDragStart),i(e,"dragend",this._onDragEnd),i(e,"dragover",this._onDragOver),i(e,"dragenter",this._onDragEnter),i(e,"dragleave",this._onDragLeave),i(e,"drop",this._onDrop),this.enablePointerEvents||i(e,"touchstart",this._onTouchStart,xi)}removeListeners(){this.addOrRemove(Ni);let i=this._getEventPrefix(),t=Vi(this.upperCanvasEl);Ni(t,`${i}up`,this._onMouseUp),Ni(t,"touchend",this._onTouchEnd,xi),Ni(t,`${i}move`,this._onMouseMove,xi),Ni(t,"touchmove",this._onMouseMove,xi),clearTimeout(this._willAddMouseDown)}_onMouseWheel(i){this._cacheTransformEventData(i),this._handleEvent(i,"wheel"),this._resetTransformEventData()}_onMouseOut(i){let t=this._hoveredTarget,e={e:i,...js(this,i)};this.fire("mouse:out",{...e,target:t}),this._hoveredTarget=void 0,t&&t.fire("mouseout",{...e}),this._hoveredTargets.forEach(n=>{this.fire("mouse:out",{...e,target:n}),n&&n.fire("mouseout",{...e})}),this._hoveredTargets=[]}_onMouseEnter(i){let{target:t}=this.findTarget(i);this._currentTransform||t||(this.fire("mouse:over",{e:i,...js(this,i)}),this._hoveredTarget=void 0,this._hoveredTargets=[])}_onDragStart(i){this._isClick=!1;let t=this.getActiveObject();if(t&&t.onDragStart(i)){this._dragSource=t;let e={e:i,target:t};this.fire("dragstart",e),t.fire("dragstart",e),Jn(this.upperCanvasEl,"drag",this._onDragProgress);return}op(i)}_renderDragEffects(i,t,e){let n=!1,s=this._dropTarget;s&&s!==t&&s!==e&&(s.clearContextTop(),n=!0),t?.clearContextTop(),e!==t&&e?.clearContextTop();let r=this.contextTop;r.save(),r.transform(...this.viewportTransform),t&&(r.save(),t.transform(r),t.renderDragSourceEffect(i),r.restore(),n=!0),e&&(r.save(),e.transform(r),e.renderDropTargetEffect(i),r.restore(),n=!0),r.restore(),n&&(this.contextTopDirty=!0)}_onDragEnd(i){let{currentSubTargets:t}=this.findTarget(i),e=!!i.dataTransfer&&i.dataTransfer.dropEffect!=="none",n=e?this._activeObject:void 0,s={e:i,target:this._dragSource,subTargets:t,dragSource:this._dragSource,didDrop:e,dropTarget:n};Ni(this.upperCanvasEl,"drag",this._onDragProgress),this.fire("dragend",s),this._dragSource&&this._dragSource.fire("dragend",s),delete this._dragSource,this._onMouseUp(i)}_onDragProgress(i){let t={e:i,target:this._dragSource,dragSource:this._dragSource,dropTarget:this._draggedoverTarget};this.fire("drag",t),this._dragSource&&this._dragSource.fire("drag",t)}_onDragOver(i){let t="dragover",{currentContainer:e,currentSubTargets:n}=this.findTarget(i),s=this._dragSource,r={e:i,target:e,subTargets:n,dragSource:s,canDrop:!1,dropTarget:void 0},o;this.fire(t,r),this._fireEnterLeaveEvents(i,e,r),e&&(e.canDrop(i)&&(o=e),e.fire(t,r));for(let a=0;a<n.length;a++){let l=n[a];l.canDrop(i)&&(o=l),l.fire(t,r)}this._renderDragEffects(i,s,o),this._dropTarget=o}_onDragEnter(i){let{currentContainer:t,currentSubTargets:e}=this.findTarget(i),n={e:i,target:t,subTargets:e,dragSource:this._dragSource};this.fire("dragenter",n),this._fireEnterLeaveEvents(i,t,n)}_onDragLeave(i){let{currentSubTargets:t}=this.findTarget(i),e={e:i,target:this._draggedoverTarget,subTargets:t,dragSource:this._dragSource};this.fire("dragleave",e),this._fireEnterLeaveEvents(i,void 0,e),this._renderDragEffects(i,this._dragSource),this._dropTarget=void 0,this._hoveredTargets=[]}_onDrop(i){let{currentContainer:t,currentSubTargets:e}=this.findTarget(i),n=this._basicEventHandler("drop:before",{e:i,target:t,subTargets:e,dragSource:this._dragSource,...js(this,i)});n.didDrop=!1,n.dropTarget=void 0,this._basicEventHandler("drop",n),this.fire("drop:after",n)}_onContextMenu(i){let{target:t,subTargets:e}=this.findTarget(i),n=this._basicEventHandler("contextmenu:before",{e:i,target:t,subTargets:e});return this.stopContextMenu&&op(i),this._basicEventHandler("contextmenu",n),!1}_onClick(i){let t=i.detail;t>3||t<2||(this._cacheTransformEventData(i),t==2&&i.type==="dblclick"&&this._handleEvent(i,"dblclick"),t==3&&this._handleEvent(i,"tripleclick"),this._resetTransformEventData())}fireEventFromPointerEvent(i,t,e,n={}){this._cacheTransformEventData(i);let{target:s,subTargets:r}=this.findTarget(i),o={e:i,target:s,subTargets:r,...js(this,i),transform:this._currentTransform,...n};this.fire(t,o),s&&s.fire(e,o);for(let a=0;a<r.length;a++)r[a]!==s&&r[a].fire(e,o);this._resetTransformEventData()}getPointerId(i){let t=i.changedTouches;return t?t[0]&&t[0].identifier:this.enablePointerEvents?i.pointerId:-1}_isMainEvent(i){return i.isPrimary===!0||i.isPrimary!==!1&&(i.type==="touchend"&&i.touches.length===0||!i.changedTouches||i.changedTouches[0].identifier===this.mainTouchId)}_onTouchStart(i){this._cacheTransformEventData(i);let t=!this.allowTouchScrolling,e=this._activeObject;this.mainTouchId===void 0&&(this.mainTouchId=this.getPointerId(i)),this.__onMouseDown(i);let{target:n}=this.findTarget(i);(this.isDrawingMode||e&&n===e)&&(t=!0),t&&i.preventDefault();let s=this.upperCanvasEl,r=this._getEventPrefix(),o=Vi(s);Jn(o,"touchend",this._onTouchEnd,xi),t&&Jn(o,"touchmove",this._onMouseMove,xi),Ni(s,`${r}down`,this._onMouseDown),this._resetTransformEventData()}_onMouseDown(i){this._cacheTransformEventData(i),this.__onMouseDown(i);let t=this.upperCanvasEl,e=this._getEventPrefix();Ni(t,`${e}move`,this._onMouseMove,xi);let n=Vi(t);Jn(n,`${e}up`,this._onMouseUp),Jn(n,`${e}move`,this._onMouseMove,xi),this._resetTransformEventData()}_onTouchEnd(i){if(i.touches.length>0)return;this._cacheTransformEventData(i),this.__onMouseUp(i),this._resetTransformEventData(),delete this.mainTouchId;let t=this._getEventPrefix(),e=Vi(this.upperCanvasEl);Ni(e,"touchend",this._onTouchEnd,xi),Ni(e,"touchmove",this._onMouseMove,xi),this._willAddMouseDown&&clearTimeout(this._willAddMouseDown),this._willAddMouseDown=setTimeout(()=>{Jn(this.upperCanvasEl,`${t}down`,this._onMouseDown),this._willAddMouseDown=0},400)}_onMouseUp(i){this._cacheTransformEventData(i),this.__onMouseUp(i);let t=this.upperCanvasEl,e=this._getEventPrefix();if(this._isMainEvent(i)){let n=Vi(this.upperCanvasEl);Ni(n,`${e}up`,this._onMouseUp),Ni(n,`${e}move`,this._onMouseMove,xi),Jn(t,`${e}move`,this._onMouseMove,xi)}this._resetTransformEventData()}_onMouseMove(i){this._cacheTransformEventData(i);let t=this.getActiveObject();!this.allowTouchScrolling&&(!t||!t.shouldStartDragging(i))&&i.preventDefault&&i.preventDefault(),this.__onMouseMove(i),this._resetTransformEventData()}_onResize(){this.calcOffset(),this._resetTransformEventData()}_shouldRender(i){let t=this.getActiveObject();return!!t!=!!i||t&&i&&t!==i}__onMouseUp(i){var t;this._handleEvent(i,"up:before");let e=this._currentTransform,n=this._isClick,{target:s}=this.findTarget(i),{button:r}=i;if(r)return void((this.fireMiddleClick&&r===1||this.fireRightClick&&r===2)&&this._handleEvent(i,"up"));if(this.isDrawingMode&&this._isCurrentlyDrawing)return void this._onMouseUpInDrawingMode(i);if(!this._isMainEvent(i))return;let o,a,l=!1;if(e&&(this._finalizeCurrentTransform(i),l=e.actionPerformed),!n){let c=s===this._activeObject;this.handleSelection(i),l||(l=this._shouldRender(s)||!c&&s===this._activeObject)}if(s){let{key:c,control:h}=s.findControl(this.getViewportPoint(i),_l(i))||{};if(a=c,s.selectable&&s!==this._activeObject&&s.activeOn==="up")this.setActiveObject(s,i),l=!0;else if(h){let u=h.getMouseUpHandler(i,s,h);u&&(o=this.getScenePoint(i),u.call(h,i,e,o.x,o.y))}s.isMoving=!1}if(e&&(e.target!==s||e.corner!==a)){let c=e.target&&e.target.controls[e.corner],h=c&&c.getMouseUpHandler(i,e.target,c);o=o||this.getScenePoint(i),h&&h.call(c,i,e,o.x,o.y)}this._setCursorFromEvent(i,s),this._handleEvent(i,"up"),this._groupSelector=null,this._currentTransform=null,s&&(s.__corner=void 0),l?this.requestRenderAll():n||(t=this._activeObject)!=null&&t.isEditing||this.renderTop()}_basicEventHandler(i,t){let{target:e,subTargets:n=[]}=t;this.fire(i,t),e&&e.fire(i,t);for(let s=0;s<n.length;s++)n[s]!==e&&n[s].fire(i,t);return t}_handleEvent(i,t,e){let{target:n,subTargets:s}=this.findTarget(i),r={e:i,target:n,subTargets:s,...js(this,i),transform:this._currentTransform,...t==="down:before"||t==="down"?e:{}};t!=="up:before"&&t!=="up"||(r.isClick=this._isClick),this.fire(`mouse:${t}`,r),n&&n.fire(`mouse${t}`,r);for(let o=0;o<s.length;o++)s[o]!==n&&s[o].fire(`mouse${t}`,r)}_onMouseDownInDrawingMode(i){this._isCurrentlyDrawing=!0,this.getActiveObject()&&(this.discardActiveObject(i),this.requestRenderAll());let t=this.getScenePoint(i);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseDown(t,{e:i,pointer:t}),this._handleEvent(i,"down",{alreadySelected:!1})}_onMouseMoveInDrawingMode(i){if(this._isCurrentlyDrawing){let t=this.getScenePoint(i);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseMove(t,{e:i,pointer:t})}this.setCursor(this.freeDrawingCursor),this._handleEvent(i,"move")}_onMouseUpInDrawingMode(i){let t=this.getScenePoint(i);this.freeDrawingBrush?this._isCurrentlyDrawing=!!this.freeDrawingBrush.onMouseUp({e:i,pointer:t}):this._isCurrentlyDrawing=!1,this._handleEvent(i,"up")}__onMouseDown(i){this._isClick=!0,this._handleEvent(i,"down:before");let{target:t}=this.findTarget(i),e=!!t&&t===this._activeObject,{button:n}=i;if(n)return void((this.fireMiddleClick&&n===1||this.fireRightClick&&n===2)&&this._handleEvent(i,"down",{alreadySelected:e}));if(this.isDrawingMode)return void this._onMouseDownInDrawingMode(i);if(!this._isMainEvent(i)||this._currentTransform)return;let s=this._shouldRender(t),r=!1;if(this.handleMultiSelection(i,t)?(t=this._activeObject,r=!0,s=!0):this._shouldClearSelection(i,t)&&this.discardActiveObject(i),this.selection&&(!t||!t.selectable&&!t.isEditing&&t!==this._activeObject)){let o=this.getScenePoint(i);this._groupSelector={x:o.x,y:o.y,deltaY:0,deltaX:0}}if(e=!!t&&t===this._activeObject,t){t.selectable&&t.activeOn==="down"&&this.setActiveObject(t,i);let o=t.findControl(this.getViewportPoint(i),_l(i));if(t===this._activeObject&&(o||!r)){this._setupCurrentTransform(i,t,e);let a=o?o.control:void 0,l=this.getScenePoint(i),c=a&&a.getMouseDownHandler(i,t,a);c&&c.call(a,i,this._currentTransform,l.x,l.y)}}s&&(this._objectsToRender=void 0),this._handleEvent(i,"down",{alreadySelected:e}),s&&this.requestRenderAll()}_resetTransformEventData(){this._targetInfo=this._viewportPoint=this._scenePoint=void 0}_cacheTransformEventData(i){this._resetTransformEventData(),this._viewportPoint=this.getViewportPoint(i),this._scenePoint=En(this._viewportPoint,void 0,this.viewportTransform),this._targetInfo=this.findTarget(i),this._currentTransform&&(this._targetInfo.target=this._currentTransform.target)}__onMouseMove(i){if(this._isClick=!1,this._handleEvent(i,"move:before"),this.isDrawingMode)return void this._onMouseMoveInDrawingMode(i);if(!this._isMainEvent(i))return;let t=this._groupSelector;if(t){let e=this.getScenePoint(i);t.deltaX=e.x-t.x,t.deltaY=e.y-t.y,this.renderTop()}else if(this._currentTransform)this._transformObject(i);else{let{target:e}=this.findTarget(i);this._setCursorFromEvent(i,e),this._fireOverOutEvents(i,e)}this.textEditingManager.onMouseMove(i),this._handleEvent(i,"move")}_fireOverOutEvents(i,t){let{_hoveredTarget:e,_hoveredTargets:n}=this,{subTargets:s,currentTarget:r}=this.findTarget(i),o=Math.max(n.length,s.length);this.fireSyntheticInOutEvents("mouse",{e:i,target:t,oldTarget:e,actualTarget:r,oldActualTarget:this._hoveredActualTarget,fireCanvas:!0});for(let a=0;a<o;a++)s[a]===t||n[a]&&n[a]===e||this.fireSyntheticInOutEvents("mouse",{e:i,target:s[a],oldTarget:n[a]});this._hoveredActualTarget=r,this._hoveredTarget=t,this._hoveredTargets=s}_fireEnterLeaveEvents(i,t,e){let n=this._draggedoverTarget,s=this._hoveredTargets,{subTargets:r}=this.findTarget(i),o=Math.max(s.length,r.length);this.fireSyntheticInOutEvents("drag",{...e,target:t,oldTarget:n,fireCanvas:!0});for(let a=0;a<o;a++)this.fireSyntheticInOutEvents("drag",{...e,target:r[a],oldTarget:s[a]});this._draggedoverTarget=t}fireSyntheticInOutEvents(i,{target:t,oldTarget:e,actualTarget:n,oldActualTarget:s,fireCanvas:r,e:o,...a}){let{targetIn:l,targetOut:c,canvasIn:h,canvasOut:u}=tv[i],d=e!==t,f=s!==n,p=t&&d,_=n&&f,g=e&&d,m=s&&f,S={...a,e:o,...js(this,o)},w={...S,target:e,nextTarget:t,actualTarget:s,nextActualTarget:n};(g||m)&&r&&this.fire(u,w),g&&e.fire(c,w),m&&e!==s&&s.fire(c,w);let x={...S,target:t,previousTarget:e,actualTarget:n,previousActualTarget:s};(p||_)&&r&&this.fire(h,x),p&&t.fire(l,x),_&&n!==t&&n.fire(l,x)}_transformObject(i){let t=this.getScenePoint(i),e=this._currentTransform,n=e.target,s=n.group?En(t,void 0,n.group.calcTransformMatrix()):t;e.shiftKey=i.shiftKey,e.altKey=!!this.centeredKey&&i[this.centeredKey],this._performTransformAction(i,e,s),e.actionPerformed&&this.requestRenderAll()}_performTransformAction(i,t,e){let{action:n,actionHandler:s,target:r}=t,o=!!s&&s(i,t,e.x,e.y);o&&r.setCoords(),n==="drag"&&o&&(t.target.isMoving=!0,this.setCursor(t.target.moveCursor||this.moveCursor)),t.actionPerformed=t.actionPerformed||o}_setCursorFromEvent(i,t){if(!t)return void this.setCursor(this.defaultCursor);let e=t.hoverCursor||this.hoverCursor,n=ws(this._activeObject)?this._activeObject:null,s=(!n||t.group!==n)&&t.findControl(this.getViewportPoint(i));if(s){let{control:r,coord:o}=s;this.setCursor(r.cursorStyleHandler(i,r,t,o))}else{if(t.subTargetCheck){let{subTargets:r}=this.findTarget(i);r.concat().reverse().forEach(o=>{e=o.hoverCursor||e})}this.setCursor(e)}}handleMultiSelection(i,t){let e=this._activeObject,n=ws(e);if(e&&this._isSelectionKeyPressed(i)&&this.selection&&t&&t.selectable&&(e!==t||n)&&(n||!t.isDescendantOf(e)&&!e.isDescendantOf(t))&&!t.onSelect({e:i})&&!e.getActiveControl()){if(n){let s=e.getObjects(),r=[];if(t===e){let o=this.getScenePoint(i),a=this.searchPossibleTargets(s,o);if(a.target?(t=a.target,r=a.subTargets):(a=this.searchPossibleTargets(this._objects,o),t=a.target,r=a.subTargets),!t||!t.selectable)return!1}t.group===e?(e.remove(t),this._hoveredTarget=t,this._hoveredTargets=r,e.size()===1&&this._setActiveObject(e.item(0),i)):(e.multiSelectAdd(t),this._hoveredTarget=e,this._hoveredTargets=r),this._fireSelectionEvents(s,i)}else{e.isEditing&&e.exitEditing();let s=new(Rt.getClass("ActiveSelection"))([],{canvas:this});s.multiSelectAdd(e,t),this._hoveredTarget=s,this._setActiveObject(s,i),this._fireSelectionEvents([e],i)}return!0}return!1}handleSelection(i){if(!this.selection||!this._groupSelector)return!1;let{x:t,y:e,deltaX:n,deltaY:s}=this._groupSelector,r=new Q(t,e),o=r.add(new Q(n,s)),a=r.min(o),l=r.max(o).subtract(a),c=this.collectObjects({left:a.x,top:a.y,width:l.x,height:l.y},{includeIntersecting:!this.selectionFullyContained}),h=r.eq(o)?c[0]?[c[0]]:[]:c.length>1?c.filter(u=>!u.onSelect({e:i})).reverse():c;if(h.length===1)this.setActiveObject(h[0],i);else if(h.length>1){let u=Rt.getClass("ActiveSelection");this.setActiveObject(new u(h,{canvas:this}),i)}return this._groupSelector=null,!0}toCanvasElement(i=1,t){let{upper:e}=this.elements;e.ctx=void 0;let n=super.toCanvasElement(i,t);return e.ctx=e.el.getContext("2d"),n}clear(){this.textEditingManager.clear(),super.clear()}destroy(){this.removeListeners(),this.textEditingManager.dispose(),super.destroy()}},am={x1:0,y1:0,x2:0,y2:0},ev={...am,r1:0,r2:0},nr=(i,t)=>isNaN(i)&&typeof t=="number"?t:i;function lm(i){return i&&/%$/.test(i)&&Number.isFinite(parseFloat(i))}function cm(i,t){return Ds(0,nr(typeof i=="number"?i:typeof i=="string"?parseFloat(i)/(lm(i)?100:1):NaN,t),1)}var iv=/\s*;\s*/,nv=/\s*:\s*/;function sv(i,t){let e,n,s=i.getAttribute("style");if(s){let o=s.split(iv);o[o.length-1]===""&&o.pop();for(let a=o.length;a--;){let[l,c]=o[a].split(nv).map(h=>h.trim());l==="stop-color"?e=c:l==="stop-opacity"&&(n=c)}}e=e||i.getAttribute("stop-color")||"rgb(0,0,0)",n=nr(parseFloat(n||i.getAttribute("stop-opacity")||""),1);let r=new Mi(e);return r.setAlpha(r.getAlpha()*n*t),{offset:cm(i.getAttribute("offset"),0),color:r.toRgba()}}function rv(i,t){let e=[],n=i.getElementsByTagName("stop"),s=cm(t,1);for(let r=n.length;r--;)e.push(sv(n[r],s));return e}function hm(i){return i.nodeName==="linearGradient"||i.nodeName==="LINEARGRADIENT"?"linear":"radial"}function um(i){return i.getAttribute("gradientUnits")==="userSpaceOnUse"?"pixels":"percentage"}function Hi(i,t){return i.getAttribute(t)}function ov(i,t){return(function(e,{width:n,height:s,gradientUnits:r}){let o;return Object.entries(e).reduce((a,[l,c])=>{if(c==="Infinity")o=1;else if(c==="-Infinity")o=0;else{let h=typeof c=="string";o=h?parseFloat(c):c,h&&lm(c)&&(o*=.01,r==="pixels"&&(l!=="x1"&&l!=="x2"&&l!=="r2"||(o*=n),l!=="y1"&&l!=="y2"||(o*=s)))}return a[l]=o,a},{})})(hm(i)==="linear"?(function(e){return{x1:Hi(e,"x1")||0,y1:Hi(e,"y1")||0,x2:Hi(e,"x2")||"100%",y2:Hi(e,"y2")||0}})(i):(function(e){return{x1:Hi(e,"fx")||Hi(e,"cx")||"50%",y1:Hi(e,"fy")||Hi(e,"cy")||"50%",r1:0,x2:Hi(e,"cx")||"50%",y2:Hi(e,"cy")||"50%",r2:Hi(e,"r")||"50%"}})(i),{...t,gradientUnits:um(i)})}var sr=class{constructor(i){let{type:t="linear",gradientUnits:e="pixels",coords:n={},colorStops:s=[],offsetX:r=0,offsetY:o=0,gradientTransform:a,id:l}=i||{};Object.assign(this,{type:t,gradientUnits:e,coords:{...t==="radial"?ev:am,...n},colorStops:s,offsetX:r,offsetY:o,gradientTransform:a,id:l?`${l}_${Zn()}`:Zn()})}addColorStop(i){for(let t in i)this.colorStops.push({offset:parseFloat(t),color:i[t]});return this}toObject(i){return{...Os(this,i),type:this.type,coords:{...this.coords},colorStops:this.colorStops.map(t=>({...t})),offsetX:this.offsetX,offsetY:this.offsetY,gradientUnits:this.gradientUnits,gradientTransform:this.gradientTransform?[...this.gradientTransform]:void 0}}toSVG(i,{additionalTransform:t}={}){let e=[],n=this.gradientTransform?this.gradientTransform.concat():ri.concat(),s=this.gradientUnits==="pixels"?"userSpaceOnUse":"objectBoundingBox",r=this.colorStops.map(u=>({...u})).sort((u,d)=>u.offset-d.offset),o=-this.offsetX,a=-this.offsetY;var l;s==="objectBoundingBox"?(o/=i.width,a/=i.height):(o+=i.width/2,a+=i.height/2),(l=i)&&typeof l._renderPathCommands=="function"&&this.gradientUnits!=="percentage"&&(o-=i.pathOffset.x,a-=i.pathOffset.y),n[4]-=o,n[5]-=a;let c=[`id="SVGID_${te(String(this.id))}"`,`gradientUnits="${s}"`,`gradientTransform="${t?t+" ":""}${hr(n)}"`,""].join(" "),h=u=>parseFloat(String(u));if(this.type==="linear"){let{x1:u,y1:d,x2:f,y2:p}=this.coords,_=h(u),g=h(d),m=h(f),S=h(p);e.push("<linearGradient ",c,' x1="',_,'" y1="',g,'" x2="',m,'" y2="',S,`">
`)}else if(this.type==="radial"){let{x1:u,y1:d,x2:f,y2:p,r1:_,r2:g}=this.coords,m=h(u),S=h(d),w=h(f),x=h(p),M=h(_),T=h(g),A=M>T;e.push("<radialGradient ",c,' cx="',A?m:w,'" cy="',A?S:x,'" r="',A?M:T,'" fx="',A?w:m,'" fy="',A?x:S,`">
`),A&&(r.reverse(),r.forEach(E=>{E.offset=1-E.offset}));let v=Math.min(M,T);if(v>0){let E=v/Math.max(M,T);r.forEach(R=>{R.offset+=E*(1-R.offset)})}}return r.forEach(({color:u,offset:d})=>{let f=String(u),p=Il(f)?f:new Mi(f).toRgba();e.push(`<stop offset="${100*d}%" style="stop-color:${te(p)};"/>
`)}),e.push(this.type==="linear"?"</linearGradient>":"</radialGradient>",`
`),e.join("")}toLive(i){let{x1:t,y1:e,x2:n,y2:s,r1:r,r2:o}=this.coords,a=this.type==="linear"?i.createLinearGradient(t,e,n,s):i.createRadialGradient(t,e,r,n,s,o);return this.colorStops.forEach(({color:l,offset:c})=>{a.addColorStop(c,l)}),a}static async fromObject(i){let{colorStops:t,gradientTransform:e}=i;return new this({...i,colorStops:t?t.map(n=>({...n})):void 0,gradientTransform:e?[...e]:void 0})}static fromElement(i,t,e){let n=um(i),s=t._findCenterFromElement();return new this({id:i.getAttribute("id")||void 0,type:hm(i),coords:ov(i,{width:e.viewBoxWidth||e.width,height:e.viewBoxHeight||e.height}),colorStops:rv(i,e.opacity),gradientUnits:n,gradientTransform:fu(i.getAttribute("gradientTransform")||""),...n==="pixels"?{offsetX:t.width/2-s.x,offsetY:t.height/2-s.y}:{offsetX:0,offsetY:0}})}};P(sr,"type","Gradient"),Rt.setClass(sr,"gradient"),Rt.setClass(sr,"linear"),Rt.setClass(sr,"radial");var eu=class{get type(){return"pattern"}set type(i){Kn("warn","Setting type has no effect",i)}constructor(i){P(this,"repeat","repeat"),P(this,"offsetX",0),P(this,"offsetY",0),P(this,"crossOrigin",""),this.id=Zn(),Object.assign(this,i)}isImageSource(){return!!this.source&&typeof this.source.src=="string"}isCanvasSource(){return!!this.source&&!!this.source.toDataURL}sourceToString(){return this.isImageSource()?this.source.src:this.isCanvasSource()?this.source.toDataURL():""}toLive(i){return this.source&&(!this.isImageSource()||this.source.complete&&this.source.naturalWidth!==0&&this.source.naturalHeight!==0)?i.createPattern(this.source,this.repeat):null}toObject(i=[]){let{repeat:t,crossOrigin:e}=this;return{...Os(this,i),type:"pattern",source:this.sourceToString(),repeat:t,crossOrigin:e,offsetX:me(this.offsetX,ue.NUM_FRACTION_DIGITS),offsetY:me(this.offsetY,ue.NUM_FRACTION_DIGITS),patternTransform:this.patternTransform?[...this.patternTransform]:null}}toSVG({width:i,height:t}){let{source:e,repeat:n,id:s}=this,r=nr(this.offsetX/i,0),o=nr(this.offsetY/t,0),a=n==="repeat-y"||n==="no-repeat"?1+Math.abs(r||0):nr(e.width/i,0),l=n==="repeat-x"||n==="no-repeat"?1+Math.abs(o||0):nr(e.height/t,0);return[`<pattern id="SVGID_${te(s)}" x="${r}" y="${o}" width="${a}" height="${l}">`,`<image x="0" y="0" width="${e.width}" height="${e.height}" xlink:href="${te(this.sourceToString())}"></image>`,"</pattern>",""].join(`
`)}static async fromObject({type:i,source:t,patternTransform:e,...n},s){let r=await Lo(t,{...s,crossOrigin:n.crossOrigin});return new this({...n,patternTransform:e&&e.slice(0),source:r})}};P(eu,"type","Pattern"),Rt.setClass(eu),Rt.setClass(eu,"pattern");var ho=class dm extends $e{constructor(t,{path:e,left:n,top:s,...r}={}){super(),Object.assign(this,dm.ownDefaults),this.setOptions(r),this._setPath(t||[],!0),typeof n=="number"&&this.set("left",n),typeof s=="number"&&this.set("top",s)}_setPath(t,e){this.path=Yg(Array.isArray(t)?t:Qg(t)),this.setBoundingBox(e)}_findCenterFromElement(){let t=this._calcBoundsFromPath();return new Q(t.left+t.width/2,t.top+t.height/2)}_renderPathCommands(t){let e=-this.pathOffset.x,n=-this.pathOffset.y;t.beginPath();for(let s of this.path)switch(s[0]){case"L":t.lineTo(s[1]+e,s[2]+n);break;case"M":t.moveTo(s[1]+e,s[2]+n);break;case"C":t.bezierCurveTo(s[1]+e,s[2]+n,s[3]+e,s[4]+n,s[5]+e,s[6]+n);break;case"Q":t.quadraticCurveTo(s[1]+e,s[2]+n,s[3]+e,s[4]+n);break;case"Z":t.closePath()}}_render(t){this._renderPathCommands(t),this._renderPaintInOrder(t)}toString(){return`#<Path (${this.complexity()}): { "top": ${this.top}, "left": ${this.left} }>`}toObject(t=[]){return{...super.toObject(t),path:this.path.map(e=>e.slice())}}toDatalessObject(t=[]){let e=this.toObject(t);return this.sourcePath&&(delete e.path,e.sourcePath=this.sourcePath),e}_toSVG(){return["<path ","COMMON_PARTS",`d="${Kg(this.path,ue.NUM_FRACTION_DIGITS)}" stroke-linecap="round" />
`]}_getOffsetTransform(){let t=ue.NUM_FRACTION_DIGITS;return` translate(${me(-this.pathOffset.x,t)}, ${me(-this.pathOffset.y,t)})`}toClipPathSVG(t){let e=this._getOffsetTransform();return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}toSVG(t){let e=this._getOffsetTransform();return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}complexity(){return this.path.length}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{width:e,height:n,pathOffset:s}=this._calcDimensions();this.set({width:e,height:n,pathOffset:s}),t&&this.setPositionByOrigin(s,"center","center")}_calcBoundsFromPath(){let t=[],e=0,n=0,s=0,r=0;for(let o of this.path)switch(o[0]){case"L":s=o[1],r=o[2],t.push({x:e,y:n},{x:s,y:r});break;case"M":s=o[1],r=o[2],e=s,n=r;break;case"C":t.push(...xu(s,r,o[1],o[2],o[3],o[4],o[5],o[6])),s=o[5],r=o[6];break;case"Q":t.push(...xu(s,r,o[1],o[2],o[1],o[2],o[3],o[4])),s=o[3],r=o[4];break;case"Z":s=e,r=n}return hn(t)}_calcDimensions(){let t=this._calcBoundsFromPath();return{...t,pathOffset:new Q(t.left+t.width/2,t.top+t.height/2)}}static fromObject(t){return this._fromObject(t,{extraParam:"path"})}static async fromElement(t,e,n){let{d:s,...r}=Rn(t,this.ATTRIBUTE_NAMES,n);return new this(s,{...r,...e,left:void 0,top:void 0})}};P(ho,"type","Path"),P(ho,"cacheProperties",[...Cn,"path","fillRule"]),P(ho,"ATTRIBUTE_NAMES",[...ns,"d"]),Rt.setClass(ho),Rt.setSVGClass(ho);var fm=["radius","startAngle","endAngle","counterClockwise"],tr=class bu extends $e{static getDefaults(){return{...super.getDefaults(),...bu.ownDefaults}}constructor(t){super(),Object.assign(this,bu.ownDefaults),this.setOptions(t)}_set(t,e){return super._set(t,e),t==="radius"&&this.setRadius(e),this}_render(t){t.beginPath(),t.arc(0,0,this.radius,we(this.startAngle),we(this.endAngle),this.counterClockwise),this._renderPaintInOrder(t)}getRadiusX(){return this.get("radius")*this.get(ts)}getRadiusY(){return this.get("radius")*this.get(es)}setRadius(t){this.radius=t,this.set({width:2*t,height:2*t})}toObject(t=[]){return super.toObject([...fm,...t])}_toSVG(){let{radius:t,startAngle:e,endAngle:n}=this,s=(n-e)%360;if(s===0)return["<circle ","COMMON_PARTS",'cx="0" cy="0" ','r="',`${te(t)}`,`" />
`];{let r=we(e),o=we(n),a=Xi(r)*t,l=$i(r)*t,c=Xi(o)*t,h=$i(o)*t;return[`<path d="M ${a} ${l} A ${t} ${t} 0 ${+(s>180)} ${+!this.counterClockwise} ${c} ${h}" `,"COMMON_PARTS",` />
`]}}static async fromElement(t,e,n){let{left:s=0,top:r=0,radius:o=0,...a}=Rn(t,this.ATTRIBUTE_NAMES,n);return new this({...a,radius:o,left:s-o,top:r-o})}static fromObject(t){return super._fromObject(t)}};P(tr,"type","Circle"),P(tr,"cacheProperties",[...Cn,...fm]),P(tr,"ownDefaults",{radius:0,startAngle:0,endAngle:360,counterClockwise:!1}),P(tr,"ATTRIBUTE_NAMES",["cx","cy","r",...ns]),Rt.setClass(tr),Rt.setSVGClass(tr);var Mu=["x1","x2","y1","y2"],$n=class pm extends $e{constructor([t,e,n,s]=[0,0,0,0],r={}){super(),Object.assign(this,pm.ownDefaults),this.setOptions(r),this.x1=t,this.x2=n,this.y1=e,this.y2=s,this._setWidthHeight();let{left:o,top:a}=r;typeof o=="number"&&this.set("left",o),typeof a=="number"&&this.set("top",a)}_setWidthHeight(){let{x1:t,y1:e,x2:n,y2:s}=this;this.width=Math.abs(n-t),this.height=Math.abs(s-e);let{left:r,top:o,width:a,height:l}=hn([{x:t,y:e},{x:n,y:s}]),c=new Q(r+a/2,o+l/2);this.setPositionByOrigin(c,_e,_e)}_set(t,e){return super._set(t,e),Mu.includes(t)&&this._setWidthHeight(),this}_render(t){t.beginPath();let e=this.calcLinePoints();t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.lineWidth=this.strokeWidth;let n=t.strokeStyle;var s;Pi(this.stroke)?t.strokeStyle=this.stroke.toLive(t):t.strokeStyle=(s=this.stroke)==null?t.fillStyle:s,this.stroke&&this._renderStroke(t),t.strokeStyle=n}_findCenterFromElement(){return new Q((this.x1+this.x2)/2,(this.y1+this.y2)/2)}toObject(t=[]){return{...super.toObject(t),...this.calcLinePoints()}}_getNonTransformedDimensions(){let t=super._getNonTransformedDimensions();return this.strokeLineCap==="butt"&&(this.width===0&&(t.y-=this.strokeWidth),this.height===0&&(t.x-=this.strokeWidth)),t}calcLinePoints(){let{x1:t,x2:e,y1:n,y2:s,width:r,height:o}=this,a=t<=e?-.5:.5,l=n<=s?-.5:.5;return{x1:a*r,x2:a*-r,y1:l*o,y2:l*-o}}_toSVG(){let{x1:t,x2:e,y1:n,y2:s}=this.calcLinePoints();return["<line ","COMMON_PARTS",`x1="${t}" y1="${n}" x2="${e}" y2="${s}" />
`]}static async fromElement(t,e,n){let{x1:s=0,y1:r=0,x2:o=0,y2:a=0,...l}=Rn(t,this.ATTRIBUTE_NAMES,n);return new this([s,r,o,a],l)}static fromObject({x1:t,y1:e,x2:n,y2:s,...r}){return this._fromObject({...r,points:[t,e,n,s]},{extraParam:"points"})}};P($n,"type","Line"),P($n,"cacheProperties",[...Cn,...Mu]),P($n,"ATTRIBUTE_NAMES",ns.concat(Mu)),Rt.setClass($n),Rt.setSVGClass($n);var tl=class wu extends $e{static getDefaults(){return{...super.getDefaults(),...wu.ownDefaults}}constructor(t){super(),Object.assign(this,wu.ownDefaults),this.setOptions(t)}_render(t){let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,n),t.lineTo(0,-n),t.lineTo(e,n),t.closePath(),this._renderPaintInOrder(t)}_toSVG(){let t=this.width/2,e=this.height/2;return["<polygon ","COMMON_PARTS",'points="',`${-t} ${e},0 ${-e},${t} ${e}`,'" />']}};P(tl,"type","Triangle"),P(tl,"ownDefaults",{width:100,height:100}),Rt.setClass(tl),Rt.setSVGClass(tl);var gm=["rx","ry"],er=class Tu extends $e{static getDefaults(){return{...super.getDefaults(),...Tu.ownDefaults}}constructor(t){super(),Object.assign(this,Tu.ownDefaults),this.setOptions(t)}_set(t,e){switch(super._set(t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this}getRx(){return this.get("rx")*this.get(ts)}getRy(){return this.get("ry")*this.get(es)}toObject(t=[]){return super.toObject([...gm,...t])}_toSVG(){return["<ellipse ","COMMON_PARTS",`cx="0" cy="0" rx="${te(this.rx)}" ry="${te(this.ry)}" />
`]}_render(t){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(0,0,this.rx,0,Ji,!1),t.restore(),this._renderPaintInOrder(t)}static async fromElement(t,e,n){let s=Rn(t,this.ATTRIBUTE_NAMES,n);return s.left=(s.left||0)-s.rx,s.top=(s.top||0)-s.ry,new this(s)}};P(er,"type","Ellipse"),P(er,"cacheProperties",[...Cn,...gm]),P(er,"ownDefaults",{rx:0,ry:0}),P(er,"ATTRIBUTE_NAMES",[...ns,"cx","cy","rx","ry"]),Rt.setClass(er),Rt.setSVGClass(er);var mm={exactBoundingBox:!1},Xn=class Eu extends $e{static getDefaults(){return{...super.getDefaults(),...Eu.ownDefaults}}constructor(t=[],e={}){super(),P(this,"strokeDiff",void 0),Object.assign(this,Eu.ownDefaults),this.setOptions(e),this.points=t;let{left:n,top:s}=e;this.initialized=!0,this.setBoundingBox(!0),typeof n=="number"&&this.set("left",n),typeof s=="number"&&this.set("top",s)}isOpen(){return!0}_projectStrokeOnPoints(t){return Fg(this.points,t,this.isOpen())}_calcDimensions(t){t={scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:this.strokeMiterLimit,strokeUniform:this.strokeUniform,strokeWidth:this.strokeWidth,...t||{}};let e=this.exactBoundingBox?this._projectStrokeOnPoints(t).map(c=>c.projectedPoint):this.points;if(e.length===0)return{left:0,top:0,width:0,height:0,pathOffset:new Q,strokeOffset:new Q,strokeDiff:new Q};let n=hn(e),s=Ho({...t,scaleX:1,scaleY:1}),r=hn(this.points.map(c=>Xe(c,s,!0))),o=new Q(this.scaleX,this.scaleY),a=n.left+n.width/2,l=n.top+n.height/2;return this.exactBoundingBox&&(a-=l*Math.tan(we(this.skewX)),l-=a*Math.tan(we(this.skewY))),{...n,pathOffset:new Q(a,l),strokeOffset:new Q(r.left,r.top).subtract(new Q(n.left,n.top)).multiply(o),strokeDiff:new Q(n.width,n.height).subtract(new Q(r.width,r.height)).multiply(o)}}_findCenterFromElement(){let t=hn(this.points);return new Q(t.left+t.width/2,t.top+t.height/2)}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{left:e,top:n,width:s,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}=this._calcDimensions();this.set({width:s,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}),t&&this.setPositionByOrigin(new Q(e+s/2,n+r/2),"center","center")}isStrokeAccountedForInDimensions(){return this.exactBoundingBox}_getNonTransformedDimensions(){return this.exactBoundingBox?new Q(this.width,this.height):super._getNonTransformedDimensions()}_getTransformedDimensions(t={}){if(this.exactBoundingBox){let o;if(Object.keys(t).some(a=>this.strokeUniform||this.constructor.layoutProperties.includes(a))){var e,n;let{width:a,height:l}=this._calcDimensions(t);o=new Q((e=t.width)==null?a:e,(n=t.height)==null?l:n)}else{var s,r;o=new Q((s=t.width)==null?this.width:s,(r=t.height)==null?this.height:r)}return o.multiply(new Q(t.scaleX||this.scaleX,t.scaleY||this.scaleY))}return super._getTransformedDimensions(t)}_set(t,e){let n=this.initialized&&this[t]!==e,s=super._set(t,e);return this.exactBoundingBox&&n&&((t==="scaleX"||t==="scaleY")&&this.strokeUniform&&this.constructor.layoutProperties.includes("strokeUniform")||this.constructor.layoutProperties.includes(t))&&this.setDimensions(),s}toObject(t=[]){return{...super.toObject(t),points:this.points.map(({x:e,y:n})=>({x:e,y:n}))}}_toSVG(){let t=this.pathOffset.x,e=this.pathOffset.y,n=ue.NUM_FRACTION_DIGITS,s=this.points.map(({x:r,y:o})=>`${me(r-t,n)},${me(o-e,n)}`).join(" ");return[`<${te(this.constructor.type).toLowerCase()} `,"COMMON_PARTS",`points="${s}" />
`]}_render(t){let e=this.points.length,n=this.pathOffset.x,s=this.pathOffset.y;if(e&&!isNaN(this.points[e-1].y)){t.beginPath(),t.moveTo(this.points[0].x-n,this.points[0].y-s);for(let r=0;r<e;r++){let o=this.points[r];t.lineTo(o.x-n,o.y-s)}!this.isOpen()&&t.closePath(),this._renderPaintInOrder(t)}}complexity(){return this.points.length}static async fromElement(t,e,n){let s=(function(l){if(!l)return[];let c=l.replace(/,/g," ").trim().split(/\s+/),h=[];for(let u=0;u<c.length;u+=2)h.push({x:parseFloat(c[u]),y:parseFloat(c[u+1])});return h})(t.getAttribute("points")),{left:r,top:o,...a}=Rn(t,this.ATTRIBUTE_NAMES,n);return new this(s,{...a,...e})}static fromObject(t){return this._fromObject(t,{extraParam:"points"})}};P(Xn,"ownDefaults",mm),P(Xn,"type","Polyline"),P(Xn,"layoutProperties",[pr,gr,"strokeLineCap","strokeLineJoin","strokeMiterLimit","strokeWidth","strokeUniform","points"]),P(Xn,"cacheProperties",[...Cn,"points"]),P(Xn,"ATTRIBUTE_NAMES",[...ns]),Rt.setClass(Xn),Rt.setSVGClass(Xn);var el=class extends Xn{isOpen(){return!1}};P(el,"ownDefaults",mm),P(el,"type","Polygon"),Rt.setClass(el),Rt.setSVGClass(el);var _m=class extends $e{isEmptyStyles(i){if(!this.styles||i!==void 0&&!this.styles[i])return!0;let t=i===void 0?this.styles:{line:this.styles[i]};for(let e in t)for(let n in t[e])for(let s in t[e][n])return!1;return!0}styleHas(i,t){if(!this.styles||t!==void 0&&!this.styles[t])return!1;let e=t===void 0?this.styles:{0:this.styles[t]};for(let n in e)for(let s in e[n])if(e[n][s][i]!==void 0)return!0;return!1}cleanStyle(i){if(!this.styles)return!1;let t=this.styles,e,n,s=0,r=!0,o=0;for(let a in t){e=0;for(let l in t[a]){let c=t[a][l]||{};s++,c[i]===void 0?r=!1:(n?c[i]!==n&&(r=!1):n=c[i],c[i]===this[i]&&delete c[i]),Object.keys(c).length===0?delete t[a][l]:e++}e===0&&delete t[a]}for(let a=0;a<this._textLines.length;a++)o+=this._textLines[a].length;r&&s===o&&(this[i]=n,this.removeStyle(i))}removeStyle(i){if(!this.styles)return;let t=this.styles,e,n,s;for(n in t){for(s in e=t[n],e)delete e[s][i],Object.keys(e[s]).length===0&&delete e[s];Object.keys(e).length===0&&delete t[n]}}_extendStyles(i,t){let{lineIndex:e,charIndex:n}=this.get2DCursorLocation(i);this._getLineStyle(e)||this._setLineStyle(e);let s=Hu({...this._getStyleDeclaration(e,n),...t},r=>r!==void 0);this._setStyleDeclaration(e,n,s)}getSelectionStyles(i,t,e){let n=[];for(let s=i;s<(t||i);s++)n.push(this.getStyleAtPosition(s,e));return n}getStyleAtPosition(i,t){let{lineIndex:e,charIndex:n}=this.get2DCursorLocation(i);return t?this.getCompleteStyleDeclaration(e,n):this._getStyleDeclaration(e,n)}setSelectionStyles(i,t,e){for(let n=t;n<(e||t);n++)this._extendStyles(n,i);this._forceClearCache=!0}_getStyleDeclaration(i,t){var e;let n=this.styles&&this.styles[i];return n&&(e=n[t])!=null?e:{}}getCompleteStyleDeclaration(i,t){return{...Os(this,this.constructor._styleProperties),...this._getStyleDeclaration(i,t)}}_setStyleDeclaration(i,t,e){this.styles[i][t]=e}_deleteStyleDeclaration(i,t){delete this.styles[i][t]}_getLineStyle(i){return!!this.styles[i]}_setLineStyle(i){this.styles[i]={}}_deleteLineStyle(i){delete this.styles[i]}};P(_m,"_styleProperties",xy);var av=/  +/g,lv=/"/g;function iu(i,t,e,n,s){return`		${((r,{left:o,top:a,width:l,height:c},h=ue.NUM_FRACTION_DIGITS)=>{let u=ko(hi,r,!1),[d,f,p,_]=[o,a,l,c].map(g=>me(g,h));return`<rect ${u} x="${d}" y="${f}" width="${p}" height="${_}"></rect>`})(i,{left:t,top:e,width:n,height:s})}
`}var nu,ln=class po extends _m{static getDefaults(){return{...super.getDefaults(),...po.ownDefaults}}constructor(t,e){super(),P(this,"__charBounds",[]),Object.assign(this,po.ownDefaults),this.setOptions(e),this.styles||(this.styles={}),this.text=t,this.initialized=!0,this.path&&this.setPathInfo(),this.initDimensions(),this.setCoords()}setPathInfo(){let t=this.path;t&&(t.segmentsInfo=od(t.path))}_splitText(){let t=this._splitTextIntoLines(this.text);return this.textLines=t.lines,this._textLines=t.graphemeLines,this._unwrappedTextLines=t._unwrappedLines,this._text=t.graphemeText,t}initDimensions(){this._splitText(),this._clearCache(),this.dirty=!0,this.path?(this.width=this.path.width,this.height=this.path.height):(this.width=this.calcTextWidth()||this.cursorWidth||this.MIN_TEXT_WIDTH,this.height=this.calcTextHeight()),this.textAlign.includes("justify")&&this.enlargeSpaces()}enlargeSpaces(){let t,e,n,s,r,o,a;for(let l=0,c=this._textLines.length;l<c;l++)if((this.textAlign==="justify"||l!==c-1&&!this.isEndOfWrapping(l))&&(s=0,r=this._textLines[l],e=this.getLineWidth(l),e<this.width&&(a=this.textLines[l].match(this._reSpacesAndTabs)))){n=a.length,t=(this.width-e)/n;for(let h=0;h<=r.length;h++)o=this.__charBounds[l][h],this._reSpaceAndTab.test(r[h])?(o.width+=t,o.kernedWidth+=t,o.left+=s,s+=t):o.left+=s}}isEndOfWrapping(t){return t===this._textLines.length-1}missingNewlineOffset(t){return 1}get2DCursorLocation(t,e){let n=e?this._unwrappedTextLines:this._textLines,s;for(s=0;s<n.length;s++){if(t<=n[s].length)return{lineIndex:s,charIndex:t};t-=n[s].length+this.missingNewlineOffset(s,e)}return{lineIndex:s-1,charIndex:n[s-1].length<t?n[s-1].length:t}}toString(){return`#<Text (${this.complexity()}): { "text": "${this.text}", "fontFamily": "${this.fontFamily}" }>`}_getCacheCanvasDimensions(){let t=super._getCacheCanvasDimensions(),e=this.fontSize;return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t}_render(t){let e=this.path;e&&!e.isNotVisible()&&e._render(t),this._setTextStyles(t),this._renderTextLinesBackground(t),this._renderTextDecoration(t,"underline"),this._renderText(t),this._renderTextDecoration(t,"overline"),this._renderTextDecoration(t,"linethrough")}_renderText(t){this.paintFirst==="stroke"?(this._renderTextStroke(t),this._renderTextFill(t)):(this._renderTextFill(t),this._renderTextStroke(t))}_setTextStyles(t,e,n){if(t.textBaseline="alphabetic",this.path)switch(this.pathAlign){case _e:t.textBaseline="middle";break;case"ascender":t.textBaseline="top";break;case"descender":t.textBaseline=Rp}t.font=this._getFontDeclaration(e,n)}calcTextWidth(){let t=this.getLineWidth(0);for(let e=1,n=this._textLines.length;e<n;e++){let s=this.getLineWidth(e);s>t&&(t=s)}return t}_renderTextLine(t,e,n,s,r,o){this._renderChars(t,e,n,s,r,o)}_renderTextLinesBackground(t){if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor"))return;let e=t.fillStyle,n=this._getLeftOffset(),s=this._getTopOffset();for(let r=0,o=this._textLines.length;r<o;r++){let a=this.getHeightOfLine(r);if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor",r)){s+=a;continue}let l=this._textLines[r].length,c=this._getLineLeftOffset(r),h,u,d=0,f=0,p=this.getValueOfPropertyAt(r,0,"textBackgroundColor"),_=this.getHeightOfLineImpl(r);for(let g=0;g<l;g++){let m=this.__charBounds[r][g];u=this.getValueOfPropertyAt(r,g,"textBackgroundColor"),this.path?(t.save(),t.translate(m.renderLeft,m.renderTop),t.rotate(m.angle),t.fillStyle=u,u&&t.fillRect(-m.width/2,-_*(1-this._fontSizeFraction),m.width,_),t.restore()):u===p?d+=m.kernedWidth:(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=p,p&&t.fillRect(h,s,d,_),f=m.left,d=m.width,p=u)}u&&!this.path&&(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=u,t.fillRect(h,s,d,_)),s+=a}t.fillStyle=e,this._removeShadow(t)}_measureChar(t,e,n,s){let r=Io.getFontCache(e),o=this._getFontDeclaration(e),a=n?n+t:t,l=n&&o===this._getFontDeclaration(s),c=e.fontSize/this.CACHE_FONT_SIZE,h,u,d,f;if(n&&r.has(n)&&(d=r.get(n)),r.has(t)&&(f=h=r.get(t)),l&&r.has(a)&&(u=r.get(a),f=u-d),h===void 0||d===void 0||u===void 0){let p=(nu||(nu=bi({width:0,height:0}).getContext("2d")),nu);this._setTextStyles(p,e,!0),h===void 0&&(f=h=p.measureText(t).width,r.set(t,h)),d===void 0&&l&&n&&(d=p.measureText(n).width,r.set(n,d)),l&&u===void 0&&(u=p.measureText(a).width,r.set(a,u),f=u-d)}return{width:h*c,kernedWidth:f*c}}getHeightOfChar(t,e){return this.getValueOfPropertyAt(t,e,"fontSize")}measureLine(t){let e=this._measureLine(t);return this.charSpacing!==0&&(e.width-=this._getWidthOfCharSpacing()),e.width<0&&(e.width=0),e}_measureLine(t){let e,n,s=0,r=this.pathSide===qi,o=this.path,a=this._textLines[t],l=a.length,c=Array(l);this.__charBounds[t]=c;for(let h=0;h<l;h++){let u=a[h];n=this._getGraphemeBox(u,t,h,e),c[h]=n,s+=n.kernedWidth,e=u}if(c[l]={left:n?n.left+n.width:0,width:0,kernedWidth:0,height:this.fontSize,deltaY:0},o&&o.segmentsInfo){let h=0,u=o.segmentsInfo[o.segmentsInfo.length-1].length;switch(this.textAlign){case Be:h=r?u-s:0;break;case _e:h=(u-s)/2;break;case qi:h=r?0:u-s}h+=this.pathStartOffset*(r?-1:1);for(let d=r?l-1:0;r?d>=0:d<l;r?d--:d++)n=c[d],h>u?h%=u:h<0&&(h+=u),this._setGraphemeOnPath(h,n),h+=n.kernedWidth}return{width:s,numOfSpaces:0}}_setGraphemeOnPath(t,e){let n=t+e.kernedWidth/2,s=this.path,r=$g(s.path,n,s.segmentsInfo);e.renderLeft=r.x-s.pathOffset.x,e.renderTop=r.y-s.pathOffset.y,e.angle=r.angle+(this.pathSide==="right"?Math.PI:0)}_getGraphemeBox(t,e,n,s,r){let o=this.getCompleteStyleDeclaration(e,n),a=s?this.getCompleteStyleDeclaration(e,n-1):{},l=this._measureChar(t,o,s,a),c,h=l.kernedWidth,u=l.width;this.charSpacing!==0&&(c=this._getWidthOfCharSpacing(),u+=c,h+=c);let d={width:u,left:0,height:o.fontSize,kernedWidth:h,deltaY:o.deltaY};if(n>0&&!r){let f=this.__charBounds[e][n-1];d.left=f.left+f.width+l.kernedWidth-l.width}return d}getHeightOfLineImpl(t){let e=this.__lineHeights;if(e[t])return e[t];let n=this.getHeightOfChar(t,0);for(let s=1,r=this._textLines[t].length;s<r;s++)n=Math.max(this.getHeightOfChar(t,s),n);return e[t]=n*this._fontSizeMult}getHeightOfLine(t){return this.getHeightOfLineImpl(t)*this.lineHeight}calcTextHeight(){let t=0;for(let e=0,n=this._textLines.length;e<n;e++)t+=e===n-1?this.getHeightOfLineImpl(e):this.getHeightOfLine(e);return t}_getLeftOffset(){return this.direction==="ltr"?-this.width/2:this.width/2}_getTopOffset(){return-this.height/2}_renderTextCommon(t,e){t.save();let n=0,s=this._getLeftOffset(),r=this._getTopOffset();for(let o=0,a=this._textLines.length;o<a;o++)this._renderTextLine(e,t,this._textLines[o],s+this._getLineLeftOffset(o),r+n+this.getHeightOfLineImpl(o),o),n+=this.getHeightOfLine(o);t.restore()}_renderTextFill(t){(this.fill||this.styleHas("fill"))&&this._renderTextCommon(t,"fillText")}_renderTextStroke(t){(this.stroke&&this.strokeWidth!==0||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())}_renderChars(t,e,n,s,r,o){let a=this.textAlign.includes(Qu),l=this.path,c=!a&&this.charSpacing===0&&this.isEmptyStyles(o)&&!l,h=this.direction==="ltr",u=this.direction==="ltr"?1:-1,d=e.direction,f,p,_,g,m,S="",w=0;if(e.save(),d!==this.direction&&(e.canvas.setAttribute("dir",h?"ltr":"rtl"),e.direction=h?"ltr":"rtl",e.textAlign=h?Be:qi),r-=this.getHeightOfLineImpl(o)*this._fontSizeFraction,c)return this._renderChar(t,e,o,0,n.join(""),s,r),void e.restore();for(let x=0,M=n.length-1;x<=M;x++)g=x===M||this.charSpacing||l,S+=n[x],_=this.__charBounds[o][x],w===0?(s+=u*(_.kernedWidth-_.width),w+=_.width):w+=_.kernedWidth,a&&!g&&this._reSpaceAndTab.test(n[x])&&(g=!0),g||(f=f||this.getCompleteStyleDeclaration(o,x),p=this.getCompleteStyleDeclaration(o,x+1),g=Pl(f,p,!1)),g&&(l?(e.save(),e.translate(_.renderLeft,_.renderTop),e.rotate(_.angle),this._renderChar(t,e,o,x,S,-w/2,0),e.restore()):(m=s,this._renderChar(t,e,o,x,S,m,r)),S="",f=p,s+=u*w,w=0);e.restore()}_applyPatternGradientTransformText(t){let e=this.width+this.strokeWidth,n=this.height+this.strokeWidth,s=bi({width:e,height:n}),r=s.getContext("2d");return s.width=e,s.height=n,r.beginPath(),r.moveTo(0,0),r.lineTo(e,0),r.lineTo(e,n),r.lineTo(0,n),r.closePath(),r.translate(e/2,n/2),r.fillStyle=t.toLive(r),this._applyPatternGradientTransform(r,t),r.fill(),r.createPattern(s,"no-repeat")}handleFiller(t,e,n){let s,r;return Pi(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?(s=-this.width/2,r=-this.height/2,t.translate(s,r),t[e]=this._applyPatternGradientTransformText(n),{offsetX:s,offsetY:r}):(t[e]=n.toLive(t),this._applyPatternGradientTransform(t,n)):(t[e]=n,{offsetX:0,offsetY:0})}_setStrokeStyles(t,{stroke:e,strokeWidth:n}){return t.lineWidth=n,t.lineCap=this.strokeLineCap,t.lineDashOffset=this.strokeDashOffset,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,this.handleFiller(t,"strokeStyle",e)}_setFillStyles(t,{fill:e}){return this.handleFiller(t,"fillStyle",e)}_renderChar(t,e,n,s,r,o,a){let l=this._getStyleDeclaration(n,s),c=this.getCompleteStyleDeclaration(n,s),h=t==="fillText"&&c.fill,u=t==="strokeText"&&c.stroke&&c.strokeWidth;if(u||h){if(e.save(),e.font=this._getFontDeclaration(c),l.textBackgroundColor&&this._removeShadow(e),l.deltaY&&(a+=l.deltaY),h){let d=this._setFillStyles(e,c);e.fillText(r,o-d.offsetX,a-d.offsetY)}if(u){let d=this._setStrokeStyles(e,c);e.strokeText(r,o-d.offsetX,a-d.offsetY)}e.restore()}}setSuperscript(t,e){this._setScript(t,e,this.superscript)}setSubscript(t,e){this._setScript(t,e,this.subscript)}_setScript(t,e,n){let s=this.get2DCursorLocation(t,!0),r=this.getValueOfPropertyAt(s.lineIndex,s.charIndex,"fontSize"),o=this.getValueOfPropertyAt(s.lineIndex,s.charIndex,"deltaY"),a={fontSize:r*n.size,deltaY:o+r*n.baseline};this.setSelectionStyles(a,t,e)}_getLineLeftOffset(t){let e=this.getLineWidth(t),n=this.width-e,s=this.textAlign,r=this.direction,o=this.isEndOfWrapping(t),a=0;return s==="justify"||s==="justify-center"&&!o||s==="justify-right"&&!o||s==="justify-left"&&!o?0:(s==="center"&&(a=n/2),s==="right"&&(a=n),s==="justify-center"&&(a=n/2),s==="justify-right"&&(a=n),r==="rtl"&&(s==="right"||s==="justify-right"?a=0:s==="left"||s==="justify-left"?a=-n:s!=="center"&&s!=="justify-center"||(a=-n/2)),a)}_clearCache(){this._forceClearCache=!1,this.__lineWidths=[],this.__lineHeights=[],this.__charBounds=[]}getLineWidth(t){if(this.__lineWidths[t]!==void 0)return this.__lineWidths[t];let{width:e}=this.measureLine(t);return this.__lineWidths[t]=e,e}_getWidthOfCharSpacing(){return this.charSpacing===0?0:this.fontSize*this.charSpacing/1e3}getValueOfPropertyAt(t,e,n){var s;return(s=this._getStyleDeclaration(t,e)[n])==null?this[n]:s}_renderTextDecoration(t,e){if(!this[e]&&!this.styleHas(e))return;let n=this._getTopOffset(),s=this._getLeftOffset(),r=this.path,o=this._getWidthOfCharSpacing(),a=e==="linethrough"?.5:+(e==="overline"),l=this.offsets[e];for(let c=0,h=this._textLines.length;c<h;c++){let u=this.getHeightOfLine(c);if(!this[e]&&!this.styleHas(e,c)){n+=u;continue}let d=this._textLines[c],f=u/this.lineHeight,p=this._getLineLeftOffset(c),_,g=0,m=0,S=this.getValueOfPropertyAt(c,0,e),w=this.getValueOfPropertyAt(c,0,hi),x=this.getValueOfPropertyAt(c,0,"textDecorationColor")||w,M=this.getValueOfPropertyAt(c,0,dr),T=S,A=x,v=M,E=n+f*(1-this._fontSizeFraction),R=this.getHeightOfChar(c,0),D=this.getValueOfPropertyAt(c,0,"deltaY");for(let I=0,U=d.length;I<U;I++){let X=this.__charBounds[c][I];T=this.getValueOfPropertyAt(c,I,e),_=this.getValueOfPropertyAt(c,I,hi),A=this.getValueOfPropertyAt(c,I,"textDecorationColor")||_,v=this.getValueOfPropertyAt(c,I,dr);let W=this.getHeightOfChar(c,I),it=this.getValueOfPropertyAt(c,I,"deltaY");if(r&&T&&_){let H=this.fontSize*v/1e3;t.save(),t.fillStyle=A,t.translate(X.renderLeft,X.renderTop),t.rotate(X.angle),t.fillRect(-X.kernedWidth/2,l*W+it-a*H,X.kernedWidth,H),t.restore()}else if((T!==S||_!==w||A!==x||W!==R||v!==M||it!==D)&&m>0){let H=this.fontSize*M/1e3,j=s+p+g;this.direction==="rtl"&&(j=this.width-j-m),S&&x&&M&&(t.fillStyle=x,t.fillRect(j,E+l*R+D-a*H,m,H)),g=X.left,m=X.width,S=T,x=A,M=v,w=_,R=W,D=it}else m+=X.kernedWidth}let B=s+p+g;this.direction==="rtl"&&(B=this.width-B-m),t.fillStyle=A;let k=this.fontSize*v/1e3;T&&A&&v&&t.fillRect(B,E+l*R+D-a*k,m-o,k),n+=u}this._removeShadow(t)}_getFontDeclaration({fontFamily:t=this.fontFamily,fontStyle:e=this.fontStyle,fontWeight:n=this.fontWeight,fontSize:s=this.fontSize}={},r){let o=t.includes("'")||t.includes('"')||t.includes(",")||po.genericFonts.includes(t.toLowerCase())?t:`"${t}"`;return[e,n,`${r?this.CACHE_FONT_SIZE:s}px`,o].join(" ")}render(t){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._forceClearCache&&this.initDimensions(),super.render(t)))}graphemeSplit(t){return Cl(t)}_splitTextIntoLines(t){let e=t.split(this._reNewline),n=Array(e.length),s=[`
`],r=[];for(let o=0;o<e.length;o++)n[o]=this.graphemeSplit(e[o]),r=r.concat(n[o],s);return r.pop(),{_unwrappedLines:n,lines:e,graphemeText:r,graphemeLines:n}}toObject(t=[]){return{...super.toObject([...cg,...t]),styles:Bg(this.styles,this.text),...this.path?{path:this.path.toObject()}:{}}}set(t,e){let{textLayoutProperties:n}=this.constructor;super.set(t,e);let s=!1,r=!1;if(typeof t=="object")for(let o in t)o==="path"&&this.setPathInfo(),s=s||n.includes(o),r=r||o==="path";else s=n.includes(t),r=t==="path";return r&&this.setPathInfo(),s&&this.initialized&&(this.initDimensions(),this.setCoords()),this}complexity(){return 1}static async fromElement(t,e,n){let s=Rn(t,po.ATTRIBUTE_NAMES,n),{textAnchor:r=Be,textDecoration:o="",dx:a=0,dy:l=0,top:c=0,left:h=0,fontSize:u=16,strokeWidth:d=1,...f}={...e,...s},p=new this(vl(t.textContent||"").trim(),{left:h+a,top:c+l,underline:o.includes("underline"),overline:o.includes("overline"),linethrough:o.includes("line-through"),strokeWidth:0,fontSize:u,...f}),_=p.getScaledHeight()/p.height,g=((p.height+p.strokeWidth)*p.lineHeight-p.height)*_,m=p.getScaledHeight()+g,S=0;return r==="center"&&(S=p.getScaledWidth()/2),r==="right"&&(S=p.getScaledWidth()),p.set({left:p.left-S,top:p.top-(m-p.fontSize*(.07+p._fontSizeFraction))/p.lineHeight,strokeWidth:d}),p}static fromObject(t){return this._fromObject({...t,styles:kg(t.styles||{},t.text)},{extraParam:"text"})}};P(ln,"textLayoutProperties",lg),P(ln,"cacheProperties",[...Cn,...cg]),P(ln,"ownDefaults",vy),P(ln,"type","Text"),P(ln,"genericFonts",["serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]),P(ln,"ATTRIBUTE_NAMES",ns.concat("x","y","dx","dy","font-family","font-style","font-weight","font-size","letter-spacing","text-decoration","text-decoration-thickness","text-decoration-color","text-anchor")),Og(ln,[class extends rg{_toSVG(){let i=this._getSVGLeftTopOffsets(),t=this._getSVGTextAndBg(i.textTop,i.textLeft);return this._wrapSVGTextAndBg(t)}toSVG(i){let t=this._createBaseSVGMarkup(this._toSVG(),{reviver:i,noStyle:!0,withShadow:!0}),e=this.path;return e?t+e._createBaseSVGMarkup(e._toSVG(),{reviver:i,withShadow:!0,additionalTransform:hr(this.calcOwnMatrix())}):t}_getSVGLeftTopOffsets(){return{textLeft:-this.width/2,textTop:-this.height/2,lineTop:this.getHeightOfLine(0)}}_wrapSVGTextAndBg({textBgRects:i,textSpans:t}){let e=this.getSvgTextDecoration(this);return[i.join(""),'		<text xml:space="preserve" ',`font-family="${te(this.fontFamily.replace(lv,"'"))}" `,`font-size="${te(this.fontSize)}" `,this.fontStyle?`font-style="${te(this.fontStyle)}" `:"",this.fontWeight?`font-weight="${te(this.fontWeight)}" `:"",e?`text-decoration="${e}" `:"",this.direction==="rtl"?'direction="rtl" ':"",'style="',this.getSvgStyles(!0),'"',this.addPaintOrder()," >",t.join(""),`</text>
`]}_getSVGTextAndBg(i,t){let e=[],n=[],s,r=i;this.backgroundColor&&n.push(iu(this.backgroundColor,-this.width/2,-this.height/2,this.width,this.height));for(let o=0,a=this._textLines.length;o<a;o++)s=this._getLineLeftOffset(o),this.direction==="rtl"&&(s+=this.width),(this.textBackgroundColor||this.styleHas("textBackgroundColor",o))&&this._setSVGTextLineBg(n,o,t+s,r),this._setSVGTextLineText(e,o,t+s,r),r+=this.getHeightOfLine(o);return{textSpans:e,textBgRects:n}}_createTextCharSpan(i,t,e,n,s){let r=ue.NUM_FRACTION_DIGITS,o=this.getSvgSpanStyles(t,i!==i.trim()||!!i.match(av)),a=o?`style="${o}"`:"",l=t.deltaY,c=l?` dy="${me(l,r)}" `:"",{angle:h,renderLeft:u,renderTop:d,width:f}=s,p="";if(u!==void 0){let _=f/2;h&&(p=` rotate="${me(Tn(h),r)}"`);let g=Is({angle:Tn(h)});g[4]=u,g[5]=d;let m=new Q(-_,0).transform(g);e=m.x,n=m.y}return`<tspan x="${me(e,r)}" y="${me(n,r)}" ${c}${p}${a}>${te(i)}</tspan>`}_setSVGTextLineText(i,t,e,n){let s=this.getHeightOfLine(t),r=this.textAlign.includes(Qu),o=this._textLines[t],a,l,c,h,u,d="",f=0;n+=s*(1-this._fontSizeFraction)/this.lineHeight;for(let p=0,_=o.length-1;p<=_;p++)u=p===_||this.charSpacing||this.path,d+=o[p],c=this.__charBounds[t][p],f===0?(e+=c.kernedWidth-c.width,f+=c.width):f+=c.kernedWidth,r&&!u&&this._reSpaceAndTab.test(o[p])&&(u=!0),u||(a=a||this.getCompleteStyleDeclaration(t,p),l=this.getCompleteStyleDeclaration(t,p+1),u=Pl(a,l,!0)),u&&(h=this._getStyleDeclaration(t,p),i.push(this._createTextCharSpan(d,h,e,n,c)),d="",a=l,this.direction==="rtl"?e-=f:e+=f,f=0)}_setSVGTextLineBg(i,t,e,n){let s=this._textLines[t],r=this.getHeightOfLine(t)/this.lineHeight,o,a=0,l=0,c=this.getValueOfPropertyAt(t,0,"textBackgroundColor");for(let h=0;h<s.length;h++){let{left:u,width:d,kernedWidth:f}=this.__charBounds[t][h];o=this.getValueOfPropertyAt(t,h,"textBackgroundColor"),o===c?a+=f:(c&&i.push(iu(c,e+l,n,a,r)),l=u,a=d,c=o)}o&&i.push(iu(c,e+l,n,a,r))}getSvgStyles(i){let t=Il(this.textDecorationColor)?` text-decoration-color: ${te(this[Ll])};`:"";return`${super.getSvgStyles(i)} text-decoration-thickness: ${me(this.textDecorationThickness*this.getObjectScaling().y/10,ue.NUM_FRACTION_DIGITS)}%;${t} white-space: pre;`}getSvgSpanStyles(i,t){let{fontFamily:e,strokeWidth:n,stroke:s,fill:r,fontSize:o,fontStyle:a,fontWeight:l,textDecorationThickness:c,textDecorationColor:h,linethrough:u,overline:d,underline:f}=i,p=this.getSvgTextDecoration({underline:f??this.underline,overline:d??this.overline,linethrough:u??this.linethrough}),_=c||this.textDecorationThickness,g=h||this.textDecorationColor,m=Ts(n),S=Es(e),w=Ts(o),x=Es(a),M=Ts(l)||Es(l),T=Es(g);return[s?ko(wn,s):"",m?`stroke-width: ${te(m)}; `:"",S?`font-family: ${S.includes("'")||S.includes('"')?te(S):`'${te(S)}'`}; `:"",w?`font-size: ${te(w)}px; `:"",x?`font-style: ${te(x)}; `:"",M?`font-weight: ${te(M)}; `:"",p?`text-decoration: ${p}; text-decoration-thickness: ${me(_*this.getObjectScaling().y/10,ue.NUM_FRACTION_DIGITS)}%;${T?` text-decoration-color: ${te(T)};`:""} `:"",r?ko(hi,r):"",t?"white-space: pre; ":""].join("")}getSvgTextDecoration(i){return["overline","underline","line-through"].filter(t=>i[t.replace("-","")]).join(" ")}}]),Rt.setClass(ln),Rt.setSVGClass(ln);var cv=class{constructor(i){P(this,"target",void 0),P(this,"__mouseDownInPlace",!1),P(this,"__dragStartFired",!1),P(this,"__isDraggingOver",!1),P(this,"__dragStartSelection",void 0),P(this,"__dragImageDisposer",void 0),P(this,"_dispose",void 0),this.target=i;let t=[this.target.on("dragenter",this.dragEnterHandler.bind(this)),this.target.on("dragover",this.dragOverHandler.bind(this)),this.target.on("dragleave",this.dragLeaveHandler.bind(this)),this.target.on("dragend",this.dragEndHandler.bind(this)),this.target.on("drop",this.dropHandler.bind(this))];this._dispose=()=>{t.forEach(e=>e()),this._dispose=void 0}}isPointerOverSelection(i){let t=this.target,e=t.getSelectionStartFromPointer(i);return t.isEditing&&e>=t.selectionStart&&e<=t.selectionEnd&&t.selectionStart<t.selectionEnd}start(i){return this.__mouseDownInPlace=this.isPointerOverSelection(i)}isActive(){return this.__mouseDownInPlace}end(i){let t=this.isActive();return t&&!this.__dragStartFired&&(this.target.setCursorByClick(i),this.target.initDelayedCursor(!0)),this.__mouseDownInPlace=!1,this.__dragStartFired=!1,this.__isDraggingOver=!1,t}getDragStartSelection(){return this.__dragStartSelection}setDragImage(i,{selectionStart:t,selectionEnd:e}){var n;let s=this.target,r=s.canvas,o=new Q(s.flipX?-1:1,s.flipY?-1:1),a=s._getCursorBoundaries(t),l=new Q(a.left+a.leftOffset,a.top+a.topOffset).multiply(o).transform(s.calcTransformMatrix()),c=r.getScenePoint(i).subtract(l),h=s.getCanvasRetinaScaling(),u=s.getBoundingRect(),d=l.subtract(new Q(u.left,u.top)),f=r.viewportTransform,p=d.add(c).transform(f,!0),_=s.backgroundColor,g=sd(s.styles);s.backgroundColor="";let m={stroke:"transparent",fill:"transparent",textBackgroundColor:"transparent"};s.setSelectionStyles(m,0,t),s.setSelectionStyles(m,e,s.text.length),s.dirty=!0;let S=s.toCanvasElement({enableRetinaScaling:r.enableRetinaScaling,viewportTransform:!0});s.backgroundColor=_,s.styles=g,s.dirty=!0,vu(S,{position:"fixed",left:-S.width+"px",border:Ml,width:S.width/h+"px",height:S.height/h+"px"}),this.__dragImageDisposer&&this.__dragImageDisposer(),this.__dragImageDisposer=()=>{S.remove()},Vi(i.target||this.target.hiddenTextarea).body.appendChild(S),(n=i.dataTransfer)==null||n.setDragImage(S,p.x,p.y)}onDragStart(i){this.__dragStartFired=!0;let t=this.target,e=this.isActive();if(e&&i.dataTransfer){let n=this.__dragStartSelection={selectionStart:t.selectionStart,selectionEnd:t.selectionEnd},s=t._text.slice(n.selectionStart,n.selectionEnd).join(""),r={text:t.text,value:s,...n};i.dataTransfer.setData("text/plain",s),i.dataTransfer.setData("application/fabric",JSON.stringify({value:s,styles:t.getSelectionStyles(n.selectionStart,n.selectionEnd,!0)})),i.dataTransfer.effectAllowed="copyMove",this.setDragImage(i,r)}return t.abortCursorAnimation(),e}canDrop(i){if(this.target.editable&&!this.target.getActiveControl()&&!i.defaultPrevented){if(this.isActive()&&this.__dragStartSelection){let t=this.target.getSelectionStartFromPointer(i),e=this.__dragStartSelection;return t<e.selectionStart||t>e.selectionEnd}return!0}return!1}targetCanDrop(i){return this.target.canDrop(i)}dragEnterHandler({e:i}){let t=this.targetCanDrop(i);!this.__isDraggingOver&&t&&(this.__isDraggingOver=!0)}dragOverHandler(i){let{e:t}=i,e=this.targetCanDrop(t);!this.__isDraggingOver&&e?this.__isDraggingOver=!0:this.__isDraggingOver&&!e&&(this.__isDraggingOver=!1),this.__isDraggingOver&&(t.preventDefault(),i.canDrop=!0,i.dropTarget=this.target)}dragLeaveHandler(){(this.__isDraggingOver||this.isActive())&&(this.__isDraggingOver=!1)}dropHandler(i){var t;let{e}=i,n=e.defaultPrevented;this.__isDraggingOver=!1,e.preventDefault();let s=(t=e.dataTransfer)==null?void 0:t.getData("text/plain");if(s&&!n){let r=this.target,o=r.canvas,a=r.getSelectionStartFromPointer(e),{styles:l}=e.dataTransfer.types.includes("application/fabric")?JSON.parse(e.dataTransfer.getData("application/fabric")):{},c=s[Math.max(0,s.length-1)];if(this.__dragStartSelection){let h=this.__dragStartSelection.selectionStart,u=this.__dragStartSelection.selectionEnd;a>h&&a<=u?a=h:a>u&&(a-=u-h),r.removeChars(h,u),delete this.__dragStartSelection}r._reNewline.test(c)&&(r._reNewline.test(r._text[a])||a===r._text.length)&&(s=s.trimEnd()),i.didDrop=!0,i.dropTarget=r,r.insertChars(s,l,a),o.setActiveObject(r),r.enterEditing(e),r.selectionStart=Math.min(a+0,r._text.length),r.selectionEnd=Math.min(r.selectionStart+s.length,r._text.length),r.hiddenTextarea.value=r.text,r._updateTextarea(),r.hiddenTextarea.focus(),r.fire(gl,{index:a+0,action:"drop"}),o.fire("text:changed",{target:r}),o.contextTopDirty=!0,o.requestRenderAll()}}dragEndHandler({e:i}){if(this.isActive()&&this.__dragStartFired&&this.__dragStartSelection){var t;let e=this.target,n=this.target.canvas,{selectionStart:s,selectionEnd:r}=this.__dragStartSelection,o=((t=i.dataTransfer)==null?void 0:t.dropEffect)||"none";o==="none"?(e.selectionStart=s,e.selectionEnd=r,e._updateTextarea(),e.hiddenTextarea.focus()):(e.clearContextTop(),o==="move"&&(e.removeChars(s,r),e.selectionStart=e.selectionEnd=s,e.hiddenTextarea&&(e.hiddenTextarea.value=e.text),e._updateTextarea(),e.fire(gl,{index:s,action:"dragend"}),n.fire("text:changed",{target:e}),n.requestRenderAll()),e.exitEditing())}this.__dragImageDisposer&&this.__dragImageDisposer(),delete this.__dragImageDisposer,delete this.__dragStartSelection,this.__isDraggingOver=!1}dispose(){this._dispose&&this._dispose()}},Mp=/[ \n\.,;!\?\-]/,hv=class extends ln{constructor(...i){super(...i),P(this,"_currentCursorOpacity",1)}initBehavior(){this._tick=this._tick.bind(this),this._onTickComplete=this._onTickComplete.bind(this),this.updateSelectionOnMouseMove=this.updateSelectionOnMouseMove.bind(this)}onDeselect(i){return this.isEditing&&this.exitEditing(),this.selected=!1,super.onDeselect(i)}_animateCursor({toValue:i,duration:t,delay:e,onComplete:n}){return td({startValue:this._currentCursorOpacity,endValue:i,duration:t,delay:e,onComplete:n,abort:()=>!this.canvas||this.selectionStart!==this.selectionEnd,onChange:s=>{this._currentCursorOpacity=s,this.renderCursorOrSelection()}})}_tick(i){this._currentTickState=this._animateCursor({toValue:0,duration:this.cursorDuration/2,delay:Math.max(i||0,100),onComplete:this._onTickComplete})}_onTickComplete(){var i;(i=this._currentTickCompleteState)==null||i.abort(),this._currentTickCompleteState=this._animateCursor({toValue:1,duration:this.cursorDuration,onComplete:this._tick})}initDelayedCursor(i){this.abortCursorAnimation(),this._tick(i?0:this.cursorDelay)}abortCursorAnimation(){let i=!1;[this._currentTickState,this._currentTickCompleteState].forEach(t=>{t&&!t.isDone()&&(i=!0,t.abort())}),this._currentCursorOpacity=1,i&&this.clearContextTop()}restartCursorIfNeeded(){[this._currentTickState,this._currentTickCompleteState].some(i=>!i||i.isDone())&&this.initDelayedCursor()}selectAll(){return this.selectionStart=0,this.selectionEnd=this._text.length,this._fireSelectionChanged(),this._updateTextarea(),this}cmdAll(){this.selectAll(),this.renderCursorOrSelection()}getSelectedText(){return this._text.slice(this.selectionStart,this.selectionEnd).join("")}findWordBoundaryLeft(i){let t=0,e=i-1;if(this._reSpace.test(this._text[e]))for(;this._reSpace.test(this._text[e]);)t++,e--;for(;/\S/.test(this._text[e])&&e>-1;)t++,e--;return i-t}findWordBoundaryRight(i){let t=0,e=i;if(this._reSpace.test(this._text[e]))for(;this._reSpace.test(this._text[e]);)t++,e++;for(;/\S/.test(this._text[e])&&e<this._text.length;)t++,e++;return i+t}findLineBoundaryLeft(i){let t=0,e=i-1;for(;!/\n/.test(this._text[e])&&e>-1;)t++,e--;return i-t}findLineBoundaryRight(i){let t=0,e=i;for(;!/\n/.test(this._text[e])&&e<this._text.length;)t++,e++;return i+t}searchWordBoundary(i,t){let e=this._text,n=i>0&&this._reSpace.test(e[i])&&(t===-1||!Lu.test(e[i-1]))?i-1:i,s=e[n];for(;n>0&&n<e.length&&!Mp.test(s);)n+=t,s=e[n];return t===-1&&Mp.test(s)&&n++,n}selectWord(i){var t;i=(t=i)==null?this.selectionStart:t;let e=this.searchWordBoundary(i,-1),n=Math.max(e,this.searchWordBoundary(i,1));this.selectionStart=e,this.selectionEnd=n,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()}selectLine(i){var t;i=(t=i)==null?this.selectionStart:t;let e=this.findLineBoundaryLeft(i),n=this.findLineBoundaryRight(i);this.selectionStart=e,this.selectionEnd=n,this._fireSelectionChanged(),this._updateTextarea()}enterEditing(i){!this.isEditing&&this.editable&&(this.enterEditingImpl(),this.fire("editing:entered",i?{e:i}:void 0),this._fireSelectionChanged(),this.canvas&&(this.canvas.fire("text:editing:entered",{target:this,e:i}),this.canvas.requestRenderAll()))}enterEditingImpl(){this.canvas&&(this.canvas.calcOffset(),this.canvas.textEditingManager.exitTextEditing()),this.isEditing=!0,this.initHiddenTextarea(),this.hiddenTextarea.focus(),this.hiddenTextarea.value=this.text,this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick()}updateSelectionOnMouseMove(i){if(this.getActiveControl())return;let t=this.hiddenTextarea;Vi(t).activeElement!==t&&t.focus();let e=this.getSelectionStartFromPointer(i),n=this.selectionStart,s=this.selectionEnd;(e===this.__selectionStartOnMouseDown&&n!==s||n!==e&&s!==e)&&(e>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=e):(this.selectionStart=e,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===n&&this.selectionEnd===s||(this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}_setEditingProps(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0}fromStringToGraphemeSelection(i,t,e){let n=e.slice(0,i),s=this.graphemeSplit(n).length;if(i===t)return{selectionStart:s,selectionEnd:s};let r=e.slice(i,t);return{selectionStart:s,selectionEnd:s+this.graphemeSplit(r).length}}fromGraphemeToStringSelection(i,t,e){let n=e.slice(0,i).join("").length;return i===t?{selectionStart:n,selectionEnd:n}:{selectionStart:n,selectionEnd:n+e.slice(i,t).join("").length}}_updateTextarea(){if(this.cursorOffsetCache={},this.hiddenTextarea){if(!this.inCompositionMode){let i=this.fromGraphemeToStringSelection(this.selectionStart,this.selectionEnd,this._text);this.hiddenTextarea.selectionStart=i.selectionStart,this.hiddenTextarea.selectionEnd=i.selectionEnd}this.updateTextareaPosition()}}updateFromTextArea(){let{hiddenTextarea:i,direction:t,textAlign:e,inCompositionMode:n}=this;if(!i)return;let s=e==="justify"?t==="ltr"?Be:qi:e.replace("justify-",""),r=this.getPositionByOrigin(s,"top");this.cursorOffsetCache={},this.text=i.value,this.set("dirty",!0),this.initDimensions(),this.setPositionByOrigin(r,s,"top"),this.setCoords();let o=this.fromStringToGraphemeSelection(i.selectionStart,i.selectionEnd,i.value);this.selectionEnd=this.selectionStart=o.selectionEnd,n||(this.selectionStart=o.selectionStart),this.updateTextareaPosition()}updateTextareaPosition(){if(this.selectionStart===this.selectionEnd){let i=this._calcTextareaPosition();this.hiddenTextarea.style.left=i.left,this.hiddenTextarea.style.top=i.top}}_calcTextareaPosition(){if(!this.canvas)return{left:"1px",top:"1px"};let i=this.inCompositionMode?this.compositionStart:this.selectionStart,t=this._getCursorBoundaries(i),e=this.get2DCursorLocation(i),n=e.lineIndex,s=e.charIndex,r=this.getValueOfPropertyAt(n,s,"fontSize")*this.lineHeight,o=t.leftOffset,a=this.getCanvasRetinaScaling(),l=this.canvas.upperCanvasEl,c=l.width/a,h=l.height/a,u=c-r,d=h-r,f=new Q(t.left+o,t.top+t.topOffset+r).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new Q(l.clientWidth/c,l.clientHeight/h));return f.x<0&&(f.x=0),f.x>u&&(f.x=u),f.y<0&&(f.y=0),f.y>d&&(f.y=d),f.x+=this.canvas._offset.left,f.y+=this.canvas._offset.top,{left:`${f.x}px`,top:`${f.y}px`,fontSize:`${r}px`,charHeight:r}}_saveEditingProps(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,selectable:this.selectable,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}}_restoreEditingProps(){this._savedProps&&(this.hoverCursor=this._savedProps.hoverCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.selectable=this._savedProps.selectable,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor||this.canvas.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor||this.canvas.moveCursor),delete this._savedProps)}exitEditingImpl(){let i=this.hiddenTextarea;this.selected=!1,this.isEditing=!1,i&&(i.blur&&i.blur(),i.parentNode&&i.parentNode.removeChild(i)),this.hiddenTextarea=null,this.abortCursorAnimation(),this.selectionStart!==this.selectionEnd&&this.clearContextTop(),this.selectionEnd=this.selectionStart,this._restoreEditingProps(),this._forceClearCache&&(this.initDimensions(),this.setCoords())}exitEditing(){let i=this._textBeforeEdit!==this.text;return this.exitEditingImpl(),this.fire("editing:exited"),i&&this.fire("modified"),this.canvas&&(this.canvas.fire("text:editing:exited",{target:this}),i&&this.canvas.fire("object:modified",{target:this})),this}_removeExtraneousStyles(){for(let i in this.styles)this._textLines[i]||delete this.styles[i]}removeStyleFromTo(i,t){let{lineIndex:e,charIndex:n}=this.get2DCursorLocation(i,!0),{lineIndex:s,charIndex:r}=this.get2DCursorLocation(t,!0);if(e!==s){if(this.styles[e])for(let o=n;o<this._unwrappedTextLines[e].length;o++)delete this.styles[e][o];if(this.styles[s])for(let o=r;o<this._unwrappedTextLines[s].length;o++){let a=this.styles[s][o];a&&(this.styles[e]||(this.styles[e]={}),this.styles[e][n+o-r]=a)}for(let o=e+1;o<=s;o++)delete this.styles[o];this.shiftLineStyles(s,e-s)}else if(this.styles[e]){let o=this.styles[e],a=r-n;for(let l=n;l<r;l++)delete o[l];for(let l in this.styles[e]){let c=parseInt(l,10);c>=r&&(o[c-a]=o[l],delete o[l])}}}shiftLineStyles(i,t){let e=Object.assign({},this.styles);for(let n in this.styles){let s=parseInt(n,10);s>i&&(this.styles[s+t]=e[s],e[s-t]||delete this.styles[s])}}insertNewlineStyleObject(i,t,e,n){let s={},r=this._unwrappedTextLines[i].length,o=r===t,a=!1;e||(e=1),this.shiftLineStyles(i,e);let l=this.styles[i]?this.styles[i][t===0?t:t-1]:void 0;for(let h in this.styles[i]){let u=parseInt(h,10);u>=t&&(a=!0,s[u-t]=this.styles[i][h],o&&t===0||delete this.styles[i][h])}let c=!1;for(a&&!o&&(this.styles[i+e]=s,c=!0),(c||r>t)&&e--;e>0;)n&&n[e-1]?this.styles[i+e]={0:{...n[e-1]}}:l?this.styles[i+e]={0:{...l}}:delete this.styles[i+e],e--;this._forceClearCache=!0}insertCharStyleObject(i,t,e,n){this.styles||(this.styles={});let s=this.styles[i],r=s?{...s}:{};e||(e=1);for(let a in r){let l=parseInt(a,10);l>=t&&(s[l+e]=r[l],r[l-e]||delete s[l])}if(this._forceClearCache=!0,n){for(;e--;)Object.keys(n[e]).length&&(this.styles[i]||(this.styles[i]={}),this.styles[i][t+e]={...n[e]});return}if(!s)return;let o=s[t?t-1:1];for(;o&&e--;)this.styles[i][t+e]={...o}}insertNewStyleBlock(i,t,e){let n=this.get2DCursorLocation(t,!0),s=[0],r,o=0;for(let a=0;a<i.length;a++)i[a]===`
`?(o++,s[o]=0):s[o]++;for(s[0]>0&&(this.insertCharStyleObject(n.lineIndex,n.charIndex,s[0],e),e=e&&e.slice(s[0]+1)),o&&this.insertNewlineStyleObject(n.lineIndex,n.charIndex+s[0],o),r=1;r<o;r++)s[r]>0?this.insertCharStyleObject(n.lineIndex+r,0,s[r],e):e&&this.styles[n.lineIndex+r]&&e[0]&&(this.styles[n.lineIndex+r][0]=e[0]),e=e&&e.slice(s[r]+1);s[r]>0&&this.insertCharStyleObject(n.lineIndex+r,0,s[r],e)}removeChars(i,t=i+1){this.removeStyleFromTo(i,t),this._text.splice(i,t-i),this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}insertChars(i,t,e,n=e){n>e&&this.removeStyleFromTo(e,n);let s=this.graphemeSplit(i);this.insertNewStyleBlock(s,e,t),this._text=[...this._text.slice(0,e),...s,...this._text.slice(n)],this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}setSelectionStartEndWithShift(i,t,e){e<=i?(t===i?this._selectionDirection=Be:this._selectionDirection==="right"&&(this._selectionDirection=Be,this.selectionEnd=i),this.selectionStart=e):e>i&&e<t?this._selectionDirection==="right"?this.selectionEnd=e:this.selectionStart=e:(t===i?this._selectionDirection=qi:this._selectionDirection==="left"&&(this._selectionDirection=qi,this.selectionStart=t),this.selectionEnd=e)}},uv=class extends hv{initHiddenTextarea(){let i=this.canvas&&Vi(this.canvas.getElement())||fr(),t=i.createElement("textarea");Object.entries({autocapitalize:"off",autocorrect:"off",autocomplete:"off",spellcheck:"false","data-fabric":"textarea",wrap:"off",name:"fabricTextarea"}).map(([r,o])=>t.setAttribute(r,o));let{top:e,left:n,fontSize:s}=this._calcTextareaPosition();t.style.cssText=`position: absolute; top: ${e}; left: ${n}; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ${s};`,(this.hiddenTextareaContainer||i.body).appendChild(t),Object.entries({blur:"blur",keydown:"onKeyDown",keyup:"onKeyUp",input:"onInput",copy:"copy",cut:"copy",paste:"paste",compositionstart:"onCompositionStart",compositionupdate:"onCompositionUpdate",compositionend:"onCompositionEnd"}).map(([r,o])=>t.addEventListener(r,this[o].bind(this))),this.hiddenTextarea=t}blur(){this.abortCursorAnimation()}onKeyDown(i){if(!this.isEditing)return;let t=this.direction==="rtl"?this.keysMapRtl:this.keysMap;if(i.keyCode in t)this[t[i.keyCode]](i);else{if(!(i.keyCode in this.ctrlKeysMapDown)||!i.ctrlKey&&!i.metaKey)return;this[this.ctrlKeysMapDown[i.keyCode]](i)}i.stopImmediatePropagation(),i.preventDefault(),i.keyCode>=33&&i.keyCode<=40?(this.inCompositionMode=!1,this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.requestRenderAll()}onKeyUp(i){!this.isEditing||this._copyDone||this.inCompositionMode?this._copyDone=!1:i.keyCode in this.ctrlKeysMapUp&&(i.ctrlKey||i.metaKey)&&(this[this.ctrlKeysMapUp[i.keyCode]](i),i.stopImmediatePropagation(),i.preventDefault(),this.canvas&&this.canvas.requestRenderAll())}onInput(i){let t=this.fromPaste,{value:e,selectionStart:n,selectionEnd:s}=this.hiddenTextarea;if(this.fromPaste=!1,i&&i.stopPropagation(),!this.isEditing)return;let r=()=>{this.updateFromTextArea(),this.fire(gl),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll())};if(this.hiddenTextarea.value==="")return this.styles={},void r();let o=this._splitTextIntoLines(e).graphemeText,a=this._text.length,l=o.length,c=this.selectionStart,h=this.selectionEnd,u=c!==h,d,f,p,_,g=l-a,m=this.fromStringToGraphemeSelection(n,s,e),S=c>m.selectionStart;u?(f=this._text.slice(c,h),g+=h-c):l<a&&(f=S?this._text.slice(h+g,h):this._text.slice(c,c-g));let w=o.slice(m.selectionEnd-g,m.selectionEnd);if(f&&f.length&&(w.length&&(d=this.getSelectionStyles(c,c+1,!1),d=w.map(()=>d[0])),u?(p=c,_=h):S?(p=h-f.length,_=h):(p=h,_=h+f.length),this.removeStyleFromTo(p,_)),w.length){let{copyPasteData:x}=un();t&&w.join("")===x.copiedText&&!ue.disableStyleCopyPaste&&(d=x.copiedTextStyle),this.insertNewStyleBlock(w,c,d)}r()}onCompositionStart(){this.inCompositionMode=!0}onCompositionEnd(){this.inCompositionMode=!1}onCompositionUpdate({target:i}){let{selectionStart:t,selectionEnd:e}=i;this.compositionStart=t,this.compositionEnd=e,this.updateTextareaPosition()}copy(){if(this.selectionStart===this.selectionEnd)return;let{copyPasteData:i}=un();i.copiedText=this.getSelectedText(),ue.disableStyleCopyPaste?i.copiedTextStyle=void 0:i.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd,!0),this._copyDone=!0}paste(){this.fromPaste=!0}_getWidthBeforeCursor(i,t){let e,n=this._getLineLeftOffset(i);return t>0&&(e=this.__charBounds[i][t-1],n+=e.left+e.width),n}getDownCursorOffset(i,t){let e=this._getSelectionForOffset(i,t),n=this.get2DCursorLocation(e),s=n.lineIndex;if(s===this._textLines.length-1||i.metaKey||i.keyCode===34)return this._text.length-e;let r=n.charIndex,o=this._getWidthBeforeCursor(s,r),a=this._getIndexOnLine(s+1,o);return this._textLines[s].slice(r).length+a+1+this.missingNewlineOffset(s)}_getSelectionForOffset(i,t){return i.shiftKey&&this.selectionStart!==this.selectionEnd&&t?this.selectionEnd:this.selectionStart}getUpCursorOffset(i,t){let e=this._getSelectionForOffset(i,t),n=this.get2DCursorLocation(e),s=n.lineIndex;if(s===0||i.metaKey||i.keyCode===33)return-e;let r=n.charIndex,o=this._getWidthBeforeCursor(s,r),a=this._getIndexOnLine(s-1,o),l=this._textLines[s].slice(0,r),c=this.missingNewlineOffset(s-1);return-this._textLines[s-1].length+a-l.length+(1-c)}_getIndexOnLine(i,t){let e=this._textLines[i],n,s,r=this._getLineLeftOffset(i),o=0;for(let a=0,l=e.length;a<l;a++)if(n=this.__charBounds[i][a].width,r+=n,r>t){s=!0;let c=r-n,h=r,u=Math.abs(c-t);o=Math.abs(h-t)<u?a:a-1;break}return s||(o=e.length-1),o}moveCursorDown(i){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorUpOrDown("Down",i)}moveCursorUp(i){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorUpOrDown("Up",i)}_moveCursorUpOrDown(i,t){let e=this[`get${i}CursorOffset`](t,this._selectionDirection===qi);if(t.shiftKey?this.moveCursorWithShift(e):this.moveCursorWithoutShift(e),e!==0){let n=this.text.length;this.selectionStart=Ds(0,this.selectionStart,n),this.selectionEnd=Ds(0,this.selectionEnd,n),this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea()}}moveCursorWithShift(i){let t=this._selectionDirection==="left"?this.selectionStart+i:this.selectionEnd+i;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,t),i!==0}moveCursorWithoutShift(i){return i<0?(this.selectionStart+=i,this.selectionEnd=this.selectionStart):(this.selectionEnd+=i,this.selectionStart=this.selectionEnd),i!==0}moveCursorLeft(i){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorLeftOrRight("Left",i)}_move(i,t,e){let n;if(i.altKey)n=this[`findWordBoundary${e}`](this[t]);else{if(!i.metaKey&&i.keyCode!==35&&i.keyCode!==36)return this[t]+=e==="Left"?-1:1,!0;n=this[`findLineBoundary${e}`](this[t])}return n!==void 0&&this[t]!==n&&(this[t]=n,!0)}_moveLeft(i,t){return this._move(i,t,"Left")}_moveRight(i,t){return this._move(i,t,"Right")}moveCursorLeftWithoutShift(i){let t=!0;return this._selectionDirection=Be,this.selectionEnd===this.selectionStart&&this.selectionStart!==0&&(t=this._moveLeft(i,"selectionStart")),this.selectionEnd=this.selectionStart,t}moveCursorLeftWithShift(i){return this._selectionDirection==="right"&&this.selectionStart!==this.selectionEnd?this._moveLeft(i,"selectionEnd"):this.selectionStart===0?void 0:(this._selectionDirection=Be,this._moveLeft(i,"selectionStart"))}moveCursorRight(i){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorLeftOrRight("Right",i)}_moveCursorLeftOrRight(i,t){let e=`moveCursor${i}${t.shiftKey?"WithShift":"WithoutShift"}`;this._currentCursorOpacity=1,this[e](t)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())}moveCursorRightWithShift(i){return this._selectionDirection==="left"&&this.selectionStart!==this.selectionEnd?this._moveRight(i,"selectionStart"):this.selectionEnd===this._text.length?void 0:(this._selectionDirection=qi,this._moveRight(i,"selectionEnd"))}moveCursorRightWithoutShift(i){let t=!0;return this._selectionDirection=qi,this.selectionStart===this.selectionEnd?(t=this._moveRight(i,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,t}},wp=i=>!!i.button,dv=class extends uv{constructor(...i){super(...i),P(this,"draggableTextDelegate",void 0)}initBehavior(){this.on("mousedown",this._mouseDownHandler),this.on("mouseup",this.mouseUpHandler),this.on("mousedblclick",this.doubleClickHandler),this.on("mousetripleclick",this.tripleClickHandler),this.draggableTextDelegate=new cv(this),super.initBehavior()}shouldStartDragging(){return this.draggableTextDelegate.isActive()}onDragStart(i){return this.draggableTextDelegate.onDragStart(i)}canDrop(i){return this.draggableTextDelegate.canDrop(i)}doubleClickHandler(i){this.isEditing&&(this.selectWord(this.getSelectionStartFromPointer(i.e)),this.renderCursorOrSelection())}tripleClickHandler(i){this.isEditing&&(this.selectLine(this.getSelectionStartFromPointer(i.e)),this.renderCursorOrSelection())}_mouseDownHandler({e:i,alreadySelected:t}){this.canvas&&this.editable&&!wp(i)&&!this.getActiveControl()&&(this.draggableTextDelegate.start(i)||(this.canvas.textEditingManager.register(this),t&&(this.inCompositionMode=!1,this.setCursorByClick(i)),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection()),this.selected||(this.selected=t||this.isEditing)))}mouseUpHandler({e:i,transform:t}){let e=this.draggableTextDelegate.end(i);if(this.canvas){this.canvas.textEditingManager.unregister(this);let n=this.canvas._activeObject;if(n&&n!==this)return}!this.editable||this.group&&!this.group.interactive||t&&t.actionPerformed||wp(i)||e||this.selected&&!this.getActiveControl()&&(this.enterEditing(i),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection())}setCursorByClick(i){let t=this.getSelectionStartFromPointer(i),e=this.selectionStart,n=this.selectionEnd;i.shiftKey?this.setSelectionStartEndWithShift(e,n,t):(this.selectionStart=t,this.selectionEnd=t),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())}getSelectionStartFromPointer(i){let t=this.canvas.getScenePoint(i).transform(Si(this.calcTransformMatrix())).add(new Q(-this._getLeftOffset(),-this._getTopOffset())),e=0,n=0,s=0;for(let l=0;l<this._textLines.length&&e<=t.y;l++)e+=this.getHeightOfLine(l),s=l,l>0&&(n+=this._textLines[l-1].length+this.missingNewlineOffset(l-1));let r=Math.abs(this._getLineLeftOffset(s)),o=this._textLines[s].length,a=this.__charBounds[s];for(let l=0;l<o;l++){let c=r+a[l].kernedWidth;if(t.x<=c){Math.abs(t.x-c)<=Math.abs(t.x-r)&&n++;break}r=c,n++}return Math.min(this.flipX?o-n:n,this._text.length)}},il="moveCursorUp",nl="moveCursorDown",sl="moveCursorLeft",rl="moveCursorRight",ol="exitEditing",Tp=(i,t)=>{let e=t.getRetinaScaling();i.setTransform(e,0,0,e,0,0);let n=t.viewportTransform;i.transform(n[0],n[1],n[2],n[3],n[4],n[5])},fv={selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"",cursorDelay:1e3,cursorDuration:600,caching:!0,hiddenTextareaContainer:null,keysMap:{9:ol,27:ol,33:il,34:nl,35:rl,36:sl,37:sl,38:il,39:rl,40:nl},keysMapRtl:{9:ol,27:ol,33:il,34:nl,35:sl,36:rl,37:rl,38:il,39:sl,40:nl},ctrlKeysMapDown:{65:"cmdAll"},ctrlKeysMapUp:{67:"copy",88:"cut"},_selectionDirection:null,_reSpace:/\s|\r?\n/,inCompositionMode:!1},Qn=class Cu extends dv{static getDefaults(){return{...super.getDefaults(),...Cu.ownDefaults}}get type(){let t=super.type;return t==="itext"?"i-text":t}constructor(t,e){super(t,{...Cu.ownDefaults,...e}),this.initBehavior()}_set(t,e){return this.isEditing&&this._savedProps&&t in this._savedProps?(this._savedProps[t]=e,this):(t==="canvas"&&(this.canvas instanceof bl&&this.canvas.textEditingManager.remove(this),e instanceof bl&&e.textEditingManager.add(this)),super._set(t,e))}setSelectionStart(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)}setSelectionEnd(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)}_updateAndFire(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()}_fireSelectionChanged(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})}initDimensions(){this.isEditing&&this.initDelayedCursor(),super.initDimensions()}getSelectionStyles(t=this.selectionStart||0,e=this.selectionEnd,n){return super.getSelectionStyles(t,e,n)}setSelectionStyles(t,e=this.selectionStart||0,n=this.selectionEnd){return super.setSelectionStyles(t,e,n)}get2DCursorLocation(t=this.selectionStart,e){return super.get2DCursorLocation(t,e)}render(t){super.render(t),this.cursorOffsetCache={},this.renderCursorOrSelection()}toCanvasElement(t){let e=this.isEditing;this.isEditing=!1;let n=super.toCanvasElement(t);return this.isEditing=e,n}renderCursorOrSelection(){if(!this.isEditing||!this.canvas)return;let t=this.clearContextTop(!0);if(!t)return;let e=this._getCursorBoundaries(),n=this.findAncestorsWithClipPath(),s=n.length>0,r,o=t;if(s){r=bi(t.canvas),o=r.getContext("2d"),Tp(o,this.canvas);let a=this.calcTransformMatrix();o.transform(a[0],a[1],a[2],a[3],a[4],a[5])}if(this.selectionStart!==this.selectionEnd||this.inCompositionMode?this.renderSelection(o,e):this.renderCursor(o,e),s)for(let a of n){let l=a.clipPath,c=bi(t.canvas),h=c.getContext("2d");if(Tp(h,this.canvas),!l.absolutePositioned){let u=a.calcTransformMatrix();h.transform(u[0],u[1],u[2],u[3],u[4],u[5])}l.transform(h),l.drawObject(h,!0,{}),this.drawClipPathOnCache(o,l,c)}s&&(t.setTransform(1,0,0,1,0,0),t.drawImage(r,0,0)),this.canvas.contextTopDirty=!0,t.restore()}findAncestorsWithClipPath(){let t=[],e=this;for(;e;)e.clipPath&&t.push(e),e=e.parent;return t}_getCursorBoundaries(t=this.selectionStart,e){let n=this._getLeftOffset(),s=this._getTopOffset(),r=this._getCursorBoundariesOffsets(t,e);return{left:n,top:s,leftOffset:r.left,topOffset:r.top}}_getCursorBoundariesOffsets(t,e){return e?this.__getCursorBoundariesOffsets(t):this.cursorOffsetCache&&"top"in this.cursorOffsetCache?this.cursorOffsetCache:this.cursorOffsetCache=this.__getCursorBoundariesOffsets(t)}__getCursorBoundariesOffsets(t){let e=0,n=0,{charIndex:s,lineIndex:r}=this.get2DCursorLocation(t),{textAlign:o,direction:a}=this;for(let u=0;u<r;u++)e+=this.getHeightOfLine(u);let l=this._getLineLeftOffset(r),c=this.__charBounds[r][s];c&&(n=c.left),this.charSpacing!==0&&s===this._textLines[r].length&&(n-=this._getWidthOfCharSpacing());let h=l+(n>0?n:0);return a==="rtl"&&(o==="right"||o==="justify"||o==="justify-right"?h*=-1:o==="left"||o==="justify-left"?h=l-(n>0?n:0):o!=="center"&&o!=="justify-center"||(h=l-(n>0?n:0))),{top:e,left:h}}renderCursorAt(t){this._renderCursor(this.canvas.contextTop,this._getCursorBoundaries(t,!0),t)}renderCursor(t,e){this._renderCursor(t,e,this.selectionStart)}getCursorRenderingData(t=this.selectionStart,e=this._getCursorBoundaries(t)){let n=this.get2DCursorLocation(t),s=n.lineIndex,r=n.charIndex>0?n.charIndex-1:0,o=this.getValueOfPropertyAt(s,r,"fontSize"),a=this.getObjectScaling().x*this.canvas.getZoom(),l=this.cursorWidth/a,c=this.getValueOfPropertyAt(s,r,"deltaY"),h=e.topOffset+(1-this._fontSizeFraction)*this.getHeightOfLine(s)/this.lineHeight-o*(1-this._fontSizeFraction);return{color:this.cursorColor||this.getValueOfPropertyAt(s,r,"fill"),opacity:this._currentCursorOpacity,left:e.left+e.leftOffset-l/2,top:h+e.top+c,width:l,height:o}}_renderCursor(t,e,n){let{color:s,opacity:r,left:o,top:a,width:l,height:c}=this.getCursorRenderingData(n,e);t.fillStyle=s,t.globalAlpha=r,t.fillRect(o,a,l,c)}renderSelection(t,e){let n={selectionStart:this.inCompositionMode?this.hiddenTextarea.selectionStart:this.selectionStart,selectionEnd:this.inCompositionMode?this.hiddenTextarea.selectionEnd:this.selectionEnd};this._renderSelection(t,n,e)}renderDragSourceEffect(){let t=this.draggableTextDelegate.getDragStartSelection();this._renderSelection(this.canvas.contextTop,t,this._getCursorBoundaries(t.selectionStart,!0))}renderDropTargetEffect(t){let e=this.getSelectionStartFromPointer(t);this.renderCursorAt(e)}_renderSelection(t,e,n){let{textAlign:s,direction:r}=this,o=e.selectionStart,a=e.selectionEnd,l=s.includes(Qu),c=this.get2DCursorLocation(o),h=this.get2DCursorLocation(a),u=c.lineIndex,d=h.lineIndex,f=c.charIndex<0?0:c.charIndex,p=h.charIndex<0?0:h.charIndex;for(let _=u;_<=d;_++){let g=this._getLineLeftOffset(_)||0,m=this.getHeightOfLine(_),S=0,w=0;if(_===u&&(S=this.__charBounds[u][f].left),_>=u&&_<d)w=l&&!this.isEndOfWrapping(_)?this.width:this.getLineWidth(_)||5;else if(_===d)if(p===0)w=this.__charBounds[d][p].left;else{let E=this._getWidthOfCharSpacing();w=this.__charBounds[d][p-1].left+this.__charBounds[d][p-1].width-E}let x=m;(this.lineHeight<1||_===d&&this.lineHeight>1)&&(m/=this.lineHeight);let M=n.left+g+S,T=m,A=0,v=w-S;this.inCompositionMode?(t.fillStyle=this.compositionColor||"black",T=1,A=m):t.fillStyle=this.selectionColor,r==="rtl"&&(s==="right"||s==="justify"||s==="justify-right"?M=this.width-M-v:s==="left"||s==="justify-left"?M=n.left+g-w:s!=="center"&&s!=="justify-center"||(M=n.left+g-w)),t.fillRect(M,n.top+n.topOffset+A,v,T),n.topOffset+=x}}getCurrentCharFontSize(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fontSize")}getCurrentCharColor(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,hi)}_getCurrentCharIndex(){let t=this.get2DCursorLocation(this.selectionStart,!0),e=t.charIndex>0?t.charIndex-1:0;return{l:t.lineIndex,c:e}}dispose(){this.exitEditingImpl(),this.draggableTextDelegate.dispose(),super.dispose()}};P(Qn,"ownDefaults",fv),P(Qn,"type","IText"),Rt.setClass(Qn),Rt.setClass(Qn,"i-text");var al=class Au extends Qn{static getDefaults(){return{...super.getDefaults(),...Au.ownDefaults}}constructor(t,e){super(t,{...Au.ownDefaults,...e})}static createControls(){return{controls:Dg()}}initDimensions(){this.initialized&&(this.isEditing&&this.initDelayedCursor(),this._clearCache(),this.dynamicMinWidth=0,this._styleMap=this._generateStyleMap(this._splitText()),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),this.textAlign.includes("justify")&&this.enlargeSpaces(),this.height=this.calcTextHeight())}_generateStyleMap(t){let e=0,n=0,s=0,r={};for(let o=0;o<t.graphemeLines.length;o++)t.graphemeText[s]===`
`&&o>0?(n=0,s++,e++):!this.splitByGrapheme&&this._reSpaceAndTab.test(t.graphemeText[s])&&o>0&&(n++,s++),r[o]={line:e,offset:n},s+=t.graphemeLines[o].length,n+=t.graphemeLines[o].length;return r}styleHas(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[e];n&&(e=n.line)}return super.styleHas(t,e)}isEmptyStyles(t){if(!this.styles)return!0;let e,n,s=0,r=!1,o=this._styleMap[t],a=this._styleMap[t+1];o&&(t=o.line,s=o.offset),a&&(e=a.line,r=e===t,n=a.offset);let l=t===void 0?this.styles:{line:this.styles[t]};for(let c in l)for(let h in l[c]){let u=parseInt(h,10);if(u>=s&&(!r||u<n))for(let d in l[c][h])return!1}return!0}_getStyleDeclaration(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[t];if(!n)return{};t=n.line,e=n.offset+e}return super._getStyleDeclaration(t,e)}_setStyleDeclaration(t,e,n){let s=this._styleMap[t];super._setStyleDeclaration(s.line,s.offset+e,n)}_deleteStyleDeclaration(t,e){let n=this._styleMap[t];super._deleteStyleDeclaration(n.line,n.offset+e)}_getLineStyle(t){let e=this._styleMap[t];return!!this.styles[e.line]}_setLineStyle(t){let e=this._styleMap[t];super._setLineStyle(e.line)}_wrapText(t,e){this.isWrapping=!0;let n=this.getGraphemeDataForRender(t),s=[];for(let r=0;r<n.wordsData.length;r++)s.push(...this._wrapLine(r,e,n));return this.isWrapping=!1,s}getGraphemeDataForRender(t){let e=this.splitByGrapheme,n=e?"":" ",s=0;return{wordsData:t.map((r,o)=>{let a=0,l=e?this.graphemeSplit(r):this.wordSplit(r);return l.length===0?[{word:[],width:0}]:l.map(c=>{let h=e?[c]:this.graphemeSplit(c),u=this._measureWord(h,o,a);return s=Math.max(u,s),a+=h.length+n.length,{word:h,width:u}})}),largestWordWidth:s}}_measureWord(t,e,n=0){let s,r=0;for(let o=0,a=t.length;o<a;o++)r+=this._getGraphemeBox(t[o],e,o+n,s,!0).kernedWidth,s=t[o];return r}wordSplit(t){return t.split(this._wordJoiners)}_wrapLine(t,e,{largestWordWidth:n,wordsData:s},r=0){let o=this._getWidthOfCharSpacing(),a=this.splitByGrapheme,l=[],c=a?"":" ",h=0,u=[],d=0,f=0,p=!0;e-=r;let _=Math.max(e,n,this.dynamicMinWidth),g=s[t],m;for(m=0;m<g.length;m++){let{word:S,width:w}=g[m];d+=S.length,h+=f+w-o,h>_&&!p?(l.push(u),u=[],h=w,p=!0):h+=o,p||a||u.push(c),u=u.concat(S),f=a?0:this._measureWord([c],t,d),d++,p=!1}return m&&l.push(u),n+r>this.dynamicMinWidth&&(this.dynamicMinWidth=n-o+r),l}isEndOfWrapping(t){return!this._styleMap[t+1]||this._styleMap[t+1].line!==this._styleMap[t].line}missingNewlineOffset(t,e){return this.splitByGrapheme&&!e?+!!this.isEndOfWrapping(t):1}_splitTextIntoLines(t){let e=super._splitTextIntoLines(t),n=this._wrapText(e.lines,this.width),s=Array(n.length);for(let r=0;r<n.length;r++)s[r]=n[r].join("");return e.lines=s,e.graphemeLines=n,e}getMinWidth(){return Math.max(this.minWidth,this.dynamicMinWidth)}_removeExtraneousStyles(){let t=new Map;for(let e in this._styleMap){let n=parseInt(e,10);if(this._textLines[n]){let s=this._styleMap[e].line;t.set(`${s}`,!0)}}for(let e in this.styles)t.has(e)||delete this.styles[e]}toObject(t=[]){return super.toObject(["minWidth","splitByGrapheme",...t])}};P(al,"type","Textbox"),P(al,"textLayoutProperties",[...Qn.textLayoutProperties,"width"]),P(al,"ownDefaults",{minWidth:20,dynamicMinWidth:2,lockScalingFlip:!0,noScaleCache:!1,_wordJoiners:/[ \t\r]/,splitByGrapheme:!1}),Rt.setClass(al);var Ep=class extends Fl{shouldPerformLayout(i){return!!i.target.clipPath&&super.shouldPerformLayout(i)}shouldLayoutClipPath(){return!1}calcLayoutResult(i,t){let{target:e}=i,{clipPath:n,group:s}=e;if(!n||!this.shouldPerformLayout(i))return;let{width:r,height:o}=hn(zg(e,n)),a=new Q(r,o);if(n.absolutePositioned)return{center:En(n.getRelativeCenterPoint(),void 0,s?s.calcTransformMatrix():void 0),size:a};{let l=n.getRelativeCenterPoint().transform(e.calcOwnMatrix(),!0);if(this.shouldPerformLayout(i)){let{center:c=new Q,correction:h=new Q}=this.calcBoundingBox(t,i)||{};return{center:c.add(l),correction:h.subtract(l),size:a}}return{center:e.getRelativeCenterPoint().add(l),size:a}}}};P(Ep,"type","clip-path"),Rt.setClass(Ep);var Cp=class extends Fl{getInitialSize({target:i},{size:t}){return new Q(i.width||t.x,i.height||t.y)}};P(Cp,"type","fixed"),Rt.setClass(Cp);var pv=class extends Uo{subscribeTargets(i){let t=i.target;i.targets.reduce((e,n)=>(n.parent&&e.add(n.parent),e),new Set).forEach(e=>{e.layoutManager.subscribeTargets({target:e,targets:[t]})})}unsubscribeTargets(i){let t=i.target,e=t.getObjects();i.targets.reduce((n,s)=>(s.parent&&n.add(s.parent),n),new Set).forEach(n=>{!e.some(s=>s.parent===n)&&n.layoutManager.unsubscribeTargets({target:n,targets:[t]})})}},ll=class Ru extends or{static getDefaults(){return{...super.getDefaults(),...Ru.ownDefaults}}constructor(t=[],e={}){super(),Object.assign(this,Ru.ownDefaults),this.setOptions(e);let{left:n,top:s,layoutManager:r}=e;this.groupInit(t,{left:n,top:s,layoutManager:r??new pv})}_shouldSetNestedCoords(){return!0}__objectSelectionMonitor(){}multiSelectAdd(...t){this.multiSelectionStacking==="selection-order"?this.add(...t):t.forEach(e=>{let n=this._objects.findIndex(r=>r.isInFrontOf(e)),s=n===-1?this.size():n;this.insertAt(s,e)})}canEnterGroup(t){return this.getObjects().some(e=>e.isDescendantOf(t)||t.isDescendantOf(e))?(Kn("error","ActiveSelection: circular object trees are not supported, this call has no effect"),!1):super.canEnterGroup(t)}enterGroup(t,e){t.parent&&t.parent===t.group?t.parent._exitGroup(t):t.group&&t.parent!==t.group&&t.group.remove(t),this._enterGroup(t,e)}exitGroup(t,e){this._exitGroup(t,e),t.parent&&t.parent._enterGroup(t,!0)}_onAfterObjectsChange(t,e){super._onAfterObjectsChange(t,e);let n=new Set;e.forEach(s=>{let{parent:r}=s;r&&n.add(r)}),t==="removed"?n.forEach(s=>{s._onAfterObjectsChange(gu,e)}):n.forEach(s=>{s._set("dirty",!0)})}onDeselect(){return this.removeAll(),!1}toString(){return`#<ActiveSelection: (${this.complexity()})>`}shouldCache(){return!1}isOnACache(){return!1}_renderControls(t,e,n){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1;let s={hasControls:!1,...n,forActiveSelection:!0};for(let r=0;r<this._objects.length;r++)this._objects[r]._renderControls(t,s);super._renderControls(t,e),t.restore()}};P(ll,"type","ActiveSelection"),P(ll,"ownDefaults",{multiSelectionStacking:"canvas-stacking"}),Rt.setClass(ll),Rt.setClass(ll,"activeSelection");var gv=class{constructor(){P(this,"resources",{})}applyFilters(i,t,e,n,s){let r=s.getContext("2d",{willReadFrequently:!0,desynchronized:!0});if(!r)return;r.drawImage(t,0,0,e,n);let o={sourceWidth:e,sourceHeight:n,imageData:r.getImageData(0,0,e,n),originalEl:t,originalImageData:r.getImageData(0,0,e,n),canvasEl:s,ctx:r,filterBackend:this};i.forEach(l=>{l.applyTo(o)});let{imageData:a}=o;return a.width===e&&a.height===n||(s.width=a.width,s.height=a.height),r.putImageData(a,0,0),o}},ym=class{constructor({tileSize:i=ue.textureSize}={}){P(this,"aPosition",new Float32Array([0,0,0,1,1,0,1,1])),P(this,"resources",{}),this.tileSize=i,this.setupGLContext(i,i),this.captureGPUInfo()}setupGLContext(i,t){this.dispose(),this.createWebGLCanvas(i,t)}createWebGLCanvas(i,t){let e=bi({width:i,height:t}),n=e.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1});n&&(n.clearColor(0,0,0,0),this.canvas=e,this.gl=n)}applyFilters(i,t,e,n,s,r){let o=this.gl,a=s.getContext("2d");if(!o||!a)return;let l;r&&(l=this.getCachedTexture(r,t));let c={originalWidth:t.width||t.naturalWidth||0,originalHeight:t.height||t.naturalHeight||0,sourceWidth:e,sourceHeight:n,destinationWidth:e,destinationHeight:n,context:o,sourceTexture:this.createTexture(o,e,n,l?void 0:t),targetTexture:this.createTexture(o,e,n),originalTexture:l||this.createTexture(o,e,n,l?void 0:t),passes:i.length,webgl:!0,aPosition:this.aPosition,programCache:this.programCache,pass:0,filterBackend:this,targetCanvas:s},h=o.createFramebuffer();return o.bindFramebuffer(o.FRAMEBUFFER,h),i.forEach(u=>{u&&u.applyTo(c)}),(function(u){let d=u.targetCanvas,f=d.width,p=d.height,_=u.destinationWidth,g=u.destinationHeight;f===_&&p===g||(d.width=_,d.height=g)})(c),this.copyGLTo2D(o,c),o.bindTexture(o.TEXTURE_2D,null),o.deleteTexture(c.sourceTexture),o.deleteTexture(c.targetTexture),o.deleteFramebuffer(h),a.setTransform(1,0,0,1,0,0),c}dispose(){this.canvas&&(this.canvas=null,this.gl=null),this.clearWebGLCaches()}clearWebGLCaches(){this.programCache={},this.textureCache={}}createTexture(i,t,e,n,s){let{NEAREST:r,TEXTURE_2D:o,RGBA:a,UNSIGNED_BYTE:l,CLAMP_TO_EDGE:c,TEXTURE_MAG_FILTER:h,TEXTURE_MIN_FILTER:u,TEXTURE_WRAP_S:d,TEXTURE_WRAP_T:f}=i,p=i.createTexture();return i.bindTexture(o,p),i.texParameteri(o,h,s||r),i.texParameteri(o,u,s||r),i.texParameteri(o,d,c),i.texParameteri(o,f,c),n?i.texImage2D(o,0,a,a,l,n):i.texImage2D(o,0,a,t,e,0,a,l,null),p}getCachedTexture(i,t,e){let{textureCache:n}=this;if(n[i])return n[i];{let s=this.createTexture(this.gl,t.width,t.height,t,e);return s&&(n[i]=s),s}}evictCachesForKey(i){this.textureCache[i]&&(this.gl.deleteTexture(this.textureCache[i]),delete this.textureCache[i])}copyGLTo2D(i,t){let e=i.canvas,n=t.targetCanvas,s=n.getContext("2d");if(!s)return;s.translate(0,n.height),s.scale(1,-1);let r=e.height-n.height;s.drawImage(e,0,r,n.width,n.height,0,0,n.width,n.height)}copyGLTo2DPutImageData(i,t){let e=t.targetCanvas.getContext("2d"),n=t.destinationWidth,s=t.destinationHeight,r=n*s*4;if(!e)return;let o=new Uint8Array(this.imageBuffer,0,r),a=new Uint8ClampedArray(this.imageBuffer,0,r);i.readPixels(0,0,n,s,i.RGBA,i.UNSIGNED_BYTE,o);let l=new ImageData(a,n,s);e.putImageData(l,0,0)}captureGPUInfo(){if(this.gpuInfo)return this.gpuInfo;let i=this.gl,t={renderer:"",vendor:""};if(!i)return t;let e=i.getExtension("WEBGL_debug_renderer_info");if(e){let n=i.getParameter(e.UNMASKED_RENDERER_WEBGL),s=i.getParameter(e.UNMASKED_VENDOR_WEBGL);n&&(t.renderer=n.toLowerCase()),s&&(t.vendor=s.toLowerCase())}return this.gpuInfo=t,t}},su;function mv(){let{WebGLProbe:i}=un();return i.queryWebGL(dn()),ue.enableGLFiltering&&i.isSupported(ue.textureSize)?new ym({tileSize:ue.textureSize}):new gv}function ru(i=!0){return!su&&i&&(su=mv()),su}var xm=["cropX","cropY"],si=class Du extends $e{static getDefaults(){return{...super.getDefaults(),...Du.ownDefaults}}constructor(t,e){super(),P(this,"_lastScaleX",1),P(this,"_lastScaleY",1),P(this,"_filterScalingX",1),P(this,"_filterScalingY",1),this.filters=[],Object.assign(this,Du.ownDefaults),this.setOptions(e),this.cacheKey=`texture${Zn()}`,this.setElement(typeof t=="string"?(this.canvas&&Vi(this.canvas.getElement())||fr()).getElementById(t):t,e)}getElement(){return this._element}setElement(t,e={}){this.removeTexture(this.cacheKey),this.removeTexture(`${this.cacheKey}_filtered`),this._element=t,this._originalElement=t,this._setWidthHeight(e),this.filters.length!==0&&this.applyFilters(),this.resizeFilter&&this.applyResizeFilters()}removeTexture(t){let e=ru(!1);e instanceof ym&&e.evictCachesForKey(t)}dispose(){super.dispose(),this.removeTexture(this.cacheKey),this.removeTexture(`${this.cacheKey}_filtered`),this._cacheContext=null,["_originalElement","_element","_filteredEl","_cacheCanvas"].forEach(t=>{let e=this[t];e&&un().dispose(e),this[t]=void 0})}getCrossOrigin(){return this._originalElement&&(this._originalElement.crossOrigin||null)}getOriginalSize(){let t=this.getElement();return t?{width:t.naturalWidth||t.width,height:t.naturalHeight||t.height}:{width:0,height:0}}_stroke(t){if(!this.stroke||this.strokeWidth===0)return;let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,-n),t.lineTo(e,-n),t.lineTo(e,n),t.lineTo(-e,n),t.lineTo(-e,-n),t.closePath()}toObject(t=[]){let e=[];return this.filters.forEach(n=>{n&&e.push(n.toObject())}),{...super.toObject([...xm,...t]),src:this.getSrc(),crossOrigin:this.getCrossOrigin(),filters:e,...this.resizeFilter?{resizeFilter:this.resizeFilter.toObject()}:{}}}hasCrop(){return!!this.cropX||!!this.cropY||this.width<this._element.width||this.height<this._element.height}_toSVG(){let t=[],e=this._element,n=-this.width/2,s=-this.height/2,r=[],o=[],a="",l="";if(!e)return[];if(this.hasCrop()){let c=Zn();r.push('<clipPath id="imageCrop_'+c+`">
`,'	<rect x="'+n+'" y="'+s+'" width="'+te(this.width)+'" height="'+te(this.height)+`" />
`,`</clipPath>
`),a=' clip-path="url(#imageCrop_'+c+')" '}if(this.imageSmoothing||(l=' image-rendering="optimizeSpeed"'),t.push("	<image ","COMMON_PARTS",`xlink:href="${te(this.getSrc(!0))}" x="${n-this.cropX}" y="${s-this.cropY}" width="${e.width||e.naturalWidth}" height="${e.height||e.naturalHeight}"${l}${a}></image>
`),this.stroke||this.strokeDashArray){let c=this.fill;this.fill=null,o=[`	<rect x="${n}" y="${s}" width="${te(this.width)}" height="${te(this.height)}" style="${this.getSvgStyles()}" />
`],this.fill=c}return r=this.paintFirst==="fill"?r.concat(t,o):r.concat(o,t),r}getSrc(t){let e=t?this._element:this._originalElement;return e?e.toDataURL?e.toDataURL():this.srcFromAttribute?e.getAttribute("src")||"":e.src:this.src||""}getSvgSrc(t){return this.getSrc(t)}setSrc(t,{crossOrigin:e,signal:n}={}){return Lo(t,{crossOrigin:e,signal:n}).then(s=>{e!==void 0&&this.set({crossOrigin:e}),this.setElement(s)})}toString(){return`#<Image: { src: "${this.getSrc()}" }>`}applyResizeFilters(){let t=this.resizeFilter,e=this.minimumScaleTrigger,n=this.getTotalObjectScaling(),s=n.x,r=n.y,o=this._filteredEl||this._originalElement;if(this.group&&this.set("dirty",!0),!t||s>e&&r>e)return this._element=o,this._filterScalingX=1,this._filterScalingY=1,this._lastScaleX=s,void(this._lastScaleY=r);let a=bi(o),{width:l,height:c}=o;this._element=a,this._lastScaleX=t.scaleX=s,this._lastScaleY=t.scaleY=r,ru().applyFilters([t],o,l,c,this._element),this._filterScalingX=a.width/this._originalElement.width,this._filterScalingY=a.height/this._originalElement.height}applyFilters(t=this.filters||[]){if(t=t.filter(r=>r&&!r.isNeutralState()),this.set("dirty",!0),this.removeTexture(`${this.cacheKey}_filtered`),t.length===0)return this._element=this._originalElement,this._filteredEl=void 0,this._filterScalingX=1,void(this._filterScalingY=1);let e=this._originalElement,n=e.naturalWidth||e.width,s=e.naturalHeight||e.height;if(this._element===this._originalElement){let r=bi({width:n,height:s});this._element=r,this._filteredEl=r}else this._filteredEl&&(this._element=this._filteredEl,this._filteredEl.getContext("2d").clearRect(0,0,n,s),this._lastScaleX=1,this._lastScaleY=1);ru().applyFilters(t,this._originalElement,n,s,this._element,this.cacheKey),this._originalElement.width===this._element.width&&this._originalElement.height===this._element.height||(this._filterScalingX=this._element.width/this._originalElement.width,this._filterScalingY=this._element.height/this._originalElement.height)}_render(t){t.imageSmoothingEnabled=this.imageSmoothing,this.isMoving!==!0&&this.resizeFilter&&this._needsResize()&&this.applyResizeFilters(),this._stroke(t),this._renderPaintInOrder(t)}drawCacheOnCanvas(t){t.imageSmoothingEnabled=this.imageSmoothing,super.drawCacheOnCanvas(t)}shouldCache(){return this.needsItsOwnCache()}_renderFill(t){let e=this._element;if(!e)return;let n=this._filterScalingX,s=this._filterScalingY,r=this.width,o=this.height,a=Math.max(this.cropX,0),l=Math.max(this.cropY,0),c=e.naturalWidth||e.width,h=e.naturalHeight||e.height,u=a*n,d=l*s,f=Math.min(r*n,c-u),p=Math.min(o*s,h-d),_=-r/2,g=-o/2,m=Math.min(r,c/n-a),S=Math.min(o,h/s-l);e&&t.drawImage(e,u,d,f,p,_,g,m,S)}_needsResize(){let t=this.getTotalObjectScaling();return t.x!==this._lastScaleX||t.y!==this._lastScaleY}_resetWidthHeight(){this.set(this.getOriginalSize())}_setWidthHeight({width:t,height:e}={}){let n=this.getOriginalSize();this.width=t||n.width,this.height=e||n.height}parsePreserveAspectRatioAttribute(){let t=sg(this.preserveAspectRatio||""),e=this.width,n=this.height,s={width:e,height:n},r,o=this._element.width,a=this._element.height,l=1,c=1,h=0,u=0,d=0,f=0;return!t||t.alignX==="none"&&t.alignY==="none"?(l=e/o,c=n/a):(t.meetOrSlice==="meet"&&(l=c=Gg(this._element,s),r=(e-o*l)/2,t.alignX==="Min"&&(h=-r),t.alignX==="Max"&&(h=r),r=(n-a*c)/2,t.alignY==="Min"&&(u=-r),t.alignY==="Max"&&(u=r)),t.meetOrSlice==="slice"&&(l=c=Vg(this._element,s),r=o-e/l,t.alignX==="Mid"&&(d=r/2),t.alignX==="Max"&&(d=r),r=a-n/c,t.alignY==="Mid"&&(f=r/2),t.alignY==="Max"&&(f=r),o=e/l,a=n/c)),{width:o,height:a,scaleX:l,scaleY:c,offsetLeft:h,offsetTop:u,cropX:d,cropY:f}}static fromObject({filters:t,resizeFilter:e,src:n,crossOrigin:s,type:r,...o},a){return Promise.all([Lo(n,{...a,crossOrigin:s}),t&&cr(t,a),e?cr([e],a):[],Go(o,a)]).then(([l,c=[],[h],u={}])=>new this(l,{...o,src:n,filters:c,resizeFilter:h,...u}))}static fromURL(t,{crossOrigin:e=null,signal:n}={},s){return Lo(t,{crossOrigin:e,signal:n}).then(r=>new this(r,s))}static async fromElement(t,e={},n){let s=Rn(t,this.ATTRIBUTE_NAMES,n);return this.fromURL(s["xlink:href"]||s.href,e,s).catch(r=>(Kn("log","Unable to parse Image",r),null))}};P(si,"type","Image"),P(si,"cacheProperties",[...Cn,...xm]),P(si,"ownDefaults",{strokeWidth:0,srcFromAttribute:!1,minimumScaleTrigger:.5,cropX:0,cropY:0,imageSmoothing:!0}),P(si,"ATTRIBUTE_NAMES",[...ns,"x","y","width","height","preserveAspectRatio","xlink:href","href","crossOrigin","image-rendering"]),Rt.setClass(si),Rt.setSVGClass(si);var FE=Ol(["pattern","defs","symbol","metadata","clipPath","mask","desc"]);var Bl=i=>i.webgl!==void 0;var ad="precision highp float",_v=`
    ${ad};
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`,yv=new RegExp(ad,"g"),Re=class{get type(){return this.constructor.type}constructor({type:i,...t}={}){Object.assign(this,this.constructor.defaults,t)}getFragmentSource(){return _v}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`}createProgram(i,t=this.getFragmentSource(),e=this.getVertexSource()){let{WebGLProbe:{GLPrecision:n="highp"}}=un();n!=="highp"&&(t=t.replace(yv,ad.replace("highp",n)));let s=i.createShader(i.VERTEX_SHADER),r=i.createShader(i.FRAGMENT_SHADER),o=i.createProgram();if(!s||!r||!o)throw new cn("Vertex, fragment shader or program creation error");if(i.shaderSource(s,e),i.compileShader(s),!i.getShaderParameter(s,i.COMPILE_STATUS))throw new cn(`Vertex shader compile error for ${this.type}: ${i.getShaderInfoLog(s)}`);if(i.shaderSource(r,t),i.compileShader(r),!i.getShaderParameter(r,i.COMPILE_STATUS))throw new cn(`Fragment shader compile error for ${this.type}: ${i.getShaderInfoLog(r)}`);if(i.attachShader(o,s),i.attachShader(o,r),i.linkProgram(o),!i.getProgramParameter(o,i.LINK_STATUS))throw new cn(`Shader link error for "${this.type}" ${i.getProgramInfoLog(o)}`);let a=this.getUniformLocations(i,o)||{};return a.uStepW=i.getUniformLocation(o,"uStepW"),a.uStepH=i.getUniformLocation(o,"uStepH"),{program:o,attributeLocations:this.getAttributeLocations(i,o),uniformLocations:a}}getAttributeLocations(i,t){return{aPosition:i.getAttribLocation(t,"aPosition")}}getUniformLocations(i,t){let e=this.constructor.uniformLocations,n={};for(let s=0;s<e.length;s++)n[e[s]]=i.getUniformLocation(t,e[s]);return n}sendAttributeData(i,t,e){let n=t.aPosition,s=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,s),i.enableVertexAttribArray(n),i.vertexAttribPointer(n,2,i.FLOAT,!1,0,0),i.bufferData(i.ARRAY_BUFFER,e,i.STATIC_DRAW)}_setupFrameBuffer(i){let t=i.context;if(i.passes>1){let e=i.destinationWidth,n=i.destinationHeight;i.sourceWidth===e&&i.sourceHeight===n||(t.deleteTexture(i.targetTexture),i.targetTexture=i.filterBackend.createTexture(t,e,n)),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i.targetTexture,0)}else t.bindFramebuffer(t.FRAMEBUFFER,null),t.finish()}_swapTextures(i){i.passes--,i.pass++;let t=i.targetTexture;i.targetTexture=i.sourceTexture,i.sourceTexture=t}isNeutralState(i){return!1}applyTo(i){Bl(i)?(this._setupFrameBuffer(i),this.applyToWebGL(i),this._swapTextures(i)):this.applyTo2d(i)}applyTo2d(i){}getCacheKey(){return this.type}retrieveShader(i){let t=this.getCacheKey();return i.programCache[t]||(i.programCache[t]=this.createProgram(i.context)),i.programCache[t]}applyToWebGL(i){let t=i.context,e=this.retrieveShader(i);i.pass===0&&i.originalTexture?t.bindTexture(t.TEXTURE_2D,i.originalTexture):t.bindTexture(t.TEXTURE_2D,i.sourceTexture),t.useProgram(e.program),this.sendAttributeData(t,e.attributeLocations,i.aPosition),t.uniform1f(e.uniformLocations.uStepW,1/i.sourceWidth),t.uniform1f(e.uniformLocations.uStepH,1/i.sourceHeight),this.sendUniformData(t,e.uniformLocations),t.viewport(0,0,i.destinationWidth,i.destinationHeight),t.drawArrays(t.TRIANGLE_STRIP,0,4)}bindAdditionalTexture(i,t,e){i.activeTexture(e),i.bindTexture(i.TEXTURE_2D,t),i.activeTexture(i.TEXTURE0)}unbindAdditionalTexture(i,t){i.activeTexture(t),i.bindTexture(i.TEXTURE_2D,null),i.activeTexture(i.TEXTURE0)}sendUniformData(i,t){}createHelpLayer(i){if(!i.helpLayer){let{sourceWidth:t,sourceHeight:e}=i;i.helpLayer=bi({width:t,height:e})}}toObject(){let i=Object.keys(this.constructor.defaults||{});return{type:this.type,...i.reduce((t,e)=>(t[e]=this[e],t),{})}}toJSON(){return this.toObject()}static async fromObject({type:i,...t},e){return new this(t)}};P(Re,"type","BaseFilter"),P(Re,"uniformLocations",[]);var xv={multiply:`gl_FragColor.rgb *= uColor.rgb;
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
    `},go=class extends Re{getCacheKey(){return`${this.type}_${this.mode}`}getFragmentSource(){return`
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          ${xv[this.mode]}
        }
      }
      `}applyTo2d({imageData:{data:i}}){let t=new Mi(this.color).getSource(),e=this.alpha,n=t[0]*e,s=t[1]*e,r=t[2]*e,o=1-e;for(let a=0;a<i.length;a+=4){let l=i[a],c=i[a+1],h=i[a+2],u,d,f;switch(this.mode){case"multiply":u=l*n/255,d=c*s/255,f=h*r/255;break;case"screen":u=255-(255-l)*(255-n)/255,d=255-(255-c)*(255-s)/255,f=255-(255-h)*(255-r)/255;break;case"add":u=l+n,d=c+s,f=h+r;break;case"difference":u=Math.abs(l-n),d=Math.abs(c-s),f=Math.abs(h-r);break;case"subtract":u=l-n,d=c-s,f=h-r;break;case"darken":u=Math.min(l,n),d=Math.min(c,s),f=Math.min(h,r);break;case"lighten":u=Math.max(l,n),d=Math.max(c,s),f=Math.max(h,r);break;case"overlay":u=n<128?2*l*n/255:255-2*(255-l)*(255-n)/255,d=s<128?2*c*s/255:255-2*(255-c)*(255-s)/255,f=r<128?2*h*r/255:255-2*(255-h)*(255-r)/255;break;case"exclusion":u=n+l-2*n*l/255,d=s+c-2*s*c/255,f=r+h-2*r*h/255;break;case"tint":u=n+l*o,d=s+c*o,f=r+h*o}i[a]=u,i[a+1]=d,i[a+2]=f}}sendUniformData(i,t){let e=new Mi(this.color).getSource();e[0]=this.alpha*e[0]/255,e[1]=this.alpha*e[1]/255,e[2]=this.alpha*e[2]/255,e[3]=this.alpha,i.uniform4fv(t.uColor,e)}};P(go,"defaults",{color:"#F95C63",mode:"multiply",alpha:1}),P(go,"type","BlendColor"),P(go,"uniformLocations",["uColor"]),Rt.setClass(go);var vv={multiply:`
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
    `},mo=class extends Re{getCacheKey(){return`${this.type}_${this.mode}`}getFragmentSource(){return vv[this.mode]}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `}applyToWebGL(i){let t=i.context,e=this.createTexture(i.filterBackend,this.image);this.bindAdditionalTexture(t,e,t.TEXTURE1),super.applyToWebGL(i),this.unbindAdditionalTexture(t,t.TEXTURE1)}createTexture(i,t){return i.getCachedTexture(t.cacheKey,t.getElement())}calculateMatrix(){let i=this.image,{width:t,height:e}=i.getElement();return[1/i.scaleX,0,0,0,1/i.scaleY,0,-i.left/t,-i.top/e,1]}applyTo2d({imageData:{data:i,width:t,height:e},filterBackend:{resources:n}}){let s=this.image;n.blendImage||(n.blendImage=dn());let r=n.blendImage,o=r.getContext("2d");r.width!==t||r.height!==e?(r.width=t,r.height=e):o.clearRect(0,0,t,e),o.setTransform(s.scaleX,0,0,s.scaleY,s.left,s.top),o.drawImage(s.getElement(),0,0,t,e);let a=o.getImageData(0,0,t,e).data;for(let l=0;l<i.length;l+=4){let c=i[l],h=i[l+1],u=i[l+2],d=i[l+3],f=a[l],p=a[l+1],_=a[l+2],g=a[l+3];switch(this.mode){case"multiply":i[l]=c*f/255,i[l+1]=h*p/255,i[l+2]=u*_/255,i[l+3]=d*g/255;break;case"mask":i[l+3]=g}}}sendUniformData(i,t){let e=this.calculateMatrix();i.uniform1i(t.uImage,1),i.uniformMatrix3fv(t.uTransformMatrix,!1,e)}toObject(){return{...super.toObject(),image:this.image&&this.image.toObject()}}static async fromObject({type:i,image:t,...e},n){return si.fromObject(t,n).then(s=>new this({...e,image:s}))}};P(mo,"type","BlendImage"),P(mo,"defaults",{mode:"multiply",alpha:1}),P(mo,"uniformLocations",["uTransformMatrix","uImage"]),Rt.setClass(mo);var _o=class extends Re{getFragmentSource(){return`
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
  `}applyTo(i){Bl(i)?(this.aspectRatio=i.sourceWidth/i.sourceHeight,i.passes++,this._setupFrameBuffer(i),this.horizontal=!0,this.applyToWebGL(i),this._swapTextures(i),this._setupFrameBuffer(i),this.horizontal=!1,this.applyToWebGL(i),this._swapTextures(i)):this.applyTo2d(i)}applyTo2d({imageData:{data:i,width:t,height:e}}){this.aspectRatio=t/e,this.horizontal=!0;let n=this.getBlurValue()*t,s=new Uint8ClampedArray(i),r=4*t;for(let o=0;o<i.length;o+=4){let a=0,l=0,c=0,h=0,u=0,d=o-o%r,f=d+r;for(let p=-14;p<15;p++){let _=p/15,g=4*Math.floor(n*_),m=1-Math.abs(_),S=o+g;S<d?S=d:S>f&&(S=f);let w=i[S+3]*m;a+=i[S]*w,l+=i[S+1]*w,c+=i[S+2]*w,h+=w,u+=m}s[o]=a/h,s[o+1]=l/h,s[o+2]=c/h,s[o+3]=h/u}this.horizontal=!1,n=this.getBlurValue()*e;for(let o=0;o<s.length;o+=4){let a=0,l=0,c=0,h=0,u=0,d=o%r,f=s.length-r+d;for(let p=-14;p<15;p++){let _=p/15,g=Math.floor(n*_)*r,m=1-Math.abs(_),S=o+g;S<d?S=d:S>f&&(S=f);let w=s[S+3]*m;a+=s[S]*w,l+=s[S+1]*w,c+=s[S+2]*w,h+=w,u+=m}i[o]=a/h,i[o+1]=l/h,i[o+2]=c/h,i[o+3]=h/u}}sendUniformData(i,t){let e=this.chooseRightDelta();i.uniform2fv(t.uDelta,e)}isNeutralState(){return this.blur===0}getBlurValue(){let i=1,{horizontal:t,aspectRatio:e}=this;return t?e>1&&(i=1/e):e<1&&(i=e),i*this.blur*.12}chooseRightDelta(){let i=this.getBlurValue();return this.horizontal?[i,0]:[0,i]}};P(_o,"type","Blur"),P(_o,"defaults",{blur:0}),P(_o,"uniformLocations",["uDelta"]),Rt.setClass(_o);var yo=class extends Re{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`}applyTo2d({imageData:{data:i}}){let t=Math.round(255*this.brightness);for(let e=0;e<i.length;e+=4)i[e]+=t,i[e+1]+=t,i[e+2]+=t}isNeutralState(){return this.brightness===0}sendUniformData(i,t){i.uniform1f(t.uBrightness,this.brightness)}};P(yo,"type","Brightness"),P(yo,"defaults",{brightness:0}),P(yo,"uniformLocations",["uBrightness"]),Rt.setClass(yo);var vm={matrix:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],colorsOnly:!0},As=class extends Re{getFragmentSource(){return`
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
  }`}applyTo2d(i){let t=i.imageData.data,e=this.matrix,n=this.colorsOnly;for(let s=0;s<t.length;s+=4){let r=t[s],o=t[s+1],a=t[s+2];if(t[s]=r*e[0]+o*e[1]+a*e[2]+255*e[4],t[s+1]=r*e[5]+o*e[6]+a*e[7]+255*e[9],t[s+2]=r*e[10]+o*e[11]+a*e[12]+255*e[14],!n){let l=t[s+3];t[s]+=l*e[3],t[s+1]+=l*e[8],t[s+2]+=l*e[13],t[s+3]=r*e[15]+o*e[16]+a*e[17]+l*e[18]+255*e[19]}}}sendUniformData(i,t){let e=this.matrix,n=[e[0],e[1],e[2],e[3],e[5],e[6],e[7],e[8],e[10],e[11],e[12],e[13],e[15],e[16],e[17],e[18]],s=[e[4],e[9],e[14],e[19]];i.uniformMatrix4fv(t.uColorMatrix,!1,n),i.uniform4fv(t.uConstants,s)}toObject(){return{...super.toObject(),matrix:[...this.matrix]}}};function Ls(i,t){var e;let n=(P(e=class extends As{toObject(){return{type:this.type,colorsOnly:this.colorsOnly}}},"type",i),P(e,"defaults",{colorsOnly:!1,matrix:t}),e);return Rt.setClass(n,i),n}P(As,"type","ColorMatrix"),P(As,"defaults",vm),P(As,"uniformLocations",["uColorMatrix","uConstants"]),Rt.setClass(As);var Sv=Ls("Brownie",[.5997,.34553,-.27082,0,.186,-.0377,.86095,.15059,0,-.1449,.24113,-.07441,.44972,0,-.02965,0,0,0,1,0]),bv=Ls("Vintage",[.62793,.32021,-.03965,0,.03784,.02578,.64411,.03259,0,.02926,.0466,-.08512,.52416,0,.02023,0,0,0,1,0]),Mv=Ls("Kodachrome",[1.12855,-.39673,-.03992,0,.24991,-.16404,1.08352,-.05498,0,.09698,-.16786,-.56034,1.60148,0,.13972,0,0,0,1,0]),wv=Ls("Technicolor",[1.91252,-.85453,-.09155,0,.04624,-.30878,1.76589,-.10601,0,-.27589,-.2311,-.75018,1.84759,0,.12137,0,0,0,1,0]),Tv=Ls("Polaroid",[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0]),Ev=Ls("Sepia",[.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0]),Cv=Ls("BlackWhite",[1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,0,0,0,1,0]),Iu=class extends Re{constructor(i={}){super(i),this.subFilters=i.subFilters||[]}applyTo(i){Bl(i)&&(i.passes+=this.subFilters.length-1),this.subFilters.forEach(t=>{t.applyTo(i)})}toObject(){return{type:this.type,subFilters:this.subFilters.map(i=>i.toObject())}}isNeutralState(){return!this.subFilters.some(i=>!i.isNeutralState())}static fromObject(i,t){return Promise.all((i.subFilters||[]).map(e=>Rt.getClass(e.type).fromObject(e,t))).then(e=>new this({subFilters:e}))}};P(Iu,"type","Composed"),Rt.setClass(Iu);var xo=class extends Re{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`}isNeutralState(){return this.contrast===0}applyTo2d({imageData:{data:i}}){let t=Math.floor(255*this.contrast),e=259*(t+255)/(255*(259-t));for(let n=0;n<i.length;n+=4)i[n]=e*(i[n]-128)+128,i[n+1]=e*(i[n+1]-128)+128,i[n+2]=e*(i[n+2]-128)+128}sendUniformData(i,t){i.uniform1f(t.uContrast,this.contrast)}};P(xo,"type","Contrast"),P(xo,"defaults",{contrast:0}),P(xo,"uniformLocations",["uContrast"]),Rt.setClass(xo);var Av={Convolute_3_1:`
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
    `},vo=class extends Re{getCacheKey(){return`${this.type}_${Math.sqrt(this.matrix.length)}_${+!!this.opaque}`}getFragmentSource(){return Av[this.getCacheKey()]}applyTo2d(i){let t=i.imageData,e=t.data,n=this.matrix,s=Math.round(Math.sqrt(n.length)),r=Math.floor(s/2),o=t.width,a=t.height,l=i.ctx.createImageData(o,a),c=l.data,h=+!!this.opaque,u,d,f,p,_,g,m,S,w,x,M,T,A;for(M=0;M<a;M++)for(x=0;x<o;x++){for(_=4*(M*o+x),u=0,d=0,f=0,p=0,A=0;A<s;A++)for(T=0;T<s;T++)m=M+A-r,g=x+T-r,m<0||m>=a||g<0||g>=o||(S=4*(m*o+g),w=n[A*s+T],u+=e[S]*w,d+=e[S+1]*w,f+=e[S+2]*w,h||(p+=e[S+3]*w));c[_]=u,c[_+1]=d,c[_+2]=f,c[_+3]=h?e[_+3]:p}i.imageData=l}sendUniformData(i,t){i.uniform1fv(t.uMatrix,this.matrix)}toObject(){return{...super.toObject(),opaque:this.opaque,matrix:[...this.matrix]}}};P(vo,"type","Convolute"),P(vo,"defaults",{opaque:!1,matrix:[0,0,0,0,1,0,0,0,0]}),P(vo,"uniformLocations",["uMatrix","uOpaque","uHalfSize","uSize"]),Rt.setClass(vo);var Sm="Gamma",So=class extends Re{getFragmentSource(){return`
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
`}constructor(i={}){super(i),this.gamma=i.gamma||this.constructor.defaults.gamma.concat()}applyTo2d({imageData:{data:i}}){let t=this.gamma,e=1/t[0],n=1/t[1],s=1/t[2];this.rgbValues||(this.rgbValues={r:new Uint8Array(256),g:new Uint8Array(256),b:new Uint8Array(256)});let r=this.rgbValues;for(let o=0;o<256;o++)r.r[o]=255*(o/255)**e,r.g[o]=255*(o/255)**n,r.b[o]=255*(o/255)**s;for(let o=0;o<i.length;o+=4)i[o]=r.r[i[o]],i[o+1]=r.g[i[o+1]],i[o+2]=r.b[i[o+2]]}sendUniformData(i,t){i.uniform3fv(t.uGamma,this.gamma)}isNeutralState(){let{gamma:i}=this;return i[0]===1&&i[1]===1&&i[2]===1}toObject(){return{type:Sm,gamma:this.gamma.concat()}}};P(So,"type",Sm),P(So,"defaults",{gamma:[1,1,1]}),P(So,"uniformLocations",["uGamma"]),Rt.setClass(So);var Rv={average:`
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
    `},bo=class extends Re{applyTo2d({imageData:{data:i}}){for(let t,e=0;e<i.length;e+=4){let n=i[e],s=i[e+1],r=i[e+2];switch(this.mode){case"average":t=(n+s+r)/3;break;case"lightness":t=(Math.min(n,s,r)+Math.max(n,s,r))/2;break;case"luminosity":t=.21*n+.72*s+.07*r}i[e+2]=i[e+1]=i[e]=t}}getCacheKey(){return`${this.type}_${this.mode}`}getFragmentSource(){return Rv[this.mode]}sendUniformData(i,t){i.uniform1i(t.uMode,1)}isNeutralState(){return!1}};P(bo,"type","Grayscale"),P(bo,"defaults",{mode:"average"}),P(bo,"uniformLocations",["uMode"]),Rt.setClass(bo);var Dv={...vm,rotation:0},pl=class extends As{calculateMatrix(){let i=this.rotation*Math.PI,t=Xi(i),e=$i(i),n=1/3,s=Math.sqrt(n)*e,r=1-t;this.matrix=[t+r/3,n*r-s,n*r+s,0,0,n*r+s,t+n*r,n*r-s,0,0,n*r-s,n*r+s,t+n*r,0,0,0,0,0,1,0]}isNeutralState(){return this.rotation===0}applyTo(i){this.calculateMatrix(),super.applyTo(i)}toObject(){return{type:this.type,rotation:this.rotation}}};P(pl,"type","HueRotation"),P(pl,"defaults",Dv),Rt.setClass(pl);var Mo=class extends Re{applyTo2d({imageData:{data:i}}){for(let t=0;t<i.length;t+=4)i[t]=255-i[t],i[t+1]=255-i[t+1],i[t+2]=255-i[t+2],this.alpha&&(i[t+3]=255-i[t+3])}getFragmentSource(){return`
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
`}isNeutralState(){return!this.invert}sendUniformData(i,t){i.uniform1i(t.uInvert,Number(this.invert)),i.uniform1i(t.uAlpha,Number(this.alpha))}};P(Mo,"type","Invert"),P(Mo,"defaults",{alpha:!1,invert:!0}),P(Mo,"uniformLocations",["uInvert","uAlpha"]),Rt.setClass(Mo);var wo=class extends Re{getFragmentSource(){return`
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
`}applyTo2d({imageData:{data:i}}){let t=this.noise;for(let e=0;e<i.length;e+=4){let n=(.5-Math.random())*t;i[e]+=n,i[e+1]+=n,i[e+2]+=n}}sendUniformData(i,t){i.uniform1f(t.uNoise,this.noise/255),i.uniform1f(t.uSeed,Math.random())}isNeutralState(){return this.noise===0}};P(wo,"type","Noise"),P(wo,"defaults",{noise:0}),P(wo,"uniformLocations",["uNoise","uSeed"]),Rt.setClass(wo);var To=class extends Re{applyTo2d({imageData:{data:i,width:t,height:e}}){for(let n=0;n<e;n+=this.blocksize)for(let s=0;s<t;s+=this.blocksize){let r=4*n*t+4*s,o=i[r],a=i[r+1],l=i[r+2],c=i[r+3];for(let h=n;h<Math.min(n+this.blocksize,e);h++)for(let u=s;u<Math.min(s+this.blocksize,t);u++){let d=4*h*t+4*u;i[d]=o,i[d+1]=a,i[d+2]=l,i[d+3]=c}}}isNeutralState(){return this.blocksize===1}getFragmentSource(){return`
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
`}sendUniformData(i,t){i.uniform1f(t.uBlocksize,this.blocksize)}};P(To,"type","Pixelate"),P(To,"defaults",{blocksize:4}),P(To,"uniformLocations",["uBlocksize"]),Rt.setClass(To);var Eo=class extends Re{getFragmentSource(){return`
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
`}applyTo2d({imageData:{data:i}}){let t=255*this.distance,e=new Mi(this.color).getSource(),n=[e[0]-t,e[1]-t,e[2]-t],s=[e[0]+t,e[1]+t,e[2]+t];for(let r=0;r<i.length;r+=4){let o=i[r],a=i[r+1],l=i[r+2];o>n[0]&&a>n[1]&&l>n[2]&&o<s[0]&&a<s[1]&&l<s[2]&&(i[r+3]=0)}}sendUniformData(i,t){let e=new Mi(this.color).getSource(),n=this.distance,s=[0+e[0]/255-n,0+e[1]/255-n,0+e[2]/255-n,1],r=[e[0]/255+n,e[1]/255+n,e[2]/255+n,1];i.uniform4fv(t.uLow,s),i.uniform4fv(t.uHigh,r)}};P(Eo,"type","RemoveColor"),P(Eo,"defaults",{color:"#FFFFFF",distance:.02,useAlpha:!1}),P(Eo,"uniformLocations",["uLow","uHigh"]),Rt.setClass(Eo);var Co=class extends Re{sendUniformData(i,t){i.uniform2fv(t.uDelta,this.horizontal?[1/this.width,0]:[0,1/this.height]),i.uniform1fv(t.uTaps,this.taps)}getFilterWindow(){let i=this.tempScale;return Math.ceil(this.lanczosLobes/i)}getCacheKey(){let i=this.getFilterWindow();return`${this.type}_${i}`}getFragmentSource(){let i=this.getFilterWindow();return this.generateShader(i)}getTaps(){let i=this.lanczosCreate(this.lanczosLobes),t=this.tempScale,e=this.getFilterWindow(),n=Array(e);for(let s=1;s<=e;s++)n[s-1]=i(s*t);return n}generateShader(i){let t=Array(i);for(let e=1;e<=i;e++)t[e-1]=`${e}.0 * uDelta`;return`
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
    `}applyToForWebgl(i){i.passes++,this.width=i.sourceWidth,this.horizontal=!0,this.dW=Math.round(this.width*this.scaleX),this.dH=i.sourceHeight,this.tempScale=this.dW/this.width,this.taps=this.getTaps(),i.destinationWidth=this.dW,super.applyTo(i),i.sourceWidth=i.destinationWidth,this.height=i.sourceHeight,this.horizontal=!1,this.dH=Math.round(this.height*this.scaleY),this.tempScale=this.dH/this.height,this.taps=this.getTaps(),i.destinationHeight=this.dH,super.applyTo(i),i.sourceHeight=i.destinationHeight}applyTo(i){Bl(i)?this.applyToForWebgl(i):this.applyTo2d(i)}isNeutralState(){return this.scaleX===1&&this.scaleY===1}lanczosCreate(i){return t=>{if(t>=i||t<=-i)return 0;if(t<11920929e-14&&t>-11920929e-14)return 1;let e=(t*=Math.PI)/i;return Math.sin(t)/t*Math.sin(e)/e}}applyTo2d(i){let t=i.imageData,e=this.scaleX,n=this.scaleY;this.rcpScaleX=1/e,this.rcpScaleY=1/n;let s=t.width,r=t.height,o=Math.round(s*e),a=Math.round(r*n),l;l=this.resizeType==="sliceHack"?this.sliceByTwo(i,s,r,o,a):this.resizeType==="hermite"?this.hermiteFastResize(i,s,r,o,a):this.resizeType==="bilinear"?this.bilinearFiltering(i,s,r,o,a):this.resizeType==="lanczos"?this.lanczosResize(i,s,r,o,a):new ImageData(o,a),i.imageData=l}sliceByTwo(i,t,e,n,s){let r=i.imageData,o=.5,a=!1,l=!1,c=t*o,h=e*o,u=i.filterBackend.resources,d=0,f=0,p=t,_=0;u.sliceByTwo||(u.sliceByTwo=dn());let g=u.sliceByTwo;(g.width<1.5*t||g.height<e)&&(g.width=1.5*t,g.height=e);let m=g.getContext("2d");for(m.clearRect(0,0,1.5*t,e),m.putImageData(r,0,0),n=Math.floor(n),s=Math.floor(s);!a||!l;)t=c,e=h,n<Math.floor(c*o)?c=Math.floor(c*o):(c=n,a=!0),s<Math.floor(h*o)?h=Math.floor(h*o):(h=s,l=!0),m.drawImage(g,d,f,t,e,p,_,c,h),d=p,f=_,_+=h;return m.getImageData(d,f,n,s)}lanczosResize(i,t,e,n,s){let r=i.imageData.data,o=i.ctx.createImageData(n,s),a=o.data,l=this.lanczosCreate(this.lanczosLobes),c=this.rcpScaleX,h=this.rcpScaleY,u=2/this.rcpScaleX,d=2/this.rcpScaleY,f=Math.ceil(c*this.lanczosLobes/2),p=Math.ceil(h*this.lanczosLobes/2),_={},g={x:0,y:0},m={x:0,y:0};return(function S(w){let x,M,T,A,v,E,R,D,B,k,I;for(g.x=(w+.5)*c,m.x=Math.floor(g.x),x=0;x<s;x++){for(g.y=(x+.5)*h,m.y=Math.floor(g.y),v=0,E=0,R=0,D=0,B=0,M=m.x-f;M<=m.x+f;M++)if(!(M<0||M>=t)){k=Math.floor(1e3*Math.abs(M-g.x)),_[k]||(_[k]={});for(let U=m.y-p;U<=m.y+p;U++)U<0||U>=e||(I=Math.floor(1e3*Math.abs(U-g.y)),_[k][I]||(_[k][I]=l(Math.sqrt((k*u)**2+(I*d)**2)/1e3)),T=_[k][I],T>0&&(A=4*(U*t+M),v+=T,E+=T*r[A],R+=T*r[A+1],D+=T*r[A+2],B+=T*r[A+3]))}A=4*(x*n+w),a[A]=E/v,a[A+1]=R/v,a[A+2]=D/v,a[A+3]=B/v}return++w<n?S(w):o})(0)}bilinearFiltering(i,t,e,n,s){let r,o,a,l,c,h,u,d,f,p,_,g,m,S=0,w=this.rcpScaleX,x=this.rcpScaleY,M=4*(t-1),T=i.imageData.data,A=i.ctx.createImageData(n,s),v=A.data;for(u=0;u<s;u++)for(d=0;d<n;d++)for(c=Math.floor(w*d),h=Math.floor(x*u),f=w*d-c,p=x*u-h,m=4*(h*t+c),_=0;_<4;_++)r=T[m+_],o=T[m+4+_],a=T[m+M+_],l=T[m+M+4+_],g=r*(1-f)*(1-p)+o*f*(1-p)+a*p*(1-f)+l*f*p,v[S++]=g;return A}hermiteFastResize(i,t,e,n,s){let r=this.rcpScaleX,o=this.rcpScaleY,a=Math.ceil(r/2),l=Math.ceil(o/2),c=i.imageData.data,h=i.ctx.createImageData(n,s),u=h.data;for(let d=0;d<s;d++)for(let f=0;f<n;f++){let p=4*(f+d*n),_,g=0,m=0,S=0,w=0,x=0,M=0,T=(d+.5)*o;for(let A=Math.floor(d*o);A<(d+1)*o;A++){let v=Math.abs(T-(A+.5))/l,E=(f+.5)*r,R=v*v;for(let D=Math.floor(f*r);D<(f+1)*r;D++){let B=Math.abs(E-(D+.5))/a,k=Math.sqrt(R+B*B);k>1&&k<-1||(_=2*k*k*k-3*k*k+1,_>0&&(B=4*(D+A*t),M+=_*c[B+3],m+=_,c[B+3]<255&&(_=_*c[B+3]/250),S+=_*c[B],w+=_*c[B+1],x+=_*c[B+2],g+=_))}}u[p]=S/g,u[p+1]=w/g,u[p+2]=x/g,u[p+3]=M/m}return h}};P(Co,"type","Resize"),P(Co,"defaults",{resizeType:"hermite",scaleX:1,scaleY:1,lanczosLobes:3}),P(Co,"uniformLocations",["uDelta","uTaps"]),Rt.setClass(Co);var Ao=class extends Re{getFragmentSource(){return`
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
`}applyTo2d({imageData:{data:i}}){let t=-this.saturation;for(let e=0;e<i.length;e+=4){let n=i[e],s=i[e+1],r=i[e+2],o=Math.max(n,s,r);i[e]+=o===n?0:(o-n)*t,i[e+1]+=o===s?0:(o-s)*t,i[e+2]+=o===r?0:(o-r)*t}}sendUniformData(i,t){i.uniform1f(t.uSaturation,-this.saturation)}isNeutralState(){return this.saturation===0}};P(Ao,"type","Saturation"),P(Ao,"defaults",{saturation:0}),P(Ao,"uniformLocations",["uSaturation"]),Rt.setClass(Ao);var Ro=class extends Re{getFragmentSource(){return`
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
`}applyTo2d({imageData:{data:i}}){let t=-this.vibrance;for(let e=0;e<i.length;e+=4){let n=i[e],s=i[e+1],r=i[e+2],o=Math.max(n,s,r),a=(n+s+r)/3,l=2*Math.abs(o-a)/255*t;i[e]+=o===n?0:(o-n)*l,i[e+1]+=o===s?0:(o-s)*l,i[e+2]+=o===r?0:(o-r)*l}}sendUniformData(i,t){i.uniform1f(t.uVibrance,-this.vibrance)}isNeutralState(){return this.vibrance===0}};P(Ro,"type","Vibrance"),P(Ro,"defaults",{vibrance:0}),P(Ro,"uniformLocations",["uVibrance"]),Rt.setClass(Ro);var BE=zo({BaseFilter:()=>Re,BlackWhite:()=>Cv,BlendColor:()=>go,BlendImage:()=>mo,Blur:()=>_o,Brightness:()=>yo,Brownie:()=>Sv,ColorMatrix:()=>As,Composed:()=>Iu,Contrast:()=>xo,Convolute:()=>vo,Gamma:()=>So,Grayscale:()=>bo,HueRotation:()=>pl,Invert:()=>Mo,Kodachrome:()=>Mv,Noise:()=>wo,Pixelate:()=>To,Polaroid:()=>Tv,RemoveColor:()=>Eo,Resize:()=>Co,Saturation:()=>Ao,Sepia:()=>Ev,Technicolor:()=>wv,Vibrance:()=>Ro,Vintage:()=>bv});var ps={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i_=0,Wd=1,n_=2;var La=1,s_=2,Qr=3,ms=0,qe=1,fi=2,vn=0,Kr=1,Jd=2,Xd=3,$d=4,r_=5;var qs=100,o_=101,a_=102,l_=103,c_=104,h_=200,u_=201,d_=202,f_=203,Qd=204,Kd=205,p_=206,g_=207,m_=208,__=209,y_=210,x_=211,v_=212,S_=213,b_=214,fc=0,pc=1,gc=2,Nr=3,mc=4,_c=5,yc=6,xc=7,Qc=0,M_=1,w_=2,en=0,Zd=1,jd=2,tf=3,Na=4,ef=5,nf=6,sf=7;var rf=300,_s=301,Ws=302,Kc=303,Zc=304,Pa=306,Pr=1e3,pn=1001,vc=1002,Ue=1003,T_=1004;var Fa=1005;var Ye=1006,jc=1007;var ys=1008;var pi=1009,of=1010,af=1011,Zr=1012,th=1013,nn=1014,Bi=1015,sn=1016,eh=1017,ih=1018,jr=1020,lf=35902,cf=35899,hf=1021,uf=1022,ki=1023,mn=1026,xs=1027,nh=1028,sh=1029,vs=1030,rh=1031;var oh=1033,Ba=33776,ka=33777,Ua=33778,za=33779,ah=35840,lh=35841,ch=35842,hh=35843,uh=36196,dh=37492,fh=37496,ph=37488,gh=37489,Ha=37490,mh=37491,_h=37808,yh=37809,xh=37810,vh=37811,Sh=37812,bh=37813,Mh=37814,wh=37815,Th=37816,Eh=37817,Ch=37818,Ah=37819,Rh=37820,Dh=37821,Ih=36492,Oh=36494,Lh=36495,Nh=36283,Ph=36284,Ga=36285,Fh=36286;var ea=2300,Sc=2301,uc=2302,Nd=2303,Pd=2400,Fd=2401,Bd=2402;var E_=3200;var Va=0,C_=1,Hn="",Ge="srgb",ia="srgb-linear",na="linear",he="srgb";var dc=7680;var A_=519,R_=512,D_=513,I_=514,Bh=515,O_=516,L_=517,kh=518,N_=519,P_=35044;var df="300 es",ji=2e3,Fr=2001;function Iv(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ov(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function F_(){let i=sa("canvas");return i.style.display="block",i}var bm={},Br=null;function ff(...i){let t="THREE."+i.shift();Br?Br("log",t,...i):console.log(t,...i)}function B_(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=B_(i);let t="THREE."+i.shift();if(Br)Br("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=B_(i);let t="THREE."+i.shift();if(Br)Br("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ks(...i){let t=i.join(" ");t in bm||(bm[t]=!0,Ut(...i))}function k_(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var U_={[fc]:pc,[gc]:yc,[mc]:xc,[Nr]:_c,[pc]:fc,[yc]:gc,[xc]:mc,[_c]:Nr},tn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mm=1234567,Or=Math.PI/180,kr=180/Math.PI;function Js(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function pf(i,t){return(i%t+t)%t}function Lv(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nv(i,t,e){return i!==t?(e-i)/(t-i):0}function Zo(i,t,e){return(1-e)*i+e*t}function Pv(i,t,e,n){return Zo(i,t,1-Math.exp(-e*n))}function Fv(i,t=1){return t-Math.abs(pf(i,t*2)-t)}function Bv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function kv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Uv(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zv(i,t){return i+Math.random()*(t-i)}function Hv(i){return i*(.5-Math.random())}function Gv(i){i!==void 0&&(Mm=i);let t=Mm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vv(i){return i*Or}function Yv(i){return i*kr}function qv(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Wv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xv(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ir(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var gf={DEG2RAD:Or,RAD2DEG:kr,generateUUID:Js,clamp:Kt,euclideanModulo:pf,mapLinear:Lv,inverseLerp:Nv,lerp:Zo,damp:Pv,pingpong:Fv,smoothstep:Bv,smootherstep:kv,randInt:Uv,randFloat:zv,randFloatSpread:Hv,seededRandom:Gv,degToRad:Vv,radToDeg:Yv,isPowerOfTwo:qv,ceilPowerOfTwo:Wv,floorPowerOfTwo:Jv,setQuaternionFromProperEuler:Xv,normalize:oi,denormalize:Ir},lt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ai=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(u!==_||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*_;g<0&&(d=-d,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let S=Math.acos(g),w=Math.sin(S);m=Math.sin(m*S)/w,a=Math.sin(a*S)/w,l=l*m+d*a,c=c*m+f*a,h=h*m+p*a,u=u*m+_*a}else{l=l*m+d*a,c=c*m+f*a,h=h*m+p*a,u=u*m+_*a;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ld.copy(this).projectOnVector(t),this.sub(ld)}reflect(t){return this.sub(ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ld=new N,wm=new Ai,Xt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],S=s[1],w=s[4],x=s[7],M=s[2],T=s[5],A=s[8];return r[0]=o*_+a*S+l*M,r[3]=o*g+a*w+l*T,r[6]=o*m+a*x+l*A,r[1]=c*_+h*S+u*M,r[4]=c*g+h*w+u*T,r[7]=c*m+h*x+u*A,r[2]=d*_+f*S+p*M,r[5]=d*g+f*w+p*T,r[8]=d*m+f*x+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cd.makeScale(t,e)),this}rotate(t){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cd.makeRotation(-t)),this}translate(t,e){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},cd=new Xt,Tm=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $v(){let i={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ia]:{primaries:t,whitePoint:n,transfer:na,toXYZ:Tm,fromXYZ:Em,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Tm,fromXYZ:Em,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}var se=$v();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _r,bc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_r===void 0&&(_r=sa("canvas")),_r.width=t.width,_r.height=t.height;let s=_r.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=_r}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=sa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qv=0,Ur=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hd(s[o].image)):r.push(hd(s[o]))}else r=hd(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function hd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var Kv=0,ud=new N,ai=class i extends tn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pn,s=pn,r=Ye,o=ys,a=ki,l=pi,c=i.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Js(),this.name="",this.source=new Ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pr:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pr:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=rf;ai.DEFAULT_ANISOTROPY=1;var Me=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,x=(f+1)/2,M=(m+1)/2,T=(h+d)/4,A=(u+_)/4,v=(p+g)/4;return w>x&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=A/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=v/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends tn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ai(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ur(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ra=class extends ai{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends ai{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var pe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/yr.setFromMatrixColumn(t,0).length(),r=1/yr.setFromMatrixColumn(t,1).length(),o=1/yr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zv,t,jv)}lookAt(t,e,n){let s=this.elements;return wi.subVectors(t,e),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),ss.crossVectors(n,wi),ss.lengthSq()===0&&(Math.abs(n.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),ss.crossVectors(n,wi)),ss.normalize(),kl.crossVectors(wi,ss),s[0]=ss.x,s[4]=kl.x,s[8]=wi.x,s[1]=ss.y,s[5]=kl.y,s[9]=wi.y,s[2]=ss.z,s[6]=kl.z,s[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],S=n[3],w=n[7],x=n[11],M=n[15],T=s[0],A=s[4],v=s[8],E=s[12],R=s[1],D=s[5],B=s[9],k=s[13],I=s[2],U=s[6],X=s[10],W=s[14],it=s[3],H=s[7],j=s[11],tt=s[15];return r[0]=o*T+a*R+l*I+c*it,r[4]=o*A+a*D+l*U+c*H,r[8]=o*v+a*B+l*X+c*j,r[12]=o*E+a*k+l*W+c*tt,r[1]=h*T+u*R+d*I+f*it,r[5]=h*A+u*D+d*U+f*H,r[9]=h*v+u*B+d*X+f*j,r[13]=h*E+u*k+d*W+f*tt,r[2]=p*T+_*R+g*I+m*it,r[6]=p*A+_*D+g*U+m*H,r[10]=p*v+_*B+g*X+m*j,r[14]=p*E+_*k+g*W+m*tt,r[3]=S*T+w*R+x*I+M*it,r[7]=S*A+w*D+x*U+M*H,r[11]=S*v+w*B+x*X+M*j,r[15]=S*E+w*k+x*W+M*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],S=l*f-c*d,w=a*f-c*u,x=a*d-l*u,M=o*f-c*h,T=o*d-l*h,A=o*u-a*h;return e*(_*S-g*w+m*x)-n*(p*S-g*M+m*T)+s*(p*w-_*M+m*A)-r*(p*x-_*T+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],S=e*a-n*o,w=e*l-s*o,x=e*c-r*o,M=n*l-s*a,T=n*c-r*a,A=s*c-r*l,v=h*_-u*p,E=h*g-d*p,R=h*m-f*p,D=u*g-d*_,B=u*m-f*_,k=d*m-f*g,I=S*k-w*B+x*D+M*R-T*E+A*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=(a*k-l*B+c*D)*U,t[1]=(s*B-n*k-r*D)*U,t[2]=(_*A-g*T+m*M)*U,t[3]=(d*T-u*A-f*M)*U,t[4]=(l*R-o*k-c*E)*U,t[5]=(e*k-s*R+r*E)*U,t[6]=(g*x-p*A-m*w)*U,t[7]=(h*A-d*x+f*w)*U,t[8]=(o*B-a*R+c*v)*U,t[9]=(n*R-e*B-r*v)*U,t[10]=(p*T-_*x+m*S)*U,t[11]=(u*x-h*T-f*S)*U,t[12]=(a*E-o*D-l*v)*U,t[13]=(e*D-n*E+s*v)*U,t[14]=(_*w-p*M-g*S)*U,t[15]=(h*M-u*w+d*S)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,g=o*u,m=a*u,S=l*c,w=l*h,x=l*u,M=n.x,T=n.y,A=n.z;return s[0]=(1-(_+m))*M,s[1]=(f+x)*M,s[2]=(p-w)*M,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+m))*T,s[6]=(g+S)*T,s[7]=0,s[8]=(p+w)*A,s[9]=(g-S)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=yr.set(s[0],s[1],s[2]).length(),a=yr.set(s[4],s[5],s[6]).length(),l=yr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qi.copy(this);let c=1/o,h=1/a,u=1/l;return Qi.elements[0]*=c,Qi.elements[1]*=c,Qi.elements[2]*=c,Qi.elements[4]*=h,Qi.elements[5]*=h,Qi.elements[6]*=h,Qi.elements[8]*=u,Qi.elements[9]*=u,Qi.elements[10]*=u,e.setFromRotationMatrix(Qi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ji,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===ji)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Fr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ji,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===ji)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Fr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},yr=new N,Qi=new pe,Zv=new N(0,0,0),jv=new N(1,1,1),ss=new N,kl=new N,wi=new N,Cm=new pe,Am=new Ai,_n=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Am.setFromEuler(this),this.setFromQuaternion(Am,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tS=0,Rm=new N,xr=new Ai,Dn=new pe,Ul=new N,Yo=new N,eS=new N,iS=new Ai,Dm=new N(1,0,0),Im=new N(0,1,0),Om=new N(0,0,1),Lm={type:"added"},nS={type:"removed"},vr={type:"childadded",child:null},dd={type:"childremoved",child:null},Oe=class i extends tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new _n,n=new Ai,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Xt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(Dm,t)}rotateY(t){return this.rotateOnAxis(Im,t)}rotateZ(t){return this.rotateOnAxis(Om,t)}translateOnAxis(t,e){return Rm.copy(t).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dm,t)}translateY(t){return this.translateOnAxis(Im,t)}translateZ(t){return this.translateOnAxis(Om,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ul.copy(t):Ul.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Yo,Ul,this.up):Dn.lookAt(Ul,Yo,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(Dn),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lm),vr.child=t,this.dispatchEvent(vr),vr.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nS),dd.child=t,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lm),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,eS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,iS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new N(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},sS={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},zl={h:0,s:0,l:0};function fd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=pf(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fd(o,r,t+1/3),this.g=fd(o,r,t),this.b=fd(o,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=z_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return se.workingToColorSpace(Ke.copy(this),t),Math.round(Kt(Ke.r*255,0,255))*65536+Math.round(Kt(Ke.g*255,0,255))*256+Math.round(Kt(Ke.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ge){se.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+e,rs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rs),t.getHSL(zl);let n=Zo(rs.h,zl.h,e),s=Zo(rs.s,zl.s,e),r=Zo(rs.l,zl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Jt;Jt.NAMES=z_;var Us=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ki=new N,In=new N,pd=new N,On=new N,Sr=new N,br=new N,Nm=new N,gd=new N,md=new N,_d=new N,yd=new Me,xd=new Me,vd=new Me,Pn=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ki.subVectors(t,e),s.cross(Ki);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ki.subVectors(s,e),In.subVectors(n,e),pd.subVectors(t,e);let o=Ki.dot(Ki),a=Ki.dot(In),l=Ki.dot(pd),c=In.dot(In),h=In.dot(pd),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return yd.setScalar(0),xd.setScalar(0),vd.setScalar(0),yd.fromBufferAttribute(t,e),xd.fromBufferAttribute(t,n),vd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yd,r.x),o.addScaledVector(xd,r.y),o.addScaledVector(vd,r.z),o}static isFrontFacing(t,e,n,s){return Ki.subVectors(n,e),In.subVectors(t,e),Ki.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ki.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Ki.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Sr.subVectors(s,n),br.subVectors(r,n),gd.subVectors(t,n);let l=Sr.dot(gd),c=br.dot(gd);if(l<=0&&c<=0)return e.copy(n);md.subVectors(t,s);let h=Sr.dot(md),u=br.dot(md);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Sr,o);_d.subVectors(t,r);let f=Sr.dot(_d),p=br.dot(_d);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(br,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Nm.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Nm,a);let m=1/(g+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Sr,o).addScaledVector(br,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zi):Zi.fromBufferAttribute(r,o),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hl.copy(n.boundingBox)),Hl.applyMatrix4(t.matrixWorld),this.union(Hl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),Gl.subVectors(this.max,qo),Mr.subVectors(t.a,qo),wr.subVectors(t.b,qo),Tr.subVectors(t.c,qo),os.subVectors(wr,Mr),as.subVectors(Tr,wr),Ns.subVectors(Mr,Tr);let e=[0,-os.z,os.y,0,-as.z,as.y,0,-Ns.z,Ns.y,os.z,0,-os.x,as.z,0,-as.x,Ns.z,0,-Ns.x,-os.y,os.x,0,-as.y,as.x,0,-Ns.y,Ns.x,0];return!Sd(e,Mr,wr,Tr,Gl)||(e=[1,0,0,0,1,0,0,0,1],!Sd(e,Mr,wr,Tr,Gl))?!1:(Vl.crossVectors(os,as),e=[Vl.x,Vl.y,Vl.z],Sd(e,Mr,wr,Tr,Gl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ln=[new N,new N,new N,new N,new N,new N,new N,new N],Zi=new N,Hl=new yn,Mr=new N,wr=new N,Tr=new N,os=new N,as=new N,Ns=new N,qo=new N,Gl=new N,Vl=new N,Ps=new N;function Sd(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ps.fromArray(i,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=t.dot(Ps),c=e.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var De=new N,Yl=new lt,rS=0,Ci=class extends tn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=P_,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yl.fromBufferAttribute(this,e),Yl.applyMatrix3(t),this.setXY(e,Yl.x,Yl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array),s=oi(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array),s=oi(s,this.array),r=oi(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var aa=class extends Ci{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var la=class extends Ci{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ie=class extends Ci{constructor(t,e,n){super(new Float32Array(t),e,n)}},oS=new yn,Wo=new N,bd=new N,kn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):oS.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wo.subVectors(t,this.center);let e=Wo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wo.copy(t.center).add(bd)),this.expandByPoint(Wo.copy(t.center).sub(bd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},aS=0,Fi=new pe,Md=new Oe,Er=new N,Ti=new yn,Jo=new yn,ke=new N,di=class i extends tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iv(t)?la:aa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,e,n){return Fi.makeTranslation(t,e,n),this.applyMatrix4(Fi),this}scale(t,e,n){return Fi.makeScale(t,e,n),this.applyMatrix4(Fi),this}lookAt(t){return Md.lookAt(t),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(Ti.min,Jo.min),Ti.expandByPoint(ke),ke.addVectors(Ti.max,Jo.max),Ti.expandByPoint(ke)):(Ti.expandByPoint(Jo.min),Ti.expandByPoint(Jo.max))}Ti.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(Er.fromBufferAttribute(t,c),ke.add(Er)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ci(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new N,l[v]=new N;let c=new N,h=new N,u=new N,d=new lt,f=new lt,p=new lt,_=new N,g=new N;function m(v,E,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[v].add(_),a[E].add(_),a[R].add(_),l[v].add(g),l[E].add(g),l[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,E=S.length;v<E;++v){let R=S[v],D=R.start,B=R.count;for(let k=D,I=D+B;k<I;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new N,x=new N,M=new N,T=new N;function A(v){M.fromBufferAttribute(s,v),T.copy(M);let E=a[v];w.copy(E),w.sub(M.multiplyScalar(M.dot(E))).normalize(),x.crossVectors(T,E);let D=x.dot(l[v])<0?-1:1;o.setXYZW(v,w.x,w.y,w.z,D)}for(let v=0,E=S.length;v<E;++v){let R=S[v],D=R.start,B=R.count;for(let k=D,I=D+B;k<I;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ci(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Ci(d,h,u)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wd=new N,lS=new N,cS=new Xt,Ei=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=wd.subVectors(n,e).cross(lS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(wd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cS.getNormalMatrix(t),s=this.coplanarPoint(wd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hS=0,xn=class extends tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Kr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Kd,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dc,this.stencilZFail=dc,this.stencilZPass=dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ei().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Nn=new N,Td=new N,ql=new N,Wl=new N,zs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Td.copy(t).add(e).multiplyScalar(.5),ql.copy(e).sub(t).normalize(),Wl.copy(this.origin).sub(Td);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ql),a=Wl.dot(this.direction),l=-Wl.dot(ql),c=Wl.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Td).addScaledVector(ql,d),f}intersectSphere(t,e){if(t.radius<0)return null;Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,g=e.z-o.z,m=n.x-o.x,S=n.y-o.y,w=n.z-o.z,x=Math.abs(l),M=Math.abs(c),T=Math.abs(h),A,v,E,R,D,B,k,I,U,X,W,it;if(x>=M&&x>=T?(E=l,B=u,U=p,it=m,l>=0?(A=c,v=h,R=d,D=f,k=_,I=g,X=S,W=w):(A=h,v=c,R=f,D=d,k=g,I=_,X=w,W=S)):M>=T?(E=c,B=d,U=_,it=S,c>=0?(A=h,v=l,R=f,D=u,k=g,I=p,X=w,W=m):(A=l,v=h,R=u,D=f,k=p,I=g,X=m,W=w)):(E=h,B=f,U=g,it=w,h>=0?(A=l,v=c,R=u,D=d,k=p,I=_,X=m,W=S):(A=c,v=l,R=d,D=u,k=_,I=p,X=S,W=m)),E===0)return null;let H=A/E,j=v/E,tt=1/E,Ct=R-H*B,mt=D-j*B,Zt=k-H*U,Wt=I-j*U,dt=X-H*it,Y=W-j*it,J=dt*Wt-Y*Zt,at=Ct*Y-mt*dt,zt=Zt*mt-Wt*Ct;if(s){if(J<0||at<0||zt<0)return null}else if((J<0||at<0||zt<0)&&(J>0||at>0||zt>0))return null;let wt=J+at+zt;if(wt===0)return null;let Vt=tt*(J*B+at*U+zt*it);return(wt>0?Vt<0:Vt>0)?null:this.at(Vt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Pm=new pe,Fs=new zs,Jl=new kn,Fm=new N,Xl=new N,$l=new N,Ql=new N,Ed=new N,Kl=new N,Bm=new N,Zl=new N,ye=class extends Oe{constructor(t=new di,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Kl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ed.fromBufferAttribute(u,t),o?Kl.addScaledVector(Ed,h):Kl.addScaledVector(Ed.sub(e),h))}e.add(Kl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jl.copy(n.boundingSphere),Jl.applyMatrix4(r),Fs.copy(t.ray).recast(t.near),!(Jl.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Jl,Fm)===null||Fs.origin.distanceToSquared(Fm)>(t.far-t.near)**2))&&(Pm.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(Pm),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,M=w;x<M;x+=3){let T=a.getX(x),A=a.getX(x+1),v=a.getX(x+2);s=jl(this,m,t,n,c,h,u,T,A,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let S=a.getX(g),w=a.getX(g+1),x=a.getX(g+2);s=jl(this,o,t,n,c,h,u,S,w,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,M=w;x<M;x+=3){let T=x,A=x+1,v=x+2;s=jl(this,m,t,n,c,h,u,T,A,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let S=g,w=g+1,x=g+2;s=jl(this,o,t,n,c,h,u,S,w,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function uS(i,t,e,n,s,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ms,a),l===null)return null;Zl.copy(a),Zl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Zl);return c<e.near||c>e.far?null:{distance:c,point:Zl.clone(),object:i}}function jl(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Xl),i.getVertexPosition(l,$l),i.getVertexPosition(c,Ql);let h=uS(i,t,e,n,Xl,$l,Ql,Bm);if(h){let u=new N;Pn.getBarycoord(Bm,Xl,$l,Ql,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,a,l,c,u,new lt)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,a,l,c,u,new lt)),o&&(h.normal=Pn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};Pn.getNormal(Xl,$l,Ql,d.normal),h.face=d,h.barycoord=u}return h}var ca=class extends ai{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ue,h=Ue,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ha=class extends Ci{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cr=new pe,km=new pe,tc=[],Um=new yn,dS=new pe,Xo=new ye,$o=new kn,ua=class extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dS)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cr),Um.copy(t.boundingBox).applyMatrix4(Cr),this.boundingBox.union(Um)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cr),$o.copy(t.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union($o)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xo.geometry=this.geometry,Xo.material=this.material,Xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(n),t.ray.intersectsSphere($o)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cr),km.multiplyMatrices(n,Cr),Xo.matrixWorld=km,Xo.raycast(t,tc);for(let o=0,a=tc.length;o<a;o++){let l=tc[o];l.instanceId=r,l.object=this,e.push(l)}tc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(s*this.count),s,this.count,nh,Bi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bs=new kn,fS=new lt(.5,.5),ec=new N,Hr=class{constructor(t=new Ei,e=new Ei,n=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ji,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],S=r[12],w=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-o,f-h,m-p,M-S).normalize(),s[1].setComponents(c+o,f+h,m+p,M+S).normalize(),s[2].setComponents(c+a,f+u,m+_,M+w).normalize(),s[3].setComponents(c-a,f-u,m-_,M-w).normalize(),n)s[4].setComponents(l,d,g,x).normalize(),s[5].setComponents(c-l,f-d,m-g,M-x).normalize();else if(s[4].setComponents(c-l,f-d,m-g,M-x).normalize(),e===ji)s[5].setComponents(c+l,f+d,m+g,M+x).normalize();else if(e===Fr)s[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(t){Bs.center.set(0,0,0);let e=fS.distanceTo(t.center);return Bs.radius=.7071067811865476+e,Bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ec.x=s.normal.x>0?t.max.x:t.min.x,ec.y=s.normal.y>0?t.max.y:t.min.y,ec.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ec)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gr=class extends xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Tc=new N,Ec=new N,zm=new pe,Qo=new zs,ic=new kn,Cd=new N,Hm=new N,Cc=class extends Oe{constructor(t=new di,e=new Gr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Tc.fromBufferAttribute(e,s-1),Ec.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Tc.distanceTo(Ec);t.setAttribute("lineDistance",new Ie(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(s),ic.radius+=r,t.ray.intersectsSphere(ic)===!1)return;zm.copy(s).invert(),Qo.copy(t.ray).applyMatrix4(zm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=h.getX(_),S=h.getX(_+1),w=nc(this,t,Qo,l,m,S,_);w&&e.push(w)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(f),m=nc(this,t,Qo,l,_,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=nc(this,t,Qo,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){let _=nc(this,t,Qo,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nc(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Tc.fromBufferAttribute(a,s),Ec.fromBufferAttribute(a,r),e.distanceSqToSegment(Tc,Ec,Cd,Hm)>n)return;Cd.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Cd);if(!(c<t.near||c>t.far))return{distance:c,point:Hm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Gm=new N,Vm=new N,da=class extends Cc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Gm.fromBufferAttribute(e,s),Vm.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gm.distanceTo(Vm);t.setAttribute("lineDistance",new Ie(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fa=class extends ai{constructor(t=[],e=_s,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vr=class extends ai{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cs=class extends ai{constructor(t,e,n=nn,s,r,o,a=Ue,l=Ue,c,h=mn,u=1){if(h!==mn&&h!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ac=class extends cs{constructor(t,e=nn,n=_s,s,r,o=Ue,a=Ue,l,c=mn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},pa=class extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},hs=class i extends di{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function p(_,g,m,S,w,x,M,T,A,v,E){let R=x/A,D=M/v,B=x/2,k=M/2,I=T/2,U=A+1,X=v+1,W=0,it=0,H=new N;for(let j=0;j<X;j++){let tt=j*D-k;for(let Ct=0;Ct<U;Ct++){let mt=Ct*R-B;H[_]=mt*S,H[g]=tt*w,H[m]=I,c.push(H.x,H.y,H.z),H[_]=0,H[g]=0,H[m]=T>0?1:-1,h.push(H.x,H.y,H.z),u.push(Ct/A),u.push(1-j/v),W+=1}}for(let j=0;j<v;j++)for(let tt=0;tt<A;tt++){let Ct=d+tt+U*j,mt=d+tt+U*(j+1),Zt=d+(tt+1)+U*(j+1),Wt=d+(tt+1)+U*j;l.push(Ct,mt,Wt),l.push(mt,Zt,Wt),it+=6}a.addGroup(f,it,E),f+=it,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var sc=new N,rc=new N,Ad=new N,oc=new Pn,ga=class extends di{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Or*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:g,c:m}=oc;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),oc.getNormal(Ad),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){let w=(S+1)%3,x=u[S],M=u[w],T=oc[h[S]],A=oc[h[w]],v=`${x}_${M}`,E=`${M}_${x}`;E in d&&d[E]?(Ad.dot(d[E].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),d[E]=null):v in d||(d[v]={index0:c[S],index1:c[w],normal:Ad.clone()})}}for(let p in d)if(d[p]){let{index0:_,index1:g}=d[p];sc.fromBufferAttribute(a,_),rc.fromBufferAttribute(a,g),f.push(sc.x,sc.y,sc.z),f.push(rc.x,rc.y,rc.z)}this.setAttribute("position",new Ie(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new lt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new pe;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Kt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Yr=class extends Ri{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Rc=class extends Yr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mf(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ym=new N,qm=new N,Rd=new mf,Dd=new mf,Id=new mf,Dc=class extends Ri{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(qm.subVectors(s[0],s[1]).add(s[0]),c=qm);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ym.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ym),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Rd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),Dd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),Id.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Rd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Dd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Id.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Rd.calc(l),Dd.calc(l),Id.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wm(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function pS(i,t){let e=1-i;return e*e*t}function gS(i,t){return 2*(1-i)*i*t}function mS(i,t){return i*i*t}function jo(i,t,e,n){return pS(i,t)+gS(i,e)+mS(i,n)}function _S(i,t){let e=1-i;return e*e*e*t}function yS(i,t){let e=1-i;return 3*e*e*i*t}function xS(i,t){return 3*(1-i)*i*i*t}function vS(i,t){return i*i*i*t}function ta(i,t,e,n,s){return _S(i,t)+yS(i,e)+xS(i,n)+vS(i,s)}var ma=class extends Ri{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ta(t,s.x,r.x,o.x,a.x),ta(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ic=class extends Ri{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ta(t,s.x,r.x,o.x,a.x),ta(t,s.y,r.y,o.y,a.y),ta(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_a=class extends Ri{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oc=class extends Ri{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends Ri{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(jo(t,s.x,r.x,o.x),jo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lc=class extends Ri{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(jo(t,s.x,r.x,o.x),jo(t,s.y,r.y,o.y),jo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends Ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Wm(a,l.x,c.x,h.x,u.x),Wm(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},kd=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:Dc,CubicBezierCurve:ma,CubicBezierCurve3:Ic,EllipseCurve:Yr,LineCurve:_a,LineCurve3:Oc,QuadraticBezierCurve:ya,QuadraticBezierCurve3:Lc,SplineCurve:xa}),Nc=class extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new kd[s.type]().fromJSON(s))}return this}},zn=class extends Nc{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new _a(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ya(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ma(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Yr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Hs=class extends zn{constructor(t){super(t),this.uuid=Js(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new zn().fromJSON(s))}return this}};function SS(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=H_(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ES(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return va(r,o,e,a,l,c,0),o}function H_(i,t,e,n,s){let r;if(s===BS(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Jm(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Jm(o/n|0,i[o],i[o+1],r);return r&&qr(r,r.next)&&(ba(r),r=r.next),r}function Gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(qr(e,e.next)||Te(e.prev,e,e.next)===0)){if(ba(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function va(i,t,e,n,s,r,o){if(!i)return;!o&&r&&IS(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?MS(i,n,s,r):bS(i)){t.push(l.i,i.i,c.i),ba(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=wS(Gs(i),t),va(i,t,e,n,s,r,2)):o===2&&TS(i,t,e,n,s,r):va(Gs(i),t,e,n,s,r,1);break}}}function bS(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ko(s,a,r,l,o,c,p.x,p.y)&&Te(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function MS(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),_=Math.max(a,l,c),g=Math.max(h,u,d),m=Ud(f,p,t,e,n),S=Ud(_,g,t,e,n),w=i.prevZ,x=i.nextZ;for(;w&&w.z>=m&&x&&x.z<=S;){if(w.x>=f&&w.x<=_&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&Ko(a,h,l,u,c,d,w.x,w.y)&&Te(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&Ko(a,h,l,u,c,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=_&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&Ko(a,h,l,u,c,d,w.x,w.y)&&Te(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&Ko(a,h,l,u,c,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wS(i,t){let e=i;do{let n=e.prev,s=e.next.next;!qr(n,s)&&V_(n,e,e.next,s)&&Sa(n,s)&&Sa(s,n)&&(t.push(n.i,e.i,s.i),ba(e),ba(e.next),e=i=s),e=e.next}while(e!==i);return Gs(e)}function TS(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&NS(o,a)){let l=Y_(o,a);o=Gs(o,o.next),l=Gs(l,l.next),va(o,t,e,n,s,r,0),va(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ES(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=H_(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(LS(c))}s.sort(CS);for(let r=0;r<s.length;r++)e=AS(s[r],e);return e}function CS(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function AS(i,t){let e=RS(i,t);if(!e)return t;let n=Y_(e,i);return Gs(n,n.next),Gs(e,e.next)}function RS(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(qr(i,e))return e;do{if(qr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&G_(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Sa(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&DS(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function DS(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function IS(i,t,e,n){let s=i;do s.z===0&&(s.z=Ud(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,OS(s)}function OS(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ud(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function LS(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function G_(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ko(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&G_(i,t,e,n,s,r,o,a)}function NS(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!PS(i,t)&&(Sa(i,t)&&Sa(t,i)&&FS(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||qr(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function qr(i,t){return i.x===t.x&&i.y===t.y}function V_(i,t,e,n){let s=lc(Te(i,t,e)),r=lc(Te(i,t,n)),o=lc(Te(e,n,i)),a=lc(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&ac(i,e,t)||r===0&&ac(i,n,t)||o===0&&ac(e,i,n)||a===0&&ac(e,t,n))}function ac(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function lc(i){return i>0?1:i<0?-1:0}function PS(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&V_(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sa(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function FS(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Y_(i,t){let e=zd(i.i,i.x,i.y),n=zd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jm(i,t,e,n){let s=zd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ba(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function BS(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hd=class{static triangulate(t,e,n=2){return SS(t,e,n)}},gn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Xm(t),$m(n,t);let o=t.length;e.forEach(Xm);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,$m(n,e[l]);let a=Hd.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Xm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $m(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ma=class i extends di{constructor(t=new Hs([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:kS,w,x=!1,M,T,A,v;if(m){w=m.getSpacedPoints(h),x=!0,d=!1;let nt=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,nt),T=new N,A=new N,v=new N}d||(g=0,f=0,p=0,_=0);let E=a.extractPoints(c),R=E.shape,D=E.holes;if(!gn.isClockWise(R)){R=R.reverse();for(let nt=0,ot=D.length;nt<ot;nt++){let ct=D[nt];gn.isClockWise(ct)&&(D[nt]=ct.reverse())}}function k(nt){let ct=10000000000000001e-36,ht=nt[0];for(let gt=1;gt<=nt.length;gt++){let Ht=gt%nt.length,kt=nt[Ht],qt=kt.x-ht.x,$t=kt.y-ht.y,O=qt*qt+$t*$t,ae=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(ht.x),Math.abs(ht.y)),ie=ct*ae*ae;if(O<=ie){nt.splice(Ht,1),gt--;continue}ht=kt}}k(R),D.forEach(k);let I=D.length,U=R;for(let nt=0;nt<I;nt++){let ot=D[nt];R=R.concat(ot)}function X(nt,ot,ct){return ot||Yt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ot,ct)}let W=R.length;function it(nt,ot,ct){let ht,gt,Ht,kt=nt.x-ot.x,qt=nt.y-ot.y,$t=ct.x-nt.x,O=ct.y-nt.y,ae=kt*kt+qt*qt,ie=kt*O-qt*$t;if(Math.abs(ie)>Number.EPSILON){let C=Math.sqrt(ae),y=Math.sqrt($t*$t+O*O),z=ot.x-qt/C,q=ot.y+kt/C,K=ct.x-O/y,ft=ct.y+$t/y,pt=((K-z)*O-(ft-q)*$t)/(kt*O-qt*$t);ht=z+kt*pt-nt.x,gt=q+qt*pt-nt.y;let Z=ht*ht+gt*gt;if(Z<=2)return new lt(ht,gt);Ht=Math.sqrt(Z/2)}else{let C=!1;kt>Number.EPSILON?$t>Number.EPSILON&&(C=!0):kt<-Number.EPSILON?$t<-Number.EPSILON&&(C=!0):Math.sign(qt)===Math.sign(O)&&(C=!0),C?(ht=-qt,gt=kt,Ht=Math.sqrt(ae)):(ht=kt,gt=qt,Ht=Math.sqrt(ae/2))}return new lt(ht/Ht,gt/Ht)}let H=[];for(let nt=0,ot=U.length,ct=ot-1,ht=nt+1;nt<ot;nt++,ct++,ht++)ct===ot&&(ct=0),ht===ot&&(ht=0),H[nt]=it(U[nt],U[ct],U[ht]);let j=[],tt,Ct=H.concat();for(let nt=0,ot=I;nt<ot;nt++){let ct=D[nt];tt=[];for(let ht=0,gt=ct.length,Ht=gt-1,kt=ht+1;ht<gt;ht++,Ht++,kt++)Ht===gt&&(Ht=0),kt===gt&&(kt=0),tt[ht]=it(ct[ht],ct[Ht],ct[kt]);j.push(tt),Ct=Ct.concat(tt)}let mt;if(g===0)mt=gn.triangulateShape(U,D);else{let nt=[],ot=[];for(let ct=0;ct<g;ct++){let ht=ct/g,gt=f*Math.cos(ht*Math.PI/2),Ht=p*Math.sin(ht*Math.PI/2)+_;for(let kt=0,qt=U.length;kt<qt;kt++){let $t=X(U[kt],H[kt],Ht);at($t.x,$t.y,-gt),ht===0&&nt.push($t)}for(let kt=0,qt=I;kt<qt;kt++){let $t=D[kt];tt=j[kt];let O=[];for(let ae=0,ie=$t.length;ae<ie;ae++){let C=X($t[ae],tt[ae],Ht);at(C.x,C.y,-gt),ht===0&&O.push(C)}ht===0&&ot.push(O)}}mt=gn.triangulateShape(nt,ot)}let Zt=mt.length,Wt=p+_;for(let nt=0;nt<W;nt++){let ot=d?X(R[nt],Ct[nt],Wt):R[nt];x?(A.copy(M.normals[0]).multiplyScalar(ot.x),T.copy(M.binormals[0]).multiplyScalar(ot.y),v.copy(w[0]).add(A).add(T),at(v.x,v.y,v.z)):at(ot.x,ot.y,0)}for(let nt=1;nt<=h;nt++)for(let ot=0;ot<W;ot++){let ct=d?X(R[ot],Ct[ot],Wt):R[ot];x?(A.copy(M.normals[nt]).multiplyScalar(ct.x),T.copy(M.binormals[nt]).multiplyScalar(ct.y),v.copy(w[nt]).add(A).add(T),at(v.x,v.y,v.z)):at(ct.x,ct.y,u/h*nt)}for(let nt=g-1;nt>=0;nt--){let ot=nt/g,ct=f*Math.cos(ot*Math.PI/2),ht=p*Math.sin(ot*Math.PI/2)+_;for(let gt=0,Ht=U.length;gt<Ht;gt++){let kt=X(U[gt],H[gt],ht);at(kt.x,kt.y,u+ct)}for(let gt=0,Ht=D.length;gt<Ht;gt++){let kt=D[gt];tt=j[gt];for(let qt=0,$t=kt.length;qt<$t;qt++){let O=X(kt[qt],tt[qt],ht);x?at(O.x,O.y+w[h-1].y,w[h-1].x+ct):at(O.x,O.y,u+ct)}}}dt(),Y();function dt(){let nt=s.length/3;if(d){let ot=0,ct=W*ot;for(let ht=0;ht<Zt;ht++){let gt=mt[ht];zt(gt[2]+ct,gt[1]+ct,gt[0]+ct)}ot=h+g*2,ct=W*ot;for(let ht=0;ht<Zt;ht++){let gt=mt[ht];zt(gt[0]+ct,gt[1]+ct,gt[2]+ct)}}else{for(let ot=0;ot<Zt;ot++){let ct=mt[ot];zt(ct[2],ct[1],ct[0])}for(let ot=0;ot<Zt;ot++){let ct=mt[ot];zt(ct[0]+W*h,ct[1]+W*h,ct[2]+W*h)}}n.addGroup(nt,s.length/3-nt,0)}function Y(){let nt=s.length/3,ot=0;J(U,ot),ot+=U.length;for(let ct=0,ht=D.length;ct<ht;ct++){let gt=D[ct];J(gt,ot),ot+=gt.length}n.addGroup(nt,s.length/3-nt,1)}function J(nt,ot){let ct=nt.length;for(;--ct>=0;){let ht=ct,gt=ct-1;gt<0&&(gt=nt.length-1);for(let Ht=0,kt=h+g*2;Ht<kt;Ht++){let qt=W*Ht,$t=W*(Ht+1),O=ot+ht+qt,ae=ot+gt+qt,ie=ot+gt+$t,C=ot+ht+$t;wt(O,ae,ie,C)}}}function at(nt,ot,ct){l.push(nt),l.push(ot),l.push(ct)}function zt(nt,ot,ct){Vt(nt),Vt(ot),Vt(ct);let ht=s.length/3,gt=S.generateTopUV(n,s,ht-3,ht-2,ht-1);oe(gt[0]),oe(gt[1]),oe(gt[2])}function wt(nt,ot,ct,ht){Vt(nt),Vt(ot),Vt(ht),Vt(ot),Vt(ct),Vt(ht);let gt=s.length/3,Ht=S.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);oe(Ht[0]),oe(Ht[1]),oe(Ht[3]),oe(Ht[1]),oe(Ht[2]),oe(Ht[3])}function Vt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function oe(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return US(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new kd[s.type]().fromJSON(s)),new i(n,t.options)}},kS={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-u),new lt(d,1-p),new lt(_,1-m)]:[new lt(a,1-l),new lt(h,1-u),new lt(f,1-p),new lt(g,1-m)]}};function US(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Vs=class i extends di{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let S=m*d-o;for(let w=0;w<c;w++){let x=w*u-r;p.push(x,-S,0),_.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let w=S+c*m,x=S+c*(m+1),M=S+1+c*(m+1),T=S+1+c*m;f.push(w,x,T),f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var wa=class i extends di{constructor(t=new Hs([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;gn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let S=p[g];gn.isClockWise(S)===!0&&(p[g]=S.reverse())}let _=gn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let S=p[g];f=f.concat(S)}for(let g=0,m=f.length;g<m;g++){let S=f[g];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,m=_.length;g<m;g++){let S=_[g],w=S[0]+u,x=S[1]+u,M=S[2]+u;n.push(w,x,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return zS(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function zS(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function Xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Qm(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Qm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=Xs(i[e]);for(let s in n)t[s]=n[s]}return t}function Qm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function HS(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _f(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var q_={clone:Xs,merge:Ze},GS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Di=class extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GS,this.fragmentShader=VS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=HS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Pc=class extends Di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ys=class extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ta=class extends Ys{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ea=class extends xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Qc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Fc=class extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bc=class extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ar(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Od(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];i:{t:{let o;e:{n:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break n;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break i}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kc=class extends us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pd,endingEnd:Pd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fd:r=t,a=2*e-n;break;case Bd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fd:o=t,l=2*n-e;break;case Bd:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,S=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,w=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let M=0;M!==a;++M)r[M]=m*o[h+M]+S*o[c+M]+w*o[l+M]+x*o[u+M];return r}},Uc=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},zc=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hc=class extends us{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),_=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],g=o[l+p],m=f*d+p*2,S=u[m],w=u[m+1],x=t*d+p*2,M=h[x],T=h[x+1],A=qS(n,e,S,M,s);r[p]=W_(A,_,w,T,g)}return r}};function W_(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function YS(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function qS(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=W_(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=YS(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ii=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ar(e,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ar(t.times,Array),values:Ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Od(t.settings)&&(n.settings={inTangents:Ar(t.settings.inTangents,Array),outTangents:Ar(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ea:e=this.InterpolantFactoryMethodDiscrete;break;case Sc:e=this.InterpolantFactoryMethodLinear;break;case uc:e=this.InterpolantFactoryMethodSmooth;break;case Nd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return uc;case this.InterpolantFactoryMethodBezier:return Nd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Od(this.settings)&&(Km(this.settings.inTangents,t),Km(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ov(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===uc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let _=e[u+p];if(_!==e[d+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Od(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Km(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Sc;var ds=class extends Ii{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=ea;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}};Gc.prototype.ValueTypeName="color";var Vc=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}};Vc.prototype.ValueTypeName="number";var Yc=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ai.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ca=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Yc(this.times,this.values,this.getValueSize(),t)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Ii{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ea;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}};qc.prototype.ValueTypeName="vector";var Wc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},J_=new Wc,Jc=class{constructor(t){this.manager=t!==void 0?t:J_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Aa=class extends Wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ld=new pe,Zm=new N,jm=new N,Ra=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zm),jm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ld.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ld,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Fr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ld)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},cc=new N,hc=new Ai,fn=new N,Da=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(cc,hc,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,hc,fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(cc,hc,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,hc,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new N,t_=new lt,e_=new lt,Ve=class extends Da{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,t_,e_),e.subVectors(e_,t_)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Gd=class extends Ra{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0}},Ia=class extends Wr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Jr=class extends Da{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vd=class extends Ra{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Vd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Rr=-90,Dr=1,Xc=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Rr,Dr,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Rr,Dr,t,e);r.layers=this.layers,this.add(r);let o=new Ve(Rr,Dr,t,e);o.layers=this.layers,this.add(o);let a=new Ve(Rr,Dr,t,e);a.layers=this.layers,this.add(a);let l=new Ve(Rr,Dr,t,e);l.layers=this.layers,this.add(l);let c=new Ve(Rr,Dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ji)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},$c=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var yf="\\[\\]\\.:\\/",WS=new RegExp("["+yf+"]","g"),xf="[^"+yf+"]",JS="[^"+yf.replace("\\.","")+"]",XS=/((?:WC+[\/:])*)/.source.replace("WC",xf),$S=/(WCOD+)?/.source.replace("WCOD",JS),QS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xf),KS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xf),ZS=new RegExp("^"+XS+$S+QS+KS+"$"),jS=["material","materials","bones","map"],Yd=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(WS,"")}static parseTrackName(t){let e=ZS.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Yd;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QC=new Float32Array(1);var $r=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var qd=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Oa=class extends tn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function vf(i,t,e,n){let s=tb(n);switch(e){case hf:return i*t;case nh:return i*t/s.components*s.byteLength;case sh:return i*t/s.components*s.byteLength;case vs:return i*t*2/s.components*s.byteLength;case rh:return i*t*2/s.components*s.byteLength;case uf:return i*t*3/s.components*s.byteLength;case ki:return i*t*4/s.components*s.byteLength;case oh:return i*t*4/s.components*s.byteLength;case Ba:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lh:case hh:return Math.max(i,16)*Math.max(t,8)/4;case ah:case ch:return Math.max(i,8)*Math.max(t,8)/2;case uh:case dh:case ph:case gh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fh:case Ha:case mh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _h:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Th:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ih:case Oh:case Lh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nh:case Ph:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ga:case Fh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tb(i){switch(i){case pi:case of:return{byteLength:1,components:1};case Zr:case af:case sn:return{byteLength:2,components:1};case eh:case ih:return{byteLength:2,components:4};case nn:case th:case Bi:return{byteLength:4,components:1};case lf:case cf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function g0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function eb(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nb=`#ifdef USE_ALPHAHASH
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
#endif`,sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lb=`#ifdef USE_AOMAP
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
#endif`,cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hb=`#ifdef USE_BATCHING
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
#endif`,ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,db=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gb=`#ifdef USE_IRIDESCENCE
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
#endif`,mb=`#ifdef USE_BUMPMAP
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
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tb=`#define PI 3.141592653589793
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
} // validated`,Eb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vb=`#ifdef USE_GRADIENTMAP
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
}`,Yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xb=`#ifdef USE_ENVMAP
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
#endif`,$b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jb=`PhysicalMaterial material;
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
#endif`,tM=`uniform sampler2D dfgLUT;
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
}`,eM=`
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
#endif`,iM=`#if defined( RE_IndirectDiffuse )
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
#endif`,nM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dM=`#if defined( USE_POINTS_UV )
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
#endif`,fM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yM=`#ifdef USE_MORPHTARGETS
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
#endif`,xM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,TM=`#ifdef USE_NORMALMAP
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
#endif`,EM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HM=`float getShadowMask() {
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
}`,GM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VM=`#ifdef USE_SKINNING
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
#endif`,YM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qM=`#ifdef USE_SKINNING
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
#endif`,WM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$M=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QM=`#ifdef USE_TRANSMISSION
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
#endif`,KM=`#ifdef USE_TRANSMISSION
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
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nw=`uniform sampler2D t2D;
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
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`#include <common>
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
}`,cw=`#if DEPTH_PACKING == 3200
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
}`,hw=`#define DISTANCE
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
}`,uw=`#define DISTANCE
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
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`uniform float scale;
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
}`,gw=`uniform vec3 diffuse;
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
}`,mw=`#include <common>
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
}`,_w=`uniform vec3 diffuse;
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
}`,yw=`#define LAMBERT
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
}`,xw=`#define LAMBERT
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
}`,vw=`#define MATCAP
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
}`,Sw=`#define MATCAP
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
}`,bw=`#define NORMAL
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
}`,Mw=`#define NORMAL
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
}`,ww=`#define PHONG
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
}`,Tw=`#define PHONG
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
}`,Ew=`#define STANDARD
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
}`,Cw=`#define STANDARD
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
}`,Aw=`#define TOON
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
}`,Rw=`#define TOON
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
}`,Dw=`uniform float size;
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Ow=`#include <common>
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
}`,Lw=`uniform vec3 color;
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
}`,Nw=`uniform float rotation;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:ib,alphahash_pars_fragment:nb,alphamap_fragment:sb,alphamap_pars_fragment:rb,alphatest_fragment:ob,alphatest_pars_fragment:ab,aomap_fragment:lb,aomap_pars_fragment:cb,batching_pars_vertex:hb,batching_vertex:ub,begin_vertex:db,beginnormal_vertex:fb,bsdfs:pb,iridescence_fragment:gb,bumpmap_pars_fragment:mb,clipping_planes_fragment:_b,clipping_planes_pars_fragment:yb,clipping_planes_pars_vertex:xb,clipping_planes_vertex:vb,color_fragment:Sb,color_pars_fragment:bb,color_pars_vertex:Mb,color_vertex:wb,common:Tb,cube_uv_reflection_fragment:Eb,defaultnormal_vertex:Cb,displacementmap_pars_vertex:Ab,displacementmap_vertex:Rb,emissivemap_fragment:Db,emissivemap_pars_fragment:Ib,colorspace_fragment:Ob,colorspace_pars_fragment:Lb,envmap_fragment:Nb,envmap_common_pars_fragment:Pb,envmap_pars_fragment:Fb,envmap_pars_vertex:Bb,envmap_physical_pars_fragment:Xb,envmap_vertex:kb,fog_vertex:Ub,fog_pars_vertex:zb,fog_fragment:Hb,fog_pars_fragment:Gb,gradientmap_pars_fragment:Vb,lightmap_pars_fragment:Yb,lights_lambert_fragment:qb,lights_lambert_pars_fragment:Wb,lights_pars_begin:Jb,lights_toon_fragment:$b,lights_toon_pars_fragment:Qb,lights_phong_fragment:Kb,lights_phong_pars_fragment:Zb,lights_physical_fragment:jb,lights_physical_pars_fragment:tM,lights_fragment_begin:eM,lights_fragment_maps:iM,lights_fragment_end:nM,lightprobes_pars_fragment:sM,logdepthbuf_fragment:rM,logdepthbuf_pars_fragment:oM,logdepthbuf_pars_vertex:aM,logdepthbuf_vertex:lM,map_fragment:cM,map_pars_fragment:hM,map_particle_fragment:uM,map_particle_pars_fragment:dM,metalnessmap_fragment:fM,metalnessmap_pars_fragment:pM,morphinstance_vertex:gM,morphcolor_vertex:mM,morphnormal_vertex:_M,morphtarget_pars_vertex:yM,morphtarget_vertex:xM,normal_fragment_begin:vM,normal_fragment_maps:SM,normal_pars_fragment:bM,normal_pars_vertex:MM,normal_vertex:wM,normalmap_pars_fragment:TM,clearcoat_normal_fragment_begin:EM,clearcoat_normal_fragment_maps:CM,clearcoat_pars_fragment:AM,iridescence_pars_fragment:RM,opaque_fragment:DM,packing:IM,premultiplied_alpha_fragment:OM,project_vertex:LM,dithering_fragment:NM,dithering_pars_fragment:PM,roughnessmap_fragment:FM,roughnessmap_pars_fragment:BM,shadowmap_pars_fragment:kM,shadowmap_pars_vertex:UM,shadowmap_vertex:zM,shadowmask_pars_fragment:HM,skinbase_vertex:GM,skinning_pars_vertex:VM,skinning_vertex:YM,skinnormal_vertex:qM,specularmap_fragment:WM,specularmap_pars_fragment:JM,tonemapping_fragment:XM,tonemapping_pars_fragment:$M,transmission_fragment:QM,transmission_pars_fragment:KM,uv_pars_fragment:ZM,uv_pars_vertex:jM,uv_vertex:tw,worldpos_vertex:ew,background_vert:iw,background_frag:nw,backgroundCube_vert:sw,backgroundCube_frag:rw,cube_vert:ow,cube_frag:aw,depth_vert:lw,depth_frag:cw,distance_vert:hw,distance_frag:uw,equirect_vert:dw,equirect_frag:fw,linedashed_vert:pw,linedashed_frag:gw,meshbasic_vert:mw,meshbasic_frag:_w,meshlambert_vert:yw,meshlambert_frag:xw,meshmatcap_vert:vw,meshmatcap_frag:Sw,meshnormal_vert:bw,meshnormal_frag:Mw,meshphong_vert:ww,meshphong_frag:Tw,meshphysical_vert:Ew,meshphysical_frag:Cw,meshtoon_vert:Aw,meshtoon_frag:Rw,points_vert:Dw,points_frag:Iw,shadow_vert:Ow,shadow_frag:Lw,sprite_vert:Nw,sprite_frag:Pw},bt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},bn={basic:{uniforms:Ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ze([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ze([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ze([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ze([bt.points,bt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ze([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ze([bt.common,bt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ze([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ze([bt.sprite,bt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:Ze([bt.common,bt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:Ze([bt.lights,bt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};bn.physical={uniforms:Ze([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Uh={r:0,b:0,g:0},Fw=new pe,m0=new Xt;m0.set(-1,0,0,0,1,0,0,0,1);function Bw(i,t,e,n,s,r){let o=new Jt(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let x=S.backgroundBlurriness>0;w=t.get(w,x)}return w}function p(S){let w=!1,x=f(S);x===null?g(o,a):x&&x.isColor&&(g(x,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,w){let x=f(w);x&&(x.isCubeTexture||x.mapping===Pa)?(c===void 0&&(c=new ye(new hs(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Xs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fw.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(m0),c.material.toneMapped=se.getTransfer(x.colorSpace)!==he,(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ye(new Vs(2,2),new Di({name:"BackgroundMaterial",uniforms:Xs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=se.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,w){S.getRGB(Uh,_f(i)),e.buffers.color.setClear(Uh.r,Uh.g,Uh.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,w=1){o.set(S),a=w,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:p,addToRenderList:_,dispose:m}}function kw(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(D,B,k,I,U){let X=!1,W=u(D,I,k,B);r!==W&&(r=W,c(r.object)),X=f(D,I,k,U),X&&p(D,I,k,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(D,B,k,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,B,k,I){let U=I.wireframe===!0,X=n[B.id];X===void 0&&(X={},n[B.id]=X);let W=D.isInstancedMesh===!0?D.id:0,it=X[W];it===void 0&&(it={},X[W]=it);let H=it[k.id];H===void 0&&(H={},it[k.id]=H);let j=H[U];return j===void 0&&(j=d(l()),H[U]=j),j}function d(D){let B=[],k=[],I=[];for(let U=0;U<e;U++)B[U]=0,k[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,B,k,I){let U=r.attributes,X=B.attributes,W=0,it=k.getAttributes();for(let H in it)if(it[H].location>=0){let tt=U[H],Ct=X[H];if(Ct===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Ct=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Ct=D.instanceColor)),tt===void 0||tt.attribute!==Ct||Ct&&tt.data!==Ct.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function p(D,B,k,I){let U={},X=B.attributes,W=0,it=k.getAttributes();for(let H in it)if(it[H].location>=0){let tt=X[H];tt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let Ct={};Ct.attribute=tt,tt&&tt.data&&(Ct.data=tt.data),U[H]=Ct,W++}r.attributes=U,r.attributesNum=W,r.index=I}function _(){let D=r.newAttributes;for(let B=0,k=D.length;B<k;B++)D[B]=0}function g(D){m(D,0)}function m(D,B){let k=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;k[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),U[D]!==B&&(i.vertexAttribDivisor(D,B),U[D]=B)}function S(){let D=r.newAttributes,B=r.enabledAttributes;for(let k=0,I=B.length;k<I;k++)B[k]!==D[k]&&(i.disableVertexAttribArray(k),B[k]=0)}function w(D,B,k,I,U,X,W){W===!0?i.vertexAttribIPointer(D,B,k,U,X):i.vertexAttribPointer(D,B,k,I,U,X)}function x(D,B,k,I){_();let U=I.attributes,X=k.getAttributes(),W=B.defaultAttributeValues;for(let it in X){let H=X[it];if(H.location>=0){let j=U[it];if(j===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let tt=j.normalized,Ct=j.itemSize,mt=t.get(j);if(mt===void 0)continue;let Zt=mt.buffer,Wt=mt.type,dt=mt.bytesPerElement,Y=Wt===i.INT||Wt===i.UNSIGNED_INT||j.gpuType===th;if(j.isInterleavedBufferAttribute){let J=j.data,at=J.stride,zt=j.offset;if(J.isInstancedInterleavedBuffer){for(let wt=0;wt<H.locationSize;wt++)m(H.location+wt,J.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let wt=0;wt<H.locationSize;wt++)g(H.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let wt=0;wt<H.locationSize;wt++)w(H.location+wt,Ct/H.locationSize,Wt,tt,at*dt,(zt+Ct/H.locationSize*wt)*dt,Y)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)m(H.location+J,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<H.locationSize;J++)g(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let J=0;J<H.locationSize;J++)w(H.location+J,Ct/H.locationSize,Wt,tt,Ct*dt,Ct/H.locationSize*J*dt,Y)}}else if(W!==void 0){let tt=W[it];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(H.location,tt);break;case 3:i.vertexAttrib3fv(H.location,tt);break;case 4:i.vertexAttrib4fv(H.location,tt);break;default:i.vertexAttrib1fv(H.location,tt)}}}}S()}function M(){E();for(let D in n){let B=n[D];for(let k in B){let I=B[k];for(let U in I){let X=I[U];for(let W in X)h(X[W].object),delete X[W];delete I[U]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let B=n[D.id];for(let k in B){let I=B[k];for(let U in I){let X=I[U];for(let W in X)h(X[W].object),delete X[W];delete I[U]}}delete n[D.id]}function A(D){for(let B in n){let k=n[B];for(let I in k){let U=k[I];if(U[D.id]===void 0)continue;let X=U[D.id];for(let W in X)h(X[W].object),delete X[W];delete U[D.id]}}}function v(D){for(let B in n){let k=n[B],I=D.isInstancedMesh===!0?D.id:0,U=k[I];if(U!==void 0){for(let X in U){let W=U[X];for(let it in W)h(W[it].object),delete W[it];delete U[X]}delete k[I],Object.keys(k).length===0&&delete n[B]}}}function E(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function Uw(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function zw(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==ki&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pi&&A!==Bi&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:x,maxSamples:M,samples:T}}function Hw(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ei,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,w=S*4,x=m.clippingState||null;l.value=x,x=h(p,d,w,f);for(let M=0;M!==w;++M)x[M]=e[M];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,x=f;w!==_;++w,x+=4)o.copy(u[w]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var eo=4,Gw=6,Vw=20,Yw=256,Ya=new Jr,X_=new Jt,Sf=null,bf=0,Mf=0,wf=!1,qw=new N,$s=new N,no=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=qw}=r;Sf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sf,bf,Mf),this._renderer.xr.enabled=wf,t.scissorTest=!1,to(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:sn,format:ki,colorSpace:ia,depthBuffer:!1},s=$_(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ww(r)),this._blurMaterial=Xw(r,t,e),this._ggxMaterial=Jw(r,t,e)}return s}_compileMaterial(t){let e=new ye(new di,t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,n,s,r){let l=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(X_),u.toneMapping=en,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ye(new hs,new Un({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy(X_),m=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let M=this._cubeSize;to(s,x*M,w>2?M:0,M,M),u.setRenderTarget(s),m&&u.render(_,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_s||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=K_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;to(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-eo?n-p+eo:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,to(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(a,Ya),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,to(t,g,m,3*_,2*_),s.setRenderTarget(t),s.render(a,Ya)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-eo?s-this._lodMax+eo:0),d=4*(this._cubeSize-h);to(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(l,Ya)}};function Ww(i){let t=[],e=[],n=i,s=i-eo+1+Gw;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),_=new Float32Array(f*d*u);for(let m=0;m<u;m++){let S=m%3*2/3-1,w=m>2?0:-1,x=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];p.set(x,f*d*m);for(let M=0;M<d;M++){let T=h[M*2]*2-1,A=h[M*2+1]*2-1;m===0?$s.set(1,A,T):m===1?$s.set(-T,1,-A):m===2?$s.set(-T,A,1):m===3?$s.set(-1,A,-T):m===4?$s.set(-T,-1,A):$s.set(T,A,-1),$s.toArray(_,(m*d+M)*f)}}let g=new di;g.setAttribute("position",new Ci(p,f)),g.setAttribute("outputDirection",new Ci(_,f)),e.push(new ye(g,null)),n>eo&&n--}return{lodMeshes:e,sizeLods:t}}function $_(i,t,e){let n=new ui(i,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jw(i,t,e){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Xw(i,t,e){return new Di({name:"SphericalGaussianBlur",defines:{SAMPLES:Vw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Q_(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function K_(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Hh=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hs(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:vn});r.uniforms.tEquirect.value=e;let o=new ye(s,r),a=e.minFilter;return e.minFilter===ys&&(e.minFilter=Ye),new Xc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function $w(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Kc||f===Zc)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new Hh(p.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===Kc||f===Zc,_=f===_s||f===Ws;if(p||_){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new no(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new no(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,f){return f===Kc?d.mapping=_s:f===Zc&&(d.mapping=Ws),d}function l(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Qw(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ks("WebGLRenderer: "+n+" extension not supported."),s}}}function Kw(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,_=0;if(p===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let w=0,x=S.length;w<x;w+=3){let M=S[w+0],T=S[w+1],A=S[w+2];d.push(M,T,T,A,A,M)}}else{let S=p.array;_=p.version;for(let w=0,x=S.length/3-1;w<x;w+=3){let M=w+0,T=w+1,A=w+2;d.push(M,T,T,A,A,M)}}let g=new(p.count>=65535?la:aa)(d,1);g.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Zw(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function jw(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function t1(i,t,e){let n=new WeakMap,s=new Me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let x=a.attributes.position.count*w,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*M*4*u),A=new ra(T,x,M,u);A.type=Bi,A.needsUpdate=!0;let v=w*4;for(let R=0;R<u;R++){let D=g[R],B=m[R],k=S[R],I=x*M*4*R;for(let U=0;U<D.count;U++){let X=U*v;f===!0&&(s.fromBufferAttribute(D,U),T[I+X+0]=s.x,T[I+X+1]=s.y,T[I+X+2]=s.z,T[I+X+3]=0),p===!0&&(s.fromBufferAttribute(B,U),T[I+X+4]=s.x,T[I+X+5]=s.y,T[I+X+6]=s.z,T[I+X+7]=0),_===!0&&(s.fromBufferAttribute(k,U),T[I+X+8]=s.x,T[I+X+9]=s.y,T[I+X+10]=s.z,T[I+X+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new lt(x,M)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function e1(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var i1={[Zd]:"LINEAR_TONE_MAPPING",[jd]:"REINHARD_TONE_MAPPING",[tf]:"CINEON_TONE_MAPPING",[Na]:"ACES_FILMIC_TONE_MAPPING",[nf]:"AGX_TONE_MAPPING",[sf]:"NEUTRAL_TONE_MAPPING",[ef]:"CUSTOM_TONE_MAPPING"};function n1(i,t,e,n,s,r){let o=new ui(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new di;c.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let h=new Pc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ye(c,h),d=new Jr(-1,1,1,-1,0,1),f=null,p=null,_=!1,g,m=null,S=[],w=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),l!==null&&l.setSize(x,M);for(let T=0;T<S.length;T++){let A=S[T];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){S=x,w=S.length>0&&S[0].isRenderPass===!0;let M=o.width,T=o.height;S.length>0&&a===null&&(a=new ui(M,T,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new ui(M,T,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let v=S[A];v.setSize&&v.setSize(M,T)}},this.begin=function(x,M){if(_||x.toneMapping===en&&S.length===0)return!1;if(m=M,M!==null){let T=M.width,A=M.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return w===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=en,!0},this.hasRenderPass=function(){return w},this.end=function(x,M){x.toneMapping=g,_=!0;let T=o,A=a;for(let v=0;v<S.length;v++){let E=S[v];E.enabled!==!1&&(E.render(x,A,T,M),E.needsSwap!==!1&&(T=A,A=A===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},se.getTransfer(f)===he&&(h.defines.SRGB_TRANSFER="");let v=i1[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var _0=new ai,Cf=new cs(1,1),y0=new ra,x0=new wc,v0=new fa,Z_=[],j_=[],t0=new Float32Array(16),e0=new Float32Array(9),i0=new Float32Array(4);function so(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Z_[s];if(r===void 0&&(r=new Float32Array(s),Z_[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yh(i,t){let e=j_[t];e===void 0&&(e=new Int32Array(t),j_[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function o1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function a1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function l1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Le(e,n))return;i0.set(n),i.uniformMatrix2fv(this.addr,!1,i0),Ne(e,n)}}function c1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Le(e,n))return;e0.set(n),i.uniformMatrix3fv(this.addr,!1,e0),Ne(e,n)}}function h1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Le(e,n))return;t0.set(n),i.uniformMatrix4fv(this.addr,!1,t0),Ne(e,n)}}function u1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function f1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function p1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function g1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function m1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function _1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function y1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function x1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cf.compareFunction=e.isReversedDepthBuffer()?kh:Bh,r=Cf):r=_0,e.setTexture2D(t||r,s)}function v1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||x0,s)}function S1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||v0,s)}function b1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||y0,s)}function M1(i){switch(i){case 5126:return s1;case 35664:return r1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return h1;case 5124:case 35670:return u1;case 35667:case 35671:return d1;case 35668:case 35672:return f1;case 35669:case 35673:return p1;case 5125:return g1;case 36294:return m1;case 36295:return _1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return b1}}function w1(i,t){i.uniform1fv(this.addr,t)}function T1(i,t){let e=so(t,this.size,2);i.uniform2fv(this.addr,e)}function E1(i,t){let e=so(t,this.size,3);i.uniform3fv(this.addr,e)}function C1(i,t){let e=so(t,this.size,4);i.uniform4fv(this.addr,e)}function A1(i,t){let e=so(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function R1(i,t){let e=so(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function D1(i,t){let e=so(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function I1(i,t){i.uniform1iv(this.addr,t)}function O1(i,t){i.uniform2iv(this.addr,t)}function L1(i,t){i.uniform3iv(this.addr,t)}function N1(i,t){i.uniform4iv(this.addr,t)}function P1(i,t){i.uniform1uiv(this.addr,t)}function F1(i,t){i.uniform2uiv(this.addr,t)}function B1(i,t){i.uniform3uiv(this.addr,t)}function k1(i,t){i.uniform4uiv(this.addr,t)}function U1(i,t,e){let n=this.cache,s=t.length,r=Yh(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Cf:o=_0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function z1(i,t,e){let n=this.cache,s=t.length,r=Yh(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||x0,r[o])}function H1(i,t,e){let n=this.cache,s=t.length,r=Yh(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||v0,r[o])}function G1(i,t,e){let n=this.cache,s=t.length,r=Yh(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||y0,r[o])}function V1(i){switch(i){case 5126:return w1;case 35664:return T1;case 35665:return E1;case 35666:return C1;case 35674:return A1;case 35675:return R1;case 35676:return D1;case 5124:case 35670:return I1;case 35667:case 35671:return O1;case 35668:case 35672:return L1;case 35669:case 35673:return N1;case 5125:return P1;case 36294:return F1;case 36295:return B1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return G1}}var Af=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M1(e.type)}},Rf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V1(e.type)}},Df=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Tf=/(\w+)(\])?(\[|\.)?/g;function n0(i,t){i.seq.push(t),i.map[t.id]=t}function Y1(i,t,e){let n=i.name,s=n.length;for(Tf.lastIndex=0;;){let r=Tf.exec(n),o=Tf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){n0(e,c===void 0?new Af(a,i,t):new Rf(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Df(a),n0(e,u)),e=u}}}var io=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Y1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function s0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var q1=37297,W1=0;function J1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var r0=new Xt;function X1(i){se._getMatrix(r0,se.workingColorSpace,i);let t=`mat3( ${r0.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case na:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function o0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+J1(i.getShaderSource(t),a)}else return r}function $1(i,t){let e=X1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Q1={[Zd]:"Linear",[jd]:"Reinhard",[tf]:"Cineon",[Na]:"ACESFilmic",[nf]:"AgX",[sf]:"Neutral",[ef]:"Custom"};function K1(i,t){let e=Q1[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zh=new N;function Z1(){se.getLuminanceCoefficients(zh);let i=zh.x.toFixed(4),t=zh.y.toFixed(4),e=zh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function tT(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eT(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Wa(i){return i!==""}function a0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function l0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iT=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(i){return i.replace(iT,sT)}var nT=new Map;function sT(i,t){let e=ee[t];if(e===void 0){let n=nT.get(t);if(n!==void 0)e=ee[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return If(e)}var rT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(i){return i.replace(rT,oT)}function oT(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function h0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var aT={[La]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function lT(i){return aT[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cT={[_s]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE_UV"};function hT(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cT[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var uT={[Ws]:"ENVMAP_MODE_REFRACTION"};function dT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fT={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[M_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};function pT(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fT[i.combine]||"ENVMAP_BLENDING_NONE"}function gT(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function mT(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=lT(e),c=hT(e),h=dT(e),u=pT(e),d=gT(e),f=j1(e),p=tT(r),_=s.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Wa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Wa).join(`
`),m.length>0&&(m+=`
`)):(g=[h0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),m=[h0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==en?"#define TONE_MAPPING":"",e.toneMapping!==en?ee.tonemapping_pars_fragment:"",e.toneMapping!==en?K1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,$1("linearToOutputTexel",e.outputColorSpace),Z1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wa).join(`
`)),o=If(o),o=a0(o,e),o=l0(o,e),a=If(a),a=a0(a,e),a=l0(a,e),o=c0(o),a=c0(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=S+g+o,x=S+m+a,M=s0(s,s.VERTEX_SHADER,w),T=s0(s,s.FRAGMENT_SHADER,x);s.attachShader(_,M),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(D){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(M)||"",I=s.getShaderInfoLog(T)||"",U=B.trim(),X=k.trim(),W=I.trim(),it=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,T);else{let j=o0(s,M,"vertex"),tt=o0(s,T,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+j+`
`+tt)}else U!==""?Ut("WebGLProgram: Program Info Log:",U):(X===""||W==="")&&(H=!1);H&&(D.diagnostics={runnable:it,programLog:U,vertexShader:{log:X,prefix:g},fragmentShader:{log:W,prefix:m}})}s.deleteShader(M),s.deleteShader(T),v=new io(s,_),E=eT(s,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,q1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var _T=0,Of=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lf(t),e.set(t,n)),n}},Lf=class{constructor(t){this.id=_T++,this.code=t,this.usedTimes=0}};function yT(i){return i===vs||i===Ha||i===Ga}function xT(i,t,e,n,s,r){let o=new oa,a=new Of,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,E,R,D,B,k){let I=D.fog,U=B.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,it=t.get(v.envMap||X,W),H=it&&it.mapping===Pa?it.image.height:null,j=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ut("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ct=tt!==void 0?tt.length:0,mt=0;U.morphAttributes.position!==void 0&&(mt=1),U.morphAttributes.normal!==void 0&&(mt=2),U.morphAttributes.color!==void 0&&(mt=3);let Zt,Wt,dt,Y;if(j){let xe=bn[j];Zt=xe.vertexShader,Wt=xe.fragmentShader}else{Zt=v.vertexShader,Wt=v.fragmentShader;let xe=a.getVertexShaderStage(v),le=a.getFragmentShaderStage(v);a.update(v,xe,le),dt=xe.id,Y=le.id}let J=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),zt=B.isInstancedMesh===!0,wt=B.isBatchedMesh===!0,Vt=!!v.map,oe=!!v.matcap,nt=!!it,ot=!!v.aoMap,ct=!!v.lightMap,ht=!!v.bumpMap&&v.wireframe===!1,gt=!!v.normalMap,Ht=!!v.displacementMap,kt=!!v.emissiveMap,qt=!!v.metalnessMap,$t=!!v.roughnessMap,O=v.anisotropy>0,ae=v.clearcoat>0,ie=v.dispersion>0,C=v.retroreflectivity>0,y=v.iridescence>0,z=v.sheen>0,q=v.transmission>0,K=O&&!!v.anisotropyMap,ft=ae&&!!v.clearcoatMap,pt=ae&&!!v.clearcoatNormalMap,Z=ae&&!!v.clearcoatRoughnessMap,st=y&&!!v.iridescenceMap,_t=y&&!!v.iridescenceThicknessMap,Pt=z&&!!v.sheenColorMap,St=z&&!!v.sheenRoughnessMap,yt=!!v.specularMap,Ft=!!v.specularColorMap,Gt=!!v.specularIntensityMap,Qt=q&&!!v.transmissionMap,F=q&&!!v.thicknessMap,xt=!!v.gradientMap,et=!!v.alphaMap,vt=v.alphaTest>0,Et=!!v.alphaHash,rt=!!v.extensions,Bt=en;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Lt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:Zt,fragmentShader:Wt,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:wt,batchingColor:wt&&B._colorsTexture!==null,instancing:zt,instancingColor:zt&&B.instanceColor!==null,instancingMorph:zt&&B.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:oe,envMap:nt,envMapMode:nt&&it.mapping,envMapCubeUVHeight:H,aoMap:ot,lightMap:ct,bumpMap:ht,normalMap:gt,displacementMap:Ht,emissiveMap:kt,normalMapObjectSpace:gt&&v.normalMapType===C_,normalMapTangentSpace:gt&&v.normalMapType===Va,packedNormalMap:gt&&v.normalMapType===Va&&yT(v.normalMap.format),metalnessMap:qt,roughnessMap:$t,anisotropy:O,anisotropyMap:K,clearcoat:ae,clearcoatMap:ft,clearcoatNormalMap:pt,clearcoatRoughnessMap:Z,dispersion:ie,retroreflection:C,iridescence:y,iridescenceMap:st,iridescenceThicknessMap:_t,sheen:z,sheenColorMap:Pt,sheenRoughnessMap:St,specularMap:yt,specularColorMap:Ft,specularIntensityMap:Gt,transmission:q,transmissionMap:Qt,thicknessMap:F,gradientMap:xt,opaque:v.transparent===!1&&v.blending===Kr&&v.alphaToCoverage===!1,alphaMap:et,alphaTest:vt,alphaHash:Et,combine:v.combine,mapUv:Vt&&p(v.map.channel),aoMapUv:ot&&p(v.aoMap.channel),lightMapUv:ct&&p(v.lightMap.channel),bumpMapUv:ht&&p(v.bumpMap.channel),normalMapUv:gt&&p(v.normalMap.channel),displacementMapUv:Ht&&p(v.displacementMap.channel),emissiveMapUv:kt&&p(v.emissiveMap.channel),metalnessMapUv:qt&&p(v.metalnessMap.channel),roughnessMapUv:$t&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:ft&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&p(v.sheenRoughnessMap.channel),specularMapUv:yt&&p(v.specularMap.channel),specularColorMapUv:Ft&&p(v.specularColorMap.channel),specularIntensityMapUv:Gt&&p(v.specularIntensityMap.channel),transmissionMapUv:Qt&&p(v.transmissionMap.channel),thicknessMapUv:F&&p(v.thicknessMap.channel),alphaMapUv:et&&p(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(gt||O),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!U.attributes.uv&&(Vt||et),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:at,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:mt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&se.getTransfer(v.map.colorSpace)===he,decodeVideoTextureEmissive:kt&&v.emissiveMap.isVideoTexture===!0&&se.getTransfer(v.emissiveMap.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===fi,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(E,v),S(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function w(v){let E=f[v.type],R;if(E){let D=bn[E];R=q_.clone(D.uniforms)}else R=v.uniforms;return R}function x(v,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new mT(i,E,v,s),c.push(R),h.set(E,R)),R}function M(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:x,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function vT(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ST(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function u0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function d0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,g,m){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=o(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=g,S.group=m),t++,S}function l(d,f,p,_,g,m,S){S.reversedDepth===!0&&(g=-g);let w=a(d,f,p,_,g,m);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(d,f,p,_,g,m){let S=a(d,f,p,_,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||ST),n.length>1&&n.sort(f||u0),s.length>1&&s.sort(f||u0)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function bT(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new d0,i.set(n,[o])):s>=r.length?(o=new d0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function MT(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Jt};break;case"SpotLight":e={position:new N,direction:new N,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function wT(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var TT=0;function ET(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function CT(i){let t=new MT,e=wT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new pe,o=new pe;function a(c){let h=0,u=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,S=0,w=0,x=0,M=0,T=0,A=0,v=0,E=0,R=0;c.sort(ET);for(let B=0,k=c.length;B<k;B++){let I=c[B],U=I.color,X=I.intensity,W=I.distance,it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===vs?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*X,u+=U.g*X,d+=U.b*X;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],X);R++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=it;let Ct=j.getViewportCount();for(let mt=0;mt<Ct;mt++)n.sunShadowMatrix[_+mt]=j.getMatrix(mt),n.sunShadowCascade[_+mt]=j._cascadeData[mt];_+=Ct,p++}n.sun[f]=H,f++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[g]=tt,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=I.shadow.matrix,M++}n.directional[g]=H,g++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(U).multiplyScalar(X),H.distance=W,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[S]=H;let j=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,j.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[S]=j.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[S]=tt,n.spotShadowMap[S]=it,A++}S++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(U).multiplyScalar(X),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=H,w++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let j=I.shadow,tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=it,n.pointShadowMatrix[m]=I.shadow.matrix,T++}n.point[m]=H,m++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(X),H.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[x]=H,x++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==S||D.rectAreaLength!==w||D.hemiLength!==x||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==T||D.numSpotShadows!==A||D.numSpotMaps!==v||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=S,n.rectArea.length=w,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=S,D.rectAreaLength=w,D.hemiLength=x,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=T,D.numSpotShadows=A,D.numSpotMaps=v,D.numLightProbes=R,n.version=TT++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let x=c[S];if(x.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),u++}else if(x.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function f0(i){let t=new CT(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function AT(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new f0(i),t.set(s,[a])):r>=o.length?(a=new f0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var RT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DT=`uniform sampler2D shadow_pass;
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
}`,IT=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],OT=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],p0=new pe,qa=new N,Ef=new N;function LT(i,t,e){let n=new Hr,s=new lt,r=new lt,o=new Me,a=new Fc,l=new Bc,c={},h=e.maxTextureSize,u={[ms]:qe,[qe]:ms,[fi]:fi},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:RT,fragmentShader:DT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new di;p.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ye(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let m=this.type;this.render=function(T,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===s_&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=La);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(vn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=m!==this.type;k&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=T.length;I<U;I++){let X=T[I],W=X.shadow;if(W===void 0){Ut("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let it=W.getFrameExtents();s.multiply(it),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,W.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=H,W.map===null||k===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Qr){if(X.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ui(s.x,s.y,{format:vs,type:sn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new cs(s.x,s.y,Bi),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=mn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ue,W.map.depthTexture.magFilter=Ue}else X.isPointLight?(W.map=new Hh(s.x),W.map.depthTexture=new Ac(s.x,nn)):(W.map=new ui(s.x,s.y),W.map.depthTexture=new cs(s.x,s.y,nn)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=mn,this.type===La?(W.map.depthTexture.compareFunction=H?kh:Bh,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ue,W.map.depthTexture.magFilter=Ue);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,v);for(let tt=0;tt<j;tt++){let Ct=W.getCamera(tt);if(X.isPointLight){let mt=W.camera,Zt=W.matrix,Wt=X.distance||mt.far;Wt!==mt.far&&(mt.far=Wt,mt.updateProjectionMatrix()),qa.setFromMatrixPosition(X.matrixWorld),mt.position.copy(qa),Ef.copy(mt.position),Ef.add(IT[tt]),mt.up.copy(OT[tt]),mt.lookAt(Ef),mt.updateMatrixWorld(),Zt.makeTranslation(-qa.x,-qa.y,-qa.z),p0.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(p0,mt.coordinateSystem,mt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(W.map),i.clear());let mt=W.getViewport(tt);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),B.viewport(o)}n=W.getFrustum(tt),x(A,v,Ct,X,this.type)}W.isPointLightShadow!==!0&&this.type===Qr&&S(W,v),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,R,D)};function S(T,A){let v=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new ui(s.x,s.y,{format:vs,type:sn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,v,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,v,f,_,null)}function w(T,A,v,E){let R=null,D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=R.uuid,k=A.uuid,I=c[B];I===void 0&&(I={},c[B]=I);let U=I[k];U===void 0&&(U=R.clone(),I[k]=U,A.addEventListener("dispose",M)),R=U}if(R.visible=A.visible,R.wireframe=A.wireframe,E===Qr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=i.properties.get(R);B.light=v}return R}function x(T,A,v,E,R){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Qr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let k=t.update(T),I=T.material;if(Array.isArray(I)){let U=k.groups;for(let X=0,W=U.length;X<W;X++){let it=U[X],H=I[it.materialIndex];if(H&&H.visible){let j=w(T,H,E,R);T.onBeforeShadow(i,T,A,v,k,j,it),i.renderBufferDirect(v,null,k,j,T,it),T.onAfterShadow(i,T,A,v,k,j,it)}}}else if(I.visible){let U=w(T,I,E,R);T.onBeforeShadow(i,T,A,v,k,U,null),i.renderBufferDirect(v,null,k,U,T,null),T.onAfterShadow(i,T,A,v,k,U,null)}}let B=T.children;for(let k=0,I=B.length;k<I;k++)x(B[k],A,v,E,R)}function M(T){T.target.removeEventListener("dispose",M);for(let v in c){let E=c[v],R=T.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function NT(i,t){function e(){let F=!1,xt=new Me,et=null,vt=new Me(0,0,0,0);return{setMask:function(Et){et!==Et&&!F&&(i.colorMask(Et,Et,Et,Et),et=Et)},setLocked:function(Et){F=Et},setClear:function(Et,rt,Bt,Lt,xe){xe===!0&&(Et*=Lt,rt*=Lt,Bt*=Lt),xt.set(Et,rt,Bt,Lt),vt.equals(xt)===!1&&(i.clearColor(Et,rt,Bt,Lt),vt.copy(xt))},reset:function(){F=!1,et=null,vt.set(-1,0,0,0)}}}function n(){let F=!1,xt=!1,et=null,vt=null,Et=null;return{setReversed:function(rt){if(xt!==rt){let Bt=t.get("EXT_clip_control");rt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),xt=rt;let Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return xt},setTest:function(rt){rt?J(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(rt){et!==rt&&!F&&(i.depthMask(rt),et=rt)},setFunc:function(rt){if(xt&&(rt=U_[rt]),vt!==rt){switch(rt){case fc:i.depthFunc(i.NEVER);break;case pc:i.depthFunc(i.ALWAYS);break;case gc:i.depthFunc(i.LESS);break;case Nr:i.depthFunc(i.LEQUAL);break;case mc:i.depthFunc(i.EQUAL);break;case _c:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case xc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=rt}},setLocked:function(rt){F=rt},setClear:function(rt){Et!==rt&&(Et=rt,xt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){F=!1,et=null,vt=null,Et=null,xt=!1}}}function s(){let F=!1,xt=null,et=null,vt=null,Et=null,rt=null,Bt=null,Lt=null,xe=null;return{setTest:function(le){F||(le?J(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(le){xt!==le&&!F&&(i.stencilMask(le),xt=le)},setFunc:function(le,zi,on){(et!==le||vt!==zi||Et!==on)&&(i.stencilFunc(le,zi,on),et=le,vt=zi,Et=on)},setOp:function(le,zi,on){(rt!==le||Bt!==zi||Lt!==on)&&(i.stencilOp(le,zi,on),rt=le,Bt=zi,Lt=on)},setLocked:function(le){F=le},setClear:function(le){xe!==le&&(i.clearStencil(le),xe=le)},reset:function(){F=!1,xt=null,et=null,vt=null,Et=null,rt=null,Bt=null,Lt=null,xe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,S=null,w=null,x=null,M=null,T=null,A=null,v=new Jt(0,0,0),E=0,R=!1,D=null,B=null,k=null,I=null,U=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=it>=1):H.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=it>=2);let j=null,tt={},Ct=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Zt=new Me().fromArray(Ct),Wt=new Me().fromArray(mt);function dt(F,xt,et,vt){let Et=new Uint8Array(4),rt=i.createTexture();i.bindTexture(F,rt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<et;Bt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(xt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return rt}let Y={};Y[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Nr),ht(!1),gt(Wd),J(i.CULL_FACE),ot(vn);function J(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function at(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function zt(F,xt){return d[F]!==xt?(i.bindFramebuffer(F,xt),d[F]=xt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function wt(F,xt){let et=p,vt=!1;if(F){et=f.get(xt),et===void 0&&(et=[],f.set(xt,et));let Et=F.textures;if(et.length!==Et.length||et[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Bt=Et.length;rt<Bt;rt++)et[rt]=i.COLOR_ATTACHMENT0+rt;et.length=Et.length,vt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,vt=!0);vt&&i.drawBuffers(et)}function Vt(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let oe={[qs]:i.FUNC_ADD,[o_]:i.FUNC_SUBTRACT,[a_]:i.FUNC_REVERSE_SUBTRACT};oe[l_]=i.MIN,oe[c_]=i.MAX;let nt={[h_]:i.ZERO,[u_]:i.ONE,[d_]:i.SRC_COLOR,[Qd]:i.SRC_ALPHA,[y_]:i.SRC_ALPHA_SATURATE,[m_]:i.DST_COLOR,[p_]:i.DST_ALPHA,[f_]:i.ONE_MINUS_SRC_COLOR,[Kd]:i.ONE_MINUS_SRC_ALPHA,[__]:i.ONE_MINUS_DST_COLOR,[g_]:i.ONE_MINUS_DST_ALPHA,[x_]:i.CONSTANT_COLOR,[v_]:i.ONE_MINUS_CONSTANT_COLOR,[S_]:i.CONSTANT_ALPHA,[b_]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(F,xt,et,vt,Et,rt,Bt,Lt,xe,le){if(F===vn){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),F!==r_){if(F!==m||le!==R){if((S!==qs||M!==qs)&&(i.blendEquation(i.FUNC_ADD),S=qs,M=qs),le)switch(F){case Kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jd:i.blendFunc(i.ONE,i.ONE);break;case Xd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $d:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",F);break}else switch(F){case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xd:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $d:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",F);break}w=null,x=null,T=null,A=null,v.set(0,0,0),E=0,m=F,R=le}return}Et=Et||xt,rt=rt||et,Bt=Bt||vt,(xt!==S||Et!==M)&&(i.blendEquationSeparate(oe[xt],oe[Et]),S=xt,M=Et),(et!==w||vt!==x||rt!==T||Bt!==A)&&(i.blendFuncSeparate(nt[et],nt[vt],nt[rt],nt[Bt]),w=et,x=vt,T=rt,A=Bt),(Lt.equals(v)===!1||xe!==E)&&(i.blendColor(Lt.r,Lt.g,Lt.b,xe),v.copy(Lt),E=xe),m=F,R=!1}function ct(F,xt){F.side===fi?at(i.CULL_FACE):J(i.CULL_FACE);let et=F.side===qe;xt&&(et=!et),ht(et),F.blending===Kr&&F.transparent===!1?ot(vn):ot(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let vt=F.stencilWrite;a.setTest(vt),vt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),kt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function gt(F){F!==i_?(J(i.CULL_FACE),F!==B&&(F===Wd?i.cullFace(i.BACK):F===n_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),B=F}function Ht(F){F!==k&&(W&&i.lineWidth(F),k=F)}function kt(F,xt,et){F?(J(i.POLYGON_OFFSET_FILL),(I!==xt||U!==et)&&(I=xt,U=et,o.getReversed()&&(xt=-xt),i.polygonOffset(xt,et))):at(i.POLYGON_OFFSET_FILL)}function qt(F){F?J(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function $t(F){F===void 0&&(F=i.TEXTURE0+X-1),j!==F&&(i.activeTexture(F),j=F)}function O(F,xt,et){et===void 0&&(j===null?et=i.TEXTURE0+X-1:et=j);let vt=tt[et];vt===void 0&&(vt={type:void 0,texture:void 0},tt[et]=vt),(vt.type!==F||vt.texture!==xt)&&(j!==et&&(i.activeTexture(et),j=et),i.bindTexture(F,xt||Y[F]),vt.type=F,vt.texture=xt)}function ae(){let F=tt[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function y(){try{i.texSubImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function ft(){try{i.texStorage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function pt(){try{i.texStorage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function Z(){try{i.texImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function st(){try{i.texImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function _t(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function Pt(F,xt){u[F]!==xt&&(i.pixelStorei(F,xt),u[F]=xt)}function St(F){Zt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Zt.copy(F))}function yt(F){Wt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Wt.copy(F))}function Ft(F,xt){let et=c.get(xt);et===void 0&&(et=new WeakMap,c.set(xt,et));let vt=et.get(F);vt===void 0&&(vt=i.getUniformBlockIndex(xt,F.name),et.set(F,vt))}function Gt(F,xt){let vt=c.get(xt).get(F);l.get(xt)!==vt&&(i.uniformBlockBinding(xt,vt,F.__bindingPointIndex),l.set(xt,vt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,tt={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,S=null,w=null,x=null,M=null,T=null,A=null,v=new Jt(0,0,0),E=0,R=!1,D=null,B=null,k=null,I=null,U=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:at,bindFramebuffer:zt,drawBuffers:wt,useProgram:Vt,setBlending:ot,setMaterial:ct,setFlipSided:ht,setCullFace:gt,setLineWidth:Ht,setPolygonOffset:kt,setScissorTest:qt,activeTexture:$t,bindTexture:O,unbindTexture:ae,compressedTexImage2D:ie,compressedTexImage3D:C,texImage2D:Z,texImage3D:st,pixelStorei:Pt,getParameter:_t,updateUBOMapping:Ft,uniformBlockBinding:Gt,texStorage2D:ft,texStorage3D:pt,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:St,viewport:yt,reset:Qt}}function PT(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return p?new OffscreenCanvas(C,y):sa("canvas")}function g(C,y,z){let q=1,K=ie(C);if((K.width>z||K.height>z)&&(q=z/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ft=Math.floor(q*K.width),pt=Math.floor(q*K.height);d===void 0&&(d=_(ft,pt));let Z=y?_(ft,pt):d;return Z.width=ft,Z.height=pt,Z.getContext("2d").drawImage(C,0,0,ft,pt),Ut("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ft+"x"+pt+")."),Z}else return"data"in C&&Ut("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function S(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,y,z,q,K,ft=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pt;q&&(pt=t.get("EXT_texture_norm16"),pt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8),z===i.UNSIGNED_SHORT&&pt&&(Z=pt.R16_EXT),z===i.SHORT&&pt&&(Z=pt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),y===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8),z===i.UNSIGNED_SHORT&&pt&&(Z=pt.RG16_EXT),z===i.SHORT&&pt&&(Z=pt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_SHORT&&pt&&(Z=pt.RGB16_EXT),z===i.SHORT&&pt&&(Z=pt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),y===i.RGBA){let st=ft?na:se.getTransfer(K);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=st===he?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&pt&&(Z=pt.RGBA16_EXT),z===i.SHORT&&pt&&(Z=pt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(C,y){let z;return C?y===null||y===nn||y===jr?z=i.DEPTH24_STENCIL8:y===Bi?z=i.DEPTH32F_STENCIL8:y===Zr&&(z=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===nn||y===jr?z=i.DEPTH_COMPONENT24:y===Bi?z=i.DEPTH_COMPONENT32F:y===Zr&&(z=i.DEPTH_COMPONENT16),z}function T(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ue&&C.minFilter!==Ye?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function v(C){let y=C.target;y.removeEventListener("dispose",v),D(y)}function E(C){let y=n.get(C);if(y.__webglInit===void 0)return;let z=C.source,q=f.get(z);if(q){let K=q[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(C),Object.keys(q).length===0&&f.delete(z)}n.remove(C)}function R(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let z=C.source,q=f.get(z);delete q[y.__cacheKey],o.memory.textures--}function D(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let K=0;K<y.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(y.__webglFramebuffer[q][K]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=C.textures;for(let q=0,K=z.length;q<K;q++){let ft=n.get(z[q]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(C)}let B=0;function k(){B=0}function I(){return B}function U(C){B=C}function X(){let C=B;return C>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,C}function W(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function it(C,y){let z=n.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let q=C.image;if(q===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{at(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function H(C,y){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){at(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function j(C,y){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){at(z,C,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function tt(C,y){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){zt(z,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let Ct={[Pr]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[vc]:i.MIRRORED_REPEAT},mt={[Ue]:i.NEAREST,[T_]:i.NEAREST_MIPMAP_NEAREST,[Fa]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[jc]:i.LINEAR_MIPMAP_NEAREST,[ys]:i.LINEAR_MIPMAP_LINEAR},Zt={[R_]:i.NEVER,[N_]:i.ALWAYS,[D_]:i.LESS,[Bh]:i.LEQUAL,[I_]:i.EQUAL,[kh]:i.GEQUAL,[O_]:i.GREATER,[L_]:i.NOTEQUAL};function Wt(C,y){if(y.type===Bi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ye||y.magFilter===jc||y.magFilter===Fa||y.magFilter===ys||y.minFilter===Ye||y.minFilter===jc||y.minFilter===Fa||y.minFilter===ys)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ct[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ct[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ct[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,mt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,mt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Zt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ue||y.minFilter!==Fa&&y.minFilter!==ys||y.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function dt(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let q=y.source,K=f.get(q);K===void 0&&(K={},f.set(q,K));let ft=W(y);if(ft!==C.__cacheKey){K[ft]===void 0&&(K[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[ft].usedTimes++;let pt=K[C.__cacheKey];pt!==void 0&&(K[C.__cacheKey].usedTimes--,pt.usedTimes===0&&R(y)),C.__cacheKey=ft,C.__webglTexture=K[ft].texture}return z}function Y(C,y,z){return Math.floor(Math.floor(C/z)/y)}function J(C,y,z,q){let ft=C.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,q,y.data);else{ft.sort((Pt,St)=>Pt.start-St.start);let pt=0;for(let Pt=1;Pt<ft.length;Pt++){let St=ft[pt],yt=ft[Pt],Ft=St.start+St.count,Gt=Y(yt.start,y.width,4),Qt=Y(St.start,y.width,4);yt.start<=Ft+1&&Gt===Qt&&Y(yt.start+yt.count-1,y.width,4)===Gt?St.count=Math.max(St.count,yt.start+yt.count-St.start):(++pt,ft[pt]=yt)}ft.length=pt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Pt=0,St=ft.length;Pt<St;Pt++){let yt=ft[Pt],Ft=Math.floor(yt.start/4),Gt=Math.ceil(yt.count/4),Qt=Ft%y.width,F=Math.floor(Ft/y.width),xt=Gt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Qt,F,xt,et,z,q,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function at(C,y,z){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);let K=dt(C,y),ft=y.source;e.bindTexture(q,C.__webglTexture,i.TEXTURE0+z);let pt=n.get(ft);if(ft.version!==pt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let et=se.getPrimaries(se.workingColorSpace),vt=y.colorSpace===Hn?null:se.getPrimaries(y.colorSpace),Et=y.colorSpace===Hn||et===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let st=g(y.image,!1,s.maxTextureSize);st=ae(y,st);let _t=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type),St=x(y.internalFormat,_t,Pt,y.normalized,y.colorSpace,y.isVideoTexture);Wt(q,y);let yt,Ft=y.mipmaps,Gt=y.isVideoTexture!==!0,Qt=pt.__version===void 0||K===!0,F=ft.dataReady,xt=T(y,st);if(y.isDepthTexture)St=M(y.format===xs,y.type),Qt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,St,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,St,st.width,st.height,0,_t,Pt,null));else if(y.isDataTexture)if(Ft.length>0){Gt&&Qt&&e.texStorage2D(i.TEXTURE_2D,xt,St,Ft[0].width,Ft[0].height);for(let et=0,vt=Ft.length;et<vt;et++)yt=Ft[et],Gt?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,yt.width,yt.height,_t,Pt,yt.data):e.texImage2D(i.TEXTURE_2D,et,St,yt.width,yt.height,0,_t,Pt,yt.data);y.generateMipmaps=!1}else Gt?(Qt&&e.texStorage2D(i.TEXTURE_2D,xt,St,st.width,st.height),F&&J(y,st,_t,Pt)):e.texImage2D(i.TEXTURE_2D,0,St,st.width,st.height,0,_t,Pt,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Gt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,St,Ft[0].width,Ft[0].height,st.depth);for(let et=0,vt=Ft.length;et<vt;et++)if(yt=Ft[et],y.format!==ki)if(_t!==null)if(Gt){if(F)if(y.layerUpdates.size>0){let Et=vf(yt.width,yt.height,y.format,y.type);for(let rt of y.layerUpdates){let Bt=yt.data.subarray(rt*Et/yt.data.BYTES_PER_ELEMENT,(rt+1)*Et/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,rt,yt.width,yt.height,1,_t,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,yt.width,yt.height,st.depth,_t,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,St,yt.width,yt.height,st.depth,0,yt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,yt.width,yt.height,st.depth,_t,Pt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,St,yt.width,yt.height,st.depth,0,_t,Pt,yt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Gt&&Qt&&e.texStorage2D(i.TEXTURE_2D,xt,St,Ft[0].width,Ft[0].height);for(let et=0,vt=Ft.length;et<vt;et++)yt=Ft[et],y.format!==ki?_t!==null?Gt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,yt.width,yt.height,_t,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,St,yt.width,yt.height,0,yt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,yt.width,yt.height,_t,Pt,yt.data):e.texImage2D(i.TEXTURE_2D,et,St,yt.width,yt.height,0,_t,Pt,yt.data)}else if(y.isDataArrayTexture)if(Gt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,St,st.width,st.height,st.depth),F)if(y.layerUpdates.size>0){let et=vf(st.width,st.height,y.format,y.type);for(let vt of y.layerUpdates){let Et=st.data.subarray(vt*et/st.data.BYTES_PER_ELEMENT,(vt+1)*et/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,st.width,st.height,1,_t,Pt,Et)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Pt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,st.width,st.height,st.depth,0,_t,Pt,st.data);else if(y.isData3DTexture)Gt?(Qt&&e.texStorage3D(i.TEXTURE_3D,xt,St,st.width,st.height,st.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Pt,st.data)):e.texImage3D(i.TEXTURE_3D,0,St,st.width,st.height,st.depth,0,_t,Pt,st.data);else if(y.isFramebufferTexture){if(Qt)if(Gt)e.texStorage2D(i.TEXTURE_2D,xt,St,st.width,st.height);else{let et=st.width,vt=st.height;for(let Et=0;Et<xt;Et++)e.texImage2D(i.TEXTURE_2D,Et,St,et,vt,0,_t,Pt,null),et>>=1,vt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),st.parentNode!==et){et.appendChild(st),u.add(y),et.onpaint=vt=>{let Et=vt.changedElements;for(let rt of u)Et.includes(rt.image)&&(rt.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let Et=i.RGBA,rt=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,rt,Bt,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Gt&&Qt){let et=ie(Ft[0]);e.texStorage2D(i.TEXTURE_2D,xt,St,et.width,et.height)}for(let et=0,vt=Ft.length;et<vt;et++)yt=Ft[et],Gt?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t,Pt,yt):e.texImage2D(i.TEXTURE_2D,et,St,_t,Pt,yt);y.generateMipmaps=!1}else if(Gt){if(Qt){let et=ie(st);e.texStorage2D(i.TEXTURE_2D,xt,St,et.width,et.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Pt,st)}else e.texImage2D(i.TEXTURE_2D,0,St,_t,Pt,st);m(y)&&S(q),pt.__version=ft.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function zt(C,y,z){if(y.image.length!==6)return;let q=dt(C,y),K=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let ft=n.get(K);if(K.version!==ft.__version||q===!0){e.activeTexture(i.TEXTURE0+z);let pt=se.getPrimaries(se.workingColorSpace),Z=y.colorSpace===Hn?null:se.getPrimaries(y.colorSpace),st=y.colorSpace===Hn||pt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let _t=y.isCompressedTexture||y.image[0].isCompressedTexture,Pt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let rt=0;rt<6;rt++)!_t&&!Pt?St[rt]=g(y.image[rt],!0,s.maxCubemapSize):St[rt]=Pt?y.image[rt].image:y.image[rt],St[rt]=ae(y,St[rt]);let yt=St[0],Ft=r.convert(y.format,y.colorSpace),Gt=r.convert(y.type),Qt=x(y.internalFormat,Ft,Gt,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,xt=ft.__version===void 0||q===!0,et=K.dataReady,vt=T(y,yt);Wt(i.TEXTURE_CUBE_MAP,y);let Et;if(_t){F&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Qt,yt.width,yt.height);for(let rt=0;rt<6;rt++){Et=St[rt].mipmaps;for(let Bt=0;Bt<Et.length;Bt++){let Lt=Et[Bt];y.format!==ki?Ft!==null?F?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Lt.width,Lt.height,Ft,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,Qt,Lt.width,Lt.height,0,Lt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Lt.width,Lt.height,Ft,Gt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,Qt,Lt.width,Lt.height,0,Ft,Gt,Lt.data)}}}else{if(Et=y.mipmaps,F&&xt){Et.length>0&&vt++;let rt=ie(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Qt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Pt){F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,St[rt].width,St[rt].height,Ft,Gt,St[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,St[rt].width,St[rt].height,0,Ft,Gt,St[rt].data);for(let Bt=0;Bt<Et.length;Bt++){let xe=Et[Bt].image[rt].image;F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,xe.width,xe.height,Ft,Gt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,Qt,xe.width,xe.height,0,Ft,Gt,xe.data)}}else{F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ft,Gt,St[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,Ft,Gt,St[rt]);for(let Bt=0;Bt<Et.length;Bt++){let Lt=Et[Bt];F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,Ft,Gt,Lt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,Qt,Ft,Gt,Lt.image[rt])}}}m(y)&&S(i.TEXTURE_CUBE_MAP),ft.__version=K.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function wt(C,y,z,q,K,ft){let pt=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),st=x(z.internalFormat,pt,Z,z.normalized,z.colorSpace),_t=n.get(y),Pt=n.get(z);if(Pt.__renderTarget=y,!_t.__hasExternalTextures){let St=Math.max(1,y.width>>ft),yt=Math.max(1,y.height>>ft);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ft,st,St,yt,y.depth,0,pt,Z,null):e.texImage2D(K,ft,st,St,yt,0,pt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),$t(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,Pt.__webglTexture,0,qt(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,Pt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(C,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let q=y.depthTexture,K=q&&q.isDepthTexture?q.type:null,ft=M(y.stencilBuffer,K),pt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$t(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(y),ft,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(y),ft,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ft,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,C)}else{let q=y.textures;for(let K=0;K<q.length;K++){let ft=q[K],pt=r.convert(ft.format,ft.colorSpace),Z=r.convert(ft.type),st=x(ft.internalFormat,pt,Z,ft.normalized,ft.colorSpace);$t(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(y),st,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(y),st,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,st,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(C,y,z){let q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,y.depthTexture);let _t=r.convert(y.depthTexture.format),Pt=r.convert(y.depthTexture.type),St;y.depthTexture.format===mn?St=i.DEPTH_COMPONENT24:y.depthTexture.format===xs&&(St=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,St,y.width,y.height,0,_t,Pt,null)}}else it(y.depthTexture,0);let ft=K.__webglTexture,pt=qt(y),Z=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,st=y.depthTexture.format===xs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===mn)$t(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Z,ft,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,st,Z,ft,0);else if(y.depthTexture.format===xs)$t(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Z,ft,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,st,Z,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(C){let y=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)oe(y.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?oe(y.__webglFramebuffer[0],C,0):oe(y.__webglFramebuffer,C,0)}else if(z){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),Vt(y.__webglDepthbuffer[q],C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ft)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Vt(y.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(C,y,z){let q=n.get(C);y!==void 0&&wt(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&nt(C)}function ct(C){let y=C.texture,z=n.get(C),q=n.get(y);C.addEventListener("dispose",v);let K=C.textures,ft=C.isWebGLCubeRenderTarget===!0,pt=K.length>1;if(pt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,o.memory.textures++),ft){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let st=0;st<y.mipmaps.length;st++)z.__webglFramebuffer[Z][st]=i.createFramebuffer()}else z.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)z.__webglFramebuffer[Z]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(pt)for(let Z=0,st=K.length;Z<st;Z++){let _t=n.get(K[Z]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&$t(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){let st=K[Z];z.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let _t=r.convert(st.format,st.colorSpace),Pt=r.convert(st.type),St=x(st.internalFormat,_t,Pt,st.normalized,st.colorSpace,C.isXRRenderTarget===!0),yt=qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,St,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)wt(z.__webglFramebuffer[Z][st],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st);else wt(z.__webglFramebuffer[Z],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(y)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let Z=0,st=K.length;Z<st;Z++){let _t=K[Z],Pt=n.get(_t),St=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(St=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Pt.__webglTexture),Wt(St,_t),wt(z.__webglFramebuffer,C,_t,i.COLOR_ATTACHMENT0+Z,St,0),m(_t)&&S(St)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,q.__webglTexture),Wt(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)wt(z.__webglFramebuffer[st],C,y,i.COLOR_ATTACHMENT0,Z,st);else wt(z.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,Z,0);m(y)&&S(Z),e.unbindTexture()}C.depthBuffer&&nt(C)}function ht(C){let y=C.textures;for(let z=0,q=y.length;z<q;z++){let K=y[z];if(m(K)){let ft=w(C),pt=n.get(K).__webglTexture;e.bindTexture(ft,pt),S(ft),e.unbindTexture()}}}let gt=[],Ht=[];function kt(C){if(C.samples>0){if($t(C)===!1){let y=C.textures,z=C.width,q=C.height,K=i.COLOR_BUFFER_BIT,ft=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(C),Z=y.length>1;if(Z)for(let _t=0;_t<y.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let st=C.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);let Pt=n.get(y[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,K,i.NEAREST),l===!0&&(gt.length=0,Ht.length=0,gt.push(i.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(gt.push(ft),Ht.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let _t=0;_t<y.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);let Pt=n.get(y[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function qt(C){return Math.min(s.maxSamples,C.samples)}function $t(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(C){let y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function ae(C,y){let z=C.colorSpace,q=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==ia&&z!==Hn&&(se.getTransfer(z)===he?(q!==ki||K!==pi)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",z)),y}function ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=U,this.setTexture2D=it,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=tt,this.rebindTextures=ot,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function FT(i,t){function e(n,s=Hn){let r,o=se.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===eh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===of)return i.BYTE;if(n===af)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===th)return i.INT;if(n===nn)return i.UNSIGNED_INT;if(n===Bi)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===hf)return i.ALPHA;if(n===uf)return i.RGB;if(n===ki)return i.RGBA;if(n===mn)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===sh)return i.RED_INTEGER;if(n===vs)return i.RG;if(n===rh)return i.RG_INTEGER;if(n===oh)return i.RGBA_INTEGER;if(n===Ba||n===ka||n===Ua||n===za)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ah||n===lh||n===ch||n===hh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ah)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uh||n===dh||n===fh||n===ph||n===gh||n===Ha||n===mh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uh||n===dh)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ph)return r.COMPRESSED_R11_EAC;if(n===gh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ha)return r.COMPRESSED_RG11_EAC;if(n===mh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_h||n===yh||n===xh||n===vh||n===Sh||n===bh||n===Mh||n===wh||n===Th||n===Eh||n===Ch||n===Ah||n===Rh||n===Dh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_h)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Th)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ch)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ah)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dh)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ih||n===Oh||n===Lh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ih)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nh||n===Ph||n===Ga||n===Fh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var BT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kT=`
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

}`,Nf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new pa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Di({vertexShader:BT,fragmentShader:kT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pf=class extends tn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new Nf,m={},S=e.getContextAttributes(),w=null,x=null,M=[],T=[],A=new lt,v=null,E=null,R=new Ve;R.viewport=new Me;let D=new Ve;D.viewport=new Me;let B=[R,D],k=new $c,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=M[Y];return J===void 0&&(J=new zr,M[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=M[Y];return J===void 0&&(J=new zr,M[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=M[Y];return J===void 0&&(J=new zr,M[Y]=J),J.getHandSpace()};function X(Y){let J=T.indexOf(Y.inputSource);if(J===-1)return;let at=M[J];at!==void 0&&(at.update(Y.inputSource,Y.frame,c||o),at.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",it);for(let Y=0;Y<M.length;Y++){let J=T[Y];J!==null&&(T[Y]=null,M[Y].disconnect(J))}I=null,U=null,g.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(w),f=null,d=null,u=null,s=null,x=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),E!==null){let Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",it),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,zt=null,wt=null;S.depth&&(wt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=S.stencil?xs:mn,zt=S.stencil?jr:nn);let Vt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ui(d.textureWidth,d.textureHeight,{format:ki,type:pi,depthTexture:new cs(d.textureWidth,d.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let at={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ui(f.framebufferWidth,f.framebufferHeight,{format:ki,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(Y){for(let J=0;J<Y.removed.length;J++){let at=Y.removed[J],zt=T.indexOf(at);zt>=0&&(T[zt]=null,M[zt].disconnect(at))}for(let J=0;J<Y.added.length;J++){let at=Y.added[J],zt=T.indexOf(at);if(zt===-1){for(let Vt=0;Vt<M.length;Vt++)if(Vt>=T.length){T.push(at),zt=Vt;break}else if(T[Vt]===null){T[Vt]=at,zt=Vt;break}if(zt===-1)break}let wt=M[zt];wt&&wt.connect(at)}}let H=new N,j=new N;function tt(Y,J,at){H.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(at.matrixWorld);let zt=H.distanceTo(j),wt=J.projectionMatrix.elements,Vt=at.projectionMatrix.elements,oe=wt[14]/(wt[10]-1),nt=wt[14]/(wt[10]+1),ot=(wt[9]+1)/wt[5],ct=(wt[9]-1)/wt[5],ht=(wt[8]-1)/wt[0],gt=(Vt[8]+1)/Vt[0],Ht=oe*ht,kt=oe*gt,qt=zt/(-ht+gt),$t=qt*-ht;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($t),Y.translateZ(qt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let O=oe+qt,ae=nt+qt,ie=Ht-$t,C=kt+(zt-$t),y=ot*nt/ae*O,z=ct*nt/ae*O;Y.projectionMatrix.makePerspective(ie,C,y,z,O,ae),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ct(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,at=Y.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(at=g.depthFar)),k.near=D.near=R.near=J,k.far=D.far=R.far=at,(I!==k.near||U!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,U=k.far),k.layers.mask=Y.layers.mask|6,R.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let zt=Y.parent,wt=k.cameras;Ct(k,zt);for(let Vt=0;Vt<wt.length;Vt++)Ct(wt[Vt],zt);wt.length===2?tt(k,R,D):k.projectionMatrix.copy(R.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),mt(Y,k,zt)};function mt(Y,J,at){at===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(at.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=kr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Y){return m[Y]};let Zt=null;function Wt(Y,J){if(h=J.getViewerPose(c||o),p=J,h!==null){let at=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let zt=!1;at.length!==k.cameras.length&&(k.cameras.length=0,zt=!0);for(let nt=0;nt<at.length;nt++){let ot=at[nt],ct=null;if(f!==null)ct=f.getViewport(ot);else{let gt=u.getViewSubImage(d,ot);ct=gt.viewport,nt===0&&(t.setRenderTargetTextures(x,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(x))}let ht=B[nt];ht===void 0&&(ht=new Ve,ht.layers.enable(nt),ht.viewport=new Me,B[nt]=ht),ht.matrix.fromArray(ot.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ot.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),nt===0&&(k.matrix.copy(ht.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),zt===!0&&k.cameras.push(ht)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let nt=u.getDepthInformation(at[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,s.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let nt=0;nt<at.length;nt++){let ot=at[nt].camera;if(ot){let ct=m[ot];ct||(ct=new pa,m[ot]=ct);let ht=u.getCameraImage(ot);ct.sourceTexture=ht}}}}for(let at=0;at<M.length;at++){let zt=T[at],wt=M[at];zt!==null&&wt!==void 0&&wt.update(zt,J,c||o)}Zt&&Zt(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}let dt=new g0;dt.setAnimationLoop(Wt),this.setAnimationLoop=function(Y){Zt=Y},this.dispose=function(){}}},UT=new pe,S0=new Xt;S0.set(-1,0,0,0,1,0,0,0,1);function zT(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,_f(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,w,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),w=S.envMap,x=S.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(UT.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(S0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function HT(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let T=M.program;n.uniformBlockBinding(x,T)}function c(x,M){let T=s[x.id];T===void 0&&(g(x),T=h(x),s[x.id]=T,x.addEventListener("dispose",S));let A=M.program;n.updateUBOMapping(x,A);let v=t.render.frame;r[x.id]!==v&&(d(x),r[x.id]=v)}function h(x){let M=u();x.__bindingPointIndex=M;let T=i.createBuffer(),A=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=s[x.id],T=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,E=T.length;v<E;v++){let R=T[v];if(Array.isArray(R))for(let D=0,B=R.length;D<B;D++)f(R[D],v,D,A);else f(R,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,T,A){if(_(x,M,T,A)===!0){let v=x.__offset,E=x.value;if(Array.isArray(E)){let R=0;for(let D=0;D<E.length;D++){let B=E[D],k=m(B);p(B,x.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function p(x,M,T){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,T)}function _(x,M,T,A){let v=x.value,E=M+"_"+T;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{let R=A[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(x){let M=x.uniforms,T=0,A=16;for(let E=0,R=M.length;E<R;E++){let D=Array.isArray(M[E])?M[E]:[M[E]];for(let B=0,k=D.length;B<k;B++){let I=D[B],U=Array.isArray(I.value)?I.value:[I.value];for(let X=0,W=U.length;X<W;X++){let it=U[X],H=m(it),j=T%A,tt=j%H.boundary,Ct=j+tt;T+=tt,Ct!==0&&A-Ct<H.storage&&(T+=A-Ct),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=H.storage}}}let v=T%A;return v>0&&(T+=A-v),x.__size=T,x.__cache={},this}function m(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){let M=x.target;M.removeEventListener("dispose",S);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var GT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function VT(){return Sn===null&&(Sn=new ca(GT,16,16,vs,sn),Sn.name="DFG_LUT",Sn.minFilter=Ye,Sn.magFilter=Ye,Sn.wrapS=pn,Sn.wrapT=pn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var Gh=class{constructor(t={}){let{canvas:e=F_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=pi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,g=new Set([oh,rh,sh]),m=new Set([pi,nn,Zr,jr,eh,ih]),S=new Uint32Array(4),w=new Int32Array(4),x=new N,M=null,T=null,A=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,B=null,k=null,I=null,U=null;this._outputColorSpace=Ge;let X=0,W=0,it=null,H=-1,j=null,tt=new Me,Ct=new Me,mt=null,Zt=new Jt(0),Wt=0,dt=e.width,Y=e.height,J=1,at=null,zt=null,wt=new Me(0,0,dt,Y),Vt=new Me(0,0,dt,Y),oe=!1,nt=new Hr,ot=!1,ct=!1,ht=new pe,gt=new N,Ht=new Me,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function $t(){return it===null?J:1}let O=n;function ae(b,L){return e.getContext(b,L)}let ie,C,y,z,q,K,ft,pt,Z,st,_t,Pt,St,yt,Ft,Gt,Qt,F,xt,et,vt,Et,rt;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",zi,!1),O===null){let L="webgl2";if(O=ae(L,b),O===null)throw ae(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(b){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",zi,!1),Yt("WebGLRenderer: "+b.message),b}function Bt(){ie=new Qw(O),ie.init(),vt=new FT(O,ie),C=new zw(O,ie,t,vt),y=new NT(O,ie),C.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),k=O.createFramebuffer(),I=O.createFramebuffer(),U=O.createFramebuffer(),z=new jw(O),q=new vT,K=new PT(O,ie,y,q,C,vt,z),ft=new $w(R),pt=new eb(O),Et=new kw(O,pt),Z=new Kw(O,pt,z,Et),st=new e1(O,Z,pt,Et,z),F=new t1(O,C,K),Ft=new Hw(q),_t=new xT(R,ft,ie,C,Et,Ft),Pt=new zT(R,q),St=new bT,yt=new AT(ie),Qt=new Bw(R,ft,y,st,p,l),Gt=new LT(R,st,C),rt=new HT(O,z,C,y),xt=new Uw(O,ie,z),et=new Zw(O,ie,z),z.programs=_t.programs,R.capabilities=C,R.extensions=ie,R.properties=q,R.renderLists=St,R.shadowMap=Gt,R.state=y,R.info=z}_!==pi&&(E=new n1(_,e.width,e.height,a,s,r));let Lt=new Pf(R,O);this.xr=Lt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(dt,Y,!1))},this.getSize=function(b){return b.set(dt,Y)},this.setSize=function(b,L,$=!0){if(Lt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=b,Y=L,e.width=Math.floor(b*J),e.height=Math.floor(L*J),$===!0&&(e.style.width=b+"px",e.style.height=L+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(dt*J,Y*J).floor()},this.setDrawingBufferSize=function(b,L,$){dt=b,Y=L,J=$,e.width=Math.floor(b*$),e.height=Math.floor(L*$),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(_===pi){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(tt)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,L,$,G){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,L,$,G),y.viewport(tt.copy(wt).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(Vt)},this.setScissor=function(b,L,$,G){b.isVector4?Vt.set(b.x,b.y,b.z,b.w):Vt.set(b,L,$,G),y.scissor(Ct.copy(Vt).multiplyScalar(J).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(b){y.setScissorTest(oe=b)},this.setOpaqueSort=function(b){at=b},this.setTransparentSort=function(b){zt=b},this.getClearColor=function(b){return b.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,$=!0){let G=0;if(b){let V=!1;if(it!==null){let Tt=it.texture.format;V=g.has(Tt)}if(V){let Tt=it.texture.type,Dt=m.has(Tt),Mt=Qt.getClearColor(),It=Qt.getClearAlpha(),Nt=Mt.r,jt=Mt.g,ne=Mt.b;Dt?(S[0]=Nt,S[1]=jt,S[2]=ne,S[3]=It,O.clearBufferuiv(O.COLOR,0,S)):(w[0]=Nt,w[1]=jt,w[2]=ne,w[3]=It,O.clearBufferiv(O.COLOR,0,w))}else G|=O.COLOR_BUFFER_BIT}L&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",zi,!1),Qt.dispose(),St.dispose(),yt.dispose(),q.dispose(),ft.dispose(),st.dispose(),Et.dispose(),rt.dispose(),_t.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Yf),Lt.removeEventListener("sessionend",qf),bs.stop()};function xe(b){b.preventDefault(),ff("WebGLRenderer: Context Lost."),D=!0}function le(){ff("WebGLRenderer: Context Restored."),D=!1;let b=z.autoReset,L=Gt.enabled,$=Gt.autoUpdate,G=Gt.needsUpdate,V=Gt.type;Bt(),z.autoReset=b,Gt.enabled=L,Gt.autoUpdate=$,Gt.needsUpdate=G,Gt.type=V}function zi(b){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function on(b){let L=b.target;L.removeEventListener("dispose",on),W0(L)}function W0(b){J0(b),q.remove(b)}function J0(b){let L=q.get(b).programs;L!==void 0&&(L.forEach(function($){_t.releaseProgram($)}),b.isShaderMaterial&&_t.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,$,G,V,Tt){L===null&&(L=kt);let Dt=V.isMesh&&V.matrixWorld.determinantAffine()<0,Mt=Q0(b,L,$,G,V);y.setMaterial(G,Dt);let It=$.index,Nt=1;if(G.wireframe===!0){if(It=Z.getWireframeAttribute($),It===void 0)return;Nt=2}let jt=$.drawRange,ne=$.attributes.position,Ot=jt.start*Nt,ce=(jt.start+jt.count)*Nt;Tt!==null&&(Ot=Math.max(Ot,Tt.start*Nt),ce=Math.min(ce,(Tt.start+Tt.count)*Nt)),It!==null?(Ot=Math.max(Ot,0),ce=Math.min(ce,It.count)):ne!=null&&(Ot=Math.max(Ot,0),ce=Math.min(ce,ne.count));let Ae=ce-Ot;if(Ae<0||Ae===1/0)return;Et.setup(V,G,Mt,$,It);let Se,ge=xt;if(It!==null&&(Se=pt.get(It),ge=et,ge.setIndex(Se)),V.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*$t()),ge.setMode(O.LINES)):ge.setMode(O.TRIANGLES);else if(V.isLine){let We=G.linewidth;We===void 0&&(We=1),y.setLineWidth(We*$t()),V.isLineSegments?ge.setMode(O.LINES):V.isLineLoop?ge.setMode(O.LINE_LOOP):ge.setMode(O.LINE_STRIP)}else V.isPoints?ge.setMode(O.POINTS):V.isSprite&&ge.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))ge.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let We=V._multiDrawStarts,At=V._multiDrawCounts,ti=V._multiDrawCount,re=It?pt.get(It).bytesPerElement:1,Li=q.get(G).currentProgram.getUniforms();for(let an=0;an<ti;an++)Li.setValue(O,"_gl_DrawID",an),ge.render(We[an]/re,At[an])}else if(V.isInstancedMesh)ge.renderInstances(Ot,Ae,V.count);else if($.isInstancedBufferGeometry){let We=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,At=Math.min($.instanceCount,We);ge.renderInstances(Ot,Ae,At)}else ge.render(Ot,Ae)};function Vf(b,L,$,G){B!==null&&b.isNodeMaterial&&B.setObject(G,b),ot===!0&&Ft.setState(b,$,!1),b.transparent===!0&&b.side===fi&&b.forceSinglePass===!1?(b.side=qe,b.needsUpdate=!0,Ka(b,L,G),b.side=ms,b.needsUpdate=!0,Ka(b,L,G),b.side=fi):Ka(b,L,G)}this.compile=function(b,L,$=null){$===null&&($=b),B!==null&&B.renderStart(b,L,$),T=yt.get($),T.init(L),v.push(T),$.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),b!==$&&b.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),ct=this.localClippingEnabled,ot=Ft.init(this.clippingPlanes,ct),ot===!0&&Ft.setGlobalState(this.clippingPlanes,L),B!==null&&Gt.render(T.state.shadowsArray,$,L);let G=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Tt=V.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){let Mt=Tt[Dt];Vf(Mt,$,L,V),G.add(Mt)}else Vf(Tt,$,L,V),G.add(Tt)}),T=v.pop(),B!==null&&B.renderEnd(),G},this.compileAsync=function(b,L,$=null){let G=this.compile(b,L,$);return new Promise(V=>{function Tt(){if(G.forEach(function(Dt){let It=q.get(Dt).currentProgram;(It===void 0||It.isReady())&&G.delete(Dt)}),G.size===0){V(b);return}setTimeout(Tt,10)}ie.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let $h=null;function X0(b){$h&&$h(b)}function Yf(){bs.stop()}function qf(){bs.start()}let bs=new g0;bs.setAnimationLoop(X0),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(b){$h=b,Lt.setAnimationLoop(b),b===null?bs.stop():bs.start()},Lt.addEventListener("sessionstart",Yf),Lt.addEventListener("sessionend",qf),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(b,L);let $=Lt.enabled===!0&&Lt.isPresenting===!0,G=E!==null&&(it===null||$)&&E.begin(R,it);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(L),L=Lt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,L,it),T=yt.get(b,v.length),T.init(L),T.state.textureUnits=K.getTextureUnits(),v.push(T),ht.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),nt.setFromProjectionMatrix(ht,ji,L.reversedDepth),ct=this.localClippingEnabled,ot=Ft.init(this.clippingPlanes,ct),M=St.get(b,A.length),M.init(),A.push(M),Lt.enabled===!0&&Lt.isPresenting===!0){let Dt=R.xr.getDepthSensingMesh();Dt!==null&&Qh(Dt,L,-1/0,R.sortObjects)}Qh(b,L,0,R.sortObjects),M.finish(),B!==null&&B.updateLights(T.state.lightsArray),R.sortObjects===!0&&M.sort(at,zt),qt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,qt&&Qt.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ft.beginShadows();let V=T.state.shadowsArray;if(Gt.render(V,b,L),ot===!0&&Ft.endShadows(),(G&&E.hasRenderPass())===!1){let Dt=M.opaque,Mt=M.transmissive;if(T.setupLights(),L.isArrayCamera){let It=L.cameras;if(Mt.length>0)for(let Nt=0,jt=It.length;Nt<jt;Nt++){let ne=It[Nt];Jf(Dt,Mt,b,ne)}qt&&Qt.render(b);for(let Nt=0,jt=It.length;Nt<jt;Nt++){let ne=It[Nt];Wf(M,b,ne,ne.viewport)}}else Mt.length>0&&Jf(Dt,Mt,b,L),qt&&Qt.render(b),Wf(M,b,L)}it!==null&&W===0&&(K.updateMultisampleRenderTarget(it),K.updateRenderTargetMipmap(it)),G&&E.end(R),b.isScene===!0&&b.onAfterRender(R,b,L),Et.resetDefaultState(),H=-1,j=null,v.pop(),v.length>0?(T=v[v.length-1],K.setTextureUnits(T.state.textureUnits),ot===!0&&Ft.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,B!==null&&B.renderEnd()};function Qh(b,L,$,G){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(nt)){G&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);let Dt=st.update(b),Mt=b.material;Mt.visible&&M.push(b,Dt,Mt,$,Ht.z,null,L)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(nt))){let Dt=st.update(b),Mt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Ht.copy(Dt.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(Mt)){let It=Dt.groups;for(let Nt=0,jt=It.length;Nt<jt;Nt++){let ne=It[Nt],Ot=Mt[ne.materialIndex];Ot&&Ot.visible&&M.push(b,Dt,Ot,$,Ht.z,ne,L)}}else Mt.visible&&M.push(b,Dt,Mt,$,Ht.z,null,L)}}let Tt=b.children;for(let Dt=0,Mt=Tt.length;Dt<Mt;Dt++)Qh(Tt[Dt],L,$,G)}function Wf(b,L,$,G){let{opaque:V,transmissive:Tt,transparent:Dt}=b;T.setupLightsView($),ot===!0&&Ft.setGlobalState(R.clippingPlanes,$),G&&y.viewport(tt.copy(G)),V.length>0&&Qa(V,L,$),Tt.length>0&&Qa(Tt,L,$),Dt.length>0&&Qa(Dt,L,$),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Jf(b,L,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Ot=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new ui(1,1,{generateMipmaps:!0,type:Ot?sn:pi,minFilter:ys,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let Tt=T.state.transmissionRenderTarget[G.id],Dt=G.viewport||tt;Tt.setSize(Dt.z*R.transmissionResolutionScale,Dt.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),It=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(Tt),R.getClearColor(Zt),Wt=R.getClearAlpha(),Wt<1&&R.setClearColor(16777215,.5),R.clear(),qt&&Qt.render($);let jt=R.toneMapping;R.toneMapping=en;let ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ot===!0&&Ft.setGlobalState(R.clippingPlanes,G),Qa(b,$,G),K.updateMultisampleRenderTarget(Tt),K.updateRenderTargetMipmap(Tt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ce=0,Ae=L.length;ce<Ae;ce++){let Se=L[ce],{object:ge,geometry:We,material:At,group:ti}=Se;if(At.side===fi&&ge.layers.test(G.layers)){let re=At.side;At.side=qe,At.needsUpdate=!0,Xf(ge,$,G,We,At,ti),At.side=re,At.needsUpdate=!0,Ot=!0}}Ot===!0&&(K.updateMultisampleRenderTarget(Tt),K.updateRenderTargetMipmap(Tt))}R.setRenderTarget(Mt,It,Nt),R.setClearColor(Zt,Wt),ne!==void 0&&(G.viewport=ne),R.toneMapping=jt}function Qa(b,L,$){let G=L.isScene===!0?L.overrideMaterial:null;for(let V=0,Tt=b.length;V<Tt;V++){let Dt=b[V],{object:Mt,geometry:It,group:Nt}=Dt,jt=Dt.material;jt.allowOverride===!0&&G!==null&&(jt=G),Mt.layers.test($.layers)&&Xf(Mt,L,$,It,jt,Nt)}}function Xf(b,L,$,G,V,Tt){B!==null&&V.isNodeMaterial&&B.setObject(b,V),b.onBeforeRender(R,L,$,G,V,Tt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(R,L,$,G,b,Tt),V.transparent===!0&&V.side===fi&&V.forceSinglePass===!1?(V.side=qe,V.needsUpdate=!0,R.renderBufferDirect($,L,G,V,b,Tt),V.side=ms,V.needsUpdate=!0,R.renderBufferDirect($,L,G,V,b,Tt),V.side=fi):R.renderBufferDirect($,L,G,V,b,Tt),b.onAfterRender(R,L,$,G,V,Tt)}function Ka(b,L,$){L.isScene!==!0&&(L=kt);let G=q.get(b),V=T.state.lights,Tt=T.state.shadowsArray,Dt=V.state.version,Mt=_t.getParameters(b,V.state,Tt,L,$,T.state.lightProbeGridArray),It=_t.getProgramCacheKey(Mt),Nt=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;let jt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=ft.get(b.envMap||G.environment,jt),G.envMapRotation=G.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",on),Nt=new Map,G.programs=Nt);let ne=Nt.get(It);if(ne!==void 0){if(G.currentProgram===ne&&G.lightsStateVersion===Dt)return Qf(b,Mt),ne}else Mt.uniforms=_t.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,$,Mt),b.onBeforeCompile(Mt,R),ne=_t.acquireProgram(Mt,It),Nt.set(It,ne),G.uniforms=Mt.uniforms;let Ot=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=Ft.uniform),Qf(b,Mt),G.needsLights=Z0(b),G.lightsStateVersion=Dt,G.needsLights&&(Ot.ambientLightColor.value=V.state.ambient,Ot.lightProbe.value=V.state.probe,Ot.sunLights.value=V.state.sun,Ot.sunLightShadows.value=V.state.sunShadow,Ot.directionalLights.value=V.state.directional,Ot.directionalLightShadows.value=V.state.directionalShadow,Ot.spotLights.value=V.state.spot,Ot.spotLightShadows.value=V.state.spotShadow,Ot.rectAreaLights.value=V.state.rectArea,Ot.ltc_1.value=V.state.rectAreaLTC1,Ot.ltc_2.value=V.state.rectAreaLTC2,Ot.pointLights.value=V.state.point,Ot.pointLightShadows.value=V.state.pointShadow,Ot.hemisphereLights.value=V.state.hemi,Ot.sunShadowMatrix.value=V.state.sunShadowMatrix,Ot.sunShadowCascade.value=V.state.sunShadowCascade,Ot.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ot.spotLightMatrix.value=V.state.spotLightMatrix,Ot.spotLightMap.value=V.state.spotLightMap,Ot.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=ne,G.uniformsList=null,ne}function $f(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=io.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Qf(b,L){let $=q.get(b);$.outputColorSpace=L.outputColorSpace,$.batching=L.batching,$.batchingColor=L.batchingColor,$.instancing=L.instancing,$.instancingColor=L.instancingColor,$.instancingMorph=L.instancingMorph,$.skinning=L.skinning,$.morphTargets=L.morphTargets,$.morphNormals=L.morphNormals,$.morphColors=L.morphColors,$.morphTargetsCount=L.morphTargetsCount,$.numClippingPlanes=L.numClippingPlanes,$.numIntersection=L.numClipIntersection,$.vertexAlphas=L.vertexAlphas,$.vertexTangents=L.vertexTangents,$.toneMapping=L.toneMapping}function $0(b,L){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(L.matrixWorld);for(let $=0,G=b.length;$<G;$++){let V=b[$];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function Q0(b,L,$,G,V){L.isScene!==!0&&(L=kt),K.resetTextureUnits();let Tt=L.fog,Dt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,Mt=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:se.workingColorSpace,It=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Nt=ft.get(G.envMap||Dt,It),jt=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ne=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ot=!!$.morphAttributes.position,ce=!!$.morphAttributes.normal,Ae=!!$.morphAttributes.color,Se=en;G.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Se=R.toneMapping);let ge=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,We=ge!==void 0?ge.length:0,At=q.get(G),ti=T.state.lights;if(ot===!0&&(ct===!0||b!==j)){let ve=b===j&&G.id===H;Ft.setState(G,b,ve)}let re=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==ti.state.version||At.outputColorSpace!==Mt||V.isBatchedMesh&&At.batching===!1||!V.isBatchedMesh&&At.batching===!0||V.isBatchedMesh&&At.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&At.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&At.instancing===!1||!V.isInstancedMesh&&At.instancing===!0||V.isSkinnedMesh&&At.skinning===!1||!V.isSkinnedMesh&&At.skinning===!0||V.isInstancedMesh&&At.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&At.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&At.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&At.instancingMorph===!1&&V.morphTexture!==null||At.envMap!==Nt||G.fog===!0&&At.fog!==Tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ft.numPlanes||At.numIntersection!==Ft.numIntersection)||At.vertexAlphas!==jt||At.vertexTangents!==ne||At.morphTargets!==Ot||At.morphNormals!==ce||At.morphColors!==Ae||At.toneMapping!==Se||At.morphTargetsCount!==We||!!At.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,At.__version=G.version);let Li=At.currentProgram;re===!0&&(Li=Ka(G,L,V),B&&G.isNodeMaterial&&B.onUpdateProgram(G,Li,At));let an=!1,Yn=!1,Qs=!1,fe=Li.getUniforms(),Ce=At.uniforms;if(y.useProgram(Li.program)&&(an=!0,Yn=!0,Qs=!0),G.id!==H&&(H=G.id,Yn=!0),At.needsLights){let ve=$0(T.state.lightProbeGridArray,V);At.lightProbeGrid!==ve&&(At.lightProbeGrid=ve,Yn=!0)}if(an||j!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(O,"projectionMatrix",b.projectionMatrix),fe.setValue(O,"viewMatrix",b.matrixWorldInverse);let Wn=fe.map.cameraPosition;Wn!==void 0&&Wn.setValue(O,gt.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&fe.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Yn=!0,Qs=!0)}if(At.needsLights&&(ti.state.sunShadowMap.length>0&&fe.setValue(O,"sunShadowMap",ti.state.sunShadowMap,K),ti.state.directionalShadowMap.length>0&&fe.setValue(O,"directionalShadowMap",ti.state.directionalShadowMap,K),ti.state.spotShadowMap.length>0&&fe.setValue(O,"spotShadowMap",ti.state.spotShadowMap,K),ti.state.pointShadowMap.length>0&&fe.setValue(O,"pointShadowMap",ti.state.pointShadowMap,K)),V.isSkinnedMesh){fe.setOptional(O,V,"bindMatrix"),fe.setOptional(O,V,"bindMatrixInverse");let ve=V.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),fe.setValue(O,"boneTexture",ve.boneTexture,K))}V.isBatchedMesh&&(fe.setOptional(O,V,"batchingTexture"),fe.setValue(O,"batchingTexture",V._matricesTexture,K),fe.setOptional(O,V,"batchingIdTexture"),fe.setValue(O,"batchingIdTexture",V._indirectTexture,K),fe.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&fe.setValue(O,"batchingColorTexture",V._colorsTexture,K));let qn=$.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&F.update(V,$,Li),(Yn||At.receiveShadow!==V.receiveShadow)&&(At.receiveShadow=V.receiveShadow,fe.setValue(O,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(Ce.envMapIntensity.value=L.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=VT()),Yn){if(fe.setValue(O,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&K0(Ce,Qs),Tt&&G.fog===!0&&Pt.refreshFogUniforms(Ce,Tt),Pt.refreshMaterialUniforms(Ce,G,J,Y,T.state.transmissionRenderTarget[b.id]),At.needsLights&&At.lightProbeGrid){let ve=At.lightProbeGrid;Ce.probesSH.value=ve.texture,Ce.probesMin.value.copy(ve.boundingBox.min),Ce.probesMax.value.copy(ve.boundingBox.max),Ce.probesResolution.value.copy(ve.resolution)}io.upload(O,$f(At),Ce,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(io.upload(O,$f(At),Ce,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(O,"center",V.center),fe.setValue(O,"modelViewMatrix",V.modelViewMatrix),fe.setValue(O,"normalMatrix",V.normalMatrix),fe.setValue(O,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let ve=G.uniformsGroups;for(let Wn=0,Ks=ve.length;Wn<Ks;Wn++){let Zf=ve[Wn];rt.update(Zf,Li),rt.bind(Zf,Li)}}return Li}function K0(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function Z0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(b,L,$){let G=q.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=L,q.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let $=q.get(b);$.__webglFramebuffer=L,$.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,$=0){it=b,X=L,W=$;let G=null,V=!1,Tt=!1;if(b){let Mt=q.get(b);if(Mt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,Mt.__webglFramebuffer),tt.copy(b.viewport),Ct.copy(b.scissor),mt=b.scissorTest,y.viewport(tt),y.scissor(Ct),y.setScissorTest(mt),H=-1;return}else if(Mt.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(Mt.__hasExternalTextures)K.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let jt=b.depthTexture;if(Mt.__boundDepthTexture!==jt){if(jt!==null&&q.has(jt)&&(b.width!==jt.image.width||b.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let It=b.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Tt=!0);let Nt=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[L])?G=Nt[L][$]:G=Nt[L],V=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?G=q.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?G=Nt[$]:G=Nt,tt.copy(b.viewport),Ct.copy(b.scissor),mt=b.scissorTest}else tt.copy(wt).multiplyScalar(J).floor(),Ct.copy(Vt).multiplyScalar(J).floor(),mt=oe;if($!==0&&(G=k),y.bindFramebuffer(O.FRAMEBUFFER,G)&&y.drawBuffers(b,G),y.viewport(tt),y.scissor(Ct),y.setScissorTest(mt),V){let Mt=q.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,Mt.__webglTexture,$)}else if(Tt){let Mt=L;for(let It=0;It<b.textures.length;It++){let Nt=q.get(b.textures[It]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+It,Nt.__webglTexture,$,Mt)}}else if(b!==null&&$!==0){let Mt=q.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,$)}H=-1};function Kf(b){let L=q.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=C.textureFormatReadable(b.format),L.__typeReadable=C.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,$,G,V,Tt,Dt,Mt=0){if(!(b&&b.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It){y.bindFramebuffer(O.FRAMEBUFFER,It);try{let Nt=b.textures[Mt],jt=Nt.format,ne=Nt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let Ot=Kf(Nt);if(Ot.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-G&&$>=0&&$<=b.height-V&&O.readPixels(L,$,G,V,vt.convert(jt),vt.convert(ne),Tt)}finally{let Nt=it!==null?q.get(it).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,L,$,G,V,Tt,Dt,Mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It)if(L>=0&&L<=b.width-G&&$>=0&&$<=b.height-V){y.bindFramebuffer(O.FRAMEBUFFER,It);let Nt=b.textures[Mt],jt=Nt.format,ne=Nt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let Ot=Kf(Nt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ce),O.bufferData(O.PIXEL_PACK_BUFFER,Tt.byteLength,O.STREAM_READ),O.readPixels(L,$,G,V,vt.convert(jt),vt.convert(ne),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ae=it!==null?q.get(it).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ae);let Se=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await k_(O,Se,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ce),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Tt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ce),O.deleteSync(Se),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,$=0){let G=Math.pow(2,-$),V=Math.floor(b.image.width*G),Tt=Math.floor(b.image.height*G),Dt=L!==null?L.x:0,Mt=L!==null?L.y:0;K.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Dt,Mt,V,Tt),y.unbindTexture()},this.copyTextureToTexture=function(b,L,$=null,G=null,V=0,Tt=0){let Dt,Mt,It,Nt,jt,ne,Ot,ce,Ae,Se=b.isCompressedTexture?b.mipmaps[Tt]:b.image;if($!==null)Dt=$.max.x-$.min.x,Mt=$.max.y-$.min.y,It=$.isBox3?$.max.z-$.min.z:1,Nt=$.min.x,jt=$.min.y,ne=$.isBox3?$.min.z:0;else{let Ce=Math.pow(2,-V);Dt=Math.floor(Se.width*Ce),Mt=Math.floor(Se.height*Ce),b.isDataArrayTexture?It=Se.depth:b.isData3DTexture?It=Math.floor(Se.depth*Ce):It=1,Nt=0,jt=0,ne=0}G!==null?(Ot=G.x,ce=G.y,Ae=G.z):(Ot=0,ce=0,Ae=0);let ge=vt.convert(L.format),We=vt.convert(L.type),At;L.isData3DTexture?(K.setTexture3D(L,0),At=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(K.setTexture2DArray(L,0),At=O.TEXTURE_2D_ARRAY):(K.setTexture2D(L,0),At=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);let ti=y.getParameter(O.UNPACK_ROW_LENGTH),re=y.getParameter(O.UNPACK_IMAGE_HEIGHT),Li=y.getParameter(O.UNPACK_SKIP_PIXELS),an=y.getParameter(O.UNPACK_SKIP_ROWS),Yn=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,Se.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Se.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Nt),y.pixelStorei(O.UNPACK_SKIP_ROWS,jt),y.pixelStorei(O.UNPACK_SKIP_IMAGES,ne);let Qs=b.isDataArrayTexture||b.isData3DTexture,fe=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let Ce=q.get(b),qn=q.get(L),ve=q.get(Ce.__renderTarget),Wn=q.get(qn.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,ve.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Ks=0;Ks<It;Ks++)Qs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(b).__webglTexture,V,ne+Ks),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(L).__webglTexture,Tt,Ae+Ks)),O.blitFramebuffer(Nt,jt,Dt,Mt,Ot,ce,Dt,Mt,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||q.has(b)){let Ce=q.get(b),qn=q.get(L);y.bindFramebuffer(O.READ_FRAMEBUFFER,I),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,U);for(let ve=0;ve<It;ve++)Qs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,V,ne+ve):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ce.__webglTexture,V),fe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qn.__webglTexture,Tt,Ae+ve):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,qn.__webglTexture,Tt),V!==0?O.blitFramebuffer(Nt,jt,Dt,Mt,Ot,ce,Dt,Mt,O.COLOR_BUFFER_BIT,O.NEAREST):fe?O.copyTexSubImage3D(At,Tt,Ot,ce,Ae+ve,Nt,jt,Dt,Mt):O.copyTexSubImage2D(At,Tt,Ot,ce,Nt,jt,Dt,Mt);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else fe?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(At,Tt,Ot,ce,Ae,Dt,Mt,It,ge,We,Se.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(At,Tt,Ot,ce,Ae,Dt,Mt,It,ge,Se.data):O.texSubImage3D(At,Tt,Ot,ce,Ae,Dt,Mt,It,ge,We,Se):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Tt,Ot,ce,Dt,Mt,ge,We,Se.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Tt,Ot,ce,Se.width,Se.height,ge,Se.data):O.texSubImage2D(O.TEXTURE_2D,Tt,Ot,ce,Dt,Mt,ge,We,Se);y.pixelStorei(O.UNPACK_ROW_LENGTH,ti),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Li),y.pixelStorei(O.UNPACK_SKIP_ROWS,an),y.pixelStorei(O.UNPACK_SKIP_IMAGES,Yn),Tt===0&&L.generateMipmaps&&O.generateMipmap(At),y.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){X=0,W=0,it=null,y.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var b0={type:"change"},kf={type:"start"},w0={type:"end"},qh=new zs,M0=new Ei,qT=Math.cos(70*gf.DEG2RAD),Pe=new N,gi=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bf=1e-6,Wh=class extends Oa{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ps.ROTATE,MIDDLE:ps.DOLLY,RIGHT:ps.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ai,this._lastTargetPosition=new N,this._quat=new Ai().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $r,this._sphericalDelta=new $r,this._scale=1,this._panOffset=new N,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new N,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JT.bind(this),this._onPointerDown=WT.bind(this),this._onPointerUp=XT.bind(this),this._onContextMenu=eE.bind(this),this._onMouseWheel=KT.bind(this),this._onKeyDown=ZT.bind(this),this._onTouchStart=jT.bind(this),this._onTouchMove=tE.bind(this),this._onMouseDown=$T.bind(this),this._onMouseMove=QT.bind(this),this._interceptControlDown=iE.bind(this),this._interceptControlUp=nE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=de.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(b0),this.update(),this.state=de.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gi:n>Math.PI&&(n-=gi),s<-Math.PI?s+=gi:s>Math.PI&&(s-=gi),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Pe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qh.origin.copy(this.object.position),qh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qh.direction))<qT?this.object.lookAt(this.target):(M0.setFromNormalAndCoplanarPoint(this.object.up,this.target),qh.intersectPlane(M0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bf||this._lastTargetPosition.distanceToSquared(this.target)>Bf?(this.dispatchEvent(b0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gi/60*this.autoRotateSpeed*t:gi/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/e.clientHeight),this._rotateUp(gi*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/e.clientHeight),this._rotateUp(gi*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function WT(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function JT(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function XT(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(w0),this.state=de.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $T(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case ps.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case ps.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(kf)}function QT(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function KT(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(kf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(w0))}function ZT(i){this.enabled!==!1&&this._handleKeyDown(i)}function jT(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(kf)}function tE(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function eE(i){this.enabled!==!1&&i.preventDefault()}function iE(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nE(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Jh=class extends Us{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new hs;t.deleteAttribute("uv");let e=new Ys({side:qe}),n=new Ys,s=new Ia(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ye(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ua(t,n,6),a=new Oe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ye(t,ro(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ye(t,ro(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ye(t,ro(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ye(t,ro(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ye(t,ro(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ye(t,ro(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ro(i){return new Ea({color:0,emissive:16777215,emissiveIntensity:i})}var Uf={width:70,height:100,thickness:3,cornerRadius:4,holeWidth:24,holeHeight:4.2,holeY:7,holeType:"slot",holeDiameter:5,transmission:.96,roughness:.12,ior:1.49,edgeTint:"#c9e0eb",backgroundWhite:.45,whiteOpacity:1,printOpacity:.85,printSide:"front",autoRotate:!1,exposure:1,lightIntensity:1,viewBackground:"studio",showWhite:!1,showEdges:!1,showPrint:!0},li=(i,t,e)=>Math.max(t,Math.min(e,i)),ci=(i,t)=>Number.isFinite(Number(i))?Number(i):t;function T0(i,t,e,n,s,r){let o=Math.min(r,n/2,s/2);return i.moveTo(t+o,e),i.lineTo(t+n-o,e),i.quadraticCurveTo(t+n,e,t+n,e+o),i.lineTo(t+n,e+s-o),i.quadraticCurveTo(t+n,e+s,t+n-o,e+s),i.lineTo(t+o,e+s),i.quadraticCurveTo(t,e+s,t,e+s-o),i.lineTo(t,e+o),i.quadraticCurveTo(t,e,t+o,e),i.closePath(),i}function sE(i){let t=T0(new Hs,-i.width/2,-i.height/2,i.width,i.height,i.cornerRadius),e=i.height/2-i.holeY;if(i.holeType==="circle"&&i.holeDiameter>0){let n=new zn;n.absarc(0,e,i.holeDiameter/2,0,Math.PI*2,!0),t.holes.push(n)}else if(i.holeType!=="none"&&i.holeWidth>0&&i.holeHeight>0){let s=T0(new zn,-i.holeWidth/2,e-i.holeHeight/2,i.holeWidth,i.holeHeight,i.holeHeight/2).getPoints(20).reverse();t.holes.push(new zn(s))}return t}function rE(i,t){let e=new wa(i,32),n=e.getAttribute("position"),s=e.getAttribute("uv");for(let r=0;r<n.count;r++)s.setXY(r,n.getX(r)/t.width+.5,n.getY(r)/t.height+.5);return s.needsUpdate=!0,e}function E0(i){let t={...Uf,...i};t.width=li(ci(t.width,70),25,200),t.height=li(ci(t.height,100),35,250),t.thickness=li(ci(t.thickness,3),.5,12),t.cornerRadius=li(ci(t.cornerRadius,4),0,Math.min(t.width,t.height)/2),t.holeDiameter=li(ci(t.holeDiameter,5),0,t.width*.5),t.holeWidth=li(ci(t.holeWidth,12),0,t.width*.7),t.holeHeight=li(ci(t.holeHeight,3),0,t.height*.2);let e=t.holeType==="circle"?t.holeDiameter/2:t.holeHeight/2;return t.holeY=li(ci(t.holeY,6),e+.8,t.height-e-.8),t}function oE(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d");for(let n=0;n<16;n++)for(let s=0;s<16;s++)t.fillStyle=(s+n)%2?"#c5d0d8":"#eef3f5",t.fillRect(s*32,n*32,32,32);let e=new Vr(i);return e.colorSpace=Ge,e.wrapS=e.wrapT=Pr,e.repeat.set(12,12),e}function C0(i,{onError:t}={}){if(!i)throw new Error("3D \u9884\u89C8\u9700\u8981\u4E00\u4E2A\u6709\u6548\u7684\u5BB9\u5668\u3002");let e;try{e=new Gh({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch(dt){let Y=`\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u521B\u5EFA WebGL 3D \u9884\u89C8\uFF1A${dt.message}\u3002\u8BF7\u4F7F\u7528\u4E8C\u7EF4\u7F16\u8F91\u9884\u89C8\u3002`;throw t?.(Y,dt),new Error(Y,{cause:dt})}e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.outputColorSpace=Ge,e.toneMapping=Na,e.toneMappingExposure=1,e.domElement.setAttribute("aria-label","\u53EF\u62D6\u52A8\u65CB\u8F6C\u7684\u900F\u660E\u4E9A\u514B\u529B\u5DE5\u724C\u4E09\u7EF4\u9884\u89C8"),e.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:none",i.appendChild(e.domElement);let n=new Us,s=new Ve(32,1,.1,5e3),r=new Wh(s,e.domElement);r.enableDamping=!0,r.dampingFactor=.075,r.minDistance=45,r.maxDistance=900,r.autoRotateSpeed=1.2,r.enablePan=!0;let o=new Fn;n.add(o);let a=new no(e),l=new Jh,c=a.fromScene(l,.04);n.environment=c.texture,l.dispose(),a.dispose();let h=new Aa(15792127,6713472,2.1),u=new Xr(16777215,3.5);u.position.set(-80,100,140);let d=new Xr(12970495,2.4);d.position.set(100,50,-110),n.add(h,u,d);let f=oE(),p=new Un({color:"#e7edf0",side:fi,toneMapped:!1}),_=new ye(new Vs(2e3,2e3),p);_.renderOrder=-100,n.add(_);let g=E0(Uf),m="",S,w,x,M,T,A=!1,v=0,E=0,R=0,D={},B={},k={},I,U=dt=>{dt.preventDefault(),t?.("WebGL \u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931\u3002\u8BF7\u4FDD\u5B58\u914D\u7F6E\u540E\u5237\u65B0\u9875\u9762\uFF0C\u4E8C\u7EF4\u5BFC\u51FA\u4ECD\u53EF\u4F7F\u7528\u3002")};e.domElement.addEventListener("webglcontextlost",U,!1);function X(){S&&(o.remove(S),S.geometry.dispose(),S.material.dispose()),w&&(o.remove(w),w.material.dispose()),x&&(o.remove(x),x.material.dispose()),M&&(o.remove(M),M.geometry.dispose(),M.material.dispose()),T?.dispose(),S=w=x=M=T=void 0}function W(dt){X();let Y=sE(dt),J=new Ma(Y,{depth:dt.thickness,bevelEnabled:!1,steps:1,curveSegments:32});J.translate(0,0,-dt.thickness/2),S=new ye(J,new Ta({color:"#ffffff",metalness:0,opacity:1,transparent:!1,transmission:.96,roughness:.12,ior:1.49,thickness:dt.thickness,attenuationDistance:150,attenuationColor:dt.edgeTint,clearcoat:.6,clearcoatRoughness:.08,side:fi,envMapIntensity:1.1})),S.name="Acrylic \u2014 continuous solid including photo window",S.renderOrder=0,o.add(S),T=rE(Y,dt);let at={transparent:!0,side:fi,depthWrite:!1,alphaTest:.001,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1};w=new ye(T,new Un({...at,color:"#ffffff"})),x=new ye(T,new Un({...at,color:"#ffffff"})),w.name="Single-side white ink",x.name="Single-side colour ink",o.add(w,x),M=new da(new ga(J,28),new Gr({color:"#62bad2",transparent:!0,opacity:.5,depthWrite:!1})),M.renderOrder=20,o.add(M)}function it(dt,Y){return Y?(Y!==B[dt]&&(k[dt]?.dispose(),k[dt]=new Vr(Y),k[dt].colorSpace=Ge,k[dt].anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),B[dt]=Y),k[dt].needsUpdate=!0,k[dt]):(k[dt]?.dispose(),delete k[dt],delete B[dt],null)}function H(dt){if(dt.colorCanvas)return dt.colorCanvas;if(!dt.backgroundCanvas&&!dt.inkCanvas)return dt.compositeCanvas;let Y=dt.inkCanvas||dt.backgroundCanvas;I||=document.createElement("canvas"),I.width=Y.width,I.height=Y.height;let J=I.getContext("2d");for(let at of[dt.backgroundCanvas,dt.inkCanvas])at&&J.drawImage(at,0,0,Y.width,Y.height);return I}function j(dt={},Y=D){if(A)return;g=E0({...g,...dt}),D=Y||{};let J=g,at=["width","height","thickness","cornerRadius","holeWidth","holeHeight","holeY","holeType","holeDiameter"].map(nt=>J[nt]).join("|");at!==m&&(W(J),m=at),S.material.transmission=li(ci(J.transmission,.96),0,1),S.material.roughness=li(ci(J.roughness,.12),0,1),S.material.ior=li(ci(J.ior,1.49),1,2.333),S.material.attenuationColor.set(J.edgeTint||"#c9e0eb"),S.material.thickness=J.thickness,w.material.map=it("white",D.whiteCanvas),x.material.map=it("colour",H(D)),w.material.needsUpdate=!0,x.material.needsUpdate=!0,w.material.opacity=li(ci(J.whiteOpacity,1),0,1),x.material.opacity=D.printOpacityBaked?1:li(ci(J.printOpacity,.85),0,1);let zt=J.printSide==="back"?-1:1;w.position.z=zt*(J.thickness/2+.13),x.position.z=zt*(J.thickness/2+.155),w.visible=J.showPrint!==!1&&!!w.material.map,x.visible=J.showPrint!==!1&&!J.showWhite&&!!x.material.map,M.visible=!!J.showEdges,r.autoRotate=!!J.autoRotate,e.toneMappingExposure=li(ci(J.exposure,1),.2,3);let wt=li(ci(J.lightIntensity,1),0,4);h.intensity=2.1*wt,u.intensity=3.5*wt,d.intensity=2.4*wt,S.material.envMapIntensity=1.1*wt;let oe=J.viewBackground==="dark"?"#141e2c":"#e7edf0";n.background=new Jt(oe),p.color.set(J.viewBackground==="checker"?"#ffffff":oe),p.map=J.viewBackground==="checker"?f:null,p.needsUpdate=!0,Ct()}function tt(dt="perspective"){if(A)return;let Y=Math.max(g.width,g.height)*2.45,J={front:[0,0,1],back:[0,0,-1],left:[-1,.08,.28],right:[1,.08,.28],edge:[1,.06,.025],top:[0,1,.32],perspective:[.34,.16,1],threequarter:[.55,.22,1]},at=new N(...J[dt]||J.perspective).normalize();r.target.set(0,0,0),s.position.copy(at.multiplyScalar(Y)),s.up.set(0,1,0),s.lookAt(r.target),r.update(),Ct()}function Ct(){if(A)return;let dt=s.position.clone().sub(r.target).normalize();_.position.copy(r.target).addScaledVector(dt,-Math.max(g.height,g.width)*1.5),_.quaternion.copy(s.quaternion);let Y=(s.position.z-r.target.z)*(g.printSide==="back"?-1:1)>0;w&&x&&(w.renderOrder=Y?10:11,x.renderOrder=Y?11:10,w.material.depthTest=Y,x.material.depthTest=Y),e.render(n,s),E++}function mt(){if(A)return;let dt=i.getBoundingClientRect(),Y=Math.max(1,dt.width),J=Math.max(1,dt.height);e.setSize(Y,J,!1),s.aspect=Y/J,s.updateProjectionMatrix(),Ct()}let Zt=new ResizeObserver(mt);Zt.observe(i);function Wt(dt){A||(v=requestAnimationFrame(Wt),!(document.hidden||dt-R<1e3/40)&&(!i.getClientRects().length||i.hidden||(R=dt,r.update(),Ct())))}return j(Uf,{}),tt("perspective"),mt(),v=requestAnimationFrame(Wt),{update:j,setView:tt,resize:mt,snapshot(){return Ct(),e.domElement.toDataURL("image/png")},getDebugInfo(){return{available:!A,revision:"186",frames:E,dimensionsMm:[g.width,g.height,g.thickness],physicalHoles:g.holeType==="none"?0:1,photoWindowIsPhysicalHole:!1,transmission:S?.material.transmission,opacity:S?.material.opacity,printSide:g.printSide,layers:{colour:!!x?.material.map,white:!!w?.material.map},colourDepthTest:x?.material.depthTest,whiteDepthTest:w?.material.depthTest,renderer:e.info.render,memory:{...e.info.memory}}},dispose(){A||(A=!0,cancelAnimationFrame(v),Zt.disconnect(),r.dispose(),e.domElement.removeEventListener("webglcontextlost",U),X(),Object.values(k).forEach(dt=>dt.dispose()),f.dispose(),_.geometry.dispose(),p.dispose(),c.dispose(),n.environment=null,e.dispose(),e.forceContextLoss(),e.domElement.remove())}}}var A0="/alumni-badge-studio/jiangxi-JOFAUGXG.woff2";var R0="/alumni-badge-studio/alimama-7ZDQTWQX.woff2";var D0="/alumni-badge-studio/wenkai-DQKC32VV.woff2";var I0="/alumni-badge-studio/hanchan-5UIFBDS2.woff2";var O0="/alumni-badge-studio/smiley-N54GEDVX.woff2";var L0="/alumni-badge-studio/logo-3WA64HZF.png";var N0="/alumni-badge-studio/reference-background-V2X7VAMA.png";var mi=700,_i=1e3,Hf=[["Jiangxi","\u6C5F\u897F\u62D9\u6977 \xB7 \u624B\u5199\u529B\u91CF",A0],["Alimama","\u4E1C\u65B9\u5927\u6977 \xB7 \u9971\u6EE1\u5927\u65B9",R0],["Wenkai","\u971E\u9E5C\u6587\u6977 \xB7 \u8F7B\u76C8\u7AEF\u6B63",D0],["Hanchan","\u5BD2\u8749\u624B\u5199 \xB7 \u968F\u6027\u7B14\u950B",I0],["Smiley","\u5F97\u610F\u9ED1 \xB7 \u73B0\u4EE3\u7A84\u9ED1",O0]],AI=Object.fromEntries(Hf.map(([i,t])=>[i,t])),Ss={bg:"\u5E95\u677F",dept:"\u90E8\u95E8\u5927\u5B57",assoc:"\u534F\u4F1A\u540D\u79F0",name:"\u59D3\u540D",position:"\u804C\u52A1",slogan:"\u53E3\u53F7",logo:"\u534F\u4F1A\u6807\u5FD7",star:"\u661F\u5149",line:"\u5206\u9694\u7EBF"},P0="alumni-badge-studio-v2",rn=i=>document.querySelector(i),Xa=i=>{let t=rn("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove("show"),2200)},ut,Vn=[],Gn=[],oo=-1,$a=!1,Ui={},F0=Object.fromEntries(Hf.map(([i,,t])=>[i,t])),B0=new Set;async function H0(i){if(!i||B0.has(i)||!F0[i])return;let t=new FontFace(i,`url(${F0[i]})`);await t.load(),document.fonts.add(t),B0.add(i)}async function pE(){await H0("Jiangxi"),[Ui.logo,Ui.bg]=await Promise.all([si.fromURL(L0),si.fromURL(N0)])}function gE(){ut=new bl(document.getElementById("c"),{width:mi,height:_i,preserveObjectStacking:!0,backgroundColor:"#ffffff"});let i=rn("#canvas-wrap"),t=()=>{let e=i.parentElement.getBoundingClientRect(),n=Math.min((e.height-60)/_i,(e.width-60)/mi,1),s=i.querySelector(".canvas-container");s&&(s.style.transform=`scale(${n})`,s.style.transformOrigin="top left"),i.style.width=Math.round(mi*n)+"px",i.style.height=Math.round(_i*n)+"px",requestAnimationFrame(()=>{ut&&ut.calcOffset(),ut&&ut.requestRenderAll()})};t(),window.addEventListener("resize",t)}function Fe(i,t={}){let e=new Qn(i,Object.assign({fontFamily:"Jiangxi",fontSize:120,fill:"#102d52",textAlign:"center",lineHeight:1.05,charSpacing:0,editable:!0,padding:4,shadow:null,stroke:null,strokeWidth:0},t));return e.role=t.role||"dept",e.name=Ss[e.role]||"\u6587\u5B57",e}function Ja(i,t,e=90){let n=e*Math.PI/180,s=Math.cos(n),r=Math.sin(n);return new sr({type:"linear",gradientUnits:"percentage",coords:{x1:.5-s/2,y1:.5-r/2,x2:.5+s/2,y2:.5+r/2},colorStops:[{offset:0,color:i},{offset:1,color:t}]})}function mE(i,{select:t=!0}={}){return ut.add(i),ut.setActiveObject(i),ut.requestRenderAll(),Oi(),je(),t&&yi(),i}function zf(){let i;if(Ui.bg){i=new si(Ui.bg.getElement(),{left:0,top:0,selectable:!1,evented:!1,objectCaching:!1});let t=Math.max(mi/i.width,_i/i.height);i.scale(t),i.set({left:(mi-i.getScaledWidth())/2,top:(_i-i.getScaledHeight())/2})}else i=new Gi({width:mi,height:_i,left:0,top:0,selectable:!1,evented:!1,fill:Ja("#c5e7f3","#eadcf2",135)});return i.role="bg",i.name="\u5E95\u677F",ut.add(i),i}function G0(){ut.clear(),ut.backgroundColor="#ffffff",zf();let i=Fe("\u9879\u76EE\u90E8",{role:"dept",left:350,top:330,originX:"center",originY:"center",fontSize:168,fontFamily:"Jiangxi"});ut.add(i);let t=Fe(`\u6821
\u53CB
\u4EA4
\u6D41
\u53D1
\u5C55
\u534F
\u4F1A`,{role:"assoc",left:596,top:110,fontSize:30,lineHeight:1.28,fontFamily:"Wenkai"});if(ut.add(t),Ui.logo){let r=new si(Ui.logo.getElement(),{left:62,top:66,role:"logo"});r.scaleToWidth(112),r.name=Ss.logo,ut.add(r)}let e=Fe("\u59D3\u540D / NAME",{role:"name",left:82,top:742,fontSize:26,fontFamily:"Wenkai",textAlign:"left"});ut.add(e);let n=Fe("\u804C\u52A1 / POSITION",{role:"position",left:82,top:796,fontSize:26,fontFamily:"Wenkai",textAlign:"left"});ut.add(n);let s=Fe("\u70ED\u7231\u53EF\u62B5\u5C81\u6708\u6F2B\u957F",{role:"slogan",left:350,top:906,originX:"center",fontSize:34,fontFamily:"Hanchan"});ut.add(s),ut.renderAll(),Oi(),je()}var _E={classic:()=>{G0()},center:()=>{ut.clear(),ut.backgroundColor="#ffffff",zf();let i=Fe("\u6821\u53CB\u4EA4\u6D41\u53D1\u5C55\u534F\u4F1A",{role:"assoc",left:350,top:78,originX:"center",fontSize:26,fontFamily:"Wenkai",charSpacing:120});ut.add(i);let t=Fe("\u9879\u76EE\u90E8",{role:"dept",left:350,top:470,originX:"center",originY:"center",fontSize:160,fontFamily:"Alimama"});if(ut.add(t),Ui.logo){let r=new si(Ui.logo.getElement(),{left:350,top:150,originX:"center"});r.scaleToWidth(96),r.role="logo",r.name=Ss.logo,ut.add(r)}let e=Fe("\u59D3\u540D / NAME",{role:"name",left:350,top:812,originX:"center",fontSize:24,fontFamily:"Wenkai"}),n=Fe("\u804C\u52A1 / POSITION",{role:"position",left:350,top:852,originX:"center",fontSize:22,fontFamily:"Wenkai"});ut.add(e,n);let s=Fe("\u70ED\u7231\u53EF\u62B5\u5C81\u6708\u6F2B\u957F",{role:"slogan",left:350,top:926,originX:"center",fontSize:30,fontFamily:"Hanchan"});ut.add(s)},minimal:()=>{if(ut.clear(),ut.backgroundColor="#ffffff",zf(),Ui.logo){let n=new si(Ui.logo.getElement(),{left:66,top:64});n.scaleToWidth(88),n.role="logo",n.name=Ss.logo,ut.add(n)}let i=Fe(`\u9879
\u76EE
\u90E8`,{role:"dept",left:540,top:150,fontSize:96,lineHeight:1.12,fontFamily:"Smiley",textAlign:"center"});ut.add(i);let t=Fe("\u59D3\u540D / NAME",{role:"name",left:80,top:806,fontSize:26,fontFamily:"Wenkai",textAlign:"left"});ut.add(t);let e=Fe("\u70ED\u7231\u53EF\u62B5\u5C81\u6708\u6F2B\u957F",{role:"slogan",left:80,top:872,fontSize:28,fontFamily:"Hanchan",textAlign:"left"});ut.add(e)}};function yE(i){let t=_E[i];t&&(t(),ut.renderAll(),xE(),Oi(),je(),yi())}function xE(){ut.discardActiveObject(),ut.requestRenderAll()}function vE(){return JSON.stringify(ut.toObject(["role","name"]))}function Oi(){if($a)return;let i=vE();Gn[oo]!==i&&(Gn=Gn.slice(0,oo+1),Gn.push(i),Gn.length>60&&Gn.shift(),oo=Gn.length-1)}async function V0(i){i<0||i>=Gn.length||($a=!0,oo=i,await ut.loadFromJSON(JSON.parse(Gn[i])),ut.requestRenderAll(),$a=!1,je(),yi())}var k0=()=>V0(oo-1),U0=()=>V0(oo+1);function SE(){if(Vn.length)return;let i=t=>new $n(t==="v"?[0,0,0,_i]:[0,0,mi,0],{stroke:"#e4572e",strokeWidth:1,selectable:!1,evented:!1,excludeFromExport:!0,visible:!1});Vn=[i("v"),i("h")],ut.add(...Vn)}function bE(i){SE();let t=i.getCenterPoint(),e=8/(ut.getZoom()||1),n=[mi/2,60,mi-60],s=[_i/2,60,_i-60],r=Vn[0],o=Vn[1];r.visible=o.visible=!1;for(let a of n)if(Math.abs(t.x-a)<e){i.left+=a-t.x,r.set({x1:a,x2:a,visible:!0});break}for(let a of s)if(Math.abs(t.y-a)<e){i.top+=a-t.y,o.set({y1:a,y2:a,visible:!0});break}}function ME(){Vn.forEach(i=>i.visible=!1),ut.requestRenderAll()}function Xh(i){let t=i&&i._hole;t&&(t.set({left:i.left,top:i.top,width:i.width,height:i.height,scaleX:i.scaleX,scaleY:i.scaleY,angle:i.angle}),t.setCoords())}function ze(i,t){return`<div class="row"><label class="lbl">${i}</label><div class="grow">${t}</div></div>`}function yi(){let i=ut.getActiveObject(),t=rn("#props");if(!i){t.innerHTML='<p class="hint">\u9009\u4E2D\u753B\u5E03\u4E0A\u7684\u5143\u7D20\u540E\u53EF\u8C03\u53C2\u6570</p>';return}let e=i.type==="i-text",n="";n+=ze("\u7C7B\u578B",`<div class="out" style="text-align:left">${i.name||Ss[i.role]||i.type}</div>`),e&&(n+=ze("\u5185\u5BB9",`<input type="text" data-p="text" value="${String(i.text).replace(/"/g,"&quot;").replace(/\n/g," / ")}">`),n+=ze("\u5B57\u4F53",`<select data-p="fontFamily">${Hf.map(([r,o])=>`<option value="${r}" ${i.fontFamily===r?"selected":""}>${o}</option>`).join("")}</select>`),n+=ze("\u5B57\u53F7",`<input type="range" data-p="fontSize" min="12" max="320" step="1" value="${i.fontSize}"><div class="out">${Math.round(i.fontSize)}</div>`),n+=ze("\u5B57\u8DDD",`<input type="range" data-p="charSpacing" min="-200" max="800" step="10" value="${i.charSpacing}"><div class="out">${i.charSpacing}</div>`),n+=ze("\u884C\u8DDD",`<input type="range" data-p="lineHeight" min="0.6" max="2.6" step="0.02" value="${i.lineHeight}"><div class="out">${Number(i.lineHeight).toFixed(2)}</div>`),n+=ze("\u5BF9\u9F50",'<div class="mini"><button data-align="left">\u5DE6</button><button data-align="center">\u4E2D</button><button data-align="right">\u53F3</button></div>'),n+=ze("\u7C97\u4F53",`<input type="checkbox" data-p="bold" ${i.fontWeight==="bold"?"checked":""}>`));let s=i.fill&&typeof i.fill=="object";n+=ze("\u586B\u8272",`<input type="color" data-p="fillColor" value="${s?i.fill.colorStops?.[0]?.color||"#102d52":i.fill||"#102d52"}">`),n+=ze("\u6E10\u53D8",`<input type="checkbox" data-p="gradOn" ${s?"checked":""}>`),s&&(n+=ze("\u8D77\u59CB",`<input type="color" data-p="gradA" value="${i.fill.colorStops?.[0]?.color||"#102d52"}">`),n+=ze("\u7ED3\u675F",`<input type="color" data-p="gradB" value="${i.fill.colorStops?.[1]?.color||"#2c70ae"}">`),n+=ze("\u89D2\u5EA6",`<input type="range" data-p="gradAngle" min="0" max="180" step="5" value="${i._gradAngle??90}"><div class="out">${i._gradAngle??90}\xB0</div>`)),e&&(n+=ze("\u63CF\u8FB9",`<input type="color" data-p="strokeColor" value="${i.stroke||"#0b1c2e"}">`),n+=ze("\u63CF\u8FB9\u5BBD",`<input type="range" data-p="strokeWidth" min="0" max="16" step="0.5" value="${i.strokeWidth||0}"><div class="out">${i.strokeWidth||0}</div>`)),n+=ze("\u900F\u660E\u5EA6",`<input type="range" data-p="opacity" min="0.05" max="1" step="0.01" value="${i.opacity}"><div class="out">${Math.round(i.opacity*100)}%</div>`),n+=ze("\u4F4D\u7F6E",`<div class="mini"><input type="number" data-p="left" value="${Math.round(i.left)}" title="X"><input type="number" data-p="top" value="${Math.round(i.top)}" title="Y"></div>`),n+=ze("\u65CB\u8F6C",`<input type="range" data-p="angle" min="-180" max="180" step="1" value="${Math.round(i.angle)}"><div class="out">${Math.round(i.angle)}\xB0</div>`),n+='<div class="row"><div class="mini grow"><button data-act="up">\u4E0A\u79FB\u4E00\u5C42</button><button data-act="down">\u4E0B\u79FB\u4E00\u5C42</button></div></div>',n+='<div class="row"><div class="mini grow"><button data-act="dup">\u590D\u5236</button><button data-act="del">\u5220\u9664</button></div></div>',t.innerHTML=n,wE(i)}function wE(i){let t=rn("#props");t.querySelectorAll("[data-p]").forEach(e=>{let n=e.dataset.p,s=()=>{if(n==="text")i.set("text",e.value);else if(n==="fontFamily"){let r=e.value;H0(r).then(()=>{i.set("fontFamily",r),ut.requestRenderAll()})}else n==="fontSize"?(i.set("fontSize",+e.value),e.parentElement.querySelector(".out").textContent=Math.round(+e.value)):n==="charSpacing"?(i.set("charSpacing",+e.value),e.parentElement.querySelector(".out").textContent=e.value):n==="lineHeight"?(i.set("lineHeight",+e.value),e.parentElement.querySelector(".out").textContent=(+e.value).toFixed(2)):n==="bold"?i.set("fontWeight",e.checked?"bold":"normal"):n==="fillColor"?i.fill&&typeof i.fill=="object"||i.set("fill",e.value):n==="gradOn"?(e.checked?(i._gradC1=i._gradC1||"#102d52",i._gradC2=i._gradC2||"#2c70ae",i.set("fill",Ja(i._gradC1,i._gradC2,i._gradAngle??90))):i.set("fill",i._gradC1||"#102d52"),yi()):n==="gradA"?(i._gradC1=e.value,i.set("fill",Ja(i._gradC1,i._gradC2||"#2c70ae",i._gradAngle??90))):n==="gradB"?(i._gradC2=e.value,i.set("fill",Ja(i._gradC1||"#102d52",i._gradC2,i._gradAngle??90))):n==="gradAngle"?(i._gradAngle=+e.value,i.set("fill",Ja(i._gradC1||"#102d52",i._gradC2||"#2c70ae",i._gradAngle)),e.parentElement.querySelector(".out").textContent=e.value+"\xB0"):n==="strokeColor"?i.set({stroke:e.value,strokeWidth:i.strokeWidth||2}):n==="strokeWidth"?(i.set("strokeWidth",+e.value),+e.value&&i.set("stroke",i.stroke||"#0b1c2e"),e.parentElement.querySelector(".out").textContent=e.value):n==="opacity"?(i.set("opacity",+e.value),e.parentElement.querySelector(".out").textContent=Math.round(+e.value*100)+"%"):n==="left"?i.set("left",+e.value):n==="top"?i.set("top",+e.value):n==="angle"&&(i.set("angle",+e.value),e.parentElement.querySelector(".out").textContent=e.value+"\xB0");ut.requestRenderAll()};e.addEventListener("input",s),e.addEventListener("change",()=>{s(),Oi(),(n==="text"||n==="gradOn")&&yi()})}),t.querySelectorAll("[data-align]").forEach(e=>e.onclick=()=>{i.set("textAlign",e.dataset.align),ut.requestRenderAll(),Oi()}),t.querySelectorAll("[data-act]").forEach(e=>e.onclick=()=>{let n=e.dataset.act;n==="del"&&(ut.remove(i),ut.discardActiveObject()),n==="dup"&&i.clone().then(s=>{s.set({left:i.left+24,top:i.top+24}),s.role=i.role,s.name=i.name,ut.add(s),ut.setActiveObject(s)}),n==="up"&&ut.bringObjectForward(i),n==="down"&&ut.sendObjectBackwards(i),ut.requestRenderAll(),Oi(),je(),yi()})}function je(){let i=rn("#layers"),t=ut.getObjects().filter(n=>n.role!=="guide"),e=ut.getActiveObject();i.innerHTML=t.slice().reverse().map((n,s)=>{let r=t.length-1-s;return`<li data-i="${r}" class="${n===e?"active":""}"><span class="name">${n.name||Ss[n.role]||n.type}</span><span class="eye" data-eye="${r}">${n.visible===!1?"\u25CB":"\u25CF"}</span></li>`}).join(""),i.querySelectorAll("li").forEach(n=>{n.onclick=s=>{if(s.target.dataset.eye!==void 0)return;let r=t[+n.dataset.i];r&&(ut.setActiveObject(r),ut.requestRenderAll(),je(),yi())}}),i.querySelectorAll("[data-eye]").forEach(n=>n.onclick=s=>{s.stopPropagation();let r=t[+n.dataset.eye];r&&(r.visible=r.visible===!1,ut.requestRenderAll(),je(),Oi())})}function TE(i){let t={dept:()=>Fe("\u9879\u76EE\u90E8",{role:"dept",left:350,top:330,originX:"center",originY:"center",fontSize:140}),assoc:()=>Fe(`\u6821
\u53CB
\u4EA4
\u6D41
\u53D1
\u5C55
\u534F
\u4F1A`,{role:"assoc",left:596,top:110,fontSize:30,lineHeight:1.28,fontFamily:"Wenkai"}),name:()=>Fe("\u59D3\u540D / NAME",{role:"name",left:82,top:742,fontSize:26,textAlign:"left",fontFamily:"Wenkai"}),position:()=>Fe("\u804C\u52A1 / POSITION",{role:"position",left:82,top:796,fontSize:26,textAlign:"left",fontFamily:"Wenkai"}),slogan:()=>Fe("\u70ED\u7231\u53EF\u62B5\u5C81\u6708\u6F2B\u957F",{role:"slogan",left:350,top:906,originX:"center",fontSize:34,fontFamily:"Hanchan"}),line:()=>{let n=new $n([0,0,520,0],{stroke:"#102d52",strokeWidth:3,left:82,top:700});return n.role="line",n.name=Ss.line,n},photo:()=>{let n={left:96,top:330,width:250,height:330},s=new Gi({...n,fill:"#ffffff",selectable:!1,evented:!1,objectCaching:!1,globalCompositeOperation:"destination-out"});s.role="hole",s.name="\u7167\u7247\u7A97\uFF08\u6316\u5B54\uFF09";let r=new Gi({...n,fill:"rgba(196,214,226,0.22)",stroke:"#2c70ae",strokeWidth:2,strokeDashArray:[7,5]});return r.role="photo",r.name="\u7167\u7247\u7A97",r._hole=s,ut.add(s),ut.moveObjectTo(s,1),ut.add(r),ut.setActiveObject(r),null},star:()=>Fe("\u2733",{role:"star",left:90,top:60,fontSize:56}),logo:()=>{if(!Ui.logo)return null;let n=new si(Ui.logo.getElement(),{left:82,top:90});return n.scaleToWidth(112),n.role="logo",n.name=Ss.logo,n}},e=t[i]&&t[i]();e?mE(e):i==="photo"&&(Oi(),je(),yi(),ut.requestRenderAll())}function Gf(i=1){let t=ut.toCanvasElement(i),e=t.getContext("2d");return ut.getObjects().filter(n=>n.role==="hole").forEach(n=>{let s=n.getCenterPoint();e.save(),e.globalCompositeOperation="destination-out",e.translate(s.x*i,s.y*i),e.rotate((n.angle||0)*Math.PI/180),e.fillStyle="#000",e.fillRect(-n.getScaledWidth()*i/2,-n.getScaledHeight()*i/2,n.getScaledWidth()*i,n.getScaledHeight()*i),e.restore()}),t}function EE(){let i=Vn.map(a=>a.visible);Vn.forEach(a=>a.visible=!1);let t=Gf(1);Vn.forEach((a,l)=>a.visible=i[l]);let e=document.createElement("canvas");e.width=mi,e.height=_i,e.getContext("2d").drawImage(t,0,0,mi,_i);let n=document.createElement("canvas");n.width=mi,n.height=_i;let s=n.getContext("2d"),r=e.getContext("2d").getImageData(0,0,mi,_i),o=s.createImageData(mi,_i);for(let a=0;a<r.data.length;a+=4){let l=r.data[a+3];o.data[a]=o.data[a+1]=o.data[a+2]=255,o.data[a+3]=Math.min(255,l*4)}return s.putImageData(o,0,0),{colorCanvas:e,whiteCanvas:n,printOpacityBaked:!0,warnings:[]}}function Y0(i,t){let e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(e),2e4)}async function CE(){let i=Gf(1.1811023622047245),t=await new Promise(e=>i.toBlob(e,"image/png"));Y0(t,`\u6821\u534F\u5DE5\u724C_${new Date().toISOString().slice(0,10)}.png`),Xa("PNG \u5DF2\u5BFC\u51FA\uFF08\u7EA6 300dpi\uFF09")}function z0(){let i={format:"alumni-badge-canvas",version:2,updatedAt:new Date().toISOString(),design:ut.toObject(["role","name","_gradC1","_gradC2","_gradAngle"])};Y0(new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),`\u6821\u534F\u5DE5\u724C_\u753B\u5E03_${new Date().toISOString().slice(0,10)}.json`),Xa("\u8BBE\u8BA1\u5DF2\u4FDD\u5B58\u4E3A JSON")}async function AE(i){try{let t=JSON.parse(await i.text()),e=t.design||t;$a=!0,await ut.loadFromJSON(e),$a=!1,ut.requestRenderAll(),Oi(),je(),yi(),Xa("\u8BBE\u8BA1\u5DF2\u5BFC\u5165")}catch(t){Xa("\u5BFC\u5165\u5931\u8D25\uFF1A"+t.message)}}var ao=null;function RE(){let i=rn("#d3d");i.hidden=!1,requestAnimationFrame(()=>{ao||(ao=C0(rn("#viewer3d"),{onError:t=>Xa("3D \u4E0D\u53EF\u7528\uFF1A"+t)})),q0()})}function q0(){ao&&(ao.update({width:70,height:100,thickness:+rn("#d3d-thickness").value,transmission:.96,roughness:.12,depthWrite:!1},EE()),ao.resize())}function DE(){document.addEventListener("click",i=>{let t=i.target.closest("[data-act]")?.dataset.act;t&&(t==="undo"&&k0(),t==="redo"&&U0(),t==="png"&&CE(),t==="json"&&z0(),t==="3d"&&RE(),t==="close3d"&&(rn("#d3d").hidden=!0))}),document.querySelectorAll("[data-add]").forEach(i=>i.onclick=()=>TE(i.dataset.add)),document.querySelectorAll("[data-tpl]").forEach(i=>i.onclick=()=>yE(i.dataset.tpl)),rn("#file-json").onchange=i=>{i.target.files[0]&&AE(i.target.files[0]),i.target.value=""},rn("#d3d-thickness").oninput=q0,document.querySelectorAll("[data-view]").forEach(i=>i.onclick=()=>ao?.setView(i.dataset.view)),document.addEventListener("keydown",i=>{if(i.target.matches("input,textarea,select"))return;let t=i.ctrlKey||i.metaKey;t&&i.key.toLowerCase()==="z"&&(i.preventDefault(),i.shiftKey?U0():k0()),t&&i.key.toLowerCase()==="s"&&(i.preventDefault(),z0()),(i.key==="Delete"||i.key==="Backspace")&&ut.getActiveObject()&&!ut.getActiveObject().isEditing&&(i.preventDefault(),ut.remove(ut.getActiveObject()),ut.discardActiveObject(),Oi(),je(),yi())}),ut.on("selection:created",()=>{yi(),je()}),ut.on("selection:updated",()=>{yi(),je()}),ut.on("selection:cleared",()=>{yi(),je()}),ut.on("object:moving",i=>{i.target.role!=="bg"&&i.target.role!=="hole"&&bE(i.target),Xh(i.target)}),ut.on("mouse:up",ME),ut.on("object:modified",i=>{Xh(i.target),Oi()}),ut.on("object:scaling",i=>Xh(i.target)),ut.on("object:rotating",i=>Xh(i.target)),ut.on("object:added",()=>je()),ut.on("object:removed",()=>je()),ut.on("mouse:dblclick",i=>{let t=i.target;t&&t.type==="i-text"&&(ut.setActiveObject(t),t.enterEditing(),t.selectAll())}),ut.on("text:editing:exited",()=>Oi())}(async function(){try{await pE(),gE();let t=localStorage.getItem(P0),e=!1;if(t)try{let n=JSON.parse(t).design;n&&Array.isArray(n.objects)&&n.objects.some(s=>s.role)&&(await ut.loadFromJSON(n),e=!0)}catch{e=!1}e||G0(),window.__badge=ut,window.__render=Gf,ut.requestRenderAll(),setTimeout(()=>{ut.calcOffset(),ut.requestRenderAll()},250),DE(),je(),yi(),Oi(),setInterval(()=>{try{localStorage.setItem(P0,JSON.stringify({design:ut.toObject(["role","name","_gradC1","_gradC2","_gradAngle"])}))}catch{}},1500)}catch(t){console.error(t),document.body.innerHTML=`<pre style="padding:24px;color:#b42318">\u8F7D\u5165\u5931\u8D25\uFF1A${t.message}</pre>`}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
