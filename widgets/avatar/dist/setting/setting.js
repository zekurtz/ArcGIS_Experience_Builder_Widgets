System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"],(function(e,t){var a={},n={},i={};return{setters:[function(e){a.React=e.React},function(e){n.SettingRow=e.SettingRow,n.SettingSection=e.SettingSection},function(e){i.Option=e.Option,i.Select=e.Select}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=a},726:e=>{"use strict";e.exports=i},7756:e=>{"use strict";e.exports=n}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var r={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(r),o.d(r,{__set_webpack_public_path__:()=>i,default:()=>n});var e=o(8891),t=o(7756),a=o(726);class n extends e.React.PureComponent{constructor(){super(...arguments),this.onDisplayNameChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("displayName",e.target.value)}),this.setState({displayName:e.target.value}),console.log(e.target.value)},this.onDisplaySizeChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("size",e.target.value)}),this.setState({size:e.target.value}),console.log(e.target.value)}}render(){return e.React.createElement("div",{className:"sample-js-api-widget-setting p-2"},e.React.createElement(t.SettingSection,{"aria-label":"Diplay Settings",role:"group",title:"Display Settings"},e.React.createElement(t.SettingRow,{flow:"no-wrap",label:"Display Name: "}),e.React.createElement(a.Select,{id:"displayNameSelection",onChange:e=>this.onDisplayNameChange(e)},e.React.createElement(a.Option,{value:this.props.user.fullName},"Fullname"),e.React.createElement(a.Option,{value:this.props.user.username},"Username"),e.React.createElement(a.Option,{value:this.props.user.email},"Email")),e.React.createElement(t.SettingRow,null),e.React.createElement(t.SettingRow,{flow:"no-wrap",label:"Size: "}),e.React.createElement(a.Select,{id:"sizeSelection",onChange:e=>this.onDisplaySizeChange(e)},e.React.createElement(a.Option,{value:"l"},"Large"),e.React.createElement(a.Option,{value:"m"},"Medium"),e.React.createElement(a.Option,{value:"s"},"Small"))))}}function i(e){o.p=e}})(),r})())}}}));