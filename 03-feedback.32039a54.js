!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o="Expected a function",i=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return i;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var o=l.test(e);return o||u.test(e)?f(e.slice(2),o?2:8):a.test(e)?i:+e}n=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),function(e,t,n){var i,r,a,l,u,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(o);function j(t){var n=i,o=r;return i=r=void 0,c=t,l=e.apply(o,n)}function S(e){var n=e-f,o=e-c;return void 0===f||n>=t||n<0||d&&o>=a}function h(){var e,n,o,i=p();if(S(i))return O(i);u=setTimeout(h,(e=i-f,n=i-c,o=t-e,d?g(o,a-n):o))}function O(e){return(u=void 0,m&&i)?j(e):(i=r=void 0,l)}function T(){var e,n=p(),o=S(n);if(i=arguments,r=this,f=n,o){if(void 0===u)return c=e=f,u=setTimeout(h,t),s?j(e):l;if(d)return u=setTimeout(h,t),j(f)}return void 0===u&&(u=setTimeout(h,t)),l}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=r=u=void 0},T.flush=function(){return void 0===u?l:O(p())},T}(e,t,{leading:i,maxWait:t,trailing:r})};let j=document.querySelector(".feedback-form"),S=document.querySelector('label [name="email"]'),h=document.querySelector('label [name="message"]'),O="feedback-form-state";console.log(S),console.log(h),j.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(){let e=S.value,t=h.value;localStorage.setItem(O,JSON.stringify({email:e,message:t}))},500)),function(){let e=JSON.parse(localStorage.getItem(O));e&&(S.value=e.email,h.value=e.message)}(),j.addEventListener("submit",e=>{e.preventDefault();let t=S.value,n=h.value;console.log(`Email: ${t} / Mesaj:${n}`),j.reset(),localStorage.removeItem(O)})}();
//# sourceMappingURL=03-feedback.32039a54.js.map
