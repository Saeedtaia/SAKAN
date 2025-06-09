import{a as it}from"./chunk-DC7ZTQPG.js";import{i as rt}from"./chunk-YTUW7NAK.js";import{c as d}from"./chunk-WLXDAXNX.js";import{c as Y,d as v,f as C,g as x,h as w}from"./chunk-4YRY4IP2.js";import{Z as et,_,aa as nt,da as ot,h as tt}from"./chunk-R6THOTYF.js";import{k as W,m as Z,p as H,q as K,t as X,v as S}from"./chunk-H7UAIGYQ.js";import{$ as L,$b as g,Ab as O,Ac as J,Bb as i,Fb as E,Lb as V,Mb as N,Nb as h,Ob as A,Pb as B,Rb as Q,Ub as j,Vb as r,Vc as G,Zb as y,_ as I,ac as b,db as m,dc as U,ea as k,ia as M,ja as P,mc as R,nc as $,oc as T,pb as D,pc as q,qb as F,qc as z,ta as p,tb as a,ua as u,xa as f}from"./chunk-L7ST2L6E.js";var st=({dt:e})=>`
.p-scrolltop.p-button {
    position: fixed;
    bottom: 20px;
    inset-inline-end: 20px;
}

.p-scrolltop-sticky.p-button {
    position: sticky;
    display: flex;
    margin-left: auto;
}

.p-scrolltop-sticky.p-button:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}

/* For PrimeNG */
.p-scrolltop-sticky.p-link {
    margin-left: auto;
}
`,at={root:({props:e})=>["p-scrolltop",{"p-scrolltop-sticky":e.target!=="window"}],icon:"p-scrolltop-icon"},lt=(()=>{class e extends nt{name="scrolltop";theme=st;classes=at;static \u0275fac=(()=>{let t;return function(n){return(t||(t=f(e)))(n||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var ct=["icon"],pt=(e,l)=>({showTransitionParams:e,hideTransitionParams:l}),ut=e=>({value:"open",params:e}),mt=()=>({styleClass:"p-scrolltop-icon"}),_t=()=>({"font-size":"1rem",scale:"1.5"});function dt(e,l){if(e&1&&h(0,"span",7),e&2){let t=r(4);E(t._icon),i("ngClass","p-scrolltop-icon")}}function ft(e,l){e&1&&h(0,"ChevronUpIcon",8),e&2&&i("styleClass","p-scrolltop-icon")("ngStyle",T(2,_t))}function ht(e,l){if(e&1&&(A(0),a(1,dt,1,3,"span",5)(2,ft,1,3,"ChevronUpIcon",6),B()),e&2){let t=r(3);m(),i("ngIf",t._icon),m(),i("ngIf",!t._icon)}}function yt(e,l){}function gt(e,l){if(e&1&&a(0,yt,0,0,"ng-template",9),e&2){r(2);let t=U(2);i("ngIf",!t)}}function bt(e,l){if(e&1&&a(0,ht,3,2,"ng-container",3)(1,gt,1,1,null,4),e&2){let t=r(2);i("ngIf",!t.iconTemplate&&!t._iconTemplate),m(),i("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",T(3,mt))}}function Tt(e,l){if(e&1){let t=Q();V(0,"p-button",2),j("@animation.start",function(n){p(t);let s=r();return u(s.onEnter(n))})("@animation.done",function(n){p(t);let s=r();return u(s.onLeave(n))})("click",function(){p(t);let n=r();return u(n.onClick())}),a(1,bt,2,4,"ng-template",null,0,J),N()}if(e&2){let t=r();i("@animation",q(8,ut,z(5,pt,t.showTransitionOptions,t.hideTransitionOptions)))("styleClass",t.getStyleClass())("ngStyle",t.style)("buttonProps",t.buttonProps),O("aria-label",t.buttonAriaLabel)}}var St=(()=>{class e extends ot{styleClass;style;target="window";threshold=400;get icon(){return this._icon}behavior="smooth";showTransitionOptions=".15s";hideTransitionOptions=".15s";buttonAriaLabel;buttonProps={rounded:!0};iconTemplate;templates;_iconTemplate;_icon;set icon(t){this._icon=t}documentScrollListener;parentScrollListener;visible=!1;overlay;_componentStyle=k(lt);ngOnInit(){super.ngOnInit(),this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}onClick(){(this.target==="window"?this.document.defaultView:this.el.nativeElement.parentElement).scroll({top:0,behavior:this.behavior})}onEnter(t){switch(t.toState){case"open":this.overlay=t.element,d.set("overlay",this.overlay,this.config.zIndex.overlay);break;case"void":this.overlay=null;break}}onLeave(t){switch(t.toState){case"void":d.clear(t.element);break}}checkVisibility(t){t>this.threshold?this.visible=!0:this.visible=!1,this.cd.markForCheck()}bindParentScrollListener(){S(this.platformId)&&(this.parentScrollListener=this.renderer.listen(this.el.nativeElement.parentElement,"scroll",()=>{this.checkVisibility(this.el.nativeElement.parentElement.scrollTop)}))}bindDocumentScrollListener(){S(this.platformId)&&(this.documentScrollListener=this.renderer.listen(this.document.defaultView,"scroll",()=>{this.checkVisibility(tt())}))}unbindParentScrollListener(){this.parentScrollListener&&(this.parentScrollListener(),this.parentScrollListener=null)}unbindDocumentScrollListener(){this.documentScrollListener&&(this.documentScrollListener(),this.documentScrollListener=null)}getStyleClass(){return`p-scrolltop p-button${this.styleClass?` ${this.styleClass}`:""}${this.target!=="window"?" p-scrolltop-sticky":""}`}ngOnDestroy(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.overlay&&(d.clear(this.overlay),this.overlay=null),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=f(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["p-scrollTop"],["p-scrolltop"],["p-scroll-top"]],contentQueries:function(o,n,s){if(o&1&&(y(s,ct,4),y(s,et,4)),o&2){let c;g(c=b())&&(n.iconTemplate=c.first),g(c=b())&&(n.templates=c)}},inputs:{styleClass:"styleClass",style:"style",target:"target",threshold:[2,"threshold","threshold",G],icon:"icon",behavior:"behavior",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",buttonAriaLabel:"buttonAriaLabel",buttonProps:"buttonProps"},standalone:!0,features:[R([lt]),F,D,$],decls:1,vars:1,consts:[["icon",""],["type","button",3,"styleClass","ngStyle","buttonProps","click",4,"ngIf"],["type","button",3,"click","styleClass","ngStyle","buttonProps"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"ngClass"],[3,"styleClass","ngStyle"],[3,"ngIf"]],template:function(o,n){o&1&&a(0,Tt,3,10,"p-button",1),o&2&&i("ngIf",n.visible)},dependencies:[X,W,Z,K,H,it,rt,_],encapsulation:2,data:{animation:[Y("animation",[x("void",C({opacity:0})),x("open",C({opacity:1})),w("void => open",v("{{showTransitionParams}}")),w("open => void",v("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})(),$t=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=P({type:e});static \u0275inj=L({imports:[St,_,_]})}return e})();export{St as a,$t as b};
