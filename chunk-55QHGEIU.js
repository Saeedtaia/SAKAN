import{$ as v,Z as F}from"./chunk-R2EHUQXL.js";import{t as y}from"./chunk-3OFQ5LXI.js";import{$ as s,Bb as p,Sb as u,Tb as m,aa as l,fa as c,fc as g,gc as h,ja as f,ka as d,mb as r,va as t,zb as a}from"./chunk-VI74OV7Z.js";var $=({dt:e})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${e("icon.size")} / 2));
    color: ${e("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
    margin-top: calc(-1 * (${e("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
    margin-top: calc(-1 * (${e("form.field.lg.font.size")} / 2));
}
`,I={root:"p-iconfield"},M=(()=>{class e extends F{name="iconfield";theme=$;classes=I;static \u0275fac=(()=>{let i;return function(n){return(i||(i=t(e)))(n||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})(),z=function(e){return e.root="p-iconfield",e}(z||{}),C=["*"],D=(()=>{class e extends v{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=c(M);static \u0275fac=(()=>{let i;return function(n){return(i||(i=t(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(o,n){o&2&&(p(n._styleClass),a("p-iconfield-left",n.iconPosition==="left")("p-iconfield-right",n.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},standalone:!0,features:[g([M]),r,h],ngContentSelectors:C,decls:1,vars:0,template:function(o,n){o&1&&(u(),m(0))},dependencies:[y],encapsulation:2,changeDetection:0})}return e})(),A=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=d({type:e});static \u0275inj=l({imports:[D]})}return e})();export{M as a,z as b,D as c,A as d};
