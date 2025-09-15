import{j as e}from"./jsx-runtime-Bywvkw1S.js";import{B as c}from"./Button-C-KvEV4A.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s=({title:u,children:j,footer:o,shadow:v="md",className:D=""})=>{const w={none:"",sm:"shadow-sm",md:"shadow",lg:"shadow-lg"};return e.jsxs("div",{className:`bg-white rounded-lg border border-secondary-200 overflow-hidden ${w[v]} ${D}`,children:[u&&e.jsx("div",{className:"px-6 py-4 border-b border-secondary-200",children:e.jsx("h3",{className:"text-lg font-medium text-secondary-900",children:u})}),e.jsx("div",{className:"px-6 py-4",children:j}),o&&e.jsx("div",{className:"px-6 py-4 bg-secondary-50 border-t border-secondary-200",children:o})]})};try{s.displayName="Card",s.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"卡片标题",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"卡片内容",name:"children",required:!0,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"卡片底部内容",name:"footer",required:!1,type:{name:"ReactNode"}},shadow:{defaultValue:{value:"md"},description:"是否有阴影",name:"shadow",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},className:{defaultValue:{value:""},description:"自定义类名",name:"className",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Components/Card",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{shadow:{control:{type:"select"},options:["none","sm","md","lg"]}}},a={args:{title:"卡片标题",children:e.jsx("p",{className:"text-secondary-700",children:"这是一个简单的卡片内容示例，您可以在这里放置任何内容。"})}},r={args:{title:"带有底部的卡片",children:e.jsx("p",{className:"text-secondary-700",children:"这个卡片包含底部操作区域，通常用于放置按钮或其他操作元素。"}),footer:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx(c,{variant:"outline",size:"sm",children:"取消"}),e.jsx(c,{variant:"primary",size:"sm",children:"确认"})]})}},t={args:{children:e.jsx("p",{className:"text-secondary-700",children:"这是一个没有标题的卡片示例，只包含内容部分。"})}},n={args:{title:"长内容卡片",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-secondary-700",children:"这是一个包含较长内容的卡片示例。"}),e.jsx("p",{className:"text-secondary-700",children:"您可以在卡片中放置任意数量的内容，卡片会自动调整高度以适应内容。"}),e.jsx("p",{className:"text-secondary-700",children:"这对于展示详细信息、文章摘要或其他需要更多空间的内容非常有用。"})]}),footer:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-secondary-500",children:"最后更新: 2025-09-14"}),e.jsx(c,{variant:"primary",size:"sm",children:"查看更多"})]})}},d={render:u=>e.jsxs("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e.jsx(s,{...u,shadow:"none",title:"无阴影",children:e.jsx("p",{className:"text-secondary-700",children:"这是一个没有阴影的卡片示例。"})}),e.jsx(s,{...u,shadow:"sm",title:"小阴影",children:e.jsx("p",{className:"text-secondary-700",children:"这是一个小阴影的卡片示例。"})}),e.jsx(s,{...u,shadow:"md",title:"中阴影",children:e.jsx("p",{className:"text-secondary-700",children:"这是一个中阴影的卡片示例。"})}),e.jsx(s,{...u,shadow:"lg",title:"大阴影",children:e.jsx("p",{className:"text-secondary-700",children:"这是一个大阴影的卡片示例。"})})]})};var l,i,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: '卡片标题',
    children: <p className="text-secondary-700">这是一个简单的卡片内容示例，您可以在这里放置任何内容。</p>
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,x,F;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: '带有底部的卡片',
    children: <p className="text-secondary-700">这个卡片包含底部操作区域，通常用于放置按钮或其他操作元素。</p>,
    footer: <div className="flex justify-end space-x-2">
        <Button variant="outline" size="sm">取消</Button>
        <Button variant="primary" size="sm">确认</Button>
      </div>
  }
}`,...(F=(x=r.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var E,h,y;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: <p className="text-secondary-700">这是一个没有标题的卡片示例，只包含内容部分。</p>
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,N,f;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: '长内容卡片',
    children: <div className="space-y-4">
        <p className="text-secondary-700">这是一个包含较长内容的卡片示例。</p>
        <p className="text-secondary-700">您可以在卡片中放置任意数量的内容，卡片会自动调整高度以适应内容。</p>
        <p className="text-secondary-700">这对于展示详细信息、文章摘要或其他需要更多空间的内容非常有用。</p>
      </div>,
    footer: <div className="flex justify-between items-center">
        <span className="text-sm text-secondary-500">最后更新: 2025-09-14</span>
        <Button variant="primary" size="sm">查看更多</Button>
      </div>
  }
}`,...(f=(N=n.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var A,C,g;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col space-y-4 w-[300px]">
      <Card {...args} shadow="none" title="无阴影">
        <p className="text-secondary-700">这是一个没有阴影的卡片示例。</p>
      </Card>
      <Card {...args} shadow="sm" title="小阴影">
        <p className="text-secondary-700">这是一个小阴影的卡片示例。</p>
      </Card>
      <Card {...args} shadow="md" title="中阴影">
        <p className="text-secondary-700">这是一个中阴影的卡片示例。</p>
      </Card>
      <Card {...args} shadow="lg" title="大阴影">
        <p className="text-secondary-700">这是一个大阴影的卡片示例。</p>
      </Card>
    </div>
}`,...(g=(C=d.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const V=["Default","WithFooter","NoTitle","WithLongContent","DifferentShadows"];export{a as Default,d as DifferentShadows,t as NoTitle,r as WithFooter,n as WithLongContent,V as __namedExportsOrder,q as default};
