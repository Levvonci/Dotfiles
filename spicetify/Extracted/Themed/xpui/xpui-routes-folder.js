"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9124],{4263:(e,i,s)=>{s.d(i,{u:()=>g});var r=s(59496),l=s(84875),a=s.n(l),n=s(53083),t=s(6923),d=s(49990),o=s(93711);const c="FvfvGU3jvHRskUU9v9_8",x="Q9AlbZn2EGzy3MTWXa8X",m="mxmxS0y8LiwSs5nueKPT",h="GXxVAveNFStY3pBI_NO4",p="eHcXC2s97InYP7rMNT0H";var f=s(4637);const g=(0,r.memo)((function(e){const{children:i,message:s,title:r,linkTitle:l,linkTo:g,onClick:u,renderInline:j=!1}=e,{isXSOnly:y,isSMOnly:v}=(0,d.e)(),P=y||v;return(0,f.jsxs)("section",{className:a()(c,{[x]:j}),children:[i,(0,f.jsx)(n.D,{as:"h1",variant:P?"cello":"alto",className:h,children:r}),(0,f.jsx)(n.D,{variant:P?"mesto":"ballad",className:p,children:s}),l&&(g||u)&&(0,f.jsx)(t.D,{colorSet:"invertedLight",className:m,href:g,onClick:u,component:o.Z,children:l})]})}))},51041:(e,i,s)=>{s.r(i),s.d(i,{default:()=>Z});var r=s(59496),l=s(90641),a=s(92053),n=s(58908),t=s(80326),d=s(81785),o=s(86417),c=s(4263),x=s(27293),m=s(53083),h=s(64082),p=s(47262),f=s(95441),g=s(16020),u=s(4637);const j=({folder:e,index:i})=>{const s=e.items.filter((e=>e.type===g.p.PLAYLIST)).length,r=e.items.filter((e=>"folder"===e.type)).length;return(0,u.jsx)(p.C,{uri:e.uri,index:i,featureIdentifier:"folder",headerText:e.name,renderSubHeaderContent:()=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(m.D,{variant:"mesto",children:[t.ag.get("web-player.folder.playlists",s),","," ",t.ag.get("web-player.folder.folders",r)]})}),renderCardImage:()=>(0,u.jsx)(f.x,{FallbackComponent:e=>(0,u.jsx)(h.P,{iconSize:64,...e})}),isPlayable:!1})};var y=s(3777);const v="folder-folderPage-sectionWrapper",P="rbLspqGazxdY3fuaxvkM",w="_odE2h85itP7mBz2_vUR",b="x49I_IPmWNCLnUJSw28O",N=({folderName:e,folderUri:i})=>(0,u.jsxs)("div",{className:w,children:[(0,u.jsx)(h.P,{className:b}),(0,u.jsx)(y.default,{to:i,children:(0,u.jsx)(m.D,{variant:"canon",children:e})})]});var k=s(1578),U=s(23351);const S=({folder:e,isFolder:i,isPlaylist:s})=>{const r=(e,r)=>i(e)?(0,u.jsx)(j,{folder:e,index:r}):s(e)?(0,u.jsx)(d.Z,{index:r,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:e.owner.displayName,isPlayable:e.totalLength>0}):null;return(0,u.jsxs)("div",{children:[(0,u.jsx)(N,{folderName:e.name,folderUri:e.uri}),(0,u.jsx)(k.T,{render:()=>e.items.map(((e,i)=>(0,u.jsx)(U.ZP,{value:"card",index:i,children:r(e,i)},e.uri)))})]})};var C=s(68765),L=s(76896),I=s(17913),M=s(93824);const F=({folderUri:e,hasPlaylists:i,onClick:s,playing:r,supportsFolderPlayback:l})=>(0,u.jsx)(I.o,{children:(0,u.jsx)(I.F,{children:l&&(0,u.jsx)(M.$,{onClick:s,isPlaying:r,size:"lg",disabled:!i,uri:e})})});var O=s(18805),T=s(53965),D=s(99567);const X=({folderName:e,folderUri:i})=>(0,u.jsxs)(O.gF,{children:[(0,u.jsx)(T.W,{children:(0,u.jsx)(D.i,{text:e,dragUri:i,dragLabel:e})}),(0,u.jsxs)(O.sP,{children:[(0,u.jsx)(O.dy,{small:!0,uppercase:!0,children:t.ag.get("folder.title")}),(0,u.jsx)(O.xd,{dragUri:i,dragLabel:e,children:e})]})]}),G=e=>{const{id:i}=e,s=(0,l.v9)((({session:e})=>e?.user?.id))||"",a=(0,n.ir)(s,i).toURI(),m=(0,L.C)({folderUri:a,decorateImagesAndOwner:!0}),h=(0,l.v9)((e=>e.platform.isDesktop)),{isPlaying:p,togglePlay:f}=(0,C.n)({uri:a},{featureIdentifier:"folder"}),j=e=>e.type===g.p.PLAYLIST,y=e=>"folder"===e.type,w=(0,r.useMemo)((()=>m?m.items.filter(j):[]),[m]),b=(0,r.useMemo)((()=>m?m.items.filter(y):[]),[m]),N=w.length>0||b.length>0;return m?(0,u.jsxs)("section",{className:v,children:[(0,u.jsx)(o.$,{children:t.ag.get("playlist.page-title",m.name)}),(0,u.jsx)(X,{folderName:m.name,folderUri:a}),(0,u.jsx)(F,{supportsFolderPlayback:h,onClick:()=>f(),playing:p,hasPlaylists:N,folderUri:a}),(0,u.jsx)("div",{className:"contentSpacing",children:N?(0,u.jsx)(U.ZP,{value:"EntitiesGrid",children:(0,u.jsxs)("div",{className:P,children:[(0,u.jsx)(k.T,{render:()=>w.map(((e,i)=>(0,u.jsx)(U.ZP,{value:"card",index:i,children:(0,u.jsx)(d.Z,{index:i,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:e.owner.displayName,isPlayable:e.totalLength>0})},e.uri)))}),b.map((e=>(0,u.jsx)(S,{folder:e,isPlaylist:j,isFolder:y},e.uri)))]})}):(0,u.jsx)(c.u,{title:t.ag.get("folder.empty.title"),message:t.ag.get("folder.empty.subtitle"),renderInline:!0})})]}):(0,u.jsx)(x.h,{hasError:!1,errorMessage:t.ag.get("error.generic")})},Z=(0,r.memo)((function(){const{folderId:e=""}=(0,a.UO)();return(0,u.jsx)(G,{id:e})}))},49990:(e,i,s)=>{s.d(i,{e:()=>h});var r=s(10680);const l="(min-width: 0px)",a="(min-width: 0px) and (max-width: 767px)",n="(min-width: 768px)",t="(min-width: 768px) and (max-width: 1023px)",d="(min-width: 1024px)",o="(min-width: 1024px) and (max-width: 1279px)",c="(min-width: 1280px)",x="(min-width: 1280px) and (max-width: 1919px)",m="(min-width: 1920px)",h=()=>({isXS:(0,r.a)(l),isXSOnly:(0,r.a)(a),isSM:(0,r.a)(n),isSMOnly:(0,r.a)(t),isMD:(0,r.a)(d),isMDOnly:(0,r.a)(o),isLG:(0,r.a)(c),isLGOnly:(0,r.a)(x),isXL:(0,r.a)(m)})}}]);
//# sourceMappingURL=xpui-routes-folder.js.map