(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4521:function(e,t,n){Promise.resolve().then(n.bind(n,3504))},3504:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),o=n(2265),s=n(345),c=n.n(s);function l(){let[e,t]=(0,o.useState)(null),n=new AbortController;async function s(){n.abort(),n=new AbortController;try{let e=n.signal,r=await fetch("https://type.fit/api/quotes",{signal:e}),o=await r.json(),s=Math.floor(Math.random()*o.length);t(o[s].text),console.log(s,o[s])}catch(e){console.log(e)}}return(0,o.useEffect)(()=>{},[]),(0,r.jsx)("main",{className:c().main,children:(0,r.jsxs)("div",{className:"container vh-100 d-flex justify-content-center align-items-center flex-column",children:[(0,r.jsxs)("h1",{children:["Random Generator ",String.fromCodePoint("0x1F606")]}),(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"quote text-center",children:[(0,r.jsx)("p",{className:"card-text",children:e}),(0,r.jsx)("button",{onClick:()=>s(),className:"btn btn-primary",children:"Get Quote!"})]})})})]})})}},345:function(){},622:function(e,t,n){"use strict";var r=n(2265),o=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,i={},a=null,u=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:c.current}}t.jsx=i,t.jsxs=i},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=4521)}),_N_E=e.O()}]);