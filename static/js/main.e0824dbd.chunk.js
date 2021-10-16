(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{40:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),r=a.n(s),d=a(16),n=a.n(d),j=(a(7),a(4)),i=a(2),l=a.n(i),o=a.p+"static/media/CovidTextImage.9e5d4fc7.png",b=a(5),h=a.n(b),O=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1];Object(s.useEffect)((function(){h.a.get("https://disease.sh/v3/covid-19/all").then((function(e){r(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);var d=new Date(a.updated).toString();return Object(c.jsxs)("div",{className:"worldinfo-table",children:[Object(c.jsx)("img",{className:"imageHeading",src:o,alt:"COVID-19"}),Object(c.jsx)("h1",{className:"section-heading",children:"Worldwide"}),Object(c.jsxs)("h2",{className:"worldinfo-latest-time",children:["Last Updated: ",d]}),Object(c.jsxs)("table",{className:"table-container",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Cases"}),Object(c.jsx)("td",{children:"Deaths"}),Object(c.jsx)("td",{children:"Recovered"}),Object(c.jsx)("td",{children:"Recovered today"}),Object(c.jsx)("td",{children:"Critical"}),Object(c.jsx)("td",{children:"Deaths"}),Object(c.jsx)("td",{children:"Deaths today"})]}),Object(c.jsxs)("tr",{children:[0===a.cases?Object(c.jsx)("td",{className:"statUnavailable",children:"Stat unavailable"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.cases,duration:2,separator:","})}),0===a.deaths?Object(c.jsx)("td",{className:"statUnavailable",children:"Stat unavailable"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.deaths,duration:2,separator:","})}),0===a.recovered?Object(c.jsx)("td",{className:"statUnavailable",children:"Stat unavailable"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.recovered,duration:2,separator:","})}),0===a.todayRecovered?Object(c.jsx)("td",{className:"statUnavailable",children:"Stat unavailable"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.todayRecovered,duration:2,separator:","})}),0===a.critical?Object(c.jsx)("td",{className:"statUnavailable",children:"Stat unavailable"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.critical,duration:2,separator:","})}),0===a.deaths?Object(c.jsx)("td",{className:"statUnavailable",children:"Stat unavailable"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.deaths,duration:2,separator:","})}),0===a.todayDeaths?Object(c.jsx)("td",{className:"statUnavailable",children:"Stat unavailable"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.todayDeaths,duration:2,separator:","})})]})]}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("hr",{className:"line"}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})]})},x=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1],d=Object(s.useState)(""),n=Object(j.a)(d,2),i=n[0],o=n[1],b=Object(s.useState)(""),O=Object(j.a)(b,2),x=O[0],u=O[1],v=Object(s.useState)(!1),p=Object(j.a)(v,2),f=p[0],m=p[1],g=Object(s.useState)(!1),y=Object(j.a)(g,2),N=y[0],S=y[1];Object(s.useEffect)((function(){h.a.get(i).then((function(e){return S(!1),r(e.data)})).catch((function(e){S(!0),console.log(e)}))}),[f,i]);var D=new Date(a.updated).toString();return Object(c.jsxs)("div",{className:"country-info-display",children:[Object(c.jsx)("input",{class:"input-box",type:"text",placeholder:"Search for a country",onChange:function(e){var t=e.target.value,a="";a=t.split(" ").length>1?function(e){e=e.split("");for(var t=0;t<e.length;t++)" "===e[t]&&(e[t]="%20");return e.join("")}(t):t,o("https://disease.sh/v3/covid-19/countries/"+a),u(t),console.log(t),m(!1)},value:x}),Object(c.jsx)("button",{class:"input-box",onClick:function(){m(!0),u(""),r("")},children:"Submit"}),f?!0===N?Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{style:{color:"red"},children:"Oops"}),"! No such country found."]}):Object(c.jsxs)("div",{className:"worldinfo-table",children:[Object(c.jsxs)("h1",{className:"section-heading",children:[a.country," (",a.continent,")"]}),Object(c.jsxs)("h2",{className:"worldinfo-latest-time",children:["Last Updated: ",D]}),Object(c.jsxs)("table",{className:"table-container",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Cases"}),Object(c.jsx)("td",{children:"Active"}),Object(c.jsx)("td",{children:"Recovered"}),Object(c.jsx)("td",{children:"Recovered today"}),Object(c.jsx)("td",{children:"Critical"}),Object(c.jsx)("td",{children:"Deaths"}),Object(c.jsx)("td",{children:"Deaths today"})]}),Object(c.jsxs)("tr",{children:[0===a.cases?Object(c.jsx)("td",{children:"0"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.cases,duration:2,separator:","})}),0===a.active?Object(c.jsx)("td",{children:"0"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.active,duration:2,separator:","})}),0===a.recovered?Object(c.jsx)("td",{children:"0"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.recovered,duration:2,separator:","})}),0===a.todayRecovered?Object(c.jsx)("td",{children:"0"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.todayRecovered,duration:2,separator:","})}),0===a.critical?Object(c.jsx)("td",{children:"0"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.critical,duration:2,separator:","})}),0===a.deaths?Object(c.jsx)("td",{children:"0"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.deaths,duration:2,separator:","})}),0===a.todayDeaths?Object(c.jsx)("td",{children:"0"}):Object(c.jsx)("td",{children:Object(c.jsx)(l.a,{start:0,end:a.todayDeaths,duration:2,separator:","})})]})]})]}):Object(c.jsx)("h1",{className:"warning",children:"Please make sure you enter the country name correctly."})]})};var u=function(){var e=(new Date).getFullYear();return console.log(e),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:["Built with love, caffeine and React. Copyright \xa9\ufe0f ",e," Fardin Khan."]})})};var v=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{}),Object(c.jsx)(x,{}),Object(c.jsx)("footer",{children:Object(c.jsx)(u,{})})]})};n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))},7:function(e,t,a){}},[[40,1,2]]]);
//# sourceMappingURL=main.e0824dbd.chunk.js.map