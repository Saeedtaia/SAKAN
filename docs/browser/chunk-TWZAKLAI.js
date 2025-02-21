import{d as v,v as We}from"./chunk-NYHB6KWH.js";import{Ba as V,C as Fe,Ca as I,Fb as Ue,G as B,Ga as N,I as ee,Ia as H,Ja as Pe,K as Ne,Ka as te,Ma as ie,Mb as Ve,Oa as Be,Pa as ne,Qa as je,Tc as He,U as j,Uc as Ke,V as Re,X as U,Y as Le,a as u,ba as c,ca as p,d as Me,ea as A,f as Te,ha as r,i as b,j as ke,ma as Se,p as xe,sb as R,tb as f,u as F,ub as L,v as Ce,wa as k,y as Oe}from"./chunk-SFPIYYXT.js";function ze(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var oe;try{oe=typeof Intl<"u"&&Intl.v8BreakIterator}catch{oe=!1}var _=(()=>{class i{_platformId=r(Be);isBrowser=this._platformId?We(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||oe)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var S;function ft(){if(S==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>S=!0}))}finally{S=S||!1}return S}function C(i){return ft()?i:!!i.capture}var D;function li(){if(D==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return D=!1,D;if("scrollBehavior"in document.documentElement.style)D=!0;else{let i=Element.prototype.scrollTo;i?D=!/\{\s*\[native code\]\s*\}/.test(i.toString()):D=!1}}return D}var se;function _t(){if(se==null){let i=typeof document<"u"?document.head:null;se=!!(i&&(i.createShadowRoot||i.attachShadow))}return se}function Ge(i){if(_t()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function y(i){return i.composedPath?i.composedPath()[0]:i.target}function ui(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var K=new WeakMap,W=(()=>{class i{_appRef;_injector=r(k);_environmentInjector=r(Se);load(e){let t=this._appRef=this._appRef||this._injector.get(Ue),s=K.get(t);s||(s={loaders:new Set,refs:[]},K.set(t,s),t.onDestroy(()=>{K.get(t)?.refs.forEach(o=>o.destroy()),K.delete(t)})),s.loaders.has(e)||(s.loaders.add(e),s.refs.push(Ke(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),re=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,s){},styles:[".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}"],encapsulation:2,changeDetection:0})}return i})();function yi(i){return i!=null&&`${i}`!="false"}function Ii(i,n=0){return gt(i)?Number(i):arguments.length===2?n:0}function gt(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function ae(i){return Array.isArray(i)?i:[i]}function Ei(i){return i==null?"":typeof i=="string"?i:`${i}px`}function w(i){return i instanceof N?i.nativeElement:i}var bt=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ye=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=f({type:i});static \u0275inj=p({providers:[bt]})}return i})();var Ze=new Set,M,vt=(()=>{class i{_platform=r(_);_nonce=r(je,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):It}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&yt(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function yt(i,n){if(!Ze.has(i))try{M||(M=document.createElement("style"),n&&M.setAttribute("nonce",n),M.setAttribute("type","text/css"),document.head.appendChild(M)),M.sheet&&(M.sheet.insertRule(`@media ${i} {body{ }}`,0),Ze.add(i))}catch(e){console.error(e)}}function It(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Xe=(()=>{class i{_mediaMatcher=r(vt);_zone=r(I);_queries=new Map;_destroySubject=new b;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Qe(ae(e)).some(s=>this._registerQuery(s).mql.matches)}observe(e){let s=Qe(ae(e)).map(a=>this._registerQuery(a).observable),o=Ce(s);return o=Oe(o.pipe(ee(1)),o.pipe(j(1),B(0))),o.pipe(F(a=>{let d={matches:!1,breakpoints:{}};return a.forEach(({matches:h,query:g})=>{d.matches=d.matches||h,d.breakpoints[g]=h}),d}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new Te(a=>{let d=h=>this._zone.run(()=>a.next(h));return t.addListener(d),()=>{t.removeListener(d)}}).pipe(Re(t),F(({matches:a})=>({query:e,matches:a})),U(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Qe(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var it=" ";function Vt(i,n,e){let t=Y(i,n);e=e.trim(),!t.some(s=>s.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(it)))}function Ht(i,n,e){let t=Y(i,n);e=e.trim();let s=t.filter(o=>o!==e);s.length?i.setAttribute(n,s.join(it)):i.removeAttribute(n)}function Y(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var nt="cdk-describedby-message",z="cdk-describedby-host",ue=0,Ji=(()=>{class i{_platform=r(_);_document=r(v);_messageRegistry=new Map;_messagesContainer=null;_id=`${ue++}`;constructor(){r(W).load(re),this._id=r(ie)+"-"+ue++}describe(e,t,s){if(!this._canBeDescribed(e,t))return;let o=ce(t,s);typeof t!="string"?(qe(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,s),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,s){if(!t||!this._isElementNode(e))return;let o=ce(t,s);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${z}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(z);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let s=this._document.createElement("div");qe(s,this._id),s.textContent=e,t&&s.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(s),this._messageRegistry.set(ce(e,t),{messageElement:s,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let s=this._document.createElement("div");s.style.visibility="hidden",s.classList.add(e),s.classList.add("cdk-visually-hidden"),this._platform.isBrowser||s.setAttribute("platform","server"),this._document.body.appendChild(s),this._messagesContainer=s}_removeCdkDescribedByReferenceIds(e){let t=Y(e,"aria-describedby").filter(s=>s.indexOf(nt)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let s=this._messageRegistry.get(t);Vt(e,"aria-describedby",s.messageElement.id),e.setAttribute(z,this._id),s.referenceCount++}_removeMessageReference(e,t){let s=this._messageRegistry.get(t);s.referenceCount--,Ht(e,"aria-describedby",s.messageElement.id),e.removeAttribute(z)}_isElementDescribedByMessage(e,t){let s=Y(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&s.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let s=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return s?!o||o.trim()!==s:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ce(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function qe(i,n){i.id||(i.id=`${nt}-${n}-${ue++}`)}var Kt=200,he=class{_letterKeyStream=new b;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new b;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Kt;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Le(e=>this._pressedLetters.push(e)),B(n),Fe(()=>this._pressedLetters.length>0),F(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let s=(this._selectedItemIndex+t)%this._items.length,o=this._items[s];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}},me=class{_items;_activeItemIndex=-1;_activeItem=Pe(null);_wrap=!1;_typeaheadSubscription=Me.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof te?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):H(n)&&(this._effectRef=He(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new b;change=new b;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new he(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex)}onKeydown(n){let e=n.keyCode,s=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&s){this.setNextItemActive();break}else return;case 38:if(this._vertical&&s){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&s){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&s){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&s){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&s){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&s){let o=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&s){let o=this._activeItemIndex+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(s||ze(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),s=e[t];this._activeItem.set(s??null),this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let s=(this._activeItemIndex+n*t+e.length)%e.length,o=e[s];if(!this._skipPredicateFn(o)){this.setActiveItem(s);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return H(this._items)?this._items():this._items instanceof te?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex&&(this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Je=class extends me{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};function pe(i){return i.buttons===0||i.detail===0}function fe(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Wt=new A("cdk-input-modality-detector-options"),zt={ignoreKeys:[18,17,224,91,16]},st=650,O=C({passive:!0,capture:!0}),Gt=(()=>{class i{_platform=r(_);modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ke(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=y(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<st||(this._modality.next(pe(e)?"keyboard":"mouse"),this._mostRecentTarget=y(e))};_onTouchstart=e=>{if(fe(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=y(e)};constructor(){let e=r(I),t=r(v),s=r(Wt,{optional:!0});this._options=u(u({},zt),s),this.modalityDetected=this._modality.pipe(j(1)),this.modalityChanged=this.modalityDetected.pipe(Ne()),this._platform.isBrowser&&e.runOutsideAngular(()=>{t.addEventListener("keydown",this._onKeydown,O),t.addEventListener("mousedown",this._onMousedown,O),t.addEventListener("touchstart",this._onTouchstart,O)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,O),document.removeEventListener("mousedown",this._onMousedown,O),document.removeEventListener("touchstart",this._onTouchstart,O))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var $=function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i}($||{}),$t=new A("cdk-focus-monitor-default-options"),G=C({passive:!0,capture:!0}),en=(()=>{class i{_ngZone=r(I);_platform=r(_);_inputModalityDetector=r(Gt);_origin=null;_lastFocusOrigin;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=r(v,{optional:!0});_stopInputModalityDetector=new b;constructor(){let e=r($t,{optional:!0});this._detectionMode=e?.detectionMode||$.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=y(e);for(let s=t;s;s=s.parentElement)e.type==="focus"?this._onFocus(e,s):this._onBlur(e,s)};monitor(e,t=!1){let s=w(e);if(!this._platform.isBrowser||s.nodeType!==1)return xe();let o=Ge(s)||this._getDocument(),a=this._elementInfo.get(s);if(a)return t&&(a.checkChildren=!0),a.subject;let d={checkChildren:t,subject:new b,rootNode:o};return this._elementInfo.set(s,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(e){let t=w(e),s=this._elementInfo.get(t);s&&(s.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(s))}focusVia(e,t,s){let o=w(e),a=this._getDocument().activeElement;o===a?this._getClosestElementsInfo(o).forEach(([d,h])=>this._originChanged(d,t,h)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(s))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===$.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===$.IMMEDIATE){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?st:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(e,t){let s=this._elementInfo.get(t),o=y(e);!s||!s.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),s)}_onBlur(e,t){let s=this._elementInfo.get(t);!s||s.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(s,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,s=this._rootNodeFocusListenerCount.get(t)||0;s||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,G),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,G)}),this._rootNodeFocusListenerCount.set(t,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(U(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let s=this._rootNodeFocusListenerCount.get(t);s>1?this._rootNodeFocusListenerCount.set(t,s-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,G),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,G),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,s){this._setClasses(e,t),this._emitOrigin(s,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((s,o)=>{(o===e||s.checkChildren&&o.contains(e))&&t.push([o,s])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:s}=this._inputModalityDetector;if(s!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var T=function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i}(T||{}),et="cdk-high-contrast-black-on-white",tt="cdk-high-contrast-white-on-black",de="cdk-high-contrast-active",_e=(()=>{class i{_platform=r(_);_hasCheckedHighContrastMode;_document=r(v);_breakpointSubscription;constructor(){this._breakpointSubscription=r(Xe).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return T.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,s=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(s&&s.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return T.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return T.BLACK_ON_WHITE}return T.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(de,et,tt),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===T.BLACK_ON_WHITE?e.add(de,et):t===T.WHITE_ON_BLACK&&e.add(de,tt)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),tn=(()=>{class i{constructor(){r(_e)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=f({type:i});static \u0275inj=p({imports:[Ye]})}return i})(),le={},Yt=(()=>{class i{_appId=r(ie);getId(e){return this._appId!=="ng"&&(e+=this._appId),le.hasOwnProperty(e)||(le[e]=0),`${e}${le[e]++}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Xt=new A("cdk-dir-doc",{providedIn:"root",factory:qt});function qt(){return r(v)}var Jt=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ei(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Jt.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var hn=(()=>{class i{value="ltr";change=new V;constructor(){let e=r(Xt,{optional:!0});if(e){let t=e.body?e.body.dir:null,s=e.documentElement?e.documentElement.dir:null;this.value=ei(t||s||"ltr")}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ge=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=f({type:i});static \u0275inj=p({})}return i})();var ot=(()=>{class i{constructor(){r(_e)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=f({type:i});static \u0275inj=p({imports:[ge,ge]})}return i})();var Xn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,s){},styles:['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}'],encapsulation:2,changeDetection:0})}return i})();var m=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i}(m||{}),ye=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=m.HIDDEN;constructor(n,e,t,s=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=s}fadeOut(){this._renderer.fadeOutRipple(this)}},rt=C({passive:!0,capture:!0}),Ie=class{_events=new Map;addHandler(n,e,t,s){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(s):o.set(t,new Set([s]))}else this._events.set(e,new Map([[t,new Set([s])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,rt)})}removeHandler(n,e,t){let s=this._events.get(n);if(!s)return;let o=s.get(e);o&&(o.delete(t),o.size===0&&s.delete(e),s.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,rt)))}_delegateEventHandler=n=>{let e=y(n);e&&this._events.get(n.type)?.forEach((t,s)=>{(s===e||s.contains(e))&&t.forEach(o=>o.handleEvent(n))})}},Q={enterDuration:225,exitDuration:150},ti=800,at=C({passive:!0,capture:!0}),ct=["mousedown","touchstart"],dt=["mouseup","mouseleave","touchend","touchcancel"],ii=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,s){},styles:[".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}"],encapsulation:2,changeDetection:0})}return i})(),X=class i{_target;_ngZone;_platform;_containerElement;_triggerElement;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect;static _eventManager=new Ie;constructor(n,e,t,s,o){this._target=n,this._ngZone=e,this._platform=s,s.isBrowser&&(this._containerElement=w(t)),o&&o.get(W).load(ii)}fadeInRipple(n,e,t={}){let s=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=u(u({},Q),t.animation);t.centered&&(n=s.left+s.width/2,e=s.top+s.height/2);let a=t.radius||ni(n,e,s),d=n-s.left,h=e-s.top,g=o.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${d-a}px`,l.style.top=`${h-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${g}ms`,this._containerElement.appendChild(l);let Ee=window.getComputedStyle(l),pt=Ee.transitionProperty,Ae=Ee.transitionDuration,q=pt==="none"||Ae==="0s"||Ae==="0s, 0s"||s.width===0&&s.height===0,E=new ye(this,l,t,q);l.style.transform="scale3d(1, 1, 1)",E.state=m.FADING_IN,t.persistent||(this._mostRecentTransientRipple=E);let P=null;return!q&&(g||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let De=()=>{P&&(P.fallbackTimer=null),clearTimeout(we),this._finishRippleTransition(E)},J=()=>this._destroyRipple(E),we=setTimeout(J,g+100);l.addEventListener("transitionend",De),l.addEventListener("transitioncancel",J),P={onTransitionEnd:De,onTransitionCancel:J,fallbackTimer:we}}),this._activeRipples.set(E,P),(q||!g)&&this._finishRippleTransition(E),E}fadeOutRipple(n){if(n.state===m.FADING_OUT||n.state===m.HIDDEN)return;let e=n.element,t=u(u({},Q),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=m.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=w(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ct.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{dt.forEach(e=>{this._triggerElement.addEventListener(e,this,at)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===m.FADING_IN?this._startFadeOutTransition(n):n.state===m.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=m.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=m.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=pe(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ti;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!fe(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===m.VISIBLE||n.config.terminateOnPointerUp&&n.state===m.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(ct.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(dt.forEach(e=>n.removeEventListener(e,this,at)),this._pointerUpEventsRegistered=!1))}};function ni(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),s=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+s*s)}var mt=new A("mat-ripple-global-options"),qn=(()=>{class i{_elementRef=r(N);_animationMode=r(ne,{optional:!0});color;unbounded;centered;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=r(I),t=r(_),s=r(mt,{optional:!0}),o=r(k);this._globalOptions=s||{},this._rippleRenderer=new X(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:u(u(u({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,s){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,u(u({},this.rippleConfig),s)):this._rippleRenderer.fadeInRipple(0,0,u(u({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=L({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,s){t&2&&Ve("mat-ripple-unbounded",s.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})(),Jn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=f({type:i});static \u0275inj=p({imports:[ot,ot]})}return i})();var lt={capture:!0},ut=["focus","mousedown","mouseenter","touchstart"],be="mat-ripple-loader-uninitialized",ve="mat-ripple-loader-class-name",ht="mat-ripple-loader-centered",Z="mat-ripple-loader-disabled",es=(()=>{class i{_document=r(v,{optional:!0});_animationMode=r(ne,{optional:!0});_globalRippleOptions=r(mt,{optional:!0});_platform=r(_);_ngZone=r(I);_injector=r(k);_hosts=new Map;constructor(){this._ngZone.runOutsideAngular(()=>{for(let e of ut)this._document?.addEventListener(e,this._onInteraction,lt)})}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);for(let t of ut)this._document?.removeEventListener(t,this._onInteraction,lt)}configureRipple(e,t){e.setAttribute(be,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(ve))&&e.setAttribute(ve,t.className||""),t.centered&&e.setAttribute(ht,""),t.disabled&&e.setAttribute(Z,"")}setDisabled(e,t){let s=this._hosts.get(e);s?(s.target.rippleDisabled=t,!t&&!s.hasSetUpEvents&&(s.hasSetUpEvents=!0,s.renderer.setupTriggerEvents(e))):t?e.setAttribute(Z,""):e.removeAttribute(Z)}_onInteraction=e=>{let t=y(e);if(t instanceof HTMLElement){let s=t.closest(`[${be}="${this._globalRippleOptions?.namespace??""}"]`);s&&this._createRipple(s)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(ve)),e.append(t);let s=this._animationMode==="NoopAnimations",o=this._globalRippleOptions,a=s?0:o?.animation?.enterDuration??Q.enterDuration,d=s?0:o?.animation?.exitDuration??Q.exitDuration,h={rippleDisabled:s||o?.disabled||e.hasAttribute(Z),rippleConfig:{centered:e.hasAttribute(ht),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:d}}},g=new X(h,this._ngZone,t,this._platform,this._injector),l=!h.rippleDisabled;l&&g.setupTriggerEvents(e),this._hosts.set(e,{target:h,renderer:g,hasSetUpEvents:l}),e.removeAttribute(be)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();export{yi as a,Ii as b,ae as c,Ei as d,w as e,ze as f,_ as g,C as h,li as i,y as j,ui as k,W as l,Ji as m,Je as n,pe as o,fe as p,en as q,tn as r,Yt as s,hn as t,ge as u,ot as v,Xn as w,qn as x,Jn as y,es as z};
