(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),d.canUseDOM?t(u):n&&(u=n(u))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",c),d}}},"8ypT":function(e,t,n){},Exb3:function(e,t,n){},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},LH5s:function(e,t,n){e.exports={close:"close-module--close--DKMlp"}},Ocwo:function(e,t,n){e.exports={"card-holder":"styles-module--card-holder--IiH6P",cardHolder:"styles-module--card-holder--IiH6P",exhibition:"styles-module--exhibition--M3RBx",moreButton:"styles-module--moreButton--CcZkX",nirikshak:"styles-module--nirikshak--3FF1j",megatreopuz:"styles-module--megatreopuz--3Ph5S","opacity-transition":"styles-module--opacity-transition--12dVb",opacityTransition:"styles-module--opacity-transition--12dVb","opacity-enter":"styles-module--opacity-enter--3xWya",opacityEnter:"styles-module--opacity-enter--3xWya","default-dimension":"styles-module--default-dimension--22l5S",defaultDimension:"styles-module--default-dimension--22l5S","enter-card":"styles-module--enter-card--1dpZj",enterCard:"styles-module--enter-card--1dpZj","card-transition":"styles-module--card-transition--3bplo",cardTransition:"styles-module--card-transition--3bplo","label-background":"styles-module--label-background--1WyO4",labelBackground:"styles-module--label-background--1WyO4","label-image-background":"styles-module--label-image-background--2OeX8",labelImageBackground:"styles-module--label-image-background--2OeX8","label-card":"styles-module--label-card--1zBjj",labelCard:"styles-module--label-card--1zBjj",title:"styles-module--title--3E_dN",subtitle:"styles-module--subtitle--dslUF","expanded-card":"styles-module--expanded-card--1O5Ym",expandedCard:"styles-module--expanded-card--1O5Ym","inner-card":"styles-module--inner-card--2e56h",innerCard:"styles-module--inner-card--2e56h","project-list-wrapper":"styles-module--project-list-wrapper--38ub6",projectListWrapper:"styles-module--project-list-wrapper--38ub6","project-list":"styles-module--project-list--36kCM",projectList:"styles-module--project-list--36kCM","project-badge":"styles-module--project-badge--1cSX7",projectBadge:"styles-module--project-badge--1cSX7",disabled:"styles-module--disabled--1vI_a"}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),u=n("C/va"),l=r.RegExp,s=l,d=l.prototype,f=/a/g,p=/a/g,m=new l(f)!==f;if(n("nh4g")&&(!m||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,l(f)!=f||l(p)==p||"/a/i"!=l(f,"i")})))){l=function(e,t){var n=this instanceof l,r=c(e),o=void 0===t;return!n&&r&&e.constructor===l&&o?e:a(m?new s(r&&!o?e.source:e,t):s((r=e instanceof l)?e.source:e,r&&o?u.call(e):t),n?this:d,l)};for(var y=function(e){e in l||o(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},h=i(s),b=0;h.length>b;)y(h[b++]);d.constructor=l,l.prototype=d,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("8ypT"),n("Exb3"),n("91GP"),n("f3/d"),n("Ocwo")),i=n.n(o);n("LK8F");function c(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=c(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var u=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=c(e))&&(r&&(r+=" "),r+=t);return r},l=n("67mL"),s=n.n(l),d=n("vQe+"),f=n.n(d),p=function(){return a.a.createElement("article",{className:f.a.article},a.a.createElement("h3",null,"Megatreopuz"))},m=n("LH5s"),y=n.n(m);function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=Object(r.useRef)(!1);Object(r.useEffect)((function(){if(a.current)return t[0]();a.current=!0}),t[1])}function b(e,t){e&&(Math.abs(document.documentElement.scrollTop-e.offsetTop)>10?requestAnimationFrame((function(){return b(e,t)})):t())}var g=function(e){var t=e.current,n=e.updateState,o=e.expanded,c=e.setExpanded,l=Object(r.useState)(!1),s=l[0],d=l[1],f=Object(r.useState)(o),p=f[0],m=f[1],y=Object(r.useState)(t),g=y[0],v=y[1],E=Object(r.useRef)(null);Object(r.useEffect)((function(){if(null!==E.current){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&(d(!0),e.unobserve(E.current))}),{threshold:.8});return e.observe(E.current),function(){E.current&&(null==e||e.unobserve(E.current))}}}),[E.current]),h((function(){s?(d(!1),requestAnimationFrame((function(){return setTimeout((function(){d(!0),v(t)}),300)}))):v(t)}),[t]),h((function(){var e;null===(e=E.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}),requestAnimationFrame((function(){return b(E.current,(function(){o?(m(!0),setTimeout((function(){var e;null===(e=document.getElementById("project-details"))||void 0===e||e.scrollIntoView({behavior:"smooth"})}),1400)):setTimeout((function(){return m(!1)}),1400)}))}))}),[o]);var w=Object(r.useMemo)((function(){switch(g){case"Megatreopuz":return[i.a.megatreopuz,"Megatreopuz","A secure, scalable and powerful cryptic hunt platform"];case"Nirikshak":return[i.a.nirikshak,"Nirikshak","An autonomous REST API testing framework"]}}),[g]),O=w[0],C=w[1],j=w[2];return a.a.createElement("article",{id:"project-cards",ref:E,className:i.a.exhibition},a.a.createElement("div",{className:i.a.cardHolder},a.a.createElement("div",{className:u(i.a.defaultDimension,i.a.labelBackground,s&&!p&&i.a.enterCard,O)}),a.a.createElement("div",{className:u(i.a.defaultDimension,i.a.labelImageBackground,s&&!p&&i.a.enterCard,O)}),a.a.createElement("div",{className:u(i.a.defaultDimension,i.a.labelCard,O,o&&i.a.expandedCard)},a.a.createElement("div",{className:u(i.a.innerCard,i.a.defaultDimension)},a.a.createElement("h3",{className:u(i.a.title,i.a.opacityTransition,s&&i.a.opacityEnter)},C),a.a.createElement("h4",{className:u(i.a.subtitle,i.a.opacityTransition,s&&i.a.opacityEnter)},j),a.a.createElement("button",{onClick:function(){return c(!0)},className:u(i.a.moreButton,i.a.opacityTransition,s&&!p&&i.a.opacityEnter,O)},"Know More")))),a.a.createElement(T,{updateState:n,current:g}))},v=[{name:"Megatreopuz",logo:"/megatreopuz-logo.png",alt:"Megatreopuz"},{name:"Nirikshak",logo:"/nirikshak-logo.png",alt:"Nirikshak"}],T=function(e){var t=e.updateState,n=e.current;return a.a.createElement("div",{className:i.a.projectListWrapper},a.a.createElement("ol",{className:i.a.projectList},v.map((function(e){return a.a.createElement("li",{className:u(i.a.projectBadge,n==e.name&&i.a.disabled),key:e.name},a.a.createElement("button",{disabled:n==e.name,onClick:function(){return t(e.name)}},a.a.createElement("img",{src:e.logo,alt:e.alt+" logo"}),a.a.createElement("span",{className:s.a.hidden},e.name)))}))))},E=function(e){var t=e.onClick,n=e.visible;return a.a.createElement("button",{className:u(y.a.close,i.a.opacityTransition,n&&i.a.opacityEnter),onClick:t})},w=function(e){var t=Object(r.useState)(!1),n=t[0],o=t[1],i=Object(r.useState)(n),c=i[0],u=i[1];return h((function(){requestAnimationFrame((function(){return b(document.getElementById("project-cards"),(function(){return u(n)}))}))}),[n]),a.a.createElement("section",null,a.a.createElement(E,{visible:n,onClick:function(){return o(!1)}}),a.a.createElement(g,Object.assign({expanded:n,setExpanded:o},e)),a.a.createElement("div",{id:"project-details"},c&&a.a.createElement(p,null)))},O=n("qhky");t.default=function(){var e=Object(r.useState)("Megatreopuz"),t=e[0],n=e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(O.a,null,a.a.createElement("title",null,"Yash Mahalwal - Web Development Solutions")),a.a.createElement("div",{style:{height:"100vh"}}),a.a.createElement(w,{updateState:n,current:t}),a.a.createElement("div",{style:{height:"100vh"}}))}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,l,s=r(t),d=r(n);if(s&&d){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=d)return!1;var f=t instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==n.getTime();var m=t instanceof RegExp,y=n instanceof RegExp;if(m!=y)return!1;if(m&&y)return t.toString()==n.toString();var h=a(t);if((u=h.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,h[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(l=h[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ye}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,c=n("17x9"),u=n.n(c),l=n("8+s/"),s=n.n(l),d=n("bmMU"),f=n.n(d),p=n("q1tI"),m=n.n(p),y=n("MgzW"),h=n.n(y),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",O="href",C="http-equiv",j="innerHTML",A="itemprop",S="name",k="property",x="rel",I="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",R="encodeSpecialCharacters",D="onChangeClientState",q="titleTemplate",B=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),F=[T.NOSCRIPT,T.SCRIPT,T.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,T.TITLE),n=Q(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,N);return t||r||void 0},X=function(e){return Q(e,D)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===x&&"canonical"===e[n].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==j&&c!==w&&c!==A||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=h()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,d=e.title,f=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,a),ce(d,f);var p={baseTag:le(T.BASE,n),linkTags:le(T.LINK,o),metaTags:le(T.META,i),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},m={},y={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=p[e].oldTags)})),t&&t(),u(e,m,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=de(n,r),[m.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+_(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+_(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return de(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===j||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===j||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+_(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,d=void 0===s?"":s,f=e.titleAttributes;return{base:fe(T.BASE,t,r),bodyAttributes:fe(b,n,r),htmlAttributes:fe(g,a,r),link:fe(T.LINK,o,r),meta:fe(T.META,i,r),noscript:fe(T.NOSCRIPT,c,r),script:fe(T.SCRIPT,u,r),style:fe(T.STYLE,l,r),title:fe(T.TITLE,{title:d,titleAttributes:f},r)}},me=s()((function(e){return{baseTag:Z([O,P],e),bodyAttributes:J(b,e),defer:Q(e,M),encode:Q(e,R),htmlAttributes:J(g,e),linkTags:G(T.LINK,[x,O],e),metaTags:G(T.META,[S,E,C,k,A],e),noscriptTags:G(T.NOSCRIPT,[j],e),onChangeClientState:X(e),scriptTags:G(T.SCRIPT,[I,j],e),styleTags:G(T.STYLE,[w],e),title:V(e),titleAttributes:J(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),ye=(a=me,i=o=function(e){function t(){return K(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return W({},a,((t={})[r.type]=i,t.titleAttributes=W({},o),t));case T.BODY:return W({},a,{bodyAttributes:W({},o)});case T.HTML:return W({},a,{htmlAttributes:W({},o)})}return W({},a,((n={})[r.type]=W({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind}).call(this,n("yLpj"))},"vQe+":function(e,t,n){e.exports={article:"styles-module--article--2OmS5"}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-tsx-bb45f463b04b0579f05f.js.map