(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{4651:function(n,r,e){"use strict";e.d(r,{Ee:function(){return f}});var i=e(6052),t=e(5031),s=e(7294),c=e(7375);function l(){return(l=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}).apply(this,arguments)}function a(n,r){if(null==n)return{};var e,i,t={},s=Object.keys(n);for(i=0;i<s.length;i++)e=s[i],r.indexOf(e)>=0||(t[e]=n[e]);return t}var o=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=s.forwardRef((function(n,r){var e=n.htmlWidth,i=n.htmlHeight,t=n.alt,c=a(n,o);return s.createElement("img",l({width:e,height:i,ref:r,alt:t},c))})),f=(0,i.Gp)((function(n,r){var e=n.fallbackSrc,o=n.fallback,f=n.src,h=n.srcSet,x=n.align,j=n.fit,g=n.loading,m=n.ignoreFallback,v=n.crossOrigin,p=a(n,u),b=null!=g||m||void 0===e&&void 0===o,k=function(n){var r=n.loading,e=n.src,i=n.srcSet,t=n.onLoad,l=n.onError,a=n.crossOrigin,o=n.sizes,u=n.ignoreFallback,d=(0,s.useState)("pending"),f=d[0],h=d[1];(0,s.useEffect)((function(){h(e?"loading":"pending")}),[e]);var x=(0,s.useRef)(),j=(0,s.useCallback)((function(){if(e){g();var n=new Image;n.src=e,a&&(n.crossOrigin=a),i&&(n.srcset=i),o&&(n.sizes=o),r&&(n.loading=r),n.onload=function(n){g(),h("loaded"),null==t||t(n)},n.onerror=function(n){g(),h("failed"),null==l||l(n)},x.current=n}}),[e,a,i,o,t,l,r]),g=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,c.Gw)((function(){if(!u)return"loading"===f&&j(),function(){g()}}),[f,j,u]),u?"loaded":f}(l({},n,{ignoreFallback:b})),w=l({ref:r,objectFit:j,objectPosition:x},b?p:(0,t.CE)(p,["onError","onLoad"]));return"loaded"!==k?o||s.createElement(i.m$.img,l({as:d,className:"chakra-image__placeholder",src:e},w)):s.createElement(i.m$.img,l({as:d,src:f,srcSet:h,crossOrigin:v,loading:g,className:"chakra-image"},w))}));t.Ts&&(f.displayName="Image")},7718:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/universe",function(){return e(7517)}])},944:function(n,r,e){"use strict";e.d(r,{P4:function(){return a},Et:function(){return o},Pg:function(){return u}});var i=e(5893),t=e(1664),s=e(5675),c=e(8527),l=e(917),a=(e(7294),function(n){var r=n.children,e=n.href,t=n.title,l=n.thumbnail;return(0,i.jsx)(c.xu,{w:"100%",align:"center",children:(0,i.jsxs)(c.fG,{cursor:"pointer",children:[(0,i.jsx)(s.default,{src:l,alt:t,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,i.jsx)(c.AB,{href:e,target:"_blank",children:(0,i.jsx)(c.xv,{mt:2,children:t})}),(0,i.jsx)(c.xv,{fontSize:14,children:r})]})})}),o=function(n){var r=n.children,e=n.id,l=n.title,a=n.thumbnail;return(0,i.jsx)(c.xu,{w:"100%",align:"center",children:(0,i.jsx)(t.default,{href:"/works/".concat(e),children:(0,i.jsxs)(c.fG,{cursor:"pointer",children:[(0,i.jsx)(s.default,{src:a,alt:l,className:"grid-item-thumbnail",placeholder:"blur"}),(0,i.jsx)(c.AB,{href:"/works/".concat(e),children:(0,i.jsx)(c.xv,{mt:2,fontSize:20,children:l})}),(0,i.jsx)(c.xv,{fontSize:14,children:r})]})})})},u=function(){return(0,i.jsx)(l.xB,{styles:"\n        .grid-item-thumbnail{\n            border-radius: 12px;\n        }\n    "})}},2857:function(n,r,e){"use strict";var i=e(5893),t=e(3319),s=e(9008),c=e(944),l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:20}};r.Z=function(n){var r=n.children,e=n.title;return(0,i.jsx)(t.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,i.jsxs)(i.Fragment,{children:[e&&(0,i.jsx)(s.default,{children:(0,i.jsxs)("title",{children:[e," - Saif Rahman"]})}),r,(0,i.jsx)(c.Pg,{})]})})}},3562:function(n,r,e){"use strict";function i(){var n,r,e=(n=["\ntext-align: justify ;\ntext-indent: 1em;\n"],r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}})));return i=function(){return e},e}var t=e(5934).Z.p(i());r.Z=t},7517:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return h}});var i=e(5893),t=e(8527),s=e(8485),c=e(1664),l=e(4651),a=function(n){var r=n.children;return(0,i.jsxs)(t.xu,{children:[(0,i.jsx)(c.default,{href:"/works",children:(0,i.jsx)(t.rU,{children:"Works"})}),(0,i.jsxs)("span",{children:[" ",(0,i.jsx)(s.XC,{})," "]}),(0,i.jsx)(t.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},o=function(n){var r=n.src,e=n.alt;return(0,i.jsx)(l.Ee,{borderRadius:"lg",w:"full",src:r,alt:e,mb:4})},u=function(n){var r=n.children;return(0,i.jsx)(t.Ct,{colorScheme:"green",mr:2,children:r})},d=e(3562),f=e(2857),h=function(){return(0,i.jsx)(f.Z,{title:"Universe",children:(0,i.jsxs)(t.W2,{children:[(0,i.jsxs)(a,{children:["Universe ",(0,i.jsx)(t.Ct,{children:"2021"})]}),(0,i.jsx)(d.Z,{children:"An animated portfolio using THREE js "}),(0,i.jsxs)(t.aV,{ml:4,my:4,children:[(0,i.jsxs)(t.HC,{children:[(0,i.jsx)(u,{children:"Website"}),(0,i.jsxs)(t.rU,{href:"https://universe-saif-rahman.vercel.app",children:["Universe",(0,i.jsx)(s.h0,{mx:"2px"})]})]}),(0,i.jsxs)(t.HC,{children:[(0,i.jsx)(u,{children:"Stack"}),(0,i.jsx)("span",{children:"JavaScript, THREE js, HTML, CSS"})]})]}),(0,i.jsx)(o,{src:"/images/works/universe1.png",alt:"Universe"}),(0,i.jsx)(o,{src:"/images/works/universe2.png",alt:"Universe"})]})})}}},function(n){n.O(0,[774,888,179],(function(){return r=7718,n(n.s=r);var r}));var r=n.O();_N_E=r}]);