(function(_){var ba,ea,ka,na,oa,va,wa,Ba,Ea,E,Va,Wa,Xa,Za,cb,jb,nb,pb,qb,yb,zb,Cb,Db,Eb,Jb,Hb,Nb,Ob,Pb,Qb,Rb,Sb,Ub,Tb,Vb,Xb,Wb,Yb,Zb,$b,ac,bc,ec,gc,lc,kc,pc,tc,uc,vc,wc,xc,zc,Ac,Ec,Bc,Fc,Dc,Cc,Gc,Kc,Nc,Oc,Pc,Rc,Sc,Wc,Uc,Xc,ad,cd,bd,ed,fd,gd,jd,md,pd,qd,sd,td,ud,wd,ha,xd,ia,Cd,Dd;ba=function(a){return function(){return _.aa[a].apply(this,arguments)}};_.ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};_.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:_.ca(a)}};ea=function(a){if(!(a instanceof Array)){a=_.da(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};ka=function(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype};na=function(a,b){if(b){var c=_.la;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&(0,_.ma)(c,a,{configurable:!0,writable:!0,value:b})}};oa=function(a,b){this.b=a;(0,_.ma)(this,"description",{configurable:!0,writable:!0,value:b})};_.n=function(a){return void 0!==a};_.q=function(a){return"string"==typeof a};_.u=function(a,b,c){a=a.split(".");c=c||_.t;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&_.n(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};_.qa=function(){};_.ra=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.sa=function(a){return"array"==_.ra(a)};_.ta=function(a){return"function"==_.ra(a)};_.ua=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};va=function(a,b,c){return a.call.apply(a.bind,arguments)};wa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};_.y=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.y=va:_.y=wa;return _.y.apply(null,arguments)};_.xa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};_.z=function(a,b){function c(){}c.prototype=b.prototype;a.V=b.prototype;a.prototype=new c;a.prototype.constructor=a};_.za=function(a,b){b=(0,_.ya)(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};_.Aa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};Ba=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};Ea=function(a,b){this.g=a===Ca&&b||"";this.l=Da};_.Fa=function(a){return a instanceof Ea&&a.constructor===Ea&&a.l===Da?a.g:"type_error:Const"};_.A=function(a){return new Ea(Ca,a)};_.Ia=function(a,b,c){this.l=a===_.Ga&&b||"";this.v=a===_.Ga&&c||null;this.A=Ha};_.Ja=function(a){if(a instanceof _.Ia&&a.constructor===_.Ia&&a.A===Ha)return a.l;_.ra(a);return"type_error:TrustedResourceUrl"};_.B=function(a,b){this.l=a===_.Ka&&b||"";this.v=La};_.Ma=function(a){if(a instanceof _.B&&a.constructor===_.B&&a.v===La)return a.l;_.ra(a);return"type_error:SafeUrl"};_.Oa=function(a){if(a instanceof _.B)return a;a="object"==typeof a&&a.Y?a.b():String(a);Na.test(a)||(a="about:invalid#zClosurez");return new _.B(_.Ka,a)};E=function(a){return-1!=Pa.indexOf(a)};_.Ra=function(){this.l="";this.A=Qa;this.v=null};_.Sa=function(a){if(a instanceof _.Ra&&a.constructor===_.Ra&&a.A===Qa)return a.l;_.ra(a);return"type_error:SafeHtml"};_.Ta=function(a,b){var c=new _.Ra;c.l=a;c.v=b;return c};Va=function(a){var b=new _.Ia(_.Ga,_.Fa(Ua),null);a.src=b.v?b.v:_.Ja(b).toString()};Wa=function(){return E("iPhone")&&!E("iPod")&&!E("iPad")};Xa=function(a){Xa[" "](a);return a};_.Ya=function(a,b){try{return Xa(a[b]),!0}catch(c){}return!1};Za=function(){var a=_.t.document;return a?a.documentMode:void 0};_.F=function(){};_.G=function(a,b,c){a.b=null;b||(b=[]);a.C=void 0;a.v=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(!(null===d||"object"!=typeof d||_.sa(d)||$a&&d instanceof Uint8Array)){a.A=b-a.v;a.l=d;break a}}a.A=Number.MAX_VALUE}a.B={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.A)d+=a.v,a.g[d]=a.g[d]||ab;else{var e=a.A+a.v;a.g[e]||(a.l=a.g[e]={});a.l[d]=a.l[d]||ab}};_.bb=function(a,b){if(b<a.A){b+=a.v;var c=a.g[b];return c===ab?a.g[b]=[]:c}if(a.l)return c=a.l[b],c===ab?a.l[b]=[]:c};_.H=function(a,b,c){a=_.bb(a,b);return null==a?c:a};_.I=function(a,b){a=_.bb(a,b);a=null==a?a:!!a;return null==a?!1:a};_.J=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=_.bb(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};cb=function(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var d=_.bb(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.b[c]=e}b=a.b[c];b==ab&&(b=a.b[c]=[]);return b};_.db=function(a){if(a.b)for(var b in a.b){var c=a.b[b];if(_.sa(c))for(var d=0;d<c.length;d++)c[d]&&_.db(c[d]);else c&&_.db(c)}return a.g};_.gb=function(a){_.G(this,a,fb)};_.ib=function(a){_.G(this,a,null)};jb=function(a){_.G(this,a,null)};_.lb=function(a){_.G(this,a,null)};nb=function(a){_.G(this,a,null)};pb=function(a){_.G(this,a,ob)};qb=function(a){return cb(a,_.gb,1)};_.rb=function(a,b){this.b=_.n(a)?a:0;this.g=_.n(b)?b:0};_.sb=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};_.tb=function(a,b){return b?a?a+"&"+b:b:a};_.ub=function(a,b){if(!b)return a;a=_.sb(a);a[1]=_.tb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]};_.vb=function(a,b,c){if(_.sa(b))for(var d=0;d<b.length;d++)_.vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};_.wb=function(a){var b=[],c;for(c in a)_.vb(c,a[c],b);return b.join("&")};_.xb=function(a,b){b=_.wb(b);return _.ub(a,b)};yb=function(a){try{return!!a&&null!=a.location.href&&_.Ya(a,"foo")}catch(b){return!1}};zb=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};_.Ab=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Cb=function(a){return a?a.passive&&Bb()?a:a.capture||!1:!1};_.K=function(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Cb(d))};Db=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,Cb(void 0))};_.Fb=function(a,b,c){Eb(a,b,void 0===c?null:c)};Eb=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(f){c&&c(f);Db(d,"load",e);Db(d,"error",e)};_.K(d,"load",e);_.K(d,"error",e)}d.src=b;a.google_image_requests.push(d)};_.Gb=function(a,b){"about:invalid#zClosurez"===(a instanceof _.B?a:_.Oa(a)).b()&&b(String(a))};_.Ib=function(a){var b=(Hb()?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/gen_204";return function(c){c=_.xb(b,{id:"unsafeurl",ctx:a,url:c});navigator.sendBeacon&&navigator.sendBeacon(c,"")}};Jb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};_.Lb=function(a,b,c,d,e,f,g){if(!g)a:{if(1===a.nodeType)try{if(1==a.nodeType){c:{try{var h=a.getBoundingClientRect()}catch(r){var l={left:0,top:0,right:0,bottom:0};break c}if(_.Kb&&a.ownerDocument.body){var m=a.ownerDocument;h.left-=m.documentElement.clientLeft+m.body.clientLeft;h.top-=m.documentElement.clientTop+m.body.clientTop}l=h}g=new _.rb(l.left,l.top)}else{var p=a.changedTouches?a.changedTouches[0]:a;g=new _.rb(p.clientX,p.clientY)}break a}catch(r){}g=new _.rb(0,0)}if(document.createEvent)l=document.createEvent("MouseEvents"),l.initMouseEvent("click",!0,!0,null,0,g.b,g.g,g.b,g.g,c,f,d,e,b,null);else return!1;if(a.dispatchEvent)a.dispatchEvent(l);else return!1;return!0};Hb=function(){var a=void 0===a?_.L:a;return"http:"===a.location.protocol};_.Mb=function(a,b,c){c=void 0===c?_.M:c;switch(a){case 2:return c.getElementsByClassName(b);case 3:return c.getElementsByTagName(b)}return[]};_.N=function(a,b,c){c=void 0===c?_.M:c;switch(a){case 1:if(c.getElementById)return c.getElementById(b);break;case 2:case 3:if(a=_.Mb(a,b,c),0<a.length)return a[0]}return null};Nb=function(a,b){a&&Jb(b,function(c,d){a.style[d]=c})};Ob=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};Pb=function(a,b){this.b=a;this.g=b};Qb=function(a,b){this.url=a;this.Na=!!b;this.depth=null};Rb=function(){this.l="&";this.v=!1;this.g={};this.A=0;this.b=[]};Sb=function(a,b){var c={};c[a]=b;return[c]};Ub=function(a,b,c,d,e){var f=[];zb(a,function(g,h){(g=Tb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)};Tb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Tb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Ub(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};Vb=function(a,b,c,d){a.b.push(b);a.g[b]=Sb(c,d)};Xb=function(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=Wb(a)-c.length;if(0>d)return"";a.b.sort(function(p,r){return p-r});c=null;for(var e="",f=0;f<a.b.length;f++)for(var g=a.b[f],h=a.g[g],l=0;l<h.length;l++){if(!d){c=null==c?g:c;break}var m=Ub(h[l],a.l,",$");if(m){m=e+m;if(d>=m.length){d-=m.length;b+=m;e=a.l;break}else a.v&&(e=d,m[e-1]==a.l&&--e,b+=m.substr(0,e),e=a.l,d=0);c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a};Wb=function(a){var b=1,c;for(c in a.g)b=c.length>b?c.length:b;return 3997-b-a.l.length-1};Yb=function(){this.b=Hb()?"http:":"https:";this.g=Math.random()};Zb=function(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{if(c instanceof Rb)var g=c;else g=new Rb,zb(c,function(l,m){var p=g,r=p.A++;l=Sb(m,l);p.b.push(r);p.g[r]=l});var h=Xb(g,a.b,"/pagead/gen_204?id="+b+"&");h&&("undefined"===typeof f?_.Fb(_.t,h):_.Fb(_.t,h,f))}catch(l){}};$b=function(){var a=_.t.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,_.O)()};ac=function(){var a=void 0===a?_.t:a;return(a=a.performance)&&a.now?a.now():null};bc=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};ec=function(){var a=cc;this.events=[];this.g=a||_.t;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=dc()||(null!=b?b:1>Math.random())};gc=function(a){a&&fc&&dc()&&(fc.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),fc.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))};_.jc=function(){var a=hc;this.v=ic;this.g=null;this.A=this.l;this.b=void 0===a?null:a};lc=function(a,b,c){try{if(a.b&&a.b.b){var d=a.b.start(b.toString(),3);var e=c();a.b.end(d)}else e=c()}catch(f){c=!0;try{gc(d),c=a.A(b,new Ob(f,{message:kc(f)}),void 0,void 0)}catch(g){a.l(217,g)}if(!c)throw f;}return e};_.nc=function(a,b,c){var d=mc;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];return lc(d,a,function(){return b.apply(c,f)})}};kc=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};pc=function(){if(!cc.google_measure_js_timing){var a=hc;a.b=!1;a.events!=a.g.google_js_reporting_queue&&(dc()&&(0,_.oc)(a.events,gc),a.events.length=0)}};_.qc=function(a,b,c){Zb(ic,a,b,"jserror"!=a,c,void 0)};_.rc=function(a,b){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c||!/[?&]ae=1(&|$)/.test(a)||/[?&]dsh=1(&|$)/.test(a))return null;try{var d=b?c.index:a.length;return{Ha:a.slice(0,d)+"&act=1"+a.slice(d),N:decodeURIComponent(c[1])}}catch(e){return null}};_.sc=function(a,b){var c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)};tc=function(a,b,c,d,e){c="&"+b+"="+c;var f=a.indexOf("&"+d+"=");c=0>f?a+c:a.substring(0,f)+c+a.substring(f);return 2E3<c.length?_.n(e)?tc(a,b,e,d,void 0):a:c};uc=function(a,b,c,d){b=c(d,b);if(!(b instanceof Array))return a;(0,_.oc)(b,function(e){if(2!==e.length&&3!==e.length)return a;a=tc(a,e[0],e[1],"adurl",e[2])});return a};vc=function(a,b,c){this.b=a;this.A=b;this.l=c;this.F=[];this.v=[];this.G={};this.g={};this.B=this.C=!1;this.D=-1};wc=function(a,b,c){var d=b=b.getAttribute("data-original-click-url");if(d)for(var e=0;e<a.F.length;e++)d=uc(d,b,a.F[e],c);return d};xc=function(a,b){b=void 0===b?Date.now():b;return b-a.D>_.H(a.b,39,0)};zc=function(a,b){-1!==b.href.indexOf("dbm/clk")||null===_.rc(b.href)&&!_.I(a.b,38)||lc(mc,446,function(){var c=Date.now(),d;if(d=xc(a,c)){d=b.href;var e=_.rc(d,!0);var f=e?navigator.sendBeacon?navigator.sendBeacon(_.sc(e.Ha,"&ri=1"),"")?{za:e.N,wa:!0}:{za:_.sc(d,"&ri=2"),wa:!1}:{za:_.sc(d,"&ri=16"),wa:!1}:{za:d,wa:!1};d=f.wa;e=_.Ib(599);f=f.za;f=f instanceof _.B||!yc.test(f)?f:new _.B(_.Ka,f);_.Gb(f,e);e=f instanceof _.B?f:_.Oa(f);b.href=_.Ma(e)}d&&(a.D=c)})};Ac=function(a,b,c,d){if(0!=a.v.length&&(d.preventDefault?!d.defaultPrevented:!1!==d.returnValue)){var e=1==d.which&&!d.ctrlKey&&"_blank"!=b.target&&"_new"!=b.target;e&&_.Ab(d);for(var f=[],g={},h=0;h<a.v.length;g={ra:g.ra},h++)if(g.ra=a.v[h](c),g.ra){var l=new Promise(function(m){return function(p){_.Fb(_.L,m.ra,p)}}(g));f.push(l)}c=Promise.all(f);f=new Promise(function(m){window.setTimeout(m,2E3)});e&&Promise.race([c,f]).then((0,_.y)(vc.prototype.L,a,b,d))}};Ec=function(a,b,c){var d=cb(a.A,jb,23),e=!1;d=_.da(d);for(var f=d.next();!f.done;f=d.next())if(f=f.value,"use_async_for_js_click_handler"===_.H(f,1,"")&&"True"===_.H(f,2,"")){e=!0;break}d=0;e&&a.l&&a.b&&(d=Bc(a));e&&a.l&&2===d?(_.Ab(c),Cc(a,b,c,d).then(function(g){g||zc(a,b)})):Dc(a,b,c)||zc(a,b)};Bc=function(a){a=a.b;return _.I(a,31)&&_.H(a,28,"")?1:_.H(a,22,"")&&_.H(a,23,"")?_.I(a,44)?3:2:0};Fc=function(a,b,c,d){a.g[d]||(a.g[d]={});a.g[d][c]||(a.g[d][c]=[]);_.K(b,d,(0,_.y)(a.J,a,b,c,d))};Dc=function(a,b,c){var d=b.href;if(a.l){var e=Date.now(),f=xc(a,e);if(a.l.Ma(b,c,a.b,a.B,f))return f&&(a.D=e),!0}else if(_.t.googdlu&&(_.t.googdlu.tryOpenPlayStore&&_.t.googdlu.tryOpenPlayStore(c,d,_.H(a.b,15,""))||_.t.googdlu.tryOpenItunesStore&&_.t.googdlu.tryOpenItunesStore(c,d,_.H(a.b,15,""),_.I(a.b,42),_.I(a.b,43),_.H(a.A,7,""),_.H(a.A,8,""))))return!0;return _.I(a.b,31)&&_.I(a.b,30)&&_.H(a.b,28,"")&&_.t.googdlu&&_.t.googdlu.tryOpenAppUrl?(_.t.googdlu.tryOpenAppUrl(c,d,_.H(a.b,32,""),_.H(a.b,28,"")),!0):!1};Cc=function(a,b,c,d){if(a.l){var e=xc(a,Date.now()),f=cb(a.A,jb,23);return a.l.gb(b,c,a.b,a.B,e,f,d)}return new Promise(function(g){g(!1)})};Gc=function(a){if(a.classList)return a.classList;a=a.className;return _.q(a)&&a.match(/\S+/g)||[]};_.Hc=function(a,b){a.classList?a.classList.add(b):(a.classList?a.classList.contains(b):0<=(0,_.ya)(Gc(a),b))||(a.className+=0<a.className.length?" "+b:b)};_.Jc=function(a,b){if(a.classList)a.classList.remove(b);else if(a.classList?a.classList.contains(b):0<=(0,_.ya)(Gc(a),b))a.className=Ic(Gc(a),function(c){return c!=b}).join(" ")};Kc=function(a){_.t.setTimeout(function(){throw a;},0)};Nc=function(){var a=_.t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Va(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(_.Sa(Lc));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,_.y)(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.n(c.next)){c=c.next;var e=c.Ia;c.Ia=null;e()}};return function(e){d.next={Ia:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){_.t.setTimeout(e,0)}};Oc=function(a,b){this.l=a;this.v=b;this.g=0;this.b=null};Pc=function(){this.g=this.b=null};Rc=function(){var a=Qc,b=null;a.b&&(b=a.b,a.b=a.b.next,a.b||(a.g=null),b.next=null);return b};Sc=function(){this.next=this.g=this.b=null};Wc=function(a){Tc||Uc();Vc||(Tc(),Vc=!0);Qc.add(a,void 0)};Uc=function(){if(_.t.Promise&&_.t.Promise.resolve){var a=_.t.Promise.resolve(void 0);Tc=function(){a.then(Xc)}}else Tc=function(){var b=Xc;!_.ta(_.t.setImmediate)||_.t.Window&&_.t.Window.prototype&&!E("Edge")&&_.t.Window.prototype.setImmediate==_.t.setImmediate?(Yc||(Yc=Nc()),Yc(b)):_.t.setImmediate(b)}};Xc=function(){for(var a;a=Rc();){try{a.b.call(a.g)}catch(c){Kc(c)}var b=Zc;b.v(a);100>b.g&&(b.g++,a.next=b.b,b.b=a)}Vc=!1};_.P=function(){this.v=this.v;this.l=this.l};_.$c=function(a){_.P.call(this);this.C=1;this.A=[];this.B=0;this.b=[];this.g={};this.F=!!a};ad=function(a,b,c){Wc(function(){a.apply(b,c)})};cd=function(a,b,c,d,e){this.B=new _.$c;this.g=a;this.g[0]=[b];this.v=[];this.l=new vc(c,d,e);this.A=d;this.b=c;b=_.H(this.b,22,"");c=_.H(this.b,23,"");b&&c&&e&&(e.canOpenIntents([{url:b,id:b,I:c}],(0,_.y)(this.Qa,this))||e.canOpenURLs(b,(0,_.y)(this.Qa,this)));(e=_.N(1,"common_15click_anchor"))?(a[20]=[e],bd(this,20)):(e=_.Aa(_.Mb(2,"common_15click_anchor")),0<e.length&&(a[20]=e,bd(this,20)))};_.dd=function(a,b,c){a=a.getElementsByAdPiece(b);if(c)for(b=0;b<a.length;b++){var d=a[b].getAttribute(c);if(d)return d}return null};bd=function(a,b){if((null==_.bb(a.A,28)||!_.I(_.J(a.A,_.ib,28),12))&&a.g[b]&&a.Ba(b)){a.v.push(b);var c=a.l;a=a.g[b];for(var d=0;d<a.length;d++){var e=a[d],f=e;f.href&&f.setAttribute("data-original-click-url",f.href);Fc(c,e,b,"mousedown");Fc(c,e,b,"click")}c.G[b]=!0}};ed=function(a,b){a=a.getElementsByAdPiece(b);for(b=0;b<a.length;b++)if(!a[b].href)return!1;return!0};fd=function(a){this.C=new _.$c;this.A=null;this.l=[];this.b=a;this.v=[];this.B=!1;this.g=null};gd=function(a){var b=[a];b=void 0===b?[]:b;_.t.google_logging_queue||(_.t.google_logging_queue=[]);_.t.google_logging_queue.push([10,b]);a=new fd(new pb(a));_.u("adSlot",a,void 0);return a};_.hd=function(){var a=_.t.adSlot;return a?a:(mc.l(536,Error("no adslot"),void 0,void 0),gd(null))};jd=function(a,b,c){cd.call(this,a,b,c,_.hd().b,_.hd().g);for(a=0;a<id.length;a++)bd(this,id[a])};md=function(a,b){var c=kd,d={};if(!b)return null;d[0]=[b];Jb(ld,function(e){c[e]&&(d[e]=_.Aa(_.Mb(2,c[e],b)))});return new jd(d,b,a)};pd=function(a,b,c){b.gqid=nd;b.qqid=od;b.com=a;_.qc("glaurung",b,c)};qd=function(a,b){var c=_.J(b,nb,16);c&&_.I(c,12)&&_.I(b,5)&&Nb(a,{backgroundColor:"transparent",backgroundImage:"none"})};sd=function(a,b,c){_.N(2,"app-icon-link",b)&&(kd[33]="app-icon-link");var d=a.b,e=_.N(1,"adunit",b),f=_.N(1,"ads",b);if(!e||!f)return 1;var g={overflow:"hidden"};0==_.H(d,32,0)?(g.width=_.H(d,2,0)+"px",g.height=_.H(d,3,0)+"px",g.position="absolute",g.top="0",g.left="0"):(g.width="100%",g.height="100%");Nb(e,g);qd(e,d);qd(f,d);try{c(f,a)}catch(m){return _.I(d,13)&&(rd=m),2}c=0;d=qb(d);for(e=0;e<d.length;e++){g=d[e];var h="taw"+_.H(g,2,0);f=_.N(1,h,b);if(!f)return 3;f=md(g,f);if(!f)return 1;var l=_.L.registerAd;l?l(f,h):c=4;h=_.L.initAppPromo;_.I(g,11)&&h&&h(f,a);if(_.I(g,19)&&(g=_.bb(g,33),0<g.length))for(h=0;h<g.length;h++)l=(0,_.y)(jd.prototype.C,f,g[h]),f.l.v.push(l);a.Da(f)}return c};td=function(a,b,c){var d=[];d[0]=[c];d[15]=[b];(b=_.N(1,"abgc"))&&(d[27]=[b]);(b=_.N(1,"cbc"))&&(d[28]=[b]);(b=_.N(1,"cta-button-anchor"))&&(d[4]=[b]);cd.call(this,d,c,a,_.hd().b,_.hd().g);bd(this,15);b&&bd(this,4)};ud=function(a,b){var c={};c[0]=[b];cd.call(this,c,b,a,_.hd().b,_.hd().g)};wd=function(a,b,c){cd.call(this,a,b,c,_.hd().b,_.hd().g);for(a=0;a<vd.length;a++)bd(this,vd[a]);this.listen(4,"mouseover",(0,_.y)(this.H,this,0,"onhoverbg",!1));this.listen(4,"mouseout",(0,_.y)(this.H,this,0,"onhoverbg",!0))};_.aa=[];ha="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};if("function"==typeof Object.setPrototypeOf)xd=Object.setPrototypeOf;else{var yd;a:{var zd={Ya:!0},Ad={};try{Ad.__proto__=zd;yd=Ad.Ya;break a}catch(a){}yd=!1}xd=yd?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}ia=xd;_.la="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;_.ma="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};na("Promise",function(a){function b(g){this.g=0;this.l=void 0;this.b=[];var h=this.v();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}function c(){this.b=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.g=function(g){if(null==this.b){this.b=[];var h=this;this.l(function(){h.A()})}this.b.push(g)};var e=_.la.setTimeout;c.prototype.l=function(g){e(g,0)};c.prototype.A=function(){for(;this.b&&this.b.length;){var g=this.b;this.b=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(m){this.v(m)}}}this.b=null};c.prototype.v=function(g){this.l(function(){throw g;})};b.prototype.v=function(){function g(m){return function(p){l||(l=!0,m.call(h,p))}}var h=this,l=!1;return{resolve:g(this.G),reject:g(this.A)}};b.prototype.G=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.B(g)}};b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(l){this.A(l);return}"function"==typeof h?this.L(h,g):this.B(g)};b.prototype.A=function(g){this.C(2,g)};b.prototype.B=function(g){this.C(1,g)};b.prototype.C=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.l=h;this.D()};b.prototype.D=function(){if(null!=this.b){for(var g=0;g<this.b.length;++g)f.g(this.b[g]);this.b=null}};var f=new c;b.prototype.J=function(g){var h=this.v();g.ya(h.resolve,h.reject)};b.prototype.L=function(g,h){var l=this.v();try{g.call(h,l.resolve,l.reject)}catch(m){l.reject(m)}};b.prototype.then=function(g,h){function l(v,D){return"function"==typeof v?function(C){try{m(v(C))}catch(w){p(w)}}:D}var m,p,r=new b(function(v,D){m=v;p=D});this.ya(l(g,m),l(h,p));return r};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.ya=function(g,h){function l(){switch(m.g){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.g);}}var m=this;null==this.b?f.g(l):this.b.push(l)};b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};b.race=function(g){return new b(function(h,l){for(var m=_.da(g),p=m.next();!p.done;p=m.next())d(p.value).ya(h,l)})};b.all=function(g){var h=_.da(g),l=h.next();return l.done?d([]):new b(function(m,p){function r(C){return function(w){v[C]=w;D--;0==D&&m(v)}}var v=[],D=0;do v.push(void 0),D++,d(l.value).ya(r(v.length-1),p),l=h.next();while(!l.done)})};return b});oa.prototype.toString=function(){return this.b};_.Bd=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new oa("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();_.t=this||self;Cd="closure_uid_"+(1E9*Math.random()>>>0);Dd=0;_.O=Date.now||function(){return+new Date};var Ic;_.ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(_.q(a))return _.q(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.oc=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=_.q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};Ic=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=_.q(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d};_.Ed=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=_.q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};Ea.prototype.Y=!0;Ea.prototype.b=function(){return this.g};Ea.prototype.toString=function(){return"Const{"+this.g+"}"};var Da={},Ca={},Ua=_.A("");var Ha;_.Ia.prototype.Y=!0;_.Ia.prototype.b=function(){return this.l.toString()};_.Ia.prototype.Ga=!0;_.Ia.prototype.g=ba(2);Ha={};_.Ga={};_.Fd=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Na,La;_.B.prototype.Y=!0;_.B.prototype.b=function(){return this.l.toString()};_.B.prototype.Ga=!0;_.B.prototype.g=ba(1);Na=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;La={};_.Ka={};var Pa;a:{var Gd=_.t.navigator;if(Gd){var Hd=Gd.userAgent;if(Hd){Pa=Hd;break a}}Pa=""};_.Ra.prototype.Ga=!0;_.Ra.prototype.g=ba(0);_.Ra.prototype.Y=!0;_.Ra.prototype.b=function(){return this.l.toString()};var Qa={};_.Ta("<!DOCTYPE html>",0);var Lc=_.Ta("",0);_.Ta("<br>",0);_.Id=Ba(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=_.Sa(Lc);return!b.parentElement});Xa[" "]=_.qa;var Kd,Qd;_.Jd=E("Opera");_.Kb=E("Trident")||E("MSIE");Kd=E("Edge");_.Ld=E("Gecko")&&!(-1!=Pa.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge");_.Md=-1!=Pa.toLowerCase().indexOf("webkit")&&!E("Edge");_.Nd=E("Android");_.Od=Wa();_.Pd=E("iPad");a:{var Rd="",Sd=function(){var a=Pa;if(_.Ld)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kd)return/Edge\/([\d\.]+)/.exec(a);if(_.Kb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Md)return/WebKit\/(\S+)/.exec(a);if(_.Jd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Sd&&(Rd=Sd?Sd[1]:"");if(_.Kb){var Td=Za();if(null!=Td&&Td>parseFloat(Rd)){Qd=String(Td);break a}}Qd=Rd}_.Ud=Qd;_.Vd=_.t.document&&_.Kb?Za():void 0;_.Wd=Wa()||E("iPod");_.Xd=E("iPad");_.Yd=E("Android")&&!((E("Chrome")||E("CriOS"))&&!E("Edge")||E("Firefox")||E("FxiOS")||E("Opera")||E("Silk"));var $a="function"==typeof Uint8Array,ab=[];_.z(_.gb,_.F);var fb=[20,33];_.z(_.ib,_.F);_.z(jb,_.F);_.z(_.lb,_.F);_.z(nb,_.F);_.z(pb,_.F);var ob=[1,23];_.M=document;_.L=window;var ld;ld={Lb:0,lc:1,mc:45,nc:46,Zb:48,URL:2,Eb:3,wb:4,kc:5,dc:7,Rb:8,Cb:9,Tb:6,Wb:34,Mb:13,xb:14,Sb:15,Ub:16,Vb:40,hc:47,qc:29,Ib:30,ic:49,$b:17,Fb:18,Kb:19,Jb:20,fc:23,Ab:24,cc:25,bc:26,Bb:27,ac:28,pc:39,oc:31,Hb:32,zb:33,Nb:35,Xb:36,yb:37,Gb:38,Yb:42,ec:43,gc:44,Db:50,Ob:1E3,Pb:1001,Qb:1002};_.Zd=[16,47,49,18,27,28,39];_.rb.prototype.ceil=function(){this.b=Math.ceil(this.b);this.g=Math.ceil(this.g);return this};_.rb.prototype.floor=function(){this.b=Math.floor(this.b);this.g=Math.floor(this.g);return this};_.rb.prototype.round=function(){this.b=Math.round(this.b);this.g=Math.round(this.g);return this};var Bb=Ba(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});_.t.addEventListener("test",null,b)}catch(c){}return a});var yc=/^((market|itms|intent|itms-appss):\/\/)/i;var $d=!!window.google_async_iframe_id,ae=$d&&window.parent||window;_.Fa(_.A("//fonts.googleapis.com/css"));var be=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var ce=null;var fc=_.t.performance,de=!!(fc&&fc.mark&&fc.measure&&fc.clearMarks),dc=Ba(function(){var a;if(a=de){var b;if(null===ce){ce="";try{a="";try{a=_.t.top.location.hash}catch(c){a=_.t.location.hash}a&&(ce=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=ce;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});ec.prototype.start=function(a,b){if(!this.b)return null;var c=ac()||$b();a=new bc(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";fc&&dc()&&fc.mark(b);return a};ec.prototype.end=function(a){if(this.b&&"number"===typeof a.value){var b=ac()||$b();a.duration=b-a.value;b="goog_"+a.label+"_"+a.uniqueId+"_end";fc&&dc()&&fc.mark(b);!this.b||2048<this.events.length||this.events.push(a)}};_.jc.prototype.pinger=ba(3);_.jc.prototype.l=function(a,b,c,d,e){e=e||"jserror";try{var f=new Rb;f.v=!0;Vb(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Ob(b,{message:kc(b)}));b.msg&&Vb(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(this.g)try{this.g(g)}catch(x){}if(d)try{d(g)}catch(x){}b=[g];f.b.push(3);f.g[3]=b;d=_.t;b=[];g=null;do{var h=d;if(yb(h)){var l=h.location.href;g=h.document&&h.document.referrer||null}else l=g,g=null;b.push(new Qb(l||""));try{d=h.parent}catch(x){d=null}}while(d&&h!=d);l=0;for(var m=b.length-1;l<=m;++l)b[l].depth=m-l;h=_.t;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var p=b[m];p.url||(p.url=h.location.ancestorOrigins[m-1]||"",p.Na=!0)}var r=new Qb(_.t.location.href,!1);h=null;var v=b.length-1;for(p=v;0<=p;--p){var D=b[p];!h&&be.test(D.url)&&(h=D);if(D.url&&!D.Na){r=D;break}}D=null;var C=b.length&&b[v].url;0!=r.depth&&C&&(D=b[v]);var w=new Pb(r,D);w.g&&Vb(f,4,"top",w.g.url||"");Vb(f,5,"url",w.b.url||"");Zb(this.v,e,f,!1,c)}catch(x){try{Zb(this.v,e,{context:"ecmserr",rctx:a,msg:kc(x),url:w&&w.b.url},!1,c)}catch(eb){}}return!0};var ic,mc,ee;if($d&&!yb(ae)){var fe="."+_.M.domain;try{for(;2<fe.split(".").length&&!yb(ae);)_.M.domain=fe=fe.substr(fe.indexOf(".")+1),ae=window.parent}catch(a){}yb(ae)||(ae=window)}var cc=ae,hc=new ec;(function(){ic=new Yb;mc=new _.jc;mc.g=function(b){var c=_.L.jerExpIds;if(_.sa(c)&&0!==c.length){var d=b.eid;if(d){c=ea(d.split(",")).concat(ea(c));d={};for(var e=0,f=0;f<c.length;){var g=c[f++];var h=g;h=_.ua(h)?"o"+(h[Cd]||(h[Cd]=++Dd)):(typeof h).charAt(0)+h;Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,c[e++]=g)}c.length=e;b.eid=c.join(",")}else b.eid=c.join(",")}ee&&(b.jc=ee)};"complete"==cc.document.readyState?pc():hc.b&&_.K(cc,"load",function(){pc()});var a=_.M.currentScript;ee=a?a.dataset.jc:""})();vc.prototype.L=function(a,b){this.C=!0;var c=!1;b.target&&(c=_.Lb(b.target,b.button,b.ctrlKey,b.shiftKey,b.metaKey,b.altKey,new _.rb(b.x,b.y)));!a.href||c||Dc(this,a,b)||(zc(this,a),_.L.top.location=a.href)};vc.prototype.J=function(a,b,c,d){if(this.C)this.C=!1;else{d||(d=_.L.event);this.g[c][b].forEach(function(f){f(d)});if(a.href){var e=wc(this,a,d.type);e&&(a.href=e)}"click"==c&&(Ac(this,a,b,d),(d.preventDefault?d.defaultPrevented:!1===d.returnValue)||Ec(this,a,d))}};var Yc;Oc.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.l();return a};var Zc=new Oc(function(){return new Sc},function(a){a.reset()});Pc.prototype.add=function(a,b){var c=Zc.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};Sc.prototype.set=function(a,b){this.b=a;this.g=b;this.next=null};Sc.prototype.reset=function(){this.next=this.g=this.b=null};var Tc,Vc=!1,Qc=new Pc;_.P.prototype.v=!1;_.P.prototype.Ea=ba(4);_.P.prototype.K=ba(6);_.z(_.$c,_.P);_.$c.prototype.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.C;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.C=e+3;d.push(e);return e};_.$c.prototype.G=function(a){var b=this.b[a];b&&(b=this.g[b],0!=this.B?(this.A.push(a),this.b[a+1]=_.qa):(b&&_.za(b,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2]))};_.$c.prototype.D=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];ad(this.b[g+1],this.b[g+2],d)}else{this.B++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.B--,0<this.A.length&&0==this.B)for(;c=this.A.pop();)this.G(c)}}}};_.$c.prototype.K=ba(5);_.k=cd.prototype;_.k.Qa=function(a,b){b=(a=_.H(this.b,22,""))&&b?b[a]:!1;this.l.B=!!b;this.H(0,"app_installed",!b);this.H(0,"rh-ani",b)};_.k.navigationAdPieces=function(){return this.v};_.k.Ba=function(){return!0};_.k.has=function(a){return(a=this.g[a])&&0<a.length};_.k.listen=function(a,b,c){var d=this.g[a];if(d){var e=this.l;c=_.xa(c,a,this);var f=("click"==b||"mousedown"==b)&&e.G[a];e.g[b]||(e.g[b]={});e.g[b][a]||(e.g[b][a]=[]);e.g[b][a].push(c);if(!f)for(a=0;a<d.length;a++)_.K(d[a],b,c)}};_.k.H=function(a,b,c){if(b){a=this.getElementsByAdPiece(a);for(var d=0;d<a.length;d++)c?_.Jc(a[d],b):_.Hc(a[d],b)}};_.k.getElementsByAdPiece=function(a){return this.g[a]?this.g[a]:[]};_.k.creativeConversionUrl=function(){return _.H(this.b,6,"")};_.k.redirectUrl=function(){return _.H(this.b,8,"")};_.k.getIndex=function(){return _.H(this.b,2,0)};_.k.listenOnObject=function(a,b){this.B.subscribe(a,b)};_.k.fireOnObject=function(a,b){this.B.D(a,b)};_.k=fd.prototype;_.k.forEachAd=function(a){(0,_.oc)(this.l,a)};_.k.Da=function(a){this.l.push(a)};_.k.ab=function(a){if(a=_.N(1,a))this.A=a;if(0==this.l.length)_.t.css=null;else{for(a=0;a<this.v.length;++a)this.v[a]();this.B=!0}};_.k.listenOnObject=function(a,b){this.C.subscribe(a,b)};_.k.fireOnObject=function(a,b){this.C.D(a,b)};_.k.registerFinalizeCallback=function(a){this.B?a():this.v.push(a)};_.k.getSerializedAdSlotData=function(){return _.db(this.b)};_.k.getAdsLength=function(){return this.l.length};_.k.getAd=function(a){return 0<=a&&a<this.l.length&&this.l[a].getIndex()==a?this.l[a]:null};_.k.getContainer=function(){return this.A};_.k.openSystemBrowser=function(a){return this.g?(this.g.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0}),!0):!1};_.k.openAttribution=function(a){return this.g?(this.g.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0,useCustomTabs:!0}),!0):!1};ka(jd,cd);jd.prototype.Ba=function(a){return ed(this,a)||4===a};jd.prototype.C=function(a,b){return this.Ba(b)?a:""};var id=[1,2,3,4,8,6,40,33,36,37,38,9];var nd="UNKNOWN",od="UNKNOWN",rd=null,Q={},kd=(Q[1]="title-link",Q[2]="url-link",Q[3]="body-link",Q[4]="button-link",Q[8]="favicon-link",Q[6]="image-link",Q[26]="price",Q[23]="reviews",Q[43]="rating-stars",Q[44]="reviews-count",Q[24]="app-store",Q[25]="promo-headline",Q[33]="app-icon",Q[16]="image-gallery",Q[40]="image-gallery-image-link",Q[36]="logo-link",Q[37]="advertiser-link",Q[38]="call-to-action-link",Q[39]="video",Q[42]="logo",Q[50]="badge-box",Q[9]="ad-background",Q);ka(td,cd);ka(ud,cd);ka(wd,cd);wd.prototype.Ba=function(a){return ed(this,a)||4==a};var R={},ge=(R[1]="rhtitle",R[45]="rhtitleline1",R[46]="rhtitleline2",R[48]="rhlongtitle",R[3]="rhbody",R[2]="rhurl",R[4]="rhbutton",R[8]="rhfavicon",R[14]="rhaddress",R[6]="rhimage",R[34]="rhimagetemplate",R[49]="rh-scrollflow",R[16]="rhimagegallery",R[47]="rhreviewgallery",R[29]="rhviewimagegallery",R[30]="rhcloseimagegalleryview",R[31]="rhtrydemobutton",R[32]="rhclosetrydemoview",R[39]="rhvideo",R[9]="rhbackground",R[13]="rh-icore-empty",R[5]="rhsitelink",R[7]="rhradlink",R[17]="rh-multiframe",R[18]="rh-box-breadcrumbs",R[23]="rhstarratings",R[24]="rhstoreicon",R[25]="rhpromotext",R[26]="rhprice",R[27]="abgc",R[28]="cbc",R[35]="rhdemocountdowntimer",R[36]="rhlogo",R[1001]="rhoverlap-imagegallery",R[1002]="rhoverlap-trydemo",R),vd=[1,45,46,48,2,4,5,7,8,3,9,6,14,15,34,26,24,36];fd.prototype.forEachAd=fd.prototype.forEachAd;fd.prototype.addAd=fd.prototype.Da;fd.prototype.finalize=fd.prototype.ab;_.u("buildAdSlot",gd,void 0);_.u("buildGlaurungAds",function(a,b,c){var d=(new Date).getTime(),e=1,f=!1;rd=null;try{var g=a.b;f=_.I(g,13);nd=_.H(g,8,"");od=_.H(g,7,"");e=sd(a,b,c)}catch(h){f&&(rd=h),e=1}a={};pd("bridge",(a.r=e,a.d=(new Date).getTime()-d,a));return e},void 0);_.u("glaurungError",function(){return rd},void 0);_.u("glaurungBridge.log",pd,void 0);_.u("glaurungBridge.getAdPieceClassName",function(a){return kd[a]},void 0);_.u("buildImageAd",function(a,b){if(0>b||b>=qb(a.b).length)a=null;else{a=qb(a.b)[b];b=_.N(1,"google_image_div");var c=_.N(1,"aw0");a=b&&c?new td(a,c,b):null}return a},void 0);_.u("buildRichmediaAd",function(a,b){return 0>b||b>=qb(a.b).length?null:new ud(qb(a.b)[b],_.M.body)},void 0);_.u("buildTextAd",function(a,b){var c=a.b;if(!(0>b||b>=qb(c).length)){if(0>b||b>=qb(a.b).length)var d=null;else{d=qb(a.b)[b];var e=_.N(1,"taw"+b);if(e){var f={0:[e]},g;for(g in ld){var h=ld[g],l=ge[h];l&&(f[h]=_.Aa(_.Mb(2,l,e)))}d=new wd(f,e,d)}else d=null}d&&(_.L.registerAd&&_.L.registerAd(d,"taw"+b),a.Da(d),_.I(qb(c)[b],11)&&_.L.initAppPromo&&_.L.initAppPromo(d,a))}},void 0);})(window.hydra=window.hydra||{});
