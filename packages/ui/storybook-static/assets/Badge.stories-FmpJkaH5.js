import{j as e}from"./jsx-runtime-Bywvkw1S.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=({children:r,variant:R="primary",size:$="md",rounded:M=!1,className:P=""})=>{const O={primary:"bg-primary-100 text-primary-800",secondary:"bg-secondary-100 text-secondary-800",success:"bg-green-100 text-green-800",danger:"bg-red-100 text-red-800",warning:"bg-yellow-100 text-yellow-800",info:"bg-blue-100 text-blue-800"},T={sm:"text-xs px-2 py-0.5",md:"text-sm px-2.5 py-0.5",lg:"text-base px-3 py-1"},G=M?"rounded-full":"rounded";return e.jsx("span",{className:`inline-flex items-center font-medium ${O[R]} ${T[$]} ${G} ${P}`,children:r})};try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{children:{defaultValue:null,description:"徽章内容",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"徽章变体",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},size:{defaultValue:{value:"md"},description:"徽章大小",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},rounded:{defaultValue:{value:"false"},description:"是否为圆形徽章",name:"rounded",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"自定义类名",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Q={title:"Components/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info"]},size:{control:{type:"select"},options:["sm","md","lg"]},rounded:{control:{type:"boolean"}}}},s={args:{children:"新功能",variant:"primary"}},n={args:{children:"标签",variant:"secondary"}},t={args:{children:"成功",variant:"success"}},o={args:{children:"错误",variant:"danger"}},c={args:{children:"警告",variant:"warning"}},i={args:{children:"信息",variant:"info"}},d={args:{children:"圆形",variant:"primary",rounded:!0}},u={render:r=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{...r,size:"sm",children:"小"}),e.jsx(a,{...r,size:"md",children:"中"}),e.jsx(a,{...r,size:"lg",children:"大"})]}),args:{variant:"primary"}},l={args:{children:e.jsxs("span",{className:"flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"热门"]}),variant:"danger"}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: '新功能',
    variant: 'primary'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,y,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: '标签',
    variant: 'secondary'
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,f,B;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: '成功',
    variant: 'success'
  }
}`,...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var w,F,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: '错误',
    variant: 'danger'
  }
}`,...(E=(F=o.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var S,z,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: '警告',
    variant: 'warning'
  }
}`,...(j=(z=c.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var N,b,D;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: '信息',
    variant: 'info'
  }
}`,...(D=(b=i.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var _,C,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: '圆形',
    variant: 'primary',
    rounded: true
  }
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var A,V,L;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Badge {...args} size="sm">小</Badge>
      <Badge {...args} size="md">中</Badge>
      <Badge {...args} size="lg">大</Badge>
    </div>,
  args: {
    variant: 'primary'
  }
}`,...(L=(V=u.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var W,q,I;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: <span className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        热门
      </span>,
    variant: 'danger'
  }
}`,...(I=(q=l.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};const U=["Primary","Secondary","Success","Danger","Warning","Info","Rounded","Sizes","WithIcon"];export{o as Danger,i as Info,s as Primary,d as Rounded,n as Secondary,u as Sizes,t as Success,c as Warning,l as WithIcon,U as __namedExportsOrder,Q as default};
