(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/image1.01c3daa3.png"},37:function(e,t,a){e.exports=a.p+"static/media/video.53399bf1.mp4"},38:function(e,t,a){e.exports=a.p+"static/media/image2.f6895a96.png"},39:function(e,t,a){e.exports=a.p+"static/media/image3.7450b627.png"},40:function(e,t,a){e.exports=a.p+"static/media/im5.f2d9255a.png"},41:function(e,t,a){e.exports=a.p+"static/media/image4.bff31293.png"},44:function(e,t,a){e.exports=a(95)},49:function(e,t,a){},50:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),l=a.n(s),o=(a(49),a(1)),c=a(2),i=a(4),m=a(3),u=a(5),d=(a(50),a(37)),h=a.n(d),p=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("video",{className:"videoTag",autoPlay:!0,loop:!0,muted:!0},r.a.createElement("source",{src:h.a,type:"video/mp4"}))}}]),t}(n.Component),E=a(11),f=a.n(E),b=function(){return r.a.createElement(f.a,null,r.a.createElement(f.a.Speed,{ms:100}),r.a.createElement("h1",null,"Hello."),r.a.createElement(f.a.Backspace,{count:10}),r.a.createElement(f.a.Delay,{ms:500}),r.a.createElement("h1",null,"My name is Roksolana"))},v=a(7),g=a(21),y=g.a.ul({open:{x:"0%",delayChildren:400,staggerChildren:200},closed:{x:"-100%",delay:300}}),j=g.a.li({open:{y:0,opacity:1},closed:{y:20,opacity:0}}),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleMy=function(){e.setState({isOpen:!e.state.isOpen})},e.state={display:"block",zIndex:"2",doesi:!1,isOpen:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=!!this.state.isOpen||r.a.createElement("div",{className:"NavButton"},r.a.createElement("i",{className:"fas fa-bars",onClick:this.handleMy,style:{display:this.state.doesi?"none":"block"}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Nav",style:{zIndex:"2"}},e,r.a.createElement(y,{className:"NavBar",pose:this.state.isOpen?"open":"closed",onClick:this.handleMy},r.a.createElement(j,{className:"liBar",style:{listStyleType:"none"}},r.a.createElement(v.Link,{to:"home",spy:!0,smooth:!0,duration:1e3},"Main")),r.a.createElement(j,{className:"liBar"},r.a.createElement(v.Link,{to:"about",spy:!0,smooth:!0,duration:1e3},"Skills")),r.a.createElement(j,{className:"liBar"},r.a.createElement(v.Link,{to:"arrow",spy:!0,smooth:!0,duration:1e3},"Projects")),r.a.createElement(j,{className:"liBar"},r.a.createElement(v.Link,{to:"form",spy:!0,smooth:!0,duration:1e3},"Contact")))))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement("div",{className:"header-video"},r.a.createElement(p,null)),r.a.createElement("div",{className:"header-intro",style:{Zindex:"1"}},r.a.createElement("div",{className:"header-words"},r.a.createElement(b,null)),r.a.createElement(N,null)))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"About"},r.a.createElement("h3",{className:"pAbout"},"I am working in:"),r.a.createElement("div",{className:"myIcons"},r.a.createElement("div",{className:"theIcon"}," ",r.a.createElement("i",{className:"fab fa-react "})),r.a.createElement("div",{className:"theIcon"},"   ",r.a.createElement("i",{className:"fab fa-sass "})),r.a.createElement("div",{className:"theIcon"},"   ",r.a.createElement("i",{className:"fab fa-css3-alt "})),r.a.createElement("div",{className:"theIcon"},"  ",r.a.createElement("i",{className:"fab fa-html5 "})),r.a.createElement("div",{className:"theIcon"},"  ",r.a.createElement("i",{className:"fab fa-js "})),r.a.createElement("div",{className:"theIcon"},"  ",r.a.createElement("i",{className:"fab fa-git "}))),r.a.createElement("div",{className:"addInfo"},r.a.createElement("h3",null,"I am also deepening my Knowledge in Redux, Webpack. "),r.a.createElement("h3",null,"Eager to learn all the novelties in React (like hooks, new components and so on)  Basic knowledge of Node.js, Express, MongoDB. "),r.a.createElement("h3",null,"I have a good command of English as well as Polish ")))}}]),t}(n.Component),x=a(20),k=a.n(x),C=a(38),I=a.n(C),S=a(39),M=a.n(S),B=a(40),P=a.n(B),R=a(41),A=a.n(R),T=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"hoveredLink",style:{color:"white",display:"inline"}},r.a.createElement("a",{style:{textDecoration:"none",color:"white"},href:this.props.href},"See the code"))}}]),t}(n.Component);function F(e){return r.a.createElement("button",{className:"hoveredLink",style:{color:"white",display:"inline"}},r.a.createElement("a",{style:{textDecoration:"none",color:"white"},href:e.path},"See demo"))}var z=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={scrolled:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){window.scrollY>1450?e.setState({scrolled:!0}):e.setState({scrolled:!1}),console.log(window.scrollY)})}},{key:"render",value:function(){var e=this.state.scrolled?{opacity:1,transition:"5s"}:{opacity:0,transition:"5s"};return r.a.createElement("div",{className:"imageBlock"},r.a.createElement("div",{className:"seeImage",style:{backgroundImage:"url(".concat(this.props.name,")"),backgroundPosition:"center",backgroundSize:"cover",position:"relative"}}),r.a.createElement("div",{className:"imageRight",style:e},r.a.createElement("h1",null,this.props.title),r.a.createElement("p",null,this.props.info),r.a.createElement("div",{className:"myButtons"},r.a.createElement(T,{href:this.props.href}),this.props.path?r.a.createElement(F,{path:this.props.path}):null)))}}]),t}(n.Component),L=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={images:[{id:3,name:M.a,project:"Expenses",href:"https://github.com/Roxolana4lana/reduxexpenses",info:"The purpose of the project is to count expenses and incomes. Created with create-react-app,react-redux. Backend is not attached to the github, created in python. Fetch requests are done with help of axios, and as far as I used redux store, I easily could get data from all the expenses and incomes to count total and display that info in separate component - Portal. I have created second version of the project, using react hooks instead of redux,and  without usage of classes. Project is done in my react boilerplate (link to github: https://github.com/Roxolana4lana/Hooks2). For navigation purposes I\u2019ve used react-routing.Styling is created with sass, application is responsive. "},{id:1,name:k.a,project:"Recipe App",href:"https://github.com/Roxolana4lana/recpies",info:"Created in, backend is not attached to the github, created in python. Project displays information about recipes(you may add your own recipe or get different recipes from the public api food2fork). For navigation purposes I\u2019ve used react-routing.Styling is created with sass, application is responsive."},{id:2,name:I.a,project:"Weather App",href:"https://github.com/Roxolana4lana/weatherApp",info:"Created in react, backend is not attached to the github, created in python. Project displays information about the weather and the picture of the given city. I\u2019ve used a public api pixabay and openweatherapp. Styling is created with sass."},{id:5,name:P.a,project:"Image Gallery",href:"https://github.com/Roxolana4lana/imageGallery/tree/master/imageapp",info:"Website of the gallery,created in react. To show the location of the gallery the  component react-google-maps was used. Styling is created with sass. "},{id:4,name:A.a,project:"Portfolio",href:"https://github.com/Roxolana4lana/Portfolio/tree/master/portoapp",info:"Created with react. For navigation purposes I have used \u2018react-scroll\u2019. Styling is created with sass. "}],image:{id:1,name:k.a,project:"Wheather App",href:"https://github.com/Roxolana4lana/weatherApp"},index:0},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.images.map(function(e){return r.a.createElement("div",{className:"MyImage",key:e.id}," ",r.a.createElement(z,{href:e.href,name:e.name,title:e.project,path:e.path,info:e.info}))});return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,"My projects"),r.a.createElement("div",{className:"theImage"},e))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).scrollToTop=function(){v.animateScroll.scrollToTop()},a.state={img:L,scrolled:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){window.scrollY>20?e.setState({scrolled:!0}):e.setState({scrolled:!1})})}},{key:"render",value:function(){var e=this.state.scrolled?"arrow":"notArrow";return r.a.createElement("div",{className:"Bla"},r.a.createElement(L,null),r.a.createElement("div",{className:e},r.a.createElement("i",{onClick:this.scrollToTop,className:"fas fa-arrow-up"})))}}]),t}(n.Component),W=a(42),Y=a(43),Z=a.n(Y);function G(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("div",{className:"myContacts"},r.a.createElement("div",{className:"contactInfo"},r.a.createElement("a",{href:"https://github.com/Roxolana4lana"},"follow my github")),r.a.createElement("div",{className:"contactInfo"},"roxolanapavlyk@gmail.com"),r.a.createElement("div",{className:"contactInfo"},"501556168")),r.a.createElement("div",{className:"rights"},r.a.createElement("p",null,"Wszelkie prawa zastrze\u017cone \xa9 2019 | Roksolana Pavlyk")))}var H=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleMailChange=function(t){e.setState(Object(W.a)({},t.target.name,t.target.value))},e.Validate=function(){var t="",a="",n="";return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.state.sender)||(t="type a valid email"),(!e.state.subject||e.state.subject.length<5)&&(a="minimum 5 characters"),(!e.state.text||e.state.text.length<5)&&(n="minimum 5 characters"),!(t||n||a)||(console.log(e.state.senderError),e.setState({senderError:t,subjectError:a,textError:n}),!1)},e.handleMailSubmit=function(t){t.preventDefault();var a=e.Validate();if(console.log(e.state.senderError),a){var n={sender:e.state.sender,subject:e.state.subject,text:e.state.text};Z.a.post("http://80.211.249.59/send_email/",n).then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)}).then(e.setState({sender:"",subject:"",text:"",senderError:"",subjectError:"",textError:"",sent:"message sent!"}))}else console.log("not valid")},e.state={sender:"",subject:"",text:"",senderError:"",subjectError:"",textError:"",sent:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainForm"},r.a.createElement("h1",null,"Contact me "),r.a.createElement("div",{className:"myForm"},r.a.createElement("form",{onSubmit:this.handleMailSubmit},r.a.createElement("div",{className:"formPart"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",value:this.state.sender,onChange:this.handleMailChange,name:"sender"})),r.a.createElement("div",{className:"errorMessage"},r.a.createElement("div",null),this.state.senderError),r.a.createElement("br",null),r.a.createElement("div",{className:"formPart"},r.a.createElement("label",null,"Subject"),r.a.createElement("input",{type:"text",value:this.state.subject,onChange:this.handleMailChange,name:"subject"})),r.a.createElement("div",{className:"errorMessage"}," ",r.a.createElement("div",null),this.state.subjectError),r.a.createElement("br",null),r.a.createElement("div",{className:"formPart"},r.a.createElement("label",null,"Text"),r.a.createElement("textarea",{value:this.state.text,onChange:this.handleMailChange,name:"text"})),r.a.createElement("div",{className:"errorMessage"},r.a.createElement("div",null),this.state.textError),r.a.createElement("br",null),r.a.createElement("button",{className:"formButton"},"Submit"),r.a.createElement("div",{className:"sendMessage"},r.a.createElement("div",null),this.state.sent))),r.a.createElement("div",{className:"myContacts"}),r.a.createElement(G,null))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.Element,{name:"home"},r.a.createElement(w,null)),r.a.createElement(v.Element,{name:"about"},r.a.createElement(O,null)),r.a.createElement(v.Element,{name:"arrow"},r.a.createElement(D,null)),r.a.createElement(v.Element,{name:"form"},r.a.createElement(H,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.ec5e1f1b.chunk.js.map