!function(e){function t(t){for(var n,i,s=t[0],o=t[1],a=0,l=[];a<s.length;a++)i=s[a],r[i]&&l.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={5:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,i){n=r[e]=[t,i]});t.push(n[2]=s);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+e+".sl-app.js"}(e);var c=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,n[1](c)}r[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var c=o;i(i.s=12)}([function(e,t,n){"use strict";(function(e,r){var i,s=n(3);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var o=Object(s.a)(i);t.a=o}).call(this,n(10),n(11)(e))},function(e){e.exports=JSON.parse('[{"id":1,"name":"Lasagna","description":"Tasty lasagna from the fair","sellPrice":100},{"id":2,"name":"Glowing Fruit","description":"Rare Luarian glowing fruit","sellPrice":500},{"id":3,"name":"Rock","description":"Just a rock","sellPrice":5},{"id":4,"name":"Rock, paper, scissors","description":"An odd assortment of items. Maybe we can play with this.","sellPrice":100,"journey":"rock-paper-scissors.json"},{"id":5,"name":"Paperclip","description":"Clips papers together","sellPrice":20},{"id":6,"name":"Scissors","description":"Undoes paper","sellPrice":50}]')},function(e){e.exports=JSON.parse('[{"id":1,"name":"arko","defaultCoatId":2,"coats":[{"id":1,"name":"albino"},{"id":2,"name":"Luarian"},{"id":3,"name":"melanistic"},{"id":4,"name":"piebald"},{"id":5,"name":"Saylian"},{"id":6,"name":"Earthen"}],"vocab":{"coat":"fur","chirp":"bark","purr":"pant","growl":"growl","nose":"nose"},"grammar":{"plural":"arkos","article":"an"},"facesRight":true,"headshotPosition":{"left":220,"top":100,"size":130},"quotes":[{"text":"They\'re mostly quiet. But you can hear their loyalty in their gentle pawsteps. And you should always listen when an arko barks.","attribution":"Vera Everly"}],"size":{"mean":40,"variance":5,"name":"Length"},"weight":{"mean":50,"variance":5}},{"id":2,"name":"chirling","defaultCoatId":5,"coats":[{"id":1,"name":"albino"},{"id":2,"name":"Luarian"},{"id":3,"name":"melanistic"},{"id":4,"name":"piebald"},{"id":5,"name":"Saylian"}],"vocab":{"coat":"down","chirp":"chirp","purr":"coo","growl":"squawk","nose":"beak"},"grammar":{"plural":"chirlings","article":"a"},"facesRight":true,"headshotPosition":{"left":110,"top":60,"size":120},"quotes":[{"text":"The chirlings would chirp so loudly I couldn\'t sleep. But after the day they disappeared, I felt that some part of me had disappeared as well.","attribution":"Anonymous"}],"size":{"mean":50,"variance":10,"name":"Wingspan"},"weight":{"mean":20,"variance":5}},{"id":3,"name":"nibian","defaultCoatId":5,"coats":[{"id":1,"name":"albino"},{"id":2,"name":"Luarian"},{"id":3,"name":"melanistic"},{"id":4,"name":"piebald"},{"id":5,"name":"Saylian"}],"vocab":{"coat":"skin","chirp":"squeak","purr":"gurgle","purring":"gurgling","growl":"hiss","growls":"hisses","nose":"nose"},"grammar":{"plural":"nibians","article":"a"},"facesRight":false,"headshotPosition":{"left":5,"top":170,"size":120},"quotes":[{"text":"I can never swim faster than my nibian. I\'m not sure why I try.","attribution":"Rufus Scippio"}],"size":{"mean":60,"variance":10,"name":"Length"},"weight":{"mean":20,"variance":5}},{"id":4,"name":"gam","defaultCoatId":5,"coats":[{"id":1,"name":"albino"},{"id":2,"name":"Luarian"},{"id":3,"name":"melanistic"},{"id":4,"name":"piebald"},{"id":5,"name":"Saylian"}],"vocab":{"coat":"fur","chirp":"baa","purr":"hum","purring":"humming","growl":"bleat","nose":"nose"},"grammar":{"plural":"gams","article":"a"},"facesRight":true,"headshotPosition":{"left":210,"top":10,"size":120},"quotes":[{"text":"My gam has coarse fur, sharp horns, and hard hooves. Her voice is rough as sand. And still, she\'s the gentlest beast I know.","attribution":"Anonymous"}],"size":{"mean":48,"variance":10,"name":"Height"},"weight":{"mean":100,"variance":20}},{"id":5,"name":"senrix","defaultCoatId":4,"coats":[{"id":1,"name":"albino"},{"id":2,"name":"Luarian"},{"id":3,"name":"melanistic"},{"id":4,"name":"piebald"},{"id":5,"name":"Saylian"},{"id":6,"name":"Earthen"}],"vocab":{"coat":"fur","chirp":"whistle","chirping":"whistling","purr":"chirr","growl":"squeal","nose":"nose"},"grammar":{"plural":"senrixes","article":"a"},"facesRight":false,"headshotPosition":{"left":5,"top":100,"size":120},"quotes":[{"text":"My marshmallows became blueberries and my blueberry bush grew marshmallows. I\'m telling you -- it was my senrix again!","attribution":"Anonymous"}],"size":{"mean":36,"variance":10,"name":"Length"},"weight":{"mean":50,"variance":10}},{"id":6,"name":"fleuran","defaultCoatId":6,"coats":[{"id":1,"name":"albino"},{"id":2,"name":"Luarian"},{"id":3,"name":"melanistic"},{"id":4,"name":"piebald"},{"id":5,"name":"Saylian"},{"id":6,"name":"calico"}],"vocab":{"coat":"scales","chirp":"hum","chirping":"humming","purr":"gurgle","purring":"gurgling","growl":"groan","nose":"nose"},"grammar":{"plural":"fleurans","article":"a"},"facesRight":true,"headshotPosition":{"left":195,"top":225,"size":120},"quotes":[{"text":"Afternoon tea. A stroll in the park with a delightful breeze. I saw a fleuran today.","attribution":"Florian Dewfall, 57 ATA"}],"size":{"mean":40,"variance":15,"name":"Length"},"weight":{"mean":80,"variance":20}},{"id":7,"species":"vela","defaultCoatId":5,"coats":[{"id":1,"name":"albino"},{"id":2,"name":"Luarian"},{"id":3,"name":"melanistic"},{"id":4,"name":"piebald"},{"id":5,"name":"Saylian"}],"vocab":{"coat":"wool","chirp":"baa","purr":"hum","purring":"humming","growl":"bleat","nose":"nose"},"grammar":{"plural":"velas","article":"a"},"facesRight":true,"headshotPosition":{"left":200,"top":100,"size":100},"quotes":[{"text":"We hadn\'t seen water in ways, we were gonna die cooked in the Noon Desert. Then the most sudden rain fell. And the velas appeared.","attribution":"Explorers, 272 ATA"}],"size":{"mean":30,"variance":5,"name":"Length"},"weight":{"mean":35,"variance":10}},{"id":8,"name":"eydrun","defaultCoatId":2,"coats":[{"id":1,"name":"albino"},{"id":2,"name":"Luarian"},{"id":3,"name":"melanistic"},{"id":4,"name":"piebald"},{"id":5,"name":"Saylian"}],"vocab":{"coat":"fur","chirp":"meow","purr":"purr","growl":"growl","nose":"nose"},"grammar":{"plural":"eydruns","article":"an"},"facesRight":false,"headshotPosition":{"left":30,"top":35,"size":130},"quotes":[{"text":"The woods are silent. But you are never alone. There are eyes everywhere.","attribution":"Anonymous"}],"size":{"mean":40,"variance":5,"name":"Height"},"weight":{"mean":150,"variance":20}},{"id":9,"name":"gorbin","defaultCoatId":2,"coats":[{"id":1,"name":"albino"},{"id":2,"name":"Luarian"},{"id":3,"name":"melanistic"},{"id":4,"name":"piebald"},{"id":5,"name":"Saylian"}],"vocab":{"coat":"skin","chirp":"hum","chirping":"humming","purr":"gurgle","purring":"gurgling","growl":"growl","nose":"nose"},"grammar":{"plural":"gorbins","article":"a"},"facesRight":true,"headshotPosition":{"left":150,"top":160,"size":150},"quotes":[{"text":"Plant a weeping lamp by the shore, and a gorbin might come.","attribution":"Anonymous"}],"size":{"mean":40,"variance":10,"name":"Length"},"weight":{"mean":50,"variance":10}},{"id":10,"name":"loxi","defaultCoatId":1,"coats":[{"id":1,"name":"albino"},{"id":2,"name":"Luarian"},{"id":3,"name":"melanistic"},{"id":4,"name":"piebald"},{"id":5,"name":"Saylian"}],"vocab":{"coat":"down","chirp":"grumble","chirping":"grumbling","purr":"purr","growl":"growl","nose":"nose"},"grammar":{"plural":"loxis","article":"a"},"facesRight":false,"headshotPosition":{"left":70,"top":100,"size":120},"quotes":[{"text":"Just trust me on this. It was never your den. You are a guest in that loxi\'s house.","attribution":"Anonymous"}],"size":{"mean":80,"variance":20,"name":"Length"},"weight":{"mean":100,"variance":10}}]')},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},,,,,,function(e,t,n){var r={"./fair":[4,0],"./fair.json":[4,0],"./quest":[5,1],"./quest.json":[5,1],"./rock-paper-scissors":[6,2],"./rock-paper-scissors.json":[6,2],"./test-encounters":[7,3],"./test-encounters.json":[7,3],"./wilderness":[8,4],"./wilderness.json":[8,4]};function i(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],i=t[0];return n.e(t[1]).then(function(){return n.t(i,3)})}i.keys=function(){return Object.keys(r)},i.id=9,e.exports=i},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";n.r(t);
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
const r=new WeakMap,i=e=>"function"==typeof e&&r.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{let r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},a={},c={},l=`{{lit-${String(Math.random()).slice(2)}}}`,u=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${u}`),h="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const i=[],s=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let c=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let s=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(l)>=0&&s++;for(;s-- >0;){const i=e.strings[r],s=g.exec(i)[2],o=s.toLowerCase()+h,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:n,name:s,strings:a}),t.removeAttribute(o),r+=a.length-1}}"TEMPLATE"===t.tagName&&s(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(l)>=0){const s=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)s.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[a]?(s.insertBefore(f(),t),i.push(t)):t.data=o[a],r+=a}}else if(8===t.nodeType)if(t.data===l){const e=t.parentNode;null!==t.previousSibling&&n!==c||(n++,e.insertBefore(f(),t)),c=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),r++}else{let e=-1;for(;-1!==(e=t.data.indexOf(l,e+1));)this.parts.push({type:"node",index:-1})}}};s(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class y{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const i=e=>{const s=document.createTreeWalker(e,133,null,!1);let o=s.nextNode();for(;n<t.length&&null!==o;){const e=t[n];if(m(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===o.nodeName&&i(o.content),o=s.nextNode();else this._parts.push(void 0),n++}};return i(e),s&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class w{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],r=g.exec(e);t+=r?e.substr(0,r.index)+r[1]+r[2]+h+r[3]+l:e+u}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const b=e=>null===e||!("object"==typeof e||"function"==typeof e);class v{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new _(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||b(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class x{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(b(e)?e!==this.value&&this._commitText(e):e instanceof w?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===c?(this.value=c,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const n=new y(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)void 0===(n=t[r])&&(n=new x(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class S{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class k extends v{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends _{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class P{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const N=new class{handleAttributeExpressions(e,t,n,r){const i=t[0];return"."===i?new k(e,t.slice(1),n).parts:"@"===i?[new P(e,t.slice(1),r.eventContext)]:"?"===i?[new S(e,t.slice(1),n)]:new v(e,t,n).parts}handleTextExpression(e){return new x(e)}};
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
 */function O(e){let t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(l);return void 0===(n=t.keyString.get(r))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const j=new Map,T=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const I=(e,...t)=>new w(e,t,"html",N),R=133;function M(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,R,null,!1);let s=L(r),o=r[s],a=-1,c=0;const l=[];let u=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==o&&o.index===a;)o.index=null!==u?-1:o.index-c,o=r[s=L(r,s)]}l.forEach(e=>e.parentNode.removeChild(e))}const $=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,R,null,!1);for(;n.nextNode();)t++;return t},L=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(m(t))return n}return-1};
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
const z=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),V=!1);const U=e=>t=>{const n=z(t.type,e);let r=j.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},j.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(l);if(void 0===(i=r.keyString.get(s))){const n=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(n,e),i=new p(t,n),r.keyString.set(s,i)}return r.stringsArray.set(t.strings,i),i},q=["html","svg"],B=new Set,W=(e,t,n)=>{B.add(n);const r=e.querySelectorAll("style");if(0===r.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const i=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{q.forEach(t=>{const n=j.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),M(e,n)})})})(n),function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const s=document.createTreeWalker(r,R,null,!1);let o=L(i),a=0,c=-1;for(;s.nextNode();)for(c++,s.currentNode===n&&(a=$(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===c;){if(a>0){for(;-1!==o;)i[o].index+=a,o=L(i,o);return}o=L(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),M(t,e)}};
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
window.JSCompiler_renameProperty=(e,t)=>e;const D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),H={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:F},J=Promise.resolve(!0),Y=1,G=4,K=8,X=16,Q=32;class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=J,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=H){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=F){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||D,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||D.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=H){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|K,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~K}}_attributeToProperty(e,t){if(this._updateState&K)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||H;this._updateState=this._updateState|X,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~X}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,i=r._classProperties.get(e)||H;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|G;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Z.finalized=!0;const ee="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol();class ne{constructor(e,t){if(t!==te)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ee?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const re=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof ne)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new ne(n,te)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ie=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,i=t.length;r<i;r++){const i=t[r];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class se extends Z{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ie(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ee?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof w&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}se.finalized=!0,se.render=(e,t,n)=>{const r=n.scopeName,i=T.has(t),s=t instanceof ShadowRoot&&V&&e instanceof w,a=s&&!B.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=T.get(t);void 0===r&&(o(t,t.firstChild),T.set(t,r=new x(Object.assign({templateFactory:O},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:U(r)},n)),a){const e=T.get(c);T.delete(c),e.value instanceof y&&W(c,e.value.template,r),o(t,t.firstChild),t.appendChild(c),T.set(t,e)}!i&&s&&window.ShadyCSS.styleElement(t.host)};
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const oe=e=>t=>(class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}}),ae=e=>{window.addEventListener("online",()=>e(!1)),window.addEventListener("offline",()=>e(!0)),e(!1===navigator.onLine)},ce=e=>{document.body.addEventListener("click",t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const n=t.composedPath().filter(e=>"A"===e.tagName)[0];if(!n||n.target||n.hasAttribute("download")||"external"===n.getAttribute("rel"))return;const r=n.href;if(!r||-1!==r.indexOf("mailto:"))return;const i=window.location,s=i.origin||i.protocol+"//"+i.host;0===r.indexOf(s)&&(t.preventDefault(),r!==i.href&&(window.history.pushState({},"",r),e(i,t)))}),window.addEventListener("popstate",t=>e(window.location,t)),e(window.location,null)},le=({title:e,description:t,url:n,image:r,imageAlt:i})=>{e&&(document.title=e,ue("property","og:title",e)),t&&(ue("name","description",t),ue("property","og:description",t)),r&&ue("property","og:image",r),i&&ue("property","og:image:alt",i),ue("property","og:url",n=n||window.location.href)};
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ue(e,t,n){let r=document.head.querySelector(`meta[${e}="${t}"]`);r||((r=document.createElement("meta")).setAttribute(e,t),document.head.appendChild(r)),r.setAttribute("content",n||"")}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const de=re`
  :host {
    display: block;
    box-sizing: border-box;
  }
