(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",c),d}}},"8ypT":function(e,t,n){},AW9q:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var r=n("q1tI"),a=n.n(r);var o=n("i8i4"),i=n.n(o),c=!1,s=a.a.createContext(null),u=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[i.a.findDOMNode(this),r],o=a[0],s=a[1],u=this.getTimeouts(),l=r?u.appear:u.enter;!e&&!n||c?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,s),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,s)}))}))})))},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:i.a.findDOMNode(this);t&&!c?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:i.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],c=a[1];this.props.addEndListener(o,c)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(s.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},r}(a.a.Component);function l(){}u.contextType=s,u.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:l,onEntering:l,onEntered:l,onExit:l,onExiting:l,onExited:l},u.UNMOUNTED="unmounted",u.EXITED="exited",u.ENTERING="entering",u.ENTERED="entered",u.EXITING="exiting";var d=u;var p={transition:"opacity 300ms ease-in-out",opacity:0},f={entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},m=function(e){var t=e.visible,n=e.children,r=e.duration,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["visible","children","duration"]);return a.a.createElement(d,Object.assign({in:t,timeout:r},o),(function(e){return a.a.createElement("div",{style:Object.assign({},p,f[e])},n)}))};m.defaultProps={appear:!0,mountOnEnter:!0,unmountOnExit:!0,duration:300};t.a=m},Exb3:function(e,t,n){},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},LH5s:function(e,t,n){e.exports={holder:"close-module--holder--1MIoV",enterButton:"close-module--enterButton--1gX0r",exit:"close-module--exit--2EVH6",exitButton:"close-module--exitButton--IyOSK",wrapper:"close-module--wrapper--3p2Ku",button:"close-module--button--21aNU","svg-icon":"close-module--svg-icon--kQ_ag",svgIcon:"close-module--svg-icon--kQ_ag"}},Ocwo:function(e,t,n){e.exports={"project-section":"styles-module--project-section--oemnl",projectSection:"styles-module--project-section--oemnl","card-holder":"styles-module--card-holder--IiH6P",cardHolder:"styles-module--card-holder--IiH6P",exhibition:"styles-module--exhibition--M3RBx",moreButtonHolder:"styles-module--moreButtonHolder--3K2nd",moreButton:"styles-module--moreButton--CcZkX",nirikshak:"styles-module--nirikshak--3FF1j",megatreopuz:"styles-module--megatreopuz--3Ph5S","opacity-transition":"styles-module--opacity-transition--12dVb",opacityTransition:"styles-module--opacity-transition--12dVb","opacity-exit":"styles-module--opacity-exit--3mDNr",opacityExit:"styles-module--opacity-exit--3mDNr","default-dimension":"styles-module--default-dimension--22l5S",defaultDimension:"styles-module--default-dimension--22l5S","enter-card":"styles-module--enter-card--1dpZj",enterCard:"styles-module--enter-card--1dpZj","card-transition":"styles-module--card-transition--3bplo",cardTransition:"styles-module--card-transition--3bplo","label-background":"styles-module--label-background--1WyO4",labelBackground:"styles-module--label-background--1WyO4","label-image-background":"styles-module--label-image-background--2OeX8",labelImageBackground:"styles-module--label-image-background--2OeX8","label-card":"styles-module--label-card--1zBjj",labelCard:"styles-module--label-card--1zBjj",title:"styles-module--title--3E_dN",subtitle:"styles-module--subtitle--dslUF","expanded-card":"styles-module--expanded-card--1O5Ym",expandedCard:"styles-module--expanded-card--1O5Ym","inner-card":"styles-module--inner-card--2e56h",innerCard:"styles-module--inner-card--2e56h","project-list-wrapper":"styles-module--project-list-wrapper--38ub6",projectListWrapper:"styles-module--project-list-wrapper--38ub6","project-list":"styles-module--project-list--36kCM",projectList:"styles-module--project-list--36kCM","project-badge":"styles-module--project-badge--1cSX7",projectBadge:"styles-module--project-badge--1cSX7",loader:"styles-module--loader--77SaB",load8:"styles-module--load8--1yINh"}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),s=n("C/va"),u=r.RegExp,l=u,d=u.prototype,p=/a/g,f=/a/g,m=new u(p)!==p;if(n("nh4g")&&(!m||n("eeVq")((function(){return f[n("K0xU")("match")]=!1,u(p)!=p||u(f)==f||"/a/i"!=u(p,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(m?new l(r&&!o?e.source:e,t):l((r=e instanceof u)?e.source:e,r&&o?s.call(e):t),n?this:d,u)};for(var h=function(e){e in u||o(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},b=i(l),y=0;b.length>y;)h(b[y++]);d.constructor=u,u.prototype=d,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("8ypT"),n("Exb3"),n("f3/d"),n("Ocwo")),i=n.n(o),c=n("iuhU"),s=n("LH5s"),u=n.n(s);function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=Object(r.useRef)(!1);Object(r.useEffect)((function(){if(a.current)return t[0]();a.current=!0}),t[1])}var d=n("dtT/"),p=n("AW9q"),f=(n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn"),new Map);f.set("Megatreopuz",a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"s5k/"))}))),f.set("Nirikshak",a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"5v77"))})));var m=function(){return null},h=a.a.forwardRef((function(e,t){var n=e.onLoad,o=e.visible,i=e.current,s=t,u=a.a.useMemo((function(){return f.get(i)}),[i]);return a.a.createElement("div",{role:"region",id:"project-details",ref:s,className:Object(c.a)(!o&&"hidden")},u&&a.a.createElement(r.Suspense,{fallback:a.a.createElement(m,null)},a.a.createElement(u,{onLoad:n})))}));h.displayName="ProjectDescription";var b,y=h,v=[{name:"Megatreopuz",logo:"/megatreopuz-logo.png",alt:"Megatreopuz"},{name:"Nirikshak",logo:"/nirikshak-logo.png",alt:"Nirikshak"}],g=a.a.forwardRef((function(e,t){var n=e.current,o=e.updateState,s=e.expanded,u=e.expandCard,d=e.loading,f=t,m=Object(r.useState)(!1),h=m[0],y=m[1],g=Object(r.useState)(s),T=g[0],O=g[1],x=Object(r.useState)(n),w=x[0],j=x[1],S=Object(r.useRef)(null),C=Object(r.useState)(d),k=C[0],A=C[1],N=Object(r.useRef)(-1);Object(r.useEffect)((function(){if(null!==f.current)return f.current.addEventListener("focus",t,{capture:!0}),(b=new IntersectionObserver((function(e){var n=e[0];n&&n.isIntersecting&&t()}),{threshold:.8})).observe(f.current),e;function e(){var e,n;null===(e=f.current)||void 0===e||e.removeEventListener("focus",t),null===(n=b)||void 0===n||n.disconnect()}function t(){y(!0),e()}}),[f.current]),l((function(){d?N.current=window.setTimeout((function(){return A(!0)}),1500):(clearTimeout(N.current),A(!1))}),[d]);var I=T?300:100;l((function(){h?(y(!1),requestAnimationFrame((function(){return setTimeout((function(){var e;y(!0),j(n),null===(e=S.current)||void 0===e||e.focus({preventScroll:!0})}),300)}))):j(n)}),[n]),l((function(){s?O(!0):setTimeout((function(){return O(!1)}),1200)}),[s]);var L=Object(r.useMemo)((function(){switch(w){case"Megatreopuz":return[i.a.megatreopuz,"Megatreopuz","A secure, scalable and powerful cryptic hunt platform",1];case"Nirikshak":return[i.a.nirikshak,"Nirikshak","An autonomous REST API testing framework",,2]}}),[w]),P=L[0],M=L[1],R=L[2],D=L[3];return a.a.createElement("article",{ref:f,id:"project-cards",className:i.a.exhibition},a.a.createElement("div",{className:"hidden","aria-live":"polite","aria-atomic":!0},M,": Project ",D," of ",v.length),a.a.createElement("div",{className:i.a.cardHolder},a.a.createElement("div",{className:Object(c.a)(i.a.defaultDimension,i.a.labelBackground,h&&!T&&i.a.enterCard,P)}),a.a.createElement("div",{className:Object(c.a)(i.a.defaultDimension,i.a.labelImageBackground,h&&!T&&i.a.enterCard,P)}),a.a.createElement("div",{className:Object(c.a)(i.a.defaultDimension,i.a.labelCard,P,s&&i.a.expandedCard)},a.a.createElement("div",{ref:S,tabIndex:-1,className:Object(c.a)(i.a.innerCard,i.a.defaultDimension)},a.a.createElement(p.a,{unmountOnExit:!1,mountOnEnter:!1,duration:I,visible:h},a.a.createElement("h3",{className:Object(c.a)(i.a.title)},M),a.a.createElement("p",{className:Object(c.a)(i.a.subtitle)},R)),a.a.createElement("div",{className:i.a.moreButtonHolder,"aria-live":"polite"},a.a.createElement(p.a,{duration:I,visible:k},a.a.createElement("div",{role:"progressbar",className:Object(c.a)(i.a.loader,P)},a.a.createElement("span",{className:"hidden"},"Loading"))),a.a.createElement(p.a,{duration:I,visible:h&&!k&&!T},a.a.createElement("button",{disabled:d,"aria-controls":"project-details","aria-expanded":s,onClick:u,className:Object(c.a)(i.a.moreButton,P)},"Know More")))))),a.a.createElement(p.a,{duration:I,visible:!T},a.a.createElement(E,{disabled:d,updateState:o,current:w})))}));g.displayName="ProjectCards";var E=function(e){var t=e.updateState,n=e.current,r=e.disabled;return a.a.createElement("div",{className:i.a.projectListWrapper},a.a.createElement("ol",{className:i.a.projectList},v.map((function(e){return a.a.createElement("li",{className:Object(c.a)(i.a.projectBadge),key:e.name},a.a.createElement("button",{disabled:null!=r?r:n==e.name,onClick:function(){return t(e.name)}},a.a.createElement("img",{src:e.logo,alt:e.alt+" logo"}),a.a.createElement("span",{className:"hidden"},e.name)))}))))},T=function(e){var t=e.onClick,n=e.visible;return a.a.createElement("div",{className:Object(c.a)(u.a.holder)},a.a.createElement("div",{className:u.a.wrapper},a.a.createElement(p.a,{visible:n},a.a.createElement("button",{"aria-controls":"project-details","aria-expanded":n,className:Object(c.a)(u.a.button),onClick:t},a.a.createElement("svg",{className:u.a.svgIcon,viewBox:"0 0 20 20"},a.a.createElement("path",{fill:"none",d:"M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"}))," ",a.a.createElement("span",{className:"hidden"},"Close project details")))))},O=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o=Object(r.useState)(!1),c=o[0],s=o[1],u=Object(r.useState)(!1),l=u[0],p=u[1],f=Object(r.useState)("Megatreopuz"),m=f[0],h=f[1],b=Object(r.useRef)(null),v=Object(r.useRef)(null);return a.a.createElement("section",{className:i.a.projectSection},a.a.createElement("h2",{className:"hidden"},"Work"),a.a.createElement(g,{ref:b,loading:l,expanded:t,expandCard:function(){p(!0),s(!0)},current:m,updateState:h}),a.a.createElement(T,{visible:t,onClick:function(){var e;null===(e=b.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}),Object(d.a)(b.current,(function(){var e;n(!1),s(!1),null===(e=b.current)||void 0===e||e.focus({preventScroll:!0})}))}}),c&&a.a.createElement(y,{current:m,visible:t,ref:v,onLoad:function(){var e;null===(e=b.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}),Object(d.a)(b.current,(function(){p(!1),n(!0),setTimeout((function(){var e;null===(e=v.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}),Object(d.a)(v.current,(function(){var e;return null===(e=v.current)||void 0===e?void 0:e.focus({preventScroll:!0})}))}),1200)}))}}))},x=n("qhky"),w=n("ag7d"),j=n.n(w),S=function(){return a.a.createElement("section",{className:j.a.section})};t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("main",null,a.a.createElement(x.a,null,a.a.createElement("title",null,"Yash Mahalwal - Web Development Solutions")),a.a.createElement("h1",{className:"hidden"},"Yash Mahalwal - Web Development Solutions"),a.a.createElement("div",{style:{height:"100vh"}}),a.a.createElement(O,null),a.a.createElement(S,null)))}},ag7d:function(e,t,n){e.exports={section:"styles-module--section--2mjVx"}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,u,l=r(t),d=r(n);if(l&&d){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=d)return!1;var p=t instanceof Date,f=n instanceof Date;if(p!=f)return!1;if(p&&f)return t.getTime()==n.getTime();var m=t instanceof RegExp,h=n instanceof RegExp;if(m!=h)return!1;if(m&&h)return t.toString()==n.toString();var b=a(t);if((s=b.length)!==a(n).length)return!1;for(c=s;0!=c--;)if(!o.call(n,b[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(u=b[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"dtT/":function(e,t,n){"use strict";function r(e,t){if(e){var n=window.pageYOffset+e.getBoundingClientRect().top;Math.abs(document.documentElement.scrollTop-n)>10?requestAnimationFrame((function(){return r(e,t)})):t()}}n.d(t,"a",(function(){return r}))},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},iuhU:function(e,t,n){"use strict";n("LK8F");function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,c=n("17x9"),s=n.n(c),u=n("8+s/"),l=n.n(u),d=n("bmMU"),p=n.n(d),f=n("q1tI"),m=n.n(f),h=n("MgzW"),b=n.n(h),y="bodyAttributes",v="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(E).map((function(e){return E[e]})),"charset"),O="cssText",x="href",w="http-equiv",j="innerHTML",S="itemprop",C="name",k="property",A="rel",N="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",R="encodeSpecialCharacters",D="onChangeClientState",B="titleTemplate",q=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),H=[E.NOSCRIPT,E.SCRIPT,E.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},_=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,E.TITLE),n=Q(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},X=function(e){return Q(e,D)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===A&&"canonical"===e[n].toLowerCase()||s===A&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==j&&c!==O&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=b()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,d=e.title,p=e.titleAttributes;se(E.BODY,r),se(E.HTML,a),ce(d,p);var f={baseTag:ue(E.BASE,n),linkTags:ue(E.LINK,o),metaTags:ue(E.META,i),noscriptTags:ue(E.NOSCRIPT,c),scriptTags:ue(E.SCRIPT,u),styleTags:ue(E.STYLE,l)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(E.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=de(n,r),[m.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return de(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===j||n===O){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===j||e===O)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,d=void 0===l?"":l,p=e.titleAttributes;return{base:pe(E.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(v,a,r),link:pe(E.LINK,o,r),meta:pe(E.META,i,r),noscript:pe(E.NOSCRIPT,c,r),script:pe(E.SCRIPT,s,r),style:pe(E.STYLE,u,r),title:pe(E.TITLE,{title:d,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:J([x,I],e),bodyAttributes:G(y,e),defer:Q(e,M),encode:Q(e,R),htmlAttributes:G(v,e),linkTags:Z(E.LINK,[A,x],e),metaTags:Z(E.META,[C,T,w,k,S],e),noscriptTags:Z(E.NOSCRIPT,[j],e),onChangeClientState:X(e),scriptTags:Z(E.SCRIPT,[N,j],e),styleTags:Z(E.STYLE,[O],e),title:V(e),titleAttributes:G(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),fe)((function(){return null})),he=(a=me,i=o=function(e){function t(){return U(this,t),_(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return W({},a,((t={})[r.type]=i,t.titleAttributes=W({},o),t));case E.BODY:return W({},a,{bodyAttributes:W({},o)});case E.HTML:return W({},a,{htmlAttributes:W({},o)})}return W({},a,((n={})[r.type]=W({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},K(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-tsx-07702fe0de788730b245.js.map