var St=new Set;function Xe(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ze(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function kt(e){if(St.add(e),!document.documentElement.classList.contains("wa-scroll-lock")){let t=Xe()+Ze(),o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),t<2&&(o=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",o),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${t}px`)}}function Lt(e){St.delete(e),St.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function Gt(e){return e.split(" ").map(t=>t.trim()).filter(t=>t!=="")}var dt=globalThis,ht=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tt=Symbol(),Xt=new WeakMap,Z=class{constructor(t,o,r){if(this._$cssResult$=!0,r!==Tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o,o=this.t;if(ht&&t===void 0){let r=o!==void 0&&o.length===1;r&&(t=Xt.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Xt.set(o,t))}return t}toString(){return this.cssText}},Zt=e=>new Z(typeof e=="string"?e:e+"",void 0,Tt),g=(e,...t)=>{let o=e.length===1?e[0]:t.reduce((r,s,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Z(o,e,Tt)},Jt=(e,t)=>{if(ht)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of t){let r=document.createElement("style"),s=dt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=o.cssText,e.appendChild(r)}},zt=ht?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(let r of t.cssRules)o+=r.cssText;return Zt(o)})(e):e;var{is:Je,defineProperty:Qe,getOwnPropertyDescriptor:to,getOwnPropertyNames:eo,getOwnPropertySymbols:oo,getPrototypeOf:ro}=Object,R=globalThis,Qt=R.trustedTypes,so=Qt?Qt.emptyScript:"",io=R.reactiveElementPolyfillSupport,J=(e,t)=>e,Q={toAttribute(e,t){switch(t){case Boolean:e=e?so:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},ut=(e,t)=>!Je(e,t),te={attribute:!0,type:String,converter:Q,reflect:!1,useDefault:!1,hasChanged:ut};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);var k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=te){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(t,o),!o.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,o);s!==void 0&&Qe(this.prototype,t,s)}}static getPropertyDescriptor(t,o,r){let{get:s,set:i}=to(this.prototype,t)??{get(){return this[o]},set(a){this[o]=a}};return{get:s,set(a){let d=s?.call(this);i?.call(this,a),this.requestUpdate(t,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??te}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;let t=ro(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){let o=this.properties,r=[...eo(o),...oo(o)];for(let s of r)this.createProperty(s,o[s])}let t=this[Symbol.metadata];if(t!==null){let o=litPropertyMetadata.get(t);if(o!==void 0)for(let[r,s]of o)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[o,r]of this.elementProperties){let s=this._$Eu(o,r);s!==void 0&&this._$Eh.set(s,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let o=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)o.unshift(zt(s))}else t!==void 0&&o.push(zt(t));return o}static _$Eu(t,o){let r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,o=this.constructor.elementProperties;for(let r of o.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,o,r){this._$AK(t,r)}_$ET(t,o){let r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Q).toAttribute(o,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,o){let r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let i=r.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Q;this._$Em=s;let d=a.fromAttribute(o,i.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(t,o,r,s=!1,i){if(t!==void 0){let a=this.constructor;if(s===!1&&(i=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??ut)(i,o)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,o,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,o,{useDefault:r,reflect:s,wrapped:i},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??o??this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(o=void 0),this._$AL.set(t,o)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,i]of r){let{wrapped:a}=i,d=this[s];a!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,i,d)}}let t=!1,o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(o)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(o)}willUpdate(t){}_$AE(t){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[J("elementProperties")]=new Map,k[J("finalized")]=new Map,io?.({ReactiveElement:k}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.1.2");var et=globalThis,ee=e=>e,pt=et.trustedTypes,oe=pt?pt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Mt="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,Rt="?"+L,ao=`<${Rt}>`,U=document,ot=()=>U.createComment(""),rt=e=>e===null||typeof e!="object"&&typeof e!="function",qt=Array.isArray,le=e=>qt(e)||typeof e?.[Symbol.iterator]=="function",It=`[ 	
\f\r]`,tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,se=/>/g,B=RegExp(`>|${It}(?:([^\\s"'>=/]+)(${It}*=${It}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,ae=/"/g,ce=/^(?:script|style|textarea|title)$/i,Pt=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),b=Pt(1),de=Pt(2),he=Pt(3),$=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ne=new WeakMap,O=U.createTreeWalker(U,129);function ue(e,t){if(!qt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return oe!==void 0?oe.createHTML(t):t}var pe=(e,t)=>{let o=e.length-1,r=[],s,i=t===2?"<svg>":t===3?"<math>":"",a=tt;for(let d=0;d<o;d++){let c=e[d],u,w,p=-1,S=0;for(;S<c.length&&(a.lastIndex=S,w=a.exec(c),w!==null);)S=a.lastIndex,a===tt?w[1]==="!--"?a=re:w[1]!==void 0?a=se:w[2]!==void 0?(ce.test(w[2])&&(s=RegExp("</"+w[2],"g")),a=B):w[3]!==void 0&&(a=B):a===B?w[0]===">"?(a=s??tt,p=-1):w[1]===void 0?p=-2:(p=a.lastIndex-w[2].length,u=w[1],a=w[3]===void 0?B:w[3]==='"'?ae:ie):a===ae||a===ie?a=B:a===re||a===se?a=tt:(a=B,s=void 0);let M=a===B&&e[d+1].startsWith("/>")?" ":"";i+=a===tt?c+ao:p>=0?(r.push(u),c.slice(0,p)+Mt+c.slice(p)+L+M):c+L+(p===-2?d:M)}return[ue(e,i+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},st=class e{constructor({strings:t,_$litType$:o},r){let s;this.parts=[];let i=0,a=0,d=t.length-1,c=this.parts,[u,w]=pe(t,o);if(this.el=e.createElement(u,r),O.currentNode=this.el.content,o===2||o===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=O.nextNode())!==null&&c.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let p of s.getAttributeNames())if(p.endsWith(Mt)){let S=w[a++],M=s.getAttribute(p).split(L),ct=/([.?@])?(.*)/.exec(S);c.push({type:1,index:i,name:ct[2],strings:M,ctor:ct[1]==="."?ft:ct[1]==="?"?wt:ct[1]==="@"?vt:D}),s.removeAttribute(p)}else p.startsWith(L)&&(c.push({type:6,index:i}),s.removeAttribute(p));if(ce.test(s.tagName)){let p=s.textContent.split(L),S=p.length-1;if(S>0){s.textContent=pt?pt.emptyScript:"";for(let M=0;M<S;M++)s.append(p[M],ot()),O.nextNode(),c.push({type:2,index:++i});s.append(p[S],ot())}}}else if(s.nodeType===8)if(s.data===Rt)c.push({type:2,index:i});else{let p=-1;for(;(p=s.data.indexOf(L,p+1))!==-1;)c.push({type:7,index:i}),p+=L.length-1}i++}}static createElement(t,o){let r=U.createElement("template");return r.innerHTML=t,r}};function F(e,t,o=e,r){if(t===$)return t;let s=r!==void 0?o._$Co?.[r]:o._$Cl,i=rt(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,o,r)),r!==void 0?(o._$Co??(o._$Co=[]))[r]=s:o._$Cl=s),s!==void 0&&(t=F(e,s._$AS(e,t.values),s,r)),t}var mt=class{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:o},parts:r}=this._$AD,s=(t?.creationScope??U).importNode(o,!0);O.currentNode=s;let i=O.nextNode(),a=0,d=0,c=r[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new j(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new gt(i,this,t)),this._$AV.push(u),c=r[++d]}a!==c?.index&&(i=O.nextNode(),a++)}return O.currentNode=U,s}p(t){let o=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,o),o+=r.strings.length-2):r._$AI(t[o])),o++}},j=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,o,r,s){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,o=this._$AM;return o!==void 0&&t?.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=F(this,t,o),rt(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==$&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):le(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){let{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=st.createElement(ue(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(o);else{let i=new mt(s,this),a=i.u(this.options);i.p(o),this.T(a),this._$AH=i}}_$AC(t){let o=ne.get(t.strings);return o===void 0&&ne.set(t.strings,o=new st(t)),o}k(t){qt(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,r,s=0;for(let i of t)s===o.length?o.push(r=new e(this.O(ot()),this.O(ot()),this,this.options)):r=o[s],r._$AI(i),s++;s<o.length&&(this._$AR(r&&r._$AB.nextSibling,s),o.length=s)}_$AR(t=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);t!==this._$AB;){let r=ee(t).nextSibling;ee(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,r,s,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=o,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=v}_$AI(t,o=this,r,s){let i=this.strings,a=!1;if(i===void 0)t=F(this,t,o,0),a=!rt(t)||t!==this._$AH&&t!==$,a&&(this._$AH=t);else{let d=t,c,u;for(t=i[0],c=0;c<i.length-1;c++)u=F(this,d[r+c],o,c),u===$&&(u=this._$AH[c]),a||(a=!rt(u)||u!==this._$AH[c]),u===v?t=v:t!==v&&(t+=(u??"")+i[c+1]),this._$AH[c]=u}a&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ft=class extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},wt=class extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},vt=class extends D{constructor(t,o,r,s,i){super(t,o,r,s,i),this.type=5}_$AI(t,o=this){if((t=F(this,t,o,0)??v)===$)return;let r=this._$AH,s=t===v&&r!==v||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==v&&(r===v||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},gt=class{constructor(t,o,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}},me={M:Mt,P:L,A:Rt,C:1,L:pe,R:mt,D:le,V:F,I:j,H:D,N:wt,U:vt,B:ft,F:gt},no=et.litHtmlPolyfillSupport;no?.(st,j),(et.litHtmlVersions??(et.litHtmlVersions=[])).push("3.3.2");var fe=(e,t,o)=>{let r=o?.renderBefore??t,s=r._$litPart$;if(s===void 0){let i=o?.renderBefore??null;r._$litPart$=s=new j(t.insertBefore(ot(),i),i,void 0,o??{})}return s._$AI(e),s};var it=globalThis,q=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;let t=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=t.firstChild),t}update(t){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=fe(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}};q._$litElement$=!0,q.finalized=!0,it.litElementHydrateSupport?.({LitElement:q});var lo=it.litElementPolyfillSupport;lo?.({LitElement:q});(it.litElementVersions??(it.litElementVersions=[])).push("4.2.2");var we=g`
  :host {
    --size: 25rem;
    --spacing: var(--wa-space-l);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    background-color: var(--wa-color-surface-raised);
    border: none;
    box-shadow: var(--wa-shadow-l);
    overflow: auto;
    padding: 0;
    margin: 0;
    animation-duration: var(--show-duration);
    animation-timing-function: ease;

    &.show::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }

    &.hide::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }

    &.show.top {
      animation: show-drawer-from-top var(--show-duration) ease;
    }

    &.hide.top {
      animation: show-drawer-from-top var(--hide-duration) ease reverse;
    }

    &.show.end {
      animation: show-drawer-from-end var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.hide.end {
      animation: show-drawer-from-end var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.show.bottom {
      animation: show-drawer-from-bottom var(--show-duration) ease;
    }

    &.hide.bottom {
      animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
    }

    &.show.start {
      animation: show-drawer-from-start var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.hide.start {
      animation: show-drawer-from-start var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .drawer:focus {
    outline: none;
  }

  .top {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .end {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .bottom {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .start {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .header {
    display: flex;
    flex-wrap: nowrap;
    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:last-of-type)) {
    margin-inline-end: var(--wa-spacing-xs);
  }

  .drawer::backdrop {
    /*
        NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
        remove the fallback values here.
      */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.01;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-drawer {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-drawer-from-top {
    from {
      opacity: 0;
      translate: 0 -100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-end {
    from {
      opacity: 0;
      translate: 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-bottom {
    from {
      opacity: 0;
      translate: 0 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-start {
    from {
      opacity: 0;
      translate: -100% 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .drawer {
      border: solid 1px white;
    }
  }
`;var ve=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},ge=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},be=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},ye=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};function at(e,t){return new Promise(o=>{let r=new AbortController,{signal:s}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let i=()=>{e.classList.remove(t),o(),r.abort()};e.addEventListener("animationend",i,{once:!0,signal:s}),e.addEventListener("animationcancel",i,{once:!0,signal:s})})}var K=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{let r=o.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var Bt=new Set,Y=new Map,V,Ot="ltr",Ut="en",$e=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if($e){let e=new MutationObserver(_e);Ot=document.documentElement.dir||"ltr",Ut=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function nt(...e){e.map(t=>{let o=t.$code.toLowerCase();Y.has(o)?Y.set(o,Object.assign(Object.assign({},Y.get(o)),t)):Y.set(o,t),V||(V=t)}),_e()}function _e(){$e&&(Ot=document.documentElement.dir||"ltr",Ut=document.documentElement.lang||navigator.language),[...Bt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var bt=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Bt.add(this.host)}hostDisconnected(){Bt.delete(this.host)}dir(){return`${this.host.dir||Ot}`.toLowerCase()}lang(){return`${this.host.lang||Ut}`.toLowerCase()}getTranslationData(t){var o,r;let s=new Intl.Locale(t.replace(/_/g,"-")),i=s?.language.toLowerCase(),a=(r=(o=s?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&r!==void 0?r:"",d=Y.get(`${i}-${a}`),c=Y.get(i);return{locale:s,language:i,region:a,primary:d,secondary:c}}exists(t,o){var r;let{primary:s,secondary:i}=this.getTranslationData((r=o.lang)!==null&&r!==void 0?r:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[t]||i&&i[t]||o.includeFallback&&V&&V[t])}term(t,...o){let{primary:r,secondary:s}=this.getTranslationData(this.lang()),i;if(r&&r[t])i=r[t];else if(s&&s[t])i=s[t];else if(V&&V[t])i=V[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...o):i}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,o)}};var xe={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};nt(xe);var Ce=xe;var P=class extends bt{};nt(Ce);function T(e,t){let o={waitUntilFirstUpdate:!1,...t};return(r,s)=>{let{update:i}=r,a=Array.isArray(e)?e:[e];r.update=function(d){a.forEach(c=>{let u=c;if(d.has(u)){let w=d.get(u),p=this[u];w!==p&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[s](w,p)}}),i.call(this,d)}}}var co=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,Ee=e=>{throw TypeError(e)},n=(e,t,o,r)=>{for(var s=r>1?void 0:r?ho(t,o):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(r?a(t,o,s):a(s))||s);return r&&s&&co(t,o,s),s},Ae=(e,t,o)=>t.has(e)||Ee("Cannot "+o),Se=(e,t,o)=>(Ae(e,t,"read from private field"),o?o.call(e):t.get(e)),ke=(e,t,o)=>t.has(e)?Ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Le=(e,t,o,r)=>(Ae(e,t,"write to private field"),r?r.call(e,o):t.set(e,o),o);var E=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var uo={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:ut},po=(e=uo,t,o)=>{let{kind:r,metadata:s}=o,i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(o.name,e),r==="accessor"){let{name:a}=o;return{set(d){let c=t.get.call(this);t.set.call(this,d),this.requestUpdate(a,c,e,!0,d)},init(d){return d!==void 0&&this.C(a,void 0,e,d),d}}}if(r==="setter"){let{name:a}=o;return function(d){let c=this[a];t.call(this,d),this.requestUpdate(a,c,e,!0,d)}}throw Error("Unsupported decorator location: "+r)};function l(e){return(t,o)=>typeof o=="object"?po(e,t,o):((r,s,i)=>{let a=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),a?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,o)}function N(e){return l({...e,state:!0,attribute:!1})}var H=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);function W(e,t){return(o,r,s)=>{let i=a=>a.renderRoot?.querySelector(e)??null;if(t){let{get:a,set:d}=typeof r=="object"?o:s??(()=>{let c=Symbol();return{get(){return this[c]},set(u){this[c]=u}}})();return H(o,r,{get(){let c=a.call(this);return c===void 0&&(c=i(this),(c!==null||this.hasUpdated)&&d.call(this,c)),c}})}return H(o,r,{get(){return i(this)}})}}var mo=g`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }

  [hidden] {
    display: none !important;
  }
`,yt,x=class extends q{constructor(){super(),ke(this,yt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,o)=>{if(this.internals?.states)try{o?this.internals.states.add(t):this.internals.states.delete(t)}catch(r){if(String(r).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw r}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let e=this.constructor;for(let[t,o]of e.elementProperties)o.default==="inherit"&&o.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${o.initial}`,!0)}static get styles(){let e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[mo,...e]}attributeChangedCallback(e,t,o){Se(this,yt)||(this.constructor.elementProperties.forEach((r,s)=>{r.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),Le(this,yt,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&this[o]==null&&(this[o]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(t){if(this.didSSR&&!this.hasUpdated){let o=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});o.error=t,this.dispatchEvent(o)}throw t}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};yt=new WeakMap;n([l()],x.prototype,"dir",2);n([l()],x.prototype,"lang",2);n([l({type:Boolean,reflect:!0,attribute:"did-ssr"})],x.prototype,"didSSR",2);var z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$t=e=>(...t)=>({_$litDirective$:e,values:t}),G=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,r){this._$Ct=t,this._$AM=o,this._$Ci=r}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};var X=$t(class extends G{constructor(e){if(super(e),e.type!==z.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let o=e.element.classList;for(let r of this.st)r in t||(o.remove(r),this.st.delete(r));for(let r in t){let s=!!t[r];s===this.st.has(r)||this.nt?.has(r)||(s?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return $}});var C=class extends x{constructor(){super(...arguments),this.localize=new P(this),this.hasSlotController=new K(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),kt(this))}disconnectedCallback(){super.disconnectedCallback(),Lt(this),this.removeOpenListeners()}async requestClose(e){let t=new be({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,at(this.drawer,"pulse");return}this.removeOpenListeners(),await at(this.drawer,"hide"),this.open=!1,this.drawer.close(),Lt(this);let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.dispatchEvent(new ve)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),!this.drawer.classList.contains("hide")&&e.target===this.drawer&&this.requestClose(this.drawer)}handleDialogClick(e){let o=e.target.closest('[data-drawer="close"]');o&&(e.stopPropagation(),this.requestClose(o))}async handleDialogPointerDown(e){e.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await at(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){let e=new ye;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),kt(this),requestAnimationFrame(()=>{let t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.drawer.focus()}),await at(this.drawer,"show"),this.dispatchEvent(new ge)}render(){let e=!this.withoutHeader,t=this.hasSlotController.test("footer");return b`
      <dialog
        part="dialog"
        class=${X({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?b`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"\u200B"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${o=>this.requestClose(o.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${t?b`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};C.css=we;n([W(".drawer")],C.prototype,"drawer",2);n([l({type:Boolean,reflect:!0})],C.prototype,"open",2);n([l({reflect:!0})],C.prototype,"label",2);n([l({reflect:!0})],C.prototype,"placement",2);n([l({attribute:"without-header",type:Boolean,reflect:!0})],C.prototype,"withoutHeader",2);n([l({attribute:"light-dismiss",type:Boolean})],C.prototype,"lightDismiss",2);n([T("open",{waitUntilFirstUpdate:!0})],C.prototype,"handleOpenChange",1);C=n([E("wa-drawer")],C);document.addEventListener("click",e=>{let t=e.target.closest("[data-drawer]");if(t instanceof Element){let[o,r]=Gt(t.getAttribute("data-drawer")||"");if(o==="open"&&r?.length){let i=t.getRootNode().getElementById(r);i?.localName==="wa-drawer"?i.open=!0:console.warn(`A drawer with an ID of "${r}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});var _t=()=>({checkValidity(e){let t=e.input,o={message:"",isValid:!0,invalidKeys:[]};if(!t)return o;let r=!0;if("checkValidity"in t&&(r=t.checkValidity()),r)return o;if(o.isValid=!1,"validationMessage"in t&&(o.message=t.validationMessage),!("validity"in t))return o.invalidKeys.push("customError"),o;for(let s in t.validity){if(s==="valid")continue;let i=s;t.validity[i]&&o.invalidKeys.push(i)}return o}});var Ft=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},fo=()=>({observedAttributes:["custom-error"],checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}),_=class extends x{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Ft))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[fo()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let o of t.observedAttributes)e.add(o);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(!!1&&e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")){let t=this.value;if(Array.isArray(t)){if(this.name){let o=new FormData;for(let r of t)o.append(this.name,r);this.setValue(o,o)}}else this.setValue(t,t)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute("form",e):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],o=e[1],r=e[2];r||(r=this.validationTarget),this.internals.setValidity(t,o,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,o=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&o),this.customStates.set("user-valid",t&&o)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,o]=e;this.internals.setFormValue(t,o)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},o=this.validationTarget||this.input||void 0,r="";for(let s of e){let{isValid:i,message:a,invalidKeys:d}=s.checkValidity(this);i||(r||(r=a),d?.length>=0&&d.forEach(c=>t[c]=!0))}r||(r=this.validationMessage),this.setValidity(t,r,o)}};_.formAssociated=!0;n([l({reflect:!0})],_.prototype,"name",2);n([l({type:Boolean})],_.prototype,"disabled",2);n([l({state:!0,attribute:!1})],_.prototype,"valueHasChanged",2);n([l({state:!0,attribute:!1})],_.prototype,"hasInteracted",2);n([l({attribute:"custom-error",reflect:!0})],_.prototype,"customError",2);n([l({attribute:!1,state:!0,type:Object})],_.prototype,"validity",1);var Te=g`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  .button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button.disabled * {
    pointer-events: none;
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  .button.is-icon-button:has(wa-icon) {
    width: auto;
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-radius: var(--wa-border-radius-pill);
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }

  /*
   * Button group border radius modifications
   */

  /* Remove border radius from all grouped buttons by default */
  :host(.wa-button-group__button) .button {
    border-radius: 0;
  }

  /* Horizontal orientation */
  :host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-form-control-border-radius);
    border-end-start-radius: var(--wa-form-control-border-radius);
  }

  :host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
    border-start-end-radius: var(--wa-form-control-border-radius);
    border-end-end-radius: var(--wa-form-control-border-radius);
  }

  /* Vertical orientation */
  :host(.wa-button-group__vertical) {
    flex: 1 1 auto;
  }

  :host(.wa-button-group__vertical) .button {
    width: 100%;
    justify-content: start;
  }

  :host(.wa-button-group__vertical.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-form-control-border-radius);
    border-start-end-radius: var(--wa-form-control-border-radius);
  }

  :host(.wa-button-group__vertical.wa-button-group__button-last) .button {
    border-end-start-radius: var(--wa-form-control-border-radius);
    border-end-end-radius: var(--wa-form-control-border-radius);
  }

  /* Handle pill modifier for button groups */
  :host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-border-radius-pill);
    border-end-start-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {
    border-start-end-radius: var(--wa-border-radius-pill);
    border-end-end-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-border-radius-pill);
    border-start-end-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {
    border-end-start-radius: var(--wa-border-radius-pill);
    border-end-end-radius: var(--wa-border-radius-pill);
  }
`;var xt=g`
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
`;var ze=g`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;var f=e=>e??v;var Me=Symbol.for(""),wo=e=>{if(e?.r===Me)return e?._$litStatic$};var Dt=(e,...t)=>({_$litStatic$:t.reduce((o,r,s)=>o+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[s+1],e[0]),r:Me}),Ie=new Map,Vt=e=>(t,...o)=>{let r=o.length,s,i,a=[],d=[],c,u=0,w=!1;for(;u<r;){for(c=t[u];u<r&&(i=o[u],(s=wo(i))!==void 0);)c+=s+t[++u],w=!0;u!==r&&d.push(i),a.push(c),u++}if(u===r&&a.push(t[r]),w){let p=a.join("$$lit$$");(t=Ie.get(p))===void 0&&(a.raw=a,Ie.set(p,t=a)),o=d}return e(t,...o)},Ct=Vt(b),Is=Vt(de),Ms=Vt(he);var m=class extends _{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new K(this,"[default]","start","end"),this.localize=new P(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,_t()]}constructLightDOMButton(){let e=document.createElement("button");for(let t of this.attributes)t.name!=="style"&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position="absolute !important",e.style.width="0 !important",e.style.height="0 !important",e.style.clipPath="inset(50%) !important",e.style.overflow="hidden !important",e.style.whiteSpace="nowrap !important",this.name&&(e.name=this.name),e.value=this.value||"",e}handleClick(){if(!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new Ft)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,o=!1,r=!1,s=!1;[...e].forEach(i=>{if(i.nodeType===Node.ELEMENT_NODE){let a=i;a.localName==="wa-icon"?(o=!0,t||(t=a.label!==void 0)):s=!0}else i.nodeType===Node.TEXT_NODE&&(i.textContent?.trim()||"").length>0&&(r=!0)}),this.isIconButton=o&&!r&&!s,this.isIconButton&&!t&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Dt`a`:Dt`button`;return Ct`
      <${t}
        part="base"
        class=${X({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${f(e?void 0:this.disabled)}
        type=${f(e?void 0:this.type)}
        title=${this.title}
        name=${f(e?void 0:this.name)}
        value=${f(e?void 0:this.value)}
        href=${f(e?this.href:void 0)}
        target=${f(e?this.target:void 0)}
        download=${f(e?this.download:void 0)}
        rel=${f(e&&this.rel?this.rel:void 0)}
        role=${f(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ct`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?Ct`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${t}>
    `}};m.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0};m.css=[Te,ze,xt];n([W(".button")],m.prototype,"button",2);n([W("slot:not([name])")],m.prototype,"labelSlot",2);n([N()],m.prototype,"invalid",2);n([N()],m.prototype,"isIconButton",2);n([l()],m.prototype,"title",2);n([l({reflect:!0})],m.prototype,"variant",2);n([l({reflect:!0})],m.prototype,"appearance",2);n([l({reflect:!0})],m.prototype,"size",2);n([l({attribute:"with-caret",type:Boolean,reflect:!0})],m.prototype,"withCaret",2);n([l({type:Boolean})],m.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],m.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],m.prototype,"pill",2);n([l()],m.prototype,"type",2);n([l({reflect:!0})],m.prototype,"name",2);n([l({reflect:!0})],m.prototype,"value",2);n([l({reflect:!0})],m.prototype,"href",2);n([l()],m.prototype,"target",2);n([l()],m.prototype,"rel",2);n([l()],m.prototype,"download",2);n([l({attribute:"formaction"})],m.prototype,"formAction",2);n([l({attribute:"formenctype"})],m.prototype,"formEnctype",2);n([l({attribute:"formmethod"})],m.prototype,"formMethod",2);n([l({attribute:"formnovalidate",type:Boolean})],m.prototype,"formNoValidate",2);n([l({attribute:"formtarget"})],m.prototype,"formTarget",2);n([T("disabled",{waitUntilFirstUpdate:!0})],m.prototype,"handleDisabledChange",1);m=n([E("wa-button")],m);var Re=g`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-dasharray: 75, 100;
    stroke-dashoffset: -5;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;var Nt=class extends x{constructor(){super(...arguments),this.localize=new P(this)}render(){return b`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};Nt.css=Re;Nt=n([E("wa-spinner")],Nt);var qe=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Pe=g`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    height: 1em;
    overflow: visible;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }
`;function vo(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Ht={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},go={name:"system",resolver:(e,t="classic",o="solid")=>{let s=Ht[o][e]??Ht.regular[e]??Ht.regular["circle-question"];return s?vo(s):""}},Be=go;var Wt="";function bo(e){Wt=e}function yo(){if(!Wt){let e=document.querySelector("[data-fa-kit-code]");e&&bo(e.getAttribute("data-fa-kit-code")||"")}return Wt}var I="7.0.1";function $o(e,t,o){let r=yo(),s=r.length>0,i="solid";return t==="notdog"?(o==="solid"&&(i="solid"),o==="duo-solid"&&(i="duo-solid"),`https://ka-p.fontawesome.com/releases/v${I}/svgs/notdog-${i}/${e}.svg?token=${encodeURIComponent(r)}`):t==="chisel"?`https://ka-p.fontawesome.com/releases/v${I}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(r)}`:t==="etch"?`https://ka-p.fontawesome.com/releases/v${I}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(r)}`:t==="jelly"?(o==="regular"&&(i="regular"),o==="duo-regular"&&(i="duo-regular"),o==="fill-regular"&&(i="fill-regular"),`https://ka-p.fontawesome.com/releases/v${I}/svgs/jelly-${i}/${e}.svg?token=${encodeURIComponent(r)}`):t==="slab"?((o==="solid"||o==="regular")&&(i="regular"),o==="press-regular"&&(i="press-regular"),`https://ka-p.fontawesome.com/releases/v${I}/svgs/slab-${i}/${e}.svg?token=${encodeURIComponent(r)}`):t==="thumbprint"?`https://ka-p.fontawesome.com/releases/v${I}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(r)}`:t==="whiteboard"?`https://ka-p.fontawesome.com/releases/v${I}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(r)}`:(t==="classic"&&(o==="thin"&&(i="thin"),o==="light"&&(i="light"),o==="regular"&&(i="regular"),o==="solid"&&(i="solid")),t==="sharp"&&(o==="thin"&&(i="sharp-thin"),o==="light"&&(i="sharp-light"),o==="regular"&&(i="sharp-regular"),o==="solid"&&(i="sharp-solid")),t==="duotone"&&(o==="thin"&&(i="duotone-thin"),o==="light"&&(i="duotone-light"),o==="regular"&&(i="duotone-regular"),o==="solid"&&(i="duotone")),t==="sharp-duotone"&&(o==="thin"&&(i="sharp-duotone-thin"),o==="light"&&(i="sharp-duotone-light"),o==="regular"&&(i="sharp-duotone-regular"),o==="solid"&&(i="sharp-duotone-solid")),t==="brands"&&(i="brands"),s?`https://ka-p.fontawesome.com/releases/v${I}/svgs/${i}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${I}/svgs/${i}/${e}.svg`)}var _o={name:"default",resolver:(e,t="classic",o="solid")=>$o(e,t,o),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute("data-duotone-initialized")){let{family:o,variant:r}=t;if(o==="duotone"||o==="sharp-duotone"||o==="notdog"&&r==="duo-solid"||o==="jelly"&&r==="duo-regular"||o==="thumbprint"){let s=[...e.querySelectorAll("path")],i=s.find(d=>!d.hasAttribute("opacity")),a=s.find(d=>d.hasAttribute("opacity"));if(!i||!a)return;if(i.setAttribute("data-duotone-primary",""),a.setAttribute("data-duotone-secondary",""),t.swapOpacity&&i&&a){let d=a.getAttribute("opacity")||"0.4";i.style.setProperty("--path-opacity",d),a.style.setProperty("--path-opacity","1")}e.setAttribute("data-duotone-initialized","")}}}},Oe=_o;var xo="classic",Co=[Oe,Be],jt=[];function Ue(e){jt.push(e)}function Fe(e){jt=jt.filter(t=>t!==e)}function Et(e){return Co.find(t=>t.name===e)}function De(){return xo}var{I:gi}=me;var Ve=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;var Ne=e=>e.strings===void 0;var Eo={},He=(e,t=Eo)=>e._$AH=t;var Ao=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},lt=Symbol(),At=Symbol(),Kt,Yt=new Map,y=class extends x{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(e,t)=>{let o;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=b`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let r=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(r,this),this.svg}try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?lt:At}catch{return At}try{let r=document.createElement("div");r.innerHTML=await o.text();let s=r.firstElementChild;if(s?.tagName?.toLowerCase()!=="svg")return lt;Kt||(Kt=new DOMParser);let a=Kt.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):lt}catch{return lt}}}connectedCallback(){super.connectedCallback(),Ue(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Fe(this)}getIconSource(){let e=Et(this.library),t=this.family||De();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),o=t?Et(this.library):void 0;if(!e){this.svg=null;return}let r=Yt.get(e);r||(r=this.resolveIcon(e,o),Yt.set(e,r));let s=await r;if(s===At&&Yt.delete(e),e===this.getIconSource().url){if(Ve(s)){this.svg=s;return}switch(s){case At:case lt:this.svg=null,this.dispatchEvent(new Ao);break;default:this.svg=s.cloneNode(!0),o?.mutator?.(this.svg,this),this.dispatchEvent(new qe)}}}updated(e){super.updated(e);let t=Et(this.library),o=this.shadowRoot?.querySelector("svg");o&&t?.mutator?.(o,this)}render(){return this.hasUpdated?this.svg:b`<svg part="svg" width="16" height="16"></svg>`}};y.css=Pe;n([N()],y.prototype,"svg",2);n([l({reflect:!0})],y.prototype,"name",2);n([l({reflect:!0})],y.prototype,"family",2);n([l({reflect:!0})],y.prototype,"variant",2);n([l({attribute:"auto-width",type:Boolean,reflect:!0})],y.prototype,"autoWidth",2);n([l({attribute:"swap-opacity",type:Boolean,reflect:!0})],y.prototype,"swapOpacity",2);n([l()],y.prototype,"src",2);n([l()],y.prototype,"label",2);n([l({reflect:!0})],y.prototype,"library",2);n([T("label")],y.prototype,"handleLabelChange",1);n([T(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],y.prototype,"setIcon",1);y=n([E("wa-icon")],y);var We=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function je(e,t){let o=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!o&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&So(t)})}function So(e){let t=null;if("form"in e&&(t=e.form),!t&&"getForm"in e&&(t=e.getForm()),!t)return;let o=[...t.elements];if(o.length===1){t.requestSubmit(null);return}let r=o.find(s=>s.type==="submit"&&!s.matches(":disabled"));r&&(["input","button"].includes(r.localName)?t.requestSubmit(r):r.click())}var Ke=g`
  :host {
    border-width: 0;
  }

  .text-field {
    flex: auto;
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border var(--wa-transition-normal),
      outline var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;var Ye=g`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);
    line-height: var(--wa-form-control-label-line-height);

    &:not(.has-slotted) {
      display: none;
    }
  }
`;var Ge=$t(class extends G{constructor(e){if(super(e),e.type!==z.PROPERTY&&e.type!==z.ATTRIBUTE&&e.type!==z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ne(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===$||t===v)return t;let o=e.element,r=e.name;if(e.type===z.PROPERTY){if(t===o[r])return $}else if(e.type===z.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return $}else if(e.type===z.ATTRIBUTE&&o.getAttribute(r)===t+"")return $;return He(e),t}});var h=class extends _{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new K(this,"hint","label"),this.localize=new P(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,_t()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new We),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){je(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,o="none"){this.input.setSelectionRange(e,t,o)}setRangeText(e,t,o,r="preserve"){let s=t??this.input.selectionStart,i=o??this.input.selectionEnd;this.input.setRangeText(e,s,i,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,o=this.label?!0:!!e,r=this.hint?!0:!!t,s=this.withClear&&!this.disabled&&!this.readonly,i=this.hasUpdated&&s&&(typeof this.value=="number"||this.value&&this.value.length>0);return b`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${o?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${f(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${f(this.placeholder)}
          minlength=${f(this.minlength)}
          maxlength=${f(this.maxlength)}
          min=${f(this.min)}
          max=${f(this.max)}
          step=${f(this.step)}
          .value=${Ge(this.value??"")}
          autocapitalize=${f(this.autocapitalize)}
          autocomplete=${f(this.autocomplete)}
          autocorrect=${f(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${f(this.pattern)}
          enterkeyhint=${f(this.enterkeyhint)}
          inputmode=${f(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${i?b`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?b`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?b`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:b`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${X({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};h.css=[xt,Ye,Ke];h.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0};n([W("input")],h.prototype,"input",2);n([l()],h.prototype,"title",2);n([l({reflect:!0})],h.prototype,"type",2);n([N()],h.prototype,"value",1);n([l({attribute:"value",reflect:!0})],h.prototype,"defaultValue",2);n([l({reflect:!0})],h.prototype,"size",2);n([l({reflect:!0})],h.prototype,"appearance",2);n([l({type:Boolean,reflect:!0})],h.prototype,"pill",2);n([l()],h.prototype,"label",2);n([l({attribute:"hint"})],h.prototype,"hint",2);n([l({attribute:"with-clear",type:Boolean})],h.prototype,"withClear",2);n([l()],h.prototype,"placeholder",2);n([l({type:Boolean,reflect:!0})],h.prototype,"readonly",2);n([l({attribute:"password-toggle",type:Boolean})],h.prototype,"passwordToggle",2);n([l({attribute:"password-visible",type:Boolean})],h.prototype,"passwordVisible",2);n([l({attribute:"without-spin-buttons",type:Boolean})],h.prototype,"withoutSpinButtons",2);n([l({type:Boolean,reflect:!0})],h.prototype,"required",2);n([l()],h.prototype,"pattern",2);n([l({type:Number})],h.prototype,"minlength",2);n([l({type:Number})],h.prototype,"maxlength",2);n([l()],h.prototype,"min",2);n([l()],h.prototype,"max",2);n([l()],h.prototype,"step",2);n([l()],h.prototype,"autocapitalize",2);n([l()],h.prototype,"autocorrect",2);n([l()],h.prototype,"autocomplete",2);n([l({type:Boolean})],h.prototype,"autofocus",2);n([l()],h.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],h.prototype,"spellcheck",2);n([l()],h.prototype,"inputmode",2);n([l({attribute:"with-label",type:Boolean})],h.prototype,"withLabel",2);n([l({attribute:"with-hint",type:Boolean})],h.prototype,"withHint",2);n([T("step",{waitUntilFirstUpdate:!0})],h.prototype,"handleStepChange",1);h=n([E("wa-input")],h);
//# sourceMappingURL=webawesome.js.map
