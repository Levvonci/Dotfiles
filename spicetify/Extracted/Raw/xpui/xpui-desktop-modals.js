"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7994],{26661:(e,t,s)=>{s.r(t),s.d(t,{AboutSpotifyModal:()=>S});var n=s(59496),a=s(90641),l=s(53083),o=s(65507),i=s(80326),r=s(66616),c=s(30327),d=s(99914),u=s(56015);const p="hbpwhf54ljdKrhNTq4mA";var g=s(4637);const h=()=>{const e=(0,n.useContext)(c.z),t=(0,d.g)(),s=(0,n.useCallback)((()=>{e.prepareUpdate()}),[e]),a=(0,n.useCallback)((()=>{e.applyUpdate()}),[e]);switch(t?.state){case u.J.UPDATE_AVAILABLE:return(0,g.jsxs)("div",{children:[i.ag.get("about.upgrade.pending",t.version)," ",(0,g.jsx)("button",{className:p,onClick:s,children:i.ag.get("about.upgrade.pending_link")})]});case u.J.UPDATE_PROCESSING:return(0,g.jsx)("div",{children:i.ag.get("about.upgrade.downloading")});case u.J.UPDATE_READY:return(0,g.jsxs)("div",{children:[i.ag.get("about.upgrade.downloaded",t.version)," ",(0,g.jsx)("button",{className:p,onClick:a,children:i.ag.get("about.upgrade.restart_link")})]});case u.J.UPDATE_NONE:default:return null}};var b=s(18200),m=s(45375);const x="qi0hX8uXrbQyS6tvdDBt",f="WomzHWnDO_yFyjnkd49P",j="R83hOohwVshnd6bEkDO4",v=new Map([["Win32",i.ag.get("desktop-about.platform-win-x86")],["Win32_ARM64",i.ag.get("desktop-about.platform-win-arm-64")],["OSX",i.ag.get("desktop-about.platform-mac-x86")],["OSX_ARM64",i.ag.get("desktop-about.platform-mac-arm-64")],["Linux",i.ag.get("desktop-about.platform-linux")]]),k=()=>{const e=(0,n.useRef)(null),{settings:t}=(0,m.r)(),s=function(){const e=(0,n.useContext)(c.z),[t,s]=(0,n.useState)(null);return(0,n.useEffect)((()=>{let t=!0;return e.getVersionInfo().then((e=>{t&&s(e)})),()=>{t=!1}}),[e,s]),t}(),a=i.ag.get("desktop-about.platform-unknown");if(null===s)return null;const l="1"===t.values.employee,o=t.values["app.enable-developer-mode"],r=l?s.containerBuildType:"",d=v.get(s.containerPlatform)??a,u=i.ag.get("desktop-about.platform",{employee_build_type:r},{platform:d}),p=i.ag.get("desktop-about.copy-version-info-tooltip");return(0,g.jsxs)("div",{className:x,children:[(0,g.jsxs)("div",{className:f,ref:e,children:[(0,g.jsx)("div",{children:u}),(0,g.jsx)("div",{children:s.containerVersion}),o&&(0,g.jsx)("div",{children:s.uiVersion}),o&&(0,g.jsxs)("div",{children:["cef_",s.cefVersion]})]}),(0,g.jsx)("button",{title:p,className:j,onClick:()=>{e.current&&(0,b.v)(e.current.innerText)},children:"⎘"})]})};var _=s(41475),C=s(43603),N=s(8445);const y="UnLGG6p932k7WyjkB9Vo",O="GSFvITwD84dS2JA62Mtj",A="KlzblASEYfUfaykBFZgM",w="Ifnz1lh1jjvqPqJ4KPo8",D="XF1XXenkrbdAK2rRoxoU",S=(0,n.memo)((function(){const e=(0,a.I0)(),{isOpen:t}=(0,a.v9)((e=>e.aboutSpotify)),s=new Date("2023-02-24").getUTCFullYear().toString(),c=(0,n.useCallback)((()=>{e((0,_.se)())}),[e]);return(0,g.jsx)(C.Z,{animated:!0,isOpen:t,onRequestClose:c,contentLabel:i.ag.get("about.title_label"),children:(0,g.jsxs)("div",{className:y,children:[(0,g.jsxs)("main",{className:A,children:[(0,g.jsx)(N.Z,{noLink:!0,hasText:!0}),(0,g.jsx)(k,{}),(0,g.jsx)(h,{}),(0,g.jsx)(l.D,{as:"div",variant:"finale",className:w,children:(0,g.jsx)(r.kf,{source:i.ag.get("about.copyright",s),paragraphClassName:D})})]}),(0,g.jsx)("button",{"aria-label":i.ag.get("close_button_action"),className:O,onClick:c,children:(0,g.jsx)(o.k,{iconSize:24})})]})})}))},19742:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m,mapDispatchToProps:()=>b});var n=s(90641),a=s(11549),l=s(53083),o=s(6923),i=s(80326),r=s(43603);const c="uYKs_kQMPOziaeDj877B",d="i8qeSJJVx4PXb7fsvOTd",u="WhIzm3S3R6Ker3XvpYW6",p="qsKpcFrhrA8KtuTVIN_y";var g=s(4637);const h=({isOpen:e,onClose:t})=>(0,g.jsx)(r.Z,{isOpen:e,onRequestClose:t,contentLabel:i.ag.get("licenses.title"),children:(0,g.jsxs)("div",{className:c,children:[(0,g.jsxs)("main",{className:d,children:[(0,g.jsx)(l.D,{as:"h1",variant:"alto",semanticColor:"textBase",children:i.ag.get("licenses.title")}),(0,g.jsx)("iframe",{className:u,title:i.ag.get("licenses.title"),src:"/licenses.html"})]}),(0,g.jsx)("div",{className:p,children:(0,g.jsx)(o.D,{onClick:t,children:i.ag.get("close_button_action")})})]})});const b=e=>({hide:()=>e((0,a.xh)())}),m=(0,n.$j)((e=>({isOpen:e.licenses.isOpen})),b)((function({isOpen:e,hide:t}){return(0,g.jsx)(h,{isOpen:e,onClose:t})}))}}]);
//# sourceMappingURL=xpui-desktop-modals.js.map