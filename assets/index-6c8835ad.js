(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(l){if(l.ep)return;l.ep=!0;const a=s(l);fetch(l.href,a)}})();function p(){}function N(e){return e()}function H(){return Object.create(null)}function _(e){e.forEach(N)}function Z(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function G(e){return Object.keys(e).length===0}function h(e,t,s){e.insertBefore(t,s||null)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function w(e){return document.createElement(e)}function U(e){return document.createTextNode(e)}function $(){return U(" ")}function x(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function W(e){return Array.from(e.childNodes)}let T;function b(e){T=e}const v=[],B=[];let g=[];const E=[],F=Promise.resolve();let M=!1;function K(){M||(M=!0,F.then(O))}function L(e){g.push(e)}const k=new Set;let m=0;function O(){if(m!==0)return;const e=T;do{try{for(;m<v.length;){const t=v[m];m++,b(t),D(t.$$)}}catch(t){throw v.length=0,m=0,t}for(b(null),v.length=0,m=0;B.length;)B.pop()();for(let t=0;t<g.length;t+=1){const s=g[t];k.has(s)||(k.add(s),s())}g.length=0}while(v.length);for(;E.length;)E.pop()();M=!1,k.clear(),b(e)}function D(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}function J(e){const t=[],s=[];g.forEach(i=>e.indexOf(i)===-1?t.push(i):s.push(i)),s.forEach(i=>i()),g=t}const y=new Set;let Q;function S(e,t){e&&e.i&&(y.delete(e),e.i(t))}function R(e,t,s,i){if(e&&e.o){if(y.has(e))return;y.add(e),Q.c.push(()=>{y.delete(e),i&&(s&&e.d(1),i())}),e.o(t)}else i&&i()}function X(e){e&&e.c()}function j(e,t,s,i){const{fragment:l,after_update:a}=e.$$;l&&l.m(t,s),i||L(()=>{const r=e.$$.on_mount.map(N).filter(Z);e.$$.on_destroy?e.$$.on_destroy.push(...r):_(r),e.$$.on_mount=[]}),a.forEach(L)}function A(e,t){const s=e.$$;s.fragment!==null&&(J(s.after_update),_(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(v.push(e),K(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(e,t,s,i,l,a,r,f=[-1]){const c=T;b(e);const n=e.$$={fragment:null,ctx:[],props:a,update:p,not_equal:l,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:H(),dirty:f,skip_bound:!1,root:t.target||c.$$.root};r&&r(n.root);let o=!1;if(n.ctx=s?s(e,t.props||{},(d,C,...P)=>{const q=P.length?P[0]:C;return n.ctx&&l(n.ctx[d],n.ctx[d]=q)&&(!n.skip_bound&&n.bound[d]&&n.bound[d](q),o&&Y(e,d)),C}):[],n.update(),o=!0,_(n.before_update),n.fragment=i?i(n.ctx):!1,t.target){if(t.hydrate){const d=W(t.target);n.fragment&&n.fragment.l(d),d.forEach(u)}else n.fragment&&n.fragment.c();t.intro&&S(e.$$.fragment),j(e,t.target,t.anchor,t.customElement),O()}b(c)}class V{$destroy(){A(this,1),this.$destroy=p}$on(t,s){if(!Z(s))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(s),()=>{const l=i.indexOf(s);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ee(e){let t;return{c(){t=w("main"),t.innerHTML=`<div class="flex flex-wrap justify-end"><div class="w-full lg:flex-1"><article class="prose p-4"><h1>Productivity begins here</h1> 
                <p>Nocrastinate is a lightweight web app designed for everything to do with task management.
                    Most to-do list apps fall short in one way or another, so I decided to make my own.
                    It is designed to be as simple as possible, while still being powerful enough to be useful.</p></article></div> 
        <div class="w-full lg:w-auto lg:mr-4 mockup-browser border bg-base-300 mb-4 lg:mb-0"><div class="mockup-browser-toolbar"><div class="input">https://42willow.github.io/nocrastinate</div></div> 
          <div class="flex justify-center px-4 py-16 bg-base-100">Works in any browser, even mobile!</div></div> 

        
    <div class="alert shadow-lg mt-4 bg-base-100 mx-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 
        <div><h3 class="font-bold">In Beta</h3> 
            <div class="text-xs">Looking for contributors</div></div> 
        <a class="btn btn-sm" href="https://github.com/42willow/nocrastinate">Contribute</a></div> 

    <div class="hero py-2"><div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left pl-4"><h2 class="text-3xl font-bold">Create a profile now!</h2> 
            <p class="py-6">Create a local profile which is stored in a little cookie 🍪, you can always switch profiles later - and you can have as many as you want!<br/><br/>It is recommended to install the PWA for the best experience.</p></div> 
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><div class="card-body"><div class="form-control"><label class="label" for="username-input"><span class="label-text">Username</span> 
                  <span class="label-text-alt text-red-300">*required</span></label> 
                <input id="username-input" type="text" placeholder="username" class="input input-bordered"/> 
                <label class="label" for="pfp-input"><span class="label-text">Upload a profile picture</span></label> 
                <input if="pfp-input" type="file" class="file-input file-input-bordered w-full max-w-xs"/></div> 
              <div class="form-control mt-6"><button class="btn btn-primary">Create profile</button></div> 
              <div class="alert alert-warning"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 
                <span>Beta, previous data may be lost</span></div></div></div></div></div></div>`,x(t,"class","p-3 bg-base-200")},m(s,i){h(s,t,i)},p,i:p,o:p,d(s){s&&u(t)}}}class te extends V{constructor(t){super(),z(this,t,null,ee,I,{})}}function se(e){let t,s,i,l,a,r,f,c;return i=new te({}),{c(){t=w("div"),t.innerHTML=`<div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label> 
            
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><li><a>Home</a></li> 
                
                <li><a>Metrics</a></li> 
                <li><a>Strategies</a> 
                    <ul class="p-2"><li><a>Pomodoro</a></li> 
                        
                        <li><a>Time tracker</a></li> 
                        
                        <li><a>Circadian rhythm</a></li></ul></li></ul></div> 
        
        <a class="btn btn-ghost normal-case text-xl" href="/">Nocrastinate</a></div> 
    <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><li><a>Home</a></li> 
            
            <li><a>Metrics</a></li> 
            
            <li tabindex="0"><details><summary>Strategies</summary> 
                    <ul class="p-2 z-10"><li><a>Pomodoro</a></li> 
                        
                        <li><a>Time tracker</a></li> 
                        
                        <li><a>Circadian rhythm</a></li></ul></details></li></ul></div> 
    <div class="navbar-end"><label class="btn btn-circle swap swap-rotate"><input type="checkbox"/> 
        
        
        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M366-232q-15 10-30.5 1T320-258v-450q0-18 15.5-27t30.5 1l354 226q14 9 14 25t-14 25L366-232Zm14-251Zm0 171 269-171-269-171v342Z"></path></svg> 
        
        
        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M585-200q-24.75 0-42.375-17.625T525-260v-440q0-24.75 17.625-42.375T585-760h115q24.75 0 42.375 17.625T760-700v440q0 24.75-17.625 42.375T700-200H585Zm-325 0q-24.75 0-42.375-17.625T200-260v-440q0-24.75 17.625-42.375T260-760h115q24.75 0 42.375 17.625T435-700v440q0 24.75-17.625 42.375T375-200H260Zm325-60h115v-440H585v440Zm-325 0h115v-440H260v440Zm0-440v440-440Zm325 0v440-440Z"></path></svg></label> 
      <div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img src="guest.png" alt="Profile Picture"/></div></label> 
        
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"><li><a>Profile</a></li> 
          
          <li><a>Settings</a></li> 
          
          <li><a>Manage Profiles<span class="badge">Beta</span></a></li></ul></div></div>`,s=$(),X(i.$$.fragment),l=$(),a=w("footer"),a.innerHTML=`<div><img src="nocrastinate.svg" alt="Nocrastinate logo" width="200" height="200" class="mx-auto"/> 
    <p class="font-bold">Nocrastinate <br/>The better to do list app</p>  
    <a href="https://github.com/42willow/nocrastinate/blob/main/LICENSE" style="display: flex; align-items: center;"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-law mr-2"><path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z" fill="white"></path></svg> 
      <span style="color: white;">GPL-3.0 license</span></a> 
    <div class="grid grid-flow-col gap-4"><a href="https://github.com/42willow/nocrastinate"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a></div></div>`,r=$(),f=w("div"),f.innerHTML=`<label for="my-drawer-3" class="drawer-overlay"></label>  
  <ul class="menu p-4 w-80 h-full bg-base-200"><li><a>Sidebar Item 1</a></li> 
    
    <li><a>Sidebar Item 2</a></li></ul>`,x(t,"class","navbar bg-base-100"),x(a,"class","footer footer-center p-10 bg-primary text-primary-content"),x(f,"class","drawer-side")},m(n,o){h(n,t,o),h(n,s,o),j(i,n,o),h(n,l,o),h(n,a,o),h(n,r,o),h(n,f,o),c=!0},p,i(n){c||(S(i.$$.fragment,n),c=!0)},o(n){R(i.$$.fragment,n),c=!1},d(n){n&&u(t),n&&u(s),A(i,n),n&&u(l),n&&u(a),n&&u(r),n&&u(f)}}}class ne extends V{constructor(t){super(),z(this,t,null,se,I,{})}}new ne({target:document.getElementById("app")});
