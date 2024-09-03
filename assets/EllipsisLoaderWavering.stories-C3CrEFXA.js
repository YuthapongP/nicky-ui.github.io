import{j as r}from"./jsx-runtime-DEdD30eg.js";import{m as $,d as s,c as u,T as D,G as L,s as w,a as F,b as W,l as _}from"./ThemeProvider-DgWiNAu9.js";import"./index-RYns6xqu.js";const g=$`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`,G=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,H=s.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 80px;
  height: 20px;
`,P=s.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$bgColor??"#333"};
  animation: ${g} 1.5s infinite;
`,V=s.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$bgColor??"#333"};
  animation: ${g} 1.5s infinite 0.1s;
`,q=s.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$bgColor??"#333"};
  animation: ${g} 1.5s infinite 0.3s;
`,l=({bgColor:e,variants:c="light"})=>{const m=!!e,p=u[c]||u.light,a=m?e:p.colors.primary.dark;return console.log("ellipsisColor",a),r.jsx(G,{children:r.jsxs(H,{children:[r.jsx(P,{$bgColor:a}),r.jsx(V,{$bgColor:a}),r.jsx(q,{$bgColor:a})]})})};l.__docgenInfo={description:"",methods:[],displayName:"EllipsisLoaderWavering",props:{variants:{defaultValue:{value:'"light"',computed:!1},required:!1}}};const R={title:"EllipsisLoaderWavering",component:l,parameters:{layout:"centered",backgrounds:{default:"dark"},docs:{autodocs:"tag"}},tags:["autodocs"],argTypes:{variants:{options:["dark","light","spring","summer"],description:"'dark', 'light', 'spring', 'summer'",table:{type:{summary:"string"},defaultValue:{summary:"light"},options:["dark","light","spring","summer"]}},bgColor:{table:{disable:!0}}}},z={title:"Example/EllipsisLoaderWavering",component:l,parameters:{layout:"centered",backgrounds:{default:"dark"}},tags:["autodocs"],argTypes:{bgColor:{control:"color"}}},d=e=>c=>{const{colors:m}=e,p=c.bgColor??m.primary.main;return r.jsxs(D,{children:[r.jsx(L,{}),r.jsx(l,{bgColor:p})]})},t={render:d(w),argTypes:{variants:{table:{disable:!0}}}},o={render:d(F),argTypes:{variants:{table:{disable:!0}}}},n={render:d(W),argTypes:{variants:{table:{disable:!0}}}},i={render:d(_),argTypes:{variants:{table:{disable:!0}}}};var h,b,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: createStoryForTheme(summerThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    }
  }
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var y,k,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: createStoryForTheme(springThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    }
  }
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var f,x,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: createStoryForTheme(darkThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    } // Hide the \`variants\` control
  }
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var S,j,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: createStoryForTheme(lightThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    } // Hide the \`variants\` control
  }
}`,...(E=(j=i.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const A=["DefaultThemeTokens","Summer","Spring","Dark","Light"];export{n as Dark,R as DefaultThemeTokens,i as Light,o as Spring,t as Summer,A as __namedExportsOrder,z as default};
