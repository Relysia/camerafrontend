(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(14),s=n.n(i),a=(n(22),n(5)),o=n.n(a),l=n(15),j=n(3),d=n(16),u=n.n(d),b=(n(42),n(0));var h=function(e){var t=e.camera,n=e.showModal,c=e.setShowModal;return Object(b.jsxs)("div",{className:"modal-container",children:[Object(b.jsx)("div",{className:"close-button",onClick:function(){return c(!n)},children:"X"}),Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("div",{className:"image-container",children:Object(b.jsx)("img",{src:t.image,alt:t.name})}),Object(b.jsx)("h3",{onClick:function(){return window.open("".concat(t.video,", '_blank'"))},children:"Watch Video Review"}),Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("p",{children:"Description:"}),Object(b.jsx)("p",{children:t.description})]}),Object(b.jsxs)("div",{className:"modal-grid",children:[Object(b.jsxs)("p",{children:["Type: ",t.type]}),Object(b.jsxs)("p",{children:["Resolution: ",t.resolution," MP"]}),Object(b.jsxs)("p",{children:["Sensor Size: ","1/2.3"===t.sensor_size||"1"===t.sensor_size?t.sensor_size+'"':t.sensor_size]}),Object(b.jsxs)("p",{children:["Video Resolution: ",4===t.video_resolution?t.video_resolution+"K":t.video_resolution+"p"]}),Object(b.jsxs)("p",{children:["Flat Profile: ",t.flat_profile?"\u2714":"\u2718"]}),Object(b.jsxs)("p",{children:["Touch Screen: ",t.touch_screen?"\u2714":"\u2718"]})]})]})]})};var O=function(e){var t=e.data,n=Object(c.useState)(!1),r=Object(j.a)(n,2),i=r[0],s=r[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"camera-card",children:[Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("div",{className:"image-container",children:Object(b.jsx)("img",{src:t.image,alt:t.name})}),Object(b.jsxs)("p",{children:["Type: ",t.type]}),Object(b.jsxs)("p",{children:["Resolution: ",t.resolution," MP"]}),Object(b.jsxs)("p",{children:["Sensor Size: ","1/2.3"===t.sensor_size||"1"===t.sensor_size?t.sensor_size+'"':t.sensor_size]}),Object(b.jsxs)("p",{children:["Video Resolution: ",4===t.video_resolution?t.video_resolution+"K":t.video_resolution+"p"]}),Object(b.jsxs)("p",{children:["Price: $",t.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(b.jsx)("button",{className:"amazon-link",onClick:function(){return window.open("".concat(t.amazon,", '_blank'"))},children:"View at Amazon"}),Object(b.jsx)("p",{onClick:function(){return s(!i)},children:"More Info"})]}),i&&Object(b.jsx)(h,{camera:t,showModal:i,setShowModal:s})]})},p=n(17);var x=function(e){var t=e.setCameraName,n=e.setVideoRes,c=e.price,r=e.setPrice,i=e.setSensor,s=e.setType;return Object(b.jsxs)("section",{className:"filter-container",children:[Object(b.jsx)("div",{className:"search-field",children:Object(b.jsx)("input",{type:"text",placeholder:"Search by Name",onChange:function(e){return t(e.target.value)}})}),Object(b.jsxs)("div",{className:"filter-bar",children:[Object(b.jsxs)("div",{className:"video-search",children:[Object(b.jsx)("h3",{children:"Video Resolution"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",name:"video",value:"all",onClick:function(){return n(0)}}),Object(b.jsx)("label",{htmlFor:"all",children:"All"}),Object(b.jsx)("input",{type:"radio",name:"video",value:"4k",onClick:function(){return n(4)}}),Object(b.jsx)("label",{htmlFor:"4k",children:"4K"}),Object(b.jsx)("input",{type:"radio",name:"video",value:"1080p",onClick:function(){return n(1080)}}),Object(b.jsx)("label",{htmlFor:"1080p",children:"1080p"})]})]}),Object(b.jsxs)("div",{className:"price-search",children:[Object(b.jsx)("h3",{children:"Max Price ($)"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"number",value:c,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)(p.a,{className:"reset-icon",onClick:function(){return r(3e3)}})]})]}),Object(b.jsxs)("div",{className:"sensor-search",children:[Object(b.jsx)("h3",{children:"Sensor Size"}),Object(b.jsxs)("select",{children:[Object(b.jsx)("option",{onClick:function(){return i(null)},children:"All"}),Object(b.jsx)("option",{onClick:function(){return i("Full-Frame")},children:"Full-Frame"}),Object(b.jsx)("option",{onClick:function(){return i("APS-C")},children:"APS-C"}),Object(b.jsx)("option",{onClick:function(){return i("MFT")},children:"MFT"}),Object(b.jsx)("option",{onClick:function(){return i("1/2.3")},children:'1/2.3"'}),Object(b.jsx)("option",{onClick:function(){return i("1")},children:'1"'})]})]}),Object(b.jsxs)("div",{className:"type-search",children:[Object(b.jsx)("h3",{children:"Type"}),Object(b.jsxs)("select",{children:[Object(b.jsx)("option",{onClick:function(){return s(null)},children:"All"}),Object(b.jsx)("option",{onClick:function(){return s("DSLR")},children:"DSLR"}),Object(b.jsx)("option",{onClick:function(){return s("Mirrorless")},children:"Mirrorless"}),Object(b.jsx)("option",{onClick:function(){return s("Compact")},children:"Compact"}),Object(b.jsx)("option",{onClick:function(){return s("Superzoom")},children:"Superzoom"})]})]})]})]})},m=n.p+"static/media/headerlogo.43603096.jpg";var f=function(e){var t=e.data,n=Object(c.useState)(""),r=Object(j.a)(n,2),i=r[0],s=r[1],a=Object(c.useState)(0),o=Object(j.a)(a,2),l=o[0],d=o[1],u=Object(c.useState)(3e3),h=Object(j.a)(u,2),p=h[0],f=h[1],v=Object(c.useState)(null),g=Object(j.a)(v,2),C=g[0],k=g[1],S=Object(c.useState)(null),N=Object(j.a)(S,2),w=N[0],_=N[1],y=function(){var e,n=(e=C||w?C&&w?t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())&&e.price<=p&&e.sensor_size===C&&e.type===w})):t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())&&e.price<=p&&e.sensor_size===C||e.type===w&&e.price<=p&&e.name.toLowerCase().includes(i.toLowerCase())})):t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())&&e.price<=p}))).filter((function(e){return e.video_resolution===l}));return 0!==l?n:e}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:m,alt:"Header Logo",id:"header-logo"}),Object(b.jsx)("h1",{children:"Digital Camera Database"}),Object(b.jsx)(x,{setCameraName:s,setVideoRes:d,price:p,setPrice:f,setSensor:k,setType:_}),Object(b.jsx)("section",{className:"grid-container",children:y.map((function(e,t){return Object(b.jsx)(O,{data:e},t)}))}),y.length<1&&Object(b.jsx)("h2",{id:"no-result",children:"There are no results that match your search."})]})},v=n.p+"static/media/camera.0957044c.png",g=n.p+"static/media/lens.6ecb51de.png";var C=function(){return Object(b.jsx)("div",{className:"loading",children:Object(b.jsxs)("div",{className:"loading-image",children:[Object(b.jsx)("img",{src:g,alt:"lens",id:"loading-lens"}),Object(b.jsx)("img",{src:v,alt:"camera",id:"loading-camera"})]})})};var k=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!0),s=Object(j.a)(i,2),a=s[0],d=s[1],h=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://cameradb-backend.herokuapp.com/api/cameras");case 3:t=e.sent,r(t.data),d(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Failed to get data from camera api backend");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),Object(b.jsx)(b.Fragment,{children:a?Object(b.jsx)(C,{}):Object(b.jsx)("main",{children:Object(b.jsx)(f,{data:n})})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[44,1,2]]]);