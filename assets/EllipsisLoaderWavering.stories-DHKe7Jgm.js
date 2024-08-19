import{j as D}from"./jsx-runtime-CkxqCPlQ.js";import{R as O,r as G}from"./index-DJO9vBfz.js";var A=function(){return A=Object.assign||function(t){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},A.apply(this,arguments)};function J(e,t,r){if(r||arguments.length===2)for(var n=0,s=t.length,o;n<s;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var y="-ms-",ue="-moz-",g="-webkit-",qt="comm",Pe="rule",st="decl",kr="@import",zt="@keyframes",Ar="@layer",Wt=Math.abs,ot=String.fromCharCode,Xe=Object.assign;function Ir(e,t){return k(e,0)^45?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}function Yt(e){return e.trim()}function $(e,t){return(e=t.exec(e))?e[0]:e}function l(e,t,r){return e.replace(t,r)}function Ce(e,t,r){return e.indexOf(t,r)}function k(e,t){return e.charCodeAt(t)|0}function Z(e,t,r){return e.slice(t,r)}function N(e){return e.length}function Kt(e){return e.length}function ce(e,t){return t.push(e),e}function Fr(e,t){return e.map(t).join("")}function bt(e,t){return e.filter(function(r){return!$(r,t)})}var Ne=1,Q=1,Xt=0,R=0,E=0,re="";function De(e,t,r,n,s,o,a,i){return{value:e,root:t,parent:r,type:n,props:s,children:o,line:Ne,column:Q,length:a,return:"",siblings:i}}function B(e,t){return Xe(De("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function K(e){for(;e.root;)e=B(e.root,{children:[e]});ce(e,e.siblings)}function Rr(){return E}function Or(){return E=R>0?k(re,--R):0,Q--,E===10&&(Q=1,Ne--),E}function P(){return E=R<Xt?k(re,R++):0,Q++,E===10&&(Q=1,Ne++),E}function z(){return k(re,R)}function xe(){return R}function je(e,t){return Z(re,e,t)}function Je(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pr(e){return Ne=Q=1,Xt=N(re=e),R=0,[]}function Nr(e){return re="",e}function ze(e){return Yt(je(R-1,Ze(e===91?e+2:e===40?e+1:e)))}function Dr(e){for(;(E=z())&&E<33;)P();return Je(e)>2||Je(E)>3?"":" "}function jr(e,t){for(;--t&&P()&&!(E<48||E>102||E>57&&E<65||E>70&&E<97););return je(e,xe()+(t<6&&z()==32&&P()==32))}function Ze(e){for(;P();)switch(E){case e:return R;case 34:case 39:e!==34&&e!==39&&Ze(E);break;case 40:e===41&&Ze(e);break;case 92:P();break}return R}function $r(e,t){for(;P()&&e+E!==57;)if(e+E===84&&z()===47)break;return"/*"+je(t,R-1)+"*"+ot(e===47?e:P())}function Lr(e){for(;!Je(z());)P();return je(e,R)}function Mr(e){return Nr(Ee("",null,null,null,[""],e=Pr(e),0,[0],e))}function Ee(e,t,r,n,s,o,a,i,c){for(var u=0,p=0,f=a,h=0,m=0,S=0,C=1,I=1,x=1,_=0,v="",w=s,T=o,b=n,d=v;I;)switch(S=_,_=P()){case 40:if(S!=108&&k(d,f-1)==58){Ce(d+=l(ze(_),"&","&\f"),"&\f",Wt(u?i[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:d+=ze(_);break;case 9:case 10:case 13:case 32:d+=Dr(S);break;case 92:d+=jr(xe()-1,7);continue;case 47:switch(z()){case 42:case 47:ce(Br($r(P(),xe()),t,r,c),c);break;default:d+="/"}break;case 123*C:i[u++]=N(d)*x;case 125*C:case 59:case 0:switch(_){case 0:case 125:I=0;case 59+p:x==-1&&(d=l(d,/\f/g,"")),m>0&&N(d)-f&&ce(m>32?vt(d+";",n,r,f-1,c):vt(l(d," ","")+";",n,r,f-2,c),c);break;case 59:d+=";";default:if(ce(b=yt(d,t,r,u,p,s,i,v,w=[],T=[],f,o),o),_===123)if(p===0)Ee(d,t,b,b,w,o,f,i,T);else switch(h===99&&k(d,3)===110?100:h){case 100:case 108:case 109:case 115:Ee(e,b,b,n&&ce(yt(e,b,b,0,0,s,i,v,s,w=[],f,T),T),s,T,f,i,n?w:T);break;default:Ee(d,b,b,b,[""],T,0,i,T)}}u=p=m=0,C=x=1,v=d="",f=a;break;case 58:f=1+N(d),m=S;default:if(C<1){if(_==123)--C;else if(_==125&&C++==0&&Or()==125)continue}switch(d+=ot(_),_*C){case 38:x=p>0?1:(d+="\f",-1);break;case 44:i[u++]=(N(d)-1)*x,x=1;break;case 64:z()===45&&(d+=ze(P())),h=z(),p=f=N(v=d+=Lr(xe())),_++;break;case 45:S===45&&N(d)==2&&(C=0)}}return o}function yt(e,t,r,n,s,o,a,i,c,u,p,f){for(var h=s-1,m=s===0?o:[""],S=Kt(m),C=0,I=0,x=0;C<n;++C)for(var _=0,v=Z(e,h+1,h=Wt(I=a[C])),w=e;_<S;++_)(w=Yt(I>0?m[_]+" "+v:l(v,/&\f/g,m[_])))&&(c[x++]=w);return De(e,t,r,s===0?Pe:i,c,u,p,f)}function Br(e,t,r,n){return De(e,t,r,qt,ot(Rr()),Z(e,2,-2),0,n)}function vt(e,t,r,n,s){return De(e,t,r,st,Z(e,0,n),Z(e,n+1,-1),n,s)}function Jt(e,t,r){switch(Ir(e,t)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 4789:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+ue+e+y+e+e;case 5936:switch(k(e,t+11)){case 114:return g+e+y+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+y+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+y+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return g+e+y+e+e;case 6165:return g+e+y+"flex-"+e+e;case 5187:return g+e+l(e,/(\w+).+(:[^]+)/,g+"box-$1$2"+y+"flex-$1$2")+e;case 5443:return g+e+y+"flex-item-"+l(e,/flex-|-self/g,"")+($(e,/flex-|baseline/)?"":y+"grid-row-"+l(e,/flex-|-self/g,""))+e;case 4675:return g+e+y+"flex-line-pack"+l(e,/align-content|flex-|-self/g,"")+e;case 5548:return g+e+y+l(e,"shrink","negative")+e;case 5292:return g+e+y+l(e,"basis","preferred-size")+e;case 6060:return g+"box-"+l(e,"-grow","")+g+e+y+l(e,"grow","positive")+e;case 4554:return g+l(e,/([^-])(transform)/g,"$1"+g+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,g+"box-pack:$3"+y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4200:if(!$(e,/flex-|baseline/))return y+"grid-column-align"+Z(e,t)+e;break;case 2592:case 3360:return y+l(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,s){return t=s,$(n.props,/grid-\w+-end/)})?~Ce(e+(r=r[t].value),"span",0)?e:y+l(e,"-start","")+e+y+"grid-row-span:"+(~Ce(r,"span",0)?$(r,/\d+/):+$(r,/\d+/)-+$(e,/\d+/))+";":y+l(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return $(n.props,/grid-\w+-start/)})?e:y+l(l(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(N(e)-1-t>6)switch(k(e,t+1)){case 109:if(k(e,t+4)!==45)break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+g+"$2-$3$1"+ue+(k(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ce(e,"stretch",0)?Jt(l(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return l(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,o,a,i,c,u){return y+s+":"+o+u+(a?y+s+"-span:"+(i?c:+c-+o)+u:"")+e});case 4949:if(k(e,t+6)===121)return l(e,":",":"+g)+e;break;case 6444:switch(k(e,k(e,14)===45?18:11)){case 120:return l(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+g+(k(e,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+y+"$2box$3")+e;case 100:return l(e,":",":"+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return l(e,"scroll-","scroll-snap-")+e}return e}function Ae(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Gr(e,t,r,n){switch(e.type){case Ar:if(e.children.length)break;case kr:case st:return e.return=e.return||e.value;case qt:return"";case zt:return e.return=e.value+"{"+Ae(e.children,n)+"}";case Pe:if(!N(e.value=e.props.join(",")))return""}return N(r=Ae(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ur(e){var t=Kt(e);return function(r,n,s,o){for(var a="",i=0;i<t;i++)a+=e[i](r,n,s,o)||"";return a}}function Hr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case st:e.return=Jt(e.value,e.length,r);return;case zt:return Ae([B(e,{value:l(e.value,"@","@"+g)})],n);case Pe:if(e.length)return Fr(r=e.props,function(s){switch($(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":K(B(e,{props:[l(s,/:(read-\w+)/,":"+ue+"$1")]})),K(B(e,{props:[s]})),Xe(e,{props:bt(r,n)});break;case"::placeholder":K(B(e,{props:[l(s,/:(plac\w+)/,":"+g+"input-$1")]})),K(B(e,{props:[l(s,/:(plac\w+)/,":"+ue+"$1")]})),K(B(e,{props:[l(s,/:(plac\w+)/,y+"input-$1")]})),K(B(e,{props:[s]})),Xe(e,{props:bt(r,n)});break}return""})}}var qr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},F={REACT_APP_CREDENTIALS:"13834678",NVM_RC_VERSION:"",MANPATH:":/usr/share/man:/usr/local/share/man:/opt/homebrew/share/man:",TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/mbs/personal-projects/TestBuild",NVM_CD_FLAGS:"-q",TERM:"xterm-256color",SHELL:"/bin/zsh",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/x1/3x7hnckn4cvcwlgxpfwjw2j40000gn/T/",npm_config_global_prefix:"/usr/local",CONDA_SHLVL:"1",TERM_PROGRAM_VERSION:"1.82.2",CONDA_PROMPT_MODIFIER:"(base) ",ZDOTDIR:"/Users/mbs",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/mbs/personal-projects/TestBuild",NVM_DIR:"~/.nvm",USER:"mbs",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/usr/local/etc/npmrc",CONDA_EXE:"/Users/mbs/anaconda3/bin/conda",POSTGRES_HOME:"/Applications/Postgres.app/Contents/Versions/15",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.4HPhqxAnq9/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",_CE_CONDA:"",PATH:"/Users/mbs/personal-projects/TestBuild/node_modules/.bin:/Users/mbs/personal-projects/TestBuild/node_modules/.bin:/Users/mbs/personal-projects/node_modules/.bin:/Users/mbs/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/Cellar/gcc/5.2.0/bin:/Library/Frameworks/Python.framework/Versions/3.12/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Applications/Postgres.app/Contents/Versions/15/bin:/Users/mbs/Apps/apache-maven-3.9.3/bin:/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home/bin:/usr/local/Cellar/gcc/5.2.0/bin:/Users/mbs/anaconda3/bin:/Users/mbs/anaconda3/condabin:/Library/Frameworks/Python.framework/Versions/3.12/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/mysql/bin",npm_package_json:"/Users/mbs/personal-projects/TestBuild/package.json",_:"/Users/mbs/personal-projects/TestBuild/node_modules/.bin/storybook",npm_config_userconfig:"/Users/mbs/.npmrc",npm_config_init_module:"/Users/mbs/.npm-init.js",USER_ZDOTDIR:"/Users/mbs",CONDA_PREFIX:"/Users/mbs/anaconda3",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"exec",PWD:"/Users/mbs/personal-projects/TestBuild",JAVA_HOME:"/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home",npm_lifecycle_event:"npx",EDITOR:"vi",npm_package_name:"@nickypo/lib",LANG:"en_US.UTF-8",npm_config_npm_version:"10.8.2",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",XPC_FLAGS:"0x0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"1.0.10",_CE_M:"",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",M2_HOME:"/Users/mbs/Apps/apache-maven-3.9.3",SHLVL:"2",HOME:"/Users/mbs",VSCODE_GIT_ASKPASS_MAIN:"/private/var/folders/x1/3x7hnckn4cvcwlgxpfwjw2j40000gn/T/AppTranslocation/1990F557-587A-4FB6-82C4-B6CAA393C2EA/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/mbs/.npm",CONDA_PYTHON_EXE:"/Users/mbs/anaconda3/bin/python",LOGNAME:"mbs",npm_lifecycle_script:"storybook",VSCODE_GIT_IPC_HANDLE:"/var/folders/x1/3x7hnckn4cvcwlgxpfwjw2j40000gn/T/vscode-git-37d79ad1fa.sock",CONDA_DEFAULT_ENV:"base",npm_config_user_agent:"npm/10.8.2 node/v21.7.3 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/private/var/folders/x1/3x7hnckn4cvcwlgxpfwjw2j40000gn/T/AppTranslocation/1990F557-587A-4FB6-82C4-B6CAA393C2EA/d/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/private/var/folders/x1/3x7hnckn4cvcwlgxpfwjw2j40000gn/T/AppTranslocation/1990F557-587A-4FB6-82C4-B6CAA393C2EA/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/usr/local/bin/node",npm_config_prefix:"/usr/local",COLORTERM:"truecolor",NODE_ENV:"production"},ee=typeof process<"u"&&F!==void 0&&(F.REACT_APP_SC_ATTR||F.SC_ATTR)||"data-styled",Zt="active",Qt="data-styled-version",$e="6.1.12",at=`/*!sc*/
`,Ie=typeof window<"u"&&"HTMLElement"in window,zr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&F!==void 0&&F.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&F.REACT_APP_SC_DISABLE_SPEEDY!==""?F.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&F.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&F!==void 0&&F.SC_DISABLE_SPEEDY!==void 0&&F.SC_DISABLE_SPEEDY!==""&&F.SC_DISABLE_SPEEDY!=="false"&&F.SC_DISABLE_SPEEDY),Wr={},Le=Object.freeze([]),te=Object.freeze({});function er(e,t,r){return r===void 0&&(r=te),e.theme!==r.theme&&e.theme||t||r.theme}var tr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Yr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kr=/(^-|-$)/g;function St(e){return e.replace(Yr,"-").replace(Kr,"")}var Xr=/(a)(d)/gi,be=52,_t=function(e){return String.fromCharCode(e+(e>25?39:97))};function Qe(e){var t,r="";for(t=Math.abs(e);t>be;t=t/be|0)r=_t(t%be)+r;return(_t(t%be)+r).replace(Xr,"$1-$2")}var We,rr=5381,X=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},nr=function(e){return X(rr,e)};function it(e){return Qe(nr(e)>>>0)}function Jr(e){return e.displayName||e.name||"Component"}function Ye(e){return typeof e=="string"&&!0}var sr=typeof Symbol=="function"&&Symbol.for,or=sr?Symbol.for("react.memo"):60115,Zr=sr?Symbol.for("react.forward_ref"):60112,Qr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},en={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ar={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tn=((We={})[Zr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},We[or]=ar,We);function wt(e){return("type"in(t=e)&&t.type.$$typeof)===or?ar:"$$typeof"in e?tn[e.$$typeof]:Qr;var t}var rn=Object.defineProperty,nn=Object.getOwnPropertyNames,Ct=Object.getOwnPropertySymbols,sn=Object.getOwnPropertyDescriptor,on=Object.getPrototypeOf,xt=Object.prototype;function ir(e,t,r){if(typeof t!="string"){if(xt){var n=on(t);n&&n!==xt&&ir(e,n,r)}var s=nn(t);Ct&&(s=s.concat(Ct(t)));for(var o=wt(e),a=wt(t),i=0;i<s.length;++i){var c=s[i];if(!(c in en||r&&r[c]||a&&c in a||o&&c in o)){var u=sn(t,c);try{rn(e,c,u)}catch{}}}}return e}function W(e){return typeof e=="function"}function ct(e){return typeof e=="object"&&"styledComponentId"in e}function q(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Fe(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function le(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function et(e,t,r){if(r===void 0&&(r=!1),!r&&!le(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=et(e[n],t[n]);else if(le(t))for(var n in t)e[n]=et(e[n],t[n]);return e}function ut(e,t){Object.defineProperty(e,"toString",{value:t})}function Y(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var an=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,o=s;t>=o;)if((o<<=1)<0)throw Y(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(t+1),c=(a=0,r.length);a<c;a++)this.tag.insertRule(i,r[a])&&(this.groupSizes[t]++,i++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),s=n+r;this.groupSizes[t]=0;for(var o=n;o<s;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],s=this.indexOfGroup(t),o=s+n,a=s;a<o;a++)r+="".concat(this.tag.getRule(a)).concat(at);return r},e}(),Te=new Map,Re=new Map,ke=1,ye=function(e){if(Te.has(e))return Te.get(e);for(;Re.has(ke);)ke++;var t=ke++;return Te.set(e,t),Re.set(t,e),t},cn=function(e,t){ke=t+1,Te.set(e,t),Re.set(t,e)},un="style[".concat(ee,"][").concat(Qt,'="').concat($e,'"]'),ln=new RegExp("^".concat(ee,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),pn=function(e,t,r){for(var n,s=r.split(","),o=0,a=s.length;o<a;o++)(n=s[o])&&e.registerName(t,n)},dn=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(at),s=[],o=0,a=n.length;o<a;o++){var i=n[o].trim();if(i){var c=i.match(ln);if(c){var u=0|parseInt(c[1],10),p=c[2];u!==0&&(cn(p,u),pn(e,p,c[3]),e.getTag().insertRules(u,s)),s.length=0}else s.push(i)}}},Et=function(e){for(var t=document.querySelectorAll(un),r=0,n=t.length;r<n;r++){var s=t[r];s&&s.getAttribute(ee)!==Zt&&(dn(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function fn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cr=function(e){var t=document.head,r=e||t,n=document.createElement("style"),s=function(i){var c=Array.from(i.querySelectorAll("style[".concat(ee,"]")));return c[c.length-1]}(r),o=s!==void 0?s.nextSibling:null;n.setAttribute(ee,Zt),n.setAttribute(Qt,$e);var a=fn();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},mn=function(){function e(t){this.element=cr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,o=n.length;s<o;s++){var a=n[s];if(a.ownerNode===r)return a}throw Y(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),hn=function(){function e(t){this.element=cr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),gn=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Tt=Ie,bn={isServer:!Ie,useCSSOMInjection:!zr},Oe=function(){function e(t,r,n){t===void 0&&(t=te),r===void 0&&(r={});var s=this;this.options=A(A({},bn),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Ie&&Tt&&(Tt=!1,Et(this)),ut(this,function(){return function(o){for(var a=o.getTag(),i=a.length,c="",u=function(f){var h=function(x){return Re.get(x)}(f);if(h===void 0)return"continue";var m=o.names.get(h),S=a.getGroup(f);if(m===void 0||!m.size||S.length===0)return"continue";var C="".concat(ee,".g").concat(f,'[id="').concat(h,'"]'),I="";m!==void 0&&m.forEach(function(x){x.length>0&&(I+="".concat(x,","))}),c+="".concat(S).concat(C,'{content:"').concat(I,'"}').concat(at)},p=0;p<i;p++)u(p);return c}(s)})}return e.registerId=function(t){return ye(t)},e.prototype.rehydrate=function(){!this.server&&Ie&&Et(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(A(A({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new gn(s):n?new mn(s):new hn(s)}(this.options),new an(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ye(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ye(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ye(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yn=/&/g,vn=/^\s*\/\/.*$/gm;function ur(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=ur(r.children,t)),r})}function Sn(e){var t,r,n,s=te,o=s.options,a=o===void 0?te:o,i=s.plugins,c=i===void 0?Le:i,u=function(h,m,S){return S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(t):h},p=c.slice();p.push(function(h){h.type===Pe&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(yn,r).replace(n,u))}),a.prefix&&p.push(Vr),p.push(Gr);var f=function(h,m,S,C){m===void 0&&(m=""),S===void 0&&(S=""),C===void 0&&(C="&"),t=C,r=m,n=new RegExp("\\".concat(r,"\\b"),"g");var I=h.replace(vn,""),x=Mr(S||m?"".concat(S," ").concat(m," { ").concat(I," }"):I);a.namespace&&(x=ur(x,a.namespace));var _=[];return Ae(x,Ur(p.concat(Hr(function(v){return _.push(v)})))),_};return f.hash=c.length?c.reduce(function(h,m){return m.name||Y(15),X(h,m.name)},rr).toString():"",f}var _n=new Oe,tt=Sn(),lr=O.createContext({shouldForwardProp:void 0,styleSheet:_n,stylis:tt});lr.Consumer;O.createContext(void 0);function rt(){return G.useContext(lr)}var pr=function(){function e(t,r){var n=this;this.inject=function(s,o){o===void 0&&(o=tt);var a=n.name+o.hash;s.hasNameForId(n.id,a)||s.insertRules(n.id,a,o(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,ut(this,function(){throw Y(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=tt),this.name+t.hash},e}(),wn=function(e){return e>="A"&&e<="Z"};function kt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;wn(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var dr=function(e){return e==null||e===!1||e===""},fr=function(e){var t,r,n=[];for(var s in e){var o=e[s];e.hasOwnProperty(s)&&!dr(o)&&(Array.isArray(o)&&o.isCss||W(o)?n.push("".concat(kt(s),":"),o,";"):le(o)?n.push.apply(n,J(J(["".concat(s," {")],fr(o),!1),["}"],!1)):n.push("".concat(kt(s),": ").concat((t=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in qr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function U(e,t,r,n){if(dr(e))return[];if(ct(e))return[".".concat(e.styledComponentId)];if(W(e)){if(!W(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var s=e(t);return U(s,t,r,n)}var o;return e instanceof pr?r?(e.inject(r,n),[e.getName(n)]):[e]:le(e)?fr(e):Array.isArray(e)?Array.prototype.concat.apply(Le,e.map(function(a){return U(a,t,r,n)})):[e.toString()]}function mr(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(W(r)&&!ct(r))return!1}return!0}var Cn=nr($e),xn=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&mr(t),this.componentId=r,this.baseHash=X(Cn,r),this.baseStyle=n,Oe.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=q(s,this.staticRulesId);else{var o=Fe(U(this.rules,t,r,n)),a=Qe(X(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,i)}s=q(s,a),this.staticRulesId=a}else{for(var c=X(this.baseHash,n.hash),u="",p=0;p<this.rules.length;p++){var f=this.rules[p];if(typeof f=="string")u+=f;else if(f){var h=Fe(U(f,t,r,n));c=X(c,h+p),u+=h}}if(u){var m=Qe(c>>>0);r.hasNameForId(this.componentId,m)||r.insertRules(this.componentId,m,n(u,".".concat(m),void 0,this.componentId)),s=q(s,m)}}return s},e}(),pe=O.createContext(void 0);pe.Consumer;function En(e){var t=O.useContext(pe),r=G.useMemo(function(){return function(n,s){if(!n)throw Y(14);if(W(n)){var o=n(s);return o}if(Array.isArray(n)||typeof n!="object")throw Y(8);return s?A(A({},s),n):n}(e.theme,t)},[e.theme,t]);return e.children?O.createElement(pe.Provider,{value:r},e.children):null}var Ke={};function Tn(e,t,r){var n=ct(e),s=e,o=!Ye(e),a=t.attrs,i=a===void 0?Le:a,c=t.componentId,u=c===void 0?function(w,T){var b=typeof w!="string"?"sc":St(w);Ke[b]=(Ke[b]||0)+1;var d="".concat(b,"-").concat(it($e+b+Ke[b]));return T?"".concat(T,"-").concat(d):d}(t.displayName,t.parentComponentId):c,p=t.displayName,f=p===void 0?function(w){return Ye(w)?"styled.".concat(w):"Styled(".concat(Jr(w),")")}(e):p,h=t.displayName&&t.componentId?"".concat(St(t.displayName),"-").concat(t.componentId):t.componentId||u,m=n&&s.attrs?s.attrs.concat(i).filter(Boolean):i,S=t.shouldForwardProp;if(n&&s.shouldForwardProp){var C=s.shouldForwardProp;if(t.shouldForwardProp){var I=t.shouldForwardProp;S=function(w,T){return C(w,T)&&I(w,T)}}else S=C}var x=new xn(r,h,n?s.componentStyle:void 0);function _(w,T){return function(b,d,se){var de=b.attrs,Sr=b.componentStyle,_r=b.defaultProps,wr=b.foldedComponentIds,Cr=b.styledComponentId,xr=b.target,Er=O.useContext(pe),Tr=rt(),He=b.shouldForwardProp||Tr.shouldForwardProp,ht=er(d,Er,_r)||te,j=function(me,ae,he){for(var ie,H=A(A({},ae),{className:void 0,theme:he}),qe=0;qe<me.length;qe+=1){var ge=W(ie=me[qe])?ie(H):ie;for(var M in ge)H[M]=M==="className"?q(H[M],ge[M]):M==="style"?A(A({},H[M]),ge[M]):ge[M]}return ae.className&&(H.className=q(H.className,ae.className)),H}(de,d,ht),fe=j.as||xr,oe={};for(var L in j)j[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&j.theme===ht||(L==="forwardedAs"?oe.as=j.forwardedAs:He&&!He(L,fe)||(oe[L]=j[L]));var gt=function(me,ae){var he=rt(),ie=me.generateAndInjectStyles(ae,he.styleSheet,he.stylis);return ie}(Sr,j),Ve=q(wr,Cr);return gt&&(Ve+=" "+gt),j.className&&(Ve+=" "+j.className),oe[Ye(fe)&&!tr.has(fe)?"class":"className"]=Ve,oe.ref=se,G.createElement(fe,oe)}(v,w,T)}_.displayName=f;var v=O.forwardRef(_);return v.attrs=m,v.componentStyle=x,v.displayName=f,v.shouldForwardProp=S,v.foldedComponentIds=n?q(s.foldedComponentIds,s.styledComponentId):"",v.styledComponentId=h,v.target=n?s.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=n?function(T){for(var b=[],d=1;d<arguments.length;d++)b[d-1]=arguments[d];for(var se=0,de=b;se<de.length;se++)et(T,de[se],!0);return T}({},s.defaultProps,w):w}}),ut(v,function(){return".".concat(v.styledComponentId)}),o&&ir(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function At(e,t){for(var r=[e[0]],n=0,s=t.length;n<s;n+=1)r.push(t[n],e[n+1]);return r}var It=function(e){return Object.assign(e,{isCss:!0})};function Me(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(W(e)||le(e))return It(U(At(Le,J([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?U(n):It(U(At(n,t)))}function nt(e,t,r){if(r===void 0&&(r=te),!t)throw Y(1,t);var n=function(s){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,r,Me.apply(void 0,J([s],o,!1)))};return n.attrs=function(s){return nt(e,t,A(A({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return nt(e,t,A(A({},r),s))},n}var hr=function(e){return nt(Tn,e)},ne=hr;tr.forEach(function(e){ne[e]=hr(e)});var kn=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=mr(t),Oe.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,s){var o=s(Fe(U(this.rules,r,n,s)),""),a=this.componentId+t;n.insertRules(a,a,o)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,s){t>2&&Oe.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,s)},e}();function gr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Me.apply(void 0,J([e],t,!1)),s="sc-global-".concat(it(JSON.stringify(n))),o=new kn(n,s),a=function(c){var u=rt(),p=O.useContext(pe),f=O.useRef(u.styleSheet.allocateGSInstance(s)).current;return u.styleSheet.server&&i(f,c,u.styleSheet,p,u.stylis),O.useLayoutEffect(function(){if(!u.styleSheet.server)return i(f,c,u.styleSheet,p,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,p,u.stylis]),null};function i(c,u,p,f,h){if(o.isStatic)o.renderStyles(c,Wr,p,h);else{var m=A(A({},u),{theme:er(u,f,a.defaultProps)});o.renderStyles(c,m,p,h)}}return O.memo(a)}function An(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Fe(Me.apply(void 0,J([e],t,!1))),s=it(n);return new pr(s,n)}const Be={typography:{fontFamily:"Roboto, sans-serif"},spacing:{small:"8px",medium:"16px",large:"24px"}},lt={...Be,colors:{primary:{main:"#CEE5F5",light:"#E0F2F1",dark:"#0288D1"},secondary:{main:"#FF7043",light:"#FFAB91",dark:"#D84315"},accent:{main:"#FFF176",light:"#FFECB3",dark:"#FBC02D"},background:"#F5F5F5",text:{mainText:"#333333",secondaryText:"#757575"}},typography:{fontFamily:"Roboto, sans-serif"},spacing:{small:"8px",medium:"16px",large:"24px"}},pt={...Be,colors:{primary:{main:"#333333",light:"#4F4F4F",dark:"#1A1A1A"},secondary:{main:"#666666",light:"#808080",dark:"#4C4C4C"},accent:{main:"#ebebeb",light:"#FFFFFF",dark:"#b5b0b0"},background:"#121212",text:{mainText:"#FFFFFF",secondaryText:"#BDBDBD"}}},dt={...Be,colors:{primary:{main:"#FFA726",light:"#FFCC80",dark:"#FB8C00"},secondary:{main:"#FF7043",light:"#FFAB91",dark:"#D84315"},accent:{main:"#FF5252",light:"#FF867C",dark:"#E53935"},background:"#FFECB3",text:{mainText:"#333",secondaryText:"#666"}}},ft={...Be,colors:{primary:{main:"#66BB6A",light:"#81C784",dark:"#388E3C"},secondary:{main:"#FF7043",light:"#FFAB91",dark:"#D84315"},accent:{main:"#FFEB3B",light:"#FFF59D",dark:"#FBC02D"},background:"#E8F5E9",text:{mainText:"#333333",secondaryText:"#757575"}},typography:{fontFamily:"Roboto, sans-serif"},spacing:{small:"8px",medium:"16px",large:"24px"}},Ft={dark:pt,light:lt,summer:dt,spring:ft},mt=An`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`,In=ne.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,Fn=ne.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 80px;
  height: 20px;
`,Rn=ne.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$bgColor??"#333"};
  animation: ${mt} 1.5s infinite;
`,On=ne.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$bgColor??"#333"};
  animation: ${mt} 1.5s infinite 0.1s;
`,Pn=ne.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$bgColor??"#333"};
  animation: ${mt} 1.5s infinite 0.3s;
`,Ge=({bgColor:e,variants:t="light"})=>{const r=!!e,n=Ft[t]||Ft.light,s=r?e:n.colors.primary.dark;return console.log("ellipsisColor",s),D.jsx(In,{children:D.jsxs(Fn,{children:[D.jsx(Rn,{$bgColor:s}),D.jsx(On,{$bgColor:s}),D.jsx(Pn,{$bgColor:s})]})})};Ge.__docgenInfo={description:"",methods:[],displayName:"EllipsisLoaderWavering",props:{variants:{defaultValue:{value:'"light"',computed:!1},required:!1}}};var br=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},yr=Me(Rt||(Rt=br([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));gr(Ot||(Ot=br(["",""],["",""])),yr);var Rt,Ot;const Nn=gr`
  ${yr}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    max-height: 100vh;
    max-width: 100vw;
    font-family: 'Montserrat-Italic', sans-serif;
    background-color: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    font-size: small;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  button {
    font-family: 'Montserrat-Italic', sans-serif;
  }

  #root {
    height: 100%;
  }

  @font-face {
    font-family: 'Montserrat-Italic';
    src: url("@assets/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf");
    font-weight: normal;
    font-style: italic; /* Make sure to include font-style if it's italic */
  }

  @font-face {
    font-family: 'BebasNeue-Regular';
    src: url("@assets/fonts/Baseus/BebasNeue-Regular.ttf");
    font-weight: normal;
  }

  @font-face {
    font-family: 'Lora-Italic';
    src: url("@assets/fonts/Lora/Lora-Italic-VariableFont_wght.ttf");
    font-weight: normal;
    font-style: italic;
  } 

  @font-face {
    font-family: 'Lora-Variable';
    src: url("@assets/fonts/Lora/Lora-VariableFont_wght.ttf");
    font-weight: normal;
  }
`,V={summer:dt,light:lt,dark:pt,spring:ft},Dn=G.createContext(void 0),vr=({children:e})=>{const[t,r]=G.useState(()=>{const i=localStorage.getItem("theme");return i&&V[i]?V[i]:V.light}),[n,s]=G.useState(()=>localStorage.getItem("theme")||"light"),o=i=>{r(V[i]),localStorage.setItem("theme",i),s(i)};G.useEffect(()=>{const i=window.localStorage.getItem("theme");i&&V[i]?(r(V[i]),s(i)):(r(V.light),s("light"))},[]);const a=G.useMemo(()=>({theme:t,changeTheme:o,currentTheme:n}),[t,o,n]);return D.jsx(Dn.Provider,{value:a,children:D.jsx(En,{theme:t,children:e})})};vr.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ln={title:"EllipsisLoaderWavering",component:Ge,parameters:{layout:"centered",backgrounds:{default:"dark"},docs:{autodocs:"tag"}},tags:["autodocs"],argTypes:{variants:{options:["dark","light","spring","summer"],description:"'dark', 'light', 'spring', 'summer'",table:{type:{summary:"string"},defaultValue:{summary:"light"},options:["dark","light","spring","summer"]}},bgColor:{table:{disable:!0}}}},Mn={title:"Example/EllipsisLoaderWavering",component:Ge,parameters:{layout:"centered",backgrounds:{default:"dark"},docs:{description:{component:"Primary UI component for user interaction"}}},tags:["autodocs"],argTypes:{bgColor:{control:"color"}}},Ue=e=>t=>{const{colors:r}=e,n=t.bgColor??r.primary.main;return D.jsxs(vr,{children:[D.jsx(Nn,{}),D.jsx(Ge,{bgColor:n})]})},ve={render:Ue(dt),argTypes:{variants:{table:{disable:!0}}}},Se={render:Ue(ft),argTypes:{variants:{table:{disable:!0}}}},_e={render:Ue(pt),argTypes:{variants:{table:{disable:!0}}}},we={render:Ue(lt),argTypes:{variants:{table:{disable:!0}}}};var Pt,Nt,Dt;ve.parameters={...ve.parameters,docs:{...(Pt=ve.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  render: createStoryForTheme(summerThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    }
  }
}`,...(Dt=(Nt=ve.parameters)==null?void 0:Nt.docs)==null?void 0:Dt.source}}};var jt,$t,Lt;Se.parameters={...Se.parameters,docs:{...(jt=Se.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  render: createStoryForTheme(springThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    }
  }
}`,...(Lt=($t=Se.parameters)==null?void 0:$t.docs)==null?void 0:Lt.source}}};var Mt,Bt,Gt;_e.parameters={..._e.parameters,docs:{...(Mt=_e.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  render: createStoryForTheme(darkThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    } // Hide the \`variants\` control
  }
}`,...(Gt=(Bt=_e.parameters)==null?void 0:Bt.docs)==null?void 0:Gt.source}}};var Ut,Ht,Vt;we.parameters={...we.parameters,docs:{...(Ut=we.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  render: createStoryForTheme(lightThemeTokens),
  argTypes: {
    variants: {
      table: {
        disable: true
      }
    } // Hide the \`variants\` control
  }
}`,...(Vt=(Ht=we.parameters)==null?void 0:Ht.docs)==null?void 0:Vt.source}}};const Bn=["DefaultThemeTokens","Summer","Spring","Dark","Light"];export{_e as Dark,Ln as DefaultThemeTokens,we as Light,Se as Spring,ve as Summer,Bn as __namedExportsOrder,Mn as default};
