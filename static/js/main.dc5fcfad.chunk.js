(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(9),a=n.n(i),s=n(2),c=n(8),r=n(3),o=n(4),l=n(6),m=n(5),p=n(1),u=n.n(p),h=(n(14),n(15),n(0)),d=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={position:0},t.slideRight=function(){var e=t.state.position,n=t.props,i=n.step,a=n.infinite,s=n.frameSize,c=-(n.images.length-s);t.setState({position:e-i>c?e-i:c}),e===c&&a&&t.setState({position:0})},t.slideLeft=function(){var e=t.state.position,n=t.props,i=n.step,a=n.frameSize,s=n.images,c=n.infinite,r=s.length-a;t.setState({position:e+i<0?e+i:0}),0===e&&c&&t.setState({position:-r})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.frameSize,i=t.itemWidth,a=t.animationDuration,s=t.infinite,c=this.state.position,r=-(e.length-n),o=0===c&&!s,l=c===r&&!s;return Object(h.jsxs)("div",{className:"Carousel",style:{width:"".concat(i*n,"px"),transition:"".concat(a,"ms")},children:[Object(h.jsx)("ul",{className:"Carousel__list",children:e.map((function(t){return Object(h.jsx)("li",{style:{transform:"translateX(".concat(c*i,"px)"),transition:"".concat(a,"ms")},children:Object(h.jsx)("img",{src:t,alt:"".concat(e.indexOf(t)+1),width:i})},t)}))}),Object(h.jsxs)("div",{className:"Carousel__buttons",children:[Object(h.jsx)("button",{"data-cy":"prev",type:"button",className:"Carousel__button",disabled:o,onClick:this.slideLeft,children:"\u21e6"}),Object(h.jsx)("button",{"data-cy":"next",type:"button",className:"Carousel__button",disabled:l,onClick:this.slideRight,children:"\u21e8"})]})]})}}]),n}(p.Component),j=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],b=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.changeValue=function(e){t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(s.a)({},e.target.name,+e.target.value))}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.step,i=e.frameSize,a=e.itemWidth,s=e.animationDuration,c=e.infinite;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h1",{"data-cy":"title",className:"App__title",children:[" Carousel with ",j.length," images"]}),Object(h.jsx)(d,{images:j,step:n,frameSize:i,itemWidth:a,animationDuration:s,infinite:c}),Object(h.jsxs)("form",{className:"App__form",children:[Object(h.jsxs)("label",{htmlFor:"stepId",children:["Step:\xa0",Object(h.jsx)("input",{type:"number",name:"step",id:"stepId",min:1,step:1,max:j.length,value:n,onChange:this.changeValue})]}),Object(h.jsxs)("label",{htmlFor:"frameId",children:["FrameSize:\xa0",Object(h.jsx)("input",{type:"number",name:"frameSize",id:"frameId",min:1,step:1,max:j.length,value:i,onChange:this.changeValue})]}),Object(h.jsxs)("label",{htmlFor:"itemId",children:["ItemWidth:\xa0",Object(h.jsx)("input",{type:"number",name:"itemWidth",id:"itemId",min:30,step:10,max:300,value:a,onChange:this.changeValue})]}),Object(h.jsxs)("label",{htmlFor:"animationId",children:["AnimationDuration:\xa0",Object(h.jsx)("input",{type:"number",name:"animationDuration",id:"animationId",min:100,step:100,max:5e3,value:s,onChange:this.changeValue})]}),Object(h.jsxs)("label",{htmlFor:"infinite",children:["Infinite:\xa0",Object(h.jsx)("input",{type:"checkbox",id:"infinite",name:"infinite",onChange:function(e){t.setState({infinite:e.target.checked})}})]})]})]})}}]),n}(u.a.Component),g=b;a.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.dc5fcfad.chunk.js.map