import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{m as c,d as s,T as S,G as C,s as $,a as D,b as L,l as w}from"./ThemeProvider-CW-Lmq7D.js";import"./index-DJO9vBfz.js";const F=c`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`,_=c`
  0% {
    transform: translateX(-15px);
  }
  50% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(-15px);
  }
`,X=c`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
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
  flex-direction: row;
  justify-content: space-between;
  width: 80px;
  height: 20px;
`,I=s.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$bgColor||e.theme.colors.text.mainText||"#003300"};
  animation: ${F} 1.5s infinite ease-in-out alternate-reverse;
`,N=s.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$bgColor||e.theme.colors.text.mainText||"#003300"};
  animation: ${_} 1.5s infinite ease-in-out alternate-reverse;
`,O=s.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$bgColor||e.theme.colors.text.mainText||"#003300"};
  animation: ${X} 1.5s infinite ease-in-out 0.75s alternate-reverse;
`,i=({bgColor:e,variants:m,...d})=>r.jsx(G,{...d,children:r.jsxs(H,{children:[r.jsx(I,{$bgColor:e}),r.jsx(N,{$bgColor:e}),r.jsx(O,{$bgColor:e})]})});i.__docgenInfo={description:"",methods:[],displayName:"EllipsisLoaderCradle"};const W={title:"EllipsisLoaderWavering",component:i,parameters:{layout:"centered",backgrounds:{default:"light"},docs:{autodocs:"tag"}},tags:["autodocs"],argTypes:{variants:{options:["dark","light","spring","summer"],description:"'dark', 'light', 'spring', 'summer'",table:{type:{summary:"string"},defaultValue:{summary:"light"},options:["dark","light","spring","summer"]}},bgColor:{table:{disable:!0}}},decorators:[e=>r.jsxs(S,{children:[r.jsx(C,{}),r.jsx(e,{})]})]},q={title:"Example/EllipsisLoadingCradle",component:i,parameters:{layout:"centered",backgrounds:{default:"light"}},tags:["autodocs"],argTypes:{bgColor:{control:"color"}}},l=e=>m=>{const{colors:d}=e,E=m.bgColor??d.primary.main;return r.jsxs(S,{children:[r.jsx(C,{}),r.jsx(i,{bgColor:E})]})},a={render:l($),argTypes:{variants:{table:{disable:!0}}}},t={render:l(D),argTypes:{variants:{table:{disable:!0}}}},n={render:l(L),argTypes:{variants:{table:{disable:!0}}}},o={render:l(w),argTypes:{variants:{table:{disable:!0}}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: createStoryForTheme(summerThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    }
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,T,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: createStoryForTheme(springThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    }
  }
}`,...(b=(T=t.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var x,y,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: createStoryForTheme(darkThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    } // Hide the \`variants\` control
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,k,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: createStoryForTheme(lightThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    } // Hide the \`variants\` control
  }
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const z=["DefaultThemeTokens2","Summer","Spring","Dark","Light"];export{n as Dark,W as DefaultThemeTokens2,o as Light,t as Spring,a as Summer,z as __namedExportsOrder,q as default};
