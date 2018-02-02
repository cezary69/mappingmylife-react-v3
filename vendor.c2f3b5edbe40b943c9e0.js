webpackJsonp([1],{

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-au": 467,
	"./en-au.js": 467,
	"./en-ca": 468,
	"./en-ca.js": 468,
	"./en-gb": 469,
	"./en-gb.js": 469,
	"./en-ie": 470,
	"./en-ie.js": 470,
	"./en-nz": 471,
	"./en-nz.js": 471,
	"./fr": 474,
	"./fr-ca": 472,
	"./fr-ca.js": 472,
	"./fr-ch": 473,
	"./fr-ch.js": 473,
	"./fr.js": 474
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1107;

/***/ }),

/***/ 1343:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
module.exports = __webpack_require__(340);


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * vis.js
 * https://github.com/almende/vis
 *
 * A dynamic, browser-based visualization library.
 *
 * @version 4.21.0
 * @date    2017-10-12
 *
 * @license
 * Copyright (C) 2011-2017 Almende B.V, http://almende.com
 *
 * Vis.js is dual licensed under both
 *
 * * The Apache 2.0 License
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * and
 *
 * * The MIT License
 *   http://opensource.org/licenses/MIT
 *
 * Vis.js may be distributed under either license.
 */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vis=e():t.vis=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=123)}([function(t,e,i){e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,i){e.__esModule=!0;var o=i(169),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,n.default)(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}()},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i,o){var n=!1;!0===o&&(n=null===e[i]&&void 0!==t[i]),n?delete t[i]:t[i]=e[i]}var s=i(77),r=o(s),a=i(29),h=o(a),d=i(8),l=o(d),u=i(6),c=o(u),p=i(9),f=i(157);e.isNumber=function(t){return t instanceof Number||"number"==typeof t},e.recursiveDOMDelete=function(t){if(t)for(;!0===t.hasChildNodes();)e.recursiveDOMDelete(t.firstChild),t.removeChild(t.firstChild)},e.giveRange=function(t,e,i,o){if(e==t)return.5;var n=1/(e-t);return Math.max(0,(o-t)*n)},e.isString=function(t){return t instanceof String||"string"==typeof t},e.isDate=function(t){if(t instanceof Date)return!0;if(e.isString(t)){if(m.exec(t))return!0;if(!isNaN(Date.parse(t)))return!0}return!1},e.randomUUID=function(){return f.v4()},e.assignAllKeys=function(t,e){for(var i in t)t.hasOwnProperty(i)&&"object"!==(0,c.default)(t[i])&&(t[i]=e)},e.fillIfDefined=function(t,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(var s in t)void 0!==i[s]&&(null===i[s]||"object"!==(0,c.default)(i[s])?n(t,i,s,o):"object"===(0,c.default)(t[s])&&e.fillIfDefined(t[s],i[s],o))},e.extend=function(t,e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])}return t},e.selectiveExtend=function(t,e,i){if(!Array.isArray(t))throw new Error("Array with property names expected as first argument");for(var o=2;o<arguments.length;o++)for(var n=arguments[o],s=0;s<t.length;s++){var r=t[s];n&&n.hasOwnProperty(r)&&(e[r]=n[r])}return e},e.selectiveDeepExtend=function(t,i,o){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Array.isArray(o))throw new TypeError("Arrays are not supported by deepExtend");for(var r=0;r<t.length;r++){var a=t[r];if(o.hasOwnProperty(a))if(o[a]&&o[a].constructor===Object)void 0===i[a]&&(i[a]={}),i[a].constructor===Object?e.deepExtend(i[a],o[a],!1,s):n(i,o,a,s);else{if(Array.isArray(o[a]))throw new TypeError("Arrays are not supported by deepExtend");n(i,o,a,s)}}return i},e.selectiveNotDeepExtend=function(t,i,o){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Array.isArray(o))throw new TypeError("Arrays are not supported by deepExtend");for(var r in o)if(o.hasOwnProperty(r)&&-1===t.indexOf(r))if(o[r]&&o[r].constructor===Object)void 0===i[r]&&(i[r]={}),i[r].constructor===Object?e.deepExtend(i[r],o[r]):n(i,o,r,s);else if(Array.isArray(o[r])){i[r]=[];for(var a=0;a<o[r].length;a++)i[r].push(o[r][a])}else n(i,o,r,s);return i},e.deepExtend=function(t,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];for(var r in i)if(i.hasOwnProperty(r)||!0===o)if(i[r]&&i[r].constructor===Object)void 0===t[r]&&(t[r]={}),t[r].constructor===Object?e.deepExtend(t[r],i[r],o):n(t,i,r,s);else if(Array.isArray(i[r])){t[r]=[];for(var a=0;a<i[r].length;a++)t[r].push(i[r][a])}else n(t,i,r,s);return t},e.equalArray=function(t,e){if(t.length!=e.length)return!1;for(var i=0,o=t.length;i<o;i++)if(t[i]!=e[i])return!1;return!0},e.convert=function(t,i){var o;if(void 0!==t){if(null===t)return null;if(!i)return t;if("string"!=typeof i&&!(i instanceof String))throw new Error("Type must be a string");switch(i){case"boolean":case"Boolean":return Boolean(t);case"number":case"Number":return e.isString(t)&&!isNaN(Date.parse(t))?p(t).valueOf():Number(t.valueOf());case"string":case"String":return String(t);case"Date":if(e.isNumber(t))return new Date(t);if(t instanceof Date)return new Date(t.valueOf());if(p.isMoment(t))return new Date(t.valueOf());if(e.isString(t))return o=m.exec(t),o?new Date(Number(o[1])):p(new Date(t)).toDate();throw new Error("Cannot convert object of type "+e.getType(t)+" to type Date");case"Moment":if(e.isNumber(t))return p(t);if(t instanceof Date)return p(t.valueOf());if(p.isMoment(t))return p(t);if(e.isString(t))return o=m.exec(t),p(o?Number(o[1]):t);throw new Error("Cannot convert object of type "+e.getType(t)+" to type Date");case"ISODate":if(e.isNumber(t))return new Date(t);if(t instanceof Date)return t.toISOString();if(p.isMoment(t))return t.toDate().toISOString();if(e.isString(t))return o=m.exec(t),o?new Date(Number(o[1])).toISOString():p(t).format();throw new Error("Cannot convert object of type "+e.getType(t)+" to type ISODate");case"ASPDate":if(e.isNumber(t))return"/Date("+t+")/";if(t instanceof Date)return"/Date("+t.valueOf()+")/";if(e.isString(t)){o=m.exec(t);return"/Date("+(o?new Date(Number(o[1])).valueOf():new Date(t).valueOf())+")/"}throw new Error("Cannot convert object of type "+e.getType(t)+" to type ASPDate");default:throw new Error('Unknown type "'+i+'"')}}};var m=/^\/?Date\((\-?\d+)/i;e.getType=function(t){var e=void 0===t?"undefined":(0,c.default)(t);return"object"==e?null===t?"null":t instanceof Boolean?"Boolean":t instanceof Number?"Number":t instanceof String?"String":Array.isArray(t)?"Array":t instanceof Date?"Date":"Object":"number"==e?"Number":"boolean"==e?"Boolean":"string"==e?"String":void 0===e?"undefined":e},e.copyAndExtendArray=function(t,e){for(var i=[],o=0;o<t.length;o++)i.push(t[o]);return i.push(e),i},e.copyArray=function(t){for(var e=[],i=0;i<t.length;i++)e.push(t[i]);return e},e.getAbsoluteLeft=function(t){return t.getBoundingClientRect().left},e.getAbsoluteRight=function(t){return t.getBoundingClientRect().right},e.getAbsoluteTop=function(t){return t.getBoundingClientRect().top},e.addClassName=function(t,e){var i=t.className.split(" "),o=e.split(" ");i=i.concat(o.filter(function(t){return i.indexOf(t)<0})),t.className=i.join(" ")},e.removeClassName=function(t,e){var i=t.className.split(" "),o=e.split(" ");i=i.filter(function(t){return o.indexOf(t)<0}),t.className=i.join(" ")},e.forEach=function(t,e){var i,o;if(Array.isArray(t))for(i=0,o=t.length;i<o;i++)e(t[i],i,t);else for(i in t)t.hasOwnProperty(i)&&e(t[i],i,t)},e.toArray=function(t){var e=[];for(var i in t)t.hasOwnProperty(i)&&e.push(t[i]);return e},e.updateProperty=function(t,e,i){return t[e]!==i&&(t[e]=i,!0)},e.throttle=function(t){var e=!1;return function(){e||(e=!0,requestAnimationFrame(function(){e=!1,t()}))}},e.addEventListener=function(t,e,i,o){t.addEventListener?(void 0===o&&(o=!1),"mousewheel"===e&&navigator.userAgent.indexOf("Firefox")>=0&&(e="DOMMouseScroll"),t.addEventListener(e,i,o)):t.attachEvent("on"+e,i)},e.removeEventListener=function(t,e,i,o){t.removeEventListener?(void 0===o&&(o=!1),"mousewheel"===e&&navigator.userAgent.indexOf("Firefox")>=0&&(e="DOMMouseScroll"),t.removeEventListener(e,i,o)):t.detachEvent("on"+e,i)},e.preventDefault=function(t){t||(t=window.event),t.preventDefault?t.preventDefault():t.returnValue=!1},e.getTarget=function(t){t||(t=window.event);var e;return t.target?e=t.target:t.srcElement&&(e=t.srcElement),void 0!=e.nodeType&&3==e.nodeType&&(e=e.parentNode),e},e.hasParent=function(t,e){for(var i=t;i;){if(i===e)return!0;i=i.parentNode}return!1},e.option={},e.option.asBoolean=function(t,e){return"function"==typeof t&&(t=t()),null!=t?0!=t:e||null},e.option.asNumber=function(t,e){return"function"==typeof t&&(t=t()),null!=t?Number(t)||e||null:e||null},e.option.asString=function(t,e){return"function"==typeof t&&(t=t()),null!=t?String(t):e||null},e.option.asSize=function(t,i){return"function"==typeof t&&(t=t()),e.isString(t)?t:e.isNumber(t)?t+"px":i||null},e.option.asElement=function(t,e){return"function"==typeof t&&(t=t()),t||e||null},e.hexToRGB=function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,i,o){return e+e+i+i+o+o});var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null},e.overrideOpacity=function(t,i){var o;return-1!=t.indexOf("rgba")?t:-1!=t.indexOf("rgb")?(o=t.substr(t.indexOf("(")+1).replace(")","").split(","),"rgba("+o[0]+","+o[1]+","+o[2]+","+i+")"):(o=e.hexToRGB(t),null==o?t:"rgba("+o.r+","+o.g+","+o.b+","+i+")")},e.RGBToHex=function(t,e,i){return"#"+((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1)},e.parseColor=function(t){var i;if(!0===e.isString(t)){if(!0===e.isValidRGB(t)){var o=t.substr(4).substr(0,t.length-5).split(",").map(function(t){return parseInt(t)});t=e.RGBToHex(o[0],o[1],o[2])}if(!0===e.isValidHex(t)){var n=e.hexToHSV(t),s={h:n.h,s:.8*n.s,v:Math.min(1,1.02*n.v)},r={h:n.h,s:Math.min(1,1.25*n.s),v:.8*n.v},a=e.HSVToHex(r.h,r.s,r.v),h=e.HSVToHex(s.h,s.s,s.v);i={background:t,border:a,highlight:{background:h,border:a},hover:{background:h,border:a}}}else i={background:t,border:t,highlight:{background:t,border:t},hover:{background:t,border:t}}}else i={},i.background=t.background||void 0,i.border=t.border||void 0,e.isString(t.highlight)?i.highlight={border:t.highlight,background:t.highlight}:(i.highlight={},i.highlight.background=t.highlight&&t.highlight.background||void 0,i.highlight.border=t.highlight&&t.highlight.border||void 0),e.isString(t.hover)?i.hover={border:t.hover,background:t.hover}:(i.hover={},i.hover.background=t.hover&&t.hover.background||void 0,i.hover.border=t.hover&&t.hover.border||void 0);return i},e.RGBToHSV=function(t,e,i){t/=255,e/=255,i/=255;var o=Math.min(t,Math.min(e,i)),n=Math.max(t,Math.max(e,i));if(o==n)return{h:0,s:0,v:o};var s=t==o?e-i:i==o?t-e:i-t;return{h:60*((t==o?3:i==o?1:5)-s/(n-o))/360,s:(n-o)/n,v:n}};var v={split:function(t){var e={};return t.split(";").forEach(function(t){if(""!=t.trim()){var i=t.split(":"),o=i[0].trim(),n=i[1].trim();e[o]=n}}),e},join:function(t){return(0,l.default)(t).map(function(e){return e+": "+t[e]}).join("; ")}};e.addCssText=function(t,i){var o=v.split(t.style.cssText),n=v.split(i),s=e.extend(o,n);t.style.cssText=v.join(s)},e.removeCssText=function(t,e){var i=v.split(t.style.cssText),o=v.split(e);for(var n in o)o.hasOwnProperty(n)&&delete i[n];t.style.cssText=v.join(i)},e.HSVToRGB=function(t,e,i){var o,n,s,r=Math.floor(6*t),a=6*t-r,h=i*(1-e),d=i*(1-a*e),l=i*(1-(1-a)*e);switch(r%6){case 0:o=i,n=l,s=h;break;case 1:o=d,n=i,s=h;break;case 2:o=h,n=i,s=l;break;case 3:o=h,n=d,s=i;break;case 4:o=l,n=h,s=i;break;case 5:o=i,n=h,s=d}return{r:Math.floor(255*o),g:Math.floor(255*n),b:Math.floor(255*s)}},e.HSVToHex=function(t,i,o){var n=e.HSVToRGB(t,i,o);return e.RGBToHex(n.r,n.g,n.b)},e.hexToHSV=function(t){var i=e.hexToRGB(t);return e.RGBToHSV(i.r,i.g,i.b)},e.isValidHex=function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},e.isValidRGB=function(t){return t=t.replace(" ",""),/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i.test(t)},e.isValidRGBA=function(t){return t=t.replace(" ",""),/rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(.{1,3})\)/i.test(t)},e.selectiveBridgeObject=function(t,i){if(null!==i&&"object"===(void 0===i?"undefined":(0,c.default)(i))){for(var o=(0,h.default)(i),n=0;n<t.length;n++)i.hasOwnProperty(t[n])&&"object"==(0,c.default)(i[t[n]])&&(o[t[n]]=e.bridgeObject(i[t[n]]));return o}return null},e.bridgeObject=function(t){if(null!==t&&"object"===(void 0===t?"undefined":(0,c.default)(t))){var i=(0,h.default)(t);if(t instanceof Element)i=t;else{i=(0,h.default)(t);for(var o in t)t.hasOwnProperty(o)&&"object"==(0,c.default)(t[o])&&(i[o]=e.bridgeObject(t[o]))}return i}return null},e.insertSort=function(t,e){for(var i=0;i<t.length;i++){for(var o=t[i],n=i;n>0&&e(o,t[n-1])<0;n--)t[n]=t[n-1];t[n]=o}return t},e.mergeOptions=function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=function(t){return null!==t&&void 0!==t},s=function(t){return null!==t&&"object"===(void 0===t?"undefined":(0,c.default)(t))};if(!s(t))throw new Error("Parameter mergeTarget must be an object");if(!s(e))throw new Error("Parameter options must be an object");if(!n(i))throw new Error("Parameter option must have a value");if(!s(o))throw new Error("Parameter globalOptions must be an object");var r=e[i],a=s(o)&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(o),d=a?o[i]:void 0,l=d?d.enabled:void 0;if(void 0!==r){if("boolean"==typeof r)return s(t[i])||(t[i]={}),void(t[i].enabled=r);if(null===r&&!s(t[i])){if(!n(d))return;t[i]=(0,h.default)(d)}if(s(r)){var u=!0;void 0!==r.enabled?u=r.enabled:void 0!==l&&(u=d.enabled),function(t,e,i){s(t[i])||(t[i]={});var o=e[i],n=t[i];for(var r in o)o.hasOwnProperty(r)&&(n[r]=o[r])}(t,e,i),t[i].enabled=u}}},e.binarySearchCustom=function(t,e,i,o){for(var n=0,s=0,r=t.length-1;s<=r&&n<1e4;){var a=Math.floor((s+r)/2),h=t[a],d=void 0===o?h[i]:h[i][o],l=e(d);if(0==l)return a;-1==l?s=a+1:r=a-1,n++}return-1},e.binarySearchValue=function(t,e,i,o,n){var s,r,a,h,d=0,l=0,u=t.length-1;for(n=void 0!=n?n:function(t,e){return t==e?0:t<e?-1:1};l<=u&&d<1e4;){if(h=Math.floor(.5*(u+l)),s=t[Math.max(0,h-1)][i],r=t[h][i],a=t[Math.min(t.length-1,h+1)][i],0==n(r,e))return h;if(n(s,e)<0&&n(r,e)>0)return"before"==o?Math.max(0,h-1):h;if(n(r,e)<0&&n(a,e)>0)return"before"==o?h:Math.min(t.length-1,h+1);n(r,e)<0?l=h+1:u=h-1,d++}return-1},e.easingFunctions={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},e.getScrollBarWidth=function(){var t=document.createElement("p");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.visibility="hidden",e.style.width="200px",e.style.height="150px",e.style.overflow="hidden",e.appendChild(t),document.body.appendChild(e);var i=t.offsetWidth;e.style.overflow="scroll";var o=t.offsetWidth;return i==o&&(o=e.clientWidth),document.body.removeChild(e),i-o},e.topMost=function(t,e){var i=void 0;Array.isArray(e)||(e=[e]);var o=!0,n=!1,s=void 0;try{for(var a,h=(0,r.default)(t);!(o=(a=h.next()).done);o=!0){var d=a.value;if(d){i=d[e[0]];for(var l=1;l<e.length;l++)i&&(i=i[e[l]]);if(void 0!==i)break}}}catch(t){n=!0,s=t}finally{try{!o&&h.return&&h.return()}finally{if(n)throw s}}return i}},function(t,e,i){t.exports={default:i(194),__esModule:!0}},function(t,e,i){e.__esModule=!0;var o=i(6),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,n.default)(e))&&"function"!=typeof e?t:e}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var n=i(196),s=o(n),r=i(29),a=o(r),h=i(6),d=o(h);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,d.default)(e)));t.prototype=(0,a.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(s.default?(0,s.default)(t,e):t.__proto__=e)}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var n=i(142),s=o(n),r=i(144),a=o(r),h="function"==typeof a.default&&"symbol"==typeof s.default?function(t){return typeof t}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};e.default="function"==typeof a.default&&"symbol"===h(s.default)?function(t){return void 0===t?"undefined":h(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":h(t)}},function(t,e){var i=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=i)},function(t,e,i){t.exports={default:i(140),__esModule:!0}},function(t,e,i){t.exports="undefined"!=typeof window&&window.moment||i(154)},function(t,e,i){function o(){var t=function(){};return{on:t,off:t,destroy:t,emit:t,get:function(e){return{set:t}}}}if("undefined"!=typeof window){var n=i(175),s=window.Hammer||i(176);t.exports=n(s,{preventDefault:"mouse"})}else t.exports=function(){return o()}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(t&&!Array.isArray(t)&&(e=t,t=null),this._options=e||{},this._data={},this.length=0,this._fieldId=this._options.fieldId||"id",this._type={},this._options.type)for(var i=(0,l.default)(this._options.type),o=0,n=i.length;o<n;o++){var s=i[o],r=this._options.type[s];this._type[s]="Date"==r||"ISODate"==r||"ASPDate"==r?"Date":r}this._subscribers={},t&&this.add(t),this.setOptions(e)}var s=i(19),r=o(s),a=i(6),h=o(a),d=i(8),l=o(d),u=i(2),c=i(43);n.prototype.setOptions=function(t){t&&void 0!==t.queue&&(!1===t.queue?this._queue&&(this._queue.destroy(),delete this._queue):(this._queue||(this._queue=c.extend(this,{replace:["add","update","remove"]})),"object"===(0,h.default)(t.queue)&&this._queue.setOptions(t.queue)))},n.prototype.on=function(t,e){var i=this._subscribers[t];i||(i=[],this._subscribers[t]=i),i.push({callback:e})},n.prototype.off=function(t,e){var i=this._subscribers[t];i&&(this._subscribers[t]=i.filter(function(t){return t.callback!=e}))},n.prototype._trigger=function(t,e,i){if("*"==t)throw new Error("Cannot trigger event *");var o=[];t in this._subscribers&&(o=o.concat(this._subscribers[t])),"*"in this._subscribers&&(o=o.concat(this._subscribers["*"]));for(var n=0,s=o.length;n<s;n++){var r=o[n];r.callback&&r.callback(t,e,i||null)}},n.prototype.add=function(t,e){var i,o=[],n=this;if(Array.isArray(t))for(var s=0,r=t.length;s<r;s++)i=n._addItem(t[s]),o.push(i);else{if(!t||"object"!==(void 0===t?"undefined":(0,h.default)(t)))throw new Error("Unknown dataType");i=n._addItem(t),o.push(i)}return o.length&&this._trigger("add",{items:o},e),o},n.prototype.update=function(t,e){var i=[],o=[],n=[],s=[],r=this,a=r._fieldId,d=function(t){var e=t[a];if(r._data[e]){var h=u.extend({},r._data[e]);e=r._updateItem(t),o.push(e),s.push(t),n.push(h)}else e=r._addItem(t),i.push(e)};if(Array.isArray(t))for(var l=0,c=t.length;l<c;l++)t[l]&&"object"===(0,h.default)(t[l])?d(t[l]):console.warn("Ignoring input item, which is not an object at index "+l);else{if(!t||"object"!==(void 0===t?"undefined":(0,h.default)(t)))throw new Error("Unknown dataType");d(t)}if(i.length&&this._trigger("add",{items:i},e),o.length){var p={items:o,oldData:n,data:s};this._trigger("update",p,e)}return i.concat(o)},n.prototype.get=function(t){var e,i,o,n=this,s=u.getType(arguments[0]);"String"==s||"Number"==s?(e=arguments[0],o=arguments[1]):"Array"==s?(i=arguments[0],o=arguments[1]):o=arguments[0];var r;if(o&&o.returnType){r=-1==["Array","Object"].indexOf(o.returnType)?"Array":o.returnType}else r="Array";var a,h,d,c,p,f=o&&o.type||this._options.type,m=o&&o.filter,v=[];if(void 0!=e)(a=n._getItem(e,f))&&m&&!m(a)&&(a=null);else if(void 0!=i)for(c=0,p=i.length;c<p;c++)a=n._getItem(i[c],f),m&&!m(a)||v.push(a);else for(h=(0,l.default)(this._data),c=0,p=h.length;c<p;c++)d=h[c],a=n._getItem(d,f),m&&!m(a)||v.push(a);if(o&&o.order&&void 0==e&&this._sort(v,o.order),o&&o.fields){var g=o.fields;if(void 0!=e)a=this._filterFields(a,g);else for(c=0,p=v.length;c<p;c++)v[c]=this._filterFields(v[c],g)}if("Object"==r){var y,b={};for(c=0,p=v.length;c<p;c++)y=v[c],b[y.id]=y;return b}return void 0!=e?a:v},n.prototype.getIds=function(t){var e,i,o,n,s,r=this._data,a=t&&t.filter,h=t&&t.order,d=t&&t.type||this._options.type,u=(0,l.default)(r),c=[];if(a)if(h){for(s=[],e=0,i=u.length;e<i;e++)o=u[e],n=this._getItem(o,d),a(n)&&s.push(n);for(this._sort(s,h),e=0,i=s.length;e<i;e++)c.push(s[e][this._fieldId])}else for(e=0,i=u.length;e<i;e++)o=u[e],n=this._getItem(o,d),a(n)&&c.push(n[this._fieldId]);else if(h){for(s=[],e=0,i=u.length;e<i;e++)o=u[e],s.push(r[o]);for(this._sort(s,h),e=0,i=s.length;e<i;e++)c.push(s[e][this._fieldId])}else for(e=0,i=u.length;e<i;e++)o=u[e],n=r[o],c.push(n[this._fieldId]);return c},n.prototype.getDataSet=function(){return this},n.prototype.forEach=function(t,e){var i,o,n,s,r=e&&e.filter,a=e&&e.type||this._options.type,h=this._data,d=(0,l.default)(h);if(e&&e.order){var u=this.get(e);for(i=0,o=u.length;i<o;i++)n=u[i],s=n[this._fieldId],t(n,s)}else for(i=0,o=d.length;i<o;i++)s=d[i],n=this._getItem(s,a),r&&!r(n)||t(n,s)},n.prototype.map=function(t,e){var i,o,n,s,r=e&&e.filter,a=e&&e.type||this._options.type,h=[],d=this._data,u=(0,l.default)(d);for(i=0,o=u.length;i<o;i++)n=u[i],s=this._getItem(n,a),r&&!r(s)||h.push(t(s,n));return e&&e.order&&this._sort(h,e.order),h},n.prototype._filterFields=function(t,e){if(!t)return t;var i,o,n={},s=(0,l.default)(t),r=s.length;if(Array.isArray(e))for(i=0;i<r;i++)o=s[i],-1!=e.indexOf(o)&&(n[o]=t[o]);else for(i=0;i<r;i++)o=s[i],e.hasOwnProperty(o)&&(n[e[o]]=t[o]);return n},n.prototype._sort=function(t,e){if(u.isString(e)){var i=e;t.sort(function(t,e){var o=t[i],n=e[i];return o>n?1:o<n?-1:0})}else{if("function"!=typeof e)throw new TypeError("Order must be a function or a string");t.sort(e)}},n.prototype.remove=function(t,e){var i,o,n,s,r=[],a=[],h=[];for(h=Array.isArray(t)?t:[t],i=0,o=h.length;i<o;i++)(s=this._remove(h[i]))&&void 0!=(n=s[this._fieldId])&&(r.push(n),a.push(s));return r.length&&this._trigger("remove",{items:r,oldData:a},e),r},n.prototype._remove=function(t){var e,i;return u.isNumber(t)||u.isString(t)?i=t:t&&"object"===(void 0===t?"undefined":(0,h.default)(t))&&(i=t[this._fieldId]),void 0!==i&&this._data[i]?(e=this._data[i],delete this._data[i],this.length--,e):null},n.prototype.clear=function(t){var e,i,o=(0,l.default)(this._data),n=[];for(e=0,i=o.length;e<i;e++)n.push(this._data[o[e]]);return this._data={},this.length=0,this._trigger("remove",{items:o,oldData:n},t),o},n.prototype.max=function(t){var e,i,o=this._data,n=(0,l.default)(o),s=null,r=null;for(e=0,i=n.length;e<i;e++){var a=n[e],h=o[a],d=h[t];null!=d&&(!s||d>r)&&(s=h,r=d)}return s},n.prototype.min=function(t){var e,i,o=this._data,n=(0,l.default)(o),s=null,r=null;for(e=0,i=n.length;e<i;e++){var a=n[e],h=o[a],d=h[t];null!=d&&(!s||d<r)&&(s=h,r=d)}return s},n.prototype.distinct=function(t){var e,i,o,n=this._data,s=(0,l.default)(n),r=[],a=this._options.type&&this._options.type[t]||null,h=0;for(e=0,o=s.length;e<o;e++){var d=s[e],c=n[d],p=c[t],f=!1;for(i=0;i<h;i++)if(r[i]==p){f=!0;break}f||void 0===p||(r[h]=p,h++)}if(a)for(e=0,o=r.length;e<o;e++)r[e]=u.convert(r[e],a);return r},n.prototype._addItem=function(t){var e=t[this._fieldId];if(void 0!=e){if(this._data[e])throw new Error("Cannot add item: item with id "+e+" already exists")}else e=u.randomUUID(),t[this._fieldId]=e;var i,o,n={},s=(0,l.default)(t);for(i=0,o=s.length;i<o;i++){var r=s[i],a=this._type[r];n[r]=u.convert(t[r],a)}return this._data[e]=n,this.length++,e},n.prototype._getItem=function(t,e){var i,o,n,s,r=this._data[t];if(!r)return null;var a={},h=(0,l.default)(r);if(e)for(n=0,s=h.length;n<s;n++)i=h[n],o=r[i],a[i]=u.convert(o,e[i]);else for(n=0,s=h.length;n<s;n++)i=h[n],o=r[i],a[i]=o;return a[this._fieldId]||(a[this._fieldId]=r.id),a},n.prototype._updateItem=function(t){var e=t[this._fieldId];if(void 0==e)throw new Error("Cannot update item: item has no id (item: "+(0,r.default)(t)+")");var i=this._data[e];if(!i)throw new Error("Cannot update item: no item with id "+e+" found");for(var o=(0,l.default)(t),n=0,s=o.length;n<s;n++){var a=o[n],h=this._type[a];i[a]=u.convert(t[a],h)}return e},t.exports=n},function(t,e,i){function o(t,e){this._data=null,this._ids={},this.length=0,this._options=e||{},this._fieldId="id",this._subscribers={};var i=this;this.listener=function(){i._onEvent.apply(i,arguments)},this.setData(t)}var n=i(8),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(2),a=i(11);o.prototype.setData=function(t){var e,i,o,n,s;if(this._data){for(this._data.off&&this._data.off("*",this.listener),e=this._data.getIds({filter:this._options&&this._options.filter}),s=[],o=0,n=e.length;o<n;o++)s.push(this._data._data[e[o]]);this._ids={},this.length=0,this._trigger("remove",{items:e,oldData:s})}if(this._data=t,this._data){for(this._fieldId=this._options.fieldId||this._data&&this._data.options&&this._data.options.fieldId||"id",e=this._data.getIds({filter:this._options&&this._options.filter}),o=0,n=e.length;o<n;o++)i=e[o],this._ids[i]=!0;this.length=e.length,this._trigger("add",{items:e}),this._data.on&&this._data.on("*",this.listener)}},o.prototype.refresh=function(){var t,e,i,o=this._data.getIds({filter:this._options&&this._options.filter}),n=(0,s.default)(this._ids),r={},a=[],h=[],d=[];for(e=0,i=o.length;e<i;e++)t=o[e],r[t]=!0,this._ids[t]||(a.push(t),this._ids[t]=!0);for(e=0,i=n.length;e<i;e++)t=n[e],r[t]||(h.push(t),d.push(this._data._data[t]),delete this._ids[t]);this.length+=a.length-h.length,a.length&&this._trigger("add",{items:a}),h.length&&this._trigger("remove",{items:h,oldData:d})},o.prototype.get=function(t){var e,i,o,n=this,s=r.getType(arguments[0]);"String"==s||"Number"==s||"Array"==s?(e=arguments[0],i=arguments[1],o=arguments[2]):(i=arguments[0],o=arguments[1]);var a=r.extend({},this._options,i);this._options.filter&&i&&i.filter&&(a.filter=function(t){return n._options.filter(t)&&i.filter(t)});var h=[];return void 0!=e&&h.push(e),h.push(a),h.push(o),this._data&&this._data.get.apply(this._data,h)},o.prototype.getIds=function(t){var e;if(this._data){var i,o=this._options.filter;i=t&&t.filter?o?function(e){return o(e)&&t.filter(e)}:t.filter:o,e=this._data.getIds({filter:i,order:t&&t.order})}else e=[];return e},o.prototype.map=function(t,e){var i=[];if(this._data){var o,n=this._options.filter;o=e&&e.filter?n?function(t){return n(t)&&e.filter(t)}:e.filter:n,i=this._data.map(t,{filter:o,order:e&&e.order})}else i=[];return i},o.prototype.getDataSet=function(){for(var t=this;t instanceof o;)t=t._data;return t||null},o.prototype._onEvent=function(t,e,i){var o,n,s,r,a=e&&e.items,h=[],d=[],l=[],u=[],c=[],p=[];if(a&&this._data){switch(t){case"add":for(o=0,n=a.length;o<n;o++)s=a[o],(r=this.get(s))&&(this._ids[s]=!0,h.push(s));break;case"update":for(o=0,n=a.length;o<n;o++)s=a[o],r=this.get(s),r?this._ids[s]?(d.push(s),c.push(e.data[o]),u.push(e.oldData[o])):(this._ids[s]=!0,h.push(s)):this._ids[s]&&(delete this._ids[s],l.push(s),p.push(e.oldData[o]));break;case"remove":for(o=0,n=a.length;o<n;o++)s=a[o],this._ids[s]&&(delete this._ids[s],l.push(s),p.push(e.oldData[o]))}this.length+=h.length-l.length,h.length&&this._trigger("add",{items:h},i),d.length&&this._trigger("update",{items:d,oldData:u,data:c},i),l.length&&this._trigger("remove",{items:l,oldData:p},i)}},o.prototype.on=a.prototype.on,o.prototype.off=a.prototype.off,o.prototype._trigger=a.prototype._trigger,o.prototype.subscribe=o.prototype.on,o.prototype.unsubscribe=o.prototype.off,t.exports=o},function(t,e,i){var o=i(57)("wks"),n=i(40),s=i(18).Symbol,r="function"==typeof s;(t.exports=function(t){return o[t]||(o[t]=r&&s[t]||(r?s:n)("Symbol."+t))}).store=o},function(t,e,i){e.prepareElements=function(t){for(var e in t)t.hasOwnProperty(e)&&(t[e].redundant=t[e].used,t[e].used=[])},e.cleanupElements=function(t){for(var e in t)if(t.hasOwnProperty(e)&&t[e].redundant){for(var i=0;i<t[e].redundant.length;i++)t[e].redundant[i].parentNode.removeChild(t[e].redundant[i]);t[e].redundant=[]}},e.resetElements=function(t){e.prepareElements(t),e.cleanupElements(t),e.prepareElements(t)},e.getSVGElement=function(t,e,i){var o;return e.hasOwnProperty(t)?e[t].redundant.length>0?(o=e[t].redundant[0],e[t].redundant.shift()):(o=document.createElementNS("http://www.w3.org/2000/svg",t),i.appendChild(o)):(o=document.createElementNS("http://www.w3.org/2000/svg",t),e[t]={used:[],redundant:[]},i.appendChild(o)),e[t].used.push(o),o},e.getDOMElement=function(t,e,i,o){var n;return e.hasOwnProperty(t)?e[t].redundant.length>0?(n=e[t].redundant[0],e[t].redundant.shift()):(n=document.createElement(t),void 0!==o?i.insertBefore(n,o):i.appendChild(n)):(n=document.createElement(t),e[t]={used:[],redundant:[]},void 0!==o?i.insertBefore(n,o):i.appendChild(n)),e[t].used.push(n),n},e.drawPoint=function(t,i,o,n,s,r){var a;if("circle"==o.style?(a=e.getSVGElement("circle",n,s),a.setAttributeNS(null,"cx",t),a.setAttributeNS(null,"cy",i),a.setAttributeNS(null,"r",.5*o.size)):(a=e.getSVGElement("rect",n,s),a.setAttributeNS(null,"x",t-.5*o.size),a.setAttributeNS(null,"y",i-.5*o.size),a.setAttributeNS(null,"width",o.size),a.setAttributeNS(null,"height",o.size)),void 0!==o.styles&&a.setAttributeNS(null,"style",o.styles),a.setAttributeNS(null,"class",o.className+" vis-point"),r){var h=e.getSVGElement("text",n,s);r.xOffset&&(t+=r.xOffset),r.yOffset&&(i+=r.yOffset),r.content&&(h.textContent=r.content),r.className&&h.setAttributeNS(null,"class",r.className+" vis-label"),h.setAttributeNS(null,"x",t),h.setAttributeNS(null,"y",i)}return a},e.drawBar=function(t,i,o,n,s,r,a,h){if(0!=n){n<0&&(n*=-1,i-=n);var d=e.getSVGElement("rect",r,a);d.setAttributeNS(null,"x",t-.5*o),d.setAttributeNS(null,"y",i),d.setAttributeNS(null,"width",o),d.setAttributeNS(null,"height",n),d.setAttributeNS(null,"class",s),h&&d.setAttributeNS(null,"style",h)}}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.printStyle=void 0;var n=i(19),s=o(n),r=i(6),a=o(r),h=i(8),d=o(h),l=i(0),u=o(l),c=i(1),p=o(c),f=i(2),m=!1,v=void 0,g="background: #FFeeee; color: #dd0000",y=function(){function t(){(0,u.default)(this,t)}return(0,p.default)(t,null,[{key:"validate",value:function(e,i,o){m=!1,v=i;var n=i;return void 0!==o&&(n=i[o]),t.parse(e,n,[]),m}},{key:"parse",value:function(e,i,o){for(var n in e)e.hasOwnProperty(n)&&t.check(n,e,i,o)}},{key:"check",value:function(e,i,o,n){if(void 0===o[e]&&void 0===o.__any__)return void t.getSuggestion(e,o,n);var s=e,r=!0;void 0===o[e]&&void 0!==o.__any__&&(s="__any__",r="object"===t.getType(i[e]));var a=o[s];r&&void 0!==a.__type__&&(a=a.__type__),t.checkFields(e,i,o,s,a,n)}},{key:"checkFields",value:function(e,i,o,n,s,r){var a=function(i){console.log("%c"+i+t.printLocation(r,e),g)},h=t.getType(i[e]),l=s[h];void 0!==l?"array"===t.getType(l)&&-1===l.indexOf(i[e])?(a('Invalid option detected in "'+e+'". Allowed values are:'+t.print(l)+' not "'+i[e]+'". '),m=!0):"object"===h&&"__any__"!==n&&(r=f.copyAndExtendArray(r,e),t.parse(i[e],o[n],r)):void 0===s.any&&(a('Invalid type received for "'+e+'". Expected: '+t.print((0,d.default)(s))+". Received ["+h+'] "'+i[e]+'"'),m=!0)}},{key:"getType",value:function(t){var e=void 0===t?"undefined":(0,a.default)(t);return"object"===e?null===t?"null":t instanceof Boolean?"boolean":t instanceof Number?"number":t instanceof String?"string":Array.isArray(t)?"array":t instanceof Date?"date":void 0!==t.nodeType?"dom":!0===t._isAMomentObject?"moment":"object":"number"===e?"number":"boolean"===e?"boolean":"string"===e?"string":void 0===e?"undefined":e}},{key:"getSuggestion",value:function(e,i,o){var n=t.findInOptions(e,i,o,!1),s=t.findInOptions(e,v,[],!0),r=void 0
;r=void 0!==n.indexMatch?" in "+t.printLocation(n.path,e,"")+'Perhaps it was incomplete? Did you mean: "'+n.indexMatch+'"?\n\n':s.distance<=4&&n.distance>s.distance?" in "+t.printLocation(n.path,e,"")+"Perhaps it was misplaced? Matching option found at: "+t.printLocation(s.path,s.closestMatch,""):n.distance<=8?'. Did you mean "'+n.closestMatch+'"?'+t.printLocation(n.path,e):". Did you mean one of these: "+t.print((0,d.default)(i))+t.printLocation(o,e),console.log('%cUnknown option detected: "'+e+'"'+r,g),m=!0}},{key:"findInOptions",value:function(e,i,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=1e9,r="",a=[],h=e.toLowerCase(),d=void 0;for(var l in i){var u=void 0;if(void 0!==i[l].__type__&&!0===n){var c=t.findInOptions(e,i[l],f.copyAndExtendArray(o,l));s>c.distance&&(r=c.closestMatch,a=c.path,s=c.distance,d=c.indexMatch)}else-1!==l.toLowerCase().indexOf(h)&&(d=l),u=t.levenshteinDistance(e,l),s>u&&(r=l,a=f.copyArray(o),s=u)}return{closestMatch:r,path:a,distance:s,indexMatch:d}}},{key:"printLocation",value:function(t,e){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Problem value found at: \n",o="\n\n"+i+"options = {\n",n=0;n<t.length;n++){for(var s=0;s<n+1;s++)o+="  ";o+=t[n]+": {\n"}for(var r=0;r<t.length+1;r++)o+="  ";o+=e+"\n";for(var a=0;a<t.length+1;a++){for(var h=0;h<t.length-a;h++)o+="  ";o+="}\n"}return o+"\n\n"}},{key:"print",value:function(t){return(0,s.default)(t).replace(/(\")|(\[)|(\])|(,"__type__")/g,"").replace(/(\,)/g,", ")}},{key:"levenshteinDistance",value:function(t,e){if(0===t.length)return e.length;if(0===e.length)return t.length;var i,o=[];for(i=0;i<=e.length;i++)o[i]=[i];var n;for(n=0;n<=t.length;n++)o[0][n]=n;for(i=1;i<=e.length;i++)for(n=1;n<=t.length;n++)e.charAt(i-1)==t.charAt(n-1)?o[i][n]=o[i-1][n-1]:o[i][n]=Math.min(o[i-1][n-1]+1,Math.min(o[i][n-1]+1,o[i-1][n]+1));return o[e.length][t.length]}}]),t}();e.default=y,e.printStyle=g},function(t,e,i){function o(t,e){this.options=null,this.props=null}var n=i(2);o.prototype.setOptions=function(t){t&&n.extend(this.options,t)},o.prototype.redraw=function(){return!1},o.prototype.destroy=function(){},o.prototype._isResized=function(){var t=this.props._previousWidth!==this.props.width||this.props._previousHeight!==this.props.height;return this.props._previousWidth=this.props.width,this.props._previousHeight=this.props.height,t},t.exports=o},function(t,e,i){var o=i(18),n=i(7),s=i(80),r=i(26),a=function(t,e,i){var h,d,l,u=t&a.F,c=t&a.G,p=t&a.S,f=t&a.P,m=t&a.B,v=t&a.W,g=c?n:n[e]||(n[e]={}),y=g.prototype,b=c?o:p?o[e]:(o[e]||{}).prototype;c&&(i=e);for(h in i)(d=!u&&b&&void 0!==b[h])&&h in g||(l=d?b[h]:i[h],g[h]=c&&"function"!=typeof b[h]?i[h]:m&&d?s(l,o):v&&b[h]==l?function(t){var e=function(e,i,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):f&&"function"==typeof l?s(Function.call,l):l,f&&((g.virtual||(g.virtual={}))[h]=l,t&a.R&&y&&!y[h]&&r(y,h,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e,i){t.exports={default:i(160),__esModule:!0}},function(t,e,i){var o=i(27),n=i(81),s=i(53),r=Object.defineProperty;e.f=i(21)?Object.defineProperty:function(t,e,i){if(o(t),e=s(e,!0),o(i),n)try{return r(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},function(t,e,i){t.exports=!i(28)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(6),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=function(){function t(e,i,o){(0,a.default)(this,t),this.body=i,this.labelModule=o,this.setOptions(e),this.top=void 0,this.left=void 0,this.height=void 0,this.width=void 0,this.radius=void 0,this.margin=void 0,this.refreshNeeded=!0,this.boundingBox={top:0,left:0,right:0,bottom:0}}return(0,d.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"_setMargins",value:function(t){this.margin={},this.options.margin&&("object"==(0,s.default)(this.options.margin)?(this.margin.top=this.options.margin.top,this.margin.right=this.options.margin.right,this.margin.bottom=this.options.margin.bottom,this.margin.left=this.options.margin.left):(this.margin.top=this.options.margin,this.margin.right=this.options.margin,this.margin.bottom=this.options.margin,this.margin.left=this.options.margin)),t.adjustSizes(this.margin)}},{key:"_distanceToBorder",value:function(t,e){var i=this.options.borderWidth;return this.resize(t),Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}},{key:"enableShadow",value:function(t,e){e.shadow&&(t.shadowColor=e.shadowColor,t.shadowBlur=e.shadowSize,t.shadowOffsetX=e.shadowX,t.shadowOffsetY=e.shadowY)}},{key:"disableShadow",value:function(t,e){e.shadow&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0)}},{key:"enableBorderDashes",value:function(t,e){if(!1!==e.borderDashes)if(void 0!==t.setLineDash){var i=e.borderDashes;!0===i&&(i=[5,15]),t.setLineDash(i)}else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,e.borderDashes=!1}},{key:"disableBorderDashes",value:function(t,e){!1!==e.borderDashes&&(void 0!==t.setLineDash?t.setLineDash([0]):(console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,e.borderDashes=!1))}},{key:"needsRefresh",value:function(t,e){return!0===this.refreshNeeded?(this.refreshNeeded=!1,!0):void 0===this.width||this.labelModule.differentState(t,e)}},{key:"initContextForDraw",value:function(t,e){var i=e.borderWidth/this.body.view.scale;t.lineWidth=Math.min(this.width,i),t.strokeStyle=e.borderColor,t.fillStyle=e.color}},{key:"performStroke",value:function(t,e){var i=e.borderWidth/this.body.view.scale;t.save(),i>0&&(this.enableBorderDashes(t,e),t.stroke(),this.disableBorderDashes(t,e)),t.restore()}},{key:"performFill",value:function(t,e){this.enableShadow(t,e),t.fill(),this.disableShadow(t,e),this.performStroke(t,e)}},{key:"_addBoundingBoxMargin",value:function(t){this.boundingBox.left-=t,this.boundingBox.top-=t,this.boundingBox.bottom+=t,this.boundingBox.right+=t}},{key:"_updateBoundingBox",value:function(t,e,i,o,n){void 0!==i&&this.resize(i,o,n),this.left=t-this.width/2,this.top=e-this.height/2,this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width}},{key:"updateBoundingBox",value:function(t,e,i,o,n){this._updateBoundingBox(t,e,i,o,n)}},{key:"getDimensionsFromLabel",value:function(t,e,i){this.textSize=this.labelModule.getTextSize(t,e,i);var o=this.textSize.width,n=this.textSize.height;return 0===o&&(o=14,n=14),{width:o,height:n}}}]),t}();e.default=l},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(23),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{size:this.options.size};if(this.needsRefresh(e,i)){this.labelModule.getTextSize(t,e,i);var n=2*o.size;this.width=n,this.height=n,this.radius=.5*this.width}}},{key:"_drawShape",value:function(t,e,i,o,n,s,r,a){if(this.resize(t,s,r,a),this.left=o-this.width/2,this.top=n-this.height/2,this.initContextForDraw(t,a),t[e](o,n,a.size),this.performFill(t,a),void 0!==this.options.label){this.labelModule.calculateLabelSize(t,s,r,o,n,"hanging");var h=n+.5*this.height+.5*this.labelModule.size.height;this.labelModule.draw(t,o,h,s,r,"hanging")}this.updateBoundingBox(o,n)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height))}}]),e}(m.default);e.default=v},function(t,e,i){var o=i(78),n=i(51);t.exports=function(t){return o(n(t))}},function(t,e,i){var o=i(20),n=i(39);t.exports=i(21)?function(t,e,i){return o.f(t,e,n(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e,i){var o=i(32);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,i){t.exports={default:i(138),__esModule:!0}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var n=i(188),s=o(n),r=i(77),a=o(r);e.default=function(){function t(t,e){var i=[],o=!0,n=!1,s=void 0;try{for(var r,h=(0,a.default)(t);!(o=(r=h.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(t){n=!0,s=t}finally{try{!o&&h.return&&h.return()}finally{if(n)throw s}}return i}return function(e,i){if(Array.isArray(e))return e;if((0,s.default)(Object(e)))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e){t.exports={}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,i){var o=i(84),n=i(58);t.exports=Object.keys||function(t){return o(t,n)}},function(t,e,i){function o(t,e,i){this.x=void 0!==t?t:0,this.y=void 0!==e?e:0,this.z=void 0!==i?i:0}o.subtract=function(t,e){var i=new o;return i.x=t.x-e.x,i.y=t.y-e.y,i.z=t.z-e.z,i},o.add=function(t,e){var i=new o;return i.x=t.x+e.x,i.y=t.y+e.y,i.z=t.z+e.z,i},o.avg=function(t,e){return new o((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2)},o.crossProduct=function(t,e){var i=new o;return i.x=t.y*e.z-t.z*e.y,i.y=t.z*e.x-t.x*e.z,i.z=t.x*e.y-t.y*e.x,i},o.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},t.exports=o},function(t,e,i){var o,n,s;!function(i,r){n=[],o=r,void 0!==(s="function"==typeof o?o.apply(e,n):o)&&(t.exports=s)}(0,function(){function t(t){var e,i=t&&t.preventDefault||!1,o=t&&t.container||window,n={},s={keydown:{},keyup:{}},r={};for(e=97;e<=122;e++)r[String.fromCharCode(e)]={code:e-97+65,shift:!1};for(e=65;e<=90;e++)r[String.fromCharCode(e)]={code:e,shift:!0};for(e=0;e<=9;e++)r[""+e]={code:48+e,shift:!1};for(e=1;e<=12;e++)r["F"+e]={code:111+e,shift:!1};for(e=0;e<=9;e++)r["num"+e]={code:96+e,shift:!1};r["num*"]={code:106,shift:!1},r["num+"]={code:107,shift:!1},r["num-"]={code:109,shift:!1},r["num/"]={code:111,shift:!1},r["num."]={code:110,shift:!1},r.left={code:37,shift:!1},r.up={code:38,shift:!1},r.right={code:39,shift:!1},r.down={code:40,shift:!1},r.space={code:32,shift:!1},r.enter={code:13,shift:!1},r.shift={code:16,shift:void 0},r.esc={code:27,shift:!1},r.backspace={code:8,shift:!1},r.tab={code:9,shift:!1},r.ctrl={code:17,shift:!1},r.alt={code:18,shift:!1},r.delete={code:46,shift:!1},r.pageup={code:33,shift:!1},r.pagedown={code:34,shift:!1},r["="]={code:187,shift:!1},r["-"]={code:189,shift:!1},r["]"]={code:221,shift:!1},r["["]={code:219,shift:!1};var a=function(t){d(t,"keydown")},h=function(t){d(t,"keyup")},d=function(t,e){if(void 0!==s[e][t.keyCode]){for(var o=s[e][t.keyCode],n=0;n<o.length;n++)void 0===o[n].shift?o[n].fn(t):1==o[n].shift&&1==t.shiftKey?o[n].fn(t):0==o[n].shift&&0==t.shiftKey&&o[n].fn(t);1==i&&t.preventDefault()}};return n.bind=function(t,e,i){if(void 0===i&&(i="keydown"),void 0===r[t])throw new Error("unsupported key: "+t);void 0===s[i][r[t].code]&&(s[i][r[t].code]=[]),s[i][r[t].code].push({fn:e,shift:r[t].shift})},n.bindAll=function(t,e){void 0===e&&(e="keydown");for(var i in r)r.hasOwnProperty(i)&&n.bind(i,t,e)},n.getKey=function(t){for(var e in r)if(r.hasOwnProperty(e)){if(1==t.shiftKey&&1==r[e].shift&&t.keyCode==r[e].code)return e;if(0==t.shiftKey&&0==r[e].shift&&t.keyCode==r[e].code)return e;if(t.keyCode==r[e].code&&"shift"==e)return e}return"unknown key, currently not supported"},n.unbind=function(t,e,i){if(void 0===i&&(i="keydown"),void 0===r[t])throw new Error("unsupported key: "+t);if(void 0!==e){var o=[],n=s[i][r[t].code];if(void 0!==n)for(var a=0;a<n.length;a++)n[a].fn==e&&n[a].shift==r[t].shift||o.push(s[i][r[t].code][a]);s[i][r[t].code]=o}else s[i][r[t].code]=[]},n.reset=function(){s={keydown:{},keyup:{}}},n.destroy=function(){s={keydown:{},keyup:{}},o.removeEventListener("keydown",a,!0),o.removeEventListener("keyup",h,!0)},o.addEventListener("keydown",a,!0),o.addEventListener("keyup",h,!0),n}return t})},function(t,e,i){e.convertHiddenOptions=function(t,i,o){if(o&&!Array.isArray(o))return e.convertHiddenOptions(t,i,[o]);if(i.hiddenDates=[],o&&1==Array.isArray(o)){for(var n=0;n<o.length;n++)if(void 0===o[n].repeat){var s={};s.start=t(o[n].start).toDate().valueOf(),s.end=t(o[n].end).toDate().valueOf(),i.hiddenDates.push(s)}i.hiddenDates.sort(function(t,e){return t.start-e.start})}},e.updateHiddenDates=function(t,i,o){if(o&&!Array.isArray(o))return e.updateHiddenDates(t,i,[o]);if(o&&void 0!==i.domProps.centerContainer.width){e.convertHiddenOptions(t,i,o);for(var n=t(i.range.start),s=t(i.range.end),r=i.range.end-i.range.start,a=r/i.domProps.centerContainer.width,h=0;h<o.length;h++)if(void 0!==o[h].repeat){var d=t(o[h].start),l=t(o[h].end);if("Invalid Date"==d._d)throw new Error("Supplied start date is not valid: "+o[h].start);if("Invalid Date"==l._d)throw new Error("Supplied end date is not valid: "+o[h].end);var u=l-d;if(u>=4*a){var c=0,p=s.clone();switch(o[h].repeat){case"daily":d.day()!=l.day()&&(c=1),d.dayOfYear(n.dayOfYear()),d.year(n.year()),d.subtract(7,"days"),l.dayOfYear(n.dayOfYear()),l.year(n.year()),l.subtract(7-c,"days"),p.add(1,"weeks");break;case"weekly":var f=l.diff(d,"days"),m=d.day();d.date(n.date()),d.month(n.month()),d.year(n.year()),l=d.clone(),d.day(m),l.day(m),l.add(f,"days"),d.subtract(1,"weeks"),l.subtract(1,"weeks"),p.add(1,"weeks");break;case"monthly":d.month()!=l.month()&&(c=1),d.month(n.month()),d.year(n.year()),d.subtract(1,"months"),l.month(n.month()),l.year(n.year()),l.subtract(1,"months"),l.add(c,"months"),p.add(1,"months");break;case"yearly":d.year()!=l.year()&&(c=1),d.year(n.year()),d.subtract(1,"years"),l.year(n.year()),l.subtract(1,"years"),l.add(c,"years"),p.add(1,"years");break;default:return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:",o[h].repeat)}for(;d<p;)switch(i.hiddenDates.push({start:d.valueOf(),end:l.valueOf()}),o[h].repeat){case"daily":d.add(1,"days"),l.add(1,"days");break;case"weekly":d.add(1,"weeks"),l.add(1,"weeks");break;case"monthly":d.add(1,"months"),l.add(1,"months");break;case"yearly":d.add(1,"y"),l.add(1,"y");break;default:return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:",o[h].repeat)}i.hiddenDates.push({start:d.valueOf(),end:l.valueOf()})}}e.removeDuplicates(i);var v=e.isHidden(i.range.start,i.hiddenDates),g=e.isHidden(i.range.end,i.hiddenDates),y=i.range.start,b=i.range.end;1==v.hidden&&(y=1==i.range.startToFront?v.startDate-1:v.endDate+1),1==g.hidden&&(b=1==i.range.endToFront?g.startDate-1:g.endDate+1),1!=v.hidden&&1!=g.hidden||i.range._applyRange(y,b)}},e.removeDuplicates=function(t){for(var e=t.hiddenDates,i=[],o=0;o<e.length;o++)for(var n=0;n<e.length;n++)o!=n&&1!=e[n].remove&&1!=e[o].remove&&(e[n].start>=e[o].start&&e[n].end<=e[o].end?e[n].remove=!0:e[n].start>=e[o].start&&e[n].start<=e[o].end?(e[o].end=e[n].end,e[n].remove=!0):e[n].end>=e[o].start&&e[n].end<=e[o].end&&(e[o].start=e[n].start,e[n].remove=!0));for(o=0;o<e.length;o++)!0!==e[o].remove&&i.push(e[o]);t.hiddenDates=i,t.hiddenDates.sort(function(t,e){return t.start-e.start})},e.printDates=function(t){for(var e=0;e<t.length;e++)console.log(e,new Date(t[e].start),new Date(t[e].end),t[e].start,t[e].end,t[e].remove)},e.stepOverHiddenDates=function(t,e,i){for(var o=!1,n=e.current.valueOf(),s=0;s<e.hiddenDates.length;s++){var r=e.hiddenDates[s].start,a=e.hiddenDates[s].end;if(n>=r&&n<a){o=!0;break}}if(1==o&&n<e._end.valueOf()&&n!=i){var h=t(i),d=t(a);h.year()!=d.year()?e.switchedYear=!0:h.month()!=d.month()?e.switchedMonth=!0:h.dayOfYear()!=d.dayOfYear()&&(e.switchedDay=!0),e.current=d}},e.toScreen=function(t,i,o){var n;if(0==t.body.hiddenDates.length)return n=t.range.conversion(o),(i.valueOf()-n.offset)*n.scale;var s=e.isHidden(i,t.body.hiddenDates);1==s.hidden&&(i=s.startDate);var r=e.getHiddenDurationBetween(t.body.hiddenDates,t.range.start,t.range.end);if(i<t.range.start){n=t.range.conversion(o,r);var a=e.getHiddenDurationBeforeStart(t.body.hiddenDates,i,n.offset);return i=t.options.moment(i).toDate().valueOf(),i+=a,-(n.offset-i.valueOf())*n.scale}if(i>t.range.end){var h={start:t.range.start,end:i};return i=e.correctTimeForHidden(t.options.moment,t.body.hiddenDates,h,i),n=t.range.conversion(o,r),(i.valueOf()-n.offset)*n.scale}return i=e.correctTimeForHidden(t.options.moment,t.body.hiddenDates,t.range,i),n=t.range.conversion(o,r),(i.valueOf()-n.offset)*n.scale},e.toTime=function(t,i,o){if(0==t.body.hiddenDates.length){var n=t.range.conversion(o);return new Date(i/n.scale+n.offset)}var s=e.getHiddenDurationBetween(t.body.hiddenDates,t.range.start,t.range.end),r=t.range.end-t.range.start-s,a=r*i/o,h=e.getAccumulatedHiddenDuration(t.body.hiddenDates,t.range,a);return new Date(h+a+t.range.start)},e.getHiddenDurationBetween=function(t,e,i){for(var o=0,n=0;n<t.length;n++){var s=t[n].start,r=t[n].end;s>=e&&r<i&&(o+=r-s)}return o},e.getHiddenDurationBeforeStart=function(t,e,i){for(var o=0,n=0;n<t.length;n++){var s=t[n].start,r=t[n].end;s>=e&&r<=i&&(o+=r-s)}return o},e.correctTimeForHidden=function(t,i,o,n){return n=t(n).toDate().valueOf(),n-=e.getHiddenDurationBefore(t,i,o,n)},e.getHiddenDurationBefore=function(t,e,i,o){var n=0;o=t(o).toDate().valueOf();for(var s=0;s<e.length;s++){var r=e[s].start,a=e[s].end;r>=i.start&&a<i.end&&o>=a&&(n+=a-r)}return n},e.getAccumulatedHiddenDuration=function(t,e,i){for(var o=0,n=0,s=e.start,r=0;r<t.length;r++){var a=t[r].start,h=t[r].end;if(a>=e.start&&h<e.end){if(n+=a-s,s=h,n>=i)break;o+=h-a}}return o},e.snapAwayFromHidden=function(t,i,o,n){var s=e.isHidden(i,t);return 1==s.hidden?o<0?1==n?s.startDate-(s.endDate-i)-1:s.startDate-1:1==n?s.endDate+(i-s.startDate)+1:s.endDate+1:i},e.isHidden=function(t,e){for(var i=0;i<e.length;i++){var o=e[i].start,n=e[i].end;if(t>=o&&t<n)return{hidden:!0,startDate:o,endDate:n}}return{hidden:!1,startDate:o,endDate:n}}},function(t,e,i){e.onTouch=function(t,e){e.inputHandler=function(t){t.isFirst&&e(t)},t.on("hammer.input",e.inputHandler)},e.onRelease=function(t,e){return e.inputHandler=function(t){t.isFinal&&e(t)},t.on("hammer.input",e.inputHandler)},e.offTouch=function(t,e){t.off("hammer.input",e.inputHandler)},e.offRelease=e.offTouch,e.disablePreventDefaultVertically=function(t){return t.getTouchAction=function(){return["pan-y"]},t}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i){this.id=null,this.parent=null,this.data=t,this.dom=null,this.conversion=e||{},this.options=i||{},this.selected=!1,this.displayed=!1,this.groupShowing=!0,this.dirty=!0,this.top=null,this.right=null,this.left=null,this.width=null,this.height=null,this.editable=null,this._updateEditStatus()}var s=i(6),r=o(s),a=i(8),h=o(a),d=i(10),l=i(2),u=i(9);n.prototype.stack=!0,n.prototype.select=function(){this.selected=!0,this.dirty=!0,this.displayed&&this.redraw()},n.prototype.unselect=function(){this.selected=!1,this.dirty=!0,this.displayed&&this.redraw()},n.prototype.setData=function(t){void 0!=t.group&&this.data.group!=t.group&&null!=this.parent&&this.parent.itemSet._moveToGroup(this,t.group),this.parent&&(this.parent.stackDirty=!0),void 0!=t.subgroup&&this.data.subgroup!=t.subgroup&&null!=this.parent&&this.parent.changeSubgroup(this,this.data.subgroup,t.subgroup),this.data=t,this._updateEditStatus(),this.dirty=!0,this.displayed&&this.redraw()},n.prototype.setParent=function(t){this.displayed?(this.hide(),this.parent=t,this.parent&&this.show()):this.parent=t},n.prototype.isVisible=function(t){return!1},n.prototype.show=function(){return!1},n.prototype.hide=function(){return!1},n.prototype.redraw=function(){},n.prototype.repositionX=function(){},n.prototype.repositionY=function(){},n.prototype._repaintDragCenter=function(){if(this.selected&&this.options.editable.updateTime&&!this.dom.dragCenter){var t=this,e=document.createElement("div");e.className="vis-drag-center",e.dragCenterItem=this;var i=new d(e);i.on("tap",function(e){t.parent.itemSet.body.emitter.emit("click",{event:e,item:t.id})}),i.on("doubletap",function(e){e.stopPropagation(),t.parent.itemSet._onUpdateItem(t),t.parent.itemSet.body.emitter.emit("doubleClick",{event:e,item:t.id})}),this.dom.box?this.dom.dragLeft?this.dom.box.insertBefore(e,this.dom.dragLeft):this.dom.box.appendChild(e):this.dom.point&&this.dom.point.appendChild(e),this.dom.dragCenter=e}else!this.selected&&this.dom.dragCenter&&(this.dom.dragCenter.parentNode&&this.dom.dragCenter.parentNode.removeChild(this.dom.dragCenter),this.dom.dragCenter=null)},n.prototype._repaintDeleteButton=function(t){var e=(this.options.editable.overrideItems||null==this.editable)&&this.options.editable.remove||!this.options.editable.overrideItems&&null!=this.editable&&this.editable.remove;if(this.selected&&e&&!this.dom.deleteButton){var i=this,o=document.createElement("div");this.options.rtl?o.className="vis-delete-rtl":o.className="vis-delete",o.title="Delete this item",new d(o).on("tap",function(t){t.stopPropagation(),i.parent.removeFromDataSet(i)}),t.appendChild(o),this.dom.deleteButton=o}else!this.selected&&this.dom.deleteButton&&(this.dom.deleteButton.parentNode&&this.dom.deleteButton.parentNode.removeChild(this.dom.deleteButton),this.dom.deleteButton=null)},n.prototype._repaintOnItemUpdateTimeTooltip=function(t){if(this.options.tooltipOnItemUpdateTime){var e=(this.options.editable.updateTime||!0===this.data.editable)&&!1!==this.data.editable;if(this.selected&&e&&!this.dom.onItemUpdateTimeTooltip){var i=document.createElement("div");i.className="vis-onUpdateTime-tooltip",t.appendChild(i),this.dom.onItemUpdateTimeTooltip=i}else!this.selected&&this.dom.onItemUpdateTimeTooltip&&(this.dom.onItemUpdateTimeTooltip.parentNode&&this.dom.onItemUpdateTimeTooltip.parentNode.removeChild(this.dom.onItemUpdateTimeTooltip),this.dom.onItemUpdateTimeTooltip=null);if(this.dom.onItemUpdateTimeTooltip){this.dom.onItemUpdateTimeTooltip.style.visibility=this.parent.itemSet.touchParams.itemIsDragging?"visible":"hidden",this.options.rtl?this.dom.onItemUpdateTimeTooltip.style.right=this.dom.content.style.right:this.dom.onItemUpdateTimeTooltip.style.left=this.dom.content.style.left;var o,n=this.parent.itemSet.body.domProps.scrollTop;o="top"==this.options.orientation.item?this.top:this.parent.height-this.top-this.height;o+this.parent.top-50<-n?(this.dom.onItemUpdateTimeTooltip.style.bottom="",this.dom.onItemUpdateTimeTooltip.style.top=this.height+2+"px"):(this.dom.onItemUpdateTimeTooltip.style.top="",this.dom.onItemUpdateTimeTooltip.style.bottom=this.height+2+"px");var s,r;this.options.tooltipOnItemUpdateTime&&this.options.tooltipOnItemUpdateTime.template?(r=this.options.tooltipOnItemUpdateTime.template.bind(this),s=r(this.data)):(s="start: "+u(this.data.start).format("MM/DD/YYYY hh:mm"),this.data.end&&(s+="<br> end: "+u(this.data.end).format("MM/DD/YYYY hh:mm"))),this.dom.onItemUpdateTimeTooltip.innerHTML=s}}},n.prototype._updateContents=function(t){var e,i,o,n,s=this.parent.itemSet.itemsData.get(this.id),r=this.dom.box||this.dom.point,a=r.getElementsByClassName("vis-item-visible-frame")[0];if(this.options.visibleFrameTemplate?(n=this.options.visibleFrameTemplate.bind(this),o=n(s,r)):o="",a)if(o instanceof Object&&!(o instanceof Element))n(s,a);else if(this._contentToString(this.itemVisibleFrameContent)!==this._contentToString(o)){if(o instanceof Element)a.innerHTML="",a.appendChild(o);else if(void 0!=o)a.innerHTML=o;else if("background"!=this.data.type||void 0!==this.data.content)throw new Error('Property "content" missing in item '+this.id);this.itemVisibleFrameContent=o}if(this.options.template?(i=this.options.template.bind(this),e=i(s,t,this.data)):e=this.data.content,e instanceof Object&&!(e instanceof Element))i(s,t);else if(this._contentToString(this.content)!==this._contentToString(e)){if(e instanceof Element)t.innerHTML="",t.appendChild(e);else if(void 0!=e)t.innerHTML=e;else if("background"!=this.data.type||void 0!==this.data.content)throw new Error('Property "content" missing in item '+this.id);this.content=e}},n.prototype._updateDataAttributes=function(t){if(this.options.dataAttributes&&this.options.dataAttributes.length>0){var e=[];if(Array.isArray(this.options.dataAttributes))e=this.options.dataAttributes;else{if("all"!=this.options.dataAttributes)return;e=(0,h.default)(this.data)}for(var i=0;i<e.length;i++){var o=e[i],n=this.data[o];null!=n?t.setAttribute("data-"+o,n):t.removeAttribute("data-"+o)}}},n.prototype._updateStyle=function(t){this.style&&(l.removeCssText(t,this.style),this.style=null),this.data.style&&(l.addCssText(t,this.data.style),this.style=this.data.style)},n.prototype._contentToString=function(t){return"string"==typeof t?t:t&&"outerHTML"in t?t.outerHTML:t},n.prototype._updateEditStatus=function(){this.options&&("boolean"==typeof this.options.editable?this.editable={updateTime:this.options.editable,updateGroup:this.options.editable,remove:this.options.editable}:"object"===(0,r.default)(this.options.editable)&&(this.editable={},l.selectiveExtend(["updateTime","updateGroup","remove"],this.editable,this.options.editable))),this.options&&this.options.editable&&!0===this.options.editable.overrideItems||this.data&&("boolean"==typeof this.data.editable?this.editable={updateTime:this.data.editable,updateGroup:this.data.editable,remove:this.data.editable}:"object"===(0,r.default)(this.data.editable)&&(this.editable={},l.selectiveExtend(["updateTime","updateGroup","remove"],this.editable,this.data.editable)))},n.prototype.getWidthLeft=function(){return 0},n.prototype.getWidthRight=function(){return 0},n.prototype.getTitle=function(){return this.data.title},t.exports=n},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var i=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+o).toString(36))}},function(t,e,i){var o=i(51);t.exports=function(t){return Object(o(t))}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,i){function o(t){this.delay=null,this.max=1/0,this._queue=[],this._timeout=null,this._extended=null,this.setOptions(t)}o.prototype.setOptions=function(t){t&&void 0!==t.delay&&(this.delay=t.delay),t&&void 0!==t.max&&(this.max=t.max),this._flushIfNeeded()},o.extend=function(t,e){var i=new o(e);if(void 0!==t.flush)throw new Error("Target object already has a property flush");t.flush=function(){i.flush()};var n=[{name:"flush",original:void 0}];if(e&&e.replace)for(var s=0;s<e.replace.length;s++){var r=e.replace[s];n.push({name:r,original:t[r]}),i.replace(t,r)}return i._extended={object:t,methods:n},i},o.prototype.destroy=function(){if(this.flush(),this._extended){for(var t=this._extended.object,e=this._extended.methods,i=0;i<e.length;i++){var o=e[i];o.original?t[o.name]=o.original:delete t[o.name]}this._extended=null}},o.prototype.replace=function(t,e){var i=this,o=t[e];if(!o)throw new Error("Method "+e+" undefined");t[e]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.queue({args:t,fn:o,context:this})}},o.prototype.queue=function(t){"function"==typeof t?this._queue.push({fn:t}):this._queue.push(t),this._flushIfNeeded()},o.prototype._flushIfNeeded=function(){if(this._queue.length>this.max&&this.flush(),clearTimeout(this._timeout),this.queue.length>0&&"number"==typeof this.delay){var t=this;this._timeout=setTimeout(function(){t.flush()},this.delay)}},o.prototype.flush=function(){for(;this._queue.length>0;){var t=this._queue.shift();t.fn.apply(t.context||t.fn,t.args||[])}},t.exports=o},function(t,e){function i(t){if(t)return o(t)}function o(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},i.prototype.once=function(t,e){function i(){o.off(t,i),e.apply(this,arguments)}var o=this;return this._callbacks=this._callbacks||{},i.fn=e,this.on(t,i),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var i=this._callbacks[t];if(!i)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var o,n=0;n<i.length;n++)if((o=i[n])===e||o.fn===e){i.splice(n,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),i=this._callbacks[t];if(i){i=i.slice(0);for(var o=0,n=i.length;o<n;++o)i[o].apply(this,e)}return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,i){function o(t,e){this.dom={foreground:null,lines:[],majorTexts:[],minorTexts:[],redundant:{lines:[],majorTexts:[],minorTexts:[]}},this.props={range:{start:0,end:0,minimumStep:0},lineTop:0},this.defaultOptions={orientation:{axis:"bottom"},showMinorLabels:!0,showMajorLabels:!0,maxMinorChars:7,format:h.FORMAT,moment:l,timeAxis:null},this.options=r.extend({},this.defaultOptions),this.body=t,this._create(),this.setOptions(e)}var n=i(6),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(2),a=i(16),h=i(66),d=i(36),l=i(9);o.prototype=new a,o.prototype.setOptions=function(t){t&&(r.selectiveExtend(["showMinorLabels","showMajorLabels","maxMinorChars","hiddenDates","timeAxis","moment","rtl"],this.options,t),r.selectiveDeepExtend(["format"],this.options,t),"orientation"in t&&("string"==typeof t.orientation?this.options.orientation.axis=t.orientation:"object"===(0,s.default)(t.orientation)&&"axis"in t.orientation&&(this.options.orientation.axis=t.orientation.axis)),"locale"in t&&("function"==typeof l.locale?l.locale(t.locale):l.lang(t.locale)))},o.prototype._create=function(){this.dom.foreground=document.createElement("div"),this.dom.background=document.createElement("div"),this.dom.foreground.className="vis-time-axis vis-foreground",this.dom.background.className="vis-time-axis vis-background"},o.prototype.destroy=function(){this.dom.foreground.parentNode&&this.dom.foreground.parentNode.removeChild(this.dom.foreground),this.dom.background.parentNode&&this.dom.background.parentNode.removeChild(this.dom.background),this.body=null},o.prototype.redraw=function(){var t=this.props,e=this.dom.foreground,i=this.dom.background,o="top"==this.options.orientation.axis?this.body.dom.top:this.body.dom.bottom,n=e.parentNode!==o;this._calculateCharSize()
;var s=this.options.showMinorLabels&&"none"!==this.options.orientation.axis,r=this.options.showMajorLabels&&"none"!==this.options.orientation.axis;t.minorLabelHeight=s?t.minorCharHeight:0,t.majorLabelHeight=r?t.majorCharHeight:0,t.height=t.minorLabelHeight+t.majorLabelHeight,t.width=e.offsetWidth,t.minorLineHeight=this.body.domProps.root.height-t.majorLabelHeight-("top"==this.options.orientation.axis?this.body.domProps.bottom.height:this.body.domProps.top.height),t.minorLineWidth=1,t.majorLineHeight=t.minorLineHeight+t.majorLabelHeight,t.majorLineWidth=1;var a=e.nextSibling,h=i.nextSibling;return e.parentNode&&e.parentNode.removeChild(e),i.parentNode&&i.parentNode.removeChild(i),e.style.height=this.props.height+"px",this._repaintLabels(),a?o.insertBefore(e,a):o.appendChild(e),h?this.body.dom.backgroundVertical.insertBefore(i,h):this.body.dom.backgroundVertical.appendChild(i),this._isResized()||n},o.prototype._repaintLabels=function(){var t=this.options.orientation.axis,e=r.convert(this.body.range.start,"Number"),i=r.convert(this.body.range.end,"Number"),o=this.body.util.toTime((this.props.minorCharWidth||10)*this.options.maxMinorChars).valueOf(),n=o-d.getHiddenDurationBefore(this.options.moment,this.body.hiddenDates,this.body.range,o);n-=this.body.util.toTime(0).valueOf();var s=new h(new Date(e),new Date(i),n,this.body.hiddenDates,this.options);s.setMoment(this.options.moment),this.options.format&&s.setFormat(this.options.format),this.options.timeAxis&&s.setScale(this.options.timeAxis),this.step=s;var a=this.dom;a.redundant.lines=a.lines,a.redundant.majorTexts=a.majorTexts,a.redundant.minorTexts=a.minorTexts,a.lines=[],a.majorTexts=[],a.minorTexts=[];var l,c,p,f,m,v,g,y,b,_=0,w=void 0,x=0;for(s.start(),l=s.getCurrent(),p=this.body.util.toScreen(l);s.hasNext()&&x<1e3;){switch(x++,f=s.isMajor(),b=s.getClassName(),y=s.getLabelMinor(),l,c=p,s.next(),l=s.getCurrent(),s.isMajor(),p=this.body.util.toScreen(l),v=_,_=p-c,s.scale){case"week":m=!0;break;default:m=_>=.4*v}if(this.options.showMinorLabels&&m){var k=this._repaintMinorText(c,y,t,b);k.style.width=_+"px"}f&&this.options.showMajorLabels?(c>0&&(void 0==w&&(w=c),k=this._repaintMajorText(c,s.getLabelMajor(),t,b)),g=this._repaintMajorLine(c,_,t,b)):m?g=this._repaintMinorLine(c,_,t,b):g&&(g.style.width=parseInt(g.style.width)+_+"px")}if(1e3!==x||u||(console.warn("Something is wrong with the Timeline scale. Limited drawing of grid lines to 1000 lines."),u=!0),this.options.showMajorLabels){var S=this.body.util.toTime(0),D=s.getLabelMajor(S),M=D.length*(this.props.majorCharWidth||10)+10;(void 0==w||M<w)&&this._repaintMajorText(0,D,t,b)}r.forEach(this.dom.redundant,function(t){for(;t.length;){var e=t.pop();e&&e.parentNode&&e.parentNode.removeChild(e)}})},o.prototype._repaintMinorText=function(t,e,i,o){var n=this.dom.redundant.minorTexts.shift();if(!n){var s=document.createTextNode("");n=document.createElement("div"),n.appendChild(s),this.dom.foreground.appendChild(n)}return this.dom.minorTexts.push(n),n.innerHTML=e,n.style.top="top"==i?this.props.majorLabelHeight+"px":"0",this.options.rtl?(n.style.left="",n.style.right=t+"px"):n.style.left=t+"px",n.className="vis-text vis-minor "+o,n},o.prototype._repaintMajorText=function(t,e,i,o){var n=this.dom.redundant.majorTexts.shift();if(!n){var s=document.createElement("div");n=document.createElement("div"),n.appendChild(s),this.dom.foreground.appendChild(n)}return n.childNodes[0].innerHTML=e,n.className="vis-text vis-major "+o,n.style.top="top"==i?"0":this.props.minorLabelHeight+"px",this.options.rtl?(n.style.left="",n.style.right=t+"px"):n.style.left=t+"px",this.dom.majorTexts.push(n),n},o.prototype._repaintMinorLine=function(t,e,i,o){var n=this.dom.redundant.lines.shift();n||(n=document.createElement("div"),this.dom.background.appendChild(n)),this.dom.lines.push(n);var s=this.props;return n.style.top="top"==i?s.majorLabelHeight+"px":this.body.domProps.top.height+"px",n.style.height=s.minorLineHeight+"px",this.options.rtl?(n.style.left="",n.style.right=t-s.minorLineWidth/2+"px",n.className="vis-grid vis-vertical-rtl vis-minor "+o):(n.style.left=t-s.minorLineWidth/2+"px",n.className="vis-grid vis-vertical vis-minor "+o),n.style.width=e+"px",n},o.prototype._repaintMajorLine=function(t,e,i,o){var n=this.dom.redundant.lines.shift();n||(n=document.createElement("div"),this.dom.background.appendChild(n)),this.dom.lines.push(n);var s=this.props;return n.style.top="top"==i?"0":this.body.domProps.top.height+"px",this.options.rtl?(n.style.left="",n.style.right=t-s.majorLineWidth/2+"px",n.className="vis-grid vis-vertical-rtl vis-major "+o):(n.style.left=t-s.majorLineWidth/2+"px",n.className="vis-grid vis-vertical vis-major "+o),n.style.height=s.majorLineHeight+"px",n.style.width=e+"px",n},o.prototype._calculateCharSize=function(){this.dom.measureCharMinor||(this.dom.measureCharMinor=document.createElement("DIV"),this.dom.measureCharMinor.className="vis-text vis-minor vis-measure",this.dom.measureCharMinor.style.position="absolute",this.dom.measureCharMinor.appendChild(document.createTextNode("0")),this.dom.foreground.appendChild(this.dom.measureCharMinor)),this.props.minorCharHeight=this.dom.measureCharMinor.clientHeight,this.props.minorCharWidth=this.dom.measureCharMinor.clientWidth,this.dom.measureCharMajor||(this.dom.measureCharMajor=document.createElement("DIV"),this.dom.measureCharMajor.className="vis-text vis-major vis-measure",this.dom.measureCharMajor.style.position="absolute",this.dom.measureCharMajor.appendChild(document.createTextNode("0")),this.dom.foreground.appendChild(this.dom.measureCharMajor)),this.props.majorCharHeight=this.dom.measureCharMajor.clientHeight,this.props.majorCharWidth=this.dom.measureCharMajor.clientWidth};var u=!1;t.exports=o},function(t,e,i){function o(t,e){this.body=t,this.defaultOptions={moment:a,locales:h,locale:"en",id:void 0,title:void 0},this.options=s.extend({},this.defaultOptions),e&&e.time?this.customTime=e.time:this.customTime=new Date,this.eventParams={},this.setOptions(e),this._create()}var n=i(10),s=i(2),r=i(16),a=i(9),h=i(98);o.prototype=new r,o.prototype.setOptions=function(t){t&&s.selectiveExtend(["moment","locale","locales","id"],this.options,t)},o.prototype._create=function(){function t(t){this.body.range._onMouseWheel(t)}var e=document.createElement("div");e["custom-time"]=this,e.className="vis-custom-time "+(this.options.id||""),e.style.position="absolute",e.style.top="0px",e.style.height="100%",this.bar=e;var i=document.createElement("div");i.style.position="relative",i.style.top="0px",i.style.left="-10px",i.style.height="100%",i.style.width="20px",i.addEventListener?(i.addEventListener("mousewheel",t.bind(this),!1),i.addEventListener("DOMMouseScroll",t.bind(this),!1)):i.attachEvent("onmousewheel",t.bind(this)),e.appendChild(i),this.hammer=new n(i),this.hammer.on("panstart",this._onDragStart.bind(this)),this.hammer.on("panmove",this._onDrag.bind(this)),this.hammer.on("panend",this._onDragEnd.bind(this)),this.hammer.get("pan").set({threshold:5,direction:n.DIRECTION_HORIZONTAL})},o.prototype.destroy=function(){this.hide(),this.hammer.destroy(),this.hammer=null,this.body=null},o.prototype.redraw=function(){var t=this.body.dom.backgroundVertical;this.bar.parentNode!=t&&(this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar),t.appendChild(this.bar));var e=this.body.util.toScreen(this.customTime),i=this.options.locales[this.options.locale];i||(this.warned||(console.log("WARNING: options.locales['"+this.options.locale+"'] not found. See http://visjs.org/docs/timeline/#Localization"),this.warned=!0),i=this.options.locales.en);var o=this.options.title;return void 0===o?(o=i.time+": "+this.options.moment(this.customTime).format("dddd, MMMM Do YYYY, H:mm:ss"),o=o.charAt(0).toUpperCase()+o.substring(1)):"function"==typeof o&&(o=o.call(this.customTime)),this.bar.style.left=e+"px",this.bar.title=o,!1},o.prototype.hide=function(){this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar)},o.prototype.setCustomTime=function(t){this.customTime=s.convert(t,"Date"),this.redraw()},o.prototype.getCustomTime=function(){return new Date(this.customTime.valueOf())},o.prototype.setCustomTitle=function(t){this.options.title=t},o.prototype._onDragStart=function(t){this.eventParams.dragging=!0,this.eventParams.customTime=this.customTime,t.stopPropagation()},o.prototype._onDrag=function(t){if(this.eventParams.dragging){var e=this.body.util.toScreen(this.eventParams.customTime)+t.deltaX,i=this.body.util.toTime(e);this.setCustomTime(i),this.body.emitter.emit("timechange",{id:this.options.id,time:new Date(this.customTime.valueOf()),event:t}),t.stopPropagation()}},o.prototype._onDragEnd=function(t){this.eventParams.dragging&&(this.body.emitter.emit("timechanged",{id:this.options.id,time:new Date(this.customTime.valueOf()),event:t}),t.stopPropagation())},o.customTimeFromTarget=function(t){for(var e=t.target;e;){if(e.hasOwnProperty("custom-time"))return e["custom-time"];e=e.parentNode}return null},t.exports=o},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(2),d=i(117).default,l=i(48).default,u=i(193).default,c=i(200).default,p=i(201).default,f=i(202).default,m=i(203).default,v=i(204).default,g=i(205).default,y=i(206).default,b=i(207).default,_=i(208).default,w=i(209).default,x=i(210).default,k=i(211).default,S=i(212).default,D=i(213).default,M=i(15),C=M.printStyle,O=function(){function t(e,i,o,n,r,a){(0,s.default)(this,t),this.options=h.bridgeObject(r),this.globalOptions=r,this.defaultOptions=a,this.body=i,this.edges=[],this.id=void 0,this.imagelist=o,this.grouplist=n,this.x=void 0,this.y=void 0,this.baseSize=this.options.size,this.baseFontSize=this.options.font.size,this.predefinedPosition=!1,this.selected=!1,this.hover=!1,this.labelModule=new d(this.body,this.options,!1),this.setOptions(e)}return(0,a.default)(t,[{key:"attachEdge",value:function(t){-1===this.edges.indexOf(t)&&this.edges.push(t)}},{key:"detachEdge",value:function(t){var e=this.edges.indexOf(t);-1!=e&&this.edges.splice(e,1)}},{key:"setOptions",value:function(e){var i=this.options.shape;if(e){if(void 0!==e.id&&(this.id=e.id),void 0===this.id)throw new Error("Node must have an id");t.checkMass(e,this.id),void 0!==e.x&&(null===e.x?(this.x=void 0,this.predefinedPosition=!1):(this.x=parseInt(e.x),this.predefinedPosition=!0)),void 0!==e.y&&(null===e.y?(this.y=void 0,this.predefinedPosition=!1):(this.y=parseInt(e.y),this.predefinedPosition=!0)),void 0!==e.size&&(this.baseSize=e.size),void 0!==e.value&&(e.value=parseFloat(e.value)),t.parseOptions(this.options,e,!0,this.globalOptions,this.grouplist);var o=[e,this.options,this.defaultOptions];return this.chooser=l.choosify("node",o),this._load_images(),this.updateLabelModule(e),this.updateShape(i),void 0!==e.hidden||void 0!==e.physics}}},{key:"_load_images",value:function(){if("circularImage"===this.options.shape||"image"===this.options.shape){if(void 0===this.options.image)throw new Error("Option image must be defined for node type '"+this.options.shape+"'");if(void 0===this.imagelist)throw new Error("Internal Error: No images provided");if("string"==typeof this.options.image)this.imageObj=this.imagelist.load(this.options.image,this.options.brokenImage,this.id);else{if(void 0===this.options.image.unselected)throw new Error("No unselected image provided");this.imageObj=this.imagelist.load(this.options.image.unselected,this.options.brokenImage,this.id),void 0!==this.options.image.selected?this.imageObjAlt=this.imagelist.load(this.options.image.selected,this.options.brokenImage,this.id):this.imageObjAlt=void 0}}}},{key:"getFormattingValues",value:function(){var t={color:this.options.color.background,borderWidth:this.options.borderWidth,borderColor:this.options.color.border,size:this.options.size,borderDashes:this.options.shapeProperties.borderDashes,borderRadius:this.options.shapeProperties.borderRadius,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y};return this.selected||this.hover?!0===this.chooser?this.selected?(t.borderWidth*=2,t.color=this.options.color.highlight.background,t.borderColor=this.options.color.highlight.border,t.shadow=this.options.shadow.enabled):this.hover&&(t.color=this.options.color.hover.background,t.borderColor=this.options.color.hover.border,t.shadow=this.options.shadow.enabled):"function"==typeof this.chooser&&(this.chooser(t,this.options.id,this.selected,this.hover),!1===t.shadow&&(t.shadowColor===this.options.shadow.color&&t.shadowSize===this.options.shadow.size&&t.shadowX===this.options.shadow.x&&t.shadowY===this.options.shadow.y||(t.shadow=!0))):t.shadow=this.options.shadow.enabled,t}},{key:"updateLabelModule",value:function(e){void 0!==this.options.label&&null!==this.options.label||(this.options.label=""),t.updateGroupOptions(this.options,e,this.grouplist);var i=this.grouplist.get(this.options.group,!1),o=[e,this.options,i,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,o),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateShape",value:function(t){if(t===this.options.shape&&this.shape)this.shape.setOptions(this.options,this.imageObj,this.imageObjAlt);else switch(this.options.shape){case"box":this.shape=new u(this.options,this.body,this.labelModule);break;case"circle":this.shape=new c(this.options,this.body,this.labelModule);break;case"circularImage":this.shape=new p(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"database":this.shape=new f(this.options,this.body,this.labelModule);break;case"diamond":this.shape=new m(this.options,this.body,this.labelModule);break;case"dot":this.shape=new v(this.options,this.body,this.labelModule);break;case"ellipse":this.shape=new g(this.options,this.body,this.labelModule);break;case"icon":this.shape=new y(this.options,this.body,this.labelModule);break;case"image":this.shape=new b(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"square":this.shape=new _(this.options,this.body,this.labelModule);break;case"hexagon":this.shape=new w(this.options,this.body,this.labelModule);break;case"star":this.shape=new x(this.options,this.body,this.labelModule);break;case"text":this.shape=new k(this.options,this.body,this.labelModule);break;case"triangle":this.shape=new S(this.options,this.body,this.labelModule);break;case"triangleDown":this.shape=new D(this.options,this.body,this.labelModule);break;default:this.shape=new g(this.options,this.body,this.labelModule)}this.needsRefresh()}},{key:"select",value:function(){this.selected=!0,this.needsRefresh()}},{key:"unselect",value:function(){this.selected=!1,this.needsRefresh()}},{key:"needsRefresh",value:function(){this.shape.refreshNeeded=!0}},{key:"getTitle",value:function(){return this.options.title}},{key:"distanceToBorder",value:function(t,e){return this.shape.distanceToBorder(t,e)}},{key:"isFixed",value:function(){return this.options.fixed.x&&this.options.fixed.y}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"getLabelSize",value:function(){return this.labelModule.size()}},{key:"setValueRange",value:function(t,e,i){if(void 0!==this.options.value){var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min;if(!0===this.options.scaling.label.enabled){var s=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+o*s}this.options.size=this.options.scaling.min+o*n}else this.options.size=this.baseSize,this.options.font.size=this.baseFontSize;this.updateLabelModule()}},{key:"draw",value:function(t){var e=this.getFormattingValues();this.shape.draw(t,this.x,this.y,this.selected,this.hover,e)}},{key:"updateBoundingBox",value:function(t){this.shape.updateBoundingBox(this.x,this.y,t)}},{key:"resize",value:function(t){var e=this.getFormattingValues();this.shape.resize(t,this.selected,this.hover,e)}},{key:"getItemsOnPoint",value:function(t){var e=[];return this.labelModule.visible()&&l.pointInRect(this.labelModule.getSize(),t)&&e.push({nodeId:this.id,labelId:0}),l.pointInRect(this.shape.boundingBox,t)&&e.push({nodeId:this.id}),e}},{key:"isOverlappingWith",value:function(t){return this.shape.left<t.right&&this.shape.left+this.shape.width>t.left&&this.shape.top<t.bottom&&this.shape.top+this.shape.height>t.top}},{key:"isBoundingBoxOverlappingWith",value:function(t){return this.shape.boundingBox.left<t.right&&this.shape.boundingBox.right>t.left&&this.shape.boundingBox.top<t.bottom&&this.shape.boundingBox.bottom>t.top}}],[{key:"updateGroupOptions",value:function(t,e,i){if(void 0!==i){var o=t.group;if(void 0!==e&&void 0!==e.group&&o!==e.group)throw new Error("updateGroupOptions: group values in options don't match.");if("number"==typeof o||"string"==typeof o&&""!=o){var n=i.get(o);h.selectiveNotDeepExtend(["font"],t,n),t.color=h.parseColor(t.color)}}}},{key:"parseOptions",value:function(e,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments[4],r=["color","fixed","shadow"];if(h.selectiveNotDeepExtend(r,e,i,o),t.checkMass(i),h.mergeOptions(e,i,"shadow",n),void 0!==i.color&&null!==i.color){var a=h.parseColor(i.color);h.fillIfDefined(e.color,a)}else!0===o&&null===i.color&&(e.color=h.bridgeObject(n.color));void 0!==i.fixed&&null!==i.fixed&&("boolean"==typeof i.fixed?(e.fixed.x=i.fixed,e.fixed.y=i.fixed):(void 0!==i.fixed.x&&"boolean"==typeof i.fixed.x&&(e.fixed.x=i.fixed.x),void 0!==i.fixed.y&&"boolean"==typeof i.fixed.y&&(e.fixed.y=i.fixed.y))),!0===o&&null===i.font&&(e.font=h.bridgeObject(n.font)),t.updateGroupOptions(e,i,s),void 0!==i.scaling&&h.mergeOptions(e.scaling,i.scaling,"label",n.scaling)}},{key:"checkMass",value:function(t,e){if(void 0!==t.mass&&t.mass<=0){var i="";void 0!==e&&(i=" in node id: "+e),console.log("%cNegative or zero mass disallowed"+i+", setting mass to 1.",C),t.mass=1}}}]),t}();e.default=O},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(6),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(2),u=function(){function t(){(0,a.default)(this,t)}return(0,d.default)(t,null,[{key:"choosify",value:function(t,e){var i=["node","edge","label"],o=!0,n=l.topMost(e,"chosen");if("boolean"==typeof n)o=n;else if("object"===(void 0===n?"undefined":(0,s.default)(n))){if(-1===i.indexOf(t))throw new Error("choosify: subOption '"+t+"' should be one of '"+i.join("', '")+"'");var r=l.topMost(e,["chosen",t]);"boolean"!=typeof r&&"function"!=typeof r||(o=r)}return o}},{key:"pointInRect",value:function(t,e,i){if(t.width<=0||t.height<=0)return!1;if(void 0!==i){var o={x:e.x-i.x,y:e.y-i.y};if(0!==i.angle){var n=-i.angle;e={x:Math.cos(n)*o.x-Math.sin(n)*o.y,y:Math.sin(n)*o.x+Math.cos(n)*o.y}}else e=o}var s=t.x+t.width,r=t.y+t.width;return t.left<e.x&&s>e.x&&t.top<e.y&&r>e.y}},{key:"isValidLabel",value:function(t){return"string"==typeof t&&""!==t}}]),t}();e.default=u},function(t,e,i){i(125);for(var o=i(18),n=i(26),s=i(31),r=i(13)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),h=0;h<a.length;h++){var d=a[h],l=o[d],u=l&&l.prototype;u&&!u[r]&&n(u,r,d),s[d]=s.Array}},function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!0},function(t,e,i){var o=i(32);t.exports=function(t,e){if(!o(t))return t;var i,n;if(e&&"function"==typeof(i=t.toString)&&!o(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!o(n=i.call(t)))return n;if(!e&&"function"==typeof(i=t.toString)&&!o(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},function(t,e,i){var o=i(27),n=i(130),s=i(58),r=i(56)("IE_PROTO"),a=function(){},h=function(){var t,e=i(82)("iframe"),o=s.length;for(e.style.display="none",i(134).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),h=t.F;o--;)delete h.prototype[s[o]];return h()};t.exports=Object.create||function(t,e){var i;return null!==t?(a.prototype=o(t),i=new a,a.prototype=null,i[r]=t):i=h(),void 0===e?i:n(i,e)}},function(t,e){var i=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:i)(t)}},function(t,e,i){var o=i(57)("keys"),n=i(40);t.exports=function(t){return o[t]||(o[t]=n(t))}},function(t,e,i){var o=i(18),n=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return n[t]||(n[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,i){var o=i(20).f,n=i(22),s=i(13)("toStringTag");t.exports=function(t,e,i){t&&!n(t=i?t:t.prototype,s)&&o(t,s,{configurable:!0,value:e})}},function(t,e,i){var o=i(135)(!0);i(79)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=o(e,i),this._i+=t.length,{value:t,done:!1})})},function(t,e,i){e.f=i(13)},function(t,e,i){var o=i(18),n=i(7),s=i(52),r=i(61),a=i(20).f;t.exports=function(t){var e=n.Symbol||(n.Symbol=s?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:r.f(t)})}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){var i=p().hours(0).minutes(0).seconds(0).milliseconds(0),o=i.clone().add(-3,"days").valueOf(),n=i.clone().add(3,"days").valueOf();this.millisecondsPerPixelCache=void 0,void 0===e?(this.start=o,this.end=n):(this.start=e.start||o,this.end=e.end||n),this.rolling=!1,this.body=t,this.deltaDifference=0,this.scaleOffset=0,this.startToFront=!1,this.endToFront=!0,this.defaultOptions={rtl:!1,start:null,end:null,moment:p,direction:"horizontal",moveable:!0,zoomable:!0,min:null,max:null,zoomMin:10,zoomMax:31536e10,rollingMode:{follow:!1,offset:.5}},this.options=c.extend({},this.defaultOptions),this.props={touch:{}},this.animationTimer=null,this.body.emitter.on("panstart",this._onDragStart.bind(this)),this.body.emitter.on("panmove",this._onDrag.bind(this)),this.body.emitter.on("panend",this._onDragEnd.bind(this)),this.body.emitter.on("mousewheel",this._onMouseWheel.bind(this)),this.body.emitter.on("touch",this._onTouch.bind(this)),this.body.emitter.on("pinch",this._onPinch.bind(this)),this.body.dom.rollingModeBtn.addEventListener("click",this.startRolling.bind(this)),this.setOptions(e)}function s(t){if("horizontal"!=t&&"vertical"!=t)throw new TypeError('Unknown direction "'+t+'". Choose "horizontal" or "vertical".')}var r=i(8),a=o(r),h=i(19),d=o(h),l=i(6),u=o(l),c=i(2),p=i(9),f=i(16),m=i(36);n.prototype=new f,n.prototype.setOptions=function(t){if(t){var e=["animation","direction","min","max","zoomMin","zoomMax","moveable","zoomable","moment","activate","hiddenDates","zoomKey","rtl","showCurrentTime","rollingMode","horizontalScroll"];c.selectiveExtend(e,this.options,t),t.rollingMode&&t.rollingMode.follow&&this.startRolling(),("start"in t||"end"in t)&&this.setRange(t.start,t.end)}},n.prototype.startRolling=function(){function t(){e.stopRolling(),e.rolling=!0;var i=e.end-e.start,o=c.convert(new Date,"Date").valueOf(),n=o-i*e.options.rollingMode.offset,s=o+i*(1-e.options.rollingMode.offset),r={animation:!1};e.setRange(n,s,r),i=1/e.conversion(e.body.domProps.center.width).scale/10,i<30&&(i=30),i>1e3&&(i=1e3),e.body.dom.rollingModeBtn.style.visibility="hidden",e.currentTimeTimer=setTimeout(t,i)}var e=this;t()},n.prototype.stopRolling=function(){void 0!==this.currentTimeTimer&&(clearTimeout(this.currentTimeTimer),this.rolling=!1,this.body.dom.rollingModeBtn.style.visibility="visible")},n.prototype.setRange=function(t,e,i,o,n){i||(i={}),!0!==i.byUser&&(i.byUser=!1);var s=this,r=void 0!=t?c.convert(t,"Date").valueOf():null,h=void 0!=e?c.convert(e,"Date").valueOf():null;if(this._cancelAnimation(),this.millisecondsPerPixelCache=void 0,i.animation){var l=this.start,p=this.end,f="object"===(0,u.default)(i.animation)&&"duration"in i.animation?i.animation.duration:500,v="object"===(0,u.default)(i.animation)&&"easingFunction"in i.animation?i.animation.easingFunction:"easeInOutQuad",g=c.easingFunctions[v];if(!g)throw new Error("Unknown easing function "+(0,d.default)(v)+". Choose from: "+(0,a.default)(c.easingFunctions).join(", "));var y=(new Date).valueOf(),b=!1;return function t(){if(!s.props.touch.dragging){var e=(new Date).valueOf(),a=e-y,d=g(a/f),u=a>f,c=u||null===r?r:l+(r-l)*d,v=u||null===h?h:p+(h-p)*d;_=s._applyRange(c,v),m.updateHiddenDates(s.options.moment,s.body,s.options.hiddenDates),b=b||_;var w={start:new Date(s.start),end:new Date(s.end),byUser:i.byUser,event:i.event};if(n&&n(d,_,u),_&&s.body.emitter.emit("rangechange",w),u){if(b&&(s.body.emitter.emit("rangechanged",w),o))return o()}else s.animationTimer=setTimeout(t,20)}}()}var _=this._applyRange(r,h);if(m.updateHiddenDates(this.options.moment,this.body,this.options.hiddenDates),_){var w={start:new Date(this.start),end:new Date(this.end),byUser:i.byUser,event:i.event};if(this.body.emitter.emit("rangechange",w),clearTimeout(s.timeoutID),s.timeoutID=setTimeout(function(){s.body.emitter.emit("rangechanged",w)},200),o)return o()}},n.prototype.getMillisecondsPerPixel=function(){return void 0===this.millisecondsPerPixelCache&&(this.millisecondsPerPixelCache=(this.end-this.start)/this.body.dom.center.clientWidth),this.millisecondsPerPixelCache},n.prototype._cancelAnimation=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.animationTimer=null)},n.prototype._applyRange=function(t,e){var i,o=null!=t?c.convert(t,"Date").valueOf():this.start,n=null!=e?c.convert(e,"Date").valueOf():this.end,s=null!=this.options.max?c.convert(this.options.max,"Date").valueOf():null,r=null!=this.options.min?c.convert(this.options.min,"Date").valueOf():null;if(isNaN(o)||null===o)throw new Error('Invalid start "'+t+'"');if(isNaN(n)||null===n)throw new Error('Invalid end "'+e+'"');if(n<o&&(n=o),null!==r&&o<r&&(i=r-o,o+=i,n+=i,null!=s&&n>s&&(n=s)),null!==s&&n>s&&(i=n-s,o-=i,n-=i,null!=r&&o<r&&(o=r)),null!==this.options.zoomMin){var a=parseFloat(this.options.zoomMin);if(a<0&&(a=0),n-o<a){this.end-this.start===a&&o>=this.start-.5&&n<=this.end?(o=this.start,n=this.end):(i=a-(n-o),o-=i/2,n+=i/2)}}if(null!==this.options.zoomMax){var h=parseFloat(this.options.zoomMax);h<0&&(h=0),n-o>h&&(this.end-this.start===h&&o<this.start&&n>this.end?(o=this.start,n=this.end):(i=n-o-h,o+=i/2,n-=i/2))}var d=this.start!=o||this.end!=n;return o>=this.start&&o<=this.end||n>=this.start&&n<=this.end||this.start>=o&&this.start<=n||this.end>=o&&this.end<=n||this.body.emitter.emit("checkRangedItems"),this.start=o,this.end=n,d},n.prototype.getRange=function(){return{start:this.start,end:this.end}},n.prototype.conversion=function(t,e){return n.conversion(this.start,this.end,t,e)},n.conversion=function(t,e,i,o){return void 0===o&&(o=0),0!=i&&e-t!=0?{offset:t,scale:i/(e-t-o)}:{offset:0,scale:1}},n.prototype._onDragStart=function(t){this.deltaDifference=0,this.previousDelta=0,this.options.moveable&&this._isInsideRange(t)&&this.props.touch.allowDragging&&(this.stopRolling(),this.props.touch.start=this.start,this.props.touch.end=this.end,this.props.touch.dragging=!0,this.body.dom.root&&(this.body.dom.root.style.cursor="move"))},n.prototype._onDrag=function(t){if(t&&this.props.touch.dragging&&this.options.moveable&&this.props.touch.allowDragging){var e=this.options.direction;s(e);var i="horizontal"==e?t.deltaX:t.deltaY;i-=this.deltaDifference;var o=this.props.touch.end-this.props.touch.start;o-=m.getHiddenDurationBetween(this.body.hiddenDates,this.start,this.end);var n,r="horizontal"==e?this.body.domProps.center.width:this.body.domProps.center.height;n=this.options.rtl?i/r*o:-i/r*o;var a=this.props.touch.start+n,h=this.props.touch.end+n,d=m.snapAwayFromHidden(this.body.hiddenDates,a,this.previousDelta-i,!0),l=m.snapAwayFromHidden(this.body.hiddenDates,h,this.previousDelta-i,!0);if(d!=a||l!=h)return this.deltaDifference+=i,this.props.touch.start=d,this.props.touch.end=l,void this._onDrag(t);this.previousDelta=i,this._applyRange(a,h);var u=new Date(this.start),c=new Date(this.end);this.body.emitter.emit("rangechange",{start:u,end:c,byUser:!0,event:t}),this.body.emitter.emit("panmove")}},n.prototype._onDragEnd=function(t){this.props.touch.dragging&&this.options.moveable&&this.props.touch.allowDragging&&(this.props.touch.dragging=!1,this.body.dom.root&&(this.body.dom.root.style.cursor="auto"),this.body.emitter.emit("rangechanged",{start:new Date(this.start),end:new Date(this.end),byUser:!0,event:t}))},n.prototype._onMouseWheel=function(t){var e=0;if(t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),!(this.options.zoomKey&&!t[this.options.zoomKey]&&this.options.zoomable||!this.options.zoomable&&this.options.moveable)&&this.options.zoomable&&this.options.moveable&&this._isInsideRange(t)&&e){var i;i=e<0?1-e/5:1/(1+e/5);var o;if(this.rolling)o=this.start+(this.end-this.start)*this.options.rollingMode.offset;else{var n=this.getPointer({x:t.clientX,y:t.clientY},this.body.dom.center);o=this._pointerToDate(n)}this.zoom(i,o,e,t),t.preventDefault()}},n.prototype._onTouch=function(t){this.props.touch.start=this.start,this.props.touch.end=this.end,this.props.touch.allowDragging=!0,this.props.touch.center=null,this.scaleOffset=0,this.deltaDifference=0,c.preventDefault(t)},n.prototype._onPinch=function(t){if(this.options.zoomable&&this.options.moveable){c.preventDefault(t),this.props.touch.allowDragging=!1,this.props.touch.center||(this.props.touch.center=this.getPointer(t.center,this.body.dom.center)),this.stopRolling();var e=1/(t.scale+this.scaleOffset),i=this._pointerToDate(this.props.touch.center),o=m.getHiddenDurationBetween(this.body.hiddenDates,this.start,this.end),n=m.getHiddenDurationBefore(this.options.moment,this.body.hiddenDates,this,i),s=o-n,r=i-n+(this.props.touch.start-(i-n))*e,a=i+s+(this.props.touch.end-(i+s))*e;this.startToFront=1-e<=0,this.endToFront=e-1<=0;var h=m.snapAwayFromHidden(this.body.hiddenDates,r,1-e,!0),d=m.snapAwayFromHidden(this.body.hiddenDates,a,e-1,!0);h==r&&d==a||(this.props.touch.start=h,this.props.touch.end=d,this.scaleOffset=1-t.scale,r=h,a=d);var l={animation:!1,byUser:!0,event:t};this.setRange(r,a,l),this.startToFront=!1,this.endToFront=!0}},n.prototype._isInsideRange=function(t){var e,i=t.center?t.center.x:t.clientX;e=this.options.rtl?i-c.getAbsoluteLeft(this.body.dom.centerContainer):c.getAbsoluteRight(this.body.dom.centerContainer)-i;var o=this.body.util.toTime(e);return o>=this.start&&o<=this.end},n.prototype._pointerToDate=function(t){var e,i=this.options.direction;if(s(i),"horizontal"==i)return this.body.util.toTime(t.x).valueOf();var o=this.body.domProps.center.height;return e=this.conversion(o),t.y/e.scale+e.offset},n.prototype.getPointer=function(t,e){return this.options.rtl?{x:c.getAbsoluteRight(e)-t.x,y:t.y-c.getAbsoluteTop(e)}:{x:t.x-c.getAbsoluteLeft(e),y:t.y-c.getAbsoluteTop(e)}},n.prototype.zoom=function(t,e,i,o){null==e&&(e=(this.start+this.end)/2);var n=m.getHiddenDurationBetween(this.body.hiddenDates,this.start,this.end),s=m.getHiddenDurationBefore(this.options.moment,this.body.hiddenDates,this,e),r=n-s,a=e-s+(this.start-(e-s))*t,h=e+r+(this.end-(e+r))*t;this.startToFront=!(i>0),this.endToFront=!(-i>0)
;var d=m.snapAwayFromHidden(this.body.hiddenDates,a,i,!0),l=m.snapAwayFromHidden(this.body.hiddenDates,h,-i,!0);d==a&&l==h||(a=d,h=l);var u={animation:!1,byUser:!0,event:o};this.setRange(a,h,u),this.startToFront=!1,this.endToFront=!0},n.prototype.move=function(t){var e=this.end-this.start,i=this.start+e*t,o=this.end+e*t;this.start=i,this.end=o},n.prototype.moveTo=function(t){var e=(this.start+this.end)/2,i=e-t,o=this.start-i,n=this.end-i,s={animation:!1,byUser:!0,event:null};this.setRange(o,n,s)},t.exports=n},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(){}var s=i(19),r=o(s),a=i(6),h=o(a),d=i(44),l=i(10),u=i(37),c=i(2),p=i(45),f=i(97),m=i(36),v=i(46);d(n.prototype),n.prototype._create=function(t){function e(t){this.isActive()&&this.emit("mousewheel",t);var e=0,i=0;if("detail"in t&&(i=-1*t.detail),"wheelDelta"in t&&(i=t.wheelDelta),"wheelDeltaY"in t&&(i=t.wheelDeltaY),"wheelDeltaX"in t&&(e=-1*t.wheelDeltaX),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=-1*i,i=0),"deltaY"in t&&(i=-1*t.deltaY),"deltaX"in t&&(e=t.deltaX),this.options.zoomKey&&!t[this.options.zoomKey])if(t.preventDefault(),this.options.verticalScroll&&Math.abs(i)>=Math.abs(e)){var o=this.props.scrollTop,n=o+i;this.isActive()&&(this._setScrollTop(n),this._redraw(),this.emit("scroll",t))}else if(this.options.horizontalScroll){var s=Math.abs(e)>=Math.abs(i)?e:i,r=s/120*(this.range.end-this.range.start)/20,a=this.range.start+r,h=this.range.end+r,d={animation:!1,byUser:!0,event:t};this.range.setRange(a,h,d)}}function i(t){if(s.options.verticalScroll&&(t.preventDefault(),s.isActive())){var e=-t.target.scrollTop;s._setScrollTop(e),s._redraw(),s.emit("scrollSide",t)}}function o(t){if(t.preventDefault&&t.preventDefault(),!(!t.target.className.indexOf("vis")>-1||a))return t.dataTransfer.dropEffect="move",a=!0,!1}function n(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation();try{var e=JSON.parse(t.dataTransfer.getData("text"));if(!e||!e.content)return}catch(t){return!1}return a=!1,t.center={x:t.clientX,y:t.clientY},"item"!==e.target?s.itemSet._onAddItem(t):s.itemSet._onDropObjectOnItem(t),s.emit("drop",s.getEventProperties(t)),!1}this.dom={},this.dom.container=t,this.dom.root=document.createElement("div"),this.dom.background=document.createElement("div"),this.dom.backgroundVertical=document.createElement("div"),this.dom.backgroundHorizontal=document.createElement("div"),this.dom.centerContainer=document.createElement("div"),this.dom.leftContainer=document.createElement("div"),this.dom.rightContainer=document.createElement("div"),this.dom.center=document.createElement("div"),this.dom.left=document.createElement("div"),this.dom.right=document.createElement("div"),this.dom.top=document.createElement("div"),this.dom.bottom=document.createElement("div"),this.dom.shadowTop=document.createElement("div"),this.dom.shadowBottom=document.createElement("div"),this.dom.shadowTopLeft=document.createElement("div"),this.dom.shadowBottomLeft=document.createElement("div"),this.dom.shadowTopRight=document.createElement("div"),this.dom.shadowBottomRight=document.createElement("div"),this.dom.rollingModeBtn=document.createElement("div"),this.dom.root.className="vis-timeline",this.dom.background.className="vis-panel vis-background",this.dom.backgroundVertical.className="vis-panel vis-background vis-vertical",this.dom.backgroundHorizontal.className="vis-panel vis-background vis-horizontal",this.dom.centerContainer.className="vis-panel vis-center",this.dom.leftContainer.className="vis-panel vis-left",this.dom.rightContainer.className="vis-panel vis-right",this.dom.top.className="vis-panel vis-top",this.dom.bottom.className="vis-panel vis-bottom",this.dom.left.className="vis-content",this.dom.center.className="vis-content",this.dom.right.className="vis-content",this.dom.shadowTop.className="vis-shadow vis-top",this.dom.shadowBottom.className="vis-shadow vis-bottom",this.dom.shadowTopLeft.className="vis-shadow vis-top",this.dom.shadowBottomLeft.className="vis-shadow vis-bottom",this.dom.shadowTopRight.className="vis-shadow vis-top",this.dom.shadowBottomRight.className="vis-shadow vis-bottom",this.dom.rollingModeBtn.className="vis-rolling-mode-btn",this.dom.root.appendChild(this.dom.background),this.dom.root.appendChild(this.dom.backgroundVertical),this.dom.root.appendChild(this.dom.backgroundHorizontal),this.dom.root.appendChild(this.dom.centerContainer),this.dom.root.appendChild(this.dom.leftContainer),this.dom.root.appendChild(this.dom.rightContainer),this.dom.root.appendChild(this.dom.top),this.dom.root.appendChild(this.dom.bottom),this.dom.root.appendChild(this.dom.bottom),this.dom.root.appendChild(this.dom.rollingModeBtn),this.dom.centerContainer.appendChild(this.dom.center),this.dom.leftContainer.appendChild(this.dom.left),this.dom.rightContainer.appendChild(this.dom.right),this.dom.centerContainer.appendChild(this.dom.shadowTop),this.dom.centerContainer.appendChild(this.dom.shadowBottom),this.dom.leftContainer.appendChild(this.dom.shadowTopLeft),this.dom.leftContainer.appendChild(this.dom.shadowBottomLeft),this.dom.rightContainer.appendChild(this.dom.shadowTopRight),this.dom.rightContainer.appendChild(this.dom.shadowBottomRight),this.props={root:{},background:{},centerContainer:{},leftContainer:{},rightContainer:{},center:{},left:{},right:{},top:{},bottom:{},border:{},scrollTop:0,scrollTopMin:0},this.on("rangechange",function(){!0===this.initialDrawDone&&this._redraw()}.bind(this)),this.on("rangechanged",function(){this.initialRangeChangeDone||(this.initialRangeChangeDone=!0)}.bind(this)),this.on("touch",this._onTouch.bind(this)),this.on("panmove",this._onDrag.bind(this));var s=this;this._origRedraw=this._redraw.bind(this),this._redraw=c.throttle(this._origRedraw),this.on("_change",function(t){s.itemSet&&s.itemSet.initialItemSetDrawn&&t&&1==t.queue?s._redraw():s._origRedraw()}),this.hammer=new l(this.dom.root);var r=this.hammer.get("pinch").set({enable:!0});u.disablePreventDefaultVertically(r),this.hammer.get("pan").set({threshold:5,direction:l.DIRECTION_HORIZONTAL}),this.listeners={},["tap","doubletap","press","pinch","pan","panstart","panmove","panend"].forEach(function(t){var e=function(e){s.isActive()&&s.emit(t,e)};s.hammer.on(t,e),s.listeners[t]=e}),u.onTouch(this.hammer,function(t){s.emit("touch",t)}.bind(this)),u.onRelease(this.hammer,function(t){s.emit("release",t)}.bind(this)),this.dom.centerContainer.addEventListener?(this.dom.centerContainer.addEventListener("mousewheel",e.bind(this),!1),this.dom.centerContainer.addEventListener("DOMMouseScroll",e.bind(this),!1)):this.dom.centerContainer.attachEvent("onmousewheel",e.bind(this)),this.dom.left.parentNode.addEventListener("scroll",i.bind(this)),this.dom.right.parentNode.addEventListener("scroll",i.bind(this));var a=!1;if(this.dom.center.addEventListener("dragover",o.bind(this),!1),this.dom.center.addEventListener("drop",n.bind(this),!1),this.customTimes=[],this.touch={},this.redrawCount=0,this.initialDrawDone=!1,this.initialRangeChangeDone=!1,!t)throw new Error("No container provided");t.appendChild(this.dom.root)},n.prototype.setOptions=function(t){if(t){var e=["width","height","minHeight","maxHeight","autoResize","start","end","clickToUse","dataAttributes","hiddenDates","locale","locales","moment","rtl","zoomKey","horizontalScroll","verticalScroll"];if(c.selectiveExtend(e,this.options,t),this.dom.rollingModeBtn.style.visibility="hidden",this.options.rtl&&(this.dom.container.style.direction="rtl",this.dom.backgroundVertical.className="vis-panel vis-background vis-vertical-rtl"),this.options.verticalScroll&&(this.options.rtl?this.dom.rightContainer.className="vis-panel vis-right vis-vertical-scroll":this.dom.leftContainer.className="vis-panel vis-left vis-vertical-scroll"),"object"!==(0,h.default)(this.options.orientation)&&(this.options.orientation={item:void 0,axis:void 0}),"orientation"in t&&("string"==typeof t.orientation?this.options.orientation={item:t.orientation,axis:t.orientation}:"object"===(0,h.default)(t.orientation)&&("item"in t.orientation&&(this.options.orientation.item=t.orientation.item),"axis"in t.orientation&&(this.options.orientation.axis=t.orientation.axis))),"both"===this.options.orientation.axis){if(!this.timeAxis2){var i=this.timeAxis2=new p(this.body);i.setOptions=function(t){var e=t?c.extend({},t):{};e.orientation="top",p.prototype.setOptions.call(i,e)},this.components.push(i)}}else if(this.timeAxis2){var o=this.components.indexOf(this.timeAxis2);-1!==o&&this.components.splice(o,1),this.timeAxis2.destroy(),this.timeAxis2=null}if("function"==typeof t.drawPoints&&(t.drawPoints={onRender:t.drawPoints}),"hiddenDates"in this.options&&m.convertHiddenOptions(this.options.moment,this.body,this.options.hiddenDates),"clickToUse"in t&&(t.clickToUse?this.activator||(this.activator=new f(this.dom.root)):this.activator&&(this.activator.destroy(),delete this.activator)),"showCustomTime"in t)throw new Error("Option `showCustomTime` is deprecated. Create a custom time bar via timeline.addCustomTime(time [, id])");this._initAutoResize()}if(this.components.forEach(function(e){return e.setOptions(t)}),"configure"in t){this.configurator||(this.configurator=this._createConfigurator()),this.configurator.setOptions(t.configure);var n=c.deepExtend({},this.options);this.components.forEach(function(t){c.deepExtend(n,t.options)}),this.configurator.setModuleOptions({global:n})}this._redraw()},n.prototype.isActive=function(){return!this.activator||this.activator.active},n.prototype.destroy=function(){this.setItems(null),this.setGroups(null),this.off(),this._stopAutoResize(),this.dom.root.parentNode&&this.dom.root.parentNode.removeChild(this.dom.root),this.dom=null,this.activator&&(this.activator.destroy(),delete this.activator);for(var t in this.listeners)this.listeners.hasOwnProperty(t)&&delete this.listeners[t];this.listeners=null,this.hammer=null,this.components.forEach(function(t){return t.destroy()}),this.body=null},n.prototype.setCustomTime=function(t,e){var i=this.customTimes.filter(function(t){return e===t.options.id});if(0===i.length)throw new Error("No custom time bar found with id "+(0,r.default)(e));i.length>0&&i[0].setCustomTime(t)},n.prototype.getCustomTime=function(t){var e=this.customTimes.filter(function(e){return e.options.id===t});if(0===e.length)throw new Error("No custom time bar found with id "+(0,r.default)(t));return e[0].getCustomTime()},n.prototype.setCustomTimeTitle=function(t,e){var i=this.customTimes.filter(function(t){return t.options.id===e});if(0===i.length)throw new Error("No custom time bar found with id "+(0,r.default)(e));if(i.length>0)return i[0].setCustomTitle(t)},n.prototype.getEventProperties=function(t){return{event:t}},n.prototype.addCustomTime=function(t,e){var i=void 0!==t?c.convert(t,"Date").valueOf():new Date;if(this.customTimes.some(function(t){return t.options.id===e}))throw new Error("A custom time with id "+(0,r.default)(e)+" already exists");var o=new v(this.body,c.extend({},this.options,{time:i,id:e}));return this.customTimes.push(o),this.components.push(o),this._redraw(),e},n.prototype.removeCustomTime=function(t){var e=this.customTimes.filter(function(e){return e.options.id===t});if(0===e.length)throw new Error("No custom time bar found with id "+(0,r.default)(t));e.forEach(function(t){this.customTimes.splice(this.customTimes.indexOf(t),1),this.components.splice(this.components.indexOf(t),1),t.destroy()}.bind(this))},n.prototype.getVisibleItems=function(){return this.itemSet&&this.itemSet.getVisibleItems()||[]},n.prototype.fit=function(t,e){var i=this.getDataRange();if(null!==i.min||null!==i.max){var o=i.max-i.min,n=new Date(i.min.valueOf()-.01*o),s=new Date(i.max.valueOf()+.01*o),r=!t||void 0===t.animation||t.animation;this.range.setRange(n,s,{animation:r},e)}},n.prototype.getDataRange=function(){throw new Error("Cannot invoke abstract method getDataRange")},n.prototype.setWindow=function(t,e,i,o){"function"==typeof arguments[2]&&(o=arguments[2],i={});var n,s;1==arguments.length?(s=arguments[0],n=void 0===s.animation||s.animation,this.range.setRange(s.start,s.end,{animation:n})):2==arguments.length&&"function"==typeof arguments[1]?(s=arguments[0],o=arguments[1],n=void 0===s.animation||s.animation,this.range.setRange(s.start,s.end,{animation:n},o)):(n=!i||void 0===i.animation||i.animation,this.range.setRange(t,e,{animation:n},o))},n.prototype.moveTo=function(t,e,i){"function"==typeof arguments[1]&&(i=arguments[1],e={});var o=this.range.end-this.range.start,n=c.convert(t,"Date").valueOf(),s=n-o/2,r=n+o/2,a=!e||void 0===e.animation||e.animation;this.range.setRange(s,r,{animation:a},i)},n.prototype.getWindow=function(){var t=this.range.getRange();return{start:new Date(t.start),end:new Date(t.end)}},n.prototype.zoomIn=function(t,e,i){if(!(!t||t<0||t>1)){"function"==typeof arguments[1]&&(i=arguments[1],e={});var o=this.getWindow(),n=o.start.valueOf(),s=o.end.valueOf(),r=s-n,a=r/(1+t),h=(r-a)/2,d=n+h,l=s-h;this.setWindow(d,l,e,i)}},n.prototype.zoomOut=function(t,e,i){if(!(!t||t<0||t>1)){"function"==typeof arguments[1]&&(i=arguments[1],e={});var o=this.getWindow(),n=o.start.valueOf(),s=o.end.valueOf(),r=s-n,a=n-r*t/2,h=s+r*t/2;this.setWindow(a,h,e,i)}},n.prototype.redraw=function(){this._redraw()},n.prototype._redraw=function(){this.redrawCount++;var t=!1,e=this.options,i=this.props,o=this.dom;if(o&&o.container&&0!=o.root.offsetWidth){m.updateHiddenDates(this.options.moment,this.body,this.options.hiddenDates),"top"==e.orientation?(c.addClassName(o.root,"vis-top"),c.removeClassName(o.root,"vis-bottom")):(c.removeClassName(o.root,"vis-top"),c.addClassName(o.root,"vis-bottom")),o.root.style.maxHeight=c.option.asSize(e.maxHeight,""),o.root.style.minHeight=c.option.asSize(e.minHeight,""),o.root.style.width=c.option.asSize(e.width,""),i.border.left=(o.centerContainer.offsetWidth-o.centerContainer.clientWidth)/2,i.border.right=i.border.left,i.border.top=(o.centerContainer.offsetHeight-o.centerContainer.clientHeight)/2,i.border.bottom=i.border.top,i.borderRootHeight=o.root.offsetHeight-o.root.clientHeight,i.borderRootWidth=o.root.offsetWidth-o.root.clientWidth,0===o.centerContainer.clientHeight&&(i.border.left=i.border.top,i.border.right=i.border.left),0===o.root.clientHeight&&(i.borderRootWidth=i.borderRootHeight),i.center.height=o.center.offsetHeight,i.left.height=o.left.offsetHeight,i.right.height=o.right.offsetHeight,i.top.height=o.top.clientHeight||-i.border.top,i.bottom.height=o.bottom.clientHeight||-i.border.bottom;var n=Math.max(i.left.height,i.center.height,i.right.height),s=i.top.height+n+i.bottom.height+i.borderRootHeight+i.border.top+i.border.bottom;o.root.style.height=c.option.asSize(e.height,s+"px"),i.root.height=o.root.offsetHeight,i.background.height=i.root.height-i.borderRootHeight;var r=i.root.height-i.top.height-i.bottom.height-i.borderRootHeight;i.centerContainer.height=r,i.leftContainer.height=r,i.rightContainer.height=i.leftContainer.height,i.root.width=o.root.offsetWidth,i.background.width=i.root.width-i.borderRootWidth,this.initialDrawDone||(i.scrollbarWidth=c.getScrollBarWidth()),e.verticalScroll?e.rtl?(i.left.width=o.leftContainer.clientWidth||-i.border.left,i.right.width=o.rightContainer.clientWidth+i.scrollbarWidth||-i.border.right):(i.left.width=o.leftContainer.clientWidth+i.scrollbarWidth||-i.border.left,i.right.width=o.rightContainer.clientWidth||-i.border.right):(i.left.width=o.leftContainer.clientWidth||-i.border.left,i.right.width=o.rightContainer.clientWidth||-i.border.right),this._setDOM();var a=this._updateScrollTop();"top"!=e.orientation.item&&(a+=Math.max(i.centerContainer.height-i.center.height-i.border.top-i.border.bottom,0)),o.center.style.top=a+"px";var h=0==i.scrollTop?"hidden":"",d=i.scrollTop==i.scrollTopMin?"hidden":"";o.shadowTop.style.visibility=h,o.shadowBottom.style.visibility=d,o.shadowTopLeft.style.visibility=h,o.shadowBottomLeft.style.visibility=d,o.shadowTopRight.style.visibility=h,o.shadowBottomRight.style.visibility=d,e.verticalScroll&&(o.rightContainer.className="vis-panel vis-right vis-vertical-scroll",o.leftContainer.className="vis-panel vis-left vis-vertical-scroll",o.shadowTopRight.style.visibility="hidden",o.shadowBottomRight.style.visibility="hidden",o.shadowTopLeft.style.visibility="hidden",o.shadowBottomLeft.style.visibility="hidden",o.left.style.top="0px",o.right.style.top="0px"),(!e.verticalScroll||i.center.height<i.centerContainer.height)&&(o.left.style.top=a+"px",o.right.style.top=a+"px",o.rightContainer.className=o.rightContainer.className.replace(new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)")," "),o.leftContainer.className=o.leftContainer.className.replace(new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)")," "),i.left.width=o.leftContainer.clientWidth||-i.border.left,i.right.width=o.rightContainer.clientWidth||-i.border.right,this._setDOM());var u=i.center.height>i.centerContainer.height;this.hammer.get("pan").set({direction:u?l.DIRECTION_ALL:l.DIRECTION_HORIZONTAL}),this.components.forEach(function(e){t=e.redraw()||t});if(t){if(this.redrawCount<5)return void this.body.emitter.emit("_change");console.log("WARNING: infinite loop in redraw?")}else this.redrawCount=0;this.body.emitter.emit("changed")}},n.prototype._setDOM=function(){var t=this.props,e=this.dom;t.leftContainer.width=t.left.width,t.rightContainer.width=t.right.width;var i=t.root.width-t.left.width-t.right.width-t.borderRootWidth;t.center.width=i,t.centerContainer.width=i,t.top.width=i,t.bottom.width=i,e.background.style.height=t.background.height+"px",e.backgroundVertical.style.height=t.background.height+"px",e.backgroundHorizontal.style.height=t.centerContainer.height+"px",e.centerContainer.style.height=t.centerContainer.height+"px",e.leftContainer.style.height=t.leftContainer.height+"px",e.rightContainer.style.height=t.rightContainer.height+"px",e.background.style.width=t.background.width+"px",e.backgroundVertical.style.width=t.centerContainer.width+"px",e.backgroundHorizontal.style.width=t.background.width+"px",e.centerContainer.style.width=t.center.width+"px",e.top.style.width=t.top.width+"px",e.bottom.style.width=t.bottom.width+"px",e.background.style.left="0",e.background.style.top="0",e.backgroundVertical.style.left=t.left.width+t.border.left+"px",e.backgroundVertical.style.top="0",e.backgroundHorizontal.style.left="0",e.backgroundHorizontal.style.top=t.top.height+"px",e.centerContainer.style.left=t.left.width+"px",e.centerContainer.style.top=t.top.height+"px",e.leftContainer.style.left="0",e.leftContainer.style.top=t.top.height+"px",e.rightContainer.style.left=t.left.width+t.center.width+"px",e.rightContainer.style.top=t.top.height+"px",e.top.style.left=t.left.width+"px",e.top.style.top="0",e.bottom.style.left=t.left.width+"px",e.bottom.style.top=t.top.height+t.centerContainer.height+"px",e.center.style.left="0",e.left.style.left="0",e.right.style.left="0"},n.prototype.repaint=function(){throw new Error("Function repaint is deprecated. Use redraw instead.")},n.prototype.setCurrentTime=function(t){if(!this.currentTime)throw new Error("Option showCurrentTime must be true");this.currentTime.setCurrentTime(t)},n.prototype.getCurrentTime=function(){if(!this.currentTime)throw new Error("Option showCurrentTime must be true");return this.currentTime.getCurrentTime()},n.prototype._toTime=function(t){return m.toTime(this,t,this.props.center.width)},n.prototype._toGlobalTime=function(t){return m.toTime(this,t,this.props.root.width)},n.prototype._toScreen=function(t){return m.toScreen(this,t,this.props.center.width)},n.prototype._toGlobalScreen=function(t){return m.toScreen(this,t,this.props.root.width)},n.prototype._initAutoResize=function(){1==this.options.autoResize?this._startAutoResize():this._stopAutoResize()},n.prototype._startAutoResize=function(){var t=this;this._stopAutoResize(),this._onResize=function(){if(1!=t.options.autoResize)return void t._stopAutoResize();t.dom.root&&(t.dom.root.offsetWidth==t.props.lastWidth&&t.dom.root.offsetHeight==t.props.lastHeight||(t.props.lastWidth=t.dom.root.offsetWidth,t.props.lastHeight=t.dom.root.offsetHeight,t.props.scrollbarWidth=c.getScrollBarWidth(),t.body.emitter.emit("_change")))},c.addEventListener(window,"resize",this._onResize),t.dom.root&&(t.props.lastWidth=t.dom.root.offsetWidth,t.props.lastHeight=t.dom.root.offsetHeight),this.watchTimer=setInterval(this._onResize,1e3)},n.prototype._stopAutoResize=function(){this.watchTimer&&(clearInterval(this.watchTimer),this.watchTimer=void 0),this._onResize&&(c.removeEventListener(window,"resize",this._onResize),this._onResize=null)},n.prototype._onTouch=function(t){this.touch.allowDragging=!0,this.touch.initialScrollTop=this.props.scrollTop},n.prototype._onPinch=function(t){this.touch.allowDragging=!1},n.prototype._onDrag=function(t){if(t&&this.touch.allowDragging){var e=t.deltaY,i=this._getScrollTop(),o=this._setScrollTop(this.touch.initialScrollTop+e);this.options.verticalScroll&&(this.dom.left.parentNode.scrollTop=-this.props.scrollTop,this.dom.right.parentNode.scrollTop=-this.props.scrollTop),o!=i&&this.emit("verticalDrag")}},n.prototype._setScrollTop=function(t){return this.props.scrollTop=t,this._updateScrollTop(),this.props.scrollTop},n.prototype._updateScrollTop=function(){var t=Math.min(this.props.centerContainer.height-this.props.center.height,0);return t!=this.props.scrollTopMin&&("top"!=this.options.orientation.item&&(this.props.scrollTop+=t-this.props.scrollTopMin),this.props.scrollTopMin=t),this.props.scrollTop>0&&(this.props.scrollTop=0),this.props.scrollTop<t&&(this.props.scrollTop=t),this.options.verticalScroll&&(this.dom.left.parentNode.scrollTop=-this.props.scrollTop,this.dom.right.parentNode.scrollTop=-this.props.scrollTop),this.props.scrollTop},n.prototype._getScrollTop=function(){return this.props.scrollTop},n.prototype._createConfigurator=function(){throw new Error("Cannot invoke abstract method _createConfigurator")},t.exports=n},function(t,e,i){function o(t,e,i,s,r){this.moment=n,this.current=this.moment(),this._start=this.moment(),this._end=this.moment(),this.autoScale=!0,this.scale="day",this.step=1,this.setRange(t,e,i),this.switchedDay=!1,this.switchedMonth=!1,this.switchedYear=!1,Array.isArray(s)?this.hiddenDates=s:this.hiddenDates=void 0!=s?[s]:[],this.format=o.FORMAT,this.options=r||{}}var n=i(9),s=i(36),r=i(2);o.FORMAT={minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"D",week:"w",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMMM YYYY",day:"MMMM YYYY",week:"MMMM YYYY",month:"YYYY",year:""}},o.prototype.setMoment=function(t){this.moment=t,this.current=this.moment(this.current.valueOf()),this._start=this.moment(this._start.valueOf()),this._end=this.moment(this._end.valueOf())},o.prototype.setFormat=function(t){var e=r.deepExtend({},o.FORMAT);this.format=r.deepExtend(e,t)},o.prototype.setRange=function(t,e,i){if(!(t instanceof Date&&e instanceof Date))throw"No legal start or end date in method setRange";this._start=void 0!=t?this.moment(t.valueOf()):new Date,this._end=void 0!=e?this.moment(e.valueOf()):new Date,this.autoScale&&this.setMinimumStep(i)},o.prototype.start=function(){this.current=this._start.clone(),this.roundToMinor()},o.prototype.roundToMinor=function(){switch("week"==this.scale&&this.current.weekday(0),this.scale){case"year":this.current.year(this.step*Math.floor(this.current.year()/this.step)),this.current.month(0);case"month":this.current.date(1);case"week":case"day":case"weekday":this.current.hours(0);case"hour":this.current.minutes(0);case"minute":this.current.seconds(0);case"second":this.current.milliseconds(0)}if(1!=this.step)switch(this.scale){case"millisecond":this.current.subtract(this.current.milliseconds()%this.step,"milliseconds");break;case"second":this.current.subtract(this.current.seconds()%this.step,"seconds");break;case"minute":this.current.subtract(this.current.minutes()%this.step,"minutes");break;case"hour":this.current.subtract(this.current.hours()%this.step,"hours");break;case"weekday":case"day":this.current.subtract((this.current.date()-1)%this.step,"day");break;case"week":this.current.subtract(this.current.week()%this.step,"week");break;case"month":this.current.subtract(this.current.month()%this.step,"month");break;case"year":this.current.subtract(this.current.year()%this.step,"year")}},o.prototype.hasNext=function(){return this.current.valueOf()<=this._end.valueOf()},o.prototype.next=function(){var t=this.current.valueOf();switch(this.scale){case"millisecond":this.current.add(this.step,"millisecond");break;case"second":this.current.add(this.step,"second");break;case"minute":this.current.add(this.step,"minute");break;case"hour":this.current.add(this.step,"hour"),this.current.month()<6?this.current.subtract(this.current.hours()%this.step,"hour"):this.current.hours()%this.step!=0&&this.current.add(this.step-this.current.hours()%this.step,"hour");break;case"weekday":case"day":this.current.add(this.step,"day");break;case"week":if(0!==this.current.weekday())this.current.weekday(0),this.current.add(this.step,"week");else if(!1===this.options.showMajorLabels)this.current.add(this.step,"week");else{var e=this.current.clone();e.add(1,"week"),e.isSame(this.current,"month")?this.current.add(this.step,"week"):(this.current.add(this.step,"week"),this.current.date(1))}break;case"month":this.current.add(this.step,"month");break;case"year":this.current.add(this.step,"year")}if(1!=this.step)switch(this.scale){case"millisecond":this.current.milliseconds()>0&&this.current.milliseconds()<this.step&&this.current.milliseconds(0);break;case"second":this.current.seconds()>0&&this.current.seconds()<this.step&&this.current.seconds(0);break;case"minute":this.current.minutes()>0&&this.current.minutes()<this.step&&this.current.minutes(0);break;case"hour":this.current.hours()>0&&this.current.hours()<this.step&&this.current.hours(0);break;case"weekday":case"day":this.current.date()<this.step+1&&this.current.date(1);break;case"week":this.current.week()<this.step&&this.current.week(1);break;case"month":this.current.month()<this.step&&this.current.month(0)}this.current.valueOf()==t&&(this.current=this._end.clone()),this.switchedDay=!1,this.switchedMonth=!1,this.switchedYear=!1,s.stepOverHiddenDates(this.moment,this,t)},o.prototype.getCurrent=function(){return this.current},o.prototype.setScale=function(t){t&&"string"==typeof t.scale&&(this.scale=t.scale,this.step=t.step>0?t.step:1,this.autoScale=!1)},o.prototype.setAutoScale=function(t){this.autoScale=t},o.prototype.setMinimumStep=function(t){if(void 0!=t){31104e9>t&&(this.scale="year",this.step=1e3),15552e9>t&&(this.scale="year",this.step=500),31104e8>t&&(this.scale="year",this.step=100),15552e8>t&&(this.scale="year",this.step=50),31104e7>t&&(this.scale="year",this.step=10),15552e7>t&&(this.scale="year",this.step=5),31104e6>t&&(this.scale="year",this.step=1),7776e6>t&&(this.scale="month",this.step=3),2592e6>t&&(this.scale="month",this.step=1),432e6>t&&(this.scale="day",this.step=5),1728e5>t&&(this.scale="day",this.step=2),864e5>t&&(this.scale="day",this.step=1),432e5>t&&(this.scale="weekday",this.step=1),144e5>t&&(this.scale="hour",this.step=4),36e5>t&&(this.scale="hour",this.step=1),9e5>t&&(this.scale="minute",this.step=15),6e5>t&&(this.scale="minute",this.step=10),3e5>t&&(this.scale="minute",this.step=5),6e4>t&&(this.scale="minute",this.step=1),15e3>t&&(this.scale="second",this.step=15),1e4>t&&(this.scale="second",this.step=10),5e3>t&&(this.scale="second",this.step=5),1e3>t&&(this.scale="second",this.step=1),200>t&&(this.scale="millisecond",this.step=200),100>t&&(this.scale="millisecond",this.step=100),50>t&&(this.scale="millisecond",this.step=50),10>t&&(this.scale="millisecond",this.step=10),5>t&&(this.scale="millisecond",this.step=5),1>t&&(this.scale="millisecond",this.step=1)}},o.snap=function(t,e,i){var o=n(t);if("year"==e){var s=o.year()+Math.round(o.month()/12);o.year(Math.round(s/i)*i),o.month(0),o.date(0),o.hours(0),o.minutes(0),o.seconds(0),o.milliseconds(0)}else if("month"==e)o.date()>15?(o.date(1),o.add(1,"month")):o.date(1),o.hours(0),o.minutes(0),o.seconds(0),o.milliseconds(0);else if("week"==e)o.weekday()>2?(o.weekday(0),o.add(1,"week")):o.weekday(0),o.hours(0),o.minutes(0),o.seconds(0),o.milliseconds(0);else if("day"==e){switch(i){case 5:case 2:o.hours(24*Math.round(o.hours()/24));break;default:o.hours(12*Math.round(o.hours()/12))}o.minutes(0),o.seconds(0),o.milliseconds(0)}else if("weekday"==e){switch(i){case 5:case 2:o.hours(12*Math.round(o.hours()/12));break;default:o.hours(6*Math.round(o.hours()/6))}o.minutes(0),o.seconds(0),o.milliseconds(0)}else if("hour"==e){switch(i){case 4:o.minutes(60*Math.round(o.minutes()/60));break;default:o.minutes(30*Math.round(o.minutes()/30))}o.seconds(0),o.milliseconds(0)}else if("minute"==e){switch(i){case 15:case 10:o.minutes(5*Math.round(o.minutes()/5)),o.seconds(0);break;case 5:o.seconds(60*Math.round(o.seconds()/60));break;default:o.seconds(30*Math.round(o.seconds()/30))}o.milliseconds(0)}else if("second"==e)switch(i){case 15:case 10:o.seconds(5*Math.round(o.seconds()/5)),o.milliseconds(0);break;case 5:o.milliseconds(1e3*Math.round(o.milliseconds()/1e3));break;default:o.milliseconds(500*Math.round(o.milliseconds()/500))}else if("millisecond"==e){var r=i>5?i/2:1;o.milliseconds(Math.round(o.milliseconds()/r)*r)}return o},o.prototype.isMajor=function(){if(1==this.switchedYear)switch(this.scale){case"year":case"month":case"week":case"weekday":case"day":case"hour":case"minute":case"second":case"millisecond":return!0;default:return!1}else if(1==this.switchedMonth)switch(this.scale){case"week":case"weekday":case"day":case"hour":case"minute":case"second":case"millisecond":return!0;default:return!1}else if(1==this.switchedDay)switch(this.scale){case"millisecond":case"second":case"minute":case"hour":return!0;default:return!1}var t=this.moment(this.current);switch(this.scale){case"millisecond":return 0==t.milliseconds();case"second":return 0==t.seconds();case"minute":return 0==t.hours()&&0==t.minutes();case"hour":return 0==t.hours();case"weekday":case"day":case"week":return 1==t.date();case"month":return 0==t.month();case"year":default:return!1}},o.prototype.getLabelMinor=function(t){if(void 0==t&&(t=this.current),t instanceof Date&&(t=this.moment(t)),"function"==typeof this.format.minorLabels)return this.format.minorLabels(t,this.scale,this.step);var e=this.format.minorLabels[this.scale];switch(this.scale){case"week":if(this.isMajor()&&0!==t.weekday())return"";default:return e&&e.length>0?this.moment(t).format(e):""}},o.prototype.getLabelMajor=function(t){if(void 0==t&&(t=this.current),t instanceof Date&&(t=this.moment(t)),"function"==typeof this.format.majorLabels)return this.format.majorLabels(t,this.scale,this.step);var e=this.format.majorLabels[this.scale];return e&&e.length>0?this.moment(t).format(e):""},o.prototype.getClassName=function(){function t(t){return t/a%2==0?" vis-even":" vis-odd"}function e(t){return t.isSame(new Date,"day")?" vis-today":t.isSame(n().add(1,"day"),"day")?" vis-tomorrow":t.isSame(n().add(-1,"day"),"day")?" vis-yesterday":""}function i(t){return t.isSame(new Date,"week")?" vis-current-week":""}function o(t){return t.isSame(new Date,"month")?" vis-current-month":""}var n=this.moment,s=this.moment(this.current),r=s.locale?s.locale("en"):s.lang("en"),a=this.step,h=[];switch(this.scale){case"millisecond":h.push(e(r)),h.push(t(r.milliseconds()));break;case"second":h.push(e(r)),h.push(t(r.seconds()));break;case"minute":h.push(e(r)),h.push(t(r.minutes()));break;case"hour":h.push("vis-h"+r.hours()+(4==this.step?"-h"+(r.hours()+4):"")),h.push(e(r)),h.push(t(r.hours()));break;case"weekday":h.push("vis-"+r.format("dddd").toLowerCase()),h.push(e(r)),h.push(i(r)),h.push(t(r.date()));break;case"day":h.push("vis-day"+r.date()),h.push("vis-"+r.format("MMMM").toLowerCase()),h.push(e(r)),h.push(o(r)),h.push(this.step<=2?e(r):""),h.push(this.step<=2?"vis-"+r.format("dddd").toLowerCase():""),
h.push(t(r.date()-1));break;case"week":h.push("vis-week"+r.format("w")),h.push(i(r)),h.push(t(r.week()));break;case"month":h.push("vis-"+r.format("MMMM").toLowerCase()),h.push(o(r)),h.push(t(r.month()));break;case"year":h.push("vis-year"+r.year()),h.push(function(t){return t.isSame(new Date,"year")?" vis-current-year":""}(r)),h.push(t(r.year()))}return h.filter(String).join(" ")},t.exports=o},function(t,e,i){function o(t,e){this.body=t,this.defaultOptions={rtl:!1,showCurrentTime:!0,moment:r,locales:a,locale:"en"},this.options=n.extend({},this.defaultOptions),this.offset=0,this._create(),this.setOptions(e)}var n=i(2),s=i(16),r=i(9),a=i(98);o.prototype=new s,o.prototype._create=function(){var t=document.createElement("div");t.className="vis-current-time",t.style.position="absolute",t.style.top="0px",t.style.height="100%",this.bar=t},o.prototype.destroy=function(){this.options.showCurrentTime=!1,this.redraw(),this.body=null},o.prototype.setOptions=function(t){t&&n.selectiveExtend(["rtl","showCurrentTime","moment","locale","locales"],this.options,t)},o.prototype.redraw=function(){if(this.options.showCurrentTime){var t=this.body.dom.backgroundVertical;this.bar.parentNode!=t&&(this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar),t.appendChild(this.bar),this.start());var e=this.options.moment((new Date).valueOf()+this.offset),i=this.body.util.toScreen(e),o=this.options.locales[this.options.locale];o||(this.warned||(console.log("WARNING: options.locales['"+this.options.locale+"'] not found. See http://visjs.org/docs/timeline/#Localization"),this.warned=!0),o=this.options.locales.en);var n=o.current+" "+o.time+": "+e.format("dddd, MMMM Do YYYY, H:mm:ss");n=n.charAt(0).toUpperCase()+n.substring(1),this.options.rtl?this.bar.style.right=i+"px":this.bar.style.left=i+"px",this.bar.title=n}else this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar),this.stop();return!1},o.prototype.start=function(){function t(){e.stop();var i=e.body.range.conversion(e.body.domProps.center.width).scale,o=1/i/10;o<30&&(o=30),o>1e3&&(o=1e3),e.redraw(),e.body.emitter.emit("currentTimeTick"),e.currentTimeTimer=setTimeout(t,o)}var e=this;t()},o.prototype.stop=function(){void 0!==this.currentTimeTimer&&(clearTimeout(this.currentTimeTimer),delete this.currentTimeTimer)},o.prototype.setCurrentTime=function(t){var e=n.convert(t,"Date").valueOf(),i=(new Date).valueOf();this.offset=e-i,this.redraw()},o.prototype.getCurrentTime=function(){return new Date((new Date).valueOf()+this.offset)},t.exports=o},function(t,e,i){function o(t,e,i){if(this.groupId=t,this.subgroups={},this.subgroupStack={},this.subgroupStackAll=!1,this.doInnerStack=!1,this.subgroupIndex=0,this.subgroupOrderer=e&&e.subgroupOrder,this.itemSet=i,this.isVisible=null,this.stackDirty=!0,e&&e.nestedGroups&&(this.nestedGroups=e.nestedGroups,0==e.showNested?this.showNested=!1:this.showNested=!0),e&&e.subgroupStack)if("boolean"==typeof e.subgroupStack)this.doInnerStack=e.subgroupStack,this.subgroupStackAll=e.subgroupStack;else for(var o in e.subgroupStack)this.subgroupStack[o]=e.subgroupStack[o],this.doInnerStack=this.doInnerStack||e.subgroupStack[o];this.nestedInGroup=null,this.dom={},this.props={label:{width:0,height:0}},this.className=null,this.items={},this.visibleItems=[],this.itemsInRange=[],this.orderedItems={byStart:[],byEnd:[]},this.checkRangedItems=!1;var n=this;this.itemSet.body.emitter.on("checkRangedItems",function(){n.checkRangedItems=!0}),this._create(),this.setData(e)}var n=i(8),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(2),a=i(100);o.prototype._create=function(){var t=document.createElement("div");this.itemSet.options.groupEditable.order?t.className="vis-label draggable":t.className="vis-label",this.dom.label=t;var e=document.createElement("div");e.className="vis-inner",t.appendChild(e),this.dom.inner=e;var i=document.createElement("div");i.className="vis-group",i["timeline-group"]=this,this.dom.foreground=i,this.dom.background=document.createElement("div"),this.dom.background.className="vis-group",this.dom.axis=document.createElement("div"),this.dom.axis.className="vis-group",this.dom.marker=document.createElement("div"),this.dom.marker.style.visibility="hidden",this.dom.marker.style.position="absolute",this.dom.marker.innerHTML="",this.dom.background.appendChild(this.dom.marker)},o.prototype.setData=function(t){var e,i;if(this.itemSet.options&&this.itemSet.options.groupTemplate?(i=this.itemSet.options.groupTemplate.bind(this),e=i(t,this.dom.inner)):e=t&&t.content,e instanceof Element){for(this.dom.inner.appendChild(e);this.dom.inner.firstChild;)this.dom.inner.removeChild(this.dom.inner.firstChild);this.dom.inner.appendChild(e)}else e instanceof Object?i(t,this.dom.inner):this.dom.inner.innerHTML=void 0!==e&&null!==e?e:this.groupId||"";if(this.dom.label.title=t&&t.title||"",this.dom.inner.firstChild?r.removeClassName(this.dom.inner,"vis-hidden"):r.addClassName(this.dom.inner,"vis-hidden"),t&&t.nestedGroups){this.nestedGroups&&this.nestedGroups==t.nestedGroups||(this.nestedGroups=t.nestedGroups),void 0===t.showNested&&void 0!==this.showNested||(0==t.showNested?this.showNested=!1:this.showNested=!0),r.addClassName(this.dom.label,"vis-nesting-group");var o=this.itemSet.options.rtl?"collapsed-rtl":"collapsed";this.showNested?(r.removeClassName(this.dom.label,o),r.addClassName(this.dom.label,"expanded")):(r.removeClassName(this.dom.label,"expanded"),r.addClassName(this.dom.label,o))}else this.nestedGroups&&(this.nestedGroups=null,o=this.itemSet.options.rtl?"collapsed-rtl":"collapsed",r.removeClassName(this.dom.label,o),r.removeClassName(this.dom.label,"expanded"),r.removeClassName(this.dom.label,"vis-nesting-group"));t&&t.nestedInGroup&&(r.addClassName(this.dom.label,"vis-nested-group"),this.itemSet.options&&this.itemSet.options.rtl?this.dom.inner.style.paddingRight="30px":this.dom.inner.style.paddingLeft="30px");var n=t&&t.className||null;n!=this.className&&(this.className&&(r.removeClassName(this.dom.label,this.className),r.removeClassName(this.dom.foreground,this.className),r.removeClassName(this.dom.background,this.className),r.removeClassName(this.dom.axis,this.className)),r.addClassName(this.dom.label,n),r.addClassName(this.dom.foreground,n),r.addClassName(this.dom.background,n),r.addClassName(this.dom.axis,n),this.className=n),this.style&&(r.removeCssText(this.dom.label,this.style),this.style=null),t&&t.style&&(r.addCssText(this.dom.label,t.style),this.style=t.style)},o.prototype.getLabelWidth=function(){return this.props.label.width},o.prototype._didMarkerHeightChange=function(){var t=this.dom.marker.clientHeight;if(t!=this.lastMarkerHeight){this.lastMarkerHeight=t;var e={},i=0;r.forEach(this.items,function(t,o){if(t.dirty=!0,t.displayed){e[o]=t.redraw(!0),i=e[o].length}});if(i>0)for(var o=0;o<i;o++)r.forEach(e,function(t){t[o]()});return!0}},o.prototype._calculateGroupSizeAndPosition=function(){var t=this.dom.foreground.offsetTop,e=this.dom.foreground.offsetLeft,i=this.dom.foreground.offsetWidth;this.top=t,this.right=e,this.width=i},o.prototype._redrawItems=function(t,e,i,o){if(t||this.stackDirty||this.isVisible&&!e){var n={},s=null;if("function"==typeof this.itemSet.options.order){var h=this,d={},l=0;if(r.forEach(this.items,function(t,e){t.displayed||(d[e]=t.redraw(!0),l=d[e].length,h.visibleItems.push(t))}),l>0)for(var u=0;u<l;u++)r.forEach(d,function(t){t[u]()});if(r.forEach(this.items,function(t){t.repositionX(!1)}),this.doInnerStack&&this.itemSet.options.stackSubgroups){for(s in this.subgroups)n[s]=this.subgroups[s].items.slice().sort(function(t,e){return h.itemSet.options.order(t.data,e.data)});a.stackSubgroupsWithInnerStack(n,i,this.subgroups)}else{var c=this.orderedItems.byStart.slice().sort(function(t,e){return h.itemSet.options.order(t.data,e.data)});a.stack(c,i,!0)}this.visibleItems=this._updateItemsInRange(this.orderedItems,this.visibleItems,o)}else if(this.visibleItems=this._updateItemsInRange(this.orderedItems,this.visibleItems,o),this.itemSet.options.stack)if(this.doInnerStack&&this.itemSet.options.stackSubgroups){for(s in this.subgroups)n[s]=this.subgroups[s].items;a.stackSubgroupsWithInnerStack(n,i,this.subgroups)}else a.stack(this.visibleItems,i,!0);else a.nostack(this.visibleItems,i,this.subgroups,this.itemSet.options.stackSubgroups);this.stackDirty=!1}},o.prototype._didResize=function(t,e){t=r.updateProperty(this,"height",e)||t;var i=this.dom.inner.clientWidth,o=this.dom.inner.clientHeight;return t=r.updateProperty(this.props.label,"width",i)||t,t=r.updateProperty(this.props.label,"height",o)||t},o.prototype._applyGroupHeight=function(t){this.dom.background.style.height=t+"px",this.dom.foreground.style.height=t+"px",this.dom.label.style.height=t+"px"},o.prototype._updateItemsVerticalPosition=function(t){for(var e=0,i=this.visibleItems.length;e<i;e++){var o=this.visibleItems[e];o.repositionY(t),this.isVisible||"__background__"==this.groupId||o.displayed&&o.hide()}},o.prototype.redraw=function(t,e,i,o){var n,s=!1,r=this.isVisible,a=[function(){i=this._didMarkerHeightChange.bind(this)}.bind(this),this._updateSubGroupHeights.bind(this,e),this._calculateGroupSizeAndPosition.bind(this),function(){this.isVisible=this._isGroupVisible.bind(this)(t,e)}.bind(this),function(){this._redrawItems.bind(this)(i,r,e,t)}.bind(this),this._updateSubgroupsSizes.bind(this),function(){n=this._calculateHeight.bind(this)(e)}.bind(this),this._calculateGroupSizeAndPosition.bind(this),function(){s=this._didResize.bind(this)(s,n)}.bind(this),function(){this._applyGroupHeight.bind(this)(n)}.bind(this),function(){this._updateItemsVerticalPosition.bind(this)(e)}.bind(this),function(){return!this.isVisible&&this.height&&(s=!1),s}];if(o)return a;var h;return a.forEach(function(t){h=t()}),h},o.prototype._updateSubGroupHeights=function(t){if((0,s.default)(this.subgroups).length>0){var e=this;this.resetSubgroups(),r.forEach(this.visibleItems,function(i){void 0!==i.data.subgroup&&(e.subgroups[i.data.subgroup].height=Math.max(e.subgroups[i.data.subgroup].height,i.height+t.item.vertical),e.subgroups[i.data.subgroup].visible=!0)})}},o.prototype._isGroupVisible=function(t,e){return this.top<=t.body.domProps.centerContainer.height-t.body.domProps.scrollTop+e.axis&&this.top+this.height+e.axis>=-t.body.domProps.scrollTop},o.prototype._calculateHeight=function(t){var e,i=this.visibleItems;if(i.length>0){var o=i[0].top,n=i[0].top+i[0].height;if(r.forEach(i,function(t){o=Math.min(o,t.top),n=Math.max(n,t.top+t.height)}),o>t.axis){var s=o-t.axis;n-=s,r.forEach(i,function(t){t.top-=s})}e=n+t.item.vertical/2}else e=0;return e=Math.max(e,this.props.label.height)},o.prototype.show=function(){this.dom.label.parentNode||this.itemSet.dom.labelSet.appendChild(this.dom.label),this.dom.foreground.parentNode||this.itemSet.dom.foreground.appendChild(this.dom.foreground),this.dom.background.parentNode||this.itemSet.dom.background.appendChild(this.dom.background),this.dom.axis.parentNode||this.itemSet.dom.axis.appendChild(this.dom.axis)},o.prototype.hide=function(){var t=this.dom.label;t.parentNode&&t.parentNode.removeChild(t);var e=this.dom.foreground;e.parentNode&&e.parentNode.removeChild(e);var i=this.dom.background;i.parentNode&&i.parentNode.removeChild(i);var o=this.dom.axis;o.parentNode&&o.parentNode.removeChild(o)},o.prototype.add=function(t){if(this.items[t.id]=t,t.setParent(this),this.stackDirty=!0,void 0!==t.data.subgroup&&(this._addToSubgroup(t),this.orderSubgroups()),-1==this.visibleItems.indexOf(t)){var e=this.itemSet.body.range;this._checkIfVisible(t,this.visibleItems,e)}},o.prototype._addToSubgroup=function(t,e){e=e||t.data.subgroup,void 0!=e&&void 0===this.subgroups[e]&&(this.subgroups[e]={height:0,top:0,start:t.data.start,end:t.data.end||t.data.start,visible:!1,index:this.subgroupIndex,items:[],stack:this.subgroupStackAll||this.subgroupStack[e]||!1},this.subgroupIndex++),new Date(t.data.start)<new Date(this.subgroups[e].start)&&(this.subgroups[e].start=t.data.start);var i=t.data.end||t.data.start;new Date(i)>new Date(this.subgroups[e].end)&&(this.subgroups[e].end=i),this.subgroups[e].items.push(t)},o.prototype._updateSubgroupsSizes=function(){var t=this;if(t.subgroups)for(var e in t.subgroups){var i=t.subgroups[e].items[0].data.end||t.subgroups[e].items[0].data.start,o=t.subgroups[e].items[0].data.start,n=i-1;t.subgroups[e].items.forEach(function(t){new Date(t.data.start)<new Date(o)&&(o=t.data.start);var e=t.data.end||t.data.start;new Date(e)>new Date(n)&&(n=e)}),t.subgroups[e].start=o,t.subgroups[e].end=new Date(n-1)}},o.prototype.orderSubgroups=function(){if(void 0!==this.subgroupOrderer){var t,e=[];if("string"==typeof this.subgroupOrderer){for(t in this.subgroups)e.push({subgroup:t,sortField:this.subgroups[t].items[0].data[this.subgroupOrderer]});e.sort(function(t,e){return t.sortField-e.sortField})}else if("function"==typeof this.subgroupOrderer){for(t in this.subgroups)e.push(this.subgroups[t].items[0].data);e.sort(this.subgroupOrderer)}if(e.length>0)for(var i=0;i<e.length;i++)this.subgroups[e[i].subgroup].index=i}},o.prototype.resetSubgroups=function(){for(var t in this.subgroups)this.subgroups.hasOwnProperty(t)&&(this.subgroups[t].visible=!1,this.subgroups[t].height=0)},o.prototype.remove=function(t){delete this.items[t.id],t.setParent(null),this.stackDirty=!0;var e=this.visibleItems.indexOf(t);-1!=e&&this.visibleItems.splice(e,1),void 0!==t.data.subgroup&&(this._removeFromSubgroup(t),this.orderSubgroups())},o.prototype._removeFromSubgroup=function(t,e){if(void 0!=(e=e||t.data.subgroup)){var i=this.subgroups[e];if(i){var o=i.items.indexOf(t);o>=0&&(i.items.splice(o,1),i.items.length?this._updateSubgroupsSizes():delete this.subgroups[e])}}},o.prototype.removeFromDataSet=function(t){this.itemSet.removeItem(t.id)},o.prototype.order=function(){for(var t=r.toArray(this.items),e=[],i=[],o=0;o<t.length;o++)void 0!==t[o].data.end&&i.push(t[o]),e.push(t[o]);this.orderedItems={byStart:e,byEnd:i},a.orderByStart(this.orderedItems.byStart),a.orderByEnd(this.orderedItems.byEnd)},o.prototype._updateItemsInRange=function(t,e,i){var o=[],n={},s=(i.end-i.start)/4,a=i.start-s,h=i.end+s,d=function(t){return t<a?-1:t<=h?0:1};if(e.length>0)for(var l=0;l<e.length;l++)this._checkIfVisibleWithReference(e[l],o,n,i);var u=r.binarySearchCustom(t.byStart,d,"data","start");if(this._traceVisible(u,t.byStart,o,n,function(t){return t.data.start<a||t.data.start>h}),1==this.checkRangedItems)for(this.checkRangedItems=!1,l=0;l<t.byEnd.length;l++)this._checkIfVisibleWithReference(t.byEnd[l],o,n,i);else{var c=r.binarySearchCustom(t.byEnd,d,"data","end");this._traceVisible(c,t.byEnd,o,n,function(t){return t.data.end<a||t.data.end>h})}var p={},f=0;for(l=0;l<o.length;l++){var m=o[l];if(!m.displayed){p[l]=m.redraw(!0),f=p[l].length}}if(f>0)for(var v=0;v<f;v++)r.forEach(p,function(t){t[v]()});for(l=0;l<o.length;l++)o[l].repositionX();return o},o.prototype._traceVisible=function(t,e,i,o,n){if(-1!=t){var s,r;for(s=t;s>=0&&(r=e[s],!n(r));s--)void 0===o[r.id]&&(o[r.id]=!0,i.push(r));for(s=t+1;s<e.length&&(r=e[s],!n(r));s++)void 0===o[r.id]&&(o[r.id]=!0,i.push(r))}},o.prototype._checkIfVisible=function(t,e,i){t.isVisible(i)?(t.displayed||t.show(),t.repositionX(),e.push(t)):t.displayed&&t.hide()},o.prototype._checkIfVisibleWithReference=function(t,e,i,o){t.isVisible(o)?void 0===i[t.id]&&(i[t.id]=!0,e.push(t)):t.displayed&&t.hide()},o.prototype.changeSubgroup=function(t,e,i){this._removeFromSubgroup(t,e),this._addToSubgroup(t,i),this.orderSubgroups()},t.exports=o},function(t,e,i){function o(t,e,i){r.call(this,t,e,i),this.width=0,this.height=0,this.top=0,this.left=0}var n=i(29),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(68);o.prototype=(0,s.default)(r.prototype),o.prototype.redraw=function(t,e,i){this.visibleItems=this._updateItemsInRange(this.orderedItems,this.visibleItems,t),this.width=this.dom.background.offsetWidth,this.dom.background.style.height="0";for(var o=0,n=this.visibleItems.length;o<n;o++){this.visibleItems[o].repositionY(e)}return!1},o.prototype.show=function(){this.dom.background.parentNode||this.itemSet.dom.background.appendChild(this.dom.background)},t.exports=o},function(t,e,i){function o(t,e,i){if(this.props={content:{width:0}},this.overflow=!1,this.options=i,t){if(void 0==t.start)throw new Error('Property "start" missing in item '+t.id);if(void 0==t.end)throw new Error('Property "end" missing in item '+t.id)}n.call(this,t,e,i)}var n=i(38);o.prototype=new n(null,null,null),o.prototype.baseClassName="vis-item vis-range",o.prototype.isVisible=function(t){return this.data.start<t.end&&this.data.end>t.start},o.prototype._createDomElement=function(){this.dom||(this.dom={},this.dom.box=document.createElement("div"),this.dom.frame=document.createElement("div"),this.dom.frame.className="vis-item-overflow",this.dom.box.appendChild(this.dom.frame),this.dom.visibleFrame=document.createElement("div"),this.dom.visibleFrame.className="vis-item-visible-frame",this.dom.box.appendChild(this.dom.visibleFrame),this.dom.content=document.createElement("div"),this.dom.content.className="vis-item-content",this.dom.frame.appendChild(this.dom.content),this.dom.box["timeline-item"]=this,this.dirty=!0)},o.prototype._appendDomElement=function(){if(!this.parent)throw new Error("Cannot redraw item: no parent attached");if(!this.dom.box.parentNode){var t=this.parent.dom.foreground;if(!t)throw new Error("Cannot redraw item: parent has no foreground container element");t.appendChild(this.dom.box)}this.displayed=!0},o.prototype._updateDirtyDomComponents=function(){if(this.dirty){this._updateContents(this.dom.content),this._updateDataAttributes(this.dom.box),this._updateStyle(this.dom.box);var t=this.editable.updateTime||this.editable.updateGroup,e=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"")+(t?" vis-editable":" vis-readonly");this.dom.box.className=this.baseClassName+e,this.dom.content.style.maxWidth="none"}},o.prototype._getDomComponentsSizes=function(){return this.overflow="hidden"!==window.getComputedStyle(this.dom.frame).overflow,{content:{width:this.dom.content.offsetWidth},box:{height:this.dom.box.offsetHeight}}},o.prototype._updateDomComponentsSizes=function(t){this.props.content.width=t.content.width,this.height=t.box.height,this.dom.content.style.maxWidth="",this.dirty=!1},o.prototype._repaintDomAdditionals=function(){this._repaintOnItemUpdateTimeTooltip(this.dom.box),this._repaintDeleteButton(this.dom.box),this._repaintDragCenter(),this._repaintDragLeft(),this._repaintDragRight()},o.prototype.redraw=function(t){var e,i=[this._createDomElement.bind(this),this._appendDomElement.bind(this),this._updateDirtyDomComponents.bind(this),function(){this.dirty&&(e=this._getDomComponentsSizes.bind(this)())}.bind(this),function(){this.dirty&&this._updateDomComponentsSizes.bind(this)(e)}.bind(this),this._repaintDomAdditionals.bind(this)];if(t)return i;var o;return i.forEach(function(t){o=t()}),o},o.prototype.show=function(){this.displayed||this.redraw()},o.prototype.hide=function(){if(this.displayed){var t=this.dom.box;t.parentNode&&t.parentNode.removeChild(t),this.displayed=!1}},o.prototype.repositionX=function(t){var e,i,o=this.parent.width,n=this.conversion.toScreen(this.data.start),s=this.conversion.toScreen(this.data.end),r=void 0===this.data.align?this.options.align:this.data.align;!1===this.data.limitSize||void 0!==t&&!0!==t||(n<-o&&(n=-o),s>2*o&&(s=2*o));var a=Math.max(s-n+.5,1);switch(this.overflow?(this.options.rtl?this.right=n:this.left=n,this.width=a+this.props.content.width,i=this.props.content.width):(this.options.rtl?this.right=n:this.left=n,this.width=a,i=Math.min(s-n,this.props.content.width)),this.options.rtl?this.dom.box.style.right=this.right+"px":this.dom.box.style.left=this.left+"px",this.dom.box.style.width=a+"px",r){case"left":this.options.rtl?this.dom.content.style.right="0":this.dom.content.style.left="0";break;case"right":this.options.rtl?this.dom.content.style.right=Math.max(a-i,0)+"px":this.dom.content.style.left=Math.max(a-i,0)+"px";break;case"center":this.options.rtl?this.dom.content.style.right=Math.max((a-i)/2,0)+"px":this.dom.content.style.left=Math.max((a-i)/2,0)+"px";break;default:e=this.overflow?s>0?Math.max(-n,0):-i:n<0?-n:0,this.options.rtl?this.dom.content.style.right=e+"px":(this.dom.content.style.left=e+"px",this.dom.content.style.width="calc(100% - "+e+"px)")}},o.prototype.repositionY=function(){var t=this.options.orientation.item,e=this.dom.box;e.style.top="top"==t?this.top+"px":this.parent.height-this.top-this.height+"px"},o.prototype._repaintDragLeft=function(){if((this.selected||this.options.itemsAlwaysDraggable.range)&&this.options.editable.updateTime&&!this.dom.dragLeft){var t=document.createElement("div");t.className="vis-drag-left",t.dragLeftItem=this,this.dom.box.appendChild(t),this.dom.dragLeft=t}else this.selected||this.options.itemsAlwaysDraggable.range||!this.dom.dragLeft||(this.dom.dragLeft.parentNode&&this.dom.dragLeft.parentNode.removeChild(this.dom.dragLeft),this.dom.dragLeft=null)},o.prototype._repaintDragRight=function(){if((this.selected||this.options.itemsAlwaysDraggable.range)&&this.options.editable.updateTime&&!this.dom.dragRight){var t=document.createElement("div");t.className="vis-drag-right",t.dragRightItem=this,this.dom.box.appendChild(t),this.dom.dragRight=t}else this.selected||this.options.itemsAlwaysDraggable.range||!this.dom.dragRight||(this.dom.dragRight.parentNode&&this.dom.dragRight.parentNode.removeChild(this.dom.dragRight),this.dom.dragRight=null)},t.exports=o},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(19),s=o(n),r=i(6),a=o(r),h=i(0),d=o(h),l=i(1),u=o(l),c=i(2),p=i(179).default,f=function(){function t(e,i,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;(0,d.default)(this,t),this.parent=e,this.changedOptions=[],this.container=i,this.allowCreation=!1,this.options={},this.initialized=!1,this.popupCounter=0,this.defaultOptions={enabled:!1,filter:!0,container:void 0,showButton:!0},c.extend(this.options,this.defaultOptions),this.configureOptions=o,this.moduleOptions={},this.domElements=[],this.popupDiv={},this.popupLimit=5,this.popupHistory={},this.colorPicker=new p(n),this.wrapper=void 0}return(0,u.default)(t,[{key:"setOptions",value:function(t){if(void 0!==t){this.popupHistory={},this._removePopup();var e=!0;"string"==typeof t?this.options.filter=t:t instanceof Array?this.options.filter=t.join():"object"===(void 0===t?"undefined":(0,a.default)(t))?(void 0!==t.container&&(this.options.container=t.container),void 0!==t.filter&&(this.options.filter=t.filter),void 0!==t.showButton&&(this.options.showButton=t.showButton),void 0!==t.enabled&&(e=t.enabled)):"boolean"==typeof t?(this.options.filter=!0,e=t):"function"==typeof t&&(this.options.filter=t,e=!0),!1===this.options.filter&&(e=!1),this.options.enabled=e}this._clean()}},{key:"setModuleOptions",value:function(t){this.moduleOptions=t,!0===this.options.enabled&&(this._clean(),void 0!==this.options.container&&(this.container=this.options.container),this._create())}},{key:"_create",value:function(){var t=this;this._clean(),this.changedOptions=[];var e=this.options.filter,i=0,o=!1;for(var n in this.configureOptions)this.configureOptions.hasOwnProperty(n)&&(this.allowCreation=!1,o=!1,"function"==typeof e?(o=e(n,[]),o=o||this._handleObject(this.configureOptions[n],[n],!0)):!0!==e&&-1===e.indexOf(n)||(o=!0),!1!==o&&(this.allowCreation=!0,i>0&&this._makeItem([]),this._makeHeader(n),this._handleObject(this.configureOptions[n],[n])),i++);if(!0===this.options.showButton){var s=document.createElement("div");s.className="vis-configuration vis-config-button",s.innerHTML="generate options",s.onclick=function(){t._printOptions()},s.onmouseover=function(){s.className="vis-configuration vis-config-button hover"},s.onmouseout=function(){s.className="vis-configuration vis-config-button"},this.optionsContainer=document.createElement("div"),this.optionsContainer.className="vis-configuration vis-config-option-container",this.domElements.push(this.optionsContainer),this.domElements.push(s)}this._push()}},{key:"_push",value:function(){this.wrapper=document.createElement("div"),this.wrapper.className="vis-configuration-wrapper",this.container.appendChild(this.wrapper);for(var t=0;t<this.domElements.length;t++)this.wrapper.appendChild(this.domElements[t]);this._showPopupIfNeeded()}},{key:"_clean",value:function(){for(var t=0;t<this.domElements.length;t++)this.wrapper.removeChild(this.domElements[t]);void 0!==this.wrapper&&(this.container.removeChild(this.wrapper),this.wrapper=void 0),this.domElements=[],this._removePopup()}},{key:"_getValue",value:function(t){for(var e=this.moduleOptions,i=0;i<t.length;i++){if(void 0===e[t[i]]){e=void 0;break}e=e[t[i]]}return e}},{key:"_makeItem",value:function(t){if(!0===this.allowCreation){var e=document.createElement("div");e.className="vis-configuration vis-config-item vis-config-s"+t.length;for(var i=arguments.length,o=Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n];return o.forEach(function(t){e.appendChild(t)}),this.domElements.push(e),this.domElements.length}return 0}},{key:"_makeHeader",value:function(t){var e=document.createElement("div");e.className="vis-configuration vis-config-header",e.innerHTML=t,this._makeItem([],e)}},{key:"_makeLabel",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=document.createElement("div");return o.className="vis-configuration vis-config-label vis-config-s"+e.length,o.innerHTML=!0===i?"<i><b>"+t+":</b></i>":t+":",o}},{key:"_makeDropdown",value:function(t,e,i){var o=document.createElement("select");o.className="vis-configuration vis-config-select";var n=0;void 0!==e&&-1!==t.indexOf(e)&&(n=t.indexOf(e));for(var s=0;s<t.length;s++){var r=document.createElement("option");r.value=t[s],s===n&&(r.selected="selected"),r.innerHTML=t[s],o.appendChild(r)}var a=this;o.onchange=function(){a._update(this.value,i)};var h=this._makeLabel(i[i.length-1],i);this._makeItem(i,h,o)}},{key:"_makeRange",value:function(t,e,i){var o=t[0],n=t[1],s=t[2],r=t[3],a=document.createElement("input");a.className="vis-configuration vis-config-range";try{a.type="range",a.min=n,a.max=s}catch(t){}a.step=r;var h="",d=0;if(void 0!==e){e<0&&1.2*e<n?(a.min=Math.ceil(1.2*e),d=a.min,h="range increased"):e/1.2<n&&(a.min=Math.ceil(e/1.2),d=a.min,h="range increased"),1.2*e>s&&1!==s&&(a.max=Math.ceil(1.2*e),d=a.max,h="range increased"),a.value=e}else a.value=o;var l=document.createElement("input");l.className="vis-configuration vis-config-rangeinput",l.value=a.value;var u=this;a.onchange=function(){l.value=this.value,u._update(Number(this.value),i)},a.oninput=function(){l.value=this.value};var c=this._makeLabel(i[i.length-1],i),p=this._makeItem(i,c,a,l);""!==h&&this.popupHistory[p]!==d&&(this.popupHistory[p]=d,this._setupPopup(h,p))}},{key:"_setupPopup",value:function(t,e){var i=this;if(!0===this.initialized&&!0===this.allowCreation&&this.popupCounter<this.popupLimit){var o=document.createElement("div");o.id="vis-configuration-popup",o.className="vis-configuration-popup",o.innerHTML=t,o.onclick=function(){i._removePopup()},this.popupCounter+=1,this.popupDiv={html:o,index:e}}}},{key:"_removePopup",value:function(){void 0!==this.popupDiv.html&&(this.popupDiv.html.parentNode.removeChild(this.popupDiv.html),clearTimeout(this.popupDiv.hideTimeout),clearTimeout(this.popupDiv.deleteTimeout),this.popupDiv={})}},{key:"_showPopupIfNeeded",value:function(){var t=this;if(void 0!==this.popupDiv.html){var e=this.domElements[this.popupDiv.index],i=e.getBoundingClientRect();this.popupDiv.html.style.left=i.left+"px",this.popupDiv.html.style.top=i.top-30+"px",document.body.appendChild(this.popupDiv.html),this.popupDiv.hideTimeout=setTimeout(function(){t.popupDiv.html.style.opacity=0},1500),this.popupDiv.deleteTimeout=setTimeout(function(){t._removePopup()},1800)}}},{key:"_makeCheckbox",value:function(t,e,i){var o=document.createElement("input");o.type="checkbox",o.className="vis-configuration vis-config-checkbox",o.checked=t,void 0!==e&&(o.checked=e,e!==t&&("object"===(void 0===t?"undefined":(0,a.default)(t))?e!==t.enabled&&this.changedOptions.push({path:i,value:e}):this.changedOptions.push({path:i,value:e})));var n=this;o.onchange=function(){n._update(this.checked,i)};var s=this._makeLabel(i[i.length-1],i);this._makeItem(i,s,o)}},{key:"_makeTextInput",value:function(t,e,i){var o=document.createElement("input");o.type="text",o.className="vis-configuration vis-config-text",o.value=e,e!==t&&this.changedOptions.push({path:i,value:e});var n=this;o.onchange=function(){n._update(this.value,i)};var s=this._makeLabel(i[i.length-1],i);this._makeItem(i,s,o)}},{key:"_makeColorField",value:function(t,e,i){var o=this,n=t[1],s=document.createElement("div");e=void 0===e?n:e,"none"!==e?(s.className="vis-configuration vis-config-colorBlock",s.style.backgroundColor=e):s.className="vis-configuration vis-config-colorBlock none",e=void 0===e?n:e,s.onclick=function(){o._showColorPicker(e,s,i)};var r=this._makeLabel(i[i.length-1],i);this._makeItem(i,r,s)}},{key:"_showColorPicker",value:function(t,e,i){var o=this;e.onclick=function(){},this.colorPicker.insertTo(e),this.colorPicker.show(),this.colorPicker.setColor(t),this.colorPicker.setUpdateCallback(function(t){var n="rgba("+t.r+","+t.g+","+t.b+","+t.a+")";e.style.backgroundColor=n,o._update(n,i)}),this.colorPicker.setCloseCallback(function(){e.onclick=function(){o._showColorPicker(t,e,i)}})}},{key:"_handleObject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!1,n=this.options.filter,s=!1;for(var r in t)if(t.hasOwnProperty(r)){o=!0;var a=t[r],h=c.copyAndExtendArray(e,r);if("function"==typeof n&&!1===(o=n(r,e))&&!(a instanceof Array)&&"string"!=typeof a&&"boolean"!=typeof a&&a instanceof Object&&(this.allowCreation=!1,o=this._handleObject(a,h,!0),this.allowCreation=!1===i),!1!==o){s=!0;var d=this._getValue(h);if(a instanceof Array)this._handleArray(a,d,h);else if("string"==typeof a)this._makeTextInput(a,d,h);else if("boolean"==typeof a)this._makeCheckbox(a,d,h);else if(a instanceof Object){var l=!0;if(-1!==e.indexOf("physics")&&this.moduleOptions.physics.solver!==r&&(l=!1),!0===l)if(void 0!==a.enabled){var u=c.copyAndExtendArray(h,"enabled"),p=this._getValue(u);if(!0===p){var f=this._makeLabel(r,h,!0);this._makeItem(h,f),s=this._handleObject(a,h)||s}else this._makeCheckbox(a,p,h)}else{var m=this._makeLabel(r,h,!0);this._makeItem(h,m),s=this._handleObject(a,h)||s}}else console.error("dont know how to handle",a,r,h)}}return s}},{key:"_handleArray",value:function(t,e,i){"string"==typeof t[0]&&"color"===t[0]?(this._makeColorField(t,e,i),t[1]!==e&&this.changedOptions.push({path:i,value:e})):"string"==typeof t[0]?(this._makeDropdown(t,e,i),t[0]!==e&&this.changedOptions.push({path:i,value:e})):"number"==typeof t[0]&&(this._makeRange(t,e,i),t[0]!==e&&this.changedOptions.push({path:i,value:Number(e)}))}},{key:"_update",value:function(t,e){var i=this._constructOptions(t,e);this.parent.body&&this.parent.body.emitter&&this.parent.body.emitter.emit&&this.parent.body.emitter.emit("configChange",i),this.initialized=!0,this.parent.setOptions(i)}},{key:"_constructOptions",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i;t="true"===t||t,t="false"!==t&&t;for(var n=0;n<e.length;n++)"global"!==e[n]&&(void 0===o[e[n]]&&(o[e[n]]={}),n!==e.length-1?o=o[e[n]]:o[e[n]]=t);return i}},{key:"_printOptions",value:function(){var t=this.getOptions();this.optionsContainer.innerHTML="<pre>var options = "+(0,s.default)(t,null,2)+"</pre>"}},{key:"getOptions",value:function(){for(var t={},e=0;e<this.changedOptions.length;e++)this._constructOptions(this.changedOptions[e].value,this.changedOptions[e].path,t);return t}}]),t}();e.default=f},function(t,e,i){function o(t,e){}function n(t,e){return e=void 0===e?{}:e,{style:e.style||t.options.drawPoints.style,
styles:e.styles||t.options.drawPoints.styles,size:e.size||t.options.drawPoints.size,className:e.className||t.className}}function s(t,e){var i=void 0;return t.options&&t.options.drawPoints&&t.options.drawPoints.onRender&&"function"==typeof t.options.drawPoints.onRender&&(i=t.options.drawPoints.onRender),e.group.options&&e.group.options.drawPoints&&e.group.options.drawPoints.onRender&&"function"==typeof e.group.options.drawPoints.onRender&&(i=e.group.options.drawPoints.onRender),i}var r=i(6),a=function(t){return t&&t.__esModule?t:{default:t}}(r),h=i(14);o.draw=function(t,e,i,o){o=o||0;for(var r=s(i,e),d=0;d<t.length;d++)if(r){var l=r(t[d],e);!0!==l&&"object"!==(void 0===l?"undefined":(0,a.default)(l))||h.drawPoint(t[d].screen_x+o,t[d].screen_y,n(e,l),i.svgElements,i.svg,t[d].label)}else h.drawPoint(t[d].screen_x+o,t[d].screen_y,n(e),i.svgElements,i.svg,t[d].label)},o.drawIcon=function(t,e,i,o,s,r){var a=.5*s,d=h.getSVGElement("rect",r.svgElements,r.svg);d.setAttributeNS(null,"x",e),d.setAttributeNS(null,"y",i-a),d.setAttributeNS(null,"width",o),d.setAttributeNS(null,"height",2*a),d.setAttributeNS(null,"class","vis-outline"),h.drawPoint(e+.5*o,i,n(t),r.svgElements,r.svg)},t.exports=o},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(23),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n.labelOffset=0,n.selected=!1,n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"setOptions",value:function(t,e,i){this.options=t,void 0===e&&void 0===i||this.setImages(e,i)}},{key:"setImages",value:function(t,e){e&&this.selected?(this.imageObj=e,this.imageObjAlt=t):(this.imageObj=t,this.imageObjAlt=e)}},{key:"switchImages",value:function(t){var e=t&&!this.selected||!t&&this.selected;if(this.selected=t,void 0!==this.imageObjAlt&&e){var i=this.imageObj;this.imageObj=this.imageObjAlt,this.imageObjAlt=i}}},{key:"_resizeImage",value:function(){var t,e;if(!1===this.options.shapeProperties.useImageSize){var i=1,o=1;this.imageObj.width&&this.imageObj.height&&(this.imageObj.width>this.imageObj.height?i=this.imageObj.width/this.imageObj.height:o=this.imageObj.height/this.imageObj.width),t=2*this.options.size*i,e=2*this.options.size*o}else t=this.imageObj.width,e=this.imageObj.height;this.width=t,this.height=e,this.radius=.5*this.width}},{key:"_drawRawCircle",value:function(t,e,i,o){this.initContextForDraw(t,o),t.circle(e,i,o.size),this.performFill(t,o)}},{key:"_drawImageAtPosition",value:function(t,e){if(0!=this.imageObj.width){t.globalAlpha=1,this.enableShadow(t,e);var i=1;!0===this.options.shapeProperties.interpolation&&(i=this.imageObj.width/this.width/this.body.view.scale),this.imageObj.drawImageAtPosition(t,i,this.left,this.top,this.width,this.height),this.disableShadow(t,e)}}},{key:"_drawImageLabel",value:function(t,e,i,o,n){var s,r=0;if(void 0!==this.height){r=.5*this.height;var a=this.labelModule.getTextSize(t,o,n);a.lineCount>=1&&(r+=a.height/2)}s=i+r,this.options.label&&(this.labelOffset=r),this.labelModule.draw(t,e,s,o,n,"hanging")}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(19),s=o(n),r=i(6),a=o(r),h=i(29),d=o(h),l=i(0),u=o(l),c=i(1),p=o(c),f=i(2),m=i(117).default,v=i(48).default,g=i(215).default,y=i(217).default,b=i(218).default,_=i(219).default,w=function(){function t(e,i,o,n){if((0,u.default)(this,t),void 0===i)throw new Error("No body provided");this.options=f.bridgeObject(o),this.globalOptions=o,this.defaultOptions=n,this.body=i,this.id=void 0,this.fromId=void 0,this.toId=void 0,this.selected=!1,this.hover=!1,this.labelDirty=!0,this.baseWidth=this.options.width,this.baseFontSize=this.options.font.size,this.from=void 0,this.to=void 0,this.edgeType=void 0,this.connected=!1,this.labelModule=new m(this.body,this.options,!0),this.setOptions(e)}return(0,p.default)(t,[{key:"setOptions",value:function(e){if(e){t.parseOptions(this.options,e,!0,this.globalOptions),void 0!==e.id&&(this.id=e.id),void 0!==e.from&&(this.fromId=e.from),void 0!==e.to&&(this.toId=e.to),void 0!==e.title&&(this.title=e.title),void 0!==e.value&&(e.value=parseFloat(e.value));var i=[e,this.options,this.defaultOptions];this.chooser=v.choosify("edge",i),this.updateLabelModule(e);var o=this.updateEdgeType();return this._setInteractionWidths(),this.connect(),void 0===e.hidden&&void 0===e.physics||(o=!0),o}}},{key:"getFormattingValues",value:function(){var t=!0===this.options.arrows.to||!0===this.options.arrows.to.enabled,e=!0===this.options.arrows.from||!0===this.options.arrows.from.enabled,i=!0===this.options.arrows.middle||!0===this.options.arrows.middle.enabled,o=this.options.color.inherit,n={toArrow:t,toArrowScale:this.options.arrows.to.scaleFactor,toArrowType:this.options.arrows.to.type,middleArrow:i,middleArrowScale:this.options.arrows.middle.scaleFactor,middleArrowType:this.options.arrows.middle.type,fromArrow:e,fromArrowScale:this.options.arrows.from.scaleFactor,fromArrowType:this.options.arrows.from.type,arrowStrikethrough:this.options.arrowStrikethrough,color:o?void 0:this.options.color.color,inheritsColor:o,opacity:this.options.color.opacity,hidden:this.options.hidden,length:this.options.length,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y,dashes:this.options.dashes,width:this.options.width};if(this.selected||this.hover)if(!0===this.chooser){if(this.selected){var s=this.options.selectionWidth;"function"==typeof s?n.width=s(n.width):"number"==typeof s&&(n.width+=s),n.width=Math.max(n.width,.3/this.body.view.scale),n.color=this.options.color.highlight,n.shadow=this.options.shadow.enabled}else if(this.hover){var r=this.options.hoverWidth;"function"==typeof r?n.width=r(n.width):"number"==typeof r&&(n.width+=r),n.width=Math.max(n.width,.3/this.body.view.scale),n.color=this.options.color.hover,n.shadow=this.options.shadow.enabled}}else"function"==typeof this.chooser&&(this.chooser(n,this.options.id,this.selected,this.hover),void 0!==n.color&&(n.inheritsColor=!1),!1===n.shadow&&(n.shadowColor===this.options.shadow.color&&n.shadowSize===this.options.shadow.size&&n.shadowX===this.options.shadow.x&&n.shadowY===this.options.shadow.y||(n.shadow=!0)));else n.shadow=this.options.shadow.enabled,n.width=Math.max(n.width,.3/this.body.view.scale);return n}},{key:"updateLabelModule",value:function(t){var e=[t,this.options,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,e),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateEdgeType",value:function(){var t=this.options.smooth,e=!1,i=!0;return void 0!==this.edgeType&&((this.edgeType instanceof y&&!0===t.enabled&&"dynamic"===t.type||this.edgeType instanceof g&&!0===t.enabled&&"cubicBezier"===t.type||this.edgeType instanceof b&&!0===t.enabled&&"dynamic"!==t.type&&"cubicBezier"!==t.type||this.edgeType instanceof _&&!1===t.type.enabled)&&(i=!1),!0===i&&(e=this.cleanup())),!0===i?!0===t.enabled?"dynamic"===t.type?(e=!0,this.edgeType=new y(this.options,this.body,this.labelModule)):"cubicBezier"===t.type?this.edgeType=new g(this.options,this.body,this.labelModule):this.edgeType=new b(this.options,this.body,this.labelModule):this.edgeType=new _(this.options,this.body,this.labelModule):this.edgeType.setOptions(this.options),e}},{key:"connect",value:function(){this.disconnect(),this.from=this.body.nodes[this.fromId]||void 0,this.to=this.body.nodes[this.toId]||void 0,this.connected=void 0!==this.from&&void 0!==this.to,!0===this.connected?(this.from.attachEdge(this),this.to.attachEdge(this)):(this.from&&this.from.detachEdge(this),this.to&&this.to.detachEdge(this)),this.edgeType.connect()}},{key:"disconnect",value:function(){this.from&&(this.from.detachEdge(this),this.from=void 0),this.to&&(this.to.detachEdge(this),this.to=void 0),this.connected=!1}},{key:"getTitle",value:function(){return this.title}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"setValueRange",value:function(t,e,i){if(void 0!==this.options.value){var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min;if(!0===this.options.scaling.label.enabled){var s=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+o*s}this.options.width=this.options.scaling.min+o*n}else this.options.width=this.baseWidth,this.options.font.size=this.baseFontSize;this._setInteractionWidths(),this.updateLabelModule()}},{key:"_setInteractionWidths",value:function(){"function"==typeof this.options.hoverWidth?this.edgeType.hoverWidth=this.options.hoverWidth(this.options.width):this.edgeType.hoverWidth=this.options.hoverWidth+this.options.width,"function"==typeof this.options.selectionWidth?this.edgeType.selectionWidth=this.options.selectionWidth(this.options.width):this.edgeType.selectionWidth=this.options.selectionWidth+this.options.width}},{key:"draw",value:function(t){var e=this.getFormattingValues();if(!e.hidden){var i=this.edgeType.getViaNode(),o={};this.edgeType.fromPoint=this.edgeType.from,this.edgeType.toPoint=this.edgeType.to,e.fromArrow&&(o.from=this.edgeType.getArrowData(t,"from",i,this.selected,this.hover,e),!1===e.arrowStrikethrough&&(this.edgeType.fromPoint=o.from.core)),e.toArrow&&(o.to=this.edgeType.getArrowData(t,"to",i,this.selected,this.hover,e),!1===e.arrowStrikethrough&&(this.edgeType.toPoint=o.to.core)),e.middleArrow&&(o.middle=this.edgeType.getArrowData(t,"middle",i,this.selected,this.hover,e)),this.edgeType.drawLine(t,e,this.selected,this.hover,i),this.drawArrows(t,o,e),this.drawLabel(t,i)}}},{key:"drawArrows",value:function(t,e,i){i.fromArrow&&this.edgeType.drawArrowHead(t,i,this.selected,this.hover,e.from),i.middleArrow&&this.edgeType.drawArrowHead(t,i,this.selected,this.hover,e.middle),i.toArrow&&this.edgeType.drawArrowHead(t,i,this.selected,this.hover,e.to)}},{key:"drawLabel",value:function(t,e){if(void 0!==this.options.label){var i=this.from,o=this.to;if(this.labelModule.differentState(this.selected,this.hover)&&this.labelModule.getTextSize(t,this.selected,this.hover),i.id!=o.id){this.labelModule.pointToSelf=!1;var n=this.edgeType.getPoint(.5,e);t.save();var s=this._getRotation(t);0!=s.angle&&(t.translate(s.x,s.y),t.rotate(s.angle)),this.labelModule.draw(t,n.x,n.y,this.selected,this.hover),t.restore()}else{this.labelModule.pointToSelf=!0;var r,a,h=this.options.selfReferenceSize;i.shape.width>i.shape.height?(r=i.x+.5*i.shape.width,a=i.y-h):(r=i.x+h,a=i.y-.5*i.shape.height),n=this._pointOnCircle(r,a,h,.125),this.labelModule.draw(t,n.x,n.y,this.selected,this.hover)}}}},{key:"getItemsOnPoint",value:function(t){var e=[];if(this.labelModule.visible()){var i=this._getRotation();v.pointInRect(this.labelModule.getSize(),t,i)&&e.push({edgeId:this.id,labelId:0})}var o={left:t.x,top:t.y};return this.isOverlappingWith(o)&&e.push({edgeId:this.id}),e}},{key:"isOverlappingWith",value:function(t){if(this.connected){var e=this.from.x,i=this.from.y,o=this.to.x,n=this.to.y,s=t.left,r=t.top;return this.edgeType.getDistanceToEdge(e,i,o,n,s,r)<10}return!1}},{key:"_getRotation",value:function(t){var e=this.edgeType.getViaNode(),i=this.edgeType.getPoint(.5,e);void 0!==t&&this.labelModule.calculateLabelSize(t,this.selected,this.hover,i.x,i.y);var o={x:i.x,y:this.labelModule.size.yLine,angle:0};if(!this.labelModule.visible())return o;if("horizontal"===this.options.font.align)return o;var n=this.from.y-this.to.y,s=this.from.x-this.to.x,r=Math.atan2(n,s);return(r<-1&&s<0||r>0&&s<0)&&(r+=Math.PI),o.angle=r,o}},{key:"_pointOnCircle",value:function(t,e,i,o){var n=2*o*Math.PI;return{x:t+i*Math.cos(n),y:e-i*Math.sin(n)}}},{key:"select",value:function(){this.selected=!0}},{key:"unselect",value:function(){this.selected=!1}},{key:"cleanup",value:function(){return this.edgeType.cleanup()}},{key:"remove",value:function(){this.cleanup(),this.disconnect(),delete this.body.edges[this.id]}},{key:"endPointsValid",value:function(){return void 0!==this.body.nodes[this.fromId]&&void 0!==this.body.nodes[this.toId]}}],[{key:"parseOptions",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=["arrowStrikethrough","id","from","hidden","hoverWidth","labelHighlightBold","length","line","opacity","physics","scaling","selectionWidth","selfReferenceSize","to","title","value","width","font","chosen","widthConstraint"];if(f.selectiveDeepExtend(r,t,e,i),v.isValidLabel(e.label)?t.label=e.label:t.label=void 0,f.mergeOptions(t,e,"smooth",o),f.mergeOptions(t,e,"shadow",o),void 0!==e.dashes&&null!==e.dashes?t.dashes=e.dashes:!0===i&&null===e.dashes&&(t.dashes=(0,d.default)(o.dashes)),void 0!==e.scaling&&null!==e.scaling?(void 0!==e.scaling.min&&(t.scaling.min=e.scaling.min),void 0!==e.scaling.max&&(t.scaling.max=e.scaling.max),f.mergeOptions(t.scaling,e.scaling,"label",o.scaling)):!0===i&&null===e.scaling&&(t.scaling=(0,d.default)(o.scaling)),void 0!==e.arrows&&null!==e.arrows)if("string"==typeof e.arrows){var h=e.arrows.toLowerCase();t.arrows.to.enabled=-1!=h.indexOf("to"),t.arrows.middle.enabled=-1!=h.indexOf("middle"),t.arrows.from.enabled=-1!=h.indexOf("from")}else{if("object"!==(0,a.default)(e.arrows))throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:"+(0,s.default)(e.arrows));f.mergeOptions(t.arrows,e.arrows,"to",o.arrows),f.mergeOptions(t.arrows,e.arrows,"middle",o.arrows),f.mergeOptions(t.arrows,e.arrows,"from",o.arrows)}else!0===i&&null===e.arrows&&(t.arrows=(0,d.default)(o.arrows));if(void 0!==e.color&&null!==e.color){var l=e.color,u=t.color;if(n)f.deepExtend(u,o.color,!1,i);else for(var c in u)u.hasOwnProperty(c)&&delete u[c];if(f.isString(u))u.color=u,u.highlight=u,u.hover=u,u.inherit=!1,void 0===l.opacity&&(u.opacity=1);else{var p=!1;void 0!==l.color&&(u.color=l.color,p=!0),void 0!==l.highlight&&(u.highlight=l.highlight,p=!0),void 0!==l.hover&&(u.hover=l.hover,p=!0),void 0!==l.inherit&&(u.inherit=l.inherit),void 0!==l.opacity&&(u.opacity=Math.min(1,Math.max(0,l.opacity))),!0===p?u.inherit=!1:void 0===u.inherit&&(u.inherit="from")}}else!0===i&&null===e.color&&(t.color=f.bridgeObject(o.color));!0===i&&null===e.font&&(t.font=f.bridgeObject(o.font))}}]),t}();e.default=w},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(118),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_findBorderPositionBezier",value:function(t,e){var i,o,n,s,r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._getViaCoordinates(),h=0,d=0,l=1,u=this.to,c=!1;for(t.id===this.from.id&&(u=this.from,c=!0);d<=l&&h<10;){var p=.5*(d+l);if(i=this.getPoint(p,a),o=Math.atan2(u.y-i.y,u.x-i.x),n=u.distanceToBorder(e,o),s=Math.sqrt(Math.pow(i.x-u.x,2)+Math.pow(i.y-u.y,2)),r=n-s,Math.abs(r)<.2)break;r<0?!1===c?d=p:l=p:!1===c?l=p:d=p,h++}return i.t=p,i}},{key:"_getDistanceToBezierEdge",value:function(t,e,i,o,n,s,r){var a=1e9,h=void 0,d=void 0,l=void 0,u=void 0,c=void 0,p=t,f=e;for(d=1;d<10;d++)l=.1*d,u=Math.pow(1-l,2)*t+2*l*(1-l)*r.x+Math.pow(l,2)*i,c=Math.pow(1-l,2)*e+2*l*(1-l)*r.y+Math.pow(l,2)*o,d>0&&(h=this._getDistanceToLine(p,f,u,c,n,s),a=h<a?h:a),p=u,f=c;return a}},{key:"_bezierCurve",value:function(t,e,i,o){var n=void 0!==i&&void 0!==i.x,s=void 0!==o&&void 0!==o.x;t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),n&&s?t.bezierCurveTo(i.x,i.y,o.x,o.y,this.toPoint.x,this.toPoint.y):n?t.quadraticCurveTo(i.x,i.y,this.toPoint.x,this.toPoint.y):t.lineTo(this.toPoint.x,this.toPoint.y),this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(2),d=function(){function t(){(0,s.default)(this,t)}return(0,a.default)(t,null,[{key:"getRange",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,s=1e9,r=-1e9;if(i.length>0)for(var a=0;a<i.length;a++)e=t[i[a]],s>e.shape.boundingBox.left&&(s=e.shape.boundingBox.left),r<e.shape.boundingBox.right&&(r=e.shape.boundingBox.right),o>e.shape.boundingBox.top&&(o=e.shape.boundingBox.top),n<e.shape.boundingBox.bottom&&(n=e.shape.boundingBox.bottom);return 1e9===s&&-1e9===r&&1e9===o&&-1e9===n&&(o=0,n=0,s=0,r=0),{minX:s,maxX:r,minY:o,maxY:n}}},{key:"getRangeCore",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,s=1e9,r=-1e9;if(i.length>0)for(var a=0;a<i.length;a++)e=t[i[a]],s>e.x&&(s=e.x),r<e.x&&(r=e.x),o>e.y&&(o=e.y),n<e.y&&(n=e.y);return 1e9===s&&-1e9===r&&1e9===o&&-1e9===n&&(o=0,n=0,s=0,r=0),{minX:s,maxX:r,minY:o,maxY:n}}},{key:"findCenter",value:function(t){return{x:.5*(t.maxX+t.minX),y:.5*(t.maxY+t.minY)}}},{key:"cloneOptions",value:function(t,e){var i={};return void 0===e||"node"===e?(h.deepExtend(i,t.options,!0),i.x=t.x,i.y=t.y,i.amountOfConnections=t.edges.length):h.deepExtend(i,t.options,!0),i}}]),t}();e.default=d},function(t,e,i){t.exports={default:i(124),__esModule:!0}},function(t,e,i){var o=i(50);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,i){var o=i(52),n=i(17),s=i(83),r=i(26),a=i(22),h=i(31),d=i(129),l=i(59),u=i(85),c=i(13)("iterator"),p=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,e,i,m,v,g,y){d(i,e,m);var b,_,w,x=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},k=e+" Iterator",S="values"==v,D=!1,M=t.prototype,C=M[c]||M["@@iterator"]||v&&M[v],O=C||x(v),E=v?S?x("entries"):O:void 0,T="Array"==e?M.entries||C:C;if(T&&(w=u(T.call(new t)))!==Object.prototype&&w.next&&(l(w,k,!0),o||a(w,c)||r(w,c,f)),S&&C&&"values"!==C.name&&(D=!0,O=function(){return C.call(this)}),o&&!y||!p&&!D&&M[c]||r(M,c,O),h[e]=O,h[k]=f,v)if(b={values:S?O:x("values"),keys:g?O:x("keys"),entries:E},y)for(_ in b)_ in M||s(M,_,b[_]);else n(n.P+n.F*(p||D),e,b);return b}},function(t,e,i){var o=i(128);t.exports=function(t,e,i){if(o(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,o){return t.call(e,i,o)};case 3:return function(i,o,n){return t.call(e,i,o,n)}}return function(){return t.apply(e,arguments)}}},function(t,e,i){t.exports=!i(21)&&!i(28)(function(){return 7!=Object.defineProperty(i(82)("div"),"a",{get:function(){return 7}}).a})},function(t,e,i){var o=i(32),n=i(18).document,s=o(n)&&o(n.createElement);t.exports=function(t){return s?n.createElement(t):{}}},function(t,e,i){t.exports=i(26)},function(t,e,i){var o=i(22),n=i(25),s=i(131)(!1),r=i(56)("IE_PROTO");t.exports=function(t,e){var i,a=n(t),h=0,d=[];for(i in a)i!=r&&o(a,i)&&d.push(i);for(;e.length>h;)o(a,i=e[h++])&&(~s(d,i)||d.push(i));return d}},function(t,e,i){var o=i(22),n=i(41),s=i(56)("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=n(t),o(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},function(t,e,i){var o=i(50),n=i(13)("toStringTag"),s="Arguments"==o(function(){return arguments}()),r=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,i,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=r(e=Object(t),n))?i:s?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,i){var o=i(17),n=i(7),s=i(28);t.exports=function(t,e){var i=(n.Object||{})[t]||Object[t],r={};r[t]=e(i),o(o.S+o.F*s(function(){i(1)}),"Object",r)}},function(t,e,i){var o=i(84),n=i(58).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,n)}},function(t,e,i){var o=i(42),n=i(39),s=i(25),r=i(53),a=i(22),h=i(81),d=Object.getOwnPropertyDescriptor;e.f=i(21)?d:function(t,e){if(t=s(t),e=r(e,!0),h)try{return d(t,e)}catch(t){}if(a(t,e))return n(!o.f.call(t,e),t[e])}},function(t,e,i){t.exports={default:i(162),__esModule:!0}},function(t,e,i){function o(t,e){this.x=void 0!==t?t:0,this.y=void 0!==e?e:0}t.exports=o},function(t,e,i){function o(t,e){if(void 0===t)throw new Error("No container element defined");if(this.container=t,this.visible=!e||void 0==e.visible||e.visible,this.visible){this.frame=document.createElement("DIV"),this.frame.style.width="100%",this.frame.style.position="relative",this.container.appendChild(this.frame),this.frame.prev=document.createElement("INPUT"),this.frame.prev.type="BUTTON",this.frame.prev.value="Prev",this.frame.appendChild(this.frame.prev),this.frame.play=document.createElement("INPUT"),this.frame.play.type="BUTTON",this.frame.play.value="Play",this.frame.appendChild(this.frame.play),this.frame.next=document.createElement("INPUT"),this.frame.next.type="BUTTON",this.frame.next.value="Next",this.frame.appendChild(this.frame.next),this.frame.bar=document.createElement("INPUT"),this.frame.bar.type="BUTTON",this.frame.bar.style.position="absolute",this.frame.bar.style.border="1px solid red",this.frame.bar.style.width="100px",this.frame.bar.style.height="6px",this.frame.bar.style.borderRadius="2px",this.frame.bar.style.MozBorderRadius="2px",this.frame.bar.style.border="1px solid #7F7F7F",this.frame.bar.style.backgroundColor="#E5E5E5",this.frame.appendChild(this.frame.bar),this.frame.slide=document.createElement("INPUT"),this.frame.slide.type="BUTTON",this.frame.slide.style.margin="0px",this.frame.slide.value=" ",this.frame.slide.style.position="relative",this.frame.slide.style.left="-100px",this.frame.appendChild(this.frame.slide);var i=this;this.frame.slide.onmousedown=function(t){i._onMouseDown(t)},this.frame.prev.onclick=function(t){i.prev(t)},this.frame.play.onclick=function(t){i.togglePlay(t)},this.frame.next.onclick=function(t){i.next(t)}}this.onChangeCallback=void 0,this.values=[],this.index=void 0,this.playTimeout=void 0,this.playInterval=1e3,this.playLoop=!0}var n=i(2);o.prototype.prev=function(){var t=this.getIndex();t>0&&(t--,this.setIndex(t))},o.prototype.next=function(){var t=this.getIndex();t<this.values.length-1&&(t++,this.setIndex(t))},o.prototype.playNext=function(){var t=new Date,e=this.getIndex();e<this.values.length-1?(e++,this.setIndex(e)):this.playLoop&&(e=0,this.setIndex(e));var i=new Date,o=i-t,n=Math.max(this.playInterval-o,0),s=this;this.playTimeout=setTimeout(function(){s.playNext()},n)},o.prototype.togglePlay=function(){void 0===this.playTimeout?this.play():this.stop()},o.prototype.play=function(){this.playTimeout||(this.playNext(),this.frame&&(this.frame.play.value="Stop"))},o.prototype.stop=function(){clearInterval(this.playTimeout),this.playTimeout=void 0,this.frame&&(this.frame.play.value="Play")},o.prototype.setOnChangeCallback=function(t){this.onChangeCallback=t},o.prototype.setPlayInterval=function(t){this.playInterval=t},o.prototype.getPlayInterval=function(){return this.playInterval},o.prototype.setPlayLoop=function(t){this.playLoop=t},o.prototype.onChange=function(){void 0!==this.onChangeCallback&&this.onChangeCallback()},o.prototype.redraw=function(){if(this.frame){this.frame.bar.style.top=this.frame.clientHeight/2-this.frame.bar.offsetHeight/2+"px",this.frame.bar.style.width=this.frame.clientWidth-this.frame.prev.clientWidth-this.frame.play.clientWidth-this.frame.next.clientWidth-30+"px";var t=this.indexToLeft(this.index);this.frame.slide.style.left=t+"px"}},o.prototype.setValues=function(t){this.values=t,this.values.length>0?this.setIndex(0):this.index=void 0},o.prototype.setIndex=function(t){if(!(t<this.values.length))throw new Error("Index out of range");this.index=t,this.redraw(),this.onChange()},o.prototype.getIndex=function(){return this.index},o.prototype.get=function(){return this.values[this.index]},o.prototype._onMouseDown=function(t){if(t.which?1===t.which:1===t.button){this.startClientX=t.clientX,this.startSlideX=parseFloat(this.frame.slide.style.left),this.frame.style.cursor="move";var e=this;this.onmousemove=function(t){e._onMouseMove(t)},this.onmouseup=function(t){e._onMouseUp(t)},n.addEventListener(document,"mousemove",this.onmousemove),n.addEventListener(document,"mouseup",this.onmouseup),n.preventDefault(t)}},o.prototype.leftToIndex=function(t){var e=parseFloat(this.frame.bar.style.width)-this.frame.slide.clientWidth-10,i=t-3,o=Math.round(i/e*(this.values.length-1));return o<0&&(o=0),o>this.values.length-1&&(o=this.values.length-1),o},o.prototype.indexToLeft=function(t){var e=parseFloat(this.frame.bar.style.width)-this.frame.slide.clientWidth-10;return t/(this.values.length-1)*e+3},o.prototype._onMouseMove=function(t){var e=t.clientX-this.startClientX,i=this.startSlideX+e,o=this.leftToIndex(i);this.setIndex(o),n.preventDefault()},o.prototype._onMouseUp=function(t){this.frame.style.cursor="auto",n.removeEventListener(document,"mousemove",this.onmousemove),n.removeEventListener(document,"mouseup",this.onmouseup),n.preventDefault()},t.exports=o},function(t,e,i){function o(t,e,i,o){this._start=0,this._end=0,this._step=1,this.prettyStep=!0,this.precision=5,this._current=0,this.setRange(t,e,i,o)}o.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.prototype.setRange=function(t,e,i,o){if(!this.isNumeric(t))throw new Error("Parameter 'start' is not numeric; value: "+t);if(!this.isNumeric(e))throw new Error("Parameter 'end' is not numeric; value: "+t);if(!this.isNumeric(i))throw new Error("Parameter 'step' is not numeric; value: "+t);this._start=t||0,this._end=e||0,this.setStep(i,o)},o.prototype.setStep=function(t,e){void 0===t||t<=0||(void 0!==e&&(this.prettyStep=e),!0===this.prettyStep?this._step=o.calculatePrettyStep(t):this._step=t)},o.calculatePrettyStep=function(t){var e=function(t){return Math.log(t)/Math.LN10},i=Math.pow(10,Math.round(e(t))),o=2*Math.pow(10,Math.round(e(t/2))),n=5*Math.pow(10,Math.round(e(t/5))),s=i;return Math.abs(o-t)<=Math.abs(s-t)&&(s=o),Math.abs(n-t)<=Math.abs(s-t)&&(s=n),s<=0&&(s=1),s},o.prototype.getCurrent=function(){return parseFloat(this._current.toPrecision(this.precision))},o.prototype.getStep=function(){return this._step},o.prototype.start=function(t){void 0===t&&(t=!1),this._current=this._start-this._start%this._step,t&&this.getCurrent()<this._start&&this.next()},o.prototype.next=function(){this._current+=this._step},o.prototype.end=function(){return this._current>this._end},t.exports=o},function(t,e,i){function o(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function n(t){return void 0===t||""===t||"string"!=typeof t?t:t.charAt(0).toUpperCase()+t.slice(1)}function s(t,e){return void 0===t||""===t?e:t+n(e)}function r(t,e,i,o){for(var n,r,a=0;a<i.length;++a)n=i[a],r=s(o,n),e[r]=t[n]}function a(t,e,i,o){for(var n,r,a=0;a<i.length;++a)n=i[a],void 0!==t[n]&&(r=s(o,n),e[r]=t[n])}function h(t,e){if(void 0===t||o(t))throw new Error("No DEFAULTS passed");if(void 0===e)throw new Error("No dst passed");C=t,r(t,e,D),r(t,e,M,"default"),l(t,e),e.margin=10,e.showGrayBottom=!1,e.showTooltip=!1,e.onclick_callback=null,e.eye=new x(0,0,-1)}function d(t,e){if(void 0!==t){if(void 0===e)throw new Error("No dst passed");if(void 0===C||o(C))throw new Error("DEFAULTS not set for module Settings");a(t,e,D),a(t,e,M,"default"),l(t,e)}}function l(t,e){void 0!==t.backgroundColor&&m(t.backgroundColor,e),v(t.dataColor,e),f(t.style,e),u(t.showLegend,e),g(t.cameraPosition,e),void 0!==t.tooltip&&(e.showTooltip=t.tooltip),void 0!=t.onclick&&(e.onclick_callback=t.onclick),void 0!==t.tooltipStyle&&_.selectiveDeepExtend(["tooltipStyle"],e,t)}function u(t,e){if(void 0===t){if(void 0===C.showLegend){var i=e.style===k.DOTCOLOR||e.style===k.DOTSIZE;e.showLegend=i}}else e.showLegend=t}function c(t){var e=S[t];return void 0===e?-1:e}function p(t){var e=!1;for(var i in k)if(k[i]===t){e=!0;break}return e}function f(t,e){if(void 0!==t){var i;if("string"==typeof t){if(-1===(i=c(t)))throw new Error("Style '"+t+"' is invalid")}else{if(!p(t))throw new Error("Style '"+t+"' is invalid");i=t}e.style=i}}function m(t,e){var i="white",o="gray",n=1;if("string"==typeof t)i=t,o="none",n=0;else{if("object"!==(void 0===t?"undefined":(0,b.default)(t)))throw new Error("Unsupported type of backgroundColor");void 0!==t.fill&&(i=t.fill),void 0!==t.stroke&&(o=t.stroke),void 0!==t.strokeWidth&&(n=t.strokeWidth)}e.frame.style.backgroundColor=i,e.frame.style.borderColor=o,e.frame.style.borderWidth=n+"px",e.frame.style.borderStyle="solid"}function v(t,e){void 0!==t&&(void 0===e.dataColor&&(e.dataColor={}),"string"==typeof t?(e.dataColor.fill=t,e.dataColor.stroke=t):(t.fill&&(e.dataColor.fill=t.fill),t.stroke&&(e.dataColor.stroke=t.stroke),void 0!==t.strokeWidth&&(e.dataColor.strokeWidth=t.strokeWidth)))}function g(t,e){var i=t;void 0!==i&&(void 0===e.camera&&(e.camera=new w),e.camera.setArmRotation(i.horizontal,i.vertical),e.camera.setArmLength(i.distance))}var y=i(6),b=function(t){return t&&t.__esModule?t:{default:t}}(y),_=i(2),w=i(95),x=i(34),k={BAR:0,BARCOLOR:1,BARSIZE:2,DOT:3,DOTLINE:4,DOTCOLOR:5,DOTSIZE:6,GRID:7,LINE:8,SURFACE:9},S={dot:k.DOT,"dot-line":k.DOTLINE,"dot-color":k.DOTCOLOR,"dot-size":k.DOTSIZE,line:k.LINE,grid:k.GRID,surface:k.SURFACE,bar:k.BAR,"bar-color":k.BARCOLOR,"bar-size":k.BARSIZE},D=["width","height","filterLabel","legendLabel","xLabel","yLabel","zLabel","xValueLabel","yValueLabel","zValueLabel","showXAxis","showYAxis","showZAxis","showGrid","showPerspective","showShadow","keepAspectRatio","verticalRatio","dotSizeRatio","dotSizeMinFraction","dotSizeMaxFraction","showAnimationControls","animationInterval","animationPreload","animationAutoStart","axisColor","gridColor","xCenter","yCenter"],M=["xBarWidth","yBarWidth","valueMin","valueMax","xMin","xMax","xStep","yMin","yMax","yStep","zMin","zMax","zStep"],C=void 0;t.exports.STYLE=k,t.exports.setDefaults=h,t.exports.setOptions=d,t.exports.setCameraPosition=g},function(t,e,i){function o(){this.armLocation=new r,this.armRotation={},this.armRotation.horizontal=0,this.armRotation.vertical=0,this.armLength=1.7,this.cameraOffset=new r,this.offsetMultiplier=.6,this.cameraLocation=new r,this.cameraRotation=new r(.5*Math.PI,0,0),this.calculateCameraOrientation()}var n=i(165),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(34);o.prototype.setOffset=function(t,e){var i=Math.abs,o=s.default,n=this.offsetMultiplier,r=this.armLength*n;i(t)>r&&(t=o(t)*r),i(e)>r&&(e=o(e)*r),this.cameraOffset.x=t,this.cameraOffset.y=e,this.calculateCameraOrientation()},o.prototype.getOffset=function(){return this.cameraOffset},o.prototype.setArmLocation=function(t,e,i){this.armLocation.x=t,this.armLocation.y=e,this.armLocation.z=i,this.calculateCameraOrientation()},o.prototype.setArmRotation=function(t,e){void 0!==t&&(this.armRotation.horizontal=t),void 0!==e&&(this.armRotation.vertical=e,this.armRotation.vertical<0&&(this.armRotation.vertical=0),this.armRotation.vertical>.5*Math.PI&&(this.armRotation.vertical=.5*Math.PI)),void 0===t&&void 0===e||this.calculateCameraOrientation()},o.prototype.getArmRotation=function(){var t={};return t.horizontal=this.armRotation.horizontal,t.vertical=this.armRotation.vertical,t},o.prototype.setArmLength=function(t){void 0!==t&&(this.armLength=t,this.armLength<.71&&(this.armLength=.71),this.armLength>5&&(this.armLength=5),this.setOffset(this.cameraOffset.x,this.cameraOffset.y),this.calculateCameraOrientation())},
o.prototype.getArmLength=function(){return this.armLength},o.prototype.getCameraLocation=function(){return this.cameraLocation},o.prototype.getCameraRotation=function(){return this.cameraRotation},o.prototype.calculateCameraOrientation=function(){this.cameraLocation.x=this.armLocation.x-this.armLength*Math.sin(this.armRotation.horizontal)*Math.cos(this.armRotation.vertical),this.cameraLocation.y=this.armLocation.y-this.armLength*Math.cos(this.armRotation.horizontal)*Math.cos(this.armRotation.vertical),this.cameraLocation.z=this.armLocation.z+this.armLength*Math.sin(this.armRotation.vertical),this.cameraRotation.x=Math.PI/2-this.armRotation.vertical,this.cameraRotation.y=0,this.cameraRotation.z=-this.armRotation.horizontal;var t=this.cameraRotation.x,e=this.cameraRotation.z,i=this.cameraOffset.x,o=this.cameraOffset.y,n=Math.sin,s=Math.cos;this.cameraLocation.x=this.cameraLocation.x+i*s(e)+o*-n(e)*s(t),this.cameraLocation.y=this.cameraLocation.y+i*n(e)+o*s(e)*s(t),this.cameraLocation.z=this.cameraLocation.z+o*n(t)},t.exports=o},function(t,e,i){function o(t,e,i){this.dataGroup=t,this.column=e,this.graph=i,this.index=void 0,this.value=void 0,this.values=t.getDistinctValues(this.column),this.values.length>0&&this.selectValue(0),this.dataPoints=[],this.loaded=!1,this.onLoadCallback=void 0,i.animationPreload?(this.loaded=!1,this.loadInBackground()):this.loaded=!0}var n=i(12);o.prototype.isLoaded=function(){return this.loaded},o.prototype.getLoadedProgress=function(){for(var t=this.values.length,e=0;this.dataPoints[e];)e++;return Math.round(e/t*100)},o.prototype.getLabel=function(){return this.graph.filterLabel},o.prototype.getColumn=function(){return this.column},o.prototype.getSelectedValue=function(){if(void 0!==this.index)return this.values[this.index]},o.prototype.getValues=function(){return this.values},o.prototype.getValue=function(t){if(t>=this.values.length)throw new Error("Index out of range");return this.values[t]},o.prototype._getDataPoints=function(t){if(void 0===t&&(t=this.index),void 0===t)return[];var e;if(this.dataPoints[t])e=this.dataPoints[t];else{var i={};i.column=this.column,i.value=this.values[t];var o=new n(this.dataGroup.getDataSet(),{filter:function(t){return t[i.column]==i.value}}).get();e=this.dataGroup._getDataPoints(o),this.dataPoints[t]=e}return e},o.prototype.setOnLoadCallback=function(t){this.onLoadCallback=t},o.prototype.selectValue=function(t){if(t>=this.values.length)throw new Error("Index out of range");this.index=t,this.value=this.values[t]},o.prototype.loadInBackground=function(t){void 0===t&&(t=0);var e=this.graph.frame;if(t<this.values.length){void 0===e.progress&&(e.progress=document.createElement("DIV"),e.progress.style.position="absolute",e.progress.style.color="gray",e.appendChild(e.progress));var i=this.getLoadedProgress();e.progress.innerHTML="Loading animation... "+i+"%",e.progress.style.bottom="60px",e.progress.style.left="10px";var o=this;setTimeout(function(){o.loadInBackground(t+1)},10),this.loaded=!1}else this.loaded=!0,void 0!==e.progress&&(e.removeChild(e.progress),e.progress=void 0),this.onLoadCallback&&this.onLoadCallback()},t.exports=o},function(t,e,i){function o(t){this.active=!1,this.dom={container:t},this.dom.overlay=document.createElement("div"),this.dom.overlay.className="vis-overlay",this.dom.container.appendChild(this.dom.overlay),this.hammer=a(this.dom.overlay),this.hammer.on("tap",this._onTapOverlay.bind(this));var e=this;["tap","doubletap","press","pinch","pan","panstart","panmove","panend"].forEach(function(t){e.hammer.on(t,function(t){t.stopPropagation()})}),document&&document.body&&(this.onClick=function(i){n(i.target,t)||e.deactivate()},document.body.addEventListener("click",this.onClick)),void 0!==this.keycharm&&this.keycharm.destroy(),this.keycharm=s(),this.escListener=this.deactivate.bind(this)}function n(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1}var s=i(35),r=i(44),a=i(10),h=i(2);r(o.prototype),o.current=null,o.prototype.destroy=function(){this.deactivate(),this.dom.overlay.parentNode.removeChild(this.dom.overlay),this.onClick&&document.body.removeEventListener("click",this.onClick),this.hammer.destroy(),this.hammer=null},o.prototype.activate=function(){o.current&&o.current.deactivate(),o.current=this,this.active=!0,this.dom.overlay.style.display="none",h.addClassName(this.dom.container,"vis-active"),this.emit("change"),this.emit("activate"),this.keycharm.bind("esc",this.escListener)},o.prototype.deactivate=function(){this.active=!1,this.dom.overlay.style.display="",h.removeClassName(this.dom.container,"vis-active"),this.keycharm.unbind("esc",this.escListener),this.emit("change"),this.emit("deactivate")},o.prototype._onTapOverlay=function(t){this.activate(),t.stopPropagation()},t.exports=o},function(t,e,i){e.en={current:"current",time:"time"},e.en_EN=e.en,e.en_US=e.en,e.it={current:"attuale",time:"tempo"},e.it_IT=e.it,e.it_CH=e.it,e.nl={current:"huidige",time:"tijd"},e.nl_NL=e.nl,e.nl_BE=e.nl,e.de={current:"Aktuelle",time:"Zeit"},e.de_DE=e.de,e.fr={current:"actuel",time:"heure"},e.fr_FR=e.fr,e.fr_CA=e.fr,e.fr_BE=e.fr,e.es={current:"corriente",time:"hora"},e.es_ES=e.es},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){this.body=t,this.defaultOptions={type:null,orientation:{item:"bottom"},align:"auto",stack:!0,stackSubgroups:!0,groupOrderSwap:function(t,e,i){var o=e.order;e.order=t.order,t.order=o},groupOrder:"order",selectable:!0,multiselect:!1,itemsAlwaysDraggable:{item:!1,range:!1},editable:{updateTime:!1,updateGroup:!1,add:!1,remove:!1,overrideItems:!1},groupEditable:{order:!1,add:!1,remove:!1},snap:p.snap,onDropObjectOnItem:function(t,e,i){i(e)},onAdd:function(t,e){e(t)},onUpdate:function(t,e){e(t)},onMove:function(t,e){e(t)},onRemove:function(t,e){e(t)},onMoving:function(t,e){e(t)},onAddGroup:function(t,e){e(t)},onMoveGroup:function(t,e){e(t)},onRemoveGroup:function(t,e){e(t)},margin:{item:{horizontal:10,vertical:10},axis:20},showTooltips:!0,tooltip:{followMouse:!1,overflowMethod:"flip"},tooltipOnItemUpdateTime:!1},this.options=l.extend({},this.defaultOptions),this.options.rtl=e.rtl,this.itemOptions={type:{start:"Date",end:"Date"}},this.conversion={toScreen:t.util.toScreen,toTime:t.util.toTime},this.dom={},this.props={},this.hammer=null;var i=this;this.itemsData=null,this.groupsData=null,this.itemListeners={add:function(t,e,o){i._onAdd(e.items)},update:function(t,e,o){i._onUpdate(e.items)},remove:function(t,e,o){i._onRemove(e.items)}},this.groupListeners={add:function(t,e,o){if(i._onAddGroups(e.items),i.groupsData&&i.groupsData.length>0){var n=i.groupsData.getDataSet();n.get().forEach(function(t){if(t.nestedGroups){0!=t.showNested&&(t.showNested=!0);var e=[];t.nestedGroups.forEach(function(i){var o=n.get(i);o&&(o.nestedInGroup=t.id,0==t.showNested&&(o.visible=!1),e=e.concat(o))}),n.update(e,o)}})}},update:function(t,e,o){i._onUpdateGroups(e.items)},remove:function(t,e,o){i._onRemoveGroups(e.items)}},this.items={},this.groups={},this.groupIds=[],this.selection=[],this.popup=null,this.touchParams={},this.groupTouchParams={},this._create(),this.setOptions(e)}var s=i(29),r=o(s),a=i(6),h=o(a),d=i(10),l=i(2),u=i(11),c=i(12),p=i(66),f=i(16),m=i(68),v=i(69),g=i(101),y=i(102),b=i(70),_=i(103),w=i(104).default,x="__ungrouped__",k="__background__";n.prototype=new f,n.types={background:_,box:g,range:b,point:y},n.prototype._create=function(){var t=document.createElement("div");t.className="vis-itemset",t["timeline-itemset"]=this,this.dom.frame=t;var e=document.createElement("div");e.className="vis-background",t.appendChild(e),this.dom.background=e;var i=document.createElement("div");i.className="vis-foreground",t.appendChild(i),this.dom.foreground=i;var o=document.createElement("div");o.className="vis-axis",this.dom.axis=o;var n=document.createElement("div");n.className="vis-labelset",this.dom.labelSet=n,this._updateUngrouped();var s=new v(k,null,this);s.show(),this.groups[k]=s,this.hammer=new d(this.body.dom.centerContainer),this.hammer.on("hammer.input",function(t){t.isFirst&&this._onTouch(t)}.bind(this)),this.hammer.on("panstart",this._onDragStart.bind(this)),this.hammer.on("panmove",this._onDrag.bind(this)),this.hammer.on("panend",this._onDragEnd.bind(this)),this.hammer.get("pan").set({threshold:5,direction:d.DIRECTION_HORIZONTAL}),this.hammer.on("tap",this._onSelectItem.bind(this)),this.hammer.on("press",this._onMultiSelectItem.bind(this)),this.hammer.on("doubletap",this._onAddItem.bind(this)),this.options.rtl?this.groupHammer=new d(this.body.dom.rightContainer):this.groupHammer=new d(this.body.dom.leftContainer),this.groupHammer.on("tap",this._onGroupClick.bind(this)),this.groupHammer.on("panstart",this._onGroupDragStart.bind(this)),this.groupHammer.on("panmove",this._onGroupDrag.bind(this)),this.groupHammer.on("panend",this._onGroupDragEnd.bind(this)),this.groupHammer.get("pan").set({threshold:5,direction:d.DIRECTION_VERTICAL}),this.body.dom.centerContainer.addEventListener("mouseover",this._onMouseOver.bind(this)),this.body.dom.centerContainer.addEventListener("mouseout",this._onMouseOut.bind(this)),this.body.dom.centerContainer.addEventListener("mousemove",this._onMouseMove.bind(this)),this.body.dom.centerContainer.addEventListener("contextmenu",this._onDragEnd.bind(this)),this.body.dom.centerContainer.addEventListener("mousewheel",this._onMouseWheel.bind(this)),this.show()},n.prototype.setOptions=function(t){if(t){var e=["type","rtl","align","order","stack","stackSubgroups","selectable","multiselect","multiselectPerGroup","groupOrder","dataAttributes","template","groupTemplate","visibleFrameTemplate","hide","snap","groupOrderSwap","showTooltips","tooltip","tooltipOnItemUpdateTime"];l.selectiveExtend(e,this.options,t),"itemsAlwaysDraggable"in t&&("boolean"==typeof t.itemsAlwaysDraggable?(this.options.itemsAlwaysDraggable.item=t.itemsAlwaysDraggable,this.options.itemsAlwaysDraggable.range=!1):"object"===(0,h.default)(t.itemsAlwaysDraggable)&&(l.selectiveExtend(["item","range"],this.options.itemsAlwaysDraggable,t.itemsAlwaysDraggable),this.options.itemsAlwaysDraggable.item||(this.options.itemsAlwaysDraggable.range=!1))),"orientation"in t&&("string"==typeof t.orientation?this.options.orientation.item="top"===t.orientation?"top":"bottom":"object"===(0,h.default)(t.orientation)&&"item"in t.orientation&&(this.options.orientation.item=t.orientation.item)),"margin"in t&&("number"==typeof t.margin?(this.options.margin.axis=t.margin,this.options.margin.item.horizontal=t.margin,this.options.margin.item.vertical=t.margin):"object"===(0,h.default)(t.margin)&&(l.selectiveExtend(["axis"],this.options.margin,t.margin),"item"in t.margin&&("number"==typeof t.margin.item?(this.options.margin.item.horizontal=t.margin.item,this.options.margin.item.vertical=t.margin.item):"object"===(0,h.default)(t.margin.item)&&l.selectiveExtend(["horizontal","vertical"],this.options.margin.item,t.margin.item)))),"editable"in t&&("boolean"==typeof t.editable?(this.options.editable.updateTime=t.editable,this.options.editable.updateGroup=t.editable,this.options.editable.add=t.editable,this.options.editable.remove=t.editable,this.options.editable.overrideItems=!1):"object"===(0,h.default)(t.editable)&&l.selectiveExtend(["updateTime","updateGroup","add","remove","overrideItems"],this.options.editable,t.editable)),"groupEditable"in t&&("boolean"==typeof t.groupEditable?(this.options.groupEditable.order=t.groupEditable,this.options.groupEditable.add=t.groupEditable,this.options.groupEditable.remove=t.groupEditable):"object"===(0,h.default)(t.groupEditable)&&l.selectiveExtend(["order","add","remove"],this.options.groupEditable,t.groupEditable));["onDropObjectOnItem","onAdd","onUpdate","onRemove","onMove","onMoving","onAddGroup","onMoveGroup","onRemoveGroup"].forEach(function(e){var i=t[e];if(i){if(!(i instanceof Function))throw new Error("option "+e+" must be a function "+e+"(item, callback)");this.options[e]=i}}.bind(this)),this.markDirty()}},n.prototype.markDirty=function(t){this.groupIds=[],t&&t.refreshItems&&l.forEach(this.items,function(t){t.dirty=!0,t.displayed&&t.redraw()})},n.prototype.destroy=function(){this.hide(),this.setItems(null),this.setGroups(null),this.hammer=null,this.body=null,this.conversion=null},n.prototype.hide=function(){this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame),this.dom.axis.parentNode&&this.dom.axis.parentNode.removeChild(this.dom.axis),this.dom.labelSet.parentNode&&this.dom.labelSet.parentNode.removeChild(this.dom.labelSet)},n.prototype.show=function(){this.dom.frame.parentNode||this.body.dom.center.appendChild(this.dom.frame),this.dom.axis.parentNode||this.body.dom.backgroundVertical.appendChild(this.dom.axis),this.dom.labelSet.parentNode||(this.options.rtl?this.body.dom.right.appendChild(this.dom.labelSet):this.body.dom.left.appendChild(this.dom.labelSet))},n.prototype.setSelection=function(t){var e,i,o,n;for(void 0==t&&(t=[]),Array.isArray(t)||(t=[t]),e=0,i=this.selection.length;e<i;e++)o=this.selection[e],(n=this.items[o])&&n.unselect();for(this.selection=[],e=0,i=t.length;e<i;e++)o=t[e],(n=this.items[o])&&(this.selection.push(o),n.select())},n.prototype.getSelection=function(){return this.selection.concat([])},n.prototype.getVisibleItems=function(){var t,e,i=this.body.range.getRange();this.options.rtl?(t=this.body.util.toScreen(i.start),e=this.body.util.toScreen(i.end)):(e=this.body.util.toScreen(i.start),t=this.body.util.toScreen(i.end));var o=[];for(var n in this.groups)if(this.groups.hasOwnProperty(n))for(var s=this.groups[n],r=s.isVisible?s.visibleItems:[],a=0;a<r.length;a++){var h=r[a];this.options.rtl?h.right<e&&h.right+h.width>t&&o.push(h.id):h.left<t&&h.left+h.width>e&&o.push(h.id)}return o},n.prototype._deselect=function(t){for(var e=this.selection,i=0,o=e.length;i<o;i++)if(e[i]==t){e.splice(i,1);break}},n.prototype.redraw=function(){var t=this.options.margin,e=this.body.range,i=l.option.asSize,o=this.options,n=o.orientation.item,s=!1,r=this.dom.frame;this.props.top=this.body.domProps.top.height+this.body.domProps.border.top,this.options.rtl?this.props.right=this.body.domProps.right.width+this.body.domProps.border.right:this.props.left=this.body.domProps.left.width+this.body.domProps.border.left,r.className="vis-itemset",s=this._orderGroups()||s;var a=e.end-e.start,h=a!=this.lastVisibleInterval||this.props.width!=this.props.lastWidth,d=e.start!=this.lastRangeStart,u=o.stack!=this.lastStack,c=o.stackSubgroups!=this.lastStackSubgroups,p=h||d||u||c;this.lastVisibleInterval=a,this.lastRangeStart=e.start,this.lastStack=o.stack,this.lastStackSubgroups=o.stackSubgroups,this.props.lastWidth=this.props.width;var f=this._firstGroup(),m={item:t.item,axis:t.axis},v={item:t.item,axis:t.item.vertical/2},g=0,y=t.axis+t.item.vertical;this.groups[k].redraw(e,v,p);var b={},_=0;if(l.forEach(this.groups,function(t,i){if(i!==k){var o=t==f?m:v;b[i]=t.redraw(e,o,p,!0),_=b[i].length}}),_>0){for(var w={},x=0;x<_;x++)l.forEach(b,function(t,e){w[e]=t[x]()});l.forEach(this.groups,function(t,e){if(e!==k){var i=w[e];s=i||s,g+=t.height}}),g=Math.max(g,y)}return g=Math.max(g,y),r.style.height=i(g),this.props.width=r.offsetWidth,this.props.height=g,this.dom.axis.style.top=i("top"==n?this.body.domProps.top.height+this.body.domProps.border.top:this.body.domProps.top.height+this.body.domProps.centerContainer.height),this.options.rtl?this.dom.axis.style.right="0":this.dom.axis.style.left="0",this.initialItemSetDrawn=!0,s=this._isResized()||s},n.prototype._firstGroup=function(){var t="top"==this.options.orientation.item?0:this.groupIds.length-1,e=this.groupIds[t];return this.groups[e]||this.groups[x]||null},n.prototype._updateUngrouped=function(){var t,e,i=this.groups[x];if(this.groupsData){if(i){i.hide(),delete this.groups[x];for(e in this.items)if(this.items.hasOwnProperty(e)){t=this.items[e],t.parent&&t.parent.remove(t);var o=this._getGroupId(t.data),n=this.groups[o];n&&n.add(t)||t.hide()}}}else if(!i){i=new m(null,null,this),this.groups[x]=i;for(e in this.items)this.items.hasOwnProperty(e)&&(t=this.items[e],i.add(t));i.show()}},n.prototype.getLabelSet=function(){return this.dom.labelSet},n.prototype.setItems=function(t){var e,i=this,o=this.itemsData;if(t){if(!(t instanceof u||t instanceof c))throw new TypeError("Data must be an instance of DataSet or DataView");this.itemsData=t}else this.itemsData=null;if(o&&(l.forEach(this.itemListeners,function(t,e){o.off(e,t)}),e=o.getIds(),this._onRemove(e)),this.itemsData){var n=this.id;l.forEach(this.itemListeners,function(t,e){i.itemsData.on(e,t,n)}),e=this.itemsData.getIds(),this._onAdd(e),this._updateUngrouped()}this.body.emitter.emit("_change",{queue:!0})},n.prototype.getItems=function(){return this.itemsData},n.prototype.setGroups=function(t){var e,i=this;if(this.groupsData&&(l.forEach(this.groupListeners,function(t,e){i.groupsData.off(e,t)}),e=this.groupsData.getIds(),this.groupsData=null,this._onRemoveGroups(e)),t){if(!(t instanceof u||t instanceof c))throw new TypeError("Data must be an instance of DataSet or DataView");this.groupsData=t}else this.groupsData=null;if(this.groupsData){var o=this.groupsData;this.groupsData instanceof c&&(o=this.groupsData.getDataSet()),o.get().forEach(function(t){t.nestedGroups&&t.nestedGroups.forEach(function(e){var i=o.get(e);i.nestedInGroup=t.id,0==t.showNested&&(i.visible=!1),o.update(i)})});var n=this.id;l.forEach(this.groupListeners,function(t,e){i.groupsData.on(e,t,n)}),e=this.groupsData.getIds(),this._onAddGroups(e)}this._updateUngrouped(),this._order(),this.body.emitter.emit("_change",{queue:!0})},n.prototype.getGroups=function(){return this.groupsData},n.prototype.removeItem=function(t){var e=this.itemsData.get(t),i=this.itemsData.getDataSet();e&&this.options.onRemove(e,function(e){e&&i.remove(t)})},n.prototype._getType=function(t){return t.type||this.options.type||(t.end?"range":"box")},n.prototype._getGroupId=function(t){return"background"==this._getType(t)&&void 0==t.group?k:this.groupsData?t.group:x},n.prototype._onUpdate=function(t){var e=this;t.forEach(function(t){var i,o=e.itemsData.get(t,e.itemOptions),s=e.items[t],r=o?e._getType(o):null,a=n.types[r];if(s&&(a&&s instanceof a?e._updateItem(s,o):(i=s.selected,e._removeItem(s),s=null)),!s&&o){if(!a)throw"rangeoverflow"==r?new TypeError('Item type "rangeoverflow" is deprecated. Use css styling instead: .vis-item.vis-range .vis-item-content {overflow: visible;}'):new TypeError('Unknown item type "'+r+'"');s=new a(o,e.conversion,e.options),s.id=t,e._addItem(s),i&&(this.selection.push(t),s.select())}}.bind(this)),this._order(),this.body.emitter.emit("_change",{queue:!0})},n.prototype._onAdd=n.prototype._onUpdate,n.prototype._onRemove=function(t){var e=0,i=this;t.forEach(function(t){var o=i.items[t];o&&(e++,i._removeItem(o))}),e&&(this._order(),this.body.emitter.emit("_change",{queue:!0}))},n.prototype._order=function(){l.forEach(this.groups,function(t){t.order()})},n.prototype._onUpdateGroups=function(t){this._onAddGroups(t)},n.prototype._onAddGroups=function(t){var e=this;t.forEach(function(t){var i=e.groupsData.get(t),o=e.groups[t];if(o)o.setData(i);else{if(t==x||t==k)throw new Error("Illegal group id. "+t+" is a reserved id.");var n=(0,r.default)(e.options);l.extend(n,{height:null}),o=new m(t,i,e),e.groups[t]=o;for(var s in e.items)if(e.items.hasOwnProperty(s)){var a=e.items[s];a.data.group==t&&o.add(a)}o.order(),o.show()}}),this.body.emitter.emit("_change",{queue:!0})},n.prototype._onRemoveGroups=function(t){var e=this.groups;t.forEach(function(t){var i=e[t];i&&(i.hide(),delete e[t])}),this.markDirty(),this.body.emitter.emit("_change",{queue:!0})},n.prototype._orderGroups=function(){if(this.groupsData){var t=this.groupsData.getIds({order:this.options.groupOrder});t=this._orderNestedGroups(t);var e=!l.equalArray(t,this.groupIds);if(e){var i=this.groups;t.forEach(function(t){i[t].hide()}),t.forEach(function(t){i[t].show()}),this.groupIds=t}return e}return!1},n.prototype._orderNestedGroups=function(t){var e=[];return t.forEach(function(t){var i=this.groupsData.get(t);if(i.nestedInGroup||e.push(t),i.nestedGroups){var o=this.groupsData.get({filter:function(e){return e.nestedInGroup==t},order:this.options.groupOrder}),n=o.map(function(t){return t.id});e=e.concat(n)}},this),e},n.prototype._addItem=function(t){this.items[t.id]=t;var e=this._getGroupId(t.data),i=this.groups[e];i?i&&i.data&&i.data.showNested&&(t.groupShowing=!0):t.groupShowing=!1,i&&i.add(t)},n.prototype._updateItem=function(t,e){t.setData(e);var i=this._getGroupId(t.data),o=this.groups[i];o?o&&o.data&&o.data.showNested&&(t.groupShowing=!0):t.groupShowing=!1},n.prototype._removeItem=function(t){t.hide(),delete this.items[t.id];var e=this.selection.indexOf(t.id);-1!=e&&this.selection.splice(e,1),t.parent&&t.parent.remove(t)},n.prototype._constructByEndArray=function(t){for(var e=[],i=0;i<t.length;i++)t[i]instanceof b&&e.push(t[i]);return e},n.prototype._onTouch=function(t){this.touchParams.item=this.itemFromTarget(t),this.touchParams.dragLeftItem=t.target.dragLeftItem||!1,this.touchParams.dragRightItem=t.target.dragRightItem||!1,this.touchParams.itemProps=null},n.prototype._getGroupIndex=function(t){for(var e=0;e<this.groupIds.length;e++)if(t==this.groupIds[e])return e},n.prototype._onDragStart=function(t){if(!this.touchParams.itemIsDragging){var e,i=this.touchParams.item||null,o=this;if(i&&(i.selected||this.options.itemsAlwaysDraggable.item)){if(this.options.editable.overrideItems&&!this.options.editable.updateTime&&!this.options.editable.updateGroup)return;if(null!=i.editable&&!i.editable.updateTime&&!i.editable.updateGroup&&!this.options.editable.overrideItems)return;var n=this.touchParams.dragLeftItem,s=this.touchParams.dragRightItem;if(this.touchParams.itemIsDragging=!0,this.touchParams.selectedItem=i,n)e={item:n,initialX:t.center.x,dragLeft:!0,data:this._cloneItemData(i.data)},this.touchParams.itemProps=[e];else if(s)e={item:s,initialX:t.center.x,dragRight:!0,data:this._cloneItemData(i.data)},this.touchParams.itemProps=[e];else if(this.options.editable.add&&(t.srcEvent.ctrlKey||t.srcEvent.metaKey))this._onDragStartAddItem(t);else{this.groupIds.length<1&&this.redraw();var r=this._getGroupIndex(i.data.group),a=this.options.itemsAlwaysDraggable.item&&!i.selected?[i.id]:this.getSelection();this.touchParams.itemProps=a.map(function(e){var i=o.items[e],n=o._getGroupIndex(i.data.group);return{item:i,initialX:t.center.x,groupOffset:r-n,data:this._cloneItemData(i.data)}}.bind(this))}t.stopPropagation()}else this.options.editable.add&&(t.srcEvent.ctrlKey||t.srcEvent.metaKey)&&this._onDragStartAddItem(t)}},n.prototype._onDragStartAddItem=function(t){var e,i,o=this.options.snap||null;this.options.rtl?(e=l.getAbsoluteRight(this.dom.frame),i=e-t.center.x+10):(e=l.getAbsoluteLeft(this.dom.frame),i=t.center.x-e-10);var n=this.body.util.toTime(i),s=this.body.util.getScale(),r=this.body.util.getStep(),a=o?o(n,s,r):n,h=a,d={type:"range",start:a,end:h,content:"new item"},u=l.randomUUID();d[this.itemsData._fieldId]=u;var c=this.groupFromTarget(t);c&&(d.group=c.groupId);var p=new b(d,this.conversion,this.options);p.id=u,p.data=this._cloneItemData(d),this._addItem(p),this.touchParams.selectedItem=p;var f={item:p,initialX:t.center.x,data:p.data};this.options.rtl?f.dragLeft=!0:f.dragRight=!0,this.touchParams.itemProps=[f],t.stopPropagation()},n.prototype._onDrag=function(t){if(this.touchParams.itemProps){t.stopPropagation();var e,i=this,o=this.options.snap||null;e=this.options.rtl?this.body.dom.root.offsetLeft+this.body.domProps.right.width:this.body.dom.root.offsetLeft+this.body.domProps.left.width;var n=this.body.util.getScale(),s=this.body.util.getStep(),r=this.touchParams.selectedItem,a=(this.options.editable.overrideItems||null==r.editable)&&this.options.editable.updateGroup||!this.options.editable.overrideItems&&null!=r.editable&&r.editable.updateGroup,h=null;if(a&&r&&void 0!=r.data.group){var d=i.groupFromTarget(t);d&&(h=this._getGroupIndex(d.groupId))}this.touchParams.itemProps.forEach(function(d){var u,c,p,f,m,v=i.body.util.toTime(t.center.x-e),g=i.body.util.toTime(d.initialX-e);u=this.options.rtl?-(v-g):v-g;var y=this._cloneItemData(d.item.data);if(null==d.item.editable||d.item.editable.updateTime||d.item.editable.updateGroup||i.options.editable.overrideItems){if((this.options.editable.overrideItems||null==r.editable)&&this.options.editable.updateTime||!this.options.editable.overrideItems&&null!=r.editable&&r.editable.updateTime)if(d.dragLeft)this.options.rtl?void 0!=y.end&&(p=l.convert(d.data.end,"Date"),m=new Date(p.valueOf()+u),y.end=o?o(m,n,s):m):void 0!=y.start&&(c=l.convert(d.data.start,"Date"),f=new Date(c.valueOf()+u),y.start=o?o(f,n,s):f);else if(d.dragRight)this.options.rtl?void 0!=y.start&&(c=l.convert(d.data.start,"Date"),f=new Date(c.valueOf()+u),y.start=o?o(f,n,s):f):void 0!=y.end&&(p=l.convert(d.data.end,"Date"),m=new Date(p.valueOf()+u),y.end=o?o(m,n,s):m);else if(void 0!=y.start)if(c=l.convert(d.data.start,"Date").valueOf(),f=new Date(c+u),void 0!=y.end){p=l.convert(d.data.end,"Date");var b=p.valueOf()-c.valueOf();y.start=o?o(f,n,s):f,y.end=new Date(y.start.valueOf()+b)}else y.start=o?o(f,n,s):f;if(a&&!d.dragLeft&&!d.dragRight&&null!=h&&void 0!=y.group){var _=h-d.groupOffset;_=Math.max(0,_),_=Math.min(i.groupIds.length-1,_),y.group=i.groupIds[_]}y=this._cloneItemData(y),i.options.onMoving(y,function(t){t&&d.item.setData(this._cloneItemData(t,"Date"))}.bind(this))}}.bind(this)),this.body.emitter.emit("_change")}},n.prototype._moveToGroup=function(t,e){var i=this.groups[e];if(i&&i.groupId!=t.data.group){var o=t.parent;o.remove(t),o.order(),t.data.group=i.groupId,i.add(t),i.order()}},n.prototype._onDragEnd=function(t){if(this.touchParams.itemIsDragging=!1,this.touchParams.itemProps){t.stopPropagation();var e=this,i=this.itemsData.getDataSet(),o=this.touchParams.itemProps;this.touchParams.itemProps=null,o.forEach(function(t){var o=t.item.id;if(null!=e.itemsData.get(o,e.itemOptions)){var n=this._cloneItemData(t.item.data);e.options.onMove(n,function(n){n?(n[i._fieldId]=o,i.update(n)):(t.item.setData(t.data),e.body.emitter.emit("_change"))})}else e.options.onAdd(t.item.data,function(i){e._removeItem(t.item),i&&e.itemsData.getDataSet().add(i),e.body.emitter.emit("_change")})}.bind(this))}},n.prototype._onGroupClick=function(t){var e=this.groupFromTarget(t);if(e&&e.nestedGroups){var i=this.groupsData.getDataSet(),o=i.get(e.groupId);void 0==o.showNested&&(o.showNested=!0),o.showNested=!o.showNested;var n=i.get(e.nestedGroups).map(function(t){return t.visible=o.showNested,t});if(i.update(n.concat(o)),o.showNested)l.removeClassName(e.dom.label,"collapsed"),l.addClassName(e.dom.label,"expanded");else{l.removeClassName(e.dom.label,"expanded");var s=this.options.rtl?"collapsed-rtl":"collapsed";l.addClassName(e.dom.label,s)}}},n.prototype._onGroupDragStart=function(t){this.options.groupEditable.order&&(this.groupTouchParams.group=this.groupFromTarget(t),this.groupTouchParams.group&&(t.stopPropagation(),this.groupTouchParams.originalOrder=this.groupsData.getIds({order:this.options.groupOrder})))},n.prototype._onGroupDrag=function(t){if(this.options.groupEditable.order&&this.groupTouchParams.group){t.stopPropagation();var e=this.groupsData;this.groupsData instanceof c&&(e=this.groupsData.getDataSet());var i=this.groupFromTarget(t);if(i&&i.height!=this.groupTouchParams.group.height){var o=i.top<this.groupTouchParams.group.top,n=t.center?t.center.y:t.clientY,s=l.getAbsoluteTop(i.dom.foreground),r=this.groupTouchParams.group.height;if(o){if(s+r<n)return}else{if(s+i.height-r>n)return}}if(i&&i!=this.groupTouchParams.group){var a=e.get(i.groupId),h=e.get(this.groupTouchParams.group.groupId);h&&a&&(this.options.groupOrderSwap(h,a,e),e.update(h),e.update(a));var d=e.getIds({order:this.options.groupOrder});if(!l.equalArray(d,this.groupTouchParams.originalOrder))for(var u=this.groupTouchParams.originalOrder,p=this.groupTouchParams.group.groupId,f=Math.min(u.length,d.length),m=0,v=0,g=0;m<f;){for(;m+v<f&&m+g<f&&d[m+v]==u[m+g];)m++;if(m+v>=f)break;if(d[m+v]==p)v=1;else if(u[m+g]==p)g=1;else{var y=d.indexOf(u[m+g]),b=e.get(d[m+v]),_=e.get(u[m+g]);this.options.groupOrderSwap(b,_,e),e.update(b),e.update(_);var w=d[m+v];d[m+v]=u[m+g],d[y]=w,m++}}}}},n.prototype._onGroupDragEnd=function(t){if(this.options.groupEditable.order&&this.groupTouchParams.group){t.stopPropagation();var e=this,i=e.groupTouchParams.group.groupId,o=e.groupsData.getDataSet(),n=l.extend({},o.get(i));e.options.onMoveGroup(n,function(t){if(t)t[o._fieldId]=i,o.update(t);else{var n=o.getIds({order:e.options.groupOrder});if(!l.equalArray(n,e.groupTouchParams.originalOrder))for(var s=e.groupTouchParams.originalOrder,r=Math.min(s.length,n.length),a=0;a<r;){for(;a<r&&n[a]==s[a];)a++;if(a>=r)break;var h=n.indexOf(s[a]),d=o.get(n[a]),u=o.get(s[a]);e.options.groupOrderSwap(d,u,o),o.update(d),o.update(u);var c=n[a];n[a]=s[a],n[h]=c,a++}}}),e.body.emitter.emit("groupDragged",{groupId:i})}},n.prototype._onSelectItem=function(t){if(this.options.selectable){var e=t.srcEvent&&(t.srcEvent.ctrlKey||t.srcEvent.metaKey),i=t.srcEvent&&t.srcEvent.shiftKey;if(e||i)return void this._onMultiSelectItem(t);var o=this.getSelection(),n=this.itemFromTarget(t),s=n?[n.id]:[];this.setSelection(s);var r=this.getSelection();(r.length>0||o.length>0)&&this.body.emitter.emit("select",{items:r,event:t})}},n.prototype._onMouseOver=function(t){var e=this.itemFromTarget(t);if(e){if(e!==this.itemFromRelatedTarget(t)){var i=e.getTitle();if(this.options.showTooltips&&i){null==this.popup&&(this.popup=new w(this.body.dom.root,this.options.tooltip.overflowMethod||"flip")),this.popup.setText(i);var o=this.body.dom.centerContainer;this.popup.setPosition(t.clientX-l.getAbsoluteLeft(o)+o.offsetLeft,t.clientY-l.getAbsoluteTop(o)+o.offsetTop),this.popup.show()}else null!=this.popup&&this.popup.hide();this.body.emitter.emit("itemover",{item:e.id,event:t})}}},n.prototype._onMouseOut=function(t){var e=this.itemFromTarget(t);if(e){e!==this.itemFromRelatedTarget(t)&&(null!=this.popup&&this.popup.hide(),this.body.emitter.emit("itemout",{item:e.id,event:t}))}},n.prototype._onMouseMove=function(t){if(this.itemFromTarget(t)&&this.options.showTooltips&&this.options.tooltip.followMouse&&this.popup&&!this.popup.hidden){var e=this.body.dom.centerContainer;this.popup.setPosition(t.clientX-l.getAbsoluteLeft(e)+e.offsetLeft,t.clientY-l.getAbsoluteTop(e)+e.offsetTop),this.popup.show()}},n.prototype._onMouseWheel=function(t){this.touchParams.itemIsDragging&&this._onDragEnd(t)},n.prototype._onUpdateItem=function(t){if(this.options.selectable&&this.options.editable.add){var e=this;if(t){var i=e.itemsData.get(t.id);this.options.onUpdate(i,function(t){t&&e.itemsData.getDataSet().update(t)})}}},n.prototype._onDropObjectOnItem=function(t){var e=this.itemFromTarget(t),i=JSON.parse(t.dataTransfer.getData("text"));this.options.onDropObjectOnItem(i,e)},n.prototype._onAddItem=function(t){if(this.options.selectable&&this.options.editable.add){var e,i,o=this,n=this.options.snap||null;this.options.rtl?(e=l.getAbsoluteRight(this.dom.frame),i=e-t.center.x):(e=l.getAbsoluteLeft(this.dom.frame),i=t.center.x-e);var s,r,a=this.body.util.toTime(i),h=this.body.util.getScale(),d=this.body.util.getStep();"drop"==t.type?(r=JSON.parse(t.dataTransfer.getData("text")),r.content=r.content?r.content:"new item",r.start=r.start?r.start:n?n(a,h,d):a,r.type=r.type||"box",r[this.itemsData._fieldId]=r.id||l.randomUUID(),"range"!=r.type||r.end||(s=this.body.util.toTime(i+this.props.width/5),r.end=n?n(s,h,d):s)):(r={start:n?n(a,h,d):a,content:"new item"},r[this.itemsData._fieldId]=l.randomUUID(),"range"===this.options.type&&(s=this.body.util.toTime(i+this.props.width/5),r.end=n?n(s,h,d):s));var u=this.groupFromTarget(t);u&&(r.group=u.groupId),r=this._cloneItemData(r),this.options.onAdd(r,function(e){e&&(o.itemsData.getDataSet().add(e),"drop"==t.type&&o.setSelection([e.id]))})}},n.prototype._onMultiSelectItem=function(t){if(this.options.selectable){var e=this.itemFromTarget(t);if(e){
var i=this.options.multiselect?this.getSelection():[];if((t.srcEvent&&t.srcEvent.shiftKey||!1)&&this.options.multiselect){var o=this.itemsData.get(e.id).group,s=void 0;this.options.multiselectPerGroup&&i.length>0&&(s=this.itemsData.get(i[0]).group),this.options.multiselectPerGroup&&void 0!=s&&s!=o||i.push(e.id);var r=n._getItemRange(this.itemsData.get(i,this.itemOptions));if(!this.options.multiselectPerGroup||s==o){i=[];for(var a in this.items)if(this.items.hasOwnProperty(a)){var h=this.items[a],d=h.data.start,l=void 0!==h.data.end?h.data.end:d;!(d>=r.min&&l<=r.max)||this.options.multiselectPerGroup&&s!=this.itemsData.get(h.id).group||h instanceof _||i.push(h.id)}}}else{var u=i.indexOf(e.id);-1==u?i.push(e.id):i.splice(u,1)}this.setSelection(i),this.body.emitter.emit("select",{items:this.getSelection(),event:t})}}},n._getItemRange=function(t){var e=null,i=null;return t.forEach(function(t){(null==i||t.start<i)&&(i=t.start),void 0!=t.end?(null==e||t.end>e)&&(e=t.end):(null==e||t.start>e)&&(e=t.start)}),{min:i,max:e}},n.prototype.itemFromElement=function(t){for(var e=t;e;){if(e.hasOwnProperty("timeline-item"))return e["timeline-item"];e=e.parentNode}return null},n.prototype.itemFromTarget=function(t){return this.itemFromElement(t.target)},n.prototype.itemFromRelatedTarget=function(t){return this.itemFromElement(t.relatedTarget)},n.prototype.groupFromTarget=function(t){var e=t.center?t.center.y:t.clientY,i=this.groupIds;i.length<=0&&this.groupsData&&(i=this.groupsData.getIds({order:this.options.groupOrder}));for(var o=0;o<i.length;o++){var n=i[o],s=this.groups[n],r=s.dom.foreground,a=l.getAbsoluteTop(r);if(e>a&&e<a+r.offsetHeight)return s;if("top"===this.options.orientation.item){if(o===this.groupIds.length-1&&e>a)return s}else if(0===o&&e<a+r.offset)return s}return null},n.itemSetFromTarget=function(t){for(var e=t.target;e;){if(e.hasOwnProperty("timeline-itemset"))return e["timeline-itemset"];e=e.parentNode}return null},n.prototype._cloneItemData=function(t,e){var i=l.extend({},t);return e||(e=this.itemsData.getDataSet()._options.type),void 0!=i.start&&(i.start=l.convert(i.start,e&&e.start||"Date")),void 0!=i.end&&(i.end=l.convert(i.end,e&&e.end||"Date")),i},t.exports=n},function(t,e,i){e.orderByStart=function(t){t.sort(function(t,e){return t.data.start-e.data.start})},e.orderByEnd=function(t){t.sort(function(t,e){return("end"in t.data?t.data.end:t.data.start)-("end"in e.data?e.data.end:e.data.start)})},e.stack=function(t,i,o){if(o)for(var n=0;n<t.length;n++)t[n].top=null;for(var n=0;n<t.length;n++){var s=t[n];if(s.stack&&null===s.top){s.top=i.axis;do{for(var r=null,a=0,h=t.length;a<h;a++){var d=t[a];if(null!==d.top&&d!==s&&d.stack&&e.collision(s,d,i.item,d.options.rtl)){r=d;break}}null!=r&&(s.top=r.top+r.height+i.item.vertical)}while(r)}}},e.substack=function(t,i,o){for(var n=0;n<t.length;n++)t[n].top=null;var s=o.height;for(n=0;n<t.length;n++){var r=t[n];if(r.stack&&null===r.top){r.top=r.baseTop;do{for(var a=null,h=0,d=t.length;h<d;h++){var l=t[h];if(null!==l.top&&l!==r&&e.collision(r,l,i.item,l.options.rtl)){a=l;break}}null!=a&&(r.top=a.top+a.height+i.item.vertical),r.top+r.height>s&&(s=r.top+r.height)}while(a)}}o.height=s-o.top+.5*i.item.vertical},e.nostack=function(t,i,o,n){for(var s=0;s<t.length;s++)if(void 0==t[s].data.subgroup)t[s].top=i.item.vertical;else if(void 0!==t[s].data.subgroup&&n){var r=0;for(var a in o)o.hasOwnProperty(a)&&1==o[a].visible&&o[a].index<o[t[s].data.subgroup].index&&(r+=o[a].height,o[t[s].data.subgroup].top=r);t[s].top=r+.5*i.item.vertical}n||e.stackSubgroups(t,i,o)},e.stackSubgroups=function(t,i,o){for(var n in o)if(o.hasOwnProperty(n)){o[n].top=0;do{var s=null;for(var r in o)if(null!==o[r].top&&r!==n&&o[n].index>o[r].index&&e.collisionByTimes(o[n],o[r])){s=o[r];break}null!=s&&(o[n].top=s.top+s.height)}while(s)}for(var a=0;a<t.length;a++)void 0!==t[a].data.subgroup&&(t[a].top=o[t[a].data.subgroup].top+.5*i.item.vertical)},e.stackSubgroupsWithInnerStack=function(t,i,o){var n=!1,s=[];for(var r in o)o[r].hasOwnProperty("index")?s[o[r].index]=r:s.push(r);for(var a=0;a<s.length;a++)if(r=s[a],o.hasOwnProperty(r)){n=n||o[r].stack,o[r].top=0;for(var h in o)o[h].visible&&o[r].index>o[h].index&&(o[r].top+=o[h].height);for(var d=t[r],l=0;l<d.length;l++)void 0!==d[l].data.subgroup&&(d[l].top=o[d[l].data.subgroup].top+.5*i.item.vertical,o[r].stack&&(d[l].baseTop=d[l].top));n&&o[r].stack&&e.substack(t[r],i,o[r])}},e.collision=function(t,e,i,o){return o?t.right-i.horizontal+.001<e.right+e.width&&t.right+t.width+i.horizontal-.001>e.right&&t.top-i.vertical+.001<e.top+e.height&&t.top+t.height+i.vertical-.001>e.top:t.left-i.horizontal+.001<e.left+e.width&&t.left+t.width+i.horizontal-.001>e.left&&t.top-i.vertical+.001<e.top+e.height&&t.top+t.height+i.vertical-.001>e.top},e.collisionByTimes=function(t,e){return t.start<=e.start&&t.end>=e.start&&t.top<e.top+e.height&&t.top+t.height>e.top||e.start<=t.start&&e.end>=t.start&&e.top<t.top+t.height&&e.top+e.height>t.top}},function(t,e,i){function o(t,e,i){if(this.props={dot:{width:0,height:0},line:{width:0,height:0}},this.options=i,t&&void 0==t.start)throw new Error('Property "start" missing in item '+t);n.call(this,t,e,i)}var n=i(38);o.prototype=new n(null,null,null),o.prototype.isVisible=function(t){var e=this.options.align,i=this.width*t.getMillisecondsPerPixel();return"right"==e?this.data.start.getTime()>t.start&&this.data.start.getTime()-i<t.end:"left"==e?this.data.start.getTime()+i>t.start&&this.data.start.getTime()<t.end:this.data.start.getTime()+i/2>t.start&&this.data.start.getTime()-i/2<t.end},o.prototype._createDomElement=function(){this.dom||(this.dom={},this.dom.box=document.createElement("DIV"),this.dom.content=document.createElement("DIV"),this.dom.content.className="vis-item-content",this.dom.box.appendChild(this.dom.content),this.dom.line=document.createElement("DIV"),this.dom.line.className="vis-line",this.dom.dot=document.createElement("DIV"),this.dom.dot.className="vis-dot",this.dom.box["timeline-item"]=this,this.dirty=!0)},o.prototype._appendDomElement=function(){if(!this.parent)throw new Error("Cannot redraw item: no parent attached");if(!this.dom.box.parentNode){var t=this.parent.dom.foreground;if(!t)throw new Error("Cannot redraw item: parent has no foreground container element");t.appendChild(this.dom.box)}if(!this.dom.line.parentNode){var e=this.parent.dom.background;if(!e)throw new Error("Cannot redraw item: parent has no background container element");e.appendChild(this.dom.line)}if(!this.dom.dot.parentNode){var i=this.parent.dom.axis;if(!e)throw new Error("Cannot redraw item: parent has no axis container element");i.appendChild(this.dom.dot)}this.displayed=!0},o.prototype._updateDirtyDomComponents=function(){if(this.dirty){this._updateContents(this.dom.content),this._updateDataAttributes(this.dom.box),this._updateStyle(this.dom.box);var t=this.editable.updateTime||this.editable.updateGroup,e=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"")+(t?" vis-editable":" vis-readonly");this.dom.box.className="vis-item vis-box"+e,this.dom.line.className="vis-item vis-line"+e,this.dom.dot.className="vis-item vis-dot"+e}},o.prototype._getDomComponentsSizes=function(){return{previous:{right:this.dom.box.style.right,left:this.dom.box.style.left},dot:{height:this.dom.dot.offsetHeight,width:this.dom.dot.offsetWidth},line:{width:this.dom.line.offsetWidth},box:{width:this.dom.box.offsetWidth,height:this.dom.box.offsetHeight}}},o.prototype._updateDomComponentsSizes=function(t){this.options.rtl?this.dom.box.style.right="0px":this.dom.box.style.left="0px",this.props.dot.height=t.dot.height,this.props.dot.width=t.dot.width,this.props.line.width=t.line.width,this.width=t.box.width,this.height=t.box.height,this.options.rtl?this.dom.box.style.right=t.previous.right:this.dom.box.style.left=t.previous.left,this.dirty=!1},o.prototype._repaintDomAdditionals=function(){this._repaintOnItemUpdateTimeTooltip(this.dom.box),this._repaintDragCenter(),this._repaintDeleteButton(this.dom.box)},o.prototype.redraw=function(t){var e,i=[this._createDomElement.bind(this),this._appendDomElement.bind(this),this._updateDirtyDomComponents.bind(this),function(){this.dirty&&(e=this._getDomComponentsSizes())}.bind(this),function(){this.dirty&&this._updateDomComponentsSizes.bind(this)(e)}.bind(this),this._repaintDomAdditionals.bind(this)];if(t)return i;var o;return i.forEach(function(t){o=t()}),o},o.prototype.show=function(){this.displayed||this.redraw()},o.prototype.hide=function(){if(this.displayed){var t=this.dom;t.box.parentNode&&t.box.parentNode.removeChild(t.box),t.line.parentNode&&t.line.parentNode.removeChild(t.line),t.dot.parentNode&&t.dot.parentNode.removeChild(t.dot),this.displayed=!1}},o.prototype.repositionX=function(){var t=this.conversion.toScreen(this.data.start),e=this.options.align;"right"==e?this.options.rtl?(this.right=t-this.width,this.dom.box.style.right=this.right+"px",this.dom.line.style.right=t-this.props.line.width+"px",this.dom.dot.style.right=t-this.props.line.width/2-this.props.dot.width/2+"px"):(this.left=t-this.width,this.dom.box.style.left=this.left+"px",this.dom.line.style.left=t-this.props.line.width+"px",this.dom.dot.style.left=t-this.props.line.width/2-this.props.dot.width/2+"px"):"left"==e?this.options.rtl?(this.right=t,this.dom.box.style.right=this.right+"px",this.dom.line.style.right=t+"px",this.dom.dot.style.right=t+this.props.line.width/2-this.props.dot.width/2+"px"):(this.left=t,this.dom.box.style.left=this.left+"px",this.dom.line.style.left=t+"px",this.dom.dot.style.left=t+this.props.line.width/2-this.props.dot.width/2+"px"):this.options.rtl?(this.right=t-this.width/2,this.dom.box.style.right=this.right+"px",this.dom.line.style.right=t-this.props.line.width+"px",this.dom.dot.style.right=t-this.props.dot.width/2+"px"):(this.left=t-this.width/2,this.dom.box.style.left=this.left+"px",this.dom.line.style.left=t-this.props.line.width/2+"px",this.dom.dot.style.left=t-this.props.dot.width/2+"px")},o.prototype.repositionY=function(){var t=this.options.orientation.item,e=this.dom.box,i=this.dom.line,o=this.dom.dot;if("top"==t)e.style.top=(this.top||0)+"px",i.style.top="0",i.style.height=this.parent.top+this.top+1+"px",i.style.bottom="";else{var n=this.parent.itemSet.props.height,s=n-this.parent.top-this.parent.height+this.top;e.style.top=(this.parent.height-this.top-this.height||0)+"px",i.style.top=n-s+"px",i.style.bottom="0"}o.style.top=-this.props.dot.height/2+"px"},o.prototype.getWidthLeft=function(){return this.width/2},o.prototype.getWidthRight=function(){return this.width/2},t.exports=o},function(t,e,i){function o(t,e,i){if(this.props={dot:{top:0,width:0,height:0},content:{height:0,marginLeft:0,marginRight:0}},this.options=i,t&&void 0==t.start)throw new Error('Property "start" missing in item '+t);n.call(this,t,e,i)}var n=i(38);o.prototype=new n(null,null,null),o.prototype.isVisible=function(t){var e=this.width*t.getMillisecondsPerPixel();return this.data.start.getTime()+e>t.start&&this.data.start<t.end},o.prototype._createDomElement=function(){this.dom||(this.dom={},this.dom.point=document.createElement("div"),this.dom.content=document.createElement("div"),this.dom.content.className="vis-item-content",this.dom.point.appendChild(this.dom.content),this.dom.dot=document.createElement("div"),this.dom.point.appendChild(this.dom.dot),this.dom.point["timeline-item"]=this,this.dirty=!0)},o.prototype._appendDomElement=function(){if(!this.parent)throw new Error("Cannot redraw item: no parent attached");if(!this.dom.point.parentNode){var t=this.parent.dom.foreground;if(!t)throw new Error("Cannot redraw item: parent has no foreground container element");t.appendChild(this.dom.point)}this.displayed=!0},o.prototype._updateDirtyDomComponents=function(){if(this.dirty){this._updateContents(this.dom.content),this._updateDataAttributes(this.dom.point),this._updateStyle(this.dom.point);var t=this.editable.updateTime||this.editable.updateGroup,e=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"")+(t?" vis-editable":" vis-readonly");this.dom.point.className="vis-item vis-point"+e,this.dom.dot.className="vis-item vis-dot"+e}},o.prototype._getDomComponentsSizes=function(){return{dot:{width:this.dom.dot.offsetWidth,height:this.dom.dot.offsetHeight},content:{width:this.dom.content.offsetWidth,height:this.dom.content.offsetHeight},point:{width:this.dom.point.offsetWidth,height:this.dom.point.offsetHeight}}},o.prototype._updateDomComponentsSizes=function(t){this.props.dot.width=t.dot.width,this.props.dot.height=t.dot.height,this.props.content.height=t.content.height,this.options.rtl?this.dom.content.style.marginRight=2*this.props.dot.width+"px":this.dom.content.style.marginLeft=2*this.props.dot.width+"px",this.width=t.point.width,this.height=t.point.height,this.dom.dot.style.top=(this.height-this.props.dot.height)/2+"px",this.options.rtl?this.dom.dot.style.right=this.props.dot.width/2+"px":this.dom.dot.style.left=this.props.dot.width/2+"px",this.dirty=!1},o.prototype._repaintDomAdditionals=function(){this._repaintOnItemUpdateTimeTooltip(this.dom.point),this._repaintDragCenter(),this._repaintDeleteButton(this.dom.point)},o.prototype.redraw=function(t){var e,i=[this._createDomElement.bind(this),this._appendDomElement.bind(this),this._updateDirtyDomComponents.bind(this),function(){this.dirty&&(e=this._getDomComponentsSizes())}.bind(this),function(){this.dirty&&this._updateDomComponentsSizes.bind(this)(e)}.bind(this),this._repaintDomAdditionals.bind(this)];if(t)return i;var o;return i.forEach(function(t){o=t()}),o},o.prototype.show=function(){this.displayed||this.redraw()},o.prototype.hide=function(){this.displayed&&(this.dom.point.parentNode&&this.dom.point.parentNode.removeChild(this.dom.point),this.displayed=!1)},o.prototype.repositionX=function(){var t=this.conversion.toScreen(this.data.start);this.options.rtl?(this.right=t-this.props.dot.width,this.dom.point.style.right=this.right+"px"):(this.left=t-this.props.dot.width,this.dom.point.style.left=this.left+"px")},o.prototype.repositionY=function(){var t=this.options.orientation.item,e=this.dom.point;e.style.top="top"==t?this.top+"px":this.parent.height-this.top-this.height+"px"},o.prototype.getWidthLeft=function(){return this.props.dot.width},o.prototype.getWidthRight=function(){return this.props.dot.width},t.exports=o},function(t,e,i){function o(t,e,i){if(this.props={content:{width:0}},this.overflow=!1,t){if(void 0==t.start)throw new Error('Property "start" missing in item '+t.id);if(void 0==t.end)throw new Error('Property "end" missing in item '+t.id)}n.call(this,t,e,i)}var n=i(38),s=i(69),r=i(70);o.prototype=new n(null,null,null),o.prototype.baseClassName="vis-item vis-background",o.prototype.stack=!1,o.prototype.isVisible=function(t){return this.data.start<t.end&&this.data.end>t.start},o.prototype._createDomElement=function(){this.dom||(this.dom={},this.dom.box=document.createElement("div"),this.dom.frame=document.createElement("div"),this.dom.frame.className="vis-item-overflow",this.dom.box.appendChild(this.dom.frame),this.dom.content=document.createElement("div"),this.dom.content.className="vis-item-content",this.dom.frame.appendChild(this.dom.content),this.dirty=!0)},o.prototype._appendDomElement=function(){if(!this.parent)throw new Error("Cannot redraw item: no parent attached");if(!this.dom.box.parentNode){var t=this.parent.dom.background;if(!t)throw new Error("Cannot redraw item: parent has no background container element");t.appendChild(this.dom.box)}this.displayed=!0},o.prototype._updateDirtyDomComponents=function(){if(this.dirty){this._updateContents(this.dom.content),this._updateDataAttributes(this.dom.content),this._updateStyle(this.dom.box);var t=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"");this.dom.box.className=this.baseClassName+t}},o.prototype._getDomComponentsSizes=function(){return this.overflow="hidden"!==window.getComputedStyle(this.dom.content).overflow,{content:{width:this.dom.content.offsetWidth}}},o.prototype._updateDomComponentsSizes=function(t){this.props.content.width=t.content.width,this.height=0,this.dirty=!1},o.prototype._repaintDomAdditionals=function(){},o.prototype.redraw=function(t){var e,i=[this._createDomElement.bind(this),this._appendDomElement.bind(this),this._updateDirtyDomComponents.bind(this),function(){this.dirty&&(e=this._getDomComponentsSizes.bind(this)())}.bind(this),function(){this.dirty&&this._updateDomComponentsSizes.bind(this)(e)}.bind(this),this._repaintDomAdditionals.bind(this)];if(t)return i;var o;return i.forEach(function(t){o=t()}),o},o.prototype.show=r.prototype.show,o.prototype.hide=r.prototype.hide,o.prototype.repositionX=r.prototype.repositionX,o.prototype.repositionY=function(t){var e,i=this.options.orientation.item;if(void 0!==this.data.subgroup){var o=this.data.subgroup;this.dom.box.style.height=this.parent.subgroups[o].height+"px",this.dom.box.style.top="top"==i?this.parent.top+this.parent.subgroups[o].top+"px":this.parent.top+this.parent.height-this.parent.subgroups[o].top-this.parent.subgroups[o].height+"px",this.dom.box.style.bottom=""}else this.parent instanceof s?(e=Math.max(this.parent.height,this.parent.itemSet.body.domProps.center.height,this.parent.itemSet.body.domProps.centerContainer.height),this.dom.box.style.bottom="bottom"==i?"0":"",this.dom.box.style.top="top"==i?"0":""):(e=this.parent.height,this.dom.box.style.top=this.parent.top+"px",this.dom.box.style.bottom="");this.dom.box.style.height=e+"px"},t.exports=o},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=function(){function t(e,i){(0,s.default)(this,t),this.container=e,this.overflowMethod=i||"cap",this.x=0,this.y=0,this.padding=5,this.hidden=!1,this.frame=document.createElement("div"),this.frame.className="vis-tooltip",this.container.appendChild(this.frame)}return(0,a.default)(t,[{key:"setPosition",value:function(t,e){this.x=parseInt(t),this.y=parseInt(e)}},{key:"setText",value:function(t){t instanceof Element?(this.frame.innerHTML="",this.frame.appendChild(t)):this.frame.innerHTML=t}},{key:"show",value:function(t){if(void 0===t&&(t=!0),!0===t){var e=this.frame.clientHeight,i=this.frame.clientWidth,o=this.frame.parentNode.clientHeight,n=this.frame.parentNode.clientWidth,s=0,r=0;if("flip"==this.overflowMethod){var a=!1,h=!0;this.y-e<this.padding&&(h=!1),this.x+i>n-this.padding&&(a=!0),s=a?this.x-i:this.x,r=h?this.y-e:this.y}else r=this.y-e,r+e+this.padding>o&&(r=o-e-this.padding),r<this.padding&&(r=this.padding),s=this.x,s+i+this.padding>n&&(s=n-i-this.padding),s<this.padding&&(s=this.padding);this.frame.style.left=s+"px",this.frame.style.top=r+"px",this.frame.style.visibility="visible",this.hidden=!1}else this.hide()}},{key:"hide",value:function(){this.hidden=!0,this.frame.style.left="0",this.frame.style.top="0",this.frame.style.visibility="hidden"}},{key:"destroy",value:function(){this.frame.parentNode.removeChild(this.frame)}}]),t}();e.default=h},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var o="string",n="boolean",s="number",r="object",a={configure:{enabled:{boolean:n},filter:{boolean:n,function:"function"},container:{dom:"dom"},__type__:{object:r,boolean:n,function:"function"}},align:{string:o},rtl:{boolean:n,undefined:"undefined"},rollingMode:{follow:{boolean:n},offset:{number:s,undefined:"undefined"},__type__:{object:r}},verticalScroll:{boolean:n,undefined:"undefined"},horizontalScroll:{boolean:n,undefined:"undefined"},autoResize:{boolean:n},throttleRedraw:{number:s},clickToUse:{boolean:n},dataAttributes:{string:o,array:"array"},editable:{add:{boolean:n,undefined:"undefined"},remove:{boolean:n,undefined:"undefined"},updateGroup:{boolean:n,undefined:"undefined"},updateTime:{boolean:n,undefined:"undefined"},overrideItems:{boolean:n,undefined:"undefined"},__type__:{boolean:n,object:r}},end:{number:s,date:"date",string:o,moment:"moment"},format:{minorLabels:{millisecond:{string:o,undefined:"undefined"},second:{string:o,undefined:"undefined"},minute:{string:o,undefined:"undefined"},hour:{string:o,undefined:"undefined"},weekday:{string:o,undefined:"undefined"},day:{string:o,undefined:"undefined"},week:{string:o,undefined:"undefined"},month:{string:o,undefined:"undefined"},year:{string:o,undefined:"undefined"},__type__:{object:r,function:"function"}},majorLabels:{millisecond:{string:o,undefined:"undefined"},second:{string:o,undefined:"undefined"},minute:{string:o,undefined:"undefined"},hour:{string:o,undefined:"undefined"},weekday:{string:o,undefined:"undefined"},day:{string:o,undefined:"undefined"},week:{string:o,undefined:"undefined"},month:{string:o,undefined:"undefined"},year:{string:o,undefined:"undefined"},__type__:{object:r,function:"function"}},__type__:{object:r}},moment:{function:"function"},groupOrder:{string:o,function:"function"},groupEditable:{add:{boolean:n,undefined:"undefined"},remove:{boolean:n,undefined:"undefined"},order:{boolean:n,undefined:"undefined"},__type__:{boolean:n,object:r}},groupOrderSwap:{function:"function"},height:{string:o,number:s},hiddenDates:{start:{date:"date",number:s,string:o,moment:"moment"},end:{date:"date",number:s,string:o,moment:"moment"},repeat:{string:o},__type__:{object:r,array:"array"}},itemsAlwaysDraggable:{item:{boolean:n,undefined:"undefined"},range:{boolean:n,undefined:"undefined"},__type__:{boolean:n,object:r}},limitSize:{boolean:n},locale:{string:o},locales:{__any__:{any:"any"},__type__:{object:r}},margin:{axis:{number:s},item:{horizontal:{number:s,undefined:"undefined"},vertical:{number:s,undefined:"undefined"},__type__:{object:r,number:s}},__type__:{object:r,number:s}},max:{date:"date",number:s,string:o,moment:"moment"},maxHeight:{number:s,string:o},maxMinorChars:{number:s},min:{date:"date",number:s,string:o,moment:"moment"},minHeight:{number:s,string:o},moveable:{boolean:n},multiselect:{boolean:n},multiselectPerGroup:{boolean:n},onAdd:{function:"function"},onDropObjectOnItem:{function:"function"},onUpdate:{function:"function"},onMove:{function:"function"},onMoving:{function:"function"},onRemove:{function:"function"},onAddGroup:{function:"function"},onMoveGroup:{function:"function"},onRemoveGroup:{function:"function"},onInitialDrawComplete:{function:"function"},order:{function:"function"},orientation:{axis:{string:o,undefined:"undefined"},item:{string:o,undefined:"undefined"},__type__:{string:o,object:r}},selectable:{boolean:n},showCurrentTime:{boolean:n},showMajorLabels:{boolean:n},showMinorLabels:{boolean:n},stack:{boolean:n},stackSubgroups:{boolean:n},snap:{function:"function",null:"null"},start:{date:"date",number:s,string:o,moment:"moment"},template:{function:"function"},groupTemplate:{function:"function"},visibleFrameTemplate:{string:o,function:"function"},showTooltips:{boolean:n},tooltip:{followMouse:{boolean:n},overflowMethod:{string:["cap","flip"]},__type__:{object:r}},tooltipOnItemUpdateTime:{template:{function:"function"},__type__:{boolean:n,object:r}},timeAxis:{scale:{string:o,undefined:"undefined"},step:{number:s,undefined:"undefined"},__type__:{object:r}},type:{string:o},width:{string:o,number:s},zoomable:{boolean:n},zoomKey:{string:["ctrlKey","altKey","metaKey",""]},zoomMax:{number:s},zoomMin:{number:s},__type__:{object:r}},h={global:{align:["center","left","right"],direction:!1,autoResize:!0,clickToUse:!1,editable:{add:!1,remove:!1,updateGroup:!1,updateTime:!1},end:"",format:{minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"D",week:"w",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMMM YYYY",day:"MMMM YYYY",week:"MMMM YYYY",month:"YYYY",year:""}},groupsDraggable:!1,height:"",locale:"",margin:{axis:[20,0,100,1],item:{horizontal:[10,0,100,1],vertical:[10,0,100,1]}},max:"",maxHeight:"",maxMinorChars:[7,0,20,1],min:"",minHeight:"",moveable:!1,multiselect:!1,multiselectPerGroup:!1,orientation:{axis:["both","bottom","top"],item:["bottom","top"]},selectable:!0,showCurrentTime:!1,showMajorLabels:!0,showMinorLabels:!0,stack:!0,stackSubgroups:!0,start:"",showTooltips:!0,tooltip:{followMouse:!1,overflowMethod:"flip"},tooltipOnItemUpdateTime:!1,type:["box","point","range","background"],width:"100%",zoomable:!0,zoomKey:["ctrlKey","altKey","metaKey",""],zoomMax:[31536e10,10,31536e10,1],zoomMin:[10,10,31536e10,1]}};e.allOptions=a,e.configureOptions=h},function(t,e,i){function o(t,e){this.id=r.randomUUID(),this.body=t,this.defaultOptions={yAxisOrientation:"left",defaultGroup:"default",sort:!0,sampling:!0,stack:!1,graphHeight:"400px",shaded:{enabled:!1,orientation:"bottom"},style:"line",barChart:{width:50,sideBySide:!1,align:"center"},interpolation:{enabled:!0,parametrization:"centripetal",alpha:.5},drawPoints:{enabled:!0,size:6,style:"square"},dataAxis:{},legend:{},groups:{visibility:{}}},this.options=r.extend({},this.defaultOptions),this.dom={},this.props={},this.hammer=null,this.groups={},this.abortedGraphUpdate=!1,this.updateSVGheight=!1,this.updateSVGheightOnResize=!1,this.forceGraphUpdate=!0;var i=this;this.itemsData=null,this.groupsData=null,this.itemListeners={add:function(t,e,o){i._onAdd(e.items)},update:function(t,e,o){i._onUpdate(e.items)},remove:function(t,e,o){i._onRemove(e.items)}},this.groupListeners={add:function(t,e,o){i._onAddGroups(e.items)},update:function(t,e,o){i._onUpdateGroups(e.items)},remove:function(t,e,o){i._onRemoveGroups(e.items)}},this.items={},this.selection=[],this.lastStart=this.body.range.start,this.touchParams={},this.svgElements={},this.setOptions(e),this.groupsUsingDefaultStyles=[0],this.body.emitter.on("rangechanged",function(){i.lastStart=i.body.range.start,i.svg.style.left=r.option.asSize(-i.props.width),i.forceGraphUpdate=!0,i.redraw.call(i)}),this._create(),this.framework={svg:this.svg,svgElements:this.svgElements,options:this.options,groups:this.groups}}var n=i(6),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(2),a=i(14),h=i(11),d=i(12),l=i(16),u=i(107),c=i(109),p=i(112),f=i(110),m=i(111),v=i(72);o.prototype=new l,o.prototype._create=function(){var t=document.createElement("div");t.className="vis-line-graph",this.dom.frame=t,this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.style.position="relative",this.svg.style.height=(""+this.options.graphHeight).replace("px","")+"px",this.svg.style.display="block",t.appendChild(this.svg),this.options.dataAxis.orientation="left",this.yAxisLeft=new u(this.body,this.options.dataAxis,this.svg,this.options.groups),this.options.dataAxis.orientation="right",this.yAxisRight=new u(this.body,this.options.dataAxis,this.svg,this.options.groups),delete this.options.dataAxis.orientation,this.legendLeft=new p(this.body,this.options.legend,"left",this.options.groups),this.legendRight=new p(this.body,this.options.legend,"right",this.options.groups),this.show()},o.prototype.setOptions=function(t){if(t){var e=["sampling","defaultGroup","stack","height","graphHeight","yAxisOrientation","style","barChart","dataAxis","sort","groups"];void 0===t.graphHeight&&void 0!==t.height?(this.updateSVGheight=!0,this.updateSVGheightOnResize=!0):void 0!==this.body.domProps.centerContainer.height&&void 0!==t.graphHeight&&parseInt((t.graphHeight+"").replace("px",""))<this.body.domProps.centerContainer.height&&(this.updateSVGheight=!0),r.selectiveDeepExtend(e,this.options,t),r.mergeOptions(this.options,t,"interpolation"),r.mergeOptions(this.options,t,"drawPoints"),r.mergeOptions(this.options,t,"shaded"),r.mergeOptions(this.options,t,"legend"),t.interpolation&&"object"==(0,s.default)(t.interpolation)&&t.interpolation.parametrization&&("uniform"==t.interpolation.parametrization?this.options.interpolation.alpha=0:"chordal"==t.interpolation.parametrization?this.options.interpolation.alpha=1:(this.options.interpolation.parametrization="centripetal",this.options.interpolation.alpha=.5)),this.yAxisLeft&&void 0!==t.dataAxis&&(this.yAxisLeft.setOptions(this.options.dataAxis),this.yAxisRight.setOptions(this.options.dataAxis)),this.legendLeft&&void 0!==t.legend&&(this.legendLeft.setOptions(this.options.legend),this.legendRight.setOptions(this.options.legend)),this.groups.hasOwnProperty("__ungrouped__")&&this.groups.__ungrouped__.setOptions(t)}this.dom.frame&&(this.forceGraphUpdate=!0,this.body.emitter.emit("_change",{queue:!0}))},o.prototype.hide=function(){this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame)},o.prototype.show=function(){this.dom.frame.parentNode||this.body.dom.center.appendChild(this.dom.frame)},o.prototype.setItems=function(t){var e,i=this,o=this.itemsData;if(t){if(!(t instanceof h||t instanceof d))throw new TypeError("Data must be an instance of DataSet or DataView");this.itemsData=t}else this.itemsData=null;if(o&&(r.forEach(this.itemListeners,function(t,e){o.off(e,t)}),e=o.getIds(),this._onRemove(e)),this.itemsData){var n=this.id;r.forEach(this.itemListeners,function(t,e){i.itemsData.on(e,t,n)}),e=this.itemsData.getIds(),this._onAdd(e)}},o.prototype.setGroups=function(t){var e,i=this;if(this.groupsData){r.forEach(this.groupListeners,function(t,e){i.groupsData.off(e,t)}),e=this.groupsData.getIds(),this.groupsData=null;for(var o=0;o<e.length;o++)this._removeGroup(e[o])}if(t){if(!(t instanceof h||t instanceof d))throw new TypeError("Data must be an instance of DataSet or DataView");this.groupsData=t}else this.groupsData=null;if(this.groupsData){var n=this.id;r.forEach(this.groupListeners,function(t,e){i.groupsData.on(e,t,n)}),e=this.groupsData.getIds(),this._onAddGroups(e)}},o.prototype._onUpdate=function(t){this._updateAllGroupData(t)},o.prototype._onAdd=function(t){this._onUpdate(t)},o.prototype._onRemove=function(t){this._onUpdate(t)},o.prototype._onUpdateGroups=function(t){this._updateAllGroupData(null,t)},o.prototype._onAddGroups=function(t){this._onUpdateGroups(t)},o.prototype._onRemoveGroups=function(t){for(var e=0;e<t.length;e++)this._removeGroup(t[e]);this.forceGraphUpdate=!0,this.body.emitter.emit("_change",{queue:!0})},o.prototype._removeGroup=function(t){this.groups.hasOwnProperty(t)&&("right"==this.groups[t].options.yAxisOrientation?(this.yAxisRight.removeGroup(t),this.legendRight.removeGroup(t),this.legendRight.redraw()):(this.yAxisLeft.removeGroup(t),this.legendLeft.removeGroup(t),this.legendLeft.redraw()),delete this.groups[t])},o.prototype._updateGroup=function(t,e){this.groups.hasOwnProperty(e)?(this.groups[e].update(t),"right"==this.groups[e].options.yAxisOrientation?(this.yAxisRight.updateGroup(e,this.groups[e]),this.legendRight.updateGroup(e,this.groups[e]),this.yAxisLeft.removeGroup(e),this.legendLeft.removeGroup(e)):(this.yAxisLeft.updateGroup(e,this.groups[e]),this.legendLeft.updateGroup(e,this.groups[e]),this.yAxisRight.removeGroup(e),this.legendRight.removeGroup(e))):(this.groups[e]=new c(t,e,this.options,this.groupsUsingDefaultStyles),"right"==this.groups[e].options.yAxisOrientation?(this.yAxisRight.addGroup(e,this.groups[e]),this.legendRight.addGroup(e,this.groups[e])):(this.yAxisLeft.addGroup(e,this.groups[e]),this.legendLeft.addGroup(e,this.groups[e]))),this.legendLeft.redraw(),this.legendRight.redraw()},o.prototype._updateAllGroupData=function(t,e){if(null!=this.itemsData){var i={},o=this.itemsData.get(),n=this.itemsData._fieldId,s={};t&&t.map(function(t){s[t]=t});for(var a={},h=0;h<o.length;h++){var d=o[h],l=d.group;null!==l&&void 0!==l||(l="__ungrouped__"),a.hasOwnProperty(l)?a[l]++:a[l]=1}var u={};if(!e&&t)for(l in this.groups)if(this.groups.hasOwnProperty(l)){v=this.groups[l];var c=v.getItems();i[l]=c.filter(function(t){return u[t[n]]=t[n],t[n]!==s[t[n]]});var p=a[l];a[l]-=i[l].length,i[l].length<p&&(i[l][p-1]={})}for(h=0;h<o.length;h++)if(d=o[h],l=d.group,null!==l&&void 0!==l||(l="__ungrouped__"),e||!t||d[n]===s[d[n]]||!u.hasOwnProperty(d[n])){i.hasOwnProperty(l)||(i[l]=new Array(a[l]));var f=r.bridgeObject(d);f.x=r.convert(d.x,"Date"),f.end=r.convert(d.end,"Date"),f.orginalY=d.y,f.y=Number(d.y),
f[n]=d[n];var m=i[l].length-a[l]--;i[l][m]=f}for(l in this.groups)this.groups.hasOwnProperty(l)&&(i.hasOwnProperty(l)||(i[l]=new Array(0)));for(l in i)if(i.hasOwnProperty(l))if(0==i[l].length)this.groups.hasOwnProperty(l)&&this._removeGroup(l);else{var v=void 0;void 0!=this.groupsData&&(v=this.groupsData.get(l)),void 0==v&&(v={id:l,content:this.options.defaultGroup+l}),this._updateGroup(v,l),this.groups[l].setItems(i[l])}this.forceGraphUpdate=!0,this.body.emitter.emit("_change",{queue:!0})}},o.prototype.redraw=function(){var t=!1;this.props.width=this.dom.frame.offsetWidth,this.props.height=this.body.domProps.centerContainer.height-this.body.domProps.border.top-this.body.domProps.border.bottom,t=this._isResized()||t;var e=this.body.range.end-this.body.range.start,i=e!=this.lastVisibleInterval;if(this.lastVisibleInterval=e,1==t&&(this.svg.style.width=r.option.asSize(3*this.props.width),this.svg.style.left=r.option.asSize(-this.props.width),-1==(this.options.height+"").indexOf("%")&&1!=this.updateSVGheightOnResize||(this.updateSVGheight=!0)),1==this.updateSVGheight?(this.options.graphHeight!=this.props.height+"px"&&(this.options.graphHeight=this.props.height+"px",this.svg.style.height=this.props.height+"px"),this.updateSVGheight=!1):this.svg.style.height=(""+this.options.graphHeight).replace("px","")+"px",1==t||1==i||1==this.abortedGraphUpdate||1==this.forceGraphUpdate)t=this._updateGraph()||t,this.forceGraphUpdate=!1;else if(0!=this.lastStart){var o=this.body.range.start-this.lastStart,n=this.body.range.end-this.body.range.start;if(0!=this.props.width){var s=this.props.width/n,a=o*s;this.svg.style.left=-this.props.width-a+"px"}}return this.legendLeft.redraw(),this.legendRight.redraw(),t},o.prototype._getSortedGroupIds=function(){var t=[];for(var e in this.groups)if(this.groups.hasOwnProperty(e)){var i=this.groups[e];1!=i.visible||void 0!==this.options.groups.visibility[e]&&1!=this.options.groups.visibility[e]||t.push({id:e,zIndex:i.options.zIndex})}r.insertSort(t,function(t,e){var i=t.zIndex,o=e.zIndex;return void 0===i&&(i=0),void 0===o&&(o=0),i==o?0:i<o?-1:1});for(var o=new Array(t.length),n=0;n<t.length;n++)o[n]=t[n].id;return o},o.prototype._updateGraph=function(){if(a.prepareElements(this.svgElements),0!=this.props.width&&null!=this.itemsData){var t,e,i={},o=this.body.util.toGlobalTime(-this.body.domProps.root.width),n=this.body.util.toGlobalTime(2*this.body.domProps.root.width),s=this._getSortedGroupIds();if(s.length>0){var r={};for(this._getRelevantData(s,r,o,n),this._applySampling(s,r),e=0;e<s.length;e++)this._convertXcoordinates(r[s[e]]);if(this._getYRanges(s,r,i),1==this._updateYAxis(s,i))return a.cleanupElements(this.svgElements),this.abortedGraphUpdate=!0,!0;this.abortedGraphUpdate=!1;var h=void 0;for(e=0;e<s.length;e++)t=this.groups[s[e]],!0===this.options.stack&&"line"===this.options.style&&(void 0!=t.options.excludeFromStacking&&t.options.excludeFromStacking||(void 0!=h&&(this._stack(r[t.id],r[h.id]),1==t.options.shaded.enabled&&"group"!==t.options.shaded.orientation&&("top"==t.options.shaded.orientation&&"group"!==h.options.shaded.orientation?(h.options.shaded.orientation="group",h.options.shaded.groupId=t.id):(t.options.shaded.orientation="group",t.options.shaded.groupId=h.id))),h=t)),this._convertYcoordinates(r[s[e]],t);var d={};for(e=0;e<s.length;e++)if(t=this.groups[s[e]],"line"===t.options.style&&1==t.options.shaded.enabled){var l=r[s[e]];if(null==l||0==l.length)continue;if(d.hasOwnProperty(s[e])||(d[s[e]]=m.calcPath(l,t)),"group"===t.options.shaded.orientation){var u=t.options.shaded.groupId;if(-1===s.indexOf(u)){console.log(t.id+": Unknown shading group target given:"+u);continue}d.hasOwnProperty(u)||(d[u]=m.calcPath(r[u],this.groups[u])),m.drawShading(d[s[e]],t,d[u],this.framework)}else m.drawShading(d[s[e]],t,void 0,this.framework)}for(f.draw(s,r,this.framework),e=0;e<s.length;e++)if(t=this.groups[s[e]],r[s[e]].length>0)switch(t.options.style){case"line":d.hasOwnProperty(s[e])||(d[s[e]]=m.calcPath(r[s[e]],t)),m.draw(d[s[e]],t,this.framework);case"point":case"points":"point"!=t.options.style&&"points"!=t.options.style&&1!=t.options.drawPoints.enabled||v.draw(r[s[e]],t,this.framework)}}}return a.cleanupElements(this.svgElements),!1},o.prototype._stack=function(t,e){var i,o,n,s,r;i=0;for(var a=0;a<t.length;a++){s=void 0,r=void 0;for(var h=i;h<e.length;h++){if(e[h].x===t[a].x){s=e[h],r=e[h],i=h;break}if(e[h].x>t[a].x){r=e[h],s=0==h?r:e[h-1],i=h;break}}void 0===r&&(s=e[e.length-1],r=e[e.length-1]),o=r.x-s.x,n=r.y-s.y,t[a].y=0==o?t[a].orginalY+r.y:t[a].orginalY+n/o*(t[a].x-s.x)+s.y}},o.prototype._getRelevantData=function(t,e,i,o){var n,s,a,h;if(t.length>0)for(s=0;s<t.length;s++){n=this.groups[t[s]];var d=n.getItems();if(1==n.options.sort){var l=function(t,e){return t.getTime()==e.getTime()?0:t<e?-1:1},u=Math.max(0,r.binarySearchValue(d,i,"x","before",l)),c=Math.min(d.length,r.binarySearchValue(d,o,"x","after",l)+1);c<=0&&(c=d.length);var p=new Array(c-u);for(a=u;a<c;a++)h=n.itemsData[a],p[a-u]=h;e[t[s]]=p}else e[t[s]]=n.itemsData}},o.prototype._applySampling=function(t,e){var i;if(t.length>0)for(var o=0;o<t.length;o++)if(i=this.groups[t[o]],1==i.options.sampling){var n=e[t[o]];if(n.length>0){var s=1,r=n.length,a=this.body.util.toGlobalScreen(n[n.length-1].x)-this.body.util.toGlobalScreen(n[0].x),h=r/a;s=Math.min(Math.ceil(.2*r),Math.max(1,Math.round(h)));for(var d=new Array(r),l=0;l<r;l+=s){var u=Math.round(l/s);d[u]=n[l]}e[t[o]]=d.splice(0,Math.round(r/s))}}},o.prototype._getYRanges=function(t,e,i){var o,n,s,r,a=[],h=[];if(t.length>0){for(s=0;s<t.length;s++)o=e[t[s]],r=this.groups[t[s]].options,o.length>0&&(n=this.groups[t[s]],!0===r.stack&&"bar"===r.style?"left"===r.yAxisOrientation?a=a.concat(o):h=h.concat(o):i[t[s]]=n.getYRange(o,t[s]));f.getStackedYRange(a,i,t,"__barStackLeft","left"),f.getStackedYRange(h,i,t,"__barStackRight","right")}},o.prototype._updateYAxis=function(t,e){var i,o,n=!1,s=!1,r=!1,a=1e9,h=1e9,d=-1e9,l=-1e9;if(t.length>0){for(var u=0;u<t.length;u++){var c=this.groups[t[u]];c&&"right"!=c.options.yAxisOrientation?(s=!0,a=1e9,d=-1e9):c&&c.options.yAxisOrientation&&(r=!0,h=1e9,l=-1e9)}for(u=0;u<t.length;u++)e.hasOwnProperty(t[u])&&!0!==e[t[u]].ignore&&(i=e[t[u]].min,o=e[t[u]].max,"right"!=e[t[u]].yAxisOrientation?(s=!0,a=a>i?i:a,d=d<o?o:d):(r=!0,h=h>i?i:h,l=l<o?o:l));1==s&&this.yAxisLeft.setRange(a,d),1==r&&this.yAxisRight.setRange(h,l)}n=this._toggleAxisVisiblity(s,this.yAxisLeft)||n,n=this._toggleAxisVisiblity(r,this.yAxisRight)||n,1==r&&1==s?(this.yAxisLeft.drawIcons=!0,this.yAxisRight.drawIcons=!0):(this.yAxisLeft.drawIcons=!1,this.yAxisRight.drawIcons=!1),this.yAxisRight.master=!s,this.yAxisRight.masterAxis=this.yAxisLeft,0==this.yAxisRight.master?(this.yAxisLeft.lineOffset=1==r?this.yAxisRight.width:0,n=this.yAxisLeft.redraw()||n,n=this.yAxisRight.redraw()||n):n=this.yAxisRight.redraw()||n;var p=["__barStackLeft","__barStackRight","__lineStackLeft","__lineStackRight"];for(u=0;u<p.length;u++)-1!=t.indexOf(p[u])&&t.splice(t.indexOf(p[u]),1);return n},o.prototype._toggleAxisVisiblity=function(t,e){var i=!1;return 0==t?e.dom.frame.parentNode&&0==e.hidden&&(e.hide(),i=!0):e.dom.frame.parentNode||1!=e.hidden||(e.show(),i=!0),i},o.prototype._convertXcoordinates=function(t){for(var e=this.body.util.toScreen,i=0;i<t.length;i++)t[i].screen_x=e(t[i].x)+this.props.width,t[i].screen_y=t[i].y,void 0!=t[i].end?t[i].screen_end=e(t[i].end)+this.props.width:t[i].screen_end=void 0},o.prototype._convertYcoordinates=function(t,e){var i=this.yAxisLeft,o=Number(this.svg.style.height.replace("px",""));"right"==e.options.yAxisOrientation&&(i=this.yAxisRight);for(var n=0;n<t.length;n++)t[n].screen_y=Math.round(i.convertValue(t[n].y));e.setZeroPosition(Math.min(o,i.convertValue(0)))},t.exports=o},function(t,e,i){function o(t,e,i,o){this.id=r.randomUUID(),this.body=t,this.defaultOptions={orientation:"left",showMinorLabels:!0,showMajorLabels:!0,icons:!1,majorLinesOffset:7,minorLinesOffset:4,labelOffsetX:10,labelOffsetY:2,iconWidth:20,width:"40px",visible:!0,alignZeros:!0,left:{range:{min:void 0,max:void 0},format:function(t){return""+parseFloat(t.toPrecision(3))},title:{text:void 0,style:void 0}},right:{range:{min:void 0,max:void 0},format:function(t){return""+parseFloat(t.toPrecision(3))},title:{text:void 0,style:void 0}}},this.linegraphOptions=o,this.linegraphSVG=i,this.props={},this.DOMelements={lines:{},labels:{},title:{}},this.dom={},this.scale=void 0,this.range={start:0,end:0},this.options=r.extend({},this.defaultOptions),this.conversionFactor=1,this.setOptions(e),this.width=Number((""+this.options.width).replace("px","")),this.minWidth=this.width,this.height=this.linegraphSVG.getBoundingClientRect().height,this.hidden=!1,this.stepPixels=25,this.zeroCrossing=-1,this.amountOfSteps=-1,this.lineOffset=0,this.master=!0,this.masterAxis=null,this.svgElements={},this.iconsRemoved=!1,this.groups={},this.amountOfGroups=0,this._create(),this.framework={svg:this.svg,svgElements:this.svgElements,options:this.options,groups:this.groups};var n=this;this.body.emitter.on("verticalDrag",function(){n.dom.lineContainer.style.top=n.body.domProps.scrollTop+"px"})}var n=i(8),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(2),a=i(14),h=i(16),d=i(108);o.prototype=new h,o.prototype.addGroup=function(t,e){this.groups.hasOwnProperty(t)||(this.groups[t]=e),this.amountOfGroups+=1},o.prototype.updateGroup=function(t,e){this.groups.hasOwnProperty(t)||(this.amountOfGroups+=1),this.groups[t]=e},o.prototype.removeGroup=function(t){this.groups.hasOwnProperty(t)&&(delete this.groups[t],this.amountOfGroups-=1)},o.prototype.setOptions=function(t){if(t){var e=!1;this.options.orientation!=t.orientation&&void 0!==t.orientation&&(e=!0);var i=["orientation","showMinorLabels","showMajorLabels","icons","majorLinesOffset","minorLinesOffset","labelOffsetX","labelOffsetY","iconWidth","width","visible","left","right","alignZeros"];r.selectiveDeepExtend(i,this.options,t),this.minWidth=Number((""+this.options.width).replace("px","")),!0===e&&this.dom.frame&&(this.hide(),this.show())}},o.prototype._create=function(){this.dom.frame=document.createElement("div"),this.dom.frame.style.width=this.options.width,this.dom.frame.style.height=this.height,this.dom.lineContainer=document.createElement("div"),this.dom.lineContainer.style.width="100%",this.dom.lineContainer.style.height=this.height,this.dom.lineContainer.style.position="relative",this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.style.position="absolute",this.svg.style.top="0px",this.svg.style.height="100%",this.svg.style.width="100%",this.svg.style.display="block",this.dom.frame.appendChild(this.svg)},o.prototype._redrawGroupIcons=function(){a.prepareElements(this.svgElements);var t,e=this.options.iconWidth,i=11.5;t="left"===this.options.orientation?4:this.width-e-4;var o=(0,s.default)(this.groups);o.sort(function(t,e){return t<e?-1:1});for(var n=0;n<o.length;n++){var r=o[n];!0!==this.groups[r].visible||void 0!==this.linegraphOptions.visibility[r]&&!0!==this.linegraphOptions.visibility[r]||(this.groups[r].getLegend(e,15,this.framework,t,i),i+=19)}a.cleanupElements(this.svgElements),this.iconsRemoved=!1},o.prototype._cleanupIcons=function(){!1===this.iconsRemoved&&(a.prepareElements(this.svgElements),a.cleanupElements(this.svgElements),this.iconsRemoved=!0)},o.prototype.show=function(){this.hidden=!1,this.dom.frame.parentNode||("left"===this.options.orientation?this.body.dom.left.appendChild(this.dom.frame):this.body.dom.right.appendChild(this.dom.frame)),this.dom.lineContainer.parentNode||this.body.dom.backgroundHorizontal.appendChild(this.dom.lineContainer)},o.prototype.hide=function(){this.hidden=!0,this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame),this.dom.lineContainer.parentNode&&this.dom.lineContainer.parentNode.removeChild(this.dom.lineContainer)},o.prototype.setRange=function(t,e){this.range.start=t,this.range.end=e},o.prototype.redraw=function(){var t=!1,e=0;this.dom.lineContainer.style.top=this.body.domProps.scrollTop+"px";for(var i in this.groups)this.groups.hasOwnProperty(i)&&(!0!==this.groups[i].visible||void 0!==this.linegraphOptions.visibility[i]&&!0!==this.linegraphOptions.visibility[i]||e++);if(0===this.amountOfGroups||0===e)this.hide();else{this.show(),this.height=Number(this.linegraphSVG.style.height.replace("px","")),this.dom.lineContainer.style.height=this.height+"px",this.width=!0===this.options.visible?Number((""+this.options.width).replace("px","")):0;var o=this.props,n=this.dom.frame;n.className="vis-data-axis",this._calculateCharSize();var s=this.options.orientation,r=this.options.showMinorLabels,a=this.options.showMajorLabels;o.minorLabelHeight=r?o.minorCharHeight:0,o.majorLabelHeight=a?o.majorCharHeight:0,o.minorLineWidth=this.body.dom.backgroundHorizontal.offsetWidth-this.lineOffset-this.width+2*this.options.minorLinesOffset,o.minorLineHeight=1,o.majorLineWidth=this.body.dom.backgroundHorizontal.offsetWidth-this.lineOffset-this.width+2*this.options.majorLinesOffset,o.majorLineHeight=1,"left"===s?(n.style.top="0",n.style.left="0",n.style.bottom="",n.style.width=this.width+"px",n.style.height=this.height+"px",this.props.width=this.body.domProps.left.width,this.props.height=this.body.domProps.left.height):(n.style.top="",n.style.bottom="0",n.style.left="0",n.style.width=this.width+"px",n.style.height=this.height+"px",this.props.width=this.body.domProps.right.width,this.props.height=this.body.domProps.right.height),t=this._redrawLabels(),t=this._isResized()||t,!0===this.options.icons?this._redrawGroupIcons():this._cleanupIcons(),this._redrawTitle(s)}return t},o.prototype._redrawLabels=function(){var t=this,e=!1;a.prepareElements(this.DOMelements.lines),a.prepareElements(this.DOMelements.labels);var i=this.options.orientation,o=void 0!=this.options[i].range?this.options[i].range:{},n=!0;void 0!=o.max&&(this.range.end=o.max,n=!1);var s=!0;void 0!=o.min&&(this.range.start=o.min,s=!1),this.scale=new d(this.range.start,this.range.end,s,n,this.dom.frame.offsetHeight,this.props.majorCharHeight,this.options.alignZeros,this.options[i].format),!1===this.master&&void 0!=this.masterAxis&&this.scale.followScale(this.masterAxis.scale),this.maxLabelSize=0,this.scale.getLines().forEach(function(e){var o=e.y,n=e.major;t.options.showMinorLabels&&!1===n&&t._redrawLabel(o-2,e.val,i,"vis-y-axis vis-minor",t.props.minorCharHeight),n&&o>=0&&t._redrawLabel(o-2,e.val,i,"vis-y-axis vis-major",t.props.majorCharHeight),!0===t.master&&(n?t._redrawLine(o,i,"vis-grid vis-horizontal vis-major",t.options.majorLinesOffset,t.props.majorLineWidth):t._redrawLine(o,i,"vis-grid vis-horizontal vis-minor",t.options.minorLinesOffset,t.props.minorLineWidth))});var r=0;void 0!==this.options[i].title&&void 0!==this.options[i].title.text&&(r=this.props.titleCharHeight);var h=!0===this.options.icons?Math.max(this.options.iconWidth,r)+this.options.labelOffsetX+15:r+this.options.labelOffsetX+15;return this.maxLabelSize>this.width-h&&!0===this.options.visible?(this.width=this.maxLabelSize+h,this.options.width=this.width+"px",a.cleanupElements(this.DOMelements.lines),a.cleanupElements(this.DOMelements.labels),this.redraw(),e=!0):this.maxLabelSize<this.width-h&&!0===this.options.visible&&this.width>this.minWidth?(this.width=Math.max(this.minWidth,this.maxLabelSize+h),this.options.width=this.width+"px",a.cleanupElements(this.DOMelements.lines),a.cleanupElements(this.DOMelements.labels),this.redraw(),e=!0):(a.cleanupElements(this.DOMelements.lines),a.cleanupElements(this.DOMelements.labels),e=!1),e},o.prototype.convertValue=function(t){return this.scale.convertValue(t)},o.prototype.screenToValue=function(t){return this.scale.screenToValue(t)},o.prototype._redrawLabel=function(t,e,i,o,n){var s=a.getDOMElement("div",this.DOMelements.labels,this.dom.frame);s.className=o,s.innerHTML=e,"left"===i?(s.style.left="-"+this.options.labelOffsetX+"px",s.style.textAlign="right"):(s.style.right="-"+this.options.labelOffsetX+"px",s.style.textAlign="left"),s.style.top=t-.5*n+this.options.labelOffsetY+"px",e+="";var r=Math.max(this.props.majorCharWidth,this.props.minorCharWidth);this.maxLabelSize<e.length*r&&(this.maxLabelSize=e.length*r)},o.prototype._redrawLine=function(t,e,i,o,n){if(!0===this.master){var s=a.getDOMElement("div",this.DOMelements.lines,this.dom.lineContainer);s.className=i,s.innerHTML="","left"===e?s.style.left=this.width-o+"px":s.style.right=this.width-o+"px",s.style.width=n+"px",s.style.top=t+"px"}},o.prototype._redrawTitle=function(t){if(a.prepareElements(this.DOMelements.title),void 0!==this.options[t].title&&void 0!==this.options[t].title.text){var e=a.getDOMElement("div",this.DOMelements.title,this.dom.frame);e.className="vis-y-axis vis-title vis-"+t,e.innerHTML=this.options[t].title.text,void 0!==this.options[t].title.style&&r.addCssText(e,this.options[t].title.style),"left"===t?e.style.left=this.props.titleCharHeight+"px":e.style.right=this.props.titleCharHeight+"px",e.style.width=this.height+"px"}a.cleanupElements(this.DOMelements.title)},o.prototype._calculateCharSize=function(){if(!("minorCharHeight"in this.props)){var t=document.createTextNode("0"),e=document.createElement("div");e.className="vis-y-axis vis-minor vis-measure",e.appendChild(t),this.dom.frame.appendChild(e),this.props.minorCharHeight=e.clientHeight,this.props.minorCharWidth=e.clientWidth,this.dom.frame.removeChild(e)}if(!("majorCharHeight"in this.props)){var i=document.createTextNode("0"),o=document.createElement("div");o.className="vis-y-axis vis-major vis-measure",o.appendChild(i),this.dom.frame.appendChild(o),this.props.majorCharHeight=o.clientHeight,this.props.majorCharWidth=o.clientWidth,this.dom.frame.removeChild(o)}if(!("titleCharHeight"in this.props)){var n=document.createTextNode("0"),s=document.createElement("div");s.className="vis-y-axis vis-title vis-measure",s.appendChild(n),this.dom.frame.appendChild(s),this.props.titleCharHeight=s.clientHeight,this.props.titleCharWidth=s.clientWidth,this.dom.frame.removeChild(s)}},t.exports=o},function(t,e,i){function o(t,e,i,o,n,s){var r=arguments.length>6&&void 0!==arguments[6]&&arguments[6],a=arguments.length>7&&void 0!==arguments[7]&&arguments[7];if(this.majorSteps=[1,2,5,10],this.minorSteps=[.25,.5,1,2],this.customLines=null,this.containerHeight=n,this.majorCharHeight=s,this._start=t,this._end=e,this.scale=1,this.minorStepIdx=-1,this.magnitudefactor=1,this.determineScale(),this.zeroAlign=r,this.autoScaleStart=i,this.autoScaleEnd=o,this.formattingFunction=a,i||o){var h=this,d=function(t){var e=t-t%(h.magnitudefactor*h.minorSteps[h.minorStepIdx]);return t%(h.magnitudefactor*h.minorSteps[h.minorStepIdx])>h.magnitudefactor*h.minorSteps[h.minorStepIdx]*.5?e+h.magnitudefactor*h.minorSteps[h.minorStepIdx]:e};i&&(this._start-=2*this.magnitudefactor*this.minorSteps[this.minorStepIdx],this._start=d(this._start)),o&&(this._end+=this.magnitudefactor*this.minorSteps[this.minorStepIdx],this._end=d(this._end)),this.determineScale()}}o.prototype.setCharHeight=function(t){this.majorCharHeight=t},o.prototype.setHeight=function(t){this.containerHeight=t},o.prototype.determineScale=function(){var t=this._end-this._start;this.scale=this.containerHeight/t;var e=this.majorCharHeight/this.scale,i=t>0?Math.round(Math.log(t)/Math.LN10):0;this.minorStepIdx=-1,this.magnitudefactor=Math.pow(10,i);var o=0;i<0&&(o=i);for(var n=!1,s=o;Math.abs(s)<=Math.abs(i);s++){this.magnitudefactor=Math.pow(10,s);for(var r=0;r<this.minorSteps.length;r++){if(this.magnitudefactor*this.minorSteps[r]>=e){n=!0,this.minorStepIdx=r;break}}if(!0===n)break}},o.prototype.is_major=function(t){return t%(this.magnitudefactor*this.majorSteps[this.minorStepIdx])==0},o.prototype.getStep=function(){return this.magnitudefactor*this.minorSteps[this.minorStepIdx]},o.prototype.getFirstMajor=function(){var t=this.magnitudefactor*this.majorSteps[this.minorStepIdx];return this.convertValue(this._start+(t-this._start%t)%t)},o.prototype.formatValue=function(t){var e=t.toPrecision(5);return"function"==typeof this.formattingFunction&&(e=this.formattingFunction(t)),"number"==typeof e?""+e:"string"==typeof e?e:t.toPrecision(5)},o.prototype.getLines=function(){for(var t=[],e=this.getStep(),i=(e-this._start%e)%e,o=this._start+i;this._end-o>1e-5;o+=e)o!=this._start&&t.push({major:this.is_major(o),y:this.convertValue(o),val:this.formatValue(o)});return t},o.prototype.followScale=function(t){var e=this.minorStepIdx,i=this._start,o=this._end,n=this,s=function(){n.magnitudefactor*=2},r=function(){n.magnitudefactor/=2};t.minorStepIdx<=1&&this.minorStepIdx<=1||t.minorStepIdx>1&&this.minorStepIdx>1||(t.minorStepIdx<this.minorStepIdx?(this.minorStepIdx=1,2==e?s():(s(),s())):(this.minorStepIdx=2,1==e?r():(r(),r())));for(var a=t.convertValue(0),h=t.getStep()*t.scale,d=!1,l=0;!d&&l++<5;){this.scale=h/(this.minorSteps[this.minorStepIdx]*this.magnitudefactor);var u=this.containerHeight/this.scale;this._start=i,this._end=this._start+u;var c=this._end*this.scale,p=this.magnitudefactor*this.majorSteps[this.minorStepIdx],f=this.getFirstMajor()-t.getFirstMajor();if(this.zeroAlign){var m=a-c;this._end+=m/this.scale,this._start=this._end-u}else this.autoScaleStart?(this._start-=f/this.scale,this._end=this._start+u):(this._start+=p-f/this.scale,this._end=this._start+u);if(!this.autoScaleEnd&&this._end>o+1e-5)r(),d=!1;else{if(!this.autoScaleStart&&this._start<i-1e-5){if(!(this.zeroAlign&&i>=0)){r(),d=!1;continue}console.warn("Can't adhere to given 'min' range, due to zeroalign")}this.autoScaleStart&&this.autoScaleEnd&&u<o-i?(s(),d=!1):d=!0}}},o.prototype.convertValue=function(t){return this.containerHeight-(t-this._start)*this.scale},o.prototype.screenToValue=function(t){return(this.containerHeight-t)/this.scale+this._start},t.exports=o},function(t,e,i){function o(t,e,i,o){this.id=e;var n=["sampling","style","sort","yAxisOrientation","barChart","drawPoints","shaded","interpolation","zIndex","excludeFromStacking","excludeFromLegend"];this.options=r.selectiveBridgeObject(n,i),this.usingDefaultStyle=void 0===t.className,this.groupsUsingDefaultStyles=o,this.zeroPosition=0,this.update(t),1==this.usingDefaultStyle&&(this.groupsUsingDefaultStyles[0]+=1),this.itemsData=[],this.visible=void 0===t.visible||t.visible}var n=i(6),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(2),a=i(110),h=i(111),d=i(72);o.prototype.setItems=function(t){null!=t?(this.itemsData=t,1==this.options.sort&&r.insertSort(this.itemsData,function(t,e){return t.x>e.x?1:-1})):this.itemsData=[]},o.prototype.getItems=function(){return this.itemsData},o.prototype.setZeroPosition=function(t){this.zeroPosition=t},o.prototype.setOptions=function(t){if(void 0!==t){var e=["sampling","style","sort","yAxisOrientation","barChart","zIndex","excludeFromStacking","excludeFromLegend"];r.selectiveDeepExtend(e,this.options,t),"function"==typeof t.drawPoints&&(t.drawPoints={onRender:t.drawPoints}),r.mergeOptions(this.options,t,"interpolation"),r.mergeOptions(this.options,t,"drawPoints"),r.mergeOptions(this.options,t,"shaded"),t.interpolation&&"object"==(0,s.default)(t.interpolation)&&t.interpolation.parametrization&&("uniform"==t.interpolation.parametrization?this.options.interpolation.alpha=0:"chordal"==t.interpolation.parametrization?this.options.interpolation.alpha=1:(this.options.interpolation.parametrization="centripetal",this.options.interpolation.alpha=.5))}},o.prototype.update=function(t){this.group=t,this.content=t.content||"graph",this.className=t.className||this.className||"vis-graph-group"+this.groupsUsingDefaultStyles[0]%10,this.visible=void 0===t.visible||t.visible,this.style=t.style,this.setOptions(t.options)},o.prototype.getLegend=function(t,e,i,o,n){if(void 0==i||null==i){i={svg:document.createElementNS("http://www.w3.org/2000/svg","svg"),svgElements:{},options:this.options,groups:[this]}}switch(void 0!=o&&null!=o||(o=0),void 0!=n&&null!=n||(n=.5*e),this.options.style){case"line":h.drawIcon(this,o,n,t,e,i);break;case"points":case"point":d.drawIcon(this,o,n,t,e,i);break;case"bar":a.drawIcon(this,o,n,t,e,i)}return{icon:i.svg,label:this.content,orientation:this.options.yAxisOrientation}},o.prototype.getYRange=function(t){for(var e=t[0].y,i=t[0].y,o=0;o<t.length;o++)e=e>t[o].y?t[o].y:e,i=i<t[o].y?t[o].y:i;return{min:e,max:i,yAxisOrientation:this.options.yAxisOrientation}},t.exports=o},function(t,e,i){function o(t,e){}var n=i(14),s=i(72);o.drawIcon=function(t,e,i,o,s,r){var a=.5*s,h=n.getSVGElement("rect",r.svgElements,r.svg);h.setAttributeNS(null,"x",e),h.setAttributeNS(null,"y",i-a),h.setAttributeNS(null,"width",o),h.setAttributeNS(null,"height",2*a),h.setAttributeNS(null,"class","vis-outline");var d=Math.round(.3*o),l=t.options.barChart.width,u=l/d,c=Math.round(.4*s),p=Math.round(.75*s),f=Math.round((o-2*d)/3);if(n.drawBar(e+.5*d+f,i+a-c-1,d,c,t.className+" vis-bar",r.svgElements,r.svg,t.style),n.drawBar(e+1.5*d+f+2,i+a-p-1,d,p,t.className+" vis-bar",r.svgElements,r.svg,t.style),1==t.options.drawPoints.enabled){var m={style:t.options.drawPoints.style,styles:t.options.drawPoints.styles,size:t.options.drawPoints.size/u,className:t.className};n.drawPoint(e+.5*d+f,i+a-c-1,m,r.svgElements,r.svg),n.drawPoint(e+1.5*d+f+2,i+a-p-1,m,r.svgElements,r.svg)}},o.draw=function(t,e,i){var r,a,h,d,l,u,c=[],p={},f=0;for(l=0;l<t.length;l++)if(d=i.groups[t[l]],"bar"===d.options.style&&!0===d.visible&&(void 0===i.options.groups.visibility[t[l]]||!0===i.options.groups.visibility[t[l]]))for(u=0;u<e[t[l]].length;u++)c.push({screen_x:e[t[l]][u].screen_x,screen_end:e[t[l]][u].screen_end,screen_y:e[t[l]][u].screen_y,x:e[t[l]][u].x,end:e[t[l]][u].end,y:e[t[l]][u].y,groupId:t[l],label:e[t[l]][u].label}),f+=1;if(0!==f)for(c.sort(function(t,e){return t.screen_x===e.screen_x?t.groupId<e.groupId?-1:1:t.screen_x-e.screen_x}),o._getDataIntersections(p,c),l=0;l<c.length;l++){d=i.groups[c[l].groupId];var m=void 0!=d.options.barChart.minWidth?d.options.barChart.minWidth:.1*d.options.barChart.width;a=c[l].screen_x;var v=0;if(void 0===p[a])l+1<c.length&&(r=Math.abs(c[l+1].screen_x-a)),h=o._getSafeDrawData(r,d,m);else{var g=l+(p[a].amount-p[a].resolved);g<c.length&&(r=Math.abs(c[g].screen_x-a)),h=o._getSafeDrawData(r,d,m),p[a].resolved+=1,!0===d.options.stack&&!0!==d.options.excludeFromStacking?c[l].screen_y<d.zeroPosition?(v=p[a].accumulatedNegative,p[a].accumulatedNegative+=d.zeroPosition-c[l].screen_y):(v=p[a].accumulatedPositive,p[a].accumulatedPositive+=d.zeroPosition-c[l].screen_y):!0===d.options.barChart.sideBySide&&(h.width=h.width/p[a].amount,h.offset+=p[a].resolved*h.width-.5*h.width*(p[a].amount+1))}var y=h.width,b=c[l].screen_x;if(void 0!=c[l].screen_end?(y=c[l].screen_end-c[l].screen_x,b+=.5*y):b+=h.offset,n.drawBar(b,c[l].screen_y-v,y,d.zeroPosition-c[l].screen_y,d.className+" vis-bar",i.svgElements,i.svg,d.style),!0===d.options.drawPoints.enabled){var _={screen_x:c[l].screen_x,screen_y:c[l].screen_y-v,x:c[l].x,y:c[l].y,groupId:c[l].groupId,label:c[l].label};s.draw([_],d,i,h.offset)}}},o._getDataIntersections=function(t,e){for(var i,o=0;o<e.length;o++)o+1<e.length&&(i=Math.abs(e[o+1].screen_x-e[o].screen_x)),o>0&&(i=Math.min(i,Math.abs(e[o-1].screen_x-e[o].screen_x))),0===i&&(void 0===t[e[o].screen_x]&&(t[e[o].screen_x]={amount:0,resolved:0,accumulatedPositive:0,accumulatedNegative:0}),t[e[o].screen_x].amount+=1)},o._getSafeDrawData=function(t,e,i){var o,n;return t<e.options.barChart.width&&t>0?(o=t<i?i:t,n=0,"left"===e.options.barChart.align?n-=.5*t:"right"===e.options.barChart.align&&(n+=.5*t)):(o=e.options.barChart.width,n=0,"left"===e.options.barChart.align?n-=.5*e.options.barChart.width:"right"===e.options.barChart.align&&(n+=.5*e.options.barChart.width)),{width:o,offset:n}},o.getStackedYRange=function(t,e,i,n,s){if(t.length>0){t.sort(function(t,e){return t.screen_x===e.screen_x?t.groupId<e.groupId?-1:1:t.screen_x-e.screen_x});var r={};o._getDataIntersections(r,t),e[n]=o._getStackedYRange(r,t),e[n].yAxisOrientation=s,i.push(n)}},o._getStackedYRange=function(t,e){for(var i,o=e[0].screen_y,n=e[0].screen_y,s=0;s<e.length;s++)i=e[s].screen_x,void 0===t[i]?(o=o>e[s].screen_y?e[s].screen_y:o,n=n<e[s].screen_y?e[s].screen_y:n):e[s].screen_y<0?t[i].accumulatedNegative+=e[s].screen_y:t[i].accumulatedPositive+=e[s].screen_y;for(var r in t)t.hasOwnProperty(r)&&(o=o>t[r].accumulatedNegative?t[r].accumulatedNegative:o,o=o>t[r].accumulatedPositive?t[r].accumulatedPositive:o,n=n<t[r].accumulatedNegative?t[r].accumulatedNegative:n,n=n<t[r].accumulatedPositive?t[r].accumulatedPositive:n);return{min:o,max:n}},t.exports=o},function(t,e,i){function o(t,e){}var n=i(14);o.calcPath=function(t,e){if(null!=t&&t.length>0){return 1==e.options.interpolation.enabled?o._catmullRom(t,e):o._linear(t)}},o.drawIcon=function(t,e,i,o,s,r){var a,h,d=.5*s,l=n.getSVGElement("rect",r.svgElements,r.svg);if(l.setAttributeNS(null,"x",e),l.setAttributeNS(null,"y",i-d),l.setAttributeNS(null,"width",o),l.setAttributeNS(null,"height",2*d),l.setAttributeNS(null,"class","vis-outline"),a=n.getSVGElement("path",r.svgElements,r.svg),a.setAttributeNS(null,"class",t.className),void 0!==t.style&&a.setAttributeNS(null,"style",t.style),a.setAttributeNS(null,"d","M"+e+","+i+" L"+(e+o)+","+i),1==t.options.shaded.enabled&&(h=n.getSVGElement("path",r.svgElements,r.svg),"top"==t.options.shaded.orientation?h.setAttributeNS(null,"d","M"+e+", "+(i-d)+"L"+e+","+i+" L"+(e+o)+","+i+" L"+(e+o)+","+(i-d)):h.setAttributeNS(null,"d","M"+e+","+i+" L"+e+","+(i+d)+" L"+(e+o)+","+(i+d)+"L"+(e+o)+","+i),h.setAttributeNS(null,"class",t.className+" vis-icon-fill"),void 0!==t.options.shaded.style&&""!==t.options.shaded.style&&h.setAttributeNS(null,"style",t.options.shaded.style)),1==t.options.drawPoints.enabled){var u={style:t.options.drawPoints.style,styles:t.options.drawPoints.styles,size:t.options.drawPoints.size,className:t.className};n.drawPoint(e+.5*o,i,u,r.svgElements,r.svg)}},o.drawShading=function(t,e,i,o){if(1==e.options.shaded.enabled){var s=Number(o.svg.style.height.replace("px","")),r=n.getSVGElement("path",o.svgElements,o.svg),a="L";1==e.options.interpolation.enabled&&(a="C");var h,d=0;d="top"==e.options.shaded.orientation?0:"bottom"==e.options.shaded.orientation?s:Math.min(Math.max(0,e.zeroPosition),s),h="group"==e.options.shaded.orientation&&null!=i&&void 0!=i?"M"+t[0][0]+","+t[0][1]+" "+this.serializePath(t,a,!1)+" L"+i[i.length-1][0]+","+i[i.length-1][1]+" "+this.serializePath(i,a,!0)+i[0][0]+","+i[0][1]+" Z":"M"+t[0][0]+","+t[0][1]+" "+this.serializePath(t,a,!1)+" V"+d+" H"+t[0][0]+" Z",r.setAttributeNS(null,"class",e.className+" vis-fill"),void 0!==e.options.shaded.style&&r.setAttributeNS(null,"style",e.options.shaded.style),r.setAttributeNS(null,"d",h)}},o.draw=function(t,e,i){if(null!=t&&void 0!=t){var o=n.getSVGElement("path",i.svgElements,i.svg);o.setAttributeNS(null,"class",e.className),void 0!==e.style&&o.setAttributeNS(null,"style",e.style);var s="L";1==e.options.interpolation.enabled&&(s="C"),o.setAttributeNS(null,"d","M"+t[0][0]+","+t[0][1]+" "+this.serializePath(t,s,!1))}},o.serializePath=function(t,e,i){if(t.length<2)return"";var o,n=e;if(i)for(o=t.length-2;o>0;o--)n+=t[o][0]+","+t[o][1]+" ";else for(o=1;o<t.length;o++)n+=t[o][0]+","+t[o][1]+" ";return n},o._catmullRomUniform=function(t){var e,i,o,n,s,r,a=[];a.push([Math.round(t[0].screen_x),Math.round(t[0].screen_y)]);for(var h=t.length,d=0;d<h-1;d++)e=0==d?t[0]:t[d-1],i=t[d],o=t[d+1],n=d+2<h?t[d+2]:o,s={screen_x:(-e.screen_x+6*i.screen_x+o.screen_x)*(1/6),screen_y:(-e.screen_y+6*i.screen_y+o.screen_y)*(1/6)},r={screen_x:(i.screen_x+6*o.screen_x-n.screen_x)*(1/6),screen_y:(i.screen_y+6*o.screen_y-n.screen_y)*(1/6)},a.push([s.screen_x,s.screen_y]),a.push([r.screen_x,r.screen_y]),a.push([o.screen_x,o.screen_y]);return a},o._catmullRom=function(t,e){var i=e.options.interpolation.alpha;if(0==i||void 0===i)return this._catmullRomUniform(t);var o,n,s,r,a,h,d,l,u,c,p,f,m,v,g,y,b,_,w,x=[];x.push([Math.round(t[0].screen_x),Math.round(t[0].screen_y)]);for(var k=t.length,S=0;S<k-1;S++)o=0==S?t[0]:t[S-1],n=t[S],s=t[S+1],r=S+2<k?t[S+2]:s,
d=Math.sqrt(Math.pow(o.screen_x-n.screen_x,2)+Math.pow(o.screen_y-n.screen_y,2)),l=Math.sqrt(Math.pow(n.screen_x-s.screen_x,2)+Math.pow(n.screen_y-s.screen_y,2)),u=Math.sqrt(Math.pow(s.screen_x-r.screen_x,2)+Math.pow(s.screen_y-r.screen_y,2)),v=Math.pow(u,i),y=Math.pow(u,2*i),g=Math.pow(l,i),b=Math.pow(l,2*i),w=Math.pow(d,i),_=Math.pow(d,2*i),c=2*_+3*w*g+b,p=2*y+3*v*g+b,f=3*w*(w+g),f>0&&(f=1/f),m=3*v*(v+g),m>0&&(m=1/m),a={screen_x:(-b*o.screen_x+c*n.screen_x+_*s.screen_x)*f,screen_y:(-b*o.screen_y+c*n.screen_y+_*s.screen_y)*f},h={screen_x:(y*n.screen_x+p*s.screen_x-b*r.screen_x)*m,screen_y:(y*n.screen_y+p*s.screen_y-b*r.screen_y)*m},0==a.screen_x&&0==a.screen_y&&(a=n),0==h.screen_x&&0==h.screen_y&&(h=s),x.push([a.screen_x,a.screen_y]),x.push([h.screen_x,h.screen_y]),x.push([s.screen_x,s.screen_y]);return x},o._linear=function(t){for(var e=[],i=0;i<t.length;i++)e.push([t[i].screen_x,t[i].screen_y]);return e},t.exports=o},function(t,e,i){function o(t,e,i,o){this.body=t,this.defaultOptions={enabled:!1,icons:!0,iconSize:20,iconSpacing:6,left:{visible:!0,position:"top-left"},right:{visible:!0,position:"top-right"}},this.side=i,this.options=r.extend({},this.defaultOptions),this.linegraphOptions=o,this.svgElements={},this.dom={},this.groups={},this.amountOfGroups=0,this._create(),this.framework={svg:this.svg,svgElements:this.svgElements,options:this.options,groups:this.groups},this.setOptions(e)}var n=i(8),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(2),a=i(14),h=i(16);o.prototype=new h,o.prototype.clear=function(){this.groups={},this.amountOfGroups=0},o.prototype.addGroup=function(t,e){1!=e.options.excludeFromLegend&&(this.groups.hasOwnProperty(t)||(this.groups[t]=e),this.amountOfGroups+=1)},o.prototype.updateGroup=function(t,e){this.groups[t]=e},o.prototype.removeGroup=function(t){this.groups.hasOwnProperty(t)&&(delete this.groups[t],this.amountOfGroups-=1)},o.prototype._create=function(){this.dom.frame=document.createElement("div"),this.dom.frame.className="vis-legend",this.dom.frame.style.position="absolute",this.dom.frame.style.top="10px",this.dom.frame.style.display="block",this.dom.textArea=document.createElement("div"),this.dom.textArea.className="vis-legend-text",this.dom.textArea.style.position="relative",this.dom.textArea.style.top="0px",this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.style.position="absolute",this.svg.style.top="0px",this.svg.style.width=this.options.iconSize+5+"px",this.svg.style.height="100%",this.dom.frame.appendChild(this.svg),this.dom.frame.appendChild(this.dom.textArea)},o.prototype.hide=function(){this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame)},o.prototype.show=function(){this.dom.frame.parentNode||this.body.dom.center.appendChild(this.dom.frame)},o.prototype.setOptions=function(t){var e=["enabled","orientation","icons","left","right"];r.selectiveDeepExtend(e,this.options,t)},o.prototype.redraw=function(){var t=0,e=(0,s.default)(this.groups);e.sort(function(t,e){return t<e?-1:1});for(var i=0;i<e.length;i++){var o=e[i];1!=this.groups[o].visible||void 0!==this.linegraphOptions.visibility[o]&&1!=this.linegraphOptions.visibility[o]||t++}if(0==this.options[this.side].visible||0==this.amountOfGroups||0==this.options.enabled||0==t)this.hide();else{if(this.show(),"top-left"==this.options[this.side].position||"bottom-left"==this.options[this.side].position?(this.dom.frame.style.left="4px",this.dom.frame.style.textAlign="left",this.dom.textArea.style.textAlign="left",this.dom.textArea.style.left=this.options.iconSize+15+"px",this.dom.textArea.style.right="",this.svg.style.left="0px",this.svg.style.right=""):(this.dom.frame.style.right="4px",this.dom.frame.style.textAlign="right",this.dom.textArea.style.textAlign="right",this.dom.textArea.style.right=this.options.iconSize+15+"px",this.dom.textArea.style.left="",this.svg.style.right="0px",this.svg.style.left=""),"top-left"==this.options[this.side].position||"top-right"==this.options[this.side].position)this.dom.frame.style.top=4-Number(this.body.dom.center.style.top.replace("px",""))+"px",this.dom.frame.style.bottom="";else{var n=this.body.domProps.center.height-this.body.domProps.centerContainer.height;this.dom.frame.style.bottom=4+n+Number(this.body.dom.center.style.top.replace("px",""))+"px",this.dom.frame.style.top=""}0==this.options.icons?(this.dom.frame.style.width=this.dom.textArea.offsetWidth+10+"px",this.dom.textArea.style.right="",this.dom.textArea.style.left="",this.svg.style.width="0px"):(this.dom.frame.style.width=this.options.iconSize+15+this.dom.textArea.offsetWidth+10+"px",this.drawLegendIcons());var r="";for(i=0;i<e.length;i++)o=e[i],1!=this.groups[o].visible||void 0!==this.linegraphOptions.visibility[o]&&1!=this.linegraphOptions.visibility[o]||(r+=this.groups[o].content+"<br />");this.dom.textArea.innerHTML=r,this.dom.textArea.style.lineHeight=.75*this.options.iconSize+this.options.iconSpacing+"px"}},o.prototype.drawLegendIcons=function(){if(this.dom.frame.parentNode){var t=(0,s.default)(this.groups);t.sort(function(t,e){return t<e?-1:1}),a.resetElements(this.svgElements);var e=window.getComputedStyle(this.dom.frame).paddingTop,i=Number(e.replace("px","")),o=i,n=this.options.iconSize,r=.75*this.options.iconSize,h=i+.5*r+3;this.svg.style.width=n+5+i+"px";for(var d=0;d<t.length;d++){var l=t[d];1!=this.groups[l].visible||void 0!==this.linegraphOptions.visibility[l]&&1!=this.linegraphOptions.visibility[l]||(this.groups[l].getLegend(n,r,this.framework,o,h),h+=r+this.options.iconSpacing)}}},t.exports=o},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var o="string",n="boolean",s="number",r="object",a={configure:{enabled:{boolean:n},filter:{boolean:n,function:"function"},container:{dom:"dom"},__type__:{object:r,boolean:n,function:"function"}},yAxisOrientation:{string:["left","right"]},defaultGroup:{string:o},sort:{boolean:n},sampling:{boolean:n},stack:{boolean:n},graphHeight:{string:o,number:s},shaded:{enabled:{boolean:n},orientation:{string:["bottom","top","zero","group"]},groupId:{object:r},__type__:{boolean:n,object:r}},style:{string:["line","bar","points"]},barChart:{width:{number:s},minWidth:{number:s},sideBySide:{boolean:n},align:{string:["left","center","right"]},__type__:{object:r}},interpolation:{enabled:{boolean:n},parametrization:{string:["centripetal","chordal","uniform"]},alpha:{number:s},__type__:{object:r,boolean:n}},drawPoints:{enabled:{boolean:n},onRender:{function:"function"},size:{number:s},style:{string:["square","circle"]},__type__:{object:r,boolean:n,function:"function"}},dataAxis:{showMinorLabels:{boolean:n},showMajorLabels:{boolean:n},icons:{boolean:n},width:{string:o,number:s},visible:{boolean:n},alignZeros:{boolean:n},left:{range:{min:{number:s,undefined:"undefined"},max:{number:s,undefined:"undefined"},__type__:{object:r}},format:{function:"function"},title:{text:{string:o,number:s,undefined:"undefined"},style:{string:o,undefined:"undefined"},__type__:{object:r}},__type__:{object:r}},right:{range:{min:{number:s,undefined:"undefined"},max:{number:s,undefined:"undefined"},__type__:{object:r}},format:{function:"function"},title:{text:{string:o,number:s,undefined:"undefined"},style:{string:o,undefined:"undefined"},__type__:{object:r}},__type__:{object:r}},__type__:{object:r}},legend:{enabled:{boolean:n},icons:{boolean:n},left:{visible:{boolean:n},position:{string:["top-right","bottom-right","top-left","bottom-left"]},__type__:{object:r}},right:{visible:{boolean:n},position:{string:["top-right","bottom-right","top-left","bottom-left"]},__type__:{object:r}},__type__:{object:r,boolean:n}},groups:{visibility:{any:"any"},__type__:{object:r}},autoResize:{boolean:n},throttleRedraw:{number:s},clickToUse:{boolean:n},end:{number:s,date:"date",string:o,moment:"moment"},format:{minorLabels:{millisecond:{string:o,undefined:"undefined"},second:{string:o,undefined:"undefined"},minute:{string:o,undefined:"undefined"},hour:{string:o,undefined:"undefined"},weekday:{string:o,undefined:"undefined"},day:{string:o,undefined:"undefined"},month:{string:o,undefined:"undefined"},year:{string:o,undefined:"undefined"},__type__:{object:r}},majorLabels:{millisecond:{string:o,undefined:"undefined"},second:{string:o,undefined:"undefined"},minute:{string:o,undefined:"undefined"},hour:{string:o,undefined:"undefined"},weekday:{string:o,undefined:"undefined"},day:{string:o,undefined:"undefined"},month:{string:o,undefined:"undefined"},year:{string:o,undefined:"undefined"},__type__:{object:r}},__type__:{object:r}},moment:{function:"function"},height:{string:o,number:s},hiddenDates:{start:{date:"date",number:s,string:o,moment:"moment"},end:{date:"date",number:s,string:o,moment:"moment"},repeat:{string:o},__type__:{object:r,array:"array"}},locale:{string:o},locales:{__any__:{any:"any"},__type__:{object:r}},max:{date:"date",number:s,string:o,moment:"moment"},maxHeight:{number:s,string:o},maxMinorChars:{number:s},min:{date:"date",number:s,string:o,moment:"moment"},minHeight:{number:s,string:o},moveable:{boolean:n},multiselect:{boolean:n},orientation:{string:o},showCurrentTime:{boolean:n},showMajorLabels:{boolean:n},showMinorLabels:{boolean:n},start:{date:"date",number:s,string:o,moment:"moment"},timeAxis:{scale:{string:o,undefined:"undefined"},step:{number:s,undefined:"undefined"},__type__:{object:r}},width:{string:o,number:s},zoomable:{boolean:n},zoomKey:{string:["ctrlKey","altKey","metaKey",""]},zoomMax:{number:s},zoomMin:{number:s},zIndex:{number:s},__type__:{object:r}},h={global:{sort:!0,sampling:!0,stack:!1,shaded:{enabled:!1,orientation:["zero","top","bottom","group"]},style:["line","bar","points"],barChart:{width:[50,5,100,5],minWidth:[50,5,100,5],sideBySide:!1,align:["left","center","right"]},interpolation:{enabled:!0,parametrization:["centripetal","chordal","uniform"]},drawPoints:{enabled:!0,size:[6,2,30,1],style:["square","circle"]},dataAxis:{showMinorLabels:!0,showMajorLabels:!0,icons:!1,width:[40,0,200,1],visible:!0,alignZeros:!0,left:{title:{text:"",style:""}},right:{title:{text:"",style:""}}},legend:{enabled:!1,icons:!0,left:{visible:!0,position:["top-right","bottom-right","top-left","bottom-left"]},right:{visible:!0,position:["top-right","bottom-right","top-left","bottom-left"]}},autoResize:!0,clickToUse:!1,end:"",format:{minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"D",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMMM YYYY",day:"MMMM YYYY",month:"YYYY",year:""}},height:"",locale:"",max:"",maxHeight:"",maxMinorChars:[7,0,20,1],min:"",minHeight:"",moveable:!0,orientation:["both","bottom","top"],showCurrentTime:!1,showMajorLabels:!0,showMinorLabels:!0,start:"",width:"100%",zoomable:!0,zoomKey:["ctrlKey","altKey","metaKey",""],zoomMax:[31536e10,10,31536e10,1],zoomMin:[10,10,31536e10,1],zIndex:0}};e.allOptions=a,e.configureOptions=h},function(t,e,i){function o(t){return R=t,f()}function n(){A=0,z=R.charAt(0)}function s(){A++,z=R.charAt(A)}function r(){return R.charAt(A+1)}function a(t){return B.test(t)}function h(t,e){if(t||(t={}),e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function d(t,e,i){for(var o=e.split("."),n=t;o.length;){var s=o.shift();o.length?(n[s]||(n[s]={}),n=n[s]):n[s]=i}}function l(t,e){for(var i,o,n=null,s=[t],r=t;r.parent;)s.push(r.parent),r=r.parent;if(r.nodes)for(i=0,o=r.nodes.length;i<o;i++)if(e.id===r.nodes[i].id){n=r.nodes[i];break}for(n||(n={id:e.id},t.node&&(n.attr=h(n.attr,t.node))),i=s.length-1;i>=0;i--){var a=s[i];a.nodes||(a.nodes=[]),-1===a.nodes.indexOf(n)&&a.nodes.push(n)}e.attr&&(n.attr=h(n.attr,e.attr))}function u(t,e){if(t.edges||(t.edges=[]),t.edges.push(e),t.edge){var i=h({},t.edge);e.attr=h(i,e.attr)}}function c(t,e,i,o,n){var s={from:e,to:i,type:o};return t.edge&&(s.attr=h({},t.edge)),s.attr=h(s.attr||{},n),s}function p(){for(F=I.NULL,L="";" "===z||"\t"===z||"\n"===z||"\r"===z;)s();do{var t=!1;if("#"===z){for(var e=A-1;" "===R.charAt(e)||"\t"===R.charAt(e);)e--;if("\n"===R.charAt(e)||""===R.charAt(e)){for(;""!=z&&"\n"!=z;)s();t=!0}}if("/"===z&&"/"===r()){for(;""!=z&&"\n"!=z;)s();t=!0}if("/"===z&&"*"===r()){for(;""!=z;){if("*"===z&&"/"===r()){s(),s();break}s()}t=!0}for(;" "===z||"\t"===z||"\n"===z||"\r"===z;)s()}while(t);if(""===z)return void(F=I.DELIMITER);var i=z+r();if(N[i])return F=I.DELIMITER,L=i,s(),void s();if(N[z])return F=I.DELIMITER,L=z,void s();if(a(z)||"-"===z){for(L+=z,s();a(z);)L+=z,s();return"false"===L?L=!1:"true"===L?L=!0:isNaN(Number(L))||(L=Number(L)),void(F=I.IDENTIFIER)}if('"'===z){for(s();""!=z&&('"'!=z||'"'===z&&'"'===r());)'"'===z?(L+=z,s()):"\\"===z&&"n"===r()?(L+="\n",s()):L+=z,s();if('"'!=z)throw x('End of string " expected');return s(),void(F=I.IDENTIFIER)}for(F=I.UNKNOWN;""!=z;)L+=z,s();throw new SyntaxError('Syntax error in part "'+k(L,30)+'"')}function f(){var t={};if(n(),p(),"strict"===L&&(t.strict=!0,p()),"graph"!==L&&"digraph"!==L||(t.type=L,p()),F===I.IDENTIFIER&&(t.id=L,p()),"{"!=L)throw x("Angle bracket { expected");if(p(),m(t),"}"!=L)throw x("Angle bracket } expected");if(p(),""!==L)throw x("End of file expected");return p(),delete t.node,delete t.edge,delete t.graph,t}function m(t){for(;""!==L&&"}"!=L;)v(t),";"===L&&p()}function v(t){var e=g(t);if(e)return void _(t,e);if(!y(t)){if(F!=I.IDENTIFIER)throw x("Identifier expected");var i=L;if(p(),"="===L){if(p(),F!=I.IDENTIFIER)throw x("Identifier expected");t[i]=L,p()}else b(t,i)}}function g(t){var e=null;if("subgraph"===L&&(e={},e.type="subgraph",p(),F===I.IDENTIFIER&&(e.id=L,p())),"{"===L){if(p(),e||(e={}),e.parent=t,e.node=t.node,e.edge=t.edge,e.graph=t.graph,m(e),"}"!=L)throw x("Angle bracket } expected");p(),delete e.node,delete e.edge,delete e.graph,delete e.parent,t.subgraphs||(t.subgraphs=[]),t.subgraphs.push(e)}return e}function y(t){return"node"===L?(p(),t.node=w(),"node"):"edge"===L?(p(),t.edge=w(),"edge"):"graph"===L?(p(),t.graph=w(),"graph"):null}function b(t,e){var i={id:e},o=w();o&&(i.attr=o),l(t,i),_(t,e)}function _(t,e){for(;"->"===L||"--"===L;){var i,o=L;p();var n=g(t);if(n)i=n;else{if(F!=I.IDENTIFIER)throw x("Identifier or subgraph expected");i=L,l(t,{id:i}),p()}u(t,c(t,e,i,o,w())),e=i}}function w(){for(var t=null,e={dashed:!0,solid:!1,dotted:[1,5]};"["===L;){for(p(),t={};""!==L&&"]"!=L;){if(F!=I.IDENTIFIER)throw x("Attribute name expected");var i=L;if(p(),"="!=L)throw x("Equal sign = expected");if(p(),F!=I.IDENTIFIER)throw x("Attribute value expected");var o=L;"style"===i&&(o=e[o]),d(t,i,o),p(),","==L&&p()}if("]"!=L)throw x("Bracket ] expected");p()}return t}function x(t){return new SyntaxError(t+', got "'+k(L,30)+'" (char '+A+")")}function k(t,e){return t.length<=e?t:t.substr(0,27)+"..."}function S(t,e,i){Array.isArray(t)?t.forEach(function(t){Array.isArray(e)?e.forEach(function(e){i(t,e)}):i(t,e)}):Array.isArray(e)?e.forEach(function(e){i(t,e)}):i(t,e)}function D(t,e,i){for(var o=e.split("."),n=o.pop(),s=t,r=0;r<o.length;r++){var a=o[r];a in s||(s[a]={}),s=s[a]}return s[n]=i,t}function M(t,e){var i={};for(var o in t)if(t.hasOwnProperty(o)){var n=e[o];Array.isArray(n)?n.forEach(function(e){D(i,e,t[o])}):"string"==typeof n?D(i,n,t[o]):D(i,o,t[o])}return i}function C(t){var e=o(t),i={nodes:[],edges:[],options:{}};if(e.nodes&&e.nodes.forEach(function(t){var e={id:t.id,label:String(t.label||t.id)};h(e,M(t.attr,T)),e.image&&(e.shape="image"),i.nodes.push(e)}),e.edges){var n=function(t){var e={from:t.from,to:t.to};return h(e,M(t.attr,P)),e.arrows="->"===t.type?"to":void 0,e};e.edges.forEach(function(t){var e,o;e=t.from instanceof Object?t.from.nodes:{id:t.from},o=t.to instanceof Object?t.to.nodes:{id:t.to},t.from instanceof Object&&t.from.edges&&t.from.edges.forEach(function(t){var e=n(t);i.edges.push(e)}),S(e,o,function(e,o){var s=c(i,e.id,o.id,t.type,t.attr),r=n(s);i.edges.push(r)}),t.to instanceof Object&&t.to.edges&&t.to.edges.forEach(function(t){var e=n(t);i.edges.push(e)})})}return e.attr&&(i.options=e.attr),i}var O=i(29),E=function(t){return t&&t.__esModule?t:{default:t}}(O),T={fontsize:"font.size",fontcolor:"font.color",labelfontcolor:"font.color",fontname:"font.face",color:["color.border","color.background"],fillcolor:"color.background",tooltip:"title",labeltooltip:"title"},P=(0,E.default)(T);P.color="color.color",P.style="dashes";var I={NULL:0,DELIMITER:1,IDENTIFIER:2,UNKNOWN:3},N={"{":!0,"}":!0,"[":!0,"]":!0,";":!0,"=":!0,",":!0,"->":!0,"--":!0},R="",A=0,z="",L="",F=I.NULL,B=/[a-zA-Z_0-9.:#]/;e.parseDOT=o,e.DOTToGraph=C},function(t,e,i){function o(t,e){var i=[],o=[],n={edges:{inheritColor:!1},nodes:{fixed:!1,parseColor:!1}};void 0!==e&&(void 0!==e.fixed&&(n.nodes.fixed=e.fixed),void 0!==e.parseColor&&(n.nodes.parseColor=e.parseColor),void 0!==e.inheritColor&&(n.edges.inheritColor=e.inheritColor));for(var s=t.edges,r=t.nodes,a=0;a<s.length;a++){var h={},d=s[a];h.id=d.id,h.from=d.source,h.to=d.target,h.attributes=d.attributes,h.label=d.label,h.title=void 0!==d.attributes?d.attributes.title:void 0,"Directed"===d.type&&(h.arrows="to"),d.color&&!1===n.inheritColor&&(h.color=d.color),i.push(h)}for(var l=0;l<r.length;l++){var u={},c=r[l];u.id=c.id,u.attributes=c.attributes,u.x=c.x,u.y=c.y,u.label=c.label,u.title=void 0!==c.attributes?c.attributes.title:c.title,!0===n.nodes.parseColor?u.color=c.color:u.color=void 0!==c.color?{background:c.color,border:c.color,highlight:{background:c.color,border:c.color},hover:{background:c.color,border:c.color}}:void 0,u.size=c.size,u.fixed=n.nodes.fixed&&void 0!==c.x&&void 0!==c.y,o.push(u)}return{nodes:o,edges:i}}e.parseGephi=o},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(185),d=o(h),l=function(){function t(e){(0,s.default)(this,t),this.images={},this.imageBroken={},this.callback=e}return(0,a.default)(t,[{key:"_tryloadBrokenUrl",value:function(t,e,i){if(void 0!==t&&void 0!==i){if(void 0===e)return void console.warn("No broken url image defined");i.onerror=function(){console.error("Could not load brokenImage:",e)},i.image.src=e}}},{key:"_redrawWithImage",value:function(t){this.callback&&this.callback(t)}},{key:"load",value:function(t,e){var i=this,o=this.images[t];if(o)return o;var n=new d.default;return this.images[t]=n,n.image.onload=function(){i._fixImageCoordinates(n.image),n.init(),i._redrawWithImage(n)},n.image.onerror=function(){console.error("Could not load image:",t),i._tryloadBrokenUrl(t,e,n)},n.image.src=t,n}},{key:"_fixImageCoordinates",value:function(t){0===t.width&&(document.body.appendChild(t),t.width=t.offsetWidth,t.height=t.offsetHeight,document.body.removeChild(t))}}]),t}();e.default=l},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(30),s=o(n),r=i(6),a=o(r),h=i(0),d=o(h),l=i(1),u=o(l),c=i(2),p=i(48).default,f=i(191).default,m=["bold","ital","boldital","mono"],v=function(){function t(e,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(0,d.default)(this,t),this.body=e,this.pointToSelf=!1,this.baseSize=void 0,this.fontOptions={},this.setOptions(i),this.size={top:0,left:0,width:0,height:0,yLine:0},this.isEdgeLabel=o}return(0,u.default)(t,[{key:"setOptions",value:function(t){if(this.elementOptions=t,this.initFontOptions(t.font),p.isValidLabel(t.label)?this.labelDirty=!0:t.label="",void 0!==t.font&&null!==t.font)if("string"==typeof t.font)this.baseSize=this.fontOptions.size;else if("object"===(0,a.default)(t.font)){var e=t.font.size;void 0!==e&&(this.baseSize=e)}}},{key:"initFontOptions",value:function(e){var i=this;if(c.forEach(m,function(t){i.fontOptions[t]={}}),t.parseFontString(this.fontOptions,e))return void(this.fontOptions.vadjust=0);c.forEach(e,function(t,e){void 0!==t&&null!==t&&"object"!==(void 0===t?"undefined":(0,a.default)(t))&&(i.fontOptions[e]=t)})}},{key:"constrain",value:function(t){var e={constrainWidth:!1,maxWdt:-1,minWdt:-1,constrainHeight:!1,minHgt:-1,valign:"middle"},i=c.topMost(t,"widthConstraint");if("number"==typeof i)e.maxWdt=Number(i),e.minWdt=Number(i);else if("object"===(void 0===i?"undefined":(0,a.default)(i))){var o=c.topMost(t,["widthConstraint","maximum"]);"number"==typeof o&&(e.maxWdt=Number(o));var n=c.topMost(t,["widthConstraint","minimum"]);"number"==typeof n&&(e.minWdt=Number(n))}var s=c.topMost(t,"heightConstraint");if("number"==typeof s)e.minHgt=Number(s);else if("object"===(void 0===s?"undefined":(0,a.default)(s))){var r=c.topMost(t,["heightConstraint","minimum"]);"number"==typeof r&&(e.minHgt=Number(r));var h=c.topMost(t,["heightConstraint","valign"]);"string"==typeof h&&("top"!==h&&"bottom"!==h||(e.valign=h))}return e}},{key:"update",value:function(t,e){this.setOptions(t,!0),this.propagateFonts(e),c.deepExtend(this.fontOptions,this.constrain(e)),this.fontOptions.chooser=p.choosify("label",e)}},{key:"adjustSizes",value:function(t){var e=t?t.right+t.left:0;this.fontOptions.constrainWidth&&(this.fontOptions.maxWdt-=e,this.fontOptions.minWdt-=e);var i=t?t.top+t.bottom:0;this.fontOptions.constrainHeight&&(this.fontOptions.minHgt-=i)}},{key:"addFontOptionsToPile",value:function(t,e){for(var i=0;i<e.length;++i)this.addFontToPile(t,e[i])}},{key:"addFontToPile",value:function(t,e){if(void 0!==e&&void 0!==e.font&&null!==e.font){var i=e.font;t.push(i)}}},{key:"getBasicOptions",value:function(e){for(var i={},o=0;o<e.length;++o){var n=e[o],s={};t.parseFontString(s,n)&&(n=s),c.forEach(n,function(t,e){void 0!==t&&(i.hasOwnProperty(e)||(-1!==m.indexOf(e)?i[e]={}:i[e]=t))})}return i}},{key:"getFontOption",value:function(e,i,o){for(var n=void 0,s=0;s<e.length;++s){var r=e[s];if(r.hasOwnProperty(i)){if(void 0===(n=r[i])||null===n)continue;var a={};if(t.parseFontString(a,n)&&(n=a),n.hasOwnProperty(o))return n[o]}}if(this.fontOptions.hasOwnProperty(o))return this.fontOptions[o];throw new Error("Did not find value for multi-font for property: '"+o+"'")}},{key:"getFontOptions",value:function(t,e){for(var i={},o=["color","size","face","mod","vadjust"],n=0;n<o.length;++n){var s=o[n];i[s]=this.getFontOption(t,e,s)}return i}},{key:"propagateFonts",value:function(t){var e=this,i=[];this.addFontOptionsToPile(i,t),this.fontOptions=this.getBasicOptions(i);for(var o=0;o<m.length;++o)!function(t){var o=m[t],n=e.fontOptions[o],s=e.getFontOptions(i,o);c.forEach(s,function(t,e){n[e]=t}),n.size=Number(n.size),n.vadjust=Number(n.vadjust)}(o)}},{key:"draw",value:function(t,e,i,o,n){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";if(void 0!==this.elementOptions.label){var r=this.fontOptions.size*this.body.view.scale;this.elementOptions.label&&r<this.elementOptions.scaling.label.drawThreshold-1||(r>=this.elementOptions.scaling.label.maxVisible&&(r=Number(this.elementOptions.scaling.label.maxVisible)/this.body.view.scale),this.calculateLabelSize(t,o,n,e,i,s),this._drawBackground(t),this._drawText(t,e,this.size.yLine,s,r))}}},{key:"_drawBackground",value:function(t){if(void 0!==this.fontOptions.background&&"none"!==this.fontOptions.background){t.fillStyle=this.fontOptions.background;var e=this.getSize();t.fillRect(e.left,e.top,e.width,e.height)}}},{key:"_drawText",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"middle",n=arguments[4],r=this._setAlignment(t,e,i,o),a=(0,s.default)(r,2);e=a[0],i=a[1],t.textAlign="left",e-=this.size.width/2,this.fontOptions.valign&&this.size.height>this.size.labelHeight&&("top"===this.fontOptions.valign&&(i-=(this.size.height-this.size.labelHeight)/2),"bottom"===this.fontOptions.valign&&(i+=(this.size.height-this.size.labelHeight)/2));for(var h=0;h<this.lineCount;h++){var d=this.lines[h];if(d&&d.blocks){var l=0;this.isEdgeLabel||"center"===this.fontOptions.align?l+=(this.size.width-d.width)/2:"right"===this.fontOptions.align&&(l+=this.size.width-d.width);for(var u=0;u<d.blocks.length;u++){var c=d.blocks[u];t.font=c.font;var p=this._getColor(c.color,n,c.strokeColor),f=(0,s.default)(p,2),m=f[0],v=f[1];c.strokeWidth>0&&(t.lineWidth=c.strokeWidth,t.strokeStyle=v,t.lineJoin="round"),t.fillStyle=m,c.strokeWidth>0&&t.strokeText(c.text,e+l,i+c.vadjust),t.fillText(c.text,e+l,i+c.vadjust),l+=c.width}i+=d.height}}}},{key:"_setAlignment",value:function(t,e,i,o){if(this.isEdgeLabel&&"horizontal"!==this.fontOptions.align&&!1===this.pointToSelf){e=0,i=0;"top"===this.fontOptions.align?(t.textBaseline="alphabetic",i-=4):"bottom"===this.fontOptions.align?(t.textBaseline="hanging",i+=4):t.textBaseline="middle"}else t.textBaseline=o;return[e,i]}},{key:"_getColor",value:function(t,e,i){var o=t||"#000000",n=i||"#ffffff";if(e<=this.elementOptions.scaling.label.drawThreshold){var s=Math.max(0,Math.min(1,1-(this.elementOptions.scaling.label.drawThreshold-e)));o=c.overrideOpacity(o,s),n=c.overrideOpacity(n,s)}return[o,n]}},{key:"getTextSize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._processLabel(t,e,i),{width:this.size.width,height:this.size.height,lineCount:this.lineCount}}},{key:"getSize",value:function(){var t=this.size.left,e=this.size.top-1;if(this.isEdgeLabel){var i=.5*-this.size.width;switch(this.fontOptions.align){case"middle":t=i,e=.5*-this.size.height;break;case"top":t=i,e=-(this.size.height+2);break;case"bottom":t=i,e=2}}return{left:t,top:e,width:this.size.width,height:this.size.height}}},{key:"calculateLabelSize",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";this._processLabel(t,e,i),this.size.left=o-.5*this.size.width,this.size.top=n-.5*this.size.height,this.size.yLine=n+.5*(1-this.lineCount)*this.fontOptions.size,"hanging"===s&&(this.size.top+=.5*this.fontOptions.size,this.size.top+=4,this.size.yLine+=4)}},{key:"getFormattingValues",value:function(t,e,i,o){var n=function(t,e,i){return"normal"===e?"mod"===i?"":t[i]:void 0!==t[e][i]?t[e][i]:t[i]},s={color:n(this.fontOptions,o,"color"),size:n(this.fontOptions,o,"size"),face:n(this.fontOptions,o,"face"),mod:n(this.fontOptions,o,"mod"),vadjust:n(this.fontOptions,o,"vadjust"),strokeWidth:this.fontOptions.strokeWidth,strokeColor:this.fontOptions.strokeColor};(e||i)&&("normal"===o&&!0===this.fontOptions.chooser&&this.elementOptions.labelHighlightBold?s.mod="bold":"function"==typeof this.fontOptions.chooser&&this.fontOptions.chooser(s,this.elementOptions.id,e,i));var r="";return void 0!==s.mod&&""!==s.mod&&(r+=s.mod+" "),r+=s.size+"px "+s.face,t.font=r.replace(/"/g,""),s.font=t.font,s.height=s.size,s}},{key:"differentState",value:function(t,e){return t!==this.selectedState||e!==this.hoverState}},{key:"_processLabelText",value:function(t,e,i,o){return new f(t,this,e,i).process(o)}},{key:"_processLabel",value:function(t,e,i){if(!1!==this.labelDirty||this.differentState(e,i)){var o=this._processLabelText(t,e,i,this.elementOptions.label);this.fontOptions.minWdt>0&&o.width<this.fontOptions.minWdt&&(o.width=this.fontOptions.minWdt),this.size.labelHeight=o.height,this.fontOptions.minHgt>0&&o.height<this.fontOptions.minHgt&&(o.height=this.fontOptions.minHgt),this.lines=o.lines,this.lineCount=o.lines.length,this.size.width=o.width,this.size.height=o.height,this.selectedState=e,this.hoverState=i,this.labelDirty=!1}}},{key:"visible",value:function(){return 0!==this.size.width&&0!==this.size.height&&void 0!==this.elementOptions.label&&!(this.fontOptions.size*this.body.view.scale<this.elementOptions.scaling.label.drawThreshold-1)}}],[{key:"parseFontString",value:function(t,e){if(!e||"string"!=typeof e)return!1;var i=e.split(" ");return t.size=i[0].replace("px",""),t.face=i[1],t.color=i[2],!0}}]),t}();e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(30),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(2),u=i(119).default,c=function(){function t(e,i,o){(0,a.default)(this,t),this.body=i,this.labelModule=o,this.options={},this.setOptions(e),this.colorDirty=!0,this.color={},this.selectionWidth=2,this.hoverWidth=1.5,this.fromPoint=this.from,this.toPoint=this.to}return(0,d.default)(t,[{key:"connect",value:function(){this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to]}},{key:"cleanup",value:function(){return!1}},{key:"setOptions",value:function(t){this.options=t,this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to],this.id=this.options.id}},{key:"drawLine",value:function(t,e,i,o,n){t.strokeStyle=this.getColor(t,e,i,o),t.lineWidth=e.width,!1!==e.dashes?this._drawDashedLine(t,e,n):this._drawLine(t,e,n)}},{key:"_drawLine",value:function(t,e,i,o,n){if(this.from!=this.to)this._line(t,e,i,o,n);else{var r=this._getCircleData(t),a=(0,s.default)(r,3),h=a[0],d=a[1],l=a[2];this._circle(t,e,h,d,l)}}},{key:"_drawDashedLine",value:function(t,e,i,o,n){t.lineCap="round";var r=[5,5];if(!0===Array.isArray(e.dashes)&&(r=e.dashes),void 0!==t.setLineDash){if(t.save(),t.setLineDash(r),t.lineDashOffset=0,this.from!=this.to)this._line(t,e,i);else{var a=this._getCircleData(t),h=(0,s.default)(a,3),d=h[0],l=h[1],u=h[2];this._circle(t,e,d,l,u)}t.setLineDash([0]),t.lineDashOffset=0,t.restore()}else{if(this.from!=this.to)t.dashedLine(this.from.x,this.from.y,this.to.x,this.to.y,r);else{var c=this._getCircleData(t),p=(0,s.default)(c,3),f=p[0],m=p[1],v=p[2];this._circle(t,e,f,m,v)}this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}}},{key:"findBorderPosition",value:function(t,e,i){return this.from!=this.to?this._findBorderPosition(t,e,i):this._findBorderPositionCircle(t,e,i)}},{key:"findBorderPositions",value:function(t){var e={},i={};if(this.from!=this.to)e=this._findBorderPosition(this.from,t),i=this._findBorderPosition(this.to,t);else{var o=this._getCircleData(t).slice(0,2),n=(0,s.default)(o,2),r=n[0],a=n[1];e=this._findBorderPositionCircle(this.from,t,{x:r,y:a,low:.25,high:.6,direction:-1}),i=this._findBorderPositionCircle(this.from,t,{x:r,y:a,low:.6,high:.8,direction:1})}return{from:e,to:i}}},{key:"_getCircleData",value:function(t){var e=void 0,i=void 0,o=this.from,n=this.options.selfReferenceSize;return void 0!==t&&void 0===o.shape.width&&o.shape.resize(t),o.shape.width>o.shape.height?(e=o.x+.5*o.shape.width,i=o.y-n):(e=o.x+n,i=o.y-.5*o.shape.height),[e,i,n]}},{key:"_pointOnCircle",value:function(t,e,i,o){var n=2*o*Math.PI;return{x:t+i*Math.cos(n),y:e-i*Math.sin(n)}}},{key:"_findBorderPositionCircle",value:function(t,e,i){for(var o=i.x,n=i.y,s=i.low,r=i.high,a=i.direction,h=0,d=this.options.selfReferenceSize,l=void 0,u=void 0,c=void 0,p=void 0,f=void 0,m=.5*(s+r);s<=r&&h<10&&(m=.5*(s+r),l=this._pointOnCircle(o,n,d,m),u=Math.atan2(t.y-l.y,t.x-l.x),c=t.distanceToBorder(e,u),p=Math.sqrt(Math.pow(l.x-t.x,2)+Math.pow(l.y-t.y,2)),f=c-p,!(Math.abs(f)<.05));)f>0?a>0?s=m:r=m:a>0?r=m:s=m,h++;return l.t=m,l}},{key:"getLineWidth",value:function(t,e){return!0===t?Math.max(this.selectionWidth,.3/this.body.view.scale):!0===e?Math.max(this.hoverWidth,.3/this.body.view.scale):Math.max(this.options.width,.3/this.body.view.scale)}},{key:"getColor",value:function(t,e,i,o){if(!1!==e.inheritsColor){if("both"===e.inheritsColor&&this.from.id!==this.to.id){var n=t.createLinearGradient(this.from.x,this.from.y,this.to.x,this.to.y),s=void 0,r=void 0;return s=this.from.options.color.highlight.border,r=this.to.options.color.highlight.border,!1===this.from.selected&&!1===this.to.selected?(s=l.overrideOpacity(this.from.options.color.border,e.opacity),r=l.overrideOpacity(this.to.options.color.border,e.opacity)):!0===this.from.selected&&!1===this.to.selected?r=this.to.options.color.border:!1===this.from.selected&&!0===this.to.selected&&(s=this.from.options.color.border),n.addColorStop(0,s),n.addColorStop(1,r),n}return"to"===e.inheritsColor?l.overrideOpacity(this.to.options.color.border,e.opacity):l.overrideOpacity(this.from.options.color.border,e.opacity)}return l.overrideOpacity(e.color,e.opacity)}},{key:"_circle",
value:function(t,e,i,o,n){this.enableShadow(t,e),t.beginPath(),t.arc(i,o,n,0,2*Math.PI,!1),t.stroke(),this.disableShadow(t,e)}},{key:"getDistanceToEdge",value:function(t,e,i,o,n,r,a,h){var d=0;if(this.from!=this.to)d=this._getDistanceToEdge(t,e,i,o,n,r,a);else{var l=this._getCircleData(void 0),u=(0,s.default)(l,3),c=u[0],p=u[1],f=u[2],m=c-n,v=p-r;d=Math.abs(Math.sqrt(m*m+v*v)-f)}return d}},{key:"_getDistanceToLine",value:function(t,e,i,o,n,s){var r=i-t,a=o-e,h=r*r+a*a,d=((n-t)*r+(s-e)*a)/h;d>1?d=1:d<0&&(d=0);var l=t+d*r,u=e+d*a,c=l-n,p=u-s;return Math.sqrt(c*c+p*p)}},{key:"getArrowData",value:function(t,e,i,o,n,r){var a=void 0,h=void 0,d=void 0,l=void 0,u=void 0,c=void 0,p=void 0,f=r.width;if("from"===e?(d=this.from,l=this.to,u=.1,c=r.fromArrowScale,p=r.fromArrowType):"to"===e?(d=this.to,l=this.from,u=-.1,c=r.toArrowScale,p=r.toArrowType):(d=this.to,l=this.from,c=r.middleArrowScale,p=r.middleArrowType),d!=l)if("middle"!==e)if(!0===this.options.smooth.enabled){h=this.findBorderPosition(d,t,{via:i});var m=this.getPoint(Math.max(0,Math.min(1,h.t+u)),i);a=Math.atan2(h.y-m.y,h.x-m.x)}else a=Math.atan2(d.y-l.y,d.x-l.x),h=this.findBorderPosition(d,t);else a=Math.atan2(d.y-l.y,d.x-l.x),h=this.getPoint(.5,i);else{var v=this._getCircleData(t),g=(0,s.default)(v,3),y=g[0],b=g[1],_=g[2];"from"===e?(h=this.findBorderPosition(this.from,t,{x:y,y:b,low:.25,high:.6,direction:-1}),a=-2*h.t*Math.PI+1.5*Math.PI+.1*Math.PI):"to"===e?(h=this.findBorderPosition(this.from,t,{x:y,y:b,low:.6,high:1,direction:1}),a=-2*h.t*Math.PI+1.5*Math.PI-1.1*Math.PI):(h=this._pointOnCircle(y,b,_,.175),a=3.9269908169872414)}"middle"===e&&c<0&&(f*=-1);var w=15*c+3*f;return{point:h,core:{x:h.x-.9*w*Math.cos(a),y:h.y-.9*w*Math.sin(a)},angle:a,length:w,type:p}}},{key:"drawArrowHead",value:function(t,e,i,o,n){t.strokeStyle=this.getColor(t,e,i,o),t.fillStyle=t.strokeStyle,t.lineWidth=e.width,u.draw(t,n),this.enableShadow(t,e),t.fill(),this.disableShadow(t,e)}},{key:"enableShadow",value:function(t,e){!0===e.shadow&&(t.shadowColor=e.shadowColor,t.shadowBlur=e.shadowSize,t.shadowOffsetX=e.shadowX,t.shadowOffsetY=e.shadowY)}},{key:"disableShadow",value:function(t,e){!0===e.shadow&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0)}}]),t}();e.default=c},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(4),a=o(r),h=i(5),d=o(h),l=i(0),u=o(l),c=i(1),p=o(c),f=function(){function t(){(0,u.default)(this,t)}return(0,p.default)(t,null,[{key:"transform",value:function(t,e){t instanceof Array||(t=[t]);for(var i=e.point.x,o=e.point.y,n=e.angle,s=e.length,r=0;r<t.length;++r){var a=t[r],h=a.x*Math.cos(n)-a.y*Math.sin(n),d=a.x*Math.sin(n)+a.y*Math.cos(n);a.x=i+s*h,a.y=o+s*d}}},{key:"drawPath",value:function(t,e){t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var i=1;i<e.length;++i)t.lineTo(e[i].x,e[i].y);t.closePath()}}]),t}(),m=function(t){function e(){return(0,u.default)(this,e),(0,a.default)(this,(e.__proto__||(0,s.default)(e)).apply(this,arguments))}return(0,d.default)(e,t),(0,p.default)(e,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:0},{x:-1,y:.3},{x:-.9,y:0},{x:-1,y:-.3}];f.transform(i,e),f.drawPath(t,i)}}]),e}(f),v=function(){function t(){(0,u.default)(this,t)}return(0,p.default)(t,null,[{key:"draw",value:function(t,e){var i={x:-.4,y:0};f.transform(i,e),t.circle(i.x,i.y,.4*e.length)}}]),t}(),g=function(){function t(){(0,u.default)(this,t)}return(0,p.default)(t,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:.5},{x:0,y:-.5},{x:-.15,y:-.5},{x:-.15,y:.5}];f.transform(i,e),f.drawPath(t,i)}}]),t}(),y=function(){function t(){(0,u.default)(this,t)}return(0,p.default)(t,null,[{key:"draw",value:function(t,e){var i;switch(e.type&&(i=e.type.toLowerCase()),i){case"circle":v.draw(t,e);break;case"bar":g.draw(t,e);break;case"arrow":default:m.draw(t,e)}}}]),t}();e.default=y},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.barnesHutTree,this.setOptions(o),this.randomSeed=5}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t,this.thetaInversed=1/this.options.theta,this.overlapAvoidanceFactor=1-Math.max(0,Math.min(1,this.options.avoidOverlap))}},{key:"seededRandom",value:function(){var t=1e4*Math.sin(this.randomSeed++);return t-Math.floor(t)}},{key:"solve",value:function(){if(0!==this.options.gravitationalConstant&&this.physicsBody.physicsNodeIndices.length>0){var t=void 0,e=this.body.nodes,i=this.physicsBody.physicsNodeIndices,o=i.length,n=this._formBarnesHutTree(e,i);this.barnesHutTree=n;for(var s=0;s<o;s++)t=e[i[s]],t.options.mass>0&&this._getForceContributions(n.root,t)}}},{key:"_getForceContributions",value:function(t,e){this._getForceContribution(t.children.NW,e),this._getForceContribution(t.children.NE,e),this._getForceContribution(t.children.SW,e),this._getForceContribution(t.children.SE,e)}},{key:"_getForceContribution",value:function(t,e){if(t.childrenCount>0){var i=void 0,o=void 0,n=void 0;i=t.centerOfMass.x-e.x,o=t.centerOfMass.y-e.y,n=Math.sqrt(i*i+o*o),n*t.calcSize>this.thetaInversed?this._calculateForces(n,i,o,e,t):4===t.childrenCount?this._getForceContributions(t,e):t.children.data.id!=e.id&&this._calculateForces(n,i,o,e,t)}}},{key:"_calculateForces",value:function(t,e,i,o,n){0===t&&(t=.1,e=t),this.overlapAvoidanceFactor<1&&o.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius));var s=this.options.gravitationalConstant*n.mass*o.options.mass/Math.pow(t,3),r=e*s,a=i*s;this.physicsBody.forces[o.id].x+=r,this.physicsBody.forces[o.id].y+=a}},{key:"_formBarnesHutTree",value:function(t,e){for(var i=void 0,o=e.length,n=t[e[0]].x,s=t[e[0]].y,r=t[e[0]].x,a=t[e[0]].y,h=1;h<o;h++){var d=t[e[h]],l=d.x,u=d.y;d.options.mass>0&&(l<n&&(n=l),l>r&&(r=l),u<s&&(s=u),u>a&&(a=u))}var c=Math.abs(r-n)-Math.abs(a-s);c>0?(s-=.5*c,a+=.5*c):(n+=.5*c,r-=.5*c);var p=Math.max(1e-5,Math.abs(r-n)),f=.5*p,m=.5*(n+r),v=.5*(s+a),g={root:{centerOfMass:{x:0,y:0},mass:0,range:{minX:m-f,maxX:m+f,minY:v-f,maxY:v+f},size:p,calcSize:1/p,children:{data:null},maxWidth:0,level:0,childrenCount:4}};this._splitBranch(g.root);for(var y=0;y<o;y++)i=t[e[y]],i.options.mass>0&&this._placeInTree(g.root,i);return g}},{key:"_updateBranchMass",value:function(t,e){var i=t.centerOfMass,o=t.mass+e.options.mass,n=1/o;i.x=i.x*t.mass+e.x*e.options.mass,i.x*=n,i.y=i.y*t.mass+e.y*e.options.mass,i.y*=n,t.mass=o;var s=Math.max(Math.max(e.height,e.radius),e.width);t.maxWidth=t.maxWidth<s?s:t.maxWidth}},{key:"_placeInTree",value:function(t,e,i){1==i&&void 0!==i||this._updateBranchMass(t,e);var o=t.children.NW.range,n=void 0;n=o.maxX>e.x?o.maxY>e.y?"NW":"SW":o.maxY>e.y?"NE":"SE",this._placeInRegion(t,e,n)}},{key:"_placeInRegion",value:function(t,e,i){var o=t.children[i];switch(o.childrenCount){case 0:o.children.data=e,o.childrenCount=1,this._updateBranchMass(o,e);break;case 1:o.children.data.x===e.x&&o.children.data.y===e.y?(e.x+=this.seededRandom(),e.y+=this.seededRandom()):(this._splitBranch(o),this._placeInTree(o,e));break;case 4:this._placeInTree(o,e)}}},{key:"_splitBranch",value:function(t){var e=null;1===t.childrenCount&&(e=t.children.data,t.mass=0,t.centerOfMass.x=0,t.centerOfMass.y=0),t.childrenCount=4,t.children.data=null,this._insertRegion(t,"NW"),this._insertRegion(t,"NE"),this._insertRegion(t,"SW"),this._insertRegion(t,"SE"),null!=e&&this._placeInTree(t,e)}},{key:"_insertRegion",value:function(t,e){var i=void 0,o=void 0,n=void 0,s=void 0,r=.5*t.size;switch(e){case"NW":i=t.range.minX,o=t.range.minX+r,n=t.range.minY,s=t.range.minY+r;break;case"NE":i=t.range.minX+r,o=t.range.maxX,n=t.range.minY,s=t.range.minY+r;break;case"SW":i=t.range.minX,o=t.range.minX+r,n=t.range.minY+r,s=t.range.maxY;break;case"SE":i=t.range.minX+r,o=t.range.maxX,n=t.range.minY+r,s=t.range.maxY}t.children[e]={centerOfMass:{x:0,y:0},mass:0,range:{minX:i,maxX:o,minY:n,maxY:s},size:.5*t.size,calcSize:2*t.calcSize,children:{data:null},maxWidth:0,level:t.level+1,childrenCount:0}}},{key:"_debug",value:function(t,e){void 0!==this.barnesHutTree&&(t.lineWidth=1,this._drawBranch(this.barnesHutTree.root,t,e))}},{key:"_drawBranch",value:function(t,e,i){void 0===i&&(i="#FF0000"),4===t.childrenCount&&(this._drawBranch(t.children.NW,e),this._drawBranch(t.children.NE,e),this._drawBranch(t.children.SE,e),this._drawBranch(t.children.SW,e)),e.strokeStyle=i,e.beginPath(),e.moveTo(t.range.minX,t.range.minY),e.lineTo(t.range.maxX,t.range.minY),e.stroke(),e.beginPath(),e.moveTo(t.range.maxX,t.range.minY),e.lineTo(t.range.maxX,t.range.maxY),e.stroke(),e.beginPath(),e.moveTo(t.range.maxX,t.range.maxY),e.lineTo(t.range.minX,t.range.maxY),e.stroke(),e.beginPath(),e.moveTo(t.range.minX,t.range.maxY),e.lineTo(t.range.minX,t.range.minY),e.stroke()}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t=void 0,e=void 0,i=void 0,o=void 0,n=this.body.nodes,s=this.physicsBody.physicsNodeIndices,r=this.physicsBody.forces,a=0;a<s.length;a++){o=n[s[a]],t=-o.x,e=-o.y,i=Math.sqrt(t*t+e*e),this._calculateForces(i,t,e,r,o)}}},{key:"_calculateForces",value:function(t,e,i,o,n){var s=0===t?0:this.options.centralGravity/t;o[n.id].x=e*s,o[n.id].y=i*s}}]),t}();e.default=h},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var o="string",n="boolean",s="number",r="object",a=["arrow","circle","bar"],h={configure:{enabled:{boolean:n},filter:{boolean:n,string:o,array:"array",function:"function"},container:{dom:"dom"},showButton:{boolean:n},__type__:{object:r,boolean:n,string:o,array:"array",function:"function"}},edges:{arrows:{to:{enabled:{boolean:n},scaleFactor:{number:s},type:{string:a},__type__:{object:r,boolean:n}},middle:{enabled:{boolean:n},scaleFactor:{number:s},type:{string:a},__type__:{object:r,boolean:n}},from:{enabled:{boolean:n},scaleFactor:{number:s},type:{string:a},__type__:{object:r,boolean:n}},__type__:{string:["from","to","middle"],object:r}},arrowStrikethrough:{boolean:n},chosen:{label:{boolean:n,function:"function"},edge:{boolean:n,function:"function"},__type__:{object:r,boolean:n}},color:{color:{string:o},highlight:{string:o},hover:{string:o},inherit:{string:["from","to","both"],boolean:n},opacity:{number:s},__type__:{object:r,string:o}},dashes:{boolean:n,array:"array"},font:{color:{string:o},size:{number:s},face:{string:o},background:{string:o},strokeWidth:{number:s},strokeColor:{string:o},align:{string:["horizontal","top","middle","bottom"]},vadjust:{number:s},multi:{boolean:n,string:o},bold:{color:{string:o},size:{number:s},face:{string:o},mod:{string:o},vadjust:{number:s},__type__:{object:r,string:o}},boldital:{color:{string:o},size:{number:s},face:{string:o},mod:{string:o},vadjust:{number:s},__type__:{object:r,string:o}},ital:{color:{string:o},size:{number:s},face:{string:o},mod:{string:o},vadjust:{number:s},__type__:{object:r,string:o}},mono:{color:{string:o},size:{number:s},face:{string:o},mod:{string:o},vadjust:{number:s},__type__:{object:r,string:o}},__type__:{object:r,string:o}},hidden:{boolean:n},hoverWidth:{function:"function",number:s},label:{string:o,undefined:"undefined"},labelHighlightBold:{boolean:n},length:{number:s,undefined:"undefined"},physics:{boolean:n},scaling:{min:{number:s},max:{number:s},label:{enabled:{boolean:n},min:{number:s},max:{number:s},maxVisible:{number:s},drawThreshold:{number:s},__type__:{object:r,boolean:n}},customScalingFunction:{function:"function"},__type__:{object:r}},selectionWidth:{function:"function",number:s},selfReferenceSize:{number:s},shadow:{enabled:{boolean:n},color:{string:o},size:{number:s},x:{number:s},y:{number:s},__type__:{object:r,boolean:n}},smooth:{enabled:{boolean:n},type:{string:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"]},roundness:{number:s},forceDirection:{string:["horizontal","vertical","none"],boolean:n},__type__:{object:r,boolean:n}},title:{string:o,undefined:"undefined"},width:{number:s},widthConstraint:{maximum:{number:s},__type__:{object:r,boolean:n,number:s}},value:{number:s,undefined:"undefined"},__type__:{object:r}},groups:{useDefaultGroups:{boolean:n},__any__:"get from nodes, will be overwritten below",__type__:{object:r}},interaction:{dragNodes:{boolean:n},dragView:{boolean:n},hideEdgesOnDrag:{boolean:n},hideNodesOnDrag:{boolean:n},hover:{boolean:n},keyboard:{enabled:{boolean:n},speed:{x:{number:s},y:{number:s},zoom:{number:s},__type__:{object:r}},bindToWindow:{boolean:n},__type__:{object:r,boolean:n}},multiselect:{boolean:n},navigationButtons:{boolean:n},selectable:{boolean:n},selectConnectedEdges:{boolean:n},hoverConnectedEdges:{boolean:n},tooltipDelay:{number:s},zoomView:{boolean:n},__type__:{object:r}},layout:{randomSeed:{undefined:"undefined",number:s},improvedLayout:{boolean:n},hierarchical:{enabled:{boolean:n},levelSeparation:{number:s},nodeSpacing:{number:s},treeSpacing:{number:s},blockShifting:{boolean:n},edgeMinimization:{boolean:n},parentCentralization:{boolean:n},direction:{string:["UD","DU","LR","RL"]},sortMethod:{string:["hubsize","directed"]},__type__:{object:r,boolean:n}},__type__:{object:r}},manipulation:{enabled:{boolean:n},initiallyActive:{boolean:n},addNode:{boolean:n,function:"function"},addEdge:{boolean:n,function:"function"},editNode:{function:"function"},editEdge:{editWithoutDrag:{function:"function"},__type__:{object:r,boolean:n,function:"function"}},deleteNode:{boolean:n,function:"function"},deleteEdge:{boolean:n,function:"function"},controlNodeStyle:"get from nodes, will be overwritten below",__type__:{object:r,boolean:n}},nodes:{borderWidth:{number:s},borderWidthSelected:{number:s,undefined:"undefined"},brokenImage:{string:o,undefined:"undefined"},chosen:{label:{boolean:n,function:"function"},node:{boolean:n,function:"function"},__type__:{object:r,boolean:n}},color:{border:{string:o},background:{string:o},highlight:{border:{string:o},background:{string:o},__type__:{object:r,string:o}},hover:{border:{string:o},background:{string:o},__type__:{object:r,string:o}},__type__:{object:r,string:o}},fixed:{x:{boolean:n},y:{boolean:n},__type__:{object:r,boolean:n}},font:{align:{string:o},color:{string:o},size:{number:s},face:{string:o},background:{string:o},strokeWidth:{number:s},strokeColor:{string:o},vadjust:{number:s},multi:{boolean:n,string:o},bold:{color:{string:o},size:{number:s},face:{string:o},mod:{string:o},vadjust:{number:s},__type__:{object:r,string:o}},boldital:{color:{string:o},size:{number:s},face:{string:o},mod:{string:o},vadjust:{number:s},__type__:{object:r,string:o}},ital:{color:{string:o},size:{number:s},face:{string:o},mod:{string:o},vadjust:{number:s},__type__:{object:r,string:o}},mono:{color:{string:o},size:{number:s},face:{string:o},mod:{string:o},vadjust:{number:s},__type__:{object:r,string:o}},__type__:{object:r,string:o}},group:{string:o,number:s,undefined:"undefined"},heightConstraint:{minimum:{number:s},valign:{string:o},__type__:{object:r,boolean:n,number:s}},hidden:{boolean:n},icon:{face:{string:o},code:{string:o},size:{number:s},color:{string:o},__type__:{object:r}},id:{string:o,number:s},image:{selected:{string:o,undefined:"undefined"},unselected:{string:o,undefined:"undefined"},__type__:{object:r,string:o}},label:{string:o,undefined:"undefined"},labelHighlightBold:{boolean:n},level:{number:s,undefined:"undefined"},margin:{top:{number:s},right:{number:s},bottom:{number:s},left:{number:s},__type__:{object:r,number:s}},mass:{number:s},physics:{boolean:n},scaling:{min:{number:s},max:{number:s},label:{enabled:{boolean:n},min:{number:s},max:{number:s},maxVisible:{number:s},drawThreshold:{number:s},__type__:{object:r,boolean:n}},customScalingFunction:{function:"function"},__type__:{object:r}},shadow:{enabled:{boolean:n},color:{string:o},size:{number:s},x:{number:s},y:{number:s},__type__:{object:r,boolean:n}},shape:{string:["ellipse","circle","database","box","text","image","circularImage","diamond","dot","star","triangle","triangleDown","square","icon","hexagon"]},shapeProperties:{borderDashes:{boolean:n,array:"array"},borderRadius:{number:s},interpolation:{boolean:n},useImageSize:{boolean:n},useBorderWithImage:{boolean:n},__type__:{object:r}},size:{number:s},title:{string:o,dom:"dom",undefined:"undefined"},value:{number:s,undefined:"undefined"},widthConstraint:{minimum:{number:s},maximum:{number:s},__type__:{object:r,boolean:n,number:s}},x:{number:s},y:{number:s},__type__:{object:r}},physics:{enabled:{boolean:n},barnesHut:{gravitationalConstant:{number:s},centralGravity:{number:s},springLength:{number:s},springConstant:{number:s},damping:{number:s},avoidOverlap:{number:s},__type__:{object:r}},forceAtlas2Based:{gravitationalConstant:{number:s},centralGravity:{number:s},springLength:{number:s},springConstant:{number:s},damping:{number:s},avoidOverlap:{number:s},__type__:{object:r}},repulsion:{centralGravity:{number:s},springLength:{number:s},springConstant:{number:s},nodeDistance:{number:s},damping:{number:s},__type__:{object:r}},hierarchicalRepulsion:{centralGravity:{number:s},springLength:{number:s},springConstant:{number:s},nodeDistance:{number:s},damping:{number:s},__type__:{object:r}},maxVelocity:{number:s},minVelocity:{number:s},solver:{string:["barnesHut","repulsion","hierarchicalRepulsion","forceAtlas2Based"]},stabilization:{enabled:{boolean:n},iterations:{number:s},updateInterval:{number:s},onlyDynamicEdges:{boolean:n},fit:{boolean:n},__type__:{object:r,boolean:n}},timestep:{number:s},adaptiveTimestep:{boolean:n},__type__:{object:r,boolean:n}},autoResize:{boolean:n},clickToUse:{boolean:n},locale:{string:o},locales:{__any__:{any:"any"},__type__:{object:r}},height:{string:o},width:{string:o},__type__:{object:r}};h.groups.__any__=h.nodes,h.manipulation.controlNodeStyle=h.nodes;var d={nodes:{borderWidth:[1,0,10,1],borderWidthSelected:[2,0,10,1],color:{border:["color","#2B7CE9"],background:["color","#97C2FC"],highlight:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]},hover:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]}},fixed:{x:!1,y:!1},font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[0,0,50,1],strokeColor:["color","#ffffff"]},hidden:!1,labelHighlightBold:!0,physics:!0,scaling:{min:[10,0,200,1],max:[30,0,200,1],label:{enabled:!1,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},shape:["ellipse","box","circle","database","diamond","dot","square","star","text","triangle","triangleDown","hexagon"],shapeProperties:{borderDashes:!1,borderRadius:[6,0,20,1],interpolation:!0,useImageSize:!1},size:[25,0,200,1]},edges:{arrows:{to:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"},middle:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"},from:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"}},arrowStrikethrough:!0,color:{color:["color","#848484"],highlight:["color","#848484"],hover:["color","#848484"],inherit:["from","to","both",!0,!1],opacity:[1,0,1,.05]},dashes:!1,font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[2,0,50,1],strokeColor:["color","#ffffff"],align:["horizontal","top","middle","bottom"]},hidden:!1,hoverWidth:[1.5,0,5,.1],labelHighlightBold:!0,physics:!0,scaling:{min:[1,0,100,1],max:[15,0,100,1],label:{enabled:!0,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},selectionWidth:[1.5,0,5,.1],selfReferenceSize:[20,0,200,1],shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},smooth:{enabled:!0,type:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"],forceDirection:["horizontal","vertical","none"],roundness:[.5,0,1,.05]},width:[1,0,30,1]},layout:{hierarchical:{enabled:!1,levelSeparation:[150,20,500,5],nodeSpacing:[100,20,500,5],treeSpacing:[200,20,500,5],blockShifting:!0,edgeMinimization:!0,parentCentralization:!0,direction:["UD","DU","LR","RL"],sortMethod:["hubsize","directed"]}},interaction:{dragNodes:!0,dragView:!0,hideEdgesOnDrag:!1,hideNodesOnDrag:!1,hover:!1,keyboard:{enabled:!1,speed:{x:[10,0,40,1],y:[10,0,40,1],zoom:[.02,0,.1,.005]},bindToWindow:!0},multiselect:!1,navigationButtons:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0,tooltipDelay:[300,0,1e3,25],zoomView:!0},manipulation:{enabled:!1,initiallyActive:!1},physics:{enabled:!0,barnesHut:{gravitationalConstant:[-2e3,-3e4,0,50],centralGravity:[.3,0,10,.05],springLength:[95,0,500,5],springConstant:[.04,0,1.2,.005],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},forceAtlas2Based:{gravitationalConstant:[-50,-500,0,1],centralGravity:[.01,0,1,.005],springLength:[95,0,500,5],springConstant:[.08,0,1.2,.005],damping:[.4,0,1,.01],avoidOverlap:[0,0,1,.01]},repulsion:{centralGravity:[.2,0,10,.05],springLength:[200,0,500,5],springConstant:[.05,0,1.2,.005],nodeDistance:[100,0,500,5],damping:[.09,0,1,.01]},hierarchicalRepulsion:{centralGravity:[.2,0,10,.05],springLength:[100,0,500,5],springConstant:[.01,0,1.2,.005],nodeDistance:[120,0,500,5],damping:[.09,0,1,.01]},maxVelocity:[50,0,150,1],minVelocity:[.1,.01,.5,.01],solver:["barnesHut","forceAtlas2Based","repulsion","hierarchicalRepulsion"],timestep:[.5,.01,1,.01]}};e.allOptions=h,e.configureOptions=d},function(t,e,i){var o=i(2);o.extend(e,i(159)),o.extend(e,i(177)),o.extend(e,i(181))},function(t,e,i){i(49),i(60),t.exports=i(136)},function(t,e,i){var o=i(126),n=i(127),s=i(31),r=i(25);t.exports=i(79)(Array,"Array",function(t,e){this._t=r(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,n(1)):"keys"==e?n(0,i):"values"==e?n(0,t[i]):n(0,[i,t[i]])},"values"),s.Arguments=s.Array,o("keys"),o("values"),o("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var o=i(54),n=i(39),s=i(59),r={};i(26)(r,i(13)("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=o(r,{next:n(1,i)}),s(t,e+" Iterator")}},function(t,e,i){var o=i(20),n=i(27),s=i(33);t.exports=i(21)?Object.defineProperties:function(t,e){n(t);for(var i,r=s(e),a=r.length,h=0;a>h;)o.f(t,i=r[h++],e[i]);return t}},function(t,e,i){var o=i(25),n=i(132),s=i(133);t.exports=function(t){return function(e,i,r){var a,h=o(e),d=n(h.length),l=s(r,d);if(t&&i!=i){for(;d>l;)if((a=h[l++])!=a)return!0}else for(;d>l;l++)if((t||l in h)&&h[l]===i)return t||l||0;return!t&&-1}}},function(t,e,i){var o=i(55),n=Math.min;t.exports=function(t){return t>0?n(o(t),9007199254740991):0}},function(t,e,i){var o=i(55),n=Math.max,s=Math.min;t.exports=function(t,e){return t=o(t),t<0?n(t+e,0):s(t,e)}},function(t,e,i){var o=i(18).document;t.exports=o&&o.documentElement},function(t,e,i){var o=i(55),n=i(51);t.exports=function(t){return function(e,i){var s,r,a=String(n(e)),h=o(i),d=a.length;return h<0||h>=d?t?"":void 0:(s=a.charCodeAt(h),s<55296||s>56319||h+1===d||(r=a.charCodeAt(h+1))<56320||r>57343?t?a.charAt(h):s:t?a.slice(h,h+2):r-56320+(s-55296<<10)+65536)}}},function(t,e,i){var o=i(27),n=i(137);t.exports=i(7).getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return o(e.call(t))}},function(t,e,i){var o=i(86),n=i(13)("iterator"),s=i(31);t.exports=i(7).getIteratorMethod=function(t){if(void 0!=t)return t[n]||t["@@iterator"]||s[o(t)]}},function(t,e,i){i(139);var o=i(7).Object;t.exports=function(t,e){return o.create(t,e)}},function(t,e,i){var o=i(17);o(o.S,"Object",{create:i(54)})},function(t,e,i){i(141),t.exports=i(7).Object.keys},function(t,e,i){var o=i(41),n=i(33);i(87)("keys",function(){return function(t){return n(o(t))}})},function(t,e,i){t.exports={default:i(143),__esModule:!0}},function(t,e,i){i(60),i(49),t.exports=i(61).f("iterator")},function(t,e,i){t.exports={default:i(145),__esModule:!0}},function(t,e,i){i(146),i(151),i(152),i(153),t.exports=i(7).Symbol},function(t,e,i){var o=i(18),n=i(22),s=i(21),r=i(17),a=i(83),h=i(147).KEY,d=i(28),l=i(57),u=i(59),c=i(40),p=i(13),f=i(61),m=i(62),v=i(148),g=i(149),y=i(27),b=i(25),_=i(53),w=i(39),x=i(54),k=i(150),S=i(89),D=i(20),M=i(33),C=S.f,O=D.f,E=k.f,T=o.Symbol,P=o.JSON,I=P&&P.stringify,N=p("_hidden"),R=p("toPrimitive"),A={}.propertyIsEnumerable,z=l("symbol-registry"),L=l("symbols"),F=l("op-symbols"),B=Object.prototype,j="function"==typeof T,H=o.QObject,W=!H||!H.prototype||!H.prototype.findChild,Y=s&&d(function(){return 7!=x(O({},"a",{get:function(){return O(this,"a",{value:7}).a}})).a})?function(t,e,i){var o=C(B,e);o&&delete B[e],O(t,e,i),o&&t!==B&&O(B,e,o)}:O,G=function(t){var e=L[t]=x(T.prototype);return e._k=t,e},V=j&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},U=function(t,e,i){return t===B&&U(F,e,i),y(t),e=_(e,!0),y(i),n(L,e)?(i.enumerable?(n(t,N)&&t[N][e]&&(t[N][e]=!1),i=x(i,{enumerable:w(0,!1)})):(n(t,N)||O(t,N,w(1,{})),t[N][e]=!0),Y(t,e,i)):O(t,e,i)},q=function(t,e){y(t);for(var i,o=v(e=b(e)),n=0,s=o.length;s>n;)U(t,i=o[n++],e[i]);return t},X=function(t,e){return void 0===e?x(t):q(x(t),e)},Z=function(t){var e=A.call(this,t=_(t,!0));return!(this===B&&n(L,t)&&!n(F,t))&&(!(e||!n(this,t)||!n(L,t)||n(this,N)&&this[N][t])||e)},K=function(t,e){if(t=b(t),e=_(e,!0),t!==B||!n(L,e)||n(F,e)){var i=C(t,e);return!i||!n(L,e)||n(t,N)&&t[N][e]||(i.enumerable=!0),i}},J=function(t){for(var e,i=E(b(t)),o=[],s=0;i.length>s;)n(L,e=i[s++])||e==N||e==h||o.push(e);return o},$=function(t){for(var e,i=t===B,o=E(i?F:b(t)),s=[],r=0;o.length>r;)!n(L,e=o[r++])||i&&!n(B,e)||s.push(L[e]);return s};j||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=c(arguments.length>0?arguments[0]:void 0),e=function(i){this===B&&e.call(F,i),n(this,N)&&n(this[N],t)&&(this[N][t]=!1),Y(this,t,w(1,i))};return s&&W&&Y(B,t,{configurable:!0,set:e}),G(t)},a(T.prototype,"toString",function(){return this._k}),S.f=K,D.f=U,i(88).f=k.f=J,i(42).f=Z,i(63).f=$,s&&!i(52)&&a(B,"propertyIsEnumerable",Z,!0),f.f=function(t){return G(p(t))}),r(r.G+r.W+r.F*!j,{Symbol:T});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Q.length>tt;)p(Q[tt++]);for(var et=M(p.store),it=0;et.length>it;)m(et[it++]);r(r.S+r.F*!j,"Symbol",{for:function(t){return n(z,t+="")?z[t]:z[t]=T(t)},keyFor:function(t){if(!V(t))throw TypeError(t+" is not a symbol!");for(var e in z)if(z[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),r(r.S+r.F*!j,"Object",{create:X,defineProperty:U,defineProperties:q,getOwnPropertyDescriptor:K,getOwnPropertyNames:J,getOwnPropertySymbols:$}),P&&r(r.S+r.F*(!j||d(function(){var t=T();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!V(t)){for(var e,i,o=[t],n=1;arguments.length>n;)o.push(arguments[n++]);return e=o[1],"function"==typeof e&&(i=e),!i&&g(e)||(e=function(t,e){if(i&&(e=i.call(this,t,e)),!V(e))return e}),o[1]=e,I.apply(P,o)}}}),T.prototype[R]||i(26)(T.prototype,R,T.prototype.valueOf),u(T,"Symbol"),u(Math,"Math",!0),u(o.JSON,"JSON",!0)},function(t,e,i){var o=i(40)("meta"),n=i(32),s=i(22),r=i(20).f,a=0,h=Object.isExtensible||function(){return!0},d=!i(28)(function(){return h(Object.preventExtensions({}))}),l=function(t){r(t,o,{value:{i:"O"+ ++a,w:{}}})},u=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,o)){if(!h(t))return"F";if(!e)return"E";l(t)}return t[o].i},c=function(t,e){if(!s(t,o)){if(!h(t))return!0;if(!e)return!1;l(t)}return t[o].w},p=function(t){return d&&f.NEED&&h(t)&&!s(t,o)&&l(t),t},f=t.exports={KEY:o,NEED:!1,fastKey:u,getWeak:c,onFreeze:p}},function(t,e,i){var o=i(33),n=i(63),s=i(42);t.exports=function(t){var e=o(t),i=n.f;if(i)for(var r,a=i(t),h=s.f,d=0;a.length>d;)h.call(t,r=a[d++])&&e.push(r);return e}},function(t,e,i){var o=i(50);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,i){var o=i(25),n=i(88).f,s={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return n(t)}catch(t){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==s.call(t)?a(t):n(o(t))}},function(t,e){},function(t,e,i){i(62)("asyncIterator")},function(t,e,i){i(62)("observable")},function(t,e,i){(function(t){!function(e,i){t.exports=i()}(0,function(){function e(){return Co.apply(null,arguments)}function i(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function o(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function n(t){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(t).length;var e;for(e in t)if(t.hasOwnProperty(e))return!1;return!0}function s(t){return void 0===t}function r(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function a(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function h(t,e){var i,o=[];for(i=0;i<t.length;++i)o.push(e(t[i],i));return o}function d(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function l(t,e){for(var i in e)d(e,i)&&(t[i]=e[i]);return d(e,"toString")&&(t.toString=e.toString),d(e,"valueOf")&&(t.valueOf=e.valueOf),t}function u(t,e,i,o){return Se(t,e,i,o,!0).utc()}function c(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function p(t){return null==t._pf&&(t._pf=c()),t._pf}function f(t){if(null==t._isValid){var e=p(t),i=Oo.call(e.parsedDateParts,function(t){return null!=t}),o=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&i);if(t._strict&&(o=o&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return o;t._isValid=o}return t._isValid}function m(t){var e=u(NaN);return null!=t?l(p(e),t):p(e).userInvalidated=!0,e}function v(t,e){var i,o,n;if(s(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),s(e._i)||(t._i=e._i),s(e._f)||(t._f=e._f),s(e._l)||(t._l=e._l),s(e._strict)||(t._strict=e._strict),s(e._tzm)||(t._tzm=e._tzm),s(e._isUTC)||(t._isUTC=e._isUTC),s(e._offset)||(t._offset=e._offset),s(e._pf)||(t._pf=p(e)),s(e._locale)||(t._locale=e._locale),Eo.length>0)for(i=0;i<Eo.length;i++)o=Eo[i],n=e[o],s(n)||(t[o]=n);return t}function g(t){v(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===To&&(To=!0,e.updateOffset(this),To=!1)}function y(t){return t instanceof g||null!=t&&null!=t._isAMomentObject}function b(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function _(t){var e=+t,i=0;return 0!==e&&isFinite(e)&&(i=b(e)),i}function w(t,e,i){var o,n=Math.min(t.length,e.length),s=Math.abs(t.length-e.length),r=0;for(o=0;o<n;o++)(i&&t[o]!==e[o]||!i&&_(t[o])!==_(e[o]))&&r++;return r+s}function x(t){!1===e.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function k(t,i){var o=!0;return l(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,t),o){for(var n,s=[],r=0;r<arguments.length;r++){if(n="","object"==typeof arguments[r]){n+="\n["+r+"] "
;for(var a in arguments[0])n+=a+": "+arguments[0][a]+", ";n=n.slice(0,-2)}else n=arguments[r];s.push(n)}x(t+"\nArguments: "+Array.prototype.slice.call(s).join("")+"\n"+(new Error).stack),o=!1}return i.apply(this,arguments)},i)}function S(t,i){null!=e.deprecationHandler&&e.deprecationHandler(t,i),Po[t]||(x(i),Po[t]=!0)}function D(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function M(t){var e,i;for(i in t)e=t[i],D(e)?this[i]=e:this["_"+i]=e;this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function C(t,e){var i,n=l({},t);for(i in e)d(e,i)&&(o(t[i])&&o(e[i])?(n[i]={},l(n[i],t[i]),l(n[i],e[i])):null!=e[i]?n[i]=e[i]:delete n[i]);for(i in t)d(t,i)&&!d(e,i)&&o(t[i])&&(n[i]=l({},n[i]));return n}function O(t){null!=t&&this.set(t)}function E(t,e,i){var o=this._calendar[t]||this._calendar.sameElse;return D(o)?o.call(e,i):o}function T(t){var e=this._longDateFormat[t],i=this._longDateFormat[t.toUpperCase()];return e||!i?e:(this._longDateFormat[t]=i.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function P(){return this._invalidDate}function I(t){return this._ordinal.replace("%d",t)}function N(t,e,i,o){var n=this._relativeTime[i];return D(n)?n(t,e,i,o):n.replace(/%d/i,t)}function R(t,e){var i=this._relativeTime[t>0?"future":"past"];return D(i)?i(e):i.replace(/%s/i,e)}function A(t,e){var i=t.toLowerCase();Lo[i]=Lo[i+"s"]=Lo[e]=t}function z(t){return"string"==typeof t?Lo[t]||Lo[t.toLowerCase()]:void 0}function L(t){var e,i,o={};for(i in t)d(t,i)&&(e=z(i))&&(o[e]=t[i]);return o}function F(t,e){Fo[t]=e}function B(t){var e=[];for(var i in t)e.push({unit:i,priority:Fo[i]});return e.sort(function(t,e){return t.priority-e.priority}),e}function j(t,e,i){var o=""+Math.abs(t),n=e-o.length;return(t>=0?i?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+o}function H(t,e,i,o){var n=o;"string"==typeof o&&(n=function(){return this[o]()}),t&&(Wo[t]=n),e&&(Wo[e[0]]=function(){return j(n.apply(this,arguments),e[1],e[2])}),i&&(Wo[i]=function(){return this.localeData().ordinal(n.apply(this,arguments),t)})}function W(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function Y(t){var e,i,o=t.match(Bo);for(e=0,i=o.length;e<i;e++)Wo[o[e]]?o[e]=Wo[o[e]]:o[e]=W(o[e]);return function(e){var n,s="";for(n=0;n<i;n++)s+=D(o[n])?o[n].call(e,t):o[n];return s}}function G(t,e){return t.isValid()?(e=V(e,t.localeData()),Ho[e]=Ho[e]||Y(e),Ho[e](t)):t.localeData().invalidDate()}function V(t,e){function i(t){return e.longDateFormat(t)||t}var o=5;for(jo.lastIndex=0;o>=0&&jo.test(t);)t=t.replace(jo,i),jo.lastIndex=0,o-=1;return t}function U(t,e,i){an[t]=D(e)?e:function(t,o){return t&&i?i:e}}function q(t,e){return d(an,t)?an[t](e._strict,e._locale):new RegExp(X(t))}function X(t){return Z(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,i,o,n){return e||i||o||n}))}function Z(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function K(t,e){var i,o=e;for("string"==typeof t&&(t=[t]),r(e)&&(o=function(t,i){i[e]=_(t)}),i=0;i<t.length;i++)hn[t[i]]=o}function J(t,e){K(t,function(t,i,o,n){o._w=o._w||{},e(t,o._w,o,n)})}function $(t,e,i){null!=e&&d(hn,t)&&hn[t](e,i._a,i,t)}function Q(t){return tt(t)?366:365}function tt(t){return t%4==0&&t%100!=0||t%400==0}function et(){return tt(this.year())}function it(t,i){return function(o){return null!=o?(nt(this,t,o),e.updateOffset(this,i),this):ot(this,t)}}function ot(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function nt(t,e,i){t.isValid()&&!isNaN(i)&&("FullYear"===e&&tt(t.year())?t._d["set"+(t._isUTC?"UTC":"")+e](i,t.month(),ht(i,t.month())):t._d["set"+(t._isUTC?"UTC":"")+e](i))}function st(t){return t=z(t),D(this[t])?this[t]():this}function rt(t,e){if("object"==typeof t){t=L(t);for(var i=B(t),o=0;o<i.length;o++)this[i[o].unit](t[i[o].unit])}else if(t=z(t),D(this[t]))return this[t](e);return this}function at(t,e){return(t%e+e)%e}function ht(t,e){if(isNaN(t)||isNaN(e))return NaN;var i=at(e,12);return t+=(e-i)/12,1===i?tt(t)?29:28:31-i%7%2}function dt(t,e){return t?i(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||_n).test(e)?"format":"standalone"][t.month()]:i(this._months)?this._months:this._months.standalone}function lt(t,e){return t?i(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[_n.test(e)?"format":"standalone"][t.month()]:i(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ut(t,e,i){var o,n,s,r=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],o=0;o<12;++o)s=u([2e3,o]),this._shortMonthsParse[o]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[o]=this.months(s,"").toLocaleLowerCase();return i?"MMM"===e?(n=yn.call(this._shortMonthsParse,r),-1!==n?n:null):(n=yn.call(this._longMonthsParse,r),-1!==n?n:null):"MMM"===e?-1!==(n=yn.call(this._shortMonthsParse,r))?n:(n=yn.call(this._longMonthsParse,r),-1!==n?n:null):-1!==(n=yn.call(this._longMonthsParse,r))?n:(n=yn.call(this._shortMonthsParse,r),-1!==n?n:null)}function ct(t,e,i){var o,n,s;if(this._monthsParseExact)return ut.call(this,t,e,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),o=0;o<12;o++){if(n=u([2e3,o]),i&&!this._longMonthsParse[o]&&(this._longMonthsParse[o]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[o]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),i||this._monthsParse[o]||(s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[o]=new RegExp(s.replace(".",""),"i")),i&&"MMMM"===e&&this._longMonthsParse[o].test(t))return o;if(i&&"MMM"===e&&this._shortMonthsParse[o].test(t))return o;if(!i&&this._monthsParse[o].test(t))return o}}function pt(t,e){var i;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=_(e);else if(e=t.localeData().monthsParse(e),!r(e))return t;return i=Math.min(t.date(),ht(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,i),t}function ft(t){return null!=t?(pt(this,t),e.updateOffset(this,!0),this):ot(this,"Month")}function mt(){return ht(this.year(),this.month())}function vt(t){return this._monthsParseExact?(d(this,"_monthsRegex")||yt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=kn),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function gt(t){return this._monthsParseExact?(d(this,"_monthsRegex")||yt.call(this),t?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=Sn),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function yt(){function t(t,e){return e.length-t.length}var e,i,o=[],n=[],s=[];for(e=0;e<12;e++)i=u([2e3,e]),o.push(this.monthsShort(i,"")),n.push(this.months(i,"")),s.push(this.months(i,"")),s.push(this.monthsShort(i,""));for(o.sort(t),n.sort(t),s.sort(t),e=0;e<12;e++)o[e]=Z(o[e]),n[e]=Z(n[e]);for(e=0;e<24;e++)s[e]=Z(s[e]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+o.join("|")+")","i")}function bt(t,e,i,o,n,s,r){var a=new Date(t,e,i,o,n,s,r);return t<100&&t>=0&&isFinite(a.getFullYear())&&a.setFullYear(t),a}function _t(t){var e=new Date(Date.UTC.apply(null,arguments));return t<100&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function wt(t,e,i){var o=7+e-i;return-(7+_t(t,0,o).getUTCDay()-e)%7+o-1}function xt(t,e,i,o,n){var s,r,a=(7+i-o)%7,h=wt(t,o,n),d=1+7*(e-1)+a+h;return d<=0?(s=t-1,r=Q(s)+d):d>Q(t)?(s=t+1,r=d-Q(t)):(s=t,r=d),{year:s,dayOfYear:r}}function kt(t,e,i){var o,n,s=wt(t.year(),e,i),r=Math.floor((t.dayOfYear()-s-1)/7)+1;return r<1?(n=t.year()-1,o=r+St(n,e,i)):r>St(t.year(),e,i)?(o=r-St(t.year(),e,i),n=t.year()+1):(n=t.year(),o=r),{week:o,year:n}}function St(t,e,i){var o=wt(t,e,i),n=wt(t+1,e,i);return(Q(t)-o+n)/7}function Dt(t){return kt(t,this._week.dow,this._week.doy).week}function Mt(){return this._week.dow}function Ct(){return this._week.doy}function Ot(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function Et(t){var e=kt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function Tt(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function Pt(t,e){return"string"==typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function It(t,e){return t?i(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]:i(this._weekdays)?this._weekdays:this._weekdays.standalone}function Nt(t){return t?this._weekdaysShort[t.day()]:this._weekdaysShort}function Rt(t){return t?this._weekdaysMin[t.day()]:this._weekdaysMin}function At(t,e,i){var o,n,s,r=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],o=0;o<7;++o)s=u([2e3,1]).day(o),this._minWeekdaysParse[o]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[o]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[o]=this.weekdays(s,"").toLocaleLowerCase();return i?"dddd"===e?(n=yn.call(this._weekdaysParse,r),-1!==n?n:null):"ddd"===e?(n=yn.call(this._shortWeekdaysParse,r),-1!==n?n:null):(n=yn.call(this._minWeekdaysParse,r),-1!==n?n:null):"dddd"===e?-1!==(n=yn.call(this._weekdaysParse,r))?n:-1!==(n=yn.call(this._shortWeekdaysParse,r))?n:(n=yn.call(this._minWeekdaysParse,r),-1!==n?n:null):"ddd"===e?-1!==(n=yn.call(this._shortWeekdaysParse,r))?n:-1!==(n=yn.call(this._weekdaysParse,r))?n:(n=yn.call(this._minWeekdaysParse,r),-1!==n?n:null):-1!==(n=yn.call(this._minWeekdaysParse,r))?n:-1!==(n=yn.call(this._weekdaysParse,r))?n:(n=yn.call(this._shortWeekdaysParse,r),-1!==n?n:null)}function zt(t,e,i){var o,n,s;if(this._weekdaysParseExact)return At.call(this,t,e,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),o=0;o<7;o++){if(n=u([2e3,1]).day(o),i&&!this._fullWeekdaysParse[o]&&(this._fullWeekdaysParse[o]=new RegExp("^"+this.weekdays(n,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[o]=new RegExp("^"+this.weekdaysShort(n,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[o]=new RegExp("^"+this.weekdaysMin(n,"").replace(".",".?")+"$","i")),this._weekdaysParse[o]||(s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[o]=new RegExp(s.replace(".",""),"i")),i&&"dddd"===e&&this._fullWeekdaysParse[o].test(t))return o;if(i&&"ddd"===e&&this._shortWeekdaysParse[o].test(t))return o;if(i&&"dd"===e&&this._minWeekdaysParse[o].test(t))return o;if(!i&&this._weekdaysParse[o].test(t))return o}}function Lt(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=Tt(t,this.localeData()),this.add(t-e,"d")):e}function Ft(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function Bt(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=Pt(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7}function jt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Yt.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=En),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ht(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Yt.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Tn),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Wt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Yt.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Pn),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Yt(){function t(t,e){return e.length-t.length}var e,i,o,n,s,r=[],a=[],h=[],d=[];for(e=0;e<7;e++)i=u([2e3,1]).day(e),o=this.weekdaysMin(i,""),n=this.weekdaysShort(i,""),s=this.weekdays(i,""),r.push(o),a.push(n),h.push(s),d.push(o),d.push(n),d.push(s);for(r.sort(t),a.sort(t),h.sort(t),d.sort(t),e=0;e<7;e++)a[e]=Z(a[e]),h[e]=Z(h[e]),d[e]=Z(d[e]);this._weekdaysRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Gt(){return this.hours()%12||12}function Vt(){return this.hours()||24}function Ut(t,e){H(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function qt(t,e){return e._meridiemParse}function Xt(t){return"p"===(t+"").toLowerCase().charAt(0)}function Zt(t,e,i){return t>11?i?"pm":"PM":i?"am":"AM"}function Kt(t){return t?t.toLowerCase().replace("_","-"):t}function Jt(t){for(var e,i,o,n,s=0;s<t.length;){for(n=Kt(t[s]).split("-"),e=n.length,i=Kt(t[s+1]),i=i?i.split("-"):null;e>0;){if(o=$t(n.slice(0,e).join("-")))return o;if(i&&i.length>=e&&w(n,i,!0)>=e-1)break;e--}s++}return null}function $t(e){var i=null;if(!zn[e]&&void 0!==t&&t&&t.exports)try{i=In._abbr;!function(){var t=new Error('Cannot find module "./locale"');throw t.code="MODULE_NOT_FOUND",t}(),Qt(i)}catch(t){}return zn[e]}function Qt(t,e){var i;return t&&(i=s(e)?ie(t):te(t,e))&&(In=i),In._abbr}function te(t,e){if(null!==e){var i=An;if(e.abbr=t,null!=zn[t])S("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=zn[t]._config;else if(null!=e.parentLocale){if(null==zn[e.parentLocale])return Ln[e.parentLocale]||(Ln[e.parentLocale]=[]),Ln[e.parentLocale].push({name:t,config:e}),null;i=zn[e.parentLocale]._config}return zn[t]=new O(C(i,e)),Ln[t]&&Ln[t].forEach(function(t){te(t.name,t.config)}),Qt(t),zn[t]}return delete zn[t],null}function ee(t,e){if(null!=e){var i,o=An;null!=zn[t]&&(o=zn[t]._config),e=C(o,e),i=new O(e),i.parentLocale=zn[t],zn[t]=i,Qt(t)}else null!=zn[t]&&(null!=zn[t].parentLocale?zn[t]=zn[t].parentLocale:null!=zn[t]&&delete zn[t]);return zn[t]}function ie(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return In;if(!i(t)){if(e=$t(t))return e;t=[t]}return Jt(t)}function oe(){return Io(zn)}function ne(t){var e,i=t._a;return i&&-2===p(t).overflow&&(e=i[ln]<0||i[ln]>11?ln:i[un]<1||i[un]>ht(i[dn],i[ln])?un:i[cn]<0||i[cn]>24||24===i[cn]&&(0!==i[pn]||0!==i[fn]||0!==i[mn])?cn:i[pn]<0||i[pn]>59?pn:i[fn]<0||i[fn]>59?fn:i[mn]<0||i[mn]>999?mn:-1,p(t)._overflowDayOfYear&&(e<dn||e>un)&&(e=un),p(t)._overflowWeeks&&-1===e&&(e=vn),p(t)._overflowWeekday&&-1===e&&(e=gn),p(t).overflow=e),t}function se(t,e,i){return null!=t?t:null!=e?e:i}function re(t){var i=new Date(e.now());return t._useUTC?[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]:[i.getFullYear(),i.getMonth(),i.getDate()]}function ae(t){var e,i,o,n,s=[];if(!t._d){for(o=re(t),t._w&&null==t._a[un]&&null==t._a[ln]&&he(t),null!=t._dayOfYear&&(n=se(t._a[dn],o[dn]),(t._dayOfYear>Q(n)||0===t._dayOfYear)&&(p(t)._overflowDayOfYear=!0),i=_t(n,0,t._dayOfYear),t._a[ln]=i.getUTCMonth(),t._a[un]=i.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=s[e]=o[e];for(;e<7;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[cn]&&0===t._a[pn]&&0===t._a[fn]&&0===t._a[mn]&&(t._nextDay=!0,t._a[cn]=0),t._d=(t._useUTC?_t:bt).apply(null,s),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[cn]=24),t._w&&void 0!==t._w.d&&t._w.d!==t._d.getDay()&&(p(t).weekdayMismatch=!0)}}function he(t){var e,i,o,n,s,r,a,h;if(e=t._w,null!=e.GG||null!=e.W||null!=e.E)s=1,r=4,i=se(e.GG,t._a[dn],kt(De(),1,4).year),o=se(e.W,1),((n=se(e.E,1))<1||n>7)&&(h=!0);else{s=t._locale._week.dow,r=t._locale._week.doy;var d=kt(De(),s,r);i=se(e.gg,t._a[dn],d.year),o=se(e.w,d.week),null!=e.d?((n=e.d)<0||n>6)&&(h=!0):null!=e.e?(n=e.e+s,(e.e<0||e.e>6)&&(h=!0)):n=s}o<1||o>St(i,s,r)?p(t)._overflowWeeks=!0:null!=h?p(t)._overflowWeekday=!0:(a=xt(i,o,n,s,r),t._a[dn]=a.year,t._dayOfYear=a.dayOfYear)}function de(t){var e,i,o,n,s,r,a=t._i,h=Fn.exec(a)||Bn.exec(a);if(h){for(p(t).iso=!0,e=0,i=Hn.length;e<i;e++)if(Hn[e][1].exec(h[1])){n=Hn[e][0],o=!1!==Hn[e][2];break}if(null==n)return void(t._isValid=!1);if(h[3]){for(e=0,i=Wn.length;e<i;e++)if(Wn[e][1].exec(h[3])){s=(h[2]||" ")+Wn[e][0];break}if(null==s)return void(t._isValid=!1)}if(!o&&null!=s)return void(t._isValid=!1);if(h[4]){if(!jn.exec(h[4]))return void(t._isValid=!1);r="Z"}t._f=n+(s||"")+(r||""),ge(t)}else t._isValid=!1}function le(t,e,i,o,n,s){var r=[ue(t),xn.indexOf(e),parseInt(i,10),parseInt(o,10),parseInt(n,10)];return s&&r.push(parseInt(s,10)),r}function ue(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function ce(t){return t.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}function pe(t,e,i){if(t){if(Cn.indexOf(t)!==new Date(e[0],e[1],e[2]).getDay())return p(i).weekdayMismatch=!0,i._isValid=!1,!1}return!0}function fe(t,e,i){if(t)return Vn[t];if(e)return 0;var o=parseInt(i,10),n=o%100;return(o-n)/100*60+n}function me(t){var e=Gn.exec(ce(t._i));if(e){var i=le(e[4],e[3],e[2],e[5],e[6],e[7]);if(!pe(e[1],i,t))return;t._a=i,t._tzm=fe(e[8],e[9],e[10]),t._d=_t.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),p(t).rfc2822=!0}else t._isValid=!1}function ve(t){var i=Yn.exec(t._i);if(null!==i)return void(t._d=new Date(+i[1]));de(t),!1===t._isValid&&(delete t._isValid,me(t),!1===t._isValid&&(delete t._isValid,e.createFromInputFallback(t)))}function ge(t){if(t._f===e.ISO_8601)return void de(t);if(t._f===e.RFC_2822)return void me(t);t._a=[],p(t).empty=!0;var i,o,n,s,r,a=""+t._i,h=a.length,d=0;for(n=V(t._f,t._locale).match(Bo)||[],i=0;i<n.length;i++)s=n[i],o=(a.match(q(s,t))||[])[0],o&&(r=a.substr(0,a.indexOf(o)),r.length>0&&p(t).unusedInput.push(r),a=a.slice(a.indexOf(o)+o.length),d+=o.length),Wo[s]?(o?p(t).empty=!1:p(t).unusedTokens.push(s),$(s,o,t)):t._strict&&!o&&p(t).unusedTokens.push(s);p(t).charsLeftOver=h-d,a.length>0&&p(t).unusedInput.push(a),t._a[cn]<=12&&!0===p(t).bigHour&&t._a[cn]>0&&(p(t).bigHour=void 0),p(t).parsedDateParts=t._a.slice(0),p(t).meridiem=t._meridiem,t._a[cn]=ye(t._locale,t._a[cn],t._meridiem),ae(t),ne(t)}function ye(t,e,i){var o;return null==i?e:null!=t.meridiemHour?t.meridiemHour(e,i):null!=t.isPM?(o=t.isPM(i),o&&e<12&&(e+=12),o||12!==e||(e=0),e):e}function be(t){var e,i,o,n,s;if(0===t._f.length)return p(t).invalidFormat=!0,void(t._d=new Date(NaN));for(n=0;n<t._f.length;n++)s=0,e=v({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[n],ge(e),f(e)&&(s+=p(e).charsLeftOver,s+=10*p(e).unusedTokens.length,p(e).score=s,(null==o||s<o)&&(o=s,i=e));l(t,i||e)}function _e(t){if(!t._d){var e=L(t._i);t._a=h([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),ae(t)}}function we(t){var e=new g(ne(xe(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function xe(t){var e=t._i,o=t._f;return t._locale=t._locale||ie(t._l),null===e||void 0===o&&""===e?m({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),y(e)?new g(ne(e)):(a(e)?t._d=e:i(o)?be(t):o?ge(t):ke(t),f(t)||(t._d=null),t))}function ke(t){var n=t._i;s(n)?t._d=new Date(e.now()):a(n)?t._d=new Date(n.valueOf()):"string"==typeof n?ve(t):i(n)?(t._a=h(n.slice(0),function(t){return parseInt(t,10)}),ae(t)):o(n)?_e(t):r(n)?t._d=new Date(n):e.createFromInputFallback(t)}function Se(t,e,s,r,a){var h={};return!0!==s&&!1!==s||(r=s,s=void 0),(o(t)&&n(t)||i(t)&&0===t.length)&&(t=void 0),h._isAMomentObject=!0,h._useUTC=h._isUTC=a,h._l=s,h._i=t,h._f=e,h._strict=r,we(h)}function De(t,e,i,o){return Se(t,e,i,o,!1)}function Me(t,e){var o,n;if(1===e.length&&i(e[0])&&(e=e[0]),!e.length)return De();for(o=e[0],n=1;n<e.length;++n)e[n].isValid()&&!e[n][t](o)||(o=e[n]);return o}function Ce(){return Me("isBefore",[].slice.call(arguments,0))}function Oe(){return Me("isAfter",[].slice.call(arguments,0))}function Ee(t){for(var e in t)if(-1===yn.call(Zn,e)||null!=t[e]&&isNaN(t[e]))return!1;for(var i=!1,o=0;o<Zn.length;++o)if(t[Zn[o]]){if(i)return!1;parseFloat(t[Zn[o]])!==_(t[Zn[o]])&&(i=!0)}return!0}function Te(){return this._isValid}function Pe(){return Ke(NaN)}function Ie(t){var e=L(t),i=e.year||0,o=e.quarter||0,n=e.month||0,s=e.week||0,r=e.day||0,a=e.hour||0,h=e.minute||0,d=e.second||0,l=e.millisecond||0;this._isValid=Ee(e),this._milliseconds=+l+1e3*d+6e4*h+1e3*a*60*60,this._days=+r+7*s,this._months=+n+3*o+12*i,this._data={},this._locale=ie(),this._bubble()}function Ne(t){return t instanceof Ie}function Re(t){return t<0?-1*Math.round(-1*t):Math.round(t)}function Ae(t,e){H(t,0,0,function(){var t=this.utcOffset(),i="+";return t<0&&(t=-t,i="-"),i+j(~~(t/60),2)+e+j(~~t%60,2)})}function ze(t,e){var i=(e||"").match(t);if(null===i)return null;var o=i[i.length-1]||[],n=(o+"").match(Kn)||["-",0,0],s=60*n[1]+_(n[2]);return 0===s?0:"+"===n[0]?s:-s}function Le(t,i){var o,n;return i._isUTC?(o=i.clone(),n=(y(t)||a(t)?t.valueOf():De(t).valueOf())-o.valueOf(),o._d.setTime(o._d.valueOf()+n),e.updateOffset(o,!1),o):De(t).local()}function Fe(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Be(t,i,o){var n,s=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"==typeof t){if(null===(t=ze(nn,t)))return this}else Math.abs(t)<16&&!o&&(t*=60);return!this._isUTC&&i&&(n=Fe(this)),this._offset=t,this._isUTC=!0,null!=n&&this.add(n,"m"),s!==t&&(!i||this._changeInProgress?ei(this,Ke(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?s:Fe(this)}function je(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function He(t){return this.utcOffset(0,t)}function We(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Fe(this),"m")),this}function Ye(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var t=ze(on,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this}function Ge(t){return!!this.isValid()&&(t=t?De(t).utcOffset():0,(this.utcOffset()-t)%60==0)}function Ve(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ue(){if(!s(this._isDSTShifted))return this._isDSTShifted;var t={};if(v(t,this),t=xe(t),t._a){var e=t._isUTC?u(t._a):De(t._a);this._isDSTShifted=this.isValid()&&w(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function qe(){return!!this.isValid()&&!this._isUTC}function Xe(){return!!this.isValid()&&this._isUTC}function Ze(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ke(t,e){var i,o,n,s=t,a=null;return Ne(t)?s={ms:t._milliseconds,d:t._days,M:t._months}:r(t)?(s={},e?s[e]=t:s.milliseconds=t):(a=Jn.exec(t))?(i="-"===a[1]?-1:1,s={y:0,d:_(a[un])*i,h:_(a[cn])*i,m:_(a[pn])*i,s:_(a[fn])*i,ms:_(Re(1e3*a[mn]))*i}):(a=$n.exec(t))?(i="-"===a[1]?-1:(a[1],1),s={y:Je(a[2],i),M:Je(a[3],i),w:Je(a[4],i),d:Je(a[5],i),h:Je(a[6],i),m:Je(a[7],i),s:Je(a[8],i)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(n=Qe(De(s.from),De(s.to)),s={},s.ms=n.milliseconds,s.M=n.months),o=new Ie(s),Ne(t)&&d(t,"_locale")&&(o._locale=t._locale),o}function Je(t,e){var i=t&&parseFloat(t.replace(",","."));return(isNaN(i)?0:i)*e}function $e(t,e){var i={milliseconds:0,months:0};return i.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(i.months,"M").isAfter(e)&&--i.months,i.milliseconds=+e-+t.clone().add(i.months,"M"),i}function Qe(t,e){var i;return t.isValid()&&e.isValid()?(e=Le(e,t),t.isBefore(e)?i=$e(t,e):(i=$e(e,t),i.milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function ti(t,e){return function(i,o){var n,s;return null===o||isNaN(+o)||(S(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=i,i=o,o=s),i="string"==typeof i?+i:i,n=Ke(i,o),ei(this,n,t),this}}function ei(t,i,o,n){var s=i._milliseconds,r=Re(i._days),a=Re(i._months);t.isValid()&&(n=null==n||n,a&&pt(t,ot(t,"Month")+a*o),r&&nt(t,"Date",ot(t,"Date")+r*o),s&&t._d.setTime(t._d.valueOf()+s*o),n&&e.updateOffset(t,r||a))}function ii(t,e){var i=t.diff(e,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"}function oi(t,i){var o=t||De(),n=Le(o,this).startOf("day"),s=e.calendarFormat(this,n)||"sameElse",r=i&&(D(i[s])?i[s].call(this,o):i[s]);return this.format(r||this.localeData().calendar(s,this,De(o)))}function ni(){return new g(this)}function si(t,e){var i=y(t)?t:De(t);return!(!this.isValid()||!i.isValid())&&(e=z(s(e)?"millisecond":e),"millisecond"===e?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(e).valueOf())}function ri(t,e){var i=y(t)?t:De(t);return!(!this.isValid()||!i.isValid())&&(e=z(s(e)?"millisecond":e),"millisecond"===e?this.valueOf()<i.valueOf():this.clone().endOf(e).valueOf()<i.valueOf())}function ai(t,e,i,o){return o=o||"()",("("===o[0]?this.isAfter(t,i):!this.isBefore(t,i))&&(")"===o[1]?this.isBefore(e,i):!this.isAfter(e,i))}function hi(t,e){var i,o=y(t)?t:De(t);return!(!this.isValid()||!o.isValid())&&(e=z(e||"millisecond"),"millisecond"===e?this.valueOf()===o.valueOf():(i=o.valueOf(),this.clone().startOf(e).valueOf()<=i&&i<=this.clone().endOf(e).valueOf()))}function di(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function li(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function ui(t,e,i){var o,n,s;if(!this.isValid())return NaN;if(o=Le(t,this),!o.isValid())return NaN;switch(n=6e4*(o.utcOffset()-this.utcOffset()),e=z(e)){case"year":s=ci(this,o)/12;break;case"month":s=ci(this,o);break;case"quarter":s=ci(this,o)/3;break;case"second":s=(this-o)/1e3;break;case"minute":s=(this-o)/6e4;break;case"hour":s=(this-o)/36e5;break;case"day":s=(this-o-n)/864e5;break;case"week":s=(this-o-n)/6048e5;break;default:s=this-o}return i?s:b(s)}function ci(t,e){var i,o,n=12*(e.year()-t.year())+(e.month()-t.month()),s=t.clone().add(n,"months");return e-s<0?(i=t.clone().add(n-1,"months"),o=(e-s)/(s-i)):(i=t.clone().add(n+1,"months"),o=(e-s)/(i-s)),-(n+o)||0}function pi(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function fi(){if(!this.isValid())return null;var t=this.clone().utc();return t.year()<0||t.year()>9999?G(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):D(Date.prototype.toISOString)?this.toDate().toISOString():G(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function mi(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var i="["+t+'("]',o=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n=e+'[")]';return this.format(i+o+"-MM-DD[T]HH:mm:ss.SSS"+n)}function vi(t){t||(t=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var i=G(this,t);return this.localeData().postformat(i)}function gi(t,e){return this.isValid()&&(y(t)&&t.isValid()||De(t).isValid())?Ke({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function yi(t){return this.from(De(),t)}function bi(t,e){return this.isValid()&&(y(t)&&t.isValid()||De(t).isValid())?Ke({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function _i(t){return this.to(De(),t)}function wi(t){var e;return void 0===t?this._locale._abbr:(e=ie(t),null!=e&&(this._locale=e),this)}function xi(){return this._locale}function ki(t){switch(t=z(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function Si(t){return void 0===(t=z(t))||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))}function Di(){return this._d.valueOf()-6e4*(this._offset||0)}function Mi(){return Math.floor(this.valueOf()/1e3)}function Ci(){return new Date(this.valueOf())}function Oi(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function Ei(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function Ti(){return this.isValid()?this.toISOString():null}function Pi(){return f(this)}function Ii(){return l({},p(this))}function Ni(){return p(this).overflow}function Ri(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ai(t,e){H(0,[t,t.length],0,e)}function zi(t){return ji.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Li(t){return ji.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Fi(){return St(this.year(),1,4)}function Bi(){var t=this.localeData()._week;return St(this.year(),t.dow,t.doy)}function ji(t,e,i,o,n){var s;return null==t?kt(this,o,n).year:(s=St(t,o,n),e>s&&(e=s),Hi.call(this,t,e,i,o,n))}function Hi(t,e,i,o,n){var s=xt(t,e,i,o,n),r=_t(s.year,0,s.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}function Wi(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function Yi(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function Gi(t,e){e[mn]=_(1e3*("0."+t))}function Vi(){return this._isUTC?"UTC":""}function Ui(){return this._isUTC?"Coordinated Universal Time":""}function qi(t){return De(1e3*t)}function Xi(){return De.apply(null,arguments).parseZone()}function Zi(t){return t}function Ki(t,e,i,o){var n=ie(),s=u().set(o,e);return n[i](s,t)}function Ji(t,e,i){if(r(t)&&(e=t,t=void 0),t=t||"",null!=e)return Ki(t,e,i,"month");var o,n=[];for(o=0;o<12;o++)n[o]=Ki(t,o,i,"month");return n}function $i(t,e,i,o){"boolean"==typeof t?(r(e)&&(i=e,e=void 0),e=e||""):(e=t,i=e,t=!1,r(e)&&(i=e,e=void 0),e=e||"");var n=ie(),s=t?n._week.dow:0;if(null!=i)return Ki(e,(i+s)%7,o,"day");var a,h=[];for(a=0;a<7;a++)h[a]=Ki(e,(a+s)%7,o,"day");return h}function Qi(t,e){return Ji(t,e,"months")}function to(t,e){return Ji(t,e,"monthsShort")}function eo(t,e,i){return $i(t,e,i,"weekdays")}function io(t,e,i){return $i(t,e,i,"weekdaysShort")}function oo(t,e,i){return $i(t,e,i,"weekdaysMin")}function no(){var t=this._data;return this._milliseconds=ds(this._milliseconds),this._days=ds(this._days),this._months=ds(this._months),t.milliseconds=ds(t.milliseconds),t.seconds=ds(t.seconds),t.minutes=ds(t.minutes),t.hours=ds(t.hours),t.months=ds(t.months),t.years=ds(t.years),this}function so(t,e,i,o){var n=Ke(e,i);return t._milliseconds+=o*n._milliseconds,t._days+=o*n._days,t._months+=o*n._months,t._bubble()}function ro(t,e){return so(this,t,e,1)}function ao(t,e){return so(this,t,e,-1)}function ho(t){return t<0?Math.floor(t):Math.ceil(t)}function lo(){var t,e,i,o,n,s=this._milliseconds,r=this._days,a=this._months,h=this._data;return s>=0&&r>=0&&a>=0||s<=0&&r<=0&&a<=0||(s+=864e5*ho(co(a)+r),r=0,a=0),h.milliseconds=s%1e3,t=b(s/1e3),h.seconds=t%60,e=b(t/60),h.minutes=e%60,i=b(e/60),h.hours=i%24,r+=b(i/24),n=b(uo(r)),a+=n,
r-=ho(co(n)),o=b(a/12),a%=12,h.days=r,h.months=a,h.years=o,this}function uo(t){return 4800*t/146097}function co(t){return 146097*t/4800}function po(t){if(!this.isValid())return NaN;var e,i,o=this._milliseconds;if("month"===(t=z(t))||"year"===t)return e=this._days+o/864e5,i=this._months+uo(e),"month"===t?i:i/12;switch(e=this._days+Math.round(co(this._months)),t){case"week":return e/7+o/6048e5;case"day":return e+o/864e5;case"hour":return 24*e+o/36e5;case"minute":return 1440*e+o/6e4;case"second":return 86400*e+o/1e3;case"millisecond":return Math.floor(864e5*e)+o;default:throw new Error("Unknown unit "+t)}}function fo(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*_(this._months/12):NaN}function mo(t){return function(){return this.as(t)}}function vo(){return Ke(this)}function go(t){return t=z(t),this.isValid()?this[t+"s"]():NaN}function yo(t){return function(){return this.isValid()?this._data[t]:NaN}}function bo(){return b(this.days()/7)}function _o(t,e,i,o,n){return n.relativeTime(e||1,!!i,t,o)}function wo(t,e,i){var o=Ke(t).abs(),n=Ds(o.as("s")),s=Ds(o.as("m")),r=Ds(o.as("h")),a=Ds(o.as("d")),h=Ds(o.as("M")),d=Ds(o.as("y")),l=n<=Ms.ss&&["s",n]||n<Ms.s&&["ss",n]||s<=1&&["m"]||s<Ms.m&&["mm",s]||r<=1&&["h"]||r<Ms.h&&["hh",r]||a<=1&&["d"]||a<Ms.d&&["dd",a]||h<=1&&["M"]||h<Ms.M&&["MM",h]||d<=1&&["y"]||["yy",d];return l[2]=e,l[3]=+t>0,l[4]=i,_o.apply(null,l)}function xo(t){return void 0===t?Ds:"function"==typeof t&&(Ds=t,!0)}function ko(t,e){return void 0!==Ms[t]&&(void 0===e?Ms[t]:(Ms[t]=e,"s"===t&&(Ms.ss=e-1),!0))}function So(t){if(!this.isValid())return this.localeData().invalidDate();var e=this.localeData(),i=wo(this,!t,e);return t&&(i=e.pastFuture(+this,i)),e.postformat(i)}function Do(t){return(t>0)-(t<0)||+t}function Mo(){if(!this.isValid())return this.localeData().invalidDate();var t,e,i,o=Cs(this._milliseconds)/1e3,n=Cs(this._days),s=Cs(this._months);t=b(o/60),e=b(t/60),o%=60,t%=60,i=b(s/12),s%=12;var r=i,a=s,h=n,d=e,l=t,u=o?o.toFixed(3).replace(/\.?0+$/,""):"",c=this.asSeconds();if(!c)return"P0D";var p=c<0?"-":"",f=Do(this._months)!==Do(c)?"-":"",m=Do(this._days)!==Do(c)?"-":"",v=Do(this._milliseconds)!==Do(c)?"-":"";return p+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(h?m+h+"D":"")+(d||l||u?"T":"")+(d?v+d+"H":"")+(l?v+l+"M":"")+(u?v+u+"S":"")}var Co,Oo;Oo=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),i=e.length>>>0,o=0;o<i;o++)if(o in e&&t.call(this,e[o],o,e))return!0;return!1};var Eo=e.momentProperties=[],To=!1,Po={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var Io;Io=Object.keys?Object.keys:function(t){var e,i=[];for(e in t)d(t,e)&&i.push(e);return i};var No={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ro={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ao=/\d{1,2}/,zo={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Lo={},Fo={},Bo=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,jo=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ho={},Wo={},Yo=/\d/,Go=/\d\d/,Vo=/\d{3}/,Uo=/\d{4}/,qo=/[+-]?\d{6}/,Xo=/\d\d?/,Zo=/\d\d\d\d?/,Ko=/\d\d\d\d\d\d?/,Jo=/\d{1,3}/,$o=/\d{1,4}/,Qo=/[+-]?\d{1,6}/,tn=/\d+/,en=/[+-]?\d+/,on=/Z|[+-]\d\d:?\d\d/gi,nn=/Z|[+-]\d\d(?::?\d\d)?/gi,sn=/[+-]?\d+(\.\d{1,3})?/,rn=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,an={},hn={},dn=0,ln=1,un=2,cn=3,pn=4,fn=5,mn=6,vn=7,gn=8;H("Y",0,0,function(){var t=this.year();return t<=9999?""+t:"+"+t}),H(0,["YY",2],0,function(){return this.year()%100}),H(0,["YYYY",4],0,"year"),H(0,["YYYYY",5],0,"year"),H(0,["YYYYYY",6,!0],0,"year"),A("year","y"),F("year",1),U("Y",en),U("YY",Xo,Go),U("YYYY",$o,Uo),U("YYYYY",Qo,qo),U("YYYYYY",Qo,qo),K(["YYYYY","YYYYYY"],dn),K("YYYY",function(t,i){i[dn]=2===t.length?e.parseTwoDigitYear(t):_(t)}),K("YY",function(t,i){i[dn]=e.parseTwoDigitYear(t)}),K("Y",function(t,e){e[dn]=parseInt(t,10)}),e.parseTwoDigitYear=function(t){return _(t)+(_(t)>68?1900:2e3)};var yn,bn=it("FullYear",!0);yn=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},H("M",["MM",2],"Mo",function(){return this.month()+1}),H("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),H("MMMM",0,0,function(t){return this.localeData().months(this,t)}),A("month","M"),F("month",8),U("M",Xo),U("MM",Xo,Go),U("MMM",function(t,e){return e.monthsShortRegex(t)}),U("MMMM",function(t,e){return e.monthsRegex(t)}),K(["M","MM"],function(t,e){e[ln]=_(t)-1}),K(["MMM","MMMM"],function(t,e,i,o){var n=i._locale.monthsParse(t,o,i._strict);null!=n?e[ln]=n:p(i).invalidMonth=t});var _n=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,wn="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),xn="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),kn=rn,Sn=rn;H("w",["ww",2],"wo","week"),H("W",["WW",2],"Wo","isoWeek"),A("week","w"),A("isoWeek","W"),F("week",5),F("isoWeek",5),U("w",Xo),U("ww",Xo,Go),U("W",Xo),U("WW",Xo,Go),J(["w","ww","W","WW"],function(t,e,i,o){e[o.substr(0,1)]=_(t)});var Dn={dow:0,doy:6};H("d",0,"do","day"),H("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),H("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),H("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),H("e",0,0,"weekday"),H("E",0,0,"isoWeekday"),A("day","d"),A("weekday","e"),A("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),U("d",Xo),U("e",Xo),U("E",Xo),U("dd",function(t,e){return e.weekdaysMinRegex(t)}),U("ddd",function(t,e){return e.weekdaysShortRegex(t)}),U("dddd",function(t,e){return e.weekdaysRegex(t)}),J(["dd","ddd","dddd"],function(t,e,i,o){var n=i._locale.weekdaysParse(t,o,i._strict);null!=n?e.d=n:p(i).invalidWeekday=t}),J(["d","e","E"],function(t,e,i,o){e[o]=_(t)});var Mn="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Cn="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),On="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),En=rn,Tn=rn,Pn=rn;H("H",["HH",2],0,"hour"),H("h",["hh",2],0,Gt),H("k",["kk",2],0,Vt),H("hmm",0,0,function(){return""+Gt.apply(this)+j(this.minutes(),2)}),H("hmmss",0,0,function(){return""+Gt.apply(this)+j(this.minutes(),2)+j(this.seconds(),2)}),H("Hmm",0,0,function(){return""+this.hours()+j(this.minutes(),2)}),H("Hmmss",0,0,function(){return""+this.hours()+j(this.minutes(),2)+j(this.seconds(),2)}),Ut("a",!0),Ut("A",!1),A("hour","h"),F("hour",13),U("a",qt),U("A",qt),U("H",Xo),U("h",Xo),U("k",Xo),U("HH",Xo,Go),U("hh",Xo,Go),U("kk",Xo,Go),U("hmm",Zo),U("hmmss",Ko),U("Hmm",Zo),U("Hmmss",Ko),K(["H","HH"],cn),K(["k","kk"],function(t,e,i){var o=_(t);e[cn]=24===o?0:o}),K(["a","A"],function(t,e,i){i._isPm=i._locale.isPM(t),i._meridiem=t}),K(["h","hh"],function(t,e,i){e[cn]=_(t),p(i).bigHour=!0}),K("hmm",function(t,e,i){var o=t.length-2;e[cn]=_(t.substr(0,o)),e[pn]=_(t.substr(o)),p(i).bigHour=!0}),K("hmmss",function(t,e,i){var o=t.length-4,n=t.length-2;e[cn]=_(t.substr(0,o)),e[pn]=_(t.substr(o,2)),e[fn]=_(t.substr(n)),p(i).bigHour=!0}),K("Hmm",function(t,e,i){var o=t.length-2;e[cn]=_(t.substr(0,o)),e[pn]=_(t.substr(o))}),K("Hmmss",function(t,e,i){var o=t.length-4,n=t.length-2;e[cn]=_(t.substr(0,o)),e[pn]=_(t.substr(o,2)),e[fn]=_(t.substr(n))});var In,Nn=/[ap]\.?m?\.?/i,Rn=it("Hours",!0),An={calendar:No,longDateFormat:Ro,invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:Ao,relativeTime:zo,months:wn,monthsShort:xn,week:Dn,weekdays:Mn,weekdaysMin:On,weekdaysShort:Cn,meridiemParse:Nn},zn={},Ln={},Fn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,jn=/Z|[+-]\d\d(?::?\d\d)?/,Hn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Wn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Yn=/^\/?Date\((\-?\d+)/i,Gn=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Vn={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};e.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),e.ISO_8601=function(){},e.RFC_2822=function(){};var Un=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=De.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:m()}),qn=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=De.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:m()}),Xn=function(){return Date.now?Date.now():+new Date},Zn=["year","quarter","month","week","day","hour","minute","second","millisecond"];Ae("Z",":"),Ae("ZZ",""),U("Z",nn),U("ZZ",nn),K(["Z","ZZ"],function(t,e,i){i._useUTC=!0,i._tzm=ze(nn,t)});var Kn=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var Jn=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,$n=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;Ke.fn=Ie.prototype,Ke.invalid=Pe;var Qn=ti(1,"add"),ts=ti(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var es=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});H(0,["gg",2],0,function(){return this.weekYear()%100}),H(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ai("gggg","weekYear"),Ai("ggggg","weekYear"),Ai("GGGG","isoWeekYear"),Ai("GGGGG","isoWeekYear"),A("weekYear","gg"),A("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),U("G",en),U("g",en),U("GG",Xo,Go),U("gg",Xo,Go),U("GGGG",$o,Uo),U("gggg",$o,Uo),U("GGGGG",Qo,qo),U("ggggg",Qo,qo),J(["gggg","ggggg","GGGG","GGGGG"],function(t,e,i,o){e[o.substr(0,2)]=_(t)}),J(["gg","GG"],function(t,i,o,n){i[n]=e.parseTwoDigitYear(t)}),H("Q",0,"Qo","quarter"),A("quarter","Q"),F("quarter",7),U("Q",Yo),K("Q",function(t,e){e[ln]=3*(_(t)-1)}),H("D",["DD",2],"Do","date"),A("date","D"),F("date",9),U("D",Xo),U("DD",Xo,Go),U("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient}),K(["D","DD"],un),K("Do",function(t,e){e[un]=_(t.match(Xo)[0],10)});var is=it("Date",!0);H("DDD",["DDDD",3],"DDDo","dayOfYear"),A("dayOfYear","DDD"),F("dayOfYear",4),U("DDD",Jo),U("DDDD",Vo),K(["DDD","DDDD"],function(t,e,i){i._dayOfYear=_(t)}),H("m",["mm",2],0,"minute"),A("minute","m"),F("minute",14),U("m",Xo),U("mm",Xo,Go),K(["m","mm"],pn);var os=it("Minutes",!1);H("s",["ss",2],0,"second"),A("second","s"),F("second",15),U("s",Xo),U("ss",Xo,Go),K(["s","ss"],fn);var ns=it("Seconds",!1);H("S",0,0,function(){return~~(this.millisecond()/100)}),H(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),H(0,["SSS",3],0,"millisecond"),H(0,["SSSS",4],0,function(){return 10*this.millisecond()}),H(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),H(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),H(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),H(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),H(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),A("millisecond","ms"),F("millisecond",16),U("S",Jo,Yo),U("SS",Jo,Go),U("SSS",Jo,Vo);var ss;for(ss="SSSS";ss.length<=9;ss+="S")U(ss,tn);for(ss="S";ss.length<=9;ss+="S")K(ss,Gi);var rs=it("Milliseconds",!1);H("z",0,0,"zoneAbbr"),H("zz",0,0,"zoneName");var as=g.prototype;as.add=Qn,as.calendar=oi,as.clone=ni,as.diff=ui,as.endOf=Si,as.format=vi,as.from=gi,as.fromNow=yi,as.to=bi,as.toNow=_i,as.get=st,as.invalidAt=Ni,as.isAfter=si,as.isBefore=ri,as.isBetween=ai,as.isSame=hi,as.isSameOrAfter=di,as.isSameOrBefore=li,as.isValid=Pi,as.lang=es,as.locale=wi,as.localeData=xi,as.max=qn,as.min=Un,as.parsingFlags=Ii,as.set=rt,as.startOf=ki,as.subtract=ts,as.toArray=Oi,as.toObject=Ei,as.toDate=Ci,as.toISOString=fi,as.inspect=mi,as.toJSON=Ti,as.toString=pi,as.unix=Mi,as.valueOf=Di,as.creationData=Ri,as.year=bn,as.isLeapYear=et,as.weekYear=zi,as.isoWeekYear=Li,as.quarter=as.quarters=Wi,as.month=ft,as.daysInMonth=mt,as.week=as.weeks=Ot,as.isoWeek=as.isoWeeks=Et,as.weeksInYear=Bi,as.isoWeeksInYear=Fi,as.date=is,as.day=as.days=Lt,as.weekday=Ft,as.isoWeekday=Bt,as.dayOfYear=Yi,as.hour=as.hours=Rn,as.minute=as.minutes=os,as.second=as.seconds=ns,as.millisecond=as.milliseconds=rs,as.utcOffset=Be,as.utc=He,as.local=We,as.parseZone=Ye,as.hasAlignedHourOffset=Ge,as.isDST=Ve,as.isLocal=qe,as.isUtcOffset=Xe,as.isUtc=Ze,as.isUTC=Ze,as.zoneAbbr=Vi,as.zoneName=Ui,as.dates=k("dates accessor is deprecated. Use date instead.",is),as.months=k("months accessor is deprecated. Use month instead",ft),as.years=k("years accessor is deprecated. Use year instead",bn),as.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",je),as.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ue);var hs=O.prototype;hs.calendar=E,hs.longDateFormat=T,hs.invalidDate=P,hs.ordinal=I,hs.preparse=Zi,hs.postformat=Zi,hs.relativeTime=N,hs.pastFuture=R,hs.set=M,hs.months=dt,hs.monthsShort=lt,hs.monthsParse=ct,hs.monthsRegex=gt,hs.monthsShortRegex=vt,hs.week=Dt,hs.firstDayOfYear=Ct,hs.firstDayOfWeek=Mt,hs.weekdays=It,hs.weekdaysMin=Rt,hs.weekdaysShort=Nt,hs.weekdaysParse=zt,hs.weekdaysRegex=jt,hs.weekdaysShortRegex=Ht,hs.weekdaysMinRegex=Wt,hs.isPM=Xt,hs.meridiem=Zt,Qt("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1===_(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),e.lang=k("moment.lang is deprecated. Use moment.locale instead.",Qt),e.langData=k("moment.langData is deprecated. Use moment.localeData instead.",ie);var ds=Math.abs,ls=mo("ms"),us=mo("s"),cs=mo("m"),ps=mo("h"),fs=mo("d"),ms=mo("w"),vs=mo("M"),gs=mo("y"),ys=yo("milliseconds"),bs=yo("seconds"),_s=yo("minutes"),ws=yo("hours"),xs=yo("days"),ks=yo("months"),Ss=yo("years"),Ds=Math.round,Ms={ss:44,s:45,m:45,h:22,d:26,M:11},Cs=Math.abs,Os=Ie.prototype;return Os.isValid=Te,Os.abs=no,Os.add=ro,Os.subtract=ao,Os.as=po,Os.asMilliseconds=ls,Os.asSeconds=us,Os.asMinutes=cs,Os.asHours=ps,Os.asDays=fs,Os.asWeeks=ms,Os.asMonths=vs,Os.asYears=gs,Os.valueOf=fo,Os._bubble=lo,Os.clone=vo,Os.get=go,Os.milliseconds=ys,Os.seconds=bs,Os.minutes=_s,Os.hours=ws,Os.days=xs,Os.weeks=bo,Os.months=ks,Os.years=Ss,Os.humanize=So,Os.toISOString=Mo,Os.toString=Mo,Os.toJSON=Mo,Os.locale=wi,Os.localeData=xi,Os.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Mo),Os.lang=es,H("X",0,0,"unix"),H("x",0,0,"valueOf"),U("x",en),U("X",sn),K("X",function(t,e,i){i._d=new Date(1e3*parseFloat(t,10))}),K("x",function(t,e,i){i._d=new Date(_(t))}),e.version="2.19.1",function(t){Co=t}(De),e.fn=as,e.min=Ce,e.max=Oe,e.now=Xn,e.utc=u,e.unix=qi,e.months=Qi,e.isDate=a,e.locale=Qt,e.invalid=m,e.duration=Ke,e.isMoment=y,e.weekdays=eo,e.parseZone=Xi,e.localeData=ie,e.isDuration=Ne,e.monthsShort=to,e.weekdaysMin=oo,e.defineLocale=te,e.updateLocale=ee,e.locales=oe,e.weekdaysShort=io,e.normalizeUnits=z,e.relativeTimeRounding=xo,e.relativeTimeThreshold=ko,e.calendarFormat=ii,e.prototype=as,e})}).call(e,i(155)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){function i(t){throw new Error("Cannot find module '"+t+"'.")}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=156},function(t,e,i){(function(e){function i(t,e,i){var o=e&&i||0,n=0;for(e=e||[],t.toLowerCase().replace(/[0-9a-f]{2}/g,function(t){n<16&&(e[o+n++]=u[t])});n<16;)e[o+n++]=0;return e}function o(t,e){var i=e||0,o=l;return o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]}function n(t,e,i){var n=e&&i||0,s=e||[];t=t||{};var r=void 0!==t.clockseq?t.clockseq:m,a=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:g+1,d=a-v+(h-g)/1e4;if(d<0&&void 0===t.clockseq&&(r=r+1&16383),(d<0||a>v)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");v=a,g=h,m=r,a+=122192928e5;var l=(1e4*(268435455&a)+h)%4294967296;s[n++]=l>>>24&255,s[n++]=l>>>16&255,s[n++]=l>>>8&255,s[n++]=255&l;var u=a/4294967296*1e4&268435455;s[n++]=u>>>8&255,s[n++]=255&u,s[n++]=u>>>24&15|16,s[n++]=u>>>16&255,s[n++]=r>>>8|128,s[n++]=255&r;for(var c=t.node||f,p=0;p<6;p++)s[n+p]=c[p];return e||o(s)}function s(t,e,i){var n=e&&i||0;"string"==typeof t&&(e="binary"==t?new Array(16):null,t=null),t=t||{};var s=t.random||(t.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var a=0;a<16;a++)e[n+a]=s[a];return e||o(s)}var r,a="undefined"!=typeof window?window:void 0!==e?e:null;if(a&&a.crypto&&crypto.getRandomValues){var h=new Uint8Array(16);r=function(){return crypto.getRandomValues(h),h}}if(!r){var d=new Array(16);r=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),d[e]=t>>>((3&e)<<3)&255;return d}}for(var l=[],u={},c=0;c<256;c++)l[c]=(c+256).toString(16).substr(1),u[l[c]]=c;var p=r(),f=[1|p[0],p[1],p[2],p[3],p[4],p[5]],m=16383&(p[6]<<8|p[7]),v=0,g=0,y=s;y.v1=n,y.v4=s,y.parse=i,y.unparse=o,t.exports=y}).call(e,i(158))},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){e.util=i(2),e.DOMutil=i(14),e.DataSet=i(11),e.DataView=i(12),e.Queue=i(43),e.Graph3d=i(161),e.graph3d={Camera:i(95),Filter:i(96),Point2d:i(91),Point3d:i(34),Slider:i(92),StepNumber:i(93)},e.moment=i(9),e.Hammer=i(10),e.keycharm=i(35)},function(t,e,i){var o=i(7),n=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},function(t,e,i){function o(t,e,i){if(!(this instanceof o))throw new SyntaxError("Constructor must be called with the new operator");this.containerElement=t,this.dataGroup=new _,this.dataPoints=null,this.create(),f.setDefaults(o.DEFAULTS,this),this.colX=void 0,this.colY=void 0,this.colZ=void 0,this.colValue=void 0,this.setOptions(i),this.setData(e)}function n(t){return"clientX"in t?t.clientX:t.targetTouches[0]&&t.targetTouches[0].clientX||0}function s(t){return"clientY"in t?t.clientY:t.targetTouches[0]&&t.targetTouches[0].clientY||0}var r=i(90),a=function(t){return t&&t.__esModule?t:{default:t}}(r),h=i(44),d=i(2),l=i(34),u=i(91),c=i(92),p=i(93),f=i(94),m=i(15).default,v=i(15),g=v.printStyle,y=i(172),b=y.allOptions,_=i(173);o.STYLE=f.STYLE;o.DEFAULTS={width:"400px",height:"400px",filterLabel:"time",legendLabel:"value",xLabel:"x",yLabel:"y",zLabel:"z",xValueLabel:function(t){return t},yValueLabel:function(t){return t},zValueLabel:function(t){return t},showXAxis:!0,showYAxis:!0,showZAxis:!0,showGrid:!0,showPerspective:!0,showShadow:!1,keepAspectRatio:!0,verticalRatio:.5,dotSizeRatio:.02,dotSizeMinFraction:.5,dotSizeMaxFraction:2.5,showAnimationControls:void 0,animationInterval:1e3,animationPreload:!1,animationAutoStart:void 0,axisColor:"#4D4D4D",gridColor:"#D3D3D3",xCenter:"55%",yCenter:"50%",style:o.STYLE.DOT,tooltip:!1,tooltipStyle:{content:{padding:"10px",border:"1px solid #4d4d4d",color:"#1a1a1a",background:"rgba(255,255,255,0.7)",borderRadius:"2px",boxShadow:"5px 5px 10px rgba(128,128,128,0.5)"},line:{height:"40px",width:"0",borderLeft:"1px solid #4d4d4d"},dot:{height:"0",width:"0",border:"5px solid #4d4d4d",borderRadius:"5px"}},dataColor:{fill:"#7DC1FF",stroke:"#3267D2",strokeWidth:1},cameraPosition:{horizontal:1,vertical:.5,distance:1.7},showLegend:void 0,backgroundColor:void 0,xBarWidth:void 0,yBarWidth:void 0,valueMin:void 0,valueMax:void 0,xMin:void 0,xMax:void 0,xStep:void 0,yMin:void 0,yMax:void 0,yStep:void 0,zMin:void 0,zMax:void 0,zStep:void 0},h(o.prototype),o.prototype._setScale=function(){this.scale=new l(1/this.xRange.range(),1/this.yRange.range(),1/this.zRange.range()),this.keepAspectRatio&&(this.scale.x<this.scale.y?this.scale.y=this.scale.x:this.scale.x=this.scale.y),this.scale.z*=this.verticalRatio,void 0!==this.valueRange&&(this.scale.value=1/this.valueRange.range());var t=this.xRange.center()*this.scale.x,e=this.yRange.center()*this.scale.y,i=this.zRange.center()*this.scale.z;this.camera.setArmLocation(t,e,i)},o.prototype._convert3Dto2D=function(t){var e=this._convertPointToTranslation(t);return this._convertTranslationToScreen(e)},o.prototype._convertPointToTranslation=function(t){var e=this.camera.getCameraLocation(),i=this.camera.getCameraRotation(),o=t.x*this.scale.x,n=t.y*this.scale.y,s=t.z*this.scale.z,r=e.x,a=e.y,h=e.z,d=Math.sin(i.x),u=Math.cos(i.x),c=Math.sin(i.y),p=Math.cos(i.y),f=Math.sin(i.z),m=Math.cos(i.z);return new l(p*(f*(n-a)+m*(o-r))-c*(s-h),d*(p*(s-h)+c*(f*(n-a)+m*(o-r)))+u*(m*(n-a)-f*(o-r)),u*(p*(s-h)+c*(f*(n-a)+m*(o-r)))-d*(m*(n-a)-f*(o-r)))},o.prototype._convertTranslationToScreen=function(t){var e,i,o=this.eye.x,n=this.eye.y,s=this.eye.z,r=t.x,a=t.y,h=t.z;return this.showPerspective?(e=s/h*(r-o),i=s/h*(a-n)):(e=r*(-s/this.camera.getArmLength()),i=a*(-s/this.camera.getArmLength())),new u(this.currentXCenter+e*this.frame.canvas.clientWidth,this.currentYCenter-i*this.frame.canvas.clientWidth)},o.prototype._calcTranslations=function(t){for(var e=0;e<t.length;e++){var i=t[e];i.trans=this._convertPointToTranslation(i.point),i.screen=this._convertTranslationToScreen(i.trans);var o=this._convertPointToTranslation(i.bottom);i.dist=this.showPerspective?o.length():-o.z}var n=function(t,e){return e.dist-t.dist};t.sort(n)},o.prototype._initializeRanges=function(){var t=this.dataGroup;this.xRange=t.xRange,this.yRange=t.yRange,this.zRange=t.zRange,this.valueRange=t.valueRange,this.xStep=t.xStep,this.yStep=t.yStep,this.zStep=t.zStep,this.xBarWidth=t.xBarWidth,this.yBarWidth=t.yBarWidth,this.colX=t.colX,this.colY=t.colY,this.colZ=t.colZ,this.colValue=t.colValue,this._setScale()},o.prototype.getDataPoints=function(t){for(var e=[],i=0;i<t.length;i++){var o=new l;o.x=t[i][this.colX]||0,o.y=t[i][this.colY]||0,o.z=t[i][this.colZ]||0,o.data=t[i],void 0!==this.colValue&&(o.value=t[i][this.colValue]||0);var n={};n.point=o,n.bottom=new l(o.x,o.y,this.zRange.min),n.trans=void 0,n.screen=void 0,e.push(n)}return e},o.prototype._getDataPoints=function(t){var e,i,n,s,r=[];if(this.style===o.STYLE.GRID||this.style===o.STYLE.SURFACE){var a=this.dataGroup.getDistinctValues(this.colX,t),h=this.dataGroup.getDistinctValues(this.colY,t);r=this.getDataPoints(t);var d=[];for(n=0;n<r.length;n++){s=r[n];var l=a.indexOf(s.point.x),u=h.indexOf(s.point.y);void 0===d[l]&&(d[l]=[]),d[l][u]=s}for(e=0;e<d.length;e++)for(i=0;i<d[e].length;i++)d[e][i]&&(d[e][i].pointRight=e<d.length-1?d[e+1][i]:void 0,d[e][i].pointTop=i<d[e].length-1?d[e][i+1]:void 0,d[e][i].pointCross=e<d.length-1&&i<d[e].length-1?d[e+1][i+1]:void 0)}else if(this._checkValueField(t),r=this.getDataPoints(t),this.style===o.STYLE.LINE)for(n=0;n<r.length;n++)n>0&&(r[n-1].pointNext=r[n]);return r},o.prototype.create=function(){for(;this.containerElement.hasChildNodes();)this.containerElement.removeChild(this.containerElement.firstChild);this.frame=document.createElement("div"),this.frame.style.position="relative",this.frame.style.overflow="hidden",this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",this.frame.appendChild(this.frame.canvas);var t=document.createElement("DIV");t.style.color="red",t.style.fontWeight="bold",t.style.padding="10px",t.innerHTML="Error: your browser does not support HTML canvas",this.frame.canvas.appendChild(t),this.frame.filter=document.createElement("div"),this.frame.filter.style.position="absolute",this.frame.filter.style.bottom="0px",this.frame.filter.style.left="0px",this.frame.filter.style.width="100%",this.frame.appendChild(this.frame.filter);var e=this,i=function(t){e._onMouseDown(t)},o=function(t){e._onTouchStart(t)},n=function(t){e._onWheel(t)},s=function(t){e._onTooltip(t)},r=function(t){e._onClick(t)};d.addEventListener(this.frame.canvas,"mousedown",i),d.addEventListener(this.frame.canvas,"touchstart",o),d.addEventListener(this.frame.canvas,"mousewheel",n),d.addEventListener(this.frame.canvas,"mousemove",s),d.addEventListener(this.frame.canvas,"click",r),this.containerElement.appendChild(this.frame)},o.prototype._setSize=function(t,e){this.frame.style.width=t,this.frame.style.height=e,this._resizeCanvas()},o.prototype._resizeCanvas=function(){this.frame.canvas.style.width="100%",this.frame.canvas.style.height="100%",this.frame.canvas.width=this.frame.canvas.clientWidth,this.frame.canvas.height=this.frame.canvas.clientHeight,this.frame.filter.style.width=this.frame.canvas.clientWidth-20+"px"},o.prototype.animationStart=function(){if(this.animationAutoStart&&this.dataGroup.dataFilter){if(!this.frame.filter||!this.frame.filter.slider)throw new Error("No animation available");this.frame.filter.slider.play()}},o.prototype.animationStop=function(){this.frame.filter&&this.frame.filter.slider&&this.frame.filter.slider.stop()},o.prototype._resizeCenter=function(){"%"===this.xCenter.charAt(this.xCenter.length-1)?this.currentXCenter=parseFloat(this.xCenter)/100*this.frame.canvas.clientWidth:this.currentXCenter=parseFloat(this.xCenter),"%"===this.yCenter.charAt(this.yCenter.length-1)?this.currentYCenter=parseFloat(this.yCenter)/100*(this.frame.canvas.clientHeight-this.frame.filter.clientHeight):this.currentYCenter=parseFloat(this.yCenter)},o.prototype.getCameraPosition=function(){var t=this.camera.getArmRotation();return t.distance=this.camera.getArmLength(),t},o.prototype._readData=function(t){this.dataPoints=this.dataGroup.initializeData(this,t,this.style),this._initializeRanges(),this._redrawFilter()},o.prototype.setData=function(t){void 0!==t&&null!==t&&(this._readData(t),this.redraw(),this.animationStart())},o.prototype.setOptions=function(t){if(void 0!==t){!0===m.validate(t,b)&&console.log("%cErrors have been found in the supplied options object.",g),this.animationStop(),f.setOptions(t,this),this.setPointDrawingMethod(),this._setSize(this.width,this.height),this.setData(this.dataGroup.getDataTable()),this.animationStart()}},o.prototype.setPointDrawingMethod=function(){var t=void 0;switch(this.style){case o.STYLE.BAR:t=o.prototype._redrawBarGraphPoint;break;case o.STYLE.BARCOLOR:t=o.prototype._redrawBarColorGraphPoint;break;case o.STYLE.BARSIZE:t=o.prototype._redrawBarSizeGraphPoint;break;case o.STYLE.DOT:t=o.prototype._redrawDotGraphPoint;break;case o.STYLE.DOTLINE:t=o.prototype._redrawDotLineGraphPoint;break;case o.STYLE.DOTCOLOR:t=o.prototype._redrawDotColorGraphPoint;break;case o.STYLE.DOTSIZE:t=o.prototype._redrawDotSizeGraphPoint;break;case o.STYLE.SURFACE:t=o.prototype._redrawSurfaceGraphPoint;break;case o.STYLE.GRID:t=o.prototype._redrawGridGraphPoint;break;case o.STYLE.LINE:t=o.prototype._redrawLineGraphPoint;break;default:throw new Error("Can not determine point drawing method for graph style '"+this.style+"'")}this._pointDrawingMethod=t},o.prototype.redraw=function(){if(void 0===this.dataPoints)throw new Error("Graph data not initialized");this._resizeCanvas(),this._resizeCenter(),this._redrawSlider(),this._redrawClear(),this._redrawAxis(),this._redrawDataGraph(),this._redrawInfo(),this._redrawLegend()},o.prototype._getContext=function(){var t=this.frame.canvas,e=t.getContext("2d");return e.lineJoin="round",e.lineCap="round",e},o.prototype._redrawClear=function(){var t=this.frame.canvas;t.getContext("2d").clearRect(0,0,t.width,t.height)},o.prototype._dotSize=function(){return this.frame.clientWidth*this.dotSizeRatio},o.prototype._getLegendWidth=function(){var t;if(this.style===o.STYLE.DOTSIZE){t=this._dotSize()*this.dotSizeMaxFraction}else t=this.style===o.STYLE.BARSIZE?this.xBarWidth:20;return t},o.prototype._redrawLegend=function(){if(!0===this.showLegend&&this.style!==o.STYLE.LINE&&this.style!==o.STYLE.BARSIZE){var t=this.style===o.STYLE.BARSIZE||this.style===o.STYLE.DOTSIZE,e=this.style===o.STYLE.DOTSIZE||this.style===o.STYLE.DOTCOLOR||this.style===o.STYLE.BARCOLOR,i=Math.max(.25*this.frame.clientHeight,100),n=this.margin,s=this._getLegendWidth(),r=this.frame.clientWidth-this.margin,a=r-s,h=n+i,d=this._getContext();if(d.lineWidth=1,d.font="14px arial",!1===t){var l,c=i;for(l=0;l<c;l++){var f=(l-0)/(c-0),m=240*f,v=this._hsv2rgb(m,1,1);d.strokeStyle=v,d.beginPath(),d.moveTo(a,n+l),d.lineTo(r,n+l),d.stroke()}d.strokeStyle=this.axisColor,d.strokeRect(a,n,s,i)}else{var g;this.style===o.STYLE.DOTSIZE?g=s*(this.dotSizeMinFraction/this.dotSizeMaxFraction):(this.style,o.STYLE.BARSIZE),d.strokeStyle=this.axisColor,d.fillStyle=this.dataColor.fill,d.beginPath(),d.moveTo(a,n),d.lineTo(r,n),d.lineTo(a+g,h),d.lineTo(a,h),d.closePath(),d.fill(),d.stroke()}var y=e?this.valueRange.min:this.zRange.min,b=e?this.valueRange.max:this.zRange.max,_=new p(y,b,(b-y)/5,!0);_.start(!0);for(var w,x;!_.end();)l=h-(_.getCurrent()-y)/(b-y)*i,w=new u(a-5,l),x=new u(a,l),this._line(d,w,x),d.textAlign="right",d.textBaseline="middle",d.fillStyle=this.axisColor,d.fillText(_.getCurrent(),a-10,l),_.next();d.textAlign="right",d.textBaseline="top";var k=this.legendLabel;d.fillText(k,r,h+this.margin)}},o.prototype._redrawFilter=function(){var t=this.dataGroup.dataFilter,e=this.frame.filter;if(e.innerHTML="",!t)return void(e.slider=void 0);var i={visible:this.showAnimationControls},o=new c(e,i);e.slider=o,e.style.padding="10px",o.setValues(t.values),o.setPlayInterval(this.animationInterval);var n=this,s=function(){var t=n.dataGroup.dataFilter,e=o.getIndex();t.selectValue(e),n.dataPoints=t._getDataPoints(),n.redraw()};o.setOnChangeCallback(s)},o.prototype._redrawSlider=function(){void 0!==this.frame.filter.slider&&this.frame.filter.slider.redraw()},o.prototype._redrawInfo=function(){var t=this.dataGroup.getInfo();if(void 0!==t){var e=this._getContext();e.font="14px arial",e.lineStyle="gray",e.fillStyle="gray",e.textAlign="left",e.textBaseline="top";var i=this.margin,o=this.margin;e.fillText(t,i,o)}},o.prototype._line=function(t,e,i,o){void 0!==o&&(t.strokeStyle=o),t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(i.x,i.y),t.stroke()},o.prototype.drawAxisLabelX=function(t,e,i,o,n){void 0===n&&(n=0);var s=this._convert3Dto2D(e)
;Math.cos(2*o)>0?(t.textAlign="center",t.textBaseline="top",s.y+=n):Math.sin(2*o)<0?(t.textAlign="right",t.textBaseline="middle"):(t.textAlign="left",t.textBaseline="middle"),t.fillStyle=this.axisColor,t.fillText(i,s.x,s.y)},o.prototype.drawAxisLabelY=function(t,e,i,o,n){void 0===n&&(n=0);var s=this._convert3Dto2D(e);Math.cos(2*o)<0?(t.textAlign="center",t.textBaseline="top",s.y+=n):Math.sin(2*o)>0?(t.textAlign="right",t.textBaseline="middle"):(t.textAlign="left",t.textBaseline="middle"),t.fillStyle=this.axisColor,t.fillText(i,s.x,s.y)},o.prototype.drawAxisLabelZ=function(t,e,i,o){void 0===o&&(o=0);var n=this._convert3Dto2D(e);t.textAlign="right",t.textBaseline="middle",t.fillStyle=this.axisColor,t.fillText(i,n.x-o,n.y)},o.prototype._line3d=function(t,e,i,o){var n=this._convert3Dto2D(e),s=this._convert3Dto2D(i);this._line(t,n,s,o)},o.prototype._redrawAxis=function(){var t,e,i,o,n,s,r,a,h,d,c,f=this._getContext();f.font=24/this.camera.getArmLength()+"px arial";var m,v=.025/this.scale.x,g=.025/this.scale.y,y=5/this.camera.getArmLength(),b=this.camera.getArmRotation().horizontal,_=new u(Math.cos(b),Math.sin(b)),w=this.xRange,x=this.yRange,k=this.zRange;for(f.lineWidth=1,o=void 0===this.defaultXStep,i=new p(w.min,w.max,this.xStep,o),i.start(!0);!i.end();){var S=i.getCurrent();if(this.showGrid?(t=new l(S,x.min,k.min),e=new l(S,x.max,k.min),this._line3d(f,t,e,this.gridColor)):this.showXAxis&&(t=new l(S,x.min,k.min),e=new l(S,x.min+v,k.min),this._line3d(f,t,e,this.axisColor),t=new l(S,x.max,k.min),e=new l(S,x.max-v,k.min),this._line3d(f,t,e,this.axisColor)),this.showXAxis){r=_.x>0?x.min:x.max,m=new l(S,r,k.min);var D="  "+this.xValueLabel(S)+"  ";this.drawAxisLabelX(f,m,D,b,y)}i.next()}for(f.lineWidth=1,o=void 0===this.defaultYStep,i=new p(x.min,x.max,this.yStep,o),i.start(!0);!i.end();){var M=i.getCurrent();if(this.showGrid?(t=new l(w.min,M,k.min),e=new l(w.max,M,k.min),this._line3d(f,t,e,this.gridColor)):this.showYAxis&&(t=new l(w.min,M,k.min),e=new l(w.min+g,M,k.min),this._line3d(f,t,e,this.axisColor),t=new l(w.max,M,k.min),e=new l(w.max-g,M,k.min),this._line3d(f,t,e,this.axisColor)),this.showYAxis){s=_.y>0?w.min:w.max,m=new l(s,M,k.min);var C="  "+this.yValueLabel(M)+"  ";this.drawAxisLabelY(f,m,C,b,y)}i.next()}if(this.showZAxis){for(f.lineWidth=1,o=void 0===this.defaultZStep,i=new p(k.min,k.max,this.zStep,o),i.start(!0),s=_.x>0?w.min:w.max,r=_.y<0?x.min:x.max;!i.end();){var O=i.getCurrent(),E=new l(s,r,O),T=this._convert3Dto2D(E);e=new u(T.x-y,T.y),this._line(f,T,e,this.axisColor);var P=this.zValueLabel(O)+" ";this.drawAxisLabelZ(f,E,P,5),i.next()}f.lineWidth=1,t=new l(s,r,k.min),e=new l(s,r,k.max),this._line3d(f,t,e,this.axisColor)}if(this.showXAxis){var I,N;f.lineWidth=1,I=new l(w.min,x.min,k.min),N=new l(w.max,x.min,k.min),this._line3d(f,I,N,this.axisColor),I=new l(w.min,x.max,k.min),N=new l(w.max,x.max,k.min),this._line3d(f,I,N,this.axisColor)}this.showYAxis&&(f.lineWidth=1,t=new l(w.min,x.min,k.min),e=new l(w.min,x.max,k.min),this._line3d(f,t,e,this.axisColor),t=new l(w.max,x.min,k.min),e=new l(w.max,x.max,k.min),this._line3d(f,t,e,this.axisColor));var R=this.xLabel;R.length>0&&this.showXAxis&&(c=.1/this.scale.y,s=(w.max+3*w.min)/4,r=_.x>0?x.min-c:x.max+c,n=new l(s,r,k.min),this.drawAxisLabelX(f,n,R,b));var A=this.yLabel;A.length>0&&this.showYAxis&&(d=.1/this.scale.x,s=_.y>0?w.min-d:w.max+d,r=(x.max+3*x.min)/4,n=new l(s,r,k.min),this.drawAxisLabelY(f,n,A,b));var z=this.zLabel;z.length>0&&this.showZAxis&&(h=30,s=_.x>0?w.min:w.max,r=_.y<0?x.min:x.max,a=(k.max+3*k.min)/4,n=new l(s,r,a),this.drawAxisLabelZ(f,n,z,h))},o.prototype._hsv2rgb=function(t,e,i){var o,n,s,r,a,h;switch(r=i*e,a=Math.floor(t/60),h=r*(1-Math.abs(t/60%2-1)),a){case 0:o=r,n=h,s=0;break;case 1:o=h,n=r,s=0;break;case 2:o=0,n=r,s=h;break;case 3:o=0,n=h,s=r;break;case 4:o=h,n=0,s=r;break;case 5:o=r,n=0,s=h;break;default:o=0,n=0,s=0}return"RGB("+parseInt(255*o)+","+parseInt(255*n)+","+parseInt(255*s)+")"},o.prototype._getStrokeWidth=function(t){return void 0!==t?this.showPerspective?1/-t.trans.z*this.dataColor.strokeWidth:-this.eye.z/this.camera.getArmLength()*this.dataColor.strokeWidth:this.dataColor.strokeWidth},o.prototype._redrawBar=function(t,e,i,o,n,s){var r,a=this,h=e.point,d=this.zRange.min,u=[{point:new l(h.x-i,h.y-o,h.z)},{point:new l(h.x+i,h.y-o,h.z)},{point:new l(h.x+i,h.y+o,h.z)},{point:new l(h.x-i,h.y+o,h.z)}],c=[{point:new l(h.x-i,h.y-o,d)},{point:new l(h.x+i,h.y-o,d)},{point:new l(h.x+i,h.y+o,d)},{point:new l(h.x-i,h.y+o,d)}];u.forEach(function(t){t.screen=a._convert3Dto2D(t.point)}),c.forEach(function(t){t.screen=a._convert3Dto2D(t.point)});var p=[{corners:u,center:l.avg(c[0].point,c[2].point)},{corners:[u[0],u[1],c[1],c[0]],center:l.avg(c[1].point,c[0].point)},{corners:[u[1],u[2],c[2],c[1]],center:l.avg(c[2].point,c[1].point)},{corners:[u[2],u[3],c[3],c[2]],center:l.avg(c[3].point,c[2].point)},{corners:[u[3],u[0],c[0],c[3]],center:l.avg(c[0].point,c[3].point)}];e.surfaces=p;for(var f=0;f<p.length;f++){r=p[f];var m=this._convertPointToTranslation(r.center);r.dist=this.showPerspective?m.length():-m.z}p.sort(function(t,e){var i=e.dist-t.dist;return i||(t.corners===u?1:e.corners===u?-1:0)}),t.lineWidth=this._getStrokeWidth(e),t.strokeStyle=s,t.fillStyle=n;for(var v=2;v<p.length;v++)r=p[v],this._polygon(t,r.corners)},o.prototype._polygon=function(t,e,i,o){if(!(e.length<2)){void 0!==i&&(t.fillStyle=i),void 0!==o&&(t.strokeStyle=o),t.beginPath(),t.moveTo(e[0].screen.x,e[0].screen.y);for(var n=1;n<e.length;++n){var s=e[n];t.lineTo(s.screen.x,s.screen.y)}t.closePath(),t.fill(),t.stroke()}},o.prototype._drawCircle=function(t,e,i,o,n){var s=this._calcRadius(e,n);t.lineWidth=this._getStrokeWidth(e),t.strokeStyle=o,t.fillStyle=i,t.beginPath(),t.arc(e.screen.x,e.screen.y,s,0,2*Math.PI,!0),t.fill(),t.stroke()},o.prototype._getColorsRegular=function(t){var e=240*(1-(t.point.z-this.zRange.min)*this.scale.z/this.verticalRatio);return{fill:this._hsv2rgb(e,1,1),border:this._hsv2rgb(e,1,.8)}},o.prototype._getColorsColor=function(t){var e,i;if("string"==typeof t.point.value)e=t.point.value,i=t.point.value;else{var o=240*(1-(t.point.value-this.valueRange.min)*this.scale.value);e=this._hsv2rgb(o,1,1),i=this._hsv2rgb(o,1,.8)}return{fill:e,border:i}},o.prototype._getColorsSize=function(){return{fill:this.dataColor.fill,border:this.dataColor.stroke}},o.prototype._calcRadius=function(t,e){void 0===e&&(e=this._dotSize());var i;return i=this.showPerspective?e/-t.trans.z:e*(-this.eye.z/this.camera.getArmLength()),i<0&&(i=0),i},o.prototype._redrawBarGraphPoint=function(t,e){var i=this.xBarWidth/2,o=this.yBarWidth/2,n=this._getColorsRegular(e);this._redrawBar(t,e,i,o,n.fill,n.border)},o.prototype._redrawBarColorGraphPoint=function(t,e){var i=this.xBarWidth/2,o=this.yBarWidth/2,n=this._getColorsColor(e);this._redrawBar(t,e,i,o,n.fill,n.border)},o.prototype._redrawBarSizeGraphPoint=function(t,e){var i=(e.point.value-this.valueRange.min)/this.valueRange.range(),o=this.xBarWidth/2*(.8*i+.2),n=this.yBarWidth/2*(.8*i+.2),s=this._getColorsSize();this._redrawBar(t,e,o,n,s.fill,s.border)},o.prototype._redrawDotGraphPoint=function(t,e){var i=this._getColorsRegular(e);this._drawCircle(t,e,i.fill,i.border)},o.prototype._redrawDotLineGraphPoint=function(t,e){var i=this._convert3Dto2D(e.bottom);t.lineWidth=1,this._line(t,i,e.screen,this.gridColor),this._redrawDotGraphPoint(t,e)},o.prototype._redrawDotColorGraphPoint=function(t,e){var i=this._getColorsColor(e);this._drawCircle(t,e,i.fill,i.border)},o.prototype._redrawDotSizeGraphPoint=function(t,e){var i=this._dotSize(),o=(e.point.value-this.valueRange.min)/this.valueRange.range(),n=i*this.dotSizeMinFraction,s=i*this.dotSizeMaxFraction-n,r=n+s*o,a=this._getColorsSize();this._drawCircle(t,e,a.fill,a.border,r)},o.prototype._redrawSurfaceGraphPoint=function(t,e){var i=e.pointRight,o=e.pointTop,n=e.pointCross;if(void 0!==e&&void 0!==i&&void 0!==o&&void 0!==n){var s,r,a=!0;if(this.showGrayBottom||this.showShadow){var h=l.subtract(n.trans,e.trans),d=l.subtract(o.trans,i.trans),u=l.crossProduct(h,d),c=u.length();a=u.z>0}if(a){var p,f=(e.point.z+i.point.z+o.point.z+n.point.z)/4,m=240*(1-(f-this.zRange.min)*this.scale.z/this.verticalRatio);this.showShadow?(p=Math.min(1+u.x/c/2,1),s=this._hsv2rgb(m,1,p),r=s):(p=1,s=this._hsv2rgb(m,1,p),r=this.axisColor)}else s="gray",r=this.axisColor;t.lineWidth=this._getStrokeWidth(e);var v=[e,i,n,o];this._polygon(t,v,s,r)}},o.prototype._drawGridLine=function(t,e,i){if(void 0!==e&&void 0!==i){var o=(e.point.z+i.point.z)/2,n=240*(1-(o-this.zRange.min)*this.scale.z/this.verticalRatio);t.lineWidth=2*this._getStrokeWidth(e),t.strokeStyle=this._hsv2rgb(n,1,1),this._line(t,e.screen,i.screen)}},o.prototype._redrawGridGraphPoint=function(t,e){this._drawGridLine(t,e,e.pointRight),this._drawGridLine(t,e,e.pointTop)},o.prototype._redrawLineGraphPoint=function(t,e){void 0!==e.pointNext&&(t.lineWidth=this._getStrokeWidth(e),t.strokeStyle=this.dataColor.stroke,this._line(t,e.screen,e.pointNext.screen))},o.prototype._redrawDataGraph=function(){var t,e=this._getContext();if(!(void 0===this.dataPoints||this.dataPoints.length<=0))for(this._calcTranslations(this.dataPoints),t=0;t<this.dataPoints.length;t++){var i=this.dataPoints[t];this._pointDrawingMethod.call(this,e,i)}},o.prototype._storeMousePosition=function(t){this.startMouseX=n(t),this.startMouseY=s(t),this._startCameraOffset=this.camera.getOffset()},o.prototype._onMouseDown=function(t){if(t=t||window.event,this.leftButtonDown&&this._onMouseUp(t),this.leftButtonDown=t.which?1===t.which:1===t.button,this.leftButtonDown||this.touchDown){this._storeMousePosition(t),this.startStart=new Date(this.start),this.startEnd=new Date(this.end),this.startArmRotation=this.camera.getArmRotation(),this.frame.style.cursor="move";var e=this;this.onmousemove=function(t){e._onMouseMove(t)},this.onmouseup=function(t){e._onMouseUp(t)},d.addEventListener(document,"mousemove",e.onmousemove),d.addEventListener(document,"mouseup",e.onmouseup),d.preventDefault(t)}},o.prototype._onMouseMove=function(t){this.moving=!0,t=t||window.event;var e=parseFloat(n(t))-this.startMouseX,i=parseFloat(s(t))-this.startMouseY;if(t&&!0===t.ctrlKey){var o=.5*this.frame.clientWidth,r=.5*this.frame.clientHeight,a=(this._startCameraOffset.x||0)-e/o*this.camera.armLength*.8,h=(this._startCameraOffset.y||0)+i/r*this.camera.armLength*.8;this.camera.setOffset(a,h),this._storeMousePosition(t)}else{var l=this.startArmRotation.horizontal+e/200,u=this.startArmRotation.vertical+i/200,c=Math.sin(4/360*2*Math.PI);Math.abs(Math.sin(l))<c&&(l=Math.round(l/Math.PI)*Math.PI-.001),Math.abs(Math.cos(l))<c&&(l=(Math.round(l/Math.PI-.5)+.5)*Math.PI-.001),Math.abs(Math.sin(u))<c&&(u=Math.round(u/Math.PI)*Math.PI),Math.abs(Math.cos(u))<c&&(u=(Math.round(u/Math.PI-.5)+.5)*Math.PI),this.camera.setArmRotation(l,u)}this.redraw();var p=this.getCameraPosition();this.emit("cameraPositionChange",p),d.preventDefault(t)},o.prototype._onMouseUp=function(t){this.frame.style.cursor="auto",this.leftButtonDown=!1,d.removeEventListener(document,"mousemove",this.onmousemove),d.removeEventListener(document,"mouseup",this.onmouseup),d.preventDefault(t)},o.prototype._onClick=function(t){if(this.onclick_callback){if(this.moving)this.moving=!1;else{var e=this.frame.getBoundingClientRect(),i=n(t)-e.left,o=s(t)-e.top,r=this._dataPointFromXY(i,o);r&&this.onclick_callback(r.point.data)}d.preventDefault(t)}},o.prototype._onTooltip=function(t){var e=this.frame.getBoundingClientRect(),i=n(t)-e.left,o=s(t)-e.top;if(this.showTooltip){if(this.tooltipTimeout&&clearTimeout(this.tooltipTimeout),this.leftButtonDown)return void this._hideTooltip();if(this.tooltip&&this.tooltip.dataPoint){var r=this._dataPointFromXY(i,o);r!==this.tooltip.dataPoint&&(r?this._showTooltip(r):this._hideTooltip())}else{var a=this;this.tooltipTimeout=setTimeout(function(){a.tooltipTimeout=null;var t=a._dataPointFromXY(i,o);t&&a._showTooltip(t)},300)}}},o.prototype._onTouchStart=function(t){this.touchDown=!0;var e=this;this.ontouchmove=function(t){e._onTouchMove(t)},this.ontouchend=function(t){e._onTouchEnd(t)},d.addEventListener(document,"touchmove",e.ontouchmove),d.addEventListener(document,"touchend",e.ontouchend),this._onMouseDown(t)},o.prototype._onTouchMove=function(t){this._onMouseMove(t)},o.prototype._onTouchEnd=function(t){this.touchDown=!1,d.removeEventListener(document,"touchmove",this.ontouchmove),d.removeEventListener(document,"touchend",this.ontouchend),this._onMouseUp(t)},o.prototype._onWheel=function(t){t||(t=window.event);var e=0;if(t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),e){var i=this.camera.getArmLength(),o=i*(1-e/10);this.camera.setArmLength(o),this.redraw(),this._hideTooltip()}var n=this.getCameraPosition();this.emit("cameraPositionChange",n),d.preventDefault(t)},o.prototype._insideTriangle=function(t,e){function i(t){return t>0?1:t<0?-1:0}var o=e[0],n=e[1],s=e[2],r=i((n.x-o.x)*(t.y-o.y)-(n.y-o.y)*(t.x-o.x)),a=i((s.x-n.x)*(t.y-n.y)-(s.y-n.y)*(t.x-n.x)),h=i((o.x-s.x)*(t.y-s.y)-(o.y-s.y)*(t.x-s.x));return!(0!=r&&0!=a&&r!=a||0!=a&&0!=h&&a!=h||0!=r&&0!=h&&r!=h)},o.prototype._dataPointFromXY=function(t,e){var i,n=null,s=null,r=null,a=new u(t,e);if(this.style===o.STYLE.BAR||this.style===o.STYLE.BARCOLOR||this.style===o.STYLE.BARSIZE)for(i=this.dataPoints.length-1;i>=0;i--){n=this.dataPoints[i];var h=n.surfaces;if(h)for(var d=h.length-1;d>=0;d--){var l=h[d],c=l.corners,p=[c[0].screen,c[1].screen,c[2].screen],f=[c[2].screen,c[3].screen,c[0].screen];if(this._insideTriangle(a,p)||this._insideTriangle(a,f))return n}}else for(i=0;i<this.dataPoints.length;i++){n=this.dataPoints[i];var m=n.screen;if(m){var v=Math.abs(t-m.x),g=Math.abs(e-m.y),y=Math.sqrt(v*v+g*g);(null===r||y<r)&&y<100&&(r=y,s=n)}}return s},o.prototype.hasBars=function(t){return t==o.STYLE.BAR||t==o.STYLE.BARCOLOR||t==o.STYLE.BARSIZE},o.prototype._showTooltip=function(t){var e,i,o;this.tooltip?(e=this.tooltip.dom.content,i=this.tooltip.dom.line,o=this.tooltip.dom.dot):(e=document.createElement("div"),(0,a.default)(e.style,{},this.tooltipStyle.content),e.style.position="absolute",i=document.createElement("div"),(0,a.default)(i.style,{},this.tooltipStyle.line),i.style.position="absolute",o=document.createElement("div"),(0,a.default)(o.style,{},this.tooltipStyle.dot),o.style.position="absolute",this.tooltip={dataPoint:null,dom:{content:e,line:i,dot:o}}),this._hideTooltip(),this.tooltip.dataPoint=t,"function"==typeof this.showTooltip?e.innerHTML=this.showTooltip(t.point):e.innerHTML="<table><tr><td>"+this.xLabel+":</td><td>"+t.point.x+"</td></tr><tr><td>"+this.yLabel+":</td><td>"+t.point.y+"</td></tr><tr><td>"+this.zLabel+":</td><td>"+t.point.z+"</td></tr></table>",e.style.left="0",e.style.top="0",this.frame.appendChild(e),this.frame.appendChild(i),this.frame.appendChild(o);var n=e.offsetWidth,s=e.offsetHeight,r=i.offsetHeight,h=o.offsetWidth,d=o.offsetHeight,l=t.screen.x-n/2;l=Math.min(Math.max(l,10),this.frame.clientWidth-10-n),i.style.left=t.screen.x+"px",i.style.top=t.screen.y-r+"px",e.style.left=l+"px",e.style.top=t.screen.y-r-s+"px",o.style.left=t.screen.x-h/2+"px",o.style.top=t.screen.y-d/2+"px"},o.prototype._hideTooltip=function(){if(this.tooltip){this.tooltip.dataPoint=null;for(var t in this.tooltip.dom)if(this.tooltip.dom.hasOwnProperty(t)){var e=this.tooltip.dom[t];e&&e.parentNode&&e.parentNode.removeChild(e)}}},o.prototype.setCameraPosition=function(t){f.setCameraPosition(t,this),this.redraw()},o.prototype.setSize=function(t,e){this._setSize(t,e),this.redraw()},t.exports=o},function(t,e,i){i(163),t.exports=i(7).Object.assign},function(t,e,i){var o=i(17);o(o.S+o.F,"Object",{assign:i(164)})},function(t,e,i){var o=i(33),n=i(63),s=i(42),r=i(41),a=i(78),h=Object.assign;t.exports=!h||i(28)(function(){var t={},e={},i=Symbol(),o="abcdefghijklmnopqrst";return t[i]=7,o.split("").forEach(function(t){e[t]=t}),7!=h({},t)[i]||Object.keys(h({},e)).join("")!=o})?function(t,e){for(var i=r(t),h=arguments.length,d=1,l=n.f,u=s.f;h>d;)for(var c,p=a(arguments[d++]),f=l?o(p).concat(l(p)):o(p),m=f.length,v=0;m>v;)u.call(p,c=f[v++])&&(i[c]=p[c]);return i}:h},function(t,e,i){t.exports={default:i(166),__esModule:!0}},function(t,e,i){i(167),t.exports=i(7).Math.sign},function(t,e,i){var o=i(17);o(o.S,"Math",{sign:i(168)})},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e,i){t.exports={default:i(170),__esModule:!0}},function(t,e,i){i(171);var o=i(7).Object;t.exports=function(t,e,i){return o.defineProperty(t,e,i)}},function(t,e,i){var o=i(17);o(o.S+o.F*!i(21),"Object",{defineProperty:i(20).f})},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var o="string",n="boolean",s="number",r={fill:{string:o},stroke:{string:o},strokeWidth:{number:s},__type__:{string:o,object:"object",undefined:"undefined"}},a={animationAutoStart:{boolean:n,undefined:"undefined"},animationInterval:{number:s},animationPreload:{boolean:n},axisColor:{string:o},backgroundColor:r,xBarWidth:{number:s,undefined:"undefined"},yBarWidth:{number:s,undefined:"undefined"},cameraPosition:{distance:{number:s},horizontal:{number:s},vertical:{number:s},__type__:{object:"object"}},xCenter:{string:o},yCenter:{string:o},dataColor:r,dotSizeMinFraction:{number:s},dotSizeMaxFraction:{number:s},dotSizeRatio:{number:s},filterLabel:{string:o},gridColor:{string:o},onclick:{function:"function"},keepAspectRatio:{boolean:n},xLabel:{string:o},yLabel:{string:o},zLabel:{string:o},legendLabel:{string:o},xMin:{number:s,undefined:"undefined"},yMin:{number:s,undefined:"undefined"},zMin:{number:s,undefined:"undefined"},xMax:{number:s,undefined:"undefined"},yMax:{number:s,undefined:"undefined"},zMax:{number:s,undefined:"undefined"},showAnimationControls:{boolean:n,undefined:"undefined"},showGrid:{boolean:n},showLegend:{boolean:n,undefined:"undefined"},showPerspective:{boolean:n},showShadow:{boolean:n},showXAxis:{boolean:n},showYAxis:{boolean:n},showZAxis:{boolean:n},xStep:{number:s,undefined:"undefined"},yStep:{number:s,undefined:"undefined"},zStep:{number:s,undefined:"undefined"},style:{number:s,string:["bar","bar-color","bar-size","dot","dot-line","dot-color","dot-size","line","grid","surface"]},tooltip:{boolean:n,function:"function"},tooltipStyle:{content:{color:{string:o},background:{string:o},border:{string:o},borderRadius:{string:o},boxShadow:{string:o},padding:{string:o},__type__:{object:"object"}},line:{borderLeft:{string:o},height:{string:o},width:{string:o},__type__:{object:"object"}},dot:{border:{string:o},borderRadius:{string:o},height:{string:o},width:{string:o},__type__:{object:"object"}},__type__:{object:"object"}},xValueLabel:{function:"function"},yValueLabel:{function:"function"},zValueLabel:{function:"function"},valueMax:{number:s,undefined:"undefined"},valueMin:{number:s,undefined:"undefined"},verticalRatio:{number:s},height:{string:o},width:{string:o},__type__:{object:"object"}};e.allOptions=a},function(t,e,i){function o(){this.dataTable=null}var n=i(11),s=i(12),r=i(174),a=i(96),h=i(94),d=i(34);o.prototype.initializeData=function(t,e,i){if(void 0!==e){Array.isArray(e)&&(e=new n(e));var o;if(!(e instanceof n||e instanceof s))throw new Error("Array, DataSet, or DataView expected");if(o=e.get(),0!=o.length){this.style=i,this.dataSet&&this.dataSet.off("*",this._onChange),this.dataSet=e,this.dataTable=o;var r=this;this._onChange=function(){t.setData(r.dataSet)},this.dataSet.on("*",this._onChange),this.colX="x",this.colY="y",this.colZ="z";var h=t.hasBars(i);if(h&&(void 0!==t.defaultXBarWidth?this.xBarWidth=t.defaultXBarWidth:this.xBarWidth=this.getSmallestDifference(o,this.colX)||1,void 0!==t.defaultYBarWidth?this.yBarWidth=t.defaultYBarWidth:this.yBarWidth=this.getSmallestDifference(o,this.colY)||1),this._initializeRange(o,this.colX,t,h),this._initializeRange(o,this.colY,t,h),this._initializeRange(o,this.colZ,t,!1),o[0].hasOwnProperty("style")){this.colValue="style";var d=this.getColumnRange(o,this.colValue);this._setRangeDefaults(d,t.defaultValueMin,t.defaultValueMax),this.valueRange=d}this.getDataTable()[0].hasOwnProperty("filter")&&void 0===this.dataFilter&&(this.dataFilter=new a(this,"filter",t),this.dataFilter.setOnLoadCallback(function(){t.redraw()}));return this.dataFilter?this.dataFilter._getDataPoints():this._getDataPoints(this.getDataTable())}}},o.prototype._collectRangeSettings=function(t,e){if(-1==["x","y","z"].indexOf(t))throw new Error("Column '"+t+"' invalid");var i=t.toUpperCase();return{barWidth:this[t+"BarWidth"],min:e["default"+i+"Min"],max:e["default"+i+"Max"],step:e["default"+i+"Step"],range_label:t+"Range",step_label:t+"Step"}},o.prototype._initializeRange=function(t,e,i,o){var n=this._collectRangeSettings(e,i),s=this.getColumnRange(t,e);o&&"z"!=e&&s.expand(n.barWidth/2),this._setRangeDefaults(s,n.min,n.max),this[n.range_label]=s,this[n.step_label]=void 0!==n.step?n.step:s.range()/5},o.prototype.getDistinctValues=function(t,e){void 0===e&&(e=this.dataTable);for(var i=[],o=0;o<e.length;o++){var n=e[o][t]||0;-1===i.indexOf(n)&&i.push(n)}return i.sort(function(t,e){return t-e})},o.prototype.getSmallestDifference=function(t,e){for(var i=this.getDistinctValues(t,e),o=null,n=1;n<i.length;n++){var s=i[n]-i[n-1];(null==o||o>s)&&(o=s)}return o},o.prototype.getColumnRange=function(t,e){for(var i=new r,o=0;o<t.length;o++){var n=t[o][e];i.adjust(n)}return i},o.prototype.getNumberOfRows=function(){return this.dataTable.length},o.prototype._setRangeDefaults=function(t,e,i){void 0!==e&&(t.min=e),void 0!==i&&(t.max=i),t.max<=t.min&&(t.max=t.min+1)},o.prototype.getDataTable=function(){return this.dataTable},o.prototype.getDataSet=function(){return this.dataSet},o.prototype.getDataPoints=function(t){for(var e=[],i=0;i<t.length;i++){var o=new d;o.x=t[i][this.colX]||0,o.y=t[i][this.colY]||0,o.z=t[i][this.colZ]||0,o.data=t[i],void 0!==this.colValue&&(o.value=t[i][this.colValue]||0);var n={};n.point=o,n.bottom=new d(o.x,o.y,this.zRange.min),n.trans=void 0,n.screen=void 0,e.push(n)}return e},o.prototype.initDataAsMatrix=function(t){var e,i,o,n,s=this.getDistinctValues(this.colX,t),r=this.getDistinctValues(this.colY,t),a=this.getDataPoints(t),h=[];for(o=0;o<a.length;o++){n=a[o];var d=s.indexOf(n.point.x),l=r.indexOf(n.point.y);void 0===h[d]&&(h[d]=[]),h[d][l]=n}for(e=0;e<h.length;e++)for(i=0;i<h[e].length;i++)h[e][i]&&(h[e][i].pointRight=e<h.length-1?h[e+1][i]:void 0,h[e][i].pointTop=i<h[e].length-1?h[e][i+1]:void 0,h[e][i].pointCross=e<h.length-1&&i<h[e].length-1?h[e+1][i+1]:void 0);return a},o.prototype.getInfo=function(){var t=this.dataFilter;if(t)return t.getLabel()+": "+t.getSelectedValue()},o.prototype.reload=function(){this.dataTable&&this.setData(this.dataTable)},o.prototype._getDataPoints=function(t){var e=[];if(this.style===h.STYLE.GRID||this.style===h.STYLE.SURFACE)e=this.initDataAsMatrix(t);else if(this._checkValueField(t),e=this.getDataPoints(t),this.style===h.STYLE.LINE)for(var i=0;i<e.length;i++)i>0&&(e[i-1].pointNext=e[i]);return e},o.prototype._checkValueField=function(t){if(this.style===h.STYLE.BARCOLOR||this.style===h.STYLE.BARSIZE||this.style===h.STYLE.DOTCOLOR||this.style===h.STYLE.DOTSIZE){if(void 0===this.colValue)throw new Error("Expected data to have  field 'style'  for graph style '"+this.style+"'");if(void 0===t[0][this.colValue])throw new Error("Expected data to have  field '"+this.colValue+"'  for graph style '"+this.style+"'")}},t.exports=o},function(t,e,i){function o(){this.min=void 0,this.max=void 0}o.prototype.adjust=function(t){void 0!==t&&((void 0===this.min||this.min>t)&&(this.min=t),(void 0===this.max||this.max<t)&&(this.max=t))},o.prototype.combine=function(t){this.add(t.min),this.add(t.max)},o.prototype.expand=function(t){if(void 0!==t){var e=this.min-t,i=this.max+t;if(e>i)throw new Error("Passed expansion value makes range invalid");this.min=e,this.max=i}},o.prototype.range=function(){return this.max-this.min},o.prototype.center=function(){return(this.min+this.max)/2},t.exports=o},function(t,e,i){var o,n,s;!function(i){n=[],o=i,void 0!==(s="function"==typeof o?o.apply(e,n):o)&&(t.exports=s)}(function(){var t=null;return function e(i,o){function n(t){return t.match(/[^ ]+/g)}function s(e){if("hammer.input"!==e.type){if(e.srcEvent._handled||(e.srcEvent._handled={}),e.srcEvent._handled[e.type])return;e.srcEvent._handled[e.type]=!0}var i=!1;e.stopPropagation=function(){i=!0};var o=e.srcEvent.stopPropagation.bind(e.srcEvent);"function"==typeof o&&(e.srcEvent.stopPropagation=function(){o(),e.stopPropagation()}),e.firstTarget=t;for(var n=t;n&&!i;){var s=n.hammer;if(s)for(var r,a=0;a<s.length;a++)if(r=s[a]._handlers[e.type])for(var h=0;h<r.length&&!i;h++)r[h](e);n=n.parentNode}}var r=o||{preventDefault:!1};if(i.Manager){var a=i,h=function(t,i){var o=Object.create(r);return i&&a.assign(o,i),e(new a(t,o),o)};return a.assign(h,a),h.Manager=function(t,i){var o=Object.create(r);return i&&a.assign(o,i),e(new a.Manager(t,o),o)},h}var d=Object.create(i),l=i.element;return l.hammer||(l.hammer=[]),l.hammer.push(d),i.on("hammer.input",function(e){!0!==r.preventDefault&&r.preventDefault!==e.pointerType||e.preventDefault(),e.isFirst&&(t=e.target)}),d._handlers={},d.on=function(t,e){return n(t).forEach(function(t){var o=d._handlers[t];o||(d._handlers[t]=o=[],i.on(t,s)),o.push(e)}),d},d.off=function(t,e){return n(t).forEach(function(t){var o=d._handlers[t];o&&(o=e?o.filter(function(t){return t!==e}):[],o.length>0?d._handlers[t]=o:(i.off(t,s),delete d._handlers[t]))}),d},d.emit=function(e,o){t=o.target,i.emit(e,o)},d.destroy=function(){var t=i.element.hammer,e=t.indexOf(d);-1!==e&&t.splice(e,1),t.length||delete i.element.hammer,d._handlers={},i.destroy()},d}})},function(t,e,i){var o;!function(n,s,r,a){function h(t,e,i){return setTimeout(p(t,i),e)}function d(t,e,i){return!!Array.isArray(t)&&(l(t,i[e],i),!0)}function l(t,e,i){var o;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==a)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function u(t,e,i){var o="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=n.console&&(n.console.warn||n.console.log);return s&&s.call(n.console,o,i),t.apply(this,arguments)}}function c(t,e,i){var o,n=e.prototype;o=t.prototype=Object.create(n),o.constructor=t,o._super=n,i&&ft(o,i)}function p(t,e){return function(){return t.apply(e,arguments)}}function f(t,e){return typeof t==gt?t.apply(e?e[0]||a:a,e):t}function m(t,e){return t===a?e:t}function v(t,e,i){l(_(e),function(e){t.addEventListener(e,i,!1)})}function g(t,e,i){l(_(e),function(e){t.removeEventListener(e,i,!1)})}function y(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function b(t,e){return t.indexOf(e)>-1}function _(t){return t.trim().split(/\s+/g)}function w(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var o=0;o<t.length;){if(i&&t[o][i]==e||!i&&t[o]===e)return o;o++}return-1}function x(t){return Array.prototype.slice.call(t,0)}function k(t,e,i){for(var o=[],n=[],s=0;s<t.length;){var r=e?t[s][e]:t[s];w(n,r)<0&&o.push(t[s]),n[s]=r,s++}return i&&(o=e?o.sort(function(t,i){return t[e]>i[e]}):o.sort()),o}function S(t,e){for(var i,o,n=e[0].toUpperCase()+e.slice(1),s=0;s<mt.length;){if(i=mt[s],(o=i?i+n:e)in t)return o;s++}return a}function D(){return kt++}function M(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||n}function C(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){f(t.options.enable,[t])&&i.handler(e)},this.init()}function O(t){var e=t.options.inputClass;return new(e||(Mt?W:Ct?V:Dt?q:H))(t,E)}function E(t,e,i){var o=i.pointers.length,n=i.changedPointers.length,s=e&Et&&o-n==0,r=e&(Pt|It)&&o-n==0;i.isFirst=!!s,i.isFinal=!!r,s&&(t.session={}),i.eventType=e,T(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function T(t,e){var i=t.session,o=e.pointers,n=o.length;i.firstInput||(i.firstInput=N(e)),n>1&&!i.firstMultiple?i.firstMultiple=N(e):1===n&&(i.firstMultiple=!1);var s=i.firstInput,r=i.firstMultiple,a=r?r.center:s.center,h=e.center=R(o);e.timeStamp=_t(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=F(a,h),e.distance=L(a,h),P(i,e),e.offsetDirection=z(e.deltaX,e.deltaY);var d=A(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=d.x,e.overallVelocityY=d.y,e.overallVelocity=bt(d.x)>bt(d.y)?d.x:d.y,e.scale=r?j(r.pointers,o):1,e.rotation=r?B(r.pointers,o):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,I(i,e);var l=t.element;y(e.srcEvent.target,l)&&(l=e.srcEvent.target),e.target=l}function P(t,e){var i=e.center,o=t.offsetDelta||{},n=t.prevDelta||{},s=t.prevInput||{};e.eventType!==Et&&s.eventType!==Pt||(n=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},o=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-o.x),e.deltaY=n.y+(i.y-o.y)}function I(t,e){var i,o,n,s,r=t.lastInterval||e,h=e.timeStamp-r.timeStamp;if(e.eventType!=It&&(h>Ot||r.velocity===a)){var d=e.deltaX-r.deltaX,l=e.deltaY-r.deltaY,u=A(h,d,l);o=u.x,n=u.y,i=bt(u.x)>bt(u.y)?u.x:u.y,s=z(d,l),t.lastInterval=e}else i=r.velocity,o=r.velocityX,n=r.velocityY,s=r.direction;e.velocity=i,e.velocityX=o,e.velocityY=n,e.direction=s}function N(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:yt(t.pointers[i].clientX),clientY:yt(t.pointers[i].clientY)},i++;return{timeStamp:_t(),pointers:e,center:R(e),deltaX:t.deltaX,deltaY:t.deltaY}}function R(t){var e=t.length;if(1===e)return{x:yt(t[0].clientX),y:yt(t[0].clientY)};for(var i=0,o=0,n=0;n<e;)i+=t[n].clientX,o+=t[n].clientY,n++;return{x:yt(i/e),y:yt(o/e)}}function A(t,e,i){return{x:e/t||0,y:i/t||0}}function z(t,e){return t===e?Nt:bt(t)>=bt(e)?t<0?Rt:At:e<0?zt:Lt}function L(t,e,i){i||(i=Ht);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(o*o+n*n)}function F(t,e,i){i||(i=Ht);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return 180*Math.atan2(n,o)/Math.PI}function B(t,e){return F(e[1],e[0],Wt)+F(t[1],t[0],Wt)}function j(t,e){return L(e[0],e[1],Wt)/L(t[0],t[1],Wt)}function H(){this.evEl=Gt,this.evWin=Vt,this.pressed=!1,C.apply(this,arguments)}function W(){this.evEl=Xt,this.evWin=Zt,C.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Y(){this.evTarget=Jt,this.evWin=$t,this.started=!1,C.apply(this,arguments)}function G(t,e){var i=x(t.touches),o=x(t.changedTouches);return e&(Pt|It)&&(i=k(i.concat(o),"identifier",!0)),[i,o]}function V(){this.evTarget=te,this.targetIds={},C.apply(this,arguments)}function U(t,e){var i=x(t.touches),o=this.targetIds;if(e&(Et|Tt)&&1===i.length)return o[i[0].identifier]=!0,[i,i];var n,s,r=x(t.changedTouches),a=[],h=this.target;if(s=i.filter(function(t){return y(t.target,h)}),e===Et)for(n=0;n<s.length;)o[s[n].identifier]=!0,n++;for(n=0;n<r.length;)o[r[n].identifier]&&a.push(r[n]),e&(Pt|It)&&delete o[r[n].identifier],n++;return a.length?[k(s.concat(a),"identifier",!0),a]:void 0}function q(){C.apply(this,arguments);var t=p(this.handler,this);this.touch=new V(this.manager,t),this.mouse=new H(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function X(t,e){t&Et?(this.primaryTouch=e.changedPointers[0].identifier,Z.call(this,e)):t&(Pt|It)&&Z.call(this,e)}function Z(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var o=this.lastTouches,n=function(){var t=o.indexOf(i);t>-1&&o.splice(t,1)};setTimeout(n,ee)}}function K(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,o=0;o<this.lastTouches.length;o++){var n=this.lastTouches[o],s=Math.abs(e-n.x),r=Math.abs(i-n.y);if(s<=ie&&r<=ie)return!0}return!1}function J(t,e){this.manager=t,this.set(e)}function $(t){if(b(t,ae))return ae;var e=b(t,he),i=b(t,de);return e&&i?ae:e||i?e?he:de:b(t,re)?re:se}function Q(t){this.options=ft({},this.defaults,t||{}),this.id=D(),this.manager=null,this.options.enable=m(this.options.enable,!0),this.state=ue,this.simultaneous={},this.requireFail=[]}
function tt(t){return t&ve?"cancel":t&fe?"end":t&pe?"move":t&ce?"start":""}function et(t){return t==Lt?"down":t==zt?"up":t==Rt?"left":t==At?"right":""}function it(t,e){var i=e.manager;return i?i.get(t):t}function ot(){Q.apply(this,arguments)}function nt(){ot.apply(this,arguments),this.pX=null,this.pY=null}function st(){ot.apply(this,arguments)}function rt(){Q.apply(this,arguments),this._timer=null,this._input=null}function at(){ot.apply(this,arguments)}function ht(){ot.apply(this,arguments)}function dt(){Q.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function lt(t,e){return e=e||{},e.recognizers=m(e.recognizers,lt.defaults.preset),new ut(t,e)}function ut(t,e){this.options=ft({},lt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=O(this),this.touchAction=new J(this,this.options.touchAction),ct(this,!0),l(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ct(t,e){var i=t.element;if(i.style){var o;l(t.options.cssProps,function(n,s){o=S(i.style,s),e?(t.oldCssProps[o]=i.style[o],i.style[o]=n):i.style[o]=t.oldCssProps[o]||""}),e||(t.oldCssProps={})}}function pt(t,e){var i=s.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}var ft,mt=["","webkit","Moz","MS","ms","o"],vt=s.createElement("div"),gt="function",yt=Math.round,bt=Math.abs,_t=Date.now;ft="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(o!==a&&null!==o)for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n])}return e}:Object.assign;var wt=u(function(t,e,i){for(var o=Object.keys(e),n=0;n<o.length;)(!i||i&&t[o[n]]===a)&&(t[o[n]]=e[o[n]]),n++;return t},"extend","Use `assign`."),xt=u(function(t,e){return wt(t,e,!0)},"merge","Use `assign`."),kt=1,St=/mobile|tablet|ip(ad|hone|od)|android/i,Dt="ontouchstart"in n,Mt=S(n,"PointerEvent")!==a,Ct=Dt&&St.test(navigator.userAgent),Ot=25,Et=1,Tt=2,Pt=4,It=8,Nt=1,Rt=2,At=4,zt=8,Lt=16,Ft=Rt|At,Bt=zt|Lt,jt=Ft|Bt,Ht=["x","y"],Wt=["clientX","clientY"];C.prototype={handler:function(){},init:function(){this.evEl&&v(this.element,this.evEl,this.domHandler),this.evTarget&&v(this.target,this.evTarget,this.domHandler),this.evWin&&v(M(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(M(this.element),this.evWin,this.domHandler)}};var Yt={mousedown:Et,mousemove:Tt,mouseup:Pt},Gt="mousedown",Vt="mousemove mouseup";c(H,C,{handler:function(t){var e=Yt[t.type];e&Et&&0===t.button&&(this.pressed=!0),e&Tt&&1!==t.which&&(e=Pt),this.pressed&&(e&Pt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var Ut={pointerdown:Et,pointermove:Tt,pointerup:Pt,pointercancel:It,pointerout:It},qt={2:"touch",3:"pen",4:"mouse",5:"kinect"},Xt="pointerdown",Zt="pointermove pointerup pointercancel";n.MSPointerEvent&&!n.PointerEvent&&(Xt="MSPointerDown",Zt="MSPointerMove MSPointerUp MSPointerCancel"),c(W,C,{handler:function(t){var e=this.store,i=!1,o=t.type.toLowerCase().replace("ms",""),n=Ut[o],s=qt[t.pointerType]||t.pointerType,r="touch"==s,a=w(e,t.pointerId,"pointerId");n&Et&&(0===t.button||r)?a<0&&(e.push(t),a=e.length-1):n&(Pt|It)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,n,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var Kt={touchstart:Et,touchmove:Tt,touchend:Pt,touchcancel:It},Jt="touchstart",$t="touchstart touchmove touchend touchcancel";c(Y,C,{handler:function(t){var e=Kt[t.type];if(e===Et&&(this.started=!0),this.started){var i=G.call(this,t,e);e&(Pt|It)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}}});var Qt={touchstart:Et,touchmove:Tt,touchend:Pt,touchcancel:It},te="touchstart touchmove touchend touchcancel";c(V,C,{handler:function(t){var e=Qt[t.type],i=U.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}});var ee=2500,ie=25;c(q,C,{handler:function(t,e,i){var o="touch"==i.pointerType,n="mouse"==i.pointerType;if(!(n&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(o)X.call(this,e,i);else if(n&&K.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var oe=S(vt.style,"touchAction"),ne=oe!==a,se="auto",re="manipulation",ae="none",he="pan-x",de="pan-y",le=function(){if(!ne)return!1;var t={},e=n.CSS&&n.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=!e||n.CSS.supports("touch-action",i)}),t}();J.prototype={set:function(t){"compute"==t&&(t=this.compute()),ne&&this.manager.element.style&&le[t]&&(this.manager.element.style[oe]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return l(this.manager.recognizers,function(e){f(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),$(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var o=this.actions,n=b(o,ae)&&!le[ae],s=b(o,de)&&!le[de],r=b(o,he)&&!le[he];if(n){var a=1===t.pointers.length,h=t.distance<2,d=t.deltaTime<250;if(a&&h&&d)return}return r&&s?void 0:n||s&&i&Ft||r&&i&Bt?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ue=1,ce=2,pe=4,fe=8,me=fe,ve=16;Q.prototype={defaults:{},set:function(t){return ft(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(d(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=it(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return d(t,"dropRecognizeWith",this)?this:(t=it(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(d(t,"requireFailure",this))return this;var e=this.requireFail;return t=it(t,this),-1===w(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(d(t,"dropRequireFailure",this))return this;t=it(t,this);var e=w(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(e,t)}var i=this,o=this.state;o<fe&&e(i.options.event+tt(o)),e(i.options.event),t.additionalEvent&&e(t.additionalEvent),o>=fe&&e(i.options.event+tt(o))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ue)))return!1;t++}return!0},recognize:function(t){var e=ft({},t);if(!f(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(me|ve|32)&&(this.state=ue),this.state=this.process(e),this.state&(ce|pe|fe|ve)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},c(ot,Q,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,o=e&(ce|pe),n=this.attrTest(t);return o&&(i&It||!n)?e|ve:o||n?i&Pt?e|fe:e&ce?e|pe:ce:32}}),c(nt,ot,{defaults:{event:"pan",threshold:10,pointers:1,direction:jt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Ft&&e.push(de),t&Bt&&e.push(he),e},directionTest:function(t){var e=this.options,i=!0,o=t.distance,n=t.direction,s=t.deltaX,r=t.deltaY;return n&e.direction||(e.direction&Ft?(n=0===s?Nt:s<0?Rt:At,i=s!=this.pX,o=Math.abs(t.deltaX)):(n=0===r?Nt:r<0?zt:Lt,i=r!=this.pY,o=Math.abs(t.deltaY))),t.direction=n,i&&o>e.threshold&&n&e.direction},attrTest:function(t){return ot.prototype.attrTest.call(this,t)&&(this.state&ce||!(this.state&ce)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=et(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),c(st,ot,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ce)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),c(rt,Q,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[se]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,o=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!o||!i||t.eventType&(Pt|It)&&!n)this.reset();else if(t.eventType&Et)this.reset(),this._timer=h(function(){this.state=me,this.tryEmit()},e.time,this);else if(t.eventType&Pt)return me;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===me&&(t&&t.eventType&Pt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=_t(),this.manager.emit(this.options.event,this._input)))}}),c(at,ot,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ce)}}),c(ht,ot,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ft|Bt,pointers:1},getTouchAction:function(){return nt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(Ft|Bt)?e=t.overallVelocity:i&Ft?e=t.overallVelocityX:i&Bt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&bt(e)>this.options.velocity&&t.eventType&Pt},emit:function(t){var e=et(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(dt,Q,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[re]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,o=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&Et&&0===this.count)return this.failTimeout();if(o&&n&&i){if(t.eventType!=Pt)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,r=!this.pCenter||L(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,r&&s?this.count+=1:this.count=1,this._input=t;if(0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=h(function(){this.state=me,this.tryEmit()},e.interval,this),ce):me}return 32},failTimeout:function(){return this._timer=h(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==me&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),lt.VERSION="2.0.7",lt.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[at,{enable:!1}],[st,{enable:!1},["rotate"]],[ht,{direction:Ft}],[nt,{direction:Ft},["swipe"]],[dt],[dt,{event:"doubletap",taps:2},["tap"]],[rt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};ut.prototype={set:function(t){return ft(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,o=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&me)&&(n=e.curRecognizer=null);for(var s=0;s<o.length;)i=o[s],2===e.stopped||n&&i!=n&&!i.canRecognizeWith(n)?i.reset():i.recognize(t),!n&&i.state&(ce|pe|fe)&&(n=e.curRecognizer=i),s++}},get:function(t){if(t instanceof Q)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(d(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(d(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=w(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var i=this.handlers;return l(_(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(t!==a){var i=this.handlers;return l(_(t),function(t){e?i[t]&&i[t].splice(w(i[t],e),1):delete i[t]}),this}},emit:function(t,e){this.options.domEvents&&pt(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var o=0;o<i.length;)i[o](e),o++}},destroy:function(){this.element&&ct(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},ft(lt,{INPUT_START:Et,INPUT_MOVE:Tt,INPUT_END:Pt,INPUT_CANCEL:It,STATE_POSSIBLE:ue,STATE_BEGAN:ce,STATE_CHANGED:pe,STATE_ENDED:fe,STATE_RECOGNIZED:me,STATE_CANCELLED:ve,STATE_FAILED:32,DIRECTION_NONE:Nt,DIRECTION_LEFT:Rt,DIRECTION_RIGHT:At,DIRECTION_UP:zt,DIRECTION_DOWN:Lt,DIRECTION_HORIZONTAL:Ft,DIRECTION_VERTICAL:Bt,DIRECTION_ALL:jt,Manager:ut,Input:C,TouchAction:J,TouchInput:V,MouseInput:H,PointerEventInput:W,TouchMouseInput:q,SingleTouchInput:Y,Recognizer:Q,AttrRecognizer:ot,Tap:dt,Pan:nt,Swipe:ht,Pinch:st,Rotate:at,Press:rt,on:v,off:g,each:l,merge:xt,extend:wt,assign:ft,inherit:c,bindFn:p,prefixed:S}),(void 0!==n?n:"undefined"!=typeof self?self:{}).Hammer=lt,(o=function(){return lt}.call(e,i,e,t))!==a&&(t.exports=o)}(window,document)},function(t,e,i){e.util=i(2),e.DOMutil=i(14),e.DataSet=i(11),e.DataView=i(12),e.Queue=i(43),e.Timeline=i(178),e.Graph2d=i(180),e.timeline={Core:i(65),DateUtil:i(36),Range:i(64),stack:i(100),TimeStep:i(66),components:{items:{Item:i(38),BackgroundItem:i(103),BoxItem:i(101),PointItem:i(102),RangeItem:i(70)},BackgroundGroup:i(69),Component:i(16),CurrentTime:i(67),CustomTime:i(46),DataAxis:i(107),DataScale:i(108),GraphGroup:i(109),Group:i(68),ItemSet:i(99),Legend:i(112),LineGraph:i(106),TimeAxis:i(45)}},e.moment=i(9),e.Hammer=i(10),e.keycharm=i(35)},function(t,e,i){function o(t,e,i,n){if(!(this instanceof o))throw new SyntaxError("Constructor must be called with the new operator");if(!(Array.isArray(i)||i instanceof d||i instanceof l)&&i instanceof Object){var s=n;n=i,i=s}n&&n.throttleRedraw&&console.warn('Timeline option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.');var r=this;if(this.defaultOptions={start:null,end:null,autoResize:!0,orientation:{axis:"bottom",item:"bottom"},moment:a,width:null,height:null,maxHeight:null,minHeight:null},this.options=h.deepExtend({},this.defaultOptions),this._create(t),!n||n&&void 0===n.rtl){this.dom.root.style.visibility="hidden";for(var c,m=this.dom.root;!c&&m;)c=window.getComputedStyle(m,null).direction,m=m.parentElement;this.options.rtl=c&&"rtl"==c.toLowerCase()}else this.options.rtl=n.rtl;this.options.rollingMode=n&&n.rollingMode,this.options.onInitialDrawComplete=n&&n.onInitialDrawComplete,this.components=[],this.body={dom:this.dom,domProps:this.props,emitter:{on:this.on.bind(this),off:this.off.bind(this),emit:this.emit.bind(this)},hiddenDates:[],util:{getScale:function(){return r.timeAxis.step.scale},getStep:function(){return r.timeAxis.step.step},toScreen:r._toScreen.bind(r),toGlobalScreen:r._toGlobalScreen.bind(r),toTime:r._toTime.bind(r),toGlobalTime:r._toGlobalTime.bind(r)}},this.range=new u(this.body,this.options),this.components.push(this.range),this.body.range=this.range,this.timeAxis=new p(this.body,this.options),this.timeAxis2=null,this.components.push(this.timeAxis),this.currentTime=new f(this.body,this.options),this.components.push(this.currentTime),this.itemSet=new v(this.body,this.options),this.components.push(this.itemSet),this.itemsData=null,this.groupsData=null,this.dom.root.onclick=function(t){r.emit("click",r.getEventProperties(t))},this.dom.root.ondblclick=function(t){r.emit("doubleClick",r.getEventProperties(t))},this.dom.root.oncontextmenu=function(t){r.emit("contextmenu",r.getEventProperties(t))},this.dom.root.onmouseover=function(t){r.emit("mouseOver",r.getEventProperties(t))},window.PointerEvent?(this.dom.root.onpointerdown=function(t){r.emit("mouseDown",r.getEventProperties(t))},this.dom.root.onpointermove=function(t){r.emit("mouseMove",r.getEventProperties(t))},this.dom.root.onpointerup=function(t){r.emit("mouseUp",r.getEventProperties(t))}):(this.dom.root.onmousemove=function(t){r.emit("mouseMove",r.getEventProperties(t))},this.dom.root.onmousedown=function(t){r.emit("mouseDown",r.getEventProperties(t))},this.dom.root.onmouseup=function(t){r.emit("mouseUp",r.getEventProperties(t))}),this.initialFitDone=!1,this.on("changed",function(){if(null!=this.itemsData&&!this.options.rollingMode){if(!r.initialFitDone)if(r.initialFitDone=!0,void 0!=r.options.start||void 0!=r.options.end){if(void 0==r.options.start||void 0==r.options.end)var t=r.getItemRange();var e=void 0!=r.options.start?r.options.start:t.min,i=void 0!=r.options.end?r.options.end:t.max;r.setWindow(e,i,{animation:!1})}else r.fit({animation:!1});!r.initialDrawDone&&r.initialRangeChangeDone&&(r.initialDrawDone=!0,r.dom.root.style.visibility="visible",r.options.onInitialDrawComplete&&setTimeout(function(){return r.options.onInitialDrawComplete()},0))}}),n&&this.setOptions(n),i&&this.setGroups(i),e&&this.setItems(e),this._redraw()}function n(t){return h.convert(t.data.start,"Date").valueOf()}function s(t){var e=void 0!=t.data.end?t.data.end:t.data.start;return h.convert(e,"Date").valueOf()}function r(t,e){var i=t.props.leftContainer.height,o=t.props.left.height,n=e.parent,s=n.top,r=!0,a=t.timeAxis.options.orientation.axis,h=function(){return"bottom"==a?n.height-e.top-e.height:e.top},d=-1*t._getScrollTop(),l=s+h(),u=e.height;return l<d?s+i<=s+h()+u&&(s+=h()-t.itemSet.options.margin.item.vertical):l+u>d+i?s+=h()+u-i+t.itemSet.options.margin.item.vertical:r=!1,s=Math.min(s,o-i),{shouldScroll:r,scrollOffset:s,itemTop:l}}var a=i(9),h=i(2),d=i(11),l=i(12),u=i(64),c=i(65),p=i(45),f=i(67),m=i(46),v=i(99),g=i(15).printStyle,y=i(105).allOptions,b=i(105).configureOptions,_=i(71).default,w=i(15).default;o.prototype=new c,o.prototype._createConfigurator=function(){return new _(this,this.dom.container,b)},o.prototype.redraw=function(){this.itemSet&&this.itemSet.markDirty({refreshItems:!0}),this._redraw()},o.prototype.setOptions=function(t){if(!0===w.validate(t,y)&&console.log("%cErrors have been found in the supplied options object.",g),c.prototype.setOptions.call(this,t),"type"in t&&t.type!==this.options.type){this.options.type=t.type;var e=this.itemsData;if(e){var i=this.getSelection();this.setItems(null),this.setItems(e),this.setSelection(i)}}},o.prototype.setItems=function(t){var e;e=t?t instanceof d||t instanceof l?t:new d(t,{type:{start:"Date",end:"Date"}}):null,this.itemsData=e,this.itemSet&&this.itemSet.setItems(e)},o.prototype.setGroups=function(t){var e;if(t){var i=function(t){return!1!==t.visible};e=t instanceof d||t instanceof l?new l(t,{filter:i}):new d(t.filter(i))}else e=null;this.groupsData=e,this.itemSet.setGroups(e)},o.prototype.setData=function(t){t&&t.groups&&this.setGroups(t.groups),t&&t.items&&this.setItems(t.items)},o.prototype.setSelection=function(t,e){this.itemSet&&this.itemSet.setSelection(t),e&&e.focus&&this.focus(t,e)},o.prototype.getSelection=function(){return this.itemSet&&this.itemSet.getSelection()||[]},o.prototype.focus=function(t,e){if(this.itemsData&&void 0!=t){var i=Array.isArray(t)?t:[t],o=this.itemsData.getDataSet().get(i,{type:{start:"Date",end:"Date"}}),n=null,s=null;if(o.forEach(function(t){var e=t.start.valueOf(),i="end"in t?t.end.valueOf():t.start.valueOf();(null===n||e<n)&&(n=e),(null===s||i>s)&&(s=i)}),null!==n&&null!==s){var a=this,h=this.itemSet.items[i[0]],d=-1*this._getScrollTop(),l=null,u=function(t,e,i){var o=r(a,h);if(l||(l=o),l.itemTop!=o.itemTop||l.shouldScroll){l.itemTop!=o.itemTop&&o.shouldScroll&&(l=o,d=-1*a._getScrollTop());var n=d,s=l.scrollOffset,u=i?s:n+(s-n)*t;a._setScrollTop(-u),e||a._redraw()}},c=function(){var t=r(a,h);t.shouldScroll&&t.itemTop!=l.itemTop&&(a._setScrollTop(-t.scrollOffset),a._redraw())},p=function(){c(),setTimeout(c,100)},f=(n+s)/2,m=Math.max(this.range.end-this.range.start,1.1*(s-n)),v=!e||void 0===e.animation||e.animation;v||(l={shouldScroll:!1,scrollOffset:-1,itemTop:-1}),this.range.setRange(f-m/2,f+m/2,{animation:v},p,u)}}},o.prototype.fit=function(t,e){var i,o=!t||void 0===t.animation||t.animation,n=this.itemsData&&this.itemsData.getDataSet();1===n.length&&void 0===n.get()[0].end?(i=this.getDataRange(),this.moveTo(i.min.valueOf(),{animation:o},e)):(i=this.getItemRange(),this.range.setRange(i.min,i.max,{animation:o},e))},o.prototype.getItemRange=function(){var t=this.getDataRange(),e=null!==t.min?t.min.valueOf():null,i=null!==t.max?t.max.valueOf():null,o=null,r=null;if(null!=e&&null!=i){var a=i-e;a<=0&&(a=10);var d=a/this.props.center.width,l={},u=0;h.forEach(this.itemSet.items,function(t,e){if(t.groupShowing){l[e]=t.redraw(!0),u=l[e].length}});if(u>0)for(var c=0;c<u;c++)h.forEach(l,function(t){t[c]()});if(h.forEach(this.itemSet.items,function(t){var a,h,l=n(t),u=s(t);this.options.rtl?(a=l-(t.getWidthRight()+10)*d,h=u+(t.getWidthLeft()+10)*d):(a=l-(t.getWidthLeft()+10)*d,h=u+(t.getWidthRight()+10)*d),a<e&&(e=a,o=t),h>i&&(i=h,r=t)}.bind(this)),o&&r){var p=o.getWidthLeft()+10,f=r.getWidthRight()+10,m=this.props.center.width-p-f;m>0&&(this.options.rtl?(e=n(o)-f*a/m,i=s(r)+p*a/m):(e=n(o)-p*a/m,i=s(r)+f*a/m))}}return{min:null!=e?new Date(e):null,max:null!=i?new Date(i):null}},o.prototype.getDataRange=function(){var t=null,e=null,i=this.itemsData&&this.itemsData.getDataSet();return i&&i.forEach(function(i){var o=h.convert(i.start,"Date").valueOf(),n=h.convert(void 0!=i.end?i.end:i.start,"Date").valueOf();(null===t||o<t)&&(t=o),(null===e||n>e)&&(e=n)}),{min:null!=t?new Date(t):null,max:null!=e?new Date(e):null}},o.prototype.getEventProperties=function(t){var e,i=t.center?t.center.x:t.clientX,o=t.center?t.center.y:t.clientY;e=this.options.rtl?h.getAbsoluteRight(this.dom.centerContainer)-i:i-h.getAbsoluteLeft(this.dom.centerContainer);var n=o-h.getAbsoluteTop(this.dom.centerContainer),s=this.itemSet.itemFromTarget(t),r=this.itemSet.groupFromTarget(t),a=m.customTimeFromTarget(t),d=this.itemSet.options.snap||null,l=this.body.util.getScale(),u=this.body.util.getStep(),c=this._toTime(e),p=d?d(c,l,u):c,f=h.getTarget(t),v=null;return null!=s?v="item":null!=a?v="custom-time":h.hasParent(f,this.timeAxis.dom.foreground)?v="axis":this.timeAxis2&&h.hasParent(f,this.timeAxis2.dom.foreground)?v="axis":h.hasParent(f,this.itemSet.dom.labelSet)?v="group-label":h.hasParent(f,this.currentTime.bar)?v="current-time":h.hasParent(f,this.dom.center)&&(v="background"),{event:t,item:s?s.id:null,group:r?r.groupId:null,what:v,pageX:t.srcEvent?t.srcEvent.pageX:t.pageX,pageY:t.srcEvent?t.srcEvent.pageY:t.pageY,x:e,y:n,time:c,snappedTime:p}},o.prototype.toggleRollingMode=function(){this.range.rolling?this.range.stopRolling():(void 0==this.options.rollingMode&&this.setOptions(this.options),this.range.startRolling())},t.exports=o},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(19),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(10),u=i(37),c=i(2),p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;(0,a.default)(this,t),this.pixelRatio=e,this.generated=!1,this.centerCoordinates={x:144.5,y:144.5},this.r=289*.49,this.color={r:255,g:255,b:255,a:1},this.hueCircle=void 0,this.initialColor={r:255,g:255,b:255,a:1},this.previousColor=void 0,this.applied=!1,this.updateCallback=function(){},this.closeCallback=function(){},this._create()}return(0,d.default)(t,[{key:"insertTo",value:function(t){void 0!==this.hammer&&(this.hammer.destroy(),this.hammer=void 0),this.container=t,this.container.appendChild(this.frame),this._bindHammer(),this._setSize()}},{key:"setUpdateCallback",value:function(t){if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker update callback is not a function.");this.updateCallback=t}},{key:"setCloseCallback",value:function(t){if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker closing callback is not a function.");this.closeCallback=t}},{key:"_isColorString",value:function(t){var e={black:"#000000",navy:"#000080",darkblue:"#00008B",mediumblue:"#0000CD",blue:"#0000FF",darkgreen:"#006400",green:"#008000",teal:"#008080",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",lime:"#00FF00",springgreen:"#00FF7F",aqua:"#00FFFF",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",mediumaquamarine:"#66CDAA",dimgray:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",lightslategray:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",maroon:"#800000",purple:"#800080",olive:"#808000",gray:"#808080",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370D8",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",silver:"#C0C0C0",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgrey:"#D3D3D3",palevioletred:"#D87093",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",red:"#FF0000",fuchsia:"#FF00FF",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",yellow:"#FFFF00",lightyellow:"#FFFFE0",ivory:"#FFFFF0",white:"#FFFFFF"};if("string"==typeof t)return e[t]}},{key:"setColor",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("none"!==t){var i=void 0,o=this._isColorString(t);if(void 0!==o&&(t=o),!0===c.isString(t)){if(!0===c.isValidRGB(t)){var n=t.substr(4).substr(0,t.length-5).split(",");i={r:n[0],g:n[1],b:n[2],a:1}}else if(!0===c.isValidRGBA(t)){var r=t.substr(5).substr(0,t.length-6).split(",");i={r:r[0],g:r[1],b:r[2],a:r[3]}}else if(!0===c.isValidHex(t)){var a=c.hexToRGB(t);i={r:a.r,g:a.g,b:a.b,a:1}}}else if(t instanceof Object&&void 0!==t.r&&void 0!==t.g&&void 0!==t.b){var h=void 0!==t.a?t.a:"1.0";i={r:t.r,g:t.g,b:t.b,a:h}}if(void 0===i)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: "+(0,s.default)(t));this._setColor(i,e)}}},{key:"show",value:function(){void 0!==this.closeCallback&&(this.closeCallback(),this.closeCallback=void 0),this.applied=!1,this.frame.style.display="block",this._generateHueCircle()}},{key:"_hide",value:function(){var t=this;!0===(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(this.previousColor=c.extend({},this.color)),!0===this.applied&&this.updateCallback(this.initialColor),this.frame.style.display="none",setTimeout(function(){void 0!==t.closeCallback&&(t.closeCallback(),t.closeCallback=void 0)},0)}},{key:"_save",value:function(){this.updateCallback(this.color),this.applied=!1,this._hide()}},{key:"_apply",value:function(){this.applied=!0,this.updateCallback(this.color),this._updatePicker(this.color)}},{key:"_loadLast",value:function(){void 0!==this.previousColor?this.setColor(this.previousColor,!1):alert("There is no last color to load...")}},{key:"_setColor",value:function(t){!0===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&(this.initialColor=c.extend({},t)),this.color=t;var e=c.RGBToHSV(t.r,t.g,t.b),i=2*Math.PI,o=this.r*e.s,n=this.centerCoordinates.x+o*Math.sin(i*e.h),s=this.centerCoordinates.y+o*Math.cos(i*e.h);this.colorPickerSelector.style.left=n-.5*this.colorPickerSelector.clientWidth+"px",this.colorPickerSelector.style.top=s-.5*this.colorPickerSelector.clientHeight+"px",this._updatePicker(t)}},{key:"_setOpacity",value:function(t){this.color.a=t/100,this._updatePicker(this.color)}},{key:"_setBrightness",value:function(t){var e=c.RGBToHSV(this.color.r,this.color.g,this.color.b);e.v=t/100;var i=c.HSVToRGB(e.h,e.s,e.v);i.a=this.color.a,this.color=i,this._updatePicker()}},{key:"_updatePicker",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.color,e=c.RGBToHSV(t.r,t.g,t.b),i=this.colorPickerCanvas.getContext("2d");void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1)),i.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var o=this.colorPickerCanvas.clientWidth,n=this.colorPickerCanvas.clientHeight;i.clearRect(0,0,o,n),i.putImageData(this.hueCircle,0,0),i.fillStyle="rgba(0,0,0,"+(1-e.v)+")",i.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),i.fill(),this.brightnessRange.value=100*e.v,this.opacityRange.value=100*t.a,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}},{key:"_setSize",value:function(){this.colorPickerCanvas.style.width="100%",this.colorPickerCanvas.style.height="100%",this.colorPickerCanvas.width=289*this.pixelRatio,this.colorPickerCanvas.height=289*this.pixelRatio}},{key:"_create",value:function(){if(this.frame=document.createElement("div"),this.frame.className="vis-color-picker",this.colorPickerDiv=document.createElement("div"),this.colorPickerSelector=document.createElement("div"),this.colorPickerSelector.className="vis-selector",this.colorPickerDiv.appendChild(this.colorPickerSelector),this.colorPickerCanvas=document.createElement("canvas"),this.colorPickerDiv.appendChild(this.colorPickerCanvas),this.colorPickerCanvas.getContext){var t=this.colorPickerCanvas.getContext("2d")
;this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1),this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}else{var e=document.createElement("DIV");e.style.color="red",e.style.fontWeight="bold",e.style.padding="10px",e.innerHTML="Error: your browser does not support HTML canvas",this.colorPickerCanvas.appendChild(e)}this.colorPickerDiv.className="vis-color",this.opacityDiv=document.createElement("div"),this.opacityDiv.className="vis-opacity",this.brightnessDiv=document.createElement("div"),this.brightnessDiv.className="vis-brightness",this.arrowDiv=document.createElement("div"),this.arrowDiv.className="vis-arrow",this.opacityRange=document.createElement("input");try{this.opacityRange.type="range",this.opacityRange.min="0",this.opacityRange.max="100"}catch(t){}this.opacityRange.value="100",this.opacityRange.className="vis-range",this.brightnessRange=document.createElement("input");try{this.brightnessRange.type="range",this.brightnessRange.min="0",this.brightnessRange.max="100"}catch(t){}this.brightnessRange.value="100",this.brightnessRange.className="vis-range",this.opacityDiv.appendChild(this.opacityRange),this.brightnessDiv.appendChild(this.brightnessRange);var i=this;this.opacityRange.onchange=function(){i._setOpacity(this.value)},this.opacityRange.oninput=function(){i._setOpacity(this.value)},this.brightnessRange.onchange=function(){i._setBrightness(this.value)},this.brightnessRange.oninput=function(){i._setBrightness(this.value)},this.brightnessLabel=document.createElement("div"),this.brightnessLabel.className="vis-label vis-brightness",this.brightnessLabel.innerHTML="brightness:",this.opacityLabel=document.createElement("div"),this.opacityLabel.className="vis-label vis-opacity",this.opacityLabel.innerHTML="opacity:",this.newColorDiv=document.createElement("div"),this.newColorDiv.className="vis-new-color",this.newColorDiv.innerHTML="new",this.initialColorDiv=document.createElement("div"),this.initialColorDiv.className="vis-initial-color",this.initialColorDiv.innerHTML="initial",this.cancelButton=document.createElement("div"),this.cancelButton.className="vis-button vis-cancel",this.cancelButton.innerHTML="cancel",this.cancelButton.onclick=this._hide.bind(this,!1),this.applyButton=document.createElement("div"),this.applyButton.className="vis-button vis-apply",this.applyButton.innerHTML="apply",this.applyButton.onclick=this._apply.bind(this),this.saveButton=document.createElement("div"),this.saveButton.className="vis-button vis-save",this.saveButton.innerHTML="save",this.saveButton.onclick=this._save.bind(this),this.loadButton=document.createElement("div"),this.loadButton.className="vis-button vis-load",this.loadButton.innerHTML="load last",this.loadButton.onclick=this._loadLast.bind(this),this.frame.appendChild(this.colorPickerDiv),this.frame.appendChild(this.arrowDiv),this.frame.appendChild(this.brightnessLabel),this.frame.appendChild(this.brightnessDiv),this.frame.appendChild(this.opacityLabel),this.frame.appendChild(this.opacityDiv),this.frame.appendChild(this.newColorDiv),this.frame.appendChild(this.initialColorDiv),this.frame.appendChild(this.cancelButton),this.frame.appendChild(this.applyButton),this.frame.appendChild(this.saveButton),this.frame.appendChild(this.loadButton)}},{key:"_bindHammer",value:function(){var t=this;this.drag={},this.pinch={},this.hammer=new l(this.colorPickerCanvas),this.hammer.get("pinch").set({enable:!0}),u.onTouch(this.hammer,function(e){t._moveSelector(e)}),this.hammer.on("tap",function(e){t._moveSelector(e)}),this.hammer.on("panstart",function(e){t._moveSelector(e)}),this.hammer.on("panmove",function(e){t._moveSelector(e)}),this.hammer.on("panend",function(e){t._moveSelector(e)})}},{key:"_generateHueCircle",value:function(){if(!1===this.generated){var t=this.colorPickerCanvas.getContext("2d");void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)),t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var e=this.colorPickerCanvas.clientWidth,i=this.colorPickerCanvas.clientHeight;t.clearRect(0,0,e,i);var o=void 0,n=void 0,s=void 0,r=void 0;this.centerCoordinates={x:.5*e,y:.5*i},this.r=.49*e;var a=2*Math.PI/360,h=1/this.r,d=void 0;for(s=0;s<360;s++)for(r=0;r<this.r;r++)o=this.centerCoordinates.x+r*Math.sin(a*s),n=this.centerCoordinates.y+r*Math.cos(a*s),d=c.HSVToRGB(s*(1/360),r*h,1),t.fillStyle="rgb("+d.r+","+d.g+","+d.b+")",t.fillRect(o-.5,n-.5,2,2);t.strokeStyle="rgba(0,0,0,1)",t.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),t.stroke(),this.hueCircle=t.getImageData(0,0,e,i)}this.generated=!0}},{key:"_moveSelector",value:function(t){var e=this.colorPickerDiv.getBoundingClientRect(),i=t.center.x-e.left,o=t.center.y-e.top,n=.5*this.colorPickerDiv.clientHeight,s=.5*this.colorPickerDiv.clientWidth,r=i-s,a=o-n,h=Math.atan2(r,a),d=.98*Math.min(Math.sqrt(r*r+a*a),s),l=Math.cos(h)*d+n,u=Math.sin(h)*d+s;this.colorPickerSelector.style.top=l-.5*this.colorPickerSelector.clientHeight+"px",this.colorPickerSelector.style.left=u-.5*this.colorPickerSelector.clientWidth+"px";var p=h/(2*Math.PI);p=p<0?p+1:p;var f=d/this.r,m=c.RGBToHSV(this.color.r,this.color.g,this.color.b);m.h=p,m.s=f;var v=c.HSVToRGB(m.h,m.s,m.v);v.a=this.color.a,this.color=v,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}}]),t}();e.default=p},function(t,e,i){function o(t,e,i,o){if(!(Array.isArray(i)||i instanceof r||i instanceof a)&&i instanceof Object){var d=o;o=i,i=d}o&&o.throttleRedraw&&console.warn('Graph2d option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.');var c=this;this.defaultOptions={start:null,end:null,autoResize:!0,orientation:{axis:"bottom",item:"bottom"},moment:n,width:null,height:null,maxHeight:null,minHeight:null},this.options=s.deepExtend({},this.defaultOptions),this._create(t),this.components=[],this.body={dom:this.dom,domProps:this.props,emitter:{on:this.on.bind(this),off:this.off.bind(this),emit:this.emit.bind(this)},hiddenDates:[],util:{toScreen:c._toScreen.bind(c),toGlobalScreen:c._toGlobalScreen.bind(c),toTime:c._toTime.bind(c),toGlobalTime:c._toGlobalTime.bind(c)}},this.range=new h(this.body),this.components.push(this.range),this.body.range=this.range,this.timeAxis=new l(this.body),this.components.push(this.timeAxis),this.currentTime=new u(this.body),this.components.push(this.currentTime),this.linegraph=new p(this.body),this.components.push(this.linegraph),this.itemsData=null,this.groupsData=null,this.on("tap",function(t){c.emit("click",c.getEventProperties(t))}),this.on("doubletap",function(t){c.emit("doubleClick",c.getEventProperties(t))}),this.dom.root.oncontextmenu=function(t){c.emit("contextmenu",c.getEventProperties(t))},o&&this.setOptions(o),i&&this.setGroups(i),e&&this.setItems(e),this._redraw()}var n=i(9),s=i(2),r=i(11),a=i(12),h=i(64),d=i(65),l=i(45),u=i(67),c=i(46),p=i(106),f=i(15).printStyle,m=i(113).allOptions,v=i(113).configureOptions,g=i(71).default,y=i(15).default;o.prototype=new d,o.prototype.setOptions=function(t){!0===y.validate(t,m)&&console.log("%cErrors have been found in the supplied options object.",f),d.prototype.setOptions.call(this,t)},o.prototype.setItems=function(t){var e,i=null==this.itemsData;if(e=t?t instanceof r||t instanceof a?t:new r(t,{type:{start:"Date",end:"Date"}}):null,this.itemsData=e,this.linegraph&&this.linegraph.setItems(e),i)if(void 0!=this.options.start||void 0!=this.options.end){var o=void 0!=this.options.start?this.options.start:null,n=void 0!=this.options.end?this.options.end:null;this.setWindow(o,n,{animation:!1})}else this.fit({animation:!1})},o.prototype.setGroups=function(t){var e;e=t?t instanceof r||t instanceof a?t:new r(t):null,this.groupsData=e,this.linegraph.setGroups(e)},o.prototype.getLegend=function(t,e,i){return void 0===e&&(e=15),void 0===i&&(i=15),void 0!==this.linegraph.groups[t]?this.linegraph.groups[t].getLegend(e,i):"cannot find group:'"+t+"'"},o.prototype.isGroupVisible=function(t){return void 0!==this.linegraph.groups[t]&&(this.linegraph.groups[t].visible&&(void 0===this.linegraph.options.groups.visibility[t]||1==this.linegraph.options.groups.visibility[t]))},o.prototype.getDataRange=function(){var t=null,e=null;for(var i in this.linegraph.groups)if(this.linegraph.groups.hasOwnProperty(i)&&1==this.linegraph.groups[i].visible)for(var o=0;o<this.linegraph.groups[i].itemsData.length;o++){var n=this.linegraph.groups[i].itemsData[o],r=s.convert(n.x,"Date").valueOf();t=null==t?r:t>r?r:t,e=null==e?r:e<r?r:e}return{min:null!=t?new Date(t):null,max:null!=e?new Date(e):null}},o.prototype.getEventProperties=function(t){var e=t.center?t.center.x:t.clientX,i=t.center?t.center.y:t.clientY,o=e-s.getAbsoluteLeft(this.dom.centerContainer),n=i-s.getAbsoluteTop(this.dom.centerContainer),r=this._toTime(o),a=c.customTimeFromTarget(t),h=s.getTarget(t),d=null;s.hasParent(h,this.timeAxis.dom.foreground)?d="axis":this.timeAxis2&&s.hasParent(h,this.timeAxis2.dom.foreground)?d="axis":s.hasParent(h,this.linegraph.yAxisLeft.dom.frame)?d="data-axis":s.hasParent(h,this.linegraph.yAxisRight.dom.frame)?d="data-axis":s.hasParent(h,this.linegraph.legendLeft.dom.frame)?d="legend":s.hasParent(h,this.linegraph.legendRight.dom.frame)?d="legend":null!=a?d="custom-time":s.hasParent(h,this.currentTime.bar)?d="current-time":s.hasParent(h,this.dom.center)&&(d="background");var l=[],u=this.linegraph.yAxisLeft,p=this.linegraph.yAxisRight;return!u.hidden&&this.itemsData.length>0&&l.push(u.screenToValue(n)),!p.hidden&&this.itemsData.length>0&&l.push(p.screenToValue(n)),{event:t,what:d,pageX:t.srcEvent?t.srcEvent.pageX:t.pageX,pageY:t.srcEvent?t.srcEvent.pageY:t.pageY,x:o,y:n,time:r,value:l}},o.prototype._createConfigurator=function(){return new g(this,this.dom.container,v)},t.exports=o},function(t,e,i){e.util=i(2),e.DOMutil=i(14),e.DataSet=i(11),e.DataView=i(12),e.Queue=i(43),e.Network=i(182),e.network={Images:i(116),dotparser:i(114),gephiParser:i(115),allOptions:i(122)},e.network.convertDot=function(t){return e.network.dotparser.DOTToGraph(t)},e.network.convertGephi=function(t,i){return e.network.gephiParser.parseGephi(t,i)},e.moment=i(9),e.Hammer=i(10),e.keycharm=i(35)},function(t,e,i){function o(t,e,i){var n=this;if(!(this instanceof o))throw new SyntaxError("Constructor must be called with the new operator");this.options={},this.defaultOptions={locale:"en",locales:d,clickToUse:!1},s.extend(this.options,this.defaultOptions),this.body={container:t,nodes:{},nodeIndices:[],edges:{},edgeIndices:[],emitter:{on:this.on.bind(this),off:this.off.bind(this),emit:this.emit.bind(this),once:this.once.bind(this)},eventListeners:{onTap:function(){},onTouch:function(){},onDoubleTap:function(){},onHold:function(){},onDragStart:function(){},onDrag:function(){},onDragEnd:function(){},onMouseWheel:function(){},onPinch:function(){},onMouseMove:function(){},onRelease:function(){},onContext:function(){}},data:{nodes:null,edges:null},functions:{createNode:function(){},createEdge:function(){},getPointer:function(){}},modules:{},view:{scale:1,translation:{x:0,y:0}}},this.bindEventListeners(),this.images=new l(function(){return n.body.emitter.emit("_requestRedraw")}),this.groups=new u,this.canvas=new g(this.body),this.selectionHandler=new _(this.body,this.canvas),this.interactionHandler=new b(this.body,this.canvas,this.selectionHandler),this.view=new y(this.body,this.canvas),this.renderer=new v(this.body,this.canvas),this.physics=new f(this.body),this.layoutEngine=new w(this.body),this.clustering=new m(this.body),this.manipulation=new x(this.body,this.canvas,this.selectionHandler),this.nodesHandler=new c(this.body,this.images,this.groups,this.layoutEngine),this.edgesHandler=new p(this.body,this.images,this.groups),this.body.modules.kamadaKawai=new T(this.body,150,.05),this.body.modules.clustering=this.clustering,this.canvas._create(),this.setOptions(i),this.setData(e)}i(183);var n=i(44),s=i(2),r=i(114),a=i(115),h=i(97),d=i(184),l=i(116).default,u=i(186).default,c=i(187).default,p=i(214).default,f=i(220).default,m=i(227).default,v=i(229).default,g=i(230).default,y=i(231).default,b=i(232).default,_=i(234).default,w=i(235).default,x=i(237).default,k=i(71).default,S=i(15).default,D=i(15),M=D.printStyle,C=i(122),O=C.allOptions,E=C.configureOptions,T=i(238).default;n(o.prototype),o.prototype.setOptions=function(t){var e=this;if(void 0!==t){!0===S.validate(t,O)&&console.log("%cErrors have been found in the supplied options object.",M);var i=["locale","locales","clickToUse"];if(s.selectiveDeepExtend(i,this.options,t),t=this.layoutEngine.setOptions(t.layout,t),this.canvas.setOptions(t),this.groups.setOptions(t.groups),this.nodesHandler.setOptions(t.nodes),this.edgesHandler.setOptions(t.edges),this.physics.setOptions(t.physics),this.manipulation.setOptions(t.manipulation,t,this.options),this.interactionHandler.setOptions(t.interaction),this.renderer.setOptions(t.interaction),this.selectionHandler.setOptions(t.interaction),void 0!==t.groups&&this.body.emitter.emit("refreshNodes"),"configure"in t&&(this.configurator||(this.configurator=new k(this,this.body.container,E,this.canvas.pixelRatio)),this.configurator.setOptions(t.configure)),this.configurator&&!0===this.configurator.options.enabled){var o={nodes:{},edges:{},layout:{},interaction:{},manipulation:{},physics:{},global:{}};s.deepExtend(o.nodes,this.nodesHandler.options),s.deepExtend(o.edges,this.edgesHandler.options),s.deepExtend(o.layout,this.layoutEngine.options),s.deepExtend(o.interaction,this.selectionHandler.options),s.deepExtend(o.interaction,this.renderer.options),s.deepExtend(o.interaction,this.interactionHandler.options),s.deepExtend(o.manipulation,this.manipulation.options),s.deepExtend(o.physics,this.physics.options),s.deepExtend(o.global,this.canvas.options),s.deepExtend(o.global,this.options),this.configurator.setModuleOptions(o)}void 0!==t.clickToUse?!0===t.clickToUse?void 0===this.activator&&(this.activator=new h(this.canvas.frame),this.activator.on("change",function(){e.body.emitter.emit("activate")})):(void 0!==this.activator&&(this.activator.destroy(),delete this.activator),this.body.emitter.emit("activate")):this.body.emitter.emit("activate"),this.canvas.setSize(),this.body.emitter.emit("startSimulation")}},o.prototype._updateVisibleIndices=function(){var t=this.body.nodes,e=this.body.edges;this.body.nodeIndices=[],this.body.edgeIndices=[];for(var i in t)t.hasOwnProperty(i)&&(this.clustering._isClusteredNode(i)||!1!==t[i].options.hidden||this.body.nodeIndices.push(t[i].id));for(var o in e)if(e.hasOwnProperty(o)){var n=e[o],s=t[n.fromId],r=t[n.toId],a=void 0!==s&&void 0!==r,h=!this.clustering._isClusteredEdge(o)&&!1===n.options.hidden&&a&&!1===s.options.hidden&&!1===r.options.hidden;h&&this.body.edgeIndices.push(n.id)}},o.prototype.bindEventListeners=function(){var t=this;this.body.emitter.on("_dataChanged",function(){t.edgesHandler._updateState(),t.body.emitter.emit("_dataUpdated")}),this.body.emitter.on("_dataUpdated",function(){t.clustering._updateState(),t._updateVisibleIndices(),t._updateValueRange(t.body.nodes),t._updateValueRange(t.body.edges),t.body.emitter.emit("startSimulation"),t.body.emitter.emit("_requestRedraw")})},o.prototype.setData=function(t){if(this.body.emitter.emit("resetPhysics"),this.body.emitter.emit("_resetData"),this.selectionHandler.unselectAll(),t&&t.dot&&(t.nodes||t.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.');if(this.setOptions(t&&t.options),t&&t.dot){console.log("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);");var e=r.DOTToGraph(t.dot);return void this.setData(e)}if(t&&t.gephi){console.log("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);");var i=a.parseGephi(t.gephi);return void this.setData(i)}this.nodesHandler.setData(t&&t.nodes,!0),this.edgesHandler.setData(t&&t.edges,!0),this.body.emitter.emit("_dataChanged"),this.body.emitter.emit("_dataLoaded"),this.body.emitter.emit("initPhysics")},o.prototype.destroy=function(){this.body.emitter.emit("destroy"),this.body.emitter.off(),this.off(),delete this.groups,delete this.canvas,delete this.selectionHandler,delete this.interactionHandler,delete this.view,delete this.renderer,delete this.physics,delete this.layoutEngine,delete this.clustering,delete this.manipulation,delete this.nodesHandler,delete this.edgesHandler,delete this.configurator,delete this.images;for(var t in this.body.nodes)this.body.nodes.hasOwnProperty(t)&&delete this.body.nodes[t];for(var e in this.body.edges)this.body.edges.hasOwnProperty(e)&&delete this.body.edges[e];s.recursiveDOMDelete(this.body.container)},o.prototype._updateValueRange=function(t){var e,i=void 0,o=void 0,n=0;for(e in t)if(t.hasOwnProperty(e)){var s=t[e].getValue();void 0!==s&&(i=void 0===i?s:Math.min(s,i),o=void 0===o?s:Math.max(s,o),n+=s)}if(void 0!==i&&void 0!==o)for(e in t)t.hasOwnProperty(e)&&t[e].setValueRange(i,o,n)},o.prototype.isActive=function(){return!this.activator||this.activator.active},o.prototype.setSize=function(){return this.canvas.setSize.apply(this.canvas,arguments)},o.prototype.canvasToDOM=function(){return this.canvas.canvasToDOM.apply(this.canvas,arguments)},o.prototype.DOMtoCanvas=function(){return this.canvas.DOMtoCanvas.apply(this.canvas,arguments)},o.prototype.findNode=function(){return this.clustering.findNode.apply(this.clustering,arguments)},o.prototype.isCluster=function(){return this.clustering.isCluster.apply(this.clustering,arguments)},o.prototype.openCluster=function(){return this.clustering.openCluster.apply(this.clustering,arguments)},o.prototype.cluster=function(){return this.clustering.cluster.apply(this.clustering,arguments)},o.prototype.getNodesInCluster=function(){return this.clustering.getNodesInCluster.apply(this.clustering,arguments)},o.prototype.clusterByConnection=function(){return this.clustering.clusterByConnection.apply(this.clustering,arguments)},o.prototype.clusterByHubsize=function(){return this.clustering.clusterByHubsize.apply(this.clustering,arguments)},o.prototype.clusterOutliers=function(){return this.clustering.clusterOutliers.apply(this.clustering,arguments)},o.prototype.getSeed=function(){return this.layoutEngine.getSeed.apply(this.layoutEngine,arguments)},o.prototype.enableEditMode=function(){return this.manipulation.enableEditMode.apply(this.manipulation,arguments)},o.prototype.disableEditMode=function(){return this.manipulation.disableEditMode.apply(this.manipulation,arguments)},o.prototype.addNodeMode=function(){return this.manipulation.addNodeMode.apply(this.manipulation,arguments)},o.prototype.editNode=function(){return this.manipulation.editNode.apply(this.manipulation,arguments)},o.prototype.editNodeMode=function(){return console.log("Deprecated: Please use editNode instead of editNodeMode."),this.manipulation.editNode.apply(this.manipulation,arguments)},o.prototype.addEdgeMode=function(){return this.manipulation.addEdgeMode.apply(this.manipulation,arguments)},o.prototype.editEdgeMode=function(){return this.manipulation.editEdgeMode.apply(this.manipulation,arguments)},o.prototype.deleteSelected=function(){return this.manipulation.deleteSelected.apply(this.manipulation,arguments)},o.prototype.getPositions=function(){return this.nodesHandler.getPositions.apply(this.nodesHandler,arguments)},o.prototype.storePositions=function(){return this.nodesHandler.storePositions.apply(this.nodesHandler,arguments)},o.prototype.moveNode=function(){return this.nodesHandler.moveNode.apply(this.nodesHandler,arguments)},o.prototype.getBoundingBox=function(){return this.nodesHandler.getBoundingBox.apply(this.nodesHandler,arguments)},o.prototype.getConnectedNodes=function(t){return void 0!==this.body.nodes[t]?this.nodesHandler.getConnectedNodes.apply(this.nodesHandler,arguments):this.edgesHandler.getConnectedNodes.apply(this.edgesHandler,arguments)},o.prototype.getConnectedEdges=function(){return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler,arguments)},o.prototype.startSimulation=function(){return this.physics.startSimulation.apply(this.physics,arguments)},o.prototype.stopSimulation=function(){return this.physics.stopSimulation.apply(this.physics,arguments)},o.prototype.stabilize=function(){return this.physics.stabilize.apply(this.physics,arguments)},o.prototype.getSelection=function(){return this.selectionHandler.getSelection.apply(this.selectionHandler,arguments)},o.prototype.setSelection=function(){return this.selectionHandler.setSelection.apply(this.selectionHandler,arguments)},o.prototype.getSelectedNodes=function(){return this.selectionHandler.getSelectedNodes.apply(this.selectionHandler,arguments)},o.prototype.getSelectedEdges=function(){return this.selectionHandler.getSelectedEdges.apply(this.selectionHandler,arguments)},o.prototype.getNodeAt=function(){var t=this.selectionHandler.getNodeAt.apply(this.selectionHandler,arguments);return void 0!==t&&void 0!==t.id?t.id:t},o.prototype.getEdgeAt=function(){var t=this.selectionHandler.getEdgeAt.apply(this.selectionHandler,arguments);return void 0!==t&&void 0!==t.id?t.id:t},o.prototype.selectNodes=function(){return this.selectionHandler.selectNodes.apply(this.selectionHandler,arguments)},o.prototype.selectEdges=function(){return this.selectionHandler.selectEdges.apply(this.selectionHandler,arguments)},o.prototype.unselectAll=function(){this.selectionHandler.unselectAll.apply(this.selectionHandler,arguments),this.redraw()},o.prototype.redraw=function(){return this.renderer.redraw.apply(this.renderer,arguments)},o.prototype.getScale=function(){return this.view.getScale.apply(this.view,arguments)},o.prototype.getViewPosition=function(){return this.view.getViewPosition.apply(this.view,arguments)},o.prototype.fit=function(){return this.view.fit.apply(this.view,arguments)},o.prototype.moveTo=function(){return this.view.moveTo.apply(this.view,arguments)},o.prototype.focus=function(){return this.view.focus.apply(this.view,arguments)},o.prototype.releaseNode=function(){return this.view.releaseNode.apply(this.view,arguments)},o.prototype.getOptionsFromConfigurator=function(){var t={};return this.configurator&&(t=this.configurator.getOptions.apply(this.configurator)),t},t.exports=o},function(t,e,i){"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.circle=function(t,e,i){this.beginPath(),this.arc(t,e,i,0,2*Math.PI,!1),this.closePath()},CanvasRenderingContext2D.prototype.square=function(t,e,i){this.beginPath(),this.rect(t-i,e-i,2*i,2*i),this.closePath()},CanvasRenderingContext2D.prototype.triangle=function(t,e,i){this.beginPath(),i*=1.15,e+=.275*i;var o=2*i,n=o/2,s=Math.sqrt(3)/6*o,r=Math.sqrt(o*o-n*n);this.moveTo(t,e-(r-s)),this.lineTo(t+n,e+s),this.lineTo(t-n,e+s),this.lineTo(t,e-(r-s)),this.closePath()},CanvasRenderingContext2D.prototype.triangleDown=function(t,e,i){this.beginPath(),i*=1.15,e-=.275*i;var o=2*i,n=o/2,s=Math.sqrt(3)/6*o,r=Math.sqrt(o*o-n*n);this.moveTo(t,e+(r-s)),this.lineTo(t+n,e-s),this.lineTo(t-n,e-s),this.lineTo(t,e+(r-s)),this.closePath()},CanvasRenderingContext2D.prototype.star=function(t,e,i){this.beginPath(),i*=.82,e+=.1*i;for(var o=0;o<10;o++){var n=o%2==0?1.3*i:.5*i;this.lineTo(t+n*Math.sin(2*o*Math.PI/10),e-n*Math.cos(2*o*Math.PI/10))}this.closePath()},CanvasRenderingContext2D.prototype.diamond=function(t,e,i){this.beginPath(),this.lineTo(t,e+i),this.lineTo(t+i,e),this.lineTo(t,e-i),this.lineTo(t-i,e),this.closePath()},CanvasRenderingContext2D.prototype.roundRect=function(t,e,i,o,n){var s=Math.PI/180;i-2*n<0&&(n=i/2),o-2*n<0&&(n=o/2),this.beginPath(),this.moveTo(t+n,e),this.lineTo(t+i-n,e),this.arc(t+i-n,e+n,n,270*s,360*s,!1),this.lineTo(t+i,e+o-n),this.arc(t+i-n,e+o-n,n,0,90*s,!1),this.lineTo(t+n,e+o),this.arc(t+n,e+o-n,n,90*s,180*s,!1),this.lineTo(t,e+n),this.arc(t+n,e+n,n,180*s,270*s,!1),this.closePath()},CanvasRenderingContext2D.prototype.ellipse_vis=function(t,e,i,o){var n=i/2*.5522848,s=o/2*.5522848,r=t+i,a=e+o,h=t+i/2,d=e+o/2;this.beginPath(),this.moveTo(t,d),this.bezierCurveTo(t,d-s,h-n,e,h,e),this.bezierCurveTo(h+n,e,r,d-s,r,d),this.bezierCurveTo(r,d+s,h+n,a,h,a),this.bezierCurveTo(h-n,a,t,d+s,t,d),this.closePath()},CanvasRenderingContext2D.prototype.database=function(t,e,i,o){var n=i,s=o*(1/3),r=n/2*.5522848,a=s/2*.5522848,h=t+n,d=e+s,l=t+n/2,u=e+s/2,c=e+(o-s/2),p=e+o;this.beginPath(),this.moveTo(h,u),this.bezierCurveTo(h,u+a,l+r,d,l,d),this.bezierCurveTo(l-r,d,t,u+a,t,u),this.bezierCurveTo(t,u-a,l-r,e,l,e),this.bezierCurveTo(l+r,e,h,u-a,h,u),this.lineTo(h,c),this.bezierCurveTo(h,c+a,l+r,p,l,p),this.bezierCurveTo(l-r,p,t,c+a,t,c),this.lineTo(t,u)},CanvasRenderingContext2D.prototype.dashedLine=function(t,e,i,o,n){this.beginPath(),this.moveTo(t,e);for(var s=n.length,r=i-t,a=o-e,h=a/r,d=Math.sqrt(r*r+a*a),l=0,u=!0,c=0,p=n[0];d>=.1;)p=n[l++%s],p>d&&(p=d),c=Math.sqrt(p*p/(1+h*h)),c=r<0?-c:c,t+=c,e+=h*c,!0===u?this.lineTo(t,e):this.moveTo(t,e),d-=p,u=!u},CanvasRenderingContext2D.prototype.hexagon=function(t,e,i){this.beginPath();var o=2*Math.PI/6;this.moveTo(t+i,e);for(var n=1;n<6;n++)this.lineTo(t+i*Math.cos(o*n),e+i*Math.sin(o*n));this.closePath()})},function(t,e,i){e.en={edit:"Edit",del:"Delete selected",back:"Back",addNode:"Add Node",addEdge:"Add Edge",editNode:"Edit Node",editEdge:"Edit Edge",addDescription:"Click in an empty space to place a new node.",edgeDescription:"Click on a node and drag the edge to another node to connect them.",editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",createEdgeError:"Cannot link edges to a cluster.",deleteClusterError:"Clusters cannot be deleted.",editClusterError:"Clusters cannot be edited."},e.en_EN=e.en,e.en_US=e.en,e.de={edit:"Editieren",del:"Lösche Auswahl",back:"Zurück",addNode:"Knoten hinzufügen",addEdge:"Kante hinzufügen",editNode:"Knoten editieren",editEdge:"Kante editieren",addDescription:"Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",edgeDescription:"Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",editEdgeDescription:"Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",createEdgeError:"Es ist nicht möglich, Kanten mit Clustern zu verbinden.",deleteClusterError:"Cluster können nicht gelöscht werden.",editClusterError:"Cluster können nicht editiert werden."},e.de_DE=e.de,e.es={edit:"Editar",del:"Eliminar selección",back:"Átras",addNode:"Añadir nodo",addEdge:"Añadir arista",editNode:"Editar nodo",editEdge:"Editar arista",addDescription:"Haga clic en un lugar vacío para colocar un nuevo nodo.",edgeDescription:"Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",editEdgeDescription:"Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",createEdgeError:"No se puede conectar una arista a un grupo.",deleteClusterError:"No es posible eliminar grupos.",editClusterError:"No es posible editar grupos."},e.es_ES=e.es,e.it={edit:"Modifica",del:"Cancella la selezione",back:"Indietro",addNode:"Aggiungi un nodo",addEdge:"Aggiungi un vertice",editNode:"Modifica il nodo",editEdge:"Modifica il vertice",addDescription:"Clicca per aggiungere un nuovo nodo",edgeDescription:"Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",editEdgeDescription:"Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",createEdgeError:"Non si possono collegare vertici ad un cluster",deleteClusterError:"I cluster non possono essere cancellati",editClusterError:"I clusters non possono essere modificati."},e.it_IT=e.it,e.nl={edit:"Wijzigen",del:"Selectie verwijderen",back:"Terug",addNode:"Node toevoegen",addEdge:"Link toevoegen",editNode:"Node wijzigen",editEdge:"Link wijzigen",addDescription:"Klik op een leeg gebied om een nieuwe node te maken.",edgeDescription:"Klik op een node en sleep de link naar een andere node om ze te verbinden.",editEdgeDescription:"Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",createEdgeError:"Kan geen link maken naar een cluster.",deleteClusterError:"Clusters kunnen niet worden verwijderd.",editClusterError:"Clusters kunnen niet worden aangepast."},e.nl_NL=e.nl,e.nl_BE=e.nl,e["pt-br"]={edit:"Editar",del:"Remover selecionado",back:"Voltar",addNode:"Adicionar nó",addEdge:"Adicionar aresta",editNode:"Editar nó",editEdge:"Editar aresta",addDescription:"Clique em um espaço em branco para adicionar um novo nó",edgeDescription:"Clique em um nó e arraste a aresta até outro nó para conectá-los",editEdgeDescription:"Clique nos pontos de controle e os arraste para um nó para conectá-los",createEdgeError:"Não foi possível linkar arestas a um cluster.",deleteClusterError:"Clusters não puderam ser removidos.",editClusterError:"Clusters não puderam ser editados."},e["pt-BR"]=e["pt-br"],e.pt_BR=e["pt-br"],e.pt_br=e["pt-br"],e.ru={edit:"Редактировать",del:"Удалить выбранное",back:"Назад",addNode:"Добавить узел",addEdge:"Добавить ребро",editNode:"Редактировать узел",editEdge:"Редактировать ребро",addDescription:"Кликните в свободное место, чтобы добавить новый узел.",edgeDescription:"Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",editEdgeDescription:"Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",createEdgeError:"Невозможно соединить ребра в кластер.",deleteClusterError:"Кластеры не могут быть удалены",editClusterError:"Кластеры недоступны для редактирования."},e.ru_RU=e.ru,e.cn={edit:"编辑",del:"删除选定",back:"返回",addNode:"添加节点",addEdge:"添加连接线",editNode:"编辑节点",editEdge:"编辑连接线",addDescription:"单击空白处放置新节点。",edgeDescription:"单击某个节点并将该连接线拖动到另一个节点以连接它们。",editEdgeDescription:"单击控制节点并将它们拖到节点上连接。",createEdgeError:"无法将连接线连接到群集。",deleteClusterError:"无法删除群集。",editClusterError:"无法编辑群集。"},e.zh_CN=e.cn},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=function(){function t(){(0,s.default)(this,t),this.NUM_ITERATIONS=4,this.image=new Image,this.canvas=document.createElement("canvas")}return(0,a.default)(t,[{key:"init",value:function(){if(!this.initialized()){this.src=this.image.src;var t=this.image.width,e=this.image.height;this.width=t,this.height=e;var i=Math.floor(e/2),o=Math.floor(e/4),n=Math.floor(e/8),s=Math.floor(e/16),r=Math.floor(t/2),a=Math.floor(t/4),h=Math.floor(t/8),d=Math.floor(t/16);this.canvas.width=3*a,this.canvas.height=i,this.coordinates=[[0,0,r,i],[r,0,a,o],[r,o,h,n],[5*h,o,d,s]],this._fillMipMap()}}},{key:"initialized",value:function(){return void 0!==this.coordinates}},{key:"_fillMipMap",value:function(){var t=this.canvas.getContext("2d"),e=this.coordinates[0];t.drawImage(this.image,e[0],e[1],e[2],e[3]);for(var i=1;i<this.NUM_ITERATIONS;i++){var o=this.coordinates[i-1],n=this.coordinates[i];t.drawImage(this.canvas,o[0],o[1],o[2],o[3],n[0],n[1],n[2],n[3])}}},{key:"drawImageAtPosition",value:function(t,e,i,o,n,s){if(this.initialized())if(e>2){e*=.5;for(var r=0;e>2&&r<this.NUM_ITERATIONS;)e*=.5,r+=1;r>=this.NUM_ITERATIONS&&(r=this.NUM_ITERATIONS-1);var a=this.coordinates[r];t.drawImage(this.canvas,a[0],a[1],a[2],a[3],i,o,n,s)}else t.drawImage(this.image,i,o,n,s)}}]),t}();e.default=h},function(t,e,i){
function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(2),d=function(){function t(){(0,s.default)(this,t),this.clear(),this.defaultIndex=0,this.groupsArray=[],this.groupIndex=0,this.defaultGroups=[{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},{border:"#FFA500",background:"#FFFF00",highlight:{border:"#FFA500",background:"#FFFFA3"},hover:{border:"#FFA500",background:"#FFFFA3"}},{border:"#FA0A10",background:"#FB7E81",highlight:{border:"#FA0A10",background:"#FFAFB1"},hover:{border:"#FA0A10",background:"#FFAFB1"}},{border:"#41A906",background:"#7BE141",highlight:{border:"#41A906",background:"#A1EC76"},hover:{border:"#41A906",background:"#A1EC76"}},{border:"#E129F0",background:"#EB7DF4",highlight:{border:"#E129F0",background:"#F0B3F5"},hover:{border:"#E129F0",background:"#F0B3F5"}},{border:"#7C29F0",background:"#AD85E4",highlight:{border:"#7C29F0",background:"#D3BDF0"},hover:{border:"#7C29F0",background:"#D3BDF0"}},{border:"#C37F00",background:"#FFA807",highlight:{border:"#C37F00",background:"#FFCA66"},hover:{border:"#C37F00",background:"#FFCA66"}},{border:"#4220FB",background:"#6E6EFD",highlight:{border:"#4220FB",background:"#9B9BFD"},hover:{border:"#4220FB",background:"#9B9BFD"}},{border:"#FD5A77",background:"#FFC0CB",highlight:{border:"#FD5A77",background:"#FFD1D9"},hover:{border:"#FD5A77",background:"#FFD1D9"}},{border:"#4AD63A",background:"#C2FABC",highlight:{border:"#4AD63A",background:"#E6FFE3"},hover:{border:"#4AD63A",background:"#E6FFE3"}},{border:"#990000",background:"#EE0000",highlight:{border:"#BB0000",background:"#FF3333"},hover:{border:"#BB0000",background:"#FF3333"}},{border:"#FF6000",background:"#FF6000",highlight:{border:"#FF6000",background:"#FF6000"},hover:{border:"#FF6000",background:"#FF6000"}},{border:"#97C2FC",background:"#2B7CE9",highlight:{border:"#D2E5FF",background:"#2B7CE9"},hover:{border:"#D2E5FF",background:"#2B7CE9"}},{border:"#399605",background:"#255C03",highlight:{border:"#399605",background:"#255C03"},hover:{border:"#399605",background:"#255C03"}},{border:"#B70054",background:"#FF007E",highlight:{border:"#B70054",background:"#FF007E"},hover:{border:"#B70054",background:"#FF007E"}},{border:"#AD85E4",background:"#7C29F0",highlight:{border:"#D3BDF0",background:"#7C29F0"},hover:{border:"#D3BDF0",background:"#7C29F0"}},{border:"#4557FA",background:"#000EA1",highlight:{border:"#6E6EFD",background:"#000EA1"},hover:{border:"#6E6EFD",background:"#000EA1"}},{border:"#FFC0CB",background:"#FD5A77",highlight:{border:"#FFD1D9",background:"#FD5A77"},hover:{border:"#FFD1D9",background:"#FD5A77"}},{border:"#C2FABC",background:"#74D66A",highlight:{border:"#E6FFE3",background:"#74D66A"},hover:{border:"#E6FFE3",background:"#74D66A"}},{border:"#EE0000",background:"#990000",highlight:{border:"#FF3333",background:"#BB0000"},hover:{border:"#FF3333",background:"#BB0000"}}],this.options={},this.defaultOptions={useDefaultGroups:!0},h.extend(this.options,this.defaultOptions)}return(0,a.default)(t,[{key:"setOptions",value:function(t){var e=["useDefaultGroups"];if(void 0!==t)for(var i in t)if(t.hasOwnProperty(i)&&-1===e.indexOf(i)){var o=t[i];this.add(i,o)}}},{key:"clear",value:function(){this.groups={},this.groupsArray=[]}},{key:"get",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.groups[t];if(void 0===i&&e)if(!1===this.options.useDefaultGroups&&this.groupsArray.length>0){var o=this.groupIndex%this.groupsArray.length;this.groupIndex++,i={},i.color=this.groups[this.groupsArray[o]],this.groups[t]=i}else{var n=this.defaultIndex%this.defaultGroups.length;this.defaultIndex++,i={},i.color=this.defaultGroups[n],this.groups[t]=i}return i}},{key:"add",value:function(t,e){return this.groups[t]=e,this.groupsArray.push(t),e}}]),t}();e.default=d},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(2),d=i(11),l=i(12),u=i(47).default,c=function(){function t(e,i,o,n){var r=this;if((0,s.default)(this,t),this.body=e,this.images=i,this.groups=o,this.layoutEngine=n,this.body.functions.createNode=this.create.bind(this),this.nodesListeners={add:function(t,e){r.add(e.items)},update:function(t,e){r.update(e.items,e.data,e.oldData)},remove:function(t,e){r.remove(e.items)}},this.defaultOptions={borderWidth:1,borderWidthSelected:2,brokenImage:void 0,color:{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},fixed:{x:!1,y:!1},font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:0,strokeColor:"#ffffff",align:"center",vadjust:0,multi:!1,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"monospace",vadjust:2}},group:void 0,hidden:!1,icon:{face:"FontAwesome",code:void 0,size:50,color:"#2B7CE9"},image:void 0,label:void 0,labelHighlightBold:!0,level:void 0,margin:{top:5,right:5,bottom:5,left:5},mass:1,physics:!0,scaling:{min:10,max:30,label:{enabled:!1,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,o){if(e===t)return.5;var n=1/(e-t);return Math.max(0,(o-t)*n)}},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},shape:"ellipse",shapeProperties:{borderDashes:!1,borderRadius:6,interpolation:!0,useImageSize:!1,useBorderWithImage:!1},size:25,title:void 0,value:void 0,x:void 0,y:void 0},this.defaultOptions.mass<=0)throw"Internal error: mass in defaultOptions of NodesHandler may not be zero or negative";this.options=h.bridgeObject(this.defaultOptions),this.bindEventListeners()}return(0,a.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("refreshNodes",this.refresh.bind(this)),this.body.emitter.on("refresh",this.refresh.bind(this)),this.body.emitter.on("destroy",function(){h.forEach(t.nodesListeners,function(e,i){t.body.data.nodes&&t.body.data.nodes.off(i,e)}),delete t.body.functions.createNode,delete t.nodesListeners.add,delete t.nodesListeners.update,delete t.nodesListeners.remove,delete t.nodesListeners})}},{key:"setOptions",value:function(t){if(void 0!==t){if(u.parseOptions(this.options,t),void 0!==t.shape)for(var e in this.body.nodes)this.body.nodes.hasOwnProperty(e)&&this.body.nodes[e].updateShape();if(void 0!==t.font)for(var i in this.body.nodes)this.body.nodes.hasOwnProperty(i)&&(this.body.nodes[i].updateLabelModule(),this.body.nodes[i].needsRefresh());if(void 0!==t.size)for(var o in this.body.nodes)this.body.nodes.hasOwnProperty(o)&&this.body.nodes[o].needsRefresh();void 0===t.hidden&&void 0===t.physics||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.body.data.nodes;if(t instanceof d||t instanceof l)this.body.data.nodes=t;else if(Array.isArray(t))this.body.data.nodes=new d,this.body.data.nodes.add(t);else{if(t)throw new TypeError("Array or DataSet expected");this.body.data.nodes=new d}if(i&&h.forEach(this.nodesListeners,function(t,e){i.off(e,t)}),this.body.nodes={},this.body.data.nodes){var o=this;h.forEach(this.nodesListeners,function(t,e){o.body.data.nodes.on(e,t)});var n=this.body.data.nodes.getIds();this.add(n,!0)}!1===e&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=void 0,o=[],n=0;n<t.length;n++){i=t[n];var s=this.body.data.nodes.get(i),r=this.create(s);o.push(r),this.body.nodes[i]=r}this.layoutEngine.positionInitially(o),!1===e&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(t,e,i){for(var o=this.body.nodes,n=!1,s=0;s<t.length;s++){var r=t[s],a=o[r],h=e[s];void 0!==a?a.setOptions(h)&&(n=!0):(n=!0,a=this.create(h),o[r]=a)}n||void 0===i||(n=e.some(function(t,e){var o=i[e];return o&&o.level!==t.level})),!0===n?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(t){for(var e=this.body.nodes,i=0;i<t.length;i++){delete e[t[i]]}this.body.emitter.emit("_dataChanged")}},{key:"create",value:function(t){return new(arguments.length>1&&void 0!==arguments[1]?arguments[1]:u)(t,this.body,this.images,this.groups,this.options,this.defaultOptions)}},{key:"refresh",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];h.forEach(this.body.nodes,function(i,o){var n=t.body.data.nodes.get(o);void 0!==n&&(!0===e&&i.setOptions({x:null,y:null}),i.setOptions({fixed:!1}),i.setOptions(n))})}},{key:"getPositions",value:function(t){var e={};if(void 0!==t){if(!0===Array.isArray(t)){for(var i=0;i<t.length;i++)if(void 0!==this.body.nodes[t[i]]){var o=this.body.nodes[t[i]];e[t[i]]={x:Math.round(o.x),y:Math.round(o.y)}}}else if(void 0!==this.body.nodes[t]){var n=this.body.nodes[t];e[t]={x:Math.round(n.x),y:Math.round(n.y)}}}else for(var s=0;s<this.body.nodeIndices.length;s++){var r=this.body.nodes[this.body.nodeIndices[s]];e[this.body.nodeIndices[s]]={x:Math.round(r.x),y:Math.round(r.y)}}return e}},{key:"storePositions",value:function(){var t=[],e=this.body.data.nodes.getDataSet();for(var i in e._data)if(e._data.hasOwnProperty(i)){var o=this.body.nodes[i];e._data[i].x==Math.round(o.x)&&e._data[i].y==Math.round(o.y)||t.push({id:o.id,x:Math.round(o.x),y:Math.round(o.y)})}e.update(t)}},{key:"getBoundingBox",value:function(t){if(void 0!==this.body.nodes[t])return this.body.nodes[t].shape.boundingBox}},{key:"getConnectedNodes",value:function(t,e){var i=[];if(void 0!==this.body.nodes[t])for(var o=this.body.nodes[t],n={},s=0;s<o.edges.length;s++){var r=o.edges[s];"to"!==e&&r.toId==o.id?void 0===n[r.fromId]&&(i.push(r.fromId),n[r.fromId]=!0):"from"!==e&&r.fromId==o.id&&void 0===n[r.toId]&&(i.push(r.toId),n[r.toId]=!0)}return i}},{key:"getConnectedEdges",value:function(t){var e=[];if(void 0!==this.body.nodes[t])for(var i=this.body.nodes[t],o=0;o<i.edges.length;o++)e.push(i.edges[o].id);else console.log("NodeId provided for getConnectedEdges does not exist. Provided: ",t);return e}},{key:"moveNode",value:function(t,e,i){var o=this;void 0!==this.body.nodes[t]?(this.body.nodes[t].x=Number(e),this.body.nodes[t].y=Number(i),setTimeout(function(){o.body.emitter.emit("startSimulation")},0)):console.log("Node id supplied to moveNode does not exist. Provided: ",t)}}]),t}();e.default=c},function(t,e,i){t.exports={default:i(189),__esModule:!0}},function(t,e,i){i(49),i(60),t.exports=i(190)},function(t,e,i){var o=i(86),n=i(13)("iterator"),s=i(31);t.exports=i(7).isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||s.hasOwnProperty(o(e))}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(192).default,d=i(48).default,l=function(){function t(e,i,o,n){var r=this;(0,s.default)(this,t),this.ctx=e,this.parent=i;var a=function(t,i){if(void 0===t)return 0;var s=r.parent.getFormattingValues(e,o,n,i),a=0;if(""!==t){a=r.ctx.measureText(t).width}return{width:a,values:s}};this.lines=new h(a)}return(0,a.default)(t,[{key:"process",value:function(t){if(!d.isValidLabel(t))return this.lines.finalize();var e=this.parent.fontOptions;t=t.replace(/\r\n/g,"\n"),t=t.replace(/\r/g,"\n");var i=String(t).split("\n"),o=i.length;if(e.multi)for(var n=0;n<o;n++){var s=this.splitBlocks(i[n],e.multi);if(void 0!==s)if(0!==s.length){if(e.maxWdt>0)for(var r=0;r<s.length;r++){var a=s[r].mod,h=s[r].text;this.splitStringIntoLines(h,a,!0)}else for(var l=0;l<s.length;l++){var u=s[l].mod,c=s[l].text;this.lines.append(c,u)}this.lines.newLine()}else this.lines.newLine("")}else if(e.maxWdt>0)for(var p=0;p<o;p++)this.splitStringIntoLines(i[p]);else for(var f=0;f<o;f++)this.lines.newLine(i[f]);return this.lines.finalize()}},{key:"decodeMarkupSystem",value:function(t){var e="none";return"markdown"===t||"md"===t?e="markdown":!0!==t&&"html"!==t||(e="html"),e}},{key:"splitHtmlBlocks",value:function(t){var e=[],i={bold:!1,ital:!1,mono:!1,spacing:!1,position:0,buffer:"",modStack:[]};for(i.mod=function(){return 0===this.modStack.length?"normal":this.modStack[0]},i.modName=function(){return 0===this.modStack.length?"normal":"mono"===this.modStack[0]?"mono":i.bold&&i.ital?"boldital":i.bold?"bold":i.ital?"ital":void 0},i.emitBlock=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.spacing&&(this.add(" "),this.spacing=!1),this.buffer.length>0&&(e.push({text:this.buffer,mod:this.modName()}),this.buffer="")},i.add=function(t){" "===t&&(i.spacing=!0),i.spacing&&(this.buffer+=" ",this.spacing=!1)," "!=t&&(this.buffer+=t)};i.position<t.length;){var o=t.charAt(i.position);/[ \t]/.test(o)?i.mono?i.add(o):i.spacing=!0:/</.test(o)?i.mono||i.bold||!/<b>/.test(t.substr(i.position,3))?i.mono||i.ital||!/<i>/.test(t.substr(i.position,3))?!i.mono&&/<code>/.test(t.substr(i.position,6))?(i.emitBlock(),i.mono=!0,i.modStack.unshift("mono"),i.position+=5):!i.mono&&"bold"===i.mod()&&/<\/b>/.test(t.substr(i.position,4))?(i.emitBlock(),i.bold=!1,i.modStack.shift(),i.position+=3):!i.mono&&"ital"===i.mod()&&/<\/i>/.test(t.substr(i.position,4))?(i.emitBlock(),i.ital=!1,i.modStack.shift(),i.position+=3):"mono"===i.mod()&&/<\/code>/.test(t.substr(i.position,7))?(i.emitBlock(),i.mono=!1,i.modStack.shift(),i.position+=6):i.add(o):(i.emitBlock(),i.ital=!0,i.modStack.unshift("ital"),i.position+=2):(i.emitBlock(),i.bold=!0,i.modStack.unshift("bold"),i.position+=2):/&/.test(o)?/&lt;/.test(t.substr(i.position,4))?(i.add("<"),i.position+=3):/&amp;/.test(t.substr(i.position,5))?(i.add("&"),i.position+=4):i.add("&"):i.add(o),i.position++}return i.emitBlock(),e}},{key:"splitMarkdownBlocks",value:function(t){var e=[],i={bold:!1,ital:!1,mono:!1,beginable:!0,spacing:!1,position:0,buffer:"",modStack:[]};for(i.mod=function(){return 0===this.modStack.length?"normal":this.modStack[0]},i.modName=function(){return 0===this.modStack.length?"normal":"mono"===this.modStack[0]?"mono":i.bold&&i.ital?"boldital":i.bold?"bold":i.ital?"ital":void 0},i.emitBlock=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.spacing&&(this.add(" "),this.spacing=!1),this.buffer.length>0&&(e.push({text:this.buffer,mod:this.modName()}),this.buffer="")},i.add=function(t){" "===t&&(i.spacing=!0),i.spacing&&(this.buffer+=" ",this.spacing=!1)," "!=t&&(this.buffer+=t)};i.position<t.length;){var o=t.charAt(i.position);/[ \t]/.test(o)?(i.mono?i.add(o):i.spacing=!0,i.beginable=!0):/\\/.test(o)?i.position<t.length+1&&(i.position++,o=t.charAt(i.position),/ \t/.test(o)?i.spacing=!0:(i.add(o),i.beginable=!1)):i.mono||i.bold||!i.beginable&&!i.spacing||!/\*/.test(o)?i.mono||i.ital||!i.beginable&&!i.spacing||!/\_/.test(o)?!i.mono&&(i.beginable||i.spacing)&&/`/.test(o)?(i.emitBlock(),i.mono=!0,i.modStack.unshift("mono")):!i.mono&&"bold"===i.mod()&&/\*/.test(o)?i.position===t.length-1||/[.,_` \t\n]/.test(t.charAt(i.position+1))?(i.emitBlock(),i.bold=!1,i.modStack.shift()):i.add(o):!i.mono&&"ital"===i.mod()&&/\_/.test(o)?i.position===t.length-1||/[.,*` \t\n]/.test(t.charAt(i.position+1))?(i.emitBlock(),i.ital=!1,i.modStack.shift()):i.add(o):i.mono&&"mono"===i.mod()&&/`/.test(o)?i.position===t.length-1||/[.,*_ \t\n]/.test(t.charAt(i.position+1))?(i.emitBlock(),i.mono=!1,i.modStack.shift()):i.add(o):(i.add(o),i.beginable=!1):(i.emitBlock(),i.ital=!0,i.modStack.unshift("ital")):(i.emitBlock(),i.bold=!0,i.modStack.unshift("bold")),i.position++}return i.emitBlock(),e}},{key:"splitBlocks",value:function(t,e){var i=this.decodeMarkupSystem(e);return"none"===i?[{text:t,mod:"normal"}]:"markdown"===i?this.splitMarkdownBlocks(t):"html"===i?this.splitHtmlBlocks(t):void 0}},{key:"overMaxWidth",value:function(t){var e=this.ctx.measureText(t).width;return this.lines.curWidth()+e>this.parent.fontOptions.maxWdt}},{key:"getLongestFit",value:function(t){for(var e="",i=0;i<t.length;){var o=""===e?"":" ",n=e+o+t[i];if(this.overMaxWidth(n))break;e=n,i++}return i}},{key:"getLongestFitWord",value:function(t){for(var e=0;e<t.length&&!this.overMaxWidth(t.slice(0,e));)e++;return e}},{key:"splitStringIntoLines",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t=t.replace(/^( +)/g,"$1\r"),t=t.replace(/([^\r][^ ]*)( +)/g,"$1\r$2\r");for(var o=t.split("\r");o.length>0;){var n=this.getLongestFit(o);if(0===n){var s=o[0],r=this.getLongestFitWord(s);this.lines.newLine(s.slice(0,r),e),o[0]=s.slice(r)}else{var a=n;" "===o[n-1]?n--:" "===o[a]&&a++;var h=o.slice(0,n).join("");n==o.length&&i?this.lines.append(h,e):this.lines.newLine(h,e),o=o.slice(a)}}}}]),t}();e.default=l},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(90),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=function(){function t(e){(0,a.default)(this,t),this.measureText=e,this.current=0,this.width=0,this.height=0,this.lines=[]}return(0,d.default)(t,[{key:"_add",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";void 0===this.lines[t]&&(this.lines[t]={width:0,height:0,blocks:[]});var o=e;void 0!==e&&""!==e||(o=" ");var n=this.measureText(o,i),r=(0,s.default)({},n.values);r.text=e,r.width=n.width,r.mod=i,void 0!==e&&""!==e||(r.width=0),this.lines[t].blocks.push(r),this.lines[t].width+=r.width}},{key:"curWidth",value:function(){var t=this.lines[this.current];return void 0===t?0:t.width}},{key:"append",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";this._add(this.current,t,e)}},{key:"newLine",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";this._add(this.current,t,e),this.current++}},{key:"determineLineHeights",value:function(){for(var t=0;t<this.lines.length;t++){var e=this.lines[t],i=0;if(void 0!==e.blocks)for(var o=0;o<e.blocks.length;o++){var n=e.blocks[o];i<n.height&&(i=n.height)}e.height=i}}},{key:"determineLabelSize",value:function(){for(var t=0,e=0,i=0;i<this.lines.length;i++){var o=this.lines[i];o.width>t&&(t=o.width),e+=o.height}this.width=t,this.height=e}},{key:"removeEmptyBlocks",value:function(){for(var t=[],e=0;e<this.lines.length;e++){var i=this.lines[e];if(0!==i.blocks.length&&(e!==this.lines.length-1||0!==i.width)){var o={};(0,s.default)(o,i),o.blocks=[];for(var n=void 0,r=[],a=0;a<i.blocks.length;a++){var h=i.blocks[a];0!==h.width?r.push(h):void 0===n&&(n=h)}0===r.length&&void 0!==n&&r.push(n),o.blocks=r,t.push(o)}}return t}},{key:"finalize",value:function(){this.determineLineHeights(),this.determineLabelSize();var t=this.removeEmptyBlocks();return{width:this.width,height:this.height,lines:t}}}]),t}();e.default=l},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(23),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n._setMargins(o),n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i);this.width=o.width+this.margin.right+this.margin.left,this.height=o.height+this.margin.top+this.margin.bottom,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,s){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this.initContextForDraw(t,s),t.roundRect(this.left,this.top,this.width,this.height,s.borderRadius),this.performFill(t,s),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n)}},{key:"updateBoundingBox",value:function(t,e,i,o,n){this._updateBoundingBox(t,e,i,o,n);var s=this.options.shapeProperties.borderRadius;this._addBoundingBoxMargin(s)}},{key:"distanceToBorder",value:function(t,e){this.resize(t);var i=this.options.borderWidth;return Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}}]),e}(m.default);e.default=v},function(t,e,i){i(195),t.exports=i(7).Object.getPrototypeOf},function(t,e,i){var o=i(41),n=i(85);i(87)("getPrototypeOf",function(){return function(t){return n(o(t))}})},function(t,e,i){t.exports={default:i(197),__esModule:!0}},function(t,e,i){i(198),t.exports=i(7).Object.setPrototypeOf},function(t,e,i){var o=i(17);o(o.S,"Object",{setPrototypeOf:i(199).set})},function(t,e,i){var o=i(32),n=i(27),s=function(t,e){if(n(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=i(80)(Function.call,i(89).f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,i){return s(t,i),e?t.__proto__=i:o(t,i),t}}({},!1):void 0),check:s}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(73),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n._setMargins(o),n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i),n=Math.max(o.width+this.margin.right+this.margin.left,o.height+this.margin.top+this.margin.bottom);this.options.size=n/2,this.width=n,this.height=n,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,s){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this._drawRawCircle(t,e,i,s),this.updateBoundingBox(e,i),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,i,o,n)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size}},{key:"distanceToBorder",value:function(t,e){return this.resize(t),.5*this.width}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(73),m=o(f),v=function(t){function e(t,i,o,n,r){(0,a.default)(this,e);var h=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return h.setImages(n,r),h}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height){var o=2*this.options.size;return this.width=o,this.height=o,void(this.radius=.5*this.width)}this.needsRefresh(e,i)&&this._resizeImage()}},{key:"draw",value:function(t,e,i,o,n,s){this.switchImages(o),this.resize(),this.left=e-this.width/2,this.top=i-this.height/2,this._drawRawCircle(t,e,i,s),t.save(),t.clip(),this._drawImageAtPosition(t,s),t.restore(),this._drawImageLabel(t,e,i,o,n),this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size,this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)}},{key:"distanceToBorder",value:function(t,e){return this.resize(t),.5*this.width}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(23),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n._setMargins(o),n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t,e,i){if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i),n=o.width+this.margin.right+this.margin.left;this.width=n,this.height=n,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,s){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this.initContextForDraw(t,s),t.database(e-this.width/2,i-this.height/2,this.width,this.height),this.performFill(t,s),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(24),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"diamond",4,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(24),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"circle",2,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this.resize(t),this.options.size}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(23),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i);this.height=2*o.height,this.width=o.width+o.height,this.radius=.5*this.width}}},{key:"draw",value:function(t,e,i,o,n,s){this.resize(t,o,n),this.left=e-.5*this.width,this.top=i-.5*this.height,this.initContextForDraw(t,s),t.ellipse_vis(this.left,this.top,this.width,this.height),this.performFill(t,s),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,e,i,o,n)}},{key:"distanceToBorder",value:function(t,e){this.resize(t);var i=.5*this.width,o=.5*this.height,n=Math.sin(e)*i,s=Math.cos(e)*o;return i*o/Math.sqrt(n*n+s*s)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(23),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n._setMargins(o),n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t,e,i){this.needsRefresh(e,i)&&(this.iconSize={width:Number(this.options.icon.size),height:Number(this.options.icon.size)},this.width=this.iconSize.width+this.margin.right+this.margin.left,this.height=this.iconSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(t,e,i,o,n,s){if(this.resize(t,o,n),this.options.icon.size=this.options.icon.size||50,this.left=e-this.width/2,this.top=i-this.height/2,this._icon(t,e,i,o,n,s),void 0!==this.options.label){this.labelModule.draw(t,this.left+this.iconSize.width/2+this.margin.left,i+this.height/2+5,o)}this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){if(this.boundingBox.top=e-.5*this.options.icon.size,this.boundingBox.left=t-.5*this.options.icon.size,this.boundingBox.right=t+.5*this.options.icon.size,this.boundingBox.bottom=e+.5*this.options.icon.size,void 0!==this.options.label&&this.labelModule.size.width>0){this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+5)}}},{key:"_icon",value:function(t,e,i,o,n,s){var r=Number(this.options.icon.size);void 0!==this.options.icon.code?(t.font=(o?"bold ":"")+r+"px "+this.options.icon.face,t.fillStyle=this.options.icon.color||"black",t.textAlign="center",t.textBaseline="middle",this.enableShadow(t,s),t.fillText(this.options.icon.code,e,i),this.disableShadow(t,s)):console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.")}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(73),m=o(f),v=function(t){function e(t,i,o,n,r){(0,a.default)(this,e);var h=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return h.setImages(n,r),h}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height){var o=2*this.options.size;return this.width=o,void(this.height=o)}this.needsRefresh(e,i)&&this._resizeImage()}},{key:"draw",value:function(t,e,i,o,n,s){if(this.switchImages(o),this.resize(),this.left=e-this.width/2,this.top=i-this.height/2,!0===this.options.shapeProperties.useBorderWithImage){var r=this.options.borderWidth,a=this.options.borderWidthSelected||2*this.options.borderWidth,h=(o?a:r)/this.body.view.scale;t.lineWidth=Math.min(this.width,h),t.beginPath(),t.strokeStyle=o?this.options.color.highlight.border:n?this.options.color.hover.border:this.options.color.border,t.fillStyle=o?this.options.color.highlight.background:n?this.options.color.hover.background:this.options.color.background,t.rect(this.left-.5*t.lineWidth,this.top-.5*t.lineWidth,this.width+t.lineWidth,this.height+t.lineWidth),t.fill(),this.performStroke(t,s),t.closePath()}this._drawImageAtPosition(t,s),this._drawImageLabel(t,e,i,o,n),this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){this.resize(),this._updateBoundingBox(t,e),void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset))}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}
}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(24),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"square",2,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(24),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"hexagon",4,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(24),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"star",4,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(23),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n._setMargins(o),n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t,e,i){this.needsRefresh(e,i)&&(this.textSize=this.labelModule.getTextSize(t,e,i),this.width=this.textSize.width+this.margin.right+this.margin.left,this.height=this.textSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(t,e,i,o,n,s){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this.enableShadow(t,s),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n),this.disableShadow(t,s),this.updateBoundingBox(e,i,t,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(24),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"triangle",3,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(24),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"triangleDown",3,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(2),d=i(11),l=i(12),u=i(74).default,c=function(){function t(e,i,o){var n=this;(0,s.default)(this,t),this.body=e,this.images=i,this.groups=o,this.body.functions.createEdge=this.create.bind(this),this.edgesListeners={add:function(t,e){n.add(e.items)},update:function(t,e){n.update(e.items)},remove:function(t,e){n.remove(e.items)}},this.options={},this.defaultOptions={arrows:{to:{enabled:!1,scaleFactor:1,type:"arrow"},middle:{enabled:!1,scaleFactor:1,type:"arrow"},from:{enabled:!1,scaleFactor:1,type:"arrow"}},arrowStrikethrough:!0,color:{color:"#848484",highlight:"#848484",hover:"#848484",inherit:"from",opacity:1},dashes:!1,font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:2,strokeColor:"#ffffff",align:"horizontal",multi:!1,vadjust:0,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"courier new",vadjust:2}},hidden:!1,hoverWidth:1.5,label:void 0,labelHighlightBold:!0,length:void 0,physics:!0,scaling:{min:1,max:15,label:{enabled:!0,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,o){if(e===t)return.5;var n=1/(e-t);return Math.max(0,(o-t)*n)}},selectionWidth:1.5,selfReferenceSize:20,shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},smooth:{enabled:!0,type:"dynamic",forceDirection:"none",roundness:.5},title:void 0,width:1,value:void 0},h.deepExtend(this.options,this.defaultOptions),this.bindEventListeners()}return(0,a.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("_forceDisableDynamicCurves",function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];"dynamic"===e&&(e="continuous");var o=!1;for(var n in t.body.edges)if(t.body.edges.hasOwnProperty(n)){var s=t.body.edges[n],r=t.body.data.edges._data[n];if(void 0!==r){var a=r.smooth;void 0!==a&&!0===a.enabled&&"dynamic"===a.type&&(void 0===e?s.setOptions({smooth:!1}):s.setOptions({smooth:{type:e}}),o=!0)}}!0===i&&!0===o&&t.body.emitter.emit("_dataChanged")}),this.body.emitter.on("_dataUpdated",function(){t.reconnectEdges()}),this.body.emitter.on("refreshEdges",this.refresh.bind(this)),this.body.emitter.on("refresh",this.refresh.bind(this)),this.body.emitter.on("destroy",function(){h.forEach(t.edgesListeners,function(e,i){t.body.data.edges&&t.body.data.edges.off(i,e)}),delete t.body.functions.createEdge,delete t.edgesListeners.add,delete t.edgesListeners.update,delete t.edgesListeners.remove,delete t.edgesListeners})}},{key:"setOptions",value:function(t){if(void 0!==t){u.parseOptions(this.options,t,!0,this.defaultOptions,!0);var e=!1;if(void 0!==t.smooth)for(var i in this.body.edges)this.body.edges.hasOwnProperty(i)&&(e=this.body.edges[i].updateEdgeType()||e);if(void 0!==t.font)for(var o in this.body.edges)this.body.edges.hasOwnProperty(o)&&this.body.edges[o].updateLabelModule();void 0===t.hidden&&void 0===t.physics&&!0!==e||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.body.data.edges;if(t instanceof d||t instanceof l)this.body.data.edges=t;else if(Array.isArray(t))this.body.data.edges=new d,this.body.data.edges.add(t);else{if(t)throw new TypeError("Array or DataSet expected");this.body.data.edges=new d}if(o&&h.forEach(this.edgesListeners,function(t,e){o.off(e,t)}),this.body.edges={},this.body.data.edges){h.forEach(this.edgesListeners,function(t,i){e.body.data.edges.on(i,t)});var n=this.body.data.edges.getIds();this.add(n,!0)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===i&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.body.edges,o=this.body.data.edges,n=0;n<t.length;n++){var s=t[n],r=i[s];r&&r.disconnect();var a=o.get(s,{showInternalIds:!0});i[s]=this.create(a)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===e&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(t){for(var e=this.body.edges,i=this.body.data.edges,o=!1,n=0;n<t.length;n++){var s=t[n],r=i.get(s),a=e[s];void 0!==a?(a.disconnect(),o=a.setOptions(r)||o,a.connect()):(this.body.edges[s]=this.create(r),o=!0)}!0===o?(this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),this.body.emitter.emit("_dataChanged")):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(0!==t.length){var i=this.body.edges;h.forEach(t,function(t){var e=i[t];void 0!==e&&e.remove()}),e&&this.body.emitter.emit("_dataChanged")}}},{key:"refresh",value:function(){var t=this;h.forEach(this.body.edges,function(e,i){var o=t.body.data.edges._data[i];void 0!==o&&e.setOptions(o)})}},{key:"create",value:function(t){return new u(t,this.body,this.options,this.defaultOptions)}},{key:"reconnectEdges",value:function(){var t,e=this.body.nodes,i=this.body.edges;for(t in e)e.hasOwnProperty(t)&&(e[t].edges=[]);for(t in i)if(i.hasOwnProperty(t)){var o=i[t];o.from=null,o.to=null,o.connect()}}},{key:"getConnectedNodes",value:function(t){var e=[];if(void 0!==this.body.edges[t]){var i=this.body.edges[t];void 0!==i.fromId&&e.push(i.fromId),void 0!==i.toId&&e.push(i.toId)}return e}},{key:"_updateState",value:function(){this._addMissingEdges(),this._removeInvalidEdges()}},{key:"_removeInvalidEdges",value:function(){var t=this,e=[];h.forEach(this.body.edges,function(i,o){var n=t.body.nodes[i.toId],s=t.body.nodes[i.fromId];void 0!==n&&!0===n.isCluster||void 0!==s&&!0===s.isCluster||void 0!==n&&void 0!==s||e.push(o)}),this.remove(e,!1)}},{key:"_addMissingEdges",value:function(){var t=this.body.edges,e=this.body.data.edges,i=[];e.forEach(function(e,o){void 0===t[o]&&i.push(o)}),this.add(i,!0)}}]),t}();e.default=c},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(30),s=o(n),r=i(3),a=o(r),h=i(0),d=o(h),l=i(1),u=o(l),c=i(4),p=o(c),f=i(5),m=o(f),v=i(216),g=o(v),y=function(t){function e(t,i,o){return(0,d.default)(this,e),(0,p.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t,i,o))}return(0,m.default)(e,t),(0,u.default)(e,[{key:"_line",value:function(t,e,i){var o=i[0],n=i[1];this._bezierCurve(t,e,o,n)}},{key:"_getViaCoordinates",value:function(){var t=this.from.x-this.to.x,e=this.from.y-this.to.y,i=void 0,o=void 0,n=void 0,s=void 0,r=this.options.smooth.roundness;return(Math.abs(t)>Math.abs(e)||!0===this.options.smooth.forceDirection||"horizontal"===this.options.smooth.forceDirection)&&"vertical"!==this.options.smooth.forceDirection?(o=this.from.y,s=this.to.y,i=this.from.x-r*t,n=this.to.x+r*t):(o=this.from.y-r*e,s=this.to.y+r*e,i=this.from.x,n=this.to.x),[{x:i,y:o},{x:n,y:s}]}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_findBorderPosition",value:function(t,e){return this._findBorderPositionBezier(t,e)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,r){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates(),h=(0,s.default)(a,2),d=h[0],l=h[1];return this._getDistanceToBezierEdge(t,e,i,o,n,r,d,l)}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=(0,s.default)(e,2),o=i[0],n=i[1],r=t,a=[];return a[0]=Math.pow(1-r,3),a[1]=3*r*Math.pow(1-r,2),a[2]=3*Math.pow(r,2)*(1-r),a[3]=Math.pow(r,3),{x:a[0]*this.fromPoint.x+a[1]*o.x+a[2]*n.x+a[3]*this.toPoint.x,y:a[0]*this.fromPoint.y+a[1]*o.y+a[2]*n.y+a[3]*this.toPoint.y}}}]),e}(g.default);e.default=y},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(75),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_getDistanceToBezierEdge",value:function(t,e,i,o,n,s,r,a){var h=1e9,d=void 0,l=void 0,u=void 0,c=void 0,p=void 0,f=t,m=e,v=[0,0,0,0];for(l=1;l<10;l++)u=.1*l,v[0]=Math.pow(1-u,3),v[1]=3*u*Math.pow(1-u,2),v[2]=3*Math.pow(u,2)*(1-u),v[3]=Math.pow(u,3),c=v[0]*t+v[1]*r.x+v[2]*a.x+v[3]*i,p=v[0]*e+v[1]*r.y+v[2]*a.y+v[3]*o,l>0&&(d=this._getDistanceToLine(f,m,c,p,n,s),h=d<h?d:h),f=c,m=p;return h}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(30),s=o(n),r=i(3),a=o(r),h=i(0),d=o(h),l=i(1),u=o(l),c=i(4),p=o(c),f=i(5),m=o(f),v=i(75),g=o(v),y=function(t){function e(t,i,o){(0,d.default)(this,e);var n=(0,p.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t,i,o));return n._boundFunction=function(){n.positionBezierNode()},n.body.emitter.on("_repositionBezierNodes",n._boundFunction),n}return(0,m.default)(e,t),(0,u.default)(e,[{key:"setOptions",value:function(t){var e=!1;this.options.physics!==t.physics&&(e=!0),this.options=t,this.id=this.options.id,this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to],this.setupSupportNode(),this.connect(),!0===e&&(this.via.setOptions({physics:this.options.physics}),this.positionBezierNode())}},{key:"connect",value:function(){this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to],void 0===this.from||void 0===this.to||!1===this.options.physics?this.via.setOptions({physics:!1}):this.from.id===this.to.id?this.via.setOptions({physics:!1}):this.via.setOptions({physics:!0})}},{key:"cleanup",value:function(){return this.body.emitter.off("_repositionBezierNodes",this._boundFunction),void 0!==this.via&&(delete this.body.nodes[this.via.id],this.via=void 0,!0)}},{key:"setupSupportNode",value:function(){if(void 0===this.via){var t="edgeId:"+this.id,e=this.body.functions.createNode({id:t,shape:"circle",physics:!0,hidden:!0});this.body.nodes[t]=e,this.via=e,this.via.parentEdgeId=this.id,this.positionBezierNode()}}},{key:"positionBezierNode",value:function(){void 0!==this.via&&void 0!==this.from&&void 0!==this.to?(this.via.x=.5*(this.from.x+this.to.x),this.via.y=.5*(this.from.y+this.to.y)):void 0!==this.via&&(this.via.x=0,this.via.y=0)}},{key:"_line",value:function(t,e,i){this._bezierCurve(t,e,i)}},{key:"getViaNode",value:function(){return this.via}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.via,i=t,o=void 0,n=void 0;if(this.from===this.to){var r=this._getCircleData(this.from),a=(0,s.default)(r,3),h=a[0],d=a[1],l=a[2],u=2*Math.PI*(1-i);o=h+l*Math.sin(u),n=d+l-l*(1-Math.cos(u))}else o=Math.pow(1-i,2)*this.fromPoint.x+2*i*(1-i)*e.x+Math.pow(i,2)*this.toPoint.x,n=Math.pow(1-i,2)*this.fromPoint.y+2*i*(1-i)*e.y+Math.pow(i,2)*this.toPoint.y;return{x:o,y:n}}},{key:"_findBorderPosition",value:function(t,e){return this._findBorderPositionBezier(t,e,this.via)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,s){return this._getDistanceToBezierEdge(t,e,i,o,n,s,this.via)}}]),e}(g.default);e.default=y},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(75),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_line",value:function(t,e,i){this._bezierCurve(t,e,i)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_getViaCoordinates",value:function(){var t=void 0,e=void 0,i=this.options.smooth.roundness,o=this.options.smooth.type,n=Math.abs(this.from.x-this.to.x),s=Math.abs(this.from.y-this.to.y);if("discrete"===o||"diagonalCross"===o){var r=void 0,a=void 0;r=a=n<=s?i*s:i*n,this.from.x>this.to.x&&(r=-r),this.from.y>=this.to.y&&(a=-a),t=this.from.x+r,e=this.from.y+a,"discrete"===o&&(n<=s?t=n<i*s?this.from.x:t:e=s<i*n?this.from.y:e)}else if("straightCross"===o){var h=(1-i)*n,d=(1-i)*s;n<=s?(h=0,this.from.y<this.to.y&&(d=-d)):(this.from.x<this.to.x&&(h=-h),d=0),t=this.to.x+h,e=this.to.y+d}else if("horizontal"===o){var l=(1-i)*n;this.from.x<this.to.x&&(l=-l),t=this.to.x+l,e=this.from.y}else if("vertical"===o){var u=(1-i)*s;this.from.y<this.to.y&&(u=-u),t=this.from.x,e=this.to.y+u}else if("curvedCW"===o){n=this.to.x-this.from.x,s=this.from.y-this.to.y;var c=Math.sqrt(n*n+s*s),p=Math.PI,f=Math.atan2(s,n),m=(f+(.5*i+.5)*p)%(2*p);t=this.from.x+(.5*i+.5)*c*Math.sin(m),e=this.from.y+(.5*i+.5)*c*Math.cos(m)}else if("curvedCCW"===o){n=this.to.x-this.from.x,s=this.from.y-this.to.y;var v=Math.sqrt(n*n+s*s),g=Math.PI,y=Math.atan2(s,n),b=(y+(.5*-i+.5)*g)%(2*g);t=this.from.x+(.5*i+.5)*v*Math.sin(b),e=this.from.y+(.5*i+.5)*v*Math.cos(b)}else{var _=void 0,w=void 0;_=w=n<=s?i*s:i*n,this.from.x>this.to.x&&(_=-_),this.from.y>=this.to.y&&(w=-w),t=this.from.x+_,e=this.from.y+w,n<=s?t=this.from.x<=this.to.x?this.to.x<t?this.to.x:t:this.to.x>t?this.to.x:t:e=this.from.y>=this.to.y?this.to.y>e?this.to.y:e:this.to.y<e?this.to.y:e}return{x:t,y:e}}},{key:"_findBorderPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._findBorderPositionBezier(t,e,i.via)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,s){var r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates();return this._getDistanceToBezierEdge(t,e,i,o,n,s,r)}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=t;return{x:Math.pow(1-i,2)*this.fromPoint.x+2*i*(1-i)*e.x+Math.pow(i,2)*this.toPoint.x,y:Math.pow(1-i,2)*this.fromPoint.y+2*i*(1-i)*e.y+Math.pow(i,2)*this.toPoint.y}}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(118),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_line",value:function(t,e){t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),t.lineTo(this.toPoint.x,this.toPoint.y),this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}},{key:"getViaNode",value:function(){}},{key:"getPoint",value:function(t){return{x:(1-t)*this.fromPoint.x+t*this.toPoint.x,y:(1-t)*this.fromPoint.y+t*this.toPoint.y}}},{key:"_findBorderPosition",value:function(t,e){var i=this.to,o=this.from;t.id===this.from.id&&(i=this.from,o=this.to);var n=Math.atan2(i.y-o.y,i.x-o.x),s=i.x-o.x,r=i.y-o.y,a=Math.sqrt(s*s+r*r),h=t.distanceToBorder(e,n),d=(a-h)/a,l={};return l.x=(1-d)*o.x+d*i.x,l.y=(1-d)*o.y+d*i.y,l}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,s){return this._getDistanceToLine(t,e,i,o,n,s)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(120).default,u=i(221).default,c=i(222).default,p=i(223).default,f=i(224).default,m=i(121).default,v=i(225).default,g=i(226).default,y=i(2),b=i(119).default,_=function(){function t(e){(0,a.default)(this,t),this.body=e,this.physicsBody={physicsNodeIndices:[],physicsEdgeIndices:[],forces:{},velocities:{}},this.physicsEnabled=!0,this.simulationInterval=1e3/60,this.requiresTimeout=!0,this.previousStates={},this.referenceState={},this.freezeCache={},this.renderTimer=void 0,this.adaptiveTimestep=!1,this.adaptiveTimestepEnabled=!1,this.adaptiveCounter=0,this.adaptiveInterval=3,this.stabilized=!1,this.startedStabilization=!1,this.stabilizationIterations=0,this.ready=!1,this.options={},this.defaultOptions={enabled:!0,barnesHut:{theta:.5,gravitationalConstant:-2e3,centralGravity:.3,springLength:95,springConstant:.04,damping:.09,avoidOverlap:0},forceAtlas2Based:{theta:.5,gravitationalConstant:-50,centralGravity:.01,springConstant:.08,springLength:100,damping:.4,avoidOverlap:0},repulsion:{centralGravity:.2,springLength:200,springConstant:.05,nodeDistance:100,damping:.09,avoidOverlap:0},hierarchicalRepulsion:{centralGravity:0,springLength:100,springConstant:.01,nodeDistance:120,damping:.09},maxVelocity:50,minVelocity:.75,solver:"barnesHut",stabilization:{enabled:!0,iterations:1e3,updateInterval:50,onlyDynamicEdges:!1,fit:!0},timestep:.5,adaptiveTimestep:!0},y.extend(this.options,this.defaultOptions),this.timestep=.5,this.layoutFailed=!1,this.bindEventListeners()}return(0,d.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("initPhysics",function(){t.initPhysics()}),this.body.emitter.on("_layoutFailed",function(){t.layoutFailed=!0}),this.body.emitter.on("resetPhysics",function(){t.stopSimulation(),t.ready=!1}),this.body.emitter.on("disablePhysics",function(){t.physicsEnabled=!1,t.stopSimulation()}),this.body.emitter.on("restorePhysics",function(){t.setOptions(t.options),!0===t.ready&&t.startSimulation()}),this.body.emitter.on("startSimulation",function(){!0===t.ready&&t.startSimulation()}),this.body.emitter.on("stopSimulation",function(){t.stopSimulation()}),this.body.emitter.on("destroy",function(){t.stopSimulation(!1),t.body.emitter.off()}),this.body.emitter.on("_dataChanged",function(){t.updatePhysicsData()})}},{key:"setOptions",value:function(t){void 0!==t&&(!1===t?(this.options.enabled=!1,this.physicsEnabled=!1,this.stopSimulation()):!0===t?(this.options.enabled=!0,this.physicsEnabled=!0,this.startSimulation()):(this.physicsEnabled=!0,y.selectiveNotDeepExtend(["stabilization"],this.options,t),y.mergeOptions(this.options,t,"stabilization"),void 0===t.enabled&&(this.options.enabled=!0),!1===this.options.enabled&&(this.physicsEnabled=!1,this.stopSimulation()),this.timestep=this.options.timestep)),this.init()}},{key:"init",value:function(){var t;"forceAtlas2Based"===this.options.solver?(t=this.options.forceAtlas2Based,this.nodesSolver=new v(this.body,this.physicsBody,t),this.edgesSolver=new p(this.body,this.physicsBody,t),this.gravitySolver=new g(this.body,this.physicsBody,t)):"repulsion"===this.options.solver?(t=this.options.repulsion,this.nodesSolver=new u(this.body,this.physicsBody,t),this.edgesSolver=new p(this.body,this.physicsBody,t),this.gravitySolver=new m(this.body,this.physicsBody,t)):"hierarchicalRepulsion"===this.options.solver?(t=this.options.hierarchicalRepulsion,this.nodesSolver=new c(this.body,this.physicsBody,t),this.edgesSolver=new f(this.body,this.physicsBody,t),this.gravitySolver=new m(this.body,this.physicsBody,t)):(t=this.options.barnesHut,this.nodesSolver=new l(this.body,this.physicsBody,t),this.edgesSolver=new p(this.body,this.physicsBody,t),this.gravitySolver=new m(this.body,this.physicsBody,t)),this.modelOptions=t}},{key:"initPhysics",value:function(){!0===this.physicsEnabled&&!0===this.options.enabled?!0===this.options.stabilization.enabled?this.stabilize():(this.stabilized=!1,this.ready=!0,this.body.emitter.emit("fit",{},this.layoutFailed),this.startSimulation()):(this.ready=!0,this.body.emitter.emit("fit"))}},{key:"startSimulation",value:function(){!0===this.physicsEnabled&&!0===this.options.enabled?(this.stabilized=!1,this.adaptiveTimestep=!1,this.body.emitter.emit("_resizeNodes"),void 0===this.viewFunction&&(this.viewFunction=this.simulationStep.bind(this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering"))):this.body.emitter.emit("_redraw")}},{key:"stopSimulation",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.stabilized=!0,!0===t&&this._emitStabilized(),void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.viewFunction=void 0,!0===t&&this.body.emitter.emit("_stopRendering"))}},{key:"simulationStep",value:function(){var t=Date.now();this.physicsTick(),(Date.now()-t<.4*this.simulationInterval||!0===this.runDoubleSpeed)&&!1===this.stabilized&&(this.physicsTick(),this.runDoubleSpeed=!0),!0===this.stabilized&&this.stopSimulation()}},{key:"_emitStabilized",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.stabilizationIterations;(this.stabilizationIterations>1||!0===this.startedStabilization)&&setTimeout(function(){t.body.emitter.emit("stabilized",{iterations:e}),t.startedStabilization=!1,t.stabilizationIterations=0},0)}},{key:"physicsStep",value:function(){this.gravitySolver.solve(),this.nodesSolver.solve(),this.edgesSolver.solve(),this.moveNodes()}},{key:"adjustTimeStep",value:function(){!0===this._evaluateStepQuality()?this.timestep=1.2*this.timestep:this.timestep/1.2<this.options.timestep?this.timestep=this.options.timestep:(this.adaptiveCounter=-1,this.timestep=Math.max(this.options.timestep,this.timestep/1.2))}},{key:"physicsTick",value:function(){if(this._startStabilizing(),!0!==this.stabilized){if(!0===this.adaptiveTimestep&&!0===this.adaptiveTimestepEnabled){this.adaptiveCounter%this.adaptiveInterval==0?(this.timestep=2*this.timestep,this.physicsStep(),this.revert(),this.timestep=.5*this.timestep,this.physicsStep(),this.physicsStep(),this.adjustTimeStep()):this.physicsStep(),this.adaptiveCounter+=1}else this.timestep=this.options.timestep,this.physicsStep();!0===this.stabilized&&this.revert(),this.stabilizationIterations++}}},{key:"updatePhysicsData",value:function(){this.physicsBody.forces={},this.physicsBody.physicsNodeIndices=[],this.physicsBody.physicsEdgeIndices=[];var t=this.body.nodes,e=this.body.edges;for(var i in t)t.hasOwnProperty(i)&&!0===t[i].options.physics&&this.physicsBody.physicsNodeIndices.push(t[i].id);for(var o in e)e.hasOwnProperty(o)&&!0===e[o].options.physics&&this.physicsBody.physicsEdgeIndices.push(e[o].id);for(var n=0;n<this.physicsBody.physicsNodeIndices.length;n++){var s=this.physicsBody.physicsNodeIndices[n];this.physicsBody.forces[s]={x:0,y:0},void 0===this.physicsBody.velocities[s]&&(this.physicsBody.velocities[s]={x:0,y:0})}for(var r in this.physicsBody.velocities)void 0===t[r]&&delete this.physicsBody.velocities[r]}},{key:"revert",value:function(){var t=(0,s.default)(this.previousStates),e=this.body.nodes,i=this.physicsBody.velocities;this.referenceState={};for(var o=0;o<t.length;o++){var n=t[o];void 0!==e[n]?!0===e[n].options.physics&&(this.referenceState[n]={positions:{x:e[n].x,y:e[n].y}},i[n].x=this.previousStates[n].vx,i[n].y=this.previousStates[n].vy,e[n].x=this.previousStates[n].x,e[n].y=this.previousStates[n].y):delete this.previousStates[n]}}},{key:"_evaluateStepQuality",value:function(){var t=void 0,e=void 0,i=this.body.nodes,o=this.referenceState;for(var n in this.referenceState)if(this.referenceState.hasOwnProperty(n)&&void 0!==i[n]&&(t=i[n].x-o[n].positions.x,e=i[n].y-o[n].positions.y,Math.sqrt(Math.pow(t,2)+Math.pow(e,2))>.3))return!1;return!0}},{key:"moveNodes",value:function(){for(var t=this.physicsBody.physicsNodeIndices,e=0,i=0,o=0;o<t.length;o++){var n=t[o],s=this._performStep(n);e=Math.max(e,s),i+=s}this.adaptiveTimestepEnabled=i/t.length<5,this.stabilized=e<this.options.minVelocity}},{key:"calculateComponentVelocity",value:function(t,e,i){t+=(e-this.modelOptions.damping*t)/i*this.timestep;var o=this.options.maxVelocity||1e9;return Math.abs(t)>o&&(t=t>0?o:-o),t}},{key:"_performStep",value:function(t){var e=this.body.nodes[t],i=this.physicsBody.forces[t],o=this.physicsBody.velocities[t];return this.previousStates[t]={x:e.x,y:e.y,vx:o.x,vy:o.y},!1===e.options.fixed.x?(o.x=this.calculateComponentVelocity(o.x,i.x,e.options.mass),e.x+=o.x*this.timestep):(i.x=0,o.x=0),!1===e.options.fixed.y?(o.y=this.calculateComponentVelocity(o.y,i.y,e.options.mass),e.y+=o.y*this.timestep):(i.y=0,o.y=0),Math.sqrt(Math.pow(o.x,2)+Math.pow(o.y,2))}},{key:"_freezeNodes",value:function(){var t=this.body.nodes;for(var e in t)if(t.hasOwnProperty(e)&&t[e].x&&t[e].y){var i=t[e].options.fixed;this.freezeCache[e]={x:i.x,y:i.y},i.x=!0,i.y=!0}}},{key:"_restoreFrozenNodes",value:function(){var t=this.body.nodes;for(var e in t)t.hasOwnProperty(e)&&void 0!==this.freezeCache[e]&&(t[e].options.fixed.x=this.freezeCache[e].x,t[e].options.fixed.y=this.freezeCache[e].y);this.freezeCache={}}},{key:"stabilize",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.stabilization.iterations;if("number"!=typeof e&&(e=this.options.stabilization.iterations,console.log("The stabilize method needs a numeric amount of iterations. Switching to default: ",e)),0===this.physicsBody.physicsNodeIndices.length)return void(this.ready=!0);this.adaptiveTimestep=this.options.adaptiveTimestep,this.body.emitter.emit("_resizeNodes"),this.stopSimulation(),this.stabilized=!1,this.body.emitter.emit("_blockRedraw"),this.targetIterations=e,!0===this.options.stabilization.onlyDynamicEdges&&this._freezeNodes(),this.stabilizationIterations=0,setTimeout(function(){return t._stabilizationBatch()},0)}},{key:"_startStabilizing",value:function(){return!0!==this.startedStabilization&&(this.body.emitter.emit("startStabilizing"),this.startedStabilization=!0,!0)}},{key:"_stabilizationBatch",value:function(){var t=this,e=function(){return!1===t.stabilized&&t.stabilizationIterations<t.targetIterations},i=function(){t.body.emitter.emit("stabilizationProgress",{iterations:t.stabilizationIterations,total:t.targetIterations})};this._startStabilizing()&&i();for(var o=0;e()&&o<this.options.stabilization.updateInterval;)this.physicsTick(),o++;i(),e()?setTimeout(this._stabilizationBatch.bind(this),0):this._finalizeStabilization()}},{key:"_finalizeStabilization",value:function(){this.body.emitter.emit("_allowRedraw"),!0===this.options.stabilization.fit&&this.body.emitter.emit("fit"),!0===this.options.stabilization.onlyDynamicEdges&&this._restoreFrozenNodes(),this.body.emitter.emit("stabilizationIterationsDone"),this.body.emitter.emit("_requestRedraw"),!0===this.stabilized?this._emitStabilized():this.startSimulation(),this.ready=!0}},{key:"_drawForces",value:function(t){for(var e=0;e<this.physicsBody.physicsNodeIndices.length;e++){var i=this.physicsBody.physicsNodeIndices[e],o=this.body.nodes[i],n=this.physicsBody.forces[i],s=Math.sqrt(Math.pow(n.x,2)+Math.pow(n.x,2)),r=Math.min(Math.max(5,s),15),a=3*r,h=y.HSVToHex((180-180*Math.min(1,Math.max(0,.03*s)))/360,1,1),d={x:o.x+20*n.x,y:o.y+20*n.y};t.lineWidth=r,t.strokeStyle=h,t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(d.x,d.y),t.stroke();var l=Math.atan2(n.y,n.x);t.fillStyle=h,b.draw(t,{type:"arrow",point:d,angle:l,length:a}),t.fill()}}}]),t}();e.default=_},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,s,r,a,h=this.body.nodes,d=this.physicsBody.physicsNodeIndices,l=this.physicsBody.forces,u=this.options.nodeDistance,c=-2/3/u,p=0;p<d.length-1;p++){r=h[d[p]];for(var f=p+1;f<d.length;f++)a=h[d[f]],t=a.x-r.x,e=a.y-r.y,i=Math.sqrt(t*t+e*e),0===i&&(i=.1*Math.random(),t=i),i<2*u&&(s=i<.5*u?1:c*i+4/3,s/=i,o=t*s,n=e*s,l[r.id].x-=o,l[r.id].y-=n,l[a.id].x+=o,l[a.id].y+=n)}}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){var t,e,i,o,n,s,r,a,h,d,l=this.body.nodes,u=this.physicsBody.physicsNodeIndices,c=this.physicsBody.forces,p=this.options.nodeDistance;for(h=0;h<u.length-1;h++)for(r=l[u[h]],d=h+1;d<u.length;d++)if(a=l[u[d]],r.level===a.level){t=a.x-r.x,e=a.y-r.y,i=Math.sqrt(t*t+e*e)
;s=i<p?-Math.pow(.05*i,2)+Math.pow(.05*p,2):0,0===i?i=.01:s/=i,o=t*s,n=e*s,c[r.id].x-=o,c[r.id].y-=n,c[a.id].x+=o,c[a.id].y+=n}}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t=void 0,e=void 0,i=this.physicsBody.physicsEdgeIndices,o=this.body.edges,n=void 0,s=void 0,r=void 0,a=0;a<i.length;a++)e=o[i[a]],!0===e.connected&&e.toId!==e.fromId&&void 0!==this.body.nodes[e.toId]&&void 0!==this.body.nodes[e.fromId]&&(void 0!==e.edgeType.via?(t=void 0===e.options.length?this.options.springLength:e.options.length,n=e.to,s=e.edgeType.via,r=e.from,this._calculateSpringForce(n,s,.5*t),this._calculateSpringForce(s,r,.5*t)):(t=void 0===e.options.length?1.5*this.options.springLength:e.options.length,this._calculateSpringForce(e.from,e.to,t)))}},{key:"_calculateSpringForce",value:function(t,e,i){var o=t.x-e.x,n=t.y-e.y,s=Math.max(Math.sqrt(o*o+n*n),.01),r=this.options.springConstant*(i-s)/s,a=o*r,h=n*r;void 0!==this.physicsBody.forces[t.id]&&(this.physicsBody.forces[t.id].x+=a,this.physicsBody.forces[t.id].y+=h),void 0!==this.physicsBody.forces[e.id]&&(this.physicsBody.forces[e.id].x-=a,this.physicsBody.forces[e.id].y-=h)}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,s,r,a,h=this.body.edges,d=this.physicsBody.physicsEdgeIndices,l=this.physicsBody.physicsNodeIndices,u=this.physicsBody.forces,c=0;c<l.length;c++){var p=l[c];u[p].springFx=0,u[p].springFy=0}for(var f=0;f<d.length;f++)e=h[d[f]],!0===e.connected&&(t=void 0===e.options.length?this.options.springLength:e.options.length,i=e.from.x-e.to.x,o=e.from.y-e.to.y,a=Math.sqrt(i*i+o*o),a=0===a?.01:a,r=this.options.springConstant*(t-a)/a,n=i*r,s=o*r,e.to.level!=e.from.level?(void 0!==u[e.toId]&&(u[e.toId].springFx-=n,u[e.toId].springFy-=s),void 0!==u[e.fromId]&&(u[e.fromId].springFx+=n,u[e.fromId].springFy+=s)):(void 0!==u[e.toId]&&(u[e.toId].x-=.5*n,u[e.toId].y-=.5*s),void 0!==u[e.fromId]&&(u[e.fromId].x+=.5*n,u[e.fromId].y+=.5*s)));r=1;for(var m,v,g=0;g<l.length;g++){var y=l[g];m=Math.min(r,Math.max(-r,u[y].springFx)),v=Math.min(r,Math.max(-r,u[y].springFy)),u[y].x+=m,u[y].y+=v}for(var b=0,_=0,w=0;w<l.length;w++){var x=l[w];b+=u[x].x,_+=u[x].y}for(var k=b/l.length,S=_/l.length,D=0;D<l.length;D++){var M=l[D];u[M].x-=k,u[M].y-=S}}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(120),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_calculateForces",value:function(t,e,i,o,n){0===t&&(t=.1*Math.random(),e=t),this.overlapAvoidanceFactor<1&&o.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius));var s=o.edges.length+1,r=this.options.gravitationalConstant*n.mass*o.options.mass*s/Math.pow(t,2),a=e*r,h=i*r;this.physicsBody.forces[o.id].x+=a,this.physicsBody.forces[o.id].y+=h}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(121),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_calculateForces",value:function(t,e,i,o,n){if(t>0){var s=n.edges.length+1,r=this.options.centralGravity*s*n.options.mass;o[n.id].x=e*r,o[n.id].y=i*r}}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),s=o(n),r=i(6),a=o(r),h=i(0),d=o(h),l=i(1),u=o(l),c=i(2),p=i(76).default,f=i(228).default,m=i(74).default,v=i(47).default,g=function(){function t(e){var i=this;(0,d.default)(this,t),this.body=e,this.clusteredNodes={},this.clusteredEdges={},this.options={},this.defaultOptions={},c.extend(this.options,this.defaultOptions),this.body.emitter.on("_resetData",function(){i.clusteredNodes={},i.clusteredEdges={}})}return(0,u.default)(t,[{key:"clusterByHubsize",value:function(t,e){void 0===t?t=this._getHubSize():"object"===(void 0===t?"undefined":(0,a.default)(t))&&(e=this._checkOptions(t),t=this._getHubSize());for(var i=[],o=0;o<this.body.nodeIndices.length;o++){var n=this.body.nodes[this.body.nodeIndices[o]];n.edges.length>=t&&i.push(n.id)}for(var s=0;s<i.length;s++)this.clusterByConnection(i[s],e,!0);this.body.emitter.emit("_dataChanged")}},{key:"cluster",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===e.joinCondition)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.");e=this._checkOptions(e);var o={},n={};c.forEach(this.body.nodes,function(i,s){var r=p.cloneOptions(i);!0===e.joinCondition(r)&&(o[s]=i,c.forEach(i.edges,function(e){void 0===t.clusteredEdges[e.id]&&(n[e.id]=e)}))}),this._cluster(o,n,e,i)}},{key:"clusterByEdgeCount",value:function(t,e){var i=this,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e=this._checkOptions(e);for(var n=[],r={},a=void 0,h=void 0,d=void 0,l=0;l<this.body.nodeIndices.length;l++){var u,c,f;!function(o){var l={},m={},v=i.body.nodeIndices[o],g=i.body.nodes[v];if(void 0===r[v]){d=0,h=[];for(var y=0;y<g.edges.length;y++)a=g.edges[y],void 0===i.clusteredEdges[a.id]&&(a.toId!==a.fromId&&d++,h.push(a));if(d===t){u=function(t){if(void 0===e.joinCondition||null===e.joinCondition)return!0;var i=p.cloneOptions(t);return e.joinCondition(i)};for(var b=!0,_=0;_<h.length;_++){a=h[_];var w=i._getConnectedId(a,v);if(!u(g)){b=!1;break}m[a.id]=a,l[v]=g,l[w]=i.body.nodes[w],r[v]=!0}if((0,s.default)(l).length>0&&(0,s.default)(m).length>0&&!0===b)if(c=function(){for(var t=0;t<n.length;++t)for(var e in l)if(void 0!==n[t].nodes[e])return n[t]},void 0!==(f=c())){for(var x in l)void 0===f.nodes[x]&&(f.nodes[x]=l[x]);for(var k in m)void 0===f.edges[k]&&(f.edges[k]=m[k])}else n.push({nodes:l,edges:m})}}}(l)}for(var l=0;l<n.length;l++)this._cluster(n[l].nodes,n[l].edges,e,!1);!0===o&&this.body.emitter.emit("_dataChanged")}},{key:"clusterOutliers",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(1,t,e)}},{key:"clusterBridges",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(2,t,e)}},{key:"clusterByConnection",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===t)throw new Error("No nodeId supplied to clusterByConnection!");if(void 0===this.body.nodes[t])throw new Error("The nodeId given to clusterByConnection does not exist!");var o=this.body.nodes[t];e=this._checkOptions(e,o),void 0===e.clusterNodeProperties.x&&(e.clusterNodeProperties.x=o.x),void 0===e.clusterNodeProperties.y&&(e.clusterNodeProperties.y=o.y),void 0===e.clusterNodeProperties.fixed&&(e.clusterNodeProperties.fixed={},e.clusterNodeProperties.fixed.x=o.options.fixed.x,e.clusterNodeProperties.fixed.y=o.options.fixed.y);var n={},r={},a=o.id,h=p.cloneOptions(o);n[a]=o;for(var d=0;d<o.edges.length;d++){var l=o.edges[d];if(void 0===this.clusteredEdges[l.id]){var u=this._getConnectedId(l,a);if(void 0===this.clusteredNodes[u])if(u!==a)if(void 0===e.joinCondition)r[l.id]=l,n[u]=this.body.nodes[u];else{var c=p.cloneOptions(this.body.nodes[u]);!0===e.joinCondition(h,c)&&(r[l.id]=l,n[u]=this.body.nodes[u])}else r[l.id]=l}}var f=(0,s.default)(n).map(function(t){return n[t].id});for(m in n)if(n.hasOwnProperty(m))for(var m=n[m],v=0;v<m.edges.length;v++){var g=m.edges[v];f.indexOf(this._getConnectedId(g,m.id))>-1&&(r[g.id]=g)}this._cluster(n,r,e,i)}},{key:"_createClusterEdges",value:function(t,e,i,o){for(var n=void 0,r=void 0,a=void 0,h=void 0,d=void 0,l=void 0,u=(0,s.default)(t),c=[],p=0;p<u.length;p++){r=u[p],a=t[r];for(var f=0;f<a.edges.length;f++)n=a.edges[f],void 0===this.clusteredEdges[n.id]&&(n.toId==n.fromId?e[n.id]=n:n.toId==r?(h=i.id,d=n.fromId,l=d):(h=n.toId,d=i.id,l=h),void 0===t[l]&&c.push({edge:n,fromId:d,toId:h}))}for(var m=[],v=0;v<c.length;v++){var g=c[v],y=g.edge,b=function(t){for(var e=0;e<m.length;e++){var i=m[e],o=t.fromId===i.fromId&&t.toId===i.toId,n=t.fromId===i.toId&&t.toId===i.fromId;if(o||n)return i}return null}(g);null===b?(b=this._createClusteredEdge(g.fromId,g.toId,y,o),m.push(b)):b.clusteringEdgeReplacingIds.push(y.id),this.body.edges[y.id].edgeReplacedById=b.id,this._backupEdgeOptions(y),y.setOptions({physics:!1})}}},{key:"_checkOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===t.clusterEdgeProperties&&(t.clusterEdgeProperties={}),void 0===t.clusterNodeProperties&&(t.clusterNodeProperties={}),t}},{key:"_cluster",value:function(t,e,i){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=[];for(var r in t)t.hasOwnProperty(r)&&void 0!==this.clusteredNodes[r]&&n.push(r);for(var a=0;a<n.length;++a)delete t[n[a]];if(0!=(0,s.default)(t).length&&(1!=(0,s.default)(t).length||1==i.clusterNodeProperties.allowSingleNodeCluster)){var h=c.deepExtend({},i.clusterNodeProperties);if(void 0!==i.processProperties){var d=[];for(var l in t)if(t.hasOwnProperty(l)){var u=p.cloneOptions(t[l]);d.push(u)}var m=[];for(var v in e)if(e.hasOwnProperty(v)&&"clusterEdge:"!==v.substr(0,12)){var g=p.cloneOptions(e[v],"edge");m.push(g)}if(!(h=i.processProperties(h,d,m)))throw new Error("The processProperties function does not return properties!")}void 0===h.id&&(h.id="cluster:"+c.randomUUID());var y=h.id;void 0===h.label&&(h.label="cluster");var b=void 0;void 0===h.x&&(b=this._getClusterPosition(t),h.x=b.x),void 0===h.y&&(void 0===b&&(b=this._getClusterPosition(t)),h.y=b.y),h.id=y;var _=this.body.functions.createNode(h,f);_.containedNodes=t,_.containedEdges=e,_.clusterEdgeProperties=i.clusterEdgeProperties,this.body.nodes[h.id]=_,this._clusterEdges(t,e,h,i.clusterEdgeProperties),h.id=void 0,!0===o&&this.body.emitter.emit("_dataChanged")}}},{key:"_backupEdgeOptions",value:function(t){void 0===this.clusteredEdges[t.id]&&(this.clusteredEdges[t.id]={physics:t.options.physics})}},{key:"_restoreEdge",value:function(t){var e=this.clusteredEdges[t.id];void 0!==e&&(t.setOptions({physics:e.physics}),delete this.clusteredEdges[t.id])}},{key:"isCluster",value:function(t){return void 0!==this.body.nodes[t]?!0===this.body.nodes[t].isCluster:(console.log("Node does not exist."),!1)}},{key:"_getClusterPosition",value:function(t){for(var e=(0,s.default)(t),i=t[e[0]].x,o=t[e[0]].x,n=t[e[0]].y,r=t[e[0]].y,a=void 0,h=1;h<e.length;h++)a=t[e[h]],i=a.x<i?a.x:i,o=a.x>o?a.x:o,n=a.y<n?a.y:n,r=a.y>r?a.y:r;return{x:.5*(i+o),y:.5*(n+r)}}},{key:"openCluster",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===t)throw new Error("No clusterNodeId supplied to openCluster.");var o=this.body.nodes[t];if(void 0===o)throw new Error("The clusterNodeId supplied to openCluster does not exist.");if(!0!==o.isCluster||void 0===o.containedNodes||void 0===o.containedEdges)throw new Error("The node:"+t+" is not a valid cluster.");var n=this.findNode(t),s=n.indexOf(t)-1;if(s>=0){var r=n[s];return this.body.nodes[r]._openChildCluster(t),delete this.body.nodes[t],void(!0===i&&this.body.emitter.emit("_dataChanged"))}var a=o.containedNodes,h=o.containedEdges;if(void 0!==e&&void 0!==e.releaseFunction&&"function"==typeof e.releaseFunction){var d={},l={x:o.x,y:o.y};for(var u in a)if(a.hasOwnProperty(u)){var p=this.body.nodes[u];d[u]={x:p.x,y:p.y}}var f=e.releaseFunction(l,d);for(var m in a)if(a.hasOwnProperty(m)){var v=this.body.nodes[m];void 0!==f[m]&&(v.x=void 0===f[m].x?o.x:f[m].x,v.y=void 0===f[m].y?o.y:f[m].y)}}else c.forEach(a,function(t){!1===t.options.fixed.x&&(t.x=o.x),!1===t.options.fixed.y&&(t.y=o.y)});for(var g in a)if(a.hasOwnProperty(g)){var y=this.body.nodes[g];y.vx=o.vx,y.vy=o.vy,y.setOptions({physics:!0}),delete this.clusteredNodes[g]}for(var b=[],_=0;_<o.edges.length;_++)b.push(o.edges[_]);for(var w=0;w<b.length;w++){for(var x=b[w],k=this._getConnectedId(x,t),S=this.clusteredNodes[k],D=0;D<x.clusteringEdgeReplacingIds.length;D++){var M=x.clusteringEdgeReplacingIds[D],C=this.body.edges[M];if(void 0!==C)if(void 0!==S){var O=this.body.nodes[S.clusterId];O.containedEdges[C.id]=C,delete h[C.id];var E=C.fromId,T=C.toId;C.toId==k?T=S.clusterId:E=S.clusterId,this._createClusteredEdge(E,T,C,O.clusterEdgeProperties,{hidden:!1,physics:!0})}else this._restoreEdge(C)}x.remove()}for(var P in h)h.hasOwnProperty(P)&&this._restoreEdge(h[P]);delete this.body.nodes[t],!0===i&&this.body.emitter.emit("_dataChanged")}},{key:"getNodesInCluster",value:function(t){var e=[];if(!0===this.isCluster(t)){var i=this.body.nodes[t].containedNodes;for(var o in i)i.hasOwnProperty(o)&&e.push(this.body.nodes[o].id)}return e}},{key:"findNode",value:function(t){for(var e=[],i=0,o=void 0;void 0!==this.clusteredNodes[t]&&i<100;){if(void 0===(o=this.body.nodes[t]))return[];e.push(o.id),t=this.clusteredNodes[t].clusterId,i++}return void 0===(o=this.body.nodes[t])?[]:(e.push(o.id),e.reverse(),e)}},{key:"updateClusteredNode",value:function(t,e){if(void 0===t)throw new Error("No clusteredNodeId supplied to updateClusteredNode.");if(void 0===e)throw new Error("No newOptions supplied to updateClusteredNode.");if(void 0===this.body.nodes[t])throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.");this.body.nodes[t].setOptions(e),this.body.emitter.emit("_dataChanged")}},{key:"updateEdge",value:function(t,e){if(void 0===t)throw new Error("No startEdgeId supplied to updateEdge.");if(void 0===e)throw new Error("No newOptions supplied to updateEdge.");if(void 0===this.body.edges[t])throw new Error("The startEdgeId supplied to updateEdge does not exist.");for(var i=this.getClusteredEdges(t),o=0;o<i.length;o++){this.body.edges[i[o]].setOptions(e)}this.body.emitter.emit("_dataChanged")}},{key:"getClusteredEdges",value:function(t){for(var e=[],i=0;void 0!==t&&void 0!==this.body.edges[t]&&i<100;)e.push(this.body.edges[t].id),t=this.body.edges[t].edgeReplacedById,i++;return e.reverse(),e}},{key:"getBaseEdge",value:function(t){return this.getBaseEdges(t)[0]}},{key:"getBaseEdges",value:function(t){for(var e=[t],i=[],o=[],n=0;e.length>0&&n<100;){var s=e.pop();if(void 0!==s){var r=this.body.edges[s];if(void 0!==r){n++;var a=r.clusteringEdgeReplacingIds;if(void 0===a)o.push(s);else for(var h=0;h<a.length;++h){var d=a[h];-1===e.indexOf(a)&&-1===i.indexOf(a)&&e.push(d)}i.push(s)}}}return o}},{key:"_getConnectedId",value:function(t,e){return t.toId!=e?t.toId:(t.fromId,t.fromId)}},{key:"_getHubSize",value:function(){for(var t=0,e=0,i=0,o=0,n=0;n<this.body.nodeIndices.length;n++){var s=this.body.nodes[this.body.nodeIndices[n]];s.edges.length>o&&(o=s.edges.length),t+=s.edges.length,e+=Math.pow(s.edges.length,2),i+=1}t/=i,e/=i;var r=e-Math.pow(t,2),a=Math.sqrt(r),h=Math.floor(t+2*a);return h>o&&(h=o),h}},{key:"_createClusteredEdge",value:function(t,e,i,o,n){var s=p.cloneOptions(i,"edge");c.deepExtend(s,o),s.from=t,s.to=e,s.id="clusterEdge:"+c.randomUUID(),void 0!==n&&c.deepExtend(s,n);var r=this.body.functions.createEdge(s);return r.clusteringEdgeReplacingIds=[i.id],r.connect(),this.body.edges[r.id]=r,r}},{key:"_clusterEdges",value:function(t,e,i,o){if(e instanceof m){var n=e,s={};s[n.id]=n,e=s}if(t instanceof v){var r=t,a={};a[r.id]=r,t=a}if(void 0===i||null===i)throw new Error("_clusterEdges: parameter clusterNode required");void 0===o&&(o=i.clusterEdgeProperties),this._createClusterEdges(t,e,i,o);for(var h in e)if(e.hasOwnProperty(h)&&void 0!==this.body.edges[h]){var d=this.body.edges[h];this._backupEdgeOptions(d),d.setOptions({physics:!1})}for(var l in t)t.hasOwnProperty(l)&&(this.clusteredNodes[l]={clusterId:i.id,node:this.body.nodes[l]},this.body.nodes[l].setOptions({physics:!1}))}},{key:"_getClusterNodeForNode",value:function(t){if(void 0!==t){var e=this.clusteredNodes[t];if(void 0!==e){var i=e.clusterId;if(void 0!==i)return this.body.nodes[i]}}}},{key:"_filter",value:function(t,e){var i=[];return c.forEach(t,function(t){e(t)&&i.push(t)}),i}},{key:"_updateState",value:function(){var t=this,e=void 0,i=[],o=[],n=function(e){c.forEach(t.body.nodes,function(t){!0===t.isCluster&&e(t)})};for(e in this.clusteredNodes)if(this.clusteredNodes.hasOwnProperty(e)){var r=this.body.nodes[e];void 0===r&&i.push(e)}n(function(t){for(var e=0;e<i.length;e++)delete t.containedNodes[i[e]]});for(var a=0;a<i.length;a++)delete this.clusteredNodes[i[a]];c.forEach(this.clusteredEdges,function(e){var i=t.body.edges[e];void 0!==i&&i.endPointsValid()||o.push(e)}),n(function(t){c.forEach(t.containedEdges,function(t,e){t.endPointsValid()||-1!==o.indexOf(e)||o.push(e)})}),c.forEach(this.body.edges,function(e,i){var n=!0,s=e.clusteringEdgeReplacingIds;if(void 0!==s){var r=0;c.forEach(s,function(e){var i=t.body.edges[e];void 0!==i&&i.endPointsValid()&&(r+=1)}),n=r>0}e.endPointsValid()&&n||o.push(i)}),n(function(e){c.forEach(o,function(i){delete e.containedEdges[i],c.forEach(e.edges,function(n,s){if(n.id===i)return void(e.edges[s]=null);n.clusteringEdgeReplacingIds=t._filter(n.clusteringEdgeReplacingIds,function(t){return-1===o.indexOf(t)})}),e.edges=t._filter(e.edges,function(t){return null!==t})})}),c.forEach(o,function(e){delete t.clusteredEdges[e]}),c.forEach(o,function(e){delete t.body.edges[e]});var h=(0,s.default)(this.body.edges);c.forEach(h,function(e){var i=t.body.edges[e],o=t._isClusteredNode(i.fromId)||t._isClusteredNode(i.toId);if(o!==t._isClusteredEdge(i.id)){if(!o)throw new Error("remove edge from clustering not implemented!");var n=t._getClusterNodeForNode(i.fromId);void 0!==n&&t._clusterEdges(t.body.nodes[i.fromId],i,n);var s=t._getClusterNodeForNode(i.toId);void 0!==s&&t._clusterEdges(t.body.nodes[i.toId],i,s)}});for(var d=!1,l=!0;l;)!function(){var e=[];n(function(t){var i=(0,s.default)(t.containedNodes).length,o=!0===t.options.allowSingleNodeCluster;(o&&i<1||!o&&i<2)&&e.push(t.id)});for(var i=0;i<e.length;++i)t.openCluster(e[i],{},!1);l=e.length>0,d=d||l}();d&&this._updateState()}},{key:"_isClusteredNode",value:function(t){return void 0!==this.clusteredNodes[t]}},{key:"_isClusteredEdge",value:function(t){return void 0!==this.clusteredEdges[t]}}]),t}();e.default=g},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(4),u=o(l),c=i(5),p=o(c),f=i(2),m=i(47).default,v=function(t){function e(t,i,o,n,r,h){(0,a.default)(this,e);var d=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o,n,r,h));return d.isCluster=!0,d.containedNodes={},d.containedEdges={},d}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_openChildCluster",value:function(t){var e=this,i=this.body.nodes[t];if(void 0===this.containedNodes[t])throw new Error("node with id: "+t+" not in current cluster");if(!i.isCluster)throw new Error("node with id: "+t+" is not a cluster");delete this.containedNodes[t],f.forEach(i.edges,function(t){delete e.containedEdges[t.id]}),f.forEach(i.containedNodes,function(t,i){e.containedNodes[i]=t}),i.containedNodes={},f.forEach(i.containedEdges,function(t,i){e.containedEdges[i]=t}),i.containedEdges={},f.forEach(i.edges,function(t){f.forEach(e.edges,function(i){var o=i.clusteringEdgeReplacingIds.indexOf(t.id);-1!==o&&(f.forEach(t.clusteringEdgeReplacingIds,function(t){i.clusteringEdgeReplacingIds.push(t),e.body.edges[t].edgeReplacedById=i.id}),i.clusteringEdgeReplacingIds.splice(o,1))})}),i.edges=[]}}]),e}(m);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(){var t;void 0!==window&&(t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame),window.requestAnimationFrame=void 0===t?function(t){t()}:t}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),r=o(s),a=i(1),h=o(a),d=i(2),l=function(){function t(e,i){(0,r.default)(this,t),n(),this.body=e,this.canvas=i,this.redrawRequested=!1,this.renderTimer=void 0,this.requiresTimeout=!0,this.renderingActive=!1,this.renderRequests=0,this.allowRedraw=!0,this.dragging=!1,this.options={},this.defaultOptions={hideEdgesOnDrag:!1,hideNodesOnDrag:!1},d.extend(this.options,this.defaultOptions),this._determineBrowserMethod(),this.bindEventListeners()}return(0,h.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("dragStart",function(){t.dragging=!0}),this.body.emitter.on("dragEnd",function(){t.dragging=!1}),this.body.emitter.on("_resizeNodes",function(){t._resizeNodes()}),this.body.emitter.on("_redraw",function(){!1===t.renderingActive&&t._redraw()}),this.body.emitter.on("_blockRedraw",function(){t.allowRedraw=!1}),this.body.emitter.on("_allowRedraw",function(){t.allowRedraw=!0,t.redrawRequested=!1}),this.body.emitter.on("_requestRedraw",this._requestRedraw.bind(this)),this.body.emitter.on("_startRendering",function(){t.renderRequests+=1,t.renderingActive=!0,t._startRendering()}),this.body.emitter.on("_stopRendering",function(){t.renderRequests-=1,t.renderingActive=t.renderRequests>0,t.renderTimer=void 0}),this.body.emitter.on("destroy",function(){t.renderRequests=0,t.allowRedraw=!1,t.renderingActive=!1,!0===t.requiresTimeout?clearTimeout(t.renderTimer):window.cancelAnimationFrame(t.renderTimer),t.body.emitter.off()})}},{key:"setOptions",value:function(t){if(void 0!==t){var e=["hideEdgesOnDrag","hideNodesOnDrag"];d.selectiveDeepExtend(e,this.options,t)}}},{key:"_requestNextFrame",value:function(t,e){if("undefined"!=typeof window){var i=void 0,o=window;return!0===this.requiresTimeout?i=o.setTimeout(t,e):o.requestAnimationFrame&&(i=o.requestAnimationFrame(t)),i}}},{key:"_startRendering",value:function(){!0===this.renderingActive&&void 0===this.renderTimer&&(this.renderTimer=this._requestNextFrame(this._renderStep.bind(this),this.simulationInterval))}},{key:"_renderStep",value:function(){!0===this.renderingActive&&(this.renderTimer=void 0,!0===this.requiresTimeout&&this._startRendering(),this._redraw(),!1===this.requiresTimeout&&this._startRendering())}},{key:"redraw",value:function(){this.body.emitter.emit("setSize"),this._redraw()}},{key:"_requestRedraw",value:function(){var t=this;!0!==this.redrawRequested&&!1===this.renderingActive&&!0===this.allowRedraw&&(this.redrawRequested=!0,this._requestNextFrame(function(){t._redraw(!1)},0))}},{key:"_redraw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!0===this.allowRedraw){this.body.emitter.emit("initRedraw"),this.redrawRequested=!1,0!==this.canvas.frame.canvas.width&&0!==this.canvas.frame.canvas.height||this.canvas.setSize(),this.canvas.setTransform();var e=this.canvas.getContext(),i=this.canvas.frame.canvas.clientWidth,o=this.canvas.frame.canvas.clientHeight;if(e.clearRect(0,0,i,o),0===this.canvas.frame.clientWidth)return;e.save(),e.translate(this.body.view.translation.x,this.body.view.translation.y),e.scale(this.body.view.scale,this.body.view.scale),e.beginPath(),this.body.emitter.emit("beforeDrawing",e),e.closePath(),!1===t&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&this._drawEdges(e),(!1===this.dragging||!0===this.dragging&&!1===this.options.hideNodesOnDrag)&&this._drawNodes(e,t),e.beginPath(),this.body.emitter.emit("afterDrawing",e),e.closePath(),e.restore(),!0===t&&e.clearRect(0,0,i,o)}}},{key:"_resizeNodes",value:function(){this.canvas.setTransform();var t=this.canvas.getContext();t.save(),t.translate(this.body.view.translation.x,this.body.view.translation.y),t.scale(this.body.view.scale,this.body.view.scale);var e=this.body.nodes,i=void 0;for(var o in e)e.hasOwnProperty(o)&&(i=e[o],i.resize(t),i.updateBoundingBox(t,i.selected));t.restore()}},{key:"_drawNodes",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.body.nodes,o=this.body.nodeIndices,n=void 0,s=[],r=this.canvas.DOMtoCanvas({x:-20,y:-20}),a=this.canvas.DOMtoCanvas({x:this.canvas.frame.canvas.clientWidth+20,y:this.canvas.frame.canvas.clientHeight+20}),h={top:r.y,left:r.x,bottom:a.y,right:a.x},d=0;d<o.length;d++)n=i[o[d]],n.isSelected()?s.push(o[d]):!0===e?n.draw(t):!0===n.isBoundingBoxOverlappingWith(h)?n.draw(t):n.updateBoundingBox(t,n.selected);for(var l=0;l<s.length;l++)n=i[s[l]],n.draw(t)}},{key:"_drawEdges",value:function(t){for(var e=this.body.edges,i=this.body.edgeIndices,o=void 0,n=0;n<i.length;n++)o=e[i[n]],!0===o.connected&&o.draw(t)}},{key:"_determineBrowserMethod",value:function(){if("undefined"!=typeof window){var t=navigator.userAgent.toLowerCase();this.requiresTimeout=!1,-1!=t.indexOf("msie 9.0")?this.requiresTimeout=!0:-1!=t.indexOf("safari")&&t.indexOf("chrome")<=-1&&(this.requiresTimeout=!0)}else this.requiresTimeout=!0}}]),t}();e.default=l},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(10),d=i(37),l=i(2),u=function(){function t(e){(0,s.default)(this,t),this.body=e,this.pixelRatio=1,this.resizeTimer=void 0,this.resizeFunction=this._onResize.bind(this),this.cameraState={},this.initialized=!1,this.canvasViewCenter={},this.options={},this.defaultOptions={autoResize:!0,height:"100%",width:"100%"},l.extend(this.options,this.defaultOptions),this.bindEventListeners()}return(0,a.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.once("resize",function(e){0!==e.width&&(t.body.view.translation.x=.5*e.width),0!==e.height&&(t.body.view.translation.y=.5*e.height)}),this.body.emitter.on("setSize",this.setSize.bind(this)),this.body.emitter.on("destroy",function(){t.hammerFrame.destroy(),t.hammer.destroy(),t._cleanUp()})}},{key:"setOptions",value:function(t){var e=this;if(void 0!==t){var i=["width","height","autoResize"];l.selectiveDeepExtend(i,this.options,t)}!0===this.options.autoResize&&(this._cleanUp(),this.resizeTimer=setInterval(function(){!0===e.setSize()&&e.body.emitter.emit("_requestRedraw")},1e3),this.resizeFunction=this._onResize.bind(this),l.addEventListener(window,"resize",this.resizeFunction))}},{key:"_cleanUp",value:function(){void 0!==this.resizeTimer&&clearInterval(this.resizeTimer),l.removeEventListener(window,"resize",this.resizeFunction),this.resizeFunction=void 0}},{key:"_onResize",value:function(){this.setSize(),this.body.emitter.emit("_redraw")}},{key:"_getCameraState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pixelRatio;!0===this.initialized&&(this.cameraState.previousWidth=this.frame.canvas.width/t,this.cameraState.previousHeight=this.frame.canvas.height/t,this.cameraState.scale=this.body.view.scale,this.cameraState.position=this.DOMtoCanvas({x:.5*this.frame.canvas.width/t,y:.5*this.frame.canvas.height/t}))}},{key:"_setCameraState",value:function(){if(void 0!==this.cameraState.scale&&0!==this.frame.canvas.clientWidth&&0!==this.frame.canvas.clientHeight&&0!==this.pixelRatio&&this.cameraState.previousWidth>0){var t=this.frame.canvas.width/this.pixelRatio/this.cameraState.previousWidth,e=this.frame.canvas.height/this.pixelRatio/this.cameraState.previousHeight,i=this.cameraState.scale;1!=t&&1!=e?i=.5*this.cameraState.scale*(t+e):1!=t?i=this.cameraState.scale*t:1!=e&&(i=this.cameraState.scale*e),this.body.view.scale=i;var o=this.DOMtoCanvas({x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight}),n={x:o.x-this.cameraState.position.x,y:o.y-this.cameraState.position.y};this.body.view.translation.x+=n.x*this.body.view.scale,this.body.view.translation.y+=n.y*this.body.view.scale}}},{key:"_prepareValue",value:function(t){if("number"==typeof t)return t+"px";if("string"==typeof t){if(-1!==t.indexOf("%")||-1!==t.indexOf("px"))return t;if(-1===t.indexOf("%"))return t+"px"}throw new Error("Could not use the value supplied for width or height:"+t)}},{key:"_create",value:function(){for(;this.body.container.hasChildNodes();)this.body.container.removeChild(this.body.container.firstChild);if(this.frame=document.createElement("div"),this.frame.className="vis-network",this.frame.style.position="relative",this.frame.style.overflow="hidden",this.frame.tabIndex=900,this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",this.frame.appendChild(this.frame.canvas),this.frame.canvas.getContext)this._setPixelRatio(),this.setTransform();else{var t=document.createElement("DIV");t.style.color="red",t.style.fontWeight="bold",t.style.padding="10px",t.innerHTML="Error: your browser does not support HTML canvas",this.frame.canvas.appendChild(t)}this.body.container.appendChild(this.frame),this.body.view.scale=1,this.body.view.translation={x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight},this._bindHammer()}},{key:"_bindHammer",value:function(){var t=this;void 0!==this.hammer&&this.hammer.destroy(),this.drag={},this.pinch={},this.hammer=new h(this.frame.canvas),this.hammer.get("pinch").set({enable:!0}),this.hammer.get("pan").set({threshold:5,direction:h.DIRECTION_ALL}),d.onTouch(this.hammer,function(e){t.body.eventListeners.onTouch(e)}),this.hammer.on("tap",function(e){t.body.eventListeners.onTap(e)}),this.hammer.on("doubletap",function(e){t.body.eventListeners.onDoubleTap(e)}),this.hammer.on("press",function(e){t.body.eventListeners.onHold(e)}),this.hammer.on("panstart",function(e){t.body.eventListeners.onDragStart(e)}),this.hammer.on("panmove",function(e){t.body.eventListeners.onDrag(e)}),this.hammer.on("panend",function(e){t.body.eventListeners.onDragEnd(e)}),this.hammer.on("pinch",function(e){t.body.eventListeners.onPinch(e)}),this.frame.canvas.addEventListener("mousewheel",function(e){t.body.eventListeners.onMouseWheel(e)}),this.frame.canvas.addEventListener("DOMMouseScroll",function(e){t.body.eventListeners.onMouseWheel(e)}),this.frame.canvas.addEventListener("mousemove",function(e){t.body.eventListeners.onMouseMove(e)}),this.frame.canvas.addEventListener("contextmenu",function(e){t.body.eventListeners.onContext(e)}),this.hammerFrame=new h(this.frame),d.onRelease(this.hammerFrame,function(e){t.body.eventListeners.onRelease(e)})}},{key:"setSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.width,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.height;t=this._prepareValue(t),e=this._prepareValue(e);var i=!1,o=this.frame.canvas.width,n=this.frame.canvas.height,s=this.pixelRatio;if(this._setPixelRatio(),t!=this.options.width||e!=this.options.height||this.frame.style.width!=t||this.frame.style.height!=e)this._getCameraState(s),this.frame.style.width=t,this.frame.style.height=e,this.frame.canvas.style.width="100%",this.frame.canvas.style.height="100%",this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio),this.options.width=t,this.options.height=e,this.canvasViewCenter={x:.5*this.frame.clientWidth,y:.5*this.frame.clientHeight},i=!0;else{var r=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),a=Math.round(this.frame.canvas.clientHeight*this.pixelRatio)
;this.frame.canvas.width===r&&this.frame.canvas.height===a||this._getCameraState(s),this.frame.canvas.width!==r&&(this.frame.canvas.width=r,i=!0),this.frame.canvas.height!==a&&(this.frame.canvas.height=a,i=!0)}return!0===i&&(this.body.emitter.emit("resize",{width:Math.round(this.frame.canvas.width/this.pixelRatio),height:Math.round(this.frame.canvas.height/this.pixelRatio),oldWidth:Math.round(o/this.pixelRatio),oldHeight:Math.round(n/this.pixelRatio)}),this._setCameraState()),this.initialized=!0,i}},{key:"getContext",value:function(){return this.frame.canvas.getContext("2d")}},{key:"_determinePixelRatio",value:function(){var t=this.getContext();if(void 0===t)throw new Error("Could not get canvax context");var e=1;return"undefined"!=typeof window&&(e=window.devicePixelRatio||1),e/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}},{key:"_setPixelRatio",value:function(){this.pixelRatio=this._determinePixelRatio()}},{key:"setTransform",value:function(){var t=this.getContext();if(void 0===t)throw new Error("Could not get canvax context");t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}},{key:"_XconvertDOMtoCanvas",value:function(t){return(t-this.body.view.translation.x)/this.body.view.scale}},{key:"_XconvertCanvasToDOM",value:function(t){return t*this.body.view.scale+this.body.view.translation.x}},{key:"_YconvertDOMtoCanvas",value:function(t){return(t-this.body.view.translation.y)/this.body.view.scale}},{key:"_YconvertCanvasToDOM",value:function(t){return t*this.body.view.scale+this.body.view.translation.y}},{key:"canvasToDOM",value:function(t){return{x:this._XconvertCanvasToDOM(t.x),y:this._YconvertCanvasToDOM(t.y)}}},{key:"DOMtoCanvas",value:function(t){return{x:this._XconvertDOMtoCanvas(t.x),y:this._YconvertDOMtoCanvas(t.y)}}}]),t}();e.default=u},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(2),d=i(76).default,l=function(){function t(e,i){var o=this;(0,s.default)(this,t),this.body=e,this.canvas=i,this.animationSpeed=1/this.renderRefreshRate,this.animationEasingFunction="easeInOutQuint",this.easingTime=0,this.sourceScale=0,this.targetScale=0,this.sourceTranslation=0,this.targetTranslation=0,this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0,this.touchTime=0,this.viewFunction=void 0,this.body.emitter.on("fit",this.fit.bind(this)),this.body.emitter.on("animationFinished",function(){o.body.emitter.emit("_stopRendering")}),this.body.emitter.on("unlockNode",this.releaseNode.bind(this))}return(0,a.default)(t,[{key:"setOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=t}},{key:"fit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{nodes:[]},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=void 0,o=void 0;if(void 0!==t.nodes&&0!==t.nodes.length||(t.nodes=this.body.nodeIndices),!0===e){var n=0;for(var s in this.body.nodes)if(this.body.nodes.hasOwnProperty(s)){var r=this.body.nodes[s];!0===r.predefinedPosition&&(n+=1)}if(n>.5*this.body.nodeIndices.length)return void this.fit(t,!1);i=d.getRange(this.body.nodes,t.nodes);o=12.662/(this.body.nodeIndices.length+7.4147)+.0964822;o*=Math.min(this.canvas.frame.canvas.clientWidth/600,this.canvas.frame.canvas.clientHeight/600)}else{this.body.emitter.emit("_resizeNodes"),i=d.getRange(this.body.nodes,t.nodes);var a=1.1*Math.abs(i.maxX-i.minX),h=1.1*Math.abs(i.maxY-i.minY),l=this.canvas.frame.canvas.clientWidth/a,u=this.canvas.frame.canvas.clientHeight/h;o=l<=u?l:u}o>1?o=1:0===o&&(o=1);var c=d.findCenter(i),p={position:c,scale:o,animation:t.animation};this.moveTo(p)}},{key:"focus",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(void 0!==this.body.nodes[t]){var i={x:this.body.nodes[t].x,y:this.body.nodes[t].y};e.position=i,e.lockedOnNode=t,this.moveTo(e)}else console.log("Node: "+t+" cannot be found.")}},{key:"moveTo",value:function(t){if(void 0===t)return void(t={});void 0===t.offset&&(t.offset={x:0,y:0}),void 0===t.offset.x&&(t.offset.x=0),void 0===t.offset.y&&(t.offset.y=0),void 0===t.scale&&(t.scale=this.body.view.scale),void 0===t.position&&(t.position=this.getViewPosition()),void 0===t.animation&&(t.animation={duration:0}),!1===t.animation&&(t.animation={duration:0}),!0===t.animation&&(t.animation={}),void 0===t.animation.duration&&(t.animation.duration=1e3),void 0===t.animation.easingFunction&&(t.animation.easingFunction="easeInOutQuad"),this.animateView(t)}},{key:"animateView",value:function(t){if(void 0!==t){this.animationEasingFunction=t.animation.easingFunction,this.releaseNode(),!0===t.locked&&(this.lockedOnNodeId=t.lockedOnNode,this.lockedOnNodeOffset=t.offset),0!=this.easingTime&&this._transitionRedraw(!0),this.sourceScale=this.body.view.scale,this.sourceTranslation=this.body.view.translation,this.targetScale=t.scale,this.body.view.scale=this.targetScale;var e=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),i={x:e.x-t.position.x,y:e.y-t.position.y};this.targetTranslation={x:this.sourceTranslation.x+i.x*this.targetScale+t.offset.x,y:this.sourceTranslation.y+i.y*this.targetScale+t.offset.y},0===t.animation.duration?void 0!=this.lockedOnNodeId?(this.viewFunction=this._lockedRedraw.bind(this),this.body.emitter.on("initRedraw",this.viewFunction)):(this.body.view.scale=this.targetScale,this.body.view.translation=this.targetTranslation,this.body.emitter.emit("_requestRedraw")):(this.animationSpeed=1/(60*t.animation.duration*.001)||1/60,this.animationEasingFunction=t.animation.easingFunction,this.viewFunction=this._transitionRedraw.bind(this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering"))}}},{key:"_lockedRedraw",value:function(){var t={x:this.body.nodes[this.lockedOnNodeId].x,y:this.body.nodes[this.lockedOnNodeId].y},e=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),i={x:e.x-t.x,y:e.y-t.y},o=this.body.view.translation,n={x:o.x+i.x*this.body.view.scale+this.lockedOnNodeOffset.x,y:o.y+i.y*this.body.view.scale+this.lockedOnNodeOffset.y};this.body.view.translation=n}},{key:"releaseNode",value:function(){void 0!==this.lockedOnNodeId&&void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0)}},{key:"_transitionRedraw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.easingTime+=this.animationSpeed,this.easingTime=!0===t?1:this.easingTime;var e=h.easingFunctions[this.animationEasingFunction](this.easingTime);this.body.view.scale=this.sourceScale+(this.targetScale-this.sourceScale)*e,this.body.view.translation={x:this.sourceTranslation.x+(this.targetTranslation.x-this.sourceTranslation.x)*e,y:this.sourceTranslation.y+(this.targetTranslation.y-this.sourceTranslation.y)*e},this.easingTime>=1&&(this.body.emitter.off("initRedraw",this.viewFunction),this.easingTime=0,void 0!=this.lockedOnNodeId&&(this.viewFunction=this._lockedRedraw.bind(this),this.body.emitter.on("initRedraw",this.viewFunction)),this.body.emitter.emit("animationFinished"))}},{key:"getScale",value:function(){return this.body.view.scale}},{key:"getViewPosition",value:function(){return this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight})}}]),t}();e.default=l},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(2),d=i(233).default,l=i(104).default,u=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,this.navigationHandler=new d(e,i),this.body.eventListeners.onTap=this.onTap.bind(this),this.body.eventListeners.onTouch=this.onTouch.bind(this),this.body.eventListeners.onDoubleTap=this.onDoubleTap.bind(this),this.body.eventListeners.onHold=this.onHold.bind(this),this.body.eventListeners.onDragStart=this.onDragStart.bind(this),this.body.eventListeners.onDrag=this.onDrag.bind(this),this.body.eventListeners.onDragEnd=this.onDragEnd.bind(this),this.body.eventListeners.onMouseWheel=this.onMouseWheel.bind(this),this.body.eventListeners.onPinch=this.onPinch.bind(this),this.body.eventListeners.onMouseMove=this.onMouseMove.bind(this),this.body.eventListeners.onRelease=this.onRelease.bind(this),this.body.eventListeners.onContext=this.onContext.bind(this),this.touchTime=0,this.drag={},this.pinch={},this.popup=void 0,this.popupObj=void 0,this.popupTimer=void 0,this.body.functions.getPointer=this.getPointer.bind(this),this.options={},this.defaultOptions={dragNodes:!0,dragView:!0,hover:!1,keyboard:{enabled:!1,speed:{x:10,y:10,zoom:.02},bindToWindow:!0},navigationButtons:!1,tooltipDelay:300,zoomView:!0},h.extend(this.options,this.defaultOptions),this.bindEventListeners()}return(0,a.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("destroy",function(){clearTimeout(t.popupTimer),delete t.body.functions.getPointer})}},{key:"setOptions",value:function(t){if(void 0!==t){var e=["hideEdgesOnDrag","hideNodesOnDrag","keyboard","multiselect","selectable","selectConnectedEdges"];h.selectiveNotDeepExtend(e,this.options,t),h.mergeOptions(this.options,t,"keyboard"),t.tooltip&&(h.extend(this.options.tooltip,t.tooltip),t.tooltip.color&&(this.options.tooltip.color=h.parseColor(t.tooltip.color)))}this.navigationHandler.setOptions(this.options)}},{key:"getPointer",value:function(t){return{x:t.x-h.getAbsoluteLeft(this.canvas.frame.canvas),y:t.y-h.getAbsoluteTop(this.canvas.frame.canvas)}}},{key:"onTouch",value:function(t){(new Date).valueOf()-this.touchTime>50&&(this.drag.pointer=this.getPointer(t.center),this.drag.pinched=!1,this.pinch.scale=this.body.view.scale,this.touchTime=(new Date).valueOf())}},{key:"onTap",value:function(t){var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect&&(t.changedPointers[0].ctrlKey||t.changedPointers[0].metaKey);this.checkSelectionChanges(e,t,i),this.selectionHandler._generateClickEvent("click",t,e)}},{key:"onDoubleTap",value:function(t){var e=this.getPointer(t.center);this.selectionHandler._generateClickEvent("doubleClick",t,e)}},{key:"onHold",value:function(t){var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect;this.checkSelectionChanges(e,t,i),this.selectionHandler._generateClickEvent("click",t,e),this.selectionHandler._generateClickEvent("hold",t,e)}},{key:"onRelease",value:function(t){if((new Date).valueOf()-this.touchTime>10){var e=this.getPointer(t.center);this.selectionHandler._generateClickEvent("release",t,e),this.touchTime=(new Date).valueOf()}}},{key:"onContext",value:function(t){var e=this.getPointer({x:t.clientX,y:t.clientY});this.selectionHandler._generateClickEvent("oncontext",t,e)}},{key:"checkSelectionChanges",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.selectionHandler.getSelection(),n=!1;n=!0===i?this.selectionHandler.selectAdditionalOnPoint(t):this.selectionHandler.selectOnPoint(t);var s=this.selectionHandler.getSelection(),r=this._determineDifference(o,s),a=this._determineDifference(s,o);r.edges.length>0&&(this.selectionHandler._generateClickEvent("deselectEdge",e,t,o),n=!0),r.nodes.length>0&&(this.selectionHandler._generateClickEvent("deselectNode",e,t,o),n=!0),a.nodes.length>0&&(this.selectionHandler._generateClickEvent("selectNode",e,t),n=!0),a.edges.length>0&&(this.selectionHandler._generateClickEvent("selectEdge",e,t),n=!0),!0===n&&this.selectionHandler._generateClickEvent("select",e,t)}},{key:"_determineDifference",value:function(t,e){var i=function(t,e){for(var i=[],o=0;o<t.length;o++){var n=t[o];-1===e.indexOf(n)&&i.push(n)}return i};return{nodes:i(t.nodes,e.nodes),edges:i(t.edges,e.edges)}}},{key:"onDragStart",value:function(t){void 0===this.drag.pointer&&this.onTouch(t);var e=this.selectionHandler.getNodeAt(this.drag.pointer);if(this.drag.dragging=!0,this.drag.selection=[],this.drag.translation=h.extend({},this.body.view.translation),this.drag.nodeId=void 0,void 0!==e&&!0===this.options.dragNodes){this.drag.nodeId=e.id,!1===e.isSelected()&&(this.selectionHandler.unselectAll(),this.selectionHandler.selectObject(e)),this.selectionHandler._generateClickEvent("dragStart",t,this.drag.pointer);var i=this.selectionHandler.selectionObj.nodes;for(var o in i)if(i.hasOwnProperty(o)){var n=i[o],s={id:n.id,node:n,x:n.x,y:n.y,xFixed:n.options.fixed.x,yFixed:n.options.fixed.y};n.options.fixed.x=!0,n.options.fixed.y=!0,this.drag.selection.push(s)}}else this.selectionHandler._generateClickEvent("dragStart",t,this.drag.pointer,void 0,!0)}},{key:"onDrag",value:function(t){var e=this;if(!0!==this.drag.pinched){this.body.emitter.emit("unlockNode");var i=this.getPointer(t.center),o=this.drag.selection;if(o&&o.length&&!0===this.options.dragNodes){this.selectionHandler._generateClickEvent("dragging",t,i);var n=i.x-this.drag.pointer.x,s=i.y-this.drag.pointer.y;o.forEach(function(t){var i=t.node;!1===t.xFixed&&(i.x=e.canvas._XconvertDOMtoCanvas(e.canvas._XconvertCanvasToDOM(t.x)+n)),!1===t.yFixed&&(i.y=e.canvas._YconvertDOMtoCanvas(e.canvas._YconvertCanvasToDOM(t.y)+s))}),this.body.emitter.emit("startSimulation")}else if(!0===this.options.dragView){if(this.selectionHandler._generateClickEvent("dragging",t,i,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(t);var r=i.x-this.drag.pointer.x,a=i.y-this.drag.pointer.y;this.body.view.translation={x:this.drag.translation.x+r,y:this.drag.translation.y+a},this.body.emitter.emit("_requestRedraw")}}}},{key:"onDragEnd",value:function(t){this.drag.dragging=!1;var e=this.drag.selection;e&&e.length?(e.forEach(function(t){t.node.options.fixed.x=t.xFixed,t.node.options.fixed.y=t.yFixed}),this.selectionHandler._generateClickEvent("dragEnd",t,this.getPointer(t.center)),this.body.emitter.emit("startSimulation")):(this.selectionHandler._generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,!0),this.body.emitter.emit("_requestRedraw"))}},{key:"onPinch",value:function(t){var e=this.getPointer(t.center);this.drag.pinched=!0,void 0===this.pinch.scale&&(this.pinch.scale=1);var i=this.pinch.scale*t.scale;this.zoom(i,e)}},{key:"zoom",value:function(t,e){if(!0===this.options.zoomView){var i=this.body.view.scale;t<1e-5&&(t=1e-5),t>10&&(t=10);var o=void 0;void 0!==this.drag&&!0===this.drag.dragging&&(o=this.canvas.DOMtoCanvas(this.drag.pointer));var n=this.body.view.translation,s=t/i,r=(1-s)*e.x+n.x*s,a=(1-s)*e.y+n.y*s;if(this.body.view.scale=t,this.body.view.translation={x:r,y:a},void 0!=o){var h=this.canvas.canvasToDOM(o);this.drag.pointer.x=h.x,this.drag.pointer.y=h.y}this.body.emitter.emit("_requestRedraw"),i<t?this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:e}):this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:e})}}},{key:"onMouseWheel",value:function(t){if(!0===this.options.zoomView){var e=0;if(t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),0!==e){var i=this.body.view.scale,o=e/10;e<0&&(o/=1-o),i*=1+o;var n=this.getPointer({x:t.clientX,y:t.clientY});this.zoom(i,n)}t.preventDefault()}}},{key:"onMouseMove",value:function(t){var e=this,i=this.getPointer({x:t.clientX,y:t.clientY}),o=!1;void 0!==this.popup&&(!1===this.popup.hidden&&this._checkHidePopup(i),!1===this.popup.hidden&&(o=!0,this.popup.setPosition(i.x+3,i.y-5),this.popup.show())),!1===this.options.keyboard.bindToWindow&&!0===this.options.keyboard.enabled&&this.canvas.frame.focus(),!1===o&&(void 0!==this.popupTimer&&(clearInterval(this.popupTimer),this.popupTimer=void 0),this.drag.dragging||(this.popupTimer=setTimeout(function(){return e._checkShowPopup(i)},this.options.tooltipDelay))),!0===this.options.hover&&this.selectionHandler.hoverObject(t,i)}},{key:"_checkShowPopup",value:function(t){var e=this.canvas._XconvertDOMtoCanvas(t.x),i=this.canvas._YconvertDOMtoCanvas(t.y),o={left:e,top:i,right:e,bottom:i},n=void 0===this.popupObj?void 0:this.popupObj.id,s=!1,r="node";if(void 0===this.popupObj){for(var a=this.body.nodeIndices,h=this.body.nodes,d=void 0,u=[],c=0;c<a.length;c++)d=h[a[c]],!0===d.isOverlappingWith(o)&&void 0!==d.getTitle()&&u.push(a[c]);u.length>0&&(this.popupObj=h[u[u.length-1]],s=!0)}if(void 0===this.popupObj&&!1===s){for(var p=this.body.edgeIndices,f=this.body.edges,m=void 0,v=[],g=0;g<p.length;g++)m=f[p[g]],!0===m.isOverlappingWith(o)&&!0===m.connected&&void 0!==m.getTitle()&&v.push(p[g]);v.length>0&&(this.popupObj=f[v[v.length-1]],r="edge")}void 0!==this.popupObj?this.popupObj.id!==n&&(void 0===this.popup&&(this.popup=new l(this.canvas.frame)),this.popup.popupTargetType=r,this.popup.popupTargetId=this.popupObj.id,this.popup.setPosition(t.x+3,t.y-5),this.popup.setText(this.popupObj.getTitle()),this.popup.show(),this.body.emitter.emit("showPopup",this.popupObj.id)):void 0!==this.popup&&(this.popup.hide(),this.body.emitter.emit("hidePopup"))}},{key:"_checkHidePopup",value:function(t){var e=this.selectionHandler._pointerToPositionObject(t),i=!1;if("node"===this.popup.popupTargetType){if(void 0!==this.body.nodes[this.popup.popupTargetId]&&!0===(i=this.body.nodes[this.popup.popupTargetId].isOverlappingWith(e))){var o=this.selectionHandler.getNodeAt(t);i=void 0!==o&&o.id===this.popup.popupTargetId}}else void 0===this.selectionHandler.getNodeAt(t)&&void 0!==this.body.edges[this.popup.popupTargetId]&&(i=this.body.edges[this.popup.popupTargetId].isOverlappingWith(e));!1===i&&(this.popupObj=void 0,this.popup.hide(),this.body.emitter.emit("hidePopup"))}}]),t}();e.default=u},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(10),d=i(37),l=i(35),u=function(){function t(e,i){var o=this;(0,s.default)(this,t),this.body=e,this.canvas=i,this.iconsCreated=!1,this.navigationHammers=[],this.boundFunctions={},this.touchTime=0,this.activated=!1,this.body.emitter.on("activate",function(){o.activated=!0,o.configureKeyboardBindings()}),this.body.emitter.on("deactivate",function(){o.activated=!1,o.configureKeyboardBindings()}),this.body.emitter.on("destroy",function(){void 0!==o.keycharm&&o.keycharm.destroy()}),this.options={}}return(0,a.default)(t,[{key:"setOptions",value:function(t){void 0!==t&&(this.options=t,this.create())}},{key:"create",value:function(){!0===this.options.navigationButtons?!1===this.iconsCreated&&this.loadNavigationElements():!0===this.iconsCreated&&this.cleanNavigation(),this.configureKeyboardBindings()}},{key:"cleanNavigation",value:function(){if(0!=this.navigationHammers.length){for(var t=0;t<this.navigationHammers.length;t++)this.navigationHammers[t].destroy();this.navigationHammers=[]}this.navigationDOM&&this.navigationDOM.wrapper&&this.navigationDOM.wrapper.parentNode&&this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper),this.iconsCreated=!1}},{key:"loadNavigationElements",value:function(){var t=this;this.cleanNavigation(),this.navigationDOM={};var e=["up","down","left","right","zoomIn","zoomOut","zoomExtends"],i=["_moveUp","_moveDown","_moveLeft","_moveRight","_zoomIn","_zoomOut","_fit"];this.navigationDOM.wrapper=document.createElement("div"),this.navigationDOM.wrapper.className="vis-navigation",this.canvas.frame.appendChild(this.navigationDOM.wrapper);for(var o=0;o<e.length;o++){this.navigationDOM[e[o]]=document.createElement("div"),this.navigationDOM[e[o]].className="vis-button vis-"+e[o],this.navigationDOM.wrapper.appendChild(this.navigationDOM[e[o]]);var n=new h(this.navigationDOM[e[o]]);"_fit"===i[o]?d.onTouch(n,this._fit.bind(this)):d.onTouch(n,this.bindToRedraw.bind(this,i[o])),this.navigationHammers.push(n)}var s=new h(this.canvas.frame);d.onRelease(s,function(){t._stopMovement()}),this.navigationHammers.push(s),this.iconsCreated=!0}},{key:"bindToRedraw",value:function(t){void 0===this.boundFunctions[t]&&(this.boundFunctions[t]=this[t].bind(this),this.body.emitter.on("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_startRendering"))}},{key:"unbindFromRedraw",value:function(t){void 0!==this.boundFunctions[t]&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_stopRendering"),delete this.boundFunctions[t])}},{key:"_fit",value:function(){(new Date).valueOf()-this.touchTime>700&&(this.body.emitter.emit("fit",{duration:700}),this.touchTime=(new Date).valueOf())}},{key:"_stopMovement",value:function(){for(var t in this.boundFunctions)this.boundFunctions.hasOwnProperty(t)&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_stopRendering"));this.boundFunctions={}}},{key:"_moveUp",value:function(){this.body.view.translation.y+=this.options.keyboard.speed.y}},{key:"_moveDown",value:function(){this.body.view.translation.y-=this.options.keyboard.speed.y}},{key:"_moveLeft",value:function(){this.body.view.translation.x+=this.options.keyboard.speed.x}},{key:"_moveRight",value:function(){this.body.view.translation.x-=this.options.keyboard.speed.x}},{key:"_zoomIn",value:function(){var t=this.body.view.scale,e=this.body.view.scale*(1+this.options.keyboard.speed.zoom),i=this.body.view.translation,o=e/t,n=(1-o)*this.canvas.canvasViewCenter.x+i.x*o,s=(1-o)*this.canvas.canvasViewCenter.y+i.y*o;this.body.view.scale=e,this.body.view.translation={x:n,y:s},this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:null})}},{key:"_zoomOut",value:function(){var t=this.body.view.scale,e=this.body.view.scale/(1+this.options.keyboard.speed.zoom),i=this.body.view.translation,o=e/t,n=(1-o)*this.canvas.canvasViewCenter.x+i.x*o,s=(1-o)*this.canvas.canvasViewCenter.y+i.y*o;this.body.view.scale=e,this.body.view.translation={x:n,y:s},this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:null})}},{key:"configureKeyboardBindings",value:function(){var t=this;void 0!==this.keycharm&&this.keycharm.destroy(),!0===this.options.keyboard.enabled&&(!0===this.options.keyboard.bindToWindow?this.keycharm=l({container:window,preventDefault:!0}):this.keycharm=l({container:this.canvas.frame,preventDefault:!0}),this.keycharm.reset(),!0===this.activated&&(this.keycharm.bind("up",function(){t.bindToRedraw("_moveUp")},"keydown"),this.keycharm.bind("down",function(){t.bindToRedraw("_moveDown")},"keydown"),this.keycharm.bind("left",function(){t.bindToRedraw("_moveLeft")},"keydown"),this.keycharm.bind("right",function(){t.bindToRedraw("_moveRight")},"keydown"),this.keycharm.bind("=",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("num+",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("num-",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("-",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("[",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("]",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("pageup",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("pagedown",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("up",function(){t.unbindFromRedraw("_moveUp")},"keyup"),this.keycharm.bind("down",function(){t.unbindFromRedraw("_moveDown")},"keyup"),this.keycharm.bind("left",function(){t.unbindFromRedraw("_moveLeft")},"keyup"),this.keycharm.bind("right",function(){t.unbindFromRedraw("_moveRight")},"keyup"),this.keycharm.bind("=",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("num+",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("num-",function(){t.unbindFromRedraw("_zoomOut")},"keyup"),this.keycharm.bind("-",function(){t.unbindFromRedraw("_zoomOut")},"keyup"),this.keycharm.bind("[",function(){t.unbindFromRedraw("_zoomOut")},"keyup"),this.keycharm.bind("]",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("pageup",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("pagedown",function(){t.unbindFromRedraw("_zoomOut")},"keyup")))}}]),t}();e.default=u},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=i(47).default,d=i(74).default,l=i(2),u=function(){function t(e,i){var o=this;(0,s.default)(this,t),this.body=e,this.canvas=i,this.selectionObj={nodes:[],edges:[]},this.hoverObj={nodes:{},edges:{}},this.options={},this.defaultOptions={multiselect:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0},l.extend(this.options,this.defaultOptions),this.body.emitter.on("_dataChanged",function(){o.updateSelection()})}return(0,a.default)(t,[{key:"setOptions",value:function(t){if(void 0!==t){var e=["multiselect","hoverConnectedEdges","selectable","selectConnectedEdges"];l.selectiveDeepExtend(e,this.options,t)}}},{key:"selectOnPoint",value:function(t){var e=!1;if(!0===this.options.selectable){var i=this.getNodeAt(t)||this.getEdgeAt(t);this.unselectAll(),void 0!==i&&(e=this.selectObject(i)),this.body.emitter.emit("_requestRedraw")}return e}},{key:"selectAdditionalOnPoint",value:function(t){var e=!1;if(!0===this.options.selectable){var i=this.getNodeAt(t)||this.getEdgeAt(t);void 0!==i&&(e=!0,!0===i.isSelected()?this.deselectObject(i):this.selectObject(i),this.body.emitter.emit("_requestRedraw"))}return e}},{key:"_initBaseEvent",value:function(t,e){var i={};return i.pointer={DOM:{x:e.x,y:e.y},canvas:this.canvas.DOMtoCanvas(e)},i.event=t,i}},{key:"_generateClickEvent",value:function(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=this._initBaseEvent(e,i);if(!0===n)s.nodes=[],s.edges=[];else{var r=this.getSelection();s.nodes=r.nodes,s.edges=r.edges}void 0!==o&&(s.previousSelection=o),"click"==t&&(s.items=this.getClickedItems(i)),this.body.emitter.emit(t,s)}},{key:"selectObject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.selectConnectedEdges;return void 0!==t&&(t instanceof h&&!0===e&&this._selectConnectedEdges(t),t.select(),this._addToSelection(t),!0)}},{key:"deselectObject",value:function(t){!0===t.isSelected()&&(t.selected=!1,this._removeFromSelection(t))}},{key:"_getAllNodesOverlappingWith",value:function(t){for(var e=[],i=this.body.nodes,o=0;o<this.body.nodeIndices.length;o++){var n=this.body.nodeIndices[o];i[n].isOverlappingWith(t)&&e.push(n)}return e}},{key:"_pointerToPositionObject",value:function(t){var e=this.canvas.DOMtoCanvas(t);return{left:e.x-1,top:e.y+1,right:e.x+1,bottom:e.y-1}}},{key:"getNodeAt",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this._pointerToPositionObject(t),o=this._getAllNodesOverlappingWith(i);return o.length>0?!0===e?this.body.nodes[o[o.length-1]]:o[o.length-1]:void 0}},{key:"_getEdgesOverlappingWith",value:function(t,e){for(var i=this.body.edges,o=0;o<this.body.edgeIndices.length;o++){var n=this.body.edgeIndices[o];i[n].isOverlappingWith(t)&&e.push(n)}}},{key:"_getAllEdgesOverlappingWith",value:function(t){var e=[];return this._getEdgesOverlappingWith(t,e),e}},{key:"getEdgeAt",value:function(t){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.canvas.DOMtoCanvas(t),o=10,n=null,s=this.body.edges,r=0;r<this.body.edgeIndices.length;r++){var a=this.body.edgeIndices[r],h=s[a];if(h.connected){var d=h.from.x,l=h.from.y,u=h.to.x,c=h.to.y,p=h.edgeType.getDistanceToEdge(d,l,u,c,i.x,i.y);p<o&&(n=a,o=p)}}return null!==n?!0===e?this.body.edges[n]:n:void 0}},{key:"_addToSelection",value:function(t){t instanceof h?this.selectionObj.nodes[t.id]=t:this.selectionObj.edges[t.id]=t}},{key:"_addToHover",value:function(t){t instanceof h?this.hoverObj.nodes[t.id]=t:this.hoverObj.edges[t.id]=t}},{key:"_removeFromSelection",value:function(t){t instanceof h?(delete this.selectionObj.nodes[t.id],this._unselectConnectedEdges(t)):delete this.selectionObj.edges[t.id]}},{key:"unselectAll",value:function(){for(var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t)&&this.selectionObj.nodes[t].unselect();for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&this.selectionObj.edges[e].unselect();this.selectionObj={nodes:{},edges:{}}}},{key:"_getSelectedNodeCount",value:function(){var t=0;for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&(t+=1);return t}},{key:"_getSelectedNode",value:function(){for(var t in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(t))return this.selectionObj.nodes[t]}},{key:"_getSelectedEdge",value:function(){for(var t in this.selectionObj.edges)if(this.selectionObj.edges.hasOwnProperty(t))return this.selectionObj.edges[t]}},{key:"_getSelectedEdgeCount",value:function(){var t=0;for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&(t+=1);return t}},{key:"_getSelectedObjectCount",value:function(){var t=0;for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&(t+=1);for(var i in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(i)&&(t+=1);return t}},{key:"_selectionIsEmpty",value:function(){for(var t in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(t))return!1;for(var e in this.selectionObj.edges)if(this.selectionObj.edges.hasOwnProperty(e))return!1;return!0}},{key:"_clusterInSelection",value:function(){for(var t in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(t)&&this.selectionObj.nodes[t].clusterSize>1)return!0;return!1}},{key:"_selectConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e];i.select(),this._addToSelection(i)}}},{key:"_hoverConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e];i.hover=!0,this._addToHover(i)}}},{key:"_unselectConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e];i.unselect(),this._removeFromSelection(i)}}},{key:"emitBlurEvent",value:function(t,e,i){var o=this._initBaseEvent(t,e);!0===i.hover&&(i.hover=!1,i instanceof h?(o.node=i.id,this.body.emitter.emit("blurNode",o)):(o.edge=i.id,this.body.emitter.emit("blurEdge",o)))}},{key:"emitHoverEvent",value:function(t,e,i){var o=this._initBaseEvent(t,e),n=!1;return!1===i.hover&&(i.hover=!0,this._addToHover(i),n=!0,i instanceof h?(o.node=i.id,this.body.emitter.emit("hoverNode",o)):(o.edge=i.id,this.body.emitter.emit("hoverEdge",o))),n}},{key:"hoverObject",value:function(t,e){var i=this.getNodeAt(e);void 0===i&&(i=this.getEdgeAt(e));var o=!1;for(var n in this.hoverObj.nodes)this.hoverObj.nodes.hasOwnProperty(n)&&(void 0===i||i instanceof h&&i.id!=n||i instanceof d)&&(this.emitBlurEvent(t,e,this.hoverObj.nodes[n]),delete this.hoverObj.nodes[n],o=!0);for(var s in this.hoverObj.edges)this.hoverObj.edges.hasOwnProperty(s)&&(!0===o?(this.hoverObj.edges[s].hover=!1,delete this.hoverObj.edges[s]):(void 0===i||i instanceof d&&i.id!=s||i instanceof h&&!i.hover)&&(this.emitBlurEvent(t,e,this.hoverObj.edges[s]),delete this.hoverObj.edges[s],o=!0));void 0!==i&&(o=o||this.emitHoverEvent(t,e,i),i instanceof h&&!0===this.options.hoverConnectedEdges&&this._hoverConnectedEdges(i)),!0===o&&this.body.emitter.emit("_requestRedraw")}},{key:"getSelection",value:function(){return{nodes:this.getSelectedNodes(),edges:this.getSelectedEdges()}}},{key:"getSelectedNodes",value:function(){var t=[];if(!0===this.options.selectable)for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&t.push(this.selectionObj.nodes[e].id);return t}},{key:"getSelectedEdges",value:function(){var t=[];if(!0===this.options.selectable)for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&t.push(this.selectionObj.edges[e].id);return t}},{key:"setSelection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=void 0,o=void 0
;if(!t||!t.nodes&&!t.edges)throw"Selection must be an object with nodes and/or edges properties";if((e.unselectAll||void 0===e.unselectAll)&&this.unselectAll(),t.nodes)for(i=0;i<t.nodes.length;i++){o=t.nodes[i];var n=this.body.nodes[o];if(!n)throw new RangeError('Node with id "'+o+'" not found');this.selectObject(n,e.highlightEdges)}if(t.edges)for(i=0;i<t.edges.length;i++){o=t.edges[i];var s=this.body.edges[o];if(!s)throw new RangeError('Edge with id "'+o+'" not found');this.selectObject(s)}this.body.emitter.emit("_requestRedraw")}},{key:"selectNodes",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t||void 0===t.length)throw"Selection must be an array with ids";this.setSelection({nodes:t},{highlightEdges:e})}},{key:"selectEdges",value:function(t){if(!t||void 0===t.length)throw"Selection must be an array with ids";this.setSelection({edges:t})}},{key:"updateSelection",value:function(){for(var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t)&&(this.body.nodes.hasOwnProperty(t)||delete this.selectionObj.nodes[t]);for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&(this.body.edges.hasOwnProperty(e)||delete this.selectionObj.edges[e])}},{key:"getClickedItems",value:function(t){for(var e=this.canvas.DOMtoCanvas(t),i=[],o=this.body.nodeIndices,n=this.body.nodes,s=o.length-1;s>=0;s--){var r=n[o[s]],a=r.getItemsOnPoint(e);i.push.apply(i,a)}for(var h=this.body.edgeIndices,d=this.body.edges,l=h.length-1;l>=0;l--){var u=d[h[l]],c=u.getItemsOnPoint(e);i.push.apply(i,c)}return i}}]),t}();e.default=u},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(30),s=o(n),r=i(6),a=o(r),h=i(8),d=o(h),l=i(0),u=o(l),c=i(1),p=o(c),f=i(2),m=i(76).default,v=i(236),g=v.HorizontalStrategy,y=v.VerticalStrategy,b=function(){function t(){(0,u.default)(this,t),this.childrenReference={},this.parentReference={},this.trees={},this.distributionOrdering={},this.levels={},this.distributionIndex={},this.isTree=!1,this.treeIndex=-1}return(0,p.default)(t,[{key:"addRelation",value:function(t,e){void 0===this.childrenReference[t]&&(this.childrenReference[t]=[]),this.childrenReference[t].push(e),void 0===this.parentReference[e]&&(this.parentReference[e]=[]),this.parentReference[e].push(t)}},{key:"checkIfTree",value:function(){for(var t in this.parentReference)if(this.parentReference[t].length>1)return void(this.isTree=!1);this.isTree=!0}},{key:"numTrees",value:function(){return this.treeIndex+1}},{key:"setTreeIndex",value:function(t,e){void 0!==e&&void 0===this.trees[t.id]&&(this.trees[t.id]=e,this.treeIndex=Math.max(e,this.treeIndex))}},{key:"ensureLevel",value:function(t){void 0===this.levels[t]&&(this.levels[t]=0)}},{key:"getMaxLevel",value:function(t){var e=this,i={};return function t(o){if(void 0!==i[o])return i[o];var n=e.levels[o];if(e.childrenReference[o]){var s=e.childrenReference[o];if(s.length>0)for(var r=0;r<s.length;r++)n=Math.max(n,t(s[r]))}return i[o]=n,n}(t)}},{key:"levelDownstream",value:function(t,e){void 0===this.levels[e.id]&&(void 0===this.levels[t.id]&&(this.levels[t.id]=0),this.levels[e.id]=this.levels[t.id]+1)}},{key:"setMinLevelToZero",value:function(t){var e=1e9;for(var i in t)t.hasOwnProperty(i)&&void 0!==this.levels[i]&&(e=Math.min(this.levels[i],e));for(var o in t)t.hasOwnProperty(o)&&void 0!==this.levels[o]&&(this.levels[o]-=e)}},{key:"getTreeSize",value:function(t,e){var i=1e9,o=-1e9,n=1e9,s=-1e9;for(var r in this.trees)if(this.trees.hasOwnProperty(r)&&this.trees[r]===e){var a=t[r];i=Math.min(a.x,i),o=Math.max(a.x,o),n=Math.min(a.y,n),s=Math.max(a.y,s)}return{min_x:i,max_x:o,min_y:n,max_y:s}}},{key:"hasSameParent",value:function(t,e){var i=this.parentReference[t.id],o=this.parentReference[e.id];if(void 0===i||void 0===o)return!1;for(var n=0;n<i.length;n++)for(var s=0;s<o.length;s++)if(i[n]==o[s])return!0;return!1}},{key:"inSameSubNetwork",value:function(t,e){return this.trees[t.id]===this.trees[e.id]}},{key:"getLevels",value:function(){return(0,d.default)(this.distributionOrdering)}},{key:"addToOrdering",value:function(t,e){void 0===this.distributionOrdering[e]&&(this.distributionOrdering[e]=[]);var i=!1,o=this.distributionOrdering[e];for(var n in o)if(o[n]===t){i=!0;break}i||(this.distributionOrdering[e].push(t),this.distributionIndex[t.id]=this.distributionOrdering[e].length-1)}}]),t}(),_=function(){function t(e){(0,u.default)(this,t),this.body=e,this.initialRandomSeed=Math.round(1e6*Math.random()),this.randomSeed=this.initialRandomSeed,this.setPhysics=!1,this.options={},this.optionsBackup={physics:{}},this.defaultOptions={randomSeed:void 0,improvedLayout:!0,hierarchical:{enabled:!1,levelSeparation:150,nodeSpacing:100,treeSpacing:200,blockShifting:!0,edgeMinimization:!0,parentCentralization:!0,direction:"UD",sortMethod:"hubsize"}},f.extend(this.options,this.defaultOptions),this.bindEventListeners()}return(0,p.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("_dataChanged",function(){t.setupHierarchicalLayout()}),this.body.emitter.on("_dataLoaded",function(){t.layoutNetwork()}),this.body.emitter.on("_resetHierarchicalLayout",function(){t.setupHierarchicalLayout()}),this.body.emitter.on("_adjustEdgesForHierarchicalLayout",function(){if(!0===t.options.hierarchical.enabled){var e=t.direction.curveType();t.body.emitter.emit("_forceDisableDynamicCurves",e,!1)}})}},{key:"setOptions",value:function(t,e){if(void 0!==t){var i=this.options.hierarchical,o=i.enabled;if(f.selectiveDeepExtend(["randomSeed","improvedLayout"],this.options,t),f.mergeOptions(this.options,t,"hierarchical"),void 0!==t.randomSeed&&(this.initialRandomSeed=t.randomSeed),!0===i.enabled)return!0===o&&this.body.emitter.emit("refresh",!0),"RL"===i.direction||"DU"===i.direction?i.levelSeparation>0&&(i.levelSeparation*=-1):i.levelSeparation<0&&(i.levelSeparation*=-1),this.setDirectionStrategy(),this.body.emitter.emit("_resetHierarchicalLayout"),this.adaptAllOptionsForHierarchicalLayout(e);if(!0===o)return this.body.emitter.emit("refresh"),f.deepExtend(e,this.optionsBackup)}return e}},{key:"adaptAllOptionsForHierarchicalLayout",value:function(t){if(!0===this.options.hierarchical.enabled){var e=this.optionsBackup.physics;void 0===t.physics||!0===t.physics?(t.physics={enabled:void 0===e.enabled||e.enabled,solver:"hierarchicalRepulsion"},e.enabled=void 0===e.enabled||e.enabled,e.solver=e.solver||"barnesHut"):"object"===(0,a.default)(t.physics)?(e.enabled=void 0===t.physics.enabled||t.physics.enabled,e.solver=t.physics.solver||"barnesHut",t.physics.solver="hierarchicalRepulsion"):!1!==t.physics&&(e.solver="barnesHut",t.physics={solver:"hierarchicalRepulsion"});var i=this.direction.curveType();if(void 0===t.edges)this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},t.edges={smooth:!1};else if(void 0===t.edges.smooth)this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},t.edges.smooth=!1;else if("boolean"==typeof t.edges.smooth)this.optionsBackup.edges={smooth:t.edges.smooth},t.edges.smooth={enabled:t.edges.smooth,type:i};else{var o=t.edges.smooth;void 0!==o.type&&"dynamic"!==o.type&&(i=o.type),this.optionsBackup.edges={smooth:void 0===o.enabled||o.enabled,type:void 0===o.type?"dynamic":o.type,roundness:void 0===o.roundness?.5:o.roundness,forceDirection:void 0!==o.forceDirection&&o.forceDirection},t.edges.smooth={enabled:void 0===o.enabled||o.enabled,type:i,roundness:void 0===o.roundness?.5:o.roundness,forceDirection:void 0!==o.forceDirection&&o.forceDirection}}this.body.emitter.emit("_forceDisableDynamicCurves",i)}return t}},{key:"seededRandom",value:function(){var t=1e4*Math.sin(this.randomSeed++);return t-Math.floor(t)}},{key:"positionInitially",value:function(t){if(!0!==this.options.hierarchical.enabled){this.randomSeed=this.initialRandomSeed;for(var e=t.length+50,i=0;i<t.length;i++){var o=t[i],n=2*Math.PI*this.seededRandom();void 0===o.x&&(o.x=e*Math.cos(n)),void 0===o.y&&(o.y=e*Math.sin(n))}}}},{key:"layoutNetwork",value:function(){if(!0!==this.options.hierarchical.enabled&&!0===this.options.improvedLayout){for(var t=this.body.nodeIndices,e=0,i=0;i<t.length;i++){!0===this.body.nodes[t[i]].predefinedPosition&&(e+=1)}if(e<.5*t.length){var o=0,n={clusterNodeProperties:{shape:"ellipse",label:"",group:"",font:{multi:!1}},clusterEdgeProperties:{label:"",font:{multi:!1},smooth:{enabled:!1}}};if(t.length>150){for(var s=t.length;t.length>150&&o<=10;){o+=1;var r=t.length;o%3==0?this.body.modules.clustering.clusterBridges(n):this.body.modules.clustering.clusterOutliers(n);if(r==t.length&&o%3!=0)return this._declusterAll(),this.body.emitter.emit("_layoutFailed"),void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.")}this.body.modules.kamadaKawai.setOptions({springLength:Math.max(150,2*s)})}o>10&&console.info("The clustering didn't succeed within the amount of interations allowed, progressing with partial result."),this.body.modules.kamadaKawai.solve(t,this.body.edgeIndices,!0),this._shiftToCenter();for(var a=0;a<t.length;a++){var h=this.body.nodes[t[a]];!1===h.predefinedPosition&&(h.x+=70*(.5-this.seededRandom()),h.y+=70*(.5-this.seededRandom()))}this._declusterAll(),this.body.emitter.emit("_repositionBezierNodes")}}}},{key:"_shiftToCenter",value:function(){for(var t=m.getRangeCore(this.body.nodes,this.body.nodeIndices),e=m.findCenter(t),i=0;i<this.body.nodeIndices.length;i++){var o=this.body.nodes[this.body.nodeIndices[i]];o.x-=e.x,o.y-=e.y}}},{key:"_declusterAll",value:function(){for(var t=!0;!0===t;){t=!1;for(var e=0;e<this.body.nodeIndices.length;e++)!0===this.body.nodes[this.body.nodeIndices[e]].isCluster&&(t=!0,this.body.modules.clustering.openCluster(this.body.nodeIndices[e],{},!1));!0===t&&this.body.emitter.emit("_dataChanged")}}},{key:"getSeed",value:function(){return this.initialRandomSeed}},{key:"setupHierarchicalLayout",value:function(){if(!0===this.options.hierarchical.enabled&&this.body.nodeIndices.length>0){var t=void 0,e=void 0,i=!1,o=!1;this.lastNodeOnLevel={},this.hierarchical=new b;for(e in this.body.nodes)this.body.nodes.hasOwnProperty(e)&&(t=this.body.nodes[e],void 0!==t.options.level?(i=!0,this.hierarchical.levels[e]=t.options.level):o=!0);if(!0===o&&!0===i)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.");if(!0===o){var n=this.options.hierarchical.sortMethod;"hubsize"===n?this._determineLevelsByHubsize():"directed"===n?this._determineLevelsDirected():"custom"===n&&this._determineLevelsCustomCallback()}for(var s in this.body.nodes)this.body.nodes.hasOwnProperty(s)&&this.hierarchical.ensureLevel(s);var r=this._getDistribution();this._generateMap(),this._placeNodesByHierarchy(r),this._condenseHierarchy(),this._shiftToCenter()}}},{key:"_condenseHierarchy",value:function(){var t=this,e=!1,i={},o=function(e,i){var o=t.hierarchical.trees;for(var n in o)o.hasOwnProperty(n)&&o[n]===e&&t.direction.shift(n,i)},n=function(){for(var e=[],i=0;i<t.hierarchical.numTrees();i++)e.push(t.direction.getTreeSize(i));return e},r=function e(i,o){if(!o[i.id]&&(o[i.id]=!0,t.hierarchical.childrenReference[i.id])){var n=t.hierarchical.childrenReference[i.id];if(n.length>0)for(var s=0;s<n.length;s++)e(t.body.nodes[n[s]],o)}},a=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e9,o=1e9,n=1e9,r=1e9,a=-1e9;for(var h in e)if(e.hasOwnProperty(h)){var d=t.body.nodes[h],l=t.hierarchical.levels[d.id],u=t.direction.getPosition(d),c=t._getSpaceAroundNode(d,e),p=(0,s.default)(c,2),f=p[0],m=p[1];o=Math.min(f,o),n=Math.min(m,n),l<=i&&(r=Math.min(u,r),a=Math.max(u,a))}return[r,a,o,n]},h=function(e,i){var o=t.hierarchical.getMaxLevel(e.id),n=t.hierarchical.getMaxLevel(i.id);return Math.min(o,n)},d=function(e,i,o){for(var n=t.hierarchical,s=0;s<i.length;s++){var r=i[s],a=n.distributionOrdering[r];if(a.length>1)for(var h=0;h<a.length-1;h++){var d=a[h],l=a[h+1];n.hasSameParent(d,l)&&n.inSameSubNetwork(d,l)&&e(d,l,o)}}},l=function(i,o){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=t.direction.getPosition(i),d=t.direction.getPosition(o),l=Math.abs(d-s),u=t.options.hierarchical.nodeSpacing;if(l>u){var c={},p={};r(i,c),r(o,p);var f=h(i,o),m=a(c,f),v=a(p,f),g=m[1],y=v[0],b=v[2];if(Math.abs(g-y)>u){var _=g-y+u;_<-b+u&&(_=-b+u),_<0&&(t._shiftBlock(o.id,_),e=!0,!0===n&&t._centerParent(o))}}},u=function(o,n){for(var h=n.id,d=n.edges,l=t.hierarchical.levels[n.id],u=t.options.hierarchical.levelSeparation*t.options.hierarchical.levelSeparation,c={},p=[],f=0;f<d.length;f++){var m=d[f];if(m.toId!=m.fromId){var v=m.toId==h?m.from:m.to;c[d[f].id]=v,t.hierarchical.levels[v.id]<l&&p.push(m)}}var g=function(e,i){for(var o=0,n=0;n<i.length;n++)if(void 0!==c[i[n].id]){var s=t.direction.getPosition(c[i[n].id])-e;o+=s/Math.sqrt(s*s+u)}return o},y=function(e,i){for(var o=0,n=0;n<i.length;n++)if(void 0!==c[i[n].id]){var s=t.direction.getPosition(c[i[n].id])-e;o-=u*Math.pow(s*s+u,-1.5)}return o},b=function(e,i){for(var o=t.direction.getPosition(n),s={},r=0;r<e;r++){var a=g(o,i),h=y(o,i);if(o-=Math.max(-40,Math.min(40,Math.round(a/h))),void 0!==s[o])break;s[o]=r}return o},_=b(o,p);!function(o){var s=t.direction.getPosition(n);if(void 0===i[n.id]){var h={};r(n,h),i[n.id]=h}var d=a(i[n.id]),l=d[2],u=d[3],c=o-s,p=0;c>0?p=Math.min(c,u-t.options.hierarchical.nodeSpacing):c<0&&(p=-Math.min(-c,l-t.options.hierarchical.nodeSpacing)),0!=p&&(t._shiftBlock(n.id,p),e=!0)}(_),_=b(o,d),function(i){var o=t.direction.getPosition(n),r=t._getSpaceAroundNode(n),a=(0,s.default)(r,2),h=a[0],d=a[1],l=i-o,u=o;l>0?u=Math.min(o+(d-t.options.hierarchical.nodeSpacing),i):l<0&&(u=Math.max(o-(h-t.options.hierarchical.nodeSpacing),i)),u!==o&&(t.direction.setPosition(n,u),e=!0)}(_)};!0===this.options.hierarchical.blockShifting&&(function(i){var o=t.hierarchical.getLevels();o=o.reverse();for(var n=0;n<i&&(e=!1,d(l,o,!0),!0===e);n++);}(5),function(){for(var e in t.body.nodes)t.body.nodes.hasOwnProperty(e)&&t._centerParent(t.body.nodes[e])}()),!0===this.options.hierarchical.edgeMinimization&&function(i){var o=t.hierarchical.getLevels();o=o.reverse();for(var n=0;n<i;n++){e=!1;for(var s=0;s<o.length;s++)for(var r=o[s],a=t.hierarchical.distributionOrdering[r],h=0;h<a.length;h++)u(1e3,a[h]);if(!0!==e)break}}(20),!0===this.options.hierarchical.parentCentralization&&function(){var e=t.hierarchical.getLevels();e=e.reverse();for(var i=0;i<e.length;i++)for(var o=e[i],n=t.hierarchical.distributionOrdering[o],s=0;s<n.length;s++)t._centerParent(n[s])}(),function(){for(var e=n(),i=0,s=0;s<e.length-1;s++){i+=e[s].max-e[s+1].min+t.options.hierarchical.treeSpacing,o(s+1,i)}}()}},{key:"_getSpaceAroundNode",value:function(t,e){var i=!0;void 0===e&&(i=!1);var o=this.hierarchical.levels[t.id];if(void 0!==o){var n=this.hierarchical.distributionIndex[t.id],s=this.direction.getPosition(t),r=this.hierarchical.distributionOrdering[o],a=1e9,h=1e9;if(0!==n){var d=r[n-1];if(!0===i&&void 0===e[d.id]||!1===i){a=s-this.direction.getPosition(d)}}if(n!=r.length-1){var l=r[n+1];if(!0===i&&void 0===e[l.id]||!1===i){var u=this.direction.getPosition(l);h=Math.min(h,u-s)}}return[a,h]}return[0,0]}},{key:"_centerParent",value:function(t){if(this.hierarchical.parentReference[t.id])for(var e=this.hierarchical.parentReference[t.id],i=0;i<e.length;i++){var o=e[i],n=this.body.nodes[o],r=this.hierarchical.childrenReference[o];if(void 0!==r){var a=this._getCenterPosition(r),h=this.direction.getPosition(n),d=this._getSpaceAroundNode(n),l=(0,s.default)(d,2),u=l[0],c=l[1],p=h-a;(p<0&&Math.abs(p)<c-this.options.hierarchical.nodeSpacing||p>0&&Math.abs(p)<u-this.options.hierarchical.nodeSpacing)&&this.direction.setPosition(n,a)}}}},{key:"_placeNodesByHierarchy",value:function(t){this.positionedNodes={};for(var e in t)if(t.hasOwnProperty(e)){var i=(0,d.default)(t[e]);i=this._indexArrayToNodes(i),this.direction.sort(i);for(var o=0,n=0;n<i.length;n++){var s=i[n];if(void 0===this.positionedNodes[s.id]){var r=this.options.hierarchical.nodeSpacing,a=r*o;o>0&&(a=this.direction.getPosition(i[n-1])+r),this.direction.setPosition(s,a,e),this._validatePositionAndContinue(s,e,a),o++}}}}},{key:"_placeBranchNodes",value:function(t,e){var i=this.hierarchical.childrenReference[t];if(void 0!==i){for(var o=[],n=0;n<i.length;n++)o.push(this.body.nodes[i[n]]);this.direction.sort(o);for(var s=0;s<o.length;s++){var r=o[s],a=this.hierarchical.levels[r.id];if(!(a>e&&void 0===this.positionedNodes[r.id]))return;var h=this.options.hierarchical.nodeSpacing,d=void 0;d=0===s?this.direction.getPosition(this.body.nodes[t]):this.direction.getPosition(o[s-1])+h,this.direction.setPosition(r,d,a),this._validatePositionAndContinue(r,a,d)}var l=this._getCenterPosition(o);this.direction.setPosition(this.body.nodes[t],l,e)}}},{key:"_validatePositionAndContinue",value:function(t,e,i){if(this.hierarchical.isTree){if(void 0!==this.lastNodeOnLevel[e]){var o=this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[e]]);if(i-o<this.options.hierarchical.nodeSpacing){var n=o+this.options.hierarchical.nodeSpacing-i,s=this._findCommonParent(this.lastNodeOnLevel[e],t.id);this._shiftBlock(s.withChild,n)}}this.lastNodeOnLevel[e]=t.id,this.positionedNodes[t.id]=!0,this._placeBranchNodes(t.id,e)}}},{key:"_indexArrayToNodes",value:function(t){for(var e=[],i=0;i<t.length;i++)e.push(this.body.nodes[t[i]]);return e}},{key:"_getDistribution",value:function(){var t={},e=void 0,i=void 0;for(e in this.body.nodes)if(this.body.nodes.hasOwnProperty(e)){i=this.body.nodes[e];var o=void 0===this.hierarchical.levels[e]?0:this.hierarchical.levels[e];this.direction.fix(i,o),void 0===t[o]&&(t[o]={}),t[o][e]=i}return t}},{key:"_getActiveEdges",value:function(t){var e=this,i=[];return f.forEach(t.edges,function(t){-1!==e.body.edgeIndices.indexOf(t.id)&&i.push(t)}),i}},{key:"_getHubSizes",value:function(){var t=this,e={},i=this.body.nodeIndices;f.forEach(i,function(i){var o=t.body.nodes[i],n=t._getActiveEdges(o).length;e[n]=!0});var o=[];return f.forEach(e,function(t){o.push(Number(t))}),o.sort(function(t,e){return e-t}),o}},{key:"_determineLevelsByHubsize",value:function(){for(var t=this,e=function(e,i){t.hierarchical.levelDownstream(e,i)},i=this._getHubSizes(),o=0;o<i.length;++o){if("break"===function(o){var n=i[o];if(0===n)return"break";f.forEach(t.body.nodeIndices,function(i){var o=t.body.nodes[i];n===t._getActiveEdges(o).length&&t._crawlNetwork(e,i)})}(o))break}}},{key:"_determineLevelsCustomCallback",value:function(){var t=this,e=function(e,i,o){var n=t.hierarchical.levels[e.id];void 0===n&&(n=t.hierarchical.levels[e.id]=1e5);var s=(m.cloneOptions(e,"node"),m.cloneOptions(i,"node"),void m.cloneOptions(o,"edge"));t.hierarchical.levels[i.id]=n+s};this._crawlNetwork(e),this.hierarchical.setMinLevelToZero(this.body.nodes)}},{key:"_determineLevelsDirected",value:function(){var t=this,e=function(e){return f.forEach(t.body.edges,function(t){if(t.toId===e.fromId&&t.fromId===e.toId)return!0}),!1},i=function(i,o,n){var s=t.hierarchical.levels[i.id],r=t.hierarchical.levels[o.id];e(n)&&void 0!==s&&void 0!==r||(void 0===s&&(s=t.hierarchical.levels[i.id]=1e4),n.toId==o.id?t.hierarchical.levels[o.id]=s+1:t.hierarchical.levels[o.id]=s-1)};this._crawlNetwork(i),this.hierarchical.setMinLevelToZero(this.body.nodes)}},{key:"_generateMap",value:function(){var t=this,e=function(e,i){t.hierarchical.levels[i.id]>t.hierarchical.levels[e.id]&&t.hierarchical.addRelation(e.id,i.id)};this._crawlNetwork(e),this.hierarchical.checkIfTree()}},{key:"_crawlNetwork",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=arguments[1],o={},n=function i(n,s){if(void 0===o[n.id]){t.hierarchical.setTreeIndex(n,s),o[n.id]=!0;for(var r=void 0,a=t._getActiveEdges(n),h=0;h<a.length;h++){var d=a[h];!0===d.connected&&(r=d.toId==n.id?d.from:d.to,n.id!=r.id&&(e(n,r,d),i(r,s)))}}};if(void 0===i)for(var s=0,r=0;r<this.body.nodeIndices.length;r++){var a=this.body.nodeIndices[r];if(void 0===o[a]){var h=this.body.nodes[a];n(h,s),s+=1}}else{var d=this.body.nodes[i];if(void 0===d)return void console.error("Node not found:",i);n(d)}}},{key:"_shiftBlock",value:function(t,e){var i=this,o={};!function t(n){if(!o[n]){o[n]=!0,i.direction.shift(n,e);var s=i.hierarchical.childrenReference[n];if(void 0!==s)for(var r=0;r<s.length;r++)t(s[r])}}(t)}},{key:"_findCommonParent",value:function(t,e){var i=this,o={};return function t(e,o){var n=i.hierarchical.parentReference[o];if(void 0!==n)for(var s=0;s<n.length;s++){var r=n[s];e[r]=!0,t(e,r)}}(o,t),function t(e,o){var n=i.hierarchical.parentReference[o];if(void 0!==n)for(var s=0;s<n.length;s++){var r=n[s];if(void 0!==e[r])return{foundParent:r,withChild:o};var a=t(e,r);if(null!==a.foundParent)return a}return{foundParent:null,withChild:o}}(o,e)}},{key:"setDirectionStrategy",value:function(){var t="UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction;this.direction=t?new y(this):new g(this)}},{key:"_getCenterPosition",value:function(t){for(var e=1e9,i=-1e9,o=0;o<t.length;o++){var n=void 0;if(void 0!==t[o].id)n=t[o];else{var s=t[o];n=this.body.nodes[s]}var r=this.direction.getPosition(n);e=Math.min(e,r),i=Math.max(i,r)}return.5*(e+i)}}]),t}();e.default=_},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.VerticalStrategy=e.HorizontalStrategy=void 0;var n=i(3),s=o(n),r=i(4),a=o(r),h=i(5),d=o(h),l=i(0),u=o(l),c=i(1),p=o(c),f=function(){function t(){(0,u.default)(this,t)}return(0,p.default)(t,[{key:"abstract",value:function(){throw new Error("Can't instantiate abstract class!")}},{key:"fake_use",value:function(){}},{key:"curveType",value:function(){return this.abstract()}},{key:"getPosition",value:function(t){return this.fake_use(t),this.abstract()}},{key:"setPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.fake_use(t,e,i),this.abstract()}},{key:"getTreeSize",value:function(t){return this.fake_use(t),this.abstract()}},{key:"sort",value:function(t){this.fake_use(t),this.abstract()}},{key:"fix",value:function(t,e){this.fake_use(t,e),this.abstract()}},{key:"shift",value:function(t,e){this.fake_use(t,e),this.abstract()}}]),t}(),m=function(t){function e(t){(0,u.default)(this,e);var i=(0,a.default)(this,(e.__proto__||(0,s.default)(e)).call(this));return i.layout=t,i}return(0,d.default)(e,t),(0,p.default)(e,[{key:"curveType",value:function(){return"horizontal"}},{key:"getPosition",value:function(t){return t.x}},{key:"setPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;void 0!==i&&this.layout.hierarchical.addToOrdering(t,i),t.x=e}},{key:"getTreeSize",value:function(t){var e=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,t);return{min:e.min_x,max:e.max_x}}},{key:"sort",value:function(t){t.sort(function(t,e){return void 0===t.x||void 0===e.x?0:t.x-e.x})}},{key:"fix",value:function(t,e){t.y=this.layout.options.hierarchical.levelSeparation*e,t.options.fixed.y=!0}},{key:"shift",value:function(t,e){this.layout.body.nodes[t].x+=e}}]),e}(f),v=function(t){function e(t){(0,u.default)(this,e);var i=(0,a.default)(this,(e.__proto__||(0,s.default)(e)).call(this));return i.layout=t,i}return(0,d.default)(e,t),(0,p.default)(e,[{key:"curveType",value:function(){return"vertical"}},{key:"getPosition",value:function(t){return t.y}},{key:"setPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;void 0!==i&&this.layout.hierarchical.addToOrdering(t,i),t.y=e}},{key:"getTreeSize",value:function(t){var e=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,t);return{min:e.min_y,max:e.max_y}}},{key:"sort",value:function(t){t.sort(function(t,e){return void 0===t.y||void 0===e.y?0:t.y-e.y})}},{key:"fix",value:function(t,e){t.x=this.layout.options.hierarchical.levelSeparation*e,t.options.fixed.x=!0}},{key:"shift",value:function(t,e){this.layout.body.nodes[t].y+=e}}]),e}(f);e.HorizontalStrategy=v,e.VerticalStrategy=m},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),s=o(n),r=i(19),a=o(r),h=i(6),d=o(h),l=i(0),u=o(l),c=i(1),p=o(c),f=i(2),m=i(10),v=i(37),g=function(){function t(e,i,o){var n=this;(0,u.default)(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,this.editMode=!1,this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0,this.manipulationHammers=[],this.temporaryUIFunctions={},this.temporaryEventFunctions=[],this.touchTime=0,this.temporaryIds={nodes:[],edges:[]},this.guiEnabled=!1,this.inMode=!1,this.selectedControlNode=void 0,this.options={},this.defaultOptions={enabled:!1,initiallyActive:!1,addNode:!0,addEdge:!0,editNode:void 0,editEdge:!0,deleteNode:!0,deleteEdge:!0,controlNodeStyle:{shape:"dot",size:6,color:{background:"#ff0000",border:"#3c3c3c",highlight:{background:"#07f968",border:"#3c3c3c"}},borderWidth:2,borderWidthSelected:2}},f.extend(this.options,this.defaultOptions),this.body.emitter.on("destroy",function(){n._clean()}),this.body.emitter.on("_dataChanged",this._restore.bind(this)),this.body.emitter.on("_resetData",this._restore.bind(this))}return(0,p.default)(t,[{key:"_restore",value:function(){!1!==this.inMode&&(!0===this.options.initiallyActive?this.enableEditMode():this.disableEditMode())}},{key:"setOptions",value:function(t,e,i){void 0!==e&&(void 0!==e.locale?this.options.locale=e.locale:this.options.locale=i.locale,void 0!==e.locales?this.options.locales=e.locales:this.options.locales=i.locales),void 0!==t&&("boolean"==typeof t?this.options.enabled=t:(this.options.enabled=!0,f.deepExtend(this.options,t)),!0===this.options.initiallyActive&&(this.editMode=!0),this._setup())}},{key:"toggleEditMode",value:function(){!0===this.editMode?this.disableEditMode():this.enableEditMode()}},{key:"enableEditMode",value:function(){this.editMode=!0,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="block",this.closeDiv.style.display="block",this.editModeDiv.style.display="none",this.showManipulatorToolbar())}},{key:"disableEditMode",value:function(){this.editMode=!1,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="none",this.closeDiv.style.display="none",this.editModeDiv.style.display="block",this._createEditButton())}},{key:"showManipulatorToolbar",value:function(){if(this._clean(),this.manipulationDOM={},!0===this.guiEnabled){this.editMode=!0,this.manipulationDiv.style.display="block",this.closeDiv.style.display="block";var t=this.selectionHandler._getSelectedNodeCount(),e=this.selectionHandler._getSelectedEdgeCount(),i=t+e,o=this.options.locales[this.options.locale],n=!1;!1!==this.options.addNode&&(this._createAddNodeButton(o),n=!0),!1!==this.options.addEdge&&(!0===n?this._createSeperator(1):n=!0,this._createAddEdgeButton(o)),1===t&&"function"==typeof this.options.editNode?(!0===n?this._createSeperator(2):n=!0,this._createEditNodeButton(o)):1===e&&0===t&&!1!==this.options.editEdge&&(!0===n?this._createSeperator(3):n=!0,this._createEditEdgeButton(o)),0!==i&&(t>0&&!1!==this.options.deleteNode?(!0===n&&this._createSeperator(4),this._createDeleteButton(o)):0===t&&!1!==this.options.deleteEdge&&(!0===n&&this._createSeperator(4),this._createDeleteButton(o))),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this)),this._temporaryBindEvent("select",this.showManipulatorToolbar.bind(this))}this.body.emitter.emit("_redraw")}},{key:"addNodeMode",value:function(){if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="addNode",!0===this.guiEnabled){var t=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(t),this._createSeperator(),this._createDescription(t.addDescription||this.options.locales.en.addDescription),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this))}this._temporaryBindEvent("click",this._performAddNode.bind(this))}},{key:"editNode",value:function(){var t=this;!0!==this.editMode&&this.enableEditMode(),this._clean();var e=this.selectionHandler._getSelectedNode();if(void 0!==e){if(this.inMode="editNode","function"!=typeof this.options.editNode)throw new Error("No function has been configured to handle the editing of nodes.");if(!0!==e.isCluster){var i=f.deepExtend({},e.options,!1);if(i.x=e.x,i.y=e.y,2!==this.options.editNode.length)throw new Error("The function for edit does not support two arguments (data, callback)");this.options.editNode(i,function(e){null!==e&&void 0!==e&&"editNode"===t.inMode&&t.body.data.nodes.getDataSet().update(e),t.showManipulatorToolbar()})}else alert(this.options.locales[this.options.locale].editClusterError||this.options.locales.en.editClusterError)}else this.showManipulatorToolbar()}},{key:"addEdgeMode",value:function(){if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="addEdge",!0===this.guiEnabled){var t=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(t),this._createSeperator(),this._createDescription(t.edgeDescription||this.options.locales.en.edgeDescription),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this))}this._temporaryBindUI("onTouch",this._handleConnect.bind(this)),this._temporaryBindUI("onDragEnd",this._finishConnect.bind(this)),this._temporaryBindUI("onDrag",this._dragControlNode.bind(this)),this._temporaryBindUI("onRelease",this._finishConnect.bind(this)),this._temporaryBindUI("onDragStart",this._dragStartEdge.bind(this)),this._temporaryBindUI("onHold",function(){})}},{key:"editEdgeMode",value:function(){if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="editEdge","object"===(0,d.default)(this.options.editEdge)&&"function"==typeof this.options.editEdge.editWithoutDrag&&(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdges()[0],void 0!==this.edgeBeingEditedId)){var t=this.body.edges[this.edgeBeingEditedId];return void this._performEditEdge(t.from,t.to)}if(!0===this.guiEnabled){var e=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(e),this._createSeperator(),this._createDescription(e.editEdgeDescription||this.options.locales.en.editEdgeDescription),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this))}if(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdges()[0],void 0!==this.edgeBeingEditedId){var i=this.body.edges[this.edgeBeingEditedId],o=this._getNewTargetNode(i.from.x,i.from.y),n=this._getNewTargetNode(i.to.x,i.to.y);this.temporaryIds.nodes.push(o.id),this.temporaryIds.nodes.push(n.id),this.body.nodes[o.id]=o,this.body.nodeIndices.push(o.id),this.body.nodes[n.id]=n,this.body.nodeIndices.push(n.id),this._temporaryBindUI("onTouch",this._controlNodeTouch.bind(this)),this._temporaryBindUI("onTap",function(){}),this._temporaryBindUI("onHold",function(){}),this._temporaryBindUI("onDragStart",this._controlNodeDragStart.bind(this)),this._temporaryBindUI("onDrag",this._controlNodeDrag.bind(this)),this._temporaryBindUI("onDragEnd",this._controlNodeDragEnd.bind(this)),this._temporaryBindUI("onMouseMove",function(){}),this._temporaryBindEvent("beforeDrawing",function(t){var e=i.edgeType.findBorderPositions(t);!1===o.selected&&(o.x=e.from.x,o.y=e.from.y),!1===n.selected&&(n.x=e.to.x,n.y=e.to.y)}),this.body.emitter.emit("_redraw")}else this.showManipulatorToolbar()}},{key:"deleteSelected",value:function(){var t=this;!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="delete";var e=this.selectionHandler.getSelectedNodes(),i=this.selectionHandler.getSelectedEdges(),o=void 0;if(e.length>0){for(var n=0;n<e.length;n++)if(!0===this.body.nodes[e[n]].isCluster)return void alert(this.options.locales[this.options.locale].deleteClusterError||this.options.locales.en.deleteClusterError);"function"==typeof this.options.deleteNode&&(o=this.options.deleteNode)
}else i.length>0&&"function"==typeof this.options.deleteEdge&&(o=this.options.deleteEdge);if("function"==typeof o){var s={nodes:e,edges:i};if(2!==o.length)throw new Error("The function for delete does not support two arguments (data, callback)");o(s,function(e){null!==e&&void 0!==e&&"delete"===t.inMode?(t.body.data.edges.getDataSet().remove(e.edges),t.body.data.nodes.getDataSet().remove(e.nodes),t.body.emitter.emit("startSimulation"),t.showManipulatorToolbar()):(t.body.emitter.emit("startSimulation"),t.showManipulatorToolbar())})}else this.body.data.edges.getDataSet().remove(i),this.body.data.nodes.getDataSet().remove(e),this.body.emitter.emit("startSimulation"),this.showManipulatorToolbar()}},{key:"_setup",value:function(){!0===this.options.enabled?(this.guiEnabled=!0,this._createWrappers(),!1===this.editMode?this._createEditButton():this.showManipulatorToolbar()):(this._removeManipulationDOM(),this.guiEnabled=!1)}},{key:"_createWrappers",value:function(){void 0===this.manipulationDiv&&(this.manipulationDiv=document.createElement("div"),this.manipulationDiv.className="vis-manipulation",!0===this.editMode?this.manipulationDiv.style.display="block":this.manipulationDiv.style.display="none",this.canvas.frame.appendChild(this.manipulationDiv)),void 0===this.editModeDiv&&(this.editModeDiv=document.createElement("div"),this.editModeDiv.className="vis-edit-mode",!0===this.editMode?this.editModeDiv.style.display="none":this.editModeDiv.style.display="block",this.canvas.frame.appendChild(this.editModeDiv)),void 0===this.closeDiv&&(this.closeDiv=document.createElement("div"),this.closeDiv.className="vis-close",this.closeDiv.style.display=this.manipulationDiv.style.display,this.canvas.frame.appendChild(this.closeDiv))}},{key:"_getNewTargetNode",value:function(t,e){var i=f.deepExtend({},this.options.controlNodeStyle);i.id="targetNode"+f.randomUUID(),i.hidden=!1,i.physics=!1,i.x=t,i.y=e;var o=this.body.functions.createNode(i);return o.shape.boundingBox={left:t,right:t,top:e,bottom:e},o}},{key:"_createEditButton",value:function(){this._clean(),this.manipulationDOM={},f.recursiveDOMDelete(this.editModeDiv);var t=this.options.locales[this.options.locale],e=this._createButton("editMode","vis-button vis-edit vis-edit-mode",t.edit||this.options.locales.en.edit);this.editModeDiv.appendChild(e),this._bindHammerToDiv(e,this.toggleEditMode.bind(this))}},{key:"_clean",value:function(){this.inMode=!1,!0===this.guiEnabled&&(f.recursiveDOMDelete(this.editModeDiv),f.recursiveDOMDelete(this.manipulationDiv),this._cleanManipulatorHammers()),this._cleanupTemporaryNodesAndEdges(),this._unbindTemporaryUIs(),this._unbindTemporaryEvents(),this.body.emitter.emit("restorePhysics")}},{key:"_cleanManipulatorHammers",value:function(){if(0!=this.manipulationHammers.length){for(var t=0;t<this.manipulationHammers.length;t++)this.manipulationHammers[t].destroy();this.manipulationHammers=[]}}},{key:"_removeManipulationDOM",value:function(){this._clean(),f.recursiveDOMDelete(this.manipulationDiv),f.recursiveDOMDelete(this.editModeDiv),f.recursiveDOMDelete(this.closeDiv),this.manipulationDiv&&this.canvas.frame.removeChild(this.manipulationDiv),this.editModeDiv&&this.canvas.frame.removeChild(this.editModeDiv),this.closeDiv&&this.canvas.frame.removeChild(this.closeDiv),this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0}},{key:"_createSeperator",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.manipulationDOM["seperatorLineDiv"+t]=document.createElement("div"),this.manipulationDOM["seperatorLineDiv"+t].className="vis-separator-line",this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv"+t])}},{key:"_createAddNodeButton",value:function(t){var e=this._createButton("addNode","vis-button vis-add",t.addNode||this.options.locales.en.addNode);this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.addNodeMode.bind(this))}},{key:"_createAddEdgeButton",value:function(t){var e=this._createButton("addEdge","vis-button vis-connect",t.addEdge||this.options.locales.en.addEdge);this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.addEdgeMode.bind(this))}},{key:"_createEditNodeButton",value:function(t){var e=this._createButton("editNode","vis-button vis-edit",t.editNode||this.options.locales.en.editNode);this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.editNode.bind(this))}},{key:"_createEditEdgeButton",value:function(t){var e=this._createButton("editEdge","vis-button vis-edit",t.editEdge||this.options.locales.en.editEdge);this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.editEdgeMode.bind(this))}},{key:"_createDeleteButton",value:function(t){var e;e=this.options.rtl?"vis-button vis-delete-rtl":"vis-button vis-delete";var i=this._createButton("delete",e,t.del||this.options.locales.en.del);this.manipulationDiv.appendChild(i),this._bindHammerToDiv(i,this.deleteSelected.bind(this))}},{key:"_createBackButton",value:function(t){var e=this._createButton("back","vis-button vis-back",t.back||this.options.locales.en.back);this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.showManipulatorToolbar.bind(this))}},{key:"_createButton",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"vis-label";return this.manipulationDOM[t+"Div"]=document.createElement("div"),this.manipulationDOM[t+"Div"].className=e,this.manipulationDOM[t+"Label"]=document.createElement("div"),this.manipulationDOM[t+"Label"].className=o,this.manipulationDOM[t+"Label"].innerHTML=i,this.manipulationDOM[t+"Div"].appendChild(this.manipulationDOM[t+"Label"]),this.manipulationDOM[t+"Div"]}},{key:"_createDescription",value:function(t){this.manipulationDiv.appendChild(this._createButton("description","vis-button vis-none",t))}},{key:"_temporaryBindEvent",value:function(t,e){this.temporaryEventFunctions.push({event:t,boundFunction:e}),this.body.emitter.on(t,e)}},{key:"_temporaryBindUI",value:function(t,e){if(void 0===this.body.eventListeners[t])throw new Error("This UI function does not exist. Typo? You tried: "+t+" possible are: "+(0,a.default)((0,s.default)(this.body.eventListeners)));this.temporaryUIFunctions[t]=this.body.eventListeners[t],this.body.eventListeners[t]=e}},{key:"_unbindTemporaryUIs",value:function(){for(var t in this.temporaryUIFunctions)this.temporaryUIFunctions.hasOwnProperty(t)&&(this.body.eventListeners[t]=this.temporaryUIFunctions[t],delete this.temporaryUIFunctions[t]);this.temporaryUIFunctions={}}},{key:"_unbindTemporaryEvents",value:function(){for(var t=0;t<this.temporaryEventFunctions.length;t++){var e=this.temporaryEventFunctions[t].event,i=this.temporaryEventFunctions[t].boundFunction;this.body.emitter.off(e,i)}this.temporaryEventFunctions=[]}},{key:"_bindHammerToDiv",value:function(t,e){var i=new m(t,{});v.onTouch(i,e),this.manipulationHammers.push(i)}},{key:"_cleanupTemporaryNodesAndEdges",value:function(){for(var t=0;t<this.temporaryIds.edges.length;t++){this.body.edges[this.temporaryIds.edges[t]].disconnect(),delete this.body.edges[this.temporaryIds.edges[t]];var e=this.body.edgeIndices.indexOf(this.temporaryIds.edges[t]);-1!==e&&this.body.edgeIndices.splice(e,1)}for(var i=0;i<this.temporaryIds.nodes.length;i++){delete this.body.nodes[this.temporaryIds.nodes[i]];var o=this.body.nodeIndices.indexOf(this.temporaryIds.nodes[i]);-1!==o&&this.body.nodeIndices.splice(o,1)}this.temporaryIds={nodes:[],edges:[]}}},{key:"_controlNodeTouch",value:function(t){this.selectionHandler.unselectAll(),this.lastTouch=this.body.functions.getPointer(t.center),this.lastTouch.translation=f.extend({},this.body.view.translation)}},{key:"_controlNodeDragStart",value:function(t){var e=this.lastTouch,i=this.selectionHandler._pointerToPositionObject(e),o=this.body.nodes[this.temporaryIds.nodes[0]],n=this.body.nodes[this.temporaryIds.nodes[1]],s=this.body.edges[this.edgeBeingEditedId];this.selectedControlNode=void 0;var r=o.isOverlappingWith(i),a=n.isOverlappingWith(i);!0===r?(this.selectedControlNode=o,s.edgeType.from=o):!0===a&&(this.selectedControlNode=n,s.edgeType.to=n),void 0!==this.selectedControlNode&&this.selectionHandler.selectObject(this.selectedControlNode),this.body.emitter.emit("_redraw")}},{key:"_controlNodeDrag",value:function(t){this.body.emitter.emit("disablePhysics");var e=this.body.functions.getPointer(t.center),i=this.canvas.DOMtoCanvas(e);if(void 0!==this.selectedControlNode)this.selectedControlNode.x=i.x,this.selectedControlNode.y=i.y;else{var o=e.x-this.lastTouch.x,n=e.y-this.lastTouch.y;this.body.view.translation={x:this.lastTouch.translation.x+o,y:this.lastTouch.translation.y+n}}this.body.emitter.emit("_redraw")}},{key:"_controlNodeDragEnd",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=this.body.edges[this.edgeBeingEditedId];if(void 0!==this.selectedControlNode){this.selectionHandler.unselectAll();for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),s=void 0,r=n.length-1;r>=0;r--)if(n[r]!==this.selectedControlNode.id){s=this.body.nodes[n[r]];break}if(void 0!==s&&void 0!==this.selectedControlNode)if(!0===s.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{var a=this.body.nodes[this.temporaryIds.nodes[0]];this.selectedControlNode.id===a.id?this._performEditEdge(s.id,o.to.id):this._performEditEdge(o.from.id,s.id)}else o.updateEdgeType(),this.body.emitter.emit("restorePhysics");this.body.emitter.emit("_redraw")}}},{key:"_handleConnect",value:function(t){if((new Date).valueOf()-this.touchTime>100){this.lastTouch=this.body.functions.getPointer(t.center),this.lastTouch.translation=f.extend({},this.body.view.translation);var e=this.lastTouch,i=this.selectionHandler.getNodeAt(e);if(void 0!==i)if(!0===i.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{var o=this._getNewTargetNode(i.x,i.y);this.body.nodes[o.id]=o,this.body.nodeIndices.push(o.id);var n=this.body.functions.createEdge({id:"connectionEdge"+f.randomUUID(),from:i.id,to:o.id,physics:!1,smooth:{enabled:!0,type:"continuous",roundness:.5}});this.body.edges[n.id]=n,this.body.edgeIndices.push(n.id),this.temporaryIds.nodes.push(o.id),this.temporaryIds.edges.push(n.id)}this.touchTime=(new Date).valueOf()}}},{key:"_dragControlNode",value:function(t){var e=this.body.functions.getPointer(t.center);if(void 0!==this.temporaryIds.nodes[0]){var i=this.body.nodes[this.temporaryIds.nodes[0]];i.x=this.canvas._XconvertDOMtoCanvas(e.x),i.y=this.canvas._YconvertDOMtoCanvas(e.y),this.body.emitter.emit("_redraw")}else{var o=e.x-this.lastTouch.x,n=e.y-this.lastTouch.y;this.body.view.translation={x:this.lastTouch.translation.x+o,y:this.lastTouch.translation.y+n}}}},{key:"_finishConnect",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=void 0;void 0!==this.temporaryIds.edges[0]&&(o=this.body.edges[this.temporaryIds.edges[0]].fromId);for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),s=void 0,r=n.length-1;r>=0;r--)if(-1===this.temporaryIds.nodes.indexOf(n[r])){s=this.body.nodes[n[r]];break}this._cleanupTemporaryNodesAndEdges(),void 0!==s&&(!0===s.isCluster?alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError):void 0!==this.body.nodes[o]&&void 0!==this.body.nodes[s.id]&&this._performAddEdge(o,s.id)),this.body.emitter.emit("_redraw")}},{key:"_dragStartEdge",value:function(t){var e=this.lastTouch;this.selectionHandler._generateClickEvent("dragStart",t,e,void 0,!0)}},{key:"_performAddNode",value:function(t){var e=this,i={id:f.randomUUID(),x:t.pointer.canvas.x,y:t.pointer.canvas.y,label:"new"};if("function"==typeof this.options.addNode){if(2!==this.options.addNode.length)throw this.showManipulatorToolbar(),new Error("The function for add does not support two arguments (data,callback)");this.options.addNode(i,function(t){null!==t&&void 0!==t&&"addNode"===e.inMode&&(e.body.data.nodes.getDataSet().add(t),e.showManipulatorToolbar())})}else this.body.data.nodes.getDataSet().add(i),this.showManipulatorToolbar()}},{key:"_performAddEdge",value:function(t,e){var i=this,o={from:t,to:e};if("function"==typeof this.options.addEdge){if(2!==this.options.addEdge.length)throw new Error("The function for connect does not support two arguments (data,callback)");this.options.addEdge(o,function(t){null!==t&&void 0!==t&&"addEdge"===i.inMode&&(i.body.data.edges.getDataSet().add(t),i.selectionHandler.unselectAll(),i.showManipulatorToolbar())})}else this.body.data.edges.getDataSet().add(o),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}},{key:"_performEditEdge",value:function(t,e){var i=this,o={id:this.edgeBeingEditedId,from:t,to:e,label:this.body.data.edges._data[this.edgeBeingEditedId].label},n=this.options.editEdge;if("object"===(void 0===n?"undefined":(0,d.default)(n))&&(n=n.editWithoutDrag),"function"==typeof n){if(2!==n.length)throw new Error("The function for edit does not support two arguments (data, callback)");n(o,function(t){null===t||void 0===t||"editEdge"!==i.inMode?(i.body.edges[o.id].updateEdgeType(),i.body.emitter.emit("_redraw"),i.showManipulatorToolbar()):(i.body.data.edges.getDataSet().update(t),i.selectionHandler.unselectAll(),i.showManipulatorToolbar())})}else this.body.data.edges.getDataSet().update(o),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}}]),t}();e.default=g},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(30),s=o(n),r=i(0),a=o(r),h=i(1),d=o(h),l=i(239),u=o(l),c=function(){function t(e,i,o){(0,a.default)(this,t),this.body=e,this.springLength=i,this.springConstant=o,this.distanceSolver=new u.default}return(0,d.default)(t,[{key:"setOptions",value:function(t){t&&(t.springLength&&(this.springLength=t.springLength),t.springConstant&&(this.springConstant=t.springConstant))}},{key:"solve",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.distanceSolver.getDistances(this.body,t,e);this._createL_matrix(o),this._createK_matrix(o),this._createE_matrix();for(var n=0,r=Math.max(1e3,Math.min(10*this.body.nodeIndices.length,6e3)),a=1e9,h=0,d=0,l=0,u=0,c=0;a>.01&&n<r;){n+=1;var p=this._getHighestEnergyNode(i),f=(0,s.default)(p,4);for(h=f[0],a=f[1],d=f[2],l=f[3],u=a,c=0;u>1&&c<5;){c+=1,this._moveNode(h,d,l);var m=this._getEnergy(h),v=(0,s.default)(m,3);u=v[0],d=v[1],l=v[2]}}}},{key:"_getHighestEnergyNode",value:function(t){for(var e=this.body.nodeIndices,i=this.body.nodes,o=0,n=e[0],r=0,a=0,h=0;h<e.length;h++){var d=e[h];if(!1===i[d].predefinedPosition||!0===i[d].isCluster&&!0===t||!0===i[d].options.fixed.x||!0===i[d].options.fixed.y){var l=this._getEnergy(d),u=(0,s.default)(l,3),c=u[0],p=u[1],f=u[2];o<c&&(o=c,n=d,r=p,a=f)}}return[n,o,r,a]}},{key:"_getEnergy",value:function(t){var e=(0,s.default)(this.E_sums[t],2),i=e[0],o=e[1];return[Math.sqrt(Math.pow(i,2)+Math.pow(o,2)),i,o]}},{key:"_moveNode",value:function(t,e,i){for(var o=this.body.nodeIndices,n=this.body.nodes,s=0,r=0,a=0,h=n[t].x,d=n[t].y,l=this.K_matrix[t],u=this.L_matrix[t],c=0;c<o.length;c++){var p=o[c];if(p!==t){var f=n[p].x,m=n[p].y,v=l[p],g=u[p],y=1/Math.pow(Math.pow(h-f,2)+Math.pow(d-m,2),1.5);s+=v*(1-g*Math.pow(d-m,2)*y),r+=v*(g*(h-f)*(d-m)*y),a+=v*(1-g*Math.pow(h-f,2)*y)}}var b=s,_=r,w=e,x=a,k=i,S=(w/b+k/_)/(_/b-x/_),D=-(_*S+w)/b;n[t].x+=D,n[t].y+=S,this._updateE_matrix(t)}},{key:"_createL_matrix",value:function(t){var e=this.body.nodeIndices,i=this.springLength;this.L_matrix=[];for(var o=0;o<e.length;o++){this.L_matrix[e[o]]={};for(var n=0;n<e.length;n++)this.L_matrix[e[o]][e[n]]=i*t[e[o]][e[n]]}}},{key:"_createK_matrix",value:function(t){var e=this.body.nodeIndices,i=this.springConstant;this.K_matrix=[];for(var o=0;o<e.length;o++){this.K_matrix[e[o]]={};for(var n=0;n<e.length;n++)this.K_matrix[e[o]][e[n]]=i*Math.pow(t[e[o]][e[n]],-2)}}},{key:"_createE_matrix",value:function(){var t=this.body.nodeIndices,e=this.body.nodes;this.E_matrix={},this.E_sums={};for(var i=0;i<t.length;i++)this.E_matrix[t[i]]=[];for(var o=0;o<t.length;o++){for(var n=t[o],s=e[n].x,r=e[n].y,a=0,h=0,d=o;d<t.length;d++){var l=t[d];if(l!==n){var u=e[l].x,c=e[l].y,p=1/Math.sqrt(Math.pow(s-u,2)+Math.pow(r-c,2));this.E_matrix[n][d]=[this.K_matrix[n][l]*(s-u-this.L_matrix[n][l]*(s-u)*p),this.K_matrix[n][l]*(r-c-this.L_matrix[n][l]*(r-c)*p)],this.E_matrix[l][o]=this.E_matrix[n][d],a+=this.E_matrix[n][d][0],h+=this.E_matrix[n][d][1]}}this.E_sums[n]=[a,h]}}},{key:"_updateE_matrix",value:function(t){for(var e=this.body.nodeIndices,i=this.body.nodes,o=this.E_matrix[t],n=this.K_matrix[t],s=this.L_matrix[t],r=i[t].x,a=i[t].y,h=0,d=0,l=0;l<e.length;l++){var u=e[l];if(u!==t){var c=o[l],p=c[0],f=c[1],m=i[u].x,v=i[u].y,g=1/Math.sqrt(Math.pow(r-m,2)+Math.pow(a-v,2)),y=n[u]*(r-m-s[u]*(r-m)*g),b=n[u]*(a-v-s[u]*(a-v)*g);o[l]=[y,b],h+=y,d+=b;var _=this.E_sums[u];_[0]+=y-p,_[1]+=b-f}}this.E_sums[t]=[h,d]}}]),t}();e.default=c},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),h=function(){function t(){(0,s.default)(this,t)}return(0,a.default)(t,[{key:"getDistances",value:function(t,e,i){for(var o={},n=t.edges,s=0;s<e.length;s++){var r=e[s],a={};o[r]=a;for(var h=0;h<e.length;h++)a[e[h]]=s==h?0:1e9}for(var d=0;d<i.length;d++){var l=n[i[d]];!0===l.connected&&void 0!==o[l.fromId]&&void 0!==o[l.toId]&&(o[l.fromId][l.toId]=1,o[l.toId][l.fromId]=1)}for(var u=e.length,c=0;c<u;c++)for(var p=e[c],f=o[p],m=0;m<u-1;m++)for(var v=e[m],g=o[v],y=m+1;y<u;y++){var b=e[y],_=o[b],w=Math.min(g[b],g[p]+f[b]);g[b]=w,_[v]=w}return o}}]),t}();e.default=h}])});
//# sourceMappingURL=vis.map


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Australia) [en-au]
//! author : Jared Morse : https://github.com/jarcoal

;(function (global, factory) {
    true ? factory(__webpack_require__(49)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enAu = moment.defineLocale('en-au', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        ss : '%d seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enAu;

})));


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Canada) [en-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;(function (global, factory) {
    true ? factory(__webpack_require__(49)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enCa = moment.defineLocale('en-ca', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'YYYY-MM-DD',
        LL : 'MMMM D, YYYY',
        LLL : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        ss : '%d seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

return enCa;

})));


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim

;(function (global, factory) {
    true ? factory(__webpack_require__(49)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enGb = moment.defineLocale('en-gb', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        ss : '%d seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enGb;

})));


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Ireland) [en-ie]
//! author : Chris Cartlidge : https://github.com/chriscartlidge

;(function (global, factory) {
    true ? factory(__webpack_require__(49)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enIe = moment.defineLocale('en-ie', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        ss : '%d seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enIe;

})));


/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (New Zealand) [en-nz]
//! author : Luke McGregor : https://github.com/lukemcgregor

;(function (global, factory) {
    true ? factory(__webpack_require__(49)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enNz = moment.defineLocale('en-nz', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        ss : '%d seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enNz;

})));


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French (Canada) [fr-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;(function (global, factory) {
    true ? factory(__webpack_require__(49)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var frCa = moment.defineLocale('fr-ca', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        ss : '%d secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal : function (number, period) {
        switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
                return number + (number === 1 ? 'er' : 'e');

            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return number + (number === 1 ? 're' : 'e');
        }
    }
});

return frCa;

})));


/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French (Switzerland) [fr-ch]
//! author : Gaspard Bucher : https://github.com/gaspard

;(function (global, factory) {
    true ? factory(__webpack_require__(49)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var frCh = moment.defineLocale('fr-ch', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        ss : '%d secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal : function (number, period) {
        switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
                return number + (number === 1 ? 'er' : 'e');

            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return number + (number === 1 ? 're' : 'e');
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return frCh;

})));


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice

;(function (global, factory) {
    true ? factory(__webpack_require__(49)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var fr = moment.defineLocale('fr', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        ss : '%d secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal : function (number, period) {
        switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
                return number + (number === 1 ? 'er' : '');

            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                return number + (number === 1 ? 'er' : 'e');

            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return number + (number === 1 ? 're' : 'e');
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return fr;

})));


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js
//! version : 2.20.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        }
        else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function mod(n, x) {
    return ((n % x) + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            __webpack_require__(1107)("./" + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, tmpLocale, parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100, h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
        case 'year': output = monthDiff(this, that) / 12; break;
        case 'month': output = monthDiff(this, that); break;
        case 'quarter': output = monthDiff(this, that) / 3; break;
        case 'second': output = (this - that) / 1e3; break; // 1000
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default: output = this - that;
    }

    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this._d.valueOf()).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function clone$1 () {
    return createDuration(this);
}

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
    return ((x > 0) - (x < 0)) || +x;
}

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.clone          = clone$1;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.20.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

// currently HTML5 input type only supports 24-hour formats
hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',                             // <input type="date" />
    TIME: 'HH:mm',                                  // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
    WEEK: 'YYYY-[W]WW',                             // <input type="week" />
    MONTH: 'YYYY-MM'                                // <input type="month" />
};

return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(216)(module)))

/***/ })

},[1343]);
//# sourceMappingURL=vendor.c2f3b5edbe40b943c9e0.js.map