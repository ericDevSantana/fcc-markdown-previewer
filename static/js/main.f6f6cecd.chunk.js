(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],[,,function(e,n,t){e.exports={Preview:"Preview_Preview__2tnW4",ToolBar:"Preview_ToolBar__1WrNA",PreviewWindow:"Preview_PreviewWindow__PmzS2"}},,function(e,n,t){e.exports={Editor:"Editor_Editor__1YLvD",ToolBar:"Editor_ToolBar__EsaQr"}},,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var r=t(1),i=t.n(r),o=t(6),a=t.n(o),s=(t(12),t(7)),c=(t(13),t(4)),d=t.n(c),l=t(0),u=function(e){return Object(l.jsx)(i.a.Fragment,{children:Object(l.jsxs)("div",{className:d.a.Editor,children:[Object(l.jsx)("div",{className:d.a.ToolBar,children:"Editor"}),Object(l.jsx)("textarea",{id:"editor",onChange:function(n){e.onChange(n.target.value)},value:e.default})]})})},h=t(2),w=t.n(h),b=t(5),f=t.n(b),v=function(e){return f.a.setOptions({breaks:!0}),Object(l.jsx)(i.a.Fragment,{children:Object(l.jsxs)("div",{className:w.a.Preview,children:[Object(l.jsx)("div",{className:w.a.ToolBar,children:"Preview"}),Object(l.jsx)("div",{className:w.a.PreviewWindow,dangerouslySetInnerHTML:{__html:f()(e.enteredText)},id:"preview"})]})})};var j="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",m=function(){var e=Object(r.useState)(j),n=Object(s.a)(e,2),t=n[0],i=n[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{onChange:function(e){i(e)},default:t}),Object(l.jsx)(v,{enteredText:t})]})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.f6f6cecd.chunk.js.map