(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function _(){}function ct(e,t){for(const n in t)e[n]=t[n];return e}function Je(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function We(e){return e()}function Se(){return Object.create(null)}function ht(e){e.forEach(We)}function Jt(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Xe(e){return Object.keys(e).length===0}function Fe(e,...t){if(e==null)return _;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ot(e,t,n){e.$$.on_destroy.push(Fe(t,n))}function Xt(e,t,n,s){if(e){const r=Ke(e,t,n,s);return e[0](r)}}function Ke(e,t,n,s){return e[1]&&s?ct(n.ctx.slice(),e[1](s(t))):n.ctx}function te(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(t.dirty.length,r.length);for(let a=0;a<c;a+=1)o[a]=t.dirty[a]|r[a];return o}return t.dirty|r}return t.dirty}function ee(e,t,n,s,r,o){if(r){const c=Ke(t,n,s,o);e.p(c,r)}}function ne(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}function Vt(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Le(e,t){const n={};t=new Set(t);for(const s in e)!t.has(s)&&s[0]!=="$"&&(n[s]=e[s]);return n}function d(e,t){e.appendChild(t)}function y(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function E(){return R(" ")}function Mt(){return R("")}function tn(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function T(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ne(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)t[s]==null?e.removeAttribute(s):s==="style"?e.style.cssText=t[s]:s==="__value"?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:T(e,s,t[s])}function en(e){return Array.from(e.childNodes)}function nn(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function sn(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}function Oe(e,t){return new e(t)}let wt;function F(e){wt=e}function gt(){if(!wt)throw new Error("Function called outside component initialization");return wt}function rn(e){gt().$$.on_mount.push(e)}function on(e){gt().$$.on_destroy.push(e)}function ln(){const e=gt();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const o=sn(t,n,{cancelable:s});return r.slice().forEach(c=>{c.call(e,o)}),!o.defaultPrevented}return!0}}function zt(e,t){return gt().$$.context.set(e,t),t}function pt(e){return gt().$$.context.get(e)}const dt=[],je=[];let mt=[];const Re=[],cn=Promise.resolve();let Gt=!1;function an(){Gt||(Gt=!0,cn.then(se))}function Yt(e){mt.push(e)}const Dt=new Set;let ut=0;function se(){if(ut!==0)return;const e=wt;do{try{for(;ut<dt.length;){const t=dt[ut];ut++,F(t),un(t.$$)}}catch(t){throw dt.length=0,ut=0,t}for(F(null),dt.length=0,ut=0;je.length;)je.pop()();for(let t=0;t<mt.length;t+=1){const n=mt[t];Dt.has(n)||(Dt.add(n),n())}mt.length=0}while(dt.length);for(;Re.length;)Re.pop()();Gt=!1,Dt.clear(),F(e)}function un(e){if(e.fragment!==null){e.update(),ht(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Yt)}}function fn(e){const t=[],n=[];mt.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),mt=t}const Tt=new Set;let lt;function Et(){lt={r:0,c:[],p:lt}}function St(){lt.r||ht(lt.c),lt=lt.p}function $(e,t){e&&e.i&&(Tt.delete(e),e.i(t))}function v(e,t,n,s){if(e&&e.o){if(Tt.has(e))return;Tt.add(e),lt.c.push(()=>{Tt.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function He(e,t){const n=t.token={};function s(r,o,c,a){if(t.token!==n)return;t.resolved=a;let i=t.ctx;c!==void 0&&(i=i.slice(),i[c]=a);const l=r&&(t.current=r)(i);let u=!1;t.block&&(t.blocks?t.blocks.forEach((p,P)=>{P!==o&&p&&(Et(),v(p,1,1,()=>{t.blocks[P]===p&&(t.blocks[P]=null)}),St())}):t.block.d(1),l.c(),$(l,1),l.m(t.mount(),t.anchor),u=!0),t.block=l,t.blocks&&(t.blocks[o]=l),u&&se()}if(Je(e)){const r=gt();if(e.then(o=>{F(r),s(t.then,1,t.value,o),F(null)},o=>{if(F(r),s(t.catch,2,t.error,o),F(null),!t.hasCatch)throw o}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}}function dn(e,t,n){const s=t.slice(),{resolved:r}=e;e.current===e.then&&(s[e.value]=r),e.current===e.catch&&(s[e.error]=r),e.block.p(s,n)}function Ve(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const c=e[o],a=t[o];if(a){for(const i in c)i in a||(s[i]=1);for(const i in a)r[i]||(n[i]=a[i],r[i]=1);e[o]=a}else for(const i in c)r[i]=1}for(const c in s)c in n||(n[c]=void 0);return n}function Ie(e){return typeof e=="object"&&e!==null?e:{}}function S(e){e&&e.c()}function C(e,t,n,s){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),s||Yt(()=>{const c=e.$$.on_mount.map(We).filter(Jt);e.$$.on_destroy?e.$$.on_destroy.push(...c):ht(c),e.$$.on_mount=[]}),o.forEach(Yt)}function M(e,t){const n=e.$$;n.fragment!==null&&(fn(n.after_update),ht(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pn(e,t){e.$$.dirty[0]===-1&&(dt.push(e),an(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,s,r,o,c,a=[-1]){const i=wt;F(e);const l=e.$$={fragment:null,ctx:[],props:o,update:_,not_equal:r,bound:Se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:Se(),dirty:a,skip_bound:!1,root:t.target||i.$$.root};c&&c(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(p,P,...x)=>{const m=x.length?x[0]:P;return l.ctx&&r(l.ctx[p],l.ctx[p]=m)&&(!l.skip_bound&&l.bound[p]&&l.bound[p](m),u&&pn(e,p)),P}):[],l.update(),u=!0,ht(l.before_update),l.fragment=s?s(l.ctx):!1,t.target){if(t.hydrate){const p=en(t.target);l.fragment&&l.fragment.l(p),p.forEach(k)}else l.fragment&&l.fragment.c();t.intro&&$(e.$$.fragment),C(e,t.target,t.anchor,t.customElement),se()}F(i)}class V{$destroy(){M(this,1),this.$destroy=_}$on(t,n){if(!Jt(n))return _;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!Xe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Qt={},Ct={},Ge={},Ye=/^:(.+)/,Ae=4,mn=3,hn=2,gn=1,_n=1,vt=e=>e.replace(/(^\/+|\/+$)/g,"").split("/"),Ut=e=>e.replace(/(^\/+|\/+$)/g,""),bn=(e,t)=>{const n=e.default?0:vt(e.path).reduce((s,r)=>(s+=Ae,r===""?s+=_n:Ye.test(r)?s+=hn:r[0]==="*"?s-=Ae+gn:s+=mn,s),0);return{route:e,score:n,index:t}},$n=e=>e.map(bn).sort((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index),Be=(e,t)=>{let n,s;const[r]=t.split("?"),o=vt(r),c=o[0]==="",a=$n(e);for(let i=0,l=a.length;i<l;i++){const u=a[i].route;let p=!1;if(u.default){s={route:u,params:{},uri:t};continue}const P=vt(u.path),x={},m=Math.max(o.length,P.length);let L=0;for(;L<m;L++){const N=P[L],A=o[L];if(N&&N[0]==="*"){const H=N==="*"?"*":N.slice(1);x[H]=o.slice(L).map(decodeURIComponent).join("/");break}if(typeof A>"u"){p=!0;break}const j=Ye.exec(N);if(j&&!c){const H=decodeURIComponent(A);x[j[1]]=H}else if(N!==A){p=!0;break}}if(!p){n={route:u,params:x,uri:"/"+o.slice(0,L).join("/")};break}}return n||s||null},Wt=(e,t)=>e+(t?`?${t}`:""),wn=(e,t)=>{if(e.startsWith("/"))return e;const[n,s]=e.split("?"),[r]=t.split("?"),o=vt(n),c=vt(r);if(o[0]==="")return Wt(r,s);if(!o[0].startsWith(".")){const l=c.concat(o).join("/");return Wt((r==="/"?"":"/")+l,s)}const a=c.concat(o),i=[];return a.forEach(l=>{l===".."?i.pop():l!=="."&&i.push(l)}),Wt("/"+i.join("/"),s)},qe=(e,t)=>`${Ut(t==="/"?e:`${Ut(e)}/${Ut(t)}`)}/`,vn=e=>!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey),Qe=()=>typeof window<"u"&&"document"in window&&"location"in window,kn=e=>({active:e&4}),Ze=e=>({active:!!e[2]});function yn(e){let t,n,s,r;const o=e[16].default,c=Xt(o,e,e[15],Ze);let a=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],i={};for(let l=0;l<a.length;l+=1)i=ct(i,a[l]);return{c(){t=h("a"),c&&c.c(),Ne(t,i)},m(l,u){y(l,t,u),c&&c.m(t,null),n=!0,s||(r=tn(t,"click",e[5]),s=!0)},p(l,[u]){c&&c.p&&(!n||u&32772)&&ee(c,o,l,l[15],n?te(o,l[15],u,kn):ne(l[15]),Ze),Ne(t,i=Ve(a,[(!n||u&1)&&{href:l[0]},(!n||u&4)&&{"aria-current":l[2]},u&2&&l[1],u&64&&l[6]]))},i(l){n||($(c,l),n=!0)},o(l){v(c,l),n=!1},d(l){l&&k(t),c&&c.d(l),s=!1,r()}}}function xn(e,t,n){let s;const r=["to","replace","state","getProps"];let o=Le(t,r),c,a,{$$slots:i={},$$scope:l}=t,{to:u="#"}=t,{replace:p=!1}=t,{state:P={}}=t,{getProps:x=()=>({})}=t;const m=pt(Qt);ot(e,m,b=>n(13,c=b));const{base:L}=pt(Ct);ot(e,L,b=>n(14,a=b));const{navigate:N}=pt(Ge),A=ln();let j,H,q,B;const g=b=>{if(A("click",b),vn(b)){b.preventDefault();const O=c.pathname===j||p;N(j,{state:P,replace:O})}};return e.$$set=b=>{t=ct(ct({},t),Vt(b)),n(6,o=Le(t,r)),"to"in b&&n(7,u=b.to),"replace"in b&&n(8,p=b.replace),"state"in b&&n(9,P=b.state),"getProps"in b&&n(10,x=b.getProps),"$$scope"in b&&n(15,l=b.$$scope)},e.$$.update=()=>{e.$$.dirty&16512&&n(0,j=u==="/"?a.uri:wn(u,a.uri)),e.$$.dirty&8193&&n(11,H=c.pathname.startsWith(j)),e.$$.dirty&8193&&n(12,q=j===c.pathname),e.$$.dirty&4096&&n(2,s=q?"page":void 0),n(1,B=x({location:c,href:j,isPartiallyCurrent:H,isCurrent:q,existingProps:o}))},[j,B,s,m,L,g,o,u,p,P,x,H,q,c,a,l,i]}class I extends V{constructor(t){super(),K(this,t,xn,yn,D,{to:7,replace:8,state:9,getProps:10})}}const Pn=e=>({params:e&4}),ze=e=>({params:e[2]});function De(e){let t,n,s,r;const o=[Cn,Tn],c=[];function a(i,l){return i[0]?0:1}return t=a(e),n=c[t]=o[t](e),{c(){n.c(),s=Mt()},m(i,l){c[t].m(i,l),y(i,s,l),r=!0},p(i,l){let u=t;t=a(i),t===u?c[t].p(i,l):(Et(),v(c[u],1,1,()=>{c[u]=null}),St(),n=c[t],n?n.p(i,l):(n=c[t]=o[t](i),n.c()),$(n,1),n.m(s.parentNode,s))},i(i){r||($(n),r=!0)},o(i){v(n),r=!1},d(i){c[t].d(i),i&&k(s)}}}function Tn(e){let t;const n=e[8].default,s=Xt(n,e,e[7],ze);return{c(){s&&s.c()},m(r,o){s&&s.m(r,o),t=!0},p(r,o){s&&s.p&&(!t||o&132)&&ee(s,n,r,r[7],t?te(n,r[7],o,Pn):ne(r[7]),ze)},i(r){t||($(s,r),t=!0)},o(r){v(s,r),t=!1},d(r){s&&s.d(r)}}}function Cn(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:Sn,then:En,catch:Mn,value:12,blocks:[,,,]};return He(n=e[0],r),{c(){t=Mt(),r.block.c()},m(o,c){y(o,t,c),r.block.m(o,r.anchor=c),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(o,c){e=o,r.ctx=e,c&1&&n!==(n=e[0])&&He(n,r)||dn(r,e,c)},i(o){s||($(r.block),s=!0)},o(o){for(let c=0;c<3;c+=1){const a=r.blocks[c];v(a)}s=!1},d(o){o&&k(t),r.block.d(o),r.token=null,r=null}}}function Mn(e){return{c:_,m:_,p:_,i:_,o:_,d:_}}function En(e){var a;let t,n,s;const r=[e[2],e[3]];var o=((a=e[12])==null?void 0:a.default)||e[12];function c(i){let l={};for(let u=0;u<r.length;u+=1)l=ct(l,r[u]);return{props:l}}return o&&(t=Oe(o,c())),{c(){t&&S(t.$$.fragment),n=Mt()},m(i,l){t&&C(t,i,l),y(i,n,l),s=!0},p(i,l){var p;const u=l&12?Ve(r,[l&4&&Ie(i[2]),l&8&&Ie(i[3])]):{};if(l&1&&o!==(o=((p=i[12])==null?void 0:p.default)||i[12])){if(t){Et();const P=t;v(P.$$.fragment,1,0,()=>{M(P,1)}),St()}o?(t=Oe(o,c()),S(t.$$.fragment),$(t.$$.fragment,1),C(t,n.parentNode,n)):t=null}else o&&t.$set(u)},i(i){s||(t&&$(t.$$.fragment,i),s=!0)},o(i){t&&v(t.$$.fragment,i),s=!1},d(i){i&&k(n),t&&M(t,i)}}}function Sn(e){return{c:_,m:_,p:_,i:_,o:_,d:_}}function Ln(e){let t,n,s=e[1]&&e[1].route===e[5]&&De(e);return{c(){s&&s.c(),t=Mt()},m(r,o){s&&s.m(r,o),y(r,t,o),n=!0},p(r,[o]){r[1]&&r[1].route===r[5]?s?(s.p(r,o),o&2&&$(s,1)):(s=De(r),s.c(),$(s,1),s.m(t.parentNode,t)):s&&(Et(),v(s,1,1,()=>{s=null}),St())},i(r){n||($(s),n=!0)},o(r){v(s),n=!1},d(r){s&&s.d(r),r&&k(t)}}}function Nn(e,t,n){let s,{$$slots:r={},$$scope:o}=t,{path:c=""}=t,{component:a=null}=t,i={},l={};const{registerRoute:u,unregisterRoute:p,activeRoute:P}=pt(Ct);ot(e,P,m=>n(1,s=m));const x={path:c,default:c===""};return u(x),on(()=>{p(x)}),e.$$set=m=>{n(11,t=ct(ct({},t),Vt(m))),"path"in m&&n(6,c=m.path),"component"in m&&n(0,a=m.component),"$$scope"in m&&n(7,o=m.$$scope)},e.$$.update=()=>{if(s&&s.route===x){n(2,i=s.params);const{component:m,path:L,...N}=t;n(3,l=N),m&&(m.toString().startsWith("class ")?n(0,a=m):n(0,a=m())),Qe()&&(window==null||window.scrollTo(0,0))}},t=Vt(t),[a,s,i,l,P,x,c,o,r]}class Ft extends V{constructor(t){super(),K(this,t,Nn,Ln,D,{path:6,component:0})}}const ft=[];function On(e,t){return{subscribe:$t(e,t).subscribe}}function $t(e,t=_){let n;const s=new Set;function r(a){if(D(e,a)&&(e=a,n)){const i=!ft.length;for(const l of s)l[1](),ft.push(l,e);if(i){for(let l=0;l<ft.length;l+=2)ft[l][0](ft[l+1]);ft.length=0}}}function o(a){r(a(e))}function c(a,i=_){const l=[a,i];return s.add(l),s.size===1&&(n=t(r)||_),a(e),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:r,update:o,subscribe:c}}function jn(e,t,n){const s=!Array.isArray(e),r=s?[e]:e,o=t.length<2;return On(n,c=>{let a=!1;const i=[];let l=0,u=_;const p=()=>{if(l)return;u();const x=t(s?i[0]:i,c);o?c(x):u=Jt(x)?x:_},P=r.map((x,m)=>Fe(x,L=>{i[m]=L,l&=~(1<<m),a&&p()},()=>{l|=1<<m}));return a=!0,p(),function(){ht(P),u(),a=!1}})}const Kt=e=>({...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}),Rn=e=>{const t=[];let n=Kt(e);return{get location(){return n},listen(s){t.push(s);const r=()=>{n=Kt(e),s({location:n,action:"POP"})};return e.addEventListener("popstate",r),()=>{e.removeEventListener("popstate",r);const o=t.indexOf(s);t.splice(o,1)}},navigate(s,{state:r,replace:o=!1}={}){r={...r,key:Date.now()+""};try{o?e.history.replaceState(r,"",s):e.history.pushState(r,"",s)}catch{e.location[o?"replace":"assign"](s)}n=Kt(e),t.forEach(c=>c({location:n,action:"PUSH"})),document.activeElement.blur()}}},Hn=(e="/")=>{let t=0;const n=[{pathname:e,search:""}],s=[];return{get location(){return n[t]},addEventListener(r,o){},removeEventListener(r,o){},history:{get entries(){return n},get index(){return t},get state(){return s[t]},pushState(r,o,c){const[a,i=""]=c.split("?");t++,n.push({pathname:a,search:i}),s.push(r)},replaceState(r,o,c){const[a,i=""]=c.split("?");n[t]={pathname:a,search:i},s[t]=r}}}},In=Rn(Qe()?window:Hn()),An=e=>({route:e&2,location:e&1}),Ue=e=>({route:e[1]&&e[1].uri,location:e[0]});function Bn(e){let t;const n=e[12].default,s=Xt(n,e,e[11],Ue);return{c(){s&&s.c()},m(r,o){s&&s.m(r,o),t=!0},p(r,[o]){s&&s.p&&(!t||o&2051)&&ee(s,n,r,r[11],t?te(n,r[11],o,An):ne(r[11]),Ue)},i(r){t||($(s,r),t=!0)},o(r){v(s,r),t=!1},d(r){s&&s.d(r)}}}function qn(e,t,n){let s,r,o,c,{$$slots:a={},$$scope:i}=t,{basepath:l="/"}=t,{url:u=null}=t,{history:p=In}=t;zt(Ge,p);const P=pt(Qt),x=pt(Ct),m=$t([]);ot(e,m,g=>n(9,r=g));const L=$t(null);ot(e,L,g=>n(1,c=g));let N=!1;const A=P||$t(u?{pathname:u}:p.location);ot(e,A,g=>n(0,s=g));const j=x?x.routerBase:$t({path:l,uri:l});ot(e,j,g=>n(10,o=g));const H=jn([j,L],([g,b])=>{if(!b)return g;const{path:O}=g,{route:Z,uri:U}=b;return{path:Z.default?O:Z.path.replace(/\*.*$/,""),uri:U}}),q=g=>{const{path:b}=o;let{path:O}=g;if(g._path=O,g.path=qe(b,O),typeof window>"u"){if(N)return;const Z=Be([g],s.pathname);Z&&(L.set(Z),N=!0)}else m.update(Z=>[...Z,g])},B=g=>{m.update(b=>b.filter(O=>O!==g))};return P||(rn(()=>p.listen(b=>{A.set(b.location)})),zt(Qt,A)),zt(Ct,{activeRoute:L,base:j,routerBase:H,registerRoute:q,unregisterRoute:B}),e.$$set=g=>{"basepath"in g&&n(6,l=g.basepath),"url"in g&&n(7,u=g.url),"history"in g&&n(8,p=g.history),"$$scope"in g&&n(11,i=g.$$scope)},e.$$.update=()=>{if(e.$$.dirty&1024){const{path:g}=o;m.update(b=>b.map(O=>Object.assign(O,{path:qe(g,O._path)})))}if(e.$$.dirty&513){const g=Be(r,s.pathname);L.set(g)}},[s,c,m,L,A,j,l,u,p,r,o,i,a]}class Zn extends V{constructor(t){super(),K(this,t,qn,Bn,D,{basepath:6,url:7,history:8})}}function zn(e){let t;return{c(){t=h("main"),t.innerHTML=`<div class="flex flex-wrap justify-end"><div class="w-full lg:flex-1"><article class="prose p-4"><h1>Productivity begins here</h1> 
                <p>Nocrastinate is a lightweight web app designed for everything to do with task management.
                    Most to-do list apps fall short in one way or another, so I decided to make my own.
                    It is designed to be as simple as possible, while still being powerful enough to be useful.</p></article></div> 
        <div class="w-full lg:w-auto lg:mr-4 mockup-browser border bg-base-300 mb-4 lg:mb-0"><div class="mockup-browser-toolbar"><div class="input">https://42willow.github.io/nocrastinate</div></div> 
          <div class="flex justify-center px-4 py-16 bg-base-100">Works in any browser, even mobile!</div></div> 

        
        <div class="alert shadow-lg mt-4 bg-base-100 mx-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 
            <div><h3 class="font-bold">In Beta</h3> 
                <div class="text-xs">Looking for contributors</div></div> 
            <a class="btn btn-sm" href="https://github.com/42willow/nocrastinate">Contribute</a></div></div> 

    <div class="hero py-2"><div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left pl-4"><h2 class="text-3xl font-bold">Create a profile now!</h2> 
            <p class="py-6">Create a local profile which is stored in a little cookie 🍪, you can always switch profiles later - and you can have as many as you want!<br/><br/>It is recommended to install the PWA for the best experience.</p></div> 
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><div class="card-body"><div class="form-control"><label class="label" for="username-input"><span class="label-text">Username</span> 
                  <span class="label-text-alt text-red-300">*required</span></label> 
                <input id="username-input" type="text" placeholder="username" class="input input-bordered"/> 
                <label class="label" for="pfp-input"><span class="label-text">Upload a profile picture</span></label> 
                <input if="pfp-input" type="file" class="file-input file-input-bordered w-full max-w-xs"/></div> 
              <div class="form-control mt-6"><button class="btn btn-primary">Create profile</button></div> 
              <div class="alert alert-warning"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 
                <span>Beta, previous data may be lost</span></div></div></div></div></div> 

    <h2 class="text-3xl font-bold ml-4">Running locally</h2> 
    <div class="mockup-code m-4"><pre data-prefix="&gt;" class="text-warning"><code>install git</code></pre> 
        <pre data-prefix="&gt;" class="text-warning"><code>install nodejs</code></pre> 
        <pre data-prefix="$"><code>git clone https://github.com/42Willow/nocrastinate.git</code></pre>  
        <pre data-prefix="$"><code>npm install</code></pre> 
        <pre data-prefix="$"><code>npm run dev</code></pre> 
        <pre data-prefix="&gt;" class="text-success"><code>Done!</code></pre></div>`,T(t,"class","p-3 bg-base-200")},m(n,s){y(n,t,s)},p:_,i:_,o:_,d(n){n&&k(t)}}}class Dn extends V{constructor(t){super(),K(this,t,null,zn,D,{})}}function Un(e){let t;return{c(){t=h("div"),t.innerHTML=`<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="countdown font-mono text-5xl"><span id="counterMinutes" style="--value:15;"></span></span>
      minutes</div>  
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="countdown font-mono text-5xl"><span style="--value:10;"></span></span>
      seconds</div>`,T(t,"class","grid grid-flow-col gap-5 text-center auto-cols-max")},m(n,s){y(n,t,s)},p:_,i:_,o:_,d(n){n&&k(t)}}}function Wn(e){let t=10;return setInterval(()=>{t>0&&t--,document.getElementById("counterMinutes").style.setProperty("--value",t)},1e3),[]}class Fn extends V{constructor(t){super(),K(this,t,Wn,Un,D,{})}}function Kn(e){let t;return{c(){t=h("div"),t.innerHTML='<object type="image/svg+xml" data="404.svg" title="404 Not Found" class="max-h-screen"></object>',T(t,"class","flex items-center justify-center h-screen"),nn(t,"background-color","#262a37")},m(n,s){y(n,t,s)},p:_,i:_,o:_,d(n){n&&k(t)}}}class Vn extends V{constructor(t){super(),K(this,t,null,Kn,D,{})}}function Gn(e){let t;return{c(){t=R("Home")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function Yn(e){let t;return{c(){t=R("Tasks")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function Qn(e){let t;return{c(){t=R("Metrics")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function Jn(e){let t;return{c(){t=R("Time tracker")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function Xn(e){let t;return{c(){t=R("Circadian rhythm")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function ts(e){let t;return{c(){t=R("Nocrastinate")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function es(e){let t;return{c(){t=R("Home")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function ns(e){let t;return{c(){t=R("Tasks")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function ss(e){let t;return{c(){t=R("Metrics")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function rs(e){let t;return{c(){t=R("Pomodoro")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function os(e){let t;return{c(){t=R("Time tracker")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function ls(e){let t;return{c(){t=R("Circadian rhythm")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function cs(e){let t;return{c(){t=R("Profile")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function is(e){let t;return{c(){t=R("Settings")},m(n,s){y(n,t,s)},d(n){n&&k(t)}}}function as(e){let t,n;return{c(){t=R("Manage Profiles"),n=h("span"),n.textContent="Beta",T(n,"class","badge")},m(s,r){y(s,t,r),y(s,n,r)},p:_,d(s){s&&k(t),s&&k(n)}}}function us(e){let t,n,s,r,o,c,a,i,l,u,p,P,x,m,L,N,A,j,H,q,B,g,b,O,Z,U,Lt,kt,z,Nt,Y,re,Ot,Q,oe,jt,J,le,yt,_t,Rt,ce,G,Ht,X,ie,It,tt,ae,At,et,ue,it,xt,fe,at,bt,de,W,Bt,nt,pe,qt,st,me,Zt,rt,Pt;return i=new I({props:{to:"/nocrastinate/home",$$slots:{default:[Gn]},$$scope:{ctx:e}}}),p=new I({props:{to:"/nocrastinate/tasks",$$slots:{default:[Yn]},$$scope:{ctx:e}}}),m=new I({props:{to:"/nocrastinate/metrics",$$slots:{default:[Qn]},$$scope:{ctx:e}}}),B=new I({props:{to:"/nocrastinate/timetracker",$$slots:{default:[Jn]},$$scope:{ctx:e}}}),O=new I({props:{to:"/nocrastinate/circadian",$$slots:{default:[Xn]},$$scope:{ctx:e}}}),U=new I({props:{class:"btn btn-ghost normal-case text-xl",to:"/nocrastinate/",$$slots:{default:[ts]},$$scope:{ctx:e}}}),Y=new I({props:{to:"/nocrastinate/home",$$slots:{default:[es]},$$scope:{ctx:e}}}),Q=new I({props:{to:"/nocrastinate/tasks",$$slots:{default:[ns]},$$scope:{ctx:e}}}),J=new I({props:{to:"/nocrastinate/metrics",$$slots:{default:[ss]},$$scope:{ctx:e}}}),X=new I({props:{to:"/nocrastinate/pomodoro",$$slots:{default:[rs]},$$scope:{ctx:e}}}),tt=new I({props:{to:"/nocrastinate/timetracker",$$slots:{default:[os]},$$scope:{ctx:e}}}),et=new I({props:{to:"/nocrastinate/circadian",$$slots:{default:[ls]},$$scope:{ctx:e}}}),nt=new I({props:{to:"/nocrastinate/profile",$$slots:{default:[cs]},$$scope:{ctx:e}}}),st=new I({props:{to:"/nocrastinate/profile",$$slots:{default:[is]},$$scope:{ctx:e}}}),rt=new I({props:{to:"/nocrastinate/profile",$$slots:{default:[as]},$$scope:{ctx:e}}}),{c(){t=h("div"),n=h("div"),s=h("div"),r=h("label"),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>',o=E(),c=h("ul"),a=h("li"),S(i.$$.fragment),l=E(),u=h("li"),S(p.$$.fragment),P=E(),x=h("li"),S(m.$$.fragment),L=E(),N=h("li"),A=h("div"),A.textContent="Strategies",j=E(),H=h("ul"),q=h("li"),S(B.$$.fragment),g=E(),b=h("li"),S(O.$$.fragment),Z=E(),S(U.$$.fragment),Lt=E(),kt=h("div"),z=h("ul"),Nt=h("li"),S(Y.$$.fragment),re=E(),Ot=h("li"),S(Q.$$.fragment),oe=E(),jt=h("li"),S(J.$$.fragment),le=E(),yt=h("li"),_t=h("details"),Rt=h("summary"),Rt.textContent="Strategies",ce=E(),G=h("ul"),Ht=h("li"),S(X.$$.fragment),ie=E(),It=h("li"),S(tt.$$.fragment),ae=E(),At=h("li"),S(et.$$.fragment),ue=E(),it=h("div"),xt=h("label"),xt.innerHTML=`<input type="checkbox"/> 
        
        
        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M366-232q-15 10-30.5 1T320-258v-450q0-18 15.5-27t30.5 1l354 226q14 9 14 25t-14 25L366-232Zm14-251Zm0 171 269-171-269-171v342Z"></path></svg> 
        
        
        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M585-200q-24.75 0-42.375-17.625T525-260v-440q0-24.75 17.625-42.375T585-760h115q24.75 0 42.375 17.625T760-700v440q0 24.75-17.625 42.375T700-200H585Zm-325 0q-24.75 0-42.375-17.625T200-260v-440q0-24.75 17.625-42.375T260-760h115q24.75 0 42.375 17.625T435-700v440q0 24.75-17.625 42.375T375-200H260Zm325-60h115v-440H585v440Zm-325 0h115v-440H260v440Zm0-440v440-440Zm325 0v440-440Z"></path></svg>`,fe=E(),at=h("div"),bt=h("label"),bt.innerHTML='<div class="w-10 rounded-full"><img src="guest.png" alt="Profile Picture"/></div>',de=E(),W=h("ul"),Bt=h("li"),S(nt.$$.fragment),pe=E(),qt=h("li"),S(st.$$.fragment),me=E(),Zt=h("li"),S(rt.$$.fragment),T(r,"tabindex","0"),T(r,"class","btn btn-ghost lg:hidden"),T(H,"class","p-2"),T(c,"tabindex","0"),T(c,"class","menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"),T(s,"class","dropdown"),T(n,"class","navbar-start"),T(G,"class","p-2 z-10"),T(yt,"tabindex","0"),T(z,"class","menu menu-horizontal px-1"),T(kt,"class","navbar-center hidden lg:flex"),T(xt,"class","btn btn-circle swap swap-rotate"),T(bt,"tabindex","0"),T(bt,"class","btn btn-ghost btn-circle avatar"),T(W,"tabindex","0"),T(W,"class","mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"),T(at,"class","dropdown dropdown-end"),T(it,"class","navbar-end"),T(t,"class","navbar bg-base-100")},m(f,w){y(f,t,w),d(t,n),d(n,s),d(s,r),d(s,o),d(s,c),d(c,a),C(i,a,null),d(c,l),d(c,u),C(p,u,null),d(c,P),d(c,x),C(m,x,null),d(c,L),d(c,N),d(N,A),d(N,j),d(N,H),d(H,q),C(B,q,null),d(H,g),d(H,b),C(O,b,null),d(n,Z),C(U,n,null),d(t,Lt),d(t,kt),d(kt,z),d(z,Nt),C(Y,Nt,null),d(z,re),d(z,Ot),C(Q,Ot,null),d(z,oe),d(z,jt),C(J,jt,null),d(z,le),d(z,yt),d(yt,_t),d(_t,Rt),d(_t,ce),d(_t,G),d(G,Ht),C(X,Ht,null),d(G,ie),d(G,It),C(tt,It,null),d(G,ae),d(G,At),C(et,At,null),d(t,ue),d(t,it),d(it,xt),d(it,fe),d(it,at),d(at,bt),d(at,de),d(at,W),d(W,Bt),C(nt,Bt,null),d(W,pe),d(W,qt),C(st,qt,null),d(W,me),d(W,Zt),C(rt,Zt,null),Pt=!0},p(f,[w]){const he={};w&1&&(he.$$scope={dirty:w,ctx:f}),i.$set(he);const ge={};w&1&&(ge.$$scope={dirty:w,ctx:f}),p.$set(ge);const _e={};w&1&&(_e.$$scope={dirty:w,ctx:f}),m.$set(_e);const be={};w&1&&(be.$$scope={dirty:w,ctx:f}),B.$set(be);const $e={};w&1&&($e.$$scope={dirty:w,ctx:f}),O.$set($e);const we={};w&1&&(we.$$scope={dirty:w,ctx:f}),U.$set(we);const ve={};w&1&&(ve.$$scope={dirty:w,ctx:f}),Y.$set(ve);const ke={};w&1&&(ke.$$scope={dirty:w,ctx:f}),Q.$set(ke);const ye={};w&1&&(ye.$$scope={dirty:w,ctx:f}),J.$set(ye);const xe={};w&1&&(xe.$$scope={dirty:w,ctx:f}),X.$set(xe);const Pe={};w&1&&(Pe.$$scope={dirty:w,ctx:f}),tt.$set(Pe);const Te={};w&1&&(Te.$$scope={dirty:w,ctx:f}),et.$set(Te);const Ce={};w&1&&(Ce.$$scope={dirty:w,ctx:f}),nt.$set(Ce);const Me={};w&1&&(Me.$$scope={dirty:w,ctx:f}),st.$set(Me);const Ee={};w&1&&(Ee.$$scope={dirty:w,ctx:f}),rt.$set(Ee)},i(f){Pt||($(i.$$.fragment,f),$(p.$$.fragment,f),$(m.$$.fragment,f),$(B.$$.fragment,f),$(O.$$.fragment,f),$(U.$$.fragment,f),$(Y.$$.fragment,f),$(Q.$$.fragment,f),$(J.$$.fragment,f),$(X.$$.fragment,f),$(tt.$$.fragment,f),$(et.$$.fragment,f),$(nt.$$.fragment,f),$(st.$$.fragment,f),$(rt.$$.fragment,f),Pt=!0)},o(f){v(i.$$.fragment,f),v(p.$$.fragment,f),v(m.$$.fragment,f),v(B.$$.fragment,f),v(O.$$.fragment,f),v(U.$$.fragment,f),v(Y.$$.fragment,f),v(Q.$$.fragment,f),v(J.$$.fragment,f),v(X.$$.fragment,f),v(tt.$$.fragment,f),v(et.$$.fragment,f),v(nt.$$.fragment,f),v(st.$$.fragment,f),v(rt.$$.fragment,f),Pt=!1},d(f){f&&k(t),M(i),M(p),M(m),M(B),M(O),M(U),M(Y),M(Q),M(J),M(X),M(tt),M(et),M(nt),M(st),M(rt)}}}class fs extends V{constructor(t){super(),K(this,t,null,us,D,{})}}function ds(e){let t;return{c(){t=h("footer"),t.innerHTML=`<div><img src="nocrastinate.svg" alt="Nocrastinate logo" width="200" height="200" class="mx-auto"/> 
      <p class="font-bold">Nocrastinate <br/>The better to do list app</p>  
      <a href="https://github.com/42willow/nocrastinate/blob/main/LICENSE" style="display: flex; align-items: center;"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-law mr-2"><path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z" fill="white"></path></svg> 
        <span style="color: white;">GPL-3.0 license</span></a> 
      <div class="grid grid-flow-col gap-4"><a href="https://github.com/42willow/nocrastinate"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a></div></div>`,T(t,"class","footer footer-center p-10 bg-primary text-primary-content")},m(n,s){y(n,t,s)},p:_,i:_,o:_,d(n){n&&k(t)}}}class ps extends V{constructor(t){super(),K(this,t,null,ds,D,{})}}function ms(e){let t,n,s,r,o,c,a,i;return t=new fs({}),s=new Ft({props:{path:"/nocrastinate/",component:Dn}}),o=new Ft({props:{path:"/nocrastinate/pomodoro",component:Fn}}),a=new Ft({props:{path:"*",component:Vn}}),{c(){S(t.$$.fragment),n=E(),S(s.$$.fragment),r=E(),S(o.$$.fragment),c=E(),S(a.$$.fragment)},m(l,u){C(t,l,u),y(l,n,u),C(s,l,u),y(l,r,u),C(o,l,u),y(l,c,u),C(a,l,u),i=!0},p:_,i(l){i||($(t.$$.fragment,l),$(s.$$.fragment,l),$(o.$$.fragment,l),$(a.$$.fragment,l),i=!0)},o(l){v(t.$$.fragment,l),v(s.$$.fragment,l),v(o.$$.fragment,l),v(a.$$.fragment,l),i=!1},d(l){M(t,l),l&&k(n),M(s,l),l&&k(r),M(o,l),l&&k(c),M(a,l)}}}function hs(e){let t,n,s,r,o;return n=new Zn({props:{$$slots:{default:[ms]},$$scope:{ctx:e}}}),r=new ps({}),{c(){t=h("main"),S(n.$$.fragment),s=E(),S(r.$$.fragment)},m(c,a){y(c,t,a),C(n,t,null),y(c,s,a),C(r,c,a),o=!0},p(c,[a]){const i={};a&1&&(i.$$scope={dirty:a,ctx:c}),n.$set(i)},i(c){o||($(n.$$.fragment,c),$(r.$$.fragment,c),o=!0)},o(c){v(n.$$.fragment,c),v(r.$$.fragment,c),o=!1},d(c){c&&k(t),M(n),c&&k(s),M(r,c)}}}class gs extends V{constructor(t){super(),K(this,t,null,hs,D,{})}}new gs({target:document.getElementById("app")});