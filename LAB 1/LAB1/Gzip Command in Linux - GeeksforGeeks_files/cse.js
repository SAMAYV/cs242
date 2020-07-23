(function(opts_){var g=this||self,k=/^[\w+/_-]+[=]{0,2}$/,l=null,m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},n=function(a,b){function d(){}d.prototype=b.prototype;a.s=b.prototype;a.prototype=new d;a.prototype.constructor=a;a.o=function(e,c,f){for(var h=Array(arguments.length-2),r=2;r<arguments.length;r++)h[r-2]=arguments[r];return b.prototype[c].apply(e,h)}};var p=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,p);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};n(p,Error);p.prototype.name="CustomError";var q=function(a,b){a=a.split("%s");for(var d="",e=a.length-1,c=0;c<e;c++)d+=a[c]+(c<b.length?b[c]:"%s");p.call(this,d+a[e])};n(q,p);q.prototype.name="AssertionError";var aa=function(a,b,d){if(!a){var e="Assertion failed";if(b){e+=": "+b;var c=Array.prototype.slice.call(arguments,2)}throw new q(""+e,c||[]);}},t=function(a,b){throw new q("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var u=function(a,b){a:{try{var d=a&&a.ownerDocument,e=d&&(d.defaultView||d.parentWindow);e=e||g;if(e.Element&&e.Location){var c=e;break a}}catch(h){}c=null}if(c&&"undefined"!=typeof c[b]&&(!a||!(a instanceof c[b])&&(a instanceof c.Location||a instanceof c.Element))){c=typeof a;if("object"==c&&null!=a||"function"==c)try{var f=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(h){f="<object could not be stringified>"}else f=void 0===a?"undefined":null===a?"null":
typeof a;t("Argument is not a %s (or a non-Element, non-Location mock); got: %s",b,f)}};var x=function(a,b){this.i=a===v&&b||"";this.l=w};x.prototype.toString=function(){return"Const{"+this.i+"}"};var y=function(a){if(a instanceof x&&a.constructor===x&&a.l===w)return a.i;t("expected object of type Const, got '"+a+"'");return"type_error:Const"},w={},v={};var z=function(){this.f=""};z.prototype.toString=function(){return"SafeScript{"+this.f+"}"};z.prototype.a=function(a){this.f=a};(new z).a("");var B=function(){this.b="";this.j=null;this.m=A};B.prototype.toString=function(){return"TrustedResourceUrl{"+this.b+"}"};
var C=function(a){if(a instanceof B&&a.constructor===B&&a.m===A)return a.b;t("expected object of type TrustedResourceUrl, got '"+a+"' of type "+m(a));return"type_error:TrustedResourceUrl"},E=function(a,b){var d=y(a);if(!ba.test(d))throw Error("Invalid TrustedResourceUrl format: "+d);a=d.replace(ca,function(e,c){if(!Object.prototype.hasOwnProperty.call(b,c))throw Error('Found marker, "'+c+'", in format string, "'+d+'", but no valid label mapping found in args: '+JSON.stringify(b));e=b[c];return e instanceof
x?y(e):encodeURIComponent(String(e))});return D(a)},ca=/%{(\w+)}/g,ba=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,da=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,G=function(a){var b=ea;a=E(fa,a);a=C(a).toString();a=da.exec(a);var d=a[3]||"";return D(a[1]+F("?",a[2]||"",b)+F("#",d,void 0))},A={},D=function(a){var b=new B;b.b=a;return b},F=function(a,b,d){if(null==d)return b;if("string"==typeof d)return d?a+encodeURIComponent(d):"";for(var e in d){var c=d[e];c="array"==
m(c)?c:[c];for(var f=0;f<c.length;f++){var h=c[f];null!=h&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(String(h)))}}return b};var H=function(){this.h=""};H.prototype.toString=function(){return"SafeStyle{"+this.h+"}"};H.prototype.a=function(a){this.h=a};(new H).a("");var I=function(){this.g=""};I.prototype.toString=function(){return"SafeStyleSheet{"+this.g+"}"};I.prototype.a=function(a){this.g=a};(new I).a("");var J=function(){this.c=""};J.prototype.toString=function(){return"SafeHtml{"+this.c+"}"};J.prototype.a=function(a){this.c=a};(new J).a("<!DOCTYPE html>");(new J).a("");(new J).a("<br>");var ha=new x(v,"https://www.google.com/cse/static/style/look/%{versionDir}%{versionSlash}%{theme}.css"),K=new x(v,"https://www.google.com/cse/static/element/%{versionDir}%{versionSlash}default+%{lang}.css"),fa=new x(v,"https://www.google.com/cse/static/element/%{versionDir}%{versionSlash}cse_element__%{lang}.js"),L=new x(v,"/");window.__gcse=window.__gcse||{};window.__gcse.ct=(new Date).getTime();
window.__gcse.scb=function(){var a=window.__gcse;M()||delete opts_.rawCss;var b=ia(a.initializationCallback||a.callback);google.search.cse.element.init(opts_)&&("explicit"!==a.parsetags?"complete"===document.readyState||"interactive"===document.readyState?(google.search.cse.element.go(),b&&b()):google.setOnLoadCallback(function(){google.search.cse.element.go();b&&b()},!0):b&&b())};function ia(a){return"function"===typeof a?a:"string"===typeof a&&"function"===typeof window[a]?window[a]:null}
function M(){return!(window.__gcse&&window.__gcse.plainStyle)}function N(a){var b=document.createElement("link");b.type="text/css";u(b,"HTMLLinkElement");b.rel="stylesheet";aa(a instanceof B,'URL must be TrustedResourceUrl because "rel" contains "stylesheet"');b.href=a.j?a.j:C(a).toString();return b};var O,ea=opts_.usqp?{usqp:opts_.usqp}:{},P=opts_.language.toLowerCase();O=opts_.cselibVersion?G({versionDir:opts_.cselibVersion,versionSlash:L,lang:P}):G({versionDir:"",versionSlash:"",lang:P});var Q=window.__gcse.scb,R=document.createElement("script");u(R,"HTMLScriptElement");R.src=C(O);var S;if(null===l)a:{var T=g.document,U=T.querySelector&&T.querySelector("script[nonce]");if(U){var V=U.nonce||U.getAttribute("nonce");if(V&&k.test(V)){l=V;break a}}l=""}(S=l)&&R.setAttribute("nonce",S);R.type="text/javascript";
Q&&(R.onload=Q);document.getElementsByTagName("head")[0].appendChild(R);if(M()){document.getElementsByTagName("head")[0].appendChild(N(opts_.cselibVersion?E(K,{versionDir:opts_.cselibVersion,versionSlash:L,lang:opts_.language}):E(K,{versionDir:"",versionSlash:"",lang:opts_.language})));var W,X=opts_.uiOptions.cssThemeVersion||2,Y=opts_.theme.toLowerCase(),Z=X?"v"+X:Y.match(/v2_/g)?"v2":"",ja=Y.replace("v2_","");W=E(ha,{versionDir:Z,versionSlash:Z?L:"",theme:ja});document.getElementsByTagName("head")[0].appendChild(N(W))};
})({
  "cx": "009682134359037907028:tj6eafkv_be",
  "language": "en",
  "theme": "V2_DEFAULT",
  "uiOptions": {
    "resultsUrl": "",
    "enableAutoComplete": true,
    "enableImageSearch": false,
    "imageSearchLayout": "popup",
    "resultSetSize": "filtered_cse",
    "enableOrderBy": true,
    "orderByOptions": [{
      "label": "Relevance",
      "key": ""
    }, {
      "label": "Date",
      "key": "date"
    }],
    "overlayResults": true,
    "numTopRefinements": -1,
    "enableSpeech": false,
    "hideElementBranding": false,
    "cssThemeVersion": 3,
    "mobileLayout": "enabled",
    "isSafeSearchActive": false
  },
  "protocol": "https",
  "rawCss": ".gsc-control-cse{font-family:arial, sans-serif}.gsc-control-cse .gsc-table-result{font-family:arial, sans-serif}.gsc-refinementsGradient{background:linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0))}.gsc-control-cse{border-color:#FFFFFF;background-color:#FFFFFF}input.gsc-input,.gsc-input-box,.gsc-input-box-hover,.gsc-input-box-focus{border-color:#6AA84F}.gsc-search-button-v2,.gsc-search-button-v2:hover,.gsc-search-button-v2:focus{border-color:#000000;background-color:#6AA84F;background-image:none;filter:none}.gsc-search-button-v2 svg{fill:#FFFFFF}.gsc-tabHeader.gsc-tabhActive,.gsc-refinementHeader.gsc-refinementhActive{color:#CCCCCC;border-color:#CCCCCC;background-color:#FFFFFF}.gsc-tabHeader.gsc-tabhInactive,.gsc-refinementHeader.gsc-refinementhInactive{color:#CCCCCC;border-color:#CCCCCC;background-color:#FFFFFF}.gsc-webResult.gsc-result,.gsc-results .gsc-imageResult{border-color:#FFFFFF;background-color:#FFFFFF}.gsc-webResult.gsc-result:hover,.gsc-imageResult:hover{border-color:#FFFFFF;background-color:#FFFFFF}.gs-webResult.gs-result a.gs-title:link,.gs-webResult.gs-result a.gs-title:link b,.gs-imageResult a.gs-title:link,.gs-imageResult a.gs-title:link b{color:#006600}.gs-webResult.gs-result a.gs-title:visited,.gs-webResult.gs-result a.gs-title:visited b,.gs-imageResult a.gs-title:visited,.gs-imageResult a.gs-title:visited b{color:#EC4E20}.gs-webResult.gs-result a.gs-title:hover,.gs-webResult.gs-result a.gs-title:hover b,.gs-imageResult a.gs-title:hover,.gs-imageResult a.gs-title:hover b{color:#CA7700}.gs-webResult.gs-result a.gs-title:active,.gs-webResult.gs-result a.gs-title:active b,.gs-imageResult a.gs-title:active,.gs-imageResult a.gs-title:active b{color:#006600}.gsc-cursor-page{color:#006600}a.gsc-trailing-more-results:link{color:#006600}.gs-webResult .gs-snippet,.gs-imageResult .gs-snippet,.gs-fileFormatType{color:#000000}.gs-webResult div.gs-visibleUrl,.gs-imageResult div.gs-visibleUrl{color:#008000}.gs-webResult div.gs-visibleUrl-short{color:#008000}.gs-webResult div.gs-visibleUrl-short{display:none}.gs-webResult div.gs-visibleUrl-long{display:block}.gs-promotion div.gs-visibleUrl-short{display:none}.gs-promotion div.gs-visibleUrl-long{display:block}.gsc-cursor-box{border-color:#FFFFFF}.gsc-results .gsc-cursor-box .gsc-cursor-page{border-color:#CCCCCC;background-color:#FFFFFF;color:#CCCCCC}.gsc-results .gsc-cursor-box .gsc-cursor-current-page{border-color:#CCCCCC;background-color:#FFFFFF;color:#CCCCCC}.gsc-webResult.gsc-result.gsc-promotion{border-color:#336699;background-color:#FFFFFF}.gsc-completion-title{color:#006600}.gsc-completion-snippet{color:#000000}.gs-promotion a.gs-title:link,.gs-promotion a.gs-title:link *,.gs-promotion .gs-snippet a:link{color:#006600}.gs-promotion a.gs-title:visited,.gs-promotion a.gs-title:visited *,.gs-promotion .gs-snippet a:visited{color:#EC4E20}.gs-promotion a.gs-title:hover,.gs-promotion a.gs-title:hover *,.gs-promotion .gs-snippet a:hover{color:#CA7700}.gs-promotion a.gs-title:active,.gs-promotion a.gs-title:active *,.gs-promotion .gs-snippet a:active{color:#006600}.gs-promotion .gs-snippet,.gs-promotion .gs-title .gs-promotion-title-right,.gs-promotion .gs-title .gs-promotion-title-right *{color:#000000}.gs-promotion .gs-visibleUrl,.gs-promotion .gs-visibleUrl-short{color:#008000}.gcsc-find-more-on-google{color:#006600}.gcsc-find-more-on-google-magnifier{fill:#006600}",
  "cse_token": "AKaTTZhmhT0DD_vGndVI6_gDsqip:1564563535382",
  "isHostedPage": false,
  "exp": ["csqr", "4229469"],
  "cselibVersion": "e1b7867e793369c8",
  "usqp": "CAI\u003d"
});