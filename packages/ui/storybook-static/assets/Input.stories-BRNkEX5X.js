import{j as e}from"./jsx-runtime-Bywvkw1S.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s=({label:r,helpText:h,error:a,size:O="md",prefix:m,suffix:x,fullWidth:G=!1,className:J="",id:K,...Q})=>{const f=K||`input-${Math.random().toString(36).substr(2,9)}`,U={sm:"py-1 px-3 text-sm",md:"py-2 px-4 text-base",lg:"py-3 px-5 text-lg"},X="block border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors",g=G?"w-full":"",Y=a?"border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500":"border-secondary-300 text-secondary-900 placeholder-secondary-400";return e.jsxs("div",{className:`${g}`,children:[r&&e.jsx("label",{htmlFor:f,className:"block text-sm font-medium text-secondary-700 mb-1",children:r}),e.jsxs("div",{className:"relative",children:[m&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:m}),e.jsx("input",{id:f,className:`
            ${X}
            ${U[O]}
            ${Y}
            ${m?"pl-10":""}
            ${x?"pr-10":""}
            ${g}
            ${J}
          `,...Q}),x&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:x})]}),h&&!a&&e.jsx("p",{className:"mt-1 text-sm text-secondary-500",children:h}),a&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:a})]})};try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"输入框标签",name:"label",required:!1,type:{name:"string"}},helpText:{defaultValue:null,description:"帮助文本",name:"helpText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"错误信息",name:"error",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"输入框大小",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},prefix:{defaultValue:null,description:"前缀图标或元素",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"后缀图标或元素",name:"suffix",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"是否为全宽",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const se={title:"Components/Input",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["text","password","email","number","tel","url"]},disabled:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}}}},u={args:{placeholder:"请输入..."}},l={args:{label:"用户名",placeholder:"请输入用户名"}},t={args:{label:"密码",type:"password",placeholder:"请输入密码",helpText:"密码长度至少为8位，需包含字母和数字"}},o={args:{label:"电子邮箱",type:"email",placeholder:"example@example.com",error:"请输入有效的电子邮箱地址"}},n={args:{label:"搜索",placeholder:"搜索内容...",prefix:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-secondary-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}},c={args:{label:"价格",type:"number",placeholder:"0.00",suffix:e.jsx("span",{className:"text-secondary-500",children:"¥"})}},d={render:r=>e.jsxs("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e.jsx(s,{...r,size:"sm",placeholder:"小尺寸输入框"}),e.jsx(s,{...r,size:"md",placeholder:"中尺寸输入框"}),e.jsx(s,{...r,size:"lg",placeholder:"大尺寸输入框"})]})},p={args:{label:"禁用状态",placeholder:"此输入框已禁用",disabled:!0}},i={args:{label:"全宽输入框",placeholder:"此输入框会占据整个容器宽度",fullWidth:!0},parameters:{layout:"padded"}};var y,b,F;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入...'
  }
}`,...(F=(b=u.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var B,v,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: '用户名',
    placeholder: '请输入用户名'
  }
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var E,j,w;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: '密码',
    type: 'password',
    placeholder: '请输入密码',
    helpText: '密码长度至少为8位，需包含字母和数字'
  }
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var W,D,N;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: '电子邮箱',
    type: 'email',
    placeholder: 'example@example.com',
    error: '请输入有效的电子邮箱地址'
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var z,S,A;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: '搜索',
    placeholder: '搜索内容...',
    prefix: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
  }
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var k,_,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: '价格',
    type: 'number',
    placeholder: '0.00',
    suffix: <span className="text-secondary-500">¥</span>
  }
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var $,q,V;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col space-y-4 w-[300px]">
      <Input {...args} size="sm" placeholder="小尺寸输入框" />
      <Input {...args} size="md" placeholder="中尺寸输入框" />
      <Input {...args} size="lg" placeholder="大尺寸输入框" />
    </div>
}`,...(V=(q=d.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var L,T,M;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: '禁用状态',
    placeholder: '此输入框已禁用',
    disabled: true
  }
}`,...(M=(T=p.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var R,H,P;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: '全宽输入框',
    placeholder: '此输入框会占据整个容器宽度',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(P=(H=i.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const ae=["Default","WithLabel","WithHelpText","WithError","WithPrefix","WithSuffix","Sizes","Disabled","FullWidth"];export{u as Default,p as Disabled,i as FullWidth,d as Sizes,o as WithError,t as WithHelpText,l as WithLabel,n as WithPrefix,c as WithSuffix,ae as __namedExportsOrder,se as default};
