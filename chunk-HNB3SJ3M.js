import{I as u,Z as g,aa as y}from"./chunk-XLJVX2TF.js";import{Hc as m,Rb as l,Sb as p,Z as a,ec as d,fc as f,ha as r,kb as s,lb as c,ua as o}from"./chunk-TTQRF6KS.js";var b=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,h=(()=>{class e extends g{name="baseicon";inlineStyles=b;static \u0275fac=(()=>{let t;return function(n){return(t||(t=o(e)))(n||e)}})();static \u0275prov=a({token:e,factory:e.\u0275fac})}return e})();var v=["*"],x=(()=>{class e extends y{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=u(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=o(e)))(n||e)}})();static \u0275cmp=r({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",m],styleClass:"styleClass"},standalone:!0,features:[d([h]),c,s,f],ngContentSelectors:v,decls:1,vars:0,template:function(i,n){i&1&&(l(),p(0))},encapsulation:2,changeDetection:0})}return e})();export{x as a};
