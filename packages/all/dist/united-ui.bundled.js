var UnitedUI=function(t){"use strict";
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const e=new WeakMap,s=t=>"function"==typeof t&&e.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},i={},r={},a=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${a}--\x3e`,c=new RegExp(`${a}|${l}`),h="$lit$";class u{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let i=0,r=-1,l=0;const{strings:u,values:{length:p}}=t;for(;l<p;){const t=o.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)d(e[t].name,h)&&n++;for(;n-- >0;){const e=u[l],s=g.exec(e)[2],n=s.toLowerCase()+h,o=t.getAttribute(n);t.removeAttribute(n);const i=o.split(c);this.parts.push({type:"attribute",index:r,name:s,strings:i}),l+=i.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const n=t.parentNode,o=e.split(c),i=o.length-1;for(let e=0;e<i;e++){let s,i=o[e];if(""===i)s=b();else{const t=g.exec(i);null!==t&&d(t[2],h)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-h.length)+t[3]),s=document.createTextNode(i)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===o[i]?(n.insertBefore(b(),t),s.push(t)):t.data=o[i],l+=i}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&r!==i||(r++,e.insertBefore(b(),t)),i=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),l++}}else o.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const d=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},p=t=>-1!==t.index,b=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class f{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let i,r=0,a=0,l=o.nextNode();for(;r<s.length;)if(i=s[r],p(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=e.pop(),l=o.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const m=` ${a} `;class v{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const i=g.exec(t);e+=null===i?t+(s?m:l):t.substr(0,i.index)+i[1]+i[2]+h+i[3]+a}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const y=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(y(t)||!_(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===i||y(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=i,t(this)}this.value!==i&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(b()),this.endNode=t.appendChild(b())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=b()),t.__insert(this.endNode=b())}insertAfterPart(t){t.__insert(this.startNode=b()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}const t=this.__pendingValue;t!==i&&(y(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):_(t)?this.__commitIterable(t):t===r?(this.value=r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const s=new f(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const o of t)void 0===(s=e[n])&&(s=new x(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(o),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}if(this.__pendingValue===i)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=i}}class C extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends w{}let k=!1;try{const t={get capture(){return k=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class A{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}if(this.__pendingValue===i)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=T(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=i}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(k?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const E=new class{handleAttributeExpressions(t,e,s,n){const o=e[0];if("."===o){return new C(t,e.slice(1),s).parts}return"@"===o?[new A(t,e.slice(1),n.eventContext)]:"?"===o?[new P(t,e.slice(1),s)]:new S(t,e,s).parts}handleTextExpression(t){return new x(t)}};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */function V(t){let e=U.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},U.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(a);return void 0===(s=e.keyString.get(n))&&(s=new u(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const U=new Map,O=new WeakMap;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const R=(t,...e)=>new v(t,e,"html",E),j=133;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */function B(t,e){const{element:{content:s},parts:n}=t,o=document.createTreeWalker(s,j,null,!1);let i=z(n),r=n[i],a=-1,l=0;const c=[];let h=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==r&&r.index===a;)r.index=null!==h?-1:r.index-l,r=n[i=z(n,i)]}c.forEach(t=>t.parentNode.removeChild(t))}const M=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,j,null,!1);for(;s.nextNode();)e++;return e},z=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(p(e))return s}return-1};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const $=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const F=t=>e=>{const s=$(e.type,t);let n=U.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},U.set(s,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const i=e.strings.join(a);if(void 0===(o=n.keyString.get(i))){const s=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(s,t),o=new u(e,s),n.keyString.set(i,o)}return n.stringsArray.set(e.strings,o),o},I=["html","svg"],L=new Set,H=(t,e,s)=>{L.add(t);const n=s?s.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,t);const r=document.createElement("style");for(let t=0;t<i;t++){const e=o[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{I.forEach(e=>{const s=U.get($(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),B(t,s)})})})(t);const a=n.content;s?function(t,e,s=null){const{element:{content:n},parts:o}=t;if(null==s)return void n.appendChild(e);const i=document.createTreeWalker(n,j,null,!1);let r=z(o),a=0,l=-1;for(;i.nextNode();){for(l++,i.currentNode===s&&(a=M(e),s.parentNode.insertBefore(e,s));-1!==r&&o[r].index===l;){if(a>0){for(;-1!==r;)o[r].index+=a,r=z(o,r);return}r=z(o,r)}}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),B(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:D},G=Promise.resolve(!0),K=1,Q=4,X=8,Y=16,Z=32,tt="finalized";class et extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const n=this[t];this[s]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(tt)||t.finalize(),this[tt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=D){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||W,o="function"==typeof n?n:n.fromAttribute;return o?o(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||W.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Z,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=J){const n=this.constructor,o=n._attributeNameForProperty(t,s);if(void 0!==o){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|X,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=this._updateState&~X}}_attributeToProperty(t,e){if(this._updateState&X)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s._classProperties.get(n)||J;this._updateState=this._updateState|Y,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Y}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const n=this.constructor,o=n._classProperties.get(t)||J;n._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||this._updateState&Y||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|Q;const s=this._updatePromise;this._updatePromise=new Promise((s,n)=>{t=s,e=n});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Z}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&K}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}et[tt]=!0;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const st=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:n}=e;return{kind:s,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),nt=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}}:Object.assign({},e,{finisher(s){s.createProperty(e.key,t)}}),ot=(t,e,s)=>{e.constructor.createProperty(s,t)};function it(t){return(e,s)=>void 0!==s?ot(t,e,s):nt(t,e)}
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const rt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol();class lt{constructor(t,e){if(e!==at)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(rt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ct=(t,...e)=>{const s=e.reduce((e,s,n)=>e+(t=>{if(t instanceof lt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1],t[0]);return new lt(s,at)};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ht=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let n=0,o=e.length;n<o;n++){const o=e[n];Array.isArray(o)?t(o,s):s.push(o)}return s}(t);class ut extends et{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){ht(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?rt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ut.finalized=!0,ut.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,i=O.has(e),r=q&&11===e.nodeType&&!!e.host,a=r&&!L.has(n),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let n=O.get(e);void 0===n&&(o(e,e.firstChild),O.set(e,n=new x(Object.assign({templateFactory:V},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:F(n)},s)),a){const t=O.get(l);O.delete(l);const s=t.value instanceof f?t.value.template:void 0;H(n,l,s),o(e,e.firstChild),e.appendChild(l),O.set(e,t)}!i&&r&&window.ShadyCSS.styleElement(e.host)};const dt=ct`
  * {
    --blue: #012774;
    --blue-hover: #0138a7;
    --blue-active: #011e5b;
    --midnight: #001135;
    --teal: #007faa;
    --teal-hover: #00a5dd;
    --teal-active: #005977;
    --bright-blue: #4cbaeb;
    --gray-a: #2e2e2e;
    --gray-a-hover: #545454;
    --gray-a-active: #141414;
    --gray-b: #4c4d4f;
    --gray-c: #696969;
    --gray-c-hover: #8f8f8f;
    --gray-c-active: #5c5c5c;
    --gray-d: #9b9b9b;
    --gray-e: #c0c0c0;
    --gray-f: #e4e4e4;
    --gray-g: #f8f8f8;
    --error: #bf4c4a;
    --warning: #f0a800;
    --success: #7ab800;
    --white: #fff;
  }
