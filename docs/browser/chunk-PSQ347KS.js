import{a as ot}from"./chunk-L7ZUMPGK.js";import{g as it}from"./chunk-OEK5ELZZ.js";import{c as d}from"./chunk-IPH36CL3.js";import{c as X,d as v,f as C,g as x,h as w}from"./chunk-U3QUSVWF.js";import{V as tt,W as _,Y as et,_ as nt,h as Y}from"./chunk-VWAJIA7U.js";import{k as G,m as W,p as Z,q as H,t as K,v as S}from"./chunk-NYHB6KWH.js";import{Fc as z,Jb as F,Kb as i,Ob as E,Qc as J,Ub as V,Vb as N,Wb as h,Xb as A,Yb as B,_b as Q,ba as I,bc as j,ca as L,cc as r,fc as y,ha as k,hb as m,hc as g,ic as b,jc as U,qa as p,ra as u,sb as M,sc as R,tb as P,tc as T,ua as f,uc as $,vc as q,wb as D,xb as O,yb as a}from"./chunk-SFPIYYXT.js";var lt=({dt:e})=>`
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
`,st={root:({props:e})=>["p-scrolltop",{"p-scrolltop-sticky":e.target!=="window"}],icon:"p-scrolltop-icon"},rt=(()=>{class e extends et{name="scrolltop";theme=lt;classes=st;static \u0275fac=(()=>{let t;return function(n){return(t||(t=f(e)))(n||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var at=["icon"],ct=(e,l)=>({showTransitionParams:e,hideTransitionParams:l}),pt=e=>({value:"open",params:e}),ut=()=>({styleClass:"p-scrolltop-icon"}),mt=()=>({"font-size":"1rem",scale:"1.5"});function _t(e,l){if(e&1&&h(0,"span",7),e&2){let t=r(4);E(t._icon),i("ngClass","p-scrolltop-icon")}}function dt(e,l){e&1&&h(0,"ChevronUpIcon",8),e&2&&i("styleClass","p-scrolltop-icon")("ngStyle",T(2,mt))}function ft(e,l){if(e&1&&(A(0),a(1,_t,1,3,"span",5)(2,dt,1,3,"ChevronUpIcon",6),B()),e&2){let t=r(3);m(),i("ngIf",t._icon),m(),i("ngIf",!t._icon)}}function ht(e,l){}function yt(e,l){if(e&1&&a(0,ht,0,0,"ng-template",9),e&2){r(2);let t=U(2);i("ngIf",!t)}}function gt(e,l){if(e&1&&a(0,ft,3,2,"ng-container",3)(1,yt,1,1,null,4),e&2){let t=r(2);i("ngIf",!t.iconTemplate&&!t._iconTemplate),m(),i("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",T(3,ut))}}function bt(e,l){if(e&1){let t=Q();V(0,"p-button",2),j("@animation.start",function(n){p(t);let s=r();return u(s.onEnter(n))})("@animation.done",function(n){p(t);let s=r();return u(s.onLeave(n))})("click",function(){p(t);let n=r();return u(n.onClick())}),a(1,gt,2,4,"ng-template",null,0,z),N()}if(e&2){let t=r();i("@animation",$(8,pt,q(5,ct,t.showTransitionOptions,t.hideTransitionOptions)))("styleClass",t.getStyleClass())("ngStyle",t.style)("buttonProps",t.buttonProps),F("aria-label",t.buttonAriaLabel)}}var Tt=(()=>{class e extends nt{styleClass;style;target="window";threshold=400;get icon(){return this._icon}behavior="smooth";showTransitionOptions=".15s";hideTransitionOptions=".15s";buttonAriaLabel;buttonProps={rounded:!0};iconTemplate;templates;_iconTemplate;_icon;set icon(t){this._icon=t}documentScrollListener;parentScrollListener;visible=!1;overlay;_componentStyle=k(rt);ngOnInit(){super.ngOnInit(),this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}onClick(){(this.target==="window"?this.document.defaultView:this.el.nativeElement.parentElement).scroll({top:0,behavior:this.behavior})}onEnter(t){switch(t.toState){case"open":this.overlay=t.element,d.set("overlay",this.overlay,this.config.zIndex.overlay);break;case"void":this.overlay=null;break}}onLeave(t){switch(t.toState){case"void":d.clear(t.element);break}}checkVisibility(t){t>this.threshold?this.visible=!0:this.visible=!1,this.cd.markForCheck()}bindParentScrollListener(){S(this.platformId)&&(this.parentScrollListener=this.renderer.listen(this.el.nativeElement.parentElement,"scroll",()=>{this.checkVisibility(this.el.nativeElement.parentElement.scrollTop)}))}bindDocumentScrollListener(){S(this.platformId)&&(this.documentScrollListener=this.renderer.listen(this.document.defaultView,"scroll",()=>{this.checkVisibility(Y())}))}unbindParentScrollListener(){this.parentScrollListener&&(this.parentScrollListener(),this.parentScrollListener=null)}unbindDocumentScrollListener(){this.documentScrollListener&&(this.documentScrollListener(),this.documentScrollListener=null)}getStyleClass(){return`p-scrolltop p-button${this.styleClass?` ${this.styleClass}`:""}${this.target!=="window"?" p-scrolltop-sticky":""}`}ngOnDestroy(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.overlay&&(d.clear(this.overlay),this.overlay=null),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=f(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["p-scrollTop"],["p-scrolltop"],["p-scroll-top"]],contentQueries:function(o,n,s){if(o&1&&(y(s,at,4),y(s,tt,4)),o&2){let c;g(c=b())&&(n.iconTemplate=c.first),g(c=b())&&(n.templates=c)}},inputs:{styleClass:"styleClass",style:"style",target:"target",threshold:[2,"threshold","threshold",J],icon:"icon",behavior:"behavior",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",buttonAriaLabel:"buttonAriaLabel",buttonProps:"buttonProps"},features:[R([rt]),O,D],decls:1,vars:1,consts:[["icon",""],["type","button",3,"styleClass","ngStyle","buttonProps","click",4,"ngIf"],["type","button",3,"click","styleClass","ngStyle","buttonProps"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"ngClass"],[3,"styleClass","ngStyle"],[3,"ngIf"]],template:function(o,n){o&1&&a(0,bt,3,10,"p-button",1),o&2&&i("ngIf",n.visible)},dependencies:[K,G,W,H,Z,ot,it,_],encapsulation:2,data:{animation:[X("animation",[x("void",C({opacity:0})),x("open",C({opacity:1})),w("void => open",v("{{showTransitionParams}}")),w("open => void",v("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})(),Rt=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=P({type:e});static \u0275inj=L({imports:[Tt,_,_]})}return e})();export{Tt as a,Rt as b};
