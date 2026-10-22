(()=>{var ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kh=0,Vl=1,Gh=2;var Er=1,Vh=2,vs=3,mi=0,Nt=1,Yt=2,Nn=0,Es=1,Ql=2,Yl=3,Xl=4,Qh=5;var Oi=100,Yh=101,Xh=102,zh=103,Wh=104,Zh=200,jh=201,Kh=202,ed=203,zl=204,Wl=205,td=206,nd=207,id=208,sd=209,rd=210,ad=211,od=212,ld=213,cd=214,_a=0,xa=1,ba=2,as=3,Sa=4,va=5,Ea=6,Ma=7,to=0,hd=1,dd=2,xn=0,Zl=1,jl=2,Kl=3,Mr=4,ec=5,tc=6,nc=7;var ic=300,gi=301,Ci=302,no=303,io=304,Tr=306,os=1e3,Rn=1001,Ta=1002,At=1003,fd=1004;var Lr=1005;var Bt=1006,so=1007;var yi=1008;var Xt=1009,sc=1010,rc=1011,Ms=1012,ro=1013,bn=1014,hn=1015,Sn=1016,ao=1017,oo=1018,Ts=1020,ac=35902,oc=35899,lc=1021,cc=1022,dn=1023,An=1026,_i=1027,lo=1028,co=1029,xi=1030,ho=1031;var fo=1033,Rr=33776,Dr=33777,Ar=33778,Ir=33779,uo=35840,po=35841,mo=35842,go=35843,yo=36196,_o=37492,xo=37496,bo=37488,So=37489,wr=37490,vo=37491,Eo=37808,Mo=37809,To=37810,Lo=37811,Ro=37812,Do=37813,Ao=37814,Io=37815,wo=37816,Bo=37817,No=37818,Fo=37819,Oo=37820,Co=37821,Po=36492,qo=36494,Ho=36495,Uo=36283,$o=36284,Br=36285,Jo=36286;var Vs=2300,La=2301,ga=2302,Nl=2303,Fl=2400,Ol=2401,Cl=2402;var ud=3200;var Nr=0,pd=1,Zn="",It="srgb",Qs="srgb-linear",Ys="linear",lt="srgb";var ya=7680;var md=519,gd=512,yd=513,_d=514,ko=515,xd=516,bd=517,Go=518,Sd=519,vd=35044;var hc="300 es",yn=2e3,ls=2001;function kf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){let i=Xs("canvas");return i.style.display="block",i}var ch={},cs=null;function dc(...i){let e="THREE."+i.shift();cs?cs("log",e,...i):console.log(e,...i)}function Md(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=Md(i);let e="THREE."+i.shift();if(cs)cs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=Md(i);let e="THREE."+i.shift();if(cs)cs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Di(...i){let e=i.join(" ");e in ch||(ch[e]=!0,qe(...i))}function Td(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ld={[_a]:xa,[ba]:Ea,[Sa]:Ma,[as]:va,[xa]:_a,[Ea]:ba,[Ma]:Sa,[va]:as},_n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=1234567,ss=Math.PI/180,hs=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function fc(i,e){return(i%e+e)%e}function Vf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qf(i,e,t){return i!==e?(t-i)/(e-i):0}function Js(i,e,t){return(1-t)*i+t*e}function Yf(i,e,t,n){return Js(i,e,1-Math.exp(-t*n))}function Xf(i,e=1){return e-Math.abs(fc(i,e*2)-e)}function zf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jf(i,e){return i+Math.random()*(e-i)}function Kf(i){return i*(.5-Math.random())}function eu(i){i!==void 0&&(hh=i);let e=hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tu(i){return i*ss}function nu(i){return i*hs}function iu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function su(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ru(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function au(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*d,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var uc={DEG2RAD:ss,RAD2DEG:hs,generateUUID:Pi,clamp:We,euclideanModulo:fc,mapLinear:Vf,inverseLerp:Qf,lerp:Js,damp:Yf,pingpong:Xf,smoothstep:zf,smootherstep:Wf,randInt:Zf,randFloat:jf,randFloatSpread:Kf,seededRandom:eu,degToRad:tu,radToDeg:nu,isPowerOfTwo:iu,ceilPowerOfTwo:su,floorPowerOfTwo:ru,setQuaternionFromProperEuler:au,normalize:Ht,denormalize:is},he=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],S=r[a+3];if(u!==S||l!==h||c!==f||d!==g){let p=l*h+c*f+d*g+u*S;p<0&&(h=-h,f=-f,g=-g,S=-S,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),R=Math.sin(M);m=Math.sin(m*M)/R,o=Math.sin(o*M)/R,l=l*m+h*o,c=c*m+f*o,d=d*m+g*o,u=u*m+S*o}else{l=l*m+h*o,c=c*m+f*o,d=d*m+g*o,u=u*m+S*o;let M=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=M,c*=M,d*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-o*f,e[t+2]=c*g+d*f+o*h-l*u,e[t+3]=d*g-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new N,dh=new nn,Ye=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],S=s[0],p=s[3],m=s[6],M=s[1],R=s[4],b=s[7],v=s[2],T=s[5],D=s[8];return r[0]=a*S+o*M+l*v,r[3]=a*p+o*R+l*T,r[6]=a*m+o*b+l*D,r[1]=c*S+d*M+u*v,r[4]=c*p+d*R+u*T,r[7]=c*m+d*b+u*D,r[2]=h*S+f*M+g*v,r[5]=h*p+f*R+g*T,r[8]=h*m+f*b+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,f=c*r-a*l,g=t*u+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=u*S,e[1]=(s*c-d*n)*S,e[2]=(o*n-s*a)*S,e[3]=h*S,e[4]=(d*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(e,t)),this}rotate(e){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ll=new Ye,fh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ou(){let i={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qs]:{primaries:e,whitePoint:n,transfer:Ys,toXYZ:fh,fromXYZ:uh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:fh,fromXYZ:uh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}var nt=ou();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ki,Ra=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ki===void 0&&(ki=Xs("canvas")),ki.width=e.width,ki.height=e.height;let s=ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lu=0,ds=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cl(s[a].image)):r.push(cl(s[a]))}else r=cl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var cu=0,hl=new N,Ut=class i extends _n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=Bt,a=yi,o=dn,l=Xt,c=i.DEFAULT_ANISOTROPY,d=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Pi(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=ic;Ut.DEFAULT_ANISOTROPY=1;var _t=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],S=l[2],p=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-S)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+S)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,b=(f+1)/2,v=(m+1)/2,T=(d+h)/4,D=(u+S)/4,_=(g+p)/4;return R>b&&R>v?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=D/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=_/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=D/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-S)*(u-S)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-S)/M,this.z=(h-d)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Da=class extends _n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ut(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ds(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends Da{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zs=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var dt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,d,u,h,f,g,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,h,f,g,S,p)}set(e,t,n,s,r,a,o,l,c,d,u,h,f,g,S,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=f,m[7]=g,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*d,f=a*u,g=o*d,S=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,g=c*d,S=c*u;t[0]=h+S*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,g=c*d,S=c*u;t[0]=h-S*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*d,f=a*u,g=o*d,S=o*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+S,t[1]=l*u,t[5]=S*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,S=o*c;t[0]=l*d,t[4]=S-h*u,t[8]=g*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-S*u}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,S=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+S,t[5]=a*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*d,t[10]=S*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hu,e,du)}lookAt(e,t,n){let s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ii.crossVectors(n,jt),ii.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ii.crossVectors(n,jt)),ii.normalize(),kr.crossVectors(jt,ii),s[0]=ii.x,s[4]=kr.x,s[8]=jt.x,s[1]=ii.y,s[5]=kr.y,s[9]=jt.y,s[2]=ii.z,s[6]=kr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],S=n[6],p=n[10],m=n[14],M=n[3],R=n[7],b=n[11],v=n[15],T=s[0],D=s[4],_=s[8],L=s[12],I=s[1],O=s[5],G=s[9],J=s[13],w=s[2],H=s[6],z=s[10],Y=s[14],ne=s[3],X=s[7],j=s[11],C=s[15];return r[0]=a*T+o*I+l*w+c*ne,r[4]=a*D+o*O+l*H+c*X,r[8]=a*_+o*G+l*z+c*j,r[12]=a*L+o*J+l*Y+c*C,r[1]=d*T+u*I+h*w+f*ne,r[5]=d*D+u*O+h*H+f*X,r[9]=d*_+u*G+h*z+f*j,r[13]=d*L+u*J+h*Y+f*C,r[2]=g*T+S*I+p*w+m*ne,r[6]=g*D+S*O+p*H+m*X,r[10]=g*_+S*G+p*z+m*j,r[14]=g*L+S*J+p*Y+m*C,r[3]=M*T+R*I+b*w+v*ne,r[7]=M*D+R*O+b*H+v*X,r[11]=M*_+R*G+b*z+v*j,r[15]=M*L+R*J+b*Y+v*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],S=e[7],p=e[11],m=e[15],M=l*f-c*h,R=o*f-c*u,b=o*h-l*u,v=a*f-c*d,T=a*h-l*d,D=a*u-o*d;return t*(S*M-p*R+m*b)-n*(g*M-p*v+m*T)+s*(g*R-S*v+m*D)-r*(g*b-S*T+p*D)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],S=e[13],p=e[14],m=e[15],M=t*o-n*a,R=t*l-s*a,b=t*c-r*a,v=n*l-s*o,T=n*c-r*o,D=s*c-r*l,_=d*S-u*g,L=d*p-h*g,I=d*m-f*g,O=u*p-h*S,G=u*m-f*S,J=h*m-f*p,w=M*J-R*G+b*O+v*I-T*L+D*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/w;return e[0]=(o*J-l*G+c*O)*H,e[1]=(s*G-n*J-r*O)*H,e[2]=(S*D-p*T+m*v)*H,e[3]=(h*T-u*D-f*v)*H,e[4]=(l*I-a*J-c*L)*H,e[5]=(t*J-s*I+r*L)*H,e[6]=(p*b-g*D-m*R)*H,e[7]=(d*D-h*b+f*R)*H,e[8]=(a*G-o*I+c*_)*H,e[9]=(n*I-t*G-r*_)*H,e[10]=(g*T-S*b+m*M)*H,e[11]=(u*b-d*T-f*M)*H,e[12]=(o*L-a*O-l*_)*H,e[13]=(t*O-n*L+s*_)*H,e[14]=(S*R-g*v-p*M)*H,e[15]=(d*v-u*R+h*M)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,f=r*d,g=r*u,S=a*d,p=a*u,m=o*u,M=l*c,R=l*d,b=l*u,v=n.x,T=n.y,D=n.z;return s[0]=(1-(S+m))*v,s[1]=(f+b)*v,s[2]=(g-R)*v,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(h+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(g+R)*D,s[9]=(p-M)*D,s[10]=(1-(h+S))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Gi.set(s[0],s[1],s[2]).length(),o=Gi.set(s[4],s[5],s[6]).length(),l=Gi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);let c=1/a,d=1/o,u=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=d,pn.elements[5]*=d,pn.elements[6]*=d,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=yn,l=!1){let c=this.elements,d=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===yn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ls)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=yn,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===yn)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===ls)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gi=new N,pn=new dt,hu=new N(0,0,0),du=new N(1,1,1),ii=new N,kr=new N,jt=new N,ph=new dt,mh=new nn,In=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mh.setFromEuler(this),this.setFromQuaternion(mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fu=0,gh=new N,Vi=new nn,Un=new dt,Gr=new N,Fs=new N,uu=new N,pu=new nn,yh=new N(1,0,0),_h=new N(0,1,0),xh=new N(0,0,1),bh={type:"added"},mu={type:"removed"},Qi={type:"childadded",child:null},dl={type:"childremoved",child:null},Mt=class i extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new In,n=new nn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ye}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(_h,e)}rotateZ(e){return this.rotateOnAxis(xh,e)}translateOnAxis(e,t){return gh.copy(e).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(_h,e)}translateZ(e){return this.translateOnAxis(xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Fs,Gr,this.up):Un.lookAt(Gr,Fs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Un),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bh),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mu),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bh),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mt.DEFAULT_UP=new N(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gu={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let p=t.getJointPose(S,n),m=this._getHandJoint(c,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=fc(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fl(a,r,e+1/3),this.g=fl(a,r,e),this.b=fl(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=Rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return nt.workingToColorSpace(Ct.copy(this),e),Math.round(We(Ct.r*255,0,255))*65536+Math.round(We(Ct.g*255,0,255))*256+Math.round(We(Ct.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Ct.copy(this),t);let n=Ct.r,s=Ct.g,r=Ct.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=It){nt.workingToColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,s=Ct.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Vr);let n=Js(si.h,Vr.h,t),s=Js(si.s,Vr.s,t),r=Js(si.l,Vr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new Qe;Qe.NAMES=Rd;var Ai=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mn=new N,$n=new N,ul=new N,Jn=new N,Yi=new N,Xi=new N,Sh=new N,pl=new N,ml=new N,gl=new N,yl=new _t,_l=new _t,xl=new _t,Vn=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),$n.subVectors(n,t),ul.subVectors(e,t);let a=mn.dot(mn),o=mn.dot($n),l=mn.dot(ul),c=$n.dot($n),d=$n.dot(ul),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,f=(c*l-o*d)*h,g=(a*d-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return yl.setScalar(0),_l.setScalar(0),xl.setScalar(0),yl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),xl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(yl,r.x),a.addScaledVector(_l,r.y),a.addScaledVector(xl,r.z),a}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),$n.subVectors(e,t),mn.cross($n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),mn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Yi.subVectors(s,n),Xi.subVectors(r,n),pl.subVectors(e,n);let l=Yi.dot(pl),c=Xi.dot(pl);if(l<=0&&c<=0)return t.copy(n);ml.subVectors(e,s);let d=Yi.dot(ml),u=Xi.dot(ml);if(d>=0&&u<=d)return t.copy(s);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Yi,a);gl.subVectors(e,r);let f=Yi.dot(gl),g=Xi.dot(gl);if(g>=0&&f<=g)return t.copy(r);let S=f*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Xi,o);let p=d*g-f*u;if(p<=0&&u-d>=0&&f-g>=0)return Sh.subVectors(r,s),o=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(Sh,o);let m=1/(p+S+h);return a=S*m,o=h*m,t.copy(n).addScaledVector(Yi,a).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Yr.subVectors(this.max,Os),zi.subVectors(e.a,Os),Wi.subVectors(e.b,Os),Zi.subVectors(e.c,Os),ri.subVectors(Wi,zi),ai.subVectors(Zi,Wi),Mi.subVectors(zi,Zi);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Mi.y,Mi.x,0];return!bl(t,zi,Wi,Zi,Yr)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,zi,Wi,Zi,Yr))?!1:(Xr.crossVectors(ri,ai),t=[Xr.x,Xr.y,Xr.z],bl(t,zi,Wi,Zi,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kn=[new N,new N,new N,new N,new N,new N,new N,new N],gn=new N,Qr=new wn,zi=new N,Wi=new N,Zi=new N,ri=new N,ai=new N,Mi=new N,Os=new N,Yr=new N,Xr=new N,Ti=new N;function bl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);let o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),d=n.dot(Ti);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var vt=new N,zr=new he,yu=0,tn=class extends _n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vd,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=is(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=is(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=is(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=is(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Zs=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var js=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Et=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},_u=new wn,Cs=new N,Sl=new N,Xn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_u.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);let t=Cs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(Sl)),this.expandByPoint(Cs.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xu=0,cn=new dt,vl=new Mt,ji=new N,Kt=new wn,Ps=new wn,Dt=new N,Qt=class i extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?js:Zs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Kt.min,Ps.min),Kt.expandByPoint(Dt),Dt.addVectors(Kt.max,Ps.max),Kt.expandByPoint(Dt)):(Kt.expandByPoint(Ps.min),Kt.expandByPoint(Ps.max))}Kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Dt.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),Dt.add(ji)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new N,l[_]=new N;let c=new N,d=new N,u=new N,h=new he,f=new he,g=new he,S=new N,p=new N;function m(_,L,I){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,L),u.fromBufferAttribute(n,I),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,L),g.fromBufferAttribute(r,I),d.sub(c),u.sub(c),f.sub(h),g.sub(h);let O=1/(f.x*g.y-g.x*f.y);isFinite(O)&&(S.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(O),p.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(O),o[_].add(S),o[L].add(S),o[I].add(S),l[_].add(p),l[L].add(p),l[I].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,L=M.length;_<L;++_){let I=M[_],O=I.start,G=I.count;for(let J=O,w=O+G;J<w;J+=3)m(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let R=new N,b=new N,v=new N,T=new N;function D(_){v.fromBufferAttribute(s,_),T.copy(v);let L=o[_];R.copy(L),R.sub(v.multiplyScalar(v.dot(L))).normalize(),b.crossVectors(T,L);let O=b.dot(l[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,O)}for(let _=0,L=M.length;_<L;++_){let I=M[_],O=I.start,G=I.count;for(let J=O,w=O+G;J<w;J+=3)D(e.getX(J+0)),D(e.getX(J+1)),D(e.getX(J+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,d=new N,u=new N;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d),f=0,g=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*d;for(let m=0;m<d;m++)h[g++]=c[f++]}return new tn(h,d,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var El=new N,bu=new N,Su=new Ye,en=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=El.subVectors(n,t).cross(bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(El),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Su.getNormalMatrix(e),s=this.coplanarPoint(El).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vu=0,Bn=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Es,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Wl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new en().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gn=new N,Ml=new N,Wr=new N,Zr=new N,Ii=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ml.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Ml);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=Zr.dot(this.direction),l=-Zr.dot(Wr),c=Zr.lengthSq(),d=Math.abs(1-a*a),u,h,f,g;if(d>0)if(u=a*l-o,h=a*o-l,g=r*d,u>=0)if(h>=-g)if(h<=g){let S=1/d;u*=S,h*=S,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ml).addScaledVector(Wr,h),f}intersectSphere(e,t){if(e.radius<0)return null;Gn.subVectors(e.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,S=t.y-a.y,p=t.z-a.z,m=n.x-a.x,M=n.y-a.y,R=n.z-a.z,b=Math.abs(l),v=Math.abs(c),T=Math.abs(d),D,_,L,I,O,G,J,w,H,z,Y,ne;if(b>=v&&b>=T?(L=l,G=u,H=g,ne=m,l>=0?(D=c,_=d,I=h,O=f,J=S,w=p,z=M,Y=R):(D=d,_=c,I=f,O=h,J=p,w=S,z=R,Y=M)):v>=T?(L=c,G=h,H=S,ne=M,c>=0?(D=d,_=l,I=f,O=u,J=p,w=g,z=R,Y=m):(D=l,_=d,I=u,O=f,J=g,w=p,z=m,Y=R)):(L=d,G=f,H=p,ne=R,d>=0?(D=l,_=c,I=u,O=h,J=g,w=S,z=m,Y=M):(D=c,_=l,I=h,O=u,J=S,w=g,z=M,Y=m)),L===0)return null;let X=D/L,j=_/L,C=1/L,ae=I-X*G,de=O-j*G,Ve=J-X*H,we=w-j*H,re=z-X*ne,q=Y-j*ne,k=re*we-q*Ve,oe=ae*q-de*re,De=Ve*de-we*ae;if(s){if(k<0||oe<0||De<0)return null}else if((k<0||oe<0||De<0)&&(k>0||oe>0||De>0))return null;let xe=k+oe+De;if(xe===0)return null;let He=C*(k*G+oe*H+De*ne);return(xe>0?He<0:He>0)?null:this.at(He/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zn=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vh=new dt,Li=new Ii,jr=new Xn,Eh=new N,Kr=new N,ea=new N,ta=new N,Tl=new N,na=new N,Mh=new N,ia=new N,ut=class extends Mt{constructor(e=new Qt,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(Tl.fromBufferAttribute(u,e),a?na.addScaledVector(Tl,d):na.addScaledVector(Tl.sub(t),d))}t.add(na)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(jr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(jr,Eh)===null||Li.origin.distanceToSquared(Eh)>(e.far-e.near)**2))&&(vh.copy(r).invert(),Li.copy(e.ray).applyMatrix4(vh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){let p=h[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),R=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,v=R;b<v;b+=3){let T=o.getX(b),D=o.getX(b+1),_=o.getX(b+2);s=sa(this,m,e,n,c,d,u,T,D,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let p=g,m=S;p<m;p+=3){let M=o.getX(p),R=o.getX(p+1),b=o.getX(p+2);s=sa(this,a,e,n,c,d,u,M,R,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){let p=h[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),R=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,v=R;b<v;b+=3){let T=b,D=b+1,_=b+2;s=sa(this,m,e,n,c,d,u,T,D,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let p=g,m=S;p<m;p+=3){let M=p,R=p+1,b=p+2;s=sa(this,a,e,n,c,d,u,M,R,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Eu(i,e,t,n,s,r,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===mi,o),l===null)return null;ia.copy(o),ia.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ia);return c<t.near||c>t.far?null:{distance:c,point:ia.clone(),object:i}}function sa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Kr),i.getVertexPosition(l,ea),i.getVertexPosition(c,ta);let d=Eu(i,e,t,n,Kr,ea,ta,Mh);if(d){let u=new N;Vn.getBarycoord(Mh,Kr,ea,ta,u),s&&(d.uv=Vn.getInterpolatedAttribute(s,o,l,c,u,new he)),r&&(d.uv1=Vn.getInterpolatedAttribute(r,o,l,c,u,new he)),a&&(d.normal=Vn.getInterpolatedAttribute(a,o,l,c,u,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new N,materialIndex:0};Vn.getNormal(Kr,ea,ta,h.normal),d.face=h,d.barycoord=u}return d}var Ks=class extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,l,c=At,d=At,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ki=new dt,Th=new dt,ra=[],Lh=new wn,Mu=new dt,qs=new ut,Hs=new Xn,tr=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Lh.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Lh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Hs.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),Th.multiplyMatrices(n,Ki),qs.matrixWorld=Th,qs.raycast(e,ra);for(let a=0,o=ra.length;a<o;a++){let l=ra[a];l.instanceId=r,l.object=this,t.push(l)}ra.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ks(new Float32Array(s*this.count),s,this.count,lo,hn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ri=new Xn,Tu=new he(.5,.5),aa=new N,us=class{constructor(e=new en,t=new en,n=new en,s=new en,r=new en,a=new en){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],g=r[8],S=r[9],p=r[10],m=r[11],M=r[12],R=r[13],b=r[14],v=r[15];if(s[0].setComponents(c-a,f-d,m-g,v-M).normalize(),s[1].setComponents(c+a,f+d,m+g,v+M).normalize(),s[2].setComponents(c+o,f+u,m+S,v+R).normalize(),s[3].setComponents(c-o,f-u,m-S,v-R).normalize(),n)s[4].setComponents(l,h,p,b).normalize(),s[5].setComponents(c-l,f-h,m-p,v-b).normalize();else if(s[4].setComponents(c-l,f-h,m-p,v-b).normalize(),t===yn)s[5].setComponents(c+l,f+h,m+p,v+b).normalize();else if(t===ls)s[5].setComponents(l,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=Tu.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(aa.x=s.normal.x>0?e.max.x:e.min.x,aa.y=s.normal.y>0?e.max.y:e.min.y,aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ps=class extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ia=new N,wa=new N,Rh=new dt,Us=new Ii,oa=new Xn,Ll=new N,Dh=new N,Ba=class extends Mt{constructor(e=new Qt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ia.fromBufferAttribute(t,s-1),wa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ia.distanceTo(wa);e.setAttribute("lineDistance",new Et(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;Rh.copy(s).invert(),Us.copy(e.ray).applyMatrix4(Rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let S=f,p=g-1;S<p;S+=c){let m=d.getX(S),M=d.getX(S+1),R=la(this,e,Us,l,m,M,S);R&&t.push(R)}if(this.isLineLoop){let S=d.getX(g-1),p=d.getX(f),m=la(this,e,Us,l,S,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=f,p=g-1;S<p;S+=c){let m=la(this,e,Us,l,S,S+1,S);m&&t.push(m)}if(this.isLineLoop){let S=la(this,e,Us,l,g-1,f,g-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function la(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Ia.fromBufferAttribute(o,s),wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ia,wa,Ll,Dh)>n)return;Ll.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ll);if(!(c<e.near||c>e.far))return{distance:c,point:Dh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ah=new N,Ih=new N,nr=class extends Ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ah.fromBufferAttribute(t,s),Ih.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ah.distanceTo(Ih);e.setAttribute("lineDistance",new Et(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ir=class extends Ut{constructor(e=[],t=gi,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ms=class extends Ut{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends Ut{constructor(e,t,n=bn,s,r,a,o=At,l=At,c,d=An,u=1){if(d!==An&&d!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Na=class extends li{constructor(e,t=bn,n=gi,s,r,a=At,o=At,l,c=An){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sr=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ci=class i extends Qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(u,2));function g(S,p,m,M,R,b,v,T,D,_,L){let I=b/D,O=v/_,G=b/2,J=v/2,w=T/2,H=D+1,z=_+1,Y=0,ne=0,X=new N;for(let j=0;j<z;j++){let C=j*O-J;for(let ae=0;ae<H;ae++){let de=ae*I-G;X[S]=de*M,X[p]=C*R,X[m]=w,c.push(X.x,X.y,X.z),X[S]=0,X[p]=0,X[m]=T>0?1:-1,d.push(X.x,X.y,X.z),u.push(ae/D),u.push(1-j/_),Y+=1}}for(let j=0;j<_;j++)for(let C=0;C<D;C++){let ae=h+C+H*j,de=h+C+H*(j+1),Ve=h+(C+1)+H*(j+1),we=h+(C+1)+H*j;l.push(ae,de,we),l.push(de,Ve,we),ne+=6}o.addGroup(f,ne,L),f+=ne,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ca=new N,ha=new N,Rl=new N,da=new Vn,rr=class extends Qt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(ss*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:S,b:p,c:m}=da;if(S.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),da.getNormal(Rl),u[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let R=(M+1)%3,b=u[M],v=u[R],T=da[d[M]],D=da[d[R]],_=`${b}_${v}`,L=`${v}_${b}`;L in h&&h[L]?(Rl.dot(h[L].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(D.x,D.y,D.z)),h[L]=null):_ in h||(h[_]={index0:c[M],index1:c[R],normal:Rl.clone()})}}for(let g in h)if(h[g]){let{index0:S,index1:p}=h[g];ca.fromBufferAttribute(o,S),ha.fromBufferAttribute(o,p),f.push(ca.x,ca.y,ca.z),f.push(ha.x,ha.y,ha.z)}this.setAttribute("position",new Et(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],h=n[s+1]-d,f=(a-d)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new dt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},gs=class extends sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fa=class extends gs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let h=(a-r)/c-(o-r)/(c+d)+(o-a)/d,f=(o-a)/d-(l-a)/(d+u)+(l-o)/u;h*=d,f*=d,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var wh=new N,Bh=new N,Dl=new pc,Al=new pc,Il=new pc,Oa=class extends sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(Bh.subVectors(s[0],s[1]).add(s[0]),c=Bh);let u=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(wh.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=wh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),S=Math.pow(u.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(d),f);S<1e-4&&(S=1),g<1e-4&&(g=S),p<1e-4&&(p=S),Dl.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,g,S,p),Al.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,g,S,p),Il.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,g,S,p)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),Al.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),Il.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(Dl.calc(l),Al.calc(l),Il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Nh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Lu(i,e){let t=1-i;return t*t*e}function Ru(i,e){return 2*(1-i)*i*e}function Du(i,e){return i*i*e}function ks(i,e,t,n){return Lu(i,e)+Ru(i,t)+Du(i,n)}function Au(i,e){let t=1-i;return t*t*t*e}function Iu(i,e){let t=1-i;return 3*t*t*i*e}function wu(i,e){return 3*(1-i)*i*i*e}function Bu(i,e){return i*i*i*e}function Gs(i,e,t,n,s){return Au(i,e)+Iu(i,t)+wu(i,n)+Bu(i,s)}var ar=class extends sn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gs(e,s.x,r.x,a.x,o.x),Gs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ca=class extends sn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gs(e,s.x,r.x,a.x,o.x),Gs(e,s.y,r.y,a.y,o.y),Gs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},or=class extends sn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends sn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lr=class extends sn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ks(e,s.x,r.x,a.x),ks(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends sn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ks(e,s.x,r.x,a.x),ks(e,s.y,r.y,a.y),ks(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cr=class extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Nh(o,l.x,c.x,d.x,u.x),Nh(o,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Pl=Object.freeze({__proto__:null,ArcCurve:Fa,CatmullRomCurve3:Oa,CubicBezierCurve:ar,CubicBezierCurve3:Ca,EllipseCurve:gs,LineCurve:or,LineCurve3:Pa,QuadraticBezierCurve:lr,QuadraticBezierCurve3:qa,SplineCurve:cr}),Ha=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Pl[s.type]().fromJSON(s))}return this}},Wn=class extends Ha{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new or(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new lr(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ar(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new cr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new gs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wi=class extends Wn{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Wn().fromJSON(s))}return this}};function Nu(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Dd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=qu(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let d=o,u=l;for(let h=t;h<s;h+=t){let f=i[h],g=i[h+1];f<o&&(o=f),g<l&&(l=g),f>d&&(d=f),g>u&&(u=g)}c=Math.max(d-o,u-l),c=c!==0?32767/c:0}return hr(r,a,t,o,l,c,0),a}function Dd(i,e,t,n,s){let r;if(s===zu(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Fh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Fh(a/n|0,i[a],i[a+1],r);return r&&ys(r,r.next)&&(fr(r),r=r.next),r}function Bi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ys(t,t.next)||xt(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function hr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ku(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ou(i,n,s,r):Fu(i)){e.push(l.i,i.i,c.i),fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Cu(Bi(i),e),hr(i,e,t,n,s,r,2)):a===2&&Pu(i,e,t,n,s,r):hr(Bi(i),e,t,n,s,r,1);break}}}function Fu(i){let e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(s,r,a),u=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=h&&g.y>=u&&g.y<=f&&$s(s,o,r,l,a,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ou(i,e,t,n){let s=i.prev,r=i,a=i.next;if(xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,u=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(d,u,h),S=Math.max(o,l,c),p=Math.max(d,u,h),m=ql(f,g,e,t,n),M=ql(S,p,e,t,n),R=i.prevZ,b=i.nextZ;for(;R&&R.z>=m&&b&&b.z<=M;){if(R.x>=f&&R.x<=S&&R.y>=g&&R.y<=p&&R!==s&&R!==a&&$s(o,d,l,u,c,h,R.x,R.y)&&xt(R.prev,R,R.next)>=0||(R=R.prevZ,b.x>=f&&b.x<=S&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&$s(o,d,l,u,c,h,b.x,b.y)&&xt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;R&&R.z>=m;){if(R.x>=f&&R.x<=S&&R.y>=g&&R.y<=p&&R!==s&&R!==a&&$s(o,d,l,u,c,h,R.x,R.y)&&xt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=S&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&$s(o,d,l,u,c,h,b.x,b.y)&&xt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Cu(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ys(n,s)&&Id(n,t,t.next,s)&&dr(n,s)&&dr(s,n)&&(e.push(n.i,t.i,s.i),fr(t),fr(t.next),t=i=s),t=t.next}while(t!==i);return Bi(t)}function Pu(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qu(a,o)){let l=wd(a,o);a=Bi(a,a.next),l=Bi(l,l.next),hr(a,e,t,n,s,r,0),hr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function qu(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Dd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Vu(c))}s.sort(Hu);for(let r=0;r<s.length;r++)t=Uu(s[r],t);return t}function Hu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Uu(i,e){let t=$u(i,e);if(!t)return e;let n=wd(t,i);return Bi(n,n.next),Bi(t,t.next)}function $u(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ys(i,t))return t;do{if(ys(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ad(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);dr(t,i)&&(u<d||u===d&&(t.x>a.x||t.x===a.x&&Ju(a,t)))&&(a=t,d=u)}t=t.next}while(t!==o);return a}function Ju(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function ku(i,e,t,n){let s=i;do s.z===0&&(s.z=ql(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gu(s)}function Gu(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function ql(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Vu(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ad(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function $s(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Ad(i,e,t,n,s,r,a,o)}function Qu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Yu(i,e)&&(dr(i,e)&&dr(e,i)&&Xu(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||ys(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ys(i,e){return i.x===e.x&&i.y===e.y}function Id(i,e,t,n){let s=ua(xt(i,e,t)),r=ua(xt(i,e,n)),a=ua(xt(t,n,i)),o=ua(xt(t,n,e));return!!(s!==r&&a!==o||s===0&&fa(i,t,e)||r===0&&fa(i,n,e)||a===0&&fa(t,i,n)||o===0&&fa(t,e,n))}function fa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ua(i){return i>0?1:i<0?-1:0}function Yu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Id(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function dr(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function Xu(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function wd(i,e){let t=Hl(i.i,i.x,i.y),n=Hl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fh(i,e,t,n){let s=Hl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zu(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ul=class{static triangulate(e,t,n=2){return Nu(e,t,n)}},Dn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Oh(e),Ch(n,e);let a=e.length;t.forEach(Oh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ch(n,t[l]);let o=Ul.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Oh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ch(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ur=class i extends Qt{constructor(e=new wi([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Et(s,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Wu,R,b=!1,v,T,D,_;if(m){R=m.getSpacedPoints(d),b=!0,h=!1;let K=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(d,K),T=new N,D=new N,_=new N}h||(p=0,f=0,g=0,S=0);let L=o.extractPoints(c),I=L.shape,O=L.holes;if(!Dn.isClockWise(I)){I=I.reverse();for(let K=0,se=O.length;K<se;K++){let le=O[K];Dn.isClockWise(le)&&(O[K]=le.reverse())}}function J(K){let le=10000000000000001e-36,ce=K[0];for(let pe=1;pe<=K.length;pe++){let Ue=pe%K.length,Pe=K[Ue],ke=Pe.x-ce.x,Xe=Pe.y-ce.y,A=ke*ke+Xe*Xe,rt=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(ce.x),Math.abs(ce.y)),et=le*rt*rt;if(A<=et){K.splice(Ue,1),pe--;continue}ce=Pe}}J(I),O.forEach(J);let w=O.length,H=I;for(let K=0;K<w;K++){let se=O[K];I=I.concat(se)}function z(K,se,le){return se||Je("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(se,le)}let Y=I.length;function ne(K,se,le){let ce,pe,Ue,Pe=K.x-se.x,ke=K.y-se.y,Xe=le.x-K.x,A=le.y-K.y,rt=Pe*Pe+ke*ke,et=Pe*A-ke*Xe;if(Math.abs(et)>Number.EPSILON){let E=Math.sqrt(rt),y=Math.sqrt(Xe*Xe+A*A),P=se.x-ke/E,V=se.y+Pe/E,W=le.x-A/y,fe=le.y+Xe/y,ue=((W-P)*A-(fe-V)*Xe)/(Pe*A-ke*Xe);ce=P+Pe*ue-K.x,pe=V+ke*ue-K.y;let Z=ce*ce+pe*pe;if(Z<=2)return new he(ce,pe);Ue=Math.sqrt(Z/2)}else{let E=!1;Pe>Number.EPSILON?Xe>Number.EPSILON&&(E=!0):Pe<-Number.EPSILON?Xe<-Number.EPSILON&&(E=!0):Math.sign(ke)===Math.sign(A)&&(E=!0),E?(ce=-ke,pe=Pe,Ue=Math.sqrt(rt)):(ce=Pe,pe=ke,Ue=Math.sqrt(rt/2))}return new he(ce/Ue,pe/Ue)}let X=[];for(let K=0,se=H.length,le=se-1,ce=K+1;K<se;K++,le++,ce++)le===se&&(le=0),ce===se&&(ce=0),X[K]=ne(H[K],H[le],H[ce]);let j=[],C,ae=X.concat();for(let K=0,se=w;K<se;K++){let le=O[K];C=[];for(let ce=0,pe=le.length,Ue=pe-1,Pe=ce+1;ce<pe;ce++,Ue++,Pe++)Ue===pe&&(Ue=0),Pe===pe&&(Pe=0),C[ce]=ne(le[ce],le[Ue],le[Pe]);j.push(C),ae=ae.concat(C)}let de;if(p===0)de=Dn.triangulateShape(H,O);else{let K=[],se=[];for(let le=0;le<p;le++){let ce=le/p,pe=f*Math.cos(ce*Math.PI/2),Ue=g*Math.sin(ce*Math.PI/2)+S;for(let Pe=0,ke=H.length;Pe<ke;Pe++){let Xe=z(H[Pe],X[Pe],Ue);oe(Xe.x,Xe.y,-pe),ce===0&&K.push(Xe)}for(let Pe=0,ke=w;Pe<ke;Pe++){let Xe=O[Pe];C=j[Pe];let A=[];for(let rt=0,et=Xe.length;rt<et;rt++){let E=z(Xe[rt],C[rt],Ue);oe(E.x,E.y,-pe),ce===0&&A.push(E)}ce===0&&se.push(A)}}de=Dn.triangulateShape(K,se)}let Ve=de.length,we=g+S;for(let K=0;K<Y;K++){let se=h?z(I[K],ae[K],we):I[K];b?(D.copy(v.normals[0]).multiplyScalar(se.x),T.copy(v.binormals[0]).multiplyScalar(se.y),_.copy(R[0]).add(D).add(T),oe(_.x,_.y,_.z)):oe(se.x,se.y,0)}for(let K=1;K<=d;K++)for(let se=0;se<Y;se++){let le=h?z(I[se],ae[se],we):I[se];b?(D.copy(v.normals[K]).multiplyScalar(le.x),T.copy(v.binormals[K]).multiplyScalar(le.y),_.copy(R[K]).add(D).add(T),oe(_.x,_.y,_.z)):oe(le.x,le.y,u/d*K)}for(let K=p-1;K>=0;K--){let se=K/p,le=f*Math.cos(se*Math.PI/2),ce=g*Math.sin(se*Math.PI/2)+S;for(let pe=0,Ue=H.length;pe<Ue;pe++){let Pe=z(H[pe],X[pe],ce);oe(Pe.x,Pe.y,u+le)}for(let pe=0,Ue=O.length;pe<Ue;pe++){let Pe=O[pe];C=j[pe];for(let ke=0,Xe=Pe.length;ke<Xe;ke++){let A=z(Pe[ke],C[ke],ce);b?oe(A.x,A.y+R[d-1].y,R[d-1].x+le):oe(A.x,A.y,u+le)}}}re(),q();function re(){let K=s.length/3;if(h){let se=0,le=Y*se;for(let ce=0;ce<Ve;ce++){let pe=de[ce];De(pe[2]+le,pe[1]+le,pe[0]+le)}se=d+p*2,le=Y*se;for(let ce=0;ce<Ve;ce++){let pe=de[ce];De(pe[0]+le,pe[1]+le,pe[2]+le)}}else{for(let se=0;se<Ve;se++){let le=de[se];De(le[2],le[1],le[0])}for(let se=0;se<Ve;se++){let le=de[se];De(le[0]+Y*d,le[1]+Y*d,le[2]+Y*d)}}n.addGroup(K,s.length/3-K,0)}function q(){let K=s.length/3,se=0;k(H,se),se+=H.length;for(let le=0,ce=O.length;le<ce;le++){let pe=O[le];k(pe,se),se+=pe.length}n.addGroup(K,s.length/3-K,1)}function k(K,se){let le=K.length;for(;--le>=0;){let ce=le,pe=le-1;pe<0&&(pe=K.length-1);for(let Ue=0,Pe=d+p*2;Ue<Pe;Ue++){let ke=Y*Ue,Xe=Y*(Ue+1),A=se+ce+ke,rt=se+pe+ke,et=se+pe+Xe,E=se+ce+Xe;xe(A,rt,et,E)}}}function oe(K,se,le){l.push(K),l.push(se),l.push(le)}function De(K,se,le){He(K),He(se),He(le);let ce=s.length/3,pe=M.generateTopUV(n,s,ce-3,ce-2,ce-1);it(pe[0]),it(pe[1]),it(pe[2])}function xe(K,se,le,ce){He(K),He(se),He(ce),He(se),He(le),He(ce);let pe=s.length/3,Ue=M.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);it(Ue[0]),it(Ue[1]),it(Ue[3]),it(Ue[1]),it(Ue[2]),it(Ue[3])}function He(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function it(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Zu(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Pl[s.type]().fromJSON(s)),new i(n,e.options)}},Wu={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,d)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],S=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(h,1-g),new he(S,1-m)]:[new he(o,1-l),new he(d,1-u),new he(f,1-g),new he(p,1-m)]}};function Zu(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ni=class i extends Qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,f=[],g=[],S=[],p=[];for(let m=0;m<d;m++){let M=m*h-a;for(let R=0;R<c;R++){let b=R*u-r;g.push(b,-M,0),S.push(0,0,1),p.push(R/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let R=M+c*m,b=M+c*(m+1),v=M+1+c*(m+1),T=M+1+c*m;f.push(R,b,T),f.push(b,v,T)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(S,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var pr=class i extends Qt{constructor(e=new wi([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(r,3)),this.setAttribute("uv",new Et(a,2));function c(d){let u=s.length/3,h=d.extractPoints(t),f=h.shape,g=h.holes;Dn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let M=g[p];Dn.isClockWise(M)===!0&&(g[p]=M.reverse())}let S=Dn.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let M=g[p];f=f.concat(M)}for(let p=0,m=f.length;p<m;p++){let M=f[p];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let p=0,m=S.length;p<m;p++){let M=S[p],R=M[0]+u,b=M[1]+u,v=M[2]+u;n.push(R,b,v),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ju(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function ju(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function qi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ph(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ph(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Pt(i){let e={};for(let t=0;t<i.length;t++){let n=qi(i[t]);for(let s in n)e[s]=n[s]}return e}function Ph(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ku(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Bd={clone:qi,merge:Pt},ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=Ku(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ua=class extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fi=class extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mr=class extends Fi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var gr=class extends Bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=to,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$a=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ja=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function es(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ka=class extends hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ol:r=e,o=2*t-n;break;case Cl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ol:a=e,l=2*n-t;break;case Cl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),S=g*g,p=S*g,m=-h*p+2*h*S-h*g,M=(1+h)*p+(-1.5-2*h)*S+(-.5+h)*g+1,R=(-1-f)*p+(1.5+f)*S+.5*g,b=f*p-f*S;for(let v=0;v!==o;++v)r[v]=m*a[d+v]+M*a[c+v]+R*a[l+v]+b*a[u+v];return r}},Ga=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}},Va=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends hi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let g=(n-t)/(s-t),S=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*S+a[l+p]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let S=a[c+g],p=a[l+g],m=f*h+g*2,M=u[m],R=u[m+1],b=e*h+g*2,v=d[b],T=d[b+1],D=ip(n,t,M,v,s);r[g]=Nd(D,S,R,T,p)}return r}};function Nd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function np(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ip(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Nd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=np(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var an=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),wl(e.settings)&&(n.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break;case Nl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return ga;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;wl(this.settings)&&(qh(this.settings.inTangents,e),qh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Gf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ga,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,h=u-n,f=u+n;for(let g=0;g!==n;++g){let S=t[u+g];if(S!==t[h+g]||S!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=La;var di=class extends an{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Vs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};Ya.prototype.ValueTypeName="color";var Xa=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};Xa.prototype.ValueTypeName="number";var za=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},yr=class extends an{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends an{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Vs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};Wa.prototype.ValueTypeName="vector";var Za=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fd=new Za,ja=class{constructor(e){this.manager=e!==void 0?e:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_r=class extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bl=new dt,Hh=new N,Uh=new N,xr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hh),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Bl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pa=new N,ma=new nn,Ln=new N,br=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pa,ma,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pa,ma,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new N,$h=new he,Jh=new he,wt=class extends br{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,$h,Jh),t.subVectors(Jh,$h)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var $l=class extends xr{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0}},Sr=class extends _s{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $l}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xs=class extends br{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jl=class extends xr{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bs=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Jl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ts=-90,ns=1,Ka=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wt(ts,ns,e,t);s.layers=this.layers,this.add(s);let r=new wt(ts,ns,e,t);r.layers=this.layers,this.add(r);let a=new wt(ts,ns,e,t);a.layers=this.layers,this.add(a);let o=new wt(ts,ns,e,t);o.layers=this.layers,this.add(o);let l=new wt(ts,ns,e,t);l.layers=this.layers,this.add(l);let c=new wt(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},eo=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gc="\\[\\]\\.:\\/",sp=new RegExp("["+gc+"]","g"),yc="[^"+gc+"]",rp="[^"+gc.replace("\\.","")+"]",ap=/((?:WC+[\/:])*)/.source.replace("WC",yc),op=/(WCOD+)?/.source.replace("WCOD",rp),lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),cp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),hp=new RegExp("^"+ap+op+lp+cp+"$"),dp=["material","materials","bones","map"],kl=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sp,"")}static parseTrackName(e){let t=hp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);dp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=kl;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O_=new Float32Array(1);var Ss=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Gl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var vr=class extends _n{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function _c(i,e,t,n){let s=fp(n);switch(t){case lc:return i*e;case lo:return i*e/s.components*s.byteLength;case co:return i*e/s.components*s.byteLength;case xi:return i*e*2/s.components*s.byteLength;case ho:return i*e*2/s.components*s.byteLength;case cc:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case fo:return i*e*4/s.components*s.byteLength;case Rr:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:case go:return Math.max(i,16)*Math.max(e,8)/4;case uo:case mo:return Math.max(i,8)*Math.max(e,8)/2;case yo:case _o:case bo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xo:case wr:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Po:case qo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uo:case $o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Br:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fp(i){switch(i){case Xt:case sc:return{byteLength:1,components:1};case Ms:case rc:case Sn:return{byteLength:2,components:1};case ao:case oo:return{byteLength:2,components:4};case bn:case ro:case hn:return{byteLength:4,components:1};case ac:case oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function nf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function up(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){let g=u[h],S=u[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,u[h]=S)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){let S=u[f];i.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vp=`#ifdef USE_BATCHING
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
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
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
#endif`,Dp=`#ifdef USE_BUMPMAP
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,fm=`uniform sampler2D dfgLUT;
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
}`,um=`
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mm=`#if defined( USE_POINTS_UV )
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
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
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
}`,Sg=`#if DEPTH_PACKING == 3200
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
}`,vg=`#define DISTANCE
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
}`,Eg=`#define DISTANCE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,wg=`#define LAMBERT
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
}`,Bg=`#define MATCAP
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
}`,Ng=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,Cg=`#define PHONG
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
}`,Pg=`#define PHONG
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
}`,qg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,Ug=`#define TOON
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
}`,$g=`#define TOON
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
}`,Jg=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Qg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:yp,alphatest_fragment:_p,alphatest_pars_fragment:xp,aomap_fragment:bp,aomap_pars_fragment:Sp,batching_pars_vertex:vp,batching_vertex:Ep,begin_vertex:Mp,beginnormal_vertex:Tp,bsdfs:Lp,iridescence_fragment:Rp,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Bp,color_fragment:Np,color_pars_fragment:Fp,color_pars_vertex:Op,color_vertex:Cp,common:Pp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Up,displacementmap_vertex:$p,emissivemap_fragment:Jp,emissivemap_pars_fragment:kp,colorspace_fragment:Gp,colorspace_pars_fragment:Vp,envmap_fragment:Qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Xp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:am,envmap_vertex:Wp,fog_vertex:Zp,fog_pars_vertex:jp,fog_fragment:Kp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:dm,lights_physical_pars_fragment:fm,lights_fragment_begin:um,lights_fragment_maps:pm,lights_fragment_end:mm,lightprobes_pars_fragment:gm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:bm,map_fragment:Sm,map_pars_fragment:vm,map_particle_fragment:Em,map_particle_pars_fragment:Mm,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Rm,morphcolor_vertex:Dm,morphnormal_vertex:Am,morphtarget_pars_vertex:Im,morphtarget_vertex:wm,normal_fragment_begin:Bm,normal_fragment_maps:Nm,normal_pars_fragment:Fm,normal_pars_vertex:Om,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Um,iridescence_pars_fragment:$m,opaque_fragment:Jm,packing:km,premultiplied_alpha_fragment:Gm,project_vertex:Vm,dithering_fragment:Qm,dithering_pars_fragment:Ym,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Zm,shadowmap_vertex:jm,shadowmask_pars_fragment:Km,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:ag,tonemapping_pars_fragment:og,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:dg,uv_vertex:fg,worldpos_vertex:ug,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:yg,cube_vert:_g,cube_frag:xg,depth_vert:bg,depth_frag:Sg,distance_vert:vg,distance_frag:Eg,equirect_vert:Mg,equirect_frag:Tg,linedashed_vert:Lg,linedashed_frag:Rg,meshbasic_vert:Dg,meshbasic_frag:Ag,meshlambert_vert:Ig,meshlambert_frag:wg,meshmatcap_vert:Bg,meshmatcap_frag:Ng,meshnormal_vert:Fg,meshnormal_frag:Og,meshphong_vert:Cg,meshphong_frag:Pg,meshphysical_vert:qg,meshphysical_frag:Hg,meshtoon_vert:Ug,meshtoon_frag:$g,points_vert:Jg,points_frag:kg,shadow_vert:Gg,shadow_frag:Vg,sprite_vert:Qg,sprite_frag:Yg},Se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},On={basic:{uniforms:Pt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Pt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Pt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Pt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Pt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Pt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Pt([Se.points,Se.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Pt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Pt([Se.common,Se.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Pt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Pt([Se.sprite,Se.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Pt([Se.common,Se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Pt([Se.lights,Se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};On.physical={uniforms:Pt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Vo={r:0,b:0,g:0},Xg=new dt,sf=new Ye;sf.set(-1,0,0,0,1,0,0,0,1);function zg(i,e,t,n,s,r){let a=new Qe(0),o=s===!0?0:1,l,c,d=null,u=0,h=null;function f(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let b=M.backgroundBlurriness>0;R=e.get(R,b)}return R}function g(M){let R=!1,b=f(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),R=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,R){let b=f(R);b&&(b.isCubeTexture||b.mapping===Tr)?(c===void 0&&(c=new ut(new ci(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:qi(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sf),c.material.toneMapped=nt.getTransfer(b.colorSpace)!==lt,(d!==b||u!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ut(new Ni(2,2),new rn({name:"BackgroundMaterial",uniforms:qi(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=nt.getTransfer(b.colorSpace)!==lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,u=b.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,R){M.getRGB(Vo,mc(i)),t.buffers.color.setClear(Vo.r,Vo.g,Vo.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:S,dispose:m}}function Wg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(O,G,J,w,H){let z=!1,Y=u(O,w,J,G);r!==Y&&(r=Y,c(r.object)),z=f(O,w,J,H),z&&g(O,w,J,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,b(O,G,J,w),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function d(O){return i.deleteVertexArray(O)}function u(O,G,J,w){let H=w.wireframe===!0,z=n[G.id];z===void 0&&(z={},n[G.id]=z);let Y=O.isInstancedMesh===!0?O.id:0,ne=z[Y];ne===void 0&&(ne={},z[Y]=ne);let X=ne[J.id];X===void 0&&(X={},ne[J.id]=X);let j=X[H];return j===void 0&&(j=h(l()),X[H]=j),j}function h(O){let G=[],J=[],w=[];for(let H=0;H<t;H++)G[H]=0,J[H]=0,w[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:w,object:O,attributes:{},index:null}}function f(O,G,J,w){let H=r.attributes,z=G.attributes,Y=0,ne=J.getAttributes();for(let X in ne)if(ne[X].location>=0){let C=H[X],ae=z[X];if(ae===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),C===void 0||C.attribute!==ae||ae&&C.data!==ae.data)return!0;Y++}return r.attributesNum!==Y||r.index!==w}function g(O,G,J,w){let H={},z=G.attributes,Y=0,ne=J.getAttributes();for(let X in ne)if(ne[X].location>=0){let C=z[X];C===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(C=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(C=O.instanceColor));let ae={};ae.attribute=C,C&&C.data&&(ae.data=C.data),H[X]=ae,Y++}r.attributes=H,r.attributesNum=Y,r.index=w}function S(){let O=r.newAttributes;for(let G=0,J=O.length;G<J;G++)O[G]=0}function p(O){m(O,0)}function m(O,G){let J=r.newAttributes,w=r.enabledAttributes,H=r.attributeDivisors;J[O]=1,w[O]===0&&(i.enableVertexAttribArray(O),w[O]=1),H[O]!==G&&(i.vertexAttribDivisor(O,G),H[O]=G)}function M(){let O=r.newAttributes,G=r.enabledAttributes;for(let J=0,w=G.length;J<w;J++)G[J]!==O[J]&&(i.disableVertexAttribArray(J),G[J]=0)}function R(O,G,J,w,H,z,Y){Y===!0?i.vertexAttribIPointer(O,G,J,H,z):i.vertexAttribPointer(O,G,J,w,H,z)}function b(O,G,J,w){S();let H=w.attributes,z=J.getAttributes(),Y=G.defaultAttributeValues;for(let ne in z){let X=z[ne];if(X.location>=0){let j=H[ne];if(j===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){let C=j.normalized,ae=j.itemSize,de=e.get(j);if(de===void 0)continue;let Ve=de.buffer,we=de.type,re=de.bytesPerElement,q=we===i.INT||we===i.UNSIGNED_INT||j.gpuType===ro;if(j.isInterleavedBufferAttribute){let k=j.data,oe=k.stride,De=j.offset;if(k.isInstancedInterleavedBuffer){for(let xe=0;xe<X.locationSize;xe++)m(X.location+xe,k.meshPerAttribute);O.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let xe=0;xe<X.locationSize;xe++)p(X.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let xe=0;xe<X.locationSize;xe++)R(X.location+xe,ae/X.locationSize,we,C,oe*re,(De+ae/X.locationSize*xe)*re,q)}else{if(j.isInstancedBufferAttribute){for(let k=0;k<X.locationSize;k++)m(X.location+k,j.meshPerAttribute);O.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let k=0;k<X.locationSize;k++)p(X.location+k);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let k=0;k<X.locationSize;k++)R(X.location+k,ae/X.locationSize,we,C,ae*re,ae/X.locationSize*k*re,q)}}else if(Y!==void 0){let C=Y[ne];if(C!==void 0)switch(C.length){case 2:i.vertexAttrib2fv(X.location,C);break;case 3:i.vertexAttrib3fv(X.location,C);break;case 4:i.vertexAttrib4fv(X.location,C);break;default:i.vertexAttrib1fv(X.location,C)}}}}M()}function v(){L();for(let O in n){let G=n[O];for(let J in G){let w=G[J];for(let H in w){let z=w[H];for(let Y in z)d(z[Y].object),delete z[Y];delete w[H]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;let G=n[O.id];for(let J in G){let w=G[J];for(let H in w){let z=w[H];for(let Y in z)d(z[Y].object),delete z[Y];delete w[H]}}delete n[O.id]}function D(O){for(let G in n){let J=n[G];for(let w in J){let H=J[w];if(H[O.id]===void 0)continue;let z=H[O.id];for(let Y in z)d(z[Y].object),delete z[Y];delete H[O.id]}}}function _(O){for(let G in n){let J=n[G],w=O.isInstancedMesh===!0?O.id:0,H=J[w];if(H!==void 0){for(let z in H){let Y=H[z];for(let ne in Y)d(Y[ne].object),delete Y[ne];delete H[z]}delete J[w],Object.keys(J).length===0&&delete n[G]}}}function L(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function Zg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function jg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==dn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let _=D===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Xt&&D!==hn&&!_&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(qe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:b,maxSamples:v,samples:T}}function Kg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new en,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let g=u.clippingPlanes,S=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?d(null):c();else{let M=r?0:n,R=M*4,b=m.clippingState||null;l.value=b,b=d(g,h,R,f);for(let v=0;v!==R;++v)b[v]=t[v];m.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){let S=u!==null?u.length:0,p=null;if(S!==0){if(p=l.value,g!==!0||p===null){let m=f+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,b=f;R!==S;++R,b+=4)a.copy(u[R]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}var Rs=4,e0=6,t0=20,n0=256,Fr=new xs,Od=new Qe,xc=null,bc=0,Sc=0,vc=!1,i0=new N,Hi=new N,As=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=i0}=r;xc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,bc,Sc),this._renderer.xr.enabled=vc,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Sn,format:dn,colorSpace:Qs,depthBuffer:!1},s=Cd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s0(r)),this._blurMaterial=a0(r,e,t),this._ggxMaterial=r0(r,e,t)}return s}_compileMaterial(e){let t=new ut(new Qt,e);this._renderer.compile(t,Fr)}_sceneToCubeUV(e,t,n,s,r){let l=new wt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Od),u.toneMapping=xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new ci,new zn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,p=S.material,m=!1,M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,m=!0):(p.color.copy(Od),m=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[R],r.y,r.z)):b===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[R]));let v=this._cubeSize;Ls(s,b*v,R>2?v:0,v,v),u.setRenderTarget(s),m&&u.render(S,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===gi||e.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=c*1.25,f=u*h,{_lodMax:g}=this,S=this._sizeLods[n],p=3*S*(n>g-Rs?n-g+Rs:0),m=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Ls(r,p,m,3*S,2*S),s.setRenderTarget(r),s.render(o,Fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ls(e,p,m,3*S,2*S),s.setRenderTarget(e),s.render(o,Fr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-Rs?s-this._lodMax+Rs:0),h=4*(this._cubeSize-d);Ls(t,u,h,3*d,2*d),a.setRenderTarget(t),a.render(l,Fr)}};function s0(i){let e=[],t=[],n=i,s=i-Rs+1+e0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,f=3,g=new Float32Array(f*h*u),S=new Float32Array(f*h*u);for(let m=0;m<u;m++){let M=m%3*2/3-1,R=m>2?0:-1,b=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];g.set(b,f*h*m);for(let v=0;v<h;v++){let T=d[v*2]*2-1,D=d[v*2+1]*2-1;m===0?Hi.set(1,D,T):m===1?Hi.set(-T,1,-D):m===2?Hi.set(-T,D,1):m===3?Hi.set(-1,D,-T):m===4?Hi.set(-T,-1,D):Hi.set(T,D,-1),Hi.toArray(S,(m*h+v)*f)}}let p=new Qt;p.setAttribute("position",new tn(g,f)),p.setAttribute("outputDirection",new tn(S,f)),t.push(new ut(p,null)),n>Rs&&n--}return{lodMeshes:t,sizeLods:e}}function Cd(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function r0(i,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function a0(i,e,t){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:t0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Pd(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function qd(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function zo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yo=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ir(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ci(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Nn});r.uniforms.tEquirect.value=t;let a=new ut(s,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=Bt),new Ka(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function o0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===no||f===io)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new Yo(g.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===no||f===io,S=f===gi||f===Ci;if(g||S){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new As(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let M=h.image;return g&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new As(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",d),p.texture):null}}}return h}function o(h,f){return f===no?h.mapping=gi:f===io&&(h.mapping=Ci),h}function l(h){let f=0,g=6;for(let S=0;S<g;S++)h[S]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function l0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function c0(i,e,t,n){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(u){let h=[],f=u.index,g=u.attributes.position,S=0;if(g===void 0)return;if(f!==null){let M=f.array;S=f.version;for(let R=0,b=M.length;R<b;R+=3){let v=M[R+0],T=M[R+1],D=M[R+2];h.push(v,T,T,D,D,v)}}else{let M=g.array;S=g.version;for(let R=0,b=M.length/3-1;R<b;R+=3){let v=R+0,T=R+1,D=R+2;h.push(v,T,T,D,D,v)}}let p=new(g.count>=65535?js:Zs)(h,1);p.version=S;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function d(u){let h=r.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function h0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,h){i.drawElements(n,h,r,u*a),t.update(h,n,1)}function c(u,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,u*a,f),t.update(h,n,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,f);let S=0;for(let p=0;p<f;p++)S+=h[p];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function d0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function f0(i,e,t){let n=new WeakMap,s=new _t;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==u){let L=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),S===!0&&(R=3);let b=o.attributes.position.count*R,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*v*4*u),D=new zs(T,b,v,u);D.type=hn,D.needsUpdate=!0;let _=R*4;for(let I=0;I<u;I++){let O=p[I],G=m[I],J=M[I],w=b*v*4*I;for(let H=0;H<O.count;H++){let z=H*_;f===!0&&(s.fromBufferAttribute(O,H),T[w+z+0]=s.x,T[w+z+1]=s.y,T[w+z+2]=s.z,T[w+z+3]=0),g===!0&&(s.fromBufferAttribute(G,H),T[w+z+4]=s.x,T[w+z+5]=s.y,T[w+z+6]=s.z,T[w+z+7]=0),S===!0&&(s.fromBufferAttribute(J,H),T[w+z+8]=s.x,T[w+z+9]=s.y,T[w+z+10]=s.z,T[w+z+11]=J.itemSize===4?s.w:1)}}h={count:u,texture:D,size:new he(b,v)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function u0(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var p0={[Zl]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[Kl]:"CINEON_TONE_MAPPING",[Mr]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[nc]:"NEUTRAL_TONE_MAPPING",[ec]:"CUSTOM_TONE_MAPPING"};function m0(i,e,t,n,s,r){let a=new Vt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Qt;c.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Et([0,2,0,0,2,0],2));let d=new Ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ut(c,d),h=new xs(-1,1,1,-1,0,1),f=null,g=null,S=!1,p,m=null,M=[],R=!1;this.setSize=function(b,v){a.setSize(b,v),o!==null&&o.setSize(b,v),l!==null&&l.setSize(b,v);for(let T=0;T<M.length;T++){let D=M[T];D.setSize&&D.setSize(b,v)}},this.setEffects=function(b){M=b,R=M.length>0&&M[0].isRenderPass===!0;let v=a.width,T=a.height;M.length>0&&o===null&&(o=new Vt(v,T,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(v,T,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<M.length;D++){let _=M[D];_.setSize&&_.setSize(v,T)}},this.begin=function(b,v){if(S||b.toneMapping===xn&&M.length===0)return!1;if(m=v,v!==null){let T=v.width,D=v.height;(a.width!==T||a.height!==D)&&this.setSize(T,D)}return R===!1&&b.setRenderTarget(a),p=b.toneMapping,b.toneMapping=xn,!0},this.hasRenderPass=function(){return R},this.end=function(b,v){b.toneMapping=p,S=!0;let T=a,D=o;for(let _=0;_<M.length;_++){let L=M[_];L.enabled!==!1&&(L.render(b,D,T,v),L.needsSwap!==!1&&(T=D,D=D===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,d.defines={},nt.getTransfer(f)===lt&&(d.defines.SRGB_TRANSFER="");let _=p0[g];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(m),b.render(u,h),m=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var rf=new Ut,Tc=new li(1,1),af=new zs,of=new Aa,lf=new ir,Hd=[],Ud=[],$d=new Float32Array(16),Jd=new Float32Array(9),kd=new Float32Array(4);function Is(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hd[s];if(r===void 0&&(r=new Float32Array(s),Hd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wo(i,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function g0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function b0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Tt(t,n))return;kd.set(n),i.uniformMatrix2fv(this.addr,!1,kd),Lt(t,n)}}function S0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Tt(t,n))return;Jd.set(n),i.uniformMatrix3fv(this.addr,!1,Jd),Lt(t,n)}}function v0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Tt(t,n))return;$d.set(n),i.uniformMatrix4fv(this.addr,!1,$d),Lt(t,n)}}function E0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function M0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function T0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function L0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function R0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function A0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function w0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tc.compareFunction=t.isReversedDepthBuffer()?Go:ko,r=Tc):r=rf,t.setTexture2D(e||r,s)}function B0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||of,s)}function N0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||lf,s)}function F0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||af,s)}function O0(i){switch(i){case 5126:return g0;case 35664:return y0;case 35665:return _0;case 35666:return x0;case 35674:return b0;case 35675:return S0;case 35676:return v0;case 5124:case 35670:return E0;case 35667:case 35671:return M0;case 35668:case 35672:return T0;case 35669:case 35673:return L0;case 5125:return R0;case 36294:return D0;case 36295:return A0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}function C0(i,e){i.uniform1fv(this.addr,e)}function P0(i,e){let t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function q0(i,e){let t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function H0(i,e){let t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function U0(i,e){let t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $0(i,e){let t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function J0(i,e){let t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function k0(i,e){i.uniform1iv(this.addr,e)}function G0(i,e){i.uniform2iv(this.addr,e)}function V0(i,e){i.uniform3iv(this.addr,e)}function Q0(i,e){i.uniform4iv(this.addr,e)}function Y0(i,e){i.uniform1uiv(this.addr,e)}function X0(i,e){i.uniform2uiv(this.addr,e)}function z0(i,e){i.uniform3uiv(this.addr,e)}function W0(i,e){i.uniform4uiv(this.addr,e)}function Z0(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Tc:a=rf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function j0(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||of,r[a])}function K0(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||lf,r[a])}function ey(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||af,r[a])}function ty(i){switch(i){case 5126:return C0;case 35664:return P0;case 35665:return q0;case 35666:return H0;case 35674:return U0;case 35675:return $0;case 35676:return J0;case 5124:case 35670:return k0;case 35667:case 35671:return G0;case 35668:case 35672:return V0;case 35669:case 35673:return Q0;case 5125:return Y0;case 36294:return X0;case 36295:return z0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return ey}}var Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=O0(t.type)}},Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ty(t.type)}},Dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function Gd(i,e){i.seq.push(e),i.map[e.id]=e}function ny(i,e,t){let n=i.name,s=n.length;for(Ec.lastIndex=0;;){let r=Ec.exec(n),a=Ec.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gd(t,c===void 0?new Lc(o,i,e):new Rc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Dc(o),Gd(t,u)),t=u}}}var Ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ny(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Vd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var iy=37297,sy=0;function ry(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Qd=new Ye;function ay(i){nt._getMatrix(Qd,nt.workingColorSpace,i);let e=`mat3( ${Qd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Ys:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ry(i.getShaderSource(e),o)}else return r}function oy(i,e){let t=ay(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ly={[Zl]:"Linear",[jl]:"Reinhard",[Kl]:"Cineon",[Mr]:"ACESFilmic",[tc]:"AgX",[nc]:"Neutral",[ec]:"Custom"};function cy(i,e){let t=ly[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qo=new N;function hy(){nt.getLuminanceCoefficients(Qo);let i=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function fy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Cr(i){return i!==""}function Xd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var py=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(py,gy)}var my=new Map;function gy(i,e){let t=Ke[e];if(t===void 0){let n=my.get(e);if(n!==void 0)t=Ke[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ac(t)}var yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(i){return i.replace(yy,_y)}function _y(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zd(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var xy={[Er]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function by(i){return xy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sy={[gi]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function vy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Sy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ey={[Ci]:"ENVMAP_MODE_REFRACTION"};function My(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ey[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ty={[to]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[dd]:"ENVMAP_BLENDING_ADD"};function Ly(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ty[i.combine]||"ENVMAP_BLENDING_NONE"}function Ry(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Dy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=by(t),c=vy(t),d=My(t),u=Ly(t),h=Ry(t),f=dy(t),g=fy(r),S=s.createProgram(),p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`)):(p=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),m=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==xn?cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,oy("linearToOutputTexel",t.outputColorSpace),hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=Ac(a),a=Xd(a,t),a=zd(a,t),o=Ac(o),o=Xd(o,t),o=zd(o,t),a=Wd(a),o=Wd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=M+p+a,b=M+m+o,v=Vd(s,s.VERTEX_SHADER,R),T=Vd(s,s.FRAGMENT_SHADER,b);s.attachShader(S,v),s.attachShader(S,T),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function D(O){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(S)||"",J=s.getShaderInfoLog(v)||"",w=s.getShaderInfoLog(T)||"",H=G.trim(),z=J.trim(),Y=w.trim(),ne=!0,X=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,v,T);else{let j=Yd(s,v,"vertex"),C=Yd(s,T,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+H+`
`+j+`
`+C)}else H!==""?qe("WebGLProgram: Program Info Log:",H):(z===""||Y==="")&&(X=!1);X&&(O.diagnostics={runnable:ne,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(v),s.deleteShader(T),_=new Ds(s,S),L=uy(s,S)}let _;this.getUniforms=function(){return _===void 0&&D(this),_};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(S,iy)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=v,this.fragmentShader=T,this}var Ay=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wc(e),t.set(e,n)),n}},wc=class{constructor(e){this.id=Ay++,this.code=e,this.usedTimes=0}};function Iy(i){return i===xi||i===wr||i===Br}function wy(i,e,t,n,s,r){let a=new Ws,o=new Ic,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,L,I,O,G,J){let w=O.fog,H=G.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?O.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||z,Y),X=ne&&ne.mapping===Tr?ne.image.height:null,j=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&qe("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let C=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=C!==void 0?C.length:0,de=0;H.morphAttributes.position!==void 0&&(de=1),H.morphAttributes.normal!==void 0&&(de=2),H.morphAttributes.color!==void 0&&(de=3);let Ve,we,re,q;if(j){let pt=On[j];Ve=pt.vertexShader,we=pt.fragmentShader}else{Ve=_.vertexShader,we=_.fragmentShader;let pt=o.getVertexShaderStage(_),at=o.getFragmentShaderStage(_);o.update(_,pt,at),re=pt.id,q=at.id}let k=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),De=G.isInstancedMesh===!0,xe=G.isBatchedMesh===!0,He=!!_.map,it=!!_.matcap,K=!!ne,se=!!_.aoMap,le=!!_.lightMap,ce=!!_.bumpMap&&_.wireframe===!1,pe=!!_.normalMap,Ue=!!_.displacementMap,Pe=!!_.emissiveMap,ke=!!_.metalnessMap,Xe=!!_.roughnessMap,A=_.anisotropy>0,rt=_.clearcoat>0,et=_.dispersion>0,E=_.retroreflectivity>0,y=_.iridescence>0,P=_.sheen>0,V=_.transmission>0,W=A&&!!_.anisotropyMap,fe=rt&&!!_.clearcoatMap,ue=rt&&!!_.clearcoatNormalMap,Z=rt&&!!_.clearcoatRoughnessMap,te=y&&!!_.iridescenceMap,me=y&&!!_.iridescenceThicknessMap,Fe=P&&!!_.sheenColorMap,be=P&&!!_.sheenRoughnessMap,ge=!!_.specularMap,Oe=!!_.specularColorMap,$e=!!_.specularIntensityMap,ze=V&&!!_.transmissionMap,F=V&&!!_.thicknessMap,ye=!!_.gradientMap,ee=!!_.alphaMap,_e=_.alphaTest>0,Te=!!_.alphaHash,ie=!!_.extensions,Ce=xn;_.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let Be={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:Ve,fragmentShader:we,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:xe,batchingColor:xe&&G._colorsTexture!==null,instancing:De,instancingColor:De&&G.instanceColor!==null,instancingMorph:De&&G.morphTexture!==null,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:it,envMap:K,envMapMode:K&&ne.mapping,envMapCubeUVHeight:X,aoMap:se,lightMap:le,bumpMap:ce,normalMap:pe,displacementMap:Ue,emissiveMap:Pe,normalMapObjectSpace:pe&&_.normalMapType===pd,normalMapTangentSpace:pe&&_.normalMapType===Nr,packedNormalMap:pe&&_.normalMapType===Nr&&Iy(_.normalMap.format),metalnessMap:ke,roughnessMap:Xe,anisotropy:A,anisotropyMap:W,clearcoat:rt,clearcoatMap:fe,clearcoatNormalMap:ue,clearcoatRoughnessMap:Z,dispersion:et,retroreflection:E,iridescence:y,iridescenceMap:te,iridescenceThicknessMap:me,sheen:P,sheenColorMap:Fe,sheenRoughnessMap:be,specularMap:ge,specularColorMap:Oe,specularIntensityMap:$e,transmission:V,transmissionMap:ze,thicknessMap:F,gradientMap:ye,opaque:_.transparent===!1&&_.blending===Es&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:_e,alphaHash:Te,combine:_.combine,mapUv:He&&g(_.map.channel),aoMapUv:se&&g(_.aoMap.channel),lightMapUv:le&&g(_.lightMap.channel),bumpMapUv:ce&&g(_.bumpMap.channel),normalMapUv:pe&&g(_.normalMap.channel),displacementMapUv:Ue&&g(_.displacementMap.channel),emissiveMapUv:Pe&&g(_.emissiveMap.channel),metalnessMapUv:ke&&g(_.metalnessMap.channel),roughnessMapUv:Xe&&g(_.roughnessMap.channel),anisotropyMapUv:W&&g(_.anisotropyMap.channel),clearcoatMapUv:fe&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(_.sheenRoughnessMap.channel),specularMapUv:ge&&g(_.specularMap.channel),specularColorMapUv:Oe&&g(_.specularColorMap.channel),specularIntensityMapUv:$e&&g(_.specularIntensityMap.channel),transmissionMapUv:ze&&g(_.transmissionMap.channel),thicknessMapUv:F&&g(_.thicknessMap.channel),alphaMapUv:ee&&g(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(pe||A),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(He||ee),fog:!!w,useFog:_.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:oe,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:de,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Pe&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Yt,flipSided:_.side===Nt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function p(_){let L=[];if(_.shaderID?L.push(_.shaderID):(L.push(_.customVertexShaderID),L.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)L.push(I),L.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(L,_),M(L,_),L.push(i.outputColorSpace)),L.push(_.customProgramCacheKey),L.join()}function m(_,L){_.push(L.precision),_.push(L.outputColorSpace),_.push(L.envMapMode),_.push(L.envMapCubeUVHeight),_.push(L.mapUv),_.push(L.alphaMapUv),_.push(L.lightMapUv),_.push(L.aoMapUv),_.push(L.bumpMapUv),_.push(L.normalMapUv),_.push(L.displacementMapUv),_.push(L.emissiveMapUv),_.push(L.metalnessMapUv),_.push(L.roughnessMapUv),_.push(L.anisotropyMapUv),_.push(L.clearcoatMapUv),_.push(L.clearcoatNormalMapUv),_.push(L.clearcoatRoughnessMapUv),_.push(L.iridescenceMapUv),_.push(L.iridescenceThicknessMapUv),_.push(L.sheenColorMapUv),_.push(L.sheenRoughnessMapUv),_.push(L.specularMapUv),_.push(L.specularColorMapUv),_.push(L.specularIntensityMapUv),_.push(L.transmissionMapUv),_.push(L.thicknessMapUv),_.push(L.combine),_.push(L.fogExp2),_.push(L.sizeAttenuation),_.push(L.morphTargetsCount),_.push(L.morphAttributeCount),_.push(L.numSunLights),_.push(L.numDirLights),_.push(L.numPointLights),_.push(L.numSpotLights),_.push(L.numSpotLightMaps),_.push(L.numHemiLights),_.push(L.numRectAreaLights),_.push(L.numSunLightShadows),_.push(L.numDirLightShadows),_.push(L.numPointLightShadows),_.push(L.numSpotLightShadows),_.push(L.numSpotLightShadowsWithMaps),_.push(L.numLightProbes),_.push(L.shadowMapType),_.push(L.toneMapping),_.push(L.numClippingPlanes),_.push(L.numClipIntersection),_.push(L.depthPacking)}function M(_,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.retroreflection&&a.enable(24),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){let L=f[_.type],I;if(L){let O=On[L];I=Bd.clone(O.uniforms)}else I=_.uniforms;return I}function b(_,L){let I=d.get(L);return I!==void 0?++I.usedTimes:(I=new Dy(i,L,_,s),c.push(I),d.set(L,I)),I}function v(_){if(--_.usedTimes===0){let L=c.indexOf(_);c[L]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function D(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:R,acquireProgram:b,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:D}}function By(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ny(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,S,p,m){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:m},i[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=p,M.group=m),e++,M}function l(h,f,g,S,p,m,M){M.reversedDepth===!0&&(p=-p);let R=o(h,f,g,S,p,m);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):t.push(R)}function c(h,f,g,S,p,m){let M=o(h,f,g,S,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function d(h,f){t.length>1&&t.sort(h||Ny),n.length>1&&n.sort(f||jd),s.length>1&&s.sort(f||jd)}function u(){for(let h=e,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function Fy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Kd,i.set(n,[a])):s>=r.length?(a=new Kd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Oy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Qe};break;case"SpotLight":t={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Py=0;function qy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hy(i){let e=new Oy,t=Cy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new dt,a=new dt;function o(c){let d=0,u=0,h=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let f=0,g=0,S=0,p=0,m=0,M=0,R=0,b=0,v=0,T=0,D=0,_=0,L=0,I=0;c.sort(qy);for(let G=0,J=c.length;G<J;G++){let w=c[G],H=w.color,z=w.intensity,Y=w.distance,ne=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===xi?ne=w.shadow.map.texture:ne=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=H.r*z,u+=H.g*z,h+=H.b*z;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],z);I++}else if(w.isSunLight){let X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let j=w.shadow,C=t.get(w);C.shadowIntensity=j.intensity,C.shadowBias=j.bias,C.shadowNormalBias=j.normalBias,C.shadowRadius=j.radius,C.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=C,n.sunShadowMap[g]=ne;let ae=j.getViewportCount();for(let de=0;de<ae;de++)n.sunShadowMatrix[S+de]=j.getMatrix(de),n.sunShadowCascade[S+de]=j._cascadeData[de];S+=ae,g++}n.sun[f]=X,f++}else if(w.isDirectionalLight){let X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let j=w.shadow,C=t.get(w);C.shadowIntensity=j.intensity,C.shadowBias=j.bias,C.shadowNormalBias=j.normalBias,C.shadowRadius=j.radius,C.shadowMapSize=j.mapSize,n.directionalShadow[p]=C,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=w.shadow.matrix,v++}n.directional[p]=X,p++}else if(w.isSpotLight){let X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(H).multiplyScalar(z),X.distance=Y,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[M]=X;let j=w.shadow;if(w.map&&(n.spotLightMap[_]=w.map,_++,j.updateMatrices(w),w.castShadow&&L++),n.spotLightMatrix[M]=j.matrix,w.castShadow){let C=t.get(w);C.shadowIntensity=j.intensity,C.shadowBias=j.bias,C.shadowNormalBias=j.normalBias,C.shadowRadius=j.radius,C.shadowMapSize=j.mapSize,n.spotShadow[M]=C,n.spotShadowMap[M]=ne,D++}M++}else if(w.isRectAreaLight){let X=e.get(w);X.color.copy(H).multiplyScalar(z),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[R]=X,R++}else if(w.isPointLight){let X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){let j=w.shadow,C=t.get(w);C.shadowIntensity=j.intensity,C.shadowBias=j.bias,C.shadowNormalBias=j.normalBias,C.shadowRadius=j.radius,C.shadowMapSize=j.mapSize,C.shadowCameraNear=j.camera.near,C.shadowCameraFar=j.camera.far,n.pointShadow[m]=C,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=w.shadow.matrix,T++}n.point[m]=X,m++}else if(w.isHemisphereLight){let X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(z),X.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[b]=X,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let O=n.hash;(O.sunLength!==f||O.directionalLength!==p||O.pointLength!==m||O.spotLength!==M||O.rectAreaLength!==R||O.hemiLength!==b||O.numSunShadows!==g||O.numDirectionalShadows!==v||O.numPointShadows!==T||O.numSpotShadows!==D||O.numSpotMaps!==_||O.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=R,n.point.length=m,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+_-L,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,O.sunLength=f,O.directionalLength=p,O.pointLength=m,O.spotLength=M,O.rectAreaLength=R,O.hemiLength=b,O.numSunShadows=g,O.numDirectionalShadows=v,O.numPointShadows=T,O.numSpotShadows=D,O.numSpotMaps=_,O.numLightProbes=I,n.version=Py++)}function l(c,d){let u=0,h=0,f=0,g=0,S=0,p=0,m=d.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){let b=c[M];if(b.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),u++}else if(b.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(b.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let v=n.rectArea[S];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),S++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function ef(i){let e=new Hy(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Uy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ef(i),e.set(s,[o])):r>=a.length?(o=new ef(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var $y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jy=`uniform sampler2D shadow_pass;
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
}`,ky=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Gy=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],tf=new dt,Or=new N,Mc=new N;function Vy(i,e,t){let n=new us,s=new he,r=new he,a=new _t,o=new $a,l=new Ja,c={},d=t.maxTextureSize,u={[mi]:Nt,[Nt]:mi,[Yt]:Yt},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:$y,fragmentShader:Jy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Qt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ut(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let m=this.type;this.render=function(T,D,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Vh&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Er);let L=i.getRenderTarget(),I=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Nn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let J=m!==this.type;J&&D.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(H=>H.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,H=T.length;w<H;w++){let z=T[w],Y=z.shadow;if(Y===void 0){qe("WebGLShadowMap:",z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ne=Y.getFrameExtents();s.multiply(ne),r.copy(Y.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ne.x),s.x=r.x*ne.x,Y.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ne.y),s.y=r.y*ne.y,Y.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=X,Y.map===null||J===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===vs){if(z.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Vt(s.x,s.y,{format:xi,type:Sn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),Y.map.texture.name=z.name+".shadowMap",Y.map.depthTexture=new li(s.x,s.y,hn),Y.map.depthTexture.name=z.name+".shadowMapDepth",Y.map.depthTexture.format=An,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=At,Y.map.depthTexture.magFilter=At}else z.isPointLight?(Y.map=new Yo(s.x),Y.map.depthTexture=new Na(s.x,bn)):(Y.map=new Vt(s.x,s.y),Y.map.depthTexture=new li(s.x,s.y,bn)),Y.map.depthTexture.name=z.name+".shadowMap",Y.map.depthTexture.format=An,this.type===Er?(Y.map.depthTexture.compareFunction=X?Go:ko,Y.map.depthTexture.minFilter=Bt,Y.map.depthTexture.magFilter=Bt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=At,Y.map.depthTexture.magFilter=At);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let j=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();z.isPointLight!==!0&&Y.updateMatrices(z,_);for(let C=0;C<j;C++){let ae=Y.getCamera(C);if(z.isPointLight){let de=Y.camera,Ve=Y.matrix,we=z.distance||de.far;we!==de.far&&(de.far=we,de.updateProjectionMatrix()),Or.setFromMatrixPosition(z.matrixWorld),de.position.copy(Or),Mc.copy(de.position),Mc.add(ky[C]),de.up.copy(Gy[C]),de.lookAt(Mc),de.updateMatrixWorld(),Ve.makeTranslation(-Or.x,-Or.y,-Or.z),tf.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(tf,de.coordinateSystem,de.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,C),i.clear();else{C===0&&(i.setRenderTarget(Y.map),i.clear());let de=Y.getViewport(C);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),G.viewport(a)}n=Y.getFrustum(C),b(D,_,ae,z,this.type)}Y.isPointLightShadow!==!0&&this.type===vs&&M(Y,_),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(L,I,O)};function M(T,D){let _=e.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Vt(s.x,s.y,{format:xi,type:Sn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(D,null,_,h,S,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(D,null,_,f,S,null)}function R(T,D,_,L){let I=null,O=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)I=O;else if(I=_.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let G=I.uuid,J=D.uuid,w=c[G];w===void 0&&(w={},c[G]=w);let H=w[J];H===void 0&&(H=I.clone(),w[J]=H,D.addEventListener("dispose",v)),I=H}if(I.visible=D.visible,I.wireframe=D.wireframe,L===vs?I.side=D.shadowSide!==null?D.shadowSide:D.side:I.side=D.shadowSide!==null?D.shadowSide:u[D.side],I.alphaMap=D.alphaMap,I.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,I.map=D.map,I.clipShadows=D.clipShadows,I.clippingPlanes=D.clippingPlanes,I.clipIntersection=D.clipIntersection,I.displacementMap=D.displacementMap,I.displacementScale=D.displacementScale,I.displacementBias=D.displacementBias,I.wireframeLinewidth=D.wireframeLinewidth,I.linewidth=D.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let G=i.properties.get(I);G.light=_}return I}function b(T,D,_,L,I){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===vs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let J=e.update(T),w=T.material;if(Array.isArray(w)){let H=J.groups;for(let z=0,Y=H.length;z<Y;z++){let ne=H[z],X=w[ne.materialIndex];if(X&&X.visible){let j=R(T,X,L,I);T.onBeforeShadow(i,T,D,_,J,j,ne),i.renderBufferDirect(_,null,J,j,T,ne),T.onAfterShadow(i,T,D,_,J,j,ne)}}}else if(w.visible){let H=R(T,w,L,I);T.onBeforeShadow(i,T,D,_,J,H,null),i.renderBufferDirect(_,null,J,H,T,null),T.onAfterShadow(i,T,D,_,J,H,null)}}let G=T.children;for(let J=0,w=G.length;J<w;J++)b(G[J],D,_,L,I)}function v(T){T.target.removeEventListener("dispose",v);for(let _ in c){let L=c[_],I=T.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}}function Qy(i,e){function t(){let F=!1,ye=new _t,ee=null,_e=new _t(0,0,0,0);return{setMask:function(Te){ee!==Te&&!F&&(i.colorMask(Te,Te,Te,Te),ee=Te)},setLocked:function(Te){F=Te},setClear:function(Te,ie,Ce,Be,pt){pt===!0&&(Te*=Be,ie*=Be,Ce*=Be),ye.set(Te,ie,Ce,Be),_e.equals(ye)===!1&&(i.clearColor(Te,ie,Ce,Be),_e.copy(ye))},reset:function(){F=!1,ee=null,_e.set(-1,0,0,0)}}}function n(){let F=!1,ye=!1,ee=null,_e=null,Te=null;return{setReversed:function(ie){if(ye!==ie){let Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ye=ie;let Be=Te;Te=null,this.setClear(Be)}},getReversed:function(){return ye},setTest:function(ie){ie?k(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!F&&(i.depthMask(ie),ee=ie)},setFunc:function(ie){if(ye&&(ie=Ld[ie]),_e!==ie){switch(ie){case _a:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=ie}},setLocked:function(ie){F=ie},setClear:function(ie){Te!==ie&&(Te=ie,ye&&(ie=1-ie),i.clearDepth(ie))},reset:function(){F=!1,ee=null,_e=null,Te=null,ye=!1}}}function s(){let F=!1,ye=null,ee=null,_e=null,Te=null,ie=null,Ce=null,Be=null,pt=null;return{setTest:function(at){F||(at?k(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(at){ye!==at&&!F&&(i.stencilMask(at),ye=at)},setFunc:function(at,un,Mn){(ee!==at||_e!==un||Te!==Mn)&&(i.stencilFunc(at,un,Mn),ee=at,_e=un,Te=Mn)},setOp:function(at,un,Mn){(ie!==at||Ce!==un||Be!==Mn)&&(i.stencilOp(at,un,Mn),ie=at,Ce=un,Be=Mn)},setLocked:function(at){F=at},setClear:function(at){pt!==at&&(i.clearStencil(at),pt=at)},reset:function(){F=!1,ye=null,ee=null,_e=null,Te=null,ie=null,Ce=null,Be=null,pt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},u={},h={},f=new WeakMap,g=[],S=null,p=!1,m=null,M=null,R=null,b=null,v=null,T=null,D=null,_=new Qe(0,0,0),L=0,I=!1,O=null,G=null,J=null,w=null,H=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ne=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=ne>=2);let j=null,C={},ae=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Ve=new _t().fromArray(ae),we=new _t().fromArray(de);function re(F,ye,ee,_e){let Te=new Uint8Array(4),ie=i.createTexture();i.bindTexture(F,ie),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<ee;Ce++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ye+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ie}let q={};q[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(i.DEPTH_TEST),a.setFunc(as),ce(!1),pe(Vl),k(i.CULL_FACE),se(Nn);function k(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function oe(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function De(F,ye){return h[F]!==ye?(i.bindFramebuffer(F,ye),h[F]=ye,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function xe(F,ye){let ee=g,_e=!1;if(F){ee=f.get(ye),ee===void 0&&(ee=[],f.set(ye,ee));let Te=F.textures;if(ee.length!==Te.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ce=Te.length;ie<Ce;ie++)ee[ie]=i.COLOR_ATTACHMENT0+ie;ee.length=Te.length,_e=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ee)}function He(F){return S!==F?(i.useProgram(F),S=F,!0):!1}let it={[Oi]:i.FUNC_ADD,[Yh]:i.FUNC_SUBTRACT,[Xh]:i.FUNC_REVERSE_SUBTRACT};it[zh]=i.MIN,it[Wh]=i.MAX;let K={[Zh]:i.ZERO,[jh]:i.ONE,[Kh]:i.SRC_COLOR,[zl]:i.SRC_ALPHA,[rd]:i.SRC_ALPHA_SATURATE,[id]:i.DST_COLOR,[td]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[Wl]:i.ONE_MINUS_SRC_ALPHA,[sd]:i.ONE_MINUS_DST_COLOR,[nd]:i.ONE_MINUS_DST_ALPHA,[ad]:i.CONSTANT_COLOR,[od]:i.ONE_MINUS_CONSTANT_COLOR,[ld]:i.CONSTANT_ALPHA,[cd]:i.ONE_MINUS_CONSTANT_ALPHA};function se(F,ye,ee,_e,Te,ie,Ce,Be,pt,at){if(F===Nn){p===!0&&(oe(i.BLEND),p=!1);return}if(p===!1&&(k(i.BLEND),p=!0),F!==Qh){if(F!==m||at!==I){if((M!==Oi||v!==Oi)&&(i.blendEquation(i.FUNC_ADD),M=Oi,v=Oi),at)switch(F){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",F);break}else switch(F){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",F);break}R=null,b=null,T=null,D=null,_.set(0,0,0),L=0,m=F,I=at}return}Te=Te||ye,ie=ie||ee,Ce=Ce||_e,(ye!==M||Te!==v)&&(i.blendEquationSeparate(it[ye],it[Te]),M=ye,v=Te),(ee!==R||_e!==b||ie!==T||Ce!==D)&&(i.blendFuncSeparate(K[ee],K[_e],K[ie],K[Ce]),R=ee,b=_e,T=ie,D=Ce),(Be.equals(_)===!1||pt!==L)&&(i.blendColor(Be.r,Be.g,Be.b,pt),_.copy(Be),L=pt),m=F,I=!1}function le(F,ye){F.side===Yt?oe(i.CULL_FACE):k(i.CULL_FACE);let ee=F.side===Nt;ye&&(ee=!ee),ce(ee),F.blending===Es&&F.transparent===!1?se(Nn):se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let _e=F.stencilWrite;o.setTest(_e),_e&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Pe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){O!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),O=F)}function pe(F){F!==kh?(k(i.CULL_FACE),F!==G&&(F===Vl?i.cullFace(i.BACK):F===Gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),G=F}function Ue(F){F!==J&&(Y&&i.lineWidth(F),J=F)}function Pe(F,ye,ee){F?(k(i.POLYGON_OFFSET_FILL),(w!==ye||H!==ee)&&(w=ye,H=ee,a.getReversed()&&(ye=-ye),i.polygonOffset(ye,ee))):oe(i.POLYGON_OFFSET_FILL)}function ke(F){F?k(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function Xe(F){F===void 0&&(F=i.TEXTURE0+z-1),j!==F&&(i.activeTexture(F),j=F)}function A(F,ye,ee){ee===void 0&&(j===null?ee=i.TEXTURE0+z-1:ee=j);let _e=C[ee];_e===void 0&&(_e={type:void 0,texture:void 0},C[ee]=_e),(_e.type!==F||_e.texture!==ye)&&(j!==ee&&(i.activeTexture(ee),j=ee),i.bindTexture(F,ye||q[F]),_e.type=F,_e.texture=ye)}function rt(){let F=C[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function y(){try{i.texSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function P(){try{i.texSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function fe(){try{i.texStorage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function ue(){try{i.texStorage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function Z(){try{i.texImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function te(){try{i.texImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function me(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function Fe(F,ye){u[F]!==ye&&(i.pixelStorei(F,ye),u[F]=ye)}function be(F){Ve.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ve.copy(F))}function ge(F){we.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),we.copy(F))}function Oe(F,ye){let ee=c.get(ye);ee===void 0&&(ee=new WeakMap,c.set(ye,ee));let _e=ee.get(F);_e===void 0&&(_e=i.getUniformBlockIndex(ye,F.name),ee.set(F,_e))}function $e(F,ye){let _e=c.get(ye).get(F);l.get(ye)!==_e&&(i.uniformBlockBinding(ye,_e,F.__bindingPointIndex),l.set(ye,_e))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},j=null,C={},h={},f=new WeakMap,g=[],S=null,p=!1,m=null,M=null,R=null,b=null,v=null,T=null,D=null,_=new Qe(0,0,0),L=0,I=!1,O=null,G=null,J=null,w=null,H=null,Ve.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:k,disable:oe,bindFramebuffer:De,drawBuffers:xe,useProgram:He,setBlending:se,setMaterial:le,setFlipSided:ce,setCullFace:pe,setLineWidth:Ue,setPolygonOffset:Pe,setScissorTest:ke,activeTexture:Xe,bindTexture:A,unbindTexture:rt,compressedTexImage2D:et,compressedTexImage3D:E,texImage2D:Z,texImage3D:te,pixelStorei:Fe,getParameter:me,updateUBOMapping:Oe,uniformBlockBinding:$e,texStorage2D:fe,texStorage3D:ue,texSubImage2D:y,texSubImage3D:P,compressedTexSubImage2D:V,compressedTexSubImage3D:W,scissor:be,viewport:ge,reset:ze}}function Yy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,d=new WeakMap,u=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,y){return g?new OffscreenCanvas(E,y):Xs("canvas")}function p(E,y,P){let V=1,W=et(E);if((W.width>P||W.height>P)&&(V=P/Math.max(W.width,W.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let fe=Math.floor(V*W.width),ue=Math.floor(V*W.height);h===void 0&&(h=S(fe,ue));let Z=y?S(fe,ue):h;return Z.width=fe,Z.height=ue,Z.getContext("2d").drawImage(E,0,0,fe,ue),qe("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+fe+"x"+ue+")."),Z}else return"data"in E&&qe("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),E;return E}function m(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,y,P,V,W,fe=!1){if(E!==null){if(i[E]!==void 0)return i[E];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue;V&&(ue=e.get("EXT_texture_norm16"),ue||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===i.RED&&(P===i.FLOAT&&(Z=i.R32F),P===i.HALF_FLOAT&&(Z=i.R16F),P===i.UNSIGNED_BYTE&&(Z=i.R8),P===i.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),P===i.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),y===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(Z=i.R8UI),P===i.UNSIGNED_SHORT&&(Z=i.R16UI),P===i.UNSIGNED_INT&&(Z=i.R32UI),P===i.BYTE&&(Z=i.R8I),P===i.SHORT&&(Z=i.R16I),P===i.INT&&(Z=i.R32I)),y===i.RG&&(P===i.FLOAT&&(Z=i.RG32F),P===i.HALF_FLOAT&&(Z=i.RG16F),P===i.UNSIGNED_BYTE&&(Z=i.RG8),P===i.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),P===i.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(Z=i.RG8UI),P===i.UNSIGNED_SHORT&&(Z=i.RG16UI),P===i.UNSIGNED_INT&&(Z=i.RG32UI),P===i.BYTE&&(Z=i.RG8I),P===i.SHORT&&(Z=i.RG16I),P===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),P===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),P===i.UNSIGNED_INT&&(Z=i.RGB32UI),P===i.BYTE&&(Z=i.RGB8I),P===i.SHORT&&(Z=i.RGB16I),P===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),P===i.UNSIGNED_INT&&(Z=i.RGBA32UI),P===i.BYTE&&(Z=i.RGBA8I),P===i.SHORT&&(Z=i.RGBA16I),P===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&(P===i.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),P===i.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),P===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),y===i.RGBA){let te=fe?Ys:nt.getTransfer(W);P===i.FLOAT&&(Z=i.RGBA32F),P===i.HALF_FLOAT&&(Z=i.RGBA16F),P===i.UNSIGNED_BYTE&&(Z=te===lt?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),P===i.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),P===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(E,y){let P;return E?y===null||y===bn||y===Ts?P=i.DEPTH24_STENCIL8:y===hn?P=i.DEPTH32F_STENCIL8:y===Ms&&(P=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===bn||y===Ts?P=i.DEPTH_COMPONENT24:y===hn?P=i.DEPTH_COMPONENT32F:y===Ms&&(P=i.DEPTH_COMPONENT16),P}function T(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==At&&E.minFilter!==Bt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function D(E){let y=E.target;y.removeEventListener("dispose",D),L(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&u.delete(y)}function _(E){let y=E.target;y.removeEventListener("dispose",_),O(y)}function L(E){let y=n.get(E);if(y.__webglInit===void 0)return;let P=E.source,V=f.get(P);if(V){let W=V[y.__cacheKey];W.usedTimes--,W.usedTimes===0&&I(E),Object.keys(V).length===0&&f.delete(P)}n.remove(E)}function I(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let P=E.source,V=f.get(P);delete V[y.__cacheKey],a.memory.textures--}function O(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let W=0;W<y.__webglFramebuffer[V].length;W++)i.deleteFramebuffer(y.__webglFramebuffer[V][W]);else i.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)i.deleteFramebuffer(y.__webglFramebuffer[V]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let P=E.textures;for(let V=0,W=P.length;V<W;V++){let fe=n.get(P[V]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(P[V])}n.remove(E)}let G=0;function J(){G=0}function w(){return G}function H(E){G=E}function z(){let E=G;return E>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,E}function Y(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function ne(E,y){let P=n.get(E);if(E.isVideoTexture&&A(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&P.__version!==E.version){let V=E.image;if(V===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(P,E,y);return}}else E.isExternalTexture&&(P.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+y)}function X(E,y){let P=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){oe(P,E,y);return}else E.isExternalTexture&&(P.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+y)}function j(E,y){let P=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){oe(P,E,y);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+y)}function C(E,y){let P=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&P.__version!==E.version){De(P,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+y)}let ae={[os]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},de={[At]:i.NEAREST,[fd]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Ve={[gd]:i.NEVER,[Sd]:i.ALWAYS,[yd]:i.LESS,[ko]:i.LEQUAL,[_d]:i.EQUAL,[Go]:i.GEQUAL,[xd]:i.GREATER,[bd]:i.NOTEQUAL};function we(E,y){if(y.type===hn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Bt||y.magFilter===so||y.magFilter===Lr||y.magFilter===yi||y.minFilter===Bt||y.minFilter===so||y.minFilter===Lr||y.minFilter===yi)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ae[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ae[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ae[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,de[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===At||y.minFilter!==Lr&&y.minFilter!==yi||y.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function re(E,y){let P=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",D));let V=y.source,W=f.get(V);W===void 0&&(W={},f.set(V,W));let fe=Y(y);if(fe!==E.__cacheKey){W[fe]===void 0&&(W[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,P=!0),W[fe].usedTimes++;let ue=W[E.__cacheKey];ue!==void 0&&(W[E.__cacheKey].usedTimes--,ue.usedTimes===0&&I(y)),E.__cacheKey=fe,E.__webglTexture=W[fe].texture}return P}function q(E,y,P){return Math.floor(Math.floor(E/P)/y)}function k(E,y,P,V){let fe=E.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,P,V,y.data);else{fe.sort((Fe,be)=>Fe.start-be.start);let ue=0;for(let Fe=1;Fe<fe.length;Fe++){let be=fe[ue],ge=fe[Fe],Oe=be.start+be.count,$e=q(ge.start,y.width,4),ze=q(be.start,y.width,4);ge.start<=Oe+1&&$e===ze&&q(ge.start+ge.count-1,y.width,4)===$e?be.count=Math.max(be.count,ge.start+ge.count-be.start):(++ue,fe[ue]=ge)}fe.length=ue+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Fe=0,be=fe.length;Fe<be;Fe++){let ge=fe[Fe],Oe=Math.floor(ge.start/4),$e=Math.ceil(ge.count/4),ze=Oe%y.width,F=Math.floor(Oe/y.width),ye=$e,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,ze,F,ye,ee,P,V,y.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function oe(E,y,P){let V=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=i.TEXTURE_3D);let W=re(E,y),fe=y.source;t.bindTexture(V,E.__webglTexture,i.TEXTURE0+P);let ue=n.get(fe);if(fe.version!==ue.__version||W===!0){if(t.activeTexture(i.TEXTURE0+P),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ee=nt.getPrimaries(nt.workingColorSpace),_e=y.colorSpace===Zn?null:nt.getPrimaries(y.colorSpace),Te=y.colorSpace===Zn||ee===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let te=p(y.image,!1,s.maxTextureSize);te=rt(y,te);let me=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type),be=b(y.internalFormat,me,Fe,y.normalized,y.colorSpace,y.isVideoTexture);we(V,y);let ge,Oe=y.mipmaps,$e=y.isVideoTexture!==!0,ze=ue.__version===void 0||W===!0,F=fe.dataReady,ye=T(y,te);if(y.isDepthTexture)be=v(y.format===_i,y.type),ze&&($e?t.texStorage2D(i.TEXTURE_2D,1,be,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,be,te.width,te.height,0,me,Fe,null));else if(y.isDataTexture)if(Oe.length>0){$e&&ze&&t.texStorage2D(i.TEXTURE_2D,ye,be,Oe[0].width,Oe[0].height);for(let ee=0,_e=Oe.length;ee<_e;ee++)ge=Oe[ee],$e?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ge.width,ge.height,me,Fe,ge.data):t.texImage2D(i.TEXTURE_2D,ee,be,ge.width,ge.height,0,me,Fe,ge.data);y.generateMipmaps=!1}else $e?(ze&&t.texStorage2D(i.TEXTURE_2D,ye,be,te.width,te.height),F&&k(y,te,me,Fe)):t.texImage2D(i.TEXTURE_2D,0,be,te.width,te.height,0,me,Fe,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){$e&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,Oe[0].width,Oe[0].height,te.depth);for(let ee=0,_e=Oe.length;ee<_e;ee++)if(ge=Oe[ee],y.format!==dn)if(me!==null)if($e){if(F)if(y.layerUpdates.size>0){let Te=_c(ge.width,ge.height,y.format,y.type);for(let ie of y.layerUpdates){let Ce=ge.data.subarray(ie*Te/ge.data.BYTES_PER_ELEMENT,(ie+1)*Te/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,ie,ge.width,ge.height,1,me,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,te.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,be,ge.width,ge.height,te.depth,0,ge.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,te.depth,me,Fe,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,be,ge.width,ge.height,te.depth,0,me,Fe,ge.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{$e&&ze&&t.texStorage2D(i.TEXTURE_2D,ye,be,Oe[0].width,Oe[0].height);for(let ee=0,_e=Oe.length;ee<_e;ee++)ge=Oe[ee],y.format!==dn?me!==null?$e?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,be,ge.width,ge.height,0,ge.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ge.width,ge.height,me,Fe,ge.data):t.texImage2D(i.TEXTURE_2D,ee,be,ge.width,ge.height,0,me,Fe,ge.data)}else if(y.isDataArrayTexture)if($e){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,te.width,te.height,te.depth),F)if(y.layerUpdates.size>0){let ee=_c(te.width,te.height,y.format,y.type);for(let _e of y.layerUpdates){let Te=te.data.subarray(_e*ee/te.data.BYTES_PER_ELEMENT,(_e+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,te.width,te.height,1,me,Fe,Te)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Fe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,te.width,te.height,te.depth,0,me,Fe,te.data);else if(y.isData3DTexture)$e?(ze&&t.texStorage3D(i.TEXTURE_3D,ye,be,te.width,te.height,te.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Fe,te.data)):t.texImage3D(i.TEXTURE_3D,0,be,te.width,te.height,te.depth,0,me,Fe,te.data);else if(y.isFramebufferTexture){if(ze)if($e)t.texStorage2D(i.TEXTURE_2D,ye,be,te.width,te.height);else{let ee=te.width,_e=te.height;for(let Te=0;Te<ye;Te++)t.texImage2D(i.TEXTURE_2D,Te,be,ee,_e,0,me,Fe,null),ee>>=1,_e>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),u.add(y),ee.onpaint=_e=>{let Te=_e.changedElements;for(let ie of u)Te.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let Te=i.RGBA,ie=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,ie,Ce,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if($e&&ze){let ee=et(Oe[0]);t.texStorage2D(i.TEXTURE_2D,ye,be,ee.width,ee.height)}for(let ee=0,_e=Oe.length;ee<_e;ee++)ge=Oe[ee],$e?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,me,Fe,ge):t.texImage2D(i.TEXTURE_2D,ee,be,me,Fe,ge);y.generateMipmaps=!1}else if($e){if(ze){let ee=et(te);t.texStorage2D(i.TEXTURE_2D,ye,be,ee.width,ee.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Fe,te)}else t.texImage2D(i.TEXTURE_2D,0,be,me,Fe,te);m(y)&&M(V),ue.__version=fe.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function De(E,y,P){if(y.image.length!==6)return;let V=re(E,y),W=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+P);let fe=n.get(W);if(W.version!==fe.__version||V===!0){t.activeTexture(i.TEXTURE0+P);let ue=nt.getPrimaries(nt.workingColorSpace),Z=y.colorSpace===Zn?null:nt.getPrimaries(y.colorSpace),te=y.colorSpace===Zn||ue===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let me=y.isCompressedTexture||y.image[0].isCompressedTexture,Fe=y.image[0]&&y.image[0].isDataTexture,be=[];for(let ie=0;ie<6;ie++)!me&&!Fe?be[ie]=p(y.image[ie],!0,s.maxCubemapSize):be[ie]=Fe?y.image[ie].image:y.image[ie],be[ie]=rt(y,be[ie]);let ge=be[0],Oe=r.convert(y.format,y.colorSpace),$e=r.convert(y.type),ze=b(y.internalFormat,Oe,$e,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,ye=fe.__version===void 0||V===!0,ee=W.dataReady,_e=T(y,ge);we(i.TEXTURE_CUBE_MAP,y);let Te;if(me){F&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,ze,ge.width,ge.height);for(let ie=0;ie<6;ie++){Te=be[ie].mipmaps;for(let Ce=0;Ce<Te.length;Ce++){let Be=Te[Ce];y.format!==dn?Oe!==null?F?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Be.width,Be.height,Oe,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,ze,Be.width,Be.height,0,Be.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Be.width,Be.height,Oe,$e,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,ze,Be.width,Be.height,0,Oe,$e,Be.data)}}}else{if(Te=y.mipmaps,F&&ye){Te.length>0&&_e++;let ie=et(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Fe){F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be[ie].width,be[ie].height,Oe,$e,be[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,be[ie].width,be[ie].height,0,Oe,$e,be[ie].data);for(let Ce=0;Ce<Te.length;Ce++){let pt=Te[Ce].image[ie].image;F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,pt.width,pt.height,Oe,$e,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,ze,pt.width,pt.height,0,Oe,$e,pt.data)}}else{F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe,$e,be[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,Oe,$e,be[ie]);for(let Ce=0;Ce<Te.length;Ce++){let Be=Te[Ce];F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Oe,$e,Be.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,ze,Oe,$e,Be.image[ie])}}}m(y)&&M(i.TEXTURE_CUBE_MAP),fe.__version=W.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function xe(E,y,P,V,W,fe){let ue=r.convert(P.format,P.colorSpace),Z=r.convert(P.type),te=b(P.internalFormat,ue,Z,P.normalized,P.colorSpace),me=n.get(y),Fe=n.get(P);if(Fe.__renderTarget=y,!me.__hasExternalTextures){let be=Math.max(1,y.width>>fe),ge=Math.max(1,y.height>>fe);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,fe,te,be,ge,y.depth,0,ue,Z,null):t.texImage2D(W,fe,te,be,ge,0,ue,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,W,Fe.__webglTexture,0,ke(y)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,W,Fe.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(E,y,P){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let V=y.depthTexture,W=V&&V.isDepthTexture?V.type:null,fe=v(y.stencilBuffer,W),ue=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(y),fe,y.width,y.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(y),fe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,fe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,E)}else{let V=y.textures;for(let W=0;W<V.length;W++){let fe=V[W],ue=r.convert(fe.format,fe.colorSpace),Z=r.convert(fe.type),te=b(fe.internalFormat,ue,Z,fe.normalized,fe.colorSpace);Xe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(y),te,y.width,y.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(y),te,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,te,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(E,y,P){let V=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(y.depthTexture);if(W.__renderTarget=y,(!W.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(W.__webglInit===void 0&&(W.__webglInit=!0,y.depthTexture.addEventListener("dispose",D)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),we(i.TEXTURE_CUBE_MAP,y.depthTexture);let me=r.convert(y.depthTexture.format),Fe=r.convert(y.depthTexture.type),be;y.depthTexture.format===An?be=i.DEPTH_COMPONENT24:y.depthTexture.format===_i&&(be=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,be,y.width,y.height,0,me,Fe,null)}}else ne(y.depthTexture,0);let fe=W.__webglTexture,ue=ke(y),Z=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+P:i.TEXTURE_2D,te=y.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===An)Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,fe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,fe,0);else if(y.depthTexture.format===_i)Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,fe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(E){let y=n.get(E),P=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let V=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){let W=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",W)};V.addEventListener("dispose",W),y.__depthDisposeCallback=W}y.__boundDepthTexture=V}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(P)for(let V=0;V<6;V++)it(y.__webglFramebuffer[V],E,V);else{let V=E.texture.mipmaps;V&&V.length>0?it(y.__webglFramebuffer[0],E,0):it(y.__webglFramebuffer,E,0)}else if(P){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=i.createRenderbuffer(),He(y.__webglDepthbuffer[V],E,!1);else{let W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=y.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,fe)}}else{let V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),He(y.__webglDepthbuffer,E,!1);else{let W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(E,y,P){let V=n.get(E);y!==void 0&&xe(V.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&K(E)}function le(E){let y=E.texture,P=n.get(E),V=n.get(y);E.addEventListener("dispose",_);let W=E.textures,fe=E.isWebGLCubeRenderTarget===!0,ue=W.length>1;if(ue||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=y.version,a.memory.textures++),fe){P.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer[Z]=[];for(let te=0;te<y.mipmaps.length;te++)P.__webglFramebuffer[Z][te]=i.createFramebuffer()}else P.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)P.__webglFramebuffer[Z]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ue)for(let Z=0,te=W.length;Z<te;Z++){let me=n.get(W[Z]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Xe(E)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Z=0;Z<W.length;Z++){let te=W[Z];P.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[Z]);let me=r.convert(te.format,te.colorSpace),Fe=r.convert(te.type),be=b(te.internalFormat,me,Fe,te.normalized,te.colorSpace,E.isXRRenderTarget===!0),ge=ke(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,be,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,P.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),He(P.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),we(i.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)xe(P.__webglFramebuffer[Z][te],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else xe(P.__webglFramebuffer[Z],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(y)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let Z=0,te=W.length;Z<te;Z++){let me=W[Z],Fe=n.get(me),be=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(be=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Fe.__webglTexture),we(be,me),xe(P.__webglFramebuffer,E,me,i.COLOR_ATTACHMENT0+Z,be,0),m(me)&&M(be)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,V.__webglTexture),we(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)xe(P.__webglFramebuffer[te],E,y,i.COLOR_ATTACHMENT0,Z,te);else xe(P.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,Z,0);m(y)&&M(Z),t.unbindTexture()}E.depthBuffer&&K(E)}function ce(E){let y=E.textures;for(let P=0,V=y.length;P<V;P++){let W=y[P];if(m(W)){let fe=R(E),ue=n.get(W).__webglTexture;t.bindTexture(fe,ue),M(fe),t.unbindTexture()}}}let pe=[],Ue=[];function Pe(E){if(E.samples>0){if(Xe(E)===!1){let y=E.textures,P=E.width,V=E.height,W=i.COLOR_BUFFER_BIT,fe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(E),Z=y.length>1;if(Z)for(let me=0;me<y.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let te=E.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let me=0;me<y.length;me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let Fe=n.get(y[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,P,V,0,0,P,V,W,i.NEAREST),l===!0&&(pe.length=0,Ue.length=0,pe.push(i.COLOR_ATTACHMENT0+me),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(pe.push(fe),Ue.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let me=0;me<y.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let Fe=n.get(y[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ke(E){return Math.min(s.maxSamples,E.samples)}function Xe(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function A(E){let y=a.render.frame;d.get(E)!==y&&(d.set(E,y),E.update())}function rt(E,y){let P=E.colorSpace,V=E.format,W=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||P!==Qs&&P!==Zn&&(nt.getTransfer(P)===lt?(V!==dn||W!==Xt)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",P)),y}function et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=J,this.getTextureUnits=w,this.setTextureUnits=H,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=C,this.rebindTextures=se,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xy(i,e){function t(n,s=Zn){let r,a=nt.getTransfer(s);if(n===Xt)return i.UNSIGNED_BYTE;if(n===ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===rc)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===lc)return i.ALPHA;if(n===cc)return i.RGB;if(n===dn)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===lo)return i.RED;if(n===co)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===fo)return i.RGBA_INTEGER;if(n===Rr||n===Dr||n===Ar||n===Ir)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===po||n===mo||n===go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===_o||n===xo||n===bo||n===So||n===wr||n===vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===_o)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bo)return r.COMPRESSED_R11_EAC;if(n===So)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wr)return r.COMPRESSED_RG11_EAC;if(n===vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eo||n===Mo||n===To||n===Lo||n===Ro||n===Do||n===Ao||n===Io||n===wo||n===Bo||n===No||n===Fo||n===Oo||n===Co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===qo||n===Ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===$o||n===Br||n===Jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
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

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rn({vertexShader:zy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends _n{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null,S=typeof XRWebGLBinding<"u",p=new Bc,m={},M=t.getContextAttributes(),R=null,b=null,v=[],T=[],D=new he,_=null,L=null,I=new wt;I.viewport=new _t;let O=new wt;O.viewport=new _t;let G=[I,O],J=new eo,w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let k=v[q];return k===void 0&&(k=new fs,v[q]=k),k.getTargetRaySpace()},this.getControllerGrip=function(q){let k=v[q];return k===void 0&&(k=new fs,v[q]=k),k.getGripSpace()},this.getHand=function(q){let k=v[q];return k===void 0&&(k=new fs,v[q]=k),k.getHandSpace()};function z(q){let k=T.indexOf(q.inputSource);if(k===-1)return;let oe=v[k];oe!==void 0&&(oe.update(q.inputSource,q.frame,c||a),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<v.length;q++){let k=T[q];k!==null&&(T[q]=null,v[q].disconnect(k))}w=null,H=null,p.reset();for(let q in m)delete m[q];if(e.setRenderTarget(R),f=null,h=null,u=null,s=null,b=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(D.width,D.height,!1),L!==null){let q=L.camera;q.fov=L.fov,q.zoom=L.zoom,q.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(D),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,De=null,xe=null;M.depth&&(xe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=M.stencil?_i:An,De=M.stencil?Ts:bn);let He={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(He),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Vt(h.textureWidth,h.textureHeight,{format:dn,type:Xt,depthTexture:new li(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Vt(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ne(q){for(let k=0;k<q.removed.length;k++){let oe=q.removed[k],De=T.indexOf(oe);De>=0&&(T[De]=null,v[De].disconnect(oe))}for(let k=0;k<q.added.length;k++){let oe=q.added[k],De=T.indexOf(oe);if(De===-1){for(let He=0;He<v.length;He++)if(He>=T.length){T.push(oe),De=He;break}else if(T[He]===null){T[He]=oe,De=He;break}if(De===-1)break}let xe=v[De];xe&&xe.connect(oe)}}let X=new N,j=new N;function C(q,k,oe){X.setFromMatrixPosition(k.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);let De=X.distanceTo(j),xe=k.projectionMatrix.elements,He=oe.projectionMatrix.elements,it=xe[14]/(xe[10]-1),K=xe[14]/(xe[10]+1),se=(xe[9]+1)/xe[5],le=(xe[9]-1)/xe[5],ce=(xe[8]-1)/xe[0],pe=(He[8]+1)/He[0],Ue=it*ce,Pe=it*pe,ke=De/(-ce+pe),Xe=ke*-ce;if(k.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xe),q.translateZ(ke),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xe[10]===-1)q.projectionMatrix.copy(k.projectionMatrix),q.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let A=it+ke,rt=K+ke,et=Ue-Xe,E=Pe+(De-Xe),y=se*K/rt*A,P=le*K/rt*A;q.projectionMatrix.makePerspective(et,E,y,P,A,rt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,k){k===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(k.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let k=q.near,oe=q.far;p.texture!==null&&(p.depthNear>0&&(k=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),J.near=O.near=I.near=k,J.far=O.far=I.far=oe,(w!==J.near||H!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),w=J.near,H=J.far),J.layers.mask=q.layers.mask|6,I.layers.mask=J.layers.mask&-5,O.layers.mask=J.layers.mask&-3;let De=q.parent,xe=J.cameras;ae(J,De);for(let He=0;He<xe.length;He++)ae(xe[He],De);xe.length===2?C(J,I,O):J.projectionMatrix.copy(I.projectionMatrix),L===null&&q.isPerspectiveCamera&&(L={camera:q,fov:q.fov,zoom:q.zoom}),de(q,J,De)};function de(q,k,oe){oe===null?q.matrix.copy(k.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(k.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(k.projectionMatrix),q.projectionMatrixInverse.copy(k.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=hs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(J)},this.getCameraTexture=function(q){return m[q]};let Ve=null;function we(q,k){if(d=k.getViewerPose(c||a),g=k,d!==null){let oe=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let De=!1;oe.length!==J.cameras.length&&(J.cameras.length=0,De=!0);for(let K=0;K<oe.length;K++){let se=oe[K],le=null;if(f!==null)le=f.getViewport(se);else{let pe=u.getViewSubImage(h,se);le=pe.viewport,K===0&&(e.setRenderTargetTextures(b,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(b))}let ce=G[K];ce===void 0&&(ce=new wt,ce.layers.enable(K),ce.viewport=new _t,G[K]=ce),ce.matrix.fromArray(se.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(se.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),K===0&&(J.matrix.copy(ce.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),De===!0&&J.cameras.push(ce)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();let K=u.getDepthInformation(oe[0]);K&&K.isValid&&K.texture&&p.init(K,s.renderState)}if(xe&&xe.includes("camera-access")&&S){e.state.unbindTexture(),u=n.getBinding();for(let K=0;K<oe.length;K++){let se=oe[K].camera;if(se){let le=m[se];le||(le=new sr,m[se]=le);let ce=u.getCameraImage(se);le.sourceTexture=ce}}}}for(let oe=0;oe<v.length;oe++){let De=T[oe],xe=v[oe];De!==null&&xe!==void 0&&xe.update(De,k,c||a)}Ve&&Ve(q,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let re=new nf;re.setAnimationLoop(we),this.setAnimationLoop=function(q){Ve=q},this.dispose=function(){}}},Zy=new dt,cf=new Ye;cf.set(-1,0,0,0,1,0,0,0,1);function jy(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,mc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,R,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),d(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),S(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,R):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Nt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Nt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),R=M.envMap,b=M.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(cf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=R*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ky(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let T=v.program;n.uniformBlockBinding(b,T)}function c(b,v){let T=s[b.id];T===void 0&&(p(b),T=d(b),s[b.id]=T,b.addEventListener("dispose",M));let D=v.program;n.updateUBOMapping(b,D);let _=e.render.frame;r[b.id]!==_&&(h(b),r[b.id]=_)}function d(b){let v=u();b.__bindingPointIndex=v;let T=i.createBuffer(),D=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,D,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,T),T}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let v=s[b.id],T=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let _=0,L=T.length;_<L;_++){let I=T[_];if(Array.isArray(I))for(let O=0,G=I.length;O<G;O++)f(I[O],_,O,D);else f(I,_,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,v,T,D){if(S(b,v,T,D)===!0){let _=b.__offset,L=b.value;if(Array.isArray(L)){let I=0;for(let O=0;O<L.length;O++){let G=L[O],J=m(G);g(G,b.__data,I),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(L,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function g(b,v,T){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,T)}function S(b,v,T,D){let _=b.value,L=v+"_"+T;if(D[L]===void 0)return typeof _=="number"||typeof _=="boolean"?D[L]=_:ArrayBuffer.isView(_)?D[L]=_.slice():D[L]=_.clone(),!0;{let I=D[L];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return D[L]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function p(b){let v=b.uniforms,T=0,D=16;for(let L=0,I=v.length;L<I;L++){let O=Array.isArray(v[L])?v[L]:[v[L]];for(let G=0,J=O.length;G<J;G++){let w=O[G],H=Array.isArray(w.value)?w.value:[w.value];for(let z=0,Y=H.length;z<Y;z++){let ne=H[z],X=m(ne),j=T%D,C=j%X.boundary,ae=j+C;T+=C,ae!==0&&D-ae<X.storage&&(T+=D-ae),w.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=T,T+=X.storage}}}let _=T%D;return _>0&&(T+=D-_),b.__size=T,b.__cache={},this}function m(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",b),v}function M(b){let v=b.target;v.removeEventListener("dispose",M);let T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function R(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var e_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function t_(){return Fn===null&&(Fn=new Ks(e_,16,16,xi,Sn),Fn.name="DFG_LUT",Fn.minFilter=Bt,Fn.magFilter=Bt,Fn.wrapS=Rn,Fn.wrapT=Rn,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var Xo=class{constructor(e={}){let{canvas:t=Ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Xt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let S=f,p=new Set([fo,ho,co]),m=new Set([Xt,bn,Ms,Ts,ao,oo]),M=new Uint32Array(4),R=new Int32Array(4),b=new N,v=null,T=null,D=[],_=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,O=!1,G=null,J=null,w=null,H=null;this._outputColorSpace=It;let z=0,Y=0,ne=null,X=-1,j=null,C=new _t,ae=new _t,de=null,Ve=new Qe(0),we=0,re=t.width,q=t.height,k=1,oe=null,De=null,xe=new _t(0,0,re,q),He=new _t(0,0,re,q),it=!1,K=new us,se=!1,le=!1,ce=new dt,pe=new N,Ue=new _t,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Xe(){return ne===null?k:1}let A=n;function rt(x,B){return t.getContext(x,B)}let et,E,y,P,V,W,fe,ue,Z,te,me,Fe,be,ge,Oe,$e,ze,F,ye,ee,_e,Te,ie;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",un,!1),A===null){let B="webgl2";if(A=rt(B,x),A===null)throw rt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(x){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",un,!1),Je("WebGLRenderer: "+x.message),x}function Ce(){et=new l0(A),et.init(),_e=new Xy(A,et),E=new jg(A,et,e,_e),y=new Qy(A,et),E.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),J=A.createFramebuffer(),w=A.createFramebuffer(),H=A.createFramebuffer(),P=new d0(A),V=new By,W=new Yy(A,et,y,V,E,_e,P),fe=new o0(I),ue=new up(A),Te=new Wg(A,ue),Z=new c0(A,ue,P,Te),te=new u0(A,Z,ue,Te,P),F=new f0(A,E,W),Oe=new Kg(V),me=new wy(I,fe,et,E,Te,Oe),Fe=new jy(I,V),be=new Fy,ge=new Uy(et),ze=new zg(I,fe,y,te,g,l),$e=new Vy(I,te,E),ie=new Ky(A,P,E,y),ye=new Zg(A,et,P),ee=new h0(A,et,P),P.programs=me.programs,I.capabilities=E,I.extensions=et,I.properties=V,I.renderLists=be,I.shadowMap=$e,I.state=y,I.info=P}S!==Xt&&(L=new m0(S,t.width,t.height,o,s,r));let Be=new Nc(I,A);this.xr=Be,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let x=et.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=et.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(re,q,!1))},this.getSize=function(x){return x.set(re,q)},this.setSize=function(x,B,Q=!0){if(Be.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}re=x,q=B,t.width=Math.floor(x*k),t.height=Math.floor(B*k),Q===!0&&(t.style.width=x+"px",t.style.height=B+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,x,B)},this.getDrawingBufferSize=function(x){return x.set(re*k,q*k).floor()},this.setDrawingBufferSize=function(x,B,Q){re=x,q=B,k=Q,t.width=Math.floor(x*Q),t.height=Math.floor(B*Q),this.setViewport(0,0,x,B)},this.setEffects=function(x){if(S===Xt){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let B=0;B<x.length;B++)if(x[B].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(xe)},this.setViewport=function(x,B,Q,U){x.isVector4?xe.set(x.x,x.y,x.z,x.w):xe.set(x,B,Q,U),y.viewport(C.copy(xe).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(He)},this.setScissor=function(x,B,Q,U){x.isVector4?He.set(x.x,x.y,x.z,x.w):He.set(x,B,Q,U),y.scissor(ae.copy(He).multiplyScalar(k).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(x){y.setScissorTest(it=x)},this.setOpaqueSort=function(x){oe=x},this.setTransparentSort=function(x){De=x},this.getClearColor=function(x){return x.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(x=!0,B=!0,Q=!0){let U=0;if(x){let $=!1;if(ne!==null){let Ee=ne.texture.format;$=p.has(Ee)}if($){let Ee=ne.texture.type,Re=m.has(Ee),ve=ze.getClearColor(),Ae=ze.getClearAlpha(),Ne=ve.r,je=ve.g,tt=ve.b;Re?(M[0]=Ne,M[1]=je,M[2]=tt,M[3]=Ae,A.clearBufferuiv(A.COLOR,0,M)):(R[0]=Ne,R[1]=je,R[2]=tt,R[3]=Ae,A.clearBufferiv(A.COLOR,0,R))}else U|=A.COLOR_BUFFER_BIT}B&&(U|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(U|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&A.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),G=x},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",un,!1),ze.dispose(),be.dispose(),ge.dispose(),V.dispose(),fe.dispose(),te.dispose(),Te.dispose(),ie.dispose(),me.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",eh),Be.removeEventListener("sessionend",th),Ei.stop()};function pt(x){x.preventDefault(),dc("WebGLRenderer: Context Lost."),O=!0}function at(){dc("WebGLRenderer: Context Restored."),O=!1;let x=P.autoReset,B=$e.enabled,Q=$e.autoUpdate,U=$e.needsUpdate,$=$e.type;Ce(),P.autoReset=x,$e.enabled=B,$e.autoUpdate=Q,$e.needsUpdate=U,$e.type=$}function un(x){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Mn(x){let B=x.target;B.removeEventListener("dispose",Mn),Cf(B)}function Cf(x){Pf(x),V.remove(x)}function Pf(x){let B=V.get(x).programs;B!==void 0&&(B.forEach(function(Q){me.releaseProgram(Q)}),x.isShaderMaterial&&me.releaseShaderCache(x))}this.renderBufferDirect=function(x,B,Q,U,$,Ee){B===null&&(B=Pe);let Re=$.isMesh&&$.matrixWorld.determinantAffine()<0,ve=Uf(x,B,Q,U,$);y.setMaterial(U,Re);let Ae=Q.index,Ne=1;if(U.wireframe===!0){if(Ae=Z.getWireframeAttribute(Q),Ae===void 0)return;Ne=2}let je=Q.drawRange,tt=Q.attributes.position,Ie=je.start*Ne,ot=(je.start+je.count)*Ne;Ee!==null&&(Ie=Math.max(Ie,Ee.start*Ne),ot=Math.min(ot,(Ee.start+Ee.count)*Ne)),Ae!==null?(Ie=Math.max(Ie,0),ot=Math.min(ot,Ae.count)):tt!=null&&(Ie=Math.max(Ie,0),ot=Math.min(ot,tt.count));let St=ot-Ie;if(St<0||St===1/0)return;Te.setup($,U,ve,Q,Ae);let gt,ft=ye;if(Ae!==null&&(gt=ue.get(Ae),ft=ee,ft.setIndex(gt)),$.isMesh)U.wireframe===!0?(y.setLineWidth(U.wireframeLinewidth*Xe()),ft.setMode(A.LINES)):ft.setMode(A.TRIANGLES);else if($.isLine){let Ft=U.linewidth;Ft===void 0&&(Ft=1),y.setLineWidth(Ft*Xe()),$.isLineSegments?ft.setMode(A.LINES):$.isLineLoop?ft.setMode(A.LINE_LOOP):ft.setMode(A.LINE_STRIP)}else $.isPoints?ft.setMode(A.POINTS):$.isSprite&&ft.setMode(A.TRIANGLES);if($.isBatchedMesh)if(et.get("WEBGL_multi_draw"))ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ft=$._multiDrawStarts,Le=$._multiDrawCounts,qt=$._multiDrawCount,st=Ae?ue.get(Ae).bytesPerElement:1,ln=V.get(U).currentProgram.getUniforms();for(let Tn=0;Tn<qt;Tn++)ln.setValue(A,"_gl_DrawID",Tn),ft.render(Ft[Tn]/st,Le[Tn])}else if($.isInstancedMesh)ft.renderInstances(Ie,St,$.count);else if(Q.isInstancedBufferGeometry){let Ft=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Le=Math.min(Q.instanceCount,Ft);ft.renderInstances(Ie,St,Le)}else ft.render(Ie,St)};function Kc(x,B,Q,U){G!==null&&x.isNodeMaterial&&G.setObject(U,x),se===!0&&Oe.setState(x,Q,!1),x.transparent===!0&&x.side===Yt&&x.forceSinglePass===!1?(x.side=Nt,x.needsUpdate=!0,Jr(x,B,U),x.side=mi,x.needsUpdate=!0,Jr(x,B,U),x.side=Yt):Jr(x,B,U)}this.compile=function(x,B,Q=null){Q===null&&(Q=x),G!==null&&G.renderStart(x,B,Q),T=ge.get(Q),T.init(B),_.push(T),Q.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),x!==Q&&x.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),le=this.localClippingEnabled,se=Oe.init(this.clippingPlanes,le),se===!0&&Oe.setGlobalState(this.clippingPlanes,B),G!==null&&$e.render(T.state.shadowsArray,Q,B);let U=new Set;return x.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){let ve=Ee[Re];Kc(ve,Q,B,$),U.add(ve)}else Kc(Ee,Q,B,$),U.add(Ee)}),T=_.pop(),G!==null&&G.renderEnd(),U},this.compileAsync=function(x,B,Q=null){let U=this.compile(x,B,Q);return new Promise($=>{function Ee(){if(U.forEach(function(Re){let Ae=V.get(Re).currentProgram;(Ae===void 0||Ae.isReady())&&U.delete(Re)}),U.size===0){$(x);return}setTimeout(Ee,10)}et.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let rl=null;function qf(x){rl&&rl(x)}function eh(){Ei.stop()}function th(){Ei.start()}let Ei=new nf;Ei.setAnimationLoop(qf),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(x){rl=x,Be.setAnimationLoop(x),x===null?Ei.stop():Ei.start()},Be.addEventListener("sessionstart",eh),Be.addEventListener("sessionend",th),this.render=function(x,B){if(B!==void 0&&B.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;G!==null&&G.renderStart(x,B);let Q=Be.enabled===!0&&Be.isPresenting===!0,U=L!==null&&(ne===null||Q)&&L.begin(I,ne);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(B),B=Be.getCamera()),x.isScene===!0&&x.onBeforeRender(I,x,B,ne),T=ge.get(x,_.length),T.init(B),T.state.textureUnits=W.getTextureUnits(),_.push(T),ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(ce,yn,B.reversedDepth),le=this.localClippingEnabled,se=Oe.init(this.clippingPlanes,le),v=be.get(x,D.length),v.init(),D.push(v),Be.enabled===!0&&Be.isPresenting===!0){let Re=I.xr.getDepthSensingMesh();Re!==null&&al(Re,B,-1/0,I.sortObjects)}al(x,B,0,I.sortObjects),v.finish(),G!==null&&G.updateLights(T.state.lightsArray),I.sortObjects===!0&&v.sort(oe,De),ke=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,ke&&ze.addToRenderList(v,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Oe.beginShadows();let $=T.state.shadowsArray;if($e.render($,x,B),se===!0&&Oe.endShadows(),(U&&L.hasRenderPass())===!1){let Re=v.opaque,ve=v.transmissive;if(T.setupLights(),B.isArrayCamera){let Ae=B.cameras;if(ve.length>0)for(let Ne=0,je=Ae.length;Ne<je;Ne++){let tt=Ae[Ne];ih(Re,ve,x,tt)}ke&&ze.render(x);for(let Ne=0,je=Ae.length;Ne<je;Ne++){let tt=Ae[Ne];nh(v,x,tt,tt.viewport)}}else ve.length>0&&ih(Re,ve,x,B),ke&&ze.render(x),nh(v,x,B)}ne!==null&&Y===0&&(W.updateMultisampleRenderTarget(ne),W.updateRenderTargetMipmap(ne)),U&&L.end(I),x.isScene===!0&&x.onAfterRender(I,x,B),Te.resetDefaultState(),X=-1,j=null,_.pop(),_.length>0?(T=_[_.length-1],W.setTextureUnits(T.state.textureUnits),se===!0&&Oe.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?v=D[D.length-1]:v=null,G!==null&&G.renderEnd()};function al(x,B,Q,U){if(x.visible===!1)return;if(x.layers.test(B.layers)){if(x.isGroup)Q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(B);else if(x.isLightProbeGrid)T.pushLightProbeGrid(x);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(K)){U&&Ue.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ce);let Re=te.update(x),ve=x.material;ve.visible&&v.push(x,Re,ve,Q,Ue.z,null,B)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(K))){let Re=te.update(x),ve=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ue.copy(x.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ue.copy(Re.boundingSphere.center)),Ue.applyMatrix4(x.matrixWorld).applyMatrix4(ce)),Array.isArray(ve)){let Ae=Re.groups;for(let Ne=0,je=Ae.length;Ne<je;Ne++){let tt=Ae[Ne],Ie=ve[tt.materialIndex];Ie&&Ie.visible&&v.push(x,Re,Ie,Q,Ue.z,tt,B)}}else ve.visible&&v.push(x,Re,ve,Q,Ue.z,null,B)}}let Ee=x.children;for(let Re=0,ve=Ee.length;Re<ve;Re++)al(Ee[Re],B,Q,U)}function nh(x,B,Q,U){let{opaque:$,transmissive:Ee,transparent:Re}=x;T.setupLightsView(Q),se===!0&&Oe.setGlobalState(I.clippingPlanes,Q),U&&y.viewport(C.copy(U)),$.length>0&&$r($,B,Q),Ee.length>0&&$r(Ee,B,Q),Re.length>0&&$r(Re,B,Q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ih(x,B,Q,U){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[U.id]===void 0){let Ie=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[U.id]=new Vt(1,1,{generateMipmaps:!0,type:Ie?Sn:Xt,minFilter:yi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Ee=T.state.transmissionRenderTarget[U.id],Re=U.viewport||C;Ee.setSize(Re.z*I.transmissionResolutionScale,Re.w*I.transmissionResolutionScale);let ve=I.getRenderTarget(),Ae=I.getActiveCubeFace(),Ne=I.getActiveMipmapLevel();I.setRenderTarget(Ee),I.getClearColor(Ve),we=I.getClearAlpha(),we<1&&I.setClearColor(16777215,.5),I.clear(),ke&&ze.render(Q);let je=I.toneMapping;I.toneMapping=xn;let tt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),T.setupLightsView(U),se===!0&&Oe.setGlobalState(I.clippingPlanes,U),$r(x,Q,U),W.updateMultisampleRenderTarget(Ee),W.updateRenderTargetMipmap(Ee),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ot=0,St=B.length;ot<St;ot++){let gt=B[ot],{object:ft,geometry:Ft,material:Le,group:qt}=gt;if(Le.side===Yt&&ft.layers.test(U.layers)){let st=Le.side;Le.side=Nt,Le.needsUpdate=!0,sh(ft,Q,U,Ft,Le,qt),Le.side=st,Le.needsUpdate=!0,Ie=!0}}Ie===!0&&(W.updateMultisampleRenderTarget(Ee),W.updateRenderTargetMipmap(Ee))}I.setRenderTarget(ve,Ae,Ne),I.setClearColor(Ve,we),tt!==void 0&&(U.viewport=tt),I.toneMapping=je}function $r(x,B,Q){let U=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Ee=x.length;$<Ee;$++){let Re=x[$],{object:ve,geometry:Ae,group:Ne}=Re,je=Re.material;je.allowOverride===!0&&U!==null&&(je=U),ve.layers.test(Q.layers)&&sh(ve,B,Q,Ae,je,Ne)}}function sh(x,B,Q,U,$,Ee){G!==null&&$.isNodeMaterial&&G.setObject(x,$),x.onBeforeRender(I,B,Q,U,$,Ee),x.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),$.onBeforeRender(I,B,Q,U,x,Ee),$.transparent===!0&&$.side===Yt&&$.forceSinglePass===!1?($.side=Nt,$.needsUpdate=!0,I.renderBufferDirect(Q,B,U,$,x,Ee),$.side=mi,$.needsUpdate=!0,I.renderBufferDirect(Q,B,U,$,x,Ee),$.side=Yt):I.renderBufferDirect(Q,B,U,$,x,Ee),x.onAfterRender(I,B,Q,U,$,Ee)}function Jr(x,B,Q){B.isScene!==!0&&(B=Pe);let U=V.get(x),$=T.state.lights,Ee=T.state.shadowsArray,Re=$.state.version,ve=me.getParameters(x,$.state,Ee,B,Q,T.state.lightProbeGridArray),Ae=me.getProgramCacheKey(ve),Ne=U.programs;U.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,U.fog=B.fog;let je=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;U.envMap=fe.get(x.envMap||U.environment,je),U.envMapRotation=U.environment!==null&&x.envMap===null?B.environmentRotation:x.envMapRotation,Ne===void 0&&(x.addEventListener("dispose",Mn),Ne=new Map,U.programs=Ne);let tt=Ne.get(Ae);if(tt!==void 0){if(U.currentProgram===tt&&U.lightsStateVersion===Re)return ah(x,ve),tt}else ve.uniforms=me.getUniforms(x),G!==null&&x.isNodeMaterial&&G.build(x,Q,ve),x.onBeforeCompile(ve,I),tt=me.acquireProgram(ve,Ae),Ne.set(Ae,tt),U.uniforms=ve.uniforms;let Ie=U.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ie.clippingPlanes=Oe.uniform),ah(x,ve),U.needsLights=Jf(x),U.lightsStateVersion=Re,U.needsLights&&(Ie.ambientLightColor.value=$.state.ambient,Ie.lightProbe.value=$.state.probe,Ie.sunLights.value=$.state.sun,Ie.sunLightShadows.value=$.state.sunShadow,Ie.directionalLights.value=$.state.directional,Ie.directionalLightShadows.value=$.state.directionalShadow,Ie.spotLights.value=$.state.spot,Ie.spotLightShadows.value=$.state.spotShadow,Ie.rectAreaLights.value=$.state.rectArea,Ie.ltc_1.value=$.state.rectAreaLTC1,Ie.ltc_2.value=$.state.rectAreaLTC2,Ie.pointLights.value=$.state.point,Ie.pointLightShadows.value=$.state.pointShadow,Ie.hemisphereLights.value=$.state.hemi,Ie.sunShadowMatrix.value=$.state.sunShadowMatrix,Ie.sunShadowCascade.value=$.state.sunShadowCascade,Ie.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ie.spotLightMatrix.value=$.state.spotLightMatrix,Ie.spotLightMap.value=$.state.spotLightMap,Ie.pointShadowMatrix.value=$.state.pointShadowMatrix),U.lightProbeGrid=T.state.lightProbeGridArray.length>0,U.currentProgram=tt,U.uniformsList=null,tt}function rh(x){if(x.uniformsList===null){let B=x.currentProgram.getUniforms();x.uniformsList=Ds.seqWithValue(B.seq,x.uniforms)}return x.uniformsList}function ah(x,B){let Q=V.get(x);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function Hf(x,B){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;b.setFromMatrixPosition(B.matrixWorld);for(let Q=0,U=x.length;Q<U;Q++){let $=x[Q];if($.texture!==null&&$.boundingBox.containsPoint(b))return $}return null}function Uf(x,B,Q,U,$){B.isScene!==!0&&(B=Pe),W.resetTextureUnits();let Ee=B.fog,Re=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?B.environment:null,ve=ne===null?I.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,Ae=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Ne=fe.get(U.envMap||Re,Ae),je=U.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,tt=!!Q.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ie=!!Q.morphAttributes.position,ot=!!Q.morphAttributes.normal,St=!!Q.morphAttributes.color,gt=xn;U.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(gt=I.toneMapping);let ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ft=ft!==void 0?ft.length:0,Le=V.get(U),qt=T.state.lights;if(se===!0&&(le===!0||x!==j)){let mt=x===j&&U.id===X;Oe.setState(U,x,mt)}let st=!1;U.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==qt.state.version||Le.outputColorSpace!==ve||$.isBatchedMesh&&Le.batching===!1||!$.isBatchedMesh&&Le.batching===!0||$.isBatchedMesh&&Le.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Le.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Le.instancing===!1||!$.isInstancedMesh&&Le.instancing===!0||$.isSkinnedMesh&&Le.skinning===!1||!$.isSkinnedMesh&&Le.skinning===!0||$.isInstancedMesh&&Le.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Le.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Le.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Le.instancingMorph===!1&&$.morphTexture!==null||Le.envMap!==Ne||U.fog===!0&&Le.fog!==Ee||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Oe.numPlanes||Le.numIntersection!==Oe.numIntersection)||Le.vertexAlphas!==je||Le.vertexTangents!==tt||Le.morphTargets!==Ie||Le.morphNormals!==ot||Le.morphColors!==St||Le.toneMapping!==gt||Le.morphTargetsCount!==Ft||!!Le.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Le.__version=U.version);let ln=Le.currentProgram;st===!0&&(ln=Jr(U,B,$),G&&U.isNodeMaterial&&G.onUpdateProgram(U,ln,Le));let Tn=!1,ei=!1,$i=!1,ht=ln.getUniforms(),bt=Le.uniforms;if(y.useProgram(ln.program)&&(Tn=!0,ei=!0,$i=!0),U.id!==X&&(X=U.id,ei=!0),Le.needsLights){let mt=Hf(T.state.lightProbeGridArray,$);Le.lightProbeGrid!==mt&&(Le.lightProbeGrid=mt,ei=!0)}if(Tn||j!==x){y.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ht.setValue(A,"projectionMatrix",x.projectionMatrix),ht.setValue(A,"viewMatrix",x.matrixWorldInverse);let ni=ht.map.cameraPosition;ni!==void 0&&ni.setValue(A,pe.setFromMatrixPosition(x.matrixWorld)),E.logarithmicDepthBuffer&&ht.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ht.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),j!==x&&(j=x,ei=!0,$i=!0)}if(Le.needsLights&&(qt.state.sunShadowMap.length>0&&ht.setValue(A,"sunShadowMap",qt.state.sunShadowMap,W),qt.state.directionalShadowMap.length>0&&ht.setValue(A,"directionalShadowMap",qt.state.directionalShadowMap,W),qt.state.spotShadowMap.length>0&&ht.setValue(A,"spotShadowMap",qt.state.spotShadowMap,W),qt.state.pointShadowMap.length>0&&ht.setValue(A,"pointShadowMap",qt.state.pointShadowMap,W)),$.isSkinnedMesh){ht.setOptional(A,$,"bindMatrix"),ht.setOptional(A,$,"bindMatrixInverse");let mt=$.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(A,"boneTexture",mt.boneTexture,W))}$.isBatchedMesh&&(ht.setOptional(A,$,"batchingTexture"),ht.setValue(A,"batchingTexture",$._matricesTexture,W),ht.setOptional(A,$,"batchingIdTexture"),ht.setValue(A,"batchingIdTexture",$._indirectTexture,W),ht.setOptional(A,$,"batchingColorTexture"),$._colorsTexture!==null&&ht.setValue(A,"batchingColorTexture",$._colorsTexture,W));let ti=Q.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&F.update($,Q,ln),(ei||Le.receiveShadow!==$.receiveShadow)&&(Le.receiveShadow=$.receiveShadow,ht.setValue(A,"receiveShadow",$.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&B.environment!==null&&(bt.envMapIntensity.value=B.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=t_()),ei){if(ht.setValue(A,"toneMappingExposure",I.toneMappingExposure),Le.needsLights&&$f(bt,$i),Ee&&U.fog===!0&&Fe.refreshFogUniforms(bt,Ee),Fe.refreshMaterialUniforms(bt,U,k,q,T.state.transmissionRenderTarget[x.id]),Le.needsLights&&Le.lightProbeGrid){let mt=Le.lightProbeGrid;bt.probesSH.value=mt.texture,bt.probesMin.value.copy(mt.boundingBox.min),bt.probesMax.value.copy(mt.boundingBox.max),bt.probesResolution.value.copy(mt.resolution)}Ds.upload(A,rh(Le),bt,W)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Ds.upload(A,rh(Le),bt,W),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ht.setValue(A,"center",$.center),ht.setValue(A,"modelViewMatrix",$.modelViewMatrix),ht.setValue(A,"normalMatrix",$.normalMatrix),ht.setValue(A,"modelMatrix",$.matrixWorld),U.uniformsGroups!==void 0){let mt=U.uniformsGroups;for(let ni=0,Ji=mt.length;ni<Ji;ni++){let lh=mt[ni];ie.update(lh,ln),ie.bind(lh,ln)}}return ln}function $f(x,B){x.ambientLightColor.needsUpdate=B,x.lightProbe.needsUpdate=B,x.sunLights.needsUpdate=B,x.sunLightShadows.needsUpdate=B,x.directionalLights.needsUpdate=B,x.directionalLightShadows.needsUpdate=B,x.pointLights.needsUpdate=B,x.pointLightShadows.needsUpdate=B,x.spotLights.needsUpdate=B,x.spotLightShadows.needsUpdate=B,x.rectAreaLights.needsUpdate=B,x.hemisphereLights.needsUpdate=B}function Jf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(x,B,Q){let U=V.get(x);U.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),V.get(x.texture).__webglTexture=B,V.get(x.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:Q,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,B){let Q=V.get(x);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(x,B=0,Q=0){ne=x,z=B,Y=Q;let U=null,$=!1,Ee=!1;if(x){let ve=V.get(x);if(ve.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(A.FRAMEBUFFER,ve.__webglFramebuffer),C.copy(x.viewport),ae.copy(x.scissor),de=x.scissorTest,y.viewport(C),y.scissor(ae),y.setScissorTest(de),X=-1;return}else if(ve.__webglFramebuffer===void 0)W.setupRenderTarget(x);else if(ve.__hasExternalTextures)W.rebindTextures(x,V.get(x.texture).__webglTexture,V.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let je=x.depthTexture;if(ve.__boundDepthTexture!==je){if(je!==null&&V.has(je)&&(x.width!==je.image.width||x.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(x)}}let Ae=x.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Ee=!0);let Ne=V.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?U=Ne[B][Q]:U=Ne[B],$=!0):x.samples>0&&W.useMultisampledRTT(x)===!1?U=V.get(x).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[Q]:U=Ne,C.copy(x.viewport),ae.copy(x.scissor),de=x.scissorTest}else C.copy(xe).multiplyScalar(k).floor(),ae.copy(He).multiplyScalar(k).floor(),de=it;if(Q!==0&&(U=J),y.bindFramebuffer(A.FRAMEBUFFER,U)&&y.drawBuffers(x,U),y.viewport(C),y.scissor(ae),y.setScissorTest(de),$){let ve=V.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve.__webglTexture,Q)}else if(Ee){let ve=B;for(let Ae=0;Ae<x.textures.length;Ae++){let Ne=V.get(x.textures[Ae]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ae,Ne.__webglTexture,Q,ve)}}else if(x!==null&&Q!==0){let ve=V.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ve.__webglTexture,Q)}X=-1};function oh(x){let B=V.get(x);return(B.__readFormat!==x.format||B.__readType!==x.type)&&(B.__readFormat=x.format,B.__readType=x.type,B.__formatReadable=E.textureFormatReadable(x.format),B.__typeReadable=E.textureTypeReadable(x.type)),B}this.readRenderTargetPixels=function(x,B,Q,U,$,Ee,Re,ve=0){if(!(x&&x.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Re!==void 0&&(Ae=Ae[Re]),Ae){y.bindFramebuffer(A.FRAMEBUFFER,Ae);try{let Ne=x.textures[ve],je=Ne.format,tt=Ne.type;x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ve);let Ie=oh(Ne);if(Ie.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=x.width-U&&Q>=0&&Q<=x.height-$&&A.readPixels(B,Q,U,$,_e.convert(je),_e.convert(tt),Ee)}finally{let Ne=ne!==null?V.get(ne).__webglFramebuffer:null;y.bindFramebuffer(A.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(x,B,Q,U,$,Ee,Re,ve=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Re!==void 0&&(Ae=Ae[Re]),Ae)if(B>=0&&B<=x.width-U&&Q>=0&&Q<=x.height-$){y.bindFramebuffer(A.FRAMEBUFFER,Ae);let Ne=x.textures[ve],je=Ne.format,tt=Ne.type;x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ve);let Ie=oh(Ne);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ot),A.bufferData(A.PIXEL_PACK_BUFFER,Ee.byteLength,A.STREAM_READ),A.readPixels(B,Q,U,$,_e.convert(je),_e.convert(tt),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let St=ne!==null?V.get(ne).__webglFramebuffer:null;y.bindFramebuffer(A.FRAMEBUFFER,St);let gt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Td(A,gt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ot),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Ee),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(ot),A.deleteSync(gt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,B=null,Q=0){let U=Math.pow(2,-Q),$=Math.floor(x.image.width*U),Ee=Math.floor(x.image.height*U),Re=B!==null?B.x:0,ve=B!==null?B.y:0;W.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,Q,0,0,Re,ve,$,Ee),y.unbindTexture()},this.copyTextureToTexture=function(x,B,Q=null,U=null,$=0,Ee=0){let Re,ve,Ae,Ne,je,tt,Ie,ot,St,gt=x.isCompressedTexture?x.mipmaps[Ee]:x.image;if(Q!==null)Re=Q.max.x-Q.min.x,ve=Q.max.y-Q.min.y,Ae=Q.isBox3?Q.max.z-Q.min.z:1,Ne=Q.min.x,je=Q.min.y,tt=Q.isBox3?Q.min.z:0;else{let bt=Math.pow(2,-$);Re=Math.floor(gt.width*bt),ve=Math.floor(gt.height*bt),x.isDataArrayTexture?Ae=gt.depth:x.isData3DTexture?Ae=Math.floor(gt.depth*bt):Ae=1,Ne=0,je=0,tt=0}U!==null?(Ie=U.x,ot=U.y,St=U.z):(Ie=0,ot=0,St=0);let ft=_e.convert(B.format),Ft=_e.convert(B.type),Le;B.isData3DTexture?(W.setTexture3D(B,0),Le=A.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(W.setTexture2DArray(B,0),Le=A.TEXTURE_2D_ARRAY):(W.setTexture2D(B,0),Le=A.TEXTURE_2D),y.activeTexture(A.TEXTURE0),y.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment);let qt=y.getParameter(A.UNPACK_ROW_LENGTH),st=y.getParameter(A.UNPACK_IMAGE_HEIGHT),ln=y.getParameter(A.UNPACK_SKIP_PIXELS),Tn=y.getParameter(A.UNPACK_SKIP_ROWS),ei=y.getParameter(A.UNPACK_SKIP_IMAGES);y.pixelStorei(A.UNPACK_ROW_LENGTH,gt.width),y.pixelStorei(A.UNPACK_IMAGE_HEIGHT,gt.height),y.pixelStorei(A.UNPACK_SKIP_PIXELS,Ne),y.pixelStorei(A.UNPACK_SKIP_ROWS,je),y.pixelStorei(A.UNPACK_SKIP_IMAGES,tt);let $i=x.isDataArrayTexture||x.isData3DTexture,ht=B.isDataArrayTexture||B.isData3DTexture;if(x.isDepthTexture){let bt=V.get(x),ti=V.get(B),mt=V.get(bt.__renderTarget),ni=V.get(ti.__renderTarget);y.bindFramebuffer(A.READ_FRAMEBUFFER,mt.__webglFramebuffer),y.bindFramebuffer(A.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Ji=0;Ji<Ae;Ji++)$i&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,V.get(x).__webglTexture,$,tt+Ji),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,V.get(B).__webglTexture,Ee,St+Ji)),A.blitFramebuffer(Ne,je,Re,ve,Ie,ot,Re,ve,A.DEPTH_BUFFER_BIT,A.NEAREST);y.bindFramebuffer(A.READ_FRAMEBUFFER,null),y.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if($!==0||x.isRenderTargetTexture||V.has(x)){let bt=V.get(x),ti=V.get(B);y.bindFramebuffer(A.READ_FRAMEBUFFER,w),y.bindFramebuffer(A.DRAW_FRAMEBUFFER,H);for(let mt=0;mt<Ae;mt++)$i?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,bt.__webglTexture,$,tt+mt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,bt.__webglTexture,$),ht?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ti.__webglTexture,Ee,St+mt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ti.__webglTexture,Ee),$!==0?A.blitFramebuffer(Ne,je,Re,ve,Ie,ot,Re,ve,A.COLOR_BUFFER_BIT,A.NEAREST):ht?A.copyTexSubImage3D(Le,Ee,Ie,ot,St+mt,Ne,je,Re,ve):A.copyTexSubImage2D(Le,Ee,Ie,ot,Ne,je,Re,ve);y.bindFramebuffer(A.READ_FRAMEBUFFER,null),y.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else ht?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(Le,Ee,Ie,ot,St,Re,ve,Ae,ft,Ft,gt.data):B.isCompressedArrayTexture?A.compressedTexSubImage3D(Le,Ee,Ie,ot,St,Re,ve,Ae,ft,gt.data):A.texSubImage3D(Le,Ee,Ie,ot,St,Re,ve,Ae,ft,Ft,gt):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Ee,Ie,ot,Re,ve,ft,Ft,gt.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Ee,Ie,ot,gt.width,gt.height,ft,gt.data):A.texSubImage2D(A.TEXTURE_2D,Ee,Ie,ot,Re,ve,ft,Ft,gt);y.pixelStorei(A.UNPACK_ROW_LENGTH,qt),y.pixelStorei(A.UNPACK_IMAGE_HEIGHT,st),y.pixelStorei(A.UNPACK_SKIP_PIXELS,ln),y.pixelStorei(A.UNPACK_SKIP_ROWS,Tn),y.pixelStorei(A.UNPACK_SKIP_IMAGES,ei),Ee===0&&B.generateMipmaps&&A.generateMipmap(Le),y.unbindTexture()},this.initRenderTarget=function(x){V.get(x).__webglFramebuffer===void 0&&W.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?W.setTextureCube(x,0):x.isData3DTexture?W.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?W.setTexture2DArray(x,0):W.setTexture2D(x,0),y.unbindTexture()},this.resetState=function(){z=0,Y=0,ne=null,y.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var hf={type:"change"},Cc={type:"start"},ff={type:"end"},Zo=new Ii,df=new en,i_=Math.cos(70*uc.DEG2RAD),Rt=new N,zt=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oc=1e-6,jo=class extends vr{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new nn,this._lastTargetPosition=new N,this._quat=new nn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ss,this._sphericalDelta=new Ss,this._scale=1,this._panOffset=new N,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new N,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=r_.bind(this),this._onPointerDown=s_.bind(this),this._onPointerUp=a_.bind(this),this._onContextMenu=u_.bind(this),this._onMouseWheel=c_.bind(this),this._onKeyDown=h_.bind(this),this._onTouchStart=d_.bind(this),this._onTouchMove=f_.bind(this),this._onMouseDown=o_.bind(this),this._onMouseMove=l_.bind(this),this._interceptControlDown=p_.bind(this),this._interceptControlUp=m_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ct.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hf),this.update(),this.state=ct.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=zt:n>Math.PI&&(n-=zt),s<-Math.PI?s+=zt:s>Math.PI&&(s-=zt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Rt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Zo.origin.copy(this.object.position),Zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zo.direction))<i_?this.object.lookAt(this.target):(df.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zo.intersectPlane(df,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oc||this._lastTargetPosition.distanceToSquared(this.target)>Oc?(this.dispatchEvent(hf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zt/60*this.autoRotateSpeed*e:zt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Rt.copy(s).sub(this.target);let r=Rt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function s_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function r_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function a_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ff),this.state=ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function o_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Cc)}function l_(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function c_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(Cc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ff))}function h_(i){this.enabled!==!1&&this._handleKeyDown(i)}function d_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Cc)}function f_(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function u_(i){this.enabled!==!1&&i.preventDefault()}function p_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ko=class extends Ai{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ci;e.deleteAttribute("uv");let t=new Fi({side:Nt}),n=new Fi,s=new Sr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ut(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new tr(e,n,6),o=new Mt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ut(e,ws(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ut(e,ws(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let d=new ut(e,ws(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new ut(e,ws(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let h=new ut(e,ws(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new ut(e,ws(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ws(i){return new gr({color:0,emissive:16777215,emissiveIntensity:i})}var Pc={width:70,height:100,thickness:3,cornerRadius:4,holeWidth:24,holeHeight:4.2,holeY:7,holeType:"slot",holeDiameter:5,transmission:.96,roughness:.12,ior:1.49,edgeTint:"#c9e0eb",backgroundWhite:.45,whiteOpacity:1,printOpacity:.85,printSide:"front",autoRotate:!1,exposure:1,lightIntensity:1,viewBackground:"studio",showWhite:!1,showEdges:!1,showPrint:!0},$t=(i,e,t)=>Math.max(e,Math.min(t,i)),Jt=(i,e)=>Number.isFinite(Number(i))?Number(i):e;function uf(i,e,t,n,s,r){let a=Math.min(r,n/2,s/2);return i.moveTo(e+a,t),i.lineTo(e+n-a,t),i.quadraticCurveTo(e+n,t,e+n,t+a),i.lineTo(e+n,t+s-a),i.quadraticCurveTo(e+n,t+s,e+n-a,t+s),i.lineTo(e+a,t+s),i.quadraticCurveTo(e,t+s,e,t+s-a),i.lineTo(e,t+a),i.quadraticCurveTo(e,t,e+a,t),i.closePath(),i}function g_(i){let e=uf(new wi,-i.width/2,-i.height/2,i.width,i.height,i.cornerRadius),t=i.height/2-i.holeY;if(i.holeType==="circle"&&i.holeDiameter>0){let n=new Wn;n.absarc(0,t,i.holeDiameter/2,0,Math.PI*2,!0),e.holes.push(n)}else if(i.holeType!=="none"&&i.holeWidth>0&&i.holeHeight>0){let s=uf(new Wn,-i.holeWidth/2,t-i.holeHeight/2,i.holeWidth,i.holeHeight,i.holeHeight/2).getPoints(20).reverse();e.holes.push(new Wn(s))}return e}function y_(i,e){let t=new pr(i,32),n=t.getAttribute("position"),s=t.getAttribute("uv");for(let r=0;r<n.count;r++)s.setXY(r,n.getX(r)/e.width+.5,n.getY(r)/e.height+.5);return s.needsUpdate=!0,t}function pf(i){let e={...Pc,...i};e.width=$t(Jt(e.width,70),25,200),e.height=$t(Jt(e.height,100),35,250),e.thickness=$t(Jt(e.thickness,3),.5,12),e.cornerRadius=$t(Jt(e.cornerRadius,4),0,Math.min(e.width,e.height)/2),e.holeDiameter=$t(Jt(e.holeDiameter,5),0,e.width*.5),e.holeWidth=$t(Jt(e.holeWidth,12),0,e.width*.7),e.holeHeight=$t(Jt(e.holeHeight,3),0,e.height*.2);let t=e.holeType==="circle"?e.holeDiameter/2:e.holeHeight/2;return e.holeY=$t(Jt(e.holeY,6),t+.8,e.height-t-.8),e}function __(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d");for(let n=0;n<16;n++)for(let s=0;s<16;s++)e.fillStyle=(s+n)%2?"#c5d0d8":"#eef3f5",e.fillRect(s*32,n*32,32,32);let t=new ms(i);return t.colorSpace=It,t.wrapS=t.wrapT=os,t.repeat.set(12,12),t}function mf(i,{onError:e}={}){if(!i)throw new Error("3D \u9884\u89C8\u9700\u8981\u4E00\u4E2A\u6709\u6548\u7684\u5BB9\u5668\u3002");let t;try{t=new Xo({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch(re){let q=`\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u521B\u5EFA WebGL 3D \u9884\u89C8\uFF1A${re.message}\u3002\u8BF7\u4F7F\u7528\u4E8C\u7EF4\u7F16\u8F91\u9884\u89C8\u3002`;throw e?.(q,re),new Error(q,{cause:re})}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.outputColorSpace=It,t.toneMapping=Mr,t.toneMappingExposure=1,t.domElement.setAttribute("aria-label","\u53EF\u62D6\u52A8\u65CB\u8F6C\u7684\u900F\u660E\u4E9A\u514B\u529B\u5DE5\u724C\u4E09\u7EF4\u9884\u89C8"),t.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:none",i.appendChild(t.domElement);let n=new Ai,s=new wt(32,1,.1,5e3),r=new jo(s,t.domElement);r.enableDamping=!0,r.dampingFactor=.075,r.minDistance=45,r.maxDistance=900,r.autoRotateSpeed=1.2,r.enablePan=!0;let a=new Qn;n.add(a);let o=new As(t),l=new Ko,c=o.fromScene(l,.04);n.environment=c.texture,l.dispose(),o.dispose();let d=new _r(15792127,6713472,2.1),u=new bs(16777215,3.5);u.position.set(-80,100,140);let h=new bs(12970495,2.4);h.position.set(100,50,-110),n.add(d,u,h);let f=__(),g=new zn({color:"#e7edf0",side:Yt,toneMapped:!1}),S=new ut(new Ni(2e3,2e3),g);S.renderOrder=-100,n.add(S);let p=pf(Pc),m="",M,R,b,v,T,D=!1,_=0,L=0,I=0,O={},G={},J={},w,H=re=>{re.preventDefault(),e?.("WebGL \u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931\u3002\u8BF7\u4FDD\u5B58\u914D\u7F6E\u540E\u5237\u65B0\u9875\u9762\uFF0C\u4E8C\u7EF4\u5BFC\u51FA\u4ECD\u53EF\u4F7F\u7528\u3002")};t.domElement.addEventListener("webglcontextlost",H,!1);function z(){M&&(a.remove(M),M.geometry.dispose(),M.material.dispose()),R&&(a.remove(R),R.material.dispose()),b&&(a.remove(b),b.material.dispose()),v&&(a.remove(v),v.geometry.dispose(),v.material.dispose()),T?.dispose(),M=R=b=v=T=void 0}function Y(re){z();let q=g_(re),k=new ur(q,{depth:re.thickness,bevelEnabled:!1,steps:1,curveSegments:32});k.translate(0,0,-re.thickness/2),M=new ut(k,new mr({color:"#ffffff",metalness:0,opacity:1,transparent:!1,transmission:.96,roughness:.12,ior:1.49,thickness:re.thickness,attenuationDistance:150,attenuationColor:re.edgeTint,clearcoat:.6,clearcoatRoughness:.08,side:Yt,envMapIntensity:1.1})),M.name="Acrylic \u2014 continuous solid including photo window",M.renderOrder=0,a.add(M),T=y_(q,re);let oe={transparent:!0,side:Yt,depthWrite:!1,alphaTest:.001,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1};R=new ut(T,new zn({...oe,color:"#ffffff"})),b=new ut(T,new zn({...oe,color:"#ffffff"})),R.name="Single-side white ink",b.name="Single-side colour ink",a.add(R,b),v=new nr(new rr(k,28),new ps({color:"#62bad2",transparent:!0,opacity:.5,depthWrite:!1})),v.renderOrder=20,a.add(v)}function ne(re,q){return q?(q!==G[re]&&(J[re]?.dispose(),J[re]=new ms(q),J[re].colorSpace=It,J[re].anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),G[re]=q),J[re].needsUpdate=!0,J[re]):(J[re]?.dispose(),delete J[re],delete G[re],null)}function X(re){if(re.colorCanvas)return re.colorCanvas;if(!re.backgroundCanvas&&!re.inkCanvas)return re.compositeCanvas;let q=re.inkCanvas||re.backgroundCanvas;w||=document.createElement("canvas"),w.width=q.width,w.height=q.height;let k=w.getContext("2d");for(let oe of[re.backgroundCanvas,re.inkCanvas])oe&&k.drawImage(oe,0,0,q.width,q.height);return w}function j(re={},q=O){if(D)return;p=pf({...p,...re}),O=q||{};let k=p,oe=["width","height","thickness","cornerRadius","holeWidth","holeHeight","holeY","holeType","holeDiameter"].map(K=>k[K]).join("|");oe!==m&&(Y(k),m=oe),M.material.transmission=$t(Jt(k.transmission,.96),0,1),M.material.roughness=$t(Jt(k.roughness,.12),0,1),M.material.ior=$t(Jt(k.ior,1.49),1,2.333),M.material.attenuationColor.set(k.edgeTint||"#c9e0eb"),M.material.thickness=k.thickness,R.material.map=ne("white",O.whiteCanvas),b.material.map=ne("colour",X(O)),R.material.needsUpdate=!0,b.material.needsUpdate=!0,R.material.opacity=$t(Jt(k.whiteOpacity,1),0,1),b.material.opacity=O.printOpacityBaked?1:$t(Jt(k.printOpacity,.85),0,1);let De=k.printSide==="back"?-1:1;R.position.z=De*(k.thickness/2+.13),b.position.z=De*(k.thickness/2+.155),R.visible=k.showPrint!==!1&&!!R.material.map,b.visible=k.showPrint!==!1&&!k.showWhite&&!!b.material.map,v.visible=!!k.showEdges,r.autoRotate=!!k.autoRotate,t.toneMappingExposure=$t(Jt(k.exposure,1),.2,3);let xe=$t(Jt(k.lightIntensity,1),0,4);d.intensity=2.1*xe,u.intensity=3.5*xe,h.intensity=2.4*xe,M.material.envMapIntensity=1.1*xe;let it=k.viewBackground==="dark"?"#141e2c":"#e7edf0";n.background=new Qe(it),g.color.set(k.viewBackground==="checker"?"#ffffff":it),g.map=k.viewBackground==="checker"?f:null,g.needsUpdate=!0,ae()}function C(re="perspective"){if(D)return;let q=Math.max(p.width,p.height)*2.45,k={front:[0,0,1],back:[0,0,-1],left:[-1,.08,.28],right:[1,.08,.28],edge:[1,.06,.025],top:[0,1,.32],perspective:[.34,.16,1],threequarter:[.55,.22,1]},oe=new N(...k[re]||k.perspective).normalize();r.target.set(0,0,0),s.position.copy(oe.multiplyScalar(q)),s.up.set(0,1,0),s.lookAt(r.target),r.update(),ae()}function ae(){if(D)return;let re=s.position.clone().sub(r.target).normalize();S.position.copy(r.target).addScaledVector(re,-Math.max(p.height,p.width)*1.5),S.quaternion.copy(s.quaternion);let q=(s.position.z-r.target.z)*(p.printSide==="back"?-1:1)>0;R&&b&&(R.renderOrder=q?10:11,b.renderOrder=q?11:10,R.material.depthTest=q,b.material.depthTest=q),t.render(n,s),L++}function de(){if(D)return;let re=i.getBoundingClientRect(),q=Math.max(1,re.width),k=Math.max(1,re.height);t.setSize(q,k,!1),s.aspect=q/k,s.updateProjectionMatrix(),ae()}let Ve=new ResizeObserver(de);Ve.observe(i);function we(re){D||(_=requestAnimationFrame(we),!(document.hidden||re-I<1e3/40)&&(!i.getClientRects().length||i.hidden||(I=re,r.update(),ae())))}return j(Pc,{}),C("perspective"),de(),_=requestAnimationFrame(we),{update:j,setView:C,resize:de,snapshot(){return ae(),t.domElement.toDataURL("image/png")},getDebugInfo(){return{available:!D,revision:"186",frames:L,dimensionsMm:[p.width,p.height,p.thickness],physicalHoles:p.holeType==="none"?0:1,photoWindowIsPhysicalHole:!1,transmission:M?.material.transmission,opacity:M?.material.opacity,printSide:p.printSide,layers:{colour:!!b?.material.map,white:!!R?.material.map},colourDepthTest:b?.material.depthTest,whiteDepthTest:R?.material.depthTest,renderer:t.info.render,memory:{...t.info.memory}}},dispose(){D||(D=!0,cancelAnimationFrame(_),Ve.disconnect(),r.dispose(),t.domElement.removeEventListener("webglcontextlost",H),z(),Object.values(J).forEach(re=>re.dispose()),f.dispose(),S.geometry.dispose(),g.dispose(),c.dispose(),n.environment=null,t.dispose(),t.forceContextLoss(),t.domElement.remove())}}}var gf="./logo-3WA64HZF.png";var yf="./reference-background-V2X7VAMA.png";var Jc={department:"\u9879\u76EE\u90E8",fontFamily:"Jiangxi",fontSize:20,tracking:0,leading:1,textX:46,textY:30,layout:"stagger",chars:[{x:0,y:0,scale:1,rotation:-3},{x:0,y:0,scale:.86,rotation:3},{x:0,y:0,scale:1,rotation:-2}],inkTop:"#102d52",inkBottom:"#2c70ae",bg1:"#c5e7f3",bg2:"#d7f4df",bg3:"#eadcf2",bgMode:"reference",grain:.035,backgroundOpacity:.9,backgroundWhite:.45,slogan:"\u70ED\u7231\u53EF\u62B5\u5C81\u6708\u6F2B\u957F",name:"",position:"",showLogo:!0,showAssociation:!0,showFields:!0,showSlogan:!0,logoScale:1,assocScale:1,logoX:0,logoY:0,assocX:0,assocY:0,sloganSize:3.1,starScale:1,bigColorMode:"gradient",bigTop:"#102d52",bigBottom:"#2c70ae",bigAngle:90,showStars:!0,showPhotoBorder:!0,photoX:5.42,photoY:28.67,photoW:25.06,photoH:31.6,photoRadius:1.24,guides:!1},fn=(i,e,t)=>Math.max(e,Math.min(t,Number(i))),S_={Jiangxi:'"KaiTi", serif',Alimama:'"KaiTi", serif',Wenkai:'"KaiTi", serif',Hanchan:'"KaiTi", cursive',Smiley:'"Microsoft YaHei", sans-serif'};function bi(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function _f(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error("\u5DE5\u724C\u56FE\u7247\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25")),n.src=i})}async function Ef(){let[i,e]=await Promise.all([_f(gf),_f(yf)]);return{logoImage:i,backgroundImage:e}}function Uc(i,e,t,n,s,r){i.beginPath(),i.roundRect(e,t,Math.max(.01,n),Math.max(.01,s),Math.max(0,Math.min(r,n/2,s/2)))}function kc(i,e,t,n,s,r){Uc(i,e,t,n,s,r),i.fill()}function xf(i,e,t,n,s=0){i.beginPath();for(let r=0;r<8;r++){let a=s+r*Math.PI/4,o=r%2?n*.18:n,l=e+Math.sin(a)*o,c=t-Math.cos(a)*o;r?i.lineTo(l,c):i.moveTo(l,c)}i.closePath(),i.fill()}function bf(i,e,t,n,s,r="left"){let a=Array.from(String(e)),o=a.reduce((l,c)=>l+i.measureText(c).width,0)+Math.max(0,a.length-1)*s;r==="center"&&(t-=o/2),r==="right"&&(t-=o),i.textAlign="left";for(let l of a)i.fillText(l,t,n),t+=i.measureText(l).width+s;return o}function Sf(i,e,t,n,s,r=400){for(i.font=`${r} ${n}px ${s}`;i.measureText(e).width>t&&n>.75;)n-=.1,i.font=`${r} ${n}px ${s}`}function v_(i,e,t,n,s){if(!(n>0))return;let r=16807,a=Math.max(2,Math.round(s*.18));i.save();for(let o=0;o<t;o+=a)for(let l=0;l<e;l+=a){r=r*48271%2147483647;let c=r/2147483647;i.fillStyle=c>.5?`rgba(255,255,255,${(c-.5)*n})`:`rgba(20,35,70,${(.5-c)*n})`,i.fillRect(l,o,a,a)}i.restore()}function $c(i,e,t){i.save(),i.globalCompositeOperation="destination-out",i.fillStyle="#fff",kc(i,e.photoX*t,e.photoY*t,e.photoW*t,e.photoH*t,e.photoRadius*t),i.restore()}function qc(i,e,t,n=0){i.save(),i.globalCompositeOperation="destination-out",i.fillStyle="#fff";let s=e.width/2*t,r=e.holeY*t;if(e.holeType==="circle")i.beginPath(),i.arc(s,r,(e.holeDiameter/2+n)*t,0,Math.PI*2),i.fill();else{let a=(e.holeWidth+n*2)*t,o=(e.holeHeight+n*2)*t;kc(i,s-a/2,r-o/2,a,o,o/2)}i.restore()}function Hc(i,e,t,n,s){i.save(),i.globalCompositeOperation="destination-in",i.fillStyle="#fff",kc(i,0,0,n,s,e.cornerRadius*t),i.restore()}function vf(i,e,t){let n=e.showPhotoBorder?.28:0;$c(i,{...e,photoX:e.photoX+n,photoY:e.photoY+n,photoW:Math.max(.1,e.photoW-n*2),photoH:Math.max(.1,e.photoH-n*2),photoRadius:Math.max(0,e.photoRadius-n)},t)}function el(i,e={},{widthPx:t=840}={}){let n={width:70,height:100,cornerRadius:4,holeWidth:24,holeHeight:4.2,holeY:7,holeType:"slot",holeDiameter:5,...Jc,...i},s=Math.max(140,Math.round(t)),r=s/n.width,a=Math.round(n.height*r),o=bi(s,a),l=bi(s,a),c=bi(s,a),d=bi(s,a),u=bi(s,a),h=o.getContext("2d"),f=l.getContext("2d"),g=c.getContext("2d"),S=d.getContext("2d"),p=u.getContext("2d");if(h.save(),h.globalAlpha=fn(n.backgroundOpacity,0,1),n.bgMode==="reference"&&e.backgroundImage)h.drawImage(e.backgroundImage,0,0,s,a);else{let C=h.createLinearGradient(0,0,s,a);C.addColorStop(0,n.bg1),C.addColorStop(.5,n.bg2),C.addColorStop(1,n.bg3),h.fillStyle=C,h.fillRect(0,0,s,a)}h.restore(),h.save(),h.globalCompositeOperation="source-atop",v_(h,s,a,fn(n.grain,0,1),r),h.restore();let m=bi(s,a);m.getContext("2d").drawImage(o,0,0),$c(h,n,r),qc(h,n,r,1.5),Hc(h,n,r,s,a),f.save(),f.scale(r,r),f.textBaseline="alphabetic",f.strokeStyle=n.inkTop;let M=n.bigColorMode||"gradient",R=n.bigTop||n.inkTop,b=n.bigBottom||n.inkBottom,v=Number(n.bigAngle??90)*Math.PI/180,T=(C,ae,de,Ve,we,re=0)=>{if(M==="solid")return R;let q=Math.cos(v+re),k=Math.sin(v+re),oe=(Math.abs(q)*Ve+Math.abs(k)*we)/2||1,De=C.createLinearGradient(ae-q*oe,de-k*oe,ae+q*oe,de+k*oe);return De.addColorStop(0,R),De.addColorStop(1,b),De},D=Array.from(n.department||"\u9879\u76EE\u90E8").slice(0,8),_=[],L=Number(n.textX)+(n.layout==="horizontal"?(D.length-1)*(Number(n.fontSize)+Number(n.tracking))/2:(D.length-1)*Number(n.tracking)/2),I=Number(n.textY)+(n.layout==="horizontal"?0:(D.length-1)*(Number(n.fontSize)+Number(n.leading))/2),O=n.layout==="horizontal"?Math.max(Number(n.fontSize),(D.length-1)*(Number(n.fontSize)+Number(n.tracking))+Number(n.fontSize)):Number(n.fontSize),G=n.layout==="horizontal"?Number(n.fontSize):Math.max(Number(n.fontSize),(D.length-1)*(Number(n.fontSize)+Number(n.leading))+Number(n.fontSize));if(D.forEach((C,ae)=>{let de=n.chars?.[ae]||{},Ve=fn(de.scale??1,.2,3),we=fn(n.fontSize,4,45)*Ve,re=Number(n.textX),q=Number(n.textY);n.layout==="horizontal"?re+=ae*(Number(n.fontSize)+Number(n.tracking)):(re+=ae*Number(n.tracking)+(n.layout==="stagger"?[0,2,-1][ae%3]:0),q+=ae*(Number(n.fontSize)+Number(n.leading))),re+=Number(de.x||0),q+=Number(de.y||0),f.save(),f.translate(re,q);let k=Number(de.rotation||0);f.rotate(k*Math.PI/180);let oe=M==="perChar";f.fillStyle=T(f,oe?0:L-re,oe?0:I-q,oe?we:O,oe?we:G,-k*Math.PI/180),f.font=`${we}px "${n.fontFamily}", ${S_[n.fontFamily]||'"KaiTi", serif'}`,f.textAlign="center";let De=f.measureText(C),xe=De.actualBoundingBoxAscent||we*.8,He=De.actualBoundingBoxDescent||we*.12;f.fillText(C,0,(xe-He)/2),f.restore();let it=Math.max(De.actualBoundingBoxLeft+De.actualBoundingBoxRight||De.width,we*.6)/2,K=(xe+He)/2,se=Math.abs(k)*Math.PI/180,le=it*Math.cos(se)+K*Math.sin(se),ce=K*Math.cos(se)+it*Math.sin(se);_.push({index:ae,char:C,x:re-le,y:q-ce,width:le*2,height:ce*2,centerX:re,centerY:q})}),f.textAlign="left",n.showLogo&&e.logoImage){let C=fn(n.logoScale??1,.6,1.8),ae=9.83*C;f.drawImage(e.logoImage,10.335+Number(n.logoX||0)-ae/2,11.565+Number(n.logoY||0)-ae/2,ae,ae)}if(n.showStars){let C=fn(n.starScale??1,.3,2);f.globalAlpha=.8,xf(f,5.98,5.2,1.58*C),xf(f,n.width-4.2,n.height-13.7,1.35*C,.4),f.globalAlpha=1}if(f.save(),f.globalAlpha=.45,f.lineWidth=.34,f.beginPath(),f.moveTo(17.6,11.3),f.lineTo(n.width-12.65,11.3),f.stroke(),f.restore(),n.showAssociation){let C=fn(n.assocScale??1,.6,1.8),ae=Number(n.width)-6.65+Number(n.assocX||0),de=8.8+Number(n.assocY||0);f.fillStyle=n.inkTop,f.font=`500 ${2.15*C}px "Wenkai", "Microsoft YaHei", sans-serif`,f.textAlign="center",Array.from("\u6821\u53CB\u4EA4\u6D41\u53D1\u5C55\u534F\u4F1A").forEach((Ve,we)=>f.fillText(Ve,ae,de+we*3.04*C)),f.font=`700 ${.91*C}px Arial, sans-serif`,Array.from("ALUMNIASSOCIATION").forEach((Ve,we)=>f.fillText(Ve,ae-3.4,de-1.05+we*1.25*C))}if(n.showPhotoBorder&&(f.save(),f.globalAlpha=.75,f.strokeStyle=n.inkBottom,f.lineWidth=.55,Uc(f,n.photoX,n.photoY,n.photoW,n.photoH,n.photoRadius),f.stroke(),f.restore()),n.showFields&&[["\u59D3\u540D","name",n.name],["\u804C\u52A1","position",n.position]].forEach(([C,ae,de],Ve)=>{let we=n.photoX,re=n.photoY+n.photoH+7.6+Ve*9.9;f.fillStyle=n.inkTop,f.font='500 1.72px "Wenkai", "Microsoft YaHei", sans-serif',f.textAlign="left",bf(f,C,we,re,.18),f.font="1.25px Arial, sans-serif",f.globalAlpha=.8,f.fillText(`/ ${ae}`,we+4.5,re-.05),f.globalAlpha=1,de&&(Sf(f,String(de),n.photoW,3.1,'"Wenkai", sans-serif'),f.fillText(String(de),we,re+3.8)),f.save(),f.globalAlpha=.75,f.lineWidth=.4,f.setLineDash([1.25,.85]),f.beginPath(),f.moveTo(we,re+4.35),f.lineTo(we+n.photoW,re+4.35),f.stroke(),f.restore()}),n.showSlogan&&n.slogan){let C=fn(n.sloganSize??3.1,2,6);f.fillStyle=n.inkTop,Sf(f,String(n.slogan),n.width-13,C,'"Hanchan", "Wenkai", serif');let ae=Array.from(String(n.slogan)).length,de=n.width-13,Ve=f.measureText(String(n.slogan)).width,we=ae>1?Math.min(.45,Math.max(0,(de-Ve)/(ae-1))):0;bf(f,String(n.slogan),n.width/2,n.height-7.4,we,"center")}f.restore(),vf(f,n,r),qc(f,n,r,1.5),Hc(f,n,r,s,a),S.fillStyle=`rgba(255,255,255,${fn(n.backgroundWhite,0,1)})`,S.fillRect(0,0,s,a),$c(S,n,r);let J=bi(s,a),w=J.getContext("2d");w.drawImage(l,0,0),w.globalCompositeOperation="source-in",w.fillStyle="#fff",w.fillRect(0,0,s,a);let H=w.getImageData(0,0,s,a);for(let C=3;C<H.data.length;C+=4)H.data[C]=Math.min(255,H.data[C]*4);w.putImageData(H,0,0);let z=Math.max(0,Number(n.whiteChoke??0))*r;if(z>0){let C=bi(s,a);C.getContext("2d").drawImage(J,0,0),w.globalCompositeOperation="destination-in";for(let ae=0;ae<8;ae++){let de=ae*Math.PI/4;w.drawImage(C,Math.cos(de)*z,Math.sin(de)*z)}}S.drawImage(J,0,0),vf(S,n,r),qc(S,n,r,1.5),Hc(S,n,r,s,a);for(let C of[o,l,m]){let ae=C.getContext("2d");ae.save(),ae.globalCompositeOperation="destination-in",ae.fillStyle=`rgba(0,0,0,${fn(n.printOpacity??.85,0,1)})`,ae.fillRect(0,0,s,a),ae.restore()}g.drawImage(o,0,0),g.drawImage(l,0,0),n.showWhite?p.drawImage(d,0,0):n.showPrint!==!1&&(p.globalAlpha=fn(n.whiteOpacity??1,0,1),p.drawImage(d,0,0),p.globalAlpha=1,p.drawImage(c,0,0)),n.guides&&(p.save(),p.scale(r,r),p.strokeStyle="#e24d71",p.lineWidth=.11,p.setLineDash([.6,.45]),Uc(p,3,3,n.width-6,n.height-6,Math.max(0,n.cornerRadius-3)),p.stroke(),p.strokeStyle="#18a5a4",_.forEach(C=>{p.strokeRect(C.x,C.y,C.width,C.height)}),p.restore());let Y=[],ne=fn(n.assocScale??1,.6,1.8),X=n.width-6.65-1.075*ne-.6,j=8.8+7*3.04*ne+2.15*ne;return _.forEach(C=>{(C.x<3||C.y<3||C.x+C.width>n.width-3||C.y+C.height>n.height-3)&&Y.push(`\u201C${C.char}\u201D\u63A5\u8FD1\u6216\u8D85\u51FA3mm\u5B89\u5168\u7EBF`),C.x<n.photoX+n.photoW&&C.x+C.width>n.photoX&&C.y<n.photoY+n.photoH&&C.y+C.height>n.photoY&&Y.push(`\u201C${C.char}\u201D\u4E0E\u7167\u7247\u7A97\u91CD\u53E0\uFF0C\u91CD\u53E0\u5904\u4F1A\u7559\u900F\u660E`),n.showAssociation&&C.x+C.width>X&&C.y<j&&C.y+C.height>7&&Y.push(`\u201C${C.char}\u201D\u63A5\u8FD1\u53F3\u4E0A\u534F\u4F1A\u540D\u79F0\uFF0C\u8BF7\u8C03\u5C0F\u6216\u5DE6\u79FB`),n.showSlogan&&C.y+C.height>n.height-11&&Y.push(`\u201C${C.char}\u201D\u63A5\u8FD1\u5E95\u90E8\u53E3\u53F7\uFF0C\u8BF7\u8C03\u5C0F\u6216\u4E0A\u79FB`)}),{colorCanvas:c,whiteCanvas:d,backgroundCanvas:o,inkCanvas:l,compositeCanvas:u,bleedBackgroundCanvas:m,printOpacityBaked:!0,charBounds:_,warnings:Y,widthMm:n.width,heightMm:n.height}}var Mf="./jiangxi-TXA3CI4N.woff2";var Tf="./alimama-XNOMVEWS.woff2";var Lf="./wenkai-2434CMUD.woff2";var Rf="./hanchan-G2YFDMZQ.woff2";var Df="./smiley-5RKHB7II.woff2";var Ge=i=>document.querySelector(i),Gt=i=>[...document.querySelectorAll(i)],En=i=>structuredClone(i),Pr=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Zc=["\u9879\u76EE\u90E8","\u65B0\u5A92\u90E8","\u5B9E\u8DF5\u90E8","\u4F1A\u957F\u56E2","\u7B56\u5212\u90E8"],Pn={...En(Jc),width:70,height:100,thickness:3,cornerRadius:4,holeWidth:24,holeHeight:4.2,holeY:7,holeType:"slot",holeDiameter:5,transmission:.96,roughness:.12,ior:1.49,edgeTint:"#c9e0eb",whiteOpacity:1,printOpacity:.85,printSide:"front",autoRotate:!1,exposure:1,lightIntensity:1,viewBackground:"studio",showWhite:!1,showEdges:!1,showPrint:!0,whiteChoke:0},Gc={fontSize:[10,30],tracking:[-8,8],leading:[-8,12],textX:[12,57],textY:[15,70],grain:[0,.2],backgroundOpacity:[0,1],backgroundWhite:[0,1],whiteOpacity:[0,1],printOpacity:[0,1],width:[50,100],height:[70,140],thickness:[1,8],cornerRadius:[0,12],holeWidth:[12,32],holeHeight:[2,7],holeY:[5,15],holeDiameter:[3,8],transmission:[0,1],roughness:[0,1],ior:[1,2],exposure:[.5,1.8],lightIntensity:[.2,2],photoX:[3,18],photoY:[20,40],photoW:[18,30],photoH:[22,38],photoRadius:[0,5],whiteChoke:[0,.2],logoScale:[.6,1.8],assocScale:[.6,1.8],logoX:[-10,10],logoY:[-8,8],assocX:[-6,6],assocY:[-4,10],sloganSize:[2,6],starScale:[.3,2],bigAngle:[0,180]},Af={fontFamily:["Jiangxi","Alimama","Wenkai","Hanchan","Smiley"],layout:["stagger","vertical","horizontal"],bigColorMode:["gradient","perChar","solid"],bgMode:["reference","custom"],holeType:["slot","circle"],viewBackground:["studio","dark","checker"],printSide:["front"]},Ff="alumni-badge-studio-v1",Me=En(Pn),qr,qn,kt,Ui="type",Zt=0,Hr="3d",If,wf,Vc=!1,vn=[],Kn=0,Bf=null;function Xc(i){if(!i||typeof i!="object"||Array.isArray(i))throw new Error("\u8FD9\u4E0D\u662F\u6709\u6548\u7684\u8BBE\u8BA1\u6587\u4EF6");let e=En(Pn);for(let[n,s]of Object.entries(Pn)){let r=i[n];if(r!==void 0)if(Gc[n]){if(typeof r!="number"||!Number.isFinite(r))throw new Error(`${n} \u53C2\u6570\u4E0D\u662F\u6709\u6548\u6570\u5B57`);e[n]=Math.min(Gc[n][1],Math.max(Gc[n][0],r))}else Af[n]?Af[n].includes(r)&&(e[n]=r):typeof s=="boolean"?typeof r=="boolean"&&(e[n]=r):typeof s=="string"&&typeof r=="string"&&(e[n]=n.startsWith("bg")||["inkTop","inkBottom","edgeTint"].includes(n)?/^#[0-9a-f]{6}$/i.test(r)?r:s:r.slice(0,n==="department"?4:n==="slogan"?30:24))}e.department=e.department.trim()||"\u9879\u76EE\u90E8",e.chars=Array.from({length:4},(n,s)=>{let r=i.chars?.[s]||Pn.chars[s]||{};return Object.fromEntries(Object.entries({x:[-20,20,0],y:[-20,20,0],scale:[.4,1.6,1],rotation:[-30,30,0]}).map(([a,[o,l,c]])=>[a,typeof r[a]=="number"&&Number.isFinite(r[a])?Math.max(o,Math.min(l,r[a])):c]))});let t=e.holeType==="circle"?e.holeDiameter/2:e.holeHeight/2;return e.holeY=Math.max(t+1.5,e.holeY),e.cornerRadius=Math.min(e.cornerRadius,e.width/2,e.height/2),e}function jn(i){Ge("#toast").textContent=i,Ge("#toast").classList.add("visible"),clearTimeout(wf),wf=setTimeout(()=>Ge("#toast").classList.remove("visible"),3300)}function vi(){clearTimeout(If),Ge("#save-status").textContent="\u6B63\u5728\u4FDD\u5B58\u2026",If=setTimeout(()=>{try{localStorage.setItem(Ff,JSON.stringify(Me)),Ge("#save-status").textContent="\u5DF2\u81EA\u52A8\u4FDD\u5B58\u5230\u672C\u673A"}catch{Ge("#save-status").textContent="\u8BF7\u5BFC\u51FA JSON \u4FDD\u5B58\u8BBE\u8BA1"}},450)}function Ns(){let i=JSON.stringify(Me);vn[Kn]!==i&&(vn=vn.slice(0,Kn+1),vn.push(i),vn.length>45&&vn.shift(),Kn=vn.length-1,jc())}function jc(){Ge("#undo").disabled=Kn<=0,Ge("#redo").disabled=Kn>=vn.length-1}function Qc(i){Kn+i<0||Kn+i>=vn.length||(Kn+=i,Me=JSON.parse(vn[Kn]),Zt=Math.min(Zt,Me.department.length-1),Hn(),Ur(),vi(),jc())}function Wt(i,{commit:e=!0,controls:t=!1}={}){Me={...Me,...i},e&&Ns(),t&&Hn(),zc(),vi()}function zc(){Vc||(Vc=!0,requestAnimationFrame(()=>{Vc=!1,Ur()}))}function Ur(){if(!qr)return;kt=el(Me,qr),qn?.update(Me,kt);let i=Ge("#flat");i.width=kt.compositeCanvas.width,i.height=kt.compositeCanvas.height,i.getContext("2d").drawImage(Me.showWhite?Wc(kt.whiteCanvas):kt.compositeCanvas,0,0),Ge("#current-title").innerHTML=`${Pr(Me.department)}<span> / ${String(Zc.indexOf(Me.department)+1||1).padStart(2,"0")}</span>`,Ge("#dimensions").textContent=`${Me.width} \xD7 ${Me.height} \xD7 ${Me.thickness} mm`,Ge("#print-size").textContent=`${Me.width} \xD7 ${Me.height} mm`,Gt("#departments button").forEach(t=>t.classList.toggle("active",t.dataset.department===Me.department)),Ge("#rotate").classList.toggle("active",Me.autoRotate),Ge("#render-status").textContent=kt.warnings.length?kt.warnings[0]:`${Hr==="3d"&&qn?"3D \u5B9E\u65F6\u9884\u89C8":"2D \u5B9E\u65F6\u9884\u89C8"} \xB7 \u6B63\u9762\u5355\u9762\u5370\u5237`,Ge("#render-status").title=kt.warnings.join("\uFF1B")}function Of(i){return String(Number(Number(i).toFixed(2)))}function Ze(i,e,t,n,s=.1,r="mm",a=Me[i]){return`<div class="range-field"><div class="range-label"><label for="range-${i}">${e}</label><output>${Of(r==="%"?a*100:a)} ${r}</output></div><input id="range-${i}" type="range" data-key="${i}" min="${t}" max="${n}" step="${s}" value="${a}" data-unit="${r}" aria-label="${e}"></div>`}function Cn(i,e){return`<label class="toggle-row">${e}<input type="checkbox" data-key="${i}" ${Me[i]?"checked":""}></label>`}function tl(i,e,t=24){return`<label class="field-label" for="field-${i}">${e}</label><input type="text" id="field-${i}" data-key="${i}" value="${Pr(Me[i])}" maxlength="${t}" autocomplete="off">`}function nl(i,e,t){return`<label class="field-label" for="select-${i}">${e}</label><select id="select-${i}" data-key="${i}">${t.map(([n,s])=>`<option value="${n}" ${Me[i]===n?"selected":""}>${s}</option>`).join("")}</select>`}function on(i,e,t){return`<section class="control-section"><h3 class="section-title">${i}<span>${e}</span></h3>${t}</section>`}function Si(i,e){return`<label class="color-row">${e}<input type="color" data-key="${i}" value="${Me[i]}" aria-label="${e}"></label>`}function Hn(){let i=Array.from(Me.department),e=Me.chars[Zt]||{x:0,y:0,scale:1,rotation:0},t="";Ui==="type"&&(t+=on("\u90E8\u95E8\u5927\u5B57","TYPOGRAPHY",tl("department","\u90E8\u95E8\u540D\u79F0",4)+nl("fontFamily","\u5B57\u4F53\u6C14\u8D28",[["Jiangxi","\u6C5F\u897F\u62D9\u6977 \xB7 \u539F\u5B9A\u7A3F / \u624B\u5199\u529B\u91CF"],["Alimama","\u4E1C\u65B9\u5927\u6977 \xB7 \u9971\u6EE1 / \u5927\u65B9"],["Wenkai","\u971E\u9E5C\u6587\u6977 \xB7 \u8F7B\u76C8 / \u7AEF\u6B63"],["Hanchan","\u5BD2\u8749\u624B\u5199 \xB7 \u968F\u6027 / \u6709\u7B14\u950B"],["Smiley","\u5F97\u610F\u9ED1 \xB7 \u73B0\u4EE3 / \u7A84\u8EAB\u51B2\u51FB"]])+`<label class="field-label">\u6392\u7248\u65B9\u5F0F</label><div class="segmented">${[["stagger","\u9519\u843D\u6709\u81F4"],["vertical","\u6574\u9F50\u7AD6\u6392"],["horizontal","\u6A2A\u5411\u7F16\u6392"]].map(([n,s])=>`<button data-layout="${n}" class="${Me.layout===n?"active":""}">${s}</button>`).join("")}</div>`+Ze("fontSize","\u6574\u4F53\u5B57\u53F7",10,30,.2)+Ze("tracking","\u5B57\u8DDD / \u6A2A\u5411\u9519\u4F4D",-8,8,.2)+Ze("leading","\u884C\u8DDD / \u7EB5\u5411\u7559\u767D",-8,12,.2)+nl("bigColorMode","\u5927\u5B57\u4E0A\u8272",[["gradient","\u6574\u7EC4\u6E10\u53D8 \xB7 \u4E00\u4E2A\u65B9\u5411\u8D2F\u7A7F"],["perChar","\u9010\u5B57\u6E10\u53D8 \xB7 \u6BCF\u5B57\u72EC\u7ACB"],["solid","\u7EAF\u8272 \xB7 \u5355\u8272\u5B9E\u5FC3"]])+`<div class="color-row-group">${Si("bigTop","\u8D77\u59CB\u8272")}${Me.bigColorMode==="solid"?"":Si("bigBottom","\u7ED3\u675F\u8272")}</div>`+(Me.bigColorMode==="solid"?"":Ze("bigAngle","\u6E10\u53D8\u89D2\u5EA6",0,180,5,"\xB0"))),t+=on("\u6BCF\u4E2A\u5B57\uFF0C\u90FD\u6709\u81EA\u5DF1\u7684\u4F4D\u7F6E","FINE TUNE",`<div class="char-picker">${i.map((n,s)=>`<button data-char="${s}" class="${s===Zt?"active":""}" aria-label="\u7F16\u8F91\u7B2C${s+1}\u5B57${Pr(n)}">${Pr(n)}</button>`).join("")}</div>`+Ze("charX","\u5DE6\u53F3\u504F\u79FB",-20,20,.2,"mm",e.x)+Ze("charY","\u4E0A\u4E0B\u504F\u79FB",-20,20,.2,"mm",e.y)+Ze("charScale","\u5355\u5B57\u5927\u5C0F",.4,1.6,.02,"%",e.scale)+Ze("charRotation","\u5355\u5B57\u65CB\u8F6C",-30,30,1,"\xB0",e.rotation)+'<p class="hint">\u5148\u9009\u5B57\uFF0C\u518D\u5FAE\u8C03\u30022D \u6A21\u5F0F\u4E0B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u62D6\u52A8\u5927\u5B57\u3002</p><button class="small-btn" data-action="reset-chars">\u91CD\u7F6E\u8FD9\u4E09\u4E2A\u5B57\u7684\u5FAE\u8C03</button>'),t+=on("\u6574\u4F53\u4F4D\u7F6E","POSITION",Ze("textX","\u6574\u7EC4\u5DE6\u53F3",12,57,.2)+Ze("textY","\u6574\u7EC4\u4E0A\u4E0B",15,70,.2)+Cn("guides","\u663E\u793A\u5B89\u5168\u7EBF\u4E0E\u5B57\u5F62\u8FB9\u6846"))),Ui==="color"&&(t+=on("\u4E00\u7EC4\u989C\u8272\uFF0C\u4E00\u79CD\u5FC3\u60C5","PALETTES",`<div class="palette-row">${[["#c5e7f3","#d7f4df","#eadcf2"],["#f7dfb0","#dbf0df","#b9ddea"],["#d3e6f7","#e2e3fa","#f4dce9"],["#ede7d8","#dce7cc","#abc9bb"],["#c5d1e9","#95b9d3","#d7dde3"]].map((s,r)=>`<button class="palette" data-palette="${r}" aria-label="\u914D\u8272${["\u6D77\u76D0\u82B1\u56ED","\u65E5\u5149\u8584\u8377","\u4E91\u95F4\u7D2B","\u82D4\u7EFF\u5976\u6CB9","\u96FE\u84DD"][r]}">${s.map(a=>`<i style="background:${a}"></i>`).join("")}</button>`).join("")}</div><button class="small-btn" data-action="reference-bg">\u6062\u590D\u6700\u65B0\u539F\u7A3F\u5E95\u8272</button><p class="hint">\u5F53\u524D\uFF1A${Me.bgMode==="reference"?"\u539F\u7A3F\u5F25\u6563\u5E95\u56FE":"\u81EA\u5B9A\u4E49\u67D4\u548C\u6E10\u53D8"}</p>`+Si("bg1","\u8D77\u59CB\u8272")+Si("bg2","\u4E2D\u95F4\u8272")+Si("bg3","\u7ED3\u675F\u8272")+Ze("backgroundOpacity","\u5E95\u8272\u8986\u76D6\u5EA6",0,1,.01,"%")+Ze("grain","\u67D4\u548C\u7EB8\u611F\u9897\u7C92",0,.2,.005,"%")),t+=on("\u6587\u5B57\u4E0E\u6807\u5FD7","INK COLOUR",Si("inkTop","\u4E0A\u90E8\u6DF1\u8272")+Si("inkBottom","\u4E0B\u90E8\u6D45\u8272")+Ze("printOpacity","\u5F69\u58A8\u89C6\u89C9\u6D53\u5EA6",0,1,.01,"%")),t+=on("\u767D\u58A8\u6253\u5E95","UNDERPRINT",Ze("backgroundWhite","\u80CC\u666F\u767D\u58A8\u8986\u76D6",0,1,.01,"%")+Ze("whiteOpacity","\u6574\u4F53\u767D\u58A8\u5F3A\u5EA6",0,1,.01,"%")+Cn("showWhite","\u53EA\u770B\u767D\u58A8\u5C42")+'<p class="hint">\u7167\u7247\u7A97\u4E0E\u5B54\u4F4D\u4FDD\u6301\u4E0D\u6253\u58A8\u3002\u80CC\u666F\u8D8A\u63A5\u8FD1 0%\uFF0C\u8D8A\u900F\uFF1B\u8D8A\u63A5\u8FD1 100%\uFF0C\u5E95\u8272\u8D8A\u5B9E\u3002\u5B9E\u9645\u6548\u679C\u4EE5\u5370\u5382\u6253\u6837\u4E3A\u51C6\u3002</p>')),Ui==="material"&&(t+=on("\u4E9A\u514B\u529B\u7684\u5149\u4E0E\u8FB9","ACRYLIC",Ze("thickness","\u5B9E\u9645\u677F\u6750\u539A\u5EA6",1,8,.2)+Ze("transmission","\u6750\u8D28\u900F\u5149",0,1,.01,"%")+Ze("roughness","\u78E8\u7802\u7A0B\u5EA6",0,1,.01,"%")+Si("edgeTint","\u4FA7\u8FB9\u900F\u5149\u8272")+Ze("ior","\u6298\u5C04\u7387",1,2,.01,"")+Cn("showEdges","\u663E\u793A\u51E0\u4F55\u8F6E\u5ED3")+Cn("showPrint","\u663E\u793A\u5370\u5237\u56FE\u5C42")+'<p class="hint">\u539A\u5EA6\u4F1A\u6539\u53D8\u5B9E\u4F53\u8FB9\u539A\u3002\u7167\u7247\u7A97\u4ECD\u6709\u900F\u660E\u677F\u6750\uFF1B\u80CC\u9762\u53EF\u89C1\u81EA\u7136\u955C\u50CF\u6587\u5B57\u3002</p>'),t+=on("\u6444\u5F71\u68DA\u91CC\u7684\u5149","LIGHTING",Ze("lightIntensity","\u73AF\u5883\u706F\u5149",.2,2,.05,"\xD7")+Ze("exposure","\u753B\u9762\u66DD\u5149",.5,1.8,.05,"\xD7")+nl("viewBackground","\u573A\u666F\u5E95\u8272",[["studio","\u6D45\u8272\u6444\u5F71\u68DA"],["dark","\u6DF1\u8272\u6444\u5F71\u68DA"],["checker","\u900F\u5149\u68CB\u76D8\u683C"]])),t+=on("\u677F\u5F62\u4E0E\u6302\u5B54","GEOMETRY",Ze("width","\u6210\u54C1\u5BBD\u5EA6",50,100,1)+Ze("height","\u6210\u54C1\u9AD8\u5EA6",70,140,1)+Ze("cornerRadius","\u5706\u89D2\u534A\u5F84",0,12,.2)+nl("holeType","\u6302\u5B54\u5F62\u72B6",[["slot","\u957F\u69FD\u5B54 \xB7 \u539F\u5B9A\u7A3F"],["circle","\u5706\u5B54"]])+(Me.holeType==="slot"?Ze("holeWidth","\u957F\u69FD\u5BBD\u5EA6",12,32,.2)+Ze("holeHeight","\u957F\u69FD\u9AD8\u5EA6",2,7,.1):Ze("holeDiameter","\u5706\u5B54\u76F4\u5F84",3,8,.1))+Ze("holeY","\u5B54\u5FC3\u8DDD\u79BB\u9876\u8FB9",5,15,.2)+'<p class="hint">\u677F\u5F62\u548C\u6587\u5B57\u90FD\u4F7F\u7528\u6BEB\u7C73\u5C3A\u5BF8\u3002\u6539\u53D8\u6210\u54C1\u5C3A\u5BF8\u540E\uFF0C\u8BF7\u91CD\u65B0\u68C0\u67E5\u6587\u5B57\u548C\u7167\u7247\u7A97\u7684\u4F4D\u7F6E\u3002</p>')),Ui==="detail"&&(t+=on("\u5C5E\u4E8E\u4F60\u4EEC\u7684\u5185\u5BB9","PERSONALISE",tl("name","\u59D3\u540D \xB7 \u7559\u7A7A\u4FDD\u7559\u586B\u5199\u7EBF",12)+tl("position","\u804C\u52A1 \xB7 \u7559\u7A7A\u4FDD\u7559\u586B\u5199\u7EBF",16)+tl("slogan","\u5E95\u90E8\u4E00\u53E5\u8BDD",30)+Ze("sloganSize","\u53E3\u53F7\u5B57\u53F7",2,6,.1)+'<button class="small-btn" data-action="old-slogan">\u5207\u6362\u300C\u540C\u884C\u81F4\u8FDC\uFF0C\u5171\u8D74\u5C71\u6D77\u300D</button>'),t+=on("\u6807\u5FD7\u4E0E\u5168\u79F0\u7684\u4F4D\u7F6E","PLACEMENT",Ze("logoX","\u6807\u5FD7\u5DE6\u53F3",-10,10,.2)+Ze("logoY","\u6807\u5FD7\u4E0A\u4E0B",-8,8,.2)+Ze("assocX","\u5168\u79F0\u5DE6\u53F3",-6,6,.2)+Ze("assocY","\u5168\u79F0\u4E0A\u4E0B",-4,10,.2)+'<p class="hint">\u504F\u79FB\u6309\u6BEB\u7C73\u8BA1\u7B97\uFF0C0 \u5C31\u662F\u539F\u7A3F\u4F4D\u7F6E\u3002\u542F\u7528\u653E\u5927\u540E\u7528\u5B83\u628A\u6807\u5FD7\u548C\u540D\u79F0\u6446\u56DE\u8212\u670D\u7684\u4F4D\u7F6E\u3002</p>'),t+=on("\u7167\u7247\u900F\u660E\u7A97","CLEAR WINDOW",Ze("photoX","\u7A97\u53E3\u5DE6\u53F3",3,18,.2)+Ze("photoY","\u7A97\u53E3\u4E0A\u4E0B",20,40,.2)+Ze("photoW","\u7A97\u53E3\u5BBD\u5EA6",18,30,.2)+Ze("photoH","\u7A97\u53E3\u9AD8\u5EA6",22,38,.2)+Ze("photoRadius","\u7A97\u53E3\u5706\u89D2",0,5,.2)+Cn("showPhotoBorder","\u663E\u793A\u7167\u7247\u6846\u8FB9\u7EBF")+'<p class="hint">\u8FD9\u91CC\u4FDD\u7559\u900F\u660E\u4E9A\u514B\u529B\uFF0C\u4E0D\u753B\u5360\u4F4D\u4EBA\u50CF\uFF0C\u4E5F\u4E0D\u628A\u677F\u6750\u5207\u7A7F\u3002</p>'),t+=on("\u8BA9\u7248\u9762\u547C\u5438","LAYERS",Cn("showLogo","\u534F\u4F1A\u6807\u5FD7")+Cn("showAssociation","\u534F\u4F1A\u5168\u79F0\u4E0E\u82F1\u6587")+Cn("showFields","\u59D3\u540D\u3001\u804C\u52A1\u586B\u5199\u533A")+Cn("showSlogan","\u5E95\u90E8\u53E3\u53F7")+Cn("showStars","\u661F\u5149\u88C5\u9970")+(Me.showLogo?Ze("logoScale","\u534F\u4F1A\u6807\u5FD7\u5927\u5C0F",.6,1.8,.05,"\xD7"):"")+(Me.showAssociation?Ze("assocScale","\u5168\u79F0\u4E0E\u82F1\u6587\u5927\u5C0F",.6,1.8,.05,"\xD7"):"")+(Me.showStars?Ze("starScale","\u661F\u5149\u5927\u5C0F",.3,2,.05,"\xD7"):""))),Ge("#controls").innerHTML=t,A_()}var D_=[["#c5e7f3","#d7f4df","#eadcf2"],["#f7dfb0","#dbf0df","#b9ddea"],["#d3e6f7","#e2e3fa","#f4dce9"],["#ede7d8","#dce7cc","#abc9bb"],["#c5d1e9","#95b9d3","#d7dde3"]];function A_(){Gt("#controls [data-key]").forEach(i=>{let e=i.dataset.key;i.type==="range"?(i.addEventListener("pointerdown",()=>{Bf=JSON.stringify(Me)}),i.addEventListener("input",()=>{let t=+i.value,n=i.dataset.unit;if(i.closest(".range-field").querySelector("output").textContent=`${Of(n==="%"?t*100:t)} ${n}`,e.startsWith("char")){let s={charX:"x",charY:"y",charScale:"scale",charRotation:"rotation"}[e],r=En(Me.chars);r[Zt]||={x:0,y:0,scale:1,rotation:0},r[Zt][s]=t,Wt({chars:r},{commit:!1})}else Wt({[e]:t},{commit:!1})}),i.addEventListener("change",()=>{Me=Xc(Me),Ns(),Bf=null,zc(),vi()})):i.type==="text"?(i.addEventListener("input",()=>{Me[e]=i.value,e==="department"&&(Me.department=i.value.trim()||"\u9879\u76EE\u90E8",Zt=0),zc(),vi()}),i.addEventListener("change",()=>{Ns(),e==="department"&&Hn()})):i.addEventListener("change",()=>{let t={[e]:i.type==="checkbox"?i.checked:i.value};/^bg[123]$/.test(e)&&(t.bgMode="custom"),Wt(t,{controls:["holeType","showLogo","showAssociation","showStars","bigColorMode"].includes(e)})})}),Gt("#controls [data-layout]").forEach(i=>i.onclick=()=>{let e=i.dataset.layout,t={layout:e,chars:En(Pn.chars)};e==="horizontal"?Object.assign(t,{fontSize:17,textX:15,textY:55,leading:1,tracking:1,photoY:20,photoH:22,showFields:!1}):Object.assign(t,{fontSize:20,textX:46,textY:30,tracking:0,leading:1,photoY:Pn.photoY,photoH:Pn.photoH,showFields:!0}),Wt(t,{controls:!0})}),Gt("#controls [data-char]").forEach(i=>i.onclick=()=>{Zt=+i.dataset.char,Hn()}),Gt("#controls [data-palette]").forEach(i=>i.onclick=()=>{let[e,t,n]=D_[+i.dataset.palette];Wt({bg1:e,bg2:t,bg3:n,bgMode:"custom"},{controls:!0})}),Gt("#controls [data-action]").forEach(i=>i.onclick=()=>{let e=i.dataset.action;e==="reset-chars"&&Wt({chars:En(Pn.chars)},{controls:!0}),e==="reference-bg"&&Wt({bgMode:"reference"},{controls:!0}),e==="old-slogan"&&Wt({slogan:Me.slogan==="\u540C\u884C\u81F4\u8FDC\uFF0C\u5171\u8D74\u5C71\u6D77"?Pn.slogan:"\u540C\u884C\u81F4\u8FDC\uFF0C\u5171\u8D74\u5C71\u6D77"},{controls:!0})})}function Yc(i){Hr=i,Ge("#viewer").hidden=i!=="3d",Ge("#flat-wrap").hidden=i!=="2d",Ge("#mode3d").classList.toggle("active",i==="3d"),Ge("#mode2d").classList.toggle("active",i==="2d"),Ge("#preview-note").textContent=i==="3d"?"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53F3\u952E\u5E73\u79FB":"\u62D6\u52A8\u5927\u5B57\u5FAE\u8C03\u4F4D\u7F6E \xB7 \u8F85\u52A9\u7EBF\u4E0D\u4F1A\u5BFC\u51FA",Gt("[data-view]").forEach(e=>e.disabled=i!=="3d"),Ge("#rotate").disabled=i!=="3d",i==="2d"&&Me.autoRotate&&Wt({autoRotate:!1}),qn?.resize(),Ur()}function sl(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function I_(i){let e=4294967295;for(let t of i){e^=t;for(let n=0;n<8;n++)e=e>>>1^3988292384&-(e&1)}return(e^4294967295)>>>0}async function w_(i){let e=new Uint8Array(await i.arrayBuffer()),t=new Uint8Array(21),n=new DataView(t.buffer);n.setUint32(0,9),t.set([112,72,89,115],4),n.setUint32(8,11811),n.setUint32(12,11811),t[16]=1,n.setUint32(17,I_(t.subarray(4,17)));let s=[e.subarray(0,8)],r=8,a=!1;for(;r+12<=e.length;){let o=new DataView(e.buffer,e.byteOffset+r,4).getUint32(0),l=r+12+o,c=String.fromCharCode(...e.subarray(r+4,r+8));if(l>e.length)throw new Error("PNG \u6570\u636E\u635F\u574F");c!=="pHYs"&&s.push(e.subarray(r,l)),c==="IHDR"&&!a&&(s.push(t),a=!0),r=l}return new Blob(s,{type:"image/png"})}function Bs(i,e,{print:t=!1}={}){return new Promise((n,s)=>i.toBlob(async r=>{try{if(!r)throw new Error("\u56FE\u7247\u5BFC\u51FA\u5931\u8D25");sl(t?await w_(r):r,e),n()}catch(a){s(a)}},"image/png"))}function Wc(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d"),n=i.getContext("2d").getImageData(0,0,e.width,e.height);for(let s=0;s<n.data.length;s+=4){let r=Math.round(n.data[s+3]*Me.whiteOpacity);n.data[s]=n.data[s+1]=n.data[s+2]=r,n.data[s+3]=255}return t.putImageData(n,0,0),e}function il(i,{extend:e=!1,white:t=!1,backgroundSource:n=i}={}){if(!Ge("#bleed").checked)return i;let s=Math.round(3/25.4*300),r=document.createElement("canvas");r.width=i.width+2*s,r.height=i.height+2*s;let a=r.getContext("2d");if(t&&(a.fillStyle=`rgb(${Math.round(Me.backgroundWhite*Me.whiteOpacity*255)} ${Math.round(Me.backgroundWhite*Me.whiteOpacity*255)} ${Math.round(Me.backgroundWhite*Me.whiteOpacity*255)})`,a.fillRect(0,0,r.width,r.height)),e){let o=i.width,l=i.height,c=n;a.drawImage(c,0,0,o,1,s,0,o,s),a.drawImage(c,0,l-1,o,1,s,s+l,o,s),a.drawImage(c,0,0,1,l,0,s,s,l),a.drawImage(c,o-1,0,1,l,s+o,s,s,l),a.drawImage(c,0,0,1,1,0,0,s,s),a.drawImage(c,o-1,0,1,1,s+o,0,s,s),a.drawImage(c,0,l-1,1,1,0,s+l,s,s),a.drawImage(c,o-1,l-1,1,1,s+o,s+l,s,s)}return a.drawImage(i,s,s),r}function B_(){let{width:i,height:e,cornerRadius:t,holeType:n,holeWidth:s,holeHeight:r,holeDiameter:a,holeY:o}=Me;return`<svg xmlns="http://www.w3.org/2000/svg" width="${i}mm" height="${e}mm" viewBox="0 0 ${i} ${e}"><title>\u5DE5\u724C\u5207\u5272\u7EBF - \u6210\u54C1\u8F6E\u5ED3\u4E0E\u6302\u5B54\uFF08\u7167\u7247\u7A97\u4E0D\u5207\u5272\uFF09</title><g fill="none" stroke="#ff00ff" stroke-width="0.1"><rect x=".05" y=".05" width="${i-.1}" height="${e-.1}" rx="${t}"/>${n==="circle"?`<circle cx="${i/2}" cy="${o}" r="${a/2}"/>`:`<rect x="${(i-s)/2}" y="${o-r/2}" width="${s}" height="${r}" rx="${r/2}"/>`}</g></svg>`}async function Nf(i){try{let e=`\u6821\u534F_${Me.department}_${new Date().toISOString().slice(0,10)}`;if(i==="json"){sl(new Blob([JSON.stringify({format:"alumni-badge-studio",version:1,updatedAt:new Date().toISOString(),state:Me},null,2)],{type:"application/json"}),e+".json"),jn("\u8BBE\u8BA1\u5DF2\u4FDD\u5B58\uFF0C\u4E0B\u6B21\u53EF\u4EE5\u5BFC\u5165\u7EE7\u7EED\u4FEE\u6539");return}if(i==="scene"){if(!qn||Hr!=="3d"){jn("\u8BF7\u5148\u5207\u6362\u5230 3D \u6750\u8D28\u9884\u89C8");return}let n=await fetch(qn.snapshot());sl(await n.blob(),e+"_3D\u6548\u679C.png");return}if(i==="cut"){sl(new Blob([B_()],{type:"image/svg+xml"}),e+"_\u5207\u5272\u7EBF.svg");return}let t=el({...Me,guides:!1},qr,{widthPx:Math.round(Me.width/25.4*300)});if(i==="preview"&&await Bs(Me.showWhite?Wc(t.whiteCanvas):t.compositeCanvas,e+"_\u5E73\u9762\u9884\u89C8.png"),i==="color"&&await Bs(il(t.colorCanvas,{extend:!0,backgroundSource:t.bleedBackgroundCanvas}),e+"_\u5F69\u58A8_RGB.png",{print:!0}),i==="background"&&await Bs(il(t.backgroundCanvas,{extend:!0,backgroundSource:t.bleedBackgroundCanvas}),e+"_\u5E95\u8272_RGB.png",{print:!0}),i==="ink"&&await Bs(il(t.inkCanvas),e+"_\u6587\u5B57\u6807\u5FD7_RGB.png",{print:!0}),i==="white"&&await Bs(il(Wc(t.whiteCanvas),{white:!0}),e+"_\u767D\u58A8_\u767D\u8272\u6253\u58A8.png",{print:!0}),i==="all"){let n=document.createElement("canvas"),s=420,r=Math.round(s*Me.height/Me.width),a=36,o=48;n.width=o*2+s*5+a*4,n.height=r+160;let l=n.getContext("2d");l.fillStyle="#eef2eb",l.fillRect(0,0,n.width,n.height),l.fillStyle="#3e614a",l.font='26px "Wenkai"',l.fillText("\u6821\u53CB\u4EA4\u6D41\u53D1\u5C55\u534F\u4F1A / \u5DE5\u724C\u7CFB\u5217",o,46),Zc.forEach((c,d)=>{let u=el({...Me,department:c,guides:!1},qr,{widthPx:s});l.drawImage(u.compositeCanvas,o+d*(s+a),80,s,r),l.font='23px "Wenkai"',l.textAlign="center",l.fillStyle="#3e614a",l.fillText(c,o+d*(s+a)+s/2,r+120),l.textAlign="left"}),await Bs(n,"\u6821\u534F_\u4E94\u90E8\u95E8\u8BBE\u8BA1\u5408\u96C6.png")}jn("\u56FE\u7247\u5DF2\u5BFC\u51FA\u5230\u6D4F\u89C8\u5668\u4E0B\u8F7D\u4F4D\u7F6E")}catch(e){console.error(e),jn(`\u5BFC\u51FA\u5931\u8D25\uFF1A${e.message}`)}}function N_(){let i=Ge("#flat"),e=null;i.addEventListener("pointerdown",n=>{let s=i.getBoundingClientRect(),r=(n.clientX-s.left)/s.width*Me.width,a=(n.clientY-s.top)/s.height*Me.height,o=[...kt.charBounds].reverse().find(l=>r>=l.x&&r<=l.x+l.width&&a>=l.y&&a<=l.y+l.height);o&&(Zt=o.index,e={pointer:n.pointerId,x:n.clientX,y:n.clientY,rect:s,initial:En(Me.chars[Zt]||{x:0,y:0,scale:1,rotation:0})},i.setPointerCapture(n.pointerId),i.style.cursor="grabbing",Ui==="type"&&Hn())}),i.addEventListener("pointermove",n=>{if(!e)return;let s=En(Me.chars),r=e.initial.x+(n.clientX-e.x)/e.rect.width*Me.width,a=e.initial.y+(n.clientY-e.y)/e.rect.height*Me.height;s[Zt]={...e.initial,x:Math.max(-20,Math.min(20,r)),y:Math.max(-20,Math.min(20,a))},Wt({chars:s},{commit:!1})});function t(){e&&(e=null,i.style.cursor="grab",Ns(),Hn(),vi())}i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t)}async function F_(){try{try{let e=localStorage.getItem(Ff);e&&(Me=Xc(JSON.parse(e)))}catch{jn("\u672A\u80FD\u8BFB\u53D6\u4E0A\u6B21\u8BBE\u8BA1\uFF0C\u5DF2\u8F7D\u5165\u521D\u59CB\u7248")}vn=[JSON.stringify(Me)],jc(),Ge("#departments").innerHTML=Zc.map((e,t)=>`<button data-department="${e}"><small>${String(t+1).padStart(2,"0")}</small>${e}</button>`).join(""),Gt("#departments button").forEach(e=>e.onclick=()=>{Zt=0,Wt({department:e.dataset.department},{controls:!0})}),Gt(".tabs button").forEach(e=>e.onclick=()=>{Ui=e.dataset.tab,Gt(".tabs button").forEach(t=>t.classList.toggle("active",t===e)),Hn(),Ge("#controls").scrollTop=0}),Hn();let i=[["Jiangxi",Mf],["Alimama",Tf],["Wenkai",Lf],["Hanchan",Rf],["Smiley",Df]];await Promise.all(i.map(async([e,t])=>{let n=new FontFace(e,`url(${t})`);await n.load(),document.fonts.add(n)})),qr=await Ef(),await document.fonts.ready;try{qn=mf(Ge("#viewer"),{onError:e=>{jn(e),Ge("#mode3d").disabled=!0}}),qn.setView("threequarter")}catch{Hr="2d",Ge("#mode3d").disabled=!0,Ge("#mode3d").title="\u6B64\u6D4F\u89C8\u5668\u672A\u80FD\u542F\u7528 WebGL\uFF0C\u8BF7\u4F7F\u7528 2D \u6392\u7248"}Yc(Hr),Ge("#loading").hidden=!0,vi(),Ge("#mode3d").onclick=()=>{qn&&Yc("3d")},Ge("#mode2d").onclick=()=>Yc("2d"),Gt("[data-view]").forEach(e=>e.onclick=()=>{Wt({autoRotate:!1}),qn?.setView({angle:"threequarter",side:"edge"}[e.dataset.view]||e.dataset.view),Gt("[data-view]").forEach(t=>t.classList.toggle("active",t===e))}),Ge("#rotate").onclick=()=>Wt({autoRotate:!Me.autoRotate}),Ge("#stage-bg").onclick=()=>{let e=["studio","checker","dark"];Wt({viewBackground:e[(e.indexOf(Me.viewBackground)+1)%e.length]},{controls:Ui==="material"})},Ge("#undo").onclick=()=>Qc(-1),Ge("#redo").onclick=()=>Qc(1),document.addEventListener("keydown",e=>{e.target.matches("input,textarea,select")||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="z"&&(e.preventDefault(),Qc(e.shiftKey?1:-1)),(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"&&(e.preventDefault(),Nf("json")))}),Ge("#reset").onclick=()=>{Me=En(Pn),Zt=0,Ns(),Hn(),Ur(),vi(),jn("\u5DF2\u6062\u590D\u521D\u59CB\u8BBE\u8BA1\uFF0C\u53EF\u4EE5\u64A4\u9500")},Ge("#open-export").onclick=()=>Ge("#export-dialog").showModal(),Ge("#open-help").onclick=()=>Ge("#help-dialog").showModal(),Gt(".close-dialog").forEach(e=>e.onclick=()=>e.closest("dialog").close()),Gt("dialog").forEach(e=>e.addEventListener("click",t=>{if(t.target===e){let n=e.getBoundingClientRect();(t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom)&&e.close()}})),Gt("[data-export]").forEach(e=>e.onclick=()=>Nf(e.dataset.export)),Ge("#import-design").onclick=()=>Ge("#design-file").click(),Ge("#design-file").onchange=async e=>{let t=e.target.files[0];if(t){try{if(t.size>1024*1024)throw new Error("\u6587\u4EF6\u5927\u4E8E 1 MB\uFF0C\u8BF7\u9009\u62E9\u8BBE\u8BA1 JSON");let n=JSON.parse(await t.text());if(n.format!=="alumni-badge-studio"||n.version!==1)throw new Error("\u4E0D\u662F\u8FD9\u4E2A\u7F16\u8F91\u5668\u7684\u8BBE\u8BA1\u6587\u4EF6\uFF0C\u6216\u7248\u672C\u6682\u4E0D\u652F\u6301");Me=Xc(n.state),Zt=0,Ns(),Hn(),Ur(),vi(),jn("\u8BBE\u8BA1\u5DF2\u5BFC\u5165")}catch(n){jn(`\u5BFC\u5165\u5931\u8D25\uFF1A${n.message}`)}e.target.value=""}},N_(),window.badgeStudio={getState:()=>En(Me),getDebugInfo:()=>qn?.getDebugInfo()||{available:!1},getArtworkInfo:()=>({width:kt.colorCanvas.width,height:kt.colorCanvas.height,charBounds:En(kt.charBounds),warnings:[...kt.warnings]}),getLayerPixel:(e,t,n)=>{let s=kt[e];return!s||!e.endsWith("Canvas")?null:[...s.getContext("2d").getImageData(Math.min(s.width-1,Math.max(0,Math.floor(t/Me.width*s.width))),Math.min(s.height-1,Math.max(0,Math.floor(n/Me.height*s.height))),1,1).data]}}}catch(i){console.error(i),Ge("#loading").innerHTML=`<strong>\u6682\u65F6\u672A\u80FD\u8F7D\u5165\u8BBE\u8BA1</strong><small>${Pr(i.message)}</small><small>\u8BF7\u7528\u6700\u65B0\u7248 Chrome \u6216 Edge \u91CD\u65B0\u6253\u5F00\u8FD9\u4E2A HTML\u3002</small>`,Ge("#save-status").textContent="\u8F7D\u5165\u5931\u8D25"}}F_();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