`;var he=n(0),pe=function(){return Math.random().toString(36).substring(7).split("").join(".")},me={INIT:"@@redux/INIT"+pe(),REPLACE:"@@redux/REPLACE"+pe(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+pe()}};function fe(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ge(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ye(e,t,n[t])})}return e}function be(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function ve(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}var _e=ve();_e.withExtraArgument=ve;var xe=_e;
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Se(e,t){return e===t}function ke(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!e(t[i],n[i]))return!1;return!0}function Ee(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var Ce=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];var s=0,o=r.pop(),a=Ee(r),c=e.apply(void 0,[function(){return s++,o.apply(null,arguments)}].concat(n)),l=e(function(){for(var e=[],t=a.length,n=0;n<t;n++)e.push(a[n].apply(null,arguments));return c.apply(null,e)});return l.resultFunc=o,l.dependencies=a,l.recomputations=function(){return s},l.resetRecomputations=function(){return s=0},l}}(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Se,n=null,r=null;return function(){return ke(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}});function Pe(e,t=0){return Math.floor(Math.random()*(e-t+1)+t)}function Ae(e,t,n=0){return Math.floor(function(e){const t=1e4*Math.sin(e);return t-Math.floor(t)}(e)*(t-n+1)+n)}function Ne(e=""){return e.toLowerCase().replace(/\W/g,"_")}var Oe=n(1),je=n(2);const Te="accompanySprite",Ie="addItems",Re="addCoins",Me="pushEncounter",$e="pushRandom",Le="advanceEncounter",ze="setToken",Ve="addExperience",Ue="loadJourney",qe=e=>e.game,Be=Ce(qe,e=>e.items),We=Ce(Be,e=>t=>e[t]),De=Ce(qe,e=>e.inventory),Fe=Ce(We,De,(e,t)=>Object.entries(t).map(([t,n])=>({item:e(t),count:n}))),He=Ce(qe,e=>e.species),Je=Ce(He,e=>t=>e[t]),Ye=Ce(qe,e=>e.spritesById),Ge=Ce(Ye,Je,(e,t)=>{const n={};return Object.entries(e).forEach(([e,r])=>{const i=t(r.speciesId),s=i.coats.find(e=>e.id===r.coatId);if(!s)throw new Error("Sprite has invalid coat.");const o=s.name,a=`/images/sprites/${Ne(i.name)}/${Ne(o)}.png`;n[e]={...r,species:i,coatName:o,imageUrl:a}}),n}),Ke=Ce(Ge,e=>t=>e[t]),Xe=Ce(qe,e=>e.spritesInDen),Qe=Ce(Ke,Xe,(e,t)=>t.map(t=>e(t))),Ze=Ce(qe,e=>e.currentSpriteId),et=Ce(Ke,Ze,(e,t)=>e(t)),tt={coins:0,spritesInDen:[1,2],spritesById:{1:{id:1,soulName:"kimberly",name:"Kimberly",speciesId:2,coatId:5},2:{id:2,soulName:"nigel",name:"Nigel",speciesId:3,coatId:5}},journey:[],encounterStack:[],storyTokens:{},experience:{energy:0},currentEncounter:0,currentSpriteId:1,inventory:{1:5,2:5,3:5,4:5,5:5},items:(e=>e.reduce((e,t)=>(e[t.id]=t,e),{}))(Oe),species:(e=>e.reduce((e,t)=>(e[t.id]=t,e),{}))(je)},nt=e=>async t=>{const r=await n(9)("./"+e);t({type:Ue,journey:r.default})},rt=e=>({type:Te,id:e}),it=(e,t=1)=>({type:Ie,id:e,count:t}),st=e=>({type:Re,coins:e}),ot=()=>({type:Le});function at(e,t){return e.findIndex(e=>e.label===t)}function ct(e,t,n){const{encounterStack:r,journey:i}=e,s=r.slice(0);return s.push({index:at(i,t),encounterState:n}),{...e,encounterStack:s}}function lt(e,t,n){const r=e;return r[t]=n,r}function ut(e,t,n){const r={...e};return r[t]=r[t]+n,r}const dt=e=>t=>{const n="/"===e?"home":e.slice(1);t(ht(n))},ht=e=>({type:"UPDATE_PAGE",page:e});let pt;const mt=e=>(t,n)=>{e!==n().app.offline&&t((()=>e=>{e({type:"OPEN_SNACKBAR"}),window.clearTimeout(pt),pt=window.setTimeout(()=>e({type:"CLOSE_SNACKBAR"}),3e3)})()),t({type:"UPDATE_OFFLINE",offline:e})},ft={page:"",offline:!1,snackbarOpened:!1,coins:0},gt=function e(t,n,r){var i;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var s=t,o=n,a=[],c=a,l=!1;function u(){c===a&&(c=a.slice())}function d(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return o}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return u(),c.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,u();var n=c.indexOf(e);c.splice(n,1)}}}function p(e){if(!fe(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,o=s(o,e)}finally{l=!1}for(var t=a=c,n=0;n<t.length;n++)(0,t[n])();return e}return p({type:me.INIT}),(i={dispatch:p,subscribe:h,getState:d,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,p({type:me.REPLACE})}})[he.a]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(d())}return n(),{unsubscribe:t(n)}}})[he.a]=function(){return this},e},i}(e=>e,(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be)((e=>{return t=>(n,r)=>{let i={};const s=t(n,r);return Object.assign({},s,{addReducers(t){const n=Object.assign({},i,t);this.replaceReducer(e(i=n))}})}})(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];"function"==typeof e[i]&&(n[i]=e[i])}var s,o=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:me.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:me.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+me.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var r=!1,i={},a=0;a<o.length;a++){var c=o[a],l=n[c],u=e[c],d=l(u,t);if(void 0===d){var h=ge(c,t);throw new Error(h)}i[c]=d,r=r||d!==u}return r?i:e}}),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},s=t.map(function(e){return e(i)});return we({},n,{dispatch:r=be.apply(void 0,s)(n.dispatch)})}}}(xe)));gt.addReducers({game:function(e=tt,t){const{encounterStack:n,currentEncounter:r,coins:i,journey:s,storyTokens:o,experience:a,inventory:c}=e;switch(t.type){case Te:return{...e,currentSpriteId:t.id};case Ie:return{...e,inventory:{...c,[t.id]:(c[t.id]||0)+t.count}};case Re:return{...e,coins:i+t.coins};case Le:return n.length>0?{...e,encounterStack:n.slice(0,-1),currentEncounter:n[n.length-1].index,encounterState:n[n.length-1].encounterState}:{...e,currentEncounter:(r+1)%s.length};case Me:return ct(e,t.label,t.encounterState);case $e:return ct(e,(l=function(e){const t=Object.keys(e),n=[];for(let r=0;r<t.length;r++)e[r]&&n.push(e[r]);return n}(t))[Pe(l.length-1)]);case ze:return{...e,storyTokens:lt(o,t.token,!0)};case Ve:return{...e,experience:ut(a,t.skill,t.amount)};case Ue:return{...e,journey:t.journey,currentEncounter:0,encounterStack:[]};default:return e}var l},navigation:(e=ft,t)=>{switch(t.type){case"UPDATE_PAGE":return{...e,page:t.page};case"UPDATE_OFFLINE":return{...e,offline:t.offline};case"OPEN_SNACKBAR":return{...e,snackbarOpened:!0};case"CLOSE_SNACKBAR":return{...e,snackbarOpened:!1};default:return e}}});const yt={hasCoins:{test:(e,t)=>e.coins>=t},takeCoins:{test:(e,t)=>e.coins>=t,outcome:(e,t)=>["addCoins",-1*t]},checkToken:{test:(e,t)=>e.storyTokens[t]},skillCheck:{test:(e,t,n)=>{const r=function(e){return Math.sqrt(e)}(e.experience[t]);return Math.floor(r)+Pe(20,1)>Math.floor(n)}},randomCheck:{test:(e,t)=>Math.random()<=t},not:{test:(e,t)=>!t},all:{test:(e,...t)=>{for(let e=0;e<t.length;e++)if(!0!==t[e])return!1;return!0}},any:{test:(e,...t)=>{for(let e=0;e<t.length;e++)if(!0===t[e])return!0;return!1}}},wt={alert:e=>{alert(e)},sum:(...e)=>e.reduce((e,t)=>e+t),setToken:function(e){gt.dispatch((e=>({type:ze,token:e}))(e))},clearToken:function(e){gt.dispatch((e=>({type:"clearToken",token:e}))(e))},addItems:function(e,t=1){gt.dispatch(it(e,t))},addCoins:function(e){gt.dispatch(st(e))},pushEncounter:function(e,t){gt.dispatch(((e,t)=>({type:Me,label:e,encounterState:t}))(e,t))},pushRandom:function(...e){gt.dispatch((e=>({type:Me,encounters:e}))(...e))},addExperience:function(e,t){gt.dispatch(((e,t)=>({type:Ve,skill:e,amount:t}))(e,t))}};function bt(e,t){const n=t[0],r=t.slice(1).map(t=>Array.isArray(t)?bt(e,t):t);return yt[n].test(e,...r)}function vt(e){if(Array.isArray(e)){const t=e[0],n=e.slice(1);return vt(wt[t](...n))}return e}const _t="Continue...";window.customElements.define("sl-journey",class extends(oe(gt)(se)){static get properties(){return{journeyName:{type:String},_currentEncounter:{type:Number},_journey:{type:Object},_gameState:{type:Object}}}static get styles(){return[de,re`
        :host {
          padding: 0.5em 16px;
          font-size: 24px;
          line-height: 1.5;
        }
        button {
          font-size: 18px;
          width: 70%;
          text-align: left;
          cursor: pointer;
          margin-bottom: 0.5em;
          border: 0;
          background: white;
          padding: 0.5em 8px;
        }
        button:hover {
          text-decoration: underline;
        }
      `]}render(){const e=this.currentEncounter;return e?I`
      <p>
        ${e.text}
      </p>
      ${this._renderChoiceButtons(e.choices)}
    `:I`
        <p>
          You have finished your journey.
        </p>
      `}_renderChoiceButtons(e){return e&&e.length?this._filterChoices(e).map((e,t)=>I`
        <button @click=${this._selectChoice(t)}>
          ${e.text||_t}
        </button>
      `):I`
        <button @click=${this.continue}>
          ${_t}
        </button>`}_filterChoices(e){return e.filter(e=>!e.requirement||bt(this._gameState,e.requirement))}_selectChoice(e){const t=this.currentEncounter;if(!t||!t.choices)return;const n=this._filterChoices(t.choices)[e];return e=>{n&&(n.requirement&&function(e,t){const{outcome:n}=yt[t[0]],r=t.slice(1);n&&vt(n(e,...r))}(this._gameState,n.requirement),n.outcome&&vt(n.outcome),n.check&&bt(this._gameState,n.check)||!n.failure?n.next&&vt(["pushEncounter",n.next]):vt(["pushEncounter",n.failure])),this.continue()}}continue(e){gt.dispatch(ot())}stateChanged(e){this._currentEncounter=e.game.currentEncounter,this._journey=e.game.journey,this._gameState=e.game}updated(e){e.has("journeyName")&&gt.dispatch(nt(this.journeyName))}get currentEncounter(){return this._journey[this._currentEncounter]}});const xt=30,St=30;function kt(e,t){return`${e}-${t}`}function Et(e,t,n){return!!Ct(e,t,n)&&(e[t][n]&&!e[t][n].isWall)}function Ct(e,t,n){return!!(e&&e.length&&e[0].length)&&(!(t>=e.length||t<0)&&!(n>=e[0].length||n<0))}window.customElements.define("sl-dungeon",class extends se{static get properties(){return{tileGrid:{type:Array},objectMap:{type:Object},viewWidth:{type:Number},viewHeight:{type:Number},_row:{type:Number},_col:{type:Number}}}static get styles(){return[re`
        :host {
          postion: relative;
          max-width: 100%;
          max-height: 100%;
          overflow: hidden;
        }
        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: no-wrap;
        }
        .cell {
          background: white;
          flex-grow: 0;
          flex-shrink: 0;
          width: 80px;
          height: 60px;
          position: relative;
        }
        .cell[isWall] {
          background: black;
        }
        sl-dungeon-entity {
          width: 80px;
          height: 80px;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        img {
          max-width: 100%;
          max-height: 100%;
        }
      `]}render(){const{rOrigin:e}=this,{cOrigin:t}=this;return I`
      ${this.renderedTiles.map((n,r)=>I`
        <div class="row">
          ${n.map((n,i)=>I`
            <div class="cell" ?isWall=${n.isWall}>
              ${this.r===e+r&&this.c===t+i?I`
                <sl-dungeon-entity type="sprite">
                  <img src="/images/sprites/chirling/saylian.png" />
                </sl-dungeon-entity>
              `:this._renderCellEntities(e+r,t+i)}
            </div>
          `)}
        </div>
      `)}
    `}_renderCellEntities(e,t){const n=kt(e,t);if(!this.objectMap.has(n))return"";switch(this.objectMap.get(n).type){case"sprite":return I`
          <sl-dungeon-entity type="sprite">
            <img src="/images/sprites/vela/saylian.png" />
          </sl-dungeon-entity>`;default:return""}}constructor(){super(),this.objectMap=new Map,this.tileGrid=[...Array(St)].map(()=>[...Array(xt)].map(()=>({isWall:!0}))),this.viewWidth=15,this.viewHeight=9}connectedCallback(){super.connectedCallback();const e=Math.floor(St/2),t=Math.floor(xt/2);!function e(t,n,r,i,s,o){if(!Ct(r,i,s))return;const a=kt(i,s);n.has(a)||(n.set(a,!0),(o||Math.random()>.3)&&(r[i][s].isWall=!1,!o&&Math.random()<.05&&t.set(a,{type:"sprite"}),e(t,n,r,i+1,s),e(t,n,r,i-1,s),e(t,n,r,i,s+1),e(t,n,r,i,s-1)))}(this.objectMap,new Map,this.tileGrid,e,t,!0),this._row=e,this._col=t,this._boundMoveCharacter=this.moveCharacter.bind(this),window.addEventListener("keydown",this._boundMoveCharacter)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._boundMoveCharacter)}moveCharacter(e){switch(e.key){case"a":case"ArrowLeft":this.c-=1,e.preventDefault();break;case"d":case"ArrowRight":this.c+=1,e.preventDefault();break;case"w":case"ArrowUp":this.r-=1,e.preventDefault();break;case"s":case"ArrowDown":this.r+=1,e.preventDefault()}}get rOrigin(){return this.r-Math.floor(this.viewHeight/2)}get cOrigin(){return this.c-Math.floor(this.viewWidth/2)}get renderedTiles(){const{rOrigin:e}=this,{cOrigin:t}=this;return[...Array(this.viewHeight)].map((n,r)=>{const i=e+r;return[...Array(this.viewWidth)].map((e,n)=>{const r=t+n;return Ct(this.tileGrid,i,r)?this.tileGrid[i][r]:{isWall:!0}})})}set r(e){const t=this._col;Et(this.tileGrid,e,t)&&(this._row=e)}get r(){return this._row}set c(e){const t=this._row;Et(this.tileGrid,t,e)&&(this._col=e)}get c(){return this._col}});window.customElements.define("sl-inventory",class extends(oe(gt)(se)){static get properties(){return{_inventory:{type:Array},_currentJourney:{type:String}}}static get styles(){return re`
      section {
        display: grid;
        grid-template-columns: repeat(5, minmax(100px, 1fr));
        grid-gap: 1%;
        align-items: stretch;
        justify-content: space-around;
        padding: 0.5em 16px;
      }
      .item {
        box-sizing: border-box;
        padding: 0.5em 8px;
        background: white;
        text-align: center;
      }
      .item-image {
        overflow: hidden;
        width: 80px;
        height: 80px;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin: 0.5em auto;
      }
    `}render(){return I`
      <section>
        ${this._inventory.map(({item:e,count:t})=>I`
          <div class="item" title=${e.description}>
            <div 
              class="item-image" 
              style="background: ${this._generateItemColor(e.id)};"
            >
              ${e.name}
            </div>
            ${e.journey?I`
              <br><button 
                @click=${()=>this._showItemJourney(e.journey)}
              >Interact</button>
            `:""}
            <br><button
              @click=${()=>this._sellItem(e)}
            >Sell for ${e.sellPrice} coins</button>
            <br>Count: ${t}
          </div>
        `)}
      </section>
      ${this._currentJourney?I`
        <sl-journey .journeyName=${this._currentJourney}></sl-journey>
      `:""}
    `}stateChanged(e){this._inventory=Fe(e)}_generateItemColor(e){return`hsl(${Ae(e,360)}, ${Ae(e+1,90,80)}%, ${Ae(e+2,90,80)}%)`}_showItemJourney(e){this._currentJourney=e}_sellItem(e){gt.dispatch(it(e.id,-1)),gt.dispatch(st(e.sellPrice))}});window.customElements.define("sl-den",class extends(oe(gt)(se)){static get properties(){return{_sprites:{type:Array}}}static get styles(){return re`
      section {
        display: grid;
        grid-template-columns: repeat(5, minmax(100px, 1fr));
        grid-gap: 1%;
        align-items: stretch;
        justify-content: space-around;
        padding: 0.5em 16px;
      }
      .sprite {
        box-sizing: border-box;
        padding: 0.5em 8px;
        background: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .sprite img {
        width: 160px;
        height: 160px;
        margin: 0.5em auto;
      }
    `}render(){return I`
      <section>
        ${this._sprites.map(e=>I`
          <div class="sprite">
            <img src=${e.imageUrl} title=${e.name} />
            ${e.name}
            <button 
              @click=${this._accompanySprite.bind(this,e.id)}
            >Accompany</button>
          </div>
        `)}
      </section>
    `}stateChanged(e){this._sprites=Qe(e)}_accompanySprite(e){gt.dispatch(rt(e))}});window.customElements.define("sl-view404",class extends se{static get styles(){return[de]}render(){return I`
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>
          The page you're looking for doesn't seem to exist. Head back
          <a href="/">home</a> and try again?
        </p>
      </section>
    `}});window.customElements.define("snack-bar",class extends se{static get properties(){return{active:{type:Boolean}}}static get styles(){return[re`
        :host {
          display: block;
          position: fixed;
          top: 100%;
          left: 0;
          right: 0;
          padding: 12px;
          background-color: var(--app-secondary-color);
          color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          transition-property: visibility, transform;
          transition-duration: 0.2s;
          visibility: hidden;
        }

        :host([active]) {
          visibility: visible;
          transform: translate3d(0, -100%, 0);
        }

        @media (min-width: 460px) {
          :host {
            width: 320px;
            margin: auto;
          }
        }
      `]}render(){return I`
      <slot></slot>
    `}});window.customElements.define("sl-app",class extends(oe(gt)(se)){static get properties(){return{appTitle:{type:String},_page:{type:String},_snackbarOpened:{type:Boolean},_offline:{type:Boolean},_coins:{type:Number},_experience:{type:Object},_currentSprite:{type:Object}}}static get styles(){return[re`
        :host {
          --sl-nav-height: 50px;
          --sl-sidebar-width: 256px;
          display: block;
          min-width: 100%;
          min-height: 100%;
          display: grid;
          grid-template-areas:
            'sidebar nav'
            'sidebar main';
          grid-template-rows: var(--sl-nav-height) 1fr;
          grid-template-columns: var(--sl-sidebar-width) 1fr;
        }
        img {
          max-width: 100%;
        }
        aside {
          display: block;
          position: fixed;
          grid-area: sidebar;
          width: var(--sl-sidebar-width);
          z-index: 10;
          background: #d6e0df;
          height: 100%;
          padding: 0.5em 8px;
          box-sizing: border-box;
        }
        nav {
          display: block;
          position: fixed;
          grid-area: nav;
          margin-left: var(--sl-sidebar-width);
          margin-right: -var(--sl-sidebar-width);
          width: 100%;
          height: var(--sl-nav-height);
          background: white;
          box-sizing: border-box;
          z-index: 50;
          padding: 0.5em 8px;
          box-sizing: border-box;
        }
        main {
          box-sizing: border-box;
          padding: 0px;
          grid-area: main;
        }
      `]}render(){const e=this._currentSprite;return"start"===this._page?I`
        <p>The sky is bright.</p>

        <p>You've lived in Sayleus your whole life.</p>

        <p>But there comes a time when life must change.</p>

        <p>You're not sure why, but you know you wanted this.</p>
        
        <p>The train rocks up and down as the wheels turn.</p>

        <p>500 miles away from home.</p>

        <p>Anxiety is a funny thing. Excitement and fear are sometimes 
          hard to tell apart.</p>

        <p>Your hands shake. You know the city will have so many more 
          oportunities than your hometown.</p>

        <p>But won't it be lonely to go somewhere so far away? 
          Without friends?</p>

        <p>It's too late to turn back now.</p>

        <p>You hope that the city is like you wished.</p>

        <p>And that maybe... One day... If the legends are as they say, 
          your wishes could come true.</p>
      `:I`
      <aside>
        <img src=${e.imageUrl} title=${e.name} />
        <p>Your companion is ${e.name}</p>
  
        <p>You have ${this._coins||"no"} coins.</p>
        <br>
        ${JSON.stringify(this._experience)}
        <br>
        <a href="/inventory">Inventory</a>
        <br>
        <a href="/den">Den</a>
        <br>
        <a href="/quests">Quests</a>
      </aside>

      <nav>
        <a href="/">Home</a>
        <a href="/town">Town</a>
        <a href="/wilderness">Wilderness</a>
        <a href="/cave">The Caves</a>
      </nav>

      <main role="main">
        ${this._renderPage(this._page)}
      </main>

      <snack-bar ?active="${this._snackbarOpened}">
        You are now ${this._offline?"offline":"online"}.
      </snack-bar>
    `}_renderPage(e){switch(e){case"home":return I`<sl-journey journeyName="quest.json"></sl-journey>`;case"town":return I`<sl-journey journeyName="fair.json"></sl-journey`;case"wilderness":return I`<sl-journey journeyName="wilderness.json"></sl-journey>`;case"cave":return I`<sl-dungeon></sl-dungeon>`;case"inventory":return I`<sl-inventory></sl-inventory>`;case"den":return I`<sl-den></sl-den>`;case"quests":return I`The things you're a doing`;default:return I`<sl-view404></sl-view404>`}}firstUpdated(){ce(e=>gt.dispatch(dt(decodeURIComponent(e.pathname)))),ae(e=>gt.dispatch(mt(e)))}updated(e){if(e.has("_page")){const e=this.appTitle+" - "+this._page;le({title:e,description:e})}}stateChanged(e){this._page=e.navigation.page,this._offline=e.navigation.offline,this._snackbarOpened=e.navigation.snackbarOpened,this._coins=e.game.coins,this._experience=e.game.experience,this._currentSprite=et(e)}})}]);