(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3Qra":function(n,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return d})),r.d(t,"a",(function(){return l}));var e=r("rt45"),a=r("LIIV");function u(){var n=Object(e.a)(["\n  mutation($pid: ID, $amount: Int!, $shid: ID, $key: String!) {\n    updateShoppingCart(\n      where: { id: $shid }\n      data: {\n        productItems: {\n          upsert: {\n            where: { key: $key }\n            create: {\n              key: $key\n              product: { connect: { id: $pid } }\n              amount: $amount\n            }\n            update: { product: { connect: { id: $pid } }, amount: $amount }\n          }\n        }\n      }\n    ) {\n      id\n      productItems {\n        product {\n          name\n        }\n        amount\n      }\n    }\n  }\n"]);return u=function(){return n},n}function i(){var n=Object(e.a)(["\n  query($id: ID) {\n    productItem(where: { id: $id }) {\n      id\n      name\n      price\n      brand\n      unitType\n      description\n      amount\n      MenuDetail\n      category {\n        name\n      }\n    }\n  }\n"]);return i=function(){return n},n}function c(){var n=Object(e.a)(["\n  query($pName: String) {\n    productItems(where: { category: { name: $pName } }) {\n      id\n      name\n      price\n      brand\n      unitType\n      description\n      MenuDetail\n    }\n  }\n"]);return c=function(){return n},n}var o=Object(a.a)(c()),d=Object(a.a)(i()),l=Object(a.a)(u())},Wmmw:function(n,t,r){"use strict";r.r(t);var e=r("q1tI"),a=r.n(e),u=r("yJuO"),i=a.a.createElement;t.default=function(){return i(u.a,null)}},sEhV:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[cid]",function(){return r("Wmmw")}])},yJuO:function(n,t,r){"use strict";var e=r("rt45"),a=r("q1tI"),u=r.n(a),i=r("nOHt"),c=r("cJ3w"),o=r("5D9J"),d=r("bx4M"),l=u.a.createElement;function p(){var n=Object(e.a)(["\n  margin: 0;\n  width: 100%;\n  text-align: center;\n"]);return p=function(){return n},n}function f(){var n=Object(e.a)(["\n  height: 60px;\n  width: auto;\n  margin-right: 1rem;\n"]);return f=function(){return n},n}function m(){var n=Object(e.a)(["\n  cursor: pointer;\n  & .ant-card-body {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);\n  :hover {\n    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);\n  }\n"]);return m=function(){return n},n}var s=Object(o.a)(d.a)(m()),g=o.a.img(f()),b=o.a.h3(p()),v=function(n){var t=n.title;return l("a",{href:"/category/".concat(t)},l(s,null,l(g,{src:"/assets/logo-without-text.png",alt:"logo"}),l(b,null,t)))},h=["\u0e41\u0e1c\u0e48\u0e19\u0e22\u0e34\u0e1b\u0e0b\u0e31\u0e21","\u0e41\u0e1c\u0e48\u0e19\u0e14\u0e39\u0e14\u0e0b\u0e31\u0e1a\u0e40\u0e2a\u0e35\u0e22\u0e07","\u0e42\u0e04\u0e23\u0e07\u0e04\u0e23\u0e48\u0e32\u0e27\u0e1d\u0e49\u0e32\u0e40\u0e1e\u0e14\u0e32\u0e19\u0e41\u0e25\u0e30\u0e1c\u0e19\u0e31\u0e07\u0e22\u0e34\u0e1b\u0e0b\u0e31\u0e21","\u0e42\u0e04\u0e23\u0e07\u0e04\u0e23\u0e48\u0e32\u0e27\u0e41\u0e25\u0e30\u0e41\u0e1c\u0e48\u0e19\u0e1d\u0e49\u0e32\u0e40\u0e1e\u0e14\u0e32\u0e19\u0e17\u0e35\u0e1a\u0e32\u0e23\u0e4c","\u0e1b\u0e39\u0e19\u0e09\u0e32\u0e1a\u0e22\u0e34\u0e1b\u0e0b\u0e31\u0e21","\u0e0a\u0e48\u0e2d\u0e07\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e23\u0e39\u0e1b","\u0e2a\u0e40\u0e15\u0e1b\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e23\u0e39\u0e1b","\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c\u0e40\u0e2a\u0e23\u0e34\u0e21","\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e0a\u0e48\u0e32\u0e07"],w=u.a.createElement;function y(){var n=Object(e.a)(["\n  background: white;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 1rem;\n  background: transparent;\n"]);return y=function(){return n},n}function j(){var n=Object(e.a)(["\n  flex: 1;\n  > h1 {\n    text-align: center;\n  }\n"]);return j=function(){return n},n}var x=o.a.div(j()),O=o.a.div(y()),$=function(){return w(x,null,w("h1",null,"Catagories"),w(O,null,h.map((function(n){return w(v,{key:n,title:n})}))))},I=r("0AW0"),k=r("ttZb"),E=r("3Qra"),D=r("LvDl"),q=r.n(D),J=u.a.createElement;function _(){var n=Object(e.a)(["\n  text-align: center;\n  background: gray;\n  justify-self: center;\n  padding: 1rem 1.5rem;\n  width: 100%;\n"]);return _=function(){return n},n}function N(){var n=Object(e.a)(["\n  padding: 1rem 3.5rem;\n"]);return N=function(){return n},n}function T(){var n=Object(e.a)(["\n  padding: 2rem 4rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n"]);return T=function(){return n},n}function M(){var n=Object(e.a)(["\n  width: 100%;\n  min-height: 40vh;\n"]);return M=function(){return n},n}d.a.Meta;var L=o.a.div(M()),S=o.a.div(T()),V=o.a.img(N()),W=o.a.h2(_()),C=function(n){var t=n.category,r=void 0===t?"":t,e=Object(k.b)(E.b,{variables:{pName:r}}),a=e.data;if(e.loading)return J("div",null,"'Loading...'");var u=a.productItems;return console.log(a),J(L,null,J("h1",null,r),J(S,null,q.a.isEmpty(u)&&J(W,null,"\u0e44\u0e21\u0e48\u0e21\u0e35\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e43\u0e19\u0e02\u0e13\u0e30\u0e19\u0e35\u0e49"),u.map((function(n){return J("a",{href:"/product/".concat(n.id)},J(d.a,{hoverable:!0,style:{width:270,margin:"0.5rem"},cover:J(V,{alt:"example",src:"/assets/pd1.png"})},J("h4",null,n.name),J("h5",null,n.description),J("p",null,n.price," / ",n.unitType)))}))))};r.d(t,"a",(function(){return z}));var P=u.a.createElement;function Q(){var n=Object(e.a)(["\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);\n  height: 25rem;\n  border-radius: 5px;\n"]);return Q=function(){return n},n}function X(){var n=Object(e.a)(["\n  background-color: rgb(241, 241, 241);\n"]);return X=function(){return n},n}function A(){var n=Object(e.a)(["\n  height: 24rem;\n  width: 18rem;\n  margin-right: 3rem;\n"]);return A=function(){return n},n}function H(){var n=Object(e.a)(["\n  display: flex;\n  padding: 2rem 4rem;\n  margin-bottom: 5rem;\n"]);return H=function(){return n},n}var R=o.a.div(H()),Z=(o.a.div(A()),o.a.div(X())),z=(Object(o.a)(d.a)(Q()),function(){var n,t=Object(i.useRouter)();if(!t)return null;console.log(t.query);var r=null===t||void 0===t?void 0:null===(n=t.query)||void 0===n?void 0:n.cid;return P(Z,null,P(I.a,null),P(R,null,r?P(C,{category:r}):P($,null)),P(c.a,null))})}},[["sEhV",1,2,5,9,0,3,4,6,7]]]);