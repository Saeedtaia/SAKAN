import{a as ne}from"./chunk-XZD64LTJ.js";import{K as te}from"./chunk-EDJIBGQP.js";import{W as b,Y as ae,_ as ie}from"./chunk-S74OFOUA.js";import"./chunk-NTCEJVMB.js";import{k as W,m as X,s as Z,t as ee}from"./chunk-Y3DVAAW5.js";import{Ba as V,Bc as f,Cc as T,Dc as y,Ec as $,Ib as C,Jb as p,Lb as G,Mb as O,Nb as D,Ob as w,Tb as a,Ub as i,Vb as c,Zb as R,ac as J,ba as N,bc as s,ca as B,cc as U,dc as q,eb as j,ha as g,hb as r,ic as z,jc as n,kc as v,lc as l,mc as K,nc as Y,qa as L,ra as P,rc as Q,sa as x,sb as h,ta as S,tb as k,ua as _,vb as M,wb as H,xb as m}from"./chunk-TDTMS56S.js";var oe=({dt:e})=>`
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
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
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
`,se={root:({props:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},re=(()=>{class e extends ae{name="avatar";theme=oe;classes=se;static \u0275fac=(()=>{let t;return function(d){return(t||(t=_(e)))(d||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var pe=["*"];function me(e,u){if(e&1&&(a(0,"span",3),n(1),i()),e&2){let t=s();r(),v(t.label)}}function ce(e,u){if(e&1&&c(0,"span",5),e&2){let t=s(2);D(t.icon),p("ngClass","p-avatar-icon")}}function ve(e,u){if(e&1&&m(0,ce,1,3,"span",4),e&2){let t=s(),o=z(5);p("ngIf",t.icon)("ngIfElse",o)}}function fe(e,u){if(e&1){let t=R();a(0,"img",7),J("error",function(d){L(t);let A=s(2);return P(A.imageError(d))}),i()}if(e&2){let t=s(2);p("src",t.image,j),C("aria-label",t.ariaLabel)}}function ge(e,u){if(e&1&&m(0,fe,1,2,"img",6),e&2){let t=s();p("ngIf",t.image)}}var F=(()=>{class e extends ie{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new V;_componentStyle=g(re);imageError(t){this.onImageError.emit(t)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(d){return(t||(t=_(e)))(d||e)}})();static \u0275cmp=h({type:e,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(o,d){o&2&&(C("data-pc-name","avatar")("aria-label",d.ariaLabel)("aria-labelledby",d.ariaLabelledBy),O(d.style),D(d.hostClass),G("p-avatar",!0)("p-component",!0)("p-avatar-circle",d.shape==="circle")("p-avatar-lg",d.size==="large")("p-avatar-xl",d.size==="xlarge")("p-avatar-image",d.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[Q([re]),H],ngContentSelectors:pe,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(o,d){if(o&1&&(U(),q(0),m(1,me,2,1,"span",2)(2,ve,1,2,"ng-template",null,0,$)(4,ge,1,1,"ng-template",null,1,$)),o&2){let A=z(3);r(),p("ngIf",d.label)("ngIfElse",A)}},dependencies:[ee,W,X,b],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=k({type:e});static \u0275inj=B({imports:[F,b,b]})}return e})();var E=class e{transform(u){return u==="M"?"\u0630\u0643\u0631":"\u0623\u0646\u062B\u0649"}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=M({name:"genderTranslate",type:e,pure:!0})},I=class e{arabicNumbers=["\u0660","\u0627\u0644\u0627\u0648\u0644\u064A","\u0627\u0644\u062B\u0627\u0646\u064A\u0629","\u0627\u0644\u062B\u0627\u0644\u062B\u0629","\u0627\u0644\u0631\u0627\u0628\u0639\u0629","\u0627\u0644\u062E\u0627\u0645\u0633\u0629","\u0627\u0644\u0633\u0627\u062F\u0633\u0629","\u0667","\u0668","\u0669"];transform(u){return u.toString().replace(/\d/g,t=>this.arabicNumbers[parseInt(t)])}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=M({name:"arabicNumber",type:e,pure:!0})};function Se(e,u){if(e&1&&(a(0,"div",20),x(),a(1,"svg",21),c(2,"path",22),i(),S(),a(3,"span",23),n(4),i()()),e&2){let t=s(2);r(4),v(t.filterdStudent.telephone)}}function he(e,u){if(e&1&&(a(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"h1",6),n(5),i(),a(6,"span",7),n(7),i()()(),a(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"h2",12),n(13," \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 "),i(),a(14,"dl",13)(15,"div",14)(16,"dt",15),n(17,"\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635"),i(),c(18,"p-avatar",16),i(),a(19,"div",17)(20,"dt",15),n(21,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644"),i(),a(22,"dd",18),n(23),i()(),a(24,"div")(25,"dt",15),n(26,"\u0627\u0644\u062C\u0646\u0633\u064A\u0629"),i(),a(27,"dd",18),n(28),i()(),a(29,"div")(30,"dt",15),n(31,"\u0627\u0644\u062C\u0646\u0633"),i(),a(32,"dd",18),n(33),f(34,"genderTranslate"),i()(),a(35,"div")(36,"dt",15),n(37,"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F"),i(),a(38,"dd",18),n(39),f(40,"date"),i()(),a(41,"div")(42,"dt",15),n(43,"\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u064A\u0644\u0627\u062F"),i(),a(44,"dd",18),n(45),i()(),a(46,"div")(47,"dt",15),n(48,"\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629"),i(),a(49,"dd",18),n(50),i()()()(),a(51,"div",11)(52,"h2",12),n(53," \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 "),i(),a(54,"div",19)(55,"div",20),x(),a(56,"svg",21),c(57,"path",22),i(),S(),a(58,"span",23),n(59),i()(),m(60,Se,5,1,"div",20),a(61,"div",20),x(),a(62,"svg",21),c(63,"path",24)(64,"path",25),i(),S(),a(65,"span",23),n(66),i()(),a(67,"div",26),n(68),i()()()(),a(69,"div",10)(70,"div",11)(71,"h2",12),n(72," \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0623\u0643\u0627\u062F\u064A\u0645\u064A\u0629 "),i(),a(73,"dl",13)(74,"div")(75,"dt",15),n(76,"\u0627\u0644\u0643\u0644\u064A\u0629"),i(),a(77,"dd",18),n(78),i()(),a(79,"div")(80,"dt",27),n(81,"\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062F\u0631\u0627\u0633\u064A\u0629"),i(),a(82,"dd",18)(83,"span",28),n(84),f(85,"arabicNumber"),i()()(),a(86,"div")(87,"dt",15),n(88,"\u0631\u0642\u0645 \u0627\u0644\u063A\u0631\u0641\u0629"),i(),a(89,"dd",18),n(90),i()(),a(91,"div")(92,"dt",15),n(93,"\u0645\u0643\u0627\u0646 \u0627\u0644\u0625\u0642\u0627\u0645\u0629"),i(),a(94,"dd",18),n(95),i()()()(),a(96,"div",11)(97,"h2",12),n(98," \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629 "),i(),a(99,"dl",13)(100,"div")(101,"dt",15),n(102,"\u0627\u0644\u062F\u064A\u0627\u0646\u0629"),i(),a(103,"dd",18),n(104),i()(),a(105,"div")(106,"dt",15),n(107,"\u0630\u0648\u064A \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A"),i(),a(108,"dd",18),n(109),i()(),a(110,"div")(111,"dt",15),n(112,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629"),i(),a(113,"dd",18),n(114),i()(),a(115,"div")(116,"dt",15),n(117,"\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u0644\u062F"),i(),a(118,"dd",18),n(119),i()()()()()()(),a(120,"div",29)(121,"div",30)(122,"span",31),n(123),f(124,"date"),i(),a(125,"span",32),n(126),f(127,"date"),i()()()()()),e&2){let t=s();r(5),K(" \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0644\u0644\u0637\u0627\u0644\u0628 - ",t.filterdStudent.firstName," ",t.filterdStudent.fourthName," "),r(2),l(" \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0623\u0643\u0627\u062F\u064A\u0645\u064A: ",t.filterdStudent.studentCode," "),r(11),p("styleClass","m-auto"),r(5),Y(" ",t.filterdStudent.firstName," ",t.filterdStudent.secondName," ",t.filterdStudent.thirdName," ",t.filterdStudent.fourthName," "),r(5),l(" ",t.filterdStudent.countryId," "),r(5),l(" ",T(34,27,t.filterdStudent.gender)," "),r(6),l(" ",y(40,29,t.filterdStudent.birthDate,"dd MMMM y")," "),r(6),l(" ",t.filterdStudent.placeOfBirth," "),r(5),l(" ",t.filterdStudent.isMarried?"\u0645\u062A\u0632\u0648\u062C":"\u0623\u0639\u0632\u0628"," "),r(9),v(t.filterdStudent.phone),r(),w(t.filterdStudent.telephone?60:-1),r(6),v(t.filterdStudent.email),r(2),l(" ",t.filterdStudent.addressLine," "),r(10),l(" ",t.filterdStudent.collegeID," "),r(6),l(" \u0627\u0644\u0641\u0631\u0642\u0629 ",T(85,32,t.filterdStudent.academicYear)," "),r(6),l(" ",t.filterdStudent.roomID," "),r(5),l(" ",t.filterdStudent.residencePlace," "),r(9),l(" ",t.filterdStudent.religion," "),r(5),l(" ",t.filterdStudent.hasSpecialNeeds?"\u0646\u0639\u0645":"\u0644\u0627"," "),r(5),l(" ",t.filterdStudent.nationalID," "),r(5),l(" ",t.filterdStudent.guardianID," "),r(4),l(" \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0642\u062F\u064A\u0645: ",y(124,34,t.filterdStudent.birthDate,"dd/MM/yyyy")," "),r(3),l(" \u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B: ",y(127,37,t.currentDate,"dd/MM/yyyy")," ")}}var de=class e{filterdStudent;currentDate=new Date;route=g(te);students=ne;ngOnInit(){this.route.paramMap.subscribe(u=>{let t=u.get("StudentId");t&&(this.filterdStudent=this.students.find(o=>o.nationalID.toString()===t))})}getTranslatedGender(u){return u==="M"?"\u0630\u0643\u0631":"\u0623\u0646\u062B\u0649"}getMaritalStatus(u){return u?"\u0645\u062A\u0632\u0648\u062C":"\u0623\u0639\u0632\u0628"}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=h({type:e,selectors:[["app-student-details"]],decls:4,vars:1,consts:[[1,"rounded-3xl","bg-slate-50"],["dir","auto",1,"bg-gray-100","min-h-screen","[font-family:'Noto_Naskh_Arabic',_sans-serif]"],[1,"container","mx-auto","px-4","py-8"],[1,"bg-white","rounded-2xl","shadow-lg","overflow-hidden"],[1,"bg-[#012A5B]","p-6"],[1,"flex","flex-wrap","justify-between","items-center","gap-4"],[1,"text-2xl","font-bold","text-white","text-start"],[1,"bg-white","text-[#012A5B]","px-4","py-2","rounded-full","text-sm","font-semibold","rtl:ms-2","ltr:me-2"],[1,"p-6"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-6"],[1,"space-y-6"],[1,"space-y-4"],[1,"text-xl","font-bold","text-gray-800","border-b-2","border-blue-100","pb-2","text-start"],[1,"grid","grid-cols-2","gap-4"],[1,"col-span-2","text-center"],[1,"text-sm","text-gray-500","text-start"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","size","xlarge","shape","circle",3,"styleClass"],[1,"col-span-2"],[1,"font-semibold","text-gray-800","text-start"],[1,"space-y-2"],[1,"flex","items-center","gap-2","rtl:flex-row-reverse"],["viewBox","0 0 20 20",1,"w-5","h-5","text-gray-500","shrink-0"],["d","M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"],[1,"font-semibold"],["d","M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"],["d","M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"],[1,"mt-2","text-sm","text-gray-600"],[1,"text-sm","text-gray-500","text-start","mb-2"],[1,"bg-blue-100","text-blue-800","px-2","py-1","rounded"],[1,"bg-gray-50","px-6","py-4"],[1,"flex","flex-wrap","justify-between","items-center","gap-4","text-sm","text-gray-600"],[1,"order-last","rtl:order-first"],[1,"order-first","rtl:order-last"]],template:function(t,o){t&1&&(a(0,"section")(1,"div",0)(2,"div",1),m(3,he,128,40,"div",2),i()()()),t&2&&(r(3),w(o.filterdStudent?3:-1))},dependencies:[le,F,Z,E,I],encapsulation:2})};export{de as StudentDetailsComponent};
