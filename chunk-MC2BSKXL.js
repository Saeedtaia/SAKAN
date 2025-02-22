import{a as z}from"./chunk-RDQCOFS5.js";import{c as j,d as L,f as u,h as y}from"./chunk-NMGI7OHJ.js";import{$b as D,Cb as k,Db as E,Fb as T,Gb as I,Hb as i,Ib as r,Jb as O,Lc as U,Nb as B,Qb as p,Rb as s,Zb as c,_a as C,_b as d,ab as o,fa as b,gc as F,ja as P,lb as v,ma as M,qb as w,qc as H,rc as V,sa as f,ta as _,ua as h,xb as S,zb as x}from"./chunk-VI74OV7Z.js";var m=class a{transform(e){return e.toUpperCase()}static \u0275fac=function(n){return new(n||a)};static \u0275pipe=M({name:"Uppercase",type:a,pure:!0,standalone:!0})};function G(a,e){a&1&&(h(),i(0,"svg",11),O(1,"path",12),r())}function K(a,e){if(a&1){let n=B();i(0,"div",8),p("click",function(){let g=f(n).$implicit,l=s(2);return _(l.selectLanguage(g))})("keydown.enter",function(){let g=f(n).$implicit,l=s(2);return _(l.selectLanguage(g))}),i(1,"span",2),c(2),r(),i(3,"div",9)(4,"div",3),c(5),r(),i(6,"div",10),c(7),H(8,"Uppercase"),r()(),w(9,G,2,0,":svg:svg",11),r()}if(a&2){let n=e.$implicit,t=s(2);x("bg-gray-50",n.code===t.currentLanguage().code),o(2),d(n.flag),o(3),d(n.label),o(2),D(" ",V(8,6,n.code)," "),o(2),k(n.code===t.currentLanguage().code?9:-1)}}function N(a,e){if(a&1&&(i(0,"div",6),T(1,K,10,8,"div",7,E),r()),a&2){let n=s();S("@slideInOut",void 0),o(),I(n.languages)}}var Y=class a{transloco=b(z);isOpen=v(!1);languages=[{code:"en",label:"English",flag:"\u{1F1EC}\u{1F1E7}",direction:"ltr"},{code:"ar",label:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",flag:"\u{1F1F8}\u{1F1E6}",direction:"rtl"}];currentLanguage=v(this.getCurrentLanguage());constructor(){U(()=>{let e=this.currentLanguage();localStorage.setItem("preferredLanguage",e.code),document.documentElement.lang=e.code,document.documentElement.dir=e.direction})}toggleSwitcher(){this.isOpen.update(e=>!e)}selectLanguage(e){this.transloco.setActiveLang(e.code),this.currentLanguage.set(e),this.isOpen.set(!1)}getCurrentLanguage(){let e=localStorage.getItem("preferredLanguage"),n=this.transloco.getDefaultLang()||"en";return this.languages?.find(t=>t.code===e)||this.languages?.find(t=>t.code===n)||this.languages?.[0]||{code:"en",label:"English",flag:"\u{1F1EC}\u{1F1E7}",direction:"ltr"}}onEscKey(){this.isOpen.set(!1)}onClickOutside(e){e.target.closest(".language-switcher")||this.isOpen.set(!1)}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=P({type:a,selectors:[["app-langswitcher"]],hostBindings:function(n,t){n&1&&p("keydown.escape",function(){return t.onEscKey()},!1,C)("click",function(l){return t.onClickOutside(l)},!1,C)},standalone:!0,features:[F],decls:9,vars:5,consts:[[1,"relative","language-switcher"],[1,"flex","items-center","gap-2","p-2","transition-all","rounded-lg","hover:bg-gray-100","dark:hover:bg-gray-800",3,"click"],[1,"text-xl"],[1,"font-medium"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-4","h-4","transition-transform"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 9l-7 7-7-7"],[1,"absolute","right-0","z-50","w-32","overflow-hidden","bg-white","border","rounded-lg","shadow-xl","top-12","dark:bg-gray-900","dark:border-gray-800"],["tabindex","0",1,"flex","items-center","gap-3","p-3","transition-colors","cursor-pointer","hover:bg-gray-100","dark:hover:bg-gray-800",3,"bg-gray-50"],["tabindex","0",1,"flex","items-center","gap-3","p-3","transition-colors","cursor-pointer","hover:bg-gray-100","dark:hover:bg-gray-800",3,"click","keydown.enter"],[1,"flex-1"],[1,"text-sm","text-gray-500","dark:text-gray-400"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-5","h-5","text-primary-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5 13l4 4L19 7"]],template:function(n,t){n&1&&(i(0,"div",0)(1,"button",1),p("click",function(){return t.toggleSwitcher()}),i(2,"span",2),c(3),r(),i(4,"span",3),c(5),r(),h(),i(6,"svg",4),O(7,"path",5),r()(),w(8,N,3,1,"div",6),r()),n&2&&(o(3),d(t.currentLanguage().flag),o(2),d(t.currentLanguage().label),o(),x("rotate-180",t.isOpen()),o(2),k(t.isOpen()?8:-1))},dependencies:[m],styles:[".language-switcher-container[_ngcontent-%COMP%]{background:#fff;position:relative;cursor:pointer}.language-switcher-container[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.75rem 1rem;color:var(--text-color);transition:all .3s ease}.language-switcher-container[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]:hover{background-color:var(--hover-bg);color:var(--primary-color)}.language-switcher-container[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]   .sidenav-link-icon[_ngcontent-%COMP%]{font-size:1.2rem;margin-right:.75rem}.language-switcher-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;background:#fff;border-radius:4px;box-shadow:0 2px 4px #0000001a;z-index:1000}.language-switcher-container[_ngcontent-%COMP%]   .language-dropdown.collapsed[_ngcontent-%COMP%]{left:auto;right:calc(100% + 10px);width:max-content}.language-switcher-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   .language-option[_ngcontent-%COMP%]{padding:.75rem 1rem;display:flex;align-items:center;transition:all .2s ease}.language-switcher-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   .language-option[_ngcontent-%COMP%]:hover{background-color:var(--hover-bg)}.language-switcher-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   .language-option.active[_ngcontent-%COMP%]{background-color:var(--active-bg);color:var(--primary-color)}[dir=rtl][_ngcontent-%COMP%]   .language-switcher-container[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]   .sidenav-link-icon[_ngcontent-%COMP%]{margin-right:0;margin-left:.75rem}[dir=rtl][_ngcontent-%COMP%]   .language-switcher-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]:not(.collapsed){left:auto;right:0}"],data:{animation:[j("slideInOut",[y(":enter",[u({opacity:0,transform:"translateY(-10px)"}),L("200ms ease-out",u({opacity:1,transform:"translateY(0)"}))]),y(":leave",[L("200ms ease-in",u({opacity:0,transform:"translateY(-10px)"}))])])]},changeDetection:0})};export{Y as a};
