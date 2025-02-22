import{a as De}from"./chunk-A7FRPGYP.js";import{e as ye,n as re}from"./chunk-WOJF6C3T.js";import{g as F}from"./chunk-VFH52IW2.js";import{$ as H,R as z,W as ze,X as D,Z as te,b as Te,c as Se,e as ke,m as xe,n as Fe,r as B,t as Ee,w as Me}from"./chunk-R2EHUQXL.js";import{c as we,d as ae,f as ne,h as oe}from"./chunk-NMGI7OHJ.js";import{d as Ce,k as X,m as Y,p as be,q as Ie,t as ee,v as ie}from"./chunk-3OFQ5LXI.js";import{$ as N,Ab as j,Bb as I,Hb as s,Hc as W,Ib as c,Ja as me,Jb as m,Kb as Z,Lb as q,Lc as _e,Mb as U,Nb as k,Qb as _,Rb as d,Sb as ge,Tb as fe,Ub as x,Vb as J,Wb as w,Xa as R,Xb as T,Yb as A,Zb as ve,_a as de,_b as he,aa as O,ab as n,fa as E,fc as G,gc as y,ic as P,ja as C,jc as K,ka as L,la as ce,mb as b,nb as Q,qb as u,ra as pe,sa as f,ta as v,tc as M,ua as S,va as h,wb as p,xb as o,za as $,zb as ue}from"./chunk-VI74OV7Z.js";var $e=(()=>{class e extends H{pFocusTrapDisabled=!1;platformId=E(me);document=E(Ce);firstHiddenFocusableElement;lastHiddenFocusableElement;ngOnInit(){super.ngOnInit(),ie(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}ngOnChanges(t){super.ngOnChanges(t),t.pFocusTrapDisabled&&ie(this.platformId)&&(t.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(t){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${t??""}`}createHiddenFocusableElements(){let t="0",a=i=>Fe("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:t,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:i?.bind(this)});this.firstHiddenFocusableElement=a(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=a(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(t){let{currentTarget:a,relatedTarget:i}=t,l=i===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(i)?Ee(a.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;B(l)}onLastHiddenElementFocus(t){let{currentTarget:a,relatedTarget:i}=t,l=i===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(i)?Me(a.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;B(l)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=h(e)))(i||e)}})();static \u0275dir=ce({type:e,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",W]},standalone:!0,features:[Q,b,pe]})}return e})();var Be=(()=>{class e extends F{static \u0275fac=(()=>{let t;return function(i){return(t||(t=h(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["EyeIcon"]],standalone:!0,features:[b,y],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z","fill","currentColor"]],template:function(a,i){a&1&&(S(),s(0,"svg",0),m(1,"path",1),c()),a&2&&(I(i.getClassNames()),p("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var He=(()=>{class e extends F{pathId;ngOnInit(){this.pathId="url(#"+z()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=h(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["RefreshIcon"]],standalone:!0,features:[b,y],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(a,i){a&1&&(S(),s(0,"svg",0)(1,"g"),m(2,"path",1),c(),s(3,"defs")(4,"clipPath",2),m(5,"rect",3),c()()()),a&2&&(I(i.getClassNames()),p("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),n(),p("clip-path",i.pathId),n(3),o("id",i.pathId))},encapsulation:2})}return e})();var Oe=(()=>{class e extends F{pathId;ngOnInit(){this.pathId="url(#"+z()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=h(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["SearchMinusIcon"]],standalone:!0,features:[b,y],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(a,i){a&1&&(S(),s(0,"svg",0)(1,"g"),m(2,"path",1),c(),s(3,"defs")(4,"clipPath",2),m(5,"rect",3),c()()()),a&2&&(I(i.getClassNames()),p("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),n(),p("clip-path",i.pathId),n(3),o("id",i.pathId))},encapsulation:2})}return e})();var Le=(()=>{class e extends F{pathId;ngOnInit(){this.pathId="url(#"+z()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=h(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["SearchPlusIcon"]],standalone:!0,features:[b,y],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(a,i){a&1&&(S(),s(0,"svg",0)(1,"g"),m(2,"path",1),c(),s(3,"defs")(4,"clipPath",2),m(5,"rect",3),c()()()),a&2&&(I(i.getClassNames()),p("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),n(),p("clip-path",i.pathId),n(3),o("id",i.pathId))},encapsulation:2})}return e})();var Re=(()=>{class e extends F{pathId;ngOnInit(){this.pathId="url(#"+z()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=h(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["UndoIcon"]],standalone:!0,features:[b,y],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(a,i){a&1&&(S(),s(0,"svg",0)(1,"g"),m(2,"path",1),c(),s(3,"defs")(4,"clipPath",2),m(5,"rect",3),c()()()),a&2&&(I(i.getClassNames()),p("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),n(),p("clip-path",i.pathId),n(3),o("id",i.pathId))},encapsulation:2})}return e})();var qe=({dt:e})=>`
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-image-preview {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-mask {
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: ${e("image.preview.mask.color")};
    transition: background ${e("image.transition.duration")};
}

.p-image-preview:hover > .p-image-preview-mask {
    opacity: 1;
    cursor: pointer;
    background: ${e("image.preview.mask.background")};
}

.p-image-preview-icon {
    font-size: ${e("image.preview.icon.size")};
    width: ${e("image.preview.icon.size")};
    height: ${e("image.preview.icon.size")};
}

.p-image-toolbar {
    position: absolute;
    inset-block-start: ${e("image.toolbar.position.top")};
    inset-inline-end: ${e("image.toolbar.position.right")};
    inset-inline-start: ${e("image.toolbar.position.left")};
    inset-block-end: ${e("image.toolbar.position.bottom")};
    display: flex;
    z-index: 1;
    padding: ${e("image.toolbar.padding")};
    background: ${e("image.toolbar.background")};
    backdrop-filter: blur(${e("image.toolbar.blur")});
    border-color: ${e("image.toolbar.border.color")};
    border-style: solid;
    border-width: ${e("image.toolbar.border.width")};
    border-radius: ${e("image.toolbar.border.radius")};
    gap: ${e("image.toolbar.gap")};
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${e("image.action.color")};
    background: transparent;
    width: ${e("image.action.size")};
    height: ${e("image.action.size")};
    margin: 0;
    padding: 0;
    border: 0 none;
    cursor: pointer;
    user-select: none;
    border-radius: ${e("image.action.border.radius")};
    outline-color: transparent;
    transition: background ${e("image.transition.duration")}, color ${e("image.transition.duration")}, outline-color ${e("image.transition.duration")}, box-shadow ${e("image.transition.duration")};
}

.p-image-action:hover {
    color: ${e("image.action.hover.color")};
    background: ${e("image.action.hover.background")};
}

.p-image-action:focus-visible {
    box-shadow: ${e("toolbar.action.focus.ring.shadow")};
    outline: ${e("toolbar.action.focus.ring.width")} ${e("toolbar.action.focus.ring.style")} ${e("toolbar.action.focus.ring.color")};
    outline-offset: ${e("toolbar.action.focus.ring.offset")};
}

.p-image-action .p-icon {
    font-size: ${e("image.action.icon.size")};
    width: ${e("image.action.icon.size")};
    height: ${e("image.action.icon.size")};
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-original {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-original-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-original-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-original-enter-from,
.p-image-original-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`,Ue={root:({props:e})=>["p-image p-component",{"p-image-preview":e.preview}],previewMask:"p-image-preview-mask",previewIcon:"p-image-preview-icon",mask:"p-image-mask p-overlay-mask p-overlay-mask-enter",toolbar:"p-image-toolbar",rotateRightButton:"p-image-action p-image-rotate-right-button",rotateLeftButton:"p-image-action p-image-rotate-left-button",zoomOutButton:({instance:e})=>["p-image-action p-image-zoom-out-button",{"p-disabled":e.isZoomOutDisabled}],zoomInButton:({instance:e})=>["p-image-action p-image-zoom-in-button",{"p-disabled":e.isZoomInDisabled}],closeButton:"p-image-action p-image-close-button",original:"p-image-original"},Ae=(()=>{class e extends te{name="image";theme=qe;classes=Ue;static \u0275fac=(()=>{let t;return function(i){return(t||(t=h(e)))(i||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Je=["indicator"],Ge=["rotaterighticon"],Ke=["rotatelefticon"],We=["zoomouticon"],Xe=["zoominicon"],Ye=["closeicon"],et=["preview"],tt=["image"],it=["mask"],at=["previewButton"],nt=["closeButton"],ot=e=>({errorCallback:e}),rt=(e,r)=>({height:e,width:r}),lt=e=>({"p-image-action p-image-zoom-out-button":!0,"p-disabled":e}),st=e=>({"p-image-action p-image-zoom-in-button":!0,"p-disabled":e}),ct=(e,r)=>({showTransitionParams:e,hideTransitionParams:r}),pt=e=>({value:"visible",params:e}),mt=(e,r)=>({class:"p-image-original",style:e,previewCallback:r});function dt(e,r){if(e&1){let t=k();Z(0),s(1,"img",9),_("error",function(i){f(t);let l=d();return v(l.imageError(i))}),c(),q()}if(e&2){let t=d();n(),I(t.imageClass),o("ngStyle",t.imageStyle),p("src",t.src,R)("srcset",t.srcSet)("sizes",t.sizes)("alt",t.alt)("width",t.width)("height",t.height)("loading",t.loading)}}function ut(e,r){e&1&&U(0)}function gt(e,r){e&1&&U(0)}function ft(e,r){if(e&1&&(Z(0),u(1,gt,1,0,"ng-container",12),q()),e&2){let t=d(2);n(),o("ngTemplateOutlet",t.indicatorTemplate||t._indicatorTemplate)}}function vt(e,r){e&1&&m(0,"EyeIcon",13),e&2&&o("styleClass","p-image-preview-icon")}function ht(e,r){if(e&1){let t=k();s(0,"button",10,0),_("click",function(){f(t);let i=d();return v(i.onImageClick())}),u(2,ft,2,1,"ng-container",11)(3,vt,1,1,"ng-template",null,1,M),c()}if(e&2){let t=A(4),a=d();o("ngStyle",K(4,rt,a.height+"px",a.width+"px")),p("aria-label",a.zoomImageAriaLabel),n(2),o("ngIf",a.indicatorTemplate||!a._indicatorTemplate)("ngIfElse",t)}}function _t(e,r){e&1&&m(0,"RefreshIcon")}function Ct(e,r){}function bt(e,r){e&1&&u(0,Ct,0,0,"ng-template")}function It(e,r){e&1&&m(0,"UndoIcon")}function yt(e,r){}function wt(e,r){e&1&&u(0,yt,0,0,"ng-template")}function Tt(e,r){e&1&&m(0,"SearchMinusIcon")}function St(e,r){}function kt(e,r){e&1&&u(0,St,0,0,"ng-template")}function xt(e,r){e&1&&m(0,"SearchPlusIcon")}function Ft(e,r){}function Et(e,r){e&1&&u(0,Ft,0,0,"ng-template")}function Mt(e,r){e&1&&m(0,"TimesIcon")}function zt(e,r){}function Dt(e,r){e&1&&u(0,zt,0,0,"ng-template")}function Vt(e,r){if(e&1){let t=k();Z(0),s(1,"img",20),_("click",function(){f(t);let i=d(3);return v(i.onPreviewImageClick())}),c(),q()}if(e&2){let t=d(3);n(),o("ngStyle",t.imagePreviewStyle()),p("src",t.previewImageSrc?t.previewImageSrc:t.src,R)("srcset",t.previewImageSrcSet)("sizes",t.previewImageSizes)}}function $t(e,r){e&1&&U(0)}function Bt(e,r){if(e&1){let t=k();s(0,"div"),_("@animation.start",function(i){f(t);let l=d(2);return v(l.onAnimationStart(i))})("@animation.done",function(i){f(t);let l=d(2);return v(l.onAnimationEnd(i))}),u(1,Vt,2,4,"ng-container",5)(2,$t,1,0,"ng-container",6),c()}if(e&2){let t=d(2);o("@animation",P(7,pt,K(4,ct,t.showTransitionOptions,t.hideTransitionOptions))),n(),o("ngIf",!t.previewTemplate&&!t._previewTemplate),n(),o("ngTemplateOutlet",t.previewTemplate||t._previewTemplate)("ngTemplateOutletContext",K(9,mt,t.imagePreviewStyle(),t.onPreviewImageClick.bind(t)))}}function Ht(e,r){if(e&1){let t=k();s(0,"div",14,2),_("click",function(){f(t);let i=d();return v(i.onMaskClick())})("keydown",function(i){f(t);let l=d();return v(l.onMaskKeydown(i))}),s(2,"div",15),_("click",function(i){f(t);let l=d();return v(l.handleToolbarClick(i))}),s(3,"button",16),_("click",function(){f(t);let i=d();return v(i.rotateRight())}),u(4,_t,1,0,"RefreshIcon",5)(5,bt,1,0,null,12),c(),s(6,"button",17),_("click",function(){f(t);let i=d();return v(i.rotateLeft())}),u(7,It,1,0,"UndoIcon",5)(8,wt,1,0,null,12),c(),s(9,"button",18),_("click",function(){f(t);let i=d();return v(i.zoomOut())}),u(10,Tt,1,0,"SearchMinusIcon",5)(11,kt,1,0,null,12),c(),s(12,"button",18),_("click",function(){f(t);let i=d();return v(i.zoomIn())}),u(13,xt,1,0,"SearchPlusIcon",5)(14,Et,1,0,null,12),c(),s(15,"button",19,3),_("click",function(){f(t);let i=d();return v(i.closePreview())}),u(17,Mt,1,0,"TimesIcon",5)(18,Dt,1,0,null,12),c()(),u(19,Bt,3,12,"div",5),c()}if(e&2){let t=d();p("aria-modal",t.maskVisible),n(3),p("aria-label",t.rightAriaLabel()),n(),o("ngIf",!t.rotateRightIconTemplate&&!t._rotateRightIconTemplate),n(),o("ngTemplateOutlet",t.rotateRightIconTemplate||t._rotateRightIconTemplate),n(),p("aria-label",t.leftAriaLabel()),n(),o("ngIf",!t.rotateLeftIconTemplate&&!t._rotateLeftIconTemplate),n(),o("ngTemplateOutlet",t.rotateLeftIconTemplate||t._rotateLeftIconTemplate),n(),o("ngClass",P(21,lt,t.isZoomOutDisabled))("disabled",t.isZoomOutDisabled),p("aria-label",t.zoomOutAriaLabel()),n(),o("ngIf",!t.zoomOutIconTemplate&&!t._zoomOutIconTemplate),n(),o("ngTemplateOutlet",t.zoomOutIconTemplate||t._zoomOutIconTemplate),n(),o("ngClass",P(23,st,t.isZoomOutDisabled))("disabled",t.isZoomInDisabled),p("aria-label",t.zoomInAriaLabel()),n(),o("ngIf",!t.zoomInIconTemplate&&!t._zoomInIconTemplate),n(),o("ngTemplateOutlet",t.zoomInIconTemplate||t._zoomInIconTemplate),n(),p("aria-label",t.closeAriaLabel()),n(2),o("ngIf",!t.closeIconTemplate&&!t._closeIconTemplate),n(),o("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate),n(),o("ngIf",t.previewVisible)}}var le=(()=>{class e extends H{imageClass;imageStyle;styleClass;style;src;srcSet;sizes;previewImageSrc;previewImageSrcSet;previewImageSizes;alt;width;height;loading;appendTo;preview=!1;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";onShow=new $;onHide=new $;onImageError=new $;mask;previewButton;closeButton;indicatorTemplate;rotateRightIconTemplate;rotateLeftIconTemplate;zoomOutIconTemplate;zoomInIconTemplate;closeIconTemplate;previewTemplate;imageTemplate;maskVisible=!1;previewVisible=!1;rotate=0;scale=1;previewClick=!1;container;wrapper;_componentStyle=E(Ae);get isZoomOutDisabled(){return this.scale-this.zoomSettings.step<=this.zoomSettings.min}get isZoomInDisabled(){return this.scale+this.zoomSettings.step>=this.zoomSettings.max}zoomSettings={default:1,step:.1,max:1.5,min:.5};constructor(){super()}templates;_indicatorTemplate;_rotateRightIconTemplate;_rotateLeftIconTemplate;_zoomOutIconTemplate;_zoomInIconTemplate;_closeIconTemplate;_imageTemplate;_previewTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"indicator":this._indicatorTemplate=t.template;break;case"rotaterighticon":this._rotateRightIconTemplate=t.template;break;case"rotatelefticon":this._rotateLeftIconTemplate=t.template;break;case"zoomouticon":this._zoomOutIconTemplate=t.template;break;case"zoominicon":this._zoomInIconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break;case"image":this._imageTemplate=t.template;break;case"preview":this._previewTemplate=t.template;break;default:this._indicatorTemplate=t.template;break}})}onImageClick(){this.preview&&(this.maskVisible=!0,this.previewVisible=!0,Se())}onMaskClick(){this.previewClick||this.closePreview(),this.previewClick=!1}onMaskKeydown(t){switch(t.code){case"Escape":this.onMaskClick(),setTimeout(()=>{B(this.previewButton.nativeElement)},25),t.preventDefault();break;default:break}}onPreviewImageClick(){this.previewClick=!0}rotateRight(){this.rotate+=90,this.previewClick=!0}rotateLeft(){this.rotate-=90,this.previewClick=!0}zoomIn(){this.scale=this.scale+this.zoomSettings.step,this.previewClick=!0}zoomOut(){this.scale=this.scale-this.zoomSettings.step,this.previewClick=!0}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.wrapper=this.container?.parentElement,this.appendContainer(),this.moveOnTop(),setTimeout(()=>{B(this.closeButton.nativeElement)},25);break;case"void":Te(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(t){switch(t.toState){case"void":re.clear(this.wrapper),this.maskVisible=!1,this.container=null,this.wrapper=null,this.cd.markForCheck(),this.onHide.emit({});break;case"visible":this.onShow.emit({});break}}moveOnTop(){re.set("modal",this.wrapper,this.config.zIndex.modal)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.document.body.appendChild(this.wrapper):xe(this.appendTo,this.wrapper))}imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}}get zoomImageAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomImage:void 0}containerClass(){return{"p-image p-component":!0,"p-image-preview":this.preview}}handleToolbarClick(t){t.stopPropagation()}closePreview(){this.previewVisible=!1,this.rotate=0,this.scale=this.zoomSettings.default,ke()}imageError(t){this.onImageError.emit(t)}rightAriaLabel(){return this.config.translation.aria?this.config.translation.aria.rotateRight:void 0}leftAriaLabel(){return this.config.translation.aria?this.config.translation.aria.rotateLeft:void 0}zoomInAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomIn:void 0}zoomOutAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomOut:void 0}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onKeydownHandler(t){this.previewVisible&&this.closePreview()}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=C({type:e,selectors:[["p-image"]],contentQueries:function(a,i,l){if(a&1&&(x(l,Je,4),x(l,Ge,4),x(l,Ke,4),x(l,We,4),x(l,Xe,4),x(l,Ye,4),x(l,et,4),x(l,tt,4),x(l,ze,4)),a&2){let g;w(g=T())&&(i.indicatorTemplate=g.first),w(g=T())&&(i.rotateRightIconTemplate=g.first),w(g=T())&&(i.rotateLeftIconTemplate=g.first),w(g=T())&&(i.zoomOutIconTemplate=g.first),w(g=T())&&(i.zoomInIconTemplate=g.first),w(g=T())&&(i.closeIconTemplate=g.first),w(g=T())&&(i.previewTemplate=g.first),w(g=T())&&(i.imageTemplate=g.first),w(g=T())&&(i.templates=g)}},viewQuery:function(a,i){if(a&1&&(J(it,5),J(at,5),J(nt,5)),a&2){let l;w(l=T())&&(i.mask=l.first),w(l=T())&&(i.previewButton=l.first),w(l=T())&&(i.closeButton=l.first)}},hostBindings:function(a,i){a&1&&_("keydown.escape",function(g){return i.onKeydownHandler(g)},!1,de)},inputs:{imageClass:"imageClass",imageStyle:"imageStyle",styleClass:"styleClass",style:"style",src:"src",srcSet:"srcSet",sizes:"sizes",previewImageSrc:"previewImageSrc",previewImageSrcSet:"previewImageSrcSet",previewImageSizes:"previewImageSizes",alt:"alt",width:"width",height:"height",loading:"loading",appendTo:"appendTo",preview:[2,"preview","preview",W],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide",onImageError:"onImageError"},standalone:!0,features:[G([Ae]),Q,b,y],decls:5,vars:11,consts:[["previewButton",""],["defaultTemplate",""],["mask",""],["closeButton",""],[3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","class","p-image-preview-mask",3,"ngStyle","click",4,"ngIf"],["class","p-image-mask p-overlay-mask p-overlay-mask-enter","role","dialog","pFocusTrap","",3,"click","keydown",4,"ngIf"],[3,"error","ngStyle"],["type","button",1,"p-image-preview-mask",3,"click","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[3,"styleClass"],["role","dialog","pFocusTrap","",1,"p-image-mask","p-overlay-mask","p-overlay-mask-enter",3,"click","keydown"],[1,"p-image-toolbar",3,"click"],["type","button",1,"p-image-action","p-image-rotate-right-button",3,"click"],["type","button",1,"p-image-action","p-image-rotate-left-button",3,"click"],["type","button",3,"click","ngClass","disabled"],["type","button",1,"p-image-action","p-image-close-button",3,"click"],[1,"p-image-original",3,"click","ngStyle"]],template:function(a,i){a&1&&(s(0,"span",4),u(1,dt,2,10,"ng-container",5)(2,ut,1,0,"ng-container",6)(3,ht,5,7,"button",7)(4,Ht,20,25,"div",8),c()),a&2&&(I(i.styleClass),o("ngClass",i.containerClass())("ngStyle",i.style),n(),o("ngIf",!i.imageTemplate&&!i._imageTemplate),n(),o("ngTemplateOutlet",i.imageTemplate||i._imageTemplate)("ngTemplateOutletContext",P(9,ot,i.imageError.bind(i))),n(),o("ngIf",i.preview),n(),o("ngIf",i.maskVisible))},dependencies:[ee,X,Y,Ie,be,He,Be,Re,Oe,Le,De,$e,D],encapsulation:2,data:{animation:[we("animation",[oe("void => visible",[ne({transform:"scale(0.7)",opacity:0}),ae("{{showTransitionParams}}")]),oe("visible => void",[ae("{{hideTransitionParams}}",ne({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return e})(),Pe=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=L({type:e});static \u0275inj=O({imports:[le,D,D]})}return e})();var Lt=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    color: ${e("avatar.color")};
    background: ${e("avatar.background")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,Rt={root:({props:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},Ne=(()=>{class e extends te{name="avatar";theme=Lt;classes=Rt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=h(e)))(i||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var At=["*"];function Pt(e,r){if(e&1&&(s(0,"span",3),ve(1),c()),e&2){let t=d();n(),he(t.label)}}function Nt(e,r){if(e&1&&m(0,"span",5),e&2){let t=d(2);I(t.icon),o("ngClass","p-avatar-icon")}}function Qt(e,r){if(e&1&&u(0,Nt,1,3,"span",4),e&2){let t=d(),a=A(5);o("ngIf",t.icon)("ngIfElse",a)}}function jt(e,r){if(e&1){let t=k();s(0,"img",7),_("error",function(i){f(t);let l=d(2);return v(l.imageError(i))}),c()}if(e&2){let t=d(2);o("src",t.image,R),p("aria-label",t.ariaLabel)}}function Zt(e,r){if(e&1&&u(0,jt,1,2,"img",6),e&2){let t=d();o("ngIf",t.image)}}var se=(()=>{class e extends H{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new $;_componentStyle=E(Ne);imageError(t){this.onImageError.emit(t)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(i){return(t||(t=h(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(a,i){a&2&&(p("data-pc-name","avatar")("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),j(i.style),I(i.hostClass),ue("p-avatar",!0)("p-component",!0)("p-avatar-circle",i.shape==="circle")("p-avatar-lg",i.size==="large")("p-avatar-xl",i.size==="xlarge")("p-avatar-image",i.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},standalone:!0,features:[G([Ne]),b,y],ngContentSelectors:At,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(a,i){if(a&1&&(ge(),fe(0),u(1,Pt,2,1,"span",2)(2,Qt,1,2,"ng-template",null,0,M)(4,Zt,1,1,"ng-template",null,1,M)),a&2){let l=A(3);n(),o("ngIf",i.label)("ngIfElse",l)}},dependencies:[ee,X,Y,D],encapsulation:2,changeDetection:0})}return e})(),Qe=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=L({type:e});static \u0275inj=O({imports:[se,D,D]})}return e})();function Ut(e,r){e&1&&m(0,"i",10)}function Jt(e,r){e&1&&m(0,"p-avatar",11)}function Gt(e,r){if(e&1){let t=k();s(0,"img",12),_("click",function(){let i=f(t).previewCallback;return v(i())}),c()}if(e&2){let t=r.style;j(t)}}var je=class e{route=E(ye);paramValue="";constructor(){_e(()=>{this.paramValue=this.route.snapshot.paramMap.get("StudentId"),console.log("Route Param:",this.paramValue)})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-student-details"]],standalone:!0,features:[y],decls:13,vars:1,consts:[["indicator",""],["image",""],["preview",""],[1,"grid","grid-cols-4","rounded-md","bg-slate-50","max-md:grid-cols-1"],[1,"grid","items-center","content-center","grid-cols-1","col-span-1","p-2"],[1,"mx-auto","overflow-hidden"],[1,"flex","items-center","content-center","w-40","h-40","rounded-full"],["src","https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg","alt","Image",3,"preview"],[1,"rounded-full"],[1,"h-48","col-span-3","p-5"],[1,"pi","pi-search"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","size","xlarge","shape","circle"],["src","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","alt","image",3,"click"]],template:function(t,a){t&1&&(s(0,"section")(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"p-image",7),u(6,Ut,1,0,"ng-template",8,0,M)(8,Jt,1,0,"ng-template",null,1,M)(10,Gt,1,2,"ng-template",null,2,M),c()()()(),m(12,"div",9),c()()),t&2&&(n(5),o("preview",!0))},dependencies:[Pe,le,Qe,se]})};export{je as StudentDetailsComponent};
