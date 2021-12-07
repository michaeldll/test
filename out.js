(()=>{var Kd=Object.create;var la=Object.defineProperty;var ep=Object.getOwnPropertyDescriptor;var tp=Object.getOwnPropertyNames;var np=Object.getPrototypeOf,ip=Object.prototype.hasOwnProperty;var rp=s=>la(s,"__esModule",{value:!0});var sp=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var op=(s,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of tp(e))!ip.call(s,n)&&n!=="default"&&la(s,n,{get:()=>e[n],enumerable:!(t=ep(e,n))||t.enumerable});return s},ap=s=>op(rp(la(s!=null?Kd(np(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s);var Wd=sp((Ac,Lc)=>{(function(s,e){typeof Ac=="object"&&typeof Lc!="undefined"?Lc.exports=e():typeof define=="function"&&define.amd?define(e):(s||self).virtualScroll=e()})(Ac,function(){var s=0;function e(y){return"__private_"+s+++"_"+y}function t(y,w){if(!Object.prototype.hasOwnProperty.call(y,w))throw new TypeError("attempted to use private field on non-instance");return y}function n(){}n.prototype={on:function(y,w,b){var M=this.e||(this.e={});return(M[y]||(M[y]=[])).push({fn:w,ctx:b}),this},once:function(y,w,b){var M=this;function v(){M.off(y,v),w.apply(b,arguments)}return v._=w,this.on(y,v,b)},emit:function(y){for(var w=[].slice.call(arguments,1),b=((this.e||(this.e={}))[y]||[]).slice(),M=0,v=b.length;M<v;M++)b[M].fn.apply(b[M].ctx,w);return this},off:function(y,w){var b=this.e||(this.e={}),M=b[y],v=[];if(M&&w)for(var E=0,P=M.length;E<P;E++)M[E].fn!==w&&M[E].fn._!==w&&v.push(M[E]);return v.length?b[y]=v:delete b[y],this}};var i=n;i.TinyEmitter=n;var r="onwheel"in document,o="onmousewheel"in document,a="ontouchstart"in document,l=navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,c=!!window.navigator.msPointerEnabled,u="onkeydown"in document,f=navigator.userAgent.indexOf("Firefox")>-1,h="virtualscroll",d=e("options"),m=e("el"),g=e("emitter"),_=e("event"),p=e("touchStart"),x=e("bodyTouchAction");return function(){function y(b){var M;Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object.defineProperty(this,g,{writable:!0,value:void 0}),Object.defineProperty(this,_,{writable:!0,value:void 0}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:void 0}),M=this,["_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"].forEach(function(v){M[v]=M[v].bind(M)}),t(this,m)[m]=window,b&&b.el&&(t(this,m)[m]=b.el,delete b.el),t(this,d)[d]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},b),t(this,g)[g]=new i,t(this,_)[_]={y:0,x:0,deltaX:0,deltaY:0},t(this,p)[p]={x:null,y:null},t(this,x)[x]=null,t(this,d)[d].passive!==void 0&&(this.listenerOptions={passive:t(this,d)[d].passive})}var w=y.prototype;return w._notify=function(b){var M=t(this,_)[_];M.x+=M.deltaX,M.y+=M.deltaY,t(this,g)[g].emit(h,{x:M.x,y:M.y,deltaX:M.deltaX,deltaY:M.deltaY,originalEvent:b})},w._onWheel=function(b){var M=t(this,d)[d],v=t(this,_)[_];v.deltaX=b.wheelDeltaX||-1*b.deltaX,v.deltaY=b.wheelDeltaY||-1*b.deltaY,f&&b.deltaMode===1&&(v.deltaX*=M.firefoxMultiplier,v.deltaY*=M.firefoxMultiplier),v.deltaX*=M.mouseMultiplier,v.deltaY*=M.mouseMultiplier,this._notify(b)},w._onMouseWheel=function(b){var M=t(this,_)[_];M.deltaX=b.wheelDeltaX?b.wheelDeltaX:0,M.deltaY=b.wheelDeltaY?b.wheelDeltaY:b.wheelDelta,this._notify(b)},w._onTouchStart=function(b){var M=b.targetTouches?b.targetTouches[0]:b;t(this,p)[p].x=M.pageX,t(this,p)[p].y=M.pageY},w._onTouchMove=function(b){var M=t(this,d)[d];M.preventTouch&&!b.target.classList.contains(M.unpreventTouchClass)&&b.preventDefault();var v=t(this,_)[_],E=b.targetTouches?b.targetTouches[0]:b;v.deltaX=(E.pageX-t(this,p)[p].x)*M.touchMultiplier,v.deltaY=(E.pageY-t(this,p)[p].y)*M.touchMultiplier,t(this,p)[p].x=E.pageX,t(this,p)[p].y=E.pageY,this._notify(b)},w._onKeyDown=function(b){var M=t(this,_)[_];M.deltaX=M.deltaY=0;var v=window.innerHeight-40;switch(b.keyCode){case 37:case 38:M.deltaY=t(this,d)[d].keyStep;break;case 39:case 40:M.deltaY=-t(this,d)[d].keyStep;break;case b.shiftKey:M.deltaY=v;break;case 32:M.deltaY=-v;break;default:return}this._notify(b)},w._bind=function(){r&&t(this,m)[m].addEventListener("wheel",this._onWheel,this.listenerOptions),o&&t(this,m)[m].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),a&&t(this,d)[d].useTouch&&(t(this,m)[m].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),t(this,m)[m].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),c&&l&&(t(this,x)[x]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",t(this,m)[m].addEventListener("MSPointerDown",this._onTouchStart,!0),t(this,m)[m].addEventListener("MSPointerMove",this._onTouchMove,!0)),u&&t(this,d)[d].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},w._unbind=function(){r&&t(this,m)[m].removeEventListener("wheel",this._onWheel),o&&t(this,m)[m].removeEventListener("mousewheel",this._onMouseWheel),a&&(t(this,m)[m].removeEventListener("touchstart",this._onTouchStart),t(this,m)[m].removeEventListener("touchmove",this._onTouchMove)),c&&l&&(document.body.style.msTouchAction=t(this,x)[x],t(this,m)[m].removeEventListener("MSPointerDown",this._onTouchStart,!0),t(this,m)[m].removeEventListener("MSPointerMove",this._onTouchMove,!0)),u&&t(this,d)[d].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},w.on=function(b,M){t(this,g)[g].on(h,b,M);var v=t(this,g)[g].e;v&&v[h]&&v[h].length===1&&this._bind()},w.off=function(b,M){t(this,g)[g].off(h,b,M);var v=t(this,g)[g].e;(!v[h]||v[h].length<=0)&&this._unbind()},w.destroy=function(){t(this,g)[g].off(),this._unbind()},y}()})});function Ur(s,e,t){return(1-t)*s+t*e}var ca=s=>{let e=s.fov*(Math.PI/180),t=2*Math.tan(e/2)*s.position.z,n=t*s.aspect;return{height:t,width:n}};function Pc(s){document.readyState!="loading"?s():document.addEventListener("DOMContentLoaded",e=>s())}function Os(s){let e=new Map,t={set(r,o,a){let l=r[o];r[o]=a;for(let c of e.get(o)||[])c(a,l);return!0}},n={onChange:(r,o)=>(e.has(r)||e.set(r,[]),e.get(r).push(o),()=>{let a=e.get(r),l=a.indexOf(o);a.splice(l,1),a.length===0&&e.delete(r)}),...s};return new Proxy(n,t)}function lp(){try{return document.createEvent("TouchEvent"),!0}catch(s){return!1}}function Rc(s,e){let t;return function(){let n=arguments,i=this;t||(s.apply(i,n),t=!0,setTimeout(()=>t=!1,e))}}function ua(){return lp()}function Ic(){let s=document.createElement("div");return s.style.width="100%",s.style.height="100vh",s.style.position="absolute",s.style.top="0",s.style.left="0",s.style.pointerEvents="none",s}var Dc="132";var cp=0,Fc=1,up=2;var Oc=1,hp=2,kr=3,Hr=0,lt=1,Ui=2,Bc=1;var Gn=0,Gr=1,Nc=2,zc=3,Uc=4,fp=5,ki=100,dp=101,pp=102,kc=103,Hc=104,mp=200,gp=201,xp=202,_p=203,Gc=204,Vc=205,yp=206,vp=207,bp=208,wp=209,Mp=210,Sp=0,Tp=1,Ep=2,ha=3,Ap=4,Lp=5,Cp=6,Pp=7,Bs=0,Rp=1,Ip=2,yi=0,Dp=1,Fp=2,Op=3,Bp=4,Np=5,Wc=300,Ns=301,zs=302,fa=303,da=304,Us=306,pa=307,ma=1e3,Ut=1001,ga=1002,dt=1003,qc=1004;var Xc=1005;var Zt=1006,zp=1007;var ks=1008;var Hi=1009,Up=1010,kp=1011,Hs=1012,Hp=1013,Gs=1014,vi=1015,Gi=1016,Gp=1017,Vp=1018,Wp=1019,Vr=1020,qp=1021,Vn=1022,kt=1023,Xp=1024,Yp=1025,Zp=kt,Vi=1026,Wr=1027,Jp=1028,jp=1029,$p=1030,Qp=1031,Kp=1032,em=1033,Yc=33776,Zc=33777,Jc=33778,jc=33779,$c=35840,Qc=35841,Kc=35842,eu=35843,tm=36196,tu=37492,nu=37496,nm=37808,im=37809,rm=37810,sm=37811,om=37812,am=37813,lm=37814,cm=37815,um=37816,hm=37817,fm=37818,dm=37819,pm=37820,mm=37821,gm=36492,xm=37840,_m=37841,ym=37842,vm=37843,bm=37844,wm=37845,Mm=37846,Sm=37847,Tm=37848,Em=37849,Am=37850,Lm=37851,Cm=37852,Pm=37853,Rm=2200,Im=2201,Dm=2202,Vs=2300,Ws=2301,xa=2302,Wi=2400,qi=2401,qs=2402,_a=2500,iu=2501,Fm=0;var It=3e3,Xi=3001,ya=3007,va=3002,Om=3003,ru=3004,su=3005,ou=3006,Bm=3200,Nm=3201,Yi=0,zm=1;var ba=7680;var Um=519,qr=35044,Xs=35048;var au="300 es",Wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},vt=[];for(let s=0;s<256;s++)vt[s]=(s<16?"0":"")+s.toString(16);var wa=Math.PI/180,Ma=180/Math.PI;function sn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toUpperCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function km(s,e){return(s%e+e)%e}function Sa(s,e,t){return(1-t)*s+t*e}function lu(s){return(s&s-1)==0&&s!==0}function Hm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}var $=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};$.prototype.isVector2=!0;var pt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],g=i[0],_=i[3],p=i[6],x=i[1],y=i[4],w=i[7],b=i[2],M=i[5],v=i[8];return r[0]=o*g+a*x+l*b,r[3]=o*_+a*y+l*M,r[6]=o*p+a*w+l*v,r[1]=c*g+u*x+f*b,r[4]=c*_+u*y+f*M,r[7]=c*p+u*w+f*v,r[2]=h*g+d*x+m*b,r[5]=h*_+d*y+m*M,r[8]=h*p+d*w+m*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,m=t*f+n*h+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*r+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pt.prototype.isMatrix3=!0;var Zi,bi=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Zi.width=e.width,Zi.height=e.height;let n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},Gm=0,mt=class extends Wn{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Ut,i=Ut,r=Zt,o=ks,a=kt,l=Hi,c=1,u=It){super();Object.defineProperty(this,"id",{value:Gm++}),this.uuid=sn(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=sn()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ta(i[o].image)):r.push(Ta(i[o]))}else r=Ta(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};mt.DEFAULT_IMAGE=void 0;mt.DEFAULT_MAPPING=Wc;mt.prototype.isTexture=!0;function Ta(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?bi.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xe=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,o=.01,a=.1,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-h)<o&&Math.abs(f-g)<o&&Math.abs(m-_)<o){if(Math.abs(u+h)<a&&Math.abs(f+g)<a&&Math.abs(m+_)<a&&Math.abs(c+d+p-3)<a)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,w=(d+1)/2,b=(p+1)/2,M=(u+h)/4,v=(f+g)/4,E=(m+_)/4;return y>w&&y>b?y<o?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=M/n,r=v/n):w>b?w<o?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=M/i,r=E/i):b<o?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=v/r,i=E/r),this.set(n,i,r,t),this}let x=Math.sqrt((_-m)*(_-m)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(_-m)/x,this.y=(f-g)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Xe.prototype.isVector4=!0;var on=class extends Wn{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t),this.texture=new mt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};on.prototype.isWebGLRenderTarget=!0;var cu=class extends on{constructor(e,t,n){super(e,t);let i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}};cu.prototype.isWebGLMultipleRenderTargets=!0;var Ea=class extends on{constructor(e,t,n){super(e,t,n);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};Ea.prototype.isWebGLMultisampleRenderTarget=!0;var Lt=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=r[o+0],d=r[o+1],m=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==m){let _=1-a,p=l*h+c*d+u*m+f*g,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let b=Math.sqrt(y),M=Math.atan2(b,p*x);_=Math.sin(_*M)/b,a=Math.sin(a*M)/b}let w=a*x;if(l=l*_+h*w,c=c*_+d*w,u=u*_+m*w,f=f*_+g*w,_===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*f+l*d-c*h,e[t+1]=l*m+u*h+c*f-a*d,e[t+2]=c*m+u*d+a*h-l*f,e[t+3]=u*m-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(r/2),h=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Lt.prototype.isQuaternion=!0;var L=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,f=l*i+r*n-o*t,h=-r*t-o*n-a*i;return this.x=c*l+h*-r+u*-a-f*-o,this.y=u*l+h*-o+f*-r-c*-a,this.z=f*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};L.prototype.isVector3=!0;var Aa=new L,uu=new Lt,Jt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),La.copy(t.boundingBox),La.applyMatrix4(e.matrixWorld),this.union(La));let n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xr),Xr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),Ys.subVectors(this.max,Yr),Ji.subVectors(e.a,Yr),ji.subVectors(e.b,Yr),$i.subVectors(e.c,Yr),qn.subVectors(ji,Ji),Xn.subVectors($i,ji),wi.subVectors(Ji,$i);let t=[0,-qn.z,qn.y,0,-Xn.z,Xn.y,0,-wi.z,wi.y,qn.z,0,-qn.x,Xn.z,0,-Xn.x,wi.z,0,-wi.x,-qn.y,qn.x,0,-Xn.y,Xn.x,0,-wi.y,wi.x,0];return!Ca(t,Ji,ji,$i,Ys)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,Ji,ji,$i,Ys))?!1:(Zs.crossVectors(qn,Xn),t=[Zs.x,Zs.y,Zs.z],Ca(t,Ji,ji,$i,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Xr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Xr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Jt.prototype.isBox3=!0;var En=[new L,new L,new L,new L,new L,new L,new L,new L],Xr=new L,La=new Jt,Ji=new L,ji=new L,$i=new L,qn=new L,Xn=new L,wi=new L,Yr=new L,Ys=new L,Zs=new L,Mi=new L;function Ca(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Mi.fromArray(s,r);let a=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),u=n.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Vm=new Jt,hu=new L,Pa=new L,Ra=new L,Si=class{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ra.subVectors(e,this.center);let t=Ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ra.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Pa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(hu.copy(e.center).add(Pa)),this.expandByPoint(hu.copy(e.center).sub(Pa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new L,Ia=new L,Js=new L,Yn=new L,Da=new L,js=new L,Fa=new L,Zn=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.direction).multiplyScalar(t).add(this.origin),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ia.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Ia);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Js),a=Yn.dot(this.direction),l=-Yn.dot(Js),c=Yn.lengthSq(),u=Math.abs(1-o*o),f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=r*u,f>=0)if(h>=-m)if(h<=m){let g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Js).multiplyScalar(h).add(Ia),d}intersectSphere(e,t){An.subVectors(e.center,this.origin);let n=An.dot(this.direction),i=An.dot(An)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,r){Da.subVectors(t,e),js.subVectors(n,e),Fa.crossVectors(Da,js);let o=this.direction.dot(Fa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);let l=a*this.direction.dot(js.crossVectors(Yn,js));if(l<0)return null;let c=a*this.direction.dot(Da.cross(Yn));if(c<0||l+c>o)return null;let u=-a*Yn.dot(Fa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,l,c,u,f,h,d,m,g,_){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,d=o*f,m=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,m=c*u,g=c*f;t[0]=h+g*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,m=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,m=a*u,g=a*f;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=m*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+m,t[10]=h-g*f}else if(e.order==="XZY"){let h=o*l,d=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,qm)}lookAt(e,t,n){let i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Jn.crossVectors(n,Ht),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Jn.crossVectors(n,Ht)),Jn.normalize(),$s.crossVectors(Ht,Jn),i[0]=Jn.x,i[4]=$s.x,i[8]=Ht.x,i[1]=Jn.y,i[5]=$s.y,i[9]=Ht.y,i[2]=Jn.z,i[6]=$s.z,i[10]=Ht.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],g=n[6],_=n[10],p=n[14],x=n[3],y=n[7],w=n[11],b=n[15],M=i[0],v=i[4],E=i[8],P=i[12],R=i[1],C=i[5],Y=i[9],O=i[13],B=i[2],z=i[6],F=i[10],U=i[14],Z=i[3],se=i[7],ce=i[11],J=i[15];return r[0]=o*M+a*R+l*B+c*Z,r[4]=o*v+a*C+l*z+c*se,r[8]=o*E+a*Y+l*F+c*ce,r[12]=o*P+a*O+l*U+c*J,r[1]=u*M+f*R+h*B+d*Z,r[5]=u*v+f*C+h*z+d*se,r[9]=u*E+f*Y+h*F+d*ce,r[13]=u*P+f*O+h*U+d*J,r[2]=m*M+g*R+_*B+p*Z,r[6]=m*v+g*C+_*z+p*se,r[10]=m*E+g*Y+_*F+p*ce,r[14]=m*P+g*O+_*U+p*J,r[3]=x*M+y*R+w*B+b*Z,r[7]=x*v+y*C+w*z+b*se,r[11]=x*E+y*Y+w*F+b*ce,r[15]=x*P+y*O+w*U+b*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],g=e[7],_=e[11],p=e[15];return m*(+r*l*f-i*c*f-r*a*h+n*c*h+i*a*d-n*l*d)+g*(+t*l*d-t*c*h+r*o*h-i*o*d+i*c*u-r*l*u)+_*(+t*c*f-t*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],g=e[13],_=e[14],p=e[15],x=f*_*c-g*h*c+g*l*d-a*_*d-f*l*p+a*h*p,y=m*h*c-u*_*c-m*l*d+o*_*d+u*l*p-o*h*p,w=u*g*c-m*f*c+m*a*d-o*g*d-u*a*p+o*f*p,b=m*f*l-u*g*l-m*a*h+o*g*h+u*a*_-o*f*_,M=t*x+n*y+i*w+r*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/M;return e[0]=x*v,e[1]=(g*h*r-f*_*r-g*i*d+n*_*d+f*i*p-n*h*p)*v,e[2]=(a*_*r-g*l*r+g*i*c-n*_*c-a*i*p+n*l*p)*v,e[3]=(f*l*r-a*h*r-f*i*c+n*h*c+a*i*d-n*l*d)*v,e[4]=y*v,e[5]=(u*_*r-m*h*r+m*i*d-t*_*d-u*i*p+t*h*p)*v,e[6]=(m*l*r-o*_*r-m*i*c+t*_*c+o*i*p-t*l*p)*v,e[7]=(o*h*r-u*l*r+u*i*c-t*h*c-o*i*d+t*l*d)*v,e[8]=w*v,e[9]=(m*f*r-u*g*r-m*n*d+t*g*d+u*n*p-t*f*p)*v,e[10]=(o*g*r-m*a*r+m*n*c-t*g*c-o*n*p+t*a*p)*v,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*d-t*a*d)*v,e[12]=b*v,e[13]=(u*g*i-m*f*i+m*n*h-t*g*h-u*n*_+t*f*_)*v,e[14]=(m*a*i-o*g*i-m*n*l+t*g*l+o*n*_-t*a*_)*v,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*v,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,m=r*f,g=o*u,_=o*f,p=a*f,x=l*c,y=l*u,w=l*f,b=n.x,M=n.y,v=n.z;return i[0]=(1-(g+p))*b,i[1]=(d+w)*b,i[2]=(m-y)*b,i[3]=0,i[4]=(d-w)*M,i[5]=(1-(h+p))*M,i[6]=(_+x)*M,i[7]=0,i[8]=(m+y)*v,i[9]=(_-x)*v,i[10]=(1-(h+g))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Qi.set(i[0],i[1],i[2]).length(),o=Qi.set(i[4],i[5],i[6]).length(),a=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);let c=1/r,u=1/o,f=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){let a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),f=(t+e)*l,h=(n+i)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Se.prototype.isMatrix4=!0;var Qi=new L,an=new Se,Wm=new L(0,0,0),qm=new L(1,1,1),Jn=new L,$s=new L,Ht=new L,fu=new Se,du=new Lt,Ln=class{constructor(e=0,t=0,n=0,i=Ln.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Ln.prototype.isEuler=!0;Ln.DefaultOrder="XYZ";Ln.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Oa=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},Xm=0,pu=new L,Ki=new Lt,Cn=new Se,Qs=new L,Zr=new L,Ym=new L,Zm=new Lt,mu=new L(1,0,0),gu=new L(0,1,0),xu=new L(0,0,1),Jm={type:"added"},_u={type:"removed"},Ge=class extends Wn{constructor(){super();Object.defineProperty(this,"id",{value:Xm++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DefaultUp.clone();let e=new L,t=new Ln,n=new Lt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new pt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(xu,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(xu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Zr,Qs,this.up):Cn.lookAt(Qs,Zr,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_u)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(_u)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ge.DefaultUp=new L(0,1,0);Ge.DefaultMatrixAutoUpdate=!0;Ge.prototype.isObject3D=!0;var ln=new L,Pn=new L,Ba=new L,Rn=new L,er=new L,tr=new L,yu=new L,Na=new L,za=new L,Ua=new L,it=class{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ln.subVectors(i,t),Pn.subVectors(n,t),Ba.subVectors(e,t);let o=ln.dot(ln),a=ln.dot(Pn),l=ln.dot(Ba),c=Pn.dot(Pn),u=Pn.dot(Ba),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);let h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Rn),l.set(0,0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Pn.subVectors(e,t),ln.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return it.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return it.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return it.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return it.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return it.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;er.subVectors(i,n),tr.subVectors(r,n),Na.subVectors(e,n);let l=er.dot(Na),c=tr.dot(Na);if(l<=0&&c<=0)return t.copy(n);za.subVectors(e,i);let u=er.dot(za),f=tr.dot(za);if(u>=0&&f<=u)return t.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(er,o);Ua.subVectors(e,r);let d=er.dot(Ua),m=tr.dot(Ua);if(m>=0&&d<=m)return t.copy(r);let g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(tr,a);let _=u*m-d*f;if(_<=0&&f-u>=0&&d-m>=0)return yu.subVectors(r,i),a=(f-u)/(f-u+(d-m)),t.copy(i).addScaledVector(yu,a);let p=1/(_+g+h);return o=g*p,a=h*p,t.copy(n).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jm=0,bt=class extends Wn{constructor(){super();Object.defineProperty(this,"id",{value:jm++}),this.uuid=sn(),this.name="",this.type="Material",this.fog=!0,this.blending=Gr,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.format=kt,this.transparent=!1,this.blendSrc=Gc,this.blendDst=Vc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Bc;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheenTint&&this.sheenTint.isColor&&(n.sheenTint=this.sheenTint.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(n.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(n.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(n.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==Hr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==kt&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};bt.prototype.isMaterial=!0;var vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function ka(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Ha(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ue=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=km(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=ka(r,i,e+1/3),this.g=ka(r,i,e),this.b=ka(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=vu[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){let t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),o=Math.min(t,n,i),a,l,c=(o+r)/2;if(o===r)a=0,l=0;else{let u=r-o;switch(l=c<=.5?u/(r+o):u/(2-r-o),r){case t:a=(n-i)/u+(n<i?6:0);break;case n:a=(i-t)/u+2;break;case i:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(cn),cn.h+=e,cn.s+=t,cn.l+=n,this.setHSL(cn.h,cn.s,cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Ks);let n=Sa(cn.h,Ks.h,t),i=Sa(cn.s,Ks.s,t),r=Sa(cn.l,Ks.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};ue.NAMES=vu;ue.prototype.isColor=!0;ue.prototype.r=1;ue.prototype.g=1;ue.prototype.b=1;var Ti=class extends bt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Ti.prototype.isMeshBasicMaterial=!0;var Ze=new L,eo=new $,at=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=qr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ue),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new $),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new L),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Xe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};at.prototype.isBufferAttribute=!0;var Va=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wa=class extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}},bu=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}};bu.prototype.isFloat16BufferAttribute=!0;var ct=class extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}};function wu(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}var $m=0,jt=new Se,qa=new Ge,nr=new L,Gt=new Jt,Jr=new Jt,gt=new L,Je=class extends Wn{constructor(){super();Object.defineProperty(this,"id",{value:$m++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wu(e)>65535?Wa:Va)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Gt.min,Jr.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,Jr.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(Jr.min),Gt.expandByPoint(Jr.max))}Gt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),gt.add(nr)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new at(new Float32Array(4*a),4));let l=t.tangent.array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new L,u[R]=new L;let f=new L,h=new L,d=new L,m=new $,g=new $,_=new $,p=new L,x=new L;function y(R,C,Y){f.fromArray(i,R*3),h.fromArray(i,C*3),d.fromArray(i,Y*3),m.fromArray(o,R*2),g.fromArray(o,C*2),_.fromArray(o,Y*2),h.sub(f),d.sub(f),g.sub(m),_.sub(m);let O=1/(g.x*_.y-_.x*g.y);!isFinite(O)||(p.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(O),x.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(O),c[R].add(p),c[C].add(p),c[Y].add(p),u[R].add(x),u[C].add(x),u[Y].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let R=0,C=w.length;R<C;++R){let Y=w[R],O=Y.start,B=Y.count;for(let z=O,F=O+B;z<F;z+=3)y(n[z+0],n[z+1],n[z+2])}let b=new L,M=new L,v=new L,E=new L;function P(R){v.fromArray(r,R*3),E.copy(v);let C=c[R];b.copy(C),b.sub(v.multiplyScalar(v.dot(C))).normalize(),M.crossVectors(E,C);let O=M.dot(u[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=O}for(let R=0,C=w.length;R<C;++R){let Y=w[R],O=Y.start,B=Y.count;for(let z=O,F=O+B;z<F;z+=3)P(n[z+0]),P(n[z+1]),P(n[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let h=0,d=e.count;h<d;h+=3){let m=e.getX(h+0),g=e.getX(h+1),_=e.getX(h+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let f=0,h=c;f<u;f++,h++)o[h]=l[f]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,m=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new at(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Je,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new Je().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.prototype.isBufferGeometry=!0;var Mu=new Se,ir=new Zn,Xa=new Si,jn=new L,$n=new L,Qn=new L,Ya=new L,Za=new L,Ja=new L,to=new L,no=new L,io=new L,ro=new $,so=new $,oo=new $,ja=new L,ao=new L,nt=class extends Ge{constructor(e=new Je,t=new Ti){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),e.ray.intersectsSphere(Xa)===!1)||(Mu.copy(r).invert(),ir.copy(e.ray).applyMatrix4(Mu),n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,d=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,_=d.length;g<_;g++){let p=d[g],x=i[p.materialIndex],y=Math.max(p.start,m.start),w=Math.min(p.start+p.count,m.start+m.count);for(let b=y,M=w;b<M;b+=3){let v=a.getX(b),E=a.getX(b+1),P=a.getX(b+2);o=lo(this,x,e,ir,l,c,u,f,h,v,E,P),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,x=_;p<x;p+=3){let y=a.getX(p),w=a.getX(p+1),b=a.getX(p+2);o=lo(this,i,e,ir,l,c,u,f,h,y,w,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,_=d.length;g<_;g++){let p=d[g],x=i[p.materialIndex],y=Math.max(p.start,m.start),w=Math.min(p.start+p.count,m.start+m.count);for(let b=y,M=w;b<M;b+=3){let v=b,E=b+1,P=b+2;o=lo(this,x,e,ir,l,c,u,f,h,v,E,P),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,x=_;p<x;p+=3){let y=p,w=p+1,b=p+2;o=lo(this,i,e,ir,l,c,u,f,h,y,w,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};nt.prototype.isMesh=!0;function Qm(s,e,t,n,i,r,o,a){let l;if(e.side===lt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==Ui,a),l===null)return null;ao.copy(a),ao.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:s}}function lo(s,e,t,n,i,r,o,a,l,c,u,f){jn.fromBufferAttribute(i,c),$n.fromBufferAttribute(i,u),Qn.fromBufferAttribute(i,f);let h=s.morphTargetInfluences;if(r&&h){to.set(0,0,0),no.set(0,0,0),io.set(0,0,0);for(let m=0,g=r.length;m<g;m++){let _=h[m],p=r[m];_!==0&&(Ya.fromBufferAttribute(p,c),Za.fromBufferAttribute(p,u),Ja.fromBufferAttribute(p,f),o?(to.addScaledVector(Ya,_),no.addScaledVector(Za,_),io.addScaledVector(Ja,_)):(to.addScaledVector(Ya.sub(jn),_),no.addScaledVector(Za.sub($n),_),io.addScaledVector(Ja.sub(Qn),_)))}jn.add(to),$n.add(no),Qn.add(io)}s.isSkinnedMesh&&(s.boneTransform(c,jn),s.boneTransform(u,$n),s.boneTransform(f,Qn));let d=Qm(s,e,t,n,jn,$n,Qn,ja);if(d){a&&(ro.fromBufferAttribute(a,c),so.fromBufferAttribute(a,u),oo.fromBufferAttribute(a,f),d.uv=it.getUV(ja,jn,$n,Qn,ro,so,oo,new $)),l&&(ro.fromBufferAttribute(l,c),so.fromBufferAttribute(l,u),oo.fromBufferAttribute(l,f),d.uv2=it.getUV(ja,jn,$n,Qn,ro,so,oo,new $));let m={a:c,b:u,c:f,normal:new L,materialIndex:0};it.getNormal(jn,$n,Qn,m.normal),d.face=m}return d}var rr=class extends Je{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(f,2));function m(g,_,p,x,y,w,b,M,v,E,P){let R=w/v,C=b/E,Y=w/2,O=b/2,B=M/2,z=v+1,F=E+1,U=0,Z=0,se=new L;for(let ce=0;ce<F;ce++){let J=ce*C-O;for(let ge=0;ge<z;ge++){let G=ge*R-Y;se[g]=G*x,se[_]=J*y,se[p]=B,c.push(se.x,se.y,se.z),se[g]=0,se[_]=0,se[p]=M>0?1:-1,u.push(se.x,se.y,se.z),f.push(ge/v),f.push(1-ce/E),U+=1}}for(let ce=0;ce<E;ce++)for(let J=0;J<v;J++){let ge=h+J+z*ce,G=h+J+z*(ce+1),Q=h+(J+1)+z*(ce+1),pe=h+(J+1)+z*ce;l.push(ge,G,pe),l.push(G,Q,pe),Z+=6}a.addGroup(d,Z,P),d+=Z,h+=U}}static fromJSON(e){return new rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function sr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(s){let e={};for(let t=0;t<s.length;t++){let n=sr(s[t]);for(let i in n)e[i]=n[i]}return e}var Km={clone:sr,merge:Tt},eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends bt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};$t.prototype.isShaderMaterial=!0;var co=class extends Ge{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};co.prototype.isCamera=!0;var wt=class extends co{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};wt.prototype.isPerspectiveCamera=!0;var or=90,ar=1,uo=class extends Ge{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new wt(or,ar,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);let r=new wt(or,ar,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);let o=new wt(or,ar,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);let a=new wt(or,ar,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);let l=new wt(or,ar,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);let c=new wt(or,ar,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.xr.enabled,f=e.getRenderTarget();e.xr.enabled=!1;let h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(f),e.xr.enabled=u}},jr=class extends mt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ns,a=a!==void 0?a:Vn;super(e,t,n,i,r,o,a,l,c,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};jr.prototype.isCubeTexture=!0;var $a=class extends on{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n);super(e,e,t);t=t||{},this.texture=new jr(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=kt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rr(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:lt,blending:Gn});r.uniforms.tEquirect.value=t;let o=new nt(i,r),a=t.minFilter;return t.minFilter===ks&&(t.minFilter=Zt),new uo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};$a.prototype.isWebGLCubeRenderTarget=!0;var Qa=new L,ng=new L,ig=new pt,gn=class{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Qa.subVectors(n,t).cross(ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ig.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};gn.prototype.isPlane=!0;var lr=new Si,ho=new L,$r=class{constructor(e=new gn,t=new gn,n=new gn,i=new gn,r=new gn,o=new gn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],m=n[10],g=n[11],_=n[12],p=n[13],x=n[14],y=n[15];return t[0].setComponents(a-i,f-l,g-h,y-_).normalize(),t[1].setComponents(a+i,f+l,g+h,y+_).normalize(),t[2].setComponents(a+r,f+c,g+d,y+p).normalize(),t[3].setComponents(a-r,f-c,g-d,y-p).normalize(),t[4].setComponents(a-o,f-u,g-m,y-x).normalize(),t[5].setComponents(a+o,f+u,g+m,y+x).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ho.x=i.normal.x>0?e.max.x:e.min.x,ho.y=i.normal.y>0?e.max.y:e.min.y,ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Su(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function rg(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let f=c.array,h=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,f,h),c.onUploadCallback();let m=5126;return f instanceof Float32Array?m=5126:f instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):f instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:f instanceof Int16Array?m=5122:f instanceof Uint32Array?m=5125:f instanceof Int32Array?m=5124:f instanceof Int8Array?m=5120:(f instanceof Uint8Array||f instanceof Uint8ClampedArray)&&(m=5121),{buffer:d,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){let h=u.array,d=u.updateRange;s.bindBuffer(f,c),d.count===-1?s.bufferSubData(f,0,h):(t?s.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):s.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}var In=class extends Je{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],m=[],g=[],_=[];for(let p=0;p<u;p++){let x=p*h-o;for(let y=0;y<c;y++){let w=y*f-r;m.push(w,-x,0),g.push(0,0,1),_.push(y/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let y=x+c*p,w=x+c*(p+1),b=x+1+c*(p+1),M=x+1+c*p;d.push(y,w,M),d.push(w,b,M)}this.setIndex(d),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(g,3)),this.setAttribute("uv",new ct(_,2))}static fromJSON(e){return new In(e.width,e.height,e.widthSegments,e.heightSegments)}},sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg="vec3 transformed = vec3( position );",fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotVH = saturate( dot( geometry.viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float NoH ) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float NoV, float NoL ) {
	return saturate( 1.0 / ( 4.0 * ( NoL + NoV - NoL * NoV ) ) );
}
vec3 BRDF_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,pg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mg=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Gg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wg=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xg=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in GeometricContext geometry ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,$g=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
#endif`,Qg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenTint;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( material.roughness, directLight.direction, geometry, material.sheenTint );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,n0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o0=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,d0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,p0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,g0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,D0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,O0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = transmission.a;
#endif`,q0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
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
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,X0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Y0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Z0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,J0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,j0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ox=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,dx=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,_x=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,bx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Mx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Ax=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lx=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Px=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Be={alphamap_fragment:sg,alphamap_pars_fragment:og,alphatest_fragment:ag,alphatest_pars_fragment:lg,aomap_fragment:cg,aomap_pars_fragment:ug,begin_vertex:hg,beginnormal_vertex:fg,bsdfs:dg,bumpmap_pars_fragment:pg,clipping_planes_fragment:mg,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:xg,clipping_planes_vertex:_g,color_fragment:yg,color_pars_fragment:vg,color_pars_vertex:bg,color_vertex:wg,common:Mg,cube_uv_reflection_fragment:Sg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Eg,displacementmap_vertex:Ag,emissivemap_fragment:Lg,emissivemap_pars_fragment:Cg,encodings_fragment:Pg,encodings_pars_fragment:Rg,envmap_fragment:Ig,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Fg,envmap_pars_vertex:Og,envmap_physical_pars_fragment:Xg,envmap_vertex:Bg,fog_vertex:Ng,fog_pars_vertex:zg,fog_fragment:Ug,fog_pars_fragment:kg,gradientmap_pars_fragment:Hg,lightmap_fragment:Gg,lightmap_pars_fragment:Vg,lights_lambert_vertex:Wg,lights_pars_begin:qg,lights_toon_fragment:Yg,lights_toon_pars_fragment:Zg,lights_phong_fragment:Jg,lights_phong_pars_fragment:jg,lights_physical_fragment:$g,lights_physical_pars_fragment:Qg,lights_fragment_begin:Kg,lights_fragment_maps:e0,lights_fragment_end:t0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:s0,map_fragment:o0,map_pars_fragment:a0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:h0,morphnormal_vertex:f0,morphtarget_pars_vertex:d0,morphtarget_vertex:p0,normal_fragment_begin:m0,normal_fragment_maps:g0,normal_pars_fragment:x0,normal_pars_vertex:_0,normal_vertex:y0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:M0,output_fragment:S0,packing:T0,premultiplied_alpha_fragment:E0,project_vertex:A0,dithering_fragment:L0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:R0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:D0,shadowmap_vertex:F0,shadowmask_pars_fragment:O0,skinbase_vertex:B0,skinning_pars_vertex:N0,skinning_vertex:z0,skinnormal_vertex:U0,specularmap_fragment:k0,specularmap_pars_fragment:H0,tonemapping_fragment:G0,tonemapping_pars_fragment:V0,transmission_fragment:W0,transmission_pars_fragment:q0,uv_pars_fragment:X0,uv_pars_vertex:Y0,uv_vertex:Z0,uv2_pars_fragment:J0,uv2_pars_vertex:j0,uv2_vertex:$0,worldpos_vertex:Q0,background_frag:K0,background_vert:ex,cube_frag:tx,cube_vert:nx,depth_frag:ix,depth_vert:rx,distanceRGBA_frag:sx,distanceRGBA_vert:ox,equirect_frag:ax,equirect_vert:lx,linedashed_frag:cx,linedashed_vert:ux,meshbasic_frag:hx,meshbasic_vert:fx,meshlambert_frag:dx,meshlambert_vert:px,meshmatcap_frag:mx,meshmatcap_vert:gx,meshnormal_frag:xx,meshnormal_vert:_x,meshphong_frag:yx,meshphong_vert:vx,meshphysical_frag:bx,meshphysical_vert:wx,meshtoon_frag:Mx,meshtoon_vert:Sx,points_frag:Tx,points_vert:Ex,shadow_frag:Ax,shadow_vert:Lx,sprite_frag:Cx,sprite_vert:Px},re={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pt},uv2Transform:{value:new pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}}},xn={basic:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new ue(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Tt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Tt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ue(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Tt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Tt([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Tt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Tt([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Tt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Tt([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:Tt([re.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Tt([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Tt([re.lights,re.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};xn.physical={uniforms:Tt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},sheenTint:{value:new ue(0)},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new ue(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new ue(1,1,1)},specularTintMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function Rx(s,e,t,n,i){let r=new ue(0),o=0,a,l,c=null,u=0,f=null;function h(m,g){let _=!1,p=g.isScene===!0?g.background:null;p&&p.isTexture&&(p=e.get(p));let x=s.xr,y=x.getSession&&x.getSession();y&&y.environmentBlendMode==="additive"&&(p=null),p===null?d(r,o):p&&p.isColor&&(d(p,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Us)?(l===void 0&&(l=new nt(new rr(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:sr(xn.cube.uniforms),vertexShader:xn.cube.vertexShader,fragmentShader:xn.cube.fragmentShader,side:lt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||u!==p.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,f=s.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new nt(new In(2,2),new $t({name:"BackgroundMaterial",uniforms:sr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||f!==s.toneMapping)&&(a.material.needsUpdate=!0,c=p,u=p.version,f=s.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function d(m,g){t.buffers.color.setClear(m.r,m.g,m.b,g,i)}return{getClearColor:function(){return r},setClearColor:function(m,g=1){r.set(m),o=g,d(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,d(r,o)},render:h}}function Ix(s,e,t,n){let i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null),c=l;function u(O,B,z,F,U){let Z=!1;if(o){let se=m(F,z,B);c!==se&&(c=se,h(c.object)),Z=_(F,U),Z&&p(F,U)}else{let se=B.wireframe===!0;(c.geometry!==F.id||c.program!==z.id||c.wireframe!==se)&&(c.geometry=F.id,c.program=z.id,c.wireframe=se,Z=!0)}O.isInstancedMesh===!0&&(Z=!0),U!==null&&t.update(U,34963),Z&&(v(O,B,z,F),U!==null&&s.bindBuffer(34963,t.get(U).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function h(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function d(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,B,z){let F=z.wireframe===!0,U=a[O.id];U===void 0&&(U={},a[O.id]=U);let Z=U[B.id];Z===void 0&&(Z={},U[B.id]=Z);let se=Z[F];return se===void 0&&(se=g(f()),Z[F]=se),se}function g(O){let B=[],z=[],F=[];for(let U=0;U<i;U++)B[U]=0,z[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:F,object:O,attributes:{},index:null}}function _(O,B){let z=c.attributes,F=O.attributes,U=0;for(let Z in F){let se=z[Z],ce=F[Z];if(se===void 0||se.attribute!==ce||se.data!==ce.data)return!0;U++}return c.attributesNum!==U||c.index!==B}function p(O,B){let z={},F=O.attributes,U=0;for(let Z in F){let se=F[Z],ce={};ce.attribute=se,se.data&&(ce.data=se.data),z[Z]=ce,U++}c.attributes=z,c.attributesNum=U,c.index=B}function x(){let O=c.newAttributes;for(let B=0,z=O.length;B<z;B++)O[B]=0}function y(O){w(O,0)}function w(O,B){let z=c.newAttributes,F=c.enabledAttributes,U=c.attributeDivisors;z[O]=1,F[O]===0&&(s.enableVertexAttribArray(O),F[O]=1),U[O]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,B),U[O]=B)}function b(){let O=c.newAttributes,B=c.enabledAttributes;for(let z=0,F=B.length;z<F;z++)B[z]!==O[z]&&(s.disableVertexAttribArray(z),B[z]=0)}function M(O,B,z,F,U,Z){n.isWebGL2===!0&&(z===5124||z===5125)?s.vertexAttribIPointer(O,B,z,U,Z):s.vertexAttribPointer(O,B,z,F,U,Z)}function v(O,B,z,F){if(n.isWebGL2===!1&&(O.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let U=F.attributes,Z=z.getAttributes(),se=B.defaultAttributeValues;for(let ce in Z){let J=Z[ce];if(J.location>=0){let ge=U[ce];if(ge===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(ge=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(ge=O.instanceColor)),ge!==void 0){let G=ge.normalized,Q=ge.itemSize,pe=t.get(ge);if(pe===void 0)continue;let k=pe.buffer,ye=pe.type,we=pe.bytesPerElement;if(ge.isInterleavedBufferAttribute){let he=ge.data,ie=he.stride,Pe=ge.offset;if(he&&he.isInstancedInterleavedBuffer){for(let W=0;W<J.locationSize;W++)w(J.location+W,he.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let W=0;W<J.locationSize;W++)y(J.location+W);s.bindBuffer(34962,k);for(let W=0;W<J.locationSize;W++)M(J.location+W,Q/J.locationSize,ye,G,ie*we,(Pe+Q/J.locationSize*W)*we)}else{if(ge.isInstancedBufferAttribute){for(let he=0;he<J.locationSize;he++)w(J.location+he,ge.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let he=0;he<J.locationSize;he++)y(J.location+he);s.bindBuffer(34962,k);for(let he=0;he<J.locationSize;he++)M(J.location+he,Q/J.locationSize,ye,G,Q*we,Q/J.locationSize*he*we)}}else if(se!==void 0){let G=se[ce];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(J.location,G);break;case 3:s.vertexAttrib3fv(J.location,G);break;case 4:s.vertexAttrib4fv(J.location,G);break;default:s.vertexAttrib1fv(J.location,G)}}}}b()}function E(){C();for(let O in a){let B=a[O];for(let z in B){let F=B[z];for(let U in F)d(F[U].object),delete F[U];delete B[z]}delete a[O]}}function P(O){if(a[O.id]===void 0)return;let B=a[O.id];for(let z in B){let F=B[z];for(let U in F)d(F[U].object),delete F[U];delete B[z]}delete a[O.id]}function R(O){for(let B in a){let z=a[B];if(z[O.id]===void 0)continue;let F=z[O.id];for(let U in F)d(F[U].object),delete F[U];delete z[O.id]}}function C(){Y(),c!==l&&(c=l,h(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:C,resetDefaultState:Y,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:y,disableUnusedAttributes:b}}function Dx(s,e,t,n){let i=n.isWebGL2,r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,d;if(i)h=s,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Fx(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(v){if(v==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(34930),h=s.getParameter(35660),d=s.getParameter(3379),m=s.getParameter(34076),g=s.getParameter(34921),_=s.getParameter(36347),p=s.getParameter(36348),x=s.getParameter(36349),y=h>0,w=o||e.has("OES_texture_float"),b=y&&w,M=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:b,maxSamples:M}}function Ox(s){let e=this,t=null,n=0,i=!1,r=!1,o=new gn,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){let m=f.length!==0||h||n!==0||i;return i=h,t=u(f,d,0),n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,h,d){let m=f.clippingPlanes,g=f.clipIntersection,_=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||r&&!_)r?u(null):c();else{let x=r?0:n,y=x*4,w=p.clippingState||null;l.value=w,w=u(m,h,y,d);for(let b=0;b!==y;++b)w[b]=t[b];p.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){let g=f!==null?f.length:0,_=null;if(g!==0){if(_=l.value,m!==!0||_===null){let p=d+g*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(_===null||_.length<p)&&(_=new Float32Array(p));for(let y=0,w=d;y!==g;++y,w+=4)o.copy(f[y]).applyMatrix4(x,a),o.normal.toArray(_,w),_[w+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function Bx(s){let e=new WeakMap;function t(o,a){return a===fa?o.mapping=Ns:a===da&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===fa||a===da)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=s.getRenderTarget(),u=new $a(l.height/2);return u.fromEquirectangularTexture(s,o),e.set(o,u),s.setRenderTarget(c),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var fo=class extends co{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};fo.prototype.isOrthographicCamera=!0;var Qr=class extends $t{constructor(e){super(e);this.type="RawShaderMaterial"}};Qr.prototype.isRawShaderMaterial=!0;var cr=4,Kn=8,_n=Math.pow(2,Kn),Tu=[.125,.215,.35,.446,.526,.582],Eu=Kn-cr+1+Tu.length,ur=20,yn={[It]:0,[Xi]:1,[va]:2,[ru]:3,[su]:4,[ou]:5,[ya]:6},Ka=new fo,{_lodPlanes:Kr,_sizeLods:Au,_sigmas:po}=zx(),Lu=new ue,el=null,Ei=(1+Math.sqrt(5))/2,hr=1/Ei,Cu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ei,hr),new L(0,Ei,-hr),new L(hr,0,Ei),new L(-hr,0,Ei),new L(Ei,hr,0),new L(-Ei,hr,0)],Pu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Ux(ur),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){el=this._renderer.getRenderTarget();let r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Du(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Iu(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Kr.length;e++)Kr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(el),e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e){el=this._renderer.getRenderTarget();let t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){let t={magFilter:dt,minFilter:dt,generateMipmaps:!1,type:Hi,format:Zp,encoding:Nx(e)?e.encoding:va,depthBuffer:!1},n=Ru(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Ru(t),n}_compileMaterial(e){let t=new nt(Kr[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,i){let r=90,o=1,a=new wt(r,o,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.outputEncoding,d=u.toneMapping;u.getClearColor(Lu),u.toneMapping=yi,u.outputEncoding=It,u.autoClear=!1;let m=new Ti({name:"PMREM.Background",side:lt,depthWrite:!1,depthTest:!1}),g=new nt(new rr,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Lu),_=!0);for(let x=0;x<6;x++){let y=x%3;y==0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):y==1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x])),mo(i,y*_n,x>2?_n:0,_n,_n),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.outputEncoding=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Du()):this._equirectShader==null&&(this._equirectShader=Iu());let i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new nt(Kr[0],i),o=i.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=yn[e.encoding],o.outputEncoding.value=yn[t.texture.encoding],mo(t,0,0,3*_n,2*_n),n.setRenderTarget(t),n.render(r,Ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Eu;i++){let r=Math.sqrt(po[i]*po[i]-po[i-1]*po[i-1]),o=Cu[(i-1)%Cu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new nt(Kr[i],c),h=c.uniforms,d=Au[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ur-1),g=r/m,_=isFinite(r)?1+Math.floor(u*g):ur;_>ur&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ur}`);let p=[],x=0;for(let M=0;M<ur;++M){let v=M/g,E=Math.exp(-v*v/2);p.push(E),M==0?x+=E:M<_&&(x+=2*E)}for(let M=0;M<p.length;M++)p[M]=p[M]/x;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a),h.dTheta.value=m,h.mipInt.value=Kn-n,h.inputEncoding.value=yn[e.texture.encoding],h.outputEncoding.value=yn[e.texture.encoding];let y=Au[i],w=3*Math.max(0,_n-2*y),b=(i===0?0:2*_n)+2*y*(i>Kn-cr?i-Kn+cr:0);mo(t,w,b,3*y,2*y),l.setRenderTarget(t),l.render(f,Ka)}};function Nx(s){return s===void 0||s.type!==Hi?!1:s.encoding===It||s.encoding===Xi||s.encoding===ya}function zx(){let s=[],e=[],t=[],n=Kn;for(let i=0;i<Eu;i++){let r=Math.pow(2,n);e.push(r);let o=1/r;i>Kn-cr?o=Tu[i-Kn+cr-1]:i==0&&(o=0),t.push(o);let a=1/(r-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,m=2,g=1,_=new Float32Array(d*h*f),p=new Float32Array(m*h*f),x=new Float32Array(g*h*f);for(let w=0;w<f;w++){let b=w%3*2/3-1,M=w>2?0:-1,v=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];_.set(v,d*h*w),p.set(u,m*h*w);let E=[w,w,w,w,w,w];x.set(E,g*h*w)}let y=new Je;y.setAttribute("position",new at(_,d)),y.setAttribute("uv",new at(p,m)),y.setAttribute("faceIndex",new at(x,g)),s.push(y),n>cr&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function Ru(s){let e=new on(3*_n,3*_n,s);return e.texture.mapping=Us,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function mo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ux(s){let e=new Float32Array(s),t=new L(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:yn[It]},outputEncoding:{value:yn[It]}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${nl()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Iu(){let s=new $(1,1);return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:yn[It]},outputEncoding:{value:yn[It]}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${nl()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Du(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:yn[It]},outputEncoding:{value:yn[It]}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${nl()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function tl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nl(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function kx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let l=a.mapping,c=l===fa||l===da,u=l===Ns||l===zs;if(c||u){if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){let h=s.getRenderTarget();t===null&&(t=new Pu(s));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),s.setRenderTarget(h),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gx(s,e,t,n){let i={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete i[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let m in h)e.update(h[m],34962);let d=f.morphAttributes;for(let m in d){let g=d[m];for(let _=0,p=g.length;_<p;_++)e.update(g[_],34962)}}function c(f){let h=[],d=f.index,m=f.attributes.position,g=0;if(d!==null){let x=d.array;g=d.version;for(let y=0,w=x.length;y<w;y+=3){let b=x[y+0],M=x[y+1],v=x[y+2];h.push(b,M,M,v,v,b)}}else{let x=m.array;g=m.version;for(let y=0,w=x.length/3-1;y<w;y+=3){let b=y+0,M=y+1,v=y+2;h.push(b,M,M,v,v,b)}}let _=new(wu(h)>65535?Wa:Va)(h,1);_.version=g;let p=r.get(f);p&&e.remove(p),r.set(f,_)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Vx(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){s.drawElements(r,d,a,h*l),t.update(d,r,1)}function f(h,d,m){if(m===0)return;let g,_;if(i)g=s,_="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](r,d,a,h*l,m),t.update(d,r,m)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Wx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qx(s,e){return s[0]-e[0]}function Xx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Yx(s){let e={},t=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,o,a,l){let c=r.morphTargetInfluences,u=c===void 0?0:c.length,f=e[o.id];if(f===void 0||f.length!==u){f=[];for(let _=0;_<u;_++)f[_]=[_,0];e[o.id]=f}for(let _=0;_<u;_++){let p=f[_];p[0]=_,p[1]=c[_]}f.sort(Xx);for(let _=0;_<8;_++)_<u&&f[_][1]?(n[_][0]=f[_][0],n[_][1]=f[_][1]):(n[_][0]=Number.MAX_SAFE_INTEGER,n[_][1]=0);n.sort(qx);let h=o.morphAttributes.position,d=o.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let p=n[_],x=p[0],y=p[1];x!==Number.MAX_SAFE_INTEGER&&y?(h&&o.getAttribute("morphTarget"+_)!==h[x]&&o.setAttribute("morphTarget"+_,h[x]),d&&o.getAttribute("morphNormal"+_)!==d[x]&&o.setAttribute("morphNormal"+_,d[x]),t[_]=y,m+=y):(h&&o.hasAttribute("morphTarget"+_)===!0&&o.deleteAttribute("morphTarget"+_),d&&o.hasAttribute("morphNormal"+_)===!0&&o.deleteAttribute("morphNormal"+_),t[_]=0)}let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",t)}return{update:i}}function Zx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var il=class extends mt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};il.prototype.isDataTexture2DArray=!0;var rl=class extends mt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};rl.prototype.isDataTexture3D=!0;var Fu=new mt,Jx=new il,jx=new rl,Ou=new jr,Bu=[],Nu=[],zu=new Float32Array(16),Uu=new Float32Array(9),ku=new Float32Array(4);function fr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Bu[i];if(r===void 0&&(r=new Float32Array(i),Bu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Et(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Hu(s,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $x(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),Et(t,e)}}function Kx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),Et(t,e)}}function e_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),Et(t,e)}}function t_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,n))return;ku.set(n),s.uniformMatrix2fv(this.addr,!1,ku),Et(t,n)}}function n_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,n))return;Uu.set(n),s.uniformMatrix3fv(this.addr,!1,Uu),Et(t,n)}}function i_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,n))return;zu.set(n),s.uniformMatrix4fv(this.addr,!1,zu),Et(t,n)}}function r_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function s_(s,e){let t=this.cache;Ct(t,e)||(s.uniform2iv(this.addr,e),Et(t,e))}function o_(s,e){let t=this.cache;Ct(t,e)||(s.uniform3iv(this.addr,e),Et(t,e))}function a_(s,e){let t=this.cache;Ct(t,e)||(s.uniform4iv(this.addr,e),Et(t,e))}function l_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function c_(s,e){let t=this.cache;Ct(t,e)||(s.uniform2uiv(this.addr,e),Et(t,e))}function u_(s,e){let t=this.cache;Ct(t,e)||(s.uniform3uiv(this.addr,e),Et(t,e))}function h_(s,e){let t=this.cache;Ct(t,e)||(s.uniform4uiv(this.addr,e),Et(t,e))}function f_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Fu,i)}function d_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jx,i)}function p_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Ou,i)}function m_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jx,i)}function g_(s){switch(s){case 5126:return $x;case 35664:return Qx;case 35665:return Kx;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return r_;case 35667:case 35671:return s_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return u_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function x_(s,e){s.uniform1fv(this.addr,e)}function __(s,e){let t=fr(e,this.size,2);s.uniform2fv(this.addr,t)}function y_(s,e){let t=fr(e,this.size,3);s.uniform3fv(this.addr,t)}function v_(s,e){let t=fr(e,this.size,4);s.uniform4fv(this.addr,t)}function b_(s,e){let t=fr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function w_(s,e){let t=fr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function M_(s,e){let t=fr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function S_(s,e){s.uniform1iv(this.addr,e)}function T_(s,e){s.uniform2iv(this.addr,e)}function E_(s,e){s.uniform3iv(this.addr,e)}function A_(s,e){s.uniform4iv(this.addr,e)}function L_(s,e){s.uniform1uiv(this.addr,e)}function C_(s,e){s.uniform2uiv(this.addr,e)}function P_(s,e){s.uniform3uiv(this.addr,e)}function R_(s,e){s.uniform4uiv(this.addr,e)}function I_(s,e,t){let n=e.length,i=Hu(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||Fu,i[r])}function D_(s,e,t){let n=e.length,i=Hu(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||Ou,i[r])}function F_(s){switch(s){case 5126:return x_;case 35664:return __;case 35665:return y_;case 35666:return v_;case 35674:return b_;case 35675:return w_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return T_;case 35668:case 35672:return E_;case 35669:case 35673:return A_;case 5125:return L_;case 36294:return C_;case 36295:return P_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35680:case 36300:case 36308:case 36293:return D_}}function O_(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=g_(e.type)}function Gu(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=F_(e.type)}Gu.prototype.updateCache=function(s){let e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),Et(e,s)};function Vu(s){this.id=s,this.seq=[],this.map={}}Vu.prototype.setValue=function(s,e,t){let n=this.seq;for(let i=0,r=n.length;i!==r;++i){let o=n[i];o.setValue(s,e[o.id],t)}};var sl=/(\w+)(\])?(\[|\.)?/g;function Wu(s,e){s.seq.push(e),s.map[e.id]=e}function B_(s,e,t){let n=s.name,i=n.length;for(sl.lastIndex=0;;){let r=sl.exec(n),o=sl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wu(t,c===void 0?new O_(a,s,e):new Gu(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new Vu(a),Wu(t,f)),t=f}}}function ei(s,e){this.seq=[],this.map={};let t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);B_(i,r,this)}}ei.prototype.setValue=function(s,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(s,t,n)};ei.prototype.setOptional=function(s,e,t){let n=e[t];n!==void 0&&this.setValue(s,t,n)};ei.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){let o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,n)}};ei.seqWithValue=function(s,e){let t=[];for(let n=0,i=s.length;n!==i;++n){let r=s[n];r.id in e&&t.push(r)}return t};function qu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var N_=0;function z_(s){let e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Xu(s){switch(s){case It:return["Linear","( value )"];case Xi:return["sRGB","( value )"];case va:return["RGBE","( value )"];case ru:return["RGBM","( value, 7.0 )"];case su:return["RGBM","( value, 16.0 )"];case ou:return["RGBD","( value, 256.0 )"];case ya:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Om:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Yu(s,e,t){let n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+z_(s.getShaderSource(e))}function dr(s,e){let t=Xu(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function U_(s,e){let t=Xu(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function k_(s,e){let t;switch(e){case Dp:t="Linear";break;case Fp:t="Reinhard";break;case Op:t="OptimizedCineon";break;case Bp:t="ACESFilmic";break;case Np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function H_(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(es).join(`
`)}function G_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V_(s,e){let t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function es(s){return s!==""}function Zu(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var W_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(s){return s.replace(W_,q_)}function q_(s,e){let t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ol(t)}var X_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(s){return s.replace(Y_,$u).replace(X_,Z_)}function Z_(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),$u(s,e,t,n)}function $u(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function J_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kr&&(e="SHADOWMAP_TYPE_VSM"),e}function j_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case zs:e="ENVMAP_TYPE_CUBE";break;case Us:case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:case pa:e="ENVMAP_MODE_REFRACTION";break}return e}function Q_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bs:e="ENVMAP_BLENDING_MULTIPLY";break;case Rp:e="ENVMAP_BLENDING_MIX";break;case Ip:e="ENVMAP_BLENDING_ADD";break}return e}function K_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=J_(t),c=j_(t),u=$_(t),f=Q_(t),h=s.gammaFactor>0?s.gammaFactor:1,d=t.isWebGL2?"":H_(t),m=G_(r),g=i.createProgram(),_,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[m].filter(es).join(`
`),_.length>0&&(_+=`
`),p=[d,m].filter(es).join(`
`),p.length>0&&(p+=`
`)):(_=[Qu(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[d,Qu(t),"#define SHADER_NAME "+t.shaderName,m,"#define GAMMA_FACTOR "+h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheenTint?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Be.tonemapping_pars_fragment:"",t.toneMapping!==yi?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Vn?"#define OPAQUE":"",Be.encodings_pars_fragment,t.map?dr("mapTexelToLinear",t.mapEncoding):"",t.matcap?dr("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?dr("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?dr("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?dr("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?dr("lightMapTexelToLinear",t.lightMapEncoding):"",U_("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),o=ol(o),o=Zu(o,t),o=Ju(o,t),a=ol(a),a=Zu(a,t),a=Ju(a,t),o=ju(o),a=ju(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===au?"":"out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=x+_+o,w=x+p+a,b=qu(i,35633,y),M=qu(i,35632,w);if(i.attachShader(g,b),i.attachShader(g,M),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){let P=i.getProgramInfoLog(g).trim(),R=i.getShaderInfoLog(b).trim(),C=i.getShaderInfoLog(M).trim(),Y=!0,O=!0;if(i.getProgramParameter(g,35714)===!1){Y=!1;let B=Yu(i,b,"vertex"),z=Yu(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+P+`
`+B+`
`+z)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(R===""||C==="")&&(O=!1);O&&(this.diagnostics={runnable:Y,programLog:P,vertexShader:{log:R,prefix:_},fragmentShader:{log:C,prefix:p}})}i.deleteShader(b),i.deleteShader(M);let v;this.getUniforms=function(){return v===void 0&&(v=new ei(i,g)),v};let E;return this.getAttributes=function(){return E===void 0&&(E=V_(i,g)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=N_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=M,this}function ey(s,e,t,n,i,r,o){let a=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.floatVertexTextures,f=i.maxVertexUniforms,h=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheenTint","transmission","transmissionMap","thicknessMap"];function _(v){let P=v.skeleton.bones;if(u)return 1024;{let C=Math.floor((f-20)/4),Y=Math.min(C,P.length);return Y<P.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+P.length+" bones. This GPU supports "+Y+"."),0):Y}}function p(v){let E;return v&&v.isTexture?E=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),E=v.texture.encoding):E=It,E}function x(v,E,P,R,C){let Y=R.fog,O=v.isMeshStandardMaterial?R.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||O),z=m[v.type],F=C.isSkinnedMesh?_(C):0;v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let U,Z;if(z){let G=xn[z];U=G.vertexShader,Z=G.fragmentShader}else U=v.vertexShader,Z=v.fragmentShader;let se=s.getRenderTarget(),ce=v.alphaTest>0,J=v.clearcoat>0;return{isWebGL2:l,shaderID:z,shaderName:v.type,vertexShader:U,fragmentShader:Z,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:C.isInstancedMesh===!0,instancingColor:C.isInstancedMesh===!0&&C.instanceColor!==null,supportsVertexTextures:h,outputEncoding:se!==null?p(se.texture):s.outputEncoding,map:!!v.map,mapEncoding:p(v.map),matcap:!!v.matcap,matcapEncoding:p(v.matcap),envMap:!!B,envMapMode:B&&B.mapping,envMapEncoding:p(B),envMapCubeUV:!!B&&(B.mapping===Us||B.mapping===pa),lightMap:!!v.lightMap,lightMapEncoding:p(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:p(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===zm,tangentSpaceNormalMap:v.normalMapType===Yi,clearcoat:J,clearcoatMap:J&&!!v.clearcoatMap,clearcoatRoughnessMap:J&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:J&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularTintMap:!!v.specularTintMap,specularTintMapEncoding:p(v.specularTintMap),alphaMap:!!v.alphaMap,alphaTest:ce,gradientMap:!!v.gradientMap,sheenTint:!!v.sheenTint&&(v.sheenTint.r>0||v.sheenTint.g>0||v.sheenTint.b>0),transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!C.geometry&&!!C.geometry.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.geometry&&!!C.geometry.attributes.color&&C.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularTintMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularTintMap)&&!!v.displacementMap,fog:!!Y,useFog:v.fog,fogExp2:Y&&Y.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:C.isSkinnedMesh===!0&&F>0,maxBones:F,useVertexTexture:u,morphTargets:!!C.geometry&&!!C.geometry.morphAttributes.position,morphNormals:!!C.geometry&&!!C.geometry.morphAttributes.normal,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:v.format,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:yi,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ui,flipSided:v.side===lt,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function y(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.fragmentShader),E.push(v.vertexShader)),v.defines!==void 0)for(let P in v.defines)E.push(P),E.push(v.defines[P]);if(v.isRawShaderMaterial===!1){for(let P=0;P<g.length;P++)E.push(v[g[P]]);E.push(s.outputEncoding),E.push(s.gammaFactor)}return E.push(v.customProgramCacheKey),E.join()}function w(v){let E=m[v.type],P;if(E){let R=xn[E];P=Km.clone(R.uniforms)}else P=v.uniforms;return P}function b(v,E){let P;for(let R=0,C=a.length;R<C;R++){let Y=a[R];if(Y.cacheKey===E){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new K_(s,E,v,r),a.push(P)),P}function M(v){if(--v.usedTimes==0){let E=a.indexOf(v);a[E]=a[a.length-1],a.pop(),v.destroy()}}return{getParameters:x,getProgramCacheKey:y,getUniforms:w,acquireProgram:b,releaseProgram:M,programs:a}}function ty(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ny(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ku(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function eh(s){let e=[],t=0,n=[],i=[],r=[],o={id:-1};function a(){t=0,n.length=0,i.length=0,r.length=0}function l(d,m,g,_,p,x){let y=e[t],w=s.get(g);return y===void 0?(y={id:d.id,object:d,geometry:m,material:g,program:w.program||o,groupOrder:_,renderOrder:d.renderOrder,z:p,group:x},e[t]=y):(y.id=d.id,y.object=d,y.geometry=m,y.material=g,y.program=w.program||o,y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=p,y.group=x),t++,y}function c(d,m,g,_,p,x){let y=l(d,m,g,_,p,x);g.transmission>0?i.push(y):g.transparent===!0?r.push(y):n.push(y)}function u(d,m,g,_,p,x){let y=l(d,m,g,_,p,x);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):n.unshift(y)}function f(d,m){n.length>1&&n.sort(d||ny),i.length>1&&i.sort(m||Ku),r.length>1&&r.sort(m||Ku)}function h(){for(let d=t,m=e.length;d<m;d++){let g=e[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:c,unshift:u,finish:h,sort:f}}function iy(s){let e=new WeakMap;function t(i,r){let o;return e.has(i)===!1?(o=new eh(s),e.set(i,[o])):r>=e.get(i).length?(o=new eh(s),e.get(i).push(o)):o=e.get(i)[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function ry(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ue};break;case"SpotLight":t={position:new L,direction:new L,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function sy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var oy=0;function ay(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function ly(s,e){let t=new ry,n=sy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new L);let r=new L,o=new Se,a=new Se;function l(u,f){let h=0,d=0,m=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let g=0,_=0,p=0,x=0,y=0,w=0,b=0,M=0;u.sort(ay);let v=f!==!0?Math.PI:1;for(let P=0,R=u.length;P<R;P++){let C=u[P],Y=C.color,O=C.intensity,B=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=Y.r*O*v,d+=Y.g*O*v,m+=Y.b*O*v;else if(C.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],O);else if(C.isDirectionalLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity*v),C.castShadow){let U=C.shadow,Z=n.get(C);Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,i.directionalShadow[g]=Z,i.directionalShadowMap[g]=z,i.directionalShadowMatrix[g]=C.shadow.matrix,w++}i.directional[g]=F,g++}else if(C.isSpotLight){let F=t.get(C);if(F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(Y).multiplyScalar(O*v),F.distance=B,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,C.castShadow){let U=C.shadow,Z=n.get(C);Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=z,i.spotShadowMatrix[p]=C.shadow.matrix,M++}i.spot[p]=F,p++}else if(C.isRectAreaLight){let F=t.get(C);F.color.copy(Y).multiplyScalar(O),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[x]=F,x++}else if(C.isPointLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity*v),F.distance=C.distance,F.decay=C.decay,C.castShadow){let U=C.shadow,Z=n.get(C);Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,Z.shadowCameraNear=U.camera.near,Z.shadowCameraFar=U.camera.far,i.pointShadow[_]=Z,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=C.shadow.matrix,b++}i.point[_]=F,_++}else if(C.isHemisphereLight){let F=t.get(C);F.skyColor.copy(C.color).multiplyScalar(O*v),F.groundColor.copy(C.groundColor).multiplyScalar(O*v),i.hemi[y]=F,y++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=m;let E=i.hash;(E.directionalLength!==g||E.pointLength!==_||E.spotLength!==p||E.rectAreaLength!==x||E.hemiLength!==y||E.numDirectionalShadows!==w||E.numPointShadows!==b||E.numSpotShadows!==M)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=x,i.point.length=_,i.hemi.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotShadowMatrix.length=M,E.directionalLength=g,E.pointLength=_,E.spotLength=p,E.rectAreaLength=x,E.hemiLength=y,E.numDirectionalShadows=w,E.numPointShadows=b,E.numSpotShadows=M,i.version=oy++)}function c(u,f){let h=0,d=0,m=0,g=0,_=0,p=f.matrixWorldInverse;for(let x=0,y=u.length;x<y;x++){let w=u[x];if(w.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),h++}else if(w.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(w.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(w.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let b=i.hemi[_];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(p),b.direction.normalize(),_++}}}return{setup:l,setupView:c,state:i}}function th(s,e){let t=new ly(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cy(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new th(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new th(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var al=class extends bt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};al.prototype.isMeshDepthMaterial=!0;var ll=class extends bt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ll.prototype.isMeshDistanceMaterial=!0;var uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function nh(s,e,t){let n=new $r,i=new $,r=new $,o=new Xe,a=new al({depthPacking:Nm}),l=new ll,c={},u=t.maxTextureSize,f={0:lt,1:Hr,2:Ui},h=new $t({uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4},samples:{value:8}},vertexShader:hy,fragmentShader:uy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new Je;m.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new nt(m,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc,this.render=function(w,b,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;let v=s.getRenderTarget(),E=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),R=s.state;R.setBlending(Gn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let C=0,Y=w.length;C<Y;C++){let O=w[C],B=O.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let z=B.getFrameExtents();if(i.multiply(z),r.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/z.x),i.x=r.x*z.x,B.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/z.y),i.y=r.y*z.y,B.mapSize.y=r.y)),B.map===null&&!B.isPointLightShadow&&this.type===kr){let U={minFilter:Zt,magFilter:Zt,format:kt};B.map=new on(i.x,i.y,U),B.map.texture.name=O.name+".shadowMap",B.mapPass=new on(i.x,i.y,U),B.camera.updateProjectionMatrix()}if(B.map===null){let U={minFilter:dt,magFilter:dt,format:kt};B.map=new on(i.x,i.y,U),B.map.texture.name=O.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();let F=B.getViewportCount();for(let U=0;U<F;U++){let Z=B.getViewport(U);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),R.viewport(o),B.updateMatrices(O,U),n=B.getFrustum(),y(b,M,B.camera,O,this.type)}!B.isPointLightShadow&&this.type===kr&&p(B,M),B.needsUpdate=!1}_.needsUpdate=!1,s.setRenderTarget(v,E,P)};function p(w,b){let M=e.update(g);h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,h.uniforms.samples.value=w.blurSamples,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,M,h,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,d.uniforms.samples.value=w.blurSamples,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,M,d,g,null)}function x(w,b,M,v,E,P,R){let C=null,Y=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(Y!==void 0?C=Y:C=v.isPointLight===!0?l:a,s.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){let O=C.uuid,B=M.uuid,z=c[O];z===void 0&&(z={},c[O]=z);let F=z[B];F===void 0&&(F=C.clone(),z[B]=F),C=F}return C.visible=M.visible,C.wireframe=M.wireframe,R===kr?C.side=M.shadowSide!==null?M.shadowSide:M.side:C.side=M.shadowSide!==null?M.shadowSide:f[M.side],C.alphaMap=M.alphaMap,C.alphaTest=M.alphaTest,C.clipShadows=M.clipShadows,C.clippingPlanes=M.clippingPlanes,C.clipIntersection=M.clipIntersection,C.displacementMap=M.displacementMap,C.displacementScale=M.displacementScale,C.displacementBias=M.displacementBias,C.wireframeLinewidth=M.wireframeLinewidth,C.linewidth=M.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(v.matrixWorld),C.nearDistance=E,C.farDistance=P),C}function y(w,b,M,v,E){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===kr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let C=e.update(w),Y=w.material;if(Array.isArray(Y)){let O=C.groups;for(let B=0,z=O.length;B<z;B++){let F=O[B],U=Y[F.materialIndex];if(U&&U.visible){let Z=x(w,C,U,v,M.near,M.far,E);s.renderBufferDirect(M,null,C,Z,w,F)}}}else if(Y.visible){let O=x(w,C,Y,v,M.near,M.far,E);s.renderBufferDirect(M,null,C,O,w,null)}}let R=w.children;for(let C=0,Y=R.length;C<Y;C++)y(R[C],b,M,v,E)}}function fy(s,e,t){let n=t.isWebGL2;function i(){let I=!1,le=new Xe,q=null,de=new Xe(0,0,0,0);return{setMask:function(me){q!==me&&!I&&(s.colorMask(me,me,me,me),q=me)},setLocked:function(me){I=me},setClear:function(me,Fe,ht,st,dn){dn===!0&&(me*=st,Fe*=st,ht*=st),le.set(me,Fe,ht,st),de.equals(le)===!1&&(s.clearColor(me,Fe,ht,st),de.copy(le))},reset:function(){I=!1,q=null,de.set(-1,0,0,0)}}}function r(){let I=!1,le=null,q=null,de=null;return{setTest:function(me){me?Q(2929):pe(2929)},setMask:function(me){le!==me&&!I&&(s.depthMask(me),le=me)},setFunc:function(me){if(q!==me){if(me)switch(me){case Sp:s.depthFunc(512);break;case Tp:s.depthFunc(519);break;case Ep:s.depthFunc(513);break;case ha:s.depthFunc(515);break;case Ap:s.depthFunc(514);break;case Lp:s.depthFunc(518);break;case Cp:s.depthFunc(516);break;case Pp:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);q=me}},setLocked:function(me){I=me},setClear:function(me){de!==me&&(s.clearDepth(me),de=me)},reset:function(){I=!1,le=null,q=null,de=null}}}function o(){let I=!1,le=null,q=null,de=null,me=null,Fe=null,ht=null,st=null,dn=null;return{setTest:function(je){I||(je?Q(2960):pe(2960))},setMask:function(je){le!==je&&!I&&(s.stencilMask(je),le=je)},setFunc:function(je,pn,zt){(q!==je||de!==pn||me!==zt)&&(s.stencilFunc(je,pn,zt),q=je,de=pn,me=zt)},setOp:function(je,pn,zt){(Fe!==je||ht!==pn||st!==zt)&&(s.stencilOp(je,pn,zt),Fe=je,ht=pn,st=zt)},setLocked:function(je){I=je},setClear:function(je){dn!==je&&(s.clearStencil(je),dn=je)},reset:function(){I=!1,le=null,q=null,de=null,me=null,Fe=null,ht=null,st=null,dn=null}}}let a=new i,l=new r,c=new o,u={},f=null,h={},d=null,m=!1,g=null,_=null,p=null,x=null,y=null,w=null,b=null,M=!1,v=null,E=null,P=null,R=null,C=null,Y=s.getParameter(35661),O=!1,B=0,z=s.getParameter(7938);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=B>=2);let F=null,U={},Z=s.getParameter(3088),se=s.getParameter(2978),ce=new Xe().fromArray(Z),J=new Xe().fromArray(se);function ge(I,le,q){let de=new Uint8Array(4),me=s.createTexture();s.bindTexture(I,me),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let Fe=0;Fe<q;Fe++)s.texImage2D(le+Fe,0,6408,1,1,0,6408,5121,de);return me}let G={};G[3553]=ge(3553,3553,1),G[34067]=ge(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(2929),l.setFunc(ha),K(!1),ne(Fc),Q(2884),Pe(Gn);function Q(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function pe(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function k(I){I!==f&&(s.bindFramebuffer(36160,I),f=I)}function ye(I,le){return le===null&&f!==null&&(le=f),h[I]!==le?(s.bindFramebuffer(I,le),h[I]=le,n&&(I===36009&&(h[36160]=le),I===36160&&(h[36009]=le)),!0):!1}function we(I){return d!==I?(s.useProgram(I),d=I,!0):!1}let he={[ki]:32774,[dp]:32778,[pp]:32779};if(n)he[kc]=32775,he[Hc]=32776;else{let I=e.get("EXT_blend_minmax");I!==null&&(he[kc]=I.MIN_EXT,he[Hc]=I.MAX_EXT)}let ie={[mp]:0,[gp]:1,[xp]:768,[Gc]:770,[Mp]:776,[bp]:774,[yp]:772,[_p]:769,[Vc]:771,[wp]:775,[vp]:773};function Pe(I,le,q,de,me,Fe,ht,st){if(I===Gn){m===!0&&(pe(3042),m=!1);return}if(m===!1&&(Q(3042),m=!0),I!==fp){if(I!==g||st!==M){if((_!==ki||y!==ki)&&(s.blendEquation(32774),_=ki,y=ki),st)switch(I){case Gr:s.blendFuncSeparate(1,771,1,771);break;case Nc:s.blendFunc(1,1);break;case zc:s.blendFuncSeparate(0,0,769,771);break;case Uc:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Gr:s.blendFuncSeparate(770,771,1,771);break;case Nc:s.blendFunc(770,1);break;case zc:s.blendFunc(0,769);break;case Uc:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,x=null,w=null,b=null,g=I,M=st}return}me=me||le,Fe=Fe||q,ht=ht||de,(le!==_||me!==y)&&(s.blendEquationSeparate(he[le],he[me]),_=le,y=me),(q!==p||de!==x||Fe!==w||ht!==b)&&(s.blendFuncSeparate(ie[q],ie[de],ie[Fe],ie[ht]),p=q,x=de,w=Fe,b=ht),g=I,M=null}function W(I,le){I.side===Ui?pe(2884):Q(2884);let q=I.side===lt;le&&(q=!q),K(q),I.blending===Gr&&I.transparent===!1?Pe(Gn):Pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let de=I.stencilWrite;c.setTest(de),de&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Q(32926):pe(32926)}function K(I){v!==I&&(I?s.frontFace(2304):s.frontFace(2305),v=I)}function ne(I){I!==cp?(Q(2884),I!==E&&(I===Fc?s.cullFace(1029):I===up?s.cullFace(1028):s.cullFace(1032))):pe(2884),E=I}function xe(I){I!==P&&(O&&s.lineWidth(I),P=I)}function ae(I,le,q){I?(Q(32823),(R!==le||C!==q)&&(s.polygonOffset(le,q),R=le,C=q)):pe(32823)}function A(I){I?Q(3089):pe(3089)}function T(I){I===void 0&&(I=33984+Y-1),F!==I&&(s.activeTexture(I),F=I)}function V(I,le){F===null&&T();let q=U[F];q===void 0&&(q={type:void 0,texture:void 0},U[F]=q),(q.type!==I||q.texture!==le)&&(s.bindTexture(I,le||G[I]),q.type=I,q.texture=le)}function X(){let I=U[F];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function oe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(I){ce.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ce.copy(I))}function Ae(I){J.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function _e(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},F=null,U={},f=null,h={},d=null,m=!1,g=null,_=null,p=null,x=null,y=null,w=null,b=null,M=!1,v=null,E=null,P=null,R=null,C=null,ce.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Q,disable:pe,bindFramebuffer:ye,bindXRFramebuffer:k,useProgram:we,setBlending:Pe,setMaterial:W,setFlipSided:K,setCullFace:ne,setLineWidth:xe,setPolygonOffset:ae,setScissorTest:A,activeTexture:T,bindTexture:V,unbindTexture:X,compressedTexImage2D:oe,texImage2D:fe,texImage3D:Me,scissor:ve,viewport:Ae,reset:_e}}function dy(s,e,t,n,i,r,o){let a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=new WeakMap,d,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function g(A,T){return m?new OffscreenCanvas(A,T):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function _(A,T,V,X){let oe=1;if((A.width>X||A.height>X)&&(oe=X/Math.max(A.width,A.height)),oe<1||T===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let fe=T?Hm:Math.floor,Me=fe(oe*A.width),ve=fe(oe*A.height);d===void 0&&(d=g(Me,ve));let Ae=V?g(Me,ve):d;return Ae.width=Me,Ae.height=ve,Ae.getContext("2d").drawImage(A,0,0,Me,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+ve+")."),Ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return lu(A.width)&&lu(A.height)}function x(A){return a?!1:A.wrapS!==Ut||A.wrapT!==Ut||A.minFilter!==dt&&A.minFilter!==Zt}function y(A,T){return A.generateMipmaps&&T&&A.minFilter!==dt&&A.minFilter!==Zt}function w(A,T,V,X,oe=1){s.generateMipmap(A);let fe=n.get(T);fe.__maxMipLevel=Math.log2(Math.max(V,X,oe))}function b(A,T,V){if(a===!1)return T;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=T;return T===6403&&(V===5126&&(X=33326),V===5131&&(X=33325),V===5121&&(X=33321)),T===6407&&(V===5126&&(X=34837),V===5131&&(X=34843),V===5121&&(X=32849)),T===6408&&(V===5126&&(X=34836),V===5131&&(X=34842),V===5121&&(X=32856)),(X===33325||X===33326||X===34842||X===34836)&&e.get("EXT_color_buffer_float"),X}function M(A){return A===dt||A===qc||A===Xc?9728:9729}function v(A){let T=A.target;T.removeEventListener("dispose",v),P(T),T.isVideoTexture&&h.delete(T),o.memory.textures--}function E(A){let T=A.target;T.removeEventListener("dispose",E),R(T)}function P(A){let T=n.get(A);T.__webglInit!==void 0&&(s.deleteTexture(T.__webglTexture),n.remove(A))}function R(A){let T=A.texture,V=n.get(A),X=n.get(T);if(!!A){if(X.__webglTexture!==void 0&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)s.deleteFramebuffer(V.__webglFramebuffer[oe]),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[oe]);else s.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer&&s.deleteRenderbuffer(V.__webglColorRenderbuffer),V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer);if(A.isWebGLMultipleRenderTargets)for(let oe=0,fe=T.length;oe<fe;oe++){let Me=n.get(T[oe]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(T[oe])}n.remove(T),n.remove(A)}}let C=0;function Y(){C=0}function O(){let A=C;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),C+=1,A}function B(A,T){let V=n.get(A);if(A.isVideoTexture&&W(A),A.version>0&&V.__version!==A.version){let X=A.image;if(X===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(V,A,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,V.__webglTexture)}function z(A,T){let V=n.get(A);if(A.version>0&&V.__version!==A.version){ge(V,A,T);return}t.activeTexture(33984+T),t.bindTexture(35866,V.__webglTexture)}function F(A,T){let V=n.get(A);if(A.version>0&&V.__version!==A.version){ge(V,A,T);return}t.activeTexture(33984+T),t.bindTexture(32879,V.__webglTexture)}function U(A,T){let V=n.get(A);if(A.version>0&&V.__version!==A.version){G(V,A,T);return}t.activeTexture(33984+T),t.bindTexture(34067,V.__webglTexture)}let Z={[ma]:10497,[Ut]:33071,[ga]:33648},se={[dt]:9728,[qc]:9984,[Xc]:9986,[Zt]:9729,[zp]:9985,[ks]:9987};function ce(A,T,V){if(V?(s.texParameteri(A,10242,Z[T.wrapS]),s.texParameteri(A,10243,Z[T.wrapT]),(A===32879||A===35866)&&s.texParameteri(A,32882,Z[T.wrapR]),s.texParameteri(A,10240,se[T.magFilter]),s.texParameteri(A,10241,se[T.minFilter])):(s.texParameteri(A,10242,33071),s.texParameteri(A,10243,33071),(A===32879||A===35866)&&s.texParameteri(A,32882,33071),(T.wrapS!==Ut||T.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,10240,M(T.magFilter)),s.texParameteri(A,10241,M(T.minFilter)),T.minFilter!==dt&&T.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let X=e.get("EXT_texture_filter_anisotropic");if(T.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Gi&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function J(A,T){A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",v),A.__webglTexture=s.createTexture(),o.memory.textures++)}function ge(A,T,V){let X=3553;T.isDataTexture2DArray&&(X=35866),T.isDataTexture3D&&(X=32879),J(A,T),t.activeTexture(33984+V),t.bindTexture(X,A.__webglTexture),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);let oe=x(T)&&p(T.image)===!1,fe=_(T.image,oe,!1,u),Me=p(fe)||a,ve=r.convert(T.format),Ae=r.convert(T.type),_e=b(T.internalFormat,ve,Ae);ce(X,T,Me);let I,le=T.mipmaps;if(T.isDepthTexture)_e=6402,a?T.type===vi?_e=36012:T.type===Gs?_e=33190:T.type===Vr?_e=35056:_e=33189:T.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Vi&&_e===6402&&T.type!==Hs&&T.type!==Gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Hs,Ae=r.convert(T.type)),T.format===Wr&&_e===6402&&(_e=34041,T.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Vr,Ae=r.convert(T.type))),t.texImage2D(3553,0,_e,fe.width,fe.height,0,ve,Ae,null);else if(T.isDataTexture)if(le.length>0&&Me){for(let q=0,de=le.length;q<de;q++)I=le[q],t.texImage2D(3553,q,_e,I.width,I.height,0,ve,Ae,I.data);T.generateMipmaps=!1,A.__maxMipLevel=le.length-1}else t.texImage2D(3553,0,_e,fe.width,fe.height,0,ve,Ae,fe.data),A.__maxMipLevel=0;else if(T.isCompressedTexture){for(let q=0,de=le.length;q<de;q++)I=le[q],T.format!==kt&&T.format!==Vn?ve!==null?t.compressedTexImage2D(3553,q,_e,I.width,I.height,0,I.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,_e,I.width,I.height,0,ve,Ae,I.data);A.__maxMipLevel=le.length-1}else if(T.isDataTexture2DArray)t.texImage3D(35866,0,_e,fe.width,fe.height,fe.depth,0,ve,Ae,fe.data),A.__maxMipLevel=0;else if(T.isDataTexture3D)t.texImage3D(32879,0,_e,fe.width,fe.height,fe.depth,0,ve,Ae,fe.data),A.__maxMipLevel=0;else if(le.length>0&&Me){for(let q=0,de=le.length;q<de;q++)I=le[q],t.texImage2D(3553,q,_e,ve,Ae,I);T.generateMipmaps=!1,A.__maxMipLevel=le.length-1}else t.texImage2D(3553,0,_e,ve,Ae,fe),A.__maxMipLevel=0;y(T,Me)&&w(X,T,fe.width,fe.height),A.__version=T.version,T.onUpdate&&T.onUpdate(T)}function G(A,T,V){if(T.image.length!==6)return;J(A,T),t.activeTexture(33984+V),t.bindTexture(34067,A.__webglTexture),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);let X=T&&(T.isCompressedTexture||T.image[0].isCompressedTexture),oe=T.image[0]&&T.image[0].isDataTexture,fe=[];for(let q=0;q<6;q++)!X&&!oe?fe[q]=_(T.image[q],!1,!0,c):fe[q]=oe?T.image[q].image:T.image[q];let Me=fe[0],ve=p(Me)||a,Ae=r.convert(T.format),_e=r.convert(T.type),I=b(T.internalFormat,Ae,_e);ce(34067,T,ve);let le;if(X){for(let q=0;q<6;q++){le=fe[q].mipmaps;for(let de=0;de<le.length;de++){let me=le[de];T.format!==kt&&T.format!==Vn?Ae!==null?t.compressedTexImage2D(34069+q,de,I,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,de,I,me.width,me.height,0,Ae,_e,me.data)}}A.__maxMipLevel=le.length-1}else{le=T.mipmaps;for(let q=0;q<6;q++)if(oe){t.texImage2D(34069+q,0,I,fe[q].width,fe[q].height,0,Ae,_e,fe[q].data);for(let de=0;de<le.length;de++){let Fe=le[de].image[q].image;t.texImage2D(34069+q,de+1,I,Fe.width,Fe.height,0,Ae,_e,Fe.data)}}else{t.texImage2D(34069+q,0,I,Ae,_e,fe[q]);for(let de=0;de<le.length;de++){let me=le[de];t.texImage2D(34069+q,de+1,I,Ae,_e,me.image[q])}}A.__maxMipLevel=le.length}y(T,ve)&&w(34067,T,Me.width,Me.height),A.__version=T.version,T.onUpdate&&T.onUpdate(T)}function Q(A,T,V,X,oe){let fe=r.convert(V.format),Me=r.convert(V.type),ve=b(V.internalFormat,fe,Me);oe===32879||oe===35866?t.texImage3D(oe,0,ve,T.width,T.height,T.depth,0,fe,Me,null):t.texImage2D(oe,0,ve,T.width,T.height,0,fe,Me,null),t.bindFramebuffer(36160,A),s.framebufferTexture2D(36160,X,oe,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function pe(A,T,V){if(s.bindRenderbuffer(36161,A),T.depthBuffer&&!T.stencilBuffer){let X=33189;if(V){let oe=T.depthTexture;oe&&oe.isDepthTexture&&(oe.type===vi?X=36012:oe.type===Gs&&(X=33190));let fe=Pe(T);s.renderbufferStorageMultisample(36161,fe,X,T.width,T.height)}else s.renderbufferStorage(36161,X,T.width,T.height);s.framebufferRenderbuffer(36160,36096,36161,A)}else if(T.depthBuffer&&T.stencilBuffer){if(V){let X=Pe(T);s.renderbufferStorageMultisample(36161,X,35056,T.width,T.height)}else s.renderbufferStorage(36161,34041,T.width,T.height);s.framebufferRenderbuffer(36160,33306,36161,A)}else{let X=T.isWebGLMultipleRenderTargets===!0?T.texture[0]:T.texture,oe=r.convert(X.format),fe=r.convert(X.type),Me=b(X.internalFormat,oe,fe);if(V){let ve=Pe(T);s.renderbufferStorageMultisample(36161,ve,Me,T.width,T.height)}else s.renderbufferStorage(36161,Me,T.width,T.height)}s.bindRenderbuffer(36161,null)}function k(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);let X=n.get(T.depthTexture).__webglTexture;if(T.depthTexture.format===Vi)s.framebufferTexture2D(36160,36096,3553,X,0);else if(T.depthTexture.format===Wr)s.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function ye(A){let T=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture){if(V)throw new Error("target.depthTexture not supported in Cube render targets");k(T.__webglFramebuffer,A)}else if(V){T.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,T.__webglFramebuffer[X]),T.__webglDepthbuffer[X]=s.createRenderbuffer(),pe(T.__webglDepthbuffer[X],A,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),pe(T.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function we(A){let T=A.texture,V=n.get(A),X=n.get(T);A.addEventListener("dispose",E),A.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture=s.createTexture(),X.__version=T.version,o.memory.textures++);let oe=A.isWebGLCubeRenderTarget===!0,fe=A.isWebGLMultipleRenderTargets===!0,Me=A.isWebGLMultisampleRenderTarget===!0,ve=T.isDataTexture3D||T.isDataTexture2DArray,Ae=p(A)||a;if(a&&T.format===Vn&&(T.type===vi||T.type===Gi)&&(T.format=kt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),oe){V.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)V.__webglFramebuffer[_e]=s.createFramebuffer()}else if(V.__webglFramebuffer=s.createFramebuffer(),fe)if(i.drawBuffers){let _e=A.texture;for(let I=0,le=_e.length;I<le;I++){let q=n.get(_e[I]);q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(Me)if(a){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,V.__webglColorRenderbuffer);let _e=r.convert(T.format),I=r.convert(T.type),le=b(T.internalFormat,_e,I),q=Pe(A);s.renderbufferStorageMultisample(36161,q,le,A.width,A.height),t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,V.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(oe){t.bindTexture(34067,X.__webglTexture),ce(34067,T,Ae);for(let _e=0;_e<6;_e++)Q(V.__webglFramebuffer[_e],A,T,36064,34069+_e);y(T,Ae)&&w(34067,T,A.width,A.height),t.unbindTexture()}else if(fe){let _e=A.texture;for(let I=0,le=_e.length;I<le;I++){let q=_e[I],de=n.get(q);t.bindTexture(3553,de.__webglTexture),ce(3553,q,Ae),Q(V.__webglFramebuffer,A,q,36064+I,3553),y(q,Ae)&&w(3553,q,A.width,A.height)}t.unbindTexture()}else{let _e=3553;ve&&(a?_e=T.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(_e,X.__webglTexture),ce(_e,T,Ae),Q(V.__webglFramebuffer,A,T,36064,_e),y(T,Ae)&&w(_e,T,A.width,A.height,A.depth),t.unbindTexture()}A.depthBuffer&&ye(A)}function he(A){let T=p(A)||a,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let X=0,oe=V.length;X<oe;X++){let fe=V[X];if(y(fe,T)){let Me=A.isWebGLCubeRenderTarget?34067:3553,ve=n.get(fe).__webglTexture;t.bindTexture(Me,ve),w(Me,fe,A.width,A.height),t.unbindTexture()}}}function ie(A){if(A.isWebGLMultisampleRenderTarget)if(a){let T=A.width,V=A.height,X=16384;A.depthBuffer&&(X|=256),A.stencilBuffer&&(X|=1024);let oe=n.get(A);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer),s.blitFramebuffer(0,0,T,V,0,0,T,V,X,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Pe(A){return a&&A.isWebGLMultisampleRenderTarget?Math.min(f,A.samples):0}function W(A){let T=o.render.frame;h.get(A)!==T&&(h.set(A,T),A.update())}let K=!1,ne=!1;function xe(A,T){A&&A.isWebGLRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),K=!0),A=A.texture),B(A,T)}function ae(A,T){A&&A.isWebGLCubeRenderTarget&&(ne===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ne=!0),A=A.texture),U(A,T)}this.allocateTextureUnit=O,this.resetTextureUnits=Y,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=F,this.setTextureCube=U,this.setupRenderTarget=we,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ie,this.safeSetTexture2D=xe,this.safeSetTextureCube=ae}function py(s,e,t){let n=t.isWebGL2;function i(r){let o;if(r===Hi)return 5121;if(r===Gp)return 32819;if(r===Vp)return 32820;if(r===Wp)return 33635;if(r===Up)return 5120;if(r===kp)return 5122;if(r===Hs)return 5123;if(r===Hp)return 5124;if(r===Gs)return 5125;if(r===vi)return 5126;if(r===Gi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===qp)return 6406;if(r===Vn)return 6407;if(r===kt)return 6408;if(r===Xp)return 6409;if(r===Yp)return 6410;if(r===Vi)return 6402;if(r===Wr)return 34041;if(r===Jp)return 6403;if(r===jp)return 36244;if(r===$p)return 33319;if(r===Qp)return 33320;if(r===Kp)return 36248;if(r===em)return 36249;if(r===Yc||r===Zc||r===Jc||r===jc)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Yc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$c||r===Qc||r===Kc||r===eu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===$c)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===eu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===tu||r===nu)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(r===tu)return o.COMPRESSED_RGB8_ETC2;if(r===nu)return o.COMPRESSED_RGBA8_ETC2_EAC}if(r===nm||r===im||r===rm||r===sm||r===om||r===am||r===lm||r===cm||r===um||r===hm||r===fm||r===dm||r===pm||r===mm||r===xm||r===_m||r===ym||r===vm||r===bm||r===wm||r===Mm||r===Sm||r===Tm||r===Em||r===Am||r===Lm||r===Cm||r===Pm)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?r:null;if(r===gm)return o=e.get("EXT_texture_compression_bptc"),o!==null?r:null;if(r===Vr)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var cl=class extends wt{constructor(e=[]){super();this.cameras=e}};cl.prototype.isArrayCamera=!0;var ti=class extends Ge{constructor(){super();this.type="Group"}};ti.prototype.isGroup=!0;var my={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(my))),c&&e.hand){o=!0;for(let g of e.hand.values()){let _=t.getJointPose(g,n);if(c.joints[g.jointName]===void 0){let x=new ti;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[g.jointName]=x,c.add(x)}let p=c.joints[g.jointName];_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=_.radius),p.visible=_!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}},ih=class extends Wn{constructor(e,t){super();let n=this,i=e.state,r=null,o=1,a=null,l="local-floor",c=null,u=null,f=null,h=null,d=null,m=!1,g=null,_=null,p=null,x=null,y=null,w=null,b=[],M=new Map,v=new wt;v.layers.enable(1),v.viewport=new Xe;let E=new wt;E.layers.enable(2),E.viewport=new Xe;let P=[v,E],R=new cl;R.layers.enable(1),R.layers.enable(2);let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=b[G];return Q===void 0&&(Q=new go,b[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=b[G];return Q===void 0&&(Q=new go,b[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=b[G];return Q===void 0&&(Q=new go,b[G]=Q),Q.getHandSpace()};function O(G){let Q=M.get(G.inputSource);Q&&Q.dispatchEvent({type:G.type,data:G.inputSource})}function B(){M.forEach(function(G,Q){G.disconnect(Q)}),M.clear(),C=null,Y=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),f&&t.deleteFramebuffer(f),g&&t.deleteFramebuffer(g),_&&t.deleteRenderbuffer(_),p&&t.deleteRenderbuffer(p),f=null,g=null,_=null,p=null,d=null,h=null,u=null,r=null,ge.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",B),r.addEventListener("inputsourceschange",z);let Q=t.getContextAttributes();if(Q.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0){let pe={antialias:Q.antialias,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:d})}else if(t instanceof WebGLRenderingContext){let pe={antialias:!0,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({layers:[d]})}else{m=Q.antialias;let pe=null;Q.depth&&(w=256,Q.stencil&&(w|=1024),y=Q.stencil?33306:36096,pe=Q.stencil?35056:33190);let k={colorFormat:Q.alpha?32856:32849,depthFormat:pe,scaleFactor:o};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(k),f=t.createFramebuffer(),r.updateRenderState({layers:[h]}),m&&(g=t.createFramebuffer(),_=t.createRenderbuffer(),t.bindRenderbuffer(36161,_),t.renderbufferStorageMultisample(36161,4,32856,h.textureWidth,h.textureHeight),i.bindFramebuffer(36160,g),t.framebufferRenderbuffer(36160,36064,36161,_),t.bindRenderbuffer(36161,null),pe!==null&&(p=t.createRenderbuffer(),t.bindRenderbuffer(36161,p),t.renderbufferStorageMultisample(36161,4,pe,h.textureWidth,h.textureHeight),t.framebufferRenderbuffer(36160,y,36161,p),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}a=await r.requestReferenceSpace(l),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(G){let Q=r.inputSources;for(let pe=0;pe<b.length;pe++)M.set(Q[pe],b[pe]);for(let pe=0;pe<G.removed.length;pe++){let k=G.removed[pe],ye=M.get(k);ye&&(ye.dispatchEvent({type:"disconnected",data:k}),M.delete(k))}for(let pe=0;pe<G.added.length;pe++){let k=G.added[pe],ye=M.get(k);ye&&ye.dispatchEvent({type:"connected",data:k})}}let F=new L,U=new L;function Z(G,Q,pe){F.setFromMatrixPosition(Q.matrixWorld),U.setFromMatrixPosition(pe.matrixWorld);let k=F.distanceTo(U),ye=Q.projectionMatrix.elements,we=pe.projectionMatrix.elements,he=ye[14]/(ye[10]-1),ie=ye[14]/(ye[10]+1),Pe=(ye[9]+1)/ye[5],W=(ye[9]-1)/ye[5],K=(ye[8]-1)/ye[0],ne=(we[8]+1)/we[0],xe=he*K,ae=he*ne,A=k/(-K+ne),T=A*-K;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(T),G.translateZ(A),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let V=he+A,X=ie+A,oe=xe-T,fe=ae+(k-T),Me=Pe*ie/X*V,ve=W*ie/X*V;G.projectionMatrix.makePerspective(oe,fe,Me,ve,V,X)}function se(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;R.near=E.near=v.near=G.near,R.far=E.far=v.far=G.far,(C!==R.near||Y!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),C=R.near,Y=R.far);let Q=G.parent,pe=R.cameras;se(R,Q);for(let ye=0;ye<pe.length;ye++)se(pe[ye],Q);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),G.position.copy(R.position),G.quaternion.copy(R.quaternion),G.scale.copy(R.scale),G.matrix.copy(R.matrix),G.matrixWorld.copy(R.matrixWorld);let k=G.children;for(let ye=0,we=k.length;ye<we;ye++)k[ye].updateMatrixWorld(!0);pe.length===2?Z(R,v,E):R.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(G){h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let ce=null;function J(G,Q){if(c=Q.getViewerPose(a),x=Q,c!==null){let k=c.views;d!==null&&i.bindXRFramebuffer(d.framebuffer);let ye=!1;k.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let we=0;we<k.length;we++){let he=k[we],ie=null;if(d!==null)ie=d.getViewport(he);else{let W=u.getViewSubImage(h,he);i.bindXRFramebuffer(f),W.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,y,3553,W.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,W.colorTexture,0),ie=W.viewport}let Pe=P[we];Pe.matrix.fromArray(he.transform.matrix),Pe.projectionMatrix.fromArray(he.projectionMatrix),Pe.viewport.set(ie.x,ie.y,ie.width,ie.height),we===0&&R.matrix.copy(Pe.matrix),ye===!0&&R.cameras.push(Pe)}m&&(i.bindXRFramebuffer(g),w!==null&&t.clear(w))}let pe=r.inputSources;for(let k=0;k<b.length;k++){let ye=b[k],we=pe[k];ye.update(we,Q,a)}if(ce&&ce(G,Q),m){let k=h.textureWidth,ye=h.textureHeight;i.bindFramebuffer(36008,g),i.bindFramebuffer(36009,f),t.invalidateFramebuffer(36008,[y]),t.invalidateFramebuffer(36009,[y]),t.blitFramebuffer(0,0,k,ye,0,0,k,ye,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,g)}x=null}let ge=new Su;ge.setAnimationLoop(J),this.setAnimationLoop=function(G){ce=G},this.dispose=function(){}}};function gy(s){function e(p,x){p.fogColor.value.copy(x.color),x.isFog?(p.fogNear.value=x.near,p.fogFar.value=x.far):x.isFogExp2&&(p.fogDensity.value=x.density)}function t(p,x,y,w,b){x.isMeshBasicMaterial?n(p,x):x.isMeshLambertMaterial?(n(p,x),l(p,x)):x.isMeshToonMaterial?(n(p,x),u(p,x)):x.isMeshPhongMaterial?(n(p,x),c(p,x)):x.isMeshStandardMaterial?(n(p,x),x.isMeshPhysicalMaterial?h(p,x,b):f(p,x)):x.isMeshMatcapMaterial?(n(p,x),d(p,x)):x.isMeshDepthMaterial?(n(p,x),m(p,x)):x.isMeshDistanceMaterial?(n(p,x),g(p,x)):x.isMeshNormalMaterial?(n(p,x),_(p,x)):x.isLineBasicMaterial?(i(p,x),x.isLineDashedMaterial&&r(p,x)):x.isPointsMaterial?o(p,x,y,w):x.isSpriteMaterial?a(p,x):x.isShadowMaterial?(p.color.value.copy(x.color),p.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function n(p,x){p.opacity.value=x.opacity,x.color&&p.diffuse.value.copy(x.color),x.emissive&&p.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(p.map.value=x.map),x.alphaMap&&(p.alphaMap.value=x.alphaMap),x.specularMap&&(p.specularMap.value=x.specularMap),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest);let y=s.get(x).envMap;if(y){p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=x.reflectivity,p.ior.value=x.ior,p.refractionRatio.value=x.refractionRatio;let M=s.get(y).__maxMipLevel;M!==void 0&&(p.maxMipLevel.value=M)}x.lightMap&&(p.lightMap.value=x.lightMap,p.lightMapIntensity.value=x.lightMapIntensity),x.aoMap&&(p.aoMap.value=x.aoMap,p.aoMapIntensity.value=x.aoMapIntensity);let w;x.map?w=x.map:x.specularMap?w=x.specularMap:x.displacementMap?w=x.displacementMap:x.normalMap?w=x.normalMap:x.bumpMap?w=x.bumpMap:x.roughnessMap?w=x.roughnessMap:x.metalnessMap?w=x.metalnessMap:x.alphaMap?w=x.alphaMap:x.emissiveMap?w=x.emissiveMap:x.clearcoatMap?w=x.clearcoatMap:x.clearcoatNormalMap?w=x.clearcoatNormalMap:x.clearcoatRoughnessMap?w=x.clearcoatRoughnessMap:x.specularIntensityMap?w=x.specularIntensityMap:x.specularTintMap?w=x.specularTintMap:x.transmissionMap?w=x.transmissionMap:x.thicknessMap&&(w=x.thicknessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let b;x.aoMap?b=x.aoMap:x.lightMap&&(b=x.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function i(p,x){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity}function r(p,x){p.dashSize.value=x.dashSize,p.totalSize.value=x.dashSize+x.gapSize,p.scale.value=x.scale}function o(p,x,y,w){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,p.size.value=x.size*y,p.scale.value=w*.5,x.map&&(p.map.value=x.map),x.alphaMap&&(p.alphaMap.value=x.alphaMap),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest);let b;x.map?b=x.map:x.alphaMap&&(b=x.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function a(p,x){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,p.rotation.value=x.rotation,x.map&&(p.map.value=x.map),x.alphaMap&&(p.alphaMap.value=x.alphaMap),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest);let y;x.map?y=x.map:x.alphaMap&&(y=x.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,x){x.emissiveMap&&(p.emissiveMap.value=x.emissiveMap)}function c(p,x){p.specular.value.copy(x.specular),p.shininess.value=Math.max(x.shininess,1e-4),x.emissiveMap&&(p.emissiveMap.value=x.emissiveMap),x.bumpMap&&(p.bumpMap.value=x.bumpMap,p.bumpScale.value=x.bumpScale,x.side===lt&&(p.bumpScale.value*=-1)),x.normalMap&&(p.normalMap.value=x.normalMap,p.normalScale.value.copy(x.normalScale),x.side===lt&&p.normalScale.value.negate()),x.displacementMap&&(p.displacementMap.value=x.displacementMap,p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias)}function u(p,x){x.gradientMap&&(p.gradientMap.value=x.gradientMap),x.emissiveMap&&(p.emissiveMap.value=x.emissiveMap),x.bumpMap&&(p.bumpMap.value=x.bumpMap,p.bumpScale.value=x.bumpScale,x.side===lt&&(p.bumpScale.value*=-1)),x.normalMap&&(p.normalMap.value=x.normalMap,p.normalScale.value.copy(x.normalScale),x.side===lt&&p.normalScale.value.negate()),x.displacementMap&&(p.displacementMap.value=x.displacementMap,p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias)}function f(p,x){p.roughness.value=x.roughness,p.metalness.value=x.metalness,x.roughnessMap&&(p.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(p.metalnessMap.value=x.metalnessMap),x.emissiveMap&&(p.emissiveMap.value=x.emissiveMap),x.bumpMap&&(p.bumpMap.value=x.bumpMap,p.bumpScale.value=x.bumpScale,x.side===lt&&(p.bumpScale.value*=-1)),x.normalMap&&(p.normalMap.value=x.normalMap,p.normalScale.value.copy(x.normalScale),x.side===lt&&p.normalScale.value.negate()),x.displacementMap&&(p.displacementMap.value=x.displacementMap,p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias),s.get(x).envMap&&(p.envMapIntensity.value=x.envMapIntensity)}function h(p,x,y){f(p,x),p.ior.value=x.ior,x.sheenTint&&p.sheenTint.value.copy(x.sheenTint),x.clearcoat>0&&(p.clearcoat.value=x.clearcoat,p.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(p.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),p.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===lt&&p.clearcoatNormalScale.value.negate())),x.transmission>0&&(p.transmission.value=x.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),x.transmissionMap&&(p.transmissionMap.value=x.transmissionMap),p.thickness.value=x.thickness,x.thicknessMap&&(p.thicknessMap.value=x.thicknessMap),p.attenuationDistance.value=x.attenuationDistance,p.attenuationTint.value.copy(x.attenuationTint)),p.specularIntensity.value=x.specularIntensity,p.specularTint.value.copy(x.specularTint),x.specularIntensityMap&&(p.specularIntensityMap.value=x.specularIntensityMap),x.specularTintMap&&(p.specularTintMap.value=x.specularTintMap)}function d(p,x){x.matcap&&(p.matcap.value=x.matcap),x.bumpMap&&(p.bumpMap.value=x.bumpMap,p.bumpScale.value=x.bumpScale,x.side===lt&&(p.bumpScale.value*=-1)),x.normalMap&&(p.normalMap.value=x.normalMap,p.normalScale.value.copy(x.normalScale),x.side===lt&&p.normalScale.value.negate()),x.displacementMap&&(p.displacementMap.value=x.displacementMap,p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias)}function m(p,x){x.displacementMap&&(p.displacementMap.value=x.displacementMap,p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias)}function g(p,x){x.displacementMap&&(p.displacementMap.value=x.displacementMap,p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias),p.referencePosition.value.copy(x.referencePosition),p.nearDistance.value=x.nearDistance,p.farDistance.value=x.farDistance}function _(p,x){x.bumpMap&&(p.bumpMap.value=x.bumpMap,p.bumpScale.value=x.bumpScale,x.side===lt&&(p.bumpScale.value*=-1)),x.normalMap&&(p.normalMap.value=x.normalMap,p.normalScale.value.copy(x.normalScale),x.side===lt&&p.normalScale.value.negate()),x.displacementMap&&(p.displacementMap.value=x.displacementMap,p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function xy(){let s=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return s.style.display="block",s}function We(s={}){let e=s.canvas!==void 0?s.canvas:xy(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,o=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,l=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",u=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1,f=null,h=null,d=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=It,this.physicallyCorrectLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;let g=this,_=!1,p=0,x=0,y=null,w=-1,b=null,M=new Xe,v=new Xe,E=null,P=e.width,R=e.height,C=1,Y=null,O=null,B=new Xe(0,0,P,R),z=new Xe(0,0,P,R),F=!1,U=[],Z=new $r,se=!1,ce=!1,J=null,ge=new Se,G=new L,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return y===null?C:1}let k=t;function ye(S,N){for(let D=0;D<S.length;D++){let H=S[D],te=e.getContext(H,N);if(te!==null)return te}return null}try{let S={alpha:n,depth:i,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",st,!1),k===null){let N=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&N.shift(),k=ye(N,S),k===null)throw ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let we,he,ie,Pe,W,K,ne,xe,ae,A,T,V,X,oe,fe,Me,ve,Ae,_e,I,le,q,de;function me(){we=new Hx(k),he=new Fx(k,we,s),we.init(he),q=new py(k,we,he),ie=new fy(k,we,he),U[0]=1029,Pe=new Wx(k),W=new ty,K=new dy(k,we,ie,W,he,q,Pe),ne=new Bx(g),xe=new kx(g),ae=new rg(k,he),de=new Ix(k,we,ae,he),A=new Gx(k,ae,Pe,de),T=new Zx(k,A,ae,Pe),_e=new Yx(k),Me=new Ox(W),V=new ey(g,ne,xe,we,he,de,Me),X=new gy(W),oe=new iy(W),fe=new cy(we,he),Ae=new Rx(g,ne,ie,T,a),ve=new nh(g,T,he),I=new Dx(k,we,Pe,he),le=new Vx(k,we,Pe,he),Pe.programs=V.programs,g.capabilities=he,g.extensions=we,g.properties=W,g.renderLists=oe,g.shadowMap=ve,g.state=ie,g.info=Pe}me();let Fe=new ih(g,k);this.xr=Fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=we.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=we.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(S){S!==void 0&&(C=S,this.setSize(P,R,!1))},this.getSize=function(S){return S.set(P,R)},this.setSize=function(S,N,D){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=S,R=N,e.width=Math.floor(S*C),e.height=Math.floor(N*C),D!==!1&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(P*C,R*C).floor()},this.setDrawingBufferSize=function(S,N,D){P=S,R=N,C=D,e.width=Math.floor(S*D),e.height=Math.floor(N*D),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(B)},this.setViewport=function(S,N,D,H){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,N,D,H),ie.viewport(M.copy(B).multiplyScalar(C).floor())},this.getScissor=function(S){return S.copy(z)},this.setScissor=function(S,N,D,H){S.isVector4?z.set(S.x,S.y,S.z,S.w):z.set(S,N,D,H),ie.scissor(v.copy(z).multiplyScalar(C).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(S){ie.setScissorTest(F=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){O=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(S,N,D){let H=0;(S===void 0||S)&&(H|=16384),(N===void 0||N)&&(H|=256),(D===void 0||D)&&(H|=1024),k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",st,!1),oe.dispose(),fe.dispose(),W.dispose(),ne.dispose(),xe.dispose(),T.dispose(),de.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Is),Fe.removeEventListener("sessionend",Ds),J&&(J.dispose(),J=null),Sn.stop()};function ht(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let S=Pe.autoReset,N=ve.enabled,D=ve.autoUpdate,H=ve.needsUpdate,te=ve.type;me(),Pe.autoReset=S,ve.enabled=N,ve.autoUpdate=D,ve.needsUpdate=H,ve.type=te}function dn(S){let N=S.target;N.removeEventListener("dispose",dn),je(N)}function je(S){pn(S),W.remove(S)}function pn(S){let N=W.get(S).programs;N!==void 0&&N.forEach(function(D){V.releaseProgram(D)})}function zt(S,N){S.render(function(D){g.renderBufferImmediate(D,N)})}this.renderBufferImmediate=function(S,N){de.initAttributes();let D=W.get(S);S.hasPositions&&!D.position&&(D.position=k.createBuffer()),S.hasNormals&&!D.normal&&(D.normal=k.createBuffer()),S.hasUvs&&!D.uv&&(D.uv=k.createBuffer()),S.hasColors&&!D.color&&(D.color=k.createBuffer());let H=N.getAttributes();S.hasPositions&&(k.bindBuffer(34962,D.position),k.bufferData(34962,S.positionArray,35048),de.enableAttribute(H.position.location),k.vertexAttribPointer(H.position.location,3,5126,!1,0,0)),S.hasNormals&&(k.bindBuffer(34962,D.normal),k.bufferData(34962,S.normalArray,35048),de.enableAttribute(H.normal.location),k.vertexAttribPointer(H.normal.location,3,5126,!1,0,0)),S.hasUvs&&(k.bindBuffer(34962,D.uv),k.bufferData(34962,S.uvArray,35048),de.enableAttribute(H.uv.location),k.vertexAttribPointer(H.uv.location,2,5126,!1,0,0)),S.hasColors&&(k.bindBuffer(34962,D.color),k.bufferData(34962,S.colorArray,35048),de.enableAttribute(H.color.location),k.vertexAttribPointer(H.color.location,3,5126,!1,0,0)),de.disableUnusedAttributes(),k.drawArrays(4,0,S.count),S.count=0},this.renderBufferDirect=function(S,N,D,H,te,De){N===null&&(N=Q);let Ee=te.isMesh&&te.matrixWorld.determinant()<0,Te=tt(S,N,H,te);ie.setMaterial(H,Ee);let Oe=D.index,Ve=D.attributes.position;if(Oe===null){if(Ve===void 0||Ve.count===0)return}else if(Oe.count===0)return;let ze=1;H.wireframe===!0&&(Oe=A.getWireframeAttribute(D),ze=2),(D.morphAttributes.position!==void 0||D.morphAttributes.normal!==void 0)&&_e.update(te,D,H,Te),de.setup(te,H,Te,D,Oe);let He,Ce=I;Oe!==null&&(He=ae.get(Oe),Ce=le,Ce.setIndex(He));let xi=Oe!==null?Oe.count:Ve.count,ot=D.drawRange.start*ze,kn=D.drawRange.count*ze,rn=De!==null?De.start*ze:0,_i=De!==null?De.count*ze:1/0,Hn=Math.max(ot,rn),ft=Math.min(xi,ot+kn,rn+_i)-1,mn=Math.max(0,ft-Hn+1);if(mn!==0){if(te.isMesh)H.wireframe===!0?(ie.setLineWidth(H.wireframeLinewidth*pe()),Ce.setMode(1)):Ce.setMode(4);else if(te.isLine){let yt=H.linewidth;yt===void 0&&(yt=1),ie.setLineWidth(yt*pe()),te.isLineSegments?Ce.setMode(1):te.isLineLoop?Ce.setMode(2):Ce.setMode(3)}else te.isPoints?Ce.setMode(0):te.isSprite&&Ce.setMode(4);if(te.isInstancedMesh)Ce.renderInstances(Hn,mn,te.count);else if(D.isInstancedBufferGeometry){let yt=Math.min(D.instanceCount,D._maxInstanceCount);Ce.renderInstances(Hn,mn,yt)}else Ce.render(Hn,mn)}},this.compile=function(S,N){h=fe.get(S),h.init(),m.push(h),S.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights(g.physicallyCorrectLights),S.traverse(function(D){let H=D.material;if(H)if(Array.isArray(H))for(let te=0;te<H.length;te++){let De=H[te];Re(De,S,D)}else Re(H,S,D)}),m.pop(),h=null};let zr=null;function aa(S){zr&&zr(S)}function Is(){Sn.stop()}function Ds(){Sn.start()}let Sn=new Su;Sn.setAnimationLoop(aa),typeof window!="undefined"&&Sn.setContext(window),this.setAnimationLoop=function(S){zr=S,Fe.setAnimationLoop(S),S===null?Sn.stop():Sn.start()},Fe.addEventListener("sessionstart",Is),Fe.addEventListener("sessionend",Ds),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(N),N=Fe.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,N,y),h=fe.get(S,m.length),h.init(),m.push(h),ge.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(ge),ce=this.localClippingEnabled,se=Me.init(this.clippingPlanes,ce,N),f=oe.get(S,d.length),f.init(),d.push(f),Fs(S,N,0,g.sortObjects),f.finish(),g.sortObjects===!0&&f.sort(Y,O),se===!0&&Me.beginShadows();let D=h.state.shadowsArray;if(ve.render(D,S,N),se===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ae.render(f,S),h.setupLights(g.physicallyCorrectLights),N.isArrayCamera){let H=N.cameras;for(let te=0,De=H.length;te<De;te++){let Ee=H[te];j(f,S,Ee,Ee.viewport)}}else j(f,S,N);y!==null&&(K.updateMultisampleRenderTarget(y),K.updateRenderTargetMipmap(y)),S.isScene===!0&&S.onAfterRender(g,S,N),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1),de.resetDefaultState(),w=-1,b=null,m.pop(),m.length>0?h=m[m.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function Fs(S,N,D,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)D=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){H&&G.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);let Ee=T.update(S),Te=S.material;Te.visible&&f.push(S,Ee,Te,D,G.z,null)}}else if(S.isImmediateRenderObject)H&&G.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge),f.push(S,null,S.material,D,G.z,null);else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Pe.render.frame&&(S.skeleton.update(),S.skeleton.frame=Pe.render.frame),!S.frustumCulled||Z.intersectsObject(S))){H&&G.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);let Ee=T.update(S),Te=S.material;if(Array.isArray(Te)){let Oe=Ee.groups;for(let Ve=0,ze=Oe.length;Ve<ze;Ve++){let He=Oe[Ve],Ce=Te[He.materialIndex];Ce&&Ce.visible&&f.push(S,Ee,Ce,D,G.z,He)}}else Te.visible&&f.push(S,Ee,Te,D,G.z,null)}}let De=S.children;for(let Ee=0,Te=De.length;Ee<Te;Ee++)Fs(De[Ee],N,D,H)}function j(S,N,D,H){let te=S.opaque,De=S.transmissive,Ee=S.transparent;h.setupLightsView(D),De.length>0&&ee(te,N,D),H&&ie.viewport(M.copy(H)),te.length>0&&be(te,N,D),De.length>0&&be(De,N,D),Ee.length>0&&be(Ee,N,D)}function ee(S,N,D){if(J===null){let Ee=o===!0&&he.isWebGL2===!0?Ea:on;J=new Ee(1024,1024,{generateMipmaps:!0,type:q.convert(Gi)!==null?Gi:Hi,minFilter:ks,magFilter:dt,wrapS:Ut,wrapT:Ut})}let H=g.getRenderTarget();g.setRenderTarget(J),g.clear();let te=g.toneMapping;g.toneMapping=yi,be(S,N,D),g.toneMapping=te,K.updateMultisampleRenderTarget(J),K.updateRenderTargetMipmap(J),g.setRenderTarget(H)}function be(S,N,D){let H=N.isScene===!0?N.overrideMaterial:null;for(let te=0,De=S.length;te<De;te++){let Ee=S[te],Te=Ee.object,Oe=Ee.geometry,Ve=H===null?Ee.material:H,ze=Ee.group;Te.layers.test(D.layers)&&Le(Te,N,D,Oe,Ve,ze)}}function Le(S,N,D,H,te,De){if(S.onBeforeRender(g,N,D,H,te,De),S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),S.isImmediateRenderObject){let Ee=tt(D,N,te,S);ie.setMaterial(te),de.reset(),zt(S,Ee)}else te.transparent===!0&&te.side===Ui?(te.side=lt,te.needsUpdate=!0,g.renderBufferDirect(D,N,H,te,S,De),te.side=Hr,te.needsUpdate=!0,g.renderBufferDirect(D,N,H,te,S,De),te.side=Ui):g.renderBufferDirect(D,N,H,te,S,De);S.onAfterRender(g,N,D,H,te,De)}function Re(S,N,D){N.isScene!==!0&&(N=Q);let H=W.get(S),te=h.state.lights,De=h.state.shadowsArray,Ee=te.state.version,Te=V.getParameters(S,te.state,De,N,D),Oe=V.getProgramCacheKey(Te),Ve=H.programs;H.environment=S.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(S.isMeshStandardMaterial?xe:ne).get(S.envMap||H.environment),Ve===void 0&&(S.addEventListener("dispose",dn),Ve=new Map,H.programs=Ve);let ze=Ve.get(Oe);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===Ee)return $e(S,Te),ze}else Te.uniforms=V.getUniforms(S),S.onBuild(Te,g),S.onBeforeCompile(Te,g),ze=V.acquireProgram(Te,Oe),Ve.set(Oe,ze),H.uniforms=Te.uniforms;let He=H.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=Me.uniform),$e(S,Te),H.needsLights=Tn(S),H.lightsStateVersion=Ee,H.needsLights&&(He.ambientLightColor.value=te.state.ambient,He.lightProbe.value=te.state.probe,He.directionalLights.value=te.state.directional,He.directionalLightShadows.value=te.state.directionalShadow,He.spotLights.value=te.state.spot,He.spotLightShadows.value=te.state.spotShadow,He.rectAreaLights.value=te.state.rectArea,He.ltc_1.value=te.state.rectAreaLTC1,He.ltc_2.value=te.state.rectAreaLTC2,He.pointLights.value=te.state.point,He.pointLightShadows.value=te.state.pointShadow,He.hemisphereLights.value=te.state.hemi,He.directionalShadowMap.value=te.state.directionalShadowMap,He.directionalShadowMatrix.value=te.state.directionalShadowMatrix,He.spotShadowMap.value=te.state.spotShadowMap,He.spotShadowMatrix.value=te.state.spotShadowMatrix,He.pointShadowMap.value=te.state.pointShadowMap,He.pointShadowMatrix.value=te.state.pointShadowMatrix);let Ce=ze.getUniforms(),xi=ei.seqWithValue(Ce.seq,He);return H.currentProgram=ze,H.uniformsList=xi,ze}function $e(S,N){let D=W.get(S);D.outputEncoding=N.outputEncoding,D.instancing=N.instancing,D.skinning=N.skinning,D.morphTargets=N.morphTargets,D.morphNormals=N.morphNormals,D.numClippingPlanes=N.numClippingPlanes,D.numIntersection=N.numClipIntersection,D.vertexAlphas=N.vertexAlphas,D.vertexTangents=N.vertexTangents}function tt(S,N,D,H){N.isScene!==!0&&(N=Q),K.resetTextureUnits();let te=N.fog,De=D.isMeshStandardMaterial?N.environment:null,Ee=y===null?g.outputEncoding:y.texture.encoding,Te=(D.isMeshStandardMaterial?xe:ne).get(D.envMap||De),Oe=D.vertexColors===!0&&!!H.geometry&&!!H.geometry.attributes.color&&H.geometry.attributes.color.itemSize===4,Ve=!!H.geometry&&!!H.geometry.attributes.tangent,ze=!!H.geometry&&!!H.geometry.morphAttributes.position,He=!!H.geometry&&!!H.geometry.morphAttributes.normal,Ce=W.get(D),xi=h.state.lights;if(se===!0&&(ce===!0||S!==b)){let yt=S===b&&D.id===w;Me.setState(D,S,yt)}let ot=!1;D.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==xi.state.version||Ce.outputEncoding!==Ee||H.isInstancedMesh&&Ce.instancing===!1||!H.isInstancedMesh&&Ce.instancing===!0||H.isSkinnedMesh&&Ce.skinning===!1||!H.isSkinnedMesh&&Ce.skinning===!0||Ce.envMap!==Te||D.fog&&Ce.fog!==te||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Me.numPlanes||Ce.numIntersection!==Me.numIntersection)||Ce.vertexAlphas!==Oe||Ce.vertexTangents!==Ve||Ce.morphTargets!==ze||Ce.morphNormals!==He)&&(ot=!0):(ot=!0,Ce.__version=D.version);let kn=Ce.currentProgram;ot===!0&&(kn=Re(D,N,H));let rn=!1,_i=!1,Hn=!1,ft=kn.getUniforms(),mn=Ce.uniforms;if(ie.useProgram(kn.program)&&(rn=!0,_i=!0,Hn=!0),D.id!==w&&(w=D.id,_i=!0),rn||b!==S){if(ft.setValue(k,"projectionMatrix",S.projectionMatrix),he.logarithmicDepthBuffer&&ft.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),b!==S&&(b=S,_i=!0,Hn=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){let yt=ft.map.cameraPosition;yt!==void 0&&yt.setValue(k,G.setFromMatrixPosition(S.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ft.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||H.isSkinnedMesh)&&ft.setValue(k,"viewMatrix",S.matrixWorldInverse)}if(H.isSkinnedMesh){ft.setOptional(k,H,"bindMatrix"),ft.setOptional(k,H,"bindMatrixInverse");let yt=H.skeleton;yt&&(he.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),ft.setValue(k,"boneTexture",yt.boneTexture,K),ft.setValue(k,"boneTextureSize",yt.boneTextureSize)):ft.setOptional(k,yt,"boneMatrices"))}return(_i||Ce.receiveShadow!==H.receiveShadow)&&(Ce.receiveShadow=H.receiveShadow,ft.setValue(k,"receiveShadow",H.receiveShadow)),_i&&(ft.setValue(k,"toneMappingExposure",g.toneMappingExposure),Ce.needsLights&&gi(mn,Hn),te&&D.fog&&X.refreshFogUniforms(mn,te),X.refreshMaterialUniforms(mn,D,C,R,J),ei.upload(k,Ce.uniformsList,mn,K)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(ei.upload(k,Ce.uniformsList,mn,K),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ft.setValue(k,"center",H.center),ft.setValue(k,"modelViewMatrix",H.modelViewMatrix),ft.setValue(k,"normalMatrix",H.normalMatrix),ft.setValue(k,"modelMatrix",H.matrixWorld),kn}function gi(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Tn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return y},this.setRenderTarget=function(S,N=0,D=0){y=S,p=N,x=D,S&&W.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S);let H=null,te=!1,De=!1;if(S){let Te=S.texture;(Te.isDataTexture3D||Te.isDataTexture2DArray)&&(De=!0);let Oe=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(H=Oe[N],te=!0):S.isWebGLMultisampleRenderTarget?H=W.get(S).__webglMultisampledFramebuffer:H=Oe,M.copy(S.viewport),v.copy(S.scissor),E=S.scissorTest}else M.copy(B).multiplyScalar(C).floor(),v.copy(z).multiplyScalar(C).floor(),E=F;if(ie.bindFramebuffer(36160,H)&&he.drawBuffers){let Te=!1;if(S)if(S.isWebGLMultipleRenderTargets){let Oe=S.texture;if(U.length!==Oe.length||U[0]!==36064){for(let Ve=0,ze=Oe.length;Ve<ze;Ve++)U[Ve]=36064+Ve;U.length=Oe.length,Te=!0}}else(U.length!==1||U[0]!==36064)&&(U[0]=36064,U.length=1,Te=!0);else(U.length!==1||U[0]!==1029)&&(U[0]=1029,U.length=1,Te=!0);Te&&(he.isWebGL2?k.drawBuffers(U):we.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}if(ie.viewport(M),ie.scissor(v),ie.setScissorTest(E),te){let Te=W.get(S.texture);k.framebufferTexture2D(36160,36064,34069+N,Te.__webglTexture,D)}else if(De){let Te=W.get(S.texture),Oe=N||0;k.framebufferTextureLayer(36160,36064,Te.__webglTexture,D||0,Oe)}w=-1},this.readRenderTargetPixels=function(S,N,D,H,te,De,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){ie.bindFramebuffer(36160,Te);try{let Oe=S.texture,Ve=Oe.format,ze=Oe.type;if(Ve!==kt&&q.convert(Ve)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=ze===Gi&&(we.has("EXT_color_buffer_half_float")||he.isWebGL2&&we.has("EXT_color_buffer_float"));if(ze!==Hi&&q.convert(ze)!==k.getParameter(35738)&&!(ze===vi&&(he.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k.checkFramebufferStatus(36160)===36053?N>=0&&N<=S.width-H&&D>=0&&D<=S.height-te&&k.readPixels(N,D,H,te,q.convert(Ve),q.convert(ze),De):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Oe=y!==null?W.get(y).__webglFramebuffer:null;ie.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(S,N,D=0){let H=Math.pow(2,-D),te=Math.floor(N.image.width*H),De=Math.floor(N.image.height*H),Ee=q.convert(N.format);he.isWebGL2&&(Ee===6407&&(Ee=32849),Ee===6408&&(Ee=32856)),K.setTexture2D(N,0),k.copyTexImage2D(3553,D,Ee,S.x,S.y,te,De,0),ie.unbindTexture()},this.copyTextureToTexture=function(S,N,D,H=0){let te=N.image.width,De=N.image.height,Ee=q.convert(D.format),Te=q.convert(D.type);K.setTexture2D(D,0),k.pixelStorei(37440,D.flipY),k.pixelStorei(37441,D.premultiplyAlpha),k.pixelStorei(3317,D.unpackAlignment),N.isDataTexture?k.texSubImage2D(3553,H,S.x,S.y,te,De,Ee,Te,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(3553,H,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,Ee,N.mipmaps[0].data):k.texSubImage2D(3553,H,S.x,S.y,Ee,Te,N.image),H===0&&D.generateMipmaps&&k.generateMipmap(3553),ie.unbindTexture()},this.copyTextureToTexture3D=function(S,N,D,H,te=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let De=S.max.x-S.min.x+1,Ee=S.max.y-S.min.y+1,Te=S.max.z-S.min.z+1,Oe=q.convert(H.format),Ve=q.convert(H.type),ze;if(H.isDataTexture3D)K.setTexture3D(H,0),ze=32879;else if(H.isDataTexture2DArray)K.setTexture2DArray(H,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,H.flipY),k.pixelStorei(37441,H.premultiplyAlpha),k.pixelStorei(3317,H.unpackAlignment);let He=k.getParameter(3314),Ce=k.getParameter(32878),xi=k.getParameter(3316),ot=k.getParameter(3315),kn=k.getParameter(32877),rn=D.isCompressedTexture?D.mipmaps[0]:D.image;k.pixelStorei(3314,rn.width),k.pixelStorei(32878,rn.height),k.pixelStorei(3316,S.min.x),k.pixelStorei(3315,S.min.y),k.pixelStorei(32877,S.min.z),D.isDataTexture||D.isDataTexture3D?k.texSubImage3D(ze,te,N.x,N.y,N.z,De,Ee,Te,Oe,Ve,rn.data):D.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ze,te,N.x,N.y,N.z,De,Ee,Te,Oe,rn.data)):k.texSubImage3D(ze,te,N.x,N.y,N.z,De,Ee,Te,Oe,Ve,rn),k.pixelStorei(3314,He),k.pixelStorei(32878,Ce),k.pixelStorei(3316,xi),k.pixelStorei(3315,ot),k.pixelStorei(32877,kn),te===0&&H.generateMipmaps&&k.generateMipmap(ze),ie.unbindTexture()},this.initTexture=function(S){K.setTexture2D(S,0),ie.unbindTexture()},this.resetState=function(){p=0,x=0,y=null,ie.reset(),de.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var rh=class extends We{};rh.prototype.isWebGL1Renderer=!0;var xo=class{constructor(e,t=25e-5){this.name="",this.color=new ue(e),this.density=t}clone(){return new xo(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};xo.prototype.isFogExp2=!0;var _o=class{constructor(e,t=1,n=1e3){this.name="",this.color=new ue(e),this.near=t,this.far=n}clone(){return new _o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};_o.prototype.isFog=!0;var ts=class extends Ge{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};ts.prototype.isScene=!0;var pr=class{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};pr.prototype.isInterleavedBuffer=!0;var rt=new L,mr=class{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};mr.prototype.isInterleavedBufferAttribute=!0;var ul=class extends bt{constructor(e){super();this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};ul.prototype.isSpriteMaterial=!0;var gr,ns=new L,xr=new L,_r=new L,yr=new $,is=new $,sh=new Se,yo=new L,rs=new L,vo=new L,oh=new $,hl=new $,ah=new $,lh=class extends Ge{constructor(e){super();if(this.type="Sprite",gr===void 0){gr=new Je;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pr(t,5);gr.setIndex([0,1,2,0,2,3]),gr.setAttribute("position",new mr(n,3,0,!1)),gr.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=gr,this.material=e!==void 0?e:new ul,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),sh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-_r.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;bo(yo.set(-.5,-.5,0),_r,o,xr,i,r),bo(rs.set(.5,-.5,0),_r,o,xr,i,r),bo(vo.set(.5,.5,0),_r,o,xr,i,r),oh.set(0,0),hl.set(1,0),ah.set(1,1);let a=e.ray.intersectTriangle(yo,rs,vo,!1,ns);if(a===null&&(bo(rs.set(-.5,.5,0),_r,o,xr,i,r),hl.set(0,1),a=e.ray.intersectTriangle(yo,vo,rs,!1,ns),a===null))return;let l=e.ray.origin.distanceTo(ns);l<e.near||l>e.far||t.push({distance:l,point:ns.clone(),uv:it.getUV(ns,yo,rs,vo,oh,hl,ah,new $),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};lh.prototype.isSprite=!0;function bo(s,e,t,n,i,r){yr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(is.x=r*yr.x-i*yr.y,is.y=i*yr.x+r*yr.y):is.copy(yr),s.copy(e),s.x+=is.x,s.y+=is.y,s.applyMatrix4(sh)}var ch=new L,uh=new Xe,hh=new Xe,_y=new L,fh=new Se,fl=class extends nt{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Se,this.bindMatrixInverse=new Se}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;uh.fromBufferAttribute(i.attributes.skinIndex,e),hh.fromBufferAttribute(i.attributes.skinWeight,e),ch.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=hh.getComponent(r);if(o!==0){let a=uh.getComponent(r);fh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_y.copy(ch).applyMatrix4(fh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};fl.prototype.isSkinnedMesh=!0;var dh=class extends Ge{constructor(){super();this.type="Bone"}};dh.prototype.isBone=!0;var ph=class extends mt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=dt,u=dt,f,h){super(null,o,a,l,c,u,i,r,f,h);this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};ph.prototype.isDataTexture=!0;var wo=class extends at{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};wo.prototype.isInstancedBufferAttribute=!0;var mh=new Se,gh=new Se,Mo=[],ss=new nt,xh=class extends nt{constructor(e,t,n){super(e,t);this.instanceMatrix=new wo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,mh),gh.multiplyMatrices(n,mh),ss.matrixWorld=gh,ss.raycast(e,Mo);for(let o=0,a=Mo.length;o<a;o++){let l=Mo[o];l.instanceId=r,l.object=this,t.push(l)}Mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};xh.prototype.isInstancedMesh=!0;var vr=class extends bt{constructor(e){super();this.type="LineBasicMaterial",this.color=new ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}};vr.prototype.isLineBasicMaterial=!0;var _h=new L,yh=new L,vh=new Se,dl=new Zn,So=new Si,To=class extends Ge{constructor(e=new Je,t=new vr){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)_h.fromBufferAttribute(t,i-1),yh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_h.distanceTo(yh);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;vh.copy(i).invert(),dl.copy(e.ray).applyMatrix4(vh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,f=new L,h=new L,d=this.isLineSegments?2:1;if(n.isBufferGeometry){let m=n.index,_=n.attributes.position;if(m!==null){let p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let y=p,w=x-1;y<w;y+=d){let b=m.getX(y),M=m.getX(y+1);if(c.fromBufferAttribute(_,b),u.fromBufferAttribute(_,M),dl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let y=p,w=x-1;y<w;y+=d){if(c.fromBufferAttribute(_,y),u.fromBufferAttribute(_,y+1),dl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);let M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};To.prototype.isLine=!0;var bh=new L,wh=new L,Eo=class extends To{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)bh.fromBufferAttribute(t,i),wh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bh.distanceTo(wh);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};Eo.prototype.isLineSegments=!0;var Mh=class extends To{constructor(e,t){super(e,t);this.type="LineLoop"}};Mh.prototype.isLineLoop=!0;var pl=class extends bt{constructor(e){super();this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}};pl.prototype.isPointsMaterial=!0;var Sh=new Se,ml=new Zn,Ao=new Si,Lo=new L,Th=class extends Ge{constructor(e=new Je,t=new pl){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;Sh.copy(i).invert(),ml.copy(e.ray).applyMatrix4(Sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){let c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=h,g=d;m<g;m++){let _=c.getX(m);Lo.fromBufferAttribute(f,_),Eh(Lo,_,l,i,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,g=d;m<g;m++)Lo.fromBufferAttribute(f,m),Eh(Lo,m,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Th.prototype.isPoints=!0;function Eh(s,e,t,n,i,r,o){let a=ml.distanceSqToPoint(s);if(a<t){let l=new L;ml.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Ah=class extends mt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c);this.format=a!==void 0?a:Vn,this.minFilter=o!==void 0?o:Zt,this.magFilter=r!==void 0?r:Zt,this.generateMipmaps=!1;let u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};Ah.prototype.isVideoTexture=!0;var Lh=class extends mt{constructor(e,t,n,i,r,o,a,l,c,u,f,h){super(null,o,a,l,c,u,i,r,f,h);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};Lh.prototype.isCompressedTexture=!0;var Ch=class extends mt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c);this.needsUpdate=!0}};Ch.prototype.isCanvasTexture=!0;var Ph=class extends mt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Vi,u!==Vi&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vi&&(n=Hs),n===void 0&&u===Wr&&(n=Vr);super(null,i,r,o,a,l,u,n,c);this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1}};Ph.prototype.isDepthTexture=!0;var Kb=new L,ew=new L,tw=new L,nw=new it;var Vt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],h=n[i+1]-u,d=(o-u)/h;return(i+d)/(r-1)}getTangent(e,t){let n=1e-4,i=e-n,r=e+n;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new $:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],o=[],a=new L,l=new Se;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new L),i[d].normalize()}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Dt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Dt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},os=class extends Vt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new $,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};os.prototype.isEllipseCurve=!0;var gl=class extends os{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o);this.type="ArcCurve"}};gl.prototype.isArcCurve=!0;function xl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,i(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Co=new L,_l=new xl,yl=new xl,vl=new xl,bl=class extends Vt{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Co.subVectors(i[0],i[1]).add(i[0]),c=Co);let f=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Co.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Co),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(u),d);g<1e-4&&(g=1),m<1e-4&&(m=g),_<1e-4&&(_=g),_l.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,m,g,_),yl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,m,g,_),vl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,m,g,_)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),yl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),vl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(_l.calc(l),yl.calc(l),vl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};bl.prototype.isCatmullRomCurve3=!0;function Rh(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function yy(s,e){let t=1-s;return t*t*e}function vy(s,e){return 2*(1-s)*s*e}function by(s,e){return s*s*e}function as(s,e,t,n){return yy(s,e)+vy(s,t)+by(s,n)}function wy(s,e){let t=1-s;return t*t*t*e}function My(s,e){let t=1-s;return 3*t*t*s*e}function Sy(s,e){return 3*(1-s)*s*s*e}function Ty(s,e){return s*s*s*e}function ls(s,e,t,n,i){return wy(s,e)+My(s,t)+Sy(s,n)+Ty(s,i)}var Po=class extends Vt{constructor(e=new $,t=new $,n=new $,i=new $){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ls(e,i.x,r.x,o.x,a.x),ls(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Po.prototype.isCubicBezierCurve=!0;var wl=class extends Vt{constructor(e=new L,t=new L,n=new L,i=new L){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ls(e,i.x,r.x,o.x,a.x),ls(e,i.y,r.y,o.y,a.y),ls(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};wl.prototype.isCubicBezierCurve3=!0;var cs=class extends Vt{constructor(e=new $,t=new $){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};cs.prototype.isLineCurve=!0;var Ih=class extends Vt{constructor(e=new L,t=new L){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ro=class extends Vt{constructor(e=new $,t=new $,n=new $){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(as(e,i.x,r.x,o.x),as(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ro.prototype.isQuadraticBezierCurve=!0;var Ml=class extends Vt{constructor(e=new L,t=new L,n=new L){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(as(e,i.x,r.x,o.x),as(e,i.y,r.y,o.y),as(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ml.prototype.isQuadraticBezierCurve3=!0;var Io=class extends Vt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Rh(a,l.x,c.x,u.x,f.x),Rh(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new $().fromArray(i))}return this}};Io.prototype.isSplineCurve=!0;var Dh=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:bl,CubicBezierCurve:Po,CubicBezierCurve3:wl,EllipseCurve:os,LineCurve:cs,LineCurve3:Ih,QuadraticBezierCurve:Ro,QuadraticBezierCurve3:Ml,SplineCurve:Io}),Ey={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Fh(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,f,h,d;if(n&&(r=Ry(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let m=t;m<i;m+=t)f=s[m],h=s[m+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?1/d:0}return us(r,o,t,a,l,d),o}};function Fh(s,e,t,n,i){let r,o;if(i===Gy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Nh(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Nh(r,s[r],s[r+1],o);return o&&Do(o,o.next)&&(fs(o),o=o.next),o}function ni(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Do(t,t.next)||Ke(t.prev,t,t.next)===0)){if(fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function us(s,e,t,n,i,r,o){if(!s)return;!o&&r&&By(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ly(s,n,i,r):Ay(s)){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),fs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Cy(ni(s),e,t),us(s,e,t,n,i,r,2)):o===2&&Py(s,e,t,n,i,r):us(ni(s),e,t,n,i,r,1);break}}}function Ay(s){let e=s.prev,t=s,n=s.next;if(Ke(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(br(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Ke(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Ly(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Ke(i,r,o)>=0)return!1;let a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,l=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,c=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,u=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,f=Sl(a,l,e,t,n),h=Sl(c,u,e,t,n),d=s.prevZ,m=s.nextZ;for(;d&&d.z>=f&&m&&m.z<=h;){if(d!==s.prev&&d!==s.next&&br(i.x,i.y,r.x,r.y,o.x,o.y,d.x,d.y)&&Ke(d.prev,d,d.next)>=0||(d=d.prevZ,m!==s.prev&&m!==s.next&&br(i.x,i.y,r.x,r.y,o.x,o.y,m.x,m.y)&&Ke(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;d&&d.z>=f;){if(d!==s.prev&&d!==s.next&&br(i.x,i.y,r.x,r.y,o.x,o.y,d.x,d.y)&&Ke(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;m&&m.z<=h;){if(m!==s.prev&&m!==s.next&&br(i.x,i.y,r.x,r.y,o.x,o.y,m.x,m.y)&&Ke(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Cy(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Do(i,r)&&Oh(i,n,n.next,r)&&hs(i,r)&&hs(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),fs(n),fs(n.next),n=s=r),n=n.next}while(n!==s);return ni(n)}function Py(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Uy(o,a)){let l=Bh(o,a);o=ni(o,o.next),l=ni(l,l.next),us(o,e,t,n,i,r),us(l,e,t,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function Ry(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Fh(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(zy(c));for(i.sort(Iy),r=0;r<i.length;r++)Dy(i[r],t),t=ni(t,t.next);return t}function Iy(s,e){return s.x-e.x}function Dy(s,e){if(e=Fy(s,e),e){let t=Bh(e,s);ni(e,e.next),ni(t,t.next)}}function Fy(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r){if(r=h,h===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;let a=o,l=o.x,c=o.y,u=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&br(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),hs(t,s)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&Oy(o,t)))&&(o=t,u=f)),t=t.next;while(t!==a);return o}function Oy(s,e){return Ke(s.prev,s,e.prev)<0&&Ke(e.next,s,s.next)<0}function By(s,e,t,n){let i=s;do i.z===null&&(i.z=Sl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ny(i)}function Ny(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Sl(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function zy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function br(s,e,t,n,i,r,o,a){return(i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0}function Uy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ky(s,e)&&(hs(s,e)&&hs(e,s)&&Hy(s,e)&&(Ke(s.prev,s,e.prev)||Ke(s,e.prev,e))||Do(s,e)&&Ke(s.prev,s,s.next)>0&&Ke(e.prev,e,e.next)>0)}function Ke(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Do(s,e){return s.x===e.x&&s.y===e.y}function Oh(s,e,t,n){let i=Oo(Ke(s,e,t)),r=Oo(Ke(s,e,n)),o=Oo(Ke(t,n,s)),a=Oo(Ke(t,n,e));return!!(i!==r&&o!==a||i===0&&Fo(s,t,e)||r===0&&Fo(s,n,e)||o===0&&Fo(t,s,n)||a===0&&Fo(t,e,n))}function Fo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Oo(s){return s>0?1:s<0?-1:0}function ky(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Oh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function hs(s,e){return Ke(s.prev,s,s.next)<0?Ke(s,e,s.next)>=0&&Ke(s,s.prev,e)>=0:Ke(s,e,s.prev)<0||Ke(s,s.next,e)<0}function Hy(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Bh(s,e){let t=new Tl(s.i,s.x,s.y),n=new Tl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nh(s,e,t,n){let i=new Tl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Tl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var vn=class{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return vn.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];zh(e),Uh(n,e);let o=e.length;t.forEach(zh);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Uh(n,t[l]);let a=Ey.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function zh(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Uh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ai=class extends Je{constructor(e,t){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ct(i,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:100,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:d-2,g=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Vy;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),f=t.amount);let y,w=!1,b,M,v,E;p&&(y=p.getSpacedPoints(u),w=!0,h=!1,b=p.computeFrenetFrames(u,!1),M=new L,v=new L,E=new L),h||(_=0,d=0,m=0,g=0);let P=a.extractPoints(c),R=P.shape,C=P.holes;if(!vn.isClockWise(R)){R=R.reverse();for(let W=0,K=C.length;W<K;W++){let ne=C[W];vn.isClockWise(ne)&&(C[W]=ne.reverse())}}let O=vn.triangulateShape(R,C),B=R;for(let W=0,K=C.length;W<K;W++){let ne=C[W];R=R.concat(ne)}function z(W,K,ne){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(ne).add(W)}let F=R.length,U=O.length;function Z(W,K,ne){let xe,ae,A,T=W.x-K.x,V=W.y-K.y,X=ne.x-W.x,oe=ne.y-W.y,fe=T*T+V*V,Me=T*oe-V*X;if(Math.abs(Me)>Number.EPSILON){let ve=Math.sqrt(fe),Ae=Math.sqrt(X*X+oe*oe),_e=K.x-V/ve,I=K.y+T/ve,le=ne.x-oe/Ae,q=ne.y+X/Ae,de=((le-_e)*oe-(q-I)*X)/(T*oe-V*X);xe=_e+T*de-W.x,ae=I+V*de-W.y;let me=xe*xe+ae*ae;if(me<=2)return new $(xe,ae);A=Math.sqrt(me/2)}else{let ve=!1;T>Number.EPSILON?X>Number.EPSILON&&(ve=!0):T<-Number.EPSILON?X<-Number.EPSILON&&(ve=!0):Math.sign(V)===Math.sign(oe)&&(ve=!0),ve?(xe=-V,ae=T,A=Math.sqrt(fe)):(xe=T,ae=V,A=Math.sqrt(fe/2))}return new $(xe/A,ae/A)}let se=[];for(let W=0,K=B.length,ne=K-1,xe=W+1;W<K;W++,ne++,xe++)ne===K&&(ne=0),xe===K&&(xe=0),se[W]=Z(B[W],B[ne],B[xe]);let ce=[],J,ge=se.concat();for(let W=0,K=C.length;W<K;W++){let ne=C[W];J=[];for(let xe=0,ae=ne.length,A=ae-1,T=xe+1;xe<ae;xe++,A++,T++)A===ae&&(A=0),T===ae&&(T=0),J[xe]=Z(ne[xe],ne[A],ne[T]);ce.push(J),ge=ge.concat(J)}for(let W=0;W<_;W++){let K=W/_,ne=d*Math.cos(K*Math.PI/2),xe=m*Math.sin(K*Math.PI/2)+g;for(let ae=0,A=B.length;ae<A;ae++){let T=z(B[ae],se[ae],xe);ye(T.x,T.y,-ne)}for(let ae=0,A=C.length;ae<A;ae++){let T=C[ae];J=ce[ae];for(let V=0,X=T.length;V<X;V++){let oe=z(T[V],J[V],xe);ye(oe.x,oe.y,-ne)}}}let G=m+g;for(let W=0;W<F;W++){let K=h?z(R[W],ge[W],G):R[W];w?(v.copy(b.normals[0]).multiplyScalar(K.x),M.copy(b.binormals[0]).multiplyScalar(K.y),E.copy(y[0]).add(v).add(M),ye(E.x,E.y,E.z)):ye(K.x,K.y,0)}for(let W=1;W<=u;W++)for(let K=0;K<F;K++){let ne=h?z(R[K],ge[K],G):R[K];w?(v.copy(b.normals[W]).multiplyScalar(ne.x),M.copy(b.binormals[W]).multiplyScalar(ne.y),E.copy(y[W]).add(v).add(M),ye(E.x,E.y,E.z)):ye(ne.x,ne.y,f/u*W)}for(let W=_-1;W>=0;W--){let K=W/_,ne=d*Math.cos(K*Math.PI/2),xe=m*Math.sin(K*Math.PI/2)+g;for(let ae=0,A=B.length;ae<A;ae++){let T=z(B[ae],se[ae],xe);ye(T.x,T.y,f+ne)}for(let ae=0,A=C.length;ae<A;ae++){let T=C[ae];J=ce[ae];for(let V=0,X=T.length;V<X;V++){let oe=z(T[V],J[V],xe);w?ye(oe.x,oe.y+y[u-1].y,y[u-1].x+ne):ye(oe.x,oe.y,f+ne)}}}Q(),pe();function Q(){let W=i.length/3;if(h){let K=0,ne=F*K;for(let xe=0;xe<U;xe++){let ae=O[xe];we(ae[2]+ne,ae[1]+ne,ae[0]+ne)}K=u+_*2,ne=F*K;for(let xe=0;xe<U;xe++){let ae=O[xe];we(ae[0]+ne,ae[1]+ne,ae[2]+ne)}}else{for(let K=0;K<U;K++){let ne=O[K];we(ne[2],ne[1],ne[0])}for(let K=0;K<U;K++){let ne=O[K];we(ne[0]+F*u,ne[1]+F*u,ne[2]+F*u)}}n.addGroup(W,i.length/3-W,0)}function pe(){let W=i.length/3,K=0;k(B,K),K+=B.length;for(let ne=0,xe=C.length;ne<xe;ne++){let ae=C[ne];k(ae,K),K+=ae.length}n.addGroup(W,i.length/3-W,1)}function k(W,K){let ne=W.length;for(;--ne>=0;){let xe=ne,ae=ne-1;ae<0&&(ae=W.length-1);for(let A=0,T=u+_*2;A<T;A++){let V=F*A,X=F*(A+1),oe=K+xe+V,fe=K+ae+V,Me=K+ae+X,ve=K+xe+X;he(oe,fe,Me,ve)}}}function ye(W,K,ne){l.push(W),l.push(K),l.push(ne)}function we(W,K,ne){ie(W),ie(K),ie(ne);let xe=i.length/3,ae=x.generateTopUV(n,i,xe-3,xe-2,xe-1);Pe(ae[0]),Pe(ae[1]),Pe(ae[2])}function he(W,K,ne,xe){ie(W),ie(K),ie(xe),ie(K),ie(ne),ie(xe);let ae=i.length/3,A=x.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);Pe(A[0]),Pe(A[1]),Pe(A[3]),Pe(A[1]),Pe(A[2]),Pe(A[3])}function ie(W){i.push(l[W*3+0]),i.push(l[W*3+1]),i.push(l[W*3+2])}function Pe(W){r.push(W.x),r.push(W.y)}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wy(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Dh[i.type]().fromJSON(i)),new Ai(n,e.options)}},Vy={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new $(r,o),new $(a,l),new $(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[i*3],d=e[i*3+1],m=e[i*3+2],g=e[r*3],_=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-f),new $(h,1-m),new $(g,1-p)]:[new $(a,1-l),new $(u,1-f),new $(d,1-m),new $(_,1-p)]}};function Wy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Bo=class extends Je{constructor(e,t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ct(i,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function c(u){let f=i.length/3,h=u.extractPoints(t),d=h.shape,m=h.holes;vn.isClockWise(d)===!1&&(d=d.reverse());for(let _=0,p=m.length;_<p;_++){let x=m[_];vn.isClockWise(x)===!0&&(m[_]=x.reverse())}let g=vn.triangulateShape(d,m);for(let _=0,p=m.length;_<p;_++){let x=m[_];d=d.concat(x)}for(let _=0,p=d.length;_<p;_++){let x=d[_];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let _=0,p=g.length;_<p;_++){let x=g[_],y=x[0]+f,w=x[1]+f,b=x[2]+f;n.push(y,w,b),l+=3}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return qy(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new Bo(n,e.curveSegments)}};function qy(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var kh=class extends bt{constructor(e){super();this.type="ShadowMaterial",this.color=new ue(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};kh.prototype.isShadowMaterial=!0;var El=class extends bt{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};El.prototype.isMeshStandardMaterial=!0;var Hh=class extends El{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenTint=new ue(0),this.transmission=0,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new ue(1,1,1),this.specularTintMap=null,this._clearcoat=0,this._transmission=0,this.setValues(e)}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheenTint.copy(e.sheenTint),this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationTint.copy(e.attenuationTint),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularTint.copy(e.specularTint),this.specularTintMap=e.specularTintMap,this}};Hh.prototype.isMeshPhysicalMaterial=!0;var Gh=class extends bt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};Gh.prototype.isMeshPhongMaterial=!0;var Vh=class extends bt{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Vh.prototype.isMeshToonMaterial=!0;var Wh=class extends bt{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};Wh.prototype.isMeshNormalMaterial=!0;var qh=class extends bt{constructor(e){super();this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};qh.prototype.isMeshLambertMaterial=!0;var Xh=class extends bt{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}};Xh.prototype.isMeshMatcapMaterial=!0;var Yh=class extends vr{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};Yh.prototype.isLineDashedMaterial=!0;var Qe={arraySlice:function(s,e,t){return Qe.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){let r=s.clone();r.name=e;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],u=c.getValueSize(),f=[],h=[];for(let d=0;d<c.times.length;++d){let m=c.times[d]*i;if(!(m<t||m>=n)){f.push(c.times[d]);for(let g=0;g<u;++g)h.push(c.values[d*u+g])}}f.length!==0&&(c.times=Qe.convertArray(f,c.times.constructor),c.values=Qe.convertArray(h,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0,f=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let h=0,d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let m=a.times.length-1,g;if(r<=a.times[0]){let p=u,x=f-u;g=Qe.arraySlice(a.values,p,x)}else if(r>=a.times[m]){let p=m*f+u,x=p+f-u;g=Qe.arraySlice(a.values,p,x)}else{let p=a.createInterpolant(),x=u,y=f-u;p.evaluate(r),g=Qe.arraySlice(p.resultBuffer,x,y)}l==="quaternion"&&new Lt().fromArray(g).normalize().conjugate().toArray(g);let _=c.times.length;for(let p=0;p<_;++p){let x=p*d+h;if(l==="quaternion")Lt.multiplyQuaternionsFlat(c.values,x,g,0,c.values,x);else{let y=d-h*2;for(let w=0;w<y;++w)c.values[x+w]-=g[w]}}}return s.blendMode=iu,s}},Dn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};Dn.prototype.beforeStart_=Dn.prototype.copySampleValue_;Dn.prototype.afterEnd_=Dn.prototype.copySampleValue_;var Zh=class extends Dn{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wi,endingEnd:Wi}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qi:r=e,a=2*t-n;break;case qs:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qi:o=e,l=2*n-t;break;case qs:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),g=m*m,_=g*m,p=-h*_+2*h*g-h*m,x=(1+h)*_+(-1.5-2*h)*g+(-.5+h)*m+1,y=(-1-d)*_+(1.5+d)*g+.5*m,w=d*_-d*g;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+x*o[c+b]+y*o[l+b]+w*o[f+b];return r}},Al=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},Jh=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},un=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qe.convertArray(t,this.TimeBufferType),this.values=Qe.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qe.convertArray(e.times,Array),values:Qe.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=Qe.arraySlice(n,r,o),this.values=Qe.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Qe.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=Qe.arraySlice(this.times),t=Qe.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===xa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){let g=t[f+m];if(g!==t[h+m]||g!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Qe.arraySlice(e,0,o),this.values=Qe.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=Qe.arraySlice(this.times,0),t=Qe.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Ws;var Li=class extends un{};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Vs;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends un{};Ll.prototype.ValueTypeName="color";var ds=class extends un{};ds.prototype.ValueTypeName="number";var jh=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Lt.slerpFlat(r,0,o,c-a,o,c,l);return r}},wr=class extends un{InterpolantFactoryMethodLinear(e){return new jh(this.times,this.values,this.getValueSize(),e)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.DefaultInterpolation=Ws;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends un{};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Vs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends un{};ps.prototype.ValueTypeName="vector";var Cl=class{constructor(e,t=-1,n,i=_a){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=sn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Yy(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Qe.getKeyframeOrder(l);l=Qe.sortedArray(l,1,u),c=Qe.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ds(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let f=u[1],h=i[f];h||(i[f]=h=[]),h.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(f,h,d,m,g){if(d.length!==0){let _=[],p=[];Qe.flattenJSON(d,_,p,m),_.length!==0&&g.push(new f(h,_,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let f=0;f<c.length;f++){let h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let d={},m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let g=0;g<h[m].morphTargets.length;g++)d[h[m].morphTargets[g]]=-1;for(let g in d){let _=[],p=[];for(let x=0;x!==h[m].morphTargets.length;++x){let y=h[m];_.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new ds(".morphTargetInfluence["+g+"]",_,p))}l=d.length*(o||1)}else{let d=".bones["+t[f].name+"]";n(ps,d+".position",h,"pos",i),n(wr,d+".quaternion",h,"rot",i),n(ps,d+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Xy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return Ll;case"quaternion":return wr;case"bool":case"boolean":return Li;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Yy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Xy(s.type);if(s.times===void 0){let t=[],n=[];Qe.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Mr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},$h=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},Zy=new $h,Fn=class{constructor(e){this.manager=e!==void 0?e:Zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},hn={},Qh=class extends Fn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Mr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;if(hn[e]!==void 0){hn[e].push({onLoad:t,onProgress:n,onError:i});return}let a=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(a),c;if(l){let u=l[1],f=!!l[2],h=l[3];h=decodeURIComponent(h),f&&(h=atob(h));try{let d,m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":let g=new Uint8Array(h.length);for(let p=0;p<h.length;p++)g[p]=h.charCodeAt(p);m==="blob"?d=new Blob([g.buffer],{type:u}):d=g.buffer;break;case"document":d=new DOMParser().parseFromString(h,u);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){t&&t(d),r.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{hn[e]=[],hn[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(u){let f=this.response,h=hn[e];if(delete hn[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Mr.add(e,f);for(let d=0,m=h.length;d<m;d++){let g=h[d];g.onLoad&&g.onLoad(f)}r.manager.itemEnd(e)}else{for(let d=0,m=h.length;d<m;d++){let g=h[d];g.onError&&g.onError(u)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(u){let f=hn[e];for(let h=0,d=f.length;h<d;h++){let m=f[h];m.onProgress&&m.onProgress(u)}},!1),c.addEventListener("error",function(u){let f=hn[e];delete hn[e];for(let h=0,d=f.length;h<d;h++){let m=f[h];m.onError&&m.onError(u)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(u){let f=hn[e];delete hn[e];for(let h=0,d=f.length;h<d;h++){let m=f[h];m.onError&&m.onError(u)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let u in this.requestHeader)c.setRequestHeader(u,this.requestHeader[u]);c.send(null)}return r.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Pl=class extends Fn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Mr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),Mr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},Kh=class extends Fn{constructor(e){super(e)}load(e,t,n,i){let r=new jr,o=new Pl(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}};var Pi=class extends Fn{constructor(e){super(e)}load(e,t,n,i){let r=new mt,o=new Pl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a;let l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=l?Vn:kt,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ef=class extends Vt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new cs(t,e))}getPoint(e){let t=e*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=t){let r=n[i]-t,o=this.curves[i],a=o.getLength(),l=a===0?0:1-r/a;return o.getPointAt(l)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Dh[i.type]().fromJSON(i))}return this}},ms=class extends ef{constructor(e){super();this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new cs(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ro(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Po(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Io(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new os(e,t,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ri=class extends ms{constructor(e){super(e);this.uuid=sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ms().fromJSON(i))}return this}},fn=class extends Ge{constructor(e,t=1){super();this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};fn.prototype.isLight=!0;var tf=class extends fn{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.groundColor=new ue(t)}copy(e){return fn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};tf.prototype.isHemisphereLight=!0;var nf=new Se,rf=new L,sf=new L,No=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(rf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rl=class extends No{constructor(){super(new wt(50,1,.5,500));this.focus=1}updateMatrices(e){let t=this.camera,n=Ma*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};Rl.prototype.isSpotLightShadow=!0;var of=class extends fn{constructor(e,t,n=0,i=Math.PI/3,r=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.shadow=new Rl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};of.prototype.isSpotLight=!0;var af=new Se,gs=new L,Il=new L,Dl=class extends No{constructor(){super(new wt(90,1,.5,500));this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(gs),Il.copy(n.position),Il.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Il),n.updateMatrixWorld(),i.makeTranslation(-gs.x,-gs.y,-gs.z),af.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af)}};Dl.prototype.isPointLightShadow=!0;var lf=class extends fn{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};lf.prototype.isPointLight=!0;var Fl=class extends No{constructor(){super(new fo(-5,5,5,-5,.5,500))}};Fl.prototype.isDirectionalLightShadow=!0;var cf=class extends fn{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.shadow=new Fl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};cf.prototype.isDirectionalLight=!0;var uf=class extends fn{constructor(e,t){super(e,t);this.type="AmbientLight"}};uf.prototype.isAmbientLight=!0;var hf=class extends fn{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};hf.prototype.isRectAreaLight=!0;var Ol=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}};Ol.prototype.isSphericalHarmonics3=!0;var zo=class extends fn{constructor(e=new Ol,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};zo.prototype.isLightProbe=!0;var ff=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},df=class extends Je{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};df.prototype.isInstancedBufferGeometry=!0;var pf=class extends Fn{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Mr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Mr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}};pf.prototype.isImageBitmapLoader=!0;var mf=class{constructor(){this.type="ShapePath",this.color=new ue,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ms,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(x){let y=[];for(let w=0,b=x.length;w<b;w++){let M=x[w],v=new Ri;v.curves=M.curves,y.push(v)}return y}function i(x,y){let w=y.length,b=!1;for(let M=w-1,v=0;v<w;M=v++){let E=y[M],P=y[v],R=P.x-E.x,C=P.y-E.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(E=y[v],R=-R,P=y[M],C=-C),x.y<E.y||x.y>P.y)continue;if(x.y===E.y){if(x.x===E.x)return!0}else{let Y=C*(x.x-E.x)-R*(x.y-E.y);if(Y===0)return!0;if(Y<0)continue;b=!b}}else{if(x.y!==E.y)continue;if(P.x<=x.x&&x.x<=E.x||E.x<=x.x&&x.x<=P.x)return!0}}return b}let r=vn.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let a,l,c,u=[];if(o.length===1)return l=o[0],c=new Ri,c.curves=l.curves,u.push(c),u;let f=!r(o[0].getPoints());f=e?!f:f;let h=[],d=[],m=[],g=0,_;d[g]=void 0,m[g]=[];for(let x=0,y=o.length;x<y;x++)l=o[x],_=l.getPoints(),a=r(_),a=e?!a:a,a?(!f&&d[g]&&g++,d[g]={s:new Ri,p:_},d[g].s.curves=l.curves,f&&g++,m[g]=[]):m[g].push({h:l,p:_[0]});if(!d[0])return n(o);if(d.length>1){let x=!1,y=[];for(let w=0,b=d.length;w<b;w++)h[w]=[];for(let w=0,b=d.length;w<b;w++){let M=m[w];for(let v=0;v<M.length;v++){let E=M[v],P=!0;for(let R=0;R<d.length;R++)i(E.p,d[R].p)&&(w!==R&&y.push({froms:w,tos:R,hole:v}),P?(P=!1,h[R].push(E)):x=!0);P&&h[w].push(E)}}y.length>0&&(x||(m=h))}let p;for(let x=0,y=d.length;x<y;x++){c=d[x].s,u.push(c),p=m[x];for(let w=0,b=p.length;w<b;w++)c.holes.push(p[w].h)}return u}},gf=class{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){let n=[],i=Jy(e,t,this.data);for(let r=0,o=i.length;r<o;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}};function Jy(s,e,t){let n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[],a=0,l=0;for(let c=0;c<n.length;c++){let u=n[c];if(u===`
`)a=0,l-=r;else{let f=jy(u,i,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function jy(s,e,t,n,i){let r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}let o=new mf,a,l,c,u,f,h,d,m;if(r.o){let g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let _=0,p=g.length;_<p;)switch(g[_++]){case"m":a=g[_++]*e+t,l=g[_++]*e+n,o.moveTo(a,l);break;case"l":a=g[_++]*e+t,l=g[_++]*e+n,o.lineTo(a,l);break;case"q":c=g[_++]*e+t,u=g[_++]*e+n,f=g[_++]*e+t,h=g[_++]*e+n,o.quadraticCurveTo(f,h,c,u);break;case"b":c=g[_++]*e+t,u=g[_++]*e+n,f=g[_++]*e+t,h=g[_++]*e+n,d=g[_++]*e+t,m=g[_++]*e+n,o.bezierCurveTo(f,h,d,m,c,u);break}}return{offsetX:r.ha*e,path:o}}gf.prototype.isFont=!0;var Uo,$y={getContext:function(){return Uo===void 0&&(Uo=new(window.AudioContext||window.webkitAudioContext)),Uo},setContext:function(s){Uo=s}},xf=class extends Fn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new Qh(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let l=a.slice(0);$y.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}},_f=class extends zo{constructor(e,t,n=1){super(void 0,n);let i=new ue().set(e),r=new ue().set(t),o=new L(i.r,i.g,i.b),a=new L(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}};_f.prototype.isHemisphereLightProbe=!0;var yf=class extends zo{constructor(e,t=1){super(void 0,t);let n=new ue().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}};yf.prototype.isAmbientLightProbe=!0;var vf=class extends Ge{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var bf=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},wf=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Lt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Lt.multiplyQuaternionsFlat(e,o,e,t,e,n),Lt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Bl="\\[\\]\\.:\\/",Qy=new RegExp("["+Bl+"]","g"),Nl="[^"+Bl+"]",Ky="[^"+Bl.replace("\\.","")+"]",ev=/((?:WC+[\/:])*)/.source.replace("WC",Nl),tv=/(WCOD+)?/.source.replace("WCOD",Ky),nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),iv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),rv=new RegExp("^"+ev+tv+nv+iv+"$"),sv=["material","materials","bones"],Mf=class{constructor(e,t,n){let i=n||ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ke=class{constructor(e,t,n){this.path=t,this.parsedPath=n||ke.parseTrackName(t),this.node=ke.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ke.Composite(e,t,n):new ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qy,"")}static parseTrackName(e){let t=rv.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);sv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=ke.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=Mf;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sf=class{constructor(){this.uuid=sn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,l=e.length,c=this.nCachedObjects_;for(let u=0,f=arguments.length;u!==f;++u){let h=arguments[u],d=h.uuid,m=t[d];if(m===void 0){m=l++,t[d]=m,e.push(h);for(let g=0,_=o;g!==_;++g)r[g].push(new ke(h,n[g],i[g]))}else if(m<c){a=e[m];let g=--c,_=e[g];t[_.uuid]=m,e[m]=_,t[d]=g,e[g]=h;for(let p=0,x=o;p!==x;++p){let y=r[p],w=y[g],b=y[m];y[m]=w,b===void 0&&(b=new ke(h,n[p],i[p])),y[g]=b}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){let f=r++,h=e[f];t[h.uuid]=u,e[u]=h,t[c]=f,e[f]=l;for(let d=0,m=i;d!==m;++d){let g=n[d],_=g[f],p=g[u];g[u]=_,g[f]=p}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],u=c.uuid,f=t[u];if(f!==void 0)if(delete t[u],f<r){let h=--r,d=e[h],m=--o,g=e[m];t[d.uuid]=f,e[f]=d,t[g.uuid]=h,e[h]=g,e.pop();for(let _=0,p=i;_!==p;++_){let x=n[_],y=x[h],w=x[m];x[f]=y,x[h]=w,x.pop()}}else{let h=--o,d=e[h];h>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let m=0,g=i;m!==g;++m){let _=n[m];_[f]=_[h],_.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,f=new Array(c);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(f);for(let h=u,d=l.length;h!==d;++h){let m=l[h];f[h]=new ke(m,e,t)}return f}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}};Sf.prototype.isAnimationObjectGroup=!0;var Tf=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Wi,endingEnd:Wi};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Im,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case iu:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case _a:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Dm;if(e===0)return r===-1?i:o&&(r&1)==1?t-i:i;if(n===Rm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)==1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=qi,i.endingEnd=qi):(e?i.endingStart=this.zeroSlopeAtStart?qi:Wi:i.endingStart=qs,t?i.endingEnd=this.zeroSlopeAtEnd?qi:Wi:i.endingEnd=qs)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},Ef=class extends Wn{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==r;++f){let h=i[f],d=h.name,m=u[d];if(m!==void 0)o[f]=m;else{if(m=o[f],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}let g=t&&t._propertyBindings[f].binding.parsedPath;m=new wf(ke.create(n,d,g),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[f]=m}a[f].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let f=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Al(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Cl.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=_a),l!==void 0){let f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Tf(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Cl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};Ef.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var ko=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new ko(this.value.clone===void 0?this.value:this.value.clone())}},Af=class extends pr{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};Af.prototype.isInstancedInterleavedBuffer=!0;var Lf=class{constructor(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};Lf.prototype.isGLBufferAttribute=!0;var zl=class{constructor(e,t,n=0,i=1/0){this.ray=new Zn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return Ul(e,this,n,t),n.sort(Cf),n}intersectObjects(e,t=!1,n=[]){for(let i=0,r=e.length;i<r;i++)Ul(e[i],this,n,t);return n.sort(Cf),n}};function Cf(s,e){return s.distance-e.distance}function Ul(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)Ul(i[r],e,t,!0)}}var Pf=new $,Sr=class{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Pf.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Sr.prototype.isBox2=!0;var Rf=new L,Ho=new L,If=class{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rf.subVectors(e,this.start),Ho.subVectors(this.end,this.start);let n=Ho.dot(Ho),r=Ho.dot(Rf)/n;return t&&(r=Dt(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Df=class extends Ge{constructor(e){super();this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}};Df.prototype.isImmediateRenderObject=!0;var ii=new L,Go=new Se,kl=new Se,Ff=class extends Eo{constructor(e){let t=Of(e),n=new Je,i=[],r=[],o=new ue(0,0,1),a=new ue(0,1,0);for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new ct(i,3)),n.setAttribute("color",new ct(r,3));let l=new vr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");kl.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){let a=t[r];a.parent&&a.parent.isBone&&(Go.multiplyMatrices(kl,a.matrixWorld),ii.setFromMatrixPosition(Go),i.setXYZ(o,ii.x,ii.y,ii.z),Go.multiplyMatrices(kl,a.parent.matrixWorld),ii.setFromMatrixPosition(Go),i.setXYZ(o+1,ii.x,ii.y,ii.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Of(s){let e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Of(s.children[t]));return e}var Bf=class extends Eo{constructor(e=10,t=10,n=4473924,i=8947848){n=new ue(n),i=new ue(i);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,d=0,m=-a;h<=t;h++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let g=h===r?n:i;g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3}let u=new Je;u.setAttribute("position",new ct(l,3)),u.setAttribute("color",new ct(c,3));let f=new vr({vertexColors:!0,toneMapped:!1});super(u,f);this.type="GridHelper"}};var ov=new Float32Array(1),iw=new Int32Array(ov.buffer);Vt.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Vt.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};ms.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};Bf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Ff.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Fn.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),ff.extractUrlBase(s)};Fn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Sr.prototype.center=function(s){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(s)};Sr.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Sr.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Sr.prototype.size=function(s){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(s)};Jt.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};Jt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Jt.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Jt.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Jt.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};Si.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};$r.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};If.prototype.center=function(s){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s)};pt.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};pt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};pt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};pt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};pt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};pt.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Se.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};Se.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};Se.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)};Se.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};Se.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Se.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Se.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Se.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Se.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};Se.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Se.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Se.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Se.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Se.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Se.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Se.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Se.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Se.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};Se.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};gn.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};Lt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};Lt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Zn.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Zn.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};Zn.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};it.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};it.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};it.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};it.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};it.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};it.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),it.getBarycoord(s,e,t,n,i)};it.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),it.getNormal(s,e,t,n)};Ri.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};Ri.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Ai(this,s)};Ri.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Bo(this,s)};$.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};$.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};$.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};L.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};L.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};L.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};L.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};L.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};L.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};L.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};L.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};L.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Xe.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Xe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ge.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Ge.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ge.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};Ge.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ge.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Ge.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});nt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(nt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Fm},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});fl.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};wt.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(fn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(at.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Xs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Xs)}}});at.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Xs:qr),this};at.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},at.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Je.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Je.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new at(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};Je.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};Je.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Je.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Je.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Je.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Je.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});pr.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Xs:qr),this};pr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ai.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Ai.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Ai.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};ts.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};ko.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(bt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ue}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===Bc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties($t.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});We.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};We.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};We.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};We.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};We.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};We.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};We.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};We.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};We.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};We.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};We.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};We.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};We.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};We.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};We.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};We.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};We.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};We.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};We.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};We.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};We.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};We.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};We.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};We.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};We.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(We.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Xi:It}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(nh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(on.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});vf.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new xf().load(s,function(n){e.setBuffer(n)}),this};bf.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};uo.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};uo.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};bi.crossOrigin=void 0;bi.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new Pi;i.setCrossOrigin(this.crossOrigin);let r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};bi.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new Kh;i.setCrossOrigin(this.crossOrigin);let r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};bi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};bi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);var av=[];for(let s=0;s<256;s++)av[s]=(s<16?"0":"")+s.toString(16);var sw=Math.PI/180,ow=180/Math.PI;function Hl(s,e,t){return Math.max(e,Math.min(t,s))}function On(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Nf(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Pt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Tr={duration:.5,overwrite:!1,delay:0},Gl,bn=1e8,qe=1/bn,Vl=Math.PI*2,lv=Vl/4,cv=0,zf=Math.sqrt,uv=Math.cos,hv=Math.sin,Mt=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},Bn=function(e){return typeof e=="number"},Vo=function(e){return typeof e=="undefined"},Nn=function(e){return typeof e=="object"},Ft=function(e){return e!==!1},Uf=function(){return typeof window!="undefined"},kf=function(e){return xt(e)||Mt(e)},Hf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,Wl=/(?:-?\.?\d|\.)+/gi,ql=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ii=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yl=/[+-]=-?[.\d]+/,Gf=/[^,'"\[\]\s]+/gi,fv=/[\d.+\-=]+(?:e[-+]\d*)*/i,et,wn,Zl,Jl,qt={},Wo={},Vf,Wf=function(e){return(Wo=Ar(e,qt))&&nn},qo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xo=function(e,t){return!t&&console.warn(e)},qf=function(e,t){return e&&(qt[e]=t)&&Wo&&(Wo[e]=t)||qt},Er=function(){return 0},jl={},ri=[],$l={},Xf,Ot={},Ql={},Yf=30,Yo=[],Kl="",ec=function(e){var t=e[0],n,i;if(Nn(t)||xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Yo.length;i--&&!Yo[i].targetTest(t););n=Yo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new hc(e[i],n)))||e.splice(i,1);return e},si=function(e){return e._gsap||ec(en(e))[0]._gsap},tc=function(e,t,n){return(n=e[t])&&xt(n)?e[t]():Vo(n)&&e.getAttribute&&e.getAttribute(t)||n},Bt=function(e,t){return(e=e.split(",")).forEach(t)||e},Ne=function(e){return Math.round(e*1e5)/1e5||0},dv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Zo=function(){var e=ri.length,t=ri.slice(0),n,i;for($l={},ri.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zf=function(e,t,n,i){ri.length&&Zo(),e.render(t,n,i),ri.length&&Zo()},Jf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Gf).length<2?t:Mt(e)?e.trim():e},jf=function(e){return e},Qt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},pv=function(e,t){for(var n in t)n in e||n==="duration"||n==="ease"||(e[n]=t[n])},Ar=function(e,t){for(var n in t)e[n]=t[n];return e},$f=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Nn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},nc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Jo=function(e){var t=e.parent||et,n=e.keyframes?pv:Qt;if(Ft(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},mv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},gv=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},jo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},oi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Di=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_v=function s(e){return!e||e._ts&&s(e.parent)},Qf=function(e){return e._repeat?Lr(e._tTime,e=e.duration()+e._rDelay)*e:0},Lr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},$o=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ic=function(e){return e._end=Ne(e._start+(e._tDur/Math.abs(e._ts||e._rts||qe)||0))},Kf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ne(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ic(e),n._dirty||Di(n,e)),e},ed=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=$o(e.rawTime(),t),(!t._dur||_s(0,t.totalDuration(),n)-t._tTime>qe)&&t.render(n,!0)),Di(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-qe}},Mn=function(e,t,n,i){return t.parent&&oi(t),t._start=Ne((Bn(n)?n:n||e!==et?Kt(e,n,t):e._time)+t._delay),t._end=Ne(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),gv(e,t,"_first","_last",e._sort?"_start":0),rc(t)||(e._recent=t),i||ed(e,t),e},td=function(e,t){return(qt.ScrollTrigger||qo("scrollTrigger",t))&&qt.ScrollTrigger.create(t,e)},nd=function(e,t,n,i){if(Hv(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xf!==Xt.frame)return ri.push(e),e._lazy=[t,i],1},yv=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},rc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vv=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&yv(e)&&!(!e._initted&&rc(e))||(e._ts<0||e._dp._ts<0)&&!rc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=_s(0,e._tDur,t),u=Lr(l,a),f=Lr(e._tTime,a),e._yoyo&&u&1&&(o=1-o),u!==f&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||i||e._zTime===qe||!t&&e._zTime){if(!e._initted&&nd(e,t,i,n))return;for(f=e._zTime,e._zTime=t||(n?qe:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&tn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&tn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&oi(e,1),n||(tn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(!i._dur&&i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(!i._dur&&i.data==="isPause"&&i._start<t)return i;i=i._prev}},Cr=function(e,t,n,i){var r=e._repeat,o=Ne(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Ne(o*(r+1)+e._rDelay*r):o,a&&!i?Kf(e,e._tTime=e._tDur*a):e.parent&&ic(e),n||Di(e.parent,e),e},id=function(e){return e instanceof At?Di(e):Cr(e,e._dur)},wv={_start:0,endTime:Er,totalDuration:Er},Kt=function s(e,t,n){var i=e.labels,r=e._recent||wv,o=e.duration()>=bn?r.endTime(!1):e._dur,a,l,c;return Mt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Wt(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},xs=function(e,t,n){var i=Bn(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ft(l.vars.inherit)&&l.parent;o.immediateRender=Ft(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new ut(t[0],o,t[r+1])},ai=function(e,t){return e||e===0?t(e):t},_s=function(e,t,n){return n<e?e:n>t?t:n},Nt=function(e){if(typeof e!="string")return"";var t=fv.exec(e);return t?e.substr(t.index+t[0].length):""},Mv=function(e,t,n){return ai(n,function(i){return _s(e,t,i)})},sc=[].slice,rd=function(e,t){return e&&Nn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Nn(e[0]))&&!e.nodeType&&e!==wn},Sv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Mt(i)&&!t||rd(i,1)?(r=n).push.apply(r,en(i)):n.push(i)})||n},en=function(e,t,n){return Mt(e)&&!n&&(Zl||!Rr())?sc.call((t||Jl).querySelectorAll(e),0):Wt(e)?Sv(e,n):rd(e)?sc.call(e,0):e?[e]:[]},Tv=function(e){return e=en(e)[0]||Xo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return en(t,n.querySelectorAll?n:n===e?Xo("Invalid scope")||Jl.createElement("div"):e)}},sd=function(e){return e.sort(function(){return .5-Math.random()})},od=function(e){if(xt(e))return e;var t=Nn(e)?e:{each:e},n=Ir(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return Mt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,m){var g=(m||t).length,_=o[g],p,x,y,w,b,M,v,E,P;if(!_){if(P=t.grid==="auto"?0:(t.grid||[1,bn])[1],!P){for(v=-bn;v<(v=m[P++].getBoundingClientRect().left)&&P<g;);P--}for(_=o[g]=[],p=l?Math.min(P,g)*u-.5:i%P,x=l?g*f/P-.5:i/P|0,v=0,E=bn,M=0;M<g;M++)y=M%P-p,w=x-(M/P|0),_[M]=b=c?Math.abs(c==="y"?w:y):zf(y*y+w*w),b>v&&(v=b),b<E&&(E=b);i==="random"&&sd(_),_.max=v-E,_.min=E,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(P>g?g-1:c?c==="y"?g/P:P:Math.max(P,g/P))||0)*(i==="edges"?-1:1),_.b=g<0?r-g:r,_.u=Nt(t.amount||t.each)||0,n=n&&g<0?md(n):n}return g=(_[h]-_.min)/_.max||0,Ne(_.b+(n?n(g):g)*_.v)+_.u}},oc=function(e){var t=e<1?Math.pow(10,(e+"").length-2):1;return function(n){var i=Math.round(parseFloat(n)/e)*e*t;return(i-i%1)/t+(Bn(n)?0:Nt(n))}},ad=function(e,t){var n=Wt(e),i,r;return!n&&Nn(e)&&(i=n=e.radius||bn,e.values?(e=en(e.values),(r=!Bn(e[0]))&&(i*=i)):e=oc(e.increment)),ai(t,n?xt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=bn,u=0,f=e.length,h,d;f--;)r?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,r||u===o||Bn(o)?u:u+Nt(o)}:oc(e))},ld=function(e,t,n,i){return ai(Wt(e)?!t:n===!0?!!(n=0):!i,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ev=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},Av=function(e,t){return function(n){return e(parseFloat(n))+(t||Nt(n))}},Lv=function(e,t,n){return ud(e,t,0,1,n)},cd=function(e,t,n){return ai(n,function(i){return e[~~t(i)]})},Cv=function s(e,t,n){var i=t-e;return Wt(e)?cd(e,s(0,e.length),t):ai(n,function(r){return(i+(r-e)%i)%i+e})},Pv=function s(e,t,n){var i=t-e,r=i*2;return Wt(e)?cd(e,s(0,e.length-1),t):ai(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},ys=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Gf:Wl),n+=e.substr(t,i-t)+ld(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},ud=function(e,t,n,i,r){var o=t-e,a=i-n;return ai(r,function(l){return n+((l-e)/o*a||0)})},Rv=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=Mt(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(s(e[c-1],e[c]));f--,r=function(m){m*=f;var g=Math.min(h,~~m);return u[g](m-g)},n=t}else i||(e=Ar(Wt(e)?[]:{},e));if(!u){for(l in t)fc.call(a,e,l,"get",t[l]);r=function(m){return gc(m,a)||(o?e.p:e)}}}return ai(n,r)},hd=function(e,t,n){var i=e.labels,r=bn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},tn=function(e,t,n){var i=e.vars,r=i[t],o,a;if(!!r)return o=i[t+"Params"],a=i.callbackScope||e,n&&ri.length&&Zo(),o?r.apply(a,o):r.call(a)},vs=function(e){return oi(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&tn(e,"onInterrupt"),e},Pr,Iv=function(e){e=!e.name&&e.default||e;var t=e.name,n=xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Er,render:gc,add:fc,kill:Zv,modifier:Yv,rawVars:0},o={targetTest:0,get:0,getSetter:Ko,aliases:{},register:0};if(Rr(),e!==i){if(Ot[t])return;Qt(i,Qt(nc(e,r),o)),Ar(i.prototype,Ar(r,nc(e,o))),Ot[i.prop=t]=i,e.targetTest&&(Yo.push(i),jl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qf(t,i),e.register&&e.register(nn,i,Rt)},Ye=255,bs={aqua:[0,Ye,Ye],lime:[0,Ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ye],navy:[0,0,128],white:[Ye,Ye,Ye],olive:[128,128,0],yellow:[Ye,Ye,0],orange:[Ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ye,0,0],pink:[Ye,192,203],cyan:[0,Ye,Ye],transparent:[Ye,Ye,Ye,0]},ac=function(e,t,n){return e=e<0?e+1:e>1?e-1:e,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ye+.5|0},fd=function(e,t,n){var i=e?Bn(e)?[e>>16,e>>8&Ye,e&Ye]:0:bs.black,r,o,a,l,c,u,f,h,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),bs[e])i=bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ye,i&Ye,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ye,e&Ye]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Wl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=ac(l+1/3,r,o),i[1]=ac(l,r,o),i[2]=ac(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(ql),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wl)||bs.transparent;i=i.map(Number)}return t&&!m&&(r=i[0]/Ye,o=i[1]/Ye,a=i[2]/Ye,f=Math.max(r,o,a),h=Math.min(r,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===r?(o-a)/d+(o<a?6:0):f===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},dd=function(e){var t=[],n=[],i=-1;return e.split(zn).forEach(function(r){var o=r.match(Ii)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},pd=function(e,t,n){var i="",r=(e+i).match(zn),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=fd(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=dd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(zn,"1").split(Ii),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(zn),f=c.length-1;a<f;a++)i+=c[a]+r[a];return i+c[f]},zn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in bs)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Dv=/hsl[a]?\(/,lc=function(e){var t=e.join(" "),n;if(zn.lastIndex=0,zn.test(t))return n=Dv.test(t),e[1]=pd(e[1],n),e[0]=pd(e[0],n,dd(e[1])),!0},Qo,Xt=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,f,h,d,m=function g(_){var p=s()-i,x=_===!0,y,w,b,M;if(p>e&&(n+=p-t),i+=p,b=i-n,y=b-o,(y>0||x)&&(M=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,o+=y+(y>=r?4:r-y),w=1),x||(l=c(g)),w)for(d=0;d<a.length;d++)a[d](b,h,M,_)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){Vf&&(!Zl&&Uf()&&(wn=Zl=window,Jl=wn.document||{},qt.gsap=nn,(wn.gsapVersions||(wn.gsapVersions=[])).push(nn.version),Wf(Wo||wn.GreenSockGlobals||!wn.gsap&&wn||{}),u=wn.requestAnimationFrame),l&&f.sleep(),c=u||function(_){return setTimeout(_,o-f.time*1e3+1|0)},Qo=1,m(2))},sleep:function(){(u?wn.cancelAnimationFrame:clearTimeout)(l),Qo=0,c=Er},lagSmoothing:function(_,p){e=_||1/qe,t=Math.min(p,e,0)},fps:function(_){r=1e3/(_||240),o=f.time*1e3+r},add:function(_){a.indexOf(_)<0&&a.push(_),Rr()},remove:function(_){var p;~(p=a.indexOf(_))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Rr=function(){return!Qo&&Xt.wake()},Ue={},Fv=/^[\d.\-M][\d.\-,\s]/,Ov=/["']/g,Bv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Ov,"").trim():+c,i=l.substr(a+1).trim();return t},Nv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},zv=function(e){var t=(e+"").split("("),n=Ue[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Bv(t[1])]:Nv(e).split(",").map(Jf)):Ue._CE&&Fv.test(e)?Ue._CE("",e):n},md=function(e){return function(t){return 1-e(1-t)}},gd=function s(e,t){for(var n=e._first,i;n;)n instanceof At?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ir=function(e,t){return e&&(xt(e)?e:Ue[e]||zv(e))||t},Fi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Bt(e,function(a){Ue[a]=qt[a]=r,Ue[o=a.toLowerCase()]=n;for(var l in r)Ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ue[a+"."+l]=r[l]}),r},xd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Vl*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*hv((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:xd(a);return r=Vl/r,l.config=function(c,u){return s(e,c,u)},l},uc=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:xd(n);return i.config=function(r){return s(e,r)},i};Bt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Fi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ue.Linear.easeNone=Ue.none=Ue.Linear.easeIn;Fi("Elastic",cc("in"),cc("out"),cc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Fi("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Fi("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Fi("Circ",function(s){return-(zf(1-s*s)-1)});Fi("Sine",function(s){return s===1?1:-uv(s*lv)+1});Fi("Back",uc("in"),uc("out"),uc());Ue.SteppedEase=Ue.steps=qt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-qe;return function(a){return((i*_s(0,o,a)|0)+r)*n}}};Tr.ease=Ue["quad.out"];Bt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Kl+=s+","+s+"Params,"});var hc=function(e,t){this.id=cv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:tc,this.set=t?t.getSetter:Ko},ws=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cr(this,+t.duration,1,1),this.data=t.data,Qo||Xt.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Cr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Rr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Kf(this,n),!r._dp||r.parent||ed(r,this);r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===qe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Qf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Qf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Lr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?$o(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-qe?0:this._rts,xv(this.totalTime(_s(-this._delay,this._tDur,i),!0))},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qe&&(this._tTime-=qe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Mn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ft(n)?this.totalDuration():this.duration())/Math.abs(this._ts)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$o(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,id(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,id(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Kt(this,n),Ft(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ft(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-qe)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=xt(n)?n:jf,a=function(){var c=i.then;i.then=null,xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){vs(this)},s}();Qt(ws.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var At=function(s){Nf(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ft(n.sortChildren),et&&Mn(n.parent||et,On(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&td(On(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return xs(0,arguments,this),this},t.from=function(i,r,o){return xs(1,arguments,this),this},t.fromTo=function(i,r,o,a){return xs(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Jo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ut(i,r,Kt(this,o),1),this},t.call=function(i,r,o){return Mn(this,ut.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ut(i,o,Kt(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,Jo(o).immediateRender=Ft(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,f){return a.startAt=o,Jo(a).immediateRender=Ft(a.immediateRender),this.staggerTo(i,r,a,l,c,u,f)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=this!==et&&i>l-qe&&i>=0?l:i<qe?0:i,f=this._zTime<0!=i<0&&(this._initted||!c),h,d,m,g,_,p,x,y,w,b,M,v;if(u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,w=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,r,o);if(h=Ne(u%_),u===l?(g=this._repeat,h=c):(g=~~(u/_),g&&g===u/_&&(h=c,g--),h>c&&(h=c)),b=Lr(this._tTime,_),!a&&this._tTime&&b!==g&&(b=g),M&&g&1&&(h=c-h,v=1),g!==b&&!this._lock){var E=M&&b&1,P=E===(M&&g&1);if(g<b&&(E=!E),a=E?0:c,this._lock=1,this.render(a||(v?0:Ne(g*_)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&tn(this,"onRepeat"),this.vars.repeatRefresh&&!v&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=E?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!v&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;gd(this,v)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=bv(this,Ne(a),Ne(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&(tn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,r,o),h!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=-qe);break}}d=m}else{d=this._last;for(var R=i<0?i:h;d;){if(m=d._prev,(d._act||R<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,r,o),h!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=R?-qe:qe);break}}d=m}}if(x&&!r&&(this.pause(),x.render(h>=a?0:-qe)._zTime=h>=a?1:-1,this._ts))return this._start=w,ic(this),this.render(i,r,o);this._onUpdate&&!r&&tn(this,"onUpdate",!0),(u===l&&l>=this.totalDuration()||!u&&a)&&(w===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&oi(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(tn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Bn(r)||(r=Kt(this,r,i)),!(i instanceof ws)){if(Wt(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Mt(i))return this.addLabel(i,r);if(xt(i))i=ut.delayedCall(0,i);else return this}return this!==i?Mn(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-bn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ut?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Mt(i)?this.removeLabel(i):xt(i)?this.killTweensOf(i):(jo(this,i),i===this._recent&&(this._recent=this._last),Di(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ne(Xt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Kt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=ut.delayedCall(0,r||Er,o);return a.data="isPause",this._hasPause=1,Mn(this,a,Kt(this,i))},t.removePause=function(i){var r=this._first;for(i=Kt(this,i);r;)r._start===i&&r.data==="isPause"&&oi(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)li!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=en(i),l=this._first,c=Bn(r),u;l;)l instanceof ut?dv(l._targets,a)&&(c?(!li||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Kt(o,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,m=ut.to(o,Qt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||qe,onStart:function(){if(o.pause(),!d){var _=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==_&&Cr(m,_,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,f||[])}},r));return h?m.render(0):m},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Qt({startAt:{time:Kt(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),hd(this,Kt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),hd(this,Kt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+qe)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Di(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return s.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Di(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=bn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Cr(o,o===et&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(et._ts&&(Zf(et,$o(i,et)),Xf=Xt.frame),Xt.frame>=Yf){Yf+=Pt.autoSleep||120;var r=et._first;if((!r||!r._ts)&&Pt.autoSleep&&Xt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Xt.sleep()}}},e}(ws);Qt(At.prototype,{_lock:0,_hasPause:0,_forcing:0});var Uv=function(e,t,n,i,r,o,a){var l=new Rt(this._pt,e,t,0,1,mc,null,r),c=0,u=0,f,h,d,m,g,_,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ys(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),h=n.match(Xl)||[];f=Xl.exec(i);)m=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),m!==h[u++]&&(_=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:m.charAt(1)==="="?parseFloat(m.substr(2))*(m.charAt(0)==="-"?-1:1):parseFloat(m)-_,m:d&&d<4?Math.round:0},c=Xl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Yl.test(i)||p)&&(l.e=0),this._pt=l,l},fc=function(e,t,n,i,r,o,a,l,c){xt(i)&&(i=i(r||0,e,o));var u=e[t],f=n!=="get"?n:xt(u)?c?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,h=xt(u)?c?Wv:yd:pc,d;if(Mt(i)&&(~i.indexOf("random(")&&(i=ys(i)),i.charAt(1)==="="&&(d=parseFloat(f)+parseFloat(i.substr(2))*(i.charAt(0)==="-"?-1:1)+(Nt(f)||0),(d||d===0)&&(i=d))),f!==i)return!isNaN(f*i)&&i!==""?(d=new Rt(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?Xv:vd,0,h),c&&(d.fp=c),a&&d.modifier(a,this,e),this._pt=d):(!u&&!(t in e)&&qo(t,i),Uv.call(this,e,t,f,i,h,l||Pt.stringFilter,c))},kv=function(e,t,n,i,r){if(xt(e)&&(e=Ms(e,r,t,n,i)),!Nn(e)||e.style&&e.nodeType||Wt(e)||Hf(e))return Mt(e)?Ms(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Ms(e[a],r,t,n,i);return o},dc=function(e,t,n,i,r,o){var a,l,c,u;if(Ot[e]&&(a=new Ot[e]).init(r,a.rawVars?t[e]:kv(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Rt(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Pr))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},li,Hv=function s(e,t){var n=e.vars,i=n.ease,r=n.startAt,o=n.immediateRender,a=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,f=n.runBackwards,h=n.yoyoEase,d=n.keyframes,m=n.autoRevert,g=e._dur,_=e._startAt,p=e._targets,x=e.parent,y=x&&x.data==="nested"?x.parent._targets:p,w=e._overwrite==="auto"&&!Gl,b=e.timeline,M,v,E,P,R,C,Y,O,B,z,F,U,Z;if(b&&(!d||!i)&&(i="none"),e._ease=Ir(i,Tr.ease),e._yEase=h?md(Ir(h===!0?i:h,Tr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!b&&!!n.runBackwards,!b){if(O=p[0]?si(p[0]).harness:0,U=O&&n[O.prop],M=nc(n,jl),_&&_.render(-1,!0).kill(),r)if(oi(e._startAt=ut.set(p,Qt({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:Ft(a),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},r))),t<0&&!o&&!m&&e._startAt.render(-1,!0),o){if(t>0&&!m&&(e._startAt=0),g&&t<=0){t&&(e._zTime=t);return}}else m===!1&&(e._startAt=0);else if(f&&g){if(_)!m&&(e._startAt=0);else if(t&&(o=!1),E=Qt({overwrite:!1,data:"isFromStart",lazy:o&&Ft(a),immediateRender:o,stagger:0,parent:x},M),U&&(E[O.prop]=U),oi(e._startAt=ut.set(p,E)),t<0&&e._startAt.render(-1,!0),!o)s(e._startAt,qe);else if(!t)return}for(e._pt=0,a=g&&Ft(a)||a&&!g,v=0;v<p.length;v++){if(R=p[v],Y=R._gsap||ec(p)[v]._gsap,e._ptLookup[v]=z={},$l[Y.id]&&ri.length&&Zo(),F=y===p?v:y.indexOf(R),O&&(B=new O).init(R,U||M,e,F,y)!==!1&&(e._pt=P=new Rt(e._pt,R,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(se){z[se]=P}),B.priority&&(C=1)),!O||U)for(E in M)Ot[E]&&(B=dc(E,M,e,F,R,y))?B.priority&&(C=1):z[E]=P=fc.call(e,R,E,"get",M[E],F,y,0,n.stringFilter);e._op&&e._op[v]&&e.kill(R,e._op[v]),w&&e._pt&&(li=e,et.killTweensOf(R,z,e.globalTime(0)),Z=!e.parent,li=0),e._pt&&a&&($l[Y.id]=1)}C&&xc(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Z},Gv=function(e,t){var n=e[0]?si(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Ar({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Ms=function(e,t,n,i,r){return xt(e)?e.call(t,n,i,r):Mt(e)&&~e.indexOf("random(")?ys(e):e},_d=Kl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Vv=(_d+",id,stagger,delay,duration,paused,scrollTrigger").split(","),ut=function(s){Nf(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Jo(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,m=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=l.yoyoEase,x=i.parent||et,y=(Wt(n)||Hf(n)?Bn(n[0]):"length"in i)?[n]:en(n),w,b,M,v,E,P,R,C;if(a._targets=y.length?ec(y):Xo("GSAP target "+n+" not found. https://greensock.com",!Pt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||h||kf(c)||kf(u)){if(i=a.vars,w=a.timeline=new At({data:"nested",defaults:g||{}}),w.kill(),w.parent=w._dp=On(a),w._start=0,m)Qt(w.vars.defaults,{ease:"none"}),h?y.forEach(function(Y,O){return m.forEach(function(B,z){return w.to(Y,B,z?">":O*h)})}):m.forEach(function(Y){return w.to(y,Y,">")});else{if(v=y.length,R=h?od(h):Er,Nn(h))for(E in h)~_d.indexOf(E)&&(C||(C={}),C[E]=h[E]);for(b=0;b<v;b++){M={};for(E in i)Vv.indexOf(E)<0&&(M[E]=i[E]);M.stagger=0,p&&(M.yoyoEase=p),C&&Ar(M,C),P=y[b],M.duration=+Ms(c,On(a),b,P,y),M.delay=(+Ms(u,On(a),b,P,y)||0)-a._delay,!h&&v===1&&M.delay&&(a._delay=u=M.delay,a._start+=u,M.delay=0),w.to(P,M,R(b,P,y))}w.duration()?c=u=0:a.timeline=0}c||a.duration(c=w.duration())}else a.timeline=0;return d===!0&&!Gl&&(li=On(a),et.killTweensOf(y),li=0),Mn(x,On(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!m&&a._start===Ne(x._time)&&Ft(f)&&_v(On(a))&&x.data!=="nested")&&(a._tTime=-qe,a.render(Math.max(0,-u))),_&&td(On(a),_),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i>l-qe&&i>=0?l:i<qe?0:i,f,h,d,m,g,_,p,x,y;if(!c)vv(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(f=u,x=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Ne(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),_=this._yoyo&&d&1,_&&(y=this._yEase,f=c-f),g=Lr(this._tTime,m),f===a&&!o&&this._initted)return this;d!==g&&(x&&this._yEase&&gd(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Ne(m*d),!0).invalidate()._lock=0))}if(!this._initted){if(nd(this,i<0?i:f,o,r))return this._tTime=0,this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=p=(y||this._ease)(f/c),this._from&&(this.ratio=p=1-p),f&&!a&&!r&&(tn(this,"onStart"),this._tTime!==u))return this;for(h=this._pt;h;)h.r(p,h.d),h=h._next;x&&x.render(i<0?i:!f&&_?-qe:x._dur*p,r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(i<0&&this._startAt&&this._startAt.render(i,!0,o),tn(this,"onUpdate")),this._repeat&&d!==g&&this.vars.onRepeat&&!r&&this.parent&&tn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&oi(this,1),!r&&!(i<0&&!a)&&(u||a)&&(tn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),s.prototype.invalidate.call(this)},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?vs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,li&&li.vars.overwrite!==!0)._first||vs(this),this.parent&&o!==this.timeline.totalDuration()&&Cr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?en(i):a,c=this._ptLookup,u=this._pt,f,h,d,m,g,_,p;if((!r||r==="all")&&mv(a,l))return r==="all"&&(this._pt=0),vs(this);for(f=this._op=this._op||[],r!=="all"&&(Mt(r)&&(g={},Bt(r,function(x){return g[x]=1}),r=g),r=Gv(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],r==="all"?(f[p]=r,m=h,d={}):(d=f[p]=f[p]||{},m=r);for(g in m)_=h&&h[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&jo(this,_,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&vs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return xs(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return xs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return et.killTweensOf(i,r,o)},e}(ws);Qt(ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bt("staggerTo,staggerFrom,staggerFromTo",function(s){ut[s]=function(){var e=new At,t=sc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var pc=function(e,t,n){return e[t]=n},yd=function(e,t,n){return e[t](n)},Wv=function(e,t,n,i){return e[t](i.fp,n)},qv=function(e,t,n){return e.setAttribute(t,n)},Ko=function(e,t){return xt(e[t])?yd:Vo(e[t])&&e.setAttribute?qv:pc},vd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Xv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},mc=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},gc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Yv=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},Zv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?jo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Jv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},xc=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Rt=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||vd,this.d=l||this,this.set=c||pc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Jv,this.m=n,this.mt=r,this.tween=i},s}();Bt(Kl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return jl[s]=1});qt.TweenMax=qt.TweenLite=ut;qt.TimelineLite=qt.TimelineMax=At;et=new At({sortChildren:!1,defaults:Tr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pt.stringFilter=lc;var ea={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Iv(i)})},timeline:function(e){return new At(e)},getTweensOf:function(e,t){return et.getTweensOf(e,t)},getProperty:function(e,t,n,i){Mt(e)&&(e=en(e)[0]);var r=si(e||{}).get,o=n?jf:Jf;return n==="native"&&(n=""),e&&(t?o((Ot[t]&&Ot[t].get||r)(e,t,n,i)):function(a,l,c){return o((Ot[a]&&Ot[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=en(e),e.length>1){var i=e.map(function(u){return nn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var o=Ot[t],a=si(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Pr._pt=0,f.init(e,n?u+n:u,Pr,0,[e]),f.render(1,f),Pr._pt&&gc(1,Pr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},isTweening:function(e){return et.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ir(e.ease,Tr.ease)),$f(Tr,e||{})},config:function(e){return $f(Pt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ot[a]&&!qt[a]&&Xo(t+" effect requires "+a+" plugin.")}),Ql[t]=function(a,l,c){return n(en(a),Qt(l||{},r),c)},o&&(At.prototype[t]=function(a,l,c){return this.add(Ql[t](a,Nn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ue[e]=Ir(t)},parseEase:function(e,t){return arguments.length?Ir(e,t):Ue},getById:function(e){return et.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new At(e),i,r;for(n.smoothChildTiming=Ft(e.smoothChildTiming),et.remove(n),n._dp=0,n._time=n._tTime=et._time,i=et._first;i;)r=i._next,(t||!(!i._dur&&i instanceof ut&&i.vars.onComplete===i._targets[0]))&&Mn(n,i,i._start-i._delay),i=r;return Mn(et,n,0),n},utils:{wrap:Cv,wrapYoyo:Pv,distribute:od,random:ld,snap:ad,normalize:Lv,getUnit:Nt,clamp:Mv,splitColor:fd,toArray:en,selector:Tv,mapRange:ud,pipe:Ev,unitize:Av,interpolate:Rv,shuffle:sd},install:Wf,effects:Ql,ticker:Xt,updateRoot:At.updateRoot,plugins:Ot,globalTimeline:et,core:{PropTween:Rt,globals:qf,Tween:ut,Timeline:At,Animation:ws,getCache:si,_removeLinkedListItem:jo,suppressOverwrites:function(e){return Gl=e}}};Bt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ea[s]=ut[s]});Xt.add(At.updateRoot);Pr=ea.to({},{duration:0});var jv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},$v=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=jv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},_c=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Mt(r)&&(l={},Bt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}$v(a,r)}}}},nn=ea.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a;for(o in t)a=this.add(e,"setAttribute",(e.getAttribute(o)||0)+"",t[o],i,r,0,0,o),a&&(a.op=o),this._props.push(o)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},_c("roundProps",oc),_c("modifiers"),_c("snap",ad))||ea;ut.version=At.version=nn.version="3.7.1";Vf=1;Uf()&&Rr();var Qv=Ue.Power0,Kv=Ue.Power1,eb=Ue.Power2,tb=Ue.Power3,nb=Ue.Power4,ib=Ue.Linear,rb=Ue.Quad,_t=Ue.Cubic,sb=Ue.Quart,ob=Ue.Quint,ab=Ue.Strong,lb=Ue.Elastic,cb=Ue.Back,ub=Ue.SteppedEase,hb=Ue.Bounce,fb=Ue.Sine,Ss=Ue.Expo,db=Ue.Circ;var bd,ci,Dr,yc,Oi,pb,wd,mb=function(){return typeof window!="undefined"},ui={},Bi=180/Math.PI,Fr=Math.PI/180,Or=Math.atan2,Md=1e8,Sd=/([A-Z])/g,gb=/(?:left|right|width|margin|padding|x)/i,xb=/[\s,\(]\S/,hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Td=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_b=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ed=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ad=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bb=function(e,t,n){return e.style[t]=n},wb=function(e,t,n){return e.style.setProperty(t,n)},Mb=function(e,t,n){return e._gsap[t]=n},Sb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Tb=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Eb=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},St="transform",fi=St+"Origin",Ld,vc=function(e,t){var n=ci.createElementNS?ci.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ci.createElement(e);return n.style?n:ci.createElement(e)},Un=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Sd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Br(t)||t,1)||""},Cd="O,Moz,ms,Ms,Webkit".split(","),Br=function(e,t,n){var i=t||Oi,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Cd[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Cd[o]:"")+e},bc=function(){mb()&&window.document&&(bd=window,ci=bd.document,Dr=ci.documentElement,Oi=vc("div")||{style:{}},pb=vc("div"),St=Br(St),fi=St+"Origin",Oi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ld=!!Br("perspective"),yc=1)},wc=function s(e){var t=vc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Dr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch(a){}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Dr.removeChild(t),this.style.cssText=r,o},Pd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rd=function(e){var t;try{t=e.getBBox()}catch(n){t=wc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===wc||(t=wc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Pd(e,["x","cx","x1"])||0,y:+Pd(e,["y","cy","y1"])||0,width:0,height:0}:t},Id=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rd(e))},Ts=function(e,t){if(t){var n=e.style;t in ui&&t!==fi&&(t=St),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Sd,"-$1").toLowerCase())):n.removeAttribute(t)}},di=function(e,t,n,i,r,o){var a=new Rt(e._pt,t,n,0,1,o?Ad:Ed);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Dd={deg:1,rad:1,turn:1},pi=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Oi.style,l=gb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",m,g,_,p;return i===o||!r||Dd[i]||Dd[o]?r:(o!=="px"&&!h&&(r=s(e,t,n,"px")),p=e.getCTM&&Id(e),(d||o==="%")&&(ui[t]||~t.indexOf("adius"))?(m=p?e.getBBox()[l?"width":"height"]:e[u],Ne(d?r/m*f:r/100*m)):(a[l?"width":"height"]=f+(h?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ci||!g.appendChild)&&(g=ci.body),_=g._gsap,_&&d&&_.width&&l&&_.time===Xt.time?Ne(r/_.width*f):((d||o==="%")&&(a.position=Un(e,"position")),g===e&&(a.position="static"),g.appendChild(Oi),m=Oi[u],g.removeChild(Oi),a.position="absolute",l&&d&&(_=si(g),_.time=Xt.time,_.width=g[u]),Ne(h?m*r/f:m&&r?f/m*r:0))))},Nr=function(e,t,n,i){var r;return yc||bc(),t in hi&&t!=="transform"&&(t=hi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ui[t]&&t!=="transform"?(r=As(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:na(Un(e,fi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ta[t]&&ta[t](e,t,n)||Un(e,t)||tc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?pi(e,t,r,n)+n:r},Ab=function(e,t,n,i){if(!n||n==="none"){var r=Br(t,e,1),o=r&&Un(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Un(e,"borderTopColor"))}var a=new Rt(this._pt,e.style,t,0,1,mc),l=0,c=0,u,f,h,d,m,g,_,p,x,y,w,b,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Un(e,t)||i,e.style[t]=n),u=[n,i],lc(u),n=u[0],i=u[1],h=n.match(Ii)||[],M=i.match(Ii)||[],M.length){for(;f=Ii.exec(i);)_=f[0],x=i.substring(l,f.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),_!==(g=h[c++]||"")&&(d=parseFloat(g)||0,w=g.substr((d+"").length),b=_.charAt(1)==="="?+(_.charAt(0)+"1"):0,b&&(_=_.substr(2)),p=parseFloat(_),y=_.substr((p+"").length),l=Ii.lastIndex-y.length,y||(y=y||Pt.units[t]||w,l===i.length&&(i+=y,a.e+=y)),w!==y&&(d=pi(e,t,g,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:b?b*p:p-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Ad:Ed;return Yl.test(i)&&(a.e=0),this._pt=a,a},Fd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Fd[n]||n,t[1]=Fd[i]||i,t.join(" ")},Cb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ui[a]&&(l=1,a=a==="transformOrigin"?fi:St),Ts(n,a);l&&(Ts(n,St),o&&(o.svg&&n.removeAttribute("transform"),As(n,1),o.uncache=1))}},ta={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Rt(e._pt,t,n,0,0,Cb);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Es=[1,0,0,1,0,0],Od={},Bd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Nd=function(e){var t=Un(e,St);return Bd(t)?Es:t.substr(7).match(ql).map(Ne)},Mc=function(e,t){var n=e._gsap||si(e),i=e.style,r=Nd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Es:r):(r===Es&&!e.offsetParent&&e!==Dr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextSibling,Dr.appendChild(e)),r=Nd(e),l?i.display=l:Ts(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Dr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Sc=function(e,t,n,i,r,o){var a=e._gsap,l=r||Mc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],m=l[1],g=l[2],_=l[3],p=l[4],x=l[5],y=t.split(" "),w=parseFloat(y[0])||0,b=parseFloat(y[1])||0,M,v,E,P;n?l!==Es&&(v=d*_-m*g)&&(E=w*(_/v)+b*(-g/v)+(g*x-_*p)/v,P=w*(-m/v)+b*(d/v)-(d*x-m*p)/v,w=E,b=P):(M=Rd(e),w=M.x+(~y[0].indexOf("%")?w/100*M.width:w),b=M.y+(~(y[1]||y[0]).indexOf("%")?b/100*M.height:b)),i||i!==!1&&a.smooth?(p=w-c,x=b-u,a.xOffset=f+(p*d+x*g)-p,a.yOffset=h+(p*m+x*_)-x):a.xOffset=a.yOffset=0,a.xOrigin=w,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[fi]="0px 0px",o&&(di(o,a,"xOrigin",c,w),di(o,a,"yOrigin",u,b),di(o,a,"xOffset",f,a.xOffset),di(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",w+" "+b)},As=function(e,t){var n=e._gsap||new hc(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=Un(e,fi)||"0",c,u,f,h,d,m,g,_,p,x,y,w,b,M,v,E,P,R,C,Y,O,B,z,F,U,Z,se,ce,J,ge,G,Q;return c=u=f=m=g=_=p=x=y=0,h=d=1,n.svg=!!(e.getCTM&&Id(e)),M=Mc(e,n.svg),n.svg&&(F=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Sc(e,F||l,!!F||n.originIsAbsolute,n.smooth!==!1,M)),w=n.xOrigin||0,b=n.yOrigin||0,M!==Es&&(R=M[0],C=M[1],Y=M[2],O=M[3],c=B=M[4],u=z=M[5],M.length===6?(h=Math.sqrt(R*R+C*C),d=Math.sqrt(O*O+Y*Y),m=R||C?Or(C,R)*Bi:0,p=Y||O?Or(Y,O)*Bi+m:0,p&&(d*=Math.abs(Math.cos(p*Fr))),n.svg&&(c-=w-(w*R+b*Y),u-=b-(w*C+b*O))):(Q=M[6],ge=M[7],se=M[8],ce=M[9],J=M[10],G=M[11],c=M[12],u=M[13],f=M[14],v=Or(Q,J),g=v*Bi,v&&(E=Math.cos(-v),P=Math.sin(-v),F=B*E+se*P,U=z*E+ce*P,Z=Q*E+J*P,se=B*-P+se*E,ce=z*-P+ce*E,J=Q*-P+J*E,G=ge*-P+G*E,B=F,z=U,Q=Z),v=Or(-Y,J),_=v*Bi,v&&(E=Math.cos(-v),P=Math.sin(-v),F=R*E-se*P,U=C*E-ce*P,Z=Y*E-J*P,G=O*P+G*E,R=F,C=U,Y=Z),v=Or(C,R),m=v*Bi,v&&(E=Math.cos(v),P=Math.sin(v),F=R*E+C*P,U=B*E+z*P,C=C*E-R*P,z=z*E-B*P,R=F,B=U),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,_=180-_),h=Ne(Math.sqrt(R*R+C*C+Y*Y)),d=Ne(Math.sqrt(z*z+Q*Q)),v=Or(B,z),p=Math.abs(v)>2e-4?v*Bi:0,y=G?1/(G<0?-G:G):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bd(Un(e,St)),F&&e.setAttribute("transform",F))),Math.abs(p)>90&&Math.abs(p)<270&&(r?(h*=-1,p+=m<=0?180:-180,m+=m<=0?180:-180):(d*=-1,p+=p<=0?180:-180)),n.x=c-((n.xPercent=c&&(n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ne(h),n.scaleY=Ne(d),n.rotation=Ne(m)+a,n.rotationX=Ne(g)+a,n.rotationY=Ne(_)+a,n.skewX=p+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[fi]=na(l)),n.xOffset=n.yOffset=0,n.force3D=Pt.force3D,n.renderTransform=n.svg?Rb:Ld?zd:Pb,n.uncache=0,n},na=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tc=function(e,t,n){var i=Nt(t);return Ne(parseFloat(t)+parseFloat(pi(e,"x",n+"px",i)))+i},Pb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zd(e,t)},Ni="0deg",Ls="0px",zi=") ",zd=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,m=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,x=n.target,y=n.zOrigin,w="",b=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==Ni||u!==Ni)){var M=parseFloat(u)*Fr,v=Math.sin(M),E=Math.cos(M),P;M=parseFloat(f)*Fr,P=Math.cos(M),o=Tc(x,o,v*P*-y),a=Tc(x,a,-Math.sin(M)*-y),l=Tc(x,l,E*P*-y+y)}_!==Ls&&(w+="perspective("+_+zi),(i||r)&&(w+="translate("+i+"%, "+r+"%) "),(b||o!==Ls||a!==Ls||l!==Ls)&&(w+=l!==Ls||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+zi),c!==Ni&&(w+="rotate("+c+zi),u!==Ni&&(w+="rotateY("+u+zi),f!==Ni&&(w+="rotateX("+f+zi),(h!==Ni||d!==Ni)&&(w+="skew("+h+", "+d+zi),(m!==1||g!==1)&&(w+="scale("+m+", "+g+zi),x.style[St]=w||"translate(0, 0)"},Rb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,m=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,x=n.forceCSS,y=parseFloat(o),w=parseFloat(a),b,M,v,E,P;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fr,c*=Fr,b=Math.cos(l)*f,M=Math.sin(l)*f,v=Math.sin(l-c)*-h,E=Math.cos(l-c)*h,c&&(u*=Fr,P=Math.tan(c-u),P=Math.sqrt(1+P*P),v*=P,E*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),b*=P,M*=P)),b=Ne(b),M=Ne(M),v=Ne(v),E=Ne(E)):(b=f,E=h,M=v=0),(y&&!~(o+"").indexOf("px")||w&&!~(a+"").indexOf("px"))&&(y=pi(d,"x",o,"px"),w=pi(d,"y",a,"px")),(m||g||_||p)&&(y=Ne(y+m-(m*b+g*v)+_),w=Ne(w+g-(m*M+g*E)+p)),(i||r)&&(P=d.getBBox(),y=Ne(y+i/100*P.width),w=Ne(w+r/100*P.height)),P="matrix("+b+","+M+","+v+","+E+","+y+","+w+")",d.setAttribute("transform",P),x&&(d.style[St]=P)},Ib=function(e,t,n,i,r,o){var a=360,l=Mt(r),c=parseFloat(r)*(l&&~r.indexOf("rad")?Bi:1),u=o?c*o:c-i,f=i+u+"deg",h,d;return l&&(h=r.split("_")[1],h==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),h==="cw"&&u<0?u=(u+a*Md)%a-~~(u/a)*a:h==="ccw"&&u>0&&(u=(u-a*Md)%a-~~(u/a)*a)),e._pt=d=new Rt(e._pt,t,n,i,u,_b),d.e=f,d.u="deg",e._props.push(n),d},Ud=function(e,t){for(var n in t)e[n]=t[n];return e},Db=function(e,t,n){var i=Ud({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[St]=t,a=As(n,1),Ts(n,St),n.setAttribute("transform",c)):(c=getComputedStyle(n)[St],o[St]=t,a=As(n,1),o[St]=c);for(l in ui)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=Nt(c),m=Nt(u),f=d!==m?pi(n,l,c,m):parseFloat(c),h=parseFloat(u),e._pt=new Rt(e._pt,a,l,f,h-f,Td),e._pt.u=m||0,e._props.push(l));Ud(a,i)};Bt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});ta[e>1?"border"+s:s]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(m){return Nr(a,m,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(m,g){return d[m]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var Ec={name:"css",register:bc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,m,g,_,p,x,y,w,b,M,v;yc||bc();for(g in t)if(g!=="autoRound"&&(u=t[g],!(Ot[g]&&dc(g,t,n,i,e,r)))){if(d=typeof u,m=ta[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ys(u)),m)m(this,e,g,u,n)&&(v=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",zn.lastIndex=0,zn.test(c)||(_=Nt(c),p=Nt(u)),p?_!==p&&(c=pi(e,g,c,p)+p):_&&(u+=_),this.add(a,"setProperty",c,u,i,r,0,0,g),o.push(g);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],g in Pt.units&&!Nt(c)&&(c+=Pt.units[g]),(c+"").charAt(1)==="="&&(c=Nr(e,g))):c=Nr(e,g),h=parseFloat(c),x=d==="string"&&u.charAt(1)==="="?+(u.charAt(0)+"1"):0,x&&(u=u.substr(2)),f=parseFloat(u),g in hi&&(g==="autoAlpha"&&(h===1&&Nr(e,"visibility")==="hidden"&&f&&(h=0),di(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=hi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in ui,y){if(w||(b=e._gsap,b.renderTransform&&!t.parseTransform||As(e,t.parseTransform),M=t.smoothOrigin!==!1&&b.smooth,w=this._pt=new Rt(this._pt,a,St,0,1,b.renderTransform,b,0,-1),w.dep=1),g==="scale")this._pt=new Rt(this._pt,b,"scaleY",b.scaleY,(x?x*f:f-b.scaleY)||0),o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){u=Lb(u),b.svg?Sc(e,u,0,M,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&di(this,b,"zOrigin",b.zOrigin,p),di(this,a,g,na(c),na(u)));continue}else if(g==="svgOrigin"){Sc(e,u,1,M,0,this);continue}else if(g in Od){Ib(this,b,g,h,u,x);continue}else if(g==="smoothOrigin"){di(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){Db(this,u,e);continue}}else g in a||(g=Br(g)||g);if(y||(f||f===0)&&(h||h===0)&&!xb.test(u)&&g in a)_=(c+"").substr((h+"").length),f||(f=0),p=Nt(u)||(g in Pt.units?Pt.units[g]:_),_!==p&&(h=pi(e,g,c,p)),this._pt=new Rt(this._pt,y?b:a,g,h,x?x*f:f-h,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?vb:Td),this._pt.u=p||0,_!==p&&(this._pt.b=c,this._pt.r=yb);else if(g in a)Ab.call(this,e,g,c,u);else if(g in e)this.add(e,g,c||e[g],u,i,r);else{qo(g,u);continue}o.push(g)}}v&&xc(this)},get:Nr,aliases:hi,getSetter:function(e,t,n){var i=hi[t];return i&&i.indexOf(",")<0&&(t=i),t in ui&&t!==fi&&(e._gsap.x||Nr(e,"x"))?n&&wd===n?t==="scale"?Sb:Mb:(wd=n||{})&&(t==="scale"?Tb:Eb):e.style&&!Vo(e.style[t])?bb:~t.indexOf("-")?wb:Ko(e,t)},core:{_removeProperty:Ts,_getMatrix:Mc}};nn.utils.checkPrefix=Br;(function(s,e,t,n){var i=Bt(s+","+e+","+t,function(r){ui[r]=1});Bt(e,function(r){Pt.units[r]="deg",Od[r]=1}),hi[i[13]]=s+","+e,Bt(n,function(r){var o=r.split(":");hi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Pt.units[s]="px"});nn.registerPlugin(Ec);var Ie=nn.registerPlugin(Ec)||nn,mw=Ie.core.Tween;var Fb=`
    varying vec2 vUv;

    void main(void) {
        vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,Ob=`
    uniform vec2 uResolution;
    uniform sampler2D uTexture;
    uniform vec2 uMouseCoordinates;
    uniform float uPixelRatio;
    uniform float uSaturation;
    uniform float uCircleScaleFactor;
    uniform vec2 uUvFactor;
    uniform float uStrokeSize;
    uniform float uBorderRadius;
    uniform float uBorderStart;
    uniform float uBorderEnd;
    uniform float uBorderCenter;
    uniform float uAlphaFactor;
    uniform vec2 uRgbOffset;
    uniform float uRgbOffsetFactor;
    uniform sampler2D uBorderMask;
    uniform sampler2D uBorder;
    varying vec2 vUv;

    vec3 adjustExposure(vec3 color, float value) {
        return (1.0 + value) * color;
    }

    vec3 adjustSaturation(vec3 color, float value) {
        // https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
        const vec3 luminosityFactor = vec3(0.2126, 0.7152, 0.0722);
        vec3 grayscale = vec3(dot(color, luminosityFactor));
        
        return mix(grayscale, color, 1.0 + value);
    }

    // https://thebookofshaders.com/07/
    float circle(in vec2 _st, in float _radius, in float blurriness){
        vec2 dist = _st;
        return 1.-smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist)*4.0);
    }
    float circle(in vec2 _st, in vec2 position, in float _radius){
        vec2 dist = _st-position;
        return 1.-smoothstep(_radius-(_radius*0.01),
                             _radius+(_radius*0.01),
                             dot(dist,dist)*4.0);
    }

    vec2 scale(vec2 _st, float scale) {
        return (_st - vec2(.5)) * (1. / scale) + vec2(.5);
    }
    vec2 scale(vec2 _st, float scale, vec2 center) {
        return (_st - center) * (1. / scale) + center;
    }

    float cursedRoundedEdges(in vec2 st, float radius, float centerCircle){
        vec2 cursedUv = vec2(st.x, st.y);
        float color = circle(cursedUv, vec2(uBorderStart, uBorderStart), radius);
        color += circle(cursedUv,vec2(uBorderStart, uBorderEnd), radius);
        color += circle(cursedUv,vec2(uBorderEnd, uBorderEnd), radius);
        color += circle(cursedUv,vec2(uBorderEnd, uBorderStart), radius);
        color += circle(cursedUv,vec2(0.5,0.5), centerCircle);
        return color;
    }

    void main() {
        // Scale UVs
        vec2 scaledUv = vec2(scale(vUv, uUvFactor.x).x, scale(vUv, uUvFactor.y).y);

        // Standardised coordinates with pixelRatio and ratio
        // vec2 res = uResolution * uPixelRatio;
        // vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);
        // st.y *= uResolution.y / uResolution.x;

        // Move mouse
        // vec2 mouse = uMouseCoordinates * -0.5;
        // mouse.y *= uResolution.y / uResolution.x;
        vec2 mouse = uMouseCoordinates * 0.9;
        vec2 mousedRgbOffset = uRgbOffset - mouse;

        // Move circle
        // vec2 circlePos = st + mouse;
        // float circleColor = circle(circlePos, .005 * uCircleScaleFactor, 3.);
        // circleColor *= 0.5;

        vec4 texel = texture2D(uTexture, scaledUv);

        float offsetR = texture2D(uTexture, scaledUv + mousedRgbOffset * uRgbOffsetFactor).r;

        vec4 maskTexel = texture2D(uBorderMask, vUv);
        vec4 borderTexel = texture2D(uBorder, vUv);

        // vec3 circleExposureTexel = vec3(adjustExposure(texel.rgb, circleColor));
        vec3 saturationRGB = adjustSaturation(vec3(offsetR, texel.gb), uSaturation);

        // Each result will return 1.0 (white) or 0.0 (black).
        // float thresholdX = uStrokeSize;
        // float thresholdY = uStrokeSize + ((uUvFactor.y*0.8)-1.);
        // float left = step(thresholdX, scaledUv.x);   // Similar to ( X greater than 0.1 )
        // float bottom = step(thresholdY, scaledUv.y); // Similar to ( Y greater than 0.1 )
        // float right = step(thresholdX, 1. - scaledUv.x);
        // float top = step(thresholdY, 1. - scaledUv.y);

        // The multiplication of left*bottom will be similar to the logical AND.
        // vec3 borderColor = vec3( left * bottom * right * top );

        // saturationRGB *= borderColor;

        // float dist = distance(scaledUv, vec2(0.5));
        // dist = step(dist, 0.69);

        float alpha = cursedRoundedEdges(vUv, uBorderRadius, uBorderCenter);
        // gl_FragColor = vec4(saturationRGB, maskTexel.a );

        vec3 color = mix(saturationRGB, borderTexel.rgb, borderTexel.a);
        gl_FragColor = vec4(color, maskTexel.a * uAlphaFactor);
        // gl_FragColor = texel;
    }

        // vec2 halfUv = 0.5 * vUv.xy;
        // compute box
        // float box = udRoundBox( vUv - halfUv, halfUv, 1000. );
        // float box = distance(vUv - halfUv, halfUv);
        // colorize (red / black )
        // vec3 color = mix( vec3(1.0,0.0,0.0), vec3(0.0,0.0,0.0), smoothstep(0.0,1.0,box) );

        // float frame = roundedFrame(circleExposureTexel.xy, circleExposureTexel.xy, 100., 10.);
`,kd=class extends nt{constructor(e,t,n,i,r,o,a){let l=new $t({vertexShader:Fb,fragmentShader:Ob,uniforms:{uTexture:{value:n},uBorderMask:{value:o},uBorder:{value:a},uMouseCoordinates:{value:new $},uResolution:{value:new $(window.innerWidth,window.innerHeight)},uPixelRatio:{value:e.pixelRatio},uSaturation:{value:(e.state.isMobile,0)},uCircleScaleFactor:{value:.3},uUvFactor:{value:i.uvFactor},uStrokeSize:{value:.01},uBorderRadius:{value:i.borderRadius},uBorderStart:{value:i.borderStart},uBorderEnd:{value:i.borderEnd},uBorderCenter:{value:i.borderCenter},uAlphaFactor:{value:1},uRgbOffset:{value:new $(0,0)},uRgbOffsetFactor:{value:0}},transparent:!0});super(t,l);this.initUvFactor=[i.uvFactor.x,i.uvFactor.y],this.params=i,this.transform={position:new L,scale:new L,introScale:new L},this.state=Os({active:!1,hovered:!1,hasFinishedScaling:!1}),this.index=r,this.context=e,this.setEvents()}getActive(){return this.state.active}setActive(e){this.state.active=e}setScale(e,t=2.33,n=.7519){this.scale.set(t*e,e,1),this.material.uniforms.uUvFactor.value.set(n*1.4,1*1.4)}lerpScale(e,t=2.33,n=.1,i=.7519){let r=new L(t*e,e,1);this.scale.lerp(r,n)}tweenSaturation(e){e?Ie.to(this.material.uniforms.uAlphaFactor,{value:1,ease:_t.easeInOut}):Ie.to(this.material.uniforms.uAlphaFactor,{value:.3,ease:_t.easeInOut})}setEvents(){let[e,t]=this.initUvFactor,i=(()=>{let r=Ie.timeline({paused:!0}),[o,a]=this.initUvFactor;return r.fromTo(this.material.uniforms.uUvFactor.value,{x:o,y:a,duration:.85,ease:_t.easeInOut},{x:o*1.12,y:a*1.12,duration:.5,ease:_t.easeOut},0),r.fromTo(this.material.uniforms.uRgbOffset.value,{x:0,duration:.85,ease:_t.easeOut},{x:.1,duration:.85,ease:_t.easeOut},0),r.fromTo(this.material.uniforms.uRgbOffsetFactor,{value:0,ease:_t.easeInOut,duration:.85},{value:.02,ease:_t.easeInOut,duration:.5},0),r})();this.state.onChange("active",(r,o)=>{r?(Ie.to(this.material.uniforms.uSaturation,{value:0,ease:_t.easeInOut}),Ie.to(this.material.uniforms.uAlphaFactor,{value:1,ease:_t.easeInOut}),setTimeout(()=>{this.state.hasFinishedScaling=!0},300)):(this.state.hasFinishedScaling=!1,Ie.to(this.material.uniforms.uSaturation,{value:this.context.state.isMobile?-1:-.6,ease:_t.easeInOut}),Ie.to(this.material.uniforms.uAlphaFactor,{value:.3,ease:_t.easeInOut}),Ie.to(this.material.uniforms.uRgbOffsetFactor,{value:0,ease:_t.easeInOut,duration:1}))}),this.state.onChange("hovered",(r,o)=>{r?i.play():i.reverse()})}},Hd=kd;var Bb=`
    // varying vec2 vUv;

    void main(){
        // vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`,Nb=`
    // uniform float uMixFactor;
    // uniform vec3 uColorInitial;
    uniform vec3 uColorFinal;
    // uniform float uAlpha;
    // uniform float uTime;
    // uniform float uNoiseFactor;
    // uniform float uNoiseAmplitude;
    // uniform float uNoiseFrequency;
    // uniform float uPixelRatio;

    // varying vec2 vUv;

    // float Noise21 (vec2 p, float ta, float tb) {
    //     return fract(sin(p.x*ta+p.y*tb)*5678.);
    // }

    // uniform vec2 uNoiseTextureSize;
    // uniform sampler2D uNoiseTexture;

    void main() {
        // vec3 colorMix = mix(uColorInitial, uColorFinal, uMixFactor);
    //  vec2 noiseUv = fract(gl_FragCoord.xy / uNoiseTextureSize);
    //  vec4 noise = texture2D(uNoiseTexture, noiseUv);
        // float noise = rand(uTime * 0.1);
        // vec3 noised = vec3(noise * 0.1);
        // vec3 finalColor = mix(colorMix, vec3(noise), noise.a);
    //  gl_FragColor = vec4(finalColor, uAlpha);

        // float t = sin(uTime) +123.; // tweak the start moment
        // float ta = t*uNoiseAmplitude;
        // float tb = t*(ta*uNoiseFrequency);
        
        // float noise = Noise21(vUv, ta, tb) * uPixelRatio;

        // vec3 mixed = mix(uColorFinal, vec3(noise), uNoiseFactor);

        // gl_FragColor = vec4(colorMix, 1.);
        gl_FragColor = vec4(uColorFinal, 1.);
    }
`,Gd=class extends nt{constructor(e){let t=new In(2,2,1,1),n=new $t({vertexShader:Bb,fragmentShader:Nb,uniforms:{uColorFinal:{value:new ue("#A6A594")}},depthTest:!1});super(t,n)}setInitialColor(e){this.material.uniforms.uColorInitial.value=e}setFinalColor(e){this.material.uniforms.uColorFinal.value=e}update(e,t){let n=this.material.uniforms.uMixFactor;n&&(n.value=e);let i=this.material.uniforms.uTime;i&&(i.value=t)}},Vd=Gd;var Qd=ap(Wd());var zb=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;var Ub=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;var kb=Math.PI/180,Fw=180/Math.PI,ia=Math.sin,ra=Math.cos,Cs=Math.abs,Ps=Math.sqrt;var Hb=function(e){return typeof e=="number"};var qd=1e5;var mi=function(e){return Math.round(e*qd)/qd||0};function Xd(s,e,t,n,i,r,o){for(var a=s.length,l,c,u,f,h;--a>-1;)for(l=s[a],c=l.length,u=0;u<c;u+=2)f=l[u],h=l[u+1],l[u]=f*e+h*n+r,l[u+1]=f*t+h*i+o;return s._dirty=1,s}function Gb(s,e,t,n,i,r,o,a,l){if(!(s===a&&e===l)){t=Cs(t),n=Cs(n);var c=i%360*kb,u=ra(c),f=ia(c),h=Math.PI,d=h*2,m=(s-a)/2,g=(e-l)/2,_=u*m+f*g,p=-f*m+u*g,x=_*_,y=p*p,w=x/(t*t)+y/(n*n);w>1&&(t=Ps(w)*t,n=Ps(w)*n);var b=t*t,M=n*n,v=(b*M-b*y-M*x)/(b*y+M*x);v<0&&(v=0);var E=(r===o?-1:1)*Ps(v),P=E*(t*p/n),R=E*-(n*_/t),C=(s+a)/2,Y=(e+l)/2,O=C+(u*P-f*R),B=Y+(f*P+u*R),z=(_-P)/t,F=(p-R)/n,U=(-_-P)/t,Z=(-p-R)/n,se=z*z+F*F,ce=(F<0?-1:1)*Math.acos(z/Ps(se)),J=(z*Z-F*U<0?-1:1)*Math.acos((z*U+F*Z)/Ps(se*(U*U+Z*Z)));isNaN(J)&&(J=h),!o&&J>0?J-=d:o&&J<0&&(J+=d),ce%=d,J%=d;var ge=Math.ceil(Cs(J)/(d/4)),G=[],Q=J/ge,pe=4/3*ia(Q/2)/(1+ra(Q/2)),k=u*t,ye=f*t,we=f*-n,he=u*n,ie;for(ie=0;ie<ge;ie++)i=ce+ie*Q,_=ra(i),p=ia(i),z=ra(i+=Q),F=ia(i),G.push(_-pe*p,p+pe*_,z+pe*F,F-pe*z,z,F);for(ie=0;ie<G.length;ie+=2)_=G[ie],p=G[ie+1],G[ie]=_*k+p*we+O,G[ie+1]=_*ye+p*he+B;return G[ie-2]=a,G[ie-1]=l,G}}function Yd(s){var e=(s+"").replace(Ub,function(P){var R=+P;return R<1e-4&&R>-1e-4?0:R}).match(zb)||[],t=[],n=0,i=0,r=2/3,o=e.length,a=0,l="ERROR: malformed path: "+s,c,u,f,h,d,m,g,_,p,x,y,w,b,M,v,E=function(R,C,Y,O){x=(Y-R)/3,y=(O-C)/3,g.push(R+x,C+y,Y-x,O-y,Y,O)};if(!s||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(b=d,isNaN(e[c])?(d=e[c].toUpperCase(),m=d!==e[c]):c--,f=+e[c+1],h=+e[c+2],m&&(f+=n,h+=i),c||(_=f,p=h),d==="M")g&&(g.length<8?t.length-=1:a+=g.length),n=_=f,i=p=h,g=[f,h],t.push(g),c+=2,d="L";else if(d==="C")g||(g=[0,0]),m||(n=i=0),g.push(f,h,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(d==="S")x=n,y=i,(b==="C"||b==="S")&&(x+=n-g[g.length-4],y+=i-g[g.length-3]),m||(n=i=0),g.push(x,y,f,h,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(d==="Q")x=n+(f-n)*r,y=i+(h-i)*r,m||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,g.push(x,y,n+(f-n)*r,i+(h-i)*r,n,i),c+=4;else if(d==="T")x=n-g[g.length-4],y=i-g[g.length-3],g.push(n+x,i+y,f+(n+x*1.5-f)*r,h+(i+y*1.5-h)*r,n=f,i=h),c+=2;else if(d==="H")E(n,i,n=f,i),c+=1;else if(d==="V")E(n,i,n,i=f+(m?i-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(f=_,h=p,g.closed=!0),(d==="L"||Cs(n-f)>.5||Cs(i-h)>.5)&&(E(n,i,f,h),d==="L"&&(c+=2)),n=f,i=h;else if(d==="A"){if(M=e[c+4],v=e[c+5],x=e[c+6],y=e[c+7],u=7,M.length>1&&(M.length<3?(y=x,x=v,u--):(y=v,x=M.substr(2),u-=2),v=M.charAt(1),M=M.charAt(0)),w=Gb(n,i,+e[c+1],+e[c+2],+e[c+3],+M,+v,(m?n:0)+x*1,(m?i:0)+y*1),c+=u,w)for(u=0;u<w.length;u++)g.push(w[u]);n=g[g.length-2],i=g[g.length-1]}else console.log(l);return c=g.length,c<6?(t.pop(),c=0):g[0]===g[c-2]&&g[1]===g[c-1]&&(g.closed=!0),t.totalPoints=a+c,t}function Zd(s){Hb(s[0])&&(s=[s]);var e="",t=s.length,n,i,r,o;for(i=0;i<t;i++){for(o=s[i],e+="M"+mi(o[0])+","+mi(o[1])+" C",n=o.length,r=2;r<n;r++)e+=mi(o[r++])+","+mi(o[r++])+" "+mi(o[r++])+","+mi(o[r++])+" "+mi(o[r++])+","+mi(o[r])+" ";o.closed&&(e+="z")}return e}var Yt,Jd,jd=function(){return Yt||typeof window!="undefined"&&(Yt=window.gsap)&&Yt.registerPlugin&&Yt},$d=function(){Yt=jd(),Yt?(Yt.registerEase("_CE",Rs.create),Jd=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Vb=1e20,sa=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Wb=1,qb=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Xb=/[cLlsSaAhHvVtTqQ]/g,Yb=function(e){var t=e.length,n=Vb,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},Zb=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,r=-n,o=e.length,a=1/(+e[o-2]+i),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?Yb(e)+r:+e[o-1]+r),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+r)*l},Jb=function s(e,t,n,i,r,o,a,l,c,u,f){var h=(e+n)/2,d=(t+i)/2,m=(n+r)/2,g=(i+o)/2,_=(r+a)/2,p=(o+l)/2,x=(h+m)/2,y=(d+g)/2,w=(m+_)/2,b=(g+p)/2,M=(x+w)/2,v=(y+b)/2,E=a-e,P=l-t,R=Math.abs((n-a)*P-(i-l)*E),C=Math.abs((r-a)*P-(o-l)*E),Y;return u||(u=[{x:e,y:t},{x:a,y:l}],f=1),u.splice(f||u.length-1,0,{x:M,y:v}),(R+C)*(R+C)>c*(E*E+P*P)&&(Y=u.length,s(e,t,h,d,x,y,M,v,c,u,f),s(M,v,w,b,_,p,a,l,c,u,f+1+(u.length-Y))),u},Rs=function(){function s(t,n,i){Jd||$d(),this.id=t,Wb&&this.setData(n,i)}var e=s.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var r=n.match(qb),o=1,a=[],l=[],c=i.precision||1,u=c<=1,f,h,d,m,g,_,p,x,y;if(this.data=n,(Xb.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(r=Yd(n)[0]),f=r.length,f===4)r.unshift(0,0),r.push(1,1),f=8;else if((f-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[f-2]!=1)&&Zb(r,i.height,i.originY),this.segment=r,m=2;m<f;m+=6)h={x:+r[m-2],y:+r[m-1]},d={x:+r[m+4],y:+r[m+5]},a.push(h,d),Jb(h.x,h.y,+r[m],+r[m+1],+r[m+2],+r[m+3],d.x,d.y,1/(c*2e5),a,a.length-1);for(f=a.length,m=0;m<f;m++)p=a[m],x=a[m-1]||p,p.x>x.x||x.y!==p.y&&x.x===p.x||p===x?(x.cx=p.x-x.x,x.cy=p.y-x.y,x.n=p,x.nx=p.x,u&&m>1&&Math.abs(x.cy/x.cx-a[m-2].cy/a[m-2].cx)>2&&(u=0),x.cx<o&&(x.cx?o=x.cx:(x.cx=.001,m===f-1&&(x.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(m--,1),f--);if(f=1/o+1|0,g=1/f,_=0,p=a[0],u){for(m=0;m<f;m++)y=m*g,p.nx<y&&(p=a[++_]),h=p.y+(y-p.x)/p.cx*p.cy,l[m]={x:y,cx:g,y:h,cy:0,nx:9},m&&(l[m-1].cy=h-l[m-1].y);l[f-1].cy=a[a.length-1].y-h}else{for(m=0;m<f;m++)p.nx<m*g&&(p=a[++_]),l[m]=p;_<a.length-1&&(l[m-1]=a[a.length-2])}return this.ease=function(w){var b=l[w*f|0]||l[f-1];return b.nx<w&&(b=b.n),b.y+(w-b.x)/b.cx*b.cy},this.ease.custom=this,this.id&&Yt.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return s.getSVGData(this,n)},s.create=function(n,i,r){return new s(n,i,r).ease},s.register=function(n){Yt=n,$d()},s.get=function(n){return Yt.parseEase(n)},s.getSVGData=function(n,i){i=i||{};var r=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=Yt.utils.toArray(i.path)[0],u,f,h,d,m,g,_,p,x,y;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=Yt.parseEase(n)),n.custom&&(n=n.custom),n instanceof s)u=Zd(Xd([n.segment],r,0,0,-o,a,l));else{for(u=[a,l],_=Math.max(5,(i.precision||1)*200),d=1/_,_+=2,p=5/_,x=sa(a+d*r),y=sa(l+n(d)*-o),f=(y-l)/(x-a),h=2;h<_;h++)m=sa(a+h*d*r),g=sa(l+n(h*d)*-o),(Math.abs((g-y)/(m-x)-f)>p||h===_-1)&&(u.push(x,y),f=(g-y)/(m-x)),x=m,y=g;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},s}();jd()&&Yt.registerPlugin(Rs);Rs.version="3.3.1";var oa=class{constructor(e){this.context=e}createChildLetters(e){let t=n=>{let i=document.createElement("DIV");i.textContent=n.textContent,i.className="hero-character-child",n.innerHTML="",n.appendChild(i)};for(let n of this.context.projects[e].text.title.split.chars)t(n);for(let n of this.context.projects[e].text.category.split.chars)t(n)}createChildLines(e){let t=n=>{let i=document.createElement("DIV");i.textContent=n.textContent,i.className="hero-line-child",n.innerHTML="",n.appendChild(i)};for(let n of this.context.projects[e].text.description.split.lines)t(n)}setDOMColors(e,t){let{text:n,container:i}=this.context.projects[e],r=i.querySelector(".foreground");if(!r)return;let o=r.style.color,a=[...document.querySelectorAll(".nav-link .nav-text")],l=t?[...document.querySelectorAll(".client, .hero-block.right .text")]:[...document.querySelectorAll(".client, .hero-block.right .text, .preloader__title")],c=n.title.split.chars.concat(n.category.split.chars).concat(n.client.split.chars);for(let h of a.concat(l).concat(c))h.style.color=o;let u=[...document.querySelectorAll(".nav-line")];for(let h of u)h.style.backgroundColor=o;let f=[...document.querySelectorAll(".mono-logo svg, .logomark-wrapper svg")];for(let h of f){let d=[...h.querySelectorAll("path")];for(let m of d)m.style.fill=o}}initDOM(){for(let t=0;t<this.context.projects.length;t++)this.createChildLines(t);Array.from(document.querySelectorAll(".hero-img__wrap")).forEach(t=>{t.style.display="none"}),this.hideLines(),this.setDOMColors(this.context.proxyState.activeProjectIndex,!0)}getChars(e){let t=this.context.projects[e].text.title.split.chars.map(i=>i.querySelector(".hero-character-child")),n=this.context.projects[e].text.category.split.chars.map(i=>i.querySelector(".hero-character-child"));return t.concat(n)}getClientLines(e){return this.context.projects[e].text.client.split.lines}getDescriptionLines(e){return this.context.projects[e].text.description.split.lines.map(n=>n.querySelector(".hero-line-child"))}getTitleLines(e){return this.context.projects[e].text.title.split.lines}getCategoryLines(e){return this.context.projects[e].text.category.split.lines}animateIn(e,t=1.8){this.getCategoryLines(e).length&&Ie.fromTo(this.getCategoryLines(e),{y:window.innerWidth*.05,duration:t,ease:this.context.textEase.easeInOut},{y:0,duration:t,ease:this.context.textEase.easeInOut}),this.getTitleLines(e).length&&Ie.fromTo(this.getTitleLines(e),{y:window.innerWidth*.05,duration:t,ease:this.context.textEase.easeInOut},{y:0,duration:t,ease:this.context.textEase.easeInOut}),this.getClientLines(e).length&&Ie.fromTo(this.getClientLines(e),{y:20,duration:t,ease:this.context.textEase.easeInOut},{y:0,duration:t,ease:this.context.textEase.easeInOut}),this.getDescriptionLines(e).length&&Ie.fromTo(this.getDescriptionLines(e),{y:20,duration:t,ease:this.context.textEase.easeInOut},{y:0,duration:t,ease:this.context.textEase.easeInOut})}animateInFromLeft(e,t=1.8){Ie.fromTo(this.getChars(e),{x:-60,autoAlpha:1,duration:t,ease:this.context.textEase.easeInOut},{x:0,autoAlpha:1,duration:t,ease:this.context.textEase.easeInOut}),this.getClientLines(e).length&&Ie.fromTo(this.getClientLines(e),{y:20,duration:t,ease:this.context.textEase.easeInOut},{y:0,duration:t,ease:this.context.textEase.easeInOut}),this.getDescriptionLines(e).length&&Ie.fromTo(this.getDescriptionLines(e),{y:20,duration:t,ease:this.context.textEase.easeInOut},{y:0,duration:t,ease:this.context.textEase.easeInOut})}animateInFromRight(e,t=1.8){Ie.fromTo(this.getChars(e),{x:60,autoAlpha:1,duration:t,ease:this.context.textEase.easeInOut},{x:0,autoAlpha:1,duration:t,ease:this.context.textEase.easeInOut}),this.getClientLines(e).length&&Ie.fromTo(this.getClientLines(e),{y:20,duration:t,ease:this.context.textEase.easeInOut},{y:0,duration:t,ease:this.context.textEase.easeInOut}),this.getDescriptionLines(e)&&Ie.fromTo(this.getDescriptionLines(e),{y:20,duration:t,ease:this.context.textEase.easeInOut},{y:0,duration:t,ease:this.context.textEase.easeInOut})}animateOutToRight(e,t=1.8){Ie.to(this.getChars(e),{x:60,duration:t,ease:this.context.textEase.easeInOut})}animateOutToLeft(e,t=1.8){Ie.to(this.getChars(e),{x:-60,duration:t,ease:this.context.textEase.easeInOut})}animateOutLineUp(e,t=1.8){this.getCategoryLines(e).length&&Ie.to(this.getCategoryLines(e),{y:-window.innerWidth*.05,duration:t,ease:this.context.textEase.easeInOut}),this.getTitleLines(e).length&&Ie.to(this.getTitleLines(e),{y:-window.innerWidth*.05,duration:t,ease:this.context.textEase.easeInOut}),this.getClientLines(e).length&&Ie.to(this.getClientLines(e),{y:-20,duration:t,ease:this.context.textEase.easeInOut}),this.getDescriptionLines(e).length&&Ie.to(this.getDescriptionLines(e),{y:-20,duration:t,ease:this.context.textEase.easeInOut})}hideLines(){for(let e=0;e<this.context.projects.length;e++)this.animateOutLineUp(e,0)}initTextAnimation(){setTimeout(()=>{this.animateIn(this.context.proxyState.activeProjectIndex,this.context.PARAMS.animationDuration)},200)}};function Cc(s,e,t,n){let i=new Qd.default({useKeyboard:!1,passive:!0}),r=1,o={slidingZFactor:0,speed:.003,animationDuration:1,ease:"Cubic"},a=[],l=0,c=0,u={target:0,prevActiveProjectIndex:r,roundedProgression:0,zProgression:0,xProgression:0,scrollX:0,scrollY:0,isMobile:ua(),xProgressionScaled:0,disableOOB:!1},h=Os({phase:"IDLE",activeProjectIndex:r}),d,m,g,_,p=new $(-window.innerWidth,-window.innerHeight),x=[],y,w=Hl(window.devicePixelRatio,1,2),b,M=[],v,E=[],P=new ti,R,C,Y=_t,O=new $,B=new $,z=new $,F=new $,U=null,Z=0,se=!1,ce={x:0,y:0},J={vector:new L,globalPosition:new L},ge=2.33,G=1.39,Q=.8*3.3,pe=4,k=1.877*3.3,ye=4,we=0,he=0,ie;function Pe(){g=new We({antialias:!1,alpha:!0}),g.setSize(window.innerWidth,u.isMobile?document.body.clientHeight:window.innerHeight),g.setAnimationLoop(zr),g.outputEncoding=Xi,m=new ts,d=new wt(4,window.innerWidth/window.innerHeight,.01,100),d.position.z=s.initialZ,_=new zl,y=ca(d),b={camera:d,pixelRatio:w,viewport:y,state:u,mouse:p},K(),g.domElement.className="three-canvas",document.body.appendChild(g.domElement)}function W(j,ee,be,Le,Re){let $e={position:ee,rotation:new Ln,scale:new L(he,be,1),borderRadius:.0027,borderStart:.025,borderEnd:1-.025,borderCenter:1.89,uvFactor:new $(u.isMobile?1.33*1.4:.7519*1.4,1*1.4)};a.push($e);let tt=new Hd(b,new In(.3,.3,1,1),t[j].data.texture,$e,j,Le,Re);return tt.position.copy($e.position),tt.rotation.copy($e.rotation),tt.scale.copy($e.scale),tt.name=t[j].data.title,tt.userData.id=t[j].data.id,tt.outOfBoundsCount=j,tt}function K(){we=u.isMobile?y.width*.7:y.width*.88,he=u.isMobile?1.33*we:2.33*we;let j=new Pi().load(u.isMobile?"https://uploads-ssl.webflow.com/609955ba45fec848355ed2d6/619b4e8053ed816a51574025_mask_1_33.png":"https://uploads-ssl.webflow.com/609955ba45fec848355ed2d6/619b50f7fe06e28e89d51404_fill_2_33.png"),ee=new Pi().load(u.isMobile?"https://uploads-ssl.webflow.com/609955ba45fec848355ed2d6/619b4e80b939f9895ee276d9_border_1_33.png":"https://uploads-ssl.webflow.com/609955ba45fec848355ed2d6/619b50f9cb39768ded4ae4a9_border_2_33.png");for(let tt=0;tt<t.length;tt++){let gi=u.isMobile?0:-y.width/2+y.width/2*tt,Tn=W(tt,new L(gi,0,-.1),we,j,ee);E.push(Tn),P.add(Tn)}m.add(P),v=new Vd(e),v.renderOrder=-1,v.frustumCulled=!1,v.name="Background",m.add(v);let{primaryColor:be,secondaryColor:Le}=t[h.activeProjectIndex].data;v.setFinalColor(be),s.backgroundProgressionTarget=Le;let Re=new Ti({map:n.load("https://uploads-ssl.webflow.com/609955ba45fec848355ed2d6/619527ae2f7e94e5b15e93df_cadre.png"),transparent:!0,depthTest:!1});R=new nt(M[0],Re),R.scale.set(1.3*we*1.15,we*1.15,1),R.renderOrder=-1,m.add(R);let $e=new Ti({map:n.load(u.isMobile?"https://uploads-ssl.webflow.com/609955ba45fec848355ed2d6/619babcee8e286828eba4417_line_mobile.jpg":"https://uploads-ssl.webflow.com/609955ba45fec848355ed2d6/6175d9b7b5b59f4f534a6dc5_Vector%203.png"),transparent:!0,depthTest:!1});C=new nt(new In(.002,y.height,1,1),$e),C.renderOrder=-4,u.isMobile&&(C.rotation.z=Math.PI/2),m.add(C)}function ne(j,ee){j.position.set(0,y.height/2-y.height/2*ee,0)}function xe(j,ee){j.position.set(-y.width/G+y.width/G*ee,0,0)}function ae(j){ge=1.33;let ee=u.isMobile?y.width*2:y.height*1.3;j.setScale(ee,ge,1.33),R.scale.set(ge*ee*1.1,ee*1.1,1)}function A(j){ge=2.33;let ee=y.width*.9;j.setScale(ee,ge,.7519),R.scale.set(ge*ee*1.07,ee*1.1,1)}let T=new oa({PARAMS:o,projects:t,textEase:Y,proxyState:h}),V=!1;function X(){return setTimeout(()=>{let j=u.roundedProgression<0?t.length-Math.abs(u.roundedProgression):u.roundedProgression;Me(j)},380)}function oe(j){for(let ee=0;ee<E.length;ee++)if(E[ee].userData.id===j.object.userData.id)return ee}function fe(j){return u.isMobile?-y.height/2+y.height/2*E[j].index:y.width/G-y.width/G*E[j].index}function Me(j){h.activeProjectIndex=j,u.roundedProgression=j,u.target=fe(j),h.phase="GOING_TO_PROJECT",z.x=0,F.x=0,u.scrollX=0,u.scrollY=0}function ve(j){let ee=document.querySelector(".three-canvas");Ie.to(ee,{force3D:!0,y:V?"0":"100%",ease:Ss.easeInOut,duration:V?2.7:1.5}),V=!V}function Ae(j){if(h.phase==="PRELOAD"||h.phase==="INTRO")return;let{clientX:ee,clientY:be}=j.touches&&j.touches.length?j.touches[0]:j;p.x=ee/window.innerWidth*2-1,p.y=-(be/window.innerHeight)*2+1,ce.x=ee,ce.y=be,st(),Z=1,O.x=ee,O.y=be,B.copy(z),x.length?U=x[0]:U=null,h.phase!=="GOING_TO_PROJECT"&&(h.phase="SLIDING")}function _e(j){if(h.phase==="PRELOAD"||h.phase==="INTRO")return;Z=0;let ee=U&&x.length&&U.object.userData.id===x[0].object.userData.id,{clientX:be,clientY:Le}=j.changedTouches[0],Re=be===ce.x||Le===ce.y;if(p.x=be/window.innerWidth*2-1,p.y=-(Le/window.innerHeight)*2+1,st(),ee&&Re){let $e=oe(x[0]);Me($e)}h.phase!=="GOING_TO_PROJECT"&&(h.phase="IDLE")}function I(j){if(h.phase==="PRELOAD"||h.phase==="INTRO")return;let{clientX:ee,clientY:be}=j.touches&&j.touches.length?j.touches[0]:j;if(p.x=ee/window.innerWidth*2-1,p.y=-(be/window.innerHeight)*2+1,u.isMobile){if(h.phase!=="GOING_TO_PROJECT")return;h.phase="SLIDING"}else{if(Z===0||se)return;F.x=B.x+(ee-O.x),F.y=B.y+(be-O.y)}}function le(j){if(h.phase==="PRELOAD"||h.phase==="INTRO"||j.buttons!==1)return;let{clientX:ee,clientY:be}=j;p.x=j.clientX/window.innerWidth*2-1,p.y=-(j.clientY/window.innerHeight)*2+1,ce.x=ee,ce.y=be,Z=1,O.x=ee,O.y=be,B.copy(z),x.length?U=x[0]:U=null,h.phase!=="GOING_TO_PROJECT"&&(h.phase="SLIDING")}function q(j){if(h.phase==="PRELOAD"||h.phase==="INTRO")return;Z=0;let ee=U&&x.length&&U.object.name===x[0].object.name,{clientX:be,clientY:Le}=j,Re=be===ce.x&&Le===ce.y;if(ee&&Re){let $e=oe(x[0]);Me($e)}h.phase!=="GOING_TO_PROJECT"&&(h.phase="IDLE")}function de(j){if(x.length?document.querySelector("main").classList.add("hovering-project"):document.querySelector("main").classList.remove("hovering-project"),h.phase==="PRELOAD"||h.phase==="INTRO")return;let{clientX:ee,clientY:be}=j.touches&&j.touches.length?j.touches[0]:j;if(p.x=j.clientX/window.innerWidth*2-1,p.y=-(j.clientY/window.innerHeight)*2+1,E[h.activeProjectIndex]){let Re=E[h.activeProjectIndex].material;Ie.to(Re.uniforms.uMouseCoordinates.value,{x:p.x,y:p.y,duration:.23})}Z===0||se||(F.x=B.x+(ee-O.x),F.y=B.y+(be-O.y),h.phase==="GOING_TO_PROJECT"&&(h.phase="SLIDING"))}function me(j){if(!(h.phase==="PRELOAD"||h.phase==="INTRO"))switch(j.code){case"ArrowLeft":{let ee=h.activeProjectIndex-1,be=ee<0?t.length-1:ee%t.length;Me(be)}break;case"ArrowRight":{let ee=(h.activeProjectIndex+1)%t.length;Me(ee)}break;default:break}}function Fe(){u.isMobile=ua();let j=Ic();document.body.appendChild(j);let ee=j.getBoundingClientRect();console.log(ee.height,window.innerHeight),document.body.style.height=ee.height+"px";let be=window.innerWidth,Le=u.isMobile?ee.height:window.innerHeight;w=Hl(window.devicePixelRatio,1,2),d.aspect=be/Le,d.updateProjectionMatrix(),g.setSize(be,Le),g.setPixelRatio(w),y=ca(d);for(let Re=0;Re<E.length;Re++){let $e=E[Re];u.isMobile?(console.log(1),ne($e,Re),ae($e),Ie.set(C.scale,{x:.7,y:.8,z:y.height/3})):(xe($e,Re),A($e))}}function ht(){window.addEventListener("keydown",Rc(me,200)),window.addEventListener("resize",Fe);let j=document.querySelector(".nav-trigger");j&&j.addEventListener("click",ve),u.isMobile?(window.addEventListener("touchstart",Ae,{passive:!0}),window.addEventListener("touchend",_e),window.addEventListener("touchmove",I,{passive:!0})):(window.addEventListener("mousedown",le),window.addEventListener("mouseup",q),window.addEventListener("mousemove",de)),window.gsap=Ie,h.onChange("phase",(ee,be)=>{if(ee==="PRELOAD"){if(!u.isMobile)for(let Le=0;Le<E.length;Le++){let Re=E[Le];ne(Re,Le),ae(Re)}C.scale.setScalar(1e-5)}if(be==="PRELOAD"&&ee==="INTRO"){let Le=.7519,Re=new $(Le*1.4,1*1.4),$e=(()=>{if(window.innerWidth>1280)return 1.6;if(window.innerWidth<=1280)return 1.7})(),tt=1.4,gi=Rs.create("Modified Expo","M0,0,C0.084,0.61,0.242,0.792,0.308,0.846,0.384,0.908,0.442,1,1,1"),Tn=_t.easeOut,S=()=>{if(h.phase="IDLE",setTimeout(()=>{Me(1)},100),setTimeout(()=>{Ie.to(C.scale,{x:.8,y:.8,z:1,duration:.5,ease:Tn})},200),!u.isMobile)for(let N=3;N<E.length;N++){let D=E[N];Ie.set(D.material.uniforms.uUvFactor.value,{x:Re.x,y:Re.y}),Ie.set(D.scale,{x:2.33*y.width*.9,y:y.width*.9}),Ie.set(D.position,{x:-y.width/G+y.width/G*N,y:0})}};if(u.isMobile){S(),setTimeout(()=>{T.initTextAnimation()},1);return}else{for(let N=0;N<3;N++){let D=E[N];Ie.to(D.material.uniforms.uUvFactor.value,{x:Re.x,y:Re.y,duration:$e,ease:gi}),Ie.to(D.scale,{x:2.33*y.width*.9,y:y.width*.9,duration:tt,ease:Tn,onComplete:S}),Ie.to(D.position,{x:-y.width/G+y.width/G*N,y:0,duration:tt,ease:Tn})}Ie.to(R.scale,{x:2.33*y.width*.9*1.07,y:y.width*.9*1.1,duration:tt,ease:Tn,onComplete:S}),setTimeout(()=>{T.initTextAnimation()},1)}}if(ee==="SLIDING"||ee==="IDLE")for(let Le of E)Le.setActive(!1);be==="SLIDING"&&ee==="IDLE"&&X()}),h.onChange("activeProjectIndex",(ee,be)=>{if(be!==ee){u.prevActiveProjectIndex=be;let{data:Le}=t[ee];s.backgroundProgressionTarget=Le.secondaryColor,T.animateOutLineUp(be,o.animationDuration),T.animateIn(ee,o.animationDuration),T.setDOMColors(ee,!1)}for(let Le=0;Le<E.length;Le++){let Re=E[Le];Le!==ee&&Re.getActive()?Re.setActive(!1):Le===ee&&!Re.getActive()&&Re.setActive(!0)}}),i.on(ee=>{h.phase==="PRELOAD"||h.phase==="INTRO"||(u.scrollX+=ee.deltaX,u.isMobile?u.scrollY-=ee.deltaY:u.scrollY+=ee.deltaY,ie&&clearTimeout(ie),ie=X())})}function st(){_.setFromCamera(p,d),x=_.intersectObjects(P.children,!0)}function dn(){switch(h.phase){case"PRELOAD":break;case"INTRO":break;case"IDLE":z.x+=F.x-z.x,u.xProgression=z.x*o.speed+u.target+u.scrollX*o.speed*.2+u.scrollY*o.speed*.2,je(u.xProgression),zt();break;case"SLIDING":z.x+=F.x-z.x,u.xProgression=z.x*o.speed+u.target+u.scrollX*o.speed*.2+u.scrollY*o.speed*.2,je(u.xProgression),zt();break;case"GOING_TO_PROJECT":z.x+=F.x-z.x,u.xProgression=z.x*o.speed+u.target+u.scrollX*o.speed*.2+u.scrollY*o.speed*.2,je(u.xProgression),zt();break;default:break}}function je(j){u.isMobile?P.position.y=Ur(P.position.y,j,.125):P.position.x=Ur(P.position.x,j,.125)}function pn(j){for(let ee of E){ee.getWorldPosition(J.vector);let be=1-Math.abs(J.vector.x/(b.viewport.width/2));ee.position.z=j*be}}function zt(){if(!u.disableOOB)for(let j of E)if(j.getWorldPosition(J.vector),u.isMobile){let ee=y.height/2*pe,be=J.vector.y<-ee-j.scale.y/2;J.vector.y>ee+j.scale.y/2?(j.position.y-=y.height+y.height*ye,j.index=E.length+j.index):be&&(j.position.y+=y.height+y.height*ye,j.index=j.index-E.length)}else{let ee=y.width/2+Q,be=J.vector.x<-ee,Le=J.vector.x>ee;be?(j.position.x+=y.width+y.width*k,j.index=E.length+j.index):Le&&(j.position.x-=y.width+y.width*k,j.index=j.index-E.length)}}function zr(j){if(g.render(m,d),st(),!u.disableOOB){if(dn(),y.width>=1.99?u.xProgressionScaled=u.xProgression*(y.width*.32):y.width>=1.84?u.xProgressionScaled=u.xProgression*(y.width*.406):y.width>=1.67?u.xProgressionScaled=u.xProgression*(y.width*.5):y.width>=1.47?u.xProgressionScaled=u.xProgression*(y.width*.62):y.width>=.7?u.xProgressionScaled=u.xProgression*(y.width*2.44):u.xProgressionScaled=u.xProgression*(y.width*3.2),u.isMobile&&(u.xProgressionScaled=-u.xProgressionScaled),u.roundedProgression=Math.round(r-u.xProgressionScaled)%t.length,v.material.uniforms.uColorFinal.value.lerpColors(v.material.uniforms.uColorFinal.value,s.backgroundProgressionTarget,.1),x.length){let{active:ee,hasFinishedScaling:be}=x[0].object.state;ee&&be&&!x[0].object.state.hovered&&(x[0].object.state.hovered=!0)}else for(let ee of E)ee.state.hovered&&(ee.state.hovered=!1);c=u.xProgression-l,l=u.xProgression,u.isMobile?(E[h.activeProjectIndex].getWorldPosition(J.globalPosition),C.position.y=Ur(C.position.y,J.globalPosition.y,.3)):(E[h.activeProjectIndex].getWorldPosition(J.globalPosition),C.position.x=Ur(C.position.x,J.globalPosition.x,.3))}}function aa(){let j=document.querySelector(".logomark-wrapper .svg-logomark"),ee=document.querySelector(".preloader__title"),be=t[h.activeProjectIndex].container.querySelector(".foreground");if(!j||!ee||!be)return;j.style.opacity="0";let Le=ee.getBoundingClientRect(),Re=j.getBoundingClientRect();return{y:Re.y+Re.height/2-(Le.y+Le.height/2),scale:Re.width/Le.width,preloaderTitle:ee,foreground:be}}function Is(j){let ee=aa();if(!ee)return;let{y:be,scale:Le,preloaderTitle:Re,foreground:$e}=ee,tt=Ie.timeline({paused:!0});return tt.to(Re,{y:be,scale:Le,duration:j,ease:Ss.easeInOut,onStart:()=>{let gi=$e.style.color;Re.style.color=gi}}),tt}function Ds(j,ee,be){let Le=Ie.timeline({paused:!0});return Le.to(j,{y:"-100%",duration:ee,ease:Ss.easeInOut,onComplete:()=>{be()}}),Le}function Sn(){let j=1.4;h.phase="PRELOAD";let ee=document.querySelector(".preloader"),be=document.querySelector(".preloader video");if(!ee||!be)throw new Error("no preloader");let Le=Ds(ee,j,()=>{ee.style.display="none",be.style.display="none",h.phase="INTRO"}),Re=Is(j),$e=()=>{Re&&Re.play(),Le&&Le.play()};setTimeout(()=>{$e()},600)}function Fs(){T.initDOM(),Pe(),Fe(),ht(),Sn()}return{init:Fs}}function jb(){let s=setTimeout(()=>{document.body.style.display="block",document.body.style.opacity="1"},3e3),e=document.querySelector(".preloader video");e.readyState>=3?(clearTimeout(s),document.body.style.display="block",document.body.style.opacity="1"):e.addEventListener("loadeddata",()=>{clearTimeout(s),e.readyState>=3&&(document.body.style.display="block",document.body.style.opacity="1")});let t={progression:0,initialZ:15,gap:.5,backgroundProgression:0,backgroundProgressionTarget:new ue},n={uNoiseFactor:.088,uNoiseAmplitude:.654321,uNoiseFrequency:.123456},i=new Pi,r=Array.from(document.querySelectorAll(".hero-wrap .hero-list .hero-item")),o=[];r.length||console.error("no containers in DOM");let a=r.map(l=>new Promise(c=>{let u=l.querySelector(".hero-img__wrap img");i.load(`https://h5fwhsu236.execute-api.us-east-2.amazonaws.com/ProxyBizarro?URL=${u.src}`,f=>{c(f)})}));Promise.all(a).then(l=>{for(let u=0;u<r.length;u++){let f=r[u],h=f.querySelector(".h-h1"),d=f.querySelector(".foreground"),m=f.querySelector(".background"),g=f.querySelector(".h-h2"),_=f.querySelector(".client"),p=f.querySelector(".hero-block.left .hero-box.lower .text:not(.w-dyn-bind-empty)"),x=l[u],y={data:{id:u,texture:x,title:h&&h.innerText||"",primaryColor:d&&new ue(d.style.color)||new ue("#000"),secondaryColor:m&&new ue(m.style.backgroundColor)||new ue("#000"),categoryText:g&&g.innerText||"",clientText:_&&_.innerText||"",descriptionText:p&&p.innerText||""},text:{title:{split:new SplitText(h,{type:"lines",charsClass:"hero-character"})},category:{split:new SplitText(g,{type:"lines",charsClass:"hero-character"})},client:{split:new SplitText(_,{type:"lines"})},description:{split:new SplitText(p,{type:"lines"})}},container:f};o.push(y)}Cc(t,n,o,i).init()})}Pc(()=>{jb()});})();
/*!
 * CSSPlugin 3.7.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * CustomEase 3.3.1
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * GSAP 3.7.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * paths 3.3.1
 * https://greensock.com
 *
 * Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
