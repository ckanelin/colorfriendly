(this.webpackJsonpcolorfriendly=this.webpackJsonpcolorfriendly||[]).push([[0],{33:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),o=n.n(i),r=n(19),c=n.n(r),l=n(20),s=n(21),d=n(8),u=n(26),b=n(24),j=(n(33),n(25)),m=n(61),h=n(62),p=n(63),y=n(23),g=n(22),O=n.n(g),x=n(60),F=n(64),f=n(58),C=function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(a.jsxs)(x.a,{children:[Object(a.jsx)(F.a,{placeholder:"Paste your image URL here",onChange:t}),Object(a.jsx)(x.a.Append,{children:Object(a.jsx)(f.a,{variant:"outline-secondary",onClick:n,children:"Let's Go"})})]})},S=n.p+"static/media/cat.65b6d8ea.jpg",v=function(e){var t=e.name;return e.isFriendly?Object(a.jsx)("div",{className:"mt-3 mb-3",children:Object(a.jsx)("button",{type:"button",class:"btn btn-outline-dark",children:t})}):Object(a.jsx)("div",{className:"mt-3 mb-3",children:Object(a.jsx)("button",{type:"button",class:"btn btn-danger",children:t})})},B=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).determineColorFriendly=function(t){console.log(t),t.map((function(t){var n=t.red,a=t.green,i=t.blue,o=.25*n,r=Math.abs(n-i),c=Math.abs(n-a),l=.5*Math.max(a,n),s=Math.abs(i-a),d=.5*Math.max(i,a);n>=100&&a<=o&&i<=o?(e.setState({redGreenFriendly:!1}),console.log("a")):r<=20&&a-r>=20&&(e.setState({redGreenFriendly:!1}),console.log("b")),c<=20&&i<=l?(e.setState({yellowBlueFriendly:!1}),console.log("c")):s<=20&&n<=d&&(e.setState({yellowBlueFriendly:!1}),console.log("d"))}))},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageURL:e.state.input}),e.setState({redGreenFriendly:!0}),e.setState({yellowBlueFriendly:!0}),O()({method:"POST",url:"https://image-color-tag.p.rapidapi.com/cloudVision/imageAttributesDetection",headers:{"content-type":"application/json","x-rapidapi-host":"image-color-tag.p.rapidapi.com","x-rapidapi-key":"0e22180accmsh9a496466775e3d1p1b5633jsne17fc2e367fa",accept:"application/json",useQueryString:!0},data:{source:e.state.imageURL,sourceType:"url"}}).then((function(t){var n=t.data.dominantColors;e.determineColorFriendly(n),e.setState({imageUploaded:!0})})).catch((function(e){console.log(e)}))},e.state={imageUploaded:!1,input:"",imageURL:S,redGreenFriendly:!0,yellowBlueFriendly:!0,dominantColors:[]},e.onInputChange=e.onInputChange.bind(Object(d.a)(e)),e.onButtonSubmit=e.onButtonSubmit.bind(Object(d.a)(e)),e.determineColorFriendly=e.determineColorFriendly.bind(Object(d.a)(e)),e}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(m.a,{children:[Object(a.jsxs)("h1",{className:"text-center color-title",children:[" ",Object(a.jsx)("i",{className:"fas fa-eye"})," ColorFriendly"]}),Object(a.jsx)(h.a,{className:"justify-content-md-center",children:Object(a.jsxs)(p.a,{xl:"6",children:[Object(a.jsx)(j.a,{className:"mb-4",children:Object(a.jsx)(y.a,{variant:"top",src:this.state.imageURL})}),Object(a.jsx)(C,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit})]})})]}),Object(a.jsxs)(m.a,{className:"text-center",children:[Object(a.jsx)(v,{name:"Red-Green Not Friendly",isFriendly:this.state.redGreenFriendly}),Object(a.jsx)(v,{name:"Yellow-Blue Not Friendly",isFriendly:this.state.yellowBlueFriendly})]})]})}}]),n}(i.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),o(e),r(e)}))};n(56);c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),N()}},[[57,1,2]]]);
//# sourceMappingURL=main.75116df6.chunk.js.map