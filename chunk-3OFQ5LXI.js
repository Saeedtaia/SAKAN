import{$ as w,$a as Se,Cc as ve,Dc as J,Ea as N,Ec as Ie,Fc as Me,Ja as Ae,Kc as Q,Ob as m,Pb as h,Y as me,Z as Ce,aa as Fe,bb as D,ca as O,db as k,ea as v,fa as B,hb as $,ib as R,ka as Ee,la as I,ma as q,ra as ye,vc as be,wc as _e,za as we}from"./chunk-VI74OV7Z.js";var $e=null;function ee(){return $e}function an(e){$e??=e}var Le=class{};var he=new O(""),fe=(()=>{class e{historyGo(t){throw new Error("")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=w({token:e,factory:()=>B(Ge),providedIn:"platform"})}}return e})(),cn=new O(""),Ge=(()=>{class e extends fe{constructor(){super(),this._doc=B(he),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ee().getBaseHref(this._doc)}onPopState(t){let n=ee().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=ee().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,r){this._history.pushState(t,n,r)}replaceState(t,n,r){this._history.replaceState(t,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=w({token:e,factory:()=>new e,providedIn:"platform"})}}return e})();function De(e,i){if(e.length==0)return i;if(i.length==0)return e;let t=0;return e.endsWith("/")&&t++,i.startsWith("/")&&t++,t==2?e+i.substring(1):t==1?e+i:e+"/"+i}function Be(e){let i=e.match(/#|\?|$/),t=i&&i.index||e.length,n=t-(e[t-1]==="/"?1:0);return e.slice(0,n)+e.slice(t)}function S(e){return e&&e[0]!=="?"?"?"+e:e}var W=(()=>{class e{historyGo(t){throw new Error("")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=w({token:e,factory:()=>B(He),providedIn:"root"})}}return e})(),xe=new O(""),He=(()=>{class e extends W{constructor(t,n){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??B(he).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return De(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+S(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${n}${r}`:n}pushState(t,n,r,s){let o=this.prepareExternalUrl(r+S(s));this._platformLocation.pushState(t,n,o)}replaceState(t,n,r,s){let o=this.prepareExternalUrl(r+S(s));this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(n){return new(n||e)(v(fe),v(xe,8))}}static{this.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),dn=(()=>{class e extends W{constructor(t,n){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(t){let n=De(this._baseHref,t);return n.length>0?"#"+n:n}pushState(t,n,r,s){let o=this.prepareExternalUrl(r+S(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,n,o)}replaceState(t,n,r,s){let o=this.prepareExternalUrl(r+S(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(n){return new(n||e)(v(fe),v(xe,8))}}static{this.\u0275prov=w({token:e,factory:e.\u0275fac})}}return e})(),Ye=(()=>{class e{constructor(t){this._subject=new we,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=Ke(Be(Oe(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+S(n))}normalize(t){return e.stripTrailingSlash(We(this._basePath,Oe(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",r=null){this._locationStrategy.pushState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+S(n)),r)}replaceState(t,n="",r=null){this._locationStrategy.replaceState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+S(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(r=>r(t,n))}subscribe(t,n,r){return this._subject.subscribe({next:t,error:n,complete:r})}static{this.normalizeQueryParams=S}static{this.joinWithSlash=De}static{this.stripTrailingSlash=Be}static{this.\u0275fac=function(n){return new(n||e)(v(W))}}static{this.\u0275prov=w({token:e,factory:()=>Ze(),providedIn:"root"})}}return e})();function Ze(){return new Ye(v(W))}function We(e,i){if(!e||!i.startsWith(e))return i;let t=i.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:i}function Oe(e){return e.replace(/\/index.html$/,"")}function Ke(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var g=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(g||{}),d=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(d||{}),p=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(p||{}),M={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Xe(e){return m(e)[h.LocaleId]}function qe(e,i,t){let n=m(e),r=[n[h.DayPeriodsFormat],n[h.DayPeriodsStandalone]],s=C(r,i);return C(s,t)}function Je(e,i,t){let n=m(e),r=[n[h.DaysFormat],n[h.DaysStandalone]],s=C(r,i);return C(s,t)}function Qe(e,i,t){let n=m(e),r=[n[h.MonthsFormat],n[h.MonthsStandalone]],s=C(r,i);return C(s,t)}function et(e,i){let n=m(e)[h.Eras];return C(n,i)}function x(e,i){let t=m(e);return C(t[h.DateFormat],i)}function U(e,i){let t=m(e);return C(t[h.TimeFormat],i)}function z(e,i){let n=m(e)[h.DateTimeFormat];return C(n,i)}function K(e,i){let t=m(e),n=t[h.NumberSymbols][i];if(typeof n>"u"){if(i===M.CurrencyDecimal)return t[h.NumberSymbols][M.Decimal];if(i===M.CurrencyGroup)return t[h.NumberSymbols][M.Group]}return n}function Ue(e){if(!e[h.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[h.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function tt(e){let i=m(e);return Ue(i),(i[h.ExtraData][2]||[]).map(n=>typeof n=="string"?te(n):[te(n[0]),te(n[1])])}function nt(e,i,t){let n=m(e);Ue(n);let r=[n[h.ExtraData][0],n[h.ExtraData][1]],s=C(r,i)||[];return C(s,t)||[]}function C(e,i){for(let t=i;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new Error("Locale data API: locale data undefined")}function te(e){let[i,t]=e.split(":");return{hours:+i,minutes:+t}}var it=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,V={},rt=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,b=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(b||{}),c=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(c||{}),a=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(a||{});function st(e,i,t,n){let r=Dt(e);i=A(t,i)||i;let o=[],u;for(;i;)if(u=rt.exec(i),u){o=o.concat(u.slice(1));let y=o.pop();if(!y)break;i=y}else{o.push(i);break}let F=r.getTimezoneOffset();n&&(F=Ve(n,F),r=ft(r,n,!0));let _="";return o.forEach(y=>{let L=lt(y);_+=L?L(r,t,F):y==="''"?"'":y.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),_}function Z(e,i,t){let n=new Date(0);return n.setFullYear(e,i,t),n.setHours(0,0,0),n}function A(e,i){let t=Xe(e);if(V[t]??={},V[t][i])return V[t][i];let n="";switch(i){case"shortDate":n=x(e,p.Short);break;case"mediumDate":n=x(e,p.Medium);break;case"longDate":n=x(e,p.Long);break;case"fullDate":n=x(e,p.Full);break;case"shortTime":n=U(e,p.Short);break;case"mediumTime":n=U(e,p.Medium);break;case"longTime":n=U(e,p.Long);break;case"fullTime":n=U(e,p.Full);break;case"short":let r=A(e,"shortTime"),s=A(e,"shortDate");n=j(z(e,p.Short),[r,s]);break;case"medium":let o=A(e,"mediumTime"),u=A(e,"mediumDate");n=j(z(e,p.Medium),[o,u]);break;case"long":let F=A(e,"longTime"),_=A(e,"longDate");n=j(z(e,p.Long),[F,_]);break;case"full":let y=A(e,"fullTime"),L=A(e,"fullDate");n=j(z(e,p.Full),[y,L]);break}return n&&(V[t][i]=n),n}function j(e,i){return i&&(e=e.replace(/\{([^}]+)}/g,function(t,n){return i!=null&&n in i?i[n]:t})),e}function E(e,i,t="-",n,r){let s="";(e<0||r&&e<=0)&&(r?e=-e+1:(e=-e,s=t));let o=String(e);for(;o.length<i;)o="0"+o;return n&&(o=o.slice(o.length-i)),s+o}function ot(e,i){return E(e,3).substring(0,i)}function f(e,i,t=0,n=!1,r=!1){return function(s,o){let u=ut(e,s);if((t>0||u>-t)&&(u+=t),e===c.Hours)u===0&&t===-12&&(u=12);else if(e===c.FractionalSeconds)return ot(u,i);let F=K(o,M.MinusSign);return E(u,i,F,n,r)}}function ut(e,i){switch(e){case c.FullYear:return i.getFullYear();case c.Month:return i.getMonth();case c.Date:return i.getDate();case c.Hours:return i.getHours();case c.Minutes:return i.getMinutes();case c.Seconds:return i.getSeconds();case c.FractionalSeconds:return i.getMilliseconds();case c.Day:return i.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function l(e,i,t=g.Format,n=!1){return function(r,s){return at(r,s,e,i,t,n)}}function at(e,i,t,n,r,s){switch(t){case a.Months:return Qe(i,r,n)[e.getMonth()];case a.Days:return Je(i,r,n)[e.getDay()];case a.DayPeriods:let o=e.getHours(),u=e.getMinutes();if(s){let _=tt(i),y=nt(i,r,n),L=_.findIndex(T=>{if(Array.isArray(T)){let[X,P]=T,ge=o>=X.hours&&u>=X.minutes,pe=o<P.hours||o===P.hours&&u<P.minutes;if(X.hours<P.hours){if(ge&&pe)return!0}else if(ge||pe)return!0}else if(T.hours===o&&T.minutes===u)return!0;return!1});if(L!==-1)return y[L]}return qe(i,r,n)[o<12?0:1];case a.Eras:return et(i,n)[e.getFullYear()<=0?0:1];default:let F=t;throw new Error(`unexpected translation type ${F}`)}}function G(e){return function(i,t,n){let r=-1*n,s=K(t,M.MinusSign),o=r>0?Math.floor(r/60):Math.ceil(r/60);switch(e){case b.Short:return(r>=0?"+":"")+E(o,2,s)+E(Math.abs(r%60),2,s);case b.ShortGMT:return"GMT"+(r>=0?"+":"")+E(o,1,s);case b.Long:return"GMT"+(r>=0?"+":"")+E(o,2,s)+":"+E(Math.abs(r%60),2,s);case b.Extended:return n===0?"Z":(r>=0?"+":"")+E(o,2,s)+":"+E(Math.abs(r%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}var ct=0,Y=4;function dt(e){let i=Z(e,ct,1).getDay();return Z(e,0,1+(i<=Y?Y:Y+7)-i)}function ze(e){let i=e.getDay(),t=i===0?-3:Y-i;return Z(e.getFullYear(),e.getMonth(),e.getDate()+t)}function ne(e,i=!1){return function(t,n){let r;if(i){let s=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,o=t.getDate();r=1+Math.floor((o+s)/7)}else{let s=ze(t),o=dt(s.getFullYear()),u=s.getTime()-o.getTime();r=1+Math.round(u/6048e5)}return E(r,e,K(n,M.MinusSign))}}function H(e,i=!1){return function(t,n){let s=ze(t).getFullYear();return E(s,e,K(n,M.MinusSign),i)}}var ie={};function lt(e){if(ie[e])return ie[e];let i;switch(e){case"G":case"GG":case"GGG":i=l(a.Eras,d.Abbreviated);break;case"GGGG":i=l(a.Eras,d.Wide);break;case"GGGGG":i=l(a.Eras,d.Narrow);break;case"y":i=f(c.FullYear,1,0,!1,!0);break;case"yy":i=f(c.FullYear,2,0,!0,!0);break;case"yyy":i=f(c.FullYear,3,0,!1,!0);break;case"yyyy":i=f(c.FullYear,4,0,!1,!0);break;case"Y":i=H(1);break;case"YY":i=H(2,!0);break;case"YYY":i=H(3);break;case"YYYY":i=H(4);break;case"M":case"L":i=f(c.Month,1,1);break;case"MM":case"LL":i=f(c.Month,2,1);break;case"MMM":i=l(a.Months,d.Abbreviated);break;case"MMMM":i=l(a.Months,d.Wide);break;case"MMMMM":i=l(a.Months,d.Narrow);break;case"LLL":i=l(a.Months,d.Abbreviated,g.Standalone);break;case"LLLL":i=l(a.Months,d.Wide,g.Standalone);break;case"LLLLL":i=l(a.Months,d.Narrow,g.Standalone);break;case"w":i=ne(1);break;case"ww":i=ne(2);break;case"W":i=ne(1,!0);break;case"d":i=f(c.Date,1);break;case"dd":i=f(c.Date,2);break;case"c":case"cc":i=f(c.Day,1);break;case"ccc":i=l(a.Days,d.Abbreviated,g.Standalone);break;case"cccc":i=l(a.Days,d.Wide,g.Standalone);break;case"ccccc":i=l(a.Days,d.Narrow,g.Standalone);break;case"cccccc":i=l(a.Days,d.Short,g.Standalone);break;case"E":case"EE":case"EEE":i=l(a.Days,d.Abbreviated);break;case"EEEE":i=l(a.Days,d.Wide);break;case"EEEEE":i=l(a.Days,d.Narrow);break;case"EEEEEE":i=l(a.Days,d.Short);break;case"a":case"aa":case"aaa":i=l(a.DayPeriods,d.Abbreviated);break;case"aaaa":i=l(a.DayPeriods,d.Wide);break;case"aaaaa":i=l(a.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":i=l(a.DayPeriods,d.Abbreviated,g.Standalone,!0);break;case"bbbb":i=l(a.DayPeriods,d.Wide,g.Standalone,!0);break;case"bbbbb":i=l(a.DayPeriods,d.Narrow,g.Standalone,!0);break;case"B":case"BB":case"BBB":i=l(a.DayPeriods,d.Abbreviated,g.Format,!0);break;case"BBBB":i=l(a.DayPeriods,d.Wide,g.Format,!0);break;case"BBBBB":i=l(a.DayPeriods,d.Narrow,g.Format,!0);break;case"h":i=f(c.Hours,1,-12);break;case"hh":i=f(c.Hours,2,-12);break;case"H":i=f(c.Hours,1);break;case"HH":i=f(c.Hours,2);break;case"m":i=f(c.Minutes,1);break;case"mm":i=f(c.Minutes,2);break;case"s":i=f(c.Seconds,1);break;case"ss":i=f(c.Seconds,2);break;case"S":i=f(c.FractionalSeconds,1);break;case"SS":i=f(c.FractionalSeconds,2);break;case"SSS":i=f(c.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":i=G(b.Short);break;case"ZZZZZ":i=G(b.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=G(b.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":i=G(b.Long);break;default:return null}return ie[e]=i,i}function Ve(e,i){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?i:t}function ht(e,i){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+i),e}function ft(e,i,t){let n=t?-1:1,r=e.getTimezoneOffset(),s=Ve(i,r);return ht(e,n*(s-r))}function Dt(e){if(Re(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[r,s=1,o=1]=e.split("-").map(u=>+u);return Z(r,s-1,o)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let n;if(n=e.match(it))return gt(n)}let i=new Date(e);if(!Re(i))throw new Error(`Unable to convert "${e}" into a date`);return i}function gt(e){let i=new Date(0),t=0,n=0,r=e[8]?i.setUTCFullYear:i.setFullYear,s=e[8]?i.setUTCHours:i.setHours;e[9]&&(t=Number(e[9]+e[10]),n=Number(e[9]+e[11])),r.call(i,Number(e[1]),Number(e[2])-1,Number(e[3]));let o=Number(e[4]||0)-t,u=Number(e[5]||0)-n,F=Number(e[6]||0),_=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return s.call(i,o,u,F,_),i}function Re(e){return e instanceof Date&&!isNaN(e.valueOf())}function ln(e,i){i=encodeURIComponent(i);for(let t of e.split(";")){let n=t.indexOf("="),[r,s]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(r.trim()===i)return decodeURIComponent(s)}return null}var re=/\s+/,Te=[],hn=(()=>{class e{constructor(t,n){this._ngEl=t,this._renderer=n,this.initialClasses=Te,this.stateMap=new Map}set klass(t){this.initialClasses=t!=null?t.trim().split(re):Te}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(re):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let r=this.stateMap.get(t);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],r=t[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(re).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static{this.\u0275fac=function(n){return new(n||e)(D(N),D($))}}static{this.\u0275dir=I({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return e})();var se=class{constructor(i,t,n,r){this.$implicit=i,this.ngForOf=t,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},fn=(()=>{class e{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,n,r){this._viewContainer=t,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new se(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)n.remove(s===null?void 0:s);else if(s!==null){let u=n.get(s);n.move(u,o),Pe(u,r)}});for(let r=0,s=n.length;r<s;r++){let u=n.get(r).context;u.index=r,u.count=s,u.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=n.get(r.currentIndex);Pe(s,r)})}static ngTemplateContextGuard(t,n){return!0}static{this.\u0275fac=function(n){return new(n||e)(D(R),D(k),D(Ie))}}static{this.\u0275dir=I({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return e})();function Pe(e,i){e.context.$implicit=i.item}var Dn=(()=>{class e{constructor(t,n){this._viewContainer=t,this._context=new oe,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Ne("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Ne("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,n){return!0}static{this.\u0275fac=function(n){return new(n||e)(D(R),D(k))}}static{this.\u0275dir=I({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return e})(),oe=class{constructor(){this.$implicit=null,this.ngIf=null}};function Ne(e,i){if(!!!(!i||i.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${Ce(i)}'.`)}var ue=class{constructor(i,t){this._viewContainerRef=i,this._templateRef=t,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(i){i&&!this._created?this.create():!i&&this._created&&this.destroy()}},pt=(()=>{class e{constructor(){this._defaultViews=[],this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(t){this._ngSwitch=t,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(t){this._defaultViews.push(t)}_matchCase(t){let n=t===this._ngSwitch;return this._lastCasesMatched||=n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(t){if(this._defaultViews.length>0&&t!==this._defaultUsed){this._defaultUsed=t;for(let n of this._defaultViews)n.enforceState(t)}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=I({type:e,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0})}}return e})(),gn=(()=>{class e{constructor(t,n,r){this.ngSwitch=r,r._addCase(),this._view=new ue(t,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static{this.\u0275fac=function(n){return new(n||e)(D(R),D(k),D(pt,9))}}static{this.\u0275dir=I({type:e,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0})}}return e})();var pn=(()=>{class e{constructor(t,n,r){this._ngEl=t,this._differs=n,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,n){let[r,s]=t.split("."),o=r.indexOf("-")===-1?void 0:Se.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,s?`${n}${s}`:n,o):this._renderer.removeStyle(this._ngEl.nativeElement,r,o)}_applyChanges(t){t.forEachRemovedItem(n=>this._setStyle(n.key,null)),t.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),t.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static{this.\u0275fac=function(n){return new(n||e)(D(N),D(Me),D($))}}static{this.\u0275dir=I({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0})}}return e})(),mn=(()=>{class e{constructor(t){this._viewContainerRef=t,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(t){if(this._shouldRecreateView(t)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(t,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static{this.\u0275fac=function(n){return new(n||e)(D(R))}}static{this.\u0275dir=I({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[ye]})}}return e})();function je(e,i){return new me(2100,!1)}var ae=class{createSubscription(i,t){return Q(()=>i.subscribe({next:t,error:n=>{throw n}}))}dispose(i){Q(()=>i.unsubscribe())}},ce=class{createSubscription(i,t){return i.then(t,n=>{throw n})}dispose(i){}},mt=new ce,Ct=new ae,Cn=(()=>{class e{constructor(t){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,n=>this._updateLatestValue(t,n))}_selectStrategy(t){if(be(t))return mt;if(_e(t))return Ct;throw je(e,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,n){t===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static{this.\u0275fac=function(n){return new(n||e)(D(J,16))}}static{this.\u0275pipe=q({name:"async",type:e,pure:!1,standalone:!0})}}return e})();var Ft="mediumDate",Et=new O(""),yt=new O(""),Fn=(()=>{class e{constructor(t,n,r){this.locale=t,this.defaultTimezone=n,this.defaultOptions=r}transform(t,n,r,s){if(t==null||t===""||t!==t)return null;try{let o=n??this.defaultOptions?.dateFormat??Ft,u=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return st(t,o,s||this.locale,u)}catch(o){throw je(e,o.message)}}static{this.\u0275fac=function(n){return new(n||e)(D(ve,16),D(Et,24),D(yt,24))}}static{this.\u0275pipe=q({name:"date",type:e,pure:!0,standalone:!0})}}return e})();var En=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=Ee({type:e})}static{this.\u0275inj=Fe({})}}return e})(),wt="browser",At="server";function St(e){return e===wt}function yn(e){return e===At}var wn=(()=>{class e{static{this.\u0275prov=w({token:e,providedIn:"root",factory:()=>St(B(Ae))?new de(B(he),window):new le})}}return e})(),de=class{constructor(i,t){this.document=i,this.window=t,this.offset=()=>[0,0]}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i){this.window.scrollTo(i[0],i[1])}scrollToAnchor(i){let t=bt(this.document,i);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(i){this.window.history.scrollRestoration=i}scrollToElement(i){let t=i.getBoundingClientRect(),n=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],r-s[1])}};function bt(e,i){let t=e.getElementById(i)||e.getElementsByName(i)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(i)||s.querySelector(`[name="${i}"]`);if(o)return o}r=n.nextNode()}}return null}var le=class{setOffset(i){}getScrollPosition(){return[0,0]}scrollToPosition(i){}scrollToAnchor(i){}setHistoryScrollRestoration(i){}},ke=class{};export{ee as a,an as b,Le as c,he as d,cn as e,W as f,He as g,dn as h,Ye as i,ln as j,hn as k,fn as l,Dn as m,pt as n,gn as o,pn as p,mn as q,Cn as r,Fn as s,En as t,wt as u,St as v,yn as w,wn as x,ke as y};