`,pt=ct`
  * {
    --text-font-family: Roboto;
    --text-body-sm-font-weight: 400;
    --text-body-sm-font-size: 16px;
    --text-body-sm-line-height: 20px;
    --icon-button-font-family: "FontAwesomePro5 Light";
    --icon-button-font-size: 20px;
    --icon-button-line-height: 24px;
    --text-font-family: "Roboto Slab", sans-serif;
  }
`;ct`
  h2 {
    font-family: "Roboto Slab", sans-serif;
    font-weight: 300;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 20px;
  }
`;var bt=function(t,e,s,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,s,r):o(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r},gt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const ft=ct`
  * {
    --button-active: var(--teal-active);
    --button-background: var(--teal);
    --button-hover: var(--teal-hover);
    --button-text: var(--white);
    --button-prominent-background: var(--blue);
    --button-prominent-hover: var(--blue-hover);
    --button-prominent-active: var(--blue-active);
    --button-subtle-background: none;
    --button-subtle-text: var(--blue);
    --button-subtle-hover: var(--blue-hover);
    --button-subtle-hover-text: var(--white);
    --button-subtle-active: var(--blue-active);
    --button-ghost-background: none;
    --button-ghost-text: var(--blue);
    --button-ghost-hover: var(--gray-g);
    --button-ghost-hover-text: var(--blue-hover);
    --button-ghost-active: var(--gray-f);
    --button-ghost-text-active: var(--blue-active);
  }
