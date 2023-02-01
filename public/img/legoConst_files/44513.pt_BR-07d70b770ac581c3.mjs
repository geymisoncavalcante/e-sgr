(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[44513],{613316:(e,t,i)=>{function o(e){return[0,24,21,26].includes(e)}function r({articleType:e,id:t,title:i}){const o=i.toLowerCase().replace(/[.,\/#!?$%\^&\*+;:{}=\-_`~()\’'"]/g,"").trim().replace(/\s+/g,"-");return"today"===e?`/today/shop/${o}/${t}/`:`/discover/article/${o}/${t}/`}i.d(t,{x:()=>r,y:()=>o})},564194:(e,t,i)=>{i.d(t,{Z:()=>g});var o=i(667294),r=i(973935),s=i(983722),n=i(834911),a=i(124580),l=i(407043),d=i(802201),p=i(785893);function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const u={Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},BoardMoreIdeasRep:{impressionType:"boardMoreIdeasImpressions",idType:"boardIdStr",eventType:10054},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},Story:{impressionType:"storyImpressions",idType:"storyIdStr",eventType:170},ActivationCard:{impressionType:"activationCardImpressions",idType:"experienceIdStr",eventType:8547},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573},TodayArticle:{impressionType:"todayArticleImpressions",idType:"todayArticleIdStr",eventType:8569},Banner:{impressionType:"bannerImpressions",idType:"userIdStr",eventType:9061},Comment:{impressionType:"commentImpressions",idType:"commentIdStr",eventType:9127}};class h extends o.Component{constructor(e){super(e),c(this,"trackImpression",(()=>{try{this.node=(0,r.findDOMNode)(this),this.node instanceof HTMLElement&&this.impressionsFramework.start(this.node).onExitViewport(this.logImpression).setDebugId(this.props.loggingId||"unknown")}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}})),c(this,"logImpression",(e=>{const{carousel_data:t,closeupImpressionType:i,closeupNavigationType:o,componentType:r,contextLogData:n,elementType:a,impressionAuxFields:l,impressionType:d,loggingId:p,objectIdStr:c,slotIndex:h,trackCarousel:g,viewData:m,viewParameter:y,viewType:x,logContextEvent:_}=this.props,v=u[d],T=v.idType,b=e.forcedExit&&"removed"===e.forcedExit?0:void 0,f={endTime:e.endTime,[T]:p,slotIndex:h,time:e.startTime,renderDuration:e.endTime-e.startTime,type:i,...l,forcedExit:b},w=(0,s.Z)(),{checkExperiment:I}=(w||{}).experimentsClient||{},j="function"==typeof I&&I("web_mweb_story_impression_fix").anyEnabled;if(j&&(u.Story={impressionType:"storyImpression",idType:"idStr",eventType:170}),g||_({event_type:v.eventType,component:r,element:a,event_data:{[v.impressionType]:"Story"===d&&j?f:[f]},object_id_str:c,view_type:x,view_data:m||{},view_parameter:y,aux_data:{...n,closeup_navigation_type:o}}),t&&g){const{carousel_slots:e,index:i=0,id:o}=t;_({event_type:7352,component:r,event_data:{pinCarouselSlotImpressions:[{...f,carouselDataId:Number(o),carouselSlotId:(null==e?void 0:e[i])&&Number(e[i].id),slotIndex:i}]},object_id_str:c,view_type:x,view_data:m||{},view_parameter:y,aux_data:{...n}})}})),this.impressionsFramework=e.impressionsFramework||a.Z}componentDidMount(){this.props.inImpressionExp&&!this.impressionsFramework.inExperiment&&this.impressionsFramework.setExperimentStatus(!0),this.props.isPaused||this.trackImpression()}componentDidUpdate(e){e.isPaused&&!this.props.isPaused&&this.trackImpression()}componentWillUnmount(){this.node instanceof HTMLElement&&this.impressionsFramework.stop(this.node)}render(){return o.Children.only(this.props.children)}}function g(e){const{logContextEvent:t}=(0,l.v)(),{loggingId:i}=e,o=(0,d.AF)(),r=i?o[i]:{};return(0,p.jsx)(h,{...e,logContextEvent:t,carousel_data:r&&(0,n.Z)({carouselData:r.carousel_data,images:r.images,richMetadata:r.rich_metadata,richSummary:r.rich_summary})})}},391143:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(643913),r=i(613316);function s({storyCategory:e,query:t,referringSource:i,bubbleId:s,storyId:n,title:a}){const l=[0,24,21,26].includes(e),d=(0,o.Z)({q:t,rs:i||void 0,b_id:s,source_id:n}),p=l&&a?(0,r.x)({title:a,id:s,articleType:"discover"}):`/discover/article/${s}/`;return l?p:"/search/pins/"+(d?"?"+d:"")}},940882:(e,t,i)=>{i.d(t,{J:()=>o,Z:()=>r});const o=-1;function r(e){switch(e){case 0:return"shopping-bag";case 1:return"tag";default:return"search"}}},934523:(e,t,i)=>{i.d(t,{L1:()=>s,Rz:()=>l,WZ:()=>n,cI:()=>r,fe:()=>a,hu:()=>o});const o=64,r=80,s=22,n="HeaderContent",a=671,l={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}},57636:(e,t,i)=>{i.d(t,{Z:()=>m});var o=i(667294),r=i(116303),s=i(63444),n=i(564194),a=i(391143),l=i(667976),d=i(66699),p=i(898781),c=i(19121),u=i(940882),h=i(883119),g=i(785893);function m({bubble:e,contextLogData:t,disableTabIndex:i,handleReport:m,height:y,imgSignature:x,isHovered:_,lightOverlay:v,onClick:T,onMouseEnter:b,onMouseLeave:f,referringSource:w,searchBoxRenderStopwatch:I,showFlag:j,slotIndex:S,storyId:C,viewParameter:P,viewType:k,width:E}){const R=(0,p.ZP)(),M=(0,c.Z)(),{id:O,action:A,cover_images:D,dominant_colors:z,identifier_icon_type:Z,title:F,story_category:L,curator:H}=e,B=D&&D[0]?D[0]["280x280"]||D[0]["236x"]:void 0,N=(0,d.Z)(F&&F.format||"",F&&F.args||{}),W=z&&z.length?z[0]:"gray",X=(null==A?void 0:A.url)||(0,a.Z)({storyCategory:L,query:N,referringSource:w,bubbleId:O,storyId:C,title:F.format});return(0,g.jsx)(n.Z,{impressionAuxFields:{storyCategory:L,storyIdStr:C},impressionType:"Article",loggingId:O,viewType:k,viewParameter:P,slotIndex:S,contextLogData:{story_id:C,...t},children:(0,g.jsx)(s.Z,{backgroundColor:W,coverImage:B,disableTabIndex:i,height:y,id:O,isHovered:_,lightOverlay:v,onClick:T,onMouseEnter:b,onMouseLeave:f,searchBoxRenderStopwatch:I,url:X,width:E,children:({isHovered:e})=>(0,g.jsxs)(o.Fragment,{children:[H&&26!==L&&(0,g.jsx)(h.xu,{position:"absolute",top:!0,left:!0,padding:2,children:(0,g.jsx)(r.Z,{outline:!0,size:"xs",src:H.image_small_url,name:H.full_name})}),Z&&Z!==u.J&&(0,g.jsx)(h.xu,{alignItems:"center",color:"default",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:(0,g.jsx)(h.JO,{icon:(0,u.Z)(Z),accessibilityLabel:R.bt("Ícone de compras", "Shopping icon", "bubble.shoppingIcon.label", undefined, true),color:"default",size:12})}),(0,g.jsx)(h.xu,{display:"flex",height:y,width:E||"100%",position:"absolute",top:!0,padding:3,alignItems:26===L?"end":"center",justifyContent:"center",children:(0,g.jsxs)(h.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",children:[y>200?(0,g.jsx)(h.X6,{size:"500",align:"center",color:"light",children:N}):(0,g.jsx)(h.xv,{align:"center",color:"light",weight:"bold",children:N}),H&&26===L&&(0,g.jsxs)(h.xu,{display:"flex",justifyContent:"center",alignItems:"center",marginTop:4,children:[(0,g.jsx)(h.xu,{marginEnd:2,children:(0,g.jsx)(r.Z,{outline:!0,size:"xs",src:H.image_small_url,name:H.full_name})}),(0,g.jsx)(h.xv,{size:"100",color:"light",children:H.full_name})]})]})}),M.isAuth&&M.isEmployee&&j?(0,g.jsx)(h.xu,{position:"absolute",bottom:!0,right:!0,marginBottom:1,children:(0,g.jsx)(l.Z,{handleReport:m,imgSignature:x||"",isVisible:e})}):null]})})})}},63444:(e,t,i)=>{i.d(t,{A:()=>n,Z:()=>a});var o=i(667294),r=i(883119),s=i(785893);const n={bubbleOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"},lightHoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.2)"}};function a({backgroundColor:e,children:t,coverImage:i,disableTabIndex:a,height:l,id:d,isHovered:p,lightOverlay:c=!1,onClick:u,onMouseEnter:h,onMouseLeave:g,searchBoxRenderStopwatch:m,url:y,width:x}){var _,v;const[T,b]=(0,o.useState)(!1),f=()=>{h?h():b(!0)},w=()=>{g?g():b(!1)},I=p||T;let j=I?n.hoverOverlay:n.bubbleOverlay;c&&(j=I?n.lightHoverOverlay:{});return(0,s.jsx)(r.iP,{href:y,onBlur:w,onFocus:f,onMouseEnter:f,onMouseLeave:w,onTap:()=>{null==u||u(d)},role:"link",rounding:4,tabIndex:a?-1:void 0,children:(0,s.jsx)(r.zd,{rounding:4,width:x||"100%",height:l,children:null!=i&&i.url?(0,s.jsxs)(r.Ee,{alt:"",color:e,fit:"cover",naturalHeight:null!==(_=i.height)&&void 0!==_?_:1,naturalWidth:null!==(v=i.width)&&void 0!==v?v:1,onLoad:()=>{null==m||m.stop()},role:"presentation",src:i.url,children:[(0,s.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:j},height:"100%",width:"100%"}),"function"==typeof t?t({isHovered:I}):t]}):(0,s.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:e}},height:"100%",width:"100%"})})})}},958155:(e,t,i)=>{i.d(t,{Z:()=>u});var o=i(667294);const r={backgroundColor:"transparent"},s={backgroundColor:"rgba(216, 216, 216, 0.37)"},n={borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},a={outline:"0"};var l=i(883119),d=i(785893);function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class c extends o.Component{constructor(...e){super(...e),p(this,"state",{hovered:!1}),p(this,"handleMouseEnter",(()=>this.setState({hovered:!0}))),p(this,"handleMouseLeave",(()=>this.setState({hovered:!1})))}render(){const{backgroundHaloSize:e,onClick:t,color:i="subtle"}=this.props,o=Object.freeze({height:e,width:e}),p={border:0,display:"block",background:"transparent",cursor:"pointer",...a},c={...o,...{...n,...r,...this.state.hovered?s:{}}};return(0,d.jsx)("button",{type:"button",style:p,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onClick:e=>t&&t({event:e}),children:(0,d.jsx)("div",{style:c,children:(0,d.jsx)(l.xu,{rounding:"circle",children:(0,d.jsx)(l.JO,{accessibilityLabel:"",icon:"flag",size:e/2,color:i})})})})}}const u=c},667976:(e,t,i)=>{i.d(t,{Z:()=>m});var o=i(667294),r=i(958155),s=i(121151),n=i(6637),a=i(499128),l=i(844949),d=i(898781),p=i(343341),c=i(883119),u=i(785893);function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class g extends o.PureComponent{constructor(...e){var t;super(...e),t=this,h(this,"state",{showModal:!1,reportType:null}),h(this,"handleDismiss",(()=>this.setState({showModal:!1}))),h(this,"handleClick",(()=>{const{reportType:e}=this.state;"image"===e?this.reportSuggestionImage():this.reportSuggestionText()})),h(this,"reportSuggestionImage",(async function(){const{imgSignature:e,reportImage:i,pinIds:o}=t.props;if(t.setState({showModal:!1}),o)return void o.forEach((e=>i(e)));const r=(await n.Z.create("GetPinFromSignature",{imgSignature:e}).callGet()).resource_response.data.id;i(r)})),h(this,"reportSuggestionText",(()=>{const{handleReport:e,toastManagerContext:t}=this.props;e&&(e(),t.showToast((({hideToast:e})=>(0,u.jsx)(a.ZP,{onHide:e,text:this.props.i18n.bt("Agradecemos a denúncia. Ela será analisada pela nossa equipe de confiança e segurança.", "Thanks for your report! This will be reviewed by our Trust and Safety Team", "ReportingFlag.Toast.text", undefined, true)}))),this.handleDismiss())})),h(this,"showModal",(({event:e})=>{e.stopPropagation(),e.preventDefault(),this.setState({showModal:!0})}))}render(){const{showModal:e}=this.state;return(0,u.jsxs)(o.Fragment,{children:[this.props.isVisible&&(0,u.jsx)(r.Z,{onClick:this.showModal,backgroundHaloSize:24}),e&&(0,u.jsx)(s.ZP,{accessibilityModalLabel:this.props.i18n.bt("Denunciar termo de pesquisa", "Report search term", "ReportingFlag.Modal.accessibilityModalLabel", undefined, true),heading:this.props.i18n.bt("Denunciar termo de pesquisa", "Report search term", "ReportingFlag.Modal.heading", undefined, true),onDismiss:this.handleDismiss,size:"sm",children:(0,u.jsxs)(c.xu,{children:[(0,u.jsx)(c.xu,{padding:5,children:(0,u.jsx)(c.xv,{children:this.props.i18n.bt("Quando você sinalizar essa sugestão, ela será analisada pela nossa equipe de confiança e segurança. Ela será bloqueada se não atender às Diretrizes da Comunidade.", "When you flag this, our Trust and Safety team will review it. If it doesn't meet our Community Guidelines, it will be blocked.", "ReportingFlag.Box.Text.report", undefined, true)})}),(0,u.jsxs)(c.FX,{id:"reporting-flag-options-group",legend:this.props.i18n.bt("Quando você sinalizar essa sugestão, ela será analisada pela nossa equipe de confiança e segurança. Ela será bloqueada se não atender às Diretrizes da Comunidade.", "When you flag this, our Trust and Safety team will review it. If it doesn't meet our Community Guidelines, it will be blocked.", "ReportingFlag.Box.Text.report", undefined, true),legendDisplay:"hidden",children:[(0,u.jsxs)(c.xu,{role:"list",display:"flex",direction:"column",marginBottom:4,paddingX:5,children:[(0,u.jsxs)(c.xu,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[(0,u.jsx)(c.FX.RadioButton,{checked:"text"===this.state.reportType,id:"textType",onChange:()=>this.setState({reportType:"text"}),value:"Report search text"}),(0,u.jsx)(c.xu,{flex:"grow",children:(0,u.jsx)(c.__,{htmlFor:"textType",children:(0,u.jsx)(c.xu,{paddingX:2,children:(0,u.jsx)(c.xv,{children:"Report search text"})})})})]}),(0,u.jsxs)(c.xu,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[(0,u.jsx)(c.FX.RadioButton,{checked:"image"===this.state.reportType,id:"imageType",onChange:()=>this.setState({reportType:"image"}),value:"Report search image"}),(0,u.jsx)(c.xu,{flex:"grow",children:(0,u.jsx)(c.__,{htmlFor:"imageType",children:(0,u.jsx)(c.xu,{paddingX:2,children:(0,u.jsx)(c.xv,{children:"Report search image"})})})})]})]}),(0,u.jsx)(c.iz,{}),(0,u.jsxs)(c.xu,{display:"flex",justifyContent:"end",padding:2,children:[(0,u.jsx)(c.xu,{margin:2,children:(0,u.jsx)(c.zx,{fullWidth:!0,onClick:this.handleDismiss,text:this.props.i18n.bt("Cancelar", "Cancel", "ReportingFlag.Box.Button.text.cancel", undefined, true)})}),(0,u.jsx)(c.xu,{margin:2,children:(0,u.jsx)(c.zx,{fullWidth:!0,color:"red",onClick:this.handleClick,text:this.props.i18n.bt("Denunciar", "Report", "ReportingFlag.Box.Button.text.report", undefined, true),disabled:!this.state.reportType})})]})]})]})})]})}}function m(e){const t=(0,d.ZP)(),{reportImage:i}=(0,l.f)();return(0,u.jsx)(g,{...e,i18n:t,reportImage:i,toastManagerContext:(0,p.F9)()})}},844949:(e,t,i)=>{i.d(t,{X:()=>p,f:()=>d});var o=i(667294);function r(e=null,t){switch(t.type){case"REPORT_CONTENT_SHOW":return{id:t.payload.id,isProduct:t.payload.isProduct,isPromoted:t.payload.isPromoted,videoDuration:t.payload.videoDuration,viewParameter:t.payload.viewParameter,viewType:t.payload.viewType,type:t.payload.type};case"REPORT_CONTENT_DISMISS":return null;default:return e}}var s=i(425288),n=i(623568),a=i(785893);const{Provider:l,useHook:d}=(0,s.Z)("ReportData");function p({children:e}){const[t,i]=(0,o.useReducer)(r,null),s=(0,o.useCallback)((()=>i({type:"REPORT_CONTENT_DISMISS"})),[]),d=(0,o.useCallback)(((e,t,o)=>i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:o,type:"aggregatedComment"}})),[]),p=(0,o.useCallback)(((e,t,o)=>i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:o,type:"pin"}})),[]),c=(0,o.useCallback)(((e,t,o)=>{const{id:r,videos:s}=e,a=(0,n.VX)(e),l=(0,n.jL)(e);let d;if((0,n.iR)(s)&&s){const{video_list:e={}}=s,t=e[Object.keys(e)[0]];d=t&&t.duration}i({type:"REPORT_CONTENT_SHOW",payload:{id:r,isProduct:a,isPromoted:l,videoDuration:d,viewParameter:t,viewType:o,type:"pin"}})}),[]),u=(0,o.useMemo)((()=>({reportData:t,dismiss:s,reportComment:d,reportImage:p,reportPin:c})),[t,s,d,p,c]);return(0,a.jsx)(l,{value:u,children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/44513.pt_BR-07d70b770ac581c3.mjs.map