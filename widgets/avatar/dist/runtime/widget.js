System.register(["jimu-core","calcite-components"],(function(e,t){var r={},s={};return{setters:[function(e){r.React=e.React},function(e){s.CalciteChip=e.CalciteChip}],execute:function(){e((()=>{var e={4145:e=>{"use strict";e.exports=s},8891:e=>{"use strict";e.exports=r}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var i={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(i),a.d(i,{__set_webpack_public_path__:()=>s,default:()=>r});var e=a(8891),t=a(4145);class r extends e.React.PureComponent{constructor(e){super(e),this.state={userFullName:this.props.user.fullName,userUserName:this.props.user.username,userEmail:this.props.user.email,userRole:this.props.user.role}}render(){return e.React.createElement("div",{className:"widget-calcite jimu-widget m-2"},e.React.createElement("div",{className:"App",id:"App"},e.React.createElement(t.CalciteChip,{id:"avatarChip",value:void 0,label:"avatarChip",appearance:"solid",icon:"user",scale:this.props.config.size},this.props.config.displayName)))}}function s(e){a.p=e}})(),i})())}}}));