`;t.UuiButton=class extends ut{constructor(){super(),this.title="",this._label="",this.disabled=!1,this.prominent=!1,this.ghost=!1,this.subtle=!1,this.textNode=Array.prototype.find.call(this.childNodes,t=>3===t.nodeType),this.label=this.label||this.textNode.textContent||""}static get styles(){return[dt,pt,ft,ct`
        :host {
          display: inline-block;
        }
        button {
          height: 44px;
          margin: 0 10px 20px 10px;
          padding: 12px;
          border-radius: 4px;
          min-width: 130px;
          color: var(--button-text);
          background-color: var(--button-background);
          font-family: var(--text-font-family);
          font-size: var(--text-body-sm-font-size);
          font-weight: var(--text-body-sm-font-weight);
          line-height: var(--text-body-sm-line-height);
        }
        button:hover {
          background-color: var(--button-hover);
        }
        button:active {
          background-color: var(--button-active);
        }
        :host:disabled,
        button:disabled {
          opacity: 0.5;
        }
        button:disabled:hover {
          background-color: var(--button-background);
        }
        button.subtle:disabled:hover {
          background-color: var(--button-subtle-background);
          color: var(--button-subtle-text);
        }
        button.ghost:disabled:hover {
          background-color: var(--button-ghost-background);
        }
        button.prominent:disabled:hover {
          background-color: var(--button-prominent-background);
        }
        button.prominent {
          background-color: var(--button-prominent-background);
        }
        button.prominent:hover {
          background-color: var(--button-prominent-hover);
        }
        button.prominent:active {
          background-color: var(--button-prominent-active);
        }
        button.subtle {
          background: var(--button-subtle-background);
          border-color: var(--button-subtle-text);
          color: var(--button-subtle-text);
        }
        button.subtle:hover {
          background-color: var(--button-subtle-hover);
          color: var(--button-subtle-hover-text);
        }
        button.subtle:active {
          background-color: var(--button-subtle-active);
        }
        button.ghost {
          min-width: 0;
          padding-left: 16px;
          padding-right: 16px;
          background: var(--button-ghost-background);
          border: none;
          color: var(--button-ghost-text);
          text-decoration: underline;
        }
        button.ghost:hover {
          background-color: var(--button-ghost-hover);
          color: var(--button-ghost-hover-text);
        }
        button.ghost:active {
          background-color: var(--button-ghost-active);
        }
      `]}set label(t){this._label=t,this.textNode.textContent=t}get label(){return this._label}connectedCallback(){super.connectedCallback(),this.shadowRoot&&this.shadowRoot.addEventListener("click",t=>{this.disabled&&t.stopImmediatePropagation()},!0)}render(){let t="";return this.prominent?t=`prominent ${t}`:this.subtle?t=`subtle ${t}`:this.ghost&&(t=`ghost ${t}`),R`
      <button class="${t}" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}},bt([it({type:String}),gt("design:type",Object)],t.UuiButton.prototype,"title",void 0),bt([it({type:Boolean}),gt("design:type",Object)],t.UuiButton.prototype,"disabled",void 0),bt([it({type:Boolean}),gt("design:type",Object)],t.UuiButton.prototype,"prominent",void 0),bt([it({type:Boolean}),gt("design:type",Object)],t.UuiButton.prototype,"ghost",void 0),bt([it({type:Boolean}),gt("design:type",Object)],t.UuiButton.prototype,"subtle",void 0),t.UuiButton=bt([st("uui-button"),gt("design:paramtypes",[])],t.UuiButton);var mt=function(t,e,s,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,s,r):o(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r};return t.UuiCard=class extends ut{static get styles(){return ct`
      div {
        border: 1px solid blue;
        border-radius: 5px;
        padding: 10px;
      }
    `}render(){return R`
      <div>
        Aon Card
      </div>
    `}},t.UuiCard=mt([st("uui-card")],t.UuiCard),t.UuiColors=dt,t.UuiTypography=pt,t}({});
