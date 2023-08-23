import{j as z}from"./jsx-runtime-4ca860c5.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const s=({label:o,size:g="normal",AllCaps:x=!1,color:v="text-primary",fontColor:_})=>z.jsx("span",{className:`${g} ${v} label`,style:{color:_,borderRadius:"1rem",padding:"0.5rem"},children:x?o.toUpperCase():o});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},AllCaps:{defaultValue:{value:"false"},description:"Capitalizr all letters",name:"AllCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-primary"},description:"Label color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tetiary"'}]}},fontColor:{defaultValue:null,description:"Font Color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const A={title:"MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label",size:"h1",color:"text-primary"}},a={args:{label:"All Caps label",size:"normal",color:"text-secondary"}},r={args:{label:"Secondary label",color:"text-tetiary"}},l={args:{label:"Custom color label",fontColor:"#5517ac"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic label',
    size: 'h1',
    color: 'text-primary'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    size: 'normal',
    color: 'text-secondary'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-tetiary'
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,C,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Custom color label',
    fontColor: '#5517ac'
  }
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,q as __namedExportsOrder,A as default};
//# sourceMappingURL=MyLabel.stories-02586215.js.map